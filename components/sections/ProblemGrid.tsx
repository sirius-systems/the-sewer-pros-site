import { Section, Card, CardGrid, type SectionDensity } from '@/components/ui'
import { SectionHeading } from './SectionHeading'

/**
 * Problem-recognition grid.
 *
 * Governed by docs/18-design-system.md §5.6, §70, §155 and Appendix A
 * ("Service/feature grid"); docs/17-conversion-architecture.md §19;
 * CLAUDE.md §70, §98.
 *
 * The reference composition's "when you may need [service]" section:
 * 4-6 cards naming a real symptom, scenario, risk, or customer goal.
 *
 * ===========================================================================
 * THE SECTION MOST LIKELY TO DRIFT INTO FEAR MARKETING
 * ===========================================================================
 * 18 §70 and CLAUDE.md §70 forbid alarm copy. The reference style's
 * register is "urgent, visitor mid-problem"; this project's is calm and
 * factual, and CLAUDE.md §98 settles the conflict in favour of the
 * project rule.
 *
 *   Good: "Recurring backups can indicate a condition worth
 *          investigating with a sewer camera."
 *   Bad:  "Your sewer could collapse at any moment."
 *
 * Items are passed by the composing page rather than sourced centrally,
 * because 14 §21's substitution tests require genuinely different
 * symptoms per service — a shared list would produce exactly the
 * token-swapped content CLAUDE.md §20-21 forbids. They describe
 * conditions rather than making claims about the business, which is why
 * this section does not require the `source` field the proof modules do.
 *
 * ---------------------------------------------------------------------------
 * VISUAL DIVERGENCE FROM `InclusionsGrid`
 * ---------------------------------------------------------------------------
 * Both are card grids, per 18 §5.6's second bullet ("vary composition
 * pattern and density between adjacent sections") rather than its first
 * sentence, which prohibits a page built ENTIRELY from card grids —
 * these pages are not. The two diverge on treatment:
 *
 *   ProblemGrid     2 or 3 columns by count, full-border Card, default surface
 *   InclusionsGrid  always 2 columns, top rule only, muted surface, denser
 *
 * Keep them distinguishable. The reference style names the two grids
 * collapsing into each other as a failure for both the service and the
 * service+audience types.
 */
export interface ProblemGridItem {
  title: string
  description: string
}

export interface ProblemGridProps {
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
  // 18 §120 — omit the section entirely rather than render an empty shell.
  if (items.length === 0) return null

  // 18 §5.6 forbids forcing an item count into a grid it does not
  // divide into evenly. Choosing the divisor from the count avoids the
  // orphaned row for the 4 and 6 this section actually receives.
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
