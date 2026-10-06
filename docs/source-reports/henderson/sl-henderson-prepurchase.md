# Source audit: sl-henderson-prepurchase

Page: Henderson, NV + Pre-Purchase Sewer Inspection. File: `content/pages/sl-henderson-prepurchase.tsx`.
Sources: `hendersonContent` (`content/pages/las-vegas-henderson.tsx`) and the `v2` block of `svc-pre-purchase-sewer-inspection` (`content/pages/services.tsx`).
Status key: USED = text carried verbatim (including FAQ answers re-used as published); ADAPTED = fact kept, wording rewritten for this page; LEFT OUT = not on this page, with reason.

## The four body sections and their sources

| # | h2 | Local source | Service source |
|---|----|--------------|----------------|
| 1 | What you take on when a Henderson sale closes | buyingGuide.lede, responsibility.answer (owner pays from the connection; "after closing that responsibility belongs to the owner") | limits.can/cannot lede ("documents visible conditions in the section the camera reaches, on the day of the visit"); systemExplainer.card.closing (does not establish where the connection is) |
| 2 | No sale-time rule found, so you have to ask | buyingGuide.body (no rule found, none found is not absence, state-level not addressed, periodic inspection is an owner duty, buyer can ask); municipalProgram.lede (no repair/grant/reimbursement program) | signals "A local sale requirement"; definition ("no legal advice") |
| 3 | A newer Henderson house still has an unknown lateral | housingAge.paragraphs, housingAge.table (3.1% pre-1970), housingAge.sourceNote (age does not tell condition; repaired, rerouted or replaced) | limits.callout ("A visibly clear line is not proof...") |
| 4 | City contacts at closing, and where a scope fits | buyingGuide.body (Customer Portal, 702-267-5900, Property Agent Service Request, FAQ undated), whoToCall.secondaryAgency (Public Works 702-267-3600), municipalProgram.callout (inspection does not tell which approvals apply) | ask.items "Line locating" and signals "Plans to dig after you buy" (locating is separate) |

## Henderson location page

