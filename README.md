# The Sewer Pros - Website

Multi-market website for The Sewer Pros: sewer inspection, diagnostics, locating, and cleaning across St. Louis MO, San Diego CA, and Las Vegas NV.

**Status:** Active, partially implemented build. All 70 approved launch pages are built and pass typecheck, lint, and the production build. Not yet launch-ready: the lead form has no submission endpoint, and legacy redirects, analytics activation, and the GPTBot policy are open (see [Launch blockers](#launch-blockers)).

---

## Read this first

This repository is documentation-governed. Before changing anything meaningful, read:

- **[`CLAUDE.md`](./CLAUDE.md)** — operating instructions for anyone (human or AI) working in this repo
- **[`docs/`](./docs/)** — 23 numbered source-of-truth documents

The single most important rule (build-first model, DEC-090 to DEC-092):

> **Building a page is not the same as indexing it.** Routes are generated only from the approved page registry, and only pages the registry marks `launch` and `indexable` enter the sitemap.

The repository contains 18 canonical services, 579 geographic records, and 10,422 service × location relationships. That data models *opportunity*. It is not a publishing queue. See `docs/08-service-location-matrix.md` §2.

---

## Current implementation status

Verified 2026-09-21 against commit `5b9586a` on `main`.

| Area | State |
|---|---|
| Approved page records | 70, all `launch` and `indexable: true`; none gated, noindex, or deferred |
| Built routes | 70 of 70 (every approved record has content and renders) |
| Sitemap | 70 URLs, identical to the approved set |
| Robots | `User-Agent: *` allow all, `OAI-SearchBot` allow, sitemap declared. No GPTBot directive (PENDING-011) |
| Noindex output | Only the framework 404 pages |
| Build output | 73 HTML files in `out/` (70 pages, `/404/`, `/_not-found/`, `404.html`) |
| Structured data | JSON-LD on all 70 pages: Organization and WebSite on every page; BreadcrumbList on 69; WebPage on 60; Service on 15; Article on 7; CollectionPage on 8; FAQPage on the home page only |
| Lead form | Built and rendered on 7 templates. **Submission is a stub: nothing is sent** (PENDING-018) |
| Analytics | GA4 loader and typed events built; inert until `NEXT_PUBLIC_GA_MEASUREMENT_ID` is set |
| Redirects | None implemented (no `_redirects` file); legacy inventory open (PENDING-010) |

Page families built: 9 core and hub, 10 service, 3 market, 16 location, 14 service + location, 6 audience, 5 commercial, 2 comparison, 5 resource. Per-page detail is in `docs/04-master-page-build-list.md` §56.

### Validation (2026-09-21)

`npm run typecheck`, `npm run lint`, and `npm run build` all exit 0. `npm run check` is the composition of those three.

### Launch blockers

Not launch-ready until these close. Full list in `docs/00-project-overview.md` §0.

1. **Lead form has no endpoint** (PENDING-018), and no TCPA consent copy for the "text" option (PENDING-019).
2. **Legacy redirects** not built; inventory incomplete (PENDING-010).
3. **GA4 measurement ID** not set; call tracking undecided (PENDING-009).
4. **GPTBot policy** undecided (PENDING-011); today GPTBot is permitted by the general allow.
5. **Production deployment** to Cloudflare Pages not yet performed or verified.

---

---

## Stack

| Layer | Choice | Decision |
|---|---|---|
| Framework | Next.js 16 (App Router) | DEC-004 |
| Language | TypeScript | DEC-005 |
| Styling | Tailwind CSS 4 | DEC-006 |
| Rendering | Static export (`output: 'export'`) | `docs/02` §4 |
| Hosting | Cloudflare Pages | DEC-009 |
| Package manager | npm | `docs/02` §65 |

---

## Setup

```bash
npm install
cp .env.example .env.local   # then fill in NEXT_PUBLIC_SITE_URL
```

`NEXT_PUBLIC_SITE_URL` has no default and the build fails without it. That is deliberate — with `output: 'export'` the origin is baked into canonicals, schema `@id` values, and the sitemap as static text, so a silent fallback would ship rather than fail (`docs/02` §53, `docs/15` §5).

The value is `https://www.thesewerpros.com` — www, not apex (DEC-078) — and `.env.example` carries it. Set the same value in every environment, including a deployed preview: a preview host must never reach a canonical tag, a schema `@id`, or the sitemap (`docs/05` §92, `docs/02` §88), and under `output: 'export'` there is no runtime correction once it ships.

---

## Commands

```bash
npm run dev        # local development
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run validate   # typecheck + lint
npm run build      # production static export → out/
npm run check      # validate + build
```

There is no `start` script. `next start` requires a server runtime, which `output: 'export'` does not produce. Deployment serves the static `out/` directory (`docs/02` §66, §74).

---

## Layout

```
app/          Next.js App Router routes, sitemap, robots, manifest
components/   layout, sections, templates, ui, schema, tracking
content/      Authored page content, keyed by page id
data/         Canonical registries, approved page registry, business facts
docs/         Source-of-truth documentation (numbered 00–23)
lib/          Routing, SEO metadata, schema, analytics helpers
public/       Static assets
types/        Shared TypeScript types
```

The intended structure is specified in `docs/02-nextjs-technical-architecture.md` §10. There is no `scripts/` directory yet.

### `data/`

| Path | Contents |
|---|---|
| `data/services/master-service-registry.json` | 18 canonical services |
| `data/locations/master-location-registry.json` | 579 geographic records |
| `data/matrices/service-location-master-matrix.json` | 10,422 relationships |
| `data/matrices/service-location-master-matrix.csv` | Same, spreadsheet form |

These are **research and validation inputs**, not route-generation inputs. Route generation consumes the approved page registry derived from `docs/04-master-page-build-list.md`. See `docs/02` §21 and §46.

---

## Launch inventory

70 approved page records, all built and all indexable. The five Las Vegas pages were gated under DEC-063 and released by DEC-080 (2026-08-17). One further approved record, `svc-independent-sewer-second-opinion`, is Phase 2 and is not built or in the registry. See `docs/04-master-page-build-list.md` §56.

---

## Open decisions

See `docs/22-decisions-change-log.md` §13 for the register. Resolved since the scaffold: PENDING-001 (DEC-078), PENDING-005 and PENDING-006 (DEC-096), PENDING-012 (DEC-075, DEC-080).

| ID | Needed | Affects |
|---|---|---|
| PENDING-009 | Call tracking | Conversion measurement |
| PENDING-010 | Legacy redirect inventory | Migration |
| PENDING-011 | GPTBot access policy | `robots.txt` |
| PENDING-017 | Market-scoped header contact | Header |
| PENDING-018 | Lead form submission endpoint | Lead capture |
| PENDING-019 | TCPA consent copy | Lead form compliance |
| PENDING-014, -015, -016 | Chesterfield programme details, Census housing-age check, three withheld claims | Content accuracy |

Brand colour and typography were approved by DEC-096.

---

## Contributing

1. Identify which document in `docs/` governs the change.
2. Follow it, using the source-of-truth hierarchy in `CLAUDE.md` §14. A newer entry in `docs/22-decisions-change-log.md` overrides older document text.
3. Never invent business facts — service availability, pricing, hours, credentials, response times, addresses. If a fact is unavailable, omit it or flag it. See `CLAUDE.md` §24.
4. Record material decisions in `docs/22-decisions-change-log.md`.
