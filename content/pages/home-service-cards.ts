/**
 * The "Sewer Inspection, Diagnostics & Cleaning Services" grid.
 *
 * Authority: docs/06-master-service-registry.md;
 *            docs/18-design-system.md §5.6, §50-51;
 *            CLAUDE.md §18, §40, §53.
 *
 * ⚠ SEPARATE FROM `coreServiceCards`, WHICH IS NOW UNUSED. This file
 * once existed to keep the home page's presentation of nine services
 * distinct from every other page's (each of which composed or ordered
 * `service-cards.ts`'s `coreServiceCards` differently). As of
 * 2026-09-23 every one of those pages — `/services/`, all three market
 * hubs, `/locations/` — was moved onto this exact data and layout
 * instead, so the distinction that named this file is gone; it kept
 * its name to avoid a mechanical rename across six call sites.
 *
 * This file is now the SOLE canonical source for the approved section:
 * the home page, `/services/`, San Diego, Las Vegas, and `/locations/`
 * all render it completely unmodified — same heading, same intro
 * paragraph, same nine cards, same `ServiceIndex` `cards` layout (image
 * on top, plain-contrast text below it, a visible "Learn more" link
 * per card). St. Louis also renders it unmodified in this band; it
 * differs only in still linking its own market-specific
 * lateral-inspection service from OTHER sections of that page (hero,
 * FAQ, community cards), never inside this nine-card list.
 *
 * Editing a card's copy or image here, or `approvedServicesTitle` /
 * `approvedServicesIntro` below, reaches every render call listed
 * above.
 *
 * Card artwork lives in `public/images/services/service-cards/`, the
 * 2026-09-22 owner-supplied frame delivery (4:3, 1448x1086). All nine
 * frames match a service by filename.
 */

import type { CardImage, PageId } from '@/types'
import type { ServiceCard } from './service-cards'

const id = (value: string): PageId => value as PageId

/**
 * The approved section's heading and intro paragraph.
 *
 * Plain strings, not JSX — this module stays a `.ts` data file, and
 * `intro` needs wrapping in a `<p>` at each call site instead
 * (`HomePageTemplate`; `MarketPageTemplate` for San Diego, Las Vegas,
 * and St. Louis; `HubPageTemplate` for `/locations/`; `core.tsx`'s
 * `itemsIntro` for `/services/`). Exported so the copy has one source
 * rather than six transcriptions.
 */
export const approvedServicesTitle =
  'Sewer Inspection, Diagnostics & Cleaning Services'
export const approvedServicesIntro =
  'The Sewer Pros provides sewer camera inspections, sewer diagnostics, sewer cleaning, hydro jetting, sewer line locating, and drain cleaning for residential and commercial properties. We document the conditions we observe so property owners, homebuyers, and property managers can understand the issue and consider appropriate next steps.'

const OWNER_RENDER =
  'Supplied by the business owner, 2026-09-22. Rendered scene, not a photograph of a Sewer Pros job.'

const image = (src: string, alt: string): CardImage => ({
  src: `/images/services/service-cards/${src}`,
  alt,
  source: OWNER_RENDER,
})

/**
 * Nine cards, home page order. No entry is a flagship — every renderer
 * of this array (the home page, `/services/`, all three market hubs,
 * and `/locations/`, all on `ServiceIndex`'s `cards` variant) gives
 * each card the same size, so the count only has to fill a plain 3x3
 * grid rather than clear a 2x2 flagship tile first.
 */
export const homeServiceCards: readonly ServiceCard[] = [
  {
    pageId: id('svc-sewer-camera-inspection'),
    description:
      'See documented video of the accessible sewer line. An inspection can help identify observed conditions and support an informed next-step decision.',
    image: image(
      'the-sewer-pros-sewer-camera-inspection-ridgid-monitor.webp',
      'Camera monitor showing the inside of a line, beside an open cleanout',
    ),
  },
  {
    pageId: id('svc-sewer-cleaning'),
    description:
      'Remove buildup and obstructions from sewer lines when cleaning is appropriate. A camera inspection can help document line conditions before or after cleaning.',
    image: image(
      'the-sewer-pros-sewer-cleaning-ridgid-equipment.webp',
      'Sewer cleaning equipment connected to an open cleanout at a driveway',
    ),
  },
  {
    pageId: id('svc-hydro-jetting'),
    description:
      'Use high-pressure water to clean eligible sewer lines. Whether jetting is appropriate depends on the line’s observed condition.',
    image: image(
      'the-sewer-pros-hydro-jetting-sewer-cleaning.webp',
      'High-pressure jetting equipment running water into a sewer cleanout',
    ),
  },
  {
    pageId: id('svc-sewer-cleaning-camera-inspection'),
    description:
      'Combine cleaning with visual documentation of the line. See what was observed and whether cleaning changed the conditions visible by camera.',
    image: image(
      'the-sewer-pros-sewer-cleaning-camera-inspection.webp',
      'Cleaning equipment and a camera monitor set up together at a cleanout',
    ),
  },
  {
    pageId: id('svc-sewer-line-locating'),
    description:
      'Help identify the route of an accessible sewer line and locate a specific area when conditions allow. Useful when planning further evaluation or work.',
    image: image(
      'the-sewer-pros-sewer-line-locating-equipment.webp',
      'Locating transmitter and receiver equipment beside an open access point',
    ),
  },
  {
    pageId: id('svc-drain-cleaning'),
    description:
      'Address buildup or blockages in drains serving sinks, tubs, and other fixtures. The service focuses on the affected drain and the reported symptoms.',
    image: image(
      'the-sewer-pros-drain-cleaning-ridgid-equipment.webp',
      'Drain cleaning machine feeding a cable into a floor drain',
    ),
  },
  {
    pageId: id('svc-pre-purchase-sewer-inspection'),
    description:
      'Get a visual assessment of accessible portions of the sewer line before buying a property. The findings can help inform your due diligence.',
    image: image(
      'the-sewer-pros-pre-purchase-sewer-inspection.webp',
      'Camera monitor and inspection equipment staged at a property driveway',
    ),
  },
  {
    pageId: id('svc-recurring-sewer-backup-diagnosis'),
    description:
      'Investigate recurring backups and document conditions observed during the inspection. Findings can help clarify what may be contributing to the problem.',
    image: image(
      'the-sewer-pros-recurring-sewer-backup-diagnosis.webp',
      'Camera monitor showing root intrusion inside a line, beside inspection equipment',
    ),
  },
  {
    pageId: id('svc-preventative-sewer-maintenance'),
    description:
      'Arrange sewer inspection or cleaning based on the line’s condition and service needs. Recommendations should be guided by observed evidence.',
    image: image(
      'the-sewer-pros-preventative-sewer-maintenance.webp',
      'Camera, cleaning, and jetting equipment staged together at a property',
    ),
  },
]
