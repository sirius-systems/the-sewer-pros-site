# Source report: St. Charles, MO + Hydro Jetting (`sl-st-charles-hydro`)

Sources: local = `content/pages/st-louis-st-charles.tsx` (`stCharlesContent`, `loc-stl-st-charles`); service = `content/pages/services.tsx`, `svc-hydro-jetting` `v2`; shared blocks = `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS`, `SERVICE_PROBLEM_SHOTS` in `service-location-shared.ts`.
Output: `content/pages/sl-stl-st-charles-hydro.tsx` (`stCharlesHydroContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.
St. Charles runs its own sewer system (outside MSD). No MSD fact or number is used.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Why the method is matched to a lateral the owner arranges work on | responsibility answer (Sewer Division; Code lateral definition; owner obtains bids) | jetting for accessible private lines; water paced to the line (added water can contribute to a backup); camera first when included |
| 2. What jetting can clear, and what the City's program is for | municipalProgram lede (90%, $7,500), covers 1 (patching or replacement of a defective lateral) | limits: can clear grease, debris, loose roots, buildup; cannot correct crack, offset, collapse, low spot; we do not repair |
| 3. St. Charles homes are mostly from 1980 on, but jetting depends on the pipe | housingAge (median 1986, 62% 1980+, 7% 1939 or earlier), afterCensus P1 (no published pipe material or era) | jetting depends on pipe condition and material; structural defects call for closer evaluation first |
| 4. Before you jet: cabling, and the City's contacts | whoToCall P1, municipalProgram step 1 (cabling certification), agency (636) 949-3363, secondaryAgency (636) 949-3222 | jetting is a different method from cabling; no claim it satisfies the certification; "we will say so plainly" if beyond cleaning |

Page notes (referenced above as "SEE NOTES"):
- Company phone: LEFT OUT (as the LV hydro pages).
- City numbers ((636) 949-3363 Public Works, (636) 949-3222 Community Development), the $50 inspection fee and the 90 percent / $7,500 terms are the City's, labelled so.
- No pressure or flow figure appears in the body copy.
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
| Buying a St. Charles home (location card) | ADAPTED | buyingGuide body (no sale-time rule found, no sewer-lateral disclosure rule found) and the LV hydro model's "cleaning is not an inspection" |
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
| FAQ | USED all except: none (cost and same-day answers carried as published, DEC-088/DEC-139) | Cost answer (DEC-088 wording) carried as published. |
| Location FAQ (10 questions) | USED all except: none (the location page has no utility-transfer question) | Merged under the "In St. Charles" pill. |
| relatedPageIds, cta | ADAPTED | |

## Facts to double-check

- Program exclusions taken from the City's undated information sheet (initial cabling, City camera cost if the line is sound, repeat claims within 12 months) are flagged on the page as "confirm with Public Works".
- The $28 annual fee versus the older $20 figure is a location-page uncertainty; the fee is not stated on this page.
- Census shares (62 percent 1980 or later, 7 percent 1939 or earlier) are our arithmetic on the location page's table, as the location page states.
- No St. Charles backup phone number exists in the sources; the page says none was found where relevant.
