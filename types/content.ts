/**
 * Page content shapes.
 *
 * Authority: docs/14-content-specification.md
 *            docs/18-design-system.md §109-115
 *            docs/02-nextjs-technical-architecture.md §27, §43
 *
 * ===========================================================================
 * STRUCTURE HERE, PROSE IN `content/`
 * ===========================================================================
 * These types describe what a page family is MADE OF. They deliberately
 * do not model sentences.
 *
 * The systematic parts — hero, process steps, FAQ entries, related page
 * ids — are typed, because they are rendered identically everywhere and
 * because related links must be page ids rather than hrefs (16 §25).
 *
 * The explanatory parts are a `ReactNode` slot. 14 requires genuinely
 * differentiated writing per page (§21's substitution tests), and
 * 18 §132 warns that design "must not force content into artificially
 * short sections". A field-per-paragraph schema would do exactly that,
 * and would quietly encourage the token-substitution pattern CLAUDE.md
 * §20-21 forbids.
 *
 * ⚠ No content is authored in this file. Page content is step 20.
 */

import type { ReactNode } from 'react'
import type { MarketId, PageId } from './common'
import type { BackgroundVideo, CardImage } from './media'

/* ==========================================================================
   Shared pieces
   ========================================================================== */

/** Hero copy. 18 §37: a hero must explain the page without an image. */
export interface HeroContent {
  eyebrow?: string
  /**
   * The page H1.
   *
   * Should match the page's intent and be unique across the site
   * (14, 02 §36). Not automatically the registry's page name — that
   * name is an inventory label and may be longer or more systematic
   * than good on-page copy.
   */
  title: string
  intro?: ReactNode
}

/** One question and its answer (14 §35, 12 answer-first). */
export interface FaqContent {
  question: string
  answer: ReactNode
}

/** A step in a documented process (18 §65). */
export interface ProcessContent {
  title: string
  description?: string
  /**
   * Optional approved artwork. `ProcessSteps` `cards` variant only.
   *
   * Unset on every step today. Present here as well as on the
   * component's own `ProcessStep` because this is the type a page's
   * authored content is checked against: without it the field exists
   * on the component but cannot be set from `homeContent`, which is
   * a slot that only looks open.
   */
  image?: CardImage
}

/**
 * A symptom, scenario, or goal that brings someone to this service.
 *
 * ⚠ 18 §70 and CLAUDE.md §70 forbid alarm copy. Describe a condition
 * worth investigating, not a catastrophe. See `ProblemGrid`.
 */
export interface ProblemContent {
  title: string
  description: string
}

/**
 * A practical deliverable of a service.
 *
 * ⚠ Must correspond to something The Sewer Pros actually performs
 * (06). CLAUDE.md §4: no repair, replacement, lining, CIPP, or
 * excavation deliverables unless formally added to the registry.
 */
export interface InclusionContent {
  title: string
  description: string
}

/** One named destination inside a routing card's link list. */
export interface RoutingLink {
  pageId: PageId
  label: string
}

/**
 * An intent-routing destination on the home page.
 *
 * Approved page ids only, resolved through the approved-link layer —
 * never an href (CLAUDE.md §37, 16 §25).
 */
