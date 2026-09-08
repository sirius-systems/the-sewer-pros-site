/**
 * Home, hub, core, and resource page content.
 *
 * Authority: docs/14-content-specification.md §16-17
 *            docs/18-design-system.md §110, §118
 *            docs/01-business-brand-foundation.md §3, §35
 *
 * `/contact/` lists St. Louis and San Diego SEPARATELY. They publish
 * different numbers, different hours, and different founding years
 * (DEC-070, DEC-071), and 01 §20 forbids copying business facts between
 * markets — a single merged block would be wrong, not merely tidy.
 *
 * Still no street address and no form: none is published for any market
 * (15 §11), and PENDING-008 leaves form fields undecided.
 *
 * `/about/` carries the company-wide combined-experience claim approved
 * under DEC-072. It still asserts no staff count, no inspection volume,
 * no licensing, and no certification — 01 §35 lists those among claims
 * requiring documented evidence, and none has been supplied.
 *
 * ⚠ The St. Louis-scoped claims — "#1 choice in St. Louis" and the
 * 100,000-inspections figure — live on the St. Louis market hub, not
 * here. /about/ is sitewide, and 01 §20 forbids presenting one market's
 * claims as though they covered another.
 */


import { ApprovedInlineLink } from '@/components/links/ApprovedInlineLink'
import { coreServiceCards } from './service-cards'
import type {
  CorePageContent,
  HomePageContent,
  HubPageContent,
  MarketGuidanceContent,
  PageId,
  ResourcePageContent,
} from '@/types'

const id = (value: string): PageId => value as PageId

/* ==========================================================================
   Home — 18 §110, §38
   ========================================================================== */

