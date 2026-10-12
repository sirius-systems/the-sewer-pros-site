> Historical snapshot, written 2026-10-12. Current baselines: 200 built pages, 197 sitemap URLs, 11 service records, 6,369 service + location matrix rows, 10 audience ids, 579 locations, 0 placeholder boxes, 30 image files (929 boxes on the shot list, all wired). See docs/image-placeholder-inventory.md and the decisions log for the current state.

# Placeholder count and README audit

Date: Oct 12, 2026. Read-only audit of `main` at `9b003ce`. The only file created is this one. Facts come from git history and from parsing the production build in `out/` (built with `NEXT_PUBLIC_SITE_URL=https://www.thesewerpros.com`, `SHOW_IMAGE_SLOTS` at its default of true).

**Headline.** The 528 count was an undercount, not an overcount. The core service pages do still draw their 9 boxes, in a different markup that the first count did not match. Corrected total: **537 boxes on 162 pages**, which is the documented 393 on 162 pages plus exactly 144 boxes from one slot the inventory never counted.

## Part 1. The slc-services-section slot

### Findings

1. **Where it is defined and rendered.** One place only: `components/templates/ServiceLocationPageTemplate.tsx`. No slot registry holds it; `service-location-shared.ts` has a different family (`slc-camera`, `slc-cleaning` and so on, 9 card slots in `CARD_SLOTS`) that the shot list marks as never drawn.
   - Definition, lines 153 to 159:
     ```ts
     /** One shared slot for the services section's right column. */
     const SERVICES_IMAGE = resolveSlotImage({
       id: 'slc-services-section',
       ratio: '4:3',
       alt: 'Technician and inspection equipment at a residential property',
       shot: 'Technician with inspection equipment at a residential property, no identifiable address or people',
     })
     ```
   - Render, lines 380 to 415: passed as the `aside` prop of `ServiceIndex` inside `{showsServiceCards && (...)}`. With no `src`, `resolveSlotImage` (`lib/image-slots.ts` lines 39 to 51) returns a placeholder object, and the template draws a `div` with `data-image-placeholder`, classes `aspect-[4/3] w-full ... border-2 border-dashed`, and two lines of text: `Image slot: slc-services-section` and `4:3 - <shot text>`.
2. **History.** `git log -S "slc-services-section"` finds `ad9de4c` (2026-10-05, author line "Claude", "Service+location template: two-column services section with image slot; other-areas location cards from the market hub") as the commit that added it. All 7 lines of the block blame to `ad9de4cb`. The only other hit is `9b003ce` (today), which mentions the id in the verification doc.
   - `docs/image-placeholder-inventory.md`: first commit `a44fc80` (2026-10-12, "Wire 12 photorealistic render images into image slots"); latest commit `b622a77` (2026-10-12, Phase 6).
   - So the slot is **seven days older than the inventory**. It was not added after the inventory.
3. **What it renders.** Label `Image slot: slc-services-section`; ratio 4:3; role: the right-hand column ("aside") of the "approved services" cards section, not a hero, card, process or proof image. Size: full width of that column, 4:3. It is shown only because `SHOW_IMAGE_SLOTS` is true; with the flag off, `resolveSlotImage` returns `undefined` for an unfilled slot and the column is empty. It has no `src` anywhere, so no file fills it. The section renders when `showsServiceCards` is true (`page.marketId !== undefined`), which is true on all 144 service + location pages.
4. **Shot-list coverage: not covered.** Searches for the id, the label and the shot wording:

   | File | `slc-services-section` | `slc-` | "inspection equipment at a residential property" |
   |---|---|---|---|
   | `docs/image-shot-list.md` | 0 | 1 (the unrelated card family, line 164) | 0 |
   | `docs/photographer-shot-sheet.md` | 0 | 0 | 0 |
   | `docs/image-generator-prompts.md` | 0 | 0 | 0 |
   | `docs/image-placeholder-inventory.md` | 0 | 1 (the unrelated card family, line 240) | 0 |

