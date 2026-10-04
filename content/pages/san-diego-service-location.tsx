/**
 * San Diego service + location content — 8 pages.
 *
 * Authority: docs/14-content-specification.md §43, §79
 *            docs/05-url-routing-strategy.md §119
 *            San Diego Market Research, 2026-08-16 (updated)
 *            DEC-071, DEC-072
 *
 * ===========================================================================
 * TWO SUBSTITUTION TESTS APPLY AT ONCE
 * ===========================================================================
 * CLAUDE.md §21 asks whether the city name could be swapped, AND whether
 * the service name could be. These pages have to survive both.
 *
 * The jurisdictional facts carry the first: Vallecitos rather than the
 * city in San Marcos, the City itself in Chula Vista,
 * a $3,000 grant in Carlsbad, no homeowner assistance program found
 * in the City of San Diego. The second is carried by tying each fact to what that
 * specific service actually produces — camera work generates the
 * documentation a grant process consumes; cleaning does not.
 *
 * ---------------------------------------------------------------------------
 * CITE-AND-LINK WHERE THE FACT IS UNVERIFIED (DEC-072)
 * ---------------------------------------------------------------------------
 * Rather than assert an unconfirmed figure, these pages link to the
 * authority's own page and let the reader confirm what applies to their
 * address. Applied to Oceanside's responsibility
 * statement, and Carlsbad's southern-boundary eligibility.
 *
 * This is stronger than omission: it gives the reader the answer's
 * location rather than pretending the question does not exist.
 *
 * ---------------------------------------------------------------------------
 * HOUSING FIGURES (DEC-072)
 * ---------------------------------------------------------------------------
 * Median-year figures are approved for use with ACS attribution. They
 * appear only where they carry an argument, not as decoration.
 *
 * ⚠ NO Mission Valley figure. It is unavailable rather than unverified —
 * the only two proxies describe non-comparable geographies and
 * contradict each other. None is published and they are not averaged.
 */

import Link from 'next/link'
import type { PageId, ServiceLocationPageContent } from '@/types'

const id = (value: string): PageId => value as PageId

export const sanDiegoServiceLocationContent: Partial<
  Record<PageId, ServiceLocationPageContent>
