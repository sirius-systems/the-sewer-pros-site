# Source report: sl-st-charles-locating

Page: Sewer Line Locating in St. Charles, MO (`stCharlesLocatingContent`, `content/pages/sl-stl-st-charles-locating.tsx`).

Sources:
- LOCATION: `stCharlesContent` in `content/pages/st-louis-st-charles.tsx` (City of St. Charles Code and program pages read 2026-10-03; ACS 2024 5-year). St. Charles runs its own sewer system: no MSD fact or number is used.
- SERVICE: `svc-sewer-line-locating` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/sewer-line-locating.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | St. Charles source | Service source |
|---|---|---|---|
| 1 | A lateral from foundation to main, and a locate that stops short of the main | `responsibility.answer` (Sewer Division not MSD; Code definition), `responsibility.note` (no published rule under the street) | `definition` (estimate of the path; private-property lines, not public mains), `limits.cannot` (not a survey; section not reached is not traced) |
| 2 | Before anyone digs: the City's permit rules, one-call and your estimate | FAQ "Does a St. Charles lateral repair need a permit?" (Building Division; charge permit; $50 per inspection), `whoToCall.secondaryAgency` ((636) 949-3222) | `limits.callout` (811 / one-call wording as written), `limits.cannot` (utility clearance, permission to dig) |
| 3 | The City program pays for a repair, not for what you planted over the line | `municipalProgram.lede` (90 percent, $7,500), `doesNotCover` 1 (landscaping), steps 2-3 (City camera sets scope), `callout`, `responsibility.table` row 5 | `signals` (landscaping, trees, fences; sharing the route with another contractor), `limits.cannot` (not a look at pipe condition) |
| 4 | A 1986 median year built, and a purchase: the route is not the condition | `housingAge` (median 1986; no pipe material or era), `buyingGuide.body` (no sale rule found; City limits), `municipalProgram.doesNotCover` 2 | `signals` "Buying or evaluating a property", `audiences` home buyers, FAQ "Should I have the line located before buying a house?" |

