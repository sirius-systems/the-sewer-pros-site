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
 * city in San Marcos, CVSan rather than city government in Chula Vista,
 * a $3,000 grant in Carlsbad, no reimbursement at all in the City of
 * San Diego. The second is carried by tying each fact to what that
 * specific service actually produces — camera work generates the
 * documentation a grant process consumes; cleaning does not.
 *
 * ---------------------------------------------------------------------------
 * CITE-AND-LINK WHERE THE FACT IS UNVERIFIED (DEC-072)
 * ---------------------------------------------------------------------------
 * Rather than assert an unconfirmed figure, these pages link to the
 * authority's own page and let the reader confirm what applies to their
 * address. Applied to CVSan's grant cap, Oceanside's responsibility
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

import type { PageId, ServiceLocationPageContent } from '@/types'

const id = (value: string): PageId => value as PageId

export const sanDiegoServiceLocationContent: Partial<
  Record<PageId, ServiceLocationPageContent>
> = {
  /* ------------------------------------------- San Diego city / camera -- */
  [id('sl-sd-city-camera')]: {
    hero: {
      eyebrow: 'San Diego',
      title: 'Sewer Camera Inspection in San Diego',
      intro: (
        <p>
          Video inspection of the lateral in a city where you own the entire
          line and no reimbursement exists, which makes knowing its condition
          before you spend money the whole point.
        </p>
      ),
    },
    body: (
      <>
        <h2>Why inspection carries more weight here</h2>
        <p>
          In the City of San Diego the property owner owns the full lateral,
          from the building all the way to the public main. The City&rsquo;s own
          guidance is explicit that there is no reimbursement for plumbing
          expenses.
        </p>
        <p>
          Set against places that operate assistance programmes, that changes
          the calculation. Every dollar of a lateral repair here is the
          owner&rsquo;s, so the difference between a line that needs cleaning
          and a line that needs replacing is not a technicality: it is the
          entire cost.
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

        <h2>Neglect is a distinction the City draws</h2>
        <p>
          The City repairs right-of-way breaks not caused by neglect, and bills
          the owner where neglect caused them. A dated record of the
          line&rsquo;s condition is therefore evidence about how a failure came
          about, not merely a diagnosis of it.
        </p>

        <h2>A wide span of construction</h2>
        <p>
          San Diego&rsquo;s housing has a median year built of around 1979
          (American Community Survey, 2019&ndash;2023 five-year estimates),
          spanning postwar construction through the 1980s and beyond. Laterals
          across that range may be clay, cast iron, or PVC depending on when a
          property was built and whether the line has been replaced since.
        </p>
      </>
    ),
    relatedPageIds: [id('loc-sd-san-diego'), id('svc-sewer-camera-inspection')],
  },

  /* --------------------------------------------- San Marcos / camera -- */
  [id('sl-san-marcos-camera')]: {
    hero: {
      eyebrow: 'San Marcos',
      title: 'Sewer Camera Inspection in San Marcos',
      intro: (
        <p>
          Video inspection for San Marcos properties, served by a water
          district rather than the city, and built recently enough that the
          usual assumptions about old pipe do not apply.
        </p>
      ),
    },
    body: (
      <>
        <h2>Vallecitos, not the City of San Marcos</h2>
        <p>
          Sewer service in San Marcos comes from the Vallecitos Water District,
          an independent special district that also serves parts of Carlsbad,
          Escondido, and Vista. The district&rsquo;s position is that lines
          serving private property are the property owner&rsquo;s
          responsibility and require periodic maintenance.
        </p>
        <p>
          We found no lateral repair assistance programme covering San Marcos,
          so the cost of a problem appears to fall entirely on the owner.
        </p>

        <h2>New housing changes what the camera looks for</h2>
        <p>
          San Marcos has a median year built of around 1996 (American Community
          Survey, 2019&ndash;2023 five-year estimates), among the newest
          housing in the region. Most laterals here will be PVC rather than
          clay, cast iron, or bituminized fibre.
        </p>
        <p>
          That eliminates the material failures which dominate older areas, and
          shifts what appears on camera:
        </p>
        <ul>
          <li>Bellies: sections that lost slope and hold standing water</li>
          <li>Joints opened by settlement rather than material decay</li>
          <li>Damage from landscaping, an addition, or utility trenching</li>
          <li>Roots exploiting an opening that movement or damage created</li>
        </ul>

        <h2>Why a newer line still warrants looking</h2>
        <p>
          A belly produces exactly the pattern people associate with an old,
          failing pipe: slow drainage that clears and returns, because solids
          settle wherever flow has slowed. The cause is entirely different, and
          so is the remedy.
        </p>
        <p>
          &ldquo;It is a newer house, the sewer will be fine&rdquo; is a
          reasonable assumption and frequently a wrong one. Ground movement does
          not wait for a pipe to reach a particular age.
        </p>
      </>
    ),
    relatedPageIds: [id('loc-sd-san-marcos'), id('svc-sewer-camera-inspection')],
  },

  /* ------------------------------------------------ Carlsbad / camera -- */
  [id('sl-carlsbad-camera')]: {
    hero: {
      eyebrow: 'Carlsbad',
      title: 'Sewer Camera Inspection in Carlsbad',
      intro: (
        <p>
          Video inspection for Carlsbad properties, in one of the few places in
          San Diego County where a grant programme may contribute toward
          lateral work.
        </p>
      ),
    },
    body: (
      <>
        <h2>Documentation and the grant programme</h2>
        <p>
          Carlsbad operates a Sewer Lateral Grant Program offering up to $3,000
          toward replacement or rehabilitation of a private lateral, awarded
          first-come, first-served with priority for properties that have a
          history of overflows.
        </p>
        <p>
          Overflow history and demonstrated condition are what the programme
          responds to, and both are things an inspection documents. A recorded
          defect at a known distance along the line is a stronger basis for any
          application than a description of symptoms.
        </p>

        <h2>Check which provider serves your address</h2>
        <p>
          Carlsbad does not have a single sewer provider. The city&rsquo;s
          Utilities Department serves most of it, while the southern portion
          falls to Leucadia Wastewater District or Vallecitos Water District.
        </p>
        <p>
          The grant is described as covering the Carlsbad Wastewater service
          area, and we have not been able to confirm whether that extends to
          properties served by Leucadia or Vallecitos. If your property is in
          the southern part of the city, confirm your own eligibility with the{' '}
          <a href="https://www.carlsbadca.gov/departments/utilities/sewer/for-property-owners">
            City of Carlsbad&rsquo;s property-owner page
          </a>{' '}
          before assuming it applies.
        </p>

        <h2>What tends to show up on Carlsbad lines</h2>
        <p>
          Carlsbad&rsquo;s housing has a median year built of around 1989
          (American Community Survey, 2019&ndash;2023 five-year estimates),
          reflecting coastal buildout from the late 1970s through the 2000s.
        </p>
        <p>
          On lines of that period the recurring findings are usually ground
          movement rather than material decay: bellies holding water, joints
          pulled apart by settlement, damage from later work on the property.
          Those are visible on camera and effectively invisible from the
          fixtures.
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
    hero: {
      eyebrow: 'Carlsbad',
      title: 'Pre-Purchase Sewer Inspection in Carlsbad',
      intro: (
        <p>
          Inspect the lateral before closing, and know that Carlsbad is one of
          the few places in the county where a grant may contribute toward a
          repair you inherit.
        </p>
      ),
    },
    body: (
      <>
        <h2>Why the grant belongs in a buying decision</h2>
        <p>
          Carlsbad&rsquo;s Sewer Lateral Grant Program offers up to $3,000
          toward lateral replacement or rehabilitation, first-come,
          first-served, with priority for properties with an overflow history.
        </p>
        <p>
          For a buyer that is genuinely useful information, and it is unusual:
          across most of San Diego County, including the City of San Diego, no
          such programme exists and a failed lateral is funded entirely by the
          owner.
        </p>
        <p>
          It does not make a defect costless. A $3,000 contribution against a
          full replacement still leaves a balance, and the programme is
          first-come, first-served rather than guaranteed. But it changes the
          arithmetic enough to be worth knowing before you commit.
        </p>

        <h2>Confirm which provider serves the property</h2>
        <p>
          Most of Carlsbad is served by the city&rsquo;s own utilities
          department, but the southern portion falls to Leucadia Wastewater
          District or Vallecitos. Whether the grant reaches those properties is
          not something we can confirm; check the{' '}
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
        <p>
          Carlsbad&rsquo;s stock is predominantly late-1970s through 2000s
          construction, with a median year built of around 1989 (American
          Community Survey, 2019&ndash;2023 five-year estimates). Newer pipe
          removes material decay as a concern but not settlement, bellies, or
          damage from work done since, none of which the age of a house
          predicts.
        </p>

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
    hero: {
      eyebrow: 'Chula Vista',
      title: 'Sewer Camera Inspection in Chula Vista',
      intro: (
        <p>
          Video inspection for Chula Vista properties, where the grant process
          runs through CVSan and asks for exactly the kind of documentation an
          inspection produces.
        </p>
      ),
    },
    body: (
      <>
        <h2>CVSan, not the City of Chula Vista</h2>
        <p>
          Sewer service in Chula Vista comes from CVSan (the Chula Vista
          Sanitation District), a separate special district rather than a
          department of city government. Questions about laterals, permits, and
          the grant programme go there, not to City Hall.
        </p>

        <h2>What the grant process actually requires</h2>
        <p>
          CVSan runs a Lateral Replacement Grant Program reimbursing documented
          repair or replacement cost. The process is specific:
        </p>
        <ul>
          <li>Three contractor quotes from CVSan&rsquo;s Qualified Contractor List</li>
          <li>A CVSan repair permit</li>
          <li>Work completed within 90 days</li>
          <li>Reimbursement on a paid-in-full invoice</li>
        </ul>
        <p>
          The three-quote requirement is where inspection earns its place.
          Comparable quotes are far easier to obtain when every contractor is
          pricing against the same recorded evidence (a defect of a known type
          at a known distance) rather than each forming an independent view of
          what is wrong.
        </p>
        <p>
          We have not confirmed the programme&rsquo;s exact reimbursement cap,
          and it differs from Carlsbad&rsquo;s stated $3,000. Check the current
          figure on{' '}
          <a href="https://cvsan.org/wastewater/lateral_replacement_grant_program.php">
            CVSan&rsquo;s grant programme page
          </a>{' '}
          rather than relying on a number from anywhere else.
        </p>

        <h2>Two cities in one</h2>
        <p>
          Chula Vista&rsquo;s median year built is around 1987 (American
          Community Survey, 2019&ndash;2023 five-year estimates), but that
          single figure hides a genuinely mixed picture: a meaningful postwar
          and 1960s base alongside a strong wave of master-planned development
          in the east through the 2000s.
        </p>
        <p>
          What is typical for one half of the city is a poor guide to the other,
          which is a reason to look at the specific line rather than reason from
          the city&rsquo;s overall profile.
        </p>
      </>
    ),
    relatedPageIds: [id('loc-sd-chula-vista'), id('svc-sewer-camera-inspection')],
  },

  /* ------------------------------------------- Escondido / cleaning -- */
  [id('sl-escondido-cleaning')]: {
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
        <h2>The code is unusually direct about this</h2>
        <p>
          Escondido&rsquo;s municipal code at §22-165 places responsibility on
          the property owner for all maintenance, repair, replacement, cleaning,
          and removal of blockages in the lateral. The city is responsible only
          for damage it or its contractors directly caused.
        </p>
        <p>
          Cleaning a blocked lateral is therefore the owner&rsquo;s to arrange
          and to fund, without the ambiguity that surrounds this question in
          some jurisdictions.
        </p>

        <h2>No programme to offset it</h2>
        <p>
          We found no lateral repair assistance programme in Escondido. Unlike
          Carlsbad and Chula Vista, there appears to be nothing to reduce the
          cost of a structural failure.
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
          Escondido&rsquo;s housing has a median year built of around 1981
          (American Community Survey, 2019&ndash;2023 five-year estimates),
          spanning the transition toward PVC. That range is wide enough that the
          age of a house is a weak predictor of what its lateral is made of or
          how it is holding up.
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
          We also found no lateral repair assistance programme here, unlike
          Carlsbad and Chula Vista; worth confirming for yourself either way.
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
          of San Diego rather than a residential neighbourhood. Its sewer lines
          predominantly serve hotels, restaurants, retail, offices, and
          multifamily buildings.
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
          In the City of San Diego the property owner owns the entire lateral
          and there is no reimbursement for plumbing expenses. On a commercial
          property that sits alongside the operational cost (a closed kitchen,
          displaced tenants, an interrupted trading day), which usually exceeds
          the repair.
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
