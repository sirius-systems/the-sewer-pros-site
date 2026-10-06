/**
 * Mission Valley, San Diego + Recurring Sewer Backup Diagnosis
 * (`sl-mission-valley-backup`).
 *
 * Authority: CLAUDE.md §22, §24; docs/14-content-specification.md §43.
 * Shape and quality bar: `sl-sd-city-backup.tsx`, `sl-lv-city-backup.tsx`.
 *
 * One local source (`sanDiegoMissionValleyContent`) times one service source
 * (`svc-recurring-sewer-backup-diagnosis`, `v2`). Nothing here is new research.
 * The audit of every source section is in
 * `docs/source-reports/san-diego/sl-mission-valley-backup.md`.
 *
 * Body recipe (each section ties a Mission Valley fact to what a diagnosis does
 * or cannot):
 *   1. Responsibility - the City's spill and odor line vs. the owner's lateral
 *      to the connection, vs. what footage can establish
 *   2. Grease and roots - the City's named causes, the kitchens on the line and
 *      the FEWD permit, vs. the named causes of a repeat backup and what
 *      cleaning does not repair
 *   3. Beyond the property line - the Plumber's Report process, who pays (not
 *      stated), vs. what footage shows
 *   4. No City program - none found, suspended crew program, permit question,
 *      occupied-site access, vs. "does not repair"
 *
 * ⚠ Mission Valley is a neighborhood (a City planning area). Only facts the
 * Mission Valley page itself states are used: no Council Policy 400-10, no EMRA
 * list, no yearly-flush advice. CITY NUMBERS ARE THE CITY'S. No company phone,
 * office, price, offer, emergency claim, response time or guarantee appears in
 * the body copy. The service page's cost and same-day FAQ answers (DEC-088
 * wording) are carried as published, per the owner's 2026-10-05 direction
 * (DEC-139).
 */

import type { PageId, ProcessContent, ServiceLocationPageContent } from '@/types'
import { sanDiegoMissionValleyContent } from './san-diego-mission-valley'
import { serviceContent } from './services'
import { mergeRelevantFaqs, pageImageSlots } from './service-location-shared'
import { inclusions, problems, shots } from './sl-blocks/recurring-sewer-backup-diagnosis'

const id = (value: string): PageId => value as PageId

// Alt text stays neutral: no place-specific photo is claimed.
const slots = pageImageSlots('sl-mission-valley-backup', {
  hero: {
    alt: 'Technician at a cleanout beside a commercial building',
    shot: 'Technician at an exterior cleanout of a commercial or mixed-use property, camera monitor in frame, nothing graphic',
  },
  problems: [
    shots[0],
    shots[1],
    shots[2],
    {
      alt: 'Commercial street with a manhole cover near the curb',
      shot: 'Ordinary commercial or mixed-use street, manhole and curb, no business names or identifiable buildings',
    },
  ] as const,
})

const v2 = serviceContent[id('svc-recurring-sewer-backup-diagnosis')]?.v2
if (v2 === undefined || sanDiegoMissionValleyContent.faq === undefined) {
  throw new Error('sl-mission-valley-backup: source content is missing')
}

/**
 * Every question from the Mission Valley location page and the backup
 * diagnosis service page; none is left out.
 */
const missionValleyBackupFaq = mergeRelevantFaqs(
  sanDiegoMissionValleyContent.faq,
  v2.faq,
  [],
  'In Mission Valley',
)

const steps: ProcessContent[] = (v2.process?.steps ?? []).map((step) => ({
  title: step.title,
  description: typeof step.description === 'string' ? step.description : undefined,
}))

