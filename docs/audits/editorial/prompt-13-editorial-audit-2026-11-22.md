# Prompt 13 editorial audit: did the keyword research reach the copy? (2026-11-22)

**Status: read-only report. Nothing on the site was changed, committed or pushed.** This file and `prompt-13-page-map.json` are the only files created, and both are left uncommitted.

Per-page detail (title, description, H1, H2s, first 100 words, status, pinned flags, research-term hits) for all 197 indexable pages is in `prompt-13-page-map.json`.

## 0. Method and limits

- **Canonical Prompt 13 file:** `prompts/13-content-quality-editor-prompt.md` is **not in this checkout**. The earlier audit (`docs/source-reports/prompt-13-editorial-audit-2026-10-27.md`) states it read v1.1 from the Site OS Master repo and records how it adapted that template-per-page prompt to 197 pages. I reused that structure (checks per page, scorecards per family) and did not invent a different one.
- **Live copy:** read from the built HTML in `out/` (current `main`, built today): title, meta description, canonical, H1 count, H1, H2 and H3 list, first 100 words after the H1, FAQ questions from the FAQPage JSON-LD.
- **Route state:** the 197 pages are every page in `out/` that is indexable and in the sitemap (the thank-you page is noindex and excluded).
- **Scores in section 4 are editorial judgement** from the rendered copy of sampled pages (at least 3 per family, every core service, home, the market hubs and the comparison pages) plus the structural counts in this report. They are not measured quantities.
- **Counts of H2 and H3 hits in `researchTerms` are inflated** by the sitewide service-card grid and trust bands that render on most pages. Use title, meta and H1 hits when judging whether a term reached the copy.

## 1. Summary

**Pages audited: 197.**

| Family | Pages | Aligned | Partially aligned | Misaligned |
|---|---:|---:|---:|---:|
| Home | 1 | 1 | 0 | 0 |
| Market hubs | 3 | 3 | 0 | 0 |
| Market contact pages | 3 | 3 | 0 | 0 |
| Market lateral reporting page | 1 | 1 | 0 | 0 |
| Locations hub | 1 | 1 | 0 | 0 |
| Location hubs | 16 | 16 | 0 | 0 |
| Service + location | 144 | 144 | 0 | 0 |
| Services hub | 1 | 1 | 0 | 0 |
| Core services | 9 | 9 | 0 | 0 |
| Audience hub and audiences | 7 | 7 | 0 | 0 |
| Comparison pages | 2 | 2 | 0 | 0 |
| Resources hub and guides | 6 | 6 | 0 | 0 |
| About, Contact, FAQ | 3 | 3 | 0 | 0 |
| **Total** | **197** | **197** | **0** | **0** |

**Read this table with the next paragraph.** It uses the same page-level test as the October audit and its gate: the page's own primary keyword (the registered service name, or the documented pattern for its family) must reach the title, meta description, H1, an H2 or the opening, with unique titles and metas, one H1, length limits and a canonical that matches the route. On that test every page passes. That is correct, but it is also nearly guaranteed: the primary keyword is *defined* as the page's own name, so a page named "Hydro Jetting" will always contain "hydro jetting". The test cannot detect the problem the owner described.

**Overall assessment: research reached the copy at the level of topics and service names, and did not consistently reach the decision and differentiator terms.** The repo's only keyword research is `docs/10-seo-strategy.md` sections 11, 15, 27, 50 to 54 and 65 to 67 (plus the question banks in docs 09, 12 and 14). There are **no search volumes, no Keyword Planner export and no Prompt 01 outputs anywhere in the repo**. Tested against those documented terms rather than page names:

| Research term (docs/10 s.11 unless noted) | In title | In meta | In H1 | Reached copy? |
|---|---:|---:|---:|---|
| Service terms (5): sewer camera inspection, sewer cleaning, hydro jetting, sewer line locating, drain cleaning | 17 to 34 pages each | 17 to 42 | 17 to 33 | Yes, on every matching service page and its 16 local pages |
| Problem terms (5): keeps backing up, roots, slow line, blockage, smell | 0 to 17 | 0 to 18 | 0 to 17 | By design in H2s and FAQ questions only (docs/10 s.18: problems support service pages, they do not get their own) |
| Real estate: sewer inspection before buying house; sewer scope home purchase; home buyer sewer inspection | 1 | 1 to 9 | 1 | Yes on the pre-purchase and home buyers pages |
| Decision: hydro jetting vs snaking | 1 | 1 | 1 | Yes (own comparison page) |
| Decision: sewer inspection vs sewer scope | 0 | 0 | 0 | FAQ-only (two FAQ questions and two H2s); no title or meta |
| **Decision: second opinion sewer replacement** | **0** | **0** | **0** | **No. Present only in 24 H2s, 21 FAQ questions and 4 openings** |
| Local query families (docs/10 s.27): sewer company / sewer services {city} | 0 company, 1 services (Locations hub) | 0 company, 4 services | 0 | "Company" appears nowhere. "Services" appears in only 4 local metas |
| Market hubs (docs/10 s.21): sewer services {city} | 0 | 0 | 0 | No. The hubs use "sewer inspection and cleaning" only |

### Top 10 highest-impact gaps

1. **"Second opinion" is in no title, meta or H1 on any of the 197 pages**, although it is a research decision keyword (docs/10 s.11, docs/12 s.1324 and s.2651, docs/14 s.2218), the business's stated differentiator and the owner-approved offer wording (DEC-148). The comparison page is the natural owner of the term and does not use it. There is no dedicated second-opinion route. (P1 to P3, P10)
2. **Market hub and same-named city hub have near-identical titles** for San Diego and Las Vegas: "Sewer Inspection and Cleaning in Las Vegas, NV" versus "Sewer Inspection & Cleaning in Las Vegas, NV | The Sewer Pros". Two pages compete for one query. (P4, P5)
3. **The Services hub title leads with "Cleaning" and says nothing about inspection**, although DEC-104 records that real keyword data shows `/services/` attracts a comparison-stage searcher ("sewer inspection companies"). It also shares "drain cleaning" with the Drain Cleaning page. The shipped string is the Prompt 04 brief's string, so changing it needs the owner. (P6)
4. **Market hubs do not use "sewer services {city}"**, the research phrase docs/10 s.21 assigns to them. (P7)
5. **Five location hub titles put the city first ("Ballwin, MO Sewer Inspection & Cleaning")** while the other 11 and the docs/10 s.65 example put the service first. Pinned by five verifiers. (P11)
6. **Home sellers meta description is generic** ("practical information for sellers and real-estate transactions"), the weakest description on any audience page. (P8)
7. **The comparison page body does not use the search phrase either.** Its H2 says "independent inspection", while the body already says "second opinion on a replacement recommendation". (P3)
8. **Service + location pages are about 24% location-specific words** (7% of words appear on 3 or fewer pages; 22% are shared within the same service across its 16 locations; the rest is sitewide bands). The title, meta and opening carry real local facts, but each page has about 32 FAQ answers, most of them the service's shared answers (22% of the page's words are shared within the same service across its 16 locations). This is a template-level quality dependency, not a keyword gap.
9. **The scope disclaimer ("We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair...") sits inside the first 100 words of 8 of the 9 service pages**, ahead of the process content. It is approved business wording and pinned by 8 verifiers, so it is listed, not proposed.
10. **Home page meta does not mention the second-opinion service** that the home page itself labels "Independent sewer inspection & second opinions". (P9)

What is **not** a gap (so nobody spends time on it): all titles are unique, no title is over 70 characters, no description is over 160, no page has more than one H1, canonicals match, no page is keyword-stuffed, no repair or commercial wording reads as an offer, and every researched question phrase is present in headings or FAQ questions.

## 2. Inputs found and missing

