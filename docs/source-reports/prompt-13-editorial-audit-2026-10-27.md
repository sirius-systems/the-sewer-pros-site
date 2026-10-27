# Prompt 13 Editorial Audit - The Sewer Pros - 2026-10-27

**Prompt:** Site OS Master `prompts/13-content-quality-editor-prompt.md` v1.1 (read in full before starting).
**Scope:** all 197 indexable pages in the static export (`out/`), rebuilt before each run. The thank-you page is noindex and not audited.
**Result:** high-severity pages 22 to 0, medium 22 to 0, low 61 to 88 (the 85 title-length notes dominate; see section 8), clean 92 to 109. Gate added: `scripts/verify-editorial-keywords.mjs`, run with the other verify scripts.

Raw data: `prompt-13-editorial-audit-2026-10-27-before.json` and `-after.json` (every page, every issue). Engine: `scripts/lib/editorial-audit.mjs` and `scripts/lib/editorial-keywords.mjs`; report script `scripts/audit-editorial-keywords.mjs`.

## 1. What was run, and where this deviates from the Prompt 13 file

**Prompt 13 is a one-page template.** It takes `[PAGE NAME]` and `[PASTE CONTENT]` and returns a nine-part review for that page. Running it verbatim by hand for 197 pages is not practicable in one pass. I ran it this way instead, and the owner should know this is a deviation:

| Prompt 13 element | How it was executed |
| ----------------- | ------------------- |
| Page Details, Execution Depth | Depth **Standard** for every page family, **Deep** treatment for the money pages (core services, location hubs, service + location) through the per-page checks below. |
| Part 1 Content Quality Diagnosis | Measured for **every page** by the engine (keyword placement, uniqueness, length, stuffing, naming, repair and commercial wording, answer-first, token swap), then reviewed by hand per family (section 4). |
| Part 2 Search Intent Alignment | By page family (section 4), because intent is set by the page type and the registry. |
| Part 3 AEO and LLM | Per page: researched question phrases in H2, H3 and FAQ questions; answer-first test on every question heading. By family: section 4. |
| Part 4 Local Relevance | Per page for service + location, location and market pages: place named in title, H1, meta, opening, FAQ; token-swap similarity against siblings. |
| Part 5 Competitive Outperformance | General editorial comparison only. No SERP or competitor data is in the repo beyond `docs/13-competitor-analysis.md`; none was invented. |
| Part 6 Conversion | By family (section 4); CTA and form structure were not changed. |
| Part 7 Rewrite Recommendations | Applied only for high and medium findings (section 6); low findings are listed, not changed. |
| Part 8 Scorecard | **By family**, not per page (section 5). The per-page table in section 7 is the per-page measurement. |
| Part 9 Final Editorial Plan | Section 9. |
| Carry-Forward Items | Section 10. |

**Conflicts between the Prompt 13 file and the repo's own decisions (the decision wins):**

1. Prompt 13 asks for the primary keyword in the H1 of every page. Two groups keep non-keyword H1s: the **Sewer Cleaning & Camera Inspection** service page (H1 "Sewer Camera Inspection and Cleaning for Recurring Drainage Problems", restored by owner direction, DEC-126) and the **six audience pages** (owner-written messaging headlines in `content/pages/audiences.tsx`). Their keyword is carried by the title tag, meta description, opening and (for the combined service) the registered name in the title and breadcrumb. The gate exempts exactly these, with the reason recorded in `scripts/lib/editorial-keywords.mjs`.
2. Prompt 13 rule 6 and CLAUDE.md both forbid inventing local claims: no local copy was added, and where a gap needed a local fact it is listed in section 10 rather than filled.
3. The brief asked for keyword research files (`opportunities.json`, `keyword-clusters.json`, page briefs, Prompt 01 and 09 outputs). **None exists in this repository** (searched the repo and the sibling folders on 2026-10-27; those files exist only for other Site OS clients). See section 2.

## 2. Keyword source of truth

Because the research exports are absent, the page keyword model is built from the researched material that is recorded in the repo, each phrase carrying its source:

* **Primary keyword per page:** the registered service name (`data/services/master-service-registry.json`); `{service} in {place}` for service + location pages (docs/10 section 11 local keywords, section 65 and 66 title and H1 patterns); the audience terms and real estate keywords of docs/10 section 11; the decision keywords of docs/10 section 11 for the comparison pages; the guide titles for resources.
* **Secondary keywords:** the registry aliases of each service (for example "sewer scope", "video sewer inspection").
* **Researched questions (26):** the question lists in docs/10 (sections for AEO and FAQ opportunities), docs/12, docs/14 and docs/09, each recorded with its section in `QUESTIONS` in `scripts/lib/editorial-keywords.mjs`. "Required" means the page's own central question; "expected" means related questions that would strengthen the page.

This is a documented stand-in, not search-volume research. When the real exports are supplied, replace the tables in `scripts/lib/editorial-keywords.mjs`; the audit and the gate read only that file.

## 3. Coverage metrics, before and after

| Metric (197 pages) | Before | After |
| ------------------ | -----: | ----: |
| Primary keyword in title | 97.5% | 100% |
| Primary keyword in meta description | 97.5% | 99.5% (`/for/`, the hub page, is a label) |
| Primary keyword in H1 | 99.5% | 100% (counting the two documented exemptions) |
| Primary keyword in at least one H2 or H3 | 93.4% | 93.4% (the 13 gaps are hub, utility and guide pages whose H2s are topical) |
| Primary keyword (or its natural short form) in the opening | 90.4% | 95.4% |
| Primary keyword (or place) in at least one FAQ question | 88.8% | 88.8% |
| Duplicate titles / duplicate meta descriptions / duplicate H1s | 0 / 0 / 0 | 0 / 0 / 0 |
| Titles over 70 characters / over 60 characters | 13 / 94 | 0 / 85 |
| Meta descriptions over 160 characters | 13 | 0 |
| Service and service + location pages not using the exact registered name in title or H1 | 16 | 0 |
| Commercial wording in title, meta, H1, headings or FAQ questions | 1 | 0 |
| Required researched question phrases missing | 3 | 0 |
| Expected researched question phrases missing | 16 | 17 |
| Keyword stuffing flags (primary above 4% of words) | 0 | 0 |
| Repair or replacement wording read as an offer in title, meta or H1 | 0 | 0 |
| Service + location pairs 35% or more the same copy | 2 | 2 (36%, both low) |
| Pages by severity (high / medium / low / clean) | 22 / 22 / 61 / 92 | 0 / 0 / 88 / 109 |

