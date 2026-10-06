# Source audit: sl-henderson-maintenance

Page: Henderson, NV + Preventative Sewer Maintenance. Files: `content/pages/sl-henderson-maintenance.tsx`, `content/pages/sl-blocks/preventative-sewer-maintenance.ts`.
Sources: `hendersonContent` (`content/pages/las-vegas-henderson.tsx`) and the `v2` block of `svc-preventative-sewer-maintenance` (`content/pages/services.tsx`).
Status key: USED = text carried verbatim (including FAQ answers re-used as published); ADAPTED = fact kept, wording rewritten for this page; LEFT OUT = not on this page, with reason.

## The four body sections and their sources

| # | h2 | Local source | Service source |
|---|----|--------------|----------------|
| 1 | The City names periodic inspection as your duty | responsibility.answer paragraph 2 (owner duty to hire a professional to periodically inspect the lateral and perform necessary maintenance or repairs); municipalProgram.doesNotCover item 4 (no City program, schedule or reporting requirement for lateral inspections) | definition ("planned inspection and cleaning"); process steps (recorded camera pass, clean when appropriate); FAQ "How often should I schedule it?" (no single interval) |
| 2 | Your side of the connection, and what a visit covers | responsibility.cards (City maintains main to the connection and cleans blockages), responsibility.answer (owner pays cleanup and repair incl. street or driveway), municipalProgram.lede (no repair/grant/reimbursement program), systemExplainer.card.closing (footage vs. the connection) | limits.callout (cleaning does not repair); ask.keep (keep video and findings); hero scope (no repair) |
| 3 | Newer homes have no default schedule either | housingAge.paragraphs (median 2001, 82.1%), housingAge.sourceNote (age does not tell condition) | definition.supporting 3 and FAQ "Do all homes need routine sewer cleaning?" (no default schedule; reasons: roots, buildup, backups); signals "Known risk factors" |
| 4 | City contacts, and what a maintenance visit is not | whoToCall.paragraphs, agency (702-267-5900, Contact Henderson), secondaryAgency (702-267-3600); municipalProgram.doesNotCover item 3 (no City statement that cleaning or a camera inspection needs a permit) | decision.note ("A visit does not always include both"); scope text ("cleaning, camera diagnostics, and line locating only") |

## Henderson location page

| Section / item | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Page-specific versions written. |
| hero.title, hero.intro | ADAPTED | Intro leads with the City's periodic-inspection duty. |
| heroForm | LEFT OUT | Location page shell; this page uses the service-location template form. |
| faqHeading, faqSchemaApproved | LEFT OUT | Template-level. |
| keyTakeaways 1 (responsibility split) | ADAPTED | Section 2. |
| keyTakeaways 2 (periodic inspection) | ADAPTED | Section 1 and problem card 4. |
| keyTakeaways 3 (no City repair program) | ADAPTED | Section 2. |
| keyTakeaways.jumpNav | LEFT OUT | Location page navigation. |
| serviceCards (nine cards, helpBar) | LEFT OUT | Not a field here; related services linked through relatedPageIds. The location page's "Preventative Sewer Maintenance" card is the link into this page. |
| responsibility.answer (2 paragraphs) | ADAPTED | Sections 1 and 2. |
| responsibility.cards (2) | ADAPTED | Section 2. |
| responsibility.table (5 rows) | LEFT OUT | Layout. Rows 1-4 are in section 2 and the FAQ; row 5 is this page. |
| responsibility.note | ADAPTED | The City page being undated is covered by the FAQ answers (USED). |
| systemExplainer paragraphs (Utility Services, City main, main blockages) | ADAPTED | Main cleaning and blockages in section 2. |
| systemExplainer septic paragraph (AB 220, 702-267-3670) | LEFT OUT | Septic connection rules are unrelated to lateral maintenance. |
| systemExplainer "combined or separate, age of mains" | LEFT OUT | Not used by the service. |
| systemExplainer "nothing tells you condition of any lateral" | ADAPTED | Section 3. |
| systemExplainer.card bullets | LEFT OUT | The service page's can/cannot lists are fuller; FAQ carries them. |
| systemExplainer.card.closing | ADAPTED | Section 2 (footage records distance, not the connection). |
| housingAge paragraph | ADAPTED | Median 2001 and 82.1% used in section 3. Decade counts, 60.2% and 3.1% left out. |
| housingAge.table | LEFT OUT | Layout. |
| housingAge.sourceNote | ADAPTED | Source named in section 3; table links stay on the location page. |
| whoToCall.paragraphs | ADAPTED | Section 4. |
| whoToCall.agency (702-267-5900) | ADAPTED | Section 4, labelled the City's; Contact Henderson portal named. |
| whoToCall.secondaryAgency (702-267-3600) | ADAPTED | Section 4, labelled the City's. |
| whoToCall.company | LEFT OUT | Company statement stays on the location page. |
| municipalProgram.lede | ADAPTED | Section 2. |
| municipalProgram.covers (5 items) | ADAPTED | Items 1-4 in sections 1 and 2, item 5 (ROW permit) in section 4. |
| municipalProgram.doesNotCover (6 items) | ADAPTED | Items 1, 3 and 4 used (program, permit for cleaning or camera, inspection schedule). Items 2, 5, 6 not maintenance-relevant. |
| municipalProgram.whoCanApply | LEFT OUT | Covered by the coverage block. |
| municipalProgram.callout | ADAPTED | Section 4 ("does not replace any City review"). |
| municipalProgram.closing | ADAPTED | Section 2 ("The Sewer Pros does not perform repairs"). |
| secondOpinion | LEFT OUT | Independent-inspection page content, not maintenance. |
| buyingGuide (lede, body, links, cta, agents) | LEFT OUT | Purchase content. A purchase is covered by the sl-henderson-prepurchase page. |
| nearbyAreas | ADAPTED | Became `coverage` (three Valley areas); "All Las Vegas service areas" left out. |
| FAQ 1 Where does my responsibility start | USED | Merged FAQ. |
| FAQ 2 Does the City pay if a blockage is in the City main | USED | Merged FAQ. |
| FAQ 3 Does the City help pay for lateral repairs | USED | Merged FAQ. |
| FAQ 4 House only twenty years old | USED | Merged FAQ. |
| FAQ 5 Who to call about a sewer emergency | USED | Merged FAQ. |
| FAQ 6 Lateral work in the right-of-way needs a permit | USED | Merged FAQ. |
| FAQ 7 Does Henderson require an inspection when a home is sold | LEFT OUT | Sale-time question, not maintenance. |
| FAQ 8 Transfer water and sewer service when buying | LEFT OUT | Purchase question, not maintenance. |
| FAQ 9 What does a sewer camera inspection show | LEFT OUT | Duplicate of the service FAQ "What does a sewer camera inspection find?". |
| FAQ 10 Do you repair or replace sewer lines | LEFT OUT | Duplicate of the service FAQ "Do you offer sewer repair or replacement?", which is fuller. |
| finalCta | LEFT OUT | Page-specific cta written; form is template-level. |
| sources | LEFT OUT | Sources are named in the body; the full list stays on the location page. |

