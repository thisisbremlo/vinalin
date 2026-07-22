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

### Local test (works before npm publish)

From this repository:

```bash
npx --yes . list --registry ./r/registry.json
npx --yes . add inter --registry ./r/registry.json
```

Or link the binary globally:

```bash
npm link
vinalin list --registry ./r/registry.json
vinalin add inter --registry ./r/registry.json
```

### Public `npx @bremlo/vinalin` (end users)

`npx @bremlo/vinalin add <font>` needs two public pieces:

1. The `vinalin` package on npm
2. The registry at `https://raw.githubusercontent.com/thisisbremlo/vinalin/main/r/registry.json`

#### 1. Align the GitHub repo name and visibility

Your git remote is currently `thisisbremlo/fontlr`, but the CLI and site expect `thisisbremlo/vinalin`.

1. On GitHub: **Settings → General → Repository name** → rename `fontlr` to `vinalin`
2. Set the repository to **Public** (required for raw registry + font downloads)
3. Update your local remote:

```bash
git remote set-url origin https://github.com/thisisbremlo/vinalin.git
git push -u origin main
```

4. Confirm the registry is reachable:

```bash
curl -I https://raw.githubusercontent.com/thisisbremlo/vinalin/main/r/registry.json
```

You should see `HTTP/2 200` (or `HTTP/1.1 200`).

#### 2. Log in to npm and publish

Your machine currently has an expired/invalid npm token (`npm whoami` returns 401).

```bash
npm logout
npm login
npm whoami
npm publish --access public
```

After publish:

```bash
npx --yes @bremlo/vinalin list
npx --yes @bremlo/vinalin add inter
```

Every registry entry must include at least one `.woff2` file and a bundled license before validation passes.

## Submissions

Font submissions happen through pull requests. See [CONTRIBUTING.md](CONTRIBUTING.md).