export const homeContent: HomePageContent = {
  hero: {
    eyebrow: 'Independent sewer inspection and cleaning',
    title: 'Sewer camera inspection and cleaning.',
    intro: (
      <p>
        Sewer camera inspection, diagnostics, locating, and cleaning:
        documented evidence of the line&rsquo;s condition, so you can decide
        the next step with confidence.
      </p>
    ),
  },
  seoTitle: 'Sewer Camera Inspection, Diagnostics & Cleaning | The Sewer Pros',
  metaDescription:
    "Independent sewer camera inspection, diagnostics, locating, and cleaning across St. Louis, San Diego, and Las Vegas. See the line's condition first.",
  /*
    ⚠ THE SAME ARRAY THE THREE MARKET HUBS RENDER, MOVED OUT OF THIS
    FILE ON 2026-09-07 RATHER THAN COPIED INTO THEIRS.

    The owner asked the hubs to carry this page's "What we do" section.
    Four hand-maintained transcriptions of one list is how the drift
    that prompted the request happened in the first place - two hubs
    had no artwork at all and were rendering a text index where this
    page renders the mosaic. `content/pages/service-cards.ts` holds the
    nine cards, the provenance, the market-availability check, and why
    the count is nine rather than ten.

    ⚠ THIS PAGE'S RENDERED OUTPUT IS UNCHANGED BY THE MOVE. Same nine
    entries, same order, same descriptions, same frames. Verified
    against the pre-change build.
  */
  services: coreServiceCards,
  /*
    ⚠ THE COMMERCIAL LINKS USE PAGE IDS, NOT SERVICE IDS.

    The brief named `svc-commercial-sewer-camera-inspection` and its
    two siblings. Those are SERVICE REGISTRY ids;
    `ApprovedInlineLink` takes a PAGE id and would have thrown the
    build on all three.

    The pages exist and are live, and the mapping is recorded in the
    data rather than inferred — each commercial page record declares
    the service it covers:

      svc-commercial-sewer-camera-inspection -> com-camera
      svc-commercial-sewer-cleaning          -> com-sewer-cleaning
      svc-commercial-hydro-jetting           -> com-hydro-jetting

    All three are status `launch` and indexable, so none had to fall
    back to plain text.

    Wording is unchanged from the approved copy. Only the named terms
    are wrapped.
  */
  /*
    ⚠ THE NAMED DESTINATIONS LIVE IN `links`, NOT IN `description`.

    They were inline `ApprovedInlineLink`s inside the paragraph for one
    day (2026-09-04) and the owner asked for them pulled out into a
    scannable list the same day. `description` is plain text now.

    Do not reintroduce a link inside a description: the same
    destination would then carry two competing affordances in one card,
    and the list is the one a reader scans.

    Every `pageId` below still resolves through the approved registry at
    render, so a gated or unauthored page fails there rather than
    shipping a dead link (16 §25, CLAUDE.md §37, §51).

    ⚠ THE COMMERCIAL IDS ARE `com-*`, NOT `svc-commercial-*`. The
    latter are SERVICE ids in the service registry, not PAGE ids, and
    would throw at the resolver. Same substitution the inline-links
    version already made.
  */
  routing: [
    {
      pageId: id('hub-services'),
      category: 'Explore services',
      icon: 'search-check',
      accent: 'blue',
      description:
        'Sewer camera inspection, cleaning, hydro jetting, and line locating, so you find the right fit for what\u2019s happening in your line. See the evidence before committing to any work.',
      linksHeading: 'Popular services',
      links: [
        {
          pageId: id('svc-sewer-camera-inspection'),
          label: 'Sewer Camera Inspection',
        },
        { pageId: id('svc-sewer-cleaning'), label: 'Sewer Cleaning' },
        { pageId: id('svc-hydro-jetting'), label: 'Hydro Jetting' },
        { pageId: id('svc-sewer-line-locating'), label: 'Sewer Line Locating' },
      ],
      secondaryLink: {
        pageId: id('hub-services'),
        label: 'Explore All Services',
      },
    },
    {
      pageId: id('hub-locations'),
      category: 'Check coverage',
      icon: 'map-pinned',
      accent: 'green',
      /*
        ⚠ "We serve" is a SERVICE-AREA statement, not an office claim.
        CLAUDE.md §11 draws that line and 18 §87 wants it visually
        explicit. No address, no branch, no "our location" anywhere in
        this card or the pages it links to.
      */
      description:
        'We serve St. Louis, San Diego, and Las Vegas. Check coverage in your area so you know upfront whether service is available before you schedule.',
      linksHeading: 'Service areas',
      links: [
        { pageId: id('market-st-louis-mo'), label: 'St. Louis' },
        { pageId: id('market-san-diego-ca'), label: 'San Diego' },
        { pageId: id('market-las-vegas-nv'), label: 'Las Vegas' },
      ],
      secondaryLink: {
        pageId: id('hub-locations'),
        label: 'Check Service Areas',
      },
    },
    {
      pageId: id('hub-commercial'),
      category: 'Property solutions',
      icon: 'building-2',
      accent: 'navy',
      description:
        'Sewer inspection, cleaning, and hydro jetting for commercial properties, multi-family buildings, and property managers. Recurring backups and drainage issues get handled without disrupting your operations.',
      linksHeading: 'Commercial services',
      links: [
        { pageId: id('com-camera'), label: 'Sewer Camera Inspection' },
        { pageId: id('com-sewer-cleaning'), label: 'Sewer Cleaning' },
        { pageId: id('com-hydro-jetting'), label: 'Hydro Jetting' },
      ],
      secondaryLink: {
        pageId: id('hub-commercial'),
        label: 'Explore Commercial Services',
      },
    },
    {
      pageId: id('core-contact'),
      category: 'Talk with us',
      icon: 'message-square-text',
      accent: 'green',
      description:
        'Reach out to schedule a sewer inspection or ask about a problem you\u2019re already seeing. Get a straight answer before you commit to bigger work.',
      /*
        No `links` and no `linksHeading`: there is nothing to enumerate
        under "contact us", and the render skips the whole block rather
        than putting a heading over an empty list (18 §120).

        It shows the per-market phone and email block instead
        (owner, 2026-09-04). ⚠ The details are NOT here - they are read
        from `marketOperatingDetail`, so DEC-097's San Diego email
        change reaches this card for free rather than needing a second
        edit. See the flag's note in `RoutingContent`.
      */
      showMarketContacts: true,
      secondaryLink: {
        pageId: id('core-contact'),
        label: 'Contact The Sewer Pros',
      },
    },
  ],
  routingBackground: {
    src: '/images/homepage/differentiator/the-sewer-pros-commercial-multifamily-properties.webp',
    alt: 'Exterior of a mixed-use multifamily building and its parking area',
    source:
      'Supplied by the business owner, 2026-09-04. Rendered scene, not a photograph of a Sewer Pros job.',
  },
  /*
    ⚠ THIS BACKS `AuthorityBand`'s PROCESS BAND NOW, NOT `ProcessSteps`.

    The "How it works" section it was written for was removed on owner
    direction (2026-09-04) and its frame moved to "How our sewer
    inspection process works", which is the page's process section from
    here on. The field name still reads correctly; the section it
    points at changed.

    `homeContent.process` went with that section rather than sitting
    here unread - the three Inspect / Understand / Decide steps are in
    git if they are wanted back.
  */
  processBackground: {
    src: '/images/homepage/differentiator/the-sewer-pros-st-louis-residential-property-exterior.webp',
    alt: 'Street view of a brick two-story house on a tree-lined block',
    source:
      'Supplied by the business owner, 2026-09-04. Rendered scene, not a photograph of a Sewer Pros job.',
  },
  faq: [
    {
      question: 'What does a sewer camera inspection show?',
      answer: (
        <p>
          Visible conditions inside the accessible line: blockages, root
          intrusion, separated joints, cracks, offsets, standing water, and
          debris. It cannot guarantee detection of every hidden defect.
        </p>
      ),
    },
    {
      question: 'Do you do sewer repairs?',
      answer: (
        <p>
          No. We inspect, diagnose, locate, and clean. Where findings suggest
          work beyond cleaning, that is a conversation about the evidence,
          including having a qualified repair contractor review it.
        </p>
      ),
    },
    {
      question: 'My drain is slow. Does that mean the sewer line is damaged?',
      answer: (
        <p>
          Not necessarily. One slow fixture is often a local branch issue.
          Several fixtures draining slowly, or repeated backups, is more reason
          to look at the main line.
        </p>
      ),
    },
    {
      question: 'How much does a sewer inspection cost?',
      answer: (
        <p>
          Cost depends on the length and accessibility of the line, whether a
          cleanout is available, and the market you&rsquo;re in. We don&rsquo;t
          publish a flat rate because those factors vary by property. Contact us
          for an estimate specific to your line.
        </p>
      ),
    },
    {
      question: 'Do you serve my area?',
      answer: (
        <p>
          We work across the St. Louis, San Diego, and Las Vegas metro areas as
          a service-area business: we travel to you rather than operating from a
          public storefront. Check our locations page for specific coverage.
        </p>
      ),
    },
    {
      question: 'What is the difference between an inspection and cleaning?',
      answer: (
        <p>
          An inspection documents the condition of the line with a camera.
          Cleaning removes what has accumulated inside it. They are often done
          together, but they answer different questions: inspection tells you
          what is wrong, cleaning restores flow.
        </p>
      ),
    },
    {
      question: 'Should I get a sewer inspection before buying a house?',
      answer: (
        <p>
          A sewer camera inspection before closing can reveal blockages, root
          intrusion, or pipe damage that a standard home inspection does not
          check. The Sewer Pros provides independent camera inspections for
          home buyers, with recorded video to support your decision.
        </p>
      ),
    },
    {
      question: 'What is a sewer scope, and is it the same as a camera inspection?',
      answer: (
        <p>
          A sewer scope is a video camera inspection of the sewer line,
          performed by pushing a specialized camera through the pipe. The terms
          are used interchangeably in the industry, and The Sewer Pros uses the
          same camera equipment and reporting for both.
        </p>
      ),
    },
    {
      question: 'Should I get a second opinion before agreeing to a sewer replacement?',
      answer: (
        <p>
          A second inspection can confirm whether a sewer line actually needs
          replacement or can be cleaned and maintained instead. The Sewer Pros
          performs independent camera inspections without an incentive to sell
          repair or replacement work, giving you an unbiased look at the
          pipe&rsquo;s condition.
        </p>
      ),
    },
    {
      question: 'What causes recurring sewer backups?',
      answer: (
        <p>
          Recurring backups are often caused by root intrusion, grease buildup,
          a pipe offset, or a partial blockage that returns after snaking. A
          camera inspection identifies the specific cause so the right next
          step, whether cleaning, hydro jetting, or further diagnosis, can be
          chosen.
        </p>
      ),
    },
    {
      question: 'What does sewer line locating involve, and when is it needed?',
      answer: (
        <p>
          Sewer line locating uses specialized equipment to trace the exact path
          and depth of an underground sewer line. It is typically needed before
          excavation or construction, or when a line&rsquo;s location is
          undocumented.
        </p>
      ),
    },
    {
      question: 'Is hydro jetting different from regular drain cleaning?',
      answer: (
        <p>
          Hydro jetting uses high-pressure water to clear grease, roots, and
          buildup from the full diameter of a pipe, while standard drain
          cleaning typically uses a cable to break through a single blockage.
          Hydro jetting reaches further and cleans more thoroughly for
          recurring or severe buildup.
        </p>
      ),
    },
    {
      question: 'Do you offer commercial sewer and drain services?',
      answer: (
        <p>
          The Sewer Pros provides commercial sewer camera inspection, cleaning,
          and hydro jetting for property managers, multi-family properties, and
          commercial facilities, with service available across St. Louis, San
          Diego, and Las Vegas.
        </p>
      ),
    },
    {
      /*
        Answer text is the canonical DEC-088 wording. The same-day half
        is reused from the `/services/` FAQ answer to the same question
        (see hubContent, hub-services) so the two pages state one thing,
        not two; the free-estimate sentence is verbatim from
        `verifiedOffers` in data/business/offers.ts.

        ⚠ Same-day wording is load-bearing. DEC-088 approved
        availability, never a promise: published hours are Monday to
        Friday, 8:00am–4:00pm (DEC-083), which rule out a guarantee,
        weekend coverage, and any emergency or 24/7 claim. Keep
        "sometimes" and "cannot promise"; do not tighten this into an
        offer. Changing it here without changing `/services/` puts the
        two pages back into contradiction.
      */
      // TODO: A stronger, unconditional version of this answer may be used only if the client confirms a standing, always-available same-day/free-estimate policy that does not vary by market or season. Do not change this answer without that explicit confirmation.
      question: 'Do you offer free estimates or same-day appointments?',
      answer: (
        <>
          <p>
            Ask about a free estimate before scheduling a sewer inspection or
            cleaning. Same-day is sometimes possible, but never guaranteed. We
            operate Monday through Friday, 8:00am to 4:00pm, and are closed
            weekends. We do not offer 24/7 or emergency service.
          </p>
          <p>
            Within those hours, a same-day appointment can sometimes be
            arranged, depending on how the day is already booked. It is worth
            asking when you get in touch, but we cannot promise it in advance.
          </p>
        </>
      ),
    },
  ],
  relatedPageIds: [
    id('res-camera-report'),
    id('res-read-video'),
    id('cmp-hydro-vs-snaking'),
  ],
  /*
    ⚠ THESE THREE LIVE ON THE HOME PAGE, NOT ON THE SEWER CAMERA
    INSPECTION SERVICE PAGE.

    The brief asked for them under `svc-sewer-camera-inspection` in
    services.tsx. That entry's `relatedPageIds` are three SERVICES —
    sewer-cleaning-camera-inspection, pre-purchase, line-locating —
    under the heading "Related services". `res-camera-report`,
    `res-read-video` and `cmp-hydro-vs-snaking` are this page's list,
    under "Guides and resources", which is the heading and the exact
    three cards the brief described.

    Put on the service page they would have rendered NOTHING:
    `RelatedLinks` looks descriptions up by the ids it is rendering,
    so keys for pages that page does not link to are never read.
  */
  relatedDescriptions: {
    [id('res-camera-report')]:
      'What a complete report should include, so you can compare quotes or revisit the findings later.',
    [id('res-read-video')]:
      'How to read root intrusion, cracks, and other defects on your own inspection video.',
    [id('cmp-hydro-vs-snaking')]:
      'When high-pressure hydro jetting is the right call, and when mechanical snaking is enough.',
  },
  relatedTitle: 'Sewer Inspection Guides and Resources',
  relatedEyebrow: 'Learn before you decide',
  relatedIntro:
    'Learn what sewer camera footage can show, what an inspection report should include, and how different sewer cleaning methods compare.',
  relatedFeaturedPageId: id('res-camera-report'),
  relatedFeaturedPoints: [
    'What should be documented',
    'What evidence you should receive',
    'How to compare findings later',
  ],
  relatedMeta: {
    [id('res-camera-report')]: {
      category: 'Inspection guide',
      icon: 'clipboard-list',
      accent: 'navy',
    },
    [id('res-read-video')]: {
      category: 'Video explainer',
      icon: 'file-video',
      accent: 'blue',
    },
    [id('cmp-hydro-vs-snaking')]: {
      category: 'Service comparison',
      icon: 'scale',
      accent: 'green',
    },
  },
  relatedViewAllPageId: id('hub-resources'),
  faqEyebrow: 'Need a quick answer?',
  /*
    ⚠ FIVE INLINE LINKS AT THE CONVERSION POINT, AND THEY ARE ALL
    REPEATS. Every one of these five pages is already linked earlier on
    this page - the markets and both services in the routing cards, and
    both services again in the process band. So this is neither a first
    occurrence nor a new route out; it is a fifth and sixth link to the
    same destinations, placed beside the form that is the page's actual
    conversion.

    Owner-supplied copy, transcribed as given (2026-09-04), and shipped
    as written. Flagged rather than trimmed: dropping the markup would
    change the owner's content, and 17's conversion architecture is the
    owner's call to make, not a component's.
  */
  cta: {
    eyebrow: 'Evidence before expensive decisions',
    title: 'Schedule a sewer camera inspection.',
    body: (
      <>
        <p>
          Schedule a sewer camera inspection when you are dealing with
          recurring sewer backups, slow drains, unexplained blockages, or
          concerns about a property you plan to purchase. A professional sewer
          scope provides video evidence of visible conditions inside accessible
          portions of the line, including buildup, root intrusion, offset
          joints, standing water, cracks, and other possible problem areas.
        </p>
        <p>
          The Sewer Pros provides sewer inspection and diagnostic services
          across the{' '}
          <ApprovedInlineLink pageId={id('market-st-louis-mo')}>
            St. Louis
          </ApprovedInlineLink>
          ,{' '}
          <ApprovedInlineLink pageId={id('market-san-diego-ca')}>
            San Diego
          </ApprovedInlineLink>
          , and{' '}
          <ApprovedInlineLink pageId={id('market-las-vegas-nv')}>
            Las Vegas
          </ApprovedInlineLink>{' '}
          service areas. We document what the camera shows and explain the
          findings in plain language, helping you decide whether the evidence
          supports{' '}
          <ApprovedInlineLink pageId={id('svc-sewer-cleaning')}>
            sewer cleaning
          </ApprovedInlineLink>
          ,{' '}
          <ApprovedInlineLink pageId={id('svc-hydro-jetting')}>
            hydro jetting
          </ApprovedInlineLink>
          , monitoring, or further evaluation by a separate repair provider.
        </p>
        {/*
          Hyphen markers, `aria-hidden`, the same treatment the sewer
          camera inspection hero and the featured guide card use.
          Tailwind's preflight strips list markers, so a bare `<ul>`
          would render three unmarked lines reading as a stray
          paragraph.
        */}
        <ul className="flex flex-col gap-2">
          {[
            'See the visible condition of the line on video',
            'Receive documented findings you can review',
            'Choose your next step without a repair sale',
          ].map((point) => (
            <li key={point} className="flex gap-2">
              <span aria-hidden="true" className="opacity-70">
                -
              </span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  ctaBackground: {
    src: '/images/homepage/differentiator/the-sewer-pros-schedule-sewer-inspection-home-exterior.webp',
    alt: 'Side of a house and its driveway on a clear day',
    source:
      'Supplied by the business owner, 2026-09-04. Rendered scene, not a photograph of a Sewer Pros job.',
  },
}

/* ==========================================================================
   Hubs
   ========================================================================== */

/**
 * `/services/`'s index, grouped by service family.
 *
 * ===========================================================================
 * ⚠ REORDERED FROM `coreServiceCards`, NEVER RETYPED FROM IT
 * ===========================================================================
 * Prompt 04 asked for the nine descriptions "verbatim from the live
 * homepage", and the only way to guarantee that next month as well as
 * today is to hand back the SAME OBJECTS rather than a proofread copy
 * of their text. Reordering by id does that: the descriptions, the
 * artwork and the provenance all travel unchanged, and an edit to
 * `content/pages/service-cards.ts` reaches this page automatically.
 *
 * ⚠ THE ARTWORK IS WHY THIS IS A MOSAIC RATHER THAN A ROW LIST.
 * `HubPageTemplate` derives the variant from whether the items carry
 * `image`, the same rule the home page's own band runs on. Dropping to
 * a plain `{ pageId, description }` shape here would silently demote
 * the section.
 *
 * ---------------------------------------------------------------------------
 * ⚠ NINE, NOT THE TEN THE BRIEF ASKED FOR, AND THE REASON IS A ROUTE
 * ---------------------------------------------------------------------------
 * Prompt 04 lists "Independent Sewer Inspection Second Opinion" as
 * item 4 of an Inspection & Diagnostics group. THAT PAGE DOES NOT
 * EXIST. `svc-independent-sewer-second-opinion` appears only in
 * `data/matrices/service-location-master-matrix.csv`, marked
 * `phase_2_candidate` and `selective_candidate`, and every path it
 * carries there is market-scoped (`/st-louis-mo/...`), never sitewide.
 * The approved page registry has no record for it and the production
 * build has no route. The build prompt's own Gate 1 says to link only
 * to confirmed-live routes, so it is left out rather than wired to a
 * 404 or silently dropped by the resolver.
 *
 * ⚠ NINE IS ALSO WHAT THE MOSAIC WANTS. `service-cards.ts` records the
 * arithmetic: the flagship takes two columns by two rows, so nine fills
 * exactly at three columns and a tenth would sit alone in a trailing
 * row, the orphan 18 §5.6 prohibits by name. Adding the tenth service
 * later means solving that too, not just adding a line here.
 *
 * ⚠ GROUPING IS ORDER, NOT HEADINGS. `ServiceIndex` renders one band;
 * it has no sub-heading slot, and adding one would be a component
 * change this build was scoped out of. The families read in Prompt 04's
 * display order: inspection and diagnostics, then cleaning, then
 * locating and maintenance.
 */
const SERVICES_HUB_ORDER: readonly PageId[] = [
  // Inspection & Diagnostics
  id('svc-sewer-camera-inspection'),
  id('svc-sewer-cleaning-camera-inspection'),
  id('svc-pre-purchase-sewer-inspection'),
  id('svc-recurring-sewer-backup-diagnosis'),
  // Cleaning
  id('svc-sewer-cleaning'),
  id('svc-hydro-jetting'),
  id('svc-drain-cleaning'),
  // Locating & Maintenance
  id('svc-sewer-line-locating'),
  id('svc-preventative-sewer-maintenance'),
]

/*
  ⚠ `flatMap` OVER `find`, so a renamed id drops a card instead of
  throwing a non-null assertion at module scope. The count is nine and
  visible on the page, so a silent drop shows up as an orphaned mosaic
  row rather than as nothing at all.
*/
const servicesHubItems = SERVICES_HUB_ORDER.flatMap((pageId) =>
  coreServiceCards.filter((card) => card.pageId === pageId),
)

/**
 * The five closing answers `/services/` shares with the home page.
 *
 * ⚠ PULLED BY QUESTION TEXT FROM `homeContent.faq`, NOT RETYPED. Same
 * reason as the service cards above: two hand-maintained copies of one
 * answer is exactly the drift `service-cards.ts` was created to end,
 * and the repair-boundary answer is the highest-risk string on this
 * page. If the home page rewords one of these, this page reads the new
 * wording rather than quietly keeping the old one.
 *
 * ⚠ THE QUESTIONS ARE THE HOME PAGE'S, NOT PROMPT 04'S PARAPHRASES.
 * The draft quotes the first as "Do you offer sewer repair?"; the
 * source says "Do you do sewer repairs?". Verbatim reuse means the
 * question travels with its answer.
 */
const REUSED_HOME_FAQ: readonly string[] = [
  'Do you do sewer repairs?',
  'What is the difference between an inspection and cleaning?',
  'Should I get a second opinion before agreeing to a sewer replacement?',
  'What causes recurring sewer backups?',
  'Is hydro jetting different from regular drain cleaning?',
]

const reusedHomeFaq = REUSED_HOME_FAQ.flatMap((question) =>
  (homeContent.faq ?? []).filter((entry) => entry.question === question),
)

/**
 * The service-area explainer, shared by `/locations/` and `/services/`.
 *
 * ⚠ ONE OBJECT, TWO PAGES, ON OWNER DIRECTION (2026-09-08). It was
 * authored inline on `/locations/`; `/services/` was then asked for the
 * same band. A second transcription of two cards, a panel and three
 * market links is the drift `service-cards.ts` and the shared FAQ
 * answers already exist to prevent, so the object is hoisted rather
 * than copied.
 *
 * ⚠ IT CARRIES NO MARKET-SCOPED CLAIM, which is what makes it portable.
 * Every line is about the service-market distinction itself: what a
 * service market is, what it is not, and that conditions differ between
 * the three. Nothing here states coverage, an office, hours or a local
 * presence, so it says the same true thing on either page (CLAUDE.md
 * §11, 18 §87).
 */
const SERVICE_AREA_GUIDANCE: MarketGuidanceContent = {
    eyebrow: 'How our service areas work',
    title: 'Local sewer service built around each market',
    intro:
      'The Sewer Pros serves properties across three active service markets. Select your market to find local sewer inspection, cleaning, coverage, scheduling, and contact information.',
    cards: [
      {
        icon: 'map-pin',
        accent: 'green',
        title: 'Service markets, not office locations',
        body: 'A service market identifies an area where The Sewer Pros travels to provide sewer camera inspection, sewer cleaning, hydro jetting, sewer line locating, and diagnostic services. It does not automatically represent a storefront, branch, depot, or office.',
        benefitLabel: 'What this means for you',
        benefit:
          'Confirm coverage using your property location before scheduling service.',
      },
      {
        icon: 'camera',
        accent: 'blue',
        title: 'Sewer conditions vary by market',
        body: 'Housing age, pipe materials, soil conditions, mature landscaping, property type, and local sewer requirements can vary between St. Louis, San Diego, and Las Vegas. Each market page provides information relevant to customers and properties in that service area.',
        benefitLabel: 'What this means for you',
        benefit:
          'Review locally relevant service and scheduling information instead of generic content with only the city name changed.',
      },
    ],
    /*
      ⚠ ALL THREE MARKETS, IN ONE TREATMENT AND ONE ORDER. Las Vegas
      is an active operational market (DEC-076, DEC-080) and must not
      read as pending or secondary; St. Louis is the only one with a
      GBP (01 §21) and must not read as the "real" one. Same button
      variant, same label pattern, registry order.
    */
    panel: {
      title: 'Find information for your service area',
      body: 'Choose your market to review local sewer services, featured communities, contact information, scheduling details, and sewer inspection guidance.',
      links: [
        {
          pageId: id('market-st-louis-mo'),
          label: 'Explore St. Louis',
          accent: 'green',
        },
        {
          pageId: id('market-san-diego-ca'),
          label: 'Explore San Diego',
          accent: 'blue',
        },
        {
          pageId: id('market-las-vegas-nv'),
          label: 'Explore Las Vegas',
          accent: 'green',
        },
      ],
    },
  }

export const hubContent: Partial<Record<PageId, HubPageContent>> = {
  [id('hub-services')]: {
    /*
      ==========================================================================
      CONVERSION PARITY - DEC-104 (owner, 2026-09-08)
      ==========================================================================
      ⚠ THE SECOND HUB TO OPT IN, NOT THE FAMILY. DEC-103 gave
      `/locations/` the hero lead form and the `split` closing CTA and
      scoped itself to that page by name; DEC-104 extends the same
      mechanism to this one on its own evidence - confirmed keyword data
      puts a comparison-stage searcher on `/services/`, warmer than a
      single closing panel serves well.

      `/for/`, `/commercial/` and `/resources/` are NOT covered and must
      keep rendering byte-for-byte as before. Each hub's conversion case
      gets evaluated on its own intent evidence; nothing here licenses
      pattern-matching the flag onto the remaining three.

      ⚠ `showHeroForm` ALONE. It carries the hero form and the split CTA
      together - owner direction on DEC-103, where they are one feature
      rather than two toggles. `showTrustSections` is DELIBERATELY
      ABSENT: DEC-104 excludes the review band and the confidence module
      exactly as DEC-103 did, and they are a separate decision if ever
      wanted.

      ⚠ NO MARKET IS PRESELECTED, same as `/locations/`. This page
      speaks for all three, so answering the Location field here would
      put a market-scoped answer on a sitewide page (01 §20).

      ⚠ SETTING THIS MOVES `AuthorityBand` BELOW THE FAQ ON THIS PAGE.
      That is the template's existing `showHeroForm` branch, not a new
      behaviour: the band exists to stop the FAQ's neighbour and the
      closing CTA sharing a surface, and the split CTA is `muted` where
      the panel was `brand`. `/commercial/` still renders
      `AuthorityBand -> FAQ`, which is why DEC-103 refused to reorder it
      globally.
    */
    showHeroForm: true,
    /*
      ⚠ GUIDANCE ON FILLING THE FORM IN, NOT A PROMISE ABOUT WHAT
      HAPPENS AFTER. See `HubPageContent.heroFormIntro`: no response
      time, no availability, no price. It names the two fields the
      visitor has to answer and the escape hatch for the one case this
      page creates, a reader still choosing between services.
    */
    heroFormIntro:
      'Select the service you are considering and the property location. If none of the listed services matches, select Other and describe the symptoms.',
    /*
      ==========================================================================
      THE HOME PAGE'S BANDS, ADDED HERE ON OWNER DIRECTION (2026-09-08)
      ==========================================================================
      Six sections from the home page and one from `/locations/`, named
      by their headings:

        Diagnosis separated from the sale      `showDifferentiator`
        Local sewer service built around ...   `guidance`
        What our customers say                 `showTrustSections`
        How we can help                        `routing`
        How our sewer inspection process ...   `showProcessBand`
        Where we work                          `showMarketCoverage`
        Planning Your Sewer Service ...        `showTrustSections`

      ⚠ EVERY ONE IS AN EXISTING SECTION AND NONE AUTHORS A NEW FACT.
      Five were already opt-in for `/locations/` under DEC-103;
      `showDifferentiator` and `showMarketCoverage` are new flags, and
      both render components that build themselves from shared data
      rather than from copy written here.

      ⚠ THIS GOES BEYOND WHAT DEC-104 APPROVED, DELIBERATELY. That
      decision excluded the review band and the confidence module by
      name. The owner asked for both here afterwards, which supersedes
      the exclusion for this page; DEC-104's entry records it.

      ⚠ "What we do" IS NOT AMONG THEM, AND MUST NOT BE ADDED. This
      hub's member list already IS the nine service cards, so setting
      `services` would render the same mosaic twice on one page.
    */
    showDifferentiator: true,
    /*
      ⚠ SHARED WITH `/locations/`, NOT COPIED. See
      `SERVICE_AREA_GUIDANCE`. It renders BELOW this page's own `body`
      paragraph rather than replacing it, which is a template change
      made for this page; see `HubPageContent.guidance`.
    */
    guidance: SERVICE_AREA_GUIDANCE,
    /*
      ⚠ REVIEWS AND THE CONFIDENCE MODULE, BOTH DATA-GATED ON TOP OF
      THIS FLAG. The figures are company-wide and unattributed per
      DEC-100, which is what makes them legal on a sitewide page; the
      confidence module is positioning rather than fact.
    */
    showTrustSections: true,
    /*
      ⚠ THREE CARDS, NOT THE HOME PAGE'S FOUR. Index 0 is the "Explore
      services" card pointing at `/services/`, which is the page a
      reader is already on. `/locations/` drops its own card for the
      same reason and by the same arithmetic.
    */
    routing: [
      homeContent.routing![1]!,
      homeContent.routing![2]!,
      homeContent.routing![3]!,
    ],
    routingBackground: homeContent.routingBackground,
    /*
      ⚠ THE PROCESS VARIANT REPLACES THE PROOF BAND, it does not join
      it. `HubPageTemplate` suppresses `AuthorityBand`'s proof form
      whenever this is set, because a page carrying both makes the same
      "why trust us" argument twice in one column. The home page
      settled that.
    */
    showProcessBand: true,
    processBackground: homeContent.processBackground,
    /*
      ⚠ "Where we work" AS A BAND, NOT AS THIS HUB'S MEMBER LIST. The
      member list is the service mosaic; see
      `HubPageContent.showMarketCoverage` for why that distinction
      needs its own flag.
    */
    showMarketCoverage: true,
    /*
      ⚠ THE HOME PAGE'S FULLER HEADING (owner, 2026-09-08), where the
      default is the bare "Common questions". Fourteen entries in two
      columns sit a long way down this page, and the short heading had
      stopped saying what the questions were about.
    */
    faqTitle: 'Common questions about sewer and drain services',
    /*
      ⚠ FOURTEEN QUESTIONS SPLIT SEVEN AND SEVEN (owner, 2026-09-08),
      which is the same shape and the same component setting the home
      page has used since 2026-09-03 for its own fourteen. `FaqSection`
      halves the list, so the count below IS the split: adding a
      fifteenth would give eight and seven.

      ⚠ NO OTHER HUB SETS THIS. `/commercial/` has three questions and
      `/locations/` nine, and splitting either would leave the thin
      columns `FaqSection.columns` documents against.
    */
    faqColumns: 2,
    /*
      ==========================================================================
      A SPLIT HERO: COPY LEFT, PHOTOGRAPHS RIGHT (owner, 2026-09-08)
      ==========================================================================
      ⚠ THE H1 CHANGED, AND IT IS STILL THE PAGE'S ONLY ONE. "Sewer and
      drain services, inspected independently first" became the line
      below; every other heading on this page is an `h2` or lower, and
      `HubIntro` hard-codes its own level for that reason.

      ⚠ THE HERO CTAS ARE THIS PAGE'S, NOT THE GLOBAL ONE. "Schedule a
      Sewer Inspection" names one of ten services as though it were the
      ask, on a page that also serves cleaning, jetting, drain cleaning,
      locating and diagnostic intent. The primary sends a reader to the
      grid; the secondary sends them to the closing form. The header's
      own button is untouched and still says the global phrase.

      ⚠ `#cta` IS THE EXISTING ANCHOR FOR THE CLOSING FORM, reused
      rather than duplicated. `CtaSection` already labels that section
      with it and `:target` in `app/globals.css` supplies the
      sticky-header offset, so adding a second id for the same
      destination would be redundant.

      ⚠ NO CLAIM IS ADDED. The services named are the nine live pages
      plus diagnostics; "accessible portions of the line" is the
      standing hedge; the repair boundary is CLAUDE.md §9 stated in the
      visitor's own terms. No response time, price, guarantee, office or
      credential appears.
    */
    hero: {
      eyebrow: 'Sewer inspection, cleaning, and diagnostics',
      title: 'Sewer and drain services built around documented evidence',
      intro: (
        <>
          <p>
            From recurring sewer backups and slow drains to an unknown
            sewer-line condition or questions before buying a property, the
            right starting service depends on what is happening at the
            property. The Sewer Pros provides sewer camera inspection, sewer
            cleaning, hydro jetting, drain cleaning, sewer line locating,
            recurring backup diagnosis, and preventative maintenance services.
          </p>
          <p className="mt-4">
            We evaluate accessible portions of the line when appropriate,
            document visible conditions, and explain the findings in practical
            language. Because we do not perform sewer repair or replacement,
            the information remains separate from a repair sale.
          </p>
        </>
      ),
      primaryAction: {
        href: '#services-grid',
        label: 'Explore Sewer Services',
      },
      secondaryAction: { href: '#cta', label: 'Request Service' },
    },
    /*
      ⚠ NO BRAND SUFFIX, WHICH IS WHY THIS IS NOT THE STRING THE BRIEF
      GAVE. Prompt 04 specifies "Sewer & Drain Cleaning Services | The
      Sewer Pros"; `rootMetadata`'s `%s | ${SITE_NAME}` template appends
      the suffix for every nested route (`lib/seo/metadata.ts:149`), so
      writing it here would ship it twice.
    */
    seoTitle: 'Sewer & Drain Cleaning Services',
    /*
      ⚠ THE BRIEF'S EM DASH IS A FULL STOP HERE. Prompt 04 wrote
      "...and more — independent service across..."; this project does
      not use em dashes in visitor-facing strings, and the build
      prompt's own guardrails repeat the rule. Nothing else changed,
      and the line still fits the display limit.
    */
    metaDescription:
      'Sewer camera inspection, cleaning, hydro jetting, locating, and more. Independent service across St. Louis, San Diego, and Las Vegas. No repair upsell.',
    /*
      ==========================================================================
      THE OPENING BAND, REPLACING THE PROSE PARAGRAPH (owner, 2026-09-08)
      ==========================================================================
      ⚠ IT REPLACES `body`, WHICH IS WHY THAT FIELD IS GONE FROM THIS
      ENTRY. `HubPageTemplate` renders one opening band or the other and
      prefers this one; leaving the paragraph behind would have authored
      copy nothing displays. The Prompt 04 sentence it carried
      ("Every service on this page starts the same way...") is answered
      by the second paragraph below, at more length.

      ⚠ EVERY CLAIM HERE IS ONE THE SITE ALREADY MAKES. The service list
      is the nine live pages plus diagnostics; the process is the
      inspect / document / explain sequence the home page and all three
      market hubs state; the repair boundary is CLAUDE.md §9 and §27 in
      the visitor's own terms. No guarantee, response time, price,
      credential, office or municipal affiliation appears, and the three
      markets are named without implying premises in any of them.

      ⚠ "ACCESSIBLE PORTIONS OF THE SEWER LINE" IS EXACT AND STAYS.
      It is the hedge that keeps every inspection sentence on this site
      truthful: a camera sees what it can reach, and nothing here may be
      edited into a claim about the whole line.

      ⚠ THE HEADING RENDERS AS AN `h2`. The hero owns the page's only
      `h1`; `HubIntro` hard-codes the level rather than taking it as a
      prop for exactly that reason.
    */
    intro: {
      /*
        ⚠ THE EYEBROW MOVED TO THE HERO AND THIS ONE REPLACED IT
        (owner, 2026-09-08). Two bands opening on the same three words
        would have read as one section restated.
      */
      /*
        ⚠ A DRAWING, NOT A PHOTOGRAPH, WHICH IS WHY IT IS A TEXTURE.
        Pale line art of a lateral running from a cleanout to the main,
        with a camera head in the run, on a transparent ground. It
        illustrates what the copy beside it describes without asserting
        a job: nothing here is a photograph of Sewer Pros work, and the
        drawing shows no property, no person and no outcome.

        ⚠ IT MUST NOT BE MOVED TO `ctaBackground` OR THE HERO SET. Both
        of those paths scrim and flip their section's text to white,
        which a near-white line drawing cannot survive.
      */
      background: {
        src: '/images/markets/services-hub/the-sewer-pros-sewer-line-inspection-intro-background.webp',
        describes:
          'Line drawing of a sewer lateral running from a cleanout to the main, with a camera head partway along the run',
        source:
          'Supplied by the business owner, 2026-09-08. Illustration, not a photograph of a Sewer Pros job.',
      },
      eyebrow: 'Find the right starting service',
      title:
        'Find the right sewer service by starting with the condition of the line',
      body: [
        'Recurring sewer backups, multiple slow drains, unexplained odors, and concerns about an older sewer line can have several possible causes. The Sewer Pros provides sewer camera inspection, sewer diagnostics, sewer cleaning, hydro jetting, drain cleaning, sewer line locating, pre-purchase sewer inspection, and preventative maintenance services for residential, commercial, and managed properties.',
        'Our evidence-first process starts by understanding the symptoms, inspecting accessible portions of the sewer line when appropriate, and documenting visible conditions. Depending on what the line shows, the appropriate next step may be cleaning, hydro jetting, locating the sewer route, monitoring a condition, or consulting a separate repair provider.',
        'Because The Sewer Pros does not perform sewer repair or replacement, our findings remain separate from a repair sale. You receive practical information that can help you make a more informed maintenance, property-purchase, or second-opinion decision.',
        'Service is available across the St. Louis, San Diego, and Las Vegas markets. Select a service below to learn what it addresses, how the process works, and what information you can expect to receive.',
      ],
      /*
        ⚠ ICONS FROM `SECTION_ICONS`, NOT A NEW DEPENDENCY. The three
        map to the three steps the copy above describes: the speech
        bubble for understanding the symptom, the camera for the
        documented evidence, the branch for the decision that follows.

        ⚠ BLUE, BLUE, GREEN. The palette already owns that split -
        `--accent-secondary` is the authority colour and `--accent` the
        conversion one - so the decision step is the green one.
      */
      benefits: [
        {
          title: 'Understand the problem',
          description:
            'Match the service to the symptoms or property concern you are experiencing.',
          icon: 'explanation',
          accent: 'blue',
        },
        {
          title: 'Review documented evidence',
          description:
            'See visible conditions inside accessible portions of the sewer line when a camera inspection is performed.',
          icon: 'camera',
          accent: 'blue',
        },
        {
          title: 'Choose the next step confidently',
          description:
            'Use clearer findings when deciding whether to clean, monitor, locate, or seek a separate repair opinion.',
          icon: 'decision',
          accent: 'green',
        },
      ],
      /*
        ⚠ THE TARGET IS THE MEMBER LIST'S OWN ID, which this route sets
        to `services-grid`. It is a fragment on this page rather than an
        approved page id, and `:target` in `app/globals.css` supplies
        the sticky-header offset so the heading is visible on arrival.
      */
      link: {
        label: 'Compare sewer and drain services',
        targetId: 'services-grid',
      },
    },
    /*
      ⚠ `servicesHubItems`, NOT `homeContent.services`. Same nine cards
      and the same objects, reordered into Prompt 04's family grouping.
      See the constant for why it is nine rather than ten.
    */
    items: servicesHubItems,
    /*
      ⚠ ONE LINE UNDER THE GRID HEADING, on owner direction. It names
      the five kinds of service the nine cards divide into, so a reader
      scanning them knows what the axis is before reading nine
      descriptions.
    */
    itemsIntro:
      'Compare inspection, cleaning, locating, diagnostic, and maintenance services to find the most appropriate starting point for your property concern.',
    /*
      ==========================================================================
      FOURTEEN ANSWERS: FIVE THE HOME PAGE OWNS, NINE THIS PAGE'S OWN
      ==========================================================================
      ⚠ THE FIRST FIVE ARE SPREAD IN FROM `homeContent.faq`, NOT COPIED.
      See `reusedHomeFaq`. They are the repair-boundary answer,
      inspection-vs-cleaning, the second-opinion answer, recurring
      backups and hydro-jetting-vs-cleaning, in Prompt 04's order.

      ⚠ TWO OF THE NINE NEW ONES COVER GROUND THE HOME PAGE ALSO
      COVERS, IN DIFFERENT WORDS. "What does sewer line locating do"
      restates the home page's "What does sewer line locating involve",
      and the sewer-scope terminology answer restates "What is a sewer
      scope, and is it the same as a camera inspection?". Prompt 04
      drafted both as new copy and Prompt 13 passed them, so they ship
      as written - but they are now two facts with two authors, which
      is the drift this file spreads the other five in to avoid. Worth
      revisiting if either page's wording is ever revised.

      ⚠ EVERY ANSWER IS ANSWER-FIRST AND NONE ADDS A FACT. No response
      time, no price, no availability, no credential (CLAUDE.md §24).
    */
    faq: [
      ...reusedHomeFaq,
      {
        question: 'What is preventative sewer maintenance?',
        answer: (
          <p>
            A scheduled cleaning interval based on what an inspection actually
            shows about your line, rather than a fixed annual visit. If camera
            evidence shows root activity or buildup returning faster than
            average, that sets the interval, not a generic calendar reminder.
          </p>
        ),
      },
      {
        question:
          'What is recurring sewer backup diagnosis, and how is it different from a standard inspection?',
        answer: (
          <p>
            It&rsquo;s a camera inspection specifically aimed at a line that
            has backed up more than once. The goal isn&rsquo;t just to see the
            current condition, it&rsquo;s to identify why the problem keeps
            returning, so the fix addresses the cause instead of clearing it
            again.
          </p>
        ),
      },
      {
        /*
          ⚠ THE SERVICE-AREA HEDGE IS LOAD-BEARING AND IS THE HOME
          PAGE'S OWN. "We travel to you rather than working from a
          public storefront" is what keeps this off a claim of premises
          in three markets where only St. Louis has a verified profile
          (CLAUDE.md §11, §29, §30). It must not be tightened into an
          office, a branch or a local address.
        */
        question: 'Do you serve St. Louis, San Diego, and Las Vegas?',
        answer: (
          <p>
            Yes, across all three service areas as a service-area business, we
            travel to you rather than working from a public storefront. See our{' '}
            <ApprovedInlineLink pageId={id('hub-locations')}>
              service areas
            </ApprovedInlineLink>{' '}
            for coverage specific to your area.
          </p>
        ),
      },
      {
        question:
          'What is the difference between drain cleaning and sewer cleaning?',
        answer: (
          <p>
            Drain cleaning clears fixture and branch lines, the pipes serving
            one sink, tub, or laundry connection. Sewer cleaning clears the
            main line that carries wastewater from the property to the
            connection point. A single slow drain is often a drain cleaning
            fix; backups affecting multiple fixtures usually point to the main
            line.
          </p>
        ),
      },
      {
        question: 'What does sewer line locating do, and when would I need it?',
        answer: (
          <p>
            Sewer line locating establishes exactly where the line runs and how
            deep it sits, without excavation. It&rsquo;s typically needed
            before digging, landscaping, installing a fence or pool, or
            planning utility work near the property, so you know what&rsquo;s
            underground before work starts.
          </p>
        ),
      },
      {
        /*
          ⚠ "SOMETIMES", AND THE HEDGE STAYS. This is the question a
          visitor arrives on after a replacement quote, and the answer
          must describe what an inspection can SHOW rather than promise
          that cleaning will be enough (CLAUDE.md §9, §24, §27). It also
          must not characterise whoever quoted the replacement.
        */
        question: 'Should a sewer line be cleaned instead of replaced?',
        answer: (
          <p>
            Sometimes. A camera inspection shows whether buildup, roots, or a
            partial blockage is causing the problem, in which case cleaning or
            hydro jetting may resolve it, or whether the pipe itself is damaged
            in a way cleaning can&rsquo;t fix. That&rsquo;s the evidence an
            independent inspection is meant to provide before a replacement
            decision is made.
          </p>
        ),
      },
      {
        question: 'What should I expect during a sewer camera inspection?',
        answer: (
          <p>
            A camera is run through the accessible portion of the line while
            the footage is recorded. We document what the camera shows as we
            go, then walk you through the footage afterward and explain what it
            means in plain language before recommending any next step.
          </p>
        ),
      },
      {
        question: 'Is a sewer scope the same as a sewer camera inspection?',
        answer: (
          <p>
            Yes. &ldquo;Sewer scope&rdquo; and &ldquo;sewer camera
            inspection&rdquo; describe the same service: a camera run through
            the line to document its condition on video.
          </p>
        ),
      },
      {
        question:
          'How is a sewer cleaning and camera inspection combo different from getting each separately?',
        answer: (
          <p>
            The combo clears the line first, then inspects it on camera, so you
            see the condition the blockage was hiding rather than just a line
            that drains again. Done separately, an inspection before cleaning
            can miss what&rsquo;s underneath existing buildup.
          </p>
        ),
      },
    ],
    /*
      ==========================================================================
      "NOT SURE WHERE TO START?" - THE PANEL BELOW THE SERVICE GRID
      ==========================================================================
      ⚠ IT POINTS AT THE CLOSING FORM, IT DOES NOT CARRY ONE. `#cta` is
      that section's existing anchor. A second form here would be two
      places to submit one enquiry and a second set of field ids to keep
      unique.

      ⚠ THE COPY MAY NOT PROMISE A DIAGNOSIS. "Can help identify an
      appropriate starting point" is the ceiling; CLAUDE.md §24 forbids
      guaranteeing that a cause will be established, and this is the
      section most tempted by it.

      ⚠ THE SECONDARY LINK IS THE CANONICAL CAMERA INSPECTION PAGE,
      resolved through the approved registry rather than written as a
      path, so a gated page drops the link instead of shipping a dead
      one.
    */
    selectionPanel: {
      eyebrow: 'Not sure where to start?',
      title: 'Tell us what is happening at the property',
      body: 'Recurring backups, several slow drains, an unknown sewer-line location, or a concern before buying a property may require different starting services. Describe the symptoms, the property type, and what decision you are trying to make. We can help identify an appropriate inspection, cleaning, hydro jetting, locating, or diagnostic starting point.',
      icon: 'guidance',
      action: { label: 'Describe the Problem', href: '#cta' },
      secondaryLink: {
        label: 'Review sewer camera inspection',
        pageId: id('svc-sewer-camera-inspection'),
      },
    },
    /*
      ⚠ NO BUTTON (owner, 2026-09-08), WHICH REVERSES WHAT PROMPT 04
      ASKED FOR. That brief named "Schedule a Sewer Inspection" as this
      CTA's action and it shipped for two builds; the owner has now
      dropped it, which lands where `/locations/`, St. Louis, San Diego
      and Las Vegas already are.

      `CtaContent.hideAction`'s own note is the argument: this section
      is the `split` variant and carries the request-service form on its
      right, so the form's green submit is the ask. A second green
      button beside it, pointing at `/contact/` while a contact form is
      already on screen, is a competing path rather than a stronger one
      (18 §62, §106).

      ⚠ `hideAction`, NOT AN EMPTY `actionLabel`. Leaving both unset
      falls back to the global `PRIMARY_CTA` and still renders a button;
      only this flag drops the actions row, rather than leaving an empty
      flex box holding 32px of margin above nothing.

      ⚠ NOTHING ELSE LOSES A PATH. The hero's "Request Service" button
      and the selection panel's "Describe the Problem" both point at
      `#cta`, so every route to this form is intact and the header
      keeps its own button sitewide.

      ⚠ NO PROMISE IN THE BODY. "Walk you through what fits your
      situation before anything is scheduled" describes the process the
      rest of the page describes; it carries no response time,
      availability or price (CLAUDE.md §24, §42).
    */
    /*
      ⚠ THE CLOSING CTA GAINS A FRAME (owner, 2026-09-08). This hub
      shipped without one because none existed: `HubPageContent`'s own
      note said so, and `CtaSection` gates its `split` layout on the
      form rather than on the image precisely so the section could
      render without a picture. One was supplied, so the section takes
      it.

      ⚠ IT IS NOT IN THE HERO CAROUSEL, AND MUST NOT BE ADDED TO IT.
      `data/business/services-hub-backdrop.ts` carries the five hero
      frames and says the same thing from its end: one picture in two
      places on one route reads as a mistake.

      ⚠ NO ADDRESS, NUMBER, SIGNAGE OR PERSON IS VISIBLE. It shows a
      property type, not a Sewer Pros location or a job (CLAUDE.md
      §11, §24). The white standpipe by the foundation is the only
      sewer-specific detail and it asserts nothing.

      ⚠ THE SCRIM IS CSS AND THE SECTION'S TEXT GOES WHITE. `Section`
      applies it; the form beside the copy keeps its own opaque card.
    */
    ctaBackground: {
      src: '/images/markets/services-hub/the-sewer-pros-sewer-service-request-cta-background.webp',
      alt: 'Single-story home with a stone-veneer base, a driveway and a visible sewer cleanout',
      source:
        'Supplied by the business owner, 2026-09-08. Rendered scene, not a photograph of a Sewer Pros job.',
    },
    cta: {
      hideAction: true,
      title: "See what's actually happening in your line.",
      body: "Schedule a sewer camera inspection, or reach out about any of the services above. We'll walk you through what fits your situation before anything is scheduled.",
    },
  },

  [id('hub-commercial')]: {
    hero: {
      title: 'Commercial Sewer & Drain Services',
      intro: (
        <p>
          Inspection, cleaning, and planned maintenance for commercial
          properties, where a blocked line closes something rather than merely
          inconveniencing someone.
        </p>
      ),
    },
    // No brand suffix: the root title template appends it.
    seoTitle: 'Commercial Sewer & Drain Services',
    metaDescription:
      'Sewer camera inspection, cleaning, hydro jetting, and maintenance for commercial properties across St. Louis, San Diego, and Las Vegas: planned service, not reactive fixes.',
    body: (
      <>
        <h2>What changes on a commercial property</h2>
        <p>
          The plumbing is not fundamentally different. The consequences are.
          Higher and more continuous volume means lines accumulate faster, and a
          failure interrupts trading, displaces tenants, or closes a kitchen.
        </p>
        <p>
          That shifts the useful work from reactive to planned, and makes
          documentation matter: decisions on commercial property usually have
          to be justified to someone.
        </p>
      </>
    ),
    items: [
      { pageId: id('com-camera'), description: 'Documented condition across a property or portfolio.' },
      { pageId: id('com-sewer-cleaning'), description: 'Clearing commercial lines around operations.' },
      { pageId: id('com-hydro-jetting'), description: 'High-pressure cleaning for grease, scale, and sludge.' },
      { pageId: id('com-drain-cleaning'), description: 'Fixture and branch drains across occupied buildings.' },
      { pageId: id('com-maintenance'), description: 'Servicing lines on an evidence-based interval.' },
    ],
    faq: [
      {
        question: 'Do you serve restaurants and food-service properties?',
        answer: (
          <p>
            Yes. Grease and buildup in food-service lines is one of the most
            common reasons commercial properties need cleaning, and it is a
            large part of what hydro jetting addresses.
          </p>
        ),
      },
      {
        question: 'Do you offer commercial sewer repair?',
        answer: (
          <p>
            No. We inspect, diagnose, locate, and clean commercial lines.
            Where a finding suggests repair, that is a separate conversation
            with a qualified repair contractor.
          </p>
        ),
      },
      {
        question: 'Can you service multiple properties under one account?',
        answer: (
          <p>
            Yes, scheduling across a portfolio is part of the conversation.
            What we will not do is put every line on the same interval
            regardless of what it actually needs.
          </p>
        ),
      },
    ],
    cta: {
      title: 'Talk to us about a commercial property',
      body: 'Start with what the lines actually need, established by inspection.',
    },
  },

  [id('hub-locations')]: {
    /*
      ==========================================================================
      CONVERSION AND TRUST PARITY WITH THE MARKET HUBS (DEC-103, 2026-09-07)
      ==========================================================================
      ⚠ THE ONLY HUB THAT SETS EITHER FLAG, AND THAT IS THE POINT. The
      other four keep exactly the sections they had. This one is where
      the gap cost the most: it is the page a visitor opens to find out
      whether their area is covered, so it catches market-agnostic
      intent that has nowhere better to land, and until now it answered
      that intent with a single closing panel.

      ⚠ NEITHER FLAG ADDS A CLAIM. `showTrustSections` renders reviews
      that DEC-100 already established as company-wide and unattributed,
      plus the confidence module, which is positioning rather than fact.
      `showHeroForm` renders the same form the markets render, with the
      Location field left unanswered because this page speaks for three
      markets and cannot answer it (01 §20).

      ⚠ NO PHONE NUMBER AND NO CTA IMAGE. Both are market-scoped and
      neither exists for this page; see `HubPageTemplate`.
    */
    showHeroForm: true,
    showTrustSections: true,
    /*
      ⚠ NO BUTTON IN THE CLOSING CTA (owner, 2026-09-07). That section
      is the `split` variant and carries a lead form in its proof slot,
      so the button was a second, weaker path to the same place: the
      form asks for the job on the spot, the button navigated away from
      it. St. Louis made the same call for the same reason.

      ⚠ `hideAction`, NOT AN EMPTY `actionLabel`. `CtaSection` treats
      `null` as "no button" and `undefined` as "fall back to the global
      PRIMARY_CTA", so only this flag actually removes it.
    */
    /*
      ⚠ THE EYEBROW IS ST. LOUIS'S PHRASE, VERBATIM AND DELIBERATELY.
      "Evidence before expensive sewer decisions" names no market, so
      it is the company's own differentiator (CLAUDE.md §8) rather than
      a St. Louis fact borrowed for a sitewide page. That distinction
      is the whole test for what may cross markets here.

      ⚠ THE BODY IS THE MARKET HUBS' THREE-PARAGRAPH SHAPE: qualifying
      scenarios, what the visit produces, then the repair guardrail
      stated as this company's model rather than a claim about anyone
      else's (CLAUDE.md §9, §27).

      ⚠ "ACROSS ALL THREE SERVICE MARKETS" IS THE ONE SUBSTITUTION A
      SITEWIDE PAGE NEEDS. Every other structural element matches the
      market hubs; a named city is the single thing that cannot.

      ⚠ NO PROMISE ADDED. "Confirms availability for your address" is
      the act of checking, not an assurance of coverage; no response
      time, price, or same-day claim enters with this copy.
    */
    cta: {
      eyebrow: 'Evidence before expensive sewer decisions',
      title: 'Schedule a sewer inspection',
      body: (
        <>
          <p>
            If you are dealing with recurring sewer backups, multiple slow
            drains, unexplained blockages, possible root intrusion, or
            concerns about a property you are preparing to purchase, a sewer
            camera inspection can show what is happening inside the
            accessible portion of the line.
          </p>
          <p>
            The Sewer Pros confirms availability for your address, records
            the inspection, and explains what the footage shows in plain
            language, across all three service markets.
          </p>
          <p>
            Because we do not perform sewer repair or replacement, our
            findings are not tied to selling you a major repair. You receive
            evidence you can keep, review, and use when deciding what happens
            next.
          </p>
        </>
      ),
      hideAction: true,
    },
    /*
      ⚠ ONE FRAME, THREE PANELS, ONE PER MARKET (owner-supplied,
      2026-09-07). Brick and mature shade tree, stucco and palms,
      stucco and desert gravel. That is the only image on the site
      that depicts all three markets at once, which is what makes it
      right for the page that speaks for all three and wrong for any
      single market hub.

      ⚠ IT DEPICTS NO BUSINESS PRESENCE, WHICH IS THE TEST THAT
      MATTERS HERE. No signage, no address, no vehicle livery, no
      storefront, no pin on a map. A CTA image on a sitewide page that
      showed any of those would assert an office where none is
      verified (01 §20-21, CLAUDE.md §24).

      ⚠ THE ALT NAMES NO CITY. The panels read as regional housing
      types rather than as photographs of a named place, and captioning
      them with market names would turn a rendered scene into a
      location claim.
    */
    ctaBackground: {
      src: '/images/markets/locations-hub/the-sewer-pros-three-market-service-areas-cta.webp',
      alt: 'Three residential street views side by side: a brick house under a mature shade tree, a stucco house with palms, and a stucco house with desert gravel planting',
      source:
        'Supplied by the business owner, 2026-09-07. Rendered scene, not a photograph of a Sewer Pros job.',
    },
    /*
      ==========================================================================
      THREE HOME PAGE BANDS, ON OWNER DIRECTION (2026-09-07)
      ==========================================================================
      "How we can help", "What we do", and the process band.

      ⚠ THE ROUTING ARRAY IS THIS PAGE'S, NOT A REFERENCE TO THE HOME
      PAGE'S. `homeContent.routing` carries a fourth "Check coverage"
      card whose links and secondary action both point at
      `/locations/`. Rendering that here would route a visitor to the
      page they are standing on, and its three market links would be
      the THIRD copy of the same market navigation on this page after
      the guidance panel and the market cards. Dropped for that reason,
      not overlooked.

      ⚠ THE THREE THAT REMAIN ARE COPIED VERBATIM FROM `homeContent`,
      including the accents, so the band reads identically on both
      pages. If that copy drifts, the two pages disagree; a shared
      constant would be the fix, and is worth doing the next time a
      third page needs it.
    */
    routing: [homeContent.routing![0]!, homeContent.routing![2]!, homeContent.routing![3]!],
    routingBackground: homeContent.routingBackground,
    /*
      ⚠ THIS SWAPS THE "How we work" PROOF BAND OUT. Both are
      `AuthorityBand` and this page should not argue its credibility
      twice; the home page made the same call. See
      `HubPageContent.showProcessBand`.
    */
    showProcessBand: true,
    /*
      ⚠ THE HOME PAGE'S OWN FRAME, AND ITS ALT SAYS NOTHING ABOUT A
      MARKET. The filename mentions St. Louis; the alt text is a
      generic street view, and it is decorative background rather than
      a claim about where the photograph was taken. A sitewide page
      must not caption an image with one market's name (01 §20).
    */
    processBackground: homeContent.processBackground,
    /*
      The home page's nine-card mosaic. Safe on a page speaking for all
      three markets because every card in `coreServiceCards` carries an
      identical status across all three; see that file.
    */
    services: coreServiceCards,
    /*
      ==========================================================================
      HERO REWRITTEN 2026-09-07 (owner copy, folded on owner direction).
      ==========================================================================
      ⚠ THE SUPPLIED COPY HAD A BULLET LIST AND THREE MARKET LINKS. Both
      were dropped rather than fitted in, on owner direction: the hero
      has no list slot and does not need one, and the market links would
      have been a third copy of the same navigation two sections above
      the guidance panel that already owns that job. "One hero, one
      voice, no repeated slots."

      ⚠ THE LIST BECAME THE SECOND PARAGRAPH'S MIDDLE CLAUSE. Confirm
      availability, document on video, explain the findings - the five
      bullets said this in five lines.

      ⚠ ONE LINE WAS SOFTENED, AND THIS IS THE REASON. The supplied
      bullet read "Choose your next step without a repair-driven sales
      incentive", which implies other contractors push repairs that are
      not needed. CLAUDE.md §9 draws that line explicitly: the
      differentiator is The Sewer Pros' own business model, never an
      accusation about anyone else. It now reads "based on evidence
      rather than a repair recommendation", which keeps the contrast
      and makes no claim about a third party. The site's established
      phrasing, "without repair-driven upselling", was the alternative;
      this one fits the sentence better and says the same thing.

      ⚠ THE NO-REPAIR SENTENCE IS A GUARDRAIL, NOT A HEDGE. CLAUDE.md
      §9 forbids presenting the business as a repair or replacement
      contractor, and stating it in the hero is the clearest place.

      ⚠ NO PROMISE ANYWHERE. No response time, no same-day, no price,
      no coverage guarantee. "Confirm coverage" is an invitation to
      ask, not an assurance of a yes.
    */
    hero: {
      eyebrow: 'Sewer service across three markets',
      title: 'Find sewer inspection and cleaning in your service area',
      intro: (
        <>
          <p>
            The Sewer Pros provides sewer camera inspection, sewer cleaning,
            hydro jetting, sewer line locating, drain cleaning, and diagnostic
            services across the St. Louis, San Diego, and Las Vegas service
            markets. These are service markets: areas we travel to and work
            in, not offices you can visit. Select your location and tell us
            what is happening so we can confirm coverage and identify the
            appropriate service for your property.
          </p>
          <p>
            Request service if you are dealing with recurring sewer backups,
            multiple slow drains, unexplained blockages, possible root
            intrusion, or concerns about a property you are preparing to
            purchase. We confirm availability for your address, document
            visible conditions inside accessible portions of the line on
            video, and explain what is there, so you can decide your next step
            based on evidence rather than a repair recommendation. The Sewer
            Pros does not perform sewer repair or replacement.
          </p>
        </>
      ),
    },
    /*
      ⚠ GUIDANCE ON FILLING THE FORM IN, NOT A PROMISE ABOUT WHAT
      HAPPENS AFTER. See `HubPageContent.heroFormIntro`.
    */
    heroFormIntro:
      'Not sure which service you need? Select Other and briefly describe the symptoms you are seeing.',
    // No brand suffix: the root title template appends it.
    seoTitle: 'Service Areas | St. Louis, San Diego & Las Vegas',
    metaDescription:
      'The Sewer Pros provides sewer and drain services across St. Louis, San Diego, and Las Vegas: service-area coverage, not branch offices.',
    /*
      ==========================================================================
      SERVICE-AREA EXPLAINER. Replaced the prose `body` 2026-09-07.
      ==========================================================================
      ⚠ THIS REPLACED `body`, IT DID NOT JOIN IT. `HubPageTemplate`
      renders one intro band and prefers `guidance`, so a leftover
      `body` here would be two paragraphs nothing displays.

      ⚠ ONE SENTENCE WAS DELETED RATHER THAN REWRITTEN, ON OWNER
      DIRECTION. The old closing line read: "That is why market pages
      are worth writing properly rather than swapping a city name into
      the same paragraph, and why the ones here are being researched
      before they are published." That is production commentary about
      how the site is built. It tells a visitor nothing about their
      sewer, and "before they are published" describes an internal
      pipeline state on a public page. It is gone from the site and
      deliberately not relocated; the governance documentation that
      discusses publication and indexation is untouched.

      ⚠ EVERY FACTUAL CLAIM SURVIVED THE REWRITE. Service markets are
      not offices; sewer conditions differ by market. Nothing was added
      beyond what the prose already said, and no coverage guarantee,
      response time, price, or availability promise entered with the
      new format (CLAUDE.md §24).

      ⚠ NO EM DASHES, INCLUDING IN THE CARD BODIES.
    */
    guidance: SERVICE_AREA_GUIDANCE,
    /*
      ⚠ THE HOME PAGE'S MARKET CARDS, NOT A SECOND DESIGN FOR THE SAME
      INFORMATION (owner direction, 2026-09-07). This replaced a plain
      three-row `items` index carrying one line each; every destination
      it had is still a crawlable anchor here, and each card now also
      lists that market's own community pages.

      ⚠ NO `items` ALONGSIDE THIS. `HubPageTemplate` renders one member
      list, and it prefers this one - an `items` array left here would
      be content nothing displays.

      ⚠ THE CARDS ARE NOT DECLARED HERE, AND THAT IS THE POINT.
      `MarketCoverage` builds them from approved `market` page records,
      so a market whose hub is gated drops out of this indexable module
      on its own (04 §4) rather than needing an edit in two places. All
      three are `launch` and indexable today, which is why all three
      render. The community lists come from approved `location` records
      the same way, so no city name and no route is written in this
      file.

      ⚠ SERVICE MARKETS, NOT BRANCHES. The copy below says where work
      happens, never where an office is (CLAUDE.md §11, 18 §87). The
      hero and the FAQ on this page already make that explicit, and the
      intro repeats the availability caveat rather than implying the
      listed communities are the limit or the guarantee.
    */
    marketCards: {
      eyebrow: 'Service areas',
      title: 'Where we work',
      intro:
        'The Sewer Pros provides sewer camera inspection, sewer cleaning, hydro jetting, sewer line locating, and diagnostic services across the St. Louis, San Diego, and Las Vegas service markets. Choose a market to explore local service information and featured communities. The locations shown are not the full limit of our coverage, so contact us to confirm availability for your property.',
      descriptions: {
        [id('market-st-louis-mo')]:
          'Sewer inspection, cleaning, locating, and diagnostic services across the greater St. Louis region.',
        [id('market-san-diego-ca')]:
          'Sewer inspection, cleaning, locating, and diagnostic services across the greater San Diego region.',
        [id('market-las-vegas-nv')]:
          'Sewer inspection, cleaning, locating, and diagnostic services across the Las Vegas Valley.',
      },
      /*
        Each label names its own market rather than repeating one
        string three times (18 §47). The home page keeps the shared
        wording, where the card heading sits directly above the link.
      */
      actionLabels: {
        [id('market-st-louis-mo')]: 'Explore St. Louis Service Locations',
        [id('market-san-diego-ca')]: 'Explore San Diego Service Locations',
        [id('market-las-vegas-nv')]: 'Explore Las Vegas Service Locations',
      },
    },
    /*
      ==========================================================================
      SIX ENTRIES ADDED 2026-09-07. Three to nine.
      ==========================================================================
      ⚠ INTERLEAVED, NOT APPENDED, so related questions sit together:
      coverage first, then who we are, then what we do and do not do,
      then hours, then the out-of-market case beside "how do I find
      out".

      ⚠ EVERY FACT WAS CHECKED AGAINST DATA, NOT AGAINST THE DRAFT.
        hours       `data/markets/markets.ts` - all three markets carry
                    'Monday to Friday, 8:00am - 4:00pm', so stating them
                    once for every market is accurate rather than a
                    generalisation. Weekends closed per
                    `data/business/offers.ts`.
        same-day    DEC-088's approved hedge, kept word for word in
                    shape: "sometimes", "never guaranteed", weekday
                    hours named. It must never harden into a promise.
        one company 01 §776 - "one company with multiple markets rather
                    than three unrelated brands".
        no repair   CLAUDE.md §9. The guardrail, stated plainly.

      ⚠ NO `FAQPage` SCHEMA. Deferred by standing decision, same as the
      market hubs.

      ⚠ NO EM DASHES, and the hours are written "8:00am to 4:00pm"
      rather than with the en dash the data uses, because this is
      visitor-facing prose rather than a data field.
    */
    faq: [
      {
        question: 'What areas does The Sewer Pros serve?',
        answer: (
          <p>
            The Sewer Pros currently works across three service markets: St.
            Louis, Missouri; San Diego, California; and Las Vegas, Nevada.
            Each market page above lists the communities we currently feature
            for that area, though our coverage is not limited to only the
            communities named there.
          </p>
        ),
      },
      {
        question: 'Do you have a local office I can visit?',
        answer: (
          <p>
            No. We&rsquo;re a service-area business: work happens at your
            property, not a storefront. See the markets listed above for where
            we currently work.
          </p>
        ),
      },
      {
        question: 'Is The Sewer Pros the same company in every market?',
        answer: (
          <p>
            Yes. The Sewer Pros is one company operating across all three
            service markets, not a franchise or a network of independently
            owned locations. Service availability, hours, and pricing may
            still vary by market, but the business behind the work is the
            same.
          </p>
        ),
      },
      {
        question:
          'Does The Sewer Pros offer the same services in every market?',
        answer: (
          <p>
            The core services, sewer camera inspection, sewer diagnostics,
            sewer cleaning, hydro jetting, and sewer line locating, are the
            focus in every market. Exact service availability can still vary
            by location, so check the relevant market page above or contact
            us to confirm what is currently available for your property.
          </p>
        ),
      },
      {
        question: 'Does The Sewer Pros repair or replace sewer lines?',
        answer: (
          <p>
            No. The Sewer Pros specializes in independent sewer inspection,
            diagnostics, locating, and cleaning, not repair or replacement.
            If an inspection shows that repair or replacement may be needed,
            we can document what we found so you have clear evidence before
            deciding on next steps or getting a second opinion.
          </p>
        ),
      },
      {
        question: 'Do you offer emergency service?',
        answer: (
          <p>
            No. We operate standard weekday hours in every market and do not
            provide 24/7 or emergency service.
          </p>
        ),
      },
      {
        question: "What are The Sewer Pros' hours in these markets?",
        answer: (
          <p>
            The Sewer Pros operates Monday to Friday, 8:00am to 4:00pm, in
            every service market, and is closed Saturday and Sunday. A
            same-day appointment is sometimes available within those hours,
            but it is never guaranteed.
          </p>
        ),
      },
      {
        question:
          'Do you serve areas outside St. Louis, San Diego, and Las Vegas?',
        answer: (
          <p>
            Our published coverage today is limited to the St. Louis, San
            Diego, and Las Vegas service markets. If your property is outside
            those areas, contact us directly with your location and we can
            tell you quickly whether we are able to help.
          </p>
        ),
      },
      {
        question: 'How do I find out if you serve my area?',
        answer: (
          <p>
            Check the market pages above for coverage, or contact us directly
            with your location, and we can tell you quickly whether we are
            currently working there.
          </p>
        ),
      },
    ],
  },

  [id('hub-audiences')]: {
    hero: {
      title: 'Who We Serve',
      intro: (
        <p>
          Property owners, buyers, real estate professionals, property
          managers, and commercial operators, each arriving with a different
          question about the same underground pipe.
        </p>
      ),
    },
    // No brand suffix: the root title template appends it.
    seoTitle: 'Who We Serve',
    metaDescription:
      'Sewer inspection, diagnostics, and cleaning for home buyers, sellers, real estate agents, home inspectors, property managers, and HOA communities across St. Louis, San Diego, and Las Vegas.',
    body: (
      <>
        <h2>Different decisions, different evidence</h2>
        <p>
          A homeowner with a recurring backup wants to know why it keeps
          happening. A buyer wants to know what they are taking on before
          committing. An agent wants a straight answer they can pass to a
          client without it becoming a sales process. A property manager wants
          to stop absorbing the same call every few months.
        </p>
        <p>
          The inspection is broadly the same work in each case. What differs is
          which findings matter, how urgently, and what decision they feed.
        </p>

        <h2>What is common to all of them</h2>
        <p>
          Everyone in that list benefits from the same thing: documented
          evidence of the line&rsquo;s condition, produced by a company that
          does not stand to gain from a particular interpretation of it.
        </p>
      </>
    ),
    // Plain strings, not JSX: apostrophes are literal ’ here, the
    // convention this codebase already uses for string values
    // (content/pages/audiences.tsx §175). `&rsquo;` is JSX-only and
    // would render as visible markup in this position.
    items: [
      { pageId: id('aud-home-buyers'), description: 'Inspect the line before you commit to a property.' },
      { pageId: id('aud-home-sellers'), description: 'Find out what a buyer’s inspection will find.' },
      { pageId: id('aud-real-estate-agents'), description: 'Support transactions with documented findings.' },
      { pageId: id('aud-home-inspectors'), description: 'Camera findings alongside a general inspection.' },
      { pageId: id('aud-property-managers'), description: 'Diagnose recurring problems instead of repeating the same call.' },
      { pageId: id('aud-hoa-communities'), description: 'Evidence a board can actually make a decision on.' },
    ],
  },

  [id('hub-resources')]: {
    hero: {
      title: 'Sewer & Drain Resources',
      intro: (
        <p>
          Practical explanations of what inspections show, what findings mean,
          and how to make sense of the evidence you are given.
        </p>
      ),
    },
    items: [
      {
        pageId: id('res-camera-report'),
        description: 'What a written inspection report should contain.',
      },
      {
        pageId: id('res-read-video'),
        description: 'How to interpret sewer camera footage yourself.',
      },
    ],
  },
}

/* ==========================================================================
   Core pages
   ========================================================================== */

export const coreContent: Partial<Record<PageId, CorePageContent>> = {
  [id('core-about')]: {
    hero: {
      title: 'About The Sewer Pros',
      intro: (
        <p>
          A sewer and drain specialist focused on inspection, diagnostics,
          locating, and cleaning, deliberately not on repair.
        </p>
      ),
    },
    body: (
      <>
        <h2>What we do</h2>
        <p>
          We inspect sewer and drain lines with cameras, diagnose why lines
          block, locate where lines run, and clean them. That is the whole of
          it, and the boundary is intentional.
        </p>

        <h2>What we do not do</h2>
        <p>
          We do not perform sewer repair, replacement, lining, pipe bursting, or
          excavation. When an inspection turns up a condition that warrants
          structural work, the next conversation is with a qualified repair
          contractor, not with us.
        </p>

        <h2>Why that separation matters</h2>
        <p>
          Sewer findings are frequently ambiguous. A joint might be a
          maintenance item or the beginning of a failure; footage often supports
          more than one reading.
        </p>
        <p>
          A company that both diagnoses and sells the remedy is interpreting
          that ambiguity while standing to gain from one interpretation. That is
          a structural position, not a comment on anyone&rsquo;s integrity, but
          it is a position we chose not to occupy.
        </p>

        <h2>How we work</h2>
        <p>
          We put a camera in the line, document what is visible, and tell you
          what the footage supports. Where a line cannot be properly assessed,
          we say that rather than producing a confident conclusion the evidence
          does not carry.
        </p>
        <p>
          Where cleaning is likely to resolve the problem, we clean it. Where it
          is not, we will tell you that too.
        </p>

        <h2>The business</h2>
        <p>
          The Sewer Pros has operated since 2011, with over 100 years of
          combined experience across the team. We are locally owned and family
          operated.
        </p>
        <p>
          We work across the St. Louis area (St. Louis County, St. Charles
          County, Jefferson County and surrounding areas) and across San Diego
          County, which we have served since 2015. We are currently launching in
          the Las Vegas Valley.
        </p>

        <h2>Municipal lateral reporting</h2>
        <p>
          Many municipalities in the St. Louis area run sewer lateral repair
          programs, and most require documentation from a licensed plumber
          before they will consider a claim. We are licensed through most of
          those programs to submit reports.
        </p>
        <p>
          We document conditions; the municipality decides claims. We cannot
          promise an outcome, and any company that does is describing a
          decision that is not theirs to make.
        </p>

        <h2>Affiliations</h2>
        <ul>
          <li>St. Louis Association of Realtors</li>
          <li>American Society of Home Inspectors (ASHI)</li>
          <li>Women&rsquo;s Council of Realtors</li>
          <li>St. Charles Realtors</li>
        </ul>
      </>
    ),
    relatedPageIds: [id('cmp-independent-vs-repair'), id('hub-services')],
  },

  [id('core-contact')]: {
    hero: {
      title: 'Contact',
      intro: <p>Get in touch about an inspection, a recurring problem, or a commercial property.</p>,
    },
    body: (
      <>
        <h2>St. Louis</h2>
        <ul>
          <li>
            Phone: <a href="tel:+13148211600">(314) 821-1600</a>
          </li>
          <li>
            Email:{' '}
            <a href="mailto:info@thesewerpros.com">info@thesewerpros.com</a>
          </li>
          <li>Monday to Friday, 8:00am to 4:00pm. Closed weekends.</li>
        </ul>
        <p>
          Serving St. Louis County, St. Charles County, Jefferson County,
          Missouri, and surrounding areas.
        </p>

        <h2>San Diego</h2>
        <ul>
          <li>
            Phone: <a href="tel:+18582572888">(858) 257-2888</a>
          </li>
          <li>
            Email:{' '}
            <a href="mailto:admin@thesewerpros.com">admin@thesewerpros.com</a>
          </li>
          <li>Monday to Friday, 8:00am to 4:00pm. Closed weekends.</li>
        </ul>
        <p>
          Working across San Diego, San Marcos, Carlsbad, Escondido,
          Oceanside, Chula Vista, and Mission Valley.
        </p>

        <h2>Las Vegas</h2>
        <ul>
          <li>
            Phone: <a href="tel:+17252924030">(725) 292-4030</a>
          </li>
          <li>
            Email:{' '}
            <a href="mailto:bookaninspection@thesewerpros.com">
              bookaninspection@thesewerpros.com
            </a>
          </li>
          <li>Monday to Friday, 8:00am to 4:00pm. Closed weekends.</li>
        </ul>
        <p>
          Working across Las Vegas, Henderson, North Las Vegas, and
          Summerlin.
        </p>

        <h2>Why there is no address here</h2>
        <p>
          We are a service-area business. The work happens at your property
          (in the ground, at a cleanout) rather than at a counter you visit, so
          there is no storefront address to list.
        </p>

        <h2>What to have ready</h2>
        <p>
          Whichever way you get in touch, these details make the first
          conversation more useful:
        </p>
        <ul>
          <li>What is happening: a backup, slow drainage, or a planned inspection</li>
          <li>Whether it has happened before, and how often</li>
          <li>Which fixtures are affected</li>
          <li>What work has already been done, and by whom</li>
          <li>Whether there is an accessible cleanout</li>
          <li>Whether the property is residential or commercial</li>
        </ul>
      </>
    ),
    relatedPageIds: [id('hub-services'), id('core-faq')],
  },

  [id('core-faq')]: {
    hero: {
      title: 'Sewer & Drain FAQs',
      intro: <p>Common questions about inspections, cleaning, and what findings mean.</p>,
    },
    faq: [
      {
        question: 'What does a sewer camera inspection show?',
        answer: (
          <p>
            Visible conditions inside the accessible line: blockages, root
            intrusion, separated or offset joints, visible cracks, standing
            water, debris, and changes in pipe material. It cannot guarantee
            detection of every hidden defect.
          </p>
        ),
      },
      {
        question: 'Do you perform sewer repairs or replacement?',
        answer: (
          <p>
            No. We inspect, diagnose, locate, and clean. Structural repair,
            replacement, lining, and excavation are work for a qualified repair
            contractor.
          </p>
        ),
      },
      {
        question: 'Does the line need cleaning before it can be inspected?',
        answer: (
          <p>
            Sometimes. Heavy buildup or standing water can obscure the pipe
            wall. Where that prevents assessment, cleaning first produces
            footage that shows the pipe rather than what was sitting in it.
          </p>
        ),
      },
      {
        question: 'Why does my line keep backing up after being cleared?',
        answer: (
          <p>
            Recurrence usually indicates something the clearing is not
            addressing: roots entering at a defect, a section holding water, or
            damage creating a catch point. That is a case for inspection rather
            than another clearing.
          </p>
        ),
      },
      {
        question: 'Is hydro jetting always better than snaking?',
        answer: (
          <p>
            No. They suit different problems, and jetting can be the wrong
            choice in a line that is already structurally compromised.
          </p>
        ),
      },
      {
        question: 'Should I get a sewer inspection before buying a property?',
        answer: (
          <p>
            It is worth considering. The sewer line is underground and not
            visible without a camera, and a general property inspection does not
            usually include one.
          </p>
        ),
      },
      {
        question: 'Can you tell me who is responsible for the line?',
        answer: (
          <p>
            No. Responsibility for portions of a sewer line varies by
            jurisdiction and is a question for the relevant authority or your
            own adviser. We document the condition of the line, not the legal
            position.
          </p>
        ),
      },
    ],
    relatedPageIds: [id('hub-services'), id('hub-resources')],
  },
}

/* ==========================================================================
   Resources — the two that need no municipal verification
   ========================================================================== */

export const resourceContent: Partial<Record<PageId, ResourcePageContent>> = {
  [id('res-camera-report')]: {
    hero: {
      eyebrow: 'Guide',
      title: 'What Is Included in a Sewer Camera Inspection Report?',
    },
    directAnswer: (
      <p>
        A useful sewer camera inspection report identifies the property and
        date, states where the camera entered the line and how far it
        travelled, describes each observed condition with its distance along
        the line, notes any section that could not be assessed and why, and
        includes the footage itself.
      </p>
    ),
    body: (
      <>
        <h2>Why the report matters as much as the inspection</h2>
        <p>
          The inspection produces evidence. The report is what makes that
          evidence usable later: when comparing quotes, revisiting a decision,
          or showing someone else what was found.
        </p>

        <h2>What a report should contain</h2>
        <h3>Identification</h3>
        <p>
          The property, the date, and which line was inspected. Obvious, and
          routinely omitted.
        </p>

        <h3>Access point and extent</h3>
        <p>
          Where the camera entered, and how far along the line it reached. The
          extent matters: a report covering thirty feet of a longer line is not
          a report on the whole line.
        </p>

        <h3>Observations with distances</h3>
        <p>
          Each condition should be tied to a distance along the line. &ldquo;Root
          intrusion at a joint&rdquo; is an observation; &ldquo;root intrusion
          at a joint approximately 42 feet from the cleanout&rdquo; is
          actionable: it can be located, quoted against, and re-checked.
        </p>

        <h3>What could not be assessed</h3>
        <p>
          Sections obscured by standing water or buildup, points where the
          camera could not pass, and any part of the line not reached. This is
          the section most often missing and among the most important: it
          tells you the limits of what the inspection established.
        </p>

        <h3>The footage</h3>
        <p>
          You should be able to keep a copy. It is evidence about your property.
        </p>

        <h2>What a report should not do</h2>
        <p>
          It should not assert conditions the camera cannot establish: pipe
          wall thickness from outside, soil conditions, or the remaining life of
          a line. It also should not present a repair recommendation as a
          finding; what was observed and what someone concludes from it are
          different things, and worth being able to separate.
        </p>

        <h2>Questions worth asking</h2>
        <ul>
          <li>How far along the line did you get, and what stopped you?</li>
          <li>Which sections could you not assess clearly?</li>
          <li>At what distance is each condition you noted?</li>
          <li>Was the line cleaned before this inspection?</li>
          <li>Can I have a copy of the footage?</li>
        </ul>
      </>
    ),
    faq: [
      {
        question: 'Should the report include a repair quote?',
        answer: (
          <p>
            It can, but the observations and the recommendation should be
            distinguishable. Being able to separate what was seen from what
            someone proposes doing about it is what makes a second opinion
            possible.
          </p>
        ),
      },
    ],
    relatedPageIds: [id('res-read-video'), id('svc-sewer-camera-inspection')],
  },

  [id('res-read-video')]: {
    hero: {
      eyebrow: 'Guide',
      title: 'How to Read a Sewer Camera Inspection Video',
    },
    directAnswer: (
      <p>
        Watch for four things: standing water where the line should drain,
        joints that are separated or misaligned, roots or material entering the
        pipe, and any change in the pipe&rsquo;s shape or surface. Note the
        distance counter when you see them: position is what makes an
        observation useful.
      </p>
    ),
    body: (
      <>
        <h2>What you are looking at</h2>
        <p>
          The camera travels along the inside of the pipe, lit from the head.
          The picture is close, wide-angle, and often wet, which is why
          footage can look alarming when it is normal, and normal when it is
          not.
        </p>

        <h2>Standing water</h2>
        <p>
          A line should carry water away. Water sitting in a section suggests
          that part of the line is not draining: a low spot, a loss of slope,
          or a restriction downstream. Watch whether the camera passes through
          water and out the other side, or whether it stays submerged.
        </p>

        <h2>Joints</h2>
        <p>
          Joints appear as regular seams. What matters is whether they line up.
          A visible gap, a step where one section sits higher than the next, or
          daylight-like darkness at a seam suggests separation or offset, and
          those are the points where roots and material typically enter.
        </p>

        <h2>Roots and intrusion</h2>
        <p>
          Roots enter at defects, so their presence marks the defect. Fine
          hair-like growth and heavier mass differ in severity but both indicate
          an opening. Note where along the line they appear.
        </p>

        <h2>Changes in the pipe itself</h2>
        <p>
          Watch for the pipe changing material or diameter, scale or buildup
          coating the wall, cracks, and any point where the round profile
          deforms. A change of material is not itself a problem: it is
          information about how the line was built or previously worked on.
        </p>

        <h2>The distance counter</h2>
        <p>
          Most footage displays distance. It is the single most useful thing on
          screen: an observation with a distance can be located on the property,
          quoted against precisely, and compared to a later inspection.
        </p>

        <h2>What footage cannot tell you</h2>
        <p>
          It shows the inside surface of the accessible line, at that moment.
          It does not show wall thickness, the ground around the pipe, or how
          long a condition has existed. Obscured sections are unknown, not
          fine, and treating them as fine is the most common misreading.
        </p>

        <h2>If you are unsure</h2>
        <p>
          Ask whoever inspected the line to talk you through the footage against
          the distances. If the reading matters to a significant decision,
          getting a second view of the same footage is reasonable.
        </p>
      </>
    ),
    faq: [
      {
        question: 'The video looks bad. Does that mean the line is failing?',
        answer: (
          <p>
            Not necessarily. Sewer footage frequently looks worse than the
            condition warrants: the camera is close, the environment is wet,
            and normal wear reads dramatically. What matters is specific
            observations at specific distances, not the general impression.
          </p>
        ),
      },
    ],
    relatedPageIds: [id('res-camera-report'), id('svc-sewer-camera-inspection')],
  },
}
