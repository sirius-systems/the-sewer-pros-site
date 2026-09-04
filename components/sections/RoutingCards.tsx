import type { SVGProps } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Section,
  CardGrid,
  ButtonLink,
  type ButtonVariant,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import { cn } from '@/lib/utils/cn'
import { SectionHeading } from './SectionHeading'
import { ApprovedInlineLink } from '@/components/links/ApprovedInlineLink'
import {
  resolveApprovedLink,
  resolveLinkableOnly,
} from '@/lib/links/approved-link'
import type { CardImage, RoutingContent } from '@/types'

/**
 * Intent-routing cards — "how we can help".
 *
 * Governed by docs/18-design-system.md §5.6, §47, §48;
 * docs/16-internal-linking-strategy.md §25;
 * docs/04-master-page-build-list.md §4; CLAUDE.md §16, §37, §48.
 *
 * The reference composition's homepage item 3: 3-4 cards routing a
 * visitor to the right next step, sitting immediately after the hero.
 *
 * ===========================================================================
 * ROUTING IS NOT THE SERVICES CATALOG
 * ===========================================================================
 * The reference style's own composition note requires this section and
 * the services grid below it to stay visually distinct — routing is
 * DECISION SUPPORT toward services, areas, audiences, and contact; the
 * services section is the catalog.
 *
 * Here that separation is structural rather than cosmetic: this section
 * is an EVEN card grid, and `ServiceIndex` below it renders as an
 * uneven MOSAIC. Two different Appendix A patterns, which also
 * satisfies 18 §5.6's "vary composition pattern between adjacent
 * sections".
 *
 * ---------------------------------------------------------------------------
 * DESTINATIONS ARE APPROVED PAGE IDS, NEVER HREFS
 * ---------------------------------------------------------------------------
 * Resolved through `resolveLinkableOnly`, so a gated route cannot
 * become a link on an indexable page (04 §4). CLAUDE.md §37: never
 * surface a URL solely because it could exist. 16 §25 says the same.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THE NAMED LINKS CAME OUT OF THE PARAGRAPH (owner, 2026-09-04)
 * ---------------------------------------------------------------------------
 * For one day these descriptions were `ReactNode` carrying inline
 * `ApprovedInlineLink`s. The owner asked for the named destinations to
 * be pulled into a scannable list instead, so `description` is plain
 * text again and `links` carries them.
 *
 * ⚠ DO NOT PUT A LINK BACK IN A DESCRIPTION. The same destination
 * would then have two competing affordances in one card, and the list
 * is the one a reader scans.
 *
 * ---------------------------------------------------------------------------
 * ⚠ STILL `Card`-SHAPED, NOT A `LinkCard`, AND STILL FORCED
 * ---------------------------------------------------------------------------
 * `LinkCard` wraps the whole card in one anchor: 18 §48 wants a large
 * target and assistive technology announcing one action. This card now
 * has up to six links inside it, and nested anchors are invalid HTML —
 * the inner ones would not be reachable at all.
 *
 * So the shell is a plain element, the title is its own link, the list
 * items are their own links, and the footer is a third. Same trade
 * `MarketCoverage` makes for the same reason.
 *
 * ---------------------------------------------------------------------------
 * ⚠ NO CARD TITLE IN THE CONTENT, AND THAT IS DELIBERATE
 * ---------------------------------------------------------------------------
 * The title is `link.label`, the approved page record's own name.
 * Adding a `title` field would put a second source beside it for
 * strings that are currently identical ("Services", "Locations /
 * Service Areas", "Commercial Sewer & Drain Services", "Contact"), and
 * the day someone renames a page the card would quietly disagree with
 * its own destination. Same resolution `Differentiator` and
 * `AuthorityBand` reached for their headings.
 */

/* ==========================================================================
   Card marks — 18 §27, CLAUDE.md §56
   ========================================================================== */

/**
 * Hand-drawn rather than imported.
 *
 * `package.json` has no icon library and CLAUDE.md §56 warns against
 * adding one, so these follow the inline convention `TrustBar`,
 * `ProcessSteps`, `Differentiator`, `AuthorityBand` and
 * `ConfidenceModule` already use. Each is `aria-hidden` beside a
 * visible title that names the card.
 */
type IconProps = SVGProps<SVGSVGElement>

function baseIconProps(props: IconProps): IconProps {
  return {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    ...props,
  }
}

/** Services — a magnifier with a check, for "find the right fit". */
function SearchCheckIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m15.5 15.5 4.5 4.5" />
      <path d="m7.8 10.6 1.9 1.9 3.5-3.5" />
    </svg>
  )
}

