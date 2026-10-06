# Source report: sl-ballwin-drain

Page: Drain Cleaning in Ballwin, MO (`ballwinDrainContent`, `content/pages/sl-stl-ballwin-drain.tsx`).

Sources:
- LOCATION: `ballwinContent` in `content/pages/st-louis-ballwin.tsx` (City of Ballwin program page undated; read 2026-10-01; ACS 2019-2023 median year built 1976, primary-source table check still a TODO on the location page).
- SERVICE: `svc-drain-cleaning` `v2` in `content/pages/services.tsx` and `content/pages/sl-blocks/drain-cleaning.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Ballwin facts only. Nothing from the St. Louis City, Chesterfield, Florissant or St. Charles pages, and nothing from MSD's St. Louis City combined-sewer system, is carried over.

## The four body sections and their sources

| # | h2 on the page | Ballwin source | Service source |
|---|---|---|---|
| 1 | Your fixture drains sit upstream of a lateral MSD calls private | `responsibility` answer and lateral card (outside wall), `keyTakeaways` 1 | `definition.supporting` (drain vs. sewer cleaning), `limits.cannot` (main and connection) |
| 2 | One drain, several drains, or a backup into the building | `whoToCall.agency` (MSD line, urgent reports), `whoToCall.company` (phone), FAQ sewage backs up | `signals`, `triage` rows, FAQ "What should I do if water or sewage is coming up" |
| 3 | A drain that flows again is not proof of a sound clay pipe | `housingAge` p1-p3 | `limits.cannot`, FAQ "Does a line that flows again mean the pipe is fine?", signals (returning clogs) |
| 4 | What the City program skips, and what cleaning does not fix | `municipalProgram.doesNotCover` (cabling, video, normal wear), `steps` (cabling invoices), `callout` (City contractor), `whoToCall.secondaryAgency` | `limits.cannot`, `independent`, `ask.keep` |

## Ballwin location page, element by element

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title and hero.intro (lateral not under MSD; roots; evidence before work) | ADAPTED | Hero intro: MSD main, private lateral, City program counts from the outside wall; fixture drains sit upstream |
| heroForm bullets, request card, MSD note, form | LEFT OUT | Template supplies its own request form |
| keyTakeaways 1 (MSD owns the main; lateral and connection private, owner repairs) | ADAPTED | Section 1 |
| keyTakeaways 2 ($28 fee; $4,500 / $7,500; roots once a year or less is maintenance) | LEFT OUT | Repair-program money is not about drain cleaning; section 4 uses the cabling and video exclusions |
| keyTakeaways 3 (camera gives recorded evidence) | LEFT OUT | Not about drain cleaning |
| keyTakeaways jumpNav | LEFT OUT | Not about drain cleaning |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid |
| responsibility.answer (MSD owns main; lateral and connection private) | ADAPTED | Section 1 |
| responsibility card: the public sewer main (MSD crews, dye test, confirm utility by address) | LEFT OUT | Not about drain cleaning; MSD backup contact is in section 2 |
| responsibility card: the lateral line (City program starts at the outside wall; building sewer under the house excluded) | ADAPTED | Section 1 (outside wall; building sewer excluded not repeated) |
| responsibility table rows (who owns, who maintains, who to contact, what help exists, where inspection helps) | ADAPTED | Section 2: who to contact first, as MSD says |
| responsibility.note (not legal advice; no published rule on the part under the street) | LEFT OUT | Not about drain cleaning |
| systemExplainer p1-p2 (county separate system; MSD page does not label every parcel) | LEFT OUT | Not about drain cleaning |
| systemExplainer p3-p4 (Valley Drive Phase III: about 5,500 feet, 8-15 inch pipe; tentative schedule) | LEFT OUT | Public sewer project; no tie to a fixture drain |
| systemExplainer p5 (a public project does not tell a lateral's condition) | LEFT OUT | Not about drain cleaning |
| systemExplainer card (what a camera can show) and closing | LEFT OUT | Camera list |
| housingAge p1 (most older laterals are clay; cracks, separation, roots while the line works) | ADAPTED | Section 3 (clay, can crack and separate, line works normally) |
| housingAge p2 (median year built 1976, ACS 2019-2023, city as a whole) | ADAPTED | Section 3 (1976 median, ACS 2019-2023, city as a whole) |
| housingAge p3 (a working drain is not proof; roots more than once a year vs. once a year or less) | ADAPTED | Section 3 (a drain that works is not proof of a sound pipe) and the local problem card (roots once a year or less vs. more than once a year) |
| housingAge p4 (source note) and table (cracks, joints, roots, blockage with intact pipe) | ADAPTED | Source attribution kept in section 3; table LEFT OUT (camera list) |
| whoToCall paragraphs (MSD urgent reports; independent inspection helps when a lateral is pointed to) | ADAPTED | Section 2 (MSD urgent reports) |
| whoToCall.agency (MSD building backup line (314) 768-6260) | ADAPTED | Section 2: MSD building backup line, labelled MSD's number |
| whoToCall.secondaryAgency (Inspections (636) 227-2129; Public Works (636) 227-9000; Government Center hours) | ADAPTED | Section 4: Inspections number, labelled the City's; Public Works and Government Center hours LEFT OUT |
| whoToCall.company (phone, hours) | ADAPTED | Section 2: company phone only, read from `marketOperatingDetail` as `sl-lv-city-drain` does; hours LEFT OUT |
| municipalProgram.lede ($4,500, $7,500, not a warranty, roots) | LEFT OUT | Dollar terms not needed for drain cleaning; "not a warranty" not used |
| municipalProgram p1-p2 ($28 fee, April 1999; purpose "unable to live in the home"; normal wear) | LEFT OUT | Not about drain cleaning |
| municipalProgram p3 (roots more than once a year are covered; documentation of a history) | ADAPTED | Local problem card only |
| municipalProgram p4 (funding mechanics; owner pays above the cap; reimbursement) | LEFT OUT | Funding mechanics are not about drain cleaning |
| municipalProgram p5 (page undated; confirm terms and funding) | LEFT OUT | Not about drain cleaning |
| municipalProgram.covers (4 items) | LEFT OUT | Excavation and repair are not drain cleaning |
| municipalProgram.doesNotCover (8 items: building sewer, normal wear, roots under annual maintenance, cabling, video, trees, adjoining property, above the cap) | ADAPTED | Section 4: cabling cost, video cost, normal wear |
| municipalProgram.steps (document, MyGov and $150, review, repair and payment) | ADAPTED | Section 4: invoices from cabling contractors when cabling cannot open the line (step 1); MyGov and $150 LEFT OUT |
| municipalProgram.callout (where an independent inspection fits; City-approved contractor, no repairs by us) | ADAPTED | Section 4: City-approved contractor, no repairs by us; eligibility is the City's |
| municipalProgram.closing (link to lateral inspection and reporting) | LEFT OUT | Hub element |
| secondOpinion (ledes, steps, callout, CTA) | LEFT OUT | Repair-recommendation material; section 4 states the repair boundary |
| buyingGuide lede and body (occupancy permit; no lateral requirement found; program not for sale contingency) | LEFT OUT | Buying is not the drain-cleaning topic here; the FAQ carries the sale answers |
| buyingGuide links, CTA, agents block (association affiliations) | LEFT OUT | Hub elements |
| nearbyAreas (Chesterfield, St. Louis City, Florissant, St. Charles, market hub) | ADAPTED | `coverage`: same four other St. Louis locations |
| finalCta (title, paragraphs, bullets, form) | ADAPTED | `cta.title`; paragraphs replaced by `cta.body` |
| sources (8 links, lastReviewed 2026-10-01, closingNote) | USED | Same |

### Ballwin FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for a sewer lateral in Ballwin? | USED | Verbatim; backs section 1 |
| Does Ballwin have a sewer lateral repair program? | USED | Verbatim |
| How much does Ballwin’s lateral program pay? | USED | Verbatim; carries the City's dollar terms |
| Do tree roots qualify for Ballwin’s program? | USED | Verbatim |
| What does a Ballwin owner submit to apply? | USED | Verbatim |
| Will the program pay for a problem found in a home-sale inspection? | USED | Verbatim |
| Does Ballwin require an inspection when a home is sold or rented? | USED | Verbatim |
| What should I do if sewage backs up in my Ballwin building? | USED | Verbatim; backs section 2 |
| What does a sewer camera inspection show? | USED | Verbatim; the drain FAQ has no such question and a camera may be added to a visit |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-drain-cleaning`): every section

