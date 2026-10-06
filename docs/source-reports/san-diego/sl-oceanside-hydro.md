# Source report: Oceanside, CA + Hydro Jetting (`sl-oceanside-hydro`)

Sources: local = `content/pages/san-diego-oceanside.tsx` (`oceansideContent`, `loc-sd-oceanside`); service = `content/pages/services.tsx`, `svc-hydro-jetting` `v2`; shared blocks in `content/pages/service-location-shared.ts` / `content/pages/sl-blocks/`.
Output: `content/pages/sl-sd-oceanside-hydro.tsx` (`oceansideHydroContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| # | Body section | Location facts used | Service facts used |
|---|---|---|---|
| 1 | Jetting cleans the private line, and the City does not publish where it ends | responsibility answer, table row "where it ends", doesNotCover 2 | definition (pressurized water, hose, nozzle, scours the pipe wall) |
| 2 | A 1984 median year built does not say what jetting is dealing with | housingAge paragraph (1984 +/- 2; 48.6 / 16.9), sourceNote 2 (repaired, rerouted, replaced) | limits.cannot (crack, offset, collapse, low spot), FAQ "Is hydro jetting safe for old pipes?", decision (camera first when included) |
| 3 | For a leak the City says call a plumber, and it publishes no sewer backup line | responsibility answer (plumber), whoToCall (760) 435-5800 and (760) 435-3900 framing, doesNotCover 5 | process step 4 ("more water is not automatically better"), FAQ "Can hydro jetting cause a backup?" |
| 4 | No City program found, and approvals to ask about if jetting leads to more | municipalProgram lede, closing, covers 2 and 3, doesNotCover 4 | decision.note ("if what we see goes beyond cleaning, we will say so plainly"), independent (no repairs) |

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
| hero title and intro ("from the street to your house"; City runs the public system) | ADAPTED | Hero intro; tied to cleaning with pressurized water, not repair. |
| heroForm bullets (camera with findings; cleaning and jetting when evidence supports; "Serving the San Diego area since ...") | LEFT OUT | Shell supplies the request form; founding year not used on this page. |
| heroForm card (title, intro, phone suffix/hours, next steps) | LEFT OUT | Shell supplies the form; no hours or response-time wording copied. |
| heroForm note (sewage overflow: contact City Water Utilities) | LEFT OUT | Not a statement this page needs; the City contact is carried in the body where relevant. |
| faqHeading, faqSchemaApproved | LEFT OUT | Shell/page-level FAQ settings; FAQ built by mergeRelevantFaqs with group "In Oceanside". |
| keyTakeaways 1 (City runs public sewer; 450 miles, two plants, 34 lift stations) | ADAPTED | Section 1 (City runs the public system); scale figures left out. |
| keyTakeaways 2 (private lines "from the street to your house"; call a plumber; exact point not found) | USED | Hero, Sections 1 and 3. |
| keyTakeaways 3 (no City lateral program found; no sale inspection rule found; "none found") | ADAPTED | Section 4 (program "none found"); sale rule left out (not a jetting question). |
| jumpNav (9 anchors) and serviceCards (9 cards, helpBar) | LEFT OUT | Location page navigation and cards, not this content shape. |
| responsibility answer (City runs system; private lines owner's; plumber for a leak; confirm with Water Utilities) | USED | Section 1 and 3. |
| responsibility card: public sewer system (City operates collection and treatment; 450 miles, two plants, 34 lift stations) | ADAPTED | Section 1; scale left out. |
| responsibility card: private sewer line (City term vs "lateral") | LEFT OUT | Terminology; the City's own phrase is quoted instead. |
| table row: who runs or arranges it | USED | Section 1 (City runs public system; owner per the City). |
| table row: where it ends (connection point not published; "from the street to your house") | USED | Hero, Section 1 and the fourth problem card. |
| table row: who to contact first ((760) 435-5800; call a plumber) | USED | Section 3. |
| table row: what help exists (none found for existing laterals) | USED | Section 4 ("none found"). |
| table row: where an inspection helps | ADAPTED | Section 2 (camera first when included). |
| responsibility note (not legal advice; confirm with Water Utilities) | ADAPTED | "Ask Water Utilities before you assign cost" / "confirm" wording; the not-legal-advice sentence is not repeated. |
| systemExplainer P1 (City runs collection and treatment) | ADAPTED | Section 1 (City runs the public sewer system). |
| systemExplainer P2 (Run by the City; industrial waste inspection program) | LEFT OUT | Industrial waste program has no bearing on this service. |
| systemExplainer P3 (Scale: 450 miles, two plants, 34 lift stations) | LEFT OUT | Figures not tied to this service. |
| systemExplainer P4 (2021 SSMP, 2015 Sewer Master Plan) | LEFT OUT | Documents the City lists; no bearing on this service. |
| systemExplainer P5 (which agency serves an address; (760) 435-5800) | LEFT OUT | Section 3 already carries the City number. |
| systemExplainer P6 (combined or separate not stated; no pipe age stated) | LEFT OUT | Hedge about things this page makes no claim on. |
| systemExplainer P7 (nothing tells the condition of a particular lateral) | ADAPTED | Section 2 (year built does not tell condition or material). |
| systemExplainer card: what a camera can show (6 bullets) | LEFT OUT | Camera content; not a jetting topic. |
| systemExplainer card closing (distance count; does not establish property line, connection or City responsibility) | LEFT OUT | Camera footage point; jetting section says it "does not show where the City's part begins". |
| housingAge paragraph (median 1984 +/- 2; 16.9 / 48.6 / 34.5; 1980s largest decade 27.6%) | ADAPTED | Section 2 (only 48.6% and 16.9% used). |
| housingAge table (counts 11,328 / 32,537 / 23,132; total 66,997) | LEFT OUT | Detail; percentages carry the point; sources carry attribution. |
| housingAge sourceNote 1 (Census tables B25034, B25035; our arithmetic) | ADAPTED | "Our arithmetic on the Census rows" wording; table links live in the page sources. |
| housingAge sourceNote 2 (year built does not tell condition or material; repaired, rerouted, replaced; Census place vs service area) | USED | Section 2 (Census place sentence left out). |
| whoToCall paragraph (public sewer: City; leak: plumber; independent camera inspection helps) | ADAPTED | Section 3. |
| whoToCall agency: customer service (760) 435-5800 | USED | Section 3, labelled the City's. |
| whoToCall agency: water emergency (760) 435-3900 (option 4 / option 1), framed around City water | USED | Section 3 (number only; options and hours left out; not presented as a sewer line). |
| whoToCall: no published office hours for the department | LEFT OUT | No hours stated anywhere on the page. |
| whoToCall company (The Sewer Pros phone and hours) | LEFT OUT | No company phone on this page. |
| municipalProgram lede (no City lateral repair/grant/reimbursement/inspection-assistance program found; pages undated) | USED | Section 4. |
| covers 1 (private lines owner's, "from the street to your house") | USED | Hero and Section 1. |
| covers 2 (improvement plan reviewed by Water Utilities, Registered Civil Engineer, public right-of-way/easement/City property) | USED | Section 4. |
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
| municipalProgram closing (nothing says any agency pays for our services; we do not repair) | USED | Section 4 (both sentences). |
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
| Three service cards (slow drains in more than one fixture; clears then slows; backing up) | USED | `SERVICE_PROBLEMS["svc-hydro-jetting"]` |
| Fourth card: A line the City says is yours, with buildup that keeps returning | ADAPTED | responsibility table row "where it ends"; service limits.callout |
| Six inclusions | USED | shared blocks (`SERVICE_INCLUSIONS` / `sl-blocks`) |
| Process steps | USED | `svc-hydro-jetting` v2.process.steps (confirmed equipment names appear only inside the steps) |
| Coverage (six other San Diego locations) | ADAPTED | nearbyAreas; title "Other San Diego area locations"; ids loc-sd-san-diego, loc-sd-san-marcos, loc-sd-carlsbad, loc-sd-escondido, loc-sd-chula-vista, loc-sd-mission-valley |

## Service page (`svc-hydro-jetting` v2), element by element

| Element | Status | Where / reason |
|---|---|---|
| seoTitle, metaDescription (market-neutral) | LEFT OUT | Market-neutral; new local title and meta written. |
| serviceDescription (pressurized water through a hose and nozzle) | ADAPTED | City of Oceanside added; wording kept. |
| hero.scope, scopeStatement (accessible residential lines; no repair/replacement/lining/excavation) | ADAPTED | Hero ("a cleaning method, not a repair"); Section 4. |
| hero.cardTitle | LEFT OUT | Shell supplies the request card. |
| definition.answer (pump, hose, nozzle; scours the pipe wall; flushes debris) | USED | Section 1 (hose and nozzle that advances through the line, scours the pipe wall, moves debris along). |
| definition.supporting (one method of sewer cleaning; suitability depends on the line) | ADAPTED | Section 2 ("whether jetting suits a pipe depends on its condition and material"). |
| signals (slow drains, gurgling, smell, backing up, clears then slows) | ADAPTED | Problem cards from SERVICE_PROBLEMS (three); the others LEFT OUT. |
| limits.can (grease/soap, debris and wipes, loose or accessible roots, buildup) | ADAPTED | Fourth problem card ("clear buildup that is accessible"). |
| limits.cannot (cracked or broken pipe, offset or separated joint, collapsed section, belly or low spot) | USED | Section 2. |
| limits.callout (problem returns; cause may be something cleaning cannot remove) | ADAPTED | Fourth problem card (ask what a camera look would show first). |
| process (5 steps incl. Mongoose 184LT trailer-mounted sewer jetter; "more water is not automatically better") | USED | Process steps verbatim (DEC-132); "more water is not automatically better" also adapted in Section 3. |
| process.prep | LEFT OUT | Shell/form detail. |
| decision (camera first or cleaning first; aside: what a camera cannot show) | ADAPTED | Section 2 (camera first helps when included; "if what we see goes beyond cleaning, we will say so plainly" in Section 4). |
| independent (we clean, inspect, locate; do not repair) | ADAPTED | Section 4 (does not perform repairs or replacements). |
| comparison (jetting vs cable cleaning) | LEFT OUT | No local tie; related link only. |
| ask (what to ask for and keep) | ADAPTED | Inclusions block (video and written findings). |
| audiences | LEFT OUT | Audience navigation. |
| markets | LEFT OUT | Hub navigation; this page uses the coverage block instead. |
| request (title, intro with same-day and free-estimate wording, scopeNote) | ADAPTED | Replaced by this page's own `cta`; DEC-088 wording appears only inside the carried FAQ answers. |

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
- USED: What does a sewer camera inspection show?
- USED: Do you repair or replace sewer lines?

Service page questions:

- USED: What is hydro jetting?
- USED: How does hydro jetting work?
- USED: Can hydro jetting clear roots, grease, and debris?
- USED: Does it fix a cracked, offset, or collapsed pipe?
- USED: Is hydro jetting safe for old pipes?
- USED: Can hydro jetting cause a backup?
- USED: What can a camera not show?
- USED: Why are several drains slow at once?
- USED: Does a smell or gurgling mean the main line is clogged?
- USED: Are flushable wipes safe, and can hot water or additives dissolve grease?
- USED: What should I ask for and keep?
- USED: Do you offer same-day hydro jetting? (DEC-088 wording, carried as published)
- USED: How long does hydro jetting take?
- USED: How much does it cost? (DEC-088 wording, carried as published)
- USED: How often should a line be jetted?
- USED: Do I need to prepare anything?
- USED: Will I get video or written findings?
- USED: Is hydro jetting better than snaking?
- USED: Should I get my line cleaned before buying or selling a home?
- USED: Can the line be located?
- USED: Can I jet my line myself?

Skips: none. mergeRelevantFaqs removes any duplicate question text (location copy first).

relatedPageIds: loc-sd-oceanside, svc-hydro-jetting, svc-sewer-cleaning, svc-sewer-camera-inspection.

## Facts to double-check

- (760) 435-5800 and (760) 435-3900 are copied from `oceansideContent`; reconfirm with the City before launch. The City's pages carry no current date.
- "From the street to your house" is the City's short phrase from its Water Utilities contact page; where the City's part ends is not published (stated as "we did not find").
- Census values (median 1984 +/- 2 years; 16.9 / 48.6 / 34.5 percent) are from `oceansideContent` (ACS 2020-2024 5-year, Oceanside city, tables B25034 and B25035); the groupings are the location page's own arithmetic.
