/**
 * Oceanside + Sewer Cleaning (`sl-oceanside-cleaning`) rebuild.
 *
 * Authority: CLAUDE.md sections 9, 22, 24. One local source (`oceansideContent`)
 * x one service source (`svc-sewer-cleaning` v2). No new research.
 *
 * Section recipe (each section ties an Oceanside fact to what cleaning does):
 *   1. "From the street to your house" - the City's wording, the unpublished
 *      connection point, our cleaning is private lines only
 *   2. Who to call - a plumber for a leak, the City's numbers and what the
 *      City does not publish for sewer backups
 *   3. Housing age - Census figures tied to "cleaning removes the obstruction,
 *      not necessarily the cause"
 *   4. Approvals and the missing program - improvement plans, permits, none
 *      found, cleaning is not an inspection
 *
 * CITY NUMBERS ARE THE CITY'S. No price, offer, response time, emergency or
 * same-day claim, guarantee or equipment name appears.
 */

import type { PageRebuild } from './types'

export const rebuild: PageRebuild = {
  metaDescription:
    'Sewer cleaning for Oceanside, CA. The City says private sewer lines, from the street to your house, are the owner’s. See what cleaning does and does not do.',
  serviceDescription:
    'Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in an accessible private sewer line, for properties in Oceanside, California.',
  hero: {
    intro: (
      <p>
        In Oceanside, the City runs the public sewer system and says private sewer lines,
        &ldquo;from the street to your house,&rdquo; are the property owner&rsquo;s responsibility.
        We did not find where the City&rsquo;s part ends. Sewer cleaning removes grease, roots,
        debris and other buildup from the accessible private line. It clears the pipe. It does
        not repair it.
      </p>
    ),
  },
  body: (
    <>
      <h2>&ldquo;From the street to your house&rdquo;: whose line gets cleaned</h2>
      <p>
        The City of Oceanside Water Utilities Department runs the public sewer system, which it
        describes as over 450 miles of pipelines, two wastewater treatment plants and 34 sewer
        lift stations. The City says private sewer lines, &ldquo;from the street to your
        house,&rdquo; are the property owner&rsquo;s responsibility.
      </p>
      <p>
        We did not find a City statement of the exact point where its part ends, or of whether
        the owner&rsquo;s part includes the section under the street, so ask Water Utilities
        before you assign cost. Our cleaning covers accessible private-property sewer and drain
        lines, not public mains, and cleaning does not show where that connection is.
      </p>

      <h2>For a leak the City says call a plumber, and it publishes no sewer backup line</h2>
      <p>
        For a sewer leak on your property, the City says to call a plumber. Its customer service
        number is (760) 435-5800 (the City&rsquo;s number, not ours). The City also publishes
        (760) 435-3900 for water emergencies such as a leaking fire hydrant or a water main
        break. It frames that number around City water, and we did not find a sewer-specific
        backup or overflow instruction, so we do not present it as a sewer line.
      </p>
      <p>
        Cleaning is one way to address a restriction on your side of the connection. If a
        plumber or the City points to your lateral, a camera look can show what is in it. If
        sewage is actively backing up into your home, contact us to discuss the situation.
      </p>

      <h2>A 1984 median year built does not say what is blocking your line</h2>
      <p>
        Oceanside&rsquo;s median year built is 1984, plus or minus 2 years, according to the U.S.
        Census Bureau&rsquo;s American Community Survey (2020-2024 5-year estimates, Oceanside
        city). Our arithmetic on the Census rows puts 16.9 percent of housing units before 1970,
        48.6 percent from 1970 to 1989 and 34.5 percent in 1990 or later.
      </p>
      <p>
        Year built does not tell you the condition or material of a lateral, which can be
        repaired, rerouted or replaced after the house was built, and the Census place may not
        match the area the City&rsquo;s system serves. Cleaning removes the obstruction, not
        necessarily what is causing it. A cleaned line with a belly still has a belly, and a line
        that flows again is not proof the pipe is sound.
      </p>

      <h2>The City&rsquo;s approvals, and the repair help we did not find</h2>
      <p>
        We found no City lateral repair, replacement, grant, reimbursement or
        inspection-assistance program (&ldquo;none found&rdquo;, not a statement that none
        exists, and the City&rsquo;s pages carry no current date). The City says sewer
        improvements in a public right-of-way, a City easement or City property need an
        improvement plan approved by Water Utilities and signed by a Registered Civil Engineer.
        For private property it says improvements may trigger a permit and points to Development
        Services.
      </p>
      <p>
        We did not find a published rule that covers every repair of an existing lateral. Cleaning
        is not a repair, and a camera look does not tell you which approvals apply. We also found
        no City rule requiring a lateral inspection when a home is sold, so a buyer who wants the
        line&rsquo;s condition has to ask for a pre-purchase inspection.
      </p>
    </>
  ),
  local: {
    title: 'Not sure who to call about a sewer problem?',
    description:
      'For a sewer leak on your property the City says to call a plumber. We did not find a sewer-specific backup or overflow instruction or number from the City, so a plumber or a cleaning visit is where most owners start.',
  },
  cta: {
    title: 'Request sewer cleaning in Oceanside',
    body: 'Tell us what the line is doing, and ask what a visit includes, including whether a camera look before or after the cleaning is part of it.',
  },
}
