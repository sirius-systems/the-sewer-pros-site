# Source report: Florissant, MO + Sewer Line Locating (`sl-florissant-locating`)

Sources: local = `content/pages/st-louis-florissant.tsx` (`florissantContent`, `loc-stl-florissant`); service = `content/pages/services.tsx`, `svc-sewer-line-locating` `v2`; shared blocks = `content/pages/sl-blocks/sewer-line-locating.ts`.
Output: `content/pages/sl-stl-florissant-locating.tsx` (`florissantLocatingContent`). Models: `sl-nlv-locating`, `sl-lv-city-locating`.
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. MSD calls the lateral private, and a locate does not find where it ends | responsibility.answer (MSD: lateral and connection private), responsibility.note (no published rule on the part under the street), municipalProgram lede and doesNotCover 1 (main to within five feet; owner inside the home and within five feet), secondaryAgency Engineering (314) 839-7643 | limits.cannot (a survey or property or boundary line; not a trace of sections the equipment could not reach); definition (estimate of the path of an accessible line) |
| 2. Before anyone digs: the City's permit contact, then 811 | whoToCall.secondaryAgency (Public Works (314) 839-7648 for permit questions, including whether a plumbing or excavation permit applies to a planned project) | limits.cannot, limits.callout (not utility clearance or permission to dig; contact the state one-call program, often 811); FAQ 'Is sewer line locating the same as calling 811?' |
| 3. A sinkhole or a camera finding: a locate places the point, not the cause | responsibility.cards 'The public sewer' and table row 2 (City asks MSD for a dye test; MSD repairs if connected to the public sewer), FAQ 'What happens if a sinkhole opens near my Florissant home?' (lateral: apply without a deposit), municipalProgram doesNotCover 1 (five feet) | signals 'A camera finding you need to place' (locating may help estimate where a point sits at the surface, when the equipment supports it); decision.note (a locate does not show condition) |
| 4. Buying a Florissant home: the route is not the condition | buyingGuide.body (as-is sale; buyer obtains and pays for the inspection and occupancy permit; occupancy page does not mention sewers) | signals 'Buying or evaluating a property' (route helps weigh what could be built; does not show condition); decision (pre-purchase inspection does) |

Page notes:
- Every fact is Florissant's only. Nothing from the St. Louis City, Chesterfield, Ballwin or St. Charles pages, and no MSD fact beyond what the Florissant page itself states about MSD, is used.
- City and MSD phone numbers and dollar terms ($300 deposit) are the City's or MSD's, labelled so in the copy. No company price, offer, guarantee, response time, emergency or same-day claim is made.
- Florissant is a service area, not an office location (fixed by the owner brief, stated in `coverage.availabilityStatement`).

## Florissant location page, element by element

