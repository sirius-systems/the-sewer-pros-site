# Source report: Ballwin, MO + Hydro Jetting (`sl-ballwin-hydro`)

Sources: local = `content/pages/st-louis-ballwin.tsx` (`ballwinContent`, `loc-stl-ballwin`); service = `content/pages/services.tsx`, `svc-hydro-jetting` `v2`; shared blocks = `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS`, `SERVICE_PROBLEM_SHOTS`.
Output: `content/pages/sl-stl-ballwin-hydro.tsx` (`ballwinHydroContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Why the method is matched to an older clay lateral | housingAge P1 (clay cracks, separates, roots, defects while line works) | limits (jetting depends on condition and material; visible defects call for evaluation first), process 'Jet the line' (extra water can add to a backup; paced to the line), FAQ 'Is hydro jetting safe for old pipes?', 'Can hydro jetting cause a backup?' |
| 2. Roots and the City's once-a-year line | municipalProgram P3 (once a year or less vs. more), whoToCall (Inspections 636-227-2129), steps 1 (cabling named) | limits can (roots loose or accessible); 'does not repair the opening' from the Chesterfield hydro pattern |
| 3. What jetting clears, and what the City program pays for instead | municipalProgram covers 1 (excavation and repair), doesNotCover (cabling cost) | limits can (4 bullets) and cannot (cracked pipe, offset joint, collapse, belly), decision note (evaluation outside our scope) |
| 4. A 1976 median, MSD's project, and your own lateral | housingAge P2 (1976, ACS), systemExplainer P3-P4 (Valley Drive Phase III, public sewer, tentative schedule), whoToCall (MSD 314-768-6260) | decision note ('If what we see goes beyond cleaning, we will say so plainly') |

Page notes:
- Every Ballwin fact comes from the Ballwin location module; no St. Louis City, Chesterfield, St. Charles or Florissant fact is carried over, and MSD facts are used only as the Ballwin page states them.
- MSD and City phone numbers and the $4,500 / $7,500 terms are theirs, labelled as such. No company price, offer, response time, guarantee, emergency or same-day claim.

## Ballwin location page, element by element

| Element | Status | Reason |
|---|---|---|
| keyTakeaways 1 (MSD owns main; owner owns lateral) | LEFT OUT | Owner/MSD split not needed; hero is built on the clay-pipe fact. |
| keyTakeaways 2 (Ballwin program, caps, roots) | ADAPTED | Roots rule in section 2; program scope in section 3; $28 fee and dollar caps left out. |
| keyTakeaways 3 (camera gives evidence) | LEFT OUT | Camera page material. |
| responsibility answer, cards, table | LEFT OUT | Owner/MSD split is on the location page; this page is built on pipe condition and the roots rule. |
| responsibility note (no published rule under the street) | LEFT OUT | Not about jetting. |
| systemExplainer P3-P4 (Valley Drive Phase III) | ADAPTED | Section 4: public-sewer project in Ballwin and Clarkson Valley, schedule tentative; the 5,500 ft and 8 to 15 inch figures left out. |
| systemExplainer P5 (project does not tell you your lateral's condition) | ADAPTED | Section 4, as 'concerns the public sewer'. |
| systemExplainer card (what a camera can show) | LEFT OUT | Camera material. |
| housingAge P1 (clay), P2 (1976) | USED | Sections 1 and 4. |
| housingAge P3 (works is not proof; roots rule) | ADAPTED | Sections 1 and 2. |
| housingAge sourceNote, table | ADAPTED | Source named in prose; table left out. |
| whoToCall paragraphs, MSD line, City contacts | ADAPTED | MSD number in section 4, Inspections number in section 2; labelled as theirs. Public Works number and Government Center hours left out. |
| whoToCall company (phone, hours) | LEFT OUT | Company phone not repeated, as on the LV hydro page. |
| municipalProgram P1, P2, P4, P5 (fee, purpose, funding, undated page) | LEFT OUT | Not about jetting. |
| municipalProgram P3 (roots) | USED | Section 2. |
| municipalProgram covers 1 (excavation and repair) | ADAPTED | Section 3. Other covers items left out. |
| municipalProgram steps (4), $150 fee | ADAPTED | Step 1 (cabling named) in section 2; the rest left out. |
| municipalProgram doesNotCover (cabling cost) | USED | Section 3. |
| municipalProgram callout, closing | LEFT OUT | Callout covered by 'does not repair' wording; closing links a different service. |
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
| Service-driven cards 1-3 | USED | `SERVICE_PROBLEMS['svc-hydro-jetting']` |
| Roots that return after clearing (location card) | ADAPTED | municipalProgram P3 (once a year or less vs. more); housingAge table (roots enter at gaps or joints) |
| Inclusions | USED | `SERVICE_INCLUSIONS` |

## Service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta written. |
| hero scope, scopeStatement, cardTitle | LEFT OUT | Hero card of the service template. |
| definition | ADAPTED | Service description; Ballwin, Missouri added. |
| signals, comparison, ask, markets | LEFT OUT | Neutral, no local tie. |
| limits can / cannot / callout | ADAPTED (sections 1 and 3) | No pressure or flow figure used. |
| process steps (Mongoose 184LT inside a step) | USED | Lifted verbatim; confirmed equipment name only. |
| decision note | ADAPTED | Sections 3 and 4. |
| Hydro service FAQ (20 questions) | USED 20 | Includes 'Do you offer same-day hydro jetting?' and 'How much does it cost?' (DEC-088 wording, carried as published). |
| Location FAQ (10 questions) | USED 10 | Nothing skipped. |
| relatedPageIds, cta | ADAPTED | Location id plus three related service ids; new CTA. |

## Facts to double-check

- Section 4: 1976 median is published on the location page but carries a TODO(primary-source) there.
- Section 2: 'the City's application steps name cabling' paraphrases the location page's step 1 and covered-items text; whether jetting counts is unconfirmed, so the copy says to ask Inspections.
- Section 4: the MSD project schedule is 'tentative' on the location page; copy repeats only that word.
