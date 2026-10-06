/**
 * Carlsbad, CA + Pre-Purchase Sewer Inspection (`sl-carlsbad-prepurchase`).
 *
 * Authority: CLAUDE.md §9, §22, §24, §26; Henderson standard
 * (`sl-henderson-prepurchase.tsx`).
 *
 * One local source (`carlsbadContent`, `loc-sd-carlsbad`) x one service source
 * (`svc-pre-purchase-sewer-inspection`, its `v2` block). Nothing here is new
 * research. Lens: a BUYER. The sibling page (`sl-carlsbad-camera`) takes the
 * owner lens and does not reuse this wording. Section recipe, each tied to
 * what a pre-purchase scope records or cannot:
 *   1. responsibility + buyingGuide - find the agency before you price the purchase
 *   2. municipalProgram + buyingGuide - two grants, first come, neither a promise
 *   3. buyingGuide + limits - no sale-time rule found, so a buyer has to ask
 *   4. municipalProgram (permits) + FAQ permit + process - timing and what the scope is for
 * Swap the city and 1-4 fail; swap the service and 1-3 fail.
 *
 * Audit: docs/source-reports/rebuild/sl-carlsbad-prepurchase.md
 *
 * ⚠ CARLSBAD HAS THREE AGENCIES. Every fact names its agency. GRANT STATUS IS
 * NEVER STATED. The $3,000 figures are agency program terms. No company phone,
 * office, price, offer, response time or guarantee appears. No legal advice.
 * Repair and replacement are never offered.
 */

import type { PageRebuild } from './types'

export const rebuild: PageRebuild = {
  hero: {
    intro: (
      <p>
        If you buy in Carlsbad, the first question is which of the city&rsquo;s
        three sewer agencies serves the property, because each publishes its own
        rules for the private lateral and only the City and Leucadia publish a
        lateral grant. A pre-purchase sewer inspection records the visible
        condition of the accessible line on video, with written findings, before
        you close.
      </p>
    ),
  },
  metaDescription:
    'Buying in Carlsbad, CA? Three agencies serve the city, the lateral is the owner’s, and no sale-time inspection rule was found. See what a scope shows.',
  serviceDescription:
    'A pre-purchase sewer inspection is a sewer camera inspection arranged during a home purchase, recording the visible condition of the accessible sewer line serving a home in Carlsbad, California, before closing.',
  body: (
    <>
      <h2>Find the agency before you price the purchase</h2>
      <p>
        Carlsbad is not served by one sewer provider. The City&rsquo;s utilities
        department serves most of it, and the southern portion falls to Leucadia
        Wastewater District or Vallecitos Water District. The City points buyers
        to its sewer district map, and to its{' '}
        <a href="https://www.carlsbadca.gov/departments/utilities/sewer/for-property-owners">
          property-owner page
        </a>
        , to learn which area the address you are buying is in.
      </p>
      <p>
        In all three areas the published rules put the private lateral on the
        owner, so a defect found after closing is a cost the new owner carries. A
        pre-purchase inspection documents the visible condition of the section the
        camera reaches, on the day of the visit. It does not establish which agency
        serves the home or where that agency&rsquo;s responsibility begins.
      </p>

      <h2>Two grants, both first come, neither a promise</h2>
      <p>
        The City&rsquo;s Sewer Lateral Grant Program reimburses up to $3,000
        toward replacing or rehabilitating a private lateral. The City says it is
        for customers in the Carlsbad Wastewater service area, and it does not say
        the grant reaches Leucadia or Vallecitos customers. Leucadia Wastewater
        District reimburses 50% of repair cost, up to $3,000, and its form says it
        pays only if funds are available. We did not find a grant from Vallecitos.
      </p>
      <p>
        Neither agency publishes a funding balance, so a buyer should not assume a
        grant will be there for a defect found after closing. Leucadia also says
        inspection and cleaning of a private lateral do not qualify, so do not
        count on a grant to cover a scope. Confirm with the agency before you plan
        around either program.
      </p>

      <h2>No sale-time inspection rule found, so a buyer has to ask</h2>
      <p>
        We found no rule in the City, Leucadia or Vallecitos materials we reviewed
        that requires a lateral inspection, certification or seller disclosure when
        a home is sold. That is &ldquo;none found&rdquo;, not a confirmed absence,
        and it does not address state-level rules. A buyer who wants evidence of
        the lateral has to ask for it.
      </p>
      <p>
        A clear result means the camera did not record a visible problem in the
        section it reached that day. It is not proof the whole line is sound, and
        it does not predict how the line will perform. Leucadia notes that roots
        can block a lateral and that a damaged one can lead to backups, especially
        during storms. A scope records roots and visible damage where the camera
        can see them. Findings are informational, not legal advice.
      </p>

      <h2>Your deadline, the permits, and what a scope is for</h2>
      <p>
        Your purchase agreement sets the inspection window, and it can be short, so
        request service early and note your deadline. The City says most
        construction work requires a permit. We did not find a City, Leucadia or
        Vallecitos page that says whether a given lateral repair does, and
        Leucadia&rsquo;s form says the applicant must obtain any permits that
        apply. Ask the City&rsquo;s permit center and the serving agency before any
        work starts.
      </p>
      <p>
        An inspection does not tell you which approvals apply. What you do with the
        findings is yours to decide with your own advisers. We document the line,
        not the transaction, and The Sewer Pros does not perform repairs or
        replacements.
      </p>
    </>
  ),
  cta: {
    title: 'Schedule a pre-purchase sewer inspection in Carlsbad',
    body: 'See the visible condition of the lateral on video, with written findings, before you close. Note your inspection deadline when you request service.',
  },
}
