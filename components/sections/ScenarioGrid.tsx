import Image from 'next/image'
import { Section, ButtonLink, type SectionDensity,
  type SectionSurface } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { SECTION_ICONS, CheckIcon } from './section-icons'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import { cn } from '@/lib/utils/cn'
import type { ScenarioCard, ScenariosContent } from '@/types'

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

/**
 * Restores content order below `lg` for the `masonry` shape.
 *
 * ⚠ WRITTEN OUT AS LITERALS BECAUSE TAILWIND SCANS SOURCE TEXT. A
 * template string such as `order-${n}` produces no class at all, and
 * the failure is silent: the cards render, they simply stack in the
 * wrong order.
 *
 * ⚠ WHY THE SHUFFLE IS NEEDED AT ALL. `masonry` groups the cards into
 * two column wrappers, so its DOM order is primary column then
 * secondary column. Below `lg` the wrappers are `display: contents`
 * and every card flows in the outer grid again, where the section's
 * authored order is the one to read. Nothing here is focusable - the
 * cards are headings and prose, and the only control in the section is
 * the button below the mosaic - so this moves paint order only.
 */
const CONTENT_ORDER = [
  'order-1',
  'order-2',
  'order-3',
  'order-4',
  'order-5',
  'order-6',
  'order-7',
  'order-8',
  'order-9',
  'order-10',
  'order-11',
  'order-12',
] as const

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

  /*
    ==========================================================================
    TWO MOSAIC SHAPES. See `ScenariosContent.featureLayout`.
    ==========================================================================
    ⚠ `banner` DERIVES ITS COLUMN SPANS FROM `items`, NOT FROM FIXED
    NUMBERS. The cards before the feature share the row above it and
    the cards after share the row below, so each group divides the
    six-column track between them: two before is 3 each, three after is
    2 each. Hard-coding those would break the day a card moved.

    ⚠ SIX COLUMNS BECAUSE SIX DIVIDES BY 1, 2, 3 AND 6. A group of four
    or five has no clean span, so those fall back to a whole row each
    rather than orphaning a cell (18 §5.6).
  */
  const banner = content.featureLayout === 'banner' && featuredIndex >= 0
  const spanFor = (count: number): string =>
    count === 1
      ? 'lg:col-span-6'
      : count === 2
        ? 'lg:col-span-3'
        : count === 3
          ? 'lg:col-span-2'
          : count === 6
            ? 'lg:col-span-1'
            : 'lg:col-span-6'
  const beforeCount = featuredIndex
  const afterCount = content.items.length - featuredIndex - 1

  /*
    ==========================================================================
    `masonry` - TWO COLUMNS THAT FLOW INDEPENDENTLY
    ==========================================================================
    ⚠ THIS EXISTS BECAUSE A SINGLE GRID CANNOT DO IT. `tile` gives the
    feature two rows of a shared track, and shared tracks are sized by
    the tallest thing in them: the two compact cards beside the feature
    are together far taller than the feature's own content, so the
    feature's cell was left with a few hundred pixels of empty white
    under it and the next row could not start until both had cleared.
    `self-start` removed the stretch but not the reserved height.

    The fix is to stop the two sides sharing row tracks at all. Each
    column is its own grid, so the pair under the feature moves up into
    the space the old row span was holding, and the section ends at the
    taller of the two columns rather than at the sum of the rows.

    ⚠ THE WRAPPERS ARE `display: contents` BELOW `lg`, which is what
    keeps this a desktop-only change. At `sm` and below the six cards
    are direct children of the outer grid exactly as before, so the
    one-column and two-column behaviour is untouched - and the card
    markup is written once either way.
  */
  const masonry = content.featureLayout === 'masonry' && featuredIndex >= 0
  const entries = content.items.map((item, index) => ({ item, index }))
  const primary = entries.filter(
    ({ item, index }) =>
      index === featuredIndex || item.masonryColumn === 'primary',
  )
  const secondary = entries.filter(
    ({ item, index }) =>
      index !== featuredIndex && item.masonryColumn !== 'primary',
  )

  const action =
    content.action !== undefined
      ? resolveApprovedLink(content.action.pageId, {
          label: content.action.label,
        })
      : undefined

  /*
    ⚠ ONE CARD RENDERER, CALLED FROM THREE PLACES. `masonry` needs the
    cards inside two column wrappers and the other shapes need them in
    one flat list; writing the markup twice would put the section a
    single edit away from an image, an alt text or a heading level
    differing between breakpoints. `index` is the card's position in
    `content.items`, not in the group, so the featured test and the
    below-`lg` order both stay anchored to authored order.
  */
  const renderCard = (item: ScenarioCard, index: number) => {
    const isFeatured = index === featuredIndex
    const Icon = item.icon !== undefined ? SECTION_ICONS[item.icon] : CheckIcon

    return (
      <li
        key={item.title}
        className={cn(
          'h-full',
          /*
            ⚠ THE BANNER'S SPANS COME FROM THE ITEM'S POSITION
            RELATIVE TO THE FEATURE, so DOM order and visual
            order cannot drift apart. The last card of an odd
            trailing group fills the leftover column at `sm`,
            which is what `ProblemGrid` already does with a
            remainder rather than leaving a hole.
          */
          banner &&
            (isFeatured
              ? 'sm:col-span-2 lg:col-span-6'
              : cn(
                  index < featuredIndex
                    ? spanFor(beforeCount)
                    : spanFor(afterCount),
                  index === content.items.length - 1 &&
                    afterCount % 2 === 1 &&
                    'sm:col-span-2',
                )),
          /*
            ⚠ `lg:h-auto lg:self-start` IS THE WHOLE FIX FOR THE
            BLANK HALF OF THIS CARD. The tile spans two rows so
            the mosaic has no orphaned cell, and `auto-rows-fr`
            makes those two rows equal - so the card was being
            sized to the COMBINED height of the two compact cards
            beside it and padding the difference with empty
            white. Its own content never filled that.

            ⚠ THE ROW SPAN STAYS. Removing it would fix the
            height and break the grid: six items with a
            two-column feature and no row span leaves a trailing
            row of one, which is the orphan 18 §5.6 prohibits by
            name. `self-start` keeps the shape and drops the
            stretch, which is the actual cause.

            ⚠ SCOPED TO `lg`. Below it there is no row span, the
            feature sits beside one compact card, and `h-full` is
            what keeps that pair level.

            ⚠ NONE OF IT APPLIES TO `masonry`, WHICH IS THE
            POINT OF THAT SHAPE. There the feature heads a
            column of its own, so it needs no row span to avoid
            an orphan and no `self-start` to undo one.
          */
          !banner &&
            !masonry &&
            isFeatured &&
            'sm:col-span-2 lg:row-span-2 lg:h-auto lg:self-start',
          /*
            ⚠ THE FEATURE STILL SPANS BOTH COLUMNS - OF THE
            PRIMARY GROUP AT `lg`, AND OF THE OUTER GRID BELOW
            IT. One utility covers both because the group's
            subgrid is also two columns wide.
          */
          masonry && isFeatured && 'sm:col-span-2',
          /*
            See `CONTENT_ORDER`: the wrappers put the cards in
            column order, and this puts them back in authored
            order wherever the wrappers are not laying anything
            out.
          */
          masonry && CONTENT_ORDER[index],
          masonry && 'lg:order-none',
        )}
      >
        <article
          className={cn(
            'flex h-full flex-col rounded-md border border-border bg-surface',
            !banner && !masonry && isFeatured && 'lg:h-auto',
            framed && 'overflow-hidden',
            /*
              ⚠ THE FEATURE'S VERTICAL PADDING IS TIGHTER THAN
              ITS HORIZONTAL. 24px each side, 20px top and
              bottom: the image is pulled to the card edges, so
              the only padding that reads is the band under it,
              and 32px there was part of what made the card look
              empty. The negative margins on the frame below
              track these values and must move with them.
            */
            isFeatured ? 'px-6 py-5' : 'p-5 sm:p-6',
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
          {/*
              ⚠ BOTH BRANCHES ARE WRITTEN OUT IN FULL. A first
              pass appended the feature's offsets to a shared
              base and shipped `-mx-5` AND `-mx-6` on the same
              element: `cn()` is a plain join, not
              tailwind-merge, so both survive and the CSS
              stylesheet order picks the winner rather than the
              order written here. There is no safe way to
              override a base utility by appending to it.

              ⚠ THE OFFSETS MIRROR THE CARD PADDING. The
              feature is `px-6 py-5` at every width, so its
              frame pulls 24px sideways and 20px up; the
              compact cards are `p-5 sm:p-6` and theirs tracks
              that instead.
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
              className={
                isFeatured
                  ? cn(
                      'relative -mx-6 -mt-5 mb-3 aspect-[16/9] overflow-hidden rounded-t-md bg-surface-muted',
                      /*
                        ⚠ WIDER WHEN THE FEATURE IS A FULL-WIDTH
                        BANNER. 16:9 across six columns is over
                        600px tall on a laptop, which is the
                        "excessively tall" the brief rules out.
                        21:9 crops a horizontal band from the
                        same 3344x1882 asset and keeps the card
                        in proportion; below `lg` the card is not
                        full width, so 16:9 still applies.
                      */
                      banner && 'lg:aspect-[21/9]',
                    )
                  : 'relative -mx-5 -mt-5 mb-4 aspect-[4/3] overflow-hidden rounded-t-md bg-surface-muted sm:-mx-6 sm:-mt-6'
              }
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
              className={
                isFeatured
                  ? cn(
                      '-mx-6 -mt-5 mb-3 flex aspect-[16/9] items-center justify-center rounded-t-md bg-surface-muted',
                      banner && 'lg:aspect-[21/9]',
                    )
                  : '-mx-5 -mt-5 mb-4 flex aspect-[4/3] items-center justify-center rounded-t-md bg-surface-muted sm:-mx-6 sm:-mt-6'
              }
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
  }

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
      <ul
        className={cn(
          'mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6',
          /*
            ⚠ NO `auto-rows-fr` ON THE BANNER. That exists to give the
            corner tile two equal rows to span; with the feature on a
            row of its own there is nothing to equalise, and forcing
            equal tracks would make the two-card row as tall as the
            banner.

            ⚠ NONE ON THE MASONRY EITHER, AND FOR A STRONGER REASON:
            equal tracks are the defect that shape exists to remove.
            `lg:items-start` keeps the two column groups at their own
            heights rather than stretching the shorter to the taller.
          */
          banner
            ? 'lg:grid-cols-6'
            : masonry
              ? 'lg:grid-cols-3 lg:items-start'
              : 'lg:auto-rows-fr lg:grid-cols-3',
        )}
      >
        {masonry ? (
          <>
            {/*
              ⚠ `contents lg:block` IS THE WHOLE RESPONSIVE MECHANISM.
              At `lg` these two are real grid items, two columns wide
              and one column wide, each laying out its own cards. Below
              `lg` they are `display: contents`, so they lay out
              nothing and their cards are direct children of the outer
              grid again - the same one-column and two-column
              behaviour the section had before this shape existed, from
              one copy of the markup.

              ⚠ NESTED LISTS, NOT DIVS INSIDE A `<ul>`. `ul > li > ul >
              li` is valid; a `<div>` child of a `<ul>` is not, and an
              invalid child is exactly the kind of thing that turns
              into an assistive-technology bug rather than a visible
              one.
            */}
            <li className="contents lg:col-span-2 lg:block">
              <ul className="contents lg:grid lg:grid-cols-2 lg:gap-6">
                {primary.map(({ item, index }) => renderCard(item, index))}
              </ul>
            </li>
            <li className="contents lg:col-span-1 lg:block">
              {/*
                ⚠ ONE COLUMN AND THE SAME GAP AS EVERY OTHER SEAM IN
                THE MOSAIC, so the three stacked cards sit on the same
                rhythm as the pair beside them.
              */}
              <ul className="contents lg:grid lg:grid-cols-1 lg:gap-6">
                {secondary.map(({ item, index }) => renderCard(item, index))}
              </ul>
            </li>
          </>
        ) : (
          content.items.map((item, index) => renderCard(item, index))
        )}
      </ul>

      {action !== undefined && (
        /*
          ⚠ TIGHTER UNDER THE MASONRY. The button used to clear a
          reserved row as well as this margin; with the mosaic ending
          at its real height, 32px on top of that read as a second gap.
          24px is the section's own card gap, so the button now sits
          one seam below the mosaic rather than a seam and a half.
        */
        <div className={masonry ? 'mt-6' : 'mt-8'}>
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
