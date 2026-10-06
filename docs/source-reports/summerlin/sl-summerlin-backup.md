# Source report: `sl-summerlin-backup` (Summerlin, NV + Recurring Sewer Backup Diagnosis)

Page module: `content/pages/sl-summerlin-backup.tsx` (`summerlinBackupContent`).
Model: `content/pages/sl-nlv-backup.tsx` (approved North Las Vegas version).

Sources: the Summerlin location page (`content/pages/las-vegas-summerlin.tsx`, `summerlinContent`, `loc-lv-summerlin`) and the service page (`content/pages/services.tsx`, `svc-recurring-sewer-backup-diagnosis`, `v2`). No new research.

Status key: **USED** = verbatim or near-verbatim; **ADAPTED** = fact kept, wording rewritten or trimmed; **LEFT OUT** = not on this page, with the reason.

## The four body sections and their sources

| # | h2 | Local source | Service source |
| --- | --- | --- | --- |
| 1 | A repeat backup: which Summerlin agency's wording applies? | `responsibility.answer` p1-p2, `responsibility.table` rows 1-2 and 5, `systemExplainer.card.closing` | limits (findings apply to the segment inspected, do not by themselves establish responsibility); FAQ 'Is a recurring backup the city's problem or mine?' |
| 2 | A stoppage in the street main, or in your lateral? | `responsibility.table` row 4, `systemExplainer` (City addresses), `whoToCall.agency` and `secondaryAgency` (numbers; no hours, after-hours or emergency line) | independent; ask.keep (footage to bring) |
| 3 | The Summerlin pages cannot tell you why your line keeps backing up | `systemExplainer` (combined/separate, age, soil or root conditions not stated; nothing tells the condition of a lateral) | `causes` and FAQ 'Why does my sewer keep backing up?'; FAQ 'Why does my sewer back up again after it was cleared?' |
| 4 | No agency program to lean on, so get the evidence first | `municipalProgram` lede, covers 4 (optional warranty), closing | `independent.note`; ask.keep (compare written estimates) |

## Other page fields

| Field | Built from |
| --- | --- |
| `seoTitle`, `metaDescription`, `serviceDescription` | Service `serviceDescription`, localized ('in Summerlin, NV, in the Las Vegas Valley'; not called a city); meta carries the two-agency wording (~155 characters) |
| `hero.intro` | `responsibility.answer` + service intro |
| `problems` 1-3 | Service signals, shared block (verbatim) |
| `problems` 4 (local card) | Location 'which agency' caveat + service limits (not the agency, not the connection) |
| `inclusions` (6), `process` | Shared block and service `process.steps`, verbatim |
| `coverage` | Las Vegas, Henderson, North Las Vegas; 'Summerlin is a service area, not an office location.' |
| `relatedPageIds` | Summerlin location page, this service, camera inspection, cleaning with camera (as the North Las Vegas model) |
| `cta` | Page-specific |
| FAQ | 9 Summerlin questions (10 minus 1) + 29 service questions = 38, including the DEC-088 cost ('Ask about a free estimate before scheduling.') and same-day answers carried as published (DEC-139) |
| Image alt text | Neutral wording, as the North Las Vegas model |

## Summerlin location page: every section