| Section / element | Status | Reason or where used |
|---|---|---|
| `seoTitle`, `metaDescription`, `serviceDescription` | ADAPTED | Same definition, Ballwin added |
| `hero.intro` p1 (restores flow by removing grease, roots, debris) and p2 (no repair, replacement, lining, excavation, pipe installation) | ADAPTED | Hero intro; section 4 and FAQ "Does drain cleaning repair a damaged pipe?" |
| `hero.scope` bullets | LEFT OUT | Template element |
| `definition.answer`, `definition.supporting` (drain vs. sewer cleaning) | ADAPTED | `serviceDescription`; section 1 |
| `definition.scope` | ADAPTED | Section 4 |
| `signals` One slow drain; Several fixtures slow; Clogs that keep returning | USED | Problem cards 1-3; section 2 |
| `signals` Gurgling; Water or sewage coming up | ADAPTED | Section 2 bullets |
| `signals` Sewage-like odors | LEFT OUT | FAQ "What causes sewage-like odors?" |
| `triage` rows | ADAPTED | Section 2 |
| `limits.can` (4 items) | LEFT OUT | FAQ answers carry grease, roots, wipes |
| `limits.cannot`: cracked/broken/collapsed; offset or separated joint; roots at a joint; public main or its connection | ADAPTED | Sections 1 and 4 |
| `limits.callout` | LEFT OUT | FAQ "Is hydro jetting safe for every pipe?" and "Does a line that flows again mean the pipe is fine?"; the flow point is made in section 3 |
| `process` steps 1-5 | USED | `process`, verbatim; equipment names only as confirmed |
| `process.prep`, `decision`, `methods` table, `secondaryLimits` | LEFT OUT | No slot; FAQ answers carry them |
| `independent` band | ADAPTED | Section 4 last sentence |
| `ask` items: video, written findings | USED | Inclusion 6; "record of the cleaning" varies by appointment and is not promised |
| `ask.keep` | ADAPTED | Section 4 (compare against any estimate) |
| `audiences`, `markets` | LEFT OUT | Replaced by problem cards and `coverage` |

