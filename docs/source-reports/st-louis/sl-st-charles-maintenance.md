# Source report: sl-st-charles-maintenance

Page: Preventative Sewer Maintenance in St. Charles, MO (`stCharlesMaintenanceContent`, `content/pages/sl-stl-st-charles-maintenance.tsx`).

Sources:
- LOCATION: `stCharlesContent` in `content/pages/st-louis-st-charles.tsx` (City of St. Charles Code and program pages read 2026-10-03; ACS 2024 5-year). St. Charles runs its own sewer system: no MSD fact or number is used.
- SERVICE: `svc-preventative-sewer-maintenance` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/preventative-sewer-maintenance.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | St. Charles source | Service source |
|---|---|---|---|
| 1 | The City program pays to repair a defective lateral, not to look after one | `municipalProgram.lede` (90 percent, $7,500, annual fee), `covers` (repair work, digging, seeding, sidewalks, driveways, pavement) | `definition` (planned inspection and cleaning; not repair), `limits.callout` (cleaning does not repair) |
| 2 | The owner arranges the lateral, so the record is yours | `responsibility.answer` (Code definition; owner obtains bids; Sewer Division not MSD) | `process` (recorded camera pass; findings), `ask` (video, findings), `definition.supporting` (no fixed task) |
| 3 | A 1986 median year built, and still no default schedule | `housingAge` (median 1986, MOE 2 years, about 62 percent 1980 or later; no pipe material or era) | `definition.supporting` (no default schedule), `signals` "Known risk factors" |
| 4 | The City's system and the City's camera are not part of a visit | `systemExplainer` 3-4 (Newtown vacuum system; Hackmann Road manhole), `municipalProgram.steps` 1 and 3, `callout`, `whoToCall.agency` | `process` (what a visit covers), `limits.callout` (further evaluation outside our scope) |

