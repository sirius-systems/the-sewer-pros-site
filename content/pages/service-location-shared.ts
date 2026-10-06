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
  service: readonly { question: string; answer: FaqContent['answer'] }[],
  skip: readonly string[],
): FaqContent[] {
  const all = [...location, ...service]
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
    out.push({ question: f.question, answer: f.answer })
  }
  return out
}
