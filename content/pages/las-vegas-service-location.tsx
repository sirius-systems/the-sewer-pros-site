/**
 * Las Vegas service + location content.
 *
 * Authority: docs/14-content-specification.md §43, §79
 *            docs/05-url-routing-strategy.md §119
 *            CLAUDE.md §22 (location test, service test), §24, §51
 *
 * ===========================================================================
 * PILOT - THIS ENTRY IS THE TEMPLATE FOR THE REMAINING SERVICE + LOCATION PAGES
 * ===========================================================================
 * `sl-henderson-camera` is the first page built from existing service content
 * (`svc-sewer-camera-inspection`) and existing location content
 * (`loc-lv-henderson`). Every sentence is drawn from one of those two sources
 * or from the owner-confirmed deliverables; nothing is new research.
 *
 * Section recipe (each section answers one question the reader has):
 *   1. Responsibility   - LOCATION fact, restated through this service
 *   2. What the service produces here - SERVICE fact, limited to this line
 *   3. Housing age       - LOCATION fact, tied to what this service can/cannot tell
 *   4. Who to call vs what we do - LOCATION contacts + this service's boundary
 *
 * Both CLAUDE.md §22 tests are met by tying each local fact to what THIS
 * service produces. Swap Henderson for another city and sections 1, 3 and 4
 * fail; swap the camera for cleaning and sections 2 and 3 fail.
 *
 * Rollout: the same recipe, with each location's facts read from its own
 * location module, for the other eight services and fifteen locations.
 *
 * ⚠ INDEXABLE AS A SINGLE PILOT so the template's JSON-LD can be reviewed
 * (noindex pages emit none). Flip `indexable` in `approved-pages.ts` to pull it
 * from the sitemap. Remaining pages are promoted by cohort (CLAUDE.md §16-17).
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours (as on the Henderson location page).
 * No company phone, office, price, offer, response time or guarantee appears.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ServiceLocationPageContent } from '@/types'
import { hendersonContent } from './las-vegas-henderson'
import { serviceContent } from './services'
import {
  mergeRelevantFaqs,
  pageImageSlots,
} from './service-location-shared'

const id = (value: string): PageId => value as PageId

const lv = marketOperatingDetail['las-vegas-nv']
if (lv === undefined) throw new Error('marketOperatingDetail is missing las-vegas-nv')

/* ---------- Henderson / camera: shared inputs ------------------------------- */

const hendersonCameraSlots = pageImageSlots('sl-henderson-camera', {
  hero: {
    alt: 'Technician feeding a sewer camera into a cleanout at a Henderson home',
    shot: 'Technician feeding a camera into a residential cleanout, monitor in frame',
  },
  problems: [
    {
      alt: 'Capped sewer cleanout beside a house foundation',
      shot: 'Exterior cleanout cap at the base of a house',
    },
    {
      alt: 'Property owner reviewing printed inspection findings',
      shot: 'Technician and owner reviewing findings, faces not identifiable',
    },
    {
      alt: 'Inspector walking a home buyer through sewer inspection findings outside a house',
      shot: 'Technician at a for-sale property starting a pre-purchase scope',
    },
    {
      alt: 'Residential street with a manhole cover near the curb',
      shot: 'Ordinary residential street, manhole and curb, no identifiable homes',
    },
  ],
})

const cameraServiceFaq = serviceContent[id('svc-sewer-camera-inspection')]?.v2?.faq
if (cameraServiceFaq === undefined || hendersonContent.faq === undefined) {
  throw new Error('sl-henderson-camera: source FAQ arrays are missing')
}

/**
 * Every question from the Henderson location page and the camera service page,
 * minus two: the location page's "What does a sewer camera inspection show?"
 * (the service page answers it in full) and the service page's "Which areas
 * does The Sewer Pros serve?" (this page IS an area page).
 */
const hendersonCameraFaq = mergeRelevantFaqs(hendersonContent.faq, cameraServiceFaq, [
  'What does a sewer camera inspection show?',
  'Which areas does The Sewer Pros serve?',
], 'In Henderson')

export const lasVegasServiceLocationContent: Partial<
  Record<PageId, ServiceLocationPageContent>
