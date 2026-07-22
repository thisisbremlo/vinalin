#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const DEFAULT_REGISTRY = process.env.VINALIN_REGISTRY_URL || "https://raw.githubusercontent.com/thisisbremlo/vinalin/main/r/registry.json";

function usage() {
  console.log(`vinalin

Usage:
  vinalin list [--registry <url-or-path>]
  vinalin add <name> [--registry <url-or-path>] [--dir <path>] [--force]

Examples:
  npx @bremlo/vinalin add inter
  npx @bremlo/vinalin add inter --registry ./r/registry.json
  VINALIN_REGISTRY_URL=https://example.com/r/registry.json npx @bremlo/vinalin list`);
}

function readFlag(args, name) {
  const index = args.indexOf(name);
  if (index === -1) return null;
  return args[index + 1] || null;
}

function hasFlag(args, name) {
  return args.includes(name);
}

async function readJson(source) {
  if (/^https?:\/\//.test(source)) {
    const response = await fetch(source);
    if (!response.ok) {
      const hint =
        response.status === 404
          ? " The default registry must be public on GitHub (thisisbremlo/vinalin), or pass --registry ./r/registry.json for local installs."
          : "";
      throw new Error(`Could not read ${source} (${response.status}).${hint}`);
    }
    return response.json();
  }
  const absolute = path.resolve(source);
  return JSON.parse(fs.readFileSync(absolute, "utf8"));
}

