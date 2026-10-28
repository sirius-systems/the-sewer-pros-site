# Image audit, 2026-10-27

Scope: all 198 built pages (197 indexable; `/contact/thank-you/` is noindex), crawled from `out/` plus the source components and registries. Tooling: `scripts/audit-images.mjs` (inventory and tables), `scripts/verify-images.mjs` (gate, also `npm run verify:images`), `scripts/compress-images.mjs`. Full per-page inventory: `image-audit-2026-10-27-before.json` / `.csv` and `-after.json` / `.csv` in this folder (one row per image reference: page, shot ID, declaring source file, src, repo and out/ presence, format, pixel size, bytes, width/height attributes, loading, fetchpriority, preload, alt, LCP flag).

## Summary

The site was already in good shape on the hard gaps: no broken references, no placeholder boxes (the build log reports "Unfilled image slots: none"), no missing alt, no image without dimensions or an aspect box, og:image and twitter:image valid on every indexable page, schema logo resolving, favicon set and manifest icons present at their declared sizes. The real findings were weight, hero priority, over-long alt and unconfirmed equipment wording in alt, and unused source renders published from `public/`. All were fixed. What remains is a set of pages with no image at all (a gap against the design references, not an empty slot) and 71 files that cannot reach the weight budget without a smaller source export.

## Fixes made

1. **Weight.** 125 files over budget re-encoded (WebP, quality floor 70). 37.1 MB to 17.3 MB on those files; image bytes referenced by pages 40.0 MB to 20.2 MB; published image/video bytes 62.0 MB to 36.1 MB. Typical page: home 3.3 MB to 2.1 MB, service + location 3.3 MB to 2.2 MB, market hub 6.7 MB to 3.4 MB. Files wider than 1600 px (2400 to 4096 px sources) were scaled down; the 12 owner-approved renders were first re-encoded without resizing; the second pass restored them and IMG-12 byte-identical (see below). Filenames and aspect ratios are unchanged everywhere. Originals are in git history.
2. **Hero priority.** Next 16's `priority` only emits a preload link. Added `fetchPriority="high"` to every hero image component (`HeroBackdrop`, `HeroVideoBackdrop`, `BackdropImage`, `CameraImageSlot`, and the About, Contact, Market, Market contact, Audience hub, rich location and service + location templates). 29 pages lacked it; 0 now.
3. **Alt text.** 142 references over 125 characters (12 distinct strings) shortened to scene-only wording in 18 page modules, the shared service + location registry and 4 `data/business/*-images.ts` files (80 string replacements). 8 references named "SeeSnake-series" or "SeeSnake" alone, which are not confirmed spellings; they now say "RIDGID" alone (the allowed form, DEC-132/133). The same strings were updated in the docs that quote them.
4. **Unpublished sources.** `public/images/clean-outs/`, `residential/` and `commercial/` held the 12 original-size (2400 x 1792) source renders, 5.1 MB, published but referenced by nothing. Moved with `git mv` to `image-originals/` (alongside the existing clean-outs file). The commercial source file is no longer served from the site and is not wired anywhere.
5. **Gate.** New `scripts/verify-images.mjs` (26 checks) and `scripts/lib/image-weight-waivers.json` (71 recorded waivers, which may not grow more than 5%). `docs/images-readme/README.md` documents the budget and checks.

No older verify script hard-coded an image expectation that these changes broke: all 31 existing verify scripts, `tsc --noEmit` and `count-placeholders --expect=0:0` pass after the rebuild. (`audit-commercial.mjs` section 7, "Docs, prompts, project files", reports FAIL on documentation mentions of the removed commercial services; it counts doc text and is unrelated to this work. Its section 6, "Images and assets", passes.)

One rule refinement, not a source change: the "before" crawl counted 4 meaningful empty-alt images. They are the `aria-hidden` hero collage tiles on `/for/`, where `alt=""` is correct. The final rules treat an empty alt as deliberate for `aria-hidden` ancestors, backdrops, hero backdrops, images inside a link, list item, article or figure whose text carries the meaning, and the service-area maps (documented in `MarketCoverage`). That covers all 764 empty-alt images; none is a meaningful standalone image.

## Policy findings

- **Alt claims:** none. No real-job, before-and-after, customer, address, licence, office, commercial or repair wording in any alt (pattern check on all 3,666 `<img>`).
- **Unconfirmed equipment in alt:** 8 references, fixed (see above). No other equipment brand appears in any alt. No equipment text in JSON-LD images.
- **Text inside images:** a visual pass over the 28 shared renders showed no legible brand, phone, licence or plate text. Visible text is limited to the distance counters ("12 ft", "14.5 ft") and blurred document and tablet text. The jetter trailer (IMG-17) carries a small illegible toolbox label. IMG-12's machine-leg label is left as owner-approved. No OCR was available, so small text inside the other service, hero and card images was not machine-checked.
- **Repair or replacement imagery:** none found (no excavation, trenchless, lining or pipe replacement subjects; alt scan clean).
- **Commercial:** no page references anything from the commercial source folder, and (second pass) no image file, folder or URL carries the word. The former IMG-28 street render was renamed `shared/city-street/...`.
- **Real-customer or identity implication:** none. Filenames of IMG-04, IMG-05 and IMG-07 contain "technician" or "property-owner" although no person is shown, and alt describes equipment only. Filenames left as is (approved).

## Second pass (follow-up to 8aa9147)

Nine items from the owner's follow-up. Everything below supersedes the matching statements above.

