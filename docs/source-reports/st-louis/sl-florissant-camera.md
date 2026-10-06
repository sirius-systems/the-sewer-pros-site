# Source report: Florissant, MO + Sewer Camera Inspection (`sl-florissant-camera`)

Sources: local = `content/pages/st-louis-florissant.tsx` (`florissantContent`, `loc-stl-florissant`); service = `content/pages/services.tsx`, `svc-sewer-camera-inspection` `v2`; shared blocks = `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS`, `SERVICE_PROBLEM_SHOTS` in `service-location-shared.ts`.
Output: `content/pages/sl-stl-florissant-camera.tsx` (`florissantCameraContent`). Models: `sl-nlv-camera`, `sl-lv-city-camera`.
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. The City's program stops five feet from the foundation | municipalProgram lede and doesNotCover 1 (main to within five feet; the part inside the home and within five feet is the owner's), afterSteps 1 (blockage under the home or within five feet is a denial reason), secondaryAgency Engineering (314) 839-7643 | limits.cannot (a camera does not by itself show ... sections not reached); ask.items (where along the line conditions were seen) |
| 2. What the camera records on a mid-century lateral | housingAge p1 (21,229 units; vast majority 1950-1979; Consolidated Plan), p2 (no pipe material or era published) | limits.can (roots, deposits, cracks, offset or separated joints, surface damage, standing water, connections), limits.cannot (waterline), process.steps 4-5 (video; findings; parts not viewed), decision.list (blocked line may need cleaning first) |
| 3. The City's plumber evaluates for the program; your footage is your own | municipalProgram steps 2-4 ($300 deposit kept if denied; contracted plumber's cable and camera evaluation; City Engineer reviews the video), afterSteps 1 (hairline cracks; open and serviceable), callout (our inspection does not replace the City's; no claim the City accepts an outside report; City crew performs repairs; we do not) | independent framing; ask.keep (video and findings as a record to compare against estimates); the camera page's "defect or blockage" distinction is the location callout's |
| 4. Buying in Florissant: sold "as is", and the occupancy page is silent on sewers | buyingGuide.body (as-is sale; buyer obtains and pays for inspection and occupancy permit; occupancy page does not mention sewers; program not for a home sale contingency; pending sale does not expedite), FAQ 'Do buyers need a City inspection in Florissant?' | none beyond the legal-advice line ("Findings are informational, not legal advice") |

Page notes:
- Every fact is Florissant's only. Nothing from the St. Louis City, Chesterfield, Ballwin or St. Charles pages, and no MSD fact beyond what the Florissant page itself states about MSD, is used.
- City and MSD phone numbers and dollar terms ($300 deposit) are the City's or MSD's, labelled so in the copy. No company price, offer, guarantee, response time, emergency or same-day claim is made.
- Florissant is a service area, not an office location (fixed by the owner brief, stated in `coverage.availabilityStatement`).

## Florissant location page, element by element

| Element | Status | Reason or where used |
|---|---|---|
| hero.title | LEFT OUT | Location page H1; a page-specific H1 is written. |
| hero.intro | ADAPTED | New hero intro: MSD lateral rule plus the five-foot program boundary tied to a camera inspection. |
| heroForm bullets, request card, nextSteps | LEFT OUT | Shell supplies the form; founding-year and family-operated claims not repeated. |
| heroForm.card.note (building backup: contact MSD first, (314) 768-6260) | LEFT OUT | Not about a camera inspection. |
| keyTakeaways 1 (MSD repairs the public sewer; lateral private, owner maintains) | ADAPTED | Hero. |
| keyTakeaways 2 (program: main to within five feet; $50 annual fee; inside the home and within five feet stays the owner's) | ADAPTED | Section 1 (five feet). The $50 fee is LEFT OUT: a program-funding fact, not a camera one. |
| keyTakeaways 3 (camera gives recorded evidence before you clean, buy or approve work) | ADAPTED | Section 3. |
| keyTakeaways.jumpNav, serviceCards (9), helpBar | LEFT OUT | Location page navigation and cards. |
| responsibility.answer (MSD: lateral and connection private; public sewer is MSD's; cave-in traced to the public sewer is MSD's repair) | ADAPTED | Hero. |
| responsibility.cards "The public sewer" (dye test; MSD repairs; confirm utility by address) | LEFT OUT | Not about a camera. |
| responsibility.cards "The lateral line" (owner; program covers main to within five feet) | ADAPTED | Section 1. |
| responsibility.table row 1 (who owns it) | ADAPTED | Hero. |
| responsibility.table row 2 (who maintains and repairs; dye test) | LEFT OUT | Not about a camera. |
| responsibility.table row 3 (who to contact first: MSD (314) 768-6260; Engineering (314) 839-7643) | ADAPTED | Section 1, Engineering only, labelled the City's. |
| responsibility.table row 4 (what help exists: MSD crews; City program subject to rules, deposit, review) | ADAPTED | Section 3. |
| responsibility.table row 5 (where an inspection helps) | ADAPTED | Sections 1 and 3. |
| responsibility.note (no published rule on who owns the part under the street) | LEFT OUT | Not used on the camera page. |
| systemExplainer 1-2 (county separate vs. combined system; page does not label every parcel) | LEFT OUT | County-level context, not about this service. |
| systemExplainer 3-5 (Brookshire Wedgewood about 6,000 feet; Lindsay Lane tentative; a public project does not show a lateral) | LEFT OUT | Public projects are not a camera topic. |
| systemExplainer.card bullets (what a camera can show) | ADAPTED | Section 2, using the service page's limits.can list instead. |
| housingAge p1 (21,229 units; vast majority 1950-1979; Consolidated Plan citing ACS 2024) | USED | Section 2. |
| housingAge p2 (no pipe material or era published) | USED | Section 2. |
| housingAge p3 (working drain is not proof of sound pipe; program denial reasons; not a substitute for maintenance) | ADAPTED | Section 3. |
| housingAge p4 (source note) | ADAPTED | Consolidated Plan named in section 2. |
| housingAge.table (cracks; joint separation; roots; blockage with intact pipe; problem near the house) | ADAPTED | Rows 1, 4, 5 in sections 1 and 3; rows 2-3 LEFT OUT. |
| whoToCall p1 (MSD asks for building backups; urgent report list) | LEFT OUT | Not about a camera. Urgent-report list LEFT OUT. |
| whoToCall p2 (independent inspection when MSD or a plumber points to your lateral) | ADAPTED | Section 3 framing. |
| whoToCall.agency (MSD building backup line, (314) 768-6260) | LEFT OUT | Not used. |
| whoToCall.secondaryAgency, Engineering (314) 839-7643 (sinkhole; program) | ADAPTED | Section 1, labelled the City's. |
| whoToCall.secondaryAgency, Public Works (314) 839-7648 (permit questions) | LEFT OUT | Not about a camera. |
| whoToCall.company (company phone, hours) | LEFT OUT | Not repeated, as the Las Vegas camera pages. |
| municipalProgram.lede (main to within five feet; owner inside; $50 fee) | ADAPTED | Section 1. $50 fee LEFT OUT. |
| municipalProgram.paragraphs (spot repairs about 10 feet; not a substitute for maintenance) | LEFT OUT | Cleaning topic. |
| municipalProgram.covers (repair of a defective lateral; fill rock, soil, seeding) | LEFT OUT | Coverage stated through the lede; restoration detail LEFT OUT. |
| municipalProgram.doesNotCover 1 (under the home or within five feet of the foundation) | ADAPTED | Section 1. |
| municipalProgram.doesNotCover 2-4 (septic; landscaping; commercial and multi-family wording) | LEFT OUT | Not about this service. |
| municipalProgram.steps 1 (qualifying reason to apply) | LEFT OUT | Not used. |
| municipalProgram.steps 2 ($300 deposit; none after a positive MSD dye test) | ADAPTED | Section 3, labelled the City's term. |
| municipalProgram.steps 3 (contracted plumber does cable and camera evaluation; City Engineer reviews video) | ADAPTED | Section 3. |
| municipalProgram.steps 4 (approved or denied; deposit reimbursed or kept; about two weeks) | ADAPTED | Section 3 (deposit kept if denied). Reimbursement and timing LEFT OUT. |
| municipalProgram.afterSteps 1 (denial reasons; clogged-lateral priority; repair-day access) | ADAPTED | Sections 1, 3 and 4 (denial reasons; sale contingency). Priority and access LEFT OUT. |
| municipalProgram.afterSteps 2 (page undated; no maximum or funding status; Engineering number) | ADAPTED | Section 1 (Engineering number only). |
| municipalProgram.callout (own inspection does not replace the City's plumber; City crew repairs; we do not) | ADAPTED | Section 3. |
| municipalProgram.closing (link to lateral reporting service) | LEFT OUT | A link. |
| secondOpinion (ledes, steps, callout) | LEFT OUT | Independent-inspection page content; independence stated in section 3. |
| buyingGuide.lede | LEFT OUT | Scope sentence cut for length. |
| buyingGuide.body (as-is sale; buyer pays; occupancy page silent on sewers; program not for a sale contingency; new owner eligibility; written confirmation) | ADAPTED | Section 4. New-owner eligibility and written confirmation LEFT OUT. |
| buyingGuide.agents, links | LEFT OUT | Not used; pre-purchase link carried in relatedPageIds. |
| nearbyAreas (Chesterfield, Ballwin, St. Louis City, St. Charles, All St. Louis service areas) | ADAPTED | Coverage block; the four other locations. "All St. Louis service areas" LEFT OUT. |
| finalCta | ADAPTED | New CTA for this page. |
| sources | USED | Page carries `florissantContent.sources`. |
| Image slots | ADAPTED | New per-page slots, neutral alt text. |
| FAQ (10 questions) | see FAQ section | USED 9, LEFT OUT 1 (location page: 10 questions). Left out: "What does a sewer camera inspection show?" (the service page answers "What can a sewer camera inspection show?" in full). Merged page FAQ: 31. |

## Cards

| Card | Status | Source |
|---|---|---|
| Recurring clogs | USED | SERVICE_PROBLEMS |
| Slow-draining sinks, tubs, or toilets | USED | SERVICE_PROBLEMS |
| After a sewage backup | USED | SERVICE_PROBLEMS |
| Before you pay the City's deposit (location card) | ADAPTED | municipalProgram steps 2 and 4 ($300 kept if denied), afterSteps 1 (hairline cracks; open and serviceable); "we do not perform repairs, compare against any estimate" as on the Las Vegas camera pages |
| Six inclusions | USED | SERVICE_INCLUSIONS |

## Service page (`svc-sewer-camera-inspection` v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta written (152 characters). |
| serviceDescription | ADAPTED | Florissant, Missouri added. |
| hero scope, cardTitle | LEFT OUT | Hero card of the service template. |
| definition | ADAPTED | Service description; short answer sits in the FAQ. |
| signals (6) | USED 3 (via SERVICE_PROBLEMS) | Gurgling, odors, wet areas left out; no local tie. |
| limits can / cannot / callout / related | ADAPTED | Section 2 (can list, waterline); cannot list in section 1 (sections not reached, where along the line). |
| process (5 steps, SeeSnake names) | USED | Confirmed equipment names, plain mention inside the step. |
| process.prep | LEFT OUT | Does not fit the process shape. |
| decision, comparison | LEFT OUT | Neutral, no local tie; blocked-line point used in section 2. |
| ask, evidence, audiences, markets | LEFT OUT | Video and findings used in section 2 and inclusions. |
| FAQ (23) | USED 22, LEFT OUT 1 | Left out: "Which areas does The Sewer Pros serve?" (this page is an area page). Includes "How much does it cost, and how long does it take?" (DEC-088 wording, carried as on the Las Vegas pages). |
| relatedPageIds, cta | ADAPTED | Location id plus three related service ids, as the Las Vegas pages. |

## Facts to double-check

- Section 1: "The City lists a blockage under the home or within five feet of the foundation among its reasons to deny" is the location page's afterSteps 1 wording.
- Section 2: "a camera generally cannot see under the waterline" is the service page's statement.
- Section 3: the $300 deposit and the denial reasons are the City's published program terms, labelled the City's. The City's page is undated; the page tells readers to ask Engineering (314) 839-7643.
