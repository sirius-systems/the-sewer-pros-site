/**
 * St. Louis market content.
 *
 * Authority: docs/14-content-specification.md §38, §42, §43, §79
 *            docs/28 (St. Louis rules), CLAUDE.md §22, §28, §73
 *            St. Louis Market Research, 2026-08-16
 *
 * ===========================================================================
 * WHAT MAKES THESE PAGES PASS THE LOCATION TEST
 * ===========================================================================
 * 14 §79: "Could we replace 'St. Louis' with 'San Diego' without
 * changing anything else?"
 *
 * The differentiator here is not description — it is jurisdiction. Each
 * municipality runs its own sewer lateral repair program with its own
 * fee, cap, coverage boundary, and exclusions, and those terms are not
 * transferable between cities. Ballwin's $4,500 cap and its
 * once-a-year root-clearing rule cannot be restated for Florissant,
 * whose City program stops five feet from the house.
 * St. Charles runs its own sewer system, outside the area MSD defines as its own.
 *
 * ---------------------------------------------------------------------------
 * HOUSING ERA IS QUALITATIVE HERE
 * ---------------------------------------------------------------------------
 * DEC-072 approved the median-year figures for use with ACS citation.
 * These pages nonetheless describe era qualitatively, because the
 * jurisdictional facts already carry the differentiation and a median
 * year adds little to an argument about municipal program terms. The
 * San Diego and Las Vegas pages cite figures where they DO carry an
 * argument about what fails on newer lines.
 *
 * Pipe material stays era correspondence throughout — no source ties a
 * material to a specific city, and CLAUDE.md §73 forbids fabricated
 * localisation.
 *
 * ---------------------------------------------------------------------------
 * ⚠ CHESTERFIELD LIVES IN ITS OWN MODULE
 * ---------------------------------------------------------------------------
 * `content/pages/st-louis-chesterfield.tsx` carries the full rich
 * composition. Its lateral program terms (the $28 fee, the 100 percent up
 * to $15,000 cap, the $200 fee, eligibility and exclusions) are
 * primary-sourced from the City's own policy and application (DEC-109).
 * Only the housing-age figures still rest on owner-approved ACS estimates
 * (PENDING-015).
 *
 * ---------------------------------------------------------------------------
 * ⚠ NO CLAIM OF PROGRAM OUTCOMES
 * ---------------------------------------------------------------------------
 * The business is "licensed through most of the municipal sewer lateral
 * programs for submitting reports" — a verified business fact. It
 * documents conditions; the municipality decides claims. No page below
 * promises approval, reimbursement, or eligibility.
 */

import { stLouisCityContent } from './st-louis-city'
import { chesterfieldContent } from './st-louis-chesterfield'
import { stCharlesContent } from './st-louis-st-charles'
import { ballwinContent } from './st-louis-ballwin'
import { florissantContent } from './st-louis-florissant'
import type {
  LocationPageContent,
  MarketPageContent,
  PageId,
  ServiceLocationPageContent,
  ServicePageContent,
} from '@/types'

import {
  homeServiceCards,
  approvedServicesTitle,
  approvedServicesIntro,
} from './home-service-cards'

import {
  CameraIcon,
  DecisionIcon,
  DocumentIcon,
} from '@/components/sections/section-icons'

const id = (value: string): PageId => value as PageId

/* ==========================================================================
   Market hub — /st-louis-mo/
   ========================================================================== */

