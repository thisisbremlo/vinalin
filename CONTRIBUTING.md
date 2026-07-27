# Contributing fonts

vinalin accepts fonts through GitHub pull requests.

## Add a font

1. Fork the repository.
2. Create `registry/fonts/<slug>/font.json` using the schema below.
3. Add `.woff2` files and the license text under `registry/fonts/<slug>/files/`.
4. Run `npm run build:registry` — this syncs everything (app.js, registry, license files).
5. Run `npm run validate:registry` to verify metadata.
6. Open a pull request.

That's it. One command syncs the font into the website catalog, the licenses page, the docs page, the foundry listing, and the public registry.

## font.json schema

Create `registry/fonts/<slug>/font.json`:

```json
{
  "$schema": "../../schema.json",
  "name": "your-font",
  "displayName": "Your Font",
  "version": "1.0",
  "category": "sans",
  "designer": "Jane Doe",
  "license": { "type": "OFL-1.1", "url": "/r/fonts/your-font/files/OFL.txt" },
  "source": "https://github.com/example/your-font",
  "variable": true,
  "axes": { "wght": [100, 900] },
  "weights": [400, 500, 700],
  "styles": ["normal"],
  "fallback": "sans-serif",
  "previewText": "Show it off in one line.",
  "description": "One or two sentences about the typeface.",
  "submittedBy": { "github": "your-handle" },
  "family": "Your Font"
}
```

### Fields

- `name` — Kebab-case slug used in CLI commands and URLs.
- `displayName` — Human-readable name shown on the site.
- `version` — Font version string.
- `category` — One of `sans`, `serif`, `mono`, `display`, `handwriting`.
- `designer` — Designer or foundry name.
- `license` — Object with `type` (e.g. `OFL-1.1`) and `url` pointing to the bundled license file.
- `source` — URL to the font's upstream repository or download page.
- `variable` — `true` for variable fonts, `false` for static.
- `axes` — Optional. Variable font axes range (e.g. `{ "wght": [100, 900] }`). Omit for static fonts.
- `weights` — Array of available weight values.
- `styles` — Array of `normal` and/or `italic`.
- `fallback` — CSS fallback family (e.g. `sans-serif`, `serif`, `monospace`).
- `previewText` — Short specimen text shown on the catalog and detail pages.
- `description` — One or two sentences about the typeface.
- `submittedBy` — Object with `github` set to your handle.
- `family` — CSS font family name (usually matches `displayName`).

### What build:registry does

Running `npm run build:registry` reads every `font.json` file and:

1. Updates the `fonts` array in `app.js` (powers the website catalog, /licenses page, /docs page, foundry listing, and font detail pages).
2. Generates `r/registry.json` (the public API used by the CLI).
3. Generates individual `r/<font>.json` files.
4. Copies `.woff2` files and license text from `registry/fonts/<slug>/files/` to `r/fonts/<slug>/`.

The validator checks metadata shape. Maintainers still review quality, licensing, and file naming.
