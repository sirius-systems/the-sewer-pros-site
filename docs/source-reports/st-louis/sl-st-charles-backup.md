# Source report: sl-st-charles-backup

Page: Recurring Sewer Backup Diagnosis in St. Charles, MO (`stCharlesBackupContent`, `content/pages/sl-stl-st-charles-backup.tsx`).

Sources:
- LOCATION: `stCharlesContent` in `content/pages/st-louis-st-charles.tsx` (City of St. Charles Code and program pages read 2026-10-03; ACS 2024 5-year). St. Charles runs its own sewer system: no MSD fact or number is used.
- SERVICE: `svc-recurring-sewer-backup-diagnosis` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/recurring-sewer-backup-diagnosis.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | St. Charles source | Service source |
|---|---|---|---|
| 1 | A repeat backup: the City's system or your lateral? | `responsibility.answer`, `table` rows 1 and 4, `note` (no published rule under the street) | `definition` (documents visible conditions), `limits.callout`, FAQ "Is a recurring backup the city's problem or mine?" |
| 2 | During a backup: cable first, then Public Works, and where a diagnosis fits | `whoToCall.paragraphs` and `agency`, `heroForm.card.note` | `process` (clearing when needed; camera; findings), `independent` (you decide next steps) |
| 3 | A 1986 median year built will not explain a backup | `housingAge`, `systemExplainer` 4-5 (Hackmann Road manhole; a public project does not show a lateral) | `causes` (named causes of a repeat backup), `limits` (which one applies cannot be known without looking) |
| 4 | The City program pays 90 percent of a repair, so get the evidence first | `municipalProgram.lede`, `doesNotCover` 4 (repeat claims), steps 3, `callout` | `independent.note` (further evaluation outside our scope; compare written estimates; keep the video), `definition.supporting` (does not repair) |