| Section / element | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific versions written. |
| hero.title, hero.intro | ADAPTED | Intro restates the two-agency split and the owner's lateral for a repeat backup. |
| heroForm (bullets, card, note, backdrop) | LEFT OUT | Location page shell; template supplies the form. The 'newer market for us' bullet is a company statement kept on the location page. |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level. |
| keyTakeaways 1 (two jurisdictions, map for display only; two wordings) | ADAPTED | Section 1. |
| keyTakeaways 2 (City vs. CCWRD owner wording) | ADAPTED | Section 1. |
| keyTakeaways 3 (no program found; camera records the line whichever agency serves it) | ADAPTED | Section 4 (no program; camera records the line whichever agency serves it). |
| keyTakeaways.jumpNav, serviceCards (nine, helpBar) | LEFT OUT | Navigation and layout of the location page; related services come through relatedPageIds. |
| responsibility.answer p1 (split jurisdiction, map date, for display only, no parcel lookup) | ADAPTED | Section 1 (map date trimmed; 'for display only' kept). |
| responsibility.answer p2 (two agencies, two wordings, not merged) | ADAPTED | Section 1. |
| responsibility.cards (public main; private lateral) | ADAPTED | Folded into sections 1-2. |
| responsibility.table row 1 (which agency applies) | ADAPTED | Section 1. |
| responsibility.table rows 2-3 (City: owner's lateral; through the right-of-way) | ADAPTED | Section 1 (the right-of-way wording was cut for length; the connection limit is stated). |
| responsibility.table row 4 (City: a main stoppage) | ADAPTED | Section 2 (the City's main-stoppage wording). |
| responsibility.table rows 5-6 (CCWRD: owner's lateral; upkeep and roots) | ADAPTED | Section 1 and the roots line in section 3. |
| responsibility.table row 7 (where an inspection helps) | ADAPTED | Section 1 (what the findings cover; not the agency or the connection). |
| responsibility.note (not legal advice; 2021 City post, undated CCWRD page) | LEFT OUT | dated and undated pages are in the sources list. |
| systemExplainer p1-p2 (more than one agency; two jurisdictions) | ADAPTED | Section 1. |
| systemExplainer City addresses ('private collector sewer', main stoppage, manhole overflow) | ADAPTED | Section 2 (stoppage can affect several upstream properties and may overflow manholes). |
| systemExplainer CCWRD addresses (periodic cleaning, roots) | ADAPTED | Section 3 (roots are among the named causes). |
| systemExplainer 'combined or separate / age / soil or root conditions not stated' | USED | section 3 (combined or separate, age of mains, soil or root conditions not stated). |
| systemExplainer 'nothing tells the condition of any lateral' | USED | section 3 (nothing tells the condition of any individual lateral). |
| systemExplainer.card bullets | LEFT OUT | The service page's can/cannot lists are fuller. |
| systemExplainer.card.closing (distance count; not the connection or where an agency's responsibility begins) | ADAPTED | Sections 1 and 2. |
| housingAge | LEFT OUT | The location page has no housing-age section (no primary Census values, no single matching geography). Nothing invented. |
| whoToCall.paragraphs | LEFT OUT | ADAPTED in section 2 (a diagnosis is what you bring when asked). |
| whoToCall.agency (City, 702-229-6227) | ADAPTED | Section 2, labelled the City's number, not ours; no hours, after-hours or emergency line found. |
| whoToCall.secondaryAgency (CCWRD, 702-668-8354) | ADAPTED | Section 2, labelled CCWRD's number, not ours; email-for-photos detail not repeated. |
| whoToCall.company ('newer market for us', company phone and hours) | LEFT OUT | Company statement stays on the location page. No company phone on this page, as in the North Las Vegas model. |
| municipalProgram.lede (none found; two agencies) | ADAPTED | Section 4. |
| municipalProgram.covers 1-3 (City owner wording; addenda; CCWRD wording) | ADAPTED | Sections 1 and 4. |
| municipalProgram.covers 4 (optional City-promoted warranty program) | ADAPTED | Section 4: private company, no price or terms, no connection to us. |
| municipalProgram.doesNotCover 1 (no grant, reimbursement or application process) | ADAPTED | Section 4. |
| municipalProgram.doesNotCover 2-3 (which addresses each agency serves; whether the warranty applies at an address) | ADAPTED | Section 4 ('We found no price or terms') and problem card 4. |
| municipalProgram.doesNotCover 4 (CCWRD statement on damage from its own work) | LEFT OUT | Not needed by this service; the fact stays in the location page FAQ. |
| municipalProgram.doesNotCover 5 (permit or inspection rule for lateral work, cleaning or camera inspection) | LEFT OUT | Not asked of this service. |
| municipalProgram.doesNotCover 6 (hours, after-hours or emergency line) | ADAPTED | Section 2. |
| municipalProgram.doesNotCover 7 (combined or separate; age) | LEFT OUT | Covered by the systemExplainer row; not repeated. |
| municipalProgram.callout (ask the serving agency; camera does not tell which approvals apply) | ADAPTED | Section 1 limits and problem card 4. |
| municipalProgram.closing (we do not repair; nothing says an agency pays for our services) | ADAPTED | Section 4 (does not sell repair or replacement). |
| secondOpinion (ledes, steps, callout) | LEFT OUT | Belongs to the independent-inspection page. |
| buyingGuide.lede (scope vs. home inspector; first question is the agency; lateral is the owner's after closing) | LEFT OUT | Not this service's subject. |
| buyingGuide.body (no sale rule found; state rules not addressed; ask the agency) | LEFT OUT | Not this service's subject; the sale-time FAQ question is kept as in the City and North Las Vegas models (FAQ 8) |
| buyingGuide.links, cta, agents | LEFT OUT | Audience-page links are not page fields here. |
| nearbyAreas | ADAPTED | Became coverage (Las Vegas, Henderson, North Las Vegas). 'All Las Vegas service areas' left out. |
| FAQ 1 Is Summerlin part of the City of Las Vegas? | USED | Merged FAQ. |
| FAQ 2 Responsibility at a City of Las Vegas address | USED | Merged FAQ. |
| FAQ 3 Responsibility at a CCWRD-served address | USED | Merged FAQ. |
| FAQ 4 Does public responsibility start at the property line? | USED | Merged FAQ. |
| FAQ 5 Who do I call about a sewer backup? | USED | Merged FAQ. |
| FAQ 6 Does the City warranty apply to my Summerlin property? | USED | Merged FAQ. |
| FAQ 7 Does CCWRD offer help paying for a lateral? | USED | Merged FAQ. |
| FAQ 8 Does Summerlin require a sewer inspection when a home is sold? | USED | Merged FAQ (kept, as in the City and North Las Vegas models). |
| FAQ 9 What does a sewer camera inspection show? | LEFT OUT | Duplicate of the service FAQ 'What can a sewer camera see?'. |
| FAQ 10 Do you repair or replace sewer lines? | USED | Merged FAQ. |
| finalCta | LEFT OUT | Page-specific cta written; form is template-level. |
| sources (5 links, lastReviewed, closingNote) | ADAPTED | Passed through as `summerlinContent.sources`. |

## Recurring Sewer Backup Diagnosis service page (v2)

| Section / item | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription, serviceDescription | LEFT OUT / ADAPTED | Page-specific; definition set in Summerlin, NV. |
| signals, shared problems 1-3 | USED | Problem cards 1-3. |
| causes | ADAPTED | Section 3 (from the FAQ answer). |
| limits | ADAPTED | Section 1. |
| independent, ask.keep | ADAPTED | Sections 2 and 4. |
| process (steps) | USED | Process block, verbatim. |
| inclusions (6) | USED | Shared block. |
| FAQ (29) | USED | All 29, including cost ('free estimate') and same-day answers as published (DEC-088, DEC-139). |
| decision, comparison, evidence, audiences, markets, request | LEFT OUT | Template bands. |
| relatedPageIds | ADAPTED | Camera inspection and cleaning with camera retained; Summerlin location page added. |

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

Open items: The service FAQ 'Is a recurring backup the city's problem or mine?' says 'one city reports...' and is carried as published; it is not tied to Summerlin or either agency. The body does not use the 'one city' statement.
