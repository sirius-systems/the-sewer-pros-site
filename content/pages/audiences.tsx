/**
 * Audience page content — the 6 launch audiences.
 *
 * Authority: docs/09-audience-commercial-matrix.md §16, §18-22, §63, §77-83
 *            docs/14-content-specification.md §46-49, §81
 *            docs/18-design-system.md §113, §140
 *            CLAUDE.md §21, §31, §63, §75
 *
 * ===========================================================================
 * EACH PAGE IS BUILT ON A DIFFERENT DECISION
 * ===========================================================================
 * CLAUDE.md §21's audience test: could "home buyers" be replaced with
 * "property managers" without rewriting most of the page?
 *
 * The differentiation is not tone. It is that each audience is making a
 * genuinely different decision about the same pipe, sourced from
 * 09 §16 and §18-22's per-audience needs:
 *
 *   Home buyer      — whether to buy, with the decision still open
 *   Home seller     — how to pre-empt or respond to someone else's finding
 *   Agent           — coordinating a decision that is not theirs to make
 *   Home inspector  — referring work outside their own scope, and
 *                     protecting the boundary of their own report
 *   Property manager— recurring operational cost across a portfolio
 *   HOA             — a board decision about shared responsibility
 *
 * Service relationships differ accordingly: buyers get pre-purchase
 * inspection, property managers get the commercial menu and recurring
 * maintenance, inspectors get camera work and nothing operational.
 *
 * ---------------------------------------------------------------------------
 * ⚠ NO LEGAL OR TRANSACTIONAL ADVICE
 * ---------------------------------------------------------------------------
 * 09, 31, CLAUDE.md §31 and §75 forbid legal advice on real-estate
 * content. No page below advises on disclosure obligations, contract
 * terms, negotiation, or who is liable for what. Those are questions
 * for the reader's own advisers, and the pages say so.
 */

import type { AudiencePageContent, PageId } from '@/types'

const id = (value: string): PageId => value as PageId