| Input | Found? | Where |
|---|---|---|
| Keyword research with volumes (Keyword Planner CSVs) | **Missing** | `docs/seo/keyword-exports/` does not exist. `docs/multifamily-page-decision.md` confirms there is none and that volumes must not be estimated |
| Prompt 01 outputs: `opportunities.json`, `keyword-clusters.json`, `page-brief.json` | **Missing** | Not in the repo (the October audit also searched sibling folders) |
| `claude/*-keyword-strategy*.md` research notes | **Missing** | `claude/` holds six build prompts only; several referenced files (for example `claude/services-hub-prompt-20-visibility-conversion-alignment.md`) are not present |
| `prompts/13-content-quality-editor-prompt.md` | **Missing** from this checkout | Used via the October audit's record of it |
| Keyword categories and patterns | Found | `docs/10-seo-strategy.md` s.11, s.15, s.21, s.27, s.50 to 54, s.65 to 67 |
| Question banks | Found | `docs/10` s.50 to 54, `docs/12`, `docs/14`, `docs/09` (encoded in `scripts/lib/editorial-keywords.mjs` `QUESTIONS`) |
| Service names and aliases | Found | `data/services/master-service-registry.json` |
| Keyword model and gate from the October audit | Found | `scripts/lib/editorial-keywords.mjs`, `scripts/lib/editorial-audit.mjs`, `scripts/verify-editorial-keywords.mjs` |
| Route state | Found | The built sitemap and robots flags in `out/` (matches `docs/04-master-page-build-list.md`) |
| Metadata rules and limits | Found | `docs/10` s.65 to 67, `lib/seo/text-width.mjs` (title 580px, description 920px), `scripts/lib/meta-audit.mjs` (description 110 to 160 characters), `verify-meta` |
| Decision log entries used | Found | DEC-104 (services hub intent), DEC-148 (free second opinion wording) |

**Pages with no research data:** all 197, for volume and competition (marked "no research data" in the JSON). Pages with documented research terms but no volumes: every service, service + location, location hub, audience and comparison page. Pages with no documented research at all beyond their name: About, Contact, FAQ, the three market contact pages and the St. Louis lateral reporting page.

## 3. Keyword-to-copy summary by family

The full table is in `prompt-13-page-map.json` (one object per page). Patterns:

| Family (pages) | Primary keyword pattern and source | Title pattern | H1 pattern | Result |
|---|---|---|---|---|
| Home (1) | "independent sewer inspection and cleaning" (owner decision: sitewide, no local modifier) | "Independent Sewer Inspection and Cleaning \| The Sewer Pros" (58) | same words (hero) | Aligned |
| Market hubs (3) | "sewer inspection and cleaning {city}" (docs/10 s.21) | "Sewer Inspection and Cleaning in {City}, {ST}" (46, no brand) | "...in the Las Vegas Valley", "...across San Diego County", "...in St. Louis, MO" | Aligned; SD and LV titles duplicate the city hub (gap 2); "sewer services" absent (gap 4) |
| Market contact (3) | "request sewer inspection {city}" | "Request Sewer Inspection in {City}, {ST}" (41) | "Contact The Sewer Pros in {City}, {ST}" | Aligned |
| Locations hub (1) | "service areas" | "Sewer Service Areas: St. Louis, San Diego and Las Vegas" (55) | "Find sewer inspection and cleaning in your service area" | Aligned |
| Location hubs (16) | "sewer inspection and cleaning in {place}" (docs/10 s.27, s.65) | 11 pages "Sewer Inspection & Cleaning in {Place} \| The Sewer Pros" or without brand when over 580px; 5 city-first (gap 5) | "Sewer Inspection and Cleaning in {Place}" | Aligned; title pattern inconsistent |
| Service + location (144) | "{registered name} in {place}" (docs/10 s.28, s.65) | "{Name} in {City}, {ST} \| The Sewer Pros"; the brand is dropped on 64 titles to stay inside 580px | "{Name} in {City}" | Aligned: place in title, meta, H1 and opening on all 144 |
| Core services (9) | registered name (docs/10 s.15) | "{Name}: {qualifier} \| The Sewer Pros" (49 to 60), name first on eight ("Private Sewer Line Locating" starts with "Private") | bare name on 8; Sewer Cleaning & Camera Inspection keeps its owner-directed H1 | Aligned |
| Services hub (1) | "sewer and drain services" | "Sewer & Drain Cleaning Services \| The Sewer Pros" (48) | "Sewer and drain services built around documented evidence" | Aligned; title leans to cleaning (gap 3) |
| Audience pages (6) + hub | "sewer inspection for {audience}" | "Sewer Inspection for {Audience} \| The Sewer Pros" (49 to 56) | owner-written messaging lines (kept by decision) | Aligned; keyword carried by title, meta, H2s and opening |
| Resources (5 guides, hub) | the guide's own question (docs/10 s.50) | the question, or "{place} Sewer Lateral ... Guide \| The Sewer Pros" | same as title | Aligned |
| Comparison (2) | "hydro jetting vs sewer snaking"; "independent sewer inspection vs repair company" | mirrors the H1 | mirrors the title | Aligned; second-opinion intent absent from the independent-inspection page's title and meta (gap 1) |
| About, Contact, FAQ | labels | label + keyword | label | Aligned |

