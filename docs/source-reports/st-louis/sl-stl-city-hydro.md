# Source report: sl-stl-city-hydro

Page: Hydro Jetting in St. Louis City, MO (`stLouisCityHydroContent`, `content/pages/sl-stl-city-hydro.tsx`).

Sources:
- LOCATION: `stLouisCityContent` in `content/pages/st-louis-city.tsx` (`loc-stl-st-louis-city`; MSD pages last modified 2025-08-19; City Street Division program page dated 2014; last reviewed 2026-10-03).
- SERVICE: `svc-hydro-jetting` `v2` in `content/pages/services.tsx`, shared blocks in `service-location-shared.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Location source | Service source |
|---|---|---|---|
| 1 | A private lateral, a combined system, and why the water is paced | responsibility answer and table, systemExplainer p3 (intense rain, wet-weather backups) | definition, process step 4 (more water is not better; paced to the line), FAQ 'Can hydro jetting cause a backup?' |
| 2 | What jetting can clear, and what the City's program leaves out | municipalProgram lede, doesNotCover 1 (clogs and roots), FAQ 8 | limits can (4) and cannot (4), decision note (further evaluation outside our scope) |
| 3 | Old City sewers, lateral materials, and what jetting depends on | systemExplainer p2 (combined sewers among the oldest), housingAge p2 and materials table (clay, cast iron, general timelines) | FAQ 'Is hydro jetting safe for old pipes?', decision aside, process step 2 |
| 4 | Before you jet: MSD first, and the City's permit rule | whoToCall paragraphs, MSD agency number (MSD's), municipalProgram permit paragraph | decision note (we will say so plainly) |

## St. Louis City location page, element by element

| Element | Status | Where / reason |
|---|---|---|
| seoTitle, metaDescription | ADAPTED | Page-specific for this service; meta under 160 characters. |
| hero title/intro | ADAPTED | Responsibility rule tied to jetting as a cleaning method, not a repair. |
| heroForm (bullets, card, MSD note) | LEFT OUT | Shell supplies the request form. MSD number used in the body where noted. |
| keyTakeaways 1 (MSD main, private lateral) | USED | Hero and section 1. |
| keyTakeaways 2 (combined sewers) | ADAPTED | Section 1. |
| keyTakeaways 3 (recorded evidence before you clean, buy, approve) | LEFT OUT | Camera framing. |
| jumpNav | LEFT OUT | Location page navigation. |
| serviceCards (9) | LEFT OUT | Not part of this content shape. |
| responsibility answer | USED | Hero and section 1. |
| responsibility cards (public, private) | ADAPTED | Public main vs private lateral split used; "MSD is not a City department" left out. |
| responsibility table | ADAPTED | Owner/MSD split in section 1; help row in section 2. |
| responsibility note (not legal advice) | ADAPTED | "Confirm with MSD or the City" wording kept; no legal advice. |
| systemExplainer p1-p2 (combined sewer, oldest, brick tunnels, Get the Rain Out) | ADAPTED | Combined sewers and "among the oldest in the country" (MSD) in sections 1 and 3, labelled as the public system. Brick tunnels and Get the Rain Out left out. |
| systemExplainer p3 (intense rain, wet-weather backups, gutters/sump pumps) | ADAPTED | Intense rain and wet-weather backups in section 1, tied to added water. Gutters/sump pumps left out. |
| systemExplainer p4 (system facts do not tell your lateral) | ADAPTED | Section 3: the combined-sewer age is the public system, not your lateral. |
| systemExplainer card (what a camera can show) | LEFT OUT | Camera-page material. |
| housingAge p1 (about 58% pre-1940) | LEFT OUT | Location page marks its primary Census table check pending (ACS data republished by Point2Homes). Not used, per the brief. |
| housingAge p2 + materials table | ADAPTED | Section 3: clay (roughly 1900s to 1970s; joints and roots) and cast iron (roughly 1900s to 1980; corrosion and scale) used as general timelines. Orangeburg and PVC/ABS left out for length. The "many laterals repaired or replaced since" clause was cut for length. |
| housingAge p3 (only an inspection shows) | ADAPTED | Section 3 ("whose material only an inspection shows"). |
| whoToCall paragraphs | USED | Section 4. |
| whoToCall MSD agency, (314) 768-6260, links | ADAPTED | Number in section 4, labelled MSD's, not ours. Links left out of body copy. |
| whoToCall company (phone, hours) | LEFT OUT | No company phone repeated, as on the Las Vegas page for this service. |
| municipalProgram lede, eligibility (six or fewer units, taxes) | ADAPTED | Section 2: severe damage under the right-of-way. Eligibility conditions left out. |
| municipalProgram plumbing-permit paragraph | USED | Section 4. |
| municipalProgram $28 fee and 2014 page date | LEFT OUT | Dollar term is the City's and is not needed on this page; the 2014 date is stated only where noted. |
| municipalProgram covers / doesNotCover | ADAPTED | doesNotCover 1 (clogs and roots anywhere on the lateral) in section 2. |
| municipalProgram steps (report, inspect, send) | LEFT OUT | Application steps belong to the camera and location pages. |
| municipalProgram afterSteps, callout, closing | LEFT OUT | Evidence-for-the-program material (camera page) and a page link. |
| secondOpinion (ledes, steps, callout) | LEFT OUT | Repair-recommendation material; belongs to the independent-inspection page. |
| buyingGuide lede, body, links | ADAPTED | Used in the fourth problem card ("Buying a St. Louis City home"): lateral is the buyer's after closing; cleaning is not an inspection. |
| buyingGuide agents (affiliations) | LEFT OUT | Not about this service. |
| nearbyAreas | ADAPTED | Coverage block: Chesterfield, Ballwin, Florissant, St. Charles. The "all St. Louis service areas" link is left out. |
| finalCta | ADAPTED | New CTA for this page. |
| sources | USED | Page carries `stLouisCityContent.sources`. |
| Image slots | ADAPTED | New per-page slots with neutral alt text; no place-specific photo claimed. |

## Cards and inclusions

| Card | Status | Source |
|---|---|---|
| Slow drains in more than one fixture | USED | `SERVICE_PROBLEMS` |
| A drain that clears and then slows again | USED | `SERVICE_PROBLEMS` |
| Water backing up in a floor drain, tub, or lowest fixture | USED | `SERVICE_PROBLEMS` |
| Buying a St. Louis City home (location card) | ADAPTED | buyingGuide body (buyer's responsibility after closing); service audiences (cleaning is not an inspection; pre-purchase inspection) |
| Six inclusions | USED | `SERVICE_INCLUSIONS` |

## FAQ

Location: 10 questions USED, 0 left out. Service: 21 questions USED, 0 left out, including the cost and same-day answers (DEC-088 wording, carried as published per DEC-139, as on the Las Vegas hydro pages). Total on page: 31.

| Location FAQ question | Status | Reason |
|---|---|---|
| Who is responsible for a sewer blockage on private property in St. Louis? | USED | Carried as published, group "In St. Louis City". |
| Does MSD fix the sewer line between my house and the street? | USED | Carried as published, group "In St. Louis City". |
| What does a sewer camera inspection show? | USED | Carried as published, group "In St. Louis City". |
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
| hero scope, scopeStatement, cardTitle | LEFT OUT | Hero card of the service template. |
| definition | ADAPTED | `serviceDescription` and hero. |
| signals (5) | USED 3 | Via `SERVICE_PROBLEMS`. |
| limits (can 4 / cannot 4 / callout) | ADAPTED | Section 2 (list of what jetting can clear; what it does not correct). |
| process (5 steps, jetter name) | USED | Confirmed equipment name, plain mention inside the step, unchanged. |
| decision (camera first or cleaning first, aside) | ADAPTED | Sections 1, 3 and 4 (camera look first; further evaluation outside our scope). |
| comparison, independent, ask, audiences, markets | LEFT OUT | Neutral or shell material; the home-buyer audience point is used in the fourth card. |
| FAQ (21) | USED 21 | See FAQ section. |
| relatedPageIds, cta | ADAPTED | Location id + three related service ids, as the Las Vegas hydro model. |

## Page notes

- The company phone is not repeated (as on the Las Vegas hydro page). MSD number is labelled MSD's.
- No price, offer, response time, guarantee, emergency or same-day claim, pressure or flow figure in the body. Equipment name appears only inside the process step lifted from the service page.
- Fixed by the brief, not stated on the location page: "St. Louis City is a service area, not an office location."

## Facts to double-check

- Section 1: the sentence linking wet-weather backups to "added water can contribute to a backup" combines an MSD system fact with the service page's own caution; it makes no claim about jetting during rain.
- Section 3: era ranges are the location page's "general industry timelines", not a statement about any home.
