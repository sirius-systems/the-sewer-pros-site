# Anchor pass proposal: home page, hubs and service-page body copy (2026-11-22)

**Status: proposal only. Nothing in this report has been applied.** No page, component, data file, verifier, script or baseline was edited, and nothing was committed or pushed. The owner picks which proposals to apply.

Method: the editorial links to the four targets were read from the built site (`out/`) with the same row rules the gate uses (identical shared copy counts once per target, anchor and source section or FAQ question; sitewide modules excluded), and each sentence was traced to its source file. Every sentence was searched for in `scripts/verify-*.mjs` and `scripts/lib/*.mjs` for pinned wording.

## 1. Summary

| Target | Editorial rows | Top anchor now | Share now | Projected with Recommended only | Projected with Recommended and Optional | Under 40%? |
|---|---|---|---|---|---|---|
| Sewer Cleaning | 13 | "sewer cleaning" 9 | 69% | 5 of 13 = 38% | 4 of 13 = 31% | Yes, with little headroom |
| Hydro Jetting | 17 | "hydro jetting" 9 | 53% | 7 of 17 = 41% | 5 of 17 = 29% | Only with the Optional FAQ rows |
| Sewer Line Locating | 15 | "sewer line locating" 7 | 47% | 5 of 15 = 33% | 5 of 15 = 33% | Yes |
| Drain Cleaning | 11 | "drain cleaning" 7 | 64% | 4 of 11 = 36% | 4 of 11 = 36% | Yes |

Proposals: 17 entries in total: 9 Recommended (8 distinct edits, because P-C1 and P-H1 are the same edit), 4 Optional, and 4 Not worth it or keep. Skipped as pinned: 0 (the checks found no verifier that pins any proposed sentence). Proposals touching the home page hero: 0. One proposal (P-C1) changes the "How we work" band that appears on the home page, the three market hubs, the Locations hub and the Services hub; it is body copy, not the hero, but it is the most visible of the changes.

Two things the owner should know before approving:

- Row counts are what the gate measures, so a shared sentence that renders on six pages is one row. That is why a small number of edits moves the shares a lot.
- Two of the new phrases are natural but are not registered aliases in `data/services/master-service-registry.json`: "cleaning the sewer line" and "sewer line cleaning" for Sewer Cleaning (the registered aliases are "main sewer line cleaning", "rooter service", "sewer rooter", "sewer cabling"), and "drain-line cleaning" for Drain Cleaning (registered: "clogged drain cleaning", "drain clearing", "professional drain cleaning"). Hydro Jetting ("water jetting", "sewer jetting") and Sewer Line Locating ("line locating") variants are all registered aliases. Each proposed anchor still describes its destination accurately. "Main sewer line cleaning" is registered and could replace "sewer line cleaning" if the owner prefers.

## 2. Proposals by target

### 2.1 Sewer Cleaning (target `/services/sewer-cleaning/`)

Current rows by anchor: "sewer cleaning" 9 (home and hub "How we work" band, home call-to-action, Drain Cleaning definition, Hydro Jetting definition, and five FAQ answers), "cleaning the sewer line" 2, "sewer line cleaning" 2.