export const stLouisMarketContent: MarketPageContent = {
  /*
    ⚠ THE HERO NAMES A WIDER AREA THAN THE FEATURED COMMUNITIES, AND
    THAT IS DELIBERATE (owner, 2026-09-04).

    "St. Louis County, St. Charles County, Jefferson County" is the
    service area the business publishes about itself
    (`marketOperatingDetail`, `serviceAreaSource: 'published'`,
    DEC-070). Only five communities have approved PAGES - a smaller
    set, and a different kind of statement.

    Rather than narrow a published fact to match a page inventory, the
    service-area section says which of the two it is. Do not "fix" this
    by trimming the hero.

    ⚠ THE TWO TIERS IN `serviceArea` BELOW ARE THAT DISTINCTION MADE
    VISIBLE. The three published counties are the first tier and carry
    no links because no county page exists; the five community pages
    are the second. Before 2026-09-07 the same point was made in one
    paragraph above a plain list.
  */
  metaDescription:
    'Explore sewer inspection, diagnostics, cleaning, hydro jetting, and drain services in St. Louis, Missouri, with documented findings and informed next steps.',
  hero: {
    eyebrow: 'St. Louis sewer and drain specialists',
    title: 'Sewer camera inspection and cleaning in St. Louis, MO',
    intro: (
      <p>
        Independent camera inspection, diagnostics, locating, and cleaning for
        properties in St. Louis County, St. Charles County, Jefferson County,
        and surrounding areas. We document what the line actually shows, and we
        do not perform the repair, so the evidence is not a sales tool.
      </p>
    ),
  },
  /*
    ⚠ THE STILL IS THE CLIP'S OWN FRAME AND ITS POSTER (2026-09-26). It
    is what reduced-motion, data-saver, and pre-hydration visitors see,
    and it is the LCP element. It is a 1.5MB WebP; `output: 'export'`
    disables the optimizer, so resizing it is worth doing when practical.
  */
  heroBackground: {
    src: '/images/markets/st-louis-mo/hero/the-sewer-pros-st-louis-residential-sewer-camera-inspection-hero.webp',
    alt: 'Camera reel and monitor at an open cleanout on a residential property',
    source:
      'Supplied by the business owner, 2026-09-26. Rendered scene, not a photograph of a Sewer Pros job.',
  },
  /*
    `describes` is written from the supplied filename and the market it
    was delivered for. It says what the clip is FOR rather than
    asserting shot detail nobody has checked.
  */
  heroVideo: {
    src: '/images/markets/st-louis-mo/hero/the-sewer-pros-st-louis-residential-sewer-camera-inspection-hero.mp4',
    describes: 'Residential sewer camera inspection clip supplied for the St. Louis hub hero',
    source:
      'Supplied by the business owner, 2026-09-22. Rendered scene, not footage of a Sewer Pros job.',
  },
  showHeroForm: true,
  heroFormMarketId: 'st-louis-mo',
  routing: [
    {
      pageId: id('svc-sewer-camera-inspection'),
      category: 'Homeowners',
      icon: 'search-check',
      accent: 'blue',
      description:
        'Recurring backups, slow drains, or a line you have never seen. Start with a camera inspection and decide from evidence.',
      linksHeading: 'Common starting points',
      links: [
        {
          pageId: id('svc-recurring-sewer-backup-diagnosis'),
          label: 'Recurring Backup Diagnosis',
        },
        { pageId: id('svc-sewer-cleaning'), label: 'Sewer Cleaning' },
        { pageId: id('svc-hydro-jetting'), label: 'Hydro Jetting' },
      ],
      secondaryLink: {
        pageId: id('svc-sewer-camera-inspection'),
        label: 'Camera Inspection',
      },
    },
    {
      pageId: id('svc-pre-purchase-sewer-inspection'),
      category: 'Buying or selling',
      icon: 'search-check',
      accent: 'green',
      description:
        'Know the condition of the line before closing. A sewer scope documents what a standard home inspection does not cover.',
      linksHeading: 'For the transaction',
      links: [
        { pageId: id('aud-home-buyers'), label: 'Home Buyers' },
        { pageId: id('aud-home-sellers'), label: 'Home Sellers' },
        { pageId: id('aud-real-estate-agents'), label: 'Real Estate Agents' },
      ],
      secondaryLink: {
        pageId: id('svc-pre-purchase-sewer-inspection'),
        label: 'Pre-Purchase Inspection',
      },
    },
    {
      pageId: id('svc-stl-sewer-lateral-inspection-reporting'),
      category: 'Municipal reporting',
      icon: 'map-pinned',
      accent: 'navy',
      description:
        'Many St. Louis area municipalities run lateral repair programs that ask for documentation before a claim is considered.',
      linksHeading: 'Program guides',
      links: [
        {
          pageId: id('res-stl-lateral-report'),
          label: 'What Goes in the Report',
        },
        { pageId: id('res-stl-city-program'), label: 'St. Louis City Program' },
        {
          pageId: id('res-stl-county-program'),
          label: 'St. Louis County Program',
        },
      ],
      secondaryLink: {
        pageId: id('svc-stl-sewer-lateral-inspection-reporting'),
        label: 'Lateral Reporting',
      },
    },
    {
      pageId: id('hub-commercial'),
      category: 'Property solutions',
      icon: 'building-2',
      accent: 'blue',
      description:
        'Sewer inspection, cleaning, and hydro jetting for commercial properties, multi-family buildings, and property managers.',
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
  ],
  /*
    ⚠ THREE CARDS CARRYING WHAT THE LONG "why lateral programs make
    documentation matter" SECTION USED TO SAY. The substance is
    unchanged and nothing was sharpened: the programs "can"
    meaningfully change a cost, terms "vary", and whether one applies
    is "a question about your specific municipality". The
    program-by-program detail now lives in the three resource
    guides, which the routing card above links.
  */
  /*
    ==========================================================================
    SECTION 1 - WHO IS RESPONSIBLE FOR THE LATERAL
    ==========================================================================
    ⚠ REPLACED `lateralCards` ON 2026-09-07. The same title, the same
    intro, and the same three cards, verbatim - what changed is that
    they now render through `LateralResponsibility` with a diagram, line
    icons, accents and an action panel instead of `ProblemGrid`'s plain
    three-up. `ProblemGrid` itself is untouched: six templates share it.

    ⚠⚠ EVERY SENTENCE BELOW IS A STATEMENT ABOUT MUNICIPAL RULES AND
    NONE OF IT WAS REWRITTEN. Fees, caps, coverage boundaries,
    documentation requirements and exclusions differ by municipality,
    and the City of St. Charles is outside MSD's territory entirely.
    Nothing here says a property is eligible, that a claim will be
    reimbursed, or that one municipality's terms travel. Do not
    generalise any of it.

    ⚠ THE THIRD CARD WEARS THE AMBER ACCENT because it is the one that
    says the terms vary. That is `--warning`, an approved semantic-state
    token (18 §8) that `Callout` already spends the same way - a rule
    and a mark, never a filled alarm panel. It means "check yours", not
    "danger" (18 §89).
  */
  responsibility: {
    title: 'Who is responsible for the lateral',
    intro:
      'The sewer lateral runs from the building to the public sewer. Understanding whose problem it is, and what documentation a municipal program asks for, is most of what people come to this page to find out.',
    /*
      ⚠ THE FILE IS NAMED FOR WHAT IT DEPICTS, NOT FOR THIS SECTION.
      `st-louis-residential-sewer-lateral-public-main.svg` is the asset
      the owner supplied; the brief expected
      `...-sewer-lateral-responsibility-diagram.svg`, which does not
      exist. Renaming a supplied asset to match a brief would be the
      wrong way round, so the verified path is used as-is.

      1600x1200, exactly the 4:3 the media panel reserves, so nothing
      letterboxes and nothing is cropped. It carries its own <title>
      and <desc>, but an <img> does not expose those, so the alt text
      below is what a screen reader hears.
    */
    diagram: {
      src: '/images/markets/st-louis-mo/services/st-louis-residential-sewer-lateral-public-main.svg',
      alt: 'Diagram showing a residential sewer lateral connecting a St. Louis property to the public sewer main',
      source: 'Supplied by the business owner, 2026-09-07.',
    },
    items: [
      {
        title: 'MSD maintains the mains, not your lateral',
        description:
          'The Metropolitan St. Louis Sewer District states that homeowners are responsible for maintaining the sewer lateral. It does not inspect or repair private lines, so the condition of your own line is not something the utility will establish for you.',
        icon: 'utility',
        accent: 'blue',
      },
      {
        title: 'Lateral programs ask for documentation',
        description:
          'Many municipalities in the area operate sewer lateral repair programs funded by a small annual charge on the real estate tax bill. They generally require documentation from a licensed plumber before a claim is considered, commonly including video of the line.',
        icon: 'document',
        accent: 'blue',
      },
      {
        title: 'The terms are not uniform',
        description:
          'Fees, caps, coverage boundaries, and exclusions differ between municipalities, and the City of St. Charles runs its own sewer system, outside the area MSD defines as its service area. Whether a program applies to your address, and what it covers, is a question about your specific municipality.',
        icon: 'variation',
        accent: 'amber',
      },
    ],
    /*
      ⚠ NO PROGRAM-SELECTION ROUTE EXISTS, AND NONE WAS INVENTED
      (05 §51). The primary action points at the general St. Louis
      lateral guide, which is the closest verified destination; the
      city-specific and county-specific guides are linked by name from
      the resource cards further down the page. "Ask About Your
      Property" goes to `/contact/`, because an address-specific answer
      is a conversation rather than a page.
    */
    action: {
      title:
        'Not sure which sewer lateral program applies to your property?',
      body: 'Program rules, coverage boundaries, documentation requirements, and exclusions vary by municipality. Review the information for your property location or contact The Sewer Pros before scheduling an inspection.',
      guide: {
        label: 'Find Your Sewer Lateral Program',
        pageId: id('res-stl-lateral-report'),
      },
      contact: {
        label: 'Ask About Your Property',
        pageId: id('core-contact'),
      },
    },
  },
  /*
    ==========================================================================
    SECTION 2 - OLDER LINES, OLDER MATERIALS, AND THE PRE-PURCHASE PANEL
    ==========================================================================
    ⚠ REPLACED `materialCards` AND ABSORBED `localFeature` ON
    2026-09-07. Title, intro and all three material descriptions are
    verbatim; the pre-purchase heading and paragraph are verbatim from
    the block that used to render below this one as a standalone narrow
    prose section. Nothing was shortened.

    ⚠⚠ THE INTRO IS THE DISCLAIMER AND IT STAYS ABOVE THE PICTURES.
    "This is era correspondence, not a claim about any particular street
    or address." Three photographs of pipe invite exactly the inference
    that sentence forbids, so adding them makes it more load-bearing,
    not less. Do not move it, and do not add an installation date, a
    life expectancy, or a failure rate to any card (CLAUDE.md §73).

    ⚠ THE THREE MATERIAL FRAMES ARE ILLUSTRATIONS OF A MATERIAL, NOT
    PHOTOGRAPHS OF A CUSTOMER'S LINE. They must never be used to
    populate `proofImages`, which asserts "this is our work".
  */
  materials: {
    title: 'Older lines, older materials',
    intro:
      'This is era correspondence, not a claim about any particular street or address. What a specific line is made of, and what condition it is in, is what a camera inspection establishes.',
    items: [
      {
        title: 'Vitrified clay',
        description:
          'Common through much of the twentieth century. Clay separates at the joints and admits roots, which is the failure pattern a camera most often finds in older city and inner-suburb lines.',
        image: {
          src: '/images/markets/st-louis-mo/services/the-sewer-pros-vitrified-clay-sewer-pipe.webp',
          alt: 'Section of an older vitrified clay sewer pipe',
          source: 'Supplied by the business owner, 2026-09-07.',
        },
      },
      {
        title: 'Cast iron',
        description:
          'Also common in that period. Cast iron corrodes and scales internally, narrowing the bore over time rather than breaking suddenly.',
        image: {
          src: '/images/markets/st-louis-mo/services/the-sewer-pros-cast-iron-sewer-pipe.webp',
          alt: 'Section of an aged cast-iron sewer pipe',
          source: 'Supplied by the business owner, 2026-09-07.',
        },
      },
      {
        title: 'Orangeburg',
        description:
          'Bituminized fibre pipe, installed through the post-war decades until its manufacturer closed in 1974. It deforms under load, and any remaining Orangeburg is now well past its intended service life.',
        image: {
          src: '/images/markets/st-louis-mo/services/the-sewer-pros-orangeburg-sewer-pipe.webp',
          alt: 'Section of an older Orangeburg sewer pipe',
          source: 'Supplied by the business owner, 2026-09-07.',
        },
      },
    ],
  },
  /*
    ==========================================================================
    SECTION 3 - BUYING OR SELLING. Its own section again.
    ==========================================================================
    ⚠ THIS CONTENT HAS MOVED TWICE IN ONE DAY AND THE HISTORY IS THE
    POINT. It was `localFeature`, a narrow prose block on the SAME
    `muted` surface as the materials section above it, so the two read
    as one wall of text. It then became a closing panel inside
    `materials`, which fixed the width but buried a section-level
    subject under an H3. It is now its own section with its own H2 on
    the `default` surface, which is what actually separates it from the
    band above (owner direction, 2026-09-07).

    ⚠ THE COPY IS UNCHANGED THROUGH ALL THREE MOVES. Heading, paragraph,
    three resource labels and their destinations are byte-for-byte what
    `localFeature` shipped.
  */
  prePurchase: {
    title:
      'Buying or selling a home in St. Louis? Know what is in the sewer line first',
    body: 'A sewer camera inspection gives home buyers, sellers, and real estate agents documented evidence of a property\u2019s sewer line condition before closing, not just an assumption based on the home\u2019s age. In St. Louis, where much of the housing stock predates modern sewer materials, a pre-purchase sewer inspection can confirm whether a line is sound, needs cleaning, or shows signs that warrant further evaluation, without pressuring anyone toward repair or replacement.',
    image: {
      src: '/images/markets/st-louis-mo/services/the-sewer-pros-st-louis-pre-purchase-sewer-inspection.webp',
      alt: 'Sewer camera inspection equipment at a St. Louis home before purchase',
      source: 'Supplied by the business owner, 2026-09-07.',
    },
    /*
      ⚠ EACH POINT IS A CONDENSATION OF THE PARAGRAPH ABOVE IT, AND
      THE SOURCE CLAUSE IS NAMED SO THE NEXT READER CAN CHECK:

        1  "documented evidence of a property's sewer line condition
           before closing"
        2  "can confirm whether a line is sound, needs cleaning, or
           shows signs that warrant further evaluation"
        3  the page's approved deliverable, "Documentation you can
           review or share when seeking another opinion", stated in
           the experience section above

      None of them adds a claim. A fourth point that `body` does not
      support would be a new business claim wearing an icon (01 §35).
    */
    points: [
      'Document the sewer line before closing',
      'Identify visible conditions that may affect the purchase',
      'Keep footage and findings for review or a second opinion',
    ],
    primary: {
      label: 'Schedule a Pre-Purchase Sewer Inspection',
      pageId: id('core-contact'),
    },
    /*
      A verified route, not an invented one: the canonical
      pre-purchase service page, `launch` and indexable.
    */
    secondary: {
      label: 'Explore Pre-Purchase Sewer Inspection',
      pageId: id('svc-pre-purchase-sewer-inspection'),
    },
    resourcesTitle: 'Related resources',
    /*
      ⚠ THE SAME THREE GUIDES, THE SAME THREE LABELS, THE SAME THREE
      DESTINATIONS. They were an `<ul>` of `ApprovedInlineLink`s in
      the old prose block and are resource cards now; the wording is
      carried verbatim, including "program", because it is what
      readers see today. All three are `launch` and indexable, and
      resolving by page id means a gated one fails at the resolver
      rather than shipping a dead link.
    */
    resources: [
      {
        pageId: id('res-stl-lateral-report'),
        label: 'Sewer lateral reporting for St. Louis property owners',
      },
      {
        pageId: id('res-stl-city-program'),
        label: 'Understanding the St. Louis City sewer lateral program',
      },
      {
        pageId: id('res-stl-county-program'),
        label:
          'Which sewer lateral program applies to me? (St. Louis County)',
      },
    ],
  },
  /*
    ⚠ `editorial`, WHERE SAN DIEGO IS `strip` AND LAS VEGAS IS `aside`
    (owner direction, 2026-09-07). The three cards used to sit in a
    5/12 sidebar beside a long content column, which read as a document
    rather than a designed section; they are now a full-width row and
    every group in the band spans the container.

    ⚠ NOT A CONTENT CHANGE. Every paragraph, list item, proof card,
    coverage sentence and action below is the copy this section shipped
    with. Only the arrangement and one photograph are new.
  */
  experienceVariant: 'editorial',
  experience: {
    eyebrow: 'Local sewer inspection experience',
    title: 'St. Louis sewer inspections backed by documented evidence',
    /*
      ⚠ DECORATION, NOT THE SECTION'S IMAGE. A faint technical-linework
      texture behind the whole band at 4 to 6 percent, `aria-hidden`
      and `pointer-events-none`. It is below the fold and lazy by
      nature - a CSS background is never preloaded and never
      prioritised.

      ⚠ IF IT EVER READS AS AN IMAGE, LOWER THE OPACITY. Do not answer
      a busy pattern with darker text or heavier card surfaces; the
      cards are opaque `bg-surface` and the section must stay legible
      with the layer switched off entirely.
    */
    texture: {
      src: '/images/markets/st-louis-mo/services/the-sewer-pros-st-louis-sewer-inspection-linework-background.webp',
      alt: 'Technical linework pattern of sewer inspection equipment',
      source: 'Supplied by the business owner, 2026-09-07.',
    },
    /*
      ⚠ THE SECTION'S ONLY IMAGE, AND IT SITS BESIDE THE COPY RATHER
      THAN BEHIND IT. 2896x2172, exactly the 4:3 the media box reserves,
      so `object-cover` crops nothing and the box prevents layout shift.

      ⚠ THE ALT TEXT DESCRIBES THE FRAME AND DOES NOT REPEAT THE
      HEADING. This is NOT one of the site's decorative card
      backgrounds: nothing is written over it and no adjacent element
      states what it shows, so it takes real alt text rather than
      `alt=""` (CLAUDE.md §55, §57).
    */
    image: {
      src: '/images/markets/st-louis-mo/services/the-sewer-pros-st-louis-sewer-camera-inspection-equipment.webp',
      alt: 'Sewer camera monitor and reel staged at a driveway cleanout at a brick home',
      source: 'Supplied by the business owner, 2026-09-22.',
    },
    intro: [
      'The Sewer Pros has inspected sewer lines throughout the greater St. Louis area since 2011. Our local work includes residential sewer camera inspections, pre-purchase sewer scopes, recurring sewer backup diagnosis, sewer line locating, sewer cleaning, and documentation for participating municipal sewer lateral programs.',
      'With more than 100,000 sewer camera inspections completed, we understand the conditions commonly found in St. Louis-area sewer lines. A professional camera inspection can document visible root intrusion, grease and scale buildup, offset pipe joints, standing water, cracks, and other conditions that may be contributing to slow drains or recurring backups.',
    ],
    blocks: [
      {
        title: 'See what is happening before deciding what comes next',
        body: [
          'A sewer camera inspection gives you visual evidence instead of an opinion based only on symptoms. We record the accessible portions of the sewer line, explain what the footage shows in plain language, and provide findings you can use when deciding whether to clean the line, monitor a condition, or consult a separate sewer repair provider.',
        ],
        listIntro: 'You receive:',
        /*
          ⚠ AN ICON PER ITEM, NOT FIVE CHECK MARKS (owner, 2026-09-07).
          Each mark is chosen for what the item actually says: a camera
          for footage, a speech bubble for the explanation, a page for
          the documentation, a compass for the guidance, a balance for
          the decision. Every one is `aria-hidden` beside text that
          states the same thing, so nothing rests on the picture.

          ⚠ THE COPY IS UNCHANGED. Only the marker beside it is new.
        */
        items: [
          {
            text: 'Video evidence of visible conditions inside the accessible sewer line',
            icon: 'camera',
          },
          {
            text: 'A clear explanation of the inspection findings',
            icon: 'explanation',
          },
          {
            text: 'Documentation you can review or share when seeking another opinion',
            icon: 'document',
          },
          {
            text: 'Guidance on whether cleaning or continued monitoring may be appropriate',
            icon: 'guidance',
          },
          {
            text: 'Information that helps you avoid making a major sewer decision based on guesswork',
            icon: 'decision',
          },
        ],
      },
      {
        title: 'Experience with St. Louis sewer lateral programs',
        body: [
          'Sewer lateral program requirements vary by municipality and property location. The Sewer Pros works with participating programs across the St. Louis region where current requirements and credentials permit. We can help document the condition of the line, prepare the required inspection information, and explain what the findings mean for the property owner.',
          'If you are unsure whether your sewer lateral falls under a municipal program or remains your responsibility to maintain, contact us before scheduling. We can help you identify the appropriate next step based on the property location and the inspection you need.',
        ],
      },
    ],
    proof: [
      {
        title: 'Serving St. Louis Since 2011',
        body: 'Local experience inspecting sewer laterals across older city properties, established suburbs, and growing communities throughout the St. Louis region.',
        icon: 'experience',
        accent: 'blue',
      },
      {
        title: 'More Than 100,000 Camera Inspections',
        body: 'Extensive inspection experience helps us recognize visible sewer-line conditions and explain the evidence clearly.',
        icon: 'camera',
        accent: 'blue',
      },
      {
        title: 'Diagnosis Without a Repair Sale',
        body: 'We inspect, document, locate, and clean sewer lines. Because we do not perform sewer repair or replacement, you remain in control of the next decision.',
        icon: 'independence',
        accent: 'green',
      },
    ],
    coverage: {
      title: 'Serving the greater St. Louis region',
      body: [
        'We provide sewer inspection, cleaning, locating, and diagnostic services throughout St. Louis City, St. Louis County, St. Charles County, Jefferson County, and surrounding communities. Service availability can vary by location, so contact us to confirm coverage for your property.',
      ],
    },
    actions: {
      primary: { label: 'Schedule a Sewer Inspection', pageId: id('core-contact') },
      secondary: {
        label: 'Learn About St. Louis Sewer Lateral Programs',
        pageId: id('svc-stl-sewer-lateral-inspection-reporting'),
      },
    },
  },
  /*
    ==========================================================================
    THE APPROVED SERVICES SECTION, UNMODIFIED, AS OF 2026-09-23.
    ==========================================================================
    ⚠ ST. LOUIS PREVIOUSLY SUBSTITUTED ITS OWN MARKET-SPECIFIC LATERAL-
    INSPECTION SERVICE FOR THE COMBINED CLEANING-AND-CAMERA CARD HERE.
    That composition is gone on owner direction (2026-09-23): this band
    now renders `homeServiceCards` verbatim, the same nine cards, same
    copy, same images, same `cards` layout as the home page, San Diego,
    Las Vegas, and `/locations/` — full parity rather than a fifth
    variant.

    ⚠ `svc-stl-sewer-lateral-inspection-reporting` IS NOT ORPHANED.
    Dropping it from THIS band does not remove its page or its internal
    links: it remains linked from this page's hero secondary action,
    several `servicePageIds` entries below, and other market-specific
    sections. Only its appearance IN THIS NINE-CARD BAND changed.
  */
  services: homeServiceCards,
  servicesTitle: approvedServicesTitle,
  servicesIntro: <p>{approvedServicesIntro}</p>,
  servicesVariant: 'cards',
  locationPageIds: [
    id('loc-stl-st-louis-city'),
    id('loc-stl-ballwin'),
    id('loc-stl-florissant'),
    id('loc-stl-st-charles'),
    id('loc-stl-chesterfield'),
  ],
  /*
    ⚠ SERVICE AREA, NOT OFFICES. This section exists precisely so a
    market can state where it works without implying a location it
    occupies (CLAUDE.md §11, 18 §87). No address, no pin, no hours.

    ⚠ IT REPLACED `coverage` ON 2026-09-07, ON OWNER DIRECTION, AND
    THE FIELD IS GONE RATHER THAN LEFT BESIDE IT. `MarketPageTemplate`
    renders one or the other, so a leftover `coverage` here would be a
    second copy of the same statement that nothing displays and nobody
    would notice going stale. San Diego and Las Vegas keep `coverage`
    and keep rendering `CoverageSection` exactly as before.

    The band answers the same question in the same place; what changed
    is that it now answers it in two tiers. The region comes first
    because that is what a visitor outside the five communities needs,
    and the five pages come second because that is what a visitor
    inside them is looking for.

    ⚠ THE THREE COUNTIES ARE COVERAGE, NOT PAGES. No county route
    exists in the approved registry and none is created here, so those
    cards carry no link, no arrow and no CTA - `ServiceAreaCountyCard`
    has no field to put one in. See that type.

    ⚠ TWO GEOGRAPHIC DISTINCTIONS THE COPY MUST KEEP (CLAUDE.md §26).
    St. Louis CITY is an independent jurisdiction and is NOT inside St.
    Louis County: it is a city card, and the county tier does not claim
    it. St. Charles COUNTY and the CITY of St. Charles are different
    places, and both carry the word that says which is which.

    ⚠ NAMING A COUNTY IS NOT PROMISING EVERY ADDRESS IN IT. The intro
    and the closing block both ask the visitor to confirm before
    booking rather than asserting coverage on their behalf, which is
    the same job `coverage.availabilityStatement` used to do.
  */
  serviceArea: {
    title: 'Where we serve in the St. Louis area',
    intro:
      'The Sewer Pros provides sewer camera inspection, sewer cleaning, hydro jetting, sewer line locating, and diagnostic services throughout the greater St. Louis region. The communities highlighted below have dedicated service pages, but they do not define the limits of our coverage. If your city or neighborhood is not listed, contact us to confirm service availability for your property.',
    counties: {
      title: 'Sewer service across the greater St. Louis region',
      intro:
        'Our St. Louis service area extends across communities in St. Louis County, St. Charles County, and Jefferson County. Contact us with your property location and service need so we can confirm current coverage before scheduling.',
      items: [
        {
          name: 'St. Louis County, Missouri',
          description:
            'Sewer inspection, cleaning, locating, and diagnostic services for residential, commercial, and managed properties across St. Louis County.',
          image: {
            src: '/images/markets/st-louis-mo/service-locations/the-sewer-pros-st-louis-county-mo-sewer-service-area.webp',
            alt: 'Residential service area in St. Louis County, Missouri',
            source: 'Supplied by the business owner, 2026-09-07.',
          },
        },
        {
          name: 'St. Charles County, Missouri',
          description:
            'Evidence-first sewer inspection and cleaning services for homes, businesses, buyers, and property professionals across St. Charles County.',
          image: {
            src: '/images/markets/st-louis-mo/service-locations/the-sewer-pros-st-charles-county-mo-sewer-service-area.webp',
            alt: 'Residential service area in St. Charles County, Missouri',
            source: 'Supplied by the business owner, 2026-09-07.',
          },
        },
        {
          name: 'Jefferson County, Missouri',
          description:
            'Professional sewer camera inspection, cleaning, and diagnostic services for properties throughout Jefferson County and surrounding communities.',
          image: {
            src: '/images/markets/st-louis-mo/service-locations/the-sewer-pros-jefferson-county-mo-sewer-service-area.webp',
            alt: 'Residential service area in Jefferson County, Missouri',
            source: 'Supplied by the business owner, 2026-09-07.',
          },
        },
      ],
    },
    /*
      The same five pages the plain list carried, in the same order,
      resolved the same way. St. Louis City takes the large tile as the
      market's flagship community.
    */
    cities: {
      title: 'Featured St. Louis-area service locations',
      intro:
        'Explore dedicated sewer inspection and cleaning information for featured communities across the St. Louis area. Each local page includes services, coverage details, and guidance for property owners and professionals in that community.',
      flagshipPageId: id('loc-stl-st-louis-city'),
      items: [
        {
          pageId: id('loc-stl-st-louis-city'),
          title: 'St. Louis City, MO',
          description:
            'Explore sewer camera inspection, sewer cleaning, and diagnostic services for homes, buyers, property managers, and commercial properties across St. Louis City.',
          ctaLabel: 'Explore St. Louis City',
          image: {
            src: '/images/markets/st-louis-mo/service-locations/the-sewer-pros-st-louis-city-mo-sewer-service-area.webp',
            alt: 'St. Louis City sewer service area',
            source: 'Supplied by the business owner, 2026-09-07.',
          },
        },
        {
          pageId: id('loc-stl-ballwin'),
          title: 'Ballwin, MO',
          description:
            'Find sewer inspection, cleaning, and diagnostic services for residential and commercial properties in Ballwin.',
          ctaLabel: 'Explore Ballwin',
          image: {
            src: '/images/markets/st-louis-mo/service-locations/the-sewer-pros-ballwin-mo-sewer-service-area.webp',
            alt: 'Ballwin, Missouri sewer service area',
            source: 'Supplied by the business owner, 2026-09-07.',
          },
        },
        {
          pageId: id('loc-stl-florissant'),
          title: 'Florissant, MO',
          description:
            'Review sewer camera inspection, sewer cleaning, and line-diagnostic services available for properties in Florissant.',
          ctaLabel: 'Explore Florissant',
          image: {
            src: '/images/markets/st-louis-mo/service-locations/the-sewer-pros-florissant-mo-sewer-service-area.webp',
            alt: 'Florissant, Missouri sewer service area',
            source: 'Supplied by the business owner, 2026-09-07.',
          },
        },
        {
          pageId: id('loc-stl-chesterfield'),
          title: 'Chesterfield, MO',
          description:
            'Explore evidence-first sewer inspection, cleaning, and locating services for Chesterfield properties.',
          ctaLabel: 'Explore Chesterfield',
          image: {
            src: '/images/markets/st-louis-mo/service-locations/the-sewer-pros-chesterfield-mo-sewer-service-area.webp',
            alt: 'Chesterfield, Missouri sewer service area',
            source: 'Supplied by the business owner, 2026-09-07.',
          },
        },
        {
          pageId: id('loc-stl-st-charles'),
          title: 'St. Charles, MO',
          description:
            'Find sewer camera inspection, sewer cleaning, and diagnostic services for homes and properties in St. Charles.',
          ctaLabel: 'Explore St. Charles',
          image: {
            src: '/images/markets/st-louis-mo/service-locations/the-sewer-pros-st-charles-mo-sewer-service-area.webp',
            alt: 'St. Charles, Missouri sewer service area',
            source: 'Supplied by the business owner, 2026-09-07.',
          },
        },
      ],
    },
    closing: {
      title: 'Do not see your community listed?',
      body: 'These featured locations do not represent the full limit of our greater St. Louis service area. Tell us where the property is located and what is happening with the sewer line, and we will confirm whether service is currently available before you schedule.',
      action: { label: 'Contact The Sewer Pros', pageId: id('core-contact') },
    },
  },
  faq: [
    {
      question: 'Does MSD inspect my sewer lateral?',
      answer: (
        <p>
          No. MSD maintains the public mains and collection system. It states
          that homeowners are responsible for maintaining the lateral, and it
          does not inspect or repair private lines.
        </p>
      ),
    },
    {
      question: 'Does my municipality have a lateral repair program?',
      answer: (
        <p>
          Many in the area do, funded by an annual charge on the real estate tax
          bill, but terms vary considerably and not every jurisdiction
          participates. The City of St. Charles runs its own sewer system and
          sits outside the area MSD defines as its service area. Check with your
          own municipality for what applies to your address.
        </p>
      ),
    },
    {
      question: 'Can you get my lateral repair approved?',
      answer: (
        <p>
          No, and neither can anyone else. We are licensed through most of the
          area&rsquo;s municipal lateral programs to submit reports, and we
          document what the inspection shows. The municipality decides claims.
        </p>
      ),
    },
    /*
      ⚠ ANSWERS ARE `ReactNode`, NOT STRINGS. Every answer on this site
      is JSX, and `lib/schema/faq.ts` reads FAQPage answer text out of
      the same nodes `FaqSection` renders - so schema cannot drift from
      visible copy, and a second copy of this text must never be added
      anywhere for schema's sake (15 §67, DEC-089).
    */
    {
      question:
        'What is the difference between a general sewer inspection and a sewer camera inspection?',
      answer: (
        <p>
          A general sewer inspection assesses overall sewer line condition and
          function. A sewer camera inspection uses a video camera fed through
          the line to visually document specific conditions, such as blockages,
          root intrusion, cracks, and offsets, giving you recorded evidence
          instead of an estimate based on symptoms alone.
        </p>
      ),
    },
    /*
      ⚠ THIS ANSWERS A PRICE QUESTION WITHOUT STATING A PRICE, WHICH IS
      THE ONLY WAY IT CAN BE ANSWERED HERE. CLAUDE.md §24 lists pricing
      among facts that may not be invented and none is documented for
      this business. Declining to quote is the honest answer; do not
      later fill this with a range, a starting-at figure, or a "most
      customers pay" line unless the owner publishes one.
    */
    {
      question: 'How much does a sewer inspection cost?',
      answer: (
        <p>
          Cost depends on the scope of the inspection and what we find once we
          are on-site, so we are not able to quote a number without
          understanding your specific situation first. Because we do not build
          our business around selling repairs, our focus during the inspection
          is on giving you accurate information about your sewer line&rsquo;s
          condition, not steering you toward a bigger job than you need.
        </p>
      ),
    },
    {
      question: 'Should I get a sewer inspection before buying a house in St. Louis?',
      answer: (
        <p>
          Yes. A pre-purchase sewer camera inspection can reveal conditions
          that a standard home inspection typically does not cover, giving you
          documented evidence of the sewer line&rsquo;s condition before you
          close. This matters especially in St. Louis, where much of the
          housing stock is older and sewer materials and conditions vary widely
          by property and municipality.
        </p>
      ),
    },
    /*
      ⚠ SIX ENTRIES ADDED 2026-09-04, TAKING THIS FAQ TO TWELVE. Drawn
      from real search and PAA-style questions confirmed against live
      search, not invented. No competitor copy was reproduced; the
      research established only that these are questions people
      actually ask.

      ⚠ THREE OF THE SIX ANSWER A QUESTION BY DECLINING TO ANSWER IT,
      AND THAT IS THE POINT. Inspection frequency, duration, and
      insurance coverage all have real answers that vary by property,
      by line, and by policy - and this business has published no
      interval, no timeframe, and no coverage position. Naming one
      would be exactly the invented fact CLAUDE.md §24 rules out. Do
      not later "improve" these by adding a number.
    */
    {
      question: 'How often should I have my sewer line inspected?',
      answer: (
        <p>
          There is no single interval that applies to every property. Older
          lines, properties with a history of root intrusion or backups, and
          homes on materials like clay or cast iron generally benefit from more
          frequent checks than a newer line with no history of problems. If you
          are not sure where your line falls on that spectrum, a camera
          inspection is what establishes it. A common starting point homeowners
          use is checking in every few years, or sooner after any backup, slow
          drain pattern, or before a major landscaping or construction project
          near the line.
        </p>
      ),
    },
    {
      question: 'What can a sewer camera inspection show, and what can it miss?',
      answer: (
        <p>
          A camera inspection shows the visible condition of the accessible
          portion of the line: blockages, root intrusion, cracks, offset
          joints, bellies, and standing water. It documents what the camera can
          physically see and reach. It does not diagnose issues in sections the
          camera cannot access, and it is not a structural engineering
          assessment. What it does give you is documented, visual evidence of
          the conditions that are present, which is the basis for deciding what
          to do next.
        </p>
      ),
    },
    {
      question: 'How long does a sewer camera inspection take?',
      answer: (
        <p>
          Time varies with the length of the line, how many access points are
          available, and what the camera finds along the way. A straightforward
          inspection with clear access generally takes less time than one where
          multiple sections need to be checked or where cleanup is needed
          before the camera can proceed. We can give you a better estimate once
          we know your property&rsquo;s setup.
        </p>
      ),
    },
    {
      question: 'What happens if the inspection finds a problem?',
      answer: (
        <p>
          You get the video and the documented findings, and you decide what
          happens next. If the issue is something a cleaning or hydro jetting
          can resolve, that is on the table as our service. If what is found
          looks more serious, structural repair or replacement is not something
          we sell. You are free to get a second opinion, consult a repair
          contractor of your choosing, or simply monitor the condition. Nothing
          about the inspection commits you to a specific next step.
        </p>
      ),
    },
    {
      question: 'Does homeowners insurance cover sewer lateral damage?',
      answer: (
        <p>
          Coverage for sewer lateral issues varies by policy and by insurer,
          and some municipalities also offer a separate lateral repair
          program that is not the same thing as an insurance policy. We are
          not able to tell you what your specific policy covers. Your insurance
          provider is the right source for that answer, and a documented camera
          inspection is often useful to have on hand either way, since insurers
          and municipal programs alike frequently want to see video evidence
          before considering a claim.
        </p>
      ),
    },
    {
      question: 'Can I be present during the sewer camera inspection?',
      answer: (
        <p>
          Yes. Being present lets you see the footage in real time and ask
          questions about what the camera is showing as the inspection happens,
          rather than only reviewing a report afterward. If you are not able to
          be there, the inspection is still fully documented on video so you
          can review it and ask questions afterward.
        </p>
      ),
    },
  ],
  /*
    ⚠ `processBackground` IS THE SAME FRAME AS `heroBackground`, AND
    THAT IS THE ACKNOWLEDGED PLACEHOLDER STATE (owner, 2026-09-04).
    One picture appears twice on this page until dedicated imagery
    arrives. Swap either src independently.
  */
  processBackground: {
    src: '/images/homepage/differentiator/the-sewer-pros-st-louis-residential-property-exterior.webp',
    alt: 'Street view of a brick two-story house on a tree-lined block',
    source:
      'Supplied by the business owner, 2026-09-04. Rendered scene, not a photograph of a Sewer Pros job.',
  },
  /*
    The three approved St. Louis lateral guides, in the home page's
    featured layout. All three are `launch` and `indexable`; a gated
    one would drop out at the resolver rather than ship a dead link.
  */
  relatedTitle: 'St. Louis sewer lateral guides',
  relatedEyebrow: 'Before you file a claim',
  relatedIntro:
    'What a lateral report should contain, and which municipal program applies to your address.',
  relatedPageIds: [
    id('res-stl-lateral-report'),
    id('res-stl-city-program'),
    id('res-stl-county-program'),
  ],
  relatedFeaturedPageId: id('res-stl-lateral-report'),
  relatedFeaturedPoints: [
    'What the program asks for',
    'What the video has to show',
    'How the report is submitted',
  ],
  relatedDescriptions: {
    [id('res-stl-lateral-report')]:
      'What a lateral report should contain before it goes to a municipal program.',
    [id('res-stl-city-program')]:
      'How the City of St. Louis program works and what it asks of a property owner.',
    [id('res-stl-county-program')]:
      'Which county program applies to your address, and where the boundaries fall.',
  },
  relatedMeta: {
    [id('res-stl-lateral-report')]: {
      category: 'Reporting guide',
      icon: 'clipboard-list',
      accent: 'navy',
    },
    [id('res-stl-city-program')]: {
      category: 'City program',
      icon: 'file-video',
      accent: 'blue',
    },
    [id('res-stl-county-program')]: {
      category: 'County program',
      icon: 'scale',
      accent: 'green',
    },
  },
  relatedViewAllPageId: id('hub-resources'),
  faqEyebrow: 'Need a quick answer?',
  /*
    ==========================================================================
    THE CLOSING CTA. Expanded 2026-09-07 on owner direction.
    ==========================================================================
    ⚠ THE BACKGROUND IMAGE AND THE FORM ARE UNCHANGED AND WERE ASKED TO
    STAY. What grew is the left column, which held a heading, one
    sentence and a phone line against a form roughly three times its
    height - 425px of empty column beside it, measured.

    ⚠⚠ THE SCHEDULING NOTE IS THE RISKIEST LINE ON THIS PAGE AND EVERY
    CLAUSE OF IT IS CHECKED AGAINST DEC-088:

      "Monday through Friday, 8:00am to 4:00pm"  matches
          `verifiedOffers[1].card.facts[0].value` word for word.
      "Same-day appointments may be available when scheduling permits"
          is the APPROVED HEDGE. DEC-088 approved describing same-day
          availability and forbids promising it. "May be available",
          "when scheduling permits" - both halves are load-bearing and
          neither may be dropped for brevity.
      "We do not offer weekend, 24/7, or emergency service" matches
          `facts[2].value`, and published weekday hours rule all three
          out affirmatively (01 §35).

    ⚠ DO NOT MOVE THIS NOTE INTO SMALLER OR DIMMER TEXT. DEC-088
    requires the limits sit at the same weight as the claim they
    qualify; `CtaSection` renders it in opaque white at `text-sm`, and
    the scrim measurement forbids dimming it.

    ⚠ THE COVERAGE SENTENCE NAMES THE PUBLISHED SERVICE AREA plus St.
    Louis City, which has its own approved location page and appears in
    the same list in the service-area section above. It ends by asking
    the visitor to confirm rather than asserting coverage for them.

    ⚠ NO REPAIR. "Because we do not perform sewer repair or
    replacement" is the differentiator stated as this company's model,
    not an accusation about anyone else's (CLAUDE.md §9, §27).
  */
  cta: {
    eyebrow: 'Evidence before expensive sewer decisions',
    title: 'Schedule a sewer camera inspection in St. Louis',
    /*
      ⚠ `max-w-prose` ON EACH BLOCK, NOT ON THE WRAPPER.
      `CtaSection` caps `body` at `--container-reading` (672px); the
      owner asked for 540 to 600px for this longer copy, and 65ch lands
      at about 585. Setting it per block keeps that measure without a
      new prop on a component six templates share.
    */
    body: (
      <>
        <p className="max-w-prose">
          If you are dealing with recurring sewer backups, slow drainage
          across multiple fixtures, concerns about an older sewer lateral,
          or questions before purchasing a property, a professional sewer
          camera inspection can show what is visible inside the accessible
          line.
        </p>
        <p className="max-w-prose">
          The Sewer Pros records the inspection and explains the footage in
          plain language. A sewer scope may document root intrusion,
          buildup, blockages, offset pipe joints, standing water, cracks, or
          other visible conditions that can help determine whether sewer
          cleaning, continued monitoring, or further evaluation is
          appropriate.
        </p>
        <p className="max-w-prose">
          Because we do not perform sewer repair or replacement, our
          findings are not tied to selling you a major repair. You receive
          evidence you can keep, review, and use when deciding what happens
          next.
        </p>

        <h3 className="text-h4 font-semibold tracking-tight">
          What you receive
        </h3>

        {/*
          ⚠ AN ICON PER ITEM, NOT THREE CHECK MARKS (owner direction,
          2026-09-07). Each mark is chosen for what the item actually
          says: a camera for the recorded video, a page for the
          documented findings, a balance for information used to reach
          a decision. Three identical ticks said only "this is a list",
          which the `<ul>` already said.

          ⚠ THEY COME FROM `components/sections/section-icons.tsx`, THE
          SAME FAMILY THE EXPERIENCE SECTION'S LIST USES. Hand-rolling
          the SVG paths here would put a second version of the same
          camera on one page.

          ⚠ WHITE, NOT GREEN, AND IT IS NOT A PREFERENCE. The owner
          asked for green marks. `--accent` measures about 1.15:1
          against the worst ground this scrimmed photograph can
          present, so a green mark here is not a dark icon - it is an
          invisible one. White is the only tone the scrim's 4.76:1
          measurement covers, and it matches every other mark in this
          column. Flagged rather than done quietly.

          Every mark is `aria-hidden` beside the sentence that states
          the same thing, so a screen reader hears a three-item list of
          plain text and nothing else (18 §96).
        */}
        <ul className="max-w-prose space-y-3">
          {(
            [
              [
                'Recorded video of accessible portions of the sewer line',
                CameraIcon,
              ],
              [
                'Documented findings explained in clear language',
                DocumentIcon,
              ],
              [
                'Information you can use for cleaning, maintenance, a property purchase, or a second opinion',
                DecisionIcon,
              ],
            ] as const
          ).map(([item, Mark]) => (
            <li key={item} className="flex items-start gap-3">
              <Mark className="mt-1 size-5 shrink-0 text-white" />
              <span className="text-body leading-7">{item}</span>
            </li>
          ))}
        </ul>

        <p className="max-w-prose">
          We provide sewer camera inspection, sewer cleaning, hydro jetting,
          sewer line locating, and diagnostic services throughout St. Louis
          City, St. Louis County, St. Charles County, Jefferson County, and
          surrounding communities. Contact us to confirm availability for
          your property.
        </p>
      </>
    ),
    /*
      ⚠ NO BUTTON OF ITS OWN, ON OWNER DIRECTION (2026-09-07), AND IT
      IS THE SHAPE THE COMPONENT ALREADY RECOMMENDED. This CTA is the
      `split` variant with the lead form in its proof slot, and that
      form carries its own green submit. A second green button beside
      it, pointing at `/contact/` while a contact form is already on
      screen, is a competing ask rather than a stronger one (18 §62,
      §106) - `CtaSectionProps.action` says exactly that.

      A green "Request a St. Louis Sewer Inspection" button shipped
      here earlier the same day and was removed. Restoring it means
      restoring the competition; the form IS the ask on this section,
      and the phone below is the alternative for anyone who would
      rather talk.
    */
    hideAction: true,
    phoneAsButton: true,
    note: (
      <p>
        Weekday appointments are available Monday through Friday, 8:00am to
        4:00pm. Same-day appointments may be available when scheduling
        permits. We do not offer weekend, 24/7, or emergency service.
      </p>
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
   Market-specific service — /st-louis-mo/sewer-lateral-inspection-reporting/
   ========================================================================== */

export const lateralReportingContent: ServicePageContent = {
  /*
    ⚠ NOT THE PROPOSED COPY VERBATIM. The draft description's closing
    clause was "documented findings for property and transaction
    decisions" — this page is about municipal lateral repair-program
    reimbursement documentation (see body below), not a pre-purchase
    or real-estate-transaction page (that's
    svc-pre-purchase-sewer-inspection). Reworded the closing clause to
    match what this page actually covers.
  */
  metaDescription:
    'Learn about sewer lateral inspection and reporting services in St. Louis, including documented findings for municipal repair-program claims.',
  hero: {
    eyebrow: 'St. Louis area',
    title: 'Sewer Lateral Inspection & Municipal Reporting',
    intro: (
      <p>
        Camera inspection of the lateral with documentation prepared for
        submission to a municipal sewer lateral repair program.
      </p>
    ),
  },
  body: (
    <>
      <h2>What these programs are</h2>
      <p>
        Numerous municipalities across the St. Louis area operate sewer lateral
        repair programs, funded by a modest annual charge collected on the
        real estate tax bill. Where a program applies and a claim is
        approved, it can cover a substantial share of an eligible lateral
        repair.
      </p>

      <h2>Why documentation is the sticking point</h2>
      <p>
        Programs do not generally reimburse on the basis of a description of
        the problem. They typically require documentation from a licensed
        plumber establishing the defect, commonly including video of the line
        showing the condition and where along the line it sits.
      </p>
      <p>
        That documentation is the work. Without it, a homeowner with a genuine
        lateral failure may have no route into a program they have been
        paying into for years.
      </p>

      <h2>What we do</h2>
      <p>
        We inspect the lateral, record the footage, identify the visible
        condition and its distance along the line, and prepare the
        documentation the program requires. The Sewer Pros is licensed
        through most of the area&rsquo;s municipal sewer lateral programs for
        submitting reports.
      </p>

      <h2>What we cannot do</h2>
      <p>
        We cannot approve a claim, and we will not tell you one is likely.
        Eligibility rules differ sharply between municipalities: some cover
        only failures beneath the public right-of-way, others stop a set
        distance from the house, several exclude root clearing as ordinary
        maintenance, and caps range from none stated to a fixed dollar limit.
      </p>
      <p>
        The municipality applies its own rules to the evidence. We produce the
        evidence accurately, including where the line could not be assessed.
      </p>

      <h2>Why an independent inspection fits this particularly well</h2>
      <p>
        A lateral program claim turns on documented condition. We do not
        perform sewer repair or replacement, so what our footage shows is not
        the opening move in a quote from us for the remedy.
      </p>
    </>
  ),
  process: [
    { title: 'Confirm the program', description: 'Establish which municipality applies and what it requires.' },
    { title: 'Inspect the lateral', description: 'Record the line and locate any defect along it.' },
    { title: 'Prepare documentation', description: 'Compile the footage and written report in the required form.' },
    { title: 'Submit the report' },
  ],
  showDifferentiator: true,
  faq: [
    {
      question: 'Will the program pay for my repair?',
      answer: (
        <p>
          That is the municipality&rsquo;s decision, not ours. Programs differ
          on what they cover, where coverage begins and ends, what they exclude,
          and whether a cap applies. We document the condition; they apply their
          rules.
        </p>
      ),
    },
    {
      question: 'Is root clearing covered?',
      answer: (
        <p>
          Frequently not. Several programs classify routine root clearing as
          ordinary maintenance rather than a structural failure, and exclude it.
          The specifics vary by municipality.
        </p>
      ),
    },
    {
      question: 'Do I pay for the inspection even if the claim succeeds?',
      answer: (
        <p>
          In several programs the homeowner bears the cost of the inspection
          and documentation, with the program contributing to the repair
          itself. Check the terms your municipality publishes.
        </p>
      ),
    },
  ],
  relatedPageIds: [id('svc-sewer-camera-inspection'), id('market-st-louis-mo')],
  cta: {
    title: 'Get the lateral documented',
    body: 'Camera inspection and reporting prepared for municipal program submission.',
  },
}

/* ==========================================================================
   Location pages
   ========================================================================== */

export const stLouisLocationContent: Partial<Record<PageId, LocationPageContent>> = {
  /* -------------------------------------------------------------- City -- */
  [id('loc-stl-st-louis-city')]: stLouisCityContent,

  /* ----------------------------------------------------------- Ballwin -- */
  [id('loc-stl-ballwin')]: ballwinContent,

  /* -------------------------------------------------------- Florissant -- */
  [id('loc-stl-florissant')]: florissantContent,

  /* ------------------------------------------------------ Chesterfield -- */
  [id('loc-stl-chesterfield')]: chesterfieldContent,

  /* ------------------------------------------------------- St. Charles -- */
  [id('loc-stl-st-charles')]: stCharlesContent,
}

/* ==========================================================================
   Service + location pages
   ========================================================================== */

export const stLouisServiceLocationContent: Partial<
  Record<PageId, ServiceLocationPageContent>
> = {
  [id('sl-stl-city-camera')]: {
    metaDescription:
      'Schedule a sewer camera inspection in St. Louis City with documented video findings to better understand the condition of your sewer line.',
    hero: {
      eyebrow: 'St. Louis City',
      title: 'Sewer Camera Inspection in St. Louis City',
      intro: (
        <p>
          Video inspection of the lateral, often the document the City&rsquo;s
          lateral repair program requires, as well as the diagnosis.
        </p>
      ),
    },
    body: (
      <>
        <h2>Inspection as documentation</h2>
        <p>
          St. Louis City&rsquo;s lateral repair program requires a licensed
          plumber to inspect the line and submit a written statement together
          with video. The camera inspection is therefore not only how the
          problem is identified: it is frequently the evidence the program
          asks for.
        </p>

        <h2>Position decides coverage</h2>
        <p>
          The City&rsquo;s program covers breaks beneath the public
          right-of-way that cause a cave-in or backup, and excludes breaks under
          private property. Because coverage turns on where a defect sits,
          recording the distance along the line to each condition matters as
          much as identifying it.
        </p>
        <p>
          Clearing clogs and roots is excluded anywhere along the lateral, which
          makes the distinction between an obstruction and a structural failure
          consequential rather than academic.
        </p>

        <h2>What the footage typically shows on older city lines</h2>
        <p>
          Where laterals date from the eras when clay and cast iron were
          standard, the recurring findings are joint separation admitting roots,
          and internal corrosion and scale narrowing the bore. Both are visible
          on camera; neither can be established from symptoms at the fixtures.
        </p>
      </>
    ),
    relatedPageIds: [
      id('loc-stl-st-louis-city'),
      id('svc-sewer-camera-inspection'),
      id('svc-stl-sewer-lateral-inspection-reporting'),
    ],
  },

  [id('sl-chesterfield-camera')]: {
    metaDescription:
      "Schedule a sewer camera inspection in Chesterfield, Missouri, with documented findings to help clarify your sewer line's condition.",
    hero: {
      eyebrow: 'Chesterfield',
      title: 'Sewer Camera Inspection in Chesterfield',
      intro: (
        <p>
          Video inspection of the lateral, including on newer lines, where the
          problems are usually about ground movement rather than the pipe
          itself.
        </p>
      ),
    },
    body: (
      <>
        <h2>What a camera finds on a newer lateral</h2>
        <p>
          Chesterfield&rsquo;s housing is predominantly post-1970, so most
          laterals here are PVC rather than clay, cast iron, or bituminized
          fibre. That rules out the material failures that dominate older parts
          of the region, and it changes what the camera is looking for.
        </p>
        <p>
          On newer lines the recurring findings are a belly holding standing
          water, a joint pulled apart by settlement, or damage from later
          excavation. On camera these look quite different from the corrosion
          and root-filled joints of an older line, and they are easy to
          misattribute if you are reasoning from the age of the house instead of
          the footage.
        </p>

        <h2>Standing water is the signal to watch</h2>
        <p>
          A belly is the most common newer-line finding and the least visible
          from above ground. It produces slow drainage that clears and returns,
          because solids settle wherever flow has slowed.
        </p>
        <p>
          The camera shows it directly (water sitting in a section that should
          drain), and the distance counter establishes where along the run it
          sits. That distinction matters, because a belly and a blockage feel
          identical at the fixtures and call for different responses.
        </p>

        <h2>Documentation for a lateral program</h2>
        <p>
          Chesterfield funds a residential lateral repair program through a
          $28 annual charge on the tax bill, in place since 2001. Municipal
          programs generally want documentation from a licensed plumber before
          considering a claim, which is often the video itself.
        </p>
        <p>
          Confirm current program terms with Chesterfield Public Works; caps
          and exclusions vary between municipalities, and we will not restate
          figures we have not verified against the city&rsquo;s own source.
        </p>
      </>
    ),
    relatedPageIds: [
      id('loc-stl-chesterfield'),
      id('svc-sewer-camera-inspection'),
      id('svc-stl-sewer-lateral-inspection-reporting'),
    ],
  },

  [id('sl-chesterfield-hydro')]: {
    metaDescription:
      'Learn about hydro jetting in Chesterfield, Missouri, and when high-pressure cleaning may help address buildup inside sewer and drain lines.',
    hero: {
      eyebrow: 'Chesterfield',
      title: 'Hydro Jetting in Chesterfield',
      intro: (
        <p>
          High-pressure cleaning for lines carrying accumulation, and an
          honest assessment of when a Chesterfield line does not need it.
        </p>
      ),
    },
    body: (
      <>
        <h2>When jetting is the right tool here</h2>
        <p>
          Hydro jetting removes material from the pipe wall along a length of
          line, rather than boring a channel through a single obstruction. It
          suits grease, scale, sediment, and sludge: accumulation that has
          narrowed the effective diameter over time.
        </p>

        <h2>When it is not</h2>
        <p>
          On a comparatively young line, accumulation is often not the problem.
          Chesterfield&rsquo;s housing is largely post-1970, and PVC laterals do
          not scale the way cast iron does or admit roots the way separated clay
          joints do.
        </p>
        <p>
          Where a newer line drains slowly, the cause is more often a belly
          holding water, a joint opened by ground movement, or damage from later
          work. Jetting a line with a belly clears the settled material and
          leaves the belly, so the problem returns on the same cycle.
        </p>
        <p>
          That is worth establishing before applying pressure rather than after
          paying for it.
        </p>

        <h2>Condition first where it is unknown</h2>
        <p>
          High-pressure water in a line that is already compromised can worsen
          the damage. Where a line&rsquo;s condition is not known, inspecting
          before jetting is part of doing the work properly.
        </p>
        <p>
          If the inspection shows a line that genuinely has accumulation,
          jetting is the right answer and we will say so. If it shows a
          structural cause, jetting will not fix it, and we will say that
          instead.
        </p>
      </>
    ),
    relatedPageIds: [
      id('loc-stl-chesterfield'),
      id('svc-hydro-jetting'),
      id('cmp-hydro-vs-snaking'),
    ],
  },

  [id('sl-ballwin-prepurchase')]: {
    metaDescription:
      'Schedule a pre-purchase sewer inspection in Ballwin with documented camera findings to help evaluate a property before closing.',
    hero: {
      eyebrow: 'Ballwin',
      title: 'Pre-Purchase Sewer Inspection in Ballwin',
      intro: (
        <p>
          Inspect the lateral before closing, and understand what
          Ballwin&rsquo;s lateral program will and will not cover once the
          property is yours.
        </p>
      ),
    },
    body: (
      <>
        <h2>Why the program terms belong in a buying decision</h2>
        <p>
          Ballwin&rsquo;s lateral repair program pays up to $4,500 per repair,
          and the City may reimburse up to $7,500 where it approves special
          circumstances such as deep excavation or street cutting. It also
          treats clearing roots once a year or less as normal maintenance
          rather than a covered repair.
        </p>
        <p>
          For a buyer, that turns an inspection finding into something more
          specific than &ldquo;there is a problem&rdquo;. The City says the
          program is not intended to satisfy a home sale contingency: when a
          buyer&rsquo;s lateral inspection notes defects but the line has no
          history of the repeated blockage or failure the program looks for, the
          repair is not covered. A new owner who later has a qualifying problem
          can apply under the normal criteria. A line that needs root clearing
          once a year or less is treated as normal maintenance, which is a
          recurring cost the owner carries.
        </p>

        <h2>What the inspection establishes before you commit</h2>
        <ul>
          <li>Whether the visible condition is structural or accumulation</li>
          <li>Where along the line any defect sits</li>
          <li>Whether roots are entering, and at what point</li>
          <li>What could not be assessed, and why</li>
        </ul>

        <h2>Construction era in Ballwin</h2>
        <p>
          Ballwin says most older sewer laterals in the city are clay pipe,
          which tends to crack, break, separate at joints and let roots in, and
          those defects can exist while the line still works normally. The
          median year built for homes in the City of Ballwin is 1976 (American
          Community Survey, 2019-2023 five-year estimates). The age of a house
          is a poor proxy for the condition of its lateral; which situation
          applies to a particular property is a question for the camera.
        </p>

        <h2>Timing</h2>
        <p>
          The inspection is most useful while decisions remain available to you.
          What you do with the findings is yours to decide with your own
          advisers; we document the line, not the transaction.
        </p>
        <p>
          Program terms are from the City of Ballwin&rsquo;s Sewer Lateral
          Repair Program page, which is undated. Confirm current terms and
          funding with the Ballwin Inspections Department.
        </p>
      </>
    ),
    relatedPageIds: [
      id('loc-stl-ballwin'),
      id('svc-pre-purchase-sewer-inspection'),
    ],
  },

  [id('sl-st-charles-prepurchase')]: {
    metaDescription:
      'Schedule a pre-purchase sewer inspection in St. Charles, Missouri, with documented findings to support an informed property decision.',
    hero: {
      eyebrow: 'St. Charles',
      title: 'Pre-Purchase Sewer Inspection in St. Charles',
      intro: (
        <p>
          Inspect the lateral before closing, in a city that runs its own sewer
          system and reimburses lateral repairs differently from its
          neighbours.
        </p>
      ),
    },
    body: (
      <>
        <h2>Different authority, different rules</h2>
        <p>
          The City of St. Charles runs its own sanitary sewer system, with its
          own treatment facilities and its own oversight, and sits outside the
          area MSD defines as its service area. Guidance a buyer has read about
          St. Louis County does not necessarily transfer.
        </p>

        <h2>What the 90% structure means for a buyer</h2>
        <p>
          St. Charles&rsquo;s program reimburses 90% of the authorised cost of
          an eligible lateral repair, capped at $7,500. Landscaping and
          ornamental structures are excluded.
        </p>
        <p>
          Two consequences follow for someone deciding whether to buy. A share
          of any repair remains the owner&rsquo;s regardless of approval, so the
          scale of the defect matters. And the City Code asks for a written
          statement from a master plumber or master drainlayer that the lateral
          has been cabled, which gives a recurring blockage a documentation
          path.
        </p>

        <h2>What we establish</h2>
        <p>
          The visible condition of the accessible line, where any defect sits
          along it, whether roots are entering, and what could not be assessed.
          That is information for your due diligence, not advice about the
          purchase.
        </p>
      </>
    ),
    relatedPageIds: [
      id('loc-stl-st-charles'),
      id('svc-pre-purchase-sewer-inspection'),
    ],
  },

  [id('sl-florissant-cleaning')]: {
    metaDescription:
      'Request professional sewer cleaning in Florissant, Missouri, to address buildup, blockages, and flow problems with inspection-focused service.',
    hero: {
      eyebrow: 'Florissant',
      title: 'Sewer Cleaning in Florissant',
      intro: (
        <p>
          Clearing accumulated material from Florissant lines, and
          establishing whether accumulation is the whole story.
        </p>
      ),
    },
    body: (
      <>
        <h2>Cleaning, and knowing whether cleaning is enough</h2>
        <p>
          Clearing a line restores flow. It does not establish why the line
          blocked, and in a city whose housing is concentrated in the post-war
          decades, that distinction carries weight.
        </p>
        <p>
          Laterals of that era were commonly laid in clay, cast iron, or
          bituminized fibre pipe. Each fails differently: joints separating and
          admitting roots, internal corrosion and scale, or deformation under
          soil load. All three produce recurring blockages that clearing
          temporarily relieves without addressing.
        </p>

        <h2>Where Florissant&rsquo;s program fits</h2>
        <p>
          Florissant&rsquo;s lateral program covers from the main sewer to
          within five feet of the residence, with no stated maximum, and
          requires video inspection for claim approval. The homeowner pays for
          the initial evaluation; where a claim is approved, the city&rsquo;s
          contractor performs the repair.
        </p>
        <p>
          So if a line blocks repeatedly, the useful sequence is usually to
          clean it enough to see it, then inspect, because the footage is both
          the diagnosis and, if a structural failure is present, the
          documentation the program requires.
        </p>

        <h2>When cleaning is the right answer</h2>
        <p>
          Often it is. A line that clears and stays clear had accumulation, not
          a defect. Recommending an inspection on a line that does not need one
          would be the same behaviour we exist to avoid.
        </p>
      </>
    ),
    relatedPageIds: [
      id('loc-stl-florissant'),
      id('svc-sewer-cleaning'),
      id('svc-sewer-cleaning-camera-inspection'),
    ],
  },
}
