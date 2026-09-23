import { existsSync } from 'node:fs'
import { join } from 'node:path'
import type { CameraImageSlotSpec } from './camera-inspection-images'

/**
 * Sewer cleaning + camera inspection hub
 * (`/services/sewer-cleaning-camera-inspection/`) image slots.
 *
 * ⚠ SLOTS, NOT ASSETS. Same contract as the camera and cleaning hubs:
 * nothing here points at a stand-in image. Save the real file at
 * `preferred` (shot list in
 * `public/images/services/sewer-cleaning-camera-inspection/README.md`)
 * and it is used at the next build. Until then the slot resolves to a
 * labelled placeholder in development and to NOTHING in a production build.
 *
 * ⚠ EVERY SLOT MUST BE A REAL SEWER PROS PHOTO. No stock plumbers, no
 * cartoon pipes, no AI imagery presented as real work, and no fabricated
 * before and after pairs. Monitor stills are anonymized
 * (`requiresRelease`). No slot may imply repair, replacement, a
 * storefront, or a local office (CLAUDE.md §9, §11, §24).
 *
 * Keys are prefixed `combined-` so they can never collide with another
 * hub's key in the shared `HubImageKey` union.
 */
const DIR = '/images/services/sewer-cleaning-camera-inspection/'

export const combinedImageSlots = {
  'combined-definition': {
    preferred: `${DIR}combined-cleanout-access-4x3.webp`,
    alt: 'Inspection camera cable and cleaning equipment at an exterior cleanout',
    caption: 'Inspection and cleaning equipment share the same accessible cleanout.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Camera reel or cleaning line at an exterior cleanout. No address or house number visible.',
    requiresRelease: false,
  },
  'combined-process': {
    preferred: `${DIR}combined-process-technician-review-4x3.webp`,
    alt: 'Technician reviewing sewer inspection footage on a monitor',
    caption: 'What the camera shows guides the recommended next step.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Technician at an inspection monitor. No customer or address identifiable.',
    requiresRelease: true,
  },
  'combined-equipment': {
    preferred: `${DIR}combined-equipment-staged-4x3.webp`,
    alt: 'Sewer camera reel and cleaning machine staged at a job site',
    caption: 'Inspection and cleaning equipment staged for a visit.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Actual camera reel, cleaning machine and branded vehicle. Plates and addresses blurred.',
    requiresRelease: false,
  },
  'combined-monitor-buildup': {
    preferred: `${DIR}combined-monitor-buildup-still-4x3.webp`,
    alt: 'Inspection monitor showing buildup inside a sewer pipe',
    caption: 'A monitor still showing buildup, with property details removed.',
    width: 1448,
    height: 1086,
    kind: 'footage-still',
    subject: 'Real monitor still showing buildup in the line. Customer data, address and GPS overlay removed.',
    requiresRelease: true,
  },
  'combined-monitor-clear': {
    preferred: `${DIR}combined-monitor-post-cleaning-still-4x3.webp`,
    alt: 'Inspection monitor showing the wall of a cleaned sewer pipe',
    caption: 'A monitor still of a cleaned section, with property details removed.',
    width: 1448,
    height: 1086,
    kind: 'footage-still',
    subject: 'Real monitor still of pipe wall after cleaning. Only use if genuinely from the same line as any paired still; never staged.',
    requiresRelease: true,
  },
} as const satisfies Record<string, CameraImageSlotSpec>

export type CombinedImageKey = keyof typeof combinedImageSlots

export interface ResolvedCombinedImage extends CameraImageSlotSpec {
  key: CombinedImageKey
  /** True when no real file exists yet. Only ever returned outside production. */
  placeholder: boolean
}

/** The real image when present at build time; a placeholder outside production; otherwise `null`. */
export function resolveCombinedImage(key: CombinedImageKey): ResolvedCombinedImage | null {
  const spec: CameraImageSlotSpec = combinedImageSlots[key]
  if (existsSync(join(process.cwd(), 'public', spec.preferred))) {
    return { ...spec, key, placeholder: false }
  }
  if (process.env.NODE_ENV !== 'production') {
    return { ...spec, key, placeholder: true }
  }
  return null
}
