# Source report: sl-stl-city-cleaning-camera

Page: Sewer Cleaning & Camera Inspection in St. Louis City, MO (`stLouisCityCleaningCameraContent`, `content/pages/sl-stl-city-cleaning-camera.tsx`).

Sources:
- LOCATION: `stLouisCityContent` in `content/pages/st-louis-city.tsx` (`loc-stl-st-louis-city`; MSD pages last modified 2025-08-19; City Street Division program page dated 2014; last reviewed 2026-10-03).
- SERVICE: `svc-sewer-cleaning-camera-inspection` `v2` in `content/pages/services.tsx` and `content/pages/sl-blocks/sewer-cleaning-camera-inspection.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Location source | Service source |
|---|---|---|---|
| 1 | Your lateral can run under the street, and cleaning cannot tell you where it ends | responsibility answer and table, FAQ 8 (City: entire lateral to the MSD main is private) | ask (where along the line conditions were seen), limits cannot (waterline), definition (separate services) |
| 2 | MSD investigates the backup, and your lateral is where a visit fits | whoToCall paragraphs and MSD agency number (MSD's), market phone | definition, process steps, signals (sewage backing up: contact us) |
| 3 | Wet-weather backups in the City, and a clog that keeps returning | systemExplainer p3-p4 (intense rain, wet-weather backups, system-level fact) | signals (clog returns), decision answer (blocked line: cleaning first; camera cannot see under water) |
| 4 | The City program skips clogs and roots, so the footage is your own record | municipalProgram lede, eligibility, doesNotCover 1, steps 2-3 (plumber's statement and video), callout, 2014 page date, FAQ 9 | keep (finding is an observation, not a repair recommendation), limits callout (clear video is not proof) |

## St. Louis City location page, element by element

| Element | Status | Where / reason |
|---|---|---|
| seoTitle, metaDescription | ADAPTED | Page-specific for this service; meta under 160 characters. |
| hero title/intro | ADAPTED | Responsibility rule tied to cleaning plus camera. |
| heroForm (bullets, card, MSD note) | LEFT OUT | Shell supplies the request form. MSD number used in the body where noted. |
| keyTakeaways 1 (MSD main, private lateral) | USED | Hero and section 1. |
| keyTakeaways 2 (combined sewers) | ADAPTED | Section 3. |
| keyTakeaways 3 (recorded evidence before you clean, buy, approve) | ADAPTED | Section 4 (own recorded evidence). |
| jumpNav | LEFT OUT | Location page navigation. |
| serviceCards (9) | LEFT OUT | Not part of this content shape. |
| responsibility answer | USED | Hero and section 1. |
| responsibility cards (public, private) | ADAPTED | Public main vs private lateral split used; "MSD is not a City department" left out. |
| responsibility table | ADAPTED | Owner/MSD split in section 1; help row in section 4. |
| responsibility note (not legal advice) | ADAPTED | "Confirm with MSD or the City" wording kept; no legal advice. |
| systemExplainer p1-p2 (combined sewer, oldest, brick tunnels, Get the Rain Out) | LEFT OUT | Public-system history, not about this service. |
| systemExplainer p3 (intense rain, wet-weather backups, gutters/sump pumps) | ADAPTED | Intense rain and wet-weather basement backups in section 3. Gutters/sump pumps left out. |
| systemExplainer p4 (system facts do not tell your lateral) | USED | Section 3. |
| systemExplainer card (what a camera can show) | LEFT OUT | The service page's own can/cannot lists are fuller; camera page carries them. |
| housingAge p1 (about 58% pre-1940) | LEFT OUT | Location page marks its primary Census table check pending (ACS data republished by Point2Homes). Not used, per the brief. |
| housingAge p2 + materials table | LEFT OUT | Material/era material is used on the hydro and locating pages. |
| housingAge p3 (only an inspection shows) | LEFT OUT | Camera point carried by the service content. |
| whoToCall paragraphs | USED | Section 2. |
| whoToCall MSD agency, (314) 768-6260, links | ADAPTED | Number in section 2, labelled MSD's, not ours. Links left out. |
| whoToCall company (phone, hours) | ADAPTED | Phone read from `marketOperatingDetail['st-louis-mo']` (section 2), as the Las Vegas cleaning-camera page does. Hours left out. |
| municipalProgram lede, eligibility (six or fewer units, taxes) | USED | Section 4 (six or fewer units, fully paid real-estate taxes). |
| municipalProgram plumbing-permit paragraph | LEFT OUT | Replacement permit rule is on the hydro, cleaning and locating pages; no tie to a cleaning-camera visit. |
| municipalProgram $28 fee and 2014 page date | LEFT OUT | Dollar term is the City's and is not needed on this page; the 2014 date is stated only where noted. |
| municipalProgram covers / doesNotCover | ADAPTED | Section 4 and the fourth card (clogs and roots excluded). |
| municipalProgram steps (report, inspect, send) | ADAPTED | Section 4: step 2-3 (City plumber's statement and video; City decides eligibility). Step 1 (cave-in report) left out. |
| municipalProgram afterSteps, callout, closing | ADAPTED | Section 4: "does not replace that step; your own evidence; ask what documentation it accepts". The 2014 page date is stated. Page link left out. |
| secondOpinion (ledes, steps, callout) | LEFT OUT | Repair-recommendation material; belongs to the independent-inspection page. |
| buyingGuide lede, body, links | LEFT OUT | Buying material belongs to the pre-purchase page. |
| buyingGuide agents (affiliations) | LEFT OUT | Not about this service. |
| nearbyAreas | ADAPTED | Coverage block: Chesterfield, Ballwin, Florissant, St. Charles. The "all St. Louis service areas" link is left out. |
| finalCta | ADAPTED | New CTA for this page. |
| sources | USED | Page carries `stLouisCityContent.sources`. |
| Image slots | ADAPTED | New per-page slots with neutral alt text; no place-specific photo claimed. |

## Cards and inclusions

| Card | Status | Source |
|---|---|---|
| Several fixtures draining slowly at once | USED | `sl-blocks/sewer-cleaning-camera-inspection` |
| Clogs that keep coming back | USED | `sl-blocks` |
| Water rising in a floor drain, tub, or toilet | USED | `sl-blocks` |
| A clog the City program does not cover (location card) | ADAPTED | municipalProgram doesNotCover 1; service definition (cleaning plus a record of the line) |
| Six inclusions | USED | `sl-blocks` |

## FAQ

Location: 9 of 10 questions USED; "What does a sewer camera inspection show?" left out because the service page asks the same question with the fuller answer (filtered before the merge so the service answer wins). Service: 21 questions USED, 0 left out. Total on page: 30.

| Location FAQ question | Status | Reason |
|---|---|---|
| Who is responsible for a sewer blockage on private property in St. Louis? | USED | Carried as published, group "In St. Louis City". |
| Does MSD fix the sewer line between my house and the street? | USED | Carried as published, group "In St. Louis City". |
| What does a sewer camera inspection show? | LEFT OUT | Duplicate of a service question with a fuller answer; the service copy is kept. |
| Can a sewer line be cleaned instead of replaced? | USED | Carried as published, group "In St. Louis City". |
| Should I inspect the sewer before buying a house in St. Louis City? | USED | Carried as published, group "In St. Louis City". |
| What are possible signs of a blocked or damaged private lateral? | USED | Carried as published, group "In St. Louis City". |
| Why can heavy rain contribute to sewer backups in St. Louis City? | USED | Carried as published, group "In St. Louis City". |
| Does the City repair every private lateral under a street or alley? | USED | Carried as published, group "In St. Louis City". |
| How does a St. Louis City owner apply for the Sewer Lateral Repair Program? | USED | Carried as published, group "In St. Louis City". |
| Do you repair or replace sewer lines? | USED | Carried as published, group "In St. Louis City". |

## Service page (v2), element by element

| Element | Status | Where / reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta written. |
| serviceDescription | ADAPTED | St. Louis City, Missouri added. |
| hero scope, cardTitle, serviceLabel | LEFT OUT | Hero card of the service template. |
| definition answer and supporting | ADAPTED | `serviceDescription`, hero. |
| signals (6) | USED 3 | Via the shared block; odor, gurgling and water-at-cleanout left out. |
| limits can / cannot / callout | ADAPTED | Sections 1, 3 and 4 (waterline; clear video is not proof). |
| process (5 steps, camera names) | USED | Confirmed equipment names, plain mention inside the step, unchanged. |
| decision (order of work) | ADAPTED | Section 3 (blocked line: cleaning first). |
| comparison, audiences, markets | LEFT OUT | Neutral or shell material. |
| ask (5) and keep | ADAPTED | Section 1 (where along the line) and section 4 (observation, not a repair recommendation). |
| FAQ (21) | USED 21 | See FAQ section. |
| relatedPageIds, cta | ADAPTED | Location id + three related service ids, as the Las Vegas cleaning-camera model. |

## Page notes

- Company phone read from `marketOperatingDetail['st-louis-mo']`; MSD number labelled MSD's.
- The camera is described only as recording conditions in the section it reaches; "where along the line" is the service page's "ask" wording, not a measured-distance claim.
- Fixed by the brief, not stated on the location page: "St. Louis City is a service area, not an office location."

## Facts to double-check

- Section 4 states the 2014 program page date and tells the reader to confirm current terms, as the existing camera rebuild does.
- Section 4 says "ask what documentation it accepts"; we make no claim the City accepts an outside report.