## City of St. Charles location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle, metaDescription | ADAPTED | Service name swapped in; page-specific meta description written |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (independent inspection; City runs its own system and lateral program) | ADAPTED | Hero intro: own system, Code lateral definition, what a diagnosis documents |
| heroForm bullets, request card, form, nextSteps, phone line | LEFT OUT | Template supplies its own request form |
| heroForm.card.note (backup: plumber or drainlayer cables the lateral, then Public Works) | ADAPTED | Section 2 (cable first, then Public Works) |
| faqHeading, faqSchemaApproved | LEFT OUT | Template sets it |
| keyTakeaways 1 (own system through Public Works Sewer Division; MSD guidance does not apply) | ADAPTED | Section 1 ("not MSD") |
| keyTakeaways 2 (90 percent, $7,500, $28 fee, share stays with owner) | ADAPTED | Section 4 (90 percent, $7,500). The $28 fee is LEFT OUT |
| keyTakeaways 3 (camera inspection gives evidence before you clean, buy or approve work) | LEFT OUT | Camera is part of the service; the hero and section 1 carry it |
| keyTakeaways.jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| reviewBand | LEFT OUT | No review claims in service + location bodies |
| responsibility.answer (Sewer Division not MSD; Code lateral definition foundation to main; owner gets bids and chooses contractor) | ADAPTED | Section 1 (Sewer Division not MSD; Code lateral definition; owner arranges inspection, cleaning and repair) |
| responsibility card: the public sewer (two plants, 30 lift stations, confirm by address) | LEFT OUT | Plant and lift-station counts are not about backup diagnosis |
| responsibility card: the lateral line (City program covers part of repair; owner obtains three bids) | ADAPTED | Section 1 and the local problem card |
| responsibility.table row: who runs or arranges it | ADAPTED | Section 1 |
| responsibility.table row: who maintains and repairs it (90 percent, $7,500) | ADAPTED | Section 4 (90 percent, $7,500, labelled the City's terms) |
| responsibility.table row: who to contact first (plumber or drainlayer, then Public Works) | ADAPTED | Section 2 (plumber or drainlayer cables first, then Public Works) |
| responsibility.table row: what help exists | ADAPTED | Section 1 (Sewer Division can be contacted about sanitary sewer backups) |
| responsibility.table row: where an inspection helps | ADAPTED | Section 1 closing paragraph (findings apply to the segment inspected) |
| responsibility.note (not legal advice; no published rule on the part under the street or on City damage) | ADAPTED | Section 1 (no published rule on the part under the street). The City-damage point is LEFT OUT (no tie) |
| systemExplainer 1 (own system, plants, lift stations, outside MSD service area) | ADAPTED | Section 1 states Sewer Division, not MSD. Plant and lift-station counts and the MSD service-area sentence are LEFT OUT |
| systemExplainer 2 (combined or separate, age not stated) | LEFT OUT | Not about backup diagnosis |
| systemExplainer 3 (Newtown vacuum system) | LEFT OUT | Not about backup diagnosis |
| systemExplainer 4 (Hackmann Road creek manhole, relocation planned, no current status) | ADAPTED | Section 3 (Hackmann Road manhole; relocation planned; no current status found) |
| systemExplainer 5 (a public project does not tell a lateral's condition) | ADAPTED | Section 3 closing sentence (the public system at one location, not your lateral) |
| systemExplainer.card bullets and closing (what a camera can show) | LEFT OUT | Not about backup diagnosis |
| housingAge paragraph (median 1986, MOE 2 years, about 32,300 units, 62 percent 1980 or later, 7 percent 1939 or earlier) | ADAPTED | Section 3 (median 1986, ACS 2024 5-year). Margin of error, unit count and the 62 and 7 percent figures are LEFT OUT |
| housingAge.censusTable (10 rows) | LEFT OUT | Not about backup diagnosis |
| housingAge.afterCensus 1 (age does not tell pipe; City publishes no pipe material or era) | ADAPTED | Section 3 (City publishes no pipe material or installation era) |
| housingAge.afterCensus 2 (working drain is not proof; cable-first certification; City camera) | LEFT OUT | Not about backup diagnosis |
| housingAge.table (blockage with intact pipe; cracks; where a defect sits; sound line pays City camera cost; roots) | LEFT OUT | Not about backup diagnosis |
| housingAge.sourceNote (ACS 2024 5-year, B25034, B25035; percentages are our arithmetic) | ADAPTED | Section 3 attribution (ACS 2024 5-year). Table numbers are LEFT OUT |
| whoToCall.paragraphs (cable first, then Public Works; Sewer Division contact; none found for a direct backup or after-hours number) | ADAPTED | Section 2 (cable first, then Public Works; no direct Sewer Division backup number or after-hours line found) |
| whoToCall.agency (Public Works lateral program (636) 949-3363; Public Works Facility address) | ADAPTED | Section 2: (636) 949-3363, labelled the City's. The Public Works Facility address is LEFT OUT |
| whoToCall.secondaryAgency (Community Development (636) 949-3222; permits and inspections) | LEFT OUT | Not about backup diagnosis |
| whoToCall.company (phone, hours) | LEFT OUT | Not about backup diagnosis |
| municipalProgram.lede (since 2003; 90 percent; $7,500; $28 fee, older $20 figure; automatic enrollment) | ADAPTED | Section 4 (90 percent, $7,500). Since 2003, the $28 fee and automatic enrollment are LEFT OUT |
| municipalProgram.covers (repair work and digging, dirt, seeding; sidewalks, driveways, pavement) | LEFT OUT | Not about backup diagnosis |
| municipalProgram.doesNotCover 1 (landscaping and ornamental structures) | LEFT OUT | Not about backup diagnosis |
| municipalProgram.doesNotCover 2 (homes outside City limits) | LEFT OUT | Not about backup diagnosis |
| municipalProgram.doesNotCover 3 (seven or more units, commercial, septic) | LEFT OUT | Not about backup diagnosis |
| municipalProgram.doesNotCover 4 (undated sheet: initial cabling, City camera cost if sound, repeat claims within 12 months) | ADAPTED | Section 4 (repeat claims within 12 months). The initial-cabling and City-camera-cost items are LEFT OUT |
| municipalProgram.whoCanApply (up to six units; ownership or consent; taxes and bills paid; hold-harmless) | LEFT OUT | Not about backup diagnosis |
| municipalProgram.steps 1 (cable first; master plumber or drainlayer certification within six months) | LEFT OUT | Not about backup diagnosis |
| municipalProgram.steps 2-3 (apply; City camera investigation sets scope) | ADAPTED | Section 4 (the City sends its own camera to set the repair scope) |
| municipalProgram.steps 4-5 (three bids; repair then reimbursement) | LEFT OUT | Not about backup diagnosis |
| municipalProgram.afterSteps (fee revenue; no fund balance, waiting list or timeline found) | LEFT OUT | Not about backup diagnosis |
| municipalProgram.callout (our inspection does not replace the City camera; no claim City accepts it; no claim ours satisfies cabling; we do not repair) | ADAPTED | Section 4 (no claim the City accepts an outside report; we do not repair) |
| municipalProgram.closing (link to lateral inspection and reporting) | LEFT OUT | Not about backup diagnosis |
| secondOpinion (ledes, steps, callout, CTA) | LEFT OUT | Not about backup diagnosis |
| buyingGuide.lede and body (no sale rule found; rental occupancy inspection; City-limits and ownership conditions; not legal advice) | LEFT OUT | Sale rules are not about backup diagnosis; the FAQ carries the question |
| buyingGuide links, CTA, agents block | LEFT OUT | Not about backup diagnosis |
| nearbyAreas (Florissant, Chesterfield, Ballwin, St. Louis City, market hub) | ADAPTED | `coverage`: Florissant, Chesterfield, Ballwin, St. Louis City. The market hub card is LEFT OUT |
| finalCta title, paragraphs, bullets | ADAPTED | `cta.title` only; paragraphs and bullets replaced by `cta.body` |
| sources (14 links, lastReviewed, closingNote) | USED | Same |

### St. Charles FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who runs the sewer system in St. Charles, and is it MSD? | USED | Verbatim |
| Does St. Charles have a sewer lateral repair program, and what does it cost? | USED | Verbatim |
| Which St. Charles homes qualify? | USED | Verbatim |
| How much does the St. Charles program reimburse? | USED | Verbatim |
| What does the program cover and exclude? | USED | Verbatim |
| What do I have to do before I apply? | USED | Verbatim |
| Does a St. Charles lateral repair need a permit? | USED | Verbatim |
| Is a sewer inspection required before buying a St. Charles home? | USED | Verbatim |
| What does a sewer camera inspection show? | LEFT OUT | The service page asks "What can a sewer camera see?" with the fuller answer |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (recurring sewer backup diagnosis): every section

| Section / element | Status | Reason or where used |
|---|---|---|
| `seoTitle`, `metaDescription`, `serviceDescription` | ADAPTED | Localized with the cable-first guidance |
| `hero` intro and scope line | ADAPTED | Hero states what a diagnosis documents; the "no repair" line is in section 4 and the FAQ |
| `definition.answer`, `definition.supporting` | ADAPTED | `serviceDescription`, sections 1 and 4 |
| `definition.scope` | LEFT OUT | Service-page scope box |
| `signals` the same clog returns; several fixtures slow; wastewater at a cleanout | USED | Problem cards 1-3 (via `sl-blocks`) |
| `signals` backs up when another fixture is used; gurgling; odors; wet yard patch | LEFT OUT | Three problem cards plus one local; the FAQ carries these |
| `causes` (roots, grease, wipes, sag, cracks and joints, collapse) | ADAPTED | Section 3 ("public utility guidance names..."); the defective-connection cause is LEFT OUT (cut for length) |
| `limits.can`, `limits.cannot` | ADAPTED | Section 1 (findings apply to the segment reached); the lists stay on the service page and in the FAQ |
| `limits.callout` | LEFT OUT | Not tied to a St. Charles fact |
| `process` 6 steps | USED | `process`, verbatim |
| `process.prep`, `decision` | LEFT OUT | Service-page sections; related pages link camera and cleaning pages |
| `independent` and its note | ADAPTED | Section 4 (further evaluation outside our scope; compare written estimates; keep the video) |
| `ask` items and `ask.keep` | ADAPTED | Video and written findings in inclusions; the rest stays on the service page |
| `situations` | LEFT OUT | Not tied to a St. Charles fact |
| `markets` cards | LEFT OUT | Replaced by `coverage` |
| `request`, `relatedDescriptions`, `cta` | LEFT OUT | Template fields; this page has its own CTA |

## Service FAQ

29 service questions: all 29 USED verbatim. The cost and same-day answers ("How long does it take, and how much does it cost?", "Can you come the same day, and is this emergency service?") carry the DEC-088 wording exactly as the service FAQ has it, per DEC-139.


Total FAQ on the page: 38 (9 St. Charles + 29 service).

## Open questions

- "Is a recurring backup the city's problem or mine?" (service FAQ) is generic. The St. Charles-specific answer is in section 1 and the location FAQ ("Who runs the sewer system in St. Charles, and is it MSD?").
- The $28 fee versus the older $20 figure on some City pages, the undated information sheet's exclusions (initial cabling, City camera cost if the line is sound, repeat claims within 12 months), and the absence of a published fund balance or timeline all come from the location page as written. They are repeated with its "confirm with Public Works" hedges, not independently re-verified.
- The location page publishes the ACS figures as stated fact with sources (median 1986; about 62 percent 1980 or later), so they are used. Nothing marked pending or unverified on the location page is used.
- No claim is made that the City accepts an outside camera report or that our work satisfies the City's cabling certification (location page callout).
