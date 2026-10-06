# Source report: `sl-nlv-maintenance` (City of North Las Vegas, NV + Preventative Sewer Maintenance)

Page module: `content/pages/sl-nlv-maintenance.tsx` (`northLasVegasMaintenanceContent`).
Model: `content/pages/sl-lv-city-maintenance.tsx` (approved). Shared blocks: `content/pages/sl-blocks/preventative-sewer-maintenance.ts`.

Sources: the North Las Vegas location page (`content/pages/las-vegas-north-las-vegas.tsx`, `northLasVegasContent`, `loc-lv-north-las-vegas`) and the service page (`content/pages/services.tsx`, `svc-preventative-sewer-maintenance`, `v2`). No new research.

Status key: **USED** = verbatim or near-verbatim; **ADAPTED** = fact kept, wording rewritten or trimmed; **LEFT OUT** = not on this page, with the reason.

## The four body sections and their sources

| # | h2 | Local source | Service source |
| --- | --- | --- | --- |
| 1 | The City ties a blockage to your pipe all the way to the main | `responsibility.answer` p1-p2, `responsibility.table` rows 1-2, `systemExplainer.card.closing` (distance count; not the connection) | definition and visit steps (camera pass, cleaning if buildup is present) |
| 2 | A breakage is worded differently, and cleaning does not fix one | `responsibility.answer` p2, `responsibility.table` row 3, `municipalProgram` lede and closing | scope (cleaning and diagnostics, not repair); video and written findings |
| 3 | No system age or schedule on the City pages, so the line decides | `systemExplainer` (combined/separate, age, local conditions not stated) | FAQ 'Do all homes need routine sewer cleaning?' and 'How often should I schedule it?'; signals 'Known risk factors' |
| 4 | Who to call, and what a maintenance visit is not | `whoToCall.agency` (702-633-1484), `responsibility.table` row 4, `municipalProgram.doesNotCover` 4, `buyingGuide.body` (insurance) | not an emergency response; does not replace any review |

## Other page fields

| Field | Built from |
| --- | --- |
| `seoTitle`, `metaDescription`, `serviceDescription` | Service `serviceDescription`, localized; meta carries the blockage-to-the-main fact (147 characters) |
| `hero.intro` | `responsibility.answer` (blockage statement) + service definition |
| `problems` 1-3 | Service signals, shared block (verbatim) |
| `problems` 4 (local card) | `responsibility.table` row 2 (blockage to the main) + `systemExplainer.card.closing` (not the connection) |
| `inclusions` (6), `process` | Shared block and service `process.steps`, verbatim |
| `coverage` | Las Vegas, Henderson, Summerlin; 'North Las Vegas is a service area, not an office location.' |
| `relatedPageIds` | North Las Vegas location page, this service, camera inspection, sewer cleaning (as the City model) |
| `cta` | Page-specific |
| FAQ | 6 North Las Vegas questions (10 minus 4) + 15 service questions = 21 |
| Image alt text | Neutral wording, as the City model |

## City of North Las Vegas location page: every section

