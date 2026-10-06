# Source audit: sl-st-charles-prepurchase (rebuild)

Page: St. Charles, MO + Pre-Purchase Sewer Inspection. Rebuild file: `content/pages/sl-rebuild/sl-st-charles-prepurchase.tsx`.
Sources: `stCharlesContent` (`content/pages/st-louis-st-charles.tsx`, `loc-stl-st-charles`) and the `v2` block of `svc-pre-purchase-sewer-inspection` (`content/pages/services.tsx`).
Replaces the existing entry `sl-st-charles-prepurchase` in `content/pages/st-louis.tsx` (body, hero intro, meta description; adds serviceDescription, cta, and a new `local` card).
Status key: USED = text carried verbatim or near-verbatim; ADAPTED = fact kept, wording rewritten for this page; LEFT OUT = not in the four-section body, with reason ("via assembly" = the item reaches the page through `service-location-upgrade.ts` / `service-location-shared.ts`, not through the body).

## What changed from the existing body

- Existing body had three sections (about 190 words). New body has exactly four (about 840 words, against 410-460 on the Henderson pages), each tying a St. Charles fact to what a pre-purchase scope records or cannot.
- "Different authority, different rules" became section 1 and now carries the owner-arranged-repair definition from the City Code, the "after closing that owner is you" consequence, and what the scope does not show (the City main; no published rule on who owns the part under the street).
- "What the 90% structure means for a buyer" is split. The program terms (90 percent, $7,500, $28 fee with the $20 caveat, exclusions, cable-first certification, City camera, no published fund balance or timeline) are now section 3, labelled the City's. The City-limits and ownership/tax-paid conditions, which the old body did not mention, are section 2.
- Removed: "which gives a recurring blockage a documentation path" (the certification is a plumber's statement about cabling, and the old wording implied our work feeds it). Replaced with the location page's own statement that we make no claim the City accepts an outside report or that our work satisfies the cabling statement.
- "What we establish" is folded into sections 1 and 3 and no longer a standalone paragraph.
- Added from the location page: no sale-time rule found plus the rental occupancy inspection hedge, the housing-age figures, the Hackmann Road manhole and Newtown vacuum system, and Public Works (636) 949-3363 labelled the City's.
- Hero intro rewritten (the old one said St. Charles "reimburses lateral repairs differently from its neighbours", which no source states). Meta description rewritten (generic before; now 155 characters). `local` card replaced: the old card repeated the "own system" point; the new one is the City-limits eligibility condition, a St. Charles fact that is specific to a buyer.

## The four body sections and their sources

| # | h2 | Local source | Service source |
|---|----|--------------|----------------|
| 1 | A City-run system, and a lateral that becomes yours | responsibility.answer (Sewer Division not MSD; Code definition of lateral; owner gets bids), responsibility.note (no published rule on the part under the street), systemExplainer paragraph 1 (outside MSD area, hedge) | definition.supporting (private lateral; visible conditions on the day; does not repair), ask.items (video and written findings), limits.can/cannot lede |
| 2 | No sale-time sewer rule found, and the City-limits question | buyingGuide.body (none found, not a confirmed absence, rental occupancy inspection not described as sewer, inside City limits, proof of ownership and paid taxes and bills, not legal advice), municipalProgram.doesNotCover item 2, whoCanApply | signals "A local sale requirement" (no legal advice), signals.after (no rule requires one) |
| 3 | What the City's program asks for, and what a scope adds | municipalProgram.lede (90 percent, $7,500, $28 and $20 caveat), covers, doesNotCover, steps 1 and 3, afterSteps (fee revenue, no fund balance), callout (our inspection does not replace the City's camera; no claim City accepts an outside report; does not perform repairs), whoToCall.agency (636) 949-3363 | limits.can (blockage, defects, location along the line), ask.items "Access point and location" (distance from entry), independent band (does not repair or replace) |
| 4 | A 1986 median year built does not tell you the pipe | housingAge.paragraphs and censusTable (1986, MOE 2, about 32,300 units, 1980 or later, 1939 or earlier), afterCensus (age does not tell pipe; no published pipe material or era; working drain is not proof), systemExplainer paragraphs 4-5 (Hackmann Road manhole, Newtown vacuum, public project does not show a lateral) | limits.callout ("A visibly clear line is not proof..."), signals "An older home" (age is a buyer's judgment) |

## St. Charles location page

| Section / item | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Page-specific meta description written; seoTitle comes from the existing entry or the shell. |
| hero.title | LEFT OUT | Location page H1. This page has its own title. |
| hero.intro (independent inspection; City's own system and lateral program) | ADAPTED | New hero intro restates the City-run system and owner-arranged program for a buyer. |
| heroForm bullets (founding year, family-operated) | LEFT OUT | Company claims belong to the location page; none may appear in the body. |
| heroForm form card, nextSteps | LEFT OUT | Form belongs to the page shell. |
| heroForm.card.note (backup: plumber or drainlayer cables, then Public Works) | LEFT OUT | Backup guidance, not a buyer topic. It is in the cable-first step in section 3. |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level. |
| keyTakeaways 1 (own system, MSD guidance does not apply) | USED | Section 1. |
| keyTakeaways 2 (90 percent, $7,500, $28, share stays with the owner) | USED | Section 3. |
| keyTakeaways 3 (camera gives evidence before you clean, buy or approve work) | ADAPTED | The service itself; hero intro and section 3. |
| keyTakeaways.jumpNav | LEFT OUT | Navigation of the location page. |
| serviceCards (nine cards, helpBar) | LEFT OUT | Not a page field here; reached through relatedPageIds. |
| reviewBand | LEFT OUT | Reviews are not copied into service + location bodies (no review claims). |
| responsibility.answer | ADAPTED | Section 1. |
| responsibility.cards "The public sewer" (two plants, 30 lift stations, confirm by address) | LEFT OUT | City infrastructure counts are not buyer-relevant. "Confirm by address" is carried in section 2 (City limits). |
| responsibility.cards "The lateral line" | ADAPTED | Section 1 (owner obtains three bids and selects the contractor). |
| responsibility.table rows 1-4 | ADAPTED | Rows 1 and 2 in sections 1 and 3; row 3 (cable first, then Public Works) in section 3; row 4 (program subject to eligibility, application, review) in section 2. |
| responsibility.table row 5 (where an inspection helps) | ADAPTED | The page itself; section 3 last sentence. |
| responsibility.note (not legal advice; no published rule on the part under the street or on City damage) | ADAPTED | Section 1 and section 2; the City-damage point is LEFT OUT because it does not bear on a scope. |
| systemExplainer 1 (own system, plants, lift stations, MSD service area) | ADAPTED | Section 1 states "not MSD"; plant and lift station counts and the MSD service-area sentence are LEFT OUT (not buyer-specific). |
| systemExplainer 2 (combined or separate, age not stated) | LEFT OUT | Not used by this service. |
| systemExplainer 3 (Newtown vacuum system) | ADAPTED | Section 4, labelled a neighborhood feature. |
| systemExplainer 4 (Hackmann Road manhole, relocation planned, no current status) | ADAPTED | Section 4, hedge kept. |
| systemExplainer 5 (public project does not show a lateral; only an inspection can) | ADAPTED | Section 4. |
| systemExplainer.card bullets (what a camera can show) | LEFT OUT | The service page's own can/cannot lists are fuller; the FAQ answers carry them. |
| housingAge paragraph (1986, MOE, 32,300 units, 62 percent, 7 percent) | ADAPTED | Section 4. Percentages labelled our arithmetic (19,906 and 2,192 of 32,305). |
| housingAge.censusTable (10 rows) | LEFT OUT | Layout; the key figures are in section 4. |
| housingAge.afterCensus 1 (no pipe material or era published) | USED | Section 4. |
| housingAge.afterCensus 2 (working drain is not proof; cable-first certification; City camera) | ADAPTED | Sections 3 and 4. |
| housingAge.table (5 rows: blockage with intact pipe, cracks, where a defect sits, sound line, roots) | ADAPTED | Rows 1-3 are folded into section 3 (blockage or defect, where). Row 4 (homeowner pays the City's camera cost if the line is found sound, undated sheet) is LEFT OUT of the body to avoid restating an unverified fee rule; it stays on the location page. Row 5 (roots) is LEFT OUT (the service FAQ "What happens if the scope finds roots?" carries it). |
| housingAge.sourceNote (Census tables, program statements) | ADAPTED | Source named in section 4; links stay on the location page. |
| whoToCall paragraphs 1-3 (cable first; independent inspection helps; no direct Sewer Division backup number found) | LEFT OUT | Backup contact guidance; the "none found" number note is not about a scope. |
| whoToCall.agency (Public Works (636) 949-3363, address, applications) | ADAPTED | Phone in section 3, labelled the City's. Facility address and application channels LEFT OUT. |
| whoToCall.secondaryAgency (Community Development (636) 949-3222, permits, $50 inspection) | LEFT OUT | Permit and inspection contact for smaller lateral repairs outside the program; not about a scope. Open question below. |
| whoToCall.company (phone, hours) | LEFT OUT | Company phone belongs to the page shell. |
| municipalProgram.lede (since 2003, 90 percent, $7,500, $28, $20 caveat, automatic enrollment) | ADAPTED | Section 3. Start year and automatic-enrollment sentence LEFT OUT for length (the City-limits condition is in section 2). |
| municipalProgram.covers (2 items) | ADAPTED | Section 3 (defective residential lateral; pavement not named). |
| municipalProgram.doesNotCover 1 (landscaping) | USED | Section 3. |
| municipalProgram.doesNotCover 2 (outside City limits) | USED | Section 2. |
| municipalProgram.doesNotCover 3 (7 or more units, commercial, septic) | LEFT OUT | Not a buyer-of-a-home topic; on the location page. |
| municipalProgram.doesNotCover 4 (initial cabling, City camera if sound, repeat claims, undated sheet) | LEFT OUT | Undated-sheet exclusions kept off the body to avoid restating an unverified fee rule; confirm with Public Works is on the location page. |
| municipalProgram.whoCanApply (up to six units; ownership or consent; taxes and bills paid; hold-harmless) | ADAPTED | Section 2 (ownership or consent, taxes and bills paid). Unit count and hold-harmless LEFT OUT. |
| municipalProgram.steps 1-5 | ADAPTED | Steps 1 and 3 in section 3 (cable certification within the Code, City camera). Apply, three bids, repair then reimbursement: bids appear in section 1, the rest LEFT OUT (process detail). |
| municipalProgram.afterSteps (fee revenue; no fund balance, waiting list or time; confirm with Public Works) | USED | Section 3. |
| municipalProgram.callout (does not replace City camera; no claim; our inspection shows where and defect vs blockage; 90 percent leaves a share; does not perform repairs) | ADAPTED | Section 3. |
| municipalProgram.closing (link to lateral inspection and reporting) | LEFT OUT | A link, not copy; the St. Louis service is reachable from related pages. |
| secondOpinion (ledes, cta, 3 steps, callout) | LEFT OUT | Second-opinion content belongs to the independent-inspection page; the service page's independent band is carried in section 3's last sentence. |
| buyingGuide.lede (scope vs home inspector) | LEFT OUT | The service FAQ "Is a sewer scope included in a regular home inspection?" answers it (USED via assembly). |
| buyingGuide.body: no rule found, none found hedge | USED | Section 2. |
| buyingGuide.body: long-term rental occupancy inspection not a sewer inspection | USED | Section 2. |
| buyingGuide.body: inside City limits; proof of ownership; taxes paid; ask agent and Public Works | USED | Section 2. |
| buyingGuide.body: findings informational, not legal advice | USED | Section 2. |
| buyingGuide.links, cta | LEFT OUT | Links and CTA are shell-level. |
| buyingGuide.agents (four association affiliations) | LEFT OUT | Company affiliation claims stay on the location page. |
| nearbyAreas | LEFT OUT | Not rebuilt here; the existing page's `coverage` handling is unchanged. |
| FAQ 1 Who runs the sewer system, is it MSD | USED | Merged FAQ via assembly. |
| FAQ 2 Does St. Charles have a lateral program, cost | USED | Merged FAQ. |
| FAQ 3 Which homes qualify | USED | Merged FAQ. |
| FAQ 4 How much does it reimburse | USED | Merged FAQ. |
| FAQ 5 What does it cover and exclude | USED | Merged FAQ. |
| FAQ 6 What to do before applying | USED | Merged FAQ. |
| FAQ 7 Does a lateral repair need a permit ($50 inspection fee, (636) 949-3222) | USED | Merged FAQ; this is where the Community Development number reaches the page. |
| FAQ 8 Is a sewer inspection required before buying | USED | Merged FAQ. |
| FAQ 9 What does a sewer camera inspection show | LEFT OUT | Skipped by the upgrade (the service page answers it in full). |
| FAQ 10 Do you repair or replace | USED | Merged FAQ. |
| finalCta (title, paragraphs, bullets, form) | LEFT OUT | Page-specific `cta` written. |
| sources (14 links, lastReviewed, closingNote) | USED | Passed through by the upgrade (`spec.location.sources`). |

## Pre-purchase service page (v2)

| Section / item | Status | Reason |
|---|---|---|
| seoTitle | LEFT OUT | Existing entry or shell title. |
| metaDescription | LEFT OUT | Page-specific version written. |
| serviceDescription | ADAPTED | Same definition set in St. Charles. |
| hero.intro (definition; scope sentence) | ADAPTED | Hero intro; the no-repair statement is in section 3 and the FAQ. |
| v2.hero.scope (3 bullets), cardTitle, cardIntro | LEFT OUT | Template-level. |
| navLabels, defaultServiceId, messageLabel, extraServiceOptions, images | LEFT OUT | Template-level. |
| definition.answer, supporting 1 (private lateral; visible conditions; day of visit; does not repair) | ADAPTED | Section 1. |
| definition.supporting 2 (ask your home inspector) | LEFT OUT | FAQ "Is a sewer scope included in a regular home inspection?" (USED via assembly). |
| signals 1 An older home | ADAPTED | Problem card via assembly; section 4 makes the age point with St. Charles figures. |
| signals 2 No record of the line's condition | USED | Problem card via assembly. |
| signals 3 Drain trouble mentioned during the sale | LEFT OUT | Only three service cards are used; it appears in no card. |
| signals 4 A local sale requirement | ADAPTED | Section 2, answered with St. Charles facts. |
| signals 5 A short inspection period | USED | Problem card via assembly; cta body notes the deadline. |
| signals 6 Plans to dig after you buy | LEFT OUT | Locating is not discussed on this location page; the FAQ "Can a sewer scope tell where a problem is in the yard?" (USED via assembly) carries it. |
| signals.after (no rule requires one) | ADAPTED | Section 2. |
| limits.intro | ADAPTED | Sections 1 and 4. |
| limits.can (8 items) | ADAPTED | Blockage, deposits, defects named in section 3; the list is in the FAQ answer "What does a sewer scope look for?" (USED). |
| limits.cannot (8 items) | ADAPTED | Waterline and unreached sections via the "clear line" sentence in section 4; the rest in the FAQ "What does a sewer inspection not show?" (USED). |
| limits.callout (clear line is not proof) | USED | Section 4. |
| process steps 1-5 and prep | USED | Process steps via assembly (`existing.process ?? steps`). Equipment names appear there only, as confirmed. |
| decision (inspection and cleaning are separate) | LEFT OUT | Cleaning is not discussed in this local body; the FAQ "Does a sewer scope include cleaning or hydro jetting?" (USED) carries it. |
| independent band (not tied to a repair job) | ADAPTED | Section 3 last sentence. |
| comparison (5 rows) | LEFT OUT | Layout; related pages cover it. |
| ask.items (video, written findings, access point, locating, share with agent) | ADAPTED | Video and findings in section 1; access point in section 3; the rest in inclusions via assembly and FAQ. |
| ask.keep (keep the video; compare estimates) | LEFT OUT | Carried by the FAQ "What should I ask before approving major sewer work?" (USED). |
| evidence (4 example images) | LEFT OUT | Image mosaic; not a copy block. |
| audiences (agents, inspectors, buyers, sellers) | LEFT OUT | Audience cards are template-level. |
| markets (3 hubs) | LEFT OUT | Template-level; `coverage` is on the existing entry. |
| FAQ (29 questions) | USED | Merged by assembly, minus the camera-type duplicate. |
| request (title, intro, submit label) | LEFT OUT | Page-specific `cta` written. |

## Open fact questions

1. Community Development (636) 949-3222 (permits and inspections for smaller lateral repairs) is not used in the body; it reaches the page only through the existing FAQ. Add it to section 3 if the owner wants every City contact in the body.
2. Section 3 restates the $28 fee, the $20 caveat, $7,500 and 90 percent as the City's terms. If the owner prefers no dollar figures on service + location pages, drop the first paragraph of section 3 (the percentages and caps stay on the location page).
3. The undated information sheet exclusions (initial cabling, City camera cost if the line is sound, repeat claims within 12 months) are deliberately not in the body. They remain on the location page with a confirm-with-Public-Works hedge.
