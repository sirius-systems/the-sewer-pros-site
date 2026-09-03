'use client'

import { useCallback, useId, useRef, useState } from 'react'
import { Badge, Button, Section, type SectionDensity } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import {
  publishedReviews,
  googleProfileReviewsUrl,
  isTruncated,
  ratingSnapshot,
  reviewCarouselRenders,
  type GoogleReview,
} from '@/data/reviews/reviews'

/**
 * Google review carousel — St. Louis Google Business Profile.
 *
 * Governed by docs/18-design-system.md §69-70, §108, §120, §48;
 * docs/01-business-brand-foundation.md §20, §21, §35;
 * docs/22-decisions-change-log.md DEC-028, DEC-084;
 * CLAUDE.md §55, §56, §77.
 *
 * ===========================================================================
 * ⚠ ST. LOUIS AND SITEWIDE ONLY — NEVER ON ANOTHER MARKET'S PAGES
 * ===========================================================================
 * Only St. Louis has a Google Business Profile (01 §21, DEC-020).
 * 01 §20 forbids carrying one market's business facts onto another, so
 * this section belongs on the sitewide homepage and on St. Louis pages
 * and nowhere else.
 *
 * That constraint is the whole reason this is a separate section rather
 * than a population of `TestimonialBand`. `TestimonialBand` renders on
 * six templates including `MarketPageTemplate`, so filling its data
 * module would have placed St. Louis reviews on `/san-diego-ca/` and
 * `/las-vegas-nv/` automatically. It stays gated and empty.
 *
 * Adding this section to a template is therefore a deliberate act. Do
 * not add it to `MarketPageTemplate`.
 *
 * ---------------------------------------------------------------------------
 * NO STARS, NO RATING, NO REVIEW SCHEMA
 * ---------------------------------------------------------------------------
 * DEC-028 rejects self-serving review markup, and the export captured
 * no per-review star value — so a rating display would be invented
 * (01 §35). Attribution is the reviewer's real public name plus a link
 * to their public Google profile, which is stronger proof than a star
 * graphic and is checkable by anyone.
 *
 * ---------------------------------------------------------------------------
 * WHY NO AUTOPLAY
 * ---------------------------------------------------------------------------
 * Nothing advances on its own. Auto-rotating content moves text out
 * from under a reader mid-sentence, and these quotes are long enough
 * that it would. It also removes the pause-on-hover, reduced-motion,
 * and focus-trap problems an autoplaying carousel creates rather than
 * solving them afterwards. 18 §70's register is calm; a self-advancing
 * proof wall is not.
 */

/**
 * Slides mounted either side of the active one.
 *
 * CLAUDE.md §56 — the dataset is large enough that rendering every
 * review would put hundreds of nodes and the full text of every quote
 * into the initial DOM on a phone for no benefit, since only one slide
 * is ever visible. The data itself is already in the bundle; this
 * bounds the DOM, which is the part that costs layout and memory.
 *
 * One either side keeps the immediate neighbours ready.
 */
const WINDOW = 1

export interface ReviewCarouselProps {
  /**
   * Overrides the section's natural density.
   *
   * Appendix A's density system is about VARIATION down a page, so the
   * composing template — which alone knows the full sequence — may need
   * a different value than this section would pick alone (18 §108).
   */
  density?: SectionDensity
  id?: string
  title?: string
}

