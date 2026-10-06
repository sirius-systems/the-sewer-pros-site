/**
 * Oceanside, CA + Recurring Sewer Backup Diagnosis (`sl-oceanside-backup`).
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43.
 * Shape and quality bar: `sl-sd-carlsbad-backup.tsx`, `sl-lv-city-backup.tsx`.
 *
 * One local source (`oceansideContent`) times one service source
 * (`svc-recurring-sewer-backup-diagnosis`, `v2`). Nothing here is new
 * research. The audit is in `docs/source-reports/san-diego/sl-oceanside-backup.md`.
 *
 * Body recipe (each section ties an Oceanside fact to what a diagnosis does or
 * cannot):
 *   1. Whose backup is it - the City runs the public system and says the
 *      private line is the owner's; footage applies only to the segment
 *      inspected and does not establish responsibility
 *   2. The City's plumber instruction and the sewer instruction it does not
 *      publish - vs. a diagnosis, which documents the line and is not a report
 *      to the City
 *   3. The named causes of a repeat backup and the Census median year built
 *      vs. what cleaning does not repair
 *   4. No City repair program found and the improvement-plan rule - vs. "does
 *      not repair"
 *
 * ⚠ OCEANSIDE HAS ONE SEWER AGENCY (the City). The page never says the City
 * serves a given address. The City does not publish the exact connection point
 * and this page does not say where it is. CITY NUMBERS ARE THE CITY'S, not
 * ours; (760) 435-3900 is a water emergency number the City frames around City
 * water and is never presented as a sewer line. No dates are stated (sources
 * are undated; confirm with the City). No company phone, office, price, offer,
 * emergency claim, response time or guarantee appears in the body copy. The
 * service page's cost and same-day FAQ answers (DEC-088 wording) are carried as
 * published (DEC-139). Nothing says our footage satisfies any City requirement.
 * Consistent with `sl-oceanside-cleaning`.
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { oceansideContent } from './san-diego-oceanside'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/recurring-sewer-backup-diagnosis'

const id = (value: string): PageId => value as PageId

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-oceanside-backup', {
  hero: {
    alt: 'Technician at a cleanout beside a home',
    shot: 'Technician at an exterior cleanout of a residential property, camera monitor in frame, nothing graphic',
  },
  problems: shots,
})

const v2 = serviceContent[id('svc-recurring-sewer-backup-diagnosis')]?.v2
if (v2 === undefined || oceansideContent.faq === undefined) {
  throw new Error('sl-oceanside-backup: source content is missing')
}

/**
 * Every question from the Oceanside location page and the backup diagnosis
 * service page, minus the two named here.
 */