5. **Box counts (parsed from the built HTML).** The id appears on **144 pages, exactly once on each**, which is every service + location page. No service + location page lacks it. Per-page totals on those pages are 2 boxes (63 pages) or 3 boxes (81 pages): 63 x 1 + 81 x 2 = 225 other boxes, plus 144 from this slot = 369. Wording as it appears:
   - St. Louis, `/locations/st-louis-mo/ballwin/sewer-camera-inspection/`: `sl-ballwin-camera-problem-2` and `slc-services-section`.
   - San Diego, `/locations/san-diego-ca/carlsbad/hydro-jetting/`: `sl-carlsbad-hydro-problem-1`, `sl-carlsbad-hydro-problem-2` and `slc-services-section`.
   - Las Vegas, `/locations/las-vegas-nv/henderson/drain-cleaning/`: `sl-henderson-drain-problem-3` and `slc-services-section`.
   - On every page the slc box reads `Image slot: slc-services-section`, `4:3 - Technician with inspection equipment at a residential property, no identifiable address or people`.
6. **Shared or per service.** Shared. The id, ratio and shot text are constants; the label does not vary by service, market or page. There is one distinct label, repeated 144 times. The 144 pages cover 9 services in 16 locations (3 markets).

### Evidence

```
git log -S"slc-services-section" --format='%h %ad %an %s' --date=short
  9b003ce 2026-10-12 SedrickHarris Record owner confirmations ... (doc mention only)
  ad9de4c 2026-10-05 Claude Service+location template: two-column services section with image slot ...
git log --diff-filter=A -- docs/image-placeholder-inventory.md  ->  a44fc80 2026-10-12
git show --stat ad9de4c  ->  components/sections/ServiceIndex.tsx (+aside prop), components/templates/ServiceLocationPageTemplate.tsx
built-HTML parse (scratchpad boxes.cjs): slc-services-section n=144 pages=144, exactly-one on 144, svc+loc pages without it: 0
```

### Conclusion

The slot was **missed by the inventory**, not added after it. It predates the inventory by seven days, it is defined as a constant in the template and not in any page registry, and the inventory's totals (159 on hubs, 225 on service + location pages) equal the current build with this one box per page removed. The original 785-box baseline in `docs/image-shot-list.md` has the same blind spot, because 785 minus the 392 filled boxes is 393, which is the inventory's remaining count and still leaves the 144 uncounted. I cannot see how the inventory was generated (no generator script is in the repo, `git grep` of `scripts/` finds none), so "a registry-based parse cannot see a template constant" is the likely cause, not a verified one.

Image files needed to fill it, counted only:

| Option | Files |
|---|---|
| One shared image | 1 |
| One per service (9 services) | 9 |
| One per service per market (9 x 3) | 27 |

### Open questions for the owner

- Should the services-section column carry one shared image, or one per service?
- Is the existing shot wording ("Technician with inspection equipment at a residential property") acceptable as the brief, now that equipment in renders is owner-approved?

## Part 2. /preventative-maintenance/ and the 9 core boxes

### Findings

1. **No route at `/preventative-maintenance/` existed.** The deleted path was `/commercial/preventative-maintenance/`. The removal commits are `a7905ae` (Phase 1), `cd4ef49` (Phase 2, routes), `5c1949c` (Phases 3 and 4), `861fb5c` (Phase 5), `b622a77` (Phase 6) and `7a9cd38` (Phase 7), all 2026-10-12. Routes deleted in `cd4ef49` (page records in `data/pages/approved-pages.ts`, content in `content/pages/commercial.tsx`, routes `app/commercial/page.tsx` and `app/commercial/[service]/page.tsx`):
   - `/commercial/` (`hub-commercial`)
   - `/commercial/sewer-camera-inspection/` (`com-camera`)
   - `/commercial/sewer-cleaning/` (`com-sewer-cleaning`)
   - `/commercial/hydro-jetting/` (`com-hydro-jetting`)
   - `/commercial/drain-cleaning/` (`com-drain-cleaning`)
   - `/commercial/preventative-maintenance/` (`com-maintenance`)
   Page record removed for the page in question:
   ```ts
   { id: 'com-maintenance' as PageId, name: 'Commercial Preventative Sewer & Drain Maintenance',
     pageType: 'commercial', pathname: toPathname('/commercial/preventative-maintenance/'),
     status: 'launch', indexable: true, serviceId: 'svc-commercial-preventative-maintenance',
     parentId: 'hub-commercial' as PageId }
   ```
