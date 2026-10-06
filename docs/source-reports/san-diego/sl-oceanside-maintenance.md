# Source report: sl-oceanside-maintenance

Page: Preventative Sewer Maintenance in Oceanside, CA (`oceansideMaintenanceContent`, `content/pages/sl-sd-oceanside-maintenance.tsx`).

Sources:
- LOCATION: `oceansideContent` in `content/pages/san-diego-oceanside.tsx` (City of Oceanside Water Utilities, contact, improvement-plan, building-permit and municipal code pages, and U.S. Census ACS 2020-2024 tables B25034 and B25035, read 2026-10-04; every City page shows no date, so the page says "confirm with the City" and states no dates).
- SERVICE: `svc-preventative-sewer-maintenance` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/preventative-sewer-maintenance.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Oceanside has one sewer agency on the location page, the City's Water Utilities Department. The page never says the City serves a given address. No interval, schedule, plan or contract is claimed for The Sewer Pros. Consistent with `sl-oceanside-cleaning`: the City names the owner's side as "from the street to your house" and we did not find where the City's part ends.

## The four body sections and their sources

| # | h2 on the page | Oceanside source | Service source |
|---|---|---|---|
| 1 | The line is the owner’s, and no City inspection rule was found | `responsibility.answer`, `doesNotCover` 2 and 6, `systemExplainer` p4 (plans the City lists) | `definition.supporting` 3, FAQ "How often should I schedule it?" (no single interval) |
| 2 | The cleanout is the door, and the footage has limits | `systemExplainer.card.closing`, `municipalProgram.closing` | `process` steps 1-4, `definition.supporting` 2, `inclusions` 2 |
| 3 | A 1984 median year built is not a maintenance schedule | `housingAge` paragraph and sourceNote | `definition.supporting` 3, `signals` 6 (known risk factors), FAQ "Do all homes need routine sewer cleaning?" |
| 4 | No City repair help found, and a visit is not a repair | `municipalProgram` (lede, covers 2, doesNotCover 1), `responsibility` table row 4 | `limits.callout`, `ask.keep`, FAQ "What should I ask before approving major sewer work?" |

