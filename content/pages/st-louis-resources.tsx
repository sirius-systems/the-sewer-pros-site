/**
 * St. Louis municipal lateral programme resource guides — 3 pages.
 *
 * Authority: docs/14-content-specification.md §35 (answer-first)
 *            docs/12-content-aeo-ai-strategy.md
 *            CLAUDE.md §22, §28, §34, §64
 *            St. Louis Market Research, 2026-08-16 (updated)
 *            DEC-070, DEC-072
 *
 * ===========================================================================
 * THREE PAGES, THREE DIFFERENT EVIDENCE POSITIONS
 * ===========================================================================
 * `res-stl-lateral-report` — what a report must contain to be usable.
 *   General across programmes; grounded in the documented requirements
 *   of the four verified jurisdictions.
 *
 * `res-stl-city-program` — St. Louis City. Fully verified from the
 *   city's own page: fee, coverage boundary, exclusions, and the video
 *   requirement.
 *
 * `res-stl-county-program` — St. Louis County. Deliberately NOT written
 *   as a guide to a county programme, because whether a countywide
 *   programme applies to a given address is unresolved: every county
 *   SLRP page returned 403 across repeated attempts.
 *
 *   Instead it answers the question a county resident actually has —
 *   "which programme applies to me?" — which is genuinely useful given
 *   that St. Louis County contains many municipalities each running
 *   their own. That reframing is honest rather than evasive: the page
 *   is about locating your own programme, and links to the county
 *   (DEC-072 cite-and-link) rather than asserting terms.
 *
 * ---------------------------------------------------------------------------
 * ⚠ A THIRD-PARTY SOURCE WAS FOUND MISSTATING THE CITY PROGRAMME
 * ---------------------------------------------------------------------------
 * The research found a plumbing-company page describing the St. Louis
 * City programme as reimbursing "up to 50%", contradicting the city's
 * own statement of full cost for eligible right-of-way repairs.
 *
 * That is why these pages cite the municipality and tell readers to
 * verify against it. It is also a genuine, non-generic reason for these
 * guides to exist: the information circulating about these programmes
 * is demonstrably unreliable.
 *
 * ⚠ NO PAGE PROMISES AN OUTCOME. The business documents conditions;
 * municipalities decide claims.
 */

import type { PageId, ResourcePageContent } from '@/types'

const id = (value: string): PageId => value as PageId

