/**
 * San Marcos, CA + Preventative Sewer Maintenance (`sl-san-marcos-maintenance`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43.
 *
 * One local source (`sanMarcosContent`, `loc-sd-san-marcos`) x one service
 * source (`svc-preventative-sewer-maintenance`, its `v2` block). Nothing here
 * is new research. Section recipe, each tied to what THIS service does or
 * cannot:
 *   1. responsibility - the City is not the provider; each agency's wording
 *      shown separately; where Vallecitos serves, upkeep of the lateral is the
 *      owner's, and no district inspection requirement for existing laterals
 *      was found
 *   2. systemExplainer - the district's rainwater and smoke-testing work on its
 *      own lines vs. a recorded camera pass on the accessible lateral
 *   3. systemExplainer - the district's scale across its whole service area vs.
 *      what the line at one property needs; no default schedule
 *   4. municipalProgram - no lateral program found, installers, what a visit is
 *      not
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * ⚠ The San Marcos location page does NOT say any agency requires or sets a
 * schedule for inspecting or cleaning existing laterals, so this page does not
 * say it. ⚠ NO INTERVAL, SCHEDULE, PLAN OR CONTRACT is claimed for The Sewer
 * Pros. The service page states none. The location page states no housing-age
 * figure and its sources show no current date, so none is given. Which agency
 * serves an address is never stated, and no rule of Vista Irrigation District or
 * Rincon del Diablo Municipal Water District is stated. DISTRICT NUMBERS ARE THE
 * DISTRICT'S. No company phone, office, price, offer, response time or guarantee
 * appears. Repair and replacement are never offered.
 *
 * Audit: docs/source-reports/san-diego/sl-san-marcos-maintenance.md
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { sanMarcosContent } from './san-diego-san-marcos'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/preventative-sewer-maintenance'

const id = (value: string): PageId => value as PageId

const SERVICE_ID = 'svc-preventative-sewer-maintenance'

const v2 = serviceContent[id(SERVICE_ID)]?.v2
if (v2 === undefined || sanMarcosContent.faq === undefined) {
  throw new Error('sl-san-marcos-maintenance: source content is missing')
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-san-marcos-maintenance', {
  hero: {
    alt: 'Technician on a preventative sewer maintenance visit at a home',
    shot: 'Technician at a residential cleanout during a maintenance visit, monitor in frame, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the San Marcos location page and the maintenance
 * service page, minus three San Marcos questions: "What does a sewer camera
 * inspection show?" (the service page asks "What does a sewer camera
 * inspection find?"), "Do you repair or replace sewer lines?" (the service
 * page's "Do you offer sewer repair or replacement?" answers it in full), and
 * "Is a sewer inspection required when buying a San Marcos home?", which is
 * not about maintenance.
 */
const faq = mergeRelevantFaqs(
  sanMarcosContent.faq,
  v2.faq,
  [
    'What does a sewer camera inspection show?',
    'Do you repair or replace sewer lines?',
    'Is a sewer inspection required when buying a San Marcos home?',
  ],
  'In San Marcos',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const sanMarcosMaintenanceContent: ServiceLocationPageContent = {
  seoTitle: 'Preventative Sewer Maintenance in San Marcos, CA',
  metaDescription:
    'Preventative sewer maintenance in San Marcos, CA. Where Vallecitos serves, the lateral is the owner’s to maintain. See what a visit covers.',
  serviceDescription:
    "Preventative sewer maintenance is planned inspection and cleaning of a home's drain and sewer line before buildup or an obstruction causes a backup, for properties in San Marcos, California. It is diagnostic and cleaning work, not repair.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanMarcosContent.sources,
  hero: {
    eyebrow: 'San Marcos, CA',
    title: 'Preventative Sewer Maintenance in San Marcos',
    intro: (
      <p>
        The City of San Marcos says it does not provide sewer service, and one of three agencies
        does, depending on location. Where Vallecitos Water District serves a property, the district
        says the owner is responsible for the operation and maintenance of the lateral from the
        building through its connection to the main. Preventative sewer maintenance is the planned
        version with evidence: a camera pass that records the visible condition of the accessible
        line, and cleaning when it is appropriate, before buildup becomes a backup.
      </p>
    ),
  },
  body: (
    <>
      <h2>Three agencies, and who maintains which pipe</h2>
      <ul>
        <li>
          <strong>City of San Marcos:</strong> it does not provide water or sewer service. One of
          three agencies does, depending on location.
        </li>
        <li>
          <strong>Vallecitos Water District:</strong> it maintains the sewer mains, and the owner is
          responsible for the lateral&rsquo;s operation, maintenance and repair from the building
          through its connection to the main.
        </li>
        <li>
          <strong>Vista Irrigation District and Rincon del Diablo Municipal Water District:</strong>{' '}
          named by the City. We make no claim about their rules, so ask the agency.
        </li>
      </ul>
      <p>
        We do not say which agency serves your address. We found no district inspection requirement
        for existing laterals, and we state no interval for a maintenance visit, because the
        line&rsquo;s own history decides what is useful.
      </p>

      <h2>The district tests its lines, so look at yours</h2>
      <p>
        Vallecitos says rainwater can enter its sewer lines, and that it smoke-tests its sanitary
        sewer lines for cracks and other openings. It describes that testing as an assessment of the
        district&rsquo;s system rather than private systems. That is not an inspection of your
        lateral. A maintenance visit adds a recorded camera pass through the accessible section,
        with anything that limits the view noted, then cleaning if buildup or an obstruction is
        present, and a second look when one is included.
      </p>
      <ul>
        <li>
          The footage records where along the line a condition sits, measured from where the camera
          entered.
        </li>
        <li>It does not establish where the lateral meets the district&rsquo;s main.</li>
        <li>Cleaning does not repair pipe. The Sewer Pros does not perform repairs.</li>
      </ul>

      <h2>A large district does not tell you what one lateral needs</h2>
      <p>
        The district reports more than 284 miles of sewer pipe and four lift stations across its
        whole service area, which reaches beyond San Marcos. The pages we reviewed give no age for
        the mains or for the laterals serving any neighborhood, and nothing on them says what an
        individual lateral looks like. A line with no history of problems does not need a default
        schedule. What raises the question is the line: buildup that returned after a cleaning, or
        earlier backups never documented on camera.
      </p>

      <h2>No lateral program found, and who does the work</h2>
      <p>
        We did not find a Vallecitos grant, reimbursement or repair program for an existing lateral.
        That is &ldquo;none found&rdquo;, not a statement that none exists, and the district&rsquo;s
        pages show no current date. Its one reimbursement agreement is for a main-line extension,
        not for routine upkeep.
      </p>
      <p>
        The district says it does not install private sewer connections, and a contractor the owner
        selects does that work. A maintenance visit is inspection and cleaning. It is not an
        emergency response, and for a sewer spill the district says to call 911.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A lateral nobody has documented',
      description:
        'Where Vallecitos serves the property, the district puts the lateral’s upkeep on the owner, and we found no inspection requirement for existing laterals. A maintenance pass records the accessible line on camera so there is a baseline to compare against later.',
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: steps,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of San Marcos. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-carlsbad'),
      id('loc-sd-escondido'),
      id('loc-sd-oceanside'),
      id('loc-sd-chula-vista'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'San Marcos is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-sd-san-marcos'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request preventative sewer maintenance in San Marcos',
    body: 'Tell us what you have noticed and what the line’s history looks like. We will talk through access and what a visit would include.',
  },
}
