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
 * ⚠ UPDATE Oct 12, 2026: the slots below are filled with owner-supplied rendered
 * scenes (the same provenance as `RENDER_IMAGE_SOURCE` in `lib/image-slots.ts`), not job
 * photographs, so the "real photo only" rule above is not met yet. Their alt text
 * describes only what is visible. Replace each file with a real photograph when
 * one exists.
 *
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
    alt: 'A sewer camera reel and open monitor on a sidewalk beside an open exterior cleanout in front of a house',
    caption: '',
    width: 1360,
    height: 765,
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
    preferred: '/images/shared/equipment/the-sewer-pros-technician-reviewing-camera-footage-monitor-4x3.webp',
    alt: 'Sewer camera reel and an open monitor showing the inside of a pipe, set on a lawn between two houses',
    caption: '',
    width: 1600,
    height: 1200,
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
    preferred: `${DIR}${NAME}-limits-waterline-footage-4x3.webp`,
    alt: 'Camera view of standing water inside a sewer line',
    caption: '',
    width: 1448,
    height: 1086,
    kind: 'footage-still',
    subject:
      'A real frame showing standing water in a line, where the waterline limits the view.',
    requiresRelease: true,
    pending: {
      label:
        'A real frame showing standing water in a line, where the waterline limits the view',
      aspect: '4/3',
    },
  },
  'recurring-process-access': {
    preferred: '/images/shared/cleanouts/the-sewer-pros-cleaning-cable-entering-cleanout-close-up-4x3.webp',
    alt: 'A flexible cable entering an open threaded cleanout fitting beside a house foundation',
    caption: '',
    width: 1600,
    height: 1200,
    kind: 'photo',
    subject: 'An open cleanout with a camera cable or cleaning hose entering it.',
    requiresRelease: true,
    pending: {
      label: 'An open cleanout with a camera cable or cleaning hose entering it',
      aspect: '4/3',
    },
  },
  'recurring-process-locate': {
    preferred: '/images/shared/equipment/the-sewer-pros-technician-locator-receiver-yard-paint-marks-4x3.webp',
    alt: 'A yellow handheld locator receiver standing on a lawn beside a sidewalk with orange and blue paint marks',
    caption: '',
    width: 1600,
    height: 1200,
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
    preferred: '/images/shared/pipe-interiors/the-sewer-pros-tablet-inspection-video-beside-written-findings-4x3.webp',
    alt: 'A tablet showing a blurred inspection report with a pipe video, beside a printed report on a clipboard on a table',
    caption: '',
    width: 1600,
    height: 1200,
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
