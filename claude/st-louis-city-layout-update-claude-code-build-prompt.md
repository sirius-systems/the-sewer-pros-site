# Claude Code Build Prompt - Bring the St. Louis City Location Page to the Shared Municipality Layout

Page id: `loc-stl-st-louis-city` | Route: `/st-louis-mo/st-louis-city/` | Content file: `content/pages/st-louis-city.tsx`
Reference pages: `st-louis-chesterfield.tsx`, `st-louis-ballwin.tsx`, `st-louis-florissant.tsx` (St. Charles is a fourth reference, with one extra `reviews` section City does not carry)
Status of this prompt: the changes below shipped in commit `e561b9e`. Re-running this prompt on a clean checkout of `2d839e8` reproduces them. On a checkout that already has `e561b9e`, run only the validation section.

---

## 0. Operating rules

- Push to `main`. The site is still a build environment, so no PR review gate is needed.
- This repo's Next.js has breaking changes. Before writing code, skim the relevant guide in `node_modules/next/dist/docs/`.
- Read the minimum context: this prompt, `content/pages/st-louis-city.tsx`, `content/pages/st-louis-chesterfield.tsx`, `types/content.ts` (the `LocationMunicipalProgram`, `LocationPageContent` types), `lib/image-slots.ts`.
- No em dashes in copy. Use hyphens.
- Never invent business facts. Every City fact below was read from the cited source on 2026-10-03. Do not copy any fee, cap, boundary or application step from the Chesterfield, Ballwin, Florissant or St. Charles pages.
- Do not publish licensing, insurance or certification claims about The Sewer Pros (DEC-072). "Licensed" may appear only where it describes who the City requires.
- The Sewer Pros does not perform repairs or replacements. Never imply otherwise.

## 1. Goal

The City page already uses the rich composition, but it was built before the four municipality rewrites and lacks what they share. Bring it to the same layout and data model so a structure comparison against Chesterfield, Ballwin and Florissant passes, without changing business facts or reusing another municipality's local facts.

## 2. Gaps to close (City versus the references)

1. Program section has no `steps` block and no `callout`.
2. `faqSchemaApproved` is not set (FAQPage markup off). DEC-108 approved it in principle and named this page as the natural next one.
3. `IMAGE_SLOTS` has 7 slots; the references define 19 (hero, nine service cards, system, cleanout, program footage, three second-opinion steps, buyer, agent, final background).
4. The final CTA has no `background` slot, and the program image is a one-off `existing()` call rather than a slot.
5. `servicePageIds` is missing.
6. Sources have no dates, no Census row, and a stale `lastReviewed`.
7. Header comment does not state the City-only-facts rule.

## 3. Edits to `content/pages/st-louis-city.tsx`

### 3.1 Header comment
State that the page follows the Chesterfield, Ballwin and Florissant layout, that local facts are St. Louis City's only, that program steps come from the Street Division page read 2026-10-03, that the $28 fee on that page is stated and attributed to the City, and that images are existing approved assets only. Keep a `TODO(primary-source)` for the "about 58%" pre-1940 statement (57.9%, ACS 2019-2023 via Point2Homes) until the B25034 table is pulled.

### 3.2 Image slot registry
Replace `IMAGE_SLOTS` with the full 19-slot set, in this order, using the same ids, ratios, alts and shots as `st-louis-chesterfield.tsx`, with the hero id renamed:

`city-hero` (16:9), `svc-camera`, `svc-cleaning`, `svc-jetting`, `svc-cleaning-camera`, `svc-locating`, `svc-drain`, `svc-prepurchase`, `svc-backup`, `svc-maintenance`, `system-street`, `call-cleanout`, `program-footage`, `so-inspect`, `so-document`, `so-decide`, `buy-buyer`, `buy-agent`, `final-bg` (16:9). Use "St. Louis City" in the hero and final-bg alts.

Fill exactly one slot today: `program-footage` gets
- `src: '/images/services/sewer-camera-inspection/the-sewer-pros-sewer-camera-footage-visible-pipe-offset-example-4x3.webp'`
- `source: 'Existing site image, reused on this page.'`
- `alt: 'Sewer camera footage showing a visible offset joint inside a pipe'`

Add the registry comment from Chesterfield: a slot with no `src` renders nothing in a launch build; the hero and service-card slots stay unfilled because existing approved art is in use. Add a comment above the hero `backdrop` that a photo in the `city-hero` slot would replace it.

