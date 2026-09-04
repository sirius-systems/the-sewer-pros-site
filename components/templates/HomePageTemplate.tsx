import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  Hero,
  HeroBackdrop,
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
  ReviewMarquee,
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
// data, and `ReviewMarquee` itself is a client component.
import { reviewMarqueeRenders } from '@/data/reviews/reviews'
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
 * because no photography exists in this repo to use. `public/images/`
 * now holds the full production folder structure, but every leaf is
 * empty — §40-41's priority subjects still have no assets behind them.
 * §42 does now permit AI-generated imagery
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
    ...(reviewMarqueeRenders() ? (['standard'] as const) : []),
    ...(relatedLinksRenders(content.relatedPageIds)
      ? (['dense'] as const)
      : []),
    ...(faqSectionRenders(content.faq) ? (['dense'] as const) : []),
    // The final CTA is `split`, not `panel`, and CtaSection gives
    // `split` DENSE density on a muted surface (panel is the sparse
    // brand one). This entry has to say what actually renders, or
    // sectionRhythmIssues() checks a page that was never built.
    'dense',
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
      {/*
        The hero carries a photographic backdrop and the lead form, on
        owner direction (2026-09-03). Both are homepage-only.

        `variant` stays `editorial` and that is not an oversight: the
        variant governs the copy block, and the copy block here is
        still headline-and-intro with no supporting picture inside the
        container. The backdrop is behind the section and the form is
        `aside`, neither of which is `media`.

        ⚠ The form is `idPrefix="hero-lead"` because the closing
        CtaSection renders the same form lower down. Two instances with
        the default prefix emit duplicate field ids and break every
        label in the second one. Change one, check the other.
      */}
      <Hero
        variant="editorial"
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        secondaryAction={{ href: '/services/', label: 'View services' }}
        backdrop={<HeroBackdrop />}
        aside={
          /*
            A solid card, not a translucent panel. The form's inputs,
            labels and focus rings are all built for a light surface
            (components/ui/Field.tsx); floating them on a scrimmed
            photograph would mean restyling every control for an
            unpredictable backdrop, and unpredictable is the operative
            word with five rotating frames.
          */
          <div className="rounded-md border border-border bg-surface p-6 shadow-sm sm:p-8">
            <LeadFormSection
              bare
              id="hero-request-service"
              idPrefix="hero-lead"
            />
          </div>
        }
      />

      <TrustBar />

      {/*
        =====================================================================
        SURFACES ALTERNATE DOWN THIS PAGE. NO TWO ADJACENT SECTIONS MATCH.
        =====================================================================
        Owner direction, 2026-09-04: separate sections with background
        colour, not with a rule, and make the separation obvious.

        ⚠ THIS REVERSES 18 §11 FOR THIS PAGE. That section says "avoid
        alternating background colors on every section simply for
        decoration" and assigns rhythm to density instead. The owner
        has asked for the opposite and it is applied deliberately, not
        by drift. Density still varies underneath; this is in addition
        to it, not instead of it.

        Two `border-b border-border` dividers used to sit on
        `ServiceIndex` and `MarketCoverage`, patching the two pairs
        that shared a surface. Both are GONE: a rule is the thing the
        owner ruled out, and with the sequence below there is no
        matching pair left for one to patch.

        The order, hero downward:

          Hero                photo backdrop
          TrustBar            brand
          ConfidenceModule    default
          RoutingCards        muted
          ServiceIndex        default
          Differentiator      muted
          MarketCoverage      default
          ProcessSteps        muted
          AuthorityBand       brand
          ReviewMarquee       default
          RelatedLinks        muted
          FaqSection          default
          CtaSection          muted

        ⚠ INSERTING A SECTION HERE MEANS RE-CHECKING ITS NEIGHBOURS.
        Adding one without flipping what follows it puts two matching
        surfaces back together, which is the thing this sequence exists
        to prevent.
      */}
      <ConfidenceModule density="standard" />

      {content.routing !== undefined && (
        <RoutingCards
          id="how-we-can-help"
          title="How we can help"
          items={content.routing}
          /*
            `surface` is the fallback, not the current appearance:
            `backgroundImage` overrides it, and the muted band is what
            comes back if that image is ever removed.
          */
          surface="muted"
          backgroundImage={content.routingBackground}
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
          variant="cards"
          /*
            `surface` is the fallback, not the current appearance:
            `backgroundImage` overrides it, and the muted band is what
            comes back if that image is ever removed.
          */
          surface="muted"
          backgroundImage={content.processBackground}
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
        holds no verified single testimonial. `ReviewMarquee` is a
        different thing: real St. Louis Google reviews (DEC-084), safe
        here because the homepage is sitewide and St. Louis is the only
        market with a Business Profile (01 §20-21).
      */}
      <TestimonialBand />

      <ReviewMarquee density="standard" />

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Guides and resources'}
          pageIds={content.relatedPageIds}
          descriptions={content.relatedDescriptions}
          variant="image"
        />
      )}

      {content.faq !== undefined && (
        <FaqSection entries={content.faq} columns={2} />
      )}

      {/*
        The form moved into the final CTA's proof slot, which is what
        `split` exists for: content at lg:col-span-7, proof at
        lg:col-span-5. The bare mid-page call above was removed in the
        same change, since opening the gate would otherwise have
        rendered the same form twice on one page.

        Note this drops the page's second brand surface: `split`
        renders on `muted`, where `panel` used `brand`. AuthorityBand
        remains the only brand section, which keeps 18 §11's rule
        against stacking dark sections satisfied by a wider margin.
      */}
      <CtaSection
        variant="split"
        title={content.cta?.title ?? 'Schedule a sewer camera inspection.'}
        body={content.cta?.body}
        proof={<LeadFormSection bare density="standard" />}
      />
    </PageShell>
  )
}
