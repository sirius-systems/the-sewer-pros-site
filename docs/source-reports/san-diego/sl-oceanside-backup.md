# Source report: sl-oceanside-backup

Page: Recurring Sewer Backup Diagnosis in Oceanside, CA (`oceansideBackupContent`, `content/pages/sl-sd-oceanside-backup.tsx`).

Sources:
- LOCATION: `oceansideContent` in `content/pages/san-diego-oceanside.tsx` (City of Oceanside Water Utilities, contact, improvement-plan, building-permit and municipal code pages, and U.S. Census ACS 2020-2024 tables B25034 and B25035, read 2026-10-04; every City page shows no date, so the page says "confirm with the City" and states no dates).
- SERVICE: `svc-recurring-sewer-backup-diagnosis` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/recurring-sewer-backup-diagnosis.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Oceanside has one sewer agency on the location page, the City's Water Utilities Department. The page never says the City serves a given address. Consistent with `sl-oceanside-cleaning`: the City names the owner's side as "from the street to your house" and we did not find where the City's part ends.

## The four body sections and their sources

| # | h2 on the page | Oceanside source | Service source |
|---|---|---|---|
| 1 | A repeat backup: the City’s system, or your line? | `responsibility.answer`, `doesNotCover` 2, `systemExplainer.card.closing` | FAQ "Is a recurring backup the city’s problem or mine?" (findings apply only to the segment inspected), `process` step 3 |
| 2 | The City says call a plumber, and publishes no sewer backup line | `whoToCall.agency`, `responsibility` table row 3, `doesNotCover` 5 | `inclusions` 3 (a recorded camera run) |
| 3 | Roots, grease, a sag: causes a 1984 median year built cannot rank | `housingAge` paragraph and sourceNote, `systemExplainer` p6 | `causes` (7 items), `causes.after` |
| 4 | No City repair help found, so get the evidence first | `municipalProgram` (lede, covers 2, doesNotCover 1, 3 and 6, callout, closing) | `definition.supporting` 2, `independent.note`, `ask.keep` |

