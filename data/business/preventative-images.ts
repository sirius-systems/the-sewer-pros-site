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
 * Keys are prefixed `preventative-` so they never collide with another hub's key.
 */
const DIR = '/images/services/preventative-sewer-maintenance/'
const NAME = 'the-sewer-pros-preventative-sewer-maintenance'

export interface PreventativeImageSlotSpec extends CameraImageSlotSpec {
  /** The labelled placeholder shown while no approved photograph exists. */
  pending: { label: string; aspect: '16/9' | '4/3' | '7/4' }
}

export const preventativeImageSlots = {
  'preventative-explainer': {
    preferred: `${DIR}${NAME}-explainer-review-4x3.webp`,
    alt: 'Technician reviewing sewer camera footage on a monitor',
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
  'preventative-prep': {
    preferred: `${DIR}${NAME}-prep-cleanout-4x3.webp`,
    alt: 'A capped sewer cleanout at a residential property',
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
    preferred: `${DIR}${NAME}-records-video-and-findings-4x3.webp`,
    alt: 'Inspection video and written findings from a sewer visit',
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
