# Source report: `sl-lv-city-maintenance` (City of Las Vegas, NV + Preventative Sewer Maintenance)

Page module: `content/pages/sl-lv-city-maintenance.tsx` (`lasVegasCityMaintenanceContent`).
Shared blocks: `content/pages/sl-blocks/preventative-sewer-maintenance.ts`.

Sources: the City of Las Vegas location page (`content/pages/las-vegas-las-vegas.tsx`, `lasVegasCityContent`, `loc-lv-las-vegas`) and the service page (`content/pages/services.tsx`, `svc-preventative-sewer-maintenance`, `v2`). No new research.

Status key: **USED** = verbatim or near-verbatim; **ADAPTED** = fact kept, wording rewritten or trimmed for this page; **LEFT OUT** = not on this page, with the reason.

## The four body sections and their sources

| # | h2 | Local source (Las Vegas page) | Service source |
| --- | --- | --- | --- |
| 1 | The City leaves the lateral to you, up to the City main | `responsibility.answer`, `municipalProgram.covers` 1-2 and doesNotCover 5 and lede (no inspection requirement, no inspection-assistance program) | definition (planned inspection and cleaning); process ('Review the history', 'Inspect and record', 'Clean when appropriate'); 'no default schedule' |
| 2 | What a visit covers, and what it leaves to the City | `systemExplainer` 'Main stoppages', `whoToCall.agency` (702-229-6227), `systemExplainer.card.closing`, `municipalProgram.doesNotCover` 1 | limits (does not establish the connection; cleaning does not repair); `ask.keep` (keep video and findings) |
| 3 | Most Las Vegas homes are newer, and there is still no default schedule | `housingAge` paragraph and sourceNote (median 1994, 61.3%), `systemExplainer` ('no age for any street's mains or laterals') | definition.supporting ('A line with no history of problems does not need a default schedule'); signals 'Known risk factors' |
| 4 | Which agency serves you, and what a maintenance visit is not | `systemExplainer` ('which agency serves an address', septic sentence), `whoToCall.secondaryAgency` (702-229-6541), `municipalProgram.covers` 5 and doesNotCover 3 (702-229-6251; no permit statement) | `decision` / FAQ (separate services); limits.callout (cleaning does not repair) |

## Other page fields

| Field | Built from |
| --- | --- |
| `seoTitle`, `metaDescription`, `serviceDescription` | Service `serviceDescription`, localized with the City of Las Vegas fact in the meta |
| `hero.intro` | `responsibility` + service intro |
| `problems` 1-3 | Service signals, shared block (verbatim) |
| `problems` 4 (local card) | `responsibility.answer` + `municipalProgram.covers` 2 (addenda: private through the public right-of-way) + service `limits` (footage does not establish the connection) |
| `inclusions` (6), `process` | Shared block and service `process.steps`, verbatim. Owner-confirmed video and written findings only; nothing else claimed |
| `coverage` | Henderson, North Las Vegas, Summerlin; statement 'Las Vegas is a service area, not an office location.' (the City page agrees: a service market, not a location) |
| `relatedPageIds` | Las Vegas location page, this service, and two related services |
| `cta` | Page-specific |
| FAQ | 6 Las Vegas questions (9 minus 3) + 16 service questions = 22 |
| Image alt text | Neutral wording. The location page allows Las Vegas wording only for a photo taken at a Las Vegas-area property |

The City of Las Vegas does not list periodic lateral inspection as an owner duty on the pages we reviewed, so Henderson's section 1 was rebuilt from the none-found inspection requirement rather than copied.

## City of Las Vegas location page: every section

| Section / element | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific title and meta written instead. |
| hero.title, hero.intro (owner maintains the lateral up to the City main) | ADAPTED | Intro restates owner-to-the-connection and the none-found inspection requirement. |
| heroForm (bullets, form card, backdrop, emergency-style note) | LEFT OUT | Same. The main-stoppage contact in the note is used in body section 2. |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level fields. |
| keyTakeaways 1 (City maintains the main; confirm the City serves the address) | ADAPTED | City-serves-the-address check in section 4. |
| keyTakeaways 2 (owner maintains laterals to the connection; addenda: private through the right-of-way) | ADAPTED | Section 1 and problem card 4. |
| keyTakeaways 3 (no City repair/grant/reimbursement program; optional private warranty) | ADAPTED | No-program fact in section 2; warranty left out (see municipalProgram.closing). |
| keyTakeaways.jumpNav | LEFT OUT | Navigation of the location page. |
| serviceCards (nine cards, helpBar) | LEFT OUT | Not a page field here; other services are reached through relatedPageIds. |
| responsibility.answer paragraph 1 (City maintains main; owner maintains private laterals to the connection; addenda: private through the right-of-way) | ADAPTED | Section 1. |
| responsibility.answer paragraph 2 (main stoppage affects several properties and is the City's; contractor may need to investigate; a camera can show which) | ADAPTED | Main-stoppage sentence in section 2; contractor line left out (no symptom is assumed). |
| responsibility.cards (public main, private lateral) | ADAPTED | Folded into sections 1 and 2. |
| responsibility.table (5 rows) | LEFT OUT | Table is location-page layout; rows 1-4 covered by sections 1-2. |
| responsibility.note (not legal advice; undated 2021 sources) | LEFT OUT | Dates are on the location page and in the sources list. |
| systemExplainer paragraph 1 (Public Works, City Engineering, Streets & Sanitation) | ADAPTED | Streets & Sanitation named in section 2. |
| systemExplainer 'Public mains' (normally under streets, sometimes in easements) | LEFT OUT | Not needed; section 2 states the City maintains the main. |
| systemExplainer 'Condition assessment' (aging collection system is the City's stated mission) | LEFT OUT | Left out for length; the Census paragraph carries the age point. |
| systemExplainer 'Main stoppages' (affects multiple upstream properties, can overflow manholes) | ADAPTED | Section 2. |
| systemExplainer 'A public sewer map' (layers: mains, manholes, privately maintained lines) | ADAPTED | Section 4 (check which agency serves you). |
| systemExplainer 'Which agency serves an address' (a Las Vegas mailing address does not show City service) | USED | Section 4. |
| systemExplainer septic sentence (Southern Nevada Health District) | USED | Section 4: a maintenance reader may be on septic, where this service does not apply. |
| systemExplainer 'combined or separate' and 'no age for mains or laterals' claims | ADAPTED | 'No age for any street's mains or laterals' used in section 3. Combined/separate left out. |
| systemExplainer 'nothing tells you the condition of any lateral' | ADAPTED | Section 3 (only an inspection of your line shows condition) was cut for length; the point is in the housing-age section. |
| systemExplainer.card bullets (what a camera shows) | LEFT OUT | Same; the FAQ carries them. |
| systemExplainer.card.closing (distance count; does not establish the connection or where responsibility ends) | USED | Section 2 bullets, near verbatim. |
| housingAge paragraph (median 1994 plus or minus 1; 1990s largest decade 27.9%; 61.3% / 25.9% / 12.8%) | ADAPTED | Section 3: median and 61.3%. |
| housingAge.table | LEFT OUT | Layout. |
| housingAge.sourceNote (B25034/B25035 links, arithmetic note, Census place caveat) | ADAPTED | Source named in section 3; links on the location page. |
| housingAge closing (age does not tell condition; repaired, rerouted or replaced) | ADAPTED | Section 3. |
| whoToCall.paragraphs (stoppage -> Streets & Sanitation; property problem -> contractor; independent inspection helps) | ADAPTED | Section 2 (main stoppage contact only). |
| whoToCall.agency (Streets & Sanitation 702-229-6227; no hours, no after-hours number) | ADAPTED | Section 2, labelled the City's. No-hours note left out for length. |
| whoToCall.secondaryAgency (Sanitary Sewer Engineering 702-229-6541; contact form 'Sewer Location'; same number as Flood Control) | ADAPTED | Section 4, labelled the City's number. |
| whoToCall.company ('newer market for us', company phone and hours) | LEFT OUT | Same. |
| municipalProgram.lede (none found; contractor may need to investigate) | ADAPTED | Section 1/2: none found for an inspection-assistance program. |
| municipalProgram.covers 1 (owners maintain laterals to the connection) | USED | Section 1. |
| municipalProgram.covers 2 (addenda; LVMC 14.04.120 not reviewed) | ADAPTED | Section 1 uses the addenda statement; citation left out. |
| municipalProgram.covers 3-4 (online permit category; Bldg Sewer (Yard Lines) inspection type) | LEFT OUT | In the FAQ. |
| municipalProgram.covers 5 (homeowner permit guide; Building & Safety 702-229-6251) | ADAPTED | Section 4, labelled the City's number. |
| municipalProgram.doesNotCover 1 (no grant/reimbursement/eligibility/application) | ADAPTED | Section 2. |
| municipalProgram.doesNotCover 2 (no statement on City-caused damage to a lateral or who repairs in the right-of-way) | LEFT OUT | We make no claim either way. |
| municipalProgram.doesNotCover 3 (no statement that cleaning or a camera inspection needs a permit) | ADAPTED | Section 4. |
| municipalProgram.doesNotCover 4 (no after-hours sewer number or sewer-specific reporting page) | LEFT OUT | Not used. |
| municipalProgram.doesNotCover 5 (no City inspection requirement for existing laterals) | ADAPTED | Section 1; this is the Las Vegas replacement for Henderson's periodic-inspection duty. |
| municipalProgram.doesNotCover 6 (combined/separate, age of system) | ADAPTED | Age of mains and laterals: section 3. |
| municipalProgram.whoCanApply, callout | ADAPTED | Serving-agency check in section 4; callout point ('replaces no review') in section 4. |
| municipalProgram.closing (optional warranty with Service Line Warranties of America; paid product; we do not repair) | LEFT OUT | Left out for length. 'We do not repair' is in section 2. |
| secondOpinion (ledes, 3 steps, callout) | LEFT OUT | Not a maintenance subject. |
| buyingGuide.lede (scope vs home inspection; owner maintains to the connection; after closing that is you) | LEFT OUT | Buying is not this page's subject. |
| buyingGuide.body: no rule found for a sale; not a confirmed absence; state rules not addressed | LEFT OUT | Question left out of the FAQ (see FAQ table). |
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
| FAQ 7 Does Las Vegas require a sewer inspection when a home is sold | LEFT OUT | Not about maintenance (as Henderson). |
| FAQ 8 What does a sewer camera inspection show | LEFT OUT | Duplicate; the service FAQ asks 'What does a sewer camera inspection find?'. |
| FAQ 9 Do you repair or replace sewer lines | LEFT OUT | The service FAQ's 'Do you offer sewer repair or replacement?' answers it in full. |
| finalCta (title, paragraphs, bullets, form) | LEFT OUT | Same. |
| sources (9 links, lastReviewed, closingNote) | ADAPTED | Same. |

## Preventative Sewer Maintenance service page (v2)

| Section / item | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific versions written. |
| serviceDescription | ADAPTED | Same definition, set in the City of Las Vegas. |
| hero.intro | ADAPTED | Intro ties the owner-maintains fact and none-found inspection requirement to the planned camera pass and cleaning. |
| definition.supporting ('no default schedule') | USED | Section 3. |
| signals 1 Several drains slow | LEFT OUT | Not used as a card. |
| signals 2 Gurgling or recurring clogs | USED | Problem card 1 via sl-blocks. |
| signals 3 Persistent odor | LEFT OUT | Not used as a card; the FAQ answers it. |
| signals 4 A backup that has already happened | USED | Problem card 2. |
| signals 5 Wet yard patches | LEFT OUT | Not used as a card. |
| signals 6 Known risk factors | USED | Problem card 3; mature trees, buildup after cleaning and undocumented backups also in section 3. |
| limits (can, cannot, callout) | ADAPTED | Section 2 bullets (does not establish the connection; cleaning does not repair). |
| process (6 steps) | USED | Process block, verbatim. |
| decision (camera first or cleaning first) | LEFT OUT | Covered by FAQ 'Should a camera inspection come before cleaning?' (USED). |
| comparison (building blocks) | LEFT OUT | Replaced by relatedPageIds. |
| ask.items and keep | ADAPTED | Video and written findings are inclusion 5; the keep note is in section 2. |
| audiences, markets, request, prep | LEFT OUT | Template-level; the maintenance page is residential-first. |
| FAQ (16 questions) | USED | All 16 carried. |
| inclusions (6), problems (3), shots (4) | USED | Shared sl-blocks. |
| relatedPageIds | ADAPTED | Camera inspection and sewer cleaning retained, plus the Las Vegas location page. |

## Facts used, and what they rest on

| Fact | Source |
| --- | --- |
| Owners maintain private laterals up to the connection into the City main | City sewer-backup post, March 10, 2021 (via `lasVegasCityContent`) |
| Private sewer stays private through the public right-of-way until the connection | City sewer standards addenda, last revised November 9, 2021 |
| Median year built 1994; 61.3% built 1990 or later; 12.8% before 1970 | Census ACS 2020-2024 5-year, B25035 and B25034, Las Vegas city; percentages are the location page's arithmetic |
| City phone numbers 702-229-6227, 702-229-6541, 702-229-6251 | City pages; every one is labelled the City's number, none is ours |
