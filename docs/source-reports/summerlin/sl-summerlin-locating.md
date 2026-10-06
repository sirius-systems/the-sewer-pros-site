# Source report: sl-summerlin-locating

Page: Sewer Line Locating in Summerlin, NV (`summerlinLocatingContent`, `content/pages/sl-summerlin-locating.tsx`).

Model: `sl-nlv-locating` (North Las Vegas, owner-approved, itself modelled on the City of Las Vegas page). Same structure, recipe and FAQ handling; Summerlin facts swapped in. No City of Las Vegas page, North Las Vegas or Henderson fact is carried over; the City of Las Vegas and CCWRD facts used here are the ones the Summerlin location page itself states, each with that page's caveats.

Sources:
- LOCATION: `summerlinContent` in `content/pages/las-vegas-summerlin.tsx` (Clark County 2024 jurisdictional boundary map, City of Las Vegas pages and the CCWRD report-a-sewer-problem page, read 2026-10-04; no Census housing data, so there is no housing-age section). Summerlin is split between the City of Las Vegas and unincorporated Clark County: every fact names its agency and this page never says which agency serves an address.
- SERVICE: `svc-sewer-line-locating` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/sewer-line-locating.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Summerlin source | Service source |
|---|---|---|---|
| 1 | Summerlin has two agencies, and a locate does not say which one serves you | `responsibility` (answer p1, table row 1), `systemExplainer` p1-p2, `municipalProgram.doesNotCover` 2 | `limits.cannot` (survey or boundary line), `definition` (estimate of the accessible line) |
| 2 | Both agencies stop at the main, and a locate does not find that connection | `responsibility` (cards, table rows 2, 3 and 5), `systemExplainer` card closing, `municipalProgram.covers` 1-3 | `limits.cannot`, `definition` |
| 3 | Before anyone digs: no agency permit statement found, so ask, then call 811 | `municipalProgram.doesNotCover` 5, `municipalProgram.callout`, `whoToCall` (agency, secondaryAgency) | `limits.callout` and `process.prep` (one-call 811 wording), `limits.cannot` (utility clearance, permission to dig) |
| 4 | Buying a Summerlin home: the route is not the condition | `buyingGuide` (lede, body) | `signals` ("Buying or evaluating a property"), `audiences` (home buyers) |

Fourth problem card: A problem at the street, and whose it is (City: a public-main obstruction, pipe failure or damage from area construction is something its team will address; a locate places a visible point at the surface and does not say whose it is).

