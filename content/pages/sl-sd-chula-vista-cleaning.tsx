/**
 * Chula Vista, CA + Sewer Cleaning (`sl-chula-vista-cleaning`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Same recipe as `sl-sd-city-cleaning` and `sl-lv-city-cleaning`. One local source
 * (`chulaVistaContent`) x one service source (`svc-sewer-cleaning` v2). Nothing
 * here is new research.
 *
 * Section recipe (each section ties a Chula Vista fact to what cleaning does):
 *   1. City guidance - grease and roots, annual rule of thumb, the City's warning
 *      that cleaning a lateral can push debris into the public sewer
 *   2. The first foot - Council Policy 570-01 starts the owner's lateral at the
 *      first foot off the public sewer; property line cleanout; our cleaning is
 *      private-property lines only
 *   3. The 48-hour exception - public sewer, first foot or City street tree;
 *      licensed plumber's camera finding; reimbursement is the City's call
 *   4. Not a repair - permit before repair or replacement, owner's cost, we do not
 *      repair; company phone
 *
 * ⚠ POLICY, NOT A GRANT. Never says a grant exists or that the City will pay for
 * a given stoppage. CITY NUMBERS ARE THE CITY'S. Company phone and founding year
 * come from `marketOperatingDetail['san-diego-ca']`. No price, offer, response
 * time, emergency or same-day claim, guarantee, equipment spec or office.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ServiceLocationPageContent } from '@/types'
import { chulaVistaContent } from './san-diego-chula-vista'
import { serviceContent } from './services'
import {
  SERVICE_INCLUSIONS,
  SERVICE_PROBLEMS,
  SERVICE_PROBLEM_SHOTS,
  mergeRelevantFaqs,
  pageImageSlots,
} from './service-location-shared'

const id = (value: string): PageId => value as PageId

const sd = marketOperatingDetail['san-diego-ca']
if (sd === undefined) throw new Error('marketOperatingDetail is missing san-diego-ca')

const problems = SERVICE_PROBLEMS['svc-sewer-cleaning']
const inclusions = SERVICE_INCLUSIONS['svc-sewer-cleaning']
const shots = SERVICE_PROBLEM_SHOTS['svc-sewer-cleaning']
if (problems === undefined || inclusions === undefined || shots === undefined) {
  throw new Error('sl-sd-chula-vista-cleaning: shared sewer cleaning blocks are missing')
}

const v2 = serviceContent[id('svc-sewer-cleaning')]?.v2
if (v2 === undefined || chulaVistaContent.faq === undefined) {
  throw new Error('sl-sd-chula-vista-cleaning: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-chula-vista-cleaning', {
  hero: {
    alt: 'Technician setting up sewer cleaning equipment at a cleanout beside a home',
    shot: 'Technician with a cleaning machine and cable or hose at a residential cleanout, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the Chula Vista location page and the sewer cleaning
 * service page. Nothing is skipped. The service page's cost question (DEC-088
 * wording) is carried as published, as on the San Diego and Las Vegas pages.
 */
const faq = mergeRelevantFaqs(chulaVistaContent.faq, v2.faq, [], 'In Chula Vista')

