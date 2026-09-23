import { existsSync } from 'node:fs'
import { join } from 'node:path'
import type { CameraImageSlotSpec } from './camera-inspection-images'

/**
 * Hydro jetting hub (`/services/hydro-jetting/`) image slots.
 *
 * ⚠ SLOTS, NOT ASSETS. Same contract as the cleaning hub
 * (`cleaning-images.ts`): nothing here points at a stand-in image. Save
 * the real file at `preferred` (shot list in
 * `public/images/services/hydro-jetting/README.md`) and it is used at the
 * next build. Until then the slot resolves to a labelled placeholder in
 * development and to NOTHING in a production build.
 *
 * ⚠ EVERY SLOT MUST BE A REAL SEWER PROS PHOTO. No stock plumbers, no
 * dramatic or AI pipe imagery presented as company work. A nozzle inside a
 * pipe is allowed only from the business's own footage. Monitor stills are
 * anonymized (`requiresRelease`). No slot may imply repair, replacement, a
 * storefront, or a local office (CLAUDE.md §9, §11, §24).
 *
 * Keys are prefixed `hydro-` so they can never collide with another hub's
 * key in the shared `HubImageKey` union.
 */
const DIR = '/images/services/hydro-jetting/'

export const hydroImageSlots = {
  'hydro-definition': {
    preferred: `${DIR}hydro-jetting-equipment-setup-4x3.webp`,
    alt: 'Hydro jetting hose staged at an exterior sewer cleanout',
    caption: 'Jetting equipment is set up at an accessible exterior cleanout.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Jetter hose or equipment at an exterior cleanout. No address or house number visible.',
    requiresRelease: false,
  },
  'hydro-process': {
    preferred: `${DIR}hydro-jetting-process-4x3.webp`,
    alt: 'Technician operating hydro jetting equipment at a job site',
    caption: 'The method depends on access, the suspected restriction, and line condition.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Technician operating the jetting unit. Faces, plates and addresses removed or blurred.',
    requiresRelease: false,
  },
  'hydro-equipment': {
    preferred: `${DIR}hydro-jetting-equipment-4x3.webp`,
    alt: 'Hydro jetting unit and hoses staged beside a service vehicle',
    caption: 'Field equipment staged for a cleaning visit.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Actual jetter unit, hoses and branded vehicle. Plates and addresses blurred.',
    requiresRelease: false,
  },
  'hydro-monitor': {
    preferred: `${DIR}hydro-jetting-monitor-still-4x3.webp`,
    alt: 'Inspection monitor showing the interior of a sewer pipe',
    caption: 'A monitor still, with property details removed.',
    width: 1448,
    height: 1086,
    kind: 'footage-still',
    subject: 'Real monitor still before or after cleaning. Customer data, address, timestamp and GPS overlay removed.',
    requiresRelease: true,
  },
} as const satisfies Record<string, CameraImageSlotSpec>

export type HydroImageKey = keyof typeof hydroImageSlots

export interface ResolvedHydroImage extends CameraImageSlotSpec {
  key: HydroImageKey
  /** True when no real file exists yet. Only ever returned outside production. */
  placeholder: boolean
}

/** The real image when present at build time; a placeholder outside production; otherwise `null`. */
export function resolveHydroImage(key: HydroImageKey): ResolvedHydroImage | null {
  const spec: CameraImageSlotSpec = hydroImageSlots[key]
  if (existsSync(join(process.cwd(), 'public', spec.preferred))) {
    return { ...spec, key, placeholder: false }
  }
  if (process.env.NODE_ENV !== 'production') {
    return { ...spec, key, placeholder: true }
  }
  return null
}
