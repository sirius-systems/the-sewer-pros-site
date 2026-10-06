# Source report: `sl-chesterfield-backup` (Chesterfield, MO + Recurring Sewer Backup Diagnosis)

Page module: `content/pages/sl-stl-chesterfield-backup.tsx` (`chesterfieldBackupContent`).
Shared blocks: `content/pages/sl-blocks/recurring-sewer-backup-diagnosis.ts`.

Sources: the Chesterfield location page (`content/pages/st-louis-chesterfield.tsx`, `chesterfieldContent`, `loc-stl-chesterfield`) and the service page (`content/pages/services.tsx`, `svc-recurring-sewer-backup-diagnosis`, `v2`). No new research.

Status key: **USED** = verbatim or near-verbatim; **ADAPTED** = fact kept, wording rewritten or trimmed for this page; **LEFT OUT** = not on this page, with the reason.

## The four body sections and their sources

| # | h2 | Local source (Chesterfield page) | Service source |
| --- | --- | --- | --- |
| 1 | A repeat backup: MSD's main or your lateral? | `responsibility.answer`, `responsibility.cards`, `whoToCall` 1 and `agency` (call (314) 768-6260 so it can inspect) | limits (findings apply only to the segment inspected); FAQ 'Is a recurring backup the city's problem or mine?' |
| 2 | The City's cable-first rule, and what a diagnosis records | `municipalProgram` lede, `covers` 2, `doesNotCover` 1-2, `steps` 1 and 4, `callout` 1 | signals (the same clog returns); limits.can (roots, offset, deposits, standing water); decision (cleaning first when a blockage hides the line) |
| 3 | Public sewer work nearby is not a finding about your lateral | `systemExplainer` 3-5 (Conway Meadows), `housingAge` 1, 3 and table | causes (roots, grease, wipes, sag, joints, connection, collapse); FAQ 'Why does my sewer keep backing up?' |
| 4 | During a backup: who to call, and where a diagnosis fits | `whoToCall` 1-3 (urgent reports; 911), `secondaryAgency` | independent.note and FAQ 'What if the camera shows something serious?'; ask.keep (keep video, compare written estimates) |

## Other page fields

| Field | Built from |
| --- | --- |
| `seoTitle`, `metaDescription`, `serviceDescription` | Service `serviceDescription`, localized for Chesterfield; meta carries MSD-main, owner-lateral and City-rules facts |
| `hero.intro` | `responsibility` + service intro |
| `problems` 1-3 | Service signals, shared block (verbatim) |
| `problems` 4 (local card) | `whoToCall` 1 (raw sewage inside or outside a home is an urgent MSD report; call so it can inspect) + service signals (backup vs a single fixture) |
| `inclusions` (6), `process` | Shared block and service `process.steps`, verbatim. Owner-confirmed video and written findings only; nothing else claimed |
| `coverage` | St. Louis City, Ballwin, St. Charles, Florissant; statement 'Chesterfield is a service area, not an office location.' |
| `relatedPageIds` | Chesterfield location page, this service, camera inspection, cleaning and camera inspection |
| `cta` | Page-specific |
| FAQ | 9 Chesterfield questions (10 minus 1) + 29 service questions = 38, including the DEC-088 cost and same-day answers carried as published |
| Image alt text | Neutral wording; no place-specific photo is claimed |

## Chesterfield location page: every section

The location page's housing figures (85.6%, 1982, 1.4%) are flagged PENDING-015 and are not used on this page.

