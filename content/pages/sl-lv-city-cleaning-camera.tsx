/**
 * City of Las Vegas, NV + Sewer Cleaning & Camera Inspection
 * (`sl-lv-city-cleaning-camera`).
 *
 * Built from exactly two sources, as `sl-henderson-cleaning-camera` is:
 *   LOCATION  `lasVegasCityContent`  (content/pages/las-vegas-las-vegas.tsx)
 *   SERVICE   `svc-sewer-cleaning-camera-inspection` v2 content
 *             (content/pages/services.tsx) and `./sl-blocks/...`
 *
 * Section recipe (each ties a City of Las Vegas fact to what THIS service does
 * or cannot do; swap the city or the service and the copy breaks):
 *   1. Responsibility        - the lateral is the owner's up to the City main,
 *                              including under the street; cleaning does not
 *                              show which side a restriction was on.
 *   2. Main stoppage vs. us  - the City's main-stoppage contact (the CITY's
 *                              number) and where a visit fits.
 *   3. Housing age           - ACS figures vs. a returning clog.
 *   4. No City program       - "none found", the private warranty, the permit
 *                              gap for cleaning, no repairs by us.
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours. The company phone is read from
 * `marketOperatingDetail`, never typed. No price, offer, response time,
 * guarantee, emergency or same-day claim. Las Vegas is a service area, not an
 * office. Repair and replacement are never presented as offered. Two of the
 * City pages behind the location page date from 2021; the copy says to
 * confirm with the City.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { lasVegasCityContent } from './las-vegas-las-vegas'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-cleaning-camera-inspection'

const id = (value: string): PageId => value as PageId

const lv = marketOperatingDetail['las-vegas-nv']
if (lv === undefined) throw new Error('marketOperatingDetail is missing las-vegas-nv')

const slots = pageImageSlots('sl-lv-city-cleaning-camera', {
  hero: {
    alt: 'Technician reviewing camera footage after a cleaning at a Las Vegas home',
    shot: 'Monitor showing a cleaned pipe with crew behind, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-sewer-cleaning-camera-inspection')]?.v2
if (v2 === undefined || lasVegasCityContent.faq === undefined) {
  throw new Error('sl-lv-city-cleaning-camera: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

const CAMERA_SHOWS = 'What does a sewer camera inspection show?'

/**
 * Every question from the Las Vegas location page and the service page. The
 * location page's "What does a sewer camera inspection show?" is left out
 * because the service page asks the same question with the fuller answer
 * (it includes what a camera does not show); filtering it here keeps the
 * service answer instead of letting the shorter location copy win the merge.
 */
const faq = mergeRelevantFaqs(
  lasVegasCityContent.faq.filter((f) => f.question !== CAMERA_SHOWS),
  v2.faq,
  [],
  'In Las Vegas',
)

export const lasVegasCityCleaningCameraContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning & Camera Inspection in Las Vegas, NV',
  metaDescription:
    'Sewer cleaning and camera inspection in Las Vegas, NV. The City says your lateral is yours up to its main, even under the street. See what a visit covers.',
  serviceDescription:
    'Sewer cleaning removes material that restricts flow in an accessible sewer line, and a camera inspection records its visible inside on video. The two can be combined in one visit, for properties in the City of Las Vegas, Nevada.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: lasVegasCityContent.sources,
  hero: {
    eyebrow: 'Las Vegas, NV',
    title: 'Sewer Cleaning and Camera Inspection in Las Vegas',
    intro: (
      <p>
        In the City of Las Vegas, the City maintains the public sewer main and says owners maintain
        the private sewer lateral up to the point where it connects into that main. A cleaning and
        camera visit works on the private side of that connection: it clears what can be cleared in
        the accessible line, and a camera may record the line before cleaning, after it, or both,
        so you can see what the cleaning changed.
      </p>
    ),
  },
  body: (
    <>
      <h2>Your lateral can run under the street, and cleaning cannot tell you where it ends</h2>
      <p>
        The City of Las Vegas says private property owners maintain private sewer laterals up to
        the point where they connect into the City sewer main. Its sewer standards addenda say a
        private sewer stays private, even the portion in the public right-of-way, until that
        connection, so the line you clean may reach beneath the street.
      </p>
      <p>
        Cleaning clears a restriction. It does not tell you which side of the connection the
        restriction was on. The camera footage records where along the line a condition sits,
        measured from where the camera entered, but it does not establish where the connection to
        the City main is or where your responsibility ends. For point-of-connection
        conditions, the City lists Sanitary Sewer Engineering (702-229-6541, the City&rsquo;s number,
        not ours).
      </p>

      <h2>A City main stoppage is the City&rsquo;s, and your lateral is where a visit fits</h2>
      <p>
        The City says a stoppage in its sewer main affects multiple upstream properties and can
        overflow manholes, and it asks you to call its Streets &amp; Sanitation Division at
        702-229-6227 (the City&rsquo;s number, not ours) for that.
      </p>
      <p>
        For a problem specific to your property, the City says a contractor may need to
        investigate. If the City or a contractor points to your lateral, a cleaning and camera
        visit is how you clear it and document what was in it. To reach The Sewer Pros, call{' '}
        {lv.phone}. The Las Vegas Valley is a newer market for us; our longest-running work is in
        St. Louis and San Diego.
      </p>

      <h2>A 1990s Las Vegas home does not answer whether the line is clear</h2>
      <p>
        Las Vegas&rsquo;s median year built is 1994, according to the U.S. Census Bureau&rsquo;s
        American Community Survey (2020-2024 5-year estimates, Las Vegas city), and our arithmetic
        on the Census rows puts 61.3 percent of housing units at 1990 or later. The year a house was built does not tell you what is in
        its line today.
      </p>
      <p>
        A clog that returns after clearing may mean buildup, roots, or debris remain, or that a
        pipe condition is involved. Cleaning followed by a camera look can help show which.
      </p>

      <h2>No City repair program found, so the footage is what you compare against</h2>
      <p>
        We found no City lateral repair, replacement, grant or reimbursement program on the City
        pages we reviewed. That is &ldquo;none found&rdquo;, not a statement that none exists. The
        City does promote an optional warranty from a private company, a product you buy, not
        City assistance. We found no City statement on whether cleaning or a camera inspection
        needs a permit, so ask Building &amp; Safety at 702-229-6251 (the City&rsquo;s number).
      </p>
      <p>
        We do not perform repairs or replacements. A line that flows again, or a video that looks
        clear, is not proof that the whole line or the ground around it is in good condition, so
        if a returning clog leads to a repair estimate, the footage and findings are what you
        compare it against.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Buying a Las Vegas home',
      description:
        'We found no rule on the City pages we reviewed requiring a lateral inspection or seller disclosure on sale, and the City says the private lateral is the owner’s, so a buyer who wants evidence has to ask. If the line is blocked or full of water, a camera cannot see under it and cleaning may have to come first.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers the City of Las Vegas. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [id('loc-lv-henderson'), id('loc-lv-north-las-vegas'), id('loc-lv-summerlin')],
    availabilityStatement: 'Las Vegas is a service area, not an office location.',
  },
  // All relevant questions from the Las Vegas location page and the service
  // page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-lv-las-vegas'),
    id('svc-sewer-cleaning-camera-inspection'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning and camera inspection in Las Vegas',
    body: 'Clear the line and see what the cleaning changed, with video and written findings when a camera is used.',
  },
}