### 3.3 Wiring
- Program `image: slotImage('program-footage')` (remove the inline `existing(...)` call there; `existing` is still used for the hero backdrop).
- Final CTA `background: slotImage('final-bg')`. Remove the old "Background omitted" comment. Remove the old "Step images omitted" comment in the second-opinion section.
- Add `const CENSUS_URL = 'https://data.census.gov/'`.
- Add `faqSchemaApproved: true` after `faqHeading`, with a comment citing DEC-108 and DEC-113.
- Add at the end of the content object: `servicePageIds: [id('sl-stl-city-camera'), id('svc-stl-sewer-lateral-inspection-reporting')]`. There is no City hydro-jetting page, so the hydro card keeps linking to `svc-hydro-jetting`.

### 3.4 Program section (`municipalProgram`)
Keep `eyebrow`, `title`, `lede`, `covers` and the "six or fewer units" eligibility. Replace the rest as follows.

`paragraphs`:
1. "Eligibility is limited to residential properties with six or fewer units and fully paid real-estate taxes. The City says back taxes must be paid before a property is eligible."
2. The existing plumbing-permit sentence with the `STL_PERMIT_URL` link: "Replacement of a sewer lateral in the City also requires a plumbing permit and inspection, issued to City-certified licensed plumbing contractors."
3. "Terms shown are from the Street Division's program page, which is dated 2014. The program is funded by fees on City real-estate tax bills and covers repairs under the public right-of-way. Confirm current terms and funding with the Street Division before you apply."

`doesNotCover.items`:
- "Clearing clogs or tree roots on any part of the lateral"
- "Problems outside the public right-of-way, including breaks under private property"

`steps` (title "How the City program works, in three steps"):
1. Report the problem - "The City asks residents to report a cave-in in the right-of-way through its street problem service request page."
2. Have the line inspected - "The City's page says to hire a licensed City plumber to inspect the line. An independent inspection from The Sewer Pros is separate from this step."
3. Send the statement and video - "Submit the plumber's statement and video to the Street Department by mail, email or fax. The City's page lists its mailing address, email address and fax number."

`afterSteps`: one paragraph - "Contact the City of St. Louis Street Division to confirm eligibility and what documentation it requires." with the `STL_PROGRAM_URL` link.

`callout` (title "Where an independent inspection fits"):
1. "The City's process asks for a plumber's statement and video, and the City decides eligibility, so an independent inspection does not replace that step. What it gives you is your own recorded evidence of the line's condition, which can help you tell a clog or root problem the program does not cover from damage worth raising with the Street Division. Ask the Street Division what documentation it accepts."
2. "If you collect repair bids, the plumbing permit rule above applies to whoever does the work. The Sewer Pros does not perform repairs or replacements."

`closing`: the existing internal link to `/st-louis-mo/sewer-lateral-inspection-reporting/` ("See our sewer lateral inspection & reporting service for the St. Louis area.").

State the $28 fee, attributed to the City ("The City says owners of residential property with six or fewer units pay a $28 fee on their real-estate property taxes"). The owner confirmed it on 2026-10-03. Do not carry over any other municipality's fee or cap.

### 3.5 FAQ
Keep ten questions. Replace "Can tree roots cause a sewer blockage?" with:

Q: "How does a St. Louis City owner apply for the Sewer Lateral Repair Program?"
A: "The City's program page says to report a cave-in in the right-of-way through its street problem service request page, hire a licensed City plumber to inspect the line, and send the plumber's statement and video to the Street Department by mail, email or fax. The program covers only qualifying damage under the public right-of-way, and the City decides eligibility."

All other FAQ entries stay as they are. The visible text and the markup must match; the markup is generated from the visible entries.

### 3.6 Sources
Labels and hrefs, in this order, `lastReviewed: '2026-10-03'`:
1. MSD Project Clear: Lateral line (last modified August 19, 2025)
2. MSD Project Clear: Report an issue (last modified August 19, 2025)
3. MSD Project Clear: Building backup (last modified August 19, 2025)
4. MSD Project Clear: How our sewer system works (last modified August 19, 2025)
5. MSD Project Clear: Service area (last modified February 10, 2020)
6. U.S. Census Bureau: American Community Survey 2019-2023 5-year estimates (City housing age; primary table check pending) -> `CENSUS_URL`
7. City of St. Louis Street Division: Sewer Lateral Repair Program (page created April 3, 2014)
8. City of St. Louis Building Division: Plumbing permits (created March 3, 2026; updated March 20, 2026)

Keep the existing `closingNote`. Re-open each source before writing these dates. If a page now shows a different date or contradicts the copy, use the new date or stop and report the conflict.

## 4. Supporting files

### 4.1 `scripts/compare-location-structure.mjs`
In the marker collection, skip `img` elements: `if (data.length > 0 && x.tag !== 'img') markers.push(...)`. Reason: image presence is already reported and allowed through the image counts, so a photo in a slot the reference leaves empty must not fail the marker check.

