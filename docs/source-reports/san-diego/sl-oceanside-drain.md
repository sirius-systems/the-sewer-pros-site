# Source report: sl-oceanside-drain

Page: Drain Cleaning in Oceanside, CA (`oceansideDrainContent`, `content/pages/sl-sd-oceanside-drain.tsx`).

Sources:
- LOCATION: `oceansideContent` in `content/pages/san-diego-oceanside.tsx` (City of Oceanside Water Utilities, contact, improvement-plan, building-permit and municipal code pages, and U.S. Census ACS 2020-2024 tables B25034 and B25035, read 2026-10-04; every City page shows no date, so the page says "confirm with the City" and states no dates).
- SERVICE: `svc-drain-cleaning` `v2` in `content/pages/services.tsx`, plus `content/pages/sl-blocks/drain-cleaning.ts`.

Status key: USED = text taken as published; ADAPTED = fact kept, wording changed to tie it to this service; LEFT OUT = not on this page (reason given).

Oceanside has one sewer agency on the location page, the City's Water Utilities Department. The page never says the City serves a given address. Consistent with `sl-oceanside-cleaning`: the City names the owner's side as "from the street to your house" and we did not find where the City's part ends.

## The four body sections and their sources

| # | h2 on the page | Oceanside source | Service source |
|---|---|---|---|
| 1 | "From the street to your house" starts past your drains | `responsibility.answer`, card 1, table rows 1-2, `municipalProgram.doesNotCover` 2, `systemExplainer.card.closing` | `definition.supporting` 1, `limits.cannot` 4 (public main and its connection) |
| 2 | One drain, several drains, or water coming up | `whoToCall` (agency panel, company phone), `responsibility` table row 3, `doesNotCover` 5, `keyTakeaways` 2 | `signals` 3 and 6, `triage` rows 1, 2, 5 |
| 3 | A 1984 median year built does not show what is in a drain | `housingAge` paragraph and sourceNote | `signals` 4, `triage` row 4, `limits.can` 4 |
| 4 | An improvement-plan rule for the street, and no repair program found | `municipalProgram` (lede, covers 2, doesNotCover 1), `responsibility` table row 4, closing | `limits.cannot` 1-3, `limits.can` lead, `independent.note`, `ask.keep` |

