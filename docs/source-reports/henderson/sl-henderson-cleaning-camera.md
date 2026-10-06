# Source report: sl-henderson-cleaning-camera

Page: Sewer Cleaning & Camera Inspection in Henderson, NV (`hendersonCleaningCameraContent`, `content/pages/sl-henderson-cleaning-camera.tsx`).

Sources:
- LOCATION: `hendersonContent` in `content/pages/las-vegas-henderson.tsx` (City facts read 2026-10-04, ACS 2020-2024).
- SERVICE: `svc-sewer-cleaning-camera-inspection` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/sewer-cleaning-camera-inspection.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | Henderson source | Service source |
|---|---|---|---|
| 1 | Where cleaning is yours in Henderson, and where it is the City's | `responsibility` (answer, City main card, table), `systemExplainer` (main blockages), `whoToCall` | `definition` (cleaning does not show cause), `limits.cannot` (footage does not establish the connection) |
| 2 | What the cleaning changes, and what the camera can confirm | `responsibility.answer` p2 (periodic professional inspection duty), `municipalProgram.lede` and `closing` ("none found", no repairs by us), `keyTakeaways` 2 and 3 | `limits.callout`, `decision`, `process.steps` 3 and 5, `ask.keep` (compare against estimates) |
| 3 | A newer Henderson home does not answer whether the line is clear | `housingAge` (median 2001, 82.1% 1990 or later, 60.2% / 85,084 of 141,297 from 1990 to 2009), `systemExplainer` last paragraph | `signals` ("Clogs that keep coming back") |
| 4 | Who to call about a blockage, and where a visit fits | `whoToCall` (24-hour call center, Contact Henderson, Public Works), `municipalProgram.doesNotCover` (no permit statement for cleaning), `whoToCall.company` | `process` (a visit is how a lateral is cleared and documented) |

