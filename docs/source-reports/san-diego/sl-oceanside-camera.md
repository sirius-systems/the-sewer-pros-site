# Source report: Oceanside, CA + Sewer Camera Inspection (`sl-oceanside-camera`)

Sources: local = `content/pages/san-diego-oceanside.tsx` (`oceansideContent`, `loc-sd-oceanside`); service = `content/pages/services.tsx`, `svc-sewer-camera-inspection` `v2`; shared blocks in `content/pages/service-location-shared.ts` / `content/pages/sl-blocks/`.
Output: `content/pages/sl-sd-oceanside-camera.tsx` (`oceansideCameraContent`).
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| # | Body section | Location facts used | Service facts used |
|---|---|---|---|
| 1 | "From the street to your house" is the City's wording, and the camera does not find the end | responsibility answer, table row "where it ends", systemExplainer card closing, doesNotCover 2 | definition (visual inspection; footage with a distance count) |
| 2 | For a leak the City says call a plumber, and a camera shows what is in the line | responsibility answer (plumber for a leak), whoToCall (760) 435-5800, doesNotCover 5 (no sewer-specific backup line), whoToCall paragraph | limits.can (roots, deposits, cracks, joints, standing water), limits.cannot (under water), decision (cleaning may come first) |
| 3 | A 1984 median year built does not tell you the condition of your lateral | housingAge paragraph (1984 +/- 2; 16.9 / 48.6 / 34.5), sourceNote 2 (repaired, rerouted, replaced; Census place), systemExplainer P7 | definition (inspection shows what is visible in the line) |
| 4 | No City repair program found, and approvals to ask about before any work | municipalProgram lede, covers 2 and 3, doesNotCover 4, buyingGuide body (no sale rule), closing | ask.keep (recording is evidence, not an approval), scope (no repairs) |

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
| hero title and intro ("from the street to your house"; City runs the public system) | ADAPTED | Hero intro; tied to a recorded inspection. |
| heroForm bullets (camera with findings; cleaning and jetting when evidence supports; "Serving the San Diego area since ...") | LEFT OUT | Shell supplies the request form; founding year not used on this page. |
| heroForm card (title, intro, phone suffix/hours, next steps) | LEFT OUT | Shell supplies the form; no hours or response-time wording copied. |
| heroForm note (sewage overflow: contact City Water Utilities) | LEFT OUT | Not a statement this page needs; the City contact is carried in the body where relevant. |
| faqHeading, faqSchemaApproved | LEFT OUT | Shell/page-level FAQ settings; FAQ built by mergeRelevantFaqs with group "In Oceanside". |
| keyTakeaways 1 (City runs public sewer; 450 miles, two plants, 34 lift stations) | LEFT OUT | Scale figures not tied to the camera; the City-runs-the-system fact is in Section 1. |
| keyTakeaways 2 (private lines "from the street to your house"; call a plumber; exact point not found) | USED | Hero, Sections 1 and 2. |
| keyTakeaways 3 (no City lateral program found; no sale inspection rule found; "none found") | USED | Section 4 (program and sale rule, "none found"). |
| jumpNav (9 anchors) and serviceCards (9 cards, helpBar) | LEFT OUT | Location page navigation and cards, not this content shape. |
| responsibility answer (City runs system; private lines owner's; plumber for a leak; confirm with Water Utilities) | USED | Sections 1 and 2. |
| responsibility card: public sewer system (City operates collection and treatment; 450 miles, two plants, 34 lift stations) | ADAPTED | Section 1 (City runs the public system); scale left out. |
| responsibility card: private sewer line (City term vs "lateral") | LEFT OUT | Terminology; the City's own phrase is quoted instead. |
| table row: who runs or arranges it | USED | Section 1 (City runs public system; owner per the City). |
| table row: where it ends (connection point not published; "from the street to your house") | USED | Hero, Section 1 and the fourth problem card. |
| table row: who to contact first ((760) 435-5800; call a plumber) | USED | Section 2. |
| table row: what help exists (none found for existing laterals) | USED | Section 4 ("none found"). |
| table row: where an inspection helps | ADAPTED | Section 2 and the fourth problem card (a camera records condition and where along the line). |
| responsibility note (not legal advice; confirm with Water Utilities) | ADAPTED | "Ask Water Utilities before you assign cost" / "confirm" wording; the not-legal-advice sentence is not repeated. |
| systemExplainer P1 (City runs collection and treatment) | ADAPTED | Section 1 (City runs the public sewer system). |
| systemExplainer P2 (Run by the City; industrial waste inspection program) | LEFT OUT | Industrial waste program has no bearing on this service. |
| systemExplainer P3 (Scale: 450 miles, two plants, 34 lift stations) | LEFT OUT | Figures not tied to this service. |
| systemExplainer P4 (2021 SSMP, 2015 Sewer Master Plan) | LEFT OUT | Documents the City lists; no bearing on this service. |
| systemExplainer P5 (which agency serves an address; (760) 435-5800) | LEFT OUT | Section 2 already carries the City number; agency question not restated. |
| systemExplainer P6 (combined or separate not stated; no pipe age stated) | LEFT OUT | Hedge about things this page makes no claim on. |
| systemExplainer P7 (nothing tells the condition of a particular lateral) | USED | Section 3 ("only an inspection of your line can show what is there"). |
| systemExplainer card: what a camera can show (6 bullets) | ADAPTED | Section 2 (roots, deposits, cracks, joints, standing water) from the service page's list. |
| systemExplainer card closing (distance count; does not establish property line, connection or City responsibility) | USED | Section 1. |
| housingAge paragraph (median 1984 +/- 2; 16.9 / 48.6 / 34.5; 1980s largest decade 27.6%) | USED | Section 3 (27.6% decade left out). |
| housingAge table (counts 11,328 / 32,537 / 23,132; total 66,997) | LEFT OUT | Detail; percentages carry the point; sources carry attribution. |
| housingAge sourceNote 1 (Census tables B25034, B25035; our arithmetic) | ADAPTED | "Our arithmetic on the Census rows" wording; table links live in the page sources. |
| housingAge sourceNote 2 (year built does not tell condition or material; repaired, rerouted, replaced; Census place vs service area) | USED | Section 3. |
| whoToCall paragraph (public sewer: City; leak: plumber; independent camera inspection helps) | USED | Section 2. |
| whoToCall agency: customer service (760) 435-5800 | USED | Section 2, labelled the City's. |
| whoToCall agency: water emergency (760) 435-3900 (option 4 / option 1), framed around City water | LEFT OUT | Not tied to the camera; carried in the FAQ. |
| whoToCall: no published office hours for the department | LEFT OUT | No hours stated anywhere on the page. |
| whoToCall company (The Sewer Pros phone and hours) | LEFT OUT | No company phone on this page (as the LV and Mission Valley camera models). |
| municipalProgram lede (no City lateral repair/grant/reimbursement/inspection-assistance program found; pages undated) | USED | Section 4. |
| covers 1 (private lines owner's, "from the street to your house") | USED | Hero and Section 1. |
| covers 2 (improvement plan reviewed by Water Utilities, Registered Civil Engineer, public right-of-way/easement/City property) | USED | Section 4. |
| covers 3 (private-property improvements/grading may trigger a permit; consult Development Services and City code) | ADAPTED | Section 4 (permit may be triggered; Development Services not named). |
| covers 4 (building permit applications with plans via the online portal) | LEFT OUT | Portal detail. |
| doesNotCover 1 (no grant, reimbursement, cap, eligibility, application process) | ADAPTED | Section 4 ("none found", no process or dollar terms). |
| doesNotCover 2 (exact connection point; section under the street) | USED | Hero, Section 1. |
| doesNotCover 3 (City statement on damage the City itself caused) | LEFT OUT | A damage-claim question; no bearing on this service. |
| doesNotCover 4 (no statement that every repair needs a particular permit) | USED | Section 4 ("we did not find a published rule that covers every repair of an existing lateral"); never says a permit is or is not required. |
| doesNotCover 5 (no sewer-specific backup or overflow instruction or number) | USED | Section 2. |
| doesNotCover 6 (no City inspection requirement for existing laterals) | LEFT OUT | Not tied to this service; the sale-rule point is carried only where stated in the sections. |
| doesNotCover 7 (combined or separate system not stated) | LEFT OUT | No claim made either way. |
| whoCanApply (owners served by the City system; confirm with Water Utilities) | ADAPTED | "Ask Water Utilities before you assign cost" wording; page never says which agency serves an address. |
| callout "Before you rely on this" (confirm City serves address; camera does not tell approvals; pages undated) | ADAPTED | Section 4 ("it does not tell you which approvals apply"; no current date). |
| municipalProgram closing (nothing says any agency pays for our services; we do not repair) | ADAPTED | Section 4 (we do not perform repairs or replacements). |
| secondOpinion (ledes, steps Inspect/Document/Decide, callout, CTA) | LEFT OUT | Repair-recommendation material. |
| buyingGuide lede and body (no sale rule found; ask for it; confirm City serves address) | ADAPTED | Section 4 (no sale rule found; buyer has to ask). |
| buyingGuide agents block and links | LEFT OUT | Audience navigation. |
| nearbyAreas (six other San Diego locations; market link) | ADAPTED | Coverage block: the six other San Diego locations (market link left out). |
| finalCta (eyebrow, title, paragraphs, bullets, form) | ADAPTED | Replaced by this page's own `cta`. |
| sources (7 links; reviewed 2026-10-04; pages undated) | USED | Page carries `oceansideContent.sources`; body copy states no dates and says "confirm with the City". |
| image slots (oceanside-hero, svc-*, system-street, etc.) | ADAPTED | New per-page slots, neutral alt text, no place-specific photo claim. |

Fixed by the owner brief, not stated on the City pages: "Oceanside is a service area, not an office location." (consistent with the location page, which states no office, address or map pin).

## Cards

| Card | Status | Source |
|---|---|---|
| Three service cards (recurring clogs; slow drains; gurgling/odors/backup from SERVICE_PROBLEMS) | USED | `SERVICE_PROBLEMS["svc-sewer-camera-inspection"]` |
| Fourth card: A line the City says is yours, with no published end point | ADAPTED | responsibility table row "where it ends", systemExplainer card closing |
| Six inclusions | USED | shared blocks (`SERVICE_INCLUSIONS` / `sl-blocks`) |
| Process steps | USED | `svc-sewer-camera-inspection` v2.process.steps (confirmed equipment names appear only inside the steps) |
| Coverage (six other San Diego locations) | ADAPTED | nearbyAreas; title "Other San Diego area locations"; ids loc-sd-san-diego, loc-sd-san-marcos, loc-sd-carlsbad, loc-sd-escondido, loc-sd-chula-vista, loc-sd-mission-valley |

## Service page (`svc-sewer-camera-inspection` v2), element by element

| Element | Status | Where / reason |
|---|---|---|
| seoTitle, metaDescription (market-neutral) | LEFT OUT | Market-neutral; new local title and meta written. |
| serviceDescription | ADAPTED | City of Oceanside added; "recorded on video" kept. |
| hero H1, intro, scope list (no repair/replacement) | ADAPTED | Hero intro; scope boundary carried in Section 4 ("does not perform repairs or replacements"). |
| hero.cardTitle | LEFT OUT | Shell supplies the request card. |
| definition.answer (visual inspection of the accessible inside of a line; camera on a flexible cable; typically recorded) | USED | Hero, `serviceDescription`, Section 1. |
| definition.supporting 1 (inspection and documentation; shows what is visible; does not repair) | ADAPTED | Sections 1, 4 (recording is evidence, not an approval). |
| definition.supporting 2 (separate from a general home inspection) | LEFT OUT | Carried by the service FAQ. |
| signals: recurring clogs, slow drains, gurgling, odors, sewage backup, wet areas | ADAPTED | Problem cards from SERVICE_PROBLEMS (three); remaining signals LEFT OUT (shared block carries the point). |
| limits.intro and can-list (roots, deposits, obstructions, cracks, offsets, corrosion, standing water, junctions, collapse) | ADAPTED | Section 2 (roots, deposits, cracks, offset or separated joints, standing water). |
| limits.cannot-list (below waterline, unreached sections, soil, wall thickness, slope, root extent, every leak, service life) | ADAPTED | Section 2 (cannot see under water); remaining items LEFT OUT (carried in the service FAQ). |
| limits.callout (clear line is not proof) | LEFT OUT | Carried in the cleaning-and-camera page, not this one. |
| limits.related (locating is separate; estimate not a survey) | LEFT OUT | Related link only (`relatedPageIds`). |
| process (5 steps: Access, Camera entry with SeeSnake names, Live viewing, Recording, Documentation) | USED | Process steps verbatim; confirmed equipment names appear only inside the steps (DEC-132). |
| process.prep (entry point, access, tell us about purchase) | LEFT OUT | Shell/form detail. |
| decision (cleaning and camera are separate; when cleaning may come first) | ADAPTED | Section 2 (blocked line may need cleaning first). |
| comparison table | LEFT OUT | No local tie. |
| ask (video, written observations, access point, locating, coding) | ADAPTED | Inclusions block (video and written findings) from SERVICE_INCLUSIONS. |
| ask.keep (keep the original video and findings; compare estimates) | ADAPTED | Section 4 ("a recording is evidence you bring to those conversations"). |
| evidence (root intrusion, offset, standing water, report examples) | LEFT OUT | Example imagery; no local tie. |
| audiences (home buyers, home inspectors, agents) | LEFT OUT | Audience navigation. |
| markets (three markets) | LEFT OUT | Hub navigation; this page uses the coverage block instead. |
| request (title, intro, scopeNote) | ADAPTED | Replaced by this page's own `cta`. |

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

- USED: What is a sewer camera inspection?
- USED: How does a sewer camera inspection work?
- USED: Where does the camera go in?
- USED: Can a sewer camera find a clog?
- USED: Should the line be cleaned before the camera goes in?
- USED: What can a sewer camera inspection show?
- USED: What can’t a sewer camera inspection show?
- USED: Can a sewer camera tell how deep the pipe is?
- USED: Can a sewer camera see tree roots?
- USED: Can a sewer camera see a leak?
- USED: Will the camera show a belly or sag in my line?
- USED: What does standing water in the line mean?
- USED: Why might the camera not reach the whole line?
- USED: Do I need a camera inspection if my drains are slow or gurgling?
- USED: Should I get a sewer scope before buying a house?
- USED: How often should I have a sewer camera inspection?
- USED: Why shouldn’t "flushable" wipes go in the toilet?
- USED: Will I get the video and written findings?
- USED: Can you mark where a point is in my yard?
- USED: What should I keep after the inspection?
- USED: What should I do if the inspection finds a problem?
- USED: How much does it cost, and how long does it take? (DEC-088 wording, carried as published)
- LEFT OUT: Which areas does The Sewer Pros serve? (This page IS an area page; the question belongs to the hub.)

Skips: 1 (reasons above). mergeRelevantFaqs removes any duplicate question text (location copy first).

relatedPageIds: loc-sd-oceanside, svc-sewer-camera-inspection, svc-pre-purchase-sewer-inspection, svc-sewer-line-locating.

## Facts to double-check

- (760) 435-5800 and (760) 435-3900 are copied from `oceansideContent`; reconfirm with the City before launch. The City's pages carry no current date.
- "From the street to your house" is the City's short phrase from its Water Utilities contact page; where the City's part ends is not published (stated as "we did not find").
- Census values (median 1984 +/- 2 years; 16.9 / 48.6 / 34.5 percent) are from `oceansideContent` (ACS 2020-2024 5-year, Oceanside city, tables B25034 and B25035); the groupings are the location page's own arithmetic.
