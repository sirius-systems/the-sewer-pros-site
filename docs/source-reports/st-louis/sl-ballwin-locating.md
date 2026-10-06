# Source report: sl-ballwin-locating

Page: Sewer Line Locating in Ballwin, MO (`ballwinLocatingContent`, `content/pages/sl-stl-ballwin-locating.tsx`).

Sources:
- LOCATION: `ballwinContent` in `content/pages/st-louis-ballwin.tsx` (City of Ballwin program page undated; read 2026-10-01; ACS 2019-2023 median year built 1976, primary-source table check still a TODO on the location page).
- SERVICE: `svc-sewer-line-locating` `v2` in `content/pages/services.tsx` and `content/pages/sl-blocks/sewer-line-locating.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Ballwin facts only. Nothing from the St. Louis City, Chesterfield, Florissant or St. Charles pages, and nothing from MSD's St. Louis City combined-sewer system, is carried over.

## The four body sections and their sources

| # | h2 on the page | Ballwin source | Service source |
|---|---|---|---|
| 1 | From the outside wall to MSD's main, and what a locate can trace of it | `responsibility` answer, lateral card, `municipalProgram.doesNotCover` (building sewer), `keyTakeaways` 1 | `limits.cannot` (not a survey; untraced section), `definition` (estimate of the path), process step 3 |
| 2 | Before anyone digs: Public Works, Inspections and one-call | `whoToCall.secondaryAgency`, `municipalProgram.steps` (plumbing permit before work begins) | `limits.callout` (811), `limits.cannot` (clearance, permission to dig) |
| 3 | Clay laterals, a 1976 median, and where the line runs today | `housingAge` p1-p2, `responsibility` main card (confirm utility by address), `municipalProgram` (program repairs failed sections) | `limits.can` (route and approximate depth), `limits.cannot` (not condition), `decision` |
| 4 | Buying a Ballwin home: the route is not the condition | `buyingGuide` body (occupancy permit, none found), FAQ sale-contingency answer, `doesNotCover` (video) | `signals` buying, `audiences` home buyers |

## Ballwin location page, element by element

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title and hero.intro (lateral not under MSD; roots; evidence before work) | ADAPTED | Hero intro: lateral private, City program counts it from the outside wall to the MSD main, locate estimates the accessible part |
| heroForm bullets, request card, MSD note, form | LEFT OUT | Template supplies its own request form |
| keyTakeaways 1 (MSD owns the main; lateral and connection private, owner repairs) | ADAPTED | Section 1 and hero (MSD owns main; lateral and connection private) |
| keyTakeaways 2 ($28 fee; $4,500 / $7,500; roots once a year or less is maintenance) | LEFT OUT | Repair-program money is not about locating; the FAQ carries it |
| keyTakeaways 3 (camera gives recorded evidence) | LEFT OUT | Not about locating |
| keyTakeaways jumpNav | LEFT OUT | Not about locating |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer (MSD owns main; lateral and connection private) | ADAPTED | Section 1 |
| responsibility card: the public sewer main (MSD crews, dye test, confirm utility by address) | ADAPTED | Section 3 last sentence only (confirm the utility by address); crew and dye-test material LEFT OUT |
| responsibility card: the lateral line (City program starts at the outside wall; building sewer under the house excluded) | ADAPTED | Section 1 and the local problem card (outside wall to MSD main; building sewer excluded) |
| responsibility table rows (who owns, who maintains, who to contact, what help exists, where inspection helps) | LEFT OUT | Not about locating; the contacts used are in section 2 |
| responsibility.note (not legal advice; no published rule on the part under the street) | LEFT OUT | The under-the-street hedge was cut for length; MSD's general statement is the only one made |
| systemExplainer p1-p2 (county separate system; MSD page does not label every parcel) | LEFT OUT | Not about locating |
| systemExplainer p3-p4 (Valley Drive Phase III: about 5,500 feet, 8-15 inch pipe; tentative schedule) | LEFT OUT | Public sewer project; no tie to a locate |
| systemExplainer p5 (a public project does not tell a lateral's condition) | LEFT OUT | Not about locating |
| systemExplainer card (what a camera can show) and closing | LEFT OUT | Camera list; locating is a separate service |
| housingAge p1 (most older laterals are clay; cracks, separation, roots while the line works) | ADAPTED | Section 3 (clay, can crack and separate, line works normally) |
| housingAge p2 (median year built 1976, ACS 2019-2023, city as a whole) | ADAPTED | Section 3 (1976 median, ACS 2019-2023, city as a whole) |
| housingAge p3 (a working drain is not proof; roots more than once a year vs. once a year or less) | LEFT OUT | Roots rule is not about locating |
| housingAge p4 (source note) and table (cracks, joints, roots, blockage with intact pipe) | ADAPTED | Section 3: source attribution kept; table LEFT OUT (no table slot, and it is a camera list) |
| whoToCall paragraphs (MSD urgent reports; independent inspection helps when a lateral is pointed to) | LEFT OUT | Not about locating |
| whoToCall.agency (MSD building backup line (314) 768-6260) | LEFT OUT | Building-backup line; not about locating (FAQ carries it) |
| whoToCall.secondaryAgency (Inspections (636) 227-2129; Public Works (636) 227-9000; Government Center hours) | ADAPTED | Section 2: Public Works (excavation, sanitary sewer repair permits) and Inspections numbers, labelled the City's; Government Center hours LEFT OUT |
| whoToCall.company (phone, hours) | LEFT OUT | Company contact comes from the site shell |
| municipalProgram.lede ($4,500, $7,500, not a warranty, roots) | LEFT OUT | Not about locating |
| municipalProgram p1-p2 ($28 fee, April 1999; purpose "unable to live in the home"; normal wear) | LEFT OUT | Not about locating |
| municipalProgram p3 (roots more than once a year are covered; documentation of a history) | LEFT OUT | Not about locating |
| municipalProgram p4 (funding mechanics; owner pays above the cap; reimbursement) | LEFT OUT | Not about locating |
| municipalProgram p5 (page undated; confirm terms and funding) | LEFT OUT | Not about locating |
| municipalProgram.covers (4 items) | LEFT OUT | Excavation and repair are not locating |
| municipalProgram.doesNotCover (8 items: building sewer, normal wear, roots under annual maintenance, cabling, video, trees, adjoining property, above the cap) | ADAPTED | Building sewer under the house is outside the program (section 1); video not covered (section 4); the rest LEFT OUT |
| municipalProgram.steps (document, MyGov and $150, review, repair and payment) | ADAPTED | Section 2 only: the contractor obtains a plumbing permit before work begins; MyGov and $150 LEFT OUT |
| municipalProgram.callout (where an independent inspection fits; City-approved contractor, no repairs by us) | LEFT OUT | Not about locating |
| municipalProgram.closing (link to lateral inspection and reporting) | LEFT OUT | Hub element |
| secondOpinion (ledes, steps, callout, CTA) | LEFT OUT | Repair-recommendation material; the locating template's independent band covers planning |
| buyingGuide lede and body (occupancy permit; no lateral requirement found; program not for sale contingency) | ADAPTED | Section 4 (occupancy permit, none found, not legal advice, program not for sale contingency, no video) |
| buyingGuide links, CTA, agents block (association affiliations) | LEFT OUT | Hub elements |
| nearbyAreas (Chesterfield, St. Louis City, Florissant, St. Charles, market hub) | ADAPTED | `coverage`: same four other St. Louis locations, market hub dropped |
| finalCta (title, paragraphs, bullets, form) | ADAPTED | `cta.title`; paragraphs and bullets replaced by `cta.body` |
| sources (8 links, lastReviewed 2026-10-01, closingNote) | USED | Same (`ballwinContent.sources`) |

### Ballwin FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for a sewer lateral in Ballwin? | USED | Verbatim; carries MSD and City program sources |
| Does Ballwin have a sewer lateral repair program? | USED | Verbatim; carries the building-sewer exclusion that backs section 1 |
| How much does Ballwin’s lateral program pay? | USED | Verbatim; carries the $4,500 / $7,500 terms (the City's) |
| Do tree roots qualify for Ballwin’s program? | USED | Verbatim |
| What does a Ballwin owner submit to apply? | USED | Verbatim |
| Will the program pay for a problem found in a home-sale inspection? | USED | Verbatim; backs section 4 |
| Does Ballwin require an inspection when a home is sold or rented? | USED | Verbatim; the occupancy answer for this city, backs section 4 |
| What should I do if sewage backs up in my Ballwin building? | USED | Verbatim; carries MSD's number and urgent-report list |
| What does a sewer camera inspection show? | LEFT OUT | Camera question; locating is a separate service and the service FAQ covers cameras |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-sewer-line-locating`): every section

