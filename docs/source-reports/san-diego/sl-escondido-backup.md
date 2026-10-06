# Source report: sl-escondido-backup

Page: Recurring Sewer Backup Diagnosis in Escondido, CA (`escondidoBackupContent`, `content/pages/sl-sd-escondido-backup.tsx`).

Sources:
- LOCATION: `escondidoContent` in `content/pages/san-diego-escondido.tsx` (City of Escondido facts read 2026-10-04; most City pages are undated, so the page says "confirm with the City" and states no agency dates).
- SERVICE: `svc-recurring-sewer-backup-diagnosis` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/recurring-sewer-backup-diagnosis.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Consistency with the existing Escondido cleaning page (`content/pages/sl-rebuild/sl-escondido-cleaning.tsx`): section 22-165 is stated the same way (owner responsible for maintenance, repair, replacement, cleaning and removal of blockages and the cost of that work; "up to and including the connection to the main" as the only quotation, nine words; the one exception for damage the owner proves came from City or City-contractor work; "none found" for any City program; no claim about who may perform repair).

## The four body sections and their sources

| # | h2 on the page | Escondido source | Service source |
|---|---|---|---|
| 1 | A repeat backup: the City’s main, or your lateral? | `whoToCall` (paragraph, Public Works), `responsibility` table row 3, `responsibility.answer` p2, `systemExplainer` p8, FAQ 4 | FAQ "Is a recurring backup the city’s problem or mine?" (findings apply only to the segment inspected), `definition.answer` |
| 2 | The City asks to be called before cleaning, and cleaning does not repair | `systemExplainer` p5 (Sewer System Management Plan sentence) | `process` step 2 (clearing, when needed), `causes.after` |
| 3 | The code makes the cleanout and the cost of verifying yours | `municipalProgram.covers` (b), (c), (f) | `process` step 1 and `process.prep` (cleanout is the usual entry point), `inclusions` |
| 4 | No program found, and a diagnosis does not decide the repair | `municipalProgram` (lede, doesNotCover 1 and 2, steps, afterSteps permit, callout, closing) | `independent.note` (multiple estimates), `definition.supporting` 2 |

Body word count about 480 (target 420-480). Meta description under 160 characters.

