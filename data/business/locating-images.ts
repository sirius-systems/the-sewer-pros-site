import { existsSync } from 'node:fs'
import { join } from 'node:path'
import type { CameraImageSlotSpec } from './camera-inspection-images'

/**
 * Sewer line locating hub (`/services/sewer-line-locating/`) image slots.
 *
 * ⚠ SLOTS, NOT ASSETS. Same contract as the cleaning hub
 * (`cleaning-images.ts`): nothing here points at a stand-in image. Save
 * the real file at `preferred` (shot list in
 * `public/images/services/sewer-line-locating/README.md`) and it is used
 * at the next build. Until then the slot resolves to a labelled
 * placeholder in development and to NOTHING in a production build.
 *
 * ⚠ EVERY SLOT MUST BE A REAL SEWER PROS PHOTO. No stock workers holding
 * a utility locator, no AI imagery presented as company work. Route
 * markings appear only if marking is an actual method. Monitor stills are
 * anonymized (`requiresRelease`). No slot may imply repair, excavation,
 * utility clearance, a storefront, or a local office (CLAUDE.md §9, §11,
 * §24).
 *
 * Keys are prefixed `locating-` so they can never collide with another
 * hub's key in the shared `HubImageKey` union.
 */
const DIR = '/images/services/sewer-line-locating/'

export const locatingImageSlots = {
  'locating-definition': {
    preferred: `${DIR}sewer-line-locating-definition-4x3.webp`,
    alt: 'Locating receiver and monitor set up at a sewer access point',
    caption: 'Equipment is set up at an accessible point on the line.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Receiver and monitor at a cleanout or access point. No address or house number visible.',
    requiresRelease: false,
  },
  'locating-process': {
    preferred: `${DIR}sewer-line-locating-process-4x3.webp`,
    alt: 'Technician working at an exterior sewer cleanout',
    caption: 'The approach depends on access and the purpose of the project.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Technician at an exterior cleanout with locating equipment. Faces, plates and addresses removed or blurred.',
    requiresRelease: false,
  },
  'locating-equipment': {
    preferred: `${DIR}sewer-line-locating-evidence-equipment-4x3.webp`,
    alt: 'Camera monitor and locating equipment staged at a job site',
    caption: 'Field equipment used for a locating visit.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Actual camera monitor, locator and branded vehicle. Plates and addresses blurred.',
    requiresRelease: false,
  },
  'locating-field': {
    preferred: `${DIR}sewer-line-locating-evidence-field-4x3.webp`,
    alt: 'Approximate route of a sewer line shown on a property surface',
    caption: 'An example from one property, with identifying details removed.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject:
      'Real, anonymized field workflow photo. Use only if surface marking is an actual method. No address, plate or customer data.',
    requiresRelease: true,
  },
} as const satisfies Record<string, CameraImageSlotSpec>

export type LocatingImageKey = keyof typeof locatingImageSlots

export interface ResolvedLocatingImage extends CameraImageSlotSpec {
  key: LocatingImageKey
  /** True when no real file exists yet. Only ever returned outside production. */
  placeholder: boolean
}

/** The real image when present at build time; a placeholder outside production; otherwise `null`. */
export function resolveLocatingImage(key: LocatingImageKey): ResolvedLocatingImage | null {
  const spec: CameraImageSlotSpec = locatingImageSlots[key]
  if (existsSync(join(process.cwd(), 'public', spec.preferred))) {
    return { ...spec, key, placeholder: false }
  }
  if (process.env.NODE_ENV !== 'production') {
    return { ...spec, key, placeholder: true }
  }
  return null
}
