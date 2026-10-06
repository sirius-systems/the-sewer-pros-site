# Source report: sl-florissant-backup

Page: Recurring Sewer Backup Diagnosis in Florissant, MO (`florissantBackupContent`, `content/pages/sl-stl-florissant-backup.tsx`).

Sources:
- LOCATION: `florissantContent` in `content/pages/st-louis-florissant.tsx` (`loc-stl-florissant`; MSD and City of Florissant facts read 2026-10-02; housing figure from the City's 2026-2030 Consolidated Plan citing ACS 2024 5-year estimates).
- SERVICE: `svc-recurring-sewer-backup-diagnosis` `v2` in `content/pages/services.tsx`, plus the shared service blocks.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

No company phone in the body, matching `sl-lv-city-backup`. The service FAQ's cost and same-day answers (DEC-088 wording) are carried as published (DEC-139). Every MSD or City phone number and dollar term is labelled as theirs. Nothing from the St. Louis City, Chesterfield, Ballwin or St. Charles pages is carried over.

## The four body sections and their sources

| # | h2 on the page | Florissant source | Service source |
|---|---|---|---|
| 1 | A repeat backup in Florissant starts with a call to MSD | `heroForm.card.note`, `whoToCall` (MSD agency), `responsibility` (MSD: lateral and connection private; table row 3; note on the part under the street) | `limits.callout`, `definition.supporting` 2 (documents evidence; does not repair) |
| 2 | Recurring backups are one of the City program's two ways in | `municipalProgram.steps` 1-4 (qualifying reasons; no prior plumbing inspection required; $300 deposit; contracted plumber and City Engineer; deposit reimbursed or kept), `callout` | `ask.keep` (own recorded evidence), `independent.steps` |
| 3 | A repeat backup can still be a denial, and the five-foot boundary matters | `municipalProgram.lede` (boundary), `afterSteps` 1 (three denial reasons) | `process` steps 2-3 (clearing first, then a recorded run), `limits.cannot` |
| 4 | MSD's projects and 1950-1979 housing do not explain your backup | `systemExplainer` p3, p4, p5 (Brookshire, Lindsay Lane tentative, public project vs. one lateral), `housingAge` p1-p2 | `causes` (grease, wipes, roots, sags, cracks, joints, collapse), `definition.supporting` 2, `independent.note` (compare estimates) |

Fourth problem card: A backup that may be the public sewer (ADAPTED from `whoToCall` p1: MSD's urgent reports are raw sewage inside or outside a house, missing manhole covers and flooded streets; call MSD about a building backup; a diagnosis is for the private lateral).

## Florissant location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in; ", MO" added |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (independent camera inspection before applying, buying or approving work) | ADAPTED | Hero intro: MSD private lateral and the City program's recurring-backup route |
| heroForm bullets (camera inspection, cleaning and jetting, locally owned since 2011) | LEFT OUT | Shell and company claims; the template supplies its own |
| heroForm card (title, intro, phone line suffix, nextSteps, form) | LEFT OUT | Template supplies its own request form |
| heroForm card note (building backup: contact MSD first at (314) 768-6260) | ADAPTED | Section 1, marked as MSD's number |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level |
| keyTakeaways 1 (MSD repairs the public sewer; lateral and connection are private, owner maintains and repairs) | ADAPTED | Section 1 |
| keyTakeaways 2 (program covers main to within five feet; $50 annual fee; inside the home and within five feet stays the owner's) | ADAPTED | Section 3 (boundary); the annual lateral fee appears only as a qualifying condition in section 2, amount LEFT OUT |
| keyTakeaways 3 (a camera inspection gives recorded evidence before you clean, buy or approve work) | ADAPTED | Section 2 (own recorded evidence) |
| keyTakeaways.jumpNav | LEFT OUT | Location-page navigation |
| serviceCards (nine) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer (MSD: lateral and connection private; cave-in traced to the public sewer is MSD's repair) | ADAPTED | Section 1; cave-in sentence LEFT OUT |
| responsibility card: the public sewer (dye test; MSD repairs; confirm utility by address) | ADAPTED | Section 1 (MSD building-backup line); dye test LEFT OUT here, the positive-test deposit waiver is in section 2 |
| responsibility card: the lateral line (owner's; program covers main to five feet; owner inside) | ADAPTED | Section 3 |
| responsibility.table row 1 (who owns it) | ADAPTED | Section 1 |
| responsibility.table row 2 (who maintains and repairs it) | ADAPTED | Section 1 |
| responsibility.table row 3 (who to contact first: MSD (314) 768-6260; Engineering (314) 839-7643) | ADAPTED | Section 1, MSD number only, marked MSD's |
| responsibility.table row 4 (what help exists: MSD crews; City program subject to rules, deposit, review) | ADAPTED | Section 2 |
| responsibility.table row 5 (where an inspection helps) | ADAPTED | Section 3 |
| responsibility.note (not legal advice; no published rule on the part of a lateral under the street) | ADAPTED | Section 1 (both statements) |
| systemExplainer p1 (MSD: most of St. Louis County has a separate system; City is combined) | LEFT OUT | County-level context, not about this service |
| systemExplainer p2 (MSD's page does not label every Florissant parcel) | LEFT OUT | Hedge for p1 |
| systemExplainer p3 (Brookshire Sanitary Relief: Wedgewood, about 6,000 feet, 2020-2022) | ADAPTED | Section 4 (replacing undersized and deteriorated wastewater sewer, to reduce basement backups); length and dates LEFT OUT |
| systemExplainer p4 (Lindsay Lane Sanitary Relief, Spring 2026 - Summer 2027 tentative) | ADAPTED | Section 4, "tentative" kept |
| systemExplainer p5 (a public project does not tell you any one property's lateral) | ADAPTED | Section 4 headline and sentence |
| systemExplainer.card (what a camera can show; closing) | LEFT OUT | The service page's camera can/cannot lists and FAQ cover it |
| housingAge p1 (21,229 units; vast majority built 1950-1979; ACS 2024 via the Consolidated Plan; city as a whole) | ADAPTED | Section 4, "vast majority of the housing stock"; unit count LEFT OUT |
| housingAge p2 (neither MSD nor the City publishes a pipe material or era) | ADAPTED | Section 4 |
| housingAge p3 (working drain is not proof of sound pipe; denial reasons; not a substitute for maintenance) | ADAPTED | Section 3 |
| housingAge p4 (source note) | ADAPTED | Section 4 names the Consolidated Plan |
| housingAge.table row 1 (cracks or breaks; hairline cracks as a denial reason) | ADAPTED | Section 3 |
| housingAge.table row 2 (joint separation; main to five feet) | ADAPTED | Section 3 |
| housingAge.table row 3 (roots; annual cabling) | LEFT OUT | Roots appear through the service page's named causes |
| housingAge.table row 4 (blockage with intact pipe; open and serviceable line can be denied) | ADAPTED | Section 3 |
| housingAge.table row 5 (a problem near the house; blockage within five feet can be denied) | ADAPTED | Section 3 |
| whoToCall p1 (MSD: building backup call; urgent reports: raw sewage, missing manholes, flooded streets) | ADAPTED | Section 1 and the new fourth card (urgent reports named) |
| whoToCall p2 (if MSD or a plumber points to your lateral, an independent camera inspection helps) | ADAPTED | Section 1 ("A diagnosis does not replace that call") |
| whoToCall.agency (MSD (314) 768-6260; limited assistance program) | ADAPTED | Section 1, marked MSD's |
| whoToCall.secondaryAgency Engineering (314) 839-7643 (sinkhole, program) | LEFT OUT | The program's route and deposit are given without the number; the number is in the FAQ |
| whoToCall.secondaryAgency Public Works (314) 839-7648 (permits) | LEFT OUT | No permit statement for cleaning is claimed |
| whoToCall.company (phone, hours) | LEFT OUT | No company phone, as on `sl-lv-city-backup` |
| municipalProgram.lede (covers defective lateral main to five feet; owner inside; $50 fee) | ADAPTED | Section 3; fee LEFT OUT |
| municipalProgram.paragraphs (spot repairs about 10 feet; not for whole laterals or preventing defects; not a substitute for maintenance) | LEFT OUT | Not needed for diagnosis |
| municipalProgram.covers (repair of defective lateral; fill rock, soil, seeding) | ADAPTED | Section 3; restoration LEFT OUT |
| municipalProgram.doesNotCover (under the home / within five feet; septic; landscaping; commercial and six-unit wording) | ADAPTED | Section 3 (within five feet as a denial reason); others LEFT OUT |
| municipalProgram.steps 1 (qualifying reason: confirmed cave-in, or recurring backups regular maintenance cannot resolve and annual fee paid; no prior plumbing inspection required) | ADAPTED | Section 2 (all three clauses) |
| municipalProgram.steps 2 ($300 deposit; none after a positive MSD dye test) | ADAPTED | Section 2, marked the City's term; the dye-test waiver LEFT OUT here, in the FAQ |
| municipalProgram.steps 3 (contracted plumber: cable and camera evaluation; City Engineer reviews video) | ADAPTED | Section 2 |
| municipalProgram.steps 4 (approved or denied; about two weeks; deposit reimbursed or kept) | ADAPTED | Section 2 (deposit reimbursed or kept); two-week average LEFT OUT, the City's timing |
| municipalProgram.afterSteps 1 (denial reasons; clogged-lateral emergency priority; repair-day access) | ADAPTED | Section 3 (three denial reasons); emergency priority LEFT OUT |
| municipalProgram.afterSteps 2 (page undated; no maximum benefit or funding status; confirm with Engineering) | LEFT OUT | Not needed |
| municipalProgram.callout (our inspection does not replace the City's plumber; no claim City accepts an outside report; City crew repairs) | ADAPTED | Section 2 |
| municipalProgram.closing (link to St. Louis sewer lateral inspection & reporting) | LEFT OUT | A link |
| secondOpinion (ledes, steps, callout, CTA) | ADAPTED | Section 4 last sentence (compare more than one written estimate) |
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
| Can a home sale speed up a lateral repair? | USED | Verbatim |
| Do buyers need a City inspection in Florissant? | USED | Verbatim |
| What does a sewer camera inspection show? | LEFT OUT | The service page answers it in full as "What can a sewer camera see?" |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-recurring-sewer-backup-diagnosis`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Recurring Sewer Backup Diagnosis in Florissant, MO" |
| metaDescription | LEFT OUT | Replaced |
| serviceDescription | ADAPTED | Same definition, Florissant, Missouri added |
| hero.title / hero.intro / hero.scope | ADAPTED | Hero title and intro; scope bullets are a template element |
| definition.answer | ADAPTED | `serviceDescription` |
| definition.supporting 1 (combines review, cleaning, camera, locating, findings) | ADAPTED | `serviceDescription` and hero |
| definition.supporting 2 (documents evidence; does not repair) | ADAPTED | Sections 1 and 4 |
| signals 1-3 (same clog returns; several fixtures; wastewater at a cleanout) | USED | Problem cards (from `sl-blocks`) |
| signals 3-7 (backs up when another fixture is used; gurgling; odors; wet yard) | LEFT OUT | Slot-limited; FAQ answers carry them |
| causes (7 items) | ADAPTED | Section 4 (grease, wipes, roots, sags, cracks, joints, collapse) |
| causes.after (cleaning does not repair the opening) | ADAPTED | Section 4 (does not repair anything) |
| limits.can | LEFT OUT | FAQ "What can a sewer camera see?" |
| limits.cannot | LEFT OUT | FAQ "Can a sewer camera find the exact cause of a backup?" |
| limits.callout | ADAPTED | Section 1 (findings apply only to the segment inspected) |
| process steps 1 to 6 | USED | `process`, verbatim |
| process.prep | LEFT OUT | FAQ "Where does the camera go in? Do I need a cleanout?" |
| decision (cleaning, camera, locating) | ADAPTED | Section 3 (clear once cleaned) |
| decision.aside (hydro jetting not part of every visit) | LEFT OUT | FAQ "Will hydro jetting damage my sewer line..." |
| independent band | ADAPTED | Section 4 last sentences |
| ask items: full video, written findings | USED | Inclusions 4-5 |
| ask items: other | LEFT OUT | FAQ "What should I ask for after a camera inspection?" |
| ask.keep | ADAPTED | Section 2 (own recorded evidence); Section 4 (keep the video) |
| situations (landlords, buyers and sellers, agents) | LEFT OUT | Not tied to the Florissant backup topics |
| markets (3 hubs) | LEFT OUT | Replaced by `coverage` |
| relatedPageIds | ADAPTED | Florissant page, this service, camera inspection, cleaning with camera |
| cta | ADAPTED | Rewritten for Florissant |
| inclusions (6 cards) | USED | `sl-blocks/recurring-sewer-backup-diagnosis` |

### Service FAQ (29): all 29 USED verbatim, including "How long does it take, and how much does it cost?" (price and time not published; "free estimate" wording as the service page has it) and "Can you come the same day, and is this emergency service?" (DEC-088 wording, carried as published per DEC-139).

Total FAQ on the page: 38 (9 Florissant + 29 service).
