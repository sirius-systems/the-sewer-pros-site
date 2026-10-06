# Source report: Summerlin, NV + Sewer Camera Inspection (`sl-summerlin-camera`)

Sources: local = `content/pages/las-vegas-summerlin.tsx` (`summerlinContent`, `loc-lv-summerlin`); service = `content/pages/services.tsx`, `svc-sewer-camera-inspection` `v2`; shared blocks = `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS`, `SERVICE_PROBLEM_SHOTS` in `service-location-shared.ts`.
Output: `content/pages/sl-summerlin-camera.tsx` (`summerlinCameraContent`). Model: `content/pages/sl-nlv-camera.tsx` (approved).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

Page facts: body about 430 words in four `<h2>` sections; metaDescription 132 characters.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Two agencies, and a camera does not choose one | responsibility answer (split map, display only, no parcel lookup), systemExplainer card closing (distance count; does not establish agency or connection) | hero scope: recorded visual inspection |
| 2. What the camera records on a Summerlin lateral | systemExplainer card (can-show list) | limits can/cannot (roots, deposits, cracks, offsets, standing water, connections, parts not viewed; waterline), process Documentation step, FAQ "Will I get the video and written findings?", decision (blocked line may need cleaning first) |
| 3. Two agencies, two wordings of the owner's side | responsibility table rows (City owner wording, addenda right-of-way, CCWRD wording, CCWRD roots/upkeep), municipalProgram covers 1-3 | ask/keep: recording is a record to compare against an estimate; "we do not perform repairs" |
| 4. No agency program, no sale rule, no permit statement found | municipalProgram lede and doesNotCover (grant/reimbursement; permit), buyingGuide body (no sale rule; state law not addressed) | limits: a camera does not tell which approvals apply |

Page notes:
- Summerlin is a master-planned community, not a city, and is split: Clark County's 2024 jurisdictional map (display only) shows it partly in the City of Las Vegas and partly in unincorporated Clark County. Every fact below names its agency; no sentence says which agency serves an address or which part of Summerlin is on which side; the City's and CCWRD's wordings are shown separately and never merged into one rule.
- The Summerlin location page has NO housing-age section (no Census figure), so no housing figure appears. No North Las Vegas, Henderson or whole-City-only fact is reused (no Utilities Department, 702-633-1484, blockage/breakage boundary wording).
- Agency numbers (City Streets & Sanitation 702-229-6227; CCWRD 702-668-8354) are the agencies' numbers, not ours, described as the location page describes them (main stoppage or manhole overflow; sanitary sewer spill or odors), with no hours, after-hours or emergency line claimed.
- Optional City warranty: the location page shows it once, with no price, coverage or recommendation; where used here it carries the same limits.
- Permit: only "we found no ... statement on whether it needs a permit" is used (location doesNotCover item 5).
- Alt text for hero/CTA slots is neutral (no "Summerlin home") because the location page allows Summerlin wording only for a photo from a Summerlin-area property.