## Oceanside location page (`oceansideContent`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle / metaDescription | ADAPTED | Service name swapped in; page-specific metaDescription (<=160 chars) written |
| hero.title / hero.intro (City runs the public system; owner's private line "from the street to your house"; call a plumber; get evidence before cleaning, buying or approving work) | ADAPTED | Hero intro: the City's "from the street to your house" wording and its plumber instruction tied to a diagnosis |
| heroForm.bullets (camera inspection with documented findings; cleaning and hydro jetting when the evidence supports it; "Serving the San Diego area since" founding year) | LEFT OUT | Template supplies its own form and bullets; founding-year line is not carried onto service pages |
| heroForm.primaryAction, secondaryActionLabel (call), backdrop and slotPlaceholder (`oceanside-hero`) | LEFT OUT | Template-level; this page uses `heroImage` with neutral alt text |
| heroForm.card (title, intro, phoneLineSuffix hours, nextSteps x3, form) | LEFT OUT | Template supplies its own request card and form; hours not carried |
| heroForm.card.note (to report a sewage overflow in the public sewer, contact City Water Utilities) | LEFT OUT | No tie to this service; the City's contact facts are carried through the whoToCall rows below |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level |
| keyTakeaways 1 (Water Utilities runs the public system: over 450 miles, two plants, 34 lift stations) | LEFT OUT | No tie to this service |
| keyTakeaways 2 (private lines "from the street to your house" are the owner's; call a plumber for a leak; exact point where the City's part ends not found) | ADAPTED | Hero intro and sections 1-2 |
| keyTakeaways 3 (no City lateral repair, grant or reimbursement program; no sale-time inspection rule; "none found", not a confirmed absence) | ADAPTED | Section 4 ("none found" wording) |
| keyTakeaways.jumpNav (9 anchors) | LEFT OUT | Template-level; the page has its own anchors |
| serviceCards (9 service cards, eyebrow, title, helpBar) | LEFT OUT | Hub grid; the services link through `relatedPageIds` |
| responsibility.answer (City runs the public system; "from the street to your house"; plumber for a leak; connection point and under-the-street section not found; confirm with Water Utilities) | ADAPTED | Sections 1 and 2: City runs the public system, owner's line, connection point and street section not found; plumber instruction in section 2 |
| responsibility card "The public sewer system" (City responsible for operation and maintenance of collection and treatment facilities; 450 miles, two plants, 34 lift stations) | LEFT OUT | Counts not reused; no tie to a diagnosis |
| responsibility card "The private sewer line" (City's own term is "private sewer lines"; plumbers call it the lateral; the City page does not use that word) | LEFT OUT | Terminology with no tie to this service |
| responsibility table row 1 (who runs or arranges it: City Water Utilities / the owner, per the City) | ADAPTED | Section 1 |
| responsibility table row 2 (where it ends: City does not publish the exact connection point; no statement on the street section) | ADAPTED | Section 1 and the fourth problem card |
| responsibility table row 3 (who to contact first: City customer service (760) 435-5800 for the public system; plumber for a leak on your property) | ADAPTED | Section 2 ((760) 435-5800, marked the City's; plumber for a leak) |
| responsibility table row 4 (what help exists: City operates its facilities; no City program for repairing or replacing an existing lateral found) | ADAPTED | Section 4 (no City program found) |
| responsibility table row 5 (where an inspection helps: camera records visible condition and where along the line) | LEFT OUT | Camera is a separate service; service page carries the evidence wording |
| responsibility.note (general information, not legal advice; contact Water Utilities to confirm) | LEFT OUT | The page makes no legal claim; the confirm-with-the-City wording is used where relevant |
| systemExplainer p1 (City runs collection and treatment itself) | LEFT OUT | No tie to this service |
| systemExplainer p2 ("Run by the City": operates and maintains collection and treatment, including an industrial waste inspection program) | LEFT OUT | No tie to this service; industrial program is not residential |
| systemExplainer p3 ("Scale": over 450 miles, two plants, 34 lift stations) | LEFT OUT | Counts not reused on this page |
| systemExplainer p4 ("Plans the City lists": 2021 Sewer System Management Plan, 2015 Sewer Master Plan, cited only as documents the City lists) | LEFT OUT | No tie to this service |
| systemExplainer p5 ("Which agency serves an address": no map or statement placing a property under a different wastewater agency; confirm with Water Utilities at (760) 435-5800) | LEFT OUT | No tie to this service |
| systemExplainer p6 (pages do not say whether the system is combined or separate, or give an age for mains or laterals; no claim made) | ADAPTED | Section 3: the pages reviewed do not say whether the system is combined or separate; no claim made |
| systemExplainer p7 (nothing on the pages tells the condition of any individual lateral; only an inspection can) | LEFT OUT | Covered by the service page's evidence wording |
| systemExplainer.card (what a camera can show: six bullets; closing: recorded evidence with a distance count, measured from where the camera entered; does not establish a property line, the connection to the City's main or the City's responsibility) | ADAPTED | Sections 2 and 1: footage records where along the line a condition sits, measured from where the camera entered; does not establish where the City's part begins; camera bullets LEFT OUT |
| housingAge paragraph (median year built 1984, margin of error 2 years, ACS 2020-2024; about 16.9% before 1970, 48.6% 1970-1989, 34.5% 1990 or later; the 1980s the largest decade at 27.6%) | ADAPTED | Section 3: median 1984 +/- 2 and the ACS vintage; shares LEFT OUT |
| housingAge table (11,328 / 32,537 / 23,132 / total 66,997 housing units) | LEFT OUT | Counts not reused |
| housingAge.sourceNote (B25034 and B25035; groupings are our arithmetic; year built does not tell condition or material of a lateral, which can be repaired, rerouted or replaced; Census place may not match every address the City serves) | ADAPTED | Section 3: year built does not tell the condition or material of a lateral; table links and the arithmetic note LEFT OUT |
| whoToCall paragraph (public sewer questions to City Water Utilities; plumber for a leak; an independent camera inspection helps when a plumber or the City points to your lateral) | ADAPTED | Section 2: plumber for a leak; "independent camera inspection helps" is the service itself |
| whoToCall.agency panel ((760) 435-5800 customer service; (760) 435-3900 water emergencies, with option 4 by day and option 1 after hours, framed around City water and not presented as a sewer line; no published office hours) | ADAPTED | Section 2: (760) 435-5800 and (760) 435-3900 (water emergencies, framed around City water and not presented as a sewer line), marked the City's; options 4 and 1 and the no-published-hours note LEFT OUT |
| whoToCall.company (The Sewer Pros phone and hours from `marketOperatingDetail`) | LEFT OUT | No company phone on this page, as in the Carlsbad and Chula Vista models |
| municipalProgram.lede (no City lateral repair, replacement, grant, reimbursement or inspection-assistance program found on the pages reviewed; "none found", pages undated; contact page says call a plumber) | ADAPTED | Section 4: none found, "not a statement that none exists"; pages-reviewed list LEFT OUT |
| municipalProgram.covers 1 (private sewer lines "from the street to your house" are the owner's) | LEFT OUT | Covered by the responsibility rows |
| municipalProgram.covers 2 (improvement plan for sewer improvements added, removed, replaced or altered in a public right-of-way, City easement or City property; reviewed and approved by Water Utilities; signed by a Registered Civil Engineer) | ADAPTED | Section 4: improvement-plan rule for the right-of-way, City easement or City property; engineer-signature detail LEFT OUT |
| municipalProgram.covers 3 (improvements, grading or alterations on private property or in the right-of-way may trigger a City permit; consult Development Services and City code) | LEFT OUT | Not needed on this page; the location FAQ carries it |
| municipalProgram.covers 4 (building permit applications with plans go through the City's online permit portal) | LEFT OUT | Portal procedure with no tie to this service |
| municipalProgram.doesNotCover 1 (no City grant, reimbursement, cap, eligibility rule or application process for repairing or replacing an existing lateral) | ADAPTED | Section 4 |
| municipalProgram.doesNotCover 2 (exact connection point not found; unknown whether owner's part includes the street section) | ADAPTED | Section 1 and the fourth problem card |
| municipalProgram.doesNotCover 3 (no statement about damage to a private line the City itself caused) | ADAPTED | Section 4: no City statement about damage to a private line the City itself caused |
| municipalProgram.doesNotCover 4 (no statement that every repair or replacement of an existing lateral needs a particular permit) | LEFT OUT | Not needed on this page; the location FAQ carries it |
| municipalProgram.doesNotCover 5 (no sewer-specific backup or overflow instruction or number from the City) | ADAPTED | Section 2 |
| municipalProgram.doesNotCover 6 (no City inspection requirement for existing laterals) | ADAPTED | Section 4: none found asks for a camera inspection of an existing lateral |
| municipalProgram.doesNotCover 7 (no statement of whether the system is combined or separate) | LEFT OUT | No tie to this service |
| municipalProgram.whoCanApply (owners of a property served by the City; confirm the City serves your address before applying any rule) | LEFT OUT | Carried by the "confirm" wording where relevant |
| municipalProgram.callout (confirm the City serves your address; ask Water Utilities and Development Services which approvals apply before paying for work on a lateral or in the street; a camera does not tell you which approvals apply and does not replace any review the City requires; pages undated) | ADAPTED | Section 4: we make no claim our findings meet any City requirement; the "does not replace any review the City requires" point |
| municipalProgram.closing (nothing reviewed says any agency pays for our services; The Sewer Pros does not repair or replace and does not arrange reimbursement) | ADAPTED | Section 4: The Sewer Pros does not sell repair or replacement; the no-reimbursement sentence LEFT OUT |
| secondOpinion (two ledes, CTA, Inspect / Document / Decide steps x3, callout on sales-driven recommendations) | ADAPTED | Section 4 last sentence: keep the video and compare more than one written estimate (service page `independent.note`); hub copy LEFT OUT |
| buyingGuide.lede (camera shows visible condition of the lateral before closing; sewer scope is separate from a home inspection; after closing the owner is you) | LEFT OUT | Buying material; the service FAQ "Should I get a sewer scope before buying a house?" carries it |
| buyingGuide.body (no sale-time inspection, certification or seller disclosure rule found on the City pages; not a confirmed absence; state-level rules outside; confirm with Water Utilities that the City serves the address and where its part ends; not legal advice) | LEFT OUT | Buying material, not needed on this page |
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
| Is a sewer inspection required when buying an Oceanside home? | USED | Verbatim, topic pill "In Oceanside" |
| How old is Oceanside’s housing, and does that tell me about my lateral? | USED | Verbatim, topic pill "In Oceanside" |
| What does a sewer camera inspection show? | LEFT OUT | The service page answers it in full ("What can a sewer camera see?") |
| Do you repair or replace sewer lines? | LEFT OUT | The service page's repair answers ("What if the camera shows something serious?") cover it |

## Service page (`svc-recurring-sewer-backup-diagnosis`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Recurring Sewer Backup Diagnosis in Oceanside, CA" |
| metaDescription | LEFT OUT | Market-neutral; replaced by a page-specific one |
| serviceDescription / definition.answer | ADAPTED | Same definition with "for properties in Oceanside, California" |
| hero.title, hero.eyebrow | ADAPTED | Title "Recurring Sewer Backup Diagnosis in Oceanside"; eyebrow replaced by "Oceanside, CA" |
| hero.intro p1 (clearing again does not tell you why; camera documents the accessible line; cleaning first when something blocks the view) | ADAPTED | Hero intro |
| hero.intro p2 (cleaning, diagnostics and locating only; no repair) | ADAPTED | Section 4 ("does not sell repair or replacement") |
| hero.primaryAction, secondaryAction, images, hero.scope (4), cardTitle, cardIntro, slot, messageLabel, extraServiceOptions, navLabels | LEFT OUT | Template slots |
| definition.supporting 1 (symptom and access review, cleaning when blocked, recorded camera inspection, optional locating, written findings; separate jobs that can be combined) | ADAPTED | Hero intro and `inclusions` |
| definition.supporting 2 (documents evidence; no promise of a definitive answer; does not repair) | ADAPTED | Section 4 ("A diagnosis does not repair anything") |
| definition.scope, definition.image | LEFT OUT | Scope statement carried by the FAQ; image slot not reused |
| signals 1 The same clog returns | USED | Problem card 1 (`sl-blocks/recurring-sewer-backup-diagnosis`) |
| signals 2 Several fixtures drain slowly at once | USED | Problem card 2 |
| signals 6 Wastewater at a cleanout or outside drain | USED | Problem card 3 |
| signals 3 (backs up when another fixture is used), 4 (gurgling), 5 (odors), 7 (a wet yard patch), note, after | LEFT OUT | FAQ "How do I know if the backup is in my sewer line or just one drain?" carries the patterns |
| causes (7 items: roots; grease; wipes; sag or belly; cracks, broken pipe, offset or separated joints; defective lateral-to-main connection; collapsed section) | ADAPTED | Section 3 (named causes, "Public utility guidance names ...") |
| causes.after (cleaning does not repair the opening a root came through, a sag, or a damaged joint) | ADAPTED | Section 3 last paragraph |
| limits.can (8 items), canTitle, canLead | LEFT OUT | FAQ "What can a sewer camera see?" carries it |
| limits.cannot (waterline; wall thickness; slope; soil; external leak paths; sections not reached; standing water is not a true sag) | ADAPTED | Fourth problem card: "any part it could not view is noted as not viewed"; rest LEFT OUT (FAQ carries them) |
| limits.callout (defect identification depends on image quality; a clear path does not show unviewed sections are free of defects) | LEFT OUT | FAQ carries it |
| process steps 1-6 (Symptoms and access, Clearing when needed, Camera inspection, Locating when included, Findings, Your decision) | USED | `process`, verbatim |
| process.intro, process.prep (5 items) | LEFT OUT | No slot; FAQ "Where does the camera go in?" carries access |
| decision (answer, 3-row table, listTitle, 3 list items, 6 links, jetting aside) | LEFT OUT | FAQ answers carry it |
| independent steps (Clear, Document, Decide) | LEFT OUT | Inclusions 2, 4, 5 carry clear/document; "does not sell repair or replacement" in section 4 |
| independent.note (further evaluation outside our scope; ask for the evidence; multiple written estimates; show the video to another company) | ADAPTED | Section 4 last sentences (keep the video; compare more than one written estimate) |
| ask items (full video; written findings; access point and how far the camera traveled; footage references; what was visible and not viewed; locate notes; invoice and service record) | ADAPTED | Inclusions 4 and 5 (video, written findings); rest LEFT OUT (FAQ "What should I ask for after a camera inspection?") |
| ask.keep (retained video for comparison, a municipal review, comparing proposals; does not establish liability) | ADAPTED | Section 4 (keep the video); municipal-review and liability wording LEFT OUT |
| situations (landlords; home buyers and sellers; agents and home inspectors) | LEFT OUT | Template slot |
| markets (three hubs) | LEFT OUT | `coverage` replaces the hubs with the six other San Diego locations |
| request (title, intro with "Ask about a free estimate before scheduling.", scopeNote, submitLabel), faqTitle, eyebrows, relatedTitle | LEFT OUT | Template slots; the DEC-088 sentences are carried only in the FAQ answers |
| relatedPageIds (5) and relatedDescriptions | ADAPTED | Oceanside page, this service, camera inspection, cleaning and camera (as the Carlsbad backup page) |
| cta (title, body) | ADAPTED | Rewritten for Oceanside; no `cta` on the service page |
| Six inclusion cards (symptoms and access, cleaning first, recorded camera run, video, written findings, locating when included) | USED | `inclusions` from `sl-blocks/recurring-sewer-backup-diagnosis`, verbatim |
| Fourth problem card | ADAPTED | Location-driven: "A line under the street, past where the camera reached", from the City's wording, `doesNotCover` 2 and `limits.cannot` (sections not reached) |

### Service FAQ (29)

| # | Question | Status | Reason |
|---|---|---|---|
| 1 | What is recurring sewer backup diagnosis? | USED | Verbatim; carried as the service page words it |
| 2 | Why does my sewer keep backing up? | USED | Verbatim; carried as the service page words it |
| 3 | Why does my sewer back up again after it was cleared? | USED | Verbatim; carried as the service page words it |
| 4 | How do I know if the backup is in my sewer line or just one drain? | USED | Verbatim; carried as the service page words it |
| 5 | Can grease or "flushable" wipes cause a sewer backup? | USED | Verbatim; carried as the service page words it |
| 6 | Can tree roots cause a recurring sewer backup? | USED | Verbatim; carried as the service page words it |
| 7 | Is a recurring backup the city's problem or mine? | USED | Verbatim; camera findings apply only to the segment inspected; ties to section 1 |
| 8 | What is the difference between drain cleaning, hydro jetting, and a camera inspection? | USED | Verbatim; carried as the service page words it |
| 9 | What can a sewer camera see? | USED | Verbatim; carried as the service page words it |
| 10 | Can a sewer camera find the exact cause of a backup? | USED | Verbatim; carried as the service page words it |
| 11 | Can a sewer camera see through standing water? | USED | Verbatim; carried as the service page words it |
| 12 | Does standing water on the video mean there is a belly or sag? | USED | Verbatim; carried as the service page words it |
| 13 | Can a camera tell me if my sewer pipe is about to fail? | USED | Verbatim; carried as the service page words it |
| 14 | Can the camera get past bends, roots, or a collapse? | USED | Verbatim; carried as the service page words it |
| 15 | Can a diagnosis show where the problem is from above ground? | USED | Verbatim; carried as the service page words it |
| 16 | Do you clear the line before running the camera? | USED | Verbatim; carried as the service page words it |
| 17 | If the line is clear after cleaning, is the pipe healthy? | USED | Verbatim; carried as the service page words it |
| 18 | Will hydro jetting damage my sewer line, and is it safe for older pipe? | USED | Verbatim; carried as the service page words it |
| 19 | Where does the camera go in? Do I need a cleanout? | USED | Verbatim; carried as the service page words it |
| 20 | Will I get video and written findings? | USED | Verbatim; carried as the service page words it |
| 21 | What should I ask for after a camera inspection? | USED | Verbatim; carried as the service page words it |
| 22 | What do PACP and LACP grades mean? | USED | Verbatim; carried as the service page words it |
| 23 | How long does it take, and how much does it cost? | USED | Verbatim; DEC-088 wording kept verbatim ("Ask about a free estimate before scheduling.") |
| 24 | Can you come the same day, and is this emergency service? | USED | Verbatim; DEC-088 wording kept verbatim: weekday same-day when scheduling permits; no 24/7 or emergency service |
| 25 | What if the camera shows something serious? | USED | Verbatim; carried as the service page words it |
| 26 | Should I get a second opinion before approving major sewer work? | USED | Verbatim; carried as the service page words it |
| 27 | How often should a sewer line be inspected? | USED | Verbatim; carried as the service page words it |
| 28 | Can I use the sewer video for a sale or a city review? | USED | Verbatim; carried as the service page words it |
| 29 | Should I get a sewer scope before buying a house? | USED | Verbatim; carried as the service page words it |

Total FAQ on the page: 8 Oceanside + 29 service = 37. The service page's cost and same-day answers (DEC-088 wording) are carried as published (DEC-139).

## Facts to confirm

- (760) 435-5800 and (760) 435-3900 are used only as the City's numbers, and (760) 435-3900 is never presented as a sewer line. The page says confirm with the City and states no dates because the City pages are undated.
- "A diagnosis is a recorded look at your line, not a report to the City" (section 2) is the page's own statement about what the service is. No source says a diagnosis is or is not reported to the City.
- "None found asks for a camera inspection of an existing lateral" (section 4) restates `doesNotCover` 6 (no City inspection requirement for existing laterals found).
- No company phone, office, price, offer, response time or guarantee appears in the body copy, and nothing says our findings satisfy any City requirement.
- `sl-oceanside-backup` is not yet registered in `data/pages/approved-pages.ts`.
