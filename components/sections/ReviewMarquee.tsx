'use client'

import { useState } from 'react'
import { Badge, Button, Section, type SectionDensity } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import {
  marqueeReviews,
  ratingSnapshot,
  googleProfileReviewsUrl,
  type GoogleReview,
} from '@/data/reviews/reviews'

/**
 * Auto-scrolling review marquee.
 *
 * ===========================================================================
 * ⚠ THIS REPLACES A COMPONENT THAT ARGUED THE OPPOSITE, ON PURPOSE
 * ===========================================================================
 * `ReviewCarousel` was a click-through, one-at-a-time carousel, and its
 * header argued at length for a calm register with no self-moving
 * content. The business owner directed a continuously scrolling
 * marquee on 2026-09-03, which reverses that specific reading.
 *
 * The reversal is scoped to THIS SECTION. It is not licence for
 * autoplay, sliders, or self-moving content elsewhere, and 18 §66's
 * motion guidance is otherwise untouched. No DEC entry: a UI pattern
 * choice is not a business fact or a strategy change (22 §26,
 * DEC-092), and git plus this comment are the record.
 *
 * The accessibility cost of moving content is real, so it is paid in
 * full rather than waved at: motion is opt-in under
 * `prefers-reduced-motion`, the track pauses on hover and on
 * focus-within, there is a persistent visible pause control per WCAG
 * 2.2.2, and the duplicated half is hidden from assistive technology.
 *
 * ---------------------------------------------------------------------------
 * WHAT CARRIES OVER UNCHANGED
 * ---------------------------------------------------------------------------
 * DEC-085's aggregate stat, with its verification date stated in the
 * same breath as the number. DEC-028's prohibition on
 * `AggregateRating` / `Review` markup: this is visible content only,
 * and nothing here emits schema.
 *
 * The footer disclosure did NOT carry over. The owner directed its
 * removal on 2026-09-03, reversing the guardrail every earlier prompt
 * in this build repeated. See the note at the foot of the component.
 */

/** Card width in px. Fixed, so the loop length is computable without measuring the DOM. */
const CARD_WIDTH = 380

/** Gap between cards, px. Mirrors `--marquee-gap` set on the track below. */
const CARD_GAP = 28

/**
 * Scroll speed.
 *
 * Duration is derived from this rather than hardcoded, so adding or
 * removing reviews changes how long a lap takes and never how fast the
 * text moves past the eye. A hardcoded duration silently speeds up as
 * the set grows, which is how a marquee becomes unreadable.
 *
 * 45px/s is roughly nine seconds per card: enough to read a line or
 * two in passing, which is the point of the section.
 */
const PX_PER_SECOND = 45

export interface ReviewMarqueeProps {
  density?: SectionDensity
  id?: string
  title?: string
}

/**
 * The aggregate rating line (DEC-085).
 *
 * ⚠ The date is not decoration. Without it the line asserts a currency
 * this project cannot support, so it stays even when the layout would
 * be tidier without it (CLAUDE.md §23).
 *
 * ⚠ TEXT ONLY. No `AggregateRating`, no `ratingValue`, no
 * `reviewCount` in structured data. DEC-028 stands and DEC-085 says so
 * in as many words.
 */
