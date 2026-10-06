/**
 * Chula Vista, CA + Preventative Sewer Maintenance (`sl-chula-vista-maintenance`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43.
 *
 * One local source (`chulaVistaContent`, `loc-sd-chula-vista`) x one service
 * source (`svc-preventative-sewer-maintenance`, its `v2` block). Nothing here
 * is new research. Section recipe, each tied to what THIS service does or
 * cannot:
 *   1. systemExplainer + responsibility - the owner maintains the lateral from
 *      the first foot; the City's rule of thumb is annual maintenance, as
 *      guidance and not our schedule
 *   2. systemExplainer - the City's warning that cleaning a private lateral can
 *      push debris into the public sewer vs. a recorded camera pass that notes
 *      what limits the view and what remains
 *   3. systemExplainer + municipalProgram - grease, roots through cracked pipe,
 *      deep-rooted plants, City street trees, and the City's own once-a-year
 *      goal for its mains vs. the service's risk factors; no default schedule
 *   4. municipalProgram - none found, a policy for qualifying stoppages and not
 *      a grant, the permit before any repair, what a visit is not
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * ⚠ The Chula Vista location page does NOT say the City requires or sets a
 * schedule for inspecting or cleaning existing laterals, so this page does not
 * say it. The annual rule of thumb is the CITY'S guidance, quoted as such.
 * ⚠ NO INTERVAL, SCHEDULE, PLAN OR CONTRACT is claimed for The Sewer Pros. The
 * service page states none.
 * ⚠ The Chula Vista location page states NO housing-age figure and says the
 * system's age is not stated, so none is given. CITY NUMBERS ARE THE CITY'S,
 * not ours. No company phone, office, price, offer, response time or guarantee
 * appears. Council Policy 570-01 is never called a grant. Repair and
 * replacement are never offered.
 *
 * Audit: docs/source-reports/san-diego/sl-chula-vista-maintenance.md
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { chulaVistaContent } from './san-diego-chula-vista'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/preventative-sewer-maintenance'

const id = (value: string): PageId => value as PageId

const SERVICE_ID = 'svc-preventative-sewer-maintenance'

const v2 = serviceContent[id(SERVICE_ID)]?.v2
if (v2 === undefined || chulaVistaContent.faq === undefined) {
  throw new Error('sl-chula-vista-maintenance: source content is missing')
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-chula-vista-maintenance', {
  hero: {
    alt: 'Technician on a preventative sewer maintenance visit at a home',
    shot: 'Technician at a residential cleanout during a maintenance visit, monitor in frame, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the Chula Vista location page and the maintenance
 * service page, minus four Chula Vista questions: the CVSan correction (about
 * which agency serves Chula Vista, not maintenance), "What does a sewer camera
 * inspection show?" (the service page asks "What does a sewer camera inspection
 * find?"), "Do you repair or replace sewer lines?" (the service page's "Do you
 * offer sewer repair or replacement?" answers it in full), and "Is a sewer
 * inspection required when buying a Chula Vista home?", which is not about
 * maintenance.
 */
