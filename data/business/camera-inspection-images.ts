import { existsSync } from 'node:fs'
import { join } from 'node:path'

/**
 * Sewer camera inspection hub (`/services/sewer-camera-inspection/`)
 * image slots.
 *
 * ⚠ SLOTS, NOT ASSETS. Nothing here points at a stand-in image. Save the
 * real file at `preferred` (see
 * `public/images/services/sewer-camera-inspection/README.md`) and it is
 * used at the next build; until then the slot resolves to a labelled
 * placeholder frame in development and to NOTHING in a production build.
 * Sections that depend on a slot omit themselves rather than ship an
 * empty frame (docs/18 §120).
 *
 * ⚠ EVERY SLOT MUST BE A REAL SEWER PROS PHOTO OR FOOTAGE STILL. No AI
 * pipe interiors, no staged stock, no crossed-arms plumber (docs/18 §34).
 * Footage stills and reports must be anonymized: no address, name, GPS
 * data or plate number (`requiresRelease`). No slot may imply a repair
 * or replacement service, a storefront, or a single market as the
 * business's place (CLAUDE.md §9, §24).
 */

export type CameraImageKind = 'photo' | 'footage-still' | 'report'

export interface CameraImageSlotSpec {
  /** Where the real image should be saved, under `public/`. */
  preferred: string
  /** Alt text for the REAL image. */
  alt: string
  /** Visible caption for the real image. */
  caption: string
  width: number
  height: number
  kind: CameraImageKind
  /** What the real image should show, for whoever captures it. */
  subject: string
  /** Needs customer or property permission and anonymizing. */
  requiresRelease: boolean
}

const DIR = '/images/services/sewer-camera-inspection/'

export const cameraImageSlots = {
  monitor: {
    preferred: `${DIR}sewer-camera-monitor-pipe-footage.webp`,
    alt: 'Inspection monitor displaying live footage from inside a sewer line',
    caption: 'The live feed is reviewed while the camera moves through the line.',
    width: 1200,
    height: 800,
    kind: 'photo',
    subject: 'Monitor showing real pipe footage, screen legible, nothing identifying the property.',
    requiresRelease: true,
  },
  equipment: {
    preferred: `${DIR}sewer-camera-reel-equipment.webp`,
    alt: 'Sewer inspection camera reel and camera head set up at a cleanout',
    caption: 'Camera equipment is fed through an accessible access point.',
    width: 1200,
    height: 800,
    kind: 'photo',
    subject: 'Reel, cable and camera head at a cleanout.',
    requiresRelease: false,
  },
  consult: {
    preferred: `${DIR}home-buyer-sewer-inspection-consultation.webp`,
    alt: 'Technician explaining sewer camera findings to a property owner',
    caption: 'Findings are explained in plain language after the inspection.',
    width: 1200,
    height: 800,
    kind: 'photo',
    subject: 'Technician and customer reviewing footage together. Face release required.',
    requiresRelease: true,
  },
  'root-intrusion': {
    preferred: `${DIR}sewer-line-root-intrusion-example.webp`,
    alt: 'Camera footage still showing roots entering a sewer line at a joint',
    caption: 'Example: visible root intrusion near a pipe joint. Findings differ by property.',
    width: 1200,
    height: 800,
    kind: 'footage-still',
    subject: 'Real footage still, anonymized, no on-screen address or timestamp overlay naming a property.',
    requiresRelease: true,
  },
  offset: {
    preferred: `${DIR}sewer-line-offset-example.webp`,
    alt: 'Camera footage still showing an offset between two sections of sewer pipe',
    caption: 'Example: a visible pipe offset. Findings differ by property.',
    width: 1200,
    height: 800,
    kind: 'footage-still',
    subject: 'Real footage still, anonymized.',
    requiresRelease: true,
  },
  'standing-water': {
    preferred: `${DIR}sewer-line-standing-water-example.webp`,
    alt: 'Camera footage still showing standing water inside a sewer line',
    caption: 'Example: standing water where the line may not be draining freely. Findings differ by property.',
    width: 1200,
    height: 800,
    kind: 'footage-still',
    subject: 'Real footage still, anonymized.',
    requiresRelease: true,
  },
  report: {
    preferred: `${DIR}sewer-camera-inspection-report-example.webp`,
    alt: 'Redacted example of documentation from a sewer camera inspection',
    caption: 'Example documentation with customer details removed. Contents vary by appointment.',
    width: 1200,
    height: 800,
    kind: 'report',
    subject: 'A real report or findings summary with name, address and phone redacted.',
    requiresRelease: true,
  },
} as const satisfies Record<string, CameraImageSlotSpec>

export type CameraImageKey = keyof typeof cameraImageSlots

export interface ResolvedCameraImage extends CameraImageSlotSpec {
  key: CameraImageKey
  /** True when no real file exists yet. Only ever returned outside production. */
  placeholder: boolean
}

/**
 * The real image when present at build time; a placeholder outside
 * production; otherwise `null`.
 */
export function resolveCameraImage(
  key: CameraImageKey,
): ResolvedCameraImage | null {
  const spec: CameraImageSlotSpec = cameraImageSlots[key]
  if (existsSync(join(process.cwd(), 'public', spec.preferred))) {
    return { ...spec, key, placeholder: false }
  }
  if (process.env.NODE_ENV !== 'production') {
    return { ...spec, key, placeholder: true }
  }
  return null
}

/** Whether any of the slots would render. */
export function anyCameraImage(keys: readonly CameraImageKey[]): boolean {
  return keys.some((key) => resolveCameraImage(key) !== null)
}