## 4. Editorial scorecards (1 to 10, judgement from sampled copy)

Dimensions: **Cla**rity, **Spe**cificity, search **Int**ent alignment, **SEO** strength, **AEO** strength, **LLM** search readiness, **Loc**al relevance, **Tru**st strength, **Con**version strength, human **Rea**dability. "n/a" where the dimension does not apply.

### 4.1 Individually scored pages

| Page | Cla | Spe | Int | SEO | AEO | LLM | Loc | Tru | Con | Rea | Basis |
|---|---:|---:|---:|---:|---:|---:|---|---:|---:|---:|---|
| Home | 8 | 7 | 8 | 8 | 8 | 8 | n/a | 8 | 8 | 7 | Title, H1, meta lead with the primary keyword and the three markets. Opening sentences average 29 words. 14 FAQ questions, 0 weak answers. The second-opinion service is a label, not in the meta |
| St. Louis hub | 8 | 8 | 8 | 7 | 8 | 8 | 8 | 8 | 8 | 7 | Counties named in the opening; 12 FAQ questions; title is fine but does not carry "sewer services" |
| San Diego hub | 8 | 8 | 8 | 6 | 8 | 8 | 8 | 8 | 8 | 7 | Title duplicates the San Diego city hub (gap 2) |
| Las Vegas hub | 8 | 8 | 8 | 6 | 8 | 8 | 8 | 8 | 8 | 7 | Same duplicate-title issue |
| Services hub | 8 | 7 | 7 | 6 | 8 | 8 | n/a | 8 | 8 | 7 | Title says cleaning only; the research intent is inspection-company comparison |
| **Compare: independent inspection vs repair company (money page)** | 9 | 8 | 7 | 6 | 8 | 8 | n/a | 9 | 6 | 9 | Balanced tone, no accusations (docs/10 s.44 to 45). The search phrase "second opinion" is not in title, meta, H1 or H2; 2.5 FAQ questions; thin conversion path |
| Compare: hydro jetting vs snaking | 9 | 8 | 9 | 9 | 8 | 8 | n/a | 8 | 7 | 9 | Title, H1, meta, H2 all match the research decision keyword |

### 4.2 Core service pages (each scored individually)