const oceansideBackupFaq = mergeRelevantFaqs(
  oceansideContent.faq,
  v2.faq,
  [
    // Location page: a camera question the service page answers in full
    // ("What can a sewer camera see?").
    'What does a sewer camera inspection show?',
    // Location page: the service page's repair answers cover it.
    'Do you repair or replace sewer lines?',
  ],
  'In Oceanside',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const oceansideBackupContent: ServiceLocationPageContent = {
  seoTitle: 'Recurring Sewer Backup Diagnosis in Oceanside, CA',
  metaDescription:
    'Recurring sewer backup diagnosis in Oceanside, CA. The City says the private line is the owner’s. See what a camera can and cannot show.',
  serviceDescription:
    'Recurring sewer backup diagnosis is the process of inspecting the accessible sewer line to identify visible conditions that may cause repeated wastewater backups, for properties in Oceanside, California. It generally combines a camera inspection, cleaning when needed, and written findings.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: oceansideContent.sources,
  hero: {
    eyebrow: 'Oceanside, CA',
    title: 'Recurring Sewer Backup Diagnosis in Oceanside',
    intro: (
      <p>
        In Oceanside, the City says private sewer lines, &ldquo;from the street to your
        house,&rdquo; are the property owner&rsquo;s responsibility, and for a sewer leak on your
        property its instruction is to call a plumber. When a backup keeps coming back, a diagnosis
        documents what a camera can see inside the accessible line, with cleaning first when
        something blocks the view, so you know what you are dealing with before you approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>A repeat backup: the City&rsquo;s system, or your line?</h2>
      <p>
        The City of Oceanside Water Utilities Department runs the public sewer system, and the City
        says private sewer lines, &ldquo;from the street to your house,&rdquo; are the
        owner&rsquo;s. We did not find the exact point where the City&rsquo;s part ends, or whether
        the owner&rsquo;s part includes the section under the street.
      </p>
      <p>
        A diagnosis documents what is visible in the part of the line the camera reached. Those
        findings apply only to the segment inspected and do not by themselves establish where the
        City&rsquo;s responsibility begins.
      </p>

      <h2>The City says call a plumber, and publishes no sewer backup line</h2>
      <p>
        For a sewer leak on your property the City says to call a plumber. Its customer service
        number is (760) 435-5800. It also publishes (760) 435-3900 for water emergencies such as a
        water main break. It frames that number around City water, and we did not find a
        sewer-specific backup or overflow instruction, so we do not present it as a sewer line.
        These are the City&rsquo;s numbers, not ours.
      </p>
      <p>
        A diagnosis is a recorded look at your line, not a report to the City. It records where
        along the line a condition sits, measured from where the camera entered.
      </p>

      <h2>Roots, grease, a sag: causes a 1984 median year built cannot rank</h2>
      <p>
        Public utility guidance names roots entering through failed joints or cracks, grease, wipes,
        a sag, cracks, offset or separated joints, a defective connection and collapse among the
        causes of a repeat backup. Oceanside&rsquo;s median year built is 1984, plus or minus 2
        years, per the U.S. Census Bureau&rsquo;s American Community Survey (2020-2024 5-year
        estimates), but a house&rsquo;s year does not tell you the condition or material of its
        lateral.
      </p>
      <p>
        Cleaning removes roots and grease, but it does not repair the opening a root came through, a
        sag, or a damaged joint, and without a camera you cannot tell which returned. The
        City&rsquo;s pages we reviewed do not say whether the system is combined or separate, so we
        make no claim about either.
      </p>

      <h2>No City repair help found, so get the evidence first</h2>
      <p>
        We found no City lateral repair, replacement, grant or reimbursement program, which is
        &ldquo;none found&rdquo;, not a statement that none exists. We also did not find a City
        statement about damage to a private line that the City itself caused. The City says sewer
        improvements in a public right-of-way, a City easement or City property need an improvement
        plan approved by Water Utilities.
      </p>
      <p>
        A diagnosis does not repair anything, and The Sewer Pros does not sell repair or
        replacement. We make no claim that our findings meet any City requirement, and none we found
        asks for a camera inspection of an existing lateral. Keep the video and compare more than
        one written estimate.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A line under the street, past where the camera reached',
      description:
        'The City’s wording runs “from the street to your house,” and we did not find whether the owner’s part includes the section under the street. A camera records only the section it reaches, and any part it could not view is noted as not viewed. The footage does not show where the City’s part begins.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of Oceanside. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-carlsbad'),
      id('loc-sd-escondido'),
      id('loc-sd-chula-vista'),
      id('loc-sd-mission-valley'),
    ],
    availabilityStatement: 'Oceanside is a service area, not an office location.',
  },
  // All relevant questions from the Oceanside location page and the backup
  // diagnosis service page (see `oceansideBackupFaq` above).
  faq: oceansideBackupFaq,
  relatedPageIds: [
    id('loc-sd-oceanside'),
    id('svc-recurring-sewer-backup-diagnosis'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request a sewer backup diagnosis in Oceanside',
    body: 'Find out what a camera can document on your lateral before you approve work. Video and written findings when a camera is used.',
  },
}