/** Locations — a pin over a mapped area. */
function MapPinnedIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M12 12.8c1.7 0 3-1.4 3-3.1a3 3 0 1 0-6 0c0 1.7 1.3 3.1 3 3.1Z" />
      <path d="M12 2.5c-3.6 0-6.5 2.9-6.5 6.5 0 4.4 6.5 9.5 6.5 9.5s6.5-5.1 6.5-9.5c0-3.6-2.9-6.5-6.5-6.5Z" />
      <path d="M6 17.2 3.5 21.5h17L18 17.2" />
    </svg>
  )
}

/** Commercial — a multi-storey building. */
function BuildingIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M3 21h18" />
      <path d="M5 21V6a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v15" />
      <path d="M14 10h4a1 1 0 0 1 1 1v10" />
      <path d="M8 9h3M8 13h3M8 17h3" />
    </svg>
  )
}

/** Contact — a message with lines, because this card starts a conversation. */
function MessageIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M20 15a2 2 0 0 1-2 2H8l-4 3V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2Z" />
      <path d="M8 9h8M8 12.5h5" />
    </svg>
  )
}

/**
 * Card mark by name.
 *
 * A map rather than conditionals in the render, so a new card means an
 * entry here and the compiler names the omission.
 */
const CARD_ICONS: Record<
  RoutingContent['icon'],
  (props: IconProps) => React.JSX.Element
> = {
  'search-check': SearchCheckIcon,
  'map-pinned': MapPinnedIcon,
  'building-2': BuildingIcon,
  'message-square-text': MessageIcon,
}

/* ==========================================================================
   Accents
   ========================================================================== */

/**
 * The three accents, and nothing else.
 *
 * ⚠ ALL THREE ARE EXISTING PALETTE TOKENS. `blue` is
 * `--accent-secondary`, `green` is `--accent`, `navy` is `--brand`. No
 * fourth colour was introduced for this section, and none should be:
 * `app/globals.css` treats the palette as a closed set (DEC-096).
 *
 * The icon tile is that token mixed 10% into white, the same
 * derivation `Differentiator` and `AuthorityBand` use for their tints,
 * so a palette change carries through rather than stranding a
 * hard-coded pastel.
 */
const ACCENT: Record<
  RoutingContent['accent'],
  { rule: string; mark: string; tile: string; button: ButtonVariant }
> = {
  blue: {
    rule: 'border-t-accent-secondary',
    mark: 'text-accent-secondary',
    tile: 'bg-[color-mix(in_srgb,var(--color-accent-secondary)_10%,white)]',
    button: 'accent',
  },
  green: {
    rule: 'border-t-accent',
    mark: 'text-accent',
    tile: 'bg-[color-mix(in_srgb,var(--color-accent)_10%,white)]',
    button: 'primary',
  },
  /*
    ⚠ NAVY TAKES THE BLUE BUTTON, NOT A NAVY ONE, AND THAT IS THE ONLY
    PLACE THIS MAP DISAGREES WITH ITSELF. Owner direction, 2026-09-04:
    the commercial card keeps its navy mark and top rule but its action
    is solid blue. Every other row's `button` follows its own accent.
  */
  navy: {
    rule: 'border-t-brand',
    mark: 'text-brand',
    tile: 'bg-[color-mix(in_srgb,var(--color-brand)_10%,white)]',
    button: 'accent',
  },
}

/*
 * ============================================================================
 * ⚠⚠ ALL FOUR ACTIONS ARE SOLID BUTTONS. OWNER-DIRECTED, 2026-09-04.
 * ============================================================================
 * They were outlined for a day, with only the contact card solid, on
 * the reading that 18 §106 gives: "Do not visually style every action
 * as primary." That is now knowingly set aside for this section — the
 * owner asked for four filled buttons, and this is the record of it
 * rather than a silent drift.
 *
 * ⚠ IT ALSO PUTS THE CONVERSION GREEN ON A BROWSE ACTION. DEC-096
 * reserves `--accent` for conversion, and the locations card now wears
 * it while only pointing deeper into the site. That is the third
 * knowing use of green outside a conversion, after DEC-096's trust-bar
 * icons and DEC-098's comparison table. A fourth should be a decision,
 * not a habit.
 *
 * What the section still has instead of weight is COLOUR: blue for the
 * two browse-the-catalogue cards, green for coverage and contact. If
 * that stops being enough to separate them, the fix is to take a card
 * back to an outline, not to add a fifth colour.
 */

/** A right-facing chevron for the list rows. */
function Chevron(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="m9.5 5.5 6.5 6.5-6.5 6.5" />
    </svg>
  )
}

