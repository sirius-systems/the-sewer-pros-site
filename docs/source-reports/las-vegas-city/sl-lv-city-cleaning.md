# Source report: City of Las Vegas, NV + Sewer Cleaning (`sl-lv-city-cleaning`)

Sources: local = `content/pages/las-vegas-las-vegas.tsx` (`lasVegasCityContent`, `loc-lv-las-vegas`); service = `content/pages/services.tsx`, `svc-sewer-cleaning` `v2`; shared blocks in `service-location-shared.ts`.
Output: `content/pages/sl-lv-city-cleaning.tsx` (`lasVegasCityCleaningContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Where the City's sewer ends and your line begins | responsibility (City main; owner to the connection), systemExplainer P4 (main stoppages), whoToCall secondaryAgency (point-of-connection conditions) | definition supporting ("private-property lines, not public mains"), decision list |
| 2. What cleaning does on a Las Vegas lateral, and what it does not | municipalProgram lede (none found), closing (optional warranty is a private paid product, no repairs by us) | definition, decision answer (does not repair cracked/offset/separated/collapsed), limits callout (flowing line is not proof) |
| 3. A 1994 median year built does not settle what is in the line | housingAge (median 1994, 61.3%, 12.8%), sourceNote closing | decision note (cleaning may not stop a problem returning), signals (clog returns) |
| 4. The City's contacts, permits, and where cleaning fits | whoToCall (Streets & Sanitation), responsibility P2, municipalProgram covers 3 (permit category), doesNotCover 3 (no permit statement), whoToCall company (phone, newer market) | scope: emergency wording from service page signals |

Page notes (referenced above as "SEE NOTES"):
- Company phone: USED in section 4 via `marketOperatingDetail['las-vegas-nv']`, as the Henderson cleaning page. "Newer market for us; longest-running work in St. Louis and San Diego" taken from the location page's company panel (also used on the Henderson drain page).
- Permit category ("building water and sewer repairs/replacements (no new connections)"): USED, with the "no statement for cleaning" point and Building & Safety 702-229-6251 (the City's number).
- Warranty: USED in section 2 as "optional warranty offered with a private company, a product you choose to buy, not City assistance". Provider name, price and terms left out (not published by the City).
- systemExplainer P2/P4/P6: P4 used in section 1; P2 folded into section 1.
- buyingGuide: LEFT OUT (inspection/sale material; used on the hydro page card).

## City of Las Vegas location page, element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | ADAPTED | Page-specific for this service. |
| hero title/intro | ADAPTED | City responsibility rule tied to this service. |
| heroForm (bullets, card, note) | LEFT OUT | Shell supplies the request form. |
| keyTakeaways 1 (City maintains public main; confirm City serves address) | ADAPTED | Main vs lateral split used; "confirm" wording kept where relevant. |
| keyTakeaways 2 (owners maintain laterals; addenda, right-of-way) | USED | Hero and section 1. |
| keyTakeaways 3 (no City program; optional private warranty) | ADAPTED | "None found" used; warranty see page notes. |
| jumpNav | LEFT OUT | Location page navigation. |
| serviceCards (9) | LEFT OUT | Not part of this content shape. |
| responsibility answer, cards, table | ADAPTED | Owner/City split. Table row "Where an inspection helps" tied to this service. |
| responsibility note (2021 dates, no statement on City-caused damage) | LEFT OUT | Dates live in the sources block; no City-damage claim is made on this page. |
| systemExplainer P1 (Public Works, City Engineering) | LEFT OUT | Agency description, not about this service. |
| systemExplainer P2 (public mains) | ADAPTED | See page notes. |
| systemExplainer P3 (condition assessment, "aging") | LEFT OUT | The City's mission statement, not a finding; risks implying a claim about any property. |
| systemExplainer P4 (main stoppages) | ADAPTED | See page notes. |
| systemExplainer P5 (sewer map) | LEFT OUT | Not about this service. |
| systemExplainer P6 (which agency serves an address) | ADAPTED | See page notes. |
| systemExplainer P7 (septic, SNHD) | LEFT OUT | Not about this service. |
| systemExplainer P8, P9 (combined/separate; no lateral condition data) | LEFT OUT | Negative statements; the "year built says little" point carries the idea. |
| systemExplainer card (camera can show; distance count) | ADAPTED | See page notes (camera page only). |
| housingAge paragraph, table | ADAPTED | Figures cited in prose; table left out. |
| housingAge sourceNote (tables, arithmetic, closing paragraph) | ADAPTED | Source named in prose; margin of error left out except where noted. |
| whoToCall paragraph, agency (Streets & Sanitation 702-229-6227), secondaryAgency (Sanitary Sewer Engineering 702-229-6541) | ADAPTED | City numbers labelled the City's. |
| whoToCall company | SEE NOTES | Company phone only where noted. |
| municipalProgram lede (none found) | USED | |
| municipalProgram covers 1, 2 | ADAPTED | |
| municipalProgram covers 3, 4, 5 (permit category, Yard Lines inspection, homeowner guide) | SEE NOTES | Permit category used where noted. |
| municipalProgram doesNotCover 1-6 | SEE NOTES | Items on grants, permit statement and sale rules used where noted; after-hours number, combined/separate and City-damage items left out. |
| municipalProgram whoCanApply, callout | ADAPTED | "Confirm with the City" wording. |
| municipalProgram closing (warranty) | SEE NOTES | |
| secondOpinion | LEFT OUT | Repair-recommendation material; the repair-estimate point is used only where noted. |
| buyingGuide lede, body | SEE NOTES | |
| buyingGuide agents | LEFT OUT | Not about this service. |
| nearbyAreas | ADAPTED | Coverage block. Henderson, North Las Vegas, Summerlin. |
| finalCta | ADAPTED | New CTA for this page. |
| sources | LEFT OUT | Page carries `lasVegasCityContent.sources`. |
| Image slots | ADAPTED | New per-page slots. |

Fixed by the owner brief, not stated on the City page: "Las Vegas is a service area, not an office location." (consistent with the location page, which states no office, address or map pin).

## Cards

| Card | Status | Source |
|---|---|---|
| Several fixtures draining slowly at once | USED | `SERVICE_PROBLEMS` |
| Clogs that keep coming back | USED | `SERVICE_PROBLEMS` |
| Water rising through a floor drain, shower, or toilet | USED | `SERVICE_PROBLEMS` |
| The City's main or your lateral (location card) | ADAPTED | responsibility P2, systemExplainer P4, service definition (private lines, not public mains) |
| Six inclusions | USED | `SERVICE_INCLUSIONS` |

## Sewer cleaning service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta written (144 characters). |
| serviceDescription | ADAPTED | City of Las Vegas added. |
| hero scope, cardTitle, cardIntro | LEFT OUT | Hero card of the service template. |
| definition | ADAPTED (service description, hero) | |
| signals | USED 3 (via `SERVICE_PROBLEMS`) | |
| process (5 steps, SeeSnake names) | USED | Confirmed equipment names, plain mention inside the step. |
| process prep | LEFT OUT | Does not fit process shape. |
| methods table | LEFT OUT | Neutral table, no local tie. |
| limits (can / cannot / callout) | ADAPTED (section 2) | |
| decision (does not do) | ADAPTED (sections 2, 3) | |
| independent, ask, audiences, markets | LEFT OUT | |
| FAQ (14 questions) | USED 14, LEFT OUT 0 | Includes the cost question (DEC-088 wording, carried as on Henderson). |
| Location FAQ (9 questions) | USED 9, LEFT OUT 0 | Henderson skipped a utility-transfer question; the City of Las Vegas page has none. "What does a sewer camera inspection show?" kept (as on the Henderson cleaning page). |
| relatedPageIds, cta | ADAPTED | |

## Facts to double-check

- Section 3: the 61.3% and 12.8% are the location page's own arithmetic from the Census decade counts.
