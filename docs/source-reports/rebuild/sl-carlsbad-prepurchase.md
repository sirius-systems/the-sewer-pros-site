# Rebuild audit: sl-carlsbad-prepurchase

Page: Carlsbad, CA + Pre-Purchase Sewer Inspection. New file: `content/pages/sl-rebuild/sl-carlsbad-prepurchase.tsx`. Replaces the body (and hero intro, meta description, service description, CTA) in `content/pages/san-diego-service-location.tsx`. The local card is unchanged.
Sources: `carlsbadContent` (`content/pages/san-diego-carlsbad.tsx`) and the `v2` block of `svc-pre-purchase-sewer-inspection`.
Lens: a buyer. The sibling `sl-carlsbad-camera` takes the owner lens; the two share no sentences.
Status key: USED = text carried as published; ADAPTED = fact kept, wording rewritten for this page; LEFT OUT = not on this page, with reason.

## The four body sections

| # | h2 | Local source | Service source |
|---|----|--------------|----------------|
| 1 | Find the agency before you price the purchase | responsibility.cards public sewer, buyingGuide.lede and body (owner carries it; defect after closing) | definition (the lateral is private; documents the day of the visit), limits.cannot (does not establish agency or responsibility) |
| 2 | Two grants, both first come, neither a promise | municipalProgram lede, covers, doesNotCover, whoCanApply, callout; buyingGuide.body (do not price a purchase around a grant) | limits (an inspection is not covered by LWD: inspection and cleaning do not qualify) |
| 3 | No sale-time inspection rule found, so a buyer has to ask | buyingGuide.body, systemExplainer 4-5 (LWD roots and storms) | signals "A local sale requirement", limits.can (roots, visible damage), limits.callout, definition (no legal advice) |
| 4 | Your deadline, the permits, and what a scope is for | FAQ permit (City, LWD form, VWD), municipalProgram.closing | signals "A short inspection period", process (note your deadline), independent, ask (what to share) |

## What changed from the existing body

The old body had four sections: grants in a buying decision, which provider, what the inspection establishes (a four-item list), and timing. All the grant, agency and hedge facts are kept ("confirm with the agency", "first come, first served", "pays only if funds are available", "none found"). Removed: the line "a $3,000 contribution against a full replacement still leaves a balance" (an unsourced cost inference; replaced by the sourced statements that eligibility is by service area and neither agency posts a balance). Added: City eligibility (the Carlsbad Wastewater service area, with no statement it reaches the other districts), Leucadia's statement that inspection and cleaning do not qualify, the no-sale-time-rule point, a day-of-visit limit, and the permit position from FAQ 7. The hero intro, meta description, service description and CTA are new.

## Carlsbad location page

