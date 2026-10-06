/**
 * Shared builders for service + location pages.
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43, §79.
 *
 * Everything here is page-neutral: the nine service cards (the same
 * residential services every location page lists), the image-slot helpers,
 * and the FAQ merge. Page-specific copy lives in the per-market modules
 * (for example `las-vegas-service-location.tsx`).
 *
 * ⚠ NO BUSINESS FACTS ARE ADDED HERE. The card copy is the copy already
 * live on the location pages; the FAQ merge only re-uses answers already
 * published on a location page and a service page.
 */

import { getService } from '@/data/services'
import { resolveSlotImage, type ImageSlotLike } from '@/lib/image-slots'
import type {
  CardImage,
  FaqContent,
  LocationServiceCard,
  LocationServiceCards,
  PageId,
  ServiceId,
} from '@/types'

const pageId = (value: string): PageId => value as PageId

/* ==========================================================================
   Image slots
   ========================================================================== */

/**
 * The picture for a slot: the real photo once `src` and `source` are set, the
 * labelled review-build box while `SHOW_IMAGE_SLOTS` is on, nothing when off.
 */
export function slotImage(slot: ImageSlotLike): CardImage | undefined {
  return resolveSlotImage(slot)
}

/** For components that render through `next/image` and cannot draw a box. */
function inlineImage(slot: ImageSlotLike): CardImage | undefined {
  const image = resolveSlotImage(slot)
  return image?.placeholder === undefined ? image : undefined
}

function boxImage(slot: ImageSlotLike): CardImage | undefined {
  const image = resolveSlotImage(slot)
  return image?.placeholder === undefined ? undefined : image
}

/**
 * Slots for the four problem cards and the hero of one page. Ids are unique
 * per page so each page can receive its own photo.
 */
export function pageImageSlots(
  pageKey: string,
  spec: {
    hero: { alt: string; shot: string }
    problems: readonly [
      { alt: string; shot: string },
      { alt: string; shot: string },
      { alt: string; shot: string },
      { alt: string; shot: string },
    ]
  },
): {
  hero: CardImage | undefined
  problems: readonly (CardImage | undefined)[]
} {
  return {
    hero: slotImage({ id: `${pageKey}-hero`, ratio: '4:3', ...spec.hero }),
    problems: spec.problems.map((p, i) =>
      slotImage({ id: `${pageKey}-problem-${i + 1}`, ratio: '4:3', ...p }),
    ),
  }
}

/* ==========================================================================
   The nine service cards
   ========================================================================== */

/**
 * One slot per service, shared by every service + location page, so a single
 * photo fills the card everywhere it appears.
 */
const CARD_SLOTS: Record<string, ImageSlotLike> = {
  camera: {
    id: 'slc-camera',
    ratio: '4:3',
    alt: 'Sewer camera being fed into a cleanout',
    shot: 'Camera head and push cable at a cleanout',
  },
  cleaning: {
    id: 'slc-cleaning',
    ratio: '4:3',
    alt: 'Sewer cleaning equipment at work at a home',
    shot: 'Cleaning machine and cable or hose at a cleanout',
  },
  jetting: {
    id: 'slc-jetting',
    ratio: '4:3',
    alt: 'Hydro jetting nozzle ready for use',
    shot: 'Jetting nozzle and hose at the line',
  },
  cleaningCamera: {
    id: 'slc-cleaning-camera',
    ratio: '4:3',
    alt: 'Technician reviewing camera footage after a cleaning',
    shot: 'Monitor showing a cleaned pipe with crew behind',
  },
  locating: {
    id: 'slc-locating',
    ratio: '4:3',
    alt: 'Technician using a sewer line locator in a yard',
    shot: 'Technician with a locator receiver, paint marks on pavement',
  },
  drain: {
    id: 'slc-drain',
    ratio: '4:3',
    alt: 'Drain cleaning equipment at a fixture',
    shot: 'Drain machine at a floor or tub drain',
  },
  prePurchase: {
    id: 'slc-prepurchase',
    ratio: '4:3',
    alt: 'Inspector explaining findings to a home buyer',
    shot: 'Technician scoping a for-sale property, clipboard visible',
  },
  backup: {
    id: 'slc-backup',
    ratio: '4:3',
    alt: 'Camera monitor showing the condition of a sewer line',
    shot: 'Floor drain with cleanout access, nothing graphic',
  },
  maintenance: {
    id: 'slc-maintenance',
    ratio: '4:3',
    alt: 'Technician on a scheduled sewer maintenance visit',
    shot: 'Crew member recording a post-cleaning camera pass',
  },
}

