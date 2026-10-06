# Source report: sl-escondido-maintenance

Page: Preventative Sewer Maintenance in Escondido, CA (`escondidoMaintenanceContent`, `content/pages/sl-sd-escondido-maintenance.tsx`).

Sources:
- LOCATION: `escondidoContent` in `content/pages/san-diego-escondido.tsx` (City of Escondido facts read 2026-10-04; most City pages are undated, so the page says "confirm with the City" and states no agency dates).
- SERVICE: `svc-preventative-sewer-maintenance` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/preventative-sewer-maintenance.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Consistency with the existing Escondido cleaning page (`content/pages/sl-rebuild/sl-escondido-cleaning.tsx`): section 22-165 is stated the same way (owner responsible for maintenance, repair, replacement, cleaning and removal of blockages and the cost of that work; "up to and including the connection to the main" as the only quotation, nine words; the one exception for damage the owner proves came from City or City-contractor work; "none found" for any City program; no claim about who may perform repair).

## The four body sections and their sources

| # | h2 on the page | Escondido source | Service source |
|---|---|---|---|
| 1 | Upkeep of the lateral is the owner’s, and so is its cost | `responsibility.answer` p1, table rows 1-2, `municipalProgram.covers` (a), (c), (e); `systemExplainer` p4 (City crews clean and inspect mains) | `definition.answer`, `definition.supporting` 3 (no default schedule) |
| 2 | The City asks to be called before a lateral is cleaned, so look before and after | `systemExplainer` p5 (Sewer System Management Plan sentence), `card.closing` | `process` steps 3-5, `definition.supporting` 2 |
| 3 | The cleanout is yours to keep reachable, and repairs need a permit | `municipalProgram.covers` (b), `afterSteps` (permit), `whoToCall.secondaryAgency`, `closing` | `process` step 2, `process.prep`, `definition.scope` |
| 4 | No program found, and a 1981 median is not a schedule | `municipalProgram.lede`, `housingAge`, `systemExplainer` p7 (2012 plan) | `signals` item 6 (risk factors), `definition.supporting` 3 |

Body word count about 461 (target 420-480). Meta description under 160 characters.

