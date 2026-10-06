# Rebuild audit: sl-carlsbad-camera

Page: Carlsbad, CA + Sewer Camera Inspection. New file: `content/pages/sl-rebuild/sl-carlsbad-camera.tsx`. Replaces the body (and hero intro, meta description, service description, CTA, local card) in `content/pages/san-diego-service-location.tsx`.
Sources: `carlsbadContent` (`content/pages/san-diego-carlsbad.tsx`) and the `v2` block of `svc-sewer-camera-inspection`.
Lens: an owner of an existing line. The sibling page `sl-carlsbad-prepurchase` takes the buyer lens; the two share no sentences.
Status key: USED = text carried as published; ADAPTED = fact kept, wording rewritten for this page; LEFT OUT = not on this page, with reason.

## The four body sections

| # | h2 | Local source | Service source |
|---|----|--------------|----------------|
| 1 | Whose rules apply to your Carlsbad line | responsibility.answer, cards, keyTakeaways 1-2 | limits.cannot (does not establish where a responsibility point is), ask (location along the line) |
| 2 | What the City tells owners, and where a camera fits | systemExplainer 3-5 (City guidance, cleanout, LWD roots and storms) | limits.can, limits.cannot (soil, service life), FAQ "How often should I have a sewer camera inspection?" (intervals vary) |
| 3 | The grants do not ask for a camera inspection | municipalProgram lede, doesNotCover, callout | definition (records condition and where), limits (does not establish overflow history) |
| 4 | Who to call first, and what the footage is for | whoToCall (three agencies), municipalProgram.closing, secondOpinion | keep (visible observation, not a repair recommendation) |

## What changed from the existing body