The expected-phrase count rose by one because the home sellers audience title now names the page's subject ("Sewer Inspection Before Selling a House") instead of carrying the phrase "before you buy"; the phrase is a low, expected one for that page.

## 4. Findings by page family (Prompt 13 parts 1 to 6)

**Core service pages (9).** Title, meta, H1, H2 and opening all carry the registered name; the 14 to 37 question FAQs cover the researched questions; no stuffing (primary at 0.4% to 1.3% of words). Gaps found: the hydro jetting page had no heading for "When is hydro jetting appropriate?" (docs/10 s.1154, docs/14 s.684); the combined service's opening never named the combined service. Intent is commercial and informational mixed, matched to the page type; every page points to the request form and keeps the independent-inspection position. Answer-first: question headings are followed by a direct answer or a structured list; none was flagged.

**Service + location pages (144).** The strongest family. Title and H1 carry the full "{registered name} in {place}" pattern on every page; each opens with the local fact that distinguishes the place (agency, program, housing age), each has 20 to 44 FAQ questions, and token-swap similarity between siblings averages 13% to 19% by service (maximum 36%, hydro jetting Henderson vs Las Vegas). Local relevance is genuine, not city-name swapping. Findings fixed: 16 H1s spelled the combined service with "and" instead of "&"; 9 titles and 5 metas ran past limits; Mission Valley pages used a longer place string than the rest. Remaining low items: 14 pre-purchase metas lead with "Buying in {place}?" and name the service by its short form ("scope", "buying") instead of the registered name.

**Location hubs (16).** Title and H1 follow "Sewer Inspection and Cleaning in {place}", with one exception fixed (Mission Valley: "Sewer and Drain Service in ..."). Local pain points, responsibility boundary and municipal program sections are specific. Seven question headings answer in a long first sentence (low): "Who is responsible for the sewer line at a {place} property?" style answers open with two agencies in one sentence.

**Market hubs (3) and market contact pages (3).** Metas for Las Vegas and San Diego ran past 160 characters; contact titles and metas were 74 and 184 to 190 characters. Fixed. The market hubs repeat the "Independent sewer camera inspection, diagnostics and cleaning" formula; it is accurate and unique by place.

**Audience pages (6) and hub.** The titles were the messaging headlines ("A sewer inspection that does not become a sales process"), which carry no audience keyword (high). Fixed in the title tag, meta description (agents, inspectors) and opening sentence (all six); the H1 headlines are kept. Two researched questions were absent (agents: "what does a real estate agent need from a sewer inspection", property managers: scheduling), now H2s over existing sections.

**Resources (5 guides and hub) and comparison pages (2).** Titles and H1s match the researched phrases. Openings did not name the compared subjects on the two comparison pages; fixed. The video guide's opening now names the video. The St. Louis guides use "St. Louis" and "sewer lateral" in natural order rather than the exact phrase in the opening; accepted as a natural form. Expected questions such as "what does a sewer camera inspection show" are absent from the video guide (its H2s are about reading footage).

**Homepage, About, FAQ, Contact, services hub.** Primary labels carried in title and H1. Services hub meta did not name "sewer and drain services": fixed. About meta was 208 characters: fixed.

**Cannibalization.** Three shared-term pairs, none a true conflict: homepage and Sewer Camera Inspection both carry "sewer camera inspection" in the title (the service page should own it; the homepage should own the brand and the multi-service promise; left as is, decision in section 10); Sewer Cleaning vs Sewer Cleaning & Camera Inspection (the second contains the first by name only); Services hub vs Drain Cleaning ("drain cleaning" in the hub title as a category). No two pages target the same primary keyword.

**Answer-first (Part 3).** 771 question headings checked. 6 pages have 8 headings whose answer opens with a first sentence of more than 45 words (all low; jurisdiction answers). A heading followed by a list, table or cards is structured content and was not counted.

## 5. Scorecard by page family (Part 8, editorial judgment from the measurements above)

Scores 1 to 10; "-" = not applicable. Order: Clarity, Specificity, Intent, SEO, AEO, LLM readiness, Local, Trust, Engagement, Conversion, Competitive, Readability. Scores are after the fixes.

| Family | Cl | Sp | In | SEO | AEO | LLM | Loc | Tr | En | Cv | Co | Rd | Avg |
| ------ | -: | -: | -: | --: | --: | --: | --: | -: | -: | -: | -: | -: | --: |
| Core service (9) | 9 | 9 | 9 | 9 | 9 | 9 | - | 8 | 8 | 8 | 9 | 8 | 8.6 |
| Service + location (144) | 8 | 10 | 9 | 8 | 8 | 8 | 9 | 8 | 7 | 8 | 9 | 8 | 8.3 |
| Location hub (16) | 8 | 9 | 8 | 8 | 8 | 8 | 9 | 8 | 7 | 8 | 8 | 7 | 8.0 |
| Market hub + market contact (6) | 8 | 8 | 8 | 8 | 8 | 8 | 8 | 8 | 7 | 8 | 7 | 7 | 7.8 |
| Audience hub + audiences (7) | 8 | 8 | 8 | 8 | 8 | 7 | - | 8 | 8 | 8 | 7 | 8 | 8.0 |
| Resources hub + guides (6) | 8 | 8 | 8 | 7 | 8 | 8 | 7 | 8 | 6 | 7 | 8 | 8 | 7.6 |
| Comparison (2) | 8 | 8 | 8 | 8 | 8 | 8 | - | 8 | 7 | 7 | 8 | 8 | 7.8 |
| Homepage | 8 | 7 | 8 | 8 | 7 | 7 | - | 8 | 8 | 8 | 7 | 8 | 7.6 |
| About, FAQ, Contact, services hub (4) | 8 | 7 | 8 | 8 | 8 | 7 | 7 | 8 | 7 | 8 | 6 | 8 | 7.5 |

