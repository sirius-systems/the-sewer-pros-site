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

import Link from 'next/link'
import {
  MapPinIcon,
  CameraIcon,
  DocumentIcon,
  ExplanationIcon,
  ChecklistIcon,
  EyeIcon,
  DecisionIcon,
  CalendarClockIcon,
  GuidanceIcon,
  AccessPointIcon,
  IndependenceIcon,
} from '@/components/sections/section-icons'
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
            service: 'Sewer cleaning and camera inspection',
            purpose: 'Review visible line conditions and address an appropriate restriction when warranted',
            fit: 'A problem keeps returning, the cause is unclear, or several fixtures are affected',
            pageId: id('svc-sewer-cleaning-camera-inspection'),
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
      approach: {
        title: 'How independent sewer inspection helps you choose a next step',
        intro:
          'A recurring sewer problem can have more than one cause. The Sewer Pros focuses on inspection, diagnostics, and cleaning to help you understand what may be happening in the accessible portions of the line. When camera inspection is used, the findings can inform whether cleaning is appropriate or whether another next step should be considered.',
        items: [
          {
            title: 'Start with the problem',
            icon: 'conversation',
            description:
              'We discuss the symptoms you have noticed, such as recurring clogs, multiple slow drains, or a backup. That context helps determine whether sewer cleaning, camera inspection, or another available service may be a useful starting point.',
          },
          {
            title: 'Review visible conditions',
            icon: 'camera',
            description:
              'When a camera inspection is appropriate, a RIDGID SeeSnake camera can show conditions in portions of the line it can reach. The view is limited to accessible areas and may not establish every cause of a recurring problem.',
          },
          {
            title: 'Explain the findings',
            icon: 'document',
            description:
              'We explain what was observed and how it relates to the reported problem. If cleaning is appropriate for an accessible restriction, the method depends on the line, access, and suspected material.',
          },
          {
            title: 'You decide what happens next',
            icon: 'decision',
            description:
              'Use the findings to make an informed decision. If a concern involves work beyond sewer inspection or cleaning, you decide whether to consult another qualified provider.',
          },
        ],
      },
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
        hero: '/images/services/sewer-cleaning/hero/the-sewer-pros-sewer-cleaning-ridgid-seesnake-hero-16x9.webp',
        heroFocus: 'right',
        // No `comparison` backdrop: the `cards` variant below renders a
        // plain navy section, since its own card artwork already carries
        // the visual interest.
        limitations:
          '/images/services/sewer-cleaning/the-sewer-pros-sewer-cleaning-camera-inspection-comparison-background-16x9.webp',
        request:
          '/images/services/sewer-cleaning/the-sewer-pros-sewer-cleaning-request-cta-background-ridgid-seesnake-16x9.webp',
        requestFocus: 'right',
        closing:
          '/images/services/sewer-cleaning/the-sewer-pros-sewer-cleaning-request-cta-background-cleanout-ridgid-seesnake-16x9.webp',
        closingFocus: 'right',
        definition: ['cleaning-definition'],
        process: 'cleaning-process',
      },
      headings: {
        process: 'What happens during a sewer cleaning visit?',
        faq: 'Sewer Cleaning FAQs',
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
            icon: 'fixtures',
            description:
              'When several fixtures drain slowly or make gurgling sounds, the main sewer line may need attention.',
            actionLabel: 'Explore sewer cleaning',
            href: '#request-service',
          },
          {
            status: 'Active issue',
            urgency: 'active',
            title: 'Toilets, tubs, or lower drains back up together',
            icon: 'backup',
            description:
              'Wastewater backing up at several low points can indicate a main-line restriction. Talk with the team about what is happening.',
            actionLabel: 'Call about a sewer problem',
            pageId: id('core-contact'),
          },
          {
            status: 'Recurring issue',
            urgency: 'recurring',
            title: 'A clog keeps returning',
            icon: 'repeat',
            description:
              'Repeated blockages may point to a visible condition in the line rather than ordinary buildup. A camera can help show what is there.',
            actionLabel: 'Consider a camera inspection',
            pageId: id('svc-sewer-camera-inspection'),
          },
          {
            status: 'Possible restriction',
            title: 'Roots, buildup, or debris may be restricting the line',
            icon: 'restriction',
            description:
              'Accumulated material can narrow a sewer line until flow slows. The right cleaning method depends on the line and the restriction.',
            actionLabel: 'Ask about cleaning options',
            href: '#request-service',
          },
          {
            status: 'Single fixture',
            title: 'One sink, tub, or toilet is slow',
            icon: 'fixture',
            description:
              'A problem at one fixture is often a branch-line or fixture clog, which drain cleaning is designed to address.',
            actionLabel: 'Explore drain cleaning',
            pageId: id('svc-drain-cleaning'),
          },
          {
            status: 'Planning ahead',
            urgency: 'planning',
            title: 'You are buying a home',
            icon: 'home',
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
        variant: 'cards',
        columns: ['Service', 'Main purpose', 'Often appropriate when'],
        title: 'Sewer cleaning vs. hydro jetting, drain cleaning, and camera inspection',
        intro:
          'These services sound alike but answer different questions. Compare what each one does and what usually happens next.',
        rows: [
          {
            service: 'Sewer cleaning',
            imageId: id('svc-sewer-cleaning'),
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
            service: 'Sewer cleaning and camera inspection',
            purpose: 'Review visible line conditions and address an appropriate restriction when warranted',
            fit: 'A problem is recurring, unclear, or affecting multiple fixtures. Inspection can help explain why cleaning alone may not settle it.',
            pageId: id('svc-sewer-cleaning-camera-inspection'),
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
            description:
              'Explore sewer cleaning availability across the St. Louis region. The St. Louis page covers sewer cleaning and hydro jetting, lists communities with local pages such as Ballwin, Florissant, and Chesterfield, and shows how to confirm coverage and request service.',
            actionLabel: 'Sewer Cleaning in St. Louis',
          },
          {
            pageId: id('market-san-diego-ca'),
            description:
              'Explore sewer cleaning availability across the San Diego region. The San Diego page covers sewer cleaning and hydro jetting, lists communities with local pages such as Carlsbad, Escondido, and Oceanside, and shows how to confirm coverage and request service.',
            actionLabel: 'Sewer Cleaning in San Diego',
          },
          {
            pageId: id('market-las-vegas-nv'),
            description:
              'Explore sewer cleaning availability across the Las Vegas Valley. The Las Vegas page covers sewer cleaning and hydro jetting, lists communities with local pages such as Henderson, North Las Vegas, and Summerlin, and shows how to confirm coverage and request service.',
            actionLabel: 'Sewer Cleaning in Las Vegas',
          },
        ],
      },
      audiences: {
        id: 'sewer-cleaning-for-your-situation',
        surface: 'muted',
        title: 'Sewer cleaning for different property needs',
        intro:
          'Different people reach a sewer question from different starting points. These pages cover what matters most to each.',
        items: [
          {
            pageId: id('aud-property-managers'),
            audience: 'Property managers',
            icon: 'building',
            description:
              'Coordinate service for recurring drainage concerns at occupied properties, and keep observations to share with owners or maintenance teams.',
            actionLabel: 'Property manager support',
          },
          {
            pageId: id('aud-home-inspectors'),
            audience: 'Home inspectors',
            icon: 'checklist',
            description:
              'Coordinate next steps when a sewer concern is identified during a general inspection.',
            actionLabel: 'Working with home inspectors',
          },
          {
            pageId: id('aud-real-estate-agents'),
            audience: 'Real estate agents',
            icon: 'house-key',
            description:
              'Support clients with appropriate sewer inspection and diagnostic paths during a transaction.',
            actionLabel: 'Transaction support',
          },
          {
            pageId: id('aud-home-buyers'),
            audience: 'Home buyers',
            icon: 'home',
            description:
              'Understand visible sewer-line conditions before closing, and what cleaning does and does not address.',
            actionLabel: 'Home buyer sewer inspections',
          },
        ],
      },
      evidence: {
        id: 'sewer-cleaning-field-experience',
        title: 'Examples of sewer cleaning and camera inspection',
        intro:
          'A recurring sewer problem can have more than one cause. Cleaning may be appropriate when material is restricting flow in an accessible section of the line. When the cause or line condition is unclear, a RIDGID SeeSnake camera inspection can help show visible conditions in the portions of the pipe the camera can reach.',
        caveat:
          'These examples are from separate properties. Equipment, methods, and findings vary by line, access, and situation.',
        items: [
          {
            slot: 'cleaning-equipment',
            title: 'Cleaning equipment in the field',
            description:
              'Sewer-cleaning equipment is selected based on access and the suspected restriction. The method used depends on the conditions of the line and what is known or visible before work begins.',
          },
          {
            slot: 'cleaning-monitor',
            title: 'Reviewing the line on a monitor',
            description:
              'When camera inspection is used, the RIDGID SeeSnake displays video from the accessible portion of the sewer line. The view can help identify visible conditions, but it does not show areas the camera cannot reach or determine every cause of a recurring problem.',
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
        answer: <p>{'Sewer cleaning addresses certain blockages in an accessible main sewer line that serves multiple fixtures. Drain cleaning usually targets a branch line or an individual sink, tub, shower, or toilet. If several fixtures are slow or backing up at once, the main line may need evaluation.'}</p>,
      },
      {
        question: 'What are common signs of a main sewer line blockage?',
        answer: <p>{'Several slow or gurgling drains, wastewater backing up at multiple fixtures, or a blockage that keeps returning can point to a main-line restriction. These symptoms can have other causes, too. A technician can assess the affected fixtures and determine whether cleaning or further evaluation is appropriate.'}</p>,
      },
      {
        question: 'When should I schedule sewer cleaning instead of a camera inspection?',
        answer: <p>{'Cleaning may be appropriate when symptoms suggest an accessible blockage and the likely restriction can be addressed with a suitable cleaning method. A camera inspection may be useful when the cause or location is unclear, or when blockages keep returning. The right starting point depends on the line, access, and observed conditions.'}</p>,
      },
      {
        question: 'Is hydro jetting always the best sewer cleaning method?',
        answer: <p>{'No. Hydro jetting uses high-pressure water and may suit some lines and types of buildup, but it is not appropriate for every pipe or situation. The method should be selected based on access, the suspected restriction, and the line’s known or visible condition.'}</p>,
      },
      {
        question: 'Can sewer cleaning remove tree roots?',
        answer: <p>{'A suitable cleaning method may cut or clear some roots from an accessible section of line. Cleaning does not repair the point where roots entered, so they may return. If root intrusion is suspected or blockages recur, a camera inspection can help identify visible conditions in the portions of the line the camera can reach.'}</p>,
      },
      {
        question: 'Can sewer cleaning repair a damaged sewer line?',
        answer: <p>{'No. Sewer cleaning may remove certain material inside an accessible pipe, but it does not repair cracks, separated joints, or other structural damage. If damage is suspected, an inspection can help document visible conditions and inform next steps.'}</p>,
      },
      {
        question: 'Can sewer cleaning help with grease, scale, or other buildup?',
        answer: <p>{'It may help clear certain buildup when the affected section is accessible and the pipe can be safely cleaned using an appropriate method. The suitable approach depends on the type and location of the material and the line’s condition.'}</p>,
      },
      {
        question: 'How often should a sewer line be cleaned?',
        answer: <p>{'There is no single schedule that fits every property. Cleaning frequency depends on the line’s condition, use, history of blockages, and other site-specific factors. If problems recur, ask whether inspection could help identify a visible cause before setting a maintenance schedule.'}</p>,
      },
      {
        question: 'Can a sewer line be cleaned through an existing cleanout?',
        answer: <p>{'Often, an accessible cleanout can provide entry to a section of the sewer line. Whether it offers suitable access depends on its location, condition, and the section that needs attention. A technician can assess access before recommending a method.'}</p>,
      },
      {
        question: 'What should I do if wastewater is backing up into my home?',
        answer: <p>{'Stop using plumbing fixtures that may add water to the affected line and contact a sewer professional to discuss the symptoms. If wastewater is actively entering the home, keep people and pets away from it and follow appropriate cleanup guidance. The cause and next step depend on where the backup is occurring and what can be safely accessed.'}</p>,
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
      title: 'Hydro-Jetting for Sewer Line Buildup and Recurring Blockages',
      primaryAction: { href: '#choose-market', label: 'Find Service in Your Area' },
      secondaryAction: { href: '/contact/', label: 'Call About a Sewer Problem' },
      intro: (
        <>
          <p>
            Hydro-jetting uses controlled high-pressure water to clean certain
            buildup, grease, debris, roots, and other material from accessible
            sewer or drain lines. It may be considered when a blockage returns
            or when buildup is limiting flow. Whether it is appropriate depends
            on the line’s condition, access, the type of material present, and
            a technician’s assessment.
          </p>
          <ul className="flex flex-col gap-2">
            {[
              {
                lead: 'Line condition matters:',
                text: 'The pipe should be evaluated before hydro-jetting is recommended, especially if its condition is unknown.',
              },
              {
                lead: 'The blockage guides the approach:',
                text: 'Different materials and causes may call for different cleaning or diagnostic methods.',
              },
              {
                lead: 'Inspection helps inform the next step:',
                text: 'A sewer camera inspection can provide visual information about accessible portions of the line and help determine whether hydro-jetting may be suitable.',
              },
            ].map((point) => (
              <li key={point.lead} className="flex gap-2">
                <span aria-hidden="true">-</span>
                <span>
                  <span className="font-semibold">{point.lead}</span> {point.text}
                </span>
              </li>
            ))}
          </ul>
          <p>
            <a href="#what-it-can-identify" className="font-semibold underline underline-offset-4">
              Not sure whether hydro-jetting is right for your line? Start with
              an evaluation so you can understand the condition of the line
              and discuss an appropriate next step.
            </a>
          </p>
        </>
      ),
    },
    process: [
      {
        title: 'Discuss the drainage concern',
        description:
          'The team gathers details about the symptoms, affected fixtures, previous cleaning or inspections, property type, and whether the issue is active or recurring. This information helps guide the initial evaluation.',
      },
      {
        title: 'Assess whether hydro-jetting is appropriate',
        description:
          'The technician considers access, the suspected restriction, and known or visible pipe conditions. If the line’s condition is uncertain, an inspection or another service may be a better starting point.',
      },
      {
        title: 'Perform the recommended cleaning service',
        description:
          'When hydro-jetting is appropriate, controlled high-pressure water is used to clean the accessible pipe section. The method depends on the line’s condition, the restriction, and access.',
      },
      {
        title: 'Review the work and next steps',
        description:
          'After the cleaning, the team explains the work performed, shares relevant observations, and discusses recommended follow-up when needed. The findings can help inform the next decision about the line.',
      },
    ],
    hub: {
      decisionFirst: true,
      approach: {
        eyebrow: 'Evidence before repair decisions',
        title: 'Understand the sewer line before deciding what comes next',
        intro:
          'The Sewer Pros provides sewer camera inspections, diagnostics, line locating, and cleaning. When a camera inspection is appropriate, we document visible conditions in accessible portions of the line and explain what the footage shows, so you can make an informed decision about next steps.',
        items: [
          {
            title: 'Inspect',
            icon: 'camera',
            description:
              'When a camera inspection is appropriate, view accessible portions of the sewer line with a professional camera.',
          },
          {
            title: 'Document',
            icon: 'document',
            description: 'Record visible conditions and preserve evidence you can review.',
          },
          {
            title: 'Explain',
            icon: 'conversation',
            description: 'Describe what the footage shows in clear, practical language.',
          },
          {
            title: 'Clean or locate when appropriate',
            icon: 'pipe',
            description:
              'Provide sewer cleaning, hydro jetting, or line locating when the findings support those services.',
          },
        ],
        note:
          'The Sewer Pros does not perform sewer repairs or replacement. If inspection findings suggest structural work may be needed, you can use the documented information when consulting a separate repair provider.',
      },
      mobileBar: true,
      defaultServiceId: 'svc-hydro-jetting',
      processIcons: ['explanation', 'checklist', 'pipe', 'document'],
      /*
        IMAGE SLOTS. Save the real files at these paths and they are used at
        the next build; until then development shows a labelled placeholder
        and production shows nothing (see
        `public/images/services/hydro-jetting/README.md` for the shot list).

        ⚠ SEVERAL OF THESE LIVE UNDER `hydro-jetting/` DIRECTLY, NOT UNDER
        `hero/`, even though that is where each build request asked for
        them. Nothing was renamed or moved to force a match; each path
        below points at wherever the real file actually is (see the
        README's "Folder mismatch" note).
      */
      images: {
        hero: '/images/services/hydro-jetting/hero/the-sewer-pros-hydro-jetting-sewer-cleanout-background-16x9.webp',
        comparison: '/images/services/hydro-jetting/the-sewer-pros-hydro-jetting-service-comparison-background-16x9.webp',
        // No `materials` backdrop: this section sits directly above the
        // limitations panel below, which is the one that goes navy per
        // its own build request. Stacking two navy sections back to back
        // is the exact anti-pattern this file's other sections warn
        // against (see `RequestServiceSection`'s and `AuthorityBand`'s
        // notes). The materials table keeps its original light ground;
        // see the completion report for this trade-off.
        request: '/images/services/hydro-jetting/the-sewer-pros-hydro-jetting-request-service-cleanout-mongoose-184-lt-background-16x9.webp',
        requestScrim: 65,
        closing: '/images/services/hydro-jetting/the-sewer-pros-hydro-jetting-closing-cta-cleanout-mongoose-184-lt-background-16x9.webp',
        definition: ['hydro-definition'],
        process: 'hydro-process',
      },
      headings: {
        process: {
          title: 'What Happens During a Hydro-Jetting Visit?',
          intro:
            'A hydro-jetting visit begins with understanding the drainage concern and the line’s condition. The recommended approach depends on access, the suspected restriction, and whether hydro-jetting is appropriate.',
        },
        faq: 'Hydro-jetting FAQs: when it’s used, safety, and what to expect',
      },
      definition: {
        id: 'what-is-hydro-jetting',
        title: 'What Is Hydro-Jetting?',
        answer:
          'Hydro-jetting is a sewer and drain cleaning method that uses controlled high-pressure water to remove certain buildup, debris, grease, roots, and blockages from accessible pipe sections. It may be considered for some recurring drainage problems, but it is not automatically appropriate for every line.',
        supporting: [
          'The right cleaning method depends on the pipe’s condition, access, and the suspected cause of the restriction. When the line’s condition is uncertain, a sewer camera inspection may help identify visible conditions before a technician recommends hydro-jetting or another next step.',
        ],
      },
      symptomRouter: {
        id: 'could-hydro-jetting-be-right',
        title: 'Could hydro-jetting be the right next step?',
        intro:
          'Hydro-jetting is not right for every blockage. What is happening and what is known about the line can help determine which service or evaluation may fit. Use these situations as a starting point.',
        items: [
          {
            status: 'Recurring issue',
            urgency: 'recurring',
            // Circular-arrow mark, reused sitewide for "keeps returning".
            icon: 'repeat',
            title: 'The clog keeps returning',
            description:
              'If a line repeatedly clogs after clearing, hydro-jetting may be considered for certain buildup or debris. The pipe’s condition and the cause of the restriction should guide the cleaning method.',
            actionLabel: 'Ask About Hydro-Jetting',
            href: '#request-hydro-jetting',
          },
          {
            status: 'Possible buildup',
            // Flowing-water mark: the closest existing icon to "buildup
            // in the flow" without introducing a near-duplicate SVG.
            icon: 'backup',
            title: 'Grease, scale, sludge, or buildup is suspected',
            description:
              'Hydro-jetting uses controlled high-pressure water to clean certain deposits from accessible pipe sections. Whether it is suitable depends on the material present and the line’s condition.',
            actionLabel: 'Explore Hydro-Jetting',
            href: '#what-hydro-jetting-may-help-with',
          },
          {
            status: 'Multiple fixtures',
            icon: 'fixtures',
            title: 'Several fixtures drain slowly or gurgle',
            description:
              'When multiple fixtures are affected, a main-line issue may need evaluation. A technician can help assess the symptoms and discuss an appropriate next step.',
            actionLabel: 'Discuss a Sewer Problem',
            pageId: id('svc-sewer-cleaning'),
          },
          {
            status: 'Possible roots',
            icon: 'restriction',
            title: 'Roots may be affecting the line',
            description:
              'Roots can be one possible cause of a sewer-line restriction. A camera inspection may show visible conditions in accessible portions of the line and help inform the cleaning approach.',
            actionLabel: 'Schedule a Sewer Camera Inspection',
            pageId: id('svc-sewer-camera-inspection'),
          },
          {
            status: 'Single fixture',
            icon: 'fixture',
            title: 'One sink or tub is clogged',
            description:
              'A clog affecting one fixture may involve its drain or branch line. Drain cleaning is designed to address many fixture-level clogs.',
            actionLabel: 'Explore Drain Cleaning',
            pageId: id('svc-drain-cleaning'),
          },
          {
            status: 'Condition unknown',
            // Reuses the camera mark already in this file's icon set
            // (used elsewhere for the process steps), rather than a new
            // one-off SVG.
            icon: 'camera',
            title: 'Pipe condition is unknown or damage is suspected',
            description:
              'When the line’s condition is uncertain, a sewer camera inspection may help show visible conditions before a cleaning method is chosen.',
            actionLabel: 'Schedule a Sewer Camera Inspection',
            pageId: id('svc-sewer-camera-inspection'),
          },
        ],
      },
      materials: {
        id: 'what-hydro-jetting-may-help-with',
        title: 'What Hydro-Jetting May Help Remove',
        intro:
          'Hydro-jetting uses controlled high-pressure water to clean certain materials from accessible sewer or drain lines. The materials below are examples of buildup or blockages it may help address. Whether it is appropriate depends on the pipe’s material, age, condition, access points, and the cause and location of the restriction.',
        columns: ['Material or condition', 'How hydro-jetting may help', 'Important qualification'],
        rows: [
          {
            item: 'Grease and sludge',
            icon: 'droplet',
            help: 'May help break up and move certain accumulated material through an accessible line.',
            qualification: 'Suitability depends on access, pipe condition, and the system.',
          },
          {
            item: 'Scale or mineral buildup',
            icon: 'scale',
            help: 'May help remove some interior buildup affecting flow.',
            qualification: 'Heavier buildup or a compromised pipe may need additional evaluation.',
          },
          {
            item: 'Loose debris',
            icon: 'debris',
            help: 'May help move certain debris through an accessible pipe section.',
            qualification: 'The source and location of the debris matter.',
          },
          {
            item: 'Root intrusion',
            icon: 'roots',
            help: 'May help address some accessible roots in a line.',
            qualification: 'Root recurrence, visible pipe damage, and line condition may call for inspection.',
          },
          {
            item: 'Organic buildup',
            icon: 'organic',
            help: 'May help restore flow when buildup contributes to a restriction.',
            qualification: 'Results depend on the cause and condition of the pipe.',
          },
        ],
      },
      limitations: {
        variant: 'brand',
        title: 'When Hydro-Jetting May Not Be the First Step',
        intro:
          'Hydro-jetting is a cleaning method, not a universal diagnosis or repair solution. If the line’s condition, blockage location, or cause of the problem is uncertain, an inspection or assessment may help inform the next step.',
        canIdentifyTitle: 'Start with an inspection or assessment when',
        canIdentify: [
          'The pipe’s condition is unknown',
          'A collapse, crack, offset, or other structural concern is suspected',
          'The line is older or may be fragile, and its condition has not been assessed',
          'The problem keeps returning without a known cause',
          'Access to the line is limited or uncertain',
          'The blockage location is unknown',
        ],
        cannotTitle: 'Consider another service path when',
        cannot: [
          {
            lead: 'One fixture is affected:',
            text: 'Drain cleaning may be a better fit for a sink or tub clog.',
            icon: 'fixture',
          },
          {
            lead: 'The sewer line needs to be viewed:',
            text: 'A sewer camera inspection may help show visible conditions in accessible portions of the line.',
            icon: 'camera',
          },
          {
            lead: 'The sewer route needs to be identified:',
            text: 'Sewer line locating may help identify the route or location.',
            icon: 'locate',
          },
          {
            lead: 'A standard accessible blockage is suspected:',
            text: 'Sewer cleaning may be appropriate, depending on the blockage and line condition.',
            icon: 'pipe',
          },
          {
            lead: 'You are buying a property:',
            text: 'A pre-purchase sewer inspection may help document visible sewer-line conditions for review.',
            icon: 'house-key',
          },
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
        title: 'Hydro-Jetting vs. Sewer Cleaning, Drain Cleaning, and Camera Inspection',
        intro:
          'These services sound alike but answer different questions. Compare what each one does and where it stops.',
        rows: [
          {
            service: 'Hydro-jetting',
            purpose:
              'Uses controlled high-pressure water to clean certain buildup and restrictions from accessible pipe sections.',
            fit: 'Buildup or recurring material may be affecting flow. It is not appropriate for every line, especially when pipe condition is unknown.',
          },
          {
            service: 'Sewer cleaning',
            purpose: 'Clears certain accessible restrictions in a main sewer line.',
            fit: 'Multiple fixtures are affected or a main-line blockage is suspected. Cleaning may not identify why a problem keeps returning.',
            pageId: id('svc-sewer-cleaning'),
          },
          {
            service: 'Drain cleaning',
            purpose: 'Addresses a clog in a fixture drain or branch line.',
            fit: 'One sink, shower, tub, or toilet is affected. It may not address a main sewer-line issue.',
            pageId: id('svc-drain-cleaning'),
          },
          {
            service: 'Sewer camera inspection',
            purpose: 'Shows visible conditions inside accessible portions of a sewer line.',
            fit: 'The cause, location, or line condition is uncertain. Inspection does not itself clean a restriction.',
            pageId: id('svc-sewer-camera-inspection'),
          },
          {
            service: 'Sewer line locating',
            purpose: 'Identifies the approximate underground route of a sewer line.',
            fit: 'The line route needs to be identified for planning or evaluation. Locating does not clean the line or inspect its interior.',
            pageId: id('svc-sewer-line-locating'),
          },
        ],
        note: 'If sewage is actively backing up, contact the team to discuss the immediate issue and whether cleaning or assessment should come first.',
      },
      marketRouter: {
        id: 'choose-market',
        title: 'Find Hydro-Jetting Service in Your Market',
        intro:
          'Choose a market to see local hydro-jetting service details and ways to request service. The appropriate cleaning method depends on the line’s condition, the suspected restriction, and access.',
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
        surface: 'muted',
        title: 'Hydro-Jetting Guidance for Different Property Needs',
        intro:
          'Property managers, HOA communities, home inspectors, and real estate agents may encounter different sewer and drainage concerns. These resources explain what to consider and which evaluation or cleaning service may fit the situation. Hydro-jetting is not appropriate for every line; the pipe’s condition and the cause of the restriction matter.',
        items: [
          {
            pageId: id('aud-property-managers'),
            audience: 'Property Managers',
            icon: 'building',
            description:
              'Coordinate sewer and drain concerns across occupied or multi-unit properties. These resources can help you organize recurring issues, share observations with owners or maintenance teams, and consider whether inspection or cleaning should come first.',
            actionLabel: 'Property Manager Support',
          },
          {
            pageId: id('aud-hoa-communities'),
            audience: 'HOA Communities',
            icon: 'community',
            description:
              'Shared drainage concerns can affect more than one home or recur across a community. Learn what information to gather and how inspection or cleaning options may help inform the next step.',
            actionLabel: 'HOA Community Support',
          },
          {
            pageId: id('aud-home-inspectors'),
            audience: 'Home Inspectors',
            icon: 'checklist',
            description:
              'When a sewer concern comes up during a property evaluation, these resources can help clarify when a camera inspection, cleaning, or further assessment may be relevant.',
            actionLabel: 'Working with Home Inspectors',
          },
          {
            pageId: id('aud-real-estate-agents'),
            audience: 'Real Estate Agents',
            icon: 'house-key',
            description:
              'Help buyers and sellers understand when a sewer camera inspection or cleaning discussion may be relevant to a transaction. The appropriate next step depends on the visible conditions and the line’s situation.',
            actionLabel: 'Transaction Support',
          },
        ],
      },
      evidence: {
        id: 'hydro-jetting-field-experience',
        title: 'A condition-aware approach to sewer-line cleaning',
        intro:
          'The right cleaning method depends on what is happening inside the accessible line. Inspection findings, observed symptoms, access conditions, and property context can help determine whether hydro-jetting is an appropriate next step.',
        caveat:
          'These examples come from individual properties with identifying details removed. Findings and methods vary by line, access, and situation.',
        items: [
          {
            slot: 'hydro-equipment',
            title: 'Equipment used by the team',
            description:
              'The technician selects equipment based on the line, access, and suspected restriction. Equipment choice is part of the assessment; it does not by itself determine which cleaning method is appropriate.',
          },
          {
            slot: 'hydro-monitor',
            title: 'Reviewing visible line conditions',
            description:
              'When a camera is used, the technician can review visible conditions on a monitor. The view is limited to the portions of the line the camera can reach, and findings or cleaning methods may vary by line, access, and situation.',
          },
        ],
      },
      request: {
        id: 'request-hydro-jetting',
        title: 'Request hydro-jetting service',
        intro: [
          'Tell us what you’ve noticed, which fixtures are affected, and whether the problem has returned after previous clearing. Include the property location and any details that may help us understand the situation. We’ll review your request and help determine whether hydro jetting may be appropriate.',
          'The Sewer Pros provides sewer inspection, cleaning, and diagnostic services in St. Louis, San Diego, and Las Vegas.',
        ],
      },
      closing: {
        title: 'Get clear guidance on the right sewer-line cleaning method',
        intro: [
          'Tell us what you’ve noticed, which fixtures are affected, and whether the problem has returned after previous clearing. Select your market and share any details about the property or sewer line that may help us understand the issue.',
          'We’ll review the information you provide and help identify a suitable next step. Depending on the reported symptoms and available information, that may include discussing hydro jetting, sewer cleaning, or a camera inspection. Service suitability and availability depend on the property and the condition of the line.',
        ],
      },
    },
    faq: [
      {
        question: 'What is hydro jetting used for?',
        answer: (
          <p>
            Hydro jetting uses high-pressure water to clean buildup from the
            inside of a sewer or drain line. It may help clear grease, sludge,
            and other debris. Whether it’s appropriate depends on the line’s
            condition and the blockage.
          </p>
        ),
      },
      {
        question: 'Do I need a camera inspection before hydro jetting?',
        answer: (
          <p>
            Not always. A camera inspection may help assess accessible
            portions of a line when its condition or the cause of a blockage
            is unclear. The appropriate approach depends on the reported
            symptoms and available information.
          </p>
        ),
      },
      {
        question: 'Is hydro jetting safe for older sewer pipes?',
        answer: (
          <p>
            It depends on the pipe’s material and condition. Older, damaged,
            or deteriorated pipes may need additional evaluation before
            high-pressure cleaning is considered. Hydro jetting is not
            suitable for every sewer line.
          </p>
        ),
      },
      {
        question: 'Can hydro jetting fix a broken sewer line?',
        answer: (
          <p>
            No. Hydro jetting is a cleaning method; it does not repair broken,
            collapsed, or structurally damaged pipes. If visible conditions
            suggest damage, the findings can help you decide what to discuss
            with a separate repair provider.
          </p>
        ),
      },
      {
        question: 'Can hydro jetting remove tree roots?',
        answer: (
          <p>
            Hydro jetting may clear some root material from a line, depending
            on the conditions. It does not stop roots from returning or
            repair openings where roots entered.
          </p>
        ),
      },
      {
        question: 'Can hydro jetting help a multi-unit or managed property?',
        answer: (
          <p>
            It may be considered for shared sewer lines at multi-unit or
            managed properties. The line layout, reported symptoms, access,
            and pipe condition help determine whether the service is
            appropriate.
          </p>
        ),
      },
      {
        question: 'What is the difference between hydro jetting and snaking?',
        answer: (
          <p>
            Snaking uses a rotating cable to break through or retrieve some
            obstructions. Hydro jetting uses pressurized water to clean
            buildup from pipe walls. The suitable method depends on the
            blockage and the line’s condition.
          </p>
        ),
      },
      {
        question: 'How do you determine whether hydro jetting is appropriate?',
        answer: (
          <p>
            We consider the reported symptoms, affected fixtures, prior
            clearing, access, and any available information about the line.
            When more information is needed, an inspection may help guide the
            decision.
          </p>
        ),
      },
      {
        question: 'What should I expect during a hydro-jetting service visit?',
        answer: (
          <p>
            The service approach depends on the property, line access, and
            reported issue. Share which fixtures are affected, whether the
            problem has returned after prior clearing, and any relevant
            inspection findings when requesting service.
          </p>
        ),
      },
      {
        question: 'How is hydro jetting different from routine drain cleaning?',
        answer: (
          <p>
            Routine drain cleaning may address a blockage in an individual
            fixture or branch drain. Hydro jetting is a high-pressure water
            cleaning method that may be considered for accessible sewer or
            drain lines when conditions support its use.
          </p>
        ),
      },
      {
        question: 'How often should a sewer line be hydro jetted?',
        answer: (
          <p>
            There is no single schedule that fits every property. The need
            depends on the line, its use, and recurring symptoms. Hydro
            jetting should be considered based on the line’s condition and
            service history.
          </p>
        ),
      },
      {
        question: 'Does hydro jetting prevent future sewer backups?',
        answer: (
          <p>
            It can remove certain types of buildup, but it cannot guarantee
            that backups will not return. The cause of recurring problems and
            the condition of the line affect what steps may help.
          </p>
        ),
      },
      {
        question: 'What information should I provide when requesting hydro jetting?',
        answer: (
          <p>
            Tell us what you’ve noticed, which fixtures are affected, whether
            the issue has returned after prior clearing, and the property
            location. You can also share relevant camera inspection findings
            if available.
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
    /*
      ⚠ THIS PAGE IS THE COMBINED DECISION HUB, NOT A CITY PAGE. Market
      targeting lives on the market and service + location pages; here the
      three markets are routed to, never listed city by city. `hub` switches
      the page to `ServiceHubTemplate`; `decisionFirst` puts the comparison
      ahead of the market router.

      ⚠ THE ORDER OF WORK IS NEVER FIXED IN COPY. Inspection may come before
      cleaning, after it, or both, depending on the problem. Copy never says
      "clean first" or "inspect first" as a rule.

      ⚠ WHAT THIS COPY DOES NOT CLAIM. No pricing, timeframe, guarantee,
      certification, availability window, emergency or same-day service,
      same-visit completion, equipment specification, or review metric. No
      customer deliverable is promised (video, written report, photos)
      because none is documented for every market, so the deliverables panel
      is deliberately absent. No case study, named outcome, or video exists,
      so none is shown. Repair stays educational: neither service changes
      pipe condition (CLAUDE.md §9, §24).

      OPEN VALIDATION before any of this is strengthened: whether technicians
      inspect before cleaning in all cases; whether cleaning is completed in
      the same visit; hydro jetting availability per market; what footage,
      report or photos are provided; which conditions prompt referral.
    */
    seoTitle: 'Sewer Camera Inspection and Cleaning for Recurring Drainage Problems',
    metaDescription:
      'Learn how a sewer camera inspection and sewer cleaning can work together for recurring clogs, slow drains, and unclear sewer problems. Serving St. Louis, San Diego, and Las Vegas.',
    hero: {
      eyebrow: 'Sewer Diagnostics and Cleaning',
      title: 'Sewer Camera Inspection and Cleaning for Recurring Drainage Problems',
      primaryAction: { href: '#choose-market', label: 'Choose Your Location' },
      secondaryAction: { href: '/contact/', label: 'Call About a Sewer Problem' },
      intro: (
        <>
          <p>
            Recurring clogs, multiple slow drains, and sewer backups can have
            different causes. Where access and conditions allow, a sewer
            camera inspection can help show visible conditions inside the
            line and provide useful information about what may be
            contributing to the problem.
          </p>
          <p>
            After reviewing the findings, The Sewer Pros can discuss whether
            sewer cleaning is appropriate based on the observed issue, pipe
            condition, and access. Cleaning is not the right answer for every
            situation, so understanding what is visible in the line can help
            inform the next step.
          </p>
          <p>
            <a href="#cleaning-inspection-compared" className="font-semibold underline underline-offset-4">
              Not sure whether you need inspection, sewer cleaning, or hydro
              jetting?
            </a>
          </p>
        </>
      ),
    },
    process: [
      {
        title: 'Discuss symptoms and property context',
        description:
          'The team gathers information about the affected fixtures, recurring clogs or backups, prior service, property type, available access, and timing. These details help identify a practical starting point.',
      },
      {
        title: 'Assess the appropriate starting point',
        description:
          'Depending on the symptoms and access, the next step may be a sewer camera inspection, sewer cleaning, hydro jetting, drain cleaning, or another service. The right approach depends on the situation.',
      },
      {
        title: 'Inspect accessible line conditions',
        description:
          'When appropriate, a sewer camera is used to review accessible portions of the line. Inspection may take place before cleaning, after cleaning, or both, depending on the conditions and purpose of the visit.',
      },
      {
        title: 'Clean when appropriate or discuss the next step',
        description:
          'If cleaning is suitable for the observed conditions, the team can explain the available approach. If another issue is visible or more evaluation may be needed, the team can discuss practical next steps. The camera’s view is limited to portions of the line that are accessible and visible.',
      },
    ],
    showDifferentiator: true,
    hub: {
      decisionFirst: true,
      mobileBar: true,
      defaultServiceId: 'svc-sewer-cleaning-camera-inspection',
      processIcons: ['explanation', 'checklist', 'camera', 'document'],
      relatedColumns: 4,
      /*
        ⚠ `reading` (42rem), NOT THE HUB DEFAULT `narrow` (38rem). This
        hero's H1 is long enough ("Sewer Camera Inspection and Cleaning
        for Recurring Drainage Problems") that 38rem wrapped it into a
        narrow, tall stack instead of a balanced block. Every other hub
        keeps the 38rem default.
      */
      heroCopyWidth: 'reading',
      /*
        IMAGE SLOTS. Save the real files at these paths and they are used at
        the next build; until then development shows a labelled placeholder
        and production shows nothing (see
        `public/images/services/sewer-cleaning-camera-inspection/README.md`
        for the shot list).
      */
      images: {
        hero: '/images/services/sewer-cleaning-camera-inspection/hero/the-sewer-pros-sewer-camera-inspection-cleaning-cleanout-hero-background-16x9.webp',
        comparison:
          '/images/services/sewer-cleaning-camera-inspection/the-sewer-pros-service-comparison-seesnake-cleanout-background-16x9.webp',
        request:
          '/images/services/sewer-cleaning-camera-inspection/the-sewer-pros-sewer-cleaning-camera-inspection-request-cta-background-16x9.webp',
        closing:
          '/images/services/sewer-cleaning-camera-inspection/the-sewer-pros-sewer-cleaning-camera-inspection-request-final-cta-background-16x9.webp',
        definition: ['combined-definition'],
        process: 'combined-process',
      },
      headings: {
        process: 'What Happens During a Sewer Camera Inspection and Cleaning Visit?',
        faq: 'Sewer Cleaning and Camera Inspection FAQs',
      },
      approach: {
        eyebrow: 'Evidence before repair decisions',
        title: 'Understand the Sewer Line Before Deciding What Comes Next',
        intro:
          'The Sewer Pros provides sewer camera inspections, diagnostics, and cleaning. When a camera inspection is appropriate, we review accessible portions of the line and explain what the footage shows to help you make an informed decision about next steps.',
        items: [
          {
            title: 'Inspect',
            icon: 'camera',
            description:
              'When a camera inspection is appropriate, review accessible portions of the sewer line with a professional camera. What can be seen depends on line access and conditions.',
          },
          {
            title: 'Document',
            icon: 'document',
            description:
              'Record visible conditions and preserve information you can review. Ask what documentation is available for your visit.',
          },
          {
            title: 'Explain',
            icon: 'conversation',
            description:
              'Describe what the footage shows in clear, practical language. An inspection may help assess visible conditions, but it cannot guarantee that every issue is accessible or detectable.',
          },
          {
            title: 'Clean When Appropriate',
            icon: 'pipe',
            description:
              'Provide sewer cleaning when the findings, pipe condition, and access support that service. Cleaning may address certain restrictions, but it does not repair damaged pipe or resolve every cause of a drainage problem.',
          },
        ],
        note:
          'The Sewer Pros does not perform sewer repairs or replacement. If inspection findings suggest that structural work may be needed, you can use the documented information when consulting a separate repair provider.',
      },
      secondOpinion: {
        eyebrow: 'Independent Sewer Inspection & Second Opinions',
        title: 'Before Approving Major Sewer Work, Get an Independent Inspection',
        intro: [
          'A sewer backup or major repair recommendation can make a decision feel urgent. The Sewer Pros provides sewer inspections and cleaning, but does not perform sewer repairs or replacements. An independent camera inspection can help you review visible conditions in accessible portions of the line before deciding what to do next.',
        ],
        steps: [
          {
            body: 'A sewer camera can be used to examine accessible portions of the line for visible conditions such as blockages, roots, offsets, or deterioration. What can be seen depends on access and line conditions.',
          },
          {
            body: 'The inspection process may provide visual information about the portions of the line the camera can reach. Ask what documentation is available for your visit, and how the findings will be explained.',
          },
          {
            body: 'Use the observations to consider whether cleaning, monitoring, or another qualified opinion may be appropriate. The inspection can inform your decision, but it cannot guarantee that every condition is visible or determine the right outcome for every situation.',
          },
        ],
        calloutOne: {
          title: 'Why an independent opinion matters',
          body: [
            'The Sewer Pros does not perform sewer repair or replacement. Our role is to inspect accessible portions of the line, explain visible findings, and provide sewer cleaning when appropriate. This lets you consider the observed conditions without receiving a repair or replacement proposal from us.',
          ],
        },
        calloutTwo: {
          title: 'Review a major recommendation before deciding',
          body: [
            'If you have received a recommendation for substantial sewer work, a camera inspection may help you better understand what is visible in the accessible line. A second opinion can add information for your decision; it does not guarantee that another contractor’s assessment is right or wrong.',
          ],
        },
        ctaLabel: 'Get an Independent Second Opinion',
        ctaNote:
          'Already received a repair recommendation? Bring any available inspection information so the team can discuss what can be reviewed.',
      },
      definition: {
        id: 'what-is-inspection-and-cleaning',
        label: 'Quick answer',
        title: 'What is a sewer camera inspection and cleaning visit?',
        answer:
          'A sewer camera inspection and cleaning visit combines diagnostic evaluation with an appropriate cleaning approach when conditions support it. A technician uses a specialized camera to view accessible portions of the sewer line and look for visible restrictions, buildup, root intrusion, pipe deterioration, or other conditions that may affect drainage. Based on what can be observed, the technician may recommend sewer cleaning, hydro jetting, further evaluation, or another practical next step.',
        supporting: [
          'The two services answer different questions. Cleaning may address a restriction; a camera inspection can help explain visible conditions when the restriction returns or the cause is unclear.',
        ],
      },
      symptomRouter: {
        id: 'what-is-happening',
        title: 'What Is Happening With Your Drains or Sewer Line?',
        intro:
          'Choose the situation that best matches what you’re noticing. These symptoms can help point you toward a service to ask about, but they do not confirm the cause. When several drains are affected or a problem keeps returning, an inspection may help assess visible conditions in the accessible sewer line.',
        items: [
          {
            status: 'Multiple fixtures',
            icon: 'fixtures',
            title: 'Multiple drains are slow, gurgling, or backing up',
            description:
              'When more than one fixture is affected, the issue may involve the main sewer line rather than a single drain. Sewer camera inspection and cleaning may both be part of the assessment, depending on what is visible and accessible.',
            actionLabel: 'Discuss a sewer problem',
            href: '#request-service',
          },
          {
            status: 'Recurring issue',
            urgency: 'recurring',
            icon: 'repeat',
            title: 'A clog keeps returning after clearing',
            description:
              'Clearing a clog may address an immediate restriction without explaining why it keeps coming back. A camera inspection may help show visible conditions in the accessible line and inform the next step.',
            actionLabel: 'Inspect a recurring clog',
            href: '#request-service',
          },
          {
            status: 'Active issue',
            urgency: 'active',
            icon: 'backup',
            title: 'Wastewater is actively backing up',
            description:
              'Active wastewater backup needs prompt attention. Call to discuss what is happening, which fixtures are affected, and whether cleaning or an assessment should come first.',
            actionLabel: 'Call about an active backup',
            pageId: id('core-contact'),
          },
          {
            status: 'Single fixture',
            icon: 'fixture',
            title: 'One fixture is clogged',
            description:
              'A clog affecting one sink, tub, or toilet may be limited to that fixture’s drain or branch line. Drain cleaning is designed to address localized drain clogs; the appropriate approach depends on the situation.',
            actionLabel: 'Explore drain cleaning',
            pageId: id('svc-drain-cleaning'),
          },
          {
            status: 'Possible cause',
            icon: 'restriction',
            title: 'Roots or pipe damage may be involved',
            description:
              'Roots, cracks, offsets, or deterioration may affect drainage. A sewer camera can show visible conditions in accessible portions of the line, helping inform whether further evaluation is appropriate.',
            actionLabel: 'Schedule a camera inspection',
            pageId: id('svc-sewer-camera-inspection'),
          },
          {
            status: 'Planning ahead',
            urgency: 'planning',
            icon: 'home',
            title: 'A home purchase or sale is involved',
            description:
              'A pre-purchase sewer camera inspection can document visible conditions in the accessible sewer line during a real estate transaction. Findings can help buyers and sellers make informed decisions about next steps.',
            actionLabel: 'Schedule a buyer sewer inspection',
            pageId: id('svc-pre-purchase-sewer-inspection'),
          },
        ],
      },
      materials: {
        id: 'why-both',
        title: 'Why Recurring Sewer Problems May Need Both Inspection and Cleaning',
        intro:
          'Cleaning may help address a restriction. When a problem returns, the location is uncertain, or pipe condition may be affecting drainage, a camera inspection can help assess visible conditions in accessible portions of the sewer line. The findings can help inform whether cleaning alone may be a reasonable next step.',
        tilesHeading: 'Conditions a Camera Inspection May Show',
        tilesIntro: 'Where the line is accessible, a sewer camera inspection may reveal:',
        tiles: [
          { label: 'Visible blockages', icon: 'blockage' },
          { label: 'Root intrusion', icon: 'roots' },
          { label: 'Buildup or debris', icon: 'debris' },
          { label: 'Cracks or deterioration', icon: 'crack' },
          { label: 'Separated or offset connections', icon: 'offset' },
          { label: 'Low areas, where visible', icon: 'low-point' },
          { label: 'Obstructions', icon: 'obstruction' },
          { label: 'The condition of accessible line sections', icon: 'camera' },
        ],
        columns: ['Situation', 'Cleaning alone may help with', 'Inspection can help clarify'],
        rows: [
          {
            item: 'Material in the line',
            help: 'Certain accessible buildup, roots, debris, grease, or soft blockages',
            qualification:
              'Whether visible conditions may be contributing to repeated restrictions.',
          },
          {
            item: 'Restricted flow',
            help: 'Restoring flow where material in the line is restricting drainage',
            qualification: 'The approximate location and nature of a visible issue.',
          },
          {
            item: 'Accessible line sections',
            help: 'Removing certain material from an accessible line',
            qualification:
              'Signs of cracks, separations, offsets, deterioration, or obstructions where visible.',
          },
          {
            item: 'Maintenance needs',
            help: 'Maintenance-oriented cleaning',
            qualification: 'Whether cleaning alone appears to be a reasonable next step.',
          },
        ],
        note: 'A sewer camera inspection reviews accessible portions of a sewer line and may identify visible conditions. It cannot guarantee that every issue is visible, accessible, or detectable.',
      },
      limitations: {
        variant: 'brand',
        title: 'What Sewer Cleaning Can and Cannot Address',
        intro:
          'The cleaning method depends on the condition of the pipe, access to the line, the suspected material, and what can be addressed safely and effectively. Sewer cleaning may remove some material from accessible pipe sections, but it does not repair damaged pipes or resolve every cause of a drainage problem.',
        canIdentifyTitle: 'Sewer Cleaning May Help Address',
        canIdentify: [
          'Grease buildup',
          'Sludge and organic material',
          'Soft blockages and loose debris',
          'Some root intrusion',
          'Scale or mineral buildup',
          'Flow restrictions in accessible pipe sections',
        ],
        cannotTitle: 'Inspection and Cleaning May Not Resolve',
        cannot: [
          'A collapsed or severely damaged pipe',
          'Offset, separated, or broken connections',
          'Sections the camera or cleaning equipment cannot reach',
          'The underground route of a sewer line; sewer line locating is used to identify the route',
          'Problems outside the accessible sewer line, such as a municipal system issue',
          'Hidden defects, because not every condition can be seen or detected',
        ],
        related: {
          lead: 'Sewer camera inspection can help assess visible conditions in accessible portions of the line. It cannot guarantee that every issue is visible, accessible, or detectable. To learn what a camera inspection may show,',
          pageId: id('svc-sewer-camera-inspection'),
          label: 'see the sewer camera inspection page.',
        },
      },
      comparison: {
        id: 'cleaning-inspection-compared',
        columns: ['Service', 'Main purpose', 'Often appropriate when'],
        title: 'Compare Sewer Cleaning, Camera Inspection, and Related Services',
        intro:
          'These services answer different questions. Compare their main purposes and when each may be appropriate to help identify what to ask about. Symptoms can suggest a starting point, but they do not confirm the cause.',
        rows: [
          {
            service: 'Sewer camera inspection and cleaning',
            purpose:
              'Assess visible conditions in accessible portions of the line and address an appropriate restriction when warranted.',
            fit: 'A problem is recurring, unclear, or affecting multiple fixtures. Inspection cannot guarantee that every issue will be found.',
          },
          {
            service: 'Sewer cleaning',
            purpose: 'Remove certain restrictions from accessible portions of a main sewer line.',
            fit: 'A main-line blockage or buildup is suspected. Cleaning may not explain why the problem returns.',
            pageId: id('svc-sewer-cleaning'),
          },
          {
            service: 'Sewer camera inspection',
            purpose: 'Review visible conditions inside accessible portions of a sewer line.',
            fit: 'Pipe condition, blockage location, or the cause is uncertain. Inspection does not itself remove a restriction.',
            pageId: id('svc-sewer-camera-inspection'),
          },
          {
            service: 'Hydro jetting',
            purpose: 'Clean certain buildup using controlled high-pressure water.',
            fit: 'Recurring or heavier material may call for a more intensive cleaning method. It is not suitable for every pipe or condition.',
            pageId: id('svc-hydro-jetting'),
          },
          {
            service: 'Drain cleaning',
            purpose: 'Clear a fixture or branch-drain clog.',
            fit: 'One fixture is affected. It may not address a main-line issue.',
            pageId: id('svc-drain-cleaning'),
          },
          {
            service: 'Sewer line locating',
            purpose: 'Identify the approximate path of a sewer line.',
            fit: 'The line’s route is needed for planning. Locating does not inspect inside or clean the line.',
            pageId: id('svc-sewer-line-locating'),
          },
        ],
        note: 'If wastewater is actively backing up, contact the team to discuss the immediate issue and whether cleaning or assessment should come first.',
      },
      marketRouter: {
        id: 'choose-market',
        title: 'Find Sewer Camera Inspection and Cleaning in Your Market',
        intro:
          'Choose your market to view local sewer inspection and cleaning details and ways to request service.',
        items: [
          {
            pageId: id('market-st-louis-mo'),
            description:
              'Explore sewer camera inspection and cleaning availability across the St. Louis region.',
            actionLabel: 'Inspection and Cleaning in St. Louis',
          },
          {
            pageId: id('market-san-diego-ca'),
            description:
              'Explore sewer camera inspection and cleaning availability across the San Diego region.',
            actionLabel: 'Inspection and Cleaning in San Diego',
          },
          {
            pageId: id('market-las-vegas-nv'),
            description:
              'Explore sewer camera inspection and cleaning availability across the Las Vegas Valley.',
            actionLabel: 'Inspection and Cleaning in Las Vegas',
          },
        ],
      },
      audiences: {
        id: 'inspection-cleaning-for-your-situation',
        surface: 'muted',
        title: 'Sewer Inspection and Cleaning Guidance for Property Professionals and Buyers',
        intro:
          'Buyers and property professionals may need different information when a sewer concern comes up. Choose the page that best matches your role or property decision.',
        items: [
          {
            pageId: id('aud-home-buyers'),
            audience: 'Home buyers',
            icon: 'home',
            description:
              'Understand visible sewer-line conditions before closing, including what sewer cleaning may and may not address.',
            actionLabel: 'Home buyer sewer inspections',
          },
          {
            pageId: id('aud-home-inspectors'),
            audience: 'Home inspectors',
            icon: 'checklist',
            description:
              'Coordinate a specialized sewer inspection around property findings and the needs of the inspection process.',
            actionLabel: 'Working with home inspectors',
          },
          {
            pageId: id('aud-real-estate-agents'),
            audience: 'Real estate agents',
            icon: 'house-key',
            description:
              'Support buyer and seller transaction workflows by identifying an appropriate sewer-service path.',
            actionLabel: 'Transaction support',
          },
          {
            pageId: id('aud-property-managers'),
            audience: 'Property managers',
            icon: 'building',
            description:
              'Coordinate recurring drainage concerns and maintenance needs at occupied properties.',
            actionLabel: 'Property manager support',
          },
        ],
      },
      evidence: {
        id: 'inspection-cleaning-field-evidence',
        title: 'Real Field Evidence Helps Inform the Next Step',
        columns: 3,
        intro:
          'Seeing inside an accessible portion of a sewer line can help inform the next step. These examples come from field work, with identifying details removed. Equipment, conditions, and findings can vary by line, access, and situation.',
        caveat:
          'These are examples from individual properties. Findings and methods vary by line, access, and situation.',
        items: [
          {
            slot: 'combined-equipment',
            title: 'Inspection and Cleaning Equipment in the Field',
            description:
              'The equipment used depends on the line, the suspected restriction, and what is known or visible about the accessible section. The appropriate method depends on access and pipe conditions.',
          },
          {
            slot: 'combined-monitor-buildup',
            title: 'Reviewing Buildup on a Monitor',
            description:
              'When a sewer camera is used, the monitor shows conditions in the portions of the line the camera can reach. The view may help identify visible buildup or other conditions that could be affecting drainage.',
          },
          {
            slot: 'combined-monitor-clear',
            title: 'Reviewing a Cleaned Section',
            description:
              'After cleaning, a camera may help show the visible condition of the accessible pipe section. The view is limited to the area the equipment can reach, and it may not reveal every condition.',
          },
        ],
      },
      request: {
        id: 'request-inspection-and-cleaning',
        title: 'Request Sewer Cleaning or Camera Inspection',
        intro: [
          'Tell us what you’ve noticed, which fixtures or areas are affected, and where the property is located. If the problem keeps returning, include when it started and whether you have requested service for it before.',
          'Choose the service you’re interested in, or describe the issue if you’re unsure whether sewer cleaning, a camera inspection, or another service may be appropriate. The next step depends on the symptoms, access to the line, and conditions observed.',
        ],
      },
      closing: {
        title: 'Request Sewer Cleaning or Camera Inspection',
        intro: [
          'Tell us what you’ve noticed, which fixtures or areas are affected, and where the property is located. If the problem keeps returning, include when it started and whether you have requested service for it before.',
          'Choose the service you’re interested in, or describe the issue if you’re unsure whether sewer cleaning, a camera inspection, or another service may be appropriate. The next step depends on the symptoms, access to the line, and conditions observed.',
        ],
      },
    },
    faq: [
      {
        question: 'Do I need a camera inspection before sewer cleaning?',
        answer: (
          <p>
            Not always. A camera inspection can be useful when the cause of a
            recurring problem is unclear or when visible conditions in an
            accessible sewer line need to be documented. Whether inspection is
            appropriate before cleaning depends on the symptoms, access, and
            circumstances.
          </p>
        ),
      },
      {
        question: 'What happens during a sewer camera inspection?',
        answer: (
          <p>
            A sewer camera is guided through an accessible line to view and
            document its interior. The footage can show visible conditions
            along the inspected portion of the pipe and help inform next
            steps. The inspection is limited by access and what the camera can
            see.
          </p>
        ),
      },
      {
        question: 'Can sewer cleaning remove tree roots?',
        answer: (
          <p>
            Cleaning may remove some material from a line, but results depend
            on the roots, pipe condition, access, and equipment used. Cleaning
            does not repair damage to the pipe or prevent roots from
            returning.
          </p>
        ),
      },
      {
        question: 'Can a camera inspection help investigate a recurring clog?',
        answer: (
          <p>
            Yes. A camera inspection can document visible conditions in the
            accessible line that may be contributing to a recurring clog. The
            footage may help guide further evaluation, though it may not
            identify every cause.
          </p>
        ),
      },
      {
        question: 'What is the difference between hydro jetting and sewer cleaning?',
        answer: (
          <p>
            Sewer cleaning is a general term for removing suitable buildup or
            obstructions from a sewer line. Hydro jetting is one cleaning
            method that uses high-pressure water. The appropriate method
            depends on the line’s observed condition and cleaning objective.
          </p>
        ),
      },
      {
        question: 'How do you determine whether hydro jetting is appropriate?',
        answer: (
          <p>
            The decision depends on the sewer line’s condition, access, and
            the type of buildup being addressed. An inspection may help
            document visible conditions when needed. Hydro jetting is not
            suitable for every line or situation.
          </p>
        ),
      },
      {
        question: 'What are common signs of a main sewer line problem?',
        answer: (
          <p>
            Possible signs include repeated backups, multiple slow-draining
            fixtures, or wastewater backing up at a low drain. These symptoms
            can have different causes, so an inspection may help document
            conditions in an accessible sewer line.
          </p>
        ),
      },
      {
        question: 'Does sewer cleaning repair a broken sewer line?',
        answer: (
          <p>
            No. Sewer cleaning removes suitable buildup or obstructions; it
            does not repair a broken or damaged pipe. The Sewer Pros provides
            sewer inspection, diagnostics, and cleaning services, but does not
            perform sewer repairs or replacement.
          </p>
        ),
      },
      {
        question: 'Can I request service for a rental or multi-unit property?',
        answer: (
          <p>
            Yes. Include the property location, the affected fixtures or
            units, and any recurring symptoms when you submit a request. The
            team can discuss the information provided and an appropriate next
            step.
          </p>
        ),
      },
      {
        question:
          'What information should I provide when requesting sewer inspection or cleaning?',
        answer: (
          <p>
            Share the property location, which fixtures are affected, what
            symptoms you’ve noticed, and whether the problem has happened
            before. If you are unsure which service to request, describe the
            issue so the team can discuss possible next steps.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-cleaning'),
      id('svc-sewer-camera-inspection'),
      id('svc-hydro-jetting'),
      id('svc-recurring-sewer-backup-diagnosis'),
    ],
    relatedTitle: 'Related Sewer Inspection and Cleaning Services',
    relatedIntro:
      'Explore related services that may help you understand or address a sewer line concern. The right next step depends on the symptoms, access to the line, and conditions observed during inspection.',
    relatedDescriptions: {
      [id('svc-sewer-cleaning')]:
        'Sewer cleaning can remove suitable buildup or obstructions from a line. When the cause of a recurring problem is unclear, a camera inspection can help document visible conditions before cleaning.',
      [id('svc-sewer-camera-inspection')]:
        'A sewer camera inspection sends a camera through an accessible line to document visible conditions. The footage can help clarify what is present and inform a decision about next steps.',
      [id('svc-hydro-jetting')]:
        'Hydro jetting uses high-pressure water to clean eligible sewer lines. Whether it is appropriate depends on the line’s observed condition and the cleaning objective.',
      [id('svc-recurring-sewer-backup-diagnosis')]:
        'Repeated sewer backups can have different contributing conditions. An inspection can document what is visible in the accessible line and help guide further evaluation.',
    },
    cta: {
      title: 'Get clear next steps for a recurring sewer or drainage problem',
      body: 'Choose your market to request sewer cleaning, ask about a camera inspection, or discuss which service path may be appropriate for your property.',
    },
  },

  /* ======================================================================
     Sewer Line Locating — 14 §33
     ====================================================================== */
  [id('svc-sewer-line-locating')]: {
    /*
      ⚠ THIS PAGE IS THE SERVICE HUB, NOT A CITY PAGE. `hub` switches the
      page to `ServiceHubTemplate`. Markets are routed to, never listed.

      ⚠ WHAT THIS COPY DOES NOT CLAIM. Locating is described as the
      approximate route and position of a private sewer line. Never
      "exact", "guaranteed", depth precision, utility clearance, permit
      handling, or any equivalence with 811 or public utility marking. No
      pricing, timeframe, emergency or same-day service, equipment
      specification or deliverable is promised. No case study or video
      exists, so none is rendered. Repair stays educational (CLAUDE.md §9,
      §24). Confirm the actual equipment and method with the business
      before adding any method detail.
    */
    seoTitle: 'Sewer Line Locating for Property Projects',
    metaDescription:
      'Sewer line locating helps identify the approximate route of a private sewer line before excavation, landscaping, or repair planning. Serving St. Louis, San Diego, and Las Vegas.',
    hero: {
      eyebrow: 'Sewer Diagnostics and Project Planning',
      title: 'Sewer Line Locating for Property Projects and Planning',
      primaryAction: { href: '#request-service', label: 'Request Sewer Line Locating' },
      secondaryAction: { href: '#choose-market', label: 'Choose Your Location' },
      intro: (
        <>
          <p>
            Sewer line locating helps identify the approximate route and
            position of an underground sewer line. This information can help
            property owners, contractors, and project teams plan work near
            the line and make more informed decisions before landscaping,
            construction, or other site work.
          </p>
          <p>
            When the line&rsquo;s route is uncertain, locating may help
            narrow down where it runs across a property. The findings can
            support planning and help determine whether a sewer camera
            inspection would provide useful information about the
            line&rsquo;s interior condition.
          </p>
          <p>
            Sewer line locating provides an estimate based on accessible
            conditions and the equipment used. Results can vary, and
            locating does not identify every buried utility or replace
            required utility marking before excavation.
          </p>
          <p>
            Need to inspect the inside of the sewer line?{' '}
            <Link
              href="/services/sewer-camera-inspection/"
              className="font-semibold underline underline-offset-4"
            >
              Learn about our sewer camera inspection service.
            </Link>
          </p>
        </>
      ),
    },
    process: [
      {
        title: 'Review the project and property need',
        description:
          'The team reviews the planned work, approximate work area, timeline, and reason you need sewer line location information.',
      },
      {
        title: 'Confirm access and the likely approach',
        description:
          'The technician reviews available access points and discusses an appropriate approach based on the site and request. Depending on access and the project, locating, a camera inspection, or a separately arranged combination may be considered.',
      },
      {
        title: 'Locate accessible line sections',
        description:
          'Locating equipment may be used at accessible points to estimate the route or position of accessible sewer line sections. Results depend on access and site conditions and may not cover the entire line.',
      },
      {
        title: 'Review available findings and planning considerations',
        description:
          'The technician explains the available location information and relevant planning considerations. Locating provides approximate route information; it does not confirm exact depth, identify every underground utility, or establish pipe condition.',
      },
    ],
    hub: {
      decisionFirst: true,
      mobileBar: true,
      defaultServiceId: 'svc-sewer-line-locating',
      processIcons: ['explanation', 'access', 'pipe', 'document'],
      processImageLayout: 'row-below',
      relatedColumns: 4,
      /*
        IMAGE SLOTS. Save the real files at these paths and they are used at
        the next build; until then development shows a labelled placeholder
        and production shows nothing (see
        `public/images/services/sewer-line-locating/README.md`).
      */
      images: {
        hero: '/images/services/sewer-line-locating/hero/the-sewer-pros-sewer-line-locating-residential-property-hero-background-16x9.webp',
        comparison:
          '/images/services/sewer-line-locating/the-sewer-pros-sewer-line-locating-vs-811-comparison-background-16x9.webp',
        request:
          '/images/services/sewer-line-locating/the-sewer-pros-sewer-line-locating-request-cta-background-16x9.webp',
        closing:
          '/images/services/sewer-line-locating/the-sewer-pros-sewer-line-locating-request-cta-seektech-sr20-background-16x9.webp',
        definition: ['locating-definition'],
        process: 'locating-process',
      },
      headings: {
        process: 'What happens during a sewer line locating visit?',
        faq: 'Sewer line locating questions',
      },
      definition: {
        id: 'what-is-sewer-line-locating',
        label: 'Quick answer',
        title: 'What is sewer line locating?',
        answer:
          'Sewer line locating is a service used to estimate the route and position of an underground sewer line on a property. A technician may use locating equipment at an accessible point, along with available access and inspection information, to help identify where the line runs.',
        supporting: [
          'Knowing the approximate route can help property owners and project teams plan landscaping, construction, or other work near the sewer line. It can also help clarify whether a sewer camera inspection may be useful for learning more about the line’s interior condition. A camera inspection looks inside the pipe; locating estimates its path below ground.',
          'Results depend on access and site conditions. Sewer line locating provides approximate route information for planning. It does not identify every buried utility or replace required utility marking, permits, or professional excavation planning.',
        ],
      },
      symptomRouter: {
        id: 'why-locate-a-sewer-line',
        title: 'Why do you need to locate a sewer line?',
        intro:
          'A sewer line location can help you plan property work, evaluate a home, or coordinate a project.',
        items: [
          {
            status: 'Project planning',
            urgency: 'planning',
            icon: 'locate',
            title: 'Planning excavation, trenching, or construction',
            description:
              'Knowing the approximate path of a private sewer line can help you coordinate site planning before work begins nearby. Locating information does not replace required utility marking, permits, or professional excavation planning.',
            actionLabel: 'Request line locating',
            href: '#request-service',
          },
          {
            status: 'Project planning',
            urgency: 'planning',
            icon: 'plant',
            title: 'Landscaping, tree planting, fence, or hardscape work',
            description:
              'An approximate sewer line route can help you plan landscaping or other property work that involves digging. Results depend on access and site conditions.',
            actionLabel: 'Plan a property project',
            href: '#request-service',
          },
          {
            status: 'Project planning',
            urgency: 'planning',
            icon: 'checklist',
            title: 'Coordinating with a sewer repair provider',
            description:
              'Approximate route information may help you coordinate planning with the provider responsible for any repair work.',
            actionLabel: 'Discuss project coordination',
            href: '#request-service',
          },
          {
            status: 'Property evaluation',
            urgency: 'planning',
            icon: 'home',
            title: 'Buying or evaluating a property',
            description:
              'Sewer line location information can help clarify where the line runs. A camera inspection may provide additional information about the pipe’s visible interior condition.',
            actionLabel: 'Schedule a sewer inspection',
            pageId: id('svc-pre-purchase-sewer-inspection'),
          },
          {
            status: 'Active issue',
            urgency: 'active',
            icon: 'droplet',
            title: 'A drainage problem and an unknown line path',
            description:
              'When a sewer line’s route is unclear, locating may help estimate where it runs. A camera inspection can provide separate information about visible conditions inside the pipe.',
            actionLabel: 'Discuss a sewer issue',
            pageId: id('core-contact'),
          },
          {
            status: 'Contractor request',
            icon: 'community',
            title: 'Contractor or project-team coordination',
            description:
              'Project teams can discuss the site, access points, and planning need to determine whether sewer line locating may be appropriate.',
            actionLabel: 'Request contractor support',
            href: '#request-service',
          },
        ],
      },
      materials: {
        id: 'when-line-locating-is-useful',
        title: 'When is sewer line locating useful?',
        intro:
          'Sewer line locating may be useful when planned work could take place near a private sewer line or when the line’s route is uncertain. It can provide approximate route information to support project planning, property evaluation, and coordination with contractors. Results depend on access and site conditions.',
        tiles: [
          { label: 'Excavation or trenching', icon: 'route' },
          { label: 'Landscaping or tree planting', icon: 'organic' },
          { label: 'Fence, pool, or patio work', icon: 'fence' },
          { label: 'Repair planning', icon: 'checklist' },
          { label: 'Home inspection follow-up', icon: 'home' },
          { label: 'Property management planning', icon: 'building' },
        ],
        columns: ['Scenario', 'Why locating may help', 'Keep in mind'],
        rows: [
          {
            item: 'Excavation or trenching',
            help: 'Approximate route information can help inform planning around a private sewer line.',
            qualification: 'Follow required utility-location and permit processes before digging.',
          },
          {
            item: 'Landscaping or tree planting',
            help: 'Knowing the estimated route may help you plan landscaping or planting that involves digging.',
            qualification: 'The route is approximate; locating does not confirm depth or every point along the line.',
          },
          {
            item: 'Fence, pool, patio, or hardscape work',
            help: 'Location information may help project teams consider the sewer line when planning property work.',
            qualification: 'Locating does not identify property boundaries or easements.',
          },
          {
            item: 'Repair or replacement planning',
            help: 'Approximate route information may support coordination before a suspected line area is accessed.',
            qualification: 'The Sewer Pros provides locating information for planning and does not perform sewer repair or replacement.',
          },
          {
            item: 'Home inspection follow-up',
            help: 'Locating may help clarify the line’s approximate route when property questions arise.',
            qualification: 'A camera inspection is used to view the pipe’s interior condition.',
          },
          {
            item: 'Property management planning',
            help: 'Location information may support maintenance, access, and vendor coordination.',
            qualification: 'Results depend on access and site conditions.',
          },
        ],
        note: 'Sewer line locating does not replace required utility-location processes, public utility marking, permits, site plans, or professional excavation planning. Confirm the appropriate steps for your project before digging.',
      },
      limitations: {
        variant: 'brand',
        title: 'What sewer line locating can help identify, and its limits',
        intro:
          'Sewer line locating provides approximate route information for planning. It can help estimate where an accessible section of a private sewer line may run across a property, including its possible route in relation to a planned work area. Results depend on access and site conditions.',
        canIdentifyTitle: 'Sewer line locating may help identify',
        canIdentify: [
          'The approximate route of an accessible private sewer line',
          'Potential route information to support property planning',
          'A starting point for coordinating with the contractor or provider responsible for planned work',
          'Where the line may run in relation to a proposed work area',
        ],
        cannotTitle: 'Sewer line locating may not confirm',
        cannot: [
          'Every underground utility on a property',
          'Exact depth or every point along the sewer line',
          'Property boundaries or easements',
          'Permit requirements or excavation approval',
          'The condition inside the pipe without an inspection',
          'Public utility clearance or official utility marks',
        ],
        related: {
          lead: 'If you plan to dig, follow the required utility-notification and project-planning processes in addition to private sewer line locating. A',
          pageId: id('svc-sewer-camera-inspection'),
          label: 'sewer camera inspection',
          trailing: 'can help show visible conditions inside the line.',
        },
      },
      comparison: {
        id: 'line-locating-vs-related-services',
        columns: ['Service or process', 'Primary purpose', 'Best used when'],
        title: 'Sewer line locating vs. 811, camera inspection, and sewer cleaning',
        intro:
          'These services answer different questions. None of them stands in for the others.',
        rows: [
          {
            service: 'Private sewer line locating',
            purpose: 'Estimate the route of an accessible private sewer line.',
            fit: 'Work is planned near the line, or its route needs to be considered for property planning. Results depend on access and site conditions.',
          },
          {
            service: '811 / public utility notification',
            purpose: 'Request marking of eligible public utilities before digging.',
            fit: 'Before excavation when required or advisable for the project. This is separate from private sewer line locating. Requirements vary by location and project.',
          },
          {
            service: 'Sewer camera inspection',
            purpose: 'View accessible interior conditions in a sewer line.',
            fit: 'Pipe condition, a possible blockage cause, or visible damage is uncertain. A camera inspection does not map every part of the line’s underground route.',
            pageId: id('svc-sewer-camera-inspection'),
          },
          {
            service: 'Sewer cleaning',
            purpose: 'Clear certain accessible restrictions in a sewer line.',
            fit: 'A main-line blockage or buildup is suspected. Cleaning does not establish pipe condition or map the line’s route.',
            pageId: id('svc-sewer-cleaning'),
          },
          {
            service: 'Hydro jetting',
            purpose: 'Use controlled high-pressure water to clean certain suitable lines.',
            fit: 'Recurring buildup or material restricting flow is suspected and the line is appropriate for the method.',
            pageId: id('svc-hydro-jetting'),
          },
          {
            service: 'Drain cleaning',
            purpose: 'Address a clog affecting a fixture or branch line.',
            fit: 'A sink, tub, or other individual fixture is affected. This is different from locating a sewer line.',
            pageId: id('svc-drain-cleaning'),
          },
        ],
        note: 'If you are planning to dig, follow the appropriate local utility-notification and project-planning process in addition to arranging private sewer line locating. The Sewer Pros does not replace 811 or public utility marking.',
      },
      prep: {
        title: 'What to prepare before scheduling',
        items: [
          'Property address and ZIP code',
          'A brief description of the planned work',
          'Project timeline',
          'Approximate work area',
          'Known sewer cleanout or access point information',
          'Recent sewer reports, plans, or inspection video, if available',
          'Contractor contact information, if someone else is coordinating the work',
        ],
        note: 'The approach depends on access and the purpose of the project. Follow required utility-location and project-planning processes before digging.',
      },
      marketRouter: {
        id: 'choose-market',
        title: 'Find sewer line locating in your market',
        intro:
          'Choose a market to review sewer line locating information and request options for that service area. Service availability depends on the property location and project details.',
        items: [
          {
            pageId: id('market-st-louis-mo'),
            description:
              'Explore sewer line locating information and request options for properties in the St. Louis region.',
            actionLabel: 'Sewer Line Locating in St. Louis',
          },
          {
            pageId: id('market-san-diego-ca'),
            description:
              'Explore sewer line locating information and request options for properties in the San Diego region.',
            actionLabel: 'Sewer Line Locating in San Diego',
          },
          {
            pageId: id('market-las-vegas-nv'),
            description:
              'Explore sewer line locating information and request options for properties in the Las Vegas region.',
            actionLabel: 'Sewer Line Locating in Las Vegas',
          },
        ],
      },
      audiences: {
        id: 'line-locating-for-your-situation',
        surface: 'muted',
        title: 'Sewer line locating for property owners and project teams',
        intro:
          'Choose the perspective that best matches your role to find information about sewer line locating for property decisions, inspections, or project coordination.',
        items: [
          {
            pageId: id('aud-property-managers'),
            audience: 'Property Managers',
            icon: 'building',
            description:
              'Explore how approximate sewer line route information may support maintenance planning, access coordination, and vendor communication.',
            actionLabel: 'Property Manager Support',
          },
          {
            pageId: id('aud-home-inspectors'),
            audience: 'Home Inspectors',
            icon: 'eye',
            description:
              'Learn how sewer line locating may help clarify an approximate route when a property inspection raises questions about where the line runs.',
            actionLabel: 'Working With Home Inspectors',
          },
          {
            pageId: id('aud-real-estate-agents'),
            audience: 'Real Estate Agents',
            icon: 'document',
            description:
              'Review how sewer line location information may support property due diligence and project planning. A camera inspection can help show visible conditions inside an accessible section of the line.',
            actionLabel: 'Transaction Support',
          },
          {
            pageId: id('aud-home-buyers'),
            audience: 'Home Buyers',
            icon: 'house-key',
            description:
              'Learn how route information and sewer camera inspection address different questions before closing: locating estimates where the line runs, while a camera inspection can show visible interior conditions.',
            actionLabel: 'Home Buyer Sewer Inspections',
          },
        ],
      },
      evidence: {
        id: 'line-locating-field-experience',
        title: 'Clearer information for property planning',
        intro: (
          <>
            <p>
              Sewer line locating begins with the available access points and
              the project&rsquo;s needs. The route information that can be
              identified depends on the property, accessible line sections,
              equipment signals, and site conditions.
            </p>
            <p>
              Locating can help estimate where an accessible section of a
              private sewer line may run in relation to a planned work area.
              If you also need information about the pipe&rsquo;s interior, a{' '}
              <Link
                href="/services/sewer-camera-inspection/"
                className="font-semibold text-accent-secondary underline underline-offset-4 hover:text-foreground"
              >
                sewer camera inspection
              </Link>{' '}
              can show visible conditions in accessible sections. These
              services answer different questions, and a camera inspection
              may be useful when both the route and visible interior
              condition matter.
            </p>
          </>
        ),
        caveat:
          'These are examples from individual properties, with identifying details removed. Findings and methods vary by line, access, and situation.',
        items: [
          {
            slot: 'locating-equipment',
            title: 'Locating equipment in the field',
            description:
              'The locating approach depends on the access available and what the project needs to learn about the line.',
          },
          {
            slot: 'locating-field',
            title: 'An example from one property',
            description:
              'Route information is approximate and can vary with access, equipment signals, and site conditions.',
          },
        ],
      },
      approach: {
        title: 'How We Work',
        items: [
          {
            icon: 'conversation',
            title: 'Independent assessment',
            description:
              'Our focus is sewer inspection, diagnostics, locating, and cleaning. We provide locating information for planning; The Sewer Pros does not perform sewer repair or replacement.',
          },
          {
            icon: 'document',
            title: 'Understand the findings',
            description:
              'We explain the available route information and its limitations. Results are approximate and may vary with access, equipment signals, and site conditions.',
          },
          {
            icon: 'pipe',
            title: 'Sewer and drain specialists',
            description:
              'Our work focuses on sewer and drain services rather than general plumbing. A camera inspection can provide separate information about visible conditions inside an accessible section of the line.',
          },
          {
            icon: 'decision',
            title: 'Your next step stays your decision',
            description:
              'Use the locating information to support your planning and decide what to do next. If a project involves repair or other work beyond our services, you choose the provider who performs it.',
          },
        ],
        cta: { label: 'Request Sewer Line Locating', href: '#request-service' },
      },
      request: {
        id: 'request-sewer-line-locating',
        title: 'Request Sewer Line Locating',
        intro: [
          'Tell us about the property, the planned work, and your timeline. Sharing the approximate work area and any known sewer access points can help us understand what you need.',
          'Choose the property’s service area and the service you’re requesting in the form. Results depend on access and site conditions; sewer line locating provides approximate route information for planning.',
        ],
        formTitle: 'Request Sewer Line Locating',
        submitLabel: 'Request Sewer Line Locating',
      },
      closing: {
        title: 'Plan your project with clearer sewer line information',
        intro: [
          'Request sewer line locating to help understand the likely route of a private sewer line before planning landscaping, fencing, or other property work. You can also contact The Sewer Pros to discuss your project and whether a sewer camera inspection may be a useful next step.',
          'Use the form to request service or ask about availability in your market. Include the property location, the type of project you are planning, and any known sewer access point in the optional message field. This information can help the team understand what you need.',
        ],
        formTitle: 'Request sewer line locating',
        messagePlaceholder:
          'Tell us about your project, property location, and any known sewer access points.',
      },
    },
    faq: [
      {
        question: 'What is sewer line locating?',
        answer: (
          <p>
            Sewer line locating is a way to trace the path of an existing
            sewer pipe and mark its route at the surface. A technician uses a
            compatible locating method, often with a sewer camera and
            locating equipment, to help identify where the pipe runs. The
            results can help with property planning, landscaping, or
            deciding where further inspection may be useful.
          </p>
        ),
      },
      {
        question: 'Can you tell me exactly where my sewer line is?',
        answer: (
          <p>
            Locating can provide a practical estimate of the sewer
            line&rsquo;s route and mark its position on the surface. Accuracy
            depends on access to the line, pipe material and condition,
            depth, and site conditions. The marks are intended to guide
            planning; they should not be treated as a guarantee of the
            pipe&rsquo;s exact position or as a substitute for required
            utility clearance.
          </p>
        ),
      },
      {
        question: 'Is sewer line locating the same as calling 811?',
        answer: (
          <p>
            No. 811 is a public utility notification service that
            coordinates marking of participating underground utilities
            before digging. Private sewer line locating focuses on tracing a
            property&rsquo;s sewer line, which may not be included in public
            utility markings. Contact 811 before digging and ask which
            utilities are covered at your property; arrange private locating
            when you need help identifying a private sewer line.
          </p>
        ),
      },
      {
        question: 'Do I need a sewer camera inspection before locating?',
        answer: (
          <p>
            Not always. The right approach depends on whether the sewer line
            is accessible and what you need to learn. A camera inspection
            can help assess the pipe&rsquo;s interior and may support
            locating when a compatible camera and sonde can travel through
            the line. If the line is inaccessible or the camera cannot pass
            through it, the technician can explain the available options and
            limitations.
          </p>
        ),
      },
      {
        question: 'Can line locating help before landscaping or fence installation?',
        answer: (
          <p>
            Yes. Locating can help you understand the likely route of a
            private sewer line before planning landscaping, fencing, or
            other property work. Share your project plans when scheduling so
            the technician understands what area you need evaluated. Always
            contact 811 and follow applicable digging requirements before
            excavation; private locating does not replace public utility
            marking.
          </p>
        ),
      },
      {
        question: 'Can sewer line locating determine the pipe’s depth?',
        answer: (
          <p>
            Some locating equipment can estimate depth under suitable
            conditions, but the result is not guaranteed and may vary with
            the pipe, signal, surrounding materials, and site conditions. A
            depth reading should be treated as an estimate for planning, not
            a precise measurement or authorization to dig.
          </p>
        ),
      },
      {
        question: 'Can you locate every utility on my property?',
        answer: (
          <p>
            No. Sewer line locating is intended to help trace the private
            sewer line within the scope of the service. It does not identify
            every buried utility or replace 811&rsquo;s public utility
            marking process. Contact 811 before digging and arrange separate
            private utility locating for other privately owned lines when
            needed.
          </p>
        ),
      },
      {
        question: 'Can line locating help with a sewer repair?',
        answer: (
          <p>
            Locating can help show where the sewer line runs and may help
            narrow down an area for further evaluation. It does not by
            itself diagnose a pipe defect, confirm the full extent of
            damage, or determine a repair plan. A sewer camera inspection
            may be needed to assess the pipe&rsquo;s interior; repair
            recommendations depend on the findings and are outside the scope
            of locating alone.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-camera-inspection'),
      id('svc-sewer-cleaning'),
      id('svc-hydro-jetting'),
      id('svc-drain-cleaning'),
    ],
    relatedTitle: 'Related Sewer and Drain Services',
    relatedIntro:
      'Sewer line locating estimates where an accessible private sewer line may run. If your project also involves viewing the inside of the pipe or addressing a clog, these related services may help with different needs.',
    relatedDescriptions: {
      [id('svc-sewer-camera-inspection')]:
        'View accessible interior sections of a sewer line. A camera inspection can help identify visible conditions and inform a next-step decision.',
      [id('svc-sewer-cleaning')]:
        'Clear certain accessible restrictions in a sewer line when cleaning is appropriate. A camera inspection may help document the line’s condition before or after cleaning.',
      [id('svc-hydro-jetting')]:
        'Use controlled high-pressure water to clean certain suitable sewer lines. Whether jetting is appropriate depends on the line and the conditions observed.',
      [id('svc-drain-cleaning')]:
        'Address a clog affecting a sink, tub, or other fixture. This service focuses on the affected drain and reported symptoms.',
    },
    cta: {
      title: 'Plan your project with clearer sewer line information',
      body: 'Select your market to request sewer line locating, discuss a property project, or ask whether a camera inspection should be part of the next step.',
    },
  },

  /* ======================================================================
     Drain Cleaning — 14 §34
     ====================================================================== */
  [id('svc-drain-cleaning')]: {
    /*
      ⚠ THIS PAGE IS THE SERVICE HUB, NOT A CITY PAGE. The three markets are
      routed to, never listed city by city. `hub` switches the page to
      `ServiceHubTemplate`; `decisionFirst` puts the comparison ahead of the
      market router so the service is understood first.

      ⚠ WHAT THIS COPY DOES NOT CLAIM. No pricing, timeframe, guarantee,
      certification, availability window, emergency, 24/7 or same-day
      service, equipment specification or review metric. No deliverable is
      promised (video, written report) because none is documented for every
      visit, so the deliverables panel is deliberately absent. Active
      backups say "contact the team" and promise no response. Repair stays
      educational (CLAUDE.md §9, §24).

      ⚠ ROUTES THAT DO NOT EXIST ARE NOT LINKED. `/problems/*` and
      `/who-we-help/*` are not built; symptom cards route to existing
      service pages or to the in-page form, and audiences live under
      `/for/`.
    */
    seoTitle: 'Drain Cleaning for Slow, Clogged, and Recurring Drains',
    metaDescription:
      'Learn when drain cleaning fits a slow or clogged drain and when several affected fixtures point to the main sewer line. Serving St. Louis, San Diego, and Las Vegas.',
    hero: {
      eyebrow: 'Drain Cleaning Service',
      title: 'Drain Cleaning for Slow, Clogged, and Recurring Drains',
      primaryAction: { href: '#choose-market', label: 'Choose Your Location' },
      secondaryAction: { href: '/contact/', label: 'Call About a Drain Problem' },
      intro: (
        <>
          <p>
            Drain cleaning can help address certain clogs, buildup, and flow
            restrictions in sinks, tubs, showers, toilets, floor drains, and
            connected drain lines. The right approach depends on where the
            blockage is and what may be causing it.
          </p>
          <p>
            If several fixtures are affected or the problem keeps returning,
            the cause may be farther along the drain or sewer line. An
            evaluation, including a sewer camera inspection when appropriate,
            can help identify the next step.
          </p>
          <p>
            <a href="#when-a-drain-is-a-sewer-problem" className="font-semibold underline underline-offset-4">
              Multiple drains affected? Explore sewer-line services.
            </a>
          </p>
        </>
      ),
    },
    process: [
      {
        title: 'Discuss the fixture and symptoms',
        description:
          'The team gathers details about which fixture is affected, whether the problem is active or recurring, what other drains are doing, and when the issue began.',
      },
      {
        title: 'Assess the likely location of the restriction',
        description:
          'The technician considers whether the problem appears limited to the fixture or may involve a branch line, the main sewer line, or another condition. Further evaluation may be needed to determine the cause.',
      },
      {
        title: 'Perform the recommended cleaning method',
        description:
          'The method depends on the fixture, available access, suspected restriction, and condition of the accessible drain line. The approach may vary from one situation to another.',
      },
      {
        title: 'Review findings and next steps',
        description:
          'The technician explains the service performed and any observed conditions, where available. If the symptoms suggest that cleaning alone may not address the problem, they can discuss whether further evaluation or another service may be appropriate.',
      },
    ],
    hub: {
      decisionFirst: true,
      mobileBar: true,
      relatedColumns: 4,
      defaultServiceId: 'svc-drain-cleaning',
      processIcons: ['explanation', 'checklist', 'pipe', 'document'],
      /*
        IMAGE SLOTS. Save the real files at these paths and they are used at
        the next build; until then development shows a labelled placeholder
        and production shows nothing (see
        `public/images/services/drain-cleaning/README.md` for the shot list).
      */
      images: {
        hero: '/images/services/drain-cleaning/hero/the-sewer-pros-drain-cleaning-hero-residential-cleanout-ridgid-equipment-16x9.webp',
        comparison: '/images/services/drain-cleaning/the-sewer-pros-drain-cleaning-service-comparison-ridgid-k7500-16x9.webp',
        request: '/images/services/drain-cleaning/the-sewer-pros-drain-cleaning-request-cta-ridgid-k7500-background-16x9.webp',
        requestFocus: 'right',
        closing: '/images/services/drain-cleaning/the-sewer-pros-drain-cleaning-closing-cta-ridgid-k7500-background-16x9.webp',
        closingFocus: 'right',
        definition: ['drain-definition'],
        process: 'drain-process',
      },
      headings: {
        process: 'What Happens During a Drain-Cleaning Visit?',
        faq: 'Drain Cleaning Questions',
      },
      definition: {
        id: 'what-is-drain-cleaning',
        label: 'Quick Answer',
        title: 'What Is Drain Cleaning?',
        answer:
          'Drain cleaning is the process of clearing certain clogs, buildup, and flow restrictions from a sink, tub, shower, toilet, floor drain, or connected drain line. The right approach depends on the affected fixture, where the restriction is located, access to the line, and the line’s condition.',
        supporting: [
          'A slow or clogged drain may have an issue limited to one fixture. When several drains are affected, or the same problem keeps returning, the cause may be farther along the main sewer line. An evaluation can help determine whether the next step should address a single drain or involve sewer-line inspection.',
        ],
      },
      symptomRouter: {
        id: 'what-drain-problem',
        title: 'What drain problem are you experiencing?',
        intro:
          'Start with the symptom you’re noticing. A problem affecting one fixture may be limited to that drain, while recurring clogs or slow drains across several fixtures can point to a restriction farther along the connected drain or sewer line. The right next step depends on what is affected and where the restriction is located.',
        items: [
          {
            status: 'Single fixture',
            icon: 'sink-droplet',
            title: 'One sink drains slowly or is clogged',
            description:
              'A slow or clogged sink may be caused by a restriction in the fixture drain or its branch line. Drain cleaning may be an appropriate starting point when the issue is limited to one sink.',
            actionLabel: 'Get help with a sink drain',
            href: '#request-drain-cleaning',
          },
          {
            status: 'Single fixture',
            icon: 'bath',
            title: 'A shower, tub, or bathroom drain is slow',
            description:
              'Hair, soap residue, and buildup can restrict flow through a shower, tub, or bathroom drain. If other fixtures are also slow, the restriction may extend beyond that drain.',
            actionLabel: 'Explore bathroom drain cleaning',
            href: '#request-drain-cleaning',
          },
          {
            status: 'Recurring issue',
            urgency: 'recurring',
            icon: 'toilet',
            title: 'A toilet clogs repeatedly',
            description:
              'Recurring toilet clogs can be related to the fixture, a branch-line restriction, or a larger sewer-line issue. The pattern of the clogs and whether other drains are affected can help determine what should be evaluated.',
            actionLabel: 'Discuss a recurring toilet clog',
            href: '#request-drain-cleaning',
          },
          {
            status: 'Single fixture',
            icon: 'kitchen-sink',
            title: 'The kitchen sink is slow or backing up',
            description:
              'Grease, food residue, and soap can restrict a kitchen drain. The appropriate approach depends on where the restriction is located and whether other fixtures are affected.',
            actionLabel: 'Explore kitchen drain cleaning',
            href: '#request-drain-cleaning',
          },
          {
            status: 'Active issue',
            urgency: 'active',
            icon: 'floor-drain',
            title: 'A floor drain backs up or smells',
            description:
              'A floor drain that backs up or has an odor may have a local restriction or indicate a broader drainage issue. Share what you’re noticing, including whether other drains are affected, so the situation can be discussed.',
            actionLabel: 'Discuss a floor drain problem',
            pageId: id('core-contact'),
          },
          {
            status: 'Multiple fixtures',
            urgency: 'active',
            icon: 'fixtures',
            title: 'Multiple drains are slow, gurgling, or backing up',
            description:
              'When several fixtures are affected at the same time, the issue may involve a shared drain or the main sewer line rather than a single fixture drain. Further evaluation can help identify an appropriate next step.',
            actionLabel: 'Explore sewer cleaning options',
            pageId: id('svc-sewer-cleaning'),
          },
        ],
      },
      materials: {
        id: 'common-drain-cleaning-needs',
        title: 'Common Drain-Cleaning Needs',
        intro:
          'These are common questions about household sinks, showers, toilets, and other drains. The right cleaning approach depends on the fixture, access, and where the restriction is located. The guidance below describes possible factors to consider; it does not guarantee a particular result.',
        tiles: [
          { label: 'Kitchen sink', icon: 'kitchen-sink' },
          { label: 'Bathroom sink', icon: 'bathroom-sink' },
          { label: 'Shower or tub', icon: 'bath' },
          { label: 'Toilet', icon: 'toilet' },
          { label: 'Floor drain', icon: 'floor-drain-drop' },
          { label: 'Laundry drain', icon: 'washing-machine' },
        ],
        columns: ['Fixture or area', 'Common question', 'Guidance'],
        rows: [
          {
            item: 'Kitchen sink',
            icon: 'kitchen-sink',
            help: 'Why is my kitchen sink draining slowly?',
            qualification:
              'Grease, food residue, soap, and other debris can restrict flow. The appropriate cleaning approach depends on where the restriction is located and whether the issue is limited to the sink or involves a connected line.',
          },
          {
            item: 'Bathroom sink',
            icon: 'bathroom-sink',
            help: 'Why does my bathroom sink clog repeatedly?',
            qualification:
              'Hair, soap residue, and debris can build up in a bathroom drain. If the clog keeps returning after cleaning, the branch line or downstream conditions may need a closer evaluation.',
          },
          {
            item: 'Shower or tub',
            icon: 'bath',
            help: 'Why is my shower or tub draining slowly?',
            qualification:
              'Hair, soap residue, and buildup can reduce flow through a shower or tub drain. If other fixtures are also affected, the restriction may extend beyond that individual drain.',
          },
          {
            item: 'Toilet',
            icon: 'toilet',
            help: 'Why does my toilet keep clogging?',
            qualification:
              'Repeated toilet clogs can relate to the fixture, a branch-line restriction, or a larger sewer-line issue. An evaluation can help determine an appropriate starting point.',
          },
          {
            item: 'Floor drain',
            icon: 'floor-drain-drop',
            help: 'Why is water backing up through a floor drain?',
            qualification:
              'Water at a floor drain may indicate a localized restriction or a broader sewer-line problem. Whether other drains are affected can help guide the evaluation.',
          },
          {
            item: 'Laundry drain',
            icon: 'washing-machine',
            help: 'Why does my washing-machine drain back up?',
            qualification:
              'A washing machine releases water quickly, which can reveal a restriction in the branch line or a downstream path. Repeated backups may warrant further evaluation.',
          },
        ],
        note: 'No single method resolves every fixture problem. The right starting point depends on the affected drain, access, and what else is happening in the property.',
      },
      escalation: {
        id: 'when-a-drain-is-a-sewer-problem',
        title: 'When Do Clogged Drains Point to a Sewer-Line Problem?',
        answer:
          'A slow sink or shower may have a localized drain issue. When several fixtures become slow or back up around the same time, the cause may be farther along a connected drain or sewer line. Sewer cleaning or a camera inspection can help identify an appropriate next step.',
        signsTitle: 'Signs the problem may extend beyond one drain',
        signs: [
          'Several drains become slow at the same time.',
          'Toilets, tubs, showers, or lower-level drains back up together.',
          'Drains gurgle when another fixture is used.',
          'A clog returns after repeated cleaning.',
          'Wastewater appears in a tub, shower, or floor drain.',
          'Sewer odor occurs along with widespread drainage problems.',
        ],
        closingNote:
          'These signs do not confirm a sewer-line problem on their own. An evaluation can help determine whether the issue is limited to one drain or involves a broader section of the system.',
        links: [
          { pageId: id('svc-sewer-cleaning'), label: 'Explore sewer cleaning for multiple affected fixtures' },
          { pageId: id('svc-sewer-camera-inspection'), label: 'Schedule a sewer camera inspection for recurring problems' },
          { pageId: id('svc-recurring-sewer-backup-diagnosis'), label: 'Learn about recurring sewer backup diagnosis' },
        ],
      },
      limitations: {
        /*
          ⚠ H2 SUBSTITUTES A COMMA FOR THE REQUESTED EM DASH. The brief's
          heading read "...Help Address—and When It May Not Be Enough";
          this site's copy rule bans em dashes in visible text, and the
          comma form is what the section already used before this pass.
        */
        title: 'What Drain Cleaning May Help Address, and When It May Not Be Enough',
        intro:
          'Cleaning may restore flow when a localized restriction contributes to the problem. It does not necessarily identify structural damage, restrictions that cannot be reached, or why a clog keeps returning.',
        canIdentifyTitle: 'Drain cleaning may help address',
        canIdentify: [
          'Hair, soap residue, and organic material, depending on where the restriction is located.',
          'Grease and food-related buildup in accessible kitchen drain lines.',
          'Paper, debris, or soft obstructions in accessible branch lines.',
          'Localized clogs, depending on access, pipe condition, and fixture type.',
          'Some recurring restrictions, though a repeat problem may call for inspection.',
          'Slow drainage associated with buildup; other causes, such as venting or main-line issues, may also be involved.',
        ],
        cannotTitle: 'Drain cleaning may not resolve by itself',
        cannot: [
          'Multiple affected fixtures, which may involve the main sewer line.',
          'A drain that clogs repeatedly after cleaning.',
          'Suspected pipe damage, such as cracks, collapse, offsets, or separated sections.',
          'A restriction that cannot be reached from an accessible point.',
          'A route or project-planning question where sewer-line locating may be more appropriate.',
          'An active sewage backup, which needs prompt contact with the team and appropriate evaluation.',
        ],
        related: {
          lead: 'Not sure whether the problem is a drain clog or a sewer-line issue?',
          pageId: id('svc-sewer-camera-inspection'),
          label: 'A sewer camera inspection',
          trailing: 'can help identify visible conditions and inform the next decision.',
        },
      },
      comparison: {
        /*
          ⚠ "DRAIN CLEANING (THIS PAGE)" IS RENDERED, NOT AUTHORED. The
          component appends "(this page)" to any row with no `pageId`, so
          `service` stays plain "Drain cleaning" here; adding the literal
          suffix would double it up in the rendered table.
        */
        id: 'drain-vs-related-services',
        columns: ['Service', 'Main purpose', 'Often appropriate when'],
        title: 'Drain Cleaning vs. Sewer Cleaning, Hydro Jetting, and Sewer Camera Inspection',
        intro:
          'These services address different kinds of drain and sewer concerns. Compare their purposes and limitations to understand which may be a useful starting point.',
        rows: [
          {
            service: 'Drain cleaning',
            purpose: 'Clears certain localized clogs and restrictions in fixtures or accessible branch lines.',
            fit: 'One sink, shower, tub, toilet, floor drain, or branch line is affected. It may not address a main sewer-line issue.',
          },
          {
            service: 'Sewer cleaning',
            purpose: 'Clears certain restrictions in an accessible main sewer line.',
            fit: 'Multiple fixtures are affected or a main-line blockage is suspected. Cleaning may not explain a recurring line condition.',
            pageId: id('svc-sewer-cleaning'),
          },
          {
            service: 'Hydro jetting',
            purpose: 'Uses controlled high-pressure water to clean certain buildup.',
            fit: 'The line and its condition are suitable for this method. It is not appropriate for every line or unknown pipe condition.',
            pageId: id('svc-hydro-jetting'),
          },
          {
            service: 'Sewer camera inspection',
            purpose: 'Shows accessible interior line conditions.',
            fit: 'The cause, location, or pipe condition is uncertain. Inspection does not itself remove a clog.',
            pageId: id('svc-sewer-camera-inspection'),
          },
          {
            service: 'Sewer line locating',
            purpose: 'Identifies the approximate underground route of a sewer line.',
            fit: 'Excavation, construction, or property work is being planned. Locating does not clean or inspect inside the pipe.',
            pageId: id('svc-sewer-line-locating'),
          },
        ],
        note: 'If wastewater is actively backing up, contact the team to discuss the immediate issue and whether cleaning or assessment should come first.',
      },
      marketRouter: {
        id: 'choose-market',
        /*
          ⚠ LINKS GO TO THE MARKET HUBS, NOT A DRAIN-CLEANING SUB-ROUTE.
          No `/st-louis-mo/drain-cleaning/`-style page exists in the page
          registry for any of the three markets, so each card routes to
          that market's hub (`market-st-louis-mo` etc.), same as every
          other hub's market router on this site.
        */
        title: 'Find Drain-Cleaning Service in Your Market',
        intro:
          'Choose a market to view local drain-cleaning service details and request options.',
        items: [
          {
            pageId: id('market-st-louis-mo'),
            description: 'Explore drain-cleaning service information for the St. Louis region.',
            actionLabel: 'Drain Cleaning in St. Louis',
          },
          {
            pageId: id('market-san-diego-ca'),
            description: 'Explore drain-cleaning service information for the San Diego region.',
            actionLabel: 'Drain Cleaning in San Diego',
          },
          {
            pageId: id('market-las-vegas-nv'),
            description: 'Explore drain-cleaning service information for the Las Vegas Valley.',
            actionLabel: 'Drain Cleaning in Las Vegas',
          },
        ],
      },
      audiences: {
        id: 'drain-cleaning-for-your-situation',
        surface: 'muted',
        title: 'Drain-Cleaning Information for Different Property Needs',
        intro:
          'Drain-cleaning needs can vary across multi-unit buildings, commercial properties, inspections, and real estate transactions. Choose the page that best matches your property or role.',
        items: [
          {
            pageId: id('aud-property-managers'),
            audience: 'Property Managers',
            icon: 'building',
            description:
              'Coordinate service for tenant-reported drainage problems at occupied or multi-unit properties. Find information about documenting the issue and arranging an appropriate next step.',
            actionLabel: 'Property Manager Support',
          },
          {
            pageId: id('com-drain-cleaning'),
            audience: 'Commercial Properties',
            icon: 'commercial-building',
            description:
              'Recurring drain problems can disrupt building operations. Learn how commercial drain cleaning differs and what information may help when requesting service.',
            actionLabel: 'Commercial Drain Cleaning',
          },
          {
            pageId: id('aud-home-inspectors'),
            audience: 'Home Inspectors',
            icon: 'checklist',
            description:
              'Learn how to coordinate appropriate specialist follow-up when an inspection identifies a drainage concern.',
            actionLabel: 'Working with Home Inspectors',
          },
          {
            pageId: id('aud-real-estate-agents'),
            audience: 'Real Estate Agents',
            icon: 'house-document',
            description:
              'Help clients understand when a drain concern may call for further evaluation during a property transaction.',
            actionLabel: 'Transaction Support',
          },
        ],
      },
      evidence: {
        id: 'drain-cleaning-field-experience',
        columns: 3,
        title: 'Clear Service Decisions Start with the Right Information',
        intro:
          'A slow drain can have different causes. Cleaning may be appropriate in some cases, while a camera inspection may help when the problem keeps returning or its location is unclear.',
        caveat:
          'These examples are from individual properties, with identifying details removed. Findings and methods vary by fixture, access, and situation.',
        items: [
          {
            slot: 'drain-equipment',
            title: 'Drain-cleaning equipment in the field',
            description:
              'The equipment and method depend on the fixture, available access, and what is known about the drain line.',
          },
          {
            slot: 'drain-monitor',
            title: 'Reviewing a recurring drain issue on a monitor',
            description:
              'When a camera inspection is appropriate, the technician reviews visible conditions on the monitor. The camera can show only the portions of the line it can reach.',
          },
          {
            slot: 'drain-camera-explainer',
            title: 'When Is a Slow Drain a Main Sewer-Line Problem?',
            description:
              'A technician can explain what may point to a fixture-level issue or a broader sewer-line concern, and when a camera inspection may help.',
          },
        ],
      },
      /*
        ⚠ `approach`, NOT AN EDIT TO THE SHARED "HOW WE WORK" BAND. This
        renders instead of `AuthorityBand` (see `ServiceHubTemplate`), so
        the sourced, cited `authorityProofPoints` dataset that eight
        other hubs render unmodified stays untouched. Card 1 and 3 below
        substitute a comma for the brief's em dash (no em dashes in
        visible copy). The CTA is left unset so it keeps the verified
        sitewide default (`PRIMARY_CTA`: "Schedule a Sewer Inspection" →
        `/contact/`), which already matches the requested label exactly.
      */
      approach: {
        title: 'How Our Independent Sewer Inspection and Cleaning Process Works',
        items: [
          {
            title: 'The inspection is the product',
            description:
              'Finding out what is happening in the line is the job, not a step toward selling a repair.',
            icon: 'camera',
          },
          {
            title: 'You see the evidence',
            description:
              'Visible conditions found during an inspection are documented so you can review the findings.',
            icon: 'eye',
          },
          {
            title: 'Sewer and drain specialists',
            description:
              'Our work focuses on sewer inspection, diagnostics, locating, and cleaning, not general plumbing.',
            icon: 'pipe',
          },
          {
            title: 'The next step stays your decision',
            description:
              'If findings suggest work beyond cleaning may be needed, you decide what to do next and whom to contact.',
            icon: 'decision',
          },
        ],
      },
      request: {
        id: 'request-drain-cleaning',
        title: 'Request drain cleaning',
        intro:
          'Tell us which fixture is affected, whether other drains are slow, and where the property is. The Sewer Pros provides sewer inspection, cleaning, and diagnostic services across St. Louis, San Diego, and Las Vegas.',
      },
      closing: {
        title: 'Request Drain Cleaning for a Clogged or Slow Drain',
        intro:
          'Tell us what’s happening, where service is needed, and how you prefer to be contacted. You can request drain cleaning, ask about a recurring clog, or describe symptoms you’re seeing. We’ll review your request and help determine whether drain cleaning, sewer cleaning, or a camera inspection may be appropriate.',
        formTitle: 'Request Drain Cleaning',
        messageLabel: 'What’s happening with the drain? (Optional)',
        messagePlaceholder:
          'Describe the affected fixture or drain, how long the issue has been occurring, and whether it keeps coming back.',
        submitLabel: 'Request Drain Cleaning',
        note: 'Please include your service location so we can review availability for your area.',
      },
    },
    faq: [
      {
        question: 'What is the difference between drain cleaning and sewer cleaning?',
        answer: (
          <p>
            Drain cleaning generally addresses a clog or restriction in one
            fixture or an accessible branch line. Sewer cleaning focuses on
            certain restrictions in an accessible main sewer line. The
            appropriate service depends on which fixtures are affected and
            where the restriction may be.
          </p>
        ),
      },
      {
        question: 'Why does my drain keep clogging after it has been cleaned?',
        answer: (
          <p>
            A recurring clog can have several possible causes, including a
            restriction farther along the line or a condition the cleaning
            did not address. If the problem keeps returning, an evaluation may
            help determine an appropriate next step.
          </p>
        ),
      },
      {
        question: 'Can drain cleaning help a slow shower or tub drain?',
        answer: (
          <p>
            Drain cleaning may help with certain localized restrictions in a
            shower or tub drain. If other fixtures are also affected, or the
            problem keeps returning, the cause may extend beyond that
            individual fixture.
          </p>
        ),
      },
      {
        question: 'Does drain cleaning fix a sewer-line backup?',
        answer: (
          <p>
            Cleaning one fixture may not resolve a backup involving the main
            sewer line. An evaluation can help determine whether sewer
            cleaning, a camera inspection, or another next step may be
            appropriate.
          </p>
        ),
      },
      {
        question: 'Can drain cleaning remove grease buildup?',
        answer: (
          <p>
            Drain cleaning may address certain grease-related buildup in
            accessible kitchen drain lines. The appropriate approach depends
            on where the buildup is located and the condition of the line;
            results can vary.
          </p>
        ),
      },
      {
        question: 'Do I need a camera inspection for a clogged drain?',
        answer: (
          <p>
            Not every clogged drain requires a camera inspection. One may be
            useful when a clog keeps returning, multiple fixtures are
            affected, or the cause and location are unclear. A camera can show
            only the accessible portions of the line it can reach.
          </p>
        ),
      },
      {
        question: 'Can I schedule drain cleaning for a rental or multi-unit property?',
        answer: (
          <p>
            Contact the team to discuss the affected fixtures, the property,
            and who can authorize service. The next step may depend on the
            issue and the property’s access arrangements.
          </p>
        ),
      },
      {
        question: 'What should I do if wastewater is backing up into a tub or floor drain?',
        answer: (
          <p>
            Contact the team promptly to discuss the active backup and whether
            cleaning or assessment should come first. The right next step
            depends on which fixtures are affected and the conditions at the
            property.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-cleaning'),
      id('svc-hydro-jetting'),
      id('svc-sewer-camera-inspection'),
      id('svc-recurring-sewer-backup-diagnosis'),
    ],
    cta: {
      title: 'Get clear next steps for a clogged or slow drain',
      body: 'Choose your market to request drain cleaning, discuss a recurring clog, or ask whether sewer cleaning or a camera inspection may be a better starting point.',
    },
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
        <>
          <p>
            A sewer camera inspection before closing can help you understand
            the visible condition of a home&rsquo;s sewer line before you buy.
            The Sewer Pros guides a camera through the accessible line to
            document what it can see, helping you make a more informed
            decision based on inspection findings rather than assumptions
            about the property&rsquo;s age or appearance.
          </p>
          <p>
            Review the findings as part of your due diligence and discuss any
            questions with the appropriate real estate or plumbing
            professional.
          </p>
        </>
      ),
    },
    /*
      Real photography: RIDGID SeeSnake CS12x on a residential job, right-
      weighted so the copy column (left) sits over open background rather
      than the equipment (18 §28-34 — approved, not stock/AI). See
      `ServicePageContent.heroImage` for the shared backdrop/scrim/gradient
      treatment this reuses from `ServiceHubTemplate`.
    */
    heroImage: {
      src: '/images/services/pre-purchase-sewer-inspection/hero/the-sewer-pros-pre-purchase-sewer-inspection-hero-ridgid-seesnake-cs12x-16x9.webp',
      focus: 'right',
    },
    /*
      Two-column explainer, beside an approved photograph. See
      `ServicePageContent.explainer`.
    */
    explainer: {
      content: (
        <>
          <h2>Why a Sewer Line Inspection Matters Before You Buy</h2>
          <p>
            A general home inspection covers many visible parts of a
            property, but the sewer line runs underground and usually cannot
            be assessed without a camera. A line may have a visible concern
            even when the home&rsquo;s fixtures appear to work normally
            during a showing.
          </p>

          <h3>What a Pre-Purchase Sewer Inspection Can Show</h3>
          <p>
            A camera inspection can document visible conditions in the
            accessible portion of the sewer line, such as:
          </p>
          <ul>
            <li>The visible condition of the inspected line</li>
            <li>Whether roots have entered the line and where they appear</li>
            <li>Visible joint separation, offsets, or cracks</li>
            <li>
              Standing water that may indicate a low section or restriction
            </li>
            <li>Pipe material and visible changes along the inspected run</li>
            <li>Evidence of previous work, where visible</li>
          </ul>
          <p>
            The inspection reflects what the camera can see on the day of the
            appointment. It may not show inaccessible portions or predict how
            the line will perform in the future. Review the findings as part
            of your due diligence and discuss questions with the appropriate
            real estate or plumbing professional.
          </p>
        </>
      ),
      image: {
        src: '/images/services/pre-purchase-sewer-inspection/the-sewer-pros-pre-purchase-sewer-inspection-visible-line-conditions-ridgid-seesnake-4x3.webp',
        alt: 'RIDGID SeeSnake camera monitor showing visible conditions inside a sewer line during a pre-purchase inspection',
      },
    },
    /*
      Second two-column block: limits / timing / independence, beside an
      approved photograph. See `ServicePageContent.considerations`.
    */
    considerations: {
      content: (
        <>
          <h2>What a Sewer Camera Inspection Cannot Determine</h2>
          <p>
            A sewer camera inspection documents visible conditions in the
            accessible portion of the line on the day of the inspection. It
            does not guarantee how the sewer line will perform in the
            future, and it may not show areas the camera cannot reach or
            view clearly.
          </p>
          <p>
            An inspection also does not determine who is legally responsible
            for each portion of the sewer line. Responsibility varies by
            jurisdiction, so confirm local requirements with the appropriate
            real estate, legal, or plumbing professional.
          </p>

          <h2>When to Schedule a Pre-Purchase Sewer Inspection</h2>
          <p>
            A pre-purchase sewer inspection is most useful while you still
            have time to consider the findings as part of your due
            diligence. Scheduling before closing can give you an opportunity
            to review what was visible and discuss any questions with your
            own advisors.
          </p>
          <p>
            The inspection provides information for your decision; what you
            do with the findings is up to you and your advisors.
          </p>

          <h2>Why Independent Sewer Inspection Matters Before You Buy</h2>
          <p>
            A sewer inspection can inform a significant financial decision.
            The Sewer Pros provides sewer inspection and cleaning services,
            but does not perform sewer repair or replacement. That means the
            inspection findings are not an opening step toward selling you a
            repair or replacement.
          </p>
          <p>
            Use the findings to understand what was visible during the
            inspection and decide what questions, if any, you want to raise
            with your own advisors.
          </p>
        </>
      ),
      image: {
        src: '/images/services/pre-purchase-sewer-inspection/the-sewer-pros-pre-purchase-sewer-inspection-limitations-ridgid-seesnake-4x3.webp',
        alt: 'RIDGID SeeSnake sewer camera equipment representing the limits and scope of a pre-purchase inspection',
      },
    },
    processTitle: 'How It Works',
    processIntro:
      'A pre-purchase sewer inspection follows four steps to document visible conditions in the accessible portion of the sewer line. What the camera can show depends on access and visibility during the inspection.',
    /*
      `muted`, distinct from the `default` audience-card section above
      it (18 §11 — a surface change signals the new topic on its own).
    */
    processSurface: 'muted',
    process: [
      {
        title: 'Locate Access',
        description: 'Identify an accessible entry point for the camera inspection.',
        icon: <MapPinIcon className="h-10 w-10 text-accent-secondary" />,
      },
      {
        title: 'Inspect the Line',
        description:
          'Guide the sewer camera through the accessible line to view its visible interior condition.',
        icon: <CameraIcon className="h-10 w-10 text-accent-secondary" />,
      },
      {
        title: 'Document Conditions',
        description:
          'Record visible findings, such as root entry, offsets, cracks, standing water, or restrictions.',
        icon: <DocumentIcon className="h-10 w-10 text-accent-secondary" />,
      },
      {
        title: 'Walk Through the Findings',
        description:
          'Review what was visible during the inspection and discuss questions about the findings.',
        icon: <ExplanationIcon className="h-10 w-10 text-accent-secondary" />,
      },
    ],
    showDifferentiator: true,
    /*
      Page-specific rewrite of the shared "Inspect / Document / Decide"
      section for a pre-purchase transaction context. `eyebrow` and
      `ctaLabel` are left unset because they already match the shared
      default verbatim; `calloutTwo` and `closing` are explicitly
      omitted (one concise callout, no duplicated closing statement).
      See `ServicePageContent.secondOpinion`.
    */
    secondOpinion: {
      title:
        'Before You Approve Major Sewer Work, Get an Independent Second Opinion',
      intro: [
        'A sewer repair recommendation can involve a significant expense. The Sewer Pros provides sewer inspections and cleaning, but does not perform sewer repair or replacement. A camera inspection can document visible conditions inside the accessible portion of the sewer line, giving you information to review before deciding what to do next.',
      ],
      steps: [
        {
          body: 'We use RIDGID sewer camera equipment to inspect the accessible line for visible conditions such as root entry, offsets, cracks, standing water, and restrictions.',
        },
        {
          body: 'We document what the camera can see so you can review the observed conditions, rather than relying only on a verbal description.',
        },
        {
          body: 'Use the inspection findings to decide whether to ask questions, seek another qualified opinion, or discuss appropriate next steps with your own advisors.',
        },
      ],
      calloutOne: {
        title: 'Why Get an Independent Inspection?',
        body: [
          'Because The Sewer Pros does not sell sewer repair or replacement, the inspection is not a sales appointment for those services. Our role is to document visible conditions and explain the findings, so you can make your own informed decision.',
        ],
      },
      calloutTwo: null,
      ctaNote:
        'Already received a sewer repair recommendation? Consider getting the line inspected and reviewing the documented findings before approving major work.',
      closing: null,
    },
    showMarkets: true,
    /*
      PENDING PHOTOGRAPHY: `LimitationsPanel` and `ServiceComparison`
      both accept an optional `imageSrc` backdrop (see their signatures
      in components/sections/ServiceHubSections.tsx), left unset here
      because no approved photography exists yet for this page (only
      `public/images/services/pre-purchase-sewer-inspection/.gitkeep`).
      Once real photos are approved (18 §28-34 — no stock/AI imagery),
      the natural slots are:
        limitations backdrop — a faded technician/monitor photo, saved
          under public/images/services/pre-purchase-sewer-inspection/
          and passed as `imageSrc` to the `LimitationsPanel` call in
          `ServicePageTemplate`.
        comparison backdrop  — a full-bleed inspection/equipment photo,
          same directory, passed as `imageSrc` to the `ServiceComparison`
          call. Follow the naming convention other services use, e.g.
          the-sewer-pros-pre-purchase-sewer-inspection-comparison-background-16x9.webp
      Both components render without a photograph until then (a plain
      light panel and a plain navy band, respectively) — no placeholder
      box ships on this indexable page.
    */
    audiences: {
      title: 'Who Is a Pre-Purchase Sewer Inspection For?',
      intro:
        'A pre-purchase sewer inspection can help buyers and other real estate professionals understand visible conditions in the accessible portion of a home’s sewer line. Each person involved in the transaction may use the findings differently as part of due diligence.',
      items: [
        {
          pageId: id('aud-home-buyers'),
          audience: 'Home Buyers',
          icon: 'house-search',
          description:
            'Review visible sewer-line conditions before closing and consider the findings as part of your due diligence.',
          actionLabel: 'Learn About Home-Buyer Sewer Inspections',
        },
        {
          pageId: id('aud-real-estate-agents'),
          audience: 'Real Estate Agents',
          icon: 'checklist',
          description:
            'Coordinate a sewer scope around the transaction and share documented findings for buyers and sellers to discuss.',
          actionLabel: 'Learn About Transaction Support',
        },
        {
          pageId: id('aud-home-inspectors'),
          audience: 'Home Inspectors',
          icon: 'eye',
          description:
            'Coordinate a specialist sewer inspection for portions of the line a general home inspection may not cover.',
          actionLabel: 'Learn About Coordinating an Inspection',
        },
        {
          pageId: id('aud-home-sellers'),
          audience: 'Home Sellers',
          icon: 'home',
          description:
            'Understand visible sewer-line conditions before listing or responding to a buyer’s question.',
          actionLabel: 'Learn About Seller Sewer Inspections',
        },
      ],
    },
    limitations: {
      title: 'What a pre-purchase sewer inspection can and cannot tell you',
      intro:
        'A sewer scope documents visible conditions in the accessible portions of the line on the day of the inspection. It is diagnostic information for your due diligence, not a certification or a guarantee.',
      canIdentifyTitle: 'A sewer scope may help identify',
      canIdentify: [
        'Visible blockages or buildup in the accessible line',
        'Root intrusion, and approximately where it appears',
        'Joint separation, offsets, or visible cracks',
        'Standing water suggesting a low section or restriction',
        'Pipe material and visible changes along the run',
        'Visible evidence of previous repair work',
      ],
      cannotTitle: 'It cannot guarantee',
      cannot: [
        'That every portion of the line is visible or accessible',
        'That no hidden defect exists outside the camera’s view',
        'Future pipe performance or maintenance needs',
        'The cost, scope, or timing of any future repair',
        'Who is legally responsible for which portion of the line, which varies by jurisdiction and is a question for the appropriate professional',
        'A pass/fail result for the property',
      ],
      related: {
        lead: 'Want the full picture of what a camera inspection covers?',
        pageId: id('svc-sewer-camera-inspection'),
        label: 'Explore sewer camera inspection',
      },
    },
    /*
      Removes the plain filler `LeadFormSection` between this page's
      `howWeWork` band and the comparison table. Safe only because
      `comparison.surface` below is set to `muted`, which is what keeps
      the two navy sections from touching instead (18 §11). See
      `ServicePageContent.hideMidPageForm`.
    */
    hideMidPageForm: true,
    /*
      Replaces the shared `AuthorityBand` "How we work" band for this
      page only. See `ServicePageContent.howWeWork`.
    */
    howWeWork: {
      title: 'How Our Pre-Purchase Sewer Inspection Works',
      intro:
        'We inspect the accessible portion of the sewer line, document visible conditions, and review what the camera showed. The findings give you information to consider as part of your due diligence; they do not guarantee future performance or determine what work may be needed.',
      items: [
        {
          title: 'The Inspection Is the Service',
          icon: 'camera',
          description:
            'We focus on inspecting the line and explaining the visible findings. The Sewer Pros does not perform sewer repair or replacement.',
        },
        {
          title: 'You Can Review the Evidence',
          icon: 'monitor',
          description:
            'We document visible conditions so you can review what the camera showed, rather than relying only on a verbal description.',
        },
        {
          title: 'Sewer and Drain Specialists',
          icon: 'pipe',
          description:
            'Our services focus on sewer inspection, diagnostics, locating, and cleaning.',
        },
        {
          title: 'The Next Step Is Your Decision',
          icon: 'checklist',
          description:
            'Use the findings to decide what questions to ask and whether to consult another qualified professional. If additional work is considered, you choose who performs it.',
        },
      ],
    },
    /*
      Mid-page request CTA: reuses the hub's `RequestServiceSection`
      treatment. `focus: 'right'` matches the photo's composition
      (inspection setup on the left, under the copy column) — see
      `ServicePageContent.request` and its `image.focus` doc.
    */
    request: {
      title: 'Request a Pre-Purchase Sewer Inspection',
      intro: [
        'Request a sewer inspection as part of your home-buying due diligence. Share your contact information, select the service and location, and include any details that may help clarify your request.',
        'The inspection documents visible conditions in the accessible portion of the sewer line on the day of the inspection. Findings can help inform your due diligence, but do not guarantee future performance.',
      ],
      image: {
        src: '/images/services/pre-purchase-sewer-inspection/the-sewer-pros-pre-purchase-inspection-request-cta-ridgid-seesnake-mid-page-cta-background-16x9.webp',
        focus: 'right',
      },
    },
    comparison: {
      /*
        `muted`, not the default navy: this page removes the plain
        filler form (`hideMidPageForm`) that otherwise keeps this
        section from touching "How Our Pre-Purchase Sewer Inspection
        Works" (also a brand surface). See ServicePageContent.hideMidPageForm.
      */
      surface: 'muted',
      title: 'Pre-Purchase Sewer Inspection vs. Related Services',
      intro:
        'A pre-purchase sewer inspection is a sewer camera inspection arranged in connection with a real estate transaction. Comparing it with related services can help you choose an appropriate starting point based on what you need to understand or address.',
      rows: [
        {
          service: 'Pre-Purchase Sewer Inspection',
          icon: 'house-search',
          purpose:
            'Document visible sewer-line conditions in accessible portions of the line before a property decision.',
          fit: 'You are buying, selling, or otherwise involved in a real estate transaction.',
        },
        {
          service: 'Sewer Camera Inspection',
          icon: 'camera',
          purpose: 'View and document visible conditions inside an accessible sewer line.',
          fit: 'You want to investigate recurring symptoms, plan a project, or understand a sewer line outside a real estate transaction.',
          pageId: id('svc-sewer-camera-inspection'),
        },
        {
          service: 'Sewer Cleaning',
          icon: 'pipe',
          purpose: 'Address certain blockages or buildup in the sewer line.',
          fit: 'A blockage or flow issue may need cleaning.',
          pageId: id('svc-sewer-cleaning'),
        },
        {
          service: 'Line Locating',
          icon: 'map-pin',
          purpose: 'Identify the approximate path of an underground sewer line.',
          fit: "You are planning work or need to verify the line's approximate route.",
          pageId: id('svc-sewer-line-locating'),
        },
      ],
      note: 'A general home inspection may not include a camera review of the sewer line. Ask the home inspector what their inspection covers.',
      related: {
        lead: 'Want more detail about the camera-inspection process?',
        pageId: id('svc-sewer-camera-inspection'),
        label: 'Explore sewer camera inspection',
      },
    },
    faqTitle: 'Common Questions About Pre-Purchase Sewer Inspection',
    faqColumns: 2,
    faq: [
      {
        question: 'What is a pre-purchase sewer inspection?',
        icon: <CameraIcon />,
        answer: (
          <p>
            A pre-purchase sewer inspection uses a camera to view accessible
            portions of a home&rsquo;s sewer line before a property
            transaction. It documents visible conditions on the day of the
            inspection to support your due diligence.
          </p>
        ),
      },
      {
        question: 'Is a sewer inspection part of a standard home inspection?',
        icon: <ChecklistIcon />,
        answer: (
          <p>
            Coverage varies. A general home inspection may not include a
            camera review of the sewer line. Ask your home inspector what
            their inspection covers.
          </p>
        ),
      },
      {
        question: 'What can a sewer camera inspection show before closing?',
        icon: <EyeIcon />,
        answer: (
          <p>
            Depending on access and visibility, the camera may show
            conditions such as root entry, visible cracks or offsets,
            standing water, restrictions, and pipe-material changes in the
            inspected portion of the line.
          </p>
        ),
      },
      {
        question:
          'Can a sewer scope guarantee the sewer line is problem-free?',
        icon: <DecisionIcon />,
        answer: (
          <p>
            No. The inspection documents what the camera can see in
            accessible portions of the line on the inspection day. It cannot
            guarantee future performance or rule out conditions outside the
            camera&rsquo;s view.
          </p>
        ),
      },
      {
        question: 'When should I schedule a pre-purchase sewer inspection?',
        icon: <CalendarClockIcon />,
        answer: (
          <p>
            It is most useful while you still have time to review the
            findings as part of your due diligence and discuss questions
            with your own advisors.
          </p>
        ),
      },
      {
        question: 'What if the inspection finds a problem?',
        icon: <ExplanationIcon />,
        answer: (
          <p>
            The findings can help you understand what was visible during the
            inspection. You can discuss questions or possible next steps
            with your real estate, legal, or plumbing professional.
          </p>
        ),
      },
      {
        question:
          'Can the inspection determine who is responsible for a sewer-line repair?',
        icon: <GuidanceIcon />,
        answer: (
          <p>
            No. Responsibility varies by jurisdiction. Confirm local
            requirements with the appropriate real estate, legal, or
            plumbing professional.
          </p>
        ),
      },
      {
        question:
          'What happens if the camera cannot access part of the sewer line?',
        icon: <AccessPointIcon />,
        answer: (
          <p>
            The inspection is limited to the portions the camera can access
            and view. Findings should be understood in that context; the
            inspection may not show the entire line.
          </p>
        ),
      },
      {
        question: 'Does The Sewer Pros perform sewer repairs or replacements?',
        icon: <IndependenceIcon />,
        answer: (
          <p>
            The Sewer Pros provides sewer inspection and cleaning services
            but does not perform sewer repair or replacement.
          </p>
        ),
      },
      {
        question: 'Can my agent or home inspector coordinate the appointment?',
        icon: <ChecklistIcon />,
        answer: (
          <p>
            An agent or home inspector can help coordinate communication
            around the transaction. Share the property location and relevant
            timing details when requesting an inspection.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-camera-inspection'),
      id('cmp-independent-vs-repair'),
    ],
    relatedTitle: 'Related Services',
    /*
      `detailed`: image, title, full description, and one explicit
      visible link per card — see `RelatedLinks`' own `detailed` variant
      doc. Both destinations are already-approved, already-authored
      pages (verified against data/pages/approved-pages.ts): no invented
      routes.
    */
    relatedVariant: 'detailed',
    relatedTitles: {
      [id('cmp-independent-vs-repair')]:
        'Independent Sewer Inspection vs. Repair Company Inspection',
    },
    relatedDescriptions: {
      [id('svc-sewer-camera-inspection')]:
        'A sewer camera inspection provides a direct view inside an accessible sewer line. The footage can help identify visible conditions such as roots, buildup, cracks, offsets, or standing water. Learn what the inspection can show and how it may help you understand the line’s condition.',
      [id('cmp-independent-vs-repair')]:
        'An independent sewer inspection focuses on observing and documenting visible conditions in the line. The Sewer Pros provides sewer inspection, diagnostics, and cleaning, not sewer line repair or replacement. Explore how inspection findings can help you ask informed questions and consider next steps.',
    },
    relatedLinkLabels: {
      [id('svc-sewer-camera-inspection')]: 'Learn About Sewer Camera Inspections',
      [id('cmp-independent-vs-repair')]: 'Compare Sewer Inspection Approaches',
    },
    /*
      Both reuse already-approved photography rather than new imagery:
      the sewer camera inspection card reuses the same frame
      `homeServiceCards` uses for that page; the comparison card wires
      in the RIDGID SeeSnake file already placed in this page's own
      image directory.
    */
    relatedImages: {
      [id('svc-sewer-camera-inspection')]: {
        src: '/images/services/service-cards/the-sewer-pros-sewer-camera-inspection-ridgid-monitor.webp',
        alt: 'Camera monitor showing the inside of a line, beside an open cleanout',
        source:
          'Supplied by the business owner, 2026-09-22. Rendered scene, not a photograph of a Sewer Pros job.',
      },
      [id('cmp-independent-vs-repair')]: {
        src: '/images/services/pre-purchase-sewer-inspection/the-sewer-pros-independent-sewer-inspection-vs-repair-company-inspection-ridgid-seesnake-4x3.webp',
        alt: 'RIDGID SeeSnake sewer camera monitor and equipment used during an independent sewer inspection',
        source: 'The Sewer Pros field photography.',
      },
    },
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
