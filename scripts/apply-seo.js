const fs = require("fs");
const path = require("path");

const SITE = "https://vinalin.eu";
const DEFAULT_DESC = "A curated open font library for founders, developers, and designers.";

const PAGE_META = {
  "index.html": {
    path: "/",
    title: "vinalin - Curated open font library for founders, developers & designers",
    description:
      "A curated open font library for founders, developers, and designers. Discover 17 production-ready open-source font families, install commands, pairings, and licenses.",
    ogType: "website",
    pageType: "home",
  },
  "docs/index.html": {
    path: "/docs",
    title: "Docs - vinalin",
    description:
      "Learn how to install and use the vinalin CLI and font library. Quick start, commands, registry format, and troubleshooting.",
    ogType: "article",
    pageType: "inner",
  },
  "pairing/index.html": {
    path: "/pairing",
    title: "Font Pairing Lab - vinalin",
    description:
      "Find matching headline, body, and accent fonts with the vinalin pairing lab. Build font systems for interfaces, brands, and docs.",
    ogType: "website",
    pageType: "inner",
  },
  "submit/index.html": {
    path: "/submit",
    title: "Submit a Font - vinalin",
    description:
      "Submit an open-source font to the vinalin library. Learn the license requirements, metadata format, and review process.",
    ogType: "article",
    pageType: "inner",
  },
  "donors/index.html": {
    path: "/donors",
    title: "Donors - vinalin",
    description:
      "Meet the supporters keeping vinalin open. Sponsor or contribute to the curated open font library.",
    ogType: "website",
    pageType: "inner",
  },
  "licenses/index.html": {
    path: "/licenses",
    title: "Font Licenses - vinalin",
    description:
      "Browse the open licenses for every font in the vinalin library. OFL 1.1 and Fontshare Free font licenses.",
    ogType: "article",
    pageType: "inner",
  },
  "legal-notice/index.html": {
    path: "/legal-notice",
    title: "Legal Notice - vinalin",
    description:
      "Legal notice, ownership, and disclaimer for the vinalin open font library website.",
    ogType: "article",
    pageType: "inner",
  },
  "privacy/index.html": {
    path: "/privacy",
    title: "Privacy Policy - vinalin",
    description:
      "Privacy policy for vinalin. Learn what data is collected, how it is used, and your rights.",
    ogType: "article",
    pageType: "inner",
  },
};

const FONT_META = {
  "cabinet-grotesk": { displayName: "Cabinet Grotesk", designer: "Indian Type Foundry", license: "Fontshare Free Font License", category: "sans" },
  "clash-grotesk": { displayName: "Clash Grotesk", designer: "Indian Type Foundry", license: "Fontshare Free Font License", category: "sans" },
  "departure-mono": { displayName: "Departure Mono", designer: "Helena Zhang", license: "OFL-1.1", category: "mono" },
  fraunces: { displayName: "Fraunces", designer: "Undercase Type", license: "OFL-1.1", category: "serif" },
  geist: { displayName: "Geist", designer: "Geist Type", license: "OFL-1.1", category: "sans" },
  "geist-mono": { displayName: "Geist Mono", designer: "Geist Type", license: "OFL-1.1", category: "mono" },
  "hs-lunaobscura": { displayName: "HS LunaObscura", designer: "Headspace Agency", license: "OFL-1.1", category: "display" },
  inter: { displayName: "Inter", designer: "Rasmus Andersson", license: "OFL-1.1", category: "sans" },
  "jetbrains-mono": { displayName: "JetBrains Mono", designer: "JetBrains", license: "OFL-1.1", category: "mono" },
  manrope: { displayName: "Manrope", designer: "Mikhail Sharanda", license: "OFL-1.1", category: "sans" },
  "momo-signature": { displayName: "Momo Signature", designer: "M - N Associates", license: "OFL-1.1", category: "handwriting" },
  "neutral-sans": { displayName: "Neutral Sans", designer: "Barry Shawn", license: "OFL-1.1", category: "sans" },
  parkinsans: { displayName: "Parkinsans", designer: "Red Stone", license: "OFL-1.1", category: "sans" },
  "space-grotesk": { displayName: "Space Grotesk", designer: "Florian Karsten", license: "OFL-1.1", category: "display" },
  tanker: { displayName: "Tanker", designer: "Indian Type Foundry", license: "Fontshare Free Font License", category: "display" },
  "tiktok-sans": { displayName: "TikTok Sans", designer: "TikTok Inc.", license: "OFL-1.1", category: "sans" },
  "zalando-sans": { displayName: "Zalando Sans", designer: "Jakob Ekelund / KH Type", license: "OFL-1.1", category: "sans" },
};

