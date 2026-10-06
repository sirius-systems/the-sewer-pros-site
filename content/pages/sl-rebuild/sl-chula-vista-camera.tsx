/**
 * Chula Vista, CA + Sewer Camera Inspection (`sl-chula-vista-camera`).
 *
 * Authority: CLAUDE.md §9, §22, §24, §26; Henderson standard
 * (`las-vegas-service-location.tsx`, `sl-henderson-*.tsx`).
 *
 * One local source (`chulaVistaContent`, `loc-sd-chula-vista`) x one service
 * source (`svc-sewer-camera-inspection`, its `v2` block). Nothing here is new
 * research. Section recipe, each tied to what a camera records or cannot:
 *   1. responsibility - the policy starts the lateral at the first foot
 *   2. municipalProgram (48-hour exception, street tree) + limits (roots outside the pipe)
 *   3. systemExplainer (City guidance, goals) + decision (cleaning vs camera)
 *   4. whoToCall + FAQ backup/permit + ask - contacts vs what footage is for
 * Swap the city and 1-4 fail; swap the service and 2-4 fail.
 *
 * Audit: docs/source-reports/rebuild/sl-chula-vista-camera.md
 *
 * ⚠ POLICY, NOT A GRANT. Council Policy 570-01 is a cost rule for some
 * stoppages. This page never says a grant exists, never says the City will pay
 * for a given stoppage, never promises reimbursement, and never says our
 * footage satisfies a City condition ("licensed plumber", "certified arborist"
 * appear only as the City's own conditions). NUMBERS ARE THE CITY'S, not ours.
 * No company phone, office, price, offer, response time or guarantee appears.
 * No legal advice. Repair and replacement are never offered.
 */

import type { PageRebuild } from './types'

export const rebuild: PageRebuild = {
  hero: {
    intro: (
      <p>
        The City of Chula Vista runs the public sewer, and its Council policy puts
        the lateral on the owner from the first foot off the public sewer to the
        building, with a narrow exception for some stoppages that must be reported
        to the City within 48 hours. A camera inspection records what is inside
        that line, on video, before you clean it or approve work.
      </p>
    ),
  },
  metaDescription:
    'Sewer camera inspection in Chula Vista, CA. The City’s policy puts the lateral on the owner from the first foot off the public sewer. See what a camera records.',
  serviceDescription:
    'A sewer camera inspection is a visual inspection of the accessible inside of a sewer line, recorded on video, for properties in the City of Chula Vista, California.',
  body: (
    <>
      <h2>The City&rsquo;s policy starts your lateral at the first foot</h2>
      <p>
        Sewer service in Chula Vista comes from the City, not from a separate
        sanitation district. The City&rsquo;s sewer maintenance policy (Council
        Policy 570-01) puts the lateral on the owner from its connection with the
        public sewer to the building, and beyond, at the owner&rsquo;s sole
        expense. It defines the connection point as the first foot of the lateral
        off the outside of the public sewer. The City maintains the public sewer
        mains and manholes.
      </p>
      <p>
        For permits, the City splits the same line into a sewer lateral, from the
        main to the property line, and a building sewer, from the property line to
        the house. The footage records where along the line a condition sits,
        measured from where the camera entered. It does not establish where the
        connection point or a property line is.
      </p>

      <h2>The 48-hour exception, and what a camera can and cannot show</h2>
      <p>
        The policy makes one exception. If a licensed plumber&rsquo;s camera finds
        a stoppage in the public sewer, in the first foot of the lateral at the
        connection, or caused by a City street tree, the owner must notify the City
        within 48 hours of identifying the location. The City says it reimburses
        reasonable costs of locating and clearing a qualifying stoppage if City
        staff agree with the camera finding. We found no City lateral repair or
        grant program.
      </p>
      <p>
        For a street-tree cause, the City says the owner has the burden of proof:
        excavate the root from its origin to where it entered the lateral, or get
        written confirmation from a certified arborist based on a root sample. A
        camera shows roots visible inside the pipe, not the root system outside it,
        and it does not by itself decide where a stoppage is for the City&rsquo;s
        purposes. The City&rsquo;s pages do not say what documentation it accepts
        beyond a plumber&rsquo;s camera finding, and the posted policy shows a 2014
        revision with its resolution number left blank, so ask Public Works first.
      </p>

      <h2>Grease, roots and cleaning: the City&rsquo;s guidance, and the camera</h2>
      <p>
        The City says grease is the most common cause of pipe blockages, that roots
        enter a lateral through cracked or broken pipe, and that a rule of thumb is
        to have a lateral maintained annually. It also warns that cleaning a
        private lateral can push debris such as cut root balls and grease into the
        public sewer, where it can cause a blockage. That is the City&rsquo;s
        guidance for its system, not a statement about any one property.
      </p>
      <p>
        The City lists goals of cleaning its sewer lines once a year and
        inspecting an average of 47 miles of sewer line per year with cameras. That
        covers the public sewer. The pages we reviewed give no age for the system
        and say nothing about the condition of your lateral, and a camera is how
        you see it. If the line is blocked and not draining, a camera generally
        cannot see under the water, so cleaning may need to come first. There is no
        universal order.
      </p>

      <h2>Who to call when sewage backs up, and what the footage is for</h2>
      <ul>
        <li>
          The City says to stop all water use first. If sewage stops when the water
          is off, it says to contact a licensed plumber or sewer cleaning
          contractor. If it keeps backing up, contact Public Works or the
          City&rsquo;s after-hours number right away.
        </li>
        <li>
          If sewage reaches a street, gutter or storm drain, call Public Works
          Operations at (619) 397-6000 (Monday to Thursday 6:30am to 4:00pm, Friday
          6:30am to 3:00pm, closed every other Friday). After hours, on holidays and
          on weekends, the City says to call Chula Vista Police at (619) 691-5151.
          These are the City&rsquo;s numbers, not ours.
        </li>
      </ul>
      <p>
        The City says repair or replacement of a lateral needs a City permit before
        work begins. A camera finding is a visible observation, not a repair
        recommendation, and it does not tell you which approvals apply. The Sewer
        Pros does not repair or replace sewer lines, so you can compare written
        estimates against the video.
      </p>
    </>
  ),
  cta: {
    title: 'Schedule a sewer camera inspection in Chula Vista',
    body: 'See the visible condition of your line on video, with written findings, and where along it a condition sits. Ask Public Works what it accepts before you submit anything to the City.',
  },
}