export interface RoutingContent {
  pageId: PageId
  /**
   * ⚠ PLAIN TEXT AGAIN, NOT `ReactNode` (owner, 2026-09-04).
   *
   * It carried inline `ApprovedInlineLink`s for one day. The owner
   * asked for the named destinations to come OUT of the paragraph and
   * into `links` below, where they are scannable and the card's
   * outbound routes are legible at a glance instead of buried mid
   * sentence. Do not put links back in here: a link in both places
   * would give the same destination two competing affordances in one
   * card.
   */
  description: string
  /** Small label above the title, e.g. "Explore services". */
  category: string
  /** Which mark the card wears — mapped to a component, not a raw name. */
  icon: 'search-check' | 'map-pinned' | 'building-2' | 'message-square-text'
  /**
   * Which accent the card wears.
   *
   * `blue` is `--accent-secondary`, `green` is `--accent`, `navy` is
   * `--brand`. All three are existing palette tokens; no fourth colour
   * was introduced for this.
   */
  accent: 'blue' | 'green' | 'navy'
  /** Label above the link list. Ignored when `links` is empty. */
  linksHeading?: string
  /**
   * Named destinations, rendered as a scannable list.
   *
   * Empty is a real state, not an oversight: the contact card has
   * nothing to enumerate, and the block is skipped entirely rather
   * than rendering a heading over nothing (18 §120).
   */
  links?: readonly RoutingLink[]
  /**
   * Renders the per-market phone and email block in this card.
   *
   * ⚠ IT CARRIES NO CONTACT DETAIL ITSELF, AND MUST NOT. The numbers
   * and addresses come from `marketOperatingDetail` in
   * `data/markets/markets.ts`, where each is owner-confirmed and cited
   * (DEC-070, DEC-073, DEC-083, DEC-097). This flag only says WHICH
   * card shows them. A copy of a phone number in content would be a
   * second source of truth, and 01 §20 is specifically about contact
   * facts drifting between markets.
   */
  showMarketContacts?: boolean
  /**
   * Bottom-aligned closing link.
   *
   * Approved page id only, resolved through the approved-link layer at
   * render — never an href (CLAUDE.md §37, 16 §25).
   *
   * Optional: a caller without one renders a card with no closing
   * link, which is what every non-homepage caller does today.
   */
  secondaryLink?: { pageId: PageId; label: string }
  /**
   * Optional approved artwork.
   *
   * Unset on every entry today. `RoutingCards` grows a card to hold a
   * 7:4 crop only when one is present, and renders no image area at
   * all when it is not (18 §40-42).
   */
  image?: CardImage
}

/**
 * Service-area coverage for a market or location page.
 *
 * ⚠ No address, map, or directions field by design. PENDING-002
 * resolved the business model as service-area with no address, and
 * CLAUDE.md §29-30 forbid implying an office in San Diego or Las
 * Vegas. See `CoverageSection`.
 */
export interface CoverageContent {
  title: string
  intro?: string
  /** Approved location pages, rendered as links. */
  pageIds?: readonly PageId[]
  /** Registry names with no approved page, rendered as plain text. */
  names?: readonly string[]
  availabilityStatement: string
}

/* ==========================================================================
   Service area — the image-led alternative to `CoverageContent`
   ========================================================================== */

/**
 * A regional coverage card. NOT A PLACE THE BUSINESS OCCUPIES.
 *
 * ⚠ THERE IS DELIBERATELY NO `pageId`, NO `href`, AND NO CTA FIELD.
 * No county landing page exists in the approved registry, and 05 §51
 * forbids linking through an invented route. A card that carried an
 * arrow or a "view county" label would promise a destination that is
 * not there, so this shape cannot express one.
 *
 * ⚠ IT IS ALSO NOT A LOCAL ENTITY. `CoverageSection`'s whole premise
 * applies here unchanged: no address, no pin, no hours (CLAUDE.md §11,
 * 18 §86-87). `name` states where service reaches, and `description`
 * says what service means there.
 */
export interface ServiceAreaCountyCard {
  /** e.g. "St. Louis County, Missouri". Use the word "County". */
  name: string
  description: string
  /** Card artwork. A card without one renders as a plain light card. */
  image?: CardImage
}

/**
 * A featured community with its own approved location page.
 *
 * The destination comes from `pageId` through the approved-link layer,
 * so a gated or unwritten location drops out of the mosaic on its own
 * rather than shipping a dead card (04 §4, 16 §25).
 */