1. **audit-commercial.mjs.** Run against the commit before 8aa9147 (04fdf9d, in a worktree, so no `out/`): the docs-text failure was **pre-existing**. At 04fdf9d, section 7 (docs) reported C 2, D 22, E 393 and section 1 (source) reported C 13. The flagged lines were not leftover commercial wording: 13 were the commercial guard patterns in `scripts/audit-internal-links.mjs`, `scripts/lib/editorial-audit.mjs`, `link-rules.mjs` and `meta-audit.mjs` (code that exists to detect and ban commercial wording), and 2 were doc lines describing those bans (`docs/14-content-specification.md:1836`, `docs/16-internal-linking-strategy.md:2563`: "no repair or replacement offer, commercial wording, free estimate..." and "none points to a commercial page"). The first pass added 6 more guard-code lines (`audit-images.mjs`, `image-findings.mjs`) and 2 README lines. Fix: the audit now classifies audit tooling and shared guard libraries (`scripts/audit-*.mjs` other than itself, `scripts/lib/*.mjs`) as E like the verify scripts already were, treats a doc line that lists commercial wording among banned things as E, treats `image-originals/` as the approved source-folder location (class X), and expects the renamed IMG-28 path. My two README lines were reworded as ban statements. It is a classification fix, not a stale count threshold. Result: **CLEAN** (A 0, B 0, C 0, D 119 owner-review items that are municipal wording such as "facilities" and "businesses", unchanged in kind).
2. **Hash comparison against 04fdf9d.** 23 of the 27 `shared/` files differed because of the first-pass recompression; the 4 untouched were the two smallest sinks, the floor drain and the tablet. All 13 files in scope (the 12 approved renders, including the former IMG-28, plus IMG-12) were **restored byte-identical** from 04fdf9d and are now locked: `scripts/lib/approved-renders.json` holds their SHA-256 values, `compress-images.mjs` never touches them, and `verify-images.mjs` fails if any changes. They are exempt from the weight budget. The other generated renders stay recompressed. A before-and-after sheet of 10 recompressed images (before and after size, pixel size) is `image-audit-2026-10-27-recompression-sheet.jpg` in this folder; the pairs are visually indistinguishable at that scale.
3. **IMG-28 renamed.** `shared/commercial/the-sewer-pros-san-diego-commercial-street-manhole-curb-4x3.webp` is now `shared/city-street/the-sewer-pros-san-diego-city-street-manhole-curb-4x3.webp` (same bytes, `git mv`). Updated the Mission Valley page, `service-location-shared.ts`, the docs that name it, the approved-render lock and the waiver list; the gate's allow-list is now empty and fails on the word "commercial" in any file, folder or URL. Alt unchanged and scene-only.
4. **Responsive images.** The site is a static export (`output: 'export'`) with no image optimizer (`images.unoptimized` was set), so `next/image` emitted no `srcset`. Now: `scripts/generate-image-variants.mjs` writes 640, 960 and 1280 px WebP variants beside every WebP a page uses (162 originals, 359 variant files, 19.7 MB; only widths well under the original), `lib/image-variants.json` lists them, and a custom loader (`lib/image-loader.ts`, `images.loader: 'custom'`) makes `next/image` emit `srcset` and `sizes` everywhere. Originals stay the largest size; the 12 approved renders (1448 px) get 640 and 960 variants only. I added 960 to the requested 640 and 1280 because a 390 px phone at 2x needs about 780 px: with only 640 and 1280 most files served the 1280 size and the saving was 8 to 11 percent. `sizes` was added to the two card components that lacked it (`ProcessSteps`, `RelatedLinks`).

   Bytes a 390 px phone downloads for images (computed from the built HTML with `scripts/measure-mobile-bytes.mjs`: `sizes` evaluated at 390 px, times the device pixel ratio, smallest `srcset` candidate that fits; lazy images counted as a full scroll). "Pre-audit" uses the file sizes at 04fdf9d, "single src" is the same HTML served the old way after the first pass.

   | Page, 390 px at 2x | Full scroll, pre-audit | After first pass (single src) | Now (srcset) | Above the fold (eager), pre-audit | Now |
   |---|---|---|---|---|---|
   | Home `/` | 3,337 KB | 2,074 KB | **1,214 KB** | 210 KB | 135 KB |
   | Market hub `/st-louis-mo/` | 5,453 KB | 3,031 KB | **1,764 KB** | 554 KB | 176 KB |
   | Service + location `/locations/st-louis-mo/ballwin/drain-cleaning/` | 3,170 KB | 2,206 KB | **1,293 KB** | 74 KB | 74 KB |

   At 1x the same pages are 738, 1,046 and 792 KB; at 3x they are 1,843, 2,779 and 2,088 KB (3x needs about 1170 px, which picks the 1280 size). The service + location page has no hero image, so its eager weight is the logo. Published bytes in `public/` rose (variants), about 49.9 MB, but no page downloads them all. This is a computed figure, not a device trace; it ignores CSS-hidden images (equally before and after).
5. **OCR** (tesseract.js 5, run with `scripts/ocr-images.mjs`; SVG diagrams read by text node, not rasterised): all 213 images under `public/images`. 38 returned text; none is a conflicting claim. Details:
   - **22 maps** (service-area and market maps, rendered from Google Maps captures): place names and "Map data 2026 Google" or "Google INEGI" attribution, plus a few map labels such as "Legoland California Resort", "Christian Hospital", "Chesterfield Miniature Golf". Real geography, no business claims. **Decision for you: confirm you are licensed to use these Google Maps captures** (the attribution is in the images, which helps, but a captured map on a commercial site is the owner's call).
   - **4 SVG diagrams** (sewer lateral responsibility, wastewater authorities): generic labels ("Public sewer main", "Property boundary", "Confirm requirements with the applicable local utility"). Two of them used em dashes in their text; changed to hyphens.
   - **1 brand asset**: the email-signature PNG, "SEWER DRAIN SPECIALISTS" (not placed on any page).
   - **11 OCR noise hits** (3-letter non-words such as "SAE", "AAT", "FAVAVAVAVA" on equipment, stucco and footage textures; checked by eye on the 8 not already reviewed, no legible text).
   - Not seen by OCR because they are shorter than 3 characters: the distance counters ("12 ft", "14.5 ft") on two renders, already known and consistent with the text "ft".
   All are recorded with reasons in `scripts/lib/image-ocr-waivers.json`; `verify-images.mjs` fails on any new image with legible text that is not waived, and on any image changed since its OCR.
6. **Existing renders wired, no new images.** 23 pages gained images:
   - **8 location pages** with no hero (Henderson, Las Vegas, North Las Vegas, Summerlin; Chula Vista, Escondido, Oceanside, San Marcos) now use their market's own hero render as the backdrop, under the black scrim, through the existing `heroForm.backdrop` (a photo in the page's hero slot still takes priority). All 16 location pages now have a hero.
   - **6 audience pages**: `Hero` now takes `media` in the editorial variant (a 4:3 picture in the right 5 of 12 columns, below the copy on mobile, priority and fetchpriority high), and each audience page shows its card render from `/for/`, as the audience design reference does (hero image beside the copy). Scene-only alt written for each.
   - **9 resource, comparison, FAQ and hub pages**: a header picture from existing files (`data/business/editorial-images.ts` keyed by pathname, rendered by the new `EditorialMedia` component: in the hero for the Resources hub, a 7:4 figure under the header for articles, comparisons and the FAQ). The two comparisons use the two renders that were made for them and sat unused. The St. Louis guides use St. Louis renders. While wiring I also corrected the stale card entry for the hydro-jetting comparison in `content/pages/comparisons.tsx`, whose alt ("jetting and snaking equipment side by side") described a different image and whose source said "field photography"; it now has the scene-only alt and the render source line.
   Still without an image: the thank-you page (intentional) and the 144 service + location pages (hero only; see item 8).
