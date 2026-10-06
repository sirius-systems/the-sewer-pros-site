# Source report: Henderson, NV + Sewer Cleaning (`sl-henderson-cleaning`)

Sources: local = `content/pages/las-vegas-henderson.tsx` (`hendersonContent`); service = `content/pages/services.tsx`, `svc-sewer-cleaning` `v2`.
Output: `content/pages/sl-henderson-cleaning.tsx`.
Legend: USED = verbatim or near-verbatim, ADAPTED = reworded or recombined, LEFT OUT = not on this page.

## The four body sections

| Body section | Local source | Service source |
|---|---|---|
| 1. Where the City's cleaning ends in Henderson | responsibility (answer, City main card, owner card), keyTakeaways 1, systemExplainer "main blockages" | definition (scope: private-property lines, not public mains) |
| 2. What cleaning does on a Henderson lateral, and what it does not | responsibility answer (periodic inspection duty), municipalProgram (none-found lede, closing) | definition answer, decision (does not repair), limits callout |
| 3. A newer home does not settle what is in the line | housingAge (median, 82.1%, 3.1%, sourceNote closing paragraph), FAQ "twenty years old" | signals (clogs that keep coming back), decision note, FAQ "Why do my drains keep clogging" |
| 4. The City's contacts, and where cleaning fits | whoToCall (call center, Public Works), municipalProgram covers item 5 and doesNotCover item 3 | signals (water rising: "contact us to discuss"), company phone from `marketOperatingDetail` |

