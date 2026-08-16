import { Section, Prose, type SectionDensity } from '@/components/ui'
import { FaqSection, RelatedLinks, CtaSection } from '@/components/sections'
import { PageShell } from './PageShell'
import type { ComparisonPageContent, MasterPageRecord } from '@/types'

/**
 * Comparison page.
 *
 * Governed by docs/18-design-system.md §66, §109;
 * docs/05-url-routing-strategy.md §41;
 * docs/01-business-brand-foundation.md §72;
 * CLAUDE.md §65, §72.
 *
 * ===========================================================================
 * NEUTRALITY IS THE REQUIREMENT
 * ===========================================================================
 * CLAUDE.md §65: "Do not manipulate comparisons so The Sewer Pros'
 * preferred service always wins." 18 §66: "Do not manipulate visual
 * emphasis to unfairly misrepresent alternatives."
 *
 * The template therefore has no "recommended option" treatment, no
 * winner styling, and no verdict block. `ComparisonPageContent` also
 * has no field for one — the type refuses to model a thumb on the
 * scale. Where a comparison table is used it renders through `Prose`
 * and `ScrollableTable`, with both options styled identically.
 *
 * One of the two approved comparison pages is
 * `independent-sewer-inspection-vs-repair-company`, which makes
 * neutrality especially load-bearing: 01 §72 and CLAUDE.md §32 forbid
 * accusing competitors of dishonesty, so that page must argue from
 * business model rather than character.
 *
 * ⚠ Breadcrumbs resolve to Home > this page. Doc 04 approves no
 * `/compare/` hub, so the segment has no page of its own — flagged in
 * `data/pages/pages.ts`.
 */
export interface ComparisonPageTemplateProps {
  page: MasterPageRecord
  content: ComparisonPageContent
}

export function ComparisonPageTemplate({
  page,
  content,
}: ComparisonPageTemplateProps) {
  const densities: SectionDensity[] = [
    'standard',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(content.faq !== undefined ? (['dense'] as const) : []),
    ...(content.relatedPageIds !== undefined ? (['dense'] as const) : []),
    'sparse',
  ]

  return (
    <PageShell page={page} densities={densities}>
      <Section density="standard" width="reading" as="article">
        <header>
          {content.hero.eyebrow !== undefined && (
            <p className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
              {content.hero.eyebrow}
            </p>
          )}
          <h1 className="mt-3 text-h1 font-semibold tracking-tight text-balance">
            {content.hero.title}
          </h1>
          {content.hero.intro !== undefined && (
            <div className="mt-5 text-body-lg text-muted-foreground">
              {content.hero.intro}
            </div>
          )}
        </header>
      </Section>

      {content.body !== undefined && (
        <Section density="standard" width="reading">
          <Prose>{content.body}</Prose>
        </Section>
      )}

      {content.faq !== undefined && <FaqSection entries={content.faq} />}

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Related pages'}
          pageIds={content.relatedPageIds}
        />
      )}

      <CtaSection
        variant="band"
        title={content.cta?.title ?? 'Not sure which applies to your line?'}
        body={content.cta?.body}
      />
    </PageShell>
  )
}