| Section / item | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Location-page metadata; this page has its own. |
| hero.title, hero.intro (three agencies; two publish lateral grants) | ADAPTED | New hero intro for this service. |
| heroForm (bullets incl. founding year, request card, backdrop) | LEFT OUT | Location-page shell. Form comes from the service-location template. |
| faqHeading, faqSchemaApproved, jumpNav | LEFT OUT | Template-level or navigation. |
| keyTakeaways 1 (not one agency; confirm with the City map) | ADAPTED | Section 1. |
| keyTakeaways 2 (all three put the lateral on the owner) | ADAPTED | Section 1 ("a defect found after closing is a cost the new owner carries"). |
| keyTakeaways 3 (City and LWD grants up to $3,000; none from Vallecitos; no posted balance) | ADAPTED | Section 2. |
| serviceCards (9) and helpBar | LEFT OUT | Not a page field here. |
| responsibility.answer (City, VWD and LWD descriptions of the lateral) | ADAPTED | Section 1 states that all three put the lateral on the owner. The three differing descriptions are used on the camera sibling, so are left out here. |
| responsibility.cards: public sewer (agencies; sewer district map) | ADAPTED | Section 1. |
| responsibility.cards: lateral line | LEFT OUT | Used on the camera sibling. |
| responsibility.table (5 rows) | LEFT OUT | Layout. Rows are covered by sections 1-2 and the merged FAQ; "where an inspection helps" is the page itself. |
| responsibility.note (not legal advice) | ADAPTED | Section 3 ("not legal advice"). |
| systemExplainer 1 (three agencies; City 288 miles; LWD special district; VWD footprint) | LEFT OUT | Agency list is in section 1; mileage and footprint are not buyer-relevant. |
| systemExplainer 2 (combined/separate, age not stated) | LEFT OUT | Not buyer-relevant. |
| systemExplainer 3 (City maintenance guidance: yearly cleaning, camera every three to five years, cleanout) | LEFT OUT | Used on the camera sibling so the two pages do not share wording. |
| systemExplainer 4 (LWD: roots block laterals; damaged lateral can back up, especially in storms) | ADAPTED | Section 3, set against what a scope records. |
| systemExplainer 5 (a public rule does not tell you the condition of a lateral) | ADAPTED | Section 3. |
| systemExplainer.card (bullets, closing) | LEFT OUT | The service page's own can/cannot lists are fuller; the merged FAQ carries them. |
| whoToCall.paragraphs, agency, secondaryAgency (agency phone numbers, emergency lines, cap warning) | LEFT OUT | Emergency contacts are not buyer-at-closing material and are on the camera sibling; the merged FAQ "What number do I call for a sewer spill in Carlsbad?" (USED) carries them for a new owner. |
| whoToCall.company | LEFT OUT | No company phone on this page. |
| municipalProgram.lede (City up to $3,000; LWD 50% up to $3,000; none from VWD; terms differ; no posted balance) | ADAPTED | Section 2. |
| municipalProgram.covers (City replacement or rehabilitation; LWD repair, lining, replacing pipe) | ADAPTED | Section 2 names replacement or rehabilitation (City) and repair (LWD). Lining detail left out. |
| municipalProgram.doesNotCover (LWD: inspection and cleaning do not qualify; City silent; camera inspection not a listed requirement) | ADAPTED | Section 2 ("do not count on a grant to cover a scope"). |
| municipalProgram.whoCanApply (City: Carlsbad Wastewater service area; does not say it reaches LWD or VWD customers; LWD: homeowners it serves) | ADAPTED | Section 2 (eligibility is why a buyer cannot assume a grant). |
| municipalProgram.steps (confirm agency; read terms; ask about funding; City first come; LWD licensed plumber, funds available) | ADAPTED | First come and funds-available in section 2; "confirm with the agency before you plan around either program". LWD process detail left out. |
| municipalProgram.afterSteps (VWD does not install private connections) | LEFT OUT | Not buyer-relevant here; stays on the location page. |
| municipalProgram.callout (no balance, closing date or waitlist; LWD Sept 25, 2026 notice; pays only if funds are available) | ADAPTED | No-balance and funds-available in section 2. The dated notice is left out to avoid a stale claim. |
| municipalProgram.closing (neither pays for our services; we do not repair) | ADAPTED | Section 4 (we do not perform repairs or replacements). |
| secondOpinion (ledes, steps, callout) | LEFT OUT | Belongs to the independent-inspection page and template layout. |
| buyingGuide.lede (which agency first; City map is where it points buyers) | ADAPTED | Section 1. |
| buyingGuide.body: no sale-time rule found in any agency's materials; none found is not absence; state-level not addressed; buyer has to ask | ADAPTED | Section 3. |
| buyingGuide.body: owner carries the lateral so a defect after closing is a cost you carry | ADAPTED | Section 1. |
| buyingGuide.body: both grants first come, LWD funds-available, do not price a purchase around an unconfirmed grant | ADAPTED | Section 2. |
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

## Pre-purchase service page (v2)

