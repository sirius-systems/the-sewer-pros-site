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
    preferred: `${DIR}the-sewer-pros-sewer-cleaning-definition-ridgid-seesnake-equipment-4x3.webp`,
    alt: 'Sewer cleaning machine with its cable in an open cleanout, beside a separate RIDGID SeeSnake series camera reel and monitor',
    // Still accurate for the supplied photo: the cleaning cable is in the cleanout.
    caption: 'Cleaning equipment is connected at an accessible cleanout.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Technician or equipment at an exterior cleanout. No address or house number visible.',
    requiresRelease: false,
  },
  'cleaning-process': {
    preferred: `${DIR}the-sewer-pros-sewer-cleaning-visit-process-ridgid-seesnake-4x3.webp`,
    alt: 'Sewer cleaning machine with its cable in an open cleanout, beside a separate RIDGID SeeSnake series camera reel and monitor',
    // Describes the photo only. It makes no claim about which equipment or
    // method any given visit uses.
    caption: 'Example: a cleaning machine at an open cleanout, with a separate camera-inspection reel beside it.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Cable machine or cleaning head in use at a cleanout.',
    requiresRelease: false,
  },
  // Reuses the definition-section photograph: the cleaning machine with its
  // cable in an open cleanout, and a separate camera reel beside it. The
  // earlier `...equipment-accessible-cleanout-4x3.webp` file showed only
  // camera equipment, so it no longer backs this slot.
  'cleaning-equipment': {
    preferred: `${DIR}the-sewer-pros-sewer-cleaning-definition-ridgid-seesnake-equipment-4x3.webp`,
    alt: 'Sewer cleaning machine with its cable in an open cleanout, beside a separate RIDGID SeeSnake series camera reel and monitor',
    caption: 'Cleaning equipment is connected at an accessible cleanout.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Sewer-cleaning equipment beside an accessible cleanout, with the camera equipment nearby as a separate tool.',
    requiresRelease: false,
  },
  'cleaning-monitor': {
    preferred: `${DIR}the-sewer-pros-ridgid-seesnake-sewer-camera-monitor-review-4x3.webp`,
    alt: 'RIDGID SeeSnake series monitor showing sewer camera footage of a pipe interior, beside a camera reel and camera head',
    caption: 'A monitor showing camera footage, with property details removed.',
    width: 1448,
    height: 1086,
    kind: 'footage-still',
    subject: 'Monitor showing non-dramatic footage with the camera equipment nearby. No customer data, address, GPS or readable text.',
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
