# Source report: City of Las Vegas, NV + Sewer Camera Inspection (`sl-lv-city-camera`)

Sources: local = `content/pages/las-vegas-las-vegas.tsx` (`lasVegasCityContent`, `loc-lv-las-vegas`); service = `content/pages/services.tsx`, `svc-sewer-camera-inspection` `v2`; shared blocks = `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS`, `SERVICE_PROBLEM_SHOTS` in `service-location-shared.ts`.
Output: `content/pages/sl-lv-city-camera.tsx` (`lasVegasCityCameraContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Your lateral can run under the street | responsibility answer (owner up to the main; addenda, right-of-way), municipalProgram lede (none found) | independent/limits framing: evidence about a line you maintain |
| 2. What the camera records on a Las Vegas lateral | systemExplainer card (distance count; does not establish connection point or end of responsibility) | limits can (roots, deposits, cracks, offsets, standing water, connections), cannot (waterline), ask (video, written findings, parts not viewed) |
| 3. A 1994 median year built does not describe your lateral | housingAge (median 1994, 27.9% 1990s, 61.3%, 12.8%), sourceNote closing, systemExplainer P6 (Census place vs City service area) | none; this is the local fact tied to "only looking at the line shows" |
| 4. City main or your lateral: where an inspection fits | whoToCall (Streets & Sanitation, Sanitary Sewer Engineering), responsibility P2 (contractor may need to investigate), municipalProgram doesNotCover 3 (no permit statement) | limits: a camera does not tell which approvals apply |

Page notes (referenced above as "SEE NOTES"):
- systemExplainer P2/P4/P6 used in section 4 and housing section (Census place caveat). Card used in section 2.
- warranty: LEFT OUT on this page (not about what a camera records).
- Company phone: LEFT OUT (as the Henderson camera pilot).
- permit category / Yard Lines / homeowner guide: LEFT OUT; only "we found no City statement on whether it needs a permit" is used.
- buyingGuide: ADAPTED into the pre-purchase related link only; the sale-rule statement is not repeated here because the problem card for a Las Vegas purchase is not one of the four (see cards).

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
| Recurring clogs | USED | `SERVICE_PROBLEMS` (service signals) |
| Slow-draining sinks, tubs, or toilets | USED | `SERVICE_PROBLEMS` |
| After a sewage backup | USED | `SERVICE_PROBLEMS` |
| The City or a contractor points to your lateral (location card) | ADAPTED | responsibility P2 ("contractor may need to investigate"); "we do not perform repairs, compare against any estimate" from the Henderson camera pilot |
| Six inclusions | USED | `SERVICE_INCLUSIONS` |

## Camera service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta written (143 characters). |
| serviceDescription | ADAPTED | City of Las Vegas added. |
| hero scope, cardTitle | LEFT OUT | Hero card of the service template. |
| definition | ADAPTED (service description) | |
| signals (6 items) | USED 3 (via `SERVICE_PROBLEMS`) | Gurgling, odors, wet areas left out; no local tie. |
| limits can / cannot / callout / related | ADAPTED (section 2) | Waterline point used; the rest is on the service page and in FAQ. |
| process (5 steps, SeeSnake names) | USED | Confirmed equipment names, plain mention inside the step. |
| process prep | LEFT OUT | Does not fit process shape. |
| decision, comparison | LEFT OUT | Neutral, no local tie. |
| ask, evidence, audiences, markets | LEFT OUT | Video and findings points used in inclusions and section 2. |
| FAQ (23 questions) | USED 22, LEFT OUT 1 | Left out: "Which areas does The Sewer Pros serve?" (this page is an area page). Includes "How much does it cost, and how long does it take?" (DEC-088 wording, carried as on Henderson). |
| Location FAQ (9 questions) | USED 8, LEFT OUT 1 | Left out: "What does a sewer camera inspection show?" (service page answers it in full). |
| relatedPageIds, cta | ADAPTED | |

## Facts to double-check

- Hero and sections 1, 4: "includes any part in the public right-of-way" comes from the City's addenda (rev. November 9, 2021), as the location page states it.
- Section 2: "a camera generally cannot see under the waterline" is the service page's statement.
