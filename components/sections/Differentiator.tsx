import { Section } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { differentiatorContrast } from '@/data/business/positioning'

/**
 * Independent-model differentiator.
 *
 * Governed by docs/18-design-system.md §64, §141, §5.6;
 * docs/01-business-brand-foundation.md §4, §72;
 * CLAUDE.md §32, §72.
 *
 * ===========================================================================
 * THE TONE CONSTRAINT IS THE POINT OF THIS SECTION
 * ===========================================================================
 * 18 §64: "Keep the presentation factual and non-accusatory."
 * 01 §72 and CLAUDE.md §32: do not claim competitors are dishonest or
 * that they recommend unnecessary work.
 *
 * So the contrast is between BUSINESS MODELS, not integrity. Saying a
 * contractor who sells repairs earns from repairs is a description of
 * an incentive structure; saying they exploit it is an accusation. The
 * copy lives in `differentiatorContrast`, where that framing is fixed
 * and reviewable, rather than being passed in per page where it could
 * drift into a sharper claim.
 *
 * Pattern is Appendix A's "editorial split" — one clear idea, two
 * columns, no cards. Neither column is styled as a winner: 18 §66
 * forbids manipulating visual emphasis to misrepresent alternatives,
 * and while that rule addresses comparison pages, the same honesty
 * applies here.
 */
export interface DifferentiatorProps {
  id?: string
  eyebrow?: string
  title: string
  intro?: string
}

export function Differentiator({
  id = 'independent',
  eyebrow,
  title,
  intro,
}: DifferentiatorProps) {
  const columns = [differentiatorContrast.comparison, differentiatorContrast.ours]

  return (
    <Section density="standard" surface="muted" labelledBy={id}>
      <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {columns.map((column) => (
          <div key={column.heading} className="border-t border-border pt-6">
            <h3 className="text-base font-medium text-foreground">
              {column.heading}
            </h3>

            <ol className="mt-4 flex flex-col gap-3">
              {column.steps.map((step, index) => (
                <li
                  key={step}
                  className="flex items-baseline gap-3 text-sm leading-6 text-muted-foreground"
                >
                  <span
                    aria-hidden="true"
                    className="text-caption tabular-nums"
                  >
                    {index + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </Section>
  )
}
