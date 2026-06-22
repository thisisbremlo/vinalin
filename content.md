# fontlr Site Content Guide

## Overview

fontlr is a curated library and registry of open-source typefaces. The site helps founders, designers, and developers discover high-quality fonts, inspect live specimens, build pairings, compare licenses, and install font files into projects with a CLI.

The site is a static single-page app with routed pages. It uses one shared header, one shared footer, a quiet editorial visual system across every route, and generated page content from the font registry in `app.js`.

## Brand Positioning

Primary idea: quality open-source fonts that are easy to self-host.

Home page message: "fontlr Type Library."

Tone: curated, typographic, direct, minimal, practical.

Audience:
- Designers looking for type inspiration.
- Developers who want self-hosted fonts without license hunting.
- Product teams choosing fonts for apps, docs, dashboards, editorial pages, posters, and brand systems.
- Contributors who want to submit open-license fonts.

## Global Structure

The site has these main routes:

- `/` - Home and font catalog.
- `/pairing` - Font pairing lab.
- `/docs` - Installation and CLI documentation.
- `/submit` - Contribution instructions.
- `/donor` - Support and donor information.
- `/fonts/<slug>` - Detail page for each font family.

The header appears on every page and includes:

- fontlr brand link.
- Fonts link.
- Pairing link.
- Docs link.
- Submit link.
- Donors link.
- Font count link showing 17 fonts.

The footer appears on every page and includes:

- fontlr brand statement.
- Main links to docs, submit, and GitHub.
- A quieter copyright/legal line with Legal Notice and Privacy Policy links.

## Legal Pages

The site includes placeholder legal pages for launch preparation:

- `/legal-notice` renders a Legal Notice page with a large placeholder text field.
- `/privacy` renders a Privacy Policy page with a large placeholder text field.

The placeholder content must be replaced before publishing.

## Download Tracking

fontlr tracks local interaction counts in the browser by default. Production tracking is designed around a minimal Supabase event table:

- Store only `font_slug`, `event_type`, `path`, and `created_at`.
- Count `download` events through an aggregate view.
- Do not store cookies, user IDs, fingerprints, IP addresses, or user agents in the analytics table.
- Keep raw events private and expose only aggregate counts to the frontend.
- Document the setup on the privacy page before enabling it.

## Visual System

The site uses a consistent dark-mode type-gallery style.

Core colors:

- Background: near-black `#080909`.
- Main text: warm cream `#ffffe3`.
- Muted text: translucent warm cream.
- Dividers: subtle translucent cream borders.
- Accent surfaces: very dark olive/charcoal panels.
- Reverse buttons: cream background with dark text.

Design language:

- Large editorial typography.
- Thin divider lines.
- Flat surfaces instead of rounded cards.
- Dark gallery canvas.
- Cream text and controls.
- Live font specimens as the primary visual asset.
- Dense but readable content blocks.
- High-contrast interactive states.

Accessibility notes:

- Dark mode is applied to every page.
- Text, links, buttons, selected states, muted copy, code blocks, and cards were contrast-checked.
- Layout was checked for horizontal overflow.
- Header navigation remains visible and consistent.
- Form fields, selects, buttons, and range controls retain visible focus and active states.

## Home Page

Route: `/`

Purpose: introduce fontlr as a curated open font library, spotlight one useful typeface, show popular fonts with download counts, expose the searchable catalog, and highlight foundries/designers.

Sections:

1. Hero

   The hero uses a large editorial statement:

   "fontlr Type Library."

   Primary actions:

   - View typefaces.
   - Build a pairing.
   - Read the install guide.

2. Spotlight

   Highlights Space Grotesk as the featured typeface.

   Includes:

   - Eyebrow: "In the spotlight".
   - Font name.
   - Designer name.
   - Description.
   - View typeface button.
   - Large specimen poster using the font's own preview text.

3. Hot Right Now

   Horizontal ranking band listing the first 10 fonts from the registry.

   Each item includes:

   - Rank number.
   - Font display name.
   - Link to the font detail page.

4. Latest Typefaces

   Searchable/filterable font catalog.

   Controls:

   - Search input.
   - Type filter: all, sans, serif, mono, display, handwriting.
   - Feature filter: all, variable, italics, static.
   - Preview text input.
   - Preview size range slider.

   Each font card includes:

   - Font name.
   - Designer.
   - Live specimen rendered in the actual font.
   - Feature summary.
   - View Family link.

5. Fresh Foundries

   Shows a short grid of unique designers/foundries from the registry.

   Each card includes:

   - Category label.
   - Designer/foundry name.
   - Link to a representative font detail page.

