# The Sewer Pros — Website

Multi-market website for The Sewer Pros: sewer inspection, diagnostics, locating, and cleaning across St. Louis MO, San Diego CA, and Las Vegas NV.

**Status:** Scaffold. Foundation documentation complete; page implementation not started.

---

## Read this first

This repository is documentation-governed. Before changing anything meaningful, read:

- **[`CLAUDE.md`](./CLAUDE.md)** — operating instructions for anyone (human or AI) working in this repo
- **[`docs/`](./docs/)** — 23 numbered source-of-truth documents

The single most important rule:

> **Only routes explicitly approved in [`docs/04-master-page-build-list.md`](./docs/04-master-page-build-list.md) may become public indexable pages.**

The repository contains 18 canonical services, 579 geographic records, and 10,422 service × location relationships. That data models *opportunity*. It is not a publishing queue. See `docs/08-service-location-matrix.md` §2.

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
app/          Next.js App Router routes
data/         Canonical registries and research datasets
docs/         Source-of-truth documentation (numbered 00–22)
public/       Static assets
```

The full intended structure — `components/`, `content/`, `lib/`, `types/`, `scripts/` — is specified in `docs/02-nextjs-technical-architecture.md` §10. Those directories are created as needed rather than pre-created empty.

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

70 approved page records — 65 indexable, 5 built but gated behind Las Vegas operational validation (DEC-063).

---

## Open decisions

Implementation is blocked on these in places. See `docs/22-decisions-change-log.md` §13.

| ID | Needed | Blocks |
|---|---|---|
| PENDING-001 | Production canonical domain, apex vs www | `metadataBase`, schema `@id`, sitemap, Search Console |
| PENDING-005 | Brand colour palette | Visual implementation |
| PENDING-006 | Typography | Visual implementation |
| PENDING-007 | Global primary CTA wording | Conversion components |
| PENDING-011 | GPTBot access policy | `robots.txt` |
| PENDING-012 | Las Vegas service availability | Indexing 5 gated pages |
| DEC-064 | Visual identity ownership (status: PROPOSED) | Visual implementation |

Values in `app/globals.css` are **placeholders**, not brand colours.

---

## Contributing

1. Identify which document in `docs/` governs the change.
2. Follow it. If the code and the docs disagree, the docs win unless a newer entry in `docs/22-decisions-change-log.md` says otherwise.
3. Never invent business facts — service availability, pricing, hours, credentials, response times, addresses. If a fact is unavailable, omit it or flag it. See `CLAUDE.md` §23.
4. Record material decisions in `docs/22-decisions-change-log.md`.
