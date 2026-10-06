# Source report: `sl-summerlin-prepurchase` (Summerlin, NV + Pre-Purchase Sewer Inspection)

Page module: `content/pages/sl-summerlin-prepurchase.tsx` (`summerlinPrePurchaseContent`).
Model: `content/pages/sl-nlv-prepurchase.tsx` (approved North Las Vegas version).

Sources: the Summerlin location page (`content/pages/las-vegas-summerlin.tsx`, `summerlinContent`, `loc-lv-summerlin`) and the service page (`content/pages/services.tsx`, `svc-pre-purchase-sewer-inspection`, `v2`). No new research.

Status key: **USED** = verbatim or near-verbatim; **ADAPTED** = fact kept, wording rewritten or trimmed; **LEFT OUT** = not on this page, with the reason.

## The four body sections and their sources

| # | h2 | Local source | Service source |
| --- | --- | --- | --- |
| 1 | Which agency serves the Summerlin home you are buying? | `responsibility.answer` p1, `buyingGuide.lede` (first buyer question is the agency), `systemExplainer.card.closing` (distance count; not the connection) | definition and limits (visible conditions, day of the visit) |
| 2 | Two agencies, two wordings, and after closing the lateral is yours | `responsibility.table` rows 2-3 and 5-6, `municipalProgram.covers` 1-3, `buyingGuide.lede` (owner after closing) | FAQ 'What happens if the scope finds roots?' (records where roots appear; no fix decided) |
| 3 | No sale-time rule found, and a clear scope proves less than it seems | `buyingGuide.body` (none found; state rules not addressed; ask the serving agency) | limits.callout ('a clear line is not proof'); FAQ 'What does a clear sewer scope mean?'; 'no legal advice' |
| 4 | No program or warranty terms to lean on, and the agencies' numbers | `municipalProgram` lede and covers 4 (optional warranty), `whoToCall.agency` and `secondaryAgency` | signals 'Plans to dig after you buy' (locating is separate) |

## Other page fields

| Field | Built from |
| --- | --- |
| `seoTitle`, `metaDescription`, `serviceDescription` | Service `serviceDescription`, localized ('in Summerlin, NV, in the Las Vegas Valley'; Summerlin is not called a city); meta carries the owner-wording difference and the county-map split (~150 characters) |
| `hero.intro` | `responsibility` + service definition |
| `problems` 1-3 | Service signals, shared block (verbatim) |
| `problems` 4 (local card) | Location 'which agency' caveat (map for display only, no parcel lookup) + service signal 'A short inspection period' |
| `inclusions` (6), `process` | Shared block and service `process.steps`, verbatim |
| `coverage` | Las Vegas, Henderson, North Las Vegas; 'Summerlin is a service area, not an office location.' (the location page states no office, address or GBP) |
| `relatedPageIds` | Summerlin location page, this service, camera inspection, line locating (as the North Las Vegas model) |
| `cta` | Page-specific |
| FAQ | 9 Summerlin questions (10 minus 1) + 28 service questions (29 minus 1) = 37; the Summerlin 'camera show' question is the one skipped on the location side, the service 'required when buying or selling' on the service side |
| Image alt text | Neutral wording; the location page allows Summerlin wording only for a photo taken at a Summerlin-area property |

## Summerlin location page: every section

