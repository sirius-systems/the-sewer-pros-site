# Source report: City of North Las Vegas, NV + Sewer Cleaning (`sl-nlv-cleaning`)

Sources: local = `content/pages/las-vegas-north-las-vegas.tsx` (`northLasVegasContent`, `loc-lv-north-las-vegas`); service = `content/pages/services.tsx`, `svc-sewer-cleaning` `v2`; shared blocks = `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS`, `SERVICE_PROBLEM_SHOTS` in `service-location-shared.ts`.
Output: `content/pages/sl-nlv-cleaning.tsx` (`northLasVegasCleaningContent`). Model: `content/pages/sl-lv-city-cleaning.tsx` (approved).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

Page facts: body about 429 words in four `<h2>` sections; metaDescription 148 characters; no company phone beyond: USED once in section 4 via `marketOperatingDetail['las-vegas-nv']` (`lv.phone`), as the City of Las Vegas cleaning page; the City number is labelled the City's.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. A blockage is yours to the City's main | responsibility answer P2 (blockage wording), responsibility table row "A blockage" and its "not found" column (where the connection sits), whoToCall (ask the Utilities Department) | definition scope: accessible private-property lines, not public mains |
| 2. A breakage is a different statement, and cleaning does not repair it | responsibility answer P2 (breakage wording; not reconciled) | decision (does not repair cracked, offset, separated or collapsed pipe), limits callout ("a line that flows again is not proof the pipe is sound"), methods (hydraulic or mechanical, chosen for the line) |
| 3. No City program, and an optional plan that is not one | municipalProgram lede (none found), covers 5 (Service Line Warranties of America, separate from the City; no terms published; no connection to us; not recommended), buyingGuide body (most basic homeowner's policies do not cover service laterals), closing (no repairs or replacements) | independent: The Sewer Pros does not sell repair or replacement |
| 4. If the blockage is on the City side | responsibility table row "A problem on the City side", whoToCall agency (702-633-1484, customer service and online request, not a sewer emergency line), municipalProgram doesNotCover permit item, whoToCall company (Las Vegas Valley is a newer market) | signals: "If sewage is actively backing up into your home, contact us to discuss the situation" (service text) |

Page notes (referenced above as "SEE NOTES"):
- The North Las Vegas location page has NO housing-age section (Census tables B25034/B25035 not supplied), so the City of Las Vegas model's housing section is replaced by a North Las Vegas fact. No housing figure appears anywhere on this page.
- No City of Las Vegas fact is reused: no Streets & Sanitation, Sanitary Sewer Engineering, Building & Safety, addenda, right-of-way or Census figure.
- The City number (702-633-1484) is labelled "the City's number, not ours" and described as customer service and online request, not a sewer emergency line, exactly as on the location page.
- Optional third-party plan: the location page shows it once, with no price, coverage or recommendation; where used here it carries the same limits.
- Permit: only "we found no City statement on whether it needs a permit" is used (location doesNotCover item 4).

## City of North Las Vegas location page, element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | ADAPTED | Page-specific for this service. |
| hero title/intro | ADAPTED | City blockage/breakage statement tied to this service. |
| heroForm (bullets, card, note) | LEFT OUT | Shell supplies the request form. |
| keyTakeaways 1 (boundary at the main; blockage and breakage in separate statements) | ADAPTED | Section 1 and hero. |
| keyTakeaways 2 (camera records where along the line; City-side video review) | ADAPTED | City-side path used where noted in the section table. |
| keyTakeaways 3 (no City program found) | ADAPTED | "None found" used. |
| jumpNav | LEFT OUT | Location page navigation. |
| serviceCards (9) | LEFT OUT | Not part of this content shape. |
| responsibility answer P1 (boundary at the main; Utilities Department, Operations division) | ADAPTED | Boundary sentence used; division description left out (agency description, not about this service). |
| responsibility answer P2 (blockage vs breakage, not reconciled) | ADAPTED | See section table. |
| responsibility cards (City's main; sewer service lateral) | LEFT OUT | Restates the answer. |
| responsibility table (6 rows) | ADAPTED | Rows "A blockage", "A breakage", "A problem on the City side" and "Where an inspection helps" feed the sections; table itself not reproduced. |
| responsibility note (no update date; confirm with the City) | ADAPTED | "Confirm with the City" wording; dates live in the sources block. |
| systemExplainer P1 (Utilities Department, Water Reclamation Facility, MBR) | LEFT OUT | Agency/plant description; not about this service. |
| systemExplainer P2-P4 (main and connection; blockage/breakage; City-side finding) | ADAPTED | Same facts as the responsibility rows; see section table. |
| systemExplainer P5 (combined/separate, age of mains not stated) | LEFT OUT | Negative statement; no claim made. |
| systemExplainer P6 (nothing tells you an individual lateral's condition) | LEFT OUT | Camera-page framing; not needed here. |
| systemExplainer card (what a camera can show; distance count) | LEFT OUT | Camera page only. |
| housingAge | LEFT OUT | The location page has none. |
| whoToCall paragraph, agency (702-633-1484) | ADAPTED | Labelled the City's number. |
| whoToCall company | SEE NOTES | USED once in section 4 via `marketOperatingDetail['las-vegas-nv']` (`lv.phone`), as the City of Las Vegas cleaning page; the City number is labelled the City's. |
| municipalProgram lede (none found) | USED | |
| municipalProgram covers 1-4 (boundary, blockage, breakage, City-side video) | ADAPTED | See section table. |
| municipalProgram covers 5 (Service Line Warranties of America plan) | ADAPTED | Used as the City's words, with no terms, no recommendation and no connection to us. |
| municipalProgram doesNotCover 1 (grant, reimbursement, application) | USED | "None found" statement. |
| municipalProgram doesNotCover 2 (who pays City side; City-caused damage) | LEFT OUT | No claim made on this page. |
| municipalProgram doesNotCover 3 (how video is submitted) | USED | "We did not find how it is submitted." |
| municipalProgram doesNotCover 4 (permit rule) | USED | "No City statement" wording. |
| municipalProgram doesNotCover 5 (emergency line, hours) | ADAPTED | Folded into "not a sewer emergency line". |
| municipalProgram doesNotCover 6 (combined/separate) | LEFT OUT | Negative statement. |
| municipalProgram callout | ADAPTED | "Ask the Utilities Department" wording. |
| municipalProgram closing (no repairs by us) | USED | Section text. |
| secondOpinion | LEFT OUT | Repair-recommendation material. |
| buyingGuide lede, body | LEFT OUT | Insurance sentence only, in section 3. |
| buyingGuide agents | LEFT OUT | Not about this service. |
| nearbyAreas | ADAPTED | Coverage block: Las Vegas, Henderson, Summerlin. |
| finalCta | ADAPTED | New CTA for this page. |
| sources | LEFT OUT | Page carries `northLasVegasContent.sources`. |
| Image slots | ADAPTED | New per-page slots (placeholders). |

Fixed by the owner brief, not stated on the City page: "North Las Vegas is a service area, not an office location." (consistent with the location page, which states no office, address or map pin).

## Cards

| Card | Status | Source |
|---|---|---|
| Several fixtures draining slowly at once; Clogs that keep coming back; Water rising through a floor drain, shower, or toilet | USED (3 cards) | SERVICE_PROBLEMS (service signals) |
| A blockage or a break (location card) | ADAPTED | responsibility answer P2 (blockage vs breakage statements); service decision (cleaning does not repair a break) |
| Six inclusions | USED | `SERVICE_INCLUSIONS` |

## Sewer Cleaning service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta written (148 characters). |
| serviceDescription | ADAPTED | City of North Las Vegas added. |
| hero scope, cardTitle | LEFT OUT | Hero card of the service template. |
| definition | ADAPTED (service description) | |
| signals | USED 3 (via `SERVICE_PROBLEMS`) | Rest have no local tie. |
| limits / decision / methods / independent | ADAPTED | See section table. |
| process | USED (5 steps; SeeSnake names appear only inside the Camera step). | |
| comparison, ask, audiences, markets, request | LEFT OUT | Neutral, no local tie. |
| FAQ (14 questions) | USED 14 | Includes "How long does sewer cleaning take, and how much does it cost?" as published. |
| Location FAQ (10 questions) | USED 9, LEFT OUT 1 | Left out: "How do I start water and sewer service when I buy a home in North Las Vegas?" (utility accounts; no bearing on cleaning a line). Questions carried include the City responsibility, blockage vs breakage, City-side, program, who-to-call, sale-rule, optional-coverage and "Do you repair or replace sewer lines?" answers. |
| relatedPageIds, cta | ADAPTED | |

## Facts to double-check

- Insurance sentence ("most basic homeowner's insurance policies do not cover service laterals") is the City's statement as the location page records it; the page is undated.
- "Service Line Warranties of America" is named only where the City's own words are used (section text and FAQ).
- Image-slot alt text says "North Las Vegas home" as the City of Las Vegas pages did; the location page says to use that wording only for a photo from a North Las Vegas-area property.