6. Closing About/Install Block

   Restates fontlr as a curated showcase of usable open-source typefaces.

   Includes an install command module for Fraunces.

## Font Detail Pages

Route pattern: `/fonts/<slug>`

Purpose: Provide a type specimen, install path, metadata, glyph preview, style list, and source/license details for one font.

Top structure:

- Back link.
- Section navigation: Styles, Glyphs, Details, License.
- Metadata strip with family name, style count, and variable/static status.
- License label.
- Large font family specimen.
- Description.
- Install command module.
- Download Family link to source.

Sections:

1. Styles

   Shows weight/style rows derived from available weights.

   Each row includes:

   - Style label such as Light, Regular, Medium, Bold, or Black.
   - Large sample word rendered at that weight.
   - Add Style link.

2. Type Tester

   Editable live text area rendered in the selected font.

   Controls:

   - Size range slider.
   - Tracking range slider.
   - Weight buttons.
   - Style buttons when italic/roman variants exist.
   - Reset button.

3. Glyphs

   Shows:

   - Featured capital glyph.
   - Uppercase alphabet.
   - Lowercase alphabet.
   - Numerals.
   - Solid/Outlines buttons for visual continuity.

4. Weights

   Lists available weights with a large preview sentence for each weight.

5. Details

   Metadata grid:

   - Designer.
   - Version.
   - License.
   - Source.
   - Styles.
   - Submitted by.

## Pairing Page

Route: `/pairing`

Purpose: Help users build a simple three-role font system.

Hero:

Title: "Build a font system with clear roles."

Copy explains that users can choose headline, body, and accent voices, generate alternatives, and inspect hierarchy.

Main content:

- Font pairing lab panel.
- Select controls for headline, body, and accent.
- Generate pairing button.
- Preview specimen showing a headline, body copy, and accent label.
- Selected role chips for headline, body, and accent.
- Warning or success message based on pairing quality.

Pairing logic:

- Headline role favors display, serif, sans, and variable fonts.
- Body role favors sans and serif fonts while avoiding display/handwriting.
- Accent role favors mono, handwriting, and display fonts.
- Warnings appear when roles are too similar or when display fonts are overused.

## Docs Page

Route: `/docs`

Purpose: Explain how to install and self-host fonts from fontlr.

Hero:

Title: "Install fonts like components."

Sidebar navigation:

- Quick start.
- Next.js.
- React / Vite.
- CLI reference.
- Registry API.
- Self-hosting.
- Licenses.

Content sections:

1. Quick Start

   Tells users to pick a font and run the add command.

2. Next.js App Router

   Explains generated local font files and `next/font/local` integration.

3. React / Vite

   Explains generated public font files and CSS imports.

4. CLI Reference

   Documents:

   - `npx fontlr add <name>`
   - `--force`
   - `--dir <path>`
   - `--registry <url>`
   - `npx fontlr list`

5. Registry API

   Documents static JSON and file endpoints.

6. Self-hosting

   Explains custom registry URLs and full `/r` mirrors.

7. Licenses

   Reminds users that license text ships next to the font files and should remain there.

## Submit Page

Route: `/submit`

Purpose: Explain how contributors can add a font to the registry.

Hero:

Title: "Add a font to the registry."

Copy explains that submissions happen as pull requests, with no forms or accounts required beyond GitHub.

Main content:

1. Fork the registry.
2. Add your font folder.
3. Open a pull request.

Requirements panel:

- Open redistribution license such as OFL-1.1 or equivalent.
- `.woff2` files.
- License text must ship with files.
- Submitter GitHub handle.
- Curated quality bar.

Schema section:

Shows a sample `font.json` with:

- Name.
- Display name.
- Version.
- Category.
- Designer.
- License.
- Source.
- Variable status.
- Axes.
- Weights.
- Styles.
- Fallback.
- Preview text.
- Description.
- Submitter.
- Files.

Primary action:

- Open a pull request.

## Donor Page

Route: `/donor`

Purpose: Provide a support path for the project.

Hero:

Title: "People who keep fontlr going."

Main content:

1. Support card

   Explains that fontlr is free and community-curated.

   Action:

   - Support on Ko-fi.

2. Supporters card

   Placeholder state:

   - No supporters listed yet.
   - Be the first.

## 404 Page

Fallback route for unknown paths.

Content:

- Eyebrow: 404.
- Title: "Page not found."
- Copy: "That route is not in the public fontlr sitemap."
- Link back to fonts.

## Install Command Module

The install module appears on the home, docs, and font detail pages.

It supports:

- npm.
- pnpm.
- bun.

Command examples:

- `npx fontlr add inter`
- `pnpm dlx fontlr add inter`
- `bunx fontlr add inter`

Behavior:

