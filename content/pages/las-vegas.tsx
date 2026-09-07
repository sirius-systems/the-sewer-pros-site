/**
 * Las Vegas market content — 5 live pages.
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

import { coreServiceCards } from './service-cards'

const id = (value: string): PageId => value as PageId

/** Owner-confirmed contact (DEC-073). Repeated per page deliberately. */
const LAS_VEGAS_CONTACT = (
  <>
    <h2>Reaching us in Las Vegas</h2>
    <p>
      Las Vegas enquiries go to <a href="tel:+17252924030">(725) 292-4030</a> or{' '}
      <a href="mailto:bookaninspection@thesewerpros.com">
        bookaninspection@thesewerpros.com
      </a>
      , Monday to Friday, 8:00am to 4:00pm.
    </p>
    <p>
      We are operating in the Las Vegas Valley. This is a newer market for us
      (our longest-running work is in St. Louis and San Diego), and we would
      rather say that plainly than imply a local track record we have not built
      here yet.
    </p>
  </>
)

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
    src: '/images/homepage/hero/the-sewer-pros-high-pressure-line-cleaning-hero.webp',
    alt: 'Jetting reel and hose run to a cleanout on a paved approach',
    source:
      'Supplied by the business owner, 2026-09-03. Rendered scene, not a photograph of a Sewer Pros job.',
  },
  /*
    ⚠ THE CLIP IS LAS VEGAS'S OWN; THE STILL ABOVE IS STILL THE SHARED
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
    src: '/images/markets/las-vegas-nv/hero/the-sewer-pros-las-vegas-sewer-camera-inspection-hero.mp4',
    describes: 'Sewer camera inspection clip supplied for the Las Vegas hub hero',
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
  heroFormMarketId: 'las-vegas-nv',
  body: (
    <>
      <h2>Who governs your sewer here depends on where you live</h2>
      <p>
        The Las Vegas Valley has no single sewer authority. Each incorporated
        city runs its own utility relationship, while the Clark County Water
        Reclamation District, publicly branded the Clean Water Team, serves
        the unincorporated areas of the valley.
      </p>
      <p>
        That fragmentation is not administrative trivia. Which authority
        governs your address determines who to contact, what rules apply, and
        whether any assistance exists. Summerlin is the clearest illustration:
        it genuinely straddles two authorities depending on which side of an
        incorporation line a property sits on.
      </p>

      <h2>The lateral is the property owner&rsquo;s</h2>
      <p>
        The Clark County Water Reclamation District states it directly: a
        damaged sewer lateral connecting a house to the sewer main in the street
        is the responsibility of the property owner: cleaning, repair, and
        replacement alike.
      </p>
      <p>
        Henderson is equally explicit. The city states that homeowner
        responsibility begins where the lateral connects to the city&rsquo;s
        sewer main in the street, and that the owner must maintain and repair
        from that point through the home&rsquo;s plumbing, bearing the cost.
      </p>

      <h2>Assistance here means insurance you buy, not a fund</h2>
      <p>
        This is a genuine difference from other markets. Rather than a
        reimbursement programme, the City of Las Vegas partners with a private
        company on an <strong>optional paid warranty</strong>: Service Line
        Warranties of America, at $6.00 per month or $67.00 per year, with no
        coverage cap and no deductible or service fee.
      </p>
      <p>
        It is a product a homeowner chooses to buy, not a municipal fund that
        contributes toward an eligible repair. Whether it is worth buying
        depends on the condition of the line you actually have, which is a
        question that can be answered rather than guessed at.
      </p>

      <h2>Newer housing, different failure modes</h2>
      <p>
        The Las Vegas Valley has among the newest housing of anywhere we work.
        Most laterals here will be PVC rather than clay, cast iron, or
        bituminized fibre, which removes the material decay that dominates older
        regions.
      </p>
      <p>
        What it does not remove is ground movement. On newer lines the recurring
        findings are bellies holding standing water, joints opened by
        settlement, and damage from later construction or landscaping, all of
        which produce the same repeating slow-drainage pattern people associate
        with old pipe, from an entirely different cause.
      </p>

      {LAS_VEGAS_CONTACT}
    </>
  ),
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
  experience: {
    eyebrow: 'Company experience, local service',
    title: 'Sewer inspection experience for Las Vegas properties',
    intro: [
      'The Sewer Pros is a sewer and drain specialist rather than a general plumbing company, and Las Vegas customers receive the same evidence-first approach the company is built on. That matters when you need to understand a recurring sewer backup, investigate a slow or blocked line, evaluate a property before purchase, or determine whether sewer cleaning is the appropriate next step.',
      'Our Las Vegas sewer services include sewer camera inspection, sewer cleaning, hydro jetting, sewer line locating, recurring backup diagnosis, pre-purchase sewer inspection, and preventative sewer maintenance. We focus on identifying and documenting visible conditions inside accessible portions of the sewer line, then explaining what the evidence means in plain language.',
    ],
    blocks: [
      {
        title: 'What does a Las Vegas sewer camera inspection provide?',
        body: [
          'A sewer camera inspection, also called a sewer scope, records the visible condition of the accessible sewer line. The footage may reveal buildup, root intrusion, blockages, offset joints, standing water, cracks, or other conditions that could be contributing to drainage problems.',
          'You receive video evidence and an understandable explanation of the findings, helping you decide whether the line needs cleaning, continued monitoring, or further evaluation by a separate sewer repair provider.',
        ],
      },
      {
        title: 'Make your next decision with better information',
        listIntro: 'A professional sewer inspection can help you:',
        items: [
          'See visible conditions inside the accessible sewer line',
          'Investigate the cause of recurring sewer backups or slow drainage',
          'Determine whether sewer cleaning or hydro jetting may be appropriate',
          'Document the line before purchasing a Las Vegas-area property',
          'Locate the sewer line before landscaping, excavation, or utility work',
          'Review inspection findings before agreeing to a major sewer repair',
          'Keep video evidence that can be reviewed or shared when seeking another opinion',
        ],
      },
      {
        title: 'An inspection-first approach without a repair sale',
        body: [
          'The Sewer Pros inspects, documents, locates, and cleans sewer lines. We do not perform sewer repair or replacement, so we do not profit from recommending a major repair.',
          'Our role is to show you what is visible inside the line and explain the findings clearly. You remain in control of what happens next, including whether to schedule cleaning, monitor the condition, seek another opinion, or consult a sewer repair provider of your choosing.',
        ],
      },
    ],
    proof: [
      {
        title: 'Sewer and Drain Specialists',
        body: 'Sewer inspection, diagnostics, locating, and cleaning are the work, not a sideline of a general plumbing business.',
        icon: 'experience',
        accent: 'blue',
      },
      {
        title: 'Documented Camera Evidence',
        body: 'Visible conditions inside the accessible line are recorded and explained, so the findings are something you can review rather than take on trust.',
        icon: 'camera',
        accent: 'blue',
      },
      {
        title: 'No Repair-Driven Upselling',
        body: 'We do not perform sewer repair or replacement. The inspection findings stay separate from the sale of a major repair.',
        icon: 'independence',
        accent: 'green',
      },
    ],
    coverage: {
      title: 'Sewer inspection and cleaning across the Las Vegas Valley',
      body: [
        'The Sewer Pros serves residential properties, home buyers, real estate professionals, property managers, multifamily buildings, and commercial properties throughout the Las Vegas Valley. Featured service areas include Las Vegas, Henderson, North Las Vegas, and Summerlin.',
        'Service availability can vary by property location. Contact us with the address and the sewer or drainage issue you are experiencing so we can confirm coverage before scheduling.',
      ],
    },
    actions: {
      primary: {
        label: 'Schedule a Las Vegas Sewer Inspection',
        pageId: id('core-contact'),
      },
      secondary: {
        label: 'Explore Las Vegas Sewer Services',
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
  services: coreServiceCards,
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
          The property owner. The Clark County Water Reclamation District states
          this directly for the unincorporated valley, and Henderson states it
          for its own residents: responsibility begins where the lateral meets
          the city main.
        </p>
      ),
    },
    {
      question: 'Is there a programme that helps with lateral repair costs?',
      answer: (
        <p>
          Not a reimbursement fund of the kind some other regions run. The City
          of Las Vegas partners with a private provider on an optional paid
          warranty, $6.00 a month or $67.00 a year, which is insurance a
          homeowner buys rather than municipal assistance.
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
    src: '/images/homepage/hero/the-sewer-pros-homebuyer-sewer-due-diligence-hero.webp',
    alt: 'Jetting equipment and an open cleanout beside a property wall',
    source:
      'Supplied by the business owner, 2026-09-03. Rendered scene, not a photograph of a Sewer Pros job.',
  },
}

/* ==========================================================================
   Location pages
   ========================================================================== */

