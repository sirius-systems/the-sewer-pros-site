import Image from 'next/image'
import { Section, ButtonLink, type SectionDensity,
  type SectionSurface } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { SECTION_ICONS, CheckIcon } from './section-icons'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import { cn } from '@/lib/utils/cn'
import type { ScenariosContent } from '@/types'

/**
 * "When should you schedule an inspection?" — customer situations.
 *
 * Governed by docs/18-design-system.md §5.6, §11; docs/14-content-specification.md;
 * CLAUDE.md §22, §39, §43.
 *
 * ===========================================================================
 * ⚠ WHY THIS IS NOT `ProblemGrid` WITH AN EXTRA FLAG
 * ===========================================================================
 * `ProblemGrid` is an even grid of equal cards, and evenness is the
 * point there: a list of conditions has no natural first item. A list
 * of SITUATIONS does. One of them is why most visitors are on the page,
 * and 18 §5.6 warns that an unbroken run of identical card grids is
 * "the single strongest visual signal of a templated site" - this page
 * already renders two of them above.
 *
 * So the composition is deliberately uneven: one featured tile at two
 * columns by two rows, the rest as compact icon cards around it. Same
 * primitives, different rhythm.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THE CARDS DESCRIBE SITUATIONS, NOT SYMPTOMS THAT PROMISE A CAUSE
 * ---------------------------------------------------------------------------
 * Every description says what an inspection can DOCUMENT or HELP
 * determine, never what it will find or prove. CLAUDE.md §24 forbids
 * guaranteeing that a defect is visible or that a cause will be
 * established, and this section is where that temptation is strongest
 * because it is written to people who already have a problem.
 *
 * ⚠ NO ALARM. No burst pipe, no flooded basement, no cost of inaction.
 * §43 puts fear and artificial urgency outside the conversion model.
 */
export interface ScenarioGridProps {
  content: ScenariosContent
  density?: SectionDensity
  id?: string
  /** Overrides the section's natural surface. */
  surface?: SectionSurface
}

export function ScenarioGrid({
  content,
  density = 'standard',
  id = 'when-to-inspect',
  surface = 'muted',
}: ScenarioGridProps) {
  /*
    ⚠ EXACTLY ONE FEATURED TILE, AND THE FIRST ONE WINS. The type says
    "exactly one may set this"; a content file that set two would
    otherwise ship a grid with an orphaned row. Enforcing it here means
    the layout degrades to correct rather than to broken.
  */
  const featuredIndex = content.items.findIndex(
    (item) => item.featured === true,
  )
  /*
    ⚠ SAME OPT-IN AS `ProblemGrid`. Las Vegas renders this section with
    icons and no photographs; framing them would give that page six
    large empty panels for no gain.
  */
  const framed = content.items.some((item) => item.image !== undefined)

  const action =
    content.action !== undefined
      ? resolveApprovedLink(content.action.pageId, {
          label: content.action.label,
        })
      : undefined

  return (
    <Section density={density} surface={surface} labelledBy={id}>
      <div className="max-w-[52rem]">
        <SectionHeading
          id={id}
          eyebrow={content.eyebrow}
          title={content.title}
        />
        {content.intro !== undefined && (
          <p className="mt-4 text-body-lg text-muted-foreground">
            {content.intro}
          </p>
        )}
      </div>

      {/*
        ⚠ `auto-rows-fr` IS WHAT LETS THE FEATURED TILE SPAN TWO ROWS
        CLEANLY. Without it the row heights are content-derived and the
        tall tile stops aligning with the pair beside it.
      */}
      <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:auto-rows-fr lg:grid-cols-3">
        {content.items.map((item, index) => {
          const isFeatured = index === featuredIndex
          const Icon =
            item.icon !== undefined ? SECTION_ICONS[item.icon] : CheckIcon

          return (
            <li
              key={item.title}
              className={cn(
                'h-full',
                isFeatured && 'sm:col-span-2 lg:row-span-2',
              )}
            >
              <article
                className={cn(
                  'flex h-full flex-col rounded-md border border-border bg-surface',
                  framed && 'overflow-hidden',
                  isFeatured ? 'p-6 sm:p-8' : 'p-5 sm:p-6',
                )}
              >
                {/*
                  ⚠ ONE FRAME SHAPE PER CARD, AND THE FEATURED TILE'S
                  IS WIDER. It spans two columns, so a 4:3 crop there
                  would be enormous; 16:9 keeps it proportionate while
                  the compact cards stay 4:3.

                  ⚠ THE ICON FALLBACK KEEPS THE GRID REGULAR when a
                  card has no photograph. It carries the green plate on
                  the featured tile and blue elsewhere, which is the
                  accent split this section always used (DEC-096).
                */}
                {!framed ? (
                  <span
                    aria-hidden="true"
                    className={cn(
                      'flex shrink-0 items-center justify-center rounded-sm',
                      isFeatured
                        ? 'h-12 w-12 bg-accent text-white'
                        : 'h-10 w-10 bg-accent-secondary text-white',
                    )}
                  >
                    <Icon className={isFeatured ? 'h-6 w-6' : 'h-5 w-5'} />
                  </span>
                ) : item.image !== undefined ? (
                  <div
                    className={cn(
                      'relative -mx-5 -mt-5 mb-4 overflow-hidden rounded-t-md bg-surface-muted sm:-mx-6 sm:-mt-6',
                      isFeatured
                        ? 'aspect-[16/9] sm:-mx-8 sm:-mt-8'
                        : 'aspect-[4/3]',
                    )}
                  >
                    <Image
                      src={item.image.src}
                      alt={item.image.alt}
                      fill
                      className="object-cover"
                      sizes={
                        isFeatured
                          ? '(min-width: 1024px) 42vw, 100vw'
                          : '(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 100vw'
                      }
                    />
                  </div>
                ) : (
                  <div
                    className={cn(
                      '-mx-5 -mt-5 mb-4 flex items-center justify-center rounded-t-md bg-surface-muted sm:-mx-6 sm:-mt-6',
                      isFeatured
                        ? 'aspect-[16/9] sm:-mx-8 sm:-mt-8'
                        : 'aspect-[4/3]',
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        'flex items-center justify-center rounded-sm text-white',
                        isFeatured
                          ? 'h-14 w-14 bg-accent'
                          : 'h-12 w-12 bg-accent-secondary',
                      )}
                    >
                      <Icon className={isFeatured ? 'h-7 w-7' : 'h-6 w-6'} />
                    </span>
                  </div>
                )}

                <h3
                  className={cn(
                    !framed && 'mt-4',
                    'text-foreground',
                    isFeatured ? 'text-h4' : 'text-body font-semibold',
                  )}
                >
                  {item.title}
                </h3>

                <p
                  className={cn(
                    'mt-2 text-muted-foreground',
                    isFeatured ? 'text-body' : 'text-body-sm',
                  )}
                >
                  {item.description}
                </p>
              </article>
            </li>
          )
        })}
      </ul>

      {action !== undefined && (
        <div className="mt-8">
          <ButtonLink href={action.href}>{action.label}</ButtonLink>
        </div>
      )}
    </Section>
  )
}

/** Whether the section has anything to render. */
export function scenarioGridRenders(
  content: ScenariosContent | undefined,
): content is ScenariosContent {
  return content !== undefined && content.items.length > 0
}
