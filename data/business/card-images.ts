import type { CardImage, PageId } from '@/types'

/**
 * Per-card artwork for sections that resolve their own links.
 *
 * `MarketCoverage` builds its cards from `pagesOfType('market')` rather
 * than from a content prop, so there is no per-item slot in
 * `homeContent` to hang an image on. This map is that slot, keyed the
 * same way the cards are.
 *
 * ===========================================================================
 * ⚠ EMPTY, AND CORRECTLY SO
 * ===========================================================================
 * No approved photography exists in this repository. `public/images/`
 * holds the production folder structure and every leaf of it is empty.
 *
 * A market card grows to hold a 7:4 crop only when this map has an
 * entry for it. With the map empty, all three market cards render at
 * their current compact size, which is the intended state rather than
 * a gap to fill. Do not add a stock photograph, a generated image, or
 * a grey box to make the cards look populated (18 §40-42).
 *
 * ⚠ A market image must not imply an office. San Diego and Las Vegas
 * are service markets with no public location (CLAUDE.md §10-11), so a
 * storefront, a building exterior, or signage would assert something
 * untrue no matter how good the photograph is. Equipment, a service
 * vehicle, or work in progress is the safe subject.
 */
export const marketImages: Partial<Record<PageId, CardImage>> = {
  // [id('market-st-louis-mo')]: { src, alt, source },
}
