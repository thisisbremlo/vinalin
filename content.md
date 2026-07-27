# vinalin Site Content Guide

## Overview

vinalin is a curated library and registry of open-source typefaces. The site helps founders, designers, and developers discover high-quality fonts, inspect live specimens, build pairings, compare licenses, and install font files into projects with a CLI.

The site is a static single-page app with routed pages. It uses one shared header, one shared footer, a quiet editorial visual system across every route, and generated page content from the font registry in `app.js`.

## Brand Positioning

Primary idea: quality open-source fonts that are easy to self-host.

Home page message: "vinalin Type Library."

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
- `/donors` - Support and donor information.
- `/fonts/<slug>` - Detail page for each font family.
- `/licenses` - Browse open licenses for every font.
- `/copyright` - Copyright notice and related projects.
- `/legal-notice` - Legal notice and operator information.
- `/privacy` - Privacy policy.

The header appears on every page and includes:

- vinalin brand link.
- Fonts link.
- Pairing link.
- Docs link.
- Submit link.
- Donors link.
- Font count link showing 17 fonts.

The footer appears on every page and includes:

- GitHub stars badge (left).
- Project by bremlo with links to Savault and WhoIsly (center).
- Contact email: hi@bremlo.uk.
- Main navigation links (Fonts, Pairing, Docs, Submit, Donors, Licenses).
- Legal navigation (Legal Notice, Privacy Policy, Copyright).
- Copyright line: Copyright © 2025 bremlo.

## Legal Pages

The site includes full legal content for launch preparation:

- `/legal-notice` renders a Legal Notice page with operator information (Benjamin Michael Bremer), responsibility for content, font licensing, third-party links, copyright, and dispute resolution.
- `/privacy` renders a Privacy Policy page with GDPR bases, hosting, Supabase, GitHub, cookies, data rights, and controller information.

## Download Tracking

vinalin tracks local interaction counts in the browser by default. Production tracking is designed around a minimal Supabase download event table and a public aggregate counts table:

- Store only `font_slug`, `event_type`, `path`, and `created_at`.
- Count `download` events through `font_download_counts`, maintained by a database trigger.
- Do not store cookies, user IDs, fingerprints, IP addresses, or user agents in the analytics table.
- Keep raw events private and expose only aggregate counts to the frontend.
- Apply `supabase/migrations/202606220001_download_events.sql` before enabling the public anon key.
- Document the setup on the privacy page before enabling it.

## Visual System

The site uses a light editorial style with dark text on a warm cream background.

Core colors:

- Background: warm cream `#ffffe3`.
- Main text: near-black `#070707`.
- Muted text: olive-grey `#6f6f5e`.
- Dividers: translucent black `rgba(7, 7, 7, 0.18)`.
- Strong dividers: `rgba(7, 7, 7, 0.34)`.
- Accent surfaces: pale yellow-green `#e9e99d`.
- Reverse text: warm cream `#ffffe3` on dark backgrounds.
- Dark surfaces: `#1f1d1b` for code blocks, footer, glyph feature panels.

Design language:

- Large editorial typography.
- Thin divider lines.
- Flat surfaces with zero border-radius.
- Generous whitespace.
- Monochromatic palette with warm undertones.
- Live font specimens as the primary visual asset.
- Dense but readable content blocks.
- High-contrast interactive states.

Accessibility notes:

- Text, links, buttons, selected states, muted copy, code blocks, and cards are contrast-checked.
- Layout is checked for horizontal overflow.
- Header navigation remains visible and consistent.
- Form fields, selects, buttons, and range controls retain visible focus and active states.

## Home Page

Route: `/`

Purpose: introduce vinalin as a curated open font library, spotlight one useful typeface, show popular fonts with download counts, expose the searchable catalog, and highlight foundries/designers.

Sections:

1. Hero

   The hero uses a large editorial statement:

   "vinalin Type Library."

   Includes a font count metadata strip (17 open-source families, Self-hosted installs, License-aware catalog) and an install command card for Inter.

2. Most Popular Strip

   Horizontal ranking band listing the top 6 fonts sorted by local download count.

   Each item includes:

   - Rank number.
   - Font display name.
   - Download count.
   - Popularity descriptor and license label.
   - Link to the font detail page.

