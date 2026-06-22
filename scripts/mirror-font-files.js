const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const chromeUserAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/141.0.0.0 Safari/537.36";

const googleFonts = {
  fraunces: { query: "Fraunces:ital,wght@0,100..900;1,100..900", licenseDir: "fraunces" },
  geist: { query: "Geist:wght@100..900", licenseDir: "geist" },
  "geist-mono": { query: "Geist Mono:wght@100..900", licenseDir: "geistmono" },
  inter: { query: "Inter:ital,wght@0,100..900;1,100..900", licenseDir: "inter" },
  "jetbrains-mono": { query: "JetBrains Mono:ital,wght@0,100..800;1,100..800", licenseDir: "jetbrainsmono" },
  manrope: { query: "Manrope:wght@200..800", licenseDir: "manrope" },
  "momo-signature": { query: "Momo Signature", licenseDir: "momosignature" },
  parkinsans: { query: "Parkinsans:wght@300..800", licenseDir: "parkinsans" },
  "space-grotesk": { query: "Space Grotesk:wght@300..700", licenseDir: "spacegrotesk" },
  "tiktok-sans": { query: "TikTok Sans:wght@300..900", licenseDir: "tiktoksans" },
  "zalando-sans": { query: "Zalando Sans:wght@200..900", licenseDir: "zalandosans" },
};

const fontshareFonts = {
  "cabinet-grotesk": "https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@100,200,300,400,500,700,800,900&display=swap",
  "clash-grotesk": "https://api.fontshare.com/v2/css?f[]=clash-grotesk@200,300,400,500,600,700&display=swap",
  tanker: "https://api.fontshare.com/v2/css?f[]=tanker@400&display=swap",
};

const directFonts = {
  "departure-mono": {
    files: [{ url: "https://raw.githubusercontent.com/rektdeckard/departure-mono/main/public/assets/DepartureMono-Regular.woff2", name: "departure-mono-400.woff2" }],
    license: "https://raw.githubusercontent.com/rektdeckard/departure-mono/main/LICENSE",
  },
  "hs-lunaobscura": {
    files: [{ url: "https://lunaobscura.headspace.ru/hs_lunaobscura/HS_LunaObscura.woff2", name: "hs-lunaobscura-400.woff2" }],
    license: "https://lunaobscura.headspace.ru/hs_lunaobscura/LICENSE.txt",
  },
  "neutral-sans": {
    files: [{ url: "https://raw.githubusercontent.com/besignco/Neutral-Sans/main/VF/NeutralSansVF.woff2", name: "neutral-sans-400-900.woff2" }],
    license: "https://raw.githubusercontent.com/besignco/Neutral-Sans/main/LICENSE",
  },
};

async function fetchOk(url, options = {}) {
  const response = await fetch(url, options);
  if (!response.ok) throw new Error(`Could not download ${url} (${response.status})`);
  return response;
}

async function save(url, target, options = {}) {
  if (fs.existsSync(target)) {
    console.log(`exists ${path.relative(root, target)}`);
    return;
  }
  const response = await fetchOk(url, options);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, Buffer.from(await response.arrayBuffer()));
  console.log(`saved ${path.relative(root, target)}`);
}

function fontFaceFiles(css, slug, latinOnly) {
  const files = [];
  const facePattern = /(?:\/\*\s*([^*]+?)\s*\*\/\s*)?@font-face\s*\{([\s\S]*?)\}/gi;
  let match;
  while ((match = facePattern.exec(css))) {
    const subset = (match[1] || "").trim().toLowerCase();
    if (latinOnly && subset && subset !== "latin") continue;
    const body = match[2];
    const url = body.match(/url\(['"]?([^)'"]+\.woff2)['"]?\)/i)?.[1];
    if (!url) continue;
    const weight = body.match(/font-weight:\s*([^;]+)/i)?.[1].trim() || "400";
    const style = body.match(/font-style:\s*([^;]+)/i)?.[1].trim() || "normal";
    const safeWeight = weight.replace(/\s+/g, "-");
    files.push({
      url: url.startsWith("//") ? `https:${url}` : url,
      name: `${slug}-${safeWeight}${style === "normal" ? "" : `-${style}`}.woff2`,
    });
  }
  return [...new Map(files.map((file) => [file.name, file])).values()];
}

async function mirrorGoogle(slug, config) {
  const params = new URLSearchParams({ family: config.query, display: "swap" });
  const cssUrl = `https://fonts.googleapis.com/css2?${params}`;
  const css = await (await fetchOk(cssUrl, { headers: { "User-Agent": chromeUserAgent } })).text();
  const files = fontFaceFiles(css, slug, true);
  if (!files.length) throw new Error(`Google Fonts returned no WOFF2 files for ${slug}`);
  const dir = path.join(root, "registry", "fonts", slug, "files");
  for (const file of files) await save(file.url, path.join(dir, file.name));
  await save(`https://raw.githubusercontent.com/google/fonts/main/ofl/${config.licenseDir}/OFL.txt`, path.join(dir, "OFL.txt"));
}

async function mirrorFontshare(slug, cssUrl) {
  const css = await (await fetchOk(cssUrl)).text();
  const files = fontFaceFiles(css, slug, false);
  if (!files.length) throw new Error(`Fontshare returned no WOFF2 files for ${slug}`);
  const dir = path.join(root, "registry", "fonts", slug, "files");
  for (const file of files) await save(file.url, path.join(dir, file.name));
  const notice = `Fontshare Free Font License\n\nThis font is distributed under the Fontshare Free Font License.\nRead the current license terms at:\nhttps://www.fontshare.com/licenses/itf-ffl\n`;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "LICENSE.txt"), notice);
  console.log(`saved ${path.relative(root, path.join(dir, "LICENSE.txt"))}`);
}

async function mirrorDirect(slug, config) {
  const dir = path.join(root, "registry", "fonts", slug, "files");
  for (const file of config.files) await save(file.url, path.join(dir, file.name));
  await save(config.license, path.join(dir, "OFL.txt"));
}

async function main() {
  for (const [slug, config] of Object.entries(googleFonts)) await mirrorGoogle(slug, config);
  for (const [slug, cssUrl] of Object.entries(fontshareFonts)) await mirrorFontshare(slug, cssUrl);
  for (const [slug, config] of Object.entries(directFonts)) await mirrorDirect(slug, config);
  console.log("Font files and license texts mirrored for every catalog family.");
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
