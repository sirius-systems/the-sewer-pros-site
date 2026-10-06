# Source report: sl-ballwin-backup

Page: Recurring Sewer Backup Diagnosis in Ballwin, MO (`ballwinBackupContent`, `content/pages/sl-stl-ballwin-backup.tsx`).

Sources:
- LOCATION: `ballwinContent` in `content/pages/st-louis-ballwin.tsx` (City of Ballwin program page undated; read 2026-10-01; ACS 2019-2023 median year built 1976, primary-source table check still a TODO on the location page).
- SERVICE: `svc-recurring-sewer-backup-diagnosis` `v2` in `content/pages/services.tsx` and `content/pages/sl-blocks/recurring-sewer-backup-diagnosis.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Ballwin facts only. Nothing from the St. Louis City, Chesterfield, Florissant or St. Charles pages, and nothing from MSD's St. Louis City combined-sewer system, is carried over.

## The four body sections and their sources

| # | h2 on the page | Ballwin source | Service source |
|---|---|---|---|
| 1 | A repeat backup: MSD's main or your lateral? | `responsibility` answer, cards, table, note; `whoToCall.paragraphs` | `limits` (findings apply to the segment inspected); FAQ "Is a recurring backup the city's problem or mine?" |
| 2 | During a backup: MSD, the City, and where a diagnosis fits | `whoToCall` (MSD line and urgent reports, Inspections), `systemExplainer` p3-p5 (Valley Drive) | `independent` / FAQ "What if the camera shows something serious?" |
| 3 | Older clay laterals, a 1976 median, and the usual causes of a repeat backup | `housingAge` p1-p2 | `causes` (roots, grease, wipes, sags, cracks, separated joints, defective connection, collapse) |
| 4 | The City program: roots more than once a year, and the evidence it asks for | `municipalProgram` lede, p3, `doesNotCover`, `steps` 1, `callout` | `independent.note`, `ask.keep` |

## Ballwin location page, element by element

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title and hero.intro (lateral not under MSD; roots; evidence before work) | ADAPTED | Hero intro: MSD owns the main; lateral and connection private; diagnosis before approving work or applying to the City |
| heroForm bullets, request card, MSD note, form | LEFT OUT | Template supplies its own request form |
| keyTakeaways 1 (MSD owns the main; lateral and connection private, owner repairs) | ADAPTED | Section 1 |
| keyTakeaways 2 ($28 fee; $4,500 / $7,500; roots once a year or less is maintenance) | ADAPTED | Section 4 (roots rule; terms the City's) |
| keyTakeaways 3 (camera gives recorded evidence) | LEFT OUT | Camera evidence is the service itself |
| keyTakeaways jumpNav | LEFT OUT | Not about backup diagnosis |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid |
| responsibility.answer (MSD owns main; lateral and connection private) | ADAPTED | Section 1 |
| responsibility card: the public sewer main (MSD crews, dye test, confirm utility by address) | ADAPTED | Section 1 (MSD tells building backups to call so it can inspect); crew and dye-test detail LEFT OUT |
| responsibility card: the lateral line (City program starts at the outside wall; building sewer under the house excluded) | ADAPTED | Section 1 (lateral and connection private; owner repairs) |
| responsibility table rows (who owns, who maintains, who to contact, what help exists, where inspection helps) | ADAPTED | Section 1: who to contact first |
| responsibility.note (not legal advice; no published rule on the part under the street) | ADAPTED | Section 1: no published rule on the part under the street, MSD's general statement only |
| systemExplainer p1-p2 (county separate system; MSD page does not label every parcel) | LEFT OUT | Not tied to a repeat backup |
| systemExplainer p3-p4 (Valley Drive Phase III: about 5,500 feet, 8-15 inch pipe; tentative schedule) | ADAPTED | Section 2: Valley Drive Phase III, about 5,500 feet of undersized sewer, to reduce basement backups when overloaded in intense rainfall; tentative schedule, check MSD; 8-15 inch figure and 24-month dates LEFT OUT |
| systemExplainer p5 (a public project does not tell a lateral's condition) | ADAPTED | Section 2 (a public project says nothing about your lateral) |
| systemExplainer card (what a camera can show) and closing | LEFT OUT | Camera list; the service page's own list is fuller |
| housingAge p1 (most older laterals are clay; cracks, separation, roots while the line works) | ADAPTED | Section 3 (clay; can crack, break, separate, let roots in) |
| housingAge p2 (median year built 1976, ACS 2019-2023, city as a whole) | ADAPTED | Section 3 (1976 median, ACS 2019-2023, city as a whole) |
| housingAge p3 (a working drain is not proof; roots more than once a year vs. once a year or less) | ADAPTED | Section 4 (roots more than once a year vs. once a year or less) |
| housingAge p4 (source note) and table (cracks, joints, roots, blockage with intact pipe) | ADAPTED | Source attribution kept in section 3; table LEFT OUT |
| whoToCall paragraphs (MSD urgent reports; independent inspection helps when a lateral is pointed to) | ADAPTED | Section 2 (MSD urgent reports: raw sewage, missing manhole covers, flooded streets) |
| whoToCall.agency (MSD building backup line (314) 768-6260) | ADAPTED | Section 2: MSD building backup line, labelled MSD's number; also the local problem card |
| whoToCall.secondaryAgency (Inspections (636) 227-2129; Public Works (636) 227-9000; Government Center hours) | ADAPTED | Section 2: Inspections number, labelled the City's; Public Works and Government Center hours LEFT OUT |
| whoToCall.company (phone, hours) | LEFT OUT | No company phone on this page, as `sl-lv-city-backup` |
| municipalProgram.lede ($4,500, $7,500, not a warranty, roots) | ADAPTED | Section 4 (roots rule; $4,500 and $7,500 not repeated) |
| municipalProgram p1-p2 ($28 fee, April 1999; purpose "unable to live in the home"; normal wear) | LEFT OUT | Not tied to a repeat backup |
| municipalProgram p3 (roots more than once a year are covered; documentation of a history) | ADAPTED | Section 4 |
| municipalProgram p4 (funding mechanics; owner pays above the cap; reimbursement) | LEFT OUT | Funding mechanics not needed |
| municipalProgram p5 (page undated; confirm terms and funding) | LEFT OUT | Not needed |
| municipalProgram.covers (4 items) | LEFT OUT | Excavation and repair are not diagnosis |
| municipalProgram.doesNotCover (8 items: building sewer, normal wear, roots under annual maintenance, cabling, video, trees, adjoining property, above the cap) | ADAPTED | Section 4: video and cabling not paid |
| municipalProgram.steps (document, MyGov and $150, review, repair and payment) | ADAPTED | Section 4: documentation of a structural problem cabling cannot correct, or that backups will likely continue; MyGov and $150 LEFT OUT |
| municipalProgram.callout (where an independent inspection fits; City-approved contractor, no repairs by us) | ADAPTED | Section 4 (independent evidence; ask what documentation is accepted; no repairs by us) |
| municipalProgram.closing (link to lateral inspection and reporting) | LEFT OUT | Hub element |
| secondOpinion (ledes, steps, callout, CTA) | ADAPTED | Section 4 last sentences (further evaluation outside our scope; compare estimates); the page's own independent band carries the rest |
| buyingGuide lede and body (occupancy permit; no lateral requirement found; program not for sale contingency) | LEFT OUT | Buying is not the topic; FAQ carries the sale answers |
| buyingGuide links, CTA, agents block (association affiliations) | LEFT OUT | Hub elements |
| nearbyAreas (Chesterfield, St. Louis City, Florissant, St. Charles, market hub) | ADAPTED | `coverage`: same four other St. Louis locations |
| finalCta (title, paragraphs, bullets, form) | ADAPTED | `cta.title`; paragraphs replaced by `cta.body` |
| sources (8 links, lastReviewed 2026-10-01, closingNote) | USED | Same |

### Ballwin FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for a sewer lateral in Ballwin? | USED | Verbatim; backs section 1 |
| Does Ballwin have a sewer lateral repair program? | USED | Verbatim |
| How much does Ballwin’s lateral program pay? | USED | Verbatim |
| Do tree roots qualify for Ballwin’s program? | USED | Verbatim |
| What does a Ballwin owner submit to apply? | USED | Verbatim |
| Will the program pay for a problem found in a home-sale inspection? | USED | Verbatim |
| Does Ballwin require an inspection when a home is sold or rented? | USED | Verbatim |
| What should I do if sewage backs up in my Ballwin building? | USED | Verbatim; backs section 2 |
| What does a sewer camera inspection show? | LEFT OUT | The service FAQ "What can a sewer camera see?" answers it in full |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-recurring-sewer-backup-diagnosis`): every section

