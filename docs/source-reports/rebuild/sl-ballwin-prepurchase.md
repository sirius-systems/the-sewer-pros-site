# Source report: Ballwin + Pre-Purchase Sewer Inspection (`sl-ballwin-prepurchase`)

Sources: location = `content/pages/st-louis-ballwin.tsx` (`ballwinContent`); service = `content/pages/services.tsx`, `svc-pre-purchase-sewer-inspection` `v2`.
Output: `content/pages/sl-rebuild/sl-ballwin-prepurchase.tsx`.
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## What changed from the existing body

Existing: four sections ("Why the program terms belong in a buying decision", "What the inspection establishes", "Construction era in Ballwin", "Timing"), about 400 words. New: four sections, about 610 words.
- Kept: $4,500 and $7,500 (City's terms, now labelled as such), roots once a year or less as maintenance, the sale-contingency statement, clay laterals and the 1976 median, the undated-page hedge.
- Existing "a recurring cost the owner carries" is replaced by the City's own wording (normal maintenance, not a covered repair).
- Existing "What the inspection establishes" bullets ("whether the visible condition is structural or accumulation") are replaced by the service page's can/cannot lists, including "a clear scope is not proof".
- Added: the program does not pay for video or cabling, roots more than once a year as a covered repair (and why a one-day scope cannot show clearing history), Occupancy Permit and the "none found" lateral rule, Inspections and Public Works numbers (labelled the City's), the inspection window.
- `local` card replaced (the program will not pay for the video). New meta description, `serviceDescription`, hero intro. `cta` omitted.

## Four body sections

| Body section | Location source | Service source |
|---|---|---|
| 1. What Ballwin's program will and will not do for a buyer | municipalProgram lede, paragraphs 1-2, doesNotCover (normal wear, cabling, video), FAQ "home-sale inspection", buyingGuide body | `keep` (record of what was visible), FAQ "Is a sewer scope required" not used |
| 2. Roots once a year or less | municipalProgram paragraph 3, doesNotCover (roots), housingAge paragraph 3, table | FAQ "What happens if the scope finds roots", limits can (roots), independent note |
| 3. Older clay laterals, a 1976 median, and a clear scope | housingAge paragraphs 1-3, table | limits can/cannot, callout, FAQ "What does a clear sewer scope mean", FAQ "older house" |
| 4. Occupancy permits, City contacts and your inspection window | buyingGuide body, FAQ "inspection when a home is sold", whoToCall Inspections and Public Works, municipalProgram undated caveat | process prep (deadline, agent), `ask`, decision (inspection is not replacement of City review) |

## Ballwin location page, element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription, hero | ADAPTED | Page-specific pre-purchase copy. |
| heroForm, jumpNav, serviceCards | LEFT OUT | Shell. |
| keyTakeaways 1 (MSD owns main, lateral private) | ADAPTED | Not restated at length: this page is about the buy decision. Covered by the lateral definition in section 3. |
| keyTakeaways 2 (program, $28, caps, roots) | ADAPTED (hero, sections 1-2) | $28 left out. |
| keyTakeaways 3 | LEFT OUT | |
| responsibility answer, cards, table, note | LEFT OUT | Responsibility is on the camera pages. Open item for review: a buyer might want one line on it. |
| systemExplainer (Valley Drive project, separate sewers) | LEFT OUT | Public sewer, not the buyer's lateral. |
| systemExplainer card | LEFT OUT | Service page's lists are fuller. |
| housingAge paragraphs 1-4 | USED / ADAPTED (sections 2, 3) | 1976 median with the census-table check TODO noted on the location page. |
| housingAge table (4 rows) | ADAPTED (section 3) | Cracks, joints, roots used; blockage with intact pipe left out. |
| whoToCall MSD | LEFT OUT | Building-backup line; not a buying step. |
| whoToCall Inspections and Public Works | USED (section 4) | Labelled the City's. Hours left out. |
| whoToCall company | LEFT OUT | |
| municipalProgram lede ($4,500, $7,500, not a warranty) | USED (section 1) | |
| municipalProgram paragraph 1 ($28, April 1999) | LEFT OUT | Not buyer-relevant. |
| municipalProgram paragraph 2 (unable to live) | LEFT OUT | Not used. |
| municipalProgram paragraph 3 (roots) | USED (section 2) | |
| municipalProgram paragraph 4 (funding mechanics) | LEFT OUT | Detail; "confirm funding" kept in section 4. |
| municipalProgram undated page | USED (section 4) | |
| municipalProgram covers (4) | LEFT OUT | Not buyer-relevant. |
| municipalProgram doesNotCover | ADAPTED (sections 1, 2) | Normal wear, roots, cabling, video used. Others left out. |
| municipalProgram steps ($150, MyGov) | LEFT OUT | Owner application detail. |
| municipalProgram callout | ADAPTED (section 1) | Video not paid; inspection is the buyer's to arrange. |
| secondOpinion | LEFT OUT | |
| buyingGuide body (Occupancy Permit, none found, sale contingency) | USED (sections 1, 4) | |
| buyingGuide agents, links, cta | LEFT OUT | |
| nearbyAreas, finalCta | LEFT OUT | Shell. |
| FAQ (10) | LEFT OUT here, merged by the upgrade module | |
| sources | LEFT OUT | Upgrade module. |

## Pre-purchase sewer inspection service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta. |
| definition | ADAPTED | `serviceDescription`, hero. |
| signals (6) | LEFT OUT | Upgrade module problem cards. "A local sale requirement" tied to section 4 (none found). |
| limits can (8) | USED (section 3) | |
| limits cannot (8) | ADAPTED (section 3) | Unreached sections, soil, future performance. |
| limits callout (clear line is not proof) | USED (section 3) | |
| process (5 steps, prep) | ADAPTED (section 4) | Deadline and agent from prep. Equipment names stay in the upgrade module. |
| decision | ADAPTED (section 2) | Cleaning does not repair the opening. |
| independent | ADAPTED (section 2) | |
| comparison | LEFT OUT | |
| ask (5), keep | ADAPTED (sections 1, 4) | |
| evidence, audiences, markets | LEFT OUT | |
| FAQ (29) | LEFT OUT here (merged); several used as sources | "What does a clear sewer scope mean", roots, older house. |
| request | LEFT OUT | |
