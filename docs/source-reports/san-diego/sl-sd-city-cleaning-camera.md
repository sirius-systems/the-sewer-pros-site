# Source report: City of San Diego, CA + Sewer Cleaning & Camera Inspection (`sl-sd-city-cleaning-camera`)

Sources: local = `content/pages/san-diego-city.tsx` (`sanDiegoCityContent`, `loc-sd-san-diego`); service = `content/pages/services.tsx`, `svc-sewer-cleaning-camera-inspection` `v2`; blocks in `content/pages/sl-blocks/`.
Output: `content/pages/sl-sd-city-cleaning-camera.tsx` (`sanDiegoCityCleaningCameraContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Your lateral can end in a canyon, and footage does not show where | responsibility answer P1, whoToCall secondaryAgency (619-446-5300), systemExplainer card closing (distance count, does not establish a property line) | definition (cleaning clears a restriction), signals |
| 2. A cleanout flush is not an inspection, and neither is a line that drains | systemExplainer P3 (roots/grease; annual cleanout flush; not an inspection) | FAQ 'Does the camera or the cleaning come first?', 'Does a clear video mean my line is healthy?' (cannot see under water; cleaning may come first) |
| 3. If a plumber finds a break past the property line, the footage is your record | responsibility answer P2 (Plumber's Report, 619-515-3525), municipalProgram callout (no claim the City accepts an outside report) | FAQ 'Do I get a copy of the video?', 'Will I get written findings?' (note unviewed parts); decision (compare a repair estimate) |
| 4. No City help with lateral costs found, and what a camera does not measure | municipalProgram lede (none found), systemExplainer P4 (EMRA: slope, depth), doesNotCover 5 (permit gap; 619-446-5242), company panel (phone) | FAQ 'Can a camera tell whether my pipe is structurally sound?' (does not measure structural capacity) |

Page notes:
- Company phone: USED in section 4 via `marketOperatingDetail['san-diego-ca']`, as the LV cleaning and camera page. Founding year not used here.
- Agency: only the City of San Diego (Public Utilities, Development Services) is named; no other County city or district rule is used. The location page lists one agency, so no per-agency wording is needed.
- All City numbers are labelled as the City's. No dollar figure, date or program term beyond what the location page states.

## City of San Diego location page, element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | ADAPTED | Page-specific for this service. |
| hero title/intro | ADAPTED | City responsibility rule tied to this service. |
| heroForm (bullets, card, note) | LEFT OUT | Shell supplies the request form. Founding-year bullet: see page notes. |
| keyTakeaways 1 (City runs its own system; other County cities differ) | ADAPTED | Carried into the coverage intro. |
| keyTakeaways 2 (owner maintains to the City main) | USED | Hero and body. |
| keyTakeaways 3 (no City help found; crew program suspended) | ADAPTED | "None found" wording where relevant. |
| jumpNav, serviceCards (9) | LEFT OUT | Location page navigation and cards, not this content shape. |
| responsibility answer P1 (owner to the City main; street, easement, canyon) | USED | Hero and body. |
| responsibility answer P2 (Plumber's Report, 619-515-3525, 24 hours) | ADAPTED | The City's number and process only; the City's 24-hour statement is not repeated as ours. |
| responsibility cards, table | ADAPTED | Owner/City split; table row "Where an inspection helps" tied to this service. |
| responsibility note (no statement on who pays beyond the line) | LEFT OUT | Not asserted on this page. |
| systemExplainer P1, P2 (two systems; other County cities differ) | ADAPTED | Coverage intro only. |
| systemExplainer P3 (roots/grease; annual cleanout flush is not an inspection) | SEE SECTIONS | Used where noted below. |
| systemExplainer P4 (EMRA list) | SEE SECTIONS | Used where noted below. |
| systemExplainer P5 (a rule does not tell a lateral's condition) | LEFT OUT | Idea carried by section copy. |
| systemExplainer card (what a camera shows; distance count) | SEE SECTIONS | Camera pages only. |
| whoToCall agency (619-515-3525, 619-515-3500 hours) | ADAPTED | City numbers labelled the City's; customer-service hours left out. |
| whoToCall secondaryAgency (619-446-5300, 619-446-5200) | SEE SECTIONS | Used where noted below. |
| whoToCall company | SEE NOTES | Company phone only where noted. |
| municipalProgram lede (none found) | SEE SECTIONS | Used where noted below. |
| municipalProgram covers 1-3 (crew program suspended; permit and contractor instruction; no published fund) | SEE SECTIONS | Used where noted below; no dollar figure appears. |
| municipalProgram doesNotCover 1-5 (Right-of-Way Permit; inspections; licensed contractor; Municipal Code; no private-property permit page) | SEE SECTIONS | Used where noted below; Development Services 619-446-5242 labelled the City's. |
| municipalProgram callout, closing | ADAPTED | "Where an independent inspection fits" folded into section copy; no claim the City accepts an outside report. |
| secondOpinion | LEFT OUT | Repair-recommendation material. |
| buyingGuide | SEE SECTIONS | Locating page only; elsewhere left out (sale material). |
| nearbyAreas | ADAPTED | Coverage block: the six other San Diego locations (market link left out). |
| finalCta | ADAPTED | New CTA for this page. |
| faq (10 questions) | USED | See FAQ table. |
| sources | LEFT OUT | Page carries `sanDiegoCityContent.sources` (undated; Bulletin 166 March 2026; the copy says to confirm with the City). |
| housingAge | N/A | The San Diego location page has no housing-age section, so the LV "housing age" section is replaced by a San Diego-specific one. |
| Image slots | ADAPTED | New per-page slots, neutral alt text, no place-specific photo claim. |

Fixed by the owner brief, not stated on the City page: "San Diego is a service area, not an office location." (consistent with the location page, which states no office, address or map pin).

## Cards

| Card | Status | Source |
|---|---|---|
| Three service cards | USED | `sl-blocks problems` |
| A break beyond the property line (4th, location-driven) | ADAPTED | responsibility answer P2 (Plumber's Report), systemExplainer card closing (distance count, not a property line) |
| Six inclusions | USED | `sl-blocks inclusions` |
| Process steps | USED | `v2.process.steps` (confirmed equipment names appear only inside the steps) |
| Coverage (six other San Diego locations) | ADAPTED | nearbyAreas; title 'Other San Diego area locations' |

## Service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral; new local meta written (<= 160 characters). |
| serviceDescription | ADAPTED | City of San Diego added. |
| definition, signals, limits, decision | ADAPTED / USED | See body sections and cards. |
| process | USED | Steps verbatim. |
| methods table, independent, ask, audiences, markets | LEFT OUT | Neutral material with no local tie. |
| related, cta | ADAPTED | New for this page. |

## FAQ

Location page questions (shown first, group 'In San Diego'):

- USED: Who is responsible for a sewer lateral in the City of San Diego?
- USED: What number do I call for a sewer spill or sewer odor in San Diego?
- USED: What happens if a plumber finds a break or collapse beyond the property line?
- USED: Does the City of San Diego offer help with homeowner lateral costs?
- USED: Is a permit required for sewer lateral work, and who can do the work?
- USED: Should I check the sewer lateral before buying a San Diego home?
- USED: Can the City tell me where my lateral connects to the main?
- USED: What is an EMRA for a San Diego sewer lateral?
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
- Location page: 'What does a sewer camera inspection show?' (filtered before the merge; the service page asks the same question with the fuller answer, including what a camera does not show).

relatedPageIds: loc-sd-san-diego, svc-sewer-cleaning-camera-inspection, svc-sewer-camera-inspection, svc-sewer-cleaning.

## Facts to double-check

- City phone numbers (619-515-3525, 619-446-5300, 619-446-5200, 619-446-5242) are copied from `sanDiegoCityContent`; reconfirm with the City before launch.
- 'The City says its crew lateral program is suspended' and the 'none found' help-with-costs wording come from the location page's municipalProgram, which reads as of 2026-10-03 (sources mostly undated).
