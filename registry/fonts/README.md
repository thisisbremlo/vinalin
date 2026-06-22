# Font folders

Each accepted font gets a folder here:

```text
registry/fonts/<slug>/
  font.json
  files/
    <font-file>.woff2
    OFL.txt
```

Run `npm run build:registry` after adding or changing a font. The generated public registry is written to `r/`.
