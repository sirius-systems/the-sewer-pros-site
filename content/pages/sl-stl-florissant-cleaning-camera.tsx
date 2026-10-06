/**
 * Florissant, MO + Sewer Cleaning & Camera Inspection
 * (`sl-florissant-cleaning-camera`).
 *
 * Built from exactly two sources, as `sl-nlv-cleaning-camera` is:
 *   LOCATION  `florissantContent`  (content/pages/st-louis-florissant.tsx)
 *   SERVICE   `svc-sewer-cleaning-camera-inspection` v2 content
 *             (content/pages/services.tsx) and `./sl-blocks/...`
 *
 * Section recipe (each ties a Florissant fact to what THIS service does or
 * cannot do; swap the city or the service and the copy breaks):
 *   1. MSD and the owner     - the lateral is private; the visit works on
 *                              accessible private lines; a building backup goes
 *                              to MSD first (MSD's number); company phone.
 *   2. Before or after       - the City's annual-cabling wording and "not a
 *                              substitute for maintenance"; no required order
 *                              for the camera and the cleaning.
 *   3. The City's evaluation - its contracted plumber and Engineer; the $300
 *                              deposit is the CITY's term; your footage is your
 *                              own record, not a substitute.
 *   4. Mid-century homes     - 21,229 units, mostly 1950-1979; no pipe material
 *                              published; MSD projects say nothing about one
 *                              lateral; a blocked, full line may need cleaning
 *                              first.
 *
 * ⚠ CITY AND MSD NUMBERS AND DOLLAR TERMS ARE THEIRS, not ours. The company
 * phone is read from `marketOperatingDetail`, never typed. No price, offer,
 * response time, guarantee, emergency or same-day claim. Florissant is a
 * service area, not an office. Repair and replacement are never presented as
 * offered. The City's pages carry no update date; the copy says to confirm with
 * the City. Nothing from the St. Louis City, Chesterfield, Ballwin or
 * St. Charles pages is used.
 *
 * Audit: docs/source-reports/st-louis/sl-florissant-cleaning-camera.md
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { florissantContent } from './st-louis-florissant'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-cleaning-camera-inspection'

const id = (value: string): PageId => value as PageId

const stl = marketOperatingDetail['st-louis-mo']
if (stl === undefined) throw new Error('marketOperatingDetail is missing st-louis-mo')

const slots = pageImageSlots('sl-florissant-cleaning-camera', {
  hero: {
    alt: 'Technician reviewing camera footage after a cleaning',
    shot: 'Monitor showing a cleaned pipe with crew behind, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-sewer-cleaning-camera-inspection')]?.v2
if (v2 === undefined || florissantContent.faq === undefined) {
  throw new Error('sl-florissant-cleaning-camera: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

const CAMERA_SHOWS = 'What does a sewer camera inspection show?'

/**
 * Every question from the Florissant location page and the service page.
 * The location page's "What does a sewer camera inspection show?" is left out
 * because the service page asks the same question with the fuller answer (it
 * includes what a camera does not show); filtering it here keeps the service
 * answer instead of letting the shorter location copy win the merge.
 */
const faq = mergeRelevantFaqs(
  florissantContent.faq.filter((f) => f.question !== CAMERA_SHOWS),
  v2.faq,
  [],
  'In Florissant',
)