### Service FAQ

Service FAQ (37): 34 USED verbatim, 3 LEFT OUT. LEFT OUT: "Do you clean drains in St. Louis, San Diego, and Las Vegas?" (this page is an area page; the question is the hub's); "Can drain cleaning fix a broken or collapsed pipe?" (duplicate of "Does drain cleaning repair a damaged pipe?"); "Can cleaning remove tree roots?" (covered by "Can tree roots grow into drain pipes?").

## Other page fields

| Field | Built from |
|---|---|
| `seoTitle`, `serviceDescription` | Service name and Ballwin |
| `metaDescription` | Page-specific, 118 characters |
| `problems` 1-3 | Shared block, verbatim |
| `problems` 4 (local card) | `municipalProgram.lede` / paragraph 3 and FAQ "Do tree roots qualify": the City counts roots by how often clearing is needed |
| `inclusions` (6), `process` | Shared block and service `process.steps` |
| `coverage`, `relatedPageIds`, `relatedTitle` | Coverage lists the other four St. Louis locations (St. Louis City, Chesterfield, St. Charles, Florissant), title "Other St. Louis area locations" as the template fallback has it, statement "Ballwin is a service area, not an office location." Related pages: the Ballwin location page, this service and two related services. |
| Image alt text | Neutral wording. The location page has no Ballwin photo yet, so no alt text claims a Ballwin job site. |
| FAQ | 10 Ballwin questions + 34 service questions = 44, including the cost / time answers as the drain FAQ has them (no DEC-088 same-day wording on this service) |
| `cta` | Page-specific; no pricing, response time or guarantee |

## Totals and open items

FAQ total 44. Unsure / flagged: (1) the company phone appears once, in section 2, via `marketOperatingDetail` (the Las Vegas drain model does the same). (2) Median year built 1976 is owner-approved on the location page; census-table check still a TODO there. (3) Body is about 490 words by the build script count (target 420-480).
