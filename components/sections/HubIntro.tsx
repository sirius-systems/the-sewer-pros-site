import { Section, type SectionSurface } from '@/components/ui'
import { SECTION_ICONS } from './section-icons'
import { cn } from '@/lib/utils/cn'
import type { HubIntroContent } from '@/types'

/**
 * A hub's opening explainer: eyebrow and heading beside the prose, with
 * a benefit row and an in-page link beneath both.
 *
 * Governed by docs/18-design-system.md §11, §15, §94-95, Appendix A;
 * docs/14-content-specification.md; docs/17-conversion-architecture.md;
 * CLAUDE.md §29, §39, §43, §58.
 *
 * ===========================================================================
 * ⚠ WHY THIS IS NOT `Prose` IN A `Section`
 * ===========================================================================
 * That is what `/services/` had: four sentences at reading width, under
 * the trust strip, above the service mosaic. It read as a caption for
 * the grid rather than as the page's own opening argument, and it gave
 * the hub no orientation content at all before the cards.
 *
 * The split is what does the work. A heading holding the left column
 * lets the prose run to its own measure on the right instead of
 * stretching across the container, and the two columns top-aligned mean
 * a long heading and a long body do not have to be the same length.
 *
 * ---------------------------------------------------------------------------
 * ⚠ NO BUTTON HERE, ON INSTRUCTION
 * ---------------------------------------------------------------------------
 * The header carries the scheduling action on every page and the closing
 * CTA carries a form. A third ask in the opening band would be the
 * competing conversion path 18 §62 and §106 rule out; the in-page link
 * below the benefits is navigation, not an ask.
 *
 * ⚠ THE BENEFIT ROW IS COMPACT BY DESIGN. Three bordered cards here
 * would be the first of four card treatments on this page, ahead of the
 * service mosaic, the market cards and the routing grid. 18 §5.6 names
 * the unbroken run of card grids as the strongest signal of a templated
 * site, so these are an icon, a line and a sentence.
 */
export interface HubIntroProps {
  content: HubIntroContent
  id?: string
  /** Overrides the section's natural surface. */
  surface?: SectionSurface
}

/** Whether the section has anything to render. */
export function hubIntroRenders(
  content: HubIntroContent | undefined,
): content is HubIntroContent {
  return content !== undefined && content.body.length > 0
}

