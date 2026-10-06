# Source report: Summerlin, NV + Sewer Cleaning (`sl-summerlin-cleaning`)

Sources: local = `content/pages/las-vegas-summerlin.tsx` (`summerlinContent`, `loc-lv-summerlin`); service = `content/pages/services.tsx`, `svc-sewer-cleaning` `v2`; shared blocks = `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS`, `SERVICE_PROBLEM_SHOTS` in `service-location-shared.ts`.
Output: `content/pages/sl-summerlin-cleaning.tsx` (`summerlinCleaningContent`). Model: `content/pages/sl-nlv-cleaning.tsx` (approved).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

Page facts: body about 426 words in four `<h2>` sections; metaDescription 134 characters.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Two agencies, and cleaning covers only the private line | responsibility answer (split map), table rows (City owner wording; CCWRD wording incl. cleaning), "we did not find where either agency's main ends" | scope: accessible private-property lines, not public mains |
| 2. CCWRD's roots wording, and what cleaning does not repair | table row CCWRD upkeep (periodic cleaning; roots), CCWRD repair/replacement wording | process (equipment chosen for the line), FAQs "Can sewer cleaning fix a cracked, offset, or collapsed pipe?" and "Does a clean line mean the pipe is in good condition?" |
| 3. A main stoppage is not a lateral blockage | systemExplainer City paragraph, table row main stoppage, whoToCall City and CCWRD panels | scope: cleaning does not clear a public main |
| 4. No program found, an optional plan, and permits | municipalProgram lede, covers 4 (warranty), doesNotCover (warranty applicability; permit; hours/emergency), whoToCall company | "we do not perform repairs"; company phone |

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
| keyTakeaways 2 (City vs CCWRD wording) | ADAPTED (sections 1 and 2) | |
| keyTakeaways 3 (no program found; camera records the line) | ADAPTED (section 4) | |
| jumpNav | LEFT OUT | Location page navigation. |
| serviceCards (9) | LEFT OUT | Not part of this content shape. |
| responsibility answer (two agencies; map dated Jan 10, 2024, display only; no parcel lookup) | ADAPTED (section 1) | |
| responsibility cards (public main; private lateral) | LEFT OUT (restates the answer) | |
| responsibility table: which agency applies | ADAPTED (section 1) | |
| table: City lateral; City right-of-way (addenda, Nov 9, 2021) | ADAPTED (section 1) | |
| table: City main stoppage | ADAPTED (section 3: stoppage can affect upstream properties; public-main obstruction is the City team's) | |
| table: CCWRD lateral; CCWRD upkeep (roots) | ADAPTED (section 2: CCWRD roots/upkeep wording) | |
| table: where an inspection helps | LEFT OUT (camera framing) | |
| responsibility note (not legal advice; post dated Mar 10, 2021; CCWRD undated) | ADAPTED ("confirm with the agency") | |
| systemExplainer: two jurisdictions; City main stoppage; CCWRD upkeep | ADAPTED (sections 1 to 3) | |
| systemExplainer: combined/separate, age, soil not stated | LEFT OUT | Negative statement; no claim made. |
| systemExplainer card (what a camera can show; distance count) | LEFT OUT (camera page only) | |
| housingAge | LEFT OUT | The location page has none. |
| whoToCall paragraph, City panel (702-229-6227), CCWRD panel (702-668-8354) | ADAPTED (section 3, labelled the agencies' numbers, not ours) | |
| whoToCall company ("newer market for us") | ADAPTED (section 4, company phone from `marketOperatingDetail`, "newer market for us" as on the location page) | |
| municipalProgram lede (none found) | USED (section 4, "none found") | |
| municipalProgram covers 1-3 (City owner wording; addenda; CCWRD wording) | ADAPTED (sections 1 and 2) | |
| municipalProgram covers 4 (optional City warranty, private company) | ADAPTED (section 4: City's words, private company, no terms, no connection or recommendation) | |
| municipalProgram doesNotCover (grant/reimbursement; which addresses; warranty applicability; CCWRD own-work damage; permit; hours/emergency; combined/separate) | USED/ADAPTED (grant, warranty applicability, permit, hours/emergency items in sections 3 and 4) | |
| municipalProgram callout, closing | ADAPTED ("we do not perform repairs or replacements") | |
| secondOpinion | LEFT OUT | Repair-recommendation material. |
| buyingGuide lede, body (split agency; no sale rule found; state law not addressed) | LEFT OUT (inspection framing, not cleaning) | |
| buyingGuide agents | LEFT OUT | Not about this service. |
| nearbyAreas | ADAPTED | Coverage block: Las Vegas, Henderson, North Las Vegas. |
| finalCta | ADAPTED | New CTA for this page. |
| sources | LEFT OUT | Page carries `summerlinContent.sources`. |
| Image slots | ADAPTED | New per-page slots (placeholders), neutral alt text. |

Fixed by the owner brief: "Summerlin is a service area, not an office location." (consistent with the location page, which states no office, address or map pin).

## Cards

| Card | Status | Source |
|---|---|---|
| Three service-signal cards | USED (3 cards) | SERVICE_PROBLEMS (service signals) |
| Backups at several properties (location card) | ADAPTED | systemExplainer City paragraph, whoToCall panels (agencies' own numbers); cleaning clears an accessible private line, not a main |
| Six inclusions | USED | `SERVICE_INCLUSIONS` |

## Sewer Cleaning service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta written (134 characters). |
| serviceDescription | ADAPTED | Summerlin added. |
| hero scope, cardTitle, definition | LEFT OUT / ADAPTED | Definition becomes the service description. |
| signals | USED 3 (via `SERVICE_PROBLEMS`) | Rest have no local tie. |
| limits / decision / methods / independent | ADAPTED | See section table. |
| process | USED (steps from the service page; equipment names only as confirmed there). | |
| comparison, ask, audiences, markets, request | LEFT OUT | Neutral, no local tie. |
| FAQ (14 questions) | USED 14 | Includes "How long does sewer cleaning take, and how much does it cost?" (DEC-088 wording) as published. |
| Location FAQ (9 questions) | USED 9 | Nothing skipped: no utility-account question exists on the Summerlin page. Includes "What does a sewer camera inspection show?" (kept, as on the NLV cleaning page). |
| relatedPageIds, cta | ADAPTED | `loc-lv-summerlin` + cleaning, hydro, cleaning-camera. |

## Facts to double-check

- "Summerlin, Nevada" in serviceDescription: the location page says "Summerlin, NV" and "Summerlin properties" and never "Summerlin, Las Vegas, Nevada"; Summerlin is not called a city anywhere.
- "Owners must also clean periodically" (camera body) paraphrases CCWRD's "owner is also responsible for periodic cleaning to keep it free of foreign matter, including roots" as the location page records it; the CCWRD page is undated.
- City statements come from a post dated March 10, 2021 and addenda revised November 9, 2021; dates live in the sources block.
- "Cleaning ... including" in section 1 paraphrases CCWRD's "including cleaning, repair and replacement".
- Section 3: "a public-main obstruction is something its team will address" is the City statement in the location table row (City of Las Vegas address), carried here without a response-time claim.

