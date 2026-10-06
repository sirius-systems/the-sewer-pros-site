# Source report: City of San Diego, CA + Sewer Line Locating (`sl-sd-city-locating`)

Sources: local = `content/pages/san-diego-city.tsx` (`sanDiegoCityContent`, `loc-sd-san-diego`); service = `content/pages/services.tsx`, `svc-sewer-line-locating` `v2`; blocks in `content/pages/sl-blocks/`.
Output: `content/pages/sl-sd-city-locating.tsx` (`sanDiegoCityLocatingContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. The City has records of the connection, but not of the line on your lot | whoToCall secondaryAgency (619-446-5300; as-builts 619-446-5200), FAQ 'Can the City tell me where my lateral connects', buyingGuide body (no diagrams of private lines) | definition, FAQ 'Can you tell me exactly where my sewer line is?' (estimate, not survey) |
| 2. A lateral can end in the street, an easement or a canyon | responsibility answer P1, systemExplainer P4 (EMRA list incl. easement, angle, trees, driveway) | limits (locate does not find the connection; traces only what the equipment can trace) |
| 3. Before anyone digs: the City's permits and your one-call program | municipalProgram doesNotCover 1, 4, 5 (Right-of-Way Permit; Municipal Code; permit gap; 619-446-5242), FAQ 'Is a permit required' | FAQ 'Is a locate a survey, and does it mean I can dig?', 'Is sewer line locating the same as calling 811?' |
| 4. Buying a San Diego home: the route is not the condition | buyingGuide lede and body (City guidance, plumber report; no point-of-sale rule found), FAQ 'Should I check the sewer lateral before buying' | limits (locate says nothing about pipe condition); FAQ 'Should I have the line located before buying a house?' |

Page notes:
- Company phone: Company phone not used (the LV locating model does not use it either).
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
| The City has no diagrams of private lines on your lot (4th, location-driven) | ADAPTED | whoToCall secondaryAgency, buyingGuide body; service definition (locate estimates the route) |
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

Skips: Four skipped, as on the LV locating page.
- Location page: 'What does a sewer camera inspection show?' (a camera question the locating page does not own).
- Service page: 'Does my city require a sewer inspection for a sale, remodel, or permit?' (the San Diego sale and permit questions answer it for this city).
- Service page: 'Should I use chemical drain cleaner on a sewer line clog?' (off the locating topic).
- Service page: 'If the line drains after cleaning, is the pipe healthy?' (off the locating topic).

relatedPageIds: loc-sd-san-diego, svc-sewer-line-locating, svc-sewer-camera-inspection, svc-pre-purchase-sewer-inspection.

## Facts to double-check

- City phone numbers (619-515-3525, 619-446-5300, 619-446-5200, 619-446-5242) are copied from `sanDiegoCityContent`; reconfirm with the City before launch.
- 'The City says its crew lateral program is suspended' and the 'none found' help-with-costs wording come from the location page's municipalProgram, which reads as of 2026-10-03 (sources mostly undated).
