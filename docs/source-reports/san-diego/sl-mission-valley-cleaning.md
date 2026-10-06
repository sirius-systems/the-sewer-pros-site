# Source report: Mission Valley, CA + Sewer Cleaning (`sl-mission-valley-cleaning`)

Sources: local = `content/pages/san-diego-mission-valley.tsx` (`sanDiegoMissionValleyContent`, `loc-sd-mission-valley`); service = `content/pages/services.tsx`, `svc-sewer-cleaning` `v2`; shared blocks in `service-location-shared.ts` / `sl-blocks`.
Output: `content/pages/sl-sd-mission-valley-cleaning.tsx` (`missionValleyCleaningContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Your lateral runs to the City main, past your lot line | responsibility P1, P2 (owner to City main; no separate MV utility; parcel exception), whoToCall agency (619-515-3525 spill/odor line) | definition supporting (private-property lines, not public mains) |
| 2. Kitchen grease: cleaning the line, not the permit | systemExplainer P2 (grease and roots), municipalProgram covers 1, 3 (FEWD permit; nearby-facility inspections after a grease spill), whoToCall secondaryAgency (858-654-4188) | definition (removes grease, roots, deposits, debris) |
| 3. Many fixtures, one lateral: clean on evidence | systemExplainer P2 (multi-tenant lateral), FAQ restaurant cleaning interval, municipalProgram callout (schedule from evidence; occupied-site access) | FAQ 'How often should I have my sewer line cleaned?', 'Does a clean line mean the pipe is in good condition?' (flowing line is not proof) |
| 4. A break past the property line is not a cleaning problem | responsibility P3 (Plumber's Report), municipalProgram lede (none found), doesNotCover 1 (crew program suspended), company panel (phone, founding year) | decision (does not repair cracked/offset/separated/collapsed pipe) |

Page notes:
- Company phone: USED in section 4 via `marketOperatingDetail['san-diego-ca']` (as `sl-sd-city-cleaning`). 'We have served San Diego since 2015' uses `sd.foundingYear`, the same figure the Mission Valley page publishes in its hero bullets (DEC-071).
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
| A kitchen or tenant line that keeps loading up | systemExplainer P2, municipalProgram callout | ADAPTED |
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
| methods table, independent, ask, audiences, markets | LEFT OUT | Neutral material with no local tie. |

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
- USED: How often should a restaurant line be cleaned? (kept: it sits beside the service page frequency question)
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

Skips: none.

relatedPageIds: loc-sd-mission-valley, svc-sewer-cleaning, svc-hydro-jetting, svc-sewer-cleaning-camera-inspection.

## Facts to double-check

- All City numbers (619-515-3525, 619-446-5300, 619-446-5242, 858-654-4188) are copied from `sanDiegoMissionValleyContent`, labelled the City's; reconfirm with the City before launch.
- Mission Valley is a City of San Diego planning area: only facts the Mission Valley page states are used. No City of San Diego page fact (Council Policy 400-10, EMRA list, annual cleanout flush advice, 619-446-5200) is copied because the Mission Valley page does not state it.
- "None found" wording and the crew-program suspension come from the Mission Valley page's municipalProgram, read 2026-10-04 (sources mostly undated).
