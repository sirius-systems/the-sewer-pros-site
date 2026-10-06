# Rebuild audit: sl-san-marcos-camera

Page: San Marcos, CA + Sewer Camera Inspection. New file: `content/pages/sl-rebuild/sl-san-marcos-camera.tsx`. Replaces the body (and hero intro, meta description, service description, CTA, local card) in `content/pages/san-diego-service-location.tsx`.
Sources: `sanMarcosContent` (`content/pages/san-diego-san-marcos.tsx`) and the `v2` block of `svc-sewer-camera-inspection` (`content/pages/services.tsx`).
Status key: USED = text carried as published; ADAPTED = fact kept, wording rewritten for this page; LEFT OUT = not on this page, with reason.

## The four body sections

| # | h2 | Local source | Service source |
|---|----|--------------|----------------|
| 1 | Three agencies serve San Marcos, so start with whose line it is | responsibility.answer, keyTakeaways 1, whoCanApply, doesNotCover 6 | limits.cannot (connection point not established) |
| 2 | At a Vallecitos address the lateral is yours, so the video is your record | responsibility.cards lateral, municipalProgram.covers 1-2, lede (none found) | limits.can list, ask (video, written findings, location), distance-from-entry |
| 3 | The district's smoke testing is not an inspection of your lateral | systemExplainer rainwater, smoke testing, age not given, nothing tells you the condition | limits.cannot (soil, unreached sections) |
| 4 | Who to call, and what the footage is for | whoToCall.agency, covers 3, doesNotCover 3, callout, secondOpinion | keep (video, compare estimates), decision-scope (not a repair recommendation) |

## What changed from the existing body

