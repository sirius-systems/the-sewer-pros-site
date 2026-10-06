# Source report: sl-escondido-prepurchase

Page: Pre-Purchase Sewer Inspection in Escondido, CA (`escondidoPrePurchaseContent`, `content/pages/sl-sd-escondido-prepurchase.tsx`).

Sources:
- LOCATION: `escondidoContent` in `content/pages/san-diego-escondido.tsx` (City of Escondido facts read 2026-10-04; most City pages are undated, so the page says "confirm with the City" and states no agency dates).
- SERVICE: `svc-pre-purchase-sewer-inspection` `v2` in `content/pages/services.tsx`, plus `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS` and `SERVICE_PROBLEM_SHOTS` in `content/pages/service-location-shared.ts` (this service has no `sl-blocks` file).

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Consistency with the existing Escondido cleaning page (`content/pages/sl-rebuild/sl-escondido-cleaning.tsx`): section 22-165 is stated the same way (owner responsible for maintenance, repair, replacement, cleaning and removal of blockages and the cost of that work; "up to and including the connection to the main" as the only quotation, nine words; the one exception for damage the owner proves came from City or City-contractor work; "none found" for any City program; no claim about who may perform repair).

## The four body sections and their sources

| # | h2 on the page | Escondido source | Service source |
|---|---|---|---|
| 1 | What you take on when an Escondido sale closes | `responsibility.answer` p1, lateral card, table rows 1, 2, 4, 5; `municipalProgram.covers` (a), (c), (e); `keyTakeaways` 1-2 | `definition.supporting` 1, `limits.can` intro (visible conditions in the section reached) |
| 2 | No sale-time rule found, and the address still has to be checked | `buyingGuide.lede` and `body`; `keyTakeaways` 3; `responsibility.answer` p2; `systemExplainer` p8; FAQ 6 and 8 | `definition.supporting` 2 (a scope is separate from a general home inspection) |
| 3 | The code’s City-present video is not a buyer’s scope | `municipalProgram.steps` 1-5, `callout`; `systemExplainer.card.closing` | `process` step 3 (camera run), `limits.cannot` |
| 4 | No program found, a 1981 median, and a permit before any repair | `municipalProgram.lede`, `doesNotCover` 2, `afterSteps` (permit), `closing`; `housingAge`; `whoToCall.secondaryAgency`; FAQ 5 | `independent.note`, `ask.keep`, `limits.cannot` (a camera does not prescribe a repair) |

Body word count about 480 (target 420-480). Meta description under 160 characters.

