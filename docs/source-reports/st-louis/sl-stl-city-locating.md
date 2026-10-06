# Source report: sl-stl-city-locating

Page: Sewer Line Locating in St. Louis City, MO (`stLouisCityLocatingContent`, `content/pages/sl-stl-city-locating.tsx`).

Sources:
- LOCATION: `stLouisCityContent` in `content/pages/st-louis-city.tsx` (`loc-stl-st-louis-city`; MSD pages last modified 2025-08-19; City Street Division program page dated 2014; last reviewed 2026-10-03).
- SERVICE: `svc-sewer-line-locating` `v2` in `content/pages/services.tsx` and `content/pages/sl-blocks/sewer-line-locating.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Location source | Service source |
|---|---|---|---|
| 1 | A lateral that runs to the MSD main, and a locate that stops short of it | responsibility answer and table, FAQ 8 (City: entire lateral to the MSD main is private) | limits cannot (not a survey; section not reached is not traced), definition (estimate of the path) |
| 2 | Before anyone digs: the City's permit rule and one-call | municipalProgram permit paragraph, steps (cave-in report goes to the City) | limits callout (one-call wording as written), limits cannot (clearance, permission to dig), FAQ 'Can line locating help with sewer repair work?' |
| 3 | Older City laterals, and where the line runs today | housingAge p2 and materials table (eras; repaired or replaced since), systemExplainer p4 | FAQ 'Can a sewer line be located under concrete or a driveway?' (receiver detects the sonde, not the pipe), limits cannot (not a look at condition), decision note |
| 4 | Buying a St. Louis City home: the route is not the condition | buyingGuide lede and body (buyer's after closing; older infrastructure; due diligence; not legal advice) | signals item 4 (buying or evaluating), audiences home buyers, FAQ 'Should I have the line located before buying a house?' |

## St. Louis City location page, element by element

| Element | Status | Where / reason |
|---|---|---|
| seoTitle, metaDescription | ADAPTED | Page-specific for this service; meta under 160 characters. |
| hero title/intro | ADAPTED | Responsibility rule tied to locating, with the connection-to-main limit. |
| heroForm (bullets, card, MSD note) | LEFT OUT | Shell supplies the request form. MSD number used in the body where noted. |
| keyTakeaways 1 (MSD main, private lateral) | USED | Hero and section 1. |
| keyTakeaways 2 (combined sewers) | ADAPTED | Section 3 (system facts describe the public system, not your route). |
| keyTakeaways 3 (recorded evidence before you clean, buy, approve) | LEFT OUT | Camera framing. |
| jumpNav | LEFT OUT | Location page navigation. |
| serviceCards (9) | LEFT OUT | Not part of this content shape. |
| responsibility answer | USED | Hero and section 1. |
| responsibility cards (public, private) | ADAPTED | Public main vs private lateral split used; "MSD is not a City department" left out. |
| responsibility table | ADAPTED | Owner/MSD split in section 1. |
| responsibility note (not legal advice) | ADAPTED | "Confirm with MSD or the City" wording kept; no legal advice. |
| systemExplainer p1-p2 (combined sewer, oldest, brick tunnels, Get the Rain Out) | LEFT OUT | Public-system history, not about this service. |
| systemExplainer p3 (intense rain, wet-weather backups, gutters/sump pumps) | LEFT OUT | Not about route. |
| systemExplainer p4 (system facts do not tell your lateral) | ADAPTED | Section 3: combined-sewer facts describe the public system, not your route. |
| systemExplainer card (what a camera can show) | LEFT OUT | Camera-page material. |
| housingAge p1 (about 58% pre-1940) | LEFT OUT | Location page marks its primary Census table check pending (ACS data republished by Point2Homes). Not used, per the brief. |
| housingAge p2 + materials table | ADAPTED | Section 3: materials changed over the decades (clay and cast iron to PVC/ABS from the 1970s), many laterals repaired or replaced since; general timelines, not about any one home. |
| housingAge p3 (only an inspection shows) | ADAPTED | Section 3 (a locate says nothing about condition; a camera inspection is separate). |
| whoToCall paragraphs | LEFT OUT | MSD-first guidance is on the cleaning, hydro and cleaning-camera pages; a locate is not a backup response. |
| whoToCall MSD agency, (314) 768-6260, links | LEFT OUT | No MSD number needed on this page. |
| whoToCall company (phone, hours) | LEFT OUT | No company phone repeated, as on the Las Vegas page for this service. |
| municipalProgram lede, eligibility (six or fewer units, taxes) | LEFT OUT | Eligibility terms not needed for locating. |
| municipalProgram plumbing-permit paragraph | USED | Section 2. |
| municipalProgram $28 fee and 2014 page date | LEFT OUT | Dollar term is the City's and is not needed on this page; the 2014 date is stated only where noted. |
| municipalProgram covers / doesNotCover | LEFT OUT | Clog/root and damage terms are not about route. |
| municipalProgram steps (report, inspect, send) | ADAPTED | Section 2: only the cave-in report step is referenced (it goes to the City). Plumber statement and Street Division steps left out. |
| municipalProgram afterSteps, callout, closing | LEFT OUT | Evidence-for-the-program material (camera page). |
| secondOpinion (ledes, steps, callout) | LEFT OUT | Repair-recommendation material; belongs to the independent-inspection page. |
| buyingGuide lede, body, links | ADAPTED | Section 4. |
| buyingGuide agents (affiliations) | LEFT OUT | Not about this service. |
| nearbyAreas | ADAPTED | Coverage block: Chesterfield, Ballwin, Florissant, St. Charles. The "all St. Louis service areas" link is left out. |
| finalCta | ADAPTED | New CTA for this page. |
| sources | USED | Page carries `stLouisCityContent.sources`. |
| Image slots | ADAPTED | New per-page slots with neutral alt text; no place-specific photo claimed. |

## Cards and inclusions

| Card | Status | Source |
|---|---|---|
| Planning digging, trenching, or construction | USED | `sl-blocks/sewer-line-locating` |
| Landscaping, trees, fences, or hardscape | USED | `sl-blocks` |
| A camera finding you need to place | USED | `sl-blocks` |
| The City puts the lateral on the owner, even under the street (location card) | ADAPTED | responsibility answer; service definition (estimate of the accessible line; connection not found) |
| Six inclusions | USED | `sl-blocks` |

## FAQ

Location: 9 of 10 questions USED; "What does a sewer camera inspection show?" left out (a camera question the locating page does not own). Service: 21 of 23 USED; left out: "Should I use chemical drain cleaner on a sewer line clog?" (drain cleaning products, off the locating topic) and "If the line drains after cleaning, is the pipe healthy?" (cleaning and pipe health, off the locating topic). "Does my city require a sewer inspection for a sale, remodel, or permit?" is KEPT (the location page states no City sale rule, so the generic "check locally, no legal advice" answer stands). Total on page: 30.

| Location FAQ question | Status | Reason |
|---|---|---|
| Who is responsible for a sewer blockage on private property in St. Louis? | USED | Carried as published, group "In St. Louis City". |
| Does MSD fix the sewer line between my house and the street? | USED | Carried as published, group "In St. Louis City". |
| What does a sewer camera inspection show? | LEFT OUT | Camera question the locating page does not own. |
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
| serviceDescription | ADAPTED | St. Louis City, Missouri added; "Results are estimates, not a survey" kept. |
| hero scope, cardTitle, cardIntro | LEFT OUT | Hero card of the service template. |
| definition (sonde, receiver, depth approximate) | ADAPTED | Section 3 (receiver detects the sonde's signal) and hero. |
| signals (5) | USED 3 | Via the shared block; sharing the route and buying items used in prose. |
| limits can / cannot / callout | ADAPTED | Sections 1 and 2 (not a survey, not clearance; one-call wording as written, no 811 coverage claim). |
| process (5 steps, locator name) | USED | Confirmed equipment name, plain mention inside the step, unchanged. |
| decision, independent, comparison, ask, audiences, markets | LEFT OUT | Neutral or shell material; home-buyer point used in section 4. |
| FAQ (23) | USED 21 | See FAQ section. |
| relatedPageIds, cta | ADAPTED | Location id + three related service ids, as the Las Vegas locating model. |

## Page notes

- No company phone and no MSD number on this page. No price, offer, response time, guarantee, emergency or same-day claim.
- A locate is an estimate, not a survey, utility clearance or permission to dig. 811 wording follows the service page ("often reached at 811"; no claim about private-line coverage). The service page flags 811 wording as unverified for Missouri; verify the Missouri one-call program before launch.
- Fixed by the brief, not stated on the location page: "St. Louis City is a service area, not an office location."

## Facts to double-check

- Section 2: the cave-in report "goes to the City" is from the location page's program step 1 (the City's street problem service request page).
- Section 3: "concrete, rebar and other buried metal can weaken the signal" and the sonde point are service FAQ text, not location facts.
- Missouri one-call (811) wording is unverified at the service-page level.