export const chulaVistaCleaningContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning in Chula Vista, CA',
  metaDescription:
    'Sewer cleaning in Chula Vista, CA. The City’s policy puts the lateral on the owner from the first foot off its sewer. See what cleaning does and does not do.',
  serviceDescription:
    'Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in an accessible private sewer line, for properties in the City of Chula Vista, California.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: chulaVistaContent.sources,
  hero: {
    eyebrow: 'Chula Vista, CA',
    title: 'Sewer Cleaning in Chula Vista',
    intro: (
      <p>
        In Chula Vista, the City’s Council policy puts the sewer lateral on the owner from the first
        foot off the public sewer to the building, and the City warns that cleaning a private
        lateral can push debris into its sewer. Sewer cleaning removes buildup from the accessible
        private line. It clears the pipe. It does not repair it.
      </p>
    ),
  },
  body: (
    <>
      <h2>The City names grease and roots, and warns where cleaned-out debris can go</h2>
      <p>
        The City of Chula Vista says grease is the most common cause of pipe blockages, that roots
        enter a lateral through cracked or broken pipe, and that a rule of thumb is to have a
        lateral maintained annually. It also warns that cleaning a private lateral can push debris
        such as cut root balls and grease into the public sewer, where it can cause a blockage.
      </p>
      <p>
        Sewer cleaning is that maintenance: hydraulic or mechanical equipment, chosen for the line,
        removes the grease, roots, deposits or debris that restrict flow. Ask whether a camera look
        before or after is part of your visit, because a line that flows again is not proof the pipe
        is sound.
      </p>

      <h2>The City’s policy starts your lateral at the first foot</h2>
      <p>
        Council Policy 570-01 puts the owner’s responsibility on the lateral from its connection
        with the public sewer to the building, and beyond, at the owner’s sole expense. It defines
        the connection point as the first foot of the lateral off the outside of the public sewer.
        The City maintains the public sewer mains and manholes. Our cleaning covers accessible
        private-property sewer and drain lines, not City mains.
      </p>
      <p>
        The policy also has the owner expose the property line cleanout, normally within two to
        three feet of the property line, and says City crews may not reach the lateral from any
        point further into private property than that cleanout. Cleaning does not show where the
        first foot is or which side of it a blockage sits on.
      </p>

      <h2>A stoppage in the first foot or the public sewer follows a 48-hour rule</h2>
      <p>
        The policy makes one exception. If a licensed plumber’s camera finds a stoppage in the
        public sewer, in the first foot of the lateral, or caused by a City street tree, the owner
        notifies the City within 48 hours, and the City reimburses reasonable costs of locating and
        clearing it if City staff agree with the finding. We found no City lateral repair grant.
      </p>
      <p>
        Cleaning clears a stoppage. It does not by itself decide where the stoppage was, and we make
        no claim that our work satisfies any City condition. Ask Public Works at (619) 397-6000 what
        it accepts before you pay for work you plan to submit (the City’s number, not ours).
      </p>

      <h2>Clearing a clog is not a repair, and repair needs a City permit</h2>
      <p>
        The City says repair or replacement of a lateral needs a City permit before work begins, and
        its policy puts the corrective cost of an inadequate lateral on the owner. Cleaning removes
        the obstruction, not necessarily its cause, and it does not fix a cracked, offset, separated
        or collapsed pipe. The Sewer Pros does not perform repairs or replacements.
      </p>
      <p>
        To talk through cleaning the line you maintain, call The Sewer Pros at {sd.phone}. We have
        served the San Diego area since {sd.foundingYear}. If sewage is actively backing up into
        your home, contact us to discuss the situation.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A clog that may sit in the first foot or the public sewer',
      description:
        'The City’s policy has a 48-hour notice for a stoppage in the public sewer, in the first foot of the lateral, or caused by a City street tree. Cleaning clears the line. It does not show where a stoppage sat. Ask Public Works first (the City’s number, not ours).',
      image: slots.problems[3],
    },
  ],
  inclusions,
  process: (v2.process?.steps ?? []).map((step) => ({
    title: step.title,
    description: typeof step.description === 'string' ? step.description : undefined,
  })),
  coverage: {
    title: 'Other San Diego area locations',
    intro:
      'This page covers the City of Chula Vista. Sewer agencies and lateral rules differ across San Diego County, so use the page for your address.',
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
  // Every relevant question from the Chula Vista location page and the sewer
  // cleaning service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-chula-vista'),
    id('svc-sewer-cleaning'),
    id('svc-hydro-jetting'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning in Chula Vista',
    body: 'Have the line you maintain cleaned, and ask whether a camera look before or after is included.',
  },
}
