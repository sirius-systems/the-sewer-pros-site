# Source report: sl-sd-city-prepurchase

Page: Pre-Purchase Sewer Inspection in San Diego, CA (`sanDiegoCityPrePurchaseContent`, `content/pages/sl-sd-city-prepurchase.tsx`).

Sources:
- LOCATION: `sanDiegoCityContent` in `content/pages/san-diego-city.tsx` (City of San Diego facts read 2026-10-03; most City pages are undated, so the page says "confirm with the agency" and states no dates).
- SERVICE: `svc-pre-purchase-sewer-inspection` `v2` in `content/pages/services.tsx`, plus `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS` and `SERVICE_PROBLEM_SHOTS` in `content/pages/service-location-shared.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

## The four body sections and their sources

| # | h2 on the page | San Diego source | Service source |
|---|---|---|---|
| 1 | What you take on when a San Diego sale closes | `responsibility` (answer p1, lateral card, table rows 1-2) | `definition.supporting` 1 (the lateral is the line inspected; day of the visit), `limits.cannot`, `ask` (line locating) |
| 2 | The City's advice to buyers is guidance, and no sale-time rule found | `buyingGuide` (lede, body), `callout` | `definition.supporting` 2 (a scope is separate from a home inspection), `independent` (does not repair) |
| 3 | A defect beyond the property line starts with a plumber's call | `responsibility` (answer p2, note), `whoToCall`, `systemExplainer.card.closing` | `limits.cannot` (what footage does not establish), `ask` (access point and location along the line) |
| 4 | Slope, depth and trees: rules a camera does not measure | `systemExplainer` p4 (EMRA list), `municipalProgram.doesNotCover` 5 | `limits.cannot` (exact slope or depth; whether any repair is needed) |

## City of San Diego location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | Service name swapped in |
| metaDescription | LEFT OUT | Replaced by a page-specific description |
| hero.title | ADAPTED | H1 names this service |
| hero.intro (independent inspection; owner maintains the lateral to the City main) | ADAPTED | Hero intro: the owner-to-the-main fact tied to this service |
| heroForm bullets (incl. "Serving San Diego since" year), request card, nextSteps, form | LEFT OUT | Template supplies its own form. The founding-year line is not carried onto service pages |
| heroForm.card.note (619-515-3525 for a sewer spill or odor) | LEFT OUT | Not about buying a home; the FAQ carries it |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level |
| keyTakeaways 1 (City runs its own system; other County guidance does not apply) | ADAPTED | `coverage.intro`: rules differ across San Diego County |
| keyTakeaways 2 (owner maintains the lateral to the connection, even in street, easement or canyon) | ADAPTED | Hero, section 1 and the fourth problem card |
| keyTakeaways 3 (no City program found; crew installation program suspended; evidence before spending) | LEFT OUT | Cut for length; the FAQ carries it |
| keyTakeaways.jumpNav | LEFT OUT | No on-page anchors in this template |
| serviceCards (9) and helpBar | LEFT OUT | Hub grid; related links cover siblings |
| responsibility.answer p1 (owner maintains the lateral to the City main; street, beyond the property line, easement, canyon) | ADAPTED | Section 1 (after closing, that owner is you) |
| responsibility.answer p2 (plumber calls Sewer Emergency Line, Plumber's Report, City investigates within 24 hours) | ADAPTED | Section 3; the 24-hour sentence cut for length, FAQ carries it |
| responsibility card: the public sewer (municipal and regional systems; address-specific) | LEFT OUT | System description; no tie to this service |
| responsibility card: the lateral line | ADAPTED | Section 1 |
| responsibility table rows 1-2 (who runs or arranges it; who maintains it) | ADAPTED | Section 1 |
| responsibility table row 3 (who to contact first) | ADAPTED | Section 3 (plumber's call) |
| responsibility table row 4 (24-hour investigation; no program found) | LEFT OUT | Cut for length; the FAQ carries it |
| responsibility table row 5 (where an inspection helps) | ADAPTED | Sections 2 and 3 (distance along the line) |
| responsibility.note (not legal advice; no current City statement of who pays beyond the property line or after City-caused damage) | ADAPTED | Section 3 (beyond the property line only; City-caused damage LEFT OUT, no tie) |
| systemExplainer p1 (two connected systems; City is the authority; other agencies differ) | LEFT OUT | System description; the one-city framing is in `coverage.intro` |
| systemExplainer p2 (combined or separate, age not stated) | LEFT OUT | Not tied to this service (a maintenance draft carried the "age not stated" sentence and it was cut for length) |
| systemExplainer p3 (roots and grease; yearly cleanout flush; a flush is not an inspection) | LEFT OUT | Not about buying a home |
| systemExplainer p4 (EMRA list: easement, angle, slope, depth, trees, driveway) | ADAPTED | Section 4, tied to what a camera does not measure (slope, depth) |
| systemExplainer p5 (a public rule does not tell you a lateral's condition; only an inspection can) | LEFT OUT | Not carried; the section 4 limit is slope and depth |
| systemExplainer.card bullets (what a camera can show) | LEFT OUT | Camera is a separate service; the service page carries its can and cannot lists |
| systemExplainer.card.closing (distance count; does not establish a property line; City process for a break) | ADAPTED | Section 3 |
| whoToCall paragraphs (spill line vs. plumber's report process; independent inspection helps) | ADAPTED | Section 3 |
| whoToCall.agency (619-515-3525; 619-515-3500 and its hours; not labelled 24-hour) | ADAPTED | 3525 in section 3, the City's number; 3500 and hours LEFT OUT |
| whoToCall.secondaryAgency (Development Services 619-446-5300; Records Section 619-446-5200) | ADAPTED | Fourth problem card names Development Services maps and records, no number; the FAQ carries both numbers |
| whoToCall.company (phone, hours) | LEFT OUT | No company phone, as the Las Vegas model |
| municipalProgram.lede (none found; which City pages were checked) | LEFT OUT | Cut for length; the FAQ carries it |
| municipalProgram.covers 1 (crew lateral-installation program currently suspended) | LEFT OUT | Cut for length; the FAQ carries it |
| municipalProgram.covers 2 (public-improvement permit; Class A licensed contractor) | LEFT OUT | About lateral installation and repair, which this page does not offer |
| municipalProgram.covers 3 (no fund, cap or application found; confirm at 619-515-3500) | LEFT OUT | Cut for length |
| municipalProgram.doesNotCover 1 (Right-of-Way Permit for public right-of-way or easement work) | LEFT OUT | Repair and construction permit detail; the FAQ carries it |
| municipalProgram.doesNotCover 2 (inspections after trenching and final inspection) | LEFT OUT | Construction detail; the FAQ carries it |
| municipalProgram.doesNotCover 3 (licensed contractor can make lateral connections) | LEFT OUT | Construction detail; the FAQ carries it |
| municipalProgram.doesNotCover 4 (Municipal Code: City approval of plans for public sewer, lateral or house connection work) | LEFT OUT | Construction detail; the FAQ carries it |
| municipalProgram.doesNotCover 5 (no City page on whether work confined to private property needs a permit; Development Services 619-446-5242) | ADAPTED | Section 4, the City's number |
| municipalProgram.callout (plan on arranging inspection, cleaning and repair yourself; no claim the City accepts an outside report; we do not repair) | ADAPTED | Section 2: no claim the City accepts an outside report; we do not repair |
| municipalProgram.closing (link to the camera inspection page) | LEFT OUT | Related links cover it |
| secondOpinion (ledes, steps, callout, CTA) | ADAPTED | Section 2 last sentence only (inspects and documents, does not repair) |
| buyingGuide.lede (City guidance to buyers: licensed-plumber report; sewer scope is separate from a home inspection) | USED | Section 2 |
| buyingGuide.body (no City sale-time rule found; state rules outside; connection in street, easement or canyon; Development Services; no diagrams of private lines) | ADAPTED | Section 2 (no sale rule found), fourth problem card (connection); "no diagrams" kept as "does not show where the line runs on the property" in section 1, City attribution dropped for length |
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
| What does a sewer camera inspection show? | LEFT OUT | The service page answers it in full as "What does a sewer scope look for?" and "What does a sewer inspection not show?" |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-pre-purchase-sewer-inspection`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Pre-Purchase Sewer Inspection in San Diego, CA" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription | ADAPTED | Same definition, City of San Diego added |
| hero.title | ADAPTED | "Pre-Purchase Sewer Inspection in San Diego" |
| hero.intro, hero.scope | ADAPTED / LEFT OUT | Intro rewritten; scope bullets are a template element |
| definition.answer | ADAPTED | `serviceDescription` and hero |
| definition.supporting 1 (private lateral; visible conditions on the day; does not repair) | ADAPTED | Sections 1 and 3 |
| definition.supporting 2 (a scope is separate from a home inspection) | ADAPTED | Section 2 |
| signals 1 An older home, 2 No record of the line's condition, 5 A short inspection period | USED | Problem cards (`SERVICE_PROBLEMS`) |
| signals 3 Drain trouble mentioned during the sale, 4 A local sale requirement, 6 Plans to dig after you buy | LEFT OUT | Slot-limited; the FAQ and the locating mention in section 1 cover them |
| limits.can (8 items) | LEFT OUT | FAQ "What does a sewer scope look for?" |
| limits.cannot: not below the waterline, unreached sections, soil, wall thickness, leaks, future performance | LEFT OUT | FAQ "What does a sewer inspection not show?" |
| limits.cannot: exact slope or depth; whether a repair is needed | ADAPTED | Section 4 |
| limits.callout (a visibly clear line is not proof) | LEFT OUT | Cut for length; FAQ "What does a clear sewer scope mean?" |
| process steps 1 to 5 | USED | `process`, verbatim; equipment names only as confirmed (step 3) |
| process.prep | LEFT OUT | No slot; FAQ "Where does the camera go in?" and "Do I need to be there for the appointment?" |
| decision (cleaning is a separate service; when the camera may not get through) | LEFT OUT | FAQ "What happens if the camera cannot get through the line?" |
| independent band | ADAPTED | Section 2 last sentence |
| comparison table | LEFT OUT | Related links cover siblings |
| ask items: video, written findings | USED | Inclusions 1-2 |
| ask items: access point and location | ADAPTED | Section 3 (location along the line) |
| ask items: line locating | ADAPTED | Section 1 |
| ask items: what to share with your agent | USED | Inclusion 6 |
| ask.keep | LEFT OUT | FAQ "What should I ask before approving major sewer work?" |
| evidence examples | LEFT OUT | Image-led block; not on this template |
| audiences, markets, situations, request.* | LEFT OUT | Template slots; `coverage` replaces markets |
| relatedPageIds | ADAPTED | City of San Diego page, this service, camera inspection, line locating |
| cta | ADAPTED | Rewritten for San Diego; keeps the "note your inspection deadline" request |
| inclusions (6 cards) | USED | `SERVICE_INCLUSIONS` |

### Service FAQ (29)

28 USED verbatim, 1 LEFT OUT: "Is a sewer scope required when buying or selling a house?" (the San Diego question "Should I check the sewer lateral before buying a San Diego home?" answers it for this city). Cost, time and deadline answers are carried as the service page has them.

Total FAQ on the page: 37 (9 San Diego + 28 service).