Reasons in one line each: core services lose points only for Engagement and Readability (long pages, many sections); service + location scores 10 on Specificity because every page carries a sourced local fact; resources score lowest on Engagement because the guides have no interactive element and few internal next steps beyond related links; the homepage and utility pages score lower on Competitive because they lead with the brand line rather than a researched question.

## 6. Changes made (Phase 2)

Edits were made in the central content files only; FAQPage JSON-LD follows the same sources and was not touched. Hyphens only; no business fact, price, equipment or availability claim was added.

1. **Registered name (16 pages + 1 label).** Service + location H1s for Sewer Cleaning & Camera Inspection said "and"; now "&". The services hub link label too.
2. **Audience titles (6).** New title tags: "Sewer Inspection for Home Buyers / Real Estate Agents / Home Inspectors / Property Managers / HOA Communities", "Sewer Inspection Before Selling a House". H1 headlines kept.
3. **Audience metas (2) and openings (6).** Real estate agents and home inspectors metas now name the audience and the confirmed deliverables (video and written findings); each intro gained the audience term in its first sentence.
4. **Mission Valley hub.** H1 now "Sewer Inspection and Cleaning in Mission Valley, San Diego" (matches the other 15 hubs); the meta and intro no longer offer service to "mixed-use properties" or "mixed-use buildings" (residential only, DEC-142). The City's description of the district as mixed-use remains where it is quoted as the City's words.
5. **Title length (13).** Titles over 70 characters shortened by dropping the state abbreviation or trimming the suffix: 9 service + location pages, 3 market contact pages (the audience title for agents was replaced in item 2). Place is still named.
6. **Meta length (13).** Shortened without dropping the local fact: 3 market contact, 5 service + location, 2 market hubs, 1 St. Louis City hub, About, the audience hub.
7. **Researched questions.** Hydro jetting H2 now "When might hydro jetting be appropriate?"; agents H2 "What a real estate agent needs from a sewer inspection"; property managers H2 "When to schedule sewer cleaning around occupancy".
8. **Opening that names the page.** Sewer Cleaning & Camera Inspection hero names "a sewer cleaning and camera inspection visit"; the two comparison pages name the compared subjects; the video guide names the video.
9. **Services hub meta** names "sewer and drain services".
10. **Gate.** `scripts/verify-editorial-keywords.mjs` (title, meta and H1 keyword, duplicates, length limits, registered names with the ampersand, required questions, commercial and repair wording, token swap at 50%). Two page scripts updated for the renamed hydro jetting section and the Mission Valley H1 and meta.

## 7. Per-page results (after the fixes)

Y = present in full, ~ = natural short form or parts (service name and place), - = absent, n/a = no FAQ. Y* = H1 exempt by recorded decision. Title, meta, H1, H2, Opening and FAQ columns refer to the primary keyword; "FAQ" checks the FAQ questions.

