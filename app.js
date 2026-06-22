const fonts = [
  { name: "cabinet-grotesk", displayName: "Cabinet Grotesk", version: "2.0", category: "sans", designer: "Indian Type Foundry", license: "Fontshare Free Font License", source: "https://www.fontshare.com/fonts/cabinet-grotesk", variable: true, weights: [100, 200, 300, 400, 500, 700, 800, 900], styles: ["normal"], fallback: "sans-serif", previewText: "A versatile grotesque for every weight.", description: "A clean, geometric grotesque sans-serif spanning Thin to Black, suited to both expressive headlines and functional body text.", submittedBy: "thisisbremlo", family: "Zelto Cabinet Grotesk" },
  { name: "clash-grotesk", displayName: "Clash Grotesk", version: "2.0", category: "sans", designer: "Indian Type Foundry", license: "Fontshare Free Font License", source: "https://www.fontshare.com/fonts/clash-grotesk", variable: true, weights: [200, 300, 400, 500, 600, 700], styles: ["normal"], fallback: "sans-serif", previewText: "Confident type with a modern edge.", description: "A contemporary grotesque sans-serif with sturdy, slightly condensed letterforms, built for bold headlines and clean interface text.", submittedBy: "thisisbremlo", family: "Zelto Clash Grotesk" },
  { name: "departure-mono", displayName: "Departure Mono", version: "1.350", category: "mono", designer: "Helena Zhang", license: "OFL-1.1", source: "https://departuremono.com", variable: false, weights: [400], styles: ["normal"], fallback: "monospace", previewText: "Pixel-perfect type for quiet systems.", description: "A pixel-conscious monospace typeface with support for Latin, Greek, small caps, old-style numerals, fractions, and selected symbols.", submittedBy: "thisisbremlo", family: "Zelto Departure Mono" },
  { name: "fraunces", displayName: "Fraunces", version: "1.0", category: "serif", designer: "Undercase Type", license: "OFL-1.1", source: "https://github.com/undercasetype/Fraunces", variable: true, weights: [400, 500, 600, 700, 900], styles: ["normal", "italic"], fallback: "serif", previewText: "A wonky, old-style soft serif.", description: "A display serif inspired by early 20th century typefaces, with optical sizing, softness, and wonk axes.", submittedBy: "thisisbremlo", family: "Zelto Fraunces" },
  { name: "geist", displayName: "Geist", version: "1.7.2", category: "sans", designer: "Geist Type", license: "OFL-1.1", source: "https://github.com", variable: true, weights: [400, 500, 600, 700], styles: ["normal", "italic"], fallback: "sans-serif", previewText: "Design is the silent ambassador of your brand.", description: "A Swiss-inspired sans-serif built for legibility and precision for the modern web.", submittedBy: "thisisbremlo", family: "Zelto Geist" },
  { name: "geist-mono", displayName: "Geist Mono", version: "1.7.2", category: "mono", designer: "Geist Type", license: "OFL-1.1", source: "https://github.com", variable: true, weights: [400, 500, 600, 700], styles: ["normal", "italic"], fallback: "monospace", previewText: "const font = await fontlr.add(\"geist-mono\")", description: "The monospace companion to Geist. Clean, precise, and made for code.", submittedBy: "thisisbremlo", family: "Zelto Geist Mono" },
  { name: "hs-lunaobscura", displayName: "HS LunaObscura", version: "1.0", category: "display", designer: "Headspace Agency", license: "OFL-1.1", source: "https://lunaobscura.headspace.ru", variable: false, weights: [400], styles: ["normal"], fallback: "sans-serif", previewText: "Signal found beyond the interface.", description: "An industrial display typeface for sci-fi, cyberpunk, dystopian interfaces, posters, navigation, and UI mockups.", submittedBy: "thisisbremlo", family: "Zelto HS LunaObscura" },
  { name: "inter", displayName: "Inter", version: "4.1", category: "sans", designer: "Rasmus Andersson", license: "OFL-1.1", source: "https://github.com/rsms/inter", variable: true, weights: [400, 500, 600, 700], styles: ["normal", "italic"], fallback: "sans-serif", previewText: "Sphinx of black quartz, judge my vow.", description: "A typeface carefully crafted and designed for computer screens. The de-facto standard for product interfaces.", submittedBy: "thisisbremlo", family: "Zelto Inter" },
  { name: "jetbrains-mono", displayName: "JetBrains Mono", version: "2.304", category: "mono", designer: "JetBrains", license: "OFL-1.1", source: "https://github.com/JetBrains/JetBrainsMono", variable: true, weights: [400, 500, 700, 800], styles: ["normal", "italic"], fallback: "monospace", previewText: "() => ({ ligatures: true, zero: \"0O\" })", description: "A typeface for developers. Increased x-height, code ligatures, and 145 languages supported.", submittedBy: "thisisbremlo", family: "Zelto JetBrains Mono" },
  { name: "manrope", displayName: "Manrope", version: "3.0", category: "sans", designer: "Mikhail Sharanda", license: "OFL-1.1", source: "https://github.com/davelab6/manrope", variable: false, weights: [400, 500, 600, 700], styles: ["normal"], fallback: "sans-serif", previewText: "Modern, open, geometric grotesque.", description: "An open-source modern sans-serif. Geometric yet warm, great for both display and body text.", submittedBy: "thisisbremlo", family: "Zelto Manrope" },
  { name: "momo-signature", displayName: "Momo Signature", version: "1.0", category: "handwriting", designer: "M - N Associates", license: "OFL-1.1", source: "https://momo.vn", variable: false, weights: [400], styles: ["normal"], fallback: "cursive", previewText: "A personal mark inside digital trust.", description: "A handwritten signature-inspired typeface designed to add a personal, trusted, and individual tone.", submittedBy: "thisisbremlo", family: "Zelto Momo Signature" },
  { name: "neutral-sans", displayName: "Neutral Sans", version: "1.1", category: "sans", designer: "Barry Shawn", license: "OFL-1.1", source: "https://github.com/BesignLab/Neutral-Sans", variable: true, weights: [400, 500, 700, 900], styles: ["normal"], fallback: "sans-serif", previewText: "Warm clarity for modern interfaces.", description: "A modern humanist sans-serif with rounded details, strong readability, variable weight support, and multilingual coverage.", submittedBy: "thisisbremlo", family: "Zelto Neutral Sans" },
  { name: "parkinsans", displayName: "Parkinsans", version: "1.0", category: "sans", designer: "Red Stone", license: "OFL-1.1", source: "https://github.com/redstonedesign/parkinsans", variable: true, weights: [300, 400, 500, 600, 700, 800], styles: ["normal"], fallback: "sans-serif", previewText: "Accessible type with human energy.", description: "A geometric sans-serif designed for Parkinson's UK, balancing energetic display character with accessible short-form reading.", submittedBy: "thisisbremlo", family: "Zelto Parkinsans" },
  { name: "space-grotesk", displayName: "Space Grotesk", version: "2.0.0", category: "display", designer: "Florian Karsten", license: "OFL-1.1", source: "https://github.com/floriankarsten/space-grotesk", variable: true, weights: [300, 400, 500, 600, 700], styles: ["normal"], fallback: "sans-serif", previewText: "Space is big. Really big.", description: "A proportional sans-serif derived from Space Mono, with retro-futuristic details that shine at display sizes.", submittedBy: "thisisbremlo", family: "Zelto Space Grotesk" },
  { name: "tanker", displayName: "Tanker", version: "1.0", category: "display", designer: "Indian Type Foundry", license: "Fontshare Free Font License", source: "https://www.fontshare.com/fonts/tanker", variable: false, weights: [400], styles: ["normal"], fallback: "sans-serif", previewText: "Bold headlines that demand attention.", description: "A high-contrast, ultra-bold display sans-serif with tightly packed letterforms, built for impactful headlines and posters.", submittedBy: "thisisbremlo", family: "Zelto Tanker" },
  { name: "tiktok-sans", displayName: "TikTok Sans", version: "1.0", category: "sans", designer: "TikTok Inc.", license: "OFL-1.1", source: "https://github.com/tiktok/TikTokSans", variable: true, weights: [400, 500, 600, 700, 800, 900], styles: ["normal"], fallback: "sans-serif", previewText: "A social rhythm for product type.", description: "A modern sans-serif typeface from TikTok, built for clear brand expression across digital interfaces and communication.", submittedBy: "thisisbremlo", family: "Zelto TikTok Sans" },
  { name: "zalando-sans", displayName: "Zalando Sans", version: "1.0", category: "sans", designer: "Jakob Ekelund / KH Type", license: "OFL-1.1", source: "https://github.com/zalando/sans", variable: true, weights: [200, 300, 400, 500, 600, 700, 800, 900], styles: ["normal"], fallback: "sans-serif", previewText: "Bold systems can still feel welcoming.", description: "A flexible grotesque sans-serif developed for Zalando, combining clarity, expressive range, and brand personality through variable axes.", submittedBy: "thisisbremlo", family: "Zelto Zalando Sans" },
];