3. In Short Editorial

   A brief editorial statement summarizing the library's purpose:

   "A curated collection of production-ready typefaces with live specimens, licenses, install commands, and enough context to choose quickly."

4. Spotlight

   Highlights the most popular font as the featured typeface (dynamically chosen by download count).

   Includes:

   - Eyebrow: "Spotlight family".
   - Font name rendered in its own typeface.
   - Description.
   - Metadata grid: category, style count, variable/static status.
   - Open specimen link.
   - Large specimen poster using the font's own preview text.

5. Quote Block

   An editorial quote reinforcing the library's value proposition:

   "For teams that need type to feel considered, licensed, local, and ready for the product."

6. Three Chapters

   Three editorial panels explaining the library's approach:

   - Tools: The local-first font stack. Install commands, license files, and predictable fallbacks.
   - Craft: Specimens are the new shortlist. Live rendering at real sizes with real preview copy.
   - Teams: Shared type choices reduce drift. Designers, engineers, and contributors work from the same registry.

7. Catalog

   Searchable/filterable font catalog.

   Controls:

   - Search input (matches font name, designer, category, preview text).
   - Type filter: all, sans, serif, mono, display, handwriting.
   - Feature filter: all, variable, italics, static.
   - License filter: all, OFL-1.1, Fontshare Free Font License.
   - Preview text input.
   - Preview size range slider.
   - List/Grid view toggle.

   Each font card includes:

   - Font name.
   - Designer.
   - Live specimen rendered in the actual font.
   - Feature summary.
   - Category badge.
   - License label.
   - View Family link.

8. Fresh Foundries

   Shows a list of unique designers/foundries from the registry, sorted by number of contributed families.

   Each card includes:

   - Index number.
   - Designer/foundry name.
   - Category labels and family count.
   - List of contributed font names.
   - Large type specimen preview.
   - Link to the primary font's detail page.

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
- Preview specimen showing a headline, body copy, accent label, and real-world scenario cards (Product, Docs, Editorial).

Pairing logic:

- Headline role favors display, serif, sans, and variable fonts.
- Body role favors sans and serif fonts while avoiding display/handwriting.
- Accent role favors mono, handwriting, and display fonts.

## Docs Page

Route: `/docs`

Purpose: Explain how to install and self-host fonts from vinalin.

Hero:

Title: "Install fonts like components."

Sidebar navigation:

- Quick start.
- Find a font name.
- All font names.
- CLI reference.
- Where files go.
- Use the font.
- Licenses.
- Troubleshooting.

Content sections:

1. Quick Start

   Tells users to pick a font and run the install command. Includes npm, pnpm, and Bun examples.

2. Find a Font Name

   Explains that the install name is the short slug shown in each command on vinalin.

3. All Font Names

   Lists every font with its display name, slug, and install command.

4. CLI Reference

   Documents:

   - `npx @bremlo/vinalin add <name>`
   - `pnpm dlx @bremlo/vinalin add <name>`
   - `bunx @bremlo/vinalin add <name>`
   - `--force`
   - `--dir <path>`
   - `--registry <url>`
   - `list` command

5. Where Files Go

   Documents output paths by framework:

   - Next.js: `app/fonts/<name>/`
   - React/Vite: `public/fonts/<name>/`
   - Other: `fonts/<name>/`

6. Use the Installed Font

   Shows import examples for Next.js App Router and React/Vite projects.

7. Licenses

   Reminds users that license text ships next to the font files and should remain there. Links to the licenses page.

8. Troubleshooting

   Guidance for folder conflicts, unrecognized project structures, and slug verification.

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
- `submittedBy` set to your handle.
- Curated quality bar.

Schema section:

Shows a sample font object in `app.js` with:

- name, displayName, version, category, designer, license, source, variable, weights, styles, fallback, previewText, description, submittedBy, family.

Primary action:

- Open a pull request.

## Donor Page

Route: `/donors`

Purpose: Provide a support path for the project.

Hero:

Title: "People who keep vinalin going."

Main content:

1. Support card

   Explains that vinalin is free and community-curated.

   Action:

   - Support on Ko-fi.

2. Supporters card

   Loads supporter data from `/data/supporters.json`.

   Placeholder state:

   - "No supporters listed yet - be the first to chip in."
   - Be the first.

## Licenses Page

Route: `/licenses`

Purpose: Browse the open licenses for every font in the library.

