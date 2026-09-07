/**
 * The core service mosaic, shared by the home page and every market hub.
 *
 * Authority: docs/06-master-service-registry.md;
 *            docs/18-design-system.md §5.6, §50-51, Appendix A;
 *            docs/22-decisions-change-log.md DEC-076, DEC-080;
 *            docs/01-business-brand-foundation.md §20, §26;
 *            CLAUDE.md §18, §40, §53.
 *
 * ===========================================================================
 * ONE ARRAY, FOUR PAGES, ON OWNER DIRECTION (2026-09-07)
 * ===========================================================================
 * "What we do" used to be written out separately on each page, and the
 * four copies had already drifted apart:
 *
 *   home page   9 services, all with artwork  -> image mosaic
 *   St. Louis   5 services, all with artwork  -> image mosaic
 *   San Diego   4 services, NO artwork        -> plain row list
 *   Las Vegas   4 services, NO artwork        -> plain row list
 *
 * So two of the three market hubs rendered a text index where the home
 * page rendered the mosaic, and St. Louis had the frames but only five
 * of the nine — with its camera-inspection card wearing the COMBINED
 * cleaning-and-camera frame, which is the kind of mismatch four hand
 * copies produce and nobody notices.
 *
 * The owner asked the hubs to carry the home page's section. Making
 * that one array rather than four transcriptions is what keeps it true
 * next month: `ServiceIndex` promotes a band from row list to mosaic
 * purely on whether `image` is set, so a page that quietly loses its
 * artwork silently loses the composition too.
 *
 * ---------------------------------------------------------------------------
 * ⚠ NINE, AND THE COUNT IS LOAD-BEARING
 * ---------------------------------------------------------------------------
 * `ServiceIndex`'s mosaic gives the first card two columns and two
 * rows, so at three columns nine items fill exactly: flagship (2x2),
 * two beside it, then two full rows of three. A TENTH would sit alone
 * in a trailing row, which is the orphaned row 18 §5.6 prohibits by
 * name.
 *
 * That is why St. Louis composes `[its own service, ...this array minus
 * one]` rather than appending: see its content file, where the arithmetic
 * and the choice of which one to leave out are recorded.
 *
 * ---------------------------------------------------------------------------
 * ⚠ WHY ALL NINE ARE SAFE ON ALL THREE MARKETS
 * ---------------------------------------------------------------------------
 * 01 §20 and §26 forbid stating that a service is offered in a market
 * that has not confirmed it, which is the one thing a shared service
 * array could get badly wrong. Checked against
 * `data/services/master-service-registry.json`: every service below
 * carries an IDENTICAL status across `st-louis-mo`, `san-diego-ca` and
 * `las-vegas-nv` — six `confirmed`, three `supported_by_existing_*`.
 * DEC-080 records the same finding in prose: "Las Vegas mirrors San
 * Diego exactly."
 *
 * ⚠ ONE SERVICE IS DELIBERATELY ABSENT FROM THIS ARRAY.
 * `svc-stl-sewer-lateral-inspection-reporting` is
 * `confirmed_market_specific_capability` in St. Louis and
 * `not_applicable` in both other markets. It must never enter a shared
 * list — it stays declared in the St. Louis content file alone, which
 * is also where it is the flagship.
 *
 * ⚠ A NOTE IN `data/markets/markets.ts` STILL READS AS THOUGH NO LAS
 * VEGAS SERVICE WERE CONFIRMED. It is stale — DEC-076 confirmed 17 of
 * 18 and DEC-080 released the indexation gate on that basis. Read the
 * registry, not that comment.
 *
 * ---------------------------------------------------------------------------
 * ⚠ ARTWORK IS THE CARD'S BACKGROUND, AND THE TEXT ON TOP IS WHITE
 * ---------------------------------------------------------------------------
 * Owner direction, 2026-09-04. `ServiceIndex`'s mosaic renders these
 * behind the heading and description under a black 55% scrim, which is
 * load-bearing rather than decorative: on the bare frames white text
 * runs 1.64:1 to 3.48:1 and every one fails 4.5:1. The measurements and
 * the floor live beside the scrim in the component.
 *
 * PROVENANCE, STATED HONESTLY. These are owner-supplied rendered
 * scenes, not photographs of a Sewer Pros job — the same standing as
 * the hero frames, and the reason `source` says so in full. They are
 * background and carry `alt=""` at render, so this file must not be
 * used to populate `proofImages`, which asserts "this is our work" and
 * requires a citation per item.
 *
 * Each frame is matched to its service by subject. The filenames map
 * one to one, so nothing here is a guess.
 */

import type { CardImage, PageId } from '@/types'

const id = (value: string): PageId => value as PageId

/**
 * One card in the services band.
 *
 * Structurally the element type of both `HomePageContent['services']`
 * and `MarketPageContent['services']`. Declared here rather than
 * exported from `types/content.ts` so this module can be dropped in
 * without widening either interface; TypeScript matches it structurally
 * at every call site.
 */
export interface ServiceCard {
  pageId: PageId
  description?: string
  image?: CardImage
}