const app = document.querySelector("#app");
const basicGlyphs = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split("");
const axisRanges = {
  "cabinet-grotesk": { wght: [100, 900] },
  "clash-grotesk": { wght: [200, 700] },
  fraunces: { wght: [100, 900], opsz: [9, 144], SOFT: [0, 100], WONK: [0, 1] },
  geist: { wght: [100, 900] },
  "geist-mono": { wght: [100, 900] },
  inter: { wght: [100, 900], opsz: [14, 32] },
  "jetbrains-mono": { wght: [100, 800] },
  "neutral-sans": { wght: [400, 900] },
  parkinsans: { wght: [300, 800] },
  "space-grotesk": { wght: [300, 700] },
  "tiktok-sans": { opsz: [12, 72], slnt: [-10, 0], wdth: [75, 125], wght: [400, 900] },
  "zalando-sans": { wdth: [75, 125], wght: [200, 900], slnt: [-12, 0] },
};
const popularitySeed = {
  inter: 980,
  geist: 920,
  "geist-mono": 820,
  "jetbrains-mono": 790,
  manrope: 760,
  "space-grotesk": 730,
  "cabinet-grotesk": 710,
  "clash-grotesk": 690,
  fraunces: 640,
  "neutral-sans": 610,
  tanker: 560,
  "tiktok-sans": 520,
  "zalando-sans": 490,
  parkinsans: 450,
  "departure-mono": 410,
  "hs-lunaobscura": 360,
  "momo-signature": 320,
};
const downloadSeed = {
  inter: 1289000,
  geist: 1014000,
  "geist-mono": 826000,
  "jetbrains-mono": 791000,
  manrope: 734000,
  "space-grotesk": 681000,
  "cabinet-grotesk": 624000,
  "clash-grotesk": 602000,
  fraunces: 541000,
  "neutral-sans": 498000,
  tanker: 421000,
  "tiktok-sans": 386000,
  "zalando-sans": 352000,
  parkinsans: 319000,
  "departure-mono": 284000,
  "hs-lunaobscura": 221000,
  "momo-signature": 174000,
};
const trackingStorageKey = "fontlr:font-tracking";
let codeBlockCount = 0;
const intentProfiles = [
  { id: "saas", label: "SaaS dashboard", copy: "Clear UI text, data labels, and calm hierarchy.", prefer: ["sans"], avoid: ["display", "handwriting"], weights: { sans: 6, mono: 2, variable: 3, italics: 1 } },
  { id: "docs", label: "Developer docs", copy: "Readable body text with dependable code snippets.", prefer: ["mono", "sans"], avoid: ["handwriting"], weights: { mono: 5, sans: 4, variable: 2, italics: 1 } },
  { id: "editorial", label: "Editorial article", copy: "Comfortable long-form reading with expressive headings.", prefer: ["serif", "sans"], avoid: ["mono"], weights: { serif: 6, display: 3, variable: 2, italics: 2 } },
  { id: "poster", label: "Poster campaign", copy: "Big personality, strong shapes, and memorable headlines.", prefer: ["display", "handwriting"], avoid: ["mono"], weights: { display: 7, handwriting: 4, variable: 2 } },
  { id: "brand", label: "Brand identity", copy: "Distinctive but usable across product, marketing, and docs.", prefer: ["sans", "display"], avoid: [], weights: { sans: 4, display: 4, variable: 3, italics: 1 } },
];

function prettyCategory(category) {
  return category === "sans" ? "Sans" : category.charAt(0).toUpperCase() + category.slice(1);
}

function featureLabel(font) {
  if (font.variable && font.styles.includes("italic")) return "variable &middot; italics";
  if (font.variable) return "variable";
  return `${font.weights.length} weights`;
}

function detailCategory(font) {
  if (font.category === "sans") return "Sans Serif";
  return prettyCategory(font.category);
}

function displayWeights(font) {
  const range = axisRanges[font.name]?.wght;
  if (!range) return font.weights;
  const weights = [];
  for (let weight = Math.ceil(range[0] / 100) * 100; weight <= range[1]; weight += 100) {
    weights.push(weight);
  }
  return weights.length ? weights : font.weights;
}

function fontByName(name) {
  return fonts.find((font) => font.name === name) || fonts[0];
}

function fontStack(font) {
  return `'${font.family}', ${font.fallback}`;
}

function readFontTracking() {
  try {
    const value = localStorage.getItem(trackingStorageKey);
    return value ? JSON.parse(value) : {};
  } catch {
    return {};
  }
}

function writeFontTracking(data) {
  try {
    localStorage.setItem(trackingStorageKey, JSON.stringify(data));
  } catch {
    // Tracking should never block browsing the catalog.
  }
}

function trackingScore(font, data = readFontTracking()) {
  const stats = data[font.name] || {};
  return (popularitySeed[font.name] || 0) + ((stats.views || 0) * 12) + ((stats.clicks || 0) * 5) + ((stats.downloads || 0) * 18);
}

function popularFonts(limit = 8) {
  const data = readFontTracking();
  return fonts
    .slice()
    .sort((a, b) => trackingScore(b, data) - trackingScore(a, data))
    .slice(0, limit);
}

function popularityDescriptor(font) {
  const category = prettyCategory(font.category);
  const familyName = font.displayName.toLowerCase();
  const categoryName = category.toLowerCase();
  const categoryLabel = familyName.includes(categoryName) ? "Open source" : category;
  return `${categoryLabel} / ${font.variable ? "Variable" : "Static"}`;
}

function licenseLabel(font) {
  if (font.license.includes("Fontshare")) return "Fontshare Free";
  if (font.license.includes("OFL")) return "OFL 1.1";
  return font.license;
}

function licenseValue(font) {
  return licenseLabel(font).toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function formatCount(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(value >= 10000000 ? 0 : 1)}M`;
  if (value >= 1000) return `${Math.round(value / 1000)}K`;
  return `${value}`;
}

function downloadCount(font, data = readFontTracking()) {
  const stats = data[font.name] || {};
  return (downloadSeed[font.name] || 0) + (stats.downloads || 0);
}

function supabaseTrackingConfig() {
  const url = window.FONTLR_SUPABASE_URL || document.querySelector('meta[name="fontlr:supabase-url"]')?.content;
  const key = window.FONTLR_SUPABASE_ANON_KEY || document.querySelector('meta[name="fontlr:supabase-anon-key"]')?.content;
  if (!url || !key || url.includes("YOUR_PROJECT") || key.includes("YOUR_PUBLIC_ANON_KEY")) return null;
  return url && key ? { url: url.replace(/\/$/, ""), key } : null;
}

function trackFontEvent(slug, eventType = "click") {
  if (!slug) return;
  const data = readFontTracking();
  const current = data[slug] || { views: 0, clicks: 0 };
  const eventKey = eventType === "view" ? "views" : eventType === "download" ? "downloads" : "clicks";
  data[slug] = {
    ...current,
    [eventKey]: (current[eventKey] || 0) + 1,
    lastEvent: eventType,
    lastSeenAt: new Date().toISOString(),
  };
  writeFontTracking(data);

  if (eventType !== "download") return;
  const config = supabaseTrackingConfig();
  if (!config) return;
  fetch(`${config.url}/rest/v1/font_events`, {
    method: "POST",
    headers: {
      apikey: config.key,
      Authorization: `Bearer ${config.key}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      font_slug: slug,
      event_type: eventType,
      path: window.location.pathname,
      created_at: new Date().toISOString(),
    }),
    keepalive: true,
  }).catch(() => {});
}

function axisDefaults(font) {
  const ranges = axisRanges[font.name] || {};
  return Object.fromEntries(Object.entries(ranges).map(([axis, range]) => [axis, Math.round((range[0] + range[1]) / 2)]));
}

function axisSettings(values) {
  const entries = Object.entries(values);
  if (!entries.length) return "normal";
  return entries.map(([axis, value]) => `"${axis}" ${value}`).join(", ");
}

function fontScore(font, profile) {
  let score = 0;
  score += profile.weights[font.category] || 0;
  if (font.variable) score += profile.weights.variable || 0;
  if (font.styles.includes("italic")) score += profile.weights.italics || 0;
  if (profile.prefer.includes(font.category)) score += 3;
  if (profile.avoid.includes(font.category)) score -= 6;
  if (font.weights.length > 4) score += 1;
  return score;
}

