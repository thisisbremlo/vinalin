const fonts = [
  { name: "cabinet-grotesk", displayName: "Cabinet Grotesk", version: "2.0", category: "sans", designer: "Indian Type Foundry", license: "Fontshare Free Font License", source: "https://www.fontshare.com/fonts/cabinet-grotesk", variable: true, weights: [100, 200, 300, 400, 500, 700, 800, 900], styles: ["normal"], fallback: "sans-serif", previewText: "A versatile grotesque for every weight.", description: "A clean, geometric grotesque sans-serif spanning Thin to Black, suited to both expressive headlines and functional body text.", submittedBy: "thisisbremlo", family: "Cabinet Grotesk" },
  { name: "clash-grotesk", displayName: "Clash Grotesk", version: "2.0", category: "sans", designer: "Indian Type Foundry", license: "Fontshare Free Font License", source: "https://www.fontshare.com/fonts/clash-grotesk", variable: true, weights: [200, 300, 400, 500, 600, 700], styles: ["normal"], fallback: "sans-serif", previewText: "Confident type with a modern edge.", description: "A contemporary grotesque sans-serif with sturdy, slightly condensed letterforms, built for bold headlines and clean interface text.", submittedBy: "thisisbremlo", family: "Clash Grotesk" },
  { name: "departure-mono", displayName: "Departure Mono", version: "1.350", category: "mono", designer: "Helena Zhang", license: "OFL-1.1", source: "https://departuremono.com", variable: false, weights: [400], styles: ["normal"], fallback: "monospace", previewText: "Pixel-perfect type for quiet systems.", description: "A pixel-conscious monospace typeface with support for Latin, Greek, small caps, old-style numerals, fractions, and selected symbols.", submittedBy: "thisisbremlo", family: "Departure Mono" },
  { name: "fraunces", displayName: "Fraunces", version: "1.0", category: "serif", designer: "Undercase Type", license: "OFL-1.1", source: "https://github.com/undercasetype/Fraunces", variable: true, weights: [400, 500, 600, 700, 900], styles: ["normal", "italic"], fallback: "serif", previewText: "A wonky, old-style soft serif.", description: "A display serif inspired by early 20th century typefaces, with optical sizing, softness, and wonk axes.", submittedBy: "thisisbremlo", family: "Fraunces" },
  { name: "geist", displayName: "Geist", version: "1.7.2", category: "sans", designer: "Geist Type", license: "OFL-1.1", source: "https://github.com", variable: true, weights: [400, 500, 600, 700], styles: ["normal", "italic"], fallback: "sans-serif", previewText: "Design is the silent ambassador of your brand.", description: "A Swiss-inspired sans-serif built for legibility and precision for the modern web.", submittedBy: "thisisbremlo", family: "Geist" },
  { name: "geist-mono", displayName: "Geist Mono", version: "1.7.2", category: "mono", designer: "Geist Type", license: "OFL-1.1", source: "https://github.com", variable: true, weights: [400, 500, 600, 700], styles: ["normal", "italic"], fallback: "monospace", previewText: "const font = await vinalin.add(\"geist-mono\")", description: "The monospace companion to Geist. Clean, precise, and made for code.", submittedBy: "thisisbremlo", family: "Geist Mono" },
  { name: "hs-lunaobscura", displayName: "HS LunaObscura", version: "1.0", category: "display", designer: "Headspace Agency", license: "OFL-1.1", source: "https://lunaobscura.headspace.ru", variable: false, weights: [400], styles: ["normal"], fallback: "sans-serif", previewText: "Signal found beyond the interface.", description: "An industrial display typeface for sci-fi, cyberpunk, dystopian interfaces, posters, navigation, and UI mockups.", submittedBy: "thisisbremlo", family: "HS LunaObscura" },
  { name: "inter", displayName: "Inter", version: "4.1", category: "sans", designer: "Rasmus Andersson", license: "OFL-1.1", source: "https://github.com/rsms/inter", variable: true, weights: [400, 500, 600, 700], styles: ["normal", "italic"], fallback: "sans-serif", previewText: "Sphinx of black quartz, judge my vow.", description: "A typeface carefully crafted and designed for computer screens. The de-facto standard for product interfaces.", submittedBy: "thisisbremlo", family: "Inter" },
  { name: "jetbrains-mono", displayName: "JetBrains Mono", version: "2.304", category: "mono", designer: "JetBrains", license: "OFL-1.1", source: "https://github.com/JetBrains/JetBrainsMono", variable: true, weights: [400, 500, 700, 800], styles: ["normal", "italic"], fallback: "monospace", previewText: "() => ({ ligatures: true, zero: \"0O\" })", description: "A typeface for developers. Increased x-height, code ligatures, and 145 languages supported.", submittedBy: "thisisbremlo", family: "JetBrains Mono" },
  { name: "manrope", displayName: "Manrope", version: "3.0", category: "sans", designer: "Mikhail Sharanda", license: "OFL-1.1", source: "https://github.com/davelab6/manrope", variable: false, weights: [400, 500, 600, 700], styles: ["normal"], fallback: "sans-serif", previewText: "Modern, open, geometric grotesque.", description: "An open-source modern sans-serif. Geometric yet warm, great for both display and body text.", submittedBy: "thisisbremlo", family: "Manrope" },
  { name: "momo-signature", displayName: "Momo Signature", version: "1.0", category: "handwriting", designer: "M - N Associates", license: "OFL-1.1", source: "https://momo.vn", variable: false, weights: [400], styles: ["normal"], fallback: "cursive", previewText: "A personal mark inside digital trust.", description: "A handwritten signature-inspired typeface designed to add a personal, trusted, and individual tone.", submittedBy: "thisisbremlo", family: "Momo Signature" },
  { name: "neutral-sans", displayName: "Neutral Sans", version: "1.1", category: "sans", designer: "Barry Shawn", license: "OFL-1.1", source: "https://github.com/BesignLab/Neutral-Sans", variable: true, weights: [400, 500, 700, 900], styles: ["normal"], fallback: "sans-serif", previewText: "Warm clarity for modern interfaces.", description: "A modern humanist sans-serif with rounded details, strong readability, variable weight support, and multilingual coverage.", submittedBy: "thisisbremlo", family: "Neutral Sans" },
  { name: "parkinsans", displayName: "Parkinsans", version: "1.0", category: "sans", designer: "Red Stone", license: "OFL-1.1", source: "https://github.com/redstonedesign/parkinsans", variable: true, weights: [300, 400, 500, 600, 700, 800], styles: ["normal"], fallback: "sans-serif", previewText: "Accessible type with human energy.", description: "A geometric sans-serif designed for Parkinson's UK, balancing energetic display character with accessible short-form reading.", submittedBy: "thisisbremlo", family: "Parkinsans" },
  { name: "space-grotesk", displayName: "Space Grotesk", version: "2.0.0", category: "display", designer: "Florian Karsten", license: "OFL-1.1", source: "https://github.com/floriankarsten/space-grotesk", variable: true, weights: [300, 400, 500, 600, 700], styles: ["normal"], fallback: "sans-serif", previewText: "Space is big. Really big.", description: "A proportional sans-serif derived from Space Mono, with retro-futuristic details that shine at display sizes.", submittedBy: "thisisbremlo", family: "Space Grotesk" },
  { name: "tanker", displayName: "Tanker", version: "1.0", category: "display", designer: "Indian Type Foundry", license: "Fontshare Free Font License", source: "https://www.fontshare.com/fonts/tanker", variable: false, weights: [400], styles: ["normal"], fallback: "sans-serif", previewText: "Bold headlines that demand attention.", description: "A high-contrast, ultra-bold display sans-serif with tightly packed letterforms, built for impactful headlines and posters.", submittedBy: "thisisbremlo", family: "Tanker" },
  { name: "tiktok-sans", displayName: "TikTok Sans", version: "1.0", category: "sans", designer: "TikTok Inc.", license: "OFL-1.1", source: "https://github.com/tiktok/TikTokSans", variable: true, weights: [400, 500, 600, 700, 800, 900], styles: ["normal"], fallback: "sans-serif", previewText: "A social rhythm for product type.", description: "A modern sans-serif typeface from TikTok, built for clear brand expression across digital interfaces and communication.", submittedBy: "thisisbremlo", family: "TikTok Sans" },
  { name: "zalando-sans", displayName: "Zalando Sans", version: "1.0", category: "sans", designer: "Jakob Ekelund / KH Type", license: "OFL-1.1", source: "https://github.com/zalando/sans", variable: true, weights: [200, 300, 400, 500, 600, 700, 800, 900], styles: ["normal"], fallback: "sans-serif", previewText: "Bold systems can still feel welcoming.", description: "A flexible grotesque sans-serif developed for Zalando, combining clarity, expressive range, and brand personality through variable axes.", submittedBy: "thisisbremlo", family: "Zalando Sans" },
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
const trackingStorageKey = "vinalin:font-tracking";
const downloadCountsStorageKey = "vinalin:download-counts";
const SITE_URL = "https://vinalin.eu";
let remoteDownloadCounts = readRemoteDownloadCounts();
let remoteDownloadCountsLoaded = false;
let downloadCountsRequest = null;
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

function readRemoteDownloadCounts() {
  try {
    const value = localStorage.getItem(downloadCountsStorageKey);
    return value ? JSON.parse(value) : {};
  } catch {
    return {};
  }
}

function writeRemoteDownloadCounts(data) {
  try {
    localStorage.setItem(downloadCountsStorageKey, JSON.stringify(data));
  } catch {
    // Remote counts are progressive enhancement only.
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

function licenseUrlFor(font) {
  const fileName = font.license.includes("Fontshare") ? "LICENSE.txt" : "OFL.txt";
  return `/r/fonts/${font.name}/${fileName}`;
}

function formatCount(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(value >= 10000000 ? 0 : 1)}M`;
  if (value >= 1000) return `${Math.round(value / 1000)}K`;
  return `${value}`;
}

function downloadCount(font, data = readFontTracking()) {
  if (remoteDownloadCountsLoaded) return remoteDownloadCounts[font.name] || 0;
  const stats = data[font.name] || {};
  return (downloadSeed[font.name] || 0) + (stats.downloads || 0);
}

function supabaseTrackingConfig() {
  const url = window.VINALIN_SUPABASE_URL || document.querySelector('meta[name="vinalin:supabase-url"]')?.content;
  const key = window.VINALIN_SUPABASE_ANON_KEY || document.querySelector('meta[name="vinalin:supabase-anon-key"]')?.content;
  if (!url || !key || url.includes("YOUR_PROJECT") || key.includes("YOUR_PUBLIC_ANON_KEY")) return null;
  return url && key ? { url: url.replace(/\/$/, ""), key } : null;
}

function hydrateDownloadCounts() {
  const config = supabaseTrackingConfig();
  if (!config || downloadCountsRequest) return downloadCountsRequest;
  downloadCountsRequest = fetch(`${config.url}/rest/v1/font_download_counts?select=font_slug,downloads`, {
    headers: {
      apikey: config.key,
      Authorization: `Bearer ${config.key}`,
    },
  })
    .then((response) => (response.ok ? response.json() : Promise.reject(response)))
    .then((rows) => {
      remoteDownloadCounts = Object.fromEntries((rows || []).map((row) => [row.font_slug, Number(row.downloads) || 0]));
      remoteDownloadCountsLoaded = true;
      writeRemoteDownloadCounts(remoteDownloadCounts);
      if (document.body.dataset.page === "home") route();
    })
    .catch(() => {})
    .finally(() => {
      downloadCountsRequest = null;
    });
  return downloadCountsRequest;
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
  })
    .then((response) => {
      if (!response.ok) throw response;
      remoteDownloadCountsLoaded = true;
      remoteDownloadCounts = {
        ...remoteDownloadCounts,
        [slug]: (remoteDownloadCounts[slug] || 0) + 1,
      };
      writeRemoteDownloadCounts(remoteDownloadCounts);
      if (document.body.dataset.page === "home") route();
    })
    .catch(() => {});
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

function prefersReducedMotion() {
  return Boolean(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
}

function supportsViewTransitions() {
  return typeof document !== "undefined" && typeof document.startViewTransition === "function";
}

/**
 * Wrap a DOM update in the native View Transitions API when available so SPA
 * route changes fade softly. Falls back to a CSS animation keyed off
 * `.is-route-enter` for browsers without the API, and short-circuits to
 * an instant update when the user prefers reduced motion.
 */
function withViewTransition(update) {
  if (supportsViewTransitions() && !prefersReducedMotion()) {
    return document.startViewTransition(update);
  }
  update();
  if (!app || prefersReducedMotion()) return Promise.resolve();
  // Restart the animation cleanly on consecutive navigations.
  app.classList.remove("is-route-enter");
  // Reading offsetWidth forces a synchronous reflow so the keyframes replay.
  void app.offsetWidth;
  app.classList.add("is-route-enter");
  return Promise.resolve();
}

function setTitle(title) {
  document.title = title ? `${title} - vinalin` : "vinalin - Curated open font library for founders, developers & designers";
}

function updateMeta({ title, description, path, ogType = "website" }) {
  const fullTitle = title ? `${title} - vinalin` : "vinalin - Curated open font library for founders, developers & designers";
  document.title = fullTitle;
  const canonical = path ? `https://vinalin.eu${path}` : "https://vinalin.eu/";
  const setContent = (selector, value) => {
    const el = document.querySelector(selector);
    if (el) el.content = value;
  };
  setContent('meta[name="description"]', description || "A curated open font library for founders, developers, and designers.");
  setContent('meta[property="og:title"]', fullTitle);
  setContent('meta[property="og:description"]', description || "A curated open font library for founders, developers, and designers.");
  setContent('meta[property="og:type"]', ogType);
  setContent('meta[property="og:url"]', canonical);
  setContent('meta[name="twitter:title"]', fullTitle);
  setContent('meta[name="twitter:description"]', description || "A curated open font library for founders, developers, and designers.");
  const canonicalEl = document.querySelector('link[rel="canonical"]');
  if (canonicalEl) canonicalEl.href = canonical;
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
  html = html.replace(/(\$|npx|pnpm|bunx|vinalin)\b/g, `<span class="syntax-command">$1</span>`);
  html = html.replace(/\b([A-Za-z][\w-]*)(:)(?=\s)/g, `<span class="syntax-property">$1</span>$2`);

  tokens.forEach((token, index) => {
    html = html.replace(`\uE000${index}\uE001`, token);
  });
  return html;
}

function commandsFor(slug = "inter") {
  return {
    npm: `npx @bremlo/vinalin add ${slug}`,
    pnpm: `pnpm dlx @bremlo/vinalin add ${slug}`,
    bun: `bunx @bremlo/vinalin add ${slug}`,
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
        <span class="sample sample-mark" style="font-family: ${fontStack(font)};">
          <small>Case + figures</small>
          <strong>Aa</strong>
          <em>0123456789</em>
        </span>
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
  return fonts
    .slice()
    .sort((a, b) => downloadCount(b, data) - downloadCount(a, data))
    .slice(0, 6)
    .map((font, index) => `
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
  updateMeta({
    title: "",
    description: "A curated open font library for founders, developers, and designers. Discover 17 production-ready open-source font families, install commands, pairings, and licenses.",
    path: "/",
    ogType: "website",
  });
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
        <h1 class="hero-title" id="hero-title">vinalin Type Library</h1>
        <div class="report-meta">
          <span>17 open-source families</span>
          <span>Self-hosted installs</span>
          <span>License-aware catalog</span>
        </div>
        <div class="hero-install-card">
          <div class="hero-install-card-desktop">
            ${renderInstallBox("inter")}
          </div>
          <div class="hero-install-card-mobile">
            <p class="install-label">Get the link</p>
            <button type="button" class="copy-link-button" data-copy-link aria-label="Copy website link">
              <span class="copy-link-button-icon" aria-hidden="true">⧉</span>
              <span class="copy-link-button-text">Copy website link</span>
            </button>
          </div>
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
            <p>Install commands, license files, and predictable fallbacks are part of the library. vinalin treats fonts like components you can inspect, copy, and own.</p>
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
        <svg class="chev" aria-hidden="true" viewBox="0 0 12 12" width="11" height="11"><path d="M2.5 4.25 L6 7.75 L9.5 4.25" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="catalog-select-menu pair-select-menu" role="listbox">
        ${menuOptions}
      </div>
    </div>`;
}

function pairPreview(pair) {
  const previewClasses = [
    pair.headline.category === "display" ? "has-display-headline" : "",
    pair.body.category === "display" ? "has-display-body" : "",
    pair.accent.category === "display" ? "has-display-accent" : "",
  ].filter(Boolean).join(" ");
  return `
    <div class="pair-preview-content ${previewClasses}">
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
        <code style="font-family: ${fontStack(pair.accent)};">npx @bremlo/vinalin add inter</code>
        <span style="font-family: ${fontStack(pair.body)};">Use the same family across prototypes, production, and brand systems.</span>
      </article>
      <article class="pair-scenario pair-scenario-editorial">
        <p style="font-family: ${fontStack(pair.accent)};">Editorial</p>
        <h5 style="font-family: ${fontStack(pair.headline)};">A shortlist for founders, designers, and developers.</h5>
        <span style="font-family: ${fontStack(pair.body)};">Render real copy, check the license, copy the install command, and keep the decision moving.</span>
      </article>
    </div>
    </div>`;
}

function renderPairingPage() {
  setTitle("Font pairing lab");
  setPage("inner");
  updateMeta({
    title: "Font pairing lab",
    description: "Find matching headline, body, and accent fonts with the vinalin pairing lab. Build font systems for interfaces, brands, and docs.",
    path: "/pairing",
    ogType: "website",
  });
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
    const role = select.id.replace(/^pair-/, "");
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
        markTouched(role);
        sync();
        closePairSelects();
        updatePairing(false);
      });
    });

    select.addEventListener("change", () => {
      markTouched(role);
      sync();
      updatePairing(false);
    });
    sync();
    pairSelectSyncers.push(sync);
  }

  function syncPairSelects() {
    pairSelectSyncers.forEach((sync) => sync());
  }

  // Only the roles the user has explicitly picked are honoured as locks on
  // Generate. Defaults and previously-rolled values stay eligible for
  // re-roll, so Generate visibly mixes the system up while keeping the slot
  // the user pinned pinned.
  const ROLES = ["headline", "body", "accent"];
  const userTouched = { headline: false, body: false, accent: false };
  function markTouched(role) {
    userTouched[role] = true;
  }

  function updatePairing(forceGenerate = false) {
    const current = {
      headline: document.querySelector("#pair-headline").value,
      body: document.querySelector("#pair-body").value,
      accent: document.querySelector("#pair-accent").value,
    };
    let pair;
    if (forceGenerate) {
      // Lock set is exactly what the user has touched this session;
      // everything else is eligible for re-roll, so Generate visibly mixes
      // up the system.
      const locked = Object.fromEntries(
        Object.entries(current).filter(([role]) => userTouched[role]),
      );
      pair = recommendPairing(locked);
      // Roles we did not actually pass as a lock have their pin cleared —
      // next Generate can reshuffle them again.
      ROLES.forEach((role) => {
        if (!locked[role]) userTouched[role] = false;
      });
    } else {
      pair = {
        headline: fontByName(current.headline),
        body: fontByName(current.body),
        accent: fontByName(current.accent),
      };
    }
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

// =========================================================
// Compare workspace
// Premium side-by-side font comparison: up to 4 slots,
// synced controls, tone presets, and PDF / PNG / link export.
// =========================================================
const COMPARE_PRESETS = {
  branding: {
    label: "Branding",
    hint: "Display-scale, tight tracking, bold voice. For logos, hero copy, and posters.",
    size: 48, line: 1.15, tracking: -1, weight: 700,
    text: "Acme Co. — A brand voice for considered products."
  },
  ui: {
    label: "UI",
    hint: "Functional body-size, neutral tracking. For buttons, labels, and dense screens.",
    size: 15, line: 1.5, tracking: 0, weight: 500,
    text: "Settings → Dashboard → 42 new notifications ready"
  },
  editorial: {
    label: "Editorial",
    hint: "Comfortable body-size, generous leading. For long-form reading and articles.",
    size: 24, line: 1.65, tracking: 0, weight: 400,
    text: "The quick brown fox jumps over the lazy dog. Typography is the craft of giving language a clear, durable shape - every letter a quiet decision about hierarchy, density, and trust."
  },
  print: {
    label: "Print",
    hint: "Compact body, tight leading, small caps. For books and editorial print.",
    size: 12, line: 1.4, tracking: 0.5, weight: 400,
    text: "It was a still morning; the light crept softly over the harbour, painting the water in pale gold as the boats rocked gently in their slips."
  }
};
const COMPARE_BACKGROUNDS = {
  paper: { label: "Paper", tone: "Warm ivory", surface: "var(--paper)", ink: "var(--ink)" },
  white: { label: "White", tone: "Brilliant white", surface: "#ffffff", ink: "var(--ink)" },
  night: { label: "Night", tone: "Dark editorial", surface: "var(--night)", ink: "var(--reverse)" }
};
const COMPARE_MAX_SLOTS = 4;
let compareActiveState = null;
const COMPARE_CLICK_OUTSIDE_KEY = "vinalin:compare-clickoutside-bound";

function compareSlotWeightOptions(font) {
  const range = (axisRanges[font.name] && axisRanges[font.name].wght) || null;
  if (!range) return font.weights.slice().sort((a, b) => a - b);
  const list = [];
  for (let w = Math.ceil(range[0] / 100) * 100; w <= range[1]; w += 100) list.push(w);
  return list.length ? list : font.weights.slice();
}

function compareDefaultSlots() {
  return [
    { fontName: "inter", weight: 500 },
    { fontName: "geist", weight: 500 },
    { fontName: "fraunces", weight: 500 }
  ];
}

function compareDefaultState() {
  return {
    slots: compareDefaultSlots(),
    size: COMPARE_PRESETS.branding.size,
    line: COMPARE_PRESETS.branding.line,
    tracking: COMPARE_PRESETS.branding.tracking,
    weight: COMPARE_PRESETS.branding.weight,
    text: COMPARE_PRESETS.branding.text,
    preset: "branding"
  };
}

function compareCloneState(state) {
  return { ...state, slots: state.slots.map((slot) => ({ ...slot })) };
}

function compareStateToQuery(state) {
  const params = new URLSearchParams();
  state.slots.forEach((slot, index) => {
    params.set(`s${index}`, slot.fontName);
    params.set(`w${index}`, String(slot.weight));
  });
  params.set("size", String(Math.round(state.size)));
  params.set("line", String(state.line));
  params.set("track", String(state.tracking));
  params.set("weight", String(state.weight));
  if (state.text) params.set("text", state.text.slice(0, 320));
  if (state.preset && state.preset !== "branding") params.set("preset", state.preset);
  return params.toString();
}

function compareQueryToState(searchParams, fallback) {
  const base = compareCloneState(fallback || compareDefaultState());
  const slots = [];
  for (let index = 0; index < COMPARE_MAX_SLOTS; index += 1) {
    const name = searchParams.get(`s${index}`);
    if (!name) break;
    const font = fonts.find((entry) => entry.name === name);
    if (!font) break;
    const options = compareSlotWeightOptions(font);
    const requested = Number(searchParams.get(`w${index}`));
    const safe = options.includes(requested)
      ? requested
      : options[Math.min(Math.floor(options.length / 2), options.length - 1)];
    slots.push({ fontName: font.name, weight: safe });
  }
  if (slots.length) base.slots = slots;
  const size = Number(searchParams.get("size"));
  if (size >= 12 && size <= 160) base.size = size;
  const line = Number(searchParams.get("line"));
  if (line >= 0.8 && line <= 2.4) base.line = line;
  const track = Number(searchParams.get("track"));
  if (!Number.isNaN(track)) base.tracking = Math.max(-5, Math.min(10, Math.round(track * 10) / 10));
  const weight = Number(searchParams.get("weight"));
  if (weight >= 100 && weight <= 900) base.weight = weight;
  const text = searchParams.get("text");
  if (text) base.text = text.slice(0, 320);
  const preset = searchParams.get("preset");
  if (preset && COMPARE_PRESETS[preset]) base.preset = preset;
  return base;
}

function compareSlotHTML(slot, index, state) {
  const font = fontByName(slot.fontName);
  const weights = compareSlotWeightOptions(font);
  const effectiveWeight = weights.includes(slot.weight) ? slot.weight : weights[0];
  const weightPills = weights.map((weight) =>
    `<button class="slot-weight-pill ${weight === effectiveWeight ? "is-active" : ""}" type="button" data-slot-index="${index}" data-weight="${weight}">${weight}</button>`
  ).join("");
  const fontMenuOptions = fonts.map((option) =>
    `<button type="button" role="option" data-value="${option.name}" data-slot-index="${index}">${option.displayName}</button>`
  ).join("");
  return `
    <article class="compare-slot" data-slot-index="${index}" style="--slot-font-family: ${fontStack(font)};">
      <header class="compare-slot-head">
        <span class="slot-number">${String(index + 1).padStart(2, "0")}</span>
        <div class="catalog-select slot-font-select" data-catalog-select>
          <select class="sr-only" data-slot-picker="${index}" aria-label="Choose font for slot ${index + 1}" tabindex="-1" aria-hidden="true">
            ${fonts.map((option) => `<option value="${option.name}" ${option.name === slot.fontName ? "selected" : ""}>${option.displayName}</option>`).join("")}
          </select>
          <button class="catalog-select-trigger" type="button" aria-expanded="false" aria-haspopup="listbox">
            <span data-select-value>${font.displayName}</span>
            <svg class="chev" aria-hidden="true" viewBox="0 0 12 12" width="11" height="11"><path d="M2.5 4.25 L6 7.75 L9.5 4.25" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </button>
          <div class="catalog-select-menu" role="listbox">
            ${fontMenuOptions}
          </div>
        </div>
        <div class="compare-slot-actions">
          <button class="compare-slot-remove" type="button" data-slot-remove="${index}" aria-label="Remove slot ${index + 1}">Remove</button>
        </div>
      </header>
      <div class="compare-slot-display" data-compare-sample data-size="${state.size}" data-line="${state.line}" data-tracking="${state.tracking}" data-weight="${effectiveWeight}" data-text="${escapeHtmlAttr(state.text)}">
        <p class="slot-display-sample" style="font-family: ${fontStack(font)}; font-size: ${state.size}px; line-height: ${state.line}; letter-spacing: ${state.tracking / 100}em; font-weight: ${effectiveWeight};">${escapeHtml(state.text)}</p>
      </div>
      <div class="compare-slot-weights" aria-label="Weights preview">
        <span class="slot-weights-label">Weights</span>
        <div class="slot-weight-row">
          <span class="slot-weight-pill-list" role="group" aria-label="Choose weight for slot ${index + 1}">${weightPills}</span>
        </div>
      </div>
      <div class="compare-slot-stats" aria-label="Live metrics for this font">
        <div class="slot-stat" data-stat="width"><span>Render width</span><strong><span data-stat-width>—</span> px</strong></div>
        <div class="slot-stat" data-stat="chars"><span>Per line @ size</span><strong><span data-stat-chars>—</span> chars</strong></div>
        <div class="slot-stat" data-stat="weight-range"><span>Weight range</span><strong>${weights[0]}&ndash;${weights[weights.length - 1]}</strong></div>
      </div>
    </article>`;
}

function escapeHtmlAttr(value) {
  return String(value || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function compareMetricsHTML(state) {
  return `
    <section class="compare-metrics" data-compare-metrics>
      <div class="compare-metrics-head">
        <p class="eyebrow">Live metrics</p>
        <h2>Side-by-side readability signals at a glance<span>.</span></h2>
      </div>
      <div class="compare-metrics-grid" id="compareMetricsGrid">
        ${state.slots.map((slot, index) => `<div class="compare-metric" data-metric-slot="${index}"><span class="metric-label">${escapeHtml(fontByName(slot.fontName).displayName)}</span><div class="metric-bar"><span data-metric-bar></span></div><strong data-metric-value>—</strong></div>`).join("")}
      </div>
    </section>`;
}

function renderComparePage() {
  setTitle("Font comparison workspace");
  setPage("compare");
  updateMeta({
    title: "Font comparison workspace",
    description: "Compare up to four fonts side-by-side with live controls for size, line height, tracking, and weight. Branded, UI, editorial, and print presets included. Export to PDF, PNG, or share a link.",
    path: "/compare",
    ogType: "website",
  });
  const initial = compareStateFromQuery();
  const initialState = compareCloneState(initial);
  app.innerHTML = `
    <section class="page-hero compare-hero">
      <div class="container">
        <p class="eyebrow">Compare</p>
        <h1>Pick fonts you can defend<span>.</span></h1>
        <p class="hero-copy">A workspace for comparing up to four fonts side by side with live, synchronized controls. Switch tone presets, adjust every axis, and export the decision as a PDF or PNG when the room agrees.</p>
        <div class="compare-hero-actions">
          <button class="primary-link compact" type="button" id="compareLoadExample">Try example set</button>
          <button class="ghost-link" type="button" id="compareResetState">Reset workspace</button>
        </div>
      </div>
    </section>
    <section class="compare-page">
      <div class="container">
        <div class="compare-toolbar" data-compare-toolbar>
          <div class="compare-toolbar-row compare-toolbar-presets">
            <span class="compare-toolbar-label">Preset</span>
            <div class="compare-preset-row" role="radiogroup" aria-label="Choose a tone preset">
              ${Object.entries(COMPARE_PRESETS).map(([id, preset]) => `<button type="button" class="compare-preset-chip ${initial.preset === id ? "is-active" : ""}" data-preset="${id}" role="radio" aria-checked="${initial.preset === id}"><span>${preset.label}</span><small>${preset.size}px · ${preset.line} · ${preset.tracking}%</small></button>`).join("")}
              <button type="button" class="compare-preset-chip ${initial.preset === "custom" ? "is-active" : ""}" data-preset="custom" role="radio" aria-checked="${initial.preset === "custom"}"><span>Custom</span><small>your settings</small></button>
            </div>
          </div>
          <div class="compare-toolbar-row compare-toolbar-controls">
            <label class="compare-slider compare-slider-size">
              <span>Size</span>
              <input type="range" id="compareSize" min="12" max="160" step="1" value="${initial.size}" aria-label="Sample size in pixels">
              <output for="compareSize" id="compareSizeOutput">${initial.size}px</output>
            </label>
            <label class="compare-slider compare-slider-line">
              <span>Line height</span>
              <input type="range" id="compareLine" min="0.9" max="2.2" step="0.01" value="${initial.line}" aria-label="Line height">
              <output for="compareLine" id="compareLineOutput">${initial.line.toFixed(2)}</output>
            </label>
            <label class="compare-slider compare-slider-weight">
              <span>Weight</span>
              <input type="range" id="compareWeight" min="100" max="900" step="100" value="${initial.weight}" aria-label="Default weight">
              <output for="compareWeight" id="compareWeightOutput">${initial.weight}</output>
            </label>
          </div>
          <div class="compare-toolbar-row compare-toolbar-bottom">
            <label class="compare-text-field">
              <span>Sample text</span>
              <textarea id="compareText" rows="2" maxlength="320" placeholder="Type to test with your own copy...">${escapeHtml(initial.text)}</textarea>
            </label>
            <div class="compare-toolbar-bottom-buttons">
              <div class="compare-export-group">
                <button type="button" class="compare-export-button primary-link compact" data-export="png" aria-label="Download comparison as PNG">Export PNG</button>
                <button type="button" class="ghost-link compare-export-button" data-export="pdf" aria-label="Open browser print dialog for PDF">Print / PDF</button>
                <button type="button" class="ghost-link compare-export-button" data-export="link" aria-label="Copy a shareable URL with current state">Copy link</button>
              </div>
              <button type="button" class="compare-add-slot ghost-link" data-add-slot ${initial.slots.length >= COMPARE_MAX_SLOTS ? "disabled" : ""}>+ Add font</button>
            </div>
          </div>
        </div>
        <div class="compare-workspace" id="compareWorkspace" data-compare-workspace>
          <div class="compare-grid" id="compareGrid" style="--slot-count: ${initial.slots.length}">
            ${initial.slots.map((slot, index) => compareSlotHTML(slot, index, initial)).join("")}
          </div>
          ${compareMetricsHTML(initial)}
        </div>
        <p class="compare-share-banner" id="compareShareBanner" role="status" aria-live="polite"></p>
      </div>
    </section>
  `;
  bindComparePage();
}

function compareStateFromQuery() {
  const url = new URL(window.location.href);
  return compareQueryToState(url.searchParams, compareDefaultState());
}

function bindComparePage() {
  let state = compareStateFromQuery();
  let exportInProgress = false;
  const workspace = document.querySelector("#compareWorkspace");
  const grid = document.querySelector("#compareGrid");
  const backgroundSurface = document.querySelector(".compare-toolbar");
  const heroSurface = document.querySelector(".compare-hero");
  const shareBanner = document.querySelector("#compareShareBanner");

  function announce(message, variant = "info") {
    if (!shareBanner) return;
    shareBanner.textContent = message;
    shareBanner.dataset.variant = variant;
    shareBanner.classList.remove("is-visible");
    void shareBanner.offsetWidth;
    shareBanner.classList.add("is-visible");
    clearTimeout(shareBanner._resetTimer);
    shareBanner._resetTimer = setTimeout(() => shareBanner.classList.remove("is-visible"), 2400);
  }

  function writeStateToUrl(replaced = true) {
    const search = compareStateToQuery(state);
    const newUrl = `${window.location.pathname}${search ? `?${search}` : ""}`;
    if (newUrl !== `${window.location.pathname}${window.location.search}`) {
      try {
        if (replaced) history.replaceState({}, "", newUrl);
        else history.pushState({}, "", newUrl);
      } catch {
        // Some embedded contexts lock history; not fatal.
      }
    }
  }

  function syncGlobalControls() {
    const sizeInput = document.querySelector("#compareSize");
    const lineInput = document.querySelector("#compareLine");
    const weightInput = document.querySelector("#compareWeight");
    const textInput = document.querySelector("#compareText");
    if (sizeInput) sizeInput.value = String(state.size);
    if (lineInput) lineInput.value = String(state.line);
    if (weightInput) weightInput.value = String(state.weight);
    if (textInput) textInput.value = state.text;
    document.querySelector("#compareSizeOutput").textContent = `${state.size}px`;
    document.querySelector("#compareLineOutput").textContent = state.line.toFixed(2);
    document.querySelector("#compareWeightOutput").textContent = String(state.weight);
  }

  function syncPresetChips() {
    document.querySelectorAll("[data-preset]").forEach((chip) => {
      const isActive = chip.dataset.preset === state.preset;
      chip.classList.toggle("is-active", isActive);
      chip.setAttribute("aria-checked", String(isActive));
    });
  }

  function renderSlots() {
    grid.style.setProperty("--slot-count", state.slots.length);
    grid.innerHTML = state.slots.map((slot, index) => compareSlotHTML(slot, index, state)).join("");
    rebindSlotControls();
    updateMetrics();
    syncGlobalControls();
    syncPresetChips();
    const addBtn = document.querySelector("[data-add-slot]");
    if (addBtn) addBtn.disabled = state.slots.length >= COMPARE_MAX_SLOTS;
    writeStateToUrl(true);
  }

  function updateMetrics() {
    if (!grid) return;
    const slots = [...grid.querySelectorAll(".compare-slot")];
    let widestWidth = 0;
    const widths = slots.map((slotNode, index) => {
      const sample = slotNode.querySelector(".slot-display-sample");
      if (!sample) return 0;
      const rect = sample.getBoundingClientRect();
      widestWidth = Math.max(widestWidth, rect.width);
      return Math.round(rect.width);
    });
    slots.forEach((slotNode, index) => {
      try {
        const width = widths[index];
        const sample = slotNode.querySelector(".slot-display-sample");
        const slotStyles = sample ? window.getComputedStyle(sample) : null;
        const fontSize = slotStyles ? parseFloat(slotStyles.fontSize) : state.size;
        // Average advance width is roughly 0.55 × fontSize for Latin sans/serif
        // faces; divide the measured render width by that to land a stable
        // "chars per line" estimate without depending on a second element.
        const estimatedCharsPerLine = fontSize > 0 ? Math.max(1, Math.round(width / (fontSize * 0.55))) : 0;
        const widthEl = slotNode.querySelector("[data-stat-width]");
        const charsEl = slotNode.querySelector("[data-stat-chars]");
        if (widthEl) widthEl.textContent = width ? `${width}` : "—";
        if (charsEl) charsEl.textContent = estimatedCharsPerLine ? `${estimatedCharsPerLine}` : "—";
      } catch (err) {
        // A failing slot must not freeze the rest of the metrics.
        console.warn("compare slot metric update failed", err);
      }
    });
    document.querySelectorAll("[data-metric-slot]").forEach((node, index) => {
      const width = widths[index];
      const bar = node.querySelector("[data-metric-bar]");
      const value = node.querySelector("[data-metric-value]");
      const ratio = widestWidth > 0 ? width / widestWidth : 0;
      if (bar) bar.style.setProperty("--bar-width", `${Math.max(8, ratio * 100)}%`);
      if (value) value.textContent = width ? `${width}px` : "—";
    });
  }

  // Push the live slider values (size / line / tracking / weight) onto
  // every slot's display sample so dragging a slider actually repaints the
  // workspace. Existing slots bake their inline style at render time;
  // this helper keeps them in sync without re-rendering the whole grid.
  function compareRefreshLiveSamples() {
    const samples = [...grid.querySelectorAll(".slot-display-sample")];
    samples.forEach((sample) => {
      sample.style.fontSize = `${state.size}px`;
      sample.style.lineHeight = String(state.line);
      sample.style.letterSpacing = `${state.tracking / 100}em`;
      sample.style.fontWeight = String(state.weight);
    });
  }

  // Sync the per-slot weight pills (the 100/200/.../900 strip) so the
  // highlighted pill follows whatever the global WEIGHT slider just
  // chose. Without this, dragging the global slider would bold/lighten
  // the sample text but leave the pills pointing at the previous weight.
  function syncSlotWeightPills() {
    const articles = [...grid.querySelectorAll(".compare-slot")];
    articles.forEach((article, index) => {
      const slot = state.slots[index];
      if (!slot) return;
      article.querySelectorAll("[data-weight]").forEach((pill) => {
        pill.classList.toggle("is-active", Number(pill.dataset.weight) === slot.weight);
      });
    });
  }

  function applyPreset(presetId) {
    const preset = COMPARE_PRESETS[presetId];
    if (!preset) {
      state.preset = "custom";
      syncPresetChips();
      writeStateToUrl(true);
      return;
    }
    state.size = preset.size;
    state.line = preset.line;
    state.tracking = preset.tracking;
    state.weight = preset.weight;
    state.text = preset.text;
    state.preset = presetId;
    syncGlobalControls();
    syncPresetChips();
    renderSlots();
    announce(`Preset · ${preset.label} — ${preset.hint}`);
  }

  function resetWorkspace() {
    state = compareDefaultState();
    compareActiveState = state;
    renderSlots();
    document.querySelector("#compareText").value = state.text;
    announce("Workspace reset to the branding preset.");
  }

  function loadExample() {
    state = compareDefaultState();
    state.slots = [
      { fontName: "inter", weight: 500 },
      { fontName: "geist", weight: 500 },
      { fontName: "fraunces", weight: 500 },
      { fontName: "space-grotesk", weight: 600 }
    ];
    state.preset = "editorial";
    const preset = COMPARE_PRESETS.editorial;
    state.size = preset.size;
    state.line = preset.line;
    state.tracking = preset.tracking;
    state.weight = preset.weight;
    state.text = preset.text;
    compareActiveState = state;
    renderSlots();
    announce("Example set loaded · Inter · Geist · Fraunces · Space Grotesk");
  }

  function addSlot() {
    if (state.slots.length >= COMPARE_MAX_SLOTS) return;
    const used = new Set(state.slots.map((s) => s.fontName));
    const next = fonts.find((font) => !used.has(font.name)) || fonts[0];
    const weights = compareSlotWeightOptions(next);
    state.slots.push({ fontName: next.name, weight: weights[Math.min(1, weights.length - 1)] });
    renderSlots();
  }

  function removeSlot(index) {
    if (state.slots.length <= 1) return;
    state.slots.splice(index, 1);
    renderSlots();
  }

  function changeSlotFont(index, fontName) {
    const font = fontByName(fontName);
    if (!font) return;
    const weights = compareSlotWeightOptions(font);
    let chosenWeight = state.weight;
    if (!weights.includes(chosenWeight)) {
      chosenWeight = weights.reduce((closest, weight) => Math.abs(weight - state.weight) < Math.abs(closest - state.weight) ? weight : closest, weights[0]);
    }
    state.slots[index] = { fontName: font.name, weight: chosenWeight };
    renderSlots();
  }

  function changeSlotWeight(index, weight) {
    if (!state.slots[index]) return;
    state.slots[index].weight = Number(weight);
    renderSlots();
  }

  function rebindSlotControls() {
    document.querySelectorAll("[data-slot-index] [data-slot-picker]").forEach((select) => {
      setupCatalogSelect(select);
    });
    document.querySelectorAll("[data-slot-remove]").forEach((button) => {
      button.addEventListener("click", () => removeSlot(Number(button.dataset.slotRemove)));
    });
    document.querySelectorAll("[data-slot-index] [data-weight]").forEach((pill) => {
      pill.addEventListener("click", () => changeSlotWeight(Number(pill.dataset.slotIndex), Number(pill.dataset.weight)));
    });
    document.querySelectorAll("[data-slot-index] [data-value]").forEach((button) => {
      button.addEventListener("click", () => {
        const slotIndex = Number(button.dataset.slotIndex);
        const fontName = button.dataset.value;
        if (Number.isFinite(slotIndex) && fontName) {
          changeSlotFont(slotIndex, fontName);
        }
      });
    });
  }

  function setupCatalogSelect(select) {
    const wrapper = select.closest("[data-catalog-select]");
    if (!wrapper) return;
    const trigger = wrapper.querySelector(".catalog-select-trigger");
    const valueLabel = wrapper.querySelector("[data-select-value]");
    const optionButtons = [...wrapper.querySelectorAll("[data-value]")];
    function sync() {
      const selected = select.options[select.selectedIndex];
      valueLabel.textContent = selected ? selected.textContent : "";
      optionButtons.forEach((button) => {
        button.classList.toggle("is-selected", button.dataset.value === select.value);
      });
    }
    trigger.addEventListener("click", (event) => {
      event.stopPropagation();
      document.querySelectorAll("[data-catalog-select].is-open").forEach((node) => {
        if (node === wrapper) return;
        node.classList.remove("is-open");
        node.querySelector(".catalog-select-trigger")?.setAttribute("aria-expanded", "false");
      });
      const willOpen = !wrapper.classList.contains("is-open");
      wrapper.classList.toggle("is-open", willOpen);
      trigger.setAttribute("aria-expanded", String(willOpen));
    });
    sync();
    wrapper._compareSync = sync;
  }

  // Wire global controls.
  document.querySelector("#compareSize").addEventListener("input", (event) => {
    state.size = Number(event.target.value);
    state.preset = "custom";
    compareRefreshLiveSamples();
    syncGlobalControls();
    syncPresetChips();
    updateMetrics();
    writeStateToUrl(true);
  });
  document.querySelector("#compareLine").addEventListener("input", (event) => {
    state.line = Number(event.target.value);
    state.preset = "custom";
    compareRefreshLiveSamples();
    syncGlobalControls();
    syncPresetChips();
    updateMetrics();
    writeStateToUrl(true);
  });
  document.querySelector("#compareWeight").addEventListener("input", (event) => {
    state.weight = Number(event.target.value);
    // Push the new default weight into every slot so the active pill and
    // the rendered sample always agree on which weight is in play. We
    // always snap to the closest available weight so dragging the global
    // slider teleports every slot forward — no stale pills.
    state.slots.forEach((slot) => {
      const font = fontByName(slot.fontName);
      if (!font) return;
      const available = compareSlotWeightOptions(font);
      if (!available.length) return;
      slot.weight = available.reduce((closest, weight) => (Math.abs(weight - state.weight) < Math.abs(closest - state.weight) ? weight : closest), available[0]);
    });
    state.preset = "custom";
    compareRefreshLiveSamples();
    syncSlotWeightPills();
    syncGlobalControls();
    syncPresetChips();
    updateMetrics();
    writeStateToUrl(true);
  });
  document.querySelector("#compareText").addEventListener("input", (event) => {
    state.text = event.target.value.slice(0, 320);
    state.preset = "custom";
    grid.querySelectorAll(".slot-display-sample").forEach((node) => {
      node.textContent = state.text;
    });
    compareRefreshLiveSamples();
    syncPresetChips();
    updateMetrics();
    writeStateToUrl(true);
  });

  document.querySelectorAll("[data-preset]").forEach((chip) => {
    chip.addEventListener("click", () => applyPreset(chip.dataset.preset === "custom" ? null : chip.dataset.preset));
  });
  document.querySelector("[data-add-slot]").addEventListener("click", addSlot);
  document.querySelector("#compareLoadExample").addEventListener("click", loadExample);
  document.querySelector("#compareResetState").addEventListener("click", resetWorkspace);

  // Export buttons.
  document.querySelectorAll("[data-export]").forEach((button) => {
    button.addEventListener("click", () => compareHandleExport(button.dataset.export, button));
  });

  rebindSlotControls();
  syncPresetChips();
  syncGlobalControls();
  writeStateToUrl(true);
  compareActiveState = state;

  // Click outside closes any open slot dropdown. The handler is bound
  // once per page load so back/forward navigations never accumulate
  // duplicate listeners on #document.
  if (!window[COMPARE_CLICK_OUTSIDE_KEY]) {
    window[COMPARE_CLICK_OUTSIDE_KEY] = true;
    // Also close the global slot dropdowns when the page unloads so
    // a fast re-bind doesn't inherit a stale "is-open" wrapper.
    document.addEventListener("click", (event) => {
      if (event.target.closest("[data-toolbar-catalog-select]")) return;
      if (event.target.closest(".toolbar")) return;
      if (event.target.closest("[data-catalog-select]")) return;
      document.querySelectorAll("[data-catalog-select].is-open").forEach((node) => {
        node.classList.remove("is-open");
        node.querySelector(".catalog-select-trigger")?.setAttribute("aria-expanded", "false");
      });
    });
  }

  // Re-measure on resize — the live metrics depend on width.
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateMetrics, 120);
  });

  async function compareHandleExport(format, trigger) {
    if (exportInProgress) return;
    if (format === "pdf") {
      announce("Opening the browser print dialog (Save as PDF).");
      window.requestAnimationFrame(() => window.print());
      return;
    }
  if (format === "link") {
    const url = `${window.location.origin}${window.location.pathname}?${compareStateToQuery(state)}`;
    let ok = false;
    let mode = "browser";
    try {
      await navigator.clipboard.writeText(url);
      ok = true;
    } catch (clipErr) {
      // Fallback 1: execCommand("copy") requires the textarea to be visible
      // in the viewport. Older Safari-on-iOS and some iframes are blocked
      // from the async clipboard API but still allow this fallback.
      try {
        const helper = document.createElement("textarea");
        helper.value = url;
        helper.setAttribute("readonly", "");
        helper.style.position = "fixed";
        helper.style.top = "0";
        helper.style.left = "0";
        helper.style.width = "1px";
        helper.style.height = "1px";
        helper.style.opacity = "0";
        helper.style.zIndex = "10000";
        document.body.appendChild(helper);
        helper.focus();
        helper.select();
        helper.setSelectionRange(0, url.length);
        ok = document.execCommand("copy");
        document.body.removeChild(helper);
      } catch (execErr) {
        ok = false;
      }
      if (!ok) {
        // Fallback 2: a system prompt that surfaces the URL to the user so
        // they can copy it manually with one Ctrl/Cmd+C. This is the
        // guaranteed path on locked-down iframes and headless contexts.
        // Capture the return value so we don't advertise success when
        // the user dismissed the dialog without copying.
        try {
          const promptResult = window.prompt("Copy this comparison URL (Ctrl+C / Cmd+C, then Enter)", url);
          if (promptResult !== null && promptResult !== undefined) {
            ok = true;
            mode = "manual";
          } else {
            ok = false;
          }
        } catch {
          ok = false;
        }
      }
    }
    const message = mode === "manual"
      ? "URL ready — copy it from the dialog and close it."
      : ok
        ? "Shareable link copied to clipboard."
        : "Could not copy the link. Manual copy is also blocked.";
    announce(message, ok ? "ok" : "error");
    return;
  }
    if (format !== "png") return;
    exportInProgress = true;
    const original = trigger.textContent;
    trigger.textContent = "Preparing PNG…";
    trigger.disabled = true;
    try {
      const blob = await compareSnapshotPNG();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `vinalin-compare-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setTimeout(() => URL.revokeObjectURL(url), 4000);
      announce("PNG saved. Ready to drop into Notion, Slack, or Figma.", "ok");
    } catch (error) {
      console.error("PNG export failed", error);
      announce("PNG snapshot failed (browser may have blocked the rendered fonts). Use Cmd/Ctrl+P to print or save as PDF.", "error");
    } finally {
      trigger.textContent = original;
      trigger.disabled = false;
      exportInProgress = false;
    }
  }
}

async function compareSnapshotPNG() {
  const grid = document.querySelector("#compareGrid");
  if (!grid) throw new Error("Comparison grid not found");
  const state = compareActiveState;
  if (!state) throw new Error("Comparison state not initialized");
  const metricsNode = document.querySelector("#compareMetricsGrid");
  const metricsCard = metricsNode ? metricsNode.closest(".compare-metrics") : null;

  // 1. Pre-load each slot's font face at the chosen size + weight so
  //    ctx.fillText renders the real face, never a system fallback.
  //    Awaiting document.fonts.ready additionally catches woff2 URLs that
  //    were loaded asynchronously via the @font-face rules in styles.css.
  if (document.fonts && document.fonts.ready) {
    try { await document.fonts.ready; } catch { /* timing best-effort */ }
    const loadSize = Math.max(12, state.size || 64);
    await Promise.all(state.slots.map(async (slot) => {
      const font = fontByName(slot.fontName);
      if (!font) return;
      try {
        await document.fonts.load(`${slot.weight} ${loadSize}px "${font.family || font.displayName}"`);
      } catch { /* unsupported variant, paint falls back to system face */ }
    }));
  }

  // 2. Measure layout from the live, mounted DOM — the source of truth for
  //    positions/sizes. The grid + the metrics card are painted side-by-side
  //    so we need the union rect for the canvas viewport.
  const gridRect = grid.getBoundingClientRect();
  const metricsRect = metricsCard ? metricsCard.getBoundingClientRect() : null;
  const padding = 28;
  const headingGap = 60;
  const totalWidth = gridRect.width;
  const totalHeight = gridRect.height + (metricsRect ? (metricsRect.height + 60) : 0);
  const scale = Math.min(2, Math.max(1, window.devicePixelRatio || 1));
  const width = Math.ceil(totalWidth + padding * 2);
  const height = Math.ceil(totalHeight + headingGap + padding * 2);

  // 3. Setup canvas at device-pixel resolution.
  const canvas = document.createElement("canvas");
  canvas.width = Math.round(width * scale);
  canvas.height = Math.round(height * scale);
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);

  // Palette — paper feel, lifted from the live workspace design tokens.
  const ink = "#1c1c1a";
  const muted = "#6b6655";
  const accent = "#826a4a";
  const divider = "#d8d3c1";
  const paperSurface = "#f7f4ec";
  const cardSurface = "#fffefa";
  const mono = `"JetBrains Mono", ui-monospace, "Menlo", monospace`;

  // Background.
  ctx.fillStyle = paperSurface;
  ctx.fillRect(0, 0, width, height);

  // 4. Top heading strip.
  ctx.textBaseline = "top";
  ctx.fillStyle = ink;
  ctx.font = `700 13px ${mono}`;
  ctx.textAlign = "left";
  ctx.fillText("vinalin · compare", padding, padding);
  const summaryText = `paper · ${state.size}px / ${state.line} · ${state.weight}`;
  ctx.font = `500 12px ${mono}`;
  ctx.fillStyle = muted;
  ctx.textAlign = "right";
  ctx.fillText(summaryText, width - padding, padding);
  ctx.strokeStyle = divider;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding, padding + 26);
  ctx.lineTo(width - padding, padding + 26);
  ctx.stroke();

  // 5. Slot cards.
  const slotNodes = [...grid.querySelectorAll(".compare-slot")];
  const ox = gridRect.left;
  const oy = gridRect.top;
  const offsetY = padding + headingGap;

  slotNodes.forEach((node, index) => {
    const slot = state.slots[index];
    const font = fontByName(slot.fontName);
    if (!font) return;

    const nodeRect = node.getBoundingClientRect();
    const slotLeft = nodeRect.left - ox + padding;
    const slotTop = nodeRect.top - oy + offsetY;
    const slotW = nodeRect.width;
    const slotH = nodeRect.height;

    // Card surface + 1px divider border.
    ctx.fillStyle = cardSurface;
    ctx.fillRect(slotLeft, slotTop, slotW, slotH);
    ctx.strokeStyle = divider;
    ctx.strokeRect(slotLeft + 0.5, slotTop + 0.5, slotW - 1, slotH - 1);

    // Everything below paints inside the slot's card frame only — header,
    // sample text, weight pills, and stats — so any content wider than the
    // slot (long font names, oversized sample text, many pills) stays
    // clipped to the slot instead of bleeding into the neighbouring card.
    ctx.save();
    ctx.beginPath();
    ctx.rect(slotLeft, slotTop, slotW, slotH);
    ctx.clip();

    // Header: number disc + font name.
    const headH = 50;
    const cy = slotTop + headH / 2;
    ctx.beginPath();
    ctx.arc(slotLeft + 30, cy, 15, 0, Math.PI * 2);
    ctx.fillStyle = "#f4ecdc";
    ctx.fill();
    ctx.fillStyle = accent;
    ctx.font = `600 11px ${mono}`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(String(index + 1).padStart(2, "0"), slotLeft + 30, cy);
    ctx.fillStyle = ink;
    ctx.font = `500 14px "${font.family || font.displayName}", system-ui, sans-serif`;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(font.displayName, slotLeft + 56, cy);

    // Divider under header.
    ctx.strokeStyle = divider;
    ctx.beginPath();
    ctx.moveTo(slotLeft, slotTop + headH);
    ctx.lineTo(slotLeft + slotW, slotTop + headH);
    ctx.stroke();

    // Sample text (manual word-wrap, canvas doesn't auto-wrap). Letter-
    // spacing from presets (Print +0.5%, Branding −1%) is simulated per-
    // character since ctx.font is a single shorthand and can't carry it.
    const sample = node.querySelector(".slot-display-sample");
    if (sample) {
      const sRect = sample.getBoundingClientRect();
      const sx = sRect.left - ox + padding;
      const sy = sRect.top - oy + offsetY;
      const family = font.family || font.displayName;
      ctx.font = `${slot.weight} ${state.size}px "${family}", ui-sans-serif, system-ui, sans-serif`;
      ctx.fillStyle = ink;
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      const lineHeightPx = state.size * state.line;
      const maxWidth = Math.max(1, sRect.width);
      const letterSpacingPx = (state.tracking || 0) / 100 * state.size;
      const tokens = state.text.split(/(\s+)/);
      let y = sy;
      let line = "";
      const flushLine = () => {
        const trimmed = line.replace(/\s+$/, "");
        if (trimmed.length) {
          if (letterSpacingPx === 0) {
            ctx.fillText(trimmed, sx, y);
          } else {
            let cx = sx;
            for (const ch of trimmed) {
              ctx.fillText(ch, cx, y);
              cx += ctx.measureText(ch).width + letterSpacingPx;
            }
          }
        }
        y += lineHeightPx;
        line = "";
      };
      for (const tok of tokens) {
        if (/^\s+$/.test(tok)) { line += tok; continue; }
        const test = line.replace(/\s+$/, "") + " " + tok;
        if (line.trim() && measureLineWithSpacing(ctx, test, letterSpacingPx) > maxWidth) {
          flushLine();
          line = tok;
        } else if (!line.trim()) {
          line = tok;
        } else {
          line = line.replace(/\s+$/, "") + " " + tok;
        }
      }
      flushLine();
    }

    // Weights row.
    const weightsRow = node.querySelector(".compare-slot-weights");
    if (weightsRow) {
      const wr = weightsRow.getBoundingClientRect();
      const wrX = wr.left - ox + padding;
      const wrY = wr.top - oy + offsetY;
      ctx.fillStyle = muted;
      ctx.font = `600 11px ${mono}`;
      ctx.textBaseline = "top";
      ctx.textAlign = "left";
      ctx.fillText("WEIGHTS", wrX, wrY);

      const weights = compareSlotWeightOptions(font);
      const pillH = 26;
      const pillGap = 5;
      const slotRight = slotLeft + slotW - 14;
      let pillsTop = wrY + 24;
      let px = wrX;
      ctx.font = `500 12px ${mono}`;
      weights.forEach((w) => {
        const isActive = w === slot.weight;
        const text = String(w);
        const tw = Math.ceil(ctx.measureText(text).width) + 22;
        // Wrap onto a new row when the next pill would overflow the slot's
        // right edge (mirrors the live DOM's flex-wrap: wrap so the
        // exported PNG never bleeds pills across slot boundaries).
        if (px + tw > slotRight && px !== wrX) {
          px = wrX;
          pillsTop += pillH + pillGap;
        }
        if (isActive) {
          ctx.fillStyle = ink;
          roundRectPath(ctx, px, pillsTop, tw, pillH, 13);
          ctx.fill();
        } else {
          ctx.strokeStyle = divider;
          ctx.lineWidth = 1;
          roundRectPath(ctx, px + 0.5, pillsTop + 0.5, tw - 1, pillH - 1, 13);
          ctx.stroke();
        }
        ctx.fillStyle = isActive ? paperSurface : ink;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(text, px + tw / 2, pillsTop + pillH / 2);
        px += tw + 6;
      });
    }

    // Stats row.
    const statsContainer = node.querySelector(".compare-slot-stats");
    if (statsContainer) {
      const scr = statsContainer.getBoundingClientRect();
      const sx = scr.left - ox + padding;
      const sy = scr.top - oy + offsetY;
      const colW = scr.width / 3;
      const stats = node.querySelectorAll(".slot-stat");
      stats.forEach((stat, i) => {
        const labelX = sx + colW * i + 4;
        const labelEl = stat.querySelector("span");
        const valueEl = stat.querySelector("strong");
        const labelText = (labelEl?.textContent || "").trim();
        // Combine inner value span + unit suffix (" px") already present in markup.
        const valueText = valueEl?.innerText?.replace(/\s+/g, " ").trim() || "—";
        ctx.fillStyle = muted;
        ctx.font = `600 11px ${mono}`;
        ctx.textBaseline = "top";
        ctx.textAlign = "left";
        ctx.fillText(labelText.toUpperCase(), labelX, sy);
        ctx.fillStyle = ink;
        ctx.font = `700 20px ${mono}`;
        ctx.fillText(valueText, labelX, sy + 18);
      });
    }

    ctx.restore();
  });

  // 6. Bottom LIVE METRICS card.
  if (metricsRect && metricsCard) {
    const cardLeft = metricsRect.left - ox + padding;
    const cardTop = metricsRect.top - oy + offsetY;
    const cardW = metricsRect.width;
    const cardH = metricsRect.height;
    ctx.fillStyle = cardSurface;
    ctx.fillRect(cardLeft, cardTop, cardW, cardH);
    ctx.strokeStyle = divider;
    ctx.strokeRect(cardLeft + 0.5, cardTop + 0.5, cardW - 1, cardH - 1);

    ctx.fillStyle = ink;
    ctx.font = `700 11px ${mono}`;
    ctx.textBaseline = "top";
    ctx.textAlign = "left";
    ctx.fillText("LIVE METRICS", cardLeft + 24, cardTop + 24);
    ctx.font = `500 13px ${mono}`;
    ctx.fillStyle = muted;
    ctx.fillText("Side-by-side readability signals at a glance.", cardLeft + 24, cardTop + 42);

    const stripNodes = [...metricsNode.querySelectorAll(".compare-metric")];
    stripNodes.forEach((strip) => {
      const sRect = strip.getBoundingClientRect();
      const sLeft = sRect.left - ox + padding;
      const sTop = sRect.top - oy + offsetY;
      const labelEl = strip.querySelector(".metric-label");
      const barEl = strip.querySelector(".metric-bar > span");
      const valueText = strip.querySelector("[data-metric-value]")?.textContent?.trim() || "—";
      const rawPct = barEl ? getComputedStyle(barEl).getPropertyValue("--bar-width").trim() : "0%";
      const barPct = parseFloat(rawPct) || 0;
      ctx.fillStyle = ink;
      ctx.font = `600 11px ${mono}`;
      ctx.textBaseline = "top";
      ctx.textAlign = "left";
      ctx.fillText((labelEl?.textContent || "").toUpperCase(), sLeft + 16, sTop + 16);
      const barTop = sTop + 32;
      const barH = 6;
      const barFull = Math.max(0, sRect.width - 32);
      ctx.fillStyle = divider;
      roundRectPath(ctx, sLeft + 16, barTop, barFull, barH, 3);
      ctx.fill();
      ctx.fillStyle = accent;
      const fillWidth = Math.max(0, Math.min(barFull * (barPct / 100), barFull));
      if (fillWidth > 0.5) {
        roundRectPath(ctx, sLeft + 16, barTop, fillWidth, barH, 3);
        ctx.fill();
      }
      ctx.fillStyle = ink;
      ctx.font = `700 17px ${mono}`;
      ctx.fillText(valueText, sLeft + 16, sTop + 44);
    });
  }

  // 7. Hand back the PNG blob. canvas.toBlob doesn't taint because nothing
  //    was loaded from another origin — fonts came from the same /r/fonts/
  //    tree the document already trusts.
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) reject(new Error("Canvas was empty (browser did not produce a PNG blob)."));
      else resolve(blob);
    }, "image/png");
  });
}

function roundRectPath(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + w - radius, y);
  ctx.arcTo(x + w, y, x + w, y + radius, radius);
  ctx.lineTo(x + w, y + h - radius);
  ctx.arcTo(x + w, y + h, x + w - radius, y + h, radius);
  ctx.lineTo(x + radius, y + h);
  ctx.arcTo(x, y + h, x, y + h - radius, radius);
  ctx.lineTo(x, y + radius);
  ctx.arcTo(x, y, x + radius, y, radius);
  ctx.closePath();
}

// Width of a line when drawn with the same per-character letter-spacing
// the canvas uses, so the word-wrap threshold matches what the renderer
// actually paints. Without this the wrap breaks one word early under
// non-zero tracking (Print +0.5%, Branding -1%) since ctx.font cannot
// carry letter-spacing as part of its shorthand.
function measureLineWithSpacing(ctx, text, letterSpacingPx) {
  if (!letterSpacingPx) return ctx.measureText(text).width;
  let w = 0;
  for (let i = 0; i < text.length; i += 1) {
    w += ctx.measureText(text[i]).width;
    if (i < text.length - 1) w += letterSpacingPx;
  }
  return w;
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
        <svg class="chev" aria-hidden="true" viewBox="0 0 12 12" width="11" height="11"><path d="M2.5 4.25 L6 7.75 L9.5 4.25" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
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
  let catalogView = localStorage.getItem("vinalinCatalogView") === "grid" ? "grid" : "list";

  function setCatalogView(view) {
    catalogView = view === "grid" ? "grid" : "list";
    localStorage.setItem("vinalinCatalogView", catalogView);
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
  updateMeta({
    title: "Docs",
    description: "Learn how to install and use the vinalin CLI and font library. Quick start, commands, registry format, and troubleshooting.",
    path: "/docs",
    ogType: "article",
  });
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
          <a href="#find-font">Find a font name</a>
          <a href="#font-names">All font names</a>
          <a href="#cli">CLI reference</a>
          <a href="#output">Where files go</a>
          <a href="#use-font">Use the font</a>
          <a href="#licenses">Licenses</a>
          <a href="#troubleshooting">Troubleshooting</a>
        </aside>
        <article class="prose">
          <h2 id="quick-start">Quick start</h2>
          <p>Open your project folder in a terminal, pick a family from the <a href="/#fonts" data-local-link>vinalin catalog</a>, and run its install command:</p>
          ${codeBlock(`npx @bremlo/vinalin add inter
pnpm dlx @bremlo/vinalin add inter
bunx @bremlo/vinalin add inter`)}
          ${renderInstallBox()}
          <p>The CLI downloads the registered <code>.woff2</code> files, includes the license, and creates ready-to-use font code inside your project. The files are self-hosted by your app; vinalin is not required at runtime.</p>
          <h2 id="find-font">Find a font name</h2>
          <p>The install name is the short slug shown in each command on vinalin. For example, <strong>JetBrains Mono</strong> uses <code>jetbrains-mono</code>:</p>
          ${codeBlock(`npx @bremlo/vinalin list
npx @bremlo/vinalin add jetbrains-mono

# or with pnpm
pnpm dlx @bremlo/vinalin list
pnpm dlx @bremlo/vinalin add jetbrains-mono

# or with Bun
bunx @bremlo/vinalin list
bunx @bremlo/vinalin add jetbrains-mono`)}
          <h2 id="font-names">All font names</h2>
          <p>Use the slug beside each family in the CLI command. The examples below use npx; replace <code>npx</code> with <code>pnpm dlx</code> or <code>bunx</code> if you use pnpm or Bun. These are all fonts currently available on vinalin:</p>
          <div class="doc-font-list">
            ${fonts.map((font) => `
              <a href="/fonts/${font.name}" data-local-link>
                <span><strong>${font.displayName}</strong><code>${font.name}</code></span>
                <code>npx @bremlo/vinalin add ${font.name}</code>
              </a>`).join("")}
          </div>
          <h2 id="cli">CLI reference</h2>
          ${codeBlock(`npx @bremlo/vinalin add <name>          install a font (npm)
pnpm dlx @bremlo/vinalin add <name>    install a font (pnpm)
bunx @bremlo/vinalin add <name>        install a font (Bun)
npx @bremlo/vinalin list                list available fonts (npm)
pnpm dlx @bremlo/vinalin list            list available fonts (pnpm)
bunx @bremlo/vinalin list                list available fonts (Bun)

--force                        overwrite existing files
--dir &lt;path&gt;                   choose the font files directory
--registry &lt;url&gt;               use a compatible registry mirror`)}
          <p>Install globally to run <code>vinalin</code> directly, or install locally and run it via <code>npx vinalin</code>, <code>pnpm vinalin</code>, or <code>bunx vinalin</code>.</p>
          <h2 id="output">Where files go</h2>
          <p>vinalin detects common project structures and puts each family in a predictable local folder:</p>
          ${codeBlock(`Next.js:     app/fonts/&lt;name&gt;/
React/Vite: public/fonts/&lt;name&gt;/
Other:       fonts/&lt;name&gt;/`)}
          <p>You can choose another destination with <code>--dir</code>. Re-run with <code>--force</code> only when you intentionally want to replace an existing installation.</p>
          <h2 id="use-font">Use the installed font</h2>
          <p>In a Next.js App Router project, import the generated local-font module:</p>
          ${codeBlock(`import { inter } from "./fonts/inter";

// app/layout.tsx
&lt;html className={inter.variable}&gt;`)}
          <p>In React or Vite, import the generated stylesheet:</p>
          ${codeBlock(`// src/main.tsx
import "./styles/fonts/inter.css";

/* anywhere in CSS */
font-family: var(--font-inter);`)}
          <h2 id="licenses">Licenses</h2>
          <p>The exact license text is installed beside every family. Keep that file with the fonts, and check the family's <a href="/licenses" data-local-link>license page</a> before shipping.</p>
          <h2 id="troubleshooting">Troubleshooting</h2>
          <p>If a folder already exists, use <code>--force</code> only if replacing it is safe. If the CLI cannot identify your app structure, provide the destination explicitly with <code>--dir</code>. Run <code>npx @bremlo/vinalin list</code> to confirm the family slug before retrying.</p>
        </article>
      </div>
    </section>`;
}

function renderSubmit() {
  setTitle("Submit a font");
  setPage("inner");
  updateMeta({
    title: "Submit a font",
    description: "Submit an open-source font to the vinalin library. Learn the license requirements, metadata format, and review process.",
    path: "/submit",
    ogType: "article",
  });
  app.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Submit</p>
        <h1>Add a font to the registry<span>.</span></h1>
        <p class="hero-copy">vinalin is community-curated. Submissions happen as pull requests - no accounts, no forms. Every accepted font credits its submitter on the font page.</p>
      </div>
    </section>
    <section class="submit-page">
      <div class="container submit-layout">
        <div class="step-list">
          <article><span>01</span><h2>Fork the registry</h2><p>The whole registry lives in <code>thisisbremlo/vinalin</code>. Fork it and create a branch for your font.</p></article>
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
          <a class="primary-link" href="https://github.com/thisisbremlo/vinalin/compare" target="_blank" rel="noreferrer">Open a pull request</a>
        </article>
      </div>
    </section>`;
}

function renderDonor() {
  setTitle("Donors");
  setPage("inner");
  updateMeta({
    title: "Donors",
    description: "Meet the supporters keeping vinalin open. Sponsor or contribute to the curated open font library.",
    path: "/donors",
    ogType: "website",
  });
  app.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Donors</p>
        <h1>People who keep vinalin going<span>.</span></h1>
      </div>
    </section>
    <section class="donor-page">
      <div class="container donor-layout">
        <article class="donor-card support-card">
          <p class="eyebrow">Support me</p>
          <h2>vinalin is free and community-curated.</h2>
          <p>If it saves you time, you can fund the work on Ko-fi. Every supporter helps keep the registry, site, and CLI moving.</p>
          <a class="primary-link" href="https://ko-fi.com/bremlo" target="_blank" rel="noreferrer">Support on Ko-fi</a>
        </article>
        <article class="donor-card supporters-card">
          <div class="section-head"><h2>Supporters</h2></div>
          <div class="supporter-list" id="supporterList" aria-live="polite">
            <p>Loading supporters...</p>
          </div>
        </article>
      </div>
    </section>`;
  bindSupporters();
}

async function bindSupporters() {
  const list = document.querySelector("#supporterList");
  if (!list) return;
  try {
    const response = await fetch("/data/supporters.json");
    if (!response.ok) throw new Error(`Supporters returned ${response.status}`);
    const data = await response.json();
    const supporters = Array.isArray(data.supporters) ? data.supporters : [];
    if (!supporters.length) {
      list.innerHTML = `<p>No supporters listed yet - be the first to chip in.</p><a class="mini-link" href="https://ko-fi.com/bremlo" target="_blank" rel="noreferrer">Be the first</a>`;
      return;
    }
    list.innerHTML = supporters.map((supporter) => {
      const name = String(supporter.name || "Anonymous supporter");
      const amount = Number(supporter.amount || 0);
      const currency = String(supporter.currency || data.currency || "EUR");
      const formatted = new Intl.NumberFormat("en", { style: "currency", currency }).format(amount);
      return `<div class="supporter-row"><strong>${escapeHtml(name)}</strong><span>${formatted}</span></div>`;
    }).join("");
  } catch {
    list.innerHTML = `<p>Supporters could not be loaded right now.</p>`;
  }
}

function renderLegalNotice() {
  setTitle("Legal Notice");
  setPage("inner");
  updateMeta({
    title: "Legal Notice",
    description: "Legal notice, ownership, and disclaimer for the vinalin open font library website.",
    path: "/legal-notice",
    ogType: "article",
  });
  app.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Legal notice</p>
        <h1>Legal Notice<span>.</span></h1>
      </div>
    </section>
    <section class="legal-page">
      <div class="container legal-document">
        <div class="legal-document-intro">
          <div>
            <p class="eyebrow">Updated June 2026</p>
            <h2>Operator and legal information</h2>
            <p>The complete legal notice covers the website operator, responsibility for content, font licensing, third-party links, copyright, and dispute resolution.</p>
          </div>
          <div class="legal-data">
            <div><span>Website operator</span><strong>Benjamin Michael Bremer</strong></div>
            <div><span>Contact</span><strong><a href="mailto:hi@bremlo.uk">hi@bremlo.uk</a></strong></div>
          </div>
        </div>
        
        <div class="legal-prose">
          <h2>Information According to § 5 DDG</h2>
          <div class="legal-section">
            <h3>Website Operator</h3>
            <p>
              Benjamin Michael Bremer<br>
              Gartenstraße 58a<br>
              29525 Uelzen<br>
              Germany
            </p>
            <p><strong>Email:</strong> <a href="mailto:hi@bremlo.uk">hi@bremlo.uk</a></p>
          </div>
          
          <div class="legal-section">
            <h3>Responsible for Content According to § 18 Abs. 2 MStV</h3>
            <p>
              Benjamin Michael Bremer<br>
              Gartenstraße 58a<br>
              29525 Uelzen<br>
              Germany
            </p>
          </div>

          <h2>Website Purpose</h2>
          <p>vinalin is a curated type library for founders, designers, and developers who want to discover, test, compare, and self-host open fonts.</p>
          <p>The website provides font specimens, live previews, glyph testing, license information, source references, install guidance, pairing suggestions, and documentation to help users choose and ship typefaces with more confidence.</p>
          <p>vinalin is intended for informational, creative, educational, and design-related purposes.</p>

          <h2>Font Licenses and Third-Party Content</h2>
          <p>The fonts listed on vinalin are created by their respective authors, designers, foundries, or contributors.</p>
          <p>Each font remains subject to its own license terms. Where available, license information, source links, and attribution details are provided on the respective font detail pages.</p>
          <p>Although vinalin aims to provide accurate and transparent license information, users are responsible for reviewing and complying with the applicable license before using, modifying, redistributing, or shipping any font in personal, commercial, or open-source projects.</p>
          <p>Third-party content is identified where applicable.</p>

          <h2>Submissions and Community Contributions</h2>
          <p>vinalin may accept font submissions, corrections, metadata updates, or improvements through GitHub pull requests.</p>
          <p>Contributors are responsible for ensuring that submitted files, metadata, source links, and license information are accurate and that the submitted fonts may legally be redistributed or referenced within the project.</p>

          <h2>Liability for Content</h2>
          <p>As a service provider, I am responsible for my own content on these pages in accordance with applicable laws. However, I am not obligated to monitor transmitted or stored third-party information or investigate circumstances indicating unlawful activity.</p>
          <p>Obligations to remove or block the use of information under general laws remain unaffected.</p>

          <h2>Liability for Links</h2>
          <p>This website may contain links to external third-party websites, including font sources, repositories, foundries, documentation, and project pages.</p>
          <p>I have no influence over the content of external websites and therefore cannot accept liability for external content. The respective provider or operator of linked websites is always responsible for their own content.</p>

          <h2>Copyright</h2>
          <p>All original content, layouts, interface designs, documentation, previews, and visual materials created for this website are subject to applicable copyright laws.</p>
          <p>Duplication, editing, distribution, storage, or any form of use outside the limits of copyright law requires prior written consent unless otherwise permitted by law.</p>
          <p>Fonts, font files, specimens, names, trademarks, and third-party materials remain the property of their respective rights holders and are governed by their own license terms.</p>

          <h2>Consumer Dispute Resolution</h2>
          <p>I am neither willing nor obliged to participate in dispute resolution proceedings before a consumer arbitration board.</p>

          <h2>Contact</h2>
          <p>For inquiries regarding this website, font entries, licensing concerns, submissions, projects, or legal matters, please contact: <a href="mailto:hi@bremlo.uk">hi@bremlo.uk</a></p>
        </div>
      </div>
    </section>`;
}

function renderPrivacy() {
  setTitle("Privacy Policy");
  setPage("inner");
  updateMeta({
    title: "Privacy Policy",
    description: "Privacy policy for vinalin. Learn what data is collected, how it is used, and your rights.",
    path: "/privacy",
    ogType: "article",
  });
  app.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Policy privacy</p>
        <h1>Privacy Policy<span>.</span></h1>
      </div>
    </section>
    <section class="legal-page">
      <div class="container legal-document">
        <div class="legal-document-intro">
          <div>
            <p class="eyebrow">Updated June 2026</p>
            <h2>How vinalin handles data</h2>
            <p>The complete policy explains website hosting, anonymous font-download counts, GitHub-hosted project files, contributions, contact data, storage duration, and your GDPR rights.</p>
          </div>
          <div class="legal-data">
            <div><span>Controller</span><strong>Benjamin Michael Bremer</strong></div>
            <div><span>Privacy contact</span><strong><a href="mailto:hi@bremlo.uk">hi@bremlo.uk</a></strong></div>
          </div>
        </div>
        
        <div class="legal-prose">
          <h2>Data Protection at a Glance</h2>
          
          <h3>General Information</h3>
          <p>The following information provides an overview of how personal data is processed when visiting this website. This privacy policy applies to vinalin, a curated type library for discovering, testing, comparing, and self-hosting open fonts.</p>
          <p>Personal data means any information that can be used to directly or indirectly identify a person, such as name, email address, IP address, device information, request data, or communication content.</p>

          <h3>Controller</h3>
          <p>
            The controller responsible for data processing on this website is:<br>
            Benjamin Michael Bremer<br>
            Gartenstraße 58a<br>
            29525 Uelzen<br>
            Germany
          </p>
          <p><strong>Email:</strong> <a href="mailto:hi@bremlo.uk">hi@bremlo.uk</a></p>

          <h3>How Data Is Collected</h3>
          <p>Some data is collected when you voluntarily provide it, for example when you contact me by email or interact with external contribution channels such as GitHub.</p>
          <p>Other data may be collected automatically when visiting the website. This may include technical information such as IP address, browser type, operating system, device information, referrer URL, access time, requested files, and server request data.</p>

          <h3>What Data Is Used For</h3>
          <p>Personal data may be processed to:</p>
          <ul>
            <li>Provide and securely deliver the website</li>
            <li>Maintain website performance and stability</li>
            <li>Display font previews, specimens, font files, and related content</li>
            <li>Count font downloads and understand which fonts are used most often</li>
            <li>Respond to inquiries and communication requests</li>
            <li>Review submissions, corrections, or contribution requests</li>
            <li>Improve the usability, structure, and content of the website</li>
            <li>Prevent misuse, spam, technical errors, or abuse</li>
          </ul>

          <h3>Legal Bases for Processing</h3>
          <p>Depending on the purpose, data processing may be based on:</p>
          <ul>
            <li><strong>Art. 6(1)(a) GDPR</strong> where consent has been given</li>
            <li><strong>Art. 6(1)(b) GDPR</strong> where processing is necessary for pre-contractual or contractual communication</li>
            <li><strong>Art. 6(1)(c) GDPR</strong> where processing is required by law</li>
            <li><strong>Art. 6(1)(f) GDPR</strong> where processing is necessary for legitimate interests, such as secure website delivery, communication, download counting, error prevention, analytics, and project maintenance</li>
          </ul>

          <hr>

          <h2>Hosting and Website Delivery via Vercel</h2>
          <p>This website is hosted and delivered through <strong>Vercel</strong>.</p>
          <p>When visiting the website, technical connection data such as IP addresses, request metadata, browser information, device data, referrer information, access times, and requested resources may be processed to deliver the website securely and reliably.</p>
          <p>The processing is necessary to provide the website, ensure stability, prevent abuse, and maintain security.</p>
          <p><strong>Legal basis:</strong> Art. 6(1)(f) GDPR</p>
          <p>
            <strong>Provider:</strong><br>
            Vercel Inc.<br>
            440 N Barranca Ave #4133<br>
            Covina, CA 91723<br>
            United States
          </p>
          <p><strong>More information:</strong> <a href="https://vercel.com/legal/privacy-notice" target="_blank" rel="noreferrer">Vercel Privacy Notice</a></p>
          <p>Vercel may use technical infrastructure providers and content delivery networks to operate and deliver the website efficiently. Where legally required, processing by service providers is carried out on the basis of appropriate data protection agreements and safeguards for international data transfers.</p>

          <h2>Supabase Download Counts</h2>
          <p>This website uses Supabase to store anonymous download counts for fonts.</p>
          <p>When a font is downloaded, an anonymous counter for the respective font may be increased in the database.</p>
          <p>The stored download count is not linked to a user account, IP address, device identifier, browser fingerprint, or any other information intended to identify individual visitors.</p>
          <p>The download counts are used to understand which fonts are used most often and to improve the structure, curation, and maintenance of the font library.</p>
          <p>Although the stored download counts are anonymous and aggregated, Supabase and its technical infrastructure may process connection data such as IP addresses, timestamps, request metadata, or similar technical information for service delivery, security, logging, and abuse prevention.</p>
          <p><strong>Legal basis:</strong> Art. 6(1)(f) GDPR</p>
          <p>
            <strong>Provider:</strong><br>
            Supabase Pte. Ltd.<br>
            65 Chulia Street #38-02/03<br>
            OCBC Centre<br>
            Singapore 049513
          </p>
          <p>Where legally required, processing by Supabase is carried out on the basis of appropriate data protection agreements and safeguards for international data transfers.</p>

          <h2>Font Files Stored on GitHub</h2>
          <p>Font files, metadata, license files, or related project files may be stored in a public GitHub repository.</p>
          <p>When font files or related resources are loaded from GitHub or GitHub-related delivery infrastructure, your browser may connect to GitHub. In this case, GitHub may process technical connection data such as IP address, request metadata, browser information, access time, and requested files.</p>
          <p>GitHub is responsible for its own data processing when you access GitHub-hosted resources or interact with GitHub directly.</p>
          <p><strong>Legal basis:</strong> Art. 6(1)(f) GDPR</p>
          <p>
            <strong>Provider for users outside North America:</strong><br>
            GitHub B.V.<br>
            Prins Bernhardplein 200<br>
            1097 JB Amsterdam<br>
            Netherlands
          </p>
          <p>
            <strong>Provider:</strong><br>
            GitHub, Inc.<br>
            88 Colin P. Kelly Jr. Street<br>
            San Francisco, CA 94107<br>
            United States
          </p>
          <p><strong>More information:</strong> <a href="https://docs.github.com/site-policy/privacy-policies/github-privacy-statement" target="_blank" rel="noreferrer">GitHub Privacy Statement</a></p>

          <h2>Font Library, Font Previews, and Glyph Testing</h2>
          <p>vinalin provides font specimens, previews, glyph testing, metadata, source references, and license-related information.</p>
          <p>When using preview fields, specimen tools, comparison tools, or glyph testing features, the entered text is intended to be processed locally in the browser and is not intentionally stored by me.</p>
          <p>However, technical request data may still be processed by the hosting provider or other technical service providers when loading pages, assets, font files, previews, metadata, or related resources.</p>
          <p><strong>Legal basis:</strong> Art. 6(1)(f) GDPR</p>

          <h2>GitHub Contributions and Pull Requests</h2>
          <p>vinalin may allow or encourage submissions, corrections, metadata updates, or font contributions through GitHub pull requests.</p>
          <p>If you interact with vinalin through GitHub, for example by opening an issue, submitting a pull request, commenting, or contributing files, your GitHub profile information, contribution content, timestamps, and related metadata may become publicly visible depending on GitHub's settings and the repository configuration.</p>
          <p>GitHub is responsible for its own data processing when you use GitHub's platform.</p>
          <p>I may process publicly submitted contribution data to review, manage, document, and maintain the font library.</p>
          <p><strong>Legal basis:</strong> Art. 6(1)(f) GDPR</p>
          <p>Please avoid submitting private, sensitive, or unnecessary personal data through public issues, pull requests, comments, or repository files.</p>

          <h2>Contact by Email</h2>
          <p>If you contact me by email, the data you provide will be processed for the purpose of handling your inquiry and any related follow-up communication.</p>
          <p>This may include your email address, name, message content, technical email metadata, and any information you voluntarily include in the message.</p>
          <p><strong>Legal basis:</strong> Art. 6(1)(b) GDPR where the communication relates to a request, project, or potential collaboration</p>
          <p><strong>Legal basis:</strong> Art. 6(1)(f) GDPR for general communication and documentation of inquiries</p>
          <p>The data will not be shared without your consent unless required by law or necessary to process your request.</p>

          <h2>Contact Forms</h2>
          <p>If this website provides a contact form, the information submitted through the form will be processed for the purpose of handling your inquiry.</p>
          <p>The data processed may include your name, email address, message content, timestamp, and technical metadata required to transmit and protect the form.</p>
          <p><strong>Legal basis:</strong> Art. 6(1)(b) GDPR where the inquiry relates to a request, project, or potential collaboration</p>
          <p><strong>Legal basis:</strong> Art. 6(1)(f) GDPR for general communication, spam prevention, and secure form delivery</p>
          <p>If no contact form is used, this section does not apply.</p>

          <h2>External Links</h2>
          <p>This website may contain links to external websites, including font sources, GitHub repositories, foundries, documentation pages, license texts, tools, and other third-party resources.</p>
          <p>When you click an external link, you leave this website. The respective external provider is responsible for any data processing that takes place on their website.</p>
          <p>I have no control over the data processing practices of external websites.</p>

          <h2>Cookies and Local Storage</h2>
          <p>This website does not intentionally use marketing or advertising cookies.</p>
          <p>Technically necessary cookies, local storage, or similar technologies may be used if required for website functionality, security, accessibility, preferences, or technical delivery.</p>
          <p>If future features require non-essential cookies or tracking technologies, this privacy policy will be updated and consent will be requested where required.</p>

          <h2>Data Sharing</h2>
          <p>Personal data is not sold.</p>
          <p>Personal data may be shared with technical service providers where necessary to operate, secure, analyze, or maintain the website.</p>
          <p>This may include hosting providers, infrastructure providers, database providers, repository providers, email providers, or external platforms used for contributions and communication.</p>
          <p>Where required, service providers are used on the basis of appropriate data protection agreements.</p>

          <h2>International Data Transfers</h2>
          <p>Some service providers may process data outside the European Union or the European Economic Area.</p>
          <p>Where data is transferred to countries outside the EU or EEA, such transfers are carried out only where a legal basis exists and appropriate safeguards are in place, such as adequacy decisions, standard contractual clauses, or other legally recognized mechanisms.</p>

          <h2>Storage Duration</h2>
          <p>Personal data is stored only for as long as necessary for the respective processing purpose.</p>
          <p>Communication data may be stored for as long as necessary to process the inquiry and for reasonable documentation purposes.</p>
          <p>Technical server, database, analytics, and security logs may be stored temporarily for security, troubleshooting, debugging, and abuse prevention.</p>
          <p>Anonymous download counts may be stored for as long as they are useful for maintaining, improving, and curating the font library. These counts are stored in aggregated form and are not used to identify individual visitors.</p>
          <p>Data may be stored for longer periods if legal retention obligations apply or if storage is necessary to establish, exercise, or defend legal claims.</p>

          <h2>Your Rights</h2>
          <p>You have the right to request information about the personal data stored about you.</p>
          <p>You also have the right to request correction, deletion, restriction of processing, or data portability where legally applicable.</p>
          <p>You have the right to object to certain forms of processing, especially where processing is based on legitimate interests under Art. 6(1)(f) GDPR.</p>
          <p>Where processing is based on consent, you may withdraw your consent at any time with future effect.</p>
          <p>To exercise your rights, you can contact me at: <a href="mailto:hi@bremlo.uk">hi@bremlo.uk</a></p>

          <h2>Right to Lodge a Complaint</h2>
          <p>You have the right to lodge a complaint with a competent data protection supervisory authority.</p>
          <p>You may also contact another competent supervisory authority depending on your place of residence or the place of the alleged infringement.</p>

          <h2>SSL/TLS Encryption</h2>
          <p>This website uses SSL/TLS encryption to protect data transmission.</p>
          <p>You can usually recognize an encrypted connection by the lock icon in the browser address bar.</p>

          <h2>Objection to Advertising Emails</h2>
          <p>The use of contact data published on this website for unsolicited advertising, spam, or promotional communication is hereby objected to.</p>
          <p>Legal action may be taken in the event of unsolicited promotional communication.</p>

          <h2>Changes to This Privacy Policy</h2>
          <p>This privacy policy may be updated to reflect legal, technical, operational, or regulatory changes.</p>
          <p>The current version is always the version published on this website.</p>
        </div>
      </div>
    </section>`;
}

function renderLicenses() {
  setTitle("Font Licenses");
  setPage("inner");
  updateMeta({
    title: "Font Licenses",
    description: "Browse the open licenses for every font in the vinalin library. OFL 1.1 and Fontshare Free font licenses.",
    path: "/licenses",
    ogType: "article",
  });
  app.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">Licenses</p>
        <h1>Clear terms, shipped with every font<span>.</span></h1>
        <p>Open the exact license text bundled with any family. The same file is included when the CLI installs a font.</p>
      </div>
    </section>
    <section class="license-page">
      <div class="container license-list">
        ${fonts.map((font) => `
          <article class="license-card">
            <div>
              <span>${licenseLabel(font)}</span>
              <h2>${font.displayName}</h2>
              <p>Designed by ${font.designer}</p>
            </div>
            <div class="license-card-actions">
              <a class="mini-link" href="${licenseUrlFor(font)}" target="_blank" rel="noreferrer">View license</a>
              <a class="mini-link" href="/fonts/${font.name}" data-local-link>Open family</a>
            </div>
          </article>`).join("")}
      </div>
    </section>`;
}

function downloadFileLabel(file) {
  const weight = String(file.weight || "400").replace(" ", "-");
  return `${weight}${file.style && file.style !== "normal" ? ` ${file.style}` : ""}`;
}

function renderDownloadPanel(font) {
  return `
    <div class="font-download-panel" id="fontDownloads" aria-live="polite">
      <div class="download-card is-loading">
        <span>Preparing local files</span>
        <strong>Loading downloads...</strong>
      </div>
    </div>`;
}

async function bindFontDownloads(font) {
  const panel = document.querySelector("#fontDownloads");
  if (!panel) return;
  try {
    const response = await fetch(`/r/${font.name}.json`);
    if (!response.ok) throw new Error(`Registry returned ${response.status}`);
    const manifest = await response.json();
    const files = Array.isArray(manifest.files) ? manifest.files : [];
    if (!files.length) throw new Error("No downloadable files in registry");
    const primary = files.find((file) => file.style === "normal" && String(file.weight).includes(" "))
      || files.find((file) => file.style === "normal" && String(file.weight) === "400")
      || files[0];
    panel.innerHTML = `
      <a class="download-card" href="${primary.path}" download data-track-font="${font.name}" data-track-event="download">
        <span>Ready to self-host</span>
        <strong>Download ${font.displayName}</strong>
        <small><span>${downloadFileLabel(primary)}</span><span>WOFF2 &darr;</span></small>
      </a>
      <div class="download-file-list">
        <div class="download-file-head"><strong>Family files</strong><span>${files.length} ${files.length === 1 ? "file" : "files"}</span></div>
        ${files.map((file) => `
          <a href="${file.path}" download data-track-font="${font.name}" data-track-event="download">
            <span>${downloadFileLabel(file)}</span><small>WOFF2 &darr;</small>
          </a>`).join("")}
        <a class="license-download-link" href="${manifest.license.url}" target="_blank" rel="noreferrer">
          <span>${manifest.license.type}</span><small>View license &rarr;</small>
        </a>
      </div>`;
  } catch {
    panel.innerHTML = `
      <a class="download-card" href="${font.source}" target="_blank" rel="noreferrer">
        <span>Registry unavailable</span>
        <strong>Open official source</strong>
      </a>`;
  }
}

function renderFontDetail(font) {
  setTitle(font.displayName);
  setPage("detail");
  updateMeta({
    title: font.displayName,
    description: font.description,
    path: `/fonts/${font.name}`,
    ogType: "article",
  });
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
          ${renderDownloadPanel(font)}
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
          <div id="license"><span>License</span><strong><a href="${licenseUrlFor(font)}" target="_blank" rel="noreferrer">${font.license} &rarr;</a></strong></div>
          <div><span>Source</span><strong>${font.source.replace(/^https?:\/\//, "")}</strong></div>
          <div><span>Styles</span><strong>${font.variable ? "Variable" : "Static"}${font.styles.includes("italic") ? " + italics" : ""}</strong></div>
          <div><span>Submitted by</span><strong>@${font.submittedBy}</strong></div>
        </section>
      </div>
    </section>`;
  bindTester();
  bindFontDownloads(font);
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
  updateMeta({
    title: "Page not found",
    description: "The page you are looking for does not exist on vinalin.",
    path: window.location.pathname,
    ogType: "website",
  });
  app.innerHTML = `
    <section class="page-hero">
      <div class="container">
        <p class="eyebrow">404</p>
        <h1>Page not found<span>.</span></h1>
        <p class="hero-copy">That route is not in the public vinalin sitemap.</p>
        <a class="primary-link" href="/" data-local-link>Back to fonts</a>
      </div>
    </section>`;
}

function route() {
  const path = pagePath();
  if (path === "/" || path === "") return renderHome();
  if (path === "/pairing") return renderPairingPage();
  if (path === "/compare") return renderComparePage();
  if (path === "/docs") return renderDocs();
  if (path === "/submit") return renderSubmit();
  if (path === "/donors") return renderDonor();
  if (path === "/legal-notice") return renderLegalNotice();
  if (path === "/privacy") return renderPrivacy();
  if (path === "/licenses") return renderLicenses();
  const match = path.match(/^\/fonts\/([^/]+)$/);
  if (match) {
    const font = fonts.find((item) => item.name === match[1]);
    if (font) return renderFontDetail(font);
  }
  return renderNotFound();
}

function setupMobileNav() {
  const header = document.querySelector(".site-header");
  const nav = document.querySelector("#primaryNavigation");
  if (!header || !nav) return;

  // Create the mobile menu toggle if it doesn't exist in the markup.
  let button = document.querySelector(".menu-toggle");
  if (!button) {
    button = document.createElement("button");
    button.type = "button";
    button.className = "menu-toggle";
    button.setAttribute("aria-controls", "primaryNavigation");
    // Append after the font-count so it appears at the end of the header row.
    const fontCount = header.querySelector(".font-count");
    if (fontCount && fontCount.parentElement) {
      fontCount.parentElement.insertBefore(button, fontCount.nextSibling);
    } else {
      header.appendChild(button);
    }
  }

  if (button.dataset.navSetup) return;
  button.dataset.navSetup = "true";

  // Reset to the three-bar hamburger markup used by the CSS animation.
  button.innerHTML = "<span></span><span></span><span></span>";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-label", "Open menu");
  nav.setAttribute("aria-hidden", "true");

  // Add a backdrop for closing the panel.
  if (!document.querySelector(".nav-backdrop")) {
    const backdrop = document.createElement("div");
    backdrop.className = "nav-backdrop";
    backdrop.setAttribute("aria-hidden", "true");
    header.appendChild(backdrop);
  }

  function setOpen(isOpen) {
    document.body.classList.toggle("nav-open", isOpen);
    button.setAttribute("aria-expanded", String(isOpen));
    button.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
    nav.setAttribute("aria-hidden", isOpen ? "false" : "true");
  }

  function closeMenu() {
    setOpen(false);
  }

  button.addEventListener("click", () => {
    const willOpen = !document.body.classList.contains("nav-open");
    setOpen(willOpen);
    if (willOpen) {
      const firstLink = nav.querySelector("a[href]");
      if (firstLink) firstLink.focus();
    }
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  // Close the menu when tapping the frosted overlay background (not a link).
  nav.addEventListener("click", (event) => {
    if (event.target === nav) closeMenu();
  });

  document.addEventListener("click", (event) => {
    if (event.target.closest(".nav-backdrop")) closeMenu();
  });


  function getFocusable() {
    const inside = nav.querySelectorAll(
      "a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled])"
    );
    return [button, ...inside];
  }

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      return;
    }
    if (!document.body.classList.contains("nav-open")) return;
    if (event.key !== "Tab") return;
    const focusable = getFocusable();
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  // Trap focus inside the open mobile panel.
  document.addEventListener("focusin", (event) => {
    if (!document.body.classList.contains("nav-open")) return;
    if (event.target === button || nav.contains(event.target)) return;
    const focusable = getFocusable();
    if (focusable.length) focusable[0].focus();
  });

  // Close the mobile menu when crossing back to the desktop breakpoint.
  const mediaQuery = window.matchMedia("(min-width: 721px)");
  const onMediaChange = (event) => {
    if (event.matches) closeMenu();
  };
  if (mediaQuery.addEventListener) {
    mediaQuery.addEventListener("change", onMediaChange);
  } else if (mediaQuery.addListener) {
    mediaQuery.addListener(onMediaChange);
  }
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

function setupLicenseNavigation() {
  const footerNav = document.querySelector(".footer-inner nav");
  if (!footerNav || footerNav.querySelector('[href="/licenses"]')) return;
  footerNav.insertAdjacentHTML("afterbegin", '<a href="/licenses" data-local-link>Licenses</a>');
}

function setupFooterExtras() {
  const footer = document.querySelector(".footer-inner");
  if (!footer || footer.querySelector(".footer-projects")) return;
  const githubLink = footer.querySelector('a[href="https://github.com/thisisbremlo/vinalin"]');
  if (githubLink) {
    githubLink.classList.add("github-star-badge");
    githubLink.setAttribute("aria-label", "Star vinalin on GitHub");
    githubLink.innerHTML = `
      <svg class="github-icon" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style="margin-right: 2px;">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
      <span>GitHub</span>
      <strong data-github-stars>--</strong>`;
  }
  footer.insertAdjacentHTML("beforeend", `
    <div class="footer-projects">
      <span>A project by <a href="https://bremlo.uk" target="_blank" rel="noreferrer">Bremlo</a></span>
      <span class="footer-side-project">Also building <a href="https://savault.de" target="_blank" rel="noreferrer">Savault</a></span>
    </div>`);
  hydrateGithubStars();
}

async function hydrateGithubStars() {
  const output = document.querySelector("[data-github-stars]");
  if (!output) return;
  const cacheKey = "vinalin:github-stars";
  try {
    const cached = JSON.parse(localStorage.getItem(cacheKey) || "null");
    if (cached && Date.now() - cached.updatedAt < 3600000) {
      output.textContent = new Intl.NumberFormat("en", { notation: "compact" }).format(cached.count);
      return;
    }
  } catch {
    // A live request below can still populate the badge.
  }
  try {
    const response = await fetch("https://api.github.com/repos/thisisbremlo/vinalin", {
      headers: { Accept: "application/vnd.github+json" },
    });
    if (!response.ok) throw new Error(`GitHub returned ${response.status}`);
    const repository = await response.json();
    const count = Number(repository.stargazers_count) || 0;
    output.textContent = new Intl.NumberFormat("en", { notation: "compact" }).format(count);
    localStorage.setItem(cacheKey, JSON.stringify({ count, updatedAt: Date.now() }));
  } catch {
    output.textContent = "0";
  }
}

document.addEventListener("click", async (event) => {

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

  // Mobile copy-link button: copies the current page URL and visually
  // confirms with a short on-button state swap. Lives next to the install
  // box but hidden on desktop where the CLI command is the right answer.
  const copyLink = event.target.closest("[data-copy-link]");
  if (copyLink) {
    // Cancel any pending reset from a prior click so a quick re-click
    // doesn't get its confirmation wiped out by the earlier timer.
    if (copyLink._copyResetTimer) {
      clearTimeout(copyLink._copyResetTimer);
      copyLink._copyResetTimer = null;
    }
    const linkLabel = copyLink.querySelector(".copy-link-button-text") || copyLink;
    const resetLabel = linkLabel.textContent;
    const url = SITE_URL;
    let ok = false;
    try {
      await navigator.clipboard.writeText(url);
      ok = true;
    } catch {
      // Fallback for insecure context / older mobile browsers where the
      // async clipboard API is blocked. execCommand("copy") still works
      // in legacy Safari iOS when triggered by a user gesture.
      try {
        const helper = document.createElement("textarea");
        helper.value = url;
        helper.setAttribute("readonly", "");
        helper.style.position = "fixed";
        helper.style.top = "-1000px";
        helper.style.opacity = "0";
        document.body.appendChild(helper);
        helper.select();
        helper.setSelectionRange(0, url.length);
        ok = document.execCommand("copy");
        document.body.removeChild(helper);
      } catch {
        ok = false;
      }
    }
    if (ok) {
      copyLink.dataset.copyState = "copied";
      linkLabel.textContent = "Link copied";
      copyLink.setAttribute("aria-label", "Link copied to clipboard");
    } else {
      copyLink.dataset.copyState = "error";
      linkLabel.textContent = "Copy failed";
      copyLink.setAttribute("aria-label", "Copy failed — please try again");
    }
    copyLink._copyResetTimer = setTimeout(() => {
      copyLink._copyResetTimer = null;
      if (!copyLink.isConnected) return; // route() replaced the DOM
      delete copyLink.dataset.copyState;
      linkLabel.textContent = resetLabel;
      copyLink.setAttribute("aria-label", "Copy website link");
    }, 1600);
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
    withViewTransition(() => {
      route();
      if (window.location.hash) {
        scrollToHash();
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    });
    document.body.classList.remove("nav-open");
    const menuButton = document.querySelector(".menu-toggle");
    menuButton?.setAttribute("aria-expanded", "false");
    menuButton?.setAttribute("aria-label", "Open menu");
  }
});

window.addEventListener("popstate", () => {
  withViewTransition(() => {
    route();
    scrollToHash();
  });
});
route();
setupMobileNav();
setupMobileNavArrows();
setupLicenseNavigation();
setupFooterExtras();
scrollToHash();
hydrateDownloadCounts();

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
