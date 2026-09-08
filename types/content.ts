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
/**
 * One explainer card in `MarketGuidanceContent`.
 *
 * ⚠ THE ACCENT IS A ROLE, NOT A COLOUR VALUE. `MarketGuidance` maps it
 * to `--accent` and `--accent-secondary`, so DEC-096's palette stays
 * the single source. A card must not carry a hex.
 */
export interface MarketGuidanceCard {
  /** Decorative mark beside the heading. Rendered `aria-hidden`. */
  icon: 'map-pin' | 'camera'
  accent: 'green' | 'blue'
  title: string
  body: string
  /** Label above the reader-facing takeaway, e.g. "What this means for you". */
  benefitLabel: string
  benefit: string
}

/**
 * The service-area explainer on a hub that routes to markets.
 *
 * ⚠ THIS REPLACES `body` RATHER THAN JOINING IT. `HubPageTemplate`
 * renders one or the other, because both are the page's first content
 * band and two of them would be the same explanation twice. The prose
 * version is still what the other four hubs use.
 *
 * ⚠ PLAIN STRINGS, NOT `ReactNode`. Everything here is short enough to
 * carry no markup, and keeping it flat means the copy can be read and
 * checked without following JSX. The em-dash ban applies to every
 * field (owner rule, standing).
 *
 * ⚠ EXACTLY TWO CARDS, ENFORCED BY THE TUPLE. The section is a
 * two-column grid at desktop; a third card would leave an orphaned
 * row, which 18 §5.6 prohibits by name.
 */
export interface MarketGuidanceContent {
  eyebrow: string
  title: string
  intro: string
  cards: readonly [MarketGuidanceCard, MarketGuidanceCard]
  /**
   * The full-width routing panel under the cards.
   *
   * ⚠ THE LINKS ARE PAGE IDS, NOT HREFS. They resolve through the
   * approved-link layer, so a market that is ever gated drops out of
   * the panel instead of shipping a dead button (16 §25).
   */
  panel: {
    title: string
    body: string
    /**
     * ⚠ `accent` IS A ROLE HERE TOO, matching `MarketGuidanceCard`.
     * `MarketGuidance` maps green to the `primary` button and blue to
     * the `accent` one, so DEC-096's palette stays the single source
     * and no hex reaches a content file.
     */
    links: readonly {
      pageId: PageId
      label: string
      accent: 'green' | 'blue'
    }[]
  }
}

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
/* ==========================================================================
   San Diego authority stack (2026-09-08)
   ==========================================================================
   Six sections that replace one long `ExperienceSection`. The block had
   grown to intro + four sub-blocks + three proof cards + a coverage
   panel + two actions inside a single container, which is a page's
   worth of argument rendered as one uniform band.

   ⚠ EVERY FIELD IS OPTIONAL AND ONLY SAN DIEGO SETS THEM TODAY. The
   shapes are market-agnostic on purpose - nothing here names a city, a
   municipality, or a lateral programme - so St. Louis or Las Vegas can
   adopt any one of them without inheriting the others.

   ⚠ THESE ARE NOT THE ST. LOUIS LATERAL SLOTS. `lateralCards` and
   `materialCards` already drive `ProblemGrid` and `InclusionsGrid` on
   that market, but they carry `id="lateral-responsibility"` and
   `id="line-materials"` and mean municipal lateral education. Reusing
   them here would put a St. Louis anchor on a San Diego conditions
   grid. Separate slots, same components.
   ========================================================================== */

/**
 * The three reorderable sections of the authority stack.
 *
 * ⚠ `independence` AND `regionalCoverage` ARE NOT HERE, deliberately.
 * They close the stack in a fixed order: the independence band is the
 * argument's conclusion and the coverage panel is the conversion after
 * it. Only the three explanatory sections between the experience band
 * and that conclusion are worth reordering per market.
 */
export type AuthoritySectionId = 'conditions' | 'scenarios' | 'deliverables'

/** One card in the conditions grid. */
export interface ConditionCard {
  title: string
  description: string
  /**
   * Decorative. Falls back to a check when unset.
   *
   * ⚠ STILL USED WHEN `image` IS ABSENT, and that is the point: a card
   * with no photograph shows its mark inside the same 4:3 frame the
   * others use, so the grid keeps one geometry instead of one card
   * being visibly shorter than its neighbours.
   */
  icon?: ExperienceIconName
  accent?: 'blue' | 'green'
  /**
   * A 4:3 frame at the head of the card.
   *
   * ⚠ SUPPLY IT FOR EVERY CARD OR EXPECT THE ICON FALLBACK. Mixing
   * photographs and bare icon plates in one row reads as a rendering
   * fault; the framed fallback above is what keeps a partial set
   * looking deliberate rather than broken.
   */
  image?: CardImage
  /**
   * The official page a claim on this card came from.
   *
   * ⚠ FOR CLAIMS ABOUT SOMEONE ELSE'S PROGRAMME. A grant amount, an
   * eligibility rule or a service boundary must be checkable at its
   * source, because those change and this site cannot promise they
   * have not. It renders as an external link with a descriptive name,
   * never a bare URL.
   */
  source?: { label: string; href: string }
}

