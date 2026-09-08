import type { HeroBackdropSet } from './hero-backdrop'

/**
 * The services hub hero backdrop: five owner-supplied frames.
 *
 * Authority: docs/18-design-system.md §28-34, §37, §39; CLAUDE.md §24,
 *            §58, §59.
 *
 * ===========================================================================
 * ⚠ DECORATIVE, WHICH IS WHY THEY ARE HERE RATHER THAN IN CONTENT
 * ===========================================================================
 * `HeroBackdrop` renders every frame with `alt=""` under an
 * `aria-hidden` layer. `describes` below is for whoever next opens this
 * file, not for the page: it lets an editor tell the frames apart
 * without opening them, and it is never rendered.
 *
 * The page's meaning is entirely in the copy on top of these. That is
 * the condition that makes a background carousel defensible at all, and
 * it is the reason this set must not be fed to a component that would
 * give the frames real alt text.
 *
 * ⚠ THEY ARE RENDERED SCENES, NOT PHOTOGRAPHS OF SEWER PROS WORK, and
 * `source` says so in full. That standing is what keeps them out of
 * `proofImages`, which asserts "this is our work" and requires a
 * citation per item.
 *
 * ---------------------------------------------------------------------------
 * ⚠ ORDER IS LOAD ORDER, AND FRAME 0 IS THE LCP CANDIDATE
 * ---------------------------------------------------------------------------
 * `HeroBackdrop` server-renders the first frame alone and mounts the
 * rest after hydration, so frame 0 is the only one on the critical
 * path. The complete equipment setup leads because it is the frame that
 * reads clearest at a glance behind type and shows the widest range of
 * what the page is a hub for.
 *
 * ---------------------------------------------------------------------------
 * ⚠ SIZING: THESE ARE FULL-SIZE FRAMES AND `output: 'export'` MEANS NO
 * RESPONSIVE DOWNSCALE
 * ---------------------------------------------------------------------------
 * 3344x1882 WebP at 199KB to 539KB. The Next image optimizer is
 * disabled by the static export (02 §7, §8), so every visitor
 * downloads the full file at every viewport, phones included. Only
 * frame 0 is on the critical path, but the bytes are still real.
 *
 * ⚠ THEY SHOULD BE RESIZED TO ~1672px WIDE, the same flag
 * `locations-hub-backdrop.ts` carries and for the same reason.
 * Re-encoding owner-supplied assets is not a decision to make on the
 * way past; whoever does it must update `width` and `height` here in
 * the same change.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THE CLOSING CTA'S FRAME IS NOT IN THIS SET, DELIBERATELY. That
 * section carries its own background further down the page; adding it
 * here would put one picture in two places on one route.
 */
const SOURCE =
  'Supplied by the business owner, 2026-09-08. Rendered scene, not a photograph of a Sewer Pros job.'

const frames = [
  {
    src: '/images/markets/services-hub/the-sewer-pros-sewer-inspection-cleaning-services-hero.webp',
    describes:
      'Camera reel and monitor, cleaning and jetting machines and a locator lined up on a residential driveway beside a cleanout',
    source: SOURCE,
  },
  {
    src: '/images/markets/services-hub/the-sewer-pros-sewer-inspection-cleaning-access-hero.webp',
    describes:
      'Camera and cleaning equipment set up at two separate exterior access points',
    source: SOURCE,
  },
  {
    src: '/images/markets/services-hub/the-sewer-pros-documented-sewer-camera-findings-hero.webp',
    describes:
      'Gloved hands at an inspection monitor showing the inside of a line, with printed still frames on the case',
    source: SOURCE,
  },
  {
    src: '/images/markets/services-hub/the-sewer-pros-multifamily-commercial-sewer-services-hero.webp',
    describes:
      'Camera, cleaning and jetting equipment on a walkway between multi-unit buildings',
    source: SOURCE,
  },
  {
    src: '/images/markets/services-hub/the-sewer-pros-sewer-diagnostic-equipment-services-hero.webp',
    describes:
      'Diagnostic and cleaning equipment laid out and organised for a service visit',
    source: SOURCE,
  },
] as const

export const servicesHubBackdrop: HeroBackdropSet = {
  images: frames,
  width: 3344,
  height: 1882,
}
