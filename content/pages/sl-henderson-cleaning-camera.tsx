/**
 * Henderson, NV + Sewer Cleaning & Camera Inspection
 * (`sl-henderson-cleaning-camera`).
 *
 * Built from exactly two sources, as the pilot `sl-henderson-camera` is:
 *   LOCATION  `hendersonContent`  (content/pages/las-vegas-henderson.tsx)
 *   SERVICE   `svc-sewer-cleaning-camera-inspection` v2 content
 *             (content/pages/services.tsx) and `./sl-blocks/...`
 *
 * Section recipe (each ties a Henderson fact to what THIS service does or
 * cannot do; swap the city or the service and the copy breaks):
 *   1. Responsibility       - City cleans its main; the owner pays cleanup on
 *                             the owner's side. Cleaning does not show which
 *                             side a restriction was on.
 *   2. What cleaning changes - City's periodic-inspection duty + "none found"
 *                             program findings + the service's own limits.
 *   3. Housing age          - ACS figures vs. a returning clog.
 *   4. Who to call          - City emergency / portal / Public Works numbers
 *                             (the CITY's) + the permit gap for cleaning.
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours. The company phone is read from
 * `marketOperatingDetail`, never typed. No price, offer, response time,
 * guarantee, emergency or same-day claim. Henderson is a service area, not an
 * office. Repair and replacement are never presented as offered.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { hendersonContent } from './las-vegas-henderson'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-cleaning-camera-inspection'

const id = (value: string): PageId => value as PageId

const lv = marketOperatingDetail['las-vegas-nv']
if (lv === undefined) throw new Error('marketOperatingDetail is missing las-vegas-nv')

const slots = pageImageSlots('sl-henderson-cleaning-camera', {
  hero: {
    alt: 'Technician reviewing camera footage after a cleaning at a Henderson home',
    shot: 'Monitor showing a cleaned pipe with crew behind, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-sewer-cleaning-camera-inspection')]?.v2
if (v2 === undefined || hendersonContent.faq === undefined) {
  throw new Error('sl-henderson-cleaning-camera: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

const CAMERA_SHOWS = 'What does a sewer camera inspection show?'

/**
 * Every question from the Henderson location page and the service page. The
 * location page's "What does a sewer camera inspection show?" is left out
 * because the service page asks the same question with the fuller answer
 * (it includes what a camera does not show); filtering it here keeps the
 * service answer instead of letting the shorter location copy win the merge.
 */
const faq = mergeRelevantFaqs(
  hendersonContent.faq.filter((f) => f.question !== CAMERA_SHOWS),
  v2.faq,
  [],
  'In Henderson',
)

export const hendersonCleaningCameraContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning & Camera Inspection in Henderson, NV',
  metaDescription:
    'Sewer cleaning and camera inspection in Henderson, NV. The City cleans blockages in its main; your side of the connection is yours. See what a visit covers.',
  serviceDescription:
    'Sewer cleaning removes material that restricts flow in an accessible sewer line, and a camera inspection records its visible inside on video. The two can be combined in one visit, for properties in the City of Henderson, Nevada.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  hero: {
    eyebrow: 'Henderson, NV',
    title: 'Sewer Cleaning and Camera Inspection in Henderson',
    intro: (
      <p>
        In the City of Henderson, the City says it cleans blockages in its own sewer main, and that
        your responsibility for the sewer service lateral starts where it meets that main in the
        street. A cleaning and camera visit works on your side of that connection: it clears what
        can be cleared in the accessible line, and a camera may record the line before cleaning,
        after it, or both, so you can see what the cleaning changed.
      </p>
    ),
  },
  body: (
    <>
      <h2>Where cleaning is yours in Henderson, and where it is the City&rsquo;s</h2>
      <p>
        The City of Henderson says it maintains and repairs its sewer main up to your sewer service
        connection, including cleaning blockages, and that it pays cleanup and repair costs when a
        blockage occurs in that main. Between the connection and your home, the City says a
        blockage or break is yours, along with the cleanup and repair costs.
      </p>
      <p>
        Cleaning clears a restriction. It does not tell you which side of the connection the
        restriction was on. The camera footage records where along the line a condition sits,
        measured from where the camera entered, but it does not establish where the connection to
        the City main is or where your responsibility begins. Confirm that with the City.
      </p>

      <h2>What the cleaning changes, and what the camera can confirm</h2>
      <p>
        The City lists hiring a professional to periodically inspect the lateral from the
        connection to your home, and to perform any necessary maintenance or repairs, among owner
        responsibilities. A combined visit covers the inspection and the cleaning side of
        maintenance, and when a camera is used you receive the inspection video and written
        findings. It does not cover repairs, which we do not perform.
      </p>
      <p>
        We found no City lateral repair, grant or reimbursement program on the City pages we
        reviewed. That is &ldquo;none found&rdquo;, not a statement that none exists. A line that
        flows again, or a video that looks clear, is not proof that the whole line or the ground
        around it is in good condition, so if a returning clog leads to a repair estimate, the
        footage and findings are what you compare it against.
      </p>

      <h2>A newer Henderson home does not answer whether the line is clear</h2>
      <p>
        Henderson&rsquo;s median year built is 2001, according to the U.S. Census Bureau&rsquo;s
        American Community Survey (2020-2024 5-year estimates, Henderson city), and our arithmetic
        on the Census rows puts 82.1 percent of housing units at 1990 or later and 60.2 percent
        (85,084 of 141,297) at 1990 to 2009. The City publishes nothing about the condition of any
        individual lateral, and the year a house was built does not tell you what is in its line
        today.
      </p>
      <p>
        A clog that returns after clearing may mean buildup, roots, or debris remain, or that a
        pipe condition is involved. Cleaning followed by a camera look can help show which.
      </p>

      <h2>Who to call about a blockage, and where a visit fits</h2>
      <p>
        To report a sewer emergency, the City says to call its 24-hour call center at 702-267-5900
        (the City&rsquo;s number, not ours). For non-emergency water, sewer or drainage concerns,
        the City points to Contact Henderson, its service-request portal. A blockage in the
        City&rsquo;s main is the City&rsquo;s to clean. If the City or a contractor points to your
        lateral, a cleaning and camera visit is how you clear it and document what was in it.
      </p>
      <p>
        For work in the public right-of-way, the City says to contact Public Works at 702-267-3600
        (the City&rsquo;s number) about a permit. We found no City statement on whether cleaning or
        a camera inspection needs one, so ask Public Works. To reach The Sewer Pros, call {lv.phone}.
        The Las Vegas Valley is a newer market for us; our longest-running work is in St. Louis and
        San Diego.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Buying a Henderson home',
      description:
        'We found no City rule requiring a lateral inspection or seller disclosure on sale, so a buyer who wants evidence has to ask. If the line is blocked or full of water, a camera cannot see under it and cleaning may have to come first.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers the City of Henderson. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [id('loc-lv-las-vegas'), id('loc-lv-north-las-vegas'), id('loc-lv-summerlin')],
    availabilityStatement: 'Henderson is a service area, not an office location.',
  },
  // All relevant questions from the Henderson location page and the service
  // page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-lv-henderson'),
    id('svc-sewer-cleaning-camera-inspection'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning and camera inspection in Henderson',
    body: 'Clear the line and see what the cleaning changed, with video and written findings when a camera is used.',
  },
}
