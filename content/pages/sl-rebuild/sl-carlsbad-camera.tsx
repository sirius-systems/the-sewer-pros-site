/**
 * Carlsbad, CA + Sewer Camera Inspection (`sl-carlsbad-camera`).
 *
 * Authority: CLAUDE.md §9, §22, §24, §26; Henderson standard
 * (`las-vegas-service-location.tsx`, `sl-henderson-*.tsx`).
 *
 * One local source (`carlsbadContent`, `loc-sd-carlsbad`) x one service source
 * (`svc-sewer-camera-inspection`, its `v2` block). Nothing here is new research.
 * Lens: an OWNER of an existing line who wants evidence. The sibling page
 * (`sl-carlsbad-prepurchase`) takes the BUYER lens and does not reuse this
 * wording. Section recipe, each tied to what a camera records or cannot:
 *   1. responsibility + nearbyAreas - three agencies, three descriptions of the lateral
 *   2. systemExplainer (City guidance, LWD) + limits - camera interval, cleanout cap
 *   3. municipalProgram - the grants do not ask for a camera inspection
 *   4. whoToCall + ask - agency numbers vs what footage is for
 * Swap the city and 1-4 fail; swap the service and 2-4 fail.
 *
 * Audit: docs/source-reports/rebuild/sl-carlsbad-camera.md
 *
 * ⚠ CARLSBAD HAS THREE AGENCIES. Every fact names its agency; no rule is carried
 * from one to another. GRANT STATUS IS NEVER STATED (neither agency posts a
 * balance). The $3,000 figures are agency program terms. NUMBERS ARE THE
 * AGENCIES', not ours. No company phone, office, price, offer, response time or
 * guarantee appears. No legal advice. Repair and replacement are never offered.
 */

import type { PageRebuild } from './types'

export const rebuild: PageRebuild = {
  hero: {
    intro: (
      <p>
        Carlsbad is served by three sewer agencies, and in each service area we
        reviewed the published rules put the private lateral on the owner. A
        camera inspection records what is inside that line, on video, so you have
        evidence before you clean it, plan around a grant, or approve work.
      </p>
    ),
  },
  metaDescription:
    'Sewer camera inspection in Carlsbad, CA. Three agencies serve the city and the lateral is the owner’s. See what a camera records and what the grants ask for.',
  serviceDescription:
    'A sewer camera inspection is a visual inspection of the accessible inside of a sewer line, recorded on video, for properties in Carlsbad, California, which is served by three separate sewer agencies.',
  body: (
    <>
      <h2>Whose rules apply to your Carlsbad line</h2>
      <p>
        Carlsbad has no single sewer provider. The City of Carlsbad serves most of
        the city, and the southern part falls to Leucadia Wastewater District or
        Vallecitos Water District. The City points to its sewer district map to
        find out which area a property is in, so the city limits alone do not tell
        you. Start with the{' '}
        <a href="https://www.carlsbadca.gov/departments/utilities/sewer/for-property-owners">
          City&rsquo;s property-owner page
        </a>
        .
      </p>
      <p>
        Each agency describes the owner&rsquo;s lateral a little differently. The
        City says it runs from the building to the main, typically in the street.
        Vallecitos includes the point of connection to its main, and Leucadia
        includes the physical connection to its system. The footage records where
        along the line a condition sits, measured from where the camera entered.
        It does not establish where any of those points is.
      </p>

      <h2>What the City tells owners, and where a camera fits</h2>
      <p>
        In its service area, the City says a lateral should ideally be
        professionally cleaned once a year, and that a professional should inspect
        it with a small camera every three to five years, or sooner with a
        sewage-like odor or frequent clogged drains. That is the City&rsquo;s
        guidance, not a statement about any one property, and recommended
        intervals vary by property and by local guidance.
      </p>
      <p>
        Leucadia says tree roots or other obstructions can block a lateral and
        cause a backup into a home, and that a damaged lateral can lead to
        backups, especially during storms. A camera records the roots, deposits,
        cracks and offset joints visible in the accessible line. It cannot show the
        soil around the pipe or how much service life the pipe has left.
      </p>
      <p>
        The City says the cleanout, the access point used to inspect the line, is
        usually within three to five feet of the building, and that its cap must
        stay on tight. It warns that removing the cap to relieve a backup causes a
        sewer spill and is a health violation.
      </p>

      <h2>The grants do not ask for a camera inspection</h2>
      <p>
        The City publishes a Sewer Lateral Grant Program reimbursing up to $3,000
        toward replacing or rehabilitating a private lateral, first come, first
        served, with highest priority for locations that have had overflows or
        spills. Leucadia Wastewater District publishes a separate grant that
        reimburses 50% of repair cost, up to $3,000. We did not find a lateral
        grant from Vallecitos.
      </p>
      <p>
        Neither page we reviewed lists a camera inspection as a requirement, and
        Leucadia says inspection and cleaning of a private lateral do not qualify.
        The City page does not say whether inspection costs qualify, so ask. A
        camera records the condition of the line and where a problem sits. It does
        not by itself establish an overflow history. Neither agency publishes a
        funding balance, so confirm availability before you plan around either.
      </p>

      <h2>Who to call first, and what the footage is for</h2>
      <ul>
        <li>
          City of Carlsbad Sewer Division, 442-339-2722, to report sewer spills or
          issues, and for water and sewer emergencies Monday to Friday. For nights
          and weekends the City lists 760-931-2197.
        </li>
        <li>
          Leucadia Wastewater District, 760-753-0155, which it calls its 24-7
          emergency response line for a sewage spill.
        </li>
        <li>
          Vallecitos Water District, (760) 744-0460, for water and sewer
          questions. We did not find a separate Vallecitos sewer emergency number.
        </li>
      </ul>
      <p>
        These are the agencies&rsquo; numbers, not ours. If an agency or a plumber
        points to your lateral, the footage shows what is in the line. A camera
        finding is a visible observation, not a repair recommendation, and it does
        not replace any review an agency requires. The Sewer Pros does not repair
        or replace sewer lines.
      </p>
    </>
  ),
  local: {
    title: 'The City’s own guidance names a camera',
    description:
      'In its service area, the City tells owners to have a professional inspect the lateral with a small camera every three to five years, and sooner with a sewage-like odor or frequent clogged drains. That is the City’s guidance, not a rule about your property.',
  },
  cta: {
    title: 'Schedule a sewer camera inspection in Carlsbad',
    body: 'See the visible condition of your line on video, with written findings, before you clean it, plan around a grant or approve work. Confirm which agency serves your address first.',
  },
}
