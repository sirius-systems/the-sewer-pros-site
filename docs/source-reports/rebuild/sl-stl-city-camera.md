# Source report: St. Louis City + Sewer Camera Inspection (`sl-stl-city-camera`)

Sources: location = `content/pages/st-louis-city.tsx` (`stLouisCityContent`); service = `content/pages/services.tsx`, `svc-sewer-camera-inspection` `v2`.
Output: `content/pages/sl-rebuild/sl-stl-city-camera.tsx`.
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## What changed from the existing body

Existing: three sections ("Inspection as documentation", "Position decides coverage", "What the footage typically shows on older city lines"), about 190 words. New: four sections, about 610 words.
- Existing claim that the camera inspection is "frequently the evidence the program asks for" is removed. The City asks for a licensed City plumber's statement and video; an independent inspection does not replace that step (location callout). The hero said the same thing ("often the document the program requires") and is rewritten.
- "Recording the distance along the line to each condition" is softened to "you can ask that the findings note where along the line each condition was seen" (service `ask` card), plus an explicit statement that footage cannot show where the connection to the main is.
- Added: MSD main vs private lateral including under the street, the program's six-units and paid-taxes eligibility, the 2014 page date hedge, combined sewers, the 58 percent figure with its caveat, the MSD number (labelled MSD's), the plumbing permit rule, and the camera's cannot-see-under-water limit.
- New meta description, `serviceDescription`, hero intro. `cta` omitted (shell default kept). `local` card omitted: the existing card is accurate and specific.

## Four body sections

| Body section | Location source | Service source |
|---|---|---|
| 1. Your lateral runs to the MSD main, even under the street | responsibility answer, cards, FAQ "Does the City repair every private lateral" | definition (inspection and documentation), `ask` (where along the line), FAQ "Where does the camera go in" not used |
| 2. What the City's repair program asks for, and where a camera fits | municipalProgram lede, paragraphs 1 and 3, covers, doesNotCover, steps 2-3, callout, afterSteps | `keep` (a finding is an observation, not a repair recommendation) |
| 3. Older City housing, combined sewers, and what only a camera shows | housingAge paragraphs 1-3 and table, systemExplainer paragraphs 1-4 | limits can (roots, deposits, cracks, joints, visible internal corrosion, standing water), cannot (waterline), decision list (blocked line, cleaning first) |
| 4. Who to call first, and what the camera does not decide | whoToCall paragraphs and MSD agency, municipalProgram permit paragraph and callout closing | `keep` (not a repair recommendation), independent note |

## St. Louis City location page, element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription, hero | ADAPTED | Page-specific camera copy. |
| heroForm (bullets, card, MSD note) | LEFT OUT | Shell supplies the request form. MSD number carried in section 4. |
| keyTakeaways 1 (MSD main, private lateral) | USED (section 1) | |
| keyTakeaways 2 (combined sewers) | ADAPTED (section 3) | |
| keyTakeaways 3 (recorded evidence before you clean, buy, approve) | ADAPTED (hero, section 2) | |
| jumpNav | LEFT OUT | Location navigation. |
| serviceCards (9) | LEFT OUT | Shell supplies service cards. |
| responsibility answer | USED (section 1) | |
| responsibility cards (public, private) | ADAPTED (section 1) | |
| responsibility table, rows 1-3 | ADAPTED (sections 1, 4) | |
| responsibility table row 4 (City program help) | ADAPTED (section 2) | |
| responsibility table row 5 (where an inspection helps) | ADAPTED (section 1) | |
| responsibility note (not legal advice) | ADAPTED | "Confirm" wording; no legal advice. |
| systemExplainer paragraphs 1-3 (combined sewer, oldest, wet-weather backups, Get the Rain Out) | ADAPTED (section 3) | Get the Rain Out and brick tunnels left out as not about the lateral. |
| systemExplainer paragraph 4 (system facts do not tell your lateral's condition) | USED (section 3) | |
| systemExplainer card (what a camera shows) | ADAPTED (section 3) | The service page's own can/cannot lists are fuller. |
| housingAge paragraph 1 (58 percent pre-1940) | USED (section 3) | Carried with the republished-data caveat. |
| housingAge paragraph 2, table (materials by era) | ADAPTED (section 3) | Clay and cast iron named; Orangeburg and PVC left out for length. |
| housingAge paragraph 3 (only an inspection shows) | ADAPTED | Section 3 closing. |
| whoToCall paragraphs | USED (section 4) | |
| whoToCall MSD agency, number, links | ADAPTED (section 4) | Number labelled MSD's. Report-issue links left out. |
| whoToCall company | LEFT OUT | No company phone repeated. |
| municipalProgram lede, eligibility, page date | USED (section 2) | $28 fee left out: not needed for a camera page. |
| municipalProgram permit paragraph | USED (section 4) | |
| municipalProgram covers, doesNotCover | USED (section 2) | |
| municipalProgram steps (report, inspect, send) | ADAPTED (section 2) | Steps 2 and 3 used. Step 1 (cave-in report) left out. |
| municipalProgram afterSteps (contact Street Division) | ADAPTED (section 2) | |
| municipalProgram callout (where an independent inspection fits) | USED (section 2, section 4) | |
| municipalProgram closing (lateral reporting link) | LEFT OUT | Page link, not body copy. |
| secondOpinion (ledes, steps, callout) | LEFT OUT | Second-opinion content belongs to the independent-inspection page. |
| buyingGuide (lede, body, agents, links) | LEFT OUT | Buying material belongs to the pre-purchase page. The camera/pre-purchase split is kept. |
| nearbyAreas | LEFT OUT | The shell builds coverage links. |
| FAQ (10) | LEFT OUT here, merged by `service-location-upgrade.ts` | Not part of PageRebuild. |
| finalCta | LEFT OUT | Shell CTA kept. |
| sources | LEFT OUT | Supplied by the upgrade module. |

## Sewer camera inspection service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta written. |
| hero scope, cardTitle | LEFT OUT | Shell. |
| definition answer | ADAPTED | `serviceDescription` and hero. |
| definition supporting (buying a home) | LEFT OUT | Pre-purchase page. |
| signals (6 cards) | LEFT OUT | Supplied by the upgrade module as problem cards. |
| limits can (9) | ADAPTED (section 3) | Roots, deposits, obstructions, cracks, offset joints, visible internal corrosion, standing water used. Connections and collapse left out. |
| limits cannot (8) | ADAPTED (sections 1, 3) | Waterline and unreached sections used. |
| limits callout, related (locating) | LEFT OUT | Locating is on its own page. |
| process (5 steps, prep) | LEFT OUT | Supplied by the upgrade module. Equipment names stay there. |
| decision (cleaning and camera separate) | ADAPTED (section 3) | Blocked-line / cleaning-first point. |
| comparison table | LEFT OUT | Not part of this shape. |
| ask (5 items) | ADAPTED (section 1) | "Where along the line" used. |
| keep | ADAPTED (sections 2, 4) | Observation, not a repair recommendation. |
| evidence (4 items) | LEFT OUT | Example footage block. |
| audiences, markets | LEFT OUT | |
| FAQ (23) | LEFT OUT here, merged by the upgrade module | Not part of PageRebuild. |
| request / scopeNote | ADAPTED | "Does not perform repairs or replacements" in section 4. |