/**
 * Shared provenance for the set.
 *
 * ⚠ ONE CONSTANT BECAUSE ONE DELIVERY. All nine frames arrived
 * together from the owner on the same date. A frame from a different
 * source must carry its own `source` string rather than borrow this
 * one — `CardImage.source` is required precisely so an asset whose
 * origin nobody recorded cannot slip in.
 */
const OWNER_RENDER =
  'Supplied by the business owner, 2026-09-04. Rendered scene, not a photograph of a Sewer Pros job.'

/**
 * The nine services, in the home page's order.
 *
 * ⚠ ORDER IS COMPOSITION. The first entry becomes the mosaic's
 * flagship tile unless a caller passes `flagshipPageId`, and camera
 * inspection is first because Appendix A names it the flagship by
 * name. Reordering this array reshapes four pages.
 */
export const coreServiceCards: readonly ServiceCard[] = [
  {
    pageId: id('svc-sewer-camera-inspection'),
    description:
      'A sewer camera inspection - often called a sewer scope - shows the line’s actual condition on video, so you get documented evidence before deciding on repairs.',
    image: {
      src: '/images/homepage/services/the-sewer-pros-sewer-camera-inspection-video-evidence.webp',
      alt: 'Camera monitor showing the inside of a line, beside an open cleanout',
      source: OWNER_RENDER,
    },
  },
  {
    pageId: id('svc-sewer-cleaning'),
    description:
      'Clears grease, scale, and buildup so the line drains as intended - the direct fix for slow or recurring backups.',
    image: {
      src: '/images/homepage/services/the-sewer-pros-professional-sewer-line-cleaning.webp',
      alt: 'Cleaning equipment at work on a sewer line',
      source: OWNER_RENDER,
    },
  },
  {
    pageId: id('svc-hydro-jetting'),
    description:
      'High-pressure water strips grease, scale, sludge, and roots from the pipe wall for a deeper clean than snaking.',
    image: {
      src: '/images/homepage/services/the-sewer-pros-hydro-jetting-pipe-wall-cleaning.webp',
      alt: 'High-pressure jetting stripping the pipe wall',
      source: OWNER_RENDER,
    },
  },
  {
    pageId: id('svc-sewer-cleaning-camera-inspection'),
    description:
      'Clear the line, then inspect it on camera - so you see the condition the blockage was hiding, not just a cleared drain.',
    image: {
      src: '/images/homepage/services/the-sewer-pros-sewer-cleaning-camera-inspection.webp',
      alt: 'Cleaning and camera equipment set up together at a cleanout',
      source: OWNER_RENDER,
    },
  },
  {
    pageId: id('svc-sewer-line-locating'),
    description:
      'Establishes exactly where your line runs and how deep it sits, before you dig, landscape, or plan utility work nearby.',
    image: {
      src: '/images/homepage/services/the-sewer-pros-underground-sewer-line-locating.webp',
      alt: 'Locating equipment tracing a line underground',
      source: OWNER_RENDER,
    },
  },
  {
    pageId: id('svc-drain-cleaning'),
    description:
      'Clears fixture and branch drains - sinks, tubs, secondary lines - so isolated clogs get a targeted fix, not a bigger job.',
    image: {
      src: '/images/homepage/services/the-sewer-pros-sink-branch-drain-cleaning.webp',
      alt: 'Work on a sink branch drain',
      source: OWNER_RENDER,
    },
  },
  {
    pageId: id('svc-pre-purchase-sewer-inspection'),
    description:
      'A sewer scope before closing, so a hidden sewer problem does not become a surprise you inherit with the property.',
    image: {
      src: '/images/homepage/services/the-sewer-pros-pre-purchase-sewer-scope.webp',
      alt: 'A sewer scope run at a property before purchase',
      source: OWNER_RENDER,
    },
  },
  {
    pageId: id('svc-recurring-sewer-backup-diagnosis'),
    description:
      'Finds the actual cause of a line that keeps backing up - root intrusion, a low spot, a partial collapse - instead of clearing it again.',
    image: {
      src: '/images/homepage/services/the-sewer-pros-recurring-sewer-backup-diagnosis.webp',
      alt: 'Diagnosing the cause of a line that keeps backing up',
      source: OWNER_RENDER,
    },
  },
  {
    pageId: id('svc-preventative-sewer-maintenance'),
    description:
      'Services the line on an interval the inspection evidence supports, not a generic annual visit, to catch problems early.',
    image: {
      src: '/images/homepage/services/the-sewer-pros-evidence-based-sewer-maintenance.webp',
      alt: 'Scheduled maintenance work on a sewer line',
      source: OWNER_RENDER,
    },
  },
]

/**
 * The card `coreServiceCards` drops when a market needs room for one of
 * its own.
 *
 * ⚠ EXPORTED SO THE FILTER IS NAMED RATHER THAN A LITERAL AT THE CALL
 * SITE. St. Louis leaves this one out to keep its band at nine while
 * adding its market-specific lateral-reporting service; a bare string
 * in that file would be an unexplained id, and a typo in it would
 * silently filter nothing and ship a ten-card mosaic with an orphaned
 * row.
 *
 * The combined service is the right one to drop: both halves of it,
 * sewer cleaning and camera inspection, are already listed separately
 * above, and St. Louis has never carried it.
 */
export const combinedCleaningInspectionCardId = id(
  'svc-sewer-cleaning-camera-inspection',
)
