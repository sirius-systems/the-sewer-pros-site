/**
 * St. Louis City, MO + Sewer Cleaning & Camera Inspection
 * (`sl-stl-city-cleaning-camera`).
 *
 * Built from exactly two sources, as `sl-lv-city-cleaning-camera` is:
 *   LOCATION  `stLouisCityContent`  (content/pages/st-louis-city.tsx)
 *   SERVICE   `svc-sewer-cleaning-camera-inspection` v2 content
 *             (content/pages/services.tsx) and `./sl-blocks/...`
 *
 * Section recipe (each ties a St. Louis City fact to what THIS service does
 * or cannot do; swap the city or the service and the copy breaks):
 *   1. Responsibility        - the lateral is the owner's to the MSD main,
 *                              including under the street; cleaning does not
 *                              show which side a restriction was on.
 *   2. MSD vs. your lateral  - MSD investigates reported backups (MSD's number)
 *                              and where a cleaning and camera visit fits.
 *   3. Combined sewers       - wet-weather backups vs. a returning clog; the
 *                              camera cannot see under water.
 *   4. City repair program   - what it excludes (clogs, roots), what it asks
 *                              for (its own plumber's video), and what our
 *                              footage is and is not.
 *
 * ⚠ MSD AND CITY NUMBERS ARE THEIRS, not ours. The company phone is read from
 * `marketOperatingDetail`, never typed. No price, offer, response time,
 * guarantee, emergency or same-day claim. St. Louis City is a service area,
 * not an office. Repair and replacement are never presented as offered. The
 * City program page is dated 2014; the copy says to confirm with the City. The
 * location page's "about 58 percent built before 1940" figure is NOT used
 * (primary Census table check pending).
 *
 * Audit: docs/source-reports/st-louis/sl-stl-city-cleaning-camera.md
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/sewer-cleaning-camera-inspection'
import { stLouisCityContent } from './st-louis-city'

const id = (value: string): PageId => value as PageId

const stl = marketOperatingDetail['st-louis-mo']
if (stl === undefined) throw new Error('marketOperatingDetail is missing st-louis-mo')

const slots = pageImageSlots('sl-stl-city-cleaning-camera', {
  hero: {
    alt: 'Technician reviewing camera footage after a cleaning at a home',
    shot: 'Monitor showing a cleaned pipe with crew behind, residential property, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

const v2 = serviceContent[id('svc-sewer-cleaning-camera-inspection')]?.v2
if (v2 === undefined || stLouisCityContent.faq === undefined) {
  throw new Error('sl-stl-city-cleaning-camera: source content is missing')
}

const process: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

const CAMERA_SHOWS = 'What does a sewer camera inspection show?'

/**
 * Every question from the St. Louis City location page and the service page.
 * The location page's "What does a sewer camera inspection show?" is left out
 * because the service page asks the same question with the fuller answer (it
 * includes what a camera does not show); filtering it here keeps the service
 * answer instead of letting the shorter location copy win the merge.
 */
const faq = mergeRelevantFaqs(
  stLouisCityContent.faq.filter((f) => f.question !== CAMERA_SHOWS),
  v2.faq,
  [],
  'In St. Louis City',
)

export const stLouisCityCleaningCameraContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning & Camera Inspection in St. Louis City, MO',
  metaDescription:
    'Sewer cleaning and camera inspection in St. Louis City, MO. Your lateral is private to the MSD main, even under the street. See what a visit covers.',
  serviceDescription:
    'Sewer cleaning removes material that restricts flow in an accessible sewer line, and a camera inspection records its visible inside on video. The two can be combined in one visit, for properties in St. Louis City, Missouri.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: stLouisCityContent.sources,
  hero: {
    eyebrow: 'St. Louis City, MO',
    title: 'Sewer Cleaning and Camera Inspection in St. Louis City',
    intro: (
      <p>
        In St. Louis City, MSD maintains the public sewer main, and the lateral from your building
        to it is private property, even where it runs under the street or alley. A cleaning and
        camera visit works on that private line: it clears what can be cleared in the accessible
        line, and a camera may record the line before cleaning, after it, or both, so you can see
        what the cleaning changed.
      </p>
    ),
  },
  body: (
    <>
      <h2>Your lateral can run under the street, and cleaning cannot tell you where it ends</h2>
      <p>
        MSD says the lateral connecting your building to the public main, including its connection,
        is private property and normally the owner&rsquo;s to maintain and repair, even under the
        street or alley. The City says the same of the entire lateral from a home to the MSD main,
        so the line you clean may reach beneath the street.
      </p>
      <p>
        Cleaning clears a restriction. It does not tell you which side of the connection the
        restriction was on. The camera footage records conditions in the section it reaches, and you
        can ask where along the line each was seen, but it does not establish where the connection
        to the MSD main is or where your responsibility ends.
      </p>

      <h2>MSD investigates the backup, and your lateral is where a visit fits</h2>
      <p>
        If sewage is backing up through a floor drain, you smell sewage outside, or you see an
        overflow or a missing manhole cover, MSD asks you to report it right away at (314) 768-6260
        (MSD&rsquo;s number, not ours). MSD investigates whether the cause is the public sewer or
        your lateral.
      </p>
      <p>
        If MSD or a plumber points to your lateral, a cleaning and camera visit is how you clear it
        and document what was in it. To reach The Sewer Pros, call {stl.phone}.
      </p>

      <h2>Wet-weather backups in the City, and a clog that keeps returning</h2>
      <p>
        MSD says most of the City is served by combined sewers that can be overwhelmed in intense
        rain, which can cause wet-weather basement backups in affected areas. That is a system-level
        fact, not a finding about your lateral.
      </p>
      <p>
        A clog that returns after clearing may mean buildup, roots, or debris remain, or that a pipe
        condition is involved. Cleaning followed by a camera look can help show which. A camera
        cannot see under water, so in a line that is blocked and not draining, cleaning may have to
        come first.
      </p>

      <h2>The City program skips clogs and roots, so the footage is your own record</h2>
      <p>
        The City&rsquo;s Sewer Lateral Repair Program is aimed at severe damage under the public
        right-of-way, for residential properties of six or fewer units with fully paid real-estate
        taxes. The City says it does not cover clearing clogs or tree roots anywhere on the lateral.
        It asks for a licensed City plumber&rsquo;s statement and video, and the City decides
        eligibility.
      </p>
      <p>
        Our footage does not replace that step. It is your own recorded evidence, which can help you
        tell a clog or root problem the program does not cover from damage worth raising with the
        Street Division, so ask what documentation it accepts. The City&rsquo;s program page is
        dated 2014, so confirm current terms. We do not perform repairs or replacements, and a video
        that looks clear is not proof the whole line is in good condition.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A clog the City program does not cover',
      description:
        'The City says its lateral repair program does not cover clearing clogs or tree roots anywhere on the lateral. A cleaning and camera visit clears the line and records what was in it, so you know which problem you have.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process,
  coverage: {
    title: 'Other St. Louis area locations',
    intro:
      'This page covers St. Louis City. Sewer rules and lateral programs differ across the St. Louis area, so use the page for your address.',
    pageIds: [
      id('loc-stl-chesterfield'),
      id('loc-stl-ballwin'),
      id('loc-stl-florissant'),
      id('loc-stl-st-charles'),
    ],
    availabilityStatement: 'St. Louis City is a service area, not an office location.',
  },
  // All relevant questions from the St. Louis City location page and the
  // service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-stl-st-louis-city'),
    id('svc-sewer-cleaning-camera-inspection'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning and camera inspection in St. Louis City',
    body: 'Clear the line and see what the cleaning changed, with video and written findings when a camera is used.',
  },
}
