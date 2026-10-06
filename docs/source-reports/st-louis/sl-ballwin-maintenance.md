# Source report: sl-ballwin-maintenance

Page: Preventative Sewer Maintenance in Ballwin, MO (`ballwinMaintenanceContent`, `content/pages/sl-stl-ballwin-maintenance.tsx`).

Sources:
- LOCATION: `ballwinContent` in `content/pages/st-louis-ballwin.tsx` (City of Ballwin program page undated; read 2026-10-01; ACS 2019-2023 median year built 1976, primary-source table check still a TODO on the location page).
- SERVICE: `svc-preventative-sewer-maintenance` `v2` in `content/pages/services.tsx` and `content/pages/sl-blocks/preventative-sewer-maintenance.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Ballwin facts only. Nothing from the St. Louis City, Chesterfield, Florissant or St. Charles pages, and nothing from MSD's St. Louis City combined-sewer system, is carried over.

## The four body sections and their sources

| # | h2 on the page | Ballwin source | Service source |
|---|---|---|---|
| 1 | Once a year or less is "normal maintenance" to the City | `municipalProgram` lede and p3, FAQ roots answer | `definition.supporting` (no default schedule), `ask.keep` (keep records) |
| 2 | What a visit covers, and what it leaves to MSD and the City | `responsibility` answer, `whoToCall` (MSD line, Inspections) | `limits` (footage records where; cleaning does not repair), `independent` (no repairs by us) |
| 3 | Older clay laterals, a 1976 median, and still no default schedule | `housingAge` p1-p3, table | `limits.can`, `signals` 6 (known risk factors), `definition.supporting` |
| 4 | Which utility serves you, and what a maintenance visit is not | `responsibility` main card, `systemExplainer` p3-p5, `whoToCall.secondaryAgency` (Public Works) | `process` / scope: inspection and cleaning only, not an emergency response |

## Ballwin location page, element by element

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title and hero.intro (lateral not under MSD; roots; evidence before work) | ADAPTED | Hero intro: lateral private; City treats roots cleared once a year or less as normal maintenance |
| heroForm bullets, request card, MSD note, form | LEFT OUT | Template supplies its own request form |
| keyTakeaways 1 (MSD owns the main; lateral and connection private, owner repairs) | ADAPTED | Section 2 |
| keyTakeaways 2 ($28 fee; $4,500 / $7,500; roots once a year or less is maintenance) | ADAPTED | Section 1 (roots rule; $28 and the dollar caps LEFT OUT) |
| keyTakeaways 3 (camera gives recorded evidence) | LEFT OUT | Camera evidence is the service itself |
| keyTakeaways jumpNav | LEFT OUT | Not about maintenance |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid |
| responsibility.answer (MSD owns main; lateral and connection private) | ADAPTED | Section 2 |
| responsibility card: the public sewer main (MSD crews, dye test, confirm utility by address) | ADAPTED | Section 4 (City lists MSD as the utility; confirm by address); crew and dye-test detail LEFT OUT |
| responsibility card: the lateral line (City program starts at the outside wall; building sewer under the house excluded) | ADAPTED | Section 2 and the local problem card |
| responsibility table rows (who owns, who maintains, who to contact, what help exists, where inspection helps) | ADAPTED | Section 2: who to contact first |
| responsibility.note (not legal advice; no published rule on the part under the street) | LEFT OUT | Not about maintenance; the under-the-street clause is not used |
| systemExplainer p1-p2 (county separate system; MSD page does not label every parcel) | LEFT OUT | Not about maintenance |
| systemExplainer p3-p4 (Valley Drive Phase III: about 5,500 feet, 8-15 inch pipe; tentative schedule) | ADAPTED | Section 4: Valley Drive named as a public-sewer project with a tentative schedule; figures LEFT OUT |
| systemExplainer p5 (a public project does not tell a lateral's condition) | ADAPTED | Section 4 (a public project tells nothing about one lateral) |
| systemExplainer card (what a camera can show) and closing | LEFT OUT | Camera list; the service page's own list is fuller |
| housingAge p1 (most older laterals are clay; cracks, separation, roots while the line works) | ADAPTED | Section 3 (clay; can crack, break, separate, let roots in) |
| housingAge p2 (median year built 1976, ACS 2019-2023, city as a whole) | ADAPTED | Section 3 (1976 median, ACS 2019-2023, city as a whole) |
| housingAge p3 (a working drain is not proof; roots more than once a year vs. once a year or less) | ADAPTED | Section 3 (a drain that works is not proof) and section 1 (roots rule) |
| housingAge p4 (source note) and table (cracks, joints, roots, blockage with intact pipe) | ADAPTED | Section 3: source attribution kept; table rows folded into one sentence (cracks, joint separation, roots, buildup with an intact pipe) |
| whoToCall paragraphs (MSD urgent reports; independent inspection helps when a lateral is pointed to) | ADAPTED | Section 2 (MSD asks building backups to call) |
| whoToCall.agency (MSD building backup line (314) 768-6260) | ADAPTED | Section 2: MSD building backup line, labelled MSD's number |
| whoToCall.secondaryAgency (Inspections (636) 227-2129; Public Works (636) 227-9000; Government Center hours) | ADAPTED | Sections 2 and 4: Inspections and Public Works numbers, labelled the City's; Government Center hours LEFT OUT |
| whoToCall.company (phone, hours) | LEFT OUT | No company phone on this page, as `sl-lv-city-maintenance` |
| municipalProgram.lede ($4,500, $7,500, not a warranty, roots) | ADAPTED | Section 1 (roots rule, not a warranty) |
| municipalProgram p1-p2 ($28 fee, April 1999; purpose "unable to live in the home"; normal wear) | ADAPTED | Local problem card (normal wear not covered) |
| municipalProgram p3 (roots more than once a year are covered; documentation of a history) | ADAPTED | Section 1 (documented history of clearing more than once a year) |
| municipalProgram p4 (funding mechanics; owner pays above the cap; reimbursement) | LEFT OUT | Funding mechanics not needed |
| municipalProgram p5 (page undated; confirm terms and funding) | LEFT OUT | Not needed |
| municipalProgram.covers (4 items) | LEFT OUT | Excavation and repair are not maintenance |
| municipalProgram.doesNotCover (8 items: building sewer, normal wear, roots under annual maintenance, cabling, video, trees, adjoining property, above the cap) | ADAPTED | Local problem card: normal wear, cabling cost, video cost |
| municipalProgram.steps (document, MyGov and $150, review, repair and payment) | LEFT OUT | Application steps are not about maintenance |
| municipalProgram.callout (where an independent inspection fits; City-approved contractor, no repairs by us) | LEFT OUT | Not about maintenance |
| municipalProgram.closing (link to lateral inspection and reporting) | LEFT OUT | Hub element |
| secondOpinion (ledes, steps, callout, CTA) | LEFT OUT | Repair-recommendation material |
| buyingGuide lede and body (occupancy permit; no lateral requirement found; program not for sale contingency) | LEFT OUT | Buying is not about maintenance; the two sale questions are skipped in the FAQ |
| buyingGuide links, CTA, agents block (association affiliations) | LEFT OUT | Hub elements |
| nearbyAreas (Chesterfield, St. Louis City, Florissant, St. Charles, market hub) | ADAPTED | `coverage`: same four other St. Louis locations |
| finalCta (title, paragraphs, bullets, form) | ADAPTED | `cta.title`; paragraphs replaced by `cta.body` |
| sources (8 links, lastReviewed 2026-10-01, closingNote) | USED | Same |

### Ballwin FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for a sewer lateral in Ballwin? | USED | Verbatim |
| Does Ballwin have a sewer lateral repair program? | USED | Verbatim; carries the $28 fee and what the program is for |
| How much does Ballwin’s lateral program pay? | USED | Verbatim |
| Do tree roots qualify for Ballwin’s program? | USED | Verbatim |
| What does a Ballwin owner submit to apply? | USED | Verbatim |
| Will the program pay for a problem found in a home-sale inspection? | LEFT OUT | Home-sale question, not about maintenance |
| Does Ballwin require an inspection when a home is sold or rented? | LEFT OUT | Home-sale question, not about maintenance |
| What should I do if sewage backs up in my Ballwin building? | USED | Verbatim |
| What does a sewer camera inspection show? | LEFT OUT | The service page asks "What does a sewer camera inspection find?" with its own answer |
| Do you repair or replace sewer lines? | LEFT OUT | The service page's "Do you offer sewer repair or replacement?" answers it in full |

## Service page (`svc-preventative-sewer-maintenance`): every section

| Section / element | Status | Reason or where used |
|---|---|---|
| `seoTitle`, `metaDescription`, `serviceDescription` | ADAPTED | Service definition, Ballwin added |
| `hero` intro and scope bullets | ADAPTED | Hero intro |
| `definition` answer and supporting | ADAPTED | `serviceDescription`; sections 1 and 3 ("a line with no history does not need a default schedule") |
| `definition.scope` | ADAPTED | Section 2 last bullet |
| `signals` 1-3, 4 (several drains slow; gurgling; odor; backup already happened) | ADAPTED | Problem cards (shared block: gurgling or recurring clogs, backup that has happened, known risk factors) |
| `signals` 5-6 (wet yard; known risk factors) | ADAPTED | Section 3 last paragraph (mature trees, returning buildup, undocumented backups) |
| `limits` can / cannot / callout | ADAPTED | Section 2 bullets; section 3 camera sentence |
| `process` steps 1-6 | USED | `process`, verbatim |
| `process.prep`, `decision`, `comparison` | LEFT OUT | No slot |
| `ask` items and `ask.keep` | ADAPTED | Section 1 (keep the video and written findings); inclusion 5 |
| `audiences`, `markets` | LEFT OUT | Replaced by `coverage` |

### Service FAQ

Service FAQ (15): all USED verbatim, including "How often should I schedule it?" and "How much does it cost?" as published. Four Ballwin questions LEFT OUT: "What does a sewer camera inspection show?" (service asks its own version), "Do you repair or replace sewer lines?" (service answers it in full), and the two home-sale questions (not about maintenance).

## Other page fields

| Field | Built from |
|---|---|
| `seoTitle`, `serviceDescription` | Service definition, Ballwin added |
| `metaDescription` | Page-specific, 159 characters |
| `problems` 1-3 | Shared block |
| `problems` 4 (local card) | `municipalProgram.doesNotCover` (normal wear, cabling, video): maintenance is the owner's |
| `inclusions` (6), `process` | Shared block and service `process.steps` |
| `coverage`, `relatedPageIds`, `relatedTitle` | Coverage lists the other four St. Louis locations (St. Louis City, Chesterfield, St. Charles, Florissant), title "Other St. Louis area locations" as the template fallback has it, statement "Ballwin is a service area, not an office location." Related pages: the Ballwin location page, this service and two related services. |
| Image alt text | Neutral wording. The location page has no Ballwin photo yet, so no alt text claims a Ballwin job site. |
| FAQ | 6 Ballwin questions + 15 service questions = 21 |
| `cta` | Page-specific; no pricing, interval or guarantee |

## Totals and open items

FAQ total 21. Unsure / flagged: (1) no interval, plan or schedule is claimed; the City's "once a year or less" is stated as the City's program rule only. (2) "It does not involve excavation" restates that we do not excavate. (3) Median 1976 is owner-approved on the location page; census-table check still a TODO there. (4) Body is about 475 words by the build script count.
