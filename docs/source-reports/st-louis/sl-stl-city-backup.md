# Source report: sl-stl-city-backup

Page: Recurring Sewer Backup Diagnosis in St. Louis City, MO (`stLouisCityBackupContent`, `content/pages/sl-stl-city-backup.tsx`).

Sources:
- LOCATION: `stLouisCityContent` in `content/pages/st-louis-city.tsx` (MSD and City facts read 2026-10-03; the City program page is dated 2014).
- SERVICE: `svc-recurring-sewer-backup-diagnosis` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/recurring-sewer-backup-diagnosis.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Facts deliberately NOT used on any St. Louis City service page: the "about 58 percent built in 1939 or earlier" figure (primary Census table check pending), the program's $28 fee, and anything from the Chesterfield, Ballwin, Florissant or St. Charles pages.

## The four body sections and their sources

| # | h2 on the page | St. Louis City source | Service source |
|---|---|---|---|
| 1 | A repeat backup: MSD's main or your lateral? | `responsibility` (answer, cards, table), FAQ 1-2 and 8 (MSD: a private-lateral blockage is a common cause) | `limits.cannot`, FAQ "Is a recurring backup the city's problem or mine?" |
| 2 | During a backup: MSD first, then the footage | `whoToCall` (paragraphs, MSD agency), `heroForm` note | `definition.supporting`, `ask` |
| 3 | Combined sewers and rain are one possible cause, not the only one | `systemExplainer` p1, p3, p4 | `causes`, `process` step 2 (a camera cannot see under water) |
| 4 | The City program covers damage, not clogs, so get the evidence first | `municipalProgram` (lede, doesNotCover, steps, callout), `secondOpinion` | `independent.note`, `ask.keep`, `definition.scope` |

