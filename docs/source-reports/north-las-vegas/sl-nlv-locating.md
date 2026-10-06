# Source report: sl-nlv-locating

Page: Sewer Line Locating in North Las Vegas, NV (`northLasVegasLocatingContent`, `content/pages/sl-nlv-locating.tsx`).

Model: `sl-lv-city-locating` (City of Las Vegas, owner-approved). Same structure, recipe and FAQ handling; North Las Vegas facts swapped in. No City of Las Vegas fact is carried over.

Sources:
- LOCATION: `northLasVegasContent` in `content/pages/las-vegas-north-las-vegas.tsx` (City of North Las Vegas facts read 2026-10-04; none of the City pages shows a date; no Census housing data was supplied, so there is no housing-age section).
- SERVICE: `svc-sewer-line-locating` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/sewer-line-locating.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | North Las Vegas source | Service source |
|---|---|---|---|
| 1 | The City ends your lateral at its main, and a locate does not find that connection | `responsibility` (answer p1-p2, table rows 1, 3 and 6), `systemExplainer` p2-p3 and card closing, `municipalProgram.covers` 1 and 3 | `limits.cannot` (survey or boundary line), `definition` (estimate of the accessible line) |
| 2 | Before anyone digs: no City permit statement found, so ask, then call 811 | `municipalProgram.doesNotCover` 4, `municipalProgram.callout`, `whoToCall.agency` | `limits.callout` and `process.prep` (one-call 811 wording), `limits.cannot` (utility clearance, permission to dig) |
| 3 | A problem on the City side: a locate can place the point, not say whose it is | `responsibility` table row 4, `systemExplainer` p4, `municipalProgram.covers` 4 and `doesNotCover` 3 | `signals` ("A camera finding you need to place"), `decision` (locating vs. camera) |
| 4 | Buying a North Las Vegas home: the route is not the condition | `buyingGuide` (lede, body) | `signals` ("Buying or evaluating a property"), `audiences` (home buyers) |

