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
 * ⚠ `/about/` asserts no staff count, volume, licensing, or
 * certification, and no "years of experience" figure. 01 §35 lists all
 * of those among claims requiring documented evidence. The founding
 * year is published and used; a derived experience claim is not.
 */

import type {
  CorePageContent,
  HomePageContent,
  HubPageContent,
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
    title: 'Know what is happening inside the sewer line.',
    intro: (
      <p>
        Inspection, diagnostics, locating, and cleaning — from a company that
        does not sell the repair. See the condition of the line, then decide
        what to do about it.
      </p>
    ),
  },
  services: [
    {
      pageId: id('svc-sewer-camera-inspection'),
      description: 'Put a camera in the line and see its visible condition.',
    },
    {
      pageId: id('svc-sewer-cleaning'),
      description: 'Clear what has accumulated so the line drains as intended.',
    },
    {
      pageId: id('svc-hydro-jetting'),
      description: 'High-pressure cleaning for buildup on the pipe wall.',
    },
    {
      pageId: id('svc-sewer-cleaning-camera-inspection'),
      description: 'Clean the line, then inspect what the buildup was hiding.',
    },
    {
      pageId: id('svc-sewer-line-locating'),
      description: 'Establish where the line runs and how deep it sits.',
    },
    {
      pageId: id('svc-drain-cleaning'),
      description: 'Clear fixture and branch drains.',
    },
    {
      pageId: id('svc-pre-purchase-sewer-inspection'),
      description: 'Inspect the line before committing to a property.',
    },
    {
      pageId: id('svc-recurring-sewer-backup-diagnosis'),
      description: 'Find out why a line keeps backing up.',
    },
    {
      pageId: id('svc-preventative-sewer-maintenance'),
      description: 'Service lines on an interval the evidence supports.',
    },
  ],
  differentiator: {
    title: 'Diagnosis separated from the sale',
    intro:
      'We inspect, document, and clean. We do not perform sewer repair or replacement, so what we find does not become a quote from us.',
  },
  process: [
    { title: 'Inspect', description: 'Put a camera in the line and see what is there.' },
    { title: 'Understand', description: 'Establish what the footage shows — and what it does not.' },
    { title: 'Decide', description: 'Choose the next step with the evidence in front of you.' },
  ],
  faq: [
    {
      question: 'What does a sewer camera inspection show?',
      answer: (
        <p>
          Visible conditions inside the accessible line — blockages, root
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
          work beyond cleaning, that is a conversation about the evidence —
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
  ],
  relatedPageIds: [
    id('res-camera-report'),
    id('res-read-video'),
    id('cmp-hydro-vs-snaking'),
  ],
  cta: {
    title: 'Find out what is actually in the line',
    body: 'An inspection documents the condition, so the next decision is based on evidence rather than assumption.',
  },
}

/* ==========================================================================
   Hubs
   ========================================================================== */

export const hubContent: Partial<Record<PageId, HubPageContent>> = {
  [id('hub-services')]: {
    hero: {
      title: 'Services',
      intro: (
        <p>
          Inspection, diagnostics, locating, and cleaning for sewer and drain
          lines. We do not perform sewer repair or replacement.
        </p>
      ),
    },
    body: (
      <>
        <h2>How these services fit together</h2>
        <p>
          Most sewer problems are answered by some combination of three things:
          seeing the line, clearing it, and knowing where it runs.
        </p>
        <p>
          Inspection establishes condition. Cleaning removes what has
          accumulated. Locating establishes position and depth. Which you need
          depends on whether the question is what is wrong, how to restore
          flow, or where to dig.
        </p>
      </>
    ),
    items: homeContent.services,
  },

  [id('hub-commercial')]: {
    hero: {
      title: 'Commercial Sewer & Drain Services',
      intro: (
        <p>
          Inspection, cleaning, and planned maintenance for commercial
          properties — where a blocked line closes something rather than merely
          inconveniencing someone.
        </p>
      ),
    },
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
          documentation matter — decisions on commercial property usually have
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
    cta: {
      title: 'Talk to us about a commercial property',
      body: 'Start with what the lines actually need, established by inspection.',
    },
  },

  [id('hub-locations')]: {
    hero: {
      title: 'Locations / Service Areas',
      intro: (
        <p>
          The Sewer Pros works across St. Louis, San Diego, and Las Vegas.
          These are service markets — areas we work in, not offices you can
          visit.
        </p>
      ),
    },
    body: (
      <>
        <h2>Service markets, not branches</h2>
        <p>
          A service market is an area we travel to and work in. It does not
          imply a storefront, a local depot, or a counter. We mention this
          because &ldquo;areas served&rdquo; and &ldquo;office locations&rdquo;
          are frequently presented as the same thing, and they are not.
        </p>

        <h2>Why sewer work varies by market</h2>
        <p>
          Sewer lines reflect where and when they were built. Housing age,
          common pipe materials, soil movement, root pressure from mature
          planting, and the rules of the local sewer authority all differ
          between markets — and all affect what tends to go wrong and what can
          be done about it.
        </p>
        <p>
          That is why market pages are worth writing properly rather than
          swapping a city name into the same paragraph, and why the ones here
          are being researched before they are published.
        </p>
      </>
    ),
  },

  [id('hub-audiences')]: {
    hero: {
      title: 'Who We Serve',
      intro: (
        <p>
          Property owners, buyers, real estate professionals, property
          managers, and commercial operators — each arriving with a different
          question about the same underground pipe.
        </p>
      ),
    },
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
          locating, and cleaning — deliberately not on repair.
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
          contractor — not with us.
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
          a structural position, not a comment on anyone&rsquo;s integrity — but
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
          The Sewer Pros has operated since 2011. We are locally owned and
          family operated, working across St. Louis County, St. Charles County,
          Jefferson County, and surrounding areas.
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
          <li>Monday to Friday, 7:30am to 4:00pm. Closed weekends.</li>
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
          <li>Monday to Friday, 8:00am to 4:00pm. Closed weekends.</li>
        </ul>
        <p>Serving San Diego County, California.</p>

        <h2>What to have ready</h2>
        <p>
          Whichever way you get in touch, these details make the first
          conversation more useful:
        </p>
        <ul>
          <li>What is happening — a backup, slow drainage, or a planned inspection</li>
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
            addressing — roots entering at a defect, a section holding water, or
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
          evidence usable later — when comparing quotes, revisiting a decision,
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
          actionable — it can be located, quoted against, and re-checked.
        </p>

        <h3>What could not be assessed</h3>
        <p>
          Sections obscured by standing water or buildup, points where the
          camera could not pass, and any part of the line not reached. This is
          the section most often missing and among the most important — it
          tells you the limits of what the inspection established.
        </p>

        <h3>The footage</h3>
        <p>
          You should be able to keep a copy. It is evidence about your property.
        </p>

        <h2>What a report should not do</h2>
        <p>
          It should not assert conditions the camera cannot establish — pipe
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
        distance counter when you see them — position is what makes an
        observation useful.
      </p>
    ),
    body: (
      <>
        <h2>What you are looking at</h2>
        <p>
          The camera travels along the inside of the pipe, lit from the head.
          The picture is close, wide-angle, and often wet — which is why
          footage can look alarming when it is normal, and normal when it is
          not.
        </p>

        <h2>Standing water</h2>
        <p>
          A line should carry water away. Water sitting in a section suggests
          that part of the line is not draining — a low spot, a loss of slope,
          or a restriction downstream. Watch whether the camera passes through
          water and out the other side, or whether it stays submerged.
        </p>

        <h2>Joints</h2>
        <p>
          Joints appear as regular seams. What matters is whether they line up.
          A visible gap, a step where one section sits higher than the next, or
          daylight-like darkness at a seam suggests separation or offset — and
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
          deforms. A change of material is not itself a problem — it is
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
          fine — and treating them as fine is the most common misreading.
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
            condition warrants — the camera is close, the environment is wet,
            and normal wear reads dramatically. What matters is specific
            observations at specific distances, not the general impression.
          </p>
        ),
      },
    ],
    relatedPageIds: [id('res-camera-report'), id('svc-sewer-camera-inspection')],
  },
}