### 4.2 `scripts/verify-city-page.mjs`
- Remove `'FAQPage'` from the forbidden node list.
- Add the FAQ checks used by `verify-chesterfield-page.mjs`: FAQPage node present, questions equal the visible questions in order, answers appear verbatim in visible text, `isPartOf` is the website node, and 15 JSON-LD objects.
- Add a WebPage name check equal to "Sewer Inspection & Cleaning in St. Louis City, MO".
- Add checks that the program steps text ("street problem service request", "plumber's statement and video") and the callout title are present.
- Add a check that no other municipality's program terms appear: `$15,000`, `$4,500`, `$7,500`, `$150`, `$300`, `$50 annual`, `$200`.
- Keep the "no `licensed plumber`" check and add a check that the $28 fee is present and attributed to the City. Broaden the `licensed`/`insured` check to allow only "City-certified licensed plumbing contractors" and "licensed City plumber".
- Add the hours (8:00 am - 4:00 pm), no 7:30, and no repair-claim checks used by the Chesterfield script.

### 4.3 Docs
- `docs/22-decisions-change-log.md`: add `DEC-113 - FAQPage Markup Enabled for St. Louis City` after DEC-112, same format and status fields (Date 2026-10-03, APPROVED, Low, owner Sedrick, affected document `content/pages/st-louis-city.tsx`). Body: enabled under DEC-108; ten visible entries generate the markup; no review or rating markup; the page now shares the Chesterfield/Ballwin/Florissant layout and data model; program steps read from the Street Division and plumbing-permit pages on 2026-10-03 under DEC-072; the dollar fee is not repeated; the pre-1940 statement still rests on ACS 2019-2023 with the primary check pending.
- `docs/04-master-page-build-list.md`: update the `loc-stl-st-louis-city` row. Metadata column: rich composition, unique title and description, FAQPage per DEC-113. Verification column: MSD and City pages re-read 2026-10-03, Census check pending. Risk column: no original local proof item; program section uses an existing footage photo. Next action: add a real City job photo with owner consent, confirm terms with the Street Division, re-verify sources by 2027-04-01.

## 5. Validation (all must pass before pushing)

```bash
export NEXT_PUBLIC_SITE_URL=https://www.thesewerpros.com
npx tsc --noEmit
npm run lint
npm run build
for r in chesterfield ballwin florissant; do
  node scripts/compare-location-structure.mjs out/st-louis-mo/$r/index.html out/st-louis-mo/st-louis-city/index.html
done
node scripts/verify-city-page.mjs
for r in chesterfield ballwin florissant st-charles; do node scripts/verify-$r-page.mjs; done
```

Expected: every comparison ends "Structure matches the reference."; every verify script ends "All checks passed."

Notes:
- Comparing against St. Charles as the reference fails by design (it has an extra `reviews` section). Do not "fix" City to add one in this change.
- If the sandbox cannot reach Google Fonts, temporarily stub the `next/font/google` import in `app/layout.tsx` for local validation only, then restore it with `git checkout app/layout.tsx` before committing. `git status` must not list `app/layout.tsx`.
- The review build draws image placeholders by default (`IMAGE_SLOTS_DEFAULT` in `lib/image-slots.ts`). That is a warning, not a failure, and is not changed here.

## 6. Commit

Stage only: `content/pages/st-louis-city.tsx`, `docs/04-master-page-build-list.md`, `docs/22-decisions-change-log.md`, `scripts/compare-location-structure.mjs`, `scripts/verify-city-page.mjs`. Run `git fetch origin main` first, then push to `main`.

Commit message: "Bring St. Louis City location page to the shared municipality layout", with a short body listing the program steps and callout, the FAQPage markup (DEC-113), the full slot registry, dated sources and `servicePageIds`, and a note that the $28 fee is attributed to the City page.

## 7. Report back

Two or three sentences: what changed, that validation passed, and the open items below.

## 8. Open items (do not do in this change)

1. Real City job photos for the unfilled slots; the three second-opinion steps are the highest value.
2. (Resolved) $28 fee added, sourced to the City program page.
3. Primary Census table for the pre-1940 housing share (the Census API needs a key); the page uses about 58% from a secondary republication meanwhile.
4. Review band (St. Louis snapshot, text only) as on St. Charles. Ballwin's decision note treated this as a separate change.
5. A sourced point-of-sale answer for the buying section, as Chesterfield has. Research the City's occupancy inspection materials before writing anything.
6. TCPA consent copy and the lead-form endpoint (PENDING-018) remain site-wide items.