const card = (
  serviceId: ServiceId,
  slot: ImageSlotLike,
  fields: Omit<LocationServiceCard, 'serviceId' | 'image' | 'slotPlaceholder'>,
): LocationServiceCard => ({
  serviceId,
  image: inlineImage(slot),
  slotPlaceholder: boxImage(slot),
  ...fields,
})

/**
 * The nine residential service cards, in the order the location pages use.
 * Copy is the copy already live on the location pages.
 */
export function serviceLocationServiceCards(opts: {
  locationName: string
  /** The market's published number, as the location pages show it. */
  phone: string
}): LocationServiceCards {
  const { locationName, phone } = opts
  return {
    eyebrow: `Services in ${locationName}`,
    title: `Sewer Inspection, Diagnostics and Cleaning Services in ${locationName}`,
    cards: [
      card('svc-sewer-camera-inspection', CARD_SLOTS.camera, {
        title: 'Sewer Camera Inspection',
        description:
          'See recorded video of the accessible sewer line. An inspection can help identify observed conditions and support an informed next-step decision.',
        bestWhen: 'Best when you want to see what is inside the line.',
        bookingLabel: 'Schedule a Camera Inspection',
        secondaryLink: {
          label: 'About sewer camera inspection',
          pageId: pageId('svc-sewer-camera-inspection'),
        },
      }),
      card('svc-sewer-cleaning', CARD_SLOTS.cleaning, {
        title: 'Sewer Cleaning',
        description:
          'Remove buildup and obstructions from sewer lines when cleaning is appropriate. A camera inspection can help document line conditions before or after cleaning.',
        bestWhen: 'Best when a line is slow or partly blocked.',
        bookingLabel: 'Request Sewer Cleaning',
        secondaryLink: {
          label: 'About sewer cleaning',
          pageId: pageId('svc-sewer-cleaning'),
        },
      }),
      card('svc-hydro-jetting', CARD_SLOTS.jetting, {
        title: 'Hydro Jetting',
        description:
          'Use high-pressure water to clear eligible sewer lines. Whether jetting is appropriate depends on the line’s observed condition.',
        bestWhen: 'Best when buildup keeps returning.',
        bookingLabel: 'Request Hydro Jetting',
        secondaryLink: {
          label: 'About hydro jetting',
          pageId: pageId('svc-hydro-jetting'),
        },
      }),
      card('svc-sewer-cleaning-camera-inspection', CARD_SLOTS.cleaningCamera, {
        title: 'Sewer Cleaning & Camera Inspection',
        description:
          'Combine cleaning with visual documentation of the line. See what was observed and whether cleaning changed the conditions visible on camera.',
        bestWhen: 'Best when you want proof of what cleaning changed.',
        bookingLabel: 'Request Cleaning with Camera',
        secondaryLink: {
          label: 'About cleaning with camera',
          pageId: pageId('svc-sewer-cleaning-camera-inspection'),
        },
      }),
      card('svc-sewer-line-locating', CARD_SLOTS.locating, {
        title: 'Sewer Line Locating',
        description:
          'Help identify the route of an accessible sewer line and locate a specific area when conditions allow. Useful when planning evaluation or work.',
        bestWhen: 'Best when you need to know where the line runs.',
        bookingLabel: 'Request Line Locating',
        secondaryLink: {
          label: 'How line locating works',
          pageId: pageId('svc-sewer-line-locating'),
        },
      }),
      card('svc-drain-cleaning', CARD_SLOTS.drain, {
        title: 'Drain Cleaning',
        description:
          'Address buildup or blockages in drain lines, sinks, tubs and fixtures. The service focuses on the affected drain and the reported symptoms.',
        bestWhen: 'Best when one sink, tub or fixture is clogged.',
        bookingLabel: 'Request Drain Cleaning',
        secondaryLink: {
          label: 'About drain cleaning',
          pageId: pageId('svc-drain-cleaning'),
        },
      }),
      card('svc-pre-purchase-sewer-inspection', CARD_SLOTS.prePurchase, {
        title: 'Pre-Purchase Sewer Inspection',
        description:
          'Get a visual assessment of accessible portions of the sewer line before buying a property. The findings can help inform your due diligence.',
        bestWhen: 'Best when you are buying a home.',
        bookingLabel: 'Schedule a Pre-Purchase Inspection',
        secondaryLink: {
          label: 'About pre-purchase inspection',
          pageId: pageId('svc-pre-purchase-sewer-inspection'),
        },
      }),
      card('svc-recurring-sewer-backup-diagnosis', CARD_SLOTS.backup, {
        title: 'Recurring Sewer Backup Diagnosis',
        description:
          'Investigate recurring backups and document conditions observed during the inspection. Findings can help clarify what may be contributing to the problem.',
        bestWhen: 'Best when backups keep coming back.',
        bookingLabel: 'Request a Diagnosis',
        secondaryLink: {
          label: 'How diagnosis works',
          pageId: pageId('svc-recurring-sewer-backup-diagnosis'),
        },
      }),
      card('svc-preventative-sewer-maintenance', CARD_SLOTS.maintenance, {
        title: 'Preventative Sewer Maintenance',
        description:
          'Arrange sewer inspection or cleaning based on the line’s condition and needs. Recommendations should be guided by observed evidence.',
        bestWhen: 'Best when you want to stay ahead of problems.',
        bookingLabel: 'Request Maintenance',
        secondaryLink: {
          label: 'About maintenance',
          pageId: pageId('svc-preventative-sewer-maintenance'),
        },
      }),
    ],
    helpBar: {
      title: 'Not sure which service you need?',
      body: 'Tell us what is happening and we will point you to the right inspection or cleaning.',
      primaryLabel: 'Describe Your Problem',
      phoneLabel: `Call ${phone}`,
    },
  }
}

