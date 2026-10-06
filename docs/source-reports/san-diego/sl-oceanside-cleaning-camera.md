# Source report: Oceanside, CA + Sewer Cleaning & Camera Inspection (`sl-oceanside-cleaning-camera`)

Sources: local = `content/pages/san-diego-oceanside.tsx` (`oceansideContent`, `loc-sd-oceanside`); service = `content/pages/services.tsx`, `svc-sewer-cleaning-camera-inspection` `v2`; shared blocks in `content/pages/service-location-shared.ts` / `content/pages/sl-blocks/`.
Output: `content/pages/sl-sd-oceanside-cleaning-camera.tsx` (`oceansideCleaningCameraContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| # | Body section | Location facts used | Service facts used |
|---|---|---|---|
| 1 | Footage shows where along the line, not where the City's part ends | responsibility answer, table row "where it ends", systemExplainer card closing | definition (cleaning plus camera), process (camera before, after, or both) |
| 2 | A line that flows again is not proof, and a 1984 median year built does not say why | housingAge paragraph (1984 +/- 2; 16.9 / 48.6 / 34.5), sourceNote 2 | limits.callout (flows again is not proof), cannot (under water), decision (cleaning may come first) |
| 3 | For a leak the City says call a plumber, and the footage is your own record | responsibility answer (plumber), whoToCall (760) 435-5800, doesNotCover 5 | signals (water rising: contact us to discuss), ask (video and written findings; what could not be viewed) |
| 4 | No City program found, and approvals to ask about before any repair | municipalProgram lede, covers 2 and 3, doesNotCover 4, whoCanApply, company phone | ask.keep (compare against findings), scope (no repairs) |

Page notes:
- Agency: only the City of Oceanside (Water Utilities Department; Development Services for permits). The location page lists one agency, so no per-agency wording is needed and the page never says which agency serves an address.
- Consistent with `sl-oceanside-cleaning` and its report: the City names the owner's side as "from the street to your house" and we did not find where the City's part ends or whether it includes the section under the street. No breakpoint, ownership rule, payment or permit requirement is invented.
- All City numbers are labelled the City's. (760) 435-3900 is the City's water emergency line, never presented as a sewer line. No office hours, no dollar figure, no date: the City's pages are undated, so copy says "confirm with the City".
- Census figures (median 1984 +/- 2; 16.9 / 48.6 / 34.5 percent) are the location page's published values with the source (ACS 2020-2024, Oceanside city), stated as the page states them ("our arithmetic on the Census rows").
- Not used anywhere: the removed claims listed in the location module header (1984 labelled ACS 2019-2023, ground-movement narrative, coastal conditions, comparison with Carlsbad or Chula Vista).
- No price, offer, response time, guarantee, emergency or same-day claim, equipment spec, office, or repair/replacement as offered. Equipment names appear only inside the carried process steps (DEC-132).

## Oceanside location page, element by element

| Element | Status | Where / reason |
|---|---|---|
| seoTitle / metaDescription | ADAPTED | Page-specific title and meta (<= 160 characters) for this service; "from the street to your house" tied to the service. |
| hero title and intro ("from the street to your house"; City runs the public system) | ADAPTED | Hero intro; tied to cleaning plus a camera before and/or after. |
| heroForm bullets (camera with findings; cleaning and jetting when evidence supports; "Serving the San Diego area since ...") | LEFT OUT | Shell supplies the request form; founding year not used on this page. |
| heroForm card (title, intro, phone suffix/hours, next steps) | LEFT OUT | Shell supplies the form; no hours or response-time wording copied. |
| heroForm note (sewage overflow: contact City Water Utilities) | LEFT OUT | Not a statement this page needs; the City contact is carried in the body where relevant. |
| faqHeading, faqSchemaApproved | LEFT OUT | Shell/page-level FAQ settings; FAQ built by mergeRelevantFaqs with group "In Oceanside". |
| keyTakeaways 1 (City runs public sewer; 450 miles, two plants, 34 lift stations) | ADAPTED | Section 1 (City runs the public system); scale figures left out. |
| keyTakeaways 2 (private lines "from the street to your house"; call a plumber; exact point not found) | USED | Hero, Sections 1 and 3. |
| keyTakeaways 3 (no City lateral program found; no sale inspection rule found; "none found") | ADAPTED | Section 4 (program "none found"); sale rule left out. |
| jumpNav (9 anchors) and serviceCards (9 cards, helpBar) | LEFT OUT | Location page navigation and cards, not this content shape. |
| responsibility answer (City runs system; private lines owner's; plumber for a leak; confirm with Water Utilities) | USED | Sections 1 and 3. |
| responsibility card: public sewer system (City operates collection and treatment; 450 miles, two plants, 34 lift stations) | ADAPTED | Section 1; scale left out. |
| responsibility card: private sewer line (City term vs "lateral") | LEFT OUT | Terminology; the City's own phrase is quoted instead. |
| table row: who runs or arranges it | USED | Section 1 (City runs public system; owner per the City). |
| table row: where it ends (connection point not published; "from the street to your house") | USED | Hero, Section 1 and the fourth problem card. |
| table row: who to contact first ((760) 435-5800; call a plumber) | USED | Section 3. |
| table row: what help exists (none found for existing laterals) | USED | Section 4 ("none found"). |
| table row: where an inspection helps | ADAPTED | Section 1 (footage records distance). |
| responsibility note (not legal advice; confirm with Water Utilities) | ADAPTED | "Ask Water Utilities before you assign cost" / "confirm" wording; the not-legal-advice sentence is not repeated. |
| systemExplainer P1 (City runs collection and treatment) | ADAPTED | Section 1 (City runs the public sewer system). |
| systemExplainer P2 (Run by the City; industrial waste inspection program) | LEFT OUT | Industrial waste program has no bearing on this service. |
| systemExplainer P3 (Scale: 450 miles, two plants, 34 lift stations) | LEFT OUT | Figures not tied to this service. |
| systemExplainer P4 (2021 SSMP, 2015 Sewer Master Plan) | LEFT OUT | Documents the City lists; no bearing on this service. |
| systemExplainer P5 (which agency serves an address; (760) 435-5800) | LEFT OUT | Section 3 already carries the City number. |
| systemExplainer P6 (combined or separate not stated; no pipe age stated) | LEFT OUT | Hedge about things this page makes no claim on. |
| systemExplainer P7 (nothing tells the condition of a particular lateral) | ADAPTED | Section 2 (a clear video is not proof the line is sound). |
| systemExplainer card: what a camera can show (6 bullets) | LEFT OUT | Covered by the service page's camera limits. |
| systemExplainer card closing (distance count; does not establish property line, connection or City responsibility) | USED | Section 1 and the fourth problem card. |
| housingAge paragraph (median 1984 +/- 2; 16.9 / 48.6 / 34.5; 1980s largest decade 27.6%) | USED | Section 2 (27.6% decade left out). |
| housingAge table (counts 11,328 / 32,537 / 23,132; total 66,997) | LEFT OUT | Detail; percentages carry the point; sources carry attribution. |
| housingAge sourceNote 1 (Census tables B25034, B25035; our arithmetic) | ADAPTED | "Our arithmetic on the Census rows" wording; table links live in the page sources. |
| housingAge sourceNote 2 (year built does not tell condition or material; repaired, rerouted, replaced; Census place vs service area) | USED | Section 2 (Census place sentence left out). |
| whoToCall paragraph (public sewer: City; leak: plumber; independent camera inspection helps) | ADAPTED | Section 3. |
| whoToCall agency: customer service (760) 435-5800 | USED | Section 3, labelled the City's. |
| whoToCall agency: water emergency (760) 435-3900 (option 4 / option 1), framed around City water | LEFT OUT | Carried in the FAQ. |
| whoToCall: no published office hours for the department | LEFT OUT | No hours stated anywhere on the page. |
| whoToCall company (The Sewer Pros phone and hours) | USED | Section 4, read from marketOperatingDetail["san-diego-ca"]; hours not used. |
| municipalProgram lede (no City lateral repair/grant/reimbursement/inspection-assistance program found; pages undated) | USED | Section 4. |
| covers 1 (private lines owner's, "from the street to your house") | USED | Hero and Section 1. |
| covers 2 (improvement plan reviewed by Water Utilities, Registered Civil Engineer, public right-of-way/easement/City property) | ADAPTED | Section 4 (Registered Civil Engineer left out). |
| covers 3 (private-property improvements/grading may trigger a permit; consult Development Services and City code) | ADAPTED | Section 4. |
| covers 4 (building permit applications with plans via the online portal) | LEFT OUT | Portal detail. |
| doesNotCover 1 (no grant, reimbursement, cap, eligibility, application process) | ADAPTED | Section 4 ("none found", no process or dollar terms). |
| doesNotCover 2 (exact connection point; section under the street) | USED | Hero, Section 1. |
| doesNotCover 3 (City statement on damage the City itself caused) | LEFT OUT | A damage-claim question; no bearing on this service. |
| doesNotCover 4 (no statement that every repair needs a particular permit) | USED | Section 4 ("we did not find a published rule that covers every repair of an existing lateral"); never says a permit is or is not required. |
| doesNotCover 5 (no sewer-specific backup or overflow instruction or number) | USED | Section 3. |
| doesNotCover 6 (no City inspection requirement for existing laterals) | LEFT OUT | Not tied to this service; the sale-rule point is carried only where stated in the sections. |
| doesNotCover 7 (combined or separate system not stated) | LEFT OUT | No claim made either way. |
| whoCanApply (owners served by the City system; confirm with Water Utilities) | ADAPTED | "Ask Water Utilities before you assign cost" wording; page never says which agency serves an address. |
| callout "Before you rely on this" (confirm City serves address; camera does not tell approvals; pages undated) | ADAPTED | Section 4 (no current date). |
| municipalProgram closing (nothing says any agency pays for our services; we do not repair) | ADAPTED | Section 4 (we do not perform repairs or replacements). |
| secondOpinion (ledes, steps Inspect/Document/Decide, callout, CTA) | LEFT OUT | Repair-recommendation material. |
| buyingGuide lede and body (no sale rule found; ask for it; confirm City serves address) | LEFT OUT | Sale material; carried in the FAQ. |
| buyingGuide agents block and links | LEFT OUT | Audience navigation. |
| nearbyAreas (six other San Diego locations; market link) | ADAPTED | Coverage block: the six other San Diego locations (market link left out). |
| finalCta (eyebrow, title, paragraphs, bullets, form) | ADAPTED | Replaced by this page's own `cta`. |
| sources (7 links; reviewed 2026-10-04; pages undated) | USED | Page carries `oceansideContent.sources`; body copy states no dates and says "confirm with the City". |
| image slots (oceanside-hero, svc-*, system-street, etc.) | ADAPTED | New per-page slots, neutral alt text, no place-specific photo claim. |

Fixed by the owner brief, not stated on the City pages: "Oceanside is a service area, not an office location." (consistent with the location page, which states no office, address or map pin).

## Cards

| Card | Status | Source |
|---|---|---|
| Three service cards (several fixtures; clogs that return; water rising) | USED | `sl-blocks/sewer-cleaning-camera-inspection` |
| Fourth card: A clog on a line the City says is yours, end point unpublished | ADAPTED | responsibility table row "where it ends"; systemExplainer card closing (distance count) |
| Six inclusions | USED | shared blocks (`SERVICE_INCLUSIONS` / `sl-blocks`) |
| Process steps | USED | `svc-sewer-cleaning-camera-inspection` v2.process.steps (confirmed equipment names appear only inside the steps) |
| Coverage (six other San Diego locations) | ADAPTED | nearbyAreas; title "Other San Diego area locations"; ids loc-sd-san-diego, loc-sd-san-marcos, loc-sd-carlsbad, loc-sd-escondido, loc-sd-chula-vista, loc-sd-mission-valley |

## Service page (`svc-sewer-cleaning-camera-inspection` v2), element by element

| Element | Status | Where / reason |
|---|---|---|
| seoTitle, metaDescription (market-neutral) | LEFT OUT | Market-neutral; new local title and meta written. |
| serviceDescription | ADAPTED | City of Oceanside added; cleaning plus camera wording kept. |
| hero.scope (no repair/replacement) | ADAPTED | Section 4 ("do not perform repairs or replacements"). |
| hero.cardTitle, serviceLabel | LEFT OUT | Shell supplies the request card. |
| definition.answer (cleaning removes buildup; camera shows visible inside; separate services that can be combined; neither repairs) | USED | Hero, `serviceDescription`. |
| definition.supporting 1 (camera before, after, or both; depends on line and scope) | USED | Hero. |
| definition.supporting 2 (private-property lines, not public mains) | ADAPTED | Section 1 (private side of the line). |
| signals (6 items) | ADAPTED | Problem cards from sl-blocks (three); the others LEFT OUT. |
| limits.can-list | LEFT OUT | Covered by the service FAQ. |
| limits.cannot-list (below waterline, unreached, soil, wall thickness, slope, roots, leaks) | ADAPTED | Section 2 (cannot see under water). |
| limits.callout (a line that flows again, or a clear video, is not proof) | USED | Section 2. |
| limits.related (locating) | LEFT OUT | Related link only. |
| process (5 steps; SeeSnake names inside step 3) | USED | Process steps verbatim (DEC-132). |
| process.prep | LEFT OUT | Shell/form detail. |
| decision (no required order; blocked line may need cleaning first) | ADAPTED | Hero; Section 2 (cleaning may need to come first). |
| comparison | LEFT OUT | No local tie. |
| ask (video, written findings, entry point, cleaning record, coding/locating) | ADAPTED | Section 3 (video and written findings noting what could not be viewed); inclusions block. |
| ask.keep (keep what you receive; compare estimates; not a repair recommendation) | ADAPTED | Sections 3 and 4. |
| audiences | LEFT OUT | Audience navigation. |
| markets | LEFT OUT | Hub navigation; this page uses the coverage block instead. |
| request | ADAPTED | Replaced by this page's own `cta`. |

## FAQ

Location page questions (shown first, group 'In Oceanside'):

- USED: Who runs the public sewer system in Oceanside?
- USED: Is the private sewer line the owner’s responsibility in Oceanside?
- USED: Where does the City’s responsibility end and the owner’s begin?
- USED: Who do I call about a sewer leak or backup in Oceanside?
- USED: Does Oceanside have a lateral repair grant or reimbursement program?
- USED: Do I need City approval to work on a lateral in the street or a City easement?
- USED: Is a sewer inspection required when buying an Oceanside home?
- USED: How old is Oceanside’s housing, and does that tell me about my lateral?
- LEFT OUT: What does a sewer camera inspection show? (The service page asks the identical question with the fuller answer (adds what a camera does not show); the location copy is filtered so the service answer is kept.)
- USED: Do you repair or replace sewer lines?

Service page questions:

- USED: What are sewer cleaning and camera inspection?
- USED: What does a sewer camera inspection show?
- USED: Does the camera or the cleaning come first?
- USED: What is the difference between hydro jetting and cable cleaning?
- USED: Does a clear video mean my line is healthy?
- USED: Can a camera find a leak?
- USED: Can a camera tell whether my pipe is structurally sound?
- USED: Can a camera find roots, cracks, or a collapsed pipe?
- USED: What if the camera cannot get past a blockage?
- USED: Does hydro jetting damage pipes?
- USED: What access point do you use, and can you inspect without an outside cleanout?
- USED: Do I get a copy of the video?
- USED: Will I get written findings?
- USED: Can you locate my sewer line, and how deep is it?
- USED: How long does it take, and how much does it cost? (DEC-088 wording, carried as published)
- USED: What are signs I may need cleaning or a camera inspection?
- USED: Should I have the sewer line looked at before buying a house?
- USED: Is a sewer scope part of a standard home inspection?
- USED: How often should a line be cleaned or inspected?
- USED: Can I flush "flushable" wipes?
- USED: Will a chemical drain cleaner solve a sewer backup?

Skips: 1 (reasons above). mergeRelevantFaqs removes any duplicate question text (location copy first).

relatedPageIds: loc-sd-oceanside, svc-sewer-cleaning-camera-inspection, svc-sewer-camera-inspection, svc-sewer-cleaning.

## Facts to double-check

- (760) 435-5800 and (760) 435-3900 are copied from `oceansideContent`; reconfirm with the City before launch. The City's pages carry no current date.
- "From the street to your house" is the City's short phrase from its Water Utilities contact page; where the City's part ends is not published (stated as "we did not find").
- Census values (median 1984 +/- 2 years; 16.9 / 48.6 / 34.5 percent) are from `oceansideContent` (ACS 2020-2024 5-year, Oceanside city, tables B25034 and B25035); the groupings are the location page's own arithmetic.
- Company phone is read from `marketOperatingDetail['san-diego-ca']`, not typed.
