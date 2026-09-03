/* ==========================================================================
   Media — shared image shape for card sections
   ========================================================================== */

/**
 * An approved image attached to a single card.
 *
 * Mirrors `ProofImage` in data/business/proof.ts: a path under
 * `public/`, meaningful alt text, and REQUIRED provenance. `source` is
 * not optional for the same reason it is not optional there. An image
 * whose origin nobody recorded is exactly the one that later turns out
 * to be stock, generated, or someone else's work, and 18 §40-42 allows
 * none of those without a decision behind them.
 *
 * ⚠ THIS TYPE IS A SLOT, NOT A LICENCE TO FILL IT.
 *
 * A card section that reads this must render NO image area at all when
 * a card has none. An empty crop, a grey box, or a gradient standing in
 * for a missing photograph is a placeholder in effect, which is the
 * thing the imagery rule exists to prevent. Enlarging a card to hold a
 * photograph that does not exist produces a bigger empty box, not a
 * better card, so size follows the image rather than the other way
 * round.
 *
 * No images are wired up anywhere yet. `public/images/` holds the
 * production folder structure and every leaf of it is empty.
 */
export interface CardImage {
  /** Path under `public/`. Pre-optimized: `output: 'export'` disables the optimizer (02 §7, §8). */
  src: string
  /** Meaningful alt text (CLAUDE.md §55, §57). */
  alt: string
  /** Provenance of the asset. Required — see above. */
  source: string
}
