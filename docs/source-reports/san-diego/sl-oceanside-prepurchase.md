# Source report: sl-oceanside-prepurchase

Page: Pre-Purchase Sewer Inspection in Oceanside, CA (`oceansidePrePurchaseContent`, `content/pages/sl-sd-oceanside-prepurchase.tsx`).

Sources:
- LOCATION: `oceansideContent` in `content/pages/san-diego-oceanside.tsx` (City of Oceanside Water Utilities, contact, improvement-plan, building-permit and municipal code pages, and U.S. Census ACS 2020-2024 tables B25034 and B25035, read 2026-10-04; every City page shows no date, so the page says "confirm with the City" and states no dates).
- SERVICE: `svc-pre-purchase-sewer-inspection` `v2` in `content/pages/services.tsx`, plus `SERVICE_PROBLEMS`, `SERVICE_INCLUSIONS` and `SERVICE_PROBLEM_SHOTS` in `content/pages/service-location-shared.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Oceanside has one sewer agency on the location page, the City's Water Utilities Department. The page never says the City serves a given address; it says to confirm that with Water Utilities. Consistent with `sl-oceanside-cleaning`: the City names the owner's side as "from the street to your house" and we did not find where the City's part ends.

## The four body sections and their sources

| # | h2 on the page | Oceanside source | Service source |
|---|---|---|---|
| 1 | What you take on when an Oceanside sale closes | `responsibility.answer`, card 2, table rows 1-2, `buyingGuide.lede`, `doesNotCover` 2, `systemExplainer.card.closing` | `definition.supporting` 1 (the private lateral; visible conditions on the day) |
| 2 | No sale-time rule found, so a scope is the buyer’s choice | `buyingGuide.body`, FAQ 7, `doesNotCover` 6, `callout` | `definition.supporting` 2 (a scope is a separate, focused inspection) |
| 3 | A 1984 median year built is not a view of the line | `housingAge` paragraph, table shares, sourceNote | `signals` 1 (an older home; no rule sets an age) |
| 4 | No City repair program found, and a scope does not say which approvals apply | `municipalProgram` (lede, covers 2-3, doesNotCover 1 and 4, callout, closing) | `limits.cannot` (whether any repair is needed), `independent`, `ask.keep` |

## Oceanside location page (`oceansideContent`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle / metaDescription | ADAPTED | Service name swapped in; page-specific metaDescription (<=160 chars) written |
| hero.title / hero.intro (City runs the public system; owner's private line "from the street to your house"; call a plumber; get evidence before cleaning, buying or approving work) | ADAPTED | Hero intro: the City's "from the street to your house" wording and the no-sale-rule finding tied to this service |
| heroForm.bullets (camera inspection with documented findings; cleaning and hydro jetting when the evidence supports it; "Serving the San Diego area since" founding year) | LEFT OUT | Template supplies its own form and bullets; founding-year line is not carried onto service pages |
| heroForm.primaryAction, secondaryActionLabel (call), backdrop and slotPlaceholder (`oceanside-hero`) | LEFT OUT | Template-level; this page uses `heroImage` with neutral alt text |
| heroForm.card (title, intro, phoneLineSuffix hours, nextSteps x3, form) | LEFT OUT | Template supplies its own request card and form; hours not carried |
| heroForm.card.note (to report a sewage overflow in the public sewer, contact City Water Utilities) | LEFT OUT | No tie to this service; the City's contact facts are carried through the whoToCall rows below |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level |
| keyTakeaways 1 (Water Utilities runs the public system: over 450 miles, two plants, 34 lift stations) | LEFT OUT | No tie to buying; the system counts are not reused |
| keyTakeaways 2 (private lines "from the street to your house" are the owner's; call a plumber for a leak; exact point where the City's part ends not found) | ADAPTED | Section 1 (owner's line after closing; connection point not found) |
| keyTakeaways 3 (no City lateral repair, grant or reimbursement program; no sale-time inspection rule; "none found", not a confirmed absence) | ADAPTED | Sections 2 and 4 (no sale-time rule found; no repair program found; "none found" wording) |
| keyTakeaways.jumpNav (9 anchors) | LEFT OUT | Template-level; the page has its own anchors |
| serviceCards (9 service cards, eyebrow, title, helpBar) | LEFT OUT | Hub grid; the services link through `relatedPageIds` |
| responsibility.answer (City runs the public system; "from the street to your house"; plumber for a leak; connection point and under-the-street section not found; confirm with Water Utilities) | ADAPTED | Section 1: City runs the public system, owner's private line, connection point and street section not found; the plumber instruction LEFT OUT |
| responsibility card "The public sewer system" (City responsible for operation and maintenance of collection and treatment facilities; 450 miles, two plants, 34 lift stations) | LEFT OUT | System description with no tie to this service |
| responsibility card "The private sewer line" (City's own term is "private sewer lines"; plumbers call it the lateral; the City page does not use that word) | ADAPTED | Section 1: "private sewer lines" in the City's words; "lateral" term LEFT OUT |
| responsibility table row 1 (who runs or arranges it: City Water Utilities / the owner, per the City) | ADAPTED | Section 1 (the owner is you after closing) |
| responsibility table row 2 (where it ends: City does not publish the exact connection point; no statement on the street section) | ADAPTED | Section 1 and the fourth problem card |
| responsibility table row 3 (who to contact first: City customer service (760) 435-5800 for the public system; plumber for a leak on your property) | ADAPTED | Fourth problem card ((760) 435-5800, marked the City's) |
| responsibility table row 4 (what help exists: City operates its facilities; no City program for repairing or replacing an existing lateral found) | ADAPTED | Section 4 (no City program found) |
| responsibility table row 5 (where an inspection helps: camera records visible condition and where along the line) | LEFT OUT | Camera is a separate service; service page carries the evidence wording |
| responsibility.note (general information, not legal advice; contact Water Utilities to confirm) | LEFT OUT | The page makes no legal claim; the confirm-with-the-City wording is used where relevant |
| systemExplainer p1 (City runs collection and treatment itself) | LEFT OUT | No tie to this service |
| systemExplainer p2 ("Run by the City": operates and maintains collection and treatment, including an industrial waste inspection program) | LEFT OUT | No tie to this service; industrial program is not residential |
| systemExplainer p3 ("Scale": over 450 miles, two plants, 34 lift stations) | LEFT OUT | Counts not reused on this page |
| systemExplainer p4 ("Plans the City lists": 2021 Sewer System Management Plan, 2015 Sewer Master Plan, cited only as documents the City lists) | LEFT OUT | No tie to this service |
| systemExplainer p5 ("Which agency serves an address": no map or statement placing a property under a different wastewater agency; confirm with Water Utilities at (760) 435-5800) | ADAPTED | Fourth problem card: no map or statement placing a property under a different agency; confirm with Water Utilities |
| systemExplainer p6 (pages do not say whether the system is combined or separate, or give an age for mains or laterals; no claim made) | LEFT OUT | No tie to this service |
| systemExplainer p7 (nothing on the pages tells the condition of any individual lateral; only an inspection can) | LEFT OUT | Covered by the service page's evidence wording |
| systemExplainer.card (what a camera can show: six bullets; closing: recorded evidence with a distance count, measured from where the camera entered; does not establish a property line, the connection to the City's main or the City's responsibility) | ADAPTED | Section 1: footage records where along the line a condition sits, measured from where the camera entered; does not establish where the City's part begins; camera bullets LEFT OUT |
| housingAge paragraph (median year built 1984, margin of error 2 years, ACS 2020-2024; about 16.9% before 1970, 48.6% 1970-1989, 34.5% 1990 or later; the 1980s the largest decade at 27.6%) | ADAPTED | Section 3: median 1984 +/- 2, ACS 2020-2024, the three shares (16.9 / 48.6 / 34.5); the 27.6% LEFT OUT |
| housingAge table (11,328 / 32,537 / 23,132 / total 66,997 housing units) | LEFT OUT | Counts not reused |
| housingAge.sourceNote (B25034 and B25035; groupings are our arithmetic; year built does not tell condition or material of a lateral, which can be repaired, rerouted or replaced; Census place may not match every address the City serves) | ADAPTED | Section 3: counts describe homes, not pipes; a lateral can be repaired, rerouted or replaced; Census place may not match the City's service area; B25034/B25035 table links and the arithmetic note LEFT OUT |
| whoToCall paragraph (public sewer questions to City Water Utilities; plumber for a leak; an independent camera inspection helps when a plumber or the City points to your lateral) | LEFT OUT | Not needed on this page |
| whoToCall.agency panel ((760) 435-5800 customer service; (760) 435-3900 water emergencies, with option 4 by day and option 1 after hours, framed around City water and not presented as a sewer line; no published office hours) | ADAPTED | Fourth problem card: (760) 435-5800 only, marked the City's; (760) 435-3900, option numbers and the no-published-hours note LEFT OUT (not about buying) |
| whoToCall.company (The Sewer Pros phone and hours from `marketOperatingDetail`) | LEFT OUT | No company phone on this page, as in the Carlsbad and Chula Vista models |
| municipalProgram.lede (no City lateral repair, replacement, grant, reimbursement or inspection-assistance program found on the pages reviewed; "none found", pages undated; contact page says call a plumber) | ADAPTED | Section 4: no City repair, replacement, grant or reimbursement program found; list of pages reviewed LEFT OUT |
| municipalProgram.covers 1 (private sewer lines "from the street to your house" are the owner's) | LEFT OUT | Covered by the responsibility rows |
| municipalProgram.covers 2 (improvement plan for sewer improvements added, removed, replaced or altered in a public right-of-way, City easement or City property; reviewed and approved by Water Utilities; signed by a Registered Civil Engineer) | ADAPTED | Section 4: improvement-plan rule; Registered Civil Engineer detail LEFT OUT |
| municipalProgram.covers 3 (improvements, grading or alterations on private property or in the right-of-way may trigger a City permit; consult Development Services and City code) | ADAPTED | Section 4: private-property work may trigger a permit; Development Services named |
| municipalProgram.covers 4 (building permit applications with plans go through the City's online permit portal) | LEFT OUT | Portal procedure with no tie to this service |
| municipalProgram.doesNotCover 1 (no City grant, reimbursement, cap, eligibility rule or application process for repairing or replacing an existing lateral) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 2 (exact connection point not found; unknown whether owner's part includes the street section) | ADAPTED | Section 1 and the fourth problem card |
| municipalProgram.doesNotCover 3 (no statement about damage to a private line the City itself caused) | LEFT OUT | Carried by the location FAQ |
| municipalProgram.doesNotCover 4 (no statement that every repair or replacement of an existing lateral needs a particular permit) | ADAPTED | Section 4: no rule found that covers every repair of an existing lateral |
| municipalProgram.doesNotCover 5 (no sewer-specific backup or overflow instruction or number from the City) | LEFT OUT | Not needed on this page; the location FAQ carries it |
| municipalProgram.doesNotCover 6 (no City inspection requirement for existing laterals) | ADAPTED | Section 2: no inspection requirement found, stated for the sale (see bg_body) |
| municipalProgram.doesNotCover 7 (no statement of whether the system is combined or separate) | LEFT OUT | No tie to this service |
| municipalProgram.whoCanApply (owners of a property served by the City; confirm the City serves your address before applying any rule) | ADAPTED | Fourth problem card: confirm that the City serves the address |
| municipalProgram.callout (confirm the City serves your address; ask Water Utilities and Development Services which approvals apply before paying for work on a lateral or in the street; a camera does not tell you which approvals apply and does not replace any review the City requires; pages undated) | ADAPTED | Section 4: a scope does not say which approvals apply; ask Water Utilities and Development Services; does not replace any review the City requires |
| municipalProgram.closing (nothing reviewed says any agency pays for our services; The Sewer Pros does not repair or replace and does not arrange reimbursement) | ADAPTED | Section 4: The Sewer Pros inspects and documents; it does not repair or replace; the no-reimbursement sentence LEFT OUT |
| secondOpinion (two ledes, CTA, Inspect / Document / Decide steps x3, callout on sales-driven recommendations) | ADAPTED | Section 4: keep the video and findings to compare against any estimate (the service page's independent band); hub copy LEFT OUT |
| buyingGuide.lede (camera shows visible condition of the lateral before closing; sewer scope is separate from a home inspection; after closing the owner is you) | ADAPTED | Sections 1 and 2: owner after closing is you; a sewer scope is separate from a home inspection (ask your home inspector) |
| buyingGuide.body (no sale-time inspection, certification or seller disclosure rule found on the City pages; not a confirmed absence; state-level rules outside; confirm with Water Utilities that the City serves the address and where its part ends; not legal advice) | ADAPTED | Section 2 (no sale-time inspection, certification or seller disclosure rule found; not a confirmed absence; state-level rules outside this page) and the fourth problem card (confirm the City serves the address); the "where its part ends" ask moves to section 1 |
| buyingGuide links, CTA and agents block (home buyers, pre-purchase, real estate agents) | LEFT OUT | Hub elements |
| nearbyAreas (six other San Diego-area locations; market hub link) | ADAPTED | `coverage`: the six other San Diego locations; the market hub link is left out |
| finalCta (title, two paragraphs, three bullets, form) | ADAPTED | Title becomes `cta.title`; body rewritten for this service; paragraphs and bullets left out |
| sources (7 links: five City pages, two Census tables; lastReviewed; closingNote) | USED | Used as `sources: oceansideContent.sources`. The sources are undated; the page says confirm with the City and states no dates |
| IMAGE_SLOTS registry and service-card image slots (`oceanside-hero`, `svc-*`, `system-street`, `call-cleanout`, `program-footage`, `so-*`, `buy-*`, `final-bg`) | LEFT OUT | Not reused; this page defines its own neutral-alt slots through `pageImageSlots` |

### Oceanside FAQ (10)

| Question | Status | Reason |
|---|---|---|
| Who runs the public sewer system in Oceanside? | USED | Verbatim, topic pill "In Oceanside" |
| Is the private sewer line the owner’s responsibility in Oceanside? | USED | Verbatim, topic pill "In Oceanside" |
| Where does the City’s responsibility end and the owner’s begin? | USED | Verbatim, topic pill "In Oceanside" |
| Who do I call about a sewer leak or backup in Oceanside? | USED | Verbatim, topic pill "In Oceanside" |
| Does Oceanside have a lateral repair grant or reimbursement program? | USED | Verbatim, topic pill "In Oceanside" |
| Do I need City approval to work on a lateral in the street or a City easement? | USED | Verbatim, topic pill "In Oceanside" |
| Is a sewer inspection required when buying an Oceanside home? | USED | Verbatim, topic pill "In Oceanside"; answers the generic "required" question for this city |
| How old is Oceanside’s housing, and does that tell me about my lateral? | USED | Verbatim, topic pill "In Oceanside"; ties to section 3 |
| What does a sewer camera inspection show? | LEFT OUT | The service page answers it in full ("What does a sewer scope look for?", "What does a sewer inspection not show?") |
| Do you repair or replace sewer lines? | USED | Verbatim, topic pill "In Oceanside"; kept, as the Chula Vista pre-purchase page keeps it |

## Service page (`svc-pre-purchase-sewer-inspection`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Pre-Purchase Sewer Inspection in Oceanside, CA" |
| metaDescription | LEFT OUT | Market-neutral (names three cities); replaced by a page-specific one |
| serviceDescription | ADAPTED | Same definition with "serving a home in Oceanside, California, before closing" |
| hero.title, hero.eyebrow ("Home buyers and real estate") | ADAPTED | Title "Pre-Purchase Sewer Inspection in Oceanside"; eyebrow replaced by "Oceanside, CA" |
| hero.intro p1 (camera inspection arranged during a purchase; accessible part of the line; review visible condition before closing) | ADAPTED | Hero intro last sentence |
| hero.intro p2 (cleaning, camera diagnostics and locating only; no repair) | ADAPTED | Section 4 last sentence ("inspects and documents; it does not repair or replace") |
| hero.primaryAction, secondaryAction, v2.images, hero.scope (3), cardTitle, cardIntro, serviceLabel, messageLabel, extraServiceOptions, navLabels | LEFT OUT | Template slots |
| definition.answer (sewer scope; camera advanced through an entry point; live view; recorded) | ADAPTED | `serviceDescription` and hero intro |
| definition.supporting 1 (the private sewer lateral connects the building to the public main; visible conditions in the section the camera reaches, on the day of the visit; does not repair) | ADAPTED | Sections 1 and 3 (the line you take on; documents visible conditions in the section the camera reaches) |
| definition.supporting 2 (a sewer scope is a focused inspection; ask your home inspector) | ADAPTED | Section 2 |
| signals 1 An older home | USED | Problem card 1 (`SERVICE_PROBLEMS`); also section 3 ("No rule sets a home age at which a scope is required") |
| signals 2 No record of the line's condition | USED | Problem card 3 as ordered in `SERVICE_PROBLEMS` |
| signals 5 A short inspection period | USED | Problem card 2 as ordered in `SERVICE_PROBLEMS` |
| signals 3 Drain trouble mentioned during the sale; 4 A local sale requirement; 6 Plans to dig after you buy | LEFT OUT | FAQ carries them; the Oceanside no-sale-rule finding is in section 2 |
| signals.after, signals.image, eyebrow, title | LEFT OUT | Template slots |
| limits.can (8 items), canTitle, canLead | LEFT OUT | FAQ "What does a sewer scope look for?" carries it |
| limits.cannot (waterline; sections not reached; soil and voids; wall thickness; exact slope or depth; every leak; future performance) | LEFT OUT | FAQ "What does a sewer inspection not show?" carries it |
| limits.cannot last item (whether any repair is needed, or what kind; a camera result documents what is visible and does not prescribe a repair method) | ADAPTED | Section 4: a scope does not tell you which approvals apply to a defect it finds |
| limits.callout (a visibly clear line is not proof the whole line is in good condition) | LEFT OUT | FAQ "What does a clear sewer scope mean?" carries it |
| process steps 1-5 (Request, Access, Camera run, Video, Written findings) | USED | `process`, verbatim; equipment names only as owner-confirmed |
| process.intro, process.prep (3 items) | LEFT OUT | No slot; FAQ carries timing and access |
| decision (inspection and cleaning are separate services; when the camera may not get through; links) | LEFT OUT | FAQ answers carry it |
| independent steps (Inspect, Document, Decide) and note (not tied to a repair job; a clear record to compare written estimates against) | ADAPTED | Section 4 last two sentences |
| comparison table (5 rows) | LEFT OUT | Table; the related pages are linked through `relatedPageIds` |
| ask items (video, written findings, access point and location, locating, what to share with your agent) | ADAPTED | Inclusions 1, 2, 5, 6 via `SERVICE_INCLUSIONS` (video, findings, entry point, records you can share); others LEFT OUT (FAQ carries them) |
| ask.keep (keep the original video and findings; compare written estimates; a camera finding is not a repair recommendation) | ADAPTED | Section 4 (keep the video and written findings to compare against any estimate) |
| evidence mosaic (4 "Example:" camera slots, caveat) | LEFT OUT | No place-specific or real-job imagery is claimed on this page |
| audiences (agents, home inspectors, buyers, sellers) | LEFT OUT | Template slot |
| markets (three hubs) | LEFT OUT | `coverage` replaces the hubs with the six other San Diego locations |
| request (title, intro, scope statement, submitLabel), faqTitle, eyebrows, relatedTitle | LEFT OUT | Template slots; `cta` rewritten for Oceanside |
| relatedPageIds (4: camera inspection, cleaning and camera, line locating, sewer cleaning) and relatedDescriptions | ADAPTED | Oceanside page, this service, camera inspection, line locating (as the Chula Vista pre-purchase page) |
| cta (title, body) | ADAPTED | Rewritten for Oceanside; the inspection-deadline sentence kept |
| Six inclusion cards (video, written findings, visible conditions, parts not viewed, entry point, records you can share) | USED | `SERVICE_INCLUSIONS` verbatim |
| Fourth problem card | ADAPTED | Location-driven: "An address you cannot yet place in the City's system", from `systemExplainer` p5, `whoToCall` (the City's number) and the buyingGuide "confirm the City serves the address" ask |

### Service FAQ (29)

| # | Question | Status | Reason |
|---|---|---|---|
| 1 | What is a pre-purchase sewer inspection? | USED | Verbatim; carried as the service page words it |
| 2 | What is a sewer lateral? | USED | Verbatim; carried as the service page words it |
| 3 | Is a sewer scope included in a regular home inspection? | USED | Verbatim; carried as the service page words it |
| 4 | Where does the camera go in? | USED | Verbatim; carried as the service page words it |
| 5 | What if there is no cleanout, and do you have to pull a toilet? | USED | Verbatim; carried as the service page words it |
| 6 | What does a sewer scope look for? | USED | Verbatim; carried as the service page words it |
| 7 | What does a sewer inspection not show? | USED | Verbatim; carried as the service page words it |
| 8 | What does a clear sewer scope mean? | USED | Verbatim; carried as the service page words it |
| 9 | What happens if the camera cannot get through the line? | USED | Verbatim; carried as the service page words it |
| 10 | Can a sewer camera see through standing water? | USED | Verbatim; carried as the service page words it |
| 11 | Can a sewer camera find a belly or sag? | USED | Verbatim; carried as the service page words it |
| 12 | Can a sewer camera find a leak? | USED | Verbatim; carried as the service page words it |
| 13 | Can a sewer scope tell what kind of pipe I have? | USED | Verbatim; carried as the service page words it |
| 14 | Does a sewer scope tell me if the pipe needs to be replaced? | USED | Verbatim; carried as the service page words it |
| 15 | What happens if the scope finds roots? | USED | Verbatim; carried as the service page words it |
| 16 | Do I need to clean the sewer before a camera inspection? | USED | Verbatim; carried as the service page words it |
| 17 | Does a sewer scope include cleaning or hydro jetting? | USED | Verbatim; carried as the service page words it |
| 18 | Can a sewer scope tell where a problem is in the yard? | USED | Verbatim; carried as the service page words it |
| 19 | Should I get a sewer scope before buying a house? | USED | Verbatim; carried as the service page words it |
| 20 | Is a sewer scope required when buying or selling a house? | LEFT OUT | The Oceanside question "Is a sewer inspection required when buying an Oceanside home?" answers it for this city |
| 21 | Is a sewer scope worth it for an older house, or one with no plumbing problems? | USED | Verbatim; carried as the service page words it |
| 22 | When should I schedule a sewer scope during the inspection period? | USED | Verbatim; carried as the service page words it |
| 23 | How long does a sewer scope take? | USED | Verbatim; no standard time stated, as the service page words it |
| 24 | How much does a sewer scope cost? | USED | Verbatim; no standard price, as the service page words it (DEC-088) |
| 25 | Do I need to be there for the appointment? | USED | Verbatim; carried as the service page words it |
| 26 | Do I get a video of the sewer inspection? | USED | Verbatim; carried as the service page words it |
| 27 | Do I get written findings from a sewer inspection? | USED | Verbatim; carried as the service page words it |
| 28 | What should a sewer inspection record include? | USED | Verbatim; carried as the service page words it |
| 29 | What should I ask before approving major sewer work? | USED | Verbatim; carried as the service page words it |

Total FAQ on the page: 9 Oceanside + 28 service = 37. Cost and timing questions are carried as the service page words them (DEC-088): no price, no standard time.

## Facts to confirm

- (760) 435-5800 is used once, in the fourth problem card, and is marked the City's, not ours. The page says confirm with the City and states no dates because the City pages are undated.
- No company phone, office, price, offer, response time or guarantee appears on this page.
- The page never says the City accepts or requires our report, and never says the report meets any City condition.
- "None found" for a sale-time rule is stated as the location page states it: the pages reviewed, not a confirmed absence, and state-level disclosure law is outside the page. No legal advice.
- The Census shares are the location page's own arithmetic from tables B25034 and B25035; the page says the counts describe homes, not pipes.
- `sl-oceanside-prepurchase` is not yet registered in `data/pages/approved-pages.ts`.
