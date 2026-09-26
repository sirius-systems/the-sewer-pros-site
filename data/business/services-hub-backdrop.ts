import type { BackgroundVideo, CardImage } from '@/types'

/**
 * The services hub hero backdrop: one owner-supplied clip over its still.
 *
 * Authority: docs/18-design-system.md §28-34, §37, §39; CLAUDE.md §24,
 *            §58, §59.
 *
 * Replaces the five-frame carousel (2026-09-26, owner direction). The
 * layer is decorative: `HeroVideoBackdrop` renders it `aria-hidden`, so
 * `describes` is for editors and is never rendered.
 *
 * The still is the clip's poster and what reduced-motion, data-saver and
 * pre-hydration visitors see; it is the LCP element.
 *
 * ⚠ RENDERED SCENE, NOT FOOTAGE OF A SEWER PROS JOB. `source` says so,
 * which keeps this out of `proofImages`.
 *
 * ⚠ THE STILL IS A 1.3MB JPEG. `output: 'export'` disables the image
 * optimizer, so every visitor downloads it in full. Re-encode to WebP
 * (~1672px wide) when practical and update `src` here.
 */
const SOURCE =
  'Supplied by the business owner, 2026-09-26. Rendered scene, not footage of a Sewer Pros job.'

export const servicesHubHeroVideo: BackgroundVideo = {
  src: '/images/markets/services-hub/hero/the-sewer-pros-services-hub-sewer-inspection-cleaning-hero.mp4',
  describes:
    'Sewer inspection and cleaning equipment clip supplied for the services hub hero',
  source: SOURCE,
}

export const servicesHubHeroPoster: CardImage = {
  src: '/images/markets/services-hub/hero/the-sewer-pros-services-hub-sewer-inspection-cleaning-hero.jpg',
  alt: 'Sewer inspection and cleaning equipment set up for a service visit',
  source: SOURCE,
}