| ID | Page | File and line | Current sentence | Proposed sentence | Old anchor | New anchor | Rating | Reason |
|---|---|---|---|---|---|---|---|---|
| P-C1 | Home (How we work and the closing call-to-action), the 3 market hubs, Locations hub, Services hub | `data/business/process.tsx:153-165` | "We walk you through the footage and explain what it actually shows in plain language, what is a maintenance issue a sewer cleaning or hydro jetting can resolve, and what may point toward a structural issue worth a second opinion." | "We walk you through the footage and explain what it actually shows in plain language, what is a maintenance issue that cleaning the sewer line or water jetting can resolve, and what may point toward a structural issue worth a second opinion." | "sewer cleaning" and "hydro jetting" | "cleaning the sewer line" and "water jetting" | **Recommended** | One source feeds two rows per target (six hub pages plus the home call-to-action), so this is the highest-leverage change. Only "a" becomes "that" next to the anchors. Meaning, claims and the second-opinion wording are unchanged. Not the hero. |
| P-C2 | Drain Cleaning (and any local drain page that reuses the definition) | `content/pages/services.tsx:3022-3027` | "Sewer cleaning refers to the larger line that carries wastewater away from the building." | "Sewer line cleaning refers to the larger line that carries wastewater away from the building." | "Sewer cleaning" | "Sewer line cleaning" | **Recommended** | A defining sentence, but the contrast with "drain cleaning" in the sentence before it stays clear. The anchor now names the line it cleans. |
| P-C3 | Hydro Jetting definition | `content/pages/services.tsx:1354-1358` | "It is one of the methods used in sewer cleaning." | "It is one of the methods used in sewer line cleaning." | "sewer cleaning" | "sewer line cleaning" | **Recommended** | Same meaning; one extra word inside the anchor. |
| P-C4 | San Diego hub FAQ | `content/pages/san-diego.tsx:1297-1305` | "...while sewer cleaning addresses the main sewer line itself." | "...while {{sewer cleaning\|main sewer line cleaning\|sewer line cleaning}} addresses the main sewer line itself." | "sewer cleaning" | one of three, chosen per route | Optional | A hand-written FAQ link, so it belongs to the existing `{{a\|b\|c}}` system (FAQ answers are outside this pass). Moves one row; gives margin below 40%. "Main sewer line cleaning" is a registered alias. |
| P-C5 | Drain Cleaning FAQ | `content/pages/core.tsx:263-275` ("What is the difference between drain cleaning and sewer cleaning?") | "...Sewer cleaning clears the..." | open the sentence with `{{Sewer cleaning\|Sewer line cleaning}}` | "sewer cleaning" | per route | Not worth it | The sentence defines the term and sits in a two-term contrast; varying it hurts readability for one row. |

Projection: P-C1 to P-C3 take "sewer cleaning" from 9 rows to 5 of 13 (38%). With P-C4, 4 of 13 (31%). The Chula Vista FAQ row ("licensed plumber or sewer cleaning contractor") is a quote of the City brochure; it is a linker match, not a deliberate link, and is better removed than varied (listed under "Other" in section 5).

### 2.2 Hydro Jetting (target `/services/hydro-jetting/`)

Current rows: "hydro jetting" 9 (home band and call-to-action, and seven FAQ answers), "water jetting" 5, "sewer jetting" 3.

| ID | Page | File and line | Current sentence | Proposed sentence | Old anchor | New anchor | Rating | Reason |
|---|---|---|---|---|---|---|---|---|
| P-H1 | same pages as P-C1 | `data/business/process.tsx:153-165` | see P-C1 | see P-C1 (the second anchor becomes "water jetting") | "hydro jetting" | "water jetting" | **Recommended** | Part of the same edit as P-C1. "Water jetting" is a registered alias. Takes two rows off the bare name (9 to 7). |
| P-H2 | Recurring Sewer Backup Diagnosis FAQ (and its local pages) | `content/pages/services.tsx:4879` ("Will hydro jetting damage my sewer line...") | "...Jetting does not repair pipe defects. See hydro jetting." | "...Jetting does not repair pipe defects. See {{hydro jetting\|water jetting\|the hydro jetting service}}." | "hydro jetting" | per route | Optional | Existing variant system; keeps the bare name as one of three options. |
| P-H3 | Property Managers audience FAQ | `content/pages/audiences.tsx:667-672` | "Hydro jetting is a cleaning method for buildup." | "{{Water jetting\|Sewer jetting\|Hydro jetting}} is a cleaning method for buildup." | "Hydro jetting" | per route | Optional | Second sentence of the answer, so the opening sentence stays unlinked. Property-manager page, residential copy unchanged. |
| P-H4 | St. Louis City hydro jetting page FAQ | `content/pages/st-louis-city.tsx:723-724` | "...so cleaning or hydro jetting is chosen on evidence rather than assumption." | "...so cleaning or {{water jetting\|sewer jetting\|hydro jetting}} is chosen on evidence rather than assumption." | "hydro jetting" | per route | Optional | Same reasoning; the page keeps its approved meaning. |

