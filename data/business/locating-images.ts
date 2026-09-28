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
    preferred: `${DIR}the-sewer-pros-sewer-line-locating-definition-seektech-sr20-4x3.webp`,
    alt: 'RIDGID SeekTech SR-20 locator used to estimate a sewer line route at a residential property',
    caption: 'A locator in use at a residential property. Setup varies by property and access.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'RIDGID SeekTech SR-20 locator in use at a residential property. No address or house number visible.',
    requiresRelease: false,
  },
  'locating-process': {
    preferred: `${DIR}the-sewer-pros-sewer-line-locating-visit-seektech-sr20-residential-4x3.webp`,
    alt: 'RIDGID SeekTech SR-20 locator in use during a sewer line locating visit at a residential property',
    caption: 'The approach depends on access and the purpose of the project.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Locating visit at a residential property. Faces, plates and addresses removed or blurred.',
    requiresRelease: false,
  },
  'locating-equipment': {
    preferred: `${DIR}the-sewer-pros-sewer-line-locating-equipment-field-seektech-sr20-4x3.webp`,
    alt: 'RIDGID SeekTech SR-20 locating equipment staged in the field',
    caption: 'The locating approach depends on the access available and what the project needs to learn about the line.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'RIDGID SeekTech SR-20 locating equipment staged in the field. Plates and addresses blurred.',
    requiresRelease: false,
  },
  'locating-field': {
    preferred: `${DIR}the-sewer-pros-sewer-line-locating-property-example-seektech-sr20-4x3.webp`,
    alt: 'Illustrative example of a sewer line locating setup at a residential property',
    caption: 'Route information is approximate and can vary with access, equipment signals, and site conditions.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject:
      'Illustrative property example using approved project equipment. Not presented as a verified customer property or actual field result. No address, plate or customer data.',
    requiresRelease: false,
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
