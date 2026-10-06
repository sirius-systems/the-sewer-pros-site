# Source report: Florissant, MO + Sewer Cleaning & Camera Inspection (`sl-florissant-cleaning-camera`)

Sources: local = `content/pages/st-louis-florissant.tsx` (`florissantContent`, `loc-stl-florissant`); service = `content/pages/services.tsx`, `svc-sewer-cleaning-camera-inspection` `v2`; shared blocks = `content/pages/sl-blocks/sewer-cleaning-camera-inspection.ts`.
Output: `content/pages/sl-stl-florissant-cleaning-camera.tsx` (`florissantCleaningCameraContent`). Models: `sl-nlv-cleaning-camera`, `sl-lv-city-cleaning-camera`.
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. MSD's side ends at the public sewer, and the visit works on yours | responsibility.answer (MSD: lateral and connection private; public sewer is MSD's), responsibility.table row 3 (MSD building backup (314) 768-6260), responsibility.note (no published rule on who owns the part under the street) | definition.supporting (accessible private-property lines, not public mains); marketOperatingDetail['st-louis-mo'].phone (company phone, read from data) |
| 2. Before or after cleaning: the City expects owners to maintain the line | housingAge.table row 3 (annual cabling), municipalProgram.paragraphs (spot repairs about 10 feet; not a substitute for regular maintenance) | definition.answer and decision (cleaning removes the obstruction, no single required order, cleaning first when the line is blocked and full of water because a camera cannot see under water) |
| 3. What the City's plumber evaluates, and what your own footage adds | municipalProgram steps 3-4 (contracted plumber's cable and camera evaluation; City Engineer reviews; $300 deposit kept if denied), afterSteps 1 (denial reasons: open and serviceable, small defects or hairline cracks, blockage within five feet), afterSteps 2 (page undated; Engineering (314) 839-7643), callout (no claim City accepts an outside report; City crew performs repairs; we do not) | process step 5 (video and written findings); independent framing |
| 4. Mid-century homes: age and MSD projects say little about one lateral | housingAge p1-p2 (21,229 units; 1950-1979; no pipe material or era published), p3 (working drain is not proof of sound pipe; blockage is not proof of broken), systemExplainer 3-5 (Brookshire about 6,000 feet in Wedgewood; Lindsay Lane tentative; a public project does not show one lateral's condition) | limits.callout; signals 'Clogs that keep coming back' (cleaning followed by a camera look can help show which) |

Page notes:
- Every fact is Florissant's only. Nothing from the St. Louis City, Chesterfield, Ballwin or St. Charles pages, and no MSD fact beyond what the Florissant page itself states about MSD, is used.
- City and MSD phone numbers and dollar terms ($300 deposit) are the City's or MSD's, labelled so in the copy. No company price, offer, guarantee, response time, emergency or same-day claim is made.
- Florissant is a service area, not an office location (fixed by the owner brief, stated in `coverage.availabilityStatement`).

## Florissant location page, element by element

| Element | Status | Reason or where used |
|---|---|---|
| hero.title | LEFT OUT | Same. |
| hero.intro | ADAPTED | New hero intro: MSD lateral rule; cleaning plus camera on the private line. |
| heroForm bullets, request card, nextSteps | LEFT OUT | Same. |
| heroForm.card.note (building backup: contact MSD first, (314) 768-6260) | ADAPTED | Section 1, labelled MSD's. |
| keyTakeaways 1 (MSD repairs the public sewer; lateral private, owner maintains) | ADAPTED | Hero and section 1. |
| keyTakeaways 2 (program: main to within five feet; $50 annual fee; inside the home and within five feet stays the owner's) | ADAPTED | Section 3 (within five feet as a denial reason). $50 fee LEFT OUT. |
| keyTakeaways 3 (camera gives recorded evidence before you clean, buy or approve work) | ADAPTED | Section 3 (video and written findings). |
| keyTakeaways.jumpNav, serviceCards (9), helpBar | LEFT OUT | Same. |
| responsibility.answer (MSD: lateral and connection private; public sewer is MSD's; cave-in traced to the public sewer is MSD's repair) | USED | Section 1. |
| responsibility.cards "The public sewer" (dye test; MSD repairs; confirm utility by address) | ADAPTED | Section 1. |
| responsibility.cards "The lateral line" (owner; program covers main to within five feet) | ADAPTED | Sections 1 and 3. |
| responsibility.table row 1 (who owns it) | ADAPTED | Section 1. |
| responsibility.table row 2 (who maintains and repairs; dye test) | ADAPTED | Section 1. |
| responsibility.table row 3 (who to contact first: MSD (314) 768-6260; Engineering (314) 839-7643) | ADAPTED | Sections 1 (MSD) and 3 (Engineering), labelled theirs. |
| responsibility.table row 4 (what help exists: MSD crews; City program subject to rules, deposit, review) | ADAPTED | Section 3. |
| responsibility.table row 5 (where an inspection helps) | ADAPTED | Sections 2-3. |
| responsibility.note (no published rule on who owns the part under the street) | USED | Section 1. |
| systemExplainer 1-2 (county separate vs. combined system; page does not label every parcel) | LEFT OUT | Same. |
| systemExplainer 3-5 (Brookshire Wedgewood about 6,000 feet; Lindsay Lane tentative; a public project does not show a lateral) | ADAPTED | Section 4; "tentative" kept; construction dates LEFT OUT. |
| systemExplainer.card bullets (what a camera can show) | LEFT OUT | Service page covers it. |
| housingAge p1 (21,229 units; vast majority 1950-1979; Consolidated Plan citing ACS 2024) | USED | Section 4. |
| housingAge p2 (no pipe material or era published) | USED | Section 4. |
| housingAge p3 (working drain is not proof of sound pipe; program denial reasons; not a substitute for maintenance) | ADAPTED | Sections 2-4. |
| housingAge p4 (source note) | ADAPTED | Named in section 4. |
| housingAge.table (cracks; joint separation; roots; blockage with intact pipe; problem near the house) | ADAPTED | Rows 3-4 in sections 2-3; rows 1-2, 5 LEFT OUT. |
| whoToCall p1 (MSD asks for building backups; urgent report list) | ADAPTED | Section 1. List LEFT OUT. |
| whoToCall p2 (independent inspection when MSD or a plumber points to your lateral) | LEFT OUT | Not used. |
| whoToCall.agency (MSD building backup line, (314) 768-6260) | ADAPTED | Section 1, labelled MSD's. |
| whoToCall.secondaryAgency, Engineering (314) 839-7643 (sinkhole; program) | ADAPTED | Section 3. |
| whoToCall.secondaryAgency, Public Works (314) 839-7648 (permit questions) | LEFT OUT | Not used. |
| whoToCall.company (company phone, hours) | USED | Section 1, read from marketOperatingDetail['st-louis-mo'], not typed. Hours LEFT OUT. |
| municipalProgram.lede (main to within five feet; owner inside; $50 fee) | ADAPTED | Section 3 (five feet only). Fee LEFT OUT. |
| municipalProgram.paragraphs (spot repairs about 10 feet; not a substitute for maintenance) | USED | Section 2. |
| municipalProgram.covers (repair of a defective lateral; fill rock, soil, seeding) | LEFT OUT | Same. |
| municipalProgram.doesNotCover 1 (under the home or within five feet of the foundation) | ADAPTED | Section 3. |
| municipalProgram.doesNotCover 2-4 (septic; landscaping; commercial and multi-family wording) | LEFT OUT | Same. |
| municipalProgram.steps 1 (qualifying reason to apply) | LEFT OUT | Not used. |
| municipalProgram.steps 2 ($300 deposit; none after a positive MSD dye test) | ADAPTED | Section 3. |
| municipalProgram.steps 3 (contracted plumber does cable and camera evaluation; City Engineer reviews video) | ADAPTED | Section 3. |
| municipalProgram.steps 4 (approved or denied; deposit reimbursed or kept; about two weeks) | ADAPTED | Section 3 (kept if denied). |
| municipalProgram.afterSteps 1 (denial reasons; clogged-lateral priority; repair-day access) | ADAPTED | Section 3. Priority and access LEFT OUT. |
| municipalProgram.afterSteps 2 (page undated; no maximum or funding status; Engineering number) | USED | Section 3. |
| municipalProgram.callout (own inspection does not replace the City's plumber; City crew repairs; we do not) | ADAPTED | Section 3. |
| municipalProgram.closing (link to lateral reporting service) | LEFT OUT | A link. |
| secondOpinion (ledes, steps, callout) | LEFT OUT | Not used. |
| buyingGuide.lede | LEFT OUT | Buyer topic. |
| buyingGuide.body (as-is sale; buyer pays; occupancy page silent on sewers; program not for a sale contingency; new owner eligibility; written confirmation) | LEFT OUT | Buyer topic. |
| buyingGuide.agents, links | LEFT OUT | Not used. |
| nearbyAreas (Chesterfield, Ballwin, St. Louis City, St. Charles, All St. Louis service areas) | ADAPTED | Same. |
| finalCta | ADAPTED | New CTA. |
| sources | USED | Same. |
| Image slots | ADAPTED | Same. |
| FAQ (10 questions) | see FAQ section | USED 9, LEFT OUT 1 (location page: 10 questions). Left out: "What does a sewer camera inspection show?" (the service page asks it with the fuller answer). Merged page FAQ: 30. |

## Cards

| Card | Status | Source |
|---|---|---|
| Service cards (3) | USED | sl-blocks/sewer-cleaning-camera-inspection problems |
| A line the City calls open and serviceable (location card) | ADAPTED | afterSteps 1 (open and serviceable; $300 kept if denied); service signals ("cleaning followed by a camera look can help show which") |
| Six inclusions | USED | sl-blocks inclusions |

## Service page (`svc-sewer-cleaning-camera-inspection` v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta written (157 characters). |
| serviceDescription | ADAPTED | Florissant, Missouri added. |
| hero scope, cardTitle, serviceLabel | LEFT OUT | Hero card of the service template. |
| definition | ADAPTED | Hero and section 1. |
| signals (6) | USED 3 (via the sl-blocks problems) | Others left out; no local tie. |
| limits can / cannot / callout / related | ADAPTED | Waterline point in section 2; the rest is on the service page and in the FAQ. |
| process (5 steps, SeeSnake names) | USED | Confirmed equipment names, plain mention inside the step. |
| process.prep | LEFT OUT | Does not fit the process shape. |
| decision | ADAPTED | Section 2 (no required order). |
| comparison, ask, audiences, markets | LEFT OUT | No local tie. |
| FAQ (21) | USED 21 | "What does a sewer camera inspection show?" kept from the service page (fuller answer); the location page's shorter copy filtered out first. Includes "How long does it take, and how much does it cost?" (DEC-088 wording). |
| relatedPageIds, cta | ADAPTED | Location id plus three related service ids, as the Las Vegas pages. |

## Facts to double-check

- Section 1: company phone is read from marketOperatingDetail['st-louis-mo'] ((314) 821-1600), not typed.
- Section 3: the City's page is undated, so the copy says to confirm current terms with Engineering.
- Section 4: Brookshire (about 6,000 feet, Wedgewood) and Lindsay Lane (tentative) are named as MSD's, with no current-status claim.