function roleFit(font, role) {
  if (role === "headline") {
    return (font.category === "display" ? 8 : 0) + (font.category === "serif" ? 5 : 0) + (font.category === "sans" ? 4 : 0) + (font.variable ? 2 : 0);
  }
  if (role === "body") {
    return (font.category === "sans" ? 8 : 0) + (font.category === "serif" ? 6 : 0) + (font.category === "mono" ? 3 : 0) - (font.category === "display" ? 5 : 0);
  }
  return (font.category === "mono" ? 6 : 0) + (font.category === "handwriting" ? 5 : 0) + (font.category === "display" ? 4 : 0);
}

function recommendPairing(current = {}) {
  const locked = Object.fromEntries(Object.entries(current).filter(([, value]) => value));
  const roles = ["headline", "body", "accent"];
  const chosen = {};

  roles.forEach((role) => {
    if (locked[role]) chosen[role] = fontByName(locked[role]);
  });

  roles.forEach((role) => {
    if (chosen[role]) return;
    const used = new Set(Object.values(chosen).map((font) => font.name));
    const candidates = fonts
      .filter((font) => !used.has(font.name))
      .map((font) => ({ font, score: roleFit(font, role) + Math.random() * 0.25 }))
      .sort((a, b) => b.score - a.score);
    chosen[role] = candidates[0].font;
  });

  return chosen;
}

function pairingWarnings(pair) {
  const warnings = [];
  if (pair.headline.category === pair.body.category && pair.headline.category !== "serif") warnings.push("Headline and body are very close; make the size or weight contrast obvious.");
  if (pair.headline.category === "display" && pair.accent.category === "display") warnings.push("Two display voices can compete. Keep the accent short.");
  if (pair.body.category === "display" || pair.body.category === "handwriting") warnings.push("Body text may be hard to read. Use this only for short passages.");
  if (pair.headline.name === pair.body.name) warnings.push("Same-family systems can work well; use clear hierarchy.");
  return warnings;
}


function pagePath() {
  if (window.location.protocol === "file:") {
    const hashPath = decodeURIComponent(window.location.hash.slice(1));
    if (hashPath.startsWith("/")) return hashPath.split("#")[0] || "/";
    return "/";
  }
  let path = window.location.pathname.replace(/\/index\.html$/, "/");
  if (path.length > 1) path = path.replace(/\/$/, "");
  return path;
}

function setTitle(title) {
  document.title = title ? `${title} - fontlr` : "fontlr - Open font library";
}

function setPage(page) {
  document.body.dataset.page = page;
}

function copyButton(label = "copy", textGetter = null) {
  return `<button class="copy-button" type="button" data-copy="${label}" data-copy-source="${textGetter || ""}">${label}</button>`;
}