## City of Escondido location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle / metaDescription | ADAPTED | Service name swapped in; metaDescription replaced by a page-specific one (156 characters) |
| hero.title and hero.intro (Section 22-165 puts the lateral on the owner up to the connection to the main; get evidence before you clean, buy or approve major work) | ADAPTED | Hero intro: the owner duty tied to planned upkeep; H1 names the service |
| heroForm (bullets incl. "Serving the San Diego area since" year, request card, nextSteps, form, hours) | LEFT OUT | Template supplies its own form; the founding-year line and hours are not carried onto service pages |
| heroForm.card.note (to report a sewage overflow in the public sewer, call the City) | LEFT OUT | Not about upkeep; FAQ 4 carries it |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level |
| keyTakeaways 1 (City runs the public main; 22-165 makes the owner responsible for the lateral up to the connection to the main) | ADAPTED | Hero and section 1 |
| keyTakeaways 2 (owner bears every cost incl. verifying breakage; the one exception is City-caused damage shown by video with a City employee present) | ADAPTED | Section 1 (all costs of the work); the City-caused exception LEFT OUT, FAQ 3 carries it |
| keyTakeaways 3 (no City lateral repair, grant or reimbursement program and no sale-time inspection rule; "none found", not a confirmed absence) | ADAPTED | Section 4: no program, "none found". The sale-time half LEFT OUT (question skipped) |
| keyTakeaways.jumpNav; serviceCards (9) and helpBar | LEFT OUT | Same |
| responsibility.answer p1 (owner responsible for the lateral; 22-165 wording; the one City-caused exception) | ADAPTED | Section 1 |
| responsibility.answer p2 (rules and numbers apply to addresses on the City system; Vallecitos Water District serves parts of Escondido; some properties on septic) | ADAPTED | Fourth problem card: both facts, no claim about which applies |
| responsibility card "The public sewer main" (Wastewater Division; Hale Avenue Resource Recovery Facility; FAQ describes the main) | ADAPTED | Section 1: "The City maintains the public sewer main"; plant detail LEFT OUT |
| responsibility card "The sewer connection lateral" (code term vs the FAQ’s "sewer lateral"; 22-165(e); the FAQ describes the owner’s part) | ADAPTED | Section 1; FAQ description LEFT OUT (FAQ 1) |
| responsibility table row 1 (who runs or arranges it; owner at the owner’s cost under 22-165(a) and (c)) | ADAPTED | Section 1 (all costs of that work) |
| responsibility table row 2 (where it ends: up to and including the connection to the main) | ADAPTED | Hero |
| responsibility table row 3 (who to contact first: City Public Works; free main check; clear main means the lateral; permits) | ADAPTED | Permit half in section 3; Public Works half LEFT OUT (FAQ 4) |
| responsibility table row 4 (what help exists: City maintains the main; no grant; City responsible only for damage it proves it caused) | ADAPTED | Sections 1 and 4 |
| responsibility table row 5 (where an inspection helps; 22-165(c) cost of verifying) | ADAPTED | Section 2 (recorded camera pass) |
| responsibility.note (general information, not legal advice) | LEFT OUT | No legal claim is made on the page |
| systemExplainer p1-3 (City runs the public sewer; roughly 350 miles of pipeline and over 7,500 manholes to the Hale Avenue facility; sewer separate from storm drain) | LEFT OUT | Same |
| systemExplainer p4 (equipment: three combination trucks and a CCTV van; staff routinely clean and inspect mains) | ADAPTED | Section 1: only "says its crews routinely clean and inspect sewer mains", contrasted with the owner’s lateral; truck and van detail LEFT OUT |
| systemExplainer p5 (Sewer System Management Plan: call the City before cleaning a private lateral so it can remove debris pushed into the public line; not a program, does not require our services) | ADAPTED | Section 2 |
| systemExplainer p6 (businesses: Environmental Programs, fats, oil and grease program) | LEFT OUT | Same |
| systemExplainer p7 (2012 Wastewater Master Plan: about half of gravity mains installed before 1980; dated, City mains only) | ADAPTED | Section 4: the dated 2012 sentence, labelled as City mains and not laterals |
| systemExplainer p8 (we found no City map of its sewer service area; Vallecitos serves parts of Escondido) | ADAPTED | Fourth problem card: Vallecitos, septic, "we did not find a City map", ask Public Works or check the Vallecitos page |
| systemExplainer p9 (pages give no current system age; no claim about roots, wet weather or soil) | LEFT OUT | Same |
| systemExplainer p10 (a code section does not tell the condition of an individual lateral; only an inspection can) | LEFT OUT | No tie |
| systemExplainer.card (what a camera can show; distance count; does not establish a property line, the connection or the City’s responsibility) | ADAPTED | Section 2: footage records where along the line a condition sits; does not establish where the connection to the main is |
| housingAge paragraph 1 (about half of units built in the 1970s and 1980s; median year built 1981; about 10 percent before 1960; about 16 percent 2000 or later) | ADAPTED | Section 4: median 1981 and "about half" in the 1970s and 1980s; the 10 and 16 percent figures LEFT OUT |
| housingAge paragraph 2 (Census counts homes, not pipes; Escondido city is not necessarily the City’s sewer service area; a camera inspection shows the line) | ADAPTED | Section 4: "describe homes and City mains, not laterals" |
| housingAge table (ten rows) and sourceNote (total 52,239 units, margin of error, ACS 2020-2024 B25034 and B25035) | LEFT OUT | Table not carried; the source is in `sources` |
| whoToCall paragraph (call the City; Public Works takes reports of overflowing manholes and sewer lines; when unsure whether main or lateral) | LEFT OUT | FAQ 4 carries it |
| whoToCall.agency (City Public Works (760) 839-4668; 24 hours a day for a backup with an unclear source; 911; reporting app) | LEFT OUT | FAQ 4 carries it |
| whoToCall.secondaryAgency (Building Division (760) 839-4647 for the repair permit; Field Engineering (760) 839-4664 for the encroachment permit) | ADAPTED | Section 3: repair permit and the Building Division number, marked as the City’s; Field Engineering LEFT OUT (FAQ 5) |
| whoToCall.company (The Sewer Pros phone and hours) | LEFT OUT | No company phone, as the LV maintenance page |
| municipalProgram.lede (no grant found; 22-165 spells out who pays; one exception) | ADAPTED | Section 4, "none found, not a statement that none exists" |
| municipalProgram.covers (a) (all maintenance, repair, replacement, cleaning, blockage removal) | ADAPTED | Section 1 |
| municipalProgram.covers (b) (locate, expose and maintain the property line cleanout) | ADAPTED | Section 3 |
| municipalProgram.covers (c) (all costs, and the cost of verifying breakage or damage) | ADAPTED | Section 1 (all costs of that work); verification half LEFT OUT |
| municipalProgram.covers (e) ("up to and including the connection to the main"; sole responsibility) | ADAPTED | Hero |
| municipalProgram.covers (f) (after a violation or illegal discharge, a licensed plumber cleans and televises; copy of the video to the City) | LEFT OUT | No tie to upkeep; FAQ 2 carries it |
| municipalProgram.doesNotCover 1 (the City may be responsible only if the owner proves the damage came from City or City-contractor work) | LEFT OUT | Not about upkeep; FAQ 3 carries it |
| municipalProgram.doesNotCover 2 (no repair or replacement grant, reimbursement, cap, application or deadline found; no sale-time inspection rule found) | ADAPTED | Section 4: program half only |
| municipalProgram.doesNotCover 3 (22-161 and the City FAQ do not reconcile on who may perform repair) | LEFT OUT | Same |
| municipalProgram.whoCanApply | LEFT OUT | Definition detail |
| municipalProgram.steps 1-5 (City-caused-damage claim: prove cause; satisfy a City employee; video from a cleanout or breakout opening with the employee present; City sets time and place; possible City responsibility) | LEFT OUT | Not about upkeep; FAQ 3 carries it |
| municipalProgram.afterSteps (owner owns the cleanout; 22-165(d) right-of-way bar and cleanout cap exception; City repair permit before any work; encroachment permit) | ADAPTED | Section 3 (repair permit, "even on private property"); (d) and encroachment LEFT OUT (FAQ 5) |
| municipalProgram.callout (a camera inspection does not replace the City-present inspection; contact Public Works before paying for work you plan to use in a claim; retrieval dates) | LEFT OUT | Not about upkeep; FAQ 7 carries it |
| municipalProgram.closing (neither the code nor the City says they pay for our services; we do not perform repairs or arrange reimbursement) | ADAPTED | Section 3: "does not perform repairs" |
| secondOpinion (ledes, steps, callout, CTA) | LEFT OUT | Not about upkeep; the service page’s own records language is not carried |
| buyingGuide.lede (a defect found after closing is a cost you carry, apart from the narrow case of City-caused damage) | LEFT OUT | Not about upkeep |
| buyingGuide.body (no sale-time rule found; state disclosure outside the page; confirm which agency serves; repair and encroachment permits; right-of-way bar) | LEFT OUT | Question skipped |
| buyingGuide links, CTA, agents block | LEFT OUT | Hub elements |
| nearbyAreas (six other San Diego-area locations; all-markets link) | ADAPTED | Same |
| finalCta title / paragraphs / bullets | ADAPTED | Same |
| sources (9 links, lastReviewed, closingNote) | USED | Same |
| servicePageIds [sl-escondido-cleaning] | LEFT OUT | Same |
| (no reviewBand on the Escondido location page) | n/a | No review figures are stated on this page |

