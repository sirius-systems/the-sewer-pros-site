/**
 * San Marcos, CA + Sewer Cleaning (`sl-san-marcos-cleaning`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Same recipe as `sl-sd-chula-vista-cleaning` and `sl-lv-city-cleaning`. One local
 * source (`sanMarcosContent`) x one service source (`svc-sewer-cleaning` v2).
 * Nothing here is new research.
 *
 * Section recipe (each section ties a San Marcos fact to what cleaning does):
 *   1. Three agencies - the City says it does not provide sewer service; each
 *      agency named separately; no claim about which serves an address
 *   2. Vallecitos wording - owner's lateral from the building through its
 *      connection to the district's main; our cleaning is private lines only
 *   3. Rainwater and smoke testing - district's system assessment, not your
 *      lateral; cleaning removes buildup, it does not seal a crack
 *   4. No program found - no lateral grant or reimbursement found; no permit
 *      claim; we do not repair; company phone
 *
 * ⚠ NEVER SAYS WHICH AGENCY SERVES AN ADDRESS. Only Vallecitos wording exists on
 * the location page; nothing is claimed for Vista Irrigation District or Rincon
 * del Diablo Municipal Water District. DISTRICT NUMBERS ARE THE DISTRICT'S.
 * Company phone and founding year come from `marketOperatingDetail['san-diego-ca']`.
 * No price, offer, response time, emergency or same-day claim, guarantee,
 * equipment spec or office.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ServiceLocationPageContent } from '@/types'
import { sanMarcosContent } from './san-diego-san-marcos'
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
  throw new Error('sl-sd-san-marcos-cleaning: shared sewer cleaning blocks are missing')
}

const v2 = serviceContent[id('svc-sewer-cleaning')]?.v2
if (v2 === undefined || sanMarcosContent.faq === undefined) {
  throw new Error('sl-sd-san-marcos-cleaning: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-san-marcos-cleaning', {
  hero: {
    alt: 'Technician setting up sewer cleaning equipment at a cleanout beside a home',
    shot: 'Technician with a cleaning machine and cable or hose at a residential cleanout, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the San Marcos location page and the sewer cleaning
 * service page. Nothing is skipped. The service page's cost question (DEC-088
 * wording) is carried as published, as on the San Diego and Las Vegas pages.
 */
const faq = mergeRelevantFaqs(sanMarcosContent.faq, v2.faq, [], 'In San Marcos')

export const sanMarcosCleaningContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning in San Marcos, CA',
  metaDescription:
    'Sewer cleaning in San Marcos, CA. The City does not provide sewer service; where Vallecitos serves, the lateral is the owner’s. See what cleaning does.',
  serviceDescription:
    'Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in an accessible private sewer line, for properties in the City of San Marcos, California.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: sanMarcosContent.sources,
  hero: {
    eyebrow: 'San Marcos, CA',
    title: 'Sewer Cleaning in San Marcos',
    intro: (
      <p>
        The City of San Marcos says it does not provide sewer service, so the first question is
        which agency serves your address. Where Vallecitos Water District serves it, the district
        says the owner is responsible for the lateral from the building through its connection to
        the district’s main. Sewer cleaning removes buildup from that accessible private line. It
        clears the pipe. It does not repair it.
      </p>
    ),
  },
  body: (
    <>
      <h2>The City says it is not the sewer provider, and names three agencies</h2>
      <p>
        The City of San Marcos says it does not provide water or sewer service and that one of three
        agencies does, depending on location: Vallecitos Water District, Vista Irrigation District
        or Rincon del Diablo Municipal Water District. We did not find a map that assigns every
        parcel to one of the three, and we do not say which serves yours.
      </p>
      <p>
        Cleaning is work on the private line, so the agency matters before you book. Vallecitos says
        its Engineering Department can tell you whether a parcel is inside its boundary. For Vista
        Irrigation District or Rincon del Diablo Municipal Water District, this page carries no
        wording of theirs, so ask that agency what applies.
      </p>

      <h2>Where Vallecitos serves, the lateral is yours to maintain</h2>
      <p>
        Vallecitos Water District says the owner is responsible for the sewer lateral, the pipe from
        the building to the district’s main, including its operation, maintenance and repair, from
        the building through its connection to the main. The district says it maintains the main.
        Our cleaning covers accessible private-property sewer and drain lines, not district mains.
      </p>
      <p>
        Cleaning clears buildup in that private line. It does not show where the connection to the
        main is, and we did not find a published district statement about the part of a lateral
        under a street, so ask Vallecitos Engineering about your alignment.
      </p>

      <h2>Rainwater and smoke testing concern the district’s lines, not yours</h2>
      <p>
        Vallecitos says rainwater can enter its sewer lines and that it smoke-tests its sanitary
        sewer lines for cracks and other openings. It describes that testing as an assessment of the
        district’s system rather than private systems. It is not an inspection of your lateral.
      </p>
      <p>
        Sewer cleaning removes grease, roots, deposits or debris that restrict flow. It does not
        close a crack or an opening, and a line that flows again is not proof the pipe is sound. Ask
        whether a camera look before or after is part of your visit.
      </p>

      <h2>No lateral program found, and no repair from us</h2>
      <p>
        We did not find a Vallecitos lateral repair, replacement, grant or reimbursement program.
        That is “none found”, not a statement that none exists, and the district’s pages show no
        current date. We also did not find a statement of which approvals apply to repairing an
        existing lateral, so ask Vallecitos Engineering before you pay for work.
      </p>
      <p>
        Cleaning removes the obstruction, not necessarily its cause. The Sewer Pros does not perform
        repairs or replacements. To talk through cleaning the line you maintain, call us at{' '}
        {sd.phone}. We have served the San Diego area since {sd.foundingYear}. For a sewer spill,
        the district’s website says to call 911.
      </p>
    </>
  ),
  problems: [
    ...problems.map((p, i) => ({ ...p, image: slots.problems[i] })),
    {
      title: 'A clog and an unclear agency',
      description:
        'The City says one of three agencies serves San Marcos, depending on location, and we found no map that assigns every parcel. Confirm which agency serves your address before you rely on any rule. Vallecitos Engineering can tell you whether a parcel is in its boundary.',
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
    id('svc-sewer-cleaning'),
    id('svc-hydro-jetting'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning in San Marcos',
    body: 'Have the line you maintain cleaned, and ask whether a camera look before or after is included.',
  },
}
