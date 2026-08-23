import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  Hero,
  TrustBar,
  ProblemGrid,
  InclusionsGrid,
  ProcessSteps,
  AuthorityBand,
  LeadFormSection,
  FaqSection,
  RelatedLinks,
  CtaSection,
  authorityBandRenders,
  processStepsRenders,
  relatedLinksRenders,
  faqSectionRenders,
} from '@/components/sections'
import { PageShell } from './PageShell'
import type { CommercialPageContent, MasterPageRecord } from '@/types'

/**
 * Commercial service page.
 *
 * Structure from docs/18-design-system.md §114:
 *
 *   Commercial Hero → Operational Problems → Commercial Services
 *   → Property Types → Process → Why The Sewer Pros → Markets
 *   → Proof → FAQ → Commercial CTA
 *
 * 18 §109: "Commercial — operational and business-focused."
 *
 * ---------------------------------------------------------------------------
 * ⚠ THE CTA MUST NOT BE THE RESIDENTIAL ONE
 * ---------------------------------------------------------------------------
 * 18 §139: "This CTA should not route users through a residential-
 * focused form." 17 lists "Request Commercial Service" as its own
 * approved conversion concept, so this template defaults its CTA label
 * to that rather than inheriting the global primary.
 *
 * The destination is still `/contact/` — the only approved conversion
 * page in doc 04. PENDING-008 (final form fields) is where the
 * commercial form path gets defined; until then a separate route would
 * be a fabricated one.
 *
 * ---------------------------------------------------------------------------
 * ⚠ COMMERCIAL COPY MUST BE GENUINELY COMMERCIAL
 * ---------------------------------------------------------------------------
 * CLAUDE.md §33 and §74, 09 §112: do not take residential content and
 * insert "commercial" into the headings. 09 §112 names industry-swap
 * publishing as prohibited, and CLAUDE.md §21's commercial test asks
 * whether "commercial property" could be swapped for "home" without
 * meaningful change.
 *
 * Only mention industries actually served (CLAUDE.md §33). Four of the
 * seven commercial services carry
 * `capability_confirmed_commercial_packaging_requires_validation` in
 * the service registry, so commercial packaging detail must not be
 * presented as an established offering (06 §43).
 *
 * ---------------------------------------------------------------------------
 * THE AUTHORITY BAND CARRIES THE COMMERCIAL CTA TOO
 * ---------------------------------------------------------------------------
 * Every CTA on this page routes to "Request Commercial Service", the
 * hero and the closing panel included. An `AuthorityBand` left on its
 * default would have put the residential primary CTA in the middle of a
 * commercial page, which is exactly what 18 §139 forbids.
 *
 * ⚠ No `ProofGallery` or `TestimonialBand` here. Both are gated and
 * render nothing today, but when they open they draw on company-wide
 * data with no commercial scoping - and residential proof on a
 * commercial page is the industry-swap failure CLAUDE.md §33 and §74
 * name. Add them only with commercial-specific material.
 *
 * ⚠ ADJACENCY: `AuthorityBand` and the closing `CtaSection
 * variant="panel"` are the only brand surfaces; related and FAQ sit
 * between them (18 §11).
 */
export interface CommercialPageTemplateProps {
  page: MasterPageRecord
  content: CommercialPageContent
}

export function CommercialPageTemplate({
  page,
  content,
}: CommercialPageTemplateProps) {
  // Explicit sequence, checked against `sectionRhythmIssues()` at build.
  // The gated form contributes no entry - it renders nothing.
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
        primaryAction={{
          href: '/contact/',
          label: 'Request Commercial Service',
        }}
      />

      <TrustBar />

      {content.body !== undefined && (
        <Section density="standard" width="reading">
          <Prose>{content.body}</Prose>
        </Section>
      )}

      {content.problems !== undefined && (
        <ProblemGrid
          id="operational-issues"
          title="Operational issues this addresses"
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
          id="commercial-process"
          title="How commercial service works"
          steps={content.process}
        />
      )}

      <AuthorityBand
        title="How we work"
        action={{ href: '/contact/', label: 'Request Commercial Service' }}
      />

      <LeadFormSection />

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Related commercial services'}
          pageIds={content.relatedPageIds}
        />
      )}

      {content.faq !== undefined && <FaqSection entries={content.faq} />}

      <CtaSection
        variant="panel"
        title={content.cta?.title ?? 'Request commercial service'}
        body={content.cta?.body}
        action={{ href: '/contact/', label: 'Request Commercial Service' }}
      />
    </PageShell>
  )
}