const FONT_DESCRIPTIONS = {
  "cabinet-grotesk": "A clean, geometric grotesque sans-serif spanning Thin to Black, suited to both expressive headlines and functional body text.",
  "clash-grotesk": "A contemporary grotesque sans-serif with sturdy, slightly condensed letterforms, built for bold headlines and clean interface text.",
  "departure-mono": "A pixel-conscious monospace typeface with support for Latin, Greek, small caps, old-style numerals, fractions, and selected symbols.",
  fraunces: "A display serif inspired by early 20th century typefaces, with optical sizing, softness, and wonk axes.",
  geist: "A Swiss-inspired sans-serif built for legibility and precision for the modern web.",
  "geist-mono": "The monospace companion to Geist. Clean, precise, and made for code.",
  "hs-lunaobscura": "An industrial display typeface for sci-fi, cyberpunk, dystopian interfaces, posters, navigation, and UI mockups.",
  inter: "A typeface carefully crafted and designed for computer screens. The de-facto standard for product interfaces.",
  "jetbrains-mono": "A typeface for developers. Increased x-height, code ligatures, and 145 languages supported.",
  manrope: "An open-source modern sans-serif. Geometric yet warm, great for both display and body text.",
  "momo-signature": "A handwritten signature-inspired typeface designed to add a personal, trusted, and individual tone.",
  "neutral-sans": "A modern humanist sans-serif with rounded details, strong readability, variable weight support, and multilingual coverage.",
  parkinsans: "A geometric sans-serif designed for Parkinson's UK, balancing energetic display character with accessible short-form reading.",
  "space-grotesk": "A proportional sans-serif derived from Space Mono, with retro-futuristic details that shine at display sizes.",
  tanker: "A high-contrast, ultra-bold display sans-serif with tightly packed letterforms, built for impactful headlines and posters.",
  "tiktok-sans": "A modern sans-serif typeface from TikTok, built for clear brand expression across digital interfaces and communication.",
  "zalando-sans": "A flexible grotesque sans-serif developed for Zalando, combining clarity, expressive range, and brand personality through variable axes.",
};

function escapeHtml(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function jsonLdScript(content) {
  return `<script type="application/ld+json">\n${JSON.stringify(content, null, 2)}\n</script>`;
}

function organizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${SITE}/#organization`,
    name: "vinalin",
    url: `${SITE}/`,
    logo: `${SITE}/favicon/favicon-96x96.png`,
    sameAs: ["https://github.com/thisisbremlo/vinalin"],
  };
}

function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${SITE}/#website`,
    name: "vinalin",
    url: `${SITE}/`,
    description:
      "A curated open font library for founders, developers, and designers.",
    publisher: { "@id": `${SITE}/#organization` },
  };
}

