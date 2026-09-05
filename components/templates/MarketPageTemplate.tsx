import { Section, Prose, type SectionDensity } from '@/components/ui'
import Image from 'next/image'
import {
  Hero,
  TrustBar,
  ConfidenceModule,
  RoutingCards,
  ServiceIndex,
  ProblemGrid,
  InclusionsGrid,
  Differentiator,
  AuthorityBand,
  ProofGallery,
  TestimonialBand,
  ReviewMarquee,
  LeadFormSection,
  CoverageSection,
  RelatedLinks,
  FaqSection,
  CtaSection,
  authorityBandRenders,
  confidenceModuleRenders,
  routingCardsRenders,
  serviceIndexRenders,
  coverageSectionRenders,
  relatedLinksRenders,
  faqSectionRenders,
} from '@/components/sections'
import { reviewMarqueeRenders } from '@/data/reviews/reviews'
import { marketOperatingDetail } from '@/data/markets'
import { PageShell } from './PageShell'
import type { MarketPageContent, MasterPageRecord } from '@/types'

/**
 * Market hub page.
 *
 * Structure from docs/18-design-system.md §112:
 *
 *   Local Hero → Market Service Overview → Local Differentiation
 *   → Primary Local Services → Who We Help → Approved Locations
 *   → Local Proof → Commercial → Resources → FAQ → CTA
 *
 * 18 §109: "Market — location-led and locally contextual."
 *
 * ---------------------------------------------------------------------------
 * TWO SECTIONS FROM §112 ARE ABSENT
 * ---------------------------------------------------------------------------
 * LOCAL PROOF — no verified review or case-study data exists (01 §35,
 * §77; CLAUDE.md §76-77). An empty proof block invites fabrication.
 *
 * LOCAL DIFFERENTIATION as a fixed section — 18 §73 requires local
 * content be meaningful and verified, and warns against filler. Local
 * material belongs in `content.body`, written per market against real
 * conditions, rather than a slot the template asks every market to
 * fill. CLAUDE.md §21's location test applies directly: if the copy
 * survives swapping the city name, it should not ship.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THIS TEMPLATE ALSO SERVES A MARKET WITH NO CONFIRMED SERVICES
 * ---------------------------------------------------------------------------
 * ---------------------------------------------------------------------------
 * THE PHONE IS MARKET-SCOPED, AND THAT IS THE WHOLE POINT
 * ---------------------------------------------------------------------------
 * This is the only template that passes `phone` to `CtaSection`.
 *
 * St. Louis, San Diego, and Las Vegas each publish a DIFFERENT number
 * with different hours (DEC-070, DEC-071, DEC-073), and 01 §20 forbids
 * copying one market's facts onto another's page. A market page knows
 * its market, so it can show the right one; the shared header cannot,
 * which is why it links to `/contact/` instead (PENDING-017).
 *
 * Sourced from `marketOperatingDetail`, whose `Partial` type means a
 * market with no published number simply has no entry — absence reads
 * as "not published" rather than falling back to another market's.
 *
 * ---------------------------------------------------------------------------
 * `/las-vegas-nv/` is an approved (gated) page where zero of 18
 * services are confirmed. `services` and `locationPageIds` are both
 * optional, and the link modules drop gated pages, so the template
 * renders a market page that makes no availability claim. The copy
 * still has to honour that — 01 §20 and §26 forbid implying service
 * where it is unconfirmed.
 */
export interface MarketPageTemplateProps {
  page: MasterPageRecord
  content: MarketPageContent
}

