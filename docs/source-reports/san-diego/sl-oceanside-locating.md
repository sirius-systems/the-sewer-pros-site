# Source report: Oceanside, CA + Sewer Line Locating (`sl-oceanside-locating`)

Sources: local = `content/pages/san-diego-oceanside.tsx` (`oceansideContent`, `loc-sd-oceanside`); service = `content/pages/services.tsx`, `svc-sewer-line-locating` `v2`; shared blocks in `content/pages/service-location-shared.ts` / `content/pages/sl-blocks/`.
Output: `content/pages/sl-sd-oceanside-locating.tsx` (`oceansideLocatingContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| # | Body section | Location facts used | Service facts used |
|---|---|---|---|
| 1 | "From the street to your house" is the City's wording, and a locate marks no boundary | responsibility answer, table row "where it ends", whoToCall (760) 435-5800, doesNotCover 2 | definition (transmitter and receiver; estimate, not a survey), limits.cannot (not a boundary) |
| 2 | A lateral can be rerouted, so a 1984 median year built says little about its route | housingAge paragraph (1984 +/- 2; 16.9 / 48.6 / 34.5), sourceNote 2 (repaired, rerouted, replaced) | limits.can ("observed route of the part that could be traced"), limits.cannot (condition), process step 3 (camera cannot pass) |
| 3 | Before anyone digs, the City lists approvals and the one-call program applies | municipalProgram covers 2 and 3 (improvement plans; permits; Development Services), doesNotCover 4 | limits.callout (one-call program, often 811), limits.cannot (not utility clearance or permission to dig) |
| 4 | For a leak the City says call a plumber, and a route helps whoever does the work | responsibility answer (plumber), doesNotCover 5 (no sewer backup line), municipalProgram lede (none found) | FAQ "Can line locating help with sewer repair work?", independent (we do not repair) |

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
| hero title and intro ("from the street to your house"; City runs the public system) | ADAPTED | Hero intro; tied to estimating the route for planning. |
| heroForm bullets (camera with findings; cleaning and jetting when evidence supports; "Serving the San Diego area since ...") | LEFT OUT | Shell supplies the request form; founding year not used on this page. |
| heroForm card (title, intro, phone suffix/hours, next steps) | LEFT OUT | Shell supplies the form; no hours or response-time wording copied. |
| heroForm note (sewage overflow: contact City Water Utilities) | LEFT OUT | Not a statement this page needs; the City contact is carried in the body where relevant. |
| faqHeading, faqSchemaApproved | LEFT OUT | Shell/page-level FAQ settings; FAQ built by mergeRelevantFaqs with group "In Oceanside". |
| keyTakeaways 1 (City runs public sewer; 450 miles, two plants, 34 lift stations) | ADAPTED | Section 1 (City runs the public system); scale figures left out. |
| keyTakeaways 2 (private lines "from the street to your house"; call a plumber; exact point not found) | USED | Hero, Sections 1 and 4. |
| keyTakeaways 3 (no City lateral program found; no sale inspection rule found; "none found") | ADAPTED | Section 4 (program "none found"); sale rule left out. |
| jumpNav (9 anchors) and serviceCards (9 cards, helpBar) | LEFT OUT | Location page navigation and cards, not this content shape. |
| responsibility answer (City runs system; private lines owner's; plumber for a leak; confirm with Water Utilities) | USED | Section 1 and 4. |
| responsibility card: public sewer system (City operates collection and treatment; 450 miles, two plants, 34 lift stations) | ADAPTED | Section 1; scale left out. |
| responsibility card: private sewer line (City term vs "lateral") | LEFT OUT | Terminology; the City's own phrase is quoted instead. |
| table row: who runs or arranges it | USED | Section 1 (City runs public system; owner per the City). |
| table row: where it ends (connection point not published; "from the street to your house") | USED | Hero, Section 1 and the fourth problem card. |
| table row: who to contact first ((760) 435-5800; call a plumber) | ADAPTED | Section 1 carries (760) 435-5800 (the City's number); Section 4 carries the plumber instruction. |
| table row: what help exists (none found for existing laterals) | USED | Section 4 ("none found"). |
| table row: where an inspection helps | ADAPTED | Section 2 (a camera shows condition; a locate does not). |
| responsibility note (not legal advice; confirm with Water Utilities) | ADAPTED | "Ask Water Utilities before you assign cost" / "confirm" wording; the not-legal-advice sentence is not repeated. |
| systemExplainer P1 (City runs collection and treatment) | ADAPTED | Section 1 (City runs the public sewer system). |
| systemExplainer P2 (Run by the City; industrial waste inspection program) | LEFT OUT | Industrial waste program has no bearing on this service. |
| systemExplainer P3 (Scale: 450 miles, two plants, 34 lift stations) | LEFT OUT | Figures not tied to this service. |
| systemExplainer P4 (2021 SSMP, 2015 Sewer Master Plan) | LEFT OUT | Documents the City lists; no bearing on this service. |
| systemExplainer P5 (which agency serves an address; (760) 435-5800) | ADAPTED | Section 1 sends the owner to Water Utilities at (760) 435-5800; the page never says which agency serves an address. |
| systemExplainer P6 (combined or separate not stated; no pipe age stated) | LEFT OUT | Hedge about things this page makes no claim on. |
| systemExplainer P7 (nothing tells the condition of a particular lateral) | ADAPTED | Section 2 (a locate does not show condition). |
| systemExplainer card: what a camera can show (6 bullets) | LEFT OUT | Camera content; "where the line runs, with locating" is this page's own topic. |
| systemExplainer card closing (distance count; does not establish property line, connection or City responsibility) | ADAPTED | Section 1 (a locate is an estimate that does not establish a property line, the connection or the City's responsibility). |
| housingAge paragraph (median 1984 +/- 2; 16.9 / 48.6 / 34.5; 1980s largest decade 27.6%) | USED | Section 2 (27.6% decade left out). |
| housingAge table (counts 11,328 / 32,537 / 23,132; total 66,997) | LEFT OUT | Detail; percentages carry the point; sources carry attribution. |
| housingAge sourceNote 1 (Census tables B25034, B25035; our arithmetic) | ADAPTED | "Our arithmetic on the Census rows" wording; table links live in the page sources. |
| housingAge sourceNote 2 (year built does not tell condition or material; repaired, rerouted, replaced; Census place vs service area) | USED | Section 2 ("rerouted" carries the locating tie; Census place sentence left out). |
| whoToCall paragraph (public sewer: City; leak: plumber; independent camera inspection helps) | ADAPTED | Section 4. |
| whoToCall agency: customer service (760) 435-5800 | USED | Section 1, labelled the City's. |
| whoToCall agency: water emergency (760) 435-3900 (option 4 / option 1), framed around City water | LEFT OUT | Carried in the FAQ. |
| whoToCall: no published office hours for the department | LEFT OUT | No hours stated anywhere on the page. |
| whoToCall company (The Sewer Pros phone and hours) | LEFT OUT | No company phone on this page. |
| municipalProgram lede (no City lateral repair/grant/reimbursement/inspection-assistance program found; pages undated) | USED | Section 4 (shortened: "none found", no current date). |
| covers 1 (private lines owner's, "from the street to your house") | USED | Hero and Section 1. |
| covers 2 (improvement plan reviewed by Water Utilities, Registered Civil Engineer, public right-of-way/easement/City property) | USED | Section 3. |
| covers 3 (private-property improvements/grading may trigger a permit; consult Development Services and City code) | USED | Section 3. |
| covers 4 (building permit applications with plans via the online portal) | LEFT OUT | Portal detail. |
| doesNotCover 1 (no grant, reimbursement, cap, eligibility, application process) | ADAPTED | Section 4 ("none found", no process or dollar terms). |
| doesNotCover 2 (exact connection point; section under the street) | USED | Hero, Section 1. |
| doesNotCover 3 (City statement on damage the City itself caused) | LEFT OUT | A damage-claim question; no bearing on this service. |
| doesNotCover 4 (no statement that every repair needs a particular permit) | USED | Section 4 ("we did not find a published rule that covers every repair of an existing lateral"); never says a permit is or is not required. |
| doesNotCover 5 (no sewer-specific backup or overflow instruction or number) | USED | Section 4. |
| doesNotCover 6 (no City inspection requirement for existing laterals) | LEFT OUT | Not tied to this service; the sale-rule point is carried only where stated in the sections. |
| doesNotCover 7 (combined or separate system not stated) | LEFT OUT | No claim made either way. |
| whoCanApply (owners served by the City system; confirm with Water Utilities) | ADAPTED | "Ask Water Utilities before you assign cost" wording; page never says which agency serves an address. |
| callout "Before you rely on this" (confirm City serves address; camera does not tell approvals; pages undated) | ADAPTED | Section 3 (a locate does not replace a permit). |
| municipalProgram closing (nothing says any agency pays for our services; we do not repair) | ADAPTED | Section 4 (does not qualify a job for a program; we do not perform repairs or replacements). |
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
| Three service cards (planning digging; landscaping, trees, fences; placing a camera finding) | USED | `sl-blocks/sewer-line-locating` |
| Fourth card: Not sure where your line runs to the street | ADAPTED | responsibility table row "where it ends"; service limits (estimate, not condition) |
| Six inclusions | USED | shared blocks (`SERVICE_INCLUSIONS` / `sl-blocks`) |
| Process steps | USED | `svc-sewer-line-locating` v2.process.steps (confirmed equipment names appear only inside the steps) |
| Coverage (six other San Diego locations) | ADAPTED | nearbyAreas; title "Other San Diego area locations"; ids loc-sd-san-diego, loc-sd-san-marcos, loc-sd-carlsbad, loc-sd-escondido, loc-sd-chula-vista, loc-sd-mission-valley |

## Service page (`svc-sewer-line-locating` v2), element by element

| Element | Status | Where / reason |
|---|---|---|
| seoTitle, metaDescription (market-neutral) | LEFT OUT | Market-neutral; new local title and meta written. |
| serviceDescription (transmitter inside the line, receiver at the surface; estimates, not a survey) | ADAPTED | City of Oceanside added; wording kept. |
| hero.scope (estimate not a survey; no repair/excavation/replacement) | ADAPTED | Sections 1, 4. |
| hero.cardTitle, cardIntro | LEFT OUT | Shell supplies the request card. |
| definition.answer (transmitter in the line; receiver at the surface; sonde; depth approximate) | ADAPTED | Section 1 (transmitter and receiver; estimate). Depth wording left out. |
| definition.supporting (planning landscaping, fencing; locating vs camera; private-property lines, not public mains) | ADAPTED | Hero (digging, fencing, planting); Section 2 (camera shows condition). |
| definition.scope | LEFT OUT | Scope statement carried in Section 4 only as "does not perform repairs or replacements". |
| signals (5 items) | ADAPTED | Problem cards from sl-blocks (three); remaining signals LEFT OUT. |
| limits.can-list | ADAPTED | Section 2 ("observed route of the part of the line that could be traced"). |
| limits.cannot-list (survey, utility clearance, exact depth, other utilities, untraced sections, pipe condition) | USED | Sections 1, 2, 3 (not a survey, not clearance, no condition, untraced part). |
| limits.callout (estimate; contact one-call program, often 811) | USED | Section 3 (service wording kept). |
| process (5 steps; SeekTech SR-20 inside step 2) | USED | Process steps verbatim (DEC-132). |
| process.prep (entry point, access, one-call before digging) | LEFT OUT | Shell/form detail; the one-call line is carried in Section 3. |
| decision (locating vs camera inspection; blocked camera cannot trace) | ADAPTED | Section 2 (where the camera cannot pass, that part is not traced; condition needs a camera). |
| independent (locate, document, decide; does not sell repair or replacement) | ADAPTED | Section 4. |
| comparison (incl. 811 row) | LEFT OUT | No local tie; one-call wording carried in Section 3. |
| ask (surface marks, depth, entry point, untraced parts, video and findings) | ADAPTED | Inclusions block (video and written findings; entry point; position estimate; observed route). |
| ask.keep (keep records; second opinion; "not a survey, utility clearance or permission to dig") | ADAPTED | Section 3. |
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
- LEFT OUT: What does a sewer camera inspection show? (A camera question the locating page does not own.)
- USED: Do you repair or replace sewer lines?

Service page questions:

- USED: What is sewer line locating?
- USED: How does sewer line locating work?
- USED: What are a sonde, a receiver, and a cleanout?
- USED: Is sewer line locating the same as calling 811?
- USED: Do I need a camera inspection before locating?
- USED: Can you tell me exactly where my sewer line is?
- USED: Can sewer line locating determine the pipe's depth?
- USED: Can you locate every utility on my property?
- USED: Is a locate a survey, and does it mean I can dig?
- USED: Can a sewer camera see through water?
- USED: Can a sewer line be located under concrete or a driveway?
- USED: What if the camera cannot get through the line?
- USED: What access point do you use? Do you have to pull a toilet?
- USED: Will I get surface marks?
- USED: Will I get video and written findings?
- USED: How long does locating take, and how much does it cost? (DEC-088 wording, carried as published)
- USED: Can line locating help before landscaping or fence installation?
- LEFT OUT: If the line drains after cleaning, is the pipe healthy? (Off the locating topic (cleaning and pipe health).)
- LEFT OUT: Should I use chemical drain cleaner on a sewer line clog? (Off the locating topic (drain cleaning products).)
- USED: Can line locating help with sewer repair work?
- USED: How often should a sewer line be located or inspected?
- LEFT OUT: Does my city require a sewer inspection for a sale, remodel, or permit? (The Oceanside sale question (location FAQ 7) answers it for this city.)
- USED: Should I have the line located before buying a house?

Skips: 4 (reasons above). mergeRelevantFaqs removes any duplicate question text (location copy first).

relatedPageIds: loc-sd-oceanside, svc-sewer-line-locating, svc-sewer-camera-inspection, svc-pre-purchase-sewer-inspection.

## Facts to double-check

- (760) 435-5800 and (760) 435-3900 are copied from `oceansideContent`; reconfirm with the City before launch. The City's pages carry no current date.
- "From the street to your house" is the City's short phrase from its Water Utilities contact page; where the City's part ends is not published (stated as "we did not find").
- Census values (median 1984 +/- 2 years; 16.9 / 48.6 / 34.5 percent) are from `oceansideContent` (ACS 2020-2024 5-year, Oceanside city, tables B25034 and B25035); the groupings are the location page's own arithmetic.
