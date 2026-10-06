# Source report: sl-sd-city-maintenance

Page: Preventative Sewer Maintenance in San Diego, CA (`sanDiegoCityMaintenanceContent`, `content/pages/sl-sd-city-maintenance.tsx`).

Sources:
- LOCATION: `sanDiegoCityContent` in `content/pages/san-diego-city.tsx` (City of San Diego facts read 2026-10-03; most City pages are undated, so the page says "confirm with the agency" and states no dates).
- SERVICE: `svc-preventative-sewer-maintenance` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/preventative-sewer-maintenance.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | San Diego source | Service source |
|---|---|---|---|
| 1 | The City puts periodic clearing of the lateral on the owner | `responsibility` (answer p1), Council Policy 400-10 via the FAQ, `systemExplainer` p3 (yearly flush) | `definition` (no default schedule; we state no interval) |
| 2 | A flush is not an inspection, and a visit covers more than a flush | `systemExplainer` p3 (flush is not an inspection), `card.closing` | `process` (inspect and record; clean when appropriate), `limits.callout`, `ask.keep` |
| 3 | Roots, grease and trees: what raises the question, and what the City does not publish | `systemExplainer` p3, p4 (EMRA list: trees, driveway, slope, depth) | `signals` ("Known risk factors"), `definition.supporting` 3 (no default schedule) |
| 4 | No City help found, and who to ask about permits | `municipalProgram` (lede, covers 1 and 3, doesNotCover 5), `heroForm.card.note` | `hero.scope`, `definition.scope` (not repair; not an emergency response) |