export interface RoutingCardsProps {
  /**
   * Overrides the section's natural density.
   *
   * Appendix A's density system is about VARIATION down a page, so the
   * composing template — which alone knows the full sequence — may need
   * a different value than this section would pick alone (18 §108).
   */
  density?: SectionDensity
  /**
   * Overrides the section's natural surface.
   *
   * Surface is a SEQUENCE decision, like `density` above: only the
   * composing template knows what sits either side of this section,
   * and the owner directed clear separation between adjacent sections
   * (2026-09-04). A section cannot pick its own contrast against
   * neighbours it cannot see.
   */
  surface?: SectionSurface
  id?: string
  eyebrow?: string
  title: string
  intro?: string
  items: readonly RoutingContent[]
  /**
   * Full-bleed artwork behind the whole section (owner, 2026-09-04).
   *
   * The cards are opaque, so the heading block is the only thing that
   * ends up over the photograph. See `Section` for the backdrop and
   * for the scrim measurement.
   */
  backgroundImage?: CardImage
  /**
   * Passed through to `Section`. `strong` is darker, never lighter.
   */
  scrim?: 'default' | 'strong'
}

/**
 * Whether `RoutingCards` renders anything.
 *
 * Routing destinations whose pages are gated drop out, and a
 * routing grid with no destinations left omits itself (18 §120).
 *
 * A template listing this section in its `densities` array must gate
 * that entry on this predicate. An array entry for a section that
 * omitted itself describes a page that was never built, and
 * `sectionRhythmIssues()` then checks the fiction instead of the page.
 *
 * Exported rather than restated at each call site so the array and the
 * render read one condition, not two copies of it.
 */
export function routingCardsRenders(
  items: readonly RoutingContent[] | undefined,
): boolean {
  if (items === undefined) return false
  return resolveLinkableOnly(items.map((item) => item.pageId)).length > 0
}