export const missionValleyBackupContent: ServiceLocationPageContent = {
  seoTitle: 'Recurring Sewer Backup Diagnosis in Mission Valley, San Diego',
  metaDescription:
    "Recurring sewer backup diagnosis in Mission Valley, San Diego. The City says the lateral is the owner's to the City main; we found no help with costs.",
  serviceDescription:
    'Recurring sewer backup diagnosis is the process of inspecting the accessible sewer line to identify visible conditions that may cause repeated wastewater backups, for properties in Mission Valley, a City of San Diego planning area in California. It generally combines a camera inspection, cleaning when needed, and written findings.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanDiegoMissionValleyContent.sources,
  hero: {
    eyebrow: 'Mission Valley, San Diego',
    title: 'Recurring Sewer Backup Diagnosis in Mission Valley',
    intro: (
      <p>
        Mission Valley is a City of San Diego planning area, and the City says the owner maintains
        the sewer lateral from the building all the way to its connection with the City sewer main.
        We did not find a City program that helps owners pay for lateral work. When a backup keeps
        coming back, a diagnosis documents what a camera can see inside the accessible line, with
        cleaning first when something blocks the view, so you know what you are dealing with before
        you approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>A repeat backup: the City&rsquo;s spill line, or your lateral?</h2>
      <p>
        If you see, smell or suspect a sewer spill or a bad sewer odor, the City of San Diego asks
        you to call 619-515-3525 immediately (the City&rsquo;s number, not ours). On your side, the
        City says the property owner maintains the sewer lateral from the building all the way to
        its connection with the City sewer main, wherever that connection is.
      </p>
      <p>
        A diagnosis documents what is visible in the part of the line the camera reached. Those
        findings apply only to the segment inspected and do not by themselves establish
        responsibility, and if you lease the space, how a lease divides the duty is a matter for the
        lease, not legal advice.
      </p>

      <h2>Grease and roots are the City&rsquo;s named causes, and cleaning will not show which</h2>
      <p>
        The City names grease, along with roots, as a leading cause of sewer spills, and a
        restaurant or hotel kitchen sends fat, oil and grease down its line every day. After a
        grease-related spill, City FEWD inspectors look at facilities in the immediate area to find
        which contributed. A diagnosis does not show whether a facility&rsquo;s grease-removal
        equipment meets its City permit.
      </p>
      <p>
        Cleaning removes roots and grease, but it does not repair the opening a root came through, a
        sag, or a damaged joint. A camera pass shows how much has built up since the last cleaning,
        which is a better basis for a schedule than a default interval.
      </p>

      <h2>If the footage points beyond the property line</h2>
      <p>
        When a licensed plumber finds a break or collapse beyond the property line, the City directs
        the plumber to call 619-515-3525 and file a Plumber&rsquo;s Report. The City says it will
        investigate within 24 hours. We did not find a current City statement of who pays for
        repairs beyond the property line, so we make none.
      </p>
      <p>
        The footage records where along the line a condition sits, measured from where the camera
        entered. It does not establish where a property line is. Standing water on video is an
        observation, and a camera does not measure slope.
      </p>

      <h2>No City program to pay for it, so get the evidence first</h2>
      <p>
        We did not find an active City program that gives owners a grant, reimbursement or other
        help with lateral costs. That is &ldquo;none found&rdquo;, not a statement that none exists,
        so confirm with Public Utilities. The City says its program for City crews to install sewer
        laterals is currently suspended, and we found no City page on whether work confined to
        private property needs a permit (ask Development Services at 619-446-5242, the City&rsquo;s
        number).
      </p>
      <p>
        On an occupied commercial site, access means trading hours, tenants, service corridors and
        other contractors, so raise it when you request service. A diagnosis does not repair
        anything, and The Sewer Pros does not sell repair or replacement. Keep the video and compare
        more than one written estimate.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A shared lateral serving several tenants',
      description:
        'A multi-tenant building feeds many fixtures into one lateral, so one failure can reach every tenant at once. A diagnosis records the accessible line from the entry point. How a lease divides the duty between landlord and tenant is a matter for the lease, and this page does not give legal advice.',
      image: slots.problems[3],
    },
  ],
  // Six items: renders as two rows of three.
  inclusions,
  process: steps,
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the Mission Valley planning area. Sewer authorities and lateral rules differ across San Diego County, so use the page for your address.',
    pageIds: [
      id('loc-sd-san-diego'),
      id('loc-sd-san-marcos'),
      id('loc-sd-carlsbad'),
      id('loc-sd-escondido'),
      id('loc-sd-oceanside'),
      id('loc-sd-chula-vista'),
    ],
    availabilityStatement: 'Mission Valley is a service area, not an office location.',
  },
  // All relevant questions from the Mission Valley location page and the
  // backup diagnosis service page (see `missionValleyBackupFaq` above).
  faq: missionValleyBackupFaq,
  relatedPageIds: [
    id('loc-sd-mission-valley'),
    id('svc-recurring-sewer-backup-diagnosis'),
    id('svc-sewer-camera-inspection'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request a sewer backup diagnosis in Mission Valley',
    body: 'Find out what a camera can document on your lateral before you approve work. Video and written findings when a camera is used.',
  },
}
