/**
 * Las Vegas market content — 5 live pages. The City of Las Vegas, City of
 * Henderson and City of North Las Vegas location pages live in
 * `las-vegas-las-vegas.tsx`, `las-vegas-henderson.tsx` and
 * `las-vegas-north-las-vegas.tsx` and the Summerlin location page in
 * `las-vegas-summerlin.tsx` are registered below.
 *
 * Authority: docs/04-master-page-build-list.md §10.3, §14
 *            docs/22-decisions-change-log.md DEC-080, DEC-063, DEC-073
 *            docs/14-content-specification.md §40, §42, §79
 *            CLAUDE.md §30, §73
 *            Las Vegas Market Research, 2026-08-16 / 2026-08-17
 *
 * ===========================================================================
 * INDEXATION GATE RELEASED — DEC-080
 * ===========================================================================
 * All five pages carry `status: 'launch'` and `indexable: true`. They
 * appear in the sitemap, in navigation, and in indexable link modules
 * automatically, because those systems read the approved page registry
 * rather than a hardcoded market list.
 *
 * DEC-063 held these pages back until its eight release criteria were
 * satisfied. DEC-080 (2026-08-17) records that they are, and promoted
 * the five records.
 *
 * ⚠ Criterion 7 — Nevada licensing — is satisfied by the owner's
 * PRIVATE confirmation, recorded in `22-decisions-change-log.md` only.
 * No licensing claim appears on any page, and none should be added.
 * DEC-072's stance is unchanged: licence numbers are not published.
 * The confirmation lives in governance; it is not site copy.
 *
 * ---------------------------------------------------------------------------
 * ⚠ "OPERATIONAL", NEVER "ESTABLISHED"
 * ---------------------------------------------------------------------------
 * The owner updated Las Vegas from "currently launching" to
 * "operational" on 2026-08-17 (DEC-074). The copy reflects that.
 *
 * Releasing the gate does NOT license a track record, and this is the
 * easiest thing to get wrong now that the pages are indexed. 01 §20
 * forbids importing another market's facts — St. Louis's 2011 founding
 * and San Diego's 2015 stay where they belong — so no page below claims
 * years of local service, local volume, review counts, or a local
 * office. Indexation changes who sees these pages, not what the
 * business can say on them.
 *
 * The SERVICE MENU is confirmed. DEC-076 (2026-08-17) supersedes
 * DEC-075's 13 of 18: Las Vegas matches San Diego at 17 of 18, the
 * eighteenth being St. Louis lateral reporting, which is
 * `not_applicable` here rather than a gap. No page cites a count.
 *
 * ⚠ Four commercial services remain `capability_validate_packaging` in
 * EVERY market, Las Vegas included, so commercial packaging still must
 * not be presented as an established offering (06 §43).
 *
 * ---------------------------------------------------------------------------
 * WHY THE HOUSING ANGLE IS ABSENT HERE
 * ---------------------------------------------------------------------------
 * This is the newest housing of the three markets by a wide margin —
 * even the oldest of the four locations is roughly 13% pre-1970. The
 * "aging pipe" framing that carries St. Louis has almost no purchase.
 *
 * Median years are cited where they support an argument about what
 * actually fails on newer lines, and nowhere as a risk signal.
 */

import type { LocationPageContent, MarketPageContent, PageId } from '@/types'

import { ApprovedInlineLink } from '@/components/links/ApprovedInlineLink'
import { CtaBenefit } from '@/components/sections'
import { lasVegasCityContent } from './las-vegas-las-vegas'
import { hendersonContent } from './las-vegas-henderson'
import { northLasVegasContent } from './las-vegas-north-las-vegas'
import { summerlinContent } from './las-vegas-summerlin'
import {
  homeServiceCards,
  approvedServicesTitle,
  approvedServicesIntro,
} from './home-service-cards'

const id = (value: string): PageId => value as PageId

/* ==========================================================================
   Market hub — /las-vegas-nv/
   ========================================================================== */