## City of Escondido location page

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle / metaDescription | ADAPTED | Service name swapped in; metaDescription replaced by a page-specific one (139 characters) |
| hero.title and hero.intro (Section 22-165 puts the lateral on the owner up to the connection to the main; get evidence before you clean, buy or approve major work) | ADAPTED | Hero intro: the owner duty tied to buying; no sale-time rule found; H1 names the service |
| heroForm (bullets incl. "Serving the San Diego area since" year, request card, nextSteps, form, hours) | LEFT OUT | Template supplies its own form; the founding-year line and hours are not carried onto service pages |
| heroForm.card.note (to report a sewage overflow in the public sewer, call the City) | LEFT OUT | Not about buying; FAQ 4 carries it |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level |
| keyTakeaways 1 (City runs the public main; 22-165 makes the owner responsible for the lateral up to the connection to the main) | ADAPTED | Hero and section 1 |
| keyTakeaways 2 (owner bears every cost incl. verifying breakage; the one exception is City-caused damage shown by video with a City employee present) | ADAPTED | Section 1 (cost of verifying, the exception) and section 3 (the video) |
| keyTakeaways 3 (no City lateral repair, grant or reimbursement program and no sale-time inspection rule; "none found", not a confirmed absence) | ADAPTED | Section 2 (no sale-time rule) and section 4 (no program), both as "none found" |
| keyTakeaways.jumpNav; serviceCards (9) and helpBar | LEFT OUT | Same |
| responsibility.answer p1 (owner responsible for the lateral; 22-165 wording; the one City-caused exception) | ADAPTED | Section 1 (owner after closing; exception) |
| responsibility.answer p2 (rules and numbers apply to addresses on the City system; Vallecitos Water District serves parts of Escondido; some properties on septic) | ADAPTED | Section 2: both facts, "confirm which applies to the address you are buying" |
| responsibility card "The public sewer main" (Wastewater Division; Hale Avenue Resource Recovery Facility; FAQ describes the main) | ADAPTED | Section 1: "The City maintains the public sewer main"; plant detail LEFT OUT |
| responsibility card "The sewer connection lateral" (code term vs the FAQ’s "sewer lateral"; 22-165(e); the FAQ describes the owner’s part) | ADAPTED | Section 1; FAQ description LEFT OUT (FAQ 1) |
| responsibility table row 1 (who runs or arranges it; owner at the owner’s cost under 22-165(a) and (c)) | ADAPTED | Section 1 |
| responsibility table row 2 (where it ends: up to and including the connection to the main) | ADAPTED | Hero |
| responsibility table row 3 (who to contact first: City Public Works; free main check; clear main means the lateral; permits) | ADAPTED | Permit half in section 4; Public Works half LEFT OUT (FAQ 4) |
| responsibility table row 4 (what help exists: City maintains the main; no grant; City responsible only for damage it proves it caused) | ADAPTED | Sections 1 and 4 |
| responsibility table row 5 (where an inspection helps; 22-165(c) cost of verifying) | ADAPTED | Section 1 (cost of verifying; visible conditions) |
| responsibility.note (general information, not legal advice) | LEFT OUT | No legal claim is made; section 2 says state-level rules are outside the page |
| systemExplainer p1-3 (City runs the public sewer; roughly 350 miles of pipeline and over 7,500 manholes to the Hale Avenue facility; sewer separate from storm drain) | LEFT OUT | Same |
| systemExplainer p4 (equipment: three combination trucks and a CCTV van; staff routinely clean and inspect mains) | LEFT OUT | City equipment detail; no tie |
| systemExplainer p5 (Sewer System Management Plan: call the City before cleaning a private lateral so it can remove debris pushed into the public line; not a program, does not require our services) | LEFT OUT | Not about buying; no tie |
| systemExplainer p6 (businesses: Environmental Programs, fats, oil and grease program) | LEFT OUT | Same |
| systemExplainer p7 (2012 Wastewater Master Plan: about half of gravity mains installed before 1980; dated, City mains only) | LEFT OUT | No tie; FAQ 6 carries the 2012 plan |
| systemExplainer p8 (we found no City map of its sewer service area; Vallecitos serves parts of Escondido) | ADAPTED | Section 2: Vallecitos and septic; "no City map" LEFT OUT |
| systemExplainer p9 (pages give no current system age; no claim about roots, wet weather or soil) | LEFT OUT | Same |
| systemExplainer p10 (a code section does not tell the condition of an individual lateral; only an inspection can) | ADAPTED | Section 4 last sentence of paragraph 1 ("A scope of the line does.") |
| systemExplainer.card (what a camera can show; distance count; does not establish a property line, the connection or the City’s responsibility) | ADAPTED | Section 3: footage records where along the line a condition sits; does not establish the connection or the City’s responsibility |
| housingAge paragraph 1 (about half of units built in the 1970s and 1980s; median year built 1981; about 10 percent before 1960; about 16 percent 2000 or later) | ADAPTED | Section 4: median 1981 and "about half" in the 1970s and 1980s; the 10 and 16 percent figures LEFT OUT |
| housingAge paragraph 2 (Census counts homes, not pipes; Escondido city is not necessarily the City’s sewer service area; a camera inspection shows the line) | ADAPTED | Section 4: "counts homes, not sewer pipes"; the service-area caveat LEFT OUT for length |
| housingAge table (ten rows) and sourceNote (total 52,239 units, margin of error, ACS 2020-2024 B25034 and B25035) | LEFT OUT | Table not carried; the source is in `sources` |
| whoToCall paragraph (call the City; Public Works takes reports of overflowing manholes and sewer lines; when unsure whether main or lateral) | LEFT OUT | Not about buying; FAQ 4 carries it |
| whoToCall.agency (City Public Works (760) 839-4668; 24 hours a day for a backup with an unclear source; 911; reporting app) | LEFT OUT | FAQ 4 carries it |
| whoToCall.secondaryAgency (Building Division (760) 839-4647 for the repair permit; Field Engineering (760) 839-4664 for the encroachment permit) | ADAPTED | Section 4: repair permit and the Building Division number, marked as the City’s; Field Engineering LEFT OUT (FAQ 5) |
| whoToCall.company (The Sewer Pros phone and hours) | LEFT OUT | No company phone, as the LV pre-purchase page |
| municipalProgram.lede (no grant found; 22-165 spells out who pays; one exception) | ADAPTED | Section 4, "none found" |
| municipalProgram.covers (a) (all maintenance, repair, replacement, cleaning, blockage removal) | ADAPTED | Section 1 |
| municipalProgram.covers (b) (locate, expose and maintain the property line cleanout) | ADAPTED | Fourth problem card |
| municipalProgram.covers (c) (all costs, and the cost of verifying breakage or damage) | ADAPTED | Section 1 |
| municipalProgram.covers (e) ("up to and including the connection to the main"; sole responsibility) | ADAPTED | Hero |
| municipalProgram.covers (f) (after a violation or illegal discharge, a licensed plumber cleans and televises; copy of the video to the City) | LEFT OUT | No tie to buying; FAQ 2 carries it |
| municipalProgram.doesNotCover 1 (the City may be responsible only if the owner proves the damage came from City or City-contractor work) | ADAPTED | Section 1 |
| municipalProgram.doesNotCover 2 (no repair or replacement grant, reimbursement, cap, application or deadline found; no sale-time inspection rule found) | ADAPTED | Sections 2 (sale rule) and 4 (program) |
| municipalProgram.doesNotCover 3 (22-161 and the City FAQ do not reconcile on who may perform repair) | LEFT OUT | Same |
| municipalProgram.whoCanApply | LEFT OUT | Definition detail |
| municipalProgram.steps 1-5 (City-caused-damage claim: prove cause; satisfy a City employee; video from a cleanout or breakout opening with the employee present; City sets time and place; possible City responsibility) | ADAPTED | Section 3: video from a cleanout or breakout opening, employee present, City decides when and where |
| municipalProgram.afterSteps (owner owns the cleanout; 22-165(d) right-of-way bar and cleanout cap exception; City repair permit before any work; encroachment permit) | ADAPTED | Section 4 (repair permit); (d) and encroachment LEFT OUT (FAQ 5) |
| municipalProgram.callout (a camera inspection does not replace the City-present inspection; contact Public Works before paying for work you plan to use in a claim; retrieval dates) | ADAPTED | Section 3: "does not replace the City-present inspection" |
| municipalProgram.closing (neither the code nor the City says they pay for our services; we do not perform repairs or arrange reimbursement) | ADAPTED | Section 4: "does not repair or replace" |
| secondOpinion (ledes, steps, callout, CTA) | ADAPTED | Section 4 (keep the video and findings, compare any estimate); rest LEFT OUT |
| buyingGuide.lede (a defect found after closing is a cost you carry, apart from the narrow case of City-caused damage) | ADAPTED | Section 1 last sentence |
| buyingGuide.body (no sale-time rule found; state disclosure outside the page; confirm which agency serves; repair and encroachment permits; right-of-way bar) | ADAPTED | Section 2 (no rule, "none found", state rules outside the page, confirm the agency) and section 4 (repair permit); right-of-way bar and encroachment LEFT OUT |
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
| Is a sewer inspection required when buying an Escondido home? | USED | Verbatim; this is the answer for the city, which is why the service page’s generic question is skipped |
| What does a sewer camera inspection show? | LEFT OUT | Skipped: the service page answers it in full ("What does a sewer scope look for?", "What does a sewer inspection not show?") |
| Do you repair or replace sewer lines? | USED | Verbatim: a buyer reading a scope result needs it |

