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
 * municipality runs its own sewer lateral repair programme with its own
 * fee, cap, coverage boundary, and exclusions, and those terms are not
 * transferable between cities. Ballwin's $4,500 cap and its
 * once-a-year root-clearing rule cannot be restated for Florissant,
 * whose programme has no cap and stops five feet from the house.
 * St. Charles is not even in MSD's territory.
 *
 * ---------------------------------------------------------------------------
 * HOUSING ERA IS QUALITATIVE HERE
 * ---------------------------------------------------------------------------
 * DEC-072 approved the median-year figures for use with ACS citation.
 * These pages nonetheless describe era qualitatively, because the
 * jurisdictional facts already carry the differentiation and a median
 * year adds little to an argument about municipal programme terms. The
 * San Diego and Las Vegas pages cite figures where they DO carry an
 * argument about what fails on newer lines.
 *
 * Pipe material stays era correspondence throughout — no source ties a
 * material to a specific city, and CLAUDE.md §73 forbids fabricated
 * localisation.
 *
 * ---------------------------------------------------------------------------
 * ⚠ CHESTERFIELD STATES LESS THAN ITS SIBLINGS
 * ---------------------------------------------------------------------------
 * Its three pages ship on housing-era differentiation, with the lateral
 * section limited to the published fee and start date. The cap and
 * exclusions remain unverified after an exhausted search, so per
 * DEC-072 the copy cite-and-links to Chesterfield Public Works rather
 * than restating figures we have not confirmed.
 *
 * ---------------------------------------------------------------------------
 * ⚠ NO CLAIM OF PROGRAMME OUTCOMES
 * ---------------------------------------------------------------------------
 * The business is "licensed through most of the municipal sewer lateral
 * programs for submitting reports" — a verified business fact. It
 * documents conditions; the municipality decides claims. No page below
 * promises approval, reimbursement, or eligibility.
 */

import { ApprovedInlineLink } from '@/components/links/ApprovedInlineLink'
import type {
  LocationPageContent,
  MarketPageContent,
  PageId,
  ServiceLocationPageContent,
  ServicePageContent,
} from '@/types'

const id = (value: string): PageId => value as PageId

/* ==========================================================================
   Market hub — /st-louis-mo/
   ========================================================================== */

