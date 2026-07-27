# Font folders

Each accepted font gets a folder here:

```text
registry/fonts/<slug>/
  font.json
  files/
    <font-file>.woff2
    OFL.txt
```

The `font.json` file is the source of truth for font metadata. Run `npm run sync:fonts` to update `app.js` from `font.json` files, then `npm run build:registry` to generate the public registry in `r/`.
