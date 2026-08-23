import { Section, type SectionDensity } from '@/components/ui'
import { cn } from '@/lib/utils/cn'
import { SectionHeading } from './SectionHeading'
import { processMotif } from '@/data/business/positioning'

/**
 * Numbered process.
 *
 * Governed by docs/18-design-system.md §65, §5.6, §90 and Appendix A
 * ("Numbered process — simple vertical numbered steps… Can run with no
 * cards (Section 5.6), no decorative icons (Section 27), and no
 * gradient (Appendix B).").
 *
 * That guidance is followed literally: numbers and text, a rule between
 * steps, nothing else. 18 §65 also warns against "overengineering with
 * animation", so there is no scroll-reveal here. Appendix A's "sticky
 * process" variant is reserved for a sequence genuinely worth walking
 * through slowly and is not this component.
 *
 * Rendered as an ordered list so assistive technology announces the
 * sequence and its length — the numerals are decorative reinforcement,
 * marked `aria-hidden` to avoid double announcement.
 *
 * ===========================================================================
 * THE INDEPENDENT-INSPECTION MOTIF (18 §141)
 * ===========================================================================
 * 18 §141 defines a recurring visual concept:
 *
 *   Inspect → Understand → Decide
 *
 * and says it "can appear through: process icons, diagrams, section
 * dividers, branded steps", and that "it should become a recognizable
 * part of the design system." A numbered process band is one of the
 * placements §141 names, so this is where it goes live.
 *
 * `steps` is therefore optional: omit it and this section renders the
 * motif. Pass steps and the page's own sequence wins.
 *
 * ⚠ THE MOTIF IS LABELS ONLY. §141 supplies three words and no
 * descriptions, so the motif renders three words and no descriptions.
 * Do not write supporting copy to fill the gap — that would be new
 * claim-bearing content invented at the component layer, which is
 * exactly what `data/business/positioning.ts` exists to prevent.
 *
 * Three steps is deliberate and within the 3-4 the composition maps
 * allow; it is not padded to four to match a reference example.
 */
export interface ProcessStep {
  title: string
  description?: string
}

/**
 * 18 §141's motif as a step sequence.
 *
 * Derived from `processMotif` rather than restated, so the labels
 * cannot drift from the data module that cites §141.
 */
const motifSteps: readonly ProcessStep[] = processMotif.map((title) => ({
  title,
}))

export interface ProcessStepsProps {
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
  /**
   * The page's own sequence.
   *
   * Omit to render 18 §141's `Inspect → Understand → Decide` motif —
   * see the header. A page that authors its own process keeps it; the
   * motif never overrides authored content.
   */
  steps?: readonly ProcessStep[]
}

/**
 * Wide-breakpoint column count for a step sequence.
 *
 * 18 §5.6 forbids forcing an item count into a grid it does not divide
 * into evenly. This band was hardcoded to four columns, which orphaned
 * a cell for every sequence that was not exactly four long — including
 * the home page's three authored steps and §141's three-step motif.
 *
 * An interim version mapped 3/4/5 and fell back to four, which merely
 * moved the same assumption to six steps. This picks the largest
 * divisor that actually divides, so nothing silently orphans:
 *
 *   3 -> 3    4 -> 4    6 -> 3    8 -> 4
 *
 * Counts with no divisor at these widths (5, 7) drop to two columns
 * and let `spanClasses` below absorb the odd tail. Five columns is
 * deliberately not offered — a process band that narrow stops being
 * readable, and Appendix A's numbered process is meant to be scanned.
 */
function columnClass(count: number): string {
  if (count % 4 === 0) return 'lg:grid-cols-4'
  if (count % 3 === 0) return 'lg:grid-cols-3'
  if (count % 2 === 0) return 'lg:grid-cols-2'
  return 'lg:grid-cols-2'
}

/**
 * Classes for the trailing step when the count is odd.
 *
 * The band is two columns from the `sm` breakpoint up, so any odd
 * count leaves a gap there regardless of the wide-breakpoint choice.
 * The last step spans both, matching the remainder treatment in
 * `ProblemGrid` and `InclusionsGrid`.
 *
 * Tailwind breakpoints are min-width, so a `sm:col-span-2` would carry
 * into a three-column wide layout and span two of three. `lg` resets it
 * where the wide layout is not also two columns.
 */
function spanClasses(count: number, wide: string): string {
  if (count % 2 === 0) return ''
  return wide === 'lg:grid-cols-2'
    ? 'sm:col-span-2'
    : 'sm:col-span-2 lg:col-span-1'
}

export function ProcessSteps({
  density = 'standard',
  id = 'process',
  eyebrow,
  title,
  intro,
  steps,
}: ProcessStepsProps) {
  const resolved = steps ?? motifSteps

  if (resolved.length === 0) return null

  // Columns follow the step count, and an odd tail spans rather than
  // orphaning. 18 §5.6's objection to forcing a count into a grid it
  // does not divide into applies to this band for the same reason it
  // applies to cards.
  const wide = columnClass(resolved.length)
  const span = spanClasses(resolved.length, wide)

  return (
    <Section density={density} labelledBy={id}>
      <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

      <ol className={cn('mt-10 grid gap-px bg-border sm:grid-cols-2', wide)}>
        {resolved.map((step, index) => (
          <li
            key={step.title}
            className={cn(
              'bg-background p-6',
              index === resolved.length - 1 && span,
            )}
          >
            <span
              aria-hidden="true"
              className="text-caption tabular-nums text-muted-foreground"
            >
              {String(index + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 text-base font-medium text-foreground">
              {step.title}
            </h3>
            {step.description !== undefined && (
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {step.description}
              </p>
            )}
          </li>
        ))}
      </ol>
    </Section>
  )
}
