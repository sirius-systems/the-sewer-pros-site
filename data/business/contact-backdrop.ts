import { existsSync } from 'node:fs'
import { join } from 'node:path'
import type { CardImage } from '@/types'
import type { MarketId } from '@/types'

/**
 * Contact page image slots.
 *
 * ===========================================================================
 * ⚠ PLACEHOLDER SLOTS: DROP THE REAL FILE AT `preferred` AND IT IS USED
 * ===========================================================================
 * Each slot names the path the real photograph should be saved to
 * (see `public/images/contact/README.md`) and an interim image that
 * already exists in the repository. `resolve()` checks the filesystem at
 * build time and uses `preferred` when the file is there, otherwise the
 * interim, so the page always renders and a swap needs no code change.
 *
 * Interim images are rendered scenes supplied by the owner, not
 * photographs of a Sewer Pros job (see `locations-hub-backdrop.ts`), so
 * every slot is decorative (`alt` text is written for the real file and
 * used only when the preferred file is the one rendering).
 *
 * ⚠ A sitewide page's image must not name or depict one market as the
 * business's place (01 §20-21, CLAUDE.md §24). The per-market slots
 * therefore carry equipment or service scenes, never signage, an address,
 * or a branch.
 */

export interface ContactImageSlot {
  /** Where the real image should be saved, under `public/`. */
  preferred: string
  /** Existing image used until `preferred` exists. */
  interim: string
  /** Alt text for the REAL image. Interim renders are decorative. */
  alt: string
  source: string
}

const OWNER_SCENE =
  'Supplied by the business owner. Rendered scene, not a photograph of a Sewer Pros job.'
const PENDING_REAL = 'Pending: real Sewer Pros photography supplied for the contact page.'

export const contactImageSlots = {
  hero: {
    preferred:
      '/images/contact/hero/the-sewer-pros-contact-technician-camera-monitor.webp',
    interim:
      '/images/markets/services-hub/the-sewer-pros-sewer-service-request-cta-background.webp',
    alt: 'Sewer Pros technician reviewing a sewer camera inspection on a monitor',
    source: PENDING_REAL,
  },
  'st-louis-mo': {
    preferred: '/images/contact/markets/the-sewer-pros-contact-st-louis.webp',
    interim:
      '/images/markets/locations-hub/the-sewer-pros-st-louis-sewer-service-area-hero.webp',
    alt: 'Sewer inspection equipment in use for a St. Louis area property',
    source: PENDING_REAL,
  },
  'san-diego-ca': {
    preferred: '/images/contact/markets/the-sewer-pros-contact-san-diego.webp',
    interim:
      '/images/markets/locations-hub/the-sewer-pros-san-diego-sewer-service-area-hero.webp',
    alt: 'Sewer inspection equipment in use for a San Diego area property',
    source: PENDING_REAL,
  },
  'las-vegas-nv': {
    preferred: '/images/contact/markets/the-sewer-pros-contact-las-vegas.webp',
    interim:
      '/images/markets/locations-hub/the-sewer-pros-las-vegas-sewer-service-area-hero.webp',
    alt: 'Sewer inspection equipment in use for a Las Vegas area property',
    source: PENDING_REAL,
  },
  cta: {
    preferred: '/images/contact/cta/the-sewer-pros-contact-cta.webp',
    interim:
      '/images/markets/locations-hub/the-sewer-pros-three-market-service-areas-cta.webp',
    alt: 'The Sewer Pros three service markets',
    source: PENDING_REAL,
  },
} as const satisfies Record<string, ContactImageSlot>

export type ContactImageSlotKey = keyof typeof contactImageSlots

/**
 * The image to render for a slot: the real file if present at build
 * time, otherwise the interim. `usingInterim` lets a caller mark the
 * result decorative.
 */
export function resolveContactImage(key: ContactImageSlotKey): CardImage & {
  usingInterim: boolean
} {
  const slot: ContactImageSlot = contactImageSlots[key]
  const hasReal = existsSync(join(process.cwd(), 'public', slot.preferred))
  return hasReal
    ? { src: slot.preferred, alt: slot.alt, source: slot.source, usingInterim: false }
    : { src: slot.interim, alt: slot.alt, source: OWNER_SCENE, usingInterim: true }
}

export function resolveMarketContactImage(marketId: MarketId) {
  return resolveContactImage(marketId)
}
