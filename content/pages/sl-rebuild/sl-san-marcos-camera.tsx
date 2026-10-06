/**
 * San Marcos, CA + Sewer Camera Inspection (`sl-san-marcos-camera`).
 *
 * Authority: CLAUDE.md §9, §22, §24, §26; Henderson standard
 * (`las-vegas-service-location.tsx`, `sl-henderson-*.tsx`).
 *
 * One local source (`sanMarcosContent`, `loc-sd-san-marcos`) x one service
 * source (`svc-sewer-camera-inspection`, its `v2` block). Nothing here is new
 * research. Section recipe, each tied to what a CAMERA records or cannot:
 *   1. responsibility (three agencies) - the camera cannot say whose line it is
 *   2. responsibility + municipalProgram + limits - owner's lateral, none found
 *   3. systemExplainer (smoke testing, no age) - district test vs a look inside
 *   4. whoToCall + municipalProgram.covers + ask - contacts vs what footage is for
 * Swap the city and 1-4 fail; swap the service and 2-4 fail.
 *
 * Audit: docs/source-reports/rebuild/sl-san-marcos-camera.md
 *
 * ⚠ SAN MARCOS HAS THREE AGENCIES. Every rule here is Vallecitos Water
 * District's and says so. No Vista Irrigation District or Rincon del Diablo
 * rule is stated. NUMBERS ARE THE DISTRICT'S, not ours. No company phone,
 * office, price, offer, response time or guarantee appears. No legal advice.
 * Repair and replacement are never offered.
 */

import type { PageRebuild } from './types'

export const rebuild: PageRebuild = {
  hero: {
    intro: (
      <p>
        The City of San Marcos says it does not provide sewer service, and one of
        three agencies does, depending on the address. Where Vallecitos Water
        District serves it, the district says the sewer lateral is the
        owner&rsquo;s from the building through its connection to the
        district&rsquo;s main. A camera inspection records what is inside that
        line, on video, before you clean it, buy the home, or approve work.
      </p>
    ),
  },
  metaDescription:
    'Sewer camera inspection in San Marcos, CA. The City provides no sewer service, and Vallecitos says the lateral is the owner’s. See what a camera records.',
  serviceDescription:
    'A sewer camera inspection is a visual inspection of the accessible inside of a sewer line, recorded on video, for properties in San Marcos, California, where the agency that serves the address decides which rules apply.',
  body: (
    <>
      <h2>Three agencies serve San Marcos, so start with whose line it is</h2>
      <p>
        The City of San Marcos says it does not provide water or sewer service. It
        names three agencies that serve different parts of the city: Vallecitos
        Water District, Vista Irrigation District and Rincon del Diablo Municipal
        Water District. We did not find a map that assigns every San Marcos parcel
        to one of them, and Vallecitos says its Engineering Department can tell
        you whether a parcel is inside its boundary.
      </p>
      <p>
        A camera records the inside of your line. It cannot tell you which agency
        serves the address, and it does not establish where the connection to a
        district main is. The rules on this page are Vallecitos&rsquo;s. If
        another agency serves your address, ask that agency what applies; we make
        no claim about its rules.
      </p>

      <h2>At a Vallecitos address the lateral is yours, so the video is your record</h2>
      <p>
        For a property on Vallecitos Water District&rsquo;s sewer system, the
        district says the owner is responsible for the lateral, the pipe from the
        building to the district&rsquo;s main, through its connection to that main.
        The district maintains the main. We found no Vallecitos lateral repair,
        grant or reimbursement program on the district pages we reviewed. That is
        &ldquo;none found&rdquo;, not a statement that none exists.
      </p>
      <p>On a line that is yours to maintain, the camera records:</p>
      <ul>
        <li>Roots, grease, scale and other deposits visible inside the pipe</li>
        <li>Cracks, offset or separated joints and visible surface damage</li>
        <li>Standing water, and the places where other lines join the pipe</li>
        <li>Any part of the line the camera could not view, and why</li>
      </ul>
      <p>
        You receive the inspection video and written findings. The footage records
        where along the line a condition sits, measured from where the camera
        entered. It cannot show anything below the waterline, and it does not
        establish where the district&rsquo;s responsibility begins.
      </p>

      <h2>The district&rsquo;s smoke testing is not an inspection of your lateral</h2>
      <p>
        Vallecitos says rainwater can enter its sewer lines, and that it
        smoke-tests its sanitary sewer lines to find cracks and other openings.
        The district describes that testing as an assessment of its own system
        rather than private systems, although problems in private systems may
        sometimes show up. It is a test of district lines, not a look inside
        yours.
      </p>
      <p>
        The district pages we reviewed give no age for the mains or laterals
        serving any neighborhood, and nothing on them tells you the condition of an
        individual property&rsquo;s lateral. A camera is how you see yours. It
        records visible cracks and separated joints on the accessible line, but it
        cannot show the soil around the pipe or a section it could not reach.
      </p>

      <h2>Who to call, and what the footage is for</h2>
      <ul>
        <li>
          For a sewer spill, the district&rsquo;s website says to call 911.
          Vallecitos lists (760) 744-0460 as its main number and says its
          Operations and Maintenance Department is on call 24 hours a day, seven
          days a week. These are the district&rsquo;s number and statements, not
          ours.
        </li>
        <li>
          Vallecitos says it does not install private water or sewer connections;
          a contractor the owner selects does that work. We did not find a
          published rule on which approvals cover repair of an existing lateral, so
          ask Vallecitos Engineering before you pay for work.
        </li>
      </ul>
      <p>
        If the district or a plumber points to your lateral, the footage shows
        what is in the line. A camera finding is a visible observation, not a
        repair recommendation, and it does not tell you which approvals apply. The
        Sewer Pros does not repair or replace sewer lines, so you can take the
        video to another company for a second look and compare written estimates.
      </p>
    </>
  ),
  local: {
    title: 'A Vallecitos lateral with no program behind it',
    description:
      'The district says the lateral is the owner’s through its connection to the main, and we found no Vallecitos lateral repair, grant or reimbursement program. The video is the evidence you hold before you pay for work.',
  },
  cta: {
    title: 'Schedule a sewer camera inspection in San Marcos',
    body: 'See the visible condition of your line on video, with written findings, before you clean it, buy the home or approve work. Confirm which agency serves your address first.',
  },
}
