import { Section, type SectionDensity } from '@/components/ui'
import {
  TrustBar,
  RelatedLinks,
  CtaSection,
  SurveyLeadForm,
  ReviewAggregateStat,
  ReviewsBrowser,
  relatedLinksRenders,
} from '@/components/sections'
import {
  googleProfiles,
  reviewMarketLabels,
  reviewTopicLabels,
  reviewsPageReviews,
} from '@/data/reviews/reviews'
import { PageShell } from './PageShell'
import type { CorePageContent, MasterPageRecord } from '@/types'

/**
 * Reviews page - `/reviews/`.
 *
 * Every written review cleared in `data/reviews/reviews.ts`, filterable
 * by Google profile and by theme. The Sewer Pros is one company, so
 * reviews from the St. Louis and San Diego profiles appear together and
 * the market is shown on each card only as the profile the review was
 * written on.
 *
 * ⚠ VISIBLE TEXT ONLY. No `Review`, `AggregateRating`, `ratingValue` or
 * `reviewCount` markup anywhere on this page (DEC-028, DEC-085).
 */
export interface ReviewsPageTemplateProps {
  page: MasterPageRecord
  content: CorePageContent
}

export function ReviewsPageTemplate({ page, content }: ReviewsPageTemplateProps) {
  const densities: SectionDensity[] = [
    'standard',
    'dense',
    ...(relatedLinksRenders(content.relatedPageIds) ? (['standard'] as const) : []),
    'sparse',
  ]

  return (
    <PageShell
      page={page}
      densities={densities}
      schema={{
        title: content.seoTitle ?? content.hero.title,
        description: content.metaDescription,
      }}
    >
      <Section density="standard" width="reading">
        <header>
          <h1 className="text-h1 font-semibold tracking-tight text-balance">
            {content.hero.title}
          </h1>
          {content.hero.intro !== undefined && (
            <div className="mt-5 text-body-lg text-muted-foreground">
              {content.hero.intro}
            </div>
          )}
          <ReviewAggregateStat />
          <p className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {googleProfiles.map((profile) => (
              <a
                key={profile.marketId}
                className="text-accent-secondary underline underline-offset-4 hover:text-foreground"
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read every {profile.label} review on Google
                <span aria-hidden="true"> ↗</span>
              </a>
            ))}
          </p>
        </header>
      </Section>

      <TrustBar />

      <Section density="dense" aria-label="Customer reviews">
        <ReviewsBrowser
          reviews={reviewsPageReviews}
          marketLabels={reviewMarketLabels}
          topicLabels={reviewTopicLabels}
        />
      </Section>

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Related pages'}
          pageIds={content.relatedPageIds}
          descriptions={content.relatedDescriptions}
        />
      )}

      <CtaSection
        variant="panel"
        title={content.cta?.title ?? 'Schedule an inspection'}
        body={content.cta?.body}
        action={null}
        proof={
          <div className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
            <SurveyLeadForm idPrefix="cta-survey" />
          </div>
        }
      />
    </PageShell>
  )
}
