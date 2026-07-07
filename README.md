# vinalin

vinalin is a curated open font library with a static website, GitHub-based submissions, a generated registry, and a CLI for installing self-hosted font files.

## Local development

```bash
npm run build:registry
npm run validate:registry
```

Serve the site with any static server from the repository root.

## Mirror font files and licenses

To refresh the downloadable assets from their authoritative Google Fonts, Fontshare, GitHub, and foundry sources, run:

```bash
npm run mirror:fonts
npm run build:registry
npm run validate:registry
```

This creates `registry/fonts/<slug>/files/*.woff2`, stores the matching license text, and copies both into the public `r/fonts/<slug>/` output during the registry build. The website and CLI use those generated local assets.

## CLI

Local test:

```bash
npm link
vinalin list --registry ./r/registry.json
vinalin add inter --registry ./r/registry.json
```

Install usage:

```bash
npx vinalin add inter
```

Every registry entry must include at least one `.woff2` file and a bundled license before validation passes.

## Submissions

Font submissions happen through pull requests. See [CONTRIBUTING.md](CONTRIBUTING.md).
