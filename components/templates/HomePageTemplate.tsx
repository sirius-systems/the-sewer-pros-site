import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  Hero,
  TrustBar,
  ConfidenceModule,
  confidenceModuleRenders,
  RoutingCards,
  ServiceIndex,
  ProcessSteps,
  Differentiator,
  AuthorityBand,
  ProofGallery,
  TestimonialBand,
  ReviewCarousel,
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
// Imported from the data module rather than re-exported through the
// section: whether this section renders is a question about the review
// data, and `ReviewCarousel` itself is a client component.
import { reviewCarouselRenders } from '@/data/reviews/reviews'
import type { HomePageContent, MasterPageRecord } from '@/types'

/**
 * Home page.
 *
 * Structure resolved against docs/18-design-system.md §16 (Homepage
 * Template), which names `homepage-performance.webp` as this page's
 * reference (§4):
 *
 *   Hero → Trust strip → Confidence module* → Intent routing → Services
 *   mosaic → Independent-model split → Markets → Process → Body*
 *   → Authority band → Proof* → Testimonial* → Google reviews
 *   → Form* → Resources → FAQ → Final CTA
 *
 * `*` renders nothing until its data gate opens. Confidence module:
 * DEC-088 — see components/sections/index.ts for what changed and why.
 *
 * This order is deliberately NOT §16's literal outline. §8 lets a
 * template adjust section order, combine, remove, and add sections
 * without separate approval; §9 and §10 add that the reference pages
 * are defaults rather than section quotas, and explicitly do not
 * require "identical section orders across every page". The sequence
 * above is the content-driven arrangement §9 asks for — §16's outline
 * with the sections DEC-084 through DEC-089 added in the places their
 * content earns.
 *
 * The review carousel is the composition's testimonial slot finally
 * carrying real material (DEC-084). `TestimonialBand` above it remains
 * gated and empty; the two are separate because the carousel is
 * ST. LOUIS-scoped and `TestimonialBand` is not (01 §20-21).
 *
 * ---------------------------------------------------------------------------
 * ROUTING AND SERVICES MUST NOT LOOK ALIKE
 * ---------------------------------------------------------------------------
 * The reference map requires the intent-routing section and the
 * services catalog below it to read as different things — routing is
 * decision support, the catalog is the inventory. 18 §11 says the same
 * in general terms: a page that repeats "Heading / Paragraph / Three
 * Cards" down its length "makes the site appear templated and
 * AI-generated". §63 asks for changing grid structures as one of the
 * ways a long page holds interest.
 *
 * So the separation here is structural, not cosmetic:
 *
 *   RoutingCards   an EVEN card grid
 *   ServiceIndex   an UNEVEN mosaic, flagship given double width
 *
 * Two different composition patterns, adjacent, deliberately.
 *
 * 18 §14: a hero must not be an "oversized empty hero that forces the
 * visitor to scroll before understanding the page". It stays editorial
 * because no photography exists in this repo to use — there is no
 * `public/` directory at all, so §40-41's priority subjects have no
 * assets behind them yet. §42 does now permit AI-generated imagery
 * subject to conditions (photorealistic, accurate to the service, no
 * fabricated business claims or invented staff); adopting it is an
 * owner decision about asset direction, not a composition change, so
 * the hero stays text-led until that call is made.
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
    ...(confidenceModuleRenders() ? (['standard'] as const) : []),
    ...(routingCardsRenders(content.routing) ? (['standard'] as const) : []),
    ...(serviceIndexRenders(content.services) ? (['dense'] as const) : []),
    ...(content.differentiator !== undefined ? (['standard'] as const) : []),
    ...(marketCoverageRenders() ? (['dense'] as const) : []),
    ...(content.process !== undefined && processStepsRenders(content.process)
      ? (['standard'] as const)
      : []),
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(authorityBandRenders() ? (['standard'] as const) : []),
    ...(reviewCarouselRenders() ? (['standard'] as const) : []),
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
        // DEC-089 — the ONLY approved FAQPage caller on the site. This
        // is `content.faq` itself, not a copy: lib/schema/faq.ts reads
        // the answer text out of the same JSX FaqSection renders below,
        // so markup cannot drift from visible copy (15 §67).
        faq: content.faq,
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

      <ConfidenceModule density="standard" />

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

      {/*
        `TestimonialBand` stays gated and empty — `data/business/proof.ts`
        holds no verified single testimonial. `ReviewCarousel` is a
        different thing: real St. Louis Google reviews (DEC-084), safe
        here because the homepage is sitewide and St. Louis is the only
        market with a Business Profile (01 §20-21).
      */}
      <TestimonialBand />

      <ReviewCarousel density="standard" />

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