export const stLouisResourceContent: Partial<Record<PageId, ResourcePageContent>> = {
  /* ============================================================ report -- */
  [id('res-stl-lateral-report')]: {
    hero: {
      eyebrow: 'Guide',
      title: 'St. Louis Sewer Lateral Report Guide',
    },
    directAnswer: (
      <p>
        A sewer lateral report submitted to a St. Louis-area municipal programme
        generally needs to establish four things: that a licensed plumber
        inspected the line, what the defect is, where along the line it sits,
        and video showing it. Programmes differ on caps and coverage, but they
        broadly agree that a description of symptoms is not enough.
      </p>
    ),
    body: (
      <>
        <h2>Why the report is the bottleneck</h2>
        <p>
          Many municipalities across the St. Louis area fund sewer lateral
          repair programmes through a small annual charge on the real estate tax
          bill. Where a programme applies, it can cover a substantial part of an
          eligible repair.
        </p>
        <p>
          What it will not do is act on a phone call describing a backup.
          Programmes generally require documentation from a licensed plumber
          before a claim is considered, and in several cases video of the line
          specifically. A homeowner with a genuine failure and no documentation
          may have no route into a programme they have been paying into for
          years.
        </p>

        <h2>What a usable report contains</h2>

        <h3>Who inspected the line, and their standing</h3>
        <p>
          Programmes are specific about this. St. Louis City requires a licensed
          plumber to inspect and submit a written statement. St. Charles
          requires written certification from a licensed master plumber or
          drainlayer. The credential is part of what makes the document
          acceptable.
        </p>

        <h3>What the defect is</h3>
        <p>
          Not &ldquo;the line is blocked&rdquo; but what is causing it — a
          separated joint, a collapsed section, root intrusion at a specific
          point, a section that has lost slope. Programmes distinguish between
          structural failure and ordinary maintenance, and that distinction
          usually decides eligibility.
        </p>

        <h3>Where along the line it sits</h3>
        <p>
          This is the field most often missing and most often decisive. Coverage
          boundaries are geographic:
        </p>
        <ul>
          <li>
            St. Louis City covers breaks beneath the public right-of-way and
            excludes breaks under private property
          </li>
          <li>
            Florissant covers from the main to within five feet of the
            residence, and no closer
          </li>
        </ul>
        <p>
          A defect at eight feet from the house and one at three feet are the
          same plumbing problem and, in Florissant, entirely different claims.
          A report that records distance along the line answers that; one that
          does not leaves it open.
        </p>

        <h3>Video of the line</h3>
        <p>
          Requirements vary. St. Louis City asks for video alongside the written
          statement. Florissant requires video inspection for claim approval.
          Ballwin asks for the video or cabling invoice as documentation where
          available. St. Charles&rsquo;s ordinance route instead requires
          certification that cabling was attempted and did not resolve the
          issue.
        </p>

        <h3>What could not be assessed</h3>
        <p>
          Sections obscured by standing water or buildup, and any part of the
          line the camera could not reach. This is not a weakness in a report —
          it is the boundary of what the report establishes, and stating it is
          what makes the rest credible.
        </p>

        <h2>Who pays for the documentation</h2>
        <p>
          Frequently the homeowner. Ballwin explicitly places cabling and
          video-documentation costs on the owner and excludes them from
          reimbursement. Florissant has the homeowner pay for the initial
          evaluation, with the city&rsquo;s contractor performing an approved
          repair at no additional cost.
        </p>
        <p>
          Which is worth knowing in advance: the inspection is usually a cost
          you carry regardless of whether the claim succeeds.
        </p>

        <h2>What a report cannot do</h2>
        <p>
          It cannot approve a claim. Municipalities apply their own rules to the
          evidence, and eligibility differs sharply between them — caps, coverage
          boundaries, and exclusions all vary.
        </p>
        <p>
          Anyone who tells you a report guarantees approval is describing a
          decision that is not theirs to make.
        </p>

        <h2>Verify the terms against your own municipality</h2>
        <p>
          Programme details change, and third-party summaries of them are
          demonstrably unreliable — we found a plumbing-company page describing
          the St. Louis City programme as reimbursing up to 50%, when the
          city&rsquo;s own page states full cost for eligible right-of-way
          repairs. Check the municipality&rsquo;s own source.
        </p>
      </>
    ),
    faq: [
      {
        question: 'Does every St. Louis-area municipality have a programme?',
        answer: (
          <p>
            No. Many do, funded by an annual charge on the tax bill, but
            participation and terms vary and the City of St. Charles operates
            outside MSD&rsquo;s territory entirely. Check with your own
            municipality.
          </p>
        ),
      },
      {
        question: 'Is root clearing covered?',
        answer: (
          <p>
            Frequently not. Ballwin defines clearing roots once a year or less
            as normal maintenance and excludes it. St. Louis City excludes
            clearing clogs and roots along any portion of the lateral.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-stl-sewer-lateral-inspection-reporting'),
      id('res-camera-report'),
      id('res-stl-city-program'),
    ],
  },

  /* ============================================================== city -- */
  [id('res-stl-city-program')]: {
    hero: {
      eyebrow: 'Guide',
      title: 'St. Louis City Sewer Lateral Program Guide',
    },
    directAnswer: (
      <p>
        St. Louis City funds a sewer lateral repair programme through a $28
        annual charge on the real estate tax bill. It covers breaks beneath the
        public right-of-way that cause a cave-in or backup. It does not cover
        breaks under private property, and it does not cover clearing clogs or
        tree roots anywhere along the lateral.
      </p>
    ),
    body: (
      <>
        <h2>What the programme covers</h2>
        <p>
          The programme addresses breaks in the sewer lateral beneath the public
          right-of-way where they cause a cave-in or a backup. For an eligible
          repair, the city&rsquo;s own material states the full cost of the
          repair is covered, with no cap stated.
        </p>

        <h2>What it does not cover</h2>
        <ul>
          <li>
            <strong>Breaks under private property.</strong> Coverage stops at
            the right-of-way boundary. A failure in your yard is yours.
          </li>
          <li>
            <strong>Clearing clogs and tree roots</strong> along any portion of
            the lateral — including the portion the programme would otherwise
            cover. Blockage removal is treated as maintenance rather than
            structural failure.
          </li>
        </ul>
        <p>
          Those two exclusions together account for most of the surprise
          homeowners encounter. The programme is narrower than &ldquo;the city
          covers sewer laterals&rdquo; suggests.
        </p>

        <h2>Why the location of the defect decides the claim</h2>
        <p>
          Because coverage turns on where a break sits rather than what caused
          it, establishing position is as consequential as establishing that a
          defect exists.
        </p>
        <p>
          That is why camera inspection and locating are often done together
          here. The footage shows the condition and the distance along the line;
          locating translates that distance into a position on the ground
          relative to the right-of-way boundary.
        </p>

        <h2>What the process requires</h2>
        <ul>
          <li>
            A licensed plumber inspects the line and submits a written statement
            together with video.
          </li>
          <li>
            A city street inspector performs the initial cave-in assessment at
            no charge.
          </li>
        </ul>
        <p>
          The free assessment is worth knowing about — it is a genuine first
          step that costs nothing. It does not replace the plumber&rsquo;s
          documentation.
        </p>

        <h2>How this compares to nearby municipalities</h2>
        <p>
          The $28 annual charge is common across the area — Ballwin, Chesterfield,
          St. Charles, and post-2012 Florissant all levy the same figure. What
          differs is what it buys:
        </p>
        <ul>
          <li>
            <strong>St. Louis City</strong> — full cost, but only beneath the
            public right-of-way
          </li>
          <li>
            <strong>Ballwin</strong> — capped at $4,500, or up to $7,500 for
            deep excavation or street cutting
          </li>
          <li>
            <strong>Florissant</strong> — no stated maximum, covering to within
            five feet of the residence
          </li>
          <li>
            <strong>St. Charles</strong> — 90% of authorised cost capped at
            $7,500, and outside MSD&rsquo;s territory entirely
          </li>
        </ul>
        <p>
          The terms are not transferable. One municipality&rsquo;s rule tells
          you nothing reliable about its neighbour&rsquo;s.
        </p>

        <h2>Who owns the lateral</h2>
        <p>
          The Metropolitan St. Louis Sewer District maintains the public mains
          and collection system, and states that homeowners are responsible for
          maintaining the sewer lateral. MSD does not inspect or repair private
          laterals. The city programme is assistance with a specific category of
          failure, not a transfer of ownership.
        </p>

        <h2>Verify before relying on it</h2>
        <p>
          Programme terms change, and third-party descriptions of this
          programme are demonstrably unreliable — we found a plumbing-company
          page stating it reimburses up to 50%, which contradicts the
          city&rsquo;s own material. Check the City of St. Louis&rsquo;s own
          sewer lateral repair programme page for current terms.
        </p>
      </>
    ),
    faq: [
      {
        question: 'Does the programme cover a break under my yard?',
        answer: (
          <p>
            No. Coverage is limited to breaks beneath the public right-of-way
            that cause a cave-in or backup. Breaks under private property are
            the owner&rsquo;s.
          </p>
        ),
      },
      {
        question: 'Will it pay to have roots cleared?',
        answer: (
          <p>
            No. Clearing clogs and tree roots is excluded along any portion of
            the lateral. The programme addresses structural breaks.
          </p>
        ),
      },
      {
        question: 'Do I need video?',
        answer: (
          <p>
            A licensed plumber must inspect the line and submit a written
            statement together with video. The city street inspector&rsquo;s
            initial cave-in assessment is separate and free.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('res-stl-lateral-report'),
      id('loc-stl-st-louis-city'),
      id('svc-stl-sewer-lateral-inspection-reporting'),
    ],
  },

  /* ============================================================ county -- */
  [id('res-stl-county-program')]: {
    hero: {
      eyebrow: 'Guide',
      title: 'St. Louis County Sewer Lateral Program Guide',
    },
    directAnswer: (
      <p>
        In St. Louis County there is no single answer — which lateral programme
        applies depends on your municipality, and terms differ substantially
        between them. Ballwin caps reimbursement at $4,500; Florissant states no
        maximum but stops five feet from the house. The practical first step is
        identifying which jurisdiction governs your address.
      </p>
    ),
    body: (
      <>
        <h2>Why this question has no single answer</h2>
        <p>
          St. Louis County contains many incorporated municipalities, and sewer
          lateral repair programmes are run at the municipal level rather than
          uniformly across the county. Two houses a few miles apart can sit
          under programmes with different caps, different coverage boundaries,
          and different exclusions.
        </p>
        <p>
          This is the single most common source of confusion we encounter.
          Advice that is accurate for one municipality is frequently wrong for
          the next one over, and it is repeated confidently either way.
        </p>

        <h2>Start by identifying your jurisdiction</h2>
        <p>
          Before looking up terms, establish which applies:
        </p>
        <ul>
          <li>
            If you are in an incorporated municipality, that municipality&rsquo;s
            programme is the one to check.
          </li>
          <li>
            If you are in unincorporated county, county-level arrangements may
            apply instead. We have not been able to confirm the current status
            of a countywide programme from a reachable source, so check{' '}
            <a href="https://stlouiscountymo.gov">St. Louis County</a> directly
            rather than assuming one exists or does not.
          </li>
          <li>
            If you are in the City of St. Louis, that is a separate jurisdiction
            from St. Louis County with its own programme.
          </li>
        </ul>

        <h2>How much the terms actually differ</h2>
        <p>
          Four jurisdictions we have verified, all charging the same $28 annual
          fee, with materially different results:
        </p>

        <h3>Ballwin</h3>
        <p>
          Capped at $4,500, rising to as much as $7,500 where deep excavation or
          street cutting is required. Covers structural failures preventing
          sewer service. Clearing roots once a year or less is defined as normal
          maintenance and is excluded. Cabling and video-documentation costs are
          the owner&rsquo;s.
        </p>

        <h3>Florissant</h3>
        <p>
          No stated maximum, but coverage runs from the main sewer only to
          within five feet of the residence — damage inside that band is the
          owner&rsquo;s. Excludes septic and private treatment systems, and
          restoration of trees, shrubs, sod, decks, retaining walls, and
          outbuildings. Video inspection is required for approval. The fee was
          reduced from $50 to $28 in January 2012.
        </p>

        <h3>St. Charles</h3>
        <p>
          Not in St. Louis County, and not in MSD&rsquo;s territory — the City
          of St. Charles operates its own sewer system. Reimburses 90% of the
          authorised cost capped at $7,500, so a share remains the owner&rsquo;s
          regardless. Excludes landscaping and ornamental structures.
        </p>

        <h3>Chesterfield</h3>
        <p>
          Charges $28 annually, in place since January 2001 following voter
          approval, covering repairs of defective laterals for residential
          buildings of six units or fewer. We have not been able to confirm the
          cap or the specific exclusions from a published source — see{' '}
          <a href="https://www.chesterfield.mo.us/263/Residential-Sanitary-Sewer-Lateral-Repai">
            Chesterfield&rsquo;s own programme page
          </a>{' '}
          for current terms.
        </p>

        <h2>Who owns the lateral regardless of programme</h2>
        <p>
          The Metropolitan St. Louis Sewer District maintains the public mains
          and states that homeowners are responsible for maintaining the sewer
          lateral. MSD does not inspect or repair private laterals. A municipal
          programme is assistance with certain failures, not a transfer of that
          responsibility.
        </p>

        <h2>Treat third-party summaries with suspicion</h2>
        <p>
          Including, reasonably, this one — check your municipality&rsquo;s own
          page before acting on anything here. We found a plumbing-company page
          describing the St. Louis City programme as reimbursing up to 50%,
          directly contradicting the city&rsquo;s own material.
        </p>
        <p>
          Programme terms also change: Florissant&rsquo;s fee halved in 2012.
          Anything written about these programmes has a shelf life.
        </p>
      </>
    ),
    faq: [
      {
        question: 'Is there one St. Louis County programme?',
        answer: (
          <p>
            Programmes are generally run at the municipal level, so terms differ
            between jurisdictions. We have not been able to confirm the current
            status of a countywide programme from a reachable source — check
            with St. Louis County directly.
          </p>
        ),
      },
      {
        question: 'Why do the caps differ so much?',
        answer: (
          <p>
            Each municipality sets its own. Ballwin caps at $4,500; Florissant
            states no maximum but stops five feet from the house; St. Charles
            pays 90% up to $7,500. The same $28 fee buys quite different
            coverage.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('res-stl-city-program'),
      id('res-stl-lateral-report'),
      id('market-st-louis-mo'),
    ],
  },
}
