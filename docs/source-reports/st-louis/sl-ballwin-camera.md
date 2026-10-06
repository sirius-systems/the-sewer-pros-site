# Source report: Ballwin, MO + Sewer Camera Inspection (`sl-ballwin-camera`)

Sources: local = `content/pages/st-louis-ballwin.tsx` (`ballwinContent`, `loc-stl-ballwin`); service = `content/pages/services.tsx`, `svc-sewer-camera-inspection` `v2`; shared blocks = `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS`, `SERVICE_PROBLEM_SHOTS`.
Output: `content/pages/sl-stl-ballwin-camera.tsx` (`ballwinCameraContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. The City's program will not pay for the video | municipalProgram lede ($4,500 / $7,500, terms are the City's), doesNotCover (cabling, video, building sewer), responsibility card 2 (eligible lateral starts at outside wall, ends at MSD main) | definition (inspection and documentation, no repair); recording as evidence |
| 2. Older clay laterals, and what a camera can record in one | housingAge P1 (clay cracks, separates, roots, defects while line works), P2 (1976 median, ACS 2019-2023, city as a whole) | limits can (cracks, offsets, roots, deposits, standing water), cannot (waterline; sections not reached) |
| 3. Roots once a year or less, or more than once a year | municipalProgram P3 (more than once a year covered; annual maintenance; documented history), callout (ask Inspections what it accepts) | limits can (roots visible inside the pipe); 'footage cannot show how often the line has been cleared' is this page's own limit statement |
| 4. MSD or your lateral: who to call, and where a recording fits | whoToCall (MSD 314-768-6260; Inspections 636-227-2129; Public Works 636-227-9000), responsibility note (no published rule on lateral under the street), callout (we do not perform repairs) | independent framing: findings as evidence |

Page notes:
- Every Ballwin fact comes from the Ballwin location module; no St. Louis City, Chesterfield, St. Charles or Florissant fact is carried over, and MSD facts are used only as the Ballwin page states them.
- MSD and City phone numbers and the $4,500 / $7,500 terms are theirs, labelled as such. No company price, offer, response time, guarantee, emergency or same-day claim.

## Ballwin location page, element by element

| Element | Status | Reason |
|---|---|---|
| keyTakeaways 1 (MSD owns main; owner owns lateral) | ADAPTED | Last sentence of section 4 and hero. |
| keyTakeaways 2 (Ballwin program, $28 fee, $4,500 / $7,500, roots) | ADAPTED | Dollar caps and roots rule used; $28 fee left out (not about video). |
| keyTakeaways 3 (camera gives evidence) | USED | Hero. |
| responsibility answer, cards, table | ADAPTED | Owner/MSD split in hero; eligible-lateral definition in section 1; contacts in section 4. |
| responsibility note (no published rule under the street) | USED | Section 4, as 'we did not find a published rule'. |
| systemExplainer P3-P5 (Valley Drive Phase III project, schedule) | LEFT OUT | Public-sewer project; not about what a camera records on a lateral. |
| systemExplainer card (what a camera can show) | ADAPTED | Section 2 bullets, from the service page's wording. |
| housingAge P1 (clay), P2 (1976) | USED | Section 2. |
| housingAge P3 (works is not proof; roots rule) | ADAPTED | Sections 2 and 3. |
| housingAge sourceNote, table | ADAPTED | Source named in prose; table left out. |
| whoToCall paragraphs, MSD line, City contacts | ADAPTED | Section 4; numbers labelled as theirs. Government Center hours left out. |
| whoToCall company (phone, hours) | LEFT OUT | Company phone not repeated, as on the LV camera page. |
| municipalProgram P1 ($28 fee, 1999 vote) | LEFT OUT | Funding history, not about this service. |
| municipalProgram P2 (purpose: unable to live in the home) | LEFT OUT | Not about this service. |
| municipalProgram P3 (roots) | USED | Section 3. |
| municipalProgram P4 (payment and funding rules) | LEFT OUT | Not about this service. |
| municipalProgram P5 (undated page) | LEFT OUT | Page notes 'confirm with the City' covered by the Inspections reference in section 3. |
| municipalProgram covers (4 items), steps (4), $150 fee | LEFT OUT | Section 1 uses the cost caps only; steps belong on the location page. Card 4 summarises the documentation ask. |
| municipalProgram doesNotCover (video, cabling, building sewer) | USED | Section 1. |
| municipalProgram callout (independent inspection fits) | ADAPTED | Section 3 and card 4. |
| municipalProgram closing (lateral reporting link) | LEFT OUT | Link to a different service page. |
| buyingGuide lede, body (occupancy permit, sale contingency) | LEFT OUT | Pre-purchase material; the pre-purchase page is linked in related pages. |
| heroForm (bullets, card, note) | LEFT OUT | Shell supplies the request form. |
| jumpNav | LEFT OUT | Location page navigation. |
| serviceCards (9) | LEFT OUT | Not part of this content shape. |
| secondOpinion (ledes, steps, callout) | LEFT OUT | Repair-recommendation material; the page states only that we do not perform repairs. |
| buyingGuide agents (affiliations) | LEFT OUT | Not about this service; affiliations are not repeated. |
| systemExplainer P1-P2 (separate/combined system, county-level) | LEFT OUT | MSD county-level background, not about this service. |
| nearbyAreas | ADAPTED | Coverage block: St. Louis City, Chesterfield, Florissant, St. Charles. |
| finalCta | ADAPTED | New CTA for this page. |
| sources | LEFT OUT | Page carries `ballwinContent.sources`. |
| Image slots | ADAPTED | New per-page slots, neutral alt text; no place-specific photo claimed. |
| faq (10 questions) | see below | Merged with the service FAQ. |

Fixed by the owner brief, not stated on the Ballwin page: "Ballwin is a service area, not an office location." (consistent with the location page, which states no office, address or map pin).

## Cards

| Card | Status | Source |
|---|---|---|
| Recurring clogs | USED | `SERVICE_PROBLEMS` (service signals) |
| Slow-draining sinks, tubs, or toilets | USED | `SERVICE_PROBLEMS` |
| After a sewage backup | USED | `SERVICE_PROBLEMS` |
| Documenting a problem for the City program (location card) | ADAPTED | municipalProgram steps 1 (documentation ask), doesNotCover (video), callout (City decides; own contractor; no repairs by us) |
| Six inclusions | USED | `SERVICE_INCLUSIONS` |

## Service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta written. |
| hero scope, cardTitle | LEFT OUT | Hero card of the service template. |
| definition | ADAPTED (service description) | Ballwin, Missouri added. |
| signals (6 items) | USED 3 (via `SERVICE_PROBLEMS`) | Gurgling, odors, wet areas left out; no local tie. |
| limits can / cannot / callout / related | ADAPTED (section 2) | Waterline point used; the rest is on the service page and in FAQ. |
| process (5 steps, SeeSnake names) | USED | Confirmed equipment names, plain mention inside the step. |
| process intro, decision, comparison, ask, evidence, audiences, markets | LEFT OUT | Neutral, no local tie. |
| Camera service FAQ (23 questions) | USED 22, LEFT OUT 1 | Left out: 'Which areas does The Sewer Pros serve?' (this page is an area page). Includes 'How much does it cost, and how long does it take?' (DEC-088 wording, carried as published). |
| Location FAQ (10 questions) | USED 9, LEFT OUT 1 | Left out: 'What does a sewer camera inspection show?' (the service page answers it in full as 'What can a sewer camera inspection show?'). |
| relatedPageIds, cta | ADAPTED | Location id plus three related service ids; new CTA. |

## Facts to double-check

- Section 2: 1976 median year built is published as fact on the location page, but that module has a TODO(primary-source) to check it against Census tables B25034/B25035.
- Section 1: 'eligible lateral starts at the outside wall of the house and continues to the MSD main' comes from the location responsibility card, which cites the City's program page (undated).
- Section 2: 'a camera generally cannot see under the waterline' is the service page's statement.
