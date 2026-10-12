> Historical snapshot, written 2026-10-12. Current baselines: 200 built pages, 197 sitemap URLs, 11 service records, 6,369 service + location matrix rows, 10 audience ids, 579 locations, 0 placeholder boxes, 30 image files (929 boxes on the shot list, all wired). See docs/image-placeholder-inventory.md and the decisions log for the current state.

# Launch mode layout check

Date: Oct 12, 2026. Read-only check of `main` at `b0d9042`. Nothing was fixed, and this file is the only new file in the repo. Screenshots and the measuring scripts are outside the repo (listed at the end).

## 1. Normal build unchanged

`LAUNCH_MODE` was set to true only in a throwaway copy of the repo (copy of the working tree, `lib/launch.ts` edited in the copy, built with `next build --webpack`, report step skipped). The repo's own `lib/launch.ts` was never edited in this check and still reads `LAUNCH_MODE = false`.

| Check | Result |
|---|---|
| `LAUNCH_MODE` in the repo | `false` |
| Normal build output folders | default: `.next/` and `out/`; no `distDir` override unless `NEXT_DIST_DIR` is set (only the launch audit sets it) |
| `scripts/count-placeholders.mjs --expect=537:162` on the normal `out/` | 537 boxes on 162 of 200 pages, exit 0 |
| `.slot-audit/` ignored by git | yes, `.gitignore` line 90 (`/.slot-audit/`) |
| `.slot-audit/` present in the repo or in `out/` | no (neither exists) |
| Launch-mode copy: placeholder markup in `out/` | 0 pages contain `Image slot`, `data-image-placeholder` or `border-dashed` |

## 2. Method

Pages loaded at 390 px and 1440 px wide in headless Chrome, once from the launch-mode build and once from the normal build for comparison:

- Location hubs: Ballwin (St. Louis), Carlsbad (San Diego), Henderson (Las Vegas).
- Service + location: `/locations/st-louis-mo/ballwin/sewer-camera-inspection/`, `/locations/san-diego-ca/carlsbad/hydro-jetting/`, `/locations/las-vegas-nv/henderson/drain-cleaning/`.
- Core: `/services/preventative-sewer-maintenance/` and `/services/recurring-sewer-backup-diagnosis/`.

For each, the script measured section heights, vertical gaps, grids with a missing column and sections with little content, and screenshotted each affected section in both builds. I then looked at the 1440 screenshots of every section that holds a placeholder (and the 390 screenshot of one hub section). The first pass of screenshots showed blank service-card images in the launch build; that was lazy-loading (images below the fold not yet loaded), not a real fault, and was removed by scrolling the page before capturing. The sticky header appears across some screenshots; that is a capture effect.

Overall effect: the launch build is shorter on every page tested (for example the Henderson hub is 14,262 px against 15,547 px at 1440 px wide). No page has an empty grid cell, a heading with nothing under it, an orphaned caption or a section reduced to a bare heading. The problems below are all about the space the removed image used to fill.

## 3. Problems found

At 390 px there are no layout problems: every grid collapses to one column, the images simply drop out, and the sections get shorter (checked by section height and grid measurement for all pages; one section viewed directly). Every problem below is at 1440 px.