const faq = mergeRelevantFaqs(
  chulaVistaContent.faq,
  v2.faq,
  [
    'Is Chula Vista served by CVSan or a separate sanitation district?',
    'What does a sewer camera inspection show?',
    'Do you repair or replace sewer lines?',
    'Is a sewer inspection required when buying a Chula Vista home?',
  ],
  'In Chula Vista',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const chulaVistaMaintenanceContent: ServiceLocationPageContent = {
  seoTitle: 'Preventative Sewer Maintenance in Chula Vista, CA',
  metaDescription:
    'Preventative sewer maintenance in Chula Vista, CA. The City puts the lateral on the owner and suggests annual upkeep. See what a visit covers.',
  serviceDescription:
    "Preventative sewer maintenance is planned inspection and cleaning of a home's drain and sewer line before buildup or an obstruction causes a backup, for properties in Chula Vista, California. It is diagnostic and cleaning work, not repair.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: chulaVistaContent.sources,
  hero: {
    eyebrow: 'Chula Vista, CA',
    title: 'Preventative Sewer Maintenance in Chula Vista',
    intro: (
      <p>
        In Chula Vista, the City&rsquo;s written sewer policy makes the owner responsible for the
        lateral from the first foot off the public sewer to the building, and the City&rsquo;s own
        rule of thumb is to have a lateral maintained annually. Preventative sewer maintenance is
        the planned version with evidence: a camera pass that records the visible condition of the
        accessible line, and cleaning when it is appropriate, before buildup becomes a backup.
      </p>
    ),
  },
  body: (
    <>
      <h2>The lateral is yours to maintain, and the City&rsquo;s advice is annual</h2>
      <p>
        The City of Chula Vista&rsquo;s Council Policy 570-01 says the owner maintains the lateral
        from its connection with the public sewer to the building, and beyond, at the owner&rsquo;s
        sole expense. The City&rsquo;s maintenance guidance gives a rule of thumb of having a
        lateral maintained annually.
      </p>
      <p>
        That is the City&rsquo;s guidance, not a requirement we found and not our schedule. We state
        no interval for a maintenance visit, because the line&rsquo;s own history decides what is
        useful.
      </p>

      <h2>The City warns that cleaning can push debris, so look before and after</h2>
      <p>
        The City warns that cleaning a private lateral can push debris, such as cut root balls and
        grease, into the public sewer, where it can cause a blockage. A maintenance visit adds a
        recorded camera pass through the accessible section, with anything that limits the view
        noted, then cleaning if buildup or an obstruction is present, and a second look when one is
        included.
      </p>
      <ul>
        <li>
          The footage records where along the line a condition sits, measured from where the camera
          entered.
        </li>
        <li>
          It does not establish where the public sewer or the first foot of the lateral begins.
        </li>
        <li>Cleaning does not repair pipe. The Sewer Pros does not perform repairs.</li>
      </ul>

      <h2>Grease, roots and street trees: what raises the question</h2>
      <p>
        The City says grease is the most common cause of pipe blockages, that roots enter a lateral
        through cracked or broken pipe, and that deep-rooted plants near a lateral are best avoided.
        Its policy also singles out stoppages caused by a City street tree. The City lists a goal of
        cleaning its own sewer lines once a year, which is a goal for the public sewer and does not
        extend to your lateral.
      </p>
      <p>
        A line with no history of problems does not need a default schedule. What raises the
        question is the line: mature trees near it, buildup that returned after a cleaning, or
        earlier backups never documented on camera.
      </p>

      <h2>A policy for some stoppages, not a grant, and who to ask about permits</h2>
      <p>
        We did not find a City lateral repair, replacement, grant or reimbursement program for
        failing laterals. That is &ldquo;none found&rdquo;, not a statement that none exists. The
        policy&rsquo;s reimbursement covers locating and clearing a qualifying stoppage when City
        staff agree, not routine upkeep. Confirm the current text with Public Works at 619-397-6000
        (the City&rsquo;s number), since the posted copy shows a 2014 revision with no resolution
        number.
      </p>
      <p>
        The City says repair or replacement of a lateral needs a City permit before work begins. A
        maintenance visit is inspection and cleaning. It is not an emergency response, and if sewage
        reaches a street or storm drain the City asks you to call 619-397-6000 (also the
        City&rsquo;s number).
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A City street tree near the lateral',
      description:
        'The City’s policy treats a stoppage caused by a City street tree differently from other root problems, and asks the owner to notify the City within 48 hours of identifying the location. A maintenance pass can document roots visible in the accessible line. It does not prove which tree they came from.',
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: steps,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of Chula Vista. Sewer authorities and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-carlsbad'),
      id('loc-sd-escondido'),
      id('loc-sd-oceanside'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'Chula Vista is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-sd-chula-vista'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request preventative sewer maintenance in Chula Vista',
    body: 'Tell us what you have noticed and what the line’s history looks like. We will talk through access and what a visit would include.',
  },
}