7. **Unused files moved, nothing deleted.** 15 files moved from `public/` to `image-originals/unused-from-public/` (same sub-paths) with `git mv`. The list was 16; one of them, the independent-versus-repair comparison render, is now wired (item 6), so 15 moved. They no longer ship with the site.
8. **Hero brief:** `service-location-hero-brief.md` in this folder. 27 images (9 services x 3 markets) cover all 144 service + location pages (St. Louis 5 cities, San Diego 7, Las Vegas 4); each entry has the file name, slot, a generation prompt in the style of the approved renders, scene-only alt, the confirmed equipment names to use and a market setting. Rule: a page uses the hero for its service in its own market, never another market's, and falls back to no hero rather than a generic one. Nothing was generated.
9. **Gate and checks.** `verify-images.mjs` now has 33 checks, adding: no "commercial" in any image file, folder or URL; approved renders byte-identical; `srcset` and `sizes` on every hero, card and grid image that has variants, every `srcset` URL resolves, every manifest variant exists; audience, location, resource, comparison, FAQ and hub pages each have an image; every published image OCR-clean or waived. After the final rebuild: `tsc --noEmit` clean, `verify-images` all pass, all 31 other verify scripts pass, `audit-commercial` CLEAN, `count-placeholders --expect=0:0` passes, eslint 0 errors (11 pre-existing warnings).

### Decisions for you (updated)

1. Google Maps captures used as the service-area maps: confirm licensing (item 5).
2. 61 files remain over the 100 KB or 200 KB budget at the quality floor (listed with reasons in `scripts/lib/image-weight-waivers.json`). Default accepted.
3. Whether to generate the 27 service + location heroes in the brief (item 8).

## Still open

- **Service + location hero images** (144 pages, text hero): needs new generated images; see `service-location-hero-brief.md` (27 files).
- **Location-specific photo tiles** on location pages (the reference shows neighbourhood tiles): would need new generated images.
- **Header logo.** `the-sewer-pros-logo-primary-transparent.png` is 926 x 184 (75 KB), preloaded on every page and displayed about 200 px wide. A 2x derivative would save about 50 KB per page.
- **Naming.** Two files lack the `the-sewer-pros-` prefix: `contact/hero/sewer-pros-contact-sewer-camera-inspection-hero-16x9.webp` and `markets/st-louis-mo/services/st-louis-residential-sewer-lateral-public-main.svg`. Left alone to avoid a rename across code and docs.
- **Share image.** All 197 indexable pages use one brand card (1200 x 630 PNG, 88 KB, absolute URL, loads). Per-market cards would need new images.
- **Schema.** Only the Organization `logo` appears in image fields (absolute, resolves). No page-level `image`.
- **Real-photo upgrades, if wanted later:** IMG-05 first (154 pages, including the shared services-section image on every service + location page), then the service-card renders used on about 165 pages each, then the three market hero renders. Approved renders are not marked as needing real photos.

## Before and after

| Metric | Before | After |
|---|---|---|
| Pages crawled (indexable) | 198 (197) | 198 (197) |
| Image references | 3668 | 3691 |
| Unique image files referenced | 170 | 172 |
| Broken image references | 0 | 0 |
| Placeholder boxes or placeholder strings | 0 | 0 |
| Slots with no file (visible placeholder boxes) | 0 (build log: "Unfilled image slots: none") | 0 |
| Missing alt attribute | 0 | 0 |
| Empty alt on a meaningful image | 4 | 0 |
| Alt over 125 characters (references) | 142 | 0 |
| Alt with unconfirmed equipment wording (references) | 8 | 0 |
| Alt with a banned claim (references) | 0 | 0 |
| Images without width/height or an aspect box | 0 | 0 |
| Lazy-loaded hero images | 0 | 0 |
| Pages whose hero lacks fetchpriority=high | 29 | 0 |
| Files over the weight budget | 125 | 71 |
| Image bytes referenced by pages (unique files) | 40.0 MB | 20.9 MB |
| Image and video bytes published from public/ | 62.0 MB | 49.9 MB |
| Pages missing a valid og:image or twitter:image | 0 | 0 |
| Schema image URLs broken or relative | 0 | 0 |
| Commercial images referenced | 0 | 0 |
| Unreferenced files in public/ (not in any page or in source) | 45 | 19 |
| Files loaded only on the client (hero frames, video) | 24 | 23 |

## Image weight by page type

| Page type | Pages | Avg image KB before | After | Largest page before | After | Avg images |
|---|---|---|---|---|---|---|
| about | 1 | 3249 | 1994 | 3249 | 1994 | 19 |
| compare | 2 | 101 | 229 | 101 | 241 | 3 |
| contact | 1 | 1800 | 862 | 1800 | 862 | 8 |
| thank-you | 1 | 101 | 101 | 101 | 101 | 2 |
| faq | 1 | 101 | 166 | 101 | 166 | 3 |
| audience | 6 | 101 | 222 | 101 | 282 | 3 |
| audience-hub | 1 | 3344 | 1601 | 3344 | 1601 | 17 |
| home | 1 | 3337 | 2074 | 3337 | 2074 | 18 |
| market-contact | 3 | 719 | 331 | 963 | 407 | 3 |
| market-hub | 3 | 6677 | 3445 | 8826 | 3924 | 33 |
| locations-hub | 1 | 4707 | 2348 | 4707 | 2348 | 18 |
| service-location | 144 | 3334 | 2258 | 3701 | 2620 | 20.5 |
| location | 16 | 3144 | 2266 | 3756 | 2582 | 18.5 |
| resource | 5 | 101 | 307 | 101 | 502 | 3 |
| resources-hub | 1 | 101 | 199 | 101 | 199 | 3 |
| service | 9 | 3087 | 1688 | 4217 | 2184 | 15.6 |
| services-hub | 1 | 3921 | 2219 | 3921 | 2219 | 19 |
| market-other | 1 | 188 | 188 | 188 | 188 | 3 |

## Page families: image coverage

| Page family | Pages | Pages with no content image | Pages with no hero image | Content images per page (min-max) | Pages with a market-specific image |
|---|---|---|---|---|---|
| about | 1 | 0 | 0 | 17-17 | 1 |
| compare | 2 | 0 | 2 | 1-1 | 0 |
| contact | 1 | 0 | 0 | 9-9 | 1 |
| thank-you | 1 | 1 | 1 | 0-0 | 0 |
| faq | 1 | 0 | 1 | 1-1 | 0 |
| audience | 6 | 0 | 0 | 1-1 | 0 |
| audience-hub | 1 | 0 | 0 | 15-15 | 1 |
| home | 1 | 0 | 0 | 16-16 | 1 |
| market-contact | 3 | 0 | 0 | 1-1 | 3 |
| market-hub | 3 | 0 | 0 | 26-37 | 3 |
| locations-hub | 1 | 0 | 0 | 16-16 | 1 |
| service-location | 144 | 0 | 144 | 17-20 | 144 |
| location | 16 | 0 | 0 | 18-18 | 16 |
| resource | 5 | 0 | 5 | 1-1 | 2 |
| resources-hub | 1 | 0 | 0 | 1-1 | 0 |
| service | 9 | 0 | 0 | 11-18 | 9 |
| services-hub | 1 | 0 | 0 | 16-16 | 1 |
| market-other | 1 | 0 | 1 | 1-1 | 0 |

