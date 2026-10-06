# Source report: `sl-summerlin-maintenance` (Summerlin, NV + Preventative Sewer Maintenance)

Page module: `content/pages/sl-summerlin-maintenance.tsx` (`summerlinMaintenanceContent`).
Model: `content/pages/sl-nlv-maintenance.tsx` (approved North Las Vegas version).

Sources: the Summerlin location page (`content/pages/las-vegas-summerlin.tsx`, `summerlinContent`, `loc-lv-summerlin`) and the service page (`content/pages/services.tsx`, `svc-preventative-sewer-maintenance`, `v2`). No new research.

Status key: **USED** = verbatim or near-verbatim; **ADAPTED** = fact kept, wording rewritten or trimmed; **LEFT OUT** = not on this page, with the reason.

## The four body sections and their sources

| # | h2 | Local source | Service source |
| --- | --- | --- | --- |
| 1 | Both Summerlin agencies put the lateral on the owner | `responsibility.answer` p1-p2, `responsibility.table` rows 1-2 and 5, `systemExplainer.card.closing` (distance count; not the connection) | definition and visit steps (camera pass, cleaning if buildup is present) |
| 2 | CCWRD names periodic cleaning and roots, and cleaning does not fix a defect | `responsibility.table` row 6, `systemExplainer` (CCWRD addresses), `municipalProgram` lede and closing | scope (cleaning and diagnostics, not repair); roots-and-cleaning limit (cleaning removes accessible roots, not the opening they came through; Recurring Sewer Backup Diagnosis service FAQ); video and written findings |
| 3 | No system age or schedule on the Summerlin pages, so the line decides | `systemExplainer` (combined/separate, age, soil or root conditions not stated) | FAQ 'Do all homes need routine sewer cleaning?' and 'How often should I schedule it?'; signals 'Known risk factors' |
| 4 | Who to call, and what a maintenance visit is not | `whoToCall.agency` and `secondaryAgency`, `municipalProgram.doesNotCover` 5-6 | not an emergency response; does not replace any review |

## Other page fields

| Field | Built from |
| --- | --- |
| `seoTitle`, `metaDescription`, `serviceDescription` | Service `serviceDescription`, localized ('in Summerlin, NV, in the Las Vegas Valley'; not called a city); meta carries the CCWRD periodic-cleaning wording (~144 characters) |
| `hero.intro` | `responsibility` + service definition |
| `problems` 1-3 | Service signals, shared block (verbatim) |
| `problems` 4 (local card) | `responsibility.table` rows 2 and 5 (owner wording) + `systemExplainer.card.closing` (not the agency, not the connection) |
| `inclusions` (6), `process` | Shared block and service `process.steps`, verbatim |
| `coverage` | Las Vegas, Henderson, North Las Vegas; 'Summerlin is a service area, not an office location.' |
| `relatedPageIds` | Summerlin location page, this service, camera inspection, sewer cleaning (as the North Las Vegas model) |
| `cta` | Page-specific |
| FAQ | 7 Summerlin questions (10 minus 3) + 16 service questions = 23 |
| Image alt text | Neutral wording, as the North Las Vegas model |

## Summerlin location page: every section

