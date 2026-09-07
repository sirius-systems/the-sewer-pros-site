/**
 * San Diego market content.
 *
 * Authority: docs/14-content-specification.md §39, §42, §79
 *            docs/29 (San Diego rules), CLAUDE.md §29, §73
 *            docs/21-post-launch-seo-roadmap.md §35-37, DEC-059
 *            San Diego Market Research, 2026-08-16
 *
 * ===========================================================================
 * A DIFFERENT REGULATORY LANDSCAPE, NOT A SMALLER ST. LOUIS
 * ===========================================================================
 * St. Louis has one regional authority (MSD) and a near-universal $28/yr
 * municipal lateral-assistance model repeated across almost every
 * jurisdiction. San Diego County has no equivalent.
 *
 * Sewer service here comes from a mix of city departments and
 * independent special districts, and financial assistance is the
 * exception rather than the norm — confirmed in only two of the seven
 * approved jurisdictions, by different mechanisms. The City of
 * San Diego's own document states there is no reimbursement at all.
 *
 * These pages say so rather than assuming the St. Louis pattern
 * transfers. That structural contrast is itself the strongest
 * differentiation available in this cluster.
 *
 * ---------------------------------------------------------------------------
 * ⚠ ORGANIC-FIRST — NO GBP, NO OFFICE, NO ADDRESS
 * ---------------------------------------------------------------------------
 * DEC-059 and 21 §35-37 make San Diego organic-first. CLAUDE.md §29
 * forbids implying a San Diego office, storefront, GBP, or public
 * address. Nothing below states or implies local premises.
 *
 * San Diego IS an operating market — it publishes its own site, phone,
 * hours, and a 2015 founding year (DEC-071). Operating is not the same
 * as having a verified physical location, and only the first is claimed.
 *
 * ---------------------------------------------------------------------------
 * ⚠ HOUSING-AGE FIGURES ARE NOT CITED, AND THE ANGLE IS WEAKER HERE
 * ---------------------------------------------------------------------------
 * All figures are single-sourced secondary republication of ACS data
 * (PENDING-015). None is published.
 *
 * Beyond sourcing, the research makes a substantive point worth
 * honouring: this cluster is materially newer than St. Louis. Even the
 * oldest stock here is around a third pre-1970, against 58% pre-1940 in
 * St. Louis City. Aggressive "old pipe, high risk" framing would be
 * weaker and less honest in San Diego, and Orangeburg-era framing
 * applies to a smaller share throughout. The copy is calibrated down
 * accordingly.
 *
 * ⚠ NO Mission Valley housing figure exists at any usable geography.
 * Two proxies conflict sharply and describe non-comparable areas. None
 * is published, and none is averaged.
 */

import type { LocationPageContent, MarketPageContent, PageId } from '@/types'

import { coreServiceCards } from './service-cards'

const id = (value: string): PageId => value as PageId

/** Shared, sourced: the owner owns the whole lateral, and no city money follows. */
const CITY_OF_SAN_DIEGO_POLICY = (
  <>
    <h2>Who owns the lateral, and what the City will not do</h2>
    <p>
      In the City of San Diego, the property owner owns the entire sewer
      lateral: the full run from the building to the public main, not merely
      the portion under private land.
    </p>
    <p>
      The City repairs breaks within the public right-of-way where they were
      not caused by neglect, and bills the owner where they were. On the
      question of cost, the City&rsquo;s own guidance is unambiguous: there is
      no reimbursement for plumbing expenses.
    </p>
    <p>
      That is worth stating plainly, because it is the opposite of how sewer
      laterals work in some other parts of the country, and it means a lateral
      problem here is entirely the owner&rsquo;s to fund.
    </p>
  </>
)

/* ==========================================================================
   Market hub — /san-diego-ca/
   ========================================================================== */