### Escondido FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who is responsible for the sewer lateral in Escondido? | USED | Verbatim |
| What does section 22-165 of the Escondido Municipal Code say? | USED | Verbatim |
| Does the City of Escondido ever pay for a lateral repair? | USED | Verbatim |
| What should I do about a sewer backup if I don’t know whether it is my lateral or the City main? | USED | Verbatim |
| Do I need a permit for sewer lateral work in Escondido, and can I dig in the street myself? | USED | Verbatim; carries the encroachment permit and the right-of-way bar cut from the body |
| Is my Escondido address on the City’s sewer system? | USED | Verbatim |
| Who pays to find out whether a sewer lateral is broken? | USED | Verbatim |
| Is a sewer inspection required when buying an Escondido home? | LEFT OUT | Skipped: not about maintenance |
| What does a sewer camera inspection show? | LEFT OUT | Skipped: the service page asks "What does a sewer camera inspection find?" |
| Do you repair or replace sewer lines? | LEFT OUT | Skipped: "Do you offer sewer repair or replacement?" answers it in full |

## Service page (`svc-preventative-sewer-maintenance`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Preventative Sewer Maintenance in Escondido, CA" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription / definition.answer | ADAPTED | Same definition, Escondido added |
| definition.supporting 1 (public utilities call it "preventive maintenance") | LEFT OUT | No tie to an Escondido fact |
| definition.supporting 2 (not one fixed task; a visit can include a camera pass, cleaning, a second look, locating) | ADAPTED | Section 2 |
| definition.supporting 3 (some lines have a reason; a line with no history of problems does not need a default schedule) | ADAPTED | Section 4 |
| definition.scope | ADAPTED | Section 3 ("inspection and cleaning. It is not repair") |
| hero.scope, cardTitle, cardIntro; navLabels; images; extraServiceOptions | LEFT OUT | Template slots |
| signals: gurgling or recurring clogs; a backup that has already happened; known risk factors | USED | Problem cards 1-3 (`sl-blocks/preventative-sewer-maintenance.ts`) |
| signals: several drains slow; a sewage-like odor; wet or spongy yard patches; signals.note | LEFT OUT | FAQ "Why are all my drains slow or gurgling?" carries them |
| signals item 6 (mature trees, buildup between cleanings, undocumented backups) | ADAPTED | Section 4 last sentence ("What raises the question is the line") |
| limits.can, limits.cannot, limits.callout, intro | LEFT OUT | FAQ "What does a sewer camera inspection find?" and "What can a sewer camera not see?" carry them |
| process steps 1 to 6 (review the history; access the line; inspect and record; clean when appropriate; look again; review the findings) | USED | `process`, verbatim; steps 2-5 also adapted into sections 2 and 3 |
| process.prep (history, earlier footage, location of your cleanout, questions) | ADAPTED | Section 3 ("so know where yours is"); rest LEFT OUT |
| decision (camera first or cleaning first), comparison table | LEFT OUT | FAQ "Should a camera inspection come before cleaning?" carries it |
| ask items (video, findings, what part was viewed, what cleaning was done, whether locating was done); ask.keep | USED | Inclusion 5 (video and written findings, what part was viewed); the rest LEFT OUT (FAQ) |
| audiences, markets (3 hubs), faqTitle, eyebrows, request.* | LEFT OUT | Template slots; `coverage` replaces the hubs |
| relatedPageIds (6) and relatedDescriptions | ADAPTED | Escondido page, this service, camera inspection, sewer cleaning |
| inclusions (6 cards) | USED | `sl-blocks/preventative-sewer-maintenance.ts` |
| fourth problem card: an address whose sewer agency is unclear | ADAPTED | From `responsibility.answer` p2 and `systemExplainer` p8 |

### Service FAQ

Service FAQ (16): all 16 USED verbatim. The cost and timing questions are carried as the service page words them.

Total FAQ on the page: 7 Escondido + 16 service = 23.

## Facts to confirm

- The 2012 Wastewater Master Plan sentence is dated and about City mains only; the page says so. The page states no inspection or cleaning interval for the City, the code or The Sewer Pros.
- The Building Division number (760) 839-4647 is the City's; the page says to confirm with the City.
- The page does not say which agency (City, Vallecitos Water District, septic) serves an address; the fourth card says to ask Public Works or check the Vallecitos page.
- The new pageId `sl-escondido-maintenance` is not yet in `data/pages/approved-pages.ts`; it needs registration before it renders.