| Element | Status | Reason or where used |
|---|---|---|
| hero.title | LEFT OUT | Same. |
| hero.intro | ADAPTED | New hero intro: MSD lateral rule and five-foot boundary tied to locating. |
| heroForm bullets, request card, nextSteps | LEFT OUT | Same. |
| heroForm.card.note (building backup: contact MSD first, (314) 768-6260) | LEFT OUT | Not about locating. |
| keyTakeaways 1 (MSD repairs the public sewer; lateral private, owner maintains) | ADAPTED | Hero and section 1. |
| keyTakeaways 2 (program: main to within five feet; $50 annual fee; inside the home and within five feet stays the owner's) | ADAPTED | Hero and section 1 (five feet; owner inside the home). $50 fee LEFT OUT. |
| keyTakeaways 3 (camera gives recorded evidence before you clean, buy or approve work) | LEFT OUT | Not about locating. |
| keyTakeaways.jumpNav, serviceCards (9), helpBar | LEFT OUT | Same. |
| responsibility.answer (MSD: lateral and connection private; public sewer is MSD's; cave-in traced to the public sewer is MSD's repair) | ADAPTED | Section 1 (private lateral); cave-in detail in section 3. |
| responsibility.cards "The public sewer" (dye test; MSD repairs; confirm utility by address) | ADAPTED | Section 3 (dye test; MSD repair). |
| responsibility.cards "The lateral line" (owner; program covers main to within five feet) | ADAPTED | Section 1. |
| responsibility.table row 1 (who owns it) | ADAPTED | Section 1. |
| responsibility.table row 2 (who maintains and repairs; dye test) | ADAPTED | Section 3. |
| responsibility.table row 3 (who to contact first: MSD (314) 768-6260; Engineering (314) 839-7643) | ADAPTED | Sections 1 and 3 (Engineering), labelled the City's. |
| responsibility.table row 4 (what help exists: MSD crews; City program subject to rules, deposit, review) | LEFT OUT | Not about locating. |
| responsibility.table row 5 (where an inspection helps) | ADAPTED | Section 3 (a camera finding to place). |
| responsibility.note (no published rule on who owns the part under the street) | USED | Section 1. |
| systemExplainer 1-2 (county separate vs. combined system; page does not label every parcel) | LEFT OUT | Same. |
| systemExplainer 3-5 (Brookshire Wedgewood about 6,000 feet; Lindsay Lane tentative; a public project does not show a lateral) | LEFT OUT | Same. |
| systemExplainer.card bullets (what a camera can show) | LEFT OUT | Not about locating. |
| housingAge p1 (21,229 units; vast majority 1950-1979; Consolidated Plan citing ACS 2024) | LEFT OUT | Housing age does not bear on where a line runs. |
| housingAge p2 (no pipe material or era published) | LEFT OUT | Same. |
| housingAge p3 (working drain is not proof of sound pipe; program denial reasons; not a substitute for maintenance) | LEFT OUT | Not about locating. |
| housingAge p4 (source note) | LEFT OUT | Not used. |
| housingAge.table (cracks; joint separation; roots; blockage with intact pipe; problem near the house) | LEFT OUT | Condition table, not about route. |
| whoToCall p1 (MSD asks for building backups; urgent report list) | LEFT OUT | Not about locating. |
| whoToCall p2 (independent inspection when MSD or a plumber points to your lateral) | LEFT OUT | Not used. |
| whoToCall.agency (MSD building backup line, (314) 768-6260) | LEFT OUT | Not used. |
| whoToCall.secondaryAgency, Engineering (314) 839-7643 (sinkhole; program) | ADAPTED | Sections 1 and 3. |
| whoToCall.secondaryAgency, Public Works (314) 839-7648 (permit questions) | ADAPTED | Section 2, labelled the City's. |
| whoToCall.company (company phone, hours) | LEFT OUT | Not repeated. |
| municipalProgram.lede (main to within five feet; owner inside; $50 fee) | ADAPTED | Section 1. Fee LEFT OUT. |
| municipalProgram.paragraphs (spot repairs about 10 feet; not a substitute for maintenance) | LEFT OUT | Not about locating. |
| municipalProgram.covers (repair of a defective lateral; fill rock, soil, seeding) | LEFT OUT | Same. |
| municipalProgram.doesNotCover 1 (under the home or within five feet of the foundation) | ADAPTED | Section 1. |
| municipalProgram.doesNotCover 2-4 (septic; landscaping; commercial and multi-family wording) | LEFT OUT | Same. |
| municipalProgram.steps 1 (qualifying reason to apply) | LEFT OUT | Not used. |
| municipalProgram.steps 2 ($300 deposit; none after a positive MSD dye test) | ADAPTED | Section 3 (no deposit when a dye test connects to the lateral). |
| municipalProgram.steps 3 (contracted plumber does cable and camera evaluation; City Engineer reviews video) | LEFT OUT | Not about locating. |
| municipalProgram.steps 4 (approved or denied; deposit reimbursed or kept; about two weeks) | LEFT OUT | Not about locating. |
| municipalProgram.afterSteps 1 (denial reasons; clogged-lateral priority; repair-day access) | LEFT OUT | Not about locating. |
| municipalProgram.afterSteps 2 (page undated; no maximum or funding status; Engineering number) | ADAPTED | Section 1 (Engineering number only). |
| municipalProgram.callout (own inspection does not replace the City's plumber; City crew repairs; we do not) | LEFT OUT | Not used. |
| municipalProgram.closing (link to lateral reporting service) | LEFT OUT | A link. |
| secondOpinion (ledes, steps, callout) | LEFT OUT | Not used. |
| buyingGuide.lede | ADAPTED | Section 4 (pre-purchase inspection). |
| buyingGuide.body (as-is sale; buyer pays; occupancy page silent on sewers; program not for a sale contingency; new owner eligibility; written confirmation) | ADAPTED | Section 4 (as-is; buyer pays; occupancy page silent). Contingency, eligibility and written confirmation LEFT OUT. |
| buyingGuide.agents, links | LEFT OUT | Not used; pre-purchase link carried in relatedPageIds. |
| nearbyAreas (Chesterfield, Ballwin, St. Louis City, St. Charles, All St. Louis service areas) | ADAPTED | Same. |
| finalCta | ADAPTED | New CTA. |
| sources | USED | Same. |
| Image slots | ADAPTED | Same. |
| FAQ (10 questions) | see FAQ section | USED 9, LEFT OUT 1 (location page: 10 questions). Left out: "What does a sewer camera inspection show?" (a camera question the locating page does not own). Merged page FAQ: 29. |

## Cards

| Card | Status | Source |
|---|---|---|
| Service cards (3) | USED | sl-blocks/sewer-line-locating problems |
| The City's five-foot line (location card) | ADAPTED | municipalProgram lede and doesNotCover 1 (five feet); service limits.cannot (a locate does not establish boundaries) |
| Six inclusions | USED | sl-blocks inclusions |

## Service page (`svc-sewer-line-locating` v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta written (144 characters). |
| serviceDescription | ADAPTED | Florissant, Missouri added; "estimates, not a survey" kept. |
| hero scope, cardTitle, cardIntro | LEFT OUT | Hero card of the service template. |
| definition | ADAPTED | Section 1 (estimate of the path of an accessible line). |
| signals (5) | USED 3 (via the sl-blocks problems) | Sharing the route and buying left; buying used in section 4. |
| limits can / cannot / callout | ADAPTED | Sections 1-2 (not a survey, not a boundary, not utility clearance or permission to dig). |
| process (5 steps, SeekTech SR-20 name) | USED | Confirmed equipment name, plain mention inside the step. No equipment text in the body. |
| process.prep | LEFT OUT | Does not fit the process shape. |
| decision | ADAPTED | Section 3 (a locate does not show condition). |
| independent, comparison, ask, evidence | LEFT OUT | No local tie. |
| FAQ (23) | USED 20, LEFT OUT 3 | Left out: "Does my city require a sewer inspection for a sale, remodel, or permit?" (Florissant's occupancy question answers it for this city), "Should I use chemical drain cleaner on a sewer line clog?" and "If the line drains after cleaning, is the pipe healthy?" (off the locating topic). Includes "How long does locating take, and how much does it cost?" (DEC-088 wording). |
| relatedPageIds, cta | ADAPTED | Location id plus three related service ids, as the Las Vegas pages. |

## Facts to double-check

- Section 3: "if it connects to your lateral you can apply to the City's program without a deposit" is the location FAQ's wording for a sinkhole connected to the lateral.
- Section 2: the 811 sentence is the service page's own wording (state one-call program, often reached at 811); no Missouri-specific program is named.
- The location page names no City sewer map, so none is mentioned.
