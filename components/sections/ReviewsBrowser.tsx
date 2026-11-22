'use client'

import { useMemo, useState } from 'react'
import { Badge } from '@/components/ui'
import { cn } from '@/lib/utils/cn'
import type {
  GoogleReview,
  ReviewMarket,
  ReviewTopic,
} from '@/data/reviews/reviews'

/**
 * Filterable list of Google reviews for `/reviews/`.
 *
 * Reviews are shown exactly as captured: no edits, no re-attribution,
 * every card linking to the reviewer's public Google profile. The
 * filters narrow the list by which Google Business Profile the review
 * was written on and by theme. They never change a quote.
 *
 * The list is server-rendered with the first `PAGE_SIZE` cards in the
 * HTML, so the page is readable without JavaScript, and "Show more"
 * reveals the rest. Filters and "Show more" are real buttons with
 * `aria-pressed` state, and the result count is a polite live region.
 */

const PAGE_SIZE = 24

export interface ReviewsBrowserProps {
  reviews: readonly GoogleReview[]
  marketLabels: Readonly<Record<ReviewMarket, string>>
  topicLabels: Readonly<Record<ReviewTopic, string>>
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        'inline-flex min-h-11 items-center rounded-md border px-4 text-sm font-medium transition-colors',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary',
        active
          ? 'border-accent-secondary bg-accent-secondary text-accent-secondary-foreground'
          : 'border-border bg-surface text-foreground hover:bg-surface-muted',
      )}
    >
      {children}
    </button>
  )
}

function StarRow({ value }: { value: number }) {
  const filled = Math.max(0, Math.min(5, Math.round(value)))
  return (
    <p className="flex items-center gap-1 text-foreground">
      <span aria-hidden="true" className="tracking-[0.15em]">
        {'★'.repeat(filled)}
        <span className="opacity-40">{'☆'.repeat(5 - filled)}</span>
      </span>
      <span className="sr-only">Rated {filled} out of 5 on Google</span>
    </p>
  )
}

function ReviewItem({
  review,
  marketLabels,
}: {
  review: GoogleReview
  marketLabels: Readonly<Record<ReviewMarket, string>>
}) {
  const initial = review.name.trim().charAt(0).toUpperCase()
  return (
    <li className="flex flex-col gap-3 rounded-md border border-border bg-surface p-6">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-secondary text-base font-semibold text-accent-secondary-foreground"
        >
          {initial}
        </span>
        <div className="min-w-0">
          <p className="flex flex-wrap items-center gap-2 text-sm font-semibold">
            <span className="break-words">{review.name}</span>
            {review.isLocalGuide && <Badge tone="neutral">Local Guide</Badge>}
          </p>
          <p className="text-caption text-muted-foreground">
            Google · {marketLabels[review.market]} profile · {review.relativeDate}
          </p>
        </div>
      </div>

      {review.stars !== null && <StarRow value={review.stars} />}

      <blockquote className="whitespace-pre-line text-sm leading-6">
        {review.quote}
      </blockquote>

      <a
        className="mt-auto text-sm text-accent-secondary underline underline-offset-4 hover:text-foreground"
        href={review.profileUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        View on Google
        <span aria-hidden="true"> ↗</span>
        <span className="sr-only">, review by {review.name}</span>
      </a>
    </li>
  )
}

export function ReviewsBrowser({
  reviews,
  marketLabels,
  topicLabels,
}: ReviewsBrowserProps) {
  const [market, setMarket] = useState<ReviewMarket | 'all'>('all')
  const [topic, setTopic] = useState<ReviewTopic | 'all'>('all')
  const [visible, setVisible] = useState(PAGE_SIZE)

  const marketCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const r of reviews) counts[r.market] = (counts[r.market] ?? 0) + 1
    return counts
  }, [reviews])

  const topicCounts = useMemo(() => {
    const counts: Record<string, number> = {}
    for (const r of reviews)
      for (const t of r.topics) counts[t] = (counts[t] ?? 0) + 1
    return counts
  }, [reviews])

  const filtered = useMemo(
    () =>
      reviews.filter(
        (r) =>
          (market === 'all' || r.market === market) &&
          (topic === 'all' || r.topics.includes(topic)),
      ),
    [reviews, market, topic],
  )

  const shown = filtered.slice(0, visible)
  const markets = Object.keys(marketLabels) as ReviewMarket[]
  const topics = (Object.keys(topicLabels) as ReviewTopic[]).filter(
    (t) => (topicCounts[t] ?? 0) > 0,
  )

  return (
    <div>
      <div className="flex flex-col gap-6">
        <div role="group" aria-labelledby="reviews-filter-profile">
          <h3
            id="reviews-filter-profile"
            className="text-sm font-semibold text-foreground"
          >
            Google profile
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <Chip
              active={market === 'all'}
              onClick={() => {
                setMarket('all')
                setVisible(PAGE_SIZE)
              }}
            >
              All ({reviews.length})
            </Chip>
            {markets.map((m) => (
              <Chip
                key={m}
                active={market === m}
                onClick={() => {
                  setMarket(m)
                  setVisible(PAGE_SIZE)
                }}
              >
                {marketLabels[m]} ({marketCounts[m] ?? 0})
              </Chip>
            ))}
          </div>
        </div>

        <div role="group" aria-labelledby="reviews-filter-topic">
          <h3
            id="reviews-filter-topic"
            className="text-sm font-semibold text-foreground"
          >
            Topic
          </h3>
          <div className="mt-3 flex flex-wrap gap-2">
            <Chip
              active={topic === 'all'}
              onClick={() => {
                setTopic('all')
                setVisible(PAGE_SIZE)
              }}
            >
              All topics
            </Chip>
            {topics.map((t) => (
              <Chip
                key={t}
                active={topic === t}
                onClick={() => {
                  setTopic(t)
                  setVisible(PAGE_SIZE)
                }}
              >
                {topicLabels[t]} ({topicCounts[t] ?? 0})
              </Chip>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
        Showing {shown.length} of {filtered.length} reviews
      </p>

      <ul className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {shown.map((review) => (
          <ReviewItem
            key={review.profileUrl}
            review={review}
            marketLabels={marketLabels}
          />
        ))}
      </ul>

      {shown.length < filtered.length && (
        <div className="mt-8">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="inline-flex min-h-11 items-center rounded-md border border-border bg-surface px-5 text-sm font-medium text-foreground hover:bg-surface-muted focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary"
          >
            Show more reviews
          </button>
        </div>
      )}
    </div>
  )
}
