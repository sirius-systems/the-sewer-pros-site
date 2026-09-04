/**
 * Homepage hero backdrop images.
 *
 * ===========================================================================
 * ⚠ PROVENANCE: OWNER-SUPPLIED, NOT DOCUMENTED JOB PHOTOGRAPHY
 * ===========================================================================
 * These five files were supplied by the business owner on 2026-09-03 and
 * wired in on owner direction the same day.
 *
 * 18 §28-34 asks for real inspection photography and §34 rules out
 * "unrealistic AI imagery". These are rendered scenes rather than
 * photographs of a Sewer Pros job, so `source` says exactly that
 * instead of implying otherwise. The distinction matters here and not
 * only as bookkeeping: `data/business/proof.ts` requires a citation on
 * every gallery item precisely so nothing can be published as a
 * customer's job that was not one.
 *
 * That is also why these are BACKGROUND and carry `alt=""`. A scene
 * behind the headline sets the subject; a captioned item in the proof
 * gallery asserts "this is our work". The second claim is not available
 * from this material, so this file must not be used to fill
 * `proofImages`.
 *
 * ---------------------------------------------------------------------------
 * SIZING
 * ---------------------------------------------------------------------------
 * All five are 1672x941 (16:9) WebP, 50-163KB. Pre-optimized at
 * authoring time because `output: 'export'` disables the Next image
 * optimizer (02 §7, §8) — `next.config.ts` sets `images.unoptimized`.
 *
 * Keep replacements at the same aspect ratio. The backdrop crops with
 * `object-cover`, so a materially different ratio changes which part of
 * the frame survives behind the copy.
 */

export interface HeroBackdropImage {
  /** Path under `public/`. Pre-optimized — see the note above. */
  src: string
  /**
   * What the frame shows.
   *
   * Not rendered as `alt` — the backdrop is decorative and carries
   * `alt=""`. This exists so the set is readable in source and so a
   * later editor can tell the frames apart without opening them.
   */
  describes: string
  /** Provenance. Required, and deliberately literal. */
  source: string
}

/** Intrinsic size of every frame, in px. */
export const HERO_BACKDROP_WIDTH = 1672
export const HERO_BACKDROP_HEIGHT = 941

const SOURCE = 'Supplied by the business owner, 2026-09-03. Rendered scene, not a photograph of a Sewer Pros job.'

/**
 * The backdrop set, in display order.
 *
 * Ordered so the first frame is the one that reads clearest at a
 * glance and behind type: residential camera inspection is the core
 * service, and it is the frame a first-time visitor should meet. It is
 * also the only one rendered on the server, so it is the LCP candidate
 * — see `components/sections/HeroBackdrop.tsx`.
 */
export const heroBackdropImages: readonly HeroBackdropImage[] = [
  {
    src: '/images/homepage/hero/the-sewer-pros-residential-camera-service-hero.webp',
    describes:
      'Camera reel and monitor at an open cleanout on a residential driveway',
    source: SOURCE,
  },
  {
    src: '/images/homepage/hero/the-sewer-pros-pipe-condition-review-hero.webp',
    describes: 'Gloved hands at a camera monitor showing the inside of a line',
    source: SOURCE,
  },
  {
    src: '/images/homepage/hero/the-sewer-pros-high-pressure-line-cleaning-hero.webp',
    describes: 'Jetting reel and hose run to a cleanout on a paved approach',
    source: SOURCE,
  },
  {
    src: '/images/homepage/hero/the-sewer-pros-commercial-drain-diagnostics-hero.webp',
    describes: 'Camera reel at a floor cleanout in a commercial service corridor',
    source: SOURCE,
  },
  {
    src: '/images/homepage/hero/the-sewer-pros-homebuyer-sewer-due-diligence-hero.webp',
    describes: 'Jetting equipment and an open cleanout beside a property wall',
    source: SOURCE,
  },
]

/** 18 §120 — the section omits the backdrop rather than render an empty layer. */
export function heroBackdropRenders(): boolean {
  return heroBackdropImages.length > 0
}
