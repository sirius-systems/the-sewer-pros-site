# Source report: `sl-lv-city-prepurchase` (City of Las Vegas, NV + Pre-Purchase Sewer Inspection)

Page module: `content/pages/sl-lv-city-prepurchase.tsx` (`lasVegasCityPrePurchaseContent`).
Shared blocks: `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS` and `SERVICE_PROBLEM_SHOTS` in `content/pages/service-location-shared.ts`.

Sources: the City of Las Vegas location page (`content/pages/las-vegas-las-vegas.tsx`, `lasVegasCityContent`, `loc-lv-las-vegas`) and the service page (`content/pages/services.tsx`, `svc-pre-purchase-sewer-inspection`, `v2`). No new research.

Status key: **USED** = verbatim or near-verbatim; **ADAPTED** = fact kept, wording rewritten or trimmed for this page; **LEFT OUT** = not on this page, with the reason.

## The four body sections and their sources

| # | h2 | Local source (Las Vegas page) | Service source |
| --- | --- | --- | --- |
| 1 | What you take on when a Las Vegas sale closes | `buyingGuide.lede`, `responsibility.answer`, `municipalProgram.covers` 1-2, `systemExplainer.card.closing` | limits (can/cannot lede: visible conditions on the day of the visit; does not establish the connection) |
| 2 | No sale-time rule found, so you have to ask | `buyingGuide.body` (none found, state rules not addressed, permanent record of permits), `municipalProgram` lede and doesNotCover 1, 5 | definition ('no legal advice'); signals 'A local sale requirement'; independent (no repair) |
| 3 | Most Las Vegas homes date from 1990 or later, but the year will not settle it | `housingAge` paragraph and sourceNote (median 1994, 61.3%, 12.8%, repaired/rerouted/replaced, Census place caveat) | limits.callout ('A visibly clear line is not proof...') |
| 4 | Which agency serves the address, and where a scope fits | `systemExplainer` ('which agency serves an address'), `whoToCall.secondaryAgency` (702-229-6541), `municipalProgram.covers` 5 (702-229-6251), `buyingGuide.body` (sewer map, locating fills the gap) | ask.items 'Line locating'; signals 'Plans to dig after you buy' |

## Other page fields

| Field | Built from |
| --- | --- |
| `seoTitle`, `metaDescription`, `serviceDescription` | Service `serviceDescription`, localized with the City of Las Vegas fact in the meta |
| `hero.intro` | `responsibility` + service intro |
| `problems` 1-3 | Service signals, shared block (verbatim) |
| `problems` 4 (local card) | `systemExplainer` (mailing address does not show City service) + `buyingGuide.body` (sewer map, Sanitary Sewer Engineering) + service `signals` 'A local sale requirement' |
| `inclusions` (6), `process` | Shared block and service `process.steps`, verbatim. Owner-confirmed video and written findings only; nothing else claimed |
| `coverage` | Henderson, North Las Vegas, Summerlin; statement 'Las Vegas is a service area, not an office location.' (the City page agrees: a service market, not a location) |
| `relatedPageIds` | Las Vegas location page, this service, and two related services |
| `cta` | Page-specific |
| FAQ | 8 Las Vegas questions (9 minus 1) + 28 service questions (29 minus 1) = 36 |
| Image alt text | Neutral wording. The location page allows Las Vegas wording only for a photo taken at a Las Vegas-area property |