## Preventative maintenance service page (v2)

| Section / item | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Page-specific versions written. |
| serviceDescription | ADAPTED | Same definition, set in Henderson. |
| hero.intro | ADAPTED | Definition (camera pass, cleaning when appropriate). |
| hero.scope (3 bullets) | ADAPTED | Locating-as-separate and cleaning/hydro jetting are inclusions 3 and 6; camera bullet is inclusion 5. |
| definition.answer | ADAPTED | serviceDescription and intro. |
| definition.supporting 1 (public utilities call it preventive maintenance) | LEFT OUT | Terminology note; in FAQ answer 1 (USED). |
| definition.supporting 2 (not one fixed task) | ADAPTED | Section 1 and inclusions. |
| definition.supporting 3 (no default schedule) | ADAPTED | Section 3. |
| definition.scope (cleaning, diagnostics, locating only) | ADAPTED | Section 4; FAQ "Do you offer sewer repair or replacement?" USED. |
| signals 1 Several drains slow | LEFT OUT | Only three service cards; covered by FAQ "Why are all my drains slow or gurgling?" (USED). |
| signals 2 Gurgling or recurring clogs | USED | Problem card 1. |
| signals 3 Sewage-like odor | LEFT OUT | Covered by the same FAQ. |
| signals 4 A backup that already happened | USED | Problem card 2. |
| signals 5 Wet or spongy yard patches | LEFT OUT | No description on the source, so not suited to a card. |
| signals 6 Known risk factors | USED | Problem card 3; also section 3. |
| limits.can and limits.cannot | LEFT OUT | In FAQ answers "What does a sewer camera inspection find?" and "What can a sewer camera not see?" (USED). |
| limits.callout (cleaning does not repair) | ADAPTED | Section 2. |
| process (6 steps + intro) | USED | Process block: Review the history, Access, Inspect and record, Clean when appropriate, Look again, Review the findings. |
| process.prep (4 items) | LEFT OUT | Not a page field. Open: could become a note under process. |
| decision (camera first or cleaning first; list; links) | ADAPTED | "A visit does not always include both" in section 4; rest in FAQ "Should a camera inspection come before cleaning?". |
| comparison (5 rows) | LEFT OUT | Replaced by relatedPageIds (camera inspection, sewer cleaning). Row "Records" is in inclusion 5. |
| ask.items (5) | ADAPTED | Video, findings, what was viewed in inclusion 5; cleaning and locating questions in inclusions 4 and 6. |
| ask.keep | ADAPTED | Section 2 (keep video and findings). |
| audiences (4) | LEFT OUT | Not a page field. |
| markets (3) | LEFT OUT | Replaced by `coverage`. |
| request | LEFT OUT | Template form; cta is page-specific text built from the request intro. |
| FAQ group The basics (3) | USED | Merged FAQ. |
| FAQ group What the camera shows (3) | USED | Merged FAQ. |
| FAQ group Cleaning and hydro jetting (3) | USED | Merged FAQ. |
| FAQ group Access and signs (2) | USED | Merged FAQ. |
| FAQ group Records, timing, and cost (3) | USED | Merged FAQ. |
| FAQ group Scope (2) | USED | Merged FAQ. |
| problems (3), inclusions (6), shots (4) | ADAPTED | New location-neutral block `sl-blocks/preventative-sewer-maintenance.ts`, every line from the service page. |
| relatedPageIds | ADAPTED | Camera inspection and sewer cleaning retained, plus the Henderson location page. |

FAQ count on this page: 6 Henderson (10 minus 4) + 16 service = 22.
