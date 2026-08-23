import {
  Section,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import { trustStatements } from '@/data/business/positioning'

/**
 * Trust bar.
 *
 * Governed by docs/18-design-system.md §63, §5.3, §88 and Appendix A
 * ("Metric strip / credential strip — a thin horizontal band, low
 * visual weight. Not a card grid.").
 *
 * Rendered as a plain band: no cards, no icons, no badges, no borders
 * around each item. 18 §5.3 asks for trust through restraint, and
 * Appendix B flags "icons used as decoration next to text that already
 * communicates the idea on its own."
 *
 * ⚠ Content comes from `trustStatements`, where every item cites the
 * document establishing it as fact (18 §63: "Only use factual
 * statements"). Do not pass ad-hoc strings in here — that is the route
 * by which an unverifiable claim reaches the page.
 *
 * Density is `dense` deliberately: this band sits between two weightier
 * sections and should read as a quiet strip, contributing rhythm rather
 * than competing (Appendix A density system).
 */
export interface TrustBarProps {
  /**
   * Overrides the section's natural density.
   *
   * Appendix A's density system is about VARIATION down a page, so the
   * composing template — which alone knows the full sequence — may need
   * a different value than this section would pick alone (18 §108).
   * The reference composition places this strip in a different slot on
   * each page type, which is why it became overridable.
   */
  density?: SectionDensity
  surface?: SectionSurface
}

export function TrustBar({
  density = 'dense',
  surface = 'muted',
}: TrustBarProps = {}) {
  return (
    <Section density={density} surface={surface} as="aside">
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {trustStatements.map((statement) => (
          <li
            key={statement.label}
            className="text-sm leading-6 text-muted-foreground"
          >
            {statement.label}
          </li>
        ))}
      </ul>
    </Section>
  )
}