Projection: Recommended only (P-H1) gives 7 of 17 (41%), still just over the line. Adding P-H3 and P-H4 (options listed so the bare name is last) and P-H2 gives 5 of 17 (29%) when the stable hash picks a non-bare option, and at worst 7 of 17 if it picks the bare option every time. The apply run should confirm the result in the gate and reorder the options if needed. Hydro Jetting cannot get under 40% from body copy alone.

### 2.3 Sewer Line Locating (target `/services/sewer-line-locating/`)

Current rows: "sewer line locating" 7, "line locating" 5, "locating the sewer line" 2, "sewer line locating service" 1. The bare name is held in place by the "How we work" closing sentence (a list of services, kept), two related-callout labels, and shared FAQ answers.

| ID | Page | File and line | Current sentence | Proposed sentence | Old anchor | New anchor | Rating | Reason |
|---|---|---|---|---|---|---|---|---|
| P-L1 | Pre-purchase and other local pages ("Can a sewer scope tell where a problem is in the yard?") | `content/pages/services.tsx:4242-4250` | "{{Sewer line locating\|Line locating\|Locating the sewer line}} can estimate a position from the surface..." | "{{Line locating\|Locating the sewer line\|Sewer line locating service}} can estimate a position from the surface..." | "Sewer line locating" (one of three) | "Line locating", "Locating the sewer line" or "Sewer line locating service" | **Recommended** | Drops the bare name from the option set, so one row leaves "sewer line locating". All three options are natural at the start of the sentence. |
| P-L2 | Camera inspection and other local pages ("Can a sewer camera tell how deep the pipe is?") | `content/pages/services.tsx:467-475` | "{{Sewer line locating\|Line locating\|Locating the sewer line}} can estimate a position..." | same change as P-L1 | "Sewer line locating" (one of three) | as P-L1 | **Recommended** | Same reasoning, second row. |
| P-L3 | Sewer Camera Inspection and Sewer Cleaning & Camera Inspection "related" callouts | `content/pages/services.tsx:182-186`, `:1949` | label "Sewer line locating" after a lead sentence that already says "Line locating is a separate service..." | no change | "Sewer line locating" | - | Not worth it (keep) | A callout label with explicit context; the bare name is the natural anchor. These two rows are the "keep" share. |
| P-L4 | How we work closing sentence | `data/business/process.tsx:183-196` | "...hydro jetting, sewer line locating, drain cleaning, and pre-purchase sewer inspection, all built around the same evidence-first process." | no change | "sewer line locating" and "drain cleaning" | - | Keep | A list of service names, where the registered name is the right anchor. Rewriting a list to vary it would hurt readability. |

Projection: P-L1 and P-L2 take the bare name from 7 rows to 5 of 15 (33%). That keeps the bare name in the closing list, the two callouts, the definition and one FAQ pointer, which is about one in three.

### 2.4 Drain Cleaning (target `/services/drain-cleaning/`)

Current rows: "drain cleaning" 7 (closing list, three "signs" paragraphs, two FAQ answers, the definition FAQ), plus four variants.

| ID | Page | File and line | Current sentence | Proposed sentence | Old anchor | New anchor | Rating | Reason |
|---|---|---|---|---|---|---|---|---|
| P-D1 | Hydro Jetting page (and local hydro pages), signs section | `content/pages/service-location-shared.ts:525-528` | "A single slow sink is often a drain cleaning question." | "A single slow sink is often a drain-line cleaning question." | "drain cleaning" | "drain-line cleaning" | **Recommended** | Hyphenated modifier, same meaning. |
| P-D2 | Sewer Cleaning page, signs section | `content/pages/services.tsx:714-718` | "If only one fixture is affected, drain cleaning may be the better fit." | "If only one fixture is affected, cleaning a single drain may be the better fit." | "drain cleaning" | "cleaning a single drain" | **Recommended** | Reads more naturally than the bare noun phrase and still names the service. Check that the anchor reads as drain cleaning in context (it does: one fixture, one drain). |
| P-D3 | Sewer Cleaning & Camera Inspection page, signs section | `content/pages/services.tsx:1878-1882` | "If only one fixture is affected, drain cleaning may be the better fit." | "If only one fixture is affected, drain-line cleaning may be the better fit." | "drain cleaning" | "drain-line cleaning" | **Recommended** | Uses a different variant from P-D2 so the two pages do not repeat each other. |
| P-D4 | How we work closing sentence | `data/business/process.tsx:183-196` | list sentence | no change | "drain cleaning" | - | Keep | See P-L4. |