2. **It was commercial only.** Registered service id `svc-commercial-preventative-maintenance`, one of the 7 `svc-commercial-*` service records removed in `a7905ae` (the registry at `a7905ae^` held 7: drain-cleaning, grease-sludge-removal, hydro-jetting, preventative-maintenance, sewer-camera-inspection, sewer-cleaning, sewer-line-locating). The page record has no audience field. Title and H1 (`content/pages/commercial.tsx` at `a7905ae^`, line 294): "Commercial Preventative Sewer & Drain Maintenance". Meta description: "Explore commercial preventative sewer maintenance through inspection, cleaning, documentation, and informed planning for property needs." Hero intro: "Servicing lines on an interval the evidence supports, so failures happen on a schedule you chose rather than during trading hours." Body sections: "Planned versus reactive", "Which lines actually warrant it", "Documentation", then process steps "Inspect to establish condition" and "Identify lines that warrant servicing". It carried no image slots of its own; the 9 documented core boxes never included it.
3. **The residential page is present.** `/services/preventative-sewer-maintenance/` (page id `svc-preventative-sewer-maintenance`, `data/pages/approved-pages.ts` line 285). It is in the build (`out/services/preventative-sewer-maintenance/index.html`), in the sitemap (the path appears once in `out/sitemap.xml`) and linked from the Services hub (`out/services/index.html` has 2 `href` links to it).
4. **Reconciliation of the 9 core boxes.** The documented figure is in `docs/image-placeholder-inventory.md` section 3: Preventative Sewer Maintenance **2** and Recurring Sewer Backup Diagnosis **7**, which is 9. (The first report's "3 and 7" was a different earlier count, not carried into the inventory.) Current build, parsed from the DOM (the dashed `ImagePlaceholder` div with an SVG, which is a different markup from the `Image slot:` box):

   | Page | Documented | Drawn now | Match |
   |---|---|---|---|
   | `/services/preventative-sewer-maintenance/` | 2 | 2 (explainer review, records video and findings) | yes |
   | `/services/recurring-sewer-backup-diagnosis/` | 7 | 7 (hero cleanout, explainer monitor, root footage, waterline footage, cleanout access, locator, records video and findings) | yes |

   The 9 core boxes **did not stop drawing**. The first count only matched `Image slot: ` text, and those two pages draw `ImagePlaceholder` components, which have no such text. Checking each cause:
   - a. Page or slots deleted in the removal: **no.** Both pages build; the removal commits did not touch `data/business/preventative-images.ts` or `recurring-images.ts` (their last commits are `a44fc80` and `9dd016c`).
   - b. Slots removed or renamed: **no.** Same evidence; the 9 are present.
   - c. Recurring-backup hero reference changed: **yes, but with no effect on the count.** `aa7f6ec` removed the `images.hero` path from `content/pages/services.tsx` (it pointed at a file that does not exist) and left a TODO. The hero placeholder still draws through the `recurring-hero` slot in `recurring-images.ts`, and it is one of the 7. I did not test what the hero looked like before `aa7f6ec`.
   - d. `SHOW_IMAGE_SLOTS` or a slot condition changed: **no.** Flag still true; the default was set to true in `d13487f` (2026-10-02) and `lib/image-slots.ts` was last changed in `a44fc80` (2026-10-12), which added the render provenance string and did not touch the flag.
   - e. Count from grep and never accurate: **no.** The inventory's 9 matches the build exactly.
5. **Core service pages that exist now (9), with drawn boxes:**

   | Page | Boxes |
   |---|---|
   | `/services/sewer-camera-inspection/` | 0 |
   | `/services/sewer-cleaning/` | 0 |
   | `/services/sewer-cleaning-camera-inspection/` | 0 |
   | `/services/hydro-jetting/` | 0 |
   | `/services/drain-cleaning/` | 0 |
   | `/services/sewer-line-locating/` | 0 |
   | `/services/pre-purchase-sewer-inspection/` | 0 |
   | `/services/preventative-sewer-maintenance/` | 2 |
   | `/services/recurring-sewer-backup-diagnosis/` | 7 |

   The slot ids these two register are file names, not `sl-*` ids: `preventative-sewer-maintenance-explainer-review-4x3.webp`, `...-records-video-and-findings-4x3.webp`, and for recurring `...-hero-cleanout-16x9.webp`, `...-explainer-monitor-4x3.webp`, `...-causes-root-footage-4x3.webp`, `...-limits-waterline-footage-7x4.webp`, `...-process-cleanout-access-4x3.webp`, `...-process-locate-...`, `...-records-video-and-findings-...`. The other 7 pages have every preferred file present.

### Evidence

```
git diff --diff-filter=D --name-only 9dd016c 7a9cd38 -> app/commercial/[service]/page.tsx, app/commercial/page.tsx,
  components/templates/CommercialPageTemplate.tsx, content/pages/commercial.tsx, types/commercial.ts
git show cd4ef49 -- data/pages/approved-pages.ts -> 6 commercial records removed (list above)
DOM parse of out/ (scratchpad an2.cjs): dashed ImagePlaceholder boxes: 2 pages, 9 boxes
```

### Conclusion

Nothing was deleted by mistake that affects placeholders. The only route that matched the name was commercial only and correctly removed; its residential counterpart builds, is in the sitemap and is linked from the hub. **Nothing to restore.**

### Open questions for the owner

- The recurring-backup hero: use the default hero until a real 16:9 photo exists (current state), or supply the photo?

## Part 3. The 10 README.md files in public/images/

### Findings

1. **The files** (all served in `out/` at the same path under `/images/...`):

   | Path | Bytes | First commit | Last commit |
   |---|---|---|---|
   | `public/images/README.md` | 4456 | 2026-09-03 | 2026-10-12 |
   | `public/images/contact/README.md` | 1247 | 2026-09-23 | 2026-09-23 |
   | `public/images/markets/README.md` | 1873 | 2026-09-23 | 2026-09-23 |
   | `public/images/services/drain-cleaning/README.md` | 4565 | 2026-09-23 | 2026-09-28 |
   | `public/images/services/hydro-jetting/README.md` | 4383 | 2026-09-23 | 2026-09-27 |
   | `public/images/services/preventative-sewer-maintenance/README.md` | 1817 | 2026-09-28 | 2026-10-12 |
   | `public/images/services/sewer-camera-inspection/README.md` | 1827 | 2026-09-23 | 2026-09-23 |
   | `public/images/services/sewer-cleaning-camera-inspection/README.md` | 3873 | 2026-09-23 | 2026-10-05 |
   | `public/images/services/sewer-cleaning/README.md` | 3611 | 2026-09-23 | 2026-09-27 |
   | `public/images/services/sewer-line-locating/README.md` | 2678 | 2026-09-23 | 2026-09-23 |

2. **Served, but not linked.** All 10 exist in `out/` and so are fetchable at, for example, `https://www.thesewerpros.com/images/README.md`. None is in `out/sitemap.xml` (0 matches) and none is linked from any built page (0 HTML files contain the string "README").
3. **Contents (one line each), with flags:**
   - `images/README.md`: structure, naming rules and governing docs for the image folders; cites `docs/18-design-system.md` and CLAUDE.md-style rules. **Flag:** internal process notes; lines 53 to 54 mention commercial services ("does not offer commercial services (owner decision, Oct 12, 2026) ... no commercial folder").
   - `contact/README.md` and `markets/README.md`: where to save contact and hub photos and how builds fall back to interim images. Internal process notes; reference code paths (`data/business/contact-backdrop.ts`, `audience-hub-images.ts`).
   - `drain-cleaning`, `hydro-jetting`, `sewer-cleaning`, `sewer-cleaning-camera-inspection`, `sewer-line-locating`, `sewer-camera-inspection`: per-page slot tables with exact file names, ratios and briefs; say production "shows nothing" until a file is supplied. Internal process notes and code paths.
   - `preventative-sewer-maintenance/README.md`: says a slot is an `ImagePlaceholder` stand-in "rather than fabricated stock/AI imagery" and cites `18-design-system.md` and CLAUDE.md section 24. Internal rules.
   - No credentials, keys or customer data found in any of them (a keyword scan for "password", "key", "credential" found only the words "key" and "never" in ordinary sentences). No pricing or strategy beyond the image rules above.
4. **References by path.** Moving them would affect comments and docs only; no code reads them at runtime.
   - Code comments: `components/templates/ContactPageTemplate.tsx:37`, `data/business/contact-backdrop.ts:13`, `data/business/camera-inspection-images.ts:10`, `cleaning-images.ts:11`, `combined-images.ts:12`, `drain-images.ts:11`, `hydro-images.ts:11`, `locating-images.ts:11`. Two comments point at `public/images/audience-hub/README.md`, which does not exist (`components/templates/AudienceHubTemplate.tsx:32`, `data/business/audience-hub-images.ts:9`).
   - Docs: `docs/image-shot-list.md` lines 12 to 14; `docs/commercial-removal-inventory.md` lines 102, 120, 146 (counts per file).
   - Scripts: none. `scripts/audit-commercial.mjs` scans `public/` text files generally and would be affected only by which files it finds.
5. **Other non-image files served from `public/` (and so present in `out/`):**

   | Path | Size | Note |
   |---|---|---|
   | `public/images/brand/logos/README.txt` | 1,210 bytes | brand pack contents list, version 1.0; internal |
   | `public/images/brand/logos/05-brand-guide/the-sewer-pros-brand-guide.pdf` | 153,963 bytes | brand guide PDF, publicly fetchable |
   | 4 `.mp4` files under `public/images/markets/*/hero/` | 505,118 to 1,820,732 bytes | used by the market and services hub hero code (`content/pages/*.tsx`, `data/business/services-hub-backdrop.ts`); intended |
   | 57 `.gitkeep` files | 0 bytes | empty folder markers, including empty `public/images/commercial/**` and `public/images/markets/*/commercial/` and `public/images/shared/commercial/` folders, all published as `/images/.../.gitkeep` |

   No `.json`, `.mjs`, `.ts`, `.csv`, `.xlsx`, `.zip` or `.DS_Store` files are in `public/`.

### Evidence

```
git ls-files public | grep -i 'readme.md$'     -> 10 files
find out -name .gitkeep | wc -l                -> 57
grep -c README out/sitemap.xml                 -> 0
grep -rl README out --include=*.html | wc -l   -> 0
```

### Conclusion

To stop shipping the 10 READMEs, `README.txt`, and the `.gitkeep` files, the files would have to leave `public/` (for example a `docs/images-readme/` folder) or be excluded from the export step. What would need to change: the 10 README paths named in the code comments and docs in item 4; two comments that already point at a non-existent README; the audit script's expectations for `public/` text files. Nothing would break at build or runtime. The brand guide PDF is a separate decision, since moving it could break any external link to it; the code does not reference it. The empty `public/images/commercial/**` folders would remain in `out/` as `.gitkeep` URLs with "commercial" in the path unless removed (the owner's rule is not to rename image files, and these hold no images).