| Section / element | Status | Reason or where used |
|---|---|---|
| `seoTitle`, `metaDescription`, `serviceDescription` | ADAPTED | Service definition, Ballwin added |
| `hero` intro and scope bullets | ADAPTED | Hero intro; scope in the FAQ |
| `definition` (answer, supporting, scope) | ADAPTED | `serviceDescription`; section 4 last sentences |
| `signals` 1-3 (same clog returns; several fixtures slow; wastewater at a cleanout) | USED | Problem cards 1-3 (shared block) |
| `signals` 4-7 (backs up when another fixture is used; gurgling; odors; wet yard) | LEFT OUT | Slot-limited; FAQ answers carry them |
| `causes` (7 items) | ADAPTED | Section 3 |
| `limits` can / cannot / callout | ADAPTED | Section 1 (segment inspected); FAQ carries the lists |
| `process` steps 1-6 | USED | `process`, verbatim |
| `process.prep` | LEFT OUT | No slot |
| `decision` table and aside | LEFT OUT | No slot; FAQ "What is the difference between drain cleaning, hydro jetting, and a camera inspection?" |
| `independent` band and note | ADAPTED | Section 4 last sentences |
| `ask` items; `ask.keep` | ADAPTED | Inclusions 4-5 (video, written findings); section 4 (keep the video) |
| `situations`, `markets` | LEFT OUT | Replaced by `coverage` |