| Section / item | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Page-specific title and meta written instead. |
| hero.title, hero.intro (responsibility from the City main) | ADAPTED | Intro restates the owner-from-the-connection fact for a buyer. |
| heroForm (bullets, form card, backdrop) | LEFT OUT | Form and hero card belong to the location page shell. This page's form comes from the service-location template. |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level fields. |
| keyTakeaways 1 (responsibility split, City cleans main blockages) | ADAPTED | Owner side in body section 1. City-side cleaning is in the FAQ "Does the City pay if a blockage is in the City sewer main?" (USED). |
| keyTakeaways 2 (periodic professional inspection) | ADAPTED | Section 2. |
| keyTakeaways 3 (no City repair program found) | ADAPTED | Section 2. |
| keyTakeaways.jumpNav | LEFT OUT | Navigation of the location page. |
| serviceCards (nine cards, helpBar) | LEFT OUT | Not a page field here; the other services are reached through relatedPageIds. |
| responsibility.answer (2 paragraphs) | ADAPTED | Sections 1 and 2. |
| responsibility.cards (City main, lateral) | ADAPTED | Folded into section 1 as the owner side. |
| responsibility.table (5 rows) | LEFT OUT | Table is location-page layout. Rows 1-4 are covered by section 1 and FAQ; row 5 (where an inspection helps) is the page itself. |
| responsibility.note (not legal advice, undated page) | ADAPTED | "Not legal advice" in section 2; undated City FAQ noted in section 4. |
| systemExplainer paragraphs 1-3 (Utility Services, City main, main blockages) | LEFT OUT | Context about the City system, not buyer-specific. Main blockages appear in the FAQ. |
| systemExplainer septic paragraph (AB 220, 702-267-3670) | LEFT OUT | Septic connection rules are not about a sewer scope and would add a third City number. Open item: a buyer of a septic property may want it. |
| systemExplainer "not said whether system combined/separate" | LEFT OUT | Not used by the service. |
| systemExplainer "nothing tells you condition of any lateral" | ADAPTED | Section 3 (age does not tell condition). |
| systemExplainer.card bullets (what a camera shows) | LEFT OUT | The service page's own can/cannot lists are fuller, and the FAQ carries them. |
| systemExplainer.card.closing (footage vs. the connection) | ADAPTED | Section 1. |
| housingAge paragraph (median 2001, decades, 60.2%, 82.1%, 3.1%) | ADAPTED | Median, 82.1% and 3.1% used in section 3. Decade counts and 60.2% left out for length. |
| housingAge.table | LEFT OUT | Layout; key figures are in section 3. |
| housingAge.sourceNote (B25034/B25035 links, margins, Census place caveat) | ADAPTED | Source named in section 3; links and margin of error are on the location page. |
| housingAge "age does not tell condition" paragraph | ADAPTED | Section 3. |
| whoToCall.paragraphs (emergency, portal, ROW permit, independent inspection) | ADAPTED | Section 4 uses the Public Works permit line; emergency line is in the FAQ. |
| whoToCall.agency (Utility Services 702-267-5900) | ADAPTED | Number appears in section 4 as the Customer Care Center number, labelled the City's. |
| whoToCall.secondaryAgency (Public Works 702-267-3600) | ADAPTED | Section 4, labelled the City's. |
| whoToCall.company ("newer market for us") | LEFT OUT | Company statement; kept on the location page. |
| municipalProgram.lede (none found) | ADAPTED | Section 2. |
| municipalProgram.covers (5 items) | ADAPTED | Items 1, 4 and 5 used (connection, periodic inspection, ROW permit). Items 2 and 3 are City-main and cost detail, in the FAQ. |
| municipalProgram.doesNotCover (6 items) | ADAPTED | Items 1 (no grant/reimbursement) and 3 (no permit rule for camera inspection, via "does not tell you which approvals apply") used. Items 2, 4, 5, 6 not buyer-relevant. |
| municipalProgram.whoCanApply | LEFT OUT | "Confirm the City serves your address" is on the coverage block ("use the page for the address you are buying"). |
| municipalProgram.callout | ADAPTED | Section 4. |
| municipalProgram.closing (we do not repair) | ADAPTED | Last sentence of section 2; FAQ USED. |
| secondOpinion (ledes, 3 steps, callout) | LEFT OUT | Second-opinion content belongs to the independent-inspection page; the service page's own "independent" band is not a page field here. |
| buyingGuide.lede | ADAPTED | Section 1. |
| buyingGuide.body: no rule found | ADAPTED | Section 2 and problem card 4. |
| buyingGuide.body: Customer Portal / Customer Care Center / Property Agent Service Request | ADAPTED | Section 4; FAQ USED. |
| buyingGuide.body: locating shows where the line runs | ADAPTED | Section 4 (locating is separate). |
| buyingGuide.links, cta, agents | LEFT OUT | Links to audience pages are not page fields here; agents and inspectors are covered by the service FAQ. |
| nearbyAreas | ADAPTED | Became `coverage` (Las Vegas, North Las Vegas, Summerlin). The "All Las Vegas service areas" item is left out. |
| FAQ 1 Where does my responsibility start | USED | Merged FAQ. |
| FAQ 2 Does the City pay if a blockage is in the City main | USED | Merged FAQ. |
| FAQ 3 Does the City help pay for lateral repairs | USED | Merged FAQ. |
| FAQ 4 House only twenty years old | USED | Merged FAQ. |
| FAQ 5 Who to call about a sewer emergency | USED | Merged FAQ; a new owner needs it. |
| FAQ 6 Lateral work in the right-of-way needs a permit | USED | Merged FAQ. |
| FAQ 7 Does Henderson require a sewer inspection when a home is sold | USED | Merged FAQ. |
| FAQ 8 Transfer water and sewer service when buying | USED | Merged FAQ. |
| FAQ 9 What does a sewer camera inspection show | LEFT OUT | Duplicate; the service FAQ answers it as "What does a sewer scope look for?" and "What does a sewer inspection not show?". |
| FAQ 10 Do you repair or replace sewer lines | USED | Merged FAQ. |
| finalCta (title, paragraphs, bullets, form) | LEFT OUT | Page-specific cta written; form is template-level. |
| sources (7 links, lastReviewed, closingNote) | LEFT OUT | The page body names its sources inline; the full list stays on the location page. Open item: whether the template should print sources. |

