# Source report: St. Charles, MO + Sewer Cleaning & Camera Inspection (`sl-st-charles-cleaning-camera`)

Sources: local = `content/pages/st-louis-st-charles.tsx` (`stCharlesContent`, `loc-stl-st-charles`); service = `content/pages/services.tsx`, `svc-sewer-cleaning-camera-inspection` `v2`; shared blocks = `./sl-blocks/sewer-cleaning-camera-inspection.ts` (problems, inclusions, shots).
Output: `content/pages/sl-stl-st-charles-cleaning-camera.tsx` (`stCharlesCleaningCameraContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.
St. Charles runs its own sewer system (outside MSD). No MSD fact or number is used.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. A City-run system, and cleaning cannot tell you where the lateral ends | responsibility answer (Sewer Division, not MSD; Code lateral definition; owner obtains bids), responsibility note (no rule on ownership under the street) | cleaning does not show which side of the main a restriction was on; footage distance count does not establish where the main is |
| 2. The City asks for a cabled line, then sends its own camera | whoToCall P1, municipalProgram steps 1 and 3, callout (no replacement, no acceptance claim), doesNotCover 4 (inspection cost if sound, undated sheet) | your own before/after record; no claim our work satisfies the cabling statement |
| 3. A 1986 median home does not answer whether the line is clear | housingAge (median 1986, 62% 1980+), afterCensus P1 (no published pipe material or era) | a clog that returns: buildup remains or a pipe condition; cleaning plus a camera look can help show which |
| 4. What stays with the owner, and what the footage is for | municipalProgram lede (90%, $7,500, a share stays with the owner), afterSteps (fee revenue; no published fund balance, waiting list or processing time), agency (636) 949-3363 | a clear video is not proof the whole line is sound; footage is what you compare a repair estimate against; we do not repair; company phone via `marketOperatingDetail` |

Page notes (referenced above as "SEE NOTES"):
- Company phone: USED in section 4 via `marketOperatingDetail['st-louis-mo']` (as the LV cleaning-camera page, minus its "newer market" sentence).
- City numbers ((636) 949-3363 Public Works, (636) 949-3222 Community Development), the $50 inspection fee and the 90 percent / $7,500 terms are the City's, labelled so.
- buyingGuide is used only for the problem card where the card table says so.

## St. Charles location page, element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | ADAPTED | Page-specific for this service. |
| hero title/intro | ADAPTED | Not-MSD, owner-arranged lateral fact tied to this service. |
| heroForm (bullets, card, note) | LEFT OUT | Shell supplies the request form. The City backup guidance in the note is used where the page notes say. |
| keyTakeaways 1 (City runs its own system; MSD guidance does not apply) | USED | Section 1 / hero. |
| keyTakeaways 2 (90%, $7,500, $28 fee, owner share) | ADAPTED | Program terms used as the City's; $28 fee left out on this page (not about this service). |
| keyTakeaways 3 (camera gives evidence) | ADAPTED | Service framing. |
| jumpNav, serviceCards, reviewBand | LEFT OUT | Location page furniture. |
| responsibility answer, cards, table | ADAPTED | Sewer Division / owner split. |
| responsibility note (no rule on ownership under the street) | ADAPTED | Used as "we did not find a published rule". |
| systemExplainer P1 (MSD service area comparison) | LEFT OUT | MSD content is not used on any St. Charles page. |
| systemExplainer P2 (combined/separate not stated) | LEFT OUT | Negative statement. |
| systemExplainer P3 (Newtown vacuum system) | SEE NOTES | Used only where the page notes say. |
| systemExplainer P4 (Hackmann Road manhole) | SEE NOTES | Used only where the page notes say. |
| systemExplainer P5 (a public project says nothing about one lateral) | ADAPTED | |
| systemExplainer card (camera can show) | SEE NOTES | Camera page only. |
| housingAge paragraph (median 1986, ~32,300 units, 62%, 7%) | ADAPTED | Published by the location page as stated, sourced fact; cited in prose. |
| housingAge censusTable | LEFT OUT | Table not carried; arithmetic cited in prose. |
| housingAge afterCensus, table, sourceNote | ADAPTED | "No published pipe material or era" used. |
| whoToCall (P1-P3, agency, secondaryAgency, company) | ADAPTED | City numbers labelled the City's; company phone only where the page notes say. |
| municipalProgram lede, covers, doesNotCover, whoCanApply, steps, afterSteps, callout | ADAPTED | See body rows; undated-sheet exclusions flagged "confirm with Public Works". |
| municipalProgram closing (lateral inspection & reporting link) | LEFT OUT | Not part of this content shape. |
| secondOpinion | LEFT OUT | Repair-recommendation material. |
| buyingGuide | SEE NOTES | Used only where the page notes say. |
| nearbyAreas | ADAPTED | Coverage block: St. Louis City, Chesterfield, Ballwin, Florissant. |
| finalCta | ADAPTED | New CTA for this page. |
| sources | USED | Page carries `stCharlesContent.sources`. |
| Image slots | ADAPTED | New per-page slots, neutral alt text. |

## Cards

| Card | Status | Source |
|---|---|---|
| Three service cards | USED | `SERVICE_PROBLEMS` / sl-blocks (service signals) |
| Sewage backing up into your home (location card) | ADAPTED | hero note (City guidance: plumber or drainlayer cables the lateral, then Public Works) and whoToCall P1; visit outcome from the service page |
| Six inclusions | USED | `SERVICE_INCLUSIONS` / sl-blocks |

## Service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta written (under 160 characters). |
| serviceDescription | ADAPTED | City of St. Charles, Missouri added. |
| hero scope, cardTitle, definition | ADAPTED / LEFT OUT | Definition feeds serviceDescription; hero card is the service template's. |
| signals | USED 3 (via the shared blocks) | Remaining signals have no local tie. |
| limits (can / cannot / callout / related) | ADAPTED | See the body table. |
| process steps (confirmed equipment names, plain mention inside the step) | USED | Lifted unchanged. |
| decision, comparison, ask, evidence, audiences, markets | LEFT OUT | Neutral, no local tie. |
| FAQ | USED all except: none | Cost answer (DEC-088 wording) carried as published. |
| Location FAQ (10 questions) | USED all except: "What does a sewer camera inspection show?" filtered out before the merge (service page asks the same question with the fuller answer) | Merged under the "In St. Charles" pill. |
| relatedPageIds, cta | ADAPTED | |

## Facts to double-check

- Program exclusions taken from the City's undated information sheet (initial cabling, City camera cost if the line is sound, repeat claims within 12 months) are flagged on the page as "confirm with Public Works".
- The $28 annual fee versus the older $20 figure is a location-page uncertainty; the fee is not stated on this page.
- Census shares (62 percent 1980 or later, 7 percent 1939 or earlier) are our arithmetic on the location page's table, as the location page states.
- No St. Charles backup phone number exists in the sources; the page says none was found where relevant.
