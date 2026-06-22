const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(root, "app.js"), "utf8");
const match = appSource.match(/const fonts = (\[[\s\S]*?\]);/);

if (!match) {
  throw new Error("Could not find the fonts array in app.js");
}

const fonts = vm.runInNewContext(match[1]);
const outDir = path.join(root, "r");
fs.mkdirSync(outDir, { recursive: true });

function licenseObject(font) {
  if (typeof font.license === "object") return font.license;
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
    source: font.source,
    variable: Boolean(font.variable),
    axes: font.variable ? { wght: [Math.min(...font.weights), Math.max(...font.weights)] } : {},
    weights: font.weights,
    styles: font.styles,
    fallback: font.fallback,
    previewText: font.previewText,
    description: font.description,
    submittedBy: { github: font.submittedBy || "unknown" },
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
  name: "fontlr registry",
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