function buildJsonLd(pageType, canonical, title, description, font) {
  const graph = [websiteSchema(), organizationSchema()];

  if (pageType === "home") {
    graph.push({
      "@type": "SoftwareApplication",
      name: "vinalin CLI",
      applicationCategory: "DeveloperApplication",
      operatingSystem: "Any",
      softwareVersion: "0.1.0",
      offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
      downloadUrl: "https://github.com/thisisbremlo/vinalin",
      url: `${SITE}/`,
    });
  } else if (font) {
    graph.push({
      "@type": "WebPage",
      "@id": canonical,
      url: canonical,
      name: title,
      description,
      isPartOf: { "@id": `${SITE}/#website` },
      about: {
        "@type": "CreativeWork",
        name: font.displayName,
        creator: { "@type": "Organization", name: font.designer },
        license: font.license,
        url: canonical,
      },
    });
  } else {
    graph.push({
      "@type": "WebPage",
      "@id": canonical,
      url: canonical,
      name: title,
      description,
      isPartOf: { "@id": `${SITE}/#website` },
    });
  }

  return jsonLdScript({ "@context": "https://schema.org", "@graph": graph });
}

function buildHead(filePath) {
  const relative = path.relative(process.cwd(), filePath).replace(/\\/g, "/");
  let meta = PAGE_META[relative];
  let font = null;

  if (!meta && relative.startsWith("fonts/")) {
    const slug = path.basename(path.dirname(relative));
    const fontInfo = FONT_META[slug];
    if (fontInfo) {
      font = { ...fontInfo, slug };
      meta = {
        path: `/fonts/${slug}`,
        title: `${fontInfo.displayName} - vinalin`,
        description: FONT_DESCRIPTIONS[slug] || DEFAULT_DESC,
        ogType: "article",
        pageType: "font",
      };
    }
  }

  if (!meta) {
    console.warn(`Skipping unmapped page: ${relative}`);
    return null;
  }

  const canonical = `${SITE}${meta.path}`;
  const image = `${SITE}/favicon/web-app-manifest-512x512.png`;

  const ld = buildJsonLd(meta.pageType, canonical, meta.title, meta.description, font);

  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${escapeHtml(meta.title)}</title>
    <meta name="description" content="${escapeHtml(meta.description)}">
    <meta name="robots" content="index, follow">
    <meta name="theme-color" content="#ffffff">
    <link rel="canonical" href="${canonical}">
    <meta name="vinalin:supabase-url" content="https://liiwxhwnbyzxyjucekcb.supabase.co">
    <meta name="vinalin:supabase-anon-key" content="sb_publishable_tgLhQn_AMz1w3z6jX4tlgg_3KldcKkJ">
    <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96">
    <link rel="shortcut icon" href="/favicon/favicon.ico">
    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <link rel="manifest" href="/favicon/site.webmanifest">
    <meta property="og:title" content="${escapeHtml(meta.title)}">
    <meta property="og:description" content="${escapeHtml(meta.description)}">
    <meta property="og:type" content="${meta.ogType}">
    <meta property="og:url" content="${canonical}">
    <meta property="og:site_name" content="vinalin">
    <meta property="og:image" content="${image}">
    <meta property="og:image:width" content="512">
    <meta property="og:image:height" content="512">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(meta.title)}">
    <meta name="twitter:description" content="${escapeHtml(meta.description)}">
    <meta name="twitter:image" content="${image}">
    ${ld}
    <link rel="stylesheet" href="/styles.css?v=20260622-docs-footer-legal2">
  </head>`;
}

function findHtmlFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".git" || entry.name === ".freebuff") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...findHtmlFiles(full));
    } else if (entry.name === "index.html") {
      results.push(full);
    }
  }
  return results;
}

function main() {
  const htmlFiles = findHtmlFiles(process.cwd());
  let updated = 0;

  for (const file of htmlFiles) {
    const original = fs.readFileSync(file, "utf8");
    const newHead = buildHead(file);
    if (!newHead) continue;

    const updatedHtml = original.replace(/<!doctype html>[\s\S]*?<\/head>/i, newHead);
    if (updatedHtml === original) {
      console.warn(`No head replacement in ${path.relative(process.cwd(), file)}`);
      continue;
    }

    fs.writeFileSync(file, updatedHtml);
    console.log(`Updated ${path.relative(process.cwd(), file)}`);
    updated++;
  }

  console.log(`\nUpdated ${updated} HTML files.`);
}

main();
