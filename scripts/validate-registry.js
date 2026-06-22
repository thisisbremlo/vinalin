const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const registryPath = path.join(root, "r", "registry.json");
const allowedCategories = new Set(["sans", "serif", "mono", "display", "handwriting"]);
const allowedStyles = new Set(["normal", "italic"]);
const errors = [];

function fail(scope, message) {
  errors.push(`${scope}: ${message}`);
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

if (!fs.existsSync(registryPath)) {
  fail("registry", "missing r/registry.json. Run npm run build:registry.");
} else {
  const registry = readJson(registryPath);
  if (!Array.isArray(registry.fonts)) fail("registry", "fonts must be an array");
  const seen = new Set();

  for (const font of registry.fonts || []) {
    const scope = font.name || "unknown font";
    if (!font.name || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(font.name)) fail(scope, "name must be a kebab-case slug");
    if (seen.has(font.name)) fail(scope, "duplicate font slug");
    seen.add(font.name);
    if (!font.displayName) fail(scope, "displayName is required");
    if (!allowedCategories.has(font.category)) fail(scope, `category must be one of ${[...allowedCategories].join(", ")}`);
    if (!font.designer) fail(scope, "designer is required");
    if (!font.license || !font.license.type) fail(scope, "license.type is required");
    if (!font.source || !/^https?:\/\//.test(font.source)) fail(scope, "source must be an http(s) URL");
    if (!Array.isArray(font.weights) || !font.weights.length) fail(scope, "weights must be a non-empty array");
    if (!Array.isArray(font.styles) || !font.styles.length) fail(scope, "styles must be a non-empty array");
    (font.styles || []).forEach((style) => {
      if (!allowedStyles.has(style)) fail(scope, `unsupported style "${style}"`);
    });
    if (!font.previewText) fail(scope, "previewText is required");
    if (!font.description) fail(scope, "description is required");
    if (!font.submittedBy || !font.submittedBy.github) fail(scope, "submittedBy.github is required");
    if (!Array.isArray(font.files) || !font.files.length) fail(scope, "files must contain at least one downloadable .woff2 asset");

    if (!font.license.url || !font.license.url.startsWith(`/r/fonts/${font.name}/`)) {
      fail(scope, "license.url must point to the bundled license file");
    } else {
      const licensePath = path.join(root, font.license.url.replace(/^\//, ""));
      if (!fs.existsSync(licensePath)) fail(scope, `missing bundled license ${font.license.url}`);
    }

    for (const file of font.files || []) {
      if (!file.path || !file.path.endsWith(".woff2")) fail(scope, `file path must point to .woff2 (${file.path || "missing"})`);
      if (!file.weight) fail(scope, `file ${file.path} needs weight`);
      if (!allowedStyles.has(file.style)) fail(scope, `file ${file.path} needs style normal or italic`);
      if (file.path) {
        const assetPath = path.join(root, file.path.replace(/^\//, ""));
        if (!fs.existsSync(assetPath)) fail(scope, `missing downloadable asset ${file.path}`);
      }
    }

    const singlePath = path.join(root, "r", `${font.name}.json`);
    if (!fs.existsSync(singlePath)) fail(scope, `missing r/${font.name}.json`);
  }
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log("Registry validation passed.");