## Summerlin location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (Summerlin partly in the City of Las Vegas and partly in unincorporated Clark County per the County 2024 map; agency and wording depend on the address) | ADAPTED | Hero intro: neither agency says where the lateral meets the main; a locate estimates the route |
| heroForm bullets, request card, form | LEFT OUT | Template supplies its own request form |
| heroForm bullet "Serving the Las Vegas Valley, a newer market for us" | LEFT OUT | No tie to locating; the NLV locating page omits it too |
| heroForm card note (agency contacts under "Who to call") | ADAPTED | Section 3, both numbers marked as the agencies'; they are for stoppages and spills, not permits |
| faqHeading | LEFT OUT | Template sets it |
| keyTakeaways 1 (County 2024 map shows two jurisdictions, display only) | ADAPTED | Section 1 |
| keyTakeaways 2 (City and CCWRD wordings of the owner's lateral; two agencies, two wordings) | ADAPTED | Section 2 |
| keyTakeaways 3 (no City or CCWRD lateral repair, grant or reimbursement program found; a camera records the line whichever agency serves it) | LEFT OUT | No tie to locating |
| keyTakeaways jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer p1 (depends on the agency; County map dated January 10, 2024, display only; no parcel lookup; page does not say which side any address is on) | ADAPTED | Section 1 (date LEFT OUT) |
| responsibility.answer p2 (two agencies describe the owner's side in different words; each shown in its own words, not merged) | ADAPTED | Section 2 (both wordings, not merged) |
| responsibility card: The public main (City maintains public main facilities, normally under public streets or in designated easements; CCWRD main not described; no source says where either main ends at a Summerlin address) | ADAPTED | Section 2: 'We did not find where either agency's main ends at any Summerlin address' |
| responsibility card: The private sewer lateral (City: owners maintain up to the connection to the City main; CCWRD: damaged lateral connecting a house to the main in the street is the owner's, including cleaning, repair and replacement) | ADAPTED | Section 2 |
| responsibility table: Which agency applies | ADAPTED | Section 1 |
| responsibility table: City address, the owner's lateral | ADAPTED | Section 2 |
| responsibility table: City address, through the right-of-way (addenda revised November 9, 2021: private sewer stays private, including the part in the public right-of-way, until its connection to the public sewer main) | ADAPTED | Section 2 (date LEFT OUT) |
| responsibility table: City address, a main stoppage (public-main obstruction, pipe failure or damage from area construction is something the City's team will address) | ADAPTED | Problem card 4 |
| responsibility table: CCWRD address, the owner's lateral | ADAPTED | Section 2 |
| responsibility table: CCWRD address, upkeep (periodic cleaning to keep the lateral free of foreign matter, including roots) | LEFT OUT | No tie to locating |
| responsibility table: Where an inspection helps (footage records where along the line; does not establish which agency serves the property or where the connection is) | ADAPTED | Section 1 and 2 (the locate, not the footage, does not establish them) |
| responsibility.note (not legal advice; City post dated March 10, 2021; CCWRD page undated) | LEFT OUT | 'None found' and 'confirm' wording carry the caveat. Open item: the undated pages are not stated on this page |
| systemExplainer p1 (more than one agency; no single Summerlin rulebook) | ADAPTED | Section 1 |
| systemExplainer p2 (two jurisdictions, display only) | ADAPTED | Section 1 |
| systemExplainer p3 (City addresses: a City-main stoppage can affect several upstream properties and may overflow manholes; the addenda term "private collector sewer") | LEFT OUT | No tie to locating; the addenda wording is used in section 2 instead |
| systemExplainer p4 (CCWRD: lateral upkeep includes periodic cleaning to keep the line free of foreign matter, including roots) | LEFT OUT | No tie to locating |
| systemExplainer p5 (pages do not say combined or separate, main age, local soil or root conditions; no local cleanout terms) | LEFT OUT | No tie to locating |
| systemExplainer p6 (nothing on those pages tells the condition of any individual lateral) | LEFT OUT | Locating says nothing about condition; stated in section 4 instead |
| systemExplainer card bullets (what a camera can show) | LEFT OUT | Camera is a separate service |
| systemExplainer card closing (distance count; does not establish the connection to the main or where an agency's responsibility begins or ends) | ADAPTED | Section 2 (adapted to the locate) |
| housingAge section (none on the location page: no primary Census values, no matching Census geography; no housing figure anywhere) | LEFT OUT | No source exists; replaced by the 'none found' section |
| whoToCall.paragraphs (find which agency serves your address; independent camera inspection if a plumber points to your lateral) | ADAPTED | Sections 1 and 3 (ask the agency that serves your address) |
| whoToCall.agency (City Streets & Sanitation 702-229-6227: suspected main stoppage or manhole overflow; no City hours, after-hours number or emergency line found; the City's number) | ADAPTED | Section 3, the City's number; no-hours sentence LEFT OUT (FAQ carries it) |
| whoToCall.secondaryAgency (CCWRD 702-668-8354: sanitary sewer spill or sewer-related odors; photos can be emailed to the address on its page; no CCWRD hours, after-hours number or emergency line found; CCWRD's number) | ADAPTED | Section 3, CCWRD's number; photo-email address not published |
| whoToCall.company (phone, hours, newer market) | LEFT OUT | The NLV locating model uses no company phone; the request form carries it |
| municipalProgram.lede (none found on the City sewer-backup post, City warranty page and CCWRD page; "none found", not "none exists") | LEFT OUT | No tie to locating |
| municipalProgram.covers 1 (City: owners maintain laterals up to the connection to the City main; post dated March 10, 2021) | ADAPTED | Section 2 |
| municipalProgram.covers 2 (City addenda: private sewer stays private through the right-of-way until the connection; revised November 9, 2021) | ADAPTED | Section 2 |
| municipalProgram.covers 3 (CCWRD: owner's responsibility including cleaning, repair, replacement; periodic cleaning incl. roots; page undated) | ADAPTED | Section 2 (owner's responsibility only) |
| municipalProgram.covers 4 (optional City-promoted Service Line Warranty Program with a private company; no price, coverage or claim terms; no connection to and no recommendation by The Sewer Pros) | LEFT OUT | No tie to locating; FAQ carries it |
| municipalProgram.doesNotCover 1 (no City or CCWRD grant, reimbursement, cap, eligibility or application process) | LEFT OUT | No tie to locating |
| municipalProgram.doesNotCover 2 (which Summerlin addresses each agency serves; no parcel lookup) | ADAPTED | Section 1 |
| municipalProgram.doesNotCover 3 (whether the City's optional warranty applies at a Summerlin address) | LEFT OUT | No tie to locating |
| municipalProgram.doesNotCover 4 (CCWRD statement about damage CCWRD's own work causes to a private lateral) | LEFT OUT | No tie; kept in the FAQ |
| municipalProgram.doesNotCover 5 (no City or CCWRD rule on whether lateral work, cleaning or a camera inspection needs a permit or inspection) | ADAPTED | Section 3 (lateral work) |
| municipalProgram.doesNotCover 6 (no hours, after-hours number or emergency line for either agency) | LEFT OUT | Cut for length; FAQ carries it |
| municipalProgram.doesNotCover 7 (combined or separate system, or its age) | LEFT OUT | No tie to locating |
| municipalProgram.callout (ask the serving agency before paying for work; a camera does not replace any agency review; 2021 dates, other pages undated) | ADAPTED | Section 3 ('does not replace any approval an agency requires') |
| municipalProgram.closing (we do not perform repairs or replacements; nothing says any agency pays for our services) | LEFT OUT | No repair statement needed on a locating page; FAQ 'Do you repair or replace sewer lines?' carries it |
| secondOpinion ledes, steps, callout, CTA | LEFT OUT | Template carries its own independent band |
| buyingGuide.lede (the owner after closing under both agencies' wording; ask the home inspector; sewer scope; which agency serves the property is the first buyer question) | ADAPTED | Section 4 (owner after closing under both wordings) |
| buyingGuide.body (no sale rule found; state-level disclosure outside the page; buyer can ask for an inspection or ask the serving agency) | ADAPTED | Section 4 |
| buyingGuide links, CTA, agents block | LEFT OUT | Hub elements |
| nearbyAreas (Las Vegas, Henderson, North Las Vegas, market hub) | ADAPTED | `coverage`: three areas; market hub left out as on the NLV, City and Henderson pages |
| finalCta title | ADAPTED | `cta.title` |
| finalCta paragraphs, bullets | LEFT OUT | Replaced by `cta.body` |
| sources (5 links, lastReviewed 2026-10-04, closingNote) | USED | Passed through as `summerlinContent.sources`. Open item: confirm the template renders them |

### Summerlin FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Is Summerlin part of the City of Las Vegas? | USED | Verbatim; the County map facts and the display-only caveat |
| Who is responsible for a sewer lateral at a City of Las Vegas address in Summerlin? | USED | Verbatim |
| Who is responsible for a sewer lateral at an address served by CCWRD in Summerlin? | USED | Verbatim |
| Does public responsibility start at the property line in Summerlin? | USED | Verbatim |
| Who do I call about a sewer backup in Summerlin? | USED | Verbatim; carries both agency numbers (the agencies', not ours) and the no-hours note |
| Does the City of Las Vegas warranty apply to my Summerlin property? | USED | Verbatim; carries the provider name and the no-connection statement cut from the body |
| Does CCWRD offer help paying for a lateral? | USED | Verbatim |
| Does Summerlin require a sewer inspection when a home is sold? | USED | Verbatim; also stands in for the service question 'Does my city require a sewer inspection for a sale, remodel, or permit?' |
| What does a sewer camera inspection show? | LEFT OUT | The locating service does not own the camera question; the camera service page covers it |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-sewer-line-locating`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Sewer Line Locating in Summerlin, NV" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, Summerlin, Nevada, in the Las Vegas Valley added; "estimates, not a survey" kept |
| hero.title | ADAPTED | "Sewer Line Locating in Summerlin" |
| hero.intro (route estimate, planning) | ADAPTED | Hero intro |
| hero.scope bullets | LEFT OUT | Template element |
| definition.answer | ADAPTED | `serviceDescription` and hero |
| definition.supporting (route vs. camera; private-property lines only) | ADAPTED | Problem card 4 and section 3 wording (camera is the separate service) |
| definition.scope | LEFT OUT | FAQ 'Can line locating help with sewer repair work?' and related links carry it |
| signals 1 Planning digging, trenching, construction | USED | Problem card 1 (via `sl-blocks`) |
| signals 2 Landscaping, trees, fences, hardscape | USED | Problem card 2 |
| signals 3 Sharing the route with another contractor | LEFT OUT | Four problem slots |
| signals 4 Buying or evaluating a property | ADAPTED | Section 4 |
| signals 5 A camera finding you need to place | USED | Problem card 3; fourth problem card |
| limits.can (5 items) | LEFT OUT | FAQ answers carry them |
| limits.cannot: survey or boundary line | ADAPTED | Section 1 |
| limits.cannot: utility clearance, permission to dig | ADAPTED | Section 3 |
| limits.cannot: exact depth, other utilities, untraced section, condition of the pipe | LEFT OUT | FAQ answers; the condition point is ADAPTED into section 4 |
| limits.callout (one-call program, often 811) | ADAPTED | Section 3 |
| process steps 1 to 5 | USED | `process`, verbatim; equipment name only as the owner confirmed (step 2, SeekTech SR-20) |
| process.prep | LEFT OUT | No slot; the 811 bullet is in section 3 |
| decision (locating vs. camera) | ADAPTED | Section 4 and fourth problem card |
| independent band, comparison table, ask items 1-3 | LEFT OUT | Template band; no slot; FAQ 'Will I get surface marks?' and the others carry them |
| ask items 4-5 (what could not be traced; video and written findings) | USED | Inclusions 1-2, 6 |
| audiences: Home buyers | ADAPTED | Section 4 |
| audiences: Real estate agents, Home inspectors, Property managers; markets (3 hubs) | LEFT OUT | Hub elements; replaced by `coverage` |
| relatedPageIds | ADAPTED | Four used: Summerlin page, this service, camera inspection, pre-purchase inspection |
| cta | ADAPTED | Rewritten for Summerlin |
| inclusions (6 cards) | USED | `sl-blocks` |

### Service FAQ

Locating service FAQ: 20 USED verbatim, 3 LEFT OUT (see the FAQ table). None of the answers carries the DEC-088 free-estimate or same-day wording, so nothing needed carrying.

The Summerlin 'What does a sewer camera inspection show?' is LEFT OUT: the locating service does not own the camera question; the camera service page covers it. The service question 'Does my city require a sewer inspection for a sale, remodel, or permit?' is LEFT OUT as a duplicate (the Summerlin sale question answers it for this location). 'Should I use chemical drain cleaner on a sewer line clog?' and 'If the line drains after cleaning, is the pipe healthy?' are LEFT OUT as off the locating topic.

Total FAQ on the page: 29 (9 Summerlin + 20 service).

## Open questions

- Sources: the City's sewer-backup post (March 10, 2021) and sewer standards addenda (revised November 9, 2021) are dated; the CCWRD and City warranty pages show no date. The page copy says "confirm with the agency" but does not state the dates in the body.
- Agency numbers: 702-229-6227 (City Streets & Sanitation) and 702-668-8354 (CCWRD) are quoted as the location page gives them, each marked as the agency's number, not ours. They are listed for a main stoppage, manhole overflow, spill or odors; neither is described as a permit or emergency line.
- The optional City-promoted warranty is mentioned without the provider name on this page where it appears in the body (the location FAQ carries the name and the no-connection statement).
- 811 and private sewer lines: the service page's wording is unverified for Nevada. This page repeats it as written and does not say whether 811 covers private lines.
- Section 3 sends the reader to "the agency that serves your address" for the permit question, because neither agency lists a permit contact on the pages read.