## City of San Diego location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (independent inspection; owner maintains the lateral to the City main) | ADAPTED | Hero intro: the owner-to-the-main fact tied to this service |
| heroForm bullets (incl. "Serving San Diego since" year), request card, nextSteps, form | LEFT OUT | Template supplies its own form. The founding-year line is not carried onto service pages |
| heroForm.card.note (619-515-3525 for a sewer spill or odor) | ADAPTED | Section 4, marked as the City's number |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level |
| keyTakeaways 1 (City runs its own system; other County guidance does not apply) | ADAPTED | `coverage.intro`: rules differ across San Diego County |
| keyTakeaways 2 (owner maintains the lateral to the connection, even in street, easement or canyon) | ADAPTED | Section 1 and the fourth problem card |
| keyTakeaways 3 (no City program found; crew installation program suspended; evidence before spending) | ADAPTED | Section 4 |
| keyTakeaways.jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer p1 (owner maintains the lateral to the City main; street, beyond the property line, easement, canyon) | ADAPTED | Section 1 |
| responsibility.answer p2 (plumber calls Sewer Emergency Line, Plumber's Report, City investigates within 24 hours) | LEFT OUT | Not about maintenance; the FAQ carries it |
| responsibility card: the public sewer (municipal and regional systems; address-specific) | LEFT OUT | System description; no tie to this service |
| responsibility card: the lateral line | ADAPTED | Section 1 |
| responsibility table rows 1-2 (who runs or arranges it; who maintains it) | ADAPTED | Section 1 |
| responsibility table row 3 (who to contact first) | ADAPTED | Section 4 (spill and odor line only) |
| responsibility table row 4 (24-hour investigation; no program found) | ADAPTED | Section 4 (no program) |
| responsibility table row 5 (where an inspection helps) | ADAPTED | Section 2 (distance along the line) |
| responsibility.note (not legal advice; no current City statement of who pays beyond the property line or after City-caused damage) | LEFT OUT | Not about maintenance |
| systemExplainer p1 (two connected systems; City is the authority; other agencies differ) | LEFT OUT | System description; the one-city framing is in `coverage.intro` |
| systemExplainer p2 (combined or separate, age not stated) | LEFT OUT | Not tied to this service (a maintenance draft carried the "age not stated" sentence and it was cut for length) |
| systemExplainer p3 (roots and grease; yearly cleanout flush; a flush is not an inspection) | ADAPTED | Sections 1, 2 and 3 |
| systemExplainer p4 (EMRA list: easement, angle, slope, depth, trees, driveway) | ADAPTED | Section 3 (trees, driveway, slope), tied to the service's risk factors |
| systemExplainer p5 (a public rule does not tell you a lateral's condition; only an inspection can) | LEFT OUT | No tie |
| systemExplainer.card bullets (what a camera can show) | LEFT OUT | Camera is a separate service; the service page carries its can and cannot lists |
| systemExplainer.card.closing (distance count; does not establish a property line; City process for a break) | ADAPTED | Section 2 (distance along the line; connection not established) |
| whoToCall paragraphs (spill line vs. plumber's report process; independent inspection helps) | ADAPTED | Section 4 |
| whoToCall.agency (619-515-3525; 619-515-3500 and its hours; not labelled 24-hour) | ADAPTED | 3525 and 3500 in section 4, both the City's; hours LEFT OUT |
| whoToCall.secondaryAgency (Development Services 619-446-5300; Records Section 619-446-5200) | ADAPTED | Fourth problem card carries 619-446-5300, the City's number; 5200 LEFT OUT |
| whoToCall.company (phone, hours) | LEFT OUT | No company phone, as the Las Vegas model |
| municipalProgram.lede (none found; which City pages were checked) | ADAPTED | Section 4 |
| municipalProgram.covers 1 (crew lateral-installation program currently suspended) | ADAPTED | Section 4 |
| municipalProgram.covers 2 (public-improvement permit; Class A licensed contractor) | LEFT OUT | About lateral installation and repair, which this page does not offer |
| municipalProgram.covers 3 (no fund, cap or application found; confirm at 619-515-3500) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 1 (Right-of-Way Permit for public right-of-way or easement work) | LEFT OUT | Repair and construction permit detail; the FAQ carries it |
| municipalProgram.doesNotCover 2 (inspections after trenching and final inspection) | LEFT OUT | Construction detail; the FAQ carries it |
| municipalProgram.doesNotCover 3 (licensed contractor can make lateral connections) | LEFT OUT | Construction detail; the FAQ carries it |
| municipalProgram.doesNotCover 4 (Municipal Code: City approval of plans for public sewer, lateral or house connection work) | LEFT OUT | Construction detail; the FAQ carries it |
| municipalProgram.doesNotCover 5 (no City page on whether work confined to private property needs a permit; Development Services 619-446-5242) | ADAPTED | Section 4, the City's number |
| municipalProgram.callout (plan on arranging inspection, cleaning and repair yourself; no claim the City accepts an outside report; we do not repair) | ADAPTED | Section 2: Cleaning does not repair pipe; we do not perform repairs |
| municipalProgram.closing (link to the camera inspection page) | LEFT OUT | Related links cover it |
| secondOpinion (ledes, steps, callout, CTA) | LEFT OUT | Not tied to maintenance |
| buyingGuide.lede (City guidance to buyers: licensed-plumber report; sewer scope is separate from a home inspection) | LEFT OUT | Not tied to maintenance |
| buyingGuide.body (no City sale-time rule found; state rules outside; connection in street, easement or canyon; Development Services; no diagrams of private lines) | ADAPTED | Fourth problem card (connection location) |
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
| Should I check the sewer lateral before buying a San Diego home? | LEFT OUT | Not about maintenance |
| Can the City tell me where my lateral connects to the main? | USED | Verbatim; carries the Development Services numbers cut from the body |
| What is an EMRA for a San Diego sewer lateral? | USED | Verbatim |
| What does a sewer camera inspection show? | LEFT OUT | The service page asks "What does a sewer camera inspection find?" |
| Do you repair or replace sewer lines? | LEFT OUT | The service page's "Do you offer sewer repair or replacement?" answers it in full |

## Service page (`svc-preventative-sewer-maintenance`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Preventative Sewer Maintenance in San Diego, CA" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, City of San Diego added |
| hero.title, hero.intro | ADAPTED | Rewritten for San Diego |
| hero.scope, hero.cardIntro | LEFT OUT | Template elements |
| definition.answer | ADAPTED | `serviceDescription` and hero |
| definition.supporting 1 ("preventive maintenance" is public-utility wording) | LEFT OUT | FAQ "What is preventative sewer maintenance?" |
| definition.supporting 2 (not one fixed task) | LEFT OUT | FAQ |
| definition.supporting 3 (a line with no history of problems needs no default schedule) | ADAPTED | Section 3 |
| definition.scope | ADAPTED | Section 4 (not repair, not an emergency response) |
| signals 2 A backup that has already happened, gurgling or recurring clogs, Known risk factors | USED | Problem cards (`sl-blocks`); risk factors also in section 3 |
| signals 1, 3, 5 | LEFT OUT | Slot-limited; FAQ "Why are all my drains slow or gurgling?" |
| limits.can (7 items) | LEFT OUT | FAQ "What does a sewer camera inspection find?" |
| limits.cannot | LEFT OUT | FAQ "What can a sewer camera not see?" |
| limits.callout (cleaning does not repair; further evaluation outside our scope) | ADAPTED | Section 2 bullet |
| process steps 1 to 6 | USED | `process`, verbatim |
| process.prep | LEFT OUT | No slot |
| decision (camera first or cleaning first) | LEFT OUT | FAQ "Should a camera inspection come before cleaning?" |
| comparison table | ADAPTED | Inclusions 3, 6 (cleaning, locating as separate service) |
| ask items: video, written findings | USED | Inclusion 5 |
| ask.keep | ADAPTED | Section 2 last paragraph (keep the video and findings) |
| audiences, markets, request.* | LEFT OUT | Template slots; `coverage` replaces markets |
| relatedPageIds | ADAPTED | City of San Diego page, this service, camera inspection, sewer cleaning |
| cta | ADAPTED | Rewritten for San Diego; no interval, plan or contract claimed |
| inclusions (6 cards) | USED | `sl-blocks/preventative-sewer-maintenance.ts` |

### Service FAQ (16)

All 16 USED verbatim. "How often should I schedule it?" and "How much does it cost?" are carried as the service page has them (no interval, no price).

Total FAQ on the page: 23 (7 San Diego + 16 service).
