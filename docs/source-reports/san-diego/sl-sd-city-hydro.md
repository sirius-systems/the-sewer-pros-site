# Source report: City of San Diego, CA + Hydro Jetting (`sl-sd-city-hydro`)

Sources: local = `content/pages/san-diego-city.tsx` (`sanDiegoCityContent`, `loc-sd-san-diego`); service = `content/pages/services.tsx`, `svc-hydro-jetting` `v2`; shared blocks in `service-location-shared.ts`.
Output: `content/pages/sl-sd-city-hydro.tsx` (`sanDiegoCityHydroContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Roots and grease are the City's own list, and jetting is one way to clear them | systemExplainer P3 (roots/grease, annual cleanout flush, not an inspection), Council Policy 400-10 (FAQ 1) | FAQ 'How does hydro jetting work?', 'Can hydro jetting cause a backup?' (water pacing) |
| 2. What jetting can clear, and the repair question it leaves open | municipalProgram lede (none found), covers 1 (crew lateral-installation program suspended) | FAQ 'Can hydro jetting clear roots, grease, and debris?', 'Does it fix a cracked, offset, or collapsed pipe?'; shared hydro blocks |
| 3. A lateral that can end in a canyon, and a break the City handles differently | responsibility answer P1 and P2 (Plumber's Report, 619-515-3525, the City's number) | FAQ 'Is hydro jetting safe for old pipes?' (camera first; structural defects call for evaluation) |
| 4. Slope, depth and trees: the City's rule and the jetting question | systemExplainer P4 (EMRA list), municipalProgram doesNotCover 5 (permit gap; 619-446-5242) | FAQ 'Is hydro jetting safe for old pipes?' (depends on pipe condition and material); decision 'we will say so plainly' |

Page notes:
- Company phone: Company phone not used (the LV hydro model does not use it either).
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
| A lateral with a nonstandard layout (4th, location-driven) | ADAPTED | systemExplainer P4 (EMRA list); service FAQ (depends on observed condition) |
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

relatedPageIds: loc-sd-san-diego, svc-hydro-jetting, svc-sewer-cleaning, svc-sewer-camera-inspection.

## Facts to double-check

- City phone numbers (619-515-3525, 619-446-5300, 619-446-5200, 619-446-5242) are copied from `sanDiegoCityContent`; reconfirm with the City before launch.
- 'The City says its crew lateral program is suspended' and the 'none found' help-with-costs wording come from the location page's municipalProgram, which reads as of 2026-10-03 (sources mostly undated).
