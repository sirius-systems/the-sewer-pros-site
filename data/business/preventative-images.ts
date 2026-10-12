import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { SHOW_IMAGE_SLOTS } from '@/lib/image-slots'
import type { CameraImageSlotSpec } from './camera-inspection-images'

/**
 * Preventative sewer maintenance (`/services/preventative-sewer-maintenance/`)
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
 * Keys are prefixed `preventative-` so they never collide with another hub's key.
 */
export interface PreventativeImageSlotSpec extends CameraImageSlotSpec {
  /** The labelled placeholder shown while no approved photograph exists. */
  pending: { label: string; aspect: '16/9' | '4/3' | '7/4' }
}

export const preventativeImageSlots = {
  'preventative-explainer': {
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
  'preventative-prep': {
    // Filled by the shared owner-supplied render of a capped cleanout (not a job photo).
    preferred: '/images/shared/cleanouts/the-sewer-pros-capped-exterior-cleanout-base-of-house-4x3.webp',
    alt: 'White threaded sewer cleanout cap at the base of an exterior wall, with a sewer camera reel and open monitor on the mulch beside it',
    caption: '',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'A capped exterior cleanout at a residential property. No identifiers.',
    requiresRelease: true,
    pending: {
      label: 'A capped exterior cleanout at a residential property (no identifiers)',
      aspect: '4/3',
    },
  },
  'preventative-records': {
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
} as const satisfies Record<string, PreventativeImageSlotSpec>

export type PreventativeImageKey = keyof typeof preventativeImageSlots

export interface ResolvedPreventativeImage extends PreventativeImageSlotSpec {
  key: PreventativeImageKey
  /** True when no real file exists yet. Only ever returned while the slot flag is on. */
  placeholder: boolean
}

/** The real image when present at build time; a placeholder while the slot flag is on; otherwise `null`. */
export function resolvePreventativeImage(
  key: PreventativeImageKey,
): ResolvedPreventativeImage | null {
  const spec: PreventativeImageSlotSpec = preventativeImageSlots[key]
  if (existsSync(join(process.cwd(), 'public', spec.preferred))) {
    return { ...spec, key, placeholder: false }
  }
  if (SHOW_IMAGE_SLOTS) return { ...spec, key, placeholder: true }
  return null
}