### Service FAQ

Service FAQ (29): all USED verbatim, including the DEC-088 cost and same-day answers ("How long does it take, and how much does it cost?" and "Can you come the same day, and is this emergency service?") carried as published, per the owner's 2026-10-05 direction (DEC-139). One Ballwin question LEFT OUT: "What does a sewer camera inspection show?" (the service page answers it in full).

## Other page fields

| Field | Built from |
|---|---|
| `seoTitle`, `serviceDescription` | Service definition, Ballwin added |
| `metaDescription` | Page-specific; under 160 |
| `problems` 1-3 | Shared block, verbatim |
| `problems` 4 (local card) | `whoToCall.agency` + `responsibility` main card: MSD tells building backups to call it |
| `inclusions` (6), `process` | Shared block and service `process.steps`; owner-confirmed video and written findings only |
| `coverage`, `relatedPageIds`, `relatedTitle` | Coverage lists the other four St. Louis locations (St. Louis City, Chesterfield, St. Charles, Florissant), title "Other St. Louis area locations" as the template fallback has it, statement "Ballwin is a service area, not an office location." Related pages: the Ballwin location page, this service and two related services. |
| Image alt text | Neutral wording. The location page has no Ballwin photo yet, so no alt text claims a Ballwin job site. |
| FAQ | 9 Ballwin questions + 29 service questions = 38 |
| `cta` | Page-specific |

## Totals and open items

FAQ total 38. Unsure / flagged: (1) the Valley Drive project schedule on MSD's page (construction estimated to begin Fall 2024, about 24 months) is already past, so the page says only "its schedule is tentative, so check MSD for status". (2) Median 1976 is owner-approved on the location page; census-table check still a TODO there. (3) Body is about 511 words by the build script count, the longest of the four (target 420-480); trim section 2 if the owner wants it shorter.