## Oceanside location page (`oceansideContent`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle / metaDescription | ADAPTED | Service name swapped in; page-specific metaDescription (<=160 chars) written |
| hero.title / hero.intro (City runs the public system; owner's private line "from the street to your house"; call a plumber; get evidence before cleaning, buying or approving work) | ADAPTED | Hero intro: the City's "from the street to your house" wording tied to fixture drains sitting upstream; the page's own H1 |
| heroForm.bullets (camera inspection with documented findings; cleaning and hydro jetting when the evidence supports it; "Serving the San Diego area since" founding year) | LEFT OUT | Template supplies its own form and bullets; founding-year line is not carried onto service pages |
| heroForm.primaryAction, secondaryActionLabel (call), backdrop and slotPlaceholder (`oceanside-hero`) | LEFT OUT | Template-level; this page uses `heroImage` with neutral alt text |
| heroForm.card (title, intro, phoneLineSuffix hours, nextSteps x3, form) | LEFT OUT | Template supplies its own request card and form; hours not carried |
| heroForm.card.note (to report a sewage overflow in the public sewer, contact City Water Utilities) | LEFT OUT | No tie to this service; the City's contact facts are carried through the whoToCall rows below |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level |
| keyTakeaways 1 (Water Utilities runs the public system: over 450 miles, two plants, 34 lift stations) | ADAPTED | Section 1: 450 miles, two plants, 34 lift stations kept |
| keyTakeaways 2 (private lines "from the street to your house" are the owner's; call a plumber for a leak; exact point where the City's part ends not found) | ADAPTED | Hero intro and section 1 (owner's line; connection point not found) |
| keyTakeaways 3 (no City lateral repair, grant or reimbursement program; no sale-time inspection rule; "none found", not a confirmed absence) | ADAPTED | Section 4 ("none found" wording, no program found) |
| keyTakeaways.jumpNav (9 anchors) | LEFT OUT | Template-level; the page has its own anchors |
| serviceCards (9 service cards, eyebrow, title, helpBar) | LEFT OUT | Hub grid; the services link through `relatedPageIds` |
| responsibility.answer (City runs the public system; "from the street to your house"; plumber for a leak; connection point and under-the-street section not found; confirm with Water Utilities) | ADAPTED | Section 1: the "from the street to your house" wording, the unpublished connection point and the street section; the plumber instruction moves to section 2 |
| responsibility card "The public sewer system" (City responsible for operation and maintenance of collection and treatment facilities; 450 miles, two plants, 34 lift stations) | ADAPTED | Section 1: Water Utilities runs the public system; 450 miles, two plants and 34 lift stations kept |
| responsibility card "The private sewer line" (City's own term is "private sewer lines"; plumbers call it the lateral; the City page does not use that word) | ADAPTED | Hero and section 1: "private sewer lines" as the City words it; "lateral" terminology LEFT OUT |
| responsibility table row 1 (who runs or arranges it: City Water Utilities / the owner, per the City) | ADAPTED | Section 1 (City runs the public system; owner's private line per the City) |
| responsibility table row 2 (where it ends: City does not publish the exact connection point; no statement on the street section) | ADAPTED | Section 1 and the fourth problem card (no exact connection point; street section not found) |
| responsibility table row 3 (who to contact first: City customer service (760) 435-5800 for the public system; plumber for a leak on your property) | ADAPTED | Section 2 (plumber for a leak; customer service (760) 435-5800, marked the City's) |
| responsibility table row 4 (what help exists: City operates its facilities; no City program for repairing or replacing an existing lateral found) | ADAPTED | Section 4 (no City program found) |
| responsibility table row 5 (where an inspection helps: camera records visible condition and where along the line) | LEFT OUT | Camera is a separate service; service page carries the evidence wording |
| responsibility.note (general information, not legal advice; contact Water Utilities to confirm) | LEFT OUT | The page makes no legal claim; the confirm-with-the-City wording is used where relevant |
| systemExplainer p1 (City runs collection and treatment itself) | ADAPTED | Section 1: the City runs the public sewer system |
| systemExplainer p2 ("Run by the City": operates and maintains collection and treatment, including an industrial waste inspection program) | LEFT OUT | No tie to this service; industrial program is not residential |
| systemExplainer p3 ("Scale": over 450 miles, two plants, 34 lift stations) | ADAPTED | Section 1: same counts |
| systemExplainer p4 ("Plans the City lists": 2021 Sewer System Management Plan, 2015 Sewer Master Plan, cited only as documents the City lists) | LEFT OUT | No tie to this service |
| systemExplainer p5 ("Which agency serves an address": no map or statement placing a property under a different wastewater agency; confirm with Water Utilities at (760) 435-5800) | LEFT OUT | No tie to this service |
| systemExplainer p6 (pages do not say whether the system is combined or separate, or give an age for mains or laterals; no claim made) | LEFT OUT | No tie to this service |
| systemExplainer p7 (nothing on the pages tells the condition of any individual lateral; only an inspection can) | LEFT OUT | Covered by the service page's evidence wording |
| systemExplainer.card (what a camera can show: six bullets; closing: recorded evidence with a distance count, measured from where the camera entered; does not establish a property line, the connection to the City's main or the City's responsibility) | ADAPTED | Section 1: cleaning "does not show where that connection is" (the distance-count and connection-point limit); camera bullets LEFT OUT |
| housingAge paragraph (median year built 1984, margin of error 2 years, ACS 2020-2024; about 16.9% before 1970, 48.6% 1970-1989, 34.5% 1990 or later; the 1980s the largest decade at 27.6%) | ADAPTED | Section 3: median 1984 +/- 2 and the ACS vintage; the three percentages and the 27.6% are LEFT OUT |
| housingAge table (11,328 / 32,537 / 23,132 / total 66,997 housing units) | LEFT OUT | Counts not reused |
| housingAge.sourceNote (B25034 and B25035; groupings are our arithmetic; year built does not tell condition or material of a lateral, which can be repaired, rerouted or replaced; Census place may not match every address the City serves) | ADAPTED | Section 3: year built does not tell the condition or material of a lateral; Census place may not match the City's service area; table references and arithmetic note LEFT OUT |
| whoToCall paragraph (public sewer questions to City Water Utilities; plumber for a leak; an independent camera inspection helps when a plumber or the City points to your lateral) | ADAPTED | Section 2 (plumber instruction); "independent camera inspection" half LEFT OUT because the camera is a separate service |
| whoToCall.agency panel ((760) 435-5800 customer service; (760) 435-3900 water emergencies, with option 4 by day and option 1 after hours, framed around City water and not presented as a sewer line; no published office hours) | ADAPTED | Section 2: (760) 435-5800, and (760) 435-3900 for water emergencies framed around City water and not presented as a sewer line; options 4 and 1 and the no-published-hours note LEFT OUT |
| whoToCall.company (The Sewer Pros phone and hours from `marketOperatingDetail`) | ADAPTED | Section 2 last sentence: company phone only, read from `marketOperatingDetail['san-diego-ca']`, as the Carlsbad drain page does; hours not carried |
| municipalProgram.lede (no City lateral repair, replacement, grant, reimbursement or inspection-assistance program found on the pages reviewed; "none found", pages undated; contact page says call a plumber) | ADAPTED | Section 4: "none found, not a statement that none exists"; list of the five pages reviewed LEFT OUT |
| municipalProgram.covers 1 (private sewer lines "from the street to your house" are the owner's) | LEFT OUT | Covered by the responsibility rows |
| municipalProgram.covers 2 (improvement plan for sewer improvements added, removed, replaced or altered in a public right-of-way, City easement or City property; reviewed and approved by Water Utilities; signed by a Registered Civil Engineer) | ADAPTED | Section 4: improvement-plan rule, Water Utilities approval, Registered Civil Engineer; tied to "cleaning does not alter the pipe" |
| municipalProgram.covers 3 (improvements, grading or alterations on private property or in the right-of-way may trigger a City permit; consult Development Services and City code) | LEFT OUT | Not needed on this page; the location FAQ carries it |
| municipalProgram.covers 4 (building permit applications with plans go through the City's online permit portal) | LEFT OUT | Portal procedure with no tie to this service |
| municipalProgram.doesNotCover 1 (no City grant, reimbursement, cap, eligibility rule or application process for repairing or replacing an existing lateral) | ADAPTED | Section 4: no City lateral repair, grant or reimbursement program found; cap and eligibility wording LEFT OUT |
| municipalProgram.doesNotCover 2 (exact connection point not found; unknown whether owner's part includes the street section) | ADAPTED | Section 1 and the fourth problem card |
| municipalProgram.doesNotCover 3 (no statement about damage to a private line the City itself caused) | LEFT OUT | Carried by the location FAQ |
| municipalProgram.doesNotCover 4 (no statement that every repair or replacement of an existing lateral needs a particular permit) | LEFT OUT | Not needed on this page; the location FAQ carries it |
| municipalProgram.doesNotCover 5 (no sewer-specific backup or overflow instruction or number from the City) | ADAPTED | Section 2: no sewer-specific backup instruction found; the number is not presented as a sewer line |
| municipalProgram.doesNotCover 6 (no City inspection requirement for existing laterals) | LEFT OUT | Not needed on this page; the location FAQ carries it |
| municipalProgram.doesNotCover 7 (no statement of whether the system is combined or separate) | LEFT OUT | No tie to this service |
| municipalProgram.whoCanApply (owners of a property served by the City; confirm the City serves your address before applying any rule) | LEFT OUT | Covered by the "confirm with the City" wording in section 4 and the location FAQ |
| municipalProgram.callout (confirm the City serves your address; ask Water Utilities and Development Services which approvals apply before paying for work on a lateral or in the street; a camera does not tell you which approvals apply and does not replace any review the City requires; pages undated) | LEFT OUT | Not needed on this page; the location FAQ carries it |
| municipalProgram.closing (nothing reviewed says any agency pays for our services; The Sewer Pros does not repair or replace and does not arrange reimbursement) | ADAPTED | Section 4: "We do not perform repairs or replacements"; no-reimbursement sentence LEFT OUT |
| secondOpinion (two ledes, CTA, Inspect / Document / Decide steps x3, callout on sales-driven recommendations) | ADAPTED | Section 4 last sentence: video and written findings to compare against any estimate (the service page's independent band); hub copy LEFT OUT |
| buyingGuide.lede (camera shows visible condition of the lateral before closing; sewer scope is separate from a home inspection; after closing the owner is you) | LEFT OUT | Buying material, not needed on this page |
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
| What does a sewer camera inspection show? | LEFT OUT | The service page answers camera questions ("What do I receive when a camera is used?") |
| Do you repair or replace sewer lines? | LEFT OUT | The service FAQ's repair answers ("Does drain cleaning repair a damaged pipe?", "What happens if a camera shows damage?") cover it |

## Service page (`svc-drain-cleaning`)

| Section / card / fact | Status | Where / reason |
|---|---|---|
| seoTitle | ADAPTED | "Drain Cleaning in Oceanside, CA" |
| metaDescription | LEFT OUT | Market-neutral (names St. Louis, San Diego, Las Vegas); replaced by a page-specific one |
| serviceDescription / definition.answer | ADAPTED | Same definition with "for homes in Oceanside, California" |
| hero.title, hero.eyebrow | ADAPTED | Title "Drain Cleaning in Oceanside"; eyebrow replaced by "Oceanside, CA" |
| hero.intro p1 (restores flow by removing grease, roots, debris and buildup; cable tools, water jetting or both) | ADAPTED | Hero intro |
| hero.intro p2 (cleaning, camera diagnostics and locating only; no repair, replacement, lining, excavation or pipe installation) | ADAPTED | Section 4 ("We do not perform repairs or replacements"); repair is never offered |
| hero.primaryAction, secondaryAction, v2.images, v2.hero.scope (3), cardTitle, cardIntro, serviceLabel, navLabels | LEFT OUT | Template slots; the page template supplies its own hero, form and nav |
| definition.supporting 1 (drain cleaning is fixture and branch lines; sewer cleaning is the larger line; "drain clearing" is everyday usage) | ADAPTED | Section 1 (fixture and branch lines vs. the City's system); "drain clearing" sentence LEFT OUT |
| definition.supporting 2 (cleaning and a camera inspection are separate services) | LEFT OUT | FAQ "Does a camera inspection come with drain cleaning?" carries it |
| definition.scope (accessible residential lines; equipment depends on entry point; cleaning, diagnostics, locating only; no repair) | ADAPTED | Section 4 last paragraph; the equipment-selection sentence LEFT OUT |
| signals 1 One slow drain | USED | Problem card 1 (`sl-blocks/drain-cleaning`) |
| signals 2 Several fixtures slow at once | USED | Problem card 2 |
| signals 3 Gurgling from drains or toilets | ADAPTED | Section 2 bullet 2 (several fixtures slow or gurgling) |
| signals 4 Clogs that keep returning | USED | Problem card 3; also section 3 |
| signals 5 Sewage-like odors | LEFT OUT | FAQ "What causes sewage-like odors?" |
| signals 6 Water or sewage coming up | ADAPTED | Section 2 bullet 3, tied to the City's plumber instruction |
| signals.after, signals.image | LEFT OUT | Template slots |
| triage rows 1 and 2 (one fixture; several fixtures) | ADAPTED | Section 2 bullets 1 and 2 |
| triage row 3 (lower drains back up when others are used) | LEFT OUT | No slot on this page; FAQ carries it |
| triage row 4 (clogs again after clearing) | ADAPTED | Section 3 |
| triage row 5 (water or sewage coming up) | ADAPTED | Section 2 bullet 3 |
| triage intro, caption, columns | LEFT OUT | Table framing |
| limits.can 1-3 (grease/soap/sludge; roots that can be cut back, may regrow; wipes, hair, debris), canTitle/canLead | LEFT OUT | FAQ answers carry grease, roots, wipes |
| limits.can 4 (a restriction that keeps returning, where a camera look may help) | ADAPTED | Section 3 |
| limits.cannot 1-3 (cracked/broken/collapsed; offset or separated joint; roots at a joint) | ADAPTED | Section 4 last paragraph |
| limits.cannot 4 (the public sewer main or the connection to it; ask your local utility) | ADAPTED | Section 1 and the fourth problem card, with the City named |
| limits.cannot 5 (a line the equipment cannot pass) | LEFT OUT | No slot; FAQ carries it |
| limits.callout (jetting not for every pipe; a line that flows again is not proof the pipe is sound) | LEFT OUT | FAQ answers "Is hydro jetting safe for every pipe?" and "Does a line that flows again mean the pipe is fine?" carry it |
| limits.intro | LEFT OUT | Framing |
| process steps 1-5 (Symptoms, Access, Camera when included, Cleaning, Flow check) | USED | `process`, verbatim; equipment names only as owner-confirmed (SeeSnake CS12x, SeeSnake Standard Camera Reel with TruSense, RIDGID K-7500) |
| process.intro (no standard time or price) | LEFT OUT | FAQ carries the no-standard-time wording |
| process.prep (access points; 3 prep items) | LEFT OUT | No slot; the service FAQ carries cleanout access |
| decision (answer, note, listTitle, 3 list items, 3 links) | LEFT OUT | FAQ "Does a camera inspection come with drain cleaning?" and "Can a camera see through standing water?" carry it |
| independent steps (Clear, Document, Decide) and note | ADAPTED | Section 4 last sentence: video and written findings to compare against any estimate; "The Sewer Pros does not sell repair or replacement" is carried by the FAQ |
| methods table (cable, water jetting, camera) and note | LEFT OUT | FAQ answers carry methods; the hydro vs. snaking link is left to the template |
| secondaryLimits (camera can 8, cannot 7, callout) | LEFT OUT | Camera content; FAQ carries it |
| ask items Video and Written findings | USED | Inclusion 6 (`sl-blocks/drain-cleaning`) |
| ask items Limits, Access point and location, Cleaning record, Line locating | LEFT OUT | FAQ carries "Will I get a record of the cleaning?" and "What does line locating do?" |
| ask.keep (keep the video and findings; compare written estimates; a camera finding is not a repair recommendation) | ADAPTED | Section 4 last sentence |
| audiences (Homeowners, Home buyers, Home sellers) | LEFT OUT | Template slot |
| markets (three hubs) | LEFT OUT | `coverage` replaces the hubs with the six other San Diego locations |
| situations (flushable wipes, liquid grease, chemical cleaners), terms (6) | LEFT OUT | FAQ carries each |
| request (title, intro, tellUs, scopeNote, submitLabel), faqTitle, eyebrows, relatedTitle | LEFT OUT | Template slots; `cta` rewritten for Oceanside |
| relatedPageIds (4: sewer cleaning, hydro jetting, camera inspection, line locating) and relatedDescriptions | ADAPTED | Oceanside page, this service, sewer cleaning, camera inspection (as the Carlsbad drain page) |
| cta (title, body) | ADAPTED | Rewritten for Oceanside |
| Six inclusion cards (symptoms, entry point, method, camera when included, flow check, video and findings) | USED | `inclusions` from `sl-blocks/drain-cleaning`, verbatim |
| Fourth problem card | ADAPTED | Location-driven: "A restriction you cannot place relative to the street", from the City's wording, the unpublished connection point and `limits.cannot` 4; (760) 435-5800 marked the City's |

### Service FAQ (37)

| # | Question | Status | Reason |
|---|---|---|---|
| 1 | What is drain cleaning? | USED | Verbatim; carried as the service page words it |
| 2 | What is the difference between drain cleaning and sewer cleaning? | USED | Verbatim; carried as the service page words it |
| 3 | What is the difference between drain cleaning and drain clearing? | USED | Verbatim; carried as the service page words it |
| 4 | What methods are used to clean a drain? | USED | Verbatim; carried as the service page words it |
| 5 | Is drain cleaning the same as hydro jetting? | USED | Verbatim; carried as the service page words it |
| 6 | Does drain cleaning repair a damaged pipe? | USED | Verbatim; carried as the service page words it |
| 7 | What causes a drain to clog or run slowly? | USED | Verbatim; carried as the service page words it |
| 8 | Why is my kitchen sink draining slowly? | USED | Verbatim; carried as the service page words it |
| 9 | Why is my bathtub or shower draining slowly? | USED | Verbatim; carried as the service page words it |
| 10 | How do I know if it is a drain clog or a sewer line problem? | USED | Verbatim; carried as the service page words it |
| 11 | Can a plunger or hand tool fix a clogged drain? | USED | Verbatim; carried as the service page words it |
| 12 | Can tree roots grow into drain pipes? | USED | Verbatim; carried as the service page words it |
| 13 | Why do my drains keep clogging after they were cleared? | USED | Verbatim; carried as the service page words it |
| 14 | Why are several fixtures draining slowly at once? | USED | Verbatim; carried as the service page words it |
| 15 | Why are my drains gurgling? | USED | Verbatim; carried as the service page words it |
| 16 | What causes sewage-like odors? | USED | Verbatim; carried as the service page words it |
| 17 | What should I do if water or sewage is coming up from a drain? | USED | Verbatim; carried as the service page words it |
| 18 | Can drain cleaning fix a broken or collapsed pipe? | LEFT OUT | Duplicate of "Does drain cleaning repair a damaged pipe?" |
| 19 | Can cleaning remove tree roots? | LEFT OUT | Duplicate of "Can tree roots grow into drain pipes?" |
| 20 | Is hydro jetting safe for every pipe? | USED | Verbatim; carried as the service page words it |
| 21 | Does drain cleaning damage pipes? | USED | Verbatim; carried as the service page words it |
| 22 | Does a camera inspection come with drain cleaning? | USED | Verbatim; carried as the service page words it |
| 23 | Can a camera see through standing water? | USED | Verbatim; carried as the service page words it |
| 24 | Does a line that flows again mean the pipe is fine? | USED | Verbatim; carried as the service page words it |
| 25 | What do I receive when a camera is used? | USED | Verbatim; carried as the service page words it |
| 26 | Will I get a record of the cleaning? | USED | Verbatim; carried as the service page words it |
| 27 | What does line locating do? | USED | Verbatim; carried as the service page words it |
| 28 | Are chemical drain cleaners a good idea? | USED | Verbatim; carried as the service page words it |
| 29 | Is it safe to flush wipes labeled flushable? | USED | Verbatim; carried as the service page words it |
| 30 | How should I dispose of cooking grease? | USED | Verbatim; carried as the service page words it |
| 31 | How often should drains be cleaned? | USED | Verbatim; carried as the service page words it |
| 32 | Do you clean drains in St. Louis, San Diego, and Las Vegas? | LEFT OUT | Area page; the question belongs to the hub |
| 33 | How much does drain cleaning cost? | USED | Verbatim; DEC-088 wording kept: no standard price |
| 34 | How long does drain cleaning take? | USED | Verbatim; no standard time stated, as the service page words it |
| 35 | What should I tell you when I request drain cleaning? | USED | Verbatim; carried as the service page words it |
| 36 | What happens if a camera shows damage? | USED | Verbatim; carried as the service page words it |
| 37 | Should I have the sewer line checked before buying a house? | USED | Verbatim; carried as the service page words it |

Total FAQ on the page: 8 Oceanside + 34 service = 42. Cost and timing questions are carried as the service page words them (DEC-088): no price, no standard time.

## Facts to confirm

- Whether (760) 435-5800 and (760) 435-3900 are current. Both are marked the City's, not ours, and the page says confirm with the City. The page states no dates because the City pages are undated.
- The company phone is read from `marketOperatingDetail['san-diego-ca']`, not typed.
- "Drain cleaning removes material from inside an existing pipe and does not alter it" (section 4) is the page's own tie between the City's improvement-plan wording and the service's definition. It is a statement about what cleaning is, not about what the City requires, and the page makes no claim about whether cleaning needs any approval.
- No housing-age conclusion is drawn: the page says year built does not show lateral condition.
- `sl-oceanside-drain` is not yet registered in `data/pages/approved-pages.ts`.
