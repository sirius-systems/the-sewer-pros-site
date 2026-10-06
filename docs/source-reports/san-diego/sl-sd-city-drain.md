# Source report: sl-sd-city-drain

Page: Drain Cleaning in San Diego, CA (`sanDiegoCityDrainContent`, `content/pages/sl-sd-city-drain.tsx`).

Sources:
- LOCATION: `sanDiegoCityContent` in `content/pages/san-diego-city.tsx` (City of San Diego facts read 2026-10-03; most City pages are undated, so the page says "confirm with the agency" and states no dates).
- SERVICE: `svc-drain-cleaning` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/drain-cleaning.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | San Diego source | Service source |
|---|---|---|---|
| 1 | Your fixture drains sit upstream of a lateral the City says is yours | `responsibility` (answer p1, lateral card, table rows 1-2) | `definition.supporting` 1 (drain vs sewer cleaning), `limits.cannot` (the public main and the connection) |
| 2 | One drain, several drains, or water coming up | `heroForm.card.note` and `whoToCall.agency` (619-515-3525, the City's number), `whoToCall.company` (company phone) | `signals`, `triage` rows 1, 2, 5 |
| 3 | The City's yearly flush is for the lateral, not your fixtures | `systemExplainer` p3 (roots and grease, Council Policy 400-10 via the FAQ, yearly flush, flush is not an inspection) | `signals` ("Clogs that keep returning"), `triage` row 4 |
| 4 | No City help with lateral costs found, so know what cleaning does not fix | `municipalProgram` (lede, covers 1 and 3, doesNotCover 5, callout) | `limits.cannot` (crack, offset, roots at a joint), `ask.keep`, `independent.note`, `definition.scope` |

## City of San Diego location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (independent inspection; owner maintains the lateral to the City main) | ADAPTED | Hero intro: the owner-to-the-main fact tied to this service |
| heroForm bullets (incl. "Serving San Diego since" year), request card, nextSteps, form | LEFT OUT | Template supplies its own form. The founding-year line is not carried onto service pages |
| heroForm.card.note (619-515-3525 for a sewer spill or odor) | ADAPTED | Section 2, marked as the City's number |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level |
| keyTakeaways 1 (City runs its own system; other County guidance does not apply) | ADAPTED | `coverage.intro`: rules differ across San Diego County |
| keyTakeaways 2 (owner maintains the lateral to the connection, even in street, easement or canyon) | ADAPTED | Hero and section 1 |
| keyTakeaways 3 (no City program found; crew installation program suspended; evidence before spending) | ADAPTED | Section 4 |
| keyTakeaways.jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer p1 (owner maintains the lateral to the City main; street, beyond the property line, easement, canyon) | ADAPTED | Section 1 |
| responsibility.answer p2 (plumber calls Sewer Emergency Line, Plumber's Report, City investigates within 24 hours) | LEFT OUT | Not about fixture drains; the FAQ carries it |
| responsibility card: the public sewer (municipal and regional systems; address-specific) | LEFT OUT | System description; no tie to this service |
| responsibility card: the lateral line | ADAPTED | Section 1 |
| responsibility table rows 1-2 (who runs or arranges it; who maintains it) | ADAPTED | Section 1 |
| responsibility table row 3 (who to contact first) | ADAPTED | Section 2 (spill and odor line only) |
| responsibility table row 4 (24-hour investigation; no program found) | ADAPTED | Section 4 (no program) |
| responsibility table row 5 (where an inspection helps) | LEFT OUT | Camera is a separate service |
| responsibility.note (not legal advice; no current City statement of who pays beyond the property line or after City-caused damage) | LEFT OUT | Not about fixture drains |
| systemExplainer p1 (two connected systems; City is the authority; other agencies differ) | LEFT OUT | System description; the one-city framing is in `coverage.intro` |
| systemExplainer p2 (combined or separate, age not stated) | LEFT OUT | Not tied to this service (a maintenance draft carried the "age not stated" sentence and it was cut for length) |
| systemExplainer p3 (roots and grease; yearly cleanout flush; a flush is not an inspection) | ADAPTED | Section 3, tightened; tied to fixture drains vs. the lateral |
| systemExplainer p4 (EMRA list: easement, angle, slope, depth, trees, driveway) | LEFT OUT | About lateral design and permits, not fixture drains |
| systemExplainer p5 (a public rule does not tell you a lateral's condition; only an inspection can) | LEFT OUT | No tie to drain cleaning |
| systemExplainer.card bullets (what a camera can show) | LEFT OUT | Camera is a separate service; the service page carries its can and cannot lists |
| systemExplainer.card.closing (distance count; does not establish a property line; City process for a break) | LEFT OUT | Camera sentence; no tie to drain cleaning |
| whoToCall paragraphs (spill line vs. plumber's report process; independent inspection helps) | ADAPTED | Section 2 |
| whoToCall.agency (619-515-3525; 619-515-3500 and its hours; not labelled 24-hour) | ADAPTED | 3525 in section 2 (not-24-hour clause cut for length), 3500 in section 4, both the City's; customer-service hours LEFT OUT |
| whoToCall.secondaryAgency (Development Services 619-446-5300; Records Section 619-446-5200) | LEFT OUT | Cut for length; the FAQ carries both numbers |
| whoToCall.company (phone, hours) | ADAPTED | Section 2: phone read from `marketOperatingDetail['san-diego-ca']`, as the Las Vegas drain page does; hours LEFT OUT |
| municipalProgram.lede (none found; which City pages were checked) | ADAPTED | Section 4, "none found" wording |
| municipalProgram.covers 1 (crew lateral-installation program currently suspended) | ADAPTED | Section 4 |
| municipalProgram.covers 2 (public-improvement permit; Class A licensed contractor) | LEFT OUT | About lateral installation and repair, which this page does not offer |
| municipalProgram.covers 3 (no fund, cap or application found; confirm at 619-515-3500) | ADAPTED | Section 4 (number only, the City's) |
| municipalProgram.doesNotCover 1 (Right-of-Way Permit for public right-of-way or easement work) | LEFT OUT | Repair and construction permit detail; the FAQ carries it |
| municipalProgram.doesNotCover 2 (inspections after trenching and final inspection) | LEFT OUT | Construction detail; the FAQ carries it |
| municipalProgram.doesNotCover 3 (licensed contractor can make lateral connections) | LEFT OUT | Construction detail; the FAQ carries it |
| municipalProgram.doesNotCover 4 (Municipal Code: City approval of plans for public sewer, lateral or house connection work) | LEFT OUT | Construction detail; the FAQ carries it |
| municipalProgram.doesNotCover 5 (no City page on whether work confined to private property needs a permit; Development Services 619-446-5242) | ADAPTED | Section 4, the City's number |
| municipalProgram.callout (plan on arranging inspection, cleaning and repair yourself; no claim the City accepts an outside report; we do not repair) | ADAPTED | Section 4: we do not perform repairs |
| municipalProgram.closing (link to the camera inspection page) | LEFT OUT | Related links cover it |
| secondOpinion (ledes, steps, callout, CTA) | ADAPTED | Section 4 last sentence (video and findings compared against an estimate); rest LEFT OUT |
| buyingGuide.lede (City guidance to buyers: licensed-plumber report; sewer scope is separate from a home inspection) | ADAPTED | Fourth problem card (guidance, not a requirement) |
| buyingGuide.body (no City sale-time rule found; state rules outside; connection in street, easement or canyon; Development Services; no diagrams of private lines) | ADAPTED | Fourth problem card (no sale rule, state law outside); Development Services LEFT OUT |
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
| What is an EMRA for a San Diego sewer lateral? | LEFT OUT | About nonstandard lateral design and permits, not fixture drains |
| What does a sewer camera inspection show? | USED | Verbatim; the drain service page has no camera-show question and a camera may be added to a visit |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-drain-cleaning`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Drain Cleaning in San Diego, CA" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, City of San Diego added |
| hero.title | ADAPTED | "Drain Cleaning in San Diego" |
| hero.intro p1 (restores flow by removing grease, roots, debris) | ADAPTED | Hero intro |
| hero.intro p2 (no repair, replacement, lining, excavation, installation) | ADAPTED | Section 4 and FAQ "Does drain cleaning repair a damaged pipe?" |
| hero.scope bullets | LEFT OUT | Template element |
| definition.answer | ADAPTED | `serviceDescription` and hero |
| definition.supporting 1 (drain vs sewer cleaning) | ADAPTED | Section 1 |
| definition.supporting 1 ("drain clearing" is everyday usage) | LEFT OUT | FAQ carries it |
| definition.supporting 2 (cleaning and camera are separate) | LEFT OUT | FAQ "Does a camera inspection come with drain cleaning?" |
| definition.scope | ADAPTED | Section 4 |
| signals 1 One slow drain, 2 Several fixtures slow, 4 Clogs that keep returning | USED | Problem cards 1-3 |
| signals 2, 3 | ADAPTED | Section 2 bullets (several fixtures, gurgling) |
| signals 4 Clogs that keep returning | ADAPTED | Section 3 |
| signals 5 Sewage-like odors | LEFT OUT | FAQ "What causes sewage-like odors?" |
| signals 6 Water or sewage coming up | ADAPTED | Section 2 bullet |
| triage rows 1, 2, 5 | ADAPTED | Section 2 |
| triage row 3 (lower drains back up) | LEFT OUT | Slot-limited; FAQ "How do I know if it is a drain clog or a sewer line problem?" |
| triage row 4 (clogs again after cleared) | ADAPTED | Section 3 |
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
| relatedPageIds (4) | ADAPTED | City of San Diego page, this service, sewer cleaning, camera inspection |
| cta | ADAPTED | Rewritten for San Diego |
| inclusions (6 cards) | USED | `sl-blocks/drain-cleaning.ts` |

### Service FAQ (37)

34 USED verbatim, 3 LEFT OUT: "Do you clean drains in St. Louis, San Diego, and Las Vegas?" (this page is an area page; the question belongs to the hub), "Can drain cleaning fix a broken or collapsed pipe?" (duplicate of "Does drain cleaning repair a damaged pipe?"), "Can cleaning remove tree roots?" (covered by "Can tree roots grow into drain pipes?"). The cost, time and "What happens if a camera shows damage?" answers are carried as the service page has them (they say cost and time vary).

Total FAQ on the page: 43 (9 San Diego + 34 service).
