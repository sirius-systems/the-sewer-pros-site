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

export type CameraImageKind = 'photo' | 'illustration' | 'footage-still' | 'report'

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
  process: {
    preferred: `${DIR}the-sewer-pros-ridgid-seesnake-sewer-camera-inspection-process-illustration-4x3.webp`,
    alt: 'Cutaway view of a camera reel beside a house, with the cable running through an open cleanout and down into an underground sewer pipe',
    caption: 'Illustration of the process, not inspection footage.',
    width: 1448,
    height: 1086,
    kind: 'illustration',
    subject: 'Process illustration: camera entering through an access point and moving through the accessible line.',
    requiresRelease: false,
  },
  monitor: {
    preferred: `${DIR}the-sewer-pros-ridgid-seesnake-sewer-camera-monitor-pipe-footage-4x3.webp`,
    alt: 'RIDGID SeeSnake-series monitor showing the inside of a sewer pipe, beside a cable reel and an open access cover',
    caption: 'The live feed is reviewed while the camera moves through the line.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Monitor showing pipe footage, nothing identifying the property.',
    requiresRelease: false,
  },
  equipment: {
    preferred: `${DIR}the-sewer-pros-ridgid-seesnake-camera-reel-cable-equipment-4x3.webp`,
    alt: 'RIDGID SeeSnake-series camera reel with push cable and camera head, next to a monitor on a concrete surface',
    caption: 'Camera equipment is fed through an accessible access point.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Reel, push cable and camera head.',
    requiresRelease: false,
  },
  'findings-review': {
    preferred: `${DIR}the-sewer-pros-ridgid-seesnake-inspection-footage-report-review-4x3.webp`,
    alt: 'RIDGID SeeSnake-series monitor showing sewer pipe footage beside a tablet displaying an inspection report with pipe images, in front of a camera reel and equipment case',
    caption: 'Monitor footage and a findings document, side by side.',
    width: 1448,
    height: 1086,
    kind: 'photo',
    subject: 'Monitor with pipe footage beside a tablet showing an inspection document.',
    requiresRelease: false,
  },
  'root-intrusion': {
    preferred: `${DIR}the-sewer-pros-sewer-camera-root-intrusion-pipe-joint-4x3.webp`,
    alt: 'Sewer camera view down a pipe with tree roots hanging into the pipe near a joint at the upper right',
    caption: 'Example: visible root intrusion near a pipe joint.',
    width: 1448,
    height: 1086,
    kind: 'footage-still',
    subject: 'Camera footage still showing roots entering at a joint. Anonymized.',
    requiresRelease: true,
  },
  offset: {
    preferred: `${DIR}the-sewer-pros-sewer-camera-footage-visible-pipe-offset-example-4x3.webp`,
    alt: 'Sewer camera view along a pipe showing a seam where two sections meet, with the pipe edges not lining up',
    caption: 'Example: a visible pipe offset.',
    width: 1448,
    height: 1086,
    kind: 'footage-still',
    subject: 'Camera footage still showing an offset at a joint. Anonymized.',
    requiresRelease: true,
  },
  'standing-water': {
    preferred: `${DIR}the-sewer-pros-sewer-camera-footage-standing-water-in-pipe-example-4x3.webp`,
    alt: 'Sewer camera view down a pipe with water pooled along the bottom of the pipe',
    caption: 'Example: standing water in a pipe.',
    width: 1448,
    height: 1086,
    kind: 'footage-still',
    subject: 'Camera footage still showing standing water. Anonymized.',
    requiresRelease: true,
  },
  report: {
    preferred: `${DIR}the-sewer-pros-sewer-camera-inspection-monitor-findings-summary-review-4x3.webp`,
    alt: 'Rugged inspection monitor showing pipe footage beside a tablet displaying an inspection summary with pipe images, in front of a camera reel',
    caption: 'Example: footage and a findings summary.',
    width: 1448,
    height: 1086,
    kind: 'report',
    subject: 'Monitor with pipe footage beside a tablet findings summary.',
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
