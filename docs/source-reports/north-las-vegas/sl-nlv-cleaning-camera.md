# Source report: sl-nlv-cleaning-camera

Page: Sewer Cleaning & Camera Inspection in North Las Vegas, NV (`northLasVegasCleaningCameraContent`, `content/pages/sl-nlv-cleaning-camera.tsx`).

Model: `sl-lv-city-cleaning-camera` (City of Las Vegas, owner-approved). Same structure, recipe and FAQ handling; North Las Vegas facts swapped in. No City of Las Vegas fact is carried over.

Sources:
- LOCATION: `northLasVegasContent` in `content/pages/las-vegas-north-las-vegas.tsx` (City of North Las Vegas facts read 2026-10-04; none of the City pages shows a date; no Census housing data was supplied, so there is no housing-age section).
- SERVICE: `svc-sewer-cleaning-camera-inspection` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/sewer-cleaning-camera-inspection.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | North Las Vegas source | Service source |
|---|---|---|---|
| 1 | Cleaning clears a blockage, and the City words a blockage and a breakage differently | `responsibility` (answer p1-p2, lateral card, table rows 1-3 and 6), `systemExplainer` p2-p3 and card closing, `municipalProgram.covers` 1-3 | `definition` (cleaning does not show cause), `limits.cannot` (footage does not establish the connection) |
| 2 | If a plumber finds the problem on the City side, the City says video may go to it | `responsibility` table row 4, `systemExplainer` p4, `whoToCall` (paragraphs, agency, company), `municipalProgram.covers` 4 and `doesNotCover` 3 | `process` steps 3 and 5 (video and written findings), `ask.items` 1-2 |
| 3 | No City page says what clogs North Las Vegas lines, so the footage is your evidence | `systemExplainer` p5-p6, `municipalProgram.doesNotCover` 6 | `signals` ("Clogs that keep coming back") |
| 4 | No City repair program found, so the footage is what you compare against | `municipalProgram` (lede, covers 5, doesNotCover 1 and 4), `buyingGuide.body` (insurance), `secondOpinion` | `limits.callout`, `ask.keep` (compare against estimates) |

