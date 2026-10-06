# Source report: sl-florissant-maintenance

Page: Preventative Sewer Maintenance in Florissant, MO (`florissantMaintenanceContent`, `content/pages/sl-stl-florissant-maintenance.tsx`).

Sources:
- LOCATION: `florissantContent` in `content/pages/st-louis-florissant.tsx` (`loc-stl-florissant`; MSD and City of Florissant facts read 2026-10-02; housing figure from the City's 2026-2030 Consolidated Plan citing ACS 2024 5-year estimates).
- SERVICE: `svc-preventative-sewer-maintenance` `v2` in `content/pages/services.tsx`, plus the shared service blocks.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

No company phone, matching `sl-lv-city-maintenance`. NO INTERVAL, schedule, plan or contract is claimed; the City's annual-cabling wording is attributed to the City. Every MSD or City phone number and dollar term is labelled as theirs. Nothing from the St. Louis City, Chesterfield, Ballwin or St. Charles pages is carried over.

## The four body sections and their sources

| # | h2 on the page | Florissant source | Service source |
|---|---|---|---|
| 1 | The City says routine maintenance is the owner's, and may mean annual cabling | `responsibility` (MSD: lateral and connection private; table rows 1-2), `housingAge.table` row 3 (annual cabling, large trees or bushes), `municipalProgram.paragraphs` (not a substitute for maintenance) | `definition.supporting` 3 (no default schedule), `faq` "How often should I schedule it?" |
| 2 | What a visit covers, and what it leaves to MSD and the City | `whoToCall` (MSD agency; Engineering secondary agency), `responsibility` cards | `limits.callout` (cleaning does not repair), `process` (inspect, clean, look again), `ask` (video and findings) |
| 3 | A City program that pays for defects, not for upkeep | `municipalProgram` (lede, paragraphs: spot repairs about 10 feet; `afterSteps` 1 denial reasons; `callout`; `afterSteps` 2) | `ask.keep` (keep records), `limits.callout` |
| 4 | Mid-century homes and public projects do not set a schedule | `housingAge` p1-p2, `systemExplainer` p3-p5 | `definition.supporting` 3, `signals` "Known risk factors" |

Fourth problem card: Large trees near the lateral (ADAPTED from `housingAge.table` row 3: the City's annual-cabling wording for large trees or bushes; the service page's "Known risk factors" card; no interval stated).

## Florissant location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in; ", MO" added |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (independent camera inspection before applying, buying or approving work) | ADAPTED | Hero intro: MSD private lateral and the City's "not a substitute for regular maintenance" |
| heroForm bullets (camera inspection, cleaning and jetting, locally owned since 2011) | LEFT OUT | Shell and company claims; the template supplies its own |
| heroForm card (title, intro, phone line suffix, nextSteps, form) | LEFT OUT | Template supplies its own request form |
| heroForm card note (building backup: contact MSD first at (314) 768-6260) | ADAPTED | Section 2, marked as MSD's number |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level |
| keyTakeaways 1 (MSD repairs the public sewer; lateral and connection are private, owner maintains and repairs) | ADAPTED | Section 1 |
| keyTakeaways 2 (program covers main to within five feet; $50 annual fee; inside the home and within five feet stays the owner's) | ADAPTED | Section 3 (boundary); fee LEFT OUT |
| keyTakeaways 3 (a camera inspection gives recorded evidence before you clean, buy or approve work) | ADAPTED | Section 3 (a maintenance record is your own evidence) |
| keyTakeaways.jumpNav | LEFT OUT | Location-page navigation |
| serviceCards (nine) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer (MSD: lateral and connection private; cave-in traced to the public sewer is MSD's repair) | ADAPTED | Section 1; cave-in routing appears in section 2 as the City's Engineering Division contact |
| responsibility card: the public sewer (dye test; MSD repairs; confirm utility by address) | ADAPTED | Section 2 (MSD runs the public sewer); dye test LEFT OUT |
| responsibility card: the lateral line (owner's; program covers main to five feet; owner inside) | ADAPTED | Section 3 |
| responsibility.table row 1 (who owns it) | ADAPTED | Section 1 |
| responsibility.table row 2 (who maintains and repairs it) | ADAPTED | Section 1 |
| responsibility.table row 3 (who to contact first: MSD (314) 768-6260; Engineering (314) 839-7643) | ADAPTED | Section 2, both numbers, marked MSD's and the City's |
| responsibility.table row 4 (what help exists: MSD crews; City program subject to rules, deposit, review) | ADAPTED | Section 3 |
| responsibility.table row 5 (where an inspection helps) | ADAPTED | Section 2 (footage records where along the line) |
| responsibility.note (not legal advice; no published rule on the part of a lateral under the street) | LEFT OUT | Not needed for maintenance; the connection sentence is in section 2 |
| systemExplainer p1 (MSD: most of St. Louis County has a separate system; City is combined) | LEFT OUT | County-level context, not about this service |
| systemExplainer p2 (MSD's page does not label every Florissant parcel) | LEFT OUT | Hedge for p1 |
| systemExplainer p3 (Brookshire Sanitary Relief: Wedgewood, about 6,000 feet, 2020-2022) | ADAPTED | Section 4 (Wedgewood sewer project named only); length and dates LEFT OUT |
| systemExplainer p4 (Lindsay Lane Sanitary Relief, Spring 2026 - Summer 2027 tentative) | ADAPTED | Section 4 (named only) |
| systemExplainer p5 (a public project does not tell you any one property's lateral) | ADAPTED | Section 4 |
| systemExplainer.card (what a camera can show; closing) | LEFT OUT | The service page's camera can/cannot lists and FAQ cover it |
| housingAge p1 (21,229 units; vast majority built 1950-1979; ACS 2024 via the Consolidated Plan; city as a whole) | ADAPTED | Section 4, with "citywide" |
| housingAge p2 (neither MSD nor the City publishes a pipe material or era) | ADAPTED | Section 4 |
| housingAge p3 (working drain is not proof of sound pipe; denial reasons; not a substitute for maintenance) | ADAPTED | Sections 1 and 3 |
| housingAge p4 (source note) | ADAPTED | Source named in section 4 |
| housingAge.table row 1 (cracks or breaks; hairline cracks as a denial reason) | ADAPTED | Section 3 |
| housingAge.table row 2 (joint separation; main to five feet) | ADAPTED | Section 3 |
| housingAge.table row 3 (roots; annual cabling) | ADAPTED | Section 1 |
| housingAge.table row 4 (blockage with intact pipe; open and serviceable line can be denied) | ADAPTED | Section 3 |
| housingAge.table row 5 (a problem near the house; blockage within five feet can be denied) | ADAPTED | Section 3 |
| whoToCall p1 (MSD: building backup call; urgent reports: raw sewage, missing manholes, flooded streets) | ADAPTED | Section 2 (building backup call); urgent list LEFT OUT |
| whoToCall p2 (if MSD or a plumber points to your lateral, an independent camera inspection helps) | LEFT OUT | Not needed |
| whoToCall.agency (MSD (314) 768-6260; limited assistance program) | ADAPTED | Section 2, marked MSD's |
| whoToCall.secondaryAgency Engineering (314) 839-7643 (sinkhole, program) | ADAPTED | Section 2, marked the City's |
| whoToCall.secondaryAgency Public Works (314) 839-7648 (permits) | LEFT OUT | No permit statement for cleaning is claimed |
| whoToCall.company (phone, hours) | LEFT OUT | No company phone, as on `sl-lv-city-maintenance` |
| municipalProgram.lede (covers defective lateral main to five feet; owner inside; $50 fee) | ADAPTED | Section 3; fee LEFT OUT |
| municipalProgram.paragraphs (spot repairs about 10 feet; not for whole laterals or preventing defects; not a substitute for maintenance) | ADAPTED | Section 3 and section 1 |
| municipalProgram.covers (repair of defective lateral; fill rock, soil, seeding) | ADAPTED | Section 3; restoration LEFT OUT |
| municipalProgram.doesNotCover (under the home / within five feet; septic; landscaping; commercial and six-unit wording) | ADAPTED | Section 3; others LEFT OUT |
| municipalProgram.steps 1 (qualifying reason: confirmed cave-in, or recurring backups regular maintenance cannot resolve and annual fee paid; no prior plumbing inspection required) | LEFT OUT | Application route is not a maintenance topic |
| municipalProgram.steps 2 ($300 deposit; none after a positive MSD dye test) | LEFT OUT | Application route is not a maintenance topic |
| municipalProgram.steps 3 (contracted plumber: cable and camera evaluation; City Engineer reviews video) | LEFT OUT | Not a drain topic |
| municipalProgram.steps 4 (approved or denied; about two weeks; deposit reimbursed or kept) | LEFT OUT | Not a maintenance topic |
| municipalProgram.afterSteps 1 (denial reasons; clogged-lateral emergency priority; repair-day access) | ADAPTED | Section 3 (three denial reasons); rest LEFT OUT |
| municipalProgram.afterSteps 2 (page undated; no maximum benefit or funding status; confirm with Engineering) | ADAPTED | Section 3 (confirm current terms with the Engineering Division) |
| municipalProgram.callout (our inspection does not replace the City's plumber; no claim City accepts an outside report; City crew repairs) | ADAPTED | Section 3 |
| municipalProgram.closing (link to St. Louis sewer lateral inspection & reporting) | LEFT OUT | A link |
| secondOpinion (ledes, steps, callout, CTA) | LEFT OUT | Belongs to the independent-inspection page |
| buyingGuide.lede (a scope is separate from the home inspection) | LEFT OUT | A buyer topic |
| buyingGuide.body ("as is" sale; buyer pays for inspection and occupancy permit; occupancy page silent on sewers) | LEFT OUT | A buyer topic |
| buyingGuide.body (program not for a sale contingency; pending sale does not expedite; new owner eligible if taxes paid; written confirmation of post-closing repair) | LEFT OUT | A buyer topic |
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
| Can a home sale speed up a lateral repair? | LEFT OUT | Home-sale question, not about maintenance |
| Do buyers need a City inspection in Florissant? | LEFT OUT | Home-sale question, not about maintenance |
| What does a sewer camera inspection show? | LEFT OUT | The service page asks "What does a sewer camera inspection find?" with the fuller answer |
| Do you repair or replace sewer lines? | LEFT OUT | The service page's "Do you offer sewer repair or replacement?" answers it in full |

## Service page (`svc-preventative-sewer-maintenance`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Preventative Sewer Maintenance in Florissant, MO" |
| metaDescription | LEFT OUT | Replaced |
| serviceDescription | ADAPTED | Same definition, Florissant, Missouri added |
| hero.title / hero.intro / hero.scope | ADAPTED | Hero title and intro; scope bullets are a template element |
| definition.answer | ADAPTED | `serviceDescription` and hero |
| definition.supporting 1 ("preventive maintenance" usage), 2 (not one fixed task) | LEFT OUT | FAQ "What is preventative sewer maintenance?" |
| definition.supporting 3 (some lines have a reason; no default schedule) | ADAPTED | Section 4 |
| signals 1-6 | ADAPTED | Problem cards 1-3 (gurgling or recurring clogs; a backup that has happened; known risk factors); the rest in FAQ |
| limits.can / limits.cannot | LEFT OUT | FAQ "What does a sewer camera inspection find?" and "What can a sewer camera not see?" |
| limits.callout (cleaning does not repair) | ADAPTED | Section 2 |
| process steps 1 to 6 | USED | `process`, verbatim |
| process.prep | LEFT OUT | Not a body topic |
| decision (camera first or cleaning first) | LEFT OUT | FAQ "Should a camera inspection come before cleaning?" |
| comparison table | LEFT OUT | Related pages carry siblings |
| ask items: video, written findings | USED | Inclusion 5 and section 2 |
| ask.keep | ADAPTED | Sections 2-3 (keep the records) |
| audiences | LEFT OUT | Not tied to the Florissant maintenance topics |
| markets (3 hubs) | LEFT OUT | Replaced by `coverage` |
| relatedPageIds | ADAPTED | Florissant page, this service, camera inspection, sewer cleaning |
| cta | ADAPTED | Rewritten for Florissant |
| inclusions (6 cards) | USED | `sl-blocks/preventative-sewer-maintenance` |

### Service FAQ (16): all 16 USED verbatim, including "How often should I schedule it?" (no single interval) and "How much does it cost?" (scope drives the work; no price).

Total FAQ on the page: 22 (6 Florissant + 16 service).