## Most reused files

| Pages using it | File |
|---|---|
| 168 | `images/services/service-cards/the-sewer-pros-sewer-camera-inspection-ridgid-monitor.webp` |
| 166 | `images/services/service-cards/the-sewer-pros-sewer-line-locating-equipment.webp` |
| 165 | `images/services/service-cards/the-sewer-pros-sewer-cleaning-ridgid-equipment.webp` |
| 165 | `images/services/service-cards/the-sewer-pros-hydro-jetting-sewer-cleaning.webp` |
| 164 | `images/services/service-cards/the-sewer-pros-sewer-cleaning-camera-inspection.webp` |
| 164 | `images/services/service-cards/the-sewer-pros-pre-purchase-sewer-inspection.webp` |
| 162 | `images/services/service-cards/the-sewer-pros-recurring-sewer-backup-diagnosis.webp` |
| 161 | `images/services/service-cards/the-sewer-pros-drain-cleaning-ridgid-equipment.webp` |
| 161 | `images/services/service-cards/the-sewer-pros-preventative-sewer-maintenance.webp` |
| 154 | `images/shared/equipment/the-sewer-pros-technician-reviewing-camera-footage-monitor-4x3.webp` |
| 87 | `images/shared/cleanouts/the-sewer-pros-floor-drain-cleanout-access-4x3.webp` |
| 65 | `images/shared/cleanouts/the-sewer-pros-capped-exterior-cleanout-base-of-house-4x3.webp` |
| 65 | `images/shared/residential/the-sewer-pros-san-diego-residential-street-manhole-curb-4x3.webp` |
| 55 | `images/markets/san-diego-ca/service-locations/the-sewer-pros-san-diego-ca-sewer-services.webp` |
| 55 | `images/markets/san-diego-ca/service-locations/the-sewer-pros-san-marcos-ca-sewer-services.webp` |

## Slot table (one row per file in use)