## City of Escondido location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle / metaDescription | ADAPTED | Service name swapped in; metaDescription replaced by a page-specific one (155 characters) |
| hero.title and hero.intro (Section 22-165 puts the lateral on the owner up to the connection to the main; get evidence before you clean, buy or approve major work) | ADAPTED | Hero intro: the owner duty plus the FAQ’s "clear main probably points to the lateral", tied to a repeat backup |
| heroForm (bullets incl. "Serving the San Diego area since" year, request card, nextSteps, form, hours) | LEFT OUT | Template supplies its own form; the founding-year line and hours are not carried onto service pages |
| heroForm.card.note (to report a sewage overflow in the public sewer, call the City) | ADAPTED | Fourth problem card (manhole or street): Public Works number, 911, reporting app, marked as the City’s |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level |
| keyTakeaways 1 (City runs the public main; 22-165 makes the owner responsible for the lateral up to the connection to the main) | ADAPTED | Hero |
| keyTakeaways 2 (owner bears every cost incl. verifying breakage; the one exception is City-caused damage shown by video with a City employee present) | ADAPTED | Section 3 (costs, verification) and section 4 (the exception) |
| keyTakeaways 3 (no City lateral repair, grant or reimbursement program and no sale-time inspection rule; "none found", not a confirmed absence) | ADAPTED | Section 4: no program, "none found". The sale-time half LEFT OUT (FAQ 8) |
| keyTakeaways.jumpNav; serviceCards (9) and helpBar | LEFT OUT | Same |
| responsibility.answer p1 (owner responsible for the lateral; 22-165 wording; the one City-caused exception) | ADAPTED | Hero; exception in section 4 |
| responsibility.answer p2 (rules and numbers apply to addresses on the City system; Vallecitos Water District serves parts of Escondido; some properties on septic) | ADAPTED | Section 1 last sentence: both facts, "this page does not say who serves your address" |
| responsibility card "The public sewer main" (Wastewater Division; Hale Avenue Resource Recovery Facility; FAQ describes the main) | LEFT OUT | Plant and division detail has no tie to a diagnosis |
| responsibility card "The sewer connection lateral" (code term vs the FAQ’s "sewer lateral"; 22-165(e); the FAQ describes the owner’s part) | ADAPTED | Hero, section 3; FAQ description LEFT OUT (FAQ 1) |
| responsibility table row 1 (who runs or arranges it; owner at the owner’s cost under 22-165(a) and (c)) | ADAPTED | Section 3 (costs) |
| responsibility table row 2 (where it ends: up to and including the connection to the main) | ADAPTED | Hero |
| responsibility table row 3 (who to contact first: City Public Works; free main check; clear main means the lateral; permits) | ADAPTED | Section 1 (Public Works, free main check, "probably in the lateral"); permit in section 4 |
| responsibility table row 4 (what help exists: City maintains the main; no grant; City responsible only for damage it proves it caused) | ADAPTED | Sections 3 and 4 |
| responsibility table row 5 (where an inspection helps; 22-165(c) cost of verifying) | ADAPTED | Section 3 (cost of verifying) |
| responsibility.note (general information, not legal advice) | LEFT OUT | No legal claim is made on the page |
| systemExplainer p1-3 (City runs the public sewer; roughly 350 miles of pipeline and over 7,500 manholes to the Hale Avenue facility; sewer separate from storm drain) | LEFT OUT | Same |
| systemExplainer p4 (equipment: three combination trucks and a CCTV van; staff routinely clean and inspect mains) | LEFT OUT | City equipment detail; no tie |
| systemExplainer p5 (Sewer System Management Plan: call the City before cleaning a private lateral so it can remove debris pushed into the public line; not a program, does not require our services) | ADAPTED | Section 2 |
| systemExplainer p6 (businesses: Environmental Programs, fats, oil and grease program) | LEFT OUT | Same |
| systemExplainer p7 (2012 Wastewater Master Plan: about half of gravity mains installed before 1980; dated, City mains only) | LEFT OUT | No tie; FAQ 6 carries the 2012 plan |
| systemExplainer p8 (we found no City map of its sewer service area; Vallecitos serves parts of Escondido) | ADAPTED | Section 1: Vallecitos and septic; "no City map" LEFT OUT |
| systemExplainer p9 (pages give no current system age; no claim about roots, wet weather or soil) | LEFT OUT | Same |
| systemExplainer p10 (a code section does not tell the condition of an individual lateral; only an inspection can) | LEFT OUT | No tie |
| systemExplainer.card (what a camera can show; distance count; does not establish a property line, the connection or the City’s responsibility) | LEFT OUT | Camera lists live on the service page and in the FAQ |
| housingAge paragraph 1 (about half of units built in the 1970s and 1980s; median year built 1981; about 10 percent before 1960; about 16 percent 2000 or later) | LEFT OUT | No tie to a diagnosis |
| housingAge paragraph 2 (Census counts homes, not pipes; Escondido city is not necessarily the City’s sewer service area; a camera inspection shows the line) | LEFT OUT | No tie |
| housingAge table (ten rows) and sourceNote (total 52,239 units, margin of error, ACS 2020-2024 B25034 and B25035) | LEFT OUT | Table not carried |
| whoToCall paragraph (call the City; Public Works takes reports of overflowing manholes and sewer lines; when unsure whether main or lateral) | ADAPTED | Section 1 |
| whoToCall.agency (City Public Works (760) 839-4668; 24 hours a day for a backup with an unclear source; 911; reporting app) | ADAPTED | Section 1 (number, "24 hours a day", marked as the City’s) and fourth problem card (911, reporting app) |
| whoToCall.secondaryAgency (Building Division (760) 839-4647 for the repair permit; Field Engineering (760) 839-4664 for the encroachment permit) | ADAPTED | Section 4: "a repair permit is required before any lateral repair begins", no number; numbers LEFT OUT (FAQ 5) |
| whoToCall.company (The Sewer Pros phone and hours) | LEFT OUT | No company phone, as the LV backup page |
| municipalProgram.lede (no grant found; 22-165 spells out who pays; one exception) | ADAPTED | Section 4, "none found, not a statement that none exists" |
| municipalProgram.covers (a) (all maintenance, repair, replacement, cleaning, blockage removal) | ADAPTED | Section 3 (with (c)) |
| municipalProgram.covers (b) (locate, expose and maintain the property line cleanout) | ADAPTED | Section 3 |
| municipalProgram.covers (c) (all costs, and the cost of verifying breakage or damage) | ADAPTED | Section 3 |
| municipalProgram.covers (e) ("up to and including the connection to the main"; sole responsibility) | ADAPTED | Hero |
| municipalProgram.covers (f) (after a violation or illegal discharge, a licensed plumber cleans and televises; copy of the video to the City) | ADAPTED | Section 3, labelled "the code’s condition. We do not say our footage meets it" |
| municipalProgram.doesNotCover 1 (the City may be responsible only if the owner proves the damage came from City or City-contractor work) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 2 (no repair or replacement grant, reimbursement, cap, application or deadline found; no sale-time inspection rule found) | ADAPTED | Section 4: program half only |
| municipalProgram.doesNotCover 3 (22-161 and the City FAQ do not reconcile on who may perform repair) | LEFT OUT | Same |
| municipalProgram.whoCanApply | LEFT OUT | Definition detail |
| municipalProgram.steps 1-5 (City-caused-damage claim: prove cause; satisfy a City employee; video from a cleanout or breakout opening with the employee present; City sets time and place; possible City responsibility) | ADAPTED | Section 4: employee present, "the City decides when and where" |
| municipalProgram.afterSteps (owner owns the cleanout; 22-165(d) right-of-way bar and cleanout cap exception; City repair permit before any work; encroachment permit) | ADAPTED | Section 4 (repair permit); (d) and encroachment LEFT OUT (FAQ 5) |
| municipalProgram.callout (a camera inspection does not replace the City-present inspection; contact Public Works before paying for work you plan to use in a claim; retrieval dates) | ADAPTED | Section 4: "Contact Public Works before you pay for work you plan to use in a claim" |
| municipalProgram.closing (neither the code nor the City says they pay for our services; we do not perform repairs or arrange reimbursement) | ADAPTED | Section 4: "does not sell repair or replacement" |
| secondOpinion (ledes, steps, callout, CTA) | ADAPTED | Section 4 (compare more than one written estimate); rest LEFT OUT |
| buyingGuide.lede (a defect found after closing is a cost you carry, apart from the narrow case of City-caused damage) | LEFT OUT | Not about a backup |
| buyingGuide.body (no sale-time rule found; state disclosure outside the page; confirm which agency serves; repair and encroachment permits; right-of-way bar) | LEFT OUT | FAQ 8 carries it |
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
| Do I need a permit for sewer lateral work in Escondido, and can I dig in the street myself? | USED | Verbatim; carries the permit numbers and the right-of-way bar cut from the body |
| Is my Escondido address on the City’s sewer system? | USED | Verbatim |
| Who pays to find out whether a sewer lateral is broken? | USED | Verbatim |
| Is a sewer inspection required when buying an Escondido home? | USED | Verbatim; a backup history matters in a sale, and the answer says none found |
| What does a sewer camera inspection show? | LEFT OUT | Skipped: the service page answers it in full ("What can a sewer camera see?") |
| Do you repair or replace sewer lines? | USED | Verbatim |