## Pre-purchase service page (v2)

| Section / item | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Page-specific versions written. |
| serviceDescription | ADAPTED | Same definition, set in Henderson. |
| hero.intro (definition; "we do not provide repair...") | ADAPTED | Definition in the intro. The no-repair statement is carried into section 2 and the FAQ. |
| v2.hero.scope (3 bullets) | LEFT OUT | Template-level. |
| definition.answer and supporting | ADAPTED | Intro and section 1 (lateral, visible conditions, day of visit); "ask your home inspector" via FAQ (USED). |
| signals 1 An older home | USED | Problem card 1. |
| signals 2 No record of the line's condition | USED | Problem card 3. |
| signals 3 Drain trouble mentioned during the sale | LEFT OUT | Only three service cards are used; it appears in no card. Open: reconsider if a fourth service card is wanted. |
| signals 4 A local sale requirement | ADAPTED | Section 2 and problem card 4, answered with Henderson facts. |
| signals 5 A short inspection period | USED | Problem card 2. |
| signals 6 Plans to dig after you buy | ADAPTED | Locating line in section 4. |
| signals.after (no rule requires one) | ADAPTED | Section 2. |
| limits.intro | ADAPTED | Section 1. |
| limits.can (8 items) | LEFT OUT | Listed in the FAQ answer "What does a sewer scope look for?" (USED). |
| limits.cannot (8 items) | ADAPTED | Waterline, sections not reached, and "clear is not proof" used in sections 1 and 3; full list in the FAQ (USED). |
| limits.callout | ADAPTED | Section 3. |
| process (5 steps + intro) | USED | Process block: Request, Access, Camera run, Video, Written findings. |
| process.intro (no standard time) | LEFT OUT | Covered by FAQ "How long does a sewer scope take?". |
| process.prep (3 items) | LEFT OUT | Not a page field. Open: could become a note under process. |
| decision (cleaning separate, when camera may not get through) | LEFT OUT | Covered by FAQ answers on cleaning and passage (USED). |
| independent (Inspect, Document, Decide) | LEFT OUT | Template band. |
| comparison (5 rows) | LEFT OUT | Replaced by relatedPageIds (camera inspection, line locating). |
| ask.items (5) | ADAPTED | "Records you can share" is inclusion 6 (USED); locating is section 4; others in the FAQ. |
| ask.keep | LEFT OUT | Covered by inclusions and FAQ "What should a sewer inspection record include?". |
| evidence (4 example items, caveat) | LEFT OUT | Example photos are the service page's own, not Henderson footage. |
| audiences (4) | LEFT OUT | Not a page field; real estate audiences are covered by inclusion 6. |
| markets (3) | LEFT OUT | Replaced by `coverage`. |
| request | LEFT OUT | Template form. |
| FAQ group The basics (5) | USED | Merged FAQ. |
| FAQ group What it can and cannot see (10) | USED | Merged FAQ. |
| FAQ group Cleaning and locating (3: clean first, includes cleaning, where in the yard) | USED | Merged FAQ. |
| FAQ Buying and timing: Should I get a scope; older house; when to schedule; how long; how much; need to be there | USED | Merged FAQ. |
| FAQ Is a sewer scope required when buying or selling | LEFT OUT | Duplicate of the Henderson-specific question (FAQ 7 above). |
| FAQ group Records and next steps (4) | USED | Merged FAQ. |
| inclusions (shared table, 6 items) | USED | Shared `SERVICE_INCLUSIONS`. |
| relatedPageIds | ADAPTED | Camera inspection and line locating retained, others replaced by the Henderson location page. |

FAQ count on this page: 9 Henderson (10 minus 1) + 28 service (29 minus 1) = 37.
