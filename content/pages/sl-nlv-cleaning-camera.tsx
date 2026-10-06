/**
 * City of North Las Vegas, NV + Sewer Cleaning & Camera Inspection
 * (`sl-nlv-cleaning-camera`).
 *
 * Built from exactly two sources, as `sl-lv-city-cleaning-camera` is:
 *   LOCATION  `northLasVegasContent`  (content/pages/las-vegas-north-las-vegas.tsx)
 *   SERVICE   `svc-sewer-cleaning-camera-inspection` v2 content
 *             (content/pages/services.tsx) and `./sl-blocks/...`
 *
 * Section recipe (each ties a North Las Vegas fact to what THIS service does
 * or cannot do; swap the city or the service and the copy breaks):
 *   1. Blockage vs. breakage - the City words them in two statements; cleaning
 *                              clears a restriction and does not say which
 *                              statement applies; footage does not establish
 *                              the connection or the property boundary.
 *   2. A City-side finding   - plumber's video may go to the Utilities
 *                              Department (the CITY's number); a visit
 *                              produces video and findings; no claim the video
 *                              meets any City requirement.
 *   3. No local evidence     - the City pages say nothing about combined or
 *                              separate, main age or local conditions (and no
 *                              housing-age figures exist for this page); a
 *                              returning clog needs the footage.
 *   4. No City program found - "none found", the optional third-party plan,
 *                              homeowner's insurance, the permit gap for
 *                              cleaning, no repairs by us.
 *
 * ⚠ CITY NUMBER IS THE CITY'S, not ours. The company phone is read from
 * `marketOperatingDetail`, never typed. No price, offer, response time,
 * guarantee, emergency or same-day claim. North Las Vegas is a service area,
 * not an office. Repair and replacement are never presented as offered. The
 * City's pages carry no update date; the copy says to confirm with the City.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { northLasVegasContent } from './las-vegas-north-las-vegas'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-cleaning-camera-inspection'

const id = (value: string): PageId => value as PageId

const lv = marketOperatingDetail['las-vegas-nv']
if (lv === undefined) throw new Error('marketOperatingDetail is missing las-vegas-nv')

const slots = pageImageSlots('sl-nlv-cleaning-camera', {
  hero: {
    alt: 'Technician reviewing camera footage after a cleaning at a North Las Vegas home',
    shot: 'Monitor showing a cleaned pipe with crew behind, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-sewer-cleaning-camera-inspection')]?.v2
if (v2 === undefined || northLasVegasContent.faq === undefined) {
  throw new Error('sl-nlv-cleaning-camera: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

const CAMERA_SHOWS = 'What does a sewer camera inspection show?'

/**
 * Every question from the North Las Vegas location page and the service page.
 * The location page's "What does a sewer camera inspection show?" is left out
 * because the service page asks the same question with the fuller answer
 * (it includes what a camera does not show); filtering it here keeps the
 * service answer instead of letting the shorter location copy win the merge.
 */
const faq = mergeRelevantFaqs(
  northLasVegasContent.faq.filter((f) => f.question !== CAMERA_SHOWS),
  v2.faq,
  [],
  'In North Las Vegas',
)

export const northLasVegasCleaningCameraContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning & Camera Inspection in North Las Vegas, NV',
  metaDescription:
    'Sewer cleaning and camera inspection in North Las Vegas, NV. The City words blockages and breakages differently. See what a visit covers and what it cannot show.',
  serviceDescription:
    'Sewer cleaning removes material that restricts flow in an accessible sewer line, and a camera inspection records its visible inside on video. The two can be combined in one visit, for properties in the City of North Las Vegas, Nevada.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: northLasVegasContent.sources,
  hero: {
    eyebrow: 'North Las Vegas, NV',
    title: 'Sewer Cleaning and Camera Inspection in North Las Vegas',
    intro: (
      <p>
        In the City of North Las Vegas, the City says the homeowner&rsquo;s responsibility for the
        sewer service lateral ends at the connection to the main in the street. A cleaning and
        camera visit works on the lateral side of that connection: it clears what can be cleared in
        the accessible line, and a camera may record the line before cleaning, after it, or both,
        so you can see what the cleaning changed.
      </p>
    ),
  },
  body: (
    <>
      <h2>Cleaning clears a blockage, and the City words a blockage and a breakage differently</h2>
      <p>
        The City of North Las Vegas says the homeowner&rsquo;s responsibility for the sewer service
        lateral ends at the connection to the main in the street. For a blockage, its water leaks
        page says the homeowner is responsible throughout the entire pipe until the connection to
        the City&rsquo;s main. For a breakage, it says the homeowner is responsible until the
        point where the sewer line crosses the boundary of the property. We show both as
        the City states them.
      </p>
      <p>
        Cleaning clears a restriction. It does not tell you which statement applies. The camera
        footage records where along the line a condition sits, measured from where the camera
        entered, but it does not establish where the connection to the City main is or where the
        property boundary sits.
      </p>

      <h2>If a plumber finds the problem on the City side, the City says video may go to it</h2>
      <p>
        The City says that if a plumber has inspected the line and determined a breakage or
        blockage is on the City side, video evidence may be submitted to its Utilities Department
        for review. A cleaning and camera visit records the line, and you receive the video and
        written findings. We did not find how video is submitted or what the City does
        afterward, and we make no claim that our video meets any City requirement.
      </p>
      <p>
        Contact the Utilities Department at 702-633-1484 (the City&rsquo;s number, not ours) before
        you pay for work. It is a customer-service number, not a sewer emergency line. To reach The Sewer Pros, call {lv.phone}. The Las Vegas Valley is a newer market for
        us; our longest-running work is in St. Louis and San Diego.
      </p>

      <h2>No City page says what clogs North Las Vegas lines, so the footage is your evidence</h2>
      <p>
        The City pages we reviewed do not say whether the system is combined or separate, how old
        its mains are, or what recurring conditions occur locally. Only an inspection of your line
        can show its condition.
      </p>
      <p>
        A clog that returns after clearing may mean buildup, roots, or debris remain, or that a
        pipe condition is involved. Cleaning followed by a camera look can help show which.
      </p>

      <h2>No City repair program found, so the footage is what you compare against</h2>
      <p>
        We found no City lateral repair, replacement, grant or reimbursement program on the City
        pages we reviewed. That is &ldquo;none found&rdquo;, not a statement that none exists. The
        City says it has partnered with a separate company to offer optional insurance coverage
        for service lines, a product you buy, not City assistance, and it says most basic
        homeowner&rsquo;s insurance policies do not cover service laterals. We found no City
        statement on whether cleaning or a camera inspection needs a permit, so ask the Utilities
        Department.
      </p>
      <p>
        We do not perform repairs or replacements. A line that flows again is not proof that the whole line
        or the ground around it is in good condition, so if a returning clog leads to a repair
        estimate, the footage and findings are what you compare it against.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Buying a North Las Vegas home',
      description:
        'We found no rule on the City pages we reviewed requiring a lateral inspection, certification or seller disclosure on sale, and the City says the lateral is the owner’s up to the main, so a buyer who wants evidence has to ask. If the line is blocked or full of water, a camera cannot see under it and cleaning may have to come first.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers North Las Vegas. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [id('loc-lv-las-vegas'), id('loc-lv-henderson'), id('loc-lv-summerlin')],
    availabilityStatement: 'North Las Vegas is a service area, not an office location.',
  },
  // All relevant questions from the North Las Vegas location page and the
  // service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-lv-north-las-vegas'),
    id('svc-sewer-cleaning-camera-inspection'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning and camera inspection in North Las Vegas',
    body: 'Clear the line and see what the cleaning changed, with video and written findings when a camera is used.',
  },
}