The old body led with the City grant ($3,000, first come, overflow priority) and a camera-inspection-versus-overflow-history point, then agencies, then a one-paragraph list of what a camera records. The grant facts and the "does not by itself establish an overflow history" point are kept (section 3, now joined by Leucadia's statement that inspection does not qualify). New: the City's own maintenance guidance (camera every three to five years, cleanout, cap), Leucadia's roots-and-storms statement, how each agency describes where the lateral ends, and all three agencies' contact numbers, each labelled the agency's. The hero intro, meta description, service description and CTA are new. The local card changed from "Carlsbad has more than one sewer agency" (now section 1) to "The City's own guidance names a camera".

## Carlsbad location page

| Section / item | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Location-page metadata; this page has its own. |
| hero.title, hero.intro (three agencies; two publish lateral grants) | ADAPTED | New hero intro for this service. |
| heroForm (bullets incl. founding year, request card, backdrop) | LEFT OUT | Location-page shell. Form comes from the service-location template. |
| faqHeading, faqSchemaApproved, jumpNav | LEFT OUT | Template-level or navigation. |
| keyTakeaways 1 (not one agency; City most, LWD or VWD south; confirm with the City map) | ADAPTED | Section 1. |
| keyTakeaways 2 (all three put the private lateral on the owner; each describes it differently) | ADAPTED | Section 1. |
| keyTakeaways 3 (City and LWD grants up to $3,000; none from Vallecitos; no posted balance) | ADAPTED | Section 3. |
| serviceCards (9) and helpBar | LEFT OUT | Not a page field here. |
| responsibility.answer (City: building to main, typically in the street, responsibility begins once sewage enters the main; VWD includes point of connection; LWD includes physical connection) | ADAPTED | Section 1. |
| responsibility.cards: public sewer (City most; LWD or VWD south; sewer district map) | ADAPTED | Section 1. |
| responsibility.cards: lateral line | ADAPTED | Section 1. |
| responsibility.table rows: who runs it; where it ends | ADAPTED | Section 1. |
| responsibility.table row: who to contact first (plumber; City may bill the owner if it must act on a lateral overflow) | LEFT OUT | City billing statement is a cost question, not a camera one. Stays on the location page. |
| responsibility.table row: what help exists (no published rule on damage an agency causes; grants) | ADAPTED | Grants in section 3. The damage-an-agency-causes line is left out. |
| responsibility.table row: where an inspection helps | ADAPTED | Sections 1 and 3 (condition and distance along the line). |
| responsibility.note (not legal advice; contact the serving agency) | ADAPTED | Section 1 and section 4 ("does not replace any review an agency requires"). |
| systemExplainer 1 (three agencies; City 288 miles, Encina Wastewater Authority; LWD independent special district, Encinitas, Leucadia, South Carlsbad; VWD serves San Marcos and parts of Carlsbad, Escondido, Vista) | ADAPTED | The three-agency framing is in section 1. 288 miles, Encina and the district footprints are left out (not camera-relevant). |
| systemExplainer 2 (combined/separate and age not stated) | LEFT OUT | Not camera-relevant. |
| systemExplainer 3 (City guidance: clean yearly, professional camera every three to five years, sooner with odor or clogs; cleanout within three to five feet; cap must stay on; removing it causes a spill and is a health violation) | ADAPTED | Section 2, labelled the City's guidance and not a statement about any one property. Interval caveat from the service FAQ. |
| systemExplainer 4 (LWD: roots or obstructions can block a lateral; damaged lateral can lead to backups, especially in storms) | ADAPTED | Section 2, tied to what the camera records. |
| systemExplainer 5 (a public rule does not tell you the condition of a lateral) | ADAPTED | Section 2 (what a camera can and cannot show). |
| systemExplainer.card bullets and closing (distance count; does not establish a property line or agency responsibility) | ADAPTED | Sections 1-2. |
| whoToCall.paragraphs (call the serving agency; VWD (760) 744-0460; no separate VWD emergency number) | ADAPTED | Section 4. |
| whoToCall.agency (City Sewer Division 442-339-2722; nights and weekends 760-931-2197; cleanout cap warning) | ADAPTED | Section 4 (numbers); cap warning in section 2. |
| whoToCall.secondaryAgency (LWD 760-753-0155, 24-7 emergency line) | ADAPTED | Section 4. |
| whoToCall.company | LEFT OUT | Company contact statement stays on the location page; no company phone on this page. |
| municipalProgram.lede (City up to $3,000; LWD 50% up to $3,000; none from VWD; no posted balance) | ADAPTED | Section 3. |
| municipalProgram.covers (City replacement or rehabilitation; LWD repair, lining and replacing pipe qualify) | ADAPTED | City half in section 3. LWD lining and replacement detail left out of this page (it describes repair work we do not offer; stays on the location page and FAQ 5). |
| municipalProgram.doesNotCover (LWD: inspection and cleaning do not qualify; City silent on inspection and cleaning; neither page lists a camera inspection as required) | ADAPTED | Section 3 (heading: the grants do not ask for a camera inspection). |
| municipalProgram.whoCanApply (City: Carlsbad Wastewater service area; LWD: homeowners it serves; VWD none found) | LEFT OUT | Used on the sibling pre-purchase page, where eligibility matters to a buyer. Here only the VWD "none found" is kept. |
| municipalProgram.steps (confirm agency; read terms; ask about funding; City first come, overflow priority; LWD licensed plumber, staff see work, funds available) | ADAPTED | Overflow priority and first come in section 3. LWD licensed-plumber process left out (repair-process detail). |
| municipalProgram.afterSteps (VWD does not install private connections) | LEFT OUT | Used on neither Carlsbad page; stays on the location page. |
| municipalProgram.callout (City posts no balance, closing date or waitlist; LWD invited applications Sept 25, 2026; pays only if funds are available) | ADAPTED | No-posted-balance in section 3. The Sept 25, 2026 notice is dated and stays on the location page and FAQ 5 to avoid a stale claim here. |
| municipalProgram.closing (neither program pays for our services; we do not repair) | ADAPTED | Section 4 (we do not repair or replace). "Neither pays for our services" left out: only LWD says so. |
| secondOpinion (ledes, Inspect/Document/Decide, callout) | ADAPTED | Section 4 keeps the substance (a finding is not a repair recommendation). Block itself is location-page and template layout. |
| buyingGuide.lede and body (which agency first; no sale-time rule found; owner carries the lateral; grants first come and LWD funds-available) | LEFT OUT | Buyer material is used on the sibling `sl-carlsbad-prepurchase` page, so the two pages do not share wording. Stays in the merged FAQ. |
| buyingGuide.links, cta, agents | LEFT OUT | Not page fields here. |
| nearbyAreas (7 items) | LEFT OUT | Not a page field here. |
| FAQ 1 Who is responsible for the sewer lateral in Carlsbad | USED | Merged FAQ. |
| FAQ 2 Which agency serves my Carlsbad address | USED | Merged FAQ. |
| FAQ 3 How much is the City of Carlsbad sewer lateral grant | USED | Merged FAQ. |
| FAQ 4 Does the City grant cover the southern part of the city | USED | Merged FAQ. |
| FAQ 5 What does the Leucadia lateral grant cover | USED | Merged FAQ; carries the Sept 25, 2026 notice. |
| FAQ 6 What number do I call for a sewer spill in Carlsbad | USED | Merged FAQ. |
| FAQ 7 Is a permit required for sewer lateral work in Carlsbad | USED | Merged FAQ. |
| FAQ 8 Is a sewer inspection required when buying a Carlsbad home | USED | Merged FAQ. |
| FAQ 9 What does a sewer camera inspection show | LEFT OUT | Duplicate; the service FAQ answers it in full (dropped by the upgrade module). |
| FAQ 10 Do you repair or replace sewer lines | USED | Merged FAQ. |
| finalCta (title, paragraphs, bullets, form) | LEFT OUT | Page `cta` written instead; form is template-level. |
| sources (12 links, lastReviewed, closingNote) | USED | Passed through by the upgrade module. |

## Camera service page (v2)

| Section / item | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Page-specific meta description written; the template builds the title. |
| serviceDescription | ADAPTED | Same definition (visual inspection of the accessible inside of a sewer line, on video), set in Carlsbad. |
| hero.intro (definition; no repair, replacement, lining, excavation or pipe installation) | ADAPTED | Definition in the hero. The no-repair statement is carried in section 4 and the merged FAQ ("Do you repair or replace sewer lines?"). |
| v2.hero.scope (3 bullets), cardTitle | LEFT OUT | Template-level. |
| definition (answer + 2 supporting: inspection and documentation only; sewer scope separate from a home inspection) | ADAPTED | Sections 2 and 4 (an inspection and documentation service; a finding is not a repair recommendation). The home-inspection line is in the merged FAQ. |
| signals 1 Recurring clogs | USED | Problem card 1, supplied by the upgrade module (SERVICE_PROBLEMS). |
| signals 2 Slow-draining sinks, tubs or toilets | USED | Problem card 2, upgrade module. |
| signals 3 Gurgling | LEFT OUT | Not one of the three cards the shared module lifts; no local fact ties to it. |
| signals 4 Sewage-like odors | LEFT OUT | Used on the location side instead: the City's guidance names a sewage-like odor as a reason to check sooner (section 2 and the local card). |
| signals 5 A sewage backup | USED | Problem card 3 ("After a sewage backup"), upgrade module. The City's cleanout-cap warning (do not remove the cap to relieve a backup) is in section 2. |
| signals 6 Persistently wet areas near the sewer route | LEFT OUT | No local fact ties to it; the "camera shows the inside of the pipe, not the soil" limit is used in section 2. |
| limits.intro (image quality, lighting, flow, interpretation affect what can be seen) | LEFT OUT | General caveat; the page keeps the specific limits instead. |
| limits.can (roots, deposits, obstructions, cracks, offset joints, surface damage, standing water, connections, collapse) | ADAPTED | Section 2 (roots, deposits, cracks and offset joints visible in the accessible line). The rest of the list is in the merged FAQ. |
| limits.cannot: below the waterline | ADAPTED | Left to the merged FAQ; not tied to a Carlsbad fact. |
| limits.cannot: sections not reached | ADAPTED | Left to the merged FAQ; not tied to a Carlsbad fact. |
| limits.cannot: soil around the pipe or voids outside the wall | ADAPTED | Section 2 ("cannot show the soil around the pipe"). |
| limits.cannot: wall thickness, structural capacity, slope or depth, whole root system, every leak, service life | ADAPTED | Section 2 ("how much service life the pipe has left"); the rest are in the merged FAQ. |
| limits.callout (a visibly clear line is not proof) | LEFT OUT | Not tied to a Carlsbad fact; the sibling page uses it. |
| limits.related (locating is a separate service, not a survey) | LEFT OUT | Locating is a separate service and is not offered here; the merged FAQ covers it. |
| process steps 1-5 (Access, Camera entry, Live viewing, Recording, Documentation) | USED | Assembled by the upgrade module as the process block. The "Camera entry" step names the SeeSnake models as the owner confirmed; this page adds no equipment text. Hero and CTA ("on video, with written findings"). |
| process.prep (cleanout, safe access, tell us if it relates to a purchase or backup) | LEFT OUT | Cleanout location and cap guidance are the City's and are in section 2 instead. |
| decision (cleaning and camera separate; when cleaning may come first; hydro jetting condition-dependent) | LEFT OUT | Not tied to a Carlsbad fact. The City's cleaning guidance in section 2 is stated as the City's, without ordering cleaning and camera. |
| comparison (6 related services) | LEFT OUT | Layout; the related services are reached through the service cards and relatedPageIds. |
| ask: Recorded video / Written observations | ADAPTED | The sentence "You receive the inspection video and written findings" is carried in Hero and CTA ("on video, with written findings"). (owner-confirmed 2026-10-05). |
| ask: Access point and location | ADAPTED | Section 1 ("where along the line a condition sits, measured from where the camera entered"). |
| ask: Line locating; Coding system | LEFT OUT | No local fact ties to them, and the page makes no coding or locating claim. |
| keep (keep the original video and findings; compare written estimates; evaluation outside our scope) | ADAPTED | Section 4 (a visible observation, not a repair recommendation; does not replace any review an agency requires). |
| evidence (4 example slots: root intrusion, offset, standing water, summary) | LEFT OUT | Image mosaic; not a page field here. |
| audiences (home buyers, home inspectors, agents) | LEFT OUT | Not page fields here; reached through relatedPageIds and the location page. |
| markets (3 hubs) | LEFT OUT | Not a page field here. |
| FAQ (23 questions in 5 groups): How it works (5), What it can and cannot show (8), Is it right for my situation (4), Records, locating and next steps (4), Scope and service areas (2) | USED | All merged unchanged into the page FAQ by `mergeRelevantFaqs`, except "Which areas does The Sewer Pros serve?" (skipped: this page is an area page). Answers are plain strings, so FAQPage JSON-LD still matches visible text. |
| request (title, intro, scopeNote) | LEFT OUT | Template-level; the page `cta` is written instead. |
