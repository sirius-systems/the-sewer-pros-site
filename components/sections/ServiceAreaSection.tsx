import Image from 'next/image'
import type { SVGProps } from 'react'
import {
  Section,
  LinkCard,
  ButtonLink,
  buttonClasses,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import { TrackedPhoneLink } from '@/components/tracking'
import { SectionHeading } from './SectionHeading'
import { resolveApprovedLink, resolveLinkableOnly } from '@/lib/links/approved-link'
import { cn } from '@/lib/utils/cn'
import type { ServiceAreaContent, PageId } from '@/types'

/**
 * Image-led service area.
 *
 * Governed by docs/18-design-system.md §5.6, §50, §86, §87, §134-136,
 * Appendix A ("Service mosaic"); docs/07-master-location-registry.md;
 * docs/16-internal-linking-strategy.md §25; CLAUDE.md §11, §26, §29,
 * §30, §48.
 *
 * ===========================================================================
 * THE SAME SECTION `CoverageSection` IS, WITH PICTURES AND TWO TIERS
 * ===========================================================================
 * It answers one question — where does this company work — and it
 * answers it in the order a visitor asks: the region first, then the
 * communities that have their own page, then what to do when neither
 * names your street.
 *
 * `CoverageSection` remains the right component for a market with no
 * artwork and no local detail: its bordered list says the same thing
 * honestly at a tenth of the weight. This is the richer treatment for
 * a market that has both, and the two are mutually exclusive per
 * market (see `MarketPageContent.serviceArea`).
 *
 * ---------------------------------------------------------------------------
 * ⚠ SERVICE MARKETS, NOT OFFICES — AND THE IMAGES DO NOT CHANGE THAT
 * ---------------------------------------------------------------------------
 * 18 §87 requires the distinction be visually explicit: this section
 * communicates "Areas We Serve", never "Our Offices". 18 §86 and §135
 * forbid map pins, addresses and office language on a market with no
 * verified location, and PENDING-002 resolved the business model as
 * service-area with no public address anywhere.
 *
 * So: no address, no hours, no directions, no pin ON A MAP. The
 * location glyph on a county card is a heading ornament beside the
 * word "County", `aria-hidden`, marking a region rather than a point.
 *
 * ⚠ THE COUNTY CARDS ARE NOT LINKS, AND THAT IS ENFORCED BY THE TYPE
 * RATHER THAN BY THIS FILE REMEMBERING. No county landing page exists
 * in the approved registry — `ServiceAreaCountyCard` therefore has no
 * `pageId` field to hold one, so a card cannot acquire an arrow, a CTA
 * label, or a destination without that decision being made in
 * `types/content.ts` first. 05 §51 forbids linking through an invented
 * route; the shape is what makes it impossible rather than merely
 * discouraged.
 *
 * ---------------------------------------------------------------------------
 * GEOGRAPHIC ACCURACY
 * ---------------------------------------------------------------------------
 * CLAUDE.md §26: city, neighbourhood, county and metro are not
 * interchangeable. Two distinctions matter in St. Louis specifically
 * and the content must preserve both:
 *
 *   St. Louis City is an INDEPENDENT JURISDICTION, not part of St.
 *   Louis County. It appears in the city tier; the county tier does
 *   not claim it.
 *
 *   St. Charles COUNTY and the CITY of St. Charles are different
 *   places. One is a coverage card, the other is a linked page, and
 *   both carry the word that tells them apart.
 *
 * A county named here says service reaches communities within it. It
 * does not claim every municipality inside it is served, which is why
 * the closing block asks the visitor to confirm.
 */
export interface ServiceAreaSectionProps {
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
   * A sequence decision like `density`: only the composing template
   * knows what sits either side of this band.
   */
  surface?: SectionSurface
  id?: string
  content: ServiceAreaContent
  /**
   * The market's published number, for the closing row.
   *
   * ⚠ PASSED IN RATHER THAN WRITTEN IN CONTENT. It comes from
   * `marketOperatingDetail`, the one place a market's number lives,
   * because 01 §20 forbids carrying one market's business facts onto
   * another's page and a second copy is how that starts. A market with
   * no published number simply gets no phone action.
   */
  phone?: { label: string; phoneE164: string }
}

/**
 * Whether `ServiceAreaSection` renders anything.
 *
 * The city tier resolves through the approved-link layer, so it can
 * empty out through a status change no content file mentions. The
 * county tier cannot — those cards are plain content.
 *
 * A template listing this section in its `densities` array must gate
 * that entry on this predicate. An array entry for a section that
 * omitted itself describes a page that was never built, and
 * `sectionRhythmIssues()` then checks the fiction instead of the page.
 */
export function serviceAreaRenders(
  content: ServiceAreaContent | undefined,
): boolean {
  if (content === undefined) return false
  const cities = resolveLinkableOnly(
    content.cities.items.map((item) => item.pageId),
  )
  return cities.length > 0 || content.counties.items.length > 0
}

type IconProps = SVGProps<SVGSVGElement>

/**
 * A region marker, not a business pin.
 *
 * ⚠ `aria-hidden`, BESIDE A HEADING THAT ALREADY NAMES THE COUNTY.
 * That is the condition under which 18 §96 allows an icon at all — it
 * decorates a statement made in words rather than carrying one. It is
 * also why this is not the map-pin-on-a-map that 18 §86 forbids: it
 * marks nothing, at no address.
 *
 * The geometry is `TrustBar`'s `MultiMarketIcon`, at the same stroke
 * weight, so the two marks read as one family.
 */
function RegionIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 21s7-6.4 7-11.5a7 7 0 1 0-14 0C5 14.6 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.25" />
    </svg>
  )
}