## St. Louis City location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (MSD maintains the main; lateral to it is private; independent evidence) | ADAPTED | Hero intro: MSD names a private-lateral blockage as a common cause of backup |
| heroForm bullets (camera findings; cleaning when evidence supports it; family-operated since 2011) | LEFT OUT | Shell supplies trust strip |
| heroForm request card, form, hours line | LEFT OUT | Template supplies its own request form; no company phone in the body (as on the Las Vegas page) |
| heroForm card note (sewage backing up: contact MSD first, (314) 768-6260) | ADAPTED | Section 2 (MSD report line, labelled MSD's) |
| faqHeading, faqSchemaApproved | LEFT OUT | Template sets it |
| keyTakeaways 1 (MSD maintains the main; the lateral is private property) | ADAPTED | Section 1 |
| keyTakeaways 2 (combined sewers; only an inspection shows your own line) | ADAPTED | Section 3 and fourth problem card |
| keyTakeaways 3 (recorded evidence before you clean, buy, or approve major work) | ADAPTED | Hero ("before you approve work") |
| keyTakeaways jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer (MSD maintains the main; lateral and connection private, even under street or alley) | ADAPTED | Section 1 |
| responsibility card: the public sewer main (MSD, not a City department) | ADAPTED | Section 1 (MSD repairs the public sewer if it caused a backup) |
| responsibility card: the lateral line (private, including under the right-of-way) | ADAPTED | Section 1 |
| responsibility table: Who owns it | ADAPTED | Section 1 |
| responsibility table: Who maintains and repairs it | ADAPTED | Section 1 |
| responsibility table: Who to contact first (MSD (314) 768-6260) | ADAPTED | Section 2 |
| responsibility table: What help exists (City program, six or fewer units, not clogs or roots) | ADAPTED | Section 4 |
| responsibility table: Where an inspection helps | ADAPTED | Section 1 (footage applies only to the segment inspected) |
| responsibility.note (general information, not legal advice) | LEFT OUT | Page uses "confirm" wording and no legal advice |
| systemExplainer p1 (most of the City is served by combined sewers) | ADAPTED | Section 3 |
| systemExplainer p2 (MSD: among the oldest in the country, brick tunnels; County mostly separate) | LEFT OUT | Age of the combined sewers is not a backup-diagnosis fact |
| systemExplainer p3 (intense rain can overwhelm capacity; gutters, sump pumps, yard drains; Get the Rain Out) | ADAPTED | Section 3 (rain capacity, wet-weather basement backups, gutters, sump pumps, yard drains); Get the Rain Out LEFT OUT |
| systemExplainer p4 (system-level facts, not the condition of any one lateral) | ADAPTED | Section 3 ("system-level facts, not findings about your lateral") |
| systemExplainer card (what a camera can show on your lateral; closing) | LEFT OUT | Camera list is carried by the service FAQ "What can a sewer camera see?" |
| housingAge p1 (the "about 58 percent built in 1939 or earlier" figure) | LEFT OUT | The 58 percent figure is not used on any page in this batch |
| housingAge p2 (lateral materials changed over decades; general industry timelines; many repaired or replaced) | LEFT OUT | Materials are not the named causes of a repeat backup on this page; the service causes list is used instead |
| housingAge p3 (only an inspection shows material and condition; Census attribution) | LEFT OUT | Same |
| housingAge.table (vitrified clay, cast iron, Orangeburg, PVC/ABS) | LEFT OUT | No table slot |
| whoToCall paragraph 1 (sewage through a floor drain, odor, overflow, missing manhole: report to MSD; MSD investigates) | ADAPTED | Section 2 |
| whoToCall paragraph 2 (if MSD or a plumber points to your lateral, or you want proof of it) | ADAPTED | Section 2 (what you bring when MSD or a plumber points to your lateral) |
| whoToCall.agency (MSD (314) 768-6260; report and building-backup links) | ADAPTED | Section 2: number only, labelled MSD's; report and building-backup links LEFT OUT |
| whoToCall.company (company phone and hours) | LEFT OUT | No company phone on this page, as on the Las Vegas page |
| municipalProgram.lede (aimed at severe damage under the right-of-way, not routine clogs or roots) | ADAPTED | Section 4 |
| municipalProgram p1 (six or fewer units; fully paid real-estate taxes) | LEFT OUT | Eligibility detail is not about diagnosis; section 4 keeps the damage-versus-clogs point |
| municipalProgram p2 (replacement needs a plumbing permit and inspection; City-certified licensed plumbing contractors) | LEFT OUT | Permit rule is about replacement; the page says only that we do not sell it |
| municipalProgram p3 (page dated 2014; the $28 fee; confirm with the Street Division) | LEFT OUT | Dated terms and the $28 fee are not used here |
| municipalProgram.covers (severe damage under the right-of-way; eligible properties) | ADAPTED | Section 4 (damage that causes a cave-in or a backup into the home) |
| municipalProgram.doesNotCover (clogs or roots anywhere on the lateral; breaks under private property) | ADAPTED | Section 4 (clogs or roots anywhere on the lateral) |
| municipalProgram.steps (report the problem; licensed City plumber inspects; statement and video to the Street Department) | ADAPTED | Section 4 (licensed City plumber's statement and video; the City decides eligibility) |
| municipalProgram.afterSteps (contact the Street Division to confirm eligibility) | LEFT OUT | Not repeated; FAQ carries it |
| municipalProgram.callout (where an independent inspection fits; it does not replace the City step) | ADAPTED | Section 4 ("an independent diagnosis does not replace that step") |
| municipalProgram.closing (link to the lateral inspection and reporting service) | LEFT OUT | Link to a different service |
| secondOpinion (ledes, steps, callout, CTA) | ADAPTED | Section 4 last sentences (keep the video, compare estimates); rest LEFT OUT |
| buyingGuide.lede (a sewer scope is a separate, focused inspection; ask your home inspector) | LEFT OUT | Buying is not a backup topic; FAQ carries it |
| buyingGuide.body (older City properties, older infrastructure; the lateral is the buyer's after closing) | LEFT OUT | Same |
| buyingGuide links and CTA | LEFT OUT | Hub elements |
| buyingGuide.agents (association affiliations, video and written findings, not legal advice) | LEFT OUT | Hub element |
| nearbyAreas (Chesterfield, Ballwin, Florissant, St. Charles, market hub) | ADAPTED | `coverage`: the other four St. Louis locations |
| finalCta (title, paragraphs, bullets, form) | ADAPTED | `cta.title`; paragraphs and bullets replaced by `cta.body` |
| sources (8 links, lastReviewed, closingNote) | USED | Same |
| servicePageIds | LEFT OUT | Location-page link list |

### St. Louis City FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for a sewer blockage on private property in St. Louis? | USED | Verbatim; carried under the "In St. Louis City" group |
| Does MSD fix the sewer line between my house and the street? | USED | Verbatim; carried under the "In St. Louis City" group |
| What does a sewer camera inspection show? | LEFT OUT | Camera question the service page answers in full ("What can a sewer camera see?") |
| Can a sewer line be cleaned instead of replaced? | USED | Verbatim; carried under the "In St. Louis City" group |
| Should I inspect the sewer before buying a house in St. Louis City? | USED | Verbatim; carried under the "In St. Louis City" group |
| What are possible signs of a blocked or damaged private lateral? | USED | Verbatim; carried under the "In St. Louis City" group |
| Why can heavy rain contribute to sewer backups in St. Louis City? | USED | Verbatim; carried under the "In St. Louis City" group |
| Does the City repair every private lateral under a street or alley? | USED | Verbatim; carried under the "In St. Louis City" group |
| How does a St. Louis City owner apply for the Sewer Lateral Repair Program? | USED | Verbatim; carried under the "In St. Louis City" group |
| Do you repair or replace sewer lines? | USED | Verbatim; carried under the "In St. Louis City" group |

## Service page (`svc-recurring-sewer-backup-diagnosis`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Recurring Sewer Backup Diagnosis in St. Louis City, MO" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, St. Louis City, Missouri added |
| hero.title | ADAPTED | "Recurring Sewer Backup Diagnosis in St. Louis City" |
| hero.intro p1 (clearing again does not tell you why; camera, cleaning first when it blocks the view) | ADAPTED | Hero intro |
| hero.intro p2 (cleaning, diagnostics, locating only; no repair) | ADAPTED | Section 4 |
| hero.scope bullets | LEFT OUT | Template element |
| definition.answer, supporting 1-2 | ADAPTED | `serviceDescription`, hero, section 1 |
| definition.scope | ADAPTED | Section 4 |
| signals (7 items) | USED | Three cards in `sl-blocks` ("The same clog returns", "Several fixtures drain slowly at once", "Wastewater at a cleanout or outside drain"); the rest in the FAQ |
| causes (7 items) | ADAPTED | Section 3 sentence (grease, wipes, roots, sags, cracks, separated joints, defective connections, collapse) |
| limits.can, limits.cannot, callout | LEFT OUT | FAQ "What can a sewer camera see?" and "Can a sewer camera find the exact cause of a backup?" |
| limits.cannot (footage does not establish responsibility or the connection) | ADAPTED | Section 1 |
| process steps 1 to 6 | USED | `process`, verbatim; this service names no equipment |
| process.prep | LEFT OUT | No slot; FAQ "Where does the camera go in? Do I need a cleanout?" |
| decision (cleaning, camera, locating) and aside | LEFT OUT | FAQ answers; section 3 keeps "a camera cannot see under water" |
| independent band | ADAPTED | Section 4 |
| ask items and keep | ADAPTED | Inclusions 4-5; section 4 ("keep the video and compare more than one written estimate") |
| situations (landlords, buyers and sellers, agents) | LEFT OUT | FAQ answers |
| markets (3 hubs) | LEFT OUT | Replaced by `coverage` |
| faqTitle, request.* | LEFT OUT | Template slots |
| relatedPageIds (5) | ADAPTED | St. Louis City page, this service, camera inspection, cleaning with camera |
| cta | ADAPTED | Rewritten for St. Louis City |
| inclusions (6 cards) | USED | `sl-blocks/recurring-sewer-backup-diagnosis` |

### Service FAQ (29)

All service questions are USED verbatim.

| Question | Status | Reason |
|---|---|---|
| All 29 service questions | USED | Verbatim, including the three DEC-088 strings (the cost FAQ "Ask about a free estimate before scheduling.", the same-day FAQ, and the request intro) exactly as the service page has them, per DEC-139. No new availability or price wording is written on this page |

Total FAQ on the page: 38 (9 St. Louis City + 29 service). Skip in code: the St. Louis City question "What does a sewer camera inspection show?".