export const florissantCleaningCameraContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning & Camera Inspection in Florissant, MO',
  metaDescription:
    'Sewer cleaning and camera inspection in Florissant, MO. MSD handles the public sewer; the lateral is yours. See what a visit covers and what a camera cannot.',
  serviceDescription:
    'Sewer cleaning removes material that restricts flow in an accessible sewer line, and a camera inspection records its visible inside on video. The two can be combined in one visit, for properties in Florissant, Missouri.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: florissantContent.sources,
  hero: {
    eyebrow: 'Florissant, MO',
    title: 'Sewer Cleaning and Camera Inspection in Florissant',
    intro: (
      <p>
        In Florissant, MSD says the lateral from your building to the public sewer, including its
        connection, is private property that the owner maintains. A cleaning and camera visit works
        on that private line: it clears what can be cleared in the accessible pipe, and a camera may
        record the line before cleaning, after it, or both, so you can see what the cleaning
        changed.
      </p>
    ),
  },
  body: (
    <>
      <h2>MSD&rsquo;s side ends at the public sewer, and the visit works on yours</h2>
      <p>
        MSD says the lateral line and its connection to the public sewer are private property, and
        that the owner maintains and repairs it. The public sewer is MSD&rsquo;s side. For a
        building backup, MSD asks you to call it first at (314) 768-6260 (MSD&rsquo;s number, not
        ours). To reach The Sewer Pros, call {stl.phone}.
      </p>
      <p>
        Our visit covers accessible private-property lines, not public mains. Footage records where
        along the line a condition was seen, but it does not show where the connection is, and we
        did not find a published rule on who owns the part of a lateral under the street.
      </p>

      <h2>Before or after cleaning: the City expects owners to maintain the line</h2>
      <p>
        The City says routine maintenance may mean annual cabling, especially with large trees or
        bushes, and that its Sewer Lateral Insurance Program is not a substitute for regular
        maintenance. The program makes spot repairs, usually about 10 feet.
      </p>
      <p>
        Cleaning removes the obstruction, not necessarily what is causing it. There is no single
        required order. A camera first can help choose the method, a camera after shows what the
        cleaning changed, and if the line is blocked and full of water, cleaning may have to come
        first because a camera cannot see under water.
      </p>

      <h2>What the City&rsquo;s plumber evaluates, and what your own footage adds</h2>
      <p>
        The City says its contracted plumber does a cable and camera evaluation for an application
        and that the City Engineer reviews the video report. The $300 deposit (the City&rsquo;s
        term) is kept if the application is denied, and the City lists a line that is open and in
        serviceable condition, small defects or hairline cracks, and a blockage within five feet of
        the foundation among its reasons.
      </p>
      <p>
        After a cleaning and camera visit you have the video and written findings, your own record
        of what came out and what remains. We make no claim that the City accepts an outside report.
        The City&rsquo;s page is undated, so confirm current terms with the Engineering Division at
        (314) 839-7643 (the City&rsquo;s number, not ours). The City&rsquo;s crew performs approved
        repairs. The Sewer Pros does not.
      </p>

      <h2>Mid-century homes: age and MSD projects say little about one lateral</h2>
      <p>
        The City&rsquo;s 2026-2030 Consolidated Plan reports 21,229 housing units in Florissant and
        says the vast majority were built between 1950 and 1979. Neither MSD nor the City publishes
        a pipe material or installation era. MSD&rsquo;s Brookshire project describes about 6,000
        feet of new pipe in the Wedgewood neighborhood, and a Lindsay Lane project is listed as
        tentative, but a public project does not show the condition of any one lateral.
      </p>
      <p>
        A line that flows again is not proof the pipe is sound, and a blockage is not proof it is
        broken. Cleaning followed by a camera look can help show which.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A line the City calls open and serviceable',
      description:
        'The City lists a line that is open and in serviceable condition among its reasons to deny an application, and keeps its $300 deposit if denied. Cleaning followed by a camera look can show whether what came out was buildup or whether a visible pipe condition remains.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other St. Louis area locations',
    intro:
      'This page covers Florissant. Each St. Louis municipality has its own sewer rules and lateral program, so use the page for your address.',
    pageIds: [
      id('loc-stl-st-louis-city'),
      id('loc-stl-chesterfield'),
      id('loc-stl-ballwin'),
      id('loc-stl-st-charles'),
    ],
    availabilityStatement: 'Florissant is a service area, not an office location.',
  },
  // All relevant questions from the Florissant location page and the service
  // page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-stl-florissant'),
    id('svc-sewer-cleaning-camera-inspection'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning and camera inspection in Florissant',
    body: 'Clear the line and see what the cleaning changed, with video and written findings when a camera is used.',
  },
}
