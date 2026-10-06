/**
 * City of Las Vegas, NV + Preventative Sewer Maintenance (`sl-lv-city-maintenance`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43.
 *
 * One local source (`lasVegasCityContent`, `loc-lv-las-vegas`) x one service
 * source (`svc-preventative-sewer-maintenance`, its `v2` block). Nothing here is
 * new research. Section recipe, each tied to what THIS service does or cannot:
 *   1. responsibility + municipalProgram - the owner keeps the lateral to the
 *      connection, and no City inspection requirement was found
 *   2. responsibility + whoToCall - City main stoppages vs. what a visit covers
 *   3. housingAge + systemExplainer - newer homes, no default schedule
 *   4. systemExplainer + municipalProgram - which agency serves the address, no
 *      permit statement for cleaning or a camera pass
 * Swap the city and sections 1-4 fail; swap the service and 1-3 fail.
 *
 * Audit: docs/source-reports/las-vegas-city/sl-lv-city-maintenance.md
 *
 * ⚠ The City of Las Vegas does NOT list periodic lateral inspection as an owner
 * duty on the pages we reviewed (Henderson does), so this page does not say it.
 * ⚠ NO INTERVAL, SCHEDULE, PLAN OR CONTRACT is claimed. The City's pages give
 * none that we found and the service page states none.
 * ⚠ CITY NUMBERS ARE THE CITY'S, not ours. No company phone, office, price,
 * offer, response time or guarantee appears. Repair and replacement are never
 * offered.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { lasVegasCityContent } from './las-vegas-las-vegas'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/preventative-sewer-maintenance'

const id = (value: string): PageId => value as PageId

const SERVICE_ID = 'svc-preventative-sewer-maintenance'

const v2 = serviceContent[id(SERVICE_ID)]?.v2
if (v2 === undefined || lasVegasCityContent.faq === undefined) {
  throw new Error('sl-lv-city-maintenance: source content is missing')
}

// Alt text stays neutral: the location page allows Las Vegas wording only for a
// photo taken at a Las Vegas-area property.
const slots = pageImageSlots('sl-lv-city-maintenance', {
  hero: {
    alt: 'Technician on a preventative sewer maintenance visit at a home',
    shot: 'Technician at a residential cleanout during a maintenance visit, monitor in frame, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the City of Las Vegas location page and the maintenance
 * service page, minus three Las Vegas questions: "What does a sewer camera
 * inspection show?" (the service page asks "What does a sewer camera inspection
 * find?"), "Do you repair or replace sewer lines?" (the service page's "Do you
 * offer sewer repair or replacement?" answers it in full), and "Does Las Vegas
 * require a sewer inspection when a home is sold?", which is not about
 * maintenance.
 */
