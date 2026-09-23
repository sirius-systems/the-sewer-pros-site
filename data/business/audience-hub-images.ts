import { existsSync } from 'node:fs'
import { join } from 'node:path'
import type { CardImage } from '@/types'

/**
 * Who We Serve hub (`/for/`) image slots.
 *
 * ⚠ PLACEHOLDER SLOTS, THE SAME MECHANISM AS `contact-backdrop.ts`. Drop
 * the real photograph at `preferred` (see `public/images/audience-hub/README.md`)
 * and it is used at the next build; until then the `interim` image, which
 * already exists in the repository, renders. No code change is needed.
 *
 * Interim images are owner-supplied rendered scenes, not photographs of a
 * Sewer Pros job, so they render decorative (`alt=""`) until the real file
 * exists. The `alt` here is written for the real file. No slot may show a
 * storefront, an address, a branch, or a single market as the business's
 * place, and none may imply a repair or replacement service (CLAUDE.md §9,
 * §24).
 */

export interface AudienceHubImageSlot {
  /** Where the real image should be saved, under `public/`. */
  preferred: string
  /** Existing image used until `preferred` exists. */
  interim: string
  /** Alt text for the REAL image. */
  alt: string
  /** What the real photograph should show. */
  subject: string
}

const OWNER_SCENE =
  'Supplied by the business owner. Rendered scene, not a photograph of a Sewer Pros job.'
const PENDING_REAL = 'Pending: real Sewer Pros photography supplied for the Who We Serve hub.'

export const audienceHubImageSlots = {
  /* Hero collage, 2x2. */
  'hero-monitor': {
    preferred: '/images/audience-hub/hero/the-sewer-pros-hub-camera-monitor.webp',
    interim: '/images/audiences/audience-hub/the-sewer-pros-home-inspectors-specialized-sewer-inspection-equipment.webp',
    alt: 'Sewer camera reel and monitor beside an open residential sewer cleanout',
    subject: 'Sewer camera monitor showing live pipe footage',
  },
  'hero-technician': {
    preferred: '/images/audience-hub/hero/the-sewer-pros-hub-technician-review.webp',
    interim:
      '/images/audiences/audience-hub/the-sewer-pros-home-inspectors-specialized-sewer-inspection.webp',
    alt: 'Technician reviewing sewer camera footage on site',
    subject: 'Technician reviewing footage with camera equipment',
  },
  'hero-consultation': {
    preferred: '/images/audience-hub/hero/the-sewer-pros-hub-customer-consultation.webp',
    interim:
      '/images/audiences/audience-hub/the-sewer-pros-home-buyers-pre-purchase-sewer-inspection.webp',
    alt: 'Technician explaining sewer inspection findings to a property owner',
    subject: 'Technician explaining findings to a homeowner or buyer',
  },
  'hero-field': {
    preferred: '/images/audience-hub/hero/the-sewer-pros-hub-field-work.webp',
    interim:
      '/images/audiences/audience-hub/the-sewer-pros-home-inspectors-sewer-inspection-documentation.webp',
    alt: 'Sewer inspection and cleaning equipment set up at a property',
    subject: 'Service vehicle or equipment at a property, no signage naming a market',
  },
  /* Audience cards, keyed by audience id. */
  'aud-home-buyers': {
    preferred: '/images/audience-hub/cards/the-sewer-pros-home-buyers.webp',
    interim:
      '/images/audiences/audience-hub/the-sewer-pros-home-buyers-pre-purchase-sewer-inspection.webp',
    alt: 'Home buyer reviewing sewer inspection findings before closing',
    subject: 'Buyer and technician reviewing findings at a property',
  },
  'aud-home-sellers': {
    preferred: '/images/audience-hub/cards/the-sewer-pros-home-sellers.webp',
    interim:
      '/images/audiences/audience-hub/the-sewer-pros-home-sellers-pre-listing-sewer-documentation.webp',
    alt: 'Documented sewer camera findings for a home being listed',
    subject: 'Documented findings for a property being listed',
  },
  'aud-real-estate-agents': {
    preferred: '/images/audience-hub/cards/the-sewer-pros-real-estate-agents.webp',
    interim:
      '/images/audiences/audience-hub/the-sewer-pros-real-estate-agents-sewer-inspection-findings.webp',
    alt: 'Sewer inspection findings shared during a real estate transaction',
    subject: 'Findings being shared in a transaction context',
  },
  'aud-home-inspectors': {
    preferred: '/images/audience-hub/cards/the-sewer-pros-home-inspectors.webp',
    interim:
      '/images/audiences/audience-hub/the-sewer-pros-home-inspectors-specialized-sewer-inspection.webp',
    alt: 'Sewer camera inspection alongside a general home inspection',
    subject: 'Sewer camera work at a property alongside a home inspection',
  },
  'aud-property-managers': {
    preferred: '/images/audience-hub/cards/the-sewer-pros-property-managers.webp',
    interim:
      '/images/audiences/audience-hub/the-sewer-pros-property-managers-recurring-sewer-diagnosis.webp',
    alt: 'Diagnosing a recurring sewer problem at a managed property',
    subject: 'Diagnosis at a multi-unit or managed property',
  },
  'aud-hoa-communities': {
    preferred: '/images/audience-hub/cards/the-sewer-pros-hoa-communities.webp',
    interim:
      '/images/audiences/audience-hub/the-sewer-pros-hoa-community-sewer-inspection-evidence.webp',
    alt: 'Sewer inspection evidence for a homeowners association',
    subject: 'Shared sewer infrastructure at a community, evidence in hand',
  },
  /* Closing CTA background. */
  cta: {
    preferred: '/images/audience-hub/cta/the-sewer-pros-hub-cta.webp',
    interim: '/images/markets/locations-hub/the-sewer-pros-three-market-service-areas-cta.webp',
    alt: 'The Sewer Pros three service markets',
    subject: 'Service scene, no single market depicted as the business’s place',
  },
} as const satisfies Record<string, AudienceHubImageSlot>

export type AudienceHubImageKey = keyof typeof audienceHubImageSlots

/** The real file when present at build time, otherwise the interim. */
export function resolveAudienceHubImage(
  key: AudienceHubImageKey,
): CardImage & { usingInterim: boolean } {
  const slot: AudienceHubImageSlot = audienceHubImageSlots[key]
  const hasReal = existsSync(join(process.cwd(), 'public', slot.preferred))
  return hasReal
    ? { src: slot.preferred, alt: slot.alt, source: PENDING_REAL, usingInterim: false }
    : { src: slot.interim, alt: slot.alt, source: OWNER_SCENE, usingInterim: true }
}
