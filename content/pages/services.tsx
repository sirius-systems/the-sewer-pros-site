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
          question: 'Will I get the video and a written report?',
          answer: `Ask what is included before you book. A useful record has the video, written observations, and a note on any part of the line that could not be viewed.`,
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
          question: 'Will I get a video and written report?',
          answer: `It depends on the appointment. Ask whether video and written findings are included, whether you keep a copy, and whether the findings note any part of the line that could not be viewed.`,
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
          question: 'Will I get video or a written report?',
          answer: 'Ask what is included before you book.',
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
      /*
        The photo replaces the panel's plain navy surface; `CtaSection`
        applies its own measured black scrim (never navy/tinted, per
        project convention) so the form and copy stay legible.
      */
      backgroundImage: {
        src: '/images/services/pre-purchase-sewer-inspection/the-sewer-pros-pre-purchase-sewer-inspection-request-cta-ridgid-seesnake-background-16x9.webp',
        alt: 'RIDGID SeeSnake sewer camera equipment set up for a pre-purchase sewer inspection',
        source: 'The Sewer Pros field photography.',
      },
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