| Section / element | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific versions written. |
| hero.title, hero.intro | ADAPTED | Intro restates the blockage statement. |
| heroForm, faqHeading, faqSchemaApproved | LEFT OUT | Location shell and template-level fields. |
| keyTakeaways 1, 2 | ADAPTED | Sections 1-2 and 4. |
| keyTakeaways 3 (no City program) | ADAPTED | Section 2. |
| keyTakeaways.jumpNav, serviceCards | LEFT OUT | Navigation and layout of the location page. |
| responsibility.answer, cards, table rows 1-4 | ADAPTED | Sections 1, 2 and 4. |
| responsibility.table rows 5-6 | ADAPTED | Number in section 4; 'does not establish the connection' in section 1. |
| responsibility.note | LEFT OUT | Undated pages are in the sources list. |
| systemExplainer p1 (Utilities Department; Water Reclamation Facility) | LEFT OUT | Reclamation facility is not relevant to maintenance. |
| systemExplainer 'City main', 'Blockages and breakages', 'A City-side finding' | ADAPTED | Sections 1, 2 and 4. |
| systemExplainer 'combined or separate / age / local conditions not stated' | USED | Section 3. |
| systemExplainer.card bullets | LEFT OUT | The service page's lists are fuller. |
| systemExplainer.card.closing | ADAPTED | Section 1 (measured from where the camera entered; not the connection). |
| housingAge | LEFT OUT | No housing-age section on the location page; no year-built figure invented. |
| whoToCall.paragraphs, agency | ADAPTED | Section 4, labelled the City's number, not ours; customer service, not a sewer emergency line. |
| whoToCall.company | LEFT OUT | Company statement stays on the location page; no company phone in body copy. |
| municipalProgram lede | ADAPTED | 'No City repair, grant or reimbursement program for a lateral' in section 2. |
| municipalProgram covers 1-4 | ADAPTED | Sections 1, 2 and 4. |
| municipalProgram covers 5 (third-party plan) | LEFT OUT | Not a maintenance subject; kept in the FAQ (USED). |
| municipalProgram doesNotCover 4 (permit or inspection rule) | ADAPTED | Section 4: no City statement that cleaning or a camera inspection needs a permit or inspection. |
| municipalProgram doesNotCover 1-3, 5-6 | LEFT OUT | Not needed by a maintenance visit; 3 (how video is submitted) is stated in section 4 as 'We did not find how'. |
| municipalProgram.callout | ADAPTED | Section 4 ('ask the Utilities Department which rules apply to your address'). |
| municipalProgram.closing (we do not repair) | ADAPTED | Section 2. |
| secondOpinion, buyingGuide.links, cta, agents | LEFT OUT | Not maintenance subjects. |
| buyingGuide.body (insurance) | ADAPTED | Last sentence of section 4. Sale-time and Start New Service content left out. |
| nearbyAreas | ADAPTED | Became coverage. |
| FAQ 1-5, 8 | USED | Merged FAQ. |
| FAQ 6 Sale-time inspection requirement | LEFT OUT | Not about maintenance. |
| FAQ 7 Start water and sewer service when buying | LEFT OUT | Not about maintenance. |
| FAQ 9 What does a sewer camera inspection show | LEFT OUT | The service FAQ asks 'What does a sewer camera inspection find?'. |
| FAQ 10 Do you repair or replace sewer lines | LEFT OUT | The service FAQ 'Do you offer sewer repair or replacement?' answers it in full. |
| finalCta, sources | LEFT OUT / ADAPTED | cta page-specific; sources passed through as `northLasVegasContent.sources`. |

## Preventative Sewer Maintenance service page (v2)

| Section / item | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription, serviceDescription | LEFT OUT / ADAPTED | Page-specific; definition set in the City of North Las Vegas. |
| signals ('Signs it may be time') | USED | Problem cards 1-3 (shared block). |
| definition, visit steps, scope bullets | ADAPTED | Sections 1-2 and the shared inclusions. |
| 'does not need a default schedule', risk factors | ADAPTED | Section 3; no interval stated. |
| process (steps) | USED | Process block, verbatim. |
| inclusions (6) | USED | Shared block. |
| FAQ (15) | USED | All 15. |
| comparison, evidence, audiences, markets, request | LEFT OUT | Template bands. |
| relatedPageIds | ADAPTED | Camera inspection and sewer cleaning retained; North Las Vegas location page added. |

## City of North Las Vegas location page: facts shared by all three pages

| Fact | Source |
| --- | --- |
| Homeowner responsibility for the sewer service lateral ends at the connection to the main in the street | City Water Leaks page (undated, accessed 2026-10-04) |
| Blockage: homeowner responsible throughout the entire pipe until the connection to the City main. Breakage: until the point the line crosses the property boundary. Shown as worded, never reconciled | City Water Leaks page |
| Plumber-determined City-side problem: video evidence may be submitted to the Utilities Department for review. How, and what follows, not found | City Water Leaks page |
| Utilities Department, Operations division, provides water and sewer service | City Water page |
| 702-633-1484, the City's customer-service number and online request, not a sewer emergency line. No emergency, after-hours number or hours found | City utility portal (footer reads 2023) |
| No City lateral repair, grant or reimbursement program found ("none found", not a statement none exists) | City Water Leaks and Water pages |
| Optional Service Line Warranties of America plan; separate company; no price or terms found; The Sewer Pros has no connection | City Water Leaks page |
| Most basic homeowner's insurance policies do not cover service laterals | City Water Leaks page |
| No sale-time inspection, certification or disclosure rule found; state rules not addressed | City pages reviewed |
| Start New Service request for movers; no lateral statement in it | City utility portal |
| System combined or separate, age of mains, local recurring conditions: not stated | City pages reviewed |
| No housing-age (Census) section: tables B25034/B25035 for North Las Vegas not supplied, so no year-built figure on any page | Location page header comment |