## Henderson location page, element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | ADAPTED | Page-specific title and meta for cleaning. |
| hero title/intro | ADAPTED | Responsibility rule restated through cleaning. |
| heroForm bullets, card, form | LEFT OUT | Page shell supplies its own request form. |
| keyTakeaways 1 (side-of-connection split, City cleans main blockages) | USED (section 1, hero) | Core local fact for cleaning. |
| keyTakeaways 2 (periodic professional inspection) | ADAPTED (section 2) | Tied to cleaning as the maintenance side. |
| keyTakeaways 3 (no City program) | USED (section 2) | Cost context for cleaning. |
| jumpNav | LEFT OUT | Location page navigation. |
| serviceCards (9) | LEFT OUT | Shared nine-card grid not part of this content shape. The cleaning card copy is the origin of the problem card wording only. |
| responsibility answer P1 | USED (section 1) | Responsibility rule. |
| responsibility answer P2 | ADAPTED (section 2) | Owner duty list. Street or driveway damage dropped, not about cleaning. |
| responsibility card: City main | USED (section 1) | City cleans its main to the connection. |
| responsibility card: lateral | USED (section 1) | Owner side. |
| responsibility table, rows 1-3 | ADAPTED (section 1, 4) | Who maintains, where it ends, who to contact. |
| responsibility table, rows 4-5 (help, where inspection helps) | ADAPTED (section 2) | None-found program; inspection row left out as camera-specific. |
| responsibility note (not legal advice, undated pages) | ADAPTED (sections 1, 2) | "Confirm with the City" and "none found" wording. |
| systemExplainer P1 (Utility Services role) | LEFT OUT | Not about cleaning. |
| systemExplainer P2, P3 (main and connection, main blockages) | ADAPTED (section 1) | City cleans main blockages. |
| systemExplainer P4 (septic, AB 220, 702-267-3670) | LEFT OUT | Septic connection rules not relevant to cleaning a connected lateral. |
| systemExplainer P5 (combined/separate unknown) | LEFT OUT | No bearing on cleaning. |
| systemExplainer P6 (nothing tells you a lateral's condition) | ADAPTED (section 3) | Year built does not tell condition. |
| systemExplainer card (camera bullets, closing) | LEFT OUT | Camera-specific. Page 3 of this family covers camera. |
| housingAge paragraph (median 2001, 41,694 and 43,390, 60.2%, 82.1%, 3.1%) | ADAPTED (section 3) | Median, 82.1%, 3.1% used. Decade counts and 60.2% left out (used on hydro page). |
| housingAge table | LEFT OUT | Table does not fit a card. Figures cited in prose. |
| housingAge sourceNote (B25034/B25035, margin of error) | ADAPTED (section 3) | Source named in prose (ACS 2020-2024 5-year, Henderson city). Margin of error left out for space. |
| housingAge closing (condition or material not known from year built) | USED (section 3) | Key tie. |
| whoToCall paragraph | ADAPTED (section 4) | Emergency, portal, permit. |
| whoToCall agency (702-267-5900) | USED (section 4, labelled the City's) | |
| whoToCall secondaryAgency (702-267-3600) | USED (section 4, labelled the City's) | |
| whoToCall company | ADAPTED (section 4) | Company phone from `marketOperatingDetail`. "Newer market" sentence left out to match the pilot. |
| municipalProgram lede | ADAPTED (section 2) | None found, not "none exists". |
| municipalProgram covers 1-4 | ADAPTED (sections 1, 2) | Responsibility and owner duties. |
| municipalProgram covers 5 (right-of-way permit) | USED (section 4) | |
| municipalProgram doesNotCover 1 (grant, reimbursement) | USED (section 2) | |
| doesNotCover 2 (damage by City work) | LEFT OUT | Not about cleaning. |
| doesNotCover 3 (permit for private work, cleaning) | USED (section 4) | Directly about cleaning. |
| doesNotCover 4 (inspection schedule) | LEFT OUT | Inspection-specific. |
| doesNotCover 5 (backup cleanup procedure) | LEFT OUT | Not on service page. |
| doesNotCover 6 (combined/separate) | LEFT OUT | No bearing. |
| municipalProgram whoCanApply, callout | ADAPTED | "Confirm with the City" in sections 1 and 4. |
| municipalProgram closing (no repairs) | USED (section 2) | |
| secondOpinion (ledes, steps, callout, CTA) | LEFT OUT | Camera and repair-recommendation material. Service page covers independence in its own band. |
| buyingGuide lede and body | LEFT OUT | Buying is not a cleaning topic. Used on the hydro page problem card. Service page's "Buying or selling" situation sends buyers to pre-purchase inspection. |
| buyingGuide agents | LEFT OUT | Not about cleaning. |
| nearbyAreas | ADAPTED | Coverage block (same three pages as the pilot). |
| FAQ: Where does my responsibility start | USED | |
| FAQ: Does the City pay for a main blockage | USED | |
| FAQ: Does the City help pay for lateral repairs | USED | |
| FAQ: house only twenty years old | USED | |
| FAQ: Who do I call about a sewer emergency | USED | |
| FAQ: right-of-way permit | USED | |
| FAQ: inspection when home is sold | USED | |
| FAQ: transfer water and sewer service | LEFT OUT | Utility accounts, not cleaning. |
| FAQ: What does a camera inspection show | USED | Camera is part of cleaning visits. |
| FAQ: Do you repair or replace | USED | |
| finalCta | ADAPTED | New CTA text for cleaning. |
| sources | LEFT OUT | Page shell is the pilot's shape; sources are cited in text. |
| Image slots | ADAPTED | New per-page slots via `pageImageSlots`. |

## Sewer cleaning service page (v2), element by element

| Element | Status | Reason |
|---|---|---|
| seoTitle, metaDescription | LEFT OUT | Market-neutral. New local meta written. |
| serviceDescription | ADAPTED | Henderson and "private" added. |
| hero intro | ADAPTED | Cleaning definition plus local rule. |
| scope bullets, cardTitle/Intro | LEFT OUT | Hero card of the service template. |
| definition answer | ADAPTED (sections 1, 2) | |
| definition supporting (camera before/after) | USED (inclusions, process) | |
| definition scope (private-property lines, no repair) | ADAPTED (section 1, 2) | |
| signals items 1, 2, 3 (two used, three used) | USED (problems) | Shared `SERVICE_PROBLEMS`: slow fixtures, clogs return, water rising. |
| signals items: gurgling, odors, wet yard patches | LEFT OUT | Not in the four-card limit; no local tie. |
| signals note (drain cleaning, camera links) | LEFT OUT | Links live in related pages. |
| process steps (5) | USED | Same steps; equipment mention (SeeSnake) is the confirmed list. |
| process prep list | LEFT OUT | Prep does not fit the process shape. |
| methods table (hydro vs cable) | LEFT OUT | Covered on the hydro page; no local tie. |
| limits (camera can/cannot, callout) | ADAPTED (section 2) | Callout "line that flows is not proof" used. |
| decision (does not repair, may return) | USED (sections 2, 3) | |
| decision list (when enough, look further) | ADAPTED (section 3) | Clog-returns point. |
| independent band | ADAPTED (section 2) | "Does not perform repairs". |
| comparison table | LEFT OUT | Related pages cover neighbours. |
| ask (video, findings, access, record, coding) | ADAPTED (inclusions, CTA body) | "Ask whether a camera look is included." |
| factors | LEFT OUT | Time and price factors; no claim wanted here. |
| myths (4) | LEFT OUT | Generic, no Henderson tie. |
| situations (3) | ADAPTED | Drain keeps clogging used in section 3. |
| markets | LEFT OUT | Page is a location page. |
| FAQ (14 questions) | USED | All 14 included. |
| request/scopeNote | LEFT OUT | Shell supplies request block. |
| relatedPageIds | ADAPTED | Henderson page, service, hydro, cleaning with camera. |
| cta | ADAPTED | New text. |