/** Fails the build if the nine cards drift from the service registry. */
export function assertCardsMatchRegistry(cards: LocationServiceCards): void {
  if (cards.cards.length !== 9) {
    throw new Error(`Expected 9 service cards, found ${cards.cards.length}.`)
  }
  for (const c of cards.cards) getService(c.serviceId)
}

/* ==========================================================================
   FAQ merge
   ========================================================================== */

/**
 * Every relevant question from the source location page and the source
 * service page, location questions first.
 *
 * `skip` names questions that are NOT relevant or duplicate another entry.
 * A skip entry that matches nothing throws, so a renamed source question
 * fails the build instead of silently re-entering the page. A question
 * asked on both sources appears once (the first copy).
 *
 * Answers are re-used as published, so the FAQPage JSON-LD (derived from
 * the array the page renders) matches visible text.
 */
export function mergeRelevantFaqs(
  location: readonly FaqContent[],
  service: readonly { question: string; answer: FaqContent['answer']; group?: string }[],
  skip: readonly string[],
  /** Topic pill for the location's own questions, shown first. */
  locationGroup: string,
): FaqContent[] {
  const all: { question: string; answer: FaqContent['answer']; group?: string }[] = [
    ...location.map((f) => ({ ...f, group: locationGroup })),
    ...service,
  ]
  const questions = new Set(all.map((f) => f.question))
  for (const q of skip) {
    if (!questions.has(q)) {
      throw new Error(`mergeRelevantFaqs: skip entry matches no question: "${q}"`)
    }
  }
  const seen = new Set<string>()
  const out: FaqContent[] = []
  for (const f of all) {
    if (skip.includes(f.question) || seen.has(f.question)) continue
    seen.add(f.question)
    out.push({ question: f.question, answer: f.answer, group: f.group })
  }
  return out
}

