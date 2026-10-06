# Source report: Ballwin, MO + Sewer Cleaning & Camera Inspection (`sl-ballwin-cleaning-camera`)

Sources: local = `content/pages/st-louis-ballwin.tsx` (`ballwinContent`, `loc-stl-ballwin`); service = `content/pages/services.tsx`, `svc-sewer-cleaning-camera-inspection` `v2`; shared blocks = `./sl-blocks/sewer-cleaning-camera-inspection` (problems, inclusions, shots).
Output: `content/pages/sl-stl-ballwin-cleaning-camera.tsx` (`ballwinCleaningCameraContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. The City's program pays for neither cabling nor video | municipalProgram doesNotCover (cabling, video), steps 1 (documentation; paid cabling invoices), whoToCall (Inspections 636-227-2129) | process (video and written findings), FAQ 'Do I get a copy of the video?', 'Will I get written findings?' |
| 2. Roots cleared once a year or less, or more than once a year | municipalProgram P3 (roots rule; documented history) | definition (camera before, after, or both); FAQ 'Does the camera or the cleaning come first?'; cleaning removes roots, not the opening (limits) |
| 3. A 1976 median does not tell you the line is clear | housingAge P1 (clay), P2 (1976, ACS) | FAQ 'Does a clear video mean my line is healthy?'; independent framing (footage to compare against any estimate) |
| 4. MSD, the City's lateral, and what a camera cannot see | responsibility card 2 (eligible lateral from outside wall to MSD main; building sewer excluded), whoToCall (MSD 314-768-6260), company phone from `marketOperatingDetail` | FAQ 'Does the camera or the cleaning come first?' (blocked, full line: cannot see under water) |

Page notes:
- Every Ballwin fact comes from the Ballwin location module; no St. Louis City, Chesterfield, St. Charles or Florissant fact is carried over, and MSD facts are used only as the Ballwin page states them.
- MSD and City phone numbers and the $4,500 / $7,500 terms are theirs, labelled as such. No company price, offer, response time, guarantee, emergency or same-day claim.

## Ballwin location page, element by element

| Element | Status | Reason |
|---|---|---|
| keyTakeaways 1 (MSD owns main; owner owns lateral) | ADAPTED | Section 4 (eligible lateral, MSD main). |
| keyTakeaways 2 (Ballwin program, caps, roots) | ADAPTED | Roots rule in hero and section 2; dollar caps and $28 fee left out. |
| keyTakeaways 3 (camera gives evidence) | ADAPTED | Hero and section 1. |
| responsibility answer, cards, table | ADAPTED | Card 2 used in section 4. |
| responsibility note (no published rule under the street) | LEFT OUT | Covered on the camera page; not needed here. |
| systemExplainer P3-P5 (Valley Drive Phase III) | LEFT OUT | Public-sewer project; not about this service. |
| systemExplainer card (what a camera can show) | LEFT OUT | The service page's own limits and FAQ cover it. |
| housingAge P1 (clay), P2 (1976) | USED | Section 3. |
| housingAge P3 (works is not proof; roots rule) | ADAPTED | Sections 2 and 3. |
| housingAge sourceNote, table | ADAPTED | Source named in prose; table left out. |
| whoToCall paragraphs, MSD line, City contacts | ADAPTED | MSD number in section 4, Inspections number in section 1; labelled as theirs. Public Works number and Government Center hours left out. |
| whoToCall company (phone, hours) | ADAPTED | Phone only, read from `marketOperatingDetail['st-louis-mo']`; hours left out (source uses an en dash). |
| municipalProgram P1, P2, P4, P5 (fee, purpose, funding, undated page) | LEFT OUT | Not about this service. |
| municipalProgram P3 (roots) | USED | Section 2. |
| municipalProgram covers (4 items) | LEFT OUT | Repair scope, not this service. |
| municipalProgram steps (4), $150 fee | ADAPTED | Step 1 (documentation; paid cabling invoices) in section 1; portal and fee left out. |
| municipalProgram doesNotCover (cabling, video, building sewer) | USED | Sections 1 and 4. |
| municipalProgram callout (independent inspection fits) | ADAPTED | Section 1 ('the City decides eligibility') and section 3 (footage to compare). |
| municipalProgram closing (lateral reporting link) | LEFT OUT | Link to a different service page. |
| buyingGuide lede, body | LEFT OUT | Pre-purchase material. |
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
| Several fixtures draining slowly at once | USED | sl-blocks problems |
| Clogs that keep coming back | USED | sl-blocks problems |
| Water rising in a floor drain, tub, or toilet | USED | sl-blocks problems |
| Documenting a recurring problem for the City (location card) | ADAPTED | municipalProgram doesNotCover (cabling, video), steps 1 (documentation ask), callout (City decides) |
| Six inclusions | USED | sl-blocks inclusions |

## Service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta written. |
| hero scope, cardTitle, serviceLabel | LEFT OUT | Hero card of the service template. |
| definition | ADAPTED (service description) | Ballwin, Missouri added. |
| signals, limits, comparison, ask | LEFT OUT | Used through the shared blocks and FAQ; no local tie. |
| process steps | USED | Lifted verbatim; confirmed equipment names only inside steps. |
| Cleaning & camera service FAQ (20 questions) | USED 20 | Includes 'How long does it take, and how much does it cost?' (DEC-088 wording, carried as published). |
| Location FAQ (10 questions) | USED 9, LEFT OUT 1 | Left out: 'What does a sewer camera inspection show?' (the service page asks the same question with the fuller answer, so the location copy is filtered before the merge). |
| relatedPageIds, cta | ADAPTED | Location id plus three related service ids; new CTA. |

## Facts to double-check

- Section 3: 1976 median is published on the location page but carries a TODO(primary-source) there.
- Section 4: eligible-lateral definition and building-sewer exclusion come from the City program page (undated) via the location page.
- Section 1: 'ask the Inspections Department what documentation it accepts' follows the location page's callout.
