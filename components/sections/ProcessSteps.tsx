import { Section } from '@/components/ui'
import { SectionHeading } from './SectionHeading'

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
 */
export interface ProcessStep {
  title: string
  description?: string
}

export interface ProcessStepsProps {
  id?: string
  eyebrow?: string
  title: string
  intro?: string
  steps: readonly ProcessStep[]
}

export function ProcessSteps({
  id = 'process',
  eyebrow,
  title,
  intro,
  steps,
}: ProcessStepsProps) {
  if (steps.length === 0) return null

  return (
    <Section density="standard" labelledBy={id}>
      <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

      <ol className="mt-10 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
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
