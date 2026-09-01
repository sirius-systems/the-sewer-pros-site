# Power Page Template Port — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Adopt the `power` composition system as the section architecture for all 12 page templates, without introducing a single fabricated claim or a single new indexable route.

**Architecture:** Extend `components/sections/` with 5 new text-capable sections and 3 data-gated sections, edit 3 existing components, then rewrite each of the 12 templates as an explicit JSX sequence with a hand-written density array. Claim-bearing content enters only through governed data modules under `data/` that cite a source per item. Approach A from the spec: no shared "page tail" abstraction, because the explicit per-template density array is the mechanism that keeps a 13-section page from reading as flat.

**Tech Stack:** Next 16.3.1 (App Router, `output: 'export'`, Turbopack), React 19.2.8, Tailwind 4 (CSS-first `@theme inline`, no `tailwind.config.ts`), TypeScript 5. All components are Server Components; nothing added here ships client JavaScript.

**Spec:** `docs/superpowers/specs/2026-08-23-power-page-templates-design.md`

---

## Deviations from the default workflow, and why

**No TDD loop.** This repo has no test runner — no vitest, no jest, no `test` script, zero `*.test.*` files. CLAUDE.md §83 defines build validation as TypeScript validity, production build, route generation, and no broken imports. Adding a test framework is out of scope for a presentation-layer port and would contradict §56 on unnecessary dependencies. Each task's verification is therefore:

```
npm run typecheck   # tsc --noEmit
npm run lint
npm run build       # also proves route generation
```

plus the existing `sectionRhythmIssues()` build warnings surfaced by `PageShell`, plus route-set parity (Task 1), plus rendered inspection in the browser at the end.

**Spec amendment folded in — card-section differentiation.** `18` §5.6 reads, verbatim:

> Cards are an organizational tool, not the default layout. A page built entirely from card grids is the single strongest visual signal of a templated or AI-generated site, regardless of how restrained the individual card styling is.
> * Do not force an item count into a grid it doesn't divide evenly into [...]
> * **Vary composition pattern and density between adjacent sections. See Appendix A for the named pattern vocabulary.**

The `power` map is **not** "entirely card grids" — it alternates card sections with hero, editorial split, process band, authority band, testimonial, and form. So the prohibition in sentence one is not triggered, and the governing instruction is bullet two: **vary the pattern between adjacent sections.**

Resolution applied throughout this plan: **keep every card-based section as cards, and give each a visually distinct treatment** drawn from Appendix A, varying column count, grid evenness, card shape, surface, and link behaviour. No two card sections on a page may read as the same component with different text.

| `power` section | Appendix A pattern | Distinct treatment |
|---|---|---|
| Intent-routing (homepage) | **Service/feature grid** (even) | 3-col even, whole-surface `LinkCard`, full border, title + description. These genuinely are equal-weight destinations. |
| Services (homepage) | **Service mosaic** | Deliberately uneven — flagship Sewer Camera Inspection spans 2 columns and gets more vertical space; supporting services single-width. Appendix A names this pattern and names that exact flagship. Immediately distinct from the even routing grid directly above it, which is power's own "keep routing and services visually distinct" requirement made structural. |
| Common problems | **Service/feature grid** | 2-col at 4 items, 3-col at 6. Compact, static (no link), symptom-led copy, full border. |
| What's included | **Service/feature grid** | 2-col regardless of count, `muted` surface, top-rule card instead of full border, tighter padding. Reads as a spec sheet against the problem grid's diagnostic cards. |
| Results gallery | **Image grid** (data-gated) | 4-up, fixed aspect ratio, image-led — no card chrome at all. |
| Related services | **Service/feature grid, horizontal** | Reworked from vertical to **horizontal cards**: title and description sit beside a leading rule rather than stacked, at a wider aspect ratio, 3-up. The last card section on the page must not repeat the shape of the first. |

**Differentiation axes available today:** column count, grid evenness (even vs. mosaic), card shape (full border vs. top rule vs. leading rule), surface (`default` vs. `muted`), **orientation (vertical vs. horizontal)**, and density.

**Axes not yet available:** *image-led* requires approved photography, and `public/` is empty (`18` §28-34). *Icon-led* is permitted only where an icon carries meaning the adjacent text does not — §27 and Appendix B flag icons "used as decoration next to text that already communicates the idea on its own," and §56 warns against large icon libraries. Neither is used in this port; both become available later without changing any composition.

Two constraints that survive independently of the "entirely" wording, and are satisfied above:

- **Line 1188 / line 3010** (Appendix B failure check): "A page family that uses cards for every list-like section is the pattern to avoid." Satisfied — `TrustBar` is a band, `AuthorityBand`'s proof points are a plain list, `CoverageSection` is a plain list, and `ProcessSteps` is a numbered band. List-like is not universally carded.
- **§5.6 bullet 1** (orphan rows) is mechanical, not stylistic. The homepage passes **9** services, which divides cleanly into 3 columns; the mosaic is chosen for visual differentiation, not to dodge an orphan row. `CardGrid` still warns if any count/column pair mismatches.

**No decorative icons.** §27 and Appendix B both flag "icons used as decoration next to text that already communicates the idea on its own," and §56 warns against large icon libraries. Differentiation comes from column count, grid evenness, card shape, surface, and density — not from adding iconography.

---

## File structure

**Create:**

| Path | Responsibility |
|---|---|
| `data/business/proof.ts` | Governed, currently-empty proof + testimonial data. Every item cites a source. |
| `data/business/authority.ts` | Authority-band proof points. Every item cites a doc section. |
| `components/sections/RoutingCards.tsx` | Homepage intent-routing card grid |
| `components/sections/ProblemGrid.tsx` | "When you may need X" card grid |
| `components/sections/InclusionsGrid.tsx` | "What's included" card grid, spec-sheet treatment |
| `components/sections/AuthorityBand.tsx` | Dark brand band, 3-4 proof points |
| `components/sections/CoverageSection.tsx` | Served communities + availability statement |
| `components/sections/ProofGallery.tsx` | Data-gated image grid |
| `components/sections/TestimonialBand.tsx` | Data-gated testimonial |
| `components/sections/LeadFormSection.tsx` | Data-gated form slot |

**Modify:** `components/sections/index.ts`, `components/sections/TrustBar.tsx`, `components/sections/CtaSection.tsx`, `components/layout/SiteHeader.tsx`, `types/content.ts`, all 12 files in `components/templates/`, `docs/18-design-system.md`, `docs/22-decisions-change-log.md`.

---

## Task 0: Baseline and housekeeping

**Files:** `CLAUDE.md` (already modified on disk by `next dev`)

- [ ] **Step 1: Commit the Next-generated CLAUDE.md block**

`next dev` appended a `nextjs-agent-rules` block and regenerates it on every dev run. Committing keeps the tree clean.

```bash
git add CLAUDE.md
git commit -m "chore: commit next dev generated agent rules block"
```

- [ ] **Step 2: Capture the baseline route manifest**

This is the evidence for the spec's §10.2 route-parity check. Run a production build first so `out/` is current.

```bash
npm run build
find out -name "*.html" | sort > /tmp/routes-before.txt
wc -l < /tmp/routes-before.txt
```

Expected: a non-zero count. Record it. Do not commit this file.

- [ ] **Step 3: Read the Next 16 App Router docs for breaking changes**

The generated CLAUDE.md block warns that this Next version differs from training data.