export interface ServiceAreaCityCard {
  pageId: PageId
  /** Card title. Defaults to the registry page name. */
  title?: string
  description: string
  /**
   * The card's accessible name and its visible action label.
   *
   * 18 §47: descriptive, and naming the place — "Explore Ballwin", not
   * "Learn more" repeated five times. It must keep the geographic
   * context, because it is the whole accessible name of the link.
   */
  ctaLabel: string
  /** Card artwork. A card without one renders as a plain light card. */
  image?: CardImage
}

/**
 * An image-led service area, replacing `coverage` where a market has
 * the artwork and the local detail to carry it.
 *
 * ⚠ THIS IS PRESENTATION PLUS SHORT DISPLAY COPY, NOT A SECOND
 * GEOGRAPHIC REGISTRY. Destinations and link labels still resolve from
 * the approved page registry through `pageId`; the 579-record location
 * registry is untouched. What lives here is the card art, the grid
 * emphasis, and the sentence each card shows — none of which the
 * registry holds or should.
 *
 * A market sets EITHER this or `coverage`. See `MarketPageTemplate`.
 */
export interface ServiceAreaContent {
  title: string
  intro: string
  /** Regional coverage. Informational cards, never links. */
  counties: {
    title: string
    intro?: string
    items: readonly ServiceAreaCountyCard[]
  }
  /** Communities with dedicated pages, as a mosaic of linked cards. */
  cities: {
    title: string
    intro?: string
    items: readonly ServiceAreaCityCard[]
    /**
     * The card given the large mosaic tile. Defaults to the first.
     *
     * Pass explicitly rather than relying on ordering when the
     * flagship is not first in the content file.
     */
    flagshipPageId?: PageId
  }
  /**
   * The closing coverage clarification.
   *
   * ⚠ IT IS WHAT KEEPS A PARTIAL LIST HONEST, the same job
   * `CoverageContent.availabilityStatement` does. The cards above name
   * eight places; the metro has hundreds. This says so, and asks the
   * visitor to confirm rather than asserting coverage on their behalf.
   *
   * The phone action is NOT here: the template already holds the
   * market's published number in `marketOperatingDetail`, and 01 §20
   * forbids a second copy of a business fact that could drift from it.
   */
  closing: {
    title: string
    body: string
    action: { label: string; pageId: PageId }
  }
}

/* ==========================================================================
   Company experience — the proof section on a market hub
   ========================================================================== */

/** Line icons available to a proof card. */
export type ExperienceProofIcon =
  | 'experience'
  | 'camera'
  | 'document'
  | 'independence'

/**
 * One proof card.
 *
 * ⚠⚠ A QUANTIFIED CLAIM HERE IS A BUSINESS FACT AND IS MARKET-SCOPED.
 * DEC-072 approved "over 100,000 camera inspections" for `/st-louis-mo/`
 * ONLY, and 01 §20 forbids carrying it onto a San Diego or Las Vegas
 * page. Founding years are scoped the same way: St. Louis 2011,
 * San Diego 2015, Las Vegas NONE. Read `MARKET_SCOPED_CLAIMS` in
 * `data/business/organization.ts` before writing a figure into one of
 * these.
 *
 * ⚠ `accent: 'green'` IS FOR THE INDEPENDENCE CARD AND NOTHING ELSE.
 * DEC-096 reserves green for conversion; the owner approved one green
 * card to mark the differentiator (2026-09-07). See `ExperienceSection`.
 */
export interface ExperienceProofCard {
  title: string
  body: string
  icon: ExperienceProofIcon
  accent: 'blue' | 'green'
}

/** A heading with paragraphs and an optional list. */
export interface ExperienceBlock {
  title: string
  /** Paragraphs before the list. */
  body?: readonly string[]
  /** Lead-in sentence for the list. */
  listIntro?: string
  items?: readonly string[]
  /** Paragraphs after the list. */
  after?: readonly string[]
  /**
   * Takes one column of the two-column body.
   *
   * `strip` variant only — the `aside` variant's content column is
   * already narrow and runs everything full width.
   */
  half?: boolean
}