| Section / element | Status | Reason or where used |
|---|---|---|
| `seoTitle`, `metaDescription`, `serviceDescription` | ADAPTED | Localized with the lateral-to-MSD-main fact |
| `hero` intro and scope bullets | ADAPTED | Hero states the estimate; the "no repair" line is in the FAQ |
| `definition.answer` (transmitter and receiver; sonde; depth approximate) | ADAPTED | `serviceDescription`, section 3 |
| `definition.supporting` (planning near the line; camera shows inside; public mains out of scope) | ADAPTED | Sections 1 and 3 |
| `definition.scope` | LEFT OUT | Service-page scope box |
| `signals` planning digging; landscaping, fences; camera finding to place | USED | Problem cards 1-3 (shared block, verbatim) |
| `signals` sharing the route with a contractor; buying or evaluating a property | LEFT OUT | Three problem cards plus one local; buying is in section 4 |
| `limits.can` (position, path, depth estimate) | ADAPTED | Sections 1 and 3 |
| `limits.cannot` (not a survey; not clearance or permission to dig; section not reached is not traced; not a look at condition) | ADAPTED | Sections 1, 2 and 3 |
| `limits.callout` (811 / one-call wording) | ADAPTED | Section 2, wording as written |
| `process` steps 1-5 | USED | `process`, verbatim; equipment name only as confirmed in step 2 |
| `process.prep` | LEFT OUT | No slot |
| `decision` (locating or camera) | ADAPTED | Section 3 last paragraph |
| `independent` band and `comparison` table | LEFT OUT | No slot; FAQ carries them |
| `ask` items; `ask.keep` | ADAPTED | Inclusions 1-2 (video, written findings only); marks and depth readings are "ask" items and are NOT claimed |
| `audiences` (home buyers, agents, inspectors, property managers) | ADAPTED | Section 4 (buyer) |
| `markets` (3 hubs) | LEFT OUT | Replaced by `coverage` |