### Open questions for the owner

- Is the brand guide PDF meant to be public? 
- Delete the empty commercial `.gitkeep` folders from `public/`, or keep them?

## Part 4. Reconciled placeholder count

Method: parsed all 200 `index.html` files in `out/`. A "box" is either the `Image slot:` box (location hubs, service + location pages) or the dashed `ImagePlaceholder` box with an SVG (core service pages). The string `Image slot:` alone over-counts (1,056 hits) because each box is repeated in the page data.

### By page type (sums to 537)

| Page type | Pages in build | Pages with boxes | Boxes |
|---|---|---|---|
| Location hub | 16 | 16 | 159 |
| Service + location | 144 | 144 | 369 |
| Core service | 9 | 2 | 9 |
| Audience | 7 | 0 | 0 |
| Services hub | 1 | 0 | 0 |
| Locations hub | 1 | 0 | 0 |
| Other (home, markets, contact, about, FAQ, compare, resources, 404) | 22 | 0 | 0 |
| **Total** | **200** | **162** | **537** |

Arithmetic: 159 + 369 + 9 = 537. Of the 369: 144 (`slc-services-section`) + 225 (`sl-*` slots) = 369. Pages with boxes: 16 + 144 + 2 = 162. 537 - 144 = 393, the documented figure; 162 matches the documented page count.

