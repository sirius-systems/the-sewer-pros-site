# Source report: `sl-lv-city-backup` (City of Las Vegas, NV + Recurring Sewer Backup Diagnosis)

Page module: `content/pages/sl-lv-city-backup.tsx` (`lasVegasCityBackupContent`).
Shared blocks: `content/pages/sl-blocks/recurring-sewer-backup-diagnosis.ts`.

Sources: the City of Las Vegas location page (`content/pages/las-vegas-las-vegas.tsx`, `lasVegasCityContent`, `loc-lv-las-vegas`) and the service page (`content/pages/services.tsx`, `svc-recurring-sewer-backup-diagnosis`, `v2`). No new research.

Status key: **USED** = verbatim or near-verbatim; **ADAPTED** = fact kept, wording rewritten or trimmed for this page; **LEFT OUT** = not on this page, with the reason.

## The four body sections and their sources

| # | h2 | Local source (Las Vegas page) | Service source |
| --- | --- | --- | --- |
| 1 | A repeat backup: the City's main or your lateral? | `responsibility` (answer, cards), `systemExplainer` 'Main stoppages', `municipalProgram.covers` 1-2, `systemExplainer.card.closing` | limits (findings apply to the segment inspected; do not by themselves establish responsibility) and FAQ 'Is a recurring backup the city's problem or mine?' |
| 2 | During a backup: the City's contacts, and where a diagnosis fits | `whoToCall` (Streets & Sanitation 702-229-6227; no hours, no after-hours number), `municipalProgram.doesNotCover` 4 | independent / FAQ 'What if the camera shows something serious?' |
| 3 | Most Las Vegas homes are 1990 or later, so the year built will not explain a backup | `housingAge` paragraph and sourceNote (median 1994, 61.3%, repaired/rerouted/replaced), `systemExplainer` 'Condition assessment' | `causes` (grease, wipes, roots, sags, cracks, separated joints, defective connections, collapse) and FAQ 'Why does my sewer keep backing up?' |
| 4 | No City program to pay for it, so get the evidence first | `municipalProgram` lede and closing (no program found; optional private warranty) | `independent.note` (significant condition may need evaluation outside our scope); `ask.keep` (keep video, compare written estimates) |

## Other page fields

| Field | Built from |
| --- | --- |
| `seoTitle`, `metaDescription`, `serviceDescription` | Service `serviceDescription`, localized with the City of Las Vegas fact in the meta |
| `hero.intro` | `responsibility` + service intro |
| `problems` 1-3 | Service signals, shared block (verbatim) |
| `problems` 4 (local card) | `systemExplainer` 'Main stoppages' + `whoToCall.agency` + service `signals` (backup versus a single fixture) |
| `inclusions` (6), `process` | Shared block and service `process.steps`, verbatim. Owner-confirmed video and written findings only; nothing else claimed |
| `coverage` | Henderson, North Las Vegas, Summerlin; statement 'Las Vegas is a service area, not an office location.' (the City page agrees: a service market, not a location) |
| `relatedPageIds` | Las Vegas location page, this service, and two related services |
| `cta` | Page-specific |
| FAQ | 8 Las Vegas questions (9 minus 1) + 29 service questions = 37, including the DEC-088 cost and same-day answers carried as published |
| Image alt text | Neutral wording. The location page allows Las Vegas wording only for a photo taken at a Las Vegas-area property |

The Henderson report counts 27 service questions; the service page now has 29 because the DEC-088 cost and same-day answers were added.

## City of Las Vegas location page: every section