### Service FAQ

Service FAQ (23): 20 USED verbatim, 3 LEFT OUT. LEFT OUT: "Does my city require a sewer inspection for a sale, remodel, or permit?" (the Ballwin occupancy question answers it for this city); "Should I use chemical drain cleaner on a sewer line clog?" and "If the line drains after cleaning, is the pipe healthy?" (off the locating topic). The DEC-088 cost and time answer is carried as the service FAQ has it.

## Other page fields

| Field | Built from |
|---|---|
| `seoTitle`, `serviceDescription` | Service name and Ballwin; locate is an estimate, not a survey |
| `metaDescription` | Page-specific, 142 characters |
| `problems` 1-3 | Shared block, verbatim |
| `problems` 4 (local card) | `responsibility` lateral card + `municipalProgram.doesNotCover` building sewer: the outside wall is where the City's lateral starts |
| `inclusions` (6), `process` | Shared block and service `process.steps`; owner-confirmed video and written findings only |
| `coverage`, `relatedPageIds`, `relatedTitle` | Coverage lists the other four St. Louis locations (St. Louis City, Chesterfield, St. Charles, Florissant), title "Other St. Louis area locations" as the template fallback has it, statement "Ballwin is a service area, not an office location." Related pages: the Ballwin location page, this service and two related services. |
| Image alt text | Neutral wording. The location page has no Ballwin photo yet, so no alt text claims a Ballwin job site. |
| FAQ | 9 Ballwin questions + 20 service questions = 29, including the DEC-088 cost / time answer as the service FAQ has it ("How long does locating take, and how much does it cost?") |
| `cta` | Page-specific; no pricing, response time or guarantee |

## Totals and open items

FAQ total 29. Unsure / flagged: (1) "the City's program exists to repair failed lateral sections, so a line can have a history after the house was built" is an inference from the program's purpose, not a City statement; reword or cut if the owner prefers. (2) Median year built 1976 is published on the location page as owner-approved; its census-table check is still a TODO there. (3) Body is about 494 words by the build script count (target 420-480; the four Las Vegas models run 480-492).
