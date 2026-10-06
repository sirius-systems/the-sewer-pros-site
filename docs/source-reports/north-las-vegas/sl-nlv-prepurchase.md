# Source report: `sl-nlv-prepurchase` (City of North Las Vegas, NV + Pre-Purchase Sewer Inspection)

Page module: `content/pages/sl-nlv-prepurchase.tsx` (`northLasVegasPrePurchaseContent`).
Model: `content/pages/sl-lv-city-prepurchase.tsx` (approved). Shared blocks: `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS`, `SERVICE_PROBLEM_SHOTS` in `content/pages/service-location-shared.ts`.

Sources: the North Las Vegas location page (`content/pages/las-vegas-north-las-vegas.tsx`, `northLasVegasContent`, `loc-lv-north-las-vegas`) and the service page (`content/pages/services.tsx`, `svc-pre-purchase-sewer-inspection`, `v2`). No new research.

Status key: **USED** = verbatim or near-verbatim; **ADAPTED** = fact kept, wording rewritten or trimmed; **LEFT OUT** = not on this page, with the reason.

## The four body sections and their sources

| # | h2 | Local source | Service source |
| --- | --- | --- | --- |
| 1 | What you take on when a North Las Vegas sale closes | `responsibility.answer` p1, `buyingGuide.lede` (after closing the lateral is yours), `systemExplainer.card.closing` (distance count; not the connection) | limits (visible conditions, day of the visit) |
| 2 | No sale-time rule found, so you have to ask | `buyingGuide.body` (none found, state rules not addressed, Start New Service), `municipalProgram.closing` | definition ('no legal advice'); independent (no repair) |
| 3 | The City words a blockage and a breakage differently | `responsibility.answer` p2, `responsibility.table` rows 2-3 | limits.callout ('a clear line is not proof'); FAQ 'What does a clear sewer scope mean?' |
| 4 | Insurance, optional coverage and who to call before you close | `buyingGuide.body` (insurance), `municipalProgram.covers` 4-5 (video review path, third-party plan), `whoToCall.agency` (702-633-1484) | ask.items 'Line locating'; signals 'Plans to dig after you buy' |

## Other page fields

| Field | Built from |
| --- | --- |
| `seoTitle`, `metaDescription`, `serviceDescription` | Service `serviceDescription`, localized; meta carries the lateral-to-the-main and no-sale-rule facts (156 characters) |
| `hero.intro` | `responsibility` + service definition |
| `problems` 1-3 | Service signals, shared block (verbatim) |
| `problems` 4 (local card) | `municipalProgram.covers` 4 (City-side video review, how not found) + service signal 'A short inspection period' |
| `inclusions` (6), `process` | Shared block and service `process.steps`, verbatim |
| `coverage` | Las Vegas, Henderson, Summerlin; statement 'North Las Vegas is a service area, not an office location.' (the location page says no office, address or GBP appears) |
| `relatedPageIds` | North Las Vegas location page, this service, camera inspection, line locating (as the City model) |
| `cta` | Page-specific |
| FAQ | 8 North Las Vegas questions (10 minus 2) + 28 service questions (29 minus 1) = 36 |
| Image alt text | Neutral wording; the location page allows North Las Vegas wording only for a photo taken at a North Las Vegas-area property |

## City of North Las Vegas location page: every section