## City of North Las Vegas location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (homeowner's responsibility for the lateral ends at the connection to the main; Utilities Department provides service) | ADAPTED | Hero intro: the City does not say where the connection sits; a locate estimates the route |
| heroForm bullets, request card, form | LEFT OUT | Template supplies its own request form |
| heroForm bullet "Serving the Las Vegas Valley, a newer market for us" | LEFT OUT | No tie to locating; the City model locating page omits it too |
| heroForm card note (City Utilities Department contact under "Who to call") | ADAPTED | Section 2, marked as the City's number |
| faqHeading | LEFT OUT | Template sets it |
| keyTakeaways 1 (lateral ends at the connection; blockage and breakage in separate statements) | ADAPTED | Section 1 and problem card 4 |
| keyTakeaways 2 (camera records what and where; City-side video may go to the Utilities Department) | ADAPTED | Section 3 |
| keyTakeaways 3 (no City lateral repair, grant or reimbursement program found) | LEFT OUT | No tie to locating |
| keyTakeaways jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer p1 (homeowner's responsibility ends at the connection to the main; Utilities Department, Operations division, provides service) | ADAPTED | Section 1 |
| responsibility.answer p2 (blockage: entire pipe to the City's main; breakage: until the line crosses the property boundary; neither point located; shown side by side, not reconciled) | ADAPTED | Section 1 (breakage statement) and problem card 4 (both statements, not reconciled) |
| responsibility card: The City's main (no City statement of who pays on the City side) | LEFT OUT | No tie; kept in the FAQ |
| responsibility card: The sewer service lateral (the City's own term) | ADAPTED | Section 1 |
| responsibility table: Overall boundary | ADAPTED | Section 1 |
| responsibility table: A blockage | ADAPTED | Problem card 4 |
| responsibility table: A breakage | ADAPTED | Section 1; problem card 4 |
| responsibility table: A problem on the City side (plumber's video may go to the Utilities Department; not found: how submitted, what the City does) | ADAPTED | Section 3, with the "did not find" wording |
| responsibility table: Who to contact | ADAPTED | Section 2 |
| responsibility table: Where an inspection helps (footage records where; does not establish the connection or boundary) | ADAPTED | Section 1 (the locate, not the footage, does not establish them) |
| responsibility.note (not legal advice; undated City page; no claim about the video path) | LEFT OUT | Same |
| systemExplainer p1 (Utilities Department, Operations division, provides service; Water Reclamation Facility, membrane bioreactor) | ADAPTED | Section 2 (Utilities Department); Water Reclamation Facility LEFT OUT |
| systemExplainer p2 (City main and your connection) | ADAPTED | Section 1 |
| systemExplainer p3 (blockages and breakages in two statements) | ADAPTED | Section 1; problem card 4 |
| systemExplainer p4 (a City-side finding: plumber's video may be submitted) | ADAPTED | Section 3 |
| systemExplainer p5 (pages do not say combined or separate, main age, local conditions; no local cleanout or lateral terms) | LEFT OUT | No tie to locating; cut |
| systemExplainer p6 (nothing on those pages tells the condition of any individual lateral) | LEFT OUT | Locating says nothing about condition; stated in section 4 instead |
| systemExplainer card bullets (what a camera can show) | LEFT OUT | Camera is a separate service |
| systemExplainer card closing (distance count; does not establish the City connection or where responsibility ends) | ADAPTED | Section 1 (adapted to the locate) |
| housingAge section (none on the location page: Census tables not supplied; no housing figure anywhere) | LEFT OUT | No source exists. The City model's section 3 (housing age) is replaced by the "City side" section |
| whoToCall.paragraphs (City Utilities Department for a problem the City may need to review; independent inspection if a plumber points to your lateral) | ADAPTED | Section 2 |
| whoToCall.agency (702-633-1484: customer service and online request, not a sewer emergency line; no City emergency, after-hours number or hours found; the City's number) | ADAPTED | Section 2, the City's number; "not a sewer emergency line" kept |
| whoToCall.company (phone, hours, newer market) | LEFT OUT | The City locating model uses no company phone; the request form carries it |
| municipalProgram.lede (none found on the water leaks and Water Resources pages; "none found", not "none exists") | LEFT OUT | No tie to locating |
| municipalProgram.covers 1 (homeowner's responsibility ends at the connection) | ADAPTED | Section 1 |
| municipalProgram.covers 2 (blockage: entire pipe to the City's main) | ADAPTED | Problem card 4 |
| municipalProgram.covers 3 (breakage: until the line crosses the property boundary) | ADAPTED | Section 1; problem card 4 |
| municipalProgram.covers 4 (City-side finding: plumber's video to the Utilities Department) | ADAPTED | Section 3 |
| municipalProgram.covers 5 (third-party plan: Service Line Warranties of America; no price, coverage or claim terms) | LEFT OUT | No tie to locating; FAQ carries it |
| municipalProgram.doesNotCover 1 (no City grant, reimbursement, cap, eligibility, application) | LEFT OUT | No tie to locating |
| municipalProgram.doesNotCover 2 (who pays on the City side; damage to a private lateral by City work) | LEFT OUT | No tie; source makes no claim |
| municipalProgram.doesNotCover 3 (how the video is submitted; what the City does after) | ADAPTED | Section 3 |
| municipalProgram.doesNotCover 4 (no City rule on whether lateral work, cleaning or a camera inspection needs a permit or inspection) | ADAPTED | Section 2 (lateral work) |
| municipalProgram.doesNotCover 5 (no City sewer emergency line, after-hours number, hours) | LEFT OUT | Cut for length; FAQ carries it |
| municipalProgram.doesNotCover 6 (combined or separate system) | LEFT OUT | No tie to locating |
| municipalProgram.callout (ask the Utilities Department which rules apply to your address; a camera does not replace any City review) | ADAPTED | Section 2 (ask which rules apply before you pay for work); "does not replace any approval the City requires" applies it to a locate |
| municipalProgram.closing (we do not perform repairs or replacements; nothing says any agency pays for our services) | LEFT OUT | No repair statement needed on a locating page; FAQ "Do you repair or replace sewer lines?" carries it |
| secondOpinion ledes, steps, callout, CTA | LEFT OUT | Template carries its own independent band |
| buyingGuide.lede (owner after closing; ask home inspector; sewer scope) | ADAPTED | Section 4 (the owner after closing, under the City's wording) |
| buyingGuide.body: no sale rule found; state law outside the page | ADAPTED | Section 4 |
| buyingGuide.body: Start New Service request for movers | LEFT OUT | No tie; FAQ carries it |
| buyingGuide.body: most basic homeowner's insurance policies do not cover service laterals | LEFT OUT | No tie to locating |
| buyingGuide links, CTA, agents block | LEFT OUT | Hub elements |
| nearbyAreas (Las Vegas, Henderson, Summerlin, market hub) | ADAPTED | `coverage`: same |
| finalCta title | ADAPTED | `cta.title` |
| finalCta paragraphs, bullets | LEFT OUT | Replaced by `cta.body` |
| sources (3 City links, lastReviewed 2026-10-04, closingNote) | USED | Same |

### North Las Vegas FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for the sewer lateral in North Las Vegas? | USED | Verbatim |
| Does North Las Vegas treat a blockage the same as a breakage? | USED | Verbatim |
| What should I do if a plumber says the problem is on the City side? | USED | Verbatim |
| Does the City of North Las Vegas help pay for lateral repairs? | USED | Verbatim |
| Who do I call about a sewer problem in North Las Vegas? | USED | Verbatim |
| Does North Las Vegas require a sewer inspection when a home is sold? | USED | Verbatim; also stands in for the service question "Does my city require a sewer inspection for a sale, remodel, or permit?" |
| How do I start water and sewer service when I buy a home in North Las Vegas? | USED | Verbatim |
| Does the City offer optional coverage for sewer lines? | USED | Verbatim |
| What does a sewer camera inspection show? | LEFT OUT | The locating service does not own the camera question; the camera service page covers it |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-sewer-line-locating`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Sewer Line Locating in North Las Vegas, NV" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, City of North Las Vegas added; "estimates, not a survey" kept |
| hero.title | ADAPTED | "Sewer Line Locating in North Las Vegas" |
| hero.intro (route estimate, planning) | ADAPTED | Hero intro |
| hero.scope bullets (3) | LEFT OUT | Template element |
| definition.answer | ADAPTED | `serviceDescription` and hero |
| definition.supporting (route vs. camera; private-property lines only) | ADAPTED | Section 3 (camera is the separate service) |
| definition.scope | LEFT OUT | The FAQ "Can line locating help with sewer repair work?" and the related-page links carry it |
| signals 1 Planning digging, trenching, construction | USED | Problem card 1 (via `sl-blocks`) |
| signals 2 Landscaping, trees, fences, hardscape | USED | Problem card 2 |
| signals 3 Sharing the route with another contractor | LEFT OUT | Four problem slots |
| signals 4 Buying or evaluating a property | ADAPTED | Section 4 |
| signals 5 A camera finding you need to place | USED | Problem card 3; section 3 |
| limits.can (5 items) | LEFT OUT | FAQ answers carry them |
| limits.cannot: survey or boundary line | ADAPTED | Section 1 |
| limits.cannot: utility clearance, permission to dig | ADAPTED | Section 2 |
| limits.cannot: exact depth, other utilities, untraced section, condition of the pipe | LEFT OUT | FAQ answers; the condition point is ADAPTED into section 4 |
| limits.callout (one-call program, often 811) | ADAPTED | Section 2 |
| process steps 1 to 5 | USED | `process`, verbatim; equipment name only as the owner confirmed (step 2, SeekTech SR-20) |
| process.prep (5 items) | LEFT OUT | No slot; FAQ covers entry points; the 811 bullet is in section 2 |
| decision (locating vs. camera) | ADAPTED | Section 3 (locate places a point; camera records the line) |
| independent band | LEFT OUT | Template carries its own band |
| comparison table (5 rows) | LEFT OUT | No slot; related pages link the siblings |
| ask items 1-3 (surface marks, depth, entry point) | LEFT OUT | FAQ "Will I get surface marks?" and the others carry them |
| ask items 4-5 (what could not be traced; video and written findings) | USED | Inclusions 1-2, 6 |
| ask.keep | LEFT OUT | Template slot; the FAQ carries records |
| audiences: Home buyers | ADAPTED | Section 4 |
| audiences: Real estate agents, Home inspectors, Property managers | LEFT OUT | Hub elements |
| markets (3 hubs) | LEFT OUT | Replaced by `coverage` |
| faqTitle | LEFT OUT | Template sets it |
| relatedPageIds | ADAPTED | Four used: City of North Las Vegas page, this service, camera inspection, pre-purchase inspection |
| cta | ADAPTED | Rewritten for North Las Vegas |
| inclusions (6 cards) | USED | process and ask sentences; `sl-blocks` |

### Service FAQ (23)

20 USED verbatim, 3 LEFT OUT.

| Question | Status | Reason |
| --- | --- | --- |
| What is sewer line locating? / How does sewer line locating work? / What are a sonde, a receiver, and a cleanout? / Is sewer line locating the same as calling 811? / Do I need a camera inspection before locating? / Can you tell me exactly where my sewer line is? / Can sewer line locating determine the pipe's depth? / Can you locate every utility on my property? / Is a locate a survey, and does it mean I can dig? / Can a sewer camera see through water? / Can a sewer line be located under concrete or a driveway? / What if the camera cannot get through the line? / What access point do you use? Do you have to pull a toilet? / Will I get surface marks? / Will I get video and written findings? / How long does locating take, and how much does it cost? / Can line locating help before landscaping or fence installation? / Can line locating help with sewer repair work? / How often should a sewer line be located or inspected? / Should I have the line located before buying a house? | USED | Verbatim (20) |
| If the line drains after cleaning, is the pipe healthy? | LEFT OUT | About cleaning and pipe health, off the locating topic |
| Should I use chemical drain cleaner on a sewer line clog? | LEFT OUT | About drain-cleaning products, off the locating topic |
| Does my city require a sewer inspection for a sale, remodel, or permit? | LEFT OUT | Duplicate; the North Las Vegas sale question answers it for this city |

None of these answers carries the DEC-088 free-estimate or same-day wording, so nothing needed carrying here.

Total FAQ on the page: 29 (9 North Las Vegas + 20 service).

## Open questions

- 811 and private sewer lines: the service page's wording is unverified for Nevada. This page repeats it as written ("your state one-call program (often reached at 811) or your local utility") and does not say whether 811 covers private lines.
- Section 2 says "no City statement on whether lateral work needs a permit or inspection" (the location page's own none-found wording). It sends the reader to the Utilities Department, the only City contact the location page lists; no building or permit office is named because none was read.
- Section 1 states the breakage rule (ends where the line crosses the property boundary) as the City words it. The blockage rule is in problem card 4. The two are never reconciled, as on the location page.