function escapeHtml(value) {
  return value
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function highlightCode(code) {
  let html = escapeHtml(code);
  const tokens = [];
  const stash = (className) => (match) => {
    const token = `\uE000${tokens.length}\uE001`;
    tokens.push(`<span class="${className}">${match}</span>`);
    return token;
  };

  html = html.replace(/(\/\/[^\n]*|\/\*[\s\S]*?\*\/)/g, stash("syntax-comment"));
  html = html.replace(/(["'`])(?:\\.|(?!\1)[\s\S])*?\1/g, stash("syntax-string"));
  html = html.replace(/(https?:\/\/[^\s<]+)/g, stash("syntax-link"));
  html = html.replace(/(&lt;\/?)([A-Za-z][\w.-]*)([^&]*?)(&gt;)/g, (_match, open, tag, attrs, close) => {
    const highlightedAttrs = attrs.replace(/\b([A-Za-z_:][-A-Za-z0-9_:.]*)(=)/g, `<span class="syntax-attr">$1</span>$2`);
    return `<span class="syntax-punct">${open}</span><span class="syntax-tag">${tag}</span>${highlightedAttrs}<span class="syntax-punct">${close}</span>`;
  });
  html = html.replace(/\b(import|from|export|const|let|var|function|return|font-family|inline|GET)\b/g, `<span class="syntax-keyword">$1</span>`);
  html = html.replace(/(^|\s)(--[A-Za-z][\w-]*)/gm, `$1<span class="syntax-flag">$2</span>`);
  html = html.replace(/(@[\w-]+)/g, `<span class="syntax-keyword">$1</span>`);
  html = html.replace(/(\$|npx|pnpm|bunx|fontlr)\b/g, `<span class="syntax-command">$1</span>`);
  html = html.replace(/\b([A-Za-z][\w-]*)(:)(?=\s)/g, `<span class="syntax-property">$1</span>$2`);

  tokens.forEach((token, index) => {
    html = html.replace(`\uE000${index}\uE001`, token);
  });
  return html;
}

function commandsFor(slug = "inter") {
  return {
    npm: `npx fontlr add ${slug}`,
    pnpm: `pnpm dlx fontlr add ${slug}`,
    bun: `bunx fontlr add ${slug}`,
  };
}

function renderInstallBox(slug = "inter") {
  const commands = commandsFor(slug);
  return `
    <div class="install-box" aria-label="Install command">
      <p class="install-label">Install in one command</p>
      <div class="tabs" role="tablist" aria-label="Package manager">
        ${Object.entries(commands).map(([name, value], index) => `<button class="tab ${index === 0 ? "is-active" : ""}" type="button" data-command="${value}">${name}</button>`).join("")}
      </div>
      <div class="command-row">
        <code><span>$</span> <b class="command-text">${commands.npm}</b></code>
        ${copyButton()}
      </div>
    </div>`;
}

function codeBlock(code) {
  const id = `codeBlock${++codeBlockCount}`;
  return `
    <div class="code-snippet">
      <button class="code-copy" type="button" data-copy="copy" data-copy-source="${id}" aria-label="Copy code"><span aria-hidden="true">⧉</span></button>
      <pre><code id="${id}">${highlightCode(code)}</code></pre>
    </div>`;
}

function fontCard(font) {
  return `
    <article class="font-card">
      <a class="font-card-media" href="/fonts/${font.name}" data-local-link data-track-font="${font.name}" data-track-event="click" aria-label="View ${font.displayName}">
        <span class="sample sample-main" style="font-family: ${fontStack(font)};">${font.displayName}</span>
        <span class="sample sample-side" style="font-family: ${fontStack(font)};">${font.previewText}</span>
        <span class="sample sample-mark" style="font-family: ${fontStack(font)};">A</span>
      </a>
      <div class="font-card-info">
        <div class="font-card-header">
          <div class="font-title">
            <h3>${font.displayName}</h3>
            <span>${font.designer}</span>
          </div>
          <span class="badge">${prettyCategory(font.category)}</span>
        </div>
        <div class="font-card-footer">
          <span>${featureLabel(font)}</span>
          <span>${licenseLabel(font)}</span>
          <a class="command" href="/fonts/${font.name}" data-local-link data-track-font="${font.name}" data-track-event="click">View Family <span class="arrow">&rarr;</span></a>
        </div>
      </div>
    </article>`;
}

function homeHotList() {
  return popularFonts(10).map((font, index) => `
    <a href="/fonts/${font.name}" data-local-link data-track-font="${font.name}" data-track-event="click">
      <span>${index + 1}</span>
      <strong>${font.displayName}</strong>
    </a>`).join("");
}

function popularFontStrip() {
  const data = readFontTracking();
  return popularFonts(6).map((font, index) => `
    <li>
      <a href="/fonts/${font.name}" data-local-link data-track-font="${font.name}" data-track-event="click">
        <span>${String(index + 1).padStart(2, "0")}</span>
        <strong style="font-family: ${fontStack(font)};">${font.displayName}</strong>
        <small><b>${formatCount(downloadCount(font, data))}</b> downloads</small>
        <em>${popularityDescriptor(font)} / ${licenseLabel(font)}</em>
      </a>
    </li>`).join("");
}

function foundryCard(font) {
  return `
    <a class="foundry-card" href="/fonts/${font.name}" data-local-link data-track-font="${font.name}" data-track-event="click">
      <span>${font.category === "sans" ? "Sans Serif" : prettyCategory(font.category)}</span>
      <strong>${font.designer}</strong>
    </a>`;
}

function renderHome() {
  setTitle("");
  setPage("home");
  const spotlight = popularFonts(1)[0] || fontByName("inter");
  const craftFont = fontByName("fraunces");
  const systemFont = fontByName("inter");
  const teamFont = fontByName("geist");
  const foundries = [...new Map(fonts.map((font) => [font.designer, font])).values()].slice(0, 4);
  app.innerHTML = `
    <section class="report-hero" aria-labelledby="hero-title">
      <div class="report-hero-art" aria-hidden="true">
        <div></div><div></div><div></div><div></div><div></div>
      </div>
      <div class="container report-hero-grid">
        <p class="report-kicker">A practical type library for founders, developers, and designers choosing fonts that can ship.</p>
        <h1 class="hero-title" id="hero-title">fontlr Type Library</h1>
        <div class="report-meta">
          <span>17 open-source families</span>
          <span>Self-hosted installs</span>
          <span>License-aware catalog</span>
        </div>
        <div class="hero-install-card">
          ${renderInstallBox("inter")}
        </div>
      </div>
    </section>
    <section class="partner-strip popular-strip" aria-label="Most popular fonts">
      <div class="container popular-strip-inner">
        <div class="popular-strip-label">
          <span>Most popular</span>
          <strong>Ranked by demand</strong>
        </div>
        <ol class="popular-fonts-list">
          ${popularFontStrip()}
        </ol>
      </div>
    </section>
    <section class="report-thesis">
      <div class="container report-thesis-grid">
        <p class="eyebrow">In short</p>
        <h2>A curated collection of production-ready typefaces with live specimens, licenses, install commands, and enough context to choose quickly.</h2>
      </div>
    </section>
    <section class="spotlight-section">
      <div class="container spotlight-layout spotlight-feature">
        <div class="spotlight-copy">
          <p class="eyebrow">Spotlight family</p>
          <h2 style="font-family: ${fontStack(spotlight)};">${spotlight.displayName}</h2>
          <p class="spotlight-deck">${spotlight.description}</p>
          <div class="spotlight-meta-grid">
            <span><strong>${detailCategory(spotlight)}</strong>Category</span>
            <span><strong>${displayWeights(spotlight).length}</strong>Styles</span>
            <span><strong>${spotlight.variable ? "Variable" : "Static"}</strong>Build</span>
          </div>
          <a class="primary-link" href="/fonts/${spotlight.name}" data-local-link data-track-font="${spotlight.name}" data-track-event="click">Open specimen</a>
        </div>
        <a class="spotlight-poster spotlight-specimen" href="/fonts/${spotlight.name}" data-local-link data-track-font="${spotlight.name}" data-track-event="click" style="font-family: ${fontStack(spotlight)};">
          <span>${spotlight.designer}</span>
          <strong>${spotlight.previewText}</strong>
          <em>${featureLabel(spotlight).replace("&middot;", "/")} / ${spotlight.license.replace("Fontshare Free Font License", "Fontshare Free")}</em>
        </a>
      </div>
    </section>
    <section class="report-quote">
      <div class="container report-quote-inner">
        <div class="quote-media" aria-hidden="true"><span>Ship type with context.</span></div>
        <blockquote>For teams that need type to feel considered, licensed, local, and ready for the product.</blockquote>
      </div>
    </section>
    <div class="chapter-stack">
      <section class="report-chapter chapter-tools">
        <div class="container chapter-grid">
          <h2><span>01</span>Tools</h2>
          <div>
            <h3>The local-first font stack</h3>
            <p>Install commands, license files, and predictable fallbacks are part of the library. fontlr treats fonts like components you can inspect, copy, and own.</p>
            <div class="chapter-specimen" style="font-family: ${fontStack(systemFont)};">${systemFont.previewText}</div>
          </div>
        </div>
      </section>
      <section class="report-chapter chapter-craft">
        <div class="container chapter-grid">
          <h2><span>02</span>Craft</h2>
          <div>
            <h3>Specimens are the new shortlist</h3>
            <p>The collection starts with live rendering because the fastest way to judge a typeface is to see it working at real sizes, with real preview copy.</p>
            <div class="chapter-specimen" style="font-family: ${fontStack(craftFont)};">${craftFont.previewText}</div>
          </div>
        </div>
      </section>
      <section class="report-chapter chapter-teams">
        <div class="container chapter-grid">
          <h2><span>03</span>Teams</h2>
          <div>
            <h3>Shared type choices reduce drift</h3>
            <p>Designers, engineers, and contributors can work from the same registry: metadata, examples, pairings, and installation guidance in one place.</p>
            <div class="chapter-specimen" style="font-family: ${fontStack(teamFont)};">${teamFont.previewText}</div>
          </div>
        </div>
      </section>
    </div>
    <section class="catalog" id="fonts" aria-labelledby="catalog-title">
      <div class="container section-title-row">
        <h2 id="catalog-title">Seventeen families for interfaces, brands, docs, decks, and the things between.</h2>
        <a class="mini-link" href="/docs" data-local-link>Install with CLI</a>
      </div>
      ${renderCatalogToolbar()}
      <div class="container">
        <div class="catalog-results-head">
          <p class="result-count" id="resultCount">${fonts.length} fonts</p>
          <div class="view-toggle" aria-label="Catalog view">
            <button class="is-active" type="button" data-view="list" aria-pressed="true">List</button>
            <button type="button" data-view="grid" aria-pressed="false">Grid</button>
          </div>
        </div>
        <div class="font-grid is-list-view" id="fontGrid">${fonts.map(fontCard).join("")}</div>
      </div>
    </section>
    <section class="foundry-section">
      <div class="container">
        <div class="section-title-row">
          <h2>Fresh foundries</h2>
          <a class="mini-link" href="/submit" data-local-link>Submit a font</a>
        </div>
        <div class="foundry-grid">${foundries.map(foundryCard).join("")}</div>
      </div>
    </section>
    `;
  bindHomeControls();
}

function renderDecisionTools() {
  const profile = intentProfiles[0];
  const ranked = fonts
    .map((font) => ({ font, score: fontScore(font, profile) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 4);
  return `
    <section class="decision-tools" id="tools" aria-labelledby="tools-title">
      <div class="container">
        <div class="tools-head">
          <div>
            <p class="eyebrow">Use-case finder</p>
            <h2 id="tools-title">Start with the job the font needs to do<span>.</span></h2>
          </div>
          <p>Choose a project type and get a tighter set of candidates before you start comparing details.</p>
        </div>
        <div class="tool-grid">
          <section class="tool-panel use-case-panel">
            <div class="panel-head">
              <h3>Use-case finder</h3>
              <span id="useCaseHint">${profile.copy}</span>
            </div>
            <label class="tool-field">
              <span>Project type</span>
              <select id="intentSelect">
                ${intentProfiles.map((item) => `<option value="${item.id}">${item.label}</option>`).join("")}
              </select>
            </label>
            <div class="recommend-list" id="intentResults">
              ${ranked.map(({ font, score }) => recommendationRow(font, score)).join("")}
            </div>
          </section>
        </div>
      </div>
    </section>`;
}

function recommendationRow(font, score) {
  return `
    <article class="recommend-row">
      <div>
        <strong style="font-family: ${fontStack(font)};">${font.displayName}</strong>
        <span>${prettyCategory(font.category)} / ${featureLabel(font).replace("&middot;", "/")} / score ${Math.round(score)}</span>
      </div>
      <a class="mini-link" href="/fonts/${font.name}" data-local-link data-track-font="${font.name}" data-track-event="click">View</a>
    </article>`;
}

function pairSelect(role, selected) {
  const roleLabel = role.charAt(0).toUpperCase() + role.slice(1);
  const options = fonts.map((font) => `<option value="${font.name}" ${font.name === selected ? "selected" : ""}>${font.displayName}</option>`).join("");
  const menuOptions = fonts.map((font) => `<button type="button" role="option" data-value="${font.name}">${font.displayName}</button>`).join("");
  return `
    <div class="tool-field pair-select" data-pair-select>
      <span>${roleLabel}</span>
      <select id="pair-${role}" aria-label="${roleLabel} font" tabindex="-1" aria-hidden="true">
        ${options}
      </select>
      <button class="catalog-select-trigger pair-select-trigger" type="button" aria-expanded="false" aria-haspopup="listbox">
        <span data-select-value>${fontByName(selected).displayName}</span>
        <span aria-hidden="true">⌄</span>
      </button>
      <div class="catalog-select-menu pair-select-menu" role="listbox">
        ${menuOptions}
      </div>
    </div>`;
}

function pairPreview(pair) {
  return `
    <div class="pair-specimen">
      <p style="font-family: ${fontStack(pair.accent)};">Product Brief</p>
      <h4 style="font-family: ${fontStack(pair.headline)};">Quiet systems for loud ideas</h4>
      <span style="font-family: ${fontStack(pair.body)};">Use one font to lead, one to carry the reading, and one small accent to add texture.</span>
    </div>
    <div class="pair-scenarios">
      <article class="pair-scenario pair-scenario-interface">
        <p style="font-family: ${fontStack(pair.accent)};">Interface</p>
        <h5 style="font-family: ${fontStack(pair.headline)};">Launch metrics without the dashboard noise.</h5>
        <span style="font-family: ${fontStack(pair.body)};">A compact product surface needs a voice that can separate decisions, details, and signals without adding friction.</span>
        <div class="scenario-row" style="font-family: ${fontStack(pair.body)};">
          <strong>92%</strong>
          <span>resolved before review</span>
        </div>
      </article>
      <article class="pair-scenario pair-scenario-doc">
        <p style="font-family: ${fontStack(pair.accent)};">Docs</p>
        <h5 style="font-family: ${fontStack(pair.headline)};">Install once. Ship everywhere.</h5>
        <code style="font-family: ${fontStack(pair.accent)};">npx fontlr add inter</code>
        <span style="font-family: ${fontStack(pair.body)};">Use the same family across prototypes, production, and brand systems.</span>
      </article>
      <article class="pair-scenario pair-scenario-editorial">
        <p style="font-family: ${fontStack(pair.accent)};">Editorial</p>
        <h5 style="font-family: ${fontStack(pair.headline)};">A shortlist for founders, designers, and developers.</h5>
        <span style="font-family: ${fontStack(pair.body)};">Render real copy, check the license, copy the install command, and keep the decision moving.</span>
      </article>
    </div>`;
}

function renderPairingPage() {
  setTitle("Font pairing lab");
  setPage("inner");
  const pairing = recommendPairing({ headline: "space-grotesk", body: "inter", accent: "geist-mono" });
  app.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Pairing</p>
        <h1>Build a font system with clear roles<span>.</span></h1>
        <p class="hero-copy">Choose a headline, body, and accent voice. Generate alternatives, then inspect whether the system has enough contrast and hierarchy.</p>
      </div>
    </section>
    <section class="pairing-page">
      <div class="container pairing-layout">
        <section class="tool-panel pairing-panel">
          <div class="panel-head">
            <h2>Font pairing lab</h2>
            <span>Lock a role, then generate a system.</span>
          </div>
          <div class="pair-controls">
            ${pairSelect("headline", pairing.headline.name)}
            ${pairSelect("body", pairing.body.name)}
            ${pairSelect("accent", pairing.accent.name)}
          </div>
          <button class="primary-link compact" type="button" id="generatePair">Generate pairing</button>
        </section>
        <section class="tool-panel pair-output">
          <div class="pair-preview" id="pairPreview">${pairPreview(pairing)}</div>
        </section>
      </div>
    </section>`;
  bindPairingPage();
}

function bindPairingPage() {
  const pairSelectControls = [...document.querySelectorAll("[data-pair-select] select")];
  const pairSelectSyncers = [];

  function closePairSelects(except = null) {
    document.querySelectorAll("[data-pair-select].is-open").forEach((wrapper) => {
      if (wrapper === except) return;
      wrapper.classList.remove("is-open");
      wrapper.querySelector(".pair-select-trigger")?.setAttribute("aria-expanded", "false");
    });
  }

  function setupPairSelect(select) {
    const wrapper = select.closest("[data-pair-select]");
    if (!wrapper) return;
    const trigger = wrapper.querySelector(".pair-select-trigger");
    const valueLabel = wrapper.querySelector("[data-select-value]");
    const optionButtons = [...wrapper.querySelectorAll("[data-value]")];

    function sync() {
      const selected = select.options[select.selectedIndex];
      valueLabel.textContent = selected ? selected.textContent : "";
      optionButtons.forEach((button) => {
        const isSelected = button.dataset.value === select.value;
        button.classList.toggle("is-selected", isSelected);
        button.setAttribute("aria-selected", String(isSelected));
      });
    }

    trigger.addEventListener("click", () => {
      const willOpen = !wrapper.classList.contains("is-open");
      closePairSelects(wrapper);
      wrapper.classList.toggle("is-open", willOpen);
      trigger.setAttribute("aria-expanded", String(willOpen));
    });

    optionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        select.value = button.dataset.value;
        sync();
        closePairSelects();
        updatePairing(false);
      });
    });

    select.addEventListener("change", sync);
    sync();
    pairSelectSyncers.push(sync);
  }

  function syncPairSelects() {
    pairSelectSyncers.forEach((sync) => sync());
  }

  function updatePairing(forceGenerate = false) {
    const current = {
      headline: forceGenerate ? "" : document.querySelector("#pair-headline").value,
      body: forceGenerate ? "" : document.querySelector("#pair-body").value,
      accent: forceGenerate ? "" : document.querySelector("#pair-accent").value,
    };
    const pair = forceGenerate ? recommendPairing({}) : {
      headline: fontByName(current.headline),
      body: fontByName(current.body),
      accent: fontByName(current.accent),
    };
    document.querySelector("#pair-headline").value = pair.headline.name;
    document.querySelector("#pair-body").value = pair.body.name;
    document.querySelector("#pair-accent").value = pair.accent.name;
    syncPairSelects();
    document.querySelector("#pairPreview").innerHTML = pairPreview(pair);
  }

  pairSelectControls.forEach(setupPairSelect);
  document.querySelector("#generatePair").addEventListener("click", () => updatePairing(true));
  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-pair-select]")) closePairSelects();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closePairSelects();
  });
}

function bindDecisionTools() {
  const intentSelect = document.querySelector("#intentSelect");
  const intentResults = document.querySelector("#intentResults");
  const useCaseHint = document.querySelector("#useCaseHint");

  function updateIntent() {
    const profile = intentProfiles.find((item) => item.id === intentSelect.value) || intentProfiles[0];
    useCaseHint.textContent = profile.copy;
    const ranked = fonts
      .map((font) => ({ font, score: fontScore(font, profile) }))
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);
    intentResults.innerHTML = ranked.map(({ font, score }) => recommendationRow(font, score)).join("");
  }

  intentSelect.addEventListener("change", updateIntent);
}

function renderCatalogToolbar() {
  const licenses = [...new Map(fonts.map((font) => [licenseValue(font), licenseLabel(font)])).entries()];
  const catalogSelect = (id, label, options) => `
    <div class="catalog-select" data-catalog-select>
      <span>${label}</span>
      <select id="${id}" aria-label="Filter by ${label.toLowerCase()}" tabindex="-1" aria-hidden="true">
        ${options.map(({ value, text }) => `<option value="${value}">${text}</option>`).join("")}
      </select>
      <button class="catalog-select-trigger" type="button" aria-expanded="false" aria-haspopup="listbox">
        <span data-select-value>${options[0].text}</span>
        <span aria-hidden="true">⌄</span>
      </button>
      <div class="catalog-select-menu" role="listbox">
        ${options.map(({ value, text }) => `<button type="button" role="option" data-value="${value}">${text}</button>`).join("")}
      </div>
    </div>`;
  return `
    <div class="toolbar">
      <div class="container toolbar-inner">
        <label class="search-field"><span aria-hidden="true">&#8981;</span><input id="searchInput" type="search" placeholder="Search fonts..." aria-label="Search fonts"></label>
        <div class="select-group">
          ${catalogSelect("typeFilter", "Type", [
            { value: "all", text: "All" },
            { value: "sans", text: "Sans" },
            { value: "serif", text: "Serif" },
            { value: "mono", text: "Mono" },
            { value: "display", text: "Display" },
            { value: "handwriting", text: "Handwriting" },
          ])}
          ${catalogSelect("featureFilter", "Features", [
            { value: "all", text: "All" },
            { value: "variable", text: "Variable" },
            { value: "italics", text: "Italics" },
            { value: "static", text: "Static" },
          ])}
          ${catalogSelect("licenseFilter", "License", [
            { value: "all", text: "All" },
            ...licenses.map(([value, label]) => ({ value, text: label })),
          ])}
        </div>
        <label class="preview-field"><span>Preview text</span><input id="previewInput" type="text" maxlength="64" placeholder="Type something"></label>
        <label class="size-field"><span>Size</span><input id="sizeInput" type="range" min="18" max="84" value="48" aria-label="Preview size"><output id="sizeOutput" for="sizeInput">48px</output></label>
      </div>
    </div>`;
}

function bindHomeControls() {
  const searchInput = document.querySelector("#searchInput");
  const typeFilter = document.querySelector("#typeFilter");
  const featureFilter = document.querySelector("#featureFilter");
  const licenseFilter = document.querySelector("#licenseFilter");
  const previewInput = document.querySelector("#previewInput");
  const sizeInput = document.querySelector("#sizeInput");
  const sizeOutput = document.querySelector("#sizeOutput");
  const fontGrid = document.querySelector("#fontGrid");
  const resultCount = document.querySelector("#resultCount");
  const viewButtons = [...document.querySelectorAll("[data-view]")];
  let catalogView = localStorage.getItem("fontlrCatalogView") === "grid" ? "grid" : "list";

  function setCatalogView(view) {
    catalogView = view === "grid" ? "grid" : "list";
    localStorage.setItem("fontlrCatalogView", catalogView);
    fontGrid.classList.toggle("is-grid-view", catalogView === "grid");
    fontGrid.classList.toggle("is-list-view", catalogView !== "grid");
    viewButtons.forEach((button) => {
      const isActive = button.dataset.view === catalogView;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });
  }

  function closeCustomSelects(except = null) {
    document.querySelectorAll("[data-catalog-select].is-open").forEach((wrapper) => {
      if (wrapper === except) return;
      wrapper.classList.remove("is-open");
      wrapper.querySelector(".catalog-select-trigger")?.setAttribute("aria-expanded", "false");
    });
  }

  function setupCustomSelect(select) {
    const wrapper = select.closest("[data-catalog-select]");
    if (!wrapper) return;
    const trigger = wrapper.querySelector(".catalog-select-trigger");
    const valueLabel = wrapper.querySelector("[data-select-value]");
    const optionButtons = [...wrapper.querySelectorAll("[data-value]")];

    function sync() {
      const selected = select.options[select.selectedIndex];
      valueLabel.textContent = selected ? selected.textContent : "All";
      optionButtons.forEach((button) => {
        const isSelected = button.dataset.value === select.value;
        button.classList.toggle("is-selected", isSelected);
        button.setAttribute("aria-selected", String(isSelected));
      });
    }

    trigger.addEventListener("click", () => {
      const willOpen = !wrapper.classList.contains("is-open");
      closeCustomSelects(wrapper);
      wrapper.classList.toggle("is-open", willOpen);
      trigger.setAttribute("aria-expanded", String(willOpen));
    });

    optionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        select.value = button.dataset.value;
        sync();
        closeCustomSelects();
        select.dispatchEvent(new Event("input", { bubbles: true }));
        select.dispatchEvent(new Event("change", { bubbles: true }));
      });
    });

    select.addEventListener("change", sync);
    sync();
  }

  [typeFilter, featureFilter, licenseFilter].forEach(setupCustomSelect);
  viewButtons.forEach((button) => {
    button.addEventListener("click", () => setCatalogView(button.dataset.view));
  });
  setCatalogView(catalogView);

  document.addEventListener("click", (event) => {
    if (!event.target.closest("[data-catalog-select]")) closeCustomSelects();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeCustomSelects();
  });

  function matches(font) {
    const query = searchInput.value.trim().toLowerCase();
    const haystack = `${font.displayName} ${font.designer} ${font.category} ${font.previewText}`.toLowerCase();
    const typeOk = typeFilter.value === "all" || font.category === typeFilter.value;
    const featureOk =
      featureFilter.value === "all" ||
      (featureFilter.value === "static" && !font.variable) ||
      (featureFilter.value === "variable" && font.variable) ||
      (featureFilter.value === "italics" && font.styles.includes("italic"));
    const licenseOk = licenseFilter.value === "all" || licenseValue(font) === licenseFilter.value;
    return (!query || haystack.includes(query)) && typeOk && featureOk && licenseOk;
  }

  function renderFiltered() {
    const visible = fonts.filter(matches);
    document.documentElement.style.setProperty("--preview-size", `${sizeInput.value}px`);
    sizeOutput.textContent = `${sizeInput.value}px`;
    resultCount.textContent = `${visible.length} ${visible.length === 1 ? "font" : "fonts"}`;
    fontGrid.innerHTML = visible.length ? visible.map(fontCard).join("") : `<p class="empty">No fonts match those filters.</p>`;
    if (previewInput.value.trim()) {
      document.querySelectorAll(".sample-main, .sample-side").forEach((sample) => {
        sample.textContent = previewInput.value.trim();
      });
    }
  }

  [searchInput, typeFilter, featureFilter, licenseFilter, previewInput, sizeInput].forEach((control) => {
    control.addEventListener("input", renderFiltered);
    control.addEventListener("change", renderFiltered);
  });
}

function renderDocs() {
  setTitle("Docs");
  setPage("inner");
  app.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Docs</p>
        <h1>Install fonts like components<span>.</span></h1>
      </div>
    </section>
    <section class="doc-page">
      <div class="container doc-layout">
        <aside class="doc-nav">
          <a href="#quick-start">Quick start</a>
          <a href="#next">Next.js</a>
          <a href="#react">React / Vite</a>
          <a href="#cli">CLI reference</a>
          <a href="#registry">Registry API</a>
          <a href="#github">GitHub setup</a>
          <a href="#self-hosting">Self-hosting</a>
          <a href="#tracking">Download tracking</a>
          <a href="#licenses">Licenses</a>
        </aside>
        <article class="prose">
          <h2 id="quick-start">Quick start</h2>
          <p>Pick a font from the <a href="/#fonts" data-local-link>catalog</a> and run the add command in your project root:</p>
          ${codeBlock(`npx fontlr add inter`)}
          ${renderInstallBox()}
          <p>The CLI reads <code>/r/registry.json</code>, downloads the registered <code>.woff2</code> files, and generates ready-to-use code. No runtime font CDN, no package dependency in your app - you own the files. A font can only install after its files are merged into <code>registry/fonts/&lt;name&gt;/files/</code>.</p>
          <h2 id="next">Next.js (App Router)</h2>
          <p>Font files land in <code>app/fonts/&lt;name&gt;/</code> and a module is generated at <code>app/fonts/&lt;name&gt;.ts</code> using <code>next/font/local</code>:</p>
          ${codeBlock(`import { inter } from "./fonts/inter";

// app/layout.tsx
&lt;html className={inter.variable}&gt;`)}
          <p>Then wire it into Tailwind v4 in <code>globals.css</code>:</p>
          ${codeBlock(`@theme inline {
  --font-sans: var(--font-inter);
}`)}
          <h2 id="react">React / Vite</h2>
          <p>Files land in <code>public/fonts/&lt;name&gt;/</code> with an <code>@font-face</code> stylesheet at <code>src/styles/fonts/&lt;name&gt;.css</code>:</p>
          ${codeBlock(`// src/main.tsx
import "./styles/fonts/inter.css";

/* anywhere in CSS */
font-family: var(--font-inter);`)}
          <h2 id="cli">CLI reference</h2>
          ${codeBlock(`npx fontlr add &lt;name&gt;          install a font
--force                        overwrite existing files
--dir &lt;path&gt;                   override the font files directory
--registry &lt;url&gt;               use a different registry

npx fontlr list                list all available fonts`)}
          <h2 id="registry">Registry API</h2>
          <p>The registry is plain static JSON generated from the GitHub repository. The CLI and the site both read the same files:</p>
          ${codeBlock(`GET /r/registry.json                         full catalog
GET /r/&lt;name&gt;.json                           single font
GET /r/fonts/&lt;name&gt;/*                        woff2 files + license
GET https://raw.githubusercontent.com/thisisbremlo/fontlr/main/r/registry.json`)}
          <h2 id="github">GitHub setup</h2>
          <p>The repository owns submissions, validation, and releases. Contributors open pull requests; GitHub Actions rebuilds and validates the registry.</p>
          ${codeBlock(`git init
git add .
git commit -m "Initial fontlr registry"
git branch -M main
git remote add origin https://github.com/thisisbremlo/fontlr.git
git push -u origin main

npm run mirror:fonts
npm run build:registry
npm run validate:registry`)}
          <h2 id="self-hosting">Self-hosting</h2>
          <p>Point the CLI at your own mirror with <code>--registry</code> or the <code>FONTLR_REGISTRY_URL</code> environment variable. File URLs in the registry JSON are relative, so a full mirror is just a copy of <code>/r</code>.</p>
          <h2 id="tracking">Download tracking</h2>
          <p>The frontend only sends anonymous <code>download</code> events to Supabase. Views and clicks can still update local interface counts in the visitor's browser, but they are not posted remotely. For production, connect a small Supabase table and expose only aggregate counts.</p>
          ${codeBlock(`<!-- in index.html, after creating the Supabase project.
     Use the public anon key only, never the service-role key. -->
<meta name="fontlr:supabase-url" content="https://YOUR_PROJECT.supabase.co">
<meta name="fontlr:supabase-anon-key" content="YOUR_PUBLIC_ANON_KEY">`)}
          ${codeBlock(`create table font_events (
  id bigserial primary key,
  font_slug text not null,
  event_type text not null check (event_type = 'download'),
  path text,
  created_at timestamptz not null default now()
);

alter table font_events enable row level security;

create policy "public download inserts only"
on font_events for insert
to anon
with check (event_type = 'download');

create view font_download_counts as
select font_slug, count(*)::bigint as downloads
from font_events
where event_type = 'download'
group by font_slug;`)}
          <p>Best practice for Germany: keep this event schema minimal, avoid cookies and user IDs, do not store IP addresses or user agents in the analytics table, and explain that only anonymous download events are counted before launch.</p>
          <h2 id="licenses">Licenses</h2>
          <p>Every font in the registry uses the SIL Open Font License (or equivalent). The license text is downloaded next to the font files - keep it there; the OFL requires it to accompany the fonts.</p>
        </article>
      </div>
    </section>`;
}

function renderSubmit() {
  setTitle("Submit a font");
  setPage("inner");
  app.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Submit</p>
        <h1>Add a font to the registry<span>.</span></h1>
        <p class="hero-copy">fontlr is community-curated. Submissions happen as pull requests - no accounts, no forms. Every accepted font credits its submitter on the font page.</p>
      </div>
    </section>
    <section class="submit-page">
      <div class="container submit-layout">
        <div class="step-list">
          <article><span>01</span><h2>Fork the registry</h2><p>The whole registry lives in <code>thisisbremlo/fontlr</code>. Fork it and create a branch for your font.</p></article>
          <article><span>02</span><h2>Add your font folder</h2><p>Create <code>registry/fonts/&lt;slug&gt;/</code> with a <code>font.json</code>, the <code>.woff2</code> files under <code>files/</code>, and the license as <code>files/OFL.txt</code>.</p></article>
          <article><span>03</span><h2>Open a pull request</h2><p>Run <code>npm run build:registry</code> and <code>npm run validate:registry</code>. CI repeats those checks before the font ships.</p></article>
        </div>
        <aside class="requirements">
          <h2>Requirements</h2>
          <ul>
            <li>Open license that permits redistribution - <code>OFL-1.1</code> or equivalent.</li>
            <li><code>.woff2</code> files - variable preferred, static weights welcome.</li>
            <li>The license text must ship alongside the files.</li>
            <li><code>submittedBy.github</code> set to your handle.</li>
            <li>It has to be actually good. Curated means curated.</li>
          </ul>
        </aside>
        <article class="prose schema">
          <h2>font.json</h2>
          ${codeBlock(`{
  "$schema": "../../schema.json",
  "name": "your-font",
  "displayName": "Your Font",
  "version": "1.0",
  "category": "sans",
  "designer": "Jane Doe",
  "license": { "type": "OFL-1.1", "url": "https://..." },
  "source": "https://github.com/...",
  "variable": true,
  "axes": { "wght": [100, 900] },
  "weights": [400, 500, 700],
  "styles": ["normal", "italic"],
  "fallback": "sans-serif",
  "previewText": "Show it off in one line.",
  "description": "One or two sentences about the typeface.",
  "submittedBy": { "github": "your-handle" },
  "files": [
    { "path": "/r/fonts/your-font/YourFont.woff2", "weight": "100 900", "style": "normal" }
  ]
}`)}
          <a class="primary-link" href="https://github.com/thisisbremlo/fontlr/compare" target="_blank" rel="noreferrer">Open a pull request</a>
        </article>
      </div>
    </section>`;
}

function renderDonor() {
  setTitle("Donors");
  setPage("inner");
  app.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Donors</p>
        <h1>People who keep fontlr going<span>.</span></h1>
      </div>
    </section>
    <section class="donor-page">
      <div class="container donor-layout">
        <article class="donor-card support-card">
          <p class="eyebrow">Support me</p>
          <h2>fontlr is free and community-curated.</h2>
          <p>If it saves you time, you can fund the work on Ko-fi. Every supporter helps keep the registry, site, and CLI moving.</p>
          <a class="primary-link" href="https://ko-fi.com/bremlo" target="_blank" rel="noreferrer">Support on Ko-fi</a>
        </article>
        <article class="donor-card supporters-card">
          <div class="section-head"><h2>Supporters</h2></div>
          <p>No supporters listed yet - be the first to chip in.</p>
          <a class="mini-link" href="https://ko-fi.com/bremlo" target="_blank" rel="noreferrer">Be the first</a>
        </article>
      </div>
    </section>`;
}

function renderLegalNotice() {
  setTitle("Legal Notice");
  setPage("inner");
  app.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Legal notice</p>
        <h1>Legal Notice<span>.</span></h1>
      </div>
    </section>
    <section class="legal-page">
      <div class="container legal-placeholder">
        <label>
          <span>Legal notice</span>
          <textarea placeholder="[insert legal notice]" spellcheck="true"></textarea>
        </label>
      </div>
    </section>`;
}

function renderPrivacy() {
  setTitle("Privacy Policy");
  setPage("inner");
  app.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Policy privacy</p>
        <h1>Privacy Policy<span>.</span></h1>
      </div>
    </section>
    <section class="legal-page">
      <div class="container legal-placeholder">
        <p>fontlr is prepared to count anonymous font downloads only. The app sends the font slug, event type, current path, and timestamp to Supabase when a visitor clicks a download action; views and normal link clicks are not sent remotely.</p>
        <label>
          <span>Privacy policy</span>
          <textarea placeholder="[insert privacy policy]" spellcheck="true"></textarea>
        </label>
      </div>
    </section>`;
}

function renderFontDetail(font) {
  setTitle(font.displayName);
  setPage("detail");
  trackFontEvent(font.name, "view");
  const weights = displayWeights(font);
  const styleRows = weights.slice(0, 10).map((weight) => {
    const label = weight === 400 ? "Regular" : weight < 400 ? "Light" : weight >= 800 ? "Black" : weight >= 700 ? "Bold" : "Medium";
    return `<article class="style-row">
      <div>
        <span>${label}</span>
        <p style="font-family: ${fontStack(font)}; font-weight:${weight};">${label}</p>
      </div>
    </article>`;
  }).join("");
  app.innerHTML = `
    <section class="font-detail">
      <div class="container detail-inner">
        <div class="detail-topbar">
          <a class="back-link" href="/" data-local-link>&larr; Go Back</a>
          <nav class="detail-nav" aria-label="${font.displayName} sections">
            <a href="#styles">Styles</a>
            <a href="#glyphs">Glyphs</a>
            <a href="#details">Details</a>
            <a href="#license">License</a>
          </nav>
        </div>
        <div class="detail-hero">
          <div>
            <div class="detail-stats">
              <strong>${font.displayName}</strong>
              <span>${weights.length} ${weights.length === 1 ? "style" : "styles"}</span>
              <span>${font.variable ? "Variable" : "Static"}</span>
            </div>
            <p class="category-line">${font.license}</p>
            <h1 style="font-family: ${fontStack(font)};">${font.displayName}</h1>
            <p class="detail-copy">${font.description}</p>
            ${renderInstallBox(font.name)}
          </div>
          <a class="download-card" href="${font.source}" target="_blank" rel="noreferrer" data-track-font="${font.name}" data-track-event="download">
            <strong>Download Family</strong>
          </a>
        </div>
        <section class="styles-section" id="styles">
          <div class="section-head"><h2>${weights.length} Styles</h2></div>
          ${styleRows}
        </section>
        <section class="tester">
          <div class="section-head"><h2>Type tester</h2></div>
          <div class="tester-toolbar">
            <label><span>Size</span><input id="testerSize" type="range" min="32" max="140" value="72"><output id="testerSizeOut">72px</output></label>
            <label><span>Tracking</span><input id="testerTracking" type="range" min="-4" max="12" value="0"><output id="testerTrackingOut">0px</output></label>
            <div class="button-field"><span>Weight</span><div class="button-row" id="testerWeight">${weights.map((w) => `<button type="button" class="${w === 400 ? "is-active" : ""}" data-weight="${w}">${w}</button>`).join("")}</div></div>
            ${font.styles.length > 1 ? `<div class="button-field"><span>Style</span><div class="button-row" id="testerStyle">${font.styles.map((s) => `<button type="button" class="${s === "normal" ? "is-active" : ""}" data-style="${s}">${s === "normal" ? "roman" : s}</button>`).join("")}</div></div>` : ""}
            <button class="reset-button" id="testerReset" type="button">reset</button>
          </div>
          <textarea class="tester-text" id="testerText" spellcheck="false" aria-label="Type tester text" style="font-family: ${fontStack(font)};">${font.previewText}</textarea>
          <p class="tester-hint">Type your own sample, then adjust size, tracking, weight, and style.</p>
        </section>
        <section class="glyph-section" id="glyphs">
          <div class="section-head">
            <h2>Glyphs</h2>
            <div><button class="mini-button is-active" type="button" data-glyph-mode="solid">Solid</button><button class="mini-button" type="button" data-glyph-mode="outline">Outlines</button></div>
          </div>
          <div class="glyph-layout">
            <aside class="glyph-feature" style="font-family: ${fontStack(font)};">
              <p id="glyphName">Capital Letter R</p>
              <strong id="glyphPreview">R</strong>
              <span id="glyphCode">U+0052</span>
            </aside>
            <div class="glyph-groups">
              ${glyphGroup("Uppercase", "ABCDEFGHIJKLMNOPQRSTUVWXYZ", font)}
              ${glyphGroup("Lowercase", "abcdefghijklmnopqrstuvwxyz", font)}
              ${glyphGroup("Numerals", "0123456789", font)}
            </div>
          </div>
        </section>
        <section class="weights-section">
          <h2>Weights</h2>
          <div class="weight-list" style="font-family: ${fontStack(font)};">
            ${weights.map((weight) => `<div><span>${weight}</span><p style="font-weight:${weight};">${font.previewText}</p></div>`).join("")}
          </div>
        </section>
        <section class="meta-grid" id="details">
          <div><span>Designer</span><strong>${font.designer}</strong></div>
          <div><span>Version</span><strong>${font.version}</strong></div>
          <div id="license"><span>License</span><strong>${font.license}</strong></div>
          <div><span>Source</span><strong>${font.source.replace(/^https?:\/\//, "")}</strong></div>
          <div><span>Styles</span><strong>${font.variable ? "Variable" : "Static"}${font.styles.includes("italic") ? " + italics" : ""}</strong></div>
          <div><span>Submitted by</span><strong>@${font.submittedBy}</strong></div>
        </section>
      </div>
    </section>`;
  bindTester();
}

function glyphGroup(label, chars, font) {
  return `
    <section>
      <h3>${label}</h3>
      <div class="glyph-grid" style="font-family: ${fontStack(font)};">${chars.split("").map((g) => `<button type="button" data-glyph="${g}">${g}</button>`).join("")}</div>
    </section>`;
}

function bindTester() {
  const text = document.querySelector(".tester-text");
  const size = document.querySelector("#testerSize");
  const sizeOut = document.querySelector("#testerSizeOut");
  const tracking = document.querySelector("#testerTracking");
  const trackingOut = document.querySelector("#testerTrackingOut");
  const weightButtons = [...document.querySelectorAll("[data-weight]")];
  const styleButtons = [...document.querySelectorAll("[data-style]")];
  const reset = document.querySelector("#testerReset");
  const glyphFeature = document.querySelector(".glyph-feature");
  const glyphPreview = document.querySelector("#glyphPreview");
  const glyphName = document.querySelector("#glyphName");
  const glyphCode = document.querySelector("#glyphCode");
  const glyphModeButtons = [...document.querySelectorAll("[data-glyph-mode]")];
  const glyphButtons = [...document.querySelectorAll("[data-glyph]")];
  if (!text || !size || !tracking || !reset) return;
  const original = text.value;
  let weight = weightButtons.find((button) => button.classList.contains("is-active"))?.dataset.weight || "400";
  let style = "normal";

  function update() {
    text.style.setProperty("font-size", `${size.value}px`, "important");
    text.style.setProperty("letter-spacing", `${tracking.value}px`, "important");
    text.style.setProperty("font-weight", weight, "important");
    text.style.setProperty("font-style", style, "important");
    sizeOut.textContent = `${size.value}px`;
    trackingOut.textContent = `${tracking.value}px`;
  }

  [size, tracking].forEach((control) => {
    control.addEventListener("input", update);
    control.addEventListener("change", update);
  });
  weightButtons.forEach((button) => {
    button.addEventListener("click", () => {
      weightButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      weight = button.dataset.weight;
      update();
    });
  });
  styleButtons.forEach((button) => {
    button.addEventListener("click", () => {
      styleButtons.forEach((item) => item.classList.remove("is-active"));
      button.classList.add("is-active");
      style = button.dataset.style;
      update();
    });
  });
  reset.addEventListener("click", () => {
    size.value = 72;
    tracking.value = 0;
    weight = "400";
    style = "normal";
    weightButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.weight === weight));
    styleButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.style === style));
    text.value = original;
    update();
  });

  function glyphLabel(character) {
    if (/^[A-Z]$/.test(character)) return `Capital Letter ${character}`;
    if (/^[a-z]$/.test(character)) return `Small Letter ${character.toUpperCase()}`;
    if (/^[0-9]$/.test(character)) return `Digit ${character}`;
    return "Glyph";
  }

  function updateGlyph(character) {
    glyphPreview.textContent = character;
    glyphName.textContent = glyphLabel(character);
    glyphCode.textContent = `U+${character.codePointAt(0).toString(16).toUpperCase().padStart(4, "0")}`;
    glyphButtons.forEach((button) => button.classList.toggle("is-active", button.dataset.glyph === character));
  }

  glyphModeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const mode = button.dataset.glyphMode;
      glyphModeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
      glyphFeature.classList.toggle("is-outline", mode === "outline");
      document.querySelector(".glyph-section")?.classList.toggle("is-outline", mode === "outline");
    });
  });

  glyphButtons.forEach((button) => {
    button.addEventListener("click", () => updateGlyph(button.dataset.glyph));
  });

  updateGlyph("R");
  update();
}

function renderNotFound() {
  setTitle("404");
  setPage("inner");
  app.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">404</p>
        <h1>Page not found<span>.</span></h1>
        <p class="hero-copy">That route is not in the public fontlr sitemap.</p>
        <a class="primary-link" href="/" data-local-link>Back to fonts</a>
      </div>
    </section>`;
}

function route() {
  const path = pagePath();
  if (path === "/" || path === "") return renderHome();
  if (path === "/pairing") return renderPairingPage();
  if (path === "/docs") return renderDocs();
  if (path === "/submit") return renderSubmit();
  if (path === "/donors") return renderDonor();
  if (path === "/legal-notice") return renderLegalNotice();
  if (path === "/privacy") return renderPrivacy();
  const match = path.match(/^\/fonts\/([^/]+)$/);
  if (match) {
    const font = fonts.find((item) => item.name === match[1]);
    if (font) return renderFontDetail(font);
  }
  return renderNotFound();
}

function setupMenuToggleIcon() {
  const button = document.querySelector(".menu-toggle");
  if (!button) return;
  button.innerHTML = `
    <svg class="menu-icon menu-icon-open" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <line x1="4" x2="20" y1="6" y2="6"></line>
      <line x1="4" x2="20" y1="12" y2="12"></line>
      <line x1="4" x2="20" y1="18" y2="18"></line>
    </svg>
    <svg class="menu-icon menu-icon-close" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M18 6 6 18"></path>
      <path d="m6 6 12 12"></path>
    </svg>`;
}

function setupMobileNavArrows() {
  document.querySelectorAll(".main-nav a").forEach((link) => {
    if (link.querySelector(".nav-link-arrow")) return;
    link.insertAdjacentHTML("beforeend", `
      <svg class="nav-link-arrow" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <path d="M5 12h14"></path>
        <path d="m13 6 6 6-6 6"></path>
      </svg>`);
  });
}

document.addEventListener("click", async (event) => {
  const menuToggle = event.target.closest(".menu-toggle");
  if (menuToggle) {
    const isOpen = document.body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", `${isOpen}`);
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    return;
  }

  const trackedFont = event.target.closest("[data-track-font]");
  if (trackedFont) {
    trackFontEvent(trackedFont.dataset.trackFont, trackedFont.dataset.trackEvent || "click");
  }

  const copy = event.target.closest("[data-copy]");
  if (copy) {
    const source = copy.dataset.copySource ? document.querySelector(`#${copy.dataset.copySource}`) : null;
    const command = source?.textContent || copy.closest(".install-box")?.querySelector(".command-text")?.textContent || "";
    try {
      await navigator.clipboard.writeText(command);
      if (copy.classList.contains("code-copy")) {
        copy.dataset.copyState = "copied";
        copy.setAttribute("aria-label", "Copied code");
        setTimeout(() => {
          delete copy.dataset.copyState;
          copy.setAttribute("aria-label", "Copy code");
        }, 1200);
      } else {
        copy.textContent = "copied";
      }
      setTimeout(() => {
        copy.innerHTML = copy.classList.contains("code-copy") ? `<span aria-hidden="true">⧉</span>` : copy.dataset.copy;
      }, 1200);
    } catch {
      copy.innerHTML = copy.classList.contains("code-copy") ? `<span aria-hidden="true">⧉</span>` : copy.dataset.copy;
    }
    return;
  }

  const tab = event.target.closest(".tab");
  if (tab) {
    const box = tab.closest(".install-box") || document;
    box.querySelectorAll(".tab").forEach((item) => item.classList.remove("is-active"));
    tab.classList.add("is-active");
    const commandText = box.querySelector(".command-text");
    if (commandText) commandText.textContent = tab.dataset.command;
    return;
  }

  const link = event.target.closest("[data-local-link]");
  if (link && (window.location.protocol === "file:" || link.origin === window.location.origin)) {
    event.preventDefault();
    const href = link.getAttribute("href");
    if (window.location.protocol === "file:") {
      window.location.hash = href;
    } else {
      history.pushState({}, "", href);
    }
    route();
    if (window.location.hash) {
      scrollToHash();
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
    document.body.classList.remove("nav-open");
    const menuButton = document.querySelector(".menu-toggle");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open menu");
  }
});

window.addEventListener("popstate", () => {
  route();
  scrollToHash();
});
route();
setupMenuToggleIcon();
setupMobileNavArrows();
scrollToHash();

function scrollToHash() {
  if (!window.location.hash) return;
  const hash = window.location.protocol === "file:"
    ? decodeURIComponent(window.location.hash.slice(1)).match(/#.+$/)?.[0]
    : window.location.hash;
  if (!hash) return;
  requestAnimationFrame(() => {
    document.querySelector(hash)?.scrollIntoView();
  });
}
