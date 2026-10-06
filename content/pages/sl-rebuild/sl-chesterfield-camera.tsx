/**
 * Rebuild: Chesterfield + Sewer Camera Inspection (`sl-chesterfield-camera`).
 *
 * Authority: CLAUDE.md §9, §22, §24; Henderson standard
 * (`las-vegas-service-location.tsx`, `sl-henderson-*.tsx`).
 *
 * One local source (`chesterfieldContent`, `loc-stl-chesterfield`) x one
 * service source (`svc-sewer-camera-inspection` v2). Nothing here is new
 * research. Section recipe, each tied to what a camera records or cannot:
 *   1. responsibility - MSD main vs the private lateral, and the City
 *      program's own definition of its lateral, which footage cannot fix
 *   2. housingAge - a newer-housing market, so the camera finds bellies,
 *      pulled joints and later damage rather than old-pipe failure
 *   3. municipalProgram - the City's defect list against what footage can
 *      show, and the City's own video review
 *   4. whoToCall + buyingGuide + systemExplainer - contacts, none found at
 *      sale, and the public sewer project that is not about your lateral
 * Swap the city and 1-4 fail; swap the service and 2-4 fail.
 *
 * Audit: docs/source-reports/rebuild/sl-chesterfield-camera.md
 *
 * ⚠ MSD AND CITY NUMBERS AND DOLLAR TERMS ARE THEIRS, not ours. No price,
 * offer, response time or guarantee appears. The 85.6 percent, 1982 and 1.4
 * percent figures carry the location page's caveat (primary Census check
 * pending, PENDING-015). No legal advice. Repair and replacement are never
 * offered.
 */

import type { PageRebuild } from './types'

export const rebuild: PageRebuild = {
  metaDescription:
    'Sewer camera inspection in Chesterfield, MO. Most homes date from 1970 or later, so see what a camera finds on a newer lateral and in the City program.',
  serviceDescription:
    'A sewer camera inspection is a visual inspection of the accessible inside of a sewer line, recorded on video, for properties in Chesterfield, Missouri.',
  hero: {
    intro: (
      <p>
        Most Chesterfield homes were built in 1970 or later, so what a camera finds on a lateral
        here is often not the failure of an old clay pipe. It is a belly holding water, a joint
        pulled apart by ground movement, or damage from later work. A camera inspection records
        which, on video, before you deal with the City&rsquo;s lateral repair program, which defines
        its own defects and runs its own video review.
      </p>
    ),
  },
  body: (
    <>
      <h2>Where your responsibility starts, and how the City defines its lateral</h2>
      <p>
        For a property on MSD&rsquo;s system, MSD says it maintains the public sewer main and that
        the lateral from your building, including its connection to the main, is private property
        the owner maintains and repairs. We did not find a published rule on who owns the part of a
        lateral under the street, so we repeat only MSD&rsquo;s general statement.
      </p>
      <p>
        Chesterfield&rsquo;s City program uses its own definition: its eligible lateral runs from
        three to five feet outside the foundation or exterior wall to the main in the street or
        sewer easement. The footage records what is visible inside the section the camera reaches,
        and the findings can note where along the line each condition was seen. It does not
        establish where the connection is or where either boundary falls. Which utility serves an
        address near a service boundary, or on septic, should be confirmed by address.
      </p>

      <h2>Newer homes, different findings</h2>
      <p>
        In American Community Survey 2019-2023 estimates, 85.6 percent of Chesterfield housing was
        built in 1970 or later, the median year built is 1982, and 1.4 percent was built before
        1940 (city-wide figures, with the primary Census table check still pending on our location
        page). Pipe from that era is more often PVC than clay, cast iron or bituminized fiber, so
        material failure matters less. Ground movement does not wait for a pipe to age.
      </p>
      <ul>
        <li>A belly: a section that holds standing water, with solids settling where flow slows</li>
        <li>Joint separation: a gap or offset at a joint opened by soil movement</li>
        <li>Damage from later work, near an addition, landscaping or a utility crossing</li>
        <li>Roots entering at any gap or joint</li>
      </ul>
      <p>
        A camera shows standing water directly. Water patterns may suggest a low spot, but a camera
        does not measure slope, so footage alone cannot confirm how deep or long a sag is. Era tells
        you what to expect. The camera shows what is there.
      </p>

      <h2>The City&rsquo;s defect list, and what footage can and cannot show</h2>
      <p>
        Chesterfield&rsquo;s program can pay for repair of a qualifying defective lateral, up to
        $15,000 under the City&rsquo;s March 2026 policy (the City&rsquo;s terms, not a price from
        us). The City defines defects as a collapsed or broken line, a severe offset, a severe
        backfall or belly, or a severe blockage that cannot be cabled out. It treats roots in pipe
        bells and joints as routine maintenance when removing them lets the line work.
      </p>
      <p>
        A camera can record a visible offset, standing water, roots or a break. Whether any of it is
        &ldquo;severe&rdquo; under the policy is the City&rsquo;s call. The City has the owner cable
        the line first, does not reimburse that step, then has its own contractor televise the
        lateral before Public Works accepts or denies. Independent footage does not replace or
        predict that review. It is your own record of the line.
      </p>

      <h2>Who to call, the public sewer project, and buying here</h2>
      <ul>
        <li>
          For a building backup, MSD asks you to call (314) 768-6260 so it can inspect (MSD&rsquo;s
          number, not ours).
        </li>
        <li>
          For the City program, call Chesterfield Public Works at (636) 537-4762 (the
          City&rsquo;s). For an emergency that threatens life or property, the City&rsquo;s Who To
          Call guide says to call 911, which is not a sewer dispatch line.
        </li>
      </ul>
      <p>
        MSD&rsquo;s Conway Meadows Sanitary Relief project, on an undated page that described
        construction starting in spring 2026, concerns the public sewer, not your lateral. In the
        City materials we reviewed we found no sewer-lateral inspection rule for an ordinary
        residential sale (none found, not a confirmed absence), so a buyer who wants evidence has to
        ask for it. The Sewer Pros inspects and documents. It does not perform repairs or
        replacements.
      </p>
    </>
  ),
}