> = {
  /* ------------------------------------------- San Diego city / camera -- */
  [id('sl-sd-city-camera')]: {
    metaDescription:
      'Schedule a sewer camera inspection in San Diego with documented video findings to better understand the condition of your sewer line.',
    hero: {
      eyebrow: 'San Diego',
      title: 'Sewer Camera Inspection in San Diego',
      intro: (
        <p>
          Video inspection of the lateral in a city where the owner maintains
          the line all the way to the City sewer main and we did not find a
          City program that helps with lateral costs, which makes knowing its
          condition before you spend money the whole point.
        </p>
      ),
    },
    body: (
      <>
        <h2>Why inspection carries more weight here</h2>
        <p>
          In the City of San Diego the City&rsquo;s guidance says the property
          owner is responsible for maintaining the lateral from the building
          all the way to its connection with the City sewer main. We did not
          find an active City program that helps homeowners pay for lateral
          work.
        </p>
        <p>
          Set against places that operate assistance programs, that changes
          the calculation. Where no assistance program is found, the
          difference between a line that needs cleaning and a line that needs
          replacing is not a technicality: it is a cost the owner has to plan
          for.
        </p>

        <h2>What the camera settles before money is committed</h2>
        <ul>
          <li>Whether the problem is accumulation or a structural defect</li>
          <li>Where along the line it sits, and how far from the building</li>
          <li>Whether roots are entering, and at which point</li>
          <li>Which sections could not be assessed, and why</li>
        </ul>
        <p>
          That last one matters more than it sounds. An obscured section is
          unknown, not fine, and treating it as fine is the most common way an
          inspection gets over-read.
        </p>

        <h2>The City&rsquo;s process for a break beyond the property line</h2>
        <p>
          The City directs a licensed plumber who finds a break or collapse
          beyond the property line to call its Sewer Emergency Line and file a
          Plumber&rsquo;s Report, and says it will investigate within 24 hours.
          A dated record of the line&rsquo;s condition shows what the camera
          found before that process starts. It does not establish where a
          property line is.
        </p>

        <h2>What the camera shows, not the era</h2>
        <p>
          The City&rsquo;s pages we reviewed do not publish a pipe material or
          an installation era, so the only way to know what a lateral is made
          of and how it is holding up is to look at it.
        </p>
      </>
    ),
    relatedPageIds: [id('loc-sd-san-diego'), id('svc-sewer-camera-inspection')],
  },

  /* --------------------------------------------- San Marcos / camera -- */
  [id('sl-san-marcos-camera')]: {
    metaDescription:
      'Schedule a sewer camera inspection in San Marcos with documented findings to help clarify the condition of your sewer line.',
    hero: {
      eyebrow: 'San Marcos',
      title: 'Sewer Camera Inspection in San Marcos',
      intro: (
        <p>
          Video inspection for San Marcos properties, where the City does not
          provide sewer service and the agency that does depends on the
          address.
        </p>
      ),
    },
    body: (
      <>
        <h2>Which agency serves your San Marcos address</h2>
        <p>
          The City of San Marcos does not provide sewer service; confirm which
          agency serves your address. For a property on Vallecitos Water
          District&rsquo;s sewer system, the district says the owner is
          responsible for the sewer lateral through its connection to the
          district&rsquo;s main.
        </p>
        <p>
          We found no Vallecitos lateral repair assistance program on the
          district pages we reviewed. That is &ldquo;none found&rdquo;, not a
          statement that none exists. The{' '}
          <Link href="/san-diego-ca/san-marcos/">San Marcos page</Link> sets out who
          serves the city and what the district publishes.
        </p>

        <h2>What a camera inspection records</h2>
        <p>
          A camera inspection shows the visible condition of the accessible
          line on video. The findings can include:
        </p>
        <ul>
          <li>Blockages and grease build-up</li>
          <li>Root intrusion</li>
          <li>Separated or offset joints</li>
          <li>Cracks and visible pipe damage</li>
          <li>Standing water or low spots (bellies)</li>
        </ul>

        <h2>Why look before you decide</h2>
        <p>
          The footage records where along the line a condition sits, measured
          from where the camera entered. It does not tell you the condition of
          any line you have not inspected, and it does not establish where the
          connection to the district&rsquo;s main or the district&rsquo;s
          responsibility begins. Use the recorded evidence to decide whether the
          line needs cleaning, monitoring or a further opinion.
        </p>
      </>
    ),
    relatedPageIds: [id('loc-sd-san-marcos'), id('svc-sewer-camera-inspection')],
  },

  /* ------------------------------------------------ Carlsbad / camera -- */
  [id('sl-carlsbad-camera')]: {
    metaDescription:
      'Schedule a sewer camera inspection in Carlsbad with documented video findings to better understand your sewer line before deciding what comes next.',
    hero: {
      eyebrow: 'Carlsbad',
      title: 'Sewer Camera Inspection in Carlsbad',
      intro: (
        <p>
          Video inspection for Carlsbad properties, where the City, Leucadia
          Wastewater District and Vallecitos Water District each serve part of
          the city.
        </p>
      ),
    },
    body: (
      <>
        <h2>Documentation and the City grant program</h2>
        <p>
          Carlsbad publishes a Sewer Lateral Grant Program offering up to $3,000
          toward replacement or rehabilitation of a private lateral, awarded
          first-come, first-served with priority for properties that have a
          history of overflows.
        </p>
        <p>
          The City gives its highest priority to locations that have had
          overflows or spills. A camera inspection records the condition of the
          line and where along it a problem sits. It does not by itself
          establish an overflow history, and the City page we reviewed does not
          list an inspection among its requirements.
        </p>

        <h2>Check which provider serves your address</h2>
        <p>
          Carlsbad does not have a single sewer provider. The city&rsquo;s
          Utilities Department serves most of it, while the southern portion
          falls to Leucadia Wastewater District or Vallecitos Water District.
        </p>
        <p>
          The City says its grant is for customers in the Carlsbad Wastewater
          service area. Leucadia Wastewater District publishes a separate
          lateral grant of its own, and we did not find one from Vallecitos
          Water District. <Link href="/san-diego-ca/carlsbad/">The Carlsbad page</Link>{' '}
          sets out each agency&rsquo;s terms. To check your own address, start
          with the{' '}
          <a href="https://www.carlsbadca.gov/departments/utilities/sewer/for-property-owners">
            City of Carlsbad&rsquo;s property-owner page
          </a>
          .
        </p>

        <h2>What the camera records</h2>
        <p>
          A camera inspection can reveal blockages, root intrusion, separated
          joints, offsets, cracks, standing water and other observable
          conditions in accessible sewer piping, with a distance count showing
          where along the line each one sits.
        </p>
      </>
    ),
    relatedPageIds: [
      id('loc-sd-carlsbad'),
      id('svc-sewer-camera-inspection'),
      id('sl-carlsbad-prepurchase'),
    ],
  },

  /* ------------------------------------------- Carlsbad / pre-purchase -- */
  [id('sl-carlsbad-prepurchase')]: {
    metaDescription:
      'Schedule a pre-purchase sewer inspection in Carlsbad with documented camera findings to help evaluate a property before closing.',
    hero: {
      eyebrow: 'Carlsbad',
      title: 'Pre-Purchase Sewer Inspection in Carlsbad',
      intro: (
        <p>
          Inspect the lateral before closing, and find out which of
          Carlsbad&rsquo;s three sewer agencies serves the property and what its
          published lateral grant, if any, covers.
        </p>
      ),
    },
    body: (
      <>
        <h2>Why the grants belong in a buying decision</h2>
        <p>
          The City of Carlsbad publishes a Sewer Lateral Grant Program offering
          up to $3,000 toward lateral replacement or rehabilitation,
          first-come, first-served, with priority for properties with an
          overflow history. Leucadia Wastewater District publishes a separate
          lateral grant that reimburses 50% of repair cost, up to $3,000. We did
          not find one from Vallecitos Water District.
        </p>
        <p>
          It does not make a defect costless. A $3,000 contribution against a
          full replacement still leaves a balance, and each program is
          first-come, first-served rather than guaranteed. Leucadia says it pays
          only if funds are available. Confirm with the agency before you plan
          around a grant.
        </p>

        <h2>Confirm which provider serves the property</h2>
        <p>
          Most of Carlsbad is served by the city&rsquo;s own utilities
          department, but the southern portion falls to Leucadia Wastewater
          District or Vallecitos Water District. The City says its grant is for
          customers in the Carlsbad Wastewater service area.{' '}
          <Link href="/san-diego-ca/carlsbad/">The Carlsbad page</Link> sets out
          each agency&rsquo;s terms; check the{' '}
          <a href="https://www.carlsbadca.gov/departments/utilities/sewer/for-property-owners">
            City of Carlsbad&rsquo;s property-owner page
          </a>{' '}
          for the address you are buying.
        </p>

        <h2>What the inspection establishes before you commit</h2>
        <ul>
          <li>Whether the visible condition is accumulation or structural</li>
          <li>Where along the line any defect sits</li>
          <li>Whether roots are entering, and at what point</li>
          <li>Which sections could not be assessed, and why</li>
        </ul>

        <h2>Timing and what it is for</h2>
        <p>
          The inspection is most useful while decisions are still available to
          you. What you do with the findings is yours to decide with your own
          advisers; we document the line, not the transaction, and we do not
          perform the repair.
        </p>
      </>
    ),
    relatedPageIds: [
      id('loc-sd-carlsbad'),
      id('svc-pre-purchase-sewer-inspection'),
      id('cmp-independent-vs-repair'),
    ],
  },

  /* --------------------------------------------- Chula Vista / camera -- */
  [id('sl-chula-vista-camera')]: {
    metaDescription:
      'Schedule a sewer camera inspection in Chula Vista with documented findings to help clarify the condition of your sewer line.',
    hero: {
      eyebrow: 'Chula Vista',
      title: 'Sewer Camera Inspection in Chula Vista',
      intro: (
        <p>
          Video inspection for Chula Vista properties, where the City of Chula
          Vista runs the public sewer and its written policy puts the lateral
          on the owner.
        </p>
      ),
    },
    body: (
      <>
        <h2>The City of Chula Vista runs the sewer</h2>
        <p>
          Sewer service in Chula Vista comes from the City of Chula Vista, not
          from a separate sanitation district. Questions about laterals and
          permits go to City Public Works. <Link href="/san-diego-ca/chula-vista/">The
          Chula Vista page</Link> sets out the City&rsquo;s lateral policy.
        </p>

        <h2>What the City&rsquo;s policy says about stoppages</h2>
        <p>
          The City&rsquo;s sewer maintenance policy puts the lateral on the
          owner from its connection with the public sewer to the building. It
          says a licensed plumber determines the location of a stoppage with a
          camera, and that a stoppage found in the public sewer, in the first
          foot of the lateral at the connection, or caused by a City street tree
          is reported to the City within 48 hours and reimbursed at reasonable
          cost if City staff agree. A camera inspection records the condition of
          the line and where along it a problem sits. It does not by itself
          decide where a stoppage is for the City&rsquo;s purposes, and the
          City&rsquo;s pages do not say what documentation it accepts, so ask
          Public Works first. Read the{' '}
          <a
            href="https://www.chulavistaca.gov/departments/public-works/services/sewer/sewer-lateral-policy"
            rel="noopener"
          >
            City&rsquo;s sewer lateral policy page
          </a>{' '}
          and see the <Link href="/san-diego-ca/chula-vista/">Chula Vista
          page</Link> for the full summary.
        </p>
      </>
    ),
    relatedPageIds: [id('loc-sd-chula-vista'), id('svc-sewer-camera-inspection')],
  },

  /* ------------------------------------------- Escondido / cleaning -- */
  [id('sl-escondido-cleaning')]: {
    metaDescription:
      'Request professional sewer cleaning in Escondido to address buildup, blockages, and flow problems with inspection-focused service.',
    hero: {
      eyebrow: 'Escondido',
      title: 'Sewer Cleaning in Escondido',
      intro: (
        <p>
          Clearing accumulated material from Escondido lines, where the
          municipal code puts blockage removal squarely on the property owner.
        </p>
      ),
    },
    body: (
      <>
        <h2>What the code says about cleaning</h2>
        <p>
          Under section 22-165 of the Escondido Municipal Code, clearing a
          blockage in the lateral is the owner&rsquo;s responsibility. The
          section also puts maintenance, repair, replacement and cleaning of the
          lateral on the owner, up to and including the connection to the
          City&rsquo;s main. The City may be responsible only for damage the
          owner proves came from work by the City or a contractor working for
          the City.
        </p>
        <p>
          Cleaning a blocked lateral is therefore the owner&rsquo;s to arrange
          and to fund. For what the code covers, who to call, and the
          City&rsquo;s own numbers, see our{' '}
          <Link href="/san-diego-ca/escondido/">
            Escondido sewer inspection and cleaning
          </Link>{' '}
          page.
        </p>

        <h2>No program to offset it</h2>
        <p>
          We did not find a City of Escondido lateral repair, replacement, grant
          or reimbursement program. That is &ldquo;none found&rdquo;, not a
          statement that none exists.
        </p>
        <p>
          That raises rather than lowers the value of knowing whether a
          recurring blockage is ordinary accumulation or a defect. Cleaning a
          line repeatedly is a manageable cost; replacing one without warning is
          not, and the difference between them is established by looking.
        </p>

        <h2>Cleaning, then knowing why</h2>
        <p>
          Clearing restores flow. It does not explain why the line blocked. A
          line that clears and stays clear had accumulation. A line that blocks
          again on a cycle is telling you something the cleaning is not
          addressing.
        </p>
        <p>
          The Census median year built for Escondido homes is 1981 (American
          Community Survey, 2020-2024 five-year estimates). House age does not
          show what a lateral is made of or how it is holding up. Only an
          inspection of your line can show that.
        </p>

        <h2>When cleaning is the right answer</h2>
        <p>
          Frequently it is, and we will say so. Recommending an inspection on a
          line that does not need one would be the same behaviour we exist to
          avoid.
        </p>
      </>
    ),
    relatedPageIds: [
      id('loc-sd-escondido'),
      id('svc-sewer-cleaning'),
      id('svc-recurring-sewer-backup-diagnosis'),
    ],
  },

  /* ------------------------------------------- Oceanside / cleaning -- */
  [id('sl-oceanside-cleaning')]: {
    metaDescription:
      'Request professional sewer cleaning in Oceanside to address buildup, blockages, and flow problems with documented service information.',
    hero: {
      eyebrow: 'Oceanside',
      title: 'Sewer Cleaning in Oceanside',
      intro: (
        <p>
          Clearing accumulated material from Oceanside lines, and establishing
          whether accumulation is actually the problem.
        </p>
      ),
    },
    body: (
      <>
        <h2>Sewer service in Oceanside</h2>
        <p>
          Sewer service here is provided by the City of Oceanside Water
          Utilities Department. As in most San Diego County jurisdictions,
          sewer laterals are generally the property owner&rsquo;s
          responsibility.
        </p>
        <p>
          We have not located a published Oceanside statement setting out the
          exact boundary of that responsibility, and we would rather point you
          to the source than restate a neighbouring city&rsquo;s rule as though
          it were Oceanside&rsquo;s. Confirm what applies to your property with{' '}
          <a href="https://www.ci.oceanside.ca.us/residents/water-utilities">
            Oceanside Water Utilities
          </a>
          .
        </p>
        <p>
          We also found no lateral repair assistance program here, unlike
          Carlsbad; worth confirming for yourself either way.
        </p>

        <h2>What cleaning addresses, and what it does not</h2>
        <p>
          Cleaning removes what has accumulated: grease, soap residue, sediment,
          scale, and root material that has entered the line. It restores the
          effective diameter of the pipe. It does not change the structural
          condition of the line.
        </p>
        <p>
          A cleaned line with a belly still has a belly. A cleaned line with an
          offset joint still has an offset joint. Both will collect material
          again on the same cycle.
        </p>

        <h2>Coastal and suburban stock</h2>
        <p>
          Oceanside&rsquo;s housing has a median year built of around 1984
          (American Community Survey, 2019&ndash;2023 five-year estimates),
          reflecting 1970s and 1980s growth continuing into the 1990s.
        </p>
        <p>
          On lines of that period, recurring problems are more often caused by
          ground movement than by material decay: a section that lost slope, a
          joint opened by settlement, damage from later work on the property.
          Those produce the same symptom as an old failing line and are not
          distinguishable from the fixtures.
        </p>

        <h2>When to look further</h2>
        <p>
          If a line has been cleared more than once and the problem returns on a
          pattern, the useful question is no longer how to clear it. Clearing it
          again treats the symptom on a schedule.
        </p>
      </>
    ),
    relatedPageIds: [
      id('loc-sd-oceanside'),
      id('svc-sewer-cleaning'),
      id('svc-recurring-sewer-backup-diagnosis'),
    ],
  },

  /* ------------------------------------- Mission Valley / hydro jetting -- */
  [id('sl-mission-valley-hydro')]: {
    metaDescription:
      'Learn about hydro jetting in Mission Valley and when high-pressure cleaning may help address buildup inside sewer and drain lines.',
    hero: {
      eyebrow: 'Mission Valley',
      title: 'Hydro Jetting in Mission Valley',
      intro: (
        <p>
          High-pressure cleaning for Mission Valley&rsquo;s hotel, restaurant,
          retail, and multifamily lines, where accumulation is a scheduling
          problem rather than an emergency.
        </p>
      ),
    },
    body: (
      <>
        <h2>A commercial district, and the lines reflect it</h2>
        <p>
          Mission Valley is a commercial and mixed-use district within the City
          of San Diego rather than a residential neighbourhood. The City
          describes it as a regional center of offices, hotels, retail and a
          growing residential community.
        </p>
        <p>
          That changes what accumulates. Food-service and high-volume lines
          collect grease and solids on the pipe wall at a rate residential lines
          do not, and the accumulation is progressive rather than sudden: the
          line narrows until flow fails.
        </p>

        <h2>Why jetting suits this specifically</h2>
        <p>
          Mechanical clearing bores a channel through an obstruction. Jetting
          scours material from the full circumference of the pipe. Where the
          problem is grease coating the wall along a length of line rather than
          a single object lodged in it, that difference is the difference
          between clearing it and clearing it repeatedly.
        </p>

        <h2>The cost of a failure here is not the plumbing</h2>
        <p>
          In the City of San Diego, the City&rsquo;s guidance says the property
          owner maintains the lateral to the City main, and we did not find a
          City program that helps owners pay for lateral work. On a commercial
          property that cost sits alongside the operational cost: a closed
          kitchen, displaced tenants, an interrupted trading day.
        </p>
        <p>
          That arithmetic is what makes planned service on grease-bearing lines
          more defensible than reacting to backups, and it is a calculation the
          operator should be able to make from evidence rather than from a
          contractor&rsquo;s assurance.
        </p>

        <h2>Establish condition before applying pressure</h2>
        <p>
          High-pressure water in a line that is already compromised can worsen
          the damage. Where a line&rsquo;s condition is unknown, inspecting
          first is part of doing the work properly rather than an addition to
          the invoice.
        </p>
        <p>
          If the line genuinely has accumulation, jetting is the right answer
          and we will say so. If a structural cause is producing the blockages,
          jetting will not fix it, and we will say that instead.
        </p>

        <h2>Working around an operating site</h2>
        <p>
          Access here means trading hours, tenants, service corridors, and other
          contractors on site. That is a planning constraint to work around
          rather than an afterthought.
        </p>
      </>
    ),
    relatedPageIds: [
      id('loc-sd-mission-valley'),
      id('svc-hydro-jetting'),
      id('com-hydro-jetting'),
    ],
  },
}
