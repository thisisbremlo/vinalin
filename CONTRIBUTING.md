# Contributing fonts

fontlr accepts fonts through GitHub pull requests.

## Add a font

1. Fork the repository.
2. Create `registry/fonts/<slug>/`.
3. Add `font.json`.
4. Add `.woff2` files and the license text under `registry/fonts/<slug>/files/`.
5. Run `npm run build:registry`.
6. Run `npm run validate:registry`.
7. Open a pull request.

For the existing catalog, maintainers can mirror the currently referenced font files with:

```bash
npm run mirror:fonts
npm run build:registry
```

The mirror task also retrieves the license text for each maintained catalog family. New submissions must still include and verify their own license file.

## Manifest

Use this shape:

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
  "files": [
    { "path": "/r/fonts/your-font/YourFont.woff2", "weight": "100 900", "style": "normal" }
  ]
}
```

The validator checks metadata shape. Maintainers still review quality, licensing, and file naming.
