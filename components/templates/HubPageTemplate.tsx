import { Section, Prose, type SectionDensity, type SectionSurface } from '@/components/ui'
import {
  Hero,
  TrustBar,
  ServiceIndex,
  MarketCoverage,
  AuthorityBand,
  FaqSection,
  CtaSection,
  ConfidenceModule,
  LeadFormSection,
  ReviewMarquee,
  RoutingCards,
  MarketGuidance,
  marketGuidanceRenders,
  routingCardsRenders,
  authorityBandRenders,
  confidenceModuleRenders,
  serviceIndexRenders,
  marketCoverageRenders,
  faqSectionRenders,
} from '@/components/sections'
/*
  ⚠ NOT FROM THE SECTIONS BARREL, UNLIKE EVERY OTHER PREDICATE ABOVE.
  `reviewMarqueeRenders` asks whether the review DATASET has entries,
  so it lives with the data; `ReviewMarquee` itself is a client
  component. `MarketPageTemplate` imports it from the same place.
*/
import { reviewMarqueeRenders } from '@/data/reviews/reviews'
import { PageShell } from './PageShell'
import type { ReactNode } from 'react'
import type { HubPageContent, MasterPageRecord } from '@/types'

/**
 * Hub page — `/services/`, `/locations/`, `/for/`, `/commercial/`,
 * `/resources/`.
 *
 * Governed by docs/03-information-architecture.md §52-53;
 * docs/16-internal-linking-strategy.md; docs/18-design-system.md §5.6.
 *
 * A hub's job is orientation: explain the family, then list its
 * members. The list uses `ServiceIndex` — a scannable index rather than
 * a card grid — for the reason Appendix A gives directly: the services
 * hub has TEN members, and ten divides cleanly into no sensible column
 * count. 3 columns gives 3+3+3+1, 4 gives 4+4+2. 18 §5.6 forbids
 * forcing either.
 *
 * The same pattern suits the other hubs regardless of count, which
 * keeps hub pages consistent without the card-grid default 18 §5.6
 * warns is "the single strongest visual signal of a templated site".
 */
export interface HubPageTemplateProps {
  page: MasterPageRecord
  content: HubPageContent
  /** Heading above the member list. */
  itemsTitle?: string
  /** Numbered rows suit an ordered family; plain suits a set. */
  numbered?: boolean
  /**
   * Surface for the items index.
   *
   * Only needed on a hub with NO faq, where the index is the last
   * content band before the CTA and would otherwise leave the page an
   * unbroken run of `default` surfaces. `/for/` sets this.
   */
  itemsSurface?: SectionSurface
  /**
   * Full-bleed layer behind the hero, e.g. `<HeroBackdrop set={...} />`.
   *
   * ⚠ SUPPLYING THIS FLIPS THE HERO COPY TO WHITE. `Hero` treats the
   * backdrop and the white text as one decision, because they are:
   * white copy without a backdrop is invisible and dark copy over a
   * photograph is unreadable. Whatever is passed must therefore carry
   * a scrim dark enough to hold that text - `HeroBackdrop` does.
   *
   * ⚠ HUBS ARE OTHERWISE EDITORIAL, AND THAT IS STILL THE DEFAULT.
   * 18 §37 says a hero "should not depend on a decorative image to
   * explain the page", and four of the five hubs pass nothing here.
   * `/locations/` is the exception on owner direction (2026-09-05):
   * its subject is three markets and its backdrop cycles one frame
   * per market, which is the page's own content rather than dressing.
   * A hub whose backdrop would not pass that test should stay
   * editorial.
   */
  backdrop?: ReactNode
}