| Page | Primary keyword | Title | Meta | H1 | H2 | Opening | FAQ | Missing researched phrases (after) | Severity before to after |
| --- | --- | :-: | :-: | :-: | :-: | :-: | :-: | --- | --- |
| / | sewer camera inspection | Y | Y | Y | Y | Y | Y | none | low to low |
| /services/ | sewer and drain services | Y | Y | Y | Y | Y | - | none | medium to ok |
| /services/drain-cleaning/ | drain cleaning | Y | Y | Y | Y | Y | Y | Hydro jetting vs snaking | ok to ok |
| /services/hydro-jetting/ | hydro jetting | Y | Y | Y | Y | Y | Y | Can hydro jetting damage a sewer line?; Can hydro jetting help recurring backups? | medium to ok |
| /services/pre-purchase-sewer-inspection/ | pre-purchase sewer inspection | Y | Y | Y | Y | Y | Y | What happens if a sewer problem is found before closing? | ok to ok |
| /services/preventative-sewer-maintenance/ | preventative sewer maintenance | Y | Y | Y | Y | Y | Y | When should a sewer be inspected? | ok to ok |
| /services/recurring-sewer-backup-diagnosis/ | recurring sewer backup diagnosis | Y | Y | Y | Y | Y | Y | none | ok to ok |
| /services/sewer-camera-inspection/ | sewer camera inspection | Y | Y | Y | Y | Y | Y | none | ok to ok |
| /services/sewer-cleaning-camera-inspection/ | sewer cleaning & camera inspection | Y | Y | Y* | Y | Y | Y | How does a sewer camera inspection work? | medium to ok |
| /services/sewer-cleaning/ | sewer cleaning | Y | Y | Y | Y | Y | Y | Can a sewer line be cleaned instead of replaced?; Hydro jetting vs snaking | ok to ok |
| /services/sewer-line-locating/ | sewer line locating | Y | Y | Y | Y | Y | Y | none | ok to ok |
| /las-vegas-nv/ | sewer camera inspection las vegas | ~ | ~ | ~ | ~ | ~ | ~ | none | medium to ok |
| /san-diego-ca/ | sewer camera inspection san diego | ~ | ~ | ~ | ~ | ~ | ~ | none | medium to low |
| /st-louis-mo/ | sewer camera inspection st. louis | Y | ~ | Y | Y | ~ | ~ | none | low to low |
| /locations/las-vegas-nv/henderson/ | sewer inspection henderson | Y | Y | Y | ~ | ~ | ~ | none | low to low |
| /locations/las-vegas-nv/las-vegas/ | sewer inspection las vegas | Y | Y | Y | ~ | ~ | ~ | none | low to low |
| /locations/las-vegas-nv/north-las-vegas/ | sewer inspection north las vegas | Y | Y | Y | ~ | ~ | ~ | none | low to low |
| /locations/las-vegas-nv/summerlin/ | sewer inspection summerlin | Y | Y | Y | ~ | ~ | ~ | none | low to low |
| /locations/san-diego-ca/carlsbad/ | sewer inspection carlsbad | Y | ~ | Y | ~ | ~ | ~ | none | low to low |
| /locations/san-diego-ca/chula-vista/ | sewer inspection chula vista | Y | ~ | Y | ~ | ~ | ~ | none | low to low |
| /locations/san-diego-ca/escondido/ | sewer inspection escondido | Y | ~ | Y | ~ | ~ | ~ | none | low to low |
| /locations/san-diego-ca/mission-valley/ | sewer inspection mission valley | Y | ~ | Y | Y | ~ | ~ | none | high to ok |
| /locations/san-diego-ca/oceanside/ | sewer inspection oceanside | Y | Y | Y | ~ | ~ | ~ | none | low to low |
| /locations/san-diego-ca/san-diego/ | sewer inspection san diego | Y | ~ | Y | ~ | ~ | ~ | none | low to low |
| /locations/san-diego-ca/san-marcos/ | sewer inspection san marcos | Y | ~ | Y | ~ | ~ | ~ | none | low to low |
| /locations/st-louis-mo/ballwin/ | sewer inspection ballwin | ~ | Y | Y | ~ | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/chesterfield/ | sewer inspection chesterfield | ~ | ~ | Y | ~ | ~ | ~ | none | low to low |
| /locations/st-louis-mo/florissant/ | sewer inspection florissant | ~ | Y | Y | ~ | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/st-charles/ | sewer inspection st. charles | ~ | Y | Y | ~ | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/st-louis-city/ | sewer inspection st. louis city | Y | ~ | Y | ~ | ~ | ~ | none | medium to low |
| /locations/las-vegas-nv/henderson/drain-cleaning/ | drain cleaning in henderson | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/las-vegas-nv/henderson/hydro-jetting/ | hydro jetting in henderson | Y | ~ | Y | Y | ~ | ~ | none | low to low |
| /locations/las-vegas-nv/henderson/pre-purchase-sewer-inspection/ | pre-purchase sewer inspection in henderson | Y | ~ | Y | Y | ~ | ~ | none | low to low |
| /locations/las-vegas-nv/henderson/preventative-sewer-maintenance/ | preventative sewer maintenance in henderson | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/las-vegas-nv/henderson/recurring-sewer-backup-diagnosis/ | recurring sewer backup diagnosis in henderson | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/las-vegas-nv/henderson/sewer-camera-inspection/ | sewer camera inspection in henderson | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/las-vegas-nv/henderson/sewer-cleaning-camera-inspection/ | sewer cleaning & camera inspection in henderson | Y | Y | Y | Y | ~ | ~ | none | high to low |
| /locations/las-vegas-nv/henderson/sewer-cleaning/ | sewer cleaning in henderson | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/las-vegas-nv/henderson/sewer-line-locating/ | sewer line locating in henderson | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/las-vegas-nv/las-vegas/drain-cleaning/ | drain cleaning in las vegas | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/las-vegas-nv/las-vegas/hydro-jetting/ | hydro jetting in las vegas | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/las-vegas-nv/las-vegas/pre-purchase-sewer-inspection/ | pre-purchase sewer inspection in las vegas | Y | ~ | Y | Y | ~ | ~ | none | low to low |
| /locations/las-vegas-nv/las-vegas/preventative-sewer-maintenance/ | preventative sewer maintenance in las vegas | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/las-vegas-nv/las-vegas/recurring-sewer-backup-diagnosis/ | recurring sewer backup diagnosis in las vegas | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/las-vegas-nv/las-vegas/sewer-camera-inspection/ | sewer camera inspection in las vegas | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/las-vegas-nv/las-vegas/sewer-cleaning-camera-inspection/ | sewer cleaning & camera inspection in las vegas | Y | Y | Y | Y | ~ | ~ | none | high to low |
| /locations/las-vegas-nv/las-vegas/sewer-cleaning/ | sewer cleaning in las vegas | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/las-vegas-nv/las-vegas/sewer-line-locating/ | sewer line locating in las vegas | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/las-vegas-nv/north-las-vegas/drain-cleaning/ | drain cleaning in north las vegas | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/las-vegas-nv/north-las-vegas/hydro-jetting/ | hydro jetting in north las vegas | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/las-vegas-nv/north-las-vegas/pre-purchase-sewer-inspection/ | pre-purchase sewer inspection in north las vegas | Y | ~ | Y | Y | ~ | ~ | none | low to low |
| /locations/las-vegas-nv/north-las-vegas/preventative-sewer-maintenance/ | preventative sewer maintenance in north las vegas | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/las-vegas-nv/north-las-vegas/recurring-sewer-backup-diagnosis/ | recurring sewer backup diagnosis in north las vegas | Y | Y | Y | Y | ~ | ~ | none | medium to low |
| /locations/las-vegas-nv/north-las-vegas/sewer-camera-inspection/ | sewer camera inspection in north las vegas | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/las-vegas-nv/north-las-vegas/sewer-cleaning-camera-inspection/ | sewer cleaning & camera inspection in north las vegas | Y | Y | Y | Y | ~ | ~ | none | high to low |
| /locations/las-vegas-nv/north-las-vegas/sewer-cleaning/ | sewer cleaning in north las vegas | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/las-vegas-nv/north-las-vegas/sewer-line-locating/ | sewer line locating in north las vegas | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/las-vegas-nv/summerlin/drain-cleaning/ | drain cleaning in summerlin | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/las-vegas-nv/summerlin/hydro-jetting/ | hydro jetting in summerlin | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/las-vegas-nv/summerlin/pre-purchase-sewer-inspection/ | pre-purchase sewer inspection in summerlin | Y | ~ | Y | Y | ~ | ~ | none | low to low |
| /locations/las-vegas-nv/summerlin/preventative-sewer-maintenance/ | preventative sewer maintenance in summerlin | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/las-vegas-nv/summerlin/recurring-sewer-backup-diagnosis/ | recurring sewer backup diagnosis in summerlin | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/las-vegas-nv/summerlin/sewer-camera-inspection/ | sewer camera inspection in summerlin | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/las-vegas-nv/summerlin/sewer-cleaning-camera-inspection/ | sewer cleaning & camera inspection in summerlin | Y | Y | Y | Y | ~ | ~ | none | high to low |
| /locations/las-vegas-nv/summerlin/sewer-cleaning/ | sewer cleaning in summerlin | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/las-vegas-nv/summerlin/sewer-line-locating/ | sewer line locating in summerlin | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/carlsbad/drain-cleaning/ | drain cleaning in carlsbad | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/carlsbad/hydro-jetting/ | hydro jetting in carlsbad | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/carlsbad/pre-purchase-sewer-inspection/ | pre-purchase sewer inspection in carlsbad | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/carlsbad/preventative-sewer-maintenance/ | preventative sewer maintenance in carlsbad | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/carlsbad/recurring-sewer-backup-diagnosis/ | recurring sewer backup diagnosis in carlsbad | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/carlsbad/sewer-camera-inspection/ | sewer camera inspection in carlsbad | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/carlsbad/sewer-cleaning-camera-inspection/ | sewer cleaning & camera inspection in carlsbad | Y | Y | Y | Y | ~ | ~ | none | high to low |
| /locations/san-diego-ca/carlsbad/sewer-cleaning/ | sewer cleaning in carlsbad | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/carlsbad/sewer-line-locating/ | sewer line locating in carlsbad | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/chula-vista/drain-cleaning/ | drain cleaning in chula vista | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/chula-vista/hydro-jetting/ | hydro jetting in chula vista | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/chula-vista/pre-purchase-sewer-inspection/ | pre-purchase sewer inspection in chula vista | Y | ~ | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/chula-vista/preventative-sewer-maintenance/ | preventative sewer maintenance in chula vista | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/chula-vista/recurring-sewer-backup-diagnosis/ | recurring sewer backup diagnosis in chula vista | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/chula-vista/sewer-camera-inspection/ | sewer camera inspection in chula vista | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/chula-vista/sewer-cleaning-camera-inspection/ | sewer cleaning & camera inspection in chula vista | Y | Y | Y | Y | ~ | ~ | none | high to low |
| /locations/san-diego-ca/chula-vista/sewer-cleaning/ | sewer cleaning in chula vista | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/chula-vista/sewer-line-locating/ | sewer line locating in chula vista | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/escondido/drain-cleaning/ | drain cleaning in escondido | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/escondido/hydro-jetting/ | hydro jetting in escondido | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/escondido/pre-purchase-sewer-inspection/ | pre-purchase sewer inspection in escondido | Y | ~ | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/escondido/preventative-sewer-maintenance/ | preventative sewer maintenance in escondido | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/escondido/recurring-sewer-backup-diagnosis/ | recurring sewer backup diagnosis in escondido | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/escondido/sewer-camera-inspection/ | sewer camera inspection in escondido | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/escondido/sewer-cleaning-camera-inspection/ | sewer cleaning & camera inspection in escondido | Y | Y | Y | Y | ~ | ~ | none | high to low |
| /locations/san-diego-ca/escondido/sewer-cleaning/ | sewer cleaning in escondido | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/escondido/sewer-line-locating/ | sewer line locating in escondido | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/mission-valley/drain-cleaning/ | drain cleaning in mission valley | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/mission-valley/hydro-jetting/ | hydro jetting in mission valley | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/mission-valley/pre-purchase-sewer-inspection/ | pre-purchase sewer inspection in mission valley | Y | Y | Y | Y | ~ | ~ | none | medium to low |
| /locations/san-diego-ca/mission-valley/preventative-sewer-maintenance/ | preventative sewer maintenance in mission valley | Y | Y | Y | Y | ~ | ~ | none | medium to low |
| /locations/san-diego-ca/mission-valley/recurring-sewer-backup-diagnosis/ | recurring sewer backup diagnosis in mission valley | Y | Y | Y | Y | ~ | ~ | none | medium to low |
| /locations/san-diego-ca/mission-valley/sewer-camera-inspection/ | sewer camera inspection in mission valley | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/mission-valley/sewer-cleaning-camera-inspection/ | sewer cleaning & camera inspection in mission valley | Y | Y | Y | Y | ~ | ~ | none | high to low |
| /locations/san-diego-ca/mission-valley/sewer-cleaning/ | sewer cleaning in mission valley | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/mission-valley/sewer-line-locating/ | sewer line locating in mission valley | Y | ~ | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/oceanside/drain-cleaning/ | drain cleaning in oceanside | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/oceanside/hydro-jetting/ | hydro jetting in oceanside | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/oceanside/pre-purchase-sewer-inspection/ | pre-purchase sewer inspection in oceanside | Y | ~ | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/oceanside/preventative-sewer-maintenance/ | preventative sewer maintenance in oceanside | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/oceanside/recurring-sewer-backup-diagnosis/ | recurring sewer backup diagnosis in oceanside | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/oceanside/sewer-camera-inspection/ | sewer camera inspection in oceanside | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/oceanside/sewer-cleaning-camera-inspection/ | sewer cleaning & camera inspection in oceanside | Y | Y | Y | Y | ~ | ~ | none | high to low |
| /locations/san-diego-ca/oceanside/sewer-cleaning/ | sewer cleaning in oceanside | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/oceanside/sewer-line-locating/ | sewer line locating in oceanside | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/san-diego/drain-cleaning/ | drain cleaning in san diego | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/san-diego/hydro-jetting/ | hydro jetting in san diego | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/san-diego/pre-purchase-sewer-inspection/ | pre-purchase sewer inspection in san diego | Y | ~ | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/san-diego/preventative-sewer-maintenance/ | preventative sewer maintenance in san diego | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/san-diego/recurring-sewer-backup-diagnosis/ | recurring sewer backup diagnosis in san diego | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/san-diego/sewer-camera-inspection/ | sewer camera inspection in san diego | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/san-diego/sewer-cleaning-camera-inspection/ | sewer cleaning & camera inspection in san diego | Y | Y | Y | Y | ~ | ~ | none | high to low |
| /locations/san-diego-ca/san-diego/sewer-cleaning/ | sewer cleaning in san diego | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/san-diego/sewer-line-locating/ | sewer line locating in san diego | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/san-marcos/drain-cleaning/ | drain cleaning in san marcos | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/san-marcos/hydro-jetting/ | hydro jetting in san marcos | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/san-marcos/pre-purchase-sewer-inspection/ | pre-purchase sewer inspection in san marcos | Y | ~ | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/san-marcos/preventative-sewer-maintenance/ | preventative sewer maintenance in san marcos | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/san-marcos/recurring-sewer-backup-diagnosis/ | recurring sewer backup diagnosis in san marcos | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/san-diego-ca/san-marcos/sewer-camera-inspection/ | sewer camera inspection in san marcos | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/san-marcos/sewer-cleaning-camera-inspection/ | sewer cleaning & camera inspection in san marcos | Y | Y | Y | Y | ~ | ~ | none | high to low |
| /locations/san-diego-ca/san-marcos/sewer-cleaning/ | sewer cleaning in san marcos | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/san-diego-ca/san-marcos/sewer-line-locating/ | sewer line locating in san marcos | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/ballwin/drain-cleaning/ | drain cleaning in ballwin | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/ballwin/hydro-jetting/ | hydro jetting in ballwin | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/ballwin/pre-purchase-sewer-inspection/ | pre-purchase sewer inspection in ballwin | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/ballwin/preventative-sewer-maintenance/ | preventative sewer maintenance in ballwin | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/st-louis-mo/ballwin/recurring-sewer-backup-diagnosis/ | recurring sewer backup diagnosis in ballwin | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/st-louis-mo/ballwin/sewer-camera-inspection/ | sewer camera inspection in ballwin | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/ballwin/sewer-cleaning-camera-inspection/ | sewer cleaning & camera inspection in ballwin | Y | Y | Y | Y | ~ | ~ | none | high to low |
| /locations/st-louis-mo/ballwin/sewer-cleaning/ | sewer cleaning in ballwin | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/ballwin/sewer-line-locating/ | sewer line locating in ballwin | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/chesterfield/drain-cleaning/ | drain cleaning in chesterfield | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/chesterfield/hydro-jetting/ | hydro jetting in chesterfield | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/chesterfield/pre-purchase-sewer-inspection/ | pre-purchase sewer inspection in chesterfield | Y | Y | Y | Y | ~ | ~ | none | medium to low |
| /locations/st-louis-mo/chesterfield/preventative-sewer-maintenance/ | preventative sewer maintenance in chesterfield | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/st-louis-mo/chesterfield/recurring-sewer-backup-diagnosis/ | recurring sewer backup diagnosis in chesterfield | Y | Y | Y | Y | ~ | ~ | none | medium to low |
| /locations/st-louis-mo/chesterfield/sewer-camera-inspection/ | sewer camera inspection in chesterfield | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/chesterfield/sewer-cleaning-camera-inspection/ | sewer cleaning & camera inspection in chesterfield | Y | Y | Y | Y | ~ | ~ | none | high to low |
| /locations/st-louis-mo/chesterfield/sewer-cleaning/ | sewer cleaning in chesterfield | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/chesterfield/sewer-line-locating/ | sewer line locating in chesterfield | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/florissant/drain-cleaning/ | drain cleaning in florissant | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/florissant/hydro-jetting/ | hydro jetting in florissant | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/florissant/pre-purchase-sewer-inspection/ | pre-purchase sewer inspection in florissant | Y | ~ | Y | Y | ~ | ~ | none | low to low |
| /locations/st-louis-mo/florissant/preventative-sewer-maintenance/ | preventative sewer maintenance in florissant | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/st-louis-mo/florissant/recurring-sewer-backup-diagnosis/ | recurring sewer backup diagnosis in florissant | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/st-louis-mo/florissant/sewer-camera-inspection/ | sewer camera inspection in florissant | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/florissant/sewer-cleaning-camera-inspection/ | sewer cleaning & camera inspection in florissant | Y | Y | Y | Y | ~ | ~ | none | high to low |
| /locations/st-louis-mo/florissant/sewer-cleaning/ | sewer cleaning in florissant | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/florissant/sewer-line-locating/ | sewer line locating in florissant | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/st-charles/drain-cleaning/ | drain cleaning in st. charles | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/st-charles/hydro-jetting/ | hydro jetting in st. charles | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/st-charles/pre-purchase-sewer-inspection/ | pre-purchase sewer inspection in st. charles | Y | ~ | Y | Y | ~ | ~ | none | low to low |
| /locations/st-louis-mo/st-charles/preventative-sewer-maintenance/ | preventative sewer maintenance in st. charles | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/st-louis-mo/st-charles/recurring-sewer-backup-diagnosis/ | recurring sewer backup diagnosis in st. charles | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/st-louis-mo/st-charles/sewer-camera-inspection/ | sewer camera inspection in st. charles | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/st-charles/sewer-cleaning-camera-inspection/ | sewer cleaning & camera inspection in st. charles | Y | Y | Y | Y | ~ | ~ | none | high to low |
| /locations/st-louis-mo/st-charles/sewer-cleaning/ | sewer cleaning in st. charles | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/st-charles/sewer-line-locating/ | sewer line locating in st. charles | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/st-louis-city/drain-cleaning/ | drain cleaning in st. louis city | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/st-louis-city/hydro-jetting/ | hydro jetting in st. louis city | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/st-louis-city/pre-purchase-sewer-inspection/ | pre-purchase sewer inspection in st. louis city | Y | ~ | Y | Y | ~ | ~ | none | low to low |
| /locations/st-louis-mo/st-louis-city/preventative-sewer-maintenance/ | preventative sewer maintenance in st. louis city | Y | Y | Y | Y | ~ | ~ | none | low to low |
| /locations/st-louis-mo/st-louis-city/recurring-sewer-backup-diagnosis/ | recurring sewer backup diagnosis in st. louis city | Y | Y | Y | Y | ~ | ~ | none | medium to low |
| /locations/st-louis-mo/st-louis-city/sewer-camera-inspection/ | sewer camera inspection in st. louis city | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/st-louis-city/sewer-cleaning-camera-inspection/ | sewer cleaning & camera inspection in st. louis city | Y | Y | Y | Y | ~ | ~ | none | high to low |
| /locations/st-louis-mo/st-louis-city/sewer-cleaning/ | sewer cleaning in st. louis city | Y | Y | Y | Y | ~ | ~ | none | ok to ok |
| /locations/st-louis-mo/st-louis-city/sewer-line-locating/ | sewer line locating in st. louis city | Y | ~ | Y | Y | ~ | ~ | none | ok to ok |
| /for/ | who we serve | Y | - | Y | - | - | n/a | none | medium to low |
| /for/hoa-communities/ | sewer inspection for hoa communities | Y | Y | Y* | Y | Y | - | Why does my sewer keep backing up? | high to ok |
| /for/home-buyers/ | home buyer sewer inspection | Y | Y | Y | Y | Y | - | What happens if a sewer problem is found before closing?; What is included in a sewer inspection (report)? | medium to ok |
| /for/home-inspectors/ | sewer inspection for home inspectors | Y | Y | Y* | Y | Y | - | none | high to ok |
| /for/home-sellers/ | sewer inspection before selling | Y | Y | Y* | Y | Y | - | Should I get a sewer inspection before buying a house? | high to ok |
| /for/property-managers/ | sewer inspection for property managers | Y | Y | Y* | Y | Y | - | none | high to ok |
| /for/real-estate-agents/ | sewer inspection for real estate agents | Y | Y | Y* | Y | Y | - | What happens if a sewer problem is found before closing? | high to ok |
| /locations/ | service areas | Y | Y | Y | Y | - | - | none | low to low |
| /resources/ | sewer and drain resources | Y | Y | Y | - | - | n/a | none | ok to ok |
| /resources/how-to-read-a-sewer-camera-inspection-video/ | sewer camera inspection video | Y | Y | Y | - | Y | - | What does a sewer camera inspection show?; How does a sewer camera inspection work? | medium to ok |
| /resources/st-louis-city-sewer-lateral-program/ | st. louis city sewer lateral program | Y | Y | Y | - | Y | - | none | ok to ok |
| /resources/st-louis-county-sewer-lateral-program/ | st. louis county sewer lateral program | Y | Y | Y | - | Y | - | none | low to low |
| /resources/st-louis-sewer-lateral-report/ | st. louis sewer lateral report | Y | Y | Y | - | Y | - | none | ok to ok |
| /resources/what-is-in-a-sewer-camera-inspection-report/ | sewer camera inspection report | Y | Y | Y | - | Y | - | What does a sewer camera inspection show? | low to low |
| /compare/hydro-jetting-vs-sewer-snaking/ | hydro jetting vs sewer snaking | Y | Y | Y | - | Y | - | When is hydro jetting appropriate? | medium to ok |
| /compare/independent-sewer-inspection-vs-repair-company/ | independent sewer inspection vs repair company | Y | Y | Y | - | Y | - | none | medium to low |
| /about/ | independent sewer inspection | Y | Y | Y | Y | - | Y | none | medium to ok |
| /faq/ | sewer and drain faqs | Y | Y | Y | - | - | - | none | ok to ok |
| /contact/ | contact the sewer pros | Y | Y | Y | Y | Y | Y | none | ok to ok |
| /las-vegas-nv/contact/ | contact the sewer pros in las vegas | Y | Y | Y | - | - | - | none | medium to ok |
| /san-diego-ca/contact/ | contact the sewer pros in san diego | Y | Y | Y | - | - | - | none | medium to ok |
| /st-louis-mo/contact/ | contact the sewer pros in st. louis | Y | Y | Y | - | - | - | none | medium to ok |
| /st-louis-mo/sewer-lateral-inspection-reporting/ | sewer lateral inspection reporting st. louis | Y | Y | Y | Y | - | - | none | low to low |