function AggregateStat() {
  const { rating, reviewCount, verifiedAt } = ratingSnapshot
  // Fixed locale: `output: 'export'` prerenders this, so a
  // locale-dependent format would differ between build and browser.
  const readable = new Date(`${verifiedAt}T00:00:00Z`).toLocaleDateString(
    'en-US',
    { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' },
  )

  return (
    <p className="mt-4 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm text-muted-foreground">
      <span className="text-h2 font-semibold tracking-tight text-foreground">
        {rating}
        <span aria-hidden="true" className="ml-1 text-rating-gold">
          ★
        </span>
        <span className="sr-only"> out of 5</span>
      </span>
      <span>
        from {reviewCount.toLocaleString('en-US')} Google reviews
        {' · as of '}
        <time dateTime={verifiedAt}>{readable}</time>
      </span>
    </p>
  )
}

/**
 * A verified star row.
 *
 * ⚠ Gated on a real value, and it has to stay gated. Only 8 of the 278
 * captured reviews carry a star value confirmed individually; the rest
 * are published without one. Filling those in from the profile average
 * would attach a rating to a named person that they did not give,
 * which CLAUDE.md §23 and §77 forbid outright.
 *
 * So most cards in this marquee show no stars. That is the honest
 * state of the data, not a rendering bug.
 *
 * ⚠ `marquee-stars` is not decoration on decoration. --rating-gold
 * measures 2.88:1 against the card's --accent-secondary fill, under
 * the 3:1 WCAG 1.4.11 floor for a meaningful graphic, so the glyphs
 * carry a hairline white edge that is itself 5.83:1 on that blue. The
 * aggregate row's star sits on white and is untouched. See the class
 * in app/globals.css for why this is scoped to the cards.
 */
function StarRow({ value }: { value: number }) {
  const filled = Math.max(0, Math.min(5, Math.round(value)))
  return (
    <p className="flex items-center gap-1 text-rating-gold">
      <span aria-hidden="true" className="marquee-stars tracking-[0.15em]">
        {'★'.repeat(filled)}
        <span className="opacity-40">{'☆'.repeat(5 - filled)}</span>
      </span>
      <span className="sr-only">Rated {filled} out of 5 on Google</span>
    </p>
  )
}

/**
 * One review card.
 *
 * Solid --accent-secondary (#1C6B97), the DEC-096 authority blue,
 * against the section's white surface. Not a new hex: the owner moved
 * this section from the brand dark treatment to white on 2026-09-03,
 * and a translucent-white card built for a dark ground has nothing to
 * sit on once the ground is white. White on that blue measures
 * 5.83:1, so the card carries body text at AA with margin.
 *
 * No border. A solid blue card already separates itself from white;
 * the old `border-white/15` existed to give a 5%-white card an edge on
 * dark, and repeating it here would outline something already
 * outlined. `rounded-md` and the 24px padding match
 * components/ui/Card.tsx (18 §32-33).
 *
 * ⚠ Text on these cards is opaque white, not white at an opacity.
 * Hierarchy is carried by size and weight instead. Blending white down
 * over #1C6B97 spends the contrast margin for nothing: at 80% it lands
 * near 4.4:1, which is under AA for body text.
 *
 * `duplicate` marks the second copy of the set. It exists only so the
 * loop has something to scroll into, so it is hidden from assistive
 * technology and taken out of the tab order: a keyboard user should
 * meet each review once, not twice.
 */
function ReviewCard({
  review,
  duplicate = false,
}: {
  review: GoogleReview
  duplicate?: boolean
}) {
  const initial = review.name.trim().charAt(0).toUpperCase()

  return (
    <li
      className="flex shrink-0 flex-col gap-3 rounded-md bg-accent-secondary p-6 text-accent-secondary-foreground"
      style={{ width: `${CARD_WIDTH}px` }}
    >
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/15 text-base font-semibold"
        >
          {initial}
        </span>
        <div className="min-w-0">
          <p className="flex items-center gap-2 text-sm font-semibold">
            <span className="truncate">{review.name}</span>
            {review.isLocalGuide && <Badge tone="neutral">Local Guide</Badge>}
          </p>
          <p className="text-caption">
            Google · {review.relativeDate}
          </p>
        </div>
      </div>

      {review.stars !== null && <StarRow value={review.stars} />}

      {/*
        Clamped rather than expandable. The old carousel had a
        "Read the full review" toggle, which a moving track cannot
        offer: expanding a card mid-scroll reflows the whole loop and
        invalidates the width the animation was computed from. The
        profile link below is the way to the full text.
      */}
      <blockquote className="line-clamp-6 text-sm leading-6">
        {review.quote}
      </blockquote>

      <a
        className="mt-auto text-sm underline decoration-white/60 underline-offset-4 hover:decoration-white"
        href={review.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={duplicate ? -1 : undefined}
      >
        View on Google
        <span aria-hidden="true"> ↗</span>
        <span className="sr-only">, review by {review.name}</span>
      </a>
    </li>
  )
}

export function ReviewMarquee({
  density = 'standard',
  id = 'reviews',
  title = 'What our customers say',
}: ReviewMarqueeProps = {}) {
  const [paused, setPaused] = useState(false)

  if (marqueeReviews.length === 0) return null

  /*
    One copy's width, including its trailing gap. Computed from the two
    constants rather than measured, so it is correct during the static
    prerender and needs no layout pass in the browser.
  */
  const loopWidth = marqueeReviews.length * (CARD_WIDTH + CARD_GAP)
  const durationSeconds = Math.round(loopWidth / PX_PER_SECOND)

  return (
    /*
      White, not brand dark (owner direction, 2026-09-03).

      This section sat between two dark sections, and a dark strip
      between dark neighbours reads as one long unbroken band. The fix
      is a genuine light section rather than a seam line between two
      dark ones: 18 §11 wants surface changes to mean something, and
      "this is a different kind of content" is a meaning a hairline
      border cannot carry.

      `marquee-section` clips the horizontal overhang of the full-bleed
      track below. It has to live on the section root — see the class
      in app/globals.css.
    */
    <Section
      density={density}
      surface="default"
      labelledBy={id}
      className="marquee-section"
    >
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <SectionHeading id={id} title={title} />
          <AggregateStat />
        </div>

        {/*
          WCAG 2.2.2. A persistent control, not a hover affordance:
          hover is undiscoverable and does not exist on touch. Hidden
          under reduced motion by CSS, where there is no animation for
          it to act on.
        */}
        <Button
          variant="secondary"
          onClick={() => setPaused((v) => !v)}
          aria-pressed={paused}
          className="marquee-toggle"
        >
          <span aria-hidden="true">{paused ? '▶' : '❚❚'}</span>
          {paused ? 'Play reviews' : 'Pause reviews'}
        </Button>
      </div>

      {/*
        The track leaves the container; the heading and the control
        above it do not. A strip that stops at the reading measure
        reads as a widget that ran out of room, and it clipped the
        fourth card against an invisible edge. Bleeding past both
        viewport edges is what says "this continues".
      */}
      <div className="marquee-viewport marquee-fullbleed mt-10">
        <ul
          className="marquee-track"
          data-paused={paused ? 'true' : 'false'}
          style={
            {
              '--marquee-gap': `${CARD_GAP}px`,
              '--marquee-duration': `${durationSeconds}s`,
            } as React.CSSProperties
          }
        >
          {marqueeReviews.map((review) => (
            <ReviewCard key={review.profileUrl} review={review} />
          ))}

          {/*
            The duplicate. Purely visual, so `aria-hidden` keeps it out
            of a screen-reader pass and each card's link carries
            tabIndex -1 to keep it out of the tab order.
          */}
          <li
            aria-hidden="true"
            className="marquee-duplicate contents"
            role="presentation"
          >
            <ul className="contents">
              {marqueeReviews.map((review) => (
                <ReviewCard
                  key={`dup-${review.profileUrl}`}
                  review={review}
                  duplicate
                />
              ))}
            </ul>
          </li>
        </ul>
      </div>

      {/*
        The written disclosure that used to sit here ("These are a
        selection…") was removed on owner direction, 2026-09-03. Every
        earlier prompt in this build carried it forward verbatim, so
        the removal is deliberate rather than an oversight, and this
        note is here to stop a later pass from restoring it as a
        perceived regression.

        The profile link is NOT that line and stays. It is still null
        today, so nothing renders — and it now renders nothing at all
        rather than an empty `mt-8` paragraph. When a real profile URL
        is supplied it appears on its own, as it always would have.
      */}
      {googleProfileReviewsUrl !== null && (
        <p className="mt-8 text-sm text-muted-foreground">
          <a
            className="text-accent-secondary underline underline-offset-4 hover:text-foreground"
            href={googleProfileReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            See all reviews on Google
          </a>
        </p>
      )}
    </Section>
  )
}
