const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const styles = fs.readFileSync(path.join(root, "styles.css"), "utf8");
const appSource = fs.readFileSync(path.join(root, "app.js"), "utf8");
const match = appSource.match(/const fonts = (\[[\s\S]*?\]);/);

if (!match) throw new Error("Could not find the fonts array in app.js");

const fonts = vm.runInNewContext(match[1]);

function fontUrlFor(cssFamily) {
  const escaped = cssFamily.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const familyMatch = styles.match(new RegExp(`font-family:\\s*"${escaped}"[\\s\\S]*?src:\\s*url\\("([^"]+)"\\)`, "i"));
  return familyMatch ? familyMatch[1] : null;
}

function fileNameFromUrl(url) {
  const pathname = new URL(url).pathname;
  return decodeURIComponent(pathname.split("/").pop()).replace(/[<>:"/\\|?*]/g, "-");
}

async function download(url, target) {
  if (fs.existsSync(target)) {
    console.log(`exists ${path.relative(root, target)}`);
    return;
  }
  const response = await fetch(url);
  if (!response.ok) throw new Error(`Could not download ${url} (${response.status})`);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, Buffer.from(await response.arrayBuffer()));
  console.log(`saved ${path.relative(root, target)}`);
}

async function main() {
  for (const font of fonts) {
    const url = fontUrlFor(font.family || font.displayName);
    if (!url) {
      console.warn(`missing font-face URL for ${font.displayName}`);
      continue;
    }
    const target = path.join(root, "registry", "fonts", font.name, "files", fileNameFromUrl(url));
    await download(url, target);
  }
  console.log("Font mirroring complete. Add license text files before accepting external submissions.");
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
