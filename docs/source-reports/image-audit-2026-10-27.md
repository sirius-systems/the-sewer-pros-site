# Image audit, 2026-10-27

Scope: all 198 built pages (197 indexable; `/contact/thank-you/` is noindex), crawled from `out/` plus the source components and registries. Tooling: `scripts/audit-images.mjs` (inventory and tables), `scripts/verify-images.mjs` (gate, also `npm run verify:images`), `scripts/compress-images.mjs`. Full per-page inventory: `image-audit-2026-10-27-before.json` / `.csv` and `-after.json` / `.csv` in this folder (one row per image reference: page, shot ID, declaring source file, src, repo and out/ presence, format, pixel size, bytes, width/height attributes, loading, fetchpriority, preload, alt, LCP flag).

## Summary

The site was already in good shape on the hard gaps: no broken references, no placeholder boxes (the build log reports "Unfilled image slots: none"), no missing alt, no image without dimensions or an aspect box, og:image and twitter:image valid on every indexable page, schema logo resolving, favicon set and manifest icons present at their declared sizes. The real findings were weight, hero priority, over-long alt and unconfirmed equipment wording in alt, and unused source renders published from `public/`. All were fixed. What remains is a set of pages with no image at all (a gap against the design references, not an empty slot) and 71 files that cannot reach the weight budget without a smaller source export.

## Fixes made

1. **Weight.** 125 files over budget re-encoded (WebP, quality floor 70). 37.1 MB to 17.3 MB on those files; image bytes referenced by pages 40.0 MB to 20.2 MB; published image/video bytes 62.0 MB to 36.1 MB. Typical page: home 3.3 MB to 2.1 MB, service + location 3.3 MB to 2.2 MB, market hub 6.7 MB to 3.4 MB. Files wider than 1600 px (2400 to 4096 px sources) were scaled down; the 12 owner-approved renders (1448 x 1086, in `shared/`) were re-encoded at quality 68 or higher with **no resize** and no change of name or content. Filenames and aspect ratios are unchanged everywhere. Originals are in git history.
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
- **Commercial:** no page references anything from the commercial source folder. One wired file still carries "commercial" in its folder and name, `shared/commercial/the-sewer-pros-san-diego-commercial-street-manhole-curb-4x3.webp` (IMG-28, an ordinary street with low buildings, used on Mission Valley and in the shared service + location registry). It is an approved render whose name was kept by an earlier decision; its alt is scene-only. The gate allows this one file and fails on any other commercial reference. See decision 1.
- **Real-customer or identity implication:** none. Filenames of IMG-04, IMG-05 and IMG-07 contain "technician" or "property-owner" although no person is shown, and alt describes equipment only. Filenames left as is (approved).

## Remaining gaps (no code or file can close them)

Page families that render no content image, compared with the design references:

| Family | Pages | Reference shows | Gap |
|---|---|---|---|
| Service + location | 144 | hero image, split image, problem cards, process, proof tiles, CTA image | Has everything except a hero image (text hero). 17 to 20 images per page otherwise. |
| Location / market | 8 of 16 | hero image | Those 8 have a text hero; the other 8 have one. No location-specific photo tiles (the reference shows neighbourhood tiles); only the market maps and market street and home renders are market-specific. |
| Audience | 6 | hero image, split image, service cards with art, proof tiles, CTA image | No images at all. The 6 per-audience card renders already exist under `audiences/audience-hub/` (used only on `/for/`). |
| Comparison | 2 | editorial hero or figure | None. |
| Resource, FAQ, Resources hub | 7 | editorial header image | None. |
| Thank-you | 1 | n/a | Intentional. |

No slot in any registry is empty and no template calls for an image it does not render; these are gaps in the templates relative to the references.

Other observations (report only):

