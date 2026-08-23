import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  Hero,
  TrustBar,
  ProblemGrid,
  InclusionsGrid,
  ProcessSteps,
  AuthorityBand,
  ProofGallery,
  TestimonialBand,
  LeadFormSection,
  CoverageSection,
  FaqSection,
  RelatedLinks,
  CtaSection,
  authorityBandRenders,
  processStepsRenders,
  relatedLinksRenders,
  coverageSectionRenders,
  faqSectionRenders,
} from '@/components/sections'
import { PageShell } from './PageShell'
import type { MasterPageRecord, ServiceLocationPageContent } from '@/types'

/**
 * Service + location page.
 *
 * Governed by docs/05-url-routing-strategy.md §119;
 * docs/14-content-specification.md; docs/18-design-system.md §108;
 * CLAUDE.md §19-21, §62.
 *
 * ===========================================================================
 * THE PAGE FAMILY THE WHOLE GOVERNANCE MODEL EXISTS TO CONSTRAIN
 * ===========================================================================
 * There are 10,422 service × location relationships and FOURTEEN
 * approved service + location pages. This template renders those
 * fourteen.
 *
 * 18 §108 names the exact failure to avoid: service + location pages
 * "should not all appear as Hero / 3 Cards / Text / FAQ / CTA with only
 * token substitutions."
 *
 * So the structure here is intentionally minimal — hero, prose, an
 * optional process, FAQ, related links, CTA — and nothing is
 * auto-composed from registry data. Every one of these pages has to
 * earn its existence through writing, and both of CLAUDE.md §21's
 * relevant tests apply at once:
 *
 *   location test — could the city name be swapped and the page stand?
 *   service test  — could the service name be swapped and the copy hold?
 *
 * If either passes, the page should not ship. No template can enforce
 * that; it can only decline to make the shortcut easy, which is why
 * there is no "nearby areas" grid and no generated service list here.
 *
 * 05 §119: a local service page is a separate canonical page, not a
 * variant of the canonical service page. Its `relatedPageIds` should
 * point to the canonical service and the parent location so the reader
 * can move up the hierarchy (16 §25).
 *
 * ---------------------------------------------------------------------------
 * THE FULL PORTED MAP, NOT A THINNED ONE
 * ---------------------------------------------------------------------------
 * The reference composition warns explicitly against treating this type
 * as "the service page plus content changes" - a service+location page
 * needs enough location-specific structure (its own coverage section,
 * local proof, a location-blended FAQ) to earn its URL. So it gets the
 * full sequence rather than the lighter location-page one.
 *
 * That does NOT relax the substitution tests above. Structure earns the
 * URL only if the writing does too.
 *
 * ⚠ ADJACENCY: `AuthorityBand` and the final `CtaSection
 * variant="panel"` are the only brand surfaces; related, coverage, and
 * FAQ sit between them (18 §11).
 */
export interface ServiceLocationPageTemplateProps {
  page: MasterPageRecord
  content: ServiceLocationPageContent
}

export function ServiceLocationPageTemplate({
  page,
  content,
}: ServiceLocationPageTemplateProps) {
  // Explicit sequence, checked against `sectionRhythmIssues()` at build.
  // The three gated sections contribute no entry - they render nothing.
  const densities: SectionDensity[] = [
    'sparse',
    'dense',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(content.problems !== undefined ? (['standard'] as const) : []),
    ...(content.inclusions !== undefined ? (['dense'] as const) : []),
    ...(content.process !== undefined && processStepsRenders(content.process)
      ? (['standard'] as const)
      : []),
    ...(authorityBandRenders() ? (['standard'] as const) : []),
    ...(relatedLinksRenders(content.relatedPageIds)
      ? (['dense'] as const)
      : []),
    ...(coverageSectionRenders(content.coverage)
      ? (['standard'] as const)
      : []),
    ...(faqSectionRenders(content.faq) ? (['dense'] as const) : []),
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
      <Hero
        variant="editorial"
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
      />

      <TrustBar />

      {content.body !== undefined && (
        <Section density="standard" width="reading">
          <Prose>{content.body}</Prose>
        </Section>
      )}

      {content.problems !== undefined && (
        <ProblemGrid
          id="when-to-call"
          title="When to call"
          items={content.problems}
        />
      )}

      {content.inclusions !== undefined && (
        <InclusionsGrid
          id="whats-included"
          title="What's included"
          items={content.inclusions}
        />
      )}

      {content.process !== undefined && (
        <ProcessSteps
          id="what-happens"
          title="What happens on site"
          steps={content.process}
        />
      )}

      <AuthorityBand title="How we work" />

      <ProofGallery title="Recent work" />

      <TestimonialBand />

      <LeadFormSection />

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Related pages'}
          pageIds={content.relatedPageIds}
        />
      )}

      {content.coverage !== undefined && (
        <CoverageSection
          id="service-area"
          title={content.coverage.title}
          intro={content.coverage.intro}
          pageIds={content.coverage.pageIds}
          names={content.coverage.names}
          availabilityStatement={content.coverage.availabilityStatement}
        />
      )}

      {content.faq !== undefined && <FaqSection entries={content.faq} />}

      <CtaSection
        variant="panel"
        title={content.cta?.title ?? 'Schedule an inspection'}
        body={content.cta?.body}
      />
    </PageShell>
  )
}
