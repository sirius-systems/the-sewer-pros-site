import {
  Section,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import { CountUpValue } from './CountUpValue'
import {
  CameraCheckIcon,
  CalendarRepeatIcon,
  FoldedMapIcon,
  CalendarClockIcon,
  type IconProps,
} from './section-icons'
import { foundingYear, inspectionVolume } from '@/data/business/organization'
import { markets } from '@/data/markets/markets'

/**
 * Homepage experience counter strip.
 *
 * Sits between `Hero` and the existing `TrustBar` (owner direction,
 * 2026-09-27) — an animated, icon-led figure row rather than the trust
 * bar's statement list. `TrustBar` is unchanged.
 *
 * ⚠ EVERY FIGURE READS FROM `organization.ts` / `markets.ts`, THE SAME
 * RULE `StatsBand` FOLLOWS. `inspectionVolume` is a company-wide figure
 * distinct from `MARKET_SCOPED_CLAIMS.stLouisOnly` — see that constant's
 * doc comment before changing either.
 *
 * The founding year renders as static text ("Since 2011"), never
 * through `CountUpValue`: counting up to a year is not a meaningful
 * quantity, and it is not a derived "years in business" claim, which
 * would need separate verification.
 *
 * `density` defaults to `dense` (owner direction, 2026-09-27): the
 * strip is a quick figure row between two other bands, not a section
 * that needs `standard`'s taller padding to breathe.
 */
export interface ExperienceCounterStripProps {
  density?: SectionDensity
  surface?: SectionSurface
  id?: string
}

const COUNTERS: readonly {
  id: string
  icon: (props: IconProps) => React.JSX.Element
  label: string
  value: number
  suffix: string
}[] = [
  {
    id: 'inspections-total',
    icon: CameraCheckIcon,
    label: 'Sewer inspections performed',
    value: inspectionVolume.total,
    suffix: '+',
  },
  {
    id: 'inspections-per-year',
    icon: CalendarRepeatIcon,
    label: 'Inspections per year',
    value: inspectionVolume.perYear,
    suffix: '+',
  },
  {
    id: 'markets-served',
    icon: FoldedMapIcon,
    label: 'Markets served',
    value: Object.keys(markets).length,
    suffix: '',
  },
]

export function ExperienceCounterStrip({
  density = 'dense',
  surface = 'default',
  id = 'experience-counters',
}: ExperienceCounterStripProps) {
  return (
    <Section density={density} surface={surface} as="aside" labelledBy={id}>
      <h2 id={id} className="sr-only">
        Experience behind The Sewer Pros
      </h2>
      <dl className="grid grid-cols-2 gap-x-6 gap-y-10 text-center lg:grid-cols-4">
        {COUNTERS.map((counter) => {
          const Icon = counter.icon
          return (
            <div key={counter.id} className="flex flex-col items-center">
              <Icon className="h-8 w-8 text-accent" />
              <dd className="mt-3 text-h2 font-semibold tracking-tight text-foreground">
                <CountUpValue value={counter.value} suffix={counter.suffix} />
              </dd>
              <dt className="mt-1 text-sm text-muted-foreground">
                {counter.label}
              </dt>
            </div>
          )
        })}
        <div className="flex flex-col items-center">
          <CalendarClockIcon className="h-8 w-8 text-accent" />
          {/*
            Static, not `CountUpValue` — see the header note. `foundingYear`
            is read from `organization.ts` rather than retyped.
          */}
          <dd className="mt-3 text-h2 font-semibold tracking-tight text-foreground">
            Since {foundingYear}
          </dd>
          <dt className="mt-1 text-sm text-muted-foreground">
            Serving property owners
          </dt>
        </div>
      </dl>
    </Section>
  )
}