## City of St. Charles location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle, metaDescription | ADAPTED | Service name swapped in; page-specific meta description written |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (independent inspection; City runs its own system and lateral program) | ADAPTED | Hero intro: own system, Code lateral definition, locate as an estimate |
| heroForm bullets, request card, form, nextSteps, phone line | LEFT OUT | Template supplies its own request form |
| heroForm.card.note (backup: plumber or drainlayer cables the lateral, then Public Works) | LEFT OUT | Backup guidance, not locating |
| faqHeading, faqSchemaApproved | LEFT OUT | Template sets it |
| keyTakeaways 1 (own system through Public Works Sewer Division; MSD guidance does not apply) | ADAPTED | Section 1 ("not MSD") |
| keyTakeaways 2 (90 percent, $7,500, $28 fee, share stays with owner) | ADAPTED | Section 3 (90 percent, $7,500). The $28 fee and the older $20 figure are LEFT OUT (not about locating) |
| keyTakeaways 3 (camera inspection gives evidence before you clean, buy or approve work) | LEFT OUT | Camera is a separate service; related pages link it |
| keyTakeaways.jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| reviewBand | LEFT OUT | No review claims in service + location bodies |
| responsibility.answer (Sewer Division not MSD; Code lateral definition foundation to main; owner gets bids and chooses contractor) | ADAPTED | Section 1 (Sewer Division not MSD; Code lateral definition). Owner-obtains-bids appears only as "whoever bids on work" in section 3 |
| responsibility card: the public sewer (two plants, 30 lift stations, confirm by address) | LEFT OUT | Plant and lift-station counts are not about locating |
| responsibility card: the lateral line (City program covers part of repair; owner obtains three bids) | ADAPTED | Section 3 and the local problem card |
| responsibility.table row: who runs or arranges it | ADAPTED | Section 1 (Sewer Division runs the public system) |
| responsibility.table row: who maintains and repairs it (90 percent, $7,500) | ADAPTED | Section 3 (90 percent, $7,500, labelled the City's terms) |
| responsibility.table row: who to contact first (plumber or drainlayer, then Public Works) | LEFT OUT | Not about locating |
| responsibility.table row: what help exists | LEFT OUT | Not about locating |
| responsibility.table row: where an inspection helps | ADAPTED | Section 3 closing sentence (a camera inspection is the separate service that looks inside) |
| responsibility.note (not legal advice; no published rule on the part under the street or on City damage) | ADAPTED | Section 1 (no published rule on the part under the street); not legal advice in section 4. The City-damage point is LEFT OUT (no tie) |
| systemExplainer 1 (own system, plants, lift stations, outside MSD service area) | ADAPTED | Section 1 states Sewer Division, not MSD. Plant and lift-station counts and the MSD service-area sentence are LEFT OUT |
| systemExplainer 2 (combined or separate, age not stated) | LEFT OUT | Not about locating |
| systemExplainer 3 (Newtown vacuum system) | LEFT OUT | Not about locating |
| systemExplainer 4 (Hackmann Road creek manhole, relocation planned, no current status) | LEFT OUT | Not about locating |
| systemExplainer 5 (a public project does not tell a lateral's condition) | LEFT OUT | Not about locating |
| systemExplainer.card bullets and closing (what a camera can show) | LEFT OUT | Not about locating |
| housingAge paragraph (median 1986, MOE 2 years, about 32,300 units, 62 percent 1980 or later, 7 percent 1939 or earlier) | ADAPTED | Section 4 (median 1986, ACS 2024 5-year). Margin of error, unit count and the 62 and 7 percent figures are LEFT OUT (cut for length) |
| housingAge.censusTable (10 rows) | LEFT OUT | Not about locating |
| housingAge.afterCensus 1 (age does not tell pipe; City publishes no pipe material or era) | ADAPTED | Section 4 (City publishes no pipe material or installation era) |
| housingAge.afterCensus 2 (working drain is not proof; cable-first certification; City camera) | LEFT OUT | Not about locating |
| housingAge.table (blockage with intact pipe; cracks; where a defect sits; sound line pays City camera cost; roots) | LEFT OUT | Not about locating |
| housingAge.sourceNote (ACS 2024 5-year, B25034, B25035; percentages are our arithmetic) | ADAPTED | Section 4 attribution (ACS 2024 5-year). Table numbers B25034 and B25035 are LEFT OUT |
| whoToCall.paragraphs (cable first, then Public Works; Sewer Division contact; none found for a direct backup or after-hours number) | LEFT OUT | Not about locating |
| whoToCall.agency (Public Works lateral program (636) 949-3363; Public Works Facility address) | LEFT OUT | Not about locating |
| whoToCall.secondaryAgency (Community Development (636) 949-3222; permits and inspections) | ADAPTED | Section 2: number only, labelled the City's |
| whoToCall.company (phone, hours) | LEFT OUT | Not about locating |
| municipalProgram.lede (since 2003; 90 percent; $7,500; $28 fee, older $20 figure; automatic enrollment) | ADAPTED | Section 3 (90 percent, $7,500). Since 2003, the $28 fee and automatic enrollment are LEFT OUT |
| municipalProgram.covers (repair work and digging, dirt, seeding; sidewalks, driveways, pavement) | LEFT OUT | Not about locating |
| municipalProgram.doesNotCover 1 (landscaping and ornamental structures) | ADAPTED | Section 3 (landscaping and ornamental structures are not covered) |
| municipalProgram.doesNotCover 2 (homes outside City limits) | ADAPTED | Section 4 (confirm the address is inside City limits) |
| municipalProgram.doesNotCover 3 (seven or more units, commercial, septic) | LEFT OUT | Not about locating |
| municipalProgram.doesNotCover 4 (undated sheet: initial cabling, City camera cost if sound, repeat claims within 12 months) | LEFT OUT | Not about locating |
| municipalProgram.whoCanApply (up to six units; ownership or consent; taxes and bills paid; hold-harmless) | LEFT OUT | Not about locating |
| municipalProgram.steps 1 (cable first; master plumber or drainlayer certification within six months) | LEFT OUT | Not about locating |
| municipalProgram.steps 2-3 (apply; City camera investigation sets scope) | ADAPTED | Section 3 (the City's camera investigation sets the repair scope) |
| municipalProgram.steps 4-5 (three bids; repair then reimbursement) | LEFT OUT | Not about locating |
| municipalProgram.afterSteps (fee revenue; no fund balance, waiting list or timeline found) | LEFT OUT | Not about locating |
| municipalProgram.callout (our inspection does not replace the City camera; no claim City accepts it; no claim ours satisfies cabling; we do not repair) | ADAPTED | Section 3 (a locate does not replace the City's camera) |
| municipalProgram.closing (link to lateral inspection and reporting) | LEFT OUT | Not about locating |
| secondOpinion (ledes, steps, callout, CTA) | LEFT OUT | Not about locating |
| buyingGuide.lede and body (no sale rule found; rental occupancy inspection; City-limits and ownership conditions; not legal advice) | ADAPTED | Section 4 (none found, not a confirmed absence; not legal advice). The rental occupancy inspection is LEFT OUT |
| buyingGuide links, CTA, agents block | LEFT OUT | Not about locating |
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
| What does a sewer camera inspection show? | LEFT OUT | The locating service FAQ and the camera page cover it; locating is a separate service |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (sewer line locating): every section

| Section / element | Status | Reason or where used |
|---|---|---|
| `seoTitle`, `metaDescription`, `serviceDescription` | ADAPTED | Localized with the City Code lateral definition |
| `hero` intro and scope line | ADAPTED | Hero states the estimate; the "no repair" sentence is in the FAQ |
| `hero.scope` bullets, card title and intro | LEFT OUT | Service-page hero card |
| `definition.answer` | ADAPTED | `serviceDescription`, section 1 |
| `definition.supporting` (planning near the line; camera shows inside; public mains out of scope) | ADAPTED | Sections 1 and 3 |
| `definition.scope` | LEFT OUT | Service-page scope box |
| `signals` planning digging, trenching, construction | USED | Problem card 1 |
| `signals` landscaping, trees, fences, hardscape | USED | Problem card 2; ties to the program's landscaping exclusion in section 3 |
| `signals` sharing the route with another contractor | ADAPTED | Section 3 ("describe where it runs to whoever bids on work") |
| `signals` buying or evaluating a property | ADAPTED | Section 4 |
| `signals` a camera finding you need to place | USED | Problem card 3 |
| `signals.after` | LEFT OUT | Camera page is in related pages |
| `limits.can` | ADAPTED | Section 1 and inclusions 5 and 6 |
| `limits.cannot` survey | ADAPTED | Section 1 |
| `limits.cannot` utility clearance or permission to dig | ADAPTED | Section 2 |
| `limits.cannot` exact depth; map of every utility | LEFT OUT | Depth is only called approximate; the FAQ carries the rest |
| `limits.cannot` trace of an unreached section | ADAPTED | Section 1 ("the accessible private line the equipment could trace"), inclusion 6 |
| `limits.cannot` look at pipe condition | ADAPTED | Sections 3 and 4 |
| `limits.callout` one-call 811 | USED | Section 2, wording as written; unverified for Missouri (see open questions) |
| `process` 5 steps | USED | `process`, verbatim, including the plain `SeekTech SR-20` mention |
| `process.prep`, `decision`, `independent`, `comparison` | LEFT OUT | Service-page sections; the camera page is in related pages |
| `ask` items and `ask.keep` | ADAPTED | Video and written findings in inclusions; marks, depth and notes stay "ask" items and are not claimed |
| `audiences` home buyers | ADAPTED | Section 4 |
| `audiences` agents, inspectors, property managers | LEFT OUT | Not tied to a St. Charles fact |
| `markets` cards | LEFT OUT | Replaced by `coverage` |
| `request`, `relatedDescriptions`, `cta` | LEFT OUT | Template fields; this page has its own CTA |

## Service FAQ

23 service questions: 20 USED verbatim, 3 LEFT OUT.

| Question | Status | Reason |
|---|---|---|
| Does my city require a sewer inspection for a sale, remodel, or permit? | LEFT OUT | Duplicate; "Is a sewer inspection required before buying a St. Charles home?" answers it for this city |
| Should I use chemical drain cleaner on a sewer line clog? | LEFT OUT | About drain-cleaning products, off the locating topic |
| If the line drains after cleaning, is the pipe healthy? | LEFT OUT | About cleaning and pipe health, off the locating topic |
| The other 20 (what locating is; how it works; sonde, receiver, cleanout; 811; camera before locating; exact location; depth; every utility; survey and digging; water; concrete; camera cannot get through; access point; marks; video and findings; time and cost; landscaping; sewer repair work; how often; buying a house) | USED | Verbatim. Neither the cost/time answer nor any other carries the DEC-088 free-estimate or same-day wording, so nothing needed carrying |

Total FAQ on the page: 29 (9 St. Charles + 20 service).

## Open questions

- 811 and private sewer lines: the service page's wording is unverified for Missouri. This page repeats it as written ("your state one-call program (often reached at 811) or your local utility") and does not say whether 811 covers private lines.
- Section 2 uses the permit wording from the location FAQ (Building Division lists lateral repair or replacement as work that generally requires a permit; charge permit and $50 inspection fee outside the program). It does not say a locate itself needs a permit; the City names none for locating.
- The $28 fee versus the older $20 figure on some City pages, the undated information sheet's exclusions (initial cabling, City camera cost if the line is sound, repeat claims within 12 months), and the absence of a published fund balance or timeline all come from the location page as written. They are repeated with its "confirm with Public Works" hedges, not independently re-verified.
- The location page publishes the ACS figures as stated fact with sources (median 1986; about 62 percent 1980 or later), so they are used. Nothing marked pending or unverified on the location page is used.
- No claim is made that the City accepts an outside camera report or that our work satisfies the City's cabling certification (location page callout).