export const audienceContent: Partial<Record<PageId, AudiencePageContent>> = {
  /* ========================================================= buyers -- */
  [id('aud-home-buyers')]: {
    hero: {
      eyebrow: 'For home buyers',
      title: 'Know the condition of the sewer line before you buy',
      intro: (
        <p>
          The sewer lateral is underground, not visible without a camera, and
          usually not part of a general property inspection. It is one of the
          few systems where a serious problem can exist with no symptom on the
          day you view the house.
        </p>
      ),
    },
    body: (
      <>
        <h2>Why this one system gets its own inspection</h2>
        <p>
          A general inspection covers a great deal of the property, but it does
          not typically include putting a camera down the sewer line. The line
          runs underground from the building to the main, and its condition
          cannot be assessed from the fixtures.
        </p>
        <p>
          That matters because a sewer failure is among the more expensive
          things a property can present after closing, and in most jurisdictions
          the lateral belongs entirely to the owner.
        </p>

        <h2>What the inspection tells you</h2>
        <ul>
          <li>The visible condition of the accessible line</li>
          <li>Whether roots have entered, and at what point</li>
          <li>Joint separation, offsets, and visible cracks</li>
          <li>Standing water suggesting a low section or restriction</li>
          <li>Pipe material, and changes along the run</li>
          <li>Evidence of previous work</li>
        </ul>

        <h2>What it does not tell you</h2>
        <p>
          It documents visible conditions on the day. It does not guarantee
          future performance, and it does not establish who is legally
          responsible for which portion of the line: that varies by
          jurisdiction and is a question for your own advisers.
        </p>
        <p>
          We are also not the people to advise you on what a finding should mean
          for your offer. We document the line; the decision and the negotiation
          are yours.
        </p>

        <h2>Where a lateral programme changes the arithmetic</h2>
        <p>
          Some municipalities run programmes that contribute toward lateral
          repair, and terms vary sharply: Carlsbad offers up to $3,000, Ballwin
          caps at $4,500, Florissant states no maximum but stops five feet from
          the house, and the City of San Diego offers nothing at all.
        </p>
        <p>
          Whether one applies to the address you are buying is worth
          establishing alongside the condition of the line. A defect in a city
          with a programme and the same defect in a city without one are
          different financial situations.
        </p>

        <h2>Why we do not perform the repair</h2>
        <p>
          A pre-purchase inspection informs a significant financial decision. We
          inspect, document, and clean; we do not perform sewer repair or
          replacement, so what we find is not the opening step toward selling
          you the remedy.
        </p>
      </>
    ),
    services: [
      { pageId: id('svc-pre-purchase-sewer-inspection'), description: 'The inspection built around a purchase decision.' },
      { pageId: id('svc-sewer-camera-inspection'), description: 'What the camera can and cannot establish.' },
      { pageId: id('svc-sewer-cleaning-camera-inspection'), description: 'Where buildup prevents a clear assessment.' },
    ],
    process: [
      { title: 'Arrange access', description: 'Usually through an existing cleanout.' },
      { title: 'Inspect and record the line' },
      { title: 'Document conditions and distances' },
      { title: 'Walk through the findings with you' },
    ],
    faq: [
      {
        question: 'Is a sewer inspection part of a standard home inspection?',
        answer: (
          <p>
            Typically not. A general inspection does not usually include putting
            a camera down the sewer line, which is why it is commonly arranged
            separately.
          </p>
        ),
      },
      {
        question: 'What if it finds a problem?',
        answer: (
          <p>
            You have documented evidence of the line&rsquo;s condition while the
            decision is still open. What you do with it, including getting
            repair quotes or discussing it with your agent and advisers, is
            yours to decide.
          </p>
        ),
      },
      {
        question: 'Can you tell me if I should still buy the house?',
        answer: (
          <p>
            No. We can tell you what the line looks like and what could not be
            assessed. Whether that changes your decision is a judgement for you
            and your own advisers.
          </p>
        ),
      },
    ],
    relatedPageIds: [id('cmp-independent-vs-repair'), id('res-read-video')],
    cta: {
      title: 'Inspect the line before you commit',
      body: 'Documented condition while the decision is still yours to make.',
    },
  },

  /* ======================================================== sellers -- */
  [id('aud-home-sellers')]: {
    hero: {
      eyebrow: 'For home sellers',
      title: 'Find out what a buyer’s inspection will find',
      intro: (
        <p>
          A sewer finding raised late in a transaction is a problem you are
          reacting to on someone else&rsquo;s timeline, with someone
          else&rsquo;s evidence. Knowing beforehand changes that.
        </p>
      ),
    },
    body: (
      <>
        <h2>The position a late finding puts you in</h2>
        <p>
          If a buyer&rsquo;s inspection turns up a sewer defect, you are
          responding to a report you did not commission, under time pressure,
          often with a repair quote attached to it. That is a weak position
          regardless of what the line is actually like.
        </p>
        <p>
          Inspecting before listing gives you the same information first, on
          your own schedule, with time to decide what to do about it.
        </p>

        <h2>What knowing early lets you do</h2>
        <ul>
          <li>
            Address something that turns out to be cleanable, rather than having
            it presented as a structural failure
          </li>
          <li>
            Obtain your own quotes without a deadline, if work is warranted
          </li>
          <li>
            Have documentation ready rather than scrambling for it mid-transaction
          </li>
          <li>
            Know the line is sound, and be able to demonstrate it
          </li>
        </ul>

        <h2>Responding to a buyer&rsquo;s finding</h2>
        <p>
          If an inspection has already been done and the findings are being used
          to reopen terms, an independent second opinion is a reasonable step.
          Sewer footage frequently supports more than one reading: a joint may
          be a maintenance item or the start of a failure, and the interpretation
          matters.
        </p>
        <p>
          We do not perform repairs, so our reading of the footage is not shaped
          by what we would be quoting to fix. That is the whole reason a second
          opinion from us is worth anything.
        </p>

        <h2>What we will not advise you on</h2>
        <p>
          Disclosure obligations, how to respond to a request for repairs, and
          what any of this means for your contract are questions for your agent
          and your own advisers. We document the condition of the line and
          nothing beyond it.
        </p>
      </>
    ),
    services: [
      { pageId: id('svc-sewer-camera-inspection'), description: 'Establish the condition before listing.' },
      { pageId: id('svc-sewer-cleaning-camera-inspection'), description: 'Clean the line, then see what was underneath.' },
      { pageId: id('svc-sewer-cleaning'), description: 'Where the finding is accumulation rather than damage.' },
    ],
    faq: [
      {
        question: 'A buyer’s inspector says the line needs replacing. What now?',
        answer: (
          <p>
            An independent second opinion on the same line is a reasonable step.
            Footage often supports more than one reading, and a company that
            does not perform the repair has no stake in which reading prevails.
          </p>
        ),
      },
      {
        question: 'Should I fix it before listing?',
        answer: (
          <p>
            That is a decision for you and your agent. What we can do is
            establish whether the problem is accumulation or structural, which
            is usually the fact the decision turns on.
          </p>
        ),
      },
    ],
    relatedPageIds: [id('cmp-independent-vs-repair'), id('res-camera-report')],
  },

  /* ========================================================= agents -- */
  [id('aud-real-estate-agents')]: {
    hero: {
      eyebrow: 'For real estate agents',
      title: 'A sewer inspection that does not become a sales process',
      intro: (
        <p>
          You need a clear answer you can pass to a client, documentation that
          holds up, and no surprises late in a transaction. What you do not need
          is an inspection that arrives attached to a repair quote.
        </p>
      ),
    },
    body: (
      <>
        <h2>Why the independence matters to you specifically</h2>
        <p>
          When an inspection and the remedy come from the same company, your
          client is receiving an assessment from someone who benefits from one
          interpretation of it. Whatever the reality in a given case, it puts
          you in the position of relaying a finding you cannot fully vouch for.
        </p>
        <p>
          We inspect, document, and clean. We do not perform sewer repair or
          replacement, so there is no quote following the findings and nothing
          for you to have to caveat.
        </p>

        <h2>What you get to pass on</h2>
        <ul>
          <li>What was observed, and at what distance along the line</li>
          <li>Which sections could not be assessed, and why</li>
          <li>Whether the condition is accumulation or structural</li>
          <li>Footage your client can keep and show to anyone</li>
        </ul>
        <p>
          That last point matters in practice: documented evidence lets multiple
          contractors quote against the same facts, which makes the quotes
          comparable and the conversation shorter.
        </p>

        <h2>Timing within a transaction</h2>
        <p>
          The inspection is most useful while options remain open. Where a
          municipal lateral programme exists, its terms are also worth
          establishing early: they vary considerably between jurisdictions and
          can materially change what a finding costs whoever ends up owning it.
        </p>

        <h2>Where we stop</h2>
        <p>
          We document the line. We do not advise on disclosure, negotiation, or
          contract terms, and we will not tell your client what a finding should
          mean for their offer. Those are your conversations and their
          advisers&rsquo;.
        </p>
      </>
    ),
    services: [
      { pageId: id('svc-pre-purchase-sewer-inspection'), description: 'The transaction-timed inspection.' },
      { pageId: id('svc-sewer-camera-inspection'), description: 'Documented condition with distances.' },
    ],
    faq: [
      {
        question: 'Do you provide documentation my client can keep?',
        answer: (
          <p>
            Yes. Footage and findings are evidence about the property, and
            having them lets any contractor quote against the same facts.
          </p>
        ),
      },
      {
        question: 'Will you recommend a repair company?',
        answer: (
          <p>
            We document the condition and explain what the footage supports.
            Choosing who performs any work is your client&rsquo;s decision, made
            with whatever evidence they now hold.
          </p>
        ),
      },
    ],
    relatedPageIds: [id('cmp-independent-vs-repair'), id('res-camera-report')],
  },

  /* ===================================================== inspectors -- */
  [id('aud-home-inspectors')]: {
    hero: {
      eyebrow: 'For home inspectors',
      title: 'The part of the property your scope does not cover',
      intro: (
        <p>
          The sewer lateral sits outside a general inspection&rsquo;s scope, and
          referring it out is cleaner than being asked to opine on something you
          cannot see.
        </p>
      ),
    },
    body: (
      <>
        <h2>A boundary worth keeping clear</h2>
        <p>
          General inspection scope does not extend to a camera survey of the
          underground sewer lateral. That is a specialised assessment requiring
          different equipment, and it produces a different kind of evidence.
        </p>
        <p>
          Referring it out keeps the boundary of your own report intact. You
          reported on what your scope covers; the lateral was assessed by
          someone whose scope covers that.
        </p>

        <h2>What a camera survey adds to the file</h2>
        <ul>
          <li>Visible condition of the accessible line, recorded</li>
          <li>Distance along the line to each observation</li>
          <li>An explicit statement of what could not be assessed</li>
          <li>Footage the client keeps</li>
        </ul>
        <p>
          The third item is the one most often missing from sewer reports, and
          it is the one that most resembles how a careful inspection report is
          written: the limits of the assessment stated alongside its findings.
        </p>

        <h2>Why an independent referral is a safer one</h2>
        <p>
          If you refer a client to a company that both inspects and sells the
          repair, any subsequent recommendation reflects on your referral. We
          do not perform sewer repair or replacement, so a finding from us does
          not arrive with a quote attached.
        </p>

        <h2>Coordination</h2>
        <p>
          Where a line cannot be assessed because of buildup or standing water,
          we say so rather than producing a confident conclusion the footage
          does not support. That should read as familiar practice: it is the
          same discipline a well-written inspection report applies.
        </p>
      </>
    ),
    services: [
      { pageId: id('svc-sewer-camera-inspection'), description: 'The specialised survey outside general scope.' },
      { pageId: id('svc-pre-purchase-sewer-inspection'), description: 'Timed to a transaction.' },
      { pageId: id('svc-sewer-cleaning-camera-inspection'), description: 'Where the line must be cleared to be assessed.' },
    ],
    faq: [
      {
        question: 'Why is the sewer lateral outside general inspection scope?',
        answer: (
          <p>
            It is underground and cannot be assessed without a camera survey:
            different equipment and a different specialisation from a general
            property inspection.
          </p>
        ),
      },
      {
        question: 'Do you report what could not be assessed?',
        answer: (
          <p>
            Yes, explicitly. An obscured section is unknown rather than fine,
            and stating that is what makes the rest of the report credible.
          </p>
        ),
      },
    ],
    relatedPageIds: [id('res-camera-report'), id('res-read-video')],
  },

  /* =============================================== property managers -- */
  [id('aud-property-managers')]: {
    hero: {
      eyebrow: 'For property managers',
      title: 'Stop absorbing the same sewer call every few months',
      intro: (
        <p>
          A line that backs up on a cycle is a recurring cost, a recurring
          tenant complaint, and a recurring interruption. Clearing it again
          resets the clock without changing anything.
        </p>
      ),
    },
    body: (
      <>
        <h2>Recurrence is the signal</h2>
        <p>
          One blockage is usually ordinary. A blockage that returns on a pattern
          means something in the line is catching material (roots at a defect,
          a section holding water, a break creating a catch point), and each
          clearing addresses the symptom.
        </p>
        <p>
          Across a portfolio, that pattern is expensive in a way a single
          property does not reveal. The same call at three properties a year is
          a maintenance budget being spent on a diagnosis nobody has made.
        </p>

        <h2>What changes when the cause is established</h2>
        <ul>
          <li>
            Lines that genuinely need servicing get an interval based on how
            fast they actually accumulate
          </li>
          <li>
            Lines with a structural cause stop being cleaned repeatedly and get
            addressed
          </li>
          <li>
            Lines that need neither come off the list
          </li>
        </ul>
        <p>
          That last one matters. Putting every line on a schedule is a
          predictable cost, not a solution, and we will tell you when a line
          does not warrant one.
        </p>

        <h2>Tenant disruption is the real cost</h2>
        <p>
          A backup in an occupied unit is not only a plumbing invoice. It is
          notice, access arrangements, a displaced tenant, and a complaint you
          answer. Planned work happens at a time you choose; a failure does not.
        </p>

        <h2>Documentation across a portfolio</h2>
        <p>
          Recurring inspection produces a record of condition over time, useful
          when justifying spend to an owner, planning capital work, or
          demonstrating that a known issue was being managed rather than
          ignored.
        </p>

        <h2>Scheduling around occupancy</h2>
        <p>
          Access on occupied property means notice, tenant availability, and
          working around trading hours on mixed-use sites. That is a planning
          constraint rather than an afterthought.
        </p>
      </>
    ),
    services: [
      { pageId: id('svc-recurring-sewer-backup-diagnosis'), description: 'Establish why a line keeps blocking.' },
      { pageId: id('svc-preventative-sewer-maintenance'), description: 'Service on an evidence-based interval.' },
      { pageId: id('com-camera'), description: 'Documented condition across a portfolio.' },
      { pageId: id('com-hydro-jetting'), description: 'High-pressure cleaning for grease and buildup.' },
      { pageId: id('com-maintenance'), description: 'Planned commercial servicing.' },
    ],
    process: [
      { title: 'Review the history', description: 'Which properties, how often, what was done.' },
      { title: 'Inspect the problem lines' },
      { title: 'Separate structural causes from accumulation' },
      { title: 'Set intervals where the evidence supports them' },
    ],
    faq: [
      {
        question: 'Can you service multiple properties on one schedule?',
        answer: (
          <p>
            Scheduling across properties is part of the conversation. What we
            will not do is put every line on an interval: that is a predictable
            cost rather than a solution, and only some lines warrant it.
          </p>
        ),
      },
      {
        question: 'This line has been cleared four times. What is different?',
        answer: (
          <p>
            The objective. Clearing addresses the blockage; diagnosis addresses
            why it forms. That needs inspection and usually locating, and
            produces a different kind of answer.
          </p>
        ),
      },
    ],
    relatedPageIds: [id('hub-commercial'), id('com-maintenance')],
    cta: {
      title: 'Talk to us about a portfolio',
      body: 'Start with the lines that keep coming back, and find out why.',
    },
  },

  /* ============================================================ HOA -- */
  [id('aud-hoa-communities')]: {
    hero: {
      eyebrow: 'For HOA communities',
      title: 'Evidence a board can actually make a decision on',
      intro: (
        <p>
          Common-area sewer problems become board decisions: about shared cost,
          competing vendor recommendations, and what to tell owners. Documented
          condition is what makes that decision defensible.
        </p>
      ),
    },
    body: (
      <>
        <h2>The decision is collective, which changes what it needs</h2>
        <p>
          A homeowner deciding about their own lateral can act on a
          contractor&rsquo;s word. A board cannot. It is spending shared money,
          answering to owners, and often choosing between vendors whose
          recommendations differ.
        </p>
        <p>
          That raises the value of evidence that does not come from a party
          quoting for the work. Footage and findings from a company that does
          not perform repairs are something a board can put in front of owners
          and in front of competing bidders.
        </p>

        <h2>Common areas and shared lines</h2>
        <p>
          Communities frequently have shared laterals, common-area drainage, and
          lines whose responsibility boundary between association and owner is
          not obvious. Establishing the condition and the position of a defect
          is a precondition for even discussing who bears what.
        </p>
        <p>
          We document where a defect sits along the line. Who is responsible for
          that point is a question for the association&rsquo;s governing
          documents and its own advisers, not for us.
        </p>

        <h2>Planning rather than reacting</h2>
        <p>
          Recurring backups in a community produce repeated emergency spend and
          repeated owner complaints. Establishing which lines are actually
          deteriorating allows work to be planned into a budget cycle rather
          than arriving as an unbudgeted assessment.
        </p>

        <h2>Comparing vendor recommendations</h2>
        <p>
          Where a board has conflicting quotes, the underlying disagreement is
          usually about interpretation rather than facts. An independent survey
          gives every bidder the same evidence to price against, which tends to
          make the quotes comparable and the disagreement smaller.
        </p>

        <h2>Documentation for owners</h2>
        <p>
          A record of condition over time supports the board&rsquo;s account of
          what was known and when, useful when explaining a decision to owners
          who were not in the room for it.
        </p>
      </>
    ),
    services: [
      { pageId: id('svc-sewer-camera-inspection'), description: 'Documented condition of common-area lines.' },
      { pageId: id('svc-preventative-sewer-maintenance'), description: 'Planned servicing where evidence supports it.' },
      { pageId: id('com-camera'), description: 'Survey across a community.' },
      { pageId: id('com-hydro-jetting'), description: 'High-pressure cleaning for shared lines.' },
      { pageId: id('com-maintenance'), description: 'Commercial preventative servicing.' },
    ],
    faq: [
      {
        question: 'Two vendors gave us different recommendations. Who is right?',
        answer: (
          <p>
            Often both are reading the same ambiguous evidence differently. An
            independent survey gives every bidder the same documented facts to
            price against, which usually narrows the disagreement considerably.
          </p>
        ),
      },
      {
        question: 'Can you tell us whether the association or the owner is responsible?',
        answer: (
          <p>
            No. We document what the condition is and where along the line it
            sits. Who is responsible for that point is a question for your
            governing documents and your own advisers.
          </p>
        ),
      },
    ],
    relatedPageIds: [id('hub-commercial'), id('com-maintenance')],
    cta: {
      title: 'Get the common-area lines documented',
      body: 'Evidence a board can put in front of owners and competing bidders.',
    },
  },
}
