import { Section, type SectionDensity, type SectionSurface } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { foundingYear, MARKET_SCOPED_CLAIMS } from '@/data/business/organization'
import { markets } from '@/data/markets/markets'

/**
 * Proof stats band.
 *
 * Governed by docs/18-design-system.md §108 (density variation);
 * `data/business/organization.ts` (`MARKET_SCOPED_CLAIMS`).
 *
 * ⚠ EVERY FIGURE READS FROM `organization.ts` RATHER THAN BEING
 * RETYPED. That file is the single source for verified business facts,
 * and the two stats drawn from `MARKET_SCOPED_CLAIMS` carry their scope
 * in the label, not just the value — "over 100,000 camera inspections"
 * is a St. Louis fact (DEC-072), and 01 §20 forbids presenting it as
 * company-wide. A caller cannot mis-scope these because there is no
 * prop to pass different text into.
 *
 * No count-up animation (18 §65's "no overengineering with animation"
 * applied to a metrics band, and it avoids the layout-shift risk of an
 * animated counter mounting client-side).
 */
export interface StatsBandProps {
  density?: SectionDensity
  surface?: SectionSurface
  id?: string
}

const STATS = [
  { label: 'Serving customers since', value: String(foundingYear) },
  { label: MARKET_SCOPED_CLAIMS.companyWide[0], value: '100+ years' },
  {
    label: `In St. Louis: ${MARKET_SCOPED_CLAIMS.stLouisOnly[1]}`,
    value: '100,000+',
  },
  { label: 'Markets served', value: String(Object.keys(markets).length) },
] as const

export function StatsBand({
  density = 'standard',
  surface = 'muted',
  id = 'proof',
}: StatsBandProps) {
  return (
    <Section density={density} surface={surface} labelledBy={id}>
      <SectionHeading id={id} title="Experience behind the findings" level="h2" />
      <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label} className="border-l-2 border-border pl-4">
            <dt className="text-sm leading-5 text-muted-foreground">
              {stat.label}
            </dt>
            <dd className="mt-1 text-h3 font-semibold tracking-tight text-foreground">
              {stat.value}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
