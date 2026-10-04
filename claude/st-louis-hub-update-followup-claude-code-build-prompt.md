# Claude Code Follow-Up Prompt - Finish the St. Louis Market Hub Update

Route: `/st-louis-mo/` | Content file: `content/pages/st-louis.tsx` | Template: `components/templates/MarketPageTemplate.tsx`
Builds on: `claude/st-louis-hub-update-claude-code-build-prompt.md`. Start from current `main` (at least `a99793f`).
Already done, do not redo: ZIP codes on the community cards (`fffd5e1`), uniform grid layout (`ee4beb5`), community card copy and the two service-area intros (`a99793f`).

---

## 0. Operating rules

Same as the parent prompt. Push to `main`, no review gate. Skim `node_modules/next/dist/docs/` before writing code. No em dashes. Never invent business facts (no pricing, guarantees, free offers, response times, emergency or same-day claims, licenses, years in business, review counts, or office claims). The Sewer Pros does not perform repair or replacement. One city's municipal facts never appear on another city's card or page. Do not change the San Diego or Las Vegas output.

## 1. Goal

Close what the first pass skipped: the section 2 audit of the hub body, hub metadata and FAQ, the rendered and accessibility checks, and ZIP verification. Make only the changes the audit justifies; leave sections that already pass alone.

## 2. One copy fix first

In `serviceArea.cities.items`, the Ballwin description ends "A camera shows which side your line falls on." It does not say which side of what. Replace that sentence with one that matches what the Ballwin page actually says about the program boundary, for example that a camera inspection shows where on the line a defect sits. Re-read `content/pages/st-louis-ballwin.tsx` first and keep the card to two sentences, about 30 words.

## 3. Audit the hub body

Work through each item, note the result, and fix only failures.

1. **Section rhythm.** Run `sectionRhythmIssues()` (or the equivalent check the template exposes) on `/st-louis-mo/`. No run of three or more `standard` sections.
2. **Duplication with location pages.** Compare `hero.intro`, `routing`, `experience`, the services section, the local blocks (for example "Who is responsible for the lateral" and "Older lines, older materials") and the guides against the five location content files. Any sentence that appears verbatim on a location page gets rewritten on the hub. The hub summarizes; the location page argues.
3. **Location test.** Per `CLAUDE.md` section 22: if swapping "St. Louis" for "Las Vegas" would leave a hub paragraph unchanged, localize it with a fact that is true of St. Louis (MSD, the lateral-ownership split, the municipal program differences, the housing character already stated in the repo). Do not add any new municipal figure unless it is already sourced in a location content file.
4. **Internal links.** Every community named in hub body copy links through `pageId` and the approved-link layer, never a hard-coded href. List any mention that should be a link and is not.
5. **Claims scan.** Grep the hub content for free, guarantee, 24/7, emergency, same-day, licensed, insured, certified, years of experience, and any dollar amount. Anything that is not a verified business fact or a municipality's own stated term, attributed to that municipality, comes out.

## 4. Metadata and FAQ

- Title, `metaDescription` and H1 are unique across the site, match the page's intent (sewer camera inspection and cleaning across the St. Louis area, independent of repair), and the meta description is under 160 characters. Check against the other two market hubs so the three read as a set without being token-swapped.
- Every FAQ answer is answer-first: the direct answer in the first sentence, support after. Rewrite any that open with background.
- Confirm FAQPage markup is on for this page the way it is on the St. Louis location pages (`faqSchemaApproved`, DEC-108 and DEC-113), and that the schema matches the visible FAQ text exactly.

## 5. Rendered and accessibility checks

Use a local dev server (`npm run dev`). If the sandbox blocks Google Fonts, say so and use the dev server rather than skipping.

1. Load `/st-louis-mo/` at 375, 768, 1024 and 1440 pixels. Report the numbers for each, including 1440, which was not captured last time: no horizontal scroll, five cards, equal card heights per row, the last row centered at 1024 and above.
2. Contrast: measure white text on the scrim over each of the five card images, ZIP line and description included, against AA (4.5:1). If any fails, strengthen the scrim in `ServiceAreaSection.tsx` for the grid layout only.
3. Keyboard: tab through the five cards. DOM order equals reading order, and each card shows a visible focus ring on its anchor.
4. Reduced motion: with `prefers-reduced-motion: reduce`, the arrow nudge and any hover transition do not animate.
5. Click each card and confirm it lands on the right route (confirm slugs from the registry): St. Louis City, Ballwin, Florissant, Chesterfield, St. Charles.
6. Compare the Las Vegas and San Diego service-area sections to `main` before this work. They must be byte-identical in rendered markup.

## 6. ZIP verification

Re-check the two lists that rested on one secondary source (zip-codes.com, USPS-derived):

- **St. Charles** (63301, 63303, 63304): verify against USPS city-state lookup or Census ZCTA data. Confirm 63302 is PO Box only before leaving it out.
- **St. Louis City** (24 ZIPs): verify against the Census place-to-ZCTA relationship file for the City of St. Louis. If a ZIP overlaps the city by a trivial share, drop it, and keep the existing straddle comment accurate. Keep the card within a visibly reasonable height; if the list is long, show the ZIPs that sit mostly inside the city limits.

Name the source for each list in the content comment. If a source cannot be reached from the sandbox, say so and leave the list as is.

## 7. Validation

`npx tsc --noEmit`, `npx eslint` on every changed file, and `npm run build` (or the dev-server fallback above) pass. Grep the changed copy for em dashes. One commit starting "Finish St. Louis hub update", pushed to `main`.

## 8. Report back (five lines maximum)

What changed, the numbers from the 1440 check, contrast results, which ZIP lists were verified and against what, and the commit hash. Name anything you could not verify.