```bash
ls node_modules/next/dist/docs/01-app/
```

Read anything covering Server Components, `Link`, and metadata before writing component code. Note anything that contradicts assumptions in this plan.

---

## Task 1: Governed proof data modules

**Files:**
- Create: `data/business/proof.ts`
- Create: `data/business/authority.ts`
- Modify: `data/business/index.ts`

- [ ] **Step 1: Create `data/business/proof.ts`**

Both arrays ship empty. The types are the point: they make a source citation mandatory, so a later contributor cannot add a testimonial without naming where it came from.

```ts
/**
 * Proof data — gallery images and testimonials.
 *
 * Authority: docs/18-design-system.md §28-34 (photography), §69-70 (reviews)
 *            docs/01-business-brand-foundation.md §35
 *            CLAUDE.md §23, §76, §77
 *
 * ===========================================================================
 * BOTH ARRAYS ARE DELIBERATELY EMPTY
 * ===========================================================================
 * No approved photography exists (18 §28-34; §34 rules out AI imagery
 * and staged stock). No verified review data exists (01 §35, 18 §69-70,
 * CLAUDE.md §77).
 *
 * The sections that read these arrays render `null` while they are
 * empty. That is the intended state, not an unfinished one.
 *
 * ⚠ DO NOT POPULATE EITHER ARRAY WITHOUT REAL, ATTRIBUTABLE SOURCE
 * MATERIAL. `source` is required precisely so that adding an invented
 * item requires writing a citation that does not exist.
 */

/** One gallery image. `source` names where the asset came from. */
export interface ProofImage {
  src: string
  /** Meaningful alt text (CLAUDE.md §55, §57). */
  alt: string
  /**
   * Caption. 18 §31: label example footage clearly and never imply a
   * frame belongs to a specific customer's job unless it does.
   */
  caption: string
  /** Provenance of the asset. Required. */
  source: string
}

/** No approved photography exists — 18 §28-34. */
export const proofImages: readonly ProofImage[] = []

/** One verified testimonial. */
export interface Testimonial {
  quote: string
  /** First name or initial, per 18 §69-70. Never a full name. */
  attribution: string
  /** Where the review was collected. Required. */
  source: string
}

/** No verified review data exists — 01 §35, CLAUDE.md §77. */
export const testimonials: readonly Testimonial[] = []
```

- [ ] **Step 2: Create `data/business/authority.ts`**

Unlike Step 1 these are populated, because each restates a documented fact about the business model rather than a performance or credential claim. Before committing, grep each cited section and confirm it says what the citation claims.

```ts
/**
 * Authority-band proof points.
 *
 * Authority: docs/01-business-brand-foundation.md §3, §4
 *            docs/18-design-system.md §64, §65, §72
 *            CLAUDE.md §23, §32, §71, §72
 *
 * ===========================================================================
 * MODEL AND PROCESS FACTS ONLY
 * ===========================================================================
 * Same rule as `trustStatements` in `positioning.ts`: every item states
 * the business MODEL or the documented PROCESS, both of which are
 * written down, rather than performance, credentials, response times,
 * ratings, or experience, which are not (01 §35, CLAUDE.md §23).
 *
 * No superlatives (CLAUDE.md §71). No accusation of competitors
 * (CLAUDE.md §32, 01 §72) — contrasting incentive structures is
 * description; contrasting integrity is not.
 *
 * Distinct from `trustStatements`, which states SCOPE. These state how
 * the work is done.
 */

export interface AuthorityProofPoint {
  label: string
  detail: string
  /** The document section that establishes this as fact. Required. */
  source: string
}

export const authorityProofPoints: readonly AuthorityProofPoint[] = [
  {
    label: 'Inspection is the product',
    detail:
      'The inspection is what you are paying for, not a step toward selling you a repair.',
    source: '01 §3 — core positioning',
  },
  {
    label: 'You see the evidence',
    detail:
      'Findings are documented so you can look at the condition of the line yourself.',
    source: '01 §4, 18 §64 — evidence before decision',
  },
  {
    label: 'Sewer and drain specialists',
    detail:
      'Sewer inspection, diagnostics, locating, and cleaning, rather than general plumbing.',
    source: '01 §2.2 — business category',
  },
  {
    label: 'The decision stays yours',
    detail:
      'If the line needs work beyond cleaning, you decide who does it and when.',
    source: '01 §3, 18 §72 — independent positioning',
  },
]
```

- [ ] **Step 3: Verify every citation**

For each `source` string above, open the cited section and confirm it supports the claim. Any item that cannot be supported is deleted, not reworded.

```bash
grep -n "§3\b\|§4\b" docs/01-business-brand-foundation.md | head -20
grep -n "^# 64\.\|^# 65\.\|^# 72\." docs/18-design-system.md
```

Expected: each cited section exists and supports its item. `AuthorityBand` (Task 5) renders with 3 or 4 items; if verification leaves fewer than 3, remove the section from the template maps rather than padding it.

- [ ] **Step 4: Re-export from the barrel**

Append to `data/business/index.ts`, matching the existing export style in that file:

```ts
export { proofImages, testimonials } from './proof'
export type { ProofImage, Testimonial } from './proof'

export { authorityProofPoints } from './authority'
export type { AuthorityProofPoint } from './authority'
```

- [ ] **Step 5: Verify and commit**

```bash
npm run typecheck && npm run lint
git add data/business/
git commit -m "feat(data): governed proof, testimonial, and authority modules"
```

Expected: both commands exit 0.

---

## Task 2: `ProblemGrid`

**Files:** Create `components/sections/ProblemGrid.tsx`

- [ ] **Step 1: Write the component**

```tsx
import { Section, Card, CardGrid, type SectionDensity } from '@/components/ui'
import { SectionHeading } from './SectionHeading'

/**
 * Problem-recognition grid.
 *
 * Governed by docs/18-design-system.md §5.6, §70, §155 and Appendix A;
 * docs/17-conversion-architecture.md §19; CLAUDE.md §70.
 *
 * `power/service-page.md` item 5: "4-6 cards naming a real symptom,
 * scenario, risk, or customer goal."
 *
 * ===========================================================================
 * THIS IS THE SECTION MOST LIKELY TO DRIFT INTO FEAR MARKETING
 * ===========================================================================
 * 18 §70 and CLAUDE.md §70 forbid alarm copy. The reference style's
 * register is "urgent, visitor mid-problem"; this project's is calm and
 * factual, and per CLAUDE.md §98 the project rule wins.
 *
 *   Good: "Recurring backups can indicate a condition worth
 *          investigating with a sewer camera."
 *   Bad:  "Your sewer could collapse at any moment."
 *
 * Items are passed by the composing page rather than sourced centrally,
 * because 14 §21's substitution tests require genuinely different
 * symptoms per service. They describe conditions, not claims about the
 * business, which is why this section does not require a `source`
 * field the way the proof modules do.
 *
 * One of at most TWO card grids per page (18 §5.6).
 */
export interface ProblemGridItem {
  title: string
  description: string
}

export interface ProblemGridProps {
  /** Overrides natural density — only the template knows the sequence (18 §108). */
  density?: SectionDensity
  id?: string
  eyebrow?: string
  title: string
  intro?: string
  items: readonly ProblemGridItem[]
}

export function ProblemGrid({
  density = 'standard',
  id = 'when-you-may-need-this',
  eyebrow,
  title,
  intro,
  items,
}: ProblemGridProps) {
  if (items.length === 0) return null

  // 18 §5.6 forbids forcing a count into a grid it does not divide
  // into. CardGrid warns; choosing the divisor here avoids the warning
  // for the counts this section actually receives (4 or 6).
  const columns = items.length % 3 === 0 ? 3 : 2

  return (
    <Section density={density} labelledBy={id}>
      <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

      <CardGrid columns={columns} itemCount={items.length} className="mt-10">
        {items.map((item) => (
          <Card key={item.title}>
            <h3 className="text-h4 font-medium tracking-tight text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
          </Card>
        ))}
      </CardGrid>
    </Section>
  )
}
```