/**
 * ⚠⚠ THE SCRIM IS LOAD-BEARING. DO NOT LIGHTEN IT WITHOUT REMEASURING.
 *
 * Black/55% is the value already measured for the home page hero, the
 * "What we do" mosaic and the market cards, and it was measured
 * against PURE WHITE rather than against the files of the day: the
 * worst background any photograph could ever present still gives
 * 4.76:1 for opaque white text against a 4.5:1 floor. That is what
 * makes it safe to reuse for these eight frames without remeasuring,
 * and why swapping in a brighter picture later cannot break it.
 *
 * ⚠ 0.26 OF MARGIN. Black/50% gives 4.39:1 and FAILS. Do not lighten
 * this, and do not dim card text with an opacity, without redoing the
 * measurement.
 *
 * ⚠ IT DOES NOT CHANGE ON HOVER. Anything that lifted it under a
 * pointer would drop the card's text below AA for as long as the
 * pointer sat there. `LinkCard`'s border hover and the action label's
 * underline carry the feedback instead — neither moves layout, which
 * 18 §93 requires.
 */
const SCRIM = 'absolute inset-0 bg-black/55'

/**
 * Card height floor.
 *
 * ⚠ IT IS NOT DECORATION, IT IS WHAT KEEPS THE COPY INSIDE THE BOX. A
 * county card is `aspect-[16/9]`, which derives height from width — at
 * the tablet two-column width that lands near 166px, and a heading
 * plus a three-line description does not fit in it. `min-h` wins over
 * the ratio, so the card holds its shape at desktop and grows rather
 * than clipping where it has to.
 *
 * ⚠ IT IS ALSO HALF OF A TRAP. A `min-h` beside an `aspect-ratio` on
 * an element with no definite width lets the browser size the width
 * FROM this floor instead. That is exactly what happened to the county
 * cards, and `w-full` on the card is what closes it. Read that note
 * before moving either value.
 */
const CARD_MIN_HEIGHT = 'min-h-[15rem]'