## Summerlin location page, element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | ADAPTED | Page-specific for this service. |
| hero title/intro | ADAPTED | Split-jurisdiction fact tied to this service. |
| heroForm (bullets, card, note) | LEFT OUT | Shell supplies the request form. |
| keyTakeaways 1 (split map, display only) | ADAPTED (section 1) | |
| keyTakeaways 2 (City vs CCWRD wording) | ADAPTED (section 3) | |
| keyTakeaways 3 (no program found; camera records the line) | ADAPTED (section 4) | |
| jumpNav | LEFT OUT | Location page navigation. |
| serviceCards (9) | LEFT OUT | Not part of this content shape. |
| responsibility answer (two agencies; map dated Jan 10, 2024, display only; no parcel lookup) | ADAPTED (section 1; map, display only, no parcel lookup) | |
| responsibility cards (public main; private lateral) | LEFT OUT (restates the answer) | |
| responsibility table: which agency applies | ADAPTED (section 1) | |
| table: City lateral; City right-of-way (addenda, Nov 9, 2021) | ADAPTED (section 3) | |
| table: City main stoppage | LEFT OUT (main stoppage is not about a camera inspection) | |
| table: CCWRD lateral; CCWRD upkeep (roots) | ADAPTED (section 3, roots) | |
| table: where an inspection helps | ADAPTED (sections 1 and 2) | |
| responsibility note (not legal advice; post dated Mar 10, 2021; CCWRD undated) | ADAPTED ("ask the agency that serves your address") | |
| systemExplainer: two jurisdictions; City main stoppage; CCWRD upkeep | ADAPTED (sections 1 and 3) | |
| systemExplainer: combined/separate, age, soil not stated | LEFT OUT | Negative statement; no claim made. |
| systemExplainer card (what a camera can show; distance count) | ADAPTED (section 1 distance count; section 2 list) | |
| housingAge | LEFT OUT | The location page has none. |
| whoToCall paragraph, City panel (702-229-6227), CCWRD panel (702-668-8354) | LEFT OUT (agency numbers stay in the FAQ, as the agencies' numbers) | |
| whoToCall company ("newer market for us") | LEFT OUT (camera model carries no company phone) | |
| municipalProgram lede (none found) | USED (section 4, "none found") | |
| municipalProgram covers 1-3 (City owner wording; addenda; CCWRD wording) | ADAPTED (section 3) | |
| municipalProgram covers 4 (optional City warranty, private company) | LEFT OUT (not about what a camera records; stays in the FAQ) | |
| municipalProgram doesNotCover (grant/reimbursement; which addresses; warranty applicability; CCWRD own-work damage; permit; hours/emergency; combined/separate) | USED/ADAPTED (grant, permit items in section 4) | |
| municipalProgram callout, closing | ADAPTED ("ask the agency"; "we do not perform repairs") | |
| secondOpinion | LEFT OUT | Repair-recommendation material. |
| buyingGuide lede, body (split agency; no sale rule found; state law not addressed) | ADAPTED (section 4: no sale rule found; buyer has to ask for evidence) | |
| buyingGuide agents | LEFT OUT | Not about this service. |
| nearbyAreas | ADAPTED | Coverage block: Las Vegas, Henderson, North Las Vegas. |
| finalCta | ADAPTED | New CTA for this page. |
| sources | LEFT OUT | Page carries `summerlinContent.sources`. |
| Image slots | ADAPTED | New per-page slots (placeholders), neutral alt text. |

Fixed by the owner brief: "Summerlin is a service area, not an office location." (consistent with the location page, which states no office, address or map pin).

## Cards

| Card | Status | Source |
|---|---|---|
| Recurring clogs; Slow-draining sinks, tubs, or toilets; After a sewage backup | USED (3 cards) | SERVICE_PROBLEMS (service signals) |
| Two agencies, two wordings (location card) | ADAPTED | responsibility table rows (City vs CCWRD); "does not say which agency serves the address"; "we do not perform repairs" from the NLV camera model |
| Six inclusions | USED | `SERVICE_INCLUSIONS` |

## Sewer Camera Inspection service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta written (132 characters). |
| serviceDescription | ADAPTED | Summerlin added. |
| hero scope, cardTitle | LEFT OUT | Hero card of the service template. |
| definition | ADAPTED (service description) | |
| signals | USED 3 (via `SERVICE_PROBLEMS`) | Rest have no local tie. |
| limits / decision / methods / independent | ADAPTED | See section table. |
| process | USED (5 steps; confirmed SeeSnake names as a plain mention inside the Camera entry step). | |
| comparison, ask, audiences, markets, request | LEFT OUT | Neutral, no local tie. |
| FAQ (23 questions) | USED 22, LEFT OUT 1 | Left out: "Which areas does The Sewer Pros serve?" (this page is an area page). Includes "How much does it cost, and how long does it take?" (DEC-088 wording, carried as on the other Las Vegas Valley pages). |
| Location FAQ (9 questions) | USED 8, LEFT OUT 1 | Left out: "What does a sewer camera inspection show?" (service page answers it in full). Carried: Is Summerlin part of the City of Las Vegas?; City-address responsibility; CCWRD-address responsibility; does responsibility start at the property line; who to call about a backup (agency numbers, not ours); City warranty; CCWRD help paying; sale rule; "Do you repair or replace sewer lines?". |
| relatedPageIds, cta | ADAPTED | `loc-lv-summerlin` + camera, pre-purchase, locating. |

## Facts to double-check

- "Summerlin, Nevada" in serviceDescription: the location page says "Summerlin, NV" and "Summerlin properties" and never "Summerlin, Las Vegas, Nevada"; Summerlin is not called a city anywhere.
- "Owners must also clean periodically" (camera body) paraphrases CCWRD's "owner is also responsible for periodic cleaning to keep it free of foreign matter, including roots" as the location page records it; the CCWRD page is undated.
- City statements come from a post dated March 10, 2021 and addenda revised November 9, 2021; dates live in the sources block.