export const stLouisMarketContent: MarketPageContent = {
  /*
    ⚠ THE HERO NAMES A WIDER AREA THAN THE COVERAGE SECTION LISTS, AND
    THAT IS DELIBERATE (owner, 2026-09-04).

    "St. Louis County, St. Charles County, Jefferson County" is the
    service area the business publishes about itself
    (`marketOperatingDetail`, `serviceAreaSource: 'published'`,
    DEC-070). The coverage section lists five communities because those
    are the locations with approved PAGES - a smaller set, and a
    different kind of statement.

    Rather than narrow a published fact to match a page inventory, the
    coverage section says which of the two it is. Do not "fix" this by
    trimming the hero.
  */
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
  heroBackground: {
    /*
      ⚠ PLACEHOLDER, KNOWINGLY. This frame is also the process band's
      background further down the page, so it currently appears twice
      (owner, 2026-09-04: dedicated imagery comes after the template
      locks in). Swap this src first when a St. Louis hero frame
      exists; nothing else needs to change.
    */
    src: '/images/homepage/differentiator/the-sewer-pros-st-louis-residential-property-exterior.webp',
    alt: 'Street view of a brick two-story house on a tree-lined block',
    source:
      'Supplied by the business owner, 2026-09-04. Rendered scene, not a photograph of a Sewer Pros job.',
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
        'Many St. Louis area municipalities run lateral repair programmes that ask for documentation before a claim is considered.',
      linksHeading: 'Programme guides',
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
    ⚠ THREE CARDS CARRYING WHAT THE LONG "why lateral programmes make
    documentation matter" SECTION USED TO SAY. The substance is
    unchanged and nothing was sharpened: the programmes "can"
    meaningfully change a cost, terms "vary", and whether one applies
    is "a question about your specific municipality". The
    programme-by-programme detail now lives in the three resource
    guides, which the routing card above links.
  */
  lateralCards: {
    title: 'Who is responsible for the lateral',
    intro:
      'The sewer lateral runs from the building to the public sewer. Understanding whose problem it is, and what documentation a municipal programme asks for, is most of what people come to this page to find out.',
    items: [
      {
        title: 'MSD maintains the mains, not your lateral',
        description:
          'The Metropolitan St. Louis Sewer District states that homeowners are responsible for maintaining the sewer lateral. It does not inspect or repair private lines, so the condition of your own line is not something the utility will establish for you.',
      },
      {
        title: 'Lateral programmes ask for documentation',
        description:
          'Many municipalities in the area operate sewer lateral repair programmes funded by a small annual charge on the real estate tax bill. They generally require documentation from a licensed plumber before a claim is considered, commonly including video of the line.',
      },
      {
        title: 'The terms are not uniform',
        description:
          'Fees, caps, coverage boundaries, and exclusions differ between municipalities, and the City of St. Charles is not in MSD\u2019s service territory at all: it runs its own sewer system. Whether a programme applies to your address, and what it covers, is a question about your specific municipality.',
      },
    ],
  },
  /*
    ⚠ THE ERA-CORRESPONDENCE QUALIFIER IS LOAD-BEARING AND IS CARRIED
    VERBATIM IN `intro`. It is what keeps this section a statement
    about materials used in a period rather than a claim about any
    reader's address, and the no-fake-data governance depends on it.
    Do not drop it, shorten it, or move it below the cards.
  */
  materialCards: {
    title: 'Older lines, older materials',
    intro:
      'This is era correspondence, not a claim about any particular street or address. What a specific line is made of, and what condition it is in, is what a camera inspection establishes.',
    items: [
      {
        title: 'Vitrified clay',
        description:
          'Common through much of the twentieth century. Clay separates at the joints and admits roots, which is the failure pattern a camera most often finds in older city and inner-suburb lines.',
      },
      {
        title: 'Cast iron',
        description:
          'Also common in that period. Cast iron corrodes and scales internally, narrowing the bore over time rather than breaking suddenly.',
      },
      {
        title: 'Orangeburg',
        description:
          'Bituminized fibre pipe, installed through the post-war decades until its manufacturer closed in 1974. It deforms under load, and any remaining Orangeburg is now well past its intended service life.',
      },
    ],
  },
  /*
    ⚠ THREE SECTIONS LEFT THIS BLOCK ON 2026-09-04 AND ARE NOT LOST.

      "Who is responsible for the lateral"   -> `lateralCards` card 1
      "Why lateral programmes make ..."      -> `lateralCards` cards 2-3
      "Older lines, older materials"         -> `materialCards`

    Their substance is unchanged; only the presentation moved from a
    five-section text wall to card grids. Do not restate any of them
    here as prose - the page would then say each thing twice.

    What remains is the proof paragraph, which is claim-bearing and
    belongs in reviewable content rather than in a card.
  */
  body: (
    <>
      <h2>Our work in St. Louis</h2>
      <p>
        The Sewer Pros has inspected sewer lines across the St. Louis area since
        2011, completing over 100,000 camera inspections in that time. We are
        the #1 choice in St. Louis for sewer inspections.
      </p>
      <p>
        We are also licensed through most of the area&rsquo;s municipal sewer
        lateral programmes for submitting reports, which matters more than it
        sounds, for the reason below.
      </p>

      {/*
        The conversion bridge that used to follow the MSD block.
        It stays in prose because it is a sentence, not a card, and it
        is the page's only in-body link to the contact page.
      */}
      <p>
        If you are not sure whether your sewer lateral falls under a municipal
        repair programme or is your own responsibility to maintain, a sewer
        camera inspection gives you a clear, documented answer.{' '}
        <ApprovedInlineLink pageId={id('core-contact')}>
          Request an inspection
        </ApprovedInlineLink>{' '}
        to see what is actually happening in your line before you decide on
        next steps.
      </p>
    </>
  ),
  /*
    The real estate module, lifted out of `body` so it renders as its
    own section between the material cards and the model comparison.
    Copy is unchanged from the version approved on 2026-09-04.
  */
  localFeature: {
    title: 'Buying or selling a home in St. Louis',
    body: (
      <>
      {/*
        Real estate and pre-purchase intent (owner, 2026-09-04). Placed
        last in `body` so it sits directly above the services band the
        template renders next.

        ⚠ WHAT THIS DOES NOT CLAIM. No share of housing stock, no age
        threshold, no failure rate, no assertion about what an
        inspection will find. "Much of the housing stock predates modern
        sewer materials" is the same era correspondence the section
        above already draws and stops where that section stops.

        ⚠ AND IT DOES NOT SELL THE REPAIR. "Warrant further evaluation"
        rather than "needs replacing": CLAUDE.md §9 forbids presenting
        the business as a repair contractor, and the differentiator is
        that the evidence comes from someone who does not perform the
        work it might imply.

        The three guides link by PAGE ID through `ApprovedInlineLink`,
        not by written path. All three are `launch` and `indexable`; a
        gated one would fail at the resolver rather than shipping a dead
        link.
      */}
      <h2>Buying or selling a home in St. Louis? Know what is in the sewer line first</h2>
      <p>
        A sewer camera inspection gives home buyers, sellers, and real estate
        agents documented evidence of a property&rsquo;s sewer line condition
        before closing, not just an assumption based on the home&rsquo;s age.
        In St. Louis, where much of the housing stock predates modern sewer
        materials, a pre-purchase sewer inspection can confirm whether a line
        is sound, needs cleaning, or shows signs that warrant further
        evaluation, without pressuring anyone toward repair or replacement.
      </p>
      <p>Related resources:</p>
      <ul>
        <li>
          <ApprovedInlineLink pageId={id('res-stl-lateral-report')}>
            Sewer lateral reporting for St. Louis property owners
          </ApprovedInlineLink>
        </li>
        <li>
          <ApprovedInlineLink pageId={id('res-stl-city-program')}>
            Understanding the St. Louis City sewer lateral programme
          </ApprovedInlineLink>
        </li>
        <li>
          <ApprovedInlineLink pageId={id('res-stl-county-program')}>
            Which sewer lateral programme applies to me? (St. Louis County)
          </ApprovedInlineLink>
        </li>
      </ul>
      </>
    ),
  },
  /*
    ⚠ SITEWIDE SERVICE ARTWORK, NOT ST. LOUIS PHOTOGRAPHY. These are
    the same frames the home page mosaic uses. No St. Louis-specific
    service imagery exists and none was sourced for this build; the
    `image` field is what promotes the band from a row list to the
    card mosaic, and swapping the src later needs no other change.
  */
  services: [
    {
      pageId: id('svc-stl-sewer-lateral-inspection-reporting'),
      description: 'Video documentation prepared for municipal lateral programme submission.',
      image: {
        src: '/images/homepage/services/the-sewer-pros-sewer-camera-inspection-video-evidence.webp',
        alt: 'Camera monitor showing the inside of a line, beside an open cleanout',
        source:
          'Supplied by the business owner, 2026-09-04. Rendered scene, not a photograph of a Sewer Pros job.',
      },
    },
    {
      pageId: id('svc-sewer-camera-inspection'),
      description: 'See the visible condition of the line.',
      image: {
        src: '/images/homepage/services/the-sewer-pros-sewer-cleaning-camera-inspection.webp',
        alt: 'Cleaning and camera equipment set up together at a cleanout',
        source:
          'Supplied by the business owner, 2026-09-04. Rendered scene, not a photograph of a Sewer Pros job.',
      },
    },
    {
      pageId: id('svc-pre-purchase-sewer-inspection'),
      description: 'Inspect the line before closing on a property.',
      image: {
        src: '/images/homepage/services/the-sewer-pros-pre-purchase-sewer-scope.webp',
        alt: 'A sewer scope run at a property before purchase',
        source:
          'Supplied by the business owner, 2026-09-04. Rendered scene, not a photograph of a Sewer Pros job.',
      },
    },
    {
      pageId: id('svc-sewer-cleaning'),
      description: 'Clear what has accumulated in the line.',
      image: {
        src: '/images/homepage/services/the-sewer-pros-professional-sewer-line-cleaning.webp',
        alt: 'Cleaning equipment at work on a sewer line',
        source:
          'Supplied by the business owner, 2026-09-04. Rendered scene, not a photograph of a Sewer Pros job.',
      },
    },
    /*
      ⚠ `svc-hydro-jetting`, THE GLOBAL SERVICE, NOT
      `sl-chesterfield-hydro`. This array is the market hub's fan-out to
      canonical service spokes, and the three entries above it are
      global taxonomy pages. Pointing one entry at a single suburb's
      service+location page would make it resolve narrower than its
      siblings and would imply hydro jetting is offered only in
      Chesterfield, which nothing supports. That page is a spoke one
      level further out, reached from the Chesterfield location page.

      No `/st-louis-mo/hydro-jetting/` route exists, and 05 §27 permits
      a market-level service route only where the intent belongs to
      that market rather than the global taxonomy - which is why the
      lateral-reporting entry above is market-scoped and this one is
      not.
    */
    {
      pageId: id('svc-hydro-jetting'),
      description:
        'High-pressure water clears grease, scale, and root intrusion from the line.',
      image: {
        src: '/images/homepage/services/the-sewer-pros-hydro-jetting-pipe-wall-cleaning.webp',
        alt: 'High-pressure jetting stripping the pipe wall',
        source:
          'Supplied by the business owner, 2026-09-04. Rendered scene, not a photograph of a Sewer Pros job.',
      },
    },
  ],
  locationPageIds: [
    id('loc-stl-st-louis-city'),
    id('loc-stl-ballwin'),
    id('loc-stl-florissant'),
    id('loc-stl-st-charles'),
    id('loc-stl-chesterfield'),
  ],
  /*
    ⚠ SERVICE AREA, NOT OFFICES. `CoverageSection` exists precisely so a
    market can state where it works without implying a location it
    occupies (CLAUDE.md §11, 18 §87). No address, no pin, no hours.

    `pageIds` repeats `locationPageIds` deliberately: this section names
    where service reaches, the related strip lower down is navigation to
    those pages, and they happen to be the same five today. Both resolve
    through the approved registry, so a gated location drops out of both
    on its own.

    ⚠ THE AVAILABILITY LINE NAMES AUDIENCES, NOT A GUARANTEE. It does
    not promise same-day coverage, a response time, or that every
    address inside the metro is serviceable - which is why the intro
    asks people outside the listed communities to call and confirm
    rather than asserting coverage on their behalf.
  */
  coverage: {
    title: 'Where we serve in the St. Louis area',
    intro:
      'The Sewer Pros provides sewer inspection, diagnostics, locating, and cleaning across the St. Louis metro. The communities below are the ones with their own pages, not the limit of where we work: we also serve St. Louis County, St. Charles County, Jefferson County, and surrounding areas. Do not see your community? Call to confirm coverage before you book.',
    pageIds: [
      id('loc-stl-st-louis-city'),
      id('loc-stl-ballwin'),
      id('loc-stl-florissant'),
      id('loc-stl-st-charles'),
      id('loc-stl-chesterfield'),
    ],
    availabilityStatement:
      'Serving homeowners, real estate professionals, property managers, and commercial properties throughout the greater St. Louis area.',
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
      question: 'Does my municipality have a lateral repair programme?',
      answer: (
        <p>
          Many in the area do, funded by an annual charge on the real estate tax
          bill, but terms vary considerably and not every jurisdiction
          participates. The City of St. Charles operates outside MSD&rsquo;s
          territory entirely. Check with your own municipality for what applies
          to your address.
        </p>
      ),
    },
    {
      question: 'Can you get my lateral repair approved?',
      answer: (
        <p>
          No, and neither can anyone else. We are licensed through most of the
          area&rsquo;s municipal lateral programmes to submit reports, and we
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
          programme that is not the same thing as an insurance policy. We are
          not able to tell you what your specific policy covers. Your insurance
          provider is the right source for that answer, and a documented camera
          inspection is often useful to have on hand either way, since insurers
          and municipal programmes alike frequently want to see video evidence
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
    'What a lateral report should contain, and which municipal programme applies to your address.',
  relatedPageIds: [
    id('res-stl-lateral-report'),
    id('res-stl-city-program'),
    id('res-stl-county-program'),
  ],
  relatedFeaturedPageId: id('res-stl-lateral-report'),
  relatedFeaturedPoints: [
    'What the programme asks for',
    'What the video has to show',
    'How the report is submitted',
  ],
  relatedDescriptions: {
    [id('res-stl-lateral-report')]:
      'What a lateral report should contain before it goes to a municipal programme.',
    [id('res-stl-city-program')]:
      'How the City of St. Louis programme works and what it asks of a property owner.',
    [id('res-stl-county-program')]:
      'Which county programme applies to your address, and where the boundaries fall.',
  },
  relatedMeta: {
    [id('res-stl-lateral-report')]: {
      category: 'Reporting guide',
      icon: 'clipboard-list',
      accent: 'navy',
    },
    [id('res-stl-city-program')]: {
      category: 'City programme',
      icon: 'file-video',
      accent: 'blue',
    },
    [id('res-stl-county-program')]: {
      category: 'County programme',
      icon: 'scale',
      accent: 'green',
    },
  },
  relatedViewAllPageId: id('hub-resources'),
  faqEyebrow: 'Need a quick answer?',
  cta: {
    eyebrow: 'Evidence before expensive decisions',
    title: 'Find out what condition the lateral is in',
    body: 'Documented evidence of the line, from a company that does not perform the repair.',
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
  hero: {
    eyebrow: 'St. Louis area',
    title: 'Sewer Lateral Inspection & Municipal Reporting',
    intro: (
      <p>
        Camera inspection of the lateral with documentation prepared for
        submission to a municipal sewer lateral repair programme.
      </p>
    ),
  },
  body: (
    <>
      <h2>What these programmes are</h2>
      <p>
        Numerous municipalities across the St. Louis area operate sewer lateral
        repair programmes, funded by a modest annual charge collected on the
        real estate tax bill. Where a programme applies and a claim is
        approved, it can cover a substantial share of an eligible lateral
        repair.
      </p>

      <h2>Why documentation is the sticking point</h2>
      <p>
        Programmes do not generally reimburse on the basis of a description of
        the problem. They typically require documentation from a licensed
        plumber establishing the defect, commonly including video of the line
        showing the condition and where along the line it sits.
      </p>
      <p>
        That documentation is the work. Without it, a homeowner with a genuine
        lateral failure may have no route into a programme they have been
        paying into for years.
      </p>

      <h2>What we do</h2>
      <p>
        We inspect the lateral, record the footage, identify the visible
        condition and its distance along the line, and prepare the
        documentation the programme requires. The Sewer Pros is licensed
        through most of the area&rsquo;s municipal sewer lateral programmes for
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
        A lateral programme claim turns on documented condition. We do not
        perform sewer repair or replacement, so what our footage shows is not
        the opening move in a quote from us for the remedy.
      </p>
    </>
  ),
  process: [
    { title: 'Confirm the programme', description: 'Establish which municipality applies and what it requires.' },
    { title: 'Inspect the lateral', description: 'Record the line and locate any defect along it.' },
    { title: 'Prepare documentation', description: 'Compile the footage and written report in the required form.' },
    { title: 'Submit the report' },
  ],
  showDifferentiator: true,
  faq: [
    {
      question: 'Will the programme pay for my repair?',
      answer: (
        <p>
          That is the municipality&rsquo;s decision, not ours. Programmes differ
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
          Frequently not. Several programmes classify routine root clearing as
          ordinary maintenance rather than a structural failure, and exclude it.
          The specifics vary by municipality.
        </p>
      ),
    },
    {
      question: 'Do I pay for the inspection even if the claim succeeds?',
      answer: (
        <p>
          In several programmes the homeowner bears the cost of the inspection
          and documentation, with the programme contributing to the repair
          itself. Check the terms your municipality publishes.
        </p>
      ),
    },
  ],
  relatedPageIds: [id('svc-sewer-camera-inspection'), id('market-st-louis-mo')],
  cta: {
    title: 'Get the lateral documented',
    body: 'Camera inspection and reporting prepared for municipal programme submission.',
  },
}

/* ==========================================================================
   Location pages
   ========================================================================== */

export const stLouisLocationContent: Partial<Record<PageId, LocationPageContent>> = {
  /* -------------------------------------------------------------- City -- */
  [id('loc-stl-st-louis-city')]: {
    hero: {
      eyebrow: 'St. Louis City',
      title: 'Sewer inspection and cleaning in St. Louis City',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for city properties,
          where the housing stock is among the oldest in the region and the
          City runs its own lateral repair programme.
        </p>
      ),
    },
    body: (
      <>
        <h2>The City&rsquo;s lateral repair programme</h2>
        <p>
          St. Louis City operates a sewer lateral repair programme funded by a
          $28 annual charge on the real estate tax bill. What it covers is
          narrower than people often assume.
        </p>
        <p>
          The programme addresses breaks beneath the public right-of-way that
          cause a cave-in or backup. It does <strong>not</strong> cover breaks
          under private property, and it does not cover clearing clogs or tree
          roots along any portion of the lateral.
        </p>
        <p>
          A licensed plumber must inspect the line and submit a written
          statement together with video. A city street inspector performs the
          initial cave-in assessment at no charge.
        </p>

        <h2>What the right-of-way boundary means in practice</h2>
        <p>
          Because coverage turns on where the defect sits, establishing its
          position matters as much as establishing that it exists. A failure a
          few feet either side of that boundary is a different financial
          situation for the homeowner.
        </p>
        <p>
          That is why inspection and locating are often done together here:
          the footage shows the condition and the distance, and locating
          translates that distance into a position on the ground.
        </p>

        <h2>The oldest housing stock in the region</h2>
        <p>
          58.4% of the city&rsquo;s housing was built before 1940, and the
          median year built falls at 1939 or earlier (American Community
          Survey, 2019&ndash;2023 five-year estimates). No other municipality
          we work across in the St. Louis area is close to that.
        </p>
        <p>
          Laterals from those decades were commonly laid in vitrified clay or
          cast iron. Clay separates at joints and admits roots; cast iron
          corrodes and scales internally, narrowing the line over decades.
        </p>
        <p>
          Both are era characteristics rather than a claim about any specific
          address: what a given line is made of, and how it is holding up, is
          what the camera establishes.
        </p>
      </>
    ),
    servicePageIds: [id('sl-stl-city-camera'), id('svc-stl-sewer-lateral-inspection-reporting')],
    faq: [
      {
        question: 'Does the City programme cover a break under my yard?',
        answer: (
          <p>
            No. The City&rsquo;s programme addresses breaks beneath the public
            right-of-way causing a cave-in or backup. Breaks under private
            property are excluded, as is clearing clogs and roots anywhere along
            the lateral.
          </p>
        ),
      },
      {
        question: 'Who pays for the video the programme requires?',
        answer: (
          <p>
            The licensed plumber&rsquo;s inspection and written statement are
            the homeowner&rsquo;s to arrange. The city street inspector&rsquo;s
            initial cave-in assessment is free.
          </p>
        ),
      },
    ],
  },

  /* ----------------------------------------------------------- Ballwin -- */
  [id('loc-stl-ballwin')]: {
    hero: {
      eyebrow: 'Ballwin',
      title: 'Sewer inspection and cleaning in Ballwin',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for Ballwin properties,
          where the lateral repair programme carries specific caps and a
          particular rule about root clearing.
        </p>
      ),
    },
    body: (
      <>
        <h2>Ballwin&rsquo;s lateral repair programme</h2>
        <p>
          Ballwin has run a sewer lateral repair programme since 1999, funded by
          a $28 annual charge on the real estate tax bill. It differs from
          several neighbouring programmes in two ways worth knowing before a
          failure happens.
        </p>

        <h3>There is a cap</h3>
        <p>
          Reimbursement is capped at $4,500, rising to as much as $7,500 where
          the work requires deep excavation or street cutting. Costs above the
          cap remain the homeowner&rsquo;s.
        </p>
        <p>
          The programme covers structural failures preventing sewer service, and
          includes excavation, repair, backfill, grading, seeding, and patching
          of driveway, sidewalk, or street.
        </p>

        <h3>Root clearing is treated as maintenance</h3>
        <p>
          Clearing roots once a year or less is defined as normal maintenance
          and is not covered. This is a meaningful distinction: a line that
          needs annual attention for roots sits outside the programme, while a
          structural failure sits inside it.
        </p>
        <p>
          Cabling and video documentation costs are also the homeowner&rsquo;s,
          though the invoice is required as documentation where available.
        </p>

        <h2>Why the distinction is worth establishing early</h2>
        <p>
          Whether a recurring problem is roots arriving through an otherwise
          sound joint, or a structural failure that happens to be admitting
          roots, determines which side of that rule it falls on, and it is a
          question a camera inspection answers rather than one anybody should
          guess at.
        </p>

        <h2>Construction era</h2>
        <p>
          Ballwin&rsquo;s median year built is 1976 (American Community Survey,
          2019&ndash;2023 five-year estimates), reflecting subdivision
          development through the 1960s, 1970s, and 1980s.
        </p>
        <p>
          That span straddles a genuine transition in lateral materials: from
          clay and cast iron, through the period when bituminized fibre pipe
          was still being installed, into the era when PVC became standard. A
          house built at one end of Ballwin&rsquo;s range and one built at the
          other may have quite different pipe underneath. Which applies to a
          particular property is a question for the camera.
        </p>
      </>
    ),
    servicePageIds: [id('sl-ballwin-prepurchase'), id('svc-stl-sewer-lateral-inspection-reporting')],
    faq: [
      {
        question: 'Does Ballwin cover root clearing?',
        answer: (
          <p>
            Clearing roots once a year or less is defined as normal maintenance
            and is not covered. The programme addresses structural failures
            preventing sewer service.
          </p>
        ),
      },
      {
        question: 'What happens if the repair costs more than the cap?',
        answer: (
          <p>
            Reimbursement is capped at $4,500, or up to $7,500 where deep
            excavation or street cutting is required. Anything beyond the
            applicable cap remains the homeowner&rsquo;s cost.
          </p>
        ),
      },
    ],
  },

  /* -------------------------------------------------------- Florissant -- */
  [id('loc-stl-florissant')]: {
    hero: {
      eyebrow: 'Florissant',
      title: 'Sewer inspection and cleaning in Florissant',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for Florissant
          properties, where the lateral programme has no stated maximum but
          stops five feet short of the house.
        </p>
      ),
    },
    body: (
      <>
        <h2>Florissant&rsquo;s lateral repair programme</h2>
        <p>
          Florissant funds its lateral programme through a $28 annual charge on
          the real estate tax bill, reduced from $50 in January 2012, when the
          council cited a fund reserve of around $1.6 million.
        </p>
        <p>
          Unlike several neighbouring programmes, no maximum reimbursement is
          stated. The coverage boundary, however, is specific.
        </p>

        <h3>The five-foot boundary</h3>
        <p>
          Coverage runs from the main sewer to within five feet of the
          residence. Damage inside that five-foot band is the homeowner&rsquo;s
          responsibility.
        </p>
        <p>
          That makes the position of a defect decisive in a way a description of
          symptoms never is. A failure at eight feet from the house and a
          failure at three feet are the same plumbing problem and a completely
          different financial one.
        </p>

        <h3>What is excluded</h3>
        <p>
          Septic systems and private treatment systems are outside the
          programme. So is restoration of trees, shrubs, flowers, sod, decks,
          concrete other than sidewalk and street, retaining walls, and
          outbuildings. The city does provide fill and seeding after a covered
          repair.
        </p>
        <p>
          Video inspection is required for claim approval. The homeowner pays
          for the initial evaluation; where a claim is approved, the
          city&rsquo;s contractor performs the repair at no additional cost.
        </p>

        <h2>A concentrated construction era</h2>
        <p>
          Florissant grew overwhelmingly during the post-war boom: 70.8% of its
          housing was built between 1950 and 1969, with a median year built of
          1963 (American Community Survey, 2019&ndash;2023 five-year
          estimates). That is an unusually concentrated era for a city of its
          size: most of the housing stock reached the same age at the same
          time.
        </p>
        <p>
          It also sits squarely in the window when bituminized fibre pipe
          (Orangeburg) was still being installed, alongside clay and cast iron.
          Orangeburg deforms under soil load rather than cracking, and every
          remaining length of it is now beyond its intended service life. Which
          material is actually in a given lateral is what an inspection
          determines; era only tells you what to look for.
        </p>
      </>
    ),
    servicePageIds: [id('sl-florissant-cleaning'), id('svc-stl-sewer-lateral-inspection-reporting')],
    faq: [
      {
        question: 'How close to the house does Florissant cover?',
        answer: (
          <p>
            To within five feet of the residence. Damage within that five-foot
            band is the homeowner&rsquo;s responsibility.
          </p>
        ),
      },
      {
        question: 'Is there a maximum reimbursement?',
        answer: (
          <p>
            No maximum is stated for Florissant&rsquo;s programme, which
            differs from several neighbouring municipalities that cap
            reimbursement.
          </p>
        ),
      },
    ],
  },

  /* ------------------------------------------------------ Chesterfield -- */
  [id('loc-stl-chesterfield')]: {
    hero: {
      eyebrow: 'Chesterfield',
      title: 'Sewer inspection and cleaning in Chesterfield',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for Chesterfield
          properties, a comparatively young city where a newer lateral is not
          the same thing as a problem-free one.
        </p>
      ),
    },
    body: (
      <>
        <h2>A young city by St. Louis standards</h2>
        <p>
          Chesterfield incorporated in 1988, and 85.6% of its housing was built
          from 1970 onward, with a median year built of 1982 (American Community
          Survey, 2019&ndash;2023 five-year estimates). Only 1.4% predates 1940.
        </p>
        <p>
          Set against St. Louis City, where 58.4% of housing predates 1940, that
          is close to the opposite end of the region&rsquo;s range, and it
          changes what tends to be found underground.
        </p>
        <p>
          That changes what tends to be found underground. Development from the
          1970s onward increasingly used PVC rather than clay, cast iron, or
          bituminized fibre pipe, which removes the material failure modes that
          dominate older areas: clay joints separating, cast iron scaling,
          Orangeburg deforming under load.
        </p>

        <h2>What newer pipe does not protect against</h2>
        <p>
          PVC rarely fails as a material. It still sits in ground that moves.
          The recurring findings on newer laterals are not corrosion or
          collapse but:
        </p>
        <ul>
          <li>
            Bellies: sections that have lost slope and hold water, so solids
            settle where flow has slowed
          </li>
          <li>
            Joint separation caused by soil movement or settlement rather than
            material decay
          </li>
          <li>
            Damage from later work: landscaping, an addition, utility trenching
            crossing the line
          </li>
          <li>
            Roots finding any opening that movement or damage has created
          </li>
        </ul>
        <p>
          A belly produces exactly the pattern people associate with an old,
          failing line: repeated slow drainage that clears and returns. The
          cause is different, and so is the remedy.
        </p>

        <h2>Why the age of a house is a poor proxy</h2>
        <p>
          &ldquo;It is a newer home, the sewer will be fine&rdquo; is a
          reasonable assumption and a frequently wrong one. Ground movement does
          not wait for a pipe to reach a particular age, and the line may have
          been disturbed by work done since.
        </p>
        <p>
          What is actually in the ground, and what condition it is in, is what a
          camera establishes. Era tells you what to expect, not what is there.
        </p>

        <h2>The lateral repair programme</h2>
        <p>
          Chesterfield, like most St. Louis-area municipalities, funds a
          residential sewer lateral repair programme through an annual charge on
          the real estate tax bill. The charge is $28 and has applied since
          1 January 2001, following voter approval. The programme covers repairs
          of defective sewer laterals for residential buildings of six units or
          fewer.
        </p>
        <p>
          Programme terms (including any reimbursement cap and the specific
          exclusions) differ between municipalities and change over time. We
          have not been able to confirm Chesterfield&rsquo;s cap or exclusions
          from a published source, so rather than restate figures we cannot
          verify, see{' '}
          <a href="https://www.chesterfield.mo.us/263/Residential-Sanitary-Sewer-Lateral-Repai">
            Chesterfield&rsquo;s own programme page
          </a>{' '}
          for current terms.
        </p>
      </>
    ),
    servicePageIds: [
      id('sl-chesterfield-camera'),
      id('sl-chesterfield-hydro'),
      id('svc-stl-sewer-lateral-inspection-reporting'),
    ],
    faq: [
      {
        question: 'My house is newer. Do I still need an inspection?',
        answer: (
          <p>
            Newer pipe removes the material failure modes common in older areas,
            but not the ones caused by ground movement or later disturbance:
            bellies, joint separation, and damage from subsequent work. Those
            produce the same recurring symptoms.
          </p>
        ),
      },
      {
        question: 'What does Chesterfield’s lateral programme cover?',
        answer: (
          <p>
            It covers repairs of defective sewer laterals for residential
            buildings of six units or fewer, funded by a $28 annual charge in
            place since 2001. The current cap and exclusions are on{' '}
            <a href="https://www.chesterfield.mo.us/263/Residential-Sanitary-Sewer-Lateral-Repai">
              Chesterfield&rsquo;s programme page
            </a>{' '};
            we would rather point you there than restate figures we have not
            confirmed against the city&rsquo;s own source.
          </p>
        ),
      },
    ],
  },

  /* ------------------------------------------------------- St. Charles -- */
  [id('loc-stl-st-charles')]: {
    hero: {
      eyebrow: 'St. Charles',
      title: 'Sewer inspection and cleaning in St. Charles',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for St. Charles
          properties, a city that operates entirely outside MSD&rsquo;s
          territory, on its own sewer system.
        </p>
      ),
    },
    body: (
      <>
        <h2>St. Charles runs its own sewer system</h2>
        <p>
          This is the structural difference that sets St. Charles apart from
          most of the St. Louis area. The City of St. Charles is not in the
          Metropolitan St. Louis Sewer District&rsquo;s service territory. It
          operates its own sanitary sewer system independently.
        </p>
        <p>
          That system comprises two treatment facilities (one on the
          Mississippi River rated at 9.63 million gallons per day, one on the
          Missouri River rated at 7.54) together with 22 lift stations.
          Day-to-day operations are contracted out, while the city&rsquo;s own
          Utilities Division retains regulatory oversight.
        </p>
        <p>
          For a property owner, the practical consequence is that the authority,
          the rules, and the programme are the city&rsquo;s, not MSD&rsquo;s.
          Guidance written for St. Louis County does not necessarily apply here.
        </p>

        <h2>A different reimbursement structure</h2>
        <p>
          The annual charge is $28 on residential property, the same figure
          most neighbouring municipalities collect. What differs is what that
          charge buys.
        </p>
        <p>
          Rather than covering the full cost of an eligible repair, the
          St. Charles programme reimburses 90% of the authorised cost, capped at
          $7,500.
        </p>
        <p>
          Covered work includes patching or replacement of the defective
          lateral, digging, dirt replacement, and seeding. Landscaping and
          ornamental structures are excluded.
        </p>
        <p>
          The ordinance requires written certification from a licensed master
          plumber or drainlayer that cabling was attempted and did not resolve
          the issue, a different evidentiary route from programmes that require
          video as a matter of course.
        </p>

        <h2>What that means for a homeowner</h2>
        <p>
          A 90% structure means a share of the cost remains yours regardless of
          approval, which makes the size of the repair, and therefore the
          precise nature and position of the defect, worth establishing
          properly before work is authorised.
        </p>

        <h2>Construction era</h2>
        <p>
          St. Charles&rsquo;s housing dates predominantly from the mid-1980s
          onward, with growth continuing through the 2000s and a small
          pre-1940 river-town core of roughly 4% (American Community Survey,
          2019&ndash;2023 five-year estimates).
        </p>
        <p>
          Sources differ on the precise median year for St. Charles, so we
          describe the era rather than quote a single figure we cannot pin
          down. The practical point holds either way: most laterals here are
          PVC-era, where ground movement rather than material decay is the
          usual cause of trouble.
        </p>
      </>
    ),
    servicePageIds: [id('sl-st-charles-prepurchase'), id('svc-stl-sewer-lateral-inspection-reporting')],
    faq: [
      {
        question: 'Is St. Charles served by MSD?',
        answer: (
          <p>
            No. The City of St. Charles operates its own sanitary sewer system,
            with its own treatment facilities and its own oversight. It is
            outside MSD&rsquo;s service territory.
          </p>
        ),
      },
      {
        question: 'How much does the St. Charles programme reimburse?',
        answer: (
          <p>
            90% of the authorised cost, capped at $7,500, a different
            structure from neighbouring programmes that cover the full cost of
            an eligible repair up to their own limits.
          </p>
        ),
      },
    ],
  },
}

