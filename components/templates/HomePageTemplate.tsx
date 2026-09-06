import { Section, Prose, type SectionDensity } from '@/components/ui'
import {
  Hero,
  HeroBackdrop,
  TrustBar,
  ConfidenceModule,
  confidenceModuleRenders,
  RoutingCards,
  ServiceIndex,
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
  relatedLinksRenders,
  faqSectionRenders,
} from '@/components/sections'
import { homeHeroBackdrop } from '@/data/business/hero-backdrop'
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
 * reference (§4).
 *
 * ---------------------------------------------------------------------------
 * ⚠ REORDERED FOR CONVERSION SEQUENCE (owner, 2026-09-05)
 * ---------------------------------------------------------------------------
 * The page now runs:
 *
 *   Hero + form → Trust strip → Differentiator → Google reviews
 *   → Intent routing → Services mosaic → Process → Markets → Body*
 *   → Confidence module → Resources → FAQ → Final CTA + form
 *
 * `*` renders nothing until its data gate opens. Confidence module:
 * DEC-088 — see components/sections/index.ts for what changed and why.
 *
 * ⚠ THIS WAS A REORDER, NOT A REWRITE. Every section below is the one
 * that was already here, with its own props, gates, copy and styling
 * untouched. What changed is the sequence, the surface assignments that
 * sequence forces (see the surface note in the body), and the comments
 * that described the old neighbours.
 *
 * The argument for the shape: the page now answers "why trust this
 * company" (differentiator, then real reviews) BEFORE it asks the
 * visitor to choose a path (routing, services). Orientation used to
 * come first and the proof came two thirds of the way down.
 *
 * This order is deliberately NOT §16's literal outline. §8 lets a
 * template adjust section order, combine, remove, and add sections
 * without separate approval; §9 and §10 add that the reference pages
 * are defaults rather than section quotas, and explicitly do not
 * require "identical section orders across every page".
 *
 * The review carousel is the composition's testimonial slot finally
 * carrying real material (DEC-084). `TestimonialBand` above it remains
 * gated and empty; the two are separate because the carousel is
 * ST. LOUIS-scoped and `TestimonialBand` is not (01 §20-21). They moved
 * up the page together so that relationship stays readable in source.
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
 * Two different composition patterns, adjacent, deliberately. They are
 * still adjacent after the reorder, which is why this note survives it.
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
 * ⚠ ADJACENCY: `AuthorityBand` and the final `CtaSection variant="split"`
 * both carry photographs on this page rather than the brand surface, so
 * `Differentiator` is the only `brand` section left. `TrustBar` above it
 * was moved to `muted` on owner direction so the two do not run
 * together — see the surface note in the body.
 */
export interface HomePageTemplateProps {
  page: MasterPageRecord
  content: HomePageContent
}