- [ ] **Step 2: Export it**

Add to `components/sections/index.ts`:

```ts
export { ProblemGrid } from './ProblemGrid'
export type { ProblemGridProps, ProblemGridItem } from './ProblemGrid'
```

- [ ] **Step 3: Verify and commit**

```bash
npm run typecheck && npm run lint
git add components/sections/ProblemGrid.tsx components/sections/index.ts
git commit -m "feat(sections): add ProblemGrid"
```

---

## Task 3: `InclusionsGrid`

**Files:** Create `components/sections/InclusionsGrid.tsx`

- [ ] **Step 1: Write the component**

A card grid, as `power` specifies. Differentiation from `ProblemGrid` comes from treatment, not from changing pattern: fixed 2 columns regardless of count, `muted` surface, **top-rule cards instead of full-border cards**, tighter padding. It should read as a spec sheet beside the problem grid's diagnostic cards.

```tsx
import { Section, CardGrid, type SectionDensity } from '@/components/ui'
import { SectionHeading } from './SectionHeading'

/**
 * Deliverables grid — "what's included".
 *
 * Governed by docs/18-design-system.md §5.6, §51, §155 and Appendix A
 * ("Service/feature grid"); docs/06-master-service-registry.md;
 * CLAUDE.md §4, §23.
 *
 * `power/service-page.md` item 6: a 4-6 card grid of practical
 * deliverables, deliberately distinct from item 5's problem grid.
 *
 * ===========================================================================
 * WHY THIS STAYS A CARD GRID
 * ===========================================================================
 * 18 §5.6's prohibition is on a page built ENTIRELY from card grids.
 * This page is not: hero, editorial split, process band, authority
 * band, testimonial, and form all sit between the card sections. The
 * governing rule here is §5.6's second bullet — "vary composition
 * pattern and density between adjacent sections."
 *
 * So the differentiation is in TREATMENT, not pattern:
 *
 *   ProblemGrid       2 or 3 cols by count, full border, default surface
 *   InclusionsGrid    always 2 cols, top rule only, muted surface, denser
 *
 * That preserves power's conversion composition deliberately, rather
 * than defaulting away from it. See the plan's amendment table and the
 * DEC entry for the full reasoning.
 *
 * ⚠ Deliverables must correspond to services The Sewer Pros actually
 * performs (06). CLAUDE.md §4: no repair, replacement, lining, or
 * excavation deliverables unless formally added to the registry.
 */
export interface InclusionsGridItem {
  title: string
  description: string
}

export interface InclusionsGridProps {
  /** Overrides natural density — only the template knows the sequence (18 §108). */
  density?: SectionDensity
  id?: string
  eyebrow?: string
  title: string
  intro?: string
  items: readonly InclusionsGridItem[]
}

export function InclusionsGrid({
  density = 'dense',
  id = 'whats-included',
  eyebrow,
  title,
  intro,
  items,
}: InclusionsGridProps) {
  if (items.length === 0) return null

  return (
    <Section density={density} surface="muted" labelledBy={id}>
      <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

      {/*
        Always 2 columns, never 3. ProblemGrid varies its column count
        by item count; holding this one fixed is part of what keeps the
        two grids from reading as the same component (18 §5.6 bullet 2).
      */}
      <CardGrid columns={2} itemCount={items.length} className="mt-10">
        {items.map((item) => (
          // Top rule rather than the full-border `Card`, and tighter
          // padding — the spec-sheet treatment described in the header.
          <div key={item.title} className="border-t border-foreground/20 pt-4">
            <h3 className="text-base font-medium text-foreground">
              {item.title}
            </h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </CardGrid>
    </Section>
  )
}
```

Note: `CardGrid` warns when `itemCount % columns !== 0`. With `columns={2}` an odd item count warns. `power` specifies 4-6 inclusions, so even counts are the norm; if a page genuinely needs 5, the warning is correct and that page's content should be revised rather than the check suppressed.

- [ ] **Step 2: Export it**

```ts
export { InclusionsGrid } from './InclusionsGrid'
export type { InclusionsGridProps, InclusionsGridItem } from './InclusionsGrid'
```

- [ ] **Step 3: Verify visual divergence from `ProblemGrid`**

Render a page carrying both and confirm they do not read as the same component. They must differ on at least three axes: column count, card shape, and surface.

- [ ] **Step 4: Verify and commit**

```bash
npm run typecheck && npm run lint
git add components/sections/InclusionsGrid.tsx components/sections/index.ts
git commit -m "feat(sections): add InclusionsGrid with spec-sheet card treatment"
```

---

## Task 4: `RoutingCards`

**Files:** Create `components/sections/RoutingCards.tsx`

- [ ] **Step 1: Write the component**

```tsx
import { Section, LinkCard, CardGrid, type SectionDensity } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { resolveLinkableOnly } from '@/lib/links/approved-link'
import type { PageId } from '@/types'

/**
 * Intent-routing cards — "How can we help?"
 *
 * Governed by docs/18-design-system.md §5.6, §47, §48;
 * docs/16-internal-linking-strategy.md; CLAUDE.md §16, §37, §48.
 *
 * `power/homepage.md` item 3, plus its composition note: routing is
 * DECISION SUPPORT toward Services / Areas / Audience / Contact, and
 * must stay visually distinct from the services catalog below it. Here
 * that separation is structural — this section is the page's card grid,
 * and `ServiceIndex` below it is an uneven mosaic (18 §5.6 bullet 2).
 *
 * Destinations are approved page ids resolved through
 * `resolveLinkableOnly`, never hrefs. CLAUDE.md §37: never surface a
 * URL solely because it could exist.
 */
export interface RoutingCardItem {
  pageId: PageId
  description: string
}

export interface RoutingCardsProps {
  /** Overrides natural density — only the template knows the sequence (18 §108). */
  density?: SectionDensity
  id?: string
  eyebrow?: string
  title: string
  intro?: string
  items: readonly RoutingCardItem[]
}

export function RoutingCards({
  density = 'standard',
  id = 'how-we-can-help',
  eyebrow,
  title,
  intro,
  items,
}: RoutingCardsProps) {
  const links = resolveLinkableOnly(items.map((item) => item.pageId))
  const descriptions = new Map(
    items.map((item) => [item.pageId, item.description]),
  )

  if (links.length === 0) return null

  const columns = links.length % 3 === 0 ? 3 : 2

  return (
    <Section density={density} labelledBy={id}>
      <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

      <CardGrid columns={columns} itemCount={links.length} className="mt-10">
        {links.map((link) => (
          <LinkCard
            key={link.pageId}
            href={link.href}
            actionLabel={link.label}
          >
            <h3 className="text-h4 font-medium tracking-tight text-foreground">
              {link.label}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {descriptions.get(link.pageId)}
            </p>
          </LinkCard>
        ))}
      </CardGrid>
    </Section>
  )
}
```

