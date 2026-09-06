import { Section, Prose, type SectionDensity } from '@/components/ui'
import Image from 'next/image'
import {
  Hero,
  HeroVideoBackdrop,
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

  /*
    Does the guides strip render?

    ⚠ HOISTED BECAUSE THREE PLACES NEED THE SAME ANSWER, NOT AS A
    TIDY-UP. The density array, the render gate and the FAQ's surface
    below all have to agree about this section: a page where the array
    says "guides render" and the composition disagrees checks a rhythm
    nobody ships, and the FAQ picks its background based on whether
    this sits above it. The predicate was already duplicated across the
    first two before the reorder, and they had drifted - the array read
    `content.locationPageIds` where the render reads
    `content.relatedPageIds`.
  */
  /*
    Does the routing band render? Read for the same reason as
    `showsGuides`: the services index below picks its surface from it.
  */
  const showsRouting =
    content.routing !== undefined && routingCardsRenders(content.routing)

  const showsGuides =
    content.relatedPageIds !== undefined &&
    relatedLinksRenders(content.relatedPageIds, {
      indexableContext: page.status === 'launch',
    })

  /*
    Explicit sequence, checked against `sectionRhythmIssues()` at build.
    `ProofGallery` and `TestimonialBand` contribute no entry — they are
    data-gated and render nothing.

    ⚠ THIS ARRAY IS IN RENDER ORDER AND MUST STAY THAT WAY. It was
    rewritten alongside the 2026-09-05 reorder below; a list that no
    longer matches the composition checks the rhythm of a page nobody
    ships.

    ⚠ IT WAS ALSO OUT OF SYNC BEFORE THAT, AND THE DRIFT IS FIXED HERE
    RATHER THAN LEFT IN PLACE. The old array described a page this
    template stopped rendering some time ago: it omitted the confidence
    module, routing, the differentiator, the reviews and all four local
    content blocks; it read `content.locationPageIds` where the related
    module below reads `content.relatedPageIds`; and it ended `sparse`
    for a closing CTA that renders `dense` whenever `ctaBackground` is
    set, which is all three markets today. Every entry below now names
    the section that actually renders and reads the same predicate.
  */
  const densities: SectionDensity[] = [
    'sparse',
    'dense',
    // Unconditional: the differentiator renders its own canonical
    // comparison rather than per-page content that could be absent.
    'standard',
    ...(reviewMarqueeRenders() ? (['standard'] as const) : []),
    ...(showsRouting ? (['standard'] as const) : []),
    ...(content.services !== undefined && serviceIndexRenders(content.services)
      ? (['dense'] as const)
      : []),
    ...(content.lateralCards !== undefined ? (['standard'] as const) : []),
    ...(content.materialCards !== undefined ? (['dense'] as const) : []),
    ...(content.localFeature !== undefined ? (['standard'] as const) : []),
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(authorityBandRenders() ? (['standard'] as const) : []),
    ...(coverageSectionRenders(content.coverage) ? (['dense'] as const) : []),
    ...(confidenceModuleRenders() ? (['standard'] as const) : []),
    ...(showsGuides ? (['dense'] as const) : []),
    ...(faqSectionRenders(content.faq) ? (['dense'] as const) : []),
    // `split` renders dense on a muted surface; `panel` renders sparse
    // on brand. The entry has to say which one actually ships.
    content.ctaBackground !== undefined ? 'dense' : 'sparse',
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

        ⚠ A MARKET THAT ALSO SETS `heroVideo` GETS `HeroVideoBackdrop`
        INSTEAD, AND `heroBackground` BECOMES ITS POSTER. The still is
        not skipped in that case - it is what reduced-motion,
        data-saver, and pre-hydration visitors see, and it stays the
        LCP element. The video never replaces it, it fades in over it.
        All the reasoning lives in that component; owner direction,
        2026-09-05.

        The two branches are one `<Hero>` call with a swapped backdrop
        layer rather than two, so the copy, the form, and the aside
        wiring cannot drift apart between a market with video and one
        without.
      */}
      {content.heroBackground !== undefined ? (
        <div className="relative isolate overflow-hidden">
          {content.heroVideo !== undefined ? (
            <HeroVideoBackdrop
              video={content.heroVideo}
              poster={content.heroBackground}
            />
          ) : (
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
          )}

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

      {/*
        ⚠ `muted`, NOT THE COMPONENT'S OWN `brand` DEFAULT, ON OWNER
        DIRECTION (2026-09-05). It is what separates this strip from
        the section beneath it.

        The reorder put `Differentiator` directly below the trust bar,
        and that section is `brand`. Two navy bands running together
        read as one long dark region, which is the adjacency 18 §11
        names and the owner ruled against on 2026-09-04 ("separate
        sections with background colour, and make the separation
        obvious").

        ⚠ THE FLIP HAD TO HAPPEN ON THIS SIDE OF THE PAIR. The
        differentiator cannot leave `brand`: its heading, intro and
        conclusion are unstyled white inherited from the navy surface,
        its mobile cards and conclusion rule are `border-white/15`, and
        its two comparison cells are LIGHT tints chosen to read against
        navy. Its own `surface` prop says as much - "the dark band is
        what the tinted cells read against."

        The strip survives the move: its labels take `text-foreground`
        from the muted surface, and its green `text-accent` icons
        measure about 4.9:1 against a near-white ground, well clear of
        the 3:1 that non-text graphics need. The green was previously
        measured at 2.61:1 against navy, so this is the better of the
        two for the icons, not a compromise.

        Hero (photo) -> here (muted) -> differentiator (brand) -> reviews
        (default): four surfaces, no two alike.
      */}
      <TrustBar surface="muted" />

      {/*
        ==================================================================
        SECTION 2 - THE MODEL COMPARISON. Sitewide copy (DEC-098).
        ==================================================================
        ⚠ REORDERED 2026-09-05, ON OWNER DIRECTION, TO MATCH THE HOME
        PAGE'S CONVERSION SEQUENCE. This section, the reviews below it,
        the confidence module and the service area all moved; nothing
        about any of them changed but their position. The page now
        answers "why trust this company" before it asks the visitor to
        choose a path, which is the argument recorded in full on
        `HomePageTemplate`.

        ⚠ THE TRUST STRIP ABOVE IS `muted` SO IT DOES NOT MEET THIS
        SECTION'S `brand`. Same flip, same reasoning, as the home page
        - the reasoning is on the `TrustBar` call above. A `border-b`
        is NOT an alternative; the owner ruled out rules as separators
        (2026-09-04).
      */}
      <Differentiator />

      {/*
        SECTION 3 - reviews.

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

        `TestimonialBand` stays gated and empty - `data/business/proof.ts`
        holds no verified single testimonial. It sits here rather than
        further down so the distinction between it and the real review
        carousel stays visible where it is made.
      */}
      <TestimonialBand />

      {reviewMarqueeRenders() && <ReviewMarquee density="standard" />}

      {/* SECTION 4 - customer-intent routing. */}
      {showsRouting && content.routing !== undefined && (
        <RoutingCards
          id="how-we-can-help"
          eyebrow="Start here"
          title="How we can help"
          items={content.routing}
          backgroundImage={content.routingBackground}
          scrim="strong"
          /*
            ⚠ THE FALLBACK, NOT THE CURRENT APPEARANCE. `backgroundImage`
            overrides it, and the muted band is what shows for a market
            that has not supplied one - which is every market today,
            since none sets `routingBackground`.

            Added with the reorder: the reviews section that now sits
            above this is `default` and the services index below it is
            `default`, so the site default would have put three
            matching bands in a row. The home page already passes the
            same value to the same component for the same reason.
          */
          surface="muted"
        />
      )}

      {/* SECTION 5 - services. `mosaic` once a market supplies card art. */}
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
          /*
            ⚠ THE SURFACE DEPENDS ON WHAT IS ABOVE, WHICH DIFFERS BY
            MARKET - same shape as the FAQ's note further down.

              St. Louis  routing (muted)   above -> this takes `default`
              SD and LV  reviews (default) above -> this takes `muted`

            The reorder moved the reviews carousel above this band, and
            San Diego and Las Vegas render no routing section in
            between, so the site default would have put two `default`
            bands together on both. `showsRouting` is the same
            predicate that section renders on, so the two cannot
            disagree.
          */
          surface={showsRouting ? 'default' : 'muted'}
        />
      )}

      {/*
        SECTIONS 6-7 - local content, and the reason it stays HERE.

        These four blocks are the market-specific material: they have
        no counterpart on the home page, so the reorder had no slot to
        move them into. They keep their position immediately after "What
        we do", which is where a market's own explanation of its lines,
        its materials and its rules has always followed the service
        list. Only St. Louis populates all four today.
      */}
      {content.lateralCards !== undefined && (
        <ProblemGrid
          id="lateral-responsibility"
          title={content.lateralCards.title}
          intro={content.lateralCards.intro}
          items={content.lateralCards.items}
        />
      )}

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

      {/* SECTION 8 - the four-step process. Sitewide copy. */}
      {authorityBandRenders() && (
        <AuthorityBand
          variant="process"
          backgroundImage={content.processBackground}
        />
      )}

      <ProofGallery title="Recent work" />

      {/*
        SECTION 9 - one service-area section, not two.

        ⚠ THE `RelatedLinks` "Areas we serve" BLOCK THAT USED TO SIT
        BELOW THIS IS GONE. It listed the same five communities as
        `CoverageSection` immediately above it, which read as a bug
        rather than a pattern. Coverage keeps the list because it also
        carries the availability statement; the related strip carried
        nothing coverage did not.
      */}
      {coverageSectionRenders(content.coverage) && content.coverage !== undefined && (
        <CoverageSection
          /*
            ⚠ `dense`, AND IT IS THE ONE DENSITY VALUE THE 2026-09-05
            REORDER CHANGED. Everything else moved without being
            restyled.

            The reorder put this band inside a five-section run of
            `standard` (local feature, body, process, here, confidence
            module), which `sectionRhythmIssues()` reported on
            /st-louis-mo/ as "Sections 9-12 all use standard density".

            ⚠ THAT RUN IS OLDER THAN THE REORDER. The previous density
            array did not list this section, the differentiator, the
            reviews or the local blocks at all, so the check was
            reading a page this template had long stopped rendering -
            the rendered order before this change carried a run of SIX.
            Fixing the array is what made it visible.

            `dense` rather than a new value because the home page
            already renders its own "where we work" band that way
            (`MarketCoverage density="dense"`). Matching it breaks the
            run and keeps the two pages' equivalent sections alike.
          */
          density="dense"
          id="service-area"
          title={content.coverage.title}
          intro={content.coverage.intro}
          pageIds={content.coverage.pageIds}
          names={content.coverage.names}
          availabilityStatement={content.coverage.availabilityStatement}
        />
      )}

      {/* SECTION 10 - appointment information. Sitewide data (DEC-088). */}
      {confidenceModuleRenders() && <ConfidenceModule density="standard" />}

      {/* SECTION 11 - guides. `featured` when a market names one. */}
      {showsGuides && content.relatedPageIds !== undefined && (
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
          /*
            ⚠ `default`, NOT THE COMPONENT'S OWN `muted`, AND IT IS AN
            ADJACENCY FIX RATHER THAN A PREFERENCE. The reorder put
            `ConfidenceModule` (muted) directly above this, so the
            component's default would put two muted bands together.
            The FAQ below takes `muted` in exchange - see its note.
          */
          surface="default"
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
          /*
            ⚠ THE SURFACE DEPENDS ON WHAT IS ABOVE, WHICH DIFFERS BY
            MARKET. This template is shared, and the section above the
            FAQ is not the same one on every hub:

              St. Louis  guides (default)      -> this takes `muted`
              SD and LV  confidence (muted)    -> this takes `default`

            A fixed value clashes with one of the two. `showsGuides` is
            the same predicate the section above renders on, so the two
            cannot disagree.
          */
          surface={showsGuides ? 'muted' : 'default'}
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
              {/*
                ⚠ THE CLOSING FORM PRESELECTS THE MARKET TOO, AND USED
                NOT TO. It shipped without this on 2026-09-04, so St.
                Louis's hero form knew its market and its closing form
                did not - a visitor who scrolled past the hero had to
                answer a question the page had already answered.

                ⚠ THE FIELD IS STILL CALLED `heroFormMarketId` AND NOW
                FEEDS BOTH FORMS. The name is narrower than the job.
                Renaming it touches `types/content.ts` and all three
                content files, which is out of this change's scope;
                flagged rather than done quietly. A market that sets a
                CTA background but no hero form must still set this or
                its closing form falls back to unanswered, which is the
                old behaviour and safe.
              */}
              <LeadFormSection
                bare
                density="standard"
                idPrefix="cta-lead"
                defaultMarketId={content.heroFormMarketId}
              />
            </div>
          ) : undefined
        }
      />
    </PageShell>
  )
}