export const sanDiegoMarketContent: MarketPageContent = {
  hero: {
    eyebrow: 'San Diego County, California',
    title: 'Sewer inspection and cleaning across San Diego County',
    intro: (
      <p>
        Independent camera inspection, diagnostics, and cleaning for properties
        across San Diego County, from a company that documents the condition
        of the line and does not sell the repair.
      </p>
    ),
  },
  /*
    ⚠ NEUTRAL PLACEHOLDER IMAGERY, DELIBERATELY NOT THE ST. LOUIS
    FRAME. That photograph is identifiably St. Louis by filename and
    alt text, and putting it here would imply a local photograph that
    does not exist. These are the equipment-and-cleanout frames the
    home page hero rotates: no location markers, already owner-supplied
    with provenance recorded.

    ⚠ A VISITOR MOVING FROM THE HOME PAGE WILL RECOGNISE THEM. That is
    the accepted cost of a placeholder; each market uses a different
    frame so the two hubs do not read as clones. Swap these two srcs
    first when real imagery arrives - nothing else changes.
  */
  heroBackground: {
    src: '/images/homepage/hero/the-sewer-pros-residential-camera-service-hero.webp',
    alt: 'Camera reel and monitor at an open cleanout on a residential driveway',
    source:
      'Supplied by the business owner, 2026-09-03. Rendered scene, not a photograph of a Sewer Pros job.',
  },
  /*
    ⚠ THE CLIP IS SAN DIEGO'S OWN; THE STILL ABOVE IS STILL THE SHARED
    PLACEHOLDER, AND IT IS NOW ALSO THIS CLIP'S POSTER. It is what
    reduced-motion, data-saver, and pre-hydration visitors see, so the
    note above it still applies in full - the video does not retire the
    still, it layers over it.

    `describes` is written from the supplied filename and the market it
    was delivered for. The frames themselves were not inspected -
    nothing in the repository can decode video - so this says what the
    clip is FOR rather than asserting shot detail nobody has checked.
  */
  heroVideo: {
    src: '/images/markets/san-diego-ca/hero/the-sewer-pros-san-diego-sewer-camera-inspection-hero.mp4',
    describes: 'Sewer camera inspection clip supplied for the San Diego hub hero',
    source:
      'Supplied by the business owner, 2026-09-05. Rendered scene, not footage of a Sewer Pros job.',
  },
  /*
    ⚠ THE FORM DEFAULTS TO THIS MARKET, NOT ST. LOUIS. `heroFormMarketId`
    feeds both the hero form and the closing one. Copying this block to
    another market without changing the id would mislabel every lead
    that page produces, which 19 §32's attribution and 01 §20's
    market-separation rule both exist to prevent.
  */
  showHeroForm: true,
  heroFormMarketId: 'san-diego-ca',
  body: (
    <>
      {CITY_OF_SAN_DIEGO_POLICY}

      <h2>No single sewer authority here</h2>
      <p>
        San Diego County has no regional sewer district covering the area the
        way a single authority does in some metropolitan regions. Service comes
        from a mix of city utility departments and independent special
        districts, and which one governs your property is a question of address
        rather than of city name.
      </p>
      <p>
        San Marcos, for instance, is served by the Vallecitos Water District,
        an independent special district that also serves parts of Carlsbad,
        Escondido, and Vista. Chula Vista&rsquo;s sewer service comes from
        CVSan, a sanitation district distinct from the city government itself.
        Carlsbad is split: most of the city is served by its own utilities
        department, while the southern portion falls to Leucadia Wastewater
        District or Vallecitos.
      </p>

      <h2>Financial assistance is the exception</h2>
      <p>
        Lateral repair assistance programmes exist in this county, but they are
        uncommon and they are not uniform. Of the areas we work across, we have
        confirmed programmes in two: Carlsbad offers a grant of up to $3,000
        toward lateral replacement or rehabilitation, and CVSan runs a lateral
        replacement grant programme in Chula Vista.
      </p>
      <p>
        Elsewhere (including the City of San Diego, Escondido, and San Marcos)
        no such programme was found. In most of the county, a failed lateral
        is funded entirely by the property owner.
      </p>
      <p>
        That makes knowing the actual condition of a line more consequential
        here, not less. Where no programme softens the cost, the difference
        between a line that needs cleaning and a line that needs replacing is
        the whole decision.
      </p>

      <h2>What we do here</h2>
      <p>
        We inspect, document, locate, and clean. We do not perform sewer repair
        or replacement, so the footage we produce is not the first step toward a
        quote from us for the remedy.
      </p>

      <h2>Reaching us in San Diego</h2>
      <p>
        San Diego enquiries go to{' '}
        <a href="tel:+18582572888">(858) 257-2888</a>, Monday to Friday, 8:00am
        to 4:00pm. This is a different line from our St. Louis number; please
        use the San Diego one for work in this county.
      </p>
    </>
  ),
  /*
    ==========================================================================
    COMPANY EXPERIENCE. Added 2026-09-07 on owner direction.
    ==========================================================================
    ⚠⚠ TWO FIGURES IN THE SUPPLIED COPY WERE NOT PUBLISHED HERE, AND
    THE OWNER'S OWN INSTRUCTION IS WHY.

    The brief said to publish "since 2011" and "more than 100,000
    sewer camera inspections" ONLY after confirming both remain
    approved in the authoritative business documentation. They are not
    approved for this page:

      'over 100,000 camera inspections'  DEC-072 scopes it to
          `/st-louis-mo/` ONLY. `MARKET_SCOPED_CLAIMS.stLouisOnly` in
          `data/business/organization.ts` is the list, and 01 §20
          forbids carrying a market's facts onto another's page.

      '2011'  is ST. LOUIS's founding year (DEC-070). San Diego's own
          is 2015 - `marketOperatingDetail['san-diego-ca'].foundingYear`,
          published on thesewerprossd.com and recorded in DEC-071.

    So the opening paragraph and the first proof card state SAN DIEGO's
    verified 2015, and the inspection-count card was replaced with a
    documentation claim the site can stand behind. Nothing was softened
    that did not have to be: the services, the findings, the
    independence position and the coverage caveat are all as supplied.

    ⚠ DO NOT "RESTORE" THE ORIGINAL WORDING. Both figures would need a
    new owner decision widening DEC-072's scope, not an edit here.

    ⚠ THE SERVICE LIST IS SAFE TO STATE. DEC-076 and DEC-080 confirm 17
    of 18 services for this market (the eighteenth is St. Louis's
    lateral reporting), superseding a stale note in `markets.ts` that
    still reads as though none were confirmed.

    ⚠ `strip` VARIANT, WHERE LAS VEGAS TAKES `aside`. Owner direction:
    the two markets share typography, cards, colour and spacing but not
    the arrangement, so the hubs do not read as one template with the
    city swapped (18 §155, 14 §79).
  */
  experienceVariant: 'strip',
  experience: {
    eyebrow: 'Specialized experience, clear findings',
    title: 'Sewer inspection experience San Diego property owners can use',
    intro: [
      'The Sewer Pros has served San Diego property owners since 2015, bringing a specialized, evidence-first approach to customers who need to investigate a drainage problem, evaluate a sewer line before buying a property, or understand the condition of a line before making a larger decision.',
      'Our San Diego sewer services include sewer camera inspection, sewer cleaning, hydro jetting, sewer line locating, recurring sewer backup diagnosis, pre-purchase sewer inspection, and preventative sewer maintenance. We inspect accessible portions of the sewer line, document visible conditions on video, and explain what the footage shows in clear language.',
    ],
    blocks: [
      {
        title: 'What can a San Diego sewer camera inspection reveal?',
        body: [
          'A sewer camera inspection, commonly called a sewer scope, provides a direct view inside accessible portions of the sewer line. The recorded footage may reveal root intrusion, accumulated grease or scale, blockages, offset joints, standing water, cracks, or other visible conditions that may be contributing to slow drainage or recurring backups.',
          'The inspection helps you understand what is happening before choosing sewer cleaning, hydro jetting, continued monitoring, or further evaluation by a separate sewer repair provider.',
        ],
      },
      {
        title: 'When a sewer inspection can help',
        half: true,
        listIntro:
          'Consider scheduling a professional sewer camera inspection when:',
        items: [
          'A sewer line or drain continues to back up after being cleared',
          'Multiple drains are slow at the same time',
          'You need to distinguish an isolated drain clog from a main sewer-line problem',
          'You are purchasing a home or commercial property in the San Diego area',
          'A previous contractor has recommended an expensive sewer repair',
          'You need to locate the sewer line before landscaping, excavation, or utility work',
          'A property manager needs documentation for a recurring drainage issue',
          'You want to establish an evidence-based preventative maintenance schedule',
        ],
        after: [
          'A camera inspection does not automatically mean the sewer line needs repair. It provides information that helps determine whether cleaning, monitoring, or another type of evaluation is appropriate.',
        ],
      },
      {
        title: 'What you receive from the inspection',
        half: true,
        body: [
          'The goal is to give you useful evidence, not simply tell you that a problem exists.',
        ],
        listIntro: 'You receive:',
        items: [
          'Recorded footage from accessible portions of the sewer line',
          'Documentation of visible conditions found during the inspection',
          'A plain-language explanation of what the camera shows',
          'Guidance about whether sewer cleaning or hydro jetting may address the condition',
          'Information you can review before approving a major sewer project',
          'Evidence you can keep or share when seeking another professional opinion',
        ],
      },
      {
        title: 'Diagnosis without a repair-driven sales incentive',
        body: [
          'The Sewer Pros specializes in sewer inspection, diagnostics, locating, and cleaning. We do not perform sewer repair or replacement, so we do not earn revenue from selling the major repairs an inspection might identify.',
          'Our responsibility is to document the visible condition of the line and help you understand the findings. You decide whether to schedule cleaning, monitor the condition, seek a second opinion, or consult a sewer repair provider of your choosing.',
        ],
      },
    ],
    proof: [
      {
        title: 'Serving San Diego Since 2015',
        body: 'Specialized experience across coastal, inland, and older inner-city properties throughout the greater San Diego region.',
        icon: 'experience',
        accent: 'blue',
      },
      {
        title: 'Evidence That Stays With You',
        body: 'You receive recorded footage and understandable findings that can support cleaning, monitoring, property-purchase, or second-opinion decisions.',
        icon: 'document',
        accent: 'blue',
      },
      {
        title: 'Diagnosis Without a Repair Sale',
        body: 'We inspect, document, locate, and clean. Because we do not perform sewer repair or replacement, the findings stay separate from the sale of a major repair.',
        icon: 'independence',
        accent: 'green',
      },
    ],
    coverage: {
      title: 'Serving properties throughout the San Diego region',
      body: [
        'The Sewer Pros serves homeowners, home buyers, real estate professionals, property managers, multifamily buildings, and commercial properties throughout the greater San Diego region. Featured service areas include San Diego, San Marcos, Carlsbad, Escondido, Oceanside, Chula Vista, and Mission Valley.',
        'Service availability can vary by property location. Contact us with the location and the sewer or drainage concern so we can confirm coverage before scheduling.',
      ],
    },
    actions: {
      primary: {
        label: 'Schedule a San Diego Sewer Inspection',
        pageId: id('core-contact'),
      },
      secondary: {
        label: 'Explore San Diego Sewer Services',
        pageId: id('hub-services'),
      },
    },
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
    SERVICE AREA. Added 2026-09-07 to close an internal-linking hole.
    ==========================================================================
    ⚠ THIS HUB LINKED TO NONE OF ITS OWN LOCATION PAGES BEFORE THIS.
    The market set neither `serviceArea` nor `coverage`, so the section
    never rendered and the 7 San Diego location pages had no path from
    their own market hub. They were reachable only from `/locations/`
    and the footer. 16 §25 and CLAUDE.md §31 both describe the hub to
    spoke flow this restores.

    ⚠ `coverage`, NOT `serviceArea`, AND THAT IS DELIBERATE. The
    image-led treatment needs per-market photography and hyper-local
    detail this market does not have; St. Louis is the only one that
    does. Owner direction 2026-09-07 also asks the three hubs to differ
    in composition, and this is one of the places they should.

    ⚠⚠ THE COPY MUST NOT STATE A SERVICE AREA AS A PUBLISHED FACT.
    `marketOperatingDetail['san-diego-ca'].serviceAreaSource` is
    `derived_from_approved_locations`: the list below is assembled from
    the pages doc 04 approves, NOT from anything the business publishes
    about where it works. DEC-077 corrected an earlier value that was
    inference presented as a published area. So the intro says these
    communities have their own PAGES and asks the visitor to confirm;
    it does not claim a county, a radius, or a boundary.

    ⚠ NO OFFICE LANGUAGE. `CoverageSection` renders no address, no pin
    and no hours by design (PENDING-002, CLAUDE.md §29-30, 18 §86-87).
  */
  coverage: {
    title: 'Where we serve in the San Diego area',
    intro:
      'The communities below have their own service pages, each with local information for that area. They are where we have published that detail rather than the limit of where we work. Contact us with your property location so we can confirm availability before you schedule.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-carlsbad'),
      id('loc-sd-escondido'),
      id('loc-sd-oceanside'),
      id('loc-sd-chula-vista'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement:
      'Serving homeowners, home buyers, real estate professionals, property managers, and commercial properties across the greater San Diego region.',
  },
  /*
    ==========================================================================
    INTENT ROUTING. Added 2026-09-07.
    ==========================================================================
    ⚠ A DIFFERENT SET FROM ST. LOUIS AND FROM LAS VEGAS, ON PURPOSE.
    Owner direction 2026-09-07 is that the three hubs must not run one
    composition. Routing itself is parity rather than a distinguishing
    variant - it is a navigation aid, the same category as the hero
    form - so all three carry the band, but none carries the same four
    cards.

    ⚠ `svc-stl-sewer-lateral-inspection-reporting` CANNOT APPEAR HERE.
    It is `not_applicable` for this market in the service registry, and
    St. Louis's third card is exactly that service. Every service below
    is `confirmed` or `supported_by_existing_*` for San Diego, checked
    against `master-service-registry.json`.

    The third card is recurring backup diagnosis because this market's
    own body copy turns on there being no single sewer authority and
    almost no repair assistance, which makes knowing the actual cause
    more consequential here, not less.
  */
  routing: [
    {
      pageId: id('svc-sewer-camera-inspection'),
      category: 'Homeowners',
      icon: 'search-check',
      accent: 'blue',
      description:
        'Slow drains, a backup that keeps returning, or a line nobody has looked at. A camera inspection shows the visible condition before anything is decided.',
      linksHeading: 'Common starting points',
      links: [
        {
          pageId: id('svc-sewer-cleaning'),
          label: 'Sewer Cleaning',
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
      pageId: id('svc-pre-purchase-sewer-inspection'),
      category: 'Buying or selling',
      icon: 'search-check',
      accent: 'green',
      description:
        'A sewer scope before closing, so the condition of the line is documented while it can still inform the decision.',
      linksHeading: 'Useful for',
      links: [
        {
          pageId: id('aud-home-buyers'),
          label: 'Home Buyers',
        },
        {
          pageId: id('aud-real-estate-agents'),
          label: 'Real Estate Agents',
        },
      ],
      secondaryLink: {
        pageId: id('svc-pre-purchase-sewer-inspection'),
        label: 'Explore Pre-Purchase Inspection',
      },
    },
    {
      pageId: id('svc-recurring-sewer-backup-diagnosis'),
      category: 'Recurring problems',
      icon: 'search-check',
      accent: 'navy',
      description:
        'A line that has been cleared before and backed up again. Diagnosis looks for the reason rather than clearing it once more.',
      linksHeading: 'Related services',
      links: [
        {
          pageId: id('svc-hydro-jetting'),
          label: 'Hydro Jetting',
        },
        {
          pageId: id('svc-preventative-sewer-maintenance'),
          label: 'Preventative Maintenance',
        },
      ],
      secondaryLink: {
        pageId: id('svc-recurring-sewer-backup-diagnosis'),
        label: 'Explore Backup Diagnosis',
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
          pageId: id('com-hydro-jetting'),
          label: 'Hydro Jetting',
        },
      ],
      secondaryLink: {
        pageId: id('hub-commercial'),
        label: 'Explore Commercial Services',
      },
    },
  ],
  services: coreServiceCards,
  locationPageIds: [
    id('loc-sd-san-diego'),
    id('loc-sd-carlsbad'),
    id('loc-sd-chula-vista'),
    id('loc-sd-escondido'),
    id('loc-sd-oceanside'),
    id('loc-sd-san-marcos'),
    id('loc-sd-mission-valley'),
  ],
  faq: [
    {
      question: 'Does the City of San Diego help with lateral repair costs?',
      answer: (
        <p>
          No. The City&rsquo;s own guidance states there is no reimbursement for
          plumbing expenses. The property owner owns the entire lateral from the
          building to the main.
        </p>
      ),
    },
    {
      question: 'Who is my sewer provider?',
      answer: (
        <p>
          It depends on your address rather than only your city. Some areas are
          served by a city utilities department and others by an independent
          special district: Vallecitos, Leucadia, or CVSan among them. Parts of
          Carlsbad fall under different providers than the rest of it.
        </p>
      ),
    },
    {
      question: 'Are there any grant programmes in San Diego County?',
      answer: (
        <p>
          They exist but are uncommon. We have confirmed a Carlsbad grant of up
          to $3,000 and a CVSan lateral replacement grant programme in Chula
          Vista. In most of the county, including the City of San Diego, no
          programme was found.
        </p>
      ),
    },
  ],
  cta: {
    title: 'Find out what condition the line is in',
    body: 'Documented evidence of the lateral, from a company that does not perform the repair.',
  },
  /*
    Flips the closing CTA from the `panel` button to the split layout:
    copy left, lead form right, over this frame. Same structure as the
    home page and the St. Louis hub.
  */
  ctaBackground: {
    src: '/images/homepage/hero/the-sewer-pros-pipe-condition-review-hero.webp',
    alt: 'Gloved hands at a camera monitor showing the inside of a line',
    source:
      'Supplied by the business owner, 2026-09-03. Rendered scene, not a photograph of a Sewer Pros job.',
  },
}

/* ==========================================================================
   Location pages
   ========================================================================== */

export const sanDiegoLocationContent: Partial<Record<PageId, LocationPageContent>> = {
  /* ------------------------------------------------- San Diego (city) -- */
  [id('loc-sd-san-diego')]: {
    hero: {
      eyebrow: 'San Diego',
      title: 'Sewer inspection and cleaning in San Diego',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for properties in the
          City of San Diego, where you own the whole lateral and no
          reimbursement exists.
        </p>
      ),
    },
    body: (
      <>
        {CITY_OF_SAN_DIEGO_POLICY}

        <h2>What full ownership means in practice</h2>
        <p>
          Because the lateral is the owner&rsquo;s across its entire run, a
          defect anywhere along it is the owner&rsquo;s to resolve. There is no
          boundary partway along where responsibility shifts, and no programme
          to absorb part of the cost.
        </p>
        <p>
          The practical consequence is that the scale and position of a problem
          matter financially in a direct way. A localised defect near the
          building and a failure out under the street are the same
          responsibility and very different jobs.
        </p>

        <h2>Neglect is a distinction the City draws</h2>
        <p>
          The City repairs right-of-way breaks not caused by neglect, and bills
          the owner where neglect caused them. That makes documented condition
          worth having in its own right: a record of the line&rsquo;s state
          is evidence about how it came to fail, not merely a diagnosis.
        </p>

        <h2>A broad span of construction</h2>
        <p>
          San Diego&rsquo;s housing spans postwar through the 1980s and beyond,
          which is a wider range than most of the surrounding cities. Lines laid
          across that span may be clay, cast iron, or PVC depending on when a
          property was built and whether the lateral has been replaced since.
        </p>
        <p>
          That is era context, not a claim about any address. What a specific
          line is made of, and how it is holding up, is what the camera shows.
        </p>
      </>
    ),
    servicePageIds: [id('sl-sd-city-camera')],
    faq: [
      {
        question: 'How much of the lateral do I own in San Diego?',
        answer: (
          <p>
            All of it: the full run from the building to the public main. The
            City repairs right-of-way breaks not caused by neglect, but the
            lateral itself is the owner&rsquo;s.
          </p>
        ),
      },
    ],
  },

  /* ---------------------------------------------------------- Carlsbad -- */
  [id('loc-sd-carlsbad')]: {
    hero: {
      eyebrow: 'Carlsbad',
      title: 'Sewer inspection and cleaning in Carlsbad',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for Carlsbad properties,
          one of the few places in San Diego County with a grant programme
          toward lateral work.
        </p>
      ),
    },
    body: (
      <>
        <h2>Carlsbad has a sewer lateral grant programme</h2>
        <p>
          Carlsbad operates a Sewer Lateral Grant Program offering reimbursement
          of up to $3,000 toward the replacement or rehabilitation of a private
          lateral. It is awarded first-come, first-served, with priority given
          to properties that have a history of overflows.
        </p>
        <p>
          That is unusual here. Across most of San Diego County, including the
          City of San Diego, no equivalent assistance exists and a failed
          lateral is funded entirely by the owner.
        </p>

        <h2>Which provider serves your property matters</h2>
        <p>
          Carlsbad is not served by a single sewer provider. The city&rsquo;s
          own Utilities Department serves most of it, while the southern portion
          falls under Leucadia Wastewater District or Vallecitos Water District.
        </p>
        <p>
          The grant programme is described as covering the Carlsbad Wastewater
          service area. Whether that extends to properties served by Leucadia or
          Vallecitos is not something we have been able to confirm, so if your
          property sits in the southern part of the city, confirm your own
          eligibility on the{' '}
          <a href="https://www.carlsbadca.gov/departments/utilities/sewer/for-property-owners">
            City of Carlsbad&rsquo;s property-owner page
          </a>{' '}
          before assuming it applies.
        </p>

        <h2>Owner responsibility either way</h2>
        <p>
          Regardless of provider, the property owner is responsible for the
          lateral from the building to the main. The city maintains the mainline
          only.
        </p>

        <h2>Coastal buildout</h2>
        <p>
          Carlsbad&rsquo;s housing is largely late-1970s through 2000s
          construction, peaking in the 1980s, meaningfully newer than the older
          urban stock elsewhere in the region. On lines of that era the
          recurring findings tend to be bellies and joint separation from ground
          movement rather than the material decay that dominates older areas.
        </p>
      </>
    ),
    servicePageIds: [id('sl-carlsbad-camera'), id('sl-carlsbad-prepurchase')],
    faq: [
      {
        question: 'How much is the Carlsbad grant?',
        answer: (
          <p>
            Up to $3,000 toward lateral replacement or rehabilitation, awarded
            first-come, first-served with priority for properties with an
            overflow history.
          </p>
        ),
      },
      {
        question: 'Does the grant apply everywhere in Carlsbad?',
        answer: (
          <p>
            It covers the Carlsbad Wastewater service area. The southern portion
            of the city is served by Leucadia Wastewater District or Vallecitos
            instead, and whether the grant reaches those properties is not
            something we can confirm; check with the City directly.
          </p>
        ),
      },
    ],
  },

  /* ------------------------------------------------------- Chula Vista -- */
  [id('loc-sd-chula-vista')]: {
    hero: {
      eyebrow: 'Chula Vista',
      title: 'Sewer inspection and cleaning in Chula Vista',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for Chula Vista
          properties, where sewer service comes from a district separate from
          the city government.
        </p>
      ),
    },
    body: (
      <>
        <h2>CVSan is not the City of Chula Vista</h2>
        <p>
          Sewer service in Chula Vista is provided by CVSan (the Chula Vista
          Sanitation District), which is a separate special district rather than
          a department of the city government.
        </p>
        <p>
          This trips people up regularly. Questions about laterals, permits, and
          the grant programme go to CVSan, not to City Hall, and searching for
          city sewer policy will not necessarily surface the rules that apply.
        </p>

        <h2>CVSan runs a lateral replacement grant programme</h2>
        <p>
          CVSan operates a Lateral Replacement Grant Program that reimburses
          documented repair or replacement cost. The process is specific, and
          worth knowing before work starts rather than after:
        </p>
        <ul>
          <li>Three contractor quotes from CVSan&rsquo;s Qualified Contractor List</li>
          <li>A CVSan repair permit</li>
          <li>Work completed within 90 days</li>
          <li>Reimbursement on submission of a paid-in-full invoice</li>
        </ul>
        <p>
          Every one of those steps assumes you can establish what is wrong with
          the line and where. Three comparable quotes in particular are far
          easier to obtain when each contractor is pricing against the same
          documented evidence rather than forming an independent opinion.
        </p>
        <p>
          We have not been able to confirm the programme&rsquo;s exact
          reimbursement cap, and it differs from Carlsbad&rsquo;s stated $3,000.
          Check the current figure on{' '}
          <a href="https://cvsan.org/wastewater/lateral_replacement_grant_program.php">
            CVSan&rsquo;s grant programme page
          </a>{' '}
          rather than relying on a number from anywhere else.
        </p>

        <h2>Two eras in one city</h2>
        <p>
          Chula Vista&rsquo;s median year built is 1987, with 27.3% of housing
          predating 1970 (American Community Survey, 2019&ndash;2023 five-year
          estimates). That single figure hides a genuinely mixed picture.
        </p>
        <p>
          The stock is genuinely mixed: a meaningful postwar
          and 1960s base alongside a strong wave of master-planned development
          in the eastern part of the city through the 2000s. Those two halves
          of the city can present quite different lateral conditions, so what is
          typical for one is a poor guide to the other.
        </p>
      </>
    ),
    servicePageIds: [id('sl-chula-vista-camera')],
    faq: [
      {
        question: 'Do I contact the City of Chula Vista about my sewer lateral?',
        answer: (
          <p>
            CVSan (the Chula Vista Sanitation District) provides sewer service
            and administers the lateral grant programme. It is a separate
            district from the city government.
          </p>
        ),
      },
      {
        question: 'What does CVSan’s grant require?',
        answer: (
          <p>
            Three quotes from its Qualified Contractor List, a CVSan repair
            permit, work completed within 90 days, and a paid-in-full invoice
            for reimbursement. Confirm the current cap with CVSan directly.
          </p>
        ),
      },
    ],
  },

  /* --------------------------------------------------------- Escondido -- */
  [id('loc-sd-escondido')]: {
    hero: {
      eyebrow: 'Escondido',
      title: 'Sewer inspection and cleaning in Escondido',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for Escondido properties,
          where the municipal code is unusually explicit about what the owner is
          responsible for.
        </p>
      ),
    },
    body: (
      <>
        <h2>The code states it directly</h2>
        <p>
          Escondido&rsquo;s municipal code, at §22-165, places responsibility on
          the property owner for all maintenance, repair, replacement, cleaning,
          and removal of blockages in the sewer lateral. The city&rsquo;s
          responsibility is limited to damage that it or its contractors
          directly caused.
        </p>
        <p>
          That is more explicit than most jurisdictions manage, and it removes
          the ambiguity that often surrounds who handles a blockage. Clearing a
          clog is the owner&rsquo;s, not the city&rsquo;s.
        </p>

        <h2>No assistance programme</h2>
        <p>
          We found no lateral repair assistance programme in Escondido. Unlike
          Carlsbad and Chula Vista, there appears to be no grant to offset the
          cost, which puts the full expense on the property owner.
        </p>
        <p>
          Where no programme exists, the value of knowing what is actually wrong
          before committing to a remedy goes up rather than down. The difference
          between a line that will respond to cleaning and one that needs
          replacing is the difference between two very different invoices.
        </p>

        <h2>Suburban expansion stock</h2>
        <p>
          Escondido&rsquo;s median year built is 1981 (American Community
          Survey, 2019&ndash;2023 five-year estimates), reflecting 1970s and
          1980s suburban expansion with a modest older share. That span crosses the transition
          toward PVC, so the age of a house is a weak predictor of what its
          lateral is made of or what condition it is in.
        </p>
      </>
    ),
    servicePageIds: [id('sl-escondido-cleaning')],
    faq: [
      {
        question: 'Does Escondido clear blockages in my lateral?',
        answer: (
          <p>
            No. Municipal code §22-165 places maintenance, repair, replacement,
            cleaning, and blockage removal on the property owner. The city is
            responsible only for damage it or its contractors caused.
          </p>
        ),
      },
    ],
  },

  /* --------------------------------------------------------- Oceanside -- */
  [id('loc-sd-oceanside')]: {
    hero: {
      eyebrow: 'Oceanside',
      title: 'Sewer inspection and cleaning in Oceanside',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for Oceanside
          properties, coastal and suburban housing across a wide span of
          construction eras.
        </p>
      ),
    },
    body: (
      <>
        <h2>Sewer service in Oceanside</h2>
        <p>
          Sewer service in Oceanside is provided by the City of Oceanside Water
          Utilities Department.
        </p>
        <p>
          As in most San Diego County jurisdictions, sewer laterals are
          generally the property owner&rsquo;s responsibility. We have not
          located a specific published Oceanside statement setting out the exact
          boundary, so rather than restate a neighbouring city&rsquo;s rule as
          though it were Oceanside&rsquo;s, confirm what applies to your
          property with{' '}
          <a href="https://www.ci.oceanside.ca.us/residents/water-utilities">
            Oceanside Water Utilities
          </a>
          .
        </p>
        <p>
          We also found no lateral repair assistance programme here, unlike
          Carlsbad and Chula Vista, which do have one. Worth confirming for
          yourself before assuming either way.
        </p>

        <h2>Coastal conditions</h2>
        <p>
          Oceanside&rsquo;s median year built is 1984, with 16.9% of housing
          predating 1970 (American Community Survey, 2019&ndash;2023 five-year
          estimates), reflecting growth through the 1970s and 1980s continuing
          into the 1990s. On lines of
          that period, ground movement and settlement are more often behind
          recurring problems than material decay: bellies holding water,
          joints pulled apart, damage from later work on the property.
        </p>
        <p>
          Those produce the same symptom as an old failing line, and they are
          not distinguishable from the fixtures. The camera is what separates
          them.
        </p>
      </>
    ),
    servicePageIds: [id('sl-oceanside-cleaning')],
    faq: [
      {
        question: 'Is my lateral my responsibility in Oceanside?',
        answer: (
          <p>
            Sewer laterals are generally the property owner&rsquo;s
            responsibility across San Diego County. We would rather send you to
            Oceanside Water Utilities for the specific boundary than restate
            another city&rsquo;s rule as though it were Oceanside&rsquo;s.
          </p>
        ),
      },
    ],
  },

  /* -------------------------------------------------------- San Marcos -- */
  [id('loc-sd-san-marcos')]: {
    hero: {
      eyebrow: 'San Marcos',
      title: 'Sewer inspection and cleaning in San Marcos',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for San Marcos
          properties, where sewer service comes from a water district rather
          than the city.
        </p>
      ),
    },
    body: (
      <>
        <h2>Vallecitos Water District, not the City</h2>
        <p>
          Sewer service in San Marcos is provided by the Vallecitos Water
          District, an independent special district that also serves parts of
          Carlsbad, Escondido, and Vista.
        </p>
        <p>
          It is a genuine distinction rather than an administrative footnote.
          Questions about your sewer service go to the district, and city-level
          searching will not necessarily surface the rules that govern your
          line.
        </p>
        <p>
          The district&rsquo;s position on responsibility is straightforward:
          lines installed to service private properties are the property
          owner&rsquo;s responsibility, and require periodic maintenance by the
          homeowner.
        </p>

        <h2>No assistance programme found</h2>
        <p>
          We found no lateral repair assistance programme covering San Marcos.
          The cost of a lateral problem here appears to fall entirely on the
          property owner.
        </p>

        <h2>New housing, different failure modes</h2>
        <p>
          San Marcos has among the newest housing in the region: a median year
          built of 1996, with only 7.7% predating 1970 (American Community
          Survey, 2019&ndash;2023 five-year estimates). Most laterals here will be PVC rather
          than clay, cast iron, or bituminized fibre.
        </p>
        <p>
          That removes the material failure modes that dominate older
          areas, but not the ones caused by ground movement. On newer lines the
          recurring findings are bellies that hold water, joints opened by
          settlement, and damage from landscaping or later construction. A belly
          produces exactly the repeating slow-drainage pattern people associate
          with an old pipe, from an entirely different cause.
        </p>
        <p>
          &ldquo;It is a newer house, the sewer will be fine&rdquo; is a
          reasonable assumption and frequently a wrong one.
        </p>
      </>
    ),
    servicePageIds: [id('sl-san-marcos-camera')],
    faq: [
      {
        question: 'Who provides sewer service in San Marcos?',
        answer: (
          <p>
            The Vallecitos Water District, an independent special district that
            also serves parts of Carlsbad, Escondido, and Vista, not the city
            itself.
          </p>
        ),
      },
      {
        question: 'My house is new. Do I need an inspection?',
        answer: (
          <p>
            Newer PVC pipe removes material decay as a failure mode but not
            ground movement. Bellies, settlement-opened joints, and damage from
            later work produce the same recurring symptoms and are common on
            newer lines.
          </p>
        ),
      },
    ],
  },

  /* ----------------------------------------------------- Mission Valley -- */
  [id('loc-sd-mission-valley')]: {
    hero: {
      eyebrow: 'Mission Valley',
      title: 'Sewer and drain service in Mission Valley',
      intro: (
        <p>
          Camera inspection, diagnostics, and high-pressure cleaning for
          Mission Valley&rsquo;s commercial, hospitality, and mixed-use
          properties.
        </p>
      ),
    },
    body: (
      <>
        <h2>A commercial district, not a residential neighbourhood</h2>
        <p>
          Mission Valley is a commercial and mixed-use district within the City
          of San Diego rather than a separate municipality or a residential
          suburb. Its sewer lines mostly serve hotels, restaurants, retail,
          offices, and multifamily buildings rather than single-family homes.
        </p>
        <p>
          That changes what tends to go wrong. Food-service and high-volume
          lines accumulate grease and solids on the pipe wall at a rate
          residential lines do not, and a failure interrupts trading or
          displaces occupants rather than inconveniencing a household.
        </p>

        <h2>City of San Diego rules apply</h2>
        <p>
          Because Mission Valley sits within the City of San Diego, the
          City&rsquo;s policy governs: the property owner owns the entire
          lateral from building to main, and there is no reimbursement for
          plumbing expenses.
        </p>
        <p>
          For a commercial property that carries a sharper edge. The full cost
          of a lateral failure sits with the owner, alongside whatever the
          disruption costs the operation on top of it.
        </p>

        <h2>Planned rather than reactive</h2>
        <p>
          Where lines carry grease or continuous volume, the useful pattern is
          usually to establish condition, clean on an interval the evidence
          supports, and re-inspect, rather than to respond to backups as they
          happen.
        </p>
        <p>
          Not every line needs that. Which ones do is a question inspection
          answers, and putting a line on a schedule its condition does not
          justify is the sort of recommendation we exist to avoid making.
        </p>

        <h2>Working around operations</h2>
        <p>
          Access on an occupied commercial site involves trading hours, tenants,
          service corridors, and other contractors. That is a planning
          constraint to work around rather than an afterthought.
        </p>
      </>
    ),
    servicePageIds: [id('sl-mission-valley-hydro')],
    faq: [
      {
        question: 'Is Mission Valley a separate city?',
        answer: (
          <p>
            No. It is a commercial and mixed-use district within the City of San
            Diego, so the City&rsquo;s sewer policy applies, including full
            owner responsibility for the lateral and no reimbursement.
          </p>
        ),
      },
      {
        question: 'How often should a restaurant line be cleaned?',
        answer: (
          <p>
            It depends on volume, what enters the line, and its condition rather
            than a standard interval. Establishing the rate of accumulation for
            a specific line is more useful than applying a default to it.
          </p>
        ),
      },
    ],
  },
}
