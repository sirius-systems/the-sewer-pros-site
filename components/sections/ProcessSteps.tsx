import { Section, type SectionDensity } from '@/components/ui'
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

const COLUMNS: Record<number, string> = {
  3: 'lg:grid-cols-3',
  4: 'lg:grid-cols-4',
  5: 'lg:grid-cols-5',
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

  // The column count follows the step count. Previously hardcoded to
  // four, which left an empty cell for any sequence that was not
  // exactly four long — including §141's three-step motif. 18 §5.6's
  // objection to forcing a count into a grid it does not divide into
  // applies to this band for the same reason it applies to cards.
  const columns = COLUMNS[resolved.length] ?? 'lg:grid-cols-4'

  return (
    <Section density={density} labelledBy={id}>
      <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

      <ol className={`mt-10 grid gap-px bg-border sm:grid-cols-2 ${columns}`}>
        {resolved.map((step, index) => (
          <li key={step.title} className="bg-background p-6">
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
