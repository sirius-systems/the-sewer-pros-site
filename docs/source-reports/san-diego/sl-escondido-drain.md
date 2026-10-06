# Source report: sl-escondido-drain

Page: Drain Cleaning in Escondido, CA (`escondidoDrainContent`, `content/pages/sl-sd-escondido-drain.tsx`).

Sources:
- LOCATION: `escondidoContent` in `content/pages/san-diego-escondido.tsx` (City of Escondido facts read 2026-10-04; most City pages are undated, so the page says "confirm with the City" and states no agency dates).
- SERVICE: `svc-drain-cleaning` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/drain-cleaning.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Consistency with the existing Escondido cleaning page (`content/pages/sl-rebuild/sl-escondido-cleaning.tsx`): section 22-165 is stated the same way (owner responsible for maintenance, repair, replacement, cleaning and removal of blockages and the cost of that work; "up to and including the connection to the main" as the only quotation, nine words; the one exception for damage the owner proves came from City or City-contractor work; "none found" for any City program; no claim about who may perform repair).

## The four body sections and their sources

| # | h2 on the page | Escondido source | Service source |
|---|---|---|---|
| 1 | Section 22-165 starts at the lateral, and your fixture drains sit upstream | `responsibility.answer` p1, lateral card, table rows 1-2; `municipalProgram.covers` (a), (e); `systemExplainer` p8 (Vallecitos, septic) | `definition.supporting` 1, `limits.cannot` (public main and its connection) |
| 2 | One drain, several drains, or a backup you cannot place | `responsibility` table row 3, `whoToCall` (Public Works number, free main check), FAQ 4; company phone (`whoToCall.company`) | `signals`, `triage` rows 1 and 2 |
| 3 | The City asks to be called before a lateral is cleaned, and clogs can return | `systemExplainer` p5 (Sewer System Management Plan sentence) | `triage` row 4, `limits.can` item 2 and `limits.cannot` (roots at a joint), FAQ "Can tree roots grow into drain pipes?" |
| 4 | No City program offsets it, and cleaning does not fix the pipe | `municipalProgram` (lede, covers (c), doesNotCover 1 and 2, steps, callout, closing), FAQ 3 | `limits.cannot`, `ask.keep`, `independent.note`, `definition.scope` |

Body word count about 479 (target 420-480). Meta description under 160 characters.

