import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { SHOW_IMAGE_SLOTS } from '@/lib/image-slots'
import type { CameraImageSlotSpec } from './camera-inspection-images'

/**
 * Recurring sewer backup diagnosis (`/services/recurring-sewer-backup-diagnosis/`)
 * image slots.
 *
 * ⚠ SLOTS, NOT ASSETS. Nothing here points at a stand-in image. Save the real
 * file at `preferred` and it is used at the next build. Until then a slot
 * renders the labelled `ImagePlaceholder` while `SHOW_IMAGE_SLOTS` is on
 * (the review-build flag the location pages use) and renders NOTHING when it
 * is off, in any build mode.
 *
 * ⚠ EVERY SLOT MUST BE A REAL SEWER PROS PHOTO OR A FRAME FROM A REAL
 * INSPECTION VIDEO. No stock, no AI imagery, no rendered scene presented as a
 * job photo. Job photos need customer consent and no visible address, house
 * number, plate or face. A photo must not show or imply more than the copy
 * already says (CLAUDE.md §9, §11, §24).
 *
 * `alt` is the draft alt text for the REAL photograph. It is emitted only when
 * the file exists and has been approved; a placeholder carries no alt text.
 * Keys are prefixed `recurring-` so they never collide with another hub's key.
 */
const DIR = '/images/services/recurring-sewer-backup-diagnosis/'
const NAME = 'the-sewer-pros-recurring-sewer-backup-diagnosis'

export interface RecurringImageSlotSpec extends CameraImageSlotSpec {
  /** The labelled placeholder shown while no approved photograph exists. */
  pending: { label: string; aspect: '16/9' | '4/3' | '7/4' }
}

export const recurringImageSlots = {
  'recurring-hero': {
    preferred: `${DIR}${NAME}-hero-cleanout-16x9.webp`,
    alt: 'Technician setting up a sewer camera at a residential cleanout',
    caption: '',
    width: 1600,
    height: 900,
    kind: 'photo',
    subject:
      'A technician at an exterior cleanout with camera reel and monitor set up at a residential property.',
    requiresRelease: true,
    pending: {
      label:
        'A technician at an exterior cleanout with camera reel and monitor set up at a residential property',
      aspect: '16/9',
    },
  },
  'recurring-explainer': {
    preferred: `${DIR}${NAME}-explainer-monitor-4x3.webp`,
    alt: 'Technician reviewing sewer camera footage during a recurring-backup diagnosis',
    caption: '',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'A technician reviewing sewer camera footage on a monitor.',
    requiresRelease: true,
    pending: {
      label: 'A technician reviewing sewer camera footage on a monitor',
      aspect: '4/3',
    },
  },
  'recurring-causes': {
    preferred: `${DIR}${NAME}-causes-root-footage-4x3.webp`,
    alt: 'Camera view of tree roots entering a sewer pipe joint',
    caption: '',
    width: 1448,
    height: 1086,
    kind: 'footage-still',
    subject:
      'A real frame from an inspection video showing visible root intrusion at a joint or crack. No identifiers.',
    requiresRelease: true,
    pending: {
      label:
        'A real frame from an inspection video showing visible root intrusion at a joint or crack (no identifiers)',
      aspect: '4/3',
    },
  },
  'recurring-limits': {
    preferred: `${DIR}${NAME}-limits-waterline-footage-7x4.webp`,
    alt: 'Camera view of standing water inside a sewer line',
    caption: '',
    width: 1400,
    height: 800,
    kind: 'footage-still',
    subject:
      'A real frame showing standing water in a line, where the waterline limits the view.',
    requiresRelease: true,
    pending: {
      label:
        'A real frame showing standing water in a line, where the waterline limits the view',
      aspect: '7/4',
    },
  },
  'recurring-process-access': {
    preferred: `${DIR}${NAME}-process-cleanout-access-4x3.webp`,
    alt: 'Camera cable entering an open sewer cleanout',
    caption: '',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'An open cleanout with a camera cable or cleaning hose entering it.',
    requiresRelease: true,
    pending: {
      label: 'An open cleanout with a camera cable or cleaning hose entering it',
      aspect: '4/3',
    },
  },
  'recurring-process-locate': {
    preferred: `${DIR}${NAME}-process-locate-receiver-4x3.webp`,
    alt: 'Technician using a locating receiver above a buried sewer line',
    caption: '',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject:
      'A technician holding a locating receiver over a yard or driveway during a locate.',
    requiresRelease: true,
    pending: {
      label:
        'A technician holding a locating receiver over a yard or driveway during a locate',
      aspect: '4/3',
    },
  },
  'recurring-records': {
    preferred: `${DIR}${NAME}-records-video-and-findings-4x3.webp`,
    alt: 'Inspection video and written findings from a sewer diagnosis',
    caption: '',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject:
      'A monitor or tablet showing inspection video beside written findings, with customer details removed.',
    requiresRelease: true,
    pending: {
      label:
        'A monitor or tablet showing inspection video beside written findings, with customer details removed',
      aspect: '4/3',
    },
  },
} as const satisfies Record<string, RecurringImageSlotSpec>

export type RecurringImageKey = keyof typeof recurringImageSlots

export interface ResolvedRecurringImage extends RecurringImageSlotSpec {
  key: RecurringImageKey
  /** True when no real file exists yet. Only ever returned while the slot flag is on. */
  placeholder: boolean
}

/** The real image when present at build time; a placeholder while the slot flag is on; otherwise `null`. */
export function resolveRecurringImage(key: RecurringImageKey): ResolvedRecurringImage | null {
  const spec: RecurringImageSlotSpec = recurringImageSlots[key]
  if (existsSync(join(process.cwd(), 'public', spec.preferred))) {
    return { ...spec, key, placeholder: false }
  }
  if (SHOW_IMAGE_SLOTS) return { ...spec, key, placeholder: true }
  return null
}