`*` The Sewer Cleaning & Camera Inspection H1 (DEC-126) and the six audience headlines are exempt by recorded decision; see section 1.

## 8. Ranked worst gaps (before the fixes) and their disposition

| Rank | Pages | Gap | Severity | Disposition |
| ---: | ----- | --- | -------- | ----------- |
| 1 | 16 service + location pages (Sewer Cleaning & Camera Inspection) | H1 spelled "Sewer Cleaning and Camera Inspection in {place}", not the registered name with the ampersand | High | Fixed |
| 2 | Real estate agents | Title "A sewer inspection that does not become a sales process" (72 characters), no audience keyword in title, meta or opening; central question absent | High | Fixed (title, meta, opening, H2); H1 kept |
| 3 | Home inspectors, property managers, HOA communities, home sellers | Title and opening carry no audience keyword; property managers missing the researched scheduling question | High | Fixed (title, opening, H2); H1s kept |
| 4 | Mission Valley hub | H1 "Sewer and Drain Service in ..." broke the hub pattern; meta and intro offered service to "mixed-use properties" | High | Fixed (residential-only wording, DEC-142) |
| 5 | 9 service + location pages | Title 71 to 80 characters | Medium | Fixed |
| 6 | 13 pages | Meta description 161 to 208 characters | Medium | Fixed |
| 7 | 3 market contact pages | Title 74 characters, meta 184 to 190 | Medium | Fixed |
| 8 | Hydro jetting | Researched question "When is hydro jetting appropriate?" absent from headings and FAQ | Medium | Fixed (H2) |
| 9 | Sewer Cleaning & Camera Inspection, comparison pages, video guide | Opening did not name the page's subject | Medium | Fixed |
| 10 | Services hub | Meta did not name "sewer and drain services" | Medium | Fixed |

