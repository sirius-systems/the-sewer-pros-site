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

import { ChecklistIcon } from '@/components/sections/section-icons'
import { ApprovedInlineLink } from '@/components/links/ApprovedInlineLink'
import type { PageId, ServicePageContent } from '@/types'

const id = (value: string): PageId => value as PageId

export const serviceContent: Partial<Record<PageId, ServicePageContent>> = {
  /* ======================================================================
     Sewer Camera Inspection — 14 §29
     First page on Service Page Template v2 (`v2` below). Copy source:
     sewer-camera-inspection-page-content.md (v3).
     ====================================================================== */
  [id('svc-sewer-camera-inspection')]: {
    /*
      ⚠ THIS ENTRY RENDERS ON `ServicePageTemplateV2` (the `v2` key), NOT
      ON `ServiceHubTemplate`. The H1, the meta title and description and
      the primary and secondary hero actions stay on the base fields,
      because the route's metadata reads them there. Everything else the
      page shows is in `v2`. The old `hub`, `problems`, `process` and flat
      `faq` fields were replaced by their v2 equivalents for this entry
      only; every other service page is untouched.

      ⚠ THE H1 IS UNCHANGED. A longer H1 was drafted and not adopted: the
      current H1 is a deliberate decision on a keep-indexable L1 page and
      no traffic data justifies a change. The longer phrase is carried by
      the eyebrow and the SEO title. Changing it is a one-line edit.

      ⚠ WHAT THIS COPY DOES NOT CLAIM. No price, offer, free estimate,
      guarantee, warranty, licence (DEC-072), insurance wording, response
      time, same-day or emergency claim, equipment model or spec, duration
      or inspection interval in years. It does not say that video, written
      findings, PACP or LACP coding, footage counters, surface marks or
      re-inspection are included; it tells the reader to ask what is
      included. The scope statement (no repair, replacement, lining,
      excavation or pipe installation) appears in the hero and the final
      request block only.

      ⚠ MARKET-NEUTRAL, NO PHONE NUMBER (DEC-071). Numbers reach this page
      only through the labelled footer and the mobile bar's market sheet.
    */
    seoTitle: 'Sewer Camera Inspection for Homes',
    metaDescription:
      'A sewer camera inspection records the visible inside of accessible residential sewer and drain lines. See what it shows, what it can’t, and what to ask for.',
    serviceDescription:
      'A sewer camera inspection, sometimes called a sewer scope, is a visual inspection of the accessible inside of a drain or sewer line. A technician advances a camera on a flexible cable through an entry point and watches the live view on a monitor.',
    hero: {
      eyebrow: 'Residential sewer and drain diagnostics',
      title: 'Sewer Camera Inspection',
      primaryAction: { href: '#request', label: 'Request a Sewer Camera Inspection' },
      secondaryAction: { href: '#choose-market', label: 'Find Service in Your Area' },
      intro: (
        <>
          <p>
            A sewer camera inspection lets a technician see inside the
            accessible part of your drain or sewer line, instead of guessing
            from symptoms.
          </p>
          <p>
            We provide cleaning, camera diagnostics, and line locating only.
            We do not provide sewer repair, replacement, lining, excavation,
            or pipe installation.
          </p>
        </>
      ),
    },
    // No-op on v2 (the independent band always renders); kept so the entry
    // still reads as it did before the migration.
    showDifferentiator: true,
    v2: {
      defaultServiceId: 'svc-sewer-camera-inspection',
      hero: {
        scope: [
          'Residential drain and sewer lines',
          'Camera diagnostics, cleaning, and line locating',
          'No repair or replacement work offered',
        ],
        cardTitle: 'Request a sewer camera inspection',
      },
      definition: {
        title: 'What is a sewer camera inspection?',
        answer:
          'A sewer camera inspection, sometimes called a sewer scope, is a visual inspection of the accessible inside of a drain or sewer line. A technician advances a camera on a flexible cable through an entry point, watches the live view on a monitor, and typically records what the camera sees.',
        supporting: [
          'It is an inspection and documentation service. It shows what is visible in the section the camera reaches. It does not repair anything.',
          'Buying a home? A sewer camera inspection is a focused inspection that is separate from a general home inspection.',
        ],
      },
      signals: {
        title: 'When a camera inspection may be useful',
        note: 'These signs may point to a drain or sewer-line issue. They do not prove a specific cause. A camera helps document what is visible so you are not guessing.',
        image: 'equipment',
        items: [
          {
            title: 'Recurring clogs',
            description:
              'Clogs that keep returning may warrant a look at the accessible line instead of clearing each one as a separate event.',
          },
          {
            title: 'Slow-draining sinks, tubs, or toilets',
            description:
              'Slow drains can have several causes. A camera can document what is visible in the accessible line.',
          },
          {
            title: 'Gurgling from drains or toilets',
            description:
              'Gurgling can come from a drainage or venting issue as well as a sewer-line condition, so it does not point to one cause on its own.',
          },
          {
            title: 'Sewage-like odors',
            description:
              'A sewage-like odor may point to a drain or sewer-line issue. It does not prove a specific cause.',
          },
          {
            title: 'A sewage backup',
            description:
              'After a backup, a camera may help document what is visible. If the line is blocked and not draining, cleaning may need to come first.',
          },
          {
            title: 'Persistently wet areas near the sewer route',
            description:
              'Wet ground in your yard may be related to the line. A camera shows the inside of the pipe, not the soil around it.',
          },
        ],
      },
      limits: {
        title: 'What a sewer camera may show, and what it cannot confirm',
        intro:
          'Depending on the line condition and what the camera can reach and see, an inspection may document the conditions below. Image quality, lighting, flow, and the technician’s interpretation all affect what can be seen and how it is described.',
        canTitle: 'A camera inspection may document',
        can: [
          'Roots visible inside the pipe',
          'Grease, scale, sediment, or other deposits',
          'Obstructions such as wipes or debris',
          'Cracks and fractures',
          'Offset or separated joints',
          'Visible surface damage or corrosion on the inside of the pipe',
          'Standing water',
          'Connections where other lines join the pipe',
          'Collapse, when the camera can reach it. A complete collapse can stop the camera from going further',
        ],
        cannotTitle: 'It does not by itself show',
        cannot: [
          'Anything below the waterline. A camera generally cannot see under water.',
          'Pipe in sections the camera did not reach or could not view',
          'The condition of the soil around the pipe, or voids outside the pipe wall',
          'Pipe wall thickness or structural capacity',
          'Pipe slope, or how deep the pipe is. Water patterns may suggest a low spot, but a camera does not measure it.',
          'The full extent of tree roots outside the pipe',
          'Whether every leak has been found. A camera can record visible infiltration or a visibly open defect, but it cannot show that no leaks exist outside what it can see.',
          'How much service life the pipe has left',
        ],
        callout:
          'A visibly clear line is not proof that the whole line, or the ground around it, is in good condition.',
        related: {
          lead: 'Line locating is a separate service. When it is in the scope of work and the equipment supports it, a camera sonde and a compatible receiver can help estimate the surface position of a point in the line. A locate is not a survey, it does not authorize excavation, and it is not utility clearance or an exact depth.',
          pageId: id('svc-sewer-line-locating'),
          label: 'Sewer line locating',
        },
      },
      process: {
        title: 'How a sewer camera inspection works',
        intro:
          'How long an inspection takes depends on line length, access, bends, debris, standing water, and how many features need to be documented.',
        steps: [
          {
            title: 'Access',
            description:
              'The technician identifies an accessible entry point, commonly an exterior cleanout.',
          },
          {
            title: 'Camera entry',
            description:
              'A camera on a flexible push cable is inserted and advanced through the accessible line.',
          },
          {
            title: 'Live viewing',
            description:
              'The technician watches the monitor and pauses at visible features or conditions.',
          },
          {
            title: 'Recording',
            description:
              'Inspections are typically recorded. Ask what is included for your appointment.',
          },
          {
            title: 'Documentation',
            description:
              'Visible conditions are noted, along with any part of the line that could not be viewed.',
          },
        ],
        prep: {
          title: 'Access points and preparing your property',
          image: 'process',
          items: [
            'The most common entry point is an exterior cleanout. The right entry point depends on your plumbing layout, the route of the line, the pipe size, and how much of the line needs to be viewed.',
            'Make sure the technician has safe access to the agreed entry point.',
            'Tell us if the inspection relates to a home purchase, an inspection period, or a recurring backup.',
          ],
        },
      },
      decision: {
        title: 'Cleaning and the camera are separate services',
        answer:
          'Cleaning and camera inspection can be combined, but neither requires the other. Cleaning can improve camera visibility. It does not repair pipe defects.',
        note: 'Some public utilities suggest clearing a blockage, then using a camera. Others suggest a camera when a blockage does not respond to simple clearing. There is no single required order. It depends on the line. Hydro jetting is condition-dependent and is not appropriate for every pipe or blockage.',
        listTitle: 'When cleaning may need to come first',
        list: [
          'A line that is blocked and not draining. A camera generally cannot see under the water.',
          'Grease, roots, or other debris covering the lens or blocking the camera, so the view is too limited to document much.',
          'Standing water or debris that keeps the camera from traveling.',
        ],
        links: [
          { pageId: id('svc-sewer-cleaning'), label: 'Sewer Cleaning' },
          { pageId: id('svc-hydro-jetting'), label: 'Hydro Jetting' },
          {
            pageId: id('svc-sewer-cleaning-camera-inspection'),
            label: 'Sewer Cleaning and Camera Inspection',
          },
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
            current: true,
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
      ask: {
        title: 'What to ask for, and what to keep',
        intro:
          'Before you book any camera inspection, ask what you will receive. What is provided can vary by appointment.',
        items: [
          {
            title: 'Recorded video',
            description: 'Ask whether the video is included and whether you keep a copy.',
          },
          {
            title: 'Written observations',
            description:
              'Ask for observations that include any part of the line that could not be viewed, and why.',
          },
          {
            title: 'Access point and location',
            description:
              'Ask which access point was used and where along the line conditions were seen.',
          },
          {
            title: 'Line locating',
            description:
              'Ask whether line locating was performed and how it was documented.',
          },
          {
            title: 'Coding system',
            description:
              'Ask whether any report uses a standardized coding system, and what it means.',
          },
        ],
        keep: {
          title: 'Keep the original video and written findings',
          image: 'findings-review',
          body: [
            'They are useful as a later reference. If someone recommends costly work, you can compare written estimates and ask another company to review the video before you decide. A camera finding is a visible observation. It is not a repair recommendation, and it does not by itself set a scope of work. Where a finding is unclear or may call for further evaluation, that evaluation is outside our cleaning and diagnostic scope.',
          ],
        },
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
              'Roots can enter a sewer line through joints or existing openings. Camera footage may show where roots are visible and how much of the pipe they appear to affect. The inspection documents what the camera can reach; it does not establish the full extent of a problem outside the camera’s view.',
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
      // The property-managers row was removed: this page is residential.
      // No homeowners audience page exists in the registry, so no row is
      // added for one.
      audiences: {
        title: 'Who Can Benefit from a Sewer Camera Inspection?',
        intro:
          'Homeowners with recurring drain trouble, home buyers and sellers, and real estate agents and home inspectors can all use a defined visual record of an accessible residential line. Findings document visible conditions in the section the camera reaches.',
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
        ],
      },
      markets: {
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
      /*
        ⚠ FAQ: 23 QUESTIONS IN FIVE GROUPS, ANSWERS VERBATIM FROM THE
        CONTENT DOC. Plain strings only: `lib/schema/faq.ts` throws on
        custom components, and FAQPage JSON-LD must equal the visible
        text (DEC-114). The group label is navigation only and is not
        part of any answer.
      */
      faqTitle: 'Common Questions About Sewer Camera Inspection',
      faq: [
        {
          group: 'How it works',
          question: 'What is a sewer camera inspection?',
          answer: `A sewer camera inspection is a visual inspection of the accessible inside of a drain or sewer line. A technician advances a camera on a flexible cable, views it live, and typically records it. Some people call it a sewer scope.`,
        },
        {
          group: 'How it works',
          question: 'How does a sewer camera inspection work?',
          answer: `A camera on a flexible cable goes in through an accessible entry point, usually a cleanout. The technician watches the live view, pauses at visible conditions, and documents what is seen.`,
        },
        {
          group: 'How it works',
          question: 'Where does the camera go in?',
          answer: `Most often through an exterior cleanout. The best choice depends on your plumbing layout and the line.`,
        },
        {
          group: 'How it works',
          question: 'Can a sewer camera find a clog?',
          answer: `It can document a visible obstruction when the camera can reach it and the lens can see it. A camera generally cannot see under water, so in a line that is blocked and not draining, the view may be unusable until the line drains.`,
        },
        {
          group: 'How it works',
          question: 'Should the line be cleaned before the camera goes in?',
          answer: `Sometimes. If standing water or debris keeps the camera from traveling or seeing, cleaning may be needed first. There is no universal order. It depends on the condition of the line.`,
        },
        {
          group: 'What it can and can’t show',
          question: 'What can a sewer camera inspection show?',
          answer: `It may document visible roots, deposits, obstructions, cracks, fractures, offset or separated joints, visible surface damage, standing water, and connections, depending on access and visibility.`,
        },
        {
          group: 'What it can and can’t show',
          question: 'What can’t a sewer camera inspection show?',
          answer: `It does not show anything under the waterline, the soil around the pipe, pipe wall thickness, structural capacity, slope or depth, how much service life the pipe has left, or conditions in sections the camera did not reach.`,
        },
        {
          group: 'What it can and can’t show',
          question: 'Can a sewer camera tell how deep the pipe is?',
          answer: `No. The footage counter shows how far the camera has traveled from the entry point. It is not depth and not a surveyed location. A camera also does not measure pipe slope.`,
        },
        {
          group: 'What it can and can’t show',
          question: 'Can a sewer camera see tree roots?',
          answer: `It can document roots that are visible inside the pipe. It cannot show the full root system outside the pipe.`,
        },
        {
          group: 'What it can and can’t show',
          question: 'Can a sewer camera see a leak?',
          answer: `It may record visible infiltration or a visibly open defect. It cannot confirm there are no leaks, because it does not see outside the pipe wall, the surrounding soil, or below the waterline.`,
        },
        {
          group: 'What it can and can’t show',
          question: 'Will the camera show a belly or sag in my line?',
          answer: `Water patterns seen on camera may suggest a low spot. A camera does not measure slope, so it cannot confirm how deep or how long a sag is.`,
        },
        {
          group: 'What it can and can’t show',
          question: 'What does standing water in the line mean?',
          answer: `Standing water can have more than one explanation, such as heavy flow, a temporary stoppage, or a low spot. A camera view alone does not prove which one applies.`,
        },
        {
          group: 'What it can and can’t show',
          question: 'Why might the camera not reach the whole line?',
          answer: `Bends, pipe size changes, debris, roots, standing water, damaged pipe, or limited access can stop the camera or limit the view. A good record states what was viewed and what was not.`,
        },
        {
          group: 'Is it right for my situation?',
          question: 'Do I need a camera inspection if my drains are slow or gurgling?',
          answer: `A camera inspection is one way to look at accessible parts of the line. Slow drains and gurgling may point to a drain or sewer-line issue, but they do not prove a specific cause. Gurgling can also be related to venting.`,
        },
        {
          group: 'Is it right for my situation?',
          question: 'Should I get a sewer scope before buying a house?',
          answer: `Some public utilities advise buyers to have the sewer line inspected before purchase. Timing and conditions are set by your purchase agreement. A sewer video shows visible conditions in accessible pipe. It does not decide whether you should buy.`,
        },
        {
          group: 'Is it right for my situation?',
          question: 'How often should I have a sewer camera inspection?',
          answer: `Some utilities recommend periodic inspection, but recommended intervals vary by property and by local guidance. Nearby trees, recurring clogs, odors, and past drainage problems can support checking more often.`,
        },
        {
          group: 'Is it right for my situation?',
          question: 'Why shouldn’t "flushable" wipes go in the toilet?',
          answer: `Utilities advise putting wipes in the trash, including those labeled flushable. The label is not a guarantee that a product breaks down safely in plumbing or sewers.`,
        },
        {
          group: 'Records, locating, and next steps',
          question: 'Will I get the video and written findings?',
          answer: `Video is included when a camera is used, and written findings are included. Ask whether the findings note any part of the line that could not be viewed.`,
        },
        {
          group: 'Records, locating, and next steps',
          question: 'Can you mark where a point is in my yard?',
          answer: `Line locating is a separate service. When it is included in the scope and when the equipment supports it, a camera sonde and receiver can help estimate the surface position of a point in the line. A locate is not a survey, utility clearance, or an exact depth. Ask whether surface marks are provided for your appointment.`,
        },
        {
          group: 'Records, locating, and next steps',
          question: 'What should I keep after the inspection?',
          answer: `Keep the original video and written findings. They are useful as a later reference. If someone recommends costly work, you can share the video with another company for a second look and compare written estimates.`,
        },
        {
          group: 'Records, locating, and next steps',
          question: 'What should I do if the inspection finds a problem?',
          answer: `Review the footage and findings, ask what was directly observed and what could not be assessed, and consider whether you need a separate evaluation. The inspection can inform your next decision, but it does not by itself determine whether work is required or which provider should perform it.`,
        },
        {
          group: 'Scope and service areas',
          question: 'How much does it cost, and how long does it take?',
          answer: `The scope of a camera inspection varies with access, line length and size, bends, flow or debris, whether cleaning is needed for visibility, and the video, report, or locating you request. Ask what is included before you book.`,
        },
        {
          group: 'Scope and service areas',
          question: 'Which areas does The Sewer Pros serve?',
          answer: `The Sewer Pros provides sewer inspection and diagnostic services in St. Louis, Missouri; San Diego, California; and Las Vegas, Nevada. Select your service area or contact the team to confirm availability for your property.`,
        },
      ],
      request: {
        title: 'Request a sewer camera inspection',
        intro: [
          'Tell us what your drains are doing and we will help you choose between a camera inspection, cleaning, or both. The Sewer Pros provides inspection and diagnostic services in St. Louis, San Diego, and Las Vegas.',
          'Choose your service area, tell us what you have noticed, and let us know if the inspection relates to recurring backups, a home purchase, or another sewer concern.',
          'This service is designed for accessible residential sewer and drain lines. Equipment selection and available service depend on the entry point, pipe size, line condition, and scope of work.',
        ],
        scopeNote:
          'We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.',
      },
    },
    relatedPageIds: [
      id('svc-sewer-cleaning-camera-inspection'),
      id('svc-pre-purchase-sewer-inspection'),
      id('res-camera-report'),
      id('res-read-video'),
      id('svc-sewer-cleaning'),
      id('svc-hydro-jetting'),
      id('svc-sewer-line-locating'),
      id('svc-recurring-sewer-backup-diagnosis'),
    ],
    relatedDescriptions: {
      [id('res-camera-report')]:
        'What a complete report should include, so you can compare quotes or revisit the findings later.',
      [id('res-read-video')]:
        'How to read root intrusion, cracks, and other defects on your own inspection video.',
      [id('svc-sewer-cleaning')]:
        'Clearing certain blockages and buildup from an accessible sewer line.',
      [id('svc-hydro-jetting')]:
        'High-pressure water cleaning, when the line is a suitable candidate.',
      [id('svc-sewer-line-locating')]:
        'Estimating the surface position of a point in an underground line.',
      [id('svc-recurring-sewer-backup-diagnosis')]:
        'Looking at the accessible line when a backup keeps coming back.',
    },
    // Not rendered by v2: the final request section replaces the separate
    // closing form and call-to-action band.
    cta: {
      title: 'Get a clearer view of your sewer line',
      body: 'Choose your market above to schedule a sewer camera inspection, ask about availability, or get help with a current sewer or drain concern.',
    },
  },

  /* ======================================================================
     Sewer Cleaning - 14 §31
     Second page on Service Page Template v2 (`v2` below). Copy source:
     sewer-cleaning-page-content.md.
     ====================================================================== */
  [id('svc-sewer-cleaning')]: {
    /*
      ⚠ THIS ENTRY RENDERS ON `ServicePageTemplateV2` (the `v2` key), NOT
      ON `ServiceHubTemplate`. The H1, the meta title and description and
      the primary and secondary hero actions stay on the base fields,
      because the route's metadata reads them there. Everything else the
      page shows is in `v2`. The old `hub`, `problems`, `process` and flat
      `faq` fields were replaced by their v2 equivalents for this entry
      only; every other service page is untouched.

      ⚠ WHAT THIS COPY DOES NOT CLAIM. No price, offer, free estimate,
      guarantee, warranty, licence (DEC-072), insurance wording, response
      time, same-day or emergency claim, equipment model or spec, duration
      or interval in years. The page deliberately states no standard time
      or price. It does not say that video, written findings, standardized
      coding, locating or a re-inspection are included; it tells the
      reader to ask what is included. A camera "may" be used before,
      after or both, with no fixed order. The scope statement (no repair,
      replacement, lining, excavation or pipe installation) appears in
      full in the definition scope box and the final request block, and in
      its short form in the hero.

      ⚠ MARKET-NEUTRAL, NO PHONE NUMBER (DEC-071). Numbers reach this page
      only through the labelled footer and the mobile bar's market sheet.
      The content doc's "Prefer to call?" line and its appointment
      preparation placeholder are NOT built: both were unconfirmed
      placeholders, and neither may ship as visible text.

      ⚠ NO EVIDENCE MOSAIC. There is no verified cleaning imagery for it,
      so `v2.evidence` is deliberately absent.

      ⚠ ONE LINK DROPPED. The content doc links "About independent
      inspection" and "Independent sewer inspection" to the independent
      second-opinion page, which is Phase 2 and not in the registry. The
      band keeps its sentence without the link and the related list has
      three links, not four.
    */
    seoTitle: 'Sewer Cleaning: Methods, Process and Limits',
    metaDescription:
      'What sewer cleaning is, how jetting and cable cleaning work, what a camera can show, and what cleaning does not fix. St. Louis, San Diego and Las Vegas.',
    serviceDescription:
      'Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in a sewer line. It uses hydraulic methods, such as high-pressure water jetting, or mechanical methods, such as a cable machine, chosen to suit the line.',
    hero: {
      eyebrow: 'Residential sewer and drain cleaning',
      title: 'Sewer Cleaning',
      primaryAction: { href: '#request', label: 'Request Sewer Cleaning' },
      secondaryAction: { href: '#choose-market', label: 'Find Service in Your Area' },
      intro: (
        <>
          <p>
            Sewer cleaning removes grease, roots, debris, and other buildup
            from an accessible sewer line so wastewater can flow, and so the
            line can be seen more clearly.
          </p>
          <p>
            We provide cleaning, camera diagnostics, and line locating only.
            We do not provide sewer repair, replacement, lining, excavation,
            or pipe installation.
          </p>
        </>
      ),
    },
    // No-op on v2 (the independent band always renders); kept so the entry
    // still reads as it did before the migration.
    showDifferentiator: true,
    v2: {
      defaultServiceId: 'svc-sewer-cleaning',
      images: {
        hero: '/images/services/sewer-cleaning/hero/the-sewer-pros-sewer-cleaning-ridgid-seesnake-hero-16x9.webp',
        request:
          '/images/services/sewer-cleaning/the-sewer-pros-sewer-cleaning-request-cta-background-ridgid-seesnake-16x9.webp',
      },
      hero: {
        scope: [
          'Residential drain and sewer lines',
          'Cleaning method chosen for the condition of the line',
          'No repair or replacement work offered',
        ],
        cardTitle: 'Request sewer cleaning',
        cardIntro:
          'Tell us what your drains are doing. We will help you choose between cleaning, a camera inspection, or both.',
      },
      navLabels: {
        signals: 'When it may be worth asking about',
        process: 'What happens during a visit',
        methods: 'How the line is cleaned',
        limits: 'What a camera shows',
        decision: 'What cleaning does not do',
        ask: 'What to ask for',
        faq: 'Questions',
      },
      definition: {
        eyebrow: 'The short answer',
        title: 'What is sewer cleaning?',
        answer:
          'Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in a sewer line. It uses hydraulic methods, such as high-pressure water jetting, or mechanical methods, such as a cable machine, chosen to suit the line. It clears and maintains the pipe. It does not repair it.',
        supporting: [
          'A camera may be used to document the line before cleaning, after cleaning, or both. What your appointment includes depends on the line and the scope of work. This page covers accessible private-property sewer and drain lines, not public sewer mains.',
        ],
        scope:
          'This service is designed for accessible residential sewer and drain lines. Equipment selection and available service depend on the entry point, pipe size, line condition, and scope of work. We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.',
      },
      signals: {
        eyebrow: 'Signs to look into',
        title: 'When sewer cleaning may be worth asking about',
        note: (
          <>
            These signs can be associated with a sewer-line issue. They do not
            prove a cause, and not every one calls for cleaning. If only one
            fixture is affected,{' '}
            <ApprovedInlineLink pageId={id('svc-drain-cleaning')}>
              drain cleaning
            </ApprovedInlineLink>{' '}
            may be the better fit. If the cause is unclear, a{' '}
            <ApprovedInlineLink pageId={id('svc-sewer-camera-inspection')}>
              camera inspection
            </ApprovedInlineLink>{' '}
            may be a better starting point.
          </>
        ),
        image: 'cleaning-definition',
        items: [
          {
            title: 'Several fixtures draining slowly at once',
            description:
              'When more than one fixture is slow at the same time, the restriction may be farther downstream than a single fixture’s drain.',
          },
          {
            title: 'Gurgling from drains or toilets',
            description:
              'Gurgling can accompany restricted flow. It can also come from a venting issue, so it does not point to one cause on its own.',
          },
          {
            title: 'Clogs that keep coming back',
            description:
              'A clog that returns after clearing may mean buildup, roots, or debris remain in the line, or that a pipe condition is involved. A camera can help show which.',
          },
          {
            title: 'Sewage-like odors',
            description:
              'Persistent odors can be associated with a drainage or sewer-line problem. The source should be assessed rather than assumed.',
          },
          {
            title: 'Water rising through a floor drain, shower, or toilet',
            description:
              'This can indicate a blockage in the sewer line. If sewage is actively backing up into your home, contact us to discuss the situation.',
          },
          {
            title: 'Persistently wet or unusually lush patches in the yard',
            description:
              'These can be warning signs, but they do not prove a leak. A camera shows the inside of the pipe, not the soil around it.',
          },
        ],
      },
      process: {
        eyebrow: 'What happens on the day',
        title: 'What happens during a sewer cleaning visit',
        intro:
          'The steps below describe a typical visit. What yours includes depends on the line, the entry point, and the scope of work.',
        steps: [
          {
            title: 'Access',
            description:
              'The technician identifies an accessible entry point, commonly a cleanout.',
          },
          {
            title: 'Assessment',
            description:
              'The entry point, pipe size, reported symptoms, and what equipment can be used are considered.',
          },
          {
            title: 'Camera, when included',
            description:
              'A camera may be used to see the line first, when it can be viewed. If the line is blocked and full of water, cleaning may have to come first.',
          },
          {
            title: 'Cleaning',
            description:
              'Hydraulic or mechanical equipment is used to address the restriction, in as many passes as the line calls for.',
          },
          {
            title: 'Review',
            description:
              'A camera may be used again to see what the cleaning achieved and note conditions in the pipe, including any part it could not reach.',
          },
        ],
        // The content doc's fifth bullet ("Appointment preparation: [CONFIRM
        // ...]") is an unconfirmed placeholder and is deliberately not built.
        prep: {
          title: 'Access points and preparing for your visit',
          image: 'cleaning-process',
          items: [
            'The most common entry point is a cleanout. Whether one exists, and where, depends on your property’s plumbing layout.',
            'Other entry points may be possible, depending on the property and the equipment. Ask what applies to yours.',
            'Make sure the technician can safely reach the agreed entry point and that the work area is clear.',
            'Tell us what you have noticed, whether the line has been cleared before, and whether the visit relates to a home purchase or an inspection period.',
          ],
        },
      },
      methods: {
        eyebrow: 'Hydraulic and mechanical',
        title: 'How sewer lines are cleaned',
        intro:
          'Depending on the line, a technician may use hydraulic cleaning, mechanical cleaning, or both. The amount and type of buildup can change the approach and the number of passes. Which equipment is used on your visit depends on the line and the scope of work.',
        caption: 'Hydraulic and mechanical sewer cleaning compared',
        columns: ['Method', 'How it works', 'Often considered for', 'Limits'],
        rows: [
          {
            method: 'Hydro jetting',
            pageId: id('svc-hydro-jetting'),
            how: 'Pressurized water through a hose and nozzle works at buildup on the pipe wall and moves debris toward the access point.',
            considered:
              'Grease, sludge, sediment, and debris buildup. Some roots, depending on the line.',
            limits:
              'Depends on pipe condition, size, debris, access, and equipment limits. It is not appropriate for every pipe or blockage.',
          },
          {
            method: 'Cable cleaning',
            how: 'A rotating or advancing cable with a tool physically cuts or breaks through an obstruction.',
            considered: 'A localized obstruction such as roots or a stoppage.',
            limits:
              'Tool choice matters. Mechanical tools can score some plastic pipe, so the method and tool are chosen for the line.',
          },
        ],
        note: (
          <>
            Defects, sags, heavy debris, and limited drainage capacity can
            raise the risk of a backup during high-pressure cleaning. That is
            one reason a method is matched to the line. For a fuller
            comparison, see{' '}
            <ApprovedInlineLink pageId={id('cmp-hydro-vs-snaking')}>
              hydro jetting vs. snaking
            </ApprovedInlineLink>
            .
          </>
        ),
      },
      limitsAfterProcess: true,
      limits: {
        eyebrow: 'Evidence and its limits',
        title: 'What a camera may show, and what it cannot confirm',
        intro:
          'Cleaning can improve what a camera is able to document, because debris and grease can hide pipe-wall conditions and block the camera’s travel. A camera records what is visible in the part of the line it can reach.',
        canTitle: 'A camera may document',
        canLead: 'Visible conditions in the section the camera reaches',
        can: [
          'Roots visible inside the pipe',
          'Grease, scale, sediment, or other deposits',
          'Obstructions such as wipes or debris',
          'Cracks, and offset or separated joints',
          'Visible surface damage or corrosion on the inside of the pipe',
          'Standing water',
          'Connections where other lines join the pipe',
        ],
        cannotTitle: 'It does not by itself show',
        cannotLead: 'Where a camera view stops',
        cannot: [
          'Anything below the waterline',
          'Pipe the camera did not reach or could not view. If the camera cannot pass, that part of the line is unconfirmed.',
          'The soil around the pipe, voids outside the pipe wall, or damage on the outside of the pipe',
          'Pipe wall thickness or structural capacity',
          'Every leak path. A camera can record visible water entering the pipe, not where water outside it comes from.',
          'How much service life the pipe has left',
        ],
        callout:
          'A line that flows again is not proof that the pipe is sound. Cleaning and structural condition are separate questions.',
      },
      decision: {
        eyebrow: 'Scope, plainly',
        title: 'What sewer cleaning does not do',
        answer:
          'Sewer cleaning clears and maintains the line. It does not repair a cracked, offset, separated, or collapsed pipe.',
        note: 'Cleaning also may not stop a problem from returning. Roots can regrow and buildup can reappear, particularly where a pipe condition lets roots or debris in. A camera finding is an observation, not a repair plan.',
        listTitle: 'When cleaning may be enough, and when to look further',
        list: [
          'A restriction caused by removable grease, roots, wipes, or debris may clear with cleaning.',
          'A clog that keeps returning after clearing may call for a camera look at the line.',
          'If a camera shows a visible structural condition, or cannot complete the view, the findings should be documented and further evaluation may be appropriate. That evaluation is outside our cleaning and diagnostic scope.',
        ],
        links: [
          {
            pageId: id('svc-sewer-cleaning-camera-inspection'),
            label: 'Sewer cleaning and camera inspection',
          },
          { pageId: id('svc-sewer-camera-inspection'), label: 'Sewer camera inspection' },
          {
            pageId: id('svc-recurring-sewer-backup-diagnosis'),
            label: 'Recurring backup diagnosis',
          },
        ],
      },
      independent: {
        eyebrow: 'Independent by design',
        title: 'Major sewer decisions deserve clear evidence.',
        steps: [
          {
            title: 'Clear',
            body: 'We address the restriction and, where a camera is used, look at what we can of the accessible line.',
          },
          {
            title: 'Document',
            body: 'You can ask for the observations, including what the camera could not reach.',
          },
          {
            title: 'Decide',
            body: 'You decide next steps with evidence in hand. The Sewer Pros does not sell repair or replacement.',
          },
        ],
        note: 'If someone has recommended costly work, ask for the inspection video and written findings, get multiple written estimates, and ask for an explanation when they differ.',
        // Once the independent second-opinion page is in the registry, add
        // link: { pageId: <its id>, label: 'About independent inspection' }.
        // It is Phase 2 and unbuilt, so the band carries no link today.
      },
      comparison: {
        eyebrow: 'Which service fits',
        title: 'Sewer cleaning vs. related services',
        caption: 'Sewer cleaning compared with related services',
        columns: ['Service', 'What it does', 'May fit when'],
        rows: [
          {
            service: 'Sewer cleaning',
            purpose:
              'Removes buildup and obstructions that restrict flow in an accessible sewer line',
            fit: 'Flow is restricted by grease, roots, debris, or similar material',
            current: true,
          },
          {
            service: 'Hydro jetting',
            purpose: 'Uses high-pressure water for suitable cleaning applications',
            fit: 'More substantial buildup or recurring drainage issues, when the line is a suitable candidate',
            pageId: id('svc-hydro-jetting'),
          },
          {
            service: 'Drain cleaning',
            purpose: 'Restores drainage at affected fixtures and branch lines',
            fit: 'Clogs or slow drains at one fixture',
            pageId: id('svc-drain-cleaning'),
          },
          {
            service: 'Sewer camera inspection',
            purpose:
              'Shows visible conditions inside an accessible line. It does not clear a restriction.',
            fit: 'The cause or condition of the line is unclear',
            pageId: id('svc-sewer-camera-inspection'),
          },
          {
            service: 'Cleaning and camera inspection',
            purpose:
              'Reviews visible line conditions and addresses an appropriate restriction when warranted',
            fit: 'A problem keeps returning or several fixtures are affected',
            pageId: id('svc-sewer-cleaning-camera-inspection'),
          },
          {
            service: 'Line locating',
            purpose:
              'Identifies the approximate path of an underground line. A locate is an estimate, not a survey.',
            fit: 'You need to know where the line runs',
            pageId: id('svc-sewer-line-locating'),
          },
        ],
      },
      ask: {
        eyebrow: 'Before you book',
        title: 'What to ask for, and what to keep',
        intro:
          'What is included can vary by appointment. Ask before you book, and keep what you receive.',
        items: [
          {
            title: 'Video of the line',
            description:
              'If a camera is used, ask whether video is included and whether you keep a copy.',
          },
          {
            title: 'Written findings',
            description:
              'Ask for observations that include any part of the line the camera could not reach, and why.',
          },
          {
            title: 'Access point and location',
            description:
              'Ask which entry point was used and where along the line conditions were seen.',
          },
          {
            title: 'The cleaning record',
            description:
              'Ask what method was used, and whether a camera review followed the cleaning.',
          },
          {
            title: 'Coding and locating',
            description:
              'Ask whether a report uses a standardized coding system, and whether locating is part of the visit.',
          },
        ],
        keep: {
          title: 'Keep the video and written findings',
          image: 'cleaning-monitor',
          body: [
            'They are useful as a later reference. If someone recommends costly work, you can ask another company to review the video and compare written estimates before you decide.',
            'A camera finding is a visible observation. It is not a repair recommendation, and it does not by itself set a scope of work.',
          ],
        },
      },
      factors: {
        eyebrow: 'What changes the scope',
        title: 'What affects a sewer cleaning visit',
        intro:
          'We do not publish a standard time or price on this page. These factors shape the scope of a visit, so they are the things to describe when you request service.',
        items: [
          {
            title: 'Access',
            description:
              'Whether a cleanout is available and how easily the work area can be reached.',
          },
          {
            title: 'Line length and pipe size',
            description:
              'Longer accessible runs can take more cleaning and camera work. Pipe diameter helps determine which equipment can be used.',
          },
          {
            title: 'Amount and type of buildup',
            description:
              'Light buildup and heavy or encrusted deposits are different jobs and can call for different approaches.',
          },
          {
            title: 'Camera visibility',
            description:
              'Cleaning may be needed before a camera can clearly document the pipe.',
          },
          {
            title: 'Recording, reporting, and locating',
            description:
              'Video, written findings, and locating are separate from the cleaning itself. Ask whether they are included.',
          },
        ],
        keep: {
          title: 'How often should a line be cleaned?',
          body: [
            'There is no single schedule that suits every property. Public agencies publish different local recommendations.',
            'Tree roots, the age and material of the pipe, and a history of recurring problems can all justify more frequent attention.',
          ],
        },
      },
      myths: {
        eyebrow: 'Worth knowing',
        title: 'Four common myths about sewer cleaning',
        items: [
          {
            myth: 'Flushable wipes are safe for every sewer line.',
            answer:
              'Many utilities advise against flushing wipes, including products labeled flushable, because they can contribute to blockages in a home’s line and in public sewers. Follow your local utility’s guidance and put wipes in the trash.',
          },
          {
            myth: 'A chemical drain cleaner will solve a sewer backup.',
            answer:
              'Public utility guidance says chemical drain cleaners may not help during a sewer backup and can cause additional damage. Hazardous household chemicals should not go down drains.',
          },
          {
            myth: 'More pressure is always better.',
            answer:
              'Pressure ratings describe what a machine can do, not what a pipe can take. The right method and equipment depend on the pipe, the blockage, and the access.',
          },
          {
            myth: 'Liquid grease is fine to pour down the drain.',
            answer:
              'Fats, oils, and grease coat pipes and build up over time, even when poured liquid. Scrape them into the trash instead.',
          },
        ],
      },
      situations: {
        eyebrow: 'Related situations',
        title: 'If your situation is a little different',
        items: [
          {
            title: 'Drains keep clogging',
            body: 'If clearing has not held, a camera can help show what is contributing. Cleaning removes the obstruction, not necessarily what is causing it.',
          },
          {
            title: 'Buying or selling a home',
            body: (
              <>
                Sewer cleaning is maintenance. A{' '}
                <ApprovedInlineLink pageId={id('svc-pre-purchase-sewer-inspection')}>
                  pre-purchase sewer inspection
                </ApprovedInlineLink>{' '}
                is a focused look at the line, and a sewer scope is often
                separate from a general home inspection.
              </>
            ),
          },
          {
            title: 'Told you need major work',
            body: 'Ask for the evidence, get multiple written estimates, and consider an independent look at the inspection video before you decide.',
          },
        ],
      },
      markets: {
        id: 'choose-market',
        eyebrow: 'Service areas',
        title: 'Sewer cleaning service areas',
        intro: 'Choose your market for local service details and scheduling options.',
        items: [
          {
            pageId: id('market-st-louis-mo'),
            description: 'Residential sewer and drain cleaning across the St. Louis area.',
            actionLabel: 'View St. Louis sewer cleaning',
          },
          {
            pageId: id('market-san-diego-ca'),
            description: 'Residential sewer and drain cleaning in the San Diego area.',
            actionLabel: 'View San Diego sewer cleaning',
          },
          {
            pageId: id('market-las-vegas-nv'),
            description:
              'Residential sewer and drain cleaning across the Las Vegas Valley.',
            actionLabel: 'View Las Vegas sewer cleaning',
          },
        ],
      },
      /*
        ⚠ FAQ: 14 QUESTIONS IN FOUR GROUPS, ANSWERS VERBATIM FROM THE
        CONTENT DOC. Plain strings only: `lib/schema/faq.ts` throws on
        custom components, and FAQPage JSON-LD must equal the visible
        text (DEC-114). The group label is navigation only and is not
        part of any answer.
      */
      faqTitle: 'Sewer cleaning questions',
      eyebrows: { faq: 'Questions', related: 'Related', request: 'Request service' },
      faq: [
        {
          group: 'The basics',
          question: 'What is sewer cleaning?',
          answer: `Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in a sewer line, using hydraulic or mechanical methods. It clears and maintains the pipe. It does not repair it.`,
        },
        {
          group: 'The basics',
          question: 'What happens during a sewer cleaning visit?',
          answer: `A technician identifies an accessible entry point, assesses the line, and may use a camera to see it. Cleaning is then done with equipment chosen for the line, and a camera may be used again to document the result. Which steps apply depends on the line and the scope of work.`,
        },
        {
          group: 'The basics',
          question: 'What is the difference between hydro jetting and snaking?',
          answer: `Hydro jetting is hydraulic cleaning: pressurized water through a hose and nozzle. Snaking, or cable cleaning, is mechanical: a rotating or advancing cable with a tool works on an obstruction. Which is appropriate depends on the line and what is in it.`,
        },
        {
          group: 'The basics',
          question: 'Do you use a camera before or after cleaning?',
          answer: `A camera may be used to document the line before cleaning, after cleaning, or both, when the line can be viewed. There is no single required order. If a line is blocked and full of water, a camera cannot see under the water, so cleaning may need to come first. Ask what is included in your appointment.`,
        },
        {
          group: 'Limits and risks',
          question: 'Will hydro jetting damage my pipes?',
          answer: `High-pressure cleaning is condition-dependent. Defects, sags, heavy debris, and limited drainage capacity can raise the risk of a backup during jetting, and some tools can damage certain pipe. Method and equipment are matched to the line, and no method is suitable for every pipe or blockage.`,
        },
        {
          group: 'Limits and risks',
          question: 'Can a sewer camera always find the problem?',
          answer: `No. A camera documents only the part of the line it can reach and view. Standing water, a significant blockage, defects, bends, and limited access can prevent a complete view.`,
        },
        {
          group: 'Limits and risks',
          question: 'What happens if the camera cannot get through the line?',
          answer: `The part of the line the camera did not reach is unconfirmed. Where loose debris is the limit, cleaning and a repeat look may improve the view. If the camera still cannot pass, the findings should say what was not viewed.`,
        },
        {
          group: 'Limits and risks',
          question: 'Can sewer cleaning fix a cracked, offset, or collapsed pipe?',
          answer: `No. Cleaning removes buildup and obstructions. It does not repair pipe. A camera can document a visible structural condition, and further evaluation outside our cleaning and diagnostic scope may be appropriate.`,
        },
        {
          group: 'Limits and risks',
          question: 'Does a clean line mean the pipe is in good condition?',
          answer: `Not necessarily. Cleaning need and structural condition are separate questions. A line can flow well and still show a visible structural condition, and camera findings do not by themselves show how much service life a pipe has left.`,
        },
        {
          group: 'Access, time, and records',
          question: 'What access point do you use? Do you have to pull a toilet?',
          answer: `Most often a cleanout, where one is accessible. Whether one exists, and where it is, depends on the property’s plumbing layout. Other entry points may be possible depending on the property and the equipment. Ask what applies to your property before you book.`,
        },
        {
          group: 'Access, time, and records',
          question: 'How long does sewer cleaning take, and how much does it cost?',
          answer: `Time and cost depend on the accessible entry point, line length and pipe size, the amount and type of buildup, whether a camera is needed for visibility, and whether video, written findings, or locating are included. We do not publish a standard time or price on this page. Ask when you request service.`,
        },
        {
          group: 'Access, time, and records',
          question: 'Will I get a video and written findings?',
          answer: `Video is included when a camera is used, and written findings are included. Ask whether you keep a copy, and whether the findings note any part of the line that could not be viewed.`,
        },
        {
          group: 'Symptoms and upkeep',
          question: 'Why do my drains keep clogging after they were snaked?',
          answer: `Grease, roots, debris, and wipes are common contributors, and a pipe condition can be one too. Clearing a clog removes the obstruction, not necessarily what is causing it. A camera can help show what is contributing.`,
        },
        {
          group: 'Symptoms and upkeep',
          question: 'How often should I have my sewer line cleaned?',
          answer: `There is no single schedule that suits every property. Public agencies publish different local recommendations. Tree roots, the age and material of the pipe, and a history of recurring problems can justify more frequent attention.`,
        },
      ],
      relatedTitle: 'Keep reading',
      request: {
        title: 'Request sewer cleaning',
        intro: [
          'Choose your service area, tell us what you have noticed, and let us know whether the line has been cleared before or the problem keeps returning.',
        ],
        // The "Prefer to call?" line is an unconfirmed placeholder and is
        // deliberately not built (DEC-071).
        scopeNote:
          'This service is designed for accessible residential sewer and drain lines. Equipment selection and available service depend on the entry point, pipe size, line condition, and scope of work. We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.',
        submitLabel: 'Request Sewer Cleaning',
      },
    },
    relatedPageIds: [
      id('svc-hydro-jetting'),
      id('svc-sewer-cleaning-camera-inspection'),
      id('svc-sewer-camera-inspection'),
      // Once the independent second-opinion page is in the registry, add its
      // id here as the fourth card, with the description 'Clear evidence
      // before a major sewer decision.' (it is Phase 2 and unbuilt today).
    ],
    relatedDescriptions: {
      [id('svc-hydro-jetting')]:
        'How high-pressure cleaning works and when it may be a fit.',
      [id('svc-sewer-cleaning-camera-inspection')]:
        'Review visible line conditions and address an appropriate restriction when warranted.',
      [id('svc-sewer-camera-inspection')]:
        'What a camera may show, and what it cannot confirm.',
    },
    // Not rendered by v2: the final request section replaces the separate
    // closing form and call-to-action band.
    cta: {
      title: 'Get clear next steps for a sewer-line problem',
      body: 'Choose your market to request sewer cleaning, discuss a recurring drainage issue, or ask whether a camera inspection may be a better starting point.',
    },
  },

  /* ======================================================================
     Hydro Jetting - 14 §32
     Third page on Service Page Template v2 (`v2` below). Copy source:
     hydro-jetting-page-content.md. Universal (market-neutral) page; the
     per-market service + location pages are built separately later.
     ====================================================================== */
  [id('svc-hydro-jetting')]: {
    /*
      ⚠ THIS ENTRY RENDERS ON `ServicePageTemplateV2` (the `v2` key), NOT
      ON `ServiceHubTemplate`. The H1, the meta title and description and
      the primary and secondary hero actions stay on the base fields,
      because the route's metadata reads them there. Everything else the
      page shows is in `v2`. The old `hub`, `problems`, `process` and flat
      `faq` fields were replaced by their v2 equivalents for this entry
      only; every other service page is untouched.

      ⚠ OWNER-APPROVED WORDING (DEC-088), USED VERBATIM AND ONLY HERE. The
      free-estimate sentence and the same-day sentence appear in the
      same-day FAQ answer and the final request (the trust strip is the
      shared one every service page uses), exactly as the
      content doc shows them. They are not paraphrased, extended or moved,
      and no emergency, 24/7, weekend or guaranteed same-day claim is made.
      The one FAQ sentence "We do not offer 24/7 or emergency service." is
      the only place those words appear.

      ⚠ WHAT THIS COPY DOES NOT CLAIM. No price, guarantee, warranty,
      licence (DEC-072), insurance wording, response time, equipment model
      or spec, duration, water pressure or flow figure, nozzle type or
      interval in years. It does not say that video, written findings,
      coding, locating, surface marks or a post-cleaning re-inspection are
      included; it tells the reader to ask what is included. It does not
      say hydro jetting is better, deeper or more thorough than cable
      cleaning. The comparison is qualitative and neutral.

      ⚠ MARKET-NEUTRAL, NO PHONE NUMBER (DEC-071). Numbers reach this page
      only through the labelled footer and the mobile bar's market sheet.

      ⚠ NO EVIDENCE MOSAIC. There is no verified hydro jetting imagery, so
      `v2.evidence` is deliberately absent.

      ⚠ INTERNAL `[CONFIRM: ...]` MARKERS IN THE CONTENT DOC ARE NOT BUILT.
      Each surrounding sentence stands without its marker.

      ⚠ LINK DROPPED. The content doc links "independent sewer inspection"
      to `/services/independent-sewer-inspection-second-opinion/`, which
      is Phase 2 and not in the registry. The band keeps its words without
      the link, and the related list has four links, not five.
    */
    seoTitle: 'Hydro Jetting: How It Works and Its Limits',
    metaDescription:
      'Hydro jetting uses pressurized water to clean accessible residential sewer and drain lines. Learn the process and limits. St. Louis, San Diego, Las Vegas.',
    serviceDescription:
      'Hydro jetting is a way to clean a sewer or drain line using a pump, a hose, and a nozzle that sends pressurized water through the pipe. The hose moves forward through buildup, then scours the pipe wall and flushes debris out as it is pulled back.',
    hero: {
      eyebrow: 'Residential service',
      title: 'Hydro Jetting',
      primaryAction: { href: '#request', label: 'Request Hydro Jetting' },
      secondaryAction: {
        href: '#camera-first-or-cleaning-first',
        label: 'See how a camera inspection fits in',
      },
      intro: (
        <p>
          Hydro jetting cleans an accessible sewer or drain line with
          pressurized water. A hose and nozzle move through the line, loosen
          buildup, and flush it out. It is a cleaning method, not a repair,
          and it works best when someone has looked at the line first.
        </p>
      ),
    },
    // No-op on v2 (the independent band always renders); kept so the entry
    // still reads as it did before the migration.
    showDifferentiator: true,
    v2: {
      defaultServiceId: 'svc-hydro-jetting',
      images: {
        hero: '/images/services/hydro-jetting/hero/the-sewer-pros-hydro-jetting-sewer-cleanout-background-16x9.webp',
        request:
          '/images/services/hydro-jetting/the-sewer-pros-hydro-jetting-request-service-cleanout-mongoose-184-lt-background-16x9.webp',
      },
      hero: {
        scope: [
          'Cleaning for accessible residential sewer and drain lines',
          'Camera inspection before or after cleaning, when included',
          'Line locating, when in scope',
          'Clear findings, with no repair sales',
        ],
        scopeStatement:
          'This service is designed for accessible residential sewer and drain lines. Equipment selection and available service depend on the entry point, pipe size, line condition, and scope of work. We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.',
        cardTitle: 'Request hydro jetting',
      },
      navLabels: {
        signals: 'When a line may need cleaning',
        limits: 'What cleaning can and cannot do',
        process: 'What happens during a visit',
        decision: 'Camera or cleaning first',
        comparison: 'Hydro jetting vs. cable cleaning',
        ask: 'What to ask for',
        markets: 'Where we provide it',
        faq: 'Questions',
      },
      definition: {
        title: 'What is hydro jetting?',
        answer:
          'Hydro jetting is a way to clean a sewer or drain line using a pump, a hose, and a nozzle that sends pressurized water through the pipe. The hose moves forward through buildup, then scours the pipe wall and flushes debris out as it is pulled back.',
        supporting: [
          <>
            It is one of the methods used in{' '}
            <ApprovedInlineLink pageId={id('svc-sewer-cleaning')}>
              sewer cleaning
            </ApprovedInlineLink>
            .
          </>,
          'Whether jetting is the right method on a given visit depends on the line and the technician’s assessment.',
        ],
      },
      signals: {
        title: 'When might a line need cleaning?',
        note: 'Common signs include:',
        image: 'hydro-definition',
        items: [
          { title: 'Slow drains in more than one fixture' },
          { title: 'Gurgling from a toilet or tub when another fixture drains' },
          { title: 'Sewage smell near a drain or cleanout' },
          { title: 'Water backing up in a floor drain, tub, or lowest fixture' },
          { title: 'A drain that clears and then slows again' },
        ],
        after: (
          <>
            These signs point to a restriction somewhere, but they do not
            prove what or where it is. A single slow sink is often a{' '}
            <ApprovedInlineLink pageId={id('svc-drain-cleaning')}>
              drain cleaning
            </ApprovedInlineLink>{' '}
            question. Several slow drains, or a backup that returns, is worth
            looking at in the main line. If it keeps coming back, see{' '}
            <ApprovedInlineLink pageId={id('svc-recurring-sewer-backup-diagnosis')}>
              recurring sewer backup diagnosis
            </ApprovedInlineLink>
            .
          </>
        ),
      },
      limits: {
        title: 'What can cleaning address, and what can it not?',
        canTitle: 'Cleaning may help with',
        can: [
          'Grease and soap buildup',
          'Debris and wipes caught in the line',
          'Roots that are loose or accessible',
          'General buildup on the pipe wall',
        ],
        cannotTitle: 'Cleaning does not correct',
        cannot: [
          'A cracked or broken pipe',
          'An offset or separated joint',
          'A collapsed section',
          'A belly or low spot that holds water',
        ],
        callout:
          'If a line is cleaned and the problem returns, the cause may be something cleaning cannot remove. That is the reason to see the inside of the pipe.',
      },
      process: {
        title: 'How does a hydro jetting visit work?',
        steps: [
          {
            title: 'Review the access point',
            description:
              'We look at where the line can be reached. A cleanout is the common entry point.',
          },
          {
            title: 'Look at the line, when included',
            description:
              'A camera shows the pipe’s interior and helps pick the method. Pipe material, size, length, and visible defects all matter.',
          },
          {
            title: 'Choose nozzle and settings',
            description:
              'These depend on what the line looks like and what is in it.',
          },
          {
            title: 'Jet the line',
            description:
              'Water moves through the hose and nozzle. More water is not automatically better, and extra water can add to a backup, so the work is paced to the line.',
          },
          {
            title: 'Check the result, when included',
            description:
              'A second look shows what was removed and what remains.',
          },
        ],
        prep: {
          title: 'Preparing for the visit',
          image: 'hydro-process',
          items: [
            'Clear the area around the cleanout and tell us about recent backups.',
            'Ask us what else to do for your property.',
          ],
        },
      },
      decision: {
        title: 'Camera first, or cleaning first?',
        answer:
          'A camera inspection answers "what is in the line." Cleaning answers "can this be removed." Each is useful on its own, and they work well together.',
        note: 'If what we see goes beyond cleaning, we will say so plainly. Further evaluation may be appropriate outside our cleaning and diagnostic scope.',
        listTitle: 'Where to start',
        list: [
          'If the line is slow or backing up and you want it cleared, cleaning may be the first step, with a camera used to guide it.',
          <>
            If the cause is unknown or the problem keeps returning, start with
            a{' '}
            <ApprovedInlineLink pageId={id('svc-sewer-camera-inspection')}>
              sewer camera inspection
            </ApprovedInlineLink>
            .
          </>,
          <>
            If you want both in one visit, ask about{' '}
            <ApprovedInlineLink pageId={id('svc-sewer-cleaning-camera-inspection')}>
              cleaning with camera inspection
            </ApprovedInlineLink>
            .
          </>,
        ],
        links: [],
        aside: {
          title: 'What a camera cannot show',
          body: 'It sees the interior of the pipe above the waterline. It cannot show wall thickness, structural strength, soil support, the outside of the pipe, or voids. Debris and tight bends can stop it from traveling, and standing water can hide what is behind a blockage. Findings apply only to the length that was surveyed.',
        },
      },
      independent: {
        title: 'Independent by design',
        note: 'We clean, inspect, and locate. We do not repair or replace sewer lines, so nothing we find is tied to a repair job. If you have been told a line needs major work and want clear evidence first, see independent sewer inspection.',
      },
      comparison: {
        title: 'Hydro jetting vs. cable cleaning',
        caption: 'Hydro jetting compared with cable cleaning',
        columns: ['Compared on', 'Hydro jetting', 'Cable cleaning'],
        rows: [
          {
            service: 'How it works',
            purpose: 'Pressurized water through a hose and nozzle',
            fit: 'A rotating cable with a cutting head',
          },
          {
            service: 'Tool category',
            purpose: 'Water-based',
            fit: 'Mechanical',
          },
          {
            service: 'Typical use',
            purpose: 'Buildup along the pipe wall, loose debris',
            fit: 'Clearing a blockage in the line',
          },
        ],
        note: (
          <>
            These are different tools for different conditions, and neither is
            &ldquo;better&rdquo; in every case. The right choice depends on
            the line and what is in it. For the full comparison, see{' '}
            <ApprovedInlineLink pageId={id('cmp-hydro-vs-snaking')}>
              hydro jetting vs. snaking
            </ApprovedInlineLink>
            .
          </>
        ),
      },
      ask: {
        title: 'What to ask for and keep',
        intro:
          'Ask what is included before you book, and keep a record of it:',
        items: [
          { title: 'Is camera video included before or after cleaning?' },
          { title: 'Will you receive written findings?' },
          { title: 'What was removed, and what remained?' },
          { title: 'What was seen that cleaning cannot address?' },
        ],
      },
      audiences: {
        title: 'Who this page is for',
        items: [
          {
            audience: 'Homeowners',
            description:
              'With slow drains, backups, or a line that keeps clogging.',
          },
          {
            audience: 'Landlords and small property owners',
            description: 'Who want a line cleaned and documented.',
          },
          {
            audience: 'Home buyers and sellers',
            description: (
              <>
                Cleaning is not an inspection. Start with a{' '}
                <ApprovedInlineLink pageId={id('svc-pre-purchase-sewer-inspection')}>
                  pre-purchase sewer inspection
                </ApprovedInlineLink>
                .
              </>
            ),
          },
          {
            audience: 'Agents and home inspectors',
            description:
              'Who want a clear next step when a line is questionable.',
          },
        ],
      },
      markets: {
        id: 'choose-market',
        title: 'Where we provide hydro jetting',
        intro:
          'This page covers hydro jetting for all three markets we serve. These are service areas, not office locations. Each market has its own page with local details.',
        items: [
          {
            pageId: id('market-st-louis-mo'),
            description: 'Local details for the St. Louis area.',
            actionLabel: 'View St. Louis',
          },
          {
            pageId: id('market-san-diego-ca'),
            description: 'Local details for the San Diego area.',
            actionLabel: 'View San Diego',
          },
          {
            pageId: id('market-las-vegas-nv'),
            description: 'Local details for the Las Vegas area.',
            actionLabel: 'View Las Vegas',
          },
        ],
      },
      /*
        ⚠ FAQ: 21 QUESTIONS IN FIVE GROUPS, ANSWERS VERBATIM FROM THE
        CONTENT DOC. Plain strings only: `lib/schema/faq.ts` throws on
        custom components, and FAQPage JSON-LD must equal the visible
        text (DEC-114). The doc's markdown links are plain text here, and
        its `[CONFIRM: ...]` markers are not built. The group label is
        navigation only and is not part of any answer.
      */
      faqTitle: 'Hydro jetting FAQ',
      eyebrows: { faq: 'Questions', related: 'Related', request: 'Request service' },
      faq: [
        {
          group: 'The basics',
          question: 'What is hydro jetting?',
          answer:
            'Hydro jetting cleans an accessible sewer or drain line with pressurized water sent through a hose and nozzle. It loosens buildup and flushes it out of the line.',
        },
        {
          group: 'The basics',
          question: 'How does hydro jetting work?',
          answer:
            'A pump sends water through a hose to a nozzle. The hose advances through the line, then scours the pipe wall and moves debris along as it is withdrawn.',
        },
        {
          group: 'The basics',
          question: 'Can hydro jetting clear roots, grease, and debris?',
          answer:
            'It can remove buildup that is accessible and cleanable, including grease and loose debris. Roots depend on how they have grown into the line. Cleaning removes what is in the pipe. It does not repair the opening the roots came through.',
        },
        {
          group: 'The basics',
          question: 'Does it fix a cracked, offset, or collapsed pipe?',
          answer:
            'No. Cleaning removes buildup. It does not repair structural defects. If a camera shows one, further evaluation may be appropriate outside our cleaning and diagnostic scope.',
        },
        {
          group: 'Safety and limits',
          question: 'Is hydro jetting safe for old pipes?',
          answer:
            'It depends on the pipe’s condition and material. That is why a camera look is useful first when included. Visible structural defects call for a closer evaluation before cleaning.',
        },
        {
          group: 'Safety and limits',
          question: 'Can hydro jetting cause a backup?',
          answer:
            'Added water can contribute to a backup if the line cannot carry it away. This is one reason the method and settings are matched to the line.',
        },
        {
          group: 'Safety and limits',
          question: 'What can a camera not show?',
          answer:
            'It sees the interior of the pipe above the waterline. It cannot show wall thickness, structural strength, soil support, exterior condition, or voids. Findings apply only to the surveyed length.',
        },
        {
          group: 'Symptoms',
          question: 'Why are several drains slow at once?',
          answer:
            'Several slow fixtures can point to a restriction in a shared line rather than in one drain. It does not prove where. See drain cleaning and sewer camera inspection.',
        },
        {
          group: 'Symptoms',
          question: 'Does a smell or gurgling mean the main line is clogged?',
          answer:
            'It can, but it does not prove it. Gurgling and odors can have other causes. A camera inspection can show what is in the line.',
        },
        {
          group: 'Symptoms',
          question: 'Are flushable wipes safe, and can hot water or additives dissolve grease?',
          answer:
            'Wipes labeled flushable often do not break down the way toilet paper does, and many utilities ask residents not to flush them. Hot water and soap can move grease along the line, where it may cool and settle again. We make no claim that additives remove buildup.',
        },
        {
          group: 'Planning',
          question: 'What should I ask for and keep?',
          answer:
            'Ask whether video and written findings are included, what was removed, and what remains. Keep that record.',
        },
        {
          group: 'Planning',
          question: 'Do you offer same-day hydro jetting?',
          answer:
            'Same-day appointments can be arranged when scheduling permits, Monday through Friday, 8:00am to 4:00pm. Not available on weekends. We do not offer 24/7 or emergency service. Ask about a free estimate before scheduling.',
        },
        {
          group: 'Planning',
          question: 'How long does hydro jetting take?',
          answer:
            'It depends on the entry point, the length and condition of the line, and what is in it. We do not quote a standard time. Ask when you request service.',
        },
        {
          group: 'Planning',
          question: 'How much does it cost?',
          answer:
            'Pricing depends on the scope of work, so we do not publish a standard price. Ask about a free estimate before scheduling.',
        },
        {
          group: 'Planning',
          question: 'How often should a line be jetted?',
          answer:
            'There is no single interval that fits every property. If a line needs repeated cleaning, a camera inspection can help find out why. See recurring sewer backup diagnosis.',
        },
        {
          group: 'Planning',
          question: 'Do I need to prepare anything?',
          answer:
            'Clear access to the cleanout and tell us about recent symptoms. Ask what else applies to your property.',
        },
        {
          group: 'Planning',
          question: 'Will I get video or written findings?',
          answer: 'Video is included when a camera is used, and written findings are included.',
        },
        {
          group: 'Related questions',
          question: 'Is hydro jetting better than snaking?',
          answer:
            'They are different tools for different conditions. We do not rank one above the other. See hydro jetting vs. snaking.',
        },
        {
          group: 'Related questions',
          question: 'Should I get my line cleaned before buying or selling a home?',
          answer:
            'Cleaning is not an inspection. If you are buying, a pre-purchase sewer inspection shows the condition of the line.',
        },
        {
          group: 'Related questions',
          question: 'Can the line be located?',
          answer:
            'Line locating is a separate service, offered when in scope. Locate readings are approximate, not survey-grade. See sewer line locating.',
        },
        {
          group: 'Related questions',
          question: 'Can I jet my line myself?',
          answer:
            'We do not recommend a do-it-yourself approach to sewer-line jetting. Pressurized equipment can damage a pipe or add water to a line that cannot carry it. If you are unsure, ask us.',
        },
      ],
      relatedTitle: 'Related services',
      request: {
        title: 'Request hydro jetting',
        intro: [
          'Tell us what is happening with your line.',
          'Describe the symptoms, how long they have been going on, and whether you have had the line cleaned before. We will tell you what we can do and what is included. Ask about a free estimate before scheduling. Same-day appointments can be arranged when scheduling permits, Monday through Friday, 8:00am to 4:00pm. Not available on weekends.',
        ],
        scopeNote:
          'We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.',
        secondaryAction: { href: '/contact/', label: 'Contact The Sewer Pros' },
        submitLabel: 'Request Hydro Jetting',
      },
    },
    relatedPageIds: [
      id('svc-sewer-cleaning'),
      id('svc-sewer-camera-inspection'),
      id('svc-drain-cleaning'),
      id('svc-sewer-line-locating'),
    ],
    // Not rendered by v2: the final request section replaces the separate
    // closing form and call-to-action band.
    cta: {
      title: 'Get clear guidance on the right sewer-line cleaning method',
      body: 'Choose your market to ask about hydro jetting, discuss a recurring drainage problem, or ask whether a camera inspection may be a better starting point.',
    },
  },

  /* ======================================================================
     Sewer Cleaning & Camera Inspection
     ====================================================================== */
  [id('svc-sewer-cleaning-camera-inspection')]: {
    /*
      ⚠ THIS ENTRY RENDERS ON `ServicePageTemplateV2` (the `v2` key), NOT
      ON `ServiceHubTemplate`. The H1, the meta title and description and
      the primary and secondary hero actions stay on the base fields,
      because the route's metadata reads them there. Everything else the
      page shows is in `v2`. The old `hub`, `problems`, `process` and flat
      `faq` fields were replaced by their v2 equivalents for this entry
      only; every other service page is untouched. Copy source:
      sewer-cleaning-camera-inspection-page-content.md.

      ⚠ SERVICE NAME. The exact name is "Sewer Cleaning & Camera Inspection"
      with an ampersand (matches the shared registries). Sentence copy may say
      "cleaning and camera inspection" generically.

      ⚠ WHAT THIS COPY DOES NOT CLAIM. No price, offer, free estimate,
      guarantee, warranty, licence (DEC-072), insurance wording, response
      time, same-day or emergency claim, equipment model or spec, duration
      or interval in years. The page deliberately states no standard time
      or price. Owner-confirmed 2026-10-05: when a camera is used, the
      inspection video and written findings are included, and the page says
      exactly that. It does NOT claim PACP/LACP coding or certified
      personnel, photos in the findings, narration on the video, same-day
      delivery, "report" as the deliverable name, surface marks, locating
      as always included, a post-cleaning camera review as always included,
      or any access method beyond the cleanout. A camera "may" be used
      before, after or both, with no fixed order. The scope statement (no
      repair, replacement, lining, excavation or pipe installation) appears
      in short form in the hero and in full in the final request block.

      ⚠ MARKET-NEUTRAL, NO PHONE NUMBER (DEC-071). Numbers reach this page
      only through the labelled footer and the mobile bar's market sheet.
      The content doc's appointment-preparation line is an unconfirmed
      placeholder and is deliberately NOT built.

      ⚠ NO EVIDENCE MOSAIC. No approved, labelled imagery is verified for
      this page, so `v2.evidence` is deliberately absent.

      ⚠ INDEPENDENT BAND uses the shared dataset (no `v2.independent`) and
      carries no link to the independent second-opinion page, which is
      Phase 2 and not built.
    */
    seoTitle: 'Sewer Cleaning & Camera Inspection',
    metaDescription:
      "How a combined sewer cleaning and camera inspection visit works, which comes first, what a camera can and can't confirm, and what to ask for.",
    serviceDescription:
      'Sewer cleaning removes grease, roots, deposits, debris, and other material that restricts flow in an accessible sewer line. A sewer camera inspection, sometimes called a sewer scope, shows the visible inside of that line. They are separate services that can be combined.',
    hero: {
      eyebrow: 'Residential sewer and drain service',
      title: 'Sewer Camera Inspection and Cleaning for Recurring Drainage Problems',
      primaryAction: { href: '#request', label: 'Request Cleaning and Camera Inspection' },
      secondaryAction: { href: '#choose-market', label: 'Find Service in Your Area' },
      intro: (
        <>
          <p>
            Clear what can be cleared, and see what the line looks like. Sewer
            cleaning removes buildup that restricts flow. A camera inspection
            shows the visible inside of the line. A camera may be used before
            cleaning, after cleaning, or both, depending on the line.
          </p>
          <p>
            We provide cleaning, camera diagnostics, and line locating only.
            We do not provide sewer repair, replacement, lining, excavation,
            or pipe installation.
          </p>
        </>
      ),
    },
    // No-op on v2 (the independent band always renders); kept so the entry
    // still reads as it did before the migration.
    showDifferentiator: true,
    v2: {
      defaultServiceId: 'svc-sewer-cleaning-camera-inspection',
      images: {
        hero: '/images/services/sewer-cleaning-camera-inspection/hero/the-sewer-pros-sewer-camera-inspection-cleaning-cleanout-hero-background-16x9.webp',
        request:
          '/images/services/sewer-cleaning-camera-inspection/the-sewer-pros-sewer-cleaning-camera-inspection-request-final-cta-background-16x9.webp',
      },
      hero: {
        scope: [
          'Residential drain and sewer lines',
          'Cleaning, camera diagnostics, and line locating',
          'No repair or replacement work offered',
        ],
        cardTitle: 'Request cleaning and camera inspection',
        // The H1 is the long original phrase (owner directed 2026-10-05), so the
        // request card's service chip carries the service name instead.
        serviceLabel: 'Sewer Cleaning & Camera Inspection',
      },
      navLabels: {
        signals: 'Signs to look into',
        limits: 'What a camera shows',
        process: 'How a visit works',
        decision: 'Camera or cleaning first',
        comparison: 'Compared with related services',
        ask: 'What to ask for',
        markets: 'Service areas',
        faq: 'Questions',
        related: 'Related services',
      },
      definition: {
        eyebrow: 'The short answer',
        title: 'What are sewer cleaning and camera inspection?',
        answer:
          'Sewer cleaning removes grease, roots, deposits, debris, and other material that restricts flow in an accessible sewer line. A sewer camera inspection, sometimes called a sewer scope, shows the visible inside of that line. They are separate services that can be combined. Cleaning can make the pipe easier to see, and a camera can show what the cleaning achieved. Neither one repairs the pipe.',
        supporting: [
          'A camera may be used before cleaning, after cleaning, or both, when the line can be viewed. What a visit includes depends on the line, the entry point, and the scope of work.',
          'This page covers accessible private-property residential sewer and drain lines, not public sewer mains.',
        ],
      },
      signals: {
        eyebrow: 'Signs to look into',
        title: 'Signs a combined visit may be worth asking about',
        note: (
          <>
            These signs can be associated with a restriction or a pipe
            condition. They do not prove a cause. If only one fixture is
            affected,{' '}
            <ApprovedInlineLink pageId={id('svc-drain-cleaning')}>
              drain cleaning
            </ApprovedInlineLink>{' '}
            may be the better fit. If the cause is unclear, a camera
            inspection alone may be a better starting point.
          </>
        ),
        image: 'combined-definition',
        items: [
          {
            title: 'Several fixtures draining slowly at once',
            description:
              'When more than one fixture is slow at the same time, the restriction may be farther downstream than a single fixture’s drain.',
          },
          {
            title: 'Gurgling from drains or toilets',
            description:
              'Gurgling can accompany restricted flow. It can also come from a venting issue, so it does not point to one cause on its own.',
          },
          {
            title: 'Clogs that keep coming back',
            description:
              'A clog that returns after clearing may mean buildup, roots, or debris remain, or that a pipe condition is involved. Cleaning followed by a camera look can help show which.',
          },
          {
            title: 'Water rising in a floor drain, tub, or toilet',
            description:
              'This can indicate a blockage in the sewer line. If sewage is actively backing up into your home, contact us to discuss the situation.',
          },
          {
            title: 'Sewage-like odor near a drain or cleanout',
            description:
              'Persistent odors can be associated with a drainage or sewer-line problem. The source should be assessed rather than assumed.',
          },
          {
            title: 'Water at a cleanout',
            description:
              'Water standing at or rising to a cleanout can indicate a restriction in the line. It does not show where the restriction is.',
          },
        ],
      },
      limits: {
        eyebrow: 'Evidence and its limits',
        title: 'What a camera may show, and what it cannot confirm',
        intro:
          'Depending on the line condition and what the camera can reach and see, an inspection may document the conditions below. Water level, debris, bends, lighting, and the technician’s interpretation all affect what can be seen and how it is described.',
        canTitle: 'A camera may document',
        can: [
          'Roots visible inside the pipe',
          'Grease, scale, sediment, or other visible buildup',
          'Obstructions such as wipes or debris',
          'Cracks and fractures',
          'Offset or separated joints',
          'Visible corrosion or surface damage on the inside of the pipe',
          'Standing water or a visible low area',
          'Connections where other lines join the pipe, when they can be seen',
          'Collapse, when the camera can reach it',
        ],
        cannotTitle: 'It does not by itself show',
        cannot: [
          'Anything below the waterline',
          'Pipe in sections the camera did not reach or could not view. From one access point, an untraversed section is not fully inspected.',
          'The soil around the pipe, voids outside the pipe wall, or damage on the outside of the pipe',
          'Pipe wall thickness or structural capacity',
          'Pipe slope. A camera may show standing water, but it does not measure slope.',
          'How far tree roots extend outside the pipe',
          'Every leak. A camera can record visible water entering the pipe, not where water outside it comes from.',
        ],
        callout:
          'A line that flows again, or a video that looks clear, is not proof that the whole line or the ground around it is in good condition. Cleaning and structural condition are separate questions.',
        related: {
          lead: 'Line locating is a separate service. When it is in the scope of work and the equipment supports it, a camera sonde and a compatible receiver can help estimate the surface position of a point in the line. A locate is approximate. It is not a survey, utility clearance, or an exact depth.',
          pageId: id('svc-sewer-line-locating'),
          label: 'Sewer line locating',
        },
      },
      process: {
        eyebrow: 'What happens on the day',
        title: 'How a cleaning and camera visit works',
        intro:
          'The steps below describe a typical visit. How long it takes depends on line length, access, bends, debris, standing water, and how much cleaning the line needs.',
        steps: [
          {
            title: 'Agree on the entry point',
            description:
              'The technician identifies an accessible entry point, commonly a cleanout.',
          },
          {
            title: 'Assess the line',
            description:
              'The entry point, pipe size, reported symptoms, and what equipment can be used are considered.',
          },
          {
            title: 'View the line, when it can be viewed',
            description:
              'A camera may show what is in the line before cleaning and help choose the method. If the line is blocked and full of water, the camera cannot see under the water, and cleaning may have to come first.',
          },
          {
            title: 'Clean',
            description:
              'Hydraulic or mechanical equipment is used to address the restriction, in as many passes as the line calls for.',
          },
          {
            title: 'View again and note what could not be seen',
            description:
              'A camera may be used again to see what the cleaning achieved and to note any part of the line it could not reach. When a camera is used, you receive the inspection video and written findings.',
          },
        ],
        // The content doc's fourth prep bullet ("[CONFIRM: appointment
        // preparation instructions ...]") is an unconfirmed placeholder and
        // is deliberately not built.
        prep: {
          title: 'Preparing for your visit',
          image: 'combined-process',
          items: [
            'The most common entry point is a cleanout. Whether one exists, and where, depends on your property’s plumbing layout. Ask what applies to yours.',
            'Make sure the technician can safely reach the agreed entry point and that the work area is clear.',
            'Tell us what you have noticed, whether the line has been cleared before, and whether the visit relates to a home purchase or an inspection period.',
          ],
        },
      },
      decision: {
        eyebrow: 'Order of work',
        title: 'Does the camera or the cleaning come first?',
        answer:
          'There is no single required order. A camera first can show what is in the line and help choose the method. Cleaning first may be needed when the line is blocked or full of water, because a camera cannot see under water. A camera after cleaning can show what the cleaning achieved.',
        note: 'Providers differ, so ask which order applies to your visit.',
        listTitle: 'When each may come first',
        list: [
          'Camera first: the cause is unknown, or the problem keeps returning.',
          'Cleaning first: the line is blocked or full of water, or buildup hides the pipe.',
          'Both in one visit: you want the line cleared and then looked at again.',
          'Camera only: flow is fine and you want the visible condition of the line documented.',
          'Cleaning only: a known restriction with no question about the pipe.',
        ],
        links: [
          { pageId: id('svc-sewer-camera-inspection'), label: 'Sewer camera inspection' },
          { pageId: id('svc-sewer-cleaning'), label: 'Sewer cleaning' },
          { pageId: id('svc-hydro-jetting'), label: 'Hydro jetting' },
        ],
      },
      comparison: {
        eyebrow: 'Which service fits',
        title: 'Cleaning and camera inspection compared with related services',
        caption: 'Cleaning and camera inspection compared with related services',
        columns: ['Service', 'Purpose', 'May fit when'],
        rows: [
          {
            service: 'Sewer Cleaning & Camera Inspection',
            purpose: 'Addresses an appropriate restriction and reviews visible line conditions',
            fit: 'A problem keeps returning, or several fixtures are affected',
            current: true,
          },
          {
            service: 'Sewer cleaning',
            purpose:
              'Removes buildup and obstructions that restrict flow in an accessible sewer line',
            fit: 'Flow is restricted by grease, roots, debris, or similar material',
            pageId: id('svc-sewer-cleaning'),
          },
          {
            service: 'Hydro jetting',
            purpose: 'Uses pressurized water for suitable cleaning applications',
            fit: 'More substantial buildup or recurring drainage issues, when the line is a suitable candidate',
            pageId: id('svc-hydro-jetting'),
          },
          {
            service: 'Sewer camera inspection',
            purpose:
              'Shows visible conditions inside an accessible line. It does not clear a restriction.',
            fit: 'The cause or condition of the line is unclear',
            pageId: id('svc-sewer-camera-inspection'),
          },
          {
            service: 'Drain cleaning',
            purpose: 'Restores drainage at affected fixtures and branch lines',
            fit: 'Clogs or slow drains at one fixture',
            pageId: id('svc-drain-cleaning'),
          },
          {
            service: 'Sewer line locating',
            purpose:
              'Estimates the path of an underground line. A locate is approximate.',
            fit: 'You need to know where the line runs',
            pageId: id('svc-sewer-line-locating'),
          },
          {
            service: 'Recurring sewer backup diagnosis',
            purpose: 'Investigates why a line keeps backing up',
            fit: 'A backup returns after clearing',
            pageId: id('svc-recurring-sewer-backup-diagnosis'),
          },
        ],
      },
      ask: {
        eyebrow: 'Before you book',
        title: 'What you receive, and what to ask about',
        intro:
          'When a camera is used, you receive the inspection video and written findings. Other details can vary by appointment, so ask before you book, and keep what you receive.',
        items: [
          {
            title: 'Video of the line',
            description:
              'When a camera is used, the inspection video is included. Keep your copy.',
          },
          {
            title: 'Written findings',
            description:
              'Written findings are included. Ask that they note any part of the line the camera could not reach, and why.',
          },
          {
            title: 'Entry point and location',
            description:
              'Ask which entry point was used and where along the line conditions were seen.',
          },
          {
            title: 'The cleaning record',
            description:
              'Ask what method was used and whether a camera review followed the cleaning.',
          },
          {
            title: 'Coding and locating',
            description:
              'Ask whether a report uses a standardized coding system, and whether locating is part of the visit.',
          },
        ],
        keep: {
          title: 'Keep what you receive',
          image: 'combined-equipment',
          body: [
            'The video and written findings are useful as a later reference. If someone recommends costly work, you can ask another company to review the video.',
            'A camera finding is a visible observation. It is not a repair recommendation, and it does not by itself set a scope of work.',
            'A report can describe a condition without using a standardized coding system. Standardized coding exists, and it is not used on every inspection.',
          ],
        },
      },
      audiences: {
        title: 'Who this is for',
        intro:
          'Residential property owners and buyers who want a line cleaned and looked at, rather than only one or the other.',
        items: [
          {
            audience: 'Homeowners',
            description:
              'A slow or recurring drainage problem, or a line you want looked at after it has been cleared.',
          },
          {
            pageId: id('aud-home-buyers'),
            audience: 'Home buyers',
            description:
              'A sewer line can be hard to judge from the surface. A camera can document visible conditions in the accessible line, and cleaning may be needed first for the camera to see. Local requirements and timelines vary.',
            actionLabel: 'Home buyer sewer inspections',
          },
        ],
      },
      markets: {
        id: 'choose-market',
        eyebrow: 'Service areas',
        title: 'Cleaning and camera inspection service areas',
        intro: 'Choose your market for local service details and scheduling options.',
        items: [
          {
            pageId: id('market-st-louis-mo'),
            description:
              'Residential sewer cleaning and camera inspection across the St. Louis area.',
            actionLabel: 'View St. Louis service',
          },
          {
            pageId: id('market-san-diego-ca'),
            description:
              'Residential sewer cleaning and camera inspection in the San Diego area.',
            actionLabel: 'View San Diego service',
          },
          {
            pageId: id('market-las-vegas-nv'),
            description:
              'Residential sewer cleaning and camera inspection across the Las Vegas Valley.',
            actionLabel: 'View Las Vegas service',
          },
        ],
      },
      /*
        ⚠ FAQ: 21 QUESTIONS IN FIVE GROUPS, ANSWERS VERBATIM FROM THE
        CONTENT DOC. Plain strings only: `lib/schema/faq.ts` throws on
        custom components, and FAQPage JSON-LD must equal the visible
        text (DEC-114). The group label is navigation only and is not
        part of any answer.
      */
      faqTitle: 'Cleaning and camera inspection questions',
      eyebrows: { faq: 'Questions', related: 'Related', request: 'Request service' },
      faq: [
        {
          group: 'The basics',
          question: 'What are sewer cleaning and camera inspection?',
          answer: `Sewer cleaning removes buildup and obstructions that restrict flow in a sewer line. A camera inspection shows the visible inside of an accessible line. They are separate services that can be combined in one visit. Neither one repairs the pipe.`,
        },
        {
          group: 'The basics',
          question: 'What does a sewer camera inspection show?',
          answer: `It may show roots, buildup, obstructions, cracks, offset or separated joints, standing water, and visible corrosion inside the pipe, when they can be seen in the part of the line the camera reaches. It does not show wall thickness, the soil around the pipe, or anything below the waterline.`,
        },
        {
          group: 'The basics',
          question: 'Does the camera or the cleaning come first?',
          answer: `There is no single required order. A camera may be used before cleaning, after cleaning, or both. If a line is blocked and full of water, a camera cannot see under the water, so cleaning may need to come first. Ask which order applies to your visit.`,
        },
        {
          group: 'The basics',
          question: 'What is the difference between hydro jetting and cable cleaning?',
          answer: `Hydro jetting is hydraulic cleaning: pressurized water through a hose and nozzle. Cable cleaning, often called snaking, is mechanical: a rotating or advancing cable with a tool works on an obstruction. Which is appropriate depends on the line, its condition, and what is in it.`,
        },
        {
          group: 'Limits and risks',
          question: 'Does a clear video mean my line is healthy?',
          answer: `No. A camera records only what is visible in the part of the line it reaches. A clear video does not show wall thickness, the soil around the pipe, how much service life the pipe has left, or sections the camera did not view.`,
        },
        {
          group: 'Limits and risks',
          question: 'Can a camera find a leak?',
          answer: `Sometimes a camera can record water visibly entering the pipe. It cannot show every leak, and it cannot show where water outside the pipe comes from. A clear video is not proof that no leak exists.`,
        },
        {
          group: 'Limits and risks',
          question: 'Can a camera tell whether my pipe is structurally sound?',
          answer: `Not by itself. A camera can document visible structural conditions such as cracks, offsets, or collapse. It does not measure wall thickness or structural capacity. Structural evaluation is outside our cleaning and diagnostic scope.`,
        },
        {
          group: 'Limits and risks',
          question: 'Can a camera find roots, cracks, or a collapsed pipe?',
          answer: `It may, when they are visible and the camera can reach them. A camera can show roots inside the pipe but not how far they extend outside it. A complete collapse can stop the camera from going further.`,
        },
        {
          group: 'Limits and risks',
          question: 'What if the camera cannot get past a blockage?',
          answer: `The part of the line the camera did not reach is unconfirmed. Where loose debris is the limit, cleaning and a repeat pass may improve the view. A second access point may help. If the camera still cannot pass, the findings should say what was not viewed.`,
        },
        {
          group: 'Limits and risks',
          question: 'Does hydro jetting damage pipes?',
          answer: `It depends on the line. Defects, sags, heavy debris, and limited drainage capacity can raise the risk of a backup during high-pressure cleaning, and some tools can score certain pipe. The method and equipment are matched to the line, and no method is suitable for every pipe or blockage.`,
        },
        {
          group: 'Access, time, and records',
          question:
            'What access point do you use, and can you inspect without an outside cleanout?',
          answer: `Most often a cleanout, where one is accessible. Whether one exists, and where it is, depends on your property’s plumbing layout. Other entry points may be possible depending on the property and the equipment. Ask what applies to your property before you book.`,
        },
        {
          group: 'Access, time, and records',
          question: 'Do I get a copy of the video?',
          answer: `Yes. When a camera is used, the inspection video is included, and you can keep it as a reference or share it with another professional.`,
        },
        {
          group: 'Access, time, and records',
          question: 'Will I get written findings?',
          answer: `Yes. Written findings are included. Ask that they note any part of the line the camera could not view, and why, so the record shows what was and was not seen.`,
        },
        {
          group: 'Access, time, and records',
          question: 'Can you locate my sewer line, and how deep is it?',
          answer: `Line locating is a separate service. When it is in the scope of work and the equipment supports it, a camera sonde and a receiver can help estimate the surface position of a point in the line. A locate is approximate. It is not a survey, and it is not a guaranteed depth. Ask whether locating is part of your visit.`,
        },
        {
          group: 'Access, time, and records',
          question: 'How long does it take, and how much does it cost?',
          answer: `Time and cost depend on the entry point, line length and pipe size, the amount and type of buildup, whether a camera is needed for visibility, and whether locating is part of the visit. We do not publish a standard time or price on this page. Ask when you request service.`,
        },
        {
          group: 'Signs, buying, and upkeep',
          question: 'What are signs I may need cleaning or a camera inspection?',
          answer: `Slow drains at several fixtures, gurgling, a sewage-like odor, water rising in a floor drain, tub, or toilet, water at a cleanout, and clogs that keep returning are signs worth looking into. They do not prove a specific cause.`,
        },
        {
          group: 'Signs, buying, and upkeep',
          question: 'Should I have the sewer line looked at before buying a house?',
          answer: `Many buyers choose to, because the line is hidden and its condition is hard to judge from the surface. A camera can document visible conditions in the accessible line. Whether and when to do it is your decision, and local requirements and timelines vary. Cleaning may be needed first for the camera to see.`,
        },
        {
          group: 'Signs, buying, and upkeep',
          question: 'Is a sewer scope part of a standard home inspection?',
          answer: `A sewer scope is often a separate specialty service rather than part of a standard home inspection. Ask your home inspector what their inspection covers.`,
        },
        {
          group: 'Signs, buying, and upkeep',
          question: 'How often should a line be cleaned or inspected?',
          answer: `There is no single schedule that suits every property, and public agencies publish different local recommendations. Tree roots, the age and material of the pipe, buildup, access, and a history of recurring problems can all justify more frequent attention. Follow your local utility’s guidance.`,
        },
        {
          group: 'Myths',
          question: 'Can I flush "flushable" wipes?',
          answer: `Many utilities advise against flushing wipes, including products labeled flushable, because they can contribute to blockages in a home’s line and in public sewers. Follow your local utility’s guidance and put wipes in the trash.`,
        },
        {
          group: 'Myths',
          question: 'Will a chemical drain cleaner solve a sewer backup?',
          answer: `Not reliably. Chemical drain cleaners are not a guaranteed fix for a sewer problem, and some public utility guidance advises against them during a backup. If you have used one, tell the technician, and follow the product label and local guidance.`,
        },
      ],
      relatedTitle: 'Related services',
      request: {
        title: 'Request cleaning and camera inspection',
        intro: [
          'Tell us what your drains are doing and we will help you choose between cleaning, a camera inspection, or both. The Sewer Pros provides cleaning, camera diagnostic, and line locating services in St. Louis, San Diego, and Las Vegas.',
          'Choose your service area, tell us what you have noticed, and let us know whether the line has been cleared before or the problem keeps returning.',
          'This service is designed for accessible residential sewer and drain lines. Equipment selection and available service depend on the entry point, pipe size, line condition, and scope of work.',
        ],
        scopeNote:
          'We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.',
        submitLabel: 'Request Cleaning and Camera Inspection',
      },
    },
    relatedPageIds: [
      id('svc-sewer-camera-inspection'),
      id('svc-sewer-cleaning'),
      id('svc-hydro-jetting'),
      id('svc-drain-cleaning'),
      id('svc-sewer-line-locating'),
      id('svc-recurring-sewer-backup-diagnosis'),
      id('svc-pre-purchase-sewer-inspection'),
      id('svc-preventative-sewer-maintenance'),
    ],
    relatedDescriptions: {
      [id('svc-sewer-camera-inspection')]:
        'What a camera may show, and what it cannot confirm.',
      [id('svc-sewer-cleaning')]:
        'How sewer lines are cleaned, and what cleaning does not do.',
      [id('svc-hydro-jetting')]:
        'How pressurized-water cleaning works and when it may fit.',
      [id('svc-drain-cleaning')]:
        'Clogs and slow drains at a single fixture or branch line.',
      [id('svc-sewer-line-locating')]: 'Estimating the path of an underground line.',
      [id('svc-recurring-sewer-backup-diagnosis')]:
        'When a backup keeps returning after it is cleared.',
      [id('svc-pre-purchase-sewer-inspection')]:
        'A focused look at the line during a home purchase.',
      [id('svc-preventative-sewer-maintenance')]:
        'Keeping a line maintained between problems.',
    },
    // Not rendered by v2: the final request section replaces the separate
    // closing form and call-to-action band.
    cta: {
      title: 'Get clear next steps for a recurring sewer or drainage problem',
      body: 'Choose your market to request cleaning and camera inspection, or discuss which service path may be appropriate for your property.',
    },
  },

  /* ======================================================================
     Sewer Line Locating — 14 §33
     ====================================================================== */
  [id('svc-sewer-line-locating')]: {
    /*
      ⚠ THIS ENTRY RENDERS ON `ServicePageTemplateV2` (the `v2` key), NOT
      ON `ServiceHubTemplate`. The H1, the meta title and description and
      the primary and secondary hero actions stay on the base fields,
      because the route's metadata reads them there. Everything else the
      page shows is in `v2`. The old `hub`, `problems`, `process` and flat
      `faq` fields were replaced by their v2 equivalents for this entry
      only; every other service page is untouched. Copy source:
      sewer-line-locating-page-content.md.

      ⚠ WHAT THIS COPY DOES NOT CLAIM. No price, offer, free estimate,
      guarantee, warranty, licence (DEC-072), insurance wording, response
      time, same-day or emergency claim, equipment brand, model, frequency
      or spec, maximum locating depth, duration or interval in years. The
      page deliberately states no standard time or price. Every depth
      statement says "approximate" or "estimate". Owner-confirmed
      2026-10-05: when a camera is used, the inspection video and written
      findings are included, and the page says exactly that. It does NOT
      claim surface marks, depth readings as always provided, access
      beyond the cleanout, PACP/LACP coding, photos of marks, a map or
      diagram, narration, a footage counter, "report" as the deliverable
      name, same-day delivery, or locating as always included with camera
      work. Those stay worded as "ask" or "may".

      ⚠ 811 / ONE-CALL WORDING IS UNVERIFIED. The research packets do not
      cover private sewer lines and 811. The copy points to "your state
      one-call program (often reached at 811) or your local utility" and
      never states that 811 does or does not cover private sewer lines.
      Verify against the Missouri, California and Nevada one-call programs
      before launch. Mentions: limits callout, prep list, comparison row,
      and the FAQs on 811, survey, landscaping and the exact-location
      answer.

      ⚠ MARKET-NEUTRAL, NO PHONE NUMBER (DEC-071). Numbers reach this page
      only through the labelled footer and the mobile bar's market sheet.
      The content doc's "Prefer to call?" line and its appointment
      preparation bullet are unconfirmed placeholders and are deliberately
      NOT built.

      ⚠ NO EVIDENCE MOSAIC. No approved, labelled imagery is verified for
      this page, so `v2.evidence` is deliberately absent.

      ⚠ INDEPENDENT BAND uses `v2.independent` (the content doc's own
      Locate / Document / Decide steps) and carries no link to the
      independent second-opinion page, which is Phase 2 and not built. The
      same page is left out of the related cards for the same reason.
    */
    seoTitle: 'Private Sewer Line Locating: How It Works',
    metaDescription:
      'Sewer line locating helps estimate where an accessible private sewer line runs. Learn how it works and its limits. St. Louis, San Diego, Las Vegas.',
    serviceDescription:
      'Sewer line locating estimates where an accessible underground sewer line runs, using a transmitter inside the line and a receiver at the surface. Results are estimates, not a survey.',
    hero: {
      eyebrow: 'Residential sewer line locating',
      title: 'Sewer Line Locating',
      primaryAction: { href: '#request', label: 'Request Sewer Line Locating' },
      secondaryAction: { href: '#choose-market', label: 'Find Service in Your Area' },
      intro: (
        <>
          <p>
            Sewer line locating estimates where an accessible underground
            sewer line runs, so you can plan work around it. A technician
            uses compatible locating equipment to trace the line from the
            surface and estimate its path.
          </p>
          <p>
            We provide cleaning, camera diagnostics, and line locating only.
            We do not provide sewer repair, replacement, lining, excavation,
            or pipe installation.
          </p>
        </>
      ),
    },
    // No-op on v2 (the independent band always renders); kept so the entry
    // still reads as it did before the migration.
    showDifferentiator: true,
    v2: {
      defaultServiceId: 'svc-sewer-line-locating',
      images: {
        hero: '/images/services/sewer-line-locating/hero/the-sewer-pros-sewer-line-locating-residential-property-hero-background-16x9.webp',
        request:
          '/images/services/sewer-line-locating/the-sewer-pros-sewer-line-locating-request-cta-background-16x9.webp',
      },
      hero: {
        scope: [
          'Accessible residential sewer and drain lines',
          'An estimate of the route, not a survey',
          'No repair, excavation, or replacement work offered',
        ],
        cardTitle: 'Request sewer line locating',
        cardIntro:
          'Tell us what you are planning near the line. We will help you choose between locating, a camera inspection, or both.',
      },
      navLabels: {
        signals: 'When it may be worth asking about',
        limits: 'What a locate is, and is not',
        process: 'What happens during a visit',
        decision: 'Locating or camera inspection',
        ask: 'What to ask for',
        faq: 'Questions',
      },
      definition: {
        eyebrow: 'The short answer',
        title: 'What is sewer line locating?',
        answer:
          'Sewer line locating uses a transmitter inside the line and a receiver at the surface to estimate where an underground sewer line runs. A common setup is a camera with a built-in sonde, a transmitter near the camera head that a compatible receiver can detect from above ground. Depth readings are approximate.',
        supporting: [
          <>
            Knowing the approximate route can help you plan landscaping,
            fencing, or other property work near the line. Locating shows
            where a line runs. A{' '}
            <ApprovedInlineLink pageId={id('svc-sewer-camera-inspection')}>
              sewer camera inspection
            </ApprovedInlineLink>{' '}
            shows what is inside it. They answer different questions and can
            be useful together. This page covers accessible private-property
            sewer lines, not public sewer mains.
          </>,
        ],
        scope:
          'This service is designed for accessible residential sewer and drain lines. Equipment selection and available service depend on the entry point, pipe size, line condition, and scope of work. We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.',
      },
      signals: {
        eyebrow: 'Why people ask',
        title: 'When sewer line locating may be worth asking about',
        after: (
          <>
            These are reasons people ask about locating. They do not mean
            locating is always needed. If you also need to know what
            condition the line is in, a{' '}
            <ApprovedInlineLink pageId={id('svc-sewer-camera-inspection')}>
              sewer camera inspection
            </ApprovedInlineLink>{' '}
            is the better starting point.
          </>
        ),
        image: 'locating-definition',
        items: [
          {
            title: 'Planning digging, trenching, or construction',
            description:
              'The approximate path of a private sewer line can help you coordinate site planning before anyone digs nearby. It does not replace required utility marking, permits, or planning by the people doing the work.',
          },
          {
            title: 'Landscaping, trees, fences, or hardscape',
            description:
              'An approximate route can help you plan where to put work that involves digging. Results depend on access and site conditions.',
          },
          {
            title: 'Sharing the route with another contractor',
            description:
              'Approximate route information may help you describe where the line runs to whoever is doing work on your property.',
          },
          {
            title: 'Buying or evaluating a property',
            description:
              'Knowing where the line runs can help when you are weighing what could be built or changed on a property. It does not show the condition of the line.',
          },
          {
            title: 'A camera finding you need to place',
            description:
              'When a camera inspection shows a visible condition, locating may help estimate where that point sits at the surface, when the equipment supports it.',
          },
        ],
      },
      limits: {
        eyebrow: 'Evidence and its limits',
        title: 'What a locate may give you, and what it is not',
        intro:
          'A locate is an estimate for planning. Accuracy varies with the pipe, the signal, the surrounding materials, and the site, and manufacturer specifications vary by model.',
        canTitle: 'A locate may give you',
        canLead: 'An estimate, within what the equipment can trace',
        can: [
          'The approximate surface position of a point in an accessible line',
          "An estimate of the line's path between points the equipment could trace",
          'An estimate of depth at a point, in suitable conditions',
          'The approximate surface position of the camera head where it was stopped, when a camera with a compatible sonde is used',
          'A planning estimate you can share with whoever does the work',
        ],
        cannotTitle: 'It is not',
        cannotLead: 'Where a locate stops',
        cannot: [
          'A survey, or a property or boundary line',
          'Utility clearance, or permission to dig',
          'An exact depth. Depth readings are estimates and can vary.',
          'A map of every buried utility. Locating traces the sewer line, not other lines.',
          'A trace of any section the equipment could not reach',
          "A look at the pipe's condition. A camera inspection is a separate service.",
        ],
        callout:
          'A mark or measurement is an estimate. Before anyone digs, contact your state one-call program (often reached at 811) or your local utility and follow applicable requirements.',
      },
      process: {
        eyebrow: 'What happens on the day',
        title: 'What happens during a sewer line locating visit',
        intro:
          'The steps below describe a typical visit. What yours includes depends on the line, the entry point, and the scope of work.',
        steps: [
          {
            title: 'Access',
            description:
              'The technician identifies an accessible entry point, commonly a cleanout.',
          },
          {
            title: 'Equipment',
            description:
              'Compatible locating equipment is matched to the line, the entry point, and the pipe. What can be used depends on the line.',
          },
          {
            title: 'Travel',
            description:
              'The camera and sonde are advanced through the line in stages, as far as the line allows. Where the camera cannot pass, that part of the line is not traced.',
          },
          {
            title: 'Trace',
            description:
              "At each stop, a receiver at the surface picks up the sonde's signal to estimate the position of that point and its approximate depth. Repeated points show the observed route of the part of the line that could be traced.",
          },
          {
            title: 'Record',
            description:
              'Ask what is recorded, including any marks or notes, and ask what could not be traced and why.',
          },
        ],
        // The content doc's sixth prep bullet ("Appointment preparation:
        // [CONFIRM: any specific instructions before arrival]") is an
        // unconfirmed placeholder and is deliberately not built.
        prep: {
          title: 'Access points and preparing for your visit',
          image: 'locating-process',
          items: [
            "The most common entry point is a cleanout. Whether one exists, and where, depends on your property's plumbing layout.",
            'Other entry points may be possible, depending on the property and the equipment. Ask what applies to yours.',
            'Make sure the technician can safely reach the agreed entry point and the area you want traced.',
            'Tell us what you are planning, where, and whether the visit relates to a home purchase or an inspection period.',
            'Before any digging, contact your state one-call program (often 811) or local utility. A private locate does not replace it.',
          ],
        },
      },
      decision: {
        eyebrow: 'Which service fits',
        title: 'Locating or camera inspection: which do you need?',
        answer:
          'Locating answers where the line runs. A camera inspection answers what is inside it. Some questions need one, and some need both.',
        note: 'A locate does not show the condition of the pipe, and a camera view alone does not tell you where the line sits on your property.',
        listTitle: 'Where to start',
        list: [
          'If you need to know where the line runs before planning work, locating may be the question.',
          'If you need to know why drains are slow or backing up, a camera inspection may come first.',
          'If a camera shows a visible condition and you need to know where it sits on your property, locating may be added, when the equipment supports it.',
          'If a blockage stops the camera, the part it could not reach cannot be traced. Cleaning may need to come first.',
        ],
        links: [
          { pageId: id('svc-sewer-camera-inspection'), label: 'Sewer camera inspection' },
          {
            pageId: id('svc-sewer-cleaning-camera-inspection'),
            label: 'Sewer cleaning and camera inspection',
          },
          { pageId: id('svc-sewer-cleaning'), label: 'Sewer cleaning' },
        ],
      },
      independent: {
        eyebrow: 'Independent by design',
        title: 'Major sewer decisions deserve clear evidence.',
        steps: [
          {
            title: 'Locate',
            body: 'We estimate where an accessible line runs, within what the equipment can trace.',
          },
          {
            title: 'Document',
            body: 'You can ask for the marks or notes, and for what could not be traced.',
          },
          {
            title: 'Decide',
            body: 'You plan next steps with that information in hand. The Sewer Pros does not sell repair or replacement.',
          },
        ],
        note: 'If someone has recommended costly work near your line, ask for the evidence, get multiple written estimates, and ask for an explanation when they differ.',
      },
      comparison: {
        eyebrow: 'Which service fits',
        title: 'Sewer line locating vs. related services',
        caption: 'Sewer line locating compared with related services',
        columns: ['Service', 'What it does', 'May fit when'],
        rows: [
          {
            service: 'Sewer line locating',
            purpose:
              'Estimates the route and position of an accessible underground sewer line. It is an estimate, not a survey.',
            fit: 'You need to know where the line runs',
            current: true,
          },
          {
            service: 'Sewer camera inspection',
            purpose: 'Shows visible conditions inside an accessible line',
            fit: 'The cause or condition of the line is unclear',
            pageId: id('svc-sewer-camera-inspection'),
          },
          {
            service: 'Sewer cleaning',
            purpose:
              'Removes buildup and obstructions that restrict flow in an accessible line',
            fit: 'Flow is restricted by grease, roots, debris, or similar material',
            pageId: id('svc-sewer-cleaning'),
          },
          {
            service: 'Pre-purchase sewer inspection',
            purpose:
              'A focused look at the visible condition of the line before a purchase',
            fit: 'You are buying a home',
            pageId: id('svc-pre-purchase-sewer-inspection'),
          },
          {
            service: 'One-call utility notification (811)',
            purpose:
              'A public process for requesting utility marking before digging. Whether private sewer lines are covered depends on your program and utility, so ask.',
            fit: 'Before any digging. Private locating does not replace it.',
            external: true,
          },
        ],
      },
      ask: {
        eyebrow: 'Before you book',
        title: 'What to ask for, and what to keep',
        intro:
          'What is included can vary by appointment. Ask before you book, and keep what you receive.',
        items: [
          {
            title: 'Surface marks',
            description:
              'Ask whether marks are provided for your appointment, and what they show.',
          },
          {
            title: 'Depth readings',
            description:
              'Ask whether a depth reading is given. Treat any depth as an estimate.',
          },
          {
            title: 'Entry point and trace',
            description:
              'Ask which entry point was used, how much of the line was traced, and whether the camera reached the intended endpoint.',
          },
          {
            title: 'What could not be traced',
            description:
              'Ask for any part of the line that could not be reached or traced, and why.',
          },
          {
            title: 'Video and written findings',
            description:
              'When a camera is used, you receive the inspection video. Written findings are included.',
          },
        ],
        keep: {
          title: 'Keep the video, findings, and notes',
          image: 'locating-equipment',
          body: [
            'Before authorizing major sewer work, keep the video and written findings, request written scopes and estimates, and consider an independent second opinion. Depending on local program rules or transaction requirements, these records may also help support a property-sale disclosure, a municipal lateral-program review, an estimate comparison, or an insurance inquiry.',
            'A locate is an estimate for planning. It is not a survey, utility clearance, or permission to dig.',
          ],
        },
      },
      audiences: {
        title: 'If your situation is a little different',
        items: [
          {
            pageId: id('aud-home-buyers'),
            audience: 'Home buyers',
            description:
              "Locating shows where a line runs. A camera inspection shows the visible condition inside it. A pre-purchase sewer inspection focuses on condition. Timing follows your purchase contract's inspection period.",
            actionLabel: 'Home buyer sewer inspections',
          },
          {
            pageId: id('aud-real-estate-agents'),
            audience: 'Real estate agents',
            description:
              'Route information can support due diligence and project planning on a property. It is separate from the condition of the line.',
            actionLabel: 'Transaction support',
          },
          {
            pageId: id('aud-home-inspectors'),
            audience: 'Home inspectors',
            description:
              'Locating may help clarify an approximate route when an inspection raises questions about where the line runs.',
            actionLabel: 'Working with home inspectors',
          },
          {
            pageId: id('aud-property-managers'),
            audience: 'Property managers',
            description:
              'Approximate route information may support maintenance planning, access coordination, and vendor communication on residential properties. Tenant notice depends on your lease and local law.',
            actionLabel: 'Property manager support',
          },
        ],
      },
      markets: {
        id: 'choose-market',
        eyebrow: 'Service areas',
        title: 'Sewer line locating service areas',
        intro: 'Choose your market for local service details and scheduling options.',
        items: [
          {
            pageId: id('market-st-louis-mo'),
            description: 'Residential sewer line locating across the St. Louis area.',
            actionLabel: 'View St. Louis sewer line locating',
          },
          {
            pageId: id('market-san-diego-ca'),
            description: 'Residential sewer line locating in the San Diego area.',
            actionLabel: 'View San Diego sewer line locating',
          },
          {
            pageId: id('market-las-vegas-nv'),
            description: 'Residential sewer line locating across the Las Vegas Valley.',
            actionLabel: 'View Las Vegas sewer line locating',
          },
        ],
      },
      /*
        ⚠ FAQ: 23 QUESTIONS IN FOUR GROUPS, ANSWERS VERBATIM FROM THE
        CONTENT DOC. Plain strings only: `lib/schema/faq.ts` throws on
        custom components, and FAQPage JSON-LD must equal the visible
        text (DEC-114). The group label is navigation only and is not
        part of any answer.
      */
      faqTitle: 'Sewer line locating questions',
      eyebrows: { faq: 'Questions', related: 'Related', request: 'Request service' },
      faq: [
        {
          group: 'The basics',
          question: 'What is sewer line locating?',
          answer: `Sewer line locating estimates the route and position of an existing underground sewer line. A technician uses compatible locating equipment, often with a sewer camera, to help identify where an accessible line runs. The results can help with property planning or with deciding where further inspection may be useful.`,
        },
        {
          group: 'The basics',
          question: 'How does sewer line locating work?',
          answer: `When a camera with a compatible sonde can travel the line, the sonde sends a signal that a receiver at the surface can detect. That helps estimate the position of the camera head at each stop and its approximate depth. What can be used depends on the entry point, the pipe, the line condition, and the scope of work.`,
        },
        {
          group: 'The basics',
          question: 'What are a sonde, a receiver, and a cleanout?',
          answer: `A sonde is a small transmitter that sends a detectable signal from inside a pipe. It may be built into a camera. A receiver is the handheld instrument that detects that signal above ground. A cleanout is a capped access opening in a sewer line, commonly used as the entry point for a camera.`,
        },
        {
          group: 'The basics',
          question: 'Is sewer line locating the same as calling 811?',
          answer: `No. 811 is the number commonly used to reach a state one-call program, which coordinates utility marking requests before digging. Private sewer line locating focuses on tracing a property's sewer line. Whether a private line is covered by public markings varies, so ask your one-call program or local utility which lines are covered at your property.`,
        },
        {
          group: 'The basics',
          question: 'Do I need a camera inspection before locating?',
          answer: `Not always. It depends on whether the line is accessible and what you need to learn. A camera inspection shows visible conditions inside the pipe and may support locating when a compatible camera and sonde can travel through the line. If the camera cannot pass, the technician can explain the options and limitations.`,
        },
        {
          group: 'Limits and digging',
          question: 'Can you tell me exactly where my sewer line is?',
          answer: `Locating can give a practical estimate of the route. Accuracy depends on access to the line, the pipe, depth, and site conditions. Treat any mark or measurement as a guide for planning, not a guarantee of the pipe's position and not a substitute for required utility clearance.`,
        },
        {
          group: 'Limits and digging',
          question: `Can sewer line locating determine the pipe's depth?`,
          answer: `Some locating equipment can estimate depth under suitable conditions. The result is not guaranteed and can vary with the pipe, the signal, the surrounding materials, and the site. Treat a depth reading as an estimate for planning, not a precise measurement or permission to dig.`,
        },
        {
          group: 'Limits and digging',
          question: 'Can you locate every utility on my property?',
          answer: `No. Locating traces the private sewer line within the scope of the service. It does not identify every buried utility or replace the one-call utility marking process. Arrange separate locating for other privately owned lines when needed.`,
        },
        {
          group: 'Limits and digging',
          question: 'Is a locate a survey, and does it mean I can dig?',
          answer: `No. A locate is an estimate for planning. It is not a survey, utility clearance, or permission to excavate. Before anyone digs, contact your state one-call program or local utility and follow applicable requirements.`,
        },
        {
          group: 'Limits and digging',
          question: 'Can a sewer camera see through water?',
          answer: `No. A camera cannot see under water, so a line that is blocked and not draining may not be viewable until flow is restored. Water, debris, an obstruction, or a collapsed section can limit what the camera documents. Cleaning may need to come first.`,
        },
        {
          group: 'Limits and digging',
          question: 'Can a sewer line be located under concrete or a driveway?',
          answer: `Sometimes. The receiver detects the sonde's signal rather than the pipe itself, so many pipe materials can be located. Concrete, rebar, other buried metal, and interference can weaken the signal and reduce accuracy, so results under slabs and driveways are less certain.`,
        },
        {
          group: 'Limits and digging',
          question: 'What if the camera cannot get through the line?',
          answer: `The part of the line the equipment did not reach is not traced. Depending on the cause, additional cleaning, a repeat visit, or approaching the line from another access point, where one is available, may help. The findings should say what was not traced.`,
        },
        {
          group: 'Access, marks, and records',
          question: 'What access point do you use? Do you have to pull a toilet?',
          answer: `Most often a cleanout, where one is accessible. Whether one exists, and where it is, depends on the property's plumbing layout. Other entry points may be possible depending on the property and the equipment. Ask what applies to your property before you book.`,
        },
        {
          group: 'Access, marks, and records',
          question: 'Will I get surface marks?',
          answer: `Ask before you book. Whether surface marks are provided is part of the scope to confirm for your appointment, along with what the marks show and how much of the line they cover.`,
        },
        {
          group: 'Access, marks, and records',
          question: 'Will I get video and written findings?',
          answer: `When a camera is used, you receive the inspection video. Written findings are included. Ask what else is included for your visit, including any marks or notes.`,
        },
        {
          group: 'Access, marks, and records',
          question: 'How long does locating take, and how much does it cost?',
          answer: `Time and cost depend on the accessible entry point, the line length and pipe size, the line condition, and whether a camera, video, or marks are included. We do not publish a standard time or price on this page. Ask when you request service.`,
        },
        {
          group: 'Planning and property',
          question: 'Can line locating help before landscaping or fence installation?',
          answer: `Yes. Locating can help you understand the likely route of a private sewer line before you plan landscaping, fencing, or other digging. Share your project plans when you request service so the technician knows which area to evaluate. Contact your state one-call program or local utility first and follow applicable requirements. Private locating does not replace public utility marking.`,
        },
        {
          group: 'Planning and property',
          question: 'If the line drains after cleaning, is the pipe healthy?',
          answer: `Not necessarily. Clearing a clog may restore flow, but a camera inspection can still be needed to document the condition of the accessible pipe and look for visible sources of recurring problems.`,
        },
        {
          group: 'Planning and property',
          question: 'Should I use chemical drain cleaner on a sewer line clog?',
          answer: `Public utilities advise against it. Chemical products can create safety hazards, can damage pipe, and may not resolve the underlying cause. They are not a substitute for diagnosing recurring drainage trouble.`,
        },
        {
          group: 'Planning and property',
          question: 'Can line locating help with sewer repair work?',
          answer: `It can help you tell whoever does the work where the line runs. The Sewer Pros does not provide sewer repair, replacement, lining, excavation, or pipe installation.`,
        },
        {
          group: 'Planning and property',
          question: 'How often should a sewer line be located or inspected?',
          answer: `There is no single schedule that fits every property. Consider locating and camera diagnostics when drains are slow, fixtures gurgle, wastewater backs up, or clogs keep returning. Some local programs set their own inspection requirements, so check your local sewer utility or municipality.`,
        },
        {
          group: 'Planning and property',
          question: 'Does my city require a sewer inspection for a sale, remodel, or permit?',
          answer: `It depends on where the property is. Some local programs require a camera inspection when a property is sold or when certain permits are issued, and many do not. Check with your local sewer utility or building department. We do not give legal advice.`,
        },
        {
          group: 'Planning and property',
          question: 'Should I have the line located before buying a house?',
          answer: `Locating shows where a line runs, not what condition it is in. If you are buying, a pre-purchase sewer inspection shows visible conditions in the accessible line. Ask whether locating is part of your appointment.`,
        },
      ],
      relatedTitle: 'Keep reading',
      request: {
        title: 'Request sewer line locating',
        intro: [
          'Choose your service area, tell us what you are planning near the line, and let us know if you know where a cleanout or other access point is.',
        ],
        scopeNote:
          'This service is designed for accessible residential sewer and drain lines. Equipment selection and available service depend on the entry point, pipe size, line condition, and scope of work. We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.',
        submitLabel: 'Request Sewer Line Locating',
      },
    },
    // The independent second-opinion page is not built, so it is left out.
    relatedPageIds: [
      id('svc-sewer-camera-inspection'),
      id('svc-sewer-cleaning-camera-inspection'),
      id('svc-pre-purchase-sewer-inspection'),
    ],
    relatedDescriptions: {
      [id('svc-sewer-camera-inspection')]:
        'What a camera may show, and what it cannot confirm.',
      [id('svc-sewer-cleaning-camera-inspection')]:
        'Review visible line conditions and address an appropriate restriction when warranted.',
      [id('svc-pre-purchase-sewer-inspection')]:
        'A focused look at the line before you buy.',
    },
    // Not rendered by v2: the final request section replaces the separate
    // closing form and call-to-action band.
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
      ⚠ THIS ENTRY RENDERS ON `ServicePageTemplateV2` (the `v2` key), NOT
      ON `ServiceHubTemplate`. The H1, the meta title and description and
      the primary and secondary hero actions stay on the base fields,
      because the route's metadata reads them there. Everything else the
      page shows is in `v2`. The old `hub`, `problems`, `process` and flat
      `faq` fields were replaced by their v2 equivalents for this entry
      only; every other service page is untouched. Copy source:
      drain-cleaning-page-content.md.

      ⚠ WHAT THIS COPY DOES NOT CLAIM. No price, offer, free estimate,
      guarantee, warranty, licence (DEC-072), insurance wording, response
      time, same-day or emergency claim, equipment brand, model or spec,
      PSI or GPM, duration or interval. The page deliberately states no
      standard time or price, and the four held questions (duration,
      cost, roof-vent access, toilet removal) are not on the page or in
      the FAQ. Owner-confirmed 2026-10-05: when a camera is used, the
      video and written findings are included, and the page says exactly
      that. It does NOT claim surface marks, PACP/LACP coding, a cleaning
      report or any non-cleanout access method; "what record of the
      cleaning is provided" stays as "ask" wording. A camera is a separate
      service with no fixed order relative to cleaning. Repair stays
      educational and the scope statement appears verbatim in the
      definition and the final request.

      ⚠ MARKET-NEUTRAL, NO PHONE NUMBER (DEC-071). Numbers reach this page
      only through the labelled footer and the mobile bar's market sheet.

      ⚠ NO EVIDENCE MOSAIC. No verified drain cleaning imagery exists for
      an evidence section, so `v2.evidence` is deliberately absent.

      ⚠ "DRAIN CLEARING" is everyday usage, not a code term: it carries no
      source and no code section number.

      ⚠ ROUTES. The hydro jetting vs. snaking comparison and the home
      buyer and home seller audience rows are linked through their
      approved page ids. There is no homeowner audience page, so that row
      is text. The market cards link the three hubs only.
    */
    seoTitle: 'Drain Cleaning for Slow and Clogged Drains',
    metaDescription:
      'What drain cleaning is, how cable and jetting methods differ, what a camera can show, and what cleaning does not fix. St. Louis, San Diego and Las Vegas.',
    serviceDescription:
      'Drain cleaning removes grease, roots, deposits, debris and other restricting material from a drain line using a rotating cable, water jetting, or both. It restores flow and does not repair the pipe.',
    hero: {
      eyebrow: 'Residential drain cleaning',
      title: 'Drain Cleaning for Slow, Clogged, and Recurring Drains',
      primaryAction: { href: '#request', label: 'Request Drain Cleaning' },
      secondaryAction: { href: '#choose-market', label: 'Find Service in Your Area' },
      intro: (
        <>
          <p>
            Drain cleaning restores flow by removing the grease, roots,
            debris, and buildup that slow or block a drain, using cable
            tools, water jetting, or both, chosen for the line.
          </p>
          <p>
            We provide cleaning, camera diagnostics, and line locating only.
            We do not provide sewer repair, replacement, lining, excavation,
            or pipe installation.
          </p>
        </>
      ),
    },
    // No-op on v2 (the independent band always renders); kept so the entry
    // still reads as it did before the migration.
    showDifferentiator: true,
    v2: {
      defaultServiceId: 'svc-drain-cleaning',
      images: {
        hero: '/images/services/drain-cleaning/hero/the-sewer-pros-drain-cleaning-hero-residential-cleanout-ridgid-equipment-16x9.webp',
        request:
          '/images/services/drain-cleaning/the-sewer-pros-drain-cleaning-closing-cta-ridgid-k7500-background-16x9.webp',
      },
      hero: {
        scope: [
          'Residential drain and sewer lines',
          'Cleaning method chosen for the condition of the line',
          'No repair or replacement work offered',
        ],
        cardTitle: 'Request drain cleaning',
        cardIntro:
          'Tell us what your drains are doing. We will help you choose between cleaning, a camera inspection, or both.',
        serviceLabel: 'Service: Drain cleaning',
      },
      navLabels: {
        signals: 'When to look into it',
        triage: 'One drain or several',
        limits: 'What cleaning can and cannot fix',
        process: 'How it works',
        methods: 'Methods',
        secondaryLimits: 'The camera',
        ask: 'What to ask for',
        terms: 'Terms',
        faq: 'Questions',
      },
      methodsAfterIndependent: true,
      situationsAfterFaq: true,
      relatedColumns: 4,
      faqSurface: 'default',
      definition: {
        eyebrow: 'The short answer',
        title: 'What is drain cleaning?',
        answer:
          'Drain cleaning is the removal of grease, roots, deposits, debris, and other restricting material from a drain line, using a rotating cable, water jetting, or both. It restores flow. It does not repair the pipe.',
        supporting: [
          <>
            Drain cleaning usually refers to fixture and branch lines.{' '}
            <ApprovedInlineLink pageId={id('svc-sewer-cleaning')}>
              Sewer cleaning
            </ApprovedInlineLink>{' '}
            refers to the larger line that carries wastewater away from the
            building.{' '}
            {'People also say "drain clearing." That is everyday usage, not a code term, so ask a provider what they mean by either.'}
          </>,
          'Cleaning and a camera inspection are separate services.',
        ],
        scope:
          'This service is designed for accessible residential sewer and drain lines. Equipment selection and available service depend on the entry point, pipe size, line condition, and scope of work. We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.',
      },
      signals: {
        eyebrow: 'Signs to look into',
        title: 'When drain cleaning may be useful',
        after:
          'These signs may point to a drain or sewer-line issue. They do not prove a specific cause.',
        image: 'drain-equipment',
        items: [
          {
            title: 'One slow drain',
            description:
              "A single slow sink, tub, or shower often points to a restriction in that fixture's own drain line, such as hair, soap, or grease buildup.",
          },
          {
            title: 'Several fixtures slow at once',
            description:
              'When more than one fixture is slow, the restriction may be farther down the line. This does not prove a specific cause.',
          },
          {
            title: 'Gurgling from drains or toilets',
            description:
              'Gurgling can come from a drainage restriction or a venting issue, so it does not point to one cause on its own.',
          },
          {
            title: 'Clogs that keep returning',
            description:
              'A clog that returns after each clearing may mean the restriction was not fully removed or is being rebuilt by something in the line. A camera look may help.',
          },
          {
            title: 'Sewage-like odors',
            description:
              'An odor may point to a drain or sewer-line issue. It does not prove a specific cause.',
          },
          {
            title: 'Water or sewage coming up',
            description:
              'Avoid contact with the water, keep children and pets away, and limit water use while you arrange help. Contact us to discuss the situation.',
          },
        ],
      },
      triage: {
        eyebrow: 'Drain or sewer line',
        title: 'One drain or several: what the pattern may mean',
        intro:
          'Where the symptoms show up is a clue to where the restriction may be. It is a clue, not proof.',
        caption: 'What drain symptoms may point to and the usual next step',
        columns: ['What you notice', 'What it may point to', 'Often the next step'],
        rows: [
          {
            service: 'One fixture is slow or clogged',
            plain: true,
            purpose:
              "Usually that fixture's own drain line, such as hair, soap, grease, or debris",
            fit: 'Drain cleaning at that fixture. A plunger or hand tool may help with a simple clog.',
          },
          {
            service: 'Several fixtures are slow or gurgling',
            plain: true,
            purpose:
              'A restriction in a shared branch or the larger sewer line. This does not prove a specific cause',
            fit: 'Sewer cleaning. A camera look may help show what is in the line.',
          },
          {
            service: 'Lower drains back up when other fixtures are used',
            plain: true,
            purpose: 'A restriction farther along the line, where several drains meet',
            fit: 'Contact us to discuss the situation. A camera look may help.',
          },
          {
            service: 'The drain clogs again after it was cleared',
            plain: true,
            purpose:
              'The restriction was not fully removed, or something in the line is rebuilding it',
            fit: 'Cleaning plus a camera look at the accessible line, so you are not guessing.',
          },
          {
            service: 'Water or sewage is coming up',
            plain: true,
            purpose:
              'A blockage that needs attention. Avoid contact with the water and keep children and pets away',
            fit: 'Contact us to discuss the situation.',
          },
        ],
      },
      limits: {
        eyebrow: 'Suitability',
        title: 'What drain cleaning can and cannot fix',
        intro:
          'Cleaning removes material from inside a pipe. Whether it helps depends on what is causing the problem.',
        canTitle: 'Cleaning is often a fit when',
        canLead: 'The restriction is material inside the pipe',
        can: [
          'Grease, soap, or sludge buildup inside the pipe',
          'Roots that can be cut back from inside the line. They may regrow',
          'Wipes, hair, or other debris causing a restriction',
          'A restriction that keeps returning, where a camera look may help show why',
        ],
        cannotTitle: 'Cleaning does not fix',
        cannotLead: 'Problems that need more than cleaning',
        cannot: [
          'Cracked, broken, or collapsed pipe',
          'An offset or separated joint',
          'Roots entering at a joint. Cleaning does not seal the entry point',
          'The public sewer main or the connection to it. Ask your local utility',
          'A line the equipment cannot pass',
        ],
        callout:
          'Water jetting is not appropriate for every pipe. Damaged or fragile pipe may not be a candidate. A line that flows again is not proof that the pipe is sound.',
      },
      process: {
        eyebrow: 'What happens on the day',
        title: 'How drain cleaning works',
        intro:
          'The method and the visit depend on the entry point, pipe size, line condition, and scope of work. We do not publish a standard time or price because they vary with these factors.',
        steps: [
          {
            title: 'Symptoms',
            description:
              'You tell us which fixtures are affected, how long, and what you have already tried.',
          },
          {
            title: 'Access',
            description:
              'The technician identifies an entry point, commonly a cleanout. Other entry points depend on the property.',
          },
          {
            title: 'Camera, when included',
            description:
              'When a camera is part of the visit and the line allows, it is used to look at the restriction.',
          },
          {
            title: 'Cleaning',
            description:
              'The line is cleaned with cable tools, water jetting, or both, chosen for the condition of the line.',
          },
          {
            title: 'Flow check',
            description:
              'Flow is checked after cleaning. A camera may be used again where appropriate.',
          },
        ],
        prep: {
          title: 'Preparing for your visit',
          access: {
            title: 'Access points',
            body: 'A cleanout is a capped opening in the drain or sewer line that gives access for cleaning tools or a camera. Other entry points depend on the property and the plumbing layout.',
          },
          items: [
            'Make sure the technician has safe access to the agreed entry point.',
            'Tell us which fixtures are affected and what you have already tried.',
            'Tell us if a recent clog, backup, or home purchase is part of the reason for the visit.',
          ],
        },
      },
      decision: {
        eyebrow: 'Two services, one decision',
        title: 'Cleaning and the camera are separate services',
        answer:
          'Cleaning and camera inspection can be combined, but neither requires the other. Cleaning can improve camera visibility. It does not repair pipe defects.',
        note: 'There is no single required order. It depends on the line.',
        listTitle: 'When cleaning may need to come first',
        list: [
          'A line that is blocked and not draining. A camera generally cannot see under the water.',
          'Grease, roots, or other debris covering the lens or blocking the camera, so the view is too limited to document much.',
          'Standing water or debris that keeps the camera from traveling.',
        ],
        links: [
          { pageId: id('svc-sewer-cleaning'), label: 'Sewer cleaning' },
          { pageId: id('svc-hydro-jetting'), label: 'Hydro jetting' },
          { pageId: id('svc-sewer-camera-inspection'), label: 'Sewer camera inspection' },
        ],
      },
      independent: {
        eyebrow: 'Independent by design',
        title: 'Major sewer decisions deserve clear evidence.',
        steps: [
          {
            title: 'Clear',
            body: 'We clean the line and, when a camera is part of the visit, look at what is visible.',
          },
          {
            title: 'Document',
            body: 'When a camera is used, you receive the video and written findings.',
          },
          {
            title: 'Decide',
            body: 'You decide next steps with evidence in hand. The Sewer Pros does not sell repair or replacement.',
          },
        ],
        note: 'If someone has recommended costly work, a clear record of the line gives you something to compare estimates against.',
        link: { href: '#request', label: 'Request drain cleaning' },
      },
      methods: {
        eyebrow: 'Which method fits',
        title: 'Cable cleaning, water jetting, and the camera',
        caption: 'Cable cleaning, water jetting, and camera inspection compared',
        columns: ['Method', 'How it works', 'Often considered for', 'Limits'],
        rows: [
          {
            method: 'Cable cleaning',
            how: 'A rotating cable with cutting tools works through the line',
            considered: 'Blockages, roots inside the line, and localized restrictions',
            limits: 'Does not repair pipe. Roots may regrow',
          },
          {
            method: 'Water jetting',
            how: 'Pressurized water cleans the pipe wall',
            considered:
              'Grease and buildup along the pipe, when the line is a suitable candidate',
            limits:
              'Not appropriate for every pipe or blockage, including damaged or fragile pipe',
            pageId: id('svc-hydro-jetting'),
          },
          {
            method: 'Camera inspection (separate service)',
            how: 'A camera on a flexible cable shows visible conditions inside the line',
            considered: 'Recurring clogs, an unclear cause, or documenting the line',
            limits: 'Cannot see below the waterline or outside the pipe wall',
            pageId: id('svc-sewer-camera-inspection'),
          },
        ],
        note: (
          <>
            Comparing cable and jetting? See{' '}
            <ApprovedInlineLink pageId={id('cmp-hydro-vs-snaking')}>
              hydro jetting vs. snaking
            </ApprovedInlineLink>
            .
          </>
        ),
      },
      secondaryLimits: {
        eyebrow: 'Evidence and its limits',
        title: 'What a camera can and cannot show',
        intro:
          "When a camera is part of the visit, it may document the conditions below. Image quality, lighting, flow, and the technician's interpretation all affect what can be seen.",
        canTitle: 'A camera may document',
        canLead: 'Visible conditions in the section the camera reaches',
        can: [
          'Grease, soap scum, and other deposits',
          'Roots visible inside the pipe',
          'Obstructions such as wipes or debris',
          'Cracks and fractures',
          'Offset or separated joints',
          'Visible surface damage on the inside of the pipe',
          'Standing water',
          'Connections where other lines join the pipe',
        ],
        cannotTitle: 'It does not by itself show',
        cannotLead: 'Where a camera view stops',
        cannot: [
          'Anything below the waterline. A camera generally cannot see under water',
          'Pipe in sections the camera did not reach or could not view',
          'The condition of the soil around the pipe, or voids outside the pipe wall',
          'Pipe wall thickness or structural capacity',
          'Pipe slope or depth',
          'Whether every leak has been found',
          'How much service life the pipe has left',
        ],
        callout:
          'A visibly clear line is not proof that the whole line, or the ground around it, is in good condition.',
      },
      ask: {
        eyebrow: 'Before you book',
        title: 'What to ask for, and what to keep',
        intro:
          'Before you book, ask what you will receive. What is provided can vary by appointment.',
        items: [
          {
            title: 'Video',
            description: 'When a camera is used, you receive the video.',
          },
          {
            title: 'Written findings',
            description:
              'When a camera is used, you receive written findings, including any part of the line that could not be viewed.',
          },
          {
            title: 'Limits',
            description: 'Ask what the cleaning and the camera could and could not reach.',
          },
          {
            title: 'Access point and location',
            description:
              'Ask which access point was used and where along the line conditions were seen.',
          },
          {
            title: 'Cleaning record',
            description:
              'Ask what record of the cleaning is provided for your appointment.',
          },
          {
            title: 'Line locating',
            description:
              'If locating was performed, ask how it was documented. A locate is approximate, not a survey.',
          },
        ],
        keep: {
          title: 'Keep the video and written findings',
          image: 'drain-monitor',
          body: [
            'When a camera is used, they are useful as a later reference. If someone recommends costly work, you can compare written estimates and ask the estimate to point to the footage.',
            'A camera finding is a visible observation. It is not a repair recommendation, and it does not by itself set a scope of work.',
          ],
        },
      },
      audiences: {
        eyebrow: 'Who it helps',
        title: 'Who drain cleaning helps',
        items: [
          {
            audience: 'Homeowners',
            description:
              'Slow drains, recurring clogs, or a backup. Cleaning addresses the restriction, and a camera can help show what is visible in the line when the clog keeps coming back.',
          },
          {
            pageId: id('aud-home-buyers'),
            audience: 'Home buyers',
            description:
              'A buyer who learns of drain or sewer concerns can ask for a camera look at the accessible line before deciding. This is general information, not legal advice. Disclosure rules vary by state.',
            actionLabel: 'For home buyers',
          },
          {
            pageId: id('aud-home-sellers'),
            audience: 'Home sellers',
            description:
              'A seller with a history of slow or recurring drains can document the condition of the accessible line. This is general information, not legal advice. Disclosure rules vary by state.',
            actionLabel: 'For home sellers',
          },
        ],
      },
      markets: {
        id: 'choose-market',
        eyebrow: 'Service areas',
        title: 'Drain cleaning service areas',
        intro: 'Choose your market for local service details and scheduling options.',
        items: [
          {
            pageId: id('market-st-louis-mo'),
            description: 'Homeowners and home buyers across the St. Louis area.',
            actionLabel: 'View St. Louis drain cleaning',
          },
          {
            pageId: id('market-san-diego-ca'),
            description: 'Homeowners and home buyers in the San Diego area.',
            actionLabel: 'View San Diego drain cleaning',
          },
          {
            pageId: id('market-las-vegas-nv'),
            description: 'Homeowners and home buyers across the Las Vegas Valley.',
            actionLabel: 'View Las Vegas drain cleaning',
          },
        ],
      },
      /*
        ⚠ FAQ: 24 QUESTIONS IN SIX GROUPS, ANSWERS VERBATIM FROM THE
        CONTENT DOC. Plain strings only: `lib/schema/faq.ts` throws on
        custom components, and FAQPage JSON-LD must equal the visible
        text (DEC-114). The group label is navigation only and is not
        part of any answer.
      */
      faqTitle: 'Drain cleaning questions',
      eyebrows: { faq: 'Questions', related: 'Related', request: 'Request service' },
      faq: [
        {
          group: 'Understanding drain cleaning',
          question: 'What is drain cleaning?',
          answer: `Drain cleaning is the removal of grease, roots, deposits, debris, and other restricting material from a drain line, using a rotating cable, water jetting, or both. It restores flow. It does not repair the pipe.`,
        },
        {
          group: 'Understanding drain cleaning',
          question: 'What is the difference between drain cleaning and sewer cleaning?',
          answer: `Drain cleaning usually refers to fixture and branch lines, such as sinks, tubs, showers, and laundry drains. Sewer cleaning refers to the larger line that carries wastewater away from the building. Some jobs involve both.`,
        },
        {
          group: 'Understanding drain cleaning',
          question: 'What is the difference between drain cleaning and drain clearing?',
          answer: `In everyday usage, the two terms are often used interchangeably. Some people use clearing for opening a single blocked drain and cleaning for removing buildup along the pipe wall. These are everyday terms, not code terms, so ask what a provider means by either.`,
        },
        {
          group: 'Understanding drain cleaning',
          question: 'What methods are used to clean a drain?',
          answer: `Common methods are a rotating cable with cutting tools and water jetting. The method is chosen for the pipe, the entry point, and the kind of restriction. Some jobs use both.`,
        },
        {
          group: 'Understanding drain cleaning',
          question: 'Is drain cleaning the same as hydro jetting?',
          answer: `No. Drain cleaning is the goal: removing what restricts flow. Water jetting is one method, along with cable tools. Jetting is condition-dependent and is not used on every pipe.`,
        },
        {
          group: 'Understanding drain cleaning',
          question: 'Does drain cleaning repair a damaged pipe?',
          answer: `No. Cleaning removes material from inside the pipe. It does not repair cracks, offsets, or collapse. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.`,
        },
        {
          group: 'Symptoms and causes',
          question: 'What causes a drain to clog or run slowly?',
          answer: `Common causes include grease, soap, hair, wipes, debris, and roots. A slow drain can have several causes, and a symptom alone does not prove which one.`,
        },
        {
          group: 'Symptoms and causes',
          question: 'Why is my kitchen sink draining slowly?',
          answer: `Kitchen drains commonly carry cooking grease, food particles, and soap, which can build up on the pipe wall and narrow it over time. A slow kitchen sink alone does not prove where the restriction is.`,
        },
        {
          group: 'Symptoms and causes',
          question: 'Why is my bathtub or shower draining slowly?',
          answer: `Hair and soap are common causes. If only the tub or shower is slow, the restriction is often in that fixture's own drain line. If other fixtures are slow too, it may be farther down the line.`,
        },
        {
          group: 'Symptoms and causes',
          question: 'How do I know if it is a drain clog or a sewer line problem?',
          answer: `One slow fixture usually points to that fixture's own drain line. Several slow or gurgling fixtures, or a backup at the lowest drains, may point to the main sewer line. These are clues, not proof. A camera inspection can help show what is in the line.`,
        },
        {
          group: 'Symptoms and causes',
          question: 'Can a plunger or hand tool fix a clogged drain?',
          answer: `A plunger or hand tool may help with a simple clog at a single fixture. If the clog returns, several fixtures are affected, or water is coming up from a drain, the restriction may be past the fixture and it is worth contacting us.`,
        },
        {
          group: 'Symptoms and causes',
          question: 'Can tree roots grow into drain pipes?',
          answer: `Roots can enter pipe through joints or cracks. Cleaning can cut back roots inside the line, but roots may regrow and cleaning does not seal the entry point.`,
        },
        {
          group: 'Symptoms and causes',
          question: 'Why do my drains keep clogging after they were cleared?',
          answer: `The restriction may not have been fully removed, or something in the line may be rebuilding it. A camera look at the accessible line may help show what is going on.`,
        },
        {
          group: 'Symptoms and causes',
          question: 'Why are several fixtures draining slowly at once?',
          answer: `It may point to a restriction in a shared branch or the larger line. It does not prove a specific cause.`,
        },
        {
          group: 'Symptoms and causes',
          question: 'Why are my drains gurgling?',
          answer: `Gurgling can come from a drainage restriction or a venting issue. It does not point to one cause on its own.`,
        },
        {
          group: 'Symptoms and causes',
          question: 'What causes sewage-like odors?',
          answer: `An odor may point to a drain or sewer-line issue. It does not prove a specific cause.`,
        },
        {
          group: 'Symptoms and causes',
          question: 'What should I do if water or sewage is coming up from a drain?',
          answer: `Avoid contact with the water, keep children and pets away, and limit water use while you arrange help. Contact us to discuss the situation.`,
        },
        {
          group: 'Limits and cameras',
          question: 'Can drain cleaning fix a broken or collapsed pipe?',
          answer: `No. Cleaning can remove material from inside a pipe, but it does not repair structural damage.`,
        },
        {
          group: 'Limits and cameras',
          question: 'Can cleaning remove tree roots?',
          answer: `Cleaning can cut back roots that are inside the line. Roots may regrow, and cleaning does not seal the joint or crack where they entered.`,
        },
        {
          group: 'Limits and cameras',
          question: 'Is hydro jetting safe for every pipe?',
          answer: `No. Water jetting is condition-dependent and is not appropriate for every pipe or blockage, including damaged or fragile pipe.`,
        },
        {
          group: 'Limits and cameras',
          question: 'Does drain cleaning damage pipes?',
          answer: `The method is chosen for the pipe and the restriction. Cable tools and water jetting are not appropriate for every pipe, and damaged or fragile pipe may not be a candidate for jetting. If a pipe is already cracked or separated, cleaning does not repair it, and a camera look can help show what is there.`,
        },
        {
          group: 'Limits and cameras',
          question: 'Does a camera inspection come with drain cleaning?',
          answer: `They are separate services. A camera can be added when it is feasible for the line. Neither one requires the other.`,
        },
        {
          group: 'Limits and cameras',
          question: 'Can a camera see through standing water?',
          answer: `A camera generally cannot see below the waterline. If a line is blocked and not draining, cleaning may need to come first.`,
        },
        {
          group: 'Limits and cameras',
          question: 'Does a line that flows again mean the pipe is fine?',
          answer: `No. A line that flows again is not proof that the pipe is sound. A camera shows visible conditions in the section it reaches.`,
        },
        {
          group: 'Documentation and locating',
          question: 'What do I receive when a camera is used?',
          answer: `When a camera is used, you receive the video and written findings. The findings note any part of the line that could not be viewed.`,
        },
        {
          group: 'Documentation and locating',
          question: 'Will I get a record of the cleaning?',
          answer: `What is provided can vary by appointment. Ask what record of the cleaning you will receive before you book.`,
        },
        {
          group: 'Documentation and locating',
          question: 'What does line locating do?',
          answer: `Line locating identifies the approximate path of an underground line. A locate is not a survey and does not give exact depth.`,
        },
        {
          group: 'Maintenance and prevention',
          question: 'Are chemical drain cleaners a good idea?',
          answer: `Chemical drain cleaners do not remove every kind of restriction and can be hazardous to handle. Follow the product label, and tell the technician if one was used.`,
        },
        {
          group: 'Maintenance and prevention',
          question: 'Is it safe to flush wipes labeled flushable?',
          answer: `Wipes can collect in the line and contribute to blockages. A safer habit is to flush only toilet paper and human waste.`,
        },
        {
          group: 'Maintenance and prevention',
          question: 'How should I dispose of cooking grease?',
          answer: `Let it cool and put it in a container in the trash instead of pouring it down the drain. Grease can build up on the pipe wall.`,
        },
        {
          group: 'Maintenance and prevention',
          question: 'How often should drains be cleaned?',
          answer: `There is no single schedule that fits every home. Pipe material, age, nearby trees, and what goes down the drain all matter. A drain that keeps clogging is a better cue than the calendar, and a camera look can help show why.`,
        },
        {
          group: 'Requesting service',
          question: 'Do you clean drains in St. Louis, San Diego, and Las Vegas?',
          answer: `Yes. We serve St. Louis, San Diego, and Las Vegas. Choose your service area in the request form, or use the market links on this page for local details.`,
        },
        {
          group: 'Requesting service',
          question: 'How much does drain cleaning cost?',
          answer: `Cost depends on the entry point, pipe size, line condition, the method used, and whether a camera is included. We do not publish a standard price on this page. Describe the problem in the request form and we will discuss what applies.`,
        },
        {
          group: 'Requesting service',
          question: 'How long does drain cleaning take?',
          answer: `It depends on access, line length, the amount and kind of buildup, and the method. We do not publish a standard time. Ask when you request service.`,
        },
        {
          group: 'Requesting service',
          question: 'What should I tell you when I request drain cleaning?',
          answer: `Tell us which fixtures are affected, how long it has been happening, whether it keeps returning, what you have tried, and whether the request relates to a home purchase or sale. If you know where your cleanout is, mention it.`,
        },
        {
          group: 'Requesting service',
          question: 'What happens if a camera shows damage?',
          answer: `We provide cleaning, camera diagnostics, and line locating only. When a camera is used, we document what is visible and you receive the video and written findings. A camera finding is not a repair recommendation, and you can use the findings to compare estimates.`,
        },
        {
          group: 'Real estate',
          question: 'Should I have the sewer line checked before buying a house?',
          answer: `A sewer camera inspection is a focused inspection that is separate from a general home inspection. Timing and conditions are set by your purchase agreement. This is general information, not legal advice.`,
        },
      ],
      situations: {
        eyebrow: 'Keeping drains clear',
        title: 'Habits that cause clogs',
        surface: 'muted',
        items: [
          {
            title: 'Flushable wipes',
            body: 'Wipes labeled flushable can collect in the line and contribute to blockages. Flush toilet paper and human waste only.',
          },
          {
            title: 'Liquid grease',
            body: 'Grease poured down a drain can cool and build up on the pipe wall. Let it cool and put it in the trash.',
          },
          {
            title: 'Chemical drain cleaners',
            body: 'They do not remove every kind of restriction and can be hazardous to handle. Follow the label, and tell the technician if one was used.',
          },
        ],
      },
      terms: {
        eyebrow: 'Plain-language terms',
        title: 'Drain cleaning terms',
        surface: 'muted',
        items: [
          {
            title: 'Cleanout',
            body: 'A capped opening in a drain or sewer line that gives access for cleaning tools or a camera.',
          },
          {
            title: 'Branch line',
            body: 'The drain pipe that serves one fixture or a group of fixtures and connects to the larger line.',
          },
          {
            title: 'Main sewer line',
            body: 'The larger pipe that carries wastewater from the building toward the public sewer connection.',
          },
          {
            title: 'Cable cleaning',
            body: 'Cleaning with a rotating cable and cutting tools. Often called snaking.',
          },
          {
            title: 'Water jetting',
            body: 'Cleaning the pipe wall with pressurized water. Also called hydro jetting.',
          },
          {
            title: 'Camera inspection',
            body: 'A camera on a flexible cable that shows visible conditions inside an accessible line. Also called a sewer scope.',
          },
        ],
      },
      relatedTitle: 'Keep reading',
      request: {
        title: 'Request drain cleaning',
        intro: [
          'Choose your service area, tell us what you have noticed, and let us know which fixtures are affected.',
        ],
        tellUs: {
          title: 'What to tell us',
          items: [
            'Which fixtures are affected',
            'How long it has been happening, and whether it keeps returning',
            'What you have already tried',
            'Whether the request relates to a home purchase or sale',
            'Where your cleanout is, if you know',
          ],
        },
        scopeNote:
          'This service is designed for accessible residential sewer and drain lines. Equipment selection and available service depend on the entry point, pipe size, line condition, and scope of work. We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.',
        submitLabel: 'Request Drain Cleaning',
      },
    },
    relatedPageIds: [
      id('svc-sewer-cleaning'),
      id('svc-hydro-jetting'),
      id('svc-sewer-camera-inspection'),
      id('svc-sewer-line-locating'),
    ],
    relatedDescriptions: {
      [id('svc-sewer-cleaning')]:
        'Cleaning the larger line that carries wastewater from the building.',
      [id('svc-hydro-jetting')]: 'Water jetting for suitable lines and buildup.',
      [id('svc-sewer-camera-inspection')]:
        'See visible conditions inside an accessible line.',
      [id('svc-sewer-line-locating')]:
        'Identify the approximate path of an underground line.',
    },
    // Not rendered by v2: the final request section replaces the separate
    // closing form and call-to-action band.
    cta: {
      title: 'Get clear next steps for a clogged or slow drain',
      body: 'Choose your market to request drain cleaning, discuss a recurring clog, or ask whether sewer cleaning or a camera inspection may be a better starting point.',
    },
  },

  /* ======================================================================
     Pre-Purchase Sewer Inspection — 14 §35
     ====================================================================== */
  [id('svc-pre-purchase-sewer-inspection')]: {
    /*
      ⚠ THIS ENTRY RENDERS ON `ServicePageTemplateV2` (the `v2` key), NOT
      ON `ServiceHubTemplate`. The H1, the meta title and description and
      the primary and secondary hero actions stay on the base fields,
      because the route's metadata reads them there. Everything else the
      page shows is in `v2`. The old `explainer`, `considerations`,
      `process`, `secondOpinion`, `audiences`, `limitations`, `howWeWork`,
      `comparison`, `request` and flat `faq` fields were replaced by their
      v2 equivalents for this entry only; every other service page is
      untouched. Copy source: pre-purchase-sewer-inspection-page-content.md.

      ⚠ WHAT THIS COPY DOES NOT CLAIM. No price, offer, free estimate,
      guarantee, warranty, licence (DEC-072, DEC-090), insurance wording,
      response time, same-day or emergency claim, equipment brand, model
      or spec, duration or turnaround. The time and cost questions state
      no standard time or price. Owner-confirmed 2026-10-05: when a camera
      is used (a pre-purchase visit always uses one) the inspection video
      and written findings are included, and the page says exactly that.
      It does NOT claim photos, narration, a footage counter, PACP/LACP
      coding, a "report" as the deliverable name, a delivery method or
      retention period, surface marks, depth readings, a map, roof-vent or
      toilet-pull access, or locating as always included. Timing uses the
      approved sentence only. A pre-purchase visit does not include
      cleaning or hydro jetting. No legal advice, no named city
      requirement, no local inspection interval, and no claim that a sewer
      scope is required.

      ⚠ MARKET-NEUTRAL, NO PHONE NUMBER (DEC-071). Numbers reach this page
      only through the labelled footer and the mobile bar's market sheet.

      ⚠ "independent sewer inspection" IS PLAIN TEXT. The second-opinion
      page is not built, so it is not linked (and neither is any
      /compare/ page). The market cards link the three hubs only.

      ⚠ EVIDENCE MOSAIC reuses the four approved, labelled "Example:"
      camera slots already published on the camera page; no new image was
      added. The scope statement appears verbatim in the hero (last two
      sentences) and in the final request (full statement).
    */
    seoTitle: 'Pre-Purchase Sewer Inspection (Sewer Scope)',
    metaDescription:
      'A pre-purchase sewer inspection documents the visible condition of an accessible sewer line before closing. Learn the limits. St. Louis, San Diego, Las Vegas.',
    serviceDescription:
      "A pre-purchase sewer inspection is a sewer camera inspection arranged during a home purchase. A technician guides a camera through the accessible part of the sewer line and records what it can see, so a buyer can review the line's visible condition before closing.",
    hero: {
      eyebrow: 'Home buyers and real estate',
      title: 'Pre-Purchase Sewer Inspection',
      primaryAction: { href: '#request', label: 'Schedule a Pre-Purchase Sewer Inspection' },
      secondaryAction: { href: '#markets', label: 'Find Service in Your Area' },
      intro: (
        <>
          <p>
            A pre-purchase sewer inspection is a sewer camera inspection
            arranged during a home purchase. A technician guides a camera
            through the accessible part of the sewer line and records what it
            can see, so you can review the line&rsquo;s visible condition
            before you close.
          </p>
          <p>
            We provide cleaning, camera diagnostics, and line locating only.
            We do not provide sewer repair, replacement, lining, excavation,
            or pipe installation.
          </p>
        </>
      ),
    },
    // No-op on v2 (the independent band always renders); kept so the entry
    // still reads as it did before the migration.
    showDifferentiator: true,
    v2: {
      defaultServiceId: 'svc-pre-purchase-sewer-inspection',
      messageLabel: 'What should we know? Include your inspection deadline if you have one.',
      extraServiceOptions: [
        { value: 'svc-pre-purchase-sewer-inspection', label: 'Pre-Purchase Sewer Inspection' },
      ],
      images: {
        hero: '/images/services/pre-purchase-sewer-inspection/hero/the-sewer-pros-pre-purchase-sewer-inspection-hero-ridgid-seesnake-cs12x-16x9.webp',
        request:
          '/images/services/pre-purchase-sewer-inspection/the-sewer-pros-pre-purchase-sewer-inspection-request-cta-ridgid-seesnake-background-16x9.webp',
      },
      hero: {
        scope: [
          'Accessible residential sewer lines',
          'Inspection video and written findings included',
          'No repair or replacement work offered',
        ],
        cardTitle: 'Request an inspection',
        cardIntro:
          'Tell us about the property and your inspection deadline. We will help you choose the right service.',
        serviceLabel: 'Service: Pre-purchase sewer inspection',
      },
      navLabels: {
        signals: 'When buyers add one',
        limits: 'What it shows and cannot confirm',
        process: 'How it works',
        decision: 'Cleaning and the camera',
        ask: 'What to ask for',
        faq: 'Questions',
      },
      definition: {
        eyebrow: 'The short answer',
        title: 'What is a pre-purchase sewer inspection?',
        answer:
          'A pre-purchase sewer inspection, often called a sewer scope, is a camera inspection of the accessible sewer line serving a home you are buying. A technician advances a camera on a flexible cable through an entry point, watches the live view, and records what it sees.',
        supporting: [
          "The line being inspected is the private sewer lateral, the pipe that connects the building's plumbing to the public sewer main. The inspection documents visible conditions in the section the camera reaches, on the day of the visit. It is an inspection and documentation service. It does not repair anything.",
          'A sewer scope is a focused inspection of the sewer line. Ask your home inspector whether their inspection includes one.',
        ],
      },
      signals: {
        eyebrow: 'Why buyers ask',
        title: 'When buyers add a sewer inspection',
        after:
          'These are reasons buyers ask for a sewer scope. They do not mean every purchase needs one, and no national rule requires one.',
        image: 'equipment',
        items: [
          {
            title: 'An older home',
            description:
              "Pipe age is one factor municipal sources list among possible causes of lateral problems. No rule sets an age at which a scope is required, so this is a buyer's judgment.",
          },
          {
            title: "No record of the line's condition",
            description:
              'If nobody can show you what the line looked like, a camera inspection gives you a record of what was visible on the day of the visit.',
          },
          {
            title: 'Drain trouble mentioned during the sale',
            description:
              'Slow drains, gurgling, odors, or a past backup may point to a restriction. They do not prove a cause. A camera documents what is visible in the accessible line.',
          },
          {
            title: 'A local sale requirement',
            description:
              'Some local programs require a lateral inspection when a property is sold or transferred, and many do not. Ask your agent or the local sewer utility. We do not give legal advice.',
          },
          {
            title: 'A short inspection period',
            description:
              'Your purchase agreement sets the window, and it can be short. Request service early and note your deadline.',
          },
          {
            title: 'Plans to dig after you buy',
            description:
              'If you plan landscaping, a pool, or other digging, ask whether line locating is part of your visit. Locating shows where a line runs, not what condition it is in.',
          },
        ],
      },
      limits: {
        eyebrow: 'Evidence and its limits',
        title: 'What a pre-purchase sewer inspection may show, and what it cannot confirm',
        intro:
          "A camera documents visible conditions in the section it reaches, on the day of the visit. Image quality, lighting, flow, and the technician's interpretation all affect what can be seen and how it is described.",
        canTitle: 'A camera inspection may document',
        canLead: 'Visible conditions in the section the camera reaches',
        can: [
          'Roots visible inside the pipe',
          'Grease, scale, sediment, or other deposits',
          'Obstructions such as wipes or debris',
          'Cracks and fractures',
          'Offset or separated joints',
          'Standing water',
          'Collapse or broken pipe, when the camera can reach it. A complete collapse can stop the camera from going further.',
          'Visible pipe material, when it can be identified',
        ],
        cannotTitle: 'It does not by itself show',
        cannotLead: 'Where a camera view stops',
        cannot: [
          'Anything below the waterline. A camera generally cannot see under water.',
          'Pipe in sections the camera did not reach or could not view',
          'The condition of the soil around the pipe, or voids outside the pipe wall',
          'Pipe wall thickness or structural capacity',
          'Exact slope or depth. Standing water may suggest a low spot, but a camera does not measure it.',
          'Whether every leak has been found',
          'How the line will perform in the future',
          'Whether any repair is needed, or what kind. A camera result documents what is visible and does not by itself prescribe a repair method.',
        ],
        callout:
          'A visibly clear line is not proof that the whole line, or the ground around it, is in good condition.',
      },
      process: {
        eyebrow: 'What happens on the day',
        title: 'How a pre-purchase sewer inspection works',
        intro:
          'How long a visit takes depends on line length, access, debris, standing water, and what needs to be documented. We do not quote a standard time.',
        steps: [
          {
            title: 'Request',
            description:
              'Choose your service area, tell us about the property, and note your inspection deadline if you have one.',
          },
          {
            title: 'Access',
            description:
              'The technician identifies an accessible entry point, commonly an exterior cleanout.',
          },
          {
            title: 'Camera run',
            description:
              'A camera on a flexible push cable is advanced through the accessible line while the technician watches the live view.',
          },
          {
            title: 'Video',
            description: 'When a camera is used, you receive the inspection video.',
          },
          {
            title: 'Written findings',
            description:
              'Written findings are included. Ask whether they note any part of the line that could not be viewed, and why.',
          },
        ],
        prep: {
          title: 'Access points and preparing for the visit',
          image: 'process',
          items: [
            'The most common entry point is an exterior cleanout. Whether the property has one, and where, depends on its plumbing layout. Ask what applies to the home you are buying.',
            'Make sure the technician can safely reach the agreed entry point. Tell us who to coordinate with for property access, such as your agent.',
            'Note your inspection deadline when you request service, and we will work toward it. Confirm timing with your agent, since inspection periods are short.',
          ],
        },
      },
      decision: {
        eyebrow: 'Two services, one decision',
        title: 'Inspection and cleaning are separate services',
        answer:
          'A pre-purchase sewer inspection is a camera inspection. Cleaning is a separate service. If the camera cannot pass, ask what options apply.',
        note: 'Cleaning can improve camera visibility or travel in some lines. It does not repair pipe defects, and it is not an inspection. If what the camera shows goes beyond cleaning, we will say so plainly. Further evaluation may be appropriate outside our cleaning and diagnostic scope.',
        listTitle: 'When the camera may not get through',
        list: [
          'A line that is blocked or not draining. A camera generally cannot see under water.',
          'Roots, debris, or a collapsed or damaged section that stops the camera from traveling.',
          'Limited access to the line. Ask what part of the line could not be viewed, and why.',
        ],
        links: [
          { pageId: id('svc-sewer-cleaning'), label: 'Sewer cleaning' },
          { pageId: id('svc-hydro-jetting'), label: 'Hydro jetting' },
          {
            pageId: id('svc-sewer-cleaning-camera-inspection'),
            label: 'Sewer cleaning and camera inspection',
          },
        ],
      },
      independent: {
        eyebrow: 'Independent by design',
        title: 'Major sewer decisions deserve clear evidence.',
        steps: [
          {
            title: 'Inspect',
            body: 'We look inside the accessible line and document what is visible.',
          },
          {
            title: 'Document',
            body: 'You receive the inspection video and written findings.',
          },
          {
            title: 'Decide',
            body: 'You decide next steps with evidence in hand. The Sewer Pros does not sell repair or replacement.',
          },
        ],
        note: 'An independent sewer inspection is not tied to a repair job, because we do not repair or replace sewer lines. If a sewer concern comes up during your purchase, a clear record of the line gives you something to compare written estimates against.',
        link: { href: '#request', label: 'Schedule an inspection' },
      },
      comparison: {
        eyebrow: 'Which service fits',
        title: 'Pre-purchase sewer inspection vs. related services',
        columns: ['Service', 'What it does', 'May fit when'],
        caption: 'Pre-purchase sewer inspection compared with related services',
        rows: [
          {
            service: 'Pre-purchase sewer inspection',
            current: true,
            purpose:
              'Documents visible conditions in the accessible sewer line during a home purchase',
            fit: 'You are buying a home and want a record of the line before you close',
          },
          {
            service: 'Sewer camera inspection',
            pageId: id('svc-sewer-camera-inspection'),
            purpose: 'Shows visible conditions inside an accessible sewer line',
            fit: 'You own the property and want to investigate symptoms, plan a project, or keep a record',
          },
          {
            service: 'Sewer cleaning and camera inspection',
            pageId: id('svc-sewer-cleaning-camera-inspection'),
            purpose:
              'Reviews visible line conditions and addresses an appropriate restriction when warranted',
            fit: 'A problem keeps returning, the cause is unclear, or several fixtures are affected',
          },
          {
            service: 'Sewer cleaning',
            pageId: id('svc-sewer-cleaning'),
            purpose: 'Removes certain blockages and buildup from an accessible line',
            fit: 'A blockage or flow issue needs cleaning',
          },
          {
            service: 'Sewer line locating',
            pageId: id('svc-sewer-line-locating'),
            purpose:
              'Estimates the route of an accessible underground line. It is not a survey or an exact depth.',
            fit: 'You are planning digging or need to know where the line runs',
          },
        ],
      },
      ask: {
        eyebrow: 'Before you book',
        title: 'What to ask for, and what to keep',
        intro: 'Before you book, ask what you will receive. Keep it with your purchase records.',
        items: [
          {
            title: 'Inspection video',
            description:
              'When a camera is used, you receive the inspection video. Ask how it is delivered and how long you can access it.',
          },
          {
            title: 'Written findings',
            description:
              'Written findings are included. Ask whether they note any part of the line that could not be viewed, and why.',
          },
          {
            title: 'Access point and location',
            description:
              'Ask which access point was used and where along the line conditions were seen.',
          },
          {
            title: 'Line locating',
            description:
              'Ask whether locating is part of your visit and what you will receive.',
          },
          {
            title: 'What to share with your agent',
            description:
              'Share the video and written findings with your agent and your home inspector, and ask how the findings fit your purchase agreement. We do not give legal advice.',
          },
        ],
        keep: {
          title: 'Keep the original video and written findings',
          image: 'findings-review',
          body: [
            'They are a record of what was visible on the day. If someone recommends costly work, you can compare written estimates and ask another company to review the video before you decide.',
            'A camera finding is a visible observation. It is not a repair recommendation, and it does not by itself set a scope of work. Where a finding is unclear or may call for further evaluation, that evaluation is outside our cleaning and diagnostic scope.',
          ],
        },
      },
      evidence: {
        title: 'See what a sewer camera inspection can reveal',
        intro: null,
        caveat:
          "These are examples of visible conditions from individual properties, with identifying details removed. Findings vary by line, access, and inspection. A camera cannot show portions of the system it cannot reach or determine every next step on its own.",
        items: [
          {
            slot: 'root-intrusion',
            title: 'Visible root intrusion',
            description:
              "Footage may show where roots are visible and how much of the pipe they appear to affect. It documents what the camera can reach, not the full extent outside the camera's view.",
          },
          {
            slot: 'offset',
            title: 'A visible pipe offset',
            description:
              'Shows a change in alignment at a joint. It does not determine the cause.',
          },
          {
            slot: 'standing-water',
            title: 'Standing water',
            description:
              'The footage can show where it appears. It does not confirm why it is there.',
          },
          {
            slot: 'report',
            title: 'Footage and findings summary',
            description:
              'You receive the inspection video and written findings, so you can review what was seen.',
          },
        ],
      },
      audiences: {
        eyebrow: 'Who it helps',
        title: 'Who uses a pre-purchase sewer inspection',
        intro:
          'Buyers are the main reader of this page. Agents and home inspectors can contact the market serving the property to coordinate an appointment.',
        items: [
          {
            pageId: id('aud-real-estate-agents'),
            audience: 'Real estate agents',
            description:
              "Coordinate a sewer inspection around your client's inspection period and share the video and written findings for buyers and sellers to discuss. Findings record visible conditions. They do not guarantee future performance or decide repairs.",
            actionLabel: 'For real estate agents',
          },
          {
            pageId: id('aud-home-inspectors'),
            audience: 'Home inspectors',
            description:
              'Refer a sewer camera inspection when your client wants a closer look at the line, and coordinate access for the appointment. Your own inspection keeps its scope.',
            actionLabel: 'For home inspectors',
          },
          {
            pageId: id('aud-home-buyers'),
            audience: 'Home buyers',
            description:
              'Understand the visible condition of the sewer line before you close, with the inspection video and written findings in hand.',
            actionLabel: 'For home buyers',
          },
          {
            pageId: id('aud-home-sellers'),
            audience: 'Home sellers',
            description:
              "Find out what a buyer's inspection may see in the sewer line, and have documented findings ready before you list.",
            actionLabel: 'For home sellers',
          },
        ],
      },
      markets: {
        id: 'markets',
        eyebrow: 'Service areas',
        title: 'Pre-purchase sewer inspection service areas',
        intro:
          'Choose your market for local service details and scheduling options. These are service areas, not office locations.',
        items: [
          {
            pageId: id('market-st-louis-mo'),
            description: 'Home buyers, agents, and home inspectors across the St. Louis area.',
            actionLabel: 'View St. Louis inspection services',
          },
          {
            pageId: id('market-san-diego-ca'),
            description: 'Home buyers, agents, and home inspectors in the San Diego area.',
            actionLabel: 'View San Diego inspection services',
          },
          {
            pageId: id('market-las-vegas-nv'),
            description:
              'Home buyers, agents, and home inspectors across the Las Vegas Valley.',
            actionLabel: 'View Las Vegas inspection services',
          },
        ],
      },
      /*
        ⚠ FAQ: 29 QUESTIONS IN FIVE GROUPS (5 + 10 + 3 + 7 + 4), ANSWERS
        VERBATIM FROM THE CONTENT DOC. Answers are plain strings, except
        two that carry `ApprovedInlineLink`, which the FAQPage extractor
        treats as transparent text (DEC-114), so the JSON-LD still equals
        the visible text. The group label is navigation only and is not
        part of any answer.
      */
      faqTitle: 'Pre-purchase sewer inspection questions',
      eyebrows: { request: 'Request service' },
      faq: [
        {
          group: 'The basics',
          question: 'What is a pre-purchase sewer inspection?',
          answer: `A pre-purchase sewer inspection is a camera inspection of the accessible sewer line serving a home you are buying. A technician advances a camera through an entry point, views it live, and records what it sees. People often call it a sewer scope.`,
        },
        {
          group: 'The basics',
          question: 'What is a sewer lateral?',
          answer: `The sewer lateral is the private pipe that connects a building's plumbing to the public sewer main. Owners commonly maintain it, but where the owner's responsibility ends varies by location. Ask your agent or the local sewer utility.`,
        },
        {
          group: 'The basics',
          question: 'Is a sewer scope included in a regular home inspection?',
          answer: `Ask your home inspector what their inspection covers. A sewer scope is a separate, focused inspection of the sewer line, and a general inspection is not assumed to include one.`,
        },
        {
          group: 'The basics',
          question: 'Where does the camera go in?',
          answer: `Most often through an exterior cleanout. The right entry point depends on the property's plumbing layout and the line. Ask what applies to the home you are buying.`,
        },
        {
          group: 'The basics',
          question: 'What if there is no cleanout, and do you have to pull a toilet?',
          answer: `Ask before you book. Most often the camera goes in through a cleanout where one is accessible. Whether other entry points are possible depends on the property and the equipment.`,
        },
        {
          group: 'What it can and cannot see',
          question: 'What does a sewer scope look for?',
          answer: `It documents visible conditions in the accessible line: roots, grease or scale deposits, obstructions, cracks and fractures, offset or separated joints, standing water, and collapse when the camera can reach it.`,
        },
        {
          group: 'What it can and cannot see',
          question: 'What does a sewer inspection not show?',
          answer: `It does not show anything below the waterline, sections the camera did not reach, soil or voids outside the pipe, wall thickness or structural capacity, exact slope or depth, or whether every leak has been found. It also does not predict how the line will perform.`,
        },
        {
          group: 'What it can and cannot see',
          question: 'What does a clear sewer scope mean?',
          answer: `It means the camera did not record a visible problem in the section it reached on that day. It does not prove that the whole line, or the ground around it, is in good condition, and it does not predict future performance.`,
        },
        {
          group: 'What it can and cannot see',
          question: 'What happens if the camera cannot get through the line?',
          answer: `The part the camera did not reach is not documented. Roots, debris, standing water, a collapsed or damaged section, or limited access can stop the camera. Ask what part of the line could not be viewed and why, and ask what options apply.`,
        },
        {
          group: 'What it can and cannot see',
          question: 'Can a sewer camera see through standing water?',
          answer: `No. A camera generally cannot see under water. A line that is blocked and not draining may not be viewable until flow is restored.`,
        },
        {
          group: 'What it can and cannot see',
          question: 'Can a sewer camera find a belly or sag?',
          answer: `A camera can record standing water or an apparent low area. It does not measure slope, so footage alone does not establish exact grade or the cause of the low spot.`,
        },
        {
          group: 'What it can and cannot see',
          question: 'Can a sewer camera find a leak?',
          answer: `It may record visible infiltration or a visibly open defect. It cannot confirm that no leaks exist, because it does not see outside the pipe wall or below the waterline.`,
        },
        {
          group: 'What it can and cannot see',
          question: 'Can a sewer scope tell what kind of pipe I have?',
          answer: `Sometimes the camera shows the visible pipe material, but a camera view is not always enough to identify it with certainty. Ask whether pipe material is noted in the written findings.`,
        },
        {
          group: 'What it can and cannot see',
          question: 'Does a sewer scope tell me if the pipe needs to be replaced?',
          answer: `No. A camera result documents visible conditions. It does not by itself decide whether any repair or replacement is needed, because it cannot show wall thickness, structural capacity, or the soil around the pipe. The Sewer Pros does not repair or replace sewer lines.`,
        },
        {
          group: 'What it can and cannot see',
          question: 'What happens if the scope finds roots?',
          answer: `Roots are a maintenance-type condition. The footage records where they appear and how much of the pipe they seem to affect. It does not decide a fix. Cleaning can remove roots that are accessible. It does not repair the opening they entered through.`,
        },
        {
          group: 'Cleaning and locating',
          question: 'Do I need to clean the sewer before a camera inspection?',
          answer: `Not always. If standing water or debris keeps the camera from traveling or seeing, cleaning may be needed first. There is no universal order. It depends on the line.`,
        },
        {
          group: 'Cleaning and locating',
          question: 'Does a sewer scope include cleaning or hydro jetting?',
          answer: (
            <p>
              No. A pre-purchase sewer inspection is a camera inspection.
              Cleaning is a separate service. If the camera cannot pass, ask
              what options apply. See{' '}
              <ApprovedInlineLink pageId={id('svc-sewer-cleaning')}>
                sewer cleaning
              </ApprovedInlineLink>
              ,{' '}
              <ApprovedInlineLink pageId={id('svc-hydro-jetting')}>
                hydro jetting
              </ApprovedInlineLink>
              , and{' '}
              <ApprovedInlineLink pageId={id('svc-sewer-cleaning-camera-inspection')}>
                sewer cleaning and camera inspection
              </ApprovedInlineLink>
              .
            </p>
          ),
        },
        {
          group: 'Cleaning and locating',
          question: 'Can a sewer scope tell where a problem is in the yard?',
          answer: (
            <p>
              A camera shows what is inside the pipe, not where the pipe sits
              in your yard.{' '}
              <ApprovedInlineLink pageId={id('svc-sewer-line-locating')}>
                Sewer line locating
              </ApprovedInlineLink>{' '}
              can estimate a position from the surface, and a locate is an
              estimate, not a survey. Ask whether locating is part of your
              visit.
            </p>
          ),
        },
        {
          group: 'Buying and timing',
          question: 'Should I get a sewer scope before buying a house?',
          answer: `It is your decision. Inspections happen during the contingency period set by your purchase agreement, and no national rule requires a sewer scope. A scope gives you a record of the accessible line's visible condition before you close. It does not decide whether you should buy.`,
        },
        {
          group: 'Buying and timing',
          question: 'Is a sewer scope required when buying or selling a house?',
          answer: `No national rule requires one. Some local programs require a lateral inspection when a property is sold or transferred, and many do not. Check with your agent or the local sewer utility. We do not give legal advice.`,
        },
        {
          group: 'Buying and timing',
          question: 'Is a sewer scope worth it for an older house, or one with no plumbing problems?',
          answer: `No rule sets a home age at which a scope is required. Pipe age is one factor municipal sources list among possible causes of lateral problems, and drains that work during a showing do not show what is inside the line. Some local utilities recommend periodic inspection even when there are no symptoms.`,
        },
        {
          group: 'Buying and timing',
          question: 'When should I schedule a sewer scope during the inspection period?',
          answer: `Your purchase agreement sets your inspection window, and it can be short. Note your inspection deadline when you request service, and we will work toward it. Confirm timing with your agent, since inspection periods are short.`,
        },
        {
          group: 'Buying and timing',
          question: 'How long does a sewer scope take?',
          answer: `It depends on the entry point, the length and condition of the line, and what needs to be documented. We do not quote a standard time. Ask when you request service.`,
        },
        {
          group: 'Buying and timing',
          question: 'How much does a sewer scope cost?',
          answer: `Pricing depends on the scope of work, so we do not publish a standard price. Ask when you request service.`,
        },
        {
          group: 'Buying and timing',
          question: 'Do I need to be there for the appointment?',
          answer: `Ask when you request service. Whether someone needs to be present can depend on the property and the service requested.`,
        },
        {
          group: 'Records and next steps',
          question: 'Do I get a video of the sewer inspection?',
          answer: `Yes. When a camera is used, you receive the inspection video. Ask how it is delivered and how long you can access it.`,
        },
        {
          group: 'Records and next steps',
          question: 'Do I get written findings from a sewer inspection?',
          answer: `Written findings are included. Ask whether they note any part of the line that could not be viewed, and why.`,
        },
        {
          group: 'Records and next steps',
          question: 'What should a sewer inspection record include?',
          answer: `Ask for the inspection video and written findings, which access point was used, where along the line conditions were seen, what part of the line could not be viewed and why, and whether locating was performed. Local programs set their own requirements. These are questions to ask any provider.`,
        },
        {
          group: 'Records and next steps',
          question: 'What should I ask before approving major sewer work?',
          answer: `Ask for the proposal in writing, including the work, materials, schedule, and price. Ask which inspection evidence it relies on, such as video and findings, and whether the camera reached all sections. Compare written estimates when the work is significant, and ask why they differ. The Sewer Pros does not perform repair or replacement.`,
        },
      ],
      relatedTitle: 'Keep reading',
      relatedColumns: 4,
      request: {
        title: 'Request a pre-purchase sewer inspection',
        intro: [
          'Choose your service area, tell us about the property, and note your inspection deadline if you have one. We will tell you what we can do and what is included.',
          'This service is designed for accessible residential sewer and drain lines. Equipment selection and available service depend on the entry point, pipe size, line condition, and scope of work. We provide cleaning, camera diagnostics, and line locating only. We do not provide sewer repair, replacement, lining, excavation, or pipe installation.',
        ],
        submitLabel: 'Schedule a Pre-Purchase Sewer Inspection',
      },
    },
    relatedPageIds: [
      id('svc-sewer-camera-inspection'),
      id('svc-sewer-cleaning-camera-inspection'),
      id('svc-sewer-line-locating'),
      id('svc-sewer-cleaning'),
    ],
    relatedDescriptions: {
      [id('svc-sewer-camera-inspection')]:
        'What a camera may show, and what it cannot confirm.',
      [id('svc-sewer-cleaning-camera-inspection')]:
        'Review visible line conditions and address an appropriate restriction when warranted.',
      [id('svc-sewer-line-locating')]: 'Estimate where an accessible line runs.',
      [id('svc-sewer-cleaning')]:
        'Remove certain blockages and buildup from an accessible line.',
    },
    // Not rendered by v2: the final request section replaces the separate
    // closing form and call-to-action band.
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
    /*
      Two-column explainer, matching the pattern built for the
      pre-purchase sewer inspection and preventative maintenance pages.
      No approved photography exists for this page yet, so the right
      column is a pending-photography placeholder (18 §40-42) rather
      than a fabricated image.
    */
    explainer: {
      content: (
        <>
          <h2>Recurrence is information</h2>
          <p>
            A one-off blockage is often ordinary. A blockage that returns on a
            pattern usually means something in the line is catching material,
            and each clearing resets the clock without changing the cause.
          </p>

          <h3>What commonly causes recurrence</h3>
          <ul>
            <li>Roots entering at a specific joint or crack and regrowing</li>
            <li>A section that has lost slope and holds water and solids</li>
            <li>An offset joint or partial collapse creating a catch point</li>
            <li>Scale or deterioration narrowing the effective diameter</li>
            <li>A downstream restriction outside the property</li>
          </ul>
        </>
      ),
      image: {
        label:
          'A technician reviewing sewer camera footage during a recurring-backup diagnosis',
        filename:
          'the-sewer-pros-recurring-sewer-backup-diagnosis-explainer-monitor-4x3.webp',
      },
    },
    body: (
      <>
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
      </>
    ),
    /*
      Second two-column block, muted surface, same pattern as the
      pre-purchase and preventative maintenance pages' `considerations`.
    */
    considerations: {
      content: (
        <>
          <h2>What the answer might be</h2>
          <p>
            Sometimes the answer is that the line is sound and needs
            maintenance on a sensible interval. Sometimes it is a defect that
            will keep causing backups until it is addressed by a qualified
            repair contractor. Both are useful answers, and neither is
            improved by guessing.
          </p>
        </>
      ),
      image: {
        label:
          'Sewer line locating equipment marking the approximate position of a found defect',
        filename:
          'the-sewer-pros-recurring-sewer-backup-diagnosis-considerations-locating-4x3.webp',
      },
    },
    problems: [
      {
        title: 'Multiple drains are slow or backing up',
        description:
          'A pattern across more than one fixture can point to something in the shared line rather than a single local clog.',
      },
      {
        title: 'Water backs up in a shower, tub, or floor drain',
        description:
          'A lower fixture can become the visible point of a restriction elsewhere in the line, especially when another fixture is running.',
      },
      {
        title: 'A drain was cleared but the problem returned',
        description:
          'Clearing restores flow without necessarily showing what caused the blockage or where it sits in the line.',
      },
      {
        title: 'Toilets gurgle or water levels change while another fixture drains',
        description:
          'This can be a sign that wastewater is not moving through the line the way it normally would.',
      },
    ],
    process: [
      {
        title: 'Understand the history',
        description: 'What backs up, how often, which fixtures are involved, and what has been done before.',
      },
      {
        title: 'Clear enough to assess',
        description: 'Enough of the accessible line is cleared to allow a useful inspection.',
      },
      {
        title: 'Inspect the line',
        description: 'A camera is guided through the accessible line and visible conditions are reviewed.',
      },
      {
        title: 'Locate any defect found',
        description: 'If the footage identifies a defect, its approximate position is located so it is known rather than estimated.',
      },
    ],
    showDifferentiator: true,
    limitations: {
      title: 'What a recurring-backup diagnosis can and cannot tell you',
      intro:
        'This page describes common possibilities. It cannot diagnose a specific property without an actual inspection, and a camera inspection can only assess the portions of the line it can reach.',
      canIdentifyTitle: 'An inspection may help identify',
      canIdentify: [
        'Visible buildup, debris, or a recurring restriction in the accessible line',
        'Root intrusion, and approximately where it appears',
        'Visible cracks, offsets, or separated joints',
        'A section that has lost slope and holds water or solids',
      ],
      cannotTitle: 'It may not determine by itself',
      cannot: [
        'The condition of portions of the line the camera cannot reach',
        'Whether the same problem will return in the future',
        'Whether replacement, rather than cleaning or monitoring, is the right next step',
        'The exact position of a defect without a separate locating service',
      ],
      related: {
        lead: 'Need to identify the approximate route of an underground line?',
        pageId: id('svc-sewer-line-locating'),
        label: 'Explore line locating services',
      },
    },
    /*
      Page-specific "How We Work" band, restating facts already stated
      in `explainer`/`body`/`considerations` above rather than adding
      anything new. See ServicePageContent.howWeWork.
    */
    howWeWork: {
      title: 'How We Approach a Recurring Backup',
      intro:
        'We look for the mechanism behind a recurring backup, not just the fastest way to restore flow again.',
      items: [
        {
          title: 'We Start With History',
          icon: 'checklist',
          description:
            'What backs up, how often, which fixtures are involved, and what has already been tried inform the rest of the visit.',
        },
        {
          title: 'We Clear Enough to See',
          icon: 'pipe',
          description:
            'The line is cleared enough for a useful inspection, not just enough to restore flow.',
        },
        {
          title: 'We Inspect the Accessible Line',
          icon: 'camera',
          description:
            'A camera documents visible conditions, and any portions that cannot be assessed are noted.',
        },
        {
          title: 'We Locate What We Find',
          icon: 'monitor',
          description:
            'If the footage identifies a defect, its approximate position is located rather than estimated.',
        },
      ],
    },
    comparison: {
      title: 'Which service may make sense for a recurring problem?',
      intro:
        'Recurring symptoms can call for different services depending on what is happening. Compare them to help decide where to start.',
      rows: [
        {
          service: 'Sewer camera inspection',
          purpose: 'See visible conditions in the accessible line and help identify a recurring cause',
          fit: 'The problem keeps returning, or several fixtures are affected',
          pageId: id('svc-sewer-camera-inspection'),
        },
        {
          service: 'Sewer cleaning',
          purpose: 'Remove or address certain blockages, buildup, or roots in the line',
          fit: 'A restriction has been identified and may respond to cleaning',
          pageId: id('svc-sewer-cleaning'),
        },
        {
          service: 'Hydro jetting',
          purpose: 'Higher-pressure cleaning for certain buildup or recurring restrictions',
          fit: 'Cleaning is appropriate and the line condition and access support it',
          pageId: id('svc-hydro-jetting'),
        },
        {
          service: 'Sewer line locating',
          purpose: 'Identify the approximate path and position of the line or a found defect',
          fit: 'A property project, excavation, or route question is involved',
          pageId: id('svc-sewer-line-locating'),
        },
      ],
      note: 'A technician can help determine which of these fits a specific situation after reviewing what has been happening.',
    },
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
      {
        question: 'Does a recurring backup mean the sewer line needs to be replaced?',
        answer: (
          <p>
            No. A recurring backup alone does not establish that replacement is
            necessary. The appropriate next step depends on what an inspection
            finds, including the cause, its position, and whether it is in an
            accessible section of the line.
          </p>
        ),
      },
      {
        question: 'Can sewer cleaning stop a recurring backup?',
        answer: (
          <p>
            It may help remove certain blockages, buildup, roots, or debris in
            the accessible line. Whether cleaning alone is enough, or whether
            further inspection is useful, depends on the condition and
            accessibility of the line.
          </p>
        ),
      },
      {
        question: 'When should a sewer camera inspection be scheduled instead of another clearing?',
        answer: (
          <p>
            When the problem keeps returning, several fixtures are affected, or
            the previous clearing did not show what was causing it. Documented
            footage can help identify a mechanism rather than just restoring
            flow again.
          </p>
        ),
      },
    ],
    relatedTitle: 'Related Services',
    relatedVariant: 'detailed',
    relatedDescriptions: {
      [id('svc-sewer-camera-inspection')]:
        'A sewer camera inspection documents visible conditions in the accessible line. It is the evidence a recurring-backup diagnosis is based on.',
      [id('svc-sewer-line-locating')]:
        'Once a defect is identified, locating establishes its approximate position, useful for repair planning or excavation.',
      [id('svc-preventative-sewer-maintenance')]:
        'When the line is sound but has a known reason to need service, a scheduled interval can be less disruptive than responding to the next backup.',
    },
    relatedLinkLabels: {
      [id('svc-sewer-camera-inspection')]: 'Learn About Sewer Camera Inspections',
      [id('svc-sewer-line-locating')]: 'Learn About Sewer Line Locating',
      [id('svc-preventative-sewer-maintenance')]:
        'Learn About Preventative Maintenance',
    },
    relatedImages: {
      [id('svc-sewer-camera-inspection')]: {
        src: '/images/services/service-cards/the-sewer-pros-sewer-camera-inspection-ridgid-monitor.webp',
        alt: 'Camera monitor showing the inside of a line, beside an open cleanout',
        source:
          'Supplied by the business owner, 2026-09-22. Rendered scene, not a photograph of a Sewer Pros job.',
      },
      [id('svc-sewer-line-locating')]: {
        src: '/images/services/service-cards/the-sewer-pros-sewer-line-locating-equipment.webp',
        alt: 'Locating transmitter and receiver equipment beside an open access point',
        source:
          'Supplied by the business owner, 2026-09-22. Rendered scene, not a photograph of a Sewer Pros job.',
      },
      [id('svc-preventative-sewer-maintenance')]: {
        src: '/images/services/service-cards/the-sewer-pros-preventative-sewer-maintenance.webp',
        alt: 'Camera, cleaning, and jetting equipment staged together at a property',
        source:
          'Supplied by the business owner, 2026-09-22. Rendered scene, not a photograph of a Sewer Pros job.',
      },
    },
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
    /*
      Two-column explainer, matching the pattern built for the
      pre-purchase sewer inspection page. No approved photography exists
      for this page yet, so the right column is a pending-photography
      placeholder (18 §40-42) rather than a fabricated image.
    */
    explainer: {
      content: (
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
        </>
      ),
      image: {
        label:
          'A technician reviewing sewer camera footage to establish a maintenance interval',
        filename:
          'the-sewer-pros-preventative-sewer-maintenance-explainer-review-4x3.webp',
      },
    },
    /*
      Second two-column block, muted surface, same pattern as the
      pre-purchase page's `considerations`. Also folds in the
      spec's "decision factors" checklist and "how often" guidance
      as plain prose rather than new bespoke components, since
      neither needs its own photograph.
    */
    considerations: {
      content: (
        <>
          <h2>Establishing the right interval</h2>
          <p>
            A sensible interval comes from evidence: what the line looked like
            at the last inspection, how quickly material accumulated between
            visits, and what caused the previous blockages. That is why
            maintenance usually starts with inspection rather than a
            calendar.
          </p>
          <p>Useful evidence to consider includes:</p>
          <ul>
            <li>Prior backups, recurring clogs, or slow drains</li>
            <li>Whether more than one fixture has been affected</li>
            <li>Existing camera footage, reports, or cleaning records</li>
            <li>Access points and the accessible condition of the line</li>
            <li>
              An approaching home purchase, sale, renovation, or excavation
              project
            </li>
          </ul>

          <h2>Where it fits for commercial properties</h2>
          <p>
            High-volume and food-service lines accumulate faster, and an
            unplanned backup carries operational cost beyond the plumbing.
            That changes the arithmetic of scheduled service relative to a
            residential line.
          </p>

          <h2>How often should a line be inspected or cleaned?</h2>
          <p>
            There is no single interval that is appropriate for every sewer
            line. A property with a recurring history may benefit from a
            different approach than one with no known symptoms, and a line
            with no known issues does not need a default cleaning schedule.
            The useful frequency, if any, comes from the line&rsquo;s own
            condition and history.
          </p>

          <h2>What we will not do</h2>
          <p>
            We will not put a line on a schedule it does not need. If the
            evidence does not support a recurring interval, saying so is more
            useful than selling one.
          </p>
        </>
      ),
      image: {
        label:
          'Sewer cleaning equipment staged at a commercial property cleanout',
        filename:
          'the-sewer-pros-preventative-sewer-maintenance-considerations-commercial-4x3.webp',
      },
    },
    /*
      Reframes the shared "Inspect / Document / Decide" independence
      section for a maintenance-interval decision rather than a repair
      recommendation (pre-purchase's own override at
      `svc-pre-purchase-sewer-inspection` is the repair-second-opinion
      version of the same mechanism). See
      `ServicePageContent.secondOpinion`.
    */
    secondOpinion: {
      title: 'A Maintenance Interval Set From Evidence, Not a Sales Schedule',
      intro: [
        'The Sewer Pros sets a maintenance interval from what an inspection actually shows, not from a default calendar. A camera inspection documents the line’s current, accessible condition, which is the starting point for deciding whether a schedule makes sense at all.',
      ],
      steps: [
        {
          body: 'We use RIDGID sewer camera equipment to document the accessible line’s current condition and any prior signs of accumulation or root entry.',
        },
        {
          body: 'We compare that condition against the property’s history, including how quickly material has accumulated between prior visits.',
        },
        {
          body: 'If the evidence supports a recurring interval, we recommend one. If it does not, we say so rather than proposing a schedule the line does not need.',
        },
      ],
      calloutOne: {
        title: 'Why Evidence Before a Schedule?',
        body: [
          'A default interval treats every line the same regardless of its actual condition. Basing the decision on inspection findings means the recommendation reflects this specific line, not a generic maintenance plan.',
        ],
      },
      calloutTwo: null,
      ctaNote:
        'Not sure whether a schedule makes sense for a specific property? A camera inspection can help answer that before committing to one.',
      closing: null,
    },
    showDifferentiator: true,
    audiences: {
      title: 'Preventative Sewer Planning by Property Role',
      intro:
        'A maintenance decision can look different depending on who is making it. Each role below may use the same evidence differently.',
      items: [
        {
          pageId: id('aud-property-managers'),
          audience: 'Property Managers',
          icon: 'checklist',
          description:
            'Create an intake path for recurring drainage concerns, multiple units, or documented maintenance planning.',
          actionLabel: 'Learn About Property-Manager Support',
        },
        {
          pageId: id('aud-home-buyers'),
          audience: 'Home Buyers',
          icon: 'house-search',
          description:
            'Understand visible sewer-line conditions before closing, as part of a pre-purchase sewer inspection.',
          actionLabel: 'Learn About Pre-Purchase Sewer Inspections',
        },
        {
          pageId: id('aud-real-estate-agents'),
          audience: 'Real Estate Agents',
          icon: 'checklist',
          description:
            'Coordinate a sewer scope around a transaction and share documented findings for buyers and sellers to discuss.',
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
      ],
    },
    /*
      "When you may need this" router — the spec's readiness router,
      mapped onto the shared `ProblemGrid` (title fixed by
      `ServicePageTemplate` to "When you may need this"; see
      `ServicePageContent.problems`). No per-card links: `ProblemContent`
      is title/description only, so routing to a specific next service
      happens through `comparison`, `audiences`, and `relatedPageIds`
      below instead.
    */
    problems: [
      {
        title: 'A Backup or Clog Has Happened Before',
        description:
          'Recurring clogs or a repeat backup may justify a clearer look at the accessible line rather than another clearing alone.',
      },
      {
        title: 'A Home Purchase or Sale Is Approaching',
        description:
          'A pending property decision can create a need for documented, visible-condition evidence before closing.',
      },
      {
        title: 'A Renovation or Excavation Project Is Planned',
        description:
          'Knowing the approximate line route may help with planning around landscaping, a pool, or other site work.',
      },
      {
        title: 'The Property Is Managed or Rented',
        description:
          'Recurring issues or multiple units may call for a repeatable intake path rather than a one-off visit.',
      },
      {
        title: 'There Is No Known Symptom, but History Is Unclear',
        description:
          'A condition-aware inspection can establish a baseline before committing to any cleaning method or schedule.',
      },
      {
        title: 'A Backup Is Happening Right Now',
        description:
          'An active backup is not a routine maintenance situation. Recurring-backup diagnosis is the more direct next step.',
      },
    ],
    limitations: {
      title: 'What Preventative Sewer Maintenance Cannot Guarantee',
      intro:
        'An evidence-based maintenance approach can inform a decision. It is not a certification and does not guarantee future performance.',
      canIdentifyTitle: 'A maintenance-focused inspection may help identify',
      canIdentify: [
        'Visible current condition of the accessible line',
        'How quickly material has accumulated since a prior visit',
        'Whether a known cause of prior blockages is still present',
        'Whether the accessible line supports the cleaning method being considered',
      ],
      cannotTitle: 'It cannot guarantee',
      cannot: [
        'That a future sewer backup will never occur',
        'That every section of the line is accessible or visible',
        'A pass/fail certification for the property',
        'That cleaning is appropriate for every pipe condition',
      ],
      related: {
        lead: 'Planning a renovation, landscaping, or excavation project?',
        pageId: id('svc-sewer-line-locating'),
        label: 'Learn about sewer line locating.',
      },
    },
    showMarkets: true,
    comparison: {
      title: 'What Preventative Maintenance May Include',
      intro:
        'The right approach depends on the line’s condition, access, and history. These are the building blocks, not a package to choose from all at once.',
      rows: [
        {
          service: 'Sewer camera inspection',
          purpose: 'Document the accessible line’s current visible condition',
          fit: 'History is unclear, symptoms have recurred, or a baseline is needed before choosing a cleaning method',
          pageId: id('svc-sewer-camera-inspection'),
        },
        {
          service: 'Sewer cleaning',
          purpose: 'Address certain accessible blockages, buildup, roots, or debris',
          fit: 'An inspection or history points to a specific, accessible restriction',
          pageId: id('svc-sewer-cleaning'),
        },
        {
          service: 'Hydro-jetting',
          purpose: 'High-pressure water cleaning for certain recurring buildup',
          fit: 'Line condition and access support it, based on inspection findings',
          pageId: id('svc-hydro-jetting'),
        },
        {
          service: 'Sewer line locating',
          purpose: 'Identify the approximate route and position of the line',
          fit: 'A renovation, landscaping, or excavation project is planned',
          pageId: id('svc-sewer-line-locating'),
        },
        {
          service: 'Monitoring and recordkeeping',
          purpose: 'Preserve inspection findings and service history for later reference',
          fit: 'No current symptoms exist, but a documented baseline is still useful',
        },
      ],
      note: 'A technician can help determine which of these fits a specific line after reviewing its condition and history.',
      surface: 'muted',
    },
    hideMidPageForm: true,
    /*
      Page-specific "How We Work" band, restating facts already stated
      in `explainer`/`considerations` above rather than adding anything
      new. See ServicePageContent.howWeWork.
    */
    howWeWork: {
      title: 'How We Approach Preventative Sewer Maintenance',
      intro:
        'We base a maintenance schedule on what an inspection actually shows, not on a default calendar interval.',
      items: [
        {
          title: 'We Start With Inspection',
          icon: 'camera',
          description:
            'A camera inspection documents the line’s current condition, which is the starting point for any interval.',
        },
        {
          title: 'The Evidence Sets the Interval',
          icon: 'checklist',
          description:
            'How quickly material accumulated between visits and what caused previous blockages inform how often service makes sense.',
        },
        {
          title: 'Built for High-Volume Lines',
          icon: 'pipe',
          description:
            'Commercial and food-service lines that accumulate faster can carry a different schedule than a residential line.',
        },
        {
          title: 'No Schedule Without a Reason',
          icon: 'monitor',
          description:
            'If the evidence does not support a recurring interval, we say so rather than proposing one.',
        },
      ],
    },
    relatedTitle: 'Related Services',
    relatedVariant: 'detailed',
    relatedDescriptions: {
      [id('svc-sewer-cleaning')]:
        'Sewer cleaning removes or addresses certain blockages and buildup in the line. A camera inspection can help document conditions before or after cleaning to confirm what changed.',
      [id('svc-recurring-sewer-backup-diagnosis')]:
        'When a backup keeps returning, diagnosis looks for the mechanism behind it rather than only restoring flow. The findings can help clarify whether maintenance or further work makes sense.',
      [id('svc-sewer-camera-inspection')]:
        'A sewer camera inspection documents the visible condition of the accessible line. It is the evidence a sensible maintenance interval is based on.',
      [id('svc-sewer-line-locating')]:
        'Before a renovation, landscaping, or excavation project, locating can help establish the approximate route and position of the line.',
    },
    relatedLinkLabels: {
      [id('svc-sewer-cleaning')]: 'Learn About Sewer Cleaning',
      [id('svc-recurring-sewer-backup-diagnosis')]:
        'Learn About Recurring Backup Diagnosis',
      [id('svc-sewer-camera-inspection')]: 'Learn About Sewer Camera Inspections',
      [id('svc-sewer-line-locating')]: 'Learn About Sewer Line Locating',
    },
    relatedImages: {
      [id('svc-sewer-cleaning')]: {
        src: '/images/services/service-cards/the-sewer-pros-sewer-cleaning-ridgid-equipment.webp',
        alt: 'Sewer cleaning equipment connected to an open cleanout at a driveway',
        source:
          'Supplied by the business owner, 2026-09-22. Rendered scene, not a photograph of a Sewer Pros job.',
      },
      [id('svc-recurring-sewer-backup-diagnosis')]: {
        src: '/images/services/service-cards/the-sewer-pros-recurring-sewer-backup-diagnosis.webp',
        alt: 'Camera monitor showing root intrusion inside a line, beside inspection equipment',
        source:
          'Supplied by the business owner, 2026-09-22. Rendered scene, not a photograph of a Sewer Pros job.',
      },
      [id('svc-sewer-camera-inspection')]: {
        src: '/images/services/service-cards/the-sewer-pros-sewer-camera-inspection-ridgid-monitor.webp',
        alt: 'Camera monitor showing the inside of a line, beside an open cleanout',
        source:
          'Supplied by the business owner, 2026-09-22. Rendered scene, not a photograph of a Sewer Pros job.',
      },
      [id('svc-sewer-line-locating')]: {
        src: '/images/services/service-cards/the-sewer-pros-sewer-line-locating-equipment.webp',
        alt: 'Locating transmitter and receiver equipment beside an open access point',
        source:
          'Supplied by the business owner, 2026-09-22. Rendered scene, not a photograph of a Sewer Pros job.',
      },
    },
    faq: [
      {
        question: 'How do you decide the interval?',
        icon: <ChecklistIcon />,
        answer: (
          <p>
            From the line itself: its condition at inspection, how quickly it
            accumulates, and what caused previous problems. There is no single
            correct interval for every line.
          </p>
        ),
      },
      {
        question: 'Do all homes need routine sewer cleaning?',
        answer: (
          <p>
            No. The right approach depends on the property&rsquo;s history,
            line condition, access, past symptoms, and any planned project. A
            universal cleaning schedule is not appropriate for every property.
          </p>
        ),
      },
      {
        question: 'Can a sewer camera inspection help with preventative maintenance?',
        answer: (
          <p>
            A camera inspection can document visible conditions in the
            accessible portion of the line. It is useful when history is
            unclear, problems have recurred, or a cleaning method needs
            better context before it is chosen.
          </p>
        ),
      },
      {
        question: 'Will preventative sewer maintenance stop future backups?',
        answer: (
          <p>
            No service can guarantee that a future backup will not occur.
            Inspection and appropriate maintenance may help inform decisions
            and address certain accessible issues, but they do not predict or
            prevent every future problem.
          </p>
        ),
      },
      {
        question: 'Can a property manager request maintenance for multiple properties?',
        answer: (
          <p>
            A property manager may request support for recurring drainage
            concerns or maintenance planning. The appropriate workflow
            depends on the number of properties, issue history, and access at
            each one.
          </p>
        ),
      },
      {
        question: 'Is sewer maintenance the same as sewer line locating?',
        answer: (
          <p>
            No. Sewer line locating helps identify the approximate route and
            position of a private sewer line for planning or coordination. It
            does not replace cleaning, camera inspection, 811 utility
            marking, or excavation safety planning.
          </p>
        ),
      },
    ],
    faqColumns: 2,
    relatedPageIds: [
      id('svc-sewer-cleaning'),
      id('svc-recurring-sewer-backup-diagnosis'),
      id('svc-sewer-camera-inspection'),
      id('svc-sewer-line-locating'),
    ],
  },
}