## City of North Las Vegas location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (homeowner's responsibility for the lateral ends at the connection to the main; Utilities Department provides service) | ADAPTED | Hero intro: a visit works on the lateral side of the connection |
| heroForm bullets, request card, form | LEFT OUT | Template supplies its own request form |
| heroForm bullet "Serving the Las Vegas Valley, a newer market for us" | ADAPTED | Section 2, with the longest-running-work sentence from `whoToCall.company` |
| heroForm card note (City Utilities Department contact under "Who to call") | ADAPTED | Section 2, marked as the City's number |
| faqHeading | LEFT OUT | Template sets it |
| keyTakeaways 1 (lateral ends at the connection; blockage and breakage in separate statements) | ADAPTED | Section 1 |
| keyTakeaways 2 (camera records what and where; City-side video may go to the Utilities Department) | ADAPTED | Section 2 |
| keyTakeaways 3 (no City lateral repair, grant or reimbursement program found) | ADAPTED | Section 4 |
| keyTakeaways jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer p1 (homeowner's responsibility ends at the connection to the main; Utilities Department, Operations division, provides service) | ADAPTED | Section 1 (Utilities Department named in section 2) |
| responsibility.answer p2 (blockage: entire pipe to the City's main; breakage: until the line crosses the property boundary; neither point located; shown side by side, not reconciled) | ADAPTED | Section 1, both statements, not reconciled; camera does not establish either point |
| responsibility card: The City's main (no City statement of who pays on the City side) | LEFT OUT | No tie; "no claim" wording kept in the FAQ |
| responsibility card: The sewer service lateral (the City's own term) | ADAPTED | Section 1 (term "sewer service lateral" kept) |
| responsibility table: Overall boundary | ADAPTED | Section 1 |
| responsibility table: A blockage | ADAPTED | Section 1 |
| responsibility table: A breakage | ADAPTED | Section 1 |
| responsibility table: A problem on the City side (plumber's video may go to the Utilities Department; not found: how submitted, what the City does) | ADAPTED | Section 2, with the "did not find" wording |
| responsibility table: Who to contact | ADAPTED | Section 2 |
| responsibility table: Where an inspection helps (footage records where; does not establish the connection or boundary) | ADAPTED | Section 1 (footage records where along the line; does not establish the connection or the boundary) |
| responsibility.note (not legal advice; undated City page; no claim about the video path) | LEFT OUT | "None found", "confirm" and "no claim" wording carry the caveat. Open item: undated City pages are not stated on this page |
| systemExplainer p1 (Utilities Department, Operations division, provides service; Water Reclamation Facility, membrane bioreactor) | ADAPTED | Section 2 (Utilities Department); the Water Reclamation Facility is LEFT OUT, no tie |
| systemExplainer p2 (City main and your connection) | ADAPTED | Section 1 |
| systemExplainer p3 (blockages and breakages in two statements) | ADAPTED | Section 1 |
| systemExplainer p4 (a City-side finding: plumber's video may be submitted) | ADAPTED | Section 2 |
| systemExplainer p5 (pages do not say combined or separate, main age, local conditions; no local cleanout or lateral terms) | ADAPTED | Section 3 (combined/separate, age, local conditions); local terms clause LEFT OUT |
| systemExplainer p6 (nothing on those pages tells the condition of any individual lateral) | ADAPTED | Section 3 (only an inspection of your line can show its condition) |
| systemExplainer card bullets (what a camera can show) | LEFT OUT | The service FAQ answers this in full with limits |
| systemExplainer card closing (distance count; does not establish the City connection or where responsibility ends) | ADAPTED | Section 1 |
| housingAge section (none on the location page: Census tables not supplied; no housing figure anywhere) | LEFT OUT | No source exists. The City model's section 3 (housing age) is replaced by the "no local evidence" section |
| whoToCall.paragraphs (City Utilities Department for a problem the City may need to review; independent inspection if a plumber points to your lateral) | ADAPTED | Section 2 |
| whoToCall.agency (702-633-1484: customer service and online request, not a sewer emergency line; no City emergency, after-hours number or hours found; the City's number) | ADAPTED | Section 2, the City's number; "not a sewer emergency line" kept; "no after-hours" sentence LEFT OUT (FAQ carries it) |
| whoToCall.company (phone, hours, newer market) | ADAPTED | Section 2: phone from `marketOperatingDetail`; newer-market sentence; hours LEFT OUT (data string has a dash, no hours claim) |
| municipalProgram.lede (none found on the water leaks and Water Resources pages; "none found", not "none exists") | ADAPTED | Section 4 |
| municipalProgram.covers 1 (homeowner's responsibility ends at the connection) | ADAPTED | Section 1 |
| municipalProgram.covers 2 (blockage: entire pipe to the City's main) | ADAPTED | Section 1 |
| municipalProgram.covers 3 (breakage: until the line crosses the property boundary) | ADAPTED | Section 1 |
| municipalProgram.covers 4 (City-side finding: plumber's video to the Utilities Department) | ADAPTED | Section 2 |
| municipalProgram.covers 5 (third-party plan: Service Line Warranties of America; no price, coverage or claim terms) | ADAPTED | Section 4: "a separate company", optional insurance coverage, a product you buy; provider name, no-connection and no-recommendation sentences LEFT OUT (FAQ carries them) |
| municipalProgram.doesNotCover 1 (no City grant, reimbursement, cap, eligibility, application) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 2 (who pays on the City side; damage to a private lateral by City work) | LEFT OUT | No tie; source makes no claim |
| municipalProgram.doesNotCover 3 (how the video is submitted; what the City does after) | ADAPTED | Section 2 |
| municipalProgram.doesNotCover 4 (no City rule on whether lateral work, cleaning or a camera inspection needs a permit or inspection) | ADAPTED | Section 4 (cleaning or a camera inspection) |
| municipalProgram.doesNotCover 5 (no City sewer emergency line, after-hours number, hours) | LEFT OUT | Cut for length; FAQ carries it |
| municipalProgram.doesNotCover 6 (combined or separate system) | ADAPTED | Section 3 |
| municipalProgram.callout (ask the Utilities Department which rules apply to your address; a camera does not replace any City review) | ADAPTED | Section 4 ("ask the Utilities Department" for the permit question) |
| municipalProgram.closing (we do not perform repairs or replacements; nothing says any agency pays for our services) | ADAPTED | Section 4: "We do not perform repairs or replacements"; the agency-pays sentence LEFT OUT |
| secondOpinion ledes, steps, callout, CTA | ADAPTED | Section 4 last sentence (footage and findings compared against an estimate); rest LEFT OUT, template carries its own independent band |
| buyingGuide.lede (owner after closing; ask home inspector; sewer scope) | ADAPTED | Fourth problem card |
| buyingGuide.body: no sale rule found; state law outside the page | ADAPTED | Fourth problem card |
| buyingGuide.body: Start New Service request for movers | LEFT OUT | No tie; FAQ carries it |
| buyingGuide.body: most basic homeowner's insurance policies do not cover service laterals | ADAPTED | Section 4 |
| buyingGuide links, CTA, agents block | LEFT OUT | Hub elements |
| nearbyAreas (Las Vegas, Henderson, Summerlin, market hub) | ADAPTED | `coverage`: three areas; market hub left out as on the City and Henderson pages |
| finalCta title | ADAPTED | `cta.title` |
| finalCta paragraphs, bullets | LEFT OUT | Replaced by `cta.body` |
| sources (3 City links, lastReviewed 2026-10-04, closingNote) | USED | Passed through as `northLasVegasContent.sources`. Open item: confirm the template renders them |

### North Las Vegas FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for the sewer lateral in North Las Vegas? | USED | Verbatim |
| Does North Las Vegas treat a blockage the same as a breakage? | USED | Verbatim |
| What should I do if a plumber says the problem is on the City side? | USED | Verbatim; carries the City's number and the no-claim wording |
| Does the City of North Las Vegas help pay for lateral repairs? | USED | Verbatim |
| Who do I call about a sewer problem in North Las Vegas? | USED | Verbatim; carries the no emergency line, after-hours or hours note |
| Does North Las Vegas require a sewer inspection when a home is sold? | USED | Verbatim |
| How do I start water and sewer service when I buy a home in North Las Vegas? | USED | Verbatim |
| Does the City offer optional coverage for sewer lines? | USED | Verbatim; carries the provider name and the no-connection statement cut from the body |
| What does a sewer camera inspection show? | LEFT OUT | The service page asks the same question with the fuller answer (adds what a camera does not show), so the service answer is used |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-sewer-cleaning-camera-inspection`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Sewer Cleaning & Camera Inspection in North Las Vegas, NV" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same two-service definition, City of North Las Vegas added |
| hero.title | ADAPTED | "Sewer Cleaning and Camera Inspection in North Las Vegas" |
| hero.intro p1 (clear what can be cleared; camera before, after or both) | ADAPTED | Hero intro |
| hero.intro p2 (no repair, replacement, lining, excavation, pipe installation) | ADAPTED | Section 4 ("We do not perform repairs or replacements") and the FAQ |
| hero.scope bullets (3) | LEFT OUT | Template element |
| definition.answer | ADAPTED | `serviceDescription` |
| definition.supporting 1 (camera before, after or both) | USED | Hero intro |
| definition.supporting 2 (private-property lines only, not public mains) | ADAPTED | Hero intro ("the lateral side of that connection") |
| signals 1 Several fixtures slow | USED | Problem card 1 (via `sl-blocks`) |
| signals 2 Gurgling | LEFT OUT | Four problem slots; FAQ "What are signs I may need cleaning or a camera inspection?" |
| signals 3 Clogs that keep coming back | USED | Problem card 2; section 3 |
| signals 4 Water rising in a floor drain, tub, toilet | USED | Problem card 3 |
| signals 5 Sewage-like odor, 6 Water at a cleanout | LEFT OUT | Slots; FAQ covers the signs |
| signals.note (drain cleaning may fit one fixture) | LEFT OUT | Points to a separate service |
| limits.intro, limits.can (9 items) | LEFT OUT | Service FAQ "What does a sewer camera inspection show?" and "Can a camera find roots, cracks, or a collapsed pipe?" carry them |
| limits.cannot: below the waterline | ADAPTED | Fourth problem card |
| limits.cannot: other items | LEFT OUT | FAQ answers (clear video, leak, structural, blockage) |
| limits.callout (flows again is not proof) | ADAPTED | Section 4 |
| limits.related (locating) | LEFT OUT | FAQ "Can you locate my sewer line, and how deep is it?" |
| process eyebrow/title/intro | LEFT OUT | Template renders its own heading |
| process steps 1 to 5 | USED | `process`, verbatim; equipment names only as the owner confirmed (step 3) |
| process.prep (3 items) | LEFT OUT | No slot; FAQ covers the entry point |
| decision.answer (no required order) | ADAPTED | Hero, fourth problem card, FAQ "Does the camera or the cleaning come first?" |
| decision.list, decision.links | LEFT OUT | No slot |
| comparison table (7 rows) | LEFT OUT | No slot; related pages link the siblings |
| ask.intro, items 1-2 (video, written findings) | USED | Inclusion 6; section 2 |
| ask items 3-5 | LEFT OUT | Slot; FAQ answers carry entry point, locating and time |
| ask.keep (ask another company to review the video) | ADAPTED | Section 4 (compare footage and findings against an estimate) |
| audiences: Homeowners | LEFT OUT | Problem cards |
| audiences: Home buyers | ADAPTED | Fourth problem card |
| markets (3 hubs) | LEFT OUT | Replaced by `coverage` |
| faqTitle | LEFT OUT | Template sets it |
| relatedPageIds (8) | ADAPTED | Four used: City of North Las Vegas page, this service, camera inspection, sewer cleaning |
| relatedDescriptions, request.* | LEFT OUT | Template slots |
| cta | ADAPTED | Rewritten for North Las Vegas |
| inclusions (6 cards) | USED | process and ask sentences; `sl-blocks` |

### Service FAQ (21)

All 21 are USED, verbatim: What are sewer cleaning and camera inspection? / What does a sewer camera inspection show? / Does the camera or the cleaning come first? / What is the difference between hydro jetting and cable cleaning? / Does a clear video mean my line is healthy? / Can a camera find a leak? / Can a camera tell whether my pipe is structurally sound? / Can a camera find roots, cracks, or a collapsed pipe? / What if the camera cannot get past a blockage? / Does hydro jetting damage pipes? / What access point do you use, and can you inspect without an outside cleanout? / Do I get a copy of the video? / Will I get written findings? / Can you locate my sewer line, and how deep is it? / How long does it take, and how much does it cost? / What are signs I may need cleaning or a camera inspection? / Should I have the sewer line looked at before buying a house? / Is a sewer scope part of a standard home inspection? / How often should a line be cleaned or inspected? / Can I flush "flushable" wipes? / Will a chemical drain cleaner solve a sewer backup?

None of these carries the DEC-088 free-estimate or same-day wording (those answers belong to the hydro jetting and backup service pages), so nothing needed carrying here. The cost/time answer says time and cost vary.

Total FAQ on the page: 30 (9 North Las Vegas + 21 service).

## Open questions

- The City side of the video path (section 2) says "we make no claim that our video meets any City requirement". The location page never says what the City accepts, so the copy stops there.
- Section 4 mentions the optional insurance plan without naming the provider (as the City model does). The provider name is in the FAQ answer "Does the City offer optional coverage for sewer lines?".
