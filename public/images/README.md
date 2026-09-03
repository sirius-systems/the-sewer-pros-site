# Image Assets

Production image directory for The Sewer Pros site. Structure only — no
assets are committed here yet.

Governed by `docs/18-design-system.md` §40-44 (image direction, hierarchy,
AI-generated imagery, market imagery) and `CLAUDE.md` §24 (never invent
business facts).

---

## Directory purpose

| Directory | Holds |
| --------- | ----- |
| `brand/` | Company identity. `logos/` full lockups, `marks/` standalone symbols, `social/` share and profile images. |
| `shared/` | Reusable subject photography with no page or market tie: `equipment/`, `pipe-interiors/`, `cleanouts/`, `residential/`, `commercial/`. Anything used by more than one page belongs here. |
| `homepage/` | Homepage-only imagery, split by section: `hero/`, `services/`, `differentiator/`, `markets/`, `conversion/`. |
| `services/` | One folder per non-commercial service in the canonical registry, named with that record's exact `slug`. |
| `markets/` | Per-market imagery for the three approved markets. Each has `hero/`, `locations/`, `service-locations/`, `commercial/`. |
| `audiences/` | One folder per audience with an approved launch page (`LAUNCH_AUDIENCE_IDS`, 09 §7), named with the audience id minus its `aud-` prefix. |
| `commercial/` | Commercial cluster imagery: `hero/`, `services/`, `preventative-maintenance/`, `property-types/`. |
| `resources/` | Editorial and article imagery grouped by topic cluster. |
| `proof/` | **Verified Sewer Pros project photography only**, filed under the market it was shot in. |

---

## Naming and format

- Lowercase, descriptive, hyphenated: `sewer-camera-reel-close-up.webp`.
- `.webp` is the default for photographic assets.
- `.svg` for logos, marks, and icons wherever the asset is vector.
- Include meaningful detail in the name; avoid `image-1.webp` or `hero.webp`.

## Placement

- **Do not duplicate shared assets.** If two pages use the same photograph,
  it lives once under `shared/` and both reference it.
- **Market-specific imagery stays in its market directory.** Do not promote a
  St. Louis photograph into `shared/` and reuse it as San Diego or Las Vegas
  context (01 §20-21 — one market's facts must not carry to another).
- Verified project photography belongs under `proof/{market}/`, never under
  `shared/`.

---

## Canonical taxonomy

Folder names under `services/`, `commercial/services/`, `markets/`, and
`audiences/` are derived from the project registries, not chosen by hand:

- **Services** — `data/services/master-service-registry.json`. The registry
  holds 18 records whose slugs are unique only *within* their namespace: the
  11 non-commercial records live under `services/`, and the 7
  `commercial_service` records under `commercial/services/`, matching each
  record's own `canonical_url` (`/services/…` vs `/commercial/…`). Five slugs
  — `sewer-camera-inspection`, `sewer-cleaning`, `hydro-jetting`,
  `drain-cleaning`, `sewer-line-locating` — exist in both namespaces and are
  different records. Keep them apart.
- **Audiences** — `LAUNCH_AUDIENCE_IDS` in `types/audience.ts`. Six of the 13
  canonical audiences have approved pages; the remaining Phase 2 audiences
  (09 §8) get folders when their pages are approved.
- **Markets** — the three approved market ids.

Do not add a folder for a service, market, or audience that has no registry
record, and do not rename an existing one. Locations are deliberately not
expanded: the 579 location records and their matrix relationships support
asset *planning*, not thousands of empty directories.

---

## AI-generated imagery

Permitted under `docs/18-design-system.md` §42, and only when it is all of:

- photorealistic
- an accurate depiction of the service
- built on plausible equipment
- free of fabricated business claims
- free of invented people presented as actual staff
- correct for the market and property context
- consistent with the established visual system

§42 also asks that real verified company imagery replace generated imagery
where practical over time.

### Hard limits

These apply to every asset in this tree, generated or not:

- **Generated imagery must never be presented as completed Sewer Pros work.**
  Only verified project photography goes in `proof/`.
- **Invented people must never be represented as actual employees.**
- **No image may imply a fabricated office, branch, address, storefront, or
  Google Business Profile.** St. Louis is the only market with a verified
  Business Profile; San Diego and Las Vegas are service markets with no
  public location (`CLAUDE.md` §10-11).

---

## Design references

The six page-family composition references stay in `docs/design-references/`
and **must not be moved into `public/images/`**. They are internal design
authority (18 §3-4), not site assets, and nothing in `public/` should ship
them to production.