> = {
  /* ------------------------------------------ Henderson / camera inspection -- */
  [id('sl-henderson-camera')]: {
    seoTitle: 'Sewer Camera Inspection in Henderson, NV',
    metaDescription:
      'Sewer camera inspection for Henderson, NV properties. The City says the lateral is yours from the main connection. See what a camera records on it.',
    serviceDescription:
      'A sewer camera inspection is a visual inspection of the accessible inside of a sewer line, recorded on video, for properties in the City of Henderson, Nevada.',
    heroImage: hendersonCameraSlots.hero,
    ctaImage: hendersonCameraSlots.cta,
    hero: {
      eyebrow: 'Henderson, NV',
      title: 'Sewer Camera Inspection in Henderson',
      intro: (
        <p>
          In the City of Henderson, the sewer service lateral is the owner&rsquo;s
          from the point where it meets the City&rsquo;s main in the street, and
          the City lists periodic professional inspection of it among owner
          duties. A camera inspection records what is inside that line, on video,
          before you clean it, buy the home, or approve work.
        </p>
      ),
    },
    body: (
      <>
        <h2>Where your responsibility starts in Henderson</h2>
        <p>
          The City says your responsibility for the sewer service lateral begins
          where it connects to the City&rsquo;s sewer main in the street. On your
          side of that connection, the City says you pay for repairs and cleanup.
          On the City&rsquo;s side, it says the City does.
        </p>
        <p>
          That split is why the camera matters here. A line that is yours to
          maintain is a line you need evidence about, and we found no City
          lateral repair, grant or reimbursement program on the City pages we
          reviewed. That is &ldquo;none found&rdquo;, not a statement that none
          exists.
        </p>

        <h2>What the camera records on a Henderson lateral</h2>
        <ul>
          <li>Roots, grease, scale and other deposits visible inside the pipe</li>
          <li>Cracks, offset or separated joints and visible surface damage</li>
          <li>Standing water, and the places where other lines join the pipe</li>
          <li>Any part of the line the camera could not view, and why</li>
        </ul>
        <p>
          You receive the inspection video and written findings. The footage
          records where along the line a condition sits, measured from where the
          camera entered. It does not establish where the connection to the City
          main is, or where your responsibility begins, and it cannot show
          anything below the waterline.
        </p>

        <h2>Newer homes still need the question answered</h2>
        <p>
          Henderson&rsquo;s median year built is 2001, according to the U.S.
          Census Bureau&rsquo;s American Community Survey (2020-2024 5-year
          estimates, Henderson city), and our arithmetic on the Census rows puts
          82.1 percent of housing units at 1990 or later. A newer house does not
          tell you the condition or material of its lateral, which can be
          repaired, rerouted or replaced after the house was built. Only looking
          at your line can show what is there.
        </p>

        <h2>The City&rsquo;s contacts, and where an inspection fits</h2>
        <p>
          To report a sewer emergency, the City says to call its 24-hour call
          center at 702-267-5900 (the City&rsquo;s number, not ours). For work in
          the public right-of-way, the City says to contact Public Works at
          702-267-3600 about a permit. A camera inspection does not tell you
          which approvals apply and does not replace any review the City
          requires. It is what you bring to those conversations when the City or
          a contractor points to your lateral.
        </p>
      </>
    ),
    problems: [
      {
        title: 'Recurring clogs or slow drains',
        description:
          'A line that is yours from the connection to the house is worth looking at when clogs keep returning, instead of clearing each one as a separate event.',
        image: hendersonCameraSlots.problems[0],
      },
      {
        title: 'A repair recommendation you want checked',
        description:
          'Because we do not perform repairs, the video gives you the condition of the line to compare against any estimate.',
        image: hendersonCameraSlots.problems[1],
      },
      {
        title: 'Buying a Henderson home',
        description:
          'We found no City rule requiring a lateral inspection or seller disclosure on sale. A buyer who wants evidence of the lateral has to ask for it.',
        image: hendersonCameraSlots.problems[2],
      },
      {
        title: 'The City or a contractor points to your lateral',
        description:
          'The City places the lateral on the owner from the connection. A recorded inspection shows what is in it.',
        image: hendersonCameraSlots.problems[3],
      },
    ],
    // Six items: renders as two rows of three.
    inclusions: [
      {
        title: 'Inspection video',
        description: 'When a camera is used, you receive the inspection video.',
      },
      {
        title: 'Written findings',
        description: 'Written findings are included.',
      },
      {
        title: 'Visible conditions noted',
        description:
          'The findings note the conditions that are visible inside the line.',
      },
      {
        title: 'Parts not viewed, stated',
        description:
          'Any part of the line that could not be viewed is noted, so the record says what it does not cover.',
      },
      {
        title: 'Live view at the monitor',
        description:
          'The technician watches the monitor and pauses at visible features or conditions.',
      },
      {
        title: 'An identified entry point',
        description:
          'The technician identifies an accessible entry point, commonly an exterior cleanout.',
      },
    ],
    process: [
      {
        title: 'Access',
        description:
          'The technician identifies an accessible entry point, commonly an exterior cleanout.',
      },
      {
        title: 'Camera entry',
        description:
          'A camera on a flexible push cable is advanced through the accessible line. Our equipment includes the SeeSnake CS12x and the SeeSnake Standard Camera Reel with TruSense.',
      },
      {
        title: 'Live viewing and recording',
        description:
          'The technician watches the monitor, pauses at visible conditions, and records the inspection.',
      },
      {
        title: 'Findings',
        description:
          'You review the video and written findings, including anything that could not be viewed.',
      },
    ],
    coverage: {
      title: 'Other Las Vegas Valley areas',
      intro:
        'This page covers the City of Henderson. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
      pageIds: [
        id('loc-lv-las-vegas'),
        id('loc-lv-north-las-vegas'),
        id('loc-lv-summerlin'),
      ],
      availabilityStatement:
        'Henderson is a service area, not an office location.',
    },
    // All relevant questions from the Henderson location page and the camera
    // service page (see `hendersonCameraFaq` above).
    faq: hendersonCameraFaq,
    relatedPageIds: [
      id('loc-lv-henderson'),
      id('svc-sewer-camera-inspection'),
      id('svc-pre-purchase-sewer-inspection'),
      id('svc-sewer-line-locating'),
    ],
    relatedTitle: 'Related pages',
    cta: {
      title: 'Schedule a sewer camera inspection in Henderson',
      body: 'Get the condition of your lateral on video, with written findings.',
    },
  },
}
