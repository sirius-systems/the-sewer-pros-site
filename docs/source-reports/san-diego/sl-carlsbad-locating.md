# Source report: Carlsbad, CA + Sewer Line Locating (`sl-carlsbad-locating`)

Sources: local = `content/pages/san-diego-carlsbad.tsx` (`carlsbadContent`, `loc-sd-carlsbad`); service = `content/pages/services.tsx`, `svc-sewer-line-locating` `v2`; blocks in `content/pages/sl-blocks/sewer-line-locating.ts`.
Output: `content/pages/sl-sd-carlsbad-locating.tsx` (`carlsbadLocatingContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Three agencies end the owner's line in three places, and a locate marks none of them | responsibility answer, cards, table; FAQ 1, 2 | definition, estimate not survey |
| 2. The cleanout is the usual starting point, not the main | systemExplainer P3 (cleanout 3-5 ft from building, cap) | locate from an access point; does not show pipe condition |
| 3. Before anyone digs, the agencies and the City have their own steps | FAQ 7 (City permits and exemptions, LWD permits incl. building and right-of-way, VWD no private connections) | not clearance or permission to dig; one-call wording |
| 4. A route is for planning, and it is not a grant document | municipalProgram lede, whoCanApply, steps (LWD staff see work in progress), doesNotCover, callout | scope: locating does not repair |

Page notes:
- No company phone (as the Chula Vista locating page). A locate is an ESTIMATE, not a survey, utility clearance or permission to dig.
- Agencies: three (City of Carlsbad, Leucadia Wastewater District, Vallecitos Water District). Each agency's wording is stated separately and never carried to another. The page never says which agency serves an address.
- Grants: stated as each agency's published program; availability never stated.

## Carlsbad location page, element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | ADAPTED | Page-specific for this service. |
| hero title/intro | ADAPTED | Three-agency wording tied to this service. |
| heroForm, serviceCards, helpBar, jumpNav | LEFT OUT | Shell supplies the form; location page navigation. |
| keyTakeaways 1 (three agencies; confirm with the City's sewer district map) | USED | Hero and body; no agency is named as serving an address. |
| keyTakeaways 2 (owner carries lateral in every area; each agency words it differently) | USED | Body section 1. |
| keyTakeaways 3 (City and LWD grants up to $3,000; none found from VWD; no balance) | ADAPTED | Grant terms in body section 4. |
| responsibility answer, cards, table | ADAPTED | Each agency's wording stated separately; table row 'Where an inspection helps' tied to this service. |
| systemExplainer P1 (288 miles, Encina, LWD independent district, VWD area) | LEFT OUT | Not tied to this service. |
| systemExplainer P2 (combined/separate and age not stated) | LEFT OUT | Not tied to this service. |
| systemExplainer P3 (City guidance: annual cleaning, camera every 3-5 years, cleanout 3-5 ft, cap, spill) | ADAPTED | Cleanout location and cap (section 2); cleaning and camera guidance left out. |
| systemExplainer P4 (LWD roots/obstructions, storms) | LEFT OUT | Not tied to locating. |
| systemExplainer P5, card | ADAPTED | Idea that an agency rule does not give a line condition carried in section 2. |
| whoToCall (City, LWD, VWD numbers) | LEFT OUT of body | Agency numbers are the agencies', not ours; carried in the FAQ. Card text points to 'the agencies' numbers, not ours' where used. |
| municipalProgram (lede, covers, doesNotCover, whoCanApply, steps, callout) | ADAPTED | Section 4; steps left to the FAQ. |
| secondOpinion | LEFT OUT | Repair-recommendation material. |
| buyingGuide | LEFT OUT | Sale material; carried in the FAQ where the question exists. |
| nearbyAreas | ADAPTED | Coverage block: the six other San Diego locations (market link left out). |
| finalCta | ADAPTED | New CTA for this page. |
| faq (10 questions) | USED | See FAQ. |
| sources | USED | Page carries `carlsbadContent.sources` (mostly undated; reviewed 2026-10-04). Body copy states no dates; the LWD September 25, 2026 notice date is not repeated, and the page says to confirm with the agency. |
| housingAge | N/A | The Carlsbad location page has no housing-age section. |
| Image slots | ADAPTED | New per-page slots, neutral alt text, no place-specific photo claim. |

Fixed by the owner brief: 'Carlsbad is a service area, not an office location.'
## Cards

| Card | Status | Source |
|---|---|---|
| Three service cards | USED | `sl-blocks/sewer-line-locating` |
| Not sure where your line meets the main (4th, location-driven) | ADAPTED | responsibility answer (City: to the main, typically in the street); nearby FAQ 2 (which agency) |
| Inclusions | USED | `sl-blocks` inclusions (six items) |
| Process steps | USED | `v2.process.steps` (confirmed equipment names appear only inside the steps) |
| Coverage (six other San Diego locations) | ADAPTED | nearbyAreas; title 'Other San Diego area locations' |

## Service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral; new local meta written (<= 160 characters). |
| serviceDescription | ADAPTED | Carlsbad added. |
| definition, signals, limits, decision | ADAPTED / USED | See body sections and cards. |
| process | USED | Steps verbatim. |
| methods, independent, ask, audiences, markets | LEFT OUT | Neutral material with no local tie. |
| related, cta | ADAPTED | New for this page. |

## FAQ

Location page questions (shown first, group 'In Carlsbad'):

- USED: Who is responsible for the sewer lateral in Carlsbad?
- USED: Which agency serves my Carlsbad address?
- USED: How much is the City of Carlsbad sewer lateral grant?
- USED: Does the City of Carlsbad grant cover the southern part of the city?
- USED: What does the Leucadia Wastewater District lateral grant cover?
- USED: What number do I call for a sewer spill in Carlsbad?
- USED: Is a permit required for sewer lateral work in Carlsbad?
- USED: Is a sewer inspection required when buying a Carlsbad home?
- LEFT OUT (skipped): What does a sewer camera inspection show?
- USED: Do you repair or replace sewer lines?

Service page questions: USED except the three skipped below.

Skips: Location: 'What does a sewer camera inspection show?' (camera question the locating page does not own). Service: 'Does my city require a sewer inspection for a sale, remodel, or permit?' (the Carlsbad sale question answers it for this city); 'Should I use chemical drain cleaner on a sewer line clog?' (drain cleaning products, off topic); 'If the line drains after cleaning, is the pipe healthy?' (cleaning topic, off topic).

relatedPageIds: loc-sd-carlsbad, svc-sewer-line-locating, svc-sewer-camera-inspection, svc-pre-purchase-sewer-inspection.

## Facts to double-check

- Agency numbers and terms are copied from `carlsbadContent`; reconfirm with each agency before launch. Page copy states no phone number of an agency.
- Grant availability is never stated: neither agency publishes a balance. The $3,000 figures and the 50% rate are agency program terms from the location page.
- The page never says which agency serves an address; the City's sewer district map is the pointer.