## 9. Low-severity findings left unchanged

* **Titles between 61 and 70 characters (85 pages).** Within the 70-character limit; Google may truncate near 60. Suffix "| The Sewer Pros" accounts for 16. Shortening further would drop place names.
* **14 pre-purchase service + location metas** open with "Buying in {place}?" and name the service by a short form. They carry intent well; adding "pre-purchase sewer inspection" to each would be a quality edit, not a keyword fix.
* **13 pages with no H2 containing the primary phrase** (hub, utility and guide pages, comparison pages) and **9 pages with no opening mention** (utility pages): the phrase is a label there.
* **17 expected researched questions absent**, for example "Can hydro jetting damage a sewer line?", "Can hydro jetting help recurring backups?", "What happens if a sewer problem is found before closing?" (pre-purchase, home buyers, agents), "Can a sewer line be cleaned instead of replaced?" (sewer cleaning). Each needs an owner-approved answer about equipment limits or outcomes, so none was written (section 10).
* **8 question headings on 6 pages** with a first answer sentence over 45 words (jurisdiction answers on the Henderson, Summerlin, Carlsbad, Chula Vista and San Marcos hubs, the San Diego market hub).
* **Hydro jetting Henderson and Las Vegas** are 36% the same copy (all other service + location pairs are under 30%).
* **Cannibalization notes** in section 4.