/** Conditions a camera inspection may reveal. */
export interface ConditionsContent {
  eyebrow?: string
  title: string
  intro?: readonly string[]
  items: readonly ConditionCard[]
}

/** One situation card in the scenarios grid. */
export interface ScenarioCard {
  title: string
  description: string
  icon?: ExperienceIconName
  /**
   * Takes the large tile.
   *
   * ⚠ EXACTLY ONE ITEM MAY SET THIS. `ScenarioGrid` gives the featured
   * card two columns and two rows; a second would break the grid into
   * an orphaned row, which 18 §5.6 prohibits by name.
   */
  featured?: boolean
  /**
   * A frame at the head of the card.
   *
   * ⚠ EVERY CARD NOW, WHERE IT WAS THE FEATURED TILE ALONE (owner,
   * 2026-09-08). The earlier restriction reasoned that photographs on
   * all six would turn the section into a gallery and stop the
   * featured tile reading as featured. The owner supplied one frame
   * per situation, and the hierarchy is carried instead by SIZE: the
   * featured tile spans two columns and two rows and takes a 16:9
   * crop, the compact cards take 4:3 at a third of the width.
   *
   * ⚠ A CARD WITHOUT ONE FALLS BACK TO ITS ICON IN THE SAME FRAME, so
   * a partial set stays a regular grid rather than looking like a
   * failed load.
   */
  image?: CardImage
}

/** When an inspection helps - customer situations, not symptoms. */
export interface ScenariosContent {
  eyebrow?: string
  title: string
  intro?: string
  items: readonly ScenarioCard[]
  /** One contextual action. Must be an already-approved destination. */
  action?: { label: string; pageId: PageId }
}

/**
 * One thing the customer walks away with.
 *
 * ⚠ `InclusionContent` PLUS AN ICON, DECLARED SEPARATELY RATHER THAN
 * WIDENING THAT TYPE. `InclusionContent` is shared by the service,
 * audience, commercial and comparison templates, all of which render
 * it in an even card grid with no icon slot. Adding a field there
 * would put an option on four templates that cannot honour it.
 */
export interface DeliverableItem extends InclusionContent {
  /**
   * ⚠ THE MARK SHOULD CARRY A LITTLE OF THE ITEM'S MEANING, which is
   * the whole reason these replaced a row of identical checkmarks
   * (owner, 2026-09-08). Five ticks told the reader only that there
   * were five of something.
   *
   * Falls back to a check when unset, so a list that names no icons
   * still renders rather than showing nothing.
   */
  icon?: ExperienceIconName
}

/** What the customer receives, as an editorial split. */
export interface DeliverablesContent {
  eyebrow?: string
  title: string
  intro?: readonly string[]
  items: readonly DeliverableItem[]
  /**
   * Optional artwork for the split.
   *
   * ⚠ OMIT IT RATHER THAN POINT AT AN ASSET THAT DOES NOT EXIST. The
   * section falls back to a single readable column, which is a
   * complete layout rather than a gap where a picture should be.
   */
  image?: CardImage
  /** Lightly tinted closing panel. */
  panel?: { title: string; body: string }
}

/** The independence position, stated as a three-step sequence. */
export interface IndependenceContent {
  eyebrow?: string
  title: string
  body: readonly string[]
  /**
   * A frame beside the heading.
   *
   * ⚠ A DEDICATED FRAME, NOT A BACKGROUND. `ProcessSteps` also takes a
   * `backgroundImage`, which replaces the surface and puts text on the
   * photograph. This one sits in its own box beside the copy, which is
   * what a band on `brand` needs: an overlay on top of navy would be
   * two dark layers and the steps would lose their contrast.
   */
  image?: CardImage
  steps: readonly {
    title: string
    description: string
    icon?: ExperienceIconName
  }[]
}

/**
 * Repair coverage and financial assistance, as a comparison.
 *
 * ⚠ ICON-LED AND DELIBERATELY PHOTOGRAPH-FREE. The sections either
 * side of it carry 4:3 frames; a third in the middle would make the
 * run read as a gallery, and there is nothing here a photograph could
 * show that the text does not say better.
 *
 * ⚠ THE NOTE IS NOT DECORATION. Everything in this section is a
 * statement about someone else's programme or policy, and those change.
 * The note is where the reader is told to verify before relying on it.
 */
export interface RepairCoverageContent {
  eyebrow?: string
  title: string
  intro?: readonly string[]
  items: readonly ConditionCard[]
  /**
   * A highlighted note under the cards.
   *
   * ⚠ OPTIONAL SINCE THE `authorities` SLOT REUSED THIS SHAPE. A
   * section describing someone else's programme needs the
   * verify-before-relying warning; a section of plain guidance cards
   * does not, and an empty panel would be worse than none.
   */
  note?: { title?: string; body: string }
  /**
   * A graphic beside the introduction.
   *
   * ⚠ ILLUSTRATIVE, NEVER AUTHORITATIVE. These sections describe which
   * public agency serves which property and which programmes exist. A
   * graphic here must not draw a service boundary or imply one: the
   * whole point of the copy is that the boundary is a question of
   * address, and a map would contradict the sentence it sits beside.
   */
  image?: CardImage
}