## City of Escondido location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle / metaDescription | ADAPTED | Service name swapped in; metaDescription replaced by a page-specific one (155 characters) |
| hero.title and hero.intro (Section 22-165 puts the lateral on the owner up to the connection to the main; get evidence before you clean, buy or approve major work) | ADAPTED | Hero intro: the owner duty tied to drains sitting upstream; H1 names the service |
| heroForm (bullets incl. "Serving the San Diego area since" year, request card, nextSteps, form, hours) | LEFT OUT | Template supplies its own form; the founding-year line and hours are not carried onto service pages; the company phone is read from `marketOperatingDetail` in section 2 |
| heroForm.card.note (to report a sewage overflow in the public sewer, call the City) | LEFT OUT | Overflow instructions are carried by FAQ 4 |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level |
| keyTakeaways 1 (City runs the public main; 22-165 makes the owner responsible for the lateral up to the connection to the main) | ADAPTED | Hero and section 1 (quote kept to nine words) |
| keyTakeaways 2 (owner bears every cost incl. verifying breakage; the one exception is City-caused damage shown by video with a City employee present) | ADAPTED | Section 4: costs and verification on the owner; the exception as the code words it |
| keyTakeaways 3 (no City lateral repair, grant or reimbursement program and no sale-time inspection rule; "none found", not a confirmed absence) | ADAPTED | Section 4: no program, "none found". The sale-time half LEFT OUT (FAQ 8) |
| keyTakeaways.jumpNav; serviceCards (9) and helpBar | LEFT OUT | No on-page anchors; hub grid. Related links cover siblings |
| responsibility.answer p1 (owner responsible for the lateral; 22-165 wording; the one City-caused exception) | ADAPTED | Section 1 (22-165 wording, nine-word quote); exception in section 4 |
| responsibility.answer p2 (rules and numbers apply to addresses on the City system; Vallecitos Water District serves parts of Escondido; some properties on septic) | ADAPTED | Section 1 last sentence: both facts, with "this page does not say who serves your address" |
| responsibility card "The public sewer main" (Wastewater Division; Hale Avenue Resource Recovery Facility; FAQ describes the main) | LEFT OUT | Plant and division detail has no tie to fixture drains; the City’s main is named in the hero and section 1 |
| responsibility card "The sewer connection lateral" (code term vs the FAQ’s "sewer lateral"; 22-165(e); the FAQ describes the owner’s part) | ADAPTED | Hero, section 1 ("sewer connection lateral"); the FAQ description LEFT OUT (FAQ 1 carries it) |
| responsibility table row 1 (who runs or arranges it; owner at the owner’s cost under 22-165(a) and (c)) | ADAPTED | Section 1 |
| responsibility table row 2 (where it ends: up to and including the connection to the main) | ADAPTED | Hero and section 1 |
| responsibility table row 3 (who to contact first: City Public Works; free main check; clear main means the lateral; permits) | ADAPTED | Section 2 (Public Works, free main check, "probably in the lateral") |
| responsibility table row 4 (what help exists: City maintains the main; no grant; City responsible only for damage it proves it caused) | ADAPTED | Section 4 |
| responsibility table row 5 (where an inspection helps; 22-165(c) cost of verifying) | ADAPTED | Section 4 (cost of verifying on the owner) |
| responsibility.note (general information, not legal advice) | LEFT OUT | No legal claim is made on the page |
| systemExplainer p1-3 (City runs the public sewer; roughly 350 miles of pipeline and over 7,500 manholes to the Hale Avenue facility; sewer separate from storm drain) | LEFT OUT | System description with no tie to this service; counts not reused |
| systemExplainer p4 (equipment: three combination trucks and a CCTV van; staff routinely clean and inspect mains) | LEFT OUT | City equipment detail; no tie |
| systemExplainer p5 (Sewer System Management Plan: call the City before cleaning a private lateral so it can remove debris pushed into the public line; not a program, does not require our services) | ADAPTED | Section 3 |
| systemExplainer p6 (businesses: Environmental Programs, fats, oil and grease program) | LEFT OUT | Commercial; this is a residential page |
| systemExplainer p7 (2012 Wastewater Master Plan: about half of gravity mains installed before 1980; dated, City mains only) | LEFT OUT | No tie; FAQ 6 carries the 2012 plan |
| systemExplainer p8 (we found no City map of its sewer service area; Vallecitos serves parts of Escondido) | ADAPTED | Section 1: Vallecitos and septic only; the "no City map" sentence LEFT OUT |
| systemExplainer p9 (pages give no current system age; no claim about roots, wet weather or soil) | LEFT OUT | No age or soil claim is made |
| systemExplainer p10 (a code section does not tell the condition of an individual lateral; only an inspection can) | LEFT OUT | No tie |
| systemExplainer.card (what a camera can show; distance count; does not establish a property line, the connection or the City’s responsibility) | LEFT OUT | Camera lists live on the service page and in the FAQ |
| housingAge paragraph 1 (about half of units built in the 1970s and 1980s; median year built 1981; about 10 percent before 1960; about 16 percent 2000 or later) | LEFT OUT | No tie to fixture drains |
| housingAge paragraph 2 (Census counts homes, not pipes; Escondido city is not necessarily the City’s sewer service area; a camera inspection shows the line) | LEFT OUT | No tie |
| housingAge table (ten rows) and sourceNote (total 52,239 units, margin of error, ACS 2020-2024 B25034 and B25035) | LEFT OUT | Table not carried |
| whoToCall paragraph (call the City; Public Works takes reports of overflowing manholes and sewer lines; when unsure whether main or lateral) | ADAPTED | Section 2 third bullet |
| whoToCall.agency (City Public Works (760) 839-4668; 24 hours a day for a backup with an unclear source; 911; reporting app) | ADAPTED | Section 2: the number, marked as the City’s; "24 hours" LEFT OUT (FAQ 4); 911 and app LEFT OUT |
| whoToCall.secondaryAgency (Building Division (760) 839-4647 for the repair permit; Field Engineering (760) 839-4664 for the encroachment permit) | LEFT OUT | Permit detail has no tie to fixture drains; FAQ 5 carries both numbers |
| whoToCall.company (The Sewer Pros phone and hours) | ADAPTED | Section 2: phone read from `marketOperatingDetail['san-diego-ca']`, as the LV and other San Diego drain pages do; hours LEFT OUT |
| municipalProgram.lede (no grant found; 22-165 spells out who pays; one exception) | ADAPTED | Section 4, "none found" |
| municipalProgram.covers (a) (all maintenance, repair, replacement, cleaning, blockage removal) | ADAPTED | Section 1 |
| municipalProgram.covers (b) (locate, expose and maintain the property line cleanout) | LEFT OUT | Cleanout is named only as the usual entry point; the duty is carried by FAQ 2 |
| municipalProgram.covers (c) (all costs, and the cost of verifying breakage or damage) | ADAPTED | Section 4 |
| municipalProgram.covers (e) ("up to and including the connection to the main"; sole responsibility) | ADAPTED | Hero and section 1 (nine-word quote) |
| municipalProgram.covers (f) (after a violation or illegal discharge, a licensed plumber cleans and televises; copy of the video to the City) | LEFT OUT | No tie to fixture drains; FAQ 2 carries it |
| municipalProgram.doesNotCover 1 (the City may be responsible only if the owner proves the damage came from City or City-contractor work) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 2 (no repair or replacement grant, reimbursement, cap, application or deadline found; no sale-time inspection rule found) | ADAPTED | Section 4: program half only |
| municipalProgram.doesNotCover 3 (22-161 and the City FAQ do not reconcile on who may perform repair) | LEFT OUT | Not reproduced; the page never says who may perform lateral repair |
| municipalProgram.whoCanApply | LEFT OUT | Definition detail |
| municipalProgram.steps 1-5 (City-caused-damage claim: prove cause; satisfy a City employee; video from a cleanout or breakout opening with the employee present; City sets time and place; possible City responsibility) | ADAPTED | Section 4: only "shown by a video inspection with a City employee present" |
| municipalProgram.afterSteps (owner owns the cleanout; 22-165(d) right-of-way bar and cleanout cap exception; City repair permit before any work; encroachment permit) | ADAPTED | Fourth problem card: (d) bar and the cap exception; the permits LEFT OUT (FAQ 5) |
| municipalProgram.callout (a camera inspection does not replace the City-present inspection; contact Public Works before paying for work you plan to use in a claim; retrieval dates) | ADAPTED | Section 4: "Our camera look does not replace that"; Public Works advice LEFT OUT (FAQ 7) |
| municipalProgram.closing (neither the code nor the City says they pay for our services; we do not perform repairs or arrange reimbursement) | ADAPTED | Section 4: "We do not perform repairs or replacements"; reimbursement half LEFT OUT |
| secondOpinion (ledes, steps, callout, CTA) | ADAPTED | Section 4 last sentence (compare estimates); rest LEFT OUT |
| buyingGuide.lede (a defect found after closing is a cost you carry, apart from the narrow case of City-caused damage) | LEFT OUT | Not about drains |
| buyingGuide.body (no sale-time rule found; state disclosure outside the page; confirm which agency serves; repair and encroachment permits; right-of-way bar) | LEFT OUT | FAQ 8 carries it |
| buyingGuide links, CTA, agents block | LEFT OUT | Hub elements |
| nearbyAreas (six other San Diego-area locations; all-markets link) | ADAPTED | `coverage`: the six other locations; the market-hub link LEFT OUT |
| finalCta title / paragraphs / bullets | ADAPTED | Title becomes `cta.title`; paragraphs and bullets LEFT OUT, replaced by `cta.body` |
| sources (9 links, lastReviewed, closingNote) | USED | `sources: escondidoContent.sources`; most pages are undated, so the page says to confirm with the City and states no agency dates |
| servicePageIds [sl-escondido-cleaning] | LEFT OUT | Location-hub wiring. Related links use the location page and three service pages, as the LV models do |
| (no reviewBand on the Escondido location page) | n/a | No review figures are stated on this page |

