import type { ReactElement } from 'react'
import {
  Section,
  ButtonLink,
  type ButtonVariant,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { CameraIcon, MapPinIcon, type IconProps } from './section-icons'
import { resolveLinkableOnly } from '@/lib/links/approved-link'
import { cn } from '@/lib/utils/cn'
import type { MarketGuidanceContent } from '@/types'

/**
 * The service-area explainer on a hub whose members are markets.
 *
 * Governed by docs/18-design-system.md §5.6, §11, §87;
 * docs/01-business-brand-foundation.md §20-21; CLAUDE.md §11, §39, §58.
 *
 * ===========================================================================
 * ⚠ WHAT THIS REPLACED, AND WHY IT WAS NOT SIMPLY RESTYLED
 * ===========================================================================
 * `/locations/` opened with two prose headings inside a `width="reading"`
 * column: "Service markets, not branches" and "Why sewer work varies by
 * market". The information was right and the presentation buried it. A
 * ~42rem measure on a page whose every other band runs full width made
 * the one section carrying the page's central distinction read as the
 * least important thing on it.
 *
 * That distinction is not decorative. 01 §20-21 and CLAUDE.md §11 require
 * the site to keep "service market" and "business location" visibly
 * apart, and this section is where that is said in the visitor's own
 * terms rather than in a disclaimer.
 *
 * ---------------------------------------------------------------------------
 * ⚠ NO OFFICE LANGUAGE ANYWHERE, INCLUDING IN THE BUTTONS
 * ---------------------------------------------------------------------------
 * The panel's links say "Explore <market>", never "visit", "our
 * location", or "nearest branch" - nothing a reader could take as a
 * place they could drive to.
 *
 * ⚠ THE THREE BUTTONS ALTERNATE GREEN, BLUE, GREEN (owner, 2026-09-08),
 * AND THE CONSTRAINT THAT SHIPPED FIRST STILL HOLDS. They were one
 * variant originally because St. Louis is the only market with a
 * Google Business Profile (01 §21, DEC-020) and a heavier button on it
 * alone would imply an operational difference the copy does not claim.
 * An alternating rhythm does not do that: it is a pattern across the
 * row rather than a ranking, and the odd one out is San Diego, not the
 * market with the profile. All three keep the same size, padding and
 * label shape.
 *
 * ⚠ THE ACCENT IS PER LINK IN CONTENT, NOT DERIVED FROM THE INDEX.
 * Index-based colouring would silently re-colour every market the day
 * a fourth was added or the order changed.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THE CARD ACCENT IS A TOP RULE, NOT A TINTED CARD
 * ---------------------------------------------------------------------------
 * CLAUDE.md §39 names pill cards, icon bubbles, glassmorphism and
 * gradients among the patterns that make a site read as generated. The
 * accent here is a 3px rule across the top edge plus a square icon
 * plate: both flat, both drawn from DEC-096's `--accent` and
 * `--accent-secondary`, no third colour introduced.
 *
 * ⚠ GREEN APPEARS HERE AND IS NOT A CONVERSION ACTION. DEC-096 reserves
 * `--accent` for conversion; DEC-098 records the trust-bar icons as the
 * first knowing exception and the differentiator emphasis as the second.
 * This is the same kind of use - a category mark, not a call to action -
 * and the market buttons below it deliberately take `secondary` (blue)
 * rather than green so the one green thing on the section is not the
 * thing that looks clickable.
 */
export interface MarketGuidanceProps {
  /**
   * Overrides the section's natural surface.
   *
   * ⚠ DEFAULTS TO `muted`, WHICH IS WHAT THIS BAND HAS ALWAYS
   * RENDERED, so `/locations/` and every existing caller are
   * unchanged. `HubPageTemplate` passes `default` on a hub whose
   * opening band is itself muted: the section has to read as a
   * different band from its neighbour (18 §11), and only the composing
   * template can see what that neighbour is. Same rule as
   * `ReviewMarquee.surface`, reaching the opposite value for the same
   * reason.
   */
  surface?: SectionSurface
  content: MarketGuidanceContent
  density?: SectionDensity
  id?: string
}

const ICONS: Record<
  MarketGuidanceContent['cards'][number]['icon'],
  (props: IconProps) => ReactElement
> = {
  'map-pin': MapPinIcon,
  camera: CameraIcon,
}

/*
  ⚠ THE ACCENT PAIR IS DECLARED ONCE PER ROLE, RULE AND PLATE TOGETHER.
  Splitting them across two lookups is how a card ends up with a green
  rule and a blue plate.

  ⚠ `cn()` IN THIS REPO IS A PLAIN JOIN, NOT tailwind-merge. Conflicting
  utilities both ship and stylesheet order decides the winner, so these
  strings must not restate anything already on the element they land on.
*/
/*
  Green is `primary`, blue is `accent`.

  ⚠ GREEN ON A NAVIGATION LINK IS A KNOWN DEVIATION FROM DEC-096, which
  reserves `--accent` for conversion actions. It is owner-directed
  (2026-09-08) and it is the fourth such use after the trust-bar icons,
  the differentiator emphasis (DEC-098) and the card rules above. Worth
  a decision entry if a fifth appears - at that point the rule is not
  the rule any more.
*/
const BUTTON_VARIANT: Record<'green' | 'blue', ButtonVariant> = {
  green: 'primary',
  blue: 'accent',
}

const ACCENT: Record<
  MarketGuidanceContent['cards'][number]['accent'],
  { rule: string; plate: string }
> = {
  green: { rule: 'bg-accent', plate: 'bg-accent text-white' },
  blue: {
    rule: 'bg-accent-secondary',
    plate: 'bg-accent-secondary text-white',
  },
}

export function MarketGuidance({
  content,
  density = 'standard',
  id = 'market-guidance',
  surface = 'muted',
}: MarketGuidanceProps) {
  /*
    ⚠ `resolveLinkableOnly`, NOT `resolveApprovedLinks`. A market that is
    ever gated drops out of the panel rather than rendering a button to a
    page the site will not link to (16 §25). If all three dropped, the
    panel would be a heading over nothing, so it is skipped whole.
  */
  const marketLinks = resolveLinkableOnly(
    content.panel.links.map((link) => link.pageId),
  )
  const authored = new Map(
    content.panel.links.map((link) => [link.pageId, link]),
  )

  return (
    <Section density={density} surface={surface} labelledBy={id}>
      {/*
        ⚠ THE INTRO IS CONSTRAINED, THE GRID BELOW IT IS NOT. 18 §5.6
        wants a readable measure for running prose; applying that same
        limit to the cards is exactly what made the old section look
        narrow. 52rem is wider than `--container-reading` (42rem)
        deliberately - this is a lead-in, not an article.
      */}
      <div className="max-w-[52rem]">
        <SectionHeading
          id={id}
          eyebrow={content.eyebrow}
          title={content.title}
        />
        <p className="mt-4 text-body-lg text-muted-foreground">
          {content.intro}
        </p>
      </div>

      {/*
        ⚠ `items-stretch` PLUS `h-full` ON THE CARD, NOT A FIXED HEIGHT.
        Equal heights have to come from the grid so that a card whose
        copy wraps to an extra line at 1024px grows its neighbour
        instead of clipping its own content.
      */}
      <ul className="mt-10 grid grid-cols-1 items-stretch gap-5 sm:gap-6 lg:grid-cols-2">
        {content.cards.map((card) => {
          const Icon = ICONS[card.icon]
          const accent = ACCENT[card.accent]

          return (
            <li key={card.title} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-md border border-border bg-surface shadow-sm">
                {/*
                  `aria-hidden`: the rule repeats a grouping the heading
                  already gives, and a screen reader gains nothing from
                  a coloured line.
                */}
                <span
                  aria-hidden="true"
                  className={cn('h-[3px] w-full', accent.rule)}
                />

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <span
                      aria-hidden="true"
                      className={cn(
                        'flex h-11 w-11 shrink-0 items-center justify-center rounded-sm',
                        accent.plate,
                      )}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <h3 className="text-h4 text-foreground">{card.title}</h3>
                  </div>

                  <p className="mt-4 text-body text-muted-foreground">
                    {card.body}
                  </p>

                  {/*
                    ⚠ `mt-auto` IS WHAT LINES THE TWO TAKEAWAYS UP.
                    Without it the shorter card's benefit block floats
                    mid-panel while its neighbour's sits at the bottom,
                    which reads as a layout fault rather than as two
                    cards of different lengths.
                  */}
                  <div className="mt-auto pt-6">
                    <hr className="border-t border-border" />
                    <p className="mt-4 text-eyebrow uppercase tracking-wide text-muted-foreground">
                      {card.benefitLabel}
                    </p>
                    <p className="mt-1 text-body text-foreground">
                      {card.benefit}
                    </p>
                  </div>
                </div>
              </article>
            </li>
          )
        })}
      </ul>

      {marketLinks.length > 0 && (
        /*
          ⚠ WHITE PANEL ON A MUTED SECTION, WHICH IS THE BRIEF'S TINT
          READ THE OTHER WAY ROUND. The section is the light blue-grey;
          lifting the panel to `background` is what separates it, and it
          puts the panel on the same ground as the cards above so the
          three read as one group rather than two.
        */
        <div className="mt-6 rounded-md border border-border bg-background p-6 sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-[38rem]">
              <h3 className="text-h4 text-foreground">{content.panel.title}</h3>
              <p className="mt-2 text-body text-muted-foreground">
                {content.panel.body}
              </p>
            </div>

            {/*
              Full width below `sm` so a phone gets three real tap
              targets rather than three narrow ones; `flex-wrap` lets
              them break cleanly at tablet instead of compressing.
            */}
            <ul className="flex flex-col flex-wrap gap-3 sm:flex-row lg:shrink-0">
              {marketLinks.map((link) => (
                <li key={link.pageId}>
                  <ButtonLink
                    href={link.href}
                    variant={
                      BUTTON_VARIANT[
                        authored.get(link.pageId)?.accent ?? 'blue'
                      ]
                    }
                    className="w-full justify-center sm:w-auto"
                  >
                    {authored.get(link.pageId)?.label ?? link.label}
                  </ButtonLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </Section>
  )
}

/** Whether the section has anything to render. */
export function marketGuidanceRenders(
  content: MarketGuidanceContent | undefined,
): content is MarketGuidanceContent {
  return content !== undefined
}
