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
 * ⚠ HOUSING-AGE STATISTICS ARE DELIBERATELY NOT CITED
 * ---------------------------------------------------------------------------
 * The research supplied median-year and pre-1940-share figures, but
 * flagged them as secondary republication of ACS data requiring
 * re-verification against data.census.gov before publication.
 *
 * So no percentage or median year appears in any copy below. Housing era
 * is described qualitatively where it is uncontroversial, and pipe
 * material is framed strictly as era correspondence — the research is
 * explicit that no source ties a material to a specific city, and
 * CLAUDE.md §73 forbids fabricated localisation.
 *
 * ---------------------------------------------------------------------------
 * ⚠ CHESTERFIELD IS ABSENT
 * ---------------------------------------------------------------------------
 * Chesterfield's three approved pages are not written. Its programme
 * cap and exclusions are unpublished on every reachable city page, and
 * writing "the programme covers X" without that source would be exactly
 * the municipal fabrication CLAUDE.md §28 prohibits. Its fee and start
 * date are known; that alone is not enough to differentiate three pages.
 *
 * ---------------------------------------------------------------------------
 * ⚠ NO CLAIM OF PROGRAMME OUTCOMES
 * ---------------------------------------------------------------------------
 * The business is "licensed through most of the municipal sewer lateral
 * programs for submitting reports" — a verified business fact. It
 * documents conditions; the municipality decides claims. No page below
 * promises approval, reimbursement, or eligibility.
 */

import type {
  LocationPageContent,
  MarketPageContent,
  PageId,
  ServiceLocationPageContent,
  ServicePageContent,
} from '@/types'

const id = (value: string): PageId => value as PageId

/** Shared, verified: MSD owns the main, the homeowner owns the lateral. */
const MSD_RESPONSIBILITY = (
  <>
    <h2>Who is responsible for the lateral</h2>
    <p>
      The Metropolitan St. Louis Sewer District maintains the public mains and
      the collection system. It states plainly that homeowners are responsible
      for maintaining the sewer lateral — the line running from the building to
      the public sewer.
    </p>
    <p>
      MSD does not inspect or repair private laterals. That responsibility sits
      with the property owner, which is why understanding the condition of your
      own line is not something the utility will do for you.
    </p>
  </>
)

/* ==========================================================================
   Market hub — /st-louis-mo/
   ========================================================================== */