export const lasVegasLocationContent: Partial<Record<PageId, LocationPageContent>> = {
  /* ------------------------------------------------- Las Vegas (city) -- */
  [id('loc-lv-las-vegas')]: {
    hero: {
      eyebrow: 'Las Vegas',
      title: 'Sewer inspection and cleaning in Las Vegas',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for properties in the
          City of Las Vegas, where the city&rsquo;s answer to lateral costs is
          an optional warranty rather than a repair fund.
        </p>
      ),
    },
    body: (
      <>
        <h2>An optional warranty, not a reimbursement programme</h2>
        <p>
          The City of Las Vegas partners with Service Line Warranties of America
          on an optional paid warranty covering sewer lateral repair: $6.00 per
          month or $67.00 per year, with no coverage cap and no deductible or
          service fee.
        </p>
        <p>
          The distinction from other regions matters. This is insurance the
          homeowner elects to buy in advance. It is not a municipal fund that
          contributes toward an eligible repair after a failure, and there is no
          equivalent free programme.
        </p>
        <p>
          Whether the product is worth it depends on the line you actually have.
          A recently laid PVC lateral in sound condition and a line with a known
          defect are different propositions, and the difference is establishable.
        </p>

        <h2>Confirm the responsibility boundary with the city</h2>
        <p>
          Sewer service in the city is handled by City of Las Vegas Public Works,
          through its Water Pollution Control division. We have not located an
          explicit published statement from the city setting out exactly where
          homeowner responsibility for the lateral begins and ends.
        </p>
        <p>
          The existence of the warranty product strongly implies the standard
          model (the homeowner owns the lateral), which is what every other
          authority in the valley states. But rather than assert the
          city&rsquo;s policy from an inference, confirm it with{' '}
          <a href="https://www.lasvegasnevada.gov/Government/Departments/Public-Works">
            City of Las Vegas Public Works
          </a>
          .
        </p>

        <h2>What actually fails on Las Vegas lines</h2>
        <p>
          The city&rsquo;s housing has a median year built of around 1994
          (American Community Survey, 2019&ndash;2023 five-year estimates), with
          close to 28% of all housing built during the 1990s alone.
        </p>
        <p>
          That means most laterals here are PVC. Material decay, the clay joints
          and corroded cast iron that dominate older regions, is largely not
          the issue. What is:
        </p>
        <ul>
          <li>Bellies where a section lost slope and holds standing water</li>
          <li>Joints opened by ground movement rather than age</li>
          <li>Damage from later landscaping, pools, or construction</li>
          <li>Roots entering wherever movement created an opening</li>
        </ul>

        {LAS_VEGAS_CONTACT}
      </>
    ),
    faq: [
      {
        question: 'Should I buy the city’s warranty?',
        answer: (
          <p>
            That depends on the condition of your line, which is worth
            establishing either way. The warranty is $6.00 a month or $67.00 a
            year with no cap and no deductible, but it is a product you buy,
            not assistance you claim after a failure.
          </p>
        ),
      },
    ],
  },

  /* ---------------------------------------------------------- Henderson -- */
  [id('loc-lv-henderson')]: {
    hero: {
      eyebrow: 'Henderson',
      title: 'Sewer inspection and cleaning in Henderson',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for Henderson properties,
          where the city is unusually clear about exactly where your
          responsibility starts.
        </p>
      ),
    },
    body: (
      <>
        <h2>Henderson states the boundary precisely</h2>
        <p>
          The City of Henderson&rsquo;s Department of Utility Services is more
          explicit than most authorities manage: homeowner responsibility begins
          at the point where the lateral connects to the city&rsquo;s sewer main
          in the street. From that point through the home&rsquo;s plumbing, the
          owner must maintain and repair, bearing the cost.
        </p>
        <p>
          There is no ambiguity to work around here, and no assistance programme
          was found to offset it. The full run from the street connection
          inward is yours.
        </p>
        <p>
          The city&rsquo;s page describes billing and customer service rather
          than the treatment relationship, so if you need to know how
          Henderson&rsquo;s wastewater treatment relates to the county district,
          check{' '}
          <a href="https://www.cityofhenderson.com/government/departments/utility-services/customer-care-center/water-and-sewer-laterals">
            Henderson Utility Services
          </a>{' '}
          directly.
        </p>

        <h2>Very new housing, and what that changes</h2>
        <p>
          Henderson&rsquo;s median year built is around 2001 (American Community
          Survey, 2019&ndash;2023 five-year estimates), with more than 60% of
          all housing built between 1990 and 2009. Roughly 3% predates 1970.
        </p>
        <p>
          Almost every lateral here will be PVC. That is genuinely good news
          about material failure, and it is why the &ldquo;old pipe&rdquo;
          framing common in sewer marketing does not describe Henderson.
        </p>

        <h2>What still goes wrong</h2>
        <p>
          Newer pipe does not float above the ground it sits in. On lines of
          this era the recurring findings are bellies holding water, joints
          opened by settlement, and damage from work done after the line was
          laid: pools, additions, landscaping, utility trenching.
        </p>
        <p>
          A belly produces exactly the symptom people read as an ageing sewer:
          drainage that slows, gets cleared, and slows again on a cycle. The
          cause is different, and clearing it repeatedly does not address it.
        </p>

        {LAS_VEGAS_CONTACT}
      </>
    ),
    faq: [
      {
        question: 'Where does my responsibility start in Henderson?',
        answer: (
          <p>
            At the point where the lateral connects to the city&rsquo;s sewer
            main in the street. From there through the home&rsquo;s plumbing,
            the city states the owner must maintain and repair and bears the
            cost.
          </p>
        ),
      },
      {
        question: 'My house is only twenty years old. Is an inspection worth it?',
        answer: (
          <p>
            Material failure is unlikely at that age, but ground movement does
            not follow the pipe&rsquo;s age. Bellies and settlement-opened
            joints are the common findings on newer lines and produce the same
            recurring symptoms.
          </p>
        ),
      },
    ],
  },

  /* -------------------------------------------------- North Las Vegas -- */
  [id('loc-lv-north-las-vegas')]: {
    hero: {
      eyebrow: 'North Las Vegas',
      title: 'Sewer inspection and cleaning in North Las Vegas',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning for North Las Vegas
          properties, the newest housing stock in the valley, where sewer
          problems rarely look like age.
        </p>
      ),
    },
    body: (
      <>
        <h2>The newest housing of the four</h2>
        <p>
          North Las Vegas has a median year built of around 2003 (American
          Community Survey, 2019&ndash;2023 five-year estimates), with 41.8% of
          all housing built during the 2000s alone. Under 8% predates 1970.
        </p>
        <p>
          Practically every lateral here will be PVC, laid within the last
          twenty-five years. Material decay is not the story in North Las Vegas,
          and any pitch built on deteriorating old pipe does not describe this
          city.
        </p>

        <h2>What a rapid-growth era leaves behind</h2>
        <p>
          Housing built quickly and recently has its own characteristic issues,
          and they are about the ground rather than the pipe:
        </p>
        <ul>
          <li>
            <strong>Bellies.</strong> A section that settled and lost slope
            holds standing water, and solids drop out wherever flow slows.
          </li>
          <li>
            <strong>Joint separation from movement.</strong> PVC joints are
            sound until the ground shifts around them.
          </li>
          <li>
            <strong>Damage from later work.</strong> Pools, additions,
            landscaping, and utility trenching all cross laterals, and the
            damage often does not surface immediately.
          </li>
        </ul>
        <p>
          All three produce recurring slow drainage that clears and returns:
          the symptom people attribute to an old sewer, on a line that is
          nothing of the sort.
        </p>

        <h2>Confirm the responsibility boundary</h2>
        <p>
          Sewer service is handled by City of North Las Vegas Public Works and
          Utilities. We were not able to locate a published North Las Vegas
          statement setting out exactly where homeowner responsibility for the
          lateral begins.
        </p>
        <p>
          Every other authority in the valley (Henderson and the Clark County
          Water Reclamation District both) places the lateral with the property
          owner, so the pattern is consistent. But we would rather send you to{' '}
          <a href="https://www.cityofnorthlasvegas.com">
            the City of North Las Vegas
          </a>{' '}
          than restate a neighbouring jurisdiction&rsquo;s rule as though it
          were North Las Vegas&rsquo;s own.
        </p>

        {LAS_VEGAS_CONTACT}
      </>
    ),
    faq: [
      {
        question: 'The house is barely twenty years old. Why would the sewer be a problem?',
        answer: (
          <p>
            Because the failure modes on newer lines are about ground movement,
            not pipe age: bellies, settlement-opened joints, and damage from
            work done after the line was laid. Those produce the same recurring
            symptoms as an old failing line.
          </p>
        ),
      },
    ],
  },

  /* --------------------------------------------------------- Summerlin -- */
  [id('loc-lv-summerlin')]: {
    hero: {
      eyebrow: 'Summerlin',
      title: 'Sewer inspection and cleaning in Summerlin',
      intro: (
        <p>
          Camera inspection, diagnostics, and cleaning across Summerlin, a
          community that genuinely straddles two different sewer authorities.
        </p>
      ),
    },
    body: (
      <>
        <h2>Summerlin sits across a jurisdictional line</h2>
        <p>
          This is the fact worth knowing before you contact anyone about a sewer
          problem in Summerlin, and it surprises people who have lived here for
          years.
        </p>
        <p>
          Most of Summerlin lies within the incorporated City of Las Vegas,
          roughly 22,500 acres along the city&rsquo;s western edge. But
          Summerlin South is a separate unincorporated Clark County
          census-designated place, not part of the city at all, and falls under
          the Clark County Water Reclamation District instead.
        </p>
        <p>
          Two properties a short distance apart can therefore sit under
          different authorities, with different points of contact and different
          rules. The City of Las Vegas&rsquo;s optional warranty product, for
          instance, applies only to the incorporated portion.
        </p>

        <h2>Find out which side you are on</h2>
        <p>
          Because the boundary is not visible from the street and not obvious
          from an address, confirm it rather than assume. Clark County publishes
          a{' '}
          <a href="https://www.clarkcountynv.gov/assets/documents/residents/about_clark_county/map-jurisdictional-boundaries-0124.pdf">
            jurisdictional boundary map
          </a>{' '}
          showing where incorporated city limits end.
        </p>
        <p>
          It is worth five minutes. Contacting the wrong authority about a sewer
          problem wastes time you may not have.
        </p>

        <h2>Either way, the lateral is yours</h2>
        <p>
          The one thing that does not change across the boundary is
          responsibility. The Clark County Water Reclamation District states
          that a damaged lateral connecting a house to the main in the street is
          the property owner&rsquo;s: cleaning, repair, and replacement.
        </p>

        <h2>A tightly concentrated construction era</h2>
        <p>
          Summerlin&rsquo;s housing is unusually concentrated: a median year
          built of around 1992, with 51.4% of all housing built during the 1990s
          alone (American Community Survey, 2019&ndash;2023 five-year
          estimates, covering ZIP codes 89128 and 89145).
        </p>
        <p>
          A community built largely within one decade tends to reach the same
          stage of ground settlement at broadly the same time. That makes
          bellies and settlement-opened joints the findings to expect here,
          rather than the material decay of an older region.
        </p>
        <p>
          Note that figure describes incorporated Summerlin rather than
          Summerlin South, which is a separate geography, another reason the
          boundary is worth confirming.
        </p>

        {LAS_VEGAS_CONTACT}
      </>
    ),
    faq: [
      {
        question: 'Is Summerlin part of the City of Las Vegas?',
        answer: (
          <p>
            Mostly, but not entirely. Most of Summerlin is within incorporated
            city limits, while Summerlin South is unincorporated Clark County
            and falls under the county water reclamation district. Check Clark
            County&rsquo;s jurisdictional boundary map for your address.
          </p>
        ),
      },
      {
        question: 'Does the city’s warranty cover my Summerlin property?',
        answer: (
          <p>
            Only if your property is in the incorporated portion. The City of
            Las Vegas&rsquo;s optional warranty does not extend to unincorporated
            Summerlin South.
          </p>
        ),
      },
    ],
  },
}