The location page has no utility-transfer question (Henderson's has one), so nothing was skipped for that.

## City of Las Vegas location page: every section

| Section / element | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific title and meta written instead. |
| hero.title, hero.intro (owner maintains the lateral up to the City main) | ADAPTED | Intro restates owner-to-the-connection plus the addenda's public right-of-way line for a buyer. |
| heroForm (bullets, form card, backdrop, emergency-style note) | LEFT OUT | Form and hero card belong to the location page shell; the service-location template supplies its own form. |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level fields. |
| keyTakeaways 1 (City maintains the main; confirm the City serves the address) | ADAPTED | Serving-agency check is in section 4 and problem card 4. |
| keyTakeaways 2 (owner maintains laterals to the connection; addenda: private through the right-of-way) | ADAPTED | Sections 1 and hero. |
| keyTakeaways 3 (no City repair/grant/reimbursement program; optional private warranty) | ADAPTED | No-program fact in section 2; warranty left out (see municipalProgram.closing). |
| keyTakeaways.jumpNav | LEFT OUT | Navigation of the location page. |
| serviceCards (nine cards, helpBar) | LEFT OUT | Not a page field here; other services are reached through relatedPageIds. |
| responsibility.answer paragraph 1 (City maintains main; owner maintains private laterals to the connection; addenda: private through the right-of-way) | ADAPTED | Section 1 and hero. |
| responsibility.answer paragraph 2 (main stoppage affects several properties and is the City's; contractor may need to investigate; a camera can show which) | ADAPTED | Contractor-may-need-to-investigate not used; page is about a purchase. |
| responsibility.cards (public main, private lateral) | ADAPTED | Folded into section 1 as the owner side. |
| responsibility.table (5 rows) | LEFT OUT | Table is location-page layout. Rows 1-4 are covered by section 1; row 5 (where an inspection helps) is the page itself. |
| responsibility.note (not legal advice; undated 2021 sources) | ADAPTED | 'Not legal advice' in section 2. The 2021 dates are on the location page and in the sources list. |
| systemExplainer paragraph 1 (Public Works, City Engineering, Streets & Sanitation) | LEFT OUT | Context about the City's departments, not buyer-specific. |
| systemExplainer 'Public mains' (normally under streets, sometimes in easements) | LEFT OUT | Not needed for a purchase. |
| systemExplainer 'Condition assessment' (aging collection system is the City's stated mission) | LEFT OUT | Not about one house's lateral; the Census paragraph carries the age point. |
| systemExplainer 'Main stoppages' (affects multiple upstream properties, can overflow manholes) | LEFT OUT | Not buyer-specific. |
| systemExplainer 'A public sewer map' (layers: mains, manholes, privately maintained lines) | ADAPTED | Section 4 (map exists; does not show every private line on a property). |
| systemExplainer 'Which agency serves an address' (a Las Vegas mailing address does not show City service) | USED | Section 4 and problem card 4. |
| systemExplainer septic sentence (Southern Nevada Health District) | LEFT OUT | A septic property is not a sewer-scope subject; adds nothing to the four sections. Open item: a buyer of a septic property may want it. |
| systemExplainer 'combined or separate' and 'no age for mains or laterals' claims | LEFT OUT | Not used by the service. |
| systemExplainer 'nothing tells you the condition of any lateral' | ADAPTED | Section 3 (the year does not give condition). |
| systemExplainer.card bullets (what a camera shows) | LEFT OUT | The service page's own can/cannot lists are fuller and the FAQ carries them. |
| systemExplainer.card.closing (distance count; does not establish the connection or where responsibility ends) | ADAPTED | Section 1 (does not establish the connection or where responsibility ends); the distance-count clause was cut for length. |
| housingAge paragraph (median 1994 plus or minus 1; 1990s largest decade 27.9%; 61.3% / 25.9% / 12.8%) | ADAPTED | Section 3: median, 61.3% and 12.8%. 27.9% and 25.9% cut for length. |
| housingAge.table | LEFT OUT | Layout; key figures are in section 3. |
| housingAge.sourceNote (B25034/B25035 links, arithmetic note, Census place caveat) | ADAPTED | Source named in section 3; Census place caveat kept as a sentence; links on the location page. |
| housingAge closing (age does not tell condition; repaired, rerouted or replaced) | ADAPTED | Section 3. |
| whoToCall.paragraphs (stoppage -> Streets & Sanitation; property problem -> contractor; independent inspection helps) | LEFT OUT | Main-stoppage contact is not buyer-specific. |
| whoToCall.agency (Streets & Sanitation 702-229-6227; no hours, no after-hours number) | LEFT OUT | Not buyer-specific. |
| whoToCall.secondaryAgency (Sanitary Sewer Engineering 702-229-6541; contact form 'Sewer Location'; same number as Flood Control) | ADAPTED | Section 4, labelled the City's. Contact form and Flood Control note left out. |
| whoToCall.company ('newer market for us', company phone and hours) | LEFT OUT | Company statement; kept on the location page. No company phone on this page, as on Henderson. |
| municipalProgram.lede (none found; contractor may need to investigate) | ADAPTED | Section 2 (none found, not a confirmed absence). |
| municipalProgram.covers 1 (owners maintain laterals to the connection) | USED | Section 1. |
| municipalProgram.covers 2 (addenda; LVMC 14.04.120 not reviewed) | ADAPTED | Section 1 uses the addenda statement. The code citation is left out; we have not reviewed it. |
| municipalProgram.covers 3-4 (online permit category; Bldg Sewer (Yard Lines) inspection type) | LEFT OUT | Permit detail is in the FAQ (USED); the page says only that the inspection does not tell which approvals apply. |
| municipalProgram.covers 5 (homeowner permit guide; Building & Safety 702-229-6251) | ADAPTED | Section 4, labelled the City's number. |
| municipalProgram.doesNotCover 1 (no grant/reimbursement/eligibility/application) | ADAPTED | Section 2. |
| municipalProgram.doesNotCover 2 (no statement on City-caused damage to a lateral or who repairs in the right-of-way) | LEFT OUT | We make no claim either way. |
| municipalProgram.doesNotCover 3 (no statement that cleaning or a camera inspection needs a permit) | ADAPTED | Section 4: 'does not tell you which approvals apply'. |
| municipalProgram.doesNotCover 4 (no after-hours sewer number or sewer-specific reporting page) | LEFT OUT | Not buyer-specific. |
| municipalProgram.doesNotCover 5 (no City inspection requirement for existing laterals) | ADAPTED | Folded into section 2 (none found for a sale). |
| municipalProgram.doesNotCover 6 (combined/separate, age of system) | LEFT OUT | Not used. |
| municipalProgram.whoCanApply, callout | ADAPTED | 'Confirm the City serves your address' is section 4. Callout: 'inspection does not tell which approvals apply' in section 4. |
| municipalProgram.closing (optional warranty with Service Line Warranties of America; paid product; we do not repair) | LEFT OUT | Not a purchase subject. 'We do not repair' is in section 2. |
| secondOpinion (ledes, 3 steps, callout) | LEFT OUT | Second-opinion content belongs to the independent-inspection page. |
| buyingGuide.lede (scope vs home inspection; owner maintains to the connection; after closing that is you) | ADAPTED | Section 1; 'ask your home inspector' is carried by the service FAQ (USED). |
| buyingGuide.body: no rule found for a sale; not a confirmed absence; state rules not addressed | ADAPTED | Section 2. Also the FAQ 'Does Las Vegas require a sewer inspection when a home is sold?' (USED). |
| buyingGuide.body: Sanitary Sewer Engineering and the sewer map; map is not every private line; locating fills the gap | ADAPTED | Section 4. |
| buyingGuide.body: permits and inspections create a permanent record (insurance, resale) | ADAPTED | Section 2, with the clarification that a scope is not a permit or inspection. |
| buyingGuide.links, cta, agents | LEFT OUT | Links to audience pages are not page fields here. |
| nearbyAreas | ADAPTED | Became coverage (Henderson, North Las Vegas, Summerlin). 'All Las Vegas service areas' left out. |
| FAQ 1 Who is responsible for a lateral / who maintains the main | USED | Merged FAQ. |
| FAQ 2 How old are Las Vegas homes | USED | Merged FAQ. |
| FAQ 3 Who do I call about a sewer backup in Las Vegas | USED | Merged FAQ; a new owner needs it. |
| FAQ 4 Does the City help with lateral costs, and what is its warranty | USED | Merged FAQ. |
| FAQ 5 How do I find where my lateral connects to the City main | USED | Merged FAQ. |
| FAQ 6 Does lateral work in Las Vegas need a permit | USED | Merged FAQ. |
| FAQ 7 Does Las Vegas require a sewer inspection when a home is sold | USED | Merged FAQ. |
| FAQ 8 What does a sewer camera inspection show | LEFT OUT | Duplicate; the service FAQ answers it as 'What does a sewer scope look for?' and 'What does a sewer inspection not show?'. |
| FAQ 9 Do you repair or replace sewer lines | USED | Merged FAQ. |
| finalCta (title, paragraphs, bullets, form) | LEFT OUT | Page-specific cta written; form is template-level. |
| sources (9 links, lastReviewed, closingNote) | ADAPTED | Passed through as `sources: lasVegasCityContent.sources`, as Henderson does. |

## Pre-Purchase Sewer Inspection service page (v2)

| Section / item | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific versions written. |
| serviceDescription | ADAPTED | Same definition, set in the City of Las Vegas. |
| hero.intro (definition; no repair) | ADAPTED | Definition in the intro; the no-repair statement is in section 2 and the FAQ. |
| v2.hero.scope, card text | LEFT OUT | Template-level. |
| definition.answer and supporting | ADAPTED | Intro and section 1 (lateral, visible conditions, day of the visit); 'ask your home inspector' via FAQ (USED). |
| signals 1 An older home | USED | Problem card 1. |
| signals 2 No record of the line's condition | USED | Problem card 3. |
| signals 3 Drain trouble mentioned during the sale | LEFT OUT | Only three service cards are used; reconsider if a fourth service card is wanted. |
| signals 4 A local sale requirement | ADAPTED | Section 2, answered with Las Vegas facts. |
| signals 5 A short inspection period | USED | Problem card 2. |
| signals 6 Plans to dig after you buy | ADAPTED | Locating line in section 4. |
| signals.after | ADAPTED | Section 2. |
| limits.intro, can (8), cannot (8), callout | ADAPTED | Waterline, sections not reached and 'clear is not proof' used in sections 1 and 3; full lists in the FAQ answers (USED). |
| process (5 steps) | USED | Process block: Request, Access, Camera run, Video, Written findings. The camera-run step's equipment sentence comes through verbatim as published on the service page. |
| process.intro, process.prep | LEFT OUT | No standard time is covered by the FAQ; prep is not a page field. |
| decision, independent, comparison, ask.keep, evidence, audiences, markets, request | LEFT OUT | Template bands; related pages replace comparison and markets. |
| ask.items | ADAPTED | 'Records you can share' is inclusion 6 (USED); locating is section 4. |
| FAQ (29 questions) | ADAPTED | 28 used; 'Is a sewer scope required when buying or selling a house?' left out (duplicate of the Las Vegas-specific question). |
| inclusions (shared table, 6 items) | USED | Shared SERVICE_INCLUSIONS. |
| relatedPageIds | ADAPTED | Camera inspection and line locating retained; Las Vegas location page added. |

## Facts used, and what they rest on

| Fact | Source |
| --- | --- |
| Owners maintain private laterals up to the connection into the City main | City sewer-backup post, March 10, 2021 (via `lasVegasCityContent`) |
| Private sewer stays private through the public right-of-way until the connection | City sewer standards addenda, last revised November 9, 2021 |
| Median year built 1994; 61.3% built 1990 or later; 12.8% before 1970 | Census ACS 2020-2024 5-year, B25035 and B25034, Las Vegas city; percentages are the location page's arithmetic |
| City phone numbers 702-229-6227, 702-229-6541, 702-229-6251 | City pages; every one is labelled the City's number, none is ours |
