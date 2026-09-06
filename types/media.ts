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

/**
 * A background video layer.
 *
 * ⚠ THIS IS A BACKGROUND, NOT A PLAYER. It has no controls, no audio
 * path, and no caption track, because it carries no information. The
 * meaning of the section it sits behind is entirely in the copy on
 * top, which is the condition under which a decorative, silent,
 * looping clip is allowed at all. Giving one of these a spoken track,
 * on-screen text, or anything a visitor would need to hear or read
 * turns it into media content and pulls WCAG 1.2.x in with it.
 *
 * ⚠ A POSTER IS REQUIRED, AND IT IS NOT A LOADING STATE. It is what
 * the market actually renders for a visitor who asked for reduced
 * motion, is on a metered connection, or whose browser refused
 * autoplay. Those visitors never see a frame of the video, so the
 * poster has to be a finished hero background in its own right — see
 * `MarketPageContent.heroBackground`, which is the poster.
 *
 * `source` is required for the same reason it is on `CardImage`.
 */
export interface BackgroundVideo {
  /**
   * Path under `public/`.
   *
   * Pre-encoded: `output: 'export'` means nothing transcodes at build
   * time (02 §7, §8). H.264 in MP4 is the one combination that plays
   * everywhere without a second source.
   */
  src: string
  /**
   * What the clip shows.
   *
   * Not rendered — the layer is decorative and `aria-hidden`. This
   * exists so the set is readable in source, exactly as
   * `HeroBackdropImage.describes` does.
   */
  describes: string
  /** Provenance of the asset. Required — see `CardImage`. */
  source: string
}
