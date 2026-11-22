# Repo audit: supporting article "Questions to ask before approving a sewer replacement"

Basis: `main` at 86f5777 plus the local build in `out/`. Read-only. No source, data, content or verifier file was changed. This report is the only file created, and it is not committed.

Proposed topic: a list-format resource answering "What should I ask before approving a sewer replacement?", linking to the second opinion page.

## 1. Overlap and cannibalization inventory

### 1.1 Pages that already cover replacement decisions

| Route | Title | H1 | Relevant H2s | Relevant questions already answered | Risk |
|---|---|---|---|---|---|
| `/services/independent-sewer-inspection-second-opinion/` | Sewer Second Opinion \| Independent Review \| The Sewer Pros | Told You Need a New Sewer Line? Get a Second Opinion First. | Why a second opinion is worth getting before you approve major sewer work; What you will hear from us; When people ask us for a second opinion | FAQ: "Do I need a new sewer line?", "Should I get a second opinion before replacing a sewer line?", **"What should I ask before approving sewer replacement?"**, "Can a sewer line be cleaned instead of replaced?", "Why not just ask the contractor who gave the quote?" | **High.** It already has an FAQ with the exact working title of the article, answered in one sentence (full video and written findings, where each problem was seen, repair instead of full replacement, cleaning, more than one written quote, keep the footage) |
| `/compare/independent-sewer-inspection-vs-repair-company/` | Independent Sewer Inspection vs. Repair: Second Opinion | Independent Sewer Inspection vs Repair Company Inspection | Where a repair contractor is the better choice; Where an independent second opinion is worth considering; **How to get a useful inspection either way** (list: ask for footage, what was observed and at what distance, what could not be assessed, whether the line was cleaned, get more than one view) | FAQ: "Are you saying repair companies inflate findings?", "Can I use your inspection to get repair quotes?" | **Medium.** The "How to get a useful inspection either way" list is a short version of the same advice |
| `/resources/what-is-in-a-sewer-camera-inspection-report/` | What Is Included in a Sewer Camera Inspection Report? | same | What a report should contain; **Questions worth asking** (5 bullets: how far, which sections not assessed, distance of each condition, was it cleaned, can I have the footage) | FAQ: "Should the report include a repair quote?" | **Medium.** The question list is about the report, not the replacement decision, but it overlaps on "ask for the footage" |
| `/resources/how-to-read-a-sewer-camera-inspection-video/` | How to Read a Sewer Camera Inspection Video | same | What footage cannot tell you; If you are unsure | FAQ: "The video looks bad. Does that mean the line is failing?" | Low. Reading footage, not a decision |
| `/services/` (hub) | Sewer & Drain Inspection and Cleaning \| The Sewer Pros | Sewer and drain services built around documented evidence | shared H2 "Get an Opinion From a Company That Does Not Sell Repairs or Replacements" | FAQ: "Do you do sewer repairs?", "Should I get a second opinion before agreeing to a sewer replacement?", "Should a sewer line be cleaned instead of replaced?" | Low. Short answers, no list |
| `/` (home) | Independent Sewer Inspection and Cleaning \| The Sewer Pros | Independent sewer inspection and cleaning. | same H2 | same two FAQs as the hub | Low |
| `/services/pre-purchase-sewer-inspection/` | Pre-Purchase Sewer Inspection (Sewer Scope) \| The Sewer Pros | Pre-Purchase Sewer Inspection | n/a | FAQ: "Does a sewer scope tell me if the pipe needs to be replaced?", **"What should I ask before approving major sewer work?"** | **Medium.** A one-paragraph version: proposal in writing (work, materials, schedule, price), which evidence it relies on, whether the camera reached all sections, compare written estimates |
| `/services/preventative-sewer-maintenance/` | Preventative Sewer Maintenance and Cleaning \| The Sewer Pros | Preventative Sewer Maintenance | n/a | FAQ: "What should I ask for before approving major sewer work?" (get the scope in writing, compare more than one written estimate, keep the video) | Medium. Same advice in two sentences |
| `/services/recurring-sewer-backup-diagnosis/` | Recurring Sewer Backup Diagnosis \| The Sewer Pros | Recurring Sewer Backup Diagnosis | n/a | FAQ: "Should I get a second opinion before approving major sewer work?" | Low |
| `/services/sewer-cleaning/` | Sewer Cleaning: Methods, Process and Limits \| The Sewer Pros | Sewer Cleaning | n/a | FAQ: "Can a sewer line be cleaned instead of replaced?" | Low. A cleaning page, but the answer is on the topic of the article |
| `/services/sewer-line-locating/`, `/services/drain-cleaning/` | n/a | n/a | n/a | FAQs: "Can line locating help with sewer repair work?", "Does drain cleaning repair a damaged pipe?" | Low |
| `/for/home-sellers/` | Sewer Inspection Before Selling a House \| The Sewer Pros | Find out what a buyer's inspection will find | Responding to a buyer's finding | FAQ: "A buyer's inspector says the line needs replacing. What now?" | Low. A transaction scenario |
| `/for/hoa-communities/` | Sewer Inspection for HOA Communities \| The Sewer Pros | Evidence a board can actually make a decision on | Comparing vendor recommendations | FAQ: "Two vendors gave us different recommendations. Who is right?" | Low |
| `/about/` | About The Sewer Pros: Independent Sewer Inspection | Independent Sewer Inspection and Diagnostics | n/a | FAQ: "Can The Sewer Pros give me a second opinion on a sewer repair recommendation?" | Low |
| `/san-diego-ca/contact/` | Request Sewer Inspection in San Diego, CA | Contact The Sewer Pros in San Diego, CA | n/a | FAQ: "I was told I need major sewer work. Can you inspect first?" | Low |
| Market hubs | n/a | n/a | n/a | St. Louis: lateral repair program FAQs, "Can you get my lateral repair approved?". Las Vegas: "Can a sewer line be cleaned instead of replaced?" and "Should I get a second opinion before approving sewer replacement?". San Diego: lateral repair cost FAQs | Low |

