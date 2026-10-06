# Source report: `sl-chesterfield-maintenance` (Chesterfield, MO + Preventative Sewer Maintenance)

Page module: `content/pages/sl-stl-chesterfield-maintenance.tsx` (`chesterfieldMaintenanceContent`).
Shared blocks: `content/pages/sl-blocks/preventative-sewer-maintenance.ts`.

Sources: the Chesterfield location page (`content/pages/st-louis-chesterfield.tsx`, `chesterfieldContent`, `loc-stl-chesterfield`) and the service page (`content/pages/services.tsx`, `svc-preventative-sewer-maintenance`, `v2`). No new research.

Status key: **USED** = verbatim or near-verbatim; **ADAPTED** = fact kept, wording rewritten or trimmed for this page; **LEFT OUT** = not on this page, with the reason.

## The four body sections and their sources

| # | h2 | Local source (Chesterfield page) | Service source |
| --- | --- | --- | --- |
| 1 | The upkeep of the lateral is yours, and the City says so | `responsibility.answer`, `municipalProgram` lede, `doesNotCover` 1-2, `steps` 1 | definition (planned inspection and cleaning); FAQ 'How often should I schedule it?' (no single interval) |
| 2 | What the City program pays for, and what a visit leaves you with | `municipalProgram` 2 ($28 fee), `covers` 2 (defect list), `steps` 4 and `callout` 1 (City's own video review; ask what it accepts) | limits.callout (cleaning does not repair; further evaluation outside our scope); process (video and written findings); inclusions |
| 3 | Most Chesterfield homes are newer, and there is still no default schedule | `housingAge` 1, 3 and table | definition.supporting ('A line with no history of problems does not need a default schedule'); signals 'Known risk factors'; limits (cannot measure slope or see under water) |
| 4 | Who to call, and what a maintenance visit is not | `whoToCall` 3, `agency`, `secondaryAgency`, `systemExplainer` 3 and 5 | FAQ 'How long does it take?'; decision (camera first or cleaning first) |

## Other page fields

| Field | Built from |
| --- | --- |
| `seoTitle`, `metaDescription`, `serviceDescription` | Service `serviceDescription`, localized for Chesterfield; meta carries the owner-lateral and routine-maintenance facts |
| `hero.intro` | `responsibility` + `municipalProgram` + service intro |
| `problems` 1-3 | Service signals, shared block (verbatim) |
| `problems` 4 (local card) | `municipalProgram.doesNotCover` 1-2 (roots in joints and the initial cabling are routine maintenance) + service 'Known risk factors' |
| `inclusions` (6), `process` | Shared block and service `process.steps`, verbatim. Owner-confirmed video and written findings only; no interval, plan or contract claimed |
| `coverage` | St. Louis City, Ballwin, St. Charles, Florissant; statement 'Chesterfield is a service area, not an office location.' |
| `relatedPageIds` | Chesterfield location page, this service, camera inspection, sewer cleaning |
| `cta` | Page-specific |
| FAQ | 7 Chesterfield questions (10 minus 3) + 16 service questions = 23 |
| Image alt text | Neutral wording; no place-specific photo is claimed |

## Chesterfield location page: every section

The location page's housing figures (85.6%, 1982, 1.4%) are flagged PENDING-015 and are not used on this page.

| Section / element | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific title and meta written instead. |
| hero.title, hero.intro (MSD main vs private lateral; City program; Chesterfield-only) | ADAPTED | Intro restates owner upkeep of the lateral and the City's routine-maintenance line. |
| heroForm (bullets, form card, backdrop, phone line, hours) | LEFT OUT | Form and hero card belong to the location page shell; the service-location template supplies its own form. No company phone on this page, as on the LV models. |
| heroForm.card.note (MSD (314) 768-6260 for a backup) | ADAPTED | MSD's number in body section 4, labelled MSD's. |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level fields. |
| keyTakeaways 1 (MSD maintains the main; lateral and connection are private, owner maintains and repairs) | ADAPTED | Section 1 and hero. |
| keyTakeaways 2 ($28 annual fee; up to $15,000; routine root removal is maintenance) | USED | Sections 1 and 2. |
| keyTakeaways 3 (a camera gives recorded evidence before you clean, buy or approve work) | ADAPTED | This is the page itself; stated through the service's own limits. |
| keyTakeaways.jumpNav | LEFT OUT | Navigation of the location page. |
| serviceCards (nine cards, helpBar) | LEFT OUT | Not a page field here; other services are reached through relatedPageIds. |
| responsibility.answer (MSD maintains the main; owner maintains the private lateral and its connection) | ADAPTED | Section 1. |
| responsibility.cards, public main (MSD regional utility; repairs when a public line caused a backup; confirm utility by address near a boundary or on septic) | LEFT OUT | Not needed for upkeep; the main is stated as MSD's in section 1. |
| responsibility.cards, private lateral (City program defines its lateral as 3-5 ft outside the foundation to the main) | LEFT OUT | Not needed for upkeep. |
| responsibility.table (5 rows) | LEFT OUT | Table is location-page layout; the rows used are covered in the body sections. |
| responsibility.note (not legal advice; no published rule found on who owns the lateral under the street) | LEFT OUT | Not used. |
| systemExplainer 1-2 (MSD says most of the County is separate sewer, City combined; page does not label every Chesterfield parcel) | LEFT OUT | Background, not about this service. |
| systemExplainer 3 (Conway Meadows Sanitary Relief: about 1,400 ft, 18-24 in., Conway Road to North Outer Forty Road, fewer basement backups and overflows in intense rainfall) | ADAPTED | Section 4, shortened to the road names; the pipe length and size are left out. |
| systemExplainer 4 (MSD page undated; spring 2026 start, about 12 months) | LEFT OUT | Not used. |
| systemExplainer 5 (a public project does not tell you any one lateral's condition) | USED | Section 4. |
| systemExplainer.card (what a camera can show on your lateral; closing) | LEFT OUT | The service page's own can/cannot lists are fuller and the FAQ carries them. |
| housingAge 1 (most Chesterfield homes are newer than the typical St. Louis-area house) | USED | Section 3. |
| housingAge 2 (ACS 2019-2023: 85.6%, median 1982, 1.4%) | LEFT OUT | PENDING-015 on the location page: primary Census table check not done. Figures not used; the qualitative sentence is used instead. |
| housingAge 3 (pipe from that era more often PVC; material failures matter less; ground movement does not wait for age) | ADAPTED | Section 3, as 'less likely to mean old-pipe failure'. |
| housingAge 4 (a belly gives the slow-drain pattern of an old failing line; era tells what to expect, a camera shows what is there) | LEFT OUT | Cut for length; the belly finding is in the housingAge table row. |
| housingAge.table (bellies, joint separation, damage from later work, roots) | ADAPTED | Section 3: belly, joint separation and roots; damage from later work cut for length. |
| whoToCall 1 (MSD tells customers with a backup to call so it can inspect; urgent reports: raw sewage inside or outside a home, missing manhole covers, flooded streets) | ADAPTED | Section 4: call so it can inspect. The urgent-report list is left out. |
| whoToCall 2 (if MSD or a plumber points to your lateral, an independent inspection helps) | LEFT OUT | Not used. |
| whoToCall 3 (Who To Call guide: call 911 for an emergency that threatens life or property; 911 is not a sewer dispatch line) | USED | Section 4. |
| whoToCall.agency (MSD (314) 768-6260; limited assistance program) | ADAPTED | Section 4, labelled MSD's number. |
| whoToCall.secondaryAgency (Chesterfield Public Works (636) 537-4762; hours; City Hall address) | ADAPTED | Section 4, labelled the City's. Hours and address left out. |
| whoToCall.company (company phone and hours) | LEFT OUT | Company statement; kept on the location page. No company phone on this page, as on the LV models. |
| municipalProgram.lede (up to $15,000; roots in joints are maintenance; City runs its own video review) | ADAPTED | Sections 1-2. |
| municipalProgram 1 (who is eligible: owner-owned 1-6 unit residential; commercial and delinquent excluded) | LEFT OUT | Eligibility detail; the FAQ on the location page carries it (USED in the merged FAQ). |
| municipalProgram 2 ($28 annual fee on tax bills; voters 2000; began January 1, 2001) | ADAPTED | Section 2: the $28 fee only. The 2000 vote and 2001 start are left out. |
| municipalProgram 3 (owner not tenant applies; seller applies in a real estate transaction) | LEFT OUT | Not used. |
| municipalProgram 4 (terms from the March 2026 policy and May 2024 form; funding not stated; confirm with Public Works) | ADAPTED | 'March 2026 policy' named in section 2; the confirm advice is in the merged FAQ (USED). |
| municipalProgram.covers 1 (dye and video investigation, excavation, backfill, repair or replacement) | LEFT OUT | Repair and excavation detail; this company does not offer repair, so it is not described. |
| municipalProgram.covers 2 (defects: collapsed or broken line, severe offset, severe backfall or belly, severe blockage that cannot be cabled out) | USED | Section 2. |
| municipalProgram.covers 3 (limited grading and sod; street, sidewalk and driveway restoration) | LEFT OUT | Repair-work detail. |
| municipalProgram.doesNotCover 1 (roots in bells and joints when removing them lets the line work) | USED | Section 1 and problem card 4. |
| municipalProgram.doesNotCover 2 (the initial cabling is routine maintenance) | USED | Section 1 and problem card 4. |
| municipalProgram.doesNotCover 3-5 (pipe under a building, interior cleanup; items over the line, disasters, negligence; costs above $15,000) | LEFT OUT | Not tied to this service; 'up to $15,000' is stated where used. |
| municipalProgram.steps 1 (a licensed plumbing company or drainlayer cables the lateral first; not reimbursed) | ADAPTED | Section 1 (owner has the line cabled first; not reimbursed). |
| municipalProgram.steps 2-3 (packet; owner applies with the $200 fee, proof, tax receipt, hold harmless, cabling bill) | LEFT OUT | Application detail; the merged FAQ carries it (USED). |
| municipalProgram.steps 4 (the City's contractor televises; Public Works accepts or denies; first come, first served) | ADAPTED | Section 2: the City runs its own video review. |
| municipalProgram.callout 1 (independent inspection does not replace the City's video step; ask Public Works what it accepts) | ADAPTED | Section 2: ask Public Works what documentation it accepts. |
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
| FAQ 7 What should I do if sewage backs up in my Chesterfield building? | LEFT OUT | Not about maintenance; sale requirements belong on the pre-purchase page. |
| FAQ 8 Is a sewer inspection required before buying a Chesterfield home? | USED | Merged FAQ. |
| FAQ 9 What does a sewer camera inspection show? | LEFT OUT | Duplicate; the service FAQ asks 'What does a sewer camera inspection find?'. |
| FAQ 10 Do you repair or replace sewer lines? | LEFT OUT | Duplicate; the service FAQ 'Do you offer sewer repair or replacement?' answers it in full. |

## Preventative Sewer Maintenance service page (v2)

| Section / item | Status | Reason or where used |
| --- | --- | --- |
| seoTitle, metaDescription | LEFT OUT | Page-specific versions written. |
| serviceDescription | ADAPTED | Same definition, set in Chesterfield. |
| hero.intro | ADAPTED | Intro ties the definition to the City's routine-maintenance line. |
| v2.hero.scope, card text | LEFT OUT | Template-level. |
| definition.answer, supporting 1-3 | ADAPTED | Section 1 (planned inspection and cleaning); 'no default schedule' in section 3. |
| signals 2 Gurgling or recurring clogs; 4 A backup that has already happened; 6 Known risk factors | USED | Problem cards 1-3 (shared block). |
| signals 1, 3, 5 | LEFT OUT | Only three service cards are used; the FAQ carries them (USED). |
| limits.can, cannot | ADAPTED | Slope and under-water limits in section 3; full lists in the FAQ (USED). |
| limits.callout (cleaning does not repair; further evaluation outside our scope) | ADAPTED | Section 2: 'Cleaning does not repair pipe. The Sewer Pros does not perform repairs.' |
| process (6 steps) | USED | Process block. |
| process.prep | LEFT OUT | Not a page field. |
| decision (camera first or cleaning first) | LEFT OUT | Not tied to a Chesterfield fact; the FAQ 'Should a camera inspection come before cleaning?' carries it (USED). |
| comparison, ask, audiences, markets, request | LEFT OUT | Template bands; related pages replace comparison and markets. |
| FAQ (16 questions) | USED | All 16 used. The interval, time and cost answers state no figure, as published. |
| inclusions (shared block, 6 items) | USED | Shared block. |
| relatedPageIds | ADAPTED | Camera inspection and sewer cleaning retained; Chesterfield location page added. |

## Facts used, and what they rest on

| Fact | Source |
| --- | --- |
| MSD maintains the public main; the lateral and connection are private property the owner maintains and repairs | MSD Project Clear 'Lateral line', via `chesterfieldContent` |
| City cable-first rule; roots in joints are routine maintenance; $28 annual fee; up to $15,000; defect list | City Sewer Lateral Policy & Procedures (March 2026), via `municipalProgram`; stated as the City's terms, never a price |
| MSD (314) 768-6260 for a building backup; Public Works (636) 537-4762; 911 is not a sewer dispatch line | MSD and the City Who To Call guide; both numbers labelled as theirs |
| Conway Meadows project replaces undersized public sewer between Conway Road and North Outer Forty Road | MSD project page, undated; 'does not tell you your lateral's condition' |
| Most Chesterfield homes are newer than the typical St. Louis-area house | `housingAge` 1, qualitative only. Census figures (PENDING-015) are not used |

## Open items

- 'Less likely to mean old-pipe failure' is an inference from the location page's era sentence. No interval is claimed because the service page states none.
- MSD and City phone numbers and the City's dollar terms are labelled as theirs. No company phone, office, price, offer, response time or guarantee appears in the body.
