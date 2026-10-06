# Source report: Florissant, MO + Hydro Jetting (`sl-florissant-hydro`)

Sources: local = `content/pages/st-louis-florissant.tsx` (`florissantContent`, `loc-stl-florissant`); service = `content/pages/services.tsx`, `svc-hydro-jetting` `v2`; shared blocks = `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS`, `SERVICE_PROBLEM_SHOTS` in `service-location-shared.ts`.
Output: `content/pages/sl-stl-florissant-hydro.tsx` (`florissantHydroContent`). Models: `sl-nlv-hydro`, `sl-lv-city-hydro`.
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Why the method is matched to a lateral you maintain | responsibility.answer (MSD: lateral and connection private; owner maintains; public sewer is MSD's), responsibility.table row 3 (MSD building backup (314) 768-6260), whoToCall.agency | definition (accessible lines); process steps 2-4 (camera look first when included; settings depend on the line); FAQ 'Can hydro jetting cause a backup?' (added water can contribute to a backup) |
| 2. The City calls cabling maintenance, and jetting is cleaning, not repair | housingAge.table row 3 (routine maintenance may mean annual cabling), municipalProgram.paragraphs (spot repairs, usually about 10 feet; not a substitute for regular maintenance) | limits.can (grease and soap, debris and wipes, loose or accessible roots, buildup on the wall), limits.cannot (crack, offset or separated joint, collapse, belly), independent band (we do not repair or replace) |
| 3. When a line is open and serviceable, or the blockage sits near the house | municipalProgram steps 1-2, 4 (recurring backups that maintenance cannot resolve; annual fee; $300 deposit kept if denied), afterSteps 1 (denial reasons: open and serviceable, small defects or hairline cracks, blockage under the home or within five feet), afterSteps 2 / secondaryAgency (Engineering (314) 839-7643) | limits.callout (a line that returns may have a cause cleaning cannot remove); process step 5 (second look shows what was removed and what remains) |
| 4. Mid-century homes: age does not say whether a line suits jetting | housingAge p1 (21,229 units; 1950-1979), p2 (no pipe material or era published) | FAQ 'Is hydro jetting safe for old pipes?' (depends on condition and material; camera look first when included; visible structural defects call for closer evaluation before cleaning); decision.note (we say so plainly if it goes beyond cleaning; sentence cut for length) |

Page notes:
- Every fact is Florissant's only. Nothing from the St. Louis City, Chesterfield, Ballwin or St. Charles pages, and no MSD fact beyond what the Florissant page itself states about MSD, is used.
- City and MSD phone numbers and dollar terms ($300 deposit) are the City's or MSD's, labelled so in the copy. No company price, offer, guarantee, response time, emergency or same-day claim is made.
- Florissant is a service area, not an office location (fixed by the owner brief, stated in `coverage.availabilityStatement`).

## Florissant location page, element by element

| Element | Status | Reason or where used |
|---|---|---|
| hero.title | LEFT OUT | Same. |
| hero.intro | ADAPTED | New hero intro: MSD lateral rule; jetting is cleaning, the program is for defective pipe. |
| heroForm bullets, request card, nextSteps | LEFT OUT | Same. |
| heroForm.card.note (building backup: contact MSD first, (314) 768-6260) | ADAPTED | Section 1, labelled MSD's. |
| keyTakeaways 1 (MSD repairs the public sewer; lateral private, owner maintains) | ADAPTED | Hero and section 1. |
| keyTakeaways 2 (program: main to within five feet; $50 annual fee; inside the home and within five feet stays the owner's) | ADAPTED | Section 3 (five feet as a denial reason). $50 fee LEFT OUT. |
| keyTakeaways 3 (camera gives recorded evidence before you clean, buy or approve work) | LEFT OUT | Not part of a jetting page; the service page covers the camera look. |
| keyTakeaways.jumpNav, serviceCards (9), helpBar | LEFT OUT | Same. |
| responsibility.answer (MSD: lateral and connection private; public sewer is MSD's; cave-in traced to the public sewer is MSD's repair) | USED | Section 1. |
| responsibility.cards "The public sewer" (dye test; MSD repairs; confirm utility by address) | ADAPTED | Section 1 (public sewer is MSD's side). |
| responsibility.cards "The lateral line" (owner; program covers main to within five feet) | ADAPTED | Sections 1 and 3. |
| responsibility.table row 1 (who owns it) | ADAPTED | Section 1. |
| responsibility.table row 2 (who maintains and repairs; dye test) | ADAPTED | Section 1. |
| responsibility.table row 3 (who to contact first: MSD (314) 768-6260; Engineering (314) 839-7643) | ADAPTED | Sections 1 (MSD) and 3 (Engineering), labelled theirs. |
| responsibility.table row 4 (what help exists: MSD crews; City program subject to rules, deposit, review) | ADAPTED | Section 3. |
| responsibility.table row 5 (where an inspection helps) | ADAPTED | Section 3 (a second look). |
| responsibility.note (no published rule on who owns the part under the street) | LEFT OUT | Not used on the jetting page. |
| systemExplainer 1-2 (county separate vs. combined system; page does not label every parcel) | LEFT OUT | Same. |
| systemExplainer 3-5 (Brookshire Wedgewood about 6,000 feet; Lindsay Lane tentative; a public project does not show a lateral) | LEFT OUT | Same. |
| systemExplainer.card bullets (what a camera can show) | LEFT OUT | Service page covers it. |
| housingAge p1 (21,229 units; vast majority 1950-1979; Consolidated Plan citing ACS 2024) | USED | Section 4. |
| housingAge p2 (no pipe material or era published) | USED | Section 4. |
| housingAge p3 (working drain is not proof of sound pipe; program denial reasons; not a substitute for maintenance) | ADAPTED | Sections 2-3. |
| housingAge p4 (source note) | ADAPTED | Named in section 4. |
| housingAge.table (cracks; joint separation; roots; blockage with intact pipe; problem near the house) | ADAPTED | Rows 3-5 in sections 2-3; rows 1-2 LEFT OUT. |
| whoToCall p1 (MSD asks for building backups; urgent report list) | ADAPTED | Section 1 (call MSD first). List LEFT OUT. |
| whoToCall p2 (independent inspection when MSD or a plumber points to your lateral) | LEFT OUT | Not used. |
| whoToCall.agency (MSD building backup line, (314) 768-6260) | ADAPTED | Section 1, labelled MSD's. |
| whoToCall.secondaryAgency, Engineering (314) 839-7643 (sinkhole; program) | ADAPTED | Section 3. |
| whoToCall.secondaryAgency, Public Works (314) 839-7648 (permit questions) | LEFT OUT | Cut for length (permit point left to the location page). |
| whoToCall.company (company phone, hours) | LEFT OUT | Not repeated. |
| municipalProgram.lede (main to within five feet; owner inside; $50 fee) | ADAPTED | Section 3 (five feet within the denial reasons). Fee LEFT OUT. |
| municipalProgram.paragraphs (spot repairs about 10 feet; not a substitute for maintenance) | USED | Section 2. |
| municipalProgram.covers (repair of a defective lateral; fill rock, soil, seeding) | LEFT OUT | Same. |
| municipalProgram.doesNotCover 1 (under the home or within five feet of the foundation) | ADAPTED | Section 3. |
| municipalProgram.doesNotCover 2-4 (septic; landscaping; commercial and multi-family wording) | LEFT OUT | Same. |
| municipalProgram.steps 1 (qualifying reason to apply) | ADAPTED | Section 3 (recurring backups; annual fee paid). |
| municipalProgram.steps 2 ($300 deposit; none after a positive MSD dye test) | ADAPTED | Section 3. |
| municipalProgram.steps 3 (contracted plumber does cable and camera evaluation; City Engineer reviews video) | LEFT OUT | Not about jetting. |
| municipalProgram.steps 4 (approved or denied; deposit reimbursed or kept; about two weeks) | ADAPTED | Section 3 (kept if denied). |
| municipalProgram.afterSteps 1 (denial reasons; clogged-lateral priority; repair-day access) | ADAPTED | Section 3 (denial reasons). Priority and access LEFT OUT. |
| municipalProgram.afterSteps 2 (page undated; no maximum or funding status; Engineering number) | ADAPTED | Section 3 (confirm terms with Engineering). |
| municipalProgram.callout (own inspection does not replace the City's plumber; City crew repairs; we do not) | LEFT OUT | Not used. |
| municipalProgram.closing (link to lateral reporting service) | LEFT OUT | A link. |
| secondOpinion (ledes, steps, callout) | LEFT OUT | Not used. |
| buyingGuide.lede | LEFT OUT | Buyer topic. |
| buyingGuide.body (as-is sale; buyer pays; occupancy page silent on sewers; program not for a sale contingency; new owner eligibility; written confirmation) | LEFT OUT | Buyer topic, not a jetting one. |
| buyingGuide.agents, links | LEFT OUT | Not used. |
| nearbyAreas (Chesterfield, Ballwin, St. Louis City, St. Charles, All St. Louis service areas) | ADAPTED | Same. |
| finalCta | ADAPTED | New CTA. |
| sources | USED | Same. |
| Image slots | ADAPTED | Same. |
| FAQ (10 questions) | see FAQ section | USED 10 (location page: 10 questions). Merged page FAQ: 31. |

## Cards

| Card | Status | Source |
|---|---|---|
| Service cards (3) | USED | SERVICE_PROBLEMS (hydro) |
| Recurring backups and a City application (location card) | ADAPTED | municipalProgram steps 1 (recurring backups that maintenance cannot resolve); service limits (jetting is cleaning, not a repair); ask (video and findings as the record) |
| Six inclusions | USED | SERVICE_INCLUSIONS |

## Service page (`svc-hydro-jetting` v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta written (132 characters). |
| serviceDescription | ADAPTED | Florissant, Missouri added. |
| hero scope, scopeStatement, cardTitle | LEFT OUT | Hero card of the service template. |
| definition | ADAPTED | Hero and section 1. |
| signals (5) | USED 3 (via SERVICE_PROBLEMS) | Two left out; no local tie. |
| limits can / cannot / callout | USED | Section 2 (lists) and section 3 (callout). |
| process (5 steps, Mongoose 184LT name) | USED | Confirmed equipment name, plain mention inside the step. No equipment text in the body. |
| process.prep | LEFT OUT | Does not fit the process shape. |
| decision, comparison (jetting vs. cable cleaning) | LEFT OUT | Neutral; camera-first point used in section 1. |
| independent band | ADAPTED | Section 2 (we do not repair or replace). |
| ask, audiences, markets | LEFT OUT | No local tie. |
| FAQ (21) | USED 21 | All carried, including "Do you offer same-day hydro jetting?" and "How much does it cost?" (DEC-088 wording, as on the Las Vegas pages). |
| relatedPageIds, cta | ADAPTED | Location id plus three related service ids, as the Las Vegas pages. |

## Facts to double-check

- Section 2: "The program makes spot repairs, usually about 10 feet" is the City's statement; "Jetting is on the maintenance side of that line" is this page's framing of the City's annual-cabling wording (the City names cabling, not jetting).
- Section 3: "once the annual lateral fee is paid" follows the City's wording for the recurring-backups route.
- No pressure, flow or equipment figures appear in the body; the Mongoose 184LT name appears only in the service page's process step.