### 1.2 Template-level repeats

The 144 service-plus-location pages carry the service's shared FAQ answers, so the overlap questions repeat in bulk:

| Question | Where it repeats |
|---|---|
| What should I ask before approving major sewer work? | 16 pre-purchase local pages |
| What should I ask for before approving major sewer work? | 16 preventative maintenance local pages |
| Does a sewer scope tell me if the pipe needs to be replaced? | 16 pre-purchase local pages |
| Should I get a second opinion before approving major sewer work? | 16 recurring backup local pages |
| Can a sewer line be cleaned instead of replaced? | 16 sewer cleaning local pages, plus one on each other service's St. Louis City page |

The fixed location block (16 location pages) and the shared `IndependentProcess` band (home, About, hubs, audiences, three service pages) carry the H2 "Get an Opinion From a Company That Does Not Sell Repairs or Replacements".

### 1.3 Cannibalization read

- **Closest competitor to the article:** the second opinion page's FAQ "What should I ask before approving sewer replacement?" (14 FAQs on that page). The article would carry the same question as its H1. To avoid two pages answering the same query, differentiate by intent: the second opinion page answers "can you review what I was given", the article answers "what do I ask the contractor before I sign".
- **Medium overlap:** the shared FAQ "What should I ask before approving major sewer work?" on the pre-purchase page and its 16 local pages. It is one paragraph, so the article can go deeper without competing, but the article should not repeat that paragraph verbatim.
- **No page uses a numbered question list for this topic.** The comparison page has a short bullet list ("How to get a useful inspection either way") and the report guide has a five-bullet "Questions worth asking". The article would be the first full list.
- **Queries to keep off the article** (and so avoid new cannibalization): replacement cost (no pricing anywhere), trenchless, pipe bursting and lining terms, and "free". No page covers those, and CLAUDE.md section 9 says repair-related topics are educational only.

## 2. How resources are built

### 2.1 Where and what