- **Repeated use.** The 9 service-card images appear on 161 to 168 pages each and IMG-05 on 154; that is the related-services card row and the services section, not hero filler. No hero is shared across the 144 service + location pages (they have none). Market renders (street, older home) are per market as required.
- **Sizes and srcset.** The static export disables the image optimizer, so no `srcset` is emitted and every device downloads the one file. Per-width variants would need new derivative files, which this audit did not create.
- **Header logo.** `the-sewer-pros-logo-primary-transparent.png` is 926 x 184 (75 KB), preloaded on every page and displayed about 200 px wide. A 2x derivative would save about 50 KB per page.
- **Naming.** Two outliers lack the `the-sewer-pros-` prefix: `contact/hero/sewer-pros-contact-sewer-camera-inspection-hero-16x9.webp` and `markets/st-louis-mo/services/st-louis-residential-sewer-lateral-public-main.svg`. Left alone to avoid a rename across code and docs. The 12 approved render names are untouched.
- **Share image.** All 197 indexable pages use one brand card (1200 x 630 PNG, 88 KB, absolute URL, loads). Acceptable as a default; per-market cards would need new images.
- **Schema.** Only the Organization `logo` appears in image fields (absolute, resolves). No page-level `image`; adding one would be optional.
- **Orphans.** 16 non-brand files (6.4 MB, mostly service backdrops such as the hydro-jetting closing CTA) are referenced by no page and no source, and 17 brand-kit variants are unreferenced by design. 24 more files are loaded only on the client (hero cross-fade frames, hero video). Orphans still ship from `public/`; none was deleted.

## Lists

### 1. Slots that still need an image file, ranked by page impact

No registered slot is empty. The gaps below are unregistered template positions.

| Rank | Position | Pages | Covered by an approved file? |
|---|---|---|---|
| 1 | Service + location hero image | 144 | No. Would need a new generated image per market or service (reusing one file would be template filler). |
| 2 | Audience page hero or split image | 6 | Yes: the 6 `audiences/audience-hub/*` card renders map one to one. Needs a template change (the `editorial` hero takes no media). |
| 3 | Resource, comparison, FAQ and hub header image | 9 | Existing service renders could be reused; a topical image would need a new generated render. |
| 4 | Hero on the 8 location pages without one | 8 | Yes: market hero renders exist (`markets/*/hero`) and are used on the other 8. |
| 5 | Location-specific neighbourhood tiles | 16 | No. Would need new generated images; none invented here. |

### 2. Where a real photo would be a worthwhile upgrade later

1. IMG-05, technician reviewing footage (154 pages, including the shared services-section image on every service + location page). First.
2. The service-card renders used on about 165 pages each (camera, cleaning, jetting, locating, pre-purchase).
3. The three market hero renders.

Approved renders are not marked as needing real photos.

### 3. Decisions for you (each has a default, already applied or recorded)

1. The IMG-28 file under `shared/commercial/` and its name: default kept as is (approved render, scene-only alt). Renaming it to a neutral name is a small code change if you want the word gone from the URL.
2. 71 files remain over budget at the quality floor (each recorded in `scripts/lib/image-weight-waivers.json`, mostly 100 to 300 KB). Default: accepted. The fix is a smaller export of the source art, not a lower quality floor.
3. Audience pages: default is no image until you want the hero change in list 1, row 2.
4. Orphaned files (16, 6.4 MB): default keep. Moving them to `image-originals/` would drop that from the deploy.

## Before and after

| Metric | Before | After |
|---|---|---|
| Pages crawled (indexable) | 198 (197) | 198 (197) |
| Image references | 3668 | 3668 |
| Unique image files referenced | 170 | 170 |
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
| Image bytes referenced by pages (unique files) | 40.0 MB | 20.2 MB |
| Image and video bytes published from public/ | 62.0 MB | 36.1 MB |
| Pages missing a valid og:image or twitter:image | 0 | 0 |
| Schema image URLs broken or relative | 0 | 0 |
| Commercial images referenced | 0 | 0 |
| Unreferenced files in public/ (not in any page or in source) | 45 | 33 |
| Files loaded only on the client (hero frames, video) | 24 | 24 |

## Image weight by page type