### Escondido FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for the sewer lateral in Escondido? | USED | Verbatim |
| What does section 22-165 of the Escondido Municipal Code say? | USED | Verbatim |
| Does the City of Escondido ever pay for a lateral repair? | USED | Verbatim |
| What should I do about a sewer backup if I don’t know whether it is my lateral or the City main? | USED | Verbatim |
| Do I need a permit for sewer lateral work in Escondido, and can I dig in the street myself? | USED | Verbatim; carries the permit numbers and the right-of-way bar cut from the body |
| Is my Escondido address on the City’s sewer system? | USED | Verbatim |
| Who pays to find out whether a sewer lateral is broken? | USED | Verbatim |
| Is a sewer inspection required when buying an Escondido home? | USED | Verbatim; a seller or buyer with recurring drains may ask, and the answer says none found |
| What does a sewer camera inspection show? | LEFT OUT | Skipped: the drain service page answers camera questions ("What do I receive when a camera is used?", "Can a camera see through standing water?") |
| Do you repair or replace sewer lines? | LEFT OUT | Skipped: "Does drain cleaning repair a damaged pipe?" answers it |

## Service page (`svc-drain-cleaning`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Drain Cleaning in Escondido, CA" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription / definition.answer | ADAPTED | Same definition, Escondido added |
| hero.title, hero.intro (restores flow; no repair, replacement, lining, excavation, installation) | ADAPTED | Hero intro; the no-repair line in section 4 and the FAQ |
| hero.scope, cardTitle, cardIntro, serviceLabel; navLabels; images | LEFT OUT | Template slots |
| definition.supporting 1 (drain cleaning is fixture and branch lines; sewer cleaning is the larger line; "drain clearing" is everyday usage) | ADAPTED | Section 1 (fixture and branch lines inside the home); the "drain clearing" sentence LEFT OUT, an FAQ answers it |
| definition.supporting 2 (cleaning and a camera inspection are separate services) | ADAPTED | Section 3 (a camera look "may help") |
| definition.scope | ADAPTED | Section 4 ("We do not perform repairs or replacements") |
| signals 1 (one slow drain), 2 (several fixtures), 4 (clogs that keep returning) | USED | Problem cards 1-3 (`sl-blocks/drain-cleaning.ts`) |
| signals 3 (gurgling) | ADAPTED | Section 2 bullet 2 ("slow or gurgling") |
| signals 5 (sewage-like odors), 6 (water or sewage coming up); signals.after, image | LEFT OUT | FAQ "What causes sewage-like odors?" and "What should I do if water or sewage is coming up from a drain?" carry them |
| triage rows 1 and 2 (one fixture; several fixtures) | ADAPTED | Section 2 bullets 1 and 2 |
| triage row 3 (lower drains back up) and row 5 (water or sewage coming up) | LEFT OUT | Slot-limited; FAQ "How do I know if it is a drain clog or a sewer line problem?" and the water-or-sewage FAQ |
| triage row 4 (drain clogs again after it was cleared) | ADAPTED | Section 3 (a camera look may show whether the restriction was fully removed) |
| limits.can 1, 3, 4 (grease, wipes, a restriction that keeps returning), limits.callout | LEFT OUT | FAQ answers carry grease, wipes and jetting suitability |
| limits.can 2 (roots can be cut back, they may regrow) | ADAPTED | Section 3 |
| limits.cannot: cracked, broken or collapsed pipe; offset or separated joint; roots entering at a joint | ADAPTED | Section 4 (and roots at a joint in section 3) |
| limits.cannot: the public sewer main or the connection to it | ADAPTED | Section 1 ("does not reach the City’s main or the connection to it") |
| limits.cannot: a line the equipment cannot pass; process.prep | LEFT OUT | No slot; FAQ and process carry them |
| process steps 1 to 5 (symptoms; access; camera when included; cleaning; flow check) | USED | `process`, verbatim; equipment names only as confirmed (steps 3 and 4) |
| decision, methods table, secondaryLimits (camera can / cannot) | LEFT OUT | FAQ answers carry methods and camera limits |
| independent band (steps, note: a clear record gives you something to compare estimates against) | ADAPTED | Section 4 last sentence |
| ask items: video, written findings | USED | Inclusion 6 (`sl-blocks/drain-cleaning.ts`) |
| ask items: limits, access point, cleaning record, locating; ask.keep | LEFT OUT | FAQ "Will I get a record of the cleaning?", "What does line locating do?"; ask.keep is partly adapted into section 4’s last sentence |
| audiences, markets (3 hubs), situations, terms, faqTitle, eyebrows, request.* | LEFT OUT | Template slots; `coverage` replaces the hubs |
| relatedPageIds (4) and relatedDescriptions | ADAPTED | Escondido page, this service, sewer cleaning, camera inspection |
| cta | ADAPTED | Rewritten for Escondido |
| inclusions (6 cards) | USED | `sl-blocks/drain-cleaning.ts` |
| fourth problem card: a cleanout cap in the public right-of-way | ADAPTED | From `municipalProgram.afterSteps` and FAQ 5 (22-165(d)) |

### Service FAQ

Service FAQ (37): 34 USED verbatim, 3 LEFT OUT: "Do you clean drains in St. Louis, San Diego, and Las Vegas?" (this page is an area page; the hub's question), "Can drain cleaning fix a broken or collapsed pipe?" (duplicate of "Does drain cleaning repair a damaged pipe?"), "Can cleaning remove tree roots?" (duplicate of "Can tree roots grow into drain pipes?"). The cost and timing questions are carried as the service page words them (DEC-088).

Total FAQ on the page: 8 Escondido + 34 service = 42.

## Facts to confirm

- Public Works (760) 839-4668 is marked as the City's; the page says to confirm with the City. The page states no agency date (the City FAQ and wastewater pages carry none).
- The 22-165 wording is the same as `sl-escondido-cleaning` ("up to and including the connection to the main", owner pays, "none found"). The page states no program as fact and says nothing about who may perform lateral repair (22-161 vs the City FAQ are unreconciled on the location page).
- The page does not say which agency (City, Vallecitos Water District, septic) serves an address.
- The new pageId `sl-escondido-drain` is not yet in `data/pages/approved-pages.ts` (only `sl-escondido-cleaning` is); it needs registration before it renders.
