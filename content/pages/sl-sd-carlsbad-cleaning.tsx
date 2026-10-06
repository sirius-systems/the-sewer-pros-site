/**
 * Carlsbad, CA + Sewer Cleaning (`sl-carlsbad-cleaning`).
 *
 * Authority: CLAUDE.md §9, §22, §24; docs/14-content-specification.md §43, §79.
 * Same recipe as `sl-sd-chula-vista-cleaning` and `sl-lv-city-cleaning`. One local
 * source (`carlsbadContent`) x one service source (`svc-sewer-cleaning` v2).
 * Nothing here is new research.
 *
 * Section recipe (each section ties a Carlsbad fact to what cleaning does):
 *   1. Three agencies - City, Vallecitos and Leucadia each word the owner's line
 *      differently; no agency is named as serving an address
 *   2. City guidance - annual cleaning, camera every 3-5 years, cleanout cap;
 *      Leucadia on roots and obstructions
 *   3. Grants - City up to $3,000, Leucadia 50% up to $3,000 and says cleaning does
 *      not qualify; none found from Vallecitos; no balance published
 *   4. Not a repair - permits per agency; we do not repair; company phone
 *
 * ⚠ CARLSBAD HAS THREE SEWER AGENCIES. Each agency's wording is stated separately
 * and never carried to another. NEVER SAYS WHICH AGENCY SERVES AN ADDRESS. GRANT
 * AVAILABILITY IS NEVER STATED. AGENCY NUMBERS ARE THE AGENCIES'. Company phone and
 * founding year come from `marketOperatingDetail['san-diego-ca']`. No price,
 * offer, response time, emergency or same-day claim, guarantee, equipment spec or
 * office.
 */

import { marketOperatingDetail } from '@/data/markets/markets'
import type { PageId, ServiceLocationPageContent } from '@/types'
import { carlsbadContent } from './san-diego-carlsbad'
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
  throw new Error('sl-sd-carlsbad-cleaning: shared blocks are missing')
}

const v2 = serviceContent[id('svc-sewer-cleaning')]?.v2
if (v2 === undefined || carlsbadContent.faq === undefined) {
  throw new Error('sl-sd-carlsbad-cleaning: source service v2 or location FAQ is missing')
}

const slots = pageImageSlots('sl-carlsbad-cleaning', {
  hero: {
    alt: 'Technician setting up sewer cleaning equipment at a cleanout beside a home',
    shot: 'Technician with a cleaning machine and cable or hose at a residential cleanout, no identifiable address',
  },
  problems: [shots[0], shots[1], shots[2], shots[3]] as const,
})

/**
 * Every question from the Carlsbad location page and the sewer cleaning service
 * page. Nothing is skipped. The service page's cost question (DEC-088 wording)
 * is carried as published, as on the San Diego and Las Vegas pages.
 */
const faq = mergeRelevantFaqs(carlsbadContent.faq, v2.faq, [], 'In Carlsbad')

export const carlsbadCleaningContent: ServiceLocationPageContent = {
  seoTitle: 'Sewer Cleaning in Carlsbad, CA',
  metaDescription:
    'Sewer cleaning in Carlsbad, CA. Three sewer agencies each word the owner’s lateral differently, and LWD says cleaning does not qualify for its grant.',
  serviceDescription:
    'Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in an accessible private sewer line, for properties in Carlsbad, California.',
  heroImage: slots.hero,
  ctaImage: slots.cta,
  sources: carlsbadContent.sources,
  hero: {
    eyebrow: 'Carlsbad, CA',
    title: 'Sewer Cleaning in Carlsbad',
    intro: (
      <p>
        Carlsbad is served by three sewer agencies, and in each one the published rules put the
        private lateral on the owner. The City of Carlsbad also gives its own maintenance guidance,
        including professional cleaning about once a year. Sewer cleaning removes buildup from the
        accessible private line. It clears the pipe. It does not repair it.
      </p>
    ),
  },
  body: (
    <>
      <h2>Three agencies word the owner’s line three ways</h2>
      <p>
        Carlsbad’s sewer service is split. The City of Carlsbad says the owner is responsible for
        the lateral from the home or building to the sewer main, typically in the street, and that
        the City’s responsibility begins once sewage enters the main. Vallecitos Water District says
        the owner is responsible from the home or building and including the point of connection to
        its main. Leucadia Wastewater District describes the lateral as running from the building to
        its public sewer system, including the physical connection.
      </p>
      <p>
        Our cleaning covers accessible private-property sewer and drain lines, not agency mains. We
        do not say which agency serves an address. The City points to its sewer district map for
        that.
      </p>
      <h2>The City suggests an annual cleaning and warns about the cleanout cap</h2>
      <p>
        The City of Carlsbad says a lateral should ideally be professionally cleaned once a year,
        that a professional should inspect it with a small camera every three to five years, and
        that owners should check sooner with a sewage-like odor or frequent clogged drains. It says
        the cleanout is usually within three to five feet of the building and that its cap must stay
        on tight. Leucadia says tree roots or other obstructions can block a lateral and cause a
        backup into a home.
      </p>
      <p>
        Sewer cleaning is that maintenance, and it is the City’s guidance for its own service area,
        not a finding about your property. Ask whether a camera look before or after is part of your
        visit, because a line that flows again is not proof the pipe is sound.
      </p>
      <h2>Leucadia says cleaning does not qualify for its grant</h2>
      <p>
        The City publishes a Sewer Lateral Grant Program of up to $3,000 to replace or rehabilitate
        a private lateral. Leucadia publishes a Homeowner’s Lateral Grant Program that reimburses
        50% of repair cost, up to $3,000, and says inspection and cleaning of a private lateral do
        not qualify. The City page does not say whether cleaning or root cutting qualifies. We found
        no lateral grant from Vallecitos.
      </p>
      <p>
        Neither agency publishes how much grant money remains, so confirm availability with your
        agency before planning around one. Neither program pays for our services.
      </p>
      <h2>Clearing a clog is not a repair, and permits sit with the agencies</h2>
      <p>
        Cleaning removes the obstruction, not necessarily its cause, and it does not fix a cracked,
        offset, separated or collapsed pipe. The City says most construction work requires a permit.
        Leucadia’s form says the applicant must obtain any necessary permits. Vallecitos says it
        does not install private connections. Ask the permit center and your serving agency before
        any repair. The Sewer Pros does not perform repairs or replacements.
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
      title: 'A backup and a cleanout cap you are tempted to remove',
      description:
        'The City says not to remove a cleanout cap to relieve a backup, because that causes a sewer spill and is a health violation. Call the agency that serves your address for a spill (the agencies’ numbers, not ours), and ask what cleaning can do.',
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
  // Every relevant question from the Carlsbad location page and the sewer
  // cleaning service page (see `faq` above).
  faq,
  relatedPageIds: [
    id('loc-sd-carlsbad'),
    id('svc-sewer-cleaning'),
    id('svc-hydro-jetting'),
    id('svc-sewer-cleaning-camera-inspection'),
  ],
  relatedTitle: 'Related pages',
  cta: {
    title: 'Request sewer cleaning in Carlsbad',
    body: 'Have the line you maintain cleaned, and ask whether a camera look before or after is included.',
  },
}