| # | Page type | Slot id | Component | What it looks like in launch mode | Pages affected | Severity | Fixed |
|---|---|---|---|---|---|---|---|
| 1 | Service + location | `sl-<city>-<service>-problem-N` | "When to call" problem card grid (`ProblemGrid`, card image header via `SlotPlaceholderBox`) | The grid mixes cards that have an image with cards that lost it. The imageless card stays as tall as its neighbour, so it is a short block of text over a large blank area, about 400 px of white (screenshot `sec_1440_05_launch.png`) | 144 of 144 (63 pages have 1 imageless card, 81 have 2) | High | Yes. `ProblemGrid` top-aligns at natural height when cards mix image and no image (`sec_1440_05_launch.png`, `shots_after/`) |
| 2 | Location hub | `svc-camera`, `svc-cleaning`, `svc-jetting`, `svc-cleaning-camera`, `svc-locating`, `svc-drain`, `svc-prepurchase`, `svc-maintenance` | Hub services card grid (`ServiceCardGrid`, card image) | Cards lose their image except one (Recurring Sewer Backup Diagnosis keeps a real image). That card sets the row height, so Pre-Purchase and Preventative cards get about 300 px of blank space between their text and their button (`sec_1440_04_launch.png`) | 8 of 16: Henderson, Las Vegas, North Las Vegas, Summerlin, Chula Vista, Escondido, Oceanside, San Marcos | High | Yes. `ServiceCardGrid` top-aligns at natural height when cards mix image and no image (`sec_1440_04_launch.png`) |
| 3 | Location hub | `buy-buyer` | Buyer section, two-column layout with a `lg:col-span-5` image column (`LocationSections`, `Photo`) | Image column is gone, so the "Working with real estate professionals" card sits alone at the top of the right side, with about 500 px blank below it (`sec_1440_03_launch.png`) | 16 of 16 | Medium | Yes. Buyer section stacks the card below the copy in one full-width column when placeholders are hidden (`sec_1440_03_launch.png`) |
| 4 | Location hub | `program-footage` | Lateral program section, two-column header with a `lg:col-span-5` image column | Heading and intro occupy the left 55% and the right 45% beside them is empty, about 300 px tall, above full-width text (`sec_1440_01_launch.png`) | 15 of 16 (all but St. Louis City) | Medium | No change needed. The component already renders one column when the image is missing (verified in the DOM: `grid gap-10` with one child). The narrow heading is the site reading-width measure |
| 5 | Service + location | `slc-services-section` | Services section (`ServiceLocationPageTemplate` passing `aside` to `ServiceIndex`) | Heading and intro stay left and the right half beside them is empty, about 270 px tall, above the full-width service cards (`sec_1440_06_launch.png`) | 144 of 144 | Medium | No change needed. No two-column grid is rendered without the aside (verified in the DOM). The narrow heading is the reading-width measure |
| 6 | Core | `preventative-explainer`, `recurring-explainer` | "What is ..." explainer section (`lg:col-span-5` figure) | The whole section is half-width text with the right half blank for the full section height, about 540 px (`sec_1440_11_launch.png`, `sec_1440_14_launch.png`) | 2 (Preventative, Recurring) | Medium | No change needed. Already one column of reading-width text (verified in the DOM) |
| 7 | Core | `recurring-causes`, `recurring-limits` | Causes and limits sections (figure column) | Heading and intro sit on the left with the right 45% empty (about 200 px), then the list or panel runs full width (`sec_1440_15_launch.png`, `sec_1440_16_launch.png`) | 1 (Recurring) | Low | No change needed. Already one full-width column (`lg:col-span-12`, verified in the DOM) |

Checked and fine in launch mode:

- Hub step cards (`so-inspect`, `so-document`, `so-decide`): the three "Inspect, Document, Decide" cards become text-only and stay even (`sec_1440_02_launch.png`). 16 hubs.
- Hub card inside the buyer section (`buy-agent`): the card keeps its text with no gap. 16 hubs.
- Core pages: the recurring hero figure (`recurring-hero`) disappears from under the intro and the hero keeps its background photo with no gap (`sec_1440_13_launch.png`); `recurring-process-access` and `recurring-process-locate` leave the six-step process intact; the two "records" figures leave a clean text-and-card layout (`sec_1440_12_launch.png`).
- Gaps between sections: none above the page's own spacing. The only flagged vertical gaps (410 px at 390 px, 326 px at 1440 px, near the top) are the same on the normal build and are the hero area, not missing images.

Totals (before the fix): problems 1 to 5 together touch every service + location page (144) and every location hub (16); the two core pages are touched by 6 and 7.

## 4. NEXT_PUBLIC_SHOW_IMAGE_SLOTS

- **Set anywhere in the repo:** no. `git grep` finds the name only in documentation, code comments, the commented example in `.env.example` (`# NEXT_PUBLIC_SHOW_IMAGE_SLOTS=false`), the launch code in `lib/image-slots.ts`, `lib/launch.ts` and `scripts/report-unfilled-slots.mjs` (which removes it from the environment), and a few `scripts/verify-*.mjs` files that only read it. No tracked file assigns it a value, and `.env.local` (untracked) has no line for it.
- **Cloudflare config files:** none are tracked (no `wrangler.toml`, `_headers`, `_redirects`, `functions/` or workflow file). I cannot see the Cloudflare Pages dashboard, so whether the variable is set there is not verified.
- **What the preview shows:** placeholders. With the variable unset, the default (`IMAGE_SLOTS_DEFAULT = true`) applies and `LAUNCH_MODE` is false, so the normal build draws 537 boxes on 162 pages, which is what a build without the variable produces. Unless the dashboard sets it to `false`, the preview shows all 537.

