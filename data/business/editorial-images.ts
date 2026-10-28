import type { CardImage } from '@/types'
import { RENDER_IMAGE_SOURCE } from '@/lib/image-slots'

/**
 * Header images for the pages that had none: the six audience pages, the two
 * comparisons, the five resource guides, the FAQ and the Resources hub.
 *
 * ⚠ EXISTING APPROVED RENDERS ONLY, NOTHING NEW. Each file is already on the
 * site (the Who We Serve cards, the shared renders) or sat unused in
 * `public/` (the two comparison renders). They are rendered scenes, so the
 * alt text describes what is visible and nothing more: no job, customer,
 * address, crew or before-and-after claim (CLAUDE.md §24, DEC-145).
 *
 * Keyed by canonical pathname. `editorialImage()` is the one lookup; the
 * templates call it and render nothing for a page with no entry.
 */
const render = (src: string, alt: string): CardImage => ({ src, alt, source: RENDER_IMAGE_SOURCE })

const AUDIENCE = '/images/audiences/audience-hub/'
const SHARED = '/images/shared/'

export const editorialImages: Record<string, CardImage> = {
  /* Audience pages: the per-audience renders already used on the /for/ cards. */
  '/for/home-buyers/': render(
    `${AUDIENCE}the-sewer-pros-home-buyers-pre-purchase-sewer-inspection.webp`,
    'Sewer camera reel on a lawn with its cable running to an open cleanout beside a house',
  ),
  '/for/home-sellers/': render(
    `${AUDIENCE}the-sewer-pros-home-sellers-pre-listing-sewer-documentation.webp`,
    'Printed pipe camera stills, a tablet and a folder on a kitchen counter in a bright living space',
  ),
  '/for/real-estate-agents/': render(
    `${AUDIENCE}the-sewer-pros-real-estate-agents-sewer-inspection-findings.webp`,
    'A person holding a tablet that shows home photos and a pipe camera image, in a bright interior',
  ),
  '/for/home-inspectors/': render(
    `${AUDIENCE}the-sewer-pros-home-inspectors-specialized-sewer-inspection.webp`,
    'Rugged inspection monitor on a kitchen counter showing the inside of a pipe',
  ),
  '/for/property-managers/': render(
    `${AUDIENCE}the-sewer-pros-property-managers-recurring-sewer-diagnosis.webp`,
    'Tablet with a site map, a clipboard and printed pipe camera stills on a balcony table above an apartment courtyard',
  ),
  '/for/hoa-communities/': render(
    `${AUDIENCE}the-sewer-pros-hoa-community-sewer-inspection-evidence.webp`,
    'Conference table with a community site plan, printed pipe camera stills and a binder, a courtyard beyond the window',
  ),

  /* Comparisons: the two renders made for them. */
  '/compare/hydro-jetting-vs-sewer-snaking/': render(
    '/images/services/hydro-jetting/the-sewer-pros-hydro-jetting-vs-sewer-snaking-cleaning-methods-4x3.webp',
    'Trailer-mounted jetter behind a camera monitor, set beside an open access cover on a paved driveway',
  ),
  '/compare/independent-sewer-inspection-vs-repair-company/': render(
    '/images/services/pre-purchase-sewer-inspection/the-sewer-pros-independent-sewer-inspection-vs-repair-company-inspection-ridgid-seesnake-4x3.webp',
    'Camera reel and monitor beside a cleanout with brass fittings in a mulch bed next to a walkway',
  ),

  /* Resource guides. */
  '/resources/how-to-read-a-sewer-camera-inspection-video/': render(
    `${SHARED}pipe-interiors/the-sewer-pros-monitor-showing-pipe-interior-4x3.webp`,
    'Camera monitor on a lawn showing the inside of a sewer pipe, with a distance counter in the corner',
  ),
  '/resources/what-is-in-a-sewer-camera-inspection-report/': render(
    `${SHARED}pipe-interiors/the-sewer-pros-tablet-inspection-video-beside-written-findings-4x3.webp`,
    'A tablet showing a blurred document and a pipe image, beside a printed form on a clipboard on a table',
  ),
  '/resources/st-louis-city-sewer-lateral-program/': render(
    `${SHARED}residential/the-sewer-pros-st-louis-older-home-visible-cleanout-4x3.webp`,
    'Older brick house with a sewer camera reel and open monitor on the lawn beside a cleanout',
  ),
  '/resources/st-louis-county-sewer-lateral-program/': render(
    `${SHARED}residential/the-sewer-pros-st-louis-residential-street-manhole-curb-4x3.webp`,
    'Residential street with a manhole cover in the pavement and a yellow locator receiver on the sidewalk',
  ),
  '/resources/st-louis-sewer-lateral-report/': render(
    `${SHARED}residential/the-sewer-pros-inspection-report-handed-to-agent-4x3.webp`,
    'A printed form with blurred text, a pen and a closed laptop on a table',
  ),

  /* Hubs and the FAQ. */
  '/resources/': render(
    `${SHARED}equipment/the-sewer-pros-monitor-pipe-interior-beside-locator-receiver-4x3.webp`,
    'Camera monitor showing the inside of a pipe beside a yellow handheld locator receiver on a lawn',
  ),
  '/faq/': render(
    `${SHARED}residential/the-sewer-pros-kitchen-sink-slow-drain-4x3.webp`,
    'Stainless kitchen sink with a drain machine standing beside the counter',
  ),
}

export function editorialImage(pathname: string): CardImage | undefined {
  return editorialImages[pathname]
}