- [ ] **Step 2: Export and commit**

```ts
export { RoutingCards } from './RoutingCards'
export type { RoutingCardsProps, RoutingCardItem } from './RoutingCards'
```

```bash
npm run typecheck && npm run lint
git add components/sections/RoutingCards.tsx components/sections/index.ts
git commit -m "feat(sections): add RoutingCards"
```

---

## Task 5: `AuthorityBand`

**Files:** Create `components/sections/AuthorityBand.tsx`

- [ ] **Step 1: Write the component**

```tsx
import { Section, ButtonLink, type SectionDensity } from '@/components/ui'
import { PRIMARY_CTA } from '@/components/layout/cta'
import { authorityProofPoints } from '@/data/business'

/**
 * Authority band — the page's single dark section.
 *
 * Governed by docs/18-design-system.md §11, §63, §71, §72, §108;
 * CLAUDE.md §23, §32, §71.
 *
 * `power` places a "deep brand-color or charcoal band" on every type.
 *
 * ===========================================================================
 * ONE PER PAGE, NEVER ADJACENT TO ANOTHER DARK SECTION
 * ===========================================================================
 * `_base/homepage.md` anti-patterns: "Don't stack two dark sections
 * back to back." 18 §11: surfaces carry meaning, not decoration. The
 * final `CtaSection variant="panel"` is the only other brand surface,
 * so every template map must keep at least one non-brand section
 * between them.
 *
 * Copy comes from `authorityProofPoints`, where each item cites the
 * document establishing it. Ad-hoc strings are deliberately not
 * accepted — that is the route by which an unverifiable claim reaches
 * the page (same rule as `TrustBar`).
 */
export interface AuthorityBandProps {
  /** Overrides natural density — only the template knows the sequence (18 §108). */
  density?: SectionDensity
  id?: string
  eyebrow?: string
  title: string
  intro?: string
  /** Pass `null` to omit the CTA where the page already converts nearby. */
  action?: { href: string; label: string } | null
}

export function AuthorityBand({
  density = 'standard',
  id = 'why-the-sewer-pros',
  eyebrow,
  title,
  intro,
  action = PRIMARY_CTA,
}: AuthorityBandProps) {
  if (authorityProofPoints.length < 3) return null

  return (
    <Section density={density} surface="brand" labelledBy={id}>
      {eyebrow !== undefined && (
        <p className="text-caption uppercase tracking-wide opacity-70">
          {eyebrow}
        </p>
      )}

      <h2
        id={id}
        className="mt-2 max-w-2xl text-h2 font-semibold tracking-tight text-balance"
      >
        {title}
      </h2>

      {intro !== undefined && (
        <p className="mt-4 max-w-prose text-body-lg opacity-90">{intro}</p>
      )}

      <ul className="mt-10 grid gap-8 sm:grid-cols-2">
        {authorityProofPoints.map((point) => (
          <li key={point.label}>
            <h3 className="text-base font-medium">{point.label}</h3>
            <p className="mt-1 text-sm leading-6 opacity-80">{point.detail}</p>
          </li>
        ))}
      </ul>

      {action !== null && (
        <div className="mt-10">
          <ButtonLink href={action.href} variant="secondary">
            {action.label}
          </ButtonLink>
        </div>
      )}
    </Section>
  )
}
```

- [ ] **Step 2: Confirm `ButtonLink` has a `secondary` variant**

```bash
grep -n "variant" components/ui/Button.tsx | head -20
```

If `secondary` is not an available variant, use the variant that renders legibly on a brand surface and note the substitution in the component header. Do not invent a variant name.

- [ ] **Step 3: Export, verify contrast, commit**

```ts
export { AuthorityBand } from './AuthorityBand'
export type { AuthorityBandProps } from './AuthorityBand'
```

Contrast check (CLAUDE.md §55): `--brand` is `#1f2937` against `--brand-foreground` `#ffffff` — ratio ~14.7:1, passes AA. The `opacity-80` body text drops this to roughly 11:1, still passing. Record this; it must be re-checked when PENDING-005 resolves.

```bash
npm run typecheck && npm run lint
git add components/sections/AuthorityBand.tsx components/sections/index.ts
git commit -m "feat(sections): add AuthorityBand"
```

---

## Task 6: `CoverageSection`

**Files:** Create `components/sections/CoverageSection.tsx`

- [ ] **Step 1: Write the component**

```tsx
import { Section, type SectionDensity } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { resolveLinkableOnly } from '@/lib/links/approved-link'
import Link from 'next/link'
import type { PageId } from '@/types'

/**
 * Service-area coverage.
 *
 * Governed by docs/07-master-location-registry.md;
 * docs/16-internal-linking-strategy.md; docs/22-decisions-change-log.md
 * PENDING-002; CLAUDE.md §26, §29, §30, §48.
 *
 * ===========================================================================
 * NO MAP, NO ADDRESS, NO DIRECTIONS
 * ===========================================================================
 * `power/location-page.md` offers a map/directions/hours card and its
 * own composition note says to confirm the business model first.
 * PENDING-002 resolved it: no address exists. Service is delivered at
 * the customer's property — a service-area business.
 *
 * So this section is a community list plus an availability statement,
 * and nothing else. CLAUDE.md §29-30 additionally forbid implying an
 * office in San Diego or Las Vegas.
 *
 * Community names must come from the location registry with correct
 * geographic types (CLAUDE.md §26 — city, neighborhood, county, and
 * metro are not interchangeable). Linked entries resolve through the
 * approved-link layer; unlinked entries render as plain text.
 */
export interface CoverageSectionProps {
  /** Overrides natural density — only the template knows the sequence (18 §108). */
  density?: SectionDensity
  id?: string
  eyebrow?: string
  title: string
  intro?: string
  /** Approved location pages, rendered as links. */
  pageIds?: readonly PageId[]
  /** Registry names with no approved page, rendered as plain text. */
  names?: readonly string[]
  /** e.g. "Not sure whether we serve your address? Contact us to check." */
  availabilityStatement: string
}

export function CoverageSection({
  density = 'standard',
  id = 'service-area',
  eyebrow,
  title,
  intro,
  pageIds = [],
  names = [],
  availabilityStatement,
}: CoverageSectionProps) {
  const links = resolveLinkableOnly(pageIds)

  if (links.length === 0 && names.length === 0) return null

  return (
    <Section density={density} labelledBy={id}>
      <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

      <ul className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map((link) => (
          <li key={link.pageId} className="border-t border-border pt-3">
            <Link
              href={link.href}
              className="text-sm text-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </Link>
          </li>
        ))}
        {names.map((name) => (
          <li
            key={name}
            className="border-t border-border pt-3 text-sm text-muted-foreground"
          >
            {name}
          </li>
        ))}
      </ul>

      <p className="mt-8 max-w-prose text-sm leading-6 text-muted-foreground">
        {availabilityStatement}
      </p>
    </Section>
  )
}
```

- [ ] **Step 2: Export and commit**

```ts
export { CoverageSection } from './CoverageSection'
export type { CoverageSectionProps } from './CoverageSection'
```

```bash
npm run typecheck && npm run lint
git add components/sections/CoverageSection.tsx components/sections/index.ts
git commit -m "feat(sections): add CoverageSection without map or address (PENDING-002)"
```

---

## Task 7: The three data-gated sections