| Page | Cla | Spe | Int | SEO | AEO | LLM | Tru | Con | Rea | Weakest dimension |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| **Sewer Camera Inspection (money)** | 9 | 8 | 9 | 8 | 9 | 9 | 8 | 8 | 8 | SEO: bare H1; the title qualifier "What It Shows" is good |
| **Pre-Purchase Sewer Inspection (money)** | 9 | 8 | 9 | 9 | 9 | 9 | 8 | 8 | 8 | none: title carries "(Sewer Scope)", the research alias |
| **Sewer Cleaning & Camera Inspection (money)** | 8 | 8 | 8 | 7 | 8 | 8 | 8 | 8 | 8 | SEO: H1 is the owner's headline and starts with "Sewer Camera Inspection and Cleaning", which overlaps the camera inspection page (pinned) |
| Sewer Cleaning | 8 | 8 | 8 | 8 | 9 | 9 | 8 | 8 | 8 | none |
| Hydro Jetting | 9 | 8 | 9 | 8 | 9 | 9 | 8 | 8 | 8 | none |
| Sewer Line Locating | 8 | 8 | 8 | 8 | 9 | 9 | 8 | 8 | 8 | title starts "Private Sewer Line Locating" (keyword at word 2) |
| Drain Cleaning | 8 | 8 | 8 | 8 | 9 | 9 | 8 | 8 | 8 | none |
| Recurring Sewer Backup Diagnosis | 8 | 8 | 8 | 8 | 9 | 9 | 8 | 8 | 8 | none |
| Preventative Sewer Maintenance | 7 | 7 | 7 | 8 | 8 | 8 | 8 | 8 | 8 | intent: no researched required question for the page (docs/10 has none) |

Template-level weakness repeated on all service pages: the scope disclaimer sits in the first 100 words (gap 9, pinned).

### 4.3 Family scorecards

| Family (sample) | Cla | Spe | Int | SEO | AEO | LLM | Loc | Tru | Con | Rea | Basis |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---|
| Service + location (Ballwin camera inspection, Carlsbad pre-purchase, Henderson drain cleaning, Summerlin hydro jetting) | 9 | 7 | 9 | 9 | 9 | 9 | 9 | 8 | 8 | 7 | Openings state a real local fact (agency, program, housing age); 323 answer-first questions, 0 weak; about 24% of words are local-specific; long pages (about 32 FAQ answers) |
| Location hubs (Ballwin, Carlsbad, Mission Valley, Summerlin) | 8 | 8 | 8 | 7 | 8 | 8 | 9 | 8 | 8 | 8 | Strong local sections; 7 of 209 question headings are not answer-first; title pattern inconsistent |
| Audience pages (home buyers, agents, property managers, HOA) | 8 | 8 | 8 | 7 | 8 | 8 | n/a | 8 | 8 | 9 | Owner headlines are persuasive but carry no audience keyword in H1; title, meta and H2s do; home sellers meta is weak |
| Resources (video guide, report guide, lateral guides) | 9 | 9 | 8 | 8 | 9 | 9 | 7 | 8 | 6 | 9 | Titles equal the researched questions; strong answer-first; weak conversion path and no brand on some titles |
| Market contact (St. Louis, San Diego, Las Vegas) | 8 | 7 | 8 | 7 | 7 | 7 | 8 | 8 | 9 | 8 | Intent is transactional and met; little keyword depth by design |
| About, Contact, FAQ | 8 | 7 | 7 | 7 | 8 | 8 | n/a | 8 | 8 | 8 | Label pages; FAQ H2s are generic ("Common questions") |

## 5. Cannibalization and duplication

| Finding | Pages | Severity | Action |
|---|---|---|---|
| Near-identical titles (differ only by "&" vs "and" and the brand suffix) | `/san-diego-ca/` and `/locations/san-diego-ca/san-diego/`; `/las-vegas-nv/` and `/locations/las-vegas-nv/las-vegas/` | **High** | P4, P5. The exact-string duplicate check passes, which is why nothing flagged it |
| Shared "sewer cleaning" | `/services/sewer-cleaning/` and `/services/sewer-cleaning-camera-inspection/` | Low | Legitimate: the combined service is a different intent; titles and H1s differ |
| Shared "drain cleaning" | `/services/` and `/services/drain-cleaning/` | Medium | P6 removes the shared phrase from the hub title |
| H1 overlap "Sewer Camera Inspection" | `/services/sewer-camera-inspection/` and `/services/sewer-cleaning-camera-inspection/` | Medium | Owner-directed and pinned by `verify-sewer-cleaning-camera-inspection-page.mjs`; not proposed |
| Home vs Services hub vs About for "independent sewer inspection" | `/`, `/services/`, `/about/` | Low | Titles differ; the About title "About The Sewer Pros: Independent Sewer Inspection" is the closest |
| Token-swapped copy | any two service + location pages | None found | Largest similarity between siblings is under the 35% line (the October engine finds 0 pairs over 35%) |
| Duplicate H1 text | none | None | |