| Page type | Pages | Avg image KB before | After | Largest page before | After | Avg images |
|---|---|---|---|---|---|---|
| about | 1 | 3249 | 1994 | 3249 | 1994 | 19 |
| compare | 2 | 101 | 101 | 101 | 101 | 2 |
| contact | 1 | 1800 | 862 | 1800 | 862 | 8 |
| thank-you | 1 | 101 | 101 | 101 | 101 | 2 |
| faq | 1 | 101 | 101 | 101 | 101 | 2 |
| audience | 6 | 101 | 101 | 101 | 101 | 2 |
| audience-hub | 1 | 3344 | 1601 | 3344 | 1601 | 17 |
| home | 1 | 3337 | 2074 | 3337 | 2074 | 18 |
| market-contact | 3 | 719 | 331 | 963 | 407 | 3 |
| market-hub | 3 | 6677 | 3445 | 8826 | 3924 | 33 |
| locations-hub | 1 | 4707 | 2348 | 4707 | 2348 | 18 |
| service-location | 144 | 3334 | 2203 | 3701 | 2532 | 20.5 |
| location | 16 | 3144 | 2103 | 3756 | 2512 | 18 |
| resource | 5 | 101 | 101 | 101 | 101 | 2 |
| resources-hub | 1 | 101 | 101 | 101 | 101 | 2 |
| service | 9 | 3087 | 1684 | 4217 | 2184 | 15.6 |
| services-hub | 1 | 3921 | 2219 | 3921 | 2219 | 19 |
| market-other | 1 | 188 | 188 | 188 | 188 | 3 |

## Page families: image coverage

