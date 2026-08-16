/**
 * Las Vegas market content — 5 GATED pages.
 *
 * Authority: docs/04-master-page-build-list.md §10.3, §14
 *            docs/22-decisions-change-log.md DEC-063, PENDING-012, DEC-073
 *            docs/14-content-specification.md §40, §42, §79
 *            CLAUDE.md §30, §73
 *            Las Vegas Market Research, 2026-08-16 / 2026-08-17
 *
 * ===========================================================================
 * ⚠ THESE PAGES ARE BUILT AND ROUTABLE BUT MUST NOT BE INDEXED
 * ===========================================================================
 * All five carry `launch_pending_validation`. They are excluded from the
 * sitemap, from navigation, and from every indexable link module by the
 * approved page registry — automatically, not by convention.
 *
 * DEC-063's gate is released by PENDING-012 resolving on its own
 * criteria: operational confirmation of the market's SERVICE MENU.
 *
 * It is NOT released by any of the following, all of which are now true:
 *   - the research being complete
 *   - the market being "currently launching"
 *   - contact information being confirmed
 *
 * Content readiness has advanced faster than the indexation decision,
 * which makes this the easiest point in the project to conflate the two.
 * A reachable phone number is evidence the business is real. It is not
 * evidence that a service menu is operationally confirmed.
 *
 * ---------------------------------------------------------------------------
 * ⚠ "LAUNCHING", NEVER "ESTABLISHED"
 * ---------------------------------------------------------------------------
 * Zero of 18 services are confirmed in the service registry, and there
 * is no Las Vegas operating history. 01 §20 forbids importing another
 * market's facts — St. Louis's 2011 founding and San Diego's 2015 stay
 * where they belong.
 *
 * No page below claims years of local service, local volume, a local
 * track record, or a local office. The framing is a market opening,
 * because that is what it is.
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
      We are newly launching in the Las Vegas Valley. Our established work is in
      St. Louis and San Diego, and we would rather say that plainly than imply
      a local history we do not have here yet.
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
        Independent camera inspection, diagnostics, and cleaning — newly
        launching across the Las Vegas Valley, from a company that documents
        the condition of the line and does not sell the repair.
      </p>
    ),
  },
  body: (
    <>
      <h2>Who governs your sewer here depends on where you live</h2>
      <p>
        The Las Vegas Valley has no single sewer authority. Each incorporated
        city runs its own utility relationship, while the Clark County Water
        Reclamation District — publicly branded the Clean Water Team — serves
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
        is the responsibility of the property owner — cleaning, repair, and
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
        company on an <strong>optional paid warranty</strong> — Service Line
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
        settlement, and damage from later construction or landscaping — all of
        which produce the same repeating slow-drainage pattern people associate
        with old pipe, from an entirely different cause.
      </p>

      {LAS_VEGAS_CONTACT}
    </>
  ),
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
          for its own residents — responsibility begins where the lateral meets
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
          warranty — $6.00 a month or $67.00 a year — which is insurance a
          homeowner buys rather than municipal assistance.
        </p>
      ),
    },
  ],
  cta: {
    title: 'Find out what condition the line is in',
    body: 'Documented evidence of the lateral, from a company that does not perform the repair.',
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
          City of Las Vegas — where the city&rsquo;s answer to lateral costs is
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
          model — the homeowner owns the lateral — which is what every other
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
          That means most laterals here are PVC. Material decay — the clay joints
          and corroded cast iron that dominate older regions — is largely not
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
        question: 'Should I buy the city&rsquo;s warranty?',
        answer: (
          <p>
            That depends on the condition of your line, which is worth
            establishing either way. The warranty is $6.00 a month or $67.00 a
            year with no cap and no deductible — but it is a product you buy,
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
          laid — pools, additions, landscaping, utility trenching.
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
          properties — the newest housing stock in the valley, where sewer
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
          All three produce recurring slow drainage that clears and returns —
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
          Every other authority in the valley — Henderson and the Clark County
          Water Reclamation District both — places the lateral with the property
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
            not pipe age — bellies, settlement-opened joints, and damage from
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
          Camera inspection, diagnostics, and cleaning across Summerlin — a
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
          Most of Summerlin lies within the incorporated City of Las Vegas —
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
          the property owner&rsquo;s — cleaning, repair, and replacement.
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
          Summerlin South, which is a separate geography — another reason the
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
        question: 'Does the city&rsquo;s warranty cover my Summerlin property?',
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