## 6. Proposals

Counts and px figures use `lib/seo/text-width.mjs` (title budget 580px, description 920px). Ratings: R = Recommended, O = Optional, N = Not worth it. "Verifier impact" lists anything that would need a check update.

| ID | Page or template | Current | Proposed | Chars (cur to new) | Rating | Keyword evidence | Sign-off | Pinned or verifier impact |
|---|---|---|---|---|---|---|---|---|
| P1 | Independent vs repair comparison, title (`content/pages/comparisons.tsx:177`) | "Independent Sewer Inspection vs. Repair Company" | "Independent Sewer Inspection vs. Repair: Second Opinion" (519px) | 47 to 55 | **R** | docs/10 s.11 decision keyword "second opinion sewer replacement"; docs/12 s.1324, s.2651; docs/14 s.2218; volume: no research data | Money page; title only, H1 unchanged | None. The editorial gate's primary variant "independent sewer inspection vs repair" is still in the title, and the page is on the gate's repair-wording allow-list |
| P2 | same, meta (`comparisons.tsx:179`) | "Compare independent sewer inspection with repair-company evaluations and learn how documented findings can support an informed next-step decision." | "Got a sewer repair quote? Compare an independent sewer inspection with a repair company evaluation and see how video findings support a second opinion." (908px) | 146 to 151 | **R** | same; the question form matches the repair-quote intent | Money page | None |
| P3 | same, H2 (`comparisons.tsx:219`) | "Where an independent inspection is worth considering" | "Where an independent second opinion is worth considering" | n/a | **R** | same; the page body already says "As a second opinion on a replacement recommendation" (`comparisons.tsx:226`) | Money page | None found. Re-check `verify-editorial-keywords` after the change |
| P4 | San Diego market hub, title (`content/pages/san-diego.tsx:146`) | "Sewer Inspection and Cleaning in San Diego, CA" | "Sewer Inspection and Cleaning Across San Diego County" (511px) | 46 to 53 | **R** | docs/10 s.21 and s.27: the hub takes the broad market query, the city hub takes the city query; current titles collide. Matches the hub's own H1 ("across San Diego County") | Market hub title (H1 unchanged) | None. The gate's loose "service + place" test still passes |
| P5 | Las Vegas market hub, title (`content/pages/las-vegas.tsx:134`) | "Sewer Inspection and Cleaning in Las Vegas, NV" | "Sewer Inspection and Cleaning in the Las Vegas Valley" (491px) | 46 to 53 | **R** | same; matches the hub's H1 ("in the Las Vegas Valley") | Market hub title (H1 unchanged) | None |
| P6 | Services hub, title (`content/pages/core.tsx:842`; the `%s \| The Sewer Pros` template adds the brand) | "Sewer & Drain Cleaning Services" (shipped: "...\| The Sewer Pros", 48) | "Sewer & Drain Inspection and Cleaning" (shipped 54, 509px) | 48 to 54 | **R** | DEC-104: real keyword data shows `/services/` attracts a comparison-stage searcher ("sewer inspection companies"); docs/10 s.11. Removes the shared "drain cleaning" phrase with the Drain Cleaning page. Volume: no research data | The shipped string is the Prompt 04 brief's string (comment at `core.tsx:836`); confirm with the owner | None. The gate's `/services/` primary ("sewer and drain") is kept; the Sewer Camera Inspection ownership check is unaffected because the new title says "inspection" only |
| P7 | Market hub metas, three pages (`st-louis.tsx:109`, `san-diego.tsx:148`, `las-vegas.tsx:136`) | "Independent sewer camera inspection and cleaning across the St. Louis area. Video and written findings before major sewer decisions, no repair upselling." (and the SD and LV equivalents) | St. Louis: "Independent sewer services across the St. Louis area: camera inspection and cleaning with video and written findings, no repair upselling." San Diego: "Independent sewer services in San Diego: camera inspection and cleaning with video and written findings, no repair upselling. Request an inspection." Las Vegas: "Independent sewer services across the Las Vegas Valley: camera inspection and cleaning with video and written findings, no repair upselling." | 153 to 138; 153 to 148; 150 to 140 | O | docs/10 s.21: market hubs target "sewer services {city}". Volumes: no research data | Market hub meta | None |
| P8 | Home sellers audience, meta (`content/pages/audiences.tsx:207`) | "Prepare for property questions with documented sewer inspection findings and practical information for sellers and real-estate transactions." | "Sewer inspection before selling a house: see what a buyer’s inspection may find, with video and written findings you can share." (730px) | 140 to 127 | **R** | The title "Sewer Inspection Before Selling a House" already targets this; the meta should echo it for click-through. Evidence: docs/09 sellers audience; no volume | None | None. The page's primary variants ("before selling", "home sellers") are still met. The proposed text is 127 characters; `verify-meta` aims for 130 to 158, so the alternative "...with inspection video and written findings you can share" (140 characters, 800px) fits the aim better |
| P9 | Home, meta (`content/pages/core.tsx:56`) | "Independent sewer inspection and cleaning in St. Louis, San Diego and Las Vegas. Get inspection video and written findings before you decide on sewer work." | "Independent sewer inspection and cleaning in St. Louis, San Diego and Las Vegas. Get video and written findings, or a second opinion, before sewer work." (892px) | 155 to 152 | O | Home already labels the service "Independent sewer inspection & second opinions". "Second opinion" without "free" does not tighten the DEC-148 hedge | Home page copy (not the H1): owner review advised | None. The gate requires only the primary keyword in the meta |
| P10 | Location hub titles, five pages (St. Louis: Ballwin `st-louis-ballwin.tsx:400`, Chesterfield `:402`, Florissant `:397`, St. Charles `:414`; Mission Valley `san-diego-mission-valley.tsx:411`) | "Ballwin, MO Sewer Inspection & Cleaning" etc. | Ballwin "Sewer Inspection & Cleaning in Ballwin, MO" (550px with brand); Florissant "...in Florissant, MO" (573px with brand); Chesterfield and St. Charles without the brand, as Chula Vista and San Marcos already do (593px and 585px would exceed 580px with it); Mission Valley "Sewer Inspection & Cleaning in Mission Valley" (571px with brand) | n/a | O | docs/10 s.65 puts the service first; 11 of 16 hubs already do. Volume: no research data | None | **Pinned:** `verify-ballwin-page`, `verify-chesterfield-page`, `verify-florissant-page`, `verify-st-charles-page`, `verify-mission-valley-page` each assert the exact title regex. Each would need its title line updated |
| P11 | Service pages, scope disclaimer in the first 100 words (template in `content/pages/services.tsx`, `scopeNote` blocks) | "We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation." in the opening | Move it below the first content section | n/a | N | AEO: the first 100 words would carry the definition and process instead | Approved business wording | **Pinned** by 8 verifiers (`verify-drain-cleaning-page`, `...hydro-jetting-page`, `...pre-purchase-sewer-inspection-page`, `...preventative-sewer-maintenance-page`, `...recurring-sewer-backup-diagnosis-page`, `...sewer-cleaning-camera-inspection-page`, `...sewer-cleaning-page`, `...sewer-line-locating-page`). Not worth the churn |
| P12 | 64 service + location titles without the brand suffix | e.g. "Preventative Sewer Maintenance in Henderson, NV" | add " \| The Sewer Pros" | n/a | N | The brand is dropped only to stay under 580px; adding it would truncate | None | n/a |
| P13 | Core service H1s that are the bare name (8 pages) | "Hydro Jetting" | add a qualifier ("Hydro Jetting for Sewer and Drain Lines") | n/a | N | The bare name equals the research keyword; the title already carries the qualifier | Core service H1s | Several H1s are checked by service verifiers |
| P14 | Location hub and market hub copy for "sewer company" and "near me" | no occurrence | add the phrases | n/a | N | docs/10 s.27 lists "sewer company {city}" as a potential family but there is no volume data, and "near me" is not in the research at all. Adding them would be keyword stuffing | n/a | n/a |