export function HubPageTemplate({
  page,
  content,
  itemsTitle = 'In this section',
  numbered = false,
  itemsSurface = 'default',
  backdrop,
}: HubPageTemplateProps) {
  // A hub only takes the authority band when a non-brand section
  // follows it. `AuthorityBand` and the closing `CtaSection
  // variant="panel"` are the only two brand surfaces in the system, and
  // stacking dark sections is a named anti-pattern (18 §11).
  //
  // `/for/` is the live case: it has no FAQ, so the band would land
  // directly against the CTA panel. It is omitted there rather than the
  // adjacency being accepted.
  // The band also omits itself below three proof points, so the array
  // entry must read the same condition the render does.
  //
  // The FAQ condition is `faqSectionRenders`, not `!== undefined`: an
  // authored but empty entry list renders nothing, which would leave
  // the band against the closing CTA panel — the stacked brand
  // surfaces this whole condition exists to prevent.
  //
  // ⚠ THE SAME CONDITION NOW DOES DOUBLE DUTY, AND THE SECOND JOB IS
  // THE MIRROR OF THE FIRST. On a hub that sets `showHeroForm` the
  // closing CTA is `split`, so it is MUTED rather than brand — and the
  // FAQ above it is muted too. The band is what separates them, which
  // is why it MOVES BELOW THE FAQ in that case (see the render). One
  // FAQ-gated band, two adjacency problems: brand-on-brand when the
  // CTA is a panel, muted-on-muted when it is a split.
  //
  // The condition itself is unchanged. Whether the band renders has
  // never depended on the CTA's surface and still does not.
  //
  // ⚠ SUPPRESSED ENTIRELY WHEN THE PROCESS BAND TAKES THIS SLOT. Both
  // are `AuthorityBand`; see the gate block below for why a page gets
  // one or the other and never both.
  const showAuthority =
    content.showProcessBand !== true &&
    faqSectionRenders(content.faq) &&
    authorityBandRenders()

  /*
    ==========================================================================
    CONVERSION AND TRUST PARITY (DEC-103, owner direction 2026-09-07)
    ==========================================================================
    Three sections the market hubs carry and the hubs did not. All
    three are OFF unless the content file opts in, which is what leaves
    `/services/`, `/for/`, `/commercial/` and `/resources/` byte-for-byte
    unchanged - only `/locations/` sets either flag.

    ⚠ THE FLAGS ARE ANDed WITH THE EXISTING DATA PREDICATES, NOT
    SUBSTITUTED FOR THEM. `reviewMarqueeRenders()` and
    `confidenceModuleRenders()` still decide whether there is anything
    to show; the flag only decides whether this page family asks. An
    opt-in that bypassed the predicate would ship an empty band the
    day the dataset was cleared.
  */
  const showsHeroForm = content.showHeroForm === true
  const showsReviews =
    content.showTrustSections === true && reviewMarqueeRenders()
  const showsConfidence =
    content.showTrustSections === true && confidenceModuleRenders()

  /*
    Which member list renders, and it is EXACTLY ONE OF THE TWO.

    ⚠ HOISTED BECAUSE THE DENSITY ARRAY AND THE RENDER BOTH READ IT. An
    array that described the index while the page shipped the cards
    would check a rhythm nobody sees.

    `/locations/` is the only hub whose members are markets, so it is
    the only one `MarketCoverage` can resolve cards for. The other four
    keep the scannable index, unchanged.
  */
  const showsMarketCards =
    content.marketCards !== undefined && marketCoverageRenders()
  const showsItems =
    !showsMarketCards && serviceIndexRenders(content.items)

  /*
    ==========================================================================
    THE MEMBER LIST TAKES THE HOME PAGE'S MOSAIC WHEN IT HAS THE FRAMES
    ==========================================================================
    ⚠ THE SAME TEST THE SERVICE BAND BELOW ALREADY RUNS, and the rule
    `content/pages/service-cards.ts` states in prose: `ServiceIndex`
    promotes a band from row list to mosaic purely on whether `image`
    is set. Deriving it here rather than adding a route prop means a
    hub that loses its artwork falls back to the row list instead of
    shipping an empty-tiled grid, which is the failure the services
    band was written to avoid.

    ⚠ THIS CHANGES ONE PAGE TODAY, `/services/`. It has always passed
    `homeContent.services` - the home page's own nine cards, artwork
    and all - and rendered them as a plain row list, because
    `HubPageContent.items` carried no `image` field for the template to
    read. `/for/`, `/commercial/` and `/resources/` list pages that
    have no frames, and `/locations/` renders `MarketCoverage` instead
    of this band, so none of the four moves.

    ⚠ THE DENSITY MOVES WITH THE VARIANT, AND IT HAS TO. `dense` is
    what the home page and all three market hubs give this mosaic: the
    tiles carry their own internal rhythm and `standard` padding leaves
    them floating in the section. The `densities` array below reads
    this same constant, because an array that disagreed with the render
    would have `sectionRhythmIssues()` check a rhythm the page does not
    have.

    ⚠ `numbered` SURVIVES ON THE ROUTE AND IS INERT HERE. It is an
    `index`-only prop, so `/services/` passing it is now a statement
    about the fallback rather than about what renders.
  */
  const itemsAreMosaic =
    showsItems &&
    content.items !== undefined &&
    content.items.some((item) => item.image !== undefined)
  const itemsDensity: SectionDensity = itemsAreMosaic ? 'dense' : 'standard'

  /*
    The service mosaic, which is a SEPARATE band from the member list
    above. See `HubPageContent.services` for why they are not
    alternatives.
  */
  const showsServices = serviceIndexRenders(content.services)

  /*
    ==========================================================================
    THE HOME PAGE'S SHARED BANDS, ON OWNER DIRECTION (2026-09-07)
    ==========================================================================
    "How we can help" and the process band, plus the service-area
    explainer that replaces this hub's prose intro. Every one is opt-in
    from content, so the other four hubs are unaffected.

    ⚠ THE PROCESS BAND SWAPS THE PROOF BAND OUT RATHER THAN JOINING IT.
    Both are `AuthorityBand`. A page carrying the proof points AND the
    process steps makes the same "here is why to trust us" argument
    twice in one column, and the home page already settled this: it
    renders the process variant and no proof band at all.
  */
  const showsGuidance = marketGuidanceRenders(content.guidance)
  const showsRouting =
    content.routing !== undefined && routingCardsRenders(content.routing)
  const showsProcessBand = content.showProcessBand === true

  /*
    ==========================================================================
    SURFACES BELOW THE MEMBER LIST, DERIVED RATHER THAN HARDCODED
    ==========================================================================
    Four bands can follow the member list and any combination of the
    middle two may be absent, so hardcoding each one's surface means
    re-deriving the whole run by hand every time a section is added -
    which is exactly what adding the service mosaic would have forced.

    ⚠ THE FOUR OTHER HUBS COME OUT WHERE THEY ALWAYS WERE. They render
    neither services nor the confidence module, so this collapses to
    `flip(itemsSurface)` for the FAQ: `default` member list -> `muted`
    FAQ, which is the value that used to be written literally.
  */
  const flip = (surface: SectionSurface): SectionSurface =>
    surface === 'muted' ? 'default' : 'muted'

  /*
    ⚠ THE REVIEW BAND TAKES THE OPPOSITE OF WHATEVER OPENS THE PAGE.
    The prose `body` is `default`, the guidance section is `muted`, and
    the reviews sit directly under whichever one renders. Deriving it
    here is what stops the pair silently matching the day a hub swaps
    one intro for the other.

    ⚠ `itemsSurface` MUST THEN BE THE OPPOSITE OF THE REVIEW BAND on a
    hub rendering both, because the member list follows it. That prop
    is route-provided rather than derived, so `/locations/` passes
    `muted` explicitly. A mismatch there is the one adjacency this
    chain cannot catch for itself.
  */
  const introSurface: SectionSurface = showsGuidance ? 'muted' : 'default'
  const reviewsSurface = flip(introSurface)

  let previousSurface: SectionSurface = itemsSurface
  const servicesSurface = flip(previousSurface)
  if (showsServices) previousSurface = servicesSurface
  const confidenceSurface = flip(previousSurface)
  if (showsConfidence) previousSurface = confidenceSurface
  const faqSurface = flip(previousSurface)

  // Explicit sequence, checked against `sectionRhythmIssues()` at build.
  const densities: SectionDensity[] = [
    'sparse',
    'dense',
    ...(showsGuidance || content.body !== undefined
      ? (['standard'] as const)
      : []),
    ...(showsReviews ? (['standard'] as const) : []),
    ...(showsRouting ? (['dense'] as const) : []),
    /*
      ⚠ THE CARDS ARE `dense` WHERE THE INDEX IS `standard`, AND THAT
      IS THE HOME PAGE'S OWN VALUE RATHER THAN A NEW ONE. That page
      renders `MarketCoverage density="dense"`, and the point of this
      branch is that the two pages present the same section the same
      way. It also breaks what would otherwise be body -> cards ->
      process, three `standard` bands in a row.
    */
    ...(showsMarketCards ? (['dense'] as const) : []),
    // `itemsDensity`, not a literal: the mosaic takes `dense` and the
    // row list `standard`. See where it is derived.
    ...(showsItems ? [itemsDensity] : []),
    /*
      ⚠ `dense`, WHICH IS THE VALUE THE HOME PAGE AND ALL THREE MARKET
      HUBS ALREADY GIVE THIS BAND. The mosaic carries its own internal
      rhythm; padding it out to `standard` would leave the tiles
      floating in the section.
    */
    ...(showsServices ? (['dense'] as const) : []),
    // The process band, in the home page's slot. See the render.
    ...(showsProcessBand ? (['standard'] as const) : []),
    // After the member list, as on the market hubs.
    ...(showsConfidence ? (['standard'] as const) : []),
    /*
      ⚠ THE BAND APPEARS IN ONE OF TWO SLOTS AND NEVER BOTH. Above the
      FAQ when the closing CTA is a brand panel, below it when the CTA
      is a muted split — see the `showAuthority` comment for why the
      buffer has to move. The two branches are mutually exclusive on
      `showsHeroForm`, so the array length is unchanged either way.
    */
    ...(showAuthority && !showsHeroForm ? (['standard'] as const) : []),
    ...(faqSectionRenders(content.faq) ? (['dense'] as const) : []),
    ...(showAuthority && showsHeroForm ? (['standard'] as const) : []),
    /*
      ⚠ `CtaSection` SETS ITS OWN DENSITY FROM ITS VARIANT AND THIS HAS
      TO AGREE WITH IT: `sparse` for the panel, `dense` for the split.
      A mismatch here would have `sectionRhythmIssues()` check a rhythm
      the page does not have.
    */
    showsHeroForm ? 'dense' : 'sparse',
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
        `backdrop` is passed straight through rather than being wrapped
        here. `Hero` already owns that composition: it supplies the
        `relative isolate overflow-hidden` container, drops the
        section's own surface, and switches the copy to white. Doing
        any of that again at this level would fight it.
      */}
      <Hero
        variant="editorial"
        eyebrow={content.hero.eyebrow}
        title={content.hero.title}
        intro={content.hero.intro}
        backdrop={backdrop}
        aside={
          showsHeroForm ? (
            /*
              ⚠ THE CARD IS WHAT MAKES THE FORM USABLE ON A PHOTOGRAPH.
              Its inputs, labels and focus rings are built for a light
              surface, so floating them on a scrimmed frame would mean
              restyling every control. Same wrapper, same reason, as
              the home page and market hero.

              ⚠ NO `defaultMarketId`. This hub represents all three
              markets, so preselecting one would answer a question the
              page has no business answering (01 §20). The field ships
              unanswered, which is correct rather than unfinished.
            */
            <div className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
              <LeadFormSection
                bare
                id="hero-request-service"
                idPrefix="hero-lead"
                intro={content.heroFormIntro}
              />
            </div>
          ) : undefined
        }
      />

      <TrustBar />

      {/*
        ⚠ ONE INTRO BAND, IN ONE OF TWO PRESENTATIONS. `/locations/`
        takes the card-led explainer because its subject IS the
        service-market distinction; the other four hubs keep the prose.
        See `HubPageContent.guidance` for why they are alternatives.
      */}
      {showsGuidance && content.guidance !== undefined ? (
        <MarketGuidance content={content.guidance} density="standard" />
      ) : (
        content.body !== undefined && (
          <Section density="standard" width="reading">
            <Prose>{content.body}</Prose>
          </Section>
        )
      )}

      {/*
        ⚠ MUTED, WHERE THE MARKET HUBS RENDER THIS WHITE, AND THE
        REASON IS THE SAME REASON THEY RENDER IT WHITE. The band exists
        to read as a different KIND of content from its neighbours; on
        a market hub those neighbours are dark, here the neighbour
        above is the hub's white body prose. Same rule, opposite value.
        See `ReviewMarqueeProps.surface`.
      */}
      {showsReviews && (
        <ReviewMarquee density="standard" surface={reviewsSurface} />
      )}

      {/*
        "How we can help" - the same intent-routing band the home page
        and all three market hubs carry (owner, 2026-09-07).

        ⚠ THE ARRAY IS AUTHORED PER PAGE, NOT SHARED. The home page's
        includes a "Check coverage" card pointing at `/locations/`;
        rendering that here would route a visitor to the page they are
        already on. See `HubPageContent.routing`.
      */}
      {showsRouting && content.routing !== undefined && (
        <RoutingCards
          /*
            ⚠ SET EXPLICITLY, WHERE THE HOME PAGE LETS IT DEFAULT. The
            component's own default is `standard`, and the density
            array above has to state what the page actually renders -
            an array that disagrees with the render has
            `sectionRhythmIssues()` checking a rhythm nobody sees. It
            is also the value that breaks what would otherwise be
            guidance -> reviews -> routing, three `standard` bands.
          */
          density="dense"
          id="how-we-can-help"
          eyebrow="Start here"
          title="How we can help"
          intro="Find the service, location, or contact path that matches what you need."
          items={content.routing}
          scrim="strong"
          /*
            `surface` is the fallback, not the current appearance: the
            background image overrides it, and this is what comes back
            if that image is ever removed.
          */
          surface="default"
          backgroundImage={content.routingBackground}
        />
      )}

      {/*
        ⚠ THE MEMBER LIST, IN ONE OF TWO PRESENTATIONS. Not two
        sections: a hub renders its members once.

        `/locations/` takes the home page's market cards, on owner
        direction (2026-09-07), because its members ARE the three
        markets and the same geographic information should not be shown
        in two competing designs across the site. Everything the plain
        rows carried is still here and still a crawlable anchor - the
        three hub links are the card headings and their closing links,
        and each card now also exposes that market's community pages.

        ⚠ `id="hub-items"` MOVES WITH IT so the anchor target and the
        `aria-labelledby` on this band stay the same id whichever
        presentation renders.
      */}
      {showsMarketCards && content.marketCards !== undefined && (
        <MarketCoverage
          density="dense"
          id="hub-items"
          eyebrow={content.marketCards.eyebrow}
          title={content.marketCards.title}
          intro={content.marketCards.intro}
          descriptions={content.marketCards.descriptions}
          actionLabels={content.marketCards.actionLabels}
          /*
            ⚠ `h3` HERE, `span` ON THE HOME PAGE. These cards are this
            page's primary content and its only H3 level, so they carry
            real headings; the home page keeps the span it renders
            today, which is what leaves its output untouched. See
            `MarketCoverage.headingAs`.
          */
          headingAs="h3"
          surface={itemsSurface}
        />
      )}

      {showsItems && content.items !== undefined && (
        /*
          ⚠ `variant` AND `density` BOTH COME FROM `itemsAreMosaic`,
          derived once above so the render and the `densities` array
          cannot disagree. `id` stays `hub-items` in either shape: it
          is the member list's anchor whatever presentation it takes,
          and the service band below owns `id="services"`.
        */
        <ServiceIndex
          density={itemsDensity}
          id="hub-items"
          title={itemsTitle}
          items={content.items}
          numbered={numbered}
          variant={itemsAreMosaic ? 'mosaic' : 'index'}
          surface={itemsSurface}
        />
      )}

      {/*
        ==================================================================
        THE SERVICE MOSAIC — A SECOND BAND, NOT THE MEMBER LIST
        ==================================================================
        Owner direction (2026-09-07): `/locations/` carries the home
        page's "What we do" section. Its members are the three markets,
        so unlike `/services/` this hub has no services band of its own
        and the two do not compete.

        ⚠ SAME CALL AS THE MARKET HUBS, DOWN TO THE `variant` TEST.
        `mosaic` only once the cards actually carry artwork - a page
        that lost its frames would otherwise ship an empty-tiled grid
        rather than falling back to the row list.

        ⚠ `id="services"`, NOT `hub-items`. That id belongs to the
        member list above whichever presentation it takes, and two
        sections cannot share one anchor target.
      */}
      {showsServices && content.services !== undefined && (
        <ServiceIndex
          density="dense"
          id="services"
          title="What we do"
          items={content.services}
          variant={
            content.services.some((item) => item.image !== undefined)
              ? 'mosaic'
              : 'index'
          }
          surface={servicesSurface}
        />
      )}

      {/*
        ==================================================================
        THE PROCESS BAND — HOME PAGE POSITION, AND IT MOVED HERE FOR A
        REASON THE PAGE CAN SHOW YOU
        ==================================================================
        It first shipped in the `AuthorityBand` slot below the FAQ,
        where its job was to keep the FAQ and a `muted` closing CTA off
        the same surface. The owner then supplied a CTA background
        (2026-09-07), which makes that CTA image-backed - and an
        image-backed band directly above an image-backed CTA is two
        full-bleed photographs stacked, which reads as one long dark
        region. 18 §11 names that.

        So it takes the position the home page gives it: directly after
        "What we do", between a `default` band and a `muted` one. The
        FAQ then meets the CTA directly, which is fine because
        `default` against an image is a real surface change.

        ⚠ IT IS STILL `AuthorityBand`, AND IT STILL REPLACES THE PROOF
        BAND rather than joining it - see the gate block above.
      */}
      {showsProcessBand && (
        <AuthorityBand
          variant="process"
          backgroundImage={content.processBackground}
        />
      )}

      {/* After the member list, as on the market hubs. */}
      {showsConfidence && (
        <ConfidenceModule density="standard" surface={confidenceSurface} />
      )}

      {!showsHeroForm && showAuthority && <AuthorityBand title="How we work" />}

      {/*
        Muted, deliberately. A hub runs hero → body → items → faq, and
        every one of those is a `default` surface, so the page reads as
        an unbroken white column until the brand CTA. The FAQ is also
        `width="reading"` while the index above it is full-width: at
        1440px its left edge sits ~300px inside the section above, which
        on a shared background looks like a misalignment rather than a
        narrower measure. One surface change fixes both.

        ⚠ IT FLIPS TO `default` WHEN THE CONFIDENCE MODULE IS ABOVE IT,
        WHICH IS THE SAME RULE REACHING THE OTHER ANSWER. That module
        is muted, so muted here would be the unbroken run this comment
        exists to prevent - just in the other colour. The condition is
        the module, not the flag, because the module is the neighbour.
      */}
      {content.faq !== undefined && (
        <FaqSection entries={content.faq} surface={faqSurface} />
      )}

      {/*
        ⚠ BELOW THE FAQ, NOT ABOVE IT, AND ONLY ON THIS BRANCH. The
        closing CTA is `split` here, which `CtaSection` renders on
        `muted` — the same surface the FAQ would be on. The band is the
        buffer, exactly as it buffers the brand panel from a brand band
        on the other branch.
      */}
      {showsHeroForm && showAuthority && <AuthorityBand title="How we work" />}

      <CtaSection
        /*
          ⚠ `split` WITHOUT A BACKGROUND IMAGE, WHICH THE MARKET HUBS
          NEVER DO. There the two travel together because `ctaBackground`
          is what keys the variant. `CtaSection` actually gates its
          two-column layout on `proof !== undefined`, so the image is
          separable — and it has to be here, because no CTA asset exists
          for this hub and inventing a scene for a page about three
          markets would be a fabricated image, not a design choice.

          With no image, `onDark` is false and the section keeps its
          `muted` fallback surface and dark copy. That is the intended
          appearance, not a degraded one.
        */
        variant={showsHeroForm ? 'split' : 'panel'}
        /*
          ⚠ ADDED 2026-09-08, AND IT WAS A SILENT DROP UNTIL NOW.
          `CtaContent.eyebrow` has been on the type since it was added
          and `MarketPageTemplate` already wires it; this call never
          read it, so a hub setting `cta.eyebrow` got no eyebrow and no
          error. `/locations/` is the first hub to set one, which is
          the only reason the gap surfaced.
        */
        eyebrow={content.cta?.eyebrow}
        title={content.cta?.title ?? 'Schedule an inspection'}
        body={content.cta?.body}
        /*
          ⚠ `null` DROPS THE BUTTON; `undefined` FALLS BACK TO THE
          GLOBAL `PRIMARY_CTA`. The two are not interchangeable, which
          is why `hideAction` is checked rather than an empty label.
          Same handling as `MarketPageTemplate`.
        */
        action={content.cta?.hideAction === true ? null : undefined}
        /*
          ⚠ THE SPLIT VARIANT NO LONGER IMPLIES "NO IMAGE". It is still
          keyed off `showHeroForm` rather than off this field, because
          the form and the split layout are the one feature; the image
          is an independent dressing that `CtaSection` applies over the
          `muted` fallback. A hub can set either without the other.
        */
        backgroundImage={content.ctaBackground}
        /*
          ⚠ NO `phone`. `MarketPageTemplate` is the only template that
          passes one, because a phone number is market-scoped and this
          page is not. The footer carries all three sitewide.
        */
        proof={
          showsHeroForm ? (
            <div className="rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
              {/* No `defaultMarketId`, for the reason the hero form gives. */}
              <LeadFormSection bare density="standard" idPrefix="cta-lead" />
            </div>
          ) : undefined
        }
      />
    </PageShell>
  )
}