export function ReviewCarousel({
  density = 'standard',
  id = 'reviews',
  title = 'What our customers say',
}: ReviewCarouselProps) {
  const [index, setIndex] = useState(0)
  const [expanded, setExpanded] = useState(false)
  const liveRegionId = useId()
  const touchStartX = useRef<number | null>(null)

  const total = publishedReviews.length

  const go = useCallback(
    (next: number) => {
      if (total === 0) return
      // Wraps both ways, so the controls never dead-end.
      setIndex(((next % total) + total) % total)
      // A new quote is a new read; collapsing avoids inheriting the
      // previous slide's expanded state.
      setExpanded(false)
    },
    [total],
  )

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault()
        go(index - 1)
      } else if (event.key === 'ArrowRight') {
        event.preventDefault()
        go(index + 1)
      }
    },
    [go, index],
  )

  // 18 §120 — omit the section rather than render an empty shell.
  if (!reviewCarouselRenders()) return null

  const active = publishedReviews[index]
  if (active === undefined) return null

  return (
    <Section density={density} surface="muted" labelledBy={id}>
      <SectionHeading
        id={id}
        title={title}
        intro={
          <p>
            Public reviews from our Google Business Profile. Each one links
            to the reviewer&rsquo;s Google profile so you can read it at the
            source.
          </p>
        }
      />

      <AggregateStat />

      <div
        className="mt-8"
        role="group"
        aria-roledescription="carousel"
        aria-label="Customer reviews from Google"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onTouchStart={(e) => {
          touchStartX.current = e.touches[0]?.clientX ?? null
        }}
        onTouchEnd={(e) => {
          const start = touchStartX.current
          const end = e.changedTouches[0]?.clientX
          touchStartX.current = null
          if (start === null || end === undefined) return
          const delta = end - start
          // 48px: past an accidental drag, under a deliberate scroll.
          if (Math.abs(delta) < 48) return
          go(delta < 0 ? index + 1 : index - 1)
        }}
      >
        {/*
          Only a window is mounted — see WINDOW. Non-active slides stay
          in the tree so the immediate neighbours are ready, but are
          hidden from both painting and assistive technology.
        */}
        <div aria-live="polite" id={liveRegionId}>
          {publishedReviews.map((review, i) => {
            if (Math.abs(i - index) > WINDOW) return null
            const isActive = i === index
            return (
              <div
                key={review.profileUrl}
                hidden={!isActive}
                aria-hidden={!isActive}
                aria-roledescription="slide"
                aria-label={`Review ${i + 1} of ${total}`}
              >
                {/*
                  Card boundary around the active slide (owner-directed,
                  2026-09-03). The quote previously sat directly on the
                  section's muted surface with nothing marking it as a
                  discrete card. `bg-background` against the muted
                  section is what makes the boundary read; `rounded-md`
                  and `border-border` match components/ui/Card.tsx.

                  Additive only: ReviewSlide keeps its own
                  `max-w-[var(--container-reading)]` measure, and no
                  transition is introduced — this file's header argues
                  for a calm register and a static swap, which still
                  holds.
                */}
                {isActive && (
                  <div className="rounded-md border border-border bg-background p-6 sm:p-8">
                    <ReviewSlide
                      review={review}
                      expanded={expanded}
                      onToggleExpand={() => setExpanded((v) => !v)}
                    />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button
            variant="secondary"
            onClick={() => go(index - 1)}
            aria-label="Previous review"
            aria-controls={liveRegionId}
          >
            <span aria-hidden="true">&larr;</span> Previous
          </Button>
          <Button
            variant="secondary"
            onClick={() => go(index + 1)}
            aria-label="Next review"
            aria-controls={liveRegionId}
          >
            Next <span aria-hidden="true">&rarr;</span>
          </Button>
          <p className="text-sm text-muted-foreground">
            {index + 1} of {total}
          </p>
        </div>
      </div>

      {/*
        The complete, unfiltered picture lives on Google — including the
        reviews this carousel does not carry. When no profile URL is
        documented we say that plainly rather than implying the
        selection above is everything (CLAUDE.md §23).
      */}
      <p className="mt-6 text-sm text-muted-foreground">
        {googleProfileReviewsUrl !== null ? (
          <a
            className="text-accent underline underline-offset-4 hover:text-foreground"
            href={googleProfileReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            See all reviews on Google
          </a>
        ) : (
          'These are a selection. Search The Sewer Pros on Google to read every review, including any not shown here.'
        )}
      </p>
    </Section>
  )
}

/* ==========================================================================
   One slide
   ========================================================================== */

/**
 * The profile's overall rating and review count (DEC-085).
 *
 * ===========================================================================
 * THE DATE IS PART OF THE CLAIM, NOT A FOOTNOTE
 * ===========================================================================
 * DEC-085 approves this figure *as a point-in-time reading*, and
 * explicitly forbids presenting it as a live counter. A visitor sees
 * when it was checked, in the same breath as the number. Do not remove
 * the date to tidy the layout — without it the line asserts currency
 * this project cannot support (CLAUDE.md §23).
 *
 * ⚠ TEXT ONLY. No `AggregateRating`, no `ratingValue`, no
 * `reviewCount` in structured data — DEC-028 stands, and DEC-085 says
 * so in as many words.
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
    <p className="mt-6 flex flex-wrap items-baseline gap-x-2 gap-y-1 text-sm text-muted-foreground">
      <span className="text-h3 font-medium tracking-tight text-foreground">
        {rating}
        <span aria-hidden="true" className="ml-1 text-accent">
          ★
        </span>
        <span className="sr-only"> out of 5</span>
      </span>
      <span>
        from {reviewCount.toLocaleString('en-US')} Google reviews
        {/*
          Not "currently" or "and counting" — see the header. The
          <time> element carries the machine-readable date without
          implying the rating itself is structured data.
        */}
        {' · as of '}
        <time dateTime={verifiedAt}>{readable}</time>
      </span>
    </p>
  )
}

/**
 * A verified star rating for one review.
 *
 * The glyphs are decorative and hidden from assistive technology; the
 * rating reaches a screen reader once, as text, rather than as five
 * announced characters (18 §96, CLAUDE.md §55).
 *
 * Deliberately scoped to ONE review. This is not, and must not become,
 * a business-wide rating display — that would be a claim about the
 * profile's average, which no decision has approved publishing
 * (01 §35; see the `reviews.ts` header).
 */
function StarRow({ value }: { value: number }) {
  const filled = Math.max(0, Math.min(5, Math.round(value)))
  return (
    <p className="mb-3 flex items-center gap-1 text-accent">
      <span aria-hidden="true" className="tracking-[0.15em]">
        {'★'.repeat(filled)}
        <span className="text-muted-foreground">{'☆'.repeat(5 - filled)}</span>
      </span>
      <span className="sr-only">Rated {filled} out of 5 on Google</span>
    </p>
  )
}

/**
 * Quotes below this render in full; longer ones clamp with a control.
 *
 * The clamp is presentational only — the complete text is always in the
 * DOM. Cutting the stored quote instead would edit a customer's words,
 * which CLAUDE.md §77 forbids.
 */
const CLAMP_THRESHOLD = 320

function ReviewSlide({
  review,
  expanded,
  onToggleExpand,
}: {
  review: GoogleReview
  expanded: boolean
  onToggleExpand: () => void
}) {
  // Google already cut this one off, so there is nothing further to
  // reveal and a "read more" control would be a false promise.
  const clamps = review.quote.length > CLAMP_THRESHOLD && !isTruncated(review)

  return (
    <figure className="max-w-[var(--container-reading)]">
      {/*
        Rendered ONLY where the rating was individually verified against
        the live listing — 8 of 278 today (DEC-084). Where `stars` is
        null the row is absent entirely: no placeholder, no greyed
        outline, no assumed 5. An unverified rating shown as anything at
        all would be a rating this project invented for a named person's
        review (CLAUDE.md §23, §77).
      */}
      {review.stars !== null && <StarRow value={review.stars} />}

      <blockquote
        className={
          clamps && !expanded
            ? 'text-h3 font-medium tracking-tight text-balance text-foreground line-clamp-5'
            : 'text-h3 font-medium tracking-tight text-balance text-foreground whitespace-pre-line'
        }
      >
        {review.quote}
      </blockquote>

      {clamps && (
        <Button
          variant="tertiary"
          onClick={onToggleExpand}
          aria-expanded={expanded}
        >
          {expanded ? 'Show less' : 'Read the full review'}
        </Button>
      )}

      <figcaption className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{review.name}</span>
        {/*
          Relative, exactly as Google publishes it. Converting to a
          calendar date would invent precision the source does not have.
        */}
        <span>{review.relativeDate}</span>
        {review.isLocalGuide && <Badge tone="neutral">Local Guide</Badge>}
        <a
          className="text-accent underline underline-offset-4 hover:text-foreground"
          href={review.profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read on Google
          <span className="sr-only">, review by {review.name}</span>
        </a>
      </figcaption>
    </figure>
  )
}
