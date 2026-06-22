# fontlr

fontlr is a curated open font library with a static website, GitHub-based submissions, a generated registry, and a CLI for installing self-hosted font files.

## Local development

```bash
npm run build:registry
npm run validate:registry
```

Serve the site with any static server from the repository root.

## Mirror current font files

The website still references the existing hosted font files. To move those files into this GitHub repo, run:

```bash
npm run mirror:fonts
npm run build:registry
npm run validate:registry
```

This creates `registry/fonts/<slug>/files/*.woff2` and copies them into the public `r/fonts/<slug>/` output during the registry build. Add the correct license text files before accepting outside submissions.

## CLI

Local test:

```bash
npm link
fontlr list --registry ./r/registry.json
fontlr add inter --registry ./r/registry.json
```

Install usage:

```bash
npx fontlr add inter
```

Fonts must include `.woff2` files in the registry before `add` can install them.

## Submissions

Font submissions happen through pull requests. See [CONTRIBUTING.md](CONTRIBUTING.md).
