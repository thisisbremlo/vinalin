const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const fontsDir = path.join(root, "registry", "fonts");
const appPath = path.join(root, "app.js");
const outDir = path.join(root, "r");

if (!fs.existsSync(fontsDir)) {
  throw new Error("registry/fonts/ directory not found");
}

fs.mkdirSync(outDir, { recursive: true });

// ── 1. Read all font.json files ─────────────────────────────────────────────

const fontFolders = fs.readdirSync(fontsDir).filter((name) => {
  const stat = fs.statSync(path.join(fontsDir, name));
  return stat.isDirectory() && fs.existsSync(path.join(fontsDir, name, "font.json"));
});

const fonts = fontFolders.map((folder) => {
  const json = JSON.parse(fs.readFileSync(path.join(fontsDir, folder, "font.json"), "utf8"));
  if (json.name !== folder) {
    console.warn(`Warning: folder "${folder}" has font.json with name "${json.name}"`);
  }
  return json;
});

// ── 2. Sync font.json → app.js fonts array ──────────────────────────────────

function fontToJsObject(font) {
  const fields = [
    `name: ${JSON.stringify(font.name)}`,
    `displayName: ${JSON.stringify(font.displayName)}`,
    `version: ${JSON.stringify(font.version)}`,
    `category: ${JSON.stringify(font.category)}`,
    `designer: ${JSON.stringify(font.designer)}`,
    `license: ${JSON.stringify(font.license?.type || font.license || "OFL-1.1")}`,
    `licenseName: ${JSON.stringify(font.licenseName || "")}`,
    `copyrightNotice: ${JSON.stringify(font.copyrightNotice || "")}`,
    `source: ${JSON.stringify(font.source)}`,
    `variable: ${JSON.stringify(Boolean(font.variable))}`,
    `weights: ${JSON.stringify(font.weights)}`,
    `styles: ${JSON.stringify(font.styles)}`,
    `fallback: ${JSON.stringify(font.fallback)}`,
    `previewText: ${JSON.stringify(font.previewText)}`,
    `description: ${JSON.stringify(font.description)}`,
    `submittedBy: ${JSON.stringify(font.submittedBy?.github || font.submittedBy || "unknown")}`,
    `family: ${JSON.stringify(font.family || font.displayName)}`,
  ];
  return `  { ${fields.join(", ")} }`;
}

const jsArray = `const fonts = [\n${fonts.map(fontToJsObject).join(",\n")}\n];\n`;

let appSource = fs.readFileSync(appPath, "utf8");
const startMarker = "const fonts = [";
const endMarker = "];";
const startIdx = appSource.indexOf(startMarker);
const endIdx = appSource.indexOf(endMarker, startIdx + startMarker.length);

if (startIdx !== -1 && endIdx !== -1) {
  const newSource = appSource.slice(0, startIdx) + jsArray.trimEnd() + "\n" + appSource.slice(endIdx + endMarker.length);
  fs.writeFileSync(appPath, newSource);
  console.log(`Synced ${fonts.length} fonts to app.js`);
} else {
  console.warn("Warning: could not find fonts array in app.js, skipping sync");
}

// ── 3. Generate r/registry.json ─────────────────────────────────────────────

function licenseObject(font) {
  if (font.license && typeof font.license === "object") return font.license;
  const filesDir = path.join(root, "registry", "fonts", font.name, "files");
  const licenseFile = ["OFL.txt", "LICENSE.txt", "LICENSE"].find((file) => fs.existsSync(path.join(filesDir, file)));
  return {
    type: font.license || "OFL-1.1",
    url: licenseFile ? `/r/fonts/${font.name}/${licenseFile}` : font.source,
  };
}

function filesFor(font) {
  const filesDir = path.join(root, "registry", "fonts", font.name, "files");
  if (!fs.existsSync(filesDir)) return [];
  return fs.readdirSync(filesDir)
    .filter((file) => file.toLowerCase().endsWith(".woff2"))
    .sort()
    .map((file) => {
      const weightMatch = file.match(/-(\d{3})(?:-(\d{3}))?(?:-italic)?\.woff2$/i);
      const weight = weightMatch
        ? weightMatch[2] ? `${weightMatch[1]} ${weightMatch[2]}` : weightMatch[1]
        : font.variable ? `${Math.min(...font.weights)} ${Math.max(...font.weights)}` : String(font.weights[0] || 400);
      return {
        path: `/r/fonts/${font.name}/${file}`,
        weight,
        style: file.toLowerCase().includes("italic") ? "italic" : "normal",
      };
    });
}

function registryFont(font) {
  return {
    schemaVersion: 1,
    name: font.name,
    displayName: font.displayName,
    cssFamily: font.family || font.displayName,
    version: font.version,
    category: font.category,
    designer: font.designer,
    license: licenseObject(font),
    licenseName: font.licenseName || "",
    copyrightNotice: font.copyrightNotice || "",
    redistributionAllowed: Boolean(font.redistributionAllowed),
    source: font.source,
    variable: Boolean(font.variable),
    axes: font.variable ? { wght: [Math.min(...font.weights), Math.max(...font.weights)] } : {},
    weights: font.weights,
    styles: font.styles,
    fallback: font.fallback,
    previewText: font.previewText,
    description: font.description,
    submittedBy: { github: font.submittedBy?.github || font.submittedBy || "unknown" },
    files: filesFor(font),
  };
}

function copyFontFiles(font) {
  const sourceDir = path.join(root, "registry", "fonts", font.name, "files");
  if (!fs.existsSync(sourceDir)) return;
  const targetDir = path.join(outDir, "fonts", font.name);
  fs.mkdirSync(targetDir, { recursive: true });
  fs.readdirSync(sourceDir).forEach((file) => {
    fs.copyFileSync(path.join(sourceDir, file), path.join(targetDir, file));
  });
}

const registry = {
  name: "vinalin registry",
  schemaVersion: 1,
  generatedAt: new Date().toISOString(),
  fonts: fonts.map(registryFont),
};

fs.writeFileSync(path.join(outDir, "registry.json"), `${JSON.stringify(registry, null, 2)}\n`);
registry.fonts.forEach((font) => {
  fs.writeFileSync(path.join(outDir, `${font.name}.json`), `${JSON.stringify(font, null, 2)}\n`);
  copyFontFiles(font);
});

console.log(`Built ${registry.fonts.length} registry entries.`);