/**
 * The market's credibility section.
 *
 * ⚠ EVERY CLAIM IN HERE IS PER-MARKET CONTENT AND IS NOT REUSABLE
 * BETWEEN MARKETS. That is the whole reason it lives in the content
 * files rather than in a shared data module: 01 §20, and 14 §79's
 * substitution test, which a section of company history would fail
 * loudest.
 *
 * ⚠ `coverage` IS REQUIRED, AND IT IS WHAT KEEPS THE REST HONEST. A
 * section of capability copy with no availability caveat reads as a
 * promise of blanket coverage. Every market's version ends by asking
 * the visitor to confirm before scheduling (CLAUDE.md §24).
 */
export interface ExperienceContent {
  eyebrow: string
  title: string
  intro: readonly string[]
  blocks: readonly ExperienceBlock[]
  proof: readonly ExperienceProofCard[]
  coverage: ExperienceBlock
  /**
   * One primary action and one secondary (18 §106).
   *
   * The phone is NOT here: the template reads it from
   * `marketOperatingDetail` so a page cannot publish two numbers.
   */
  actions: {
    primary: { label: string; pageId: PageId }
    secondary: { label: string; pageId: PageId }
  }
}

/**
 * A closing conversion block.
 *
 * The CTA label itself is NOT here — it comes from the single global
 * constant so wording stays consistent (18 §155, PENDING-007).
 */
export interface CtaContent {
  /** Short line above the title. Optional; unset on every page but home. */
  eyebrow?: string
  title: string
  /**
   * ⚠ `ReactNode`, NOT `string`, SINCE 2026-09-04. The home page's
   * closing copy runs to two paragraphs, five inline links and a short
   * benefit list; a string could carry none of it.
   *
   * Widening only - every existing caller passes a plain string and
   * still type-checks. A page that wants one sentence should keep
   * passing one sentence.
   */
  body?: ReactNode
}

/* ==========================================================================
   Base
   ========================================================================== */

/**
 * Per-related-page category label, mark and accent.
 *
 * Only read by `RelatedLinks`' `featured` variant. The `horizontal` and
 * `image` variants render title plus description exactly as they do
 * today and ignore this entirely.
 */
export type RelatedMeta = Readonly<
  Partial<
    Record<
      PageId,
      {
        category: string
        icon: 'clipboard-list' | 'file-video' | 'scale'
        accent: 'blue' | 'green' | 'navy'
      }
    >
  >
>

