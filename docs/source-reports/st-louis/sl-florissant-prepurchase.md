# Source report: sl-florissant-prepurchase

Page: Pre-Purchase Sewer Inspection in Florissant, MO (`florissantPrePurchaseContent`, `content/pages/sl-stl-florissant-prepurchase.tsx`).

Sources:
- LOCATION: `florissantContent` in `content/pages/st-louis-florissant.tsx` (`loc-stl-florissant`; MSD and City of Florissant facts read 2026-10-02; housing figure from the City's 2026-2030 Consolidated Plan citing ACS 2024 5-year estimates).
- SERVICE: `svc-pre-purchase-sewer-inspection` `v2` in `content/pages/services.tsx`, plus the shared service blocks.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

No company phone, matching `sl-nlv-prepurchase`. Every MSD or City phone number and dollar term is labelled as theirs. Nothing from the St. Louis City, Chesterfield, Ballwin or St. Charles pages is carried over.

## The four body sections and their sources

| # | h2 on the page | Florissant source | Service source |
|---|---|---|---|
| 1 | An "as is" Florissant sale leaves the lateral question to the buyer | `buyingGuide.body` ("as is" sale; buyer obtains and pays for inspection and occupancy permit; occupancy page silent on sewers), `responsibility.answer` (MSD: lateral and connection private) | `definition.supporting` 1 (the lateral is what is inspected; day-of-visit conditions), `limits.cannot` (connection) |
| 2 | The City's lateral program is not a closing tool | `buyingGuide.body` (not for a home sale contingency; pending sale does not expedite; new owner eligible if taxes paid; written confirmation), `municipalProgram.steps` 3 and `callout` (contracted plumber; no claim City accepts an outside report), `afterSteps` 2 (Engineering number) | `independent`/`ask.keep` (evidence for your own decision), `definition.supporting` 2 (not legal advice) |
| 3 | Where the program stops decides what a scope has to show you | `municipalProgram.lede` and `doesNotCover` 1 (main to five feet; owner inside and within five feet), `afterSteps` 1 and `housingAge.table` rows 1, 4 (hairline cracks; open line) | `ask.items` (access point and location), `limits.callout` (a clear line is not proof), `limits.cannot` |
| 4 | A mid-century housing stock says little about the pipe | `housingAge` (p1-p2), `systemExplainer` p3 and p5 (Brookshire, public project vs. one lateral) | `signals` "An older home" (age is a buyer's judgment), `limits.callout` |

Fourth problem card: A City repair that may land after closing (ADAPTED from `buyingGuide.body`: written confirmation by the new owner; ask the agent and the Engineering Division; note the inspection deadline, from the service page's `signals` "A short inspection period").

## Florissant location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in; ", MO" added |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (independent camera inspection before applying, buying or approving work) | ADAPTED | Hero intro: MSD private lateral, "as is" sale, after closing the owner is the buyer |
| heroForm bullets (camera inspection, cleaning and jetting, locally owned since 2011) | LEFT OUT | Shell and company claims; the template supplies its own |
| heroForm card (title, intro, phone line suffix, nextSteps, form) | LEFT OUT | Template supplies its own request form |
| heroForm card note (building backup: contact MSD first at (314) 768-6260) | LEFT OUT | Backup contact is not a buying topic |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level |
| keyTakeaways 1 (MSD repairs the public sewer; lateral and connection are private, owner maintains and repairs) | ADAPTED | Section 1 and hero |
| keyTakeaways 2 (program covers main to within five feet; $50 annual fee; inside the home and within five feet stays the owner's) | ADAPTED | Section 3 (boundary); fee LEFT OUT |
| keyTakeaways 3 (a camera inspection gives recorded evidence before you clean, buy or approve work) | ADAPTED | Sections 1 and 2 (the scope as evidence for your own decision) |
| keyTakeaways.jumpNav | LEFT OUT | Location-page navigation |
| serviceCards (nine) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer (MSD: lateral and connection private; cave-in traced to the public sewer is MSD's repair) | ADAPTED | Section 1 |
| responsibility card: the public sewer (dye test; MSD repairs; confirm utility by address) | LEFT OUT | Dye test and cave-ins are not a buying topic |
| responsibility card: the lateral line (owner's; program covers main to five feet; owner inside) | ADAPTED | Sections 1 and 3 |
| responsibility.table row 1 (who owns it) | ADAPTED | Section 1 |
| responsibility.table row 2 (who maintains and repairs it) | ADAPTED | Section 1 |
| responsibility.table row 3 (who to contact first: MSD (314) 768-6260; Engineering (314) 839-7643) | ADAPTED | Section 2, Engineering number only, marked the City's |
| responsibility.table row 4 (what help exists: MSD crews; City program subject to rules, deposit, review) | ADAPTED | Section 2 |
| responsibility.table row 5 (where an inspection helps) | ADAPTED | Section 3 (a scope records where along the line a condition was seen) |
| responsibility.note (not legal advice; no published rule on the part of a lateral under the street) | ADAPTED | Section 2 (not legal advice); the under-the-street sentence LEFT OUT, it is a camera-scope point already covered by "does not establish where the connection is" |
| systemExplainer p1 (MSD: most of St. Louis County has a separate system; City is combined) | LEFT OUT | County-level context, not about this service |
| systemExplainer p2 (MSD's page does not label every Florissant parcel) | LEFT OUT | Hedge for p1 |
| systemExplainer p3 (Brookshire Sanitary Relief: Wedgewood, about 6,000 feet, 2020-2022) | ADAPTED | Section 4 (new wastewater sewer in Wedgewood); footage and construction dates LEFT OUT, the page states no current status |
| systemExplainer p4 (Lindsay Lane Sanitary Relief, Spring 2026 - Summer 2027 tentative) | LEFT OUT | Left out for length; the point (a public project says nothing about one lateral) is carried by the Brookshire sentence |
| systemExplainer p5 (a public project does not tell you any one property's lateral) | ADAPTED | Section 4 |
| systemExplainer.card (what a camera can show; closing) | LEFT OUT | The service page's camera can/cannot lists and FAQ cover it |
| housingAge p1 (21,229 units; vast majority built 1950-1979; ACS 2024 via the Consolidated Plan; city as a whole) | ADAPTED | Section 4, with "citywide" |
| housingAge p2 (neither MSD nor the City publishes a pipe material or era) | ADAPTED | Section 4 |
| housingAge p3 (working drain is not proof of sound pipe; denial reasons; not a substitute for maintenance) | ADAPTED | Section 3 (denial reasons); "working drain" sentence LEFT OUT for length |
| housingAge p4 (source note) | ADAPTED | Source named in section 4 |
| housingAge.table row 1 (cracks or breaks; hairline cracks as a denial reason) | ADAPTED | Section 3 |
| housingAge.table row 2 (joint separation; main to five feet) | ADAPTED | Section 3 |
| housingAge.table row 3 (roots; annual cabling) | LEFT OUT | Cabling is maintenance, not a buying topic |
| housingAge.table row 4 (blockage with intact pipe; open and serviceable line can be denied) | ADAPTED | Section 3 |
| housingAge.table row 5 (a problem near the house; blockage within five feet can be denied) | LEFT OUT | Left out for length; the five-foot boundary is in section 3 |
| whoToCall p1 (MSD: building backup call; urgent reports: raw sewage, missing manholes, flooded streets) | LEFT OUT | Backup contact is not a buying topic |
| whoToCall p2 (if MSD or a plumber points to your lateral, an independent camera inspection helps) | ADAPTED | Section 1 |
| whoToCall.agency (MSD (314) 768-6260; limited assistance program) | LEFT OUT | Not a buying topic |
| whoToCall.secondaryAgency Engineering (314) 839-7643 (sinkhole, program) | ADAPTED | Section 2, marked the City's |
| whoToCall.secondaryAgency Public Works (314) 839-7648 (permits) | LEFT OUT | No permit statement for cleaning is claimed |
| whoToCall.company (phone, hours) | LEFT OUT | No company phone on this page, as on `sl-nlv-prepurchase` |
| municipalProgram.lede (covers defective lateral main to five feet; owner inside; $50 fee) | ADAPTED | Section 3; fee LEFT OUT |
| municipalProgram.paragraphs (spot repairs about 10 feet; not for whole laterals or preventing defects; not a substitute for maintenance) | LEFT OUT | Not a buying topic |
| municipalProgram.covers (repair of defective lateral; fill rock, soil, seeding) | ADAPTED | Section 3; restoration LEFT OUT |
| municipalProgram.doesNotCover (under the home / within five feet; septic; landscaping; commercial and six-unit wording) | ADAPTED | Section 3 (inside the home / within five feet); others LEFT OUT |
| municipalProgram.steps 1 (qualifying reason: confirmed cave-in, or recurring backups regular maintenance cannot resolve and annual fee paid; no prior plumbing inspection required) | LEFT OUT | Not a buying topic |
| municipalProgram.steps 2 ($300 deposit; none after a positive MSD dye test) | LEFT OUT | Not a buying topic |
| municipalProgram.steps 3 (contracted plumber: cable and camera evaluation; City Engineer reviews video) | ADAPTED | Section 2 |
| municipalProgram.steps 4 (approved or denied; about two weeks; deposit reimbursed or kept) | LEFT OUT | Timing is the City's |
| municipalProgram.afterSteps 1 (denial reasons; clogged-lateral emergency priority; repair-day access) | ADAPTED | Section 2 (sale contingency as a denial reason removed for length; the denial reasons in section 3); rest LEFT OUT |
| municipalProgram.afterSteps 2 (page undated; no maximum benefit or funding status; confirm with Engineering) | ADAPTED | Section 2 (confirm with the Engineering Division) |
| municipalProgram.callout (our inspection does not replace the City's plumber; no claim City accepts an outside report; City crew repairs) | ADAPTED | Section 2 |
| municipalProgram.closing (link to St. Louis sewer lateral inspection & reporting) | LEFT OUT | A link |
| secondOpinion (ledes, steps, callout, CTA) | LEFT OUT | Belongs to the independent-inspection page |
| buyingGuide.lede (a scope is separate from the home inspection) | ADAPTED | Hero and section 1 (the scope as how you see the line first) |
| buyingGuide.body ("as is" sale; buyer pays for inspection and occupancy permit; occupancy page silent on sewers) | ADAPTED | Section 1 |
| buyingGuide.body (program not for a sale contingency; pending sale does not expedite; new owner eligible if taxes paid; written confirmation of post-closing repair) | ADAPTED | Section 2 and the new fourth card; the denial-reason clause LEFT OUT for length |
| buyingGuide links, CTA, agents block (association affiliations) | LEFT OUT | Hub elements and company claims |
| nearbyAreas (Chesterfield, Ballwin, St. Louis City, St. Charles, market hub) | ADAPTED | `coverage`: the four other locations |
| finalCta title, paragraphs, bullets | ADAPTED | `cta.title` and `cta.body` written for this service |
| sources (nine links, lastReviewed 2026-10-02, closingNote) | USED | Same list, verbatim |
| servicePageIds | LEFT OUT | Hub linkage |

### Florissant FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for a sewer lateral in Florissant? | USED | Verbatim |
| What part of the lateral does Florissant's program cover? | USED | Verbatim |
| Does the program replace the whole lateral? | USED | Verbatim |
| What does it cost to apply? | USED | Verbatim |
| What happens if a sinkhole opens near my Florissant home? | USED | Verbatim |
| Does the program cover septic systems, condominiums or multi-family buildings? | USED | Verbatim |
| Can a home sale speed up a lateral repair? | USED | Verbatim |
| Do buyers need a City inspection in Florissant? | USED | Verbatim |
| What does a sewer camera inspection show? | LEFT OUT | The service page answers it in full as "What does a sewer scope look for?" and "What does a sewer inspection not show?" |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-pre-purchase-sewer-inspection`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Pre-Purchase Sewer Inspection in Florissant, MO" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, Florissant, Missouri added |
| hero.title / hero.intro / hero.scope | ADAPTED | Hero title and intro; scope bullets are a template element |
| definition.answer | ADAPTED | `serviceDescription` and hero |
| definition.supporting 1 (the lateral; visible conditions on the day; does not repair) | ADAPTED | Section 1 |
| definition.supporting 2 (sewer scope is separate from the home inspection) | LEFT OUT | FAQ "Is a sewer scope included in a regular home inspection?" |
| signals 1 An older home, 2 No record, 3 Drain trouble | USED | Problem cards 1-3 (from `SERVICE_PROBLEMS`: older home, short inspection period, no record of condition) |
| signals 3 Drain trouble mentioned, 4 A local sale requirement, 6 Plans to dig | LEFT OUT | FAQ answers; locating is a related-page link |
| signals 5 A short inspection period | ADAPTED | Problem card 2; fourth card (note the deadline) |
| limits.can | LEFT OUT | FAQ "What does a sewer scope look for?" |
| limits.cannot (waterline; unreached sections; soil; wall; slope; leaks; future; repair need) | ADAPTED | Sections 1 and 3 (connection, boundary not set by footage); remainder in FAQ |
| limits.callout (a clear line is not proof) | ADAPTED | Section 3 |
| process steps 1 to 5 | USED | `process`, verbatim; equipment names only as confirmed |
| process.prep | LEFT OUT | FAQ "Where does the camera go in?" and "When should I schedule a sewer scope during the inspection period?" |
| decision (inspection and cleaning are separate) | LEFT OUT | FAQ "Does a sewer scope include cleaning or hydro jetting?" |
| independent band | ADAPTED | Section 2 (evidence for your own decision) |
| comparison table | LEFT OUT | Related pages carry siblings |
| ask items: video, written findings | USED | Inclusions 1-2 |
| ask items: access point, locating, share with agent | ADAPTED | Inclusions 5-6 and section 3 |
| ask.keep | LEFT OUT | FAQ "What should I ask before approving major sewer work?" |
| evidence (4 examples) | LEFT OUT | Image slots, not copy |
| audiences (agents, inspectors, buyers, sellers) | LEFT OUT | Hub-level; the association affiliations stay on the location page |
| markets (3 hubs) | LEFT OUT | Replaced by `coverage` |
| relatedPageIds (4) | ADAPTED | Florissant page, this service, camera inspection, line locating |
| cta | ADAPTED | Rewritten for Florissant |
| inclusions (6 cards) | USED | `SERVICE_INCLUSIONS` |

### Service FAQ (29): 28 USED verbatim, 1 LEFT OUT.

The basics (5), What it can and cannot see (10), Cleaning and locating (3, two with inline links), Records and next steps (4): all USED. Buying and timing (7): "Is a sewer scope required when buying or selling a house?" LEFT OUT (the Florissant question "Do buyers need a City inspection in Florissant?" answers it for this city); the other six USED, including cost and time answers, which publish no price or time.

Total FAQ on the page: 37 (9 Florissant + 28 service).