export function HomePageTemplate({ page, content }: HomePageTemplateProps) {
  // Explicit sequence, checked against `sectionRhythmIssues()` at build.
  // The gated sections contribute no entry — they render nothing.
  //
  // ⚠ THIS ARRAY IS IN RENDER ORDER AND MUST STAY THAT WAY. It was
  // reordered in lockstep with the JSX below (owner, 2026-09-05); a
  // list that no longer matches the composition checks the rhythm of a
  // page nobody ships.
  //
  // With every gate open the sequence reads:
  //
  //   sparse dense standard standard standard dense standard dense
  //   standard dense dense dense
  //
  // The longest run is three, against `sectionRhythmIssues()`'s
  // threshold of four. Differentiator → reviews → routing is that run,
  // and it is the one to watch if another `standard` section is ever
  // inserted among them.
  const densities: SectionDensity[] = [
    'sparse',
    'dense',
    // The differentiator is unconditional: it renders its own canonical
    // comparison rather than per-page content that could be absent. No
    // predicate to gate on, so the entry is a literal.
    'standard',
    ...(reviewMarqueeRenders() ? (['standard'] as const) : []),
    ...(routingCardsRenders(content.routing) ? (['standard'] as const) : []),
    ...(serviceIndexRenders(content.services) ? (['dense'] as const) : []),
    ...(authorityBandRenders() ? (['standard'] as const) : []),
    ...(marketCoverageRenders() ? (['dense'] as const) : []),
    ...(content.body !== undefined ? (['standard'] as const) : []),
    ...(confidenceModuleRenders() ? (['standard'] as const) : []),
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
        backdrop={<HeroBackdrop set={homeHeroBackdrop} />}
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

        The order, hero downward:

          Hero                photo backdrop
          TrustBar            muted   ← flipped, see below
          Differentiator      brand   ← comparison-table variant
          ReviewMarquee       default
          RoutingCards        photo backdrop
          ServiceIndex        default
          AuthorityBand       photo backdrop  ← process variant
          MarketCoverage      default
          ConfidenceModule    muted
          RelatedLinks        default ← flipped, see below
          FaqSection          muted   ← flipped, see below
          CtaSection          photo backdrop

        ---------------------------------------------------------------------
        ⚠ THE TRUST STRIP IS `muted` HERE AND `brand` EVERYWHERE ELSE.
        ---------------------------------------------------------------------
        The 2026-09-05 reorder put the differentiator directly below the
        trust strip, and that section is `brand`. The strip was flipped
        to `muted` on owner direction so the two do not read as one long
        navy region. The full reasoning, including why the flip had to
        happen on the strip rather than on the differentiator, sits on
        the `TrustBar` call above.

        A `border-b` is NOT an alternative fix: a rule is the exact
        thing the owner ruled out, and two such dividers were deleted
        from this page for that reason.

        ⚠ INSERTING A SECTION HERE MEANS RE-CHECKING ITS NEIGHBOURS.
        Adding one without flipping what follows it puts two more
        matching surfaces together, which is the thing this sequence
        exists to prevent.
      */}

      {/*
        ⚠ NO `content.differentiator` GATE, AND NO title/intro PASSED
        IN. `differentiatorComparison` owns its own heading and intro,
        so `homeContent.differentiator` was a second source for the
        same two strings — removed rather than left to drift out of
        step with the table beneath it (owner, 2026-09-04).

        ⚠ SURFACE IS `brand`, THE VARIANT'S DEFAULT, AND THE SECTIONS
        EITHER SIDE ARE SET AROUND IT. `TrustBar` above is `muted`
        precisely so it does not meet this one; `ReviewMarquee` below
        is `default`. See the surface note above.
      */}
      <Differentiator />

      {/*
        `TestimonialBand` stays gated and empty — `data/business/proof.ts`
        holds no verified single testimonial. `ReviewMarquee` is a
        different thing: real St. Louis Google reviews (DEC-084), safe
        here because the homepage is sitewide and St. Louis is the only
        market with a Business Profile (01 §20-21).

        The two moved up the page together in the 2026-09-05 reorder so
        that distinction stays visible where it is made.
      */}
      <TestimonialBand />

      <ReviewMarquee density="standard" />

      {content.routing !== undefined && (
        <RoutingCards
          id="how-we-can-help"
          eyebrow="Start here"
          title="How we can help"
          /*
            Navigational framing only. It says what the four cards are
            for and makes no claim about the business, which is the
            whole bar for copy written at the template layer rather
            than in `data/business/`.
          */
          intro="Find the service, location, or contact path that matches what you need."
          items={content.routing}
          /*
            Darker than the site default, on owner direction: the cards
            and heading sit over a bright daylight exterior. `strong`
            only ever adds contrast - see the prop note on `Section`.
          */
          scrim="strong"
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

      {/*
        ⚠ THE PROCESS VARIANT, HOMEPAGE ONLY. It takes no `title`:
        `authorityProcess` owns its own eyebrow, heading, intro and
        both actions, so there is one source for them. Every other
        template still calls `<AuthorityBand title="How we work" />`
        and renders the unchanged proof-point band.

        ⚠ IT CARRIES THE PHOTOGRAPH THAT USED TO BACK "How it works"
        (owner, 2026-09-04). That section is gone and its frame moved
        here, which is why `processBackground` still reads correctly:
        this band is the page's process section now.

        ⚠ ADJACENCY RE-CHECKED AFTER THE 2026-09-05 REORDER. This band
        used to follow `Differentiator` (brand) with `MarketCoverage`
        between them. It now follows `ServiceIndex` (default) and is
        followed by `MarketCoverage` (default) — and it is an image
        rather than `brand` in any case, so no two dark surfaces meet
        on either side. See the surface order above.
      */}
      <AuthorityBand
        variant="process"
        backgroundImage={content.processBackground}
      />

      <ProofGallery title="Recent work" />

      <MarketCoverage density="dense" />

      {content.body !== undefined && (
        <Section density="standard" width="reading">
          <Prose>{content.body}</Prose>
        </Section>
      )}

      <ConfidenceModule density="standard" />

      {content.relatedPageIds !== undefined && (
        <RelatedLinks
          title={content.relatedTitle ?? 'Guides and resources'}
          intro={content.relatedIntro}
          pageIds={content.relatedPageIds}
          descriptions={content.relatedDescriptions}
          /*
            ⚠ `featured` VALIDATES ITSELF AND STANDS DOWN. Passing it
            is a request, not a guarantee: if `relatedFeaturedPageId`
            is absent or names a page not in `relatedPageIds`, or
            fewer than three relations survive gating, the component
            renders its default row list instead of a 7/5 split with a
            hole in it.
          */
          variant="featured"
          /*
            ⚠ `default`, NOT THE COMPONENT'S OWN `muted` DEFAULT, AND
            IT IS AN ADJACENCY FIX RATHER THAN A PREFERENCE. The
            2026-09-05 reorder moved `ConfidenceModule` (muted)
            directly above this, so the component's default would put
            two muted bands together. Flipping this one and the FAQ
            below restores the alternation across all four of
            MarketCoverage → ConfidenceModule → here → FaqSection.
            Both components are light-surface designs either way, so
            neither swap changes a treatment.
          */
          surface="default"
          eyebrow={content.relatedEyebrow}
          featuredPageId={content.relatedFeaturedPageId}
          featuredPoints={content.relatedFeaturedPoints}
          meta={content.relatedMeta}
          viewAllPageId={content.relatedViewAllPageId}
        />
      )}

      {content.faq !== undefined && (
        <FaqSection
          eyebrow={content.faqEyebrow}
          /*
            ⚠ SET HERE, NOT ON `FaqSection`'s DEFAULT. Six other
            templates render that default - commercial, comparison,
            core, hub, location and market - and "about sewer and
            drain services" would be wrong on the About page and on a
            market hub. The home page is the one that is genuinely
            sitewide in scope, so it is the one that names the scope
            (owner, 2026-09-04).
          */
          title="Common questions about sewer and drain services"
          entries={content.faq}
          columns={2}
          /*
            The other half of the adjacency fix noted on `RelatedLinks`
            above: that section takes `default`, so this one takes
            `muted`. `HubPageTemplate` already renders this section
            muted, so the treatment is one the component ships with
            rather than a new one.
          */
          surface="muted"
        />
      )}

      {/*
        The form moved into the final CTA's proof slot, which is what
        `split` exists for: content at lg:col-span-7, proof at
        lg:col-span-5. The bare mid-page call above was removed in the
        same change, since opening the gate would otherwise have
        rendered the same form twice on one page.

        `split` renders on `muted` where `panel` used `brand`, so this
        section is not one of the page's dark ones either way. With
        `ctaBackground` set it is a photograph rather than the muted
        band; `FaqSection` above it is now `muted`, so nothing dark
        meets anything dark here and no two light bands match either.
      */}
      <CtaSection
        variant="split"
        eyebrow={content.cta?.eyebrow}
        title={content.cta?.title ?? 'Schedule a sewer camera inspection.'}
        body={content.cta?.body}
        /*
          ⚠ `null`, NOT OMITTED. Undefined would fall back to the
          global `PRIMARY_CTA` and put the button back.

          The lead form sits in the `proof` slot beside this copy and
          carries its own submit button. A second action pointing at
          `/contact/` while a contact form is already on screen is a
          competing ask rather than a stronger one, and 18 §62 warns
          against exactly that (owner, 2026-09-04).
        */
        action={null}
        backgroundImage={content.ctaBackground}
        proof={
          /*
            ⚠ THE CARD IS WHAT MAKES THE FORM USABLE ON A PHOTOGRAPH,
            NOT DECORATION. Its inputs, labels and focus rings are all
            built for a light surface (components/ui/Field.tsx), and
            floating them on a scrimmed frame would mean restyling
            every control. This is the same wrapper, for the same
            stated reason, that the hero puts around the same form.

            It renders whether or not there is an image: on the muted
            fallback surface a bordered white card still reads
            correctly, and one form treatment on this page beats two.

            ⚠ `text-foreground` IS LOAD-BEARING, NOT TIDINESS. An
            image section sets `text-white` on its wrapper, and an
            opaque card does NOT stop that inheriting. The form's
            fields set their own colour and looked fine; its `<h2>`
            does not, so "Request service" rendered white on white and
            was invisible until this class was added. Any opaque card
            dropped into an image section needs the same reset.
          */
          <div className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
            <LeadFormSection bare density="standard" />
          </div>
        }
      />
    </PageShell>
  )
}
