# Claude Code Build Prompt - Update the St. Louis Market Hub (Content, Design, Layout)

Page id: `mkt-st-louis-mo` (confirm in the registry) | Route: `/st-louis-mo/` | Content file: `content/pages/st-louis.tsx` | Template: `components/templates/MarketPageTemplate.tsx`
Reference pages: `st-louis-city.tsx`, `st-louis-chesterfield.tsx`, `st-louis-ballwin.tsx`, `st-louis-florissant.tsx`, `st-louis-st-charles.tsx`
Already shipped: `fffd5e1` (ZIP codes on the five community cards) and `ee4beb5` (uniform `layout: 'grid'` for those cards). Do not redo either. Start from current `main`.

---

## 0. Operating rules

- Push to `main`. The site is a build environment, not live, so no PR review gate and no live-page caution is needed.
- This repo's Next.js has breaking changes. Before writing code, skim the relevant guide in `node_modules/next/dist/docs/`.
- Read the minimum context: this prompt, `content/pages/st-louis.tsx`, `components/templates/MarketPageTemplate.tsx`, `components/sections/ServiceAreaSection.tsx`, `types/content.ts` (`MarketPageContent`, `ServiceAreaContent`), `docs/18-design-system.md`, and the five location content files for facts only.
- No em dashes in copy. Use hyphens.
- Never invent business facts: no pricing, guarantees, free offers, response times, emergency or same-day claims, licenses, years in business, review counts, or physical St. Louis office claims. Do not publish licensing claims about The Sewer Pros (DEC-072).
- The Sewer Pros does not perform sewer repair or replacement. Never imply otherwise.
- Municipal facts (fees, caps, boundaries, steps) belong to one city. Never restate one city's program terms for another.
- Do not touch the San Diego or Las Vegas hubs. Shared components may gain optional fields, but their output for those markets must not change.
- No new decision-log entry is needed for this work.

## 1. Goal

Bring the St. Louis hub up to the quality and structure of the five location pages it links to, without changing business facts. A visitor should be able to tell the five communities apart from the hub alone, find their ZIP code, and click through to the right page.

## 2. Audit first (15 minutes, then act)

Compare the hub's 14 template sections against the location pages and write the findings into your working notes, not into a repo doc. Check each of these:

1. **Section rhythm.** Run the density check the template already uses (`sectionRhythmIssues()`); the hub must report no run of three or more `standard` sections after your edits.
2. **Duplication.** Any sentence that appears on the hub and verbatim on a location page must be rewritten on the hub. The hub summarizes; the location page argues.
3. **Differentiation.** The hub intro, routing and experience copy should read as St. Louis, not a template with a city name swapped. Apply the location test in `CLAUDE.md` section 22.
4. **Internal links.** Every community mentioned in hub body copy links to its page through the approved-link layer (`pageId`), never a hard-coded href.
5. **Metadata.** Title, meta description and H1 are unique, accurate, and consistent with the page's keyword intent. The meta description is under 160 characters.
6. **FAQ and schema.** FAQ answers are answer-first (question, direct answer, support). Confirm `faqSchemaApproved` behavior matches the other St. Louis pages and that schema matches visible content.

## 3. Content changes (`content/pages/st-louis.tsx`)

### 3.1 Community card descriptions
Rewrite the five `serviceArea.cities.items[].description` strings so each one carries one fact that is true of that community only, taken from that page's own content file (for example its municipal lateral program, who runs its sewer system, or its housing character). Constraints:

- Two sentences maximum, about 30 words. Keep the card scannable.
- Read the fact from the page file, cite nothing new, and do not paraphrase a dollar figure or cap onto the card unless it is stated on the page.
- No outcome promises about any program. The business documents conditions; the municipality decides claims.
- Keep `ctaLabel` as "Explore [city]". Keep `title` as the city name with state.

### 3.2 ZIP codes
Keep the ZIPs added in `fffd5e1`. They are standard street-delivery ZIPs from public lookup sites. The St. Charles list (63301, 63303, 63304) rested on one source only; re-verify it against USPS or Census ZCTA data and fix it if it differs. Note in the content comment that some St. Louis City ZIPs straddle neighboring municipalities. If the 24-code City list makes that card visibly taller than the others in a rendered check, shorten it to the ZIPs that sit mostly inside the city limits, verified against the Census place-to-ZCTA relationship file.

### 3.3 Service-area intro
Tighten `serviceArea.intro` and `cities.intro` so they say, once, that the five pages are featured communities and not the limit of coverage. Keep the closing block ("Do not see your community listed?") and its contact action.

### 3.4 Hub body
Review `hero.intro`, `routing`, `experience`, the services section and the guides section for repeated phrasing and for any claim that is not a verified business fact. Fix what the audit finds. Do not rewrite sections that already pass.

## 4. Design and layout

- Cards stay in the uniform `grid` layout: three across on desktop with the short last row centered, two across on tablet, one on mobile. Verify at 375, 768, 1024 and 1440 pixel widths with a rendered check.
- Each card shows image, city name, description, ZIP codes, and the "Explore [city]" action, in that order. The whole card is one anchor; nothing inside is a second link.
- Text over images must keep AA contrast against the scrim at every card height. If ZIP text on the tallest card falls below AA, strengthen the scrim in `ServiceAreaSection.tsx` rather than shrinking the text.
- Equal card heights per row. If the City card's ZIP list forces a very uneven row, fix it through the ZIP list (section 3.2), not by changing the grid.
- Keep the shared `ServiceAreaSection` change backward compatible: `layout` stays optional with `'mosaic'` as the default, and San Diego and Las Vegas render unchanged.
- Check keyboard order (DOM order equals reading order), visible focus rings on every card, and reduced-motion behavior.

## 5. Validation

1. `npx tsc --noEmit` and `npx eslint` on every changed file pass.
2. `npm run build`. If the sandbox blocks Google Fonts, say so and rely on a local dev server (`npm run dev`) for the rendered checks instead of skipping them.
3. Load `/st-louis-mo/` and confirm: five cards, each linking to the correct route (`/st-louis-mo/st-louis-city/`, `/ballwin/`, `/florissant/`, `/chesterfield/`, `/st-charles/`, confirm exact slugs from the registry), no broken images, ZIPs visible, no horizontal scroll at 375 pixels.
4. Compare `/las-vegas/` and `/san-diego/` service-area sections before and after; they must be identical.
5. Grep the changed copy for em dashes and for banned claims (free, guarantee, 24/7, same-day, licensed, insured, years of experience).

## 6. Done means

- Hub copy differentiates the five communities from facts on their own pages.
- Cards meet the layout and contrast rules at all four widths.
- Metadata, FAQ and links pass the audit in section 2.
- Other markets are unchanged.
- One commit, pushed to `main`, with the message starting "Update St. Louis hub".

## 7. Report back (three lines)

What changed, anything you could not verify (name the source), and the commit hash.