export function ServiceAreaSection({
  density = 'dense',
  surface = 'default',
  id = 'service-area',
  content,
  phone,
}: ServiceAreaSectionProps) {
  /*
    Gated or unwritten locations drop out rather than failing the
    build — a community whose page is pending validation simply is not
    in the mosaic yet (04 §4).
  */
  const cityLinks = resolveLinkableOnly(
    content.cities.items.map((item) => item.pageId),
  )
  const cityCards = new Map(
    content.cities.items.map((item) => [item.pageId, item]),
  )
  const flagship: PageId | undefined =
    content.cities.flagshipPageId ?? cityLinks[0]?.pageId

  const counties = content.counties.items

  // 18 §120 — omit entirely rather than render an empty shell.
  if (cityLinks.length === 0 && counties.length === 0) return null

  const closingAction = resolveApprovedLink(content.closing.action.pageId, {
    label: content.closing.action.label,
  })

  const countiesHeadingId = `${id}-regions`
  const citiesHeadingId = `${id}-communities`
  const closingHeadingId = `${id}-confirm`

  return (
    <Section density={density} surface={surface} labelledBy={id}>
      {/*
        H2. Everything below is an H3 group inside it, and the card
        titles are H4s inside those — one outline, no level skipped
        (18 §15). There is no second H1: the page's own is the hero.
      */}
      <SectionHeading id={id} title={content.title} intro={content.intro} />

      {/* ================================================================
          TIER 1 — REGIONAL COVERAGE. Informational cards, never links.
          ================================================================ */}
      {counties.length > 0 && (
        <div className="mt-12">
          <SectionHeading
            id={countiesHeadingId}
            level="h3"
            title={content.counties.title}
            intro={content.counties.intro}
          />

          {/*
            Three into three divides evenly at desktop. The tablet step
            is two columns rather than three: at that width a third of
            the container is too narrow for the description, and 18
            §5.6 would rather a trailing gap than unreadable copy.

            Not `CardGrid`: these are not `Card`s. An image sits behind
            the copy here, which needs the card to be a positioning
            context, and the accent rule needs a layer of its own.
          */}
          {/*
            ⚠ THE GUTTER STEPS WITH THE BREAKPOINT, AND `sm:` IS WHERE
            IT STEPS BECAUSE THAT IS WHERE THE COLUMNS DO. Owner target
            (2026-09-07): 16px stacked, 20px at two columns, 24px at
            three. Putting the 20px at `md` instead would leave the
            640-768px band running a two-column layout on the
            one-column gutter.

            ⚠ A WIDER GUTTER IS NOT THE FIX FOR CARDS THAT LOOK
            JOINED, AND WAS BRIEFLY MISTAKEN FOR ONE. These three read
            as a single panel because each CARD overflowed its grid
            track and painted over the gutter - see `w-full` on the
            card below. The spacing was always there.
          */}
          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {counties.map((county) => (
              <li key={county.name}>
                {/*
                  ⚠⚠ `w-full` IS LOAD-BEARING. DO NOT DROP IT WHILE
                  `aspect-[16/9]` IS ON THIS ELEMENT.

                  This is a FLEX CONTAINER with an aspect ratio and a
                  `min-h` floor. With no definite width, the browser is
                  free to run the ratio the other way and size the
                  WIDTH from the height: 240px x 16/9 = 427px, inside a
                  384px grid track. Every card then overflowed its
                  column by 43px, painted straight over the 24px
                  gutter, and overlapped its neighbour by 2px - so the
                  row rendered as one continuous map panel with
                  hairlines through it, and widening the gap did
                  nothing because the cards simply covered more of it.

                  `w-full` makes the width definite, so the ratio can
                  only derive the height, which is the direction it was
                  always meant to run. Verified in the rendered page:
                  cards land on the track edges exactly and all three
                  gutters are visible.

                  Each card also clips its OWN image and scrim -
                  `overflow-hidden` and `rounded-md` are here, on the
                  card, never on the list.
                */}
                <div
                  className={cn(
                    'relative isolate flex h-full w-full flex-col justify-end overflow-hidden rounded-md border border-border bg-surface',
                    county.image !== undefined
                      ? cn('aspect-[16/9]', CARD_MIN_HEIGHT)
                      : 'p-6',
                  )}
                >
                  {county.image !== undefined && (
                    <>
                      {/*
                        ⚠ `alt=""` IS CORRECT, NOT AN OMISSION, AND IT
                        MATCHES EVERY OTHER IMAGE CARD ON THE SITE.

                        The frame sits BEHIND a heading that already
                        names the county and a sentence that says what
                        service means there. Describing it as well
                        announces the place twice to a screen reader
                        and adds nothing a reader would otherwise miss.

                        `CardImage.alt` still carries the real, factual
                        description, so the asset stays identifiable in
                        source and a future non-decorative use has it
                        ready. Same argument, same wording, as
                        `ServiceIndex` and `MarketCoverage`.
                      */}
                      <Image
                        src={county.image.src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="absolute inset-0 -z-10 object-cover"
                      />
                      <span aria-hidden="true" className={cn(SCRIM, '-z-10')} />
                    </>
                  )}

                  {/*
                    The authority blue accent, as its own layer rather
                    than a `border-t-2` on the card.

                    ⚠ THAT IS DELIBERATE. `cn()` is a plain join, not
                    tailwind-merge, so a `border-t-2 border-t-accent-secondary`
                    alongside the card's own `border border-border`
                    would ship all four classes and let stylesheet
                    order pick the winner. A painted bar cannot lose
                    that argument.

                    Blue, not green: DEC-096 reserves `--accent` for
                    conversion, and a coverage card is not one.
                  */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 top-0 h-1 bg-accent-secondary"
                  />

                  {/*
                    `relative` lifts the copy above the absolute layers
                    without a z-index: a positioned later sibling
                    paints over positioned earlier ones.
                  */}
                  <div
                    className={cn(
                      'relative',
                      county.image !== undefined && 'p-6',
                    )}
                  >
                    <h4
                      className={cn(
                        'flex items-center gap-2 text-h4 font-medium tracking-tight text-balance',
                        county.image !== undefined
                          ? 'text-white'
                          : 'text-foreground',
                      )}
                    >
                      <RegionIcon className="size-5 shrink-0" />
                      {county.name}
                    </h4>
                    <p
                      className={cn(
                        'mt-2 text-sm leading-6',
                        /*
                          Opaque white over an image, not a muted tone
                          and not white at an opacity: the 4.76:1 above
                          is measured on opaque white and there is no
                          margin to spend dimming it. Hierarchy against
                          the heading comes from size.
                        */
                        county.image !== undefined
                          ? 'text-white'
                          : 'text-muted-foreground',
                      )}
                    >
                      {county.description}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ================================================================
          TIER 2 — FEATURED COMMUNITIES. One mosaic of linked cards.
          ================================================================ */}
      {cityLinks.length > 0 && (
        <div className="mt-14">
          <SectionHeading
            id={citiesHeadingId}
            level="h3"
            title={content.cities.title}
            intro={content.cities.intro}
          />

          {/*
            The home page's uneven mosaic, at twelve columns because
            this tier has five items rather than nine.

              mobile   one column, every card the same height. The row
                       spans are dropped, not preserved at a smaller
                       size — 18 §99.
              tablet   two columns, the flagship across both. Five into
                       that is one full-width card and two clean pairs,
                       with no orphaned half-row.
              desktop  twelve columns, two rows. The flagship takes
                       6x2 on the left; the other four take 3x1 each
                       and auto-place into the 2x2 on the right.

            DOM order is reading order at every width, which is what
            keeps keyboard focus following the eye.
          */}
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-12 lg:grid-rows-2">
            {cityLinks.map((link) => {
              const card = cityCards.get(link.pageId)
              if (card === undefined) return null

              const isFlagship = link.pageId === flagship
              const image = card.image

              return (
                <li
                  key={link.pageId}
                  className={cn(
                    isFlagship
                      ? 'sm:col-span-2 lg:col-span-6 lg:row-span-2'
                      : 'lg:col-span-3',
                  )}
                >
                  {/*
                    One anchor wraps the card, so the target is large
                    (18 §48) and assistive technology announces ONE
                    action rather than a card plus a nested link.
                    Nothing inside is interactive, which is what keeps
                    this valid HTML — the arrow and the action label
                    are text inside the same anchor, not a second one.

                    `actionLabel` is the whole accessible name, which
                    is why the content type requires it to name the
                    place: "Explore Ballwin", never "Learn more" five
                    times over (18 §47). The same string is visible at
                    the foot of the card, so what a screen reader
                    announces and what the eye reads agree.
                  */}
                  <LinkCard
                    href={link.href}
                    actionLabel={card.ctaLabel}
                    padded={image === undefined}
                    className={cn(
                      'group relative flex h-full flex-col justify-end overflow-hidden',
                      CARD_MIN_HEIGHT,
                    )}
                  >
                    {image !== undefined && (
                      <>
                        {/* ⚠ `alt=""` — see the county card above. */}
                        <Image
                          src={image.src}
                          alt=""
                          fill
                          sizes={
                            isFlagship
                              ? '(min-width: 1024px) 50vw, 100vw'
                              : '(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw'
                          }
                          className="absolute inset-0 object-cover"
                        />
                        <span aria-hidden="true" className={SCRIM} />
                      </>
                    )}

                    <div
                      className={cn('relative', image !== undefined && 'p-6')}
                    >
                      <h4
                        className={cn(
                          'font-medium tracking-tight text-balance',
                          isFlagship ? 'text-h3' : 'text-h4',
                          image !== undefined
                            ? 'text-white'
                            : 'text-foreground',
                        )}
                      >
                        {card.title ?? link.label}
                      </h4>

                      <p
                        className={cn(
                          'mt-2 max-w-prose text-sm leading-6',
                          image !== undefined
                            ? 'text-white'
                            : 'text-muted-foreground',
                        )}
                      >
                        {card.description}
                      </p>

                      {/*
                        The action, as text rather than an arrow alone.
                        18 §47: a link whose name is a glyph tells a
                        screen-reader user nothing, and this one is
                        already the anchor's accessible name.

                        Hover underlines the label; it does not move,
                        resize, or lighten the scrim (18 §93). The
                        arrow's nudge is a transform, so it costs no
                        layout either.
                      */}
                      <span
                        className={cn(
                          'mt-4 inline-flex items-center gap-2 text-caption font-medium underline-offset-4 group-hover:underline',
                          image !== undefined
                            ? 'text-white'
                            : 'text-accent-secondary',
                        )}
                      >
                        {card.ctaLabel}
                        <span
                          aria-hidden="true"
                          className="transition-transform group-hover:translate-x-0.5"
                        >
                          →
                        </span>
                      </span>
                    </div>
                  </LinkCard>
                </li>
              )
            })}
          </ul>
        </div>
      )}

      {/* ================================================================
          THE CLARIFICATION. What keeps a list of eight places honest.
          ================================================================ */}
      <div className="mt-14 rounded-md border border-border bg-surface-muted p-6 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-[var(--container-reading)]">
            <h3
              id={closingHeadingId}
              className="text-h3 font-semibold tracking-tight text-balance"
            >
              {content.closing.title}
            </h3>
            <p className="mt-3 text-body-lg text-muted-foreground">
              {content.closing.body}
            </p>
          </div>

          {/*
            One primary action, one secondary — 18 §106. The green is
            the conversion colour and only the contact action wears it
            (DEC-096); the phone is a secondary outlined button beside
            it, not a second primary.

            ⚠ NO "VIEW ALL ST. LOUIS LOCATIONS" LINK. The list is on
            this page. A link back to the page it sits on is a loop,
            and no per-market location index route exists to point at
            instead (05 §51).
          */}
          <div className="flex flex-wrap items-center gap-3 lg:shrink-0">
            <ButtonLink href={closingAction.href} variant="primary">
              {closingAction.label}
            </ButtonLink>

            {phone !== undefined && (
              /*
                `ButtonLink` renders `next/link`, which is for routes;
                `tel:` is not one. This is the site's tracked phone
                anchor wearing the secondary button's own classes, so
                the appearance still comes from one place (18 §46).

                `section_cta` rather than `final_cta`: the page's
                closing CTA is further down, and 19 §32 exists to tell
                the two placements apart.
              */
              <TrackedPhoneLink
                phoneE164={phone.phoneE164}
                ctaLocation="section_cta"
                className={buttonClasses('secondary')}
              >
                Call {phone.label}
              </TrackedPhoneLink>
            )}
          </div>
        </div>
      </div>
    </Section>
  )
}