export function MarketPageTemplate({
  page,
  content,
}: MarketPageTemplateProps) {
  // Market-specific published contact. Absent markets get no phone
  // rather than another market's (01 §20).
  const detail =
    page.marketId !== undefined ? marketOperatingDetail[page.marketId] : undefined
  const phone =
    detail !== undefined
      ? { label: detail.phone, href: `tel:${detail.phoneE164}` }
      : undefined

  // Explicit sequence, checked against `sectionRhythmIssues()` at build.
  // The three gated sections contribute no entry — they render nothing.
  const densities: SectionDensity[] = [
    'sparse',
    'dense',
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(serviceIndexRenders(content.services) ? (['dense'] as const) : []),
    ...(authorityBandRenders() ? (['standard'] as const) : []),
    ...(coverageSectionRenders(content.coverage)
      ? (['standard'] as const)
      : []),
    // Same `indexableContext` the module below is given, so a gated
    // market hub's array follows its own links out of the page.
    ...(relatedLinksRenders(content.locationPageIds, {
      indexableContext: page.status === 'launch',
    })
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
      {/*
        ==================================================================
        SECTION 1 - HERO
        ==================================================================
        ⚠ THIS TEMPLATE IS SHARED BY ALL THREE MARKETS, AND EVERY NEW
        SECTION BELOW IS OPTIONAL FOR THAT REASON. San Diego and Las
        Vegas populate only hero, body, services, locationPageIds, faq
        and cta, so anything required here would blank their pages the
        day it shipped. Each block is gated on the content that feeds
        it, which is how `coverage` has always behaved.

        The backdrop is a plain `<Image>` rather than `HeroBackdrop`:
        that component takes NO props and rotates five hardcoded home
        page frames, so it cannot carry a market's own picture.

        `.hero-scrim` is the measured overlay from `app/globals.css`,
        reused rather than re-derived - black/55%, sized against pure
        white so any replacement frame stays legible.
      */}
      {content.heroBackground !== undefined ? (
        <div className="relative isolate overflow-hidden">
          <div aria-hidden="true" className="absolute inset-0 -z-10">
            <Image
              src={content.heroBackground.src}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="hero-scrim absolute inset-0" />
          </div>

          <Hero
            eyebrow={content.hero.eyebrow}
            title={content.hero.title}
            intro={content.hero.intro}
            backdrop={null}
            aside={
              content.showHeroForm === true ? (
                /*
                  ⚠ THE CARD IS WHAT MAKES THE FORM USABLE ON A
                  PHOTOGRAPH. Its inputs, labels and focus rings are
                  built for a light surface, so floating them on a
                  scrimmed frame would mean restyling every control.
                  Same wrapper, same reason, as the home page hero.
                */
                <div className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
                  <LeadFormSection
                    bare
                    id="hero-request-service"
                    idPrefix="hero-lead"
                    defaultMarketId={content.heroFormMarketId}
                  />
                </div>
              ) : undefined
            }
          />
        </div>
      ) : (
        <Hero
          variant="editorial"
          eyebrow={content.hero.eyebrow}
          title={content.hero.title}
          intro={content.hero.intro}
        />
      )}

      <TrustBar />

      {/* SECTION 2 - appointment information. Sitewide data (DEC-088). */}
      {confidenceModuleRenders() && <ConfidenceModule density="standard" />}

      {/* SECTION 3 - customer-intent routing. */}
      {content.routing !== undefined && routingCardsRenders(content.routing) && (
        <RoutingCards
          id="how-we-can-help"
          eyebrow="Start here"
          title="How we can help"
          items={content.routing}
          backgroundImage={content.routingBackground}
          scrim="strong"
        />
      )}

      {/* SECTION 4 - services. `mosaic` once a market supplies card art. */}
      {content.services !== undefined && serviceIndexRenders(content.services) && (
        <ServiceIndex
          density="dense"
          id="market-services"
          title="What we do"
          items={content.services}
          variant={
            content.services.some((item) => item.image !== undefined)
              ? 'mosaic'
              : 'index'
          }
        />
      )}

      {/* SECTION 5 - three-card explainer, e.g. lateral responsibility. */}
      {content.lateralCards !== undefined && (
        <ProblemGrid
          id="lateral-responsibility"
          title={content.lateralCards.title}
          intro={content.lateralCards.intro}
          items={content.lateralCards.items}
        />
      )}

      {/* SECTION 6 - supporting local content. */}
      {content.materialCards !== undefined && (
        <InclusionsGrid
          id="line-materials"
          title={content.materialCards.title}
          intro={content.materialCards.intro}
          items={content.materialCards.items}
        />
      )}

      {content.localFeature !== undefined && (
        <Section density="standard" width="reading" surface="muted">
          <Prose>{content.localFeature.body}</Prose>
        </Section>
      )}

      {content.body !== undefined && (
        <Section density="standard" width="reading">
          <Prose>{content.body}</Prose>
        </Section>
      )}

      {/* SECTION 7 - the model comparison. Sitewide copy (DEC-098). */}
      <Differentiator />

      {/*
        SECTION 8 - one service-area section, not two.

        ⚠ THE `RelatedLinks` "Areas we serve" BLOCK THAT USED TO SIT
        BELOW THIS IS GONE. It listed the same five communities as
        `CoverageSection` immediately above it, which read as a bug
        rather than a pattern. Coverage keeps the list because it also
        carries the availability statement; the related strip carried
        nothing coverage did not.
      */}
      {coverageSectionRenders(content.coverage) && content.coverage !== undefined && (
        <CoverageSection
          id="service-area"
          title={content.coverage.title}
          intro={content.coverage.intro}
          pageIds={content.coverage.pageIds}
          names={content.coverage.names}
          availabilityStatement={content.coverage.availabilityStatement}
        />
      )}

      {/* SECTION 9 - the four-step process. Sitewide copy. */}
      {authorityBandRenders() && (
        <AuthorityBand
          variant="process"
          backgroundImage={content.processBackground}
        />
      )}

      <ProofGallery title="Recent work" />

      <TestimonialBand />

      {/*
        SECTION 10 - reviews.

        ⚠⚠ READ DEC-100 BEFORE CHANGING THIS. The reviews and the
        4.9/595 stat come from the ST. LOUIS Google Business Profile;
        San Diego and Las Vegas have no profile of their own (01 §21,
        DEC-020, DEC-021, DEC-022). DEC-085 previously forbade showing
        them on those two markets for exactly that reason.

        The owner directed on 2026-09-04 that the stat be treated as
        company-wide and shown on all three hubs, UNCONDITIONALLY and
        unattributed. DEC-100 records that supersession.

        ⚠ NO PER-MARKET FLAG, ON INSTRUCTION. An earlier pass gated
        this on a `showReviews` field so the decision would stay
        visible in content; the owner asked for it unconditional, which
        also means San Diego and Las Vegas cannot silently miss it. The
        only gate left is whether review data exists at all.
      */}
      {reviewMarqueeRenders() && <ReviewMarquee density="standard" />}

      {/* SECTION 11 - guides. `featured` when a market names one. */}
      {content.relatedPageIds !== undefined &&
        relatedLinksRenders(content.relatedPageIds, {
          indexableContext: page.status === 'launch',
        }) && (
          <RelatedLinks
            id="guides"
            title={content.relatedTitle ?? 'Guides and resources'}
            eyebrow={content.relatedEyebrow}
            intro={content.relatedIntro}
            pageIds={content.relatedPageIds}
            descriptions={content.relatedDescriptions}
            variant={
              content.relatedFeaturedPageId !== undefined
                ? 'featured'
                : 'horizontal'
            }
            featuredPageId={content.relatedFeaturedPageId}
            featuredPoints={content.relatedFeaturedPoints}
            meta={content.relatedMeta}
            viewAllPageId={content.relatedViewAllPageId}
            indexableContext={page.status === 'launch'}
          />
        )}

      {/* SECTION 12 - FAQ, in the home page's two-column presentation. */}
      {faqSectionRenders(content.faq) && content.faq !== undefined && (
        <FaqSection
          eyebrow={content.faqEyebrow}
          entries={content.faq}
          columns={2}
        />
      )}

      {/*
        SECTION 13 - closing CTA.

        ⚠ THIS IS NOW THE PAGE'S ONLY FORM ON A MARKET WITHOUT A HERO
        FORM. The standalone mid-page `LeadFormSection` was removed for
        all three markets on owner direction (2026-09-04). San Diego and
        Las Vegas convert through this section alone until their hero
        content is written.
      */}
      <CtaSection
        variant={content.ctaBackground !== undefined ? 'split' : 'panel'}
        eyebrow={content.cta?.eyebrow}
        title={content.cta?.title ?? 'Schedule an inspection'}
        body={content.cta?.body}
        backgroundImage={content.ctaBackground}
        phone={phone}
        proof={
          content.ctaBackground !== undefined ? (
            <div className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
              <LeadFormSection bare density="standard" idPrefix="cta-lead" />
            </div>
          ) : undefined
        }
      />
    </PageShell>
  )
}
