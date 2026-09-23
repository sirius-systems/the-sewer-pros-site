import { existsSync } from 'node:fs'
import { join } from 'node:path'
import type { CameraImageSlotSpec } from './camera-inspection-images'

/**
 * Sewer cleaning hub (`/services/sewer-cleaning/`) image slots.
 *
 * ⚠ SLOTS, NOT ASSETS. Same contract as the camera hub
 * (`camera-inspection-images.ts`): nothing here points at a stand-in
 * image. Save the real file at `preferred` (shot list in
 * `public/images/services/sewer-cleaning/README.md`) and it is used at
 * the next build. Until then the slot resolves to a labelled placeholder
 * in development and to NOTHING in a production build.
 *
 * ⚠ EVERY SLOT MUST BE A REAL SEWER PROS PHOTO. No stock plumbers, no
 * cartoon pipes, no AI imagery presented as real work. Monitor stills
 * are anonymized (`requiresRelease`). No slot may imply repair,
 * replacement, a storefront, or a local office (CLAUDE.md §9, §11, §24).
 *
 * Keys are prefixed `cleaning-` so they can never collide with a camera
 * hub key in the shared `HubImageKey` union.
 */
const DIR = '/images/services/sewer-cleaning/'

export const cleaningImageSlots = {
  'cleaning-definition': {
    preferred: `${DIR}sewer-cleaning-cleanout-access-4x3.webp`,
    alt: 'Sewer cleaning equipment set up beside an exterior cleanout',
    caption: 'Cleaning equipment is connected at an accessible cleanout.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Technician or equipment at an exterior cleanout. No address or house number visible.',
    requiresRelease: false,
  },
  'cleaning-process': {
    preferred: `${DIR}sewer-cleaning-process-4x3.webp`,
    alt: 'Technician feeding cleaning cable into a sewer cleanout',
    caption: 'The method depends on access and the suspected restriction.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Cable machine or cleaning head in use at a cleanout.',
    requiresRelease: false,
  },
  'cleaning-equipment': {
    preferred: `${DIR}sewer-cleaning-equipment-4x3.webp`,
    alt: 'Sewer cleaning machine and hoses staged at a job site',
    caption: 'Field equipment staged for a cleaning visit.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Actual equipment and branded vehicle. Plates and addresses blurred.',
    requiresRelease: false,
  },
  'cleaning-monitor': {
    preferred: `${DIR}sewer-cleaning-monitor-still-4x3.webp`,
    alt: 'Inspection monitor showing the interior of a sewer pipe',
    caption: 'A monitor still, with property details removed.',
    width: 1448,
    height: 1086,
    kind: 'footage-still',
    subject: 'Real monitor still. Customer data, address and GPS overlay removed.',
    requiresRelease: true,
  },
} as const satisfies Record<string, CameraImageSlotSpec>

export type CleaningImageKey = keyof typeof cleaningImageSlots

export interface ResolvedCleaningImage extends CameraImageSlotSpec {
  key: CleaningImageKey
  /** True when no real file exists yet. Only ever returned outside production. */
  placeholder: boolean
}

/** The real image when present at build time; a placeholder outside production; otherwise `null`. */
export function resolveCleaningImage(key: CleaningImageKey): ResolvedCleaningImage | null {
  const spec: CameraImageSlotSpec = cleaningImageSlots[key]
  if (existsSync(join(process.cwd(), 'public', spec.preferred))) {
    return { ...spec, key, placeholder: false }
  }
  if (process.env.NODE_ENV !== 'production') {
    return { ...spec, key, placeholder: true }
  }
  return null
}
