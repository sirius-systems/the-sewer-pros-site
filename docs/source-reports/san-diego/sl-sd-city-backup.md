# Source report: sl-sd-city-backup

Page: Recurring Sewer Backup Diagnosis in San Diego, CA (`sanDiegoCityBackupContent`, `content/pages/sl-sd-city-backup.tsx`).

Sources:
- LOCATION: `sanDiegoCityContent` in `content/pages/san-diego-city.tsx` (City of San Diego facts read 2026-10-03; most City pages are undated, so the page says "confirm with the agency" and states no dates).
- SERVICE: `svc-recurring-sewer-backup-diagnosis` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/recurring-sewer-backup-diagnosis.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | San Diego source | Service source |
|---|---|---|---|
| 1 | A repeat backup: the City's spill line, or your lateral? | `heroForm.card.note` and `whoToCall.agency` (619-515-3525), `responsibility` (answer p1, lateral card, table rows 1-2) | `limits` (footage applies to the segment inspected), FAQ "Is a recurring backup the city's problem or mine?" |
| 2 | Roots and grease are the City's named causes, and a flush will not show which | `systemExplainer` p3 (roots, grease, flush is not an inspection), Council Policy 400-10 via the FAQ | `causes.after` (cleaning does not repair the opening a root came through, a sag, a joint) |
| 3 | If the footage points beyond the property line | `responsibility` (answer p2, note), `systemExplainer` p4 (slope, trees), `card.closing` | `limits` (standing water is an observation; slope is not measured) |
| 4 | No City program to pay for it, so get the evidence first | `municipalProgram` (lede, covers 1 and 3, callout), `secondOpinion` | `independent.note`, `ask.keep`, `definition.scope` |

