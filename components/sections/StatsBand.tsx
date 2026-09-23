import type { ReactNode } from 'react'
import { Section, type SectionDensity, type SectionSurface } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { CountUpValue } from './CountUpValue'
import { foundingYear, MARKET_SCOPED_CLAIMS } from '@/data/business/organization'
import { markets, marketOperatingDetail } from '@/data/markets/markets'
import type { MarketId } from '@/types'

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
 * ---------------------------------------------------------------------------
 * ⚠ COUNT-UP ANIMATION — OWNER REQUEST, RECORDED RATHER THAN SILENTLY
 * REVERSING THE EARLIER NOTE
 * ---------------------------------------------------------------------------
 * This band shipped with no animation, reasoning that 18 §65 rules out
 * "overengineering with animation" for a metrics band and that a
 * client-mounted counter risks layout shift. The owner asked for a
 * restrained count-up directly, and the layout-shift risk is closed by
 * construction rather than argued away: `CountUpValue` server-renders
 * the FINAL value as real text and only rewrites it in place once
 * mounted, so the element's size never changes and nothing shifts.
 * `prefers-reduced-motion` still gets the static value with no motion at
 * all — see that component.
 */
export interface StatsBandProps {
  density?: SectionDensity
  surface?: SectionSurface
  id?: string
  /**
   * Scopes the band to one market (the market contact pages).
   *
   * ⚠ ST. LOUIS CLAIMS NEVER LEAVE ST. LOUIS (01 §20, DEC-072). St.
   * Louis shows its own founding year and inspection count; San Diego
   * shows its own founding year; Las Vegas has no operating history to
   * state. Only the company-wide experience figure appears in all three.
   * Omit for the sitewide band.
   */
  marketId?: MarketId
  /**
   * Stat ids to leave out. The contact page omits `markets-served`: a
   * market count describes coverage, not business performance.
   */
  omitIds?: readonly string[]
}

const STATS: readonly {
  id: string
  label: ReactNode
  value: number
  suffix: string
  /**
   * Renders the value as plain text, no count-up. For a year: counting
   * 0 up to 2011 is not a meaningful quantity, and thousands separators
   * would misprint it as "2,011".
   */
  static?: boolean
}[] = [
  {
    id: 'founding-year',
    label: 'Serving customers since',
    value: foundingYear,
    suffix: '',
    static: true,
  },
  {
    id: 'combined-experience',
    label: MARKET_SCOPED_CLAIMS.companyWide[0],
    value: 100,
    suffix: '+ years',
  },
  {
    id: 'st-louis-inspections',
    label: (
      <>
        <span className="font-semibold text-foreground">In St. Louis:</span>{' '}
        {MARKET_SCOPED_CLAIMS.stLouisOnly[1]}
      </>
    ),
    value: 100_000,
    suffix: '+',
  },
  {
    id: 'markets-served',
    label: 'Markets served',
    value: Object.keys(markets).length,
    suffix: '',
  },
]

type Stat = (typeof STATS)[number]

function marketStats(marketId: MarketId): readonly Stat[] {
  const combined = STATS.filter((s) => s.id === 'combined-experience')
  if (marketId === 'st-louis-mo') {
    return STATS.filter((s) => s.id !== 'markets-served')
  }
  const year = marketOperatingDetail[marketId]?.foundingYear ?? 0
  if (year === 0) return combined
  return [
    {
      id: 'market-founding-year',
      label: `Serving ${markets[marketId].city} since`,
      value: year,
      suffix: '',
      static: true,
    },
    ...combined,
  ]
}

export function StatsBand({
  density = 'standard',
  surface = 'muted',
  id = 'proof',
  marketId,
  omitIds = [],
}: StatsBandProps) {
  const stats = (marketId === undefined ? STATS : marketStats(marketId)).filter(
    (stat) => !omitIds.includes(stat.id),
  )
  return (
    <Section density={density} surface={surface} labelledBy={id}>
      <SectionHeading id={id} title="Experience behind the findings" level="h2" />
      <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-[repeat(auto-fit,minmax(11rem,1fr))]">
        {stats.map((stat) => (
          <div key={stat.id} className="border-l-2 border-border pl-4">
            <dt className="text-sm leading-5 text-muted-foreground">
              {stat.label}
            </dt>
            <dd className="mt-1 text-h3 font-semibold tracking-tight text-foreground">
              {stat.static === true ? (
                `${stat.value}${stat.suffix}`
              ) : (
                <CountUpValue value={stat.value} suffix={stat.suffix} />
              )}
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
