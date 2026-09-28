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
    preferred: `${DIR}the-sewer-pros-drain-cleaning-common-drain-problems-ridgid-k7500-4x3.webp`,
    alt: 'A RIDGID K-7500 drain-cleaning machine feeding a cable into an open floor drain in a residential garage',
    caption: 'A drain-cleaning machine staged at an accessible floor drain.',
    width: 2400,
    height: 1792,
    kind: 'photo',
    subject: 'Cable-drum machine feeding into a floor drain. No address visible.',
    requiresRelease: false,
  },
  'drain-process': {
    preferred: `${DIR}the-sewer-pros-drain-cleaning-residential-fixture-ridgid-seesnake-4x3.webp`,
    alt: 'A drain-cleaning cable machine feeding a cable into a bathroom floor drain',
    caption: 'The method depends on the fixture, access, and the suspected restriction.',
    width: 2400,
    height: 1792,
    kind: 'photo',
    subject: 'Cable-drum machine feeding into a bathroom floor drain, near a tub, toilet, and sink.',
    requiresRelease: false,
  },
  'drain-equipment': {
    preferred: `${DIR}the-sewer-pros-drain-cleaning-equipment-field-ridgid-k7500-4x3.webp`,
    alt: 'A RIDGID K-7500 drain-cleaning machine staged at a residential exterior cleanout',
    caption: 'Equipment is chosen for the fixture and the suspected restriction.',
    width: 2400,
    height: 1792,
    kind: 'photo',
    subject: 'Cable-drum machine staged beside an open exterior cleanout. No address visible.',
    requiresRelease: false,
  },
  'drain-monitor': {
    preferred: `${DIR}the-sewer-pros-recurring-drain-issue-ridgid-seesnake-cs12x-monitor-4x3.webp`,
    alt: 'A RIDGID SeeSnake camera monitor and reel staged beside an indoor cleanout',
    caption: 'When a camera is used, the technician reviews visible conditions on the monitor.',
    width: 2400,
    height: 1792,
    kind: 'photo',
    subject: 'Camera monitor and reel staged near an indoor cleanout. No address or customer data visible.',
    requiresRelease: false,
  },
  'drain-camera-explainer': {
    preferred: `${DIR}the-sewer-pros-slow-drain-sewer-line-camera-inspection-ridgid-seesnake-4x3.webp`,
    alt: 'A RIDGID SeeSnake camera monitor and reel staged beside an exterior cleanout',
    caption: 'A technician can explain what the visible conditions may indicate.',
    width: 2400,
    height: 1792,
    kind: 'photo',
    subject: 'Camera monitor and reel staged near an exterior cleanout. No address visible.',
    requiresRelease: false,
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
