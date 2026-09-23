import { existsSync } from 'node:fs'
import { join } from 'node:path'
import type { CameraImageSlotSpec } from './camera-inspection-images'

/**
 * Drain cleaning hub (`/services/drain-cleaning/`) image slots.
 *
 * ⚠ SLOTS, NOT ASSETS. Same contract as the cleaning hub
 * (`cleaning-images.ts`): nothing here points at a stand-in image. Save the
 * real file at `preferred` (shot list in
 * `public/images/services/drain-cleaning/README.md`) and it is used at the
 * next build. Until then the slot resolves to a labelled placeholder in
 * development and to NOTHING in a production build.
 *
 * ⚠ EVERY SLOT MUST BE A REAL SEWER PROS PHOTO. No stock plumbers, no
 * cartoon drains, no AI-generated flooding or pipe imagery, no active
 * overflow or household damage. Monitor stills are anonymized
 * (`requiresRelease`). No slot may imply repair, replacement, a storefront,
 * or a local office (CLAUDE.md §9, §11, §24).
 *
 * Keys are prefixed `drain-` so they can never collide with another hub's
 * key in the shared `HubImageKey` union.
 */
const DIR = '/images/services/drain-cleaning/'

export const drainImageSlots = {
  'drain-definition': {
    preferred: `${DIR}drain-cleaning-fixture-access-4x3.webp`,
    alt: 'Technician preparing drain-cleaning equipment at a sink or cleanout',
    caption: 'Equipment is chosen for the fixture and the suspected restriction.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Technician at a sink, cleanout, or floor drain with cable equipment. No address visible.',
    requiresRelease: false,
  },
  'drain-process': {
    preferred: `${DIR}drain-cleaning-process-4x3.webp`,
    alt: 'Drain-cleaning cable machine staged in a residential setting',
    caption: 'The method depends on the fixture, access, and the suspected restriction.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Cable machine detail with technician, in a clean residential or managed-property setting.',
    requiresRelease: false,
  },
  'drain-equipment': {
    preferred: `${DIR}drain-cleaning-equipment-4x3.webp`,
    alt: 'Drain-cleaning equipment staged at a job site',
    caption: 'Field equipment staged for a drain-cleaning visit.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Actual equipment; branded vehicle only if current. Plates and addresses blurred.',
    requiresRelease: false,
  },
  'drain-monitor': {
    preferred: `${DIR}drain-cleaning-camera-monitor-still-4x3.webp`,
    alt: 'Inspection monitor showing the interior of a drain line after a recurring clog',
    caption: 'A monitor still, with property details removed.',
    width: 1448,
    height: 1086,
    kind: 'footage-still',
    subject: 'Real monitor still from a recurring-clog visit. Customer data, address and GPS overlay removed.',
    requiresRelease: true,
  },
  'drain-explainer-video-poster': {
    preferred: `${DIR}drain-cleaning-explainer-video-poster-4x3.webp`,
    alt: 'Technician explaining when a slow drain may be a main sewer-line problem',
    caption: 'When is a slow drain a main sewer-line problem?',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject:
      'Poster frame for the technician explainer. The player is added only when the video is public; no VideoObject markup until then.',
    requiresRelease: true,
  },
} as const satisfies Record<string, CameraImageSlotSpec>

export type DrainImageKey = keyof typeof drainImageSlots

export interface ResolvedDrainImage extends CameraImageSlotSpec {
  key: DrainImageKey
  /** True when no real file exists yet. Only ever returned outside production. */
  placeholder: boolean
}

/** The real image when present at build time; a placeholder outside production; otherwise `null`. */
export function resolveDrainImage(key: DrainImageKey): ResolvedDrainImage | null {
  const spec: CameraImageSlotSpec = drainImageSlots[key]
  if (existsSync(join(process.cwd(), 'public', spec.preferred))) {
    return { ...spec, key, placeholder: false }
  }
  if (process.env.NODE_ENV !== 'production') {
    return { ...spec, key, placeholder: true }
  }
  return null
}
