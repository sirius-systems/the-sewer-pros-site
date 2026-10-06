# Source report: Chesterfield + Sewer Camera Inspection (`sl-chesterfield-camera`)

Sources: location = `content/pages/st-louis-chesterfield.tsx` (`chesterfieldContent`); service = `content/pages/services.tsx`, `svc-sewer-camera-inspection` `v2`.
Output: `content/pages/sl-rebuild/sl-chesterfield-camera.tsx`.
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## What changed from the existing body

Existing: three sections ("What a camera finds on a newer lateral", "Standing water is the signal to watch", "Documentation for a lateral program"), about 330 words. New: four sections, about 620 words.
- Existing "most laterals here are PVC" and "ground movement rather than the pipe itself" (hero) were stronger than the location page. The page says pipe from that era is "more often PVC", so the wording is now "more often", and the hero says "often".
- Existing "a belly and a blockage feel identical at the fixtures" is removed (not in either source). Replaced by the service page's own point: water patterns may suggest a low spot, a camera does not measure slope.
- Existing "municipal programs generally want documentation from a licensed plumber ... often the video itself" is removed. For Chesterfield the City cables first, then has its own contractor televise the lateral. Independent footage does not replace that review.
- Existing "$28 annual charge ... since 2001" is dropped as not needed for a camera page. The $15,000 cap is kept, labelled as the City's March 2026 policy.
- Added: the City program's own lateral definition (three to five feet outside the foundation), the City's defect list, MSD and City contacts (labelled theirs), 911 guidance, the Conway Meadows project, and "none found" at sale.
- New meta description, `serviceDescription`, hero intro. `cta` omitted. `local` card omitted: existing card is accurate.

## Four body sections

| Body section | Location source | Service source |
|---|---|---|
| 1. Where your responsibility starts, and how the City defines its lateral | responsibility answer, cards, note (no rule found on under-street ownership, confirm by address) | `ask` (where along the line), definition |
| 2. Newer homes, different findings | housingAge paragraphs 1-4 and table (bellies, joints, later work, roots) | limits can/cannot (standing water, slope not measured), FAQ "Will the camera show a belly" |
| 3. The City's defect list, and what footage can and cannot show | municipalProgram lede, covers (defects), doesNotCover (roots), steps 1 and 4, callout | `keep`, limits cannot |
| 4. Who to call, the public sewer project, and buying here | whoToCall (MSD, Public Works, 911), systemExplainer paragraph 3-5, buyingGuide body | independent note |

## Chesterfield location page, element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription, hero | ADAPTED | Page-specific camera copy. |
| heroForm | LEFT OUT | Shell. |
| keyTakeaways 1 (MSD main, private lateral) | USED (section 1) | |
| keyTakeaways 2 (program, $28, $15,000, roots) | ADAPTED (section 3) | $28 left out. |
| keyTakeaways 3 | ADAPTED (hero) | |
| jumpNav, serviceCards | LEFT OUT | Shell. |
| responsibility answer | USED (section 1) | |
| responsibility cards (public: MSD, boundary, septic; private: program definition) | USED / ADAPTED (section 1) | |
| responsibility table rows 1-3 | ADAPTED (sections 1, 4) | |
| responsibility table row 4 (what help exists) | ADAPTED (section 3) | |
| responsibility table row 5 (where an inspection helps) | ADAPTED (section 1) | |
| responsibility note | USED (section 1) | "We did not find a published rule" kept. |
| systemExplainer paragraphs 1-2 (separate system, MSD description is background) | LEFT OUT | Not about the lateral. |
| systemExplainer paragraphs 3-4 (Conway Meadows, undated page) | ADAPTED (section 4) | 1,400 feet and pipe widths left out. |
| systemExplainer paragraph 5 | ADAPTED (section 4) | |
| systemExplainer card | LEFT OUT | Service page lists are fuller. |
| housingAge paragraph 1 | ADAPTED (section 2) | |
| housingAge paragraph 2 (85.6, 1982, 1.4) | USED (section 2) | With the location page's caveat. |
| housingAge paragraphs 3-4 | USED (section 2) | |
| housingAge table (4 rows) | USED (section 2) | List. |
| whoToCall paragraphs, MSD agency | USED (section 4) | Number labelled MSD's. |
| whoToCall Public Works (636) 537-4762 | USED (section 4) | Labelled the City's. Hours and City Hall address left out. |
| whoToCall 911 paragraph | USED (section 4) | |
| whoToCall company | LEFT OUT | |
| municipalProgram lede, defect list | USED (section 3) | |
| municipalProgram eligibility (six units, delinquent taxes) | LEFT OUT | Not camera-relevant. |
| municipalProgram $28 fee, 2000 vote, 2001 start | LEFT OUT | Not camera-relevant. |
| municipalProgram owner (not tenant) must apply, seller applies | LEFT OUT | Buying page. |
| municipalProgram policy date and funding caveat | ADAPTED (section 3) | "March 2026 policy" named. |
| municipalProgram covers (3 items) | ADAPTED (section 3) | Defect list used. |
| municipalProgram doesNotCover (5 items) | ADAPTED (section 3) | Roots and cabling used; other four not camera-relevant. |
| municipalProgram steps | ADAPTED (section 3) | Cabling first and City televising used; $200 fee and packet left out. |
| municipalProgram callout | USED (section 3) | |
| secondOpinion | LEFT OUT | Independent-inspection page. |
| buyingGuide body (none found, seller applies) | ADAPTED (section 4) | "None found" kept; seller-applies line left out. |
| nearbyAreas, finalCta | LEFT OUT | Shell. |
| FAQ (10) | LEFT OUT here, merged by the upgrade module | |
| sources | LEFT OUT | Upgrade module. |

## Sewer camera inspection service page (v2), element by element

Same table as `sl-stl-city-camera.md`. Used on this page: limits can/cannot (standing water, slope not measured, roots), `ask` (where along the line), `keep`, decision (not used), independent note. Signals, process, comparison, evidence, audiences, markets, FAQ and request are LEFT OUT (supplied by the upgrade module or not part of this shape).
