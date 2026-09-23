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
          'Repeated blockages may warrant looking for a visible condition in the accessible line, rather than treating each clog as an isolated event.',
      },
      {
        title: 'Slow drains in multiple fixtures',
        description:
          'When several fixtures drain slowly, an inspection can help determine whether a visible restriction may be in a shared sewer line.',
      },
      {
        title: 'Gurgling, odors, or backups at lower fixtures',
        description:
          'These symptoms can have different causes. A camera inspection may help identify visible conditions in the accessible line.',
      },
      {
        title: 'Before buying a home',
        description:
          'A sewer camera inspection can provide a visual record of accessible portions of the line during the home-buying process.',
      },
      {
        title: 'Before listing or remodeling',
        description:
          'Inspection footage can help document visible sewer-line conditions before a sale or planned project.',
      },
      {
        title: 'When reviewing a recommendation',
        description:
          'Homeowners, contractors, managers, and property owners can use documented footage to better understand what was observed before deciding on next steps.',
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
          'A camera is guided through the line while visible conditions are reviewed. Any portions that cannot be assessed are noted.',
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
          'A sewer camera inspection uses a waterproof camera to view accessible portions of a sewer line. A technician guides the camera through the line and reviews the video for visible conditions such as blockages, root intrusion, separated connections, pipe deterioration, or other obstructions that may affect drainage.',
        supporting: [
          'The footage helps homeowners and property professionals understand what was observed and consider an appropriate next step. Because the camera can only show areas it can reach, the inspection report should also identify portions of the line that could not be assessed.',
          'The camera is guided through an appropriate access point, often an existing cleanout, while the technician monitors the video feed.',
        ],
      },
      limitations: {
        title: 'What can a sewer camera inspection identify?',
        intro:
          'A sewer camera inspection can document visible conditions in the portions of the line the camera can reach. It can provide useful evidence, but it cannot assess areas outside the camera’s view or determine every next step on its own.',
        canIdentifyTitle: 'A camera inspection may help identify',
        canIdentify: [
          'Visible blocks or buildup',
          'Root intrusion',
          'Visible cracks, breaks, offsets, or separated joints in the camera view',
          'Deteriorated or damaged visible pipe sections',
          'Standing water or other visible flow concerns',
          'Pipe material transitions or visible obstructions',
          'Visual clues about the line’s route and condition',
        ],
        cannotTitle: 'It may not determine by itself',
        cannot: [
          'The condition of portions of the line the camera cannot reach',
          'The cost of future work',
          'Whether an issue will never occur in the future',
          'Underground conditions outside the camera’s view',
          'A full structural engineering conclusion',
          'Whether work is required without further evaluation',
          'Exact line depth or location without a separate locating service',
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
          'Share previous plumbing or sewer-line history if you have it.',
          'Ask what documentation is included for your specific appointment.',
        ],
      },
      deliverables: {
        title: 'What do you receive after a sewer camera inspection?',
        intro: [
          'After the inspection, the technician explains the visible conditions observed and reviews what information is available for your appointment.',
        ],
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
              'Practical information about what the findings may mean and what to consider next.',
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
        title: 'Who Can Benefit from a Sewer Camera Inspection?',
        intro:
          'A sewer camera inspection can provide useful information to different people involved in a property decision or maintenance issue. The findings document visible conditions in accessible portions of the line and can be shared with relevant professionals.',
        items: [
          {
            pageId: id('aud-home-buyers'),
            audience: 'Home buyers',
            description:
              'A sewer camera inspection can document visible conditions in accessible portions of the sewer line during the due diligence period. Buyers can use the findings to discuss the line’s condition before closing.',
            actionLabel: 'Learn about home-buyer sewer inspections',
          },
          {
            pageId: id('aud-home-inspectors'),
            audience: 'Home inspectors',
            description:
              'A specialist sewer camera inspection adds a closer view of accessible portions of the sewer line alongside a general home inspection. Coordinate scheduling and access for the property and appointment.',
            actionLabel: 'Learn about coordinating an inspection',
          },
          {
            pageId: id('aud-real-estate-agents'),
            audience: 'Real estate agents',
            description:
              'Documented findings can give buyers and sellers clearer information to discuss during a transaction. The inspection records visible conditions; it does not guarantee future performance or determine repairs.',
            actionLabel: 'Learn about transaction support',
          },
          {
            pageId: id('aud-property-managers'),
            audience: 'Property managers',
            description:
              'Documented findings can help track recurring backups or drainage concerns at a property. Share the observations with owners or maintenance professionals when considering next steps.',
            actionLabel: 'Learn about property support',
          },
        ],
      },
      evidence: {
        title: 'See What a Sewer Camera Inspection Can Reveal',
        intro:
          'A sewer camera inspection can document visible conditions in accessible portions of a sewer line. The examples below show findings that may appear on camera. What a finding means, and what to consider next, depends on the condition, location, and accessible portions of the specific line.',
        caveat:
          'These are examples of visible conditions from individual properties. Findings vary by line, access, and inspection. A camera cannot show portions of the system it cannot reach or determine every next step on its own.',
        items: [
          {
            slot: 'root-intrusion',
            title: 'Visible root intrusion',
            description:
              'Roots can enter a sewer line through joints or existing openings. Camera footage may show where roots are visible and how much of the pipe they appear to affect. The inspection documents what the camera can reach; it does not establish the full extent of a problem outside the camera\u2019s view.',
          },
          {
            slot: 'offset',
            title: 'A visible pipe offset',
            description:
              'An offset occurs when connected pipe sections are misaligned. Footage may show a change in alignment at a joint, which can help explain a restriction or an area where debris collects. The camera records the visible condition but does not determine the cause or a repair plan.',
          },
          {
            slot: 'standing-water',
            title: 'Standing water',
            description:
              'Water remaining in a section of pipe may be visible during an inspection. The footage can document where it appears, but standing water alone does not confirm why it is present or whether the line has a grade or flow issue. Interpretation depends on the inspection conditions and other visible evidence.',
          },
          {
            slot: 'report',
            title: 'Inspection footage and findings summary',
            description:
              'When included with the service, footage or a findings summary can help you review the visible conditions discussed during the inspection. Documentation and deliverables can vary by appointment, so confirm what is included when scheduling.',
          },
        ],
      },
      request: {
        title: 'Schedule a Sewer Camera Inspection',
        intro:
          'Request an inspection to document visible conditions in the accessible portions of your sewer line. Share what you\u2019ve noticed, your property location, and whether the inspection relates to recurring symptoms or a home purchase. The Sewer Pros provides inspection and diagnostic services across St. Louis, San Diego, and Las Vegas.',
      },
      closing: {
        title: 'Schedule a Sewer Camera Inspection',
        intro: [
          'Request a sewer camera inspection to document visible conditions in accessible portions of your sewer line. Choose your service area, tell us what you\u2019ve noticed, and let us know if the inspection is related to recurring backups, a home purchase, or another sewer concern. The inspection findings can help you understand what the camera observed and consider an appropriate next step.',
          'The Sewer Pros provides sewer inspection and diagnostic services in St. Louis, San Diego, and Las Vegas. Use the form to request service or ask about availability for your property.',
        ],
      },
      comparison: {
        title: 'Sewer camera inspection vs. related services',
        intro:
          'Sewer camera inspection, sewer cleaning, drain cleaning, hydro jetting, and line locating serve different purposes. Compare what each service does and when it may be relevant to help identify the right next step.',
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
            A sewer camera inspection uses a specialized waterproof camera to
            view accessible portions of a sewer line. It can document visible
            conditions such as buildup, root intrusion, offsets, cracks, or
            standing water. The camera can only show areas it can reach and
            access.
          </p>
        ),
      },
      {
        question: 'How does a sewer camera inspection work?',
        answer: (
          <p>
            A technician guides a camera through an appropriate access point,
            often an existing cleanout, while viewing the live footage. The
            inspection documents visible conditions along the accessible
            route. Access, the condition of the line, and the camera&rsquo;s
            reach affect what can be observed.
          </p>
        ),
      },
      {
        question: 'When should I schedule a sewer camera inspection?',
        answer: (
          <p>
            Consider an inspection when you have recurring backups, slow
            drains affecting multiple fixtures, unexplained sewer concerns, or
            want information about a line before a home purchase. If sewage is
            actively backing up, contact a service provider promptly to
            discuss the immediate issue and whether cleaning or assessment
            should come first.
          </p>
        ),
      },
      {
        question: 'Should I get a sewer camera inspection before buying a house?',
        answer: (
          <p>
            A sewer camera inspection during the due diligence period can
            document visible conditions in accessible portions of the line.
            Ask about access, scheduling, and what documentation is included
            so you know what to expect before your inspection period ends.
          </p>
        ),
      },
      {
        question: 'What can a sewer camera inspection find?',
        answer: (
          <p>
            It may show visible blockages or buildup, root intrusion, cracks,
            breaks, offsets, separated joints, damaged pipe sections, standing
            water, or material transitions. Findings depend on the condition
            and accessibility of the line. A camera inspection does not assess
            areas it cannot reach.
          </p>
        ),
      },
      {
        question: 'Can a sewer camera inspection find tree roots?',
        answer: (
          <p>
            It can show roots that are visible inside accessible portions of
            the sewer line. Footage may document where roots appear and their
            visible extent, but it cannot establish the full condition of the
            line beyond the camera&rsquo;s view or determine every cause of
            root entry.
          </p>
        ),
      },
      {
        question: 'Will a sewer camera inspection show the exact repair cost?',
        answer: (
          <p>
            No. A camera inspection documents visible conditions; it does not
            provide a repair quote or determine the cost of future work. If
            additional evaluation or repair is being considered, the footage
            and findings may help you discuss the observed condition with a
            qualified provider.
          </p>
        ),
      },
      {
        question: 'Is a sewer camera inspection the same as sewer line locating?',
        answer: (
          <p>
            No. A camera inspection views the inside of accessible portions of
            a sewer line. Line locating uses locating equipment to estimate
            the route or position of an underground line. If you need the
            approximate path for planning or excavation, ask about a separate
            line locating service.
          </p>
        ),
      },
      {
        question: 'What should I do if the inspection finds a problem?',
        answer: (
          <p>
            Review the footage and findings, ask what was directly observed
            and what could not be assessed, and consider whether you need a
            separate evaluation. The inspection can inform your next decision,
            but it does not by itself determine whether work is required or
            which provider should perform it.
          </p>
        ),
      },
      {
        question: 'Which areas does The Sewer Pros serve?',
        answer: (
          <p>
            The Sewer Pros provides sewer inspection and diagnostic services
            in St. Louis, Missouri; San Diego, California; and Las Vegas,
            Nevada. Select your service area or contact the team to confirm
            availability for your property.
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
    relatedDescriptions: {
      [id('res-camera-report')]:
        'What a complete report should include, so you can compare quotes or revisit the findings later.',
      [id('res-read-video')]:
        'How to read root intrusion, cracks, and other defects on your own inspection video.',
    },
    cta: {
      title: 'Get a clearer view of your sewer line',
      body: 'Choose your market above to schedule a sewer camera inspection, ask about availability, or get help with a current sewer or drain concern.',
    },
  },

  /* ======================================================================
     Sewer Cleaning — 14 §31
     ====================================================================== */
  [id('svc-sewer-cleaning')]: {
    /*
      ⚠ THIS PAGE IS THE SERVICE HUB, NOT A CITY PAGE. Market targeting
      lives on the market and service + location pages; here the three
      markets are routed to, never listed city by city. `hub` switches the
      page to `ServiceHubTemplate`; `decisionFirst` puts the comparison
      ahead of the market router so the service is understood first.

      ⚠ WHAT THIS COPY DOES NOT CLAIM. No pricing, timeframe, guarantee,
      certification, availability window, emergency or same-day service,
      equipment specification, inspection count or review metric. No
      customer deliverable is promised (video, written report, before and
      after photos) because none is documented for every market, so the
      deliverables panel is deliberately absent. Repair stays educational:
      cleaning does not change pipe condition, and findings may point to
      evaluation by a separate repair provider (CLAUDE.md §9, §24).
    */
    seoTitle: 'Sewer Cleaning for Main-Line Blockages',
    metaDescription:
      'Learn when sewer cleaning is the right step and how it differs from hydro jetting, drain cleaning, and camera inspection. Serving St. Louis, San Diego, and Las Vegas.',
    hero: {
      eyebrow: 'Sewer and Drain Service',
      title: 'Sewer Cleaning for Main-Line Blockages and Recurring Drain Problems',
      primaryAction: { href: '#choose-market', label: 'Choose Your Location' },
      secondaryAction: { href: '/contact/', label: 'Call About a Sewer Problem' },
      intro: (
        <>
          <p>
            Sewer cleaning helps address certain blockages, buildup, roots,
            debris, and other restrictions in accessible portions of a
            property’s main sewer line. If multiple drains are slow, wastewater
            is backing up, or clogs keep returning, The Sewer Pros can help you
            understand the situation and choose a practical next step.
          </p>
          <p>
            <a href="#cleaning-vs-related-services" className="font-semibold underline underline-offset-4">
              Not sure whether you need cleaning or a camera inspection?
            </a>
          </p>
        </>
      ),
    },
    process: [
      {
        title: 'Discuss the issue',
        description:
          'The team gathers information about symptoms, affected fixtures, timing, access, and property context.',
      },
      {
        title: 'Assess the appropriate starting point',
        description:
          'The technician determines whether sewer cleaning, camera inspection, drain cleaning, or another service path is appropriate.',
      },
      {
        title: 'Perform the recommended cleaning method',
        description:
          'The method depends on line access, the suspected restriction, known or visible conditions, and safe operating considerations.',
      },
      {
        title: 'Review findings and practical next steps',
        description:
          'You receive a clear explanation of the work performed, observed conditions where applicable, and recommended next actions.',
      },
    ],
    hub: {
      decisionFirst: true,
      mobileBar: true,
      defaultServiceId: 'svc-sewer-cleaning',
      processIcons: ['explanation', 'checklist', 'pipe', 'document'],
      /*
        IMAGE SLOTS. Save the real files at these paths and they are used at
        the next build; until then development shows a labelled placeholder
        and production shows nothing (see
        `public/images/services/sewer-cleaning/README.md` for the shot list).
      */
      images: {
        hero: '/images/services/sewer-cleaning/sewer-cleaning-hero-16x9.webp',
        comparison: '/images/services/sewer-cleaning/sewer-cleaning-comparison-16x9.webp',
        request: '/images/services/sewer-cleaning/sewer-cleaning-request-16x9.webp',
        closing: '/images/services/sewer-cleaning/sewer-cleaning-closing-16x9.webp',
        definition: ['cleaning-definition'],
        process: 'cleaning-process',
      },
      headings: {
        process: 'What happens during a sewer cleaning visit?',
        faq: 'Sewer cleaning questions',
      },
      definition: {
        id: 'what-is-sewer-cleaning',
        label: 'Quick answer',
        title: 'What is sewer cleaning?',
        answer:
          'Sewer cleaning is the process of clearing certain blockages, buildup, roots, debris, or other obstructions from an accessible main sewer line. Depending on the line condition and the type of restriction, the work may involve cable-based cleaning, hydro jetting, or another suitable method. A camera inspection may be recommended when the cause, location, or visible condition of the line is unclear.',
        supporting: [
          'Cleaning restores flow. It does not change the structural condition of the pipe: a cleaned line with a cracked or offset joint still has a cracked or offset joint.',
        ],
      },
      symptomRouter: {
        id: 'when-sewer-cleaning-may-be-right',
        title: 'When might sewer cleaning be the right next step?',
        intro:
          'Start with what you are seeing. Each situation points to the service that usually fits it best.',
        items: [
          {
            status: 'Multiple fixtures',
            title: 'Multiple drains are slow or gurgling',
            description:
              'When several fixtures drain slowly or make gurgling sounds, the main sewer line may need attention.',
            actionLabel: 'Explore sewer cleaning',
            href: '#request-service',
          },
          {
            status: 'Active issue',
            urgency: 'active',
            title: 'Toilets, tubs, or lower drains back up together',
            description:
              'Wastewater backing up at several low points can indicate a main-line restriction. Talk with the team about what is happening.',
            actionLabel: 'Call about a sewer problem',
            pageId: id('core-contact'),
          },
          {
            status: 'Recurring issue',
            urgency: 'recurring',
            title: 'A clog keeps returning',
            description:
              'Repeated blockages may point to a visible condition in the line rather than ordinary buildup. A camera can help show what is there.',
            actionLabel: 'Consider a camera inspection',
            pageId: id('svc-sewer-camera-inspection'),
          },
          {
            status: 'Possible restriction',
            title: 'Roots, buildup, or debris may be restricting the line',
            description:
              'Accumulated material can narrow a sewer line until flow slows. The right cleaning method depends on the line and the restriction.',
            actionLabel: 'Ask about cleaning options',
            href: '#request-service',
          },
          {
            status: 'Single fixture',
            title: 'One sink, tub, or toilet is slow',
            description:
              'A problem at one fixture is often a branch-line or fixture clog, which drain cleaning is designed to address.',
            actionLabel: 'Explore drain cleaning',
            pageId: id('svc-drain-cleaning'),
          },
          {
            status: 'Planning ahead',
            urgency: 'planning',
            title: 'You are buying a home',
            description:
              'A sewer camera inspection during a purchase can document visible conditions in the accessible line before closing.',
            actionLabel: 'Schedule a buyer sewer inspection',
            pageId: id('svc-pre-purchase-sewer-inspection'),
          },
        ],
      },
      limitations: {
        title: 'What sewer cleaning may help with, and when more evaluation is needed',
        intro:
          'Cleaning addresses material inside the pipe. It cannot tell you why a line keeps blocking, and it does not change the pipe itself.',
        canIdentifyTitle: 'Sewer cleaning may help address',
        canIdentify: [
          'Certain roots, debris, grease, buildup, and soft blockages',
          'Accessible restrictions affecting drainage',
          'Some recurring flow restrictions',
          'Material that can be cleared using the appropriate method',
          'Maintenance needs identified through inspection',
        ],
        cannotTitle: 'Sewer cleaning may not resolve by itself',
        cannot: [
          'A collapsed or severely damaged pipe',
          'Separated, offset, or structurally compromised connections',
          'Portions of a line that cannot be safely accessed',
          'The root cause when the line’s condition is unknown',
          'Problems outside the accessible sewer-line path',
        ],
        related: {
          lead: 'If a blockage keeps returning or the line’s condition is uncertain,',
          pageId: id('svc-sewer-camera-inspection'),
          label: 'a sewer camera inspection can help identify visible conditions and inform the next decision.',
        },
      },
      comparison: {
        id: 'cleaning-vs-related-services',
        columns: ['Service', 'Main purpose', 'Often appropriate when'],
        title: 'Sewer cleaning vs. hydro jetting, drain cleaning, and camera inspection',
        intro:
          'These services sound alike but answer different questions. Compare what each one does and what usually happens next.',
        rows: [
          {
            service: 'Sewer cleaning',
            purpose: 'Clear certain restrictions in an accessible main sewer line',
            fit: 'Multiple fixtures are affected or a main-line blockage is suspected. Consider an inspection if symptoms return or the cause is unclear.',
          },
          {
            service: 'Hydro jetting',
            purpose: 'Use high-pressure water to clean a line where appropriate',
            fit: 'Buildup or recurring material may call for a more intensive approach. Suitability depends on pipe condition, access, and technician assessment.',
            pageId: id('svc-hydro-jetting'),
          },
          {
            service: 'Drain cleaning',
            purpose: 'Address a clog in a branch line or individual fixture',
            fit: 'One sink, shower, tub, or toilet is affected. Escalate if several fixtures develop symptoms.',
            pageId: id('svc-drain-cleaning'),
          },
          {
            service: 'Sewer camera inspection',
            purpose: 'View accessible interior line conditions',
            fit: 'A blockage keeps returning, the location is unclear, or the line’s condition is uncertain. Findings help select an appropriate next step.',
            pageId: id('svc-sewer-camera-inspection'),
          },
          {
            service: 'Line locating',
            purpose: 'Identify the approximate underground path of a line',
            fit: 'Excavation, construction, or project planning is involved. Findings support coordination and planning.',
            pageId: id('svc-sewer-line-locating'),
          },
        ],
        note: 'If sewage is actively backing up, contact the team to discuss the immediate issue and whether cleaning or assessment should come first.',
      },
      marketRouter: {
        id: 'choose-market',
        title: 'Find sewer cleaning service in your market',
        intro:
          'Choose your market for local service details and ways to request service.',
        items: [
          {
            pageId: id('market-st-louis-mo'),
            description: 'Explore sewer cleaning availability across the St. Louis region.',
            actionLabel: 'Sewer Cleaning in St. Louis',
          },
          {
            pageId: id('market-san-diego-ca'),
            description: 'Explore sewer cleaning availability across the San Diego region.',
            actionLabel: 'Sewer Cleaning in San Diego',
          },
          {
            pageId: id('market-las-vegas-nv'),
            description: 'Explore sewer cleaning availability across the Las Vegas Valley.',
            actionLabel: 'Sewer Cleaning in Las Vegas',
          },
        ],
      },
      audiences: {
        id: 'sewer-cleaning-for-your-situation',
        title: 'Sewer cleaning for different property needs',
        intro:
          'Different people reach a sewer question from different starting points. These pages cover what matters most to each.',
        items: [
          {
            pageId: id('aud-property-managers'),
            audience: 'Property managers',
            description:
              'Coordinate service for recurring drainage concerns at occupied properties, and keep observations to share with owners or maintenance teams.',
            actionLabel: 'Property manager support',
          },
          {
            pageId: id('aud-home-inspectors'),
            audience: 'Home inspectors',
            description:
              'Coordinate next steps when a sewer concern is identified during a general inspection.',
            actionLabel: 'Working with home inspectors',
          },
          {
            pageId: id('aud-real-estate-agents'),
            audience: 'Real estate agents',
            description:
              'Support clients with appropriate sewer inspection and diagnostic paths during a transaction.',
            actionLabel: 'Transaction support',
          },
          {
            pageId: id('aud-home-buyers'),
            audience: 'Home buyers',
            description:
              'Understand visible sewer-line conditions before closing, and what cleaning does and does not address.',
            actionLabel: 'Home buyer sewer inspections',
          },
        ],
      },
      evidence: {
        id: 'sewer-cleaning-field-experience',
        title: 'Clear information starts with real field experience',
        intro:
          'A recurring drainage problem can have different causes. Cleaning may be appropriate in some cases, while a camera inspection may help identify visible conditions when the issue repeatedly returns or the location is unclear.',
        caveat:
          'These are examples from individual properties, with identifying details removed. Findings and methods vary by line, access, and situation.',
        items: [
          {
            slot: 'cleaning-equipment',
            title: 'Cleaning equipment in the field',
            description:
              'Equipment is chosen for the line and the suspected restriction. The method used depends on access and on what is known or visible about the line.',
          },
          {
            slot: 'cleaning-monitor',
            title: 'Reviewing the line on a monitor',
            description:
              'When a camera is used, the technician reviews visible conditions on a monitor. The view covers only the portions of the line the camera can reach.',
          },
        ],
      },
      request: {
        id: 'request-sewer-cleaning',
        title: 'Request sewer cleaning',
        intro:
          'Tell us what you have noticed, which fixtures are affected, and where the property is. The Sewer Pros provides sewer inspection, cleaning, and diagnostic services across St. Louis, San Diego, and Las Vegas.',
      },
      closing: {
        title: 'Get clear next steps for a sewer-line problem',
        intro: [
          'Choose your market to request sewer cleaning, discuss a recurring drainage issue, or determine whether a sewer camera inspection may be a better starting point.',
          'Use the form to request service or ask about availability for your property.',
        ],
      },
    },
    faq: [
      {
        question: 'What is the difference between sewer cleaning and drain cleaning?',
        answer: (
          <p>
            Sewer cleaning generally addresses restrictions in the main line
            that carries wastewater away from the property. Drain cleaning
            often focuses on an individual fixture or smaller branch line. If
            several fixtures are affected, the main sewer line may need
            evaluation; if one fixture is affected, drain cleaning may be the
            more relevant starting point.
          </p>
        ),
      },
      {
        question: 'When should I schedule sewer cleaning instead of a camera inspection?',
        answer: (
          <p>
            Sewer cleaning may fit when several fixtures are slow and a
            main-line restriction is suspected. A camera inspection may fit
            better when a blockage keeps returning, the location is unclear,
            or you want to understand the visible condition of the line. If
            sewage is actively backing up, contact the team to discuss which
            should come first.
          </p>
        ),
      },
      {
        question: 'Can sewer cleaning remove tree roots?',
        answer: (
          <p>
            Cleaning can address certain roots that are restricting an
            accessible line. It does not remove the reason roots entered, such
            as a joint or opening, so roots may return. A camera inspection can
            help show where roots are visible.
          </p>
        ),
      },
      {
        question: 'Does sewer cleaning repair a damaged sewer line?',
        answer: (
          <p>
            No. Cleaning removes material from inside the pipe and does not
            change the pipe’s structural condition. If an inspection shows a
            visible defect, the findings can help you consider whether a
            separate evaluation by a repair provider is appropriate.
          </p>
        ),
      },
      {
        question: 'What are common signs of a main sewer line blockage?',
        answer: (
          <p>
            Common signs include several fixtures draining slowly, gurgling
            sounds, and toilets, tubs, or lower drains backing up together.
            These symptoms can have different causes, so a technician’s
            assessment helps decide whether cleaning or an inspection is the
            better next step.
          </p>
        ),
      },
      {
        question: 'Is hydro jetting always the best sewer cleaning method?',
        answer: (
          <p>
            No. Hydro jetting uses high-pressure water and can suit some
            buildup, but whether it is appropriate depends on the pipe’s
            condition, access, and the type of restriction. The technician
            assesses the line before recommending a method.
          </p>
        ),
      },
      {
        question: 'Can I schedule sewer cleaning for a rental or multi-unit property?',
        answer: (
          <p>
            Property managers and owners can request service for rental and
            multi-unit properties. Share which units are affected, how often
            the problem occurs, and any access details when you reach out, and
            confirm scope and scheduling with the local team.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-hydro-jetting'),
      id('svc-sewer-cleaning-camera-inspection'),
      id('svc-recurring-sewer-backup-diagnosis'),
      id('svc-drain-cleaning'),
    ],
    cta: {
      title: 'Get clear next steps for a sewer-line problem',
      body: 'Choose your market to request sewer cleaning, discuss a recurring drainage issue, or ask whether a camera inspection may be a better starting point.',
    },
  },

  /* ======================================================================
     Hydro Jetting — 14 §32
     ====================================================================== */
  [id('svc-hydro-jetting')]: {
    /*
      ⚠ THIS PAGE IS THE SERVICE HUB, NOT A CITY PAGE. Market targeting
      lives on the market and service + location pages; here the three
      markets are routed to, never listed city by city. Same hub template
      as sewer cleaning (`decisionFirst`).

      ⚠ THE POSITION IS METHOD SELECTION, NOT "WE JET EVERYTHING". Hydro
      jetting is a cleaning method whose suitability depends on line
      condition, access, and the restriction. Copy never says it is safe for
      every pipe, non-invasive, permanent, like-new, or guaranteed.

      ⚠ WHAT THIS COPY DOES NOT CLAIM. No pricing, timeframe, guarantee,
      certification, availability window, emergency or same-day service,
      equipment specification or review metric. No customer deliverable is
      promised (video, written report, before and after photos) and no
      camera-before or camera-after policy is stated, because neither is
      documented for every market, so the deliverables panel is
      deliberately absent. Repair stays educational: jetting does not
      repair a pipe (CLAUDE.md §9, §24).
    */
    seoTitle: 'Hydro-Jetting for Buildup and Recurring Blockages',
    metaDescription:
      'Learn what hydro-jetting is, when it may be appropriate, when a camera inspection may come first, and how it differs from sewer and drain cleaning. Serving St. Louis, San Diego, and Las Vegas.',
    hero: {
      eyebrow: 'Sewer and Drain Cleaning Method',
      title: 'Hydro-Jetting for Buildup, Recurring Blockages, and Sewer-Line Cleaning',
      primaryAction: { href: '#choose-market', label: 'Choose Your Location' },
      secondaryAction: { href: '/contact/', label: 'Call About a Sewer Problem' },
      intro: (
        <>
          <p>
            Hydro-jetting uses controlled high-pressure water to clean certain
            buildup, debris, grease, roots, and other material from accessible
            sewer or drain lines. Whether it is appropriate depends on the
            line’s condition, access, the type of blockage, and the
            technician’s assessment.
          </p>
          <p>
            <a href="#what-it-can-identify" className="font-semibold underline underline-offset-4">
              Not sure whether hydro-jetting is right for your line?
            </a>
          </p>
        </>
      ),
    },
    process: [
      {
        title: 'Discuss the drainage concern',
        description:
          'The team gathers details about symptoms, affected fixtures, previous service, property type, and whether the issue is active or recurring.',
      },
      {
        title: 'Assess whether hydro-jetting is appropriate',
        description:
          'The technician considers access, the suspected restriction, known or visible pipe condition, and whether an inspection or another service is a better starting point.',
      },
      {
        title: 'Perform the recommended cleaning service',
        description:
          'When hydro-jetting is appropriate, controlled water pressure is used to clean the accessible pipe section.',
      },
      {
        title: 'Review the work and next steps',
        description:
          'You receive a clear explanation of the work performed, relevant observed information, and recommended follow-up when needed.',
      },
    ],
    hub: {
      decisionFirst: true,
      mobileBar: true,
      defaultServiceId: 'svc-hydro-jetting',
      processIcons: ['explanation', 'checklist', 'pipe', 'document'],
      /*
        IMAGE SLOTS. Save the real files at these paths and they are used at
        the next build; until then development shows a labelled placeholder
        and production shows nothing (see
        `public/images/services/hydro-jetting/README.md` for the shot list).
      */
      images: {
        hero: '/images/services/hydro-jetting/hydro-jetting-hero-16x9.webp',
        comparison: '/images/services/hydro-jetting/hydro-jetting-comparison-16x9.webp',
        request: '/images/services/hydro-jetting/hydro-jetting-request-16x9.webp',
        closing: '/images/services/hydro-jetting/hydro-jetting-closing-16x9.webp',
        definition: ['hydro-definition'],
        process: 'hydro-process',
      },
      headings: {
        process: 'What happens during a hydro-jetting visit?',
        faq: 'Hydro-jetting questions',
      },
      definition: {
        id: 'what-is-hydro-jetting',
        label: 'Quick answer',
        title: 'What is hydro-jetting?',
        answer:
          'Hydro-jetting is a sewer and drain cleaning method that uses controlled high-pressure water to remove certain buildup, debris, grease, roots, and blockages from accessible pipe sections. It may be used for some recurring drainage problems, but it is not automatically appropriate for every line. A technician may recommend an inspection or another cleaning method based on the pipe’s condition, access, and the suspected cause of the restriction.',
        supporting: [],
      },
      symptomRouter: {
        id: 'could-hydro-jetting-be-right',
        title: 'Could hydro-jetting be the right next step?',
        intro:
          'Start with what you are seeing. Each situation points to the service or question that usually fits it best.',
        items: [
          {
            status: 'Recurring issue',
            urgency: 'recurring',
            title: 'The clog keeps returning',
            description:
              'If a line repeatedly clogs after clearing, hydro-jetting may be considered for certain buildup or debris, but the pipe’s condition should guide the method.',
            actionLabel: 'Ask about hydro-jetting',
            href: '#request-hydro-jetting',
          },
          {
            status: 'Possible buildup',
            title: 'Grease, scale, sludge, or buildup is suspected',
            description:
              'Hydro-jetting may help clean certain deposits where it is appropriate for the line.',
            actionLabel: 'Explore hydro-jetting',
            href: '#what-hydro-jetting-may-help-with',
          },
          {
            status: 'Multiple fixtures',
            title: 'Several fixtures drain slowly or gurgle',
            description:
              'A main-line issue may need evaluation before a cleaning method is chosen.',
            actionLabel: 'Discuss a sewer problem',
            pageId: id('svc-sewer-cleaning'),
          },
          {
            status: 'Possible roots',
            title: 'Roots may be affecting the line',
            description:
              'The cleaning method depends on visible conditions and pipe integrity, which a camera can help show.',
            actionLabel: 'Schedule a camera inspection',
            pageId: id('svc-sewer-camera-inspection'),
          },
          {
            status: 'Single fixture',
            title: 'One sink or tub is clogged',
            description:
              'A problem at one fixture is often a branch-line or fixture clog, which drain cleaning is designed to address.',
            actionLabel: 'Explore drain cleaning',
            pageId: id('svc-drain-cleaning'),
          },
          {
            status: 'Condition unknown',
            title: 'Pipe condition is unknown or damage is suspected',
            description:
              'Start with a camera inspection so the visible condition of the line can inform the next step.',
            actionLabel: 'Schedule a sewer camera inspection',
            pageId: id('svc-sewer-camera-inspection'),
          },
        ],
      },
      materials: {
        id: 'what-hydro-jetting-may-help-with',
        title: 'What hydro-jetting may help remove',
        intro:
          'Hydro-jetting may be used to clean certain materials inside accessible sewer or drain lines. The actual approach depends on the line’s material, age, known condition, access points, and the nature of the restriction.',
        tiles: [
          'Grease buildup',
          'Sludge and organic material',
          'Scale or mineral accumulation',
          'Soap residue',
          'Some root intrusion',
          'Loose debris and soft blockages',
        ],
        columns: ['Material or condition', 'How hydro-jetting may help', 'Important qualification'],
        rows: [
          {
            item: 'Grease and sludge',
            help: 'Can help break up and flush certain accumulated material.',
            qualification: 'Suitability depends on access, pipe condition, and system context.',
          },
          {
            item: 'Scale or mineral buildup',
            help: 'May help remove some interior buildup affecting flow.',
            qualification: 'Heavier buildup or compromised pipe may require additional evaluation.',
          },
          {
            item: 'Loose debris',
            help: 'Can help move certain debris through the accessible line.',
            qualification: 'The source and location of the debris still matter.',
          },
          {
            item: 'Root intrusion',
            help: 'May help address some accessible roots.',
            qualification: 'Root recurrence, pipe damage, and line condition may call for an inspection.',
          },
          {
            item: 'Organic buildup',
            help: 'May help restore flow when buildup is contributing to a restriction.',
            qualification: 'Results depend on the cause and the condition of the pipe.',
          },
        ],
      },
      limitations: {
        title: 'When hydro-jetting may not be the first step',
        intro:
          'Hydro-jetting is a cleaning method, not a universal diagnosis or repair solution. When pipe condition is uncertain, a camera inspection may help identify visible conditions and determine a more appropriate next step.',
        canIdentifyTitle: 'Start with inspection or assessment when',
        canIdentify: [
          'The pipe’s condition is unknown',
          'A collapse, crack, offset, or other structural concern is suspected',
          'The property has an older or potentially fragile line',
          'The problem keeps returning without a known cause',
          'Access is limited or uncertain',
          'The blockage location is not known',
        ],
        cannotTitle: 'Consider another service path when',
        cannot: [
          'One fixture is affected: drain cleaning may fit better',
          'A sewer line needs to be seen: a camera inspection may fit better',
          'The sewer route needs identification: line locating may fit better',
          'A standard accessible blockage is suspected: ask about sewer cleaning',
          'A home purchase decision is involved: a pre-purchase sewer inspection may fit better',
        ],
        related: {
          lead: 'If the line’s condition is uncertain,',
          pageId: id('svc-sewer-camera-inspection'),
          label: 'a sewer camera inspection can help identify visible conditions and inform the next decision.',
        },
      },
      comparison: {
        id: 'hydro-jetting-vs-related-services',
        columns: ['Service', 'Main purpose', 'Often considered when'],
        title: 'Hydro-jetting vs. sewer cleaning, drain cleaning, and camera inspection',
        intro:
          'These services sound alike but answer different questions. Compare what each one does and where it stops.',
        rows: [
          {
            service: 'Hydro-jetting',
            purpose: 'Clean certain buildup and restrictions with controlled high-pressure water',
            fit: 'Buildup or recurring material may be affecting flow. It is not appropriate for every line or for an unknown pipe condition.',
          },
          {
            service: 'Sewer cleaning',
            purpose: 'Clear certain accessible main-line restrictions',
            fit: 'Multiple fixtures are affected or a main-line blockage is suspected. It may not identify why a problem keeps returning.',
            pageId: id('svc-sewer-cleaning'),
          },
          {
            service: 'Drain cleaning',
            purpose: 'Address a fixture or branch-line clog',
            fit: 'One sink, shower, tub, or toilet is affected. It may not address a main sewer-line issue.',
            pageId: id('svc-drain-cleaning'),
          },
          {
            service: 'Sewer camera inspection',
            purpose: 'View accessible interior line conditions',
            fit: 'The cause, location, or line condition is uncertain. It does not itself clean a restriction.',
            pageId: id('svc-sewer-camera-inspection'),
          },
          {
            service: 'Line locating',
            purpose: 'Identify the approximate underground path of the line',
            fit: 'Excavation, construction, or planning is involved. It does not clean or inspect inside the line.',
            pageId: id('svc-sewer-line-locating'),
          },
        ],
        note: 'If sewage is actively backing up, contact the team to discuss the immediate issue and whether cleaning or assessment should come first.',
      },
      marketRouter: {
        id: 'choose-market',
        title: 'Find hydro-jetting service in your market',
        intro:
          'Choose your market for local service details and ways to request service.',
        items: [
          {
            pageId: id('market-st-louis-mo'),
            description: 'Explore hydro-jetting service availability across the St. Louis region.',
            actionLabel: 'Hydro-Jetting in St. Louis',
          },
          {
            pageId: id('market-san-diego-ca'),
            description: 'Explore hydro-jetting service availability across the San Diego region.',
            actionLabel: 'Hydro-Jetting in San Diego',
          },
          {
            pageId: id('market-las-vegas-nv'),
            description: 'Explore hydro-jetting service availability across the Las Vegas Valley.',
            actionLabel: 'Hydro-Jetting in Las Vegas',
          },
        ],
      },
      audiences: {
        id: 'hydro-jetting-for-your-situation',
        title: 'Hydro-jetting support for different property needs',
        intro:
          'Different people reach a cleaning question from different starting points. These pages cover what matters most to each.',
        items: [
          {
            pageId: id('aud-property-managers'),
            audience: 'Property managers',
            description:
              'Coordinate cleaning needs for occupied or multi-unit properties, and keep observations to share with owners or maintenance teams.',
            actionLabel: 'Property manager support',
          },
          {
            pageId: id('aud-hoa-communities'),
            audience: 'HOA communities',
            description:
              'Understand cleaning options for shared drainage concerns that recur across a community.',
            actionLabel: 'HOA community support',
          },
          {
            pageId: id('aud-home-inspectors'),
            audience: 'Home inspectors',
            description:
              'Refer property concerns into an appropriate evaluation path.',
            actionLabel: 'Working with home inspectors',
          },
          {
            pageId: id('aud-real-estate-agents'),
            audience: 'Real estate agents',
            description:
              'Help clients decide whether inspection or cleaning is the relevant next step.',
            actionLabel: 'Transaction support',
          },
        ],
      },
      evidence: {
        id: 'hydro-jetting-field-experience',
        title: 'A condition-aware approach to sewer-line cleaning',
        intro:
          'The right cleaning method depends on what is happening inside the accessible line. The Sewer Pros can use inspection findings, observed symptoms, access conditions, and property context to help determine whether hydro-jetting is an appropriate next step.',
        caveat:
          'These are examples from individual properties, with identifying details removed. Findings and methods vary by line, access, and situation.',
        items: [
          {
            slot: 'hydro-equipment',
            title: 'Equipment used by the team',
            description:
              'Equipment is chosen for the line and the suspected restriction, and the technician leads the assessment.',
          },
          {
            slot: 'hydro-monitor',
            title: 'Reviewing the line on a monitor',
            description:
              'When a camera is used, the technician reviews visible conditions on a monitor. The view covers only the portions of the line the camera can reach.',
          },
        ],
      },
      request: {
        id: 'request-hydro-jetting',
        title: 'Ask about hydro-jetting',
        intro:
          'Tell us what you have noticed, which fixtures are affected, whether the problem has returned after prior clearing, and where the property is. The Sewer Pros provides sewer inspection, cleaning, and diagnostic services across St. Louis, San Diego, and Las Vegas.',
      },
      closing: {
        title: 'Get clear guidance on the right sewer-line cleaning method',
        intro: [
          'Select your market to ask about hydro-jetting, discuss a recurring drainage problem, or determine whether sewer cleaning or a camera inspection may be a better starting point.',
          'Use the form to request service or ask about availability for your property.',
        ],
      },
    },
    faq: [
      {
        question: 'What is hydro-jetting used for?',
        answer: (
          <p>
            Hydro-jetting may be used to clean certain buildup, debris, grease,
            roots, and restrictions from accessible sewer or drain lines.
            Whether it is appropriate depends on the pipe’s condition, access,
            the suspected material in the line, and technician assessment.
          </p>
        ),
      },
      {
        question: 'Is hydro-jetting safe for older sewer pipes?',
        answer: (
          <p>
            It may be appropriate in some situations, but older or
            unknown-condition pipes should be assessed carefully. A camera
            inspection may help identify visible conditions before selecting a
            cleaning method.
          </p>
        ),
      },
      {
        question: 'Can hydro-jetting remove tree roots?',
        answer: (
          <p>
            Hydro-jetting may help address some accessible root intrusion, but
            root recurrence and pipe condition still matter. If roots have
            entered through a damaged or separated pipe section, cleaning alone
            may not resolve the underlying issue.
          </p>
        ),
      },
      {
        question: 'What is the difference between hydro-jetting and snaking?',
        answer: (
          <p>
            A cable or “snake” typically works mechanically to clear or break
            through a restriction. Hydro-jetting uses controlled high-pressure
            water to clean material from the accessible interior of a pipe. The
            best method depends on the restriction and the line condition.
          </p>
        ),
      },
      {
        question: 'Do I need a camera inspection before hydro-jetting?',
        answer: (
          <p>
            Not every situation follows the same workflow. However, a camera
            inspection may be recommended when the line condition, blockage
            location, or cause of recurring problems is uncertain.
          </p>
        ),
      },
      {
        question: 'Can hydro-jetting fix a broken sewer line?',
        answer: (
          <p>
            No. Hydro-jetting is a cleaning method and does not repair broken,
            collapsed, separated, or severely damaged pipe sections.
          </p>
        ),
      },
      {
        question: 'Can hydro-jetting help a multi-unit or managed property?',
        answer: (
          <p>
            It may be relevant for certain recurring drainage or buildup
            concerns, depending on the property’s line configuration, service
            history, access, and condition. Share which units are affected and
            how often the problem occurs when you reach out.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-cleaning'),
      id('svc-sewer-camera-inspection'),
      id('svc-drain-cleaning'),
      id('cmp-hydro-vs-snaking'),
    ],
    cta: {
      title: 'Get clear guidance on the right sewer-line cleaning method',
      body: 'Choose your market to ask about hydro-jetting, discuss a recurring drainage problem, or ask whether a camera inspection may be a better starting point.',
    },
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