Proposals not made, on purpose: the Sewer Cleaning & Camera Inspection H1 (owner-directed, pinned), the home H1 and hero intro (owner decision to lead with the primary keyword, sitewide), and audience H1 messaging lines (owner-written, kept; the keyword is in the title, meta and H2s).

## 7. Pinned items

| Item | Pinned by | What an update would need |
|---|---|---|
| Location hub titles (P10) | `verify-ballwin-page`, `verify-chesterfield-page`, `verify-florissant-page`, `verify-st-charles-page`, `verify-mission-valley-page` | Change the `check('title', /<title>...</title>/)` regex line in each of the five scripts to the new title |
| Service page scope sentence (P11) | the eight service-page verifiers listed in P11 | Move or change the assertion in each; not recommended |
| Sewer Cleaning & Camera Inspection title, H1 and meta | `verify-sewer-cleaning-camera-inspection-page`, `verify-editorial-keywords` (exemption) | Owner decision of 2026-10-05; not proposed |
| Home title ownership | `verify-editorial-keywords` ("homepage is titled around independent sewer inspection and cleaning"; must not carry "sewer camera inspection") | None for the proposals (P9 changes only the meta) |
| Mission Valley title, H1 and meta | `verify-mission-valley-page` | Included in P10 only for the title |
| Pre-purchase "(Sewer Scope)" title | `verify-pre-purchase-sewer-inspection-page` | Not changed |
| Compare pages (P1 to P3) | not pinned by a page verifier; checked by `verify-editorial-keywords` (primary variants, repair wording, uniqueness) | None expected; re-run after applying |
| Services hub title (P6) | not pinned by a verifier; the string comes from the Prompt 04 brief (`core.tsx:836`) | Owner confirmation |

