# Source report: Carlsbad, CA + Sewer Cleaning (`sl-carlsbad-cleaning`)

Sources: local = `content/pages/san-diego-carlsbad.tsx` (`carlsbadContent`, `loc-sd-carlsbad`); service = `content/pages/services.tsx`, `svc-sewer-cleaning` `v2`; shared blocks in `service-location-shared.ts`.
Output: `content/pages/sl-sd-carlsbad-cleaning.tsx` (`carlsbadCleaningContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Three agencies word the owner's line three ways | responsibility answer, cards, table; FAQ 1, 2 | definition supporting (private-property lines, not agency mains) |
| 2. The City suggests an annual cleaning and warns about the cleanout cap | systemExplainer P3 (City guidance), P4 (LWD roots and obstructions) | methods; limits (flowing line is not proof); camera-before/after FAQ |
| 3. Leucadia says cleaning does not qualify for its grant | municipalProgram lede, covers, doesNotCover, whoCanApply, callout (no balance); FAQ 3-5 | scope: cleaning clears, does not repair |
| 4. Clearing a clog is not a repair, and permits sit with the agencies | FAQ 7 (permits), company panel (phone, founding year) | decision answer (cracked/offset/separated/collapsed), 'Why do my drains keep clogging' |

Page notes:
- Company phone and founding year: USED via `marketOperatingDetail['san-diego-ca']`, as the Chula Vista cleaning page.
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
| keyTakeaways 3 (City and LWD grants up to $3,000; none found from VWD; no balance) | ADAPTED | Grant terms in body section 3; none-found wording for Vallecitos. |
| responsibility answer, cards, table | ADAPTED | Each agency's wording stated separately; table row 'Where an inspection helps' tied to this service. |
| systemExplainer P1 (288 miles, Encina, LWD independent district, VWD area) | LEFT OUT | Not tied to this service. |
| systemExplainer P2 (combined/separate and age not stated) | LEFT OUT | Not tied to this service. |
| systemExplainer P3 (City guidance: annual cleaning, camera every 3-5 years, cleanout 3-5 ft, cap, spill) | USED | Body section 2 (City guidance for its own service area). |
| systemExplainer P4 (LWD roots/obstructions, storms) | USED | Body section 2. |
| systemExplainer P5, card | LEFT OUT | Camera card is for camera pages; P5 idea carried by section copy. |
| whoToCall (City, LWD, VWD numbers) | LEFT OUT of body | Agency numbers are the agencies', not ours; carried in the FAQ. Card text points to 'the agencies' numbers, not ours' where used. |
| municipalProgram (lede, covers, doesNotCover, whoCanApply, steps, callout) | ADAPTED | Section 3 and 4th-card context; steps (first come first served, LWD licensed plumber) left to the FAQ. |
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
| Three service cards | USED | `SERVICE_PROBLEMS` |
| A backup and a cleanout cap you are tempted to remove (4th, location-driven) | ADAPTED | systemExplainer P3 (City: removing the cap causes a spill), whoToCall (agency numbers are the agencies') |
| Inclusions | USED | `SERVICE_INCLUSIONS` |
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
- USED: What does a sewer camera inspection show?
- USED: Do you repair or replace sewer lines?

Service page questions: all 14 USED (what is sewer cleaning; what happens during a visit; hydro jetting vs snaking; camera before or after; hydro jetting and pipes; camera limits; camera cannot get through; fix cracked/offset/collapsed; clean line vs good pipe; access point; time and cost, DEC-088 wording as published; video and written findings; drains keep clogging; how often).

Skips: None skipped.

relatedPageIds: loc-sd-carlsbad, svc-sewer-cleaning, svc-hydro-jetting, svc-sewer-cleaning-camera-inspection.

## Facts to double-check

- Agency numbers and terms are copied from `carlsbadContent`; reconfirm with each agency before launch. Page copy states no phone number of an agency.
- Grant availability is never stated: neither agency publishes a balance. The $3,000 figures and the 50% rate are agency program terms from the location page.
- The page never says which agency serves an address; the City's sewer district map is the pointer.
