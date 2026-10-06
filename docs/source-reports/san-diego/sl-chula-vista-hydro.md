# Source report: Chula Vista, CA + Hydro Jetting (`sl-chula-vista-hydro`)

Sources: local = `content/pages/san-diego-chula-vista.tsx` (`chulaVistaContent`, `loc-sd-chula-vista`); service = `content/pages/services.tsx`, `svc-hydro-jetting` `v2`; shared blocks in `service-location-shared.ts`.
Output: `content/pages/sl-sd-chula-vista-hydro.tsx` (`chulaVistaHydroContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. The City warns that cleaning can push debris downstream, so the method matters | systemExplainer P3 (cleaning can push cut root balls and grease into the public sewer) | methods (pressurized water, hose and nozzle, scours, moves debris), process step on paced water ('more water is not automatically better') |
| 2. Roots come in through cracks, and jetting does not close them | systemExplainer P3 (roots enter through cracked or broken pipe), responsibility (owner's sole expense), municipalProgram lede (no grant found) | what jetting clears (grease, debris, loose roots), limits (does not fix cracked, offset, collapsed, low spot) |
| 3. Jetting clears a stoppage, but the policy asks where it was | municipalProgram steps and FAQ 6 (48 hours, street-tree burden of proof, certified arborist), callout (Public Works (619) 397-6000, City's number) | scope: jetting does not locate or identify a tree |
| 4. Access at the cleanout, and a permit before any repair | municipalProgram afterSteps (property line cleanout), steps (permit before repair), FAQ 7 | decision answer (visible structural defects call for closer evaluation before cleaning; camera first helps when included) |

Page notes:
- No company phone on this page (as the San Diego city page for this service).
- Agency: only the City of Chula Vista (Public Works, Development Services) is named. The location page lists one agency, so no per-agency wording is needed. The old 'CVSan' claim is not repeated; FAQ 2 on the location page is carried only because it corrects it.
- Policy, not a grant: the page never says a grant exists or that the City will pay for a stoppage. 'Licensed plumber' and 'certified arborist' appear only as the City's own conditions; no claim that our work satisfies them.
- All City numbers are labelled as the City's. No dollar figure, date or program term beyond what the location page states.

## Chula Vista location page, element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | ADAPTED | Page-specific for this service. |
| hero title/intro | ADAPTED | Policy 570-01 first-foot rule tied to this service. |
| heroForm, serviceCards, helpBar, jumpNav | LEFT OUT | Shell supplies the form; location page navigation, not this content shape. |
| keyTakeaways 1 (City runs the sewer; about 50,000 customers) | LEFT OUT | Not tied to this service; the customer count is not used on this page. |
| keyTakeaways 2 (owner from the first foot; 48-hour exception) | USED | Hero and body. |
| keyTakeaways 3 (no grant found) | ADAPTED | 'None found' wording where relevant. |
| responsibility answer, cards, table | ADAPTED | Owner/City split and lateral vs building sewer; table row 'Where an inspection helps' tied to this service. |
| systemExplainer P2 (511 miles, 12 lift stations, treatment by City of San Diego) | LEFT OUT | Not tied to this service. |
| systemExplainer P3 (City guidance: grease, roots, annual, debris pushed downstream) | USED | See sections. |
| systemExplainer P4, P5 (system age not stated; a rule does not tell a lateral's condition) | LEFT OUT | Idea carried by section copy. |
| systemExplainer card (what a camera shows; distance count) | LEFT OUT | Camera pages only. |
| whoToCall agency (619) 397-6000 and hours | ADAPTED | City number labelled the City's; hours left out. |
| whoToCall secondaryAgency (Police (619) 691-5151) | LEFT OUT | Not tied to this service's body copy; carried in the FAQ. |
| municipalProgram lede, covers, doesNotCover, steps, afterSteps, callout | SEE SECTIONS | Used where noted above; the 2014-revision/blank-resolution caveat and 'confirm with Public Works' stay in the FAQ and callout wording. |
| secondOpinion | LEFT OUT | Repair-recommendation material. |
| buyingGuide (CVMC 13.08.100/110; no sale rule found) | LEFT OUT | Sale material; carried in the FAQ. |
| nearbyAreas | ADAPTED | Coverage block: the six other San Diego locations (market link left out). |
| finalCta | ADAPTED | New CTA for this page. |
| faq (10 questions) | USED | See FAQ. |
| sources | USED | Page carries `chulaVistaContent.sources` (mostly undated; reviewed 2026-10-04; says to confirm with the City). Body copy states no dates. |
| housingAge | N/A | The Chula Vista location page has no housing-age section. |
| Image slots | ADAPTED | New per-page slots, neutral alt text, no place-specific photo claim. |

Fixed by the owner brief, not stated on the City page: 'Chula Vista is a service area, not an office location.' (consistent with the location page, which states no office, address or map pin).

## Cards

| Card | Status | Source |
|---|---|---|
| Three service cards | USED | `SERVICE_PROBLEMS` |
| Roots entering through cracked pipe (4th, location-driven) | ADAPTED | systemExplainer P3 (roots enter through cracks); limits |
| Six inclusions | USED | `SERVICE_INCLUSIONS` |
| Process steps | USED | `v2.process.steps` (confirmed equipment names appear only inside the steps) |
| Coverage (six other San Diego locations) | ADAPTED | nearbyAreas; title 'Other San Diego area locations' |

## Service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral; new local meta written (<= 160 characters). |
| serviceDescription | ADAPTED | City of Chula Vista added. |
| definition, signals, limits, decision | ADAPTED / USED | See body sections and cards. |
| process | USED | Steps verbatim. |
| methods, independent, ask, audiences, markets | LEFT OUT | Neutral material with no local tie. |
| related, cta | ADAPTED | New for this page. |

## FAQ

Location page questions (shown first, group 'In Chula Vista'):

- USED: Who is responsible for the sewer lateral in Chula Vista?
- USED: Is Chula Vista served by CVSan or a separate sanitation district?
- USED: Does the City reimburse owners for sewer lateral problems?
- USED: What should I do if sewage backs up inside my Chula Vista home?
- USED: Who do I call if sewage reaches a Chula Vista street or storm drain, and what are the hours?
- USED: What does the City’s policy say about street-tree roots and the 48-hour notice?
- USED: Is a permit required for sewer lateral work in Chula Vista?
- USED: Is a sewer inspection required when buying a Chula Vista home?
- USED: What does a sewer camera inspection show?
- USED: Do you repair or replace sewer lines?

Service page questions:

- USED: What is hydro jetting?
- USED: How does hydro jetting work?
- USED: Can hydro jetting clear roots, grease, and debris?
- USED: Does it fix a cracked, offset, or collapsed pipe?
- USED: Is hydro jetting safe for old pipes?
- USED: Can hydro jetting cause a backup?
- USED: What can a camera not show?
- USED: Why are several drains slow at once?
- USED: Does a smell or gurgling mean the main line is clogged?
- USED: Are flushable wipes safe, and can hot water or additives dissolve grease?
- USED: What should I ask for and keep?
- USED: Do you offer same-day hydro jetting? (DEC-088/DEC-139 wording, carried as published)
- USED: How long does hydro jetting take?
- USED: How much does it cost? (DEC-088 wording, carried as published)
- USED: How often should a line be jetted?
- USED: Do I need to prepare anything?
- USED: Will I get video or written findings?
- USED: Is hydro jetting better than snaking?
- USED: Should I get my line cleaned before buying or selling a home?
- USED: Can the line be located?
- USED: Can I jet my line myself?

Skips: None skipped.

relatedPageIds: loc-sd-chula-vista, svc-hydro-jetting, svc-sewer-cleaning, svc-sewer-camera-inspection.

## Facts to double-check

- City numbers ((619) 397-6000, (619) 691-5151, (619) 691-5272) are copied from `chulaVistaContent`; reconfirm with the City before launch.
- The posted copy of Council Policy 570-01 shows a 2014 revision with a blank resolution number (per the location page); the page says to confirm the current text with Public Works.
- The City's cleaning and 47-miles-per-year camera goals (used on the cleaning-camera page only) are the City's stated goals, not service-level facts.