Projection: P-D1 to P-D3 take the bare name from 7 rows to 4 of 11 (36%).

## 3. Skipped as pinned

No proposed sentence is pinned. Checked fragments, none found in any verifier: "maintenance issue", "one of the methods used in", "the better fit", "usually refers to fixture", "single slow sink", "sewer and drain specialists", "evidence-first process", "Sewer cleaning refers", "walk you through the footage". The one hit was the metadata description in `scripts/verify-sewer-line-locating-page.mjs:79` ("Sewer line locating helps estimate where..."), which is not an anchor and is not touched. The page-level verifiers for these pages check anchors only for in-page jump links, related-card destinations (set by `relatedPageIds`, not by anchor text), schema and image slots. The `verify-preventative-sewer-maintenance-page.mjs` wording rules are not affected: no proposal touches that page.

## 4. Targets that cannot reach 40%

- **Hydro Jetting** cannot go under 40% from the body copy alone (best case 41%). It needs at least two of the Optional FAQ proposals, which use the existing variant system. This is the only target that depends on them.
- **Sewer Cleaning** gets to 38% from the three Recommended body proposals, so it passes with about one row of headroom. P-C4 widens that to 31%.
- Locating and Drain Cleaning pass with the Recommended proposals alone.

## 5. Other findings (no proposal)

- The only other editorial links to the four targets on hubs are the same "How we work" sentences; the Services hub, Locations hub and market hub intros contain no other prose links to them. Card titles and headings are out of scope.
- No site-wide call-to-action component carries a hardcoded anchor string that is an exact-match repeat to these four targets. The sitewide "Read all customer reviews" and "free second opinion" links point to other targets.
- The Chula Vista FAQ row ("...contact a licensed plumber or sewer cleaning contractor") links a phrase from a City brochure quotation to our Sewer Cleaning page. It is a linker match rather than a deliberate link and reads as a misleading anchor. Suggest excluding quoted third-party text from the linker in a separate change.

## 6. Suggested apply plan

1. **Apply first (Recommended, one commit):** P-C1/P-H1 (one edit to `data/business/process.tsx`), P-C2, P-C3, P-L1, P-L2, P-D1, P-D2, P-D3. Rebuild and run `npm run verify`. Expected result: Sewer Cleaning 38%, Locating 33%, Drain 36%, Hydro 41%.
2. **Then, if the owner approves the Optional ones:** P-H2, P-H3, P-H4 (and P-C4). Rebuild; if Hydro Jetting is still above 40%, reorder the option lists so the bare name is last.
3. **Baseline update:** remove `/services/sewer-cleaning/`, `/services/sewer-line-locating/` and `/services/drain-cleaning/` from `scripts/lib/anchor-variety-baseline.json` once their measured shares are under 40%; lower the Hydro Jetting share to the measured value (remove it if under 40%).
4. **Verifier updates:** none required. If `data/business/process.tsx` copy is later pinned, the pin should use "cleaning the sewer line or water jetting".
5. **Owner sign-off:** P-C1/P-H1 changes visible copy on the home page and five hubs (not the hero), and uses two phrases that are natural but not registered aliases ("cleaning the sewer line" and "sewer line cleaning" for Sewer Cleaning). If the owner prefers registered aliases only, use "main sewer line cleaning" in place of "cleaning the sewer line" and "sewer line cleaning".
