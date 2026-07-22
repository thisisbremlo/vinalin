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
        <span aria-hidden="true">⌄</span>
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

    select.addEventListener("change", () => {
      sync();
      updatePairing(false);
    });
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
setupMenuToggleIcon();
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