| Section / item | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Page-specific meta description written; the template builds the title. |
| serviceDescription | ADAPTED | Same definition (camera inspection arranged during a home purchase, visible condition before closing), set in Carlsbad. |
| hero.intro (definition; no repair, replacement, lining, excavation or pipe installation) | ADAPTED | Definition in the hero. The no-repair statement is carried in section 4 and the merged FAQ. |
| v2.hero.scope, cardTitle, cardIntro, serviceLabel, navLabels, messageLabel, images | LEFT OUT | Template-level. |
| definition (camera inspection of the accessible line serving a home you are buying; the lateral is the private pipe from the building to the main; documents visible conditions on the day; does not repair; ask your home inspector) | ADAPTED | Section 1 (day-of-visit limit; the lateral is private). Ask-your-home-inspector line is in the merged FAQ. |
| signals 1 An older home | USED | Problem card 1, supplied by the upgrade module. The location page has no housing-age data, so no age fact is added. |
| signals 2 No record of the line's condition | USED | Problem card 3, upgrade module. |
| signals 3 Drain trouble mentioned during the sale | LEFT OUT | No local fact ties to it. |
| signals 4 A local sale requirement | ADAPTED | Section 3: none found in City, Leucadia or Vallecitos materials; none found is not a confirmed absence; state-level not addressed. No legal advice. |
| signals 5 A short inspection period | ADAPTED | Problem card 2 (upgrade module) and section 4 (purchase agreement sets the window, note your deadline). |
| signals 6 Plans to dig after you buy (ask whether locating is part of the visit) | LEFT OUT | Locating is not tied to a Carlsbad fact in the location source; the merged FAQ carries "Can a sewer scope tell where a problem is in the yard?". |
| limits.can (roots, deposits, obstructions, cracks, offset joints, standing water, collapse, visible pipe material) | ADAPTED | Section 3 names roots and visible damage only, next to Leucadia's statement that roots can block a lateral. The full list is in the merged FAQ. |
| limits.cannot (below waterline, sections not reached, soil, wall thickness, slope, leaks, future performance, whether any repair is needed) | ADAPTED | Section 1 (cannot establish which agency or where responsibility begins), section 3 (does not predict how the line will perform), section 4 (does not tell you which approvals apply). The rest are in the merged FAQ. |
| limits.callout (a visibly clear line is not proof) | ADAPTED | Section 3 ("not proof the whole line is sound"). |
| process steps 1-5 (Request, Access, Camera run, Video, Written findings) | USED | Assembled by the upgrade module. The Camera run step names the SeeSnake models as the owner confirmed; this page adds no equipment text. "Video and written findings" are also in the hero and CTA. |
| process.prep (cleanout, who to coordinate with, note your deadline) | ADAPTED | Deadline note in section 4 and the CTA. Agent coordination is in the merged FAQ. |
| decision (inspection and cleaning are separate; when the camera may not get through) | LEFT OUT | Not tied to a Carlsbad fact; the merged FAQ answers "Does a sewer scope include cleaning or hydro jetting?". |
| independent (Inspect, Document, Decide; independent inspection not tied to a repair job) | ADAPTED | Section 4: findings are for your decision with your own advisers; we do not repair or replace. Step list is template-level. |
| comparison (5 services) | LEFT OUT | Layout. |
| ask: Inspection video / Written findings | ADAPTED | "Video and written findings" in the hero and CTA (owner-confirmed 2026-10-05). |
| ask: Access point and location; Line locating | LEFT OUT | No local fact ties to them. |
| ask: What to share with your agent (share video and findings; we do not give legal advice) | ADAPTED | Section 4 (decide with your own advisers) and section 3 (informational, not legal advice). |
| keep (record of what was visible on the day; compare written estimates; evaluation outside our scope) | ADAPTED | Section 4 ("what you do with the findings is yours to decide"). Compare-estimates wording is on the service page and the merged FAQ. |
| evidence, audiences, markets | LEFT OUT | Image mosaic and link cards; not page fields here. |
| FAQ (29 questions in 5 groups): The basics (5), What it can and cannot see (11), Cleaning and locating (3), Buying and timing (7), Records and next steps (4) | USED | All merged unchanged into the page FAQ by `mergeRelevantFaqs`, except "Is a sewer scope required when buying or selling a house?" (the Carlsbad question "Is a sewer inspection required when buying a Carlsbad home?" answers it for this city). The location question "What does a sewer camera inspection show?" is also dropped as a duplicate. |
| request (title, intro, submitLabel) | LEFT OUT | Template-level; the page `cta` is written instead. |
