# Source report: City of Las Vegas, NV + Hydro Jetting (`sl-lv-city-hydro`)

Sources: local = `content/pages/las-vegas-las-vegas.tsx` (`lasVegasCityContent`, `loc-lv-las-vegas`); service = `content/pages/services.tsx`, `svc-hydro-jetting` `v2`; shared blocks in `service-location-shared.ts`.
Output: `content/pages/sl-lv-city-hydro.tsx` (`lasVegasCityHydroContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Why the method is matched to a lateral you maintain | responsibility (owner to the connection; addenda, right-of-way), keyTakeaways 2 | process (nozzle and settings, "more water is not automatically better"), decision (camera first), FAQ "Can hydro jetting cause a backup?" |
| 2. What jetting can clear, and the repair question it leaves open | municipalProgram (none found lede, no repairs by us) | limits (can / cannot lists), decision note, FAQ "Does it fix a cracked, offset, or collapsed pipe?" |
| 3. Las Vegas homes are mostly from 1990 on, but jetting depends on the pipe | housingAge (median 1994, 61.3%, 12.8%) | FAQ "Is hydro jetting safe for old pipes?", decision (structural defects first) |
| 4. Before you jet: the City's contacts and permits | whoToCall (Streets & Sanitation), responsibility P2, doesNotCover 3 (no permit statement) | decision note ("we will say so plainly") |

Page notes (referenced above as "SEE NOTES"):
- Company phone: LEFT OUT (as the Henderson hydro page).
- Permit category and Yard Lines inspection: LEFT OUT; the Building & Safety number (the City's) is given with "no City statement on cleaning".
- Warranty: LEFT OUT (not about jetting).
- buyingGuide lede and body: ADAPTED into the "Buying a Las Vegas home" card ("no City rule found on sale; cleaning is not an inspection"); state disclosure law not addressed, as on the location page.
- systemExplainer P2/P4/P6: P2 folded into section 1.

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
| Slow drains in more than one fixture | USED | `SERVICE_PROBLEMS` |
| A drain that clears and then slows again | USED | `SERVICE_PROBLEMS` |
| Water backing up in a floor drain, tub, or lowest fixture | USED | `SERVICE_PROBLEMS` |
| Buying a Las Vegas home (location card) | ADAPTED | buyingGuide body, doesNotCover (no sale rule found) |
| Six inclusions | USED | `SERVICE_INCLUSIONS` |

## Hydro jetting service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta written (145 characters). |
| serviceDescription | ADAPTED | City of Las Vegas added. |
| hero scope, scopeStatement, cardTitle | LEFT OUT | Hero card of the service template. |
| definition | ADAPTED (service description, hero) | |
| signals (5 items) | USED 3 (via `SERVICE_PROBLEMS`) | Gurgling and smell left out; no local tie. |
| signals after | LEFT OUT | Links live in related pages. |
| limits can / cannot / callout | USED (section 2) | |
| process (5 steps, Mongoose 184LT mention) | USED | Confirmed equipment name, plain mention. |
| process prep | LEFT OUT | Does not fit process shape. |
| decision | ADAPTED (sections 1, 3, 4) | |
| decision aside, independent, comparison table | LEFT OUT | Neutral, no local tie. |
| ask, audiences, markets, request | LEFT OUT | |
| FAQ (21 questions) | USED 21, LEFT OUT 0 | Includes "Do you offer same-day hydro jetting?" and "How much does it cost?" (DEC-088 wording, carried per DEC-139 as on the Henderson hydro page). |
| Location FAQ (9 questions) | USED 9, LEFT OUT 0 | |
| relatedPageIds, cta | ADAPTED | |
