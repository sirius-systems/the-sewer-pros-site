/**
 * City of San Diego, CA + Sewer Camera Inspection (`sl-sd-city-camera`) -
 * Henderson-standard rebuild.
 *
 * Authority: CLAUDE.md §9, §22, §24.
 *
 * One local source (`sanDiegoCityContent`, `loc-sd-san-diego`) x one service
 * source (`svc-sewer-camera-inspection`, its `v2` block). Nothing here is new
 * research. Section recipe, each tied to what a camera records or cannot:
 *   1. responsibility + buyingGuide - the owner maintains the lateral to the
 *      City main, wherever that connection is; the camera shows the pipe, not
 *      where the connection is
 *   2. municipalProgram + buyingGuide - no City help with costs found, so
 *      evidence comes before spending; permits are a separate question
 *   3. responsibility + whoToCall - a break beyond the property line: the City's
 *      Plumber's Report process and what footage can and cannot establish
 *   4. systemExplainer - a cleanout flush is not an inspection; no pipe era is
 *      published; the EMRA list names slope and depth, which a camera does not
 *      measure
 * Swap the city and 1-4 fail; swap the service and 2-4 fail.
 *
 * ⚠ The existing body compared San Diego with "places that operate assistance
 * programs" and said an obscured section is the "most common" way an inspection
 * gets over-read. Neither is in a source, so both are dropped.
 *
 * Audit: docs/source-reports/rebuild/sl-sd-city-camera.md
 *
 * ⚠ CITY NUMBERS ARE THE CITY'S, labelled so. No company phone, office, price,
 * offer, response time or guarantee appears. San Diego is a service market, not
 * an office. No legal advice. Repair and replacement are never offered.
 */

import type { PageRebuild } from './types'

export const rebuild: PageRebuild = {
  metaDescription:
    'Sewer camera inspection in San Diego. The City says the lateral is yours to the City main, and we found no City help with costs. See what a camera records.',
  serviceDescription:
    'A sewer camera inspection is a visual inspection of the accessible inside of a sewer line, recorded on video, for properties in the City of San Diego, California.',
  hero: {
    intro: (
      <p>
        In San Diego, the City says the owner maintains the sewer lateral
        all the way to its connection with the City sewer main, even where that
        connection is in the street, an easement or a canyon, and we did not find a
        City program that helps owners pay for lateral work. A camera inspection
        records what is inside that line, on video, with written findings, before you
        clean it, buy the home, or approve work.
      </p>
    ),
  },
  body: (
    <>
      <h2>Your responsibility runs to the City main, wherever that is</h2>
      <p>
        The City&rsquo;s Public Utilities Department says the property owner is
        responsible for maintaining the sewer lateral from the property all the way
        to its connection with the City sewer main. That connection can be in the
        street, beyond the property line, in an easement or in a canyon, so the City
        says responsibility does not stop at the lot line or the curb.
      </p>
      <p>
        A camera shows what is inside the pipe, not where the pipe or the connection
        sits. You receive the inspection video and written findings, and the footage
        records where along the line a condition sits, measured from where the
        camera entered. For where a lateral connects, the City says Development
        Services can help and offers a maps and records review (619-446-5300, the
        City&rsquo;s number). The City also says it has no diagrams showing where
        private sewer lines run on the property, which is a question for line
        locating, a separate service.
      </p>

      <h2>No City help with lateral costs found, so evidence comes first</h2>
      <p>
        We did not find an active City program that gives homeowners a grant,
        reimbursement or other financial help with lateral repair, replacement,
        cleaning or inspection, in the Public Utilities sewer pages, the sewer
        construction page, the maps and records page, Information Bulletin 166 or
        Council Policy 400-10. That is &ldquo;none found in the pages we
        reviewed&rdquo;, not a statement that no help exists, so confirm with Public
        Utilities at 619-515-3500 (the City&rsquo;s number). The City says its
        program for City crews to install sewer laterals is currently suspended.
      </p>
      <p>
        Plan on arranging inspection, cleaning and any repair yourself. The camera is
        what you bring to those decisions: whether the line shows a
        blockage or a defect, where along it, and how that compares with a repair
        recommendation. Permits are a separate question. The City requires a
        Right-of-Way Permit for work in the public right-of-way or a sewer easement,
        and we did not find a City page on whether work confined to private property
        needs one, so ask Development Services (619-446-5242, the City&rsquo;s
        number). A camera inspection does not tell you which approvals apply. The
        Sewer Pros inspects and documents; it does not perform repairs or
        replacements.
      </p>
      <p>
        Buyers are in the same position. The City says that in addition to a home
        inspection, it is a good idea to get a licensed-plumber report on the
        condition of the home&rsquo;s lateral connection. That is City guidance, not
        a requirement, and we found no City sale-time sewer-lateral rule; state-level
        rules are outside this page.
      </p>

      <h2>A break beyond the property line: the City&rsquo;s process, and the footage</h2>
      <p>
        When a licensed plumber finds a break or collapse beyond the property line,
        the City directs the plumber to call what it calls its Sewer Emergency Line,
        619-515-3525 (the City&rsquo;s number, not ours), and to file a
        Plumber&rsquo;s Report. The City says it will investigate within 24 hours.
        We did not find a current City statement of who pays for repairs beyond the
        property line, so we make none.
      </p>
      <p>
        A dated recording shows what the camera found before that process starts,
        and where along the line. It does not establish where a property line is,
        and it cannot show anything below the waterline, so a line that is blocked
        and not draining may need cleaning before the camera can see it. For a break beyond
        the property line, the City&rsquo;s own process governs.
      </p>

      <h2>A cleanout flush is not an inspection</h2>
      <p>
        The City names roots and cooking grease as leading causes of spills from both
        public sewers and private laterals. Council Policy 400-10 says the owner is
        responsible for periodic clearing of roots and other foreign matter from the
        lateral, and for a lateral with a cleanout the City recommends flushing it
        with a high-pressure hose at least once a year. A flush does not show what is
        inside the pipe. A camera does, in the section it reaches.
      </p>
      <p>
        The City&rsquo;s pages we reviewed do not publish a pipe material or an
        installation era, so the only way to know what a lateral is made of and how
        it is holding up is to look at it. The City also requires a special
        agreement, an Encroachment Maintenance Removal Agreement, for certain
        nonstandard laterals, including those that connect in a sewer easement, have
        inadequate slope or unusual depth, or run near trees or a driveway. That is
        a City design and permit rule, not a finding about any one property, and a
        camera does not measure slope or depth. A visibly clear line is not proof
        that the whole line, or the ground around it, is in good condition.
      </p>
    </>
  ),
}