| Page family | Pages | Pages with no content image | Pages with no hero image | Content images per page (min-max) | Pages with a market-specific image |
|---|---|---|---|---|---|
| about | 1 | 0 | 0 | 17-17 | 1 |
| compare | 2 | 2 | 2 | 0-0 | 0 |
| contact | 1 | 0 | 0 | 9-9 | 1 |
| thank-you | 1 | 1 | 1 | 0-0 | 0 |
| faq | 1 | 1 | 1 | 0-0 | 0 |
| audience | 6 | 6 | 6 | 0-0 | 0 |
| audience-hub | 1 | 0 | 0 | 15-15 | 1 |
| home | 1 | 0 | 0 | 16-16 | 1 |
| market-contact | 3 | 0 | 0 | 1-1 | 3 |
| market-hub | 3 | 0 | 0 | 26-37 | 3 |
| locations-hub | 1 | 0 | 0 | 16-16 | 1 |
| service-location | 144 | 0 | 144 | 17-20 | 144 |
| location | 16 | 0 | 8 | 17-18 | 16 |
| resource | 5 | 5 | 5 | 0-0 | 0 |
| resources-hub | 1 | 1 | 1 | 0-0 | 0 |
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
| IMG-02 | 65 | `images/shared/cleanouts/the-sewer-pros-capped-exterior-cleanout-base-of-house-4x3.webp` | 148 KB 1448x1086 | location, service-location, service | wired; generated render (approved, DEC-145) |
| IMG-26 | 65 | `images/shared/residential/the-sewer-pros-san-diego-residential-street-manhole-curb-4x3.webp` | 169 KB 1448x1086 | service-location, location | wired; generated render (approved, DEC-145) |
| (unregistered) | 55 | `images/markets/san-diego-ca/service-locations/the-sewer-pros-san-diego-ca-sewer-services.webp` | 47 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 55 | `images/markets/san-diego-ca/service-locations/the-sewer-pros-san-marcos-ca-sewer-services.webp` | 54 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 55 | `images/markets/san-diego-ca/service-locations/the-sewer-pros-escondido-ca-sewer-services.webp` | 51 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 55 | `images/markets/san-diego-ca/service-locations/the-sewer-pros-oceanside-ca-sewer-services.webp` | 39 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 55 | `images/markets/san-diego-ca/service-locations/the-sewer-pros-chula-vista-ca-sewer-services.webp` | 52 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 55 | `images/markets/san-diego-ca/service-locations/the-sewer-pros-mission-valley-san-diego-sewer-services.webp` | 49 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 55 | `images/markets/san-diego-ca/service-locations/the-sewer-pros-carlsbad-ca-sewer-services.webp` | 41 KB 1300x676 | service-location, market-hub | wired; existing asset |
| IMG-03 | 50 | `images/shared/residential/the-sewer-pros-st-louis-residential-street-manhole-curb-4x3.webp` | 267 KB 1448x1086 | service-location, location | wired; generated render (approved, DEC-145) |
| IMG-29 | 40 | `images/shared/residential/the-sewer-pros-las-vegas-residential-street-manhole-curb-4x3.webp` | 106 KB 1448x1086 | service-location, location | wired; generated render (approved, DEC-145) |
| (unregistered) | 37 | `images/markets/st-louis-mo/service-locations/the-sewer-pros-st-louis-city-mo-sewer-service-area.webp` | 88 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 37 | `images/markets/st-louis-mo/service-locations/the-sewer-pros-florissant-mo-sewer-service-area.webp` | 47 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 37 | `images/markets/st-louis-mo/service-locations/the-sewer-pros-chesterfield-mo-sewer-service-area.webp` | 52 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 37 | `images/markets/st-louis-mo/service-locations/the-sewer-pros-st-charles-mo-sewer-service-area.webp` | 66 KB 1300x676 | service-location, market-hub | wired; existing asset |
| (unregistered) | 37 | `images/markets/st-louis-mo/service-locations/the-sewer-pros-ballwin-mo-sewer-service-area.webp` | 52 KB 1300x676 | service-location, market-hub | wired; existing asset |
| IMG-06 | 34 | `images/shared/pipe-interiors/the-sewer-pros-tablet-inspection-video-beside-written-findings-4x3.webp` | 97 KB 1600x1200 | location, service-location, service | wired; generated render (approved, DEC-145) |
| IMG-04 | 33 | `images/shared/residential/the-sewer-pros-technician-for-sale-property-starting-sewer-scope-4x3.webp` | 141 KB 1296x972 | location, service-location | wired; generated render (approved, DEC-145) |
| IMG-07 | 33 | `images/shared/residential/the-sewer-pros-technician-reviewing-findings-with-property-owner-4x3.webp` | 97 KB 1600x1200 | location, service-location | wired; generated render (approved, DEC-145) |
| IMG-08 | 33 | `images/shared/cleanouts/the-sewer-pros-cleaning-cable-entering-cleanout-close-up-4x3.webp` | 163 KB 1296x972 | service-location, service | wired; generated render (approved, DEC-145) |
| IMG-09 | 32 | `images/shared/residential/the-sewer-pros-bathroom-sink-and-tub-4x3.webp` | 48 KB 1448x1086 | service-location | wired; generated render (approved, DEC-145) |
| IMG-10 | 31 | `images/shared/pipe-interiors/the-sewer-pros-monitor-showing-pipe-interior-4x3.webp` | 132 KB 1296x972 | service-location | wired; generated render (approved, DEC-145) |
| (unregistered) | 28 | `images/markets/las-vegas-nv/service-locations/the-sewer-pros-las-vegas-nv-sewer-services.webp` | 56 KB 1300x676 | market-hub, service-location | wired; existing asset |
| (unregistered) | 28 | `images/markets/las-vegas-nv/service-locations/the-sewer-pros-henderson-nv-sewer-services.webp` | 52 KB 1300x676 | market-hub, service-location | wired; existing asset |
| (unregistered) | 28 | `images/markets/las-vegas-nv/service-locations/the-sewer-pros-north-las-vegas-nv-sewer-services.webp` | 37 KB 1300x676 | market-hub, service-location | wired; existing asset |
| (unregistered) | 28 | `images/markets/las-vegas-nv/service-locations/the-sewer-pros-summerlin-las-vegas-sewer-services.webp` | 58 KB 1300x676 | market-hub, service-location | wired; existing asset |
| IMG-11 | 25 | `images/shared/equipment/the-sewer-pros-technician-locator-receiver-yard-paint-marks-4x3.webp` | 133 KB 1296x972 | location, service-location, service | wired; generated render (approved, DEC-145) |
| IMG-12 | 24 | `images/shared/equipment/the-sewer-pros-drain-machine-at-floor-drain-4x3.webp` | 96 KB 1600x1200 | service-location, location | wired; generated render (approved, DEC-145) |
| IMG-13 | 24 | `images/shared/equipment/the-sewer-pros-jetting-nozzle-hose-at-sewer-line-4x3.webp` | 141 KB 1296x972 | service-location, location | wired; generated render (approved, DEC-145) |
| IMG-15 | 24 | `images/shared/equipment/the-sewer-pros-cleaning-machine-cable-at-cleanout-4x3.webp` | 122 KB 1296x972 | location, service-location | wired; generated render (approved, DEC-145) |
| IMG-16 | 16 | `images/shared/residential/the-sewer-pros-kitchen-sink-slow-drain-4x3.webp` | 65 KB 1448x1086 | service-location | wired; generated render (approved, DEC-145) |
| IMG-17 | 16 | `images/shared/equipment/the-sewer-pros-jetter-trailer-at-curb-4x3.webp` | 101 KB 1296x972 | service-location | wired; generated render (approved, DEC-145) |
| IMG-14 | 16 | `images/shared/equipment/the-sewer-pros-camera-head-push-cable-entering-cleanout-4x3.webp` | 120 KB 1296x972 | location | wired; generated render (approved, DEC-145) |
| IMG-18 | 16 | `images/shared/residential/the-sewer-pros-inspection-report-handed-to-agent-4x3.webp` | 94 KB 1600x1200 | location | wired; generated render (approved, DEC-145) |
| IMG-19 | 16 | `images/shared/residential/the-sewer-pros-fence-line-planting-beds-possible-dig-area-4x3.webp` | 268 KB 1448x1086 | service-location | wired; generated render (approved, DEC-145) |
| IMG-20 | 16 | `images/shared/equipment/the-sewer-pros-monitor-pipe-interior-beside-locator-receiver-4x3.webp` | 97 KB 1600x1200 | service-location | wired; generated render (approved, DEC-145) |
| (unregistered) | 15 | `images/markets/st-louis-mo/locations/the-sewer-pros-st-louis-service-area-map.webp` | 94 KB 1400x728 | about, contact, audience-hub, home, locations-hub, service, services-hub | wired; existing asset |
| (unregistered) | 15 | `images/markets/san-diego-ca/locations/the-sewer-pros-san-diego-service-area-map.webp` | 95 KB 1920x998 | about, contact, audience-hub, home, locations-hub, service, services-hub | wired; existing asset |
| (unregistered) | 15 | `images/markets/las-vegas-nv/locations/the-sewer-pros-las-vegas-service-area-map.webp` | 93 KB 1920x998 | about, contact, audience-hub, home, locations-hub, service, services-hub | wired; existing asset |
| IMG-21 | 15 | `images/shared/pipe-interiors/the-sewer-pros-camera-footage-still-distance-counter-4x3.webp` | 92 KB 1440x1080 | location | wired; generated render (approved, DEC-145) |
| IMG-27 | 7 | `images/shared/residential/the-sewer-pros-san-diego-older-home-visible-cleanout-4x3.webp` | 249 KB 1448x1086 | service-location | wired; generated render (approved, DEC-145) |
| IMG-28 | 5 | `images/shared/commercial/the-sewer-pros-san-diego-commercial-street-manhole-curb-4x3.webp` | 129 KB 1448x1086 | service-location, location | wired; generated render (approved, DEC-145) |
| (unregistered) | 5 | `images/markets/st-louis-mo/hero/the-sewer-pros-st-louis-residential-sewer-camera-inspection-hero-1280.webp` | 169 KB 1280x714 | location | wired; existing asset |
| IMG-22 | 5 | `images/shared/residential/the-sewer-pros-st-louis-older-home-visible-cleanout-4x3.webp` | 352 KB 1448x1086 | service-location | wired; generated render (approved, DEC-145) |
| (unregistered) | 4 | `images/homepage/hero/the-sewer-pros-residential-sewer-camera-inspection-hero.webp` | 137 KB 1672x940 | home, location | wired; existing asset |
| (unregistered) | 4 | `images/homepage/differentiator/the-sewer-pros-st-louis-residential-property-exterior.webp` | 183 KB 1355x763 | home, locations-hub, services-hub, market-hub | wired; existing asset |
| IMG-30 | 4 | `images/shared/residential/the-sewer-pros-las-vegas-older-home-visible-cleanout-4x3.webp` | 305 KB 1448x1086 | service-location | wired; generated render (approved, DEC-145) |
| (unregistered) | 3 | `images/markets/locations-hub/the-sewer-pros-three-market-service-areas-cta.webp` | 198 KB 1400x788 | contact, audience-hub, locations-hub | wired; existing asset |
| (unregistered) | 3 | `images/homepage/differentiator/the-sewer-pros-multifamily-properties.webp` | 95 KB 1355x763 | home, locations-hub, services-hub | wired; existing asset |
| (unregistered) | 3 | `images/services/sewer-camera-inspection/the-sewer-pros-sewer-camera-footage-visible-pipe-offset-example-4x3.webp` | 95 KB 1303x977 | location, service | wired; existing asset |
| (unregistered) | 3 | `images/services/sewer-camera-inspection/the-sewer-pros-ridgid-seesnake-sewer-inspection-request-form-background-16x9.webp` | 94 KB 1400x788 | service | wired; existing asset |
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
| (unregistered) | 1 | `images/contact/hero/sewer-pros-contact-sewer-camera-inspection-hero-16x9.webp` | 186 KB 1920x1072 | contact | wired; existing asset |
| (unregistered) | 1 | `images/contact/the-sewer-pros-contact-request-inspection-background-16x9.webp` | 95 KB 1555x868 | contact | wired; existing asset |
| (unregistered) | 1 | `images/audiences/audience-hub/hero/the-sewer-pros-who-we-serve-hero-blue-gray-background.webp` | 14 KB 1672x941 | audience-hub | wired; existing asset |
| (unregistered) | 1 | `images/audiences/audience-hub/hero/the-sewer-pros-home-inspectors-ridgid-seesnake-cs12x-monitor.webp` | 84 KB 1448x1086 | audience-hub | wired; existing asset |
| (unregistered) | 1 | `images/audiences/audience-hub/hero/the-sewer-pros-home-inspectors-seesnake-standard-camera-reel-trusense.webp` | 73 KB 1448x1086 | audience-hub | wired; existing asset |
| (unregistered) | 1 | `images/audiences/audience-hub/hero/the-sewer-pros-home-inspectors-ridgid-seektech-sr-20-utility-line-locator.webp` | 62 KB 1448x1086 | audience-hub | wired; existing asset |
| (unregistered) | 1 | `images/audiences/audience-hub/hero/the-sewer-pros-home-inspectors-ridgid-k-7500-drum-machine.webp` | 62 KB 1448x1086 | audience-hub | wired; existing asset |
| (unregistered) | 1 | `images/audiences/audience-hub/the-sewer-pros-home-buyers-pre-purchase-sewer-inspection.webp` | 148 KB 1303x977 | audience-hub | wired; existing asset |
| (unregistered) | 1 | `images/audiences/audience-hub/the-sewer-pros-home-sellers-pre-listing-sewer-documentation.webp` | 93 KB 1440x1080 | audience-hub | wired; existing asset |
| (unregistered) | 1 | `images/audiences/audience-hub/the-sewer-pros-real-estate-agents-sewer-inspection-findings.webp` | 93 KB 1600x1200 | audience-hub | wired; existing asset |
| (unregistered) | 1 | `images/audiences/audience-hub/the-sewer-pros-home-inspectors-specialized-sewer-inspection.webp` | 97 KB 1448x1086 | audience-hub | wired; existing asset |
| (unregistered) | 1 | `images/audiences/audience-hub/the-sewer-pros-property-managers-recurring-sewer-diagnosis.webp` | 181 KB 1296x972 | audience-hub | wired; existing asset |
| (unregistered) | 1 | `images/audiences/audience-hub/the-sewer-pros-hoa-community-sewer-inspection-evidence.webp` | 113 KB 1296x972 | audience-hub | wired; existing asset |
| (unregistered) | 1 | `images/markets/locations-hub/the-sewer-pros-las-vegas-sewer-service-area-hero.webp` | 191 KB 1920x1081 | market-contact | wired; existing asset |
| (unregistered) | 1 | `images/markets/las-vegas-nv/hero/the-sewer-pros-las-vegas-residential-sewer-camera-inspection-hero.webp` | 171 KB 1672x941 | market-hub | wired; existing asset |
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
| (unregistered) | 1 | `images/markets/san-diego-ca/hero/the-sewer-pros-san-diego-residential-sewer-camera-inspection-hero.webp` | 193 KB 1672x941 | market-hub | wired; existing asset |
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