| Section / element | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific title and meta written instead. |
| hero.title, hero.intro (owner maintains the lateral up to the City main) | ADAPTED | Intro restates City main versus owner lateral. |
| heroForm (bullets, form card, backdrop, emergency-style note) | LEFT OUT | Same. The main-stoppage contact in the note is used in body section 2. |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level fields. |
| keyTakeaways 1 (City maintains the main; confirm the City serves the address) | ADAPTED | Main is the City's: section 1. |
| keyTakeaways 2 (owner maintains laterals to the connection; addenda: private through the right-of-way) | ADAPTED | Section 1. |
| keyTakeaways 3 (no City repair/grant/reimbursement program; optional private warranty) | ADAPTED | Section 4 (none found, optional private warranty). |
| keyTakeaways.jumpNav | LEFT OUT | Navigation of the location page. |
| serviceCards (nine cards, helpBar) | LEFT OUT | Not a page field here; other services are reached through relatedPageIds. |
| responsibility.answer paragraph 1 (City maintains main; owner maintains private laterals to the connection; addenda: private through the right-of-way) | ADAPTED | Section 1. |
| responsibility.answer paragraph 2 (main stoppage affects several properties and is the City's; contractor may need to investigate; a camera can show which) | ADAPTED | Section 1 (main stoppage; contractor may need to investigate). 'A camera can show which' softened to 'does not by themselves establish responsibility', from the service FAQ. |
| responsibility.cards (public main, private lateral) | ADAPTED | Folded into section 1. |
| responsibility.table (5 rows) | LEFT OUT | Table is location-page layout; rows 1-4 covered by sections 1-2. |
| responsibility.note (not legal advice; undated 2021 sources) | LEFT OUT | Dates are on the location page and in the sources list. |
| systemExplainer paragraph 1 (Public Works, City Engineering, Streets & Sanitation) | ADAPTED | Agency names used in section 2 (Streets & Sanitation) and section 3 (City Engineering). |
| systemExplainer 'Public mains' (normally under streets, sometimes in easements) | LEFT OUT | Not needed; section 1 states the City maintains the main. |
| systemExplainer 'Condition assessment' (aging collection system is the City's stated mission) | ADAPTED | Section 3, kept as 'its stated mission, not a finding about your street'. |
| systemExplainer 'Main stoppages' (affects multiple upstream properties, can overflow manholes) | USED | Section 1 and problem card 4. |
| systemExplainer 'A public sewer map' (layers: mains, manholes, privately maintained lines) | LEFT OUT | Not needed for a diagnosis. |
| systemExplainer 'Which agency serves an address' (a Las Vegas mailing address does not show City service) | LEFT OUT | Not needed for a diagnosis. |
| systemExplainer septic sentence (Southern Nevada Health District) | LEFT OUT | A septic property has no City lateral; not a backup-diagnosis subject. |
| systemExplainer 'combined or separate' and 'no age for mains or laterals' claims | LEFT OUT | Not used by the service. |
| systemExplainer 'nothing tells you the condition of any lateral' | ADAPTED | Section 3. |
| systemExplainer.card bullets (what a camera shows) | LEFT OUT | Same; the FAQ carries them. |
| systemExplainer.card.closing (distance count; does not establish the connection or where responsibility ends) | ADAPTED | Section 1 (does not establish where the connection is). |
| housingAge paragraph (median 1994 plus or minus 1; 1990s largest decade 27.9%; 61.3% / 25.9% / 12.8%) | ADAPTED | Section 3: median, 61.3%. |
| housingAge.table | LEFT OUT | Layout. |
| housingAge.sourceNote (B25034/B25035 links, arithmetic note, Census place caveat) | ADAPTED | Source named in section 3; links on the location page. |
| housingAge closing (age does not tell condition; repaired, rerouted or replaced) | ADAPTED | Section 3. |
| whoToCall.paragraphs (stoppage -> Streets & Sanitation; property problem -> contractor; independent inspection helps) | ADAPTED | Section 2. |
| whoToCall.agency (Streets & Sanitation 702-229-6227; no hours, no after-hours number) | ADAPTED | Section 2, labelled the City's, with the no-hours/no-after-hours note. |
| whoToCall.secondaryAgency (Sanitary Sewer Engineering 702-229-6541; contact form 'Sewer Location'; same number as Flood Control) | LEFT OUT | Cut for length; the connection question is in section 1. |
| whoToCall.company ('newer market for us', company phone and hours) | LEFT OUT | Same. |
| municipalProgram.lede (none found; contractor may need to investigate) | ADAPTED | Section 4. |
| municipalProgram.covers 1 (owners maintain laterals to the connection) | USED | Section 1. |
| municipalProgram.covers 2 (addenda; LVMC 14.04.120 not reviewed) | ADAPTED | Section 1 uses the addenda statement; citation left out. |
| municipalProgram.covers 3-4 (online permit category; Bldg Sewer (Yard Lines) inspection type) | LEFT OUT | In the FAQ. |
| municipalProgram.covers 5 (homeowner permit guide; Building & Safety 702-229-6251) | LEFT OUT | Not backup-specific. |
| municipalProgram.doesNotCover 1 (no grant/reimbursement/eligibility/application) | ADAPTED | Section 4. |
| municipalProgram.doesNotCover 2 (no statement on City-caused damage to a lateral or who repairs in the right-of-way) | LEFT OUT | We make no claim either way. |
| municipalProgram.doesNotCover 3 (no statement that cleaning or a camera inspection needs a permit) | LEFT OUT | Not used. |
| municipalProgram.doesNotCover 4 (no after-hours sewer number or sewer-specific reporting page) | ADAPTED | Section 2 (no after-hours sewer number). |
| municipalProgram.doesNotCover 5 (no City inspection requirement for existing laterals) | LEFT OUT | Not used. |
| municipalProgram.doesNotCover 6 (combined/separate, age of system) | LEFT OUT | Not used. |
| municipalProgram.whoCanApply, callout | LEFT OUT | Not used. |
| municipalProgram.closing (optional warranty with Service Line Warranties of America; paid product; we do not repair) | ADAPTED | Section 4 (private company, paid product, not City assistance, no price or terms listed). |
| secondOpinion (ledes, 3 steps, callout) | ADAPTED | Spirit carried in section 4 (evidence first, compare written estimates). |
| buyingGuide.lede (scope vs home inspection; owner maintains to the connection; after closing that is you) | LEFT OUT | Buying is not this page's subject. |
| buyingGuide.body: no rule found for a sale; not a confirmed absence; state rules not addressed | LEFT OUT | In the FAQ (USED). |
| buyingGuide.body: Sanitary Sewer Engineering and the sewer map; map is not every private line; locating fills the gap | LEFT OUT | Not used. |
| buyingGuide.body: permits and inspections create a permanent record (insurance, resale) | LEFT OUT | Not used. |
| buyingGuide.links, cta, agents | LEFT OUT | Not used. |
| nearbyAreas | ADAPTED | Same. |
| FAQ 1 Who is responsible for a lateral / who maintains the main | USED | Merged FAQ. |
| FAQ 2 How old are Las Vegas homes | USED | Merged FAQ. |
| FAQ 3 Who do I call about a sewer backup in Las Vegas | USED | Merged FAQ. |
| FAQ 4 Does the City help with lateral costs, and what is its warranty | USED | Merged FAQ. |
| FAQ 5 How do I find where my lateral connects to the City main | USED | Merged FAQ. |
| FAQ 6 Does lateral work in Las Vegas need a permit | USED | Merged FAQ. |
| FAQ 7 Does Las Vegas require a sewer inspection when a home is sold | USED | Merged FAQ. Kept as on the Henderson backup page: a backup history matters in a sale. |
| FAQ 8 What does a sewer camera inspection show | LEFT OUT | Duplicate; the service FAQ answers it as 'What can a sewer camera see?'. |
| FAQ 9 Do you repair or replace sewer lines | USED | Merged FAQ. |
| finalCta (title, paragraphs, bullets, form) | LEFT OUT | Same. |
| sources (9 links, lastReviewed, closingNote) | ADAPTED | Same. |

## Recurring Sewer Backup Diagnosis service page (v2)

| Section / item | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific versions written. |
| serviceDescription | ADAPTED | Same definition, set in the City of Las Vegas. |
| hero.intro, definition.answer and supporting | ADAPTED | Intro; 'does not repair anything' in section 4. |
| signals 1 The same clog returns | USED | Problem card 1 via sl-blocks. |
| signals 2 Several fixtures drain slowly at once | USED | Problem card 2. |
| signals 3-5 (backs up when another fixture is used, gurgling, odors) | LEFT OUT | Only three service cards are used; all are in FAQ 'How do I know if the backup is in my sewer line or just one drain?'. |
| signals 6 Wastewater at a cleanout or outside drain | USED | Problem card 3. |
| signals 7 A yard patch that stays wet | LEFT OUT | Not used as a card; the septic caveat is not Las Vegas-specific. |
| causes (7 items, after) | ADAPTED | Section 3 names grease, wipes, roots, sags, cracks, separated joints, defective connections, collapse. |
| limits (can, cannot, callout) | ADAPTED | Section 1 (findings apply to the segment inspected; do not establish the connection); full lists in the FAQ (USED). |
| process (6 steps) | USED | Process block, verbatim; no equipment named. |
| process.prep | LEFT OUT | Not a page field. |
| decision table, list, aside | LEFT OUT | Covered by FAQ answers on cleaning and hydro jetting (USED). |
| independent (Clear, Document, Decide) and note | ADAPTED | Section 4 ('significant condition may need evaluation outside our scope'). |
| ask.items and keep | ADAPTED | 'Keep the video and compare more than one written estimate' in section 4; the rest via inclusions and FAQ. |
| situations (landlords, buyers and sellers, agents) | LEFT OUT | Not a page field. |
| markets, relatedTitle, request scope note | LEFT OUT | Template-level; request intro 'Ask about a free estimate before scheduling.' is DEC-088 wording and is not reused outside the FAQ. |
| FAQ (29 questions, including the DEC-088 cost and same-day answers) | USED | All 29 carried as published, per DEC-139. |
| inclusions (6), problems (3), shots (4) | USED | Shared sl-blocks. |
| relatedPageIds | ADAPTED | Camera inspection and cleaning with camera inspection retained, plus the Las Vegas location page. |

## Facts used, and what they rest on

| Fact | Source |
| --- | --- |
| Owners maintain private laterals up to the connection into the City main | City sewer-backup post, March 10, 2021 (via `lasVegasCityContent`) |
| Private sewer stays private through the public right-of-way until the connection | City sewer standards addenda, last revised November 9, 2021 |
| Median year built 1994; 61.3% built 1990 or later; 12.8% before 1970 | Census ACS 2020-2024 5-year, B25035 and B25034, Las Vegas city; percentages are the location page's arithmetic |
| City phone numbers 702-229-6227, 702-229-6541, 702-229-6251 | City pages; every one is labelled the City's number, none is ours |
