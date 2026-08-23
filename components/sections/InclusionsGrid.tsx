import { Section, type SectionDensity } from '@/components/ui'
import { cn } from '@/lib/utils/cn'
import { SectionHeading } from './SectionHeading'

/**
 * Deliverables grid — "what's included".
 *
 * Governed by docs/18-design-system.md §5.6, §51, §155 and Appendix A
 * ("Service/feature grid"); docs/06-master-service-registry.md;
 * CLAUDE.md §4, §23.
 *
 * The reference composition's item 6: a 4-6 card grid of practical
 * deliverables, deliberately distinct from the problem grid above it.
 *
 * ===========================================================================
 * WHY THIS STAYS A CARD GRID
 * ===========================================================================
 * 18 §5.6's prohibition is on a page built ENTIRELY from card grids.
 * These pages are not — hero, editorial split, process band, authority
 * band, testimonial, and form all sit between the card sections. The
 * governing rule here is §5.6's second bullet: "Vary composition
 * pattern and density between adjacent sections."
 *
 * So the differentiation is in TREATMENT, not pattern:
 *
 *   ProblemGrid     2 or 3 columns by count, full-border Card, default surface
 *   InclusionsGrid  always 2 columns, top rule only, muted surface, denser
 *
 * That is a deliberate decision to preserve the reference style's
 * conversion composition, not an oversight of §5.6. Appendix B's
 * separate check — cards used for every list-like section — stays
 * satisfied because TrustBar is a band, AuthorityBand and
 * CoverageSection are plain lists, and ProcessSteps is numbered.
 *
 * ⚠ Deliverables must correspond to services The Sewer Pros actually
 * performs (06). CLAUDE.md §4: no repair, replacement, lining, CIPP, or
 * excavation deliverables unless formally added to the registry.
 */
export interface InclusionsGridItem {
  title: string
  description: string
}

export interface InclusionsGridProps {
  /**
   * Overrides the section's natural density.
   *
   * Appendix A's density system is about VARIATION down a page, so the
   * composing template — which alone knows the full sequence — may need
   * a different value than this section would pick alone (18 §108).
   */
  density?: SectionDensity
  id?: string
  eyebrow?: string
  title: string
  intro?: string
  items: readonly InclusionsGridItem[]
}

/**
 * Whether `InclusionsGrid` renders anything.
 *
 * An authored but empty item list renders nothing rather than an
 * empty grid (18 §120), so supplying `inclusions` is not the same as
 * having any.
 *
 * A template listing this section in its `densities` array must gate
 * that entry on this predicate. An array entry for a section that
 * omitted itself describes a page that was never built, and
 * `sectionRhythmIssues()` then checks the fiction instead of the page.
 *
 * Exported rather than restated at each call site so the array and the
 * render read one condition, not two copies of it.
 */
export function inclusionsGridRenders(
  items: readonly InclusionsGridItem[] | undefined,
): boolean {
  return items !== undefined && items.length > 0
}

export function InclusionsGrid({
  density = 'dense',
  id = 'whats-included',
  eyebrow,
  title,
  intro,
  items,
}: InclusionsGridProps) {
  // 18 §120 — omit the section entirely rather than render an empty shell.
  if (items.length === 0) return null

  return (
    <Section density={density} surface="muted" labelledBy={id}>
      <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

      {/*
        Always 2 columns, never 3. ProblemGrid varies its column count by
        item count; holding this one fixed is part of what keeps the two
        grids from reading as the same component (18 §5.6 bullet 2), so
        the fix for an odd count is a span rather than a column change.

        The composition specifies 4-6 deliverables. Five is in range and
        has no clean divisor against two columns, so the trailing item
        spans both rather than leaving a hole — the same remainder
        treatment ProblemGrid uses.

        Deliberately not `CardGrid`: its even-division warning would be
        a false positive once the span makes the orphan impossible.
      */}
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((item, index) => (
          // Top rule rather than the full-border `Card`, and tighter
          // spacing — the spec-sheet treatment described above. 18 §25
          // rules out dramatic floating cards; this is the quieter end
          // of the same idea.
          <div
            key={item.title}
            className={cn(
              'border-t border-foreground/20 pt-4',
              items.length % 2 !== 0 &&
                index === items.length - 1 &&
                'sm:col-span-2',
            )}
          >
            <h3 className="text-base font-medium text-foreground">
              {item.title}
            </h3>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  )
}
