import Image from 'next/image'
import {
  Section,
  Card,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import { cn } from '@/lib/utils/cn'
import { SectionHeading } from './SectionHeading'
import { SECTION_ICONS } from './section-icons'
import type { CardImage, ExperienceIconName } from '@/types'

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
  /**
   * Decorative line mark beside the heading.
   *
   * ⚠ OPTIONAL, AND EVERY EXISTING CALLER OMITS IT. St. Louis's
   * `lateralCards` render exactly as before; a card with no icon gets
   * no icon rather than a fallback mark, because a grid where only
   * some cards carry one reads as a rendering fault.
   *
   * ⚠ `aria-hidden` IS APPLIED BY `baseIconProps`, not here. The
   * heading already names the card; the mark repeats it.
   */
  icon?: ExperienceIconName
  /**
   * Icon colour. Blue is this system's non-CTA emphasis and green is
   * the conversion accent (DEC-096), so alternating them across a grid
   * is decoration rather than meaning - use it for rhythm, never to
   * mark one condition as more urgent.
   */
  accent?: 'blue' | 'green'
  /**
   * A 4:3 frame at the head of the card.
   *
   * ⚠ ALL OR NONE WITHIN ONE GRID, IDEALLY. A card without one falls
   * back to its icon inside the same frame, which keeps the row
   * regular; a row that mixed full frames with bare plates would read
   * as images failing to load.
   */
  image?: CardImage
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
  /** Overrides the section's natural surface. */
  surface?: SectionSurface
  /**
   * A highlighted note under the grid.
   *
   * ⚠ FOR CLAIMS THAT CAN GO STALE. It exists so a section describing
   * someone else's programme, policy or eligibility rules can tell the
   * reader to verify before relying on it, in a panel that does not
   * read as one more card. Every existing caller omits it.
   */
  note?: { title?: string; body: string }
}

/**
 * Whether `ProblemGrid` renders anything.
 *
 * An authored but empty item list renders nothing rather than an
 * empty grid (18 §120), so supplying `problems` is not the same as
 * having any.
 *
 * A template listing this section in its `densities` array must gate
 * that entry on this predicate. An array entry for a section that
 * omitted itself describes a page that was never built, and
 * `sectionRhythmIssues()` then checks the fiction instead of the page.
 *
 * Exported rather than restated at each call site so the array and the
 * render read one condition, not two copies of it.
 */
export function problemGridRenders(
  items: readonly ProblemGridItem[] | undefined,
): boolean {
  return items !== undefined && items.length > 0
}

export function ProblemGrid({
  density = 'standard',
  id = 'when-you-may-need-this',
  eyebrow,
  title,
  intro,
  items,
  surface = 'default',
  note,
}: ProblemGridProps) {
  // 18 §120 — omit the section entirely rather than render an empty shell.
  if (items.length === 0) return null

  // 18 §5.6 forbids forcing an item count into a grid it does not
  // divide into evenly.
  //
  // The composition specifies 4-6 items. An earlier version used
  // `length % 3 === 0 ? 3 : 2`, which handled 4 and 6 but dropped 5
  // into two columns and orphaned a cell — five is exactly the example
  // §5.6 names.
  //
  // Five has no clean divisor at these widths, so the remainder is
  // absorbed rather than left as a hole: the trailing card spans the
  // columns the last row would otherwise leave empty. That is
  // Appendix A's uneven-mosaic idea applied to a remainder, and it
  // means no item count in range can orphan.
  //
  // Deliberately not `CardGrid`: its even-division warning would be a
  // false positive here, since the span makes the orphan impossible.
  /*
    ⚠ THE FRAMED HEAD IS OPT-IN PER GRID, AND THIS GUARD IS WHY. The
    frame exists so a set where SOME cards have photographs still reads
    as one row; a set with none has nothing to keep regular, and
    framing its icons would turn a compact text comparison into two
    large empty panels.

    Caught in review: without this, Las Vegas's repair-coverage
    section - explicitly briefed as icon-led with no photograph - grew
    a pair of 4:3 muted blocks, and St. Louis's lateral cards would
    have too.
  */
  const framed = items.some((item) => item.image !== undefined)

  const columns = items.length % 3 === 0 ? 3 : 2
  const remainder = items.length % columns

  return (
    <Section density={density} surface={surface} labelledBy={id}>
      <SectionHeading id={id} title={title} eyebrow={eyebrow} intro={intro} />

      <div
        className={cn(
          'mt-10 grid grid-cols-1 gap-6',
          columns === 3 ? 'sm:grid-cols-2 lg:grid-cols-3' : 'sm:grid-cols-2',
        )}
      >
        {items.map((item, index) => {
          // The trailing `remainder` cards fill the short final row.
          const fillsRow = remainder !== 0 && index >= items.length - remainder

          return (
            <Card
              key={item.title}
              className={cn(
                framed && 'overflow-hidden',
                fillsRow && columns === 2 && 'sm:col-span-2',
                fillsRow && columns === 3 && 'lg:col-span-3',
              )}
            >
              {/*
                ⚠ ONE FRAME SHAPE FOR EVERY CARD, PHOTOGRAPH OR NOT.
                With artwork it holds a 4:3 crop; without, it holds the
                card's icon centred on the muted surface. A row that
                mixed full-bleed frames with bare 40px plates would
                look like the images had failed to load.

                ⚠ `-mx-6 -mt-6` PULLS THE FRAME TO THE CARD EDGES.
                `Card` supplies the padding; an image inset by it would
                read as a thumbnail rather than as the card's head.
              */}
              {!framed ? (
                item.icon !== undefined &&
                (() => {
                  const Icon = SECTION_ICONS[item.icon]
                  return (
                    <span
                      aria-hidden="true"
                      className={cn(
                        'mb-4 flex h-10 w-10 items-center justify-center rounded-sm text-white',
                        item.accent === 'green'
                          ? 'bg-accent'
                          : 'bg-accent-secondary',
                      )}
                    >
                      <Icon className="h-5 w-5" />
                    </span>
                  )
                })()
              ) : item.image !== undefined ? (
                <div className="relative -mx-6 -mt-6 mb-5 aspect-[4/3] overflow-hidden rounded-t-md bg-surface-muted">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className="object-cover"
                    sizes={
                      columns === 3
                        ? '(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw'
                        : '(min-width: 640px) 45vw, 100vw'
                    }
                  />
                </div>
              ) : (
                item.icon !== undefined &&
                (() => {
                  const Icon = SECTION_ICONS[item.icon]
                  return (
                    <div className="-mx-6 -mt-6 mb-5 flex aspect-[4/3] items-center justify-center rounded-t-md bg-surface-muted">
                      <span
                        aria-hidden="true"
                        className={cn(
                          'flex h-14 w-14 items-center justify-center rounded-sm text-white',
                          item.accent === 'green'
                            ? 'bg-accent'
                            : 'bg-accent-secondary',
                        )}
                      >
                        <Icon className="h-7 w-7" />
                      </span>
                    </div>
                  )
                })()
              )}
              <h3 className="text-h4 font-medium tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {item.description}
              </p>
            </Card>
          )
        })}
      </div>

      {note !== undefined && (
        <div className="mt-8 rounded-md border border-warning/40 bg-warning/5 p-5 sm:p-6">
          {note.title !== undefined && (
            <p className="text-body font-semibold text-foreground">
              {note.title}
            </p>
          )}
          <p className="mt-1 text-body-sm text-muted-foreground">{note.body}</p>
        </div>
      )}
    </Section>
  )
}
