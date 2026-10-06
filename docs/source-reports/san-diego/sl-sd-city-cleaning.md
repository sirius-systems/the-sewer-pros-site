# Source report: City of San Diego, CA + Sewer Cleaning (`sl-sd-city-cleaning`)

Sources: local = `content/pages/san-diego-city.tsx` (`sanDiegoCityContent`, `loc-sd-san-diego`); service = `content/pages/services.tsx`, `svc-sewer-cleaning` `v2`; shared blocks in `service-location-shared.ts`.
Output: `content/pages/sl-sd-city-cleaning.tsx` (`sanDiegoCityCleaningContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. The City names roots and grease, and puts the clearing on you | responsibility, Council Policy 400-10 (FAQ 1), systemExplainer P3 (roots/grease, annual cleanout flush, not an inspection) | definition, methods (hydraulic or mechanical, chosen for the line), limits (a flowing line is not proof) |
| 2. The City says your lateral runs to its main, even in a canyon | responsibility answer P1, whoToCall secondaryAgency (619-446-5300), whoToCall agency (619-515-3525 spill line) | definition supporting (private-property lines, not public mains) |
| 3. When a break is past the property line, cleaning does not fix it | responsibility answer P2 (Plumber's Report), municipalProgram lede (none found), callout (no repairs by us) | decision answer (does not repair cracked/offset/separated/collapsed), FAQ 'Why do my drains keep clogging' |
| 4. Nonstandard laterals and the permit question | systemExplainer P4 (EMRA list), municipalProgram doesNotCover 5 (no private-property permit page; 619-446-5242), company panel (phone, since founding year) | scope: active backup wording from the LV model |

Page notes:
- Company phone: USED in section 4 via `marketOperatingDetail['san-diego-ca']` (as the LV cleaning page). 'We have served San Diego since 2015' uses `sd.foundingYear`, the same figure the location page publishes in its hero bullets (DEC-071).
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
| Three service cards | USED | `SERVICE_PROBLEMS` |
| A lateral that runs to the City main (4th, location-driven) | ADAPTED | responsibility P1, whoToCall agency (619-515-3525, the City's number), service definition (private lines, not public mains) |
| Six inclusions | USED | `SERVICE_INCLUSIONS` |
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

Skips: None skipped. The location camera question is kept because the service page also covers camera use before and after cleaning.

relatedPageIds: loc-sd-san-diego, svc-sewer-cleaning, svc-hydro-jetting, svc-sewer-cleaning-camera-inspection.

## Facts to double-check

- City phone numbers (619-515-3525, 619-446-5300, 619-446-5200, 619-446-5242) are copied from `sanDiegoCityContent`; reconfirm with the City before launch.
- 'The City says its crew lateral program is suspended' and the 'none found' help-with-costs wording come from the location page's municipalProgram, which reads as of 2026-10-03 (sources mostly undated).
