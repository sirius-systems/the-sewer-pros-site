# Source report: `sl-chesterfield-prepurchase` (Chesterfield, MO + Pre-Purchase Sewer Inspection)

Page module: `content/pages/sl-stl-chesterfield-prepurchase.tsx` (`chesterfieldPrePurchaseContent`).
Shared blocks: `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS` and `SERVICE_PROBLEM_SHOTS` in `content/pages/service-location-shared.ts`.

Sources: the Chesterfield location page (`content/pages/st-louis-chesterfield.tsx`, `chesterfieldContent`, `loc-stl-chesterfield`) and the service page (`content/pages/services.tsx`, `svc-pre-purchase-sewer-inspection`, `v2`). No new research.

Status key: **USED** = verbatim or near-verbatim; **ADAPTED** = fact kept, wording rewritten or trimmed for this page; **LEFT OUT** = not on this page, with the reason.

## The four body sections and their sources

| # | h2 | Local source (Chesterfield page) | Service source |
| --- | --- | --- | --- |
| 1 | What you take on when a Chesterfield sale closes | `responsibility.answer`, `responsibility.cards` (public main; private lateral with the City's 3-5 ft definition), `responsibility.note` | definition (private lateral; visible conditions on the day of the visit); limits (does not establish the connection) |
| 2 | No sale-time rule found, and a City rule that points at the seller | `buyingGuide.body` (none found; occupancy materials address businesses; seller applies; not legal advice), `municipalProgram` 3-4 and callout 1 | definition ('no legal advice'); signals 'A local sale requirement'; FAQ 'Is a sewer scope included in a regular home inspection?' |
| 3 | Chesterfield homes skew newer, but a newer lateral can still have findings | `housingAge` 1, 3 and table (qualitative only; Census figures not used) | limits (cannot see under water or measure slope; 'A visibly clear line is not proof...') |
| 4 | The City's defect list, and what a scope can and cannot show | `municipalProgram.lede`, `covers` 2, `doesNotCover` 1, `steps` 4, `whoToCall.secondaryAgency` | limits.can (offset, standing water, roots, collapse); independent (does not repair) |

## Other page fields

| Field | Built from |
| --- | --- |
| `seoTitle`, `metaDescription`, `serviceDescription` | Service `serviceDescription`, localized for Chesterfield; meta carries the owner-lateral, City seller rule and no-sale-rule facts |
| `hero.intro` | `responsibility` + service intro (visible condition, video, written findings, before you close) |
| `problems` 1-3 | Service signals, shared block (verbatim) |
| `problems` 4 (local card) | `municipalProgram` 3 (seller applies; owner not tenant) + service signals 'Drain trouble mentioned during the sale' and 'A short inspection period' (ask agent and Public Works against your inspection deadline) |
| `inclusions` (6), `process` | Shared block and service `process.steps`, verbatim. Owner-confirmed video and written findings only; nothing else claimed. The camera-run step carries the service page's confirmed equipment sentence unchanged |
| `coverage` | St. Louis City, Ballwin, St. Charles, Florissant; statement 'Chesterfield is a service area, not an office location.' |
| `relatedPageIds` | Chesterfield location page, this service, sewer camera inspection, sewer line locating |
| `cta` | Page-specific; asks for the inspection deadline |
| FAQ | 9 Chesterfield questions (10 minus 1) + 28 service questions = 37 |
| Image alt text | Neutral wording; no place-specific photo is claimed |

## Chesterfield location page: every section

The location page's housing figures (85.6%, 1982, 1.4%) are flagged PENDING-015 and are not used on this page.

| Section / element | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific title and meta written instead. |
| hero.title, hero.intro (MSD main vs private lateral; City program; Chesterfield-only) | ADAPTED | Intro restates the owner-keeps-the-lateral fact for a buyer, plus the City program and the no sale-time rule. |
| heroForm (bullets, form card, backdrop, phone line, hours) | LEFT OUT | Form and hero card belong to the location page shell; the service-location template supplies its own form. No company phone on this page, as on the LV models. |
| heroForm.card.note (MSD (314) 768-6260 for a backup) | LEFT OUT | Not buyer-specific; Public Works is the contact a buyer needs. |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level fields. |
| keyTakeaways 1 (MSD maintains the main; lateral and connection are private, owner maintains and repairs) | ADAPTED | Section 1. |
| keyTakeaways 2 ($28 annual fee; up to $15,000; routine root removal is maintenance) | ADAPTED | Section 4 ($15,000, roots as routine maintenance). The $28 fee is left out; a buyer does not need it. |
| keyTakeaways 3 (a camera gives recorded evidence before you clean, buy or approve work) | ADAPTED | This is the page itself; stated through the service's own limits. |
| keyTakeaways.jumpNav | LEFT OUT | Navigation of the location page. |
| serviceCards (nine cards, helpBar) | LEFT OUT | Not a page field here; other services are reached through relatedPageIds. |
| responsibility.answer (MSD maintains the main; owner maintains the private lateral and its connection) | ADAPTED | Section 1. |
| responsibility.cards, public main (MSD regional utility; repairs when a public line caused a backup; confirm utility by address near a boundary or on septic) | ADAPTED | Section 1 keeps the confirm-by-address sentence. MSD-repairs-public-line left out. |
| responsibility.cards, private lateral (City program defines its lateral as 3-5 ft outside the foundation to the main) | USED | Section 1. |
| responsibility.table (5 rows) | LEFT OUT | Table is location-page layout; the rows used are covered in the body sections. |
| responsibility.note (not legal advice; no published rule found on who owns the lateral under the street) | ADAPTED | 'Not legal advice' in section 2. The under-the-street caveat was cut for length. |
| systemExplainer 1-2 (MSD says most of the County is separate sewer, City combined; page does not label every Chesterfield parcel) | LEFT OUT | Background, not about this service. |
| systemExplainer 3 (Conway Meadows Sanitary Relief: about 1,400 ft, 18-24 in., Conway Road to North Outer Forty Road, fewer basement backups and overflows in intense rainfall) | LEFT OUT | Not buyer-specific. |
| systemExplainer 4 (MSD page undated; spring 2026 start, about 12 months) | LEFT OUT | Not used. |
| systemExplainer 5 (a public project does not tell you any one lateral's condition) | LEFT OUT | Not used. |
| systemExplainer.card (what a camera can show on your lateral; closing) | LEFT OUT | The service page's own can/cannot lists are fuller and the FAQ carries them. |
| housingAge 1 (most Chesterfield homes are newer than the typical St. Louis-area house) | USED | Section 3. |
| housingAge 2 (ACS 2019-2023: 85.6%, median 1982, 1.4%) | LEFT OUT | PENDING-015 on the location page: primary Census table check not done. Figures not used; the qualitative sentence is used instead. |
| housingAge 3 (pipe from that era more often PVC; material failures matter less; ground movement does not wait for age) | ADAPTED | Section 3 (PVC vs clay or cast iron; listing year does not give condition). |
| housingAge 4 (a belly gives the slow-drain pattern of an old failing line; era tells what to expect, a camera shows what is there) | LEFT OUT | Cut for length; the belly finding is in the housingAge table row. |
| housingAge.table (bellies, joint separation, damage from later work, roots) | ADAPTED | Section 3: all four findings in one sentence. |
| whoToCall 1 (MSD tells customers with a backup to call so it can inspect; urgent reports: raw sewage inside or outside a home, missing manhole covers, flooded streets) | LEFT OUT | Not buyer-specific. |
| whoToCall 2 (if MSD or a plumber points to your lateral, an independent inspection helps) | LEFT OUT | Not used. |
| whoToCall 3 (Who To Call guide: call 911 for an emergency that threatens life or property; 911 is not a sewer dispatch line) | LEFT OUT | Not buyer-specific. |
| whoToCall.agency (MSD (314) 768-6260; limited assistance program) | LEFT OUT | Not buyer-specific. |
| whoToCall.secondaryAgency (Chesterfield Public Works (636) 537-4762; hours; City Hall address) | ADAPTED | Section 4, labelled the City's. Hours and address left out. |
| whoToCall.company (company phone and hours) | LEFT OUT | Company statement; kept on the location page. No company phone on this page, as on the LV models. |
| municipalProgram.lede (up to $15,000; roots in joints are maintenance; City runs its own video review) | ADAPTED | Section 4. |
| municipalProgram 1 (who is eligible: owner-owned 1-6 unit residential; commercial and delinquent excluded) | LEFT OUT | Eligibility detail; the FAQ on the location page carries it (USED in the merged FAQ). |
| municipalProgram 2 ($28 annual fee on tax bills; voters 2000; began January 1, 2001) | LEFT OUT | Not buyer-specific. |
| municipalProgram 3 (owner not tenant applies; seller applies in a real estate transaction) | USED | Section 2, and problem card 4 (seller; owner not tenant). |
| municipalProgram 4 (terms from the March 2026 policy and May 2024 form; funding not stated; confirm with Public Works) | ADAPTED | 'March 2026 policy' named in section 4; the confirm-with-Public-Works advice is in the merged FAQ (USED). |
| municipalProgram.covers 1 (dye and video investigation, excavation, backfill, repair or replacement) | LEFT OUT | Repair and excavation detail; this company does not offer repair, so it is not described. |
| municipalProgram.covers 2 (defects: collapsed or broken line, severe offset, severe backfall or belly, severe blockage that cannot be cabled out) | USED | Section 4. |
| municipalProgram.covers 3 (limited grading and sod; street, sidewalk and driveway restoration) | LEFT OUT | Repair-work detail. |
| municipalProgram.doesNotCover 1 (roots in bells and joints when removing them lets the line work) | ADAPTED | Section 4. |
| municipalProgram.doesNotCover 2 (the initial cabling is routine maintenance) | LEFT OUT | Not buyer-specific. |
| municipalProgram.doesNotCover 3-5 (pipe under a building, interior cleanup; items over the line, disasters, negligence; costs above $15,000) | LEFT OUT | Not tied to this service; 'up to $15,000' is stated where used. |
| municipalProgram.steps 1 (a licensed plumbing company or drainlayer cables the lateral first; not reimbursed) | LEFT OUT | Not buyer-specific. |
| municipalProgram.steps 2-3 (packet; owner applies with the $200 fee, proof, tax receipt, hold harmless, cabling bill) | LEFT OUT | Application detail; the merged FAQ carries it (USED). |
| municipalProgram.steps 4 (the City's contractor televises; Public Works accepts or denies; first come, first served) | ADAPTED | Section 4: 'the City's call'. |
| municipalProgram.callout 1 (independent inspection does not replace the City's video step; ask Public Works what it accepts) | ADAPTED | Section 2: a scope does not make a property eligible and the City decides. |
| municipalProgram.callout 2 (bids from three licensed Master Drainlayers; The Sewer Pros does not repair) | LEFT OUT | Repair-bid detail. 'Does not repair' is stated in the body and the FAQ. |
| municipalProgram.closing (link to sewer lateral inspection and reporting) | LEFT OUT | Not a page field here. |
| secondOpinion (ledes, three steps, callout) | LEFT OUT | Second-opinion content belongs to the independent-inspection page. |
| buyingGuide.lede (scope vs home inspection) | ADAPTED | Carried by the service FAQ 'Is a sewer scope included in a regular home inspection?' (USED). |
| buyingGuide.body (no sale-time requirement found; occupancy materials address businesses; seller applies; not legal advice) | USED | Sections 1-2 and the Chesterfield FAQ on sale requirements (USED). |
| buyingGuide.links, cta, agents (affiliations) | LEFT OUT | Links are not page fields here. Affiliations are company facts, not used, as on the LV models. |
| nearbyAreas (St. Louis City, Ballwin, Florissant, St. Charles, all St. Louis areas) | ADAPTED | Became coverage (the other four St. Louis locations). 'All St. Louis service areas' left out. |
| finalCta (title, paragraphs, bullets, form) | LEFT OUT | Page-specific cta written; form is template-level. |
| sources (12 links, lastReviewed, closingNote) | ADAPTED | Passed through as `sources: chesterfieldContent.sources`. |
| servicePageIds | LEFT OUT | Location-page field. |
| FAQ 1 Who is responsible for a sewer lateral in Chesterfield? | USED | Merged FAQ. |
| FAQ 2 Does Chesterfield have a sewer lateral repair program? | USED | Merged FAQ. |
| FAQ 3 Which Chesterfield homes can qualify? | USED | Merged FAQ. |
| FAQ 4 How much can Chesterfield's lateral program pay? | USED | Merged FAQ. |
| FAQ 5 Does the program cover a clogged line or tree roots? | USED | Merged FAQ. |
| FAQ 6 What does a Chesterfield owner submit to apply? | USED | Merged FAQ. |
| FAQ 7 What should I do if sewage backs up in my Chesterfield building? | USED | Merged FAQ; a new owner needs it. |
| FAQ 8 Is a sewer inspection required before buying a Chesterfield home? | USED | Merged FAQ; answers the sale-requirement question for this city. |
| FAQ 9 What does a sewer camera inspection show? | LEFT OUT | Duplicate; the service FAQ answers it as 'What does a sewer scope look for?' and 'What does a sewer inspection not show?'. |
| FAQ 10 Do you repair or replace sewer lines? | USED | Merged FAQ. |

## Pre-Purchase Sewer Inspection service page (v2)

| Section / item | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific versions written. |
| serviceDescription | ADAPTED | Same definition, set in Chesterfield. |
| hero.intro (definition; no repair) | ADAPTED | Definition in the intro; the no-repair statement is in section 4 and the FAQ. |
| v2.hero.scope, card text | LEFT OUT | Template-level. |
| definition.answer and supporting | ADAPTED | Intro and section 1 (lateral, visible conditions, day of the visit); 'ask your home inspector' via FAQ (USED). |
| signals 1 An older home | USED | Problem card 1. |
| signals 2 No record of the line's condition | USED | Problem card 3. |
| signals 3 Drain trouble mentioned during the sale | ADAPTED | Folded into the local problem card 4. |
| signals 4 A local sale requirement | ADAPTED | Section 2, answered with Chesterfield facts. |
| signals 5 A short inspection period | USED | Problem card 2 and the local card. |
| signals 6 Plans to dig after you buy | LEFT OUT | Locating is not tied to a Chesterfield fact; reachable through related pages and FAQ. |
| signals.after | LEFT OUT | Not used. |
| limits.intro, can (8), cannot (8), callout | ADAPTED | Waterline, slope and 'clear is not proof' used in section 3; offset, standing water, roots in section 4; full lists in the FAQ answers (USED). |
| process (5 steps) | USED | Process block: Request, Access, Camera run, Video, Written findings. |
| process.intro, process.prep | LEFT OUT | No standard time (the FAQ covers it); prep is not a page field. |
| decision, independent, comparison, ask.keep, evidence, audiences, markets, request | LEFT OUT | Template bands; related pages replace comparison and markets. |
| ask.items | ADAPTED | 'Records you can share' is inclusion 6 (USED). |
| FAQ (29 questions) | ADAPTED | 28 used; 'Is a sewer scope required when buying or selling a house?' left out (duplicate of the Chesterfield-specific question). |
| inclusions (shared table, 6 items) | USED | Shared SERVICE_INCLUSIONS. |
| relatedPageIds | ADAPTED | Camera inspection and line locating retained; Chesterfield location page added. |

## Facts used, and what they rest on

| Fact | Source |
| --- | --- |
| MSD maintains the public main; the lateral and its connection are private property the owner maintains and repairs | MSD Project Clear 'Lateral line' (via `chesterfieldContent`) |
| City program's eligible lateral runs 3-5 ft outside the foundation or exterior wall to the main in the street or easement | City Sewer Lateral Policy & Procedures (March 2026), via `chesterfieldContent` |
| Up to $15,000 for a qualifying defective lateral; defect list; roots in joints are routine maintenance | City policy (March 2026); stated as the City's terms, never a price |
| Seller must apply when a home is in a real estate transaction | City policy, via `municipalProgram` 3 |
| No sale-time inspection requirement found; occupancy materials address businesses | City occupancy and re-occupancy pages, via `buyingGuide.body`; 'none found', not a confirmed absence |
| Public Works (636) 537-4762 | City Who To Call guide, via `whoToCall.secondaryAgency`; labelled the City's number |
| Most Chesterfield homes are newer than the typical St. Louis-area house; era pipe more often PVC | `housingAge` 1 and 3, qualitative only. Census figures (PENDING-015) are not used |

## Open items

- The 'newer than the typical St. Louis-area house' and 'more often PVC' sentences are the location page's own text, which sits beside figures flagged PENDING-015. Used without figures.
- MSD and City phone numbers and the City's dollar terms are labelled as theirs. No company phone, office, price, offer, response time or guarantee appears in the body.