**Files:** Create `ProofGallery.tsx`, `TestimonialBand.tsx`, `LeadFormSection.tsx` in `components/sections/`

- [ ] **Step 1: `ProofGallery.tsx`**

```tsx
import Image from 'next/image'
import { Section, type SectionDensity } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { proofImages } from '@/data/business'

/**
 * Results gallery.
 *
 * Governed by docs/18-design-system.md §28-34 (photography), §31
 * (sewer camera imagery), §57; CLAUDE.md §57, §76.
 *
 * ===========================================================================
 * RENDERS NOTHING TODAY, BY DESIGN
 * ===========================================================================
 * `proofImages` is empty because no approved photography exists. This
 * section returns null and the page composition closes around it.
 *
 * GATE: 18 §28-34. When assets arrive, 18 §31 describes the strongest
 * form this can take — a real inspection frame paired with a
 * plain-language explanation of one condition, labelled as example
 * footage. Prefer that over a generic four-photo strip.
 *
 * Accepts no ad-hoc image props: everything comes from the governed
 * module, where `source` is required.
 */
export interface ProofGalleryProps {
  /** Overrides natural density — only the template knows the sequence (18 §108). */
  density?: SectionDensity
  id?: string
  title: string
  intro?: string
}

export function ProofGallery({
  density = 'standard',
  id = 'recent-work',
  title,
  intro,
}: ProofGalleryProps) {
  if (proofImages.length === 0) return null

  return (
    <Section density={density} labelledBy={id}>
      <SectionHeading id={id} title={title} intro={intro} />

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {proofImages.map((image) => (
          <li key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              width={640}
              height={480}
              className="w-full rounded-md border border-border object-cover"
            />
            <p className="mt-2 text-caption text-muted-foreground">
              {image.caption}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
```

Note: `next.config.ts` uses `output: 'export'`. Confirm `images.unoptimized` is set before relying on `next/image`; if it is not, and the gallery is dead code anyway, use a plain `<img>` and record why in the header.

```bash
grep -n "images" next.config.ts
```

- [ ] **Step 2: `TestimonialBand.tsx`**

```tsx
import { Section, type SectionDensity } from '@/components/ui'
import { testimonials } from '@/data/business'

/**
 * Customer testimonial.
 *
 * Governed by docs/18-design-system.md §69-70;
 * docs/01-business-brand-foundation.md §35; CLAUDE.md §77.
 *
 * ===========================================================================
 * RENDERS NOTHING TODAY, BY DESIGN
 * ===========================================================================
 * `power` specifies "one editable placeholder testimonial" on every
 * page type. This project cannot ship that: CLAUDE.md §77 forbids
 * inventing, merging, reassigning, or altering testimonials, and a
 * placeholder quote on a public page is an invented one.
 *
 * GATE: verified review data with attribution and source (18 §69-70).
 *
 * Accepts no quote props. The only way to populate this is through the
 * governed module, where `source` is required.
 */
export interface TestimonialBandProps {
  /** Overrides natural density — only the template knows the sequence (18 §108). */
  density?: SectionDensity
  id?: string
}

export function TestimonialBand({
  density = 'dense',
  id = 'testimonial',
}: TestimonialBandProps) {
  const [testimonial] = testimonials
  if (testimonial === undefined) return null

  return (
    <Section density={density} surface="muted" labelledBy={id}>
      <figure className="max-w-2xl">
        <blockquote
          id={id}
          className="text-h3 font-medium tracking-tight text-balance text-foreground"
        >
          {testimonial.quote}
        </blockquote>
        <figcaption className="mt-4 text-sm text-muted-foreground">
          {testimonial.attribution}
        </figcaption>
      </figure>
    </Section>
  )
}
```

- [ ] **Step 3: `LeadFormSection.tsx`**

```tsx
import { Section, type SectionDensity } from '@/components/ui'

/**
 * Inline lead form slot.
 *
 * Governed by docs/17-conversion-architecture.md §27-36;
 * docs/18-design-system.md §56-61; docs/22-decisions-change-log.md
 * PENDING-007, PENDING-008; CLAUDE.md §58, §59.
 *
 * ===========================================================================
 * RENDERS NOTHING UNTIL PENDING-008 RESOLVES
 * ===========================================================================
 * `power` places a compact lead form mid-page on all six types. The
 * form architecture is specified in 17 §27-36 (a simple primary form
 * plus specialised forms for pre-purchase and commercial), but the
 * FIELDS are PENDING-008 and the primary CTA wording is PENDING-007.
 *
 * CLAUDE.md §58: do not independently add large forms. So this is a
 * slot that holds the composition's place and renders nothing.
 *
 * GATE: PENDING-007 and PENDING-008 both resolved. Fields come from
 * 17 §28 and §36, never from the reference style's generic field list.
 * 17 §59: the submit event fires only after successful submission.
 */
export interface LeadFormSectionProps {
  /** Overrides natural density — only the template knows the sequence (18 §108). */
  density?: SectionDensity
  id?: string
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function LeadFormSection(_props: LeadFormSectionProps): null {
  return null
}
```

If the eslint disable comment is unnecessary under this repo's config, remove it — do not leave an unused directive, which `lint` may itself flag.

- [ ] **Step 4: Export all three**

```ts
export { ProofGallery } from './ProofGallery'
export type { ProofGalleryProps } from './ProofGallery'

export { TestimonialBand } from './TestimonialBand'
export type { TestimonialBandProps } from './TestimonialBand'

export { LeadFormSection } from './LeadFormSection'
export type { LeadFormSectionProps } from './LeadFormSection'
```

- [ ] **Step 5: Verify and commit**

```bash
npm run typecheck && npm run lint
git add components/sections/
git commit -m "feat(sections): add data-gated ProofGallery, TestimonialBand, LeadFormSection"
```

---

## Task 8: Edit the five existing components

**Files:** Modify `TrustBar.tsx`, `CtaSection.tsx`, `SiteHeader.tsx`, `ServiceIndex.tsx`, `RelatedLinks.tsx`

- [ ] **Step 1: `TrustBar` — add density and surface overrides**

`power` puts the trust strip in different positions per type, so the composing template needs the same override other sections have. Icons are **not** added (18 §5.3, Appendix B). Change the signature:

```tsx
export interface TrustBarProps {
  /** Overrides natural density — only the template knows the sequence (18 §108). */
  density?: SectionDensity
  surface?: SectionSurface
}

export function TrustBar({
  density = 'dense',
  surface = 'muted',
}: TrustBarProps = {}) {
  return (
    <Section density={density} surface={surface} as="aside">
      {/* body unchanged */}
    </Section>
  )
}
```

Import `type SectionDensity, type SectionSurface` from `@/components/ui`, and export `TrustBarProps` from the barrel. Existing call sites use `<TrustBar />` and keep working because both props default.

- [ ] **Step 2: `CtaSection` — add the optional phone**

Add to `CtaSectionProps`:

```tsx
  /**
   * Market phone number, rendered beside the CTA.
   *
   * ⚠ Only market-scoped templates pass this. DEC-070/071 publish two
   * numbers on separate market sites; 01 §20 forbids showing the
   * St. Louis line on a San Diego page. A page that does not know its
   * market must omit this and let the CTA route to /contact/.
   */
  phone?: { label: string; href: string }
```

Render it after the action buttons, only when defined:

```tsx
      {phone !== undefined && (
        <p className="mt-4 text-sm text-muted-foreground">
          Prefer to talk now? <a href={phone.href} className="font-medium text-foreground underline underline-offset-4">{phone.label}</a>
        </p>
      )}
```