| Item | Fact |
|---|---|
| Route pattern | `/resources/{slug}/` from `app/resources/[resource]/page.tsx` (static, `generateStaticParams` from `resourceParams()` over the registry's content-ready resource pages) |
| Template | `components/templates/ResourcePageTemplate.tsx`. Order: hero (H1, optional date) > direct answer box > intro > editorial media (if any) > body (reading width) > FAQ ("Related questions") > Related resources > CTA band. FAQ before related is deliberate (18 section 115, DEC-081, DEC-082) |
| Content type | `ResourcePageContent` (`types/content.ts:2988`) extending `BasePageContent`: `hero {eyebrow?, title, intro?}`, `seoTitle?`, `metaDescription?`, `body?`, `faq?`, `relatedPageIds?`, `relatedTitle?`, `relatedDescriptions?`, `cta?`, plus `directAnswer?` and `dateModified?` |
| Where content lives | `resourceContent` map in `content/pages/core.tsx` (keys `res-camera-report`, `res-read-video`); St. Louis guides in `content/pages/st-louis-resources.tsx`. Both are merged in `content/index.ts` (lines 143-144) and listed in `authoredPageIds` (167-168). `getResourceContent(id)` serves the route |
| Registry record | `data/pages/approved-pages.ts` (end of file): `{ id: 'res-...', name, pageType: 'resource', pathname, status: 'launch', indexable: true, parentId: 'hub-resources' }` |
| Schema | `lib/schema/graph.ts:353`: resource and comparison pages emit WebPage plus an Article node plus BreadcrumbList; FAQPage is added from the same `faq` array (DEC-114). No author byline (15 section 49). `dateModified` only when supplied |
| Breadcrumb | Home > Resources > page name (`lib/links/link-rules.mjs:39`, parent is `hub-resources`) |
| Image | Optional via `data/business/editorial-images.ts` keyed by pathname; with no entry the page renders no image |

### 2.2 Model article: `res-read-video`

`/resources/how-to-read-a-sewer-camera-inspection-video/`, `content/pages/core.tsx` (~line 2038).

| Field | Value |
|---|---|
| registry id, name | `res-read-video`, "How to Read a Sewer Camera Inspection Video" |
| status, indexable, parent | launch, true, `hub-resources` |
| `hero.eyebrow` / `hero.title` | "Guide" / "How to Read a Sewer Camera Inspection Video" |
| `seoTitle` | none (title falls back to `hero.title`; the built title has no brand suffix) |
| `metaDescription` | 135 characters, one sentence |
| `directAnswer` | one `<p>`, answer-first |
| `body` | a fragment with 8 H2 sections (what you are looking at, standing water, joints, roots and intrusion, changes in the pipe itself, where along the line, what footage cannot tell you, if you are unsure) |
| `faq` | 3 entries (what it shows, how it works, "The video looks bad. Does that mean the line is failing?") |
| `relatedPageIds` | `res-camera-report`, `svc-sewer-camera-inspection`, `svc-pre-purchase-sewer-inspection`, `core-faq` |
| `cta`, `dateModified` | not set (default CTA "Want the condition documented?") |
| built H2s | the 8 body H2s plus "Related questions", "Related resources", "Want the condition documented?" |

## 3. List-format content support

- **Numbered lists:** supported. `Prose` (`components/ui/Prose.tsx`) styles `ol` as `list-decimal` and `ul` as `list-disc`, with `li` spacing, so a numbered question list in `body` needs no new component.
- **Question as a heading plus short answer:** supported with `h2` or `h3` and `p`, which `Prose` styles.
- **Callouts:** `Callout` (`components/ui/Callout.tsx`) has four kinds (`important`, `good-to-know`, `independent`, `buyer-tip`) and is already used in location and service-hub sections. It can be used inside `body`.
- **Direct answer box:** built in (`directAnswer`, left accent border).
- **Tables:** `Prose` styles `table`, `th`, `td`.
- **Definition lists:** `dl` is not styled by `Prose`. Use headings and paragraphs, or a table. A small style addition would be needed only if `dl` is wanted.
- **Verdict:** an existing component fits. No new component is needed.

## 4. How a resource page registers

| Surface | Mechanism | Action for a new article |
|---|---|---|
| Registry | `approved-pages.ts` record, parent `hub-resources` | add a record |
| Page counts | `EXPECTED_PAGE_COUNT` (200) and `EXPECTED_INDEXABLE_COUNT` (199) in `data/pages/pages.ts`, asserted at build | bump to 201 and 200 |
| Content | `resourceContent` in `core.tsx` (or a new file merged in `content/index.ts`, with `authoredPageIds`) | add the entry |
| Route | automatic from the registry plus content | none |
| Sitemap | automatic: indexable and content-ready | none (the second opinion page was picked up the same way) |
| Resources hub listing | `hub-resources` content in `core.tsx` (line ~1784) has an explicit `items` list; it names only `res-camera-report` and `res-read-video`, so the three St. Louis guides are not listed there | add an item with a one-line description. Also gives one inbound link |
| Breadcrumbs, schema | derived from the registry parent and `faq`; Article node automatic | none |
| Build list | `docs/04-master-page-build-list.md` (resource rows around line 1847) | add a row (documentation) |
| Editorial keyword gate | `scripts/lib/editorial-keywords.mjs`: resource URLs get a spec only through the `fixed` map (lines ~214-218, plus `PAGE_QUESTIONS`); a URL not in the map returns no spec and is not audited | add an entry so the title, meta, H1 and opening are checked; otherwise it is skipped silently |
| Canonical service coverage | `scripts/audit/clusters.mjs` `GUIDE_SERVICE`: "every ... guide ... page links to its canonical service in body, FAQ or card content" | add an entry (for example `second-opinion` or `sewer-camera-inspection` cluster) |
| Link rules | `scripts/lib/link-rules.mjs:71`: a resource must link to at least one `/services/*/` page. `verify-internal-links` also needs 2 or more inbound links from other indexable pages' content | add service links and two inbound links |
| Entity index | `scripts/audit/entities.mjs` (link audit mention patterns) | optional; not a verifier |
| Related guides on service pages | `GUIDE_RULES` in `lib/links/link-plan.ts`; capped at 3 per service page and enforced by `verify-internal-links` | see section 5.3 |

Verifiers affected by adding a page: the build-time count assertion in `pages.ts`, `verify-internal-links` (orphan check, 2-inbound check, canonical coverage, hierarchy, anchor gate), `verify-meta` and `verify-editorial-keywords` (meta lengths, uniqueness, and the keyword spec if added), and the removal audit (`audit-commercial.mjs`, which scans docs). No page verifier counts or pins resource pages by number.

## 5. Related-links rules and the anchor gate

### 5.1 The resource related slot

- `ResourcePageTemplate` renders `RelatedLinks` from `relatedPageIds`, titled "Related resources" by default, with optional `relatedDescriptions`.
- No cap or type restriction applies to the resource's own list: the model article lists a guide, two services and the FAQ page. The link text on those cards is the target page's name, not a chosen anchor.
- Links inside the body use `ApprovedInlineLink` (JSX), so the anchor is chosen by the author.
- The resource must link to at least one `/services/*/` page, and needs 2 or more inbound links from other indexable pages' content.

### 5.2 Anchors already used for `/services/independent-sewer-inspection-second-opinion/`

The gate (`scripts/audit/anchors.mjs`) counts collapsed rows. Today 11 rows, "second opinion" at 4 of 11 (36%).

| Anchor | Rows | Source |
|---|---|---|
| second opinion | 4 | home FAQ (also on the Services hub), About FAQ, comparison page "Our position", home sellers body |
| worth a second opinion | 1 | process band (6 pages) |
| how we review a report or video you already have | 1 | location block (16 pages) |
| ask for a second opinion on the footage | 1 | video guide |
| get an independent opinion on a report or video you already have | 1 | report guide |
| independent review of your inspection video | 1 | Recurring Backup band |
| about independent inspection | 1 | Sewer Cleaning band |
| get a second opinion | 1 | St. Louis hub FAQ |

Not counted by the gate (they are not prose links): the page title used by the "Related guides" slot and the audience service-list cards.

### 5.3 Implications for the article

- **No more exact "second opinion" rows.** One more row with that exact anchor gives 5 of 12, 41.7%, which fails the 40% limit. Any new link from the article to the second opinion page must use a different phrasing. A new distinct anchor takes the set to 12 rows with "second opinion" at 4 of 12 (33%).
- **A FAQ link counts as a row too**, keyed by its question. So use at most one in-body link and, if a second one is wanted, a different anchor.
- **Three unused anchor suggestions** (none contains "free", none is used today):
  1. "ask an independent inspector to review the footage"
  2. "have the findings reviewed independently"
  3. "independent review before you approve the work"
- **The second opinion page's "Related guides" slot is full** (`res-camera-report`, `res-read-video`, `cmp-independent-vs-repair`; cap 3 enforced by `verify-internal-links`). A new `GUIDE_RULES` entry for the article would push out the last rule in order. To show the article there, choose which one it replaces, or link it through another surface (the page's own body, or a "Keep reading" line). The service-page slot also only accepts `/resources/` and `/compare/` targets, which the article satisfies.
- **Reverse link is easy:** the article is a resource, so it may be added to `GUIDE_RULES` for service pages with free slots (Sewer Cleaning, Locating, Preventative, Drain Cleaning, Hydro Jetting each have 0 to 1 guides).

