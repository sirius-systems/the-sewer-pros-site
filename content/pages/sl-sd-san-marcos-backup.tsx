/**
 * San Marcos, CA + Recurring Sewer Backup Diagnosis (`sl-san-marcos-backup`).
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43.
 * Shape and quality bar: `sl-sd-chula-vista-backup.tsx`, `sl-lv-city-backup.tsx`.
 *
 * One local source (`sanMarcosContent`, the City of San Marcos / Vallecitos
 * page) times one service source (`svc-recurring-sewer-backup-diagnosis`,
 * `v2`). Nothing here is new research. Audit:
 * `docs/source-reports/san-diego/sl-san-marcos-backup.md`.
 *
 * Body recipe (each section ties a San Marcos fact to what a diagnosis does or
 * cannot):
 *   1. Whose backup is it - the City is not the provider; each agency's wording
 *      shown separately; the district's 911 and main-number guidance (the
 *      DISTRICT's), vs. what footage can and cannot establish
 *   2. Rainwater and smoke testing - the district's inflow work on its own lines
 *      vs. a diagnosis of the line at one property
 *   3. The owner's lateral and no repair program found - Ordinance No. 225 is a
 *      main extension; a diagnosis does not repair
 *   4. Permits, installers and the second-opinion path
 *
 * ⚠ The location page states no housing-age figure and its sources show no
 * current date, so none is given. This page never says which agency serves an
 * address and states no rule of Vista Irrigation District or Rincon del Diablo
 * Municipal Water District. DISTRICT NUMBERS ARE THE DISTRICT'S. No company
 * phone, office, price, offer, emergency claim, response time or guarantee
 * appears in the body copy. The service page's cost and same-day FAQ answers
 * (DEC-088 wording) are carried as published (DEC-139).
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { sanMarcosContent } from './san-diego-san-marcos'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/recurring-sewer-backup-diagnosis'

const id = (value: string): PageId => value as PageId

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-san-marcos-backup', {
  hero: {
    alt: 'Technician at a cleanout beside a home',
    shot: 'Technician at an exterior cleanout of a residential property, camera monitor in frame, nothing graphic',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-recurring-sewer-backup-diagnosis')]?.v2
if (v2 === undefined || sanMarcosContent.faq === undefined) {
  throw new Error('sl-san-marcos-backup: source content is missing')
}

/**
 * Every question from the San Marcos location page and the backup diagnosis
 * service page, minus the one named here.
 */
const sanMarcosBackupFaq = mergeRelevantFaqs(
  sanMarcosContent.faq,
  v2.faq,
  [
    // Location page: a camera question the service page answers in full
    // ("What can a sewer camera see?").
    'What does a sewer camera inspection show?',
  ],
  'In San Marcos',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const sanMarcosBackupContent: ServiceLocationPageContent = {
  seoTitle: 'Recurring Sewer Backup Diagnosis in San Marcos, CA',
  metaDescription:
    'Recurring sewer backup diagnosis in San Marcos, CA. Vallecitos puts the lateral on the owner, and the City is not the provider. See what a camera finds.',
  serviceDescription:
    'Recurring sewer backup diagnosis is the process of inspecting the accessible sewer line to identify visible conditions that may cause repeated wastewater backups, for properties in San Marcos, California. It generally combines a camera inspection, cleaning when needed, and written findings.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanMarcosContent.sources,
  hero: {
    eyebrow: 'San Marcos, CA',
    title: 'Recurring Sewer Backup Diagnosis in San Marcos',
    intro: (
      <p>
        The City of San Marcos says it does not provide sewer service, and one of three agencies
        does, depending on location. Where Vallecitos Water District serves a property, the district
        says the owner is responsible for the lateral from the building through its connection to
        the main. When a backup keeps coming back, a diagnosis documents what a camera can see
        inside the accessible line, with cleaning first when something blocks the view, so you know
        what you are dealing with before you approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>A repeat backup: which agency, and which pipe?</h2>
      <ul>
        <li>
          <strong>City of San Marcos:</strong> it does not provide sewer service; one of three
          agencies does, depending on location.
        </li>
        <li>
          <strong>Vallecitos Water District:</strong> its website says to call 911 for emergencies
          such as a sewer spill. It lists (760) 744-0460 as its main number and says its Operations
          and Maintenance Department is on call 24 hours a day, seven days a week (the
          district&rsquo;s statements, not ours).
        </li>
        <li>
          <strong>Vista Irrigation District and Rincon del Diablo Municipal Water District:</strong>{' '}
          named by the City. We make no claim about their rules, so ask the agency.
        </li>
      </ul>
      <p>
        We do not say which agency serves your address. A diagnosis documents what is visible in the
        part of the line the camera reached. Those findings apply only to the segment inspected and
        do not by themselves establish responsibility.
      </p>

      <h2>Rainwater and smoke tests cover district lines, not yours</h2>
      <p>
        Vallecitos says rainwater can enter its sewer lines, and that reducing that inflow helps
        prevent sewer spills during rain events. It smoke-tests its sanitary sewer lines for cracks
        and other openings, and describes that as an assessment of the district&rsquo;s system
        rather than private systems.
      </p>
      <p>
        Its pages draw no link between rainwater and any one property&rsquo;s backups. A diagnosis
        looks at the line at your property. Note when the backups happen, and tell us.
      </p>

      <h2>The lateral is the owner&rsquo;s, and no repair program turned up</h2>
      <p>
        Vallecitos says it maintains the sewer mains and that the owner is responsible for the
        lateral&rsquo;s operation, maintenance and repair from the building through its connection
        to the main. We did not find a district program for repairing or replacing an existing
        lateral. Its one reimbursement agreement, under Ordinance No. 225, is for a main-line
        extension. That is &ldquo;none found&rdquo;, not a statement that none exists, and the
        district&rsquo;s pages show no current date.
      </p>
      <p>
        Cleaning removes roots and grease, but it does not repair the opening a root came through, a
        sag, or a damaged joint, and without a camera you cannot tell which returned.
      </p>

      <h2>Permits, installers and a second opinion before any work</h2>
      <p>
        The district says it does not install private sewer connections, and a contractor the owner
        selects does that work. We did not find a statement that every repair of an existing lateral
        needs a district or City permit, so ask Vallecitos Engineering and the City which approvals
        apply.
      </p>
      <p>
        A diagnosis does not repair anything, and The Sewer Pros does not sell repair or
        replacement. If the footage shows a significant condition, further evaluation may be
        appropriate outside our cleaning and diagnostic scope. Keep the video and compare more than
        one written estimate.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A sewer spill and no agency named yet',
      description:
        'Vallecitos Water District says to call 911 for emergencies such as a sewer spill, and lists (760) 744-0460 as its main number. Those are the district’s statements and number, not ours, and they apply to addresses it serves. A diagnosis is for the lateral on your property, not a public main.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
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
  // All relevant questions from the San Marcos location page and the backup
  // diagnosis service page (see `sanMarcosBackupFaq` above).
  faq: sanMarcosBackupFaq,
  relatedPageIds: [
    id('loc-sd-san-marcos'),
    id('svc-recurring-sewer-backup-diagnosis'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request a sewer backup diagnosis in San Marcos',
    body: 'Find out what a camera can document on your lateral before you approve work. Video and written findings when a camera is used.',
  },
}