## Open questions for the owner

- For problems 1 and 2 (mixed image and no-image cards), do you want cards without a photo to stay as text cards of equal height, or hold the slot (not draw the image area) on all cards in the grid until every card has an image?
- For problems 3 to 7 (one-sided sections), is an image-less left-aligned layout acceptable at launch, or should these sections switch to a full-width layout when their image is missing?

## Files outside the repo

Screenshots: `scratchpad/shots/` (for each section, `sec_<width>_<n>_launch.png` and `_default.png`; whole pages as `launch_<width>_<route>.png` and `default_...`). Reports: `scratchpad/layout-report.json`, `scratchpad/sections-report.json`. Scripts: `scratchpad/tools/layout.cjs`, `scratchpad/tools/sections.cjs`. Launch-mode copy: `scratchpad/launchcopy/`. Scratchpad root: `C:\Users\Welcome\AppData\Local\Temp\claude\c--Users-Welcome-Desktop-client-sites-the-sewer-pros-site\a8d4397d-8529-4cf6-b19e-1cdce752d2cc\scratchpad\`.

## 5. Fix and verification (Oct 12, 2026)

### What changed

- `lib/image-slots.ts`: two helpers next to `SHOW_IMAGE_SLOTS`. `slotDraws(slot)` is true for a slot with a photograph, and for an empty slot only while placeholders are shown. `gridHasImageGaps(slots)` is true only when placeholders are hidden and a grid mixes drawn and undrawn slots.
- `components/sections/ProblemGrid.tsx` (problem 1) and `components/sections/location/ServiceCardGrid.tsx` (problem 2): add `items-start` to the grid only when `gridHasImageGaps` is true, so a card without an image keeps its own height at the top of its row. Cards with images are not touched.
- `components/sections/location/LocationSections.tsx` (problem 3): the side-by-side buyer layout now applies only while placeholders are shown. With placeholders hidden and no photographs, the section is one full-width column with the agents card below the copy.
- Problems 4 to 7: no code change. Checked in the rendered DOM of the launch build: the program section is `grid gap-10` with a single child, the services section has no grid at all without its aside, the core explainers are single reading-width columns and the causes section is `lg:col-span-12`. They already collapse. What the earlier check called an empty half is the site's reading-width measure for headings and intro text, which every text-only section uses; widening it would change those sections and hurt readability, so I left it. If you want those headings widened when the image is missing, that is a separate change.
- None of the changes applies while placeholders are shown: `gridHasImageGaps` returns false then, and the buyer layout is gated on `SHOW_IMAGE_SLOTS`.

### Verification

| Check | Result |
|---|---|
| `LAUNCH_MODE` false: `count-placeholders.mjs --expect=537:162` | 537 boxes on 162 pages, exit 0 |
| `LAUNCH_MODE` false: the 8 sample pages against the build before the change | Rendered HTML identical on 8 of 8 (script tags and hashed asset names ignored, because the chunk hashes change whenever a component changes) |
| `LAUNCH_MODE` true (throwaway copy): placeholder markup | 0 pages |
| `LAUNCH_MODE` true: image sources on the 8 sample pages, before and after the change | Identical lists on 8 of 8 (14, 14, 5, 18, 19, 17, 14 and 12 `img` sources, same order); no card, section or grid lost an image that has a source |
| `LAUNCH_MODE` true: layout check at 390 and 1440 on the 8 pages | Problems 1 to 3 gone (screenshots in `shots_after/`); no empty grid cell, orphaned caption or heading-only section; the only vertical gaps are the hero-area gaps that the normal build has too |
| Case: one slot filled, the rest empty | Henderson hub (1 of 9 cards has an image) and the "When to call" grids (2 or 3 of 4): cards top-aligned at natural height, images kept |
| Case: every slot filled (throwaway build forcing a real image into every slot) | No `items-start` class; hub cards all 594 px tall, problem cards equal height per row (579, 579, 627, 627), buyer section back to the 12-column photo layout. No regression (`fillall_1440_hub_cards.png`, `fillall_1440_problem_cards.png`) |
| Typecheck, lint | pass (lint: 0 errors, the same 4 warnings) |
| the removal audit script | CLEAN |

At 390 px the layout is unchanged by the fix (grids are one column, so alignment does not apply); the section heights match the earlier run.