Hero:

Title: "Clear terms, shipped with every font."

Lists every font with:

- License label (OFL-1.1 or Fontshare Free Font License).
- Font display name.
- Designer name.
- View license link (external).
- Open family link (internal).

## 404 Page

Fallback route for unknown paths.

Content:

- Eyebrow: 404.
- Title: "Page not found."
- Copy: "That route is not in the public vinalin sitemap."
- Link back to fonts.

## Copyright Page

Route: `/copyright`

Purpose: Provide a clean copyright notice and links to related projects.

Hero:

Title: "Copyright © 2025 bremlo."

Main content:

- Lead paragraph: vinalin is an open-source project by bremlo, released under MIT License.
- Font license note: font files retain their original licenses.
- Related projects: Savault (savault.de) and WhoIsly (whoisly.de) with links.
- Contact: hi@bremlo.uk.
- Legal links: Legal Notice, Privacy Policy, Licenses.

## Install Command Module

The install module appears on the home, docs, and font detail pages.

It supports:

- npm.
- pnpm.
- bun.

Command examples:

- `npx @bremlo/vinalin add inter`
- `pnpm dlx @bremlo/vinalin add inter`
- `bunx @bremlo/vinalin add inter`

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
- Family.

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
- License filter limits by license type.
- Preview text replaces every visible card specimen.
- Size slider adjusts specimen size.
- View toggle switches between list and grid layouts.
- Result count updates live.

Pairing:

- Changing any select updates the preview.
- Generate pairing creates a fresh suggested system.

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
- `app.js` contains font data (generated from `font.json` files), routing, page rendering, and interactions.
- `styles.css` contains font-face declarations and all visual styling.
- `package.json` exposes the `vinalin` CLI and project scripts.
- `bin/vinalin.js` installs fonts from the generated registry.
- `registry/fonts/<slug>/font.json` is the source of truth for font metadata.
- `registry/fonts/<slug>/files/` contains `.woff2` files and license text.
- `r/` contains the generated public registry API.
- `scripts/build-registry.js` reads `font.json` files, syncs `app.js`, and generates public registry files.
- `scripts/validate-registry.js` validates registry metadata.
- `scripts/mirror-font-files.js` mirrors currently referenced hosted font files into the GitHub registry folder.

Static route folders:

- `/docs/index.html`
- `/donors/index.html`
- `/pairing/index.html`
- `/submit/index.html`
- `/fonts/<slug>/index.html`

These folders support static hosting paths, while the actual content is rendered by the shared app shell.

## GitHub Workflow

vinalin uses GitHub as the source of truth for submissions and registry files.

Maintainer setup:

- Create the GitHub repository `thisisbremlo/vinalin`.
- Push this local project to `main`.
- Run `npm run mirror:fonts` once to copy the currently referenced `.woff2` files into `registry/fonts/<slug>/files/`.
- Run `npm run build:registry` to sync everything.
- Run `npm run validate:registry`.
- Commit all changes.
- Deploy the static site with GitHub Pages or another static host.

Contributor flow:

- Fork the repository.
- Create `registry/fonts/<slug>/font.json` using the schema in CONTRIBUTING.md.
- Add `.woff2` files and license text under `registry/fonts/<slug>/files/`.
- Run `npm run build:registry` — syncs everything into the website and registry.
- Run `npm run validate:registry`.
- Open a pull request.

## CLI Workflow

The package exposes a `vinalin` binary.

Supported commands:

- `vinalin list`
- `vinalin add <name>`
- `vinalin add <name> --registry <url-or-path>`
- `vinalin add <name> --dir <path>`
- `vinalin add <name> --force`

Install commands:

- `npx @bremlo/vinalin list`
- `npx @bremlo/vinalin add inter`

## UX Principles

The site should feel:

- Curated rather than exhaustive.
- Typographic rather than decorative.
- Fast to scan.
- Useful for both designers and developers.
- Consistent from home to detail to documentation.

Design rules to preserve:

- Keep the light editorial theme consistent across pages.
- Keep contrast high for all text and controls.
- Use dividers and spacing instead of heavy cards.
- Let type specimens be the main visual element.
- Avoid unnecessary decoration.
- Keep page-specific controls obvious and close to the content they affect.
- Preserve responsive layouts without horizontal overflow.
