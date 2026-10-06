/**
 * Carlsbad, CA + Preventative Sewer Maintenance (`sl-carlsbad-maintenance`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43.
 *
 * One local source (`carlsbadContent`, `loc-sd-carlsbad`) x one service source
 * (`svc-preventative-sewer-maintenance`, its `v2` block). Nothing here is new
 * research. Section recipe, each tied to what THIS service does or cannot:
 *   1. The lateral is the owner's under all three agencies' wording, and the
 *      City's guidance is annual cleaning and a camera every three to five
 *      years - the City's guidance, not our schedule
 *   2. The cleanout - the City's three-to-five-foot description and tight-cap
 *      warning vs. a recorded camera pass that notes what limits the view
 *   3. LWD's roots and storm warning vs. the service's risk factors; no default
 *      schedule
 *   4. Grants - LWD says inspection and cleaning do not qualify, the City page
 *      is silent, VWD none found; what a visit is not
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * ⚠ CARLSBAD HAS THREE SEWER AGENCIES. Each agency's wording is shown
 * separately and this page NEVER says which agency serves an address; the
 * City's sewer district map is the pointer. The City's maintenance guidance is
 * quoted as the City's and is not carried to LWD or VWD. The location page does
 * not say any agency requires a schedule for existing laterals, so this page
 * does not say it.
 * ⚠ NO INTERVAL, SCHEDULE, PLAN OR CONTRACT is claimed for The Sewer Pros.
 * ⚠ No housing-age figure is stated and no system age is given. AGENCY NUMBERS
 * AND DOLLAR TERMS ARE THE AGENCIES', not ours. No dates are stated. No
 * company phone, office, price, offer, response time or guarantee appears.
 * Repair and replacement are never offered.
 *
 * Audit: docs/source-reports/san-diego/sl-carlsbad-maintenance.md
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { carlsbadContent } from './san-diego-carlsbad'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/preventative-sewer-maintenance'

const id = (value: string): PageId => value as PageId

const SERVICE_ID = 'svc-preventative-sewer-maintenance'

const v2 = serviceContent[id(SERVICE_ID)]?.v2
if (v2 === undefined || carlsbadContent.faq === undefined) {
  throw new Error('sl-carlsbad-maintenance: source content is missing')
}

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-carlsbad-maintenance', {
  hero: {
    alt: 'Technician on a preventative sewer maintenance visit at a home',
    shot: 'Technician at a residential cleanout during a maintenance visit, monitor in frame, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the Carlsbad location page and the maintenance service
 * page, minus three Carlsbad questions: "What does a sewer camera inspection
 * show?" (the service page asks "What does a sewer camera inspection
 * find?"), "Do you repair or replace sewer lines?" (the service page's "Do you
 * offer sewer repair or replacement?" answers it in full), and "Is a sewer
 * inspection required when buying a Carlsbad home?", which is not about
 * maintenance.
 */
const faq = mergeRelevantFaqs(
  carlsbadContent.faq,
  v2.faq,
  [
    'What does a sewer camera inspection show?',
    'Do you repair or replace sewer lines?',
    'Is a sewer inspection required when buying a Carlsbad home?',
  ],
  'In Carlsbad',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const carlsbadMaintenanceContent: ServiceLocationPageContent = {
  seoTitle: 'Preventative Sewer Maintenance in Carlsbad, CA',
  metaDescription:
    'Preventative sewer maintenance in Carlsbad, CA. The City suggests annual cleaning and a camera every three to five years. See what a visit covers.',
  serviceDescription:
    "Preventative sewer maintenance is planned inspection and cleaning of a home's drain and sewer line before buildup or an obstruction causes a backup, for properties in Carlsbad, California. It is diagnostic and cleaning work, not repair.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: carlsbadContent.sources,
  hero: {
    eyebrow: 'Carlsbad, CA',
    title: 'Preventative Sewer Maintenance in Carlsbad',
    intro: (
      <p>
        In Carlsbad, three agencies publish sewer rules and each puts the private lateral on the
        owner, and the City&rsquo;s own guidance is annual cleaning and a camera look every three to
        five years. Preventative sewer maintenance is the planned version with evidence: a camera
        pass that records the visible condition of the accessible line, and cleaning when it is
        appropriate, before buildup becomes a backup.
      </p>
    ),
  },
  body: (
    <>
      <h2>The lateral is the owner&rsquo;s, and the City&rsquo;s guidance sets a rhythm</h2>
      <p>
        The City of Carlsbad says the owner is responsible for the lateral from the home to the
        sewer main. Vallecitos Water District says the owner is responsible from the home and
        including the point of connection to its main. Leucadia Wastewater District describes the
        lateral as running from the building to the District&rsquo;s public system, including the
        physical connection.
      </p>
      <p>
        The City&rsquo;s guidance is that a lateral should ideally be professionally cleaned once a
        year and inspected with a small camera every three to five years. That is the City&rsquo;s
        guidance, not a requirement we found and not our schedule. We state no interval for a
        maintenance visit, because the line&rsquo;s own history decides what is useful.
      </p>

      <h2>The cleanout is the door, and its cap stays on</h2>
      <p>
        The City describes a cleanout as the access point used to inspect the line and clear an
        obstruction, usually within three to five feet of the building, and says the cap must stay
        on tight. A maintenance visit starts there with a recorded camera pass through the
        accessible section, with anything that limits the view noted, then cleaning if buildup or an
        obstruction is present.
      </p>
      <ul>
        <li>
          The footage records where along the line a condition sits, measured from where the camera
          entered.
        </li>
        <li>It does not establish where an agency&rsquo;s main or connection begins.</li>
        <li>Cleaning does not repair pipe. The Sewer Pros does not perform repairs.</li>
      </ul>

      <h2>Roots, storms and the lines that raise the question</h2>
      <p>
        LWD says tree roots or other obstructions can block a lateral and cause a backup into a
        home, and that a damaged lateral can lead to backups, especially during storms. The City
        says to check sooner with a sewage-like odor or frequent clogged drains.
      </p>
      <p>
        A line with no history of problems does not need a default schedule. What raises the
        question is the line: mature trees near it, buildup that returned after a cleaning, or
        earlier backups never documented on camera.
      </p>

      <h2>Grants cover repairs, and LWD says inspection and cleaning do not qualify</h2>
      <p>
        LWD publishes a program that reimburses 50% of repair cost, up to $3,000, and says
        inspection and cleaning of a private lateral do not qualify. The City publishes a Sewer
        Lateral Grant Program of up to $3,000 for replacing or rehabilitating a lateral, and its
        page does not say whether cleaning or inspection costs qualify. We did not find a lateral
        grant from VWD. These are the agencies&rsquo; terms, not ours, and neither page publishes a
        funding balance, so confirm with the agency.
      </p>
      <p>
        A maintenance visit is inspection and cleaning. It is not an emergency response, and to
        report a sewer spill you call the agency that serves your address, whose number is its own.
        The City&rsquo;s sewer district map is where it points owners to find out which that is.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A lateral nobody has looked at on camera',
      description:
        'The City suggests a professional camera inspection of a lateral every three to five years. If yours has never been documented, a maintenance pass records the visible condition of the accessible line. It does not show sections the camera did not reach.',
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: steps,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of Carlsbad. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-escondido'),
      id('loc-sd-oceanside'),
      id('loc-sd-chula-vista'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'Carlsbad is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-sd-carlsbad'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request preventative sewer maintenance in Carlsbad',
    body: 'Tell us what you have noticed and what the line’s history looks like. We will talk through access and what a visit would include.',
  },
}