## City of San Diego location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (independent inspection; owner maintains the lateral to the City main) | ADAPTED | Hero intro: the owner-to-the-main fact tied to this service |
| heroForm bullets (incl. "Serving San Diego since" year), request card, nextSteps, form | LEFT OUT | Template supplies its own form. The founding-year line is not carried onto service pages |
| heroForm.card.note (619-515-3525 for a sewer spill or odor) | ADAPTED | Section 1 and the fourth problem card, marked as the City's number |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level |
| keyTakeaways 1 (City runs its own system; other County guidance does not apply) | ADAPTED | `coverage.intro`: rules differ across San Diego County |
| keyTakeaways 2 (owner maintains the lateral to the connection, even in street, easement or canyon) | ADAPTED | Hero and section 1 |
| keyTakeaways 3 (no City program found; crew installation program suspended; evidence before spending) | ADAPTED | Section 4 |
| keyTakeaways.jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer p1 (owner maintains the lateral to the City main; street, beyond the property line, easement, canyon) | ADAPTED | Section 1 (shortened to "wherever that connection is") |
| responsibility.answer p2 (plumber calls Sewer Emergency Line, Plumber's Report, City investigates within 24 hours) | ADAPTED | Section 3, 24-hour sentence kept |
| responsibility card: the public sewer (municipal and regional systems; address-specific) | LEFT OUT | System description; no tie to this service |
| responsibility card: the lateral line | ADAPTED | Section 1 |
| responsibility table rows 1-2 (who runs or arranges it; who maintains it) | ADAPTED | Section 1 |
| responsibility table row 3 (who to contact first) | ADAPTED | Sections 1 and 3 |
| responsibility table row 4 (24-hour investigation; no program found) | ADAPTED | Sections 3 and 4 |
| responsibility table row 5 (where an inspection helps) | ADAPTED | Sections 1 and 3 |
| responsibility.note (not legal advice; no current City statement of who pays beyond the property line or after City-caused damage) | ADAPTED | Section 3 (same) |
| systemExplainer p1 (two connected systems; City is the authority; other agencies differ) | LEFT OUT | System description; the one-city framing is in `coverage.intro` |
| systemExplainer p2 (combined or separate, age not stated) | LEFT OUT | Not tied to this service (a maintenance draft carried the "age not stated" sentence and it was cut for length) |
| systemExplainer p3 (roots and grease; yearly cleanout flush; a flush is not an inspection) | ADAPTED | Section 2 |
| systemExplainer p4 (EMRA list: easement, angle, slope, depth, trees, driveway) | ADAPTED | Section 3 (slope and trees only), tied to what footage shows |
| systemExplainer p5 (a public rule does not tell you a lateral's condition; only an inspection can) | ADAPTED | Section 2 (a flush cannot tell why a backup returned) |
| systemExplainer.card bullets (what a camera can show) | LEFT OUT | Camera is a separate service; the service page carries its can and cannot lists |
| systemExplainer.card.closing (distance count; does not establish a property line; City process for a break) | ADAPTED | Section 3 |
| whoToCall paragraphs (spill line vs. plumber's report process; independent inspection helps) | ADAPTED | Sections 1 and 3 |
| whoToCall.agency (619-515-3525; 619-515-3500 and its hours; not labelled 24-hour) | ADAPTED | 3525 in section 1 and the fourth card, 3500 in section 4, both the City's; hours LEFT OUT |
| whoToCall.secondaryAgency (Development Services 619-446-5300; Records Section 619-446-5200) | LEFT OUT | Not tied; the FAQ carries both numbers |
| whoToCall.company (phone, hours) | LEFT OUT | No company phone, as the Las Vegas model |
| municipalProgram.lede (none found; which City pages were checked) | ADAPTED | Section 4 |
| municipalProgram.covers 1 (crew lateral-installation program currently suspended) | ADAPTED | Section 4 |
| municipalProgram.covers 2 (public-improvement permit; Class A licensed contractor) | LEFT OUT | About lateral installation and repair, which this page does not offer |
| municipalProgram.covers 3 (no fund, cap or application found; confirm at 619-515-3500) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 1 (Right-of-Way Permit for public right-of-way or easement work) | LEFT OUT | Repair and construction permit detail; the FAQ carries it |
| municipalProgram.doesNotCover 2 (inspections after trenching and final inspection) | LEFT OUT | Construction detail; the FAQ carries it |
| municipalProgram.doesNotCover 3 (licensed contractor can make lateral connections) | LEFT OUT | Construction detail; the FAQ carries it |
| municipalProgram.doesNotCover 4 (Municipal Code: City approval of plans for public sewer, lateral or house connection work) | LEFT OUT | Construction detail; the FAQ carries it |
| municipalProgram.doesNotCover 5 (no City page on whether work confined to private property needs a permit; Development Services 619-446-5242) | LEFT OUT | Cut for length; the FAQ carries it |
| municipalProgram.callout (plan on arranging inspection, cleaning and repair yourself; no claim the City accepts an outside report; we do not repair) | ADAPTED | Section 4: plan on arranging it yourself, we do not repair |
| municipalProgram.closing (link to the camera inspection page) | LEFT OUT | Related links cover it |
| secondOpinion (ledes, steps, callout, CTA) | ADAPTED | Section 4 (compare estimates; further evaluation outside our scope); rest LEFT OUT |
| buyingGuide.lede (City guidance to buyers: licensed-plumber report; sewer scope is separate from a home inspection) | LEFT OUT | Not tied to a recurring backup |
| buyingGuide.body (no City sale-time rule found; state rules outside; connection in street, easement or canyon; Development Services; no diagrams of private lines) | LEFT OUT | Not tied |
| buyingGuide links, CTA, agents block | LEFT OUT | Hub elements |
| nearbyAreas (six other San Diego-area locations; market hub link) | ADAPTED | `coverage`: the six other locations; the "All San Diego service areas" market link LEFT OUT |
| finalCta title / paragraphs / bullets | ADAPTED | Title becomes `cta.title`; paragraphs and bullets LEFT OUT, replaced by `cta.body` |
| sources (9 links, lastReviewed, closingNote) | USED | `sources: sanDiegoCityContent.sources` |
| (no housingAge and no reviewBand on the San Diego location page) | n/a | No Census figure is stated on this page |

### San Diego FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for a sewer lateral in the City of San Diego? | USED | Verbatim |
| What number do I call for a sewer spill or sewer odor in San Diego? | USED | Verbatim |
| What happens if a plumber finds a break or collapse beyond the property line? | USED | Verbatim |
| Does the City of San Diego offer help with homeowner lateral costs? | USED | Verbatim |
| Is a permit required for sewer lateral work, and who can do the work? | USED | Verbatim |
| Should I check the sewer lateral before buying a San Diego home? | USED | Verbatim |
| Can the City tell me where my lateral connects to the main? | USED | Verbatim; carries the Development Services numbers cut from the body |
| What is an EMRA for a San Diego sewer lateral? | USED | Verbatim |
| What does a sewer camera inspection show? | LEFT OUT | The service page answers it in full as "What can a sewer camera see?" |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-recurring-sewer-backup-diagnosis`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Recurring Sewer Backup Diagnosis in San Diego, CA" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, City of San Diego added |
| hero.title, hero.intro | ADAPTED | Rewritten for San Diego |
| hero.scope, hero.cardIntro | LEFT OUT | Template elements |
| definition.answer, supporting 1-2 | ADAPTED | `serviceDescription`, hero, and section 3 (footage documents, does not repair) |
| definition.scope | ADAPTED | Section 4 |
| signals 1 The same clog returns, 2 Several fixtures drain slowly, 6 Wastewater at a cleanout or outside drain | USED | Problem cards (`sl-blocks`) |
| signals 3, 4, 5, 7 | LEFT OUT | Slot-limited; FAQ answers carry them |
| causes (7 items) | ADAPTED | Section 2 (roots, grease) and section 3 (sag); the rest LEFT OUT |
| causes.after (cleaning does not repair) | ADAPTED | Section 2 |
| limits.can (8 items) | LEFT OUT | FAQ "What can a sewer camera see?" |
| limits.cannot: slope; standing water is not a true sag | ADAPTED | Section 3 |
| limits.cannot: other items | LEFT OUT | FAQ answers |
| process steps 1 to 6 | USED | `process`, verbatim |
| process.prep | LEFT OUT | No slot; FAQ "Where does the camera go in? Do I need a cleanout?" |
| decision (table, where to start, hydro jetting aside) | LEFT OUT | FAQ "What is the difference between drain cleaning, hydro jetting, and a camera inspection?" |
| independent band + note | ADAPTED | Section 4 (further evaluation outside our scope; compare estimates) |
| ask items, ask.keep | ADAPTED | Inclusions 4-5; section 4 (keep the video) |
| situations, audiences, markets, request.* | LEFT OUT | Template slots; `coverage` replaces markets |
| relatedPageIds | ADAPTED | City of San Diego page, this service, camera inspection, cleaning with camera |
| cta | ADAPTED | Rewritten for San Diego |
| inclusions (6 cards) | USED | `sl-blocks/recurring-sewer-backup-diagnosis.ts` |

### Service FAQ (29)

29 USED verbatim, none LEFT OUT. "How long does it take, and how much does it cost?" and "Can you come the same day, and is this emergency service?" are carried as the service page has them (DEC-088 wording; DEC-139).

Total FAQ on the page: 38 (9 San Diego + 29 service).