export function HubIntro({
  content,
  id = 'hub-intro',
  surface = 'muted',
}: HubIntroProps) {
  if (content.body.length === 0) return null

  /*
    ==========================================================================
    THE TEXTURE FORCES TWO COLOUR SWAPS, AND THE NUMBERS ARE MEASURED
    ==========================================================================
    The drawing is pale, but "pale" is not an argument. Compositing its
    darkest stroke over `--surface-muted` at 40% gives a background of
    #c4cbd3, and against that:

      --foreground        #1f2933   9.01:1   passes
      --brand             #0b2d45   8.70:1   passes
      --muted-foreground  #5f6b73   3.34:1   FAILS
      --accent-secondary  #1c6b97   3.56:1   FAILS

    So the body copy and the benefit descriptions take `foreground`
    where they take `muted-foreground` on a bare surface, and the
    eyebrow and the anchor link take `brand` where they take
    `accent-secondary`. Both swaps make the text DARKER, so nothing
    else on the band needs re-measuring.

    ⚠ THE ALTERNATIVE WAS AN INVISIBLE DRAWING. Holding
    `muted-foreground` at 4.5:1 against the worst stroke caps the
    texture at 12% opacity, which is below the threshold where the
    artwork reads at all. Strengthening the text was the trade that
    kept both: every colour on this band is now at least 8.7:1, against
    5.08:1 for the muted copy before the texture existed.

    ⚠ THE ICONS AND THE ACCENT RULE ARE NOT SWAPPED, DELIBERATELY. Both
    are `aria-hidden` decoration with the meaning in the text beside
    them, so 1.4.11's 3:1 for meaningful graphics does not apply.
  */
  const textured = content.background !== undefined
  const bodyText = textured ? 'text-foreground' : 'text-muted-foreground'
  const accentText = textured ? 'text-brand' : 'text-accent-secondary'

  /*
    ⚠ NOT AN APPROVED-PAGE LINK, AND DELIBERATELY NOT RESOLVED AS ONE.
    `resolveApprovedLink` exists for destinations in the page registry;
    this one is an in-page fragment on the page already being rendered,
    so there is no record to look up and nothing to gate.
  */
  const link = content.link

  return (
    /*
      ⚠ `standard` DENSITY, WHICH IS ALREADY THE BRIEF'S NUMBERS.
      `--space-section-standard` is `clamp(3rem, 6vw, 5rem)`: 48px at
      the small end and 80px at the large one, inside the 40-48 and
      72-88 the brief asked for. A literal padding value here would
      duplicate the token and drift from it.

      ⚠ THE RULES ARE THE SEPARATION, AND THEY ARE WHY THIS BAND CAN
      SIT BESIDE ANOTHER LIGHT ONE. `border-y border-border` is the
      existing neutral token, one hairline top and bottom.
    */
    <Section
      density="standard"
      surface={surface}
      labelledBy={id}
      className="border-y border-border"
      /*
        ⚠ `texture`, NOT `backgroundImage`. The asset is pale line art
        on a transparent ground, so the photograph path - which scrims
        at 55% black and turns the section's text white - would ruin
        both it and the copy. `texture` paints behind the surface
        colour, adds no scrim and changes no text colour. See
        `HubIntroContent.background`.

        ⚠ 40% IS THE MEASURED CEILING FOR THIS PAIRING, and the block
        above the return records what it is measured against. Anything
        stronger belongs in `backgroundImage`, which carries a scrim
        sized for text on top; this layer has none.

        ⚠ `bg-right-bottom` ONLY. `Section` already sets `bg-cover` on
        this layer and `cn()` is a plain join rather than
        tailwind-merge, so a `bg-contain` passed here would ship both
        and let stylesheet order pick the winner. Cover is the right
        behaviour anyway: the lateral runs along the lower edge of the
        frame, and anchoring to the bottom right keeps that run and the
        camera head in view while the crop takes the empty top.
      */
      texture={
        content.background !== undefined
          ? {
              src: content.background.src,
              className: 'bg-right-bottom opacity-40',
            }
          : undefined
      }
    >
      {/*
        ⚠ 5 COLUMNS READ AS 40/60. Two and three of five is the closest
        clean division to the split the brief specifies; a literal
        percentage would not align with anything else on the page.

        ⚠ `lg:items-start` KEEPS THE COLUMNS TOP-ALIGNED. Without it the
        shorter column stretches and its content centres against the
        longer one, which is the one thing a heading-beside-prose layout
        must not do.
      */}
      <div className="grid gap-x-12 gap-y-8 lg:grid-cols-5 lg:items-start">
        <div className="lg:col-span-2">
          {/*
            ⚠ THE ACCENT RULE IS DECORATIVE AND SAYS SO. It is a short
            blue bar above the eyebrow, `aria-hidden` because it carries
            no meaning the eyebrow does not already carry in words.
          */}
          <span
            aria-hidden="true"
            className="block h-1 w-10 rounded-full bg-accent-secondary"
          />
          {content.eyebrow !== undefined && (
            <p
              className={cn(
                'mt-4 text-caption font-semibold tracking-wide uppercase',
                accentText,
              )}
            >
              {content.eyebrow}
            </p>
          )}
          {/*
            ⚠ `h2`, NEVER `h1`. The hero owns the page's only H1 and
            18 §15 wants one per page; this template is composed below
            one on every hub that renders it.
          */}
          <h2 id={id} className="mt-3 text-h2 text-foreground text-balance">
            {content.title}
          </h2>
        </div>

        {/*
          ⚠ THE MEASURE IS CAPPED ON THE COLUMN, NOT THE CONTAINER.
          42rem is 672px, inside the 620-680 the brief asked for, and it
          only applies once the two columns exist - below `lg` the
          column is already the container's width.
        */}
        <div className="lg:col-span-3 lg:max-w-[42rem]">
          {content.body.map((paragraph, index) => (
            <p
              key={paragraph.slice(0, 48)}
              className={cn('text-body-lg', bodyText, index > 0 && 'mt-4')}
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      {/*
        ⚠ THE ROW SPANS BOTH COLUMNS AND SITS BELOW THEM, which is why
        it is a sibling of the grid rather than a cell inside it.
        `mt-10` is 40px, the low end of the brief's 40-48.
      */}
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {content.benefits.map((benefit) => {
          const Icon = SECTION_ICONS[benefit.icon]
          return (
            <li key={benefit.title} className="flex gap-3">
              {/*
                ⚠ DECORATIVE, AND HIDDEN. `SECTION_ICONS` sets
                `aria-hidden`; the heading beside it carries the
                meaning, so an accessible name here would be announced
                twice.

                ⚠ BLUE FOR THE DIAGNOSTIC PAIR, GREEN FOR THE DECISION.
                `--accent` is the conversion colour and `--accent-secondary`
                the authority one, which is the split the palette
                already draws and the brief asked for by position.
              */}
              <Icon
                className={cn(
                  'mt-0.5 h-6 w-6 shrink-0',
                  benefit.accent === 'green'
                    ? 'text-accent'
                    : 'text-accent-secondary',
                )}
              />
              <div>
                <h3 className="text-body font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className={cn('mt-1 text-body-sm', bodyText)}>
                  {benefit.description}
                </p>
              </div>
            </li>
          )
        })}
      </ul>

      {/*
        ⚠ AN IN-PAGE ANCHOR, NOT A BUTTON, AND IT IS A REAL `<a href>`
        SO IT WORKS WITHOUT JAVASCRIPT. `:target` in `app/globals.css`
        already gives every anchor destination a 6rem scroll margin, so
        the sticky header does not cover the heading it lands on.

        ⚠ THE FOCUS RING IS EXPLICIT. A text link on a muted ground
        needs a visible keyboard state (18 §94-95); the offset keeps the
        ring clear of the underline.

        `mt-6` is 24px, the brief's spacing from the benefit row.
      */}
      {link !== undefined && (
        <p className="mt-6">
          <a
            href={`#${link.targetId}`}
            className={cn(
              'rounded-sm text-body font-semibold underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-secondary',
              accentText,
            )}
          >
            {link.label}
            {/*
              ⚠ THE ARROW IS DECORATIVE. The label already says the link
              moves down the page; a screen reader announcing a
              downwards arrow after it adds nothing.
            */}
            <span aria-hidden="true"> &darr;</span>
          </a>
        </p>
      )}
    </Section>
  )
}
