/**
 * Rebuild: Chesterfield + Hydro Jetting (`sl-chesterfield-hydro`).
 *
 * Authority: CLAUDE.md §9, §22, §24; Henderson standard
 * (`sl-henderson-hydro.tsx`).
 *
 * One local source (`chesterfieldContent`, `loc-stl-chesterfield`) x one
 * service source (`svc-hydro-jetting` v2). Nothing here is new research.
 * Section recipe, each tied to what jetting does or cannot:
 *   1. municipalProgram - the City has the owner cable first and treats routine
 *      root removal as maintenance, so how jetting relates is a question to ask
 *   2. municipalProgram + service limits - the City's defect list against what
 *      jetting cannot correct
 *   3. housingAge - newer housing, bellies and pulled joints, and why jetting a
 *      belly leaves the cause
 *   4. whoToCall + service process - MSD and Public Works contacts, added water
 *      and an active backup, camera first
 * Swap the city and 1-4 fail; swap the service and 1-4 fail.
 *
 * Audit: docs/source-reports/rebuild/sl-chesterfield-hydro.md
 *
 * ⚠ MSD AND CITY NUMBERS AND TERMS ARE THEIRS, not ours. No price, offer,
 * response time, guarantee, pressure or flow figure appears. Equipment names
 * appear only in the process steps lifted from the service page. The 85.6
 * percent, 1982 and 1.4 percent figures carry the location page's caveat
 * (primary Census check pending, PENDING-015). Repair and replacement are
 * never offered.
 */

import type { PageRebuild } from './types'

export const rebuild: PageRebuild = {
  metaDescription:
    'Hydro jetting in Chesterfield, MO. The City program treats routine roots as maintenance. See what jetting clears and what it cannot fix on a newer line.',
  serviceDescription:
    'Hydro jetting cleans an accessible sewer or drain line with pressurized water sent through a hose and nozzle, for properties in Chesterfield, Missouri.',
  hero: {
    intro: (
      <p>
        Chesterfield&rsquo;s lateral repair program treats routine root removal as maintenance, and
        most homes here were built in 1970 or later. Hydro jetting cleans an accessible line with
        pressurized water, loosening buildup and flushing it out. It does not correct a belly, a
        pulled joint or a break, so whether it suits your line should rest on what the line looks
        like.
      </p>
    ),
  },
  body: (
    <>
      <h2>Roots and cabling: how Chesterfield&rsquo;s program treats cleaning</h2>
      <p>
        The City says roots growing through pipe bells and joints are routine maintenance when
        removing them lets the line work, and that the initial cabling, done by a licensed plumbing
        company or drainlayer, is routine maintenance the City does not reimburse. A severe blockage
        that cannot be cabled out can meet the City&rsquo;s definition of a defective lateral. So
        roots that keep returning are a maintenance question, not an automatic repair claim.
      </p>
      <p>
        Jetting can remove roots that are loose or accessible. It does not repair the opening they
        entered through. The City&rsquo;s steps name cabling, and we have not confirmed whether
        jetting would count in its place, so ask Public Works at (636) 537-4762 (the City&rsquo;s
        number, not ours) before assuming it does.
      </p>

      <h2>What jetting clears, and what the City&rsquo;s defect list leaves</h2>
      <ul>
        <li>Grease and soap buildup</li>
        <li>Debris and wipes caught in the line</li>
        <li>Roots that are loose or accessible</li>
        <li>General buildup on the pipe wall</li>
      </ul>
      <p>
        Jetting does not correct a cracked or broken pipe, an offset or separated joint, a collapsed
        section, or a belly that holds water. Those are close to the defects the City&rsquo;s
        program defines (a collapsed or broken line, a severe offset, a severe backfall or belly),
        and the City decides what qualifies. The Sewer Pros does not repair or replace sewer lines.
        If a camera shows such a condition, further evaluation outside our scope may be
        appropriate.
      </p>

      <h2>Mostly newer homes, so a slow line may not be buildup</h2>
      <p>
        In American Community Survey 2019-2023 estimates, 85.6 percent of Chesterfield housing was
        built in 1970 or later, the median year built is 1982, and 1.4 percent was built before
        1940 (city-wide figures, with the primary Census table check still pending on our location
        page). Pipe from that era is more often PVC than clay or cast iron, so scale is less
        often the story. A belly holding water, a joint opened by ground movement, or damage from
        later work is more likely.
      </p>
      <p>
        Jetting a line with a belly can clear the material that settled there and leave the belly.
        If a line is cleaned and the problem returns, the cause may be something cleaning cannot
        remove. Jetting also depends on the pipe&rsquo;s condition and material, and visible
        structural defects call for a closer evaluation before cleaning, which is why a camera look
        comes first when it is included.
      </p>

      <h2>Before you jet: MSD, Public Works and added water</h2>
      <p>
        For a building backup, MSD asks you to call (314) 768-6260 so it can inspect whether the
        public sewer is involved (MSD&rsquo;s number, not ours). Added water can contribute to a
        backup if the line cannot carry it away, so the method and settings are matched to the
        line, and the work is paced to it. MSD&rsquo;s Conway Meadows Sanitary Relief project
        concerns the public sewer, not your lateral.
      </p>
      <p>
        If what we see goes beyond cleaning, we will say so plainly. Jetting clears what can be
        removed. It does not tell you whether the City&rsquo;s program applies to your line.
      </p>
    </>
  ),
}