| Section / element | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific versions written. |
| hero.title, hero.intro | ADAPTED | Intro restates that both agencies describe the lateral as the owner's, and the service definition. |
| heroForm (bullets, card, note, backdrop) | LEFT OUT | Location page shell; template supplies the form. The 'newer market for us' bullet is a company statement kept on the location page. |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level. |
| keyTakeaways 1 (two jurisdictions, map for display only; two wordings) | ADAPTED | Section 1. |
| keyTakeaways 2 (City vs. CCWRD owner wording) | ADAPTED | Sections 1-2. |
| keyTakeaways 3 (no program found; camera records the line whichever agency serves it) | ADAPTED | Section 2 (no program found). |
| keyTakeaways.jumpNav, serviceCards (nine, helpBar) | LEFT OUT | Navigation and layout of the location page; related services come through relatedPageIds. |
| responsibility.answer p1 (split jurisdiction, map date, for display only, no parcel lookup) | ADAPTED | Section 1 ('for display only'; no parcel lookup implied by 'we do not say which side'). |
| responsibility.answer p2 (two agencies, two wordings, not merged) | ADAPTED | Section 1. |
| responsibility.cards (public main; private lateral) | ADAPTED | Folded into section 1. |
| responsibility.table row 1 (which agency applies) | ADAPTED | Section 1. |
| responsibility.table rows 2-3 (City: owner's lateral; through the right-of-way) | ADAPTED | Section 1 (the right-of-way wording is left out for length). |
| responsibility.table row 4 (City: a main stoppage) | LEFT OUT | of the body: a main stoppage is the City's concern, not a maintenance visit; the number is in section 4. |
| responsibility.table rows 5-6 (CCWRD: owner's lateral; upkeep and roots) | ADAPTED | Section 2 (CCWRD's periodic cleaning and roots). |
| responsibility.table row 7 (where an inspection helps) | ADAPTED | Section 1 (not the connection, not the agency). |
| responsibility.note (not legal advice; 2021 City post, undated CCWRD page) | LEFT OUT | dated and undated pages are in the sources list. |
| systemExplainer p1-p2 (more than one agency; two jurisdictions) | ADAPTED | Section 1. |
| systemExplainer City addresses ('private collector sewer', main stoppage, manhole overflow) | LEFT OUT | stoppage and manhole detail is not maintenance-specific. |
| systemExplainer CCWRD addresses (periodic cleaning, roots) | USED | section 2 (CCWRD's periodic cleaning; roots). |
| systemExplainer 'combined or separate / age / soil or root conditions not stated' | USED | section 3. |
| systemExplainer 'nothing tells the condition of any lateral' | USED | section 3 ('nothing on them points to a schedule for your line'). |
| systemExplainer.card bullets | LEFT OUT | The service page's can/cannot lists are fuller. |
| systemExplainer.card.closing (distance count; not the connection or where an agency's responsibility begins) | ADAPTED | Section 1 (measured from where the camera entered; not the connection). |
| housingAge | LEFT OUT | The location page has no housing-age section (no primary Census values, no single matching geography). Nothing invented. |
| whoToCall.paragraphs | LEFT OUT | ADAPTED in section 4 (routing to the serving agency). |
| whoToCall.agency (City, 702-229-6227) | ADAPTED | Section 4, labelled the City's number, not ours; no hours, after-hours or emergency line found. |
| whoToCall.secondaryAgency (CCWRD, 702-668-8354) | ADAPTED | Section 4, labelled CCWRD's number, not ours; email-for-photos detail not repeated. |
| whoToCall.company ('newer market for us', company phone and hours) | LEFT OUT | Company statement stays on the location page. No company phone on this page, as in the North Las Vegas model. |
| municipalProgram.lede (none found; two agencies) | ADAPTED | Section 2 ('We found no City or CCWRD lateral repair, grant or reimbursement program'). |
| municipalProgram.covers 1-3 (City owner wording; addenda; CCWRD wording) | ADAPTED | Sections 1 and 2. |
| municipalProgram.covers 4 (optional City-promoted warranty program) | LEFT OUT | of the body (not a maintenance subject); kept in the FAQ (USED). |
| municipalProgram.doesNotCover 1 (no grant, reimbursement or application process) | ADAPTED | Section 2. |
| municipalProgram.doesNotCover 2-3 (which addresses each agency serves; whether the warranty applies at an address) | LEFT OUT | of the body; the FAQ carries the warranty-applicability answer (USED). |
| municipalProgram.doesNotCover 4 (CCWRD statement on damage from its own work) | LEFT OUT | Not needed by this service; the fact stays in the location page FAQ. |
| municipalProgram.doesNotCover 5 (permit or inspection rule for lateral work, cleaning or camera inspection) | ADAPTED | Section 4: no City or CCWRD rule found on whether cleaning or a camera inspection needs a permit or inspection; ask the serving agency. |
| municipalProgram.doesNotCover 6 (hours, after-hours or emergency line) | ADAPTED | Section 4. |
| municipalProgram.doesNotCover 7 (combined or separate; age) | LEFT OUT | Covered by the systemExplainer row; not repeated. |
| municipalProgram.callout (ask the serving agency; camera does not tell which approvals apply) | ADAPTED | Section 4 ('ask the agency that serves your address'). |
| municipalProgram.closing (we do not repair; nothing says an agency pays for our services) | ADAPTED | Section 2 ('The Sewer Pros does not perform repairs'). |
| secondOpinion (ledes, steps, callout) | LEFT OUT | Belongs to the independent-inspection page. |
| buyingGuide.lede (scope vs. home inspector; first question is the agency; lateral is the owner's after closing) | LEFT OUT | Not this service's subject. |
| buyingGuide.body (no sale rule found; state rules not addressed; ask the agency) | LEFT OUT | Not this service's subject; the sale-time FAQ question is left out (about buying; FAQ 8) |
| buyingGuide.links, cta, agents | LEFT OUT | Audience-page links are not page fields here. |
| nearbyAreas | ADAPTED | Became coverage (Las Vegas, Henderson, North Las Vegas). 'All Las Vegas service areas' left out. |
| FAQ 1 Is Summerlin part of the City of Las Vegas? | USED | Merged FAQ. |
| FAQ 2 Responsibility at a City of Las Vegas address | USED | Merged FAQ. |
| FAQ 3 Responsibility at a CCWRD-served address | USED | Merged FAQ. |
| FAQ 4 Does public responsibility start at the property line? | USED | Merged FAQ. |
| FAQ 5 Who do I call about a sewer backup? | USED | Merged FAQ. |
| FAQ 6 Does the City warranty apply to my Summerlin property? | USED | Merged FAQ. |
| FAQ 7 Does CCWRD offer help paying for a lateral? | USED | Merged FAQ. |
| FAQ 8 Does Summerlin require a sewer inspection when a home is sold? | LEFT OUT | About buying, not maintenance. |
| FAQ 9 What does a sewer camera inspection show? | LEFT OUT | Duplicate; the service FAQ asks 'What does a sewer camera inspection find?'. |
| FAQ 10 Do you repair or replace sewer lines? | LEFT OUT | The service FAQ 'Do you offer sewer repair or replacement?' answers it in full. |
| finalCta | LEFT OUT | Page-specific cta written; form is template-level. |
| sources (5 links, lastReviewed, closingNote) | ADAPTED | Passed through as `summerlinContent.sources`. |

## Preventative Sewer Maintenance service page (v2)

| Section / item | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription, serviceDescription | LEFT OUT / ADAPTED | Page-specific; definition set in Summerlin, NV. |
| definition, hero.intro | ADAPTED | Intro and section 1. |
| signals 2, 4, 6 | USED | Problem cards 1-3 (shared block); signals 1, 3, 5 left out (three cards only). |
| limits (can, cannot, callout) | ADAPTED | 'Cleaning does not repair these conditions' in section 2; lists in FAQ (USED). |
| process (6 steps) | USED | Process block, verbatim. |
| decision, comparison | LEFT OUT | Template bands. |
| ask, ask.keep | ADAPTED | Video and written findings as the record (section 2). |
| audiences, markets, request | LEFT OUT | Template bands. |
| FAQ (16) | USED | All 16. No interval, time or cost figure is stated by the service FAQ. |
| inclusions (6) | USED | Shared block. |
| relatedPageIds | ADAPTED | Camera inspection and sewer cleaning kept; Summerlin location page added. |

## Summerlin location page: facts shared by all three pages

| Fact | Source |
| --- | --- |
| Clark County's 2024 jurisdictional boundary map (dated January 10, 2024) shows Summerlin partly in the City of Las Vegas and partly in unincorporated Clark County; for display only; no parcel lookup found; the page never says which agency serves any address | Clark County map (accessed 2026-10-04) |
| City: owners maintain private sewer laterals up to the connection to the City main; public sewer main facilities normally sit under public streets or in designated easements | City of Las Vegas sewer-backup post (March 10, 2021) |
| City sewer standards addenda: private sewer stays private, including the part in the public right-of-way, until its connection to the public sewer main | City addenda (revised November 9, 2021) |
| City: a stoppage in a City main can affect several upstream properties and may overflow manholes; a public-main obstruction, pipe failure or damage from area construction is something its team will address | City sewer-backup post |
| CCWRD: a damaged lateral that connects a house to the sewer main in the street is the owner's responsibility, including cleaning, repair and replacement; the owner is also responsible for periodic cleaning to keep it free of foreign matter, including roots (page undated) | CCWRD report-a-sewer-problem page |
| 702-229-6227, City Streets & Sanitation Division, listed for a suspected main stoppage or a manhole overflow; the City's number, not ours; no City hours, after-hours or emergency line found | City sewer-backup post |
| 702-668-8354, CCWRD, listed for a sanitary sewer spill or sewer-related odors; CCWRD's number, not ours; no CCWRD hours, after-hours or emergency line found | CCWRD page |
| Optional Service Line Warranty Program promoted on the City's page, offered with Service Line Warranties of America (private company); no price or terms found; applicability at a Summerlin address (including CCWRD-served ones) not found; The Sewer Pros has no connection | City Sewer Line Warranty page |
| No City or CCWRD lateral repair, grant, reimbursement or inspection-assistance program found ("none found", not a statement none exists) | Pages reviewed |
| No City or CCWRD sale-time inspection, certification or seller disclosure rule found; state rules not addressed | Pages reviewed |
| System combined or separate, age of mains, local soil or root conditions: not stated | Pages reviewed |
| No City or CCWRD rule found on whether lateral work, cleaning or a camera inspection needs a permit or inspection | Location page doesNotCover |
| No housing-age (Census) section: no primary values and no single matching Census geography, so no year-built figure on any page | Location page header comment |

Open items: Section 2 states periodic cleaning as CCWRD's wording only; the City page does not say it. The service page states no interval, so none appears. The sl-nlv-maintenance report lists 21 FAQs (6 + 15); this page counts the service FAQ as 16 questions (23 total), so recheck the count against the built page.