## Service page (`svc-pre-purchase-sewer-inspection`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Pre-Purchase Sewer Inspection in Escondido, CA" |
| metaDescription | LEFT OUT | Market-neutral; replaced |
| serviceDescription / definition.answer | ADAPTED | Same definition, Escondido added |
| hero.title, hero.intro | ADAPTED | Hero intro; the no-repair line in section 4 and the FAQ |
| hero.scope, cardTitle, cardIntro, serviceLabel; navLabels; images; messageLabel; extraServiceOptions | LEFT OUT | Template slots |
| definition.supporting 1 (the private lateral; documents visible conditions in the section the camera reaches, on the day; does not repair) | ADAPTED | Sections 1 and 3 |
| definition.supporting 2 (a sewer scope is separate from a general home inspection; ask your home inspector) | ADAPTED | Section 2 ("A sewer scope is separate from a general home inspection") |
| signals: An older home; No record of the line’s condition; A short inspection period | USED | Problem cards 1-3 (`SERVICE_PROBLEMS`) |
| signals: Drain trouble mentioned during the sale; A local sale requirement; Plans to dig after you buy; signals.after | LEFT OUT | FAQ answers carry them; Escondido FAQ 8 is the local-requirement answer |
| limits.can (8 items), limits.cannot (8 items), limits.callout, intro | LEFT OUT | FAQ "What does a sewer scope look for?" and "What does a sewer inspection not show?" carry them; section 1 and 3 use the "visible conditions in the section the camera reaches" framing only |
| process steps 1 to 5 (request; access; camera run; video; written findings) | USED | `process`, verbatim; equipment names only as confirmed (step 3) |
| process.prep (entry point; safe access; note your deadline) | ADAPTED | Fourth problem card (the usual entry point is an exterior cleanout; ask before you book); the other two LEFT OUT (inclusions and the cta carry the deadline) |
| decision (inspection and cleaning are separate; when the camera may not get through) | LEFT OUT | FAQ "Does a sewer scope include cleaning or hydro jetting?" and "What happens if the camera cannot get through the line?" carry it |
| independent band and note (video and findings; The Sewer Pros does not sell repair or replacement; a clear record to compare written estimates against) | ADAPTED | Section 4 last sentences |
| comparison table | LEFT OUT | Hub-level; related links cover siblings |
| ask items: inspection video, written findings, share with your agent | USED | Inclusions 1, 2 and 6 (`SERVICE_INCLUSIONS`) |
| ask items: access point and location; line locating; ask.keep (keep the original video and findings) | ADAPTED | Inclusions 5; ask.keep adapted into section 4 ("Keep the video and written findings to compare against any estimate"); locating LEFT OUT (FAQ) |
| evidence block (root intrusion, offset, standing water, footage summary), audiences, markets (3 hubs), faqTitle, eyebrows, request.*, relatedTitle/Columns | LEFT OUT | Template slots; no real footage is claimed; `coverage` replaces the hubs |
| relatedPageIds (4) and relatedDescriptions | ADAPTED | Escondido page, this service, camera inspection, line locating |
| cta (Inspect the line before you commit) | ADAPTED | Rewritten for Escondido, with the inspection-deadline note |
| inclusions (6 cards) | USED | `SERVICE_INCLUSIONS` for this service |
| fourth problem card: a property line cleanout nobody can find | ADAPTED | From `municipalProgram.covers` (b) (22-165(b)) and `process.prep` |

### Service FAQ

Service FAQ (29): 28 USED verbatim, 1 LEFT OUT: "Is a sewer scope required when buying or selling a house?" (the Escondido question "Is a sewer inspection required when buying an Escondido home?" answers it for this city). The time and cost questions are carried as the service page words them (no standard time or price).

Total FAQ on the page: 9 Escondido + 28 service = 37.

## Facts to confirm

- The 1981 median and "about half" in the 1970s and 1980s are stated as the location page states them (ACS 2020-2024, B25034/B25035, Escondido city); the Census table covers Escondido city, which is not necessarily the City's sewer service area, and the page draws no pipe conclusion.
- The Building Division number (760) 839-4647 is the City's; the page says to confirm with the City. No sale-time rule is stated as "none found" in the City pages reviewed, not as a confirmed absence.
- The page does not say which agency (City, Vallecitos Water District, septic) serves an address.
- The new pageId `sl-escondido-prepurchase` is not yet in `data/pages/approved-pages.ts`; it needs registration before it renders.
