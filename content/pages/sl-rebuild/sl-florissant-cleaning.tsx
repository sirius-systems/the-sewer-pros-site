/**
 * Florissant, MO + Sewer Cleaning (`sl-florissant-cleaning`) - Henderson-standard
 * rebuild.
 *
 * Authority: CLAUDE.md §9, §22, §24.
 *
 * One local source (`florissantContent`, `loc-stl-florissant`) x one service
 * source (`svc-sewer-cleaning`, its `v2` block). Nothing here is new research.
 * Section recipe, each tied to what cleaning does and does not do:
 *   1. responsibility + whoToCall - MSD's public sewer vs the owner's lateral;
 *      our cleaning is accessible private lines only
 *   2. whoToCall + municipalProgram - the City calls routine cabling owner
 *      maintenance; cleaning clears the obstruction, not the cause
 *   3. municipalProgram - when cleaning does not settle it: the City's program,
 *      deposit and denial reasons, and what a camera look adds
 *   4. housingAge + systemExplainer - a mid-century housing stock and MSD
 *      projects say nothing about one lateral
 * Swap the city and 1-4 fail; swap the service and 1-3 fail.
 *
 * ⚠ The existing body said laterals of the 1950-1979 era "were commonly laid in
 * clay, cast iron, or bituminized fibre pipe". Neither MSD nor the City publishes
 * a pipe material or era (housingAge), so that claim is dropped. It also said
 * the homeowner pays for the initial evaluation; the City's page says the $300
 * deposit is reimbursed after an approved repair and kept if denied, so the
 * deposit is stated that way.
 *
 * Audit: docs/source-reports/rebuild/sl-florissant-cleaning.md
 *
 * ⚠ ALL DOLLAR FIGURES AND PHONE NUMBERS ARE MSD'S OR THE CITY'S, labelled so.
 * No company price, offer, response time, emergency or same-day claim, or
 * guarantee appears. No legal advice. Repair and replacement are never offered.
 */

import type { PageRebuild } from './types'

export const rebuild: PageRebuild = {
  metaDescription:
    'Sewer cleaning for Florissant, MO. MSD handles the public sewer; the lateral is yours. See what cleaning does and how the City program treats maintenance.',
  serviceDescription:
    'Sewer cleaning is the removal of grease, roots, deposits, debris, and other material that restricts flow in an accessible private sewer line, for properties in Florissant, Missouri.',
  hero: {
    intro: (
      <p>
        In Florissant, MSD handles the public sewer, and MSD says the lateral from
        your building to it, including its connection, is private property that the
        owner maintains. Sewer cleaning removes grease, roots, debris and other
        buildup from the accessible private line. It clears the pipe. It does not
        repair it, and the City&rsquo;s lateral program is for defective pipe, not
        routine maintenance.
      </p>
    ),
  },
  body: (
    <>
      <h2>Where MSD&rsquo;s side ends and your cleaning begins</h2>
      <p>
        MSD says the lateral line that connects your building to the public sewer,
        including its connection, is private property, and that the owner maintains
        and repairs it. The public sewer is MSD&rsquo;s side: when a reported
        cave-in is traced to the public sewer, the City of Florissant says MSD makes
        the repair. For a building backup, MSD asks you to call it first at (314)
        768-6260 (MSD&rsquo;s number, not ours) so it can inspect whether the
        situation qualifies for its limited building-backup assistance program.
      </p>
      <p>
        Our cleaning covers accessible private-property sewer and drain lines, not
        public sewer mains. Cleaning does not show where the connection is or which
        side of it a blockage is on, and we did not find a published rule on who
        owns the part of a lateral under the street, so confirm with MSD or the City
        how the rules apply to your address. Whether a permit applies to a planned
        project is a question for the City&rsquo;s Public Works at (314) 839-7648
        (the City&rsquo;s number).
      </p>

      <h2>Roots, grease and the maintenance the City expects of owners</h2>
      <p>
        The City says routine maintenance may mean annual cabling, especially where
        there are large trees or bushes, and that its Sewer Lateral Insurance Program
        is not a substitute for regular maintenance. The program makes spot repairs,
        usually about 10 feet, and is not there to replace a whole lateral or to
        prevent future defects. Cleaning is the maintenance side: hydraulic or
        mechanical equipment, chosen for the line, removes the grease, roots,
        deposits or debris that restrict flow.
      </p>
      <p>
        Cleaning removes the obstruction, not necessarily what is causing it. Roots
        can regrow and buildup can reappear, particularly where a pipe condition
        lets roots or debris in. A line that flows again is not proof the pipe is
        sound, and it does not repair a cracked, offset, separated or collapsed pipe.
      </p>

      <h2>When cleaning does not settle it, and the City&rsquo;s program</h2>
      <p>
        The City says you can apply to the program after the City or MSD confirms a
        cave-in on your lateral, or if you have recurring backups that regular
        maintenance cannot resolve and you have paid the annual lateral fee. It
        covers a defective lateral from the main to within five feet of the
        foundation. Applying takes a $300 deposit (the City&rsquo;s term), which the
        City reimburses after an approved repair and keeps for the plumber&rsquo;s
        inspection and clerical costs if the application is denied.
      </p>
      <p>
        Among the reasons the City lists for denial are a blockage under the home or
        within five feet of the foundation, small defects or hairline cracks, and a
        line that is open and in serviceable condition. The City handles a lateral so
        clogged that cabling by a plumber or drainlayer fails and nothing can pass as
        an emergency repair, moved to the front of its list after approvals and
        utility locating. A camera look before or after cleaning, when your visit
        includes one, can show whether what came out was buildup or whether a visible
        pipe condition remains, and where along the line it sits. That is your own
        record, not a substitute for the City&rsquo;s contracted plumber, whose
        evaluation the City Engineer reviews, and we make no claim the City accepts an
        outside report.
      </p>
      <p>
        The City&rsquo;s page is undated and states no maximum benefit or funding
        status. Confirm current terms with the Engineering Division at (314) 839-7643
        (the City&rsquo;s number, not ours). The City&rsquo;s crew performs approved
        repairs. The Sewer Pros does not perform repairs or replacements.
      </p>

      <h2>Mid-century homes: age tells you little about the line</h2>
      <p>
        The City of Florissant&rsquo;s 2026-2030 Consolidated Plan reports 21,229
        housing units in the city and says the vast majority of the housing stock was
        built between 1950 and 1979, citing the U.S. Census Bureau&rsquo;s 2024
        American Community Survey 5-year estimates. That describes the city as a
        whole, not every address MSD serves. Neither MSD nor the City publishes a
        pipe material or installation era for Florissant, so housing age cannot tell
        you what is in your lateral.
      </p>
      <p>
        A drain that still works is not proof of a sound pipe, and a blockage is not
        proof of a broken one. Public sewer work does not settle it either: MSD
        describes about 6,000 feet of new pipe in the Wedgewood neighborhood
        (Brookshire Sanitary Relief) and lists a Lindsay Lane project as tentative
        for Spring 2026 - Summer 2027, but a public project does not tell you the
        condition of any one lateral. Cleaning clears the line you maintain, and a
        camera can show what it looks like.
      </p>
    </>
  ),
  local: {
    title: 'A clog that keeps coming back in Florissant',
    description:
      'The City says it can accept an application for recurring backups that regular maintenance cannot resolve, and lists a line that is open and in serviceable condition among its reasons to deny. Cleaning clears the line. A camera look shows what else, if anything, is in it.',
  },
  cta: {
    title: 'Request sewer cleaning in Florissant',
    body: 'Have the private lateral cleaned, and ask whether a camera look before or after is included.',
  },
}