/* ==========================================================================
   Per-service blocks, shared by every page of that service
   ========================================================================== */

type Item = { title: string; description: string }

/**
 * Three service-driven "when to call" cards per service, lifted from each
 * service page's own signals. A fourth, location-driven card is added per
 * page, so no page is the service text with a city swapped in.
 */
export const SERVICE_PROBLEMS: Partial<Record<ServiceId, readonly Item[]>> = {
  'svc-sewer-camera-inspection': [
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
      title: 'After a sewage backup',
      description:
        'After a backup, a camera may help document what is visible. If the line is blocked and not draining, cleaning may need to come first.',
    },
  ],
  'svc-pre-purchase-sewer-inspection': [
    {
      title: 'An older home',
      description:
        "Pipe age is one factor municipal sources list among possible causes of lateral problems. No rule sets an age at which a scope is required, so this is a buyer's judgment.",
    },
    {
      title: 'A short inspection period',
      description:
        'Your purchase agreement sets the window, and it can be short. Request service early and note your deadline.',
    },
    {
      title: "No record of the line's condition",
      description:
        'If nobody can show you what the line looked like, a camera inspection gives you a record of what was visible on the day of the visit.',
    },
  ],
  'svc-sewer-cleaning': [
    {
      title: 'Several fixtures draining slowly at once',
      description:
        'When more than one fixture is slow at the same time, the restriction may be farther downstream than a single fixture’s drain.',
    },
    {
      title: 'Clogs that keep coming back',
      description:
        'A clog that returns after clearing may mean buildup, roots, or debris remain in the line, or that a pipe condition is involved. A camera can help show which.',
    },
    {
      title: 'Water rising through a floor drain, shower, or toilet',
      description:
        'This can indicate a blockage in the sewer line. If sewage is actively backing up into your home, contact us to discuss the situation.',
    },
  ],
  'svc-hydro-jetting': [
    {
      title: 'Slow drains in more than one fixture',
      description:
        'These signs point to a restriction somewhere, but they do not prove what or where it is. A single slow sink is often a drain cleaning question.',
    },
    {
      title: 'A drain that clears and then slows again',
      description:
        'A backup that returns is worth looking at in the main line. Whether hydro jetting suits it depends on what the line looks like.',
    },
    {
      title: 'Water backing up in a floor drain, tub, or lowest fixture',
      description:
        'This can point to a restriction in the main line. A camera look first helps choose the method when the line can be viewed.',
    },
  ],
}

/**
 * Six "what's included" cards per service. Only video and written findings
 * are owner-confirmed deliverables; the rest restate steps already published
 * on that service page.
 */
