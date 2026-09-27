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
  /*
    Shares its file with the hero backdrop (`hub.images.hero`), which is
    the one real photo on hand today. The backdrop use is decorative
    (`alt=""`); this is the same file used as real content, so it carries
    its own alt text and caption. Real dimensions (4096x2286), not the
    4:3 figure convention, since `CameraImageSlot` sizes its frame from
    the slot's own width and height.
  */
  'hydro-definition': {
    preferred: `${DIR}hero/the-sewer-pros-hydro-jetting-sewer-cleanout-background-16x9.webp`,
    alt: 'Hydro jetting hose and equipment staged at an exterior sewer cleanout',
    caption: 'Jetting equipment is set up at an accessible exterior cleanout.',
    width: 4096,
    height: 2286,
    kind: 'photo',
    subject: 'Jetter hose or equipment at an exterior cleanout. No address or house number visible.',
    requiresRelease: false,
  },
  'hydro-process': {
    preferred: `${DIR}the-sewer-pros-hydro-jetting-visit-mongoose-184-lt-cleanout-4x3.webp`,
    alt: 'Hydro jetting equipment beside an accessible exterior cleanout',
    caption: 'The method depends on access, the suspected restriction, and line condition.',
    width: 2400,
    height: 1792,
    kind: 'photo',
    subject: 'Jetter unit staged at an exterior cleanout. Faces, plates and addresses removed or blurred.',
    requiresRelease: false,
  },
  'hydro-equipment': {
    preferred: `${DIR}the-sewer-pros-hydro-jetting-equipment-used-by-team-4x3.webp`,
    alt: 'Mongoose 184-LT hydro jetter staged beside an accessible sewer cleanout',
    caption: 'Equipment used by the team.',
    width: 2400,
    height: 1792,
    kind: 'photo',
    subject: 'Mongoose 184-LT jetter at an exterior cleanout. Plates and addresses blurred.',
    requiresRelease: false,
  },
  'hydro-monitor': {
    preferred: `${DIR}the-sewer-pros-hydro-jetting-line-review-monitor-4x3.webp`,
    alt: 'SeeSnake monitor displaying sewer-line camera footage during a review',
    caption: 'Reviewing visible line conditions.',
    width: 2400,
    height: 1792,
    kind: 'footage-still',
    subject:
      'SeeSnake monitor during a footage review. Not presented as the full line or a specific customer job; customer data, address, timestamp and GPS overlay removed.',
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