### By slot id family (sums to 537)

| Family | Distinct ids | Boxes | Pages |
|---|---|---|---|
| `slc-services-section` | 1 | 144 | 144 service + location |
| `sl-<city>-<service>-problem-N` (service + location problem images) | 225 boxes across 225 distinct ids | 225 | 144 |
| Location hub ids (`so-inspect`, `so-document`, `so-decide`, `buy-buyer`, `buy-agent` on all 16; `program-footage` on 15; `svc-camera`, `svc-cleaning`, `svc-jetting`, `svc-cleaning-camera`, `svc-locating`, `svc-drain`, `svc-prepurchase`, `svc-maintenance` and others on 8 or fewer) | 14 | 159 | 16 |
| Core service file-name slots | 9 | 9 | 2 |
| **Total** | | **537** | **162** |

(The full per-id list is in the scratchpad output of the parse; the top rows are `slc-services-section` 144 on 144 pages, then `so-inspect`, `so-document`, `so-decide`, `buy-buyer`, `buy-agent` 16 each, `program-footage` 15, and `svc-camera`, `svc-cleaning`, `svc-jetting`, `svc-cleaning-camera`, `svc-locating` 8 each. Location hub ids and service + location ids do not overlap.)

### By image file in `docs/image-shot-list.md`

The shot list assigns each of 785 boxes to one of 30 files. Twelve are renders already wired; those boxes no longer draw.