export const SERVICE_INCLUSIONS: Partial<Record<ServiceId, readonly Item[]>> = {
  'svc-sewer-camera-inspection': [
    { title: 'Inspection video', description: 'When a camera is used, you receive the inspection video.' },
    { title: 'Written findings', description: 'Written findings are included.' },
    { title: 'Visible conditions noted', description: 'The findings note the conditions that are visible inside the line.' },
    { title: 'Parts not viewed, stated', description: 'Any part of the line that could not be viewed is noted, so the record says what it does not cover.' },
    { title: 'Live view at the monitor', description: 'The technician watches the monitor and pauses at visible features or conditions.' },
    { title: 'An identified entry point', description: 'The technician identifies an accessible entry point, commonly an exterior cleanout.' },
  ],
  'svc-pre-purchase-sewer-inspection': [
    { title: 'Inspection video', description: 'When a camera is used, you receive the inspection video.' },
    { title: 'Written findings', description: 'Written findings are included.' },
    { title: 'Visible conditions noted', description: 'The findings note the conditions that are visible inside the line.' },
    { title: 'Parts not viewed, stated', description: 'Any part of the line that could not be viewed is noted, so the record says what it does not cover.' },
    { title: 'An identified entry point', description: 'The technician identifies an accessible entry point, commonly an exterior cleanout.' },
    { title: 'Records you can share', description: 'Share the video and written findings with your agent and your home inspector.' },
  ],
  'svc-sewer-cleaning': [
    { title: 'An assessment first', description: 'The entry point, pipe size, reported symptoms, and what equipment can be used are considered.' },
    { title: 'Cleaning of the line', description: 'Hydraulic or mechanical equipment is used to address the restriction, in as many passes as the line calls for.' },
    { title: 'A camera look first, when included', description: 'A camera may be used to see the line first, when it can be viewed.' },
    { title: 'A camera look after, when included', description: 'A camera may be used again to see what the cleaning achieved and note conditions in the pipe.' },
    { title: 'Inspection video', description: 'When a camera is used, you receive the inspection video.' },
    { title: 'Written findings', description: 'Written findings are included.' },
  ],
  'svc-hydro-jetting': [
    { title: 'A look at the access point', description: 'We look at where the line can be reached. A cleanout is the common entry point.' },
    { title: 'A look at the line, when included', description: 'A camera shows the pipe’s interior and helps pick the method.' },
    { title: 'Nozzle and settings chosen for the line', description: 'These depend on what the line looks like and what is in it.' },
    { title: 'The line jetted', description: 'Water moves through the hose and nozzle. More water is not automatically better.' },
    { title: 'A second look, when included', description: 'A second look shows what was removed and what remains.' },
    { title: 'Video and written findings', description: 'When a camera is used, you receive the inspection video. Written findings are included.' },
  ],
}

/** Generic, location-neutral photo briefs for the four problem cards. */
export const SERVICE_PROBLEM_SHOTS: Partial<
  Record<ServiceId, readonly { alt: string; shot: string }[]>
> = {
  'svc-sewer-camera-inspection': [
    { alt: 'Capped sewer cleanout beside a house foundation', shot: 'Exterior cleanout cap at the base of a house' },
    { alt: 'Camera monitor showing the condition of a sewer line', shot: 'Monitor with a pipe interior, nothing graphic' },
    { alt: 'Floor drain with cleanout access', shot: 'Floor drain with cleanout access, nothing graphic' },
    { alt: 'Residential street with a manhole cover near the curb', shot: 'Ordinary residential street, manhole and curb, no identifiable homes' },
  ],
  'svc-pre-purchase-sewer-inspection': [
    { alt: 'Older home exterior with a capped cleanout', shot: 'Older home, cleanout visible, no identifiable address' },
    { alt: 'Inspector starting a pre-purchase sewer scope', shot: 'Technician at a for-sale property starting a scope' },
    { alt: 'Inspector reviewing sewer findings with a home buyer', shot: 'Technician and buyer reviewing findings, faces not identifiable' },
    { alt: 'Residential street with a manhole cover near the curb', shot: 'Ordinary residential street, manhole and curb, no identifiable homes' },
  ],
  'svc-sewer-cleaning': [
    { alt: 'Sewer cleaning machine at a cleanout', shot: 'Cleaning machine and cable at a cleanout' },
    { alt: 'Cleaning cable entering a sewer line', shot: 'Cable or hose entering a cleanout, close up' },
    { alt: 'Floor drain with cleanout access', shot: 'Floor drain with cleanout access, nothing graphic' },
    { alt: 'Residential street with a manhole cover near the curb', shot: 'Ordinary residential street, manhole and curb, no identifiable homes' },
  ],
  'svc-hydro-jetting': [
    { alt: 'Hydro jetting nozzle ready for use', shot: 'Jetting nozzle and hose at the line' },
    { alt: 'Trailer-mounted sewer jetter at a residential curb', shot: 'Jetter trailer at a curb, no plate' },
    { alt: 'Floor drain with cleanout access', shot: 'Floor drain with cleanout access, nothing graphic' },
    { alt: 'Residential street with a manhole cover near the curb', shot: 'Ordinary residential street, manhole and curb, no identifiable homes' },
  ],
}