| Section / element | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific title and meta written instead. |
| hero.title, hero.intro (MSD main vs private lateral; City program; Chesterfield-only) | ADAPTED | Intro restates MSD main vs owner lateral for a repeat backup and points to the City program. |
| heroForm (bullets, form card, backdrop, phone line, hours) | LEFT OUT | Form and hero card belong to the location page shell; the service-location template supplies its own form. No company phone on this page, as on the LV models. |
| heroForm.card.note (MSD (314) 768-6260 for a backup) | ADAPTED | MSD's call-first instruction is in body section 1, labelled MSD's number. |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level fields. |
| keyTakeaways 1 (MSD maintains the main; lateral and connection are private, owner maintains and repairs) | ADAPTED | Section 1 and hero. |
| keyTakeaways 2 ($28 annual fee; up to $15,000; routine root removal is maintenance) | ADAPTED | Section 2 ($15,000, roots as routine maintenance). The $28 fee is left out. |
| keyTakeaways 3 (a camera gives recorded evidence before you clean, buy or approve work) | ADAPTED | This is the page itself; stated through the service's own limits. |
| keyTakeaways.jumpNav | LEFT OUT | Navigation of the location page. |
| serviceCards (nine cards, helpBar) | LEFT OUT | Not a page field here; other services are reached through relatedPageIds. |
| responsibility.answer (MSD maintains the main; owner maintains the private lateral and its connection) | ADAPTED | Section 1. |
| responsibility.cards, public main (MSD regional utility; repairs when a public line caused a backup; confirm utility by address near a boundary or on septic) | ADAPTED | Section 1 keeps MSD repairs a public-line backup. Confirm-by-address sentence cut for length. |
| responsibility.cards, private lateral (City program defines its lateral as 3-5 ft outside the foundation to the main) | LEFT OUT | Not needed for a backup diagnosis. |
| responsibility.table (5 rows) | LEFT OUT | Table is location-page layout; the rows used are covered in the body sections. |
| responsibility.note (not legal advice; no published rule found on who owns the lateral under the street) | LEFT OUT | Not used; findings 'do not by themselves establish responsibility' comes from the service FAQ. |
| systemExplainer 1-2 (MSD says most of the County is separate sewer, City combined; page does not label every Chesterfield parcel) | LEFT OUT | Background, not about this service. |
| systemExplainer 3 (Conway Meadows Sanitary Relief: about 1,400 ft, 18-24 in., Conway Road to North Outer Forty Road, fewer basement backups and overflows in intense rainfall) | USED | Section 3. |
| systemExplainer 4 (MSD page undated; spring 2026 start, about 12 months) | ADAPTED | 'The page is undated, so check MSD for status'. The spring 2026 start and 12-month figures are left out. |
| systemExplainer 5 (a public project does not tell you any one lateral's condition) | USED | Section 3. |
| systemExplainer.card (what a camera can show on your lateral; closing) | LEFT OUT | The service page's own can/cannot lists are fuller and the FAQ carries them. |
| housingAge 1 (most Chesterfield homes are newer than the typical St. Louis-area house) | USED | Section 3. |
| housingAge 2 (ACS 2019-2023: 85.6%, median 1982, 1.4%) | LEFT OUT | PENDING-015 on the location page: primary Census table check not done. Figures not used; the qualitative sentence is used instead. |
| housingAge 3 (pipe from that era more often PVC; material failures matter less; ground movement does not wait for age) | ADAPTED | Section 3, as 'likelier than old-pipe failure'. |
| housingAge 4 (a belly gives the slow-drain pattern of an old failing line; era tells what to expect, a camera shows what is there) | LEFT OUT | Cut for length; the belly finding is in the housingAge table row. |
| housingAge.table (bellies, joint separation, damage from later work, roots) | ADAPTED | Section 3: all four findings in one sentence. |
| whoToCall 1 (MSD tells customers with a backup to call so it can inspect; urgent reports: raw sewage inside or outside a home, missing manhole covers, flooded streets) | USED | Section 4 (urgent reports) and section 1 (call so it can inspect). |
| whoToCall 2 (if MSD or a plumber points to your lateral, an independent inspection helps) | ADAPTED | Section 4. |
| whoToCall 3 (Who To Call guide: call 911 for an emergency that threatens life or property; 911 is not a sewer dispatch line) | USED | Section 4. |
| whoToCall.agency (MSD (314) 768-6260; limited assistance program) | ADAPTED | Section 1, labelled MSD's number. The limited-assistance-program clause was cut for length. |
| whoToCall.secondaryAgency (Chesterfield Public Works (636) 537-4762; hours; City Hall address) | ADAPTED | Section 4, labelled the City's. Hours and address left out. |
| whoToCall.company (company phone and hours) | LEFT OUT | Company statement; kept on the location page. No company phone on this page, as on the LV models. |
| municipalProgram.lede (up to $15,000; roots in joints are maintenance; City runs its own video review) | ADAPTED | Section 2. |
| municipalProgram 1 (who is eligible: owner-owned 1-6 unit residential; commercial and delinquent excluded) | LEFT OUT | Eligibility detail; the FAQ on the location page carries it (USED in the merged FAQ). |
| municipalProgram 2 ($28 annual fee on tax bills; voters 2000; began January 1, 2001) | LEFT OUT | Not used. |
| municipalProgram 3 (owner not tenant applies; seller applies in a real estate transaction) | LEFT OUT | Not a backup subject. |
| municipalProgram 4 (terms from the March 2026 policy and May 2024 form; funding not stated; confirm with Public Works) | ADAPTED | 'March 2026 policy' named in section 2; the confirm advice is in the merged FAQ (USED). |
| municipalProgram.covers 1 (dye and video investigation, excavation, backfill, repair or replacement) | LEFT OUT | Repair and excavation detail; this company does not offer repair, so it is not described. |
| municipalProgram.covers 2 (defects: collapsed or broken line, severe offset, severe backfall or belly, severe blockage that cannot be cabled out) | ADAPTED | Section 2: the severe-blockage defect only. |
| municipalProgram.covers 3 (limited grading and sod; street, sidewalk and driveway restoration) | LEFT OUT | Repair-work detail. |
| municipalProgram.doesNotCover 1 (roots in bells and joints when removing them lets the line work) | USED | Section 2. |
| municipalProgram.doesNotCover 2 (the initial cabling is routine maintenance) | USED | Section 2. |
| municipalProgram.doesNotCover 3-5 (pipe under a building, interior cleanup; items over the line, disasters, negligence; costs above $15,000) | LEFT OUT | Not tied to this service; 'up to $15,000' is stated where used. |
| municipalProgram.steps 1 (a licensed plumbing company or drainlayer cables the lateral first; not reimbursed) | USED | Section 2. |
| municipalProgram.steps 2-3 (packet; owner applies with the $200 fee, proof, tax receipt, hold harmless, cabling bill) | LEFT OUT | Application detail; the merged FAQ carries it (USED). |
| municipalProgram.steps 4 (the City's contractor televises; Public Works accepts or denies; first come, first served) | ADAPTED | Section 2: contractor televises first; Public Works accepts or denies. |
| municipalProgram.callout 1 (independent inspection does not replace the City's video step; ask Public Works what it accepts) | ADAPTED | Section 2: footage does not replace or predict the review. |
| municipalProgram.callout 2 (bids from three licensed Master Drainlayers; The Sewer Pros does not repair) | LEFT OUT | Repair-bid detail. 'Does not repair' is stated in the body and the FAQ. |
| municipalProgram.closing (link to sewer lateral inspection and reporting) | LEFT OUT | Not a page field here. |
| secondOpinion (ledes, three steps, callout) | LEFT OUT | Second-opinion content belongs to the independent-inspection page. |
| buyingGuide.lede (scope vs home inspection) | LEFT OUT | Not a subject of this page. |
| buyingGuide.body (no sale-time requirement found; occupancy materials address businesses; seller applies; not legal advice) | LEFT OUT | Not a subject of this page. |
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
| FAQ 7 What should I do if sewage backs up in my Chesterfield building? | USED | Merged FAQ. |
| FAQ 8 Is a sewer inspection required before buying a Chesterfield home? | USED | Merged FAQ. |
| FAQ 9 What does a sewer camera inspection show? | LEFT OUT | Duplicate; the service FAQ answers it as 'What can a sewer camera see?'. |
| FAQ 10 Do you repair or replace sewer lines? | USED | Merged FAQ. |

## Recurring Sewer Backup Diagnosis service page (v2)

| Section / item | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific versions written. |
| serviceDescription | ADAPTED | Same definition, set in Chesterfield. |
| hero.intro | ADAPTED | Definition in the intro; the no-repair statement is in section 4 and the FAQ. |
| v2.hero.scope, card text | LEFT OUT | Template-level. |
| definition.answer, supporting, scope | ADAPTED | Intro; the can/cannot split of cleaning, camera and locating is in the service FAQ (USED). |
| signals 1 The same clog returns; 2 Several fixtures slow | USED | Problem cards 1 and 2 (shared block). |
| signals 6 Wastewater at a cleanout or outside drain | USED | Problem card 3 (shared block). |
| signals 3, 4, 5, 7 | LEFT OUT | Only three service cards are used; the FAQ 'How do I know if the backup is in my sewer line or just one drain?' carries the pattern (USED). |
| causes (7 items) and after | ADAPTED | Section 3 names grease and wipes and points to the full list in the FAQ 'Why does my sewer keep backing up?' (USED); the roots, belly and joint causes are in the same section. |
| limits.can and cannot, callout | ADAPTED | Section 2 (roots, offset, deposits, standing water on video); section 1 (segment inspected). Full lists in the FAQ (USED). |
| process (6 steps) | USED | Process block: Symptoms and access, Clearing when needed, Camera inspection, Locating when included, Findings, Your decision. |
| process.prep | LEFT OUT | Not a page field. |
| decision (table, where to start, hydro aside) | ADAPTED | Cleaning-first idea in section 2; the rest through the FAQ and related pages. |
| independent.note (significant condition may need evaluation outside our scope; multiple estimates; second opinion) | ADAPTED | Section 4: outside our cleaning and diagnostic scope; keep the video; compare written estimates. |
| ask.items, ask.keep | ADAPTED | 'Keep the video' in section 4; full list in the FAQ 'What should I ask for after a camera inspection?' (USED). |
| situations, markets, request | LEFT OUT | Template bands; related pages replace markets. |
| FAQ (29 questions) | USED | All 29 used, including the DEC-088 cost and same-day answers carried as published. |
| inclusions (shared block, 6 items) | USED | Shared block. |
| relatedPageIds | ADAPTED | Camera inspection and cleaning with camera retained; Chesterfield location page added. |

## Facts used, and what they rest on

| Fact | Source |
| --- | --- |
| MSD maintains the public main and repairs a building backup caused by a public sewer line; the lateral and connection are private | MSD Project Clear 'Lateral line' and 'Sewer backups', via `chesterfieldContent`; MSD's number (314) 768-6260 is labelled MSD's |
| City cable-first rule, $15,000 cap (March 2026 policy), defect list, roots as routine maintenance, City contractor televises | City Sewer Lateral Policy & Procedures, via `municipalProgram`; stated as the City's terms, never a price |
| Conway Meadows project: about 1,400 ft, Conway Road to North Outer Forty Road, goal to reduce basement backups and overflows | MSD project page, undated; stated as MSD's, with 'check MSD for status' |
| Urgent reports: raw sewage inside or outside a home, missing manhole covers, flooded streets; 911 is not a sewer dispatch line | MSD 'Sewer backups' and the City Who To Call guide, via `whoToCall` |
| Most Chesterfield homes are newer than the typical St. Louis-area house | `housingAge` 1, qualitative only. Census figures (PENDING-015) are not used |

## Open items

- 'Likelier than old-pipe failure' is an inference from the location page's era sentence ('material failures ... matter less'). Used without figures.
- MSD and City phone numbers and the City's dollar terms are labelled as theirs. No company phone, office, price, offer, response time or guarantee appears in the body.