## 10. Carry-forward items and decisions

| Item | Status | Blocking publication | Recommended next action |
| ---- | ------ | -------------------- | ----------------------- |
| Keyword research exports (`opportunities.json`, `keyword-clusters.json`, page briefs, Prompt 01 and 09 outputs) are not in the repo; the model is derived from docs and the registry | NEEDS CLIENT CONFIRMATION | NO | Supply the exports; replace the tables in `scripts/lib/editorial-keywords.mjs`; re-run the audit |
| Audience H1s are owner-written messaging lines with no keyword (agents, inspectors, sellers, property managers, HOA) | DECISION FOR OWNER | NO | Keep (current), or use "Sewer Inspection for {audience}: {headline}" as the H1. The keyword already sits in the title tag, meta and opening |
| Homepage and Sewer Camera Inspection both carry "sewer camera inspection" in the title | DECISION FOR OWNER | NO | Keep, or retitle the homepage around "Independent Sewer Inspection and Cleaning" so the service page owns "sewer camera inspection". No keyword data supplied to decide |
| 17 expected researched questions (outcomes, equipment limits, "found before closing", "cleaned instead of replaced") | NEEDS CLIENT CONFIRMATION | NO | Owner to confirm what may be said; then add as FAQ entries (the schema follows) |
| Hydro jetting Henderson vs Las Vegas at 36% shared copy | NEEDS LOCAL RESEARCH | NO | Source one more Henderson-specific fact; no local fact was invented |
| "Mixed-use" appears in Mission Valley body copy as the City's description of the district and in image shot notes | CONFIRM | NO | Left as quoted fact. Remove if you prefer to avoid the word entirely |
| Pricing, response times, licensing, 24/7, years in business | Not added | NO | Unchanged by this audit (CLAUDE.md section 24, DEC-072) |

