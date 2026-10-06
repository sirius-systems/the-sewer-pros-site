/**
 * Rebuild: St. Louis City + Sewer Camera Inspection (`sl-stl-city-camera`).
 *
 * Authority: CLAUDE.md §9, §22, §24; Henderson standard
 * (`las-vegas-service-location.tsx`, `sl-henderson-*.tsx`).
 *
 * One local source (`stLouisCityContent`, `loc-stl-st-louis-city`) x one
 * service source (`svc-sewer-camera-inspection` v2). Nothing here is new
 * research. Section recipe, each tied to what a camera records or cannot:
 *   1. responsibility - the lateral is private to the MSD main, even under the
 *      street, so the footage is the owner's own evidence
 *   2. municipalProgram - what the City program covers and excludes, and where
 *      an independent inspection fits next to the City's own plumber video
 *   3. housingAge + systemExplainer - older housing and combined sewers, tied
 *      to what a camera can and cannot show on the lateral
 *   4. whoToCall + municipalProgram permit rule - MSD first, then the camera
 * Swap the city and 1-4 fail; swap the service and 2-4 fail.
 *
 * Audit: docs/source-reports/rebuild/sl-stl-city-camera.md
 *
 * ⚠ MSD AND CITY NUMBERS ARE THEIRS, not ours. No fee, price, offer, response
 * time or guarantee appears. The "58 percent" figure is carried with the
 * location page's caveat (republished ACS data, primary table check pending).
 * No legal advice. Repair and replacement are never offered.
 */

import type { PageRebuild } from './types'

export const rebuild: PageRebuild = {
  metaDescription:
    'Sewer camera inspection in St. Louis City. MSD maintains the main, but your lateral is private, even under the street. See what a camera records on it.',
  serviceDescription:
    'A sewer camera inspection is a visual inspection of the accessible inside of a sewer line, recorded on video, for properties in St. Louis City, Missouri.',
  hero: {
    intro: (
      <p>
        In St. Louis City, MSD maintains the public sewer main, and the lateral from your building
        to it is private property, even where it runs under the street or alley. A camera
        inspection records what is inside that line on video, with written findings. It is your own
        evidence, separate from the City&rsquo;s lateral repair program, which asks for its own
        plumber&rsquo;s video and excludes clogs and roots.
      </p>
    ),
  },
  body: (
    <>
      <h2>Your lateral runs to the MSD main, even under the street</h2>
      <p>
        MSD says it maintains the public sewer main, and that the lateral connecting your building
        to that main, including its connection, is private property and normally the
        owner&rsquo;s to maintain and repair, even where it runs under the street or alley. The City
        says the same of the entire lateral from a home to the MSD main.
      </p>
      <p>
        That is why the camera matters here. A line that is yours all the way to the main is a line
        you need evidence about. The footage records what is visible in the section the camera
        reaches, and you can ask that the written findings note where along the line each condition
        was seen. It does not establish where the connection to the main is, or who is responsible
        at a given point.
      </p>

      <h2>What the City&rsquo;s repair program asks for, and where a camera fits</h2>
      <p>
        The City&rsquo;s Sewer Lateral Repair Program is aimed at severe damage under the public
        right-of-way that causes a cave-in or a backup into the home, for residential properties of
        six or fewer units with fully paid real-estate taxes. The City says it does not cover
        clearing clogs or tree roots anywhere on the lateral, or breaks under private property.
      </p>
      <p>
        The City&rsquo;s page says to hire a licensed City plumber to inspect the line and send the
        plumber&rsquo;s statement and video to the Street Department, and the City decides
        eligibility. An independent camera inspection does not replace that step. It gives you your
        own recorded evidence, which can help you tell a clog or root problem the program does not
        cover from damage worth raising with the Street Division. The program page is dated 2014, so
        confirm current terms and funding with the Street Division.
      </p>

      <h2>Older City housing, combined sewers, and what only a camera shows</h2>
      <p>
        About 58 percent of St. Louis City&rsquo;s housing units were built in 1939 or earlier,
        according to American Community Survey 2019-2023 estimates as republished by Point2Homes
        (our location page notes the primary Census table check is pending). Older laterals were
        commonly vitrified clay, which wears at the joints and lets roots in, or cast iron, which
        corrodes and scales on the inside. Those are general industry timelines, not a statement
        about any one home, and many laterals have been repaired or replaced since.
      </p>
      <ul>
        <li>Roots, deposits and obstructions visible inside the pipe</li>
        <li>Cracks, and offset or separated joints</li>
        <li>Visible corrosion on the inside of the pipe, and standing water</li>
      </ul>
      <p>
        MSD says most of the City is served by combined sewers that can be overwhelmed in intense
        rain, which can cause wet-weather basement backups in affected areas. That is a
        system-level fact, not a finding about your lateral. A camera also cannot see under water,
        so in a line that is blocked and not draining, cleaning may need to come first.
      </p>

      <h2>Who to call first, and what the camera does not decide</h2>
      <p>
        If sewage is backing up through a floor drain, you smell sewage outside, or you see an
        overflow or a missing manhole cover, MSD asks you to report it right away at (314) 768-6260
        (MSD&rsquo;s number, not ours). MSD investigates whether the cause is the public sewer or
        your lateral. If MSD or a plumber points to your lateral, or you want proof of its
        condition, a camera records it.
      </p>
      <p>
        The City says replacing a lateral requires a plumbing permit and inspection, issued to
        City-certified licensed plumbing contractors. A camera inspection does not tell you which
        approvals apply, and a finding is a visible observation, not a repair recommendation. The
        Sewer Pros inspects and documents. It does not perform repairs or replacements.
      </p>
    </>
  ),
}
