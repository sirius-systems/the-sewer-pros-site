# Source audit: sl-florissant-cleaning (rebuild)

Page: Florissant, MO + Sewer Cleaning. Rebuild file: `content/pages/sl-rebuild/sl-florissant-cleaning.tsx`.
Sources: `florissantContent` (`content/pages/st-louis-florissant.tsx`, `loc-stl-florissant`) and the `v2` block of `svc-sewer-cleaning` (`content/pages/services.tsx`).
Replaces the existing entry `sl-florissant-cleaning` in `content/pages/st-louis.tsx` (body, hero intro, meta description; adds serviceDescription, cta, and a new `local` card).
Status key: USED = text carried verbatim or near-verbatim; ADAPTED = fact kept, wording rewritten for this page; LEFT OUT = not in the four-section body, with reason ("via assembly" = the item reaches the page through `service-location-upgrade.ts` / `service-location-shared.ts`, not through the body).

## What changed from the existing body

- Existing body had three sections (about 210 words). New body has exactly four (about 780 words, against 410-460 on the Henderson pages), tying MSD's public sewer, the City program and the mid-century housing stock to what cleaning does and does not do.
- REMOVED an unsupported claim: "Laterals of that era were commonly laid in clay, cast iron, or bituminized fibre pipe. Each fails differently..." The location page says neither MSD nor the City publishes a pipe material or installation era for Florissant. Section 4 says exactly that instead.
- CORRECTED a misstatement: the old body said "The homeowner pays for the initial evaluation". The City's page says the $300 deposit is reimbursed after an approved repair and kept for the plumber's inspection and clerical costs if the application is denied. Section 3 states it that way, labelled the City's term.
- REMOVED "requires video inspection for claim approval" as a bare assertion. The City says its contracted plumber does a cable and camera evaluation and the City Engineer reviews the video report; section 3 says that, and that we make no claim the City accepts an outside report.
- REMOVED the sequencing advice "clean it enough to see it, then inspect" as a recommendation. The service page says there is no required order, so section 3 says a camera look before or after "when your visit includes one" can show what remains.
- REMOVED "Recommending an inspection on a line that does not need one would be the same behaviour we exist to avoid" (self-congratulatory, no source). The point that cleaning is sometimes enough is kept as "a line that flows again is not proof the pipe is sound" plus the City's own "open and serviceable" denial reason.
- Added from the location page: MSD's lateral statement and building-backup number, the City's "annual cabling" maintenance wording, spot repairs of about 10 feet, denial reasons, the deposit, the clogged-lateral priority rule, the Engineering Division number, the Public Works permit number, the 21,229-unit housing statement, Brookshire and Lindsay Lane.
- Hero intro, meta description (154 characters) and `local` card rewritten; serviceDescription and cta added.

## The four body sections and their sources

| # | h2 | Local source | Service source |
|---|----|--------------|----------------|
| 1 | Where MSD's side ends and your cleaning begins | responsibility.answer (MSD: lateral and connection are private; cave-in traced to the public sewer is MSD's repair), responsibility.table row 3 (MSD building backup (314) 768-6260; limited assistance program), responsibility.note (no published rule on the part under the street), whoToCall.secondaryAgency (Public Works (314) 839-7648 for permit questions) | definition.supporting ("accessible private-property sewer and drain lines, not public sewer mains"); Henderson cleaning recipe: cleaning does not show where the connection is |
| 2 | Roots, grease and the maintenance the City expects of owners | housingAge.table (City: routine maintenance may mean annual cabling, especially large trees or bushes), municipalProgram.paragraphs (spot repairs about 10 feet; not a substitute for regular maintenance; not to replace a lateral or prevent defects) | definition.answer (removal of grease, roots, deposits, debris; hydraulic or mechanical; does not repair), decision (does not repair; may not stop it returning; roots regrow), limits.callout (a line that flows is not proof the pipe is sound) |
| 3 | When cleaning does not settle it, and the City's program | municipalProgram.steps 1-4 (qualifying reasons; $300 deposit; contracted plumber cable and camera evaluation; approved or denied; deposit kept if denied), afterSteps (denial reasons; clogged lateral priority; undated page, no maximum or funding status; Engineering (314) 839-7643), callout (our inspection does not replace the City's plumber; no claim City accepts an outside report; City's crew performs repairs) | process "Camera, when included" and "Review" (a camera may be used before or after, no fixed order), decision.list, independent band (does not sell repair) |
| 4 | Mid-century homes: age tells you little about the line | housingAge.paragraphs (21,229 units; vast majority 1950-1979; city as a whole; no pipe material or era published; working drain is not proof, blockage is not proof of broken), systemExplainer paragraphs 3-5 (Brookshire Wedgewood, Lindsay Lane tentative, public project does not show a lateral) | limits.callout, signals "Clogs that keep coming back" (a camera can help show which) |

