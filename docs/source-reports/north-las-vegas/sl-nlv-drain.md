# Source report: sl-nlv-drain

Page: Drain Cleaning in North Las Vegas, NV (`northLasVegasDrainContent`, `content/pages/sl-nlv-drain.tsx`).

Model: `sl-lv-city-drain` (City of Las Vegas, owner-approved). Same structure, recipe and FAQ handling; North Las Vegas facts swapped in. No City of Las Vegas fact is carried over.

Sources:
- LOCATION: `northLasVegasContent` in `content/pages/las-vegas-north-las-vegas.tsx` (City of North Las Vegas facts read 2026-10-04; none of the City pages shows a date; no Census housing data was supplied, so there is no housing-age section).
- SERVICE: `svc-drain-cleaning` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/drain-cleaning.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | North Las Vegas source | Service source |
|---|---|---|---|
| 1 | For a blockage, the City says the pipe is yours all the way to its main | `responsibility` (answer p1-p2, table rows 1-2), `systemExplainer` p2-p3 (blockage), `municipalProgram.covers` 1-2 | `definition.supporting` 1 (drain vs sewer cleaning), `limits.cannot` (the public main and the connection) |
| 2 | One drain, several drains, or a problem the City may need to review | `responsibility` table row 4, `systemExplainer` p4, `whoToCall` (agency, company), `municipalProgram.covers` 4 and `doesNotCover` 5 | `signals` (one slow, several, gurgling, water or sewage coming up), `triage` rows 1, 2, 5, FAQ "Does a camera inspection come with drain cleaning?" |
| 3 | Nothing the City publishes says why your drain keeps clogging | `systemExplainer` p5, `municipalProgram.doesNotCover` 6 | `signals` ("Clogs that keep returning"), `triage` row 4 |
| 4 | No City help found, so know what cleaning does not fix | `municipalProgram` (lede, covers 5, doesNotCover 1 and 4, closing), `buyingGuide.body` (insurance), `secondOpinion` | `limits.cannot` (crack, offset, roots at a joint), `ask.keep`, `definition.scope` |

