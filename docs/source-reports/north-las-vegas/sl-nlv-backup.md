# Source report: `sl-nlv-backup` (City of North Las Vegas, NV + Recurring Sewer Backup Diagnosis)

Page module: `content/pages/sl-nlv-backup.tsx` (`northLasVegasBackupContent`).
Model: `content/pages/sl-lv-city-backup.tsx` (approved). Shared blocks: `content/pages/sl-blocks/recurring-sewer-backup-diagnosis.ts`.

Sources: the North Las Vegas location page (`content/pages/las-vegas-north-las-vegas.tsx`, `northLasVegasContent`, `loc-lv-north-las-vegas`) and the service page (`content/pages/services.tsx`, `svc-recurring-sewer-backup-diagnosis`, `v2`). No new research.

Status key: **USED** = verbatim or near-verbatim; **ADAPTED** = fact kept, wording rewritten or trimmed; **LEFT OUT** = not on this page, with the reason.

## The four body sections and their sources

| # | h2 | Local source | Service source |
| --- | --- | --- | --- |
| 1 | A repeat backup: your whole lateral, or the City side? | `responsibility.answer` p1-p2, `responsibility.table` rows 1-3, `systemExplainer.card.closing` | limits (findings apply to the segment inspected, do not by themselves establish responsibility); FAQ 'Is a recurring backup the city's problem or mine?' |
| 2 | If a plumber says it is on the City side | `responsibility.table` row 4, `municipalProgram.covers` 4 and doesNotCover 3, 5, `whoToCall.agency` (702-633-1484; no emergency line, after-hours number or hours) | independent; ask.keep (keep the video) |
| 3 | The City pages cannot tell you why your line keeps backing up | `systemExplainer` (combined/separate, age, local conditions not stated; nothing tells the condition of a lateral) | `causes` and FAQ 'Why does my sewer keep backing up?'; FAQ 'Why does my sewer back up again after it was cleared?' |
| 4 | No City program or insurance to lean on, so get the evidence first | `municipalProgram` lede, covers 5 (third-party plan), closing; `buyingGuide.body` (insurance) | `independent.note`; ask.keep (compare written estimates) |

## Other page fields

| Field | Built from |
| --- | --- |
| `seoTitle`, `metaDescription`, `serviceDescription` | Service `serviceDescription`, localized; meta carries the blockage/breakage wording (153 characters) |
| `hero.intro` | `responsibility.answer` (blockage statement) + service intro |
| `problems` 1-3 | Service signals, shared block (verbatim) |
| `problems` 4 (local card) | `municipalProgram.covers` 4 (City-side video review, how not found) + service limits (not the City side) |
| `inclusions` (6), `process` | Shared block and service `process.steps`, verbatim |
| `coverage` | Las Vegas, Henderson, Summerlin; 'North Las Vegas is a service area, not an office location.' |
| `relatedPageIds` | North Las Vegas location page, this service, camera inspection, cleaning with camera (as the City model) |
| `cta` | Page-specific |
| FAQ | 8 North Las Vegas questions (10 minus 2) + 29 service questions = 37, including the DEC-088 cost and same-day answers carried as published |
| Image alt text | Neutral wording, as the City model |

## City of North Las Vegas location page: every section

| Section / element | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific versions written. |
| hero.title, hero.intro | ADAPTED | Intro restates the blockage statement. |
| heroForm, faqHeading, faqSchemaApproved | LEFT OUT | Location shell and template-level fields. |
| keyTakeaways 1-2 | ADAPTED | Sections 1-2. |
| keyTakeaways 3 (no City program) | ADAPTED | Section 4. |
| keyTakeaways.jumpNav, serviceCards | LEFT OUT | Navigation and layout of the location page. |
| responsibility.answer p1-p2, cards, table rows 1-4 | ADAPTED | Sections 1-2; the boundary and 'where the connection sits' limits are stated in section 1. |
| responsibility.table rows 5-6 | ADAPTED | Number in section 2; 'camera does not establish the connection or boundary' in section 1. |
| responsibility.note | LEFT OUT | Undated pages are in the sources list; the video caveat is in section 2. |
| systemExplainer p1 (Utilities Department; Water Reclamation Facility) | LEFT OUT | Not relevant to a diagnosis. |
| systemExplainer 'City main', 'Blockages and breakages', 'A City-side finding' | ADAPTED | Sections 1-2. |
| systemExplainer 'combined or separate / age / local conditions not stated', 'nothing tells the condition' | USED | Section 3. |
| systemExplainer.card bullets | LEFT OUT | The service page's lists are fuller. |
| systemExplainer.card.closing | ADAPTED | Section 1 (where along the line; not the connection). |
| housingAge | LEFT OUT | No housing-age section on the location page; no year-built figure invented. |
| whoToCall.paragraphs | ADAPTED | Section 2 (a diagnosis is what you bring). |
| whoToCall.agency | ADAPTED | Section 2, labelled the City's number, not ours; customer service, not a sewer emergency line; no after-hours number or hours found. |
| whoToCall.company | LEFT OUT | Company statement stays on the location page; no company phone in body copy. |
| municipalProgram lede, covers 1-4 | ADAPTED | Sections 1, 2 and 4. |
| municipalProgram covers 5 (third-party plan) | ADAPTED | Section 4; price, terms and no-connection note kept short. |
| municipalProgram doesNotCover 1, 3, 5 | ADAPTED | Sections 2 and 4. |
| municipalProgram doesNotCover 2, 4, 6 | LEFT OUT | City-side payer, permit rule, combined/separate (4 and 6 not needed by a diagnosis; 6 is used from systemExplainer in section 3). |
| municipalProgram.callout | ADAPTED | Section 1 limits. |
| municipalProgram.closing (we do not repair) | ADAPTED | Section 4. |
| secondOpinion | LEFT OUT | Belongs to the independent-inspection page; 'compare written estimates' comes from the service. |
| buyingGuide (lede, body, links, cta, agents) | LEFT OUT | Not a backup subject; insurance sentence used in section 4. |
| nearbyAreas | ADAPTED | Became coverage. |
| FAQ 1-6, 8 | USED | Merged FAQ (FAQ 6, the sale question, is kept as in the City model). |
| FAQ 7 Start water and sewer service when buying | LEFT OUT | About starting utility service on a purchase, not a backup. |
| FAQ 9 What does a sewer camera inspection show | LEFT OUT | Duplicate of the service FAQ 'What can a sewer camera see?'. |
| FAQ 10 Do you repair or replace sewer lines | USED | Merged FAQ. |
| finalCta, sources | LEFT OUT / ADAPTED | cta page-specific; sources passed through as `northLasVegasContent.sources`. |

## Recurring Sewer Backup Diagnosis service page (v2)

| Section / item | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription, serviceDescription | LEFT OUT / ADAPTED | Page-specific; definition set in the City of North Las Vegas. |
| signals, shared problems 1-3 | USED | Problem cards 1-3. |
| causes | ADAPTED | Section 3 (from the FAQ answer). |
| limits | ADAPTED | Section 1. |
| independent, ask.keep | ADAPTED | Section 4. |
| process (steps) | USED | Process block, verbatim. |
| inclusions (6) | USED | Shared block. |
| FAQ (29) | USED | All 29, including cost ('free estimate') and same-day answers as published (DEC-088, DEC-139). |
| decision, comparison, evidence, audiences, markets, request | LEFT OUT | Template bands. |
| relatedPageIds | ADAPTED | Camera inspection and cleaning with camera retained; North Las Vegas location page added. |

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
