# Second Opinion Page: Inbound-Link Proposal

Page: `/services/independent-sewer-inspection-second-opinion/` (content key `svc-independent-sewer-second-opinion`)
Basis: repo at HEAD 76e3b2a plus the local build in `out/`. Read-only analysis. No source, data, content or verifier file was changed. This file is the only addition.

## 1. Current inbound links

Seven body links from seven pages (header and footer carry none).

| # | Source page | Source file | Anchor | Placement |
|---|---|---|---|---|
| 1 | `/` (home) | `content/pages/core.tsx` (home FAQ "Should I get a second opinion before agreeing to a sewer replacement?") | second opinion | FAQ answer |
| 2 | `/services/` | same reused FAQ (`REUSED_HOME_FAQ`) | second opinion | FAQ answer |
| 3 | `/about/` | `content/pages/about.tsx` (FAQ "Can The Sewer Pros give me a second opinion...") | second opinion | FAQ answer |
| 4 | `/compare/independent-sewer-inspection-vs-repair-company/` | `content/pages/comparisons.tsx` ("Our position") | second opinion | body |
| 5 | `/for/home-sellers/` | `content/pages/audiences.tsx` ("Responding to a buyer's finding") | second opinion | body |
| 6 | `/resources/how-to-read-a-sewer-camera-inspection-video/` | `content/pages/core.tsx` | ask for a second opinion on the footage | body |
| 7 | `/resources/what-is-in-a-sewer-camera-inspection-report/` | `content/pages/core.tsx` | get an independent opinion on a report or video you already have | body |

### How the 40% gate counts these

`scripts/audit/anchors.mjs`: rows with the same (target, anchor, source section or FAQ question) collapse to one, and the gate only applies to targets with 8 or more rows (`MIN_LINKS`). Links 1 and 2 are the same FAQ, so they collapse.

- Current rows: 6. Anchor counts: "second opinion" 4 (67%), the two guide anchors 1 each.
- The gate is dormant today (6 is below 8). Any proposal that takes the target to 8 or more rows turns it on, and then "second opinion" must be 40% or less. With "second opinion" held at 4 rows, the set needs 10 or more rows, or at least 4 new distinct anchors per added link. The proposal below adds only new anchors, so that count stays at 4.

## 2. Constraints found while reading the candidates

1. **A service page cannot go in the "Related guides" slot.** `verify-internal-links.mjs` ("a Related guides slot only links guides and comparisons (no service or sales page)") fails on any non-`/resources/`, non-`/compare/` target. So the guide-rules mechanism in `lib/links/link-plan.ts` (used for the reverse links) is not available for this page.
2. **Seven service verifiers assert that the page is not linked.** Each carries "no link to the unbuilt independent second-opinion page", now stale because the page is built:
   - `scripts/verify-sewer-cleaning-page.mjs:194`
   - `scripts/verify-hydro-jetting-page.mjs:207`
   - `scripts/verify-sewer-line-locating-page.mjs:273`
   - `scripts/verify-recurring-sewer-backup-diagnosis-page.mjs:338`
   - `scripts/verify-sewer-cleaning-camera-inspection-page.mjs:259`
   - `scripts/verify-preventative-sewer-maintenance-page.mjs:348`
   - `scripts/verify-pre-purchase-sewer-inspection-page.mjs:350` (also bans any `/compare/` href)
   Camera Inspection and Drain Cleaning verifiers have no such pin.
3. **Location verifiers do not pin the absence.** They scan for forbidden strings (only "free second opinion" is relevant), cross-market values, external-link counts and that internal links resolve. A new internal link with an anchor that has no "free" should not trip them, but a build is needed to confirm.
4. **The 100 destinations per page ceiling is not a constraint.** The highest current count on any page is 45.
5. **Repointing the FAQ linker is a trap.** `lib/links/faq-links.tsx:70` sends "second opinion" to the comparison page. Repointing it would add one row per FAQ question, all with the exact anchor "second opinion", and break the 40% gate. Skip.
6. **The independent band's `link` is one slot.** `v2.independent.link` takes a page link or an in-page `href`. Drain Cleaning (`#request`) and Pre-Purchase (`#request`) already use it for their request CTA, so those two are out (replacing the CTA would cost conversion).

## 3. Candidate sources and how each is stored

