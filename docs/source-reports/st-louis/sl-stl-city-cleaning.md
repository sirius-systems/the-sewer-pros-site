# Source report: sl-stl-city-cleaning

Page: Sewer Cleaning in St. Louis City, MO (`stLouisCityCleaningContent`, `content/pages/sl-stl-city-cleaning.tsx`).

Sources:
- LOCATION: `stLouisCityContent` in `content/pages/st-louis-city.tsx` (`loc-stl-st-louis-city`; MSD pages last modified 2025-08-19; City Street Division program page dated 2014; last reviewed 2026-10-03).
- SERVICE: `svc-sewer-cleaning` `v2` in `content/pages/services.tsx`, shared blocks in `service-location-shared.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Location source | Service source |
|---|---|---|---|
| 1 | Where MSD's main ends and the line you maintain begins | responsibility (answer, cards, table), FAQ 1 (blockage in the private lateral is a common cause of backup) | definition supporting (private-property lines, not public mains) |
| 2 | The City's program skips clogs and roots, which is where cleaning fits | municipalProgram lede, eligibility (six or fewer units), doesNotCover 1 (clogs and roots), FAQ 8 | definition, decision answer (does not repair), limits callout (a flowing line is not proof), methods intro (chosen for the line) |
| 3 | Combined sewers, heavy rain, and a clog that comes back | systemExplainer p2-p4 (combined sewers, wet-weather backups, system-level fact) | decision note (removes the obstruction, not necessarily the cause), signals (clog returns; a camera can help show which) |
| 4 | Who to call first, and what the City says about permits | whoToCall paragraphs and MSD agency number (MSD's), municipalProgram permit paragraph, hero bullet (family-operated since 2011), market phone | signals (sewage backing up: contact us to discuss) |

## St. Louis City location page, element by element

| Element | Status | Where / reason |
|---|---|---|
| seoTitle, metaDescription | ADAPTED | Page-specific for this service; meta under 160 characters. |
| hero title/intro | ADAPTED | Responsibility rule and the program's clog/root exclusion tied to this service. |
| heroForm (bullets, card, MSD note) | LEFT OUT | Shell supplies the request form. MSD number used in the body where noted. |
| keyTakeaways 1 (MSD main, private lateral) | USED | Hero and section 1. |
| keyTakeaways 2 (combined sewers) | ADAPTED | Section 3. |
| keyTakeaways 3 (recorded evidence before you clean, buy, approve) | LEFT OUT | Camera framing; this page is about clearing the line. |
| jumpNav | LEFT OUT | Location page navigation. |
| serviceCards (9) | LEFT OUT | Not part of this content shape. |
| responsibility answer | USED | Hero and section 1. |
| responsibility cards (public, private) | ADAPTED | Public main vs private lateral split used; "MSD is not a City department" left out. |
| responsibility table | ADAPTED | Owner/MSD split in section 1; "what help exists" row in section 2; "where an inspection helps" row left out. |
| responsibility note (not legal advice) | ADAPTED | "Confirm with MSD or the City" wording kept; no legal advice. |
| systemExplainer p1-p2 (combined sewer, oldest, brick tunnels, Get the Rain Out) | ADAPTED | Combined-sewer fact in section 3; "oldest", brick tunnels and Get the Rain Out left out (public-system history, not about cleaning). |
| systemExplainer p3 (intense rain, wet-weather backups, gutters/sump pumps) | ADAPTED | Intense rain and wet-weather backups in section 3. Gutters/sump pumps/yard drains sentence cut for length. |
| systemExplainer p4 (system facts do not tell your lateral) | USED | Section 3 ("system-level fact, not a finding about your line"). |
| systemExplainer card (what a camera can show) | LEFT OUT | Camera-page material. |
| housingAge p1 (about 58% pre-1940) | LEFT OUT | Location page marks its primary Census table check pending (ACS data republished by Point2Homes). Not used, per the brief. |
| housingAge p2 + materials table | LEFT OUT | Cleaning does not depend on pipe material; the era/material material is used on the hydro and locating pages. |
| housingAge p3 (only an inspection shows) | LEFT OUT | Camera point is carried in section 3 and the service FAQ. |
| whoToCall paragraphs | USED | Section 4 (MSD investigates public sewer vs your lateral). |
| whoToCall MSD agency, (314) 768-6260, links | ADAPTED | Number in section 4, labelled MSD's, not ours. Report-issue and building-backup links not in body copy. |
| whoToCall company (phone, hours) | ADAPTED | Phone read from `marketOperatingDetail['st-louis-mo']`, as the Las Vegas cleaning page does. Hours left out. "Locally owned and family-operated, since 2011" from the location hero bullet and market founding year. |
| municipalProgram lede, eligibility (six or fewer units, taxes) | ADAPTED | Section 2. Six-or-fewer units used; paid-taxes condition left out. |
| municipalProgram plumbing-permit paragraph | ADAPTED | Section 4. Stated for replacement only; the copy says cleaning is not replacement and to ask the City. No claim either way about permits for cleaning. |
| municipalProgram $28 fee and 2014 page date | LEFT OUT | Dollar term is the City's and is not needed on this page; the 2014 date is stated only where noted. |
| municipalProgram covers / doesNotCover | ADAPTED | Covers 1 and doesNotCover 1 (clogs and roots) in section 2; other items left out. |
| municipalProgram steps (report, inspect, send) | LEFT OUT | Application steps belong to the camera and location pages. |
| municipalProgram afterSteps, callout, closing | LEFT OUT | Evidence-for-the-program material (camera page) and a page link. |
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
| Several fixtures draining slowly at once | USED | `SERVICE_PROBLEMS` |
| Clogs that keep coming back | USED | `SERVICE_PROBLEMS` |
| Water rising through a floor drain, shower, or toilet | USED | `SERVICE_PROBLEMS` |
| The public sewer or your lateral (location card) | ADAPTED | whoToCall paragraphs and MSD agency text; service definition (private lines, not public mains) |
| Six inclusions | USED | `SERVICE_INCLUSIONS` |

## FAQ

Location: 10 questions USED, 0 left out (camera question kept, as on the Las Vegas cleaning pages). Service: 14 questions USED, 0 left out, including the cost question (DEC-088 wording, carried as published). Total on page: 24.

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
| hero scope, cardTitle, cardIntro | LEFT OUT | Hero card of the service template. |
| definition answer | ADAPTED | `serviceDescription`, hero, section 2. |
| signals (6) | USED 3 | Via `SERVICE_PROBLEMS`; gurgling, odor and yard patches left out (three-card shape). |
| process (5 steps, equipment names) | USED | Confirmed equipment names, plain mention inside the step, unchanged. |
| process prep | LEFT OUT | Does not fit the process shape. |
| methods table | LEFT OUT | Neutral table, no local tie. |
| limits (can / cannot / callout) | ADAPTED | Section 2 (a flowing line is not proof the pipe is sound). |
| decision (does not do) | ADAPTED | Sections 2 and 3. |
| independent, comparison, ask, factors, myths, situations, audiences, markets | LEFT OUT | No local tie, or shell/other-page material. |
| FAQ (14) | USED 14 | See FAQ section. |
| relatedPageIds, cta | ADAPTED | Location id + three related service ids, as the Las Vegas model. |

## Page notes

- MSD number (314) 768-6260 is labelled MSD's. No City phone number is used (the location source gives none).
- No price, offer, response time, emergency or same-day claim, guarantee or equipment spec in the body. Equipment names appear only inside the process steps lifted from the service page.
- Fixed by the brief, not stated on the location page: "St. Louis City is a service area, not an office location."

## Facts to double-check

- Section 2 closing clause "which is where cleaning fits" is an inference from MSD (owner maintains the lateral) plus the City's clog/root exclusion.
- Section 4: "locally owned and family-operated, since 2011" relies on the owner-confirmed line in the location page header.