export interface BasePageContent {
  hero: HeroContent
  /**
   * Meta title, where it should differ from the H1.
   *
   * 02 §36 wants a unique title per page. `hero.title` is already
   * authored per page and reflects intent, so it is the default; set
   * this only where the search-result title should read differently.
   */
  seoTitle?: string
  /**
   * Meta description. Authored per page (CLAUDE.md §36).
   *
   * ⚠ Omitted rather than generated when absent. A templated
   * description assembled from tokens is worse than none — search
   * engines write a better one from page content, and 15 §102-103's
   * preference for omission over placeholder applies here too.
   */
  metaDescription?: string
  /** Explanatory sections. Rendered inside a reading-width container. */
  body?: ReactNode
  faq?: readonly FaqContent[]
  /**
   * Explicit related pages (CLAUDE.md §37).
   *
   * Approved ids only. Never a derived list from the service registry,
   * the location registry, or the matrix.
   */
  relatedPageIds?: readonly PageId[]
  relatedTitle?: string
  /**
   * Optional one-line summary per related page, keyed by page id.
   *
   * Passed straight through to `RelatedLinks`' own `descriptions`
   * prop. Absent entries render title-only, which is what
   * `RelatedLinks` already does unprompted (18 §51 - the page name is
   * the dominant element by default).
   *
   * ⚠ It describes whichever page list the template hands to
   * `RelatedLinks`, not only `relatedPageIds`. Location pages render
   * `servicePageIds` there and market pages render `locationPageIds`;
   * both look up by page id, so one map serves all three.
   *
   * Keys that are not in the page's `relatedPageIds` are simply never
   * read: `RelatedLinks` looks up by the ids it is rendering, so a
   * stale or mistargeted key renders nothing rather than erroring.
   */
  relatedDescriptions?: Readonly<Partial<Record<PageId, string>>>
  /**
   * Opts this page's `RelatedLinks` into the asymmetric featured
   * layout instead of the default row list.
   *
   * ⚠ IT MUST NAME AN ID ALREADY IN `relatedPageIds`. The component
   * checks, and falls back to its default treatment when the two
   * disagree or when fewer than three relations survive gating — see
   * the render. Setting this alone changes nothing.
   */
  relatedFeaturedPageId?: PageId
  /** Small line above the related heading. `featured` only. */
  relatedEyebrow?: string
  /** Intro paragraph under the related heading. `featured` only. */
  relatedIntro?: string
  /** Category, mark and accent per related page. `featured` only. */
  relatedMeta?: RelatedMeta
  /**
   * Destination for the featured heading row's closing link.
   *
   * An approved page id like every other link on the site, kept in
   * content rather than cast in a template so `id()` and the
   * registry stay the only route to a page reference.
   */
  relatedViewAllPageId?: PageId
  /**
   * Two or three short lines inside the featured card.
   *
   * ⚠ NOT A SUMMARY OF THE LINKED PAGE, and never a reading time or
   * any other computed-looking figure. These are navigational labels
   * for what the guide covers.
   */
  relatedFeaturedPoints?: readonly string[]
  /**
   * Small line above the FAQ heading.
   *
   * Per page rather than global: `FaqSection` renders on ten
   * templates, and an eyebrow on all of them was not what was asked
   * for.
   */
  faqEyebrow?: string
  cta?: CtaContent
}

/* ==========================================================================
   Per-family content — 18 §110-115
   ========================================================================== */

/** Home — 18 §110. */
export interface HomePageContent extends BasePageContent {
  /**
   * Service cards for the mosaic.
   *
   * `image` is the card's BACKGROUND, not a crop above the text
   * (owner, 2026-09-04). Homepage only: `MarketPageContent` and
   * `AudiencePageContent` render `ServiceIndex`'s `index` variant,
   * which is a row list with no card to put a background on, so their
   * `services` deliberately keeps the narrower shape below.
   */
  services: readonly {
    pageId: PageId
    description?: string
    image?: CardImage
  }[]
  /** Intent-routing cards, rendered between hero and services. */
  routing?: readonly RoutingContent[]
  /**
   * Full-bleed artwork behind the routing band (owner, 2026-09-04).
   *
   * SECTION-level, like `processBackground` below and unlike
   * `services[].image` above, which is per card. The routing cards keep
   * their own opaque surface and sit on top of it.
   */
  routingBackground?: CardImage
  /**
   * Full-bleed artwork behind the final CTA (owner, 2026-09-04).
   *
   * SECTION-level, like `routingBackground` above and
   * `processBackground` below. The lead form in the CTA's proof slot
   * keeps its own opaque card and sits on top of it.
   */
  ctaBackground?: CardImage
  process?: readonly ProcessContent[]
  /**
   * Full-bleed artwork behind the process band (owner, 2026-09-04).
   *
   * SECTION-level, unlike `services[].image` above, which is per card.
   * The step cards keep their own opaque surface and sit on top of it.
   *
   * ⚠ Setting this overrides the band's `surface` — the image becomes
   * the surface — and turns the section heading white over a scrim.
   * See `ProcessSteps` for the measurement that fixes the scrim.
   */
  processBackground?: CardImage
  /*
   * ⚠ NO `differentiator` FIELD, DELIBERATELY. The homepage renders
   * `Differentiator`'s `comparison-table` variant, which owns its own
   * heading and intro in `differentiatorComparison`. A per-page
   * override here would be a second source for the same two strings
   * and would let the page state the differentiator differently from
   * the table under it (owner, 2026-09-04).
   */
}