## City of North Las Vegas location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (homeowner's responsibility for the lateral ends at the connection to the main; Utilities Department provides service) | ADAPTED | Hero intro: fixture drains sit upstream of that line |
| heroForm bullets, request card, form | LEFT OUT | Template supplies its own request form |
| heroForm bullet "Serving the Las Vegas Valley, a newer market for us" | ADAPTED | Section 2, with the longest-running-work sentence from `whoToCall.company` |
| heroForm card note (City Utilities Department contact under "Who to call") | ADAPTED | Section 2, marked as the City's number |
| faqHeading | LEFT OUT | Template sets it |
| keyTakeaways 1 (lateral ends at the connection; blockage and breakage in separate statements) | ADAPTED | Section 1 (blockage statement) |
| keyTakeaways 2 (camera records what and where; City-side video may go to the Utilities Department) | ADAPTED | Section 2 |
| keyTakeaways 3 (no City lateral repair, grant or reimbursement program found) | ADAPTED | Section 4 |
| keyTakeaways jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer p1 (homeowner's responsibility ends at the connection to the main; Utilities Department, Operations division, provides service) | ADAPTED | Section 1 |
| responsibility.answer p2 (blockage: entire pipe to the City's main; breakage: until the line crosses the property boundary; neither point located; shown side by side, not reconciled) | ADAPTED | Section 1 (blockage statement only; breakage is not a drain-cleaning job) |
| responsibility card: The City's main (no City statement of who pays on the City side) | LEFT OUT | No tie; kept in the FAQ |
| responsibility card: The sewer service lateral (the City's own term) | ADAPTED | Section 1 |
| responsibility table: Overall boundary | ADAPTED | Section 1 |
| responsibility table: A blockage | ADAPTED | Section 1 |
| responsibility table: A breakage | LEFT OUT | Not about drain cleaning (cleaning does not fix a breakage) |
| responsibility table: A problem on the City side (plumber's video may go to the Utilities Department; not found: how submitted, what the City does) | ADAPTED | Section 2 (blockage wording), with the "did not find" wording |
| responsibility table: Who to contact | ADAPTED | Section 2 |
| responsibility table: Where an inspection helps (footage records where; does not establish the connection or boundary) | LEFT OUT | Camera inspection is a separate service; the FAQ covers a camera addition |
| responsibility.note (not legal advice; undated City page; no claim about the video path) | LEFT OUT | Same |
| systemExplainer p1 (Utilities Department, Operations division, provides service; Water Reclamation Facility, membrane bioreactor) | ADAPTED | Section 2 (Utilities Department); Water Reclamation Facility LEFT OUT |
| systemExplainer p2 (City main and your connection) | ADAPTED | Section 1 |
| systemExplainer p3 (blockages and breakages in two statements) | ADAPTED | Section 1 (blockage half) |
| systemExplainer p4 (a City-side finding: plumber's video may be submitted) | ADAPTED | Section 2 |
| systemExplainer p5 (pages do not say combined or separate, main age, local conditions; no local cleanout or lateral terms) | ADAPTED | Section 3 (combined/separate, age, local conditions); local terms clause LEFT OUT |
| systemExplainer p6 (nothing on those pages tells the condition of any individual lateral) | LEFT OUT | Trimmed for length; the section 3 closing says the cause has to come from your line |
| systemExplainer card bullets (what a camera can show) | LEFT OUT | Camera is a separate service |
| systemExplainer card closing (distance count; does not establish the City connection or where responsibility ends) | LEFT OUT | Camera sentence; no tie to drain cleaning |
| housingAge section (none on the location page: Census tables not supplied; no housing figure anywhere) | LEFT OUT | No source exists. The City model's section 3 (housing age) is replaced by the "no local evidence" section |
| whoToCall.paragraphs (City Utilities Department for a problem the City may need to review; independent inspection if a plumber points to your lateral) | ADAPTED | Section 2 |
| whoToCall.agency (702-633-1484: customer service and online request, not a sewer emergency line; no City emergency, after-hours number or hours found; the City's number) | ADAPTED | Section 2, the City's number; no emergency or after-hours sentence kept |
| whoToCall.company (phone, hours, newer market) | ADAPTED | Section 2: phone from `marketOperatingDetail`; newer-market sentence; hours LEFT OUT |
| municipalProgram.lede (none found on the water leaks and Water Resources pages; "none found", not "none exists") | ADAPTED | Section 4 |
| municipalProgram.covers 1 (homeowner's responsibility ends at the connection) | ADAPTED | Section 1 |
| municipalProgram.covers 2 (blockage: entire pipe to the City's main) | ADAPTED | Section 1 |
| municipalProgram.covers 3 (breakage: until the line crosses the property boundary) | LEFT OUT | Not about drain cleaning |
| municipalProgram.covers 4 (City-side finding: plumber's video to the Utilities Department) | ADAPTED | Section 2 |
| municipalProgram.covers 5 (third-party plan: Service Line Warranties of America; no price, coverage or claim terms) | ADAPTED | Section 4: same wording |
| municipalProgram.doesNotCover 1 (no City grant, reimbursement, cap, eligibility, application) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 2 (who pays on the City side; damage to a private lateral by City work) | LEFT OUT | No tie; source makes no claim |
| municipalProgram.doesNotCover 3 (how the video is submitted; what the City does after) | ADAPTED | Section 2 (FAQ carries it) |
| municipalProgram.doesNotCover 4 (no City rule on whether lateral work, cleaning or a camera inspection needs a permit or inspection) | ADAPTED | Section 4 (cleaning) |
| municipalProgram.doesNotCover 5 (no City sewer emergency line, after-hours number, hours) | ADAPTED | Section 2 (no emergency line or after-hours number) |
| municipalProgram.doesNotCover 6 (combined or separate system) | ADAPTED | Section 3 |
| municipalProgram.callout (ask the Utilities Department which rules apply to your address; a camera does not replace any City review) | ADAPTED | Section 4 ("ask the Utilities Department") |
| municipalProgram.closing (we do not perform repairs or replacements; nothing says any agency pays for our services) | ADAPTED | Section 4: same |
| secondOpinion ledes, steps, callout, CTA | ADAPTED | Section 4 last sentence (video and findings compared against an estimate); rest LEFT OUT |
| buyingGuide.lede (owner after closing; ask home inspector; sewer scope) | ADAPTED | Fourth problem card |
| buyingGuide.body: no sale rule found; state law outside the page | ADAPTED | Fourth problem card |
| buyingGuide.body: Start New Service request for movers | LEFT OUT | No tie; FAQ carries it |
| buyingGuide.body: most basic homeowner's insurance policies do not cover service laterals | ADAPTED | Section 4 |
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
| Does North Las Vegas require a sewer inspection when a home is sold? | USED | Verbatim |
| How do I start water and sewer service when I buy a home in North Las Vegas? | USED | Verbatim |
| Does the City offer optional coverage for sewer lines? | USED | Verbatim; carries the provider name and the no-connection statement cut from the body |
| What does a sewer camera inspection show? | USED | Verbatim: the drain FAQ has no such question and a camera may be added to a visit |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-drain-cleaning`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Drain Cleaning in North Las Vegas, NV" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, City of North Las Vegas added |
| hero.title | ADAPTED | "Drain Cleaning in North Las Vegas" |
| hero.intro p1 (restores flow by removing grease, roots, debris) | ADAPTED | Hero intro |
| hero.intro p2 (no repair, replacement, lining, excavation, pipe installation) | ADAPTED | Section 4 and FAQ "Does drain cleaning repair a damaged pipe?" |
| hero.scope bullets | LEFT OUT | Template element |
| definition.answer | ADAPTED | `serviceDescription` and hero |
| definition.supporting 1 (drain vs sewer cleaning) | ADAPTED | Section 1 |
| definition.supporting 1 ("drain clearing" is everyday usage) | LEFT OUT | Kept as the FAQ answer |
| definition.supporting 2 (cleaning and camera are separate) | ADAPTED | Section 2 ("a camera can be added ... when it is feasible"), FAQ "Does a camera inspection come with drain cleaning?" |
| definition.scope | ADAPTED | Section 4 |
| signals 1 One slow drain | USED | Problem card 1 |
| signals 2 Several fixtures slow | USED | Problem card 2; section 2 |
| signals 3 Gurgling | ADAPTED | Section 2 bullet; full text in FAQ "Why are my drains gurgling?" |
| signals 4 Clogs that keep returning | USED | Problem card 3; section 3 |
| signals 5 Sewage-like odors | LEFT OUT | FAQ "What causes sewage-like odors?" |
| signals 6 Water or sewage coming up | ADAPTED | Section 2 bullet |
| triage rows 1, 2, 5 | ADAPTED | Section 2 |
| triage row 3 (lower drains back up) | LEFT OUT | Slot-limited; FAQ "How do I know if it is a drain clog or a sewer line problem?" |
| triage row 4 (clogs again after it was cleared) | ADAPTED | Section 3 |
| limits.can (4 items) | LEFT OUT | FAQ answers carry grease, roots, wipes |
| limits.cannot: cracked/broken/collapsed; offset or separated joint; roots at a joint | ADAPTED | Section 4 |
| limits.cannot: public sewer main or its connection | ADAPTED | Section 1 |
| limits.cannot: line the equipment cannot pass | LEFT OUT | No slot |
| limits.callout | LEFT OUT | FAQ "Is hydro jetting safe for every pipe?" and "Does a line that flows again mean the pipe is fine?" |
| process steps 1 to 5 | USED | `process`, verbatim; equipment names only as confirmed (steps 3 and 4) |
| process.prep | LEFT OUT | No slot; FAQ "What should I tell you when I request drain cleaning?" |
| decision | LEFT OUT | FAQ "Can a camera see through standing water?" |
| independent band | ADAPTED | Section 4 last sentence |
| methods table | LEFT OUT | FAQ "What methods are used to clean a drain?" |
| secondaryLimits (camera can/cannot) | LEFT OUT | FAQ answers on cameras |
| ask items: video, written findings | USED | Inclusion 6 |
| ask items: limits, access point, cleaning record, locating | LEFT OUT | FAQ "Will I get a record of the cleaning?", "What does line locating do?" |
| ask.keep | ADAPTED | Section 4 (compare estimates) |
| audiences: Homeowners | LEFT OUT | Problem cards |
| audiences: Home buyers, Home sellers | ADAPTED | Fourth problem card |
| markets (3 hubs) | LEFT OUT | Replaced by `coverage` |
| faqTitle, situations, terms, request.* | LEFT OUT | Template slots; FAQ answers carry the situations and "tell us" items |
| relatedPageIds (4) | ADAPTED | City of North Las Vegas page, this service, sewer cleaning, camera inspection |
| cta | ADAPTED | Rewritten for North Las Vegas |
| inclusions (6 cards) | USED | process and ask sentences; `sl-blocks` |

### Service FAQ (37)

34 USED verbatim, 3 LEFT OUT.

Understanding drain cleaning (6), Symptoms and causes (11), Documentation and locating (3), Maintenance and prevention (4), Real estate (1): all USED.

Limits and cameras (7): Can drain cleaning fix a broken or collapsed pipe? (LEFT OUT: duplicate of "Does drain cleaning repair a damaged pipe?") / Can cleaning remove tree roots? (LEFT OUT: covered by "Can tree roots grow into drain pipes?") / Is hydro jetting safe for every pipe? / Does drain cleaning damage pipes? / Does a camera inspection come with drain cleaning? / Can a camera see through standing water? / Does a line that flows again mean the pipe is fine? (the last five USED)

Requesting service (5): Do you clean drains in St. Louis, San Diego, and Las Vegas? (LEFT OUT: this page is an area page, the question belongs to the hub) / How much does drain cleaning cost? / How long does drain cleaning take? / What should I tell you when I request drain cleaning? / What happens if a camera shows damage? (the last four USED; they say cost and time vary and carry no DEC-088 wording)

Total FAQ on the page: 44 (10 North Las Vegas + 34 service).

## Open questions

- Section 2 says the City "says that if a plumber has inspected the line and determined a blockage is on the City side". The City's own sentence says "breakage or blockage"; the page quotes only the blockage half because it is the half that applies to drain cleaning.
- Section 3 is thin by necessity: the location page has no housing-age data and no local-condition facts, so it rests on the "pages do not say" statements.