export const lasVegasMarketContent: MarketPageContent = {
  hero: {
    eyebrow: 'Las Vegas Valley, Nevada',
    title: 'Sewer inspection and cleaning in the Las Vegas Valley',
    intro: (
      <p>
        Independent camera inspection, diagnostics, and cleaning across the
        Las Vegas Valley, from a company that documents the condition of the
        line and does not sell the repair.
      </p>
    ),
  },
  /*
    The still is the hero video's poster: what reduced-motion,
    data-saver, and pre-hydration visitors see, and the LCP element.
    The clip layers over it and does not replace it.
  */
  heroBackground: {
    src: '/images/markets/las-vegas-nv/hero/the-sewer-pros-las-vegas-residential-sewer-camera-inspection-hero.webp',
    alt: 'Sewer camera monitor and reel beside an open cleanout in the front yard of a desert-landscaped home',
    source:
      'Supplied by the business owner, 2026-09-25. Rendered scene, not a photograph of a Sewer Pros job.',
  },
  heroVideo: {
    src: '/images/markets/las-vegas-nv/hero/the-sewer-pros-las-vegas-residential-sewer-camera-inspection-hero.mp4',
    describes: 'Residential sewer camera inspection clip supplied for the Las Vegas hub hero',
    source:
      'Supplied by the business owner, 2026-09-22. Rendered scene, not footage of a Sewer Pros job.',
  },
  /*
    ⚠ THE FORM DEFAULTS TO THIS MARKET, NOT ST. LOUIS. `heroFormMarketId`
    feeds both the hero form and the closing one. Copying this block to
    another market without changing the id would mislabel every lead
    that page produces, which 19 §32's attribution and 01 §20's
    market-separation rule both exist to prevent.
  */
  showHeroForm: true,
  heroFormMarketId: 'las-vegas-nv',
  /*
    ⚠ SET EXPLICITLY, WHERE BOTH USED TO FALL BACK TO THE HERO TITLE.
    Keyword round 2 (2026-09-07) makes `sewer inspection las vegas` the
    primary term; the hero title reads "Sewer inspection and cleaning in
    the Las Vegas Valley", which is close but does not carry it.

    ⚠ NO BRAND SUFFIX ON `seoTitle`. The root title template appends
    "| The Sewer Pros" - writing it here would double it.

    ⚠ THE DESCRIPTION MAKES NO CLAIM THE PAGE CANNOT KEEP. No price, no
    same-day promise, no emergency service, no address. "Evidence before
    major sewer decisions" is the differentiator stated as a model, not
    a guarantee.
  */
  seoTitle: 'Sewer Inspection Las Vegas',
  metaDescription:
    'Independent sewer camera inspection, diagnostics, and cleaning across the Las Vegas Valley. Evidence before major sewer decisions, with no repair upselling. Schedule an inspection today.',
  /*
    ==========================================================================
    COMPANY EXPERIENCE. Added 2026-09-07 on owner direction.
    ==========================================================================
    ⚠⚠ THIS MARKET STATES NO HISTORY AND NO INSPECTION COUNT, AND THAT
    IS THE STRICTEST VERSION OF THE THREE FOR A REASON.

    The brief said to publish "since 2011" and "more than 100,000 sewer
    camera inspections" ONLY after confirming both remain approved in
    the authoritative business documentation. Neither is approved here,
    and Las Vegas is the market where importing them would be most
    misleading:

      'over 100,000 camera inspections'  DEC-072 scopes it to
          `/st-louis-mo/` ONLY - see `MARKET_SCOPED_CLAIMS.stLouisOnly`.

      '2011'  is ST. LOUIS's founding year. Las Vegas has NO founding
          year at all: `marketOperatingDetail['las-vegas-nv'].foundingYear`
          is 0, and its own comment says why - the market is newly
          launching and importing St. Louis's 2011 or San Diego's 2015
          would assert an operating history that does not exist
          (DEC-073, DEC-077, 01 §20).

    The supplied copy framed both as "company-wide", which is exactly
    the framing DEC-072 declines: the figure is a St. Louis SITE claim,
    not a company statistic the project has evidence for. So the
    opening paragraph leads on the company's specialisation and its
    model rather than on a number, and the three proof cards carry
    approved positioning (01 §2.2, §3, §4) instead of statistics.

    ⚠ DO NOT ADD A YEAR OR A COUNT HERE. Either needs a new owner
    decision, not an edit to this file.

    ⚠ THE SERVICE LIST IS SAFE TO STATE, AND THIS IS THE ONE PLACE THAT
    IS EASY TO GET BACKWARDS. DEC-076 confirmed 17 of 18 services for
    this market and DEC-080 released the indexation gate on that basis,
    recording that Las Vegas "mirrors San Diego exactly". Naming these
    seven services is approved; the eighteenth (St. Louis lateral
    reporting) is the only one that is not applicable.

    Counts and the supersession are in `data/markets/markets.ts`, which
    carried the opposite claim until 2026-09-07.

    ⚠ NO EMERGENCY, WEEKEND, OR 24/7 LANGUAGE. Published hours are
    weekdays only and affirmatively rule all three out (01 §35).
  */
  /*
    ⚠ `editorial`, WHERE THIS MARKET DEFAULTED TO `aside` (2026-09-08).
    `aside` puts the blocks in a 7/12 column and the proof cards in a
    5/12 sidebar. With the blocks moved into sections of their own that
    arrangement would have left three narrow cards beside an empty
    column. `editorial` is the variant with a heading-and-image split
    and a full-width proof row, which is the layout the brief asks for
    and the one St. Louis already uses.

    ⚠ IT DOES NOT MAKE THIS PAGE A COPY OF ST. LOUIS. The variant is
    shared; the copy, the image, the proof cards, the scenarios and the
    coverage panel below are all this market's own, and St. Louis keeps
    four editorial blocks this page does not have.
  */
  experienceVariant: 'editorial',
  experience: {
    /*
      2896x2172, a true 4:3, so the frame crops nothing.
    */
    image: {
      src: '/images/markets/las-vegas-nv/services/the-sewer-pros-las-vegas-sewer-inspection-experience.webp',
      alt: 'Sewer camera inspection equipment beside a Las Vegas Valley home',
      source:
        'Supplied by the business owner, 2026-09-08. Rendered scene, not a photograph of a Sewer Pros job.',
    },
    eyebrow: 'Company experience, local service',
    title: 'Sewer inspection experience Las Vegas property owners can use',
    intro: [
      'The Sewer Pros is a sewer and drain specialist rather than a general plumbing company, and Las Vegas customers receive the same evidence-first approach the company is built on. That matters when you need to understand a recurring sewer backup, investigate a slow or blocked line, evaluate a property before purchase, or determine whether sewer cleaning is the appropriate next step.',
      'Our Las Vegas sewer services include sewer camera inspection, sewer cleaning, hydro jetting, sewer line locating, recurring backup diagnosis, pre-purchase sewer inspection, and preventative sewer maintenance. We focus on identifying and documenting visible conditions inside accessible portions of the sewer line, then explaining what the evidence means in plain language.',
    ],
    /*
      ⚠ `blocks` WAS REMOVED HERE, NOT DELETED FROM THE SITE
      (2026-09-08). Its three sub-headings each became a section of
      their own further down this file:

        "What does a Las Vegas sewer camera inspection provide?"
            -> `deliverables`
        "Make your next decision with better information"
            -> `scenarios`
        "An inspection-first approach without a repair sale"
            -> `independence`

      `coverage` and `actions` moved to `regionalCoverage`. Every claim
      survives; see those fields.
    */
    proof: [
      {
        title: 'Sewer and Drain Specialists',
        body: 'We focus on sewer inspection, diagnostics, locating, and cleaning, giving Las Vegas Valley property owners specialized information about what is happening inside the line.',
        icon: 'experience',
        accent: 'blue',
      },
      {
        title: 'Documented Camera Evidence',
        body: 'Visible conditions are recorded and explained so you can review the findings instead of relying only on symptoms or a verbal description.',
        icon: 'camera',
        accent: 'blue',
      },
      {
        title: 'No Repair-Driven Upselling',
        body: 'Because we do not perform sewer repair or replacement, the inspection findings remain separate from a repair sale.',
        icon: 'independence',
        accent: 'green',
      },
    ],
  },
  /*
    ⚠ THE HOME PAGE'S "What we do" SECTION, NOT A LOCAL VARIANT OF IT
    (owner direction, 2026-09-07).

    This hub used to declare FOUR services with NO artwork, which meant
    `ServiceIndex` fell back to its plain row list while the home page
    rendered the nine-card image mosaic - two different presentations
    of the same question on the same site. Both pages now read one
    array.

    ⚠ ALL NINE ARE SAFE TO STATE HERE, AND THAT WAS CHECKED RATHER THAN
    ASSUMED. 01 §20 and §26 forbid claiming a service in a market that
    has not confirmed it. Every service in `coreServiceCards` carries
    an IDENTICAL registry status across all three markets, and DEC-080
    records the same finding: this market "mirrors San Diego exactly".
    The one St. Louis-specific service is `not_applicable` here and is
    deliberately absent from the shared array.

    ⚠ DO NOT ADD A LOCAL SERVICE TO THIS LIST. A service this market
    offers and the others do not needs a registry status first; see the
    St. Louis file, which composes rather than appends, and says why.
  */
  /*
    ==========================================================================
    THE AUTHORITY STACK. Four sections carved out of `experience`
    (owner direction, 2026-09-08). Mirrors the San Diego build.
    ==========================================================================
    ⚠ NOTHING WAS INVENTED AND NOTHING WAS DROPPED. Every claim below
    came from the three `blocks`, the `coverage` panel and the
    `actions` that used to sit inside `ExperienceSection`.

    ⚠ ALL THREE REQUESTED IMAGES EXIST AND ARE WIRED, unlike the San
    Diego build, which shipped image-free and was completed the next
    day. Two are 2896x2172 (true 4:3) and the CTA frame is 3344x1882
    (16:9), all webp between 398 and 426 KB.

    ⚠ NO LAS VEGAS BUSINESS FACT IS ADDED. No office, no address, no
    founding year, no inspection total, no GBP detail, no licence, no
    response time. This market has none of those published (DEC-076,
    DEC-080 confirm the SERVICES only), and the copy stays on what the
    company does rather than on how long it has done it here. The
    experience band above deliberately makes no local-history claim
    for the same reason.

    ⚠ EVERY DESCRIPTION SAYS "MAY" OR "CAN". CLAUDE.md §24 forbids
    guaranteeing that a defect is visible or that a cause is
    established.
  */
  /*
    ⚠ THIS MARKET LEADS WITH WHAT THE INSPECTION PROVIDES, where San
    Diego leads with the conditions it may reveal. Both orders are
    authored rather than implied by field order, and the surfaces
    alternate from whichever comes first, so neither page can grow an
    adjacency fault by being reordered.

    ⚠ NO `conditions` GRID HERE. This market's brief asked for four
    explanatory sections, not five, and the conditions list it would
    have carried is already inside the deliverables intro below.
  */
  authorityOrder: ['deliverables', 'scenarios'],
  deliverables: {
    eyebrow: 'Visible evidence',
    title: 'See what is happening inside the sewer line',
    intro: [
      'A Las Vegas sewer camera inspection sends a camera through the accessible portion of the sewer line to document its visible condition. The footage may reveal blockages, root intrusion, scale, grease buildup, offset joints, cracks, standing water, or other conditions contributing to slow drains and recurring backups.',
      'The camera shows what is visible inside the accessible line. It does not see through pipe walls, reach inaccessible portions, or definitively identify every underground problem.',
    ],
    image: {
      src: '/images/markets/las-vegas-nv/services/the-sewer-pros-las-vegas-sewer-camera-evidence.webp',
      alt: 'Sewer camera monitor displaying inspection evidence at a Las Vegas home',
      source:
        'Supplied by the business owner, 2026-09-08. Rendered scene, not a photograph of a Sewer Pros job.',
    },
    /*
      ⚠ THREE ROWS, NOT ANOTHER THREE-CARD GRID. The brief asked for
      this explicitly and the page has two card grids below it already.
      `DeliverablesSection` renders a checklist beside the frame, which
      is the variation.
    */
    items: [
      {
        title: 'Recorded camera footage',
        description:
          'Review the accessible portions of the sewer line instead of relying only on a verbal description.',
        icon: 'camera',
      },
      {
        title: 'Documented visible conditions',
        description:
          'See the conditions observed during the inspection and where they appear in the accessible line.',
        icon: 'document',
      },
      {
        title: 'A clear explanation',
        description:
          'Understand what the footage shows and which next steps may be reasonable for the property.',
        icon: 'explanation',
      },
    ],
  },
  scenarios: {
    eyebrow: 'Common reasons to inspect',
    title: 'Make your next sewer decision with better information',
    intro:
      'A sewer camera inspection can help when symptoms keep returning, when the condition of a line is unknown, or when you need documentation before making a larger property or maintenance decision.',
    /*
      ⚠ ICONS, NOT PHOTOGRAPHS, ON INSTRUCTION. Two frames sit above
      this section and a third grid of images would be the repetition
      the brief warns about.

      ⚠ PRE-PURCHASE IS THE FEATURED TILE, as on San Diego: it is the
      situation with a deadline, and 26 names the real estate cluster a
      strategic priority.
    */
    /*
      ⚠ `masonry` REPLACED THE DEFAULT CORNER TILE HERE (2026-09-08).
      The corner tile gave the feature two rows of a shared grid track,
      and the two compact cards beside it were together much taller
      than the feature's own content, so the mosaic shipped with a few
      hundred pixels of empty white under the feature and the row below
      could not start until the right-hand pair had cleared. `masonry`
      splits the mosaic into two independently flowing columns, so the
      pair below the feature moves up into that space.

      ⚠ SAN DIEGO IS UNAFFECTED. It sets `banner` and keeps it.

      ⚠ THE COLUMN SPLIT BELOW IS EDITORIAL. The three symptom
      situations stack in the narrow column; pre-purchase and the two
      planning situations take the wide one. Below `lg` the columns
      collapse and the cards read in the order written here.
    */
    featureLayout: 'masonry',
    items: [
      {
        title: 'Pre-purchase due diligence',
        description:
          'Review the accessible sewer line before closing so a hidden condition does not become an unexpected property expense.',
        image: {
          src: '/images/markets/las-vegas-nv/services/the-sewer-pros-pre-purchase-sewer-camera-inspection.webp',
          alt: 'Pre-purchase sewer camera inspection at a Las Vegas Valley property',
          source:
            'Supplied by the business owner, 2026-09-08. Rendered scene, not a photograph of a Sewer Pros job.',
        },
        icon: 'document',
        featured: true,
      },
      {
        title: 'Recurring sewer backups',
        description:
          'Investigate why the sewer line continues to back up instead of clearing the same symptom repeatedly.',
        image: {
          src: '/images/markets/las-vegas-nv/services/the-sewer-pros-recurring-sewer-backups-camera-inspection.webp',
          alt: 'Camera inspection of a Las Vegas sewer line that keeps backing up',
          source:
            'Supplied by the business owner, 2026-09-08. Rendered scene, not a photograph of a Sewer Pros job.',
        },
        icon: 'camera',
      },
      {
        title: 'Multiple slow drains',
        description:
          'Determine whether several slow fixtures may be connected to a larger sewer-line restriction.',
        image: {
          src: '/images/markets/las-vegas-nv/services/the-sewer-pros-multiple-slow-drains-sewer-line-inspection.webp',
          alt: 'Inspection checking whether several slow drains share one sewer-line restriction',
          source:
            'Supplied by the business owner, 2026-09-08. Rendered scene, not a photograph of a Sewer Pros job.',
        },
        icon: 'explanation',
      },
      {
        title: 'Preventative maintenance planning',
        description:
          'Use inspection evidence to decide whether cleaning, monitoring, or a future inspection interval is appropriate.',
        image: {
          src: '/images/markets/las-vegas-nv/services/the-sewer-pros-preventative-sewer-maintenance-planning.webp',
          alt: 'Planning preventative sewer maintenance from inspection findings',
          source:
            'Supplied by the business owner, 2026-09-08. Rendered scene, not a photograph of a Sewer Pros job.',
        },
        icon: 'guidance',
        masonryColumn: 'primary',
      },
      {
        title: 'Property-management documentation',
        description:
          'Create a clearer record of visible sewer conditions when managing multifamily, rental, or commercial properties.',
        image: {
          src: '/images/markets/las-vegas-nv/services/the-sewer-pros-property-management-sewer-condition-documentation.webp',
          alt: 'Documenting visible sewer conditions for a managed Las Vegas property',
          source:
            'Supplied by the business owner, 2026-09-08. Rendered scene, not a photograph of a Sewer Pros job.',
        },
        icon: 'independence',
        masonryColumn: 'primary',
      },
      {
        title: 'Older or frequently blocked lines',
        description:
          'Check for visible buildup, root intrusion, joint problems, or other conditions that may contribute to repeated drainage issues.',
        image: {
          src: '/images/markets/las-vegas-nv/services/the-sewer-pros-older-frequently-blocked-sewer-line-inspection.webp',
          alt: 'Camera inspection of an older, frequently blocked sewer line',
          source:
            'Supplied by the business owner, 2026-09-08. Rendered scene, not a photograph of a Sewer Pros job.',
        },
        icon: 'decision',
      },
    ],
    action: {
      label: 'Schedule a Sewer Inspection',
      pageId: id('core-contact'),
    },
  },
  independence: {
    eyebrow: 'Evidence before expensive decisions',
    title: 'Inspection without a repair-driven incentive',
    /*
      ⚠ THIS IS THE BUSINESS MODEL, STATED ABOUT THIS BUSINESS. It must
      never be edited into a claim about what other contractors do or
      why (CLAUDE.md §9, §27).

      ⚠ NO BACKGROUND PHOTOGRAPH HERE, ON INSTRUCTION. The brand
      surface and the step cells carry the break on their own.
    */
    body: [
      'The Sewer Pros inspects, documents, locates, and cleans sewer lines. We do not perform sewer repair or replacement, so our role is to show you the visible condition of the line and explain the findings clearly.',
    ],
    steps: [
      {
        title: 'We inspect',
        description:
          'A professional sewer camera is run through the accessible line to observe its visible condition.',
        icon: 'camera',
      },
      {
        title: 'We document and explain',
        description:
          'The footage and findings are recorded and reviewed in plain language.',
        icon: 'document',
      },
      {
        title: 'You decide',
        description:
          'You choose whether cleaning, monitoring, a second opinion, or consultation with a repair provider makes sense.',
        icon: 'decision',
      },
    ],
  },
  /*
    ⚠ THE CLOSING PANEL, MOVED OUT OF `experience.coverage`, now on the
    supplied CTA frame. 3344x1882, and its composition is built for
    this: calm space left for the copy, the architectural detail
    through the middle, simpler space right. `Section` supplies the
    scrim in CSS; the asset itself carries no overlay and no text.

    ⚠ FEATURED COMMUNITIES, NOT A BOUNDARY. `serviceAreaSource` for
    this market is `derived_from_approved_locations` - there is no
    published service area to state (DEC-077) - so the copy names four
    and asks the visitor to confirm.

    ⚠ NO SECOND LEAD FORM. The page already carries the shared closing
    CtaSection with its form further down; this is the compact panel
    the brief asks for in that case.

    ⚠ THE PHONE IS LAS VEGAS'S OWN, matching `marketOperatingDetail`.
    One page, one number (01 §20).
  */
  regionalCoverage: {
    title: 'Sewer inspection and cleaning across the Las Vegas Valley',
    body: [
      'The Sewer Pros provides sewer camera inspection, sewer cleaning, hydro jetting, sewer line locating, drain cleaning, and diagnostic services for homeowners, home buyers, property managers, multifamily properties, and commercial properties across the Las Vegas Valley.',
      'These featured community pages do not define the full limit of the service area. Tell us where the property is located and what is happening with the line so we can confirm current coverage before scheduling.',
      /*
        ⚠ KEPT VERBATIM FROM THE FORMER SHARED CONTACT BLOCK, AND IT IS A
        BUSINESS-TRUTH STATEMENT RATHER THAN COPY. It is the sentence
        that stops this page implying a Las Vegas track record the
        project has no evidence for, which is the same reason the
        experience band states no founding year and no inspection count
        (DEC-073, 01 §20). Dropping it with the body would have been a
        regression, not a tidy-up.
      */
      'We are operating in the Las Vegas Valley. This is a newer market for us, our longest-running work is in St. Louis and San Diego, and we would rather say that plainly than imply a local track record we have not built here yet.',
    ],
    locations: [
      { pageId: id('loc-lv-las-vegas'), label: 'Las Vegas' },
      { pageId: id('loc-lv-henderson'), label: 'Henderson' },
      { pageId: id('loc-lv-north-las-vegas'), label: 'North Las Vegas' },
      { pageId: id('loc-lv-summerlin'), label: 'Summerlin' },
    ],
    primary: {
      label: 'Schedule a Las Vegas Sewer Inspection',
      pageId: id('core-contact'),
    },
    secondary: {
      label: 'Explore Las Vegas Valley Service Areas',
      pageId: id('hub-services'),
    },
    phone: { label: 'Call (725) 292-4030', phoneE164: '+17252924030' },
    /*
      ⚠ EMAIL AND HOURS MOVED HERE FROM THE FORMER SHARED CONTACT BLOCK rather than
      getting a second contact panel. That block already duplicated
      this one's phone; a whole section for two more lines would have
      been the same information a third time.

      ⚠ THE HOURS RULE OUT EMERGENCY, WEEKEND AND 24/7 SERVICE by
      stating what is published and nothing more (01 §35).
    */
    email: {
      label: 'bookaninspection@thesewerpros.com',
      href: 'mailto:bookaninspection@thesewerpros.com',
    },
    hours: 'Monday to Friday, 8:00am to 4:00pm',
    backgroundImage: {
      src: '/images/markets/las-vegas-nv/services/the-sewer-pros-las-vegas-valley-sewer-service-cta.webp',
      alt: 'Las Vegas Valley residential street on a clear day',
      source:
        'Supplied by the business owner, 2026-09-08. Rendered scene, not a photograph of a Sewer Pros job.',
    },
  },
  /*
    ==========================================================================
    SERVICE AREA. Upgraded from `coverage` to the image mosaic 2026-09-07.
    ==========================================================================
    ⚠ THIS REPLACED `coverage`, IT DID NOT JOIN IT. `MarketPageTemplate`
    renders one or the other and prefers `serviceArea`, so a leftover
    `coverage` here would be a second copy of the same statement that
    nothing displays and nobody would notice going stale.

    ⚠ THE REASON THIS MARKET WAS ON THE PLAIN LIST IS GONE. The earlier
    note said the image-led treatment "needs per-market photography and
    hyper-local detail this market does not have". The photography now
    exists: 4 frames, one per approved location, in
    `public/images/markets/las-vegas-nv/service-locations/`.

    ⚠⚠ NO COUNTY TIER, AND THAT IS A FACTUAL DECISION RATHER THAN AN
    UNFINISHED ONE. St. Louis names three counties because its PUBLISHED
    service area names them (DEC-070). This market publishes no service
    area at all - `marketOperatingDetail['las-vegas-nv'].serviceAreaSource` is
    `derived_from_approved_locations` - so a county tier would be
    inference dressed as coverage, which DEC-077 already corrected once
    here. `counties` is optional for exactly this reason.

    ⚠ THE INTRO AND THE CLOSING PANEL BOTH REFUSE TO CLAIM A BOUNDARY.
    They say these communities have their own pages and ask the visitor
    to confirm. No county, no radius, no "we serve everywhere in".

    ⚠ NO OFFICE ANYWHERE. No address, no pin on a map, no hours
    (CLAUDE.md §29-30, 18 §86-87, PENDING-002).
  */
  /*
    ==========================================================================
    THE LOCAL-EDUCATION RUN. Four sections carved out of `body`
    (owner direction, 2026-09-08).
    ==========================================================================
    ⚠ `body` IS GONE FROM THIS PAGE AND EVERY TOPIC IN IT SURVIVES HERE.
    It carried six H2s inside one reading column:

      "What a sewer inspection in Las Vegas actually shows"
          -> already covered by `deliverables`, which says the same
             thing with the same limitation sentence. NOT duplicated.
      "Who governs your sewer here depends on where you live"
      "The lateral is the property owner's"
          -> `responsibility`, combined, which is how the brief asked
             for them and how they read: one question, two halves.
      "Assistance here means insurance you buy, not a fund"
          -> `repairCoverage`
      "Newer housing, different failure modes"
          -> `materials`
      "Buying or selling a home in the Las Vegas Valley"
          -> `prePurchase`
      "Reaching us in Las Vegas"
          -> folded into `regionalCoverage`, which already carried the
             phone, the four community links and both buttons. A second
             contact panel would have been the same thing twice.

    ⚠ THE FOUR ATTRIBUTED FACTS ARE UNCHANGED IN SUBSTANCE AND IN
    HEDGE. CCWRD on lateral ownership, Henderson on where
    responsibility begins, the City of Las Vegas warranty partnership
    with its exact prices, and Summerlin straddling two authorities.
    None was strengthened into a universal rule, and the jurisdiction
    links in the FAQ further down this file are untouched.

    ⚠ SURFACES ARE DERIVED, NOT AUTHORED. See `localSurface` in
    `MarketPageTemplate`: inserting `repairCoverage` into this run
    flips the parity of everything after it, which a literal value
    would have got wrong.
  */
  responsibility: {
    title: 'Who manages the sewer system depends on where you live',
    intro:
      'The Las Vegas Valley has no single sewer authority. Each incorporated city runs its own utility relationship, while the Clark County Water Reclamation District, publicly branded the Clean Water Team, serves the unincorporated areas of the valley. Which authority governs your address determines who to contact and what rules apply. Summerlin is the clearest illustration. Clark County’s 2024 jurisdictional boundary map shows Summerlin partly in the City of Las Vegas and partly in unincorporated Clark County, so the agency that applies depends on the address.',
    /*
      ⚠ THE DIAGRAM RENDERS THROUGH THE IMAGE COMPONENT AS AN <img>,
      NOT INLINED. It carries `role="img"`, `aria-labelledby="diagram-title
      diagram-desc"` and nine text labels; inlining would put those two
      ids into the page namespace and the duplicate-id check would fail.
      As an <img> the alt below is what assistive technology reads.

      ⚠ IT IS GENERAL EDUCATION, NOT A BOUNDARY FOR ANY PROPERTY. The
      notice under the cards says so in the visitor's own words.
    */
    diagram: {
      src: '/images/markets/las-vegas-nv/services/the-sewer-pros-las-vegas-sewer-lateral-responsibility.svg',
      alt: 'Diagram showing a private sewer lateral connecting a Las Vegas home to the public sewer main',
      source:
        'Supplied by the business owner, 2026-09-08. General illustration, not a survey of any property.',
    },
    items: [
      {
        title: 'The public authority varies by address',
        description:
          'Each incorporated city runs its own utility relationship and the Clean Water Team serves unincorporated areas, so the agency governing a property is a question of address rather than of city name.',
        icon: 'variation',
        accent: 'blue',
      },
      {
        /*
          ⚠ BOTH SOURCES ARE NAMED IN THE COPY, as they were in the
          prose this replaced. CCWRD states owner responsibility for
          cleaning, repair and replacement; Henderson states that it
          begins where the lateral meets the main. Neither is
          generalised to the whole valley.
        */
        title: 'The lateral is the property owner\u2019s',
        description:
          'The Clark County Water Reclamation District states that a damaged lateral connecting a house to the sewer main is the property owner\u2019s responsibility for cleaning, repair, and replacement alike. The City of Henderson says responsibility for the sewer service lateral begins where it connects to the City’s sewer main in the street, and the City of Las Vegas says private owners maintain private laterals up to the point where they connect into the City sewer main.',
        icon: 'utility',
        accent: 'amber',
      },
    ],
    action: {
      title: 'Confirm the rules for your address before authorizing work',
      body: 'Sewer authority, ownership, and maintenance responsibility can vary by property address. Confirm the applicable rules with the local utility before making a repair decision.',
      guide: {
        label: 'Explore Las Vegas Valley service areas',
        pageId: id('market-las-vegas-nv'),
      },
      contact: {
        label: 'Confirm service availability for your property',
        pageId: id('core-contact'),
      },
    },
  },
  /*
    ⚠ THIS SECTION DESCRIBES A THIRD PARTY'S PRODUCT AND A MUNICIPAL
    POSITION, WHICH IS WHY IT CARRIES A NOTE. The Sewer Pros neither
    sells, administers, endorses nor guarantees any coverage, and
    nothing here may be edited into an implication that it does.

    ⚠ NO PRICE OR TERMS APPEAR HERE. The City's warranty page lists none
    (checked 2026-10-04), and an earlier version of this block quoted a
    price and "no cap, no deductible" that are not on the City page. They
    were removed; do not restore them without a primary source.
  */
  repairCoverage: {
    eyebrow: 'Coverage and assistance',
    title: 'Understand sewer repair coverage before a problem occurs',
    intro: [
      'Where we looked, assistance in the Las Vegas Valley works differently from markets that run a municipal reimbursement fund. Knowing which applies to a property changes what a failed lateral actually costs.',
    ],
    items: [
      {
        title: 'Municipal repair program',
        description:
          'On the City of Las Vegas and City of Henderson pages we reviewed, we found no lateral repair or reimbursement program. We have not reviewed every agency in the valley, so confirm with the agency that serves your address.',
        icon: 'document',
        accent: 'blue',
      },
      {
        title: 'Optional service-line coverage',
        description:
          'The City promotes an optional warranty program offered with a private company. It is a product you buy, not a City program.',
        icon: 'independence',
        accent: 'green',
      },
    ],
    note: {
      title: 'Confirm eligibility before relying on any coverage',
      body: 'Before relying on any coverage, confirm that the property, sewer line, failure type, and proposed work are eligible under the current policy terms. The Sewer Pros does not sell, administer, endorse, or guarantee any coverage, and whether a policy is worth buying depends on the condition of the line you actually have.',
    },
  },
  /*
    ⚠ NEWER HOUSING IS A REGIONAL OBSERVATION, NOT A PROPERTY CLAIM.
    Every card says "may" or "can" and none asserts a condition is
    universal across Las Vegas developments.
  */
  materials: {
    title: 'Newer homes can still develop sewer-line problems',
    intro:
      'A newer home does not rule out sewer-line problems. Recurring backups, changes made to a property after it was built, and routine maintenance planning are all reasons to look at the line, and a camera inspection shows what is actually there.',
    items: [
      /*
        ⚠ ONE FRAME PER CARD SINCE 2026-09-08, WHERE ONLY THE FIRST HAD
        ONE. `PipeMaterials` puts every card in image-then-text order at
        a shared ratio, so a set where two of three had no picture left
        the row visibly uneven.

        ⚠ THE FIRST CARD'S FRAME CHANGED, AND THE OLD ONE IS NOW
        UNUSED. It was `the-sewer-pros-las-vegas-residential-sewer-conditions`,
        a stucco-home exterior; the replacement shows the diagnosis
        itself, which is what the card is about. The exterior frame is
        still in the repository and referenced by nothing - it is a
        candidate for the experience band if that ever wants a second
        image, or for deletion.
      */
      {
        title: 'Recurring backups',
        description:
          'Look for visible conditions that may explain why the same drainage problem keeps returning.',
        image: {
          src: '/images/markets/las-vegas-nv/services/the-sewer-pros-recurring-sewer-backup-diagnosis.webp',
          alt: 'Diagnosing the cause of a sewer line that keeps backing up',
          source:
            'Supplied by the business owner, 2026-09-08. Rendered scene, not a photograph of a Sewer Pros job.',
        },
      },
      {
        title: 'Property changes',
        description:
          'Document the accessible line after landscaping, remodeling, or other work near the sewer route.',
        image: {
          src: '/images/markets/las-vegas-nv/services/the-sewer-pros-sewer-line-inspection-after-property-changes.webp',
          alt: 'Sewer line inspected after landscaping and other work near its route',
          source:
            'Supplied by the business owner, 2026-09-08. Rendered scene, not a photograph of a Sewer Pros job.',
        },
      },
      {
        title: 'Maintenance planning',
        description:
          'Use inspection evidence to decide whether cleaning, monitoring, or another evaluation is appropriate.',
        image: {
          src: '/images/markets/las-vegas-nv/services/the-sewer-pros-sewer-maintenance-planning-inspection-evidence.webp',
          alt: 'Inspection evidence used to plan sewer maintenance intervals',
          source:
            'Supplied by the business owner, 2026-09-08. Rendered scene, not a photograph of a Sewer Pros job.',
        },
      },
    ],
  },
  /*
    ⚠ "INFORMATIONAL, NOT LEGAL ADVICE" IS PART OF THE COPY, NOT A
    DISCLAIMER BOLTED ON. CLAUDE.md §26 forbids legal advice, and a
    section about what evidence to bring to a transaction is exactly
    where that line gets crossed by accident.

    ⚠ IT DESCRIBES WHAT AN INSPECTION DOCUMENTS, NEVER WHAT IT WILL
    FIND. No claim about any property's line, no age threshold, no
    failure rate, and no statement about what a repair would cost.

    ⚠ THE THREE COMMUNITY LINKS CARRY THE ANCHOR TEXT THE KEYWORD PASS
    ASKED FOR and are the ones the removed prose carried, so no
    internal link was lost with the restructure.
  */
  prePurchase: {
    title: 'Know what is in the sewer line before closing',
    body: 'A pre-purchase sewer camera inspection gives buyers, sellers, and real estate professionals documented information about the accessible sewer line before a property transaction is complete. The footage can reveal visible conditions that may not appear during a standard home inspection. This content is informational, not legal advice.',
    image: {
      src: '/images/markets/las-vegas-nv/services/the-sewer-pros-las-vegas-pre-purchase-sewer-inspection.webp',
      alt: 'Las Vegas home receiving a pre-purchase sewer camera inspection',
      source:
        'Supplied by the business owner, 2026-09-08. Rendered scene, not a photograph of a Sewer Pros job.',
    },
    points: [
      'Review the accessible sewer line before closing',
      'Document visible conditions',
      'Reduce uncertainty about recurring drainage symptoms',
      'Keep the footage for negotiation or future planning',
    ],
    primary: {
      label: 'Schedule a Pre-Purchase Sewer Inspection',
      pageId: id('core-contact'),
    },
    secondary: {
      label: 'Learn About Pre-Purchase Sewer Inspections',
      pageId: id('svc-pre-purchase-sewer-inspection'),
    },
    /*
      ⚠ BLUE, ON OWNER DIRECTION (2026-09-08). These three cards are
      navigation, and blue is this system's navigation colour; the
      neutral card they shipped with read as white against this
      section's muted ground. St. Louis keeps the neutral treatment -
      the field is opt-in precisely so this did not restyle a page
      nobody asked about.
    */
    resourcesAccent: 'blue',
    resourcesTitle: 'Local sewer inspection information',
    resources: [
      { pageId: id('loc-lv-henderson'), label: 'Henderson sewer inspection' },
      {
        pageId: id('loc-lv-north-las-vegas'),
        label: 'North Las Vegas sewer inspection',
      },
      { pageId: id('loc-lv-summerlin'), label: 'Summerlin sewer inspection' },
    ],
  },
  serviceArea: {
    title: 'Where we serve in the Las Vegas Valley',
    intro:
      'The Sewer Pros provides sewer camera inspection, sewer cleaning, hydro jetting, sewer line locating, and diagnostic services across the Las Vegas Valley. The featured locations below have dedicated service pages and represent key areas we serve, not the complete boundary of our coverage. Contact us with your property location and service need so we can confirm current availability before you schedule.',
    /*
      Four cards over two rows: the flagship takes the left half for
      both, Henderson takes the whole right half of row one as a `wide`
      tile, and the last two split row two. That asymmetry is what stops
      four cards reading as a flagship plus three leftovers.
    */
    cities: {
      title: 'Featured Las Vegas Valley service locations',
      intro:
        'Explore dedicated sewer inspection and cleaning information for featured communities across the Las Vegas Valley. Each local page includes services, coverage details, and guidance for property owners and professionals in that area.',
      flagshipPageId: id('loc-lv-las-vegas'),
      rows: 2,
      items: [
        {
          pageId: id('loc-lv-las-vegas'),
          title: 'Las Vegas, NV',
          description:
            'Sewer camera inspection, cleaning, locating, and diagnostic services for residential and commercial properties across Las Vegas.',
          ctaLabel: 'Explore Las Vegas',
          image: {
            src: '/images/markets/las-vegas-nv/service-locations/the-sewer-pros-las-vegas-nv-sewer-services.webp',
            alt: 'Las Vegas, Nevada sewer service area',
            source: 'Supplied by the business owner, 2026-09-07.',
          },
        },
        {
          pageId: id('loc-lv-henderson'),
          wide: true,
          title: 'Henderson, NV',
          description:
            'Explore evidence-first sewer inspection and cleaning services for homes, buyers, property managers, and businesses in Henderson.',
          ctaLabel: 'Explore Henderson',
          image: {
            src: '/images/markets/las-vegas-nv/service-locations/the-sewer-pros-henderson-nv-sewer-services.webp',
            alt: 'Henderson, Nevada sewer service area',
            source: 'Supplied by the business owner, 2026-09-07.',
          },
        },
        {
          pageId: id('loc-lv-north-las-vegas'),
          title: 'North Las Vegas, NV',
          description:
            'Find sewer camera inspection, cleaning, hydro jetting, and locating services for properties in North Las Vegas.',
          ctaLabel: 'Explore North Las Vegas',
          image: {
            src: '/images/markets/las-vegas-nv/service-locations/the-sewer-pros-north-las-vegas-nv-sewer-services.webp',
            alt: 'North Las Vegas, Nevada sewer service area',
            source: 'Supplied by the business owner, 2026-09-07.',
          },
        },
        {
          /*
            ⚠ "Summerlin, Las Vegas", NOT "Summerlin, NV". It is a
            master-planned community, not an incorporated city, and the
            page's own FAQ turns on part of it sitting outside city
            limits. Labelling it as a city would contradict that.
          */
          pageId: id('loc-lv-summerlin'),
          title: 'Summerlin, Las Vegas',
          description:
            'Explore sewer inspection and cleaning services for homes, managed properties, and commercial properties in the Summerlin area.',
          ctaLabel: 'Explore Summerlin',
          image: {
            src: '/images/markets/las-vegas-nv/service-locations/the-sewer-pros-summerlin-las-vegas-sewer-services.webp',
            alt: 'Summerlin sewer service area in Las Vegas',
            source: 'Supplied by the business owner, 2026-09-07.',
          },
        },
      ],
    },
    closing: {
      title: 'Do not see your community listed?',
      body: 'These featured locations do not represent the full limit of our Las Vegas Valley service area. Tell us where the property is located and what is happening with the sewer line, and we will confirm whether service is currently available before you schedule.',
      action: { label: 'Contact The Sewer Pros', pageId: id('core-contact') },
    },
  },
  /*
    ==========================================================================
    INTENT ROUTING. Added 2026-09-07.
    ==========================================================================
    ⚠ A DIFFERENT SET FROM ST. LOUIS AND FROM SAN DIEGO, ON PURPOSE.
    Owner direction 2026-09-07 is that the three hubs must not run one
    composition. Routing itself is parity rather than a distinguishing
    variant - it is a navigation aid, the same category as the hero
    form - so all three carry the band, but none carries the same four
    cards.

    ⚠ `svc-stl-sewer-lateral-inspection-reporting` CANNOT APPEAR HERE.
    It is `not_applicable` for this market. Every service below is
    `confirmed` or `supported_by_existing_*` for Las Vegas, checked
    against `master-service-registry.json` - DEC-076 confirmed 17 of 18
    and DEC-080 released the indexation gate on that basis.

    ⚠ NO TENURE CLAIM ANYWHERE IN THIS BAND. This market has no
    confirmed founding year (`foundingYear: 0`), so the cards describe
    what the work is, never how long it has been done here.

    The second and third cards are cleaning and preventative
    maintenance rather than San Diego's backup diagnosis, matching this
    market's own body copy about newer housing and different failure
    modes.
  */
  routing: [
    {
      pageId: id('svc-sewer-camera-inspection'),
      category: 'Start with evidence',
      icon: 'search-check',
      accent: 'blue',
      description:
        'A camera inspection records the visible condition of the accessible line, so what happens next is decided from footage rather than symptoms.',
      linksHeading: 'Common starting points',
      links: [
        {
          pageId: id('svc-recurring-sewer-backup-diagnosis'),
          label: 'Recurring Backup Diagnosis',
        },
        {
          pageId: id('svc-sewer-line-locating'),
          label: 'Sewer Line Locating',
        },
      ],
      secondaryLink: {
        pageId: id('svc-sewer-camera-inspection'),
        label: 'Explore Sewer Camera Inspection',
      },
    },
    {
      pageId: id('svc-sewer-cleaning'),
      category: 'Slow or blocked drains',
      icon: 'search-check',
      accent: 'navy',
      description:
        'Clearing what has built up in the line, and inspecting afterwards so the condition the blockage was hiding does not go unseen.',
      linksHeading: 'Related services',
      links: [
        {
          pageId: id('svc-hydro-jetting'),
          label: 'Hydro Jetting',
        },
        {
          pageId: id('svc-drain-cleaning'),
          label: 'Drain Cleaning',
        },
      ],
      secondaryLink: {
        pageId: id('svc-sewer-cleaning'),
        label: 'Explore Sewer Cleaning',
      },
    },
    {
      pageId: id('svc-preventative-sewer-maintenance'),
      category: 'Planning ahead',
      icon: 'search-check',
      accent: 'green',
      description:
        'Servicing the line on an interval the inspection evidence supports, rather than a generic annual visit.',
      linksHeading: 'Useful for',
      links: [
        {
          pageId: id('aud-property-managers'),
          label: 'Property Managers',
        },
        {
          pageId: id('aud-hoa-communities'),
          label: 'HOA Communities',
        },
      ],
      secondaryLink: {
        pageId: id('svc-preventative-sewer-maintenance'),
        label: 'Explore Preventative Maintenance',
      },
    },
    {
      pageId: id('hub-commercial'),
      category: 'Property solutions',
      icon: 'building-2',
      accent: 'blue',
      description:
        'Sewer inspection, cleaning, and hydro jetting for commercial properties, multifamily buildings, and the people who manage them.',
      linksHeading: 'Commercial services',
      links: [
        {
          pageId: id('com-camera'),
          label: 'Sewer Camera Inspection',
        },
        {
          pageId: id('com-sewer-cleaning'),
          label: 'Sewer Cleaning',
        },
      ],
      secondaryLink: {
        pageId: id('hub-commercial'),
        label: 'Explore Commercial Services',
      },
    },
  ],
  /*
    ⚠ THE HOME PAGE'S APPROVED SECTION, VERBATIM, AS OF 2026-09-23.
    `homeServiceCards` (not `coreServiceCards`) carries the approved
    heading, intro, copy, images, and `cards` layout; Las Vegas has no
    market-specific service of its own to compose in, so it mirrors the
    home page exactly, same as it did with `coreServiceCards` before the
    home page's section was revised.
  */
  services: homeServiceCards,
  servicesTitle: approvedServicesTitle,
  servicesIntro: <p>{approvedServicesIntro}</p>,
  servicesVariant: 'cards',
  locationPageIds: [
    id('loc-lv-las-vegas'),
    id('loc-lv-henderson'),
    id('loc-lv-north-las-vegas'),
    id('loc-lv-summerlin'),
  ],
  faq: [
    {
      question: 'Who is responsible for my sewer lateral in the valley?',
      answer: (
        <p>
          Where we found a published statement, the property owner. The Clark
          County Water Reclamation District says this for the unincorporated
          valley. The City of Henderson says your responsibility for the sewer
          service lateral begins where it connects to the City&rsquo;s sewer
          main in the street. The City of Las Vegas says private property
          owners maintain private sewer laterals up to the point where they
          connect into the City sewer main. We have not yet reviewed every
          agency in the valley, so confirm the rule for your address.
        </p>
      ),
    },
    {
      question: 'Is there a program that helps with lateral repair costs?',
      answer: (
        <p>
          We did not find a lateral repair or reimbursement program on the City
          of Las Vegas or City of Henderson pages we reviewed. The City of Las
          Vegas promotes an optional warranty program offered with a private
          company. It is a product you buy, not a City program.
        </p>
      ),
    },
    /*
      ==========================================================================
      SIX ENTRIES ADDED 2026-09-07 (Gate 2 approved). Two to eight.
      ==========================================================================
      ⚠ THE STRATEGY OUTLINE LISTED EIGHT AND TWO OF ITS EIGHT WERE
      DROPPED RATHER THAN DUPLICATED:

        "Is my sewer line my responsibility in Las Vegas?" duplicates the
            first entry above, which already answers it with the sourced
            CCWRD and Henderson positions.
        "What areas of the Las Vegas Valley do you serve?" is answered
            directly by the coverage section further up the page, which
            lists the four communities and the availability caveat.

      ⚠ NO `FAQPage` SCHEMA. Deferred by standing decision; `PageShell`
      emits it only where a template opts in, and this one does not.

      ⚠ NO COMPETITOR IS NAMED OR ALLUDED TO ANYWHERE BELOW. A real
      operator in this market brands on the phrase "second opinion", so
      the last entry makes the argument from the business model - no
      repair revenue behind the inspection - rather than from the phrase.
    */
    {
      question: 'What does a sewer camera inspection show?',
      answer: (
        <p>
          A sewer camera inspection shows the documented interior condition of
          a sewer line, including blockages, root intrusion, offset joints,
          cracks, and standing water. The Sewer Pros captures this on video so
          property owners see the same evidence the technician does, before any
          decision is made.
        </p>
      ),
    },
    {
      question:
        'Why does Summerlin have two different sewer service jurisdictions?',
      answer: (
        <p>
          Clark County&rsquo;s 2024 jurisdictional boundary map shows Summerlin
          partly in the City of Las Vegas and partly in unincorporated Clark
          County, so the agency that applies depends on the address. The map is
          marked for display purposes only. See the Summerlin page for what each
          agency says about the property owner&rsquo;s sewer lateral.
        </p>
      ),
    },
    {
      question:
        'Should I get a sewer inspection before buying a home in Las Vegas?',
      answer: (
        <p>
          A sewer inspection before buying a home in Las Vegas documents the
          line&rsquo;s condition before closing, giving buyers and agents
          evidence rather than assumptions. The Sewer Pros provides this as an
          independent evaluation, separate from the standard home inspection.
          This is informational, not legal advice.
        </p>
      ),
    },
    {
      question: 'Can a sewer line be cleaned instead of replaced?',
      answer: (
        <p>
          Sometimes. Cleaning resolves blockages and buildup, while replacement
          addresses structural failure such as a collapsed or severely damaged
          line. A camera inspection is what distinguishes the two, so The Sewer
          Pros always starts with documented evidence before recommending
          either path.
        </p>
      ),
    },
    {
      /*
        ⚠ EVERY CLAUSE HERE IS DEC-088's APPROVED HEDGE, NOT A PARAPHRASE
        OF IT. "Sometimes possible but never guaranteed", the weekday
        hours, and the explicit no-weekend / no-24-7 / no-emergency line
        all match `data/business/offers.ts`. DEC-088 approved DESCRIBING
        same-day availability and forbids promising it; do not tighten
        any of this, and do not demote the limits to fine print.
      */
      question: 'Do you offer same-day sewer inspections in Las Vegas?',
      answer: (
        <p>
          Same-day service is sometimes possible but never guaranteed. The
          Sewer Pros operates Monday through Friday, 8:00am to 4:00pm, and is
          closed weekends, with no 24/7 or emergency service. Ask about a free
          estimate when you schedule.
        </p>
      ),
    },
    {
      question: 'Should I get a second opinion before approving sewer replacement?',
      answer: (
        <p>
          If a contractor has already told you your sewer line needs
          replacement, it is worth getting an independent camera inspection
          before authorizing the work. The Sewer Pros documents the
          line&rsquo;s actual condition on video, so you can verify the
          recommendation with your own evidence before committing to an
          expensive repair. Our{' '}
          <ApprovedInlineLink pageId={id('cmp-independent-vs-repair')}>
            independent inspection compared with a repair company
          </ApprovedInlineLink>{' '}
          explains why that distinction matters.
        </p>
      ),
    },
  ],
    /*
      ==========================================================================
      CLOSING CTA COPY (owner-supplied, 2026-09-08)
      ==========================================================================
      ⚠ IT REPLACED TWO LINES, AND THE ARGUMENT IS THE SAME ONE. The
      old title and body said "documented evidence, from a company that
      does not perform the repair"; this says it at length with the
      benefit list and the trust statement spelled out. Nothing new is
      claimed.

      ⚠ EVERY BENEFIT IS CONDITIONAL WHERE THE SERVICE IS. "Recorded
      footage WHEN a sewer camera inspection is performed", cleaning or
      locating "when appropriate" or "when the evidence supports those
      services". A visitor requesting a cleaning is not being promised
      video (CLAUDE.md §24, §42).

      ⚠ THE TRUST STATEMENT IS THE §9 GUARDRAIL IN THE VISITOR'S OWN
      TERMS, and it is about this business only. It must never be
      edited into a claim about what other contractors do.

      ⚠ THE NOTE CARRIES PUBLISHED HOURS AND NOTHING MORE. No response
      time, no same-day language, no emergency or weekend availability:
      weekday hours state what is offered and rule the rest out by
      omission (01 §35). `CtaSection` already renders "Prefer to talk
      now?" above the number, so the note picks up after it.
    */
  cta: {
    /*
      ⚠ SHORTENED 2026-09-08, HOURS AFTER THE FIRST VERSION SHIPPED.
      The owner replaced the long block with this: two paragraphs, a
      three-item list, and a one-sentence guardrail. Gone with it are
      the "Start with what you are seeing" subsection and the coverage
      paragraph naming the four communities.

      ⚠ NOTHING WAS LOST BY DROPPING THE COVERAGE PARAGRAPH. That
      statement, with its "these do not define the full limit" caveat,
      is still rendered by `regionalCoverage` further up the page and
      by the service-area mosaic above it. It was the third copy on one
      page, not the only one - which is presumably why it went.

      ⚠ THE EMAIL WENT WITH IT TOO, and is likewise still on the page:
      `regionalCoverage` renders it beside the published hours. This
      note now carries the hours alone, matching the supplied line.
    */
    /*
      ⚠ NO BUTTON IN THIS CTA (owner, 2026-09-08), matching San Diego.
      The section already carries the request-service form on its
      right, and its submit control is the primary action; a "Schedule
      a Sewer Inspection" button beside it was a second ask pointing at
      a different page, which splits the conversion rather than
      strengthening it.

      ⚠ `hideAction`, NOT AN EMPTY `actionLabel`. `CtaSection` treats
      `null` as "no button" and `undefined` as "fall back to the global
      PRIMARY_CTA", so only this flag removes it - and it drops the
      whole actions row rather than leaving an empty flex box holding
      32px of margin above nothing.

      ⚠ THE PHONE SENTENCE IS UNAFFECTED. It renders outside that row,
      so "Prefer to talk now?" and the number stay.
    */
    hideAction: true,
    eyebrow: 'Las Vegas Valley sewer inspection and cleaning',
    title: 'Find out what is happening inside your sewer line',
    body: (
      <>
        <p>
          Recurring backups, multiple slow drains, or an unknown sewer-line
          condition can have several possible causes. The Sewer Pros provides
          sewer camera inspection, sewer cleaning, hydro jetting, and sewer
          line locating across the Las Vegas Valley.
        </p>
        <p>
          We document visible conditions inside accessible portions of the line
          and explain what the findings show, helping you make your next
          decision with clearer information.
        </p>

        {/*
          ⚠ MARKED WITH THE SAME ICONS AS SAN DIEGO'S CLOSING CTA
          (owner, 2026-09-08), FROM THE SAME SHARED COMPONENT. Each
          mark restates the line it sits beside rather than decorating
          it: `guidance` for choosing a starting service, `camera` for
          recorded footage, `explanation` for what the line shows.

          ⚠ THE COPY IS UNCHANGED, AND SO IS THE PROMISE IT MAKES.
          Recorded footage is scoped to "when an inspection is
          performed" because a cleaning request is not a video
          (CLAUDE.md §24, §42). `space-y-3` where it was `space-y-2`:
          the marks add a line's own weight and the tighter rhythm
          crowded them.
        */}
        <h3 className="text-body font-semibold">What you can expect</h3>
        <ul className="space-y-3 text-body">
          <CtaBenefit icon="guidance">
            Help identifying an appropriate starting service
          </CtaBenefit>
          <CtaBenefit icon="camera">
            Recorded footage and documented findings when an inspection is
            performed
          </CtaBenefit>
          <CtaBenefit icon="explanation">
            A clear explanation of the visible sewer-line condition
          </CtaBenefit>
        </ul>

        {/*
          ⚠ A RULE, NOT A CARD, matching San Diego's closing CTA. It is
          about this business only and must never be edited into a
          claim about what other contractors do (CLAUDE.md §9, §27).
        */}
        <p className="border-l-2 border-white/40 pl-4">
          The Sewer Pros does not perform sewer repair or replacement, so the
          findings remain separate from a repair sale.
        </p>
      </>
    ),
    note: 'Monday through Friday, 8:00am to 4:00pm.',
  },
  ctaFormIntro:
    'Select a service and briefly describe what is happening at the property. If you are unsure what you need, describe the symptoms in the message field.',
  /*
    Flips the closing CTA from the `panel` button to the split layout:
    copy left, lead form right, over this frame. Same structure as the
    home page and the St. Louis hub.
  */
  /*
    ⚠ REPLACED THE JETTING-EQUIPMENT FRAME ON OWNER DIRECTION
    (2026-09-08), matching the swap made on San Diego the same day.
    This one is a residential exterior rather than an equipment
    close-up, so the closing ask sits against the kind of property the
    market serves.

    ⚠ THE PREVIOUS ASSET IS NOT ORPHANED.
    `homepage/hero/the-sewer-pros-homebuyer-sewer-due-diligence-hero.webp`
    is still one of the five frames `data/business/hero-backdrop.ts`
    rotates on the home page, so it stays where it is.

    ⚠ IT RHYMES WITH `regionalCoverage`'s FRAME, which is also a
    single-storey stucco house with a tile roof, stone veneer and
    desert gravel. Nine content blocks sit between them - the lateral
    run, materials, pre-purchase, service area, routing, services,
    related locations and the FAQ - so they are never in view together,
    but a third residential exterior on this page would start to read
    as one repeated picture.

    ⚠ NO ADDRESS, NUMBER, SIGNAGE OR PERSON IS VISIBLE IN THE FRAME,
    which is what keeps it usable on a market with no verified premises
    (CLAUDE.md §30). It illustrates a property type, not a Sewer Pros
    location or job.
  */
  ctaBackground: {
    src: '/images/markets/las-vegas-nv/services/the-sewer-pros-las-vegas-residential-service-cta.webp',
    alt: 'Single-story Las Vegas Valley home with a tile roof and desert gravel landscaping',
    source:
      'Supplied by the business owner, 2026-09-08. Rendered scene, not a photograph of a Sewer Pros job.',
  },
}

/* ==========================================================================
   Location pages
   ========================================================================== */

export const lasVegasLocationContent: Partial<Record<PageId, LocationPageContent>> = {
  /* ------------------------------------------------- Las Vegas (city) -- */
  [id('loc-lv-las-vegas')]: lasVegasCityContent,

  /* ---------------------------------------------------------- Henderson -- */
  [id('loc-lv-henderson')]: hendersonContent,

  /* -------------------------------------------------- North Las Vegas -- */
  [id('loc-lv-north-las-vegas')]: northLasVegasContent,

  /* --------------------------------------------------------- Summerlin -- */
  [id('loc-lv-summerlin')]: summerlinContent,
}