/** Canonical service page — 18 §111. */
export interface ServicePageContent extends BasePageContent {
  process?: readonly ProcessContent[]
  /** "When you may need this" — see `ProblemContent`. */
  problems?: readonly ProblemContent[]
  /** "What's included" — see `InclusionContent`. */
  inclusions?: readonly InclusionContent[]
  /** Shows the independent-model contrast. Off by default. */
  showDifferentiator?: boolean
  /** Shows market coverage beneath the service explanation. */
  showMarkets?: boolean
}

/** Market hub — 18 §112. */
/**
 * Market hub content.
 *
 * ⚠ EVERY FIELD BELOW IS OPTIONAL, AND THAT IS STRUCTURAL RATHER THAN
 * TIDY. `MarketPageTemplate` is shared by all three markets. San Diego
 * and Las Vegas populate only `hero`, `body`, `services`,
 * `locationPageIds`, `faq` and `cta` today, so a required field would
 * blank their pages the moment it shipped. Each new section below
 * simply does not render for a market that has not written it - the
 * same behaviour `coverage` has always had.
 */
export interface MarketPageContent extends BasePageContent {
  /** Approved location pages within this market. */
  locationPageIds?: readonly PageId[]
  /** Served communities plus an availability statement. No map. */
  coverage?: CoverageContent
  /**
   * Company experience and proof, above the reviews.
   *
   * ⚠ ITS COMPOSITION DIFFERS PER MARKET ON PURPOSE. Three hubs
   * running one arrangement is the templated look 18 §155 names, so
   * San Diego takes the `strip` variant where St. Louis and Las Vegas
   * take `aside`. Same typography, cards, colour and spacing.
   */
  experience?: ExperienceContent
  /** Layout for `experience`. Defaults to `aside`. */
  experienceVariant?: 'aside' | 'strip'
  /**
   * Image-led service area, rendered INSTEAD OF `coverage`.
   *
   * ⚠ SET ONE OR THE OTHER, NOT BOTH. Both describe the same band of
   * the page and `MarketPageTemplate` prefers this one, so a market
   * that set both would silently ship the plain list nowhere.
   */
  serviceArea?: ServiceAreaContent
  /**
   * Services to feature for this market.
   *
   * `image` turns the band into the home page's mosaic of image cards.
   * Without one a market renders the plain row list it renders today.
   */
  services?: readonly {
    pageId: PageId
    description?: string
    image?: CardImage
  }[]
  /** Full-bleed frame behind the hero. Unset renders the editorial hero. */
  heroBackground?: CardImage
  /**
   * Looping clip layered over `heroBackground`.
   *
   * ⚠ IT DOES NOT REPLACE `heroBackground`, IT SITS ON TOP OF IT. The
   * still is the poster and the fallback, and it is the only thing
   * reduced-motion, data-saver, and pre-hydration visitors ever see -
   * so this field does nothing at all without one. See
   * `components/sections/HeroVideoBackdrop.tsx`.
   */
  heroVideo?: BackgroundVideo
  /**
   * Puts the lead form beside the hero copy.
   *
   * ⚠ THE PAGE'S ONLY MID-PAGE FORM WAS REMOVED WHEN THIS ARRIVED
   * (owner, 2026-09-04). A market that sets neither this nor a form
   * elsewhere converts through the closing CTA alone, which is the
   * accepted state for San Diego and Las Vegas until their hero
   * content is written.
   */
  showHeroForm?: boolean
  /** Which market the hero form preselects. */
  heroFormMarketId?: MarketId
  /** Intent-routing cards for this market. */
  routing?: readonly RoutingContent[]
  routingBackground?: CardImage
  /** Three-card explainer, e.g. lateral responsibility. */
  lateralCards?: { title: string; intro?: string; items: readonly ProblemContent[] }
  /** Three-card explainer, e.g. pipe materials by era. */
  materialCards?: { title: string; intro?: string; items: readonly ProblemContent[] }
  /** Editorial block, e.g. buying or selling a home in this market. */
  localFeature?: { title: string; body: ReactNode }
  processBackground?: CardImage
  ctaBackground?: CardImage
}