Do **not** add a `tel:` link anywhere that the market is unknown.

- [ ] **Step 3: `SiteHeader` — make it sticky**

Change the `<header>` className only:

```tsx
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
```

Nothing else changes: no click-to-call, no nav changes, still a Server Component. Add to the existing header comment block:

```
 * Sticky since the power composition port: `power` places a sticky
 * header on every type, and a longer page makes the primary CTA
 * harder to reach. Pure CSS, so the header ships no JavaScript still.
 * The phone question is unchanged — see the note above.
```

- [ ] **Step 4: Verify the sticky header does not cover anchor targets**

`Section` has `labelledBy` anchors used by in-page links. A sticky header can hide the target heading. Add to `app/globals.css`:

```css
/* Sticky header offset for in-page anchor targets. */
:target {
  scroll-margin-top: 6rem;
}
```

- [ ] **Step 5: `ServiceIndex` — add the `mosaic` variant**

`power` wants a visual services section, not a text list. Appendix A names the pattern: *"Service mosaic — a deliberately uneven grid where the flagship item (Sewer Camera Inspection) gets more visual space than supporting services."*

Add a `variant` prop. The existing `index` rendering stays the default so no current call site changes; the homepage opts into `mosaic`.

```tsx
/**
 * Layout shape.
 *
 *   index   scannable rows — the default. Correct when the item count
 *           does not divide evenly or items vary in length (Appendix A).
 *   mosaic  deliberately uneven card grid, flagship item given more
 *           space. Appendix A names Sewer Camera Inspection as the
 *           flagship. Use where the section must read as a visual
 *           services catalog rather than a list.
 *
 * The homepage uses `mosaic` so it does not repeat the shape of the
 * even RoutingCards grid directly above it (18 §5.6 bullet 2, and
 * power/homepage.md's own note that routing and services must stay
 * visually distinct).
 */
variant?: 'index' | 'mosaic'
/** The pageId given extra space in `mosaic`. Defaults to the first item. */
flagshipPageId?: PageId
```

Mosaic rendering — the flagship spans two columns and gets a taller card; the rest are single-width. Note this is intentionally **not** `CardGrid`, whose even-division warning does not apply to a deliberately uneven layout:

```tsx
  <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {links.map((link) => {
      const isFlagship = link.pageId === (flagshipPageId ?? links[0]?.pageId)
      return (
        <LinkCard
          key={link.pageId}
          href={link.href}
          actionLabel={link.label}
          className={cn(
            'flex flex-col',
            isFlagship && 'sm:col-span-2 sm:row-span-2 sm:justify-end',
          )}
        >
          <h3
            className={cn(
              'font-medium tracking-tight text-foreground',
              isFlagship ? 'text-h2' : 'text-h4',
            )}
          >
            {link.label}
          </h3>
          <p className="mt-2 max-w-prose text-sm leading-6 text-muted-foreground">
            {descriptions.get(link.pageId)}
          </p>
        </LinkCard>
      )
    })}
  </div>
```

Import `cn` from `@/lib/utils/cn` and `LinkCard` from `@/components/ui`.

- [ ] **Step 6: `RelatedLinks` — switch to horizontal cards**

The related strip is the last card section on the page and must not repeat the shape of the first. Change its cards from vertical (stacked title over description) to **horizontal**: a leading rule with title and description beside it, at a wider aspect ratio, 3-up.

Read the current implementation first, then change only the card interior and grid — not the `pageId` resolution, which must keep going through the approved-link layer.

```bash
cat components/sections/RelatedLinks.tsx
```

Add to its header comment:

```
 * Horizontal card treatment since the power composition port: this is
 * the last card section on most pages, and 18 §5.6 bullet 2 requires
 * varying composition between sections. A vertical card here would
 * repeat the shape of the problem grid above it.
```

- [ ] **Step 7: Verify all five and commit**

```bash
npm run typecheck && npm run lint && npm run build
git add components/sections/ components/layout/SiteHeader.tsx app/globals.css
git commit -m "feat(sections): sticky header, CTA phone slot, ServiceIndex mosaic, horizontal RelatedLinks"
```

---

## Task 9: Extend the content types

**Files:** Modify `types/content.ts`

- [ ] **Step 1: Add the shared item types**

Insert into the "Shared pieces" region, after `ProcessContent`:

```ts
/** A problem-recognition item (power service/location-service item 5). */
export interface ProblemContent {
  title: string
  description: string
}

/** A deliverable (power service/location-service item 6). */
export interface InclusionContent {
  title: string
  description: string
}

/** An intent-routing destination (power homepage item 3). */
export interface RoutingContent {
  pageId: PageId
  description: string
}

/** Service-area coverage copy (power location item 11). */
export interface CoverageContent {
  title: string
  intro?: string
  pageIds?: readonly PageId[]
  names?: readonly string[]
  availabilityStatement: string
}
```

- [ ] **Step 2: Add the optional fields per family**

All optional, so no existing content file breaks.

```ts
// HomePageContent
  routing?: readonly RoutingContent[]

// ServicePageContent
  problems?: readonly ProblemContent[]
  inclusions?: readonly InclusionContent[]

// MarketPageContent, LocationPageContent
  coverage?: CoverageContent

// ServiceLocationPageContent
  problems?: readonly ProblemContent[]
  inclusions?: readonly InclusionContent[]
  coverage?: CoverageContent

// AudiencePageContent, CommercialPageContent
  problems?: readonly ProblemContent[]
  inclusions?: readonly InclusionContent[]

// ComparisonPageContent — replaces `placeholder?: never`
  problems?: readonly ProblemContent[]
```

`ComparisonPageContent` currently has `placeholder?: never` to mark it deliberately empty. Replace that field with `problems` and update its doc comment to explain that the grid frames "when each applies" neutrally, per CLAUDE.md §65.

- [ ] **Step 3: Verify and commit**

```bash
npm run typecheck && npm run lint
git add types/content.ts
git commit -m "feat(types): add power composition content fields"
```

---

## Task 10: Rewrite `ServicePageTemplate` (worked example)

**Files:** Modify `components/templates/ServicePageTemplate.tsx`

This is the canonical map from spec §8.1. Tasks 11-12 follow the same shape.

- [ ] **Step 1: Replace the component body**

```tsx
  const densities: SectionDensity[] = [
    'sparse',                                                              // hero
    'dense',                                                               // trust bar
    ...(content.body !== undefined ? (['standard'] as const) : []),        // overview
    ...(content.problems !== undefined ? (['standard'] as const) : []),    // problems
    ...(content.inclusions !== undefined ? (['dense'] as const) : []),     // inclusions
    ...(content.process !== undefined ? (['standard'] as const) : []),     // process
    'standard',                                                            // authority (brand)
    ...(content.showMarkets === true ? (['standard'] as const) : []),      // markets
    ...(content.relatedPageIds !== undefined ? (['dense'] as const) : []), // related
    ...(content.faq !== undefined ? (['dense'] as const) : []),            // faq
    'sparse',                                                              // cta panel (brand)
  ]
```

Section order in JSX, matching that array exactly:

1. `Hero` variant `editorial`
2. `TrustBar`
3. `Section`/`Prose` for `content.body`
4. `ProblemGrid` — `title={`When you may need ${...}`}`, items from `content.problems`
5. `InclusionsGrid` — items from `content.inclusions`
6. `ProcessSteps`
7. `AuthorityBand` — `title="Inspection without a repair sale attached"`
8. `ProofGallery` (renders null)
9. `TestimonialBand` (renders null)
10. `LeadFormSection` (renders null)
11. `MarketCoverage` when `showMarkets`
12. `RelatedLinks`
13. `FaqSection`
14. `CtaSection variant="panel"`

The three gated sections are placed in JSX but contribute **no** entry to the density array, because they render nothing. When their gates open, add their densities in the same positions — the comment above the array must say so.

`showDifferentiator` is removed: `AuthorityBand` now occupies that role and always renders. Check whether any content file passes `showDifferentiator` and remove those too.

```bash
grep -rn "showDifferentiator" content/ app/ components/
```

- [ ] **Step 2: Verify adjacency**

`AuthorityBand` (brand) must not sit next to `CtaSection variant="panel"` (brand). In the map above, related + FAQ separate them. If a service page has neither `relatedPageIds` nor `faq`, they become adjacent. Add a guard comment and confirm every service content file has at least one of the two.

```bash
npm run build 2>&1 | grep -i "rhythm" | head -20
```

Expected: no rhythm warnings for `/services/*`.

- [ ] **Step 3: Commit**

```bash
git add components/templates/ServicePageTemplate.tsx
git commit -m "feat(templates): rewrite service page to the power composition map"
```

---

## Task 11: Rewrite the 6 remaining direct-map templates

**Files:** `HomePageTemplate`, `MarketPageTemplate`, `LocationPageTemplate`, `ServiceLocationPageTemplate`, `AudiencePageTemplate`, `CommercialPageTemplate`

Same procedure as Task 10 for each: write the density array with inline section comments, order the JSX to match, verify no two brand surfaces are adjacent, build, check for rhythm warnings, commit individually.

| Template | Section order | Density array (all optional present) |
|---|---|---|
| `HomePageTemplate` | hero, trust, **routing** (even grid), **services mosaic**, differentiator, markets, process, authority, gallery*, testimonial*, form*, resources related (horizontal), faq, cta | sparse, dense, standard, standard, standard, dense, standard, standard, dense, dense, sparse |
| `MarketPageTemplate` | hero, trust, body, services index, authority, gallery*, testimonial*, form*, **coverage**, related, faq, cta(**+phone**) | sparse, dense, standard, **dense**, standard, standard, dense, dense, sparse |
| `LocationPageTemplate` | hero, trust, body, services index, authority, form*, related, faq, cta | sparse, dense, standard, standard, standard, dense, dense, sparse |
| `ServiceLocationPageTemplate` | hero, trust, body, problems, inclusions, process, authority, gallery*, testimonial*, form*, related, **coverage**, faq, cta | sparse, dense, standard, standard, dense, standard, standard, dense, standard, dense, sparse |
| `AudiencePageTemplate` | hero, trust, body, problems, inclusions, process, authority, gallery*, testimonial*, form*, services index, related, faq, cta | sparse, dense, standard, standard, dense, standard, standard, dense, dense, dense, sparse |
| `CommercialPageTemplate` | hero, trust, body, problems, inclusions, process, authority, form*, related, faq, cta | sparse, dense, standard, standard, dense, standard, standard, dense, dense, sparse |

`*` = data-gated, renders null, contributes no density entry.

- [ ] **Step 1: Verify each array against the rhythm rule before writing it**

For each row, check no 4 consecutive identical values and at least 2 distinct values.

All 12 arrays in this plan have been verified against a mirror of `sectionRhythmIssues()`. `MarketPageTemplate` originally ran `standard, standard, standard, standard` at positions 3-6 and **failed**; the table above carries the corrected array, with the services index moved to `dense`. That correction is recorded here rather than silently applied, because it is the pattern to reuse: fix a run of 4 by moving a list-like section to `dense`, never by inventing a section to break it up.

Re-run this check if any array changes:

```bash
node -e '
const S="sparse",T="standard",D="dense";
const d=[S,D,T,D,T,T,D,D,S];           // the array under test
let run=1,bad=[];
for(let i=1;i<d.length;i++){run=d[i]===d[i-1]?run+1:1;
if(run===4)bad.push(`run of 4 at ${i-2}-${i+1}`);}
if(new Set(d).size===1)bad.push("no variation");
console.log(bad.length?bad.join("; "):"ok");'
```

- [ ] **Step 2: `MarketPageTemplate` phone**

Only this template passes `phone` to `CtaSection`. Source the number from the market record, never a literal.

```bash
grep -rn "phone" data/markets/markets.ts | head
```

If the market record has no phone field, omit the prop entirely rather than hard-coding. Record that as a follow-up.

- [ ] **Step 3: Build and commit each**

```bash
npm run build 2>&1 | grep -i "rhythm"
```

Expected: empty. Commit one template per commit.

---

## Task 12: Rewrite the 5 derived templates

**Files:** `HubPageTemplate`, `ComparisonPageTemplate`, `ResourcePageTemplate`, `CorePageTemplate`, and confirm `PageShell` unchanged

| Template | Section order | Density array |
|---|---|---|
| `HubPageTemplate` | hero, trust, items index, authority, related, faq, cta | sparse, dense, standard, standard, dense, dense, sparse |
| `ComparisonPageTemplate` | hero, body, **problems as "when each applies"**, related, faq, cta | sparse, standard, dense, standard, dense, sparse |
| `ResourcePageTemplate` | hero, direct answer, body, related resources, faq, cta(**band**, not panel) | sparse, standard, standard, dense, dense, sparse |
| `CorePageTemplate` | hero, body, trust, authority (about only), faq, cta | sparse, standard, dense, standard, dense, sparse |

- [ ] **Step 1: Keep `ResourcePageTemplate` light**

No authority band, no gallery, no form, no `panel` CTA. `17` §19 requires informational content to progress without forcing users into a form. Add this to the template's header comment with the citation, so a later contributor does not "fix" the inconsistency.

- [ ] **Step 2: `ComparisonPageTemplate` neutrality**

No authority band — a brand-surface "why choose us" section inside a neutral comparison violates CLAUDE.md §65 and `18` §66. Document that in the header.

- [ ] **Step 3: Build, check rhythm, commit each**

```bash
npm run build 2>&1 | grep -i "rhythm"
git add components/templates/<name>.tsx
git commit -m "feat(templates): rewrite <name> to a power-derived map"
```

---

## Task 13: Update `sections/index.ts` documentation

**Files:** Modify `components/sections/index.ts`

- [ ] **Step 1: Replace the DELIBERATELY ABSENT block**

The current block states there is no proof, testimonial, form, or image section. That is now stale. Replace with a DATA-GATED block:

```
 * ---------------------------------------------------------------------------
 * DATA-GATED SECTIONS
 * ---------------------------------------------------------------------------
 * ProofGallery, TestimonialBand, and LeadFormSection exist in the
 * composition but render NOTHING today.
 *
 * Each reads a governed module under `data/` where every item must
 * cite a source, and none of them accepts a claim-bearing string prop.
 * That is deliberate: the risk this guards against is a contributor
 * typing a plausible testimonial into JSX, and the type system
 * forecloses it.
 *
 *   ProofGallery     gate: approved photography (18 §28-34)
 *   TestimonialBand  gate: verified review data (18 §69-70, CLAUDE.md §77)
 *   LeadFormSection  gate: PENDING-007 and PENDING-008
 *
 * An empty module means the section is absent and the page closes
 * around it. Do not populate one to "finish" a page.
```