/** Closing regional conversion panel. */
export interface RegionalCoverageContent {
  eyebrow?: string
  title: string
  body: readonly string[]
  primary: { label: string; pageId: PageId }
  secondary?: { label: string; pageId: PageId }
  /**
   * ⚠ MARKET-SCOPED, AND THE TEMPLATE DOES NOT SUPPLY IT. A phone
   * number belongs to one market; it is authored here so a page cannot
   * inherit another market's line by accident (01 §20).
   *
   * ⚠ `phoneE164`, NOT A RAW `href`. It renders through
   * `TrackedPhoneLink`, which builds the `tel:` itself and fires the
   * call event. This field shipped as `{ label, href }` for one day
   * and rendered a plain anchor, so every call from this panel went
   * unmeasured while the header, footer and every other section
   * counted theirs.
   */
  phone?: { label: string; phoneE164: string }
  /**
   * Featured community pages, as compact inline links.
   *
   * ⚠ FEATURED, NOT A BOUNDARY. The copy above them must say these do
   * not define the limit of the service area, because for both San
   * Diego and Las Vegas `serviceAreaSource` is
   * `derived_from_approved_locations` and there is no published
   * boundary to state (DEC-077).
   *
   * ⚠ THEY RESOLVE THROUGH THE APPROVED-LINK LAYER, so a community
   * whose page is gated drops out rather than shipping a dead link.
   */
  locations?: readonly { pageId: PageId; label: string }[]
  /**
   * ⚠ MARKET-SCOPED, like the phone. San Diego and Las Vegas publish
   * different addresses (DEC-097), so this is authored per market and
   * never supplied by the template.
   */
  email?: { label: string; href: string }
  /**
   * ⚠ STATE THE PUBLISHED HOURS AND NOTHING MORE. All three markets
   * are weekdays 8:00am to 4:00pm, which affirmatively rules out
   * emergency, weekend and 24/7 service (01 §35). Writing them here
   * must never turn into a response-time or same-day promise.
   */
  hours?: string
  /**
   * Availability wording under the contact details.
   *
   * ⚠ IT MUST HEDGE, NOT PROMISE. DEC-088 approved the same-day line
   * only as "sometimes available", scoped to published weekday hours,
   * and 01 §35 rules out emergency, weekend and 24/7 service. This
   * slot exists to say all of that in one place; it must never be
   * edited into an assurance.
   */
  availabilityNote?: string
  /**
   * Full-bleed frame behind the panel.
   *
   * ⚠ SUPPLYING THIS CHANGES THE WHOLE TREATMENT, not just the
   * backdrop. `Section` replaces the surface with the photograph, adds
   * its measured scrim and turns unstyled children white, so the panel
   * drops its white card and sits directly on the image. The two
   * cannot be combined: a white card ON a scrimmed photograph would
   * hide the thing the photograph was added for.
   */
  backgroundImage?: CardImage
}

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
  /**
   * Takes a HALF-WIDTH tile instead of a quarter-width one.
   *
   * ⚠ PRESENTATION, AND IT ONLY MEANS ANYTHING ON THE NON-FLAGSHIP
   * CARDS. The flagship already owns the left half; this lets one of
   * the remaining tiles run the full width of the right half rather
   * than sharing its row. Las Vegas uses it for Henderson, which is
   * what turns four cards into an asymmetric mosaic instead of a
   * flagship plus three orphans.
   */
  wide?: boolean
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
  /**
   * Regional coverage. Informational cards, never links.
   *
   * ⚠ OPTIONAL, AND ITS ABSENCE IS A FACTUAL STATEMENT RATHER THAN AN
   * UNFINISHED SECTION. St. Louis names three counties because its
   * published service area names them (DEC-070). San Diego and Las
   * Vegas publish no service area at all - both are
   * `derived_from_approved_locations` - so a county tier there would
   * be inference presented as coverage, which DEC-077 already
   * corrected once. Those two markets render the community mosaic and
   * nothing above it.
   */
  counties?: {
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
    /**
     * Desktop rows the flagship spans, which sets the whole mosaic's
     * shape.
     *
     * ⚠ IT MUST MATCH THE CARD COUNT OR THE GRID LEAVES A HOLE. The
     * flagship takes the left half; the quarter-width tiles fill the
     * right half two per row, and a `wide` tile fills a row alone:
     *
     *   2 rows, 4 quarter tiles          5 cards   St. Louis
     *   2 rows, 1 wide + 2 quarter       4 cards   Las Vegas
     *   3 rows, 6 quarter tiles          7 cards   San Diego
     *
     * Defaults to 2, which is what St. Louis shipped with.
     */
    rows?: 2 | 3
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
   Sewer-lateral education — St. Louis's two explanatory sections
   ========================================================================== */

/** Line icons available to a responsibility card. */
export type ResponsibilityIcon = 'utility' | 'document' | 'variation'

/**
 * One statement about who is responsible for what.
 *
 * ⚠⚠ THIS IS COPY ABOUT MUNICIPAL RULES AND IT IS THE HIGHEST-RISK
 * TEXT ON THE ST. LOUIS HUB. Fees, caps, coverage boundaries,
 * documentation requirements and exclusions differ by municipality, and
 * the City of St. Charles sits outside MSD's territory entirely. A card
 * may describe how programmes work in general; it must NOT state that a
 * property is eligible, that a claim will be reimbursed, or that one
 * municipality's terms apply anywhere else (01 §20, §35; CLAUDE.md §24,
 * §26).
 *
 * ⚠ `accent: 'amber'` MEANS "THIS VARIES, CHECK YOURS", NOT "DANGER".
 * It paints `--warning`, an approved semantic-state token (18 §8) that
 * `Callout` already spends the same way. 18 §89 rules out urgency
 * visuals; one restrained rule is the whole treatment.
 */
export interface ResponsibilityCard {
  title: string
  description: string
  icon: ResponsibilityIcon
  accent: 'blue' | 'amber'
}

/**
 * The lateral-responsibility section.
 *
 * ⚠ `action` IS REQUIRED, AND IT IS WHAT KEEPS THE REST HONEST. The
 * cards establish that the answer depends on the municipality and the
 * address; without somewhere to send the visitor for THEIR answer, the
 * section raises a question it declines to help with.
 */
export interface ResponsibilityContent {
  title: string
  intro: string
  /**
   * The explanatory diagram.
   *
   * ⚠ INFORMATIVE CONTENT, NOT A BACKDROP. It carries real alt text,
   * nothing is written over it, and it renders `object-contain` inside
   * a fixed 4:3 box because a cropped diagram is a wrong diagram. A
   * market without one omits the field and the copy runs full width
   * (18 §40-42, §120).
   */
  diagram?: CardImage
  items: readonly ResponsibilityCard[]
  /**
   * The panel that sends the visitor to find THEIR answer.
   *
   * ⚠ THE FIELDS ARE NAMED FOR THEIR DESTINATIONS, NOT FOR VISUAL
   * PRIORITY, AND THAT IS DELIBERATE. They shipped as `primary` and
   * `secondary` on 2026-09-07 and the colours came out inverted: the
   * GREEN conversion treatment landed on `primary`, which links to a
   * programme GUIDE, while the actual conversion - contacting the
   * business - wore the light secondary fill beside it.
   *
   * DEC-096 reserves green for conversion actions. Reading a guide is
   * not one; asking about a property is. Naming the slots after where
   * they go makes that impossible to get backwards again: `guide`
   * renders blue, `contact` renders green, and neither name suggests
   * an order that the colour then has to fight.
   *
   * `guide` still comes FIRST in reading order, because the panel's own
   * copy says "review the information for your property location or
   * contact The Sewer Pros" in that order.
   */
  action: {
    title: string
    body: string
    /** Programme information. Renders blue: navigation, not conversion. */
    guide: { label: string; pageId: PageId }
    /** The conversion. Renders green. */
    contact: { label: string; pageId: PageId }
  }
}

/**
 * One pipe material.
 *
 * ⚠ THE IMAGE SHOWS WHAT THE MATERIAL LOOKS LIKE. It is NOT evidence
 * about any reader's line, which is why the section intro says so
 * before the first card. Do not add an installation date, a life
 * expectancy, a failure rate, or a claim about a street: CLAUDE.md §73
 * forbids fabricated localisation and no source ties a material to an
 * address.
 */
export interface MaterialCard {
  title: string
  description: string
  image?: CardImage
}

/**
 * The pipe-materials section.
 *
 * ⚠ THE PRE-PURCHASE CONTENT USED TO LIVE ON THIS TYPE AS
 * `prePurchase` AND NOW HAS ITS OWN. See `PrePurchaseContent`, which
 * records why it moved. A market sets both fields independently.
 */
export interface MaterialsContent {
  title: string
  intro: string
  items: readonly MaterialCard[]
}

/**
 * Buying or selling: the pre-purchase inspection section.
 *
 * ⚠ ITS OWN SECTION, NOT A PANEL INSIDE `materials` (owner direction,
 * 2026-09-07). It must render on a DIFFERENT SURFACE from the materials
 * band above it; two adjacent sections sharing a background read as one
 * section however they are composed (18 §11).
 *
 * ⚠ A MARKET THAT SETS THIS SHOULD NOT ALSO SET `localFeature`, or the
 * same argument ships twice on one page.
 */
export interface PrePurchaseContent {
  title: string
  body: string
  image?: CardImage
  /**
   * Short benefit points.
   *
   * ⚠ EVERY POINT MUST BE A CONDENSATION OF `body`, NOT AN ADDITION TO
   * IT. These sit beside approved copy and read as claims; one that
   * `body` does not already support is a new business claim wearing an
   * icon (01 §35, CLAUDE.md §24).
   */
  points: readonly string[]
  primary: { label: string; pageId: PageId }
  /** Only where a verified route exists. Never invent one (05 §51). */
  secondary?: { label: string; pageId: PageId }
  resourcesTitle: string
  /**
   * Related guides.
   *
   * ⚠ `label` OVERRIDES THE REGISTRY NAME ON PURPOSE. These three carry
   * the wording readers already see on this page, which differs from
   * the guides' registry titles. Resolving by page id keeps the
   * destination canonical while the label stays put through a rename.
   */
  resources: readonly { pageId: PageId; label: string }[]
  /**
   * Fill for the resource cards.
   *
   * ⚠ DEFAULTS TO THE NEUTRAL CARD, WHICH IS WHAT ST. LOUIS SHIPS.
   * That card already flips between `surface-muted` and `surface` so
   * it reads as raised off whichever surface the section is on, and
   * changing it globally would have restyled a page nobody asked
   * about.
   *
   * `blue` fills them with `--accent-secondary`, this system's
   * navigation and non-CTA emphasis colour (DEC-096). These cards are
   * navigation, so it is the right half of the palette; it is opt-in
   * only because the neutral treatment is also correct and one market
   * asked to change.
   */
  resourcesAccent?: 'surface' | 'blue'
}

/* ==========================================================================
   Company experience — the proof section on a market hub
   ========================================================================== */

/**
 * Line icons available to a proof card OR a benefit-list item.
 *
 * ⚠ RENAMED FROM `ExperienceProofIcon` ON 2026-09-07. The set stopped
 * being proof-card-only when the owner asked the benefit list to carry
 * an icon per item rather than five identical check marks, and a name
 * that says "Proof" would have sent the next reader looking for a
 * second, parallel union.
 *
 * ⚠ EVERY MARK IS `aria-hidden` BESIDE TEXT THAT STATES THE SAME
 * THING. 18 §96 allows an icon on that condition and no other: none of
 * these is the sole carrier of its meaning, which is what keeps the
 * list readable with images or CSS off.
 */
export type ExperienceIconName =
  | 'experience'
  | 'camera'
  | 'document'
  | 'independence'
  | 'explanation'
  | 'guidance'
  | 'decision'

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
  icon: ExperienceIconName
  accent: 'blue' | 'green'
}