The old body had three sections (agency, what a camera records, why look first). It said the same thing about any city once "San Marcos" and "Vallecitos" were swapped. The new body keeps the accurate wording (City provides no sewer; Vallecitos owner-responsibility; none found; the footage does not establish where the district's responsibility begins) and adds three San Marcos facts that fail the substitution test: the three-agency split with no parcel map, the district's smoke testing as a test of district lines, and the district's contact and approvals position. The hero intro, meta description, service description and CTA are new (the old entry had no service description or CTA). The local card changed from "Three agencies serve San Marcos" (now section 1) to "A Vallecitos lateral with no program behind it".

## San Marcos location page

| Section / item | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Location-page metadata; this page has its own. |
| hero.title, hero.intro (City does not provide sewer; Vallecitos says owner is responsible through the connection) | ADAPTED | New hero intro restates both facts for a camera inspection. |
| heroForm (bullets incl. founding year, request card, backdrop) | LEFT OUT | Location-page shell. Form comes from the service-location template. |
| faqHeading, faqSchemaApproved, jumpNav | LEFT OUT | Template-level or navigation. |
| keyTakeaways 1 (City provides no sewer; three agencies; confirm yours) | ADAPTED | Section 1. |
| keyTakeaways 2 (Vallecitos: owner responsible through connection; district maintains the main) | ADAPTED | Section 2. |
| keyTakeaways 3 (no lateral program found; no sale-time inspection rule found) | ADAPTED | Program half in section 2. The sale-time half is left out (buyer topic; no San Marcos pre-purchase page in this set) and stays in the merged FAQ. |
| serviceCards (9) and helpBar | LEFT OUT | Not a page field here. |
| responsibility.answer P1 (depends on agency; City is not the provider; owner responsible for the lateral, district maintains the main) | ADAPTED | Sections 1 and 2. |
| responsibility.answer P2 (rules apply to Vallecitos addresses; no parcel map; Engineering can say; ask another agency) | ADAPTED | Section 1. |
| responsibility.cards: public main (Vallecitos serves San Marcos, Lake San Marcos, parts of Carlsbad, Escondido, Vista) | LEFT OUT | District footprint is not about what a camera records. |
| responsibility.cards: lateral (owner responsible; operation, maintenance, repair) | ADAPTED | Section 2. |
| responsibility.table row: who runs it | ADAPTED | Sections 1-2. |
| responsibility.table row: where it ends | ADAPTED | Section 2 (and the footage does not establish where responsibility begins). |
| responsibility.table row: who to contact first (district main number; district does not install; ask Engineering about approvals) | ADAPTED | Section 4. |
| responsibility.table row: what help exists (district maintains mains; no lateral program found) | ADAPTED | Section 2. |
| responsibility.table row: where an inspection helps | ADAPTED | Section 2 (what the camera records and where along the line). |
| responsibility.note (not legal advice; contact the serving agency) | ADAPTED | Section 1 ("ask that agency what applies"). |
| systemExplainer 1 (sewer from water districts, not the City) | ADAPTED | Section 1. |
| systemExplainer 2 (Vallecitos provides water, wastewater, reclamation across San Marcos and other areas) | LEFT OUT | Footprint, not camera-relevant. On the location page. |
| systemExplainer 3 (284 miles of sewer pipe, four lift stations, whole district) | LEFT OUT | District-wide scale says nothing about one lateral. Kept off to avoid implying it is San Marcos only. |
| systemExplainer 4 (rainwater can enter district sewer lines) | ADAPTED | Section 3. |
| systemExplainer 5 (smoke testing of district lines; assessment of district system, not private) | ADAPTED | Section 3 (the strongest service-lens fact: a district test versus a look inside your line). |
| systemExplainer 6 (which agency serves an address; Engineering can say) | ADAPTED | Section 1. |
| systemExplainer 7 (combined or separate, age of mains and laterals not stated) | ADAPTED | Age half in section 3. Combined/separate left out (not camera-relevant). |
| systemExplainer 8 (nothing tells you the condition of an individual lateral) | ADAPTED | Section 3. |
| systemExplainer.card bullets (what a camera can show) and closing (distance count; does not establish property line, connection or district responsibility) | ADAPTED | Section 2 list and closing paragraph. "Where the line runs, with locating" left out (locating is a separate service). |
| whoToCall.paragraphs (call the serving agency; independent camera helps if the district or plumber points to your lateral) | ADAPTED | Section 4. |
| whoToCall.agency (district main number; call 911 for a sewer spill; O&M on call 24/7; district's statements, not ours) | ADAPTED | Section 4, labelled the district's. |
| whoToCall.agency: (760) 745-2761 water-emergency number | LEFT OUT | The district does not describe it as a sewer number; not presented as one. |
| whoToCall.company | LEFT OUT | Company contact statement stays on the location page; no company phone on this page. |
| municipalProgram.lede (none found; pages undated; Ordinance No. 225 main-extension reimbursement is not lateral help) | ADAPTED | Section 2 uses "none found". Ordinance 225 and the undated-pages note are left out (not camera-relevant); both stay on the location page and FAQ 4. |
| municipalProgram.covers 1-2 (district maintains mains; owner responsible through connection) | ADAPTED | Section 2. |
| municipalProgram.covers 3 (district does not install private connections; owner's contractor; district inspects) | ADAPTED | Section 4 (district does not install; the district-inspection clause is left out). |
| municipalProgram.covers 4-5 (new-connection plan check, fees, deposit; one lateral per parcel) | LEFT OUT | New-connection rules; not about inspecting an existing line. |
| municipalProgram.doesNotCover 1 (no grant, reimbursement, cap, process for an existing lateral) | ADAPTED | Section 2. |
| municipalProgram.doesNotCover 2 (no district inspection requirement for existing laterals) | LEFT OUT | Open item: usable in a future buyer or maintenance page. |
| municipalProgram.doesNotCover 3 (no statement that repair needs a district, building or right-of-way permit) | ADAPTED | Section 4 ("no published rule on which approvals cover repair of an existing lateral"). |
| municipalProgram.doesNotCover 4 (district policy on damage it caused) | LEFT OUT | Not camera-relevant. |
| municipalProgram.doesNotCover 5 (no sewer-specific after-hours number) | LEFT OUT | Section 4 gives the main number, 911 and the O&M statement without claiming a sewer line. |
| municipalProgram.doesNotCover 6 (no map assigning every parcel) | ADAPTED | Section 1. |
| municipalProgram.doesNotCover 7 (combined vs separate) | LEFT OUT | Not camera-relevant. |
| municipalProgram.whoCanApply (Vallecitos-connected owners; other agencies outside this page) | ADAPTED | Section 1. |
| municipalProgram.callout (confirm agency; ask Engineering about approvals; camera does not tell which approvals apply; pages undated) | ADAPTED | Sections 1 and 4. Undated pages left out (see open questions). |
| municipalProgram.closing (nothing says an agency pays for our services; we do not repair) | ADAPTED | Section 4 (we do not repair or replace). The "pays for our services" line is left out. |
| secondOpinion (ledes, Inspect/Document/Decide, callout) | ADAPTED | Section 4 keeps the substance (video as the record; compare written estimates; second look). The block itself is location-page and template layout. |
| buyingGuide.lede and body (which agency first; no sale-time rule found; as-built records through Engineering; Engineering can say boundary) | ADAPTED | Engineering-boundary fact in section 1. Sale-time rule and as-built records left out (buyer topic); both remain in the merged FAQ. |
| buyingGuide.links, cta, agents | LEFT OUT | Not page fields here. |
| nearbyAreas (7 items) | LEFT OUT | Not a page field here. |
| FAQ 1 Who provides sewer service in San Marcos | USED | Merged FAQ. |
| FAQ 2 Is the lateral the owner's at a Vallecitos address; where does that end | USED | Merged FAQ. |
| FAQ 3 How do I find which agency serves my address | USED | Merged FAQ. |
| FAQ 4 Does Vallecitos offer a lateral repair grant or reimbursement | USED | Merged FAQ; carries the Ordinance No. 225 detail. |
| FAQ 5 Who installs a lateral in the Vallecitos area; is it inspected | USED | Merged FAQ. |
| FAQ 6 Does repairing or replacing an existing lateral need a permit | USED | Merged FAQ. |
| FAQ 7 What to do about a sewer spill or backup in the Vallecitos area | USED | Merged FAQ; carries the water-emergency number caveat. |
| FAQ 8 Is a sewer inspection required when buying a San Marcos home | USED | Merged FAQ. |
| FAQ 9 What does a sewer camera inspection show | LEFT OUT | Duplicate; the service FAQ answers it in full (dropped by the upgrade module). |
| FAQ 10 Do you repair or replace sewer lines | USED | Merged FAQ. |
| finalCta (title, paragraphs, bullets, form) | LEFT OUT | Page `cta` written instead; form is template-level. |
| sources (9 links, lastReviewed, closingNote) | USED | Passed through by the upgrade module (`spec.location.sources`). |

## Camera service page (v2)

| Section / item | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Page-specific meta description written; the template builds the title. |
| serviceDescription | ADAPTED | Same definition (visual inspection of the accessible inside of a sewer line, on video), set in San Marcos. |
| hero.intro (definition; no repair, replacement, lining, excavation or pipe installation) | ADAPTED | Definition in the hero. The no-repair statement is carried in section 4 and the merged FAQ ("Do you repair or replace sewer lines?"). |
| v2.hero.scope (3 bullets), cardTitle | LEFT OUT | Template-level. |
| definition (answer + 2 supporting: inspection and documentation only; sewer scope separate from a home inspection) | ADAPTED | Section 2 (inspection and documentation, no repair). The home-inspection line is in the merged FAQ. |
| signals 1 Recurring clogs | USED | Problem card 1, supplied by the upgrade module (SERVICE_PROBLEMS). |
| signals 2 Slow-draining sinks, tubs or toilets | USED | Problem card 2, upgrade module. |
| signals 3 Gurgling | LEFT OUT | Not one of the three cards the shared module lifts; no local fact ties to it. |
| signals 4 Sewage-like odors | LEFT OUT | No local fact ties to it. |
| signals 5 A sewage backup | USED | Problem card 3 ("After a sewage backup"), upgrade module. Section 4 covers who to call for a spill. |
| signals 6 Persistently wet areas near the sewer route | LEFT OUT | No local fact ties to it; the "camera shows the inside of the pipe, not the soil" limit is used in section 3. |
| limits.intro (image quality, lighting, flow, interpretation affect what can be seen) | LEFT OUT | General caveat; the page keeps the specific limits instead. |
| limits.can (roots, deposits, obstructions, cracks, offset joints, surface damage, standing water, connections, collapse) | ADAPTED | Section 2 list (roots and deposits, cracks and offset joints, standing water and connections, parts not viewed). Obstructions and collapse are in the merged FAQ. |
| limits.cannot: below the waterline | ADAPTED | Section 2 closing ("cannot show anything below the waterline"). |
| limits.cannot: sections not reached | ADAPTED | Section 2 ("any part of the line the camera could not view, and why") and section 3 ("a section it could not reach"). |
| limits.cannot: soil around the pipe or voids outside the wall | ADAPTED | Section 3 ("cannot show the soil around the pipe"). |
| limits.cannot: wall thickness, structural capacity, slope or depth, whole root system, every leak, service life | ADAPTED | Not stated on this page; carried by the merged FAQ ("What can't a sewer camera inspection show?"). |
| limits.callout (a visibly clear line is not proof) | LEFT OUT | Not tied to a San Marcos fact; the merged FAQ carries the limits. |
| limits.related (locating is a separate service, not a survey) | LEFT OUT | Locating is a separate service; section 4 does not offer it. The merged FAQ covers it. |
| process steps 1-5 (Access, Camera entry, Live viewing, Recording, Documentation) | USED | Assembled by the upgrade module as the process block. The "Camera entry" step names the SeeSnake models as the owner confirmed; this page adds no equipment text. Section 2 ("You receive the inspection video and written findings"). |
| process.prep (cleanout, safe access, tell us if it relates to a purchase or backup) | LEFT OUT | No local fact ties to it. |
| decision (cleaning and camera separate; when cleaning may come first; hydro jetting condition-dependent) | LEFT OUT | Not tied to a San Marcos fact. The merged FAQ answers "Should the line be cleaned before the camera goes in?". |
| comparison (6 related services) | LEFT OUT | Layout; the related services are reached through the service cards and relatedPageIds. |
| ask: Recorded video / Written observations | ADAPTED | The sentence "You receive the inspection video and written findings" is carried in Section 2 ("You receive the inspection video and written findings"). (owner-confirmed 2026-10-05). |
| ask: Access point and location | ADAPTED | Section 2 ("where along the line a condition sits, measured from where the camera entered"). |
| ask: Line locating; Coding system | LEFT OUT | No local fact ties to them, and the page makes no coding or locating claim. |
| keep (keep the original video and findings; compare written estimates; evaluation outside our scope) | ADAPTED | Section 4 (a camera finding is a visible observation, not a repair recommendation; take the video to another company; compare written estimates). |
| evidence (4 example slots: root intrusion, offset, standing water, summary) | LEFT OUT | Image mosaic; not a page field here. |
| audiences (home buyers, home inspectors, agents) | LEFT OUT | Not page fields here; reached through relatedPageIds and the location page. |
| markets (3 hubs) | LEFT OUT | Not a page field here. |
| FAQ (23 questions in 5 groups): How it works (5), What it can and cannot show (8), Is it right for my situation (4), Records, locating and next steps (4), Scope and service areas (2) | USED | All merged unchanged into the page FAQ by `mergeRelevantFaqs`, except "Which areas does The Sewer Pros serve?" (skipped: this page is an area page). Answers are plain strings, so FAQPage JSON-LD still matches visible text. |
| request (title, intro, scopeNote) | LEFT OUT | Template-level; the page `cta` is written instead. |
