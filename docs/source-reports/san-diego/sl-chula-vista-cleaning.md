# Source report: Chula Vista, CA + Sewer Cleaning (`sl-chula-vista-cleaning`)

Sources: local = `content/pages/san-diego-chula-vista.tsx` (`chulaVistaContent`, `loc-sd-chula-vista`); service = `content/pages/services.tsx`, `svc-sewer-cleaning` `v2`; shared blocks in `service-location-shared.ts`.
Output: `content/pages/sl-sd-chula-vista-cleaning.tsx` (`chulaVistaCleaningContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. The City names grease and roots, and warns where cleaned-out debris can go | systemExplainer P3 (grease most common, roots through cracked pipe, annual rule of thumb, cleaning can push cut root balls and grease into the public sewer) | definition, methods (hydraulic or mechanical, chosen for the line), limits (a flowing line is not proof), camera-before/after FAQ |
| 2. The City's policy starts your lateral at the first foot | responsibility answer, FAQ 1 (Policy 570-01, first foot = connection point, City keeps mains and manholes), municipalProgram afterSteps (property line cleanout, 2-3 ft, City crews stop there) | definition supporting (private-property lines, not public mains) |
| 3. A stoppage in the first foot or the public sewer follows a 48-hour rule | municipalProgram steps and FAQ 6 (licensed plumber camera finding, 48 hours, reimbursement if staff agree), lede and FAQ 3 (no grant found), callout (ask Public Works, (619) 397-6000, City's number) | scope: cleaning clears, does not locate |
| 4. Clearing a clog is not a repair, and repair needs a City permit | municipalProgram steps (permit before repair), doesNotCover (inadequate lateral is owner's cost), FAQ 7, company panel (phone, founding year) | decision answer (does not repair cracked/offset/separated/collapsed), 'Why do my drains keep clogging' |

Page notes:
- Company phone: USED via `marketOperatingDetail['san-diego-ca']` (as the San Diego city page). Founding year ('served the San Diego area since') uses `sd.foundingYear`, the figure the location page publishes (DEC-071).
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
| A clog that may sit in the first foot or the public sewer (4th, location-driven) | ADAPTED | municipalProgram steps (48-hour notice), FAQ 6; scope |
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

- USED: What is sewer cleaning?
- USED: What happens during a sewer cleaning visit?
- USED: What is the difference between hydro jetting and snaking?
- USED: Do you use a camera before or after cleaning?
- USED: Will hydro jetting damage my pipes?
- USED: Can a sewer camera always find the problem?
- USED: What happens if the camera cannot get through the line?
- USED: Can sewer cleaning fix a cracked, offset, or collapsed pipe?
- USED: Does a clean line mean the pipe is in good condition?
- USED: What access point do you use? Do you have to pull a toilet?
- USED: How long does sewer cleaning take, and how much does it cost? (DEC-088 wording, carried as published)
- USED: Will I get a video and written findings?
- USED: Why do my drains keep clogging after they were snaked?
- USED: How often should I have my sewer line cleaned?

Skips: None skipped.

relatedPageIds: loc-sd-chula-vista, svc-sewer-cleaning, svc-hydro-jetting, svc-sewer-cleaning-camera-inspection.

## Facts to double-check

- City numbers ((619) 397-6000, (619) 691-5151, (619) 691-5272) are copied from `chulaVistaContent`; reconfirm with the City before launch.
- The posted copy of Council Policy 570-01 shows a 2014 revision with a blank resolution number (per the location page); the page says to confirm the current text with Public Works.
- The City's cleaning and 47-miles-per-year camera goals (used on the cleaning-camera page only) are the City's stated goals, not service-level facts.
