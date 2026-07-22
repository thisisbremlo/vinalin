# vinalin ── Curated Type Library & Self-Hosted Font CLI

**vinalin** is a curated, open-source font library and toolchain designed for founders, designers, and developers. It provides a lightweight catalog website to discover open fonts, an interactive pairing preview tool, and a zero-dependency CLI to download and configure font files for self-hosting in your own applications.

Instead of hotlinking fonts from third-party CDNs, vinalin treats fonts like code components: you inspect them, install them, and own them directly in your repository.

---

## The Philosophy

- **Self-Hosted by Default**: The CLI downloads optimized `.woff2` files and generates stylesheet integrations directly into your project. There are no external runtime requests, no third-party tracking, and zero dependencies on vinalin's servers at runtime.
- **Curated, Not Exhaustive**: Rather than cataloging thousands of variations, vinalin selects high-quality open-source typefaces (from Google Fonts, Fontshare, independent foundries, etc.) that excel in digital interfaces and editorial design.
- **Community Curation**: Submissions are handled entirely via GitHub pull requests. There are no accounts to create, no forms to fill out, and every accepted font credits its submitter on the website.
- **Typographic & Fast**: The interface is built to prioritize visual scanning, font comparison, and layout testing under real-world scenarios (body text, headlines, code listings).

## Key Features

### 1. Interactive Catalog & Font Tester
Test, preview, and compare font weights, styles, and variable axes directly in the browser. You can custom-type sample text to see how a typeface handles specific glyphs before installing.

### 2. Layout & Pairing Simulator
Test pairs of headlines, body copy, and UI text blocks side-by-side. Visual layouts like dashboards, editorial pages, and documentation let you preview type pairings in realistic contexts.

### 3. Developer CLI
Install any font in the catalog with a single command. The CLI detects your project type (Next.js, Tailwind, vanilla CSS, etc.) and automatically downloads the `.woff2` files, bundles the license metadata, and generates ready-to-import CSS or Next.js `localFont` modules.

```bash
npx @bremlo/vinalin add inter
```

### 4. Git-Driven Submissions
Adding a font is as simple as adding metadata to a JSON file and committing `.woff2` assets. See [CONTRIBUTING.md](CONTRIBUTING.md) to contribute a typeface.

---

## Technical Details

The library is a static page powered by a generated JSON registry.

- **The Registry:** A structured catalog schema generated from local fonts and metadata.
- **Registry Build:** `npm run build:registry`
- **Validation:** `npm run validate:registry`
- **Local Testing:** Run `npm start` to spin up the local preview dev server.

For testing the CLI locally from within this repository:
```bash
npx --yes . add inter --registry ./r/registry.json
```