## 11. Final editorial plan (Prompt 13 part 9)

**Top 10 improvements made:** (1) registered ampersand name on 16 H1s and one label; (2) keyword title tags on all six audience pages; (3) audience meta and opening sentences; (4) Mission Valley hub H1 and residential-only wording; (5) 13 over-limit titles; (6) 13 over-limit metas; (7) three researched-question headings; (8) openings that name the page's subject on four pages; (9) services hub meta; (10) an editorial gate in the verify run.

**Top 5 quick wins left:** shorten the 85 titles to 60; put the registered pre-purchase name into the 14 "Buying in..." metas; add the owner-approved answers for the 17 expected questions; resolve the two owner decisions in section 10; add one distinct Henderson fact to hydro jetting.

**Top 5 AEO and LLM improvements left:** the 17 expected questions; a short definition line under the video guide's first H2; answer-first rewrite of the 8 long jurisdiction answers; a "found before closing" FAQ on the three real estate pages; an explicit "what does a sewer camera inspection show" heading on the video and report guides.

**Top 5 local improvements left:** one more sourced fact for Henderson hydro jetting; guides for San Diego and Las Vegas lateral programs (also in the linking report); no city-name swapping was found.

**Top 5 conversion improvements left:** none are keyword-driven; conversion structure was not changed.

**Content to remove or avoid:** "mixed-use" as a served property type; any "repair" or "replacement" wording that reads as an offer (none found in titles, metas or H1s); the word "report" as a deliverable (video and written findings only).

**Final content quality score (family average):** 7.9 of 10. **Final recommendation:** Needs light editing (ready to publish; the remaining items are low or need the owner).

## 12. Verification

* `npx tsc --noEmit`: passes.
* `npm run build`: passes.
* `node scripts/verify-editorial-keywords.mjs`: passes (new).
* All verify scripts, including `verify-internal-links.mjs` (linking structure unchanged): 30 of 30 pass.