## City of St. Charles location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle, metaDescription | ADAPTED | Service name swapped in; page-specific meta description written |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (independent inspection; City runs its own system and lateral program) | ADAPTED | Hero intro: own system, program reimburses repair, maintenance as the planned version |
| heroForm bullets, request card, form, nextSteps, phone line | LEFT OUT | Template supplies its own request form |
| heroForm.card.note (backup: plumber or drainlayer cables the lateral, then Public Works) | LEFT OUT | Backup guidance, not maintenance |
| faqHeading, faqSchemaApproved | LEFT OUT | Template sets it |
| keyTakeaways 1 (own system through Public Works Sewer Division; MSD guidance does not apply) | ADAPTED | Section 2 ("not MSD") |
| keyTakeaways 2 (90 percent, $7,500, $28 fee, share stays with owner) | ADAPTED | Section 1 (90 percent, $7,500, annual fee on the tax bill). The $28 figure is LEFT OUT |
| keyTakeaways 3 (camera inspection gives evidence before you clean, buy or approve work) | LEFT OUT | Camera is part of the service; the hero carries it |
| keyTakeaways.jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| reviewBand | LEFT OUT | No review claims in service + location bodies |
| responsibility.answer (Sewer Division not MSD; Code lateral definition foundation to main; owner gets bids and chooses contractor) | ADAPTED | Section 2 (Sewer Division not MSD; Code lateral definition; owner obtains bids and chooses the contractor) |
| responsibility card: the public sewer (two plants, 30 lift stations, confirm by address) | LEFT OUT | Plant and lift-station counts are not about maintenance |
| responsibility card: the lateral line (City program covers part of repair; owner obtains three bids) | ADAPTED | Section 2 |
| responsibility.table row: who runs or arranges it | LEFT OUT | Not about maintenance |
| responsibility.table row: who maintains and repairs it (90 percent, $7,500) | ADAPTED | Section 1 (90 percent, $7,500, labelled the City's terms) |
| responsibility.table row: who to contact first (plumber or drainlayer, then Public Works) | LEFT OUT | Not about maintenance |
| responsibility.table row: what help exists | LEFT OUT | Not about maintenance |
| responsibility.table row: where an inspection helps | LEFT OUT | Not about maintenance |
| responsibility.note (not legal advice; no published rule on the part under the street or on City damage) | LEFT OUT | Not about maintenance |
| systemExplainer 1 (own system, plants, lift stations, outside MSD service area) | ADAPTED | Section 2 states Sewer Division, not MSD. Plant and lift-station counts and the MSD service-area sentence are LEFT OUT |
| systemExplainer 2 (combined or separate, age not stated) | LEFT OUT | Not about maintenance |
| systemExplainer 3 (Newtown vacuum system) | ADAPTED | Section 4 (Newtown vacuum system, the City's) |
| systemExplainer 4 (Hackmann Road creek manhole, relocation planned, no current status) | ADAPTED | Section 4 (Hackmann Road manhole; the City's) |
| systemExplainer 5 (a public project does not tell a lateral's condition) | ADAPTED | Section 4 last sentence of paragraph 1 (a visit covers the accessible line on your property) |
| systemExplainer.card bullets and closing (what a camera can show) | LEFT OUT | Not about maintenance |
| housingAge paragraph (median 1986, MOE 2 years, about 32,300 units, 62 percent 1980 or later, 7 percent 1939 or earlier) | ADAPTED | Section 3 (median 1986, margin of error 2 years, about 62 percent built 1980 or later, labelled our arithmetic). The unit count and the 7 percent figure are LEFT OUT |
| housingAge.censusTable (10 rows) | LEFT OUT | Not about maintenance |
| housingAge.afterCensus 1 (age does not tell pipe; City publishes no pipe material or era) | ADAPTED | Section 3 (City publishes no pipe material or installation era) |
| housingAge.afterCensus 2 (working drain is not proof; cable-first certification; City camera) | LEFT OUT | Not about maintenance |
| housingAge.table (blockage with intact pipe; cracks; where a defect sits; sound line pays City camera cost; roots) | LEFT OUT | Not about maintenance |
| housingAge.sourceNote (ACS 2024 5-year, B25034, B25035; percentages are our arithmetic) | ADAPTED | Section 3 attribution (ACS 2024 5-year). Table numbers are LEFT OUT |
| whoToCall.paragraphs (cable first, then Public Works; Sewer Division contact; none found for a direct backup or after-hours number) | LEFT OUT | Not about maintenance |
| whoToCall.agency (Public Works lateral program (636) 949-3363; Public Works Facility address) | ADAPTED | Section 4: (636) 949-3363, labelled the City's |
| whoToCall.secondaryAgency (Community Development (636) 949-3222; permits and inspections) | LEFT OUT | Not about maintenance |
| whoToCall.company (phone, hours) | LEFT OUT | Not about maintenance |
| municipalProgram.lede (since 2003; 90 percent; $7,500; $28 fee, older $20 figure; automatic enrollment) | ADAPTED | Section 1 (90 percent, $7,500, annual fee on the tax bill). Since 2003 and automatic enrollment are LEFT OUT |
| municipalProgram.covers (repair work and digging, dirt, seeding; sidewalks, driveways, pavement) | ADAPTED | Section 1 (what the program covers: patching or replacement, digging, dirt, seeding, sidewalks, driveways, pavement). Basis for "the City's list does not name upkeep" |
| municipalProgram.doesNotCover 1 (landscaping and ornamental structures) | LEFT OUT | Not about maintenance |
| municipalProgram.doesNotCover 2 (homes outside City limits) | LEFT OUT | Not about maintenance |
| municipalProgram.doesNotCover 3 (seven or more units, commercial, septic) | LEFT OUT | Not about maintenance |
| municipalProgram.doesNotCover 4 (undated sheet: initial cabling, City camera cost if sound, repeat claims within 12 months) | LEFT OUT | Not about maintenance |
| municipalProgram.whoCanApply (up to six units; ownership or consent; taxes and bills paid; hold-harmless) | LEFT OUT | Not about maintenance |
| municipalProgram.steps 1 (cable first; master plumber or drainlayer certification within six months) | ADAPTED | Section 4 (the City asks for a cabling certification first) |
| municipalProgram.steps 2-3 (apply; City camera investigation sets scope) | ADAPTED | Section 4 (the City sends its own camera to set the repair scope) |
| municipalProgram.steps 4-5 (three bids; repair then reimbursement) | LEFT OUT | Not about maintenance |
| municipalProgram.afterSteps (fee revenue; no fund balance, waiting list or timeline found) | LEFT OUT | Not about maintenance |
| municipalProgram.callout (our inspection does not replace the City camera; no claim City accepts it; no claim ours satisfies cabling; we do not repair) | ADAPTED | Section 4 (our records replace neither step; no claim the City accepts an outside report) and section 1 (we do not repair) |
| municipalProgram.closing (link to lateral inspection and reporting) | LEFT OUT | Not about maintenance |
| secondOpinion (ledes, steps, callout, CTA) | LEFT OUT | Not about maintenance |
| buyingGuide.lede and body (no sale rule found; rental occupancy inspection; City-limits and ownership conditions; not legal advice) | LEFT OUT | Sale rules are not about maintenance; the FAQ question is skipped |
| buyingGuide links, CTA, agents block | LEFT OUT | Not about maintenance |
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
| Is a sewer inspection required before buying a St. Charles home? | LEFT OUT | Not about maintenance |
| What does a sewer camera inspection show? | LEFT OUT | The service page asks "What does a sewer camera inspection find?" and answers it |
| Do you repair or replace sewer lines? | LEFT OUT | The service page's "Do you offer sewer repair or replacement?" answers it in full |

## Service page (preventative sewer maintenance): every section

| Section / element | Status | Reason or where used |
|---|---|---|
| `seoTitle`, `metaDescription`, `serviceDescription` | ADAPTED | Localized with the repair-versus-upkeep distinction |
| `hero` intro | ADAPTED | Hero states the planned version for the owner |
| `definition.answer`, `definition.supporting` | ADAPTED | `serviceDescription`, sections 1-3 (no default schedule) |
| `definition.scope` | LEFT OUT | Service-page scope box |
| `signals` gurgling or recurring clogs; a backup that has already happened; known risk factors | USED | Problem cards 1-3 (via `sl-blocks`); risk factors also in section 3 |
| `signals` several drains slow; odor; wet yard patches | LEFT OUT | Three problem cards plus one local |
| `limits.can`, `limits.cannot` | LEFT OUT | Service-page lists; the FAQ carries them |
| `limits.callout` (cleaning does not repair; further evaluation outside our scope) | ADAPTED | Sections 1 and 4 |
| `process` 6 steps | USED | `process`, verbatim |
| `process.prep`, `decision`, `comparison` | LEFT OUT | Service-page sections; related pages link camera and cleaning pages |
| `ask` items and `ask.keep` | ADAPTED | Video and written findings in section 2 and inclusions; the rest stays on the service page |
| `audiences` | LEFT OUT | Not tied to a St. Charles fact |
| `markets` cards | LEFT OUT | Replaced by `coverage` |
| `request`, `relatedDescriptions`, `cta` | LEFT OUT | Template fields; this page has its own CTA |

## Service FAQ

16 service questions: all 16 USED verbatim, including "How often should I schedule it?", "How long does it take?" and "How much does it cost?" (DEC-088 wording carried exactly as the service FAQ has it; no interval, schedule or price is added).


Total FAQ on the page: 23 (7 St. Charles + 16 service).

## Open questions

- No inspection interval is stated and no City inspection duty is claimed: the St. Charles sources give none. "The City's list does not name upkeep" rests on the location page's `covers` list only; it is not a claim that the program excludes maintenance in any other document.
- The $28 fee versus the older $20 figure on some City pages, the undated information sheet's exclusions (initial cabling, City camera cost if the line is sound, repeat claims within 12 months), and the absence of a published fund balance or timeline all come from the location page as written. They are repeated with its "confirm with Public Works" hedges, not independently re-verified.
- The location page publishes the ACS figures as stated fact with sources (median 1986; about 62 percent 1980 or later), so they are used. Nothing marked pending or unverified on the location page is used.
- No claim is made that the City accepts an outside camera report or that our work satisfies the City's cabling certification (location page callout).