## 8. Suggested apply plan

1. **First, comparison page (P1, P2, P3).** Highest impact, no pinned wording, three edits in `comparisons.tsx`. Re-run `verify-editorial-keywords` and `verify-meta`.
2. **Second, market hub titles (P4, P5).** Removes the duplicate-title pairs; two one-line edits; no verifier churn. Consider adding P7 in the same commit (three meta lines).
3. **Third, Services hub title (P6) and home sellers meta (P8).** One line each. P6 needs the owner to confirm the Prompt 04 string is no longer binding.
4. **Fourth, optional home meta (P9).** Owner review of the "second opinion" wording on the home page.
5. **Last, location hub titles (P10), only if the owner wants the consistency.** Five content lines plus five verifier lines; do these together in one commit so the verifiers never fail.
6. Template-level fixes before page fixes: none of these proposals is a template change. The one template-level weakness (service + location pages are mostly service-shared copy) is not a metadata fix and is listed under open questions.
7. After applying: `npm run build`, `npm run verify`, then the link audit (`node scripts/audit/run-link-audit.mjs`), since the Services hub and comparison page titles feed the sitemap and breadcrumb text.

## 9. Open questions

- **Is a dedicated "independent second opinion" page wanted?** The research term "second opinion sewer replacement" and the offer both exist, and the comparison page is the closest registered route. Creating a new route is a page-inventory decision, so this report proposes strengthening the comparison page instead and makes no recommendation to add a page.
- **Should the Prompt 04 string for the Services hub stay binding?** P6 departs from it on research evidence (DEC-104).
- **Decision made, no question:** "second opinion" is proposed without "free" everywhere, because DEC-148 only authorizes the hedged form "ask about a free second opinion", and titles and metas must not tighten it.
- **Decision made, no question:** no keyword volume is stated anywhere in this report or the JSON. Every volume is "no research data".