const faq = mergeRelevantFaqs(
  lasVegasCityContent.faq,
  v2.faq,
  [
    'What does a sewer camera inspection show?',
    'Do you repair or replace sewer lines?',
    'Does Las Vegas require a sewer inspection when a home is sold?',
  ],
  'In Las Vegas',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const lasVegasCityMaintenanceContent: ServiceLocationPageContent = {
  seoTitle: 'Preventative Sewer Maintenance in Las Vegas, NV',
  metaDescription:
    'Preventative sewer maintenance in Las Vegas, NV. The lateral is yours up to the City main, and we found no City inspection rule. See what a visit covers.',
  serviceDescription:
    "Preventative sewer maintenance is planned inspection and cleaning of a home's drain and sewer line before buildup or an obstruction causes a backup, for properties in the City of Las Vegas, Nevada. It is diagnostic and cleaning work, not repair.",
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: lasVegasCityContent.sources,
  hero: {
    eyebrow: 'Las Vegas, NV',
    title: 'Preventative Sewer Maintenance in Las Vegas',
    intro: (
      <p>
        In the City of Las Vegas, the City says owners maintain the private sewer lateral up to the
        point where it connects into the City main, and we found no City inspection requirement for
        existing laterals. Preventative sewer maintenance is the planned version: a camera pass that
        records the visible condition of the accessible line, and cleaning when it is appropriate,
        before buildup becomes a backup.
      </p>
    ),
  },
  body: (
    <>
      <h2>The City leaves the lateral to you, up to the City main</h2>
      <p>
        The City of Las Vegas says private property owners maintain private sewer laterals up to the
        point where they connect into the City sewer main. Its sewer standards addenda say a private
        sewer stays private, even the portion in the public right-of-way, so the part you maintain
        can run under the street.
      </p>
      <p>
        We found no City inspection requirement for existing laterals and no City inspection-assistance
        program. A maintenance visit is one way to look after the line yourself: a recorded camera
        pass, then cleaning if buildup or an obstruction is present. Because the City sets no
        schedule, the line&rsquo;s own history decides what is useful, and we state no interval
        here.
      </p>

      <h2>What a visit covers, and what it leaves to the City</h2>
      <p>
        The City says it maintains the public sewer main. A stoppage there affects multiple upstream
        properties and can overflow manholes, and the City asks you to call its Streets &amp;
        Sanitation Division at 702-229-6227 (the City&rsquo;s number, not ours). On the lateral:
      </p>
      <ul>
        <li>
          The footage records where along the line a condition sits, measured from where the camera
          entered.
        </li>
        <li>It does not establish where the connection to the City main is.</li>
        <li>Cleaning does not repair pipe. The Sewer Pros does not perform repairs.</li>
      </ul>
      <p>
        You keep the video and written findings, which are the record of what was visible if a
        condition remains after cleaning. We found no City repair, grant or reimbursement program
        for a lateral.
      </p>

      <h2>Most Las Vegas homes are newer, and there is still no default schedule</h2>
      <p>
        Las Vegas&rsquo;s median year built is 1994 (U.S. Census Bureau ACS 2020-2024 5-year
        estimates, Las Vegas city), and 61.3 percent of housing units were built in 1990 or later
        (our arithmetic on the Census decade rows). The year a house was built does not tell you the
        condition or material of its lateral, and the City&rsquo;s pages give no age for the mains
        or laterals serving any street.
      </p>
      <p>
        A line with no history of problems does not need a default schedule. What raises the
        question is the line: mature trees near it, buildup that returned after a cleaning, or
        earlier backups never documented on camera.
      </p>

      <h2>Which agency serves you, and what a maintenance visit is not</h2>
      <p>
        A Las Vegas mailing address does not by itself show that the City serves a property. Use
        the City&rsquo;s sewer map or ask Sanitary Sewer Engineering at 702-229-6541 (the
        City&rsquo;s number) to check yours. Properties on septic systems are permitted and
        regulated by the Southern Nevada Health District, not the City.
      </p>
      <p>
        We found no City statement that cleaning or a camera inspection needs a permit, so ask
        Building &amp; Safety at 702-229-6251 (the City&rsquo;s number) if you are unsure. A
        maintenance visit is inspection and cleaning. It is not an emergency response and does not
        replace any City review.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A lateral that may run under the street',
      description:
        'The City’s sewer standards addenda say a private sewer stays private, even the portion in the public right-of-way, until it connects to the main. A maintenance pass records the accessible line. It does not establish where that connection is.',
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: steps,
  coverage: {
    title: 'Other Las Vegas Valley areas',
    intro:
      'This page covers the City of Las Vegas. Sewer agencies and lateral rules differ across the Las Vegas Valley, so use the page for your address.',
    pageIds: [id('loc-lv-henderson'), id('loc-lv-north-las-vegas'), id('loc-lv-summerlin')],
    availabilityStatement: 'Las Vegas is a service area, not an office location.',
  },
  faq,
  relatedPageIds: [
    id('loc-lv-las-vegas'),
    id(SERVICE_ID),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request preventative sewer maintenance in Las Vegas',
    body: 'Tell us what you have noticed and what the line’s history looks like. We will talk through access and what a visit would include.',
  },
}