| Group | Files | Boxes in shot list | Boxes drawn now |
|---|---|---|---|
| Rendered and wired: IMG-01, 02, 03, 09, 16, 19, 22, 26, 27, 28, 29, 30 | 12 | 392 (87+65+50+32+16+16+5+65+7+5+40+4) | 0 |
| Real photo or existing asset, still to supply: IMG-04 to 08, 10 to 15, 17, 18, 20, 21 (41, 34, 34, 33, 33, 31, 25, 24, 24, 24, 24, 16, 16, 16, 15 = 390), IMG-23, 24, 25 (1 each = 3) | 18 | 393 | 393 |
| **Not covered by any shot-list file:** `slc-services-section` | 0 | 0 | **144** |
| **Total** | 30 | 785 | **537** |

Arithmetic: 392 + 393 = 785; 393 + 144 = 537.

### Difference from 393 on 162, and what would change

- Totals: 537, not 393 (+144, all `slc-services-section`); pages with boxes stay at 162.
- Of the 30 shot-list files, **none changes its count**. The 144 boxes need either one new shot-list file or an existing image reused: the closest existing shots are IMG-05 (technician reviewing footage), IMG-11 and IMG-12 to IMG-15 (equipment in use). The table above should gain one row for this slot.
- Docs whose counts would change: `docs/image-placeholder-inventory.md` (393 to 537, add the slot and a 144 row to the service + location totals: 225 to 369), `docs/image-shot-list.md` (785 to 929 total boxes, "Boxes in inventory" check table), `docs/photographer-shot-sheet.md` and `docs/image-generator-prompts.md` (a brief for the new slot). I did not edit any of them.

### Open questions for the owner

- Reuse an existing image for the services-section slot, or commission a new one?

## Summary of the three issues

| Issue | Root cause | Boxes or files affected | Fix needed (described only) | Risk if left |
|---|---|---|---|---|
| 144-box gap (`slc-services-section`) | Template-level slot added `ad9de4c` (Oct 5), seven days before the inventory; not in any registry, so the inventory and shot list never counted it | 144 boxes, 144 service + location pages; 0 of 30 shot-list files cover it; 1, 9 or 27 new images depending on option | Add the slot to the inventory and shot list, decide one shared image or more, fill it | Launch with 144 pages showing an empty or placeholder image column; docs undercount remaining work by 144 boxes (27%) |
| Core pages "9 to 0" | Not a regression. The count regex matched `Image slot:` text, but the two core pages draw `ImagePlaceholder` (dashed div with SVG). `/commercial/preventative-maintenance/` was a different, commercial-only page and was correctly removed | 9 boxes on 2 pages draw as documented; nothing deleted by mistake | None for placeholders; keep one counting method that matches both markups | A future count that matches only one markup will again under-report by 9 |
| README and other non-image files in `public/` | `public/images/**` is copied whole into `out/` | 10 `README.md`, 1 `README.txt`, 1 PDF, 57 `.gitkeep` (incl. empty commercial folders); 4 mp4 are intended | Move the READMEs and the `.gitkeep` files out of `public/`, update 8 code comments and 3 docs, decide on the PDF | Internal image notes (including one that mentions commercial services) are publicly fetchable; empty commercial paths are live URLs |