## Service page (`svc-recurring-sewer-backup-diagnosis`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Recurring Sewer Backup Diagnosis in Escondido, CA" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription / definition.answer | ADAPTED | Same definition, Escondido added |
| definition.supporting 1 (generally combines symptoms and access, cleaning when blocked, a recorded camera inspection, optional locating, written findings) | ADAPTED | Hero ("with cleaning first when something blocks the view") |
| definition.supporting 2 (a diagnosis documents evidence; no promise of a definitive answer; does not repair) | ADAPTED | Section 4 ("A diagnosis does not repair anything") |
| definition.scope | ADAPTED | Section 4 ("does not sell repair or replacement") |
| hero.scope, cardTitle, cardIntro, slot; navLabels; images; messageLabel | LEFT OUT | Template slots |
| signals: The same clog returns; Several fixtures drain slowly at once; Wastewater at a cleanout or outside drain | USED | Problem cards 1-3 (`sl-blocks/recurring-sewer-backup-diagnosis.ts`) |
| signals: backs up when another fixture is used; gurgling; sewage odors; a yard patch that stays wet; signals.note and after | LEFT OUT | FAQ "How do I know if the backup is in my sewer line or just one drain?" carries the patterns |
| causes (7 items) and causes.after (cleaning does not repair the opening a root came through, a sag, or a damaged joint) | ADAPTED | Section 2 second paragraph; the list itself LEFT OUT (FAQ "Why does my sewer keep backing up?") |
| limits.can, limits.cannot, limits.callout, intro | LEFT OUT | FAQ "What can a sewer camera see?", "Can a sewer camera find the exact cause of a backup?", "Can a sewer camera see through standing water?" carry them |
| process steps 1 to 6 (symptoms and access; clearing when needed; camera inspection; locating when included; findings; your decision) | USED | `process`, verbatim; step 2 is also adapted into section 2 (a camera cannot see under water or through a blockage) |
| process.prep (cleanout is the most common entry point; clear working space; tell us what keeps happening) | ADAPTED | Section 3 ("A cleanout is the usual entry point") and inclusion 1; rest LEFT OUT |
| decision table and list, aside on hydro jetting | LEFT OUT | FAQ "What is the difference between drain cleaning, hydro jetting, and a camera inspection?" and the jetting FAQ carry them |
| independent band and note (further evaluation outside our scope; ask for evidence, multiple written estimates, second opinion) | ADAPTED | Section 4 ("Keep the video and compare more than one written estimate"); the further-evaluation sentence LEFT OUT of the body, FAQ "What if the camera shows something serious?" carries it |
| ask items: full video; written findings | USED | Inclusions 4 and 5 |
| ask items: access point and distance, footage references, what was visible, locate notes, invoice; ask.keep | LEFT OUT | FAQ "What should I ask for after a camera inspection?" carries them; "Keep the video" adapted into section 4 |
| situations (landlords; buyers and sellers; agents and inspectors), markets (3 hubs), faqTitle, eyebrows, request.* | LEFT OUT | Template slots; `coverage` replaces the hubs |
| relatedPageIds (5) and relatedDescriptions | ADAPTED | Escondido page, this service, camera inspection, cleaning with camera |
| inclusions (6 cards) | USED | `sl-blocks/recurring-sewer-backup-diagnosis.ts` |
| fourth problem card: sewage at a manhole or in the street | ADAPTED | From `whoToCall.agency` and `heroForm.card.note` (the City’s number, 911, reporting app) |

### Service FAQ

Service FAQ (29): all 29 USED verbatim. The cost and timing question ("Ask about a free estimate before scheduling.") and the same-day question ("Same-day appointments can be arranged when scheduling permits, Monday through Friday, 8:00am to 4:00pm...") are carried as the service page words them (DEC-088; owner direction 2026-10-05, DEC-139).

Total FAQ on the page: 9 Escondido + 29 service = 38.

## Facts to confirm

- Public Works (760) 839-4668 and its "24 hours a day" listing are the City's statements (City FAQ); the 911 and reporting-app instructions are from the City's wastewater page. The page marks them as the City's and says to confirm with the City; no agency date is stated.
- 22-165(f) is worded as the code's condition only; the page does not say our footage meets it.
- The page does not say which agency (City, Vallecitos Water District, septic) serves an address.
- The new pageId `sl-escondido-backup` is not yet in `data/pages/approved-pages.ts`; it needs registration before it renders.
