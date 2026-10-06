# Source report: Ballwin, MO + Sewer Cleaning (`sl-ballwin-cleaning`)

Sources: local = `content/pages/st-louis-ballwin.tsx` (`ballwinContent`, `loc-stl-ballwin`); service = `content/pages/services.tsx`, `svc-sewer-cleaning` `v2`; shared blocks = `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS`, `SERVICE_PROBLEM_SHOTS`.
Output: `content/pages/sl-stl-ballwin-cleaning.tsx` (`ballwinCleaningContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Where Ballwin draws the line between cleaning and repair | municipalProgram P3 (roots once a year or less vs. more), doesNotCover (cabling cost), steps 1 (paid cabling invoices), callout (ask Inspections) | definition (clears and maintains, does not repair); FAQ 'Will I get a video and written findings?' |
| 2. What cleaning does on an older Ballwin lateral, and what it does not | housingAge P1 (clay), municipalProgram lede ($4,500), covers 1 (excavation and repair), callout (own City-approved contractor; we do not repair) | definition, FAQ 'Can sewer cleaning fix a cracked, offset, or collapsed pipe?', 'Does a clean line mean the pipe is in good condition?' |
| 3. A 1976 median year built does not settle what is in the line | housingAge P2 (1976, ACS), P1 (defects while line works) | FAQ 'Why do my drains keep clogging after they were snaked?' (removes obstruction, not cause; camera can help) |
| 4. MSD, the City, and the private lateral we clean | responsibility card 1 (MSD owns main), whoToCall (MSD 314-768-6260; Public Works 636-227-9000), company phone from `marketOperatingDetail` | definition scope (accessible private lines, not public mains) |

Page notes:
- Every Ballwin fact comes from the Ballwin location module; no St. Louis City, Chesterfield, St. Charles or Florissant fact is carried over, and MSD facts are used only as the Ballwin page states them.
- MSD and City phone numbers and the $4,500 / $7,500 terms are theirs, labelled as such. No company price, offer, response time, guarantee, emergency or same-day claim.

## Ballwin location page, element by element

| Element | Status | Reason |
|---|---|---|
| keyTakeaways 1 (MSD owns main; owner owns lateral) | ADAPTED | Hero; section 4. |
| keyTakeaways 2 (Ballwin program, caps, roots) | ADAPTED | Roots rule in hero and section 1; $4,500 cap in section 2; $28 fee and $7,500 left out. |
| keyTakeaways 3 (camera gives evidence) | LEFT OUT | Camera page material; camera mentioned only as a way to see the cause. |
| responsibility answer, cards, table | ADAPTED | MSD main / private lateral split in section 4 and hero. |
| responsibility note (no published rule under the street) | LEFT OUT | Not about what cleaning does. |
| systemExplainer P3-P5 (Valley Drive Phase III) | LEFT OUT | Public-sewer project; the page states only that our cleaning is not the public main. |
| systemExplainer card (what a camera can show) | LEFT OUT | Camera material. |
| housingAge P1 (clay), P2 (1976) | USED | Sections 2 and 3. |
| housingAge P3 (works is not proof; roots rule) | ADAPTED | Sections 1 and 3. |
| housingAge sourceNote, table | ADAPTED | Source named in prose; table left out. |
| whoToCall paragraphs, MSD line, City contacts | ADAPTED | Section 4; numbers labelled as theirs. Inspections number also named in section 1's 'ask the Inspections Department' without a number. Government Center hours left out. |
| whoToCall company (phone, hours) | ADAPTED | Phone only, read from `marketOperatingDetail['st-louis-mo']`; hours left out (source uses an en dash). |
| municipalProgram P1 ($28 fee, 1999 vote) | LEFT OUT | Funding history, not about cleaning. |
| municipalProgram P2 (purpose) | LEFT OUT | Not about this service. |
| municipalProgram P3 (roots) | USED | Section 1. |
| municipalProgram P4 (payment and funding rules) | LEFT OUT | Not about this service. |
| municipalProgram P5 (undated page) | LEFT OUT | Not repeated; page refers readers to the City for terms. |
| municipalProgram covers (4 items), steps, $150 fee | ADAPTED | Covers 1 and steps 1 (paid cabling invoices) used in sections 1 and 2; fee and portal left out. |
| municipalProgram doesNotCover (cabling cost) | USED | Section 1. |
| municipalProgram callout (own City-approved contractor) | USED | Section 2. |
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
| Service-driven cards 1-3 | USED | `SERVICE_PROBLEMS['svc-sewer-cleaning']` |
| Roots that keep coming back (location card) | ADAPTED | municipalProgram P3 (once a year or less vs. more), housingAge table (roots at a gap or joint); camera can show where they enter (service page) |
| Inclusions | USED | `SERVICE_INCLUSIONS` |

## Service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta written. |
| hero scope, cardTitle, cardIntro | LEFT OUT | Hero card of the service template. |
| definition (answer, supporting, scope) | ADAPTED | Service description and section 4 scope line; Ballwin, Missouri added. |
| signals, methods, limits, decision, ask | LEFT OUT | Neutral, no local tie; cleaning vs. repair point carried in section 2. |
| process steps (equipment names inside steps) | USED | Lifted verbatim; confirmed names only. |
| Cleaning service FAQ (14 questions) | USED 14 | Includes 'How long does sewer cleaning take, and how much does it cost?' (DEC-088 wording, carried as published). |
| Location FAQ (10 questions) | USED 10 | Nothing skipped, as on the LV cleaning page (the camera question stays because the cleaning service page does not ask it). |
| relatedPageIds, cta | ADAPTED | Location id plus three related service ids; new CTA. |

## Facts to double-check

- Sections 2 and 3: 1976 median is published on the location page but carries a TODO(primary-source) there.
- Section 2: '$4,500 per repair' is the City program's published cap (undated page), labelled as the City's terms.
- Section 4: 'If sewage is backing up into your home, contact MSD first' follows the location page's request-form note; the shared problem card 3 says 'contact us to discuss', both are on the page.
