/**
 * Escondido, CA + Preventative Sewer Maintenance (`sl-escondido-maintenance`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43.
 *
 * One local source (`escondidoContent`, `loc-sd-escondido`) x one service
 * source (`svc-preventative-sewer-maintenance`, its `v2` block). Nothing here
 * is new research. Section recipe, each tied to what THIS service does or
 * cannot:
 *   1. responsibility - section 22-165 puts maintaining and cleaning the lateral
 *      and its cost on the owner; the City maintains the main; we state no
 *      interval because the line's history decides
 *   2. systemExplainer - the City's call-first guidance and debris pushed into
 *      the public line vs. a recorded camera pass before and, when included,
 *      after cleaning
 *   3. municipalProgram - the owner's cleanout duty (b) and the permit before
 *      any repair vs. a visit that is inspection and cleaning, not repair
 *   4. housingAge + municipalProgram - none found; Census median year built and
 *      the dated 2012 plan figure (homes and City mains, not laterals) vs. the
 *      service's risk factors; no default schedule
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * ⚠ The Escondido location page does NOT say the City requires or sets a
 * schedule for inspecting or cleaning existing laterals, so this page says
 * nothing about one (it states no interval at all). ⚠ NO INTERVAL, SCHEDULE, PLAN OR CONTRACT is claimed for The Sewer
 * Pros. The service page states none. Section 22-165 is quoted for at most nine
 * words; the rest is paraphrase, worded as `sl-escondido-cleaning` words it. The
 * page never says the City pays for damage, never says a grant exists, and never
 * says who may perform lateral repair. CITY NUMBERS ARE THE CITY'S, not ours. No
 * company phone, office, price, offer, response time or guarantee appears.
 * Repair and replacement are never offered.
 *
 * Audit: docs/source-reports/san-diego/sl-escondido-maintenance.md
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { escondidoContent } from './san-diego-escondido'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/preventative-sewer-maintenance'

const id = (value: string): PageId => value as PageId

const SERVICE_ID = 'svc-preventative-sewer-maintenance'

const v2 = serviceContent[id(SERVICE_ID)]?.v2
if (v2 === undefined || escondidoContent.faq === undefined) {
  throw new Error('sl-escondido-maintenance: source content is missing')
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-escondido-maintenance', {
  hero: {
    alt: 'Technician on a preventative sewer maintenance visit at a home',
    shot: 'Technician at a residential cleanout during a maintenance visit, monitor in frame, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the Escondido location page and the maintenance service
 * page, minus three Escondido questions: "What does a sewer camera inspection
 * show?" (the service page asks "What does a sewer camera inspection find?"),
 * "Do you repair or replace sewer lines?" (the service page's "Do you offer
 * sewer repair or replacement?" answers it in full), and "Is a sewer inspection
 * required when buying an Escondido home?", which is not about maintenance.
 */
const faq = mergeRelevantFaqs(
  escondidoContent.faq,
  v2.faq,
  [
    'What does a sewer camera inspection show?',
    'Do you repair or replace sewer lines?',
    'Is a sewer inspection required when buying an Escondido home?',
  ],
  'In Escondido',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const escondidoMaintenanceContent: ServiceLocationPageContent = {
  seoTitle: 'Preventative Sewer Maintenance in Escondido, CA',
  metaDescription:
    'Preventative sewer maintenance in Escondido, CA. Municipal Code 22-165 puts upkeep of the lateral on the owner. See what a camera and cleaning visit covers.',
  serviceDescription:
    "Preventative sewer maintenance is planned inspection and cleaning of a home's drain and sewer line before buildup or an obstruction causes a backup, for properties in Escondido, California. It is diagnostic and cleaning work, not repair.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: escondidoContent.sources,
  hero: {
    eyebrow: 'Escondido, CA',
    title: 'Preventative Sewer Maintenance in Escondido',
    intro: (
      <p>
        In Escondido, section 22-165 of the Municipal Code puts maintaining and cleaning the sewer
        lateral on the property owner, up to and including the connection to the City&rsquo;s main.
        Preventative sewer maintenance is the planned version with evidence: a camera pass that
        records the visible condition of the accessible line, and cleaning when it is appropriate,
        before buildup becomes a backup.
      </p>
    ),
  },
  body: (
    <>
      <h2>Upkeep of the lateral is the owner&rsquo;s, and so is its cost</h2>
      <p>
        Section 22-165 of the Escondido Municipal Code makes the owner responsible for all
        maintenance, repair, replacement, cleaning and removal of blockages in the sewer connection
        lateral, and for all costs of that work. The City maintains the public sewer main, and says
        its crews routinely clean and inspect sewer mains. That work does not reach your lateral.
      </p>
      <p>
        We state no inspection or cleaning interval, for the City or for a visit. The line&rsquo;s
        own history decides what is useful.
      </p>

      <h2>The City asks to be called before a lateral is cleaned, so look before and after</h2>
      <p>
        The City&rsquo;s Sewer System Management Plan says its public education literature stresses
        the need to call the City before cleaning a private lateral, so the City can remove any
        debris that cleaning pushes into the public sewer line. That is the City&rsquo;s guidance,
        not a program and not a requirement to use our services.
      </p>
      <p>
        A maintenance visit adds a recorded camera pass through the accessible section, with
        anything that limits the view noted, then cleaning if buildup or an obstruction is present,
        and a second look when one is included. The footage records where along the line a condition
        sits. It does not establish where the connection to the main is.
      </p>

      <h2>The cleanout is yours to keep reachable, and repairs need a permit</h2>
      <p>
        Section 22-165(b) makes the owner responsible for locating, exposing and maintaining the
        property line cleanout, so the lateral can be inspected, cleaned and cleared. A cleanout is
        the usual entry point for a visit, so know where yours is.
      </p>
      <p>
        A maintenance visit is inspection and cleaning. It is not repair, and The Sewer Pros does
        not perform repairs. The City says a repair permit is required before any lateral repair
        begins, even on private property, and gives the Building Division at (760) 839-4647 (the
        City&rsquo;s number, not ours).
      </p>

      <h2>No program found, and a 1981 median is not a schedule</h2>
      <p>
        We found no City of Escondido lateral repair, replacement, grant or reimbursement program,
        so upkeep falls on the owner. That is &ldquo;none found&rdquo;, not a statement that none
        exists. The Census median year built for Escondido is 1981, and about half of housing units
        were built in the 1970s and 1980s. The City&rsquo;s 2012 Wastewater Master Plan reported
        that about half of its gravity sewer mains were installed before 1980.
      </p>
      <p>
        Those figures describe homes and City mains, not laterals, so they show nothing about your
        line. A line with no history of problems does not need a default schedule. What raises the
        question is the line: mature trees near it, buildup that returned after a cleaning, or
        earlier backups never documented on camera.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'An address whose sewer agency is unclear',
      description:
        'The City’s rules and numbers apply to addresses on the City of Escondido’s sewer system. Vallecitos Water District serves parts of Escondido and some properties are on septic. We did not find a City map of its sewer service area, so ask City Public Works or check the Vallecitos sewer service page. A maintenance visit does not tell you which applies.',
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: steps,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of Escondido. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-carlsbad'),
      id('loc-sd-oceanside'),
      id('loc-sd-chula-vista'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'Escondido is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-sd-escondido'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request preventative sewer maintenance in Escondido',
    body: 'Tell us what you have noticed and what the line’s history looks like. We will talk through access and what a visit would include.',
  },
}