| Section / element | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific versions written. |
| hero.title, hero.intro | ADAPTED | Intro restates the split jurisdiction and the no-sale-rule finding for a buyer. |
| heroForm (bullets, card, note, backdrop) | LEFT OUT | Location page shell; template supplies the form. The 'newer market for us' bullet is a company statement kept on the location page. |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level. |
| keyTakeaways 1 (two jurisdictions, map for display only; two wordings) | ADAPTED | Section 1. |
| keyTakeaways 2 (City vs. CCWRD owner wording) | ADAPTED | Section 2. |
| keyTakeaways 3 (no program found; camera records the line whichever agency serves it) | ADAPTED | Sections 3-4 (no program; footage records the line, not the agency). |
| keyTakeaways.jumpNav, serviceCards (nine, helpBar) | LEFT OUT | Navigation and layout of the location page; related services come through relatedPageIds. |
| responsibility.answer p1 (split jurisdiction, map date, for display only, no parcel lookup) | ADAPTED | Section 1 (map date and parcel-lookup caveat trimmed to 'display purposes only'). |
| responsibility.answer p2 (two agencies, two wordings, not merged) | ADAPTED | Section 2. |
| responsibility.cards (public main; private lateral) | ADAPTED | Folded into sections 1-2. |
| responsibility.table row 1 (which agency applies) | ADAPTED | Section 1. |
| responsibility.table rows 2-3 (City: owner's lateral; through the right-of-way) | ADAPTED | Section 2. |
| responsibility.table row 4 (City: a main stoppage) | LEFT OUT | of the body (a main stoppage is not a purchase subject); the City number is in section 4. |
| responsibility.table rows 5-6 (CCWRD: owner's lateral; upkeep and roots) | ADAPTED | Section 2 (owner wording and roots). |
| responsibility.table row 7 (where an inspection helps) | ADAPTED | Sections 1 and 3 (what a scope records; cannot establish the agency or the connection). |
| responsibility.note (not legal advice; 2021 City post, undated CCWRD page) | ADAPTED | 'Not legal advice' in section 3; dated and undated pages are in the sources list. |
| systemExplainer p1-p2 (more than one agency; two jurisdictions) | ADAPTED | Section 1. |
| systemExplainer City addresses ('private collector sewer', main stoppage, manhole overflow) | LEFT OUT | main-stoppage and manhole detail is not buyer-specific (the number is in section 4). |
| systemExplainer CCWRD addresses (periodic cleaning, roots) | ADAPTED | Section 2 (roots). |
| systemExplainer 'combined or separate / age / soil or root conditions not stated' | LEFT OUT | used on the backup and maintenance pages, not this service. |
| systemExplainer 'nothing tells the condition of any lateral' | LEFT OUT | the scope-specific limits in section 3 carry the point. |
| systemExplainer.card bullets | LEFT OUT | The service page's can/cannot lists are fuller. |
| systemExplainer.card.closing (distance count; not the connection or where an agency's responsibility begins) | ADAPTED | Sections 1 and 2. |
| housingAge | LEFT OUT | The location page has no housing-age section (no primary Census values, no single matching geography). Nothing invented. |
| whoToCall.paragraphs | LEFT OUT | General routing; the buyer-relevant part is in section 4. |
| whoToCall.agency (City, 702-229-6227) | ADAPTED | Section 4, labelled the City's number, not ours. 'Listed for a suspected main stoppage or a manhole overflow' kept; no hours or after-hours statement added. |
| whoToCall.secondaryAgency (CCWRD, 702-668-8354) | ADAPTED | Section 4, labelled CCWRD's number, not ours. The page's email-for-photos detail is not repeated. |
| whoToCall.company ('newer market for us', company phone and hours) | LEFT OUT | Company statement stays on the location page. No company phone on this page, as in the North Las Vegas model. |
| municipalProgram.lede (none found; two agencies) | ADAPTED | Section 4 ('We found no City or CCWRD lateral repair, grant or reimbursement program'); 'none found' wording is also in the FAQ (USED). |
| municipalProgram.covers 1-3 (City owner wording; addenda; CCWRD wording) | ADAPTED | Section 2. |
| municipalProgram.covers 4 (optional City-promoted warranty program) | ADAPTED | Section 4: private company, no price or coverage terms, applicability not found, no connection to us. |
| municipalProgram.doesNotCover 1 (no grant, reimbursement or application process) | ADAPTED | Section 4 and FAQ (USED). |
| municipalProgram.doesNotCover 2-3 (which addresses each agency serves; whether the warranty applies at an address) | ADAPTED | Section 4 (applicability not found) and problem card 4 (agency unclear). |
| municipalProgram.doesNotCover 4 (CCWRD statement on damage from its own work) | LEFT OUT | Not needed by this service; the fact stays in the location page FAQ. |
| municipalProgram.doesNotCover 5 (permit or inspection rule for lateral work, cleaning or camera inspection) | LEFT OUT | Not asked of this service. |
| municipalProgram.doesNotCover 6 (hours, after-hours or emergency line) | ADAPTED | Section 4 ('We found no hours, after-hours number or emergency line for either'). |
| municipalProgram.doesNotCover 7 (combined or separate; age) | LEFT OUT | Covered by the systemExplainer row; not repeated. |
| municipalProgram.callout (ask the serving agency; camera does not tell which approvals apply) | ADAPTED | Section 1 and problem card 4 (ask the City or CCWRD about the address). |
| municipalProgram.closing (we do not repair; nothing says an agency pays for our services) | ADAPTED | 'Does not repair or replace' in the FAQ (USED); the no-reimbursement line left out for length. |
| secondOpinion (ledes, steps, callout) | LEFT OUT | Belongs to the independent-inspection page. |
| buyingGuide.lede (scope vs. home inspector; first question is the agency; lateral is the owner's after closing) | ADAPTED | Sections 1-2 (agency is the first buyer question; lateral is the owner's after closing). |
| buyingGuide.body (no sale rule found; state rules not addressed; ask the agency) | ADAPTED | Section 3 (none found, not a confirmed absence; state rules not addressed; buyer can ask for an inspection and ask the agency). |
| buyingGuide.links, cta, agents | LEFT OUT | Audience-page links are not page fields here. |
| nearbyAreas | ADAPTED | Became coverage (Las Vegas, Henderson, North Las Vegas). 'All Las Vegas service areas' left out. |
| FAQ 1 Is Summerlin part of the City of Las Vegas? | USED | Merged FAQ. |
| FAQ 2 Responsibility at a City of Las Vegas address | USED | Merged FAQ. |
| FAQ 3 Responsibility at a CCWRD-served address | USED | Merged FAQ. |
| FAQ 4 Does public responsibility start at the property line? | USED | Merged FAQ. |
| FAQ 5 Who do I call about a sewer backup? | USED | Merged FAQ. |
| FAQ 6 Does the City warranty apply to my Summerlin property? | USED | Merged FAQ. |
| FAQ 7 Does CCWRD offer help paying for a lateral? | USED | Merged FAQ. |
| FAQ 8 Does Summerlin require a sewer inspection when a home is sold? | USED | Merged FAQ; also section 3. |
| FAQ 9 What does a sewer camera inspection show? | LEFT OUT | Duplicate; the service FAQ answers it as 'What does a sewer scope look for?' and 'What does a sewer inspection not show?'. |
| FAQ 10 Do you repair or replace sewer lines? | USED | Merged FAQ. |
| finalCta | LEFT OUT | Page-specific cta written; form is template-level. |
| sources (5 links, lastReviewed, closingNote) | ADAPTED | Passed through as `summerlinContent.sources`. |

## Pre-Purchase Sewer Inspection service page (v2)

| Section / item | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific versions written. |
| serviceDescription | ADAPTED | Same definition, set in Summerlin, NV. |
| hero.intro, definition | ADAPTED | Intro and sections 1-3; no-repair statement in the FAQ. |
| signals 1, 2, 5 | USED | Problem cards 1-3 (shared block). |
| signals 3 (drain trouble mentioned during the sale) | LEFT OUT | Only three service cards are used. |
| signals 4 (a local sale requirement) | ADAPTED | Section 3, answered with the Summerlin findings. |
| signals 6 (plans to dig after you buy) | ADAPTED | Locating line in section 4. |
| limits (can, cannot, callout) | ADAPTED | 'Clear is not proof' and sections-not-reached in sections 1 and 3; full lists in FAQ (USED). |
| process (5 steps) | USED | Process block, verbatim. |
| process.intro, process.prep | LEFT OUT | Not page fields. |
| decision, independent, comparison, ask.keep, evidence, audiences, markets, request | LEFT OUT | Template bands. |
| ask.items | ADAPTED | 'Records you can share' is inclusion 6 (USED); locating in section 4. |
| FAQ (29) | ADAPTED | 28 used; 'Is a sewer scope required when buying or selling a house?' left out (duplicate of the Summerlin sale question). Cost, time and 'do I need to be there' answers carried as published (no price, no standard time). |
| inclusions (6) | USED | Shared SERVICE_INCLUSIONS. |
| relatedPageIds | ADAPTED | Camera inspection and locating kept; Summerlin location page added. |

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

Open items: Section 2 states that the City's and CCWRD's wording is shown 'in its own words' and 'under either, the owner after closing is you', following the location page's buyingGuide.lede ('the private lateral is the property owner's responsibility, so after closing it belongs to the owner, which is you'). The `serviceDescription` phrase 'in Summerlin, NV, in the Las Vegas Valley' is new wording, not a quoted phrase from the location page.