/**
 * One benefit-list item with its own mark.
 *
 * ⚠ THE ICON IS PER ITEM BECAUSE THE ITEMS DIFFER. Owner direction,
 * 2026-09-07: five identical check marks said only "this is a list",
 * which the `<ul>` already said. A camera beside video evidence and a
 * document beside documentation carry a little of the meaning; a check
 * beside both carried none.
 *
 * A plain `string` item is still valid and renders unchanged, which is
 * what keeps San Diego and Las Vegas untouched.
 */
export interface ExperienceListItem {
  text: string
  /** Defaults to a check mark. */
  icon?: ExperienceIconName
}

/** A heading with paragraphs and an optional list. */
export interface ExperienceBlock {
  title: string
  /** Paragraphs before the list. */
  body?: readonly string[]
  /** Lead-in sentence for the list. */
  listIntro?: string
  /**
   * ⚠ STRINGS AND OBJECTS BOTH, AND THE UNION IS DELIBERATE. A market
   * that wants a mark per item supplies `ExperienceListItem`; one that
   * does not keeps plain strings and renders exactly as before. That
   * is what let the icons ship on St. Louis without touching San Diego
   * or Las Vegas.
   */
  items?: readonly (string | ExperienceListItem)[]
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
  /**
   * A faint decorative linework texture behind the whole section.
   *
   * ⚠ DECORATION, AND THE ONLY THING KEEPING IT DECORATION IS THE
   * OPACITY. It renders `aria-hidden`, `pointer-events-none`, behind
   * the section's own surface colour, at 4 to 6 percent. It must never
   * compete with the heading, the supporting photograph, the proof
   * cards, or the panels; if it starts to, lower the opacity rather
   * than darkening text or thickening card surfaces.
   *
   * ⚠ IT IS NOT THE SECTION'S IMAGE. `image` above is content with alt
   * text; this has no alt, carries no meaning, and the section must
   * read identically with it switched off.
   *
   * A market that omits it keeps the plain surface, which is a
   * finished state (18 §40-42).
   */
  texture?: CardImage
  /**
   * ONE supporting photograph, beside the heading.
   *
   * ⚠ `editorial` VARIANT ONLY, AND IT IS A MEDIA BOX RATHER THAN A
   * BACKDROP: no copy sits on it, so it carries no scrim and none of
   * the section's contrast measurements apply. The other two variants
   * ignore this field.
   *
   * ⚠ ONE, NOT A GALLERY. Owner direction, 2026-09-07: the process band
   * further down the page already carries a full-bleed frame, and
   * 18 §11 warns against decorating every section. A market with no
   * suitable photograph omits this and the heading runs full width,
   * which is a finished state rather than a gap (18 §40-42, §120).
   *
   * ⚠ `editorial` AND `strip` BOTH HONOUR IT SINCE 2026-09-08. It was
   * read by `editorial` alone until San Diego, on `strip`, was given a
   * 55/45 copy-and-frame split. `aside` still ignores it: that variant
   * already puts a column beside the copy and has nowhere to put a
   * second one.
   */
  image?: CardImage
  /**
   * ⚠ OPTIONAL SINCE 2026-09-08. San Diego moved its four sub-blocks
   * into sections of their own; a market may now carry the experience
   * claim and its proof cards alone. St. Louis and Las Vegas still set
   * this and are unchanged.
   */
  blocks?: readonly ExperienceBlock[]
  proof: readonly ExperienceProofCard[]
  /** Optional since 2026-09-08 - see `blocks`. */
  coverage?: ExperienceBlock
  /**
   * One primary action and one secondary (18 §106).
   *
   * The phone is NOT here: the template reads it from
   * `marketOperatingDetail` so a page cannot publish two numbers.
   */
  /** Optional since 2026-09-08 - see `blocks`. */
  actions?: {
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
  /**
   * Overrides the global CTA button label.
   *
   * ⚠ THE DEFAULT IS THE GLOBAL CONSTANT AND SHOULD USUALLY STAY. 18
   * §155 lists inconsistent CTA wording as a failure, and `PRIMARY_CTA`
   * exists so one phrase covers the site. A market overrides it only
   * where naming the market is the point of the ask.
   *
   * Ignored when `hideAction` is set.
   */
  actionLabel?: string
  /**
   * Drops the section's own button entirely.
   *
   * ⚠ THIS IS WHAT `CtaSectionProps.action = null` IS FOR, AND IT IS
   * THE RIGHT SHAPE FOR A `split` CTA CARRYING A LEAD FORM. The form
   * has its own green submit; a second green button beside it, pointing
   * at `/contact/` while a contact form is already on screen, is a
   * competing ask rather than a stronger one (18 §62, §106). St. Louis
   * sets this on owner direction, 2026-09-07.
   *
   * ⚠ IT IS NOT THE SAME AS OMITTING `actionLabel`. Leaving both unset
   * falls back to the global `PRIMARY_CTA` and still renders a button.
   */
  hideAction?: boolean
  /**
   * Small print beneath the actions.
   *
   * ⚠ NOT FINE PRINT. St. Louis uses it for scheduling limits, which
   * DEC-088 requires be stated at the same weight as the availability
   * claim they qualify - never a footnote, an asterisk or a tooltip.
   */
  note?: ReactNode
  /**
   * Renders the phone as an outlined action rather than a sentence.
   *
   * ⚠ IT SUPPRESSES "Prefer to talk now?", because two phone
   * affordances in one CTA is a second ask rather than a stronger one.
   */
  phoneAsButton?: boolean
  /**
   * Keeps the green primary button on an image ground.
   *
   * ⚠⚠ ONLY SAFE BECAUSE `CtaSection` RINGS IT IN WHITE. Green on a
   * scrimmed photograph is 1.15:1 for the control's own boundary
   * against a 3:1 floor. Read `CtaSectionProps.primaryOnImage` before
   * setting this anywhere else.
   *
   * ⚠ NO PAGE SETS THIS TODAY. St. Louis did for part of 2026-09-07 and
   * then dropped its button entirely (`hideAction`), because the lead
   * form beside it already carries a green submit. The option and its
   * measurements are kept for a CTA that has no form; it is not dead by
   * accident.
   */
  greenPrimaryOnImage?: boolean
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
  /**
   * Approved location pages within this market.
   *
   * ⚠⚠ NOTHING READS THIS FIELD TODAY. `MarketPageTemplate` mentions it
   * only in comments; no section renders it. It fed the "Areas we
   * serve" strip that was removed when it duplicated the coverage
   * section beside it, and the field outlived the render.
   *
   * The consequence is live and worth knowing before deleting it: St.
   * Louis links its communities through `serviceArea`, but San Diego
   * and Las Vegas set neither `serviceArea` nor `coverage`, so their
   * hubs link to NONE of their own location pages - seven and four
   * respectively. Populating one of those two fields is the fix;
   * repopulating this one would do nothing.
   */
  locationPageIds?: readonly PageId[]
  /** Served communities plus an availability statement. No map. */
  coverage?: CoverageContent
  /**
   * Company experience and proof, above the reviews.
   *
   * ⚠ ITS COMPOSITION DIFFERS PER MARKET ON PURPOSE. Three hubs
   * running one arrangement is the templated look 18 §155 names, so
   * each market picks a different arrangement of the same typography,
   * cards, colour and spacing:
   *
   *   St. Louis   `editorial`
   *   San Diego   `strip`
   *   Las Vegas   `aside` (the default, set by omission)
   *
   * ⚠ THIS LIST WAS STALE AND IS CORRECTED HERE. It read "San Diego
   * takes the `strip` variant where St. Louis and Las Vegas take
   * `aside`", which was true for the hours between the variants
   * shipping and `editorial` being added for St. Louis later the same
   * day (2026-09-07). Behaviour was never wrong - `experienceVariant`
   * defaults to `aside`, so Las Vegas rendered correctly under either
   * reading - but a comment naming the wrong variant for a market is
   * how the next person picks the wrong one.
   */
  experience?: ExperienceContent
  /** Layout for `experience`. Defaults to `aside`. */
  experienceVariant?: 'aside' | 'strip' | 'editorial'
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
  /**
   * Three-card explainer, e.g. lateral responsibility.
   *
   * ⚠ SUPERSEDED ON ST. LOUIS BY `responsibility`, WHICH THE TEMPLATE
   * PREFERS. Kept because it is the plain `ProblemGrid` treatment any
   * other market can still use, and because `ProblemGrid` itself is
   * shared by six templates and must not be restyled for one page.
   */
  lateralCards?: { title: string; intro?: string; items: readonly ProblemContent[] }
  /**
   * Three-card explainer, e.g. pipe materials by era.
   *
   * ⚠ SUPERSEDED ON ST. LOUIS BY `materials`. Same reasoning as
   * `lateralCards`: `InclusionsGrid` is shared by five templates.
   */
  materialCards?: { title: string; intro?: string; items: readonly ProblemContent[] }
  /**
   * Image-led lateral-responsibility section, rendered INSTEAD OF
   * `lateralCards`.
   *
   * ⚠ SET ONE OR THE OTHER. `MarketPageTemplate` prefers this one, so a
   * market that set both would ship the plain grid nowhere.
   */
  responsibility?: ResponsibilityContent
  /**
   * Image-led pipe-materials section, rendered INSTEAD OF
   * `materialCards`, and carrying the pre-purchase panel that
   * `localFeature` used to render on its own.
   *
   * ⚠ A MARKET THAT SETS THIS SHOULD NOT ALSO SET `localFeature`, or
   * the pre-purchase argument ships twice on one page.
   */
  materials?: MaterialsContent
  /**
   * Buying or selling, as its own section beneath `materials`.
   *
   * ⚠ IT RENDERS ON A DIFFERENT SURFACE FROM `materials`. See
   * `PrePurchaseContent` and the template.
   */
  prePurchase?: PrePurchaseContent
  /** Editorial block, e.g. buying or selling a home in this market. */
  localFeature?: { title: string; body: ReactNode }
  processBackground?: CardImage
  ctaBackground?: CardImage
  /*
    ========================================================================
    THE SAN DIEGO AUTHORITY STACK. Six sections, all optional.
    ========================================================================
    Rendered in this order by `MarketPageTemplate`, each in its own
    `<Section>` with its own surface. See the type declarations above
    for why they are market-agnostic.
  */
  /**
   * The order of the three explanatory sections.
   *
   * ⚠ THE MARKETS GENUINELY DIFFER, WHICH IS WHY THIS IS AUTHORED.
   * San Diego explains conditions, then when to inspect, then what you
   * receive. Las Vegas leads with what the inspection provides and has
   * no conditions grid. A single fixed order served one and produced a
   * muted-on-muted adjacency on the other.
   *
   * ⚠ SURFACES ARE DERIVED FROM THIS, not authored. Whatever order is
   * given, the sections alternate from `default` down, so a reorder
   * cannot create an adjacency fault. Unlisted sections do not render
   * even if their content is set.
   *
   * Defaults to conditions, scenarios, deliverables.
   */
  authorityOrder?: readonly AuthoritySectionId[]
  /**
   * Repair coverage and assistance. Renders `ProblemGrid` plus a note.
   *
   * ⚠ ITS OWN SLOT RATHER THAN `lateralCards`, which renders the same
   * component under `id="lateral-responsibility"`. Coverage is not
   * lateral education and must not borrow that anchor.
   */
  /**
   * Which public agency serves which property. Renders `ProblemGrid`.
   *
   * ⚠ SAME SHAPE AS `repairCoverage`, DIFFERENT SLOT AND ANCHOR. Both
   * are card grids about third-party bodies; sharing one slot would
   * mean a market could not carry both, and San Diego carries both.
   */
  authorities?: RepairCoverageContent
  repairCoverage?: RepairCoverageContent
  /** Conditions an inspection may reveal. Renders `ProblemGrid`. */
  conditions?: ConditionsContent
  /** When an inspection helps. Renders `ScenarioGrid`. */
  scenarios?: ScenariosContent
  /** What the customer receives. Renders `InclusionsGrid`. */
  deliverables?: DeliverablesContent
  /** Independence, as a process. Renders `ProcessSteps` on brand. */
  independence?: IndependenceContent
  /** Closing regional conversion panel. */
  regionalCoverage?: RegionalCoverageContent
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
  /*
    ==========================================================================
    CONVERSION AND TRUST PARITY WITH THE MARKET HUBS (DEC-103, 2026-09-07)
    ==========================================================================
    A hub used to have one conversion opportunity - the closing panel -
    where a market hub has three. `/locations/` is the hub where that
    gap costs the most: it is the page a visitor lands on to find out
    whether their area is covered, so it catches market-agnostic intent
    that has nowhere else to go.

    ⚠ TWO FLAGS, NOT ONE, AND THEY ARE NOT THE SAME QUESTION.
    "Should this page ASK for the job?" and "should this page SHOW
    evidence?" are independent, and a hub could reasonably want the
    second without the first. Collapsing them into one boolean would
    make that combination unreachable without another type change.

    ⚠ BOTH DEFAULT TO OFF, WHICH IS WHY THE OTHER FOUR HUBS ARE
    UNTOUCHED. `/services/`, `/for/`, `/commercial/` and `/resources/`
    set neither and render byte-for-byte as they did.
  */
  /**
   * Puts the lead form in the hero aside AND switches the closing CTA
   * to its `split` variant with a second copy of the form.
   *
   * ⚠ ONE FLAG FOR BOTH BECAUSE THEY ARE ONE FEATURE. Owner direction
   * (2026-09-07): on this page the hero form and the split CTA are
   * conversion parity, not two independently useful toggles.
   *
   * ⚠ NO BACKGROUND IMAGE IS INVOLVED, WHICH IS THE DIFFERENCE FROM
   * THE MARKET HUBS. There they key the split off `ctaBackground`;
   * here no such asset exists and inventing one would be a fabricated
   * scene. `CtaSection` gates its split layout on `proof !== undefined`
   * rather than on the image, so the two are genuinely separable.
   *
   * ⚠ NEITHER FORM PRESELECTS A MARKET, DELIBERATELY. `/locations/`
   * represents all three, so defaulting the Location field to any one
   * of them would put a market-scoped answer on a sitewide page
   * (01 §20). Leaving it unanswered is the correct state.
   */
  showHeroForm?: boolean
  /**
   * One line under the hero form's heading.
   *
   * ⚠ IT MUST NOT CARRY A PROMISE. This slot sits above the fields, so
   * a response time, a price, or an availability claim written here
   * would read as a term of submitting the form (CLAUDE.md §24, §42).
   * Guidance on how to fill the form in is what it is for.
   */
  heroFormIntro?: string
  /**
   * Renders `ReviewMarquee` and `ConfidenceModule`, the two trust
   * sections the market hubs carry.
   *
   * ⚠ STILL DATA-GATED ON TOP OF THIS. Both sections have their own
   * `*Renders()` predicate and this flag is ANDed with it, so setting
   * it cannot conjure a review band out of an empty dataset.
   *
   * ⚠ THE REVIEWS ARE COMPANY-WIDE, WHICH IS WHAT MAKES THEM LEGAL ON
   * A SITEWIDE PAGE. DEC-100 settled that the 4.9/595 figures are
   * presented unattributed and company-wide rather than as one
   * market's, so they carry no market-scoped claim onto this hub.
   */
  showTrustSections?: boolean
  /**
   * The home page's "What we do" band, as a SECOND section alongside
   * the hub's own member list.
   *
   * ⚠ THIS IS NOT `items`, AND THE TWO ARE NOT ALTERNATIVES. `items`
   * and `marketCards` are the hub's MEMBERS - the pages it exists to
   * route to - and exactly one of them renders. This is the service
   * mosaic, which on `/locations/` is not the member list: that hub's
   * members are the three markets. A hub whose members already ARE the
   * services (`/services/`) has no reason to set this and would render
   * the same list twice.
   *
   * ⚠ SAME SHAPE AS `MarketPageContent['services']`, and it is meant to
   * be fed the same `coreServiceCards` array. `image` is what promotes
   * `ServiceIndex` from a row list to the mosaic, so a page that
   * quietly loses its artwork loses the composition too.
   *
   * ⚠ ALL NINE SHARED CARDS ARE SAFE ON A SITEWIDE PAGE. Every service
   * in `coreServiceCards` carries an identical status across all three
   * markets (see that file), which is exactly the condition a hub
   * speaking for all three needs. The St. Louis-only lateral-reporting
   * service is deliberately absent from that array and must stay so.
   */
  services?: readonly {
    pageId: PageId
    description?: string
    image?: CardImage
  }[]
  /**
   * The service-area explainer, REPLACING the plain `body` prose.
   *
   * ⚠ SET THIS OR `body`, NOT BOTH. The template prefers this one and
   * skips the prose band entirely, so a hub setting both would author
   * a paragraph nothing renders.
   *
   * ⚠ IT IS `muted`, WHICH THE REST OF THE PAGE IS DERIVED FROM. The
   * band below it takes the opposite surface; see `HubPageTemplate`.
   */
  guidance?: MarketGuidanceContent
  /**
   * Intent-routing cards, the same "How we can help" band the home
   * page and the three market hubs render.
   *
   * ⚠ AUTHOR THE ARRAY FOR THE PAGE. Do not reuse the home page's
   * verbatim: its "Check coverage" card points AT `/locations/`, and a
   * card that routes a visitor to the page they are already on is a
   * dead end rather than a route.
   */
  routing?: readonly RoutingContent[]
  routingBackground?: CardImage
  /**
   * Swaps the closing `AuthorityBand` from its proof-point variant to
   * the home page's process band.
   *
   * ⚠ IT SWAPS, IT DOES NOT ADD. Both are `AuthorityBand`, and a page
   * carrying the proof points AND the process steps says "here is why
   * to trust us" twice in one column. The home page made the same
   * call: it renders the process variant and no proof band at all.
   */
  showProcessBand?: boolean
  processBackground?: CardImage
  /**
   * Full-bleed image behind the closing CTA.
   *
   * ⚠ IT DOES NOT SWITCH THE VARIANT, UNLIKE `MarketPageContent`'s
   * field of the same name. There, `split` is keyed off the image;
   * here it is keyed off `showHeroForm`, because this hub needed the
   * two-column layout before any CTA asset existed. `CtaSection` gates
   * its layout on `proof`, not on the image, so the two are genuinely
   * independent and a hub may set either alone.
   *
   * ⚠ A SITEWIDE PAGE'S CTA IMAGE MUST NOT NAME OR DEPICT ONE MARKET
   * AS THE BUSINESS'S PLACE. No signage, no address, no office marker,
   * no vehicle livery standing in for a branch (01 §20-21, CLAUDE.md
   * §24).
   */
  ctaBackground?: CardImage
}

/** Core page — about, contact, faq. */
export interface CorePageContent extends BasePageContent {
  placeholder?: never
}