function registryBase(source) {
  if (/^https?:\/\//.test(source)) return source.replace(/\/registry\.json$/, "");
  return path.dirname(path.resolve(source));
}

function resolveFileUrl(registrySource, filePath) {
  if (/^https?:\/\//.test(filePath)) return filePath;
  const cleanPath = filePath.replace(/^\/?r\//, "").replace(/^\/+/, "");
  const base = registryBase(registrySource).replace(/\/$/, "");
  if (/^https?:\/\//.test(base)) return `${base}/${cleanPath}`;
  return path.join(base, cleanPath);
}

async function readBinary(source) {
  if (/^https?:\/\//.test(source)) {
    const response = await fetch(source);
    if (!response.ok) throw new Error(`Could not download ${source} (${response.status})`);
    return Buffer.from(await response.arrayBuffer());
  }
  return fs.readFileSync(path.resolve(source));
}

function detectTarget(root, customDir) {
  if (customDir) {
    return {
      kind: "custom",
      fontDir: path.resolve(root, customDir),
      cssPath: path.resolve(root, customDir, "vinalin.css"),
    };
  }

  const packagePath = path.join(root, "package.json");
  const packageJson = fs.existsSync(packagePath) ? JSON.parse(fs.readFileSync(packagePath, "utf8")) : {};
  const deps = { ...(packageJson.dependencies || {}), ...(packageJson.devDependencies || {}) };
  const usesNext = Boolean(deps.next);

  if (usesNext || fs.existsSync(path.join(root, "app"))) {
    return {
      kind: "next",
      fontDir: path.join(root, "app", "fonts"),
      moduleDir: path.join(root, "app", "fonts"),
    };
  }

  return {
    kind: "css",
    fontDir: path.join(root, "public", "fonts"),
    cssDir: path.join(root, "src", "styles", "fonts"),
  };
}

function styleSuffix(style) {
  return style && style !== "normal" ? `-${style}` : "";
}

function writeFileSafe(filePath, data, force) {
  if (fs.existsSync(filePath) && !force) {
    throw new Error(`${path.relative(process.cwd(), filePath)} already exists. Use --force to overwrite.`);
  }
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, data);
}

function cssFor(font, fileNames) {
  return font.files.map((file, index) => {
    const family = font.cssFamily || font.displayName;
    const weight = file.weight || "400";
    const style = file.style || "normal";
    return `@font-face {
  font-family: "${family}";
  src: url("./${fileNames[index]}") format("woff2");
  font-weight: ${weight};
  font-style: ${style};
  font-display: swap;
}`;
  }).join("\n\n");
}

function nextModuleFor(font, fileNames) {
  const exportName = font.name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase()).replace(/[^a-zA-Z0-9_$]/g, "");
  const sources = font.files.map((file, index) => {
    const weight = String(file.weight || "400").includes(" ") ? undefined : String(file.weight || "400");
    const style = file.style || "normal";
    const weightLine = weight ? `, weight: "${weight}"` : "";
    return `    { path: "./${font.name}/${fileNames[index]}"${weightLine}, style: "${style}" }`;
  }).join(",\n");
  return `import localFont from "next/font/local";

export const ${exportName} = localFont({
  src: [
${sources}
  ],
  variable: "--font-${font.name}",
  display: "swap",
});
`;
}

async function listFonts(registrySource) {
  const registry = await readJson(registrySource);
  registry.fonts.forEach((font) => {
    console.log(`${font.name.padEnd(20)} ${font.displayName}`);
  });
}

async function addFont(name, registrySource, options) {
  const registry = await readJson(registrySource);
  const font = registry.fonts.find((item) => item.name === name);
  if (!font) throw new Error(`No font named "${name}" in registry.`);
  if (!font.files || !font.files.length) {
    throw new Error(`${font.displayName} has metadata but no .woff2 files yet. Add files under registry/fonts/${font.name}/files and rebuild the registry.`);
  }

  const root = process.cwd();
  const target = detectTarget(root, options.dir);
  const familyDir = path.join(target.fontDir, font.name);
  const fileNames = font.files.map((file, index) => {
    const weight = String(file.weight || index + 1).replace(/\s+/g, "-");
    return `${font.name}-${weight}${styleSuffix(file.style)}.woff2`;
  });

  for (let index = 0; index < font.files.length; index += 1) {
    const source = resolveFileUrl(registrySource, font.files[index].path);
    const bytes = await readBinary(source);
    writeFileSafe(path.join(familyDir, fileNames[index]), bytes, options.force);
  }

  const licenseUrl = font.license && font.license.url ? font.license.url : font.licenseUrl;
  if (licenseUrl) {
    try {
      const license = await readBinary(resolveFileUrl(registrySource, licenseUrl));
      writeFileSafe(path.join(familyDir, "LICENSE.txt"), license, true);
    } catch {
      // License URLs can be external pages. The registry validator still requires license metadata.
    }
  }

  if (target.kind === "next") {
    writeFileSafe(path.join(target.moduleDir, `${font.name}.ts`), nextModuleFor(font, fileNames), options.force);
    console.log(`Installed ${font.displayName} in app/fonts/${font.name}/`);
    console.log(`Import it from ./fonts/${font.name}`);
    return;
  }

  const css = cssFor(font, fileNames);
  const cssPath = target.kind === "custom" ? target.cssPath : path.join(target.cssDir, `${font.name}.css`);
  writeFileSafe(cssPath, css, options.force);
  console.log(`Installed ${font.displayName} in ${path.relative(root, familyDir)}`);
  console.log(`Import ${path.relative(root, cssPath).replace(/\\/g, "/")} and use font-family: "${font.cssFamily || font.displayName}";`);
}

async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  const registrySource = readFlag(args, "--registry") || DEFAULT_REGISTRY;
  const dir = readFlag(args, "--dir");
  const force = hasFlag(args, "--force");

  if (!command || command === "--help" || command === "-h") {
    usage();
    return;
  }

  if (command === "list") {
    await listFonts(registrySource);
    return;
  }

  if (command === "add") {
    const name = args[1];
    if (!name || name.startsWith("--")) throw new Error("Missing font name.");
    await addFont(name, registrySource, { dir, force });
    return;
  }

  throw new Error(`Unknown command "${command}".`);
}

main().catch((error) => {
  console.error(`vinalin: ${error.message}`);
  process.exitCode = 1;
});
