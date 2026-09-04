import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  Hero,
  TrustBar,
  AuthorityBand,
  LeadFormSection,
  CoverageSection,
  RelatedLinks,
  FaqSection,
  CtaSection,
  authorityBandRenders,
  relatedLinksRenders,
  coverageSectionRenders,
  faqSectionRenders,
} from '@/components/sections'
import { PageShell } from './PageShell'
import type { LocationPageContent, MasterPageRecord } from '@/types'

/**
 * Location page.
 *
 * Governed by docs/18-design-system.md §79, §112;
 * docs/14-content-specification.md; CLAUDE.md §20-21, §62, §73.
 *
 * ===========================================================================
 * THE HARDEST FAMILY TO KEEP HONEST
 * ===========================================================================
 * Location pages are where thin programmatic content appears if it is
 * going to. CLAUDE.md §21's location test is the standard: "Could the
 * city name be replaced with another market while leaving the page
 * largely unchanged? If yes, localization is insufficient."
 *
 * The template is therefore deliberately SPARSE in structure. It offers
 * a hero, a prose body, related service+location links, FAQ, and a CTA
 * — and nothing that could be auto-filled from a registry.
 *
 * There is no "local statistics" slot, no map, and no auto-generated
 * nearby-areas grid. Each would render identically for all 579
 * locations with a token swapped, which is precisely what 04 §2,
 * 14, and CLAUDE.md §19-20 prohibit. 18 §79 also rules out generic
 * skyline imagery and fake local technician photos.
 *
 * 18 §86 and §135: no map pins and no "office" language. No market has
 * a verified physical location, so a location page asserts service
 * relevance, never presence.
 *
 * ---------------------------------------------------------------------------
 * PORTED COMPOSITION, DELIBERATELY LIGHT
 * ---------------------------------------------------------------------------
 * This type gets the trust strip, authority band, and coverage section,
 * but NOT the problem or inclusions grids. Those belong to the
 * service+location page, which is where a location's service detail is
 * supposed to live (05 §119). Duplicating them here would give two
 * pages the same job.
 *
 * `CoverageSection` still carries no map or address (PENDING-002).
 *
 * ⚠ ADJACENCY: `AuthorityBand` and the final `CtaSection
 * variant="panel"` are the only brand surfaces. Coverage and FAQ sit
 * between them (18 §11).
 */
export interface LocationPageTemplateProps {
  page: MasterPageRecord
  content: LocationPageContent
}

export function LocationPageTemplate({
  page,
  content,
}: LocationPageTemplateProps) {
  // Explicit sequence, checked against `sectionRhythmIssues()` at build.
  // The gated form contributes no entry - it renders nothing.
  //
  // The services entry is `dense`, matching what `RelatedLinks`
  // actually renders. It previously read `standard` while the component
  // rendered `dense`, so the hand-written array had drifted from the
  // page it describes.
  const densities: SectionDensity[] = [
    'sparse',
    'dense',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(relatedLinksRenders(content.servicePageIds)
      ? (['dense'] as const)
      : []),
    ...(authorityBandRenders() ? (['standard'] as const) : []),
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

      {content.servicePageIds !== undefined && (
        <RelatedLinks
          id="local-services"
          title={content.relatedTitle ?? 'Services in this area'}
          pageIds={content.servicePageIds}
          descriptions={content.relatedDescriptions}
          surface="default"
        />
      )}

      <AuthorityBand title="How we work" />

      <LeadFormSection />

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
