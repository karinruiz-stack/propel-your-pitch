## Goal

Make propelcapital.sting.co fully readable by crawlers and AI bots (GPTBot, ClaudeBot, PerplexityBot, LinkedIn, Slack, etc.) that do not execute JavaScript — so they see the full hero copy, portfolio companies, process, angels, FAQ, and footer, not just `<meta>` tags.

## Approach: Static prerendering at build time

The site is a single-page Vite + React SPA with one public route (`/`). The simplest, most robust fix is **prerendering**: during `vite build`, render the React app to HTML and inline it into `dist/index.html`. The published site then ships fully-formed HTML to every request. Real users still hydrate into the normal SPA experience — no behavior changes, no SSR server needed.

This is a better fit than:
- **SSR (Next.js/Remix)** — overkill, requires a server runtime, big migration.
- **Just adding more `<meta>`/JSON-LD** — helps social previews but doesn't expose the actual page content (FAQ answers, portfolio list, etc.) to AI crawlers.

## Implementation plan

1. **Add a prerender step to the build**
   - Install `vite-plugin-prerender` (or equivalent: `react-snap` / a small custom puppeteer script). Preference: `vite-plugin-prerender` because it integrates cleanly with the existing `vite.config.ts` and needs no extra npm scripts.
   - Configure it to prerender the route `/` (the only public route — `*` / NotFound is excluded).
   - Output goes to `dist/index.html` so the published site serves real HTML.

2. **Make the app hydration-safe**
   - Switch `createRoot(...).render(<App/>)` in `src/main.tsx` to `hydrateRoot(...)` when the root already has prerendered HTML, else `createRoot` — small conditional so dev mode keeps working.
   - Verify components don't break SSR: anything touching `window`/`document` at module top-level needs a guard. Quick audit of `src/components/site/*` and the few `useState` accordions in `InfoCards.tsx` — these are fine (state inside components is safe at hydrate time).

3. **Keep the FAQ content crawler-visible**
   - Currently FAQ answers are conditionally rendered (`{open && <p>…</p>}`), so prerendered HTML would only contain the questions, not the answers — defeating the point for AI crawlers.
   - Change the FAQ to always render the answer in the DOM but visually collapse it with CSS (`max-height` + `overflow:hidden` toggled by `open`). Content stays in HTML for bots; UX stays the same for humans.

4. **Strengthen the static head in `index.html`** (defense in depth for non-JS scrapers)
   - Add `<link rel="canonical" href="https://propelcapital.sting.co/" />`.
   - Add Organization JSON-LD (name, url, logo, sameAs LinkedIn, address — Östermalmsgatan 26A, Stockholm).
   - Already-present OG/Twitter tags are fine.

5. **Sitemap + robots**
   - `public/robots.txt` already allows all bots, including the major AI bots via the `User-agent: *` block. Add explicit `Allow` entries for `GPTBot`, `ClaudeBot`, `PerplexityBot`, `Google-Extended` so it's unambiguous (some operators block these by default; we want them allowed).
   - Add `Sitemap: https://propelcapital.sting.co/sitemap.xml` directive.
   - Add a static `public/sitemap.xml` with the single `/` URL.

6. **Verify**
   - Run `vite build`, then `curl -s dist/index.html | grep -i "send us your pitch deck"` — should match.
   - `grep -i "Questions, answered"` — should match.
   - `grep -i "propel angels"` (FAQ body) — should match, proving FAQ answers are in static HTML.
   - After publish, test with `curl -A "ClaudeBot" https://propelcapital.sting.co/` and confirm full body content is present.

## Technical notes

- **`vite-plugin-prerender`** uses Puppeteer under the hood at build time. Build will get slightly slower (~10–20s). No runtime cost.
- **Hydration mismatches**: dates (`new Date().getFullYear()` in `Footer.tsx`) are stable enough — year won't differ between build and view in normal use. The pulsing dot and animations are CSS only, safe.
- **Lovable preview**: Lovable's dev server runs `vite dev`, which won't prerender — that's fine, prerendering only matters for the published build. The preview will look identical.
- **Custom domain**: prerendered HTML uses the canonical domain `https://propelcapital.sting.co`.

## Out of scope

- Per-route SEO (only one route exists).
- Server-side rendering / migration to Next.js.
- Generating new OG images.

## Deliverable

After implementation: every page request — from a human browser, Googlebot, ClaudeBot, GPTBot, LinkedIn, Slack — receives a complete HTML document with all visible site copy, all FAQ answers, the portfolio list, and structured metadata. The SPA continues to work exactly as today for interactive users.