- [ ] **Step 2: Commit**

```bash
git add components/sections/index.ts
git commit -m "docs(sections): replace absent-sections note with the data-gated contract"
```

---

## Task 14: Update the source-of-truth documents

**Files:** Modify `docs/18-design-system.md`, `docs/22-decisions-change-log.md`

- [ ] **Step 1: Find every cross-reference to §110-115 before editing**

```bash
grep -rn "18 §11[0-5]\|§110\|§111\|§112\|§113\|§114\|§115" docs/ components/ types/ | grep -v "18-design-system.md:"
```

Every hit is a citation that must still be true afterwards. Record the list.

- [ ] **Step 2: Rewrite §110-115 to the implemented maps**

Each family's section gets the ordered composition actually implemented, the density array, and a note that the maps derive from the `power` style with the §4 conflict resolutions applied. Add the derived maps for hub, comparison, resource, and core.

- [ ] **Step 3: Add the DEC entry to `22-decisions-change-log.md`**

Use the next available DEC number.

```bash
grep -o "DEC-[0-9]\+" docs/22-decisions-change-log.md | sort -u | tail -3
```

The entry must record: adoption of the `power` composition system and its source; the tail reordering (related before FAQ); the 8 new components; and each of the nine §4 resolutions, distinguishing rejected outright (offer modules, placeholder testimonials, click-to-call header, map card, icon trust strip) from adapted (photography slots, form slot, CTA phone, register). Follow the existing entry format in that file.

It must also record the **card-composition resolution** explicitly, as a deliberate decision rather than an oversight — a later reviewer will otherwise read five card sections on one page and assume §5.6 was missed:

> **Card composition under §5.6.** `power`'s conversion composition is card-based across routing, services, problems, inclusions, gallery, and related. That composition is **retained deliberately**, not defaulted into.
>
> §5.6's prohibition is on a page built *entirely* from card grids. These pages are not: hero, editorial split, process band, authority band, testimonial, and form separate every card section. The governing rule is §5.6's second bullet, "vary composition pattern and density between adjacent sections," and the resolution is **visual variation as the differentiator** rather than pattern substitution.
>
> Per-section treatments: routing = even 3-col `LinkCard`, full border. Services = uneven mosaic, flagship Sewer Camera Inspection given double width (Appendix A names both the pattern and the flagship). Problems = 2/3-col by count, full border, static. Inclusions = fixed 2-col, top rule, `muted`, denser. Gallery = image grid, no card chrome. Related = horizontal cards, 3-up.
>
> Line 1188 and Appendix B's "cards for every list-like section" check are separately satisfied: `TrustBar` is a band, `AuthorityBand` proof points and `CoverageSection` are plain lists, `ProcessSteps` is a numbered band.
>
> Decorative icons are excluded per §27, Appendix B, and §56. Image-led treatments remain unavailable until photography is approved (§28-34).

- [ ] **Step 4: Commit**

```bash
git add docs/18-design-system.md docs/22-decisions-change-log.md
git commit -m "docs: record the power composition port [DEC-0XX]"
```

---

## Task 15: Full verification

- [ ] **Step 1: Run the project gate**

```bash
npm run check
```

Expected: exits 0. If it fails, fix the cause — never `any` or `@ts-ignore` (CLAUDE.md §84).

- [ ] **Step 2: Route parity**

```bash
find out -name "*.html" | sort > /tmp/routes-after.txt
diff /tmp/routes-before.txt /tmp/routes-after.txt && echo "ROUTE PARITY OK"
```

Expected: `ROUTE PARITY OK`, empty diff. **A non-empty diff is a stop condition** — a presentation-layer port must not change the route set.

- [ ] **Step 3: No rhythm warnings**

```bash
npm run build 2>&1 | grep -i "rhythm" ; echo "exit: $?"
```

Expected: no output.

- [ ] **Step 4: No new unverified claims**

```bash
grep -rnE "24/7|same.day|emergency|free (estimate|inspection)|financing|warranty|guarantee|\\\$[0-9]|licensed|insured|[0-9]+\+? years" components/ | grep -v "\.md:"
```

Expected: no hits in new code. Any hit must trace to an approved document or be removed.

```bash
grep -rnE "\(?[0-9]{3}\)?[ .-][0-9]{3}[ .-][0-9]{4}" components/
```

Expected: no hardcoded phone numbers in the component layer.

- [ ] **Step 5: §5.6 card-differentiation check**

This is the check that replaces the abandoned "cap the grid count" approach, and it is a judgement check on the rendered page, per Appendix B's instruction that its reviews run after the build rather than as an automated gate.

For the homepage and the service page, list every card-based section in render order and confirm **no adjacent pair shares all of column count, card shape, surface, and orientation**:

| Page | Expected sequence |
|---|---|
| Home | routing (even 3-col, full border, vertical, default) → services (mosaic, uneven, vertical, default) → related (3-up, leading rule, **horizontal**, default) |
| Service | problems (2/3-col, full border, vertical, default) → inclusions (fixed 2-col, **top rule**, vertical, **muted**) → related (3-up, leading rule, **horizontal**, default) |

Also confirm Appendix B's separate check — that cards are not used for *every* list-like section: `TrustBar`, `AuthorityBand`, `CoverageSection`, and `ProcessSteps` must all still render un-carded.

Any adjacent pair that reads as the same component with different text is a failure. Fix by changing treatment, **not** by substituting a non-card pattern — that reversal is a recorded decision (Task 14 Step 3).

- [ ] **Step 6: Accessibility spot check**

Confirm one `h1` per page, that new grids use `ul`/`li`, and that the sticky header does not obscure `:target` anchors.

- [ ] **Step 7: Browser verification**

Confirm the dev server is still running; restart with `npm run dev` if not. Load `/` and `/services/sewer-camera-inspection/`, screenshot both, and compare against the baseline captured earlier: hero, trust bar, services treatment, and the sections now sitting between hero and prose on the service page.

---

## Self-review

**Spec coverage:** §4 all nine resolutions → Tasks 1, 6, 7, 8. §5 tail reorder → Tasks 10-12. §6.1 → Tasks 2-6. §6.2 → Task 7. §6.3 → Tasks 8, 13. §7 contract → Tasks 1, 7, 13. §8.1 → Task 10. §8.2 → Tasks 10-12. §9 → Task 14. §10 → Task 15. §11 risks → mitigations in Tasks 3 (grid divergence), 5 (adjacency), 10 Step 2 (adjacency), 14 Step 1 (cross-references).

**Amendment:** the §5.6 card-grid limit is new relative to the spec and is recorded at the top of this plan; Task 14 Step 3 requires it in the DEC entry so the spec and the log agree.

**Type consistency:** `ProblemGridItem`/`ProblemContent`, `InclusionsGridItem`/`InclusionContent`, `RoutingCardItem`/`RoutingContent` are structurally identical pairs — component-local and content-layer names respectively, matching the existing `ServiceIndexItem` convention. `density`/`surface` override props are named identically across every section.

**Known gaps to resolve during execution, not guesses to make now:** whether `ButtonLink` has a `secondary` variant (Task 5 Step 2); whether `next.config.ts` sets `images.unoptimized` (Task 7 Step 1); whether market records carry a phone field (Task 11 Step 2). Each has a stated fallback.
