# Source report: sl-st-charles-drain

Page: Drain Cleaning in St. Charles, MO (`stCharlesDrainContent`, `content/pages/sl-stl-st-charles-drain.tsx`).

Sources:
- LOCATION: `stCharlesContent` in `content/pages/st-louis-st-charles.tsx` (City of St. Charles Code and program pages read 2026-10-03; ACS 2024 5-year). St. Charles runs its own sewer system: no MSD fact or number is used.
- SERVICE: `svc-drain-cleaning` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/drain-cleaning.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | St. Charles source | Service source |
|---|---|---|---|
| 1 | Your fixture drains sit upstream of a lateral the owner arranges | `responsibility.answer` (Sewer Division not MSD; Code definition; owner obtains bids and chooses the contractor) | `definition.supporting` (drain cleaning vs. sewer cleaning), `limits.cannot` (public sewer main) |
| 2 | One drain, several drains, or a backup the City says to cable first | `heroForm.card.note`, `whoToCall.paragraphs` and `agency` (cable first; (636) 949-3363, the City's), `municipalProgram.steps` 1 and `callout` (cabling certification; no claim ours satisfies it), company phone from `marketOperatingDetail` | `triage` rows (one fixture, several fixtures, water or sewage coming up) |
| 3 | A 1986 median year built says little about a clog | `housingAge` paragraph and `afterCensus` (median 1986; no pipe material or era; a working drain is not proof) | `limits.callout`, `signals` "Clogs that keep returning", `triage` row "clogs again after it was cleared" |
| 4 | What the City program leaves out, and what cleaning does not fix | `municipalProgram.lede` (90 percent, $7,500) and `doesNotCover` 4 (initial cabling; repeat claims within 12 months) | `limits.cannot` (cracked, broken or collapsed pipe; offset or separated joint; roots at a joint), `ask` (video and written findings) |

## City of St. Charles location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle, metaDescription | ADAPTED | Service name swapped in; page-specific meta description written |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (independent inspection; City runs its own system and lateral program) | ADAPTED | Hero intro: own system, owner-arranged program, fixture drains upstream of the lateral |
| heroForm bullets, request card, form, nextSteps, phone line | LEFT OUT | Template supplies its own request form |
| heroForm.card.note (backup: plumber or drainlayer cables the lateral, then Public Works) | ADAPTED | Section 2 (cable the lateral first, then Public Works) |
| faqHeading, faqSchemaApproved | LEFT OUT | Template sets it |
| keyTakeaways 1 (own system through Public Works Sewer Division; MSD guidance does not apply) | ADAPTED | Section 1 ("not MSD") |
| keyTakeaways 2 (90 percent, $7,500, $28 fee, share stays with owner) | ADAPTED | Section 4 (90 percent, $7,500). The $28 fee is LEFT OUT (not about drain cleaning) |
| keyTakeaways 3 (camera inspection gives evidence before you clean, buy or approve work) | LEFT OUT | Camera is a separate service |
| keyTakeaways.jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| reviewBand | LEFT OUT | No review claims in service + location bodies |
| responsibility.answer (Sewer Division not MSD; Code lateral definition foundation to main; owner gets bids and chooses contractor) | ADAPTED | Section 1 (Sewer Division not MSD; Code lateral definition; owner obtains bids and chooses the contractor) |
| responsibility card: the public sewer (two plants, 30 lift stations, confirm by address) | LEFT OUT | Plant and lift-station counts are not about drain cleaning |
| responsibility card: the lateral line (City program covers part of repair; owner obtains three bids) | ADAPTED | Section 1 (owner obtains three bids) |
| responsibility.table row: who runs or arranges it | ADAPTED | Section 1 |
| responsibility.table row: who maintains and repairs it (90 percent, $7,500) | ADAPTED | Section 4 (90 percent, $7,500, labelled the City's terms) |
| responsibility.table row: who to contact first (plumber or drainlayer, then Public Works) | ADAPTED | Section 2 (plumber or drainlayer cables first, then Public Works) |
| responsibility.table row: what help exists | LEFT OUT | Not about drain cleaning |
| responsibility.table row: where an inspection helps | LEFT OUT | Camera inspection is a separate service |
| responsibility.note (not legal advice; no published rule on the part under the street or on City damage) | LEFT OUT | Not about drain cleaning |
| systemExplainer 1 (own system, plants, lift stations, outside MSD service area) | ADAPTED | Section 1 states Sewer Division, not MSD. Plant and lift-station counts and the MSD service-area sentence are LEFT OUT |
| systemExplainer 2 (combined or separate, age not stated) | LEFT OUT | Not about drain cleaning |
| systemExplainer 3 (Newtown vacuum system) | LEFT OUT | Not about drain cleaning |
| systemExplainer 4 (Hackmann Road creek manhole, relocation planned, no current status) | LEFT OUT | Not about drain cleaning |
| systemExplainer 5 (a public project does not tell a lateral's condition) | LEFT OUT | Not about drain cleaning |
| systemExplainer.card bullets and closing (what a camera can show) | LEFT OUT | Not about drain cleaning |
| housingAge paragraph (median 1986, MOE 2 years, about 32,300 units, 62 percent 1980 or later, 7 percent 1939 or earlier) | ADAPTED | Section 3 (median 1986, ACS 2024 5-year). Margin of error, unit count and the 62 and 7 percent figures are LEFT OUT |
| housingAge.censusTable (10 rows) | LEFT OUT | Not about drain cleaning |
| housingAge.afterCensus 1 (age does not tell pipe; City publishes no pipe material or era) | ADAPTED | Section 3 (City publishes no pipe material or installation era) |
| housingAge.afterCensus 2 (working drain is not proof; cable-first certification; City camera) | ADAPTED | Section 3 ("a drain that works again is not proof of a sound pipe", "a blockage is not proof of a broken one") and section 2 (cabling certification) |
| housingAge.table (blockage with intact pipe; cracks; where a defect sits; sound line pays City camera cost; roots) | LEFT OUT | Not about drain cleaning |
| housingAge.sourceNote (ACS 2024 5-year, B25034, B25035; percentages are our arithmetic) | ADAPTED | Section 3 attribution (ACS 2024 5-year). Table numbers are LEFT OUT |
| whoToCall.paragraphs (cable first, then Public Works; Sewer Division contact; none found for a direct backup or after-hours number) | ADAPTED | Section 2 (cable first, then Public Works). The "no direct Sewer Division backup number or after-hours line found" sentence is LEFT OUT (cut for length) |
| whoToCall.agency (Public Works lateral program (636) 949-3363; Public Works Facility address) | ADAPTED | Section 2: (636) 949-3363, labelled the City's. The Public Works Facility address is LEFT OUT |
| whoToCall.secondaryAgency (Community Development (636) 949-3222; permits and inspections) | LEFT OUT | Not about drain cleaning |
| whoToCall.company (phone, hours) | ADAPTED | Section 2: company phone read from `marketOperatingDetail['st-louis-mo']`, never typed. Hours LEFT OUT |
| municipalProgram.lede (since 2003; 90 percent; $7,500; $28 fee, older $20 figure; automatic enrollment) | ADAPTED | Section 4 (90 percent, $7,500). Since 2003, the $28 fee and automatic enrollment are LEFT OUT |
| municipalProgram.covers (repair work and digging, dirt, seeding; sidewalks, driveways, pavement) | LEFT OUT | Not about drain cleaning |
| municipalProgram.doesNotCover 1 (landscaping and ornamental structures) | LEFT OUT | Not about drain cleaning |
| municipalProgram.doesNotCover 2 (homes outside City limits) | LEFT OUT | Not about drain cleaning |
| municipalProgram.doesNotCover 3 (seven or more units, commercial, septic) | LEFT OUT | Not about drain cleaning |
| municipalProgram.doesNotCover 4 (undated sheet: initial cabling, City camera cost if sound, repeat claims within 12 months) | ADAPTED | Section 4 (initial cabling; repeat claims within 12 months; "confirm with Public Works"). The City-camera-cost item is LEFT OUT |
| municipalProgram.whoCanApply (up to six units; ownership or consent; taxes and bills paid; hold-harmless) | LEFT OUT | Not about drain cleaning |
| municipalProgram.steps 1 (cable first; master plumber or drainlayer certification within six months) | ADAPTED | Section 2 (written cabling certification the City asks for; the six-month dating is LEFT OUT) |
| municipalProgram.steps 2-3 (apply; City camera investigation sets scope) | LEFT OUT | Not about drain cleaning |
| municipalProgram.steps 4-5 (three bids; repair then reimbursement) | LEFT OUT | Not about drain cleaning |
| municipalProgram.afterSteps (fee revenue; no fund balance, waiting list or timeline found) | LEFT OUT | Not about drain cleaning |
| municipalProgram.callout (our inspection does not replace the City camera; no claim City accepts it; no claim ours satisfies cabling; we do not repair) | ADAPTED | Section 2 (no claim that our work satisfies the cabling certification) and section 4 (we do not repair) |
| municipalProgram.closing (link to lateral inspection and reporting) | LEFT OUT | Not about drain cleaning |
| secondOpinion (ledes, steps, callout, CTA) | LEFT OUT | Not about drain cleaning |
| buyingGuide.lede and body (no sale rule found; rental occupancy inspection; City-limits and ownership conditions; not legal advice) | LEFT OUT | Not about drain cleaning |
| buyingGuide links, CTA, agents block | LEFT OUT | Not about drain cleaning |
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
| What does a sewer camera inspection show? | USED | Verbatim |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (drain cleaning): every section

| Section / element | Status | Reason or where used |
|---|---|---|
| `seoTitle`, `metaDescription`, `serviceDescription` | ADAPTED | Localized with the cable-first guidance |
| `hero` intro and scope line | ADAPTED | Hero states what cleaning does and does not reach |
| `definition.answer` | ADAPTED | `serviceDescription`, section 1 |
| `definition.supporting` (drain vs. sewer cleaning; "drain clearing" is everyday usage) | ADAPTED | Section 1 (drain vs. sewer cleaning); the "drain clearing" sentence is LEFT OUT (FAQ carries it) |
| `definition.scope` | LEFT OUT | Service-page scope box |
| `signals` one slow drain; several fixtures slow; clogs that keep returning | USED | Problem cards 1-3 |
| `signals` gurgling; sewage-like odors | LEFT OUT | Not tied to a St. Charles fact; the FAQ carries both |
| `signals` water or sewage coming up | ADAPTED | Section 2 bullet; ties to the City's backup guidance |
| `triage` rows 1, 2 and 5 | ADAPTED | Section 2 bullets |
| `triage` rows 3 and 4 | LEFT OUT | Row 4 is covered in section 3 in prose; row 3 stays on the service page |
| `limits.can` | LEFT OUT | Service-page lists; inclusions restate the visit |
| `limits.cannot` cracked, broken or collapsed pipe; offset or separated joint; roots at a joint | ADAPTED | Section 4 |
| `limits.cannot` public sewer main or the connection to it | ADAPTED | Section 1 |
| `limits.callout` (jetting not for every pipe; a line that flows again is not proof) | ADAPTED | Section 3 (a drain that works again is not proof of a sound pipe) |
| `process` 5 steps | USED | `process`, verbatim, including the plain SeeSnake CS12x, SeeSnake Standard Camera Reel with TruSense and RIDGID K-7500 mentions |
| `process.prep`, `decision`, `independent`, `methods`, `secondaryLimits` | LEFT OUT | Service-page sections; related pages cover camera and sewer cleaning |
| `ask` video and written findings | ADAPTED | Section 4 and inclusions |
| `ask` limits, access point, cleaning record, line locating, `ask.keep` | LEFT OUT | Records guidance; stays on the service page |
| `audiences` homeowners, home buyers, home sellers | LEFT OUT | Not tied to a St. Charles fact; sale-time rules are in the FAQ |
| `markets` cards | LEFT OUT | Replaced by `coverage` |
| `request`, `relatedDescriptions`, `cta` | LEFT OUT | Template fields; this page has its own CTA |

## Service FAQ

37 service questions: 34 USED verbatim, 3 LEFT OUT. The DEC-088 free-estimate and same-day wording is not on this page except as the service FAQ already states it (cost and time answers carried verbatim).

| Question | Status | Reason |
|---|---|---|
| Do you clean drains in St. Louis, San Diego, and Las Vegas? | LEFT OUT | This page IS an area page; the question is the hub's |
| Can drain cleaning fix a broken or collapsed pipe? | LEFT OUT | Same answer, fuller, under "Does drain cleaning repair a damaged pipe?" |
| Can cleaning remove tree roots? | LEFT OUT | Same answer, fuller, under "Can tree roots grow into drain pipes?" |
| The other 34 | USED | Verbatim, including "How much does drain cleaning cost?", "How long does drain cleaning take?" and "Should I have the sewer line checked before buying a house?" |

Total FAQ on the page: 44 (10 St. Charles + 34 service).

## Open questions

- The company phone appears once (section 2), read from `marketOperatingDetail['st-louis-mo']`, as the Las Vegas drain pages do. The Las Vegas "newer market for us" sentence is not carried: it does not apply to St. Louis.
- The $28 fee versus the older $20 figure on some City pages, the undated information sheet's exclusions (initial cabling, City camera cost if the line is sound, repeat claims within 12 months), and the absence of a published fund balance or timeline all come from the location page as written. They are repeated with its "confirm with Public Works" hedges, not independently re-verified.
- The location page publishes the ACS figures as stated fact with sources (median 1986; about 62 percent 1980 or later), so they are used. Nothing marked pending or unverified on the location page is used.
- No claim is made that the City accepts an outside camera report or that our work satisfies the City's cabling certification (location page callout).
