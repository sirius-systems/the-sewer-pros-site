import type { CardImage, PageId } from '@/types'

/**
 * Per-card artwork for sections that resolve their own links.
 *
 * `MarketCoverage` builds its cards from `pagesOfType('market')` rather
 * than from a content prop, so there is no per-item slot in
 * `homeContent` to hang an image on. This map is that slot, keyed the
 * same way the cards are.
 *
 * A market card with an entry here renders that frame as the card's
 * BACKGROUND, with the heading, the location links and the closing
 * link in white over a scrim. A market with no entry keeps the compact
 * light card. See `MarketCoverage` for the scrim measurement.
 *
 * ===========================================================================
 * ⚠ WHY A MAP IS ALLOWED HERE WHEN A PIN IS NOT
 * ===========================================================================
 * 18 §50 permits maps that represent "Areas We Serve" and forbids fake
 * office pins; 18 §70 lists "office map pins" among the visuals that
 * imply unverified business facts. These three frames are metro-scale
 * street maps with NO marker, NO address and NO business name on them,
 * so they show reach rather than a place the business occupies —
 * which is the distinction CLAUDE.md §11 turns on.
 *
 * ⚠ DO NOT REPLACE ONE WITH A MAP THAT CARRIES A PIN, a highlighted
 * "our location" dot, or a storefront photograph. San Diego and Las
 * Vegas are service markets with no public location (CLAUDE.md §10),
 * so any of those would assert something untrue no matter how good the
 * image is. Equipment, a service vehicle, work in progress, or an
 * unmarked area map are the safe subjects.
 *
 * ⚠ THESE ARE GOOGLE MAPS FRAMES AND CARRY GOOGLE'S ATTRIBUTION BAKED
 * INTO THE BOTTOM-RIGHT CORNER. The card crops to roughly a square, so
 * that corner is cropped away and what survives sits under the scrim.
 * Google's terms require the attribution stay legible. Flagged to the
 * owner on 2026-09-04; if it needs resolving, the options are a
 * visible credit line in the card, a re-export with the credit moved
 * inboard, or non-Google artwork.
 */
export const marketImages: Partial<Record<PageId, CardImage>> = {
  ['market-st-louis-mo' as PageId]: {
    src: '/images/markets/st-louis-mo/locations/the-sewer-pros-st-louis-service-area-map.webp',
    alt: 'Map of the St. Louis metropolitan area',
    source:
      'Supplied by the business owner, 2026-09-04. Google Maps frame, dark style, no marker.',
  },
  ['market-san-diego-ca' as PageId]: {
    src: '/images/markets/san-diego-ca/locations/the-sewer-pros-san-diego-service-area-map.webp',
    alt: 'Map of San Diego County and the surrounding coast',
    source:
      'Supplied by the business owner, 2026-09-04. Google Maps frame, dark style, no marker.',
  },
  ['market-las-vegas-nv' as PageId]: {
    src: '/images/markets/las-vegas-nv/locations/the-sewer-pros-las-vegas-service-area-map.webp',
    alt: 'Map of the Las Vegas valley',
    source:
      'Supplied by the business owner, 2026-09-04. Google Maps frame, dark style, no marker.',
  },
}
