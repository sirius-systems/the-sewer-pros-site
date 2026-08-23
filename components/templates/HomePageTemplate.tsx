import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  Hero,
  TrustBar,
  RoutingCards,
  ServiceIndex,
  ProcessSteps,
  Differentiator,
  AuthorityBand,
  ProofGallery,
  TestimonialBand,
  LeadFormSection,
  MarketCoverage,
  FaqSection,
  RelatedLinks,
  CtaSection,
  authorityBandRenders,
  routingCardsRenders,
  serviceIndexRenders,
  marketCoverageRenders,
  processStepsRenders,
  relatedLinksRenders,
  faqSectionRenders,
} from '@/components/sections'
import { PageShell } from './PageShell'
import type { HomePageContent, MasterPageRecord } from '@/types'

/**
 * Home page.
 *
 * Structure ported from the `power` composition maps, resolved against
 * docs/18-design-system.md §110:
 *
 *   Hero → Trust strip → Intent routing → Services mosaic
 *   → Independent-model split → Markets → Process → Body
 *   → Authority band → Proof* → Testimonial* → Form*
 *   → Resources → FAQ → Final CTA
 *
 * `*` renders nothing until its data gate opens.
 *
 * ---------------------------------------------------------------------------
 * ROUTING AND SERVICES MUST NOT LOOK ALIKE
 * ---------------------------------------------------------------------------
 * The reference map requires the intent-routing section and the
 * services catalog below it to read as different things — routing is
 * decision support, the catalog is the inventory. 18 §5.6 says the same
 * in general terms: "vary composition pattern and density between
 * adjacent sections."
 *
 * So the separation here is structural, not cosmetic:
 *
 *   RoutingCards   an EVEN card grid
 *   ServiceIndex   an UNEVEN mosaic, flagship given double width
 *
 * Two different Appendix A patterns, adjacent, deliberately.
 *
 * ⚠ `routing` is optional and currently unauthored, so the routing
 * section does not render yet. Authoring it is per-page content work,
 * outside the composition port.
 *
 * 18 §38: the homepage hero should feel brand-defining. It stays
 * editorial — no approved photography exists (18 §28-34), and §37 says
 * a hero must not depend on a decorative image to explain the page.
 *
 * ⚠ ADJACENCY: `AuthorityBand` and the final `CtaSection variant="panel"`
 * are the only brand surfaces in the system. Resources and FAQ sit
 * between them; stacking dark sections is a named anti-pattern (18 §11).
 */
export interface HomePageTemplateProps {
  page: MasterPageRecord
  content: HomePageContent
}

export function HomePageTemplate({ page, content }: HomePageTemplateProps) {
  // Explicit sequence, checked against `sectionRhythmIssues()` at build.
  // The three gated sections contribute no entry — they render nothing.
  //
  // The services mosaic is `dense` and the markets band `dense` to
  // break what was previously a four-section `standard` run through
  // services → differentiator → markets → process. That run was a live
  // rhythm warning on this page before the port.
  const densities: SectionDensity[] = [
    'sparse',
    'dense',
    ...(routingCardsRenders(content.routing) ? (['standard'] as const) : []),
    ...(serviceIndexRenders(content.services) ? (['dense'] as const) : []),
    ...(content.differentiator !== undefined ? (['standard'] as const) : []),
    ...(marketCoverageRenders() ? (['dense'] as const) : []),
    ...(content.process !== undefined && processStepsRenders(content.process)
      ? (['standard'] as const)
      : []),
    ...(content.body !== undefined ? (['standard'] as const) : []),
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
        secondaryAction={{ href: '/services/', label: 'View services' }}
      />

      <TrustBar />

      {content.routing !== undefined && (
        <RoutingCards
          id="how-we-can-help"
          title="How we can help"
          items={content.routing}
        />
      )}

      <ServiceIndex
        density="dense"
        id="services"
        title="What we do"
        items={content.services}
        variant="mosaic"
      />

      {content.differentiator !== undefined && (
        <Differentiator
          title={content.differentiator.title}
          intro={content.differentiator.intro}
        />
      )}

      <MarketCoverage density="dense" />

      {content.process !== undefined && (
        <ProcessSteps
          id="how-it-works"
          title="How it works"
          steps={content.process}
        />
      )}

      {content.body !== undefined && (
        <Section density="standard" width="reading">
          <Prose>{content.body}</Prose>
        </Section>
      )}

      <AuthorityBand title="How we work" />

      <ProofGallery title="Recent work" />

      <TestimonialBand />

      <LeadFormSection />

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Guides and resources'}
          pageIds={content.relatedPageIds}
        />
      )}

      {content.faq !== undefined && <FaqSection entries={content.faq} />}

      <CtaSection
        variant="panel"
        title={content.cta?.title ?? 'Find out what is happening in the line'}
        body={content.cta?.body}
      />
    </PageShell>
  )
}
