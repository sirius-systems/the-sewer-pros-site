# Source report: Chula Vista, CA + Sewer Cleaning & Camera Inspection (`sl-chula-vista-cleaning-camera`)

Sources: local = `content/pages/san-diego-chula-vista.tsx` (`chulaVistaContent`, `loc-sd-chula-vista`); service = `content/pages/services.tsx`, `svc-sewer-cleaning-camera-inspection` `v2`; blocks in `content/pages/sl-blocks/`.
Output: `content/pages/sl-sd-chula-vista-cleaning-camera.tsx` (`chulaVistaCleaningCameraContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Footage shows where along the line, not where the first foot is | responsibility (Policy 570-01, first foot), responsibility card (lateral vs building sewer for permits), systemExplainer card closing (distance count, not property line) | footage records distance from the entry point |
| 2. A line that flows again is not proof, and the City's camera goal is for its own pipe | systemExplainer P2 (cleaning goal, 47 miles/year camera goal, public sewer), P3 (grease, roots, annual rule of thumb) | camera before, after or both; camera cannot see under water; flowing line is not proof |
| 3. If a stoppage is in the public sewer, the footage is your own record | municipalProgram steps (licensed plumber camera finding, 48 hours, reimbursement if staff agree), FAQ 6, callout (Public Works, City's number) | what you receive: video and written findings noting what the camera could not view; limits (roots visible inside, not outside) |
| 4. No lateral grant found, and a permit before any repair | municipalProgram lede, covers (locating and clearing only), steps (permit before repair), FAQ 3 and 7 | independent role: findings to compare against an estimate; we do not repair; company phone (marketOperatingDetail) |

Page notes:
- Company phone: USED via `marketOperatingDetail['san-diego-ca']` (as the San Diego city page).
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
| systemExplainer P2 (511 miles, 12 lift stations, treatment by City of San Diego) | LEFT OUT | Not tied to this service. The cleaning and 47-mile camera goals are USED in section 2. |
| systemExplainer P3 (City guidance: grease, roots, annual, debris pushed downstream) | ADAPTED | See sections. |
| systemExplainer P4, P5 (system age not stated; a rule does not tell a lateral's condition) | LEFT OUT | Idea carried by section copy. |
| systemExplainer card (what a camera shows; distance count) | SEE SECTIONS | Camera pages only. |
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
| Three service cards | USED | `sl-blocks` |
| A clog that may sit in the first foot of the lateral (4th, location-driven) | ADAPTED | responsibility (first foot); footage records distance only |
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

- USED: What are sewer cleaning and camera inspection?
- USED: What does a sewer camera inspection show? (service answer kept; shorter location copy filtered out)
- USED: Does the camera or the cleaning come first?
- USED: What is the difference between hydro jetting and cable cleaning?
- USED: Does a clear video mean my line is healthy?
- USED: Can a camera find a leak?
- USED: Can a camera tell whether my pipe is structurally sound?
- USED: Can a camera find roots, cracks, or a collapsed pipe?
- USED: What if the camera cannot get past a blockage?
- USED: Does hydro jetting damage pipes?
- USED: What access point do you use, and can you inspect without an outside cleanout?
- USED: Do I get a copy of the video?
- USED: Will I get written findings?
- USED: Can you locate my sewer line, and how deep is it?
- USED: How long does it take, and how much does it cost? (DEC-088 wording, carried as published)
- USED: What are signs I may need cleaning or a camera inspection?
- USED: Should I have the sewer line looked at before buying a house?
- USED: Is a sewer scope part of a standard home inspection?
- USED: How often should a line be cleaned or inspected?
- USED: Can I flush "flushable" wipes?
- USED: Will a chemical drain cleaner solve a sewer backup?

Skips: One location question filtered, none skipped through the skip list.
- Location page: 'What does a sewer camera inspection show?' (filtered before the merge; the service page asks the same question with the fuller answer).

relatedPageIds: loc-sd-chula-vista, svc-sewer-cleaning-camera-inspection, svc-sewer-camera-inspection, svc-sewer-cleaning.

## Facts to double-check

- City numbers ((619) 397-6000, (619) 691-5151, (619) 691-5272) are copied from `chulaVistaContent`; reconfirm with the City before launch.
- The posted copy of Council Policy 570-01 shows a 2014 revision with a blank resolution number (per the location page); the page says to confirm the current text with Public Works.
- The City's cleaning and 47-miles-per-year camera goals (used on the cleaning-camera page only) are the City's stated goals, not service-level facts.