export function RoutingCards({
  density = 'standard',
  surface = 'default',
  id = 'how-we-can-help',
  eyebrow,
  title,
  intro,
  items,
  backgroundImage,
  scrim,
}: RoutingCardsProps) {
  const links = resolveLinkableOnly(items.map((item) => item.pageId))
  // Keyed the same way the cards are, so a card whose page gated out
  // simply misses rather than carrying a dangling record around.
  const byPage = new Map(items.map((item) => [item.pageId, item]))

  // 18 §120 — omit entirely rather than render an empty shell.
  if (links.length === 0) return null

  const columns = links.length % 3 === 0 ? 3 : 2

  return (
    <Section
      density={density}
      surface={surface}
      backgroundImage={backgroundImage}
      scrim={scrim}
      labelledBy={id}
    >
      <SectionHeading
        id={id}
        title={title}
        eyebrow={eyebrow}
        intro={intro}
        /*
          The `<h2>` inherits the white `Section` puts on an image
          wrapper. The eyebrow and intro set `text-muted-foreground`,
          tuned for a light surface, so they are overridden rather than
          left to fail. `cn()` is a plain join, not tailwind-merge, so
          this has to be a descendant selector rather than a competing
          text class.

          ⚠ THE EYEBROW IS WHITE, NOT GREEN, AND THAT IS A CORRECTION
          TO THE BRIEF. Over this scrim the ground can be as bright as
          black/65% over white. `--accent` there measures about 1.4:1,
          and even lightened 60% toward white it reaches only ~3.8:1
          against a 4.5:1 requirement for text this size. There is no
          green on this palette that clears it without darkening the
          scrim far enough to bury the photograph the owner asked to
          keep visible. White measures 6.1:1. If the green eyebrow
          matters more than the frame, the scrim has to go to ~70% and
          that is a design decision, not a class change.
        */
        className="[&_p]:text-white [&_div]:text-white"
      />

      {/* 32px between the heading block and the grid (owner, 2026-09-04). */}
      <CardGrid columns={columns} itemCount={links.length} className="mt-8">
        {links.map((link) => {
          const item = byPage.get(link.pageId)
          if (item === undefined) return null

          const accent = ACCENT[item.accent]
          const Icon = CARD_ICONS[item.icon]
          const cardLinks = resolveLinkableOnly(
            (item.links ?? []).map((entry) => entry.pageId),
          )
          const labelFor = new Map(
            (item.links ?? []).map((entry) => [entry.pageId, entry.label]),
          )

          return (
            <div
              key={link.pageId}
              className={cn(
                /*
                  ⚠ FULLY OPAQUE. This grid sits over a photograph, and
                  a translucent card would put body text on an
                  unpredictable backdrop. `bg-surface` is the site's
                  opaque card white; nothing here is tinted or blurred.

                  `rounded-lg` (8px) and the lifted shadow are this
                  section's own, a step up from the `rounded-md` +
                  border-only card language elsewhere, because these
                  four have to read as objects sitting ON the
                  photograph rather than holes cut into it. 18 §25
                  rules out dramatic floating cards; this is one step,
                  not a float.

                  Hover moves nothing: only the border and shadow
                  change. 18 §93 warns against hover scaling that
                  shifts layout, and a 2x2 grid of moving cards is
                  exactly that.
                */
                'group flex h-full flex-col rounded-lg border border-border border-t-4 bg-surface p-7 sm:p-8',
                'shadow-[0_12px_30px_rgba(7,31,51,0.16)]',
                'transition-[box-shadow,border-color] hover:border-foreground/25 hover:shadow-[0_18px_40px_rgba(7,31,51,0.24)]',
                accent.rule,
              )}
            >
              {item.image !== undefined && (
                <span className="relative mb-6 block aspect-[7/4] w-full overflow-hidden rounded-md">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    fill
                    className="object-cover"
                  />
                </span>
              )}

              {/* 48px tinted tile. Decorative: the title names the card. */}
              <span
                aria-hidden="true"
                className={cn(
                  'flex h-12 w-12 items-center justify-center rounded-md',
                  accent.tile,
                )}
              >
                <Icon className={cn('h-6 w-6', accent.mark)} />
              </span>

              <p className="mt-4 text-caption font-semibold tracking-wide text-muted-foreground uppercase">
                {item.category}
              </p>

              <h3 className="mt-2 text-h4 font-medium tracking-tight text-balance">
                <Link
                  href={link.href}
                  className="text-foreground hover:text-accent-secondary"
                >
                  {link.label}
                </Link>
              </h3>

              <p className="mt-3 text-sm leading-7 text-muted-foreground">
                {item.description}
              </p>

              {/*
                Skipped entirely when there is nothing to enumerate —
                no heading over an empty list (18 §120). The contact
                card is that case.
              */}
              {cardLinks.length > 0 && (
                <div className="mt-6">
                  {item.linksHeading !== undefined &&
                    item.linksHeading !== '' && (
                      <p className="text-caption font-medium tracking-wide text-muted-foreground uppercase">
                        {item.linksHeading}
                      </p>
                    )}

                  <ul className="mt-2 flex flex-col">
                    {cardLinks.map((entry) => (
                      <li key={entry.pageId}>
                        {/*
                          `ApprovedInlineLink` rather than a bare
                          `Link`: the destination is named by PAGE ID
                          and resolved against the approved registry,
                          so a gated or renamed page fails here rather
                          than shipping a dead route.

                          The label is the authored one, not the page
                          record's name, because these read as short
                          service names inside a list rather than as
                          full page titles.
                        */}
                        <span className="group/row flex items-center gap-2 py-1.5 text-sm text-accent-secondary">
                          <Chevron
                            className="h-4 w-4 shrink-0 text-muted-foreground"
                            aria-hidden="true"
                          />
                          <ApprovedInlineLink pageId={entry.pageId}>
                            {labelFor.get(entry.pageId) ?? entry.label}
                          </ApprovedInlineLink>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/*
                `mt-auto` drops the footer to the card's floor so all
                four line up regardless of how long the description and
                list above them run. `pt-6` rather than a margin, which
                the auto margin would absorb.
              */}
              {/*
                ⚠ THE FOOTER ACTION IS A BUTTON; THE LINK LIST ABOVE IT
                IS NOT. Owner direction, 2026-09-04. The named services,
                markets and commercial services stay plain chevron links
                - four cards each carrying five buttons would be a wall
                of equal-weight actions, which is the failure 18 §62 and
                §106 both name.

                `ButtonLink`, so it renders an `<a>` rather than a
                `<button>`: these navigate.

                ⚠ NOT `w-full` ANY MORE (owner, 2026-09-04). Each
                button now sizes to its own label and sits at the
                card's left edge, so the four differ in width by
                design. They still line up VERTICALLY: the row sits on
                `mt-auto`, which is what stops the cards' differing
                body lengths from staggering them, and that has
                nothing to do with the button's width.

                Focus comes from the global `:focus-visible` rule in
                `app/globals.css` (2px `--accent-secondary`, 2px
                offset) rather than a second treatment here.
              */}
              {item.secondaryLink !== undefined && (
                <div className="mt-auto pt-6">
                  <ButtonLink
                    href={resolveApprovedLink(item.secondaryLink.pageId).href}
                    variant={accent.button}
                  >
                    {item.secondaryLink.label}
                    {/*
                      `shrink-0` so the arrow keeps its width when a
                      long label meets a narrow card - "Explore
                      Commercial Services" in a tablet column is the
                      tight case. Without it the flex row would take
                      the space out of the glyph before wrapping the
                      text.
                    */}
                    <span aria-hidden="true" className="shrink-0">
                      &rarr;
                    </span>
                  </ButtonLink>
                </div>
              )}
            </div>
          )
        })}
      </CardGrid>
    </Section>
  )
}
