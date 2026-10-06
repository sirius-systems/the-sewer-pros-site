/**
 * Carlsbad, CA + Recurring Sewer Backup Diagnosis (`sl-carlsbad-backup`).
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43.
 * Shape and quality bar: `sl-sd-chula-vista-backup.tsx`, `sl-lv-city-backup.tsx`.
 *
 * One local source (`carlsbadContent`) times one service source
 * (`svc-recurring-sewer-backup-diagnosis`, `v2`). Nothing here is new
 * research. The audit is in `docs/source-reports/san-diego/sl-carlsbad-backup.md`.
 *
 * Body recipe (each section ties a Carlsbad agency fact to what a diagnosis
 * does or cannot):
 *   1. Whose backup is it - three agencies each word the lateral differently;
 *      footage applies only to the segment inspected and does not establish
 *      responsibility
 *   2. The City's early-warning guidance and LWD's root and storm warning vs.
 *      the named causes of a repeat backup and what cleaning does not repair
 *   3. Who to call, and the cleanout cap - each agency's own number, the City's
 *      owner-billing note, vs. what a diagnosis is not
 *   4. Grants - the City's and LWD's terms, LWD's statement that inspection and
 *      cleaning do not qualify, VWD none found, vs. "does not repair"
 *
 * ⚠ CARLSBAD HAS THREE SEWER AGENCIES. Each agency's wording is shown
 * separately and this page NEVER says which agency serves an address; the
 * City's sewer district map is the pointer. No rule is carried from one agency
 * to another. The location page states no housing-age figure and does not say
 * how old any system is, so none is given. AGENCY NUMBERS AND DOLLAR TERMS ARE
 * THE AGENCIES'. No dates are stated (sources are mostly undated; confirm with
 * the agency). No company phone, office, price, offer, emergency claim,
 * response time or guarantee appears in the body copy. The service page's cost
 * and same-day FAQ answers (DEC-088 wording) are carried as published (DEC-139).
 * Nothing says our footage satisfies any agency program.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { carlsbadContent } from './san-diego-carlsbad'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/recurring-sewer-backup-diagnosis'

const id = (value: string): PageId => value as PageId

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-carlsbad-backup', {
  hero: {
    alt: 'Technician at a cleanout beside a home',
    shot: 'Technician at an exterior cleanout of a residential property, camera monitor in frame, nothing graphic',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-recurring-sewer-backup-diagnosis')]?.v2
if (v2 === undefined || carlsbadContent.faq === undefined) {
  throw new Error('sl-carlsbad-backup: source content is missing')
}

/**
 * Every question from the Carlsbad location page and the backup diagnosis
 * service page, minus the two named here.
 */
const carlsbadBackupFaq = mergeRelevantFaqs(
  carlsbadContent.faq,
  v2.faq,
  [
    // Location page: a camera question the service page answers in full
    // ("What can a sewer camera see?").
    'What does a sewer camera inspection show?',
    // Location page: the service page's repair answers cover it.
    'Do you repair or replace sewer lines?',
  ],
  'In Carlsbad',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const carlsbadBackupContent: ServiceLocationPageContent = {
  seoTitle: 'Recurring Sewer Backup Diagnosis in Carlsbad, CA',
  metaDescription:
    'Recurring sewer backup diagnosis in Carlsbad, CA. Three agencies word the owner’s lateral differently. See what a camera can and cannot show.',
  serviceDescription:
    'Recurring sewer backup diagnosis is the process of inspecting the accessible sewer line to identify visible conditions that may cause repeated wastewater backups, for properties in Carlsbad, California. It generally combines a camera inspection, cleaning when needed, and written findings.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: carlsbadContent.sources,
  hero: {
    eyebrow: 'Carlsbad, CA',
    title: 'Recurring Sewer Backup Diagnosis in Carlsbad',
    intro: (
      <p>
        In Carlsbad, three agencies publish sewer rules, and each puts the private lateral on the
        property owner in its own words. When a backup keeps coming back, a diagnosis documents what
        a camera can see inside the accessible line, with cleaning first when something blocks the
        view, so you know what you are dealing with before you approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>A repeat backup: an agency&rsquo;s main, or your lateral?</h2>
      <p>
        The City of Carlsbad says the owner is responsible for the lateral from the home to the
        sewer main, typically in the street, and that its responsibility begins once sewage enters
        the main. Vallecitos Water District says the owner is responsible from the home and
        including the point of connection to its main. Leucadia Wastewater District describes the
        lateral as running from the building to the District&rsquo;s public system, including the
        physical connection.
      </p>
      <p>
        A diagnosis documents what is visible in the part of the line the camera reached. Those
        findings apply only to the segment inspected and do not by themselves establish where any
        agency&rsquo;s responsibility begins.
      </p>

      <h2>The City&rsquo;s early signs and LWD&rsquo;s warning about roots and storms</h2>
      <p>
        The City says owners should check a lateral sooner with a sewage-like odor or frequent
        clogged drains. LWD says tree roots or other obstructions can block a lateral and cause a
        backup into a home, and that a damaged lateral can lead to backups, especially during
        storms.
      </p>
      <p>
        Cleaning removes roots and grease, but it does not repair the opening a root came through, a
        sag, or a damaged joint, and without a camera you cannot tell which returned. The camera
        records what is visible.
      </p>

      <h2>Who to call first, and why the cleanout cap stays on</h2>
      <p>
        The City says not to remove a cleanout cap to relieve a backup, because that causes a sewer
        spill and is a health violation. It also says the owner may be billed if the City must act
        on a lateral overflow. Call the agency that serves the address: the City lists 442-339-2722,
        and 760-931-2197 nights and weekends. LWD lists 760-753-0155 for a sewage spill. VWD lists
        (760) 744-0460 for water and sewer questions, with no separate sewer emergency number found.
        These are the agencies&rsquo; numbers, not ours.
      </p>
      <p>
        The footage records where along the line a condition sits. It does not establish where an
        agency&rsquo;s main or connection begins.
      </p>

      <h2>Grants help repairs, not diagnosis, so get the evidence first</h2>
      <p>
        The City publishes a Sewer Lateral Grant Program of up to $3,000 for replacing or
        rehabilitating a lateral. LWD publishes a program that reimburses 50% of repair cost, up to
        $3,000, and says inspection and cleaning do not qualify. We did not find a lateral grant
        from VWD, which is &ldquo;none found&rdquo;, not a statement that none exists. These are the
        agencies&rsquo; terms, and neither page we reviewed publishes a funding balance, so confirm
        with the agency.
      </p>
      <p>
        A diagnosis does not repair anything, and The Sewer Pros does not sell repair or
        replacement. If the footage shows a significant condition, further evaluation may be
        appropriate outside our cleaning and diagnostic scope. Neither page we reviewed lists a
        camera inspection as a requirement, and we make no claim that our findings meet any
        agency&rsquo;s conditions. Keep the video and compare more than one written estimate.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'Backups after storms',
      description:
        'LWD says a damaged lateral can lead to backups, especially during storms. A diagnosis can document the visible condition of the accessible line. It cannot show that a storm caused a backup or whether a damaged section lies beyond where the camera reached.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
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
  // All relevant questions from the Carlsbad location page and the backup
  // diagnosis service page (see `carlsbadBackupFaq` above).
  faq: carlsbadBackupFaq,
  relatedPageIds: [
    id('loc-sd-carlsbad'),
    id('svc-recurring-sewer-backup-diagnosis'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request a sewer backup diagnosis in Carlsbad',
    body: 'Find out what a camera can document on your lateral before you approve work. Video and written findings when a camera is used.',
  },
}