| Candidate | Where the relevant text lives | Storage | Verifier pin that would change |
|---|---|---|---|
| Services hub | Shared home FAQ already links (link 2). Also renders `AuthorityBand` (process band) and the shared `IndependentProcess`. No dedicated hub section. A service card would need a homepage-style card plus image | JSX (FAQ, band) | none for the band |
| Sewer Cleaning page | `services.tsx` independent band, lines 894-913. Comment at 912 records that the content doc wants `link: { pageId, label: 'About independent inspection' }` | data field (`link`) | `verify-sewer-cleaning-page.mjs:194` |
| Hydro Jetting page | `services.tsx:1477` band note ends "see independent sewer inspection." (plain string). `link` is unset | string note plus data field | `verify-hydro-jetting-page.mjs:207` |
| Sewer Line Locating page | `services.tsx:2595` band; note is about costly work near the line | data field | `verify-sewer-line-locating-page.mjs:273` |
| Recurring Backup page | `services.tsx:4684` band note already says "Consider showing the video to another inspection company for a second opinion before agreeing." | data field (`link` unset) | `verify-recurring-sewer-backup-diagnosis-page.mjs:338` |
| Sewer Camera Inspection page | "Keep the video" text at `services.tsx:327` and FAQ at 536 are plain strings (`keep.body` array and an answer string). Page uses the shared `IndependentProcess` | plain strings | none (no pin) |
| Pre-Purchase page | "Keep the video" text at `services.tsx:4028` (plain string); band link slot used by `#request`; verifier bans `/compare/` and second-opinion hrefs | plain strings | `verify-pre-purchase-sewer-inspection-page.mjs:350` |
| Comparison page | Linked once already ("Our position"). A list item at `comparisons.tsx:222-224` reads "As a second opinion on a replacement recommendation you were not expecting" | JSX `<li>` | none |
| Market hubs | The shared process band (`data/business/process.tsx:164,177`, JSX with `ApprovedInlineLink`) renders on home, Services hub, Locations hub and the three market hubs (6 pages). St. Louis hub FAQ at `st-louis.tsx:957` is JSX. Las Vegas `las-vegas.tsx:494` is a plain string. San Diego `san-diego.tsx:1432` is a benefit list item | mixed | none |
| Location block | `SecondOpinionSection` in `components/sections/location/LocationSections.tsx` (line 526 renders each page's `supportLine` string). One template serves 16 location pages | shared template | none expected (see constraint 3) |
| Shared `IndependentProcess` | `components/sections/IndependentProcess.tsx` (line 201 renders `ctaNote`). Renders on 16 pages: home, About, Services hub, three market hubs, six audience pages, camera inspection, cleaning and camera inspection, preventative maintenance, and the St. Louis lateral reporting page | shared template | `verify-sewer-cleaning-camera-inspection-page.mjs:259`, `verify-preventative-sewer-maintenance-page.mjs:348` |
| Audience pages | `services:` index lists at `audiences.tsx` lines 131 (home buyers), 277 (home sellers), 384 (agents), 481, 658, 830. `relatedPageIds` does not render a section on the built home-buyers page, so it is not a usable slot | data array | none (no audience verifier) |
| Home page / About page | Already linked through their FAQs. Home process band is the best new body spot | JSX | none |
| `lib/links/faq-links.tsx` | Rule at line 70 handles "second opinion" for the comparison page; a narrow rule at the line above already catches "second opinion on a report or video" | code | none; leave as is (constraint 5) |

## 4. Proposed set

Nine links. Six are Recommended, three Optional. All wording avoids "free", prices, response times and repair positioning, and uses hyphens only.

### R1. Home process band (6 pages)
- **File:** `data/business/process.tsx`, lines 163-164, `ApprovedInlineLink` already imported and used in the same band.
- **Current:** "...can resolve, and what may point toward a structural issue worth a second opinion."
- **Proposed:** "...can resolve, and what may point toward a structural issue {link: worth a second opinion}."
- **Anchor:** worth a second opinion
- **Why:** the band is the "how we work" explanation on the home page, the Services hub, the Locations hub and the three market hubs. The sentence is already about second opinions, so the link answers the question it raises.
- **Pages affected:** 6. **Rows in the gate:** 1 (same anchor and section on every page).
- **Verifiers:** none found pinning this sentence.
- **Status:** Recommended.

### R2. Location block (16 pages, one template change)
- **File:** `components/sections/location/LocationSections.tsx:526`, `SecondOpinionSection`.
- **Current:** the block ends with each page's `cta.supportLine` ("Already received a repair recommendation or an inspection report? Send us what you have and we will review it...").
- **Proposed:** add one shared line under the support line: "See {link: how we review a report or video you already have}." Content strings are not edited, so the 16 per-page support lines stay as they are.
- **Anchor:** how we review a report or video you already have
- **Why:** the block is exactly the context ("send us what you have"), and the link tells the reader what that means. One template change instead of 16 content edits.
- **Pages affected:** 16 location pages (not service-plus-location pages). **Rows:** 1.
- **Verifiers:** none pin absence. The 16 location verifiers check forbidden strings (only "free second opinion"), cross-market values and that internal links resolve; confirm with a build.
- **Status:** Recommended. This is the link earlier alignment work parked as "link once verifiers allow"; the anchor has no "free" and does not alter the block's pinned text.

### R3. Sewer Cleaning band link
- **File:** `content/pages/services.tsx:894-913`, the `independent` band. The existing comment at 912 describes this exact link.
- **Current:** the band has the note "If someone has recommended costly work, ask for the inspection video and written findings, get multiple written estimates, and ask for an explanation when they differ." and no link.
- **Proposed:** `link: { pageId: id('svc-independent-sewer-second-opinion'), label: 'About independent inspection' }`
- **Anchor:** About independent inspection
- **Why:** the note is about doubting a costly recommendation. The content doc for this page asked for this link.
- **Verifiers:** `verify-sewer-cleaning-page.mjs:194` (replace the "no link" assertion).
- **Status:** Recommended.

### R4. Recurring Backup band link
- **File:** `content/pages/services.tsx:4684-4702`.
- **Current note:** "...Consider showing the video to another inspection company for a second opinion before agreeing."
- **Proposed:** `link: { pageId: id('svc-independent-sewer-second-opinion'), label: 'Independent review of your inspection video' }`
- **Anchor:** Independent review of your inspection video
- **Why:** the note already tells the reader to get a second view of the video; the link says where.
- **Verifiers:** `verify-recurring-sewer-backup-diagnosis-page.mjs:338`.
- **Status:** Recommended.

### R5. Audience service lists (3 pages)
- **Files:** `content/pages/audiences.tsx` lines 131 (home buyers), 277 (home sellers), 384 (real estate agents), in each page's `services:` list.
- **Current:** each list holds the pre-purchase, camera, cleaning-and-camera items with a one-line description.
- **Proposed:** add `{ pageId: id('svc-independent-sewer-second-opinion'), description: 'Review the inspection report or video you already have.' }` to each.
- **Anchor:** the page title (Independent Sewer Inspection / Second Opinion)
- **Why:** these three audiences are the ones who meet a sewer finding in a transaction. The home sellers page already links in body text, so this adds a service-list entry there rather than a duplicate sentence.
- **Pages affected:** 3. **Rows:** 1.
- **Verifiers:** none for audiences. `verify-internal-links` "audience pages link the three launch market hubs and 1 to 3 local service pages" counts location-level service pages, so it should be unaffected.
- **Status:** Recommended.

### R6. St. Louis hub FAQ
- **File:** `content/pages/st-louis.tsx:957`, FAQ "What happens if the inspection finds a problem?" (JSX).
- **Current:** "...structural repair or replacement is not something we sell. You are free to get a second opinion, consult a repair contractor of your choosing, or simply monitor the condition."
- **Proposed:** "...You are free to {link: get a second opinion}, consult a repair contractor..." (no new words).
- **Anchor:** get a second opinion
- **Why:** the sentence already names a second opinion as the customer's next step.
- **Verifiers:** none. FAQPage JSON-LD text stays identical (only the markup differs), and the FAQ-link rules allow it (the home FAQ already does this).
- **Status:** Recommended.

### O1. Hydro Jetting band link
- **File:** `content/pages/services.tsx:1477-1480`. The note ends "see independent sewer inspection." (plain string).
- **Proposed:** `link: { pageId: id('svc-independent-sewer-second-opinion'), label: 'Independent sewer inspection' }`.
- **Anchor:** Independent sewer inspection. **Verifiers:** `verify-hydro-jetting-page.mjs:207`.
- **Status:** Optional. The note's own words already say "independent sewer inspection", so the label repeats it. Better paired with a note edit that this proposal does not make.

### O2. Shared `IndependentProcess` link line (16 pages)
- **File:** `components/sections/IndependentProcess.tsx:201`.
- **Proposed:** one line under the CTA note: "See {link: how a report or video review works}."
- **Verifiers:** `verify-sewer-cleaning-camera-inspection-page.mjs:259`, `verify-preventative-sewer-maintenance-page.mjs:348`.
- **Status:** Optional. It overlaps R1 and R5 on the home, hub and audience pages, and it forces two verifier edits. Take it only if R1 to R6 are not enough, or for the camera inspection page, which has no better insertion point.

### O3. Comparison page list item
- **File:** `content/pages/comparisons.tsx:222-224`.
- **Current:** "As a second opinion on a replacement recommendation you were not expecting"
- **Proposed:** link "second opinion on a replacement recommendation" inside that item.
- **Verifiers:** none. **Status:** Optional. The page already links once from "Our position", so this is a second link from the same page with a new anchor.

### Skipped
| Candidate | Reason |
|---|---|
| Related guides slot via `link-plan.ts` | Fails the slot-content rule (constraint 1) |
| `faq-links.tsx` default repoint | Breaks the 40% gate (constraint 5) |
| Pre-Purchase page | Band link slot used by the request CTA; plain-string "keep the video" text; pin also bans `/compare/` and second-opinion hrefs |
| Drain Cleaning page | Band link slot used by the request CTA |
| Sewer Camera Inspection page | Relevant text is plain strings; covered by O2 if wanted |
| Sewer Line Locating page | Weak relevance (band is about locating near costly work) and a pin; low value |
| Services hub card | Would need a homepage-style card with an image; R1 already gives the hub a body link |
| Las Vegas and San Diego hub strings | Plain string or benefit-list item; R1 already reaches both hubs |
| About page | Already linked from its FAQ |

## 5. Anchor distribution

Rows as the gate counts them.

| Anchor | After Recommended set (R1 to R6) | After all nine |
|---|---|---|
| second opinion (existing) | 4 | 4 |
| ask for a second opinion on the footage (existing) | 1 | 1 |
| get an independent opinion on a report or video you already have (existing) | 1 | 1 |
| worth a second opinion (R1) | 1 | 1 |
| how we review a report or video you already have (R2) | 1 | 1 |
| About independent inspection (R3) | 1 | 1 |
| Independent review of your inspection video (R4) | 1 | 1 |
| Independent Sewer Inspection / Second Opinion (R5) | 1 | 1 |
| get a second opinion (R6) | 1 | 1 |
| Independent sewer inspection (O1) | | 1 |
| how a report or video review works (O2) | | 1 |
| second opinion on a replacement recommendation (O3) | | 1 |
| **Total rows** | **12** | **15** |
| **Top anchor share** | 4 of 12, 33% | 4 of 15, 27% |

Both pass the 40% limit. Distinct anchors: 9 after the Recommended set, 12 after all nine, against a minimum of 4. Inbound page count rises from 7 to about 31 for the Recommended set (new pages: the Locations hub and three market hubs from R1, 16 location pages from R2, one each from R3 and R4, home buyers and real estate agents from R5; the home, Services hub, home sellers and St. Louis hub pages are already counted), but because identical template links collapse, the gate sees 12 rows, not 31.

## 6. Verifiers that would change

| Verifier | Line | Change | Proposal |
|---|---|---|---|
| `verify-sewer-cleaning-page.mjs` | 194 | invert or drop "no link to the unbuilt second-opinion page" | R3 |
| `verify-recurring-sewer-backup-diagnosis-page.mjs` | 338 | same | R4 |
| `verify-hydro-jetting-page.mjs` | 207 | same | O1 |
| `verify-sewer-cleaning-camera-inspection-page.mjs` | 259 | same | O2 |
| `verify-preventative-sewer-maintenance-page.mjs` | 348 | same | O2 |

The Recommended set changes only the first two pins (R3 and R4). The pre-purchase and locating pages are not in the set, so those verifiers stay untouched, and the hydro, cleaning-and-camera and preventative pins change only if O1 or O2 is taken.

## 7. Risks

- **Template blocks (R2, O2) repeat the same link on many pages.** The gate collapses them, but they add near-identical outbound links on 16 pages each. Keep to one such block (R2) unless the overlap is wanted.
- **The location block is pinned wording elsewhere.** R2 adds a line without changing the per-page text. If a location verifier checks the exact block contents or link counts in that section, a build will show it before any commit; none found by reading.
- **Stale "no link" pins.** Seven verifiers assert the page is not linked. Updating them should be a deliberate change: replace the assertion with "the second-opinion link, if present, resolves", not a deletion, so the guard keeps its purpose.
- **"Free" placement.** No proposed anchor or sentence adds "free", and none touches the DEC-088, DEC-139, DEC-148 or DEC-151 placements.
- **Plain-string pages stay unlinked.** Camera Inspection and Pre-Purchase hold the relevant sentence in plain strings. Linking them means converting those strings to JSX, a larger edit against pinned verifiers, and the proposal does not recommend it.
- **No build was run for these proposals.** Every verifier effect above is from reading the scripts and the link-audit modules, not from a trial run.