| Section / element | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific versions written. |
| hero.title, hero.intro | ADAPTED | Intro restates the lateral-to-the-main line for a buyer. |
| heroForm (bullets, card, note, backdrop) | LEFT OUT | Location page shell; template supplies the form. The 'newer market for us' bullet is a company statement kept on the location page. |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level. |
| keyTakeaways 1 (responsibility ends at the main; blockage/breakage separate) | ADAPTED | Sections 1 and 3. |
| keyTakeaways 2 (camera records where; video may go to Utilities Department) | ADAPTED | Sections 1 and 4. |
| keyTakeaways 3 (no City repair/grant/reimbursement program) | LEFT OUT | Trimmed for length; the fact stays on the location page and in the FAQ (USED). |
| keyTakeaways.jumpNav | LEFT OUT | Navigation of the location page. |
| serviceCards (nine, helpBar) | LEFT OUT | Not a page field here; related services come through relatedPageIds. |
| responsibility.answer p1 (boundary at the main; Utilities Department, Operations division) | ADAPTED | Section 1 (the Operations-division sentence was cut for length). |
| responsibility.answer p2 (blockage vs. breakage in the City's words; not reconciled; camera does not establish either point) | ADAPTED | Section 3. |
| responsibility.cards (City main; sewer service lateral) | ADAPTED | Folded into section 1. |
| responsibility.table rows 1-3 | ADAPTED | Sections 1 and 3. |
| responsibility.table row 4 (City-side problem; video review) | ADAPTED | Section 4 and problem card 4. |
| responsibility.table rows 5-6 (who to contact; where an inspection helps) | ADAPTED | Section 4 (number) and section 1 (what a scope does not establish). |
| responsibility.note (not legal advice; undated pages; no claim about how video is submitted) | ADAPTED | 'Not legal advice' in section 2; undated pages are in the sources list; the video caveat is in section 4. |
| systemExplainer p1 (Utilities Department; Water Reclamation Facility, membrane bioreactor) | LEFT OUT | Water Reclamation Facility is not relevant to a purchase. |
| systemExplainer 'City main and your connection', 'Blockages and breakages', 'A City-side finding' | ADAPTED | Sections 1, 3 and 4. |
| systemExplainer 'combined or separate / age / local conditions not stated' | LEFT OUT | Not used by this service (used on the backup and maintenance pages). |
| systemExplainer 'nothing tells you the condition of any lateral' | LEFT OUT | The scope-specific limits in section 3 carry the point. |
| systemExplainer.card bullets | LEFT OUT | The service page's can/cannot lists are fuller; FAQ carries them. |
| systemExplainer.card.closing (distance count; not the connection or where responsibility ends) | ADAPTED | Section 1. |
| housingAge | LEFT OUT | The location page has no housing-age section (Census tables not supplied). Nothing invented. |
| whoToCall.paragraphs | LEFT OUT | General routing; the buyer-relevant part is in section 4. |
| whoToCall.agency (702-633-1484; customer service and online request; no emergency line) | ADAPTED | Section 4, labelled the City's number, not ours. No hours or after-hours statement was added beyond 'not a sewer emergency line'. |
| whoToCall.company ('newer market for us', company phone and hours) | LEFT OUT | Company statement stays on the location page. No company phone on this page, as in the City model. |
| municipalProgram.lede (none found) | ADAPTED | Dropped from section 2 for length; the fact is in the FAQ (USED). |
| municipalProgram.covers 1-3 (boundary, blockage, breakage) | ADAPTED | Sections 1 and 3. |
| municipalProgram.covers 4 (video evidence for City-side problem) | ADAPTED | Section 4 and problem card 4. |
| municipalProgram.covers 5 (third-party plan, City's words) | ADAPTED | Section 4: separate company, no price or terms, no connection to us. 'Will not affect City service' left out for length. |
| municipalProgram.doesNotCover 1-2 (no grant; who pays on the City side) | LEFT OUT | The program fact is in the FAQ (USED). We make no claim on who pays on the City side. |
| municipalProgram.doesNotCover 3 (how video is submitted) | ADAPTED | Section 4 ('We did not find how'). |
| municipalProgram.doesNotCover 4 (permit or inspection rule for lateral work) | LEFT OUT | Not asked of a buyer. |
| municipalProgram.doesNotCover 5-6 (emergency line; combined/separate) | LEFT OUT | Not buyer-specific. |
| municipalProgram.callout (ask Utilities Department; camera does not tell which approvals apply) | ADAPTED | Section 3 ('Ask the Utilities Department how both statements apply'). |
| municipalProgram.closing (we do not repair; nothing says an agency pays for our services) | ADAPTED | 'Does not repair or replace' in section 2. |
| secondOpinion (ledes, steps, callout) | LEFT OUT | Belongs to the independent-inspection page. |
| buyingGuide.lede (scope vs. home inspector; lateral is yours after closing) | ADAPTED | Section 1; 'ask your home inspector' comes through the service FAQ (USED). |
| buyingGuide.body (no sale rule found; state rules not addressed; Start New Service; insurance) | ADAPTED | Sections 2 and 4. |
| buyingGuide.links, cta, agents | LEFT OUT | Audience-page links are not page fields here. |
| nearbyAreas | ADAPTED | Became coverage (Las Vegas, Henderson, Summerlin). 'All Las Vegas service areas' left out. |
| FAQ 1 Who is responsible for the sewer lateral | USED | Merged FAQ. |
| FAQ 2 Blockage vs. breakage | USED | Merged FAQ. |
| FAQ 3 Plumber says City side | USED | Merged FAQ. |
| FAQ 4 Does the City help pay | USED | Merged FAQ. |
| FAQ 5 Who do I call | USED | Merged FAQ. |
| FAQ 6 Sale-time inspection requirement | USED | Merged FAQ. |
| FAQ 7 Start water and sewer service when buying | USED | Merged FAQ; directly relevant to a buyer. |
| FAQ 8 Optional coverage | USED | Merged FAQ. |
| FAQ 9 What does a sewer camera inspection show | LEFT OUT | Duplicate; the service FAQ answers it as 'What does a sewer scope look for?' and 'What does a sewer inspection not show?'. |
| FAQ 10 Do you repair or replace sewer lines | USED | Merged FAQ. |
| finalCta | LEFT OUT | Page-specific cta written; form is template-level. |
| sources (3 links, lastReviewed, closingNote) | ADAPTED | Passed through as `sources: northLasVegasContent.sources`. |

## Pre-Purchase Sewer Inspection service page (v2)

| Section / item | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific versions written. |
| serviceDescription | ADAPTED | Same definition, set in the City of North Las Vegas. |
| hero.intro, definition | ADAPTED | Intro and sections 1-2; no-repair statement in section 2 and FAQ. |
| signals 1, 2, 5 | USED | Problem cards 1-3 (shared block). |
| signals 3 (drain trouble mentioned during the sale) | LEFT OUT | Only three service cards are used. |
| signals 4 (a local sale requirement) | ADAPTED | Section 2, answered with North Las Vegas facts. |
| signals 6 (plans to dig after you buy) | ADAPTED | Locating line in section 4. |
| limits (can, cannot, callout) | ADAPTED | 'Clear is not proof' and sections-not-reached in sections 1 and 3; full lists in FAQ (USED). |
| process (5 steps) | USED | Process block, verbatim. |
| process.intro, process.prep | LEFT OUT | Not page fields. |
| decision, independent, comparison, ask.keep, evidence, audiences, markets, request | LEFT OUT | Template bands. |
| ask.items | ADAPTED | 'Records you can share' is inclusion 6 (USED); locating in section 4. |
| FAQ (29) | ADAPTED | 28 used; 'Is a sewer scope required when buying or selling a house?' left out (duplicate of the North Las Vegas question). |
| inclusions (6) | USED | Shared SERVICE_INCLUSIONS. |
| relatedPageIds | ADAPTED | Camera inspection and locating kept; North Las Vegas location page added. |

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

Open items: the exact section-1 sentence 'After closing, that homeowner is you' follows the location page's buyingGuide.lede ('the owner of the property, which is you').