/** Location page — 18 §79, §112. */
export interface LocationPageContent extends BasePageContent {
  /** Approved service + location pages for this location. */
  servicePageIds?: readonly PageId[]
  /** Served communities plus an availability statement. No map. */
  coverage?: CoverageContent
}

/** Service + location page — 05 §119, 14 §21. */
export interface ServiceLocationPageContent extends BasePageContent {
  process?: readonly ProcessContent[]
  problems?: readonly ProblemContent[]
  inclusions?: readonly InclusionContent[]
  coverage?: CoverageContent
}

/** Audience page — 18 §113. */
export interface AudiencePageContent extends BasePageContent {
  process?: readonly ProcessContent[]
  problems?: readonly ProblemContent[]
  inclusions?: readonly InclusionContent[]
  services?: readonly { pageId: PageId; description?: string }[]
}

/** Commercial service page — 18 §114. */
export interface CommercialPageContent extends BasePageContent {
  process?: readonly ProcessContent[]
  problems?: readonly ProblemContent[]
  inclusions?: readonly InclusionContent[]
}

/** Comparison page — 18 §66, 05 §41. */
export interface ComparisonPageContent extends BasePageContent {
  /**
   * "When each applies" — the neutral framing of the comparison.
   *
   * 18 §66 and CLAUDE.md §65 forbid manipulating visual emphasis so
   * the preferred option always wins, so there is no "recommended"
   * field by design and both options must be described in the same
   * register.
   */
  problems?: readonly ProblemContent[]
}

/** Resource article — 18 §115, 15 §47-50. */
export interface ResourcePageContent extends BasePageContent {
  /**
   * The direct answer, rendered before the detailed sections
   * (14 §35, 12).
   */
  directAnswer?: ReactNode
  /**
   * ISO date. 18 §78 and CLAUDE.md §78: update only when substantive
   * content changes justify it — never to appear fresh.
   */
  dateModified?: string
}

/** Hub page — services, locations, for, commercial, resources. */
export interface HubPageContent extends BasePageContent {
  items?: readonly { pageId: PageId; description?: string }[]
  /**
   * Renders the home page's market cards INSTEAD OF the `items` index.
   *
   * ⚠ ONLY `/locations/` SETS THIS, AND ONLY BECAUSE ITS MEMBERS ARE
   * THE MARKETS. The other four hubs list services, audiences,
   * commercial services and resources, none of which `MarketCoverage`
   * knows how to resolve - it builds its cards from `market` page
   * records, not from `items`.
   *
   * ⚠ SET THIS OR `items`, NOT BOTH. `HubPageTemplate` prefers this
   * one, so a hub that set both would ship the index nowhere.
   *
   * The maps are keyed by MARKET PAGE ID, the way `marketImages` is,
   * because the section resolves its own cards and there is no
   * per-item slot to hang copy on.
   */
  marketCards?: {
    eyebrow?: string
    /** Defaults to the section's own "Where we work". */
    title?: string
    intro?: string
    /** One line per card on what service means in that market. */
    descriptions?: Partial<Record<PageId, string>>
    /** Per-card closing link label. Defaults to the home page wording. */
    actionLabels?: Partial<Record<PageId, string>>
  }
}

/** Core page — about, contact, faq. */
export interface CorePageContent extends BasePageContent {
  placeholder?: never
}
