# Source report: Chula Vista, CA + Sewer Line Locating (`sl-chula-vista-locating`)

Sources: local = `content/pages/san-diego-chula-vista.tsx` (`chulaVistaContent`, `loc-sd-chula-vista`); service = `content/pages/services.tsx`, `svc-sewer-line-locating` `v2`; blocks in `content/pages/sl-blocks/`.
Output: `content/pages/sl-sd-chula-vista-locating.tsx` (`chulaVistaLocatingContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. One line, two permit names, and a locate that is neither boundary | responsibility card (lateral main-to-property-line vs building sewer, from the permit page), Policy 570-01 first foot | definition (estimate of the path of the accessible line, not a survey) |
| 2. The property line cleanout is where the City's crews stop | municipalProgram afterSteps (expose cleanout, 2-3 ft, City crews may not reach further) | definition (access point), 'does not tell condition; a camera does' |
| 3. Street trees and planting: a route helps, but it does not name a cause | systemExplainer P4 (advice against deep-rooted vegetation near a lateral), municipalProgram steps (street-tree burden of proof), callout (Public Works) | landscaping/fence use case; locate does not identify roots or cause |
| 4. Before anyone digs: the City's permits and your one-call program | FAQ 7 (utility permit, Form 4569, Construction Permit (619) 691-5272), municipalProgram steps (permit before repair) | one-call wording (verbatim from the service page); not utility clearance or permission to dig |

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
| systemExplainer P3 (City guidance: grease, roots, annual, debris pushed downstream) | ADAPTED | See sections. |
| systemExplainer P4, P5 (system age not stated; a rule does not tell a lateral's condition) | LEFT OUT | Idea carried by section copy. |
| systemExplainer card (what a camera shows; distance count) | LEFT OUT | Camera pages only. |
| whoToCall agency (619) 397-6000 and hours | ADAPTED | City number labelled the City's; hours left out. |
| whoToCall secondaryAgency (Police (619) 691-5151) | LEFT OUT | Not tied to this service's body copy; carried in the FAQ. |
| municipalProgram lede, covers, doesNotCover, steps, afterSteps, callout | SEE SECTIONS | Used where noted above; the 2014-revision/blank-resolution caveat and 'confirm with Public Works' stay in the FAQ and callout wording. |
| secondOpinion | LEFT OUT | Repair-recommendation material. |
| buyingGuide (CVMC 13.08.100/110; no sale rule found) | LEFT OUT | Sale material; carried in the FAQ. The service page's own sale-and-permit question is skipped for it. |
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
| Three service cards | USED | `sl-blocks` |
| Planting or digging near the lateral (4th, location-driven) | ADAPTED | systemExplainer P3 (City advises against deep-rooted vegetation); landscaping use |
| Six inclusions | USED | `sl-blocks` |
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
- LEFT OUT: What does a sewer camera inspection show?
- USED: Do you repair or replace sewer lines?

Service page questions:

- USED: What is sewer line locating?
- USED: How does sewer line locating work?
- USED: What are a sonde, a receiver, and a cleanout?
- USED: Is sewer line locating the same as calling 811?
- USED: Do I need a camera inspection before locating?
- USED: Can you tell me exactly where my sewer line is?
- USED: Can sewer line locating determine the pipe's depth?
- USED: Can you locate every utility on my property?
- USED: Is a locate a survey, and does it mean I can dig?
- USED: Can a sewer camera see through water?
- USED: Can a sewer line be located under concrete or a driveway?
- USED: What if the camera cannot get through the line?
- USED: What access point do you use? Do you have to pull a toilet?
- USED: Will I get surface marks?
- USED: Will I get video and written findings?
- USED: How long does locating take, and how much does it cost? (DEC-088 wording, carried as published)
- USED: Can line locating help before landscaping or fence installation?
- USED: Can line locating help with sewer repair work?
- USED: How often should a sewer line be located or inspected?
- USED: Should I have the line located before buying a house?

Skips: Four skipped, as on the San Diego locating page.
- Location page: 'What does a sewer camera inspection show?' (a camera question the locating page does not own).
- Service page: 'Does my city require a sewer inspection for a sale, remodel, or permit?' (the Chula Vista sale question answers it for this city).
- Service page: 'Should I use chemical drain cleaner on a sewer line clog?' (off the locating topic).
- Service page: 'If the line drains after cleaning, is the pipe healthy?' (off the locating topic).

relatedPageIds: loc-sd-chula-vista, svc-sewer-line-locating, svc-sewer-camera-inspection, svc-pre-purchase-sewer-inspection.

## Facts to double-check

- City numbers ((619) 397-6000, (619) 691-5151, (619) 691-5272) are copied from `chulaVistaContent`; reconfirm with the City before launch.
- The posted copy of Council Policy 570-01 shows a 2014 revision with a blank resolution number (per the location page); the page says to confirm the current text with Public Works.
- The City's cleaning and 47-miles-per-year camera goals (used on the cleaning-camera page only) are the City's stated goals, not service-level facts.
