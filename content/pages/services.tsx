/**
 * Canonical service page content.
 *
 * Authority: docs/14-content-specification.md §16-17, §29-35, §80
 *            docs/06-master-service-registry.md
 *            docs/01-business-brand-foundation.md §5-6
 *
 * ---------------------------------------------------------------------------
 * WHAT THIS CONTENT DOES NOT CLAIM
 * ---------------------------------------------------------------------------
 * No pricing, timeframes, guarantees, equipment specifications,
 * certifications, or availability windows appear anywhere below. 01 §35
 * lists those among facts requiring documented evidence, and none is
 * documented.
 *
 * Repair language stays educational throughout. 01 §6 and 14 §6 permit
 * discussing when repair may be necessary, cleaning versus repair, and
 * second opinions — but never imply The Sewer Pros performs
 * excavation, lining, bursting, or replacement.
 *
 * Each page also states the LIMITS of its service. 14 §29 requires
 * camera limitations explicitly, and 14 §32 warns against presenting
 * hydro jetting as automatically superior. Stating limits is the
 * evidence-first positioning working (01 §14, 18 §137), not hedging.
 */

import type { PageId, ServicePageContent } from '@/types'

const id = (value: string): PageId => value as PageId

export const serviceContent: Partial<Record<PageId, ServicePageContent>> = {
  /* ======================================================================
     Sewer Camera Inspection — 14 §29
     ====================================================================== */
  [id('svc-sewer-camera-inspection')]: {
    /*
      Expanded hero copy, owner-supplied and transcribed as given
      (2026-09-04). Answer-first: the opening sentence names the actual
      trigger conditions rather than defining the service, which is what
      12 and 14 §35 ask for.

      ⚠ THE H1 IS UNCHANGED. The brief's snippet carried
      `title: 'Schedule a sewer camera inspection.'`, which is the HOME
      page's closing-CTA heading, not this page's H1. Renaming the H1 of
      the flagship service page is a routing and SEO decision, and the
      brief itself said not to change it, so 'Sewer Camera Inspection'
      stands.

      ⚠ WHAT THIS COPY DOES NOT CLAIM, in line with this file's
      header: no pricing, no timeframe, no guarantee, no certification,
      no availability window. "Visible conditions inside accessible
      portions of the line" is the same limit 14 §29 requires and the
      body below already states — a camera sees what it can reach.

      The closing clause routes onward work to "a separate repair
      provider" rather than to us, which is CLAUDE.md §9's repair
      boundary stated inside the sales copy rather than beside it.
    */
    seoTitle: 'Sewer Camera Inspection Services',
    metaDescription:
      'See what is happening inside your sewer line with professional camera inspections. The Sewer Pros helps homeowners, home buyers, and property professionals in St. Louis, San Diego, and Las Vegas.',
    /*
      ⚠ HERO COPY, OWNER-SUPPLIED (2026-09-23). It renders white over the
      full-width backdrop `ServiceHubTemplate` supplies, so it carries no
      inline links (the link colour used before is unreadable on a
      photograph). "accessible portions" stays: a camera shows what it
      can reach. The secondary button keeps its destination, the
      location selector at `#choose-market`. The primary button is the
      global `PRIMARY_CTA`, unchanged.
    */
    hero: {
      eyebrow: 'See what’s happening inside your sewer line',
      secondaryAction: { href: '#choose-market', label: 'Find Service in Your Area' },
      title: 'Sewer Camera Inspection',
      intro: (
        <>
          <p>
            Recurring backups, slow drains, unexplained blockages, or a
            property purchase can raise questions about a sewer line. A camera
            inspection records video of visible conditions in accessible
            portions of the line, helping identify areas such as buildup, root
            intrusion, offset joints, or standing water.
          </p>
          <p>
            The Sewer Pros documents what the camera shows and explains the
            findings in plain language. Use that evidence to consider whether
            sewer cleaning, hydro jetting, monitoring, or evaluation by a
            separate repair provider may be appropriate.
          </p>
          <ul className="flex flex-col gap-2">
            {[
              'Review video evidence of visible pipe conditions',
              'Receive documented findings you can refer back to',
              'Make informed decisions without a repair contract from The Sewer Pros',
            ].map((point) => (
              <li key={point} className="flex gap-2">
                <span aria-hidden="true">-</span>
                <span className="font-semibold">{point}</span>
              </li>
            ))}
          </ul>
        </>
      ),
    },
    /*
      ⚠ THIS PAGE IS THE SERVICE HUB, NOT A CITY PAGE. Market targeting
      lives on the service + location pages; here the three markets are
      routed to, never listed city by city. `hub` switches the page to
      `ServiceHubTemplate`, which owns the section order.

      ⚠ WHAT THE HUB COPY DOES NOT CLAIM. No pricing, timeframe,
      guarantee, certification, phone number or availability window, and
      no camera-inspection count (the 100,000 figure is St. Louis only).
      Deliverables are worded "where included" because a written report,
      timestamps and same-day results are not documented as standard.
      Repair language is educational: findings may lead to cleaning,
      monitoring, or evaluation by a separate repair provider.
    */
    problems: [
      {
        title: 'Recurring backups or clogs',
        description:
          'A blockage that keeps returning can point to a condition worth seeing on camera, rather than clearing again.',
      },
      {
        title: 'Slow drains in more than one fixture',
        description:
          'When several fixtures drain slowly, the shared sewer line is worth looking at.',
      },
      {
        title: 'Gurgling, odors, or lower-fixture backups',
        description:
          'Sounds, smells, and water rising in the lowest fixtures can be signs of a restriction in the line.',
      },
      {
        title: 'Buying a home',
        description:
          'A sewer scope during the inspection period gives you a visual record of the accessible line before closing.',
      },
      {
        title: 'Before listing or remodeling',
        description:
          'Know the visible condition of the line before a sale, an excavation, or a remodel.',
      },
      {
        title: 'Planning work or weighing a recommendation',
        description:
          'Contractors, managers, and owners can review footage of the line before deciding what to do.',
      },
    ],
    process: [
      {
        title: 'Review the concern',
        description:
          'Tell us what you have noticed, whether the inspection relates to a home purchase, and any property or access details.',
      },
      {
        title: 'Access the sewer line',
        description:
          'The technician identifies an appropriate available access point, often an existing cleanout.',
      },
      {
        title: 'Inspect the accessible line',
        description:
          'A specialized camera is guided through the line while visible conditions are reviewed. What cannot be assessed is stated.',
      },
      {
        title: 'Discuss findings and next steps',
        description:
          'You receive an explanation of what was observed and practical information for deciding what to do next.',
      },
    ],
    showDifferentiator: true,
    hub: {
      marketRouter: {
        id: 'choose-market',
        title: 'Sewer Camera Inspection Service Areas',
        intro:
          'Choose your market for local service details and scheduling options.',
        items: [
          {
            pageId: id('market-st-louis-mo'),
            description:
              'Sewer camera inspections for homeowners, home buyers, and property professionals across the St. Louis area. Review local service details and scheduling options.',
            actionLabel: 'View St. Louis Inspection Services',
          },
          {
            pageId: id('market-san-diego-ca'),
            description:
              'Sewer camera inspections for homeowners, home buyers, and property professionals in the San Diego area. Review local service details and scheduling options.',
            actionLabel: 'View San Diego Inspection Services',
          },
          {
            pageId: id('market-las-vegas-nv'),
            description:
              'Sewer camera inspections for homeowners, home buyers, and property professionals across the Las Vegas Valley. Review local service details and scheduling options.',
            actionLabel: 'View Las Vegas Inspection Services',
          },
        ],
      },
      definition: {
        title: 'What is a sewer camera inspection?',
        answer:
          'A sewer camera inspection uses a specialized waterproof camera to view the accessible interior of a sewer line. A technician guides the camera through the line to look for visible conditions such as blockages, root intrusion, cracks, separated connections, pipe deterioration, or other obstructions that may affect drainage. The footage and findings help homeowners and property professionals understand the condition of the line and decide on an appropriate next step.',
        supporting: [
          'The camera is fed through an appropriate access point, usually an existing cleanout, and moves through the accessible line while the technician watches the video feed.',
          'Because a camera shows what it can reach, the inspection describes visible conditions, and says so where part of a line could not be assessed.',
        ],
        diagramLabel:
          'Illustration of a camera entering a sewer line through a cleanout beside a house',
        diagramCaption:
          'Illustration of the process, not inspection footage.',
      },
      limitations: {
        title: 'What can a sewer camera inspection identify?',
        intro:
          'A camera inspection is a strong source of evidence, and it has limits. Knowing both keeps the result useful.',
        canIdentifyTitle: 'A camera inspection may help identify',
        canIdentify: [
          'Visible blockages or buildup',
          'Root intrusion',
          'Visible cracks, breaks, offsets, or separated joints',
          'Deteriorated or damaged visible pipe sections',
          'Standing water, bellies, or flow concerns where visible',
          'Pipe material transitions or obstructions',
          'General route and condition clues',
        ],
        cannotTitle: 'It may not determine by itself',
        cannot: [
          'The condition of inaccessible portions of a line',
          'The cost of any future work',
          'Whether an issue will never occur in the future',
          'Every underground condition outside the camera view',
          'A full structural engineering conclusion',
          'Whether work is required, without further evaluation',
          'Exact line depth or location, without a locating service',
        ],
        related: {
          lead: 'Need to identify the approximate route of an underground line?',
          pageId: id('svc-sewer-line-locating'),
          label: 'Explore line locating services',
        },
      },
      prep: {
        title: 'Before your inspection',
        items: [
          'Confirm property access and any scheduling requirements.',
          'Tell us if this relates to a home sale, an inspection period, or a recurring backup.',
          'Share any previous plumbing or sewer-line history if you have it.',
          'Ask what documentation is included for your specific appointment.',
        ],
      },
      deliverables: {
        title: 'What do you receive after a sewer camera inspection?',
        items: [
          {
            icon: 'camera',
            title: 'Video footage',
            description:
              'A visual record of the accessible sewer-line inspection, where included.',
          },
          {
            icon: 'explanation',
            title: 'Findings overview',
            description:
              'A clear explanation of the visible conditions observed during the inspection.',
          },
          {
            icon: 'decision',
            title: 'Next-step information',
            description:
              'Practical guidance on what the findings may mean and what to consider next.',
          },
          {
            icon: 'document',
            title: 'Shareable documentation',
            description:
              'Information you can review with an agent, home inspector, seller, contractor, or other professional, when applicable.',
          },
        ],
        panel: {
          title: 'Ask what is included for your appointment',
          body: 'What is provided can vary by market and by service. Confirm the details when you schedule.',
        },
      },
      audiences: {
        title: 'Sewer camera inspections for your situation',
        intro:
          'The same inspection answers different questions depending on who is asking.',
        items: [
          {
            pageId: id('aud-home-buyers'),
            audience: 'Home buyers',
            description:
              'A sewer camera inspection can help you understand visible sewer-line conditions during your due-diligence period.',
            actionLabel: 'Learn about home-buyer sewer inspections',
          },
          {
            pageId: id('aud-home-inspectors'),
            audience: 'Home inspectors',
            description:
              'Coordinate a specialist sewer scope for a client alongside the general inspection.',
            actionLabel: 'Learn about coordinating an inspection',
          },
          {
            pageId: id('aud-real-estate-agents'),
            audience: 'Real estate agents',
            description:
              'Help clients keep a transaction moving with clear information about the sewer line.',
            actionLabel: 'Learn about transaction support',
          },
          {
            pageId: id('aud-property-managers'),
            audience: 'Property managers',
            description:
              'Document a recurring sewer or drain issue across a property before deciding how to address it.',
            actionLabel: 'Learn about property support',
          },
        ],
      },
      evidence: {
        title: 'See what clearer sewer information can reveal',
        intro:
          'Examples of conditions a camera can show inside an accessible line. Each image comes from a real inspection, with customer details removed.',
        caveat:
          'These are visible conditions on individual properties. What a camera shows, and what it means, differs from one property to the next.',
        slots: ['root-intrusion', 'offset', 'standing-water', 'report'],
      },
      comparison: {
        title: 'Sewer camera inspection vs. related services',
        intro:
          'These services answer different questions. Choosing the right one starts with what you need to know.',
        rows: [
          {
            service: 'Sewer camera inspection',
            purpose: 'See visible conditions inside an accessible sewer line',
            fit: 'Recurring symptoms, a home purchase, diagnosis, or evaluation before a project',
          },
          {
            service: 'Sewer cleaning',
            purpose: 'Remove or address certain blockages and buildup in the sewer line',
            fit: 'A blockage or flow issue needs cleaning',
            pageId: id('svc-sewer-cleaning'),
          },
          {
            service: 'Drain cleaning',
            purpose: 'Restore drainage at affected fixtures and branch lines',
            fit: 'Clogs, slow drains, or backups at fixtures',
            pageId: id('svc-drain-cleaning'),
          },
          {
            service: 'Hydro jetting',
            purpose: 'Use high-pressure water for suitable cleaning applications',
            fit: 'More substantial buildup or recurring drainage issues, when the line is a suitable candidate',
            pageId: id('svc-hydro-jetting'),
          },
          {
            service: 'Line locating',
            purpose: 'Identify the approximate path of an underground line',
            fit: 'Excavation, planning, construction, or route verification',
            pageId: id('svc-sewer-line-locating'),
          },
        ],
        note: 'In some situations, an inspection helps clarify the issue before cleaning or further planning. In other cases, an active backup may need assessment or cleaning first.',
      },
    },
    faq: [
      {
        question: 'What is a sewer camera inspection?',
        answer: (
          <p>
            A sewer camera inspection uses a waterproof camera to view the
            accessible interior of a sewer line. It can help identify visible
            conditions such as blockages, root intrusion, offsets, cracks, and
            standing water.
          </p>
        ),
      },
      {
        question: 'How does a sewer camera inspection work?',
        answer: (
          <p>
            A technician feeds the camera through an appropriate access point,
            usually an existing cleanout, and guides it along the accessible
            line while watching the video feed. Visible conditions are noted,
            and anything that could not be assessed is stated.
          </p>
        ),
      },
      {
        question: 'When should I get a sewer camera inspection?',
        answer: (
          <p>
            Common reasons include recurring backups, several slow drains,
            gurgling or odors, buying or selling a property, and planning work
            that depends on knowing the line&rsquo;s condition.
          </p>
        ),
      },
      {
        question: 'Should I get a sewer camera inspection before buying a house?',
        answer: (
          <p>
            It can be a useful part of due diligence because it gives a visual
            review of the accessible sewer line before closing. It may help
            identify visible issues that warrant further evaluation or
            discussion with the appropriate parties. Availability, property
            access, and inspection-period timing can vary by market.
          </p>
        ),
      },
      {
        question: 'What can a sewer camera inspection find?',
        answer: (
          <p>
            It can help identify visible blockages, root intrusion, cracks,
            separated or offset joints, standing water, debris, and changes in
            pipe material. It cannot guarantee detection of every hidden
            defect or assess parts of the line it cannot reach.
          </p>
        ),
      },
      {
        question: 'Can a sewer camera inspection find tree roots?',
        answer: (
          <p>
            Yes, where roots are visible inside the accessible line, often at
            joints or cracks. The footage shows where they enter and how far
            the intrusion extends along the section that was inspected.
          </p>
        ),
      },
      {
        question: 'Will a sewer camera inspection show the exact repair cost?',
        answer: (
          <p>
            No. A camera shows visible conditions, not the price of future
            work. If the findings point to something beyond cleaning, the cost
            depends on a separate evaluation by a qualified provider.
          </p>
        ),
      },
      {
        question: 'Is a sewer camera inspection the same as line locating?',
        answer: (
          <p>
            No. Inspection shows the condition inside the line. Locating
            establishes the approximate path and depth of the line
            underground. They are often used together on the same property.
          </p>
        ),
      },
      {
        question: 'What should I do if the inspection finds a problem?',
        answer: (
          <p>
            Review the footage and findings, then decide on a next step. That
            may mean cleaning, monitoring, or having the footage evaluated by a
            qualified repair contractor. The Sewer Pros is an independent
            inspection and cleaning company, so findings are not tied to a
            repair sale.
          </p>
        ),
      },
      {
        question: 'Which areas does The Sewer Pros serve?',
        answer: (
          <p>
            We serve the St. Louis, San Diego, and Las Vegas markets. Choose
            your market at the top of this page for local details and
            scheduling.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-cleaning-camera-inspection'),
      id('svc-pre-purchase-sewer-inspection'),
      id('res-camera-report'),
      id('res-read-video'),
    ],
    cta: {
      title: 'Get a clearer view of your sewer line',
      body: 'Choose your market above to schedule a sewer camera inspection, ask about availability, or get help with a current sewer or drain concern.',
    },
  },

  /* ======================================================================
     Sewer Cleaning — 14 §31
     ====================================================================== */
  [id('svc-sewer-cleaning')]: {
    metaDescription:
      'Request professional sewer cleaning to address blockages, buildup, and flow problems with inspection-focused service from The Sewer Pros.',
    hero: {
      eyebrow: 'Cleaning',
      title: 'Sewer Cleaning',
      intro: (
        <p>
          Clearing what has built up inside the sewer line so it drains as
          intended, and so its actual condition can be seen.
        </p>
      ),
    },
    body: (
      <>
        <h2>What sewer cleaning addresses</h2>
        <p>
          Sewer lines accumulate material over time: grease, soap residue,
          sediment, scale, and root growth entering at joints. Accumulation
          narrows the effective diameter of the pipe until flow slows or stops.
        </p>
        <p>
          Cleaning removes that accumulation. It does not change the structural
          condition of the pipe: a cleaned line with a cracked or offset joint
          still has a cracked or offset joint.
        </p>

        <h2>When cleaning is the right step</h2>
        <ul>
          <li>Slow drainage across multiple fixtures</li>
          <li>A backup caused by accumulation rather than structural failure</li>
          <li>Before an inspection, where buildup prevents proper assessment</li>
          <li>As scheduled maintenance on a line with a known history</li>
        </ul>

        <h2>When cleaning is not the answer</h2>
        <p>
          Repeated blockages returning quickly after cleaning usually indicate
          something the cleaning is not addressing: root intrusion at a
          specific defect, a section that has lost slope, or a collapsed
          segment. Cleaning that line again treats the symptom.
        </p>
        <p>
          This is where inspection matters. Cleaning without knowing why the
          line blocked risks repeating the same visit indefinitely.
        </p>

        <h2>Cleaning and inspection together</h2>
        <p>
          A line is often best understood by cleaning it and then inspecting it.
          The cleaning restores flow; the inspection shows what the buildup was
          hiding and whether an underlying condition caused it.
        </p>
      </>
    ),
    process: [
      { title: 'Assess access', description: 'Identify the cleanout and the section to be cleaned.' },
      { title: 'Clear the line', description: 'Remove accumulated material using the method suited to the blockage.' },
      { title: 'Confirm flow' },
      { title: 'Inspect where useful', description: 'Camera the cleaned line to see the pipe itself.' },
    ],
    faq: [
      {
        question: 'How often does a sewer line need cleaning?',
        answer: (
          <p>
            There is no universal interval. It depends on the line&rsquo;s
            condition, material, slope, root pressure, and what goes into it. A
            line with a known recurring issue is a different case from one with
            no history.
          </p>
        ),
      },
      {
        question: 'The blockage came back quickly. Why?',
        answer: (
          <p>
            Rapid recurrence usually points to an underlying condition rather
            than ordinary buildup: roots entering at a defect, a low section
            holding water, or damage. An inspection is more useful than another
            cleaning at that point.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-hydro-jetting'),
      id('svc-sewer-cleaning-camera-inspection'),
      id('svc-recurring-sewer-backup-diagnosis'),
    ],
  },

  /* ======================================================================
     Hydro Jetting — 14 §32
     ====================================================================== */
  [id('svc-hydro-jetting')]: {
    metaDescription:
      'Learn how hydro jetting can help clear buildup and restore flow in sewer and drain lines when the service is appropriate.',
    hero: {
      eyebrow: 'Cleaning',
      title: 'Hydro Jetting',
      intro: (
        <p>
          High-pressure water cleaning that scours the pipe wall rather than
          punching a hole through a blockage, appropriate for some lines and
          conditions, and not for others.
        </p>
      ),
    },
    body: (
      <>
        <h2>How hydro jetting works</h2>
        <p>
          A hose with a specialised nozzle is fed into the line and delivers
          water at high pressure. Rear-facing jets propel the hose forward and
          scour material off the pipe wall, flushing it downstream.
        </p>
        <p>
          The distinction that matters: mechanical clearing can open a channel
          through a blockage, while jetting is capable of removing material from
          the full circumference of the pipe. That difference is why jetting is
          often chosen for accumulation rather than a single obstruction.
        </p>

        <h2>What it is well suited to</h2>
        <ul>
          <li>Grease accumulation, particularly in food-service lines</li>
          <li>Soap and sediment buildup narrowing the line over time</li>
          <li>Scale on the interior wall</li>
          <li>Sludge in lines carrying heavy or continuous volume</li>
          <li>Root material, depending on extent and the line&rsquo;s condition</li>
        </ul>

        <h2>When hydro jetting may not be appropriate</h2>
        <p>
          Hydro jetting is not automatically the right answer for every
          blockage. High-pressure water applied to a line that is already
          structurally compromised can make a bad situation worse.
        </p>
        <ul>
          <li>
            Lines with known cracks, collapsed sections, or severe
            deterioration may not be suitable candidates.
          </li>
          <li>
            Older or brittle pipe materials warrant knowing the line&rsquo;s
            condition before applying pressure to it.
          </li>
          <li>
            A single localised obstruction may not require jetting at all.
          </li>
        </ul>
        <p>
          This is the argument for inspecting before jetting where the
          line&rsquo;s condition is unknown, and for inspecting afterward to
          confirm what the cleaning revealed.
        </p>

        <h2>Commercial use</h2>
        <p>
          Commercial kitchen and high-volume lines accumulate grease and solids
          faster than residential lines, which is why jetting appears regularly
          in commercial maintenance rather than only as a response to a backup.
        </p>
      </>
    ),
    process: [
      { title: 'Establish the line condition', description: 'Where condition is unknown, inspect before applying pressure.' },
      { title: 'Set up access' },
      { title: 'Jet the line', description: 'Scour accumulated material from the pipe wall.' },
      { title: 'Re-inspect', description: 'Confirm the result and see the pipe now that it is clear.' },
    ],
    faq: [
      {
        question: 'Is hydro jetting better than snaking?',
        answer: (
          <p>
            They do different jobs. Mechanical clearing is often the right tool
            for a discrete obstruction; jetting removes accumulation from the
            pipe wall. Neither is universally superior, and the line&rsquo;s
            condition affects which is appropriate.
          </p>
        ),
      },
      {
        question: 'Can hydro jetting damage a sewer line?',
        answer: (
          <p>
            High-pressure water in an already-compromised line carries real
            risk. That is why knowing the condition first matters, particularly
            with older pipe or a line with a history of structural problems.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-cleaning'),
      id('cmp-hydro-vs-snaking'),
      id('svc-sewer-camera-inspection'),
    ],
  },

  /* ======================================================================
     Sewer Cleaning & Camera Inspection
     ====================================================================== */
  [id('svc-sewer-cleaning-camera-inspection')]: {
    metaDescription:
      'Combine sewer cleaning with camera inspection to address buildup while documenting conditions inside the line before deciding what comes next.',
    hero: {
      eyebrow: 'Cleaning and diagnostics',
      title: 'Sewer Cleaning with Camera Inspection',
      intro: (
        <p>
          Clear the line, then look at it. Cleaning restores flow; the
          inspection afterward shows what the buildup was covering.
        </p>
      ),
    },
    body: (
      <>
        <h2>Why the two are combined</h2>
        <p>
          Cleaning and inspection answer complementary questions, and doing both
          in sequence answers a third: why did this line block?
        </p>
        <p>
          A line full of accumulated material cannot be assessed properly: the
          camera sees the buildup, not the pipe. Cleaning first and inspecting
          second means the footage shows the actual pipe wall, joints, and any
          defect that caused material to catch in the first place.
        </p>

        <h2>What this combination is for</h2>
        <ul>
          <li>A line that has backed up more than once</li>
          <li>A blockage where the cause is not obvious</li>
          <li>Establishing a baseline condition for a line with no history</li>
          <li>Confirming whether cleaning resolved the underlying issue</li>
        </ul>

        <h2>What the post-cleaning inspection can establish</h2>
        <p>
          With the line clear, the footage can show whether the blockage was
          ordinary accumulation or the consequence of a condition that will
          cause it again: roots entering at a joint, a section holding water,
          a break collecting debris.
        </p>
        <p>
          That distinction changes what happens next. Ordinary accumulation is a
          maintenance question. A structural cause is a decision about repair,
          and one worth making from documented evidence.
        </p>
      </>
    ),
    process: [
      { title: 'Clear the line' },
      { title: 'Confirm flow is restored' },
      { title: 'Inspect the cleaned line' },
      { title: 'Review what the footage shows' },
    ],
    showDifferentiator: true,
    faq: [
      {
        question: 'Why not just inspect first?',
        answer: (
          <p>
            You can, and sometimes that is right. But if the line is full, the
            camera mostly shows buildup. Where the objective is understanding
            the pipe rather than confirming a blockage exists, cleaning first
            produces more usable footage.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-cleaning'),
      id('svc-sewer-camera-inspection'),
      id('svc-recurring-sewer-backup-diagnosis'),
    ],
  },

  /* ======================================================================
     Sewer Line Locating — 14 §33
     ====================================================================== */
  [id('svc-sewer-line-locating')]: {
    metaDescription:
      'Locate sewer lines and document their position to support property planning, maintenance, inspections, and related project decisions.',
    hero: {
      eyebrow: 'Locating',
      title: 'Sewer Line Locating',
      intro: (
        <p>
          Establishing where the sewer line physically runs and how deep it
          sits, information you need before anyone digs, and often before
          anyone quotes.
        </p>
      ),
    },
    body: (
      <>
        <h2>What locating establishes</h2>
        <p>
          Locating identifies the route of the line across the property and the
          approximate depth along it. A transmitting sonde is moved through the
          line and tracked from the surface, so the path can be marked above
          ground.
        </p>

        <h2>Why it matters</h2>
        <ul>
          <li>
            Excavation without knowing the line&rsquo;s route means digging
            speculatively, which costs more and disturbs more.
          </li>
          <li>
            A repair quote is more meaningful when the depth and position of the
            problem are known rather than estimated.
          </li>
          <li>
            Planning work on a property (landscaping, an addition, paving)
            benefits from knowing what runs underneath and where.
          </li>
          <li>
            Access points are not always where people assume, particularly on
            older properties or after previous work.
          </li>
        </ul>

        <h2>Locating and inspection together</h2>
        <p>
          Camera inspection shows the condition of the line and the distance
          along it to a defect. Locating translates that distance into a
          physical position on the property. Together they answer both what is
          wrong and where it is.
        </p>
        <p>
          That combination is what makes a repair decision concrete rather than
          approximate, and it is information you own regardless of who
          performs any subsequent work.
        </p>
      </>
    ),
    process: [
      { title: 'Access the line' },
      { title: 'Track the route', description: 'Follow the line from the surface to establish its path.' },
      { title: 'Establish depth' },
      { title: 'Mark the findings' },
    ],
    faq: [
      {
        question: 'Do I need locating if I already had a camera inspection?',
        answer: (
          <p>
            They answer different questions. An inspection can tell you a defect
            sits a certain distance along the line; locating tells you where
            that point is on the property and how deep.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-camera-inspection'),
      id('svc-sewer-cleaning'),
    ],
  },

  /* ======================================================================
     Drain Cleaning — 14 §34
     ====================================================================== */
  [id('svc-drain-cleaning')]: {
    metaDescription:
      'Get help with clogged, slow, or recurring drains through professional drain cleaning and diagnostic service from The Sewer Pros.',
    hero: {
      eyebrow: 'Cleaning',
      title: 'Drain Cleaning',
      intro: (
        <p>
          Clearing individual fixture and branch drains, and recognising when
          a drain problem is actually a sewer problem.
        </p>
      ),
    },
    body: (
      <>
        <h2>Drain lines and sewer lines</h2>
        <p>
          A drain line serves a fixture or a group of fixtures and connects to
          the main sewer line, which carries everything away from the property.
          The distinction matters because it changes what the symptom means.
        </p>
        <p>
          One slow fixture usually indicates a problem in that branch. Several
          fixtures draining slowly, or the lowest fixtures backing up first,
          more often points to the main line.
        </p>

        <h2>Common causes</h2>
        <ul>
          <li>Grease and soap accumulation in kitchen and bathroom branches</li>
          <li>Hair and debris at or near the fixture</li>
          <li>Foreign objects</li>
          <li>Scale narrowing older branch lines</li>
          <li>A restriction further downstream in the main line</li>
        </ul>

        <h2>When to look further</h2>
        <p>
          A drain that clears and stays clear was a drain problem. A drain that
          blocks repeatedly, or blocks alongside other fixtures, is worth
          investigating past the branch: clearing the same fixture repeatedly
          does not address a main-line cause.
        </p>
      </>
    ),
    faq: [
      {
        question: 'Multiple drains are slow. Is that different?',
        answer: (
          <p>
            Usually, yes. Several fixtures affected at once, especially the
            lowest ones, points toward the main line rather than any individual
            branch, and is worth inspecting rather than clearing repeatedly.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-cleaning'),
      id('svc-recurring-sewer-backup-diagnosis'),
    ],
  },

  /* ======================================================================
     Pre-Purchase Sewer Inspection — 14 §35
     ====================================================================== */
  [id('svc-pre-purchase-sewer-inspection')]: {
    metaDescription:
      "Schedule a pre-purchase sewer inspection with documented camera findings to better understand a property's sewer line before closing.",
    hero: {
      eyebrow: 'Real estate',
      title: 'Pre-Purchase Sewer Inspection',
      intro: (
        <p>
          A camera inspection of the sewer line before you buy, so the
          line&rsquo;s condition is part of what you know rather than what you
          discover later.
        </p>
      ),
    },
    body: (
      <>
        <h2>Why the sewer line is worth inspecting separately</h2>
        <p>
          A general property inspection covers a great deal, but the sewer line
          runs underground and is not visible without a camera. It is one of the
          few property systems where a serious condition can exist with no
          symptom at the fixtures on the day you view the property.
        </p>

        <h2>What the inspection can tell you</h2>
        <ul>
          <li>The visible condition of the accessible line</li>
          <li>Whether roots have entered, and where</li>
          <li>Joint separation, offsets, and visible cracks</li>
          <li>Standing water suggesting a low section or restriction</li>
          <li>Pipe material and changes along the run</li>
          <li>Evidence of previous work</li>
        </ul>

        <h2>What it cannot tell you</h2>
        <p>
          It documents visible conditions on the day of inspection. It does not
          guarantee future performance, and it does not establish who is legally
          responsible for which portion of the line: that varies by
          jurisdiction and is a question for the appropriate professional.
        </p>

        <h2>Timing</h2>
        <p>
          The inspection is most useful while you still have decisions
          available to you. Findings are information for your due diligence:
          what you do with them is your decision, made with your own advisers.
        </p>

        <h2>Why independence matters here</h2>
        <p>
          A pre-purchase inspection informs a significant financial decision.
          The Sewer Pros does not perform sewer repair or replacement, so the
          findings are not an opening step toward selling you the remedy.
        </p>
      </>
    ),
    process: [
      { title: 'Locate access' },
      { title: 'Inspect the line' },
      { title: 'Document conditions' },
      { title: 'Walk through the findings' },
    ],
    showDifferentiator: true,
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
        question: 'What if the inspection finds a problem?',
        answer: (
          <p>
            You have documented evidence of the line&rsquo;s condition. What you
            do with it, including obtaining repair quotes or discussing it with
            your agent and advisers, is your decision.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-camera-inspection'),
      id('cmp-independent-vs-repair'),
    ],
    cta: {
      title: 'Inspect the line before you commit',
      body: 'Know the condition of the sewer line while the decision is still yours to make.',
    },
  },

  /* ======================================================================
     Recurring Sewer Backup Diagnosis
     ====================================================================== */
  [id('svc-recurring-sewer-backup-diagnosis')]: {
    metaDescription:
      'Investigate recurring sewer backups with camera inspection and documented diagnostics to better understand the condition of the line.',
    hero: {
      eyebrow: 'Diagnostics',
      title: 'Recurring Sewer Backup Diagnosis',
      intro: (
        <p>
          When a line backs up again after being cleared, the useful question is
          no longer how to clear it: it is why it keeps happening.
        </p>
      ),
    },
    body: (
      <>
        <h2>Recurrence is information</h2>
        <p>
          A one-off blockage is often ordinary. A blockage that returns on a
          pattern usually means something in the line is catching material, and
          each clearing resets the clock without changing the cause.
        </p>

        <h2>What commonly causes recurrence</h2>
        <ul>
          <li>Roots entering at a specific joint or crack and regrowing</li>
          <li>A section that has lost slope and holds water and solids</li>
          <li>An offset joint or partial collapse creating a catch point</li>
          <li>Scale or deterioration narrowing the effective diameter</li>
          <li>A downstream restriction outside the property</li>
        </ul>

        <h2>How diagnosis differs from clearing</h2>
        <p>
          Clearing restores flow. Diagnosis establishes the mechanism: what is
          catching material, where along the line it sits, and whether cleaning
          can manage it or whether it will need addressing structurally.
        </p>
        <p>
          That usually means cleaning the line enough to see it, inspecting it,
          and locating any defect the footage identifies, so the position is
          known rather than approximate.
        </p>

        <h2>What the answer might be</h2>
        <p>
          Sometimes the answer is that the line is sound and needs maintenance
          on a sensible interval. Sometimes it is a defect that will keep
          causing backups until it is addressed by a qualified repair
          contractor. Both are useful answers, and neither is improved by
          guessing.
        </p>
      </>
    ),
    process: [
      { title: 'Understand the history', description: 'What backs up, how often, and what has been done before.' },
      { title: 'Clear enough to assess' },
      { title: 'Inspect the line' },
      { title: 'Locate any defect found' },
    ],
    showDifferentiator: true,
    faq: [
      {
        question: 'It has been cleared three times. What is different this time?',
        answer: (
          <p>
            The objective. Clearing addresses the blockage; diagnosis addresses
            the reason it forms. Those need different work (inspection and
            usually locating) and produce a different kind of answer.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-camera-inspection'),
      id('svc-sewer-line-locating'),
      id('svc-preventative-sewer-maintenance'),
    ],
  },

  /* ======================================================================
     Preventative Sewer Maintenance
     ====================================================================== */
  [id('svc-preventative-sewer-maintenance')]: {
    metaDescription:
      'Reduce uncertainty around recurring sewer problems with inspection, cleaning, and preventative sewer maintenance from The Sewer Pros.',
    hero: {
      eyebrow: 'Maintenance',
      title: 'Preventative Sewer Maintenance',
      intro: (
        <p>
          Scheduled cleaning and inspection for lines with a known reason to
          need it, based on the line&rsquo;s actual condition and history
          rather than a default interval.
        </p>
      ),
    },
    body: (
      <>
        <h2>What preventative maintenance is for</h2>
        <p>
          Some lines have a reason to be maintained: a known root pressure, a
          section that accumulates, high or continuous volume, or a history of
          backups that cleaning manages successfully.
        </p>
        <p>
          For those lines, servicing on a schedule is usually less disruptive
          than responding to a backup. For a line with no such history, a
          default schedule is harder to justify.
        </p>

        <h2>Establishing the right interval</h2>
        <p>
          A sensible interval comes from evidence: what the line looked like at
          the last inspection, how quickly material accumulated between visits,
          and what caused the previous blockages. That is why maintenance
          usually starts with inspection rather than a calendar.
        </p>

        <h2>Where it fits for commercial properties</h2>
        <p>
          High-volume and food-service lines accumulate faster, and an
          unplanned backup carries operational cost beyond the plumbing. That
          changes the arithmetic of scheduled service relative to a residential
          line.
        </p>

        <h2>What we will not do</h2>
        <p>
          We will not put a line on a schedule it does not need. If the evidence
          does not support a recurring interval, saying so is more useful than
          selling one.
        </p>
      </>
    ),
    faq: [
      {
        question: 'How do you decide the interval?',
        answer: (
          <p>
            From the line itself: its condition at inspection, how quickly it
            accumulates, and what caused previous problems. There is no single
            correct interval for every line.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-cleaning'),
      id('svc-recurring-sewer-backup-diagnosis'),
      id('svc-sewer-camera-inspection'),
    ],
  },
}