| Slot | Pages | File | Size | Page types | Status |
|---|---|---|---|---|---|
| (unregistered) | 198 | `images/brand/logos/01-primary-logo/the-sewer-pros-logo-primary-transparent.png` | 74 KB 926x184 | about, compare, contact, thank-you, faq, audience, audience-hub, home, market-contact, market-hub, locations-hub, service-location, location, resource, resources-hub, service, services-hub, market-other | wired; brand asset |
| (unregistered) | 198 | `images/brand/logos/02-one-color/the-sewer-pros-logo-white.png` | 27 KB 926x184 | about, compare, contact, thank-you, faq, audience, audience-hub, home, market-contact, market-hub, locations-hub, service-location, location, resource, resources-hub, service, services-hub, market-other | wired; brand asset |
| (unregistered) | 168 | `images/services/service-cards/the-sewer-pros-sewer-camera-inspection-ridgid-monitor.webp` | 87 KB 1448x1086 | about, home, market-hub, locations-hub, service-location, location, service, services-hub, market-other | wired; existing asset |
| (unregistered) | 166 | `images/services/service-cards/the-sewer-pros-sewer-line-locating-equipment.webp` | 114 KB 1296x968 | about, home, market-hub, locations-hub, service-location, location, service, services-hub | wired; existing asset |
| (unregistered) | 165 | `images/services/service-cards/the-sewer-pros-sewer-cleaning-ridgid-equipment.webp` | 137 KB 1303x977 | about, home, market-hub, locations-hub, service-location, location, service, services-hub | wired; existing asset |
| (unregistered) | 165 | `images/services/service-cards/the-sewer-pros-hydro-jetting-sewer-cleaning.webp` | 177 KB 1303x977 | about, home, market-hub, locations-hub, service-location, location, service, services-hub | wired; existing asset |
| (unregistered) | 164 | `images/services/service-cards/the-sewer-pros-sewer-cleaning-camera-inspection.webp` | 111 KB 1296x968 | about, home, market-hub, locations-hub, service-location, location, services-hub, service | wired; existing asset |
| (unregistered) | 164 | `images/services/service-cards/the-sewer-pros-pre-purchase-sewer-inspection.webp` | 120 KB 1296x968 | about, home, market-hub, locations-hub, service-location, location, services-hub, service | wired; existing asset |
| (unregistered) | 162 | `images/services/service-cards/the-sewer-pros-recurring-sewer-backup-diagnosis.webp` | 141 KB 1303x977 | about, home, market-hub, locations-hub, service-location, location, services-hub, service | wired; existing asset |
| (unregistered) | 161 | `images/services/service-cards/the-sewer-pros-drain-cleaning-ridgid-equipment.webp` | 95 KB 1448x1086 | about, home, market-hub, locations-hub, service-location, location, service, services-hub | wired; existing asset |
| (unregistered) | 161 | `images/services/service-cards/the-sewer-pros-preventative-sewer-maintenance.webp` | 201 KB 1600x1195 | about, home, market-hub, locations-hub, service-location, location, services-hub, service | wired; existing asset |
| IMG-05 | 154 | `images/shared/equipment/the-sewer-pros-technician-reviewing-camera-footage-monitor-4x3.webp` | 133 KB 1296x972 | service-location, location, service | wired; generated render (approved, DEC-145) |
| IMG-01 | 87 | `images/shared/cleanouts/the-sewer-pros-floor-drain-cleanout-access-4x3.webp` | 98 KB 1448x1086 | service-location, location | wired; generated render (approved, DEC-145) |
| IMG-02 | 65 | `images/shared/cleanouts/the-sewer-pros-capped-exterior-cleanout-base-of-house-4x3.webp` | 178 KB 1448x1086 | location, service-location, service | wired; generated render (approved, DEC-145) |
| IMG-26 | 65 | `images/shared/residential/the-sewer-pros-san-diego-residential-street-manhole-curb-4x3.webp` | 202 KB 1448x1086 | service-location, location | wired; generated render (approved, DEC-145) |
| (unregistered) | 55 | `images/markets/san-diego-ca/service-locations/the-sewer-pros-san-diego-ca-sewer-services.webp` | 47 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 55 | `images/markets/san-diego-ca/service-locations/the-sewer-pros-san-marcos-ca-sewer-services.webp` | 54 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 55 | `images/markets/san-diego-ca/service-locations/the-sewer-pros-escondido-ca-sewer-services.webp` | 51 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 55 | `images/markets/san-diego-ca/service-locations/the-sewer-pros-oceanside-ca-sewer-services.webp` | 39 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 55 | `images/markets/san-diego-ca/service-locations/the-sewer-pros-chula-vista-ca-sewer-services.webp` | 52 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 55 | `images/markets/san-diego-ca/service-locations/the-sewer-pros-mission-valley-san-diego-sewer-services.webp` | 49 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 55 | `images/markets/san-diego-ca/service-locations/the-sewer-pros-carlsbad-ca-sewer-services.webp` | 41 KB 1300x676 | service-location, market-hub | wired; existing asset |
| IMG-03 | 51 | `images/shared/residential/the-sewer-pros-st-louis-residential-street-manhole-curb-4x3.webp` | 306 KB 1448x1086 | service-location, location, resource | wired; generated render (approved, DEC-145) |
| IMG-29 | 40 | `images/shared/residential/the-sewer-pros-las-vegas-residential-street-manhole-curb-4x3.webp` | 130 KB 1448x1086 | service-location, location | wired; generated render (approved, DEC-145) |
| (unregistered) | 37 | `images/markets/st-louis-mo/service-locations/the-sewer-pros-st-louis-city-mo-sewer-service-area.webp` | 88 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 37 | `images/markets/st-louis-mo/service-locations/the-sewer-pros-florissant-mo-sewer-service-area.webp` | 47 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 37 | `images/markets/st-louis-mo/service-locations/the-sewer-pros-chesterfield-mo-sewer-service-area.webp` | 52 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 37 | `images/markets/st-louis-mo/service-locations/the-sewer-pros-st-charles-mo-sewer-service-area.webp` | 66 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 37 | `images/markets/st-louis-mo/service-locations/the-sewer-pros-ballwin-mo-sewer-service-area.webp` | 52 KB 1300x676 | service-location, market-hub | wired; existing asset |
| IMG-06 | 35 | `images/shared/pipe-interiors/the-sewer-pros-tablet-inspection-video-beside-written-findings-4x3.webp` | 97 KB 1600x1200 | location, service-location, resource, service | wired; generated render (approved, DEC-145) |
| IMG-04 | 33 | `images/shared/residential/the-sewer-pros-technician-for-sale-property-starting-sewer-scope-4x3.webp` | 141 KB 1296x972 | location, service-location | wired; generated render (approved, DEC-145) |
| IMG-07 | 33 | `images/shared/residential/the-sewer-pros-technician-reviewing-findings-with-property-owner-4x3.webp` | 97 KB 1600x1200 | location, service-location | wired; generated render (approved, DEC-145) |
| IMG-08 | 33 | `images/shared/cleanouts/the-sewer-pros-cleaning-cable-entering-cleanout-close-up-4x3.webp` | 163 KB 1296x972 | service-location, service | wired; generated render (approved, DEC-145) |
| IMG-09 | 32 | `images/shared/residential/the-sewer-pros-bathroom-sink-and-tub-4x3.webp` | 48 KB 1448x1086 | service-location | wired; generated render (approved, DEC-145) |
| IMG-10 | 32 | `images/shared/pipe-interiors/the-sewer-pros-monitor-showing-pipe-interior-4x3.webp` | 132 KB 1296x972 | service-location, resource | wired; generated render (approved, DEC-145) |
| (unregistered) | 28 | `images/markets/las-vegas-nv/service-locations/the-sewer-pros-las-vegas-nv-sewer-services.webp` | 56 KB 1300x676 | market-hub, service-location | wired; existing asset |
| (unregistered) | 28 | `images/markets/las-vegas-nv/service-locations/the-sewer-pros-henderson-nv-sewer-services.webp` | 52 KB 1300x676 | market-hub, service-location | wired; existing asset |
| (unregistered) | 28 | `images/markets/las-vegas-nv/service-locations/the-sewer-pros-north-las-vegas-nv-sewer-services.webp` | 37 KB 1300x676 | market-hub, service-location | wired; existing asset |
| (unregistered) | 28 | `images/markets/las-vegas-nv/service-locations/the-sewer-pros-summerlin-las-vegas-sewer-services.webp` | 58 KB 1300x676 | market-hub, service-location | wired; existing asset |
| IMG-11 | 25 | `images/shared/equipment/the-sewer-pros-technician-locator-receiver-yard-paint-marks-4x3.webp` | 133 KB 1296x972 | location, service-location, service | wired; generated render (approved, DEC-145) |
| IMG-12 | 24 | `images/shared/equipment/the-sewer-pros-drain-machine-at-floor-drain-4x3.webp` | 116 KB 1600x1200 | service-location, location | wired; generated render (approved, DEC-145) |
| IMG-13 | 24 | `images/shared/equipment/the-sewer-pros-jetting-nozzle-hose-at-sewer-line-4x3.webp` | 141 KB 1296x972 | service-location, location | wired; generated render (approved, DEC-145) |
| IMG-15 | 24 | `images/shared/equipment/the-sewer-pros-cleaning-machine-cable-at-cleanout-4x3.webp` | 122 KB 1296x972 | location, service-location | wired; generated render (approved, DEC-145) |
| IMG-16 | 17 | `images/shared/residential/the-sewer-pros-kitchen-sink-slow-drain-4x3.webp` | 65 KB 1448x1086 | faq, service-location | wired; generated render (approved, DEC-145) |
| IMG-18 | 17 | `images/shared/residential/the-sewer-pros-inspection-report-handed-to-agent-4x3.webp` | 94 KB 1600x1200 | location, resource | wired; generated render (approved, DEC-145) |
| IMG-20 | 17 | `images/shared/equipment/the-sewer-pros-monitor-pipe-interior-beside-locator-receiver-4x3.webp` | 97 KB 1600x1200 | service-location, resources-hub | wired; generated render (approved, DEC-145) |
| IMG-17 | 16 | `images/shared/equipment/the-sewer-pros-jetter-trailer-at-curb-4x3.webp` | 101 KB 1296x972 | service-location | wired; generated render (approved, DEC-145) |
| IMG-14 | 16 | `images/shared/equipment/the-sewer-pros-camera-head-push-cable-entering-cleanout-4x3.webp` | 120 KB 1296x972 | location | wired; generated render (approved, DEC-145) |
| IMG-19 | 16 | `images/shared/residential/the-sewer-pros-fence-line-planting-beds-possible-dig-area-4x3.webp` | 309 KB 1448x1086 | service-location | wired; generated render (approved, DEC-145) |
| (unregistered) | 15 | `images/markets/st-louis-mo/locations/the-sewer-pros-st-louis-service-area-map.webp` | 94 KB 1400x728 | about, contact, audience-hub, home, locations-hub, service, services-hub | wired; existing asset |
| (unregistered) | 15 | `images/markets/san-diego-ca/locations/the-sewer-pros-san-diego-service-area-map.webp` | 95 KB 1920x998 | about, contact, audience-hub, home, locations-hub, service, services-hub | wired; existing asset |
| (unregistered) | 15 | `images/markets/las-vegas-nv/locations/the-sewer-pros-las-vegas-service-area-map.webp` | 93 KB 1920x998 | about, contact, audience-hub, home, locations-hub, service, services-hub | wired; existing asset |
| IMG-21 | 15 | `images/shared/pipe-interiors/the-sewer-pros-camera-footage-still-distance-counter-4x3.webp` | 92 KB 1440x1080 | location | wired; generated render (approved, DEC-145) |
| IMG-27 | 7 | `images/shared/residential/the-sewer-pros-san-diego-older-home-visible-cleanout-4x3.webp` | 297 KB 1448x1086 | service-location | wired; generated render (approved, DEC-145) |
| IMG-22 | 6 | `images/shared/residential/the-sewer-pros-st-louis-older-home-visible-cleanout-4x3.webp` | 400 KB 1448x1086 | service-location, resource | wired; generated render (approved, DEC-145) |
| (unregistered) | 5 | `images/markets/las-vegas-nv/hero/the-sewer-pros-las-vegas-residential-sewer-camera-inspection-hero.webp` | 171 KB 1672x941 | market-hub, location | wired; existing asset |
| (unregistered) | 5 | `images/markets/san-diego-ca/hero/the-sewer-pros-san-diego-residential-sewer-camera-inspection-hero.webp` | 193 KB 1672x941 | location, market-hub | wired; existing asset |
| IMG-28 | 5 | `images/shared/city-street/the-sewer-pros-san-diego-city-street-manhole-curb-4x3.webp` | 159 KB 1448x1086 | service-location, location | wired; generated render (approved, DEC-145) |
| (unregistered) | 5 | `images/markets/st-louis-mo/hero/the-sewer-pros-st-louis-residential-sewer-camera-inspection-hero-1280.webp` | 169 KB 1280x714 | location | wired; existing asset |
| (unregistered) | 4 | `images/homepage/hero/the-sewer-pros-residential-sewer-camera-inspection-hero.webp` | 137 KB 1672x940 | home, location | wired; existing asset |
| (unregistered) | 4 | `images/homepage/differentiator/the-sewer-pros-st-louis-residential-property-exterior.webp` | 183 KB 1355x763 | home, locations-hub, services-hub, market-hub | wired; existing asset |
| IMG-30 | 4 | `images/shared/residential/the-sewer-pros-las-vegas-older-home-visible-cleanout-4x3.webp` | 349 KB 1448x1086 | service-location | wired; generated render (approved, DEC-145) |
| (unregistered) | 3 | `images/markets/locations-hub/the-sewer-pros-three-market-service-areas-cta.webp` | 198 KB 1400x788 | contact, audience-hub, locations-hub | wired; existing asset |
| (unregistered) | 3 | `images/homepage/differentiator/the-sewer-pros-multifamily-properties.webp` | 95 KB 1355x763 | home, locations-hub, services-hub | wired; existing asset |
| (unregistered) | 3 | `images/services/sewer-camera-inspection/the-sewer-pros-sewer-camera-footage-visible-pipe-offset-example-4x3.webp` | 95 KB 1303x977 | location, service | wired; existing asset |
| (unregistered) | 3 | `images/services/sewer-camera-inspection/the-sewer-pros-ridgid-seesnake-sewer-inspection-request-form-background-16x9.webp` | 94 KB 1400x788 | service | wired; existing asset |
| (unregistered) | 2 | `images/audiences/audience-hub/the-sewer-pros-hoa-community-sewer-inspection-evidence.webp` | 113 KB 1296x972 | audience, audience-hub | wired; existing asset |
| (unregistered) | 2 | `images/audiences/audience-hub/the-sewer-pros-home-buyers-pre-purchase-sewer-inspection.webp` | 148 KB 1303x977 | audience, audience-hub | wired; existing asset |
| (unregistered) | 2 | `images/audiences/audience-hub/the-sewer-pros-home-inspectors-specialized-sewer-inspection.webp` | 97 KB 1448x1086 | audience, audience-hub | wired; existing asset |
| (unregistered) | 2 | `images/audiences/audience-hub/the-sewer-pros-home-sellers-pre-listing-sewer-documentation.webp` | 93 KB 1440x1080 | audience, audience-hub | wired; existing asset |
| (unregistered) | 2 | `images/audiences/audience-hub/the-sewer-pros-real-estate-agents-sewer-inspection-findings.webp` | 93 KB 1600x1200 | audience-hub, audience | wired; existing asset |
| (unregistered) | 2 | `images/audiences/audience-hub/the-sewer-pros-property-managers-recurring-sewer-diagnosis.webp` | 181 KB 1296x972 | audience-hub, audience | wired; existing asset |
| (unregistered) | 2 | `images/homepage/differentiator/the-sewer-pros-schedule-sewer-inspection-home-exterior.webp` | 94 KB 1505x847 | home, market-hub | wired; existing asset |
| (unregistered) | 2 | `images/markets/locations-hub/the-sewer-pros-st-louis-sewer-service-area-hero.webp` | 306 KB 1728x973 | locations-hub, market-contact | wired; existing asset |
| (unregistered) | 2 | `images/services/sewer-camera-inspection/the-sewer-pros-ridgid-seesnake-camera-reel-cable-equipment-4x3.webp` | 95 KB 1303x977 | service | wired; existing asset |
| (unregistered) | 2 | `images/services/sewer-camera-inspection/the-sewer-pros-ridgid-seesnake-sewer-camera-inspection-process-illustration-4x3.webp` | 150 KB 1303x977 | service | wired; existing asset |
| (unregistered) | 2 | `images/services/sewer-camera-inspection/the-sewer-pros-ridgid-seesnake-inspection-footage-report-review-4x3.webp` | 94 KB 1303x977 | service | wired; existing asset |
| (unregistered) | 2 | `images/services/sewer-camera-inspection/the-sewer-pros-sewer-camera-root-intrusion-pipe-joint-4x3.webp` | 95 KB 1303x977 | service | wired; existing asset |
| (unregistered) | 2 | `images/services/sewer-camera-inspection/the-sewer-pros-sewer-camera-footage-standing-water-in-pipe-example-4x3.webp` | 95 KB 1303x977 | service | wired; existing asset |
| (unregistered) | 2 | `images/services/sewer-camera-inspection/the-sewer-pros-sewer-camera-inspection-monitor-findings-summary-review-4x3.webp` | 96 KB 1303x977 | service | wired; existing asset |
| (unregistered) | 1 | `images/brand/about/hero/the-sewer-pros-about-independent-sewer-inspection-hero.webp` | 211 KB 1672x941 | about | wired; brand asset |
| (unregistered) | 1 | `images/brand/about/founders/the-sewer-pros-tracy-coffman-profile-image.webp` | 9 KB 480x600 | about | wired; brand asset |
| (unregistered) | 1 | `images/brand/about/founders/the-sewer-pros-rick-coffman-profile-image.webp` | 7 KB 480x600 | about | wired; brand asset |
| (unregistered) | 1 | `images/brand/about/the-sewer-pros-about-what-to-expect-sewer-camera-inspection-4x3.webp` | 107 KB 1303x977 | about | wired; brand asset |
| (unregistered) | 1 | `images/brand/about/the-sewer-pros-about-contact-cta-sewer-camera-inspection-16x9.webp` | 94 KB 1728x973 | about | wired; brand asset |
| (unregistered) | 1 | `images/services/hydro-jetting/the-sewer-pros-hydro-jetting-vs-sewer-snaking-cleaning-methods-4x3.webp` | 140 KB 1296x968 | compare | wired; existing asset |
| (unregistered) | 1 | `images/services/pre-purchase-sewer-inspection/the-sewer-pros-independent-sewer-inspection-vs-repair-company-inspection-ridgid-seesnake-4x3.webp` | 116 KB 1296x968 | compare | wired; existing asset |
| (unregistered) | 1 | `images/contact/hero/sewer-pros-contact-sewer-camera-inspection-hero-16x9.webp` | 186 KB 1920x1072 | contact | wired; existing asset |
| (unregistered) | 1 | `images/contact/the-sewer-pros-contact-request-inspection-background-16x9.webp` | 95 KB 1555x868 | contact | wired; existing asset |
| (unregistered) | 1 | `images/audiences/audience-hub/hero/the-sewer-pros-who-we-serve-hero-blue-gray-background.webp` | 14 KB 1672x941 | audience-hub | wired; existing asset |
| (unregistered) | 1 | `images/audiences/audience-hub/hero/the-sewer-pros-home-inspectors-ridgid-seesnake-cs12x-monitor.webp` | 84 KB 1448x1086 | audience-hub | wired; existing asset |
| (unregistered) | 1 | `images/audiences/audience-hub/hero/the-sewer-pros-home-inspectors-seesnake-standard-camera-reel-trusense.webp` | 73 KB 1448x1086 | audience-hub | wired; existing asset |
| (unregistered) | 1 | `images/audiences/audience-hub/hero/the-sewer-pros-home-inspectors-ridgid-seektech-sr-20-utility-line-locator.webp` | 62 KB 1448x1086 | audience-hub | wired; existing asset |
| (unregistered) | 1 | `images/audiences/audience-hub/hero/the-sewer-pros-home-inspectors-ridgid-k-7500-drum-machine.webp` | 62 KB 1448x1086 | audience-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/locations-hub/the-sewer-pros-las-vegas-sewer-service-area-hero.webp` | 191 KB 1920x1081 | market-contact | wired; existing asset |
| (unregistered) | 1 | `images/markets/las-vegas-nv/services/the-sewer-pros-las-vegas-sewer-inspection-experience.webp` | 133 KB 1303x977 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/las-vegas-nv/services/the-sewer-pros-las-vegas-sewer-camera-evidence.webp` | 136 KB 1303x977 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/las-vegas-nv/services/the-sewer-pros-pre-purchase-sewer-camera-inspection.webp` | 118 KB 1344x768 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/las-vegas-nv/services/the-sewer-pros-preventative-sewer-maintenance-planning.webp` | 118 KB 1303x977 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/las-vegas-nv/services/the-sewer-pros-property-management-sewer-condition-documentation.webp` | 95 KB 1303x977 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/las-vegas-nv/services/the-sewer-pros-recurring-sewer-backups-camera-inspection.webp` | 95 KB 1296x972 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/las-vegas-nv/services/the-sewer-pros-multiple-slow-drains-sewer-line-inspection.webp` | 132 KB 1222x1043 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/las-vegas-nv/services/the-sewer-pros-older-frequently-blocked-sewer-line-inspection.webp` | 97 KB 1296x972 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/las-vegas-nv/services/the-sewer-pros-las-vegas-valley-sewer-service-cta.webp` | 101 KB 1400x788 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/las-vegas-nv/services/the-sewer-pros-las-vegas-sewer-lateral-responsibility.svg` | 7 KB 1600x1200 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/las-vegas-nv/services/the-sewer-pros-recurring-sewer-backup-diagnosis.webp` | 132 KB 1303x977 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/las-vegas-nv/services/the-sewer-pros-sewer-line-inspection-after-property-changes.webp` | 128 KB 1303x977 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/las-vegas-nv/services/the-sewer-pros-sewer-maintenance-planning-inspection-evidence.webp` | 126 KB 1303x977 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/las-vegas-nv/services/the-sewer-pros-las-vegas-pre-purchase-sewer-inspection.webp` | 118 KB 1303x977 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/las-vegas-nv/services/the-sewer-pros-las-vegas-residential-service-cta.webp` | 134 KB 1400x788 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/locations-hub/the-sewer-pros-san-diego-sewer-service-area-hero.webp` | 193 KB 1728x973 | market-contact | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-san-diego-sewer-inspection-experience.webp` | 106 KB 1200x896 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-sewer-line-root-intrusion-camera-inspection.webp` | 105 KB 1296x972 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-sewer-line-grease-scale-buildup-camera-inspection.webp` | 124 KB 1296x972 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-sewer-line-blockage-camera-inspection.webp` | 127 KB 1296x972 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-sewer-line-offset-joint-camera-inspection.webp` | 96 KB 1296x972 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-sewer-line-standing-water-camera-inspection.webp` | 95 KB 1296x972 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-sewer-line-cracks-deterioration-camera-inspection.webp` | 130 KB 1296x972 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-recurring-sewer-backup-camera-inspection.webp` | 95 KB 1296x972 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-multiple-slow-drains-sewer-camera-inspection.webp` | 94 KB 1296x972 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-san-diego-property-sewer-inspection.webp` | 118 KB 1400x781 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-preventative-sewer-maintenance-camera-inspection.webp` | 100 KB 1296x968 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-property-management-sewer-inspection-documentation.webp` | 128 KB 1296x968 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-older-sewer-line-camera-inspection.webp` | 187 KB 1296x968 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-san-diego-sewer-inspection-evidence.webp` | 104 KB 1296x968 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-san-diego-evidence-first-sewer-inspection.webp` | 151 KB 1296x968 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-san-diego-sewer-service-cta-background.webp` | 122 KB 1400x788 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-san-diego-sewer-lateral-responsibility-diagram.svg` | 9 KB 1600x1200 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-san-diego-wastewater-authorities-guide.svg` | 9 KB 1600x1000 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-san-diego-sewer-assistance-programs.webp` | 95 KB 1296x972 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/san-diego-ca/services/the-sewer-pros-san-diego-residential-service-cta.webp` | 117 KB 1400x788 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/services/drain-cleaning/hero/the-sewer-pros-drain-cleaning-hero-residential-cleanout-ridgid-equipment-16x9.webp` | 188 KB 1920x1072 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/drain-cleaning/the-sewer-pros-drain-cleaning-equipment-field-ridgid-k7500-4x3.webp` | 96 KB 1600x1195 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/drain-cleaning/the-sewer-pros-recurring-drain-issue-ridgid-seesnake-cs12x-monitor-4x3.webp` | 95 KB 1600x1195 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/drain-cleaning/the-sewer-pros-drain-cleaning-closing-cta-ridgid-k7500-background-16x9.webp` | 92 KB 1400x781 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/hydro-jetting/hero/the-sewer-pros-hydro-jetting-sewer-cleanout-background-16x9.webp` | 184 KB 1920x1072 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/hydro-jetting/the-sewer-pros-hydro-jetting-visit-mongoose-184-lt-cleanout-4x3.webp` | 122 KB 1296x968 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/hydro-jetting/the-sewer-pros-hydro-jetting-request-service-cleanout-mongoose-184-lt-background-16x9.webp` | 95 KB 1555x868 | service | wired; existing asset |
| (unregistered) | 1 | `images/markets/services-hub/hero/the-sewer-pros-services-hub-sewer-inspection-cleaning-hero.webp` | 184 KB 1920x1072 | services-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/services-hub/the-sewer-pros-sewer-service-request-cta-background.webp` | 110 KB 1400x788 | services-hub | wired; existing asset |
| (unregistered) | 1 | `images/services/pre-purchase-sewer-inspection/hero/the-sewer-pros-pre-purchase-sewer-inspection-hero-ridgid-seesnake-cs12x-16x9.webp` | 214 KB 1728x964 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/pre-purchase-sewer-inspection/the-sewer-pros-pre-purchase-sewer-inspection-request-cta-ridgid-seesnake-background-16x9.webp` | 95 KB 1400x781 | service | wired; existing asset |
| IMG-23 | 1 | `images/services/recurring-sewer-backup-diagnosis/the-sewer-pros-recurring-sewer-backup-diagnosis-hero-cleanout-16x9.webp` | 142 KB 1360x765 | service | wired; generated render (approved, DEC-145) |
| IMG-24 | 1 | `images/services/recurring-sewer-backup-diagnosis/the-sewer-pros-recurring-sewer-backup-diagnosis-causes-root-footage-4x3.webp` | 95 KB 1303x977 | service | wired; generated render (approved, DEC-145) |
| IMG-25 | 1 | `images/services/recurring-sewer-backup-diagnosis/the-sewer-pros-recurring-sewer-backup-diagnosis-limits-waterline-footage-4x3.webp` | 95 KB 1303x977 | service | wired; generated render (approved, DEC-145) |
| (unregistered) | 1 | `images/services/sewer-camera-inspection/hero/the-sewer-pros-ridgid-seesnake-camera-inspection-hero-16x9.webp` | 188 KB 1728x973 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/sewer-cleaning/hero/the-sewer-pros-sewer-cleaning-ridgid-seesnake-hero-16x9.webp` | 185 KB 1920x1081 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/sewer-cleaning/the-sewer-pros-sewer-cleaning-definition-ridgid-seesnake-equipment-4x3.webp` | 93 KB 1296x968 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/sewer-cleaning/the-sewer-pros-sewer-cleaning-visit-process-ridgid-seesnake-4x3.webp` | 94 KB 1440x1075 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/sewer-cleaning/the-sewer-pros-ridgid-seesnake-sewer-camera-monitor-review-4x3.webp` | 92 KB 1303x977 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/sewer-cleaning/the-sewer-pros-sewer-cleaning-request-cta-background-ridgid-seesnake-16x9.webp` | 96 KB 1555x868 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/sewer-cleaning-camera-inspection/hero/the-sewer-pros-sewer-camera-inspection-cleaning-cleanout-hero-background-16x9.webp` | 184 KB 1920x1072 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/sewer-cleaning-camera-inspection/the-sewer-pros-sewer-camera-inspection-visit-cleanout-equipment-4x3.webp` | 115 KB 1296x968 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/sewer-cleaning-camera-inspection/the-sewer-pros-field-seesnake-camera-sewer-cleaning-equipment-4x3.webp` | 109 KB 1296x968 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/sewer-cleaning-camera-inspection/the-sewer-pros-sewer-cleaning-camera-inspection-request-final-cta-background-16x9.webp` | 141 KB 1400x781 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/sewer-line-locating/hero/the-sewer-pros-sewer-line-locating-residential-property-hero-background-16x9.webp` | 224 KB 1728x964 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/sewer-line-locating/the-sewer-pros-sewer-line-locating-definition-seektech-sr20-4x3.webp` | 144 KB 1296x968 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/sewer-line-locating/the-sewer-pros-sewer-line-locating-visit-seektech-sr20-residential-4x3.webp` | 129 KB 1296x968 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/sewer-line-locating/the-sewer-pros-sewer-line-locating-equipment-field-seektech-sr20-4x3.webp` | 122 KB 1296x968 | service | wired; existing asset |
| (unregistered) | 1 | `images/services/sewer-line-locating/the-sewer-pros-sewer-line-locating-request-cta-background-16x9.webp` | 108 KB 1400x781 | service | wired; existing asset |
| (unregistered) | 1 | `images/markets/st-louis-mo/hero/the-sewer-pros-st-louis-residential-sewer-camera-inspection-hero.webp` | 279 KB 1728x964 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/st-louis-mo/services/the-sewer-pros-st-louis-sewer-camera-inspection-equipment.webp` | 181 KB 1296x968 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/st-louis-mo/services/st-louis-residential-sewer-lateral-public-main.svg` | 8 KB 1600x1200 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/st-louis-mo/services/the-sewer-pros-vitrified-clay-sewer-pipe.webp` | 90 KB 1600x1200 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/st-louis-mo/services/the-sewer-pros-cast-iron-sewer-pipe.webp` | 94 KB 1440x1080 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/st-louis-mo/services/the-sewer-pros-orangeburg-sewer-pipe.webp` | 93 KB 1440x1080 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/st-louis-mo/services/the-sewer-pros-st-louis-pre-purchase-sewer-inspection.webp` | 217 KB 1296x968 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/st-louis-mo/service-locations/the-sewer-pros-st-louis-county-mo-sewer-service-area.webp` | 72 KB 1300x676 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/st-louis-mo/service-locations/the-sewer-pros-st-charles-county-mo-sewer-service-area.webp` | 72 KB 1300x676 | market-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/st-louis-mo/service-locations/the-sewer-pros-jefferson-county-mo-sewer-service-area.webp` | 58 KB 1300x676 | market-hub | wired; existing asset |