## 6. Candidate internal link targets

| Target | Route | Current title |
|---|---|---|
| Second opinion page (required) | `/services/independent-sewer-inspection-second-opinion/` | Sewer Second Opinion \| Independent Review \| The Sewer Pros |
| Comparison page | `/compare/independent-sewer-inspection-vs-repair-company/` | Independent Sewer Inspection vs. Repair: Second Opinion |
| Camera inspection | `/services/sewer-camera-inspection/` | Sewer Camera Inspection: What It Shows \| The Sewer Pros |
| Pre-purchase | `/services/pre-purchase-sewer-inspection/` | Pre-Purchase Sewer Inspection (Sewer Scope) \| The Sewer Pros |
| Cleaning and camera | `/services/sewer-cleaning-camera-inspection/` | Sewer Cleaning & Camera Inspection \| The Sewer Pros |
| Sewer cleaning (cleaning instead of replacing) | `/services/sewer-cleaning/` | Sewer Cleaning: Methods, Process and Limits \| The Sewer Pros |
| Hydro jetting | `/services/hydro-jetting/` | Hydro Jetting: How It Works and Its Limits \| The Sewer Pros |
| Recurring backup diagnosis | `/services/recurring-sewer-backup-diagnosis/` | Recurring Sewer Backup Diagnosis \| The Sewer Pros |
| Report guide | `/resources/what-is-in-a-sewer-camera-inspection-report/` | What Is Included in a Sewer Camera Inspection Report? |
| Video guide | `/resources/how-to-read-a-sewer-camera-inspection-video/` | How to Read a Sewer Camera Inspection Video |
| Home sellers (buyer's inspector scenario) | `/for/home-sellers/` | Sewer Inspection Before Selling a House \| The Sewer Pros |
| Home buyers | `/for/home-buyers/` | Sewer Inspection for Home Buyers \| The Sewer Pros |
| Real estate agents | `/for/real-estate-agents/` | Sewer Inspection for Real Estate Agents \| The Sewer Pros |
| Market hubs | `/st-louis-mo/`, `/san-diego-ca/`, `/las-vegas-nv/` | Sewer Inspection and Cleaning in St. Louis, MO; Sewer Inspection and Cleaning Across San Diego County; Sewer Inspection and Cleaning in the Las Vegas Valley |
| FAQ and resources hub | `/faq/`, `/resources/` | Sewer & Drain FAQs \| The Sewer Pros; Sewer & Drain Resources \| The Sewer Pros |

Do not link: repair or lining services (none exist), pricing pages (none exist), or market-specific lateral program pages unless the article is market scoped (cross-market link rule).

## 7. Constraints to carry into the brief

- No invented facts: no prices, cost ranges, percentages, response times, licences, offices or review counts. Say "we do not sell repairs or replacements".
- No "free" anywhere; no "nothing to sell", "nothing to gain" or "vested interest".
- Hyphens, not em dashes. Do not accuse contractors; the audience question list should be neutral ("ask for the proposal in writing", "ask which evidence it relies on").
- Do not repeat the existing one-paragraph answers verbatim (pre-purchase, preventative, second opinion FAQs); go deeper or reorganize them as a numbered list.
- Keep the article off cost, trenchless, pipe bursting and lining terms.
- Meta title about 60 characters, description about 155; the root template appends the brand, so do not hardcode it. No search volumes exist in the repo, so none may be claimed.
- Keep the DEC-150 and DEC-155 wording: a second opinion is a review of a report or video the customer already has; the business contacts the client and assesses what the client has; no formats, turnaround or limits promised.
