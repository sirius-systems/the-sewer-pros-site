# Source report: Mission Valley, CA + Sewer Cleaning & Camera Inspection (`sl-mission-valley-cleaning-camera`)

Sources: local = `content/pages/san-diego-mission-valley.tsx` (`sanDiegoMissionValleyContent`, `loc-sd-mission-valley`); service = `content/pages/services.tsx`, `svc-sewer-cleaning-camera-inspection` `v2`; shared blocks in `service-location-shared.ts` / `sl-blocks`.
Output: `content/pages/sl-sd-mission-valley-cleaning-camera.tsx` (`missionValleyCleaningCameraContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Your lateral can end in a canyon, and footage does not show where | responsibility P1 (owner to City main; street, beyond the line, easement, canyon), buyingGuide body (619-446-5300), systemExplainer card closing (distance count; not a property line) | definition (cleaning clears a restriction; camera shows the visible inside) |
| 2. Kitchen grease: clean first, then see what is left | systemExplainer P2 (grease and roots), municipalProgram covers 1 (FEWD permit), whoToCall secondaryAgency (858-654-4188) | 'Does the camera or the cleaning come first?', 'Does a clear video mean my line is healthy?', limits (cannot see under water) |
| 3. One lateral, many tenants: let the footage set the schedule | systemExplainer P2 (multi-tenant lateral), municipalProgram callout (clean on an interval the evidence supports; re-inspect; occupied-site access), FAQ restaurant cleaning interval | process (camera before, after or both) |
| 4. If a plumber finds a break past the property line, the footage is your record | responsibility P3 (Plumber's Report), municipalProgram lede (none found), callout (no claim City accepts an outside report; no repairs by us) | deliverables (video when a camera is used, written findings noting parts not viewed) |

Page notes:
- Company phone: USED in section 4 via `marketOperatingDetail['san-diego-ca']`. Founding year not used.
- Agency: only the City of San Diego is named; the location page lists one agency.
- All City numbers are labelled as the City's. No dollar figure, date or program term beyond what the location page states.

## Mission Valley location page, element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | ADAPTED | Page-specific for this service. |
| hero title/intro | ADAPTED | City responsibility rule tied to this service. |
| heroForm (bullets, card, note) | LEFT OUT | Shell supplies the request form. The City spill-line note is used only where a section says so. |
| keyTakeaways 1 (planning area of about 2,418 net acres; City rules apply) | ADAPTED | Hero and coverage intro (planning area, City rules). Acreage not repeated. |
| keyTakeaways 2 (regional center; FEWD permit and plan review) | SEE SECTIONS | Used where noted below. |
| keyTakeaways 3 (owner maintains to the City main; no City help found) | USED | Hero and body. |
| jumpNav, serviceCards (9) | LEFT OUT | Location page navigation and cards, not this content shape. |
| responsibility answer P1 (City runs the public sewer; owner maintains to the City main; street, beyond the line, easement, canyon) | USED | Hero and body. |
| responsibility answer P2 (planning area, no separate MV utility found, parcel can be an exception; lease is a matter for the lease) | SEE SECTIONS | Used where noted below. |
| responsibility answer P3 (Plumber's Report, 619-515-3525, 24 hours) | SEE SECTIONS | City's number and process only where noted; the City's 24-hour statement is not repeated as ours. |
| responsibility cards, table | ADAPTED | Owner/City split and FEWD row folded into section copy. |
| responsibility note (no statement on who pays beyond the line) | LEFT OUT | Not asserted on this page. |
| systemExplainer P1 (floodplain, regional center, 1958 development) | SEE SECTIONS | Regional-center sentence and 1958 date used where noted; floodplain not used. |
| systemExplainer P2 (kitchen grease, multi-tenant single lateral) | SEE SECTIONS | Used where noted below. |
| systemExplainer P3 (combined/separate system and pipe age not stated) | SEE SECTIONS | Used where noted below. |
| systemExplainer P4 (floodplain: no claim) | LEFT OUT | Page makes no groundwater or flooding claim. |
| systemExplainer P5 (East/West Mission Valley) | LEFT OUT | No local tie to this service. |
| systemExplainer card (what a camera shows; distance count) | SEE SECTIONS | Used where noted below. |
| whoToCall agency (619-515-3525), secondaryAgency FEWD (858-654-4188) | SEE SECTIONS | City numbers labelled the City's; hours statements not repeated. |
| whoToCall company | SEE NOTES | Company phone only where noted. |
| municipalProgram lede (none found) | SEE SECTIONS | Used where noted; checked-pages list not repeated; no dollar figure. |
| municipalProgram covers (FEWD program, plan review, HGI/GGI, nearby-facility inspections) | SEE SECTIONS | Used where noted below. |
| municipalProgram doesNotCover (crew program suspended; Right-of-Way Permit; no private-property permit page; 619-446-5242, 619-446-5300) | SEE SECTIONS | Used where noted below. |
| municipalProgram callout (independent inspection fit; operator paragraphs; no repairs by us) | ADAPTED | Folded into section copy; no claim the City accepts an outside report. |
| municipalProgram closing (links) | LEFT OUT | Commercial links belong to the location page. |
| secondOpinion | LEFT OUT | Repair-recommendation material. |
| buyingGuide | SEE SECTIONS | Used where noted below. |
| nearbyAreas | ADAPTED | Coverage block: the six other San Diego locations (market link left out). |
| finalCta | ADAPTED | New CTA for this page. |
| sources | LEFT OUT | Page carries `sanDiegoMissionValleyContent.sources` (undated except Plan 2019, Bulletin 166 March 2026; copy says to confirm with the City). |
| housingAge | N/A | The Mission Valley page has no housing-age section; no Census figure is used. |
| Image slots | ADAPTED | New per-page slots, neutral alt text, no place-specific photo claim. |

Fixed by the owner brief, not stated on the location page: "Mission Valley is a service area, not an office location." (consistent with the location page, which states no office, address or map pin).

## Cards

| Card | Status | Source |
|---|---|---|
| Three service cards | USED | `SERVICE_PROBLEMS` / sl-blocks |
| A kitchen line under a City grease permit | municipalProgram covers 1, FAQ grease trap vs GGI | ADAPTED |
| Six inclusions | USED | `SERVICE_INCLUSIONS` / sl-blocks |
| Process steps | USED | `v2.process.steps` |
| Coverage (six other San Diego locations) | ADAPTED | nearbyAreas; title 'Other San Diego area locations' |

## Service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral; new local meta written (<= 160 characters). |
| serviceDescription | ADAPTED | Mission Valley added. |
| definition, signals, limits, decision | ADAPTED / USED | See body sections and cards. |
| process | USED | Steps verbatim (confirmed equipment names appear only inside the steps). |
| comparison, independent, ask, markets, related | LEFT OUT | Neutral material with no local tie. |

## FAQ

Location page questions (shown first, group 'In Mission Valley'):

- USED: Is Mission Valley a separate city?
- USED: Who maintains the sewer lateral at a Mission Valley business?
- USED: Does a Mission Valley restaurant need a City grease permit?
- USED: Do a new restaurant, a remodel or a retrofit in Mission Valley need a grease review?
- USED: What is the difference between a grease trap and a gravity grease interceptor?
- USED: Who do I call about a sewer spill or sewer odor in Mission Valley?
- USED: What happens if a plumber finds a break or collapse beyond the property line?
- USED: Does the City help pay for lateral work, and who may do the work?
- USED: How often should a restaurant line be cleaned?
- USED: Do you repair or replace sewer lines?

Service page questions:

- USED: What are sewer cleaning and camera inspection?
- USED: What does a sewer camera inspection show?
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

Skips: none. The Mission Valley page has no camera question to collide with the service page's.

relatedPageIds: loc-sd-mission-valley, svc-sewer-cleaning-camera-inspection, svc-sewer-camera-inspection, svc-sewer-cleaning.

## Facts to double-check

- All City numbers (619-515-3525, 619-446-5300, 619-446-5242, 858-654-4188) are copied from `sanDiegoMissionValleyContent`, labelled the City's; reconfirm with the City before launch.
- Mission Valley is a City of San Diego planning area: only facts the Mission Valley page states are used. No City of San Diego page fact (Council Policy 400-10, EMRA list, annual cleanout flush advice, 619-446-5200) is copied because the Mission Valley page does not state it.
- "None found" wording and the crew-program suspension come from the Mission Valley page's municipalProgram, read 2026-10-04 (sources mostly undated).
