/**
 * Escondido + Sewer Cleaning (`sl-escondido-cleaning`) rebuild.
 *
 * Authority: CLAUDE.md sections 9, 22, 24. One local source (`escondidoContent`)
 * x one service source (`svc-sewer-cleaning` v2). No new research.
 *
 * Section recipe (each section ties an Escondido fact to what cleaning does):
 *   1. Section 22-165 - the owner maintains and cleans the lateral to the
 *      connection; our cleaning is accessible private lines only
 *   2. Before cleaning - the City's call-first guidance, Public Works, which
 *      agency serves the address
 *   3. What cleaning does and does not do - cleanout duty, the code's cost and
 *      video provisions, cleaning is not repair
 *   4. No program found, Census median year built, when cleaning is enough
 *
 * CITY NUMBERS ARE THE CITY'S. No price, offer, response time, emergency or
 * same-day claim, guarantee or equipment name appears.
 */

import type { PageRebuild } from './types'

export const rebuild: PageRebuild = {
  metaDescription:
    'Sewer cleaning for Escondido, CA. Municipal Code 22-165 puts cleaning the lateral on the owner. See what cleaning does and what it does not.',
  serviceDescription:
    'Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in an accessible private sewer line, for properties in Escondido, California.',
  hero: {
    intro: (
      <p>
        In Escondido, section 22-165 of the Municipal Code puts cleaning the sewer lateral on the
        property owner, up to and including the connection to the City&rsquo;s main. Sewer
        cleaning removes grease, roots, debris and other buildup from the accessible private
        line. It clears the pipe. It does not repair it, and the City&rsquo;s own sewer plan
        stresses calling the City before cleaning a private lateral.
      </p>
    ),
  },
  body: (
    <>
      <h2>Section 22-165 puts cleaning the lateral on the owner</h2>
      <p>
        Section 22-165 of the Escondido Municipal Code makes the owner responsible for all
        maintenance, repair, replacement, cleaning and removal of blockages in the sewer
        connection lateral, and for the cost of that work, &ldquo;up to and including the
        connection to the main&rdquo;. The City maintains the public sewer main. It may be
        responsible for repairs only if the owner proves the damage came from work by the City
        or a contractor working for the City.
      </p>
      <p>
        Our cleaning covers accessible private-property sewer and drain lines, not public mains.
        Cleaning does not show where the connection is or which side of it a blockage is on, so
        ask Public Works how the code applies to your address.
      </p>

      <h2>Before you clean: the City asks to be called first</h2>
      <p>
        The City&rsquo;s Sewer System Management Plan says its public education literature
        stresses the need to call the City before cleaning a private lateral, so the City can
        remove any debris that cleaning pushes into the public sewer line. That is the
        City&rsquo;s guidance. It does not describe a City program and it does not require our
        services.
      </p>
      <p>
        If you cannot tell whether a backup is in the main or the lateral, the City&rsquo;s FAQ
        says to call City Public Works at (760) 839-4668 (the City&rsquo;s number, not ours). The
        FAQ says the City will inspect the public main free of charge, and that if the main is
        clear the owner is told the blockage is probably in the lateral. Parts of Escondido are
        served by Vallecitos Water District and some properties are on septic, so confirm who
        serves your address first.
      </p>

      <h2>What cleaning does on an Escondido lateral, and what it does not</h2>
      <p>
        Hydraulic or mechanical equipment, chosen for the line, removes the grease, roots,
        deposits or debris that restrict flow, usually through a cleanout. The code makes the
        owner responsible for locating, exposing and maintaining the property line cleanout so
        the lateral can be inspected, cleaned and cleared, and it limits who may expose a lateral
        inside a public right-of-way, so ask Public Works before opening anything in the street.
      </p>
      <p>
        Cleaning does not repair a cracked, offset, separated or collapsed pipe, and a line that
        flows again is not proof the pipe is sound. The code also puts the cost of verifying
        that a lateral is broken or damaged on the owner. After a maintenance-related violation
        or an illegal discharge, it says the owner or management company must have the lateral
        cleaned and televised by a licensed plumber and give the City a copy of the video. That
        is the code&rsquo;s condition. We do not say our work meets it.
      </p>

      <h2>No City program offsets it, and a 1981 median does not show your line</h2>
      <p>
        We found no City of Escondido lateral repair, replacement, grant or reimbursement
        program (&ldquo;none found&rdquo;, not a statement that none exists), so the cost of
        cleaning falls on the owner. The Census median year built for Escondido is 1981
        (American Community Survey, 2020-2024 5-year estimates, Escondido city), and about half
        of housing units were built in the 1970s and 1980s. The Census counts homes, not sewer
        pipes, so house age does not show what a lateral is made of or how it is holding up.
      </p>
      <p>
        A restriction caused by removable grease, roots, wipes or debris may clear with cleaning,
        and we say so when that is what the line shows. A clog that keeps coming back may mean
        buildup remains or a pipe condition is involved, and a camera can help show which. We
        found no City rule requiring a sewer inspection when a home is sold, so a buyer who wants
        the line&rsquo;s condition has to ask for one.
      </p>
    </>
  ),
  local: {
    title: 'Not sure the blockage is in your lateral?',
    description:
      'The City’s FAQ says to call City Public Works at (760) 839-4668 (the City’s number) when you cannot tell whether a backup is in the main or the lateral. It says the City will inspect the public main, and that if the main is clear the blockage is probably in the lateral.',
  },
  cta: {
    title: 'Request sewer cleaning in Escondido',
    body: 'Tell us what the line is doing and whether the City has checked its main, and ask whether a camera look before or after is included.',
  },
}
