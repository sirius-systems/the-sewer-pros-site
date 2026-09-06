import type { HeroBackdropImage, HeroBackdropSet } from './hero-backdrop'

/**
 * Locations hub (`/locations/`) hero backdrop.
 *
 * ===========================================================================
 * ⚠ PROVENANCE: OWNER-SUPPLIED, NOT DOCUMENTED JOB PHOTOGRAPHY
 * ===========================================================================
 * These three files were supplied by the business owner on 2026-09-05
 * and wired in on owner direction the same day. The same rule the home
 * page set is governed by applies here: 18 §28-34 asks for real
 * inspection photography and §34 rules out "unrealistic AI imagery",
 * so `source` says these are rendered scenes rather than implying
 * otherwise.
 *
 * That is also why they are BACKGROUND and carry `alt=""`. A scene
 * behind a headline sets the subject; a captioned item in the proof
 * gallery asserts "this is our work". The second claim is not
 * available from this material, so this file must not be used to fill
 * `proofImages`.
 *
 * ---------------------------------------------------------------------------
 * ⚠ ONE FRAME PER MARKET, IN THE SAME ORDER THE PAGE LISTS THEM
 * ---------------------------------------------------------------------------
 * St. Louis, San Diego, Las Vegas — matching the `items` order in
 * `hub-locations` content. The page's whole subject is the three
 * markets, so a backdrop that cycles them is showing what the page is
 * about rather than decorating it.
 *
 * ⚠ THE FRAMES ARE NOT LABELLED, AND MUST NOT BE READ AS A CLAIM. A
 * visitor cannot tell which market any frame depicts, and nothing on
 * the page says. That is deliberate and it is what keeps them safe:
 * these are rendered scenes, so a frame captioned "San Diego" would be
 * asserting a photograph of a market where 01 §21 and DEC-021 record
 * that no verified local presence exists. `describes` below is for
 * whoever next opens this file, not for the page.
 *
 * ---------------------------------------------------------------------------
 * ⚠ SIZING: THESE ARE THE HEAVIEST BACKDROP FRAMES ON THE SITE
 * ---------------------------------------------------------------------------
 * 3344x1882 WebP at 479KB, 512KB and 862KB — twice the home page set's
 * pixel dimensions and roughly five times its weight per frame.
 *
 * `output: 'export'` disables the Next image optimizer (02 §7, §8), so
 * there is no responsive downscale: every visitor downloads the full
 * file at every viewport, phones included. `HeroBackdrop` renders only
 * the first frame on the server and mounts the rest after hydration,
 * which keeps this off the critical path, but it does not make the
 * bytes go away.
 *
 * ⚠ THEY SHOULD BE RESIZED TO ~1672px WIDE TO MATCH THE HOME PAGE SET.
 * Flagged rather than done quietly: re-encoding owner-supplied assets
 * is not a decision to make on the way past. Whoever does it must
 * update `width` and `height` below in the same change.
 *
 * ---------------------------------------------------------------------------
 * ⚠ ST. LOUIS IS FIRST, AND IT IS ALSO THE LARGEST FILE
 * ---------------------------------------------------------------------------
 * The first frame is the only one in the server-rendered HTML, which
 * makes it this page's LCP candidate. 862KB is a poor thing to hand
 * that job. It keeps the position anyway because the order matches the
 * page's own market list and St. Louis is the established market
 * (01 §21, DEC-070) — reordering to save bytes would put the weakest
 * market first for a reason no reader could see. Resizing the set is
 * the fix; reordering is not.
 */

const SOURCE =
  'Supplied by the business owner, 2026-09-05. Rendered scene, not a photograph of a Sewer Pros job.'

const frames: readonly HeroBackdropImage[] = [
  {
    src: '/images/markets/locations-hub/the-sewer-pros-st-louis-sewer-service-area-hero.webp',
    describes: 'Service-area scene supplied for St. Louis',
    source: SOURCE,
  },
  {
    src: '/images/markets/locations-hub/the-sewer-pros-san-diego-sewer-service-area-hero.webp',
    describes: 'Service-area scene supplied for San Diego',
    source: SOURCE,
  },
  {
    src: '/images/markets/locations-hub/the-sewer-pros-las-vegas-sewer-service-area-hero.webp',
    describes: 'Service-area scene supplied for Las Vegas',
    source: SOURCE,
  },
]

export const locationsHubBackdrop: HeroBackdropSet = {
  images: frames,
  width: 3344,
  height: 1882,
}