- Tabs switch the displayed command.
- Copy button writes the current command to the clipboard.
- Button text changes to "copied" briefly after a successful copy.

## Font Registry

The site currently includes 17 fonts:

- Cabinet Grotesk.
- Clash Grotesk.
- Departure Mono.
- Fraunces.
- Geist.
- Geist Mono.
- HS LunaObscura.
- Inter.
- JetBrains Mono.
- Manrope.
- Momo Signature.
- Neutral Sans.
- Parkinsans.
- Space Grotesk.
- Tanker.
- TikTok Sans.
- Zalando Sans.

Font data fields:

- Slug.
- Display name.
- Version.
- Category.
- Designer.
- License.
- Source URL.
- Variable/static status.
- Weights.
- Styles.
- Fallback family.
- Preview text.
- Description.
- Submitter.
- CSS font family.

Categories:

- Sans.
- Serif.
- Mono.
- Display.
- Handwriting.

Feature labels:

- Variable.
- Variable and italics.
- Static/weight count.

## Routing Behavior

The app uses client-side routing.

Local links marked with `data-local-link` intercept clicks, update browser history, route content without a full page reload, and scroll to the top or the requested hash.

File protocol support exists through hash-based routing.

Unknown routes render the 404 page.

## Interaction Details

Catalog filtering:

- Search matches font name, designer, category, and preview text.
- Type filter limits by category.
- Feature filter limits by variable, italics, or static fonts.
- Preview text replaces every visible card specimen.
- Size slider adjusts specimen size.
- Result count updates live.

Pairing:

- Changing any select updates the preview.
- Generate pairing creates a fresh suggested system.
- Warnings explain potential role conflicts.

Tester:

- Editable text updates directly in the contenteditable field.
- Size and tracking sliders update live.
- Weight and style buttons update live.
- Reset restores size, tracking, weight, style, and original text.

Clipboard:

- Copy buttons use `navigator.clipboard.writeText`.
- If copying fails, the button simply returns to its default label.

## Technical Assets

Main files:

- `index.html` provides the shell, header, footer, and app mount.
- `app.js` contains font data, routing, page rendering, and interactions.
- `styles.css` contains font-face declarations and all visual styling.
- `package.json` exposes the `fontlr` CLI and project scripts.
- `bin/fontlr.js` installs fonts from the generated registry.
- `registry/` contains source font manifests and submitted font files.
- `r/` contains the generated public registry API.
- `.github/` contains pull request and validation workflow files.
- `scripts/build-registry.js` generates public registry files.
- `scripts/validate-registry.js` validates registry metadata.
- `scripts/mirror-font-files.js` mirrors currently referenced hosted font files into the GitHub registry folder.

Static route folders:

- `/docs/index.html`
- `/donor/index.html`
- `/donors/index.html`
- `/pairing/index.html`
- `/submit/index.html`
- `/fonts/<slug>/index.html`

These folders support static hosting paths, while the actual content is rendered by the shared app shell.

## GitHub Workflow

fontlr now uses GitHub as the source of truth for submissions and registry files.

Maintainer setup:

- Create the GitHub repository `thisisbremlo/fontlr`.
- Push this local project to `main`.
- Run `npm run mirror:fonts` once to copy the currently referenced `.woff2` files into `registry/fonts/<slug>/files/`.
- Run `npm run build:registry`.
- Run `npm run validate:registry`.
- Commit the generated `r/` registry output.
- Deploy the static site with GitHub Pages or another static host.

Contributor flow:

- Fork the repository.
- Add `registry/fonts/<slug>/font.json`.
- Add `.woff2` files and license text under `registry/fonts/<slug>/files/`.
- Run `npm run build:registry`.
- Run `npm run validate:registry`.
- Open a pull request.

GitHub Actions validates the registry on pull requests and pushes to `main`.

## CLI Workflow

The package exposes a `fontlr` binary.

Supported commands:

- `fontlr list`
- `fontlr add <name>`
- `fontlr add <name> --registry <url-or-path>`
- `fontlr add <name> --dir <path>`
- `fontlr add <name> --force`

Install commands:

- `npx fontlr list`
- `npx fontlr add inter`

## UX Principles

The site should feel:

- Curated rather than exhaustive.
- Typographic rather than decorative.
- Fast to scan.
- Useful for both designers and developers.
- Consistent from home to detail to documentation.

Design rules to preserve:

- Keep the dark mode consistent across pages.
- Keep contrast high for all text and controls.
- Use dividers and spacing instead of heavy cards.
- Let type specimens be the main visual element.
- Avoid unnecessary decoration.
- Keep page-specific controls obvious and close to the content they affect.
- Preserve responsive layouts without horizontal overflow.