## Oceanside location page (`oceansideContent`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle / metaDescription | ADAPTED | Service name swapped in; page-specific metaDescription (<=160 chars) written |
| hero.title / hero.intro (City runs the public system; owner's private line "from the street to your house"; call a plumber; get evidence before cleaning, buying or approving work) | ADAPTED | Hero intro: the City's "from the street to your house" wording and the no-inspection-requirement finding tied to planned maintenance |
| heroForm.bullets (camera inspection with documented findings; cleaning and hydro jetting when the evidence supports it; "Serving the San Diego area since" founding year) | LEFT OUT | Template supplies its own form and bullets; founding-year line is not carried onto service pages |
| heroForm.primaryAction, secondaryActionLabel (call), backdrop and slotPlaceholder (`oceanside-hero`) | LEFT OUT | Template-level; this page uses `heroImage` with neutral alt text |
| heroForm.card (title, intro, phoneLineSuffix hours, nextSteps x3, form) | LEFT OUT | Template supplies its own request card and form; hours not carried |
| heroForm.card.note (to report a sewage overflow in the public sewer, contact City Water Utilities) | LEFT OUT | No tie to this service; the City's contact facts are carried through the whoToCall rows below |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level |
| keyTakeaways 1 (Water Utilities runs the public system: over 450 miles, two plants, 34 lift stations) | LEFT OUT | No tie to this service |
| keyTakeaways 2 (private lines "from the street to your house" are the owner's; call a plumber for a leak; exact point where the City's part ends not found) | ADAPTED | Hero intro and section 1 |
| keyTakeaways 3 (no City lateral repair, grant or reimbursement program; no sale-time inspection rule; "none found", not a confirmed absence) | ADAPTED | Section 4 ("none found" wording) |
| keyTakeaways.jumpNav (9 anchors) | LEFT OUT | Template-level; the page has its own anchors |
| serviceCards (9 service cards, eyebrow, title, helpBar) | LEFT OUT | Hub grid; the services link through `relatedPageIds` |
| responsibility.answer (City runs the public system; "from the street to your house"; plumber for a leak; connection point and under-the-street section not found; confirm with Water Utilities) | ADAPTED | Section 1 and the fourth problem card: owner's line, connection point not found; plumber instruction in the card |
| responsibility card "The public sewer system" (City responsible for operation and maintenance of collection and treatment facilities; 450 miles, two plants, 34 lift stations) | LEFT OUT | System description with no tie to this service |
| responsibility card "The private sewer line" (City's own term is "private sewer lines"; plumbers call it the lateral; the City page does not use that word) | LEFT OUT | Terminology with no tie to this service |
| responsibility table row 1 (who runs or arranges it: City Water Utilities / the owner, per the City) | ADAPTED | Section 1 |
| responsibility table row 2 (where it ends: City does not publish the exact connection point; no statement on the street section) | ADAPTED | Section 1 (no exact point found) |
| responsibility table row 3 (who to contact first: City customer service (760) 435-5800 for the public system; plumber for a leak on your property) | ADAPTED | Fourth problem card ((760) 435-5800 for the public system; plumber for a leak on your property) |
| responsibility table row 4 (what help exists: City operates its facilities; no City program for repairing or replacing an existing lateral found) | ADAPTED | Section 4 (no City program found) |
| responsibility table row 5 (where an inspection helps: camera records visible condition and where along the line) | LEFT OUT | Camera is a separate service; service page carries the evidence wording |
| responsibility.note (general information, not legal advice; contact Water Utilities to confirm) | LEFT OUT | The page makes no legal claim; the confirm-with-the-City wording is used where relevant |
| systemExplainer p1 (City runs collection and treatment itself) | LEFT OUT | No tie to this service |
| systemExplainer p2 ("Run by the City": operates and maintains collection and treatment, including an industrial waste inspection program) | LEFT OUT | No tie to this service; industrial program is not residential |
| systemExplainer p3 ("Scale": over 450 miles, two plants, 34 lift stations) | LEFT OUT | Counts not reused on this page |
| systemExplainer p4 ("Plans the City lists": 2021 Sewer System Management Plan, 2015 Sewer Master Plan, cited only as documents the City lists) | ADAPTED | Section 1: the 2021 Sewer System Management Plan and 2015 Sewer Master Plan, cited only as documents the City lists; nothing on the page relies on their content |
| systemExplainer p5 ("Which agency serves an address": no map or statement placing a property under a different wastewater agency; confirm with Water Utilities at (760) 435-5800) | LEFT OUT | No tie to this service |
| systemExplainer p6 (pages do not say whether the system is combined or separate, or give an age for mains or laterals; no claim made) | LEFT OUT | No tie to this service |
| systemExplainer p7 (nothing on the pages tells the condition of any individual lateral; only an inspection can) | LEFT OUT | Covered by the service page's evidence wording |
| systemExplainer.card (what a camera can show: six bullets; closing: recorded evidence with a distance count, measured from where the camera entered; does not establish a property line, the connection to the City's main or the City's responsibility) | ADAPTED | Section 2: footage records where along the line a condition sits, measured from where the camera entered; does not establish where the City's part begins; camera bullets LEFT OUT |
| housingAge paragraph (median year built 1984, margin of error 2 years, ACS 2020-2024; about 16.9% before 1970, 48.6% 1970-1989, 34.5% 1990 or later; the 1980s the largest decade at 27.6%) | ADAPTED | Section 3: median 1984 +/- 2 and the ACS vintage; 48.6% for 1970-1989; other shares LEFT OUT |
| housingAge table (11,328 / 32,537 / 23,132 / total 66,997 housing units) | LEFT OUT | Counts not reused |
| housingAge.sourceNote (B25034 and B25035; groupings are our arithmetic; year built does not tell condition or material of a lateral, which can be repaired, rerouted or replaced; Census place may not match every address the City serves) | ADAPTED | Section 3: year built does not tell the condition or material of a lateral, which can be repaired or replaced after the house is built; table links and arithmetic note LEFT OUT |
| whoToCall paragraph (public sewer questions to City Water Utilities; plumber for a leak; an independent camera inspection helps when a plumber or the City points to your lateral) | ADAPTED | Fourth problem card: City for public-system questions, plumber for a leak on your property |
| whoToCall.agency panel ((760) 435-5800 customer service; (760) 435-3900 water emergencies, with option 4 by day and option 1 after hours, framed around City water and not presented as a sewer line; no published office hours) | ADAPTED | Fourth problem card: (760) 435-5800 only, marked the City's; (760) 435-3900, option numbers and the no-published-hours note LEFT OUT (not a maintenance topic) |
| whoToCall.company (The Sewer Pros phone and hours from `marketOperatingDetail`) | LEFT OUT | No company phone on this page, as in the Carlsbad and Chula Vista models |
| municipalProgram.lede (no City lateral repair, replacement, grant, reimbursement or inspection-assistance program found on the pages reviewed; "none found", pages undated; contact page says call a plumber) | ADAPTED | Section 4: none found, "not a statement that none exists"; pages-reviewed list LEFT OUT |
| municipalProgram.covers 1 (private sewer lines "from the street to your house" are the owner's) | LEFT OUT | Covered by the responsibility rows |
| municipalProgram.covers 2 (improvement plan for sewer improvements added, removed, replaced or altered in a public right-of-way, City easement or City property; reviewed and approved by Water Utilities; signed by a Registered Civil Engineer) | ADAPTED | Section 4: improvement-plan rule, Water Utilities approval, Registered Civil Engineer |
| municipalProgram.covers 3 (improvements, grading or alterations on private property or in the right-of-way may trigger a City permit; consult Development Services and City code) | LEFT OUT | Not needed on this page; the location FAQ carries it |
| municipalProgram.covers 4 (building permit applications with plans go through the City's online permit portal) | LEFT OUT | Portal procedure with no tie to this service |
| municipalProgram.doesNotCover 1 (no City grant, reimbursement, cap, eligibility rule or application process for repairing or replacing an existing lateral) | ADAPTED | Section 4: no City lateral repair, replacement, grant or reimbursement program found |
| municipalProgram.doesNotCover 2 (exact connection point not found; unknown whether owner's part includes the street section) | ADAPTED | Section 1: exact point where the City's part ends not found |
| municipalProgram.doesNotCover 3 (no statement about damage to a private line the City itself caused) | LEFT OUT | Carried by the location FAQ |
| municipalProgram.doesNotCover 4 (no statement that every repair or replacement of an existing lateral needs a particular permit) | LEFT OUT | Not needed on this page; the location FAQ carries it |
| municipalProgram.doesNotCover 5 (no sewer-specific backup or overflow instruction or number from the City) | LEFT OUT | Not needed on this page; the location FAQ carries it |
| municipalProgram.doesNotCover 6 (no City inspection requirement for existing laterals) | ADAPTED | Hero intro and section 1: no City inspection requirement for existing laterals found; no interval stated for our visit either |
| municipalProgram.doesNotCover 7 (no statement of whether the system is combined or separate) | LEFT OUT | No tie to this service |
| municipalProgram.whoCanApply (owners of a property served by the City; confirm the City serves your address before applying any rule) | LEFT OUT | Covered by the "confirm with the City" wording in the location FAQ |
| municipalProgram.callout (confirm the City serves your address; ask Water Utilities and Development Services which approvals apply before paying for work on a lateral or in the street; a camera does not tell you which approvals apply and does not replace any review the City requires; pages undated) | LEFT OUT | Not needed on this page; the location FAQ carries it |
| municipalProgram.closing (nothing reviewed says any agency pays for our services; The Sewer Pros does not repair or replace and does not arrange reimbursement) | ADAPTED | Section 2 bullet 3 and section 4: Cleaning does not repair pipe; The Sewer Pros does not perform repairs; the no-reimbursement sentence LEFT OUT |
| secondOpinion (two ledes, CTA, Inspect / Document / Decide steps x3, callout on sales-driven recommendations) | ADAPTED | Section 4 last sentence: keep the video and findings, compare more than one written estimate (service page `ask.keep`); hub copy LEFT OUT |
| buyingGuide.lede (camera shows visible condition of the lateral before closing; sewer scope is separate from a home inspection; after closing the owner is you) | LEFT OUT | Buying material, not about maintenance |
| buyingGuide.body (no sale-time inspection, certification or seller disclosure rule found on the City pages; not a confirmed absence; state-level rules outside; confirm with Water Utilities that the City serves the address and where its part ends; not legal advice) | LEFT OUT | Buying material, not about maintenance |
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
| Is a sewer inspection required when buying an Oceanside home? | LEFT OUT | Not about maintenance |
| How old is Oceanside’s housing, and does that tell me about my lateral? | USED | Verbatim, topic pill "In Oceanside"; ties to section 3 |
| What does a sewer camera inspection show? | LEFT OUT | The service page asks "What does a sewer camera inspection find?" and answers it |
| Do you repair or replace sewer lines? | LEFT OUT | The service page's "Do you offer sewer repair or replacement?" answers it in full |

## Service page (`svc-preventative-sewer-maintenance`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Preventative Sewer Maintenance in Oceanside, CA" |
| metaDescription | LEFT OUT | Market-neutral; replaced by a page-specific one |
| serviceDescription / definition.answer | ADAPTED | Same definition with "for properties in Oceanside, California" |
| hero.title, hero.eyebrow ("Maintenance") | ADAPTED | Title "Preventative Sewer Maintenance in Oceanside"; eyebrow replaced by "Oceanside, CA" |
| hero.intro (planned inspection and cleaning before buildup becomes a backup; camera documents the accessible line; cleaning when appropriate) | ADAPTED | Hero intro last sentence |
| hero.primaryAction, secondaryAction, images, hero.scope (3), cardTitle, cardIntro, extraServiceOptions, navLabels | LEFT OUT | Template slots |
| definition.supporting 1 (utilities call it preventive maintenance) | LEFT OUT | Terminology; FAQ "What is preventative sewer maintenance?" carries it |
| definition.supporting 2 (not one fixed task: camera pass, cleaning, second look, locating, depending on the line) | ADAPTED | Section 2 and `inclusions` |
| definition.supporting 3 (some lines have a reason to be maintained; a line with no history of problems does not need a default schedule) | ADAPTED | Section 3 |
| definition.scope, definition.image | LEFT OUT | Scope statement carried by the FAQ "Do you offer sewer repair or replacement?" |
| signals 5 Gurgling or recurring clogs (as ordered in `sl-blocks`) | USED | Problem card 1 |
| signals 4 A backup that has already happened | USED | Problem card 2 |
| signals 6 Known risk factors (mature trees, buildup between cleanings, backups never documented on camera) | USED | Problem card 3; also section 3 |
| signals 1 (several drains slow), 3 (odor that persists), wet or green yard patches, note | LEFT OUT | FAQ "Why are all my drains slow or gurgling?" carries them |
| limits.can (7 items), canTitle | LEFT OUT | FAQ "What does a sewer camera inspection find?" carries it |
| limits.cannot (6 items) | LEFT OUT | FAQ "What can a sewer camera not see?" carries it |
| limits.callout (cleaning does not repair these conditions; further evaluation may be appropriate outside our scope) | ADAPTED | Section 4 last paragraph |
| process steps 1-6 (Review the history, Access the line, Inspect and record, Clean when appropriate, Look again when needed, Review the findings) | USED | `process`, verbatim, all six steps; steps 1-4 are also paraphrased in section 2 (history, then access through a cleanout, a recorded camera pass with what limits the view noted, then cleaning if buildup or an obstruction is present) |
| process.intro, process.prep (4 items) | LEFT OUT | No slot |
| decision (answer, note, listTitle, 3 list items, 4 links) | LEFT OUT | FAQ "Should a camera inspection come before cleaning?" carries it |
| comparison (5 rows: camera, cleaning, hydro jetting, locating, records) and note | LEFT OUT | Table; linked services are in `relatedPageIds` |
| independent band (shared dataset, no override) | LEFT OUT | Template-level; "does not perform repairs" in section 2 and section 4 |
| ask items (video, written findings, what part was viewed, what cleaning was done, locating) | ADAPTED | Inclusion 5 (video and written findings, including what part of the line was viewed); rest LEFT OUT |
| ask.keep (keep the video, findings and scope together; get the scope in writing; compare more than one written estimate) | ADAPTED | Section 4 last sentence |
| audiences (home buyers and sellers, agents, home inspectors, small residential landlords) | LEFT OUT | Template slot |
| markets (three hubs) | LEFT OUT | `coverage` replaces the hubs with the six other San Diego locations |
| request (title, intro, scopeNote, submitLabel), faqTitle, eyebrows, relatedTitle | LEFT OUT | Template slots; `cta` rewritten for Oceanside |
| relatedPageIds (6) and relatedDescriptions | ADAPTED | Oceanside page, this service, camera inspection, sewer cleaning (as the Carlsbad maintenance page) |
| cta | ADAPTED | Service page has no `cta`; body adapted from `request.intro` ("Tell us what you have noticed and what the line's history looks like. We will talk through access and what a visit would include") |
| Six inclusion cards (history, recorded camera pass, cleaning when appropriate, second look when included, video and findings, locating as a separate service) | USED | `inclusions` from `sl-blocks/preventative-sewer-maintenance`, verbatim |
| Fourth problem card | ADAPTED | Location-driven: "Not sure whether it is the City's system or your line", from `whoToCall` and `responsibility` table row 3 (the City's numbers and instructions, not ours) |

### Service FAQ (16)

| # | Question | Status | Reason |
|---|---|---|---|
| 1 | What is preventative sewer maintenance? | USED | Verbatim; carried as the service page words it |
| 2 | How often should I schedule it? | USED | Verbatim; no interval stated, as the service page words it |
| 3 | Do all homes need routine sewer cleaning? | USED | Verbatim; carried as the service page words it |
| 4 | What does a sewer camera inspection find? | USED | Verbatim; carried as the service page words it |
| 5 | What can a sewer camera not see? | USED | Verbatim; carried as the service page words it |
| 6 | What happens if the camera cannot get through a blockage? | USED | Verbatim; carried as the service page words it |
| 7 | Is hydro jetting safe for my pipes? | USED | Verbatim; carried as the service page words it |
| 8 | Should a camera inspection come before cleaning? | USED | Verbatim; carried as the service page words it |
| 9 | Why do the same clogs keep coming back? | USED | Verbatim; carried as the service page words it |
| 10 | What is a sewer cleanout? | USED | Verbatim; carried as the service page words it |
| 11 | Why are all my drains slow or gurgling? | USED | Verbatim; carried as the service page words it |
| 12 | Do I get the video and written findings? | USED | Verbatim; owner-confirmed deliverable |
| 13 | How long does it take? | USED | Verbatim; no set time stated |
| 14 | How much does it cost? | USED | Verbatim; no price stated; ask for the scope in writing |
| 15 | Do you offer sewer repair or replacement? | USED | Verbatim; carried as the service page words it |
| 16 | What should I ask for before approving major sewer work? | USED | Verbatim; carried as the service page words it |

Total FAQ on the page: 7 Oceanside + 16 service = 23. Interval, time and cost answers are carried as the service page words them: no figure.

## Facts to confirm

- (760) 435-5800 is used once, in the fourth problem card, and is marked the City's, not ours. The page says confirm with the City and states no dates because the City pages are undated.
- The 2021 Sewer System Management Plan and 2015 Sewer Master Plan are mentioned only as documents the City lists, as the location page does; the page does not rely on their content and says nothing about maintenance guidance from them.
- "A maintenance visit documents your line. It is not a report to the City" (fourth problem card) is the page's own statement about what the service is. No source says a visit is or is not reported to the City.
- "We did not find a City inspection requirement for existing laterals" restates `doesNotCover` 6. No interval is stated for the City or for The Sewer Pros.
- No company phone, office, price, offer, response time or guarantee appears on this page.
- `sl-oceanside-maintenance` is not yet registered in `data/pages/approved-pages.ts`.
