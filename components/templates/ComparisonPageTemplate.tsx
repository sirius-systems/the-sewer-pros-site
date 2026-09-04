import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  ProblemGrid,
  FaqSection,
  RelatedLinks,
  CtaSection,
  relatedLinksRenders,
  faqSectionRenders,
  problemGridRenders,
} from '@/components/sections'
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
 * ---------------------------------------------------------------------------
 * WHAT THIS TYPE DELIBERATELY DID NOT TAKE FROM THE PORT
 * ---------------------------------------------------------------------------
 * NO trust strip, NO authority band, NO proof, NO testimonial, NO form.
 *
 * Every one of those argues for The Sewer Pros. Dropping them into a
 * page whose job is to help a reader choose between two options would
 * put a thumb on the scale that CLAUDE.md §65 and 18 §66 forbid -
 * and the brand-surface authority band would do it loudest.
 *
 * The closing CTA stays a `band`, not a `panel`, for the same reason.
 *
 * What this type DOES take is `ProblemGrid`, reframed as "when each
 * applies" and describing both options in the same register. The tail
 * also reorders to related -> FAQ -> CTA, matching the other families.
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
  // Explicit sequence, checked against `sectionRhythmIssues()` at build.
  const densities: SectionDensity[] = [
    'standard',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(problemGridRenders(content.problems)
      ? (['standard'] as const)
      : []),
    ...(relatedLinksRenders(content.relatedPageIds)
      ? (['dense'] as const)
      : []),
    ...(faqSectionRenders(content.faq) ? (['dense'] as const) : []),
    // The closing CTA is a `band`, not a `panel`, and CtaSection
    // renders a band at `dense` (`isPanel ? sparse : dense`). This
    // entry read `sparse` and therefore described a page that does not
    // exist -- the rhythm check was validating a fiction on this family.
    // Verified against rendered output.
    'dense',
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

      {content.problems !== undefined && (
        <ProblemGrid
          id="when-each-applies"
          title="When each applies"
          items={content.problems}
        />
      )}

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Related pages'}
          pageIds={content.relatedPageIds}
          descriptions={content.relatedDescriptions}
        />
      )}

      {content.faq !== undefined && <FaqSection entries={content.faq} />}

      <CtaSection
        variant="band"
        title={content.cta?.title ?? 'Not sure which applies to your line?'}
        body={content.cta?.body}
      />
    </PageShell>
  )
}