export const stLouisMarketContent: MarketPageContent = {
  hero: {
    eyebrow: 'St. Louis, Missouri',
    title: 'Sewer inspection and cleaning across the St. Louis area',
    intro: (
      <p>
        Independent camera inspection, diagnostics, locating, and cleaning for
        properties in St. Louis County, St. Charles County, Jefferson County,
        and surrounding areas.
      </p>
    ),
  },
  body: (
    <>
      {MSD_RESPONSIBILITY}

      <h2>Why lateral programmes make documentation matter here</h2>
      <p>
        Many municipalities in the St. Louis area operate sewer lateral repair
        programmes, funded by a small annual charge on the real estate tax bill.
        Where a programme applies, it can meaningfully change what a lateral
        failure costs a homeowner.
      </p>
      <p>
        These programmes generally require documentation from a licensed
        plumber before a claim is considered — commonly including video of the
        line. That makes a camera inspection more than a diagnostic here: it is
        frequently the document the programme asks for.
      </p>
      <p>
        The terms are not uniform. Fees, caps, coverage boundaries, and
        exclusions differ between municipalities, and the City of St. Charles
        is not in MSD&rsquo;s service territory at all — it runs its own sewer
        system. Whether a programme applies to your address, and what it
        covers, is a question about your specific municipality.
      </p>

      <h2>Older lines, older materials</h2>
      <p>
        The St. Louis area contains a wide span of construction eras, from
        pre-war city neighbourhoods to subdivisions built through the 1960s and
        1970s and newer development beyond that.
      </p>
      <p>
        Era matters because lateral materials changed over time. Lines laid
        through much of the twentieth century commonly used vitrified clay or
        cast iron, and bituminized fibre pipe — Orangeburg — was installed in
        the post-war decades until its manufacturer closed in 1974. Each has a
        characteristic failure pattern: clay separates at joints and admits
        roots, cast iron corrodes and scales internally, and Orangeburg
        deforms under load. Any remaining Orangeburg is now well past its
        intended service life.
      </p>
      <p>
        This is era correspondence, not a claim about any particular street or
        address. What a specific line is made of, and what condition it is in,
        is what a camera inspection establishes.
      </p>
    </>
  ),
  services: [
    {
      pageId: id('svc-stl-sewer-lateral-inspection-reporting'),
      description: 'Video documentation prepared for municipal lateral programme submission.',
    },
    {
      pageId: id('svc-sewer-camera-inspection'),
      description: 'See the visible condition of the line.',
    },
    {
      pageId: id('svc-pre-purchase-sewer-inspection'),
      description: 'Inspect the line before closing on a property.',
    },
    {
      pageId: id('svc-sewer-cleaning'),
      description: 'Clear what has accumulated in the line.',
    },
  ],
  locationPageIds: [
    id('loc-stl-st-louis-city'),
    id('loc-stl-ballwin'),
    id('loc-stl-florissant'),
    id('loc-stl-st-charles'),
  ],
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
          bill — but terms vary considerably and not every jurisdiction
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
  ],
  cta: {
    title: 'Find out what condition the lateral is in',
    body: 'Documented evidence of the line, from a company that does not perform the repair.',
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
        plumber establishing the defect — commonly including video of the line
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
        Eligibility rules differ sharply between municipalities — some cover
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
          Camera inspection, diagnostics, and cleaning for city properties —
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
          That is why inspection and locating are often done together here —
          the footage shows the condition and the distance, and locating
          translates that distance into a position on the ground.
        </p>

        <h2>Older construction</h2>
        <p>
          The city&rsquo;s neighbourhoods are substantially pre-war, and many
          laterals date from eras when vitrified clay and cast iron were
          standard. Clay separates at joints and admits roots; cast iron
          corrodes and scales internally, narrowing the line over decades.
        </p>
        <p>
          Both are era characteristics rather than a claim about any specific
          address — what a given line is made of, and how it is holding up, is
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
          roots, determines which side of that rule it falls on — and it is a
          question a camera inspection answers rather than one anybody should
          guess at.
        </p>

        <h2>Construction era</h2>
        <p>
          Ballwin&rsquo;s housing stock is largely subdivision development from
          the 1960s through the 1980s, which straddles a genuine transition in
          lateral materials — from clay and cast iron, through the period when
          bituminized fibre pipe was still being installed, into the era when
          PVC became standard. Which applies to a particular property is a
          question for the camera.
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
          the real estate tax bill — reduced from $50 in January 2012, when the
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
          Florissant grew overwhelmingly during the post-war boom, with the
          great majority of its housing built across the 1950s and 1960s. That
          is an unusually concentrated era for a city of its size.
        </p>
        <p>
          It also sits squarely in the window when bituminized fibre pipe —
          Orangeburg — was still being installed, alongside clay and cast iron.
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
          properties — a comparatively young city where a newer lateral is not
          the same thing as a problem-free one.
        </p>
      ),
    },
    body: (
      <>
        <h2>A young city by St. Louis standards</h2>
        <p>
          Chesterfield incorporated in 1988, and the great majority of its
          housing was built from the 1970s onward. Among the municipalities we
          work across in the St. Louis area, it has the newest housing stock by
          a wide margin.
        </p>
        <p>
          That changes what tends to be found underground. Development from the
          1970s onward increasingly used PVC rather than clay, cast iron, or
          bituminized fibre pipe, which removes the material failure modes that
          dominate older areas — clay joints separating, cast iron scaling,
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
            Bellies — sections that have lost slope and hold water, so solids
            settle where flow has slowed
          </li>
          <li>
            Joint separation caused by soil movement or settlement rather than
            material decay
          </li>
          <li>
            Damage from later work — landscaping, an addition, utility trenching
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
          Programme terms — including any reimbursement cap and the specific
          exclusions — differ between municipalities and change over time.
          Confirm the current terms with Chesterfield Public Works before
          relying on them.
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
            but not the ones caused by ground movement or later disturbance —
            bellies, joint separation, and damage from subsequent work. Those
            produce the same recurring symptoms.
          </p>
        ),
      },
      {
        question: 'What does Chesterfield&rsquo;s lateral programme cover?',
        answer: (
          <p>
            It covers repairs of defective sewer laterals for residential
            buildings of six units or fewer, funded by a $28 annual charge in
            place since 2001. We would rather point you to Chesterfield Public
            Works for the current cap and exclusions than restate figures we
            have not confirmed against the city&rsquo;s own source.
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
          properties — a city that operates entirely outside MSD&rsquo;s
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
          That system comprises two treatment facilities — one on the
          Mississippi River rated at 9.63 million gallons per day, one on the
          Missouri River rated at 7.54 — together with 22 lift stations.
          Day-to-day operations are contracted out, while the city&rsquo;s own
          Utilities Division retains regulatory oversight.
        </p>
        <p>
          For a property owner, the practical consequence is that the authority,
          the rules, and the programme are the city&rsquo;s — not MSD&rsquo;s.
          Guidance written for St. Louis County does not necessarily apply here.
        </p>

        <h2>A different reimbursement structure</h2>
        <p>
          The annual charge is $28 on residential property — the same figure
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
          the issue — a different evidentiary route from programmes that require
          video as a matter of course.
        </p>

        <h2>What that means for a homeowner</h2>
        <p>
          A 90% structure means a share of the cost remains yours regardless of
          approval, which makes the size of the repair — and therefore the
          precise nature and position of the defect — worth establishing
          properly before work is authorised.
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
            90% of the authorised cost, capped at $7,500 — a different
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
          Video inspection of the lateral — often the document the City&rsquo;s
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
          problem is identified — it is frequently the evidence the programme
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
          Video inspection of the lateral — including on newer lines, where the
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
          The camera shows it directly — water sitting in a section that should
          drain — and the distance counter establishes where along the run it
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
          Confirm current programme terms with Chesterfield Public Works — caps
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
          High-pressure cleaning for lines carrying accumulation — and an
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
          suits grease, scale, sediment, and sludge — accumulation that has
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
          Inspect the lateral before closing — and understand what
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
          of the 1960s through the 1980s — a period spanning the transition from
          clay and cast iron, through the years bituminized fibre pipe was still
          being laid, into the PVC era. That range is wide enough that the age of
          a house is a poor proxy for the condition of its lateral.
        </p>

        <h2>Timing</h2>
        <p>
          The inspection is most useful while decisions remain available to you.
          What you do with the findings is yours to decide with your own
          advisers — we document the line, not the transaction.
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
          The City of St. Charles is not within MSD&rsquo;s service territory —
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
          cabling was attempted and did not resolve the issue — meaning a
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
          Clearing accumulated material from Florissant lines — and
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
          bituminized fibre pipe. Each fails differently — joints separating and
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
          clean it enough to see it, then inspect — because the footage is both
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