/* ==========================================================================
   Service + location pages
   ========================================================================== */

export const stLouisServiceLocationContent: Partial<
  Record<PageId, ServiceLocationPageContent>
> = {
  [id('sl-stl-city-camera')]: {
    hero: {
      eyebrow: 'St. Louis City',
      title: 'Sewer Camera Inspection in St. Louis City',
      intro: (
        <p>
          Video inspection of the lateral, often the document the City&rsquo;s
          lateral repair programme requires, as well as the diagnosis.
        </p>
      ),
    },
    body: (
      <>
        <h2>Inspection as documentation</h2>
        <p>
          St. Louis City&rsquo;s lateral repair programme requires a licensed
          plumber to inspect the line and submit a written statement together
          with video. The camera inspection is therefore not only how the
          problem is identified: it is frequently the evidence the programme
          asks for.
        </p>

        <h2>Position decides coverage</h2>
        <p>
          The City&rsquo;s programme covers breaks beneath the public
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

        <h2>Documentation for a lateral programme</h2>
        <p>
          Chesterfield funds a residential lateral repair programme through a
          $28 annual charge on the tax bill, in place since 2001. Municipal
          programmes generally want documentation from a licensed plumber before
          considering a claim, which is often the video itself.
        </p>
        <p>
          Confirm current programme terms with Chesterfield Public Works; caps
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
    hero: {
      eyebrow: 'Ballwin',
      title: 'Pre-Purchase Sewer Inspection in Ballwin',
      intro: (
        <p>
          Inspect the lateral before closing, and understand what
          Ballwin&rsquo;s lateral programme will and will not cover once the
          property is yours.
        </p>
      ),
    },
    body: (
      <>
        <h2>Why the programme terms belong in a buying decision</h2>
        <p>
          Ballwin&rsquo;s lateral repair programme caps reimbursement at $4,500,
          rising to as much as $7,500 where deep excavation or street cutting is
          required. It also treats root clearing of once a year or less as
          normal maintenance rather than a covered failure.
        </p>
        <p>
          For a buyer, that turns an inspection finding into something more
          specific than &ldquo;there is a problem&rdquo;. A structural failure
          may fall within a capped programme; a line that needs annual root
          attention likely falls outside it entirely and becomes a recurring
          cost you inherit.
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
          Much of Ballwin&rsquo;s housing dates from the subdivision development
          of the 1960s through the 1980s, a period spanning the transition from
          clay and cast iron, through the years bituminized fibre pipe was still
          being laid, into the PVC era. That range is wide enough that the age of
          a house is a poor proxy for the condition of its lateral.
        </p>

        <h2>Timing</h2>
        <p>
          The inspection is most useful while decisions remain available to you.
          What you do with the findings is yours to decide with your own
          advisers; we document the line, not the transaction.
        </p>
      </>
    ),
    relatedPageIds: [
      id('loc-stl-ballwin'),
      id('svc-pre-purchase-sewer-inspection'),
    ],
  },

  [id('sl-st-charles-prepurchase')]: {
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
          The City of St. Charles is not within MSD&rsquo;s service territory:
          it operates its own sanitary sewer system, with its own treatment
          facilities and its own oversight. Guidance a buyer has read about
          St. Louis County does not necessarily transfer.
        </p>

        <h2>What the 90% structure means for a buyer</h2>
        <p>
          St. Charles&rsquo;s programme reimburses 90% of the authorised cost of
          an eligible lateral repair, capped at $7,500. Landscaping and
          ornamental structures are excluded.
        </p>
        <p>
          Two consequences follow for someone deciding whether to buy. A share
          of any repair remains the owner&rsquo;s regardless of approval, so the
          scale of the defect matters. And the ordinance route requires written
          certification from a licensed master plumber or drainlayer that
          cabling was attempted and did not resolve the issue, meaning a
          recurring blockage has a documentation path attached to it.
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

        <h2>Where Florissant&rsquo;s programme fits</h2>
        <p>
          Florissant&rsquo;s lateral programme covers from the main sewer to
          within five feet of the residence, with no stated maximum, and
          requires video inspection for claim approval. The homeowner pays for
          the initial evaluation; where a claim is approved, the city&rsquo;s
          contractor performs the repair.
        </p>
        <p>
          So if a line blocks repeatedly, the useful sequence is usually to
          clean it enough to see it, then inspect, because the footage is both
          the diagnosis and, if a structural failure is present, the
          documentation the programme requires.
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