## Henderson location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description (156 characters) |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (responsibility from the connection) | ADAPTED | Hero intro, plus the City cleaning blockages in its own main |
| heroForm bullets, card, form | LEFT OUT | The service + location template supplies its own request form |
| heroForm "newer market for us" line | ADAPTED | Section 4 (also in `whoToCall.company`) |
| faqHeading | LEFT OUT | Template sets the FAQ heading |
| keyTakeaways 1 (owner side pays; City side and main blockages) | ADAPTED | Section 1 |
| keyTakeaways 2 (periodic professional inspection) | ADAPTED | Section 2 |
| keyTakeaways 3 (no City lateral program found) | ADAPTED | Section 2 |
| keyTakeaways jumpNav | LEFT OUT | This template has no on-page anchors |
| serviceCards (9 cards) | LEFT OUT | Hub grid; this page IS the cleaning-with-camera card's page; related links cover siblings |
| serviceCards helpBar | LEFT OUT | Hub element |
| responsibility.answer p1 (connection, repairs and costs on each side) | ADAPTED | Section 1 |
| responsibility.answer p2 (cleanup costs, periodic inspection duty, camera shows where) | ADAPTED | Sections 1 and 2 |
| responsibility card: City's sewer main | ADAPTED | Section 1 |
| responsibility card: sewer service lateral | LEFT OUT | "From the connection to your home" is used in section 2, the card text itself is duplicative |
| responsibility table: Who maintains it | ADAPTED | Section 1 |
| responsibility table: Where it ends | ADAPTED | Section 1 |
| responsibility table: Who to contact first | ADAPTED | Section 4 |
| responsibility table: What help exists | ADAPTED | Section 2 ("none found") |
| responsibility table: Where an inspection helps | ADAPTED | Section 1 (footage records where along the line; does not establish the connection) |
| responsibility.note (not legal advice, laterals page undated) | ADAPTED | "Confirm that with the City" in section 1; no legal claim made |
| systemExplainer p1 (Utility Services department) | LEFT OUT | Department role does not change what cleaning or a camera does |
| systemExplainer p2 (City main and connection) | ADAPTED | Section 1 |
| systemExplainer p3 (main blockages, City pays) | ADAPTED | Sections 1 and 4 |
| systemExplainer p4 (septic properties, AB 220) | LEFT OUT | About connecting septic parcels, not cleaning an existing line |
| systemExplainer p5 (combined/separate, age, treatment unknown) | LEFT OUT | "We make no claim" items with no tie to this service |
| systemExplainer p6 (nothing tells a lateral's condition) | ADAPTED | Section 3 |
| systemExplainer card bullets (6 things a camera can show) | LEFT OUT | The service page's FAQ answers "what does a camera show" in full, with limits |
| systemExplainer card closing (distance count; does not establish the connection) | ADAPTED | Section 1 |
| housingAge para (median 2001, margin 1 year) | ADAPTED | Section 3 (median kept; the margin of error is left out) |
| housingAge 1990s 41,694 and 2000s 43,390 units | LEFT OUT | Combined 1990 to 2009 figure used instead |
| housingAge 60.2%, 82.1% | USED | Section 3 |
| housingAge 3.1% before 1970 | LEFT OUT | Section 3 argues about newer homes; the old-home share is in the FAQ |
| housingAge table (5 rows) | ADAPTED | 1990 to 2009 row (85,084 of 141,297) used in section 3; other rows LEFT OUT |
| housingAge sourceNote (table numbers, arithmetic note, margin of error) | ADAPTED | Attribution (ACS 2020-2024 5-year, Henderson city, our arithmetic) kept in section 3; table ids and total margin LEFT OUT |
| housingAge closing (year built does not tell the lateral's condition) | ADAPTED | Section 3 |
| housingAge "Census place may not match every mailing address" | LEFT OUT | Caveat belongs with the full table, which this page does not carry |
| whoToCall.paragraphs | ADAPTED | Section 4 |
| whoToCall.agency (call center, 702-267-5900, Contact Henderson) | ADAPTED | Section 4, marked as the City's number |
| whoToCall.secondaryAgency (Public Works, 702-267-3600) | ADAPTED | Section 4, marked as the City's number |
| whoToCall.company (company phone, hours, newer market) | ADAPTED | Section 4: phone from `marketOperatingDetail`, newer-market sentence; hours LEFT OUT (data string has an en dash and the page makes no hours claim) |
| municipalProgram.lede ("none found") | ADAPTED | Section 2 |
| municipalProgram.covers 1 (responsibility starts at connection) | ADAPTED | Section 1 |
| municipalProgram.covers 2 (City cleans and pays for main) | ADAPTED | Section 1 |
| municipalProgram.covers 3 (owner pays cleanup and repair on its side) | ADAPTED | Section 1 |
| municipalProgram.covers 4 (periodic professional inspection) | ADAPTED | Section 2 |
| municipalProgram.covers 5 (right-of-way permit, 702-267-3600) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 1 (no grant, reimbursement, application) | ADAPTED | Section 2 |
| municipalProgram.doesNotCover 2 (damage to a lateral from City work) | LEFT OUT | No tie to cleaning or camera; the source says it makes no further claim |
| municipalProgram.doesNotCover 3 (no permit statement for cleaning or camera) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 4 (no lateral inspection program) | LEFT OUT | Section 2 uses the owner-duty wording instead |
| municipalProgram.doesNotCover 5 (no sewage-backup procedure) | LEFT OUT | Only the emergency and portal contacts are used |
| municipalProgram.doesNotCover 6 (combined/separate, age) | LEFT OUT | No tie to this service |
| municipalProgram.whoCanApply | LEFT OUT | Covered by "Confirm that with the City" and the FAQ |
| municipalProgram.callout | ADAPTED | Sections 1 and 4 ("confirm", "ask Public Works") |
| municipalProgram.closing (no repairs, no reimbursement arranged) | ADAPTED | Section 2 ("does not cover repairs, which we do not perform") |
| secondOpinion ledes, 3 steps, callout, CTA | LEFT OUT | The service template carries its own independent band; section 2 adds the one tie (compare footage and findings against an estimate) |
| buyingGuide.lede | ADAPTED | Fourth problem card |
| buyingGuide.body: no City sale rule found | ADAPTED | Fourth problem card |
| buyingGuide.body: periodic inspection can be asked for in the transaction | LEFT OUT | Card has room for one idea; the duty is in section 2 |
| buyingGuide.body: Customer Portal / transfer process | LEFT OUT | Kept as the FAQ answer |
| buyingGuide.body: locating shows where the line runs | LEFT OUT | Locating is a separate service, covered by the service FAQ |
| buyingGuide links, CTA, agents block | LEFT OUT | Hub elements; audience links belong on the audience pages |
| nearbyAreas (3 areas + market hub) | ADAPTED | `coverage` block, same three areas as the pilot |
| finalCta title | ADAPTED | `cta.title` |
| finalCta paragraphs and bullets | LEFT OUT | Replaced by the page-specific `cta.body` |
| sources (7 links, lastReviewed, closingNote) | LEFT OUT | No sources block in this template; every City and Census attribution is stated inline. Open item: confirm the template should link them |

### Henderson FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Where does my responsibility start in Henderson, and who maintains the City main? | USED | Verbatim |
| Does the City pay if a blockage is in the City sewer main? | USED | Verbatim |
| Does the City of Henderson help pay for lateral repairs? | USED | Verbatim |
| My house is only twenty years old. Is an inspection worth it? | USED | Verbatim |
| Who do I call about a sewer emergency in Henderson? | USED | Verbatim |
| Does lateral work in the public right-of-way need a permit in Henderson? | USED | Verbatim |
| Does Henderson require a sewer inspection when a home is sold? | USED | Verbatim |
| How do I transfer water and sewer service when I buy a home in Henderson? | USED | Verbatim; kept because the service page serves buyers |
| What does a sewer camera inspection show? | LEFT OUT | Same question on the service page with the fuller answer (adds what a camera does not show); the service answer is used |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-sewer-cleaning-camera-inspection`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Page title with Henderson added |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same two-service definition, Henderson added |
| hero.title | ADAPTED | "Sewer Cleaning and Camera Inspection in Henderson" |
| hero.intro p1 (clear what can be cleared; camera before, after or both) | ADAPTED | Hero intro |
| hero.intro p2 (no repair, replacement, lining, excavation, pipe installation) | ADAPTED | Section 2 (no repairs) and the FAQ "Do you repair or replace sewer lines?"; full scope note is in the template's request block |
| hero.scope bullets (3) | LEFT OUT | Template element |
| definition.answer | ADAPTED | `serviceDescription` |
| definition.supporting 1 (camera before, after or both) | USED | Hero intro |
| definition.supporting 2 (private-property lines only, not public mains) | ADAPTED | Section 1 (the City's main is the City's) |
| signals 1 Several fixtures slow | USED | Problem card 1 (verbatim) |
| signals 2 Gurgling | LEFT OUT | Four problem slots only; covered by the FAQ "What are signs I may need cleaning or a camera inspection?" |
| signals 3 Clogs that keep coming back | USED | Problem card 2; also section 3 |
| signals 4 Water rising in a floor drain, tub, toilet | USED | Problem card 3 |
| signals 5 Sewage-like odor | LEFT OUT | Slots; FAQ covers the signs |
| signals 6 Water at a cleanout | LEFT OUT | Slots; FAQ covers the signs |
| signals.note (drain cleaning may fit one fixture) | LEFT OUT | Points to the drain cleaning page; no room, and the drain page is a separate service |
| limits.intro | LEFT OUT | Visible-conditions framing is in the FAQ answer |
| limits.can (9 items) | LEFT OUT | Service FAQ "What does a sewer camera inspection show?" and "Can a camera find roots, cracks, or a collapsed pipe?" carry them |
| limits.cannot: below the waterline | ADAPTED | Fourth problem card (a camera cannot see under water) |
| limits.cannot: sections not reached; soil; wall thickness; slope; roots outside; leaks | LEFT OUT | Carried by FAQ answers (clear video, leak, structural, blockage) |
| limits.callout (flows again is not proof) | ADAPTED | Section 2 |
| limits.related (locating) | LEFT OUT | FAQ "Can you locate my sewer line, and how deep is it?" |
| process eyebrow/title/intro | LEFT OUT | Template renders its own heading; "time depends" is in the FAQ |
| process steps 1 to 5 (entry point, assess, view, clean, view again) | USED | `process`, verbatim; equipment names only as the owner confirmed (step 3) |
| process.prep (3 items) | LEFT OUT | No slot in this template; the FAQ covers the entry point |
| decision.answer (no required order) | ADAPTED | Hero, fourth problem card and the FAQ "Does the camera or the cleaning come first?" |
| decision.list (5 cases) | LEFT OUT | Template slot absent |
| decision.links | LEFT OUT | Related pages cover them |
| comparison table (7 rows) | LEFT OUT | Template slot absent; related pages link the siblings |
| ask.intro, items 1-2 (video, written findings) | USED | Inclusion 6 |
| ask items 3-5 (entry point, cleaning record, coding and locating) | LEFT OUT | Slot; FAQ answers carry entry point, locating and time |
| ask.keep (ask another company to review the video; observation is not a repair recommendation) | ADAPTED | Section 2 (compare footage and findings against an estimate) |
| audiences: Homeowners | LEFT OUT | Covered by problem cards |
| audiences: Home buyers | ADAPTED | Fourth problem card |
| markets (3 hubs) | LEFT OUT | Replaced by the Las Vegas Valley `coverage` block |
| faqTitle | LEFT OUT | Template sets it |
| relatedPageIds (8) | ADAPTED | Four used: Henderson page, this service, camera inspection, sewer cleaning |
| relatedDescriptions | LEFT OUT | Template slot absent |
| request.intro, scopeNote, submitLabel | LEFT OUT | Template request block supplies scope |
| cta | ADAPTED | `cta` rewritten for Henderson |
| inclusions (6 cards) | USED | process and ask sentences; `sl-blocks` |

### Service FAQ (21)

All 21 are USED, verbatim, in the service's own groups: What are sewer cleaning and camera inspection? / What does a sewer camera inspection show? / Does the camera or the cleaning come first? / What is the difference between hydro jetting and cable cleaning? / Does a clear video mean my line is healthy? / Can a camera find a leak? / Can a camera tell whether my pipe is structurally sound? / Can a camera find roots, cracks, or a collapsed pipe? / What if the camera cannot get past a blockage? / Does hydro jetting damage pipes? / What access point do you use, and can you inspect without an outside cleanout? / Do I get a copy of the video? / Will I get written findings? / Can you locate my sewer line, and how deep is it? / How long does it take, and how much does it cost? / What are signs I may need cleaning or a camera inspection? / Should I have the sewer line looked at before buying a house? / Is a sewer scope part of a standard home inspection? / How often should a line be cleaned or inspected? / Can I flush "flushable" wipes? / Will a chemical drain cleaner solve a sewer backup?

Total FAQ on the page: 30 (9 Henderson + 21 service).