## Florissant location page

| Section / item | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Page-specific meta description written. |
| hero.title | LEFT OUT | Location page H1. |
| hero.intro (independent inspection; MSD and City) | ADAPTED | New hero intro: MSD handles the public sewer, the lateral is private, cleaning clears and does not repair. |
| heroForm bullets, form card, nextSteps | LEFT OUT | Shell and company claims (founding year, family-operated). |
| heroForm.card.note (building backup: contact MSD first at (314) 768-6260) | ADAPTED | Section 1, labelled MSD's. |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level. |
| keyTakeaways 1 (MSD repairs the public sewer; lateral is private, owner maintains) | USED | Section 1. |
| keyTakeaways 2 (program covers main to within five feet; $50 fee; the part inside and within five feet stays the owner's) | ADAPTED | Section 3 (covers main to within five feet; blockage within five feet is a denial reason). The $50 annual fee is LEFT OUT of the body: it is a program-funding fact, not a cleaning one. |
| keyTakeaways 3 (camera gives recorded evidence before you clean) | ADAPTED | Section 3 (camera look before or after). |
| keyTakeaways.jumpNav | LEFT OUT | Navigation of the location page. |
| serviceCards (nine cards, helpBar) | LEFT OUT | Not a page field here; related pages cover them. |
| responsibility.answer | USED | Section 1. |
| responsibility.cards "The public sewer" (dye test; MSD repairs) | ADAPTED | Section 1 (cave-in traced to the public sewer). Dye test detail LEFT OUT. |
| responsibility.cards "The lateral line" | ADAPTED | Sections 1 and 3 (program covers main to within five feet; part inside the home and within five feet is the owner's: LEFT OUT of the body, stays on the location page). |
| responsibility.table rows 1-2 | ADAPTED | Section 1. |
| responsibility.table row 3 (MSD building backup; Engineering for sinkhole or program) | ADAPTED | MSD number in section 1; Engineering number in section 3. |
| responsibility.table row 4 (MSD crews for urgent public reports; City program subject to rules, deposit, review) | ADAPTED | Section 3. |
| responsibility.table row 5 (where an inspection helps) | ADAPTED | Section 3 (camera look). |
| responsibility.note (no published rule on the part under the street) | USED | Section 1. |
| systemExplainer 1 (MSD: separate county system, combined City) | LEFT OUT | County-level context, not about cleaning. |
| systemExplainer 2 (page does not label every parcel) | LEFT OUT | Hedge for paragraph 1. |
| systemExplainer 3 (Brookshire Sanitary Relief, about 6,000 feet, 2020-2022) | ADAPTED | Section 4. Construction dates LEFT OUT (page does not state a current status). |
| systemExplainer 4 (Lindsay Lane, Spring 2026 - Summer 2027 tentative) | ADAPTED | Section 4, "tentative" kept. |
| systemExplainer 5 (public project does not show a lateral) | ADAPTED | Section 4. |
| systemExplainer.card bullets (what a camera can show) | LEFT OUT | The service page's camera can/cannot lists cover it. |
| housingAge paragraph 1 (21,229 units; 1950-1979; ACS 2024 via Consolidated Plan) | USED | Section 4. |
| housingAge paragraph 2 (no pipe material or era published) | USED | Section 4. |
| housingAge paragraph 3 (working drain; program denial for small defects and open lines; not a substitute for maintenance) | ADAPTED | Sections 2, 3 and 4. |
| housingAge paragraph 4 (source note) | ADAPTED | Source named in section 4. |
| housingAge.table row 1 (cracks or breaks; hairline cracks as denial reason) | ADAPTED | Section 3. |
| housingAge.table row 2 (joint separation; main to within five feet) | ADAPTED | Section 3. |
| housingAge.table row 3 (roots; annual cabling) | ADAPTED | Section 2. |
| housingAge.table row 4 (blockage with intact pipe; line open and serviceable can be denied) | ADAPTED | Section 3 and the new `local` card. |
| housingAge.table row 5 (problem near the house; within five feet is a denial reason) | ADAPTED | Section 3. |
| whoToCall paragraphs 1-2 (MSD building backup; urgent reports; independent inspection helps) | ADAPTED | MSD in section 1. The list of urgent reports LEFT OUT (not a cleaning topic). |
| whoToCall.agency (MSD (314) 768-6260, limited assistance program) | ADAPTED | Section 1, labelled MSD's. |
| whoToCall.secondaryAgency (Engineering (314) 839-7643; Public Works (314) 839-7648) | ADAPTED | Both in the body (sections 3 and 1), labelled the City's. |
| whoToCall.company | LEFT OUT | Company phone and hours belong to the shell. |
| municipalProgram.lede ($50 fee; main to within five feet; owner responsible inside) | ADAPTED | Section 3 (coverage). Fee LEFT OUT (see keyTakeaways 2). |
| municipalProgram.paragraphs (spot repairs about 10 feet; not a substitute for maintenance) | USED | Section 2. |
| municipalProgram.covers (repair; fill rock and soil, seeding) | ADAPTED | Section 3 (defective lateral). Restoration detail LEFT OUT. |
| municipalProgram.doesNotCover (under the home; septic; landscaping; multi-family and condo wording) | LEFT OUT | Septic, landscaping and the six-unit wording differences are not cleaning topics; they stay on the location page. The within-five-feet exclusion is in section 3. |
| municipalProgram.steps 1-4 | ADAPTED | Section 3 (qualifying reasons including recurring backups and annual fee paid; no prior plumbing inspection required is LEFT OUT; $300 deposit; contracted plumber and Engineer review; deposit reimbursed or kept). Two-week average and tentative repair date LEFT OUT (City timing, not ours). |
| municipalProgram.afterSteps 1 (denial reasons; clogged-lateral priority; access and adult at the home) | ADAPTED | Section 3. Home-sale-contingency denial reason and repair-day access LEFT OUT (buyer and repair-day topics). The City's "emergency repair" wording is quoted as the City's classification only. |
| municipalProgram.afterSteps 2 (undated; no maximum or funding status; Engineering number) | USED | Section 3. |
| municipalProgram.callout | ADAPTED | Section 3. |
| municipalProgram.closing | LEFT OUT | A link. |
| secondOpinion (ledes, cta, steps, callout) | LEFT OUT | Belongs to the independent-inspection page; independence is in section 3's last sentence. |
| buyingGuide (as-is sale, occupancy permit, program not for sale contingency, new owner eligibility) | LEFT OUT | A buyer topic, not a cleaning one. Left for the Florissant pre-purchase page if built. |
| nearbyAreas | LEFT OUT | Not rebuilt; `coverage`/related handling is unchanged. |
| FAQ 1-8 (responsibility; part covered; whole lateral; cost to apply; sinkhole; septic, condo, multi-family; home sale; City inspection) | USED | Merged FAQ via assembly. |
| FAQ 9 What does a sewer camera inspection show | USED | Kept: cleaning is not a camera-type service, so the upgrade does not skip it. |
| FAQ 10 Do you repair or replace | USED | Merged FAQ. |
| finalCta | LEFT OUT | Page-specific `cta` written. |
| sources (9 links, lastReviewed, closingNote) | USED | Passed through by the upgrade. |

## Sewer cleaning service page (v2)

| Section / item | Status | Reason |
|---|---|---|
| seoTitle | LEFT OUT | Existing entry or shell title. |
| metaDescription | LEFT OUT | Page-specific version written. |
| serviceDescription | ADAPTED | Same definition limited to accessible private lines, set in Florissant. |
| hero.intro (removes buildup so wastewater can flow; scope sentence) | ADAPTED | Hero intro; scope statement is in section 3 and the FAQ. |
| v2.hero.scope, cardTitle, cardIntro, navLabels, defaultServiceId, images | LEFT OUT | Template-level. |
| definition.answer (what cleaning is; clears and maintains; does not repair) | USED | Section 2. |
| definition.supporting (camera may be used before or after; private lines, not public mains) | ADAPTED | Sections 1 and 3. |
| definition.scope (full scope statement) | LEFT OUT | Template-level; section 3's last sentence states no repairs. |
| signals 1 Several fixtures draining slowly | USED | Problem card via assembly. |
| signals 2 Gurgling | LEFT OUT | Only three service cards are used; none of the body sections needs it. |
| signals 3 Clogs that keep coming back | USED | Problem card via assembly; also the new `local` card and section 4. |
| signals 4 Sewage-like odors | LEFT OUT | Not used in a card. |
| signals 5 Water rising through a floor drain | USED | Problem card via assembly. |
| signals 6 Wet or lush yard patches | LEFT OUT | Not used in a card. |
| process steps 1-5 and prep | USED | Process steps via assembly. Equipment names appear there only, as confirmed. The camera and review steps are ADAPTED in section 3. |
| methods (hydro jetting vs cable cleaning table, note) | LEFT OUT | Method comparison is service-page content; hydro jetting is its own page. Section 2 says only "hydraulic or mechanical equipment, chosen for the line". |
| limits.intro, can (7 items), cannot (6 items) | ADAPTED | Section 3 (what a camera look can show) and via the FAQ "Can a sewer camera always find the problem?". Waterline and unreached sections are not restated in the body. |
| limits.callout (a line that flows again is not proof) | USED | Section 2. |
| decision.answer, note (does not repair; may not stop it returning) | USED | Section 2. |
| decision.list (when cleaning may be enough, when to look further) | ADAPTED | Section 3. |
| independent band (clear, document, decide; does not sell repair) | ADAPTED | Section 3 last sentence. |
| comparison (6 rows) | LEFT OUT | Layout. |
| ask.items, ask.keep | LEFT OUT | Inclusions and the FAQ "Will I get a video and written findings?" (USED) cover them. |
| factors (access, length, buildup, camera visibility, reporting; how often) | LEFT OUT | The City's annual-cabling statement is used instead in section 2; the service page gives no schedule. |
| myths (4) | LEFT OUT | General education, not Florissant-specific. |
| situations (3) | LEFT OUT | Template-level. |
| markets | LEFT OUT | Template-level. |
| FAQ (14 questions) | USED | Merged by assembly. |
| request (title, intro, scope note, submit label) | LEFT OUT | Page-specific `cta` written. |

## Open fact questions

1. The City's phrase "emergency repair" (a lateral so clogged that cabling fails and nothing can pass) is quoted in section 3 as the City's classification. The rules ban emergency claims for The Sewer Pros; this sentence makes none, but the owner may prefer to drop it.
2. The "$50 annual fee" is not in the body (the $300 deposit is). Say if the fee should appear for symmetry with the St. Charles page.
3. Camera-before-or-after is written as "when your visit includes one". Whether a Florissant cleaning visit includes a camera is an appointment-level fact; the service page says to ask.
