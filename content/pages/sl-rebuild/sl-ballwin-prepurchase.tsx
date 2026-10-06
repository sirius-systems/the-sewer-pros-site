/**
 * Rebuild: Ballwin + Pre-Purchase Sewer Inspection (`sl-ballwin-prepurchase`).
 *
 * Authority: CLAUDE.md §9, §22, §24, §26; Henderson standard
 * (`sl-henderson-prepurchase.tsx`).
 *
 * One local source (`ballwinContent`, `loc-stl-ballwin`) x one service source
 * (`svc-pre-purchase-sewer-inspection` v2). Nothing here is new research.
 * Section recipe, each tied to what THIS service records or cannot:
 *   1. municipalProgram + buyingGuide - the program is not meant to satisfy a
 *      sale contingency and does not pay for video
 *   2. municipalProgram - roots once a year or less versus more than once a
 *      year, which a one-day scope cannot show
 *   3. housingAge - older clay laterals and a 1976 median, against what a scope
 *      shows and cannot confirm
 *   4. buyingGuide + whoToCall - occupancy permit, none found for laterals,
 *      City contacts and the inspection window
 * Swap the city and 1-4 fail; swap the service and 1-3 fail.
 *
 * Audit: docs/source-reports/rebuild/sl-ballwin-prepurchase.md
 *
 * ⚠ CITY NUMBERS AND DOLLAR TERMS ARE THE CITY'S, not ours. No company phone,
 * price, offer, response time or guarantee appears. The program page is
 * undated and says nothing on current funding. No legal advice. Repair and
 * replacement are never offered.
 */

import type { PageRebuild } from './types'

export const rebuild: PageRebuild = {
  metaDescription:
    'Buying in Ballwin, MO? The City says its lateral program is not meant to cover a sale-contingency defect. See what a pre-purchase sewer scope records.',
  serviceDescription:
    'A pre-purchase sewer inspection is a sewer camera inspection arranged during a home purchase, recording the visible condition of the accessible sewer line serving a home in Ballwin, Missouri, before closing.',
  hero: {
    intro: (
      <p>
        The City of Ballwin says its Sewer Lateral Repair Program is not intended to satisfy a home
        sale contingency, and it treats clearing roots once a year or less as normal maintenance. A
        pre-purchase sewer inspection records the visible condition of the accessible lateral on
        video, with written findings, so you have it before you close.
      </p>
    ),
  },
  local: {
    title: 'The program will not pay for the video',
    description:
      'The City says its lateral program does not cover the cost of a video of the lateral or of cabling, and is not intended to satisfy a home sale contingency. A buyer who wants the line’s condition on record before closing has to arrange it.',
  },
  body: (
    <>
      <h2>What Ballwin&rsquo;s program will and will not do for a buyer</h2>
      <p>
        The City&rsquo;s program can pay for repair of a failed section of a qualifying lateral, up
        to $4,500 per repair, and up to $7,500 where the City approves special circumstances (the
        City&rsquo;s terms, not a price from us). The City says it is not a warranty program and
        does not cover normal wear while the lateral still functions.
      </p>
      <p>
        It also says the program is not intended to satisfy a home sale contingency. When a
        buyer&rsquo;s lateral inspection notes defects but the line has no history of the repeated
        blockage or failure the program looks for, the City says the repair is not covered. A new
        owner who later has a qualifying problem can apply under the normal criteria. The program
        does not pay for a video of the lateral either, so the inspection is yours to arrange.
        What you do with the findings is for you and your own advisers.
      </p>

      <h2>Roots once a year or less: where maintenance ends and a covered repair begins</h2>
      <p>
        The City treats roots that need clearing more than once a year as a covered repair, and
        roots that clearing once a year or less can control as normal maintenance. An application
        that shows only roots or minor defects must document a history of clearing blockages more
        than once a year.
      </p>
      <p>
        A pre-purchase scope records roots visible in the section the camera reaches, where they
        appear, and how much of the pipe they seem to affect. It cannot show how often the line has
        been cleared, and it does not decide a fix. Cleaning can remove roots that are accessible,
        but it does not repair the opening they entered through.
      </p>

      <h2>Older clay laterals, a 1976 median, and a clear scope</h2>
      <p>
        Ballwin says most older sewer laterals in the city are clay pipe, which tends to crack,
        break, separate at joints and let roots in, and that those defects can exist while the line
        still works normally. The median year built is 1976 (American Community Survey 2019-2023
        5-year estimates, City of Ballwin as a whole). A drain that works during a showing does not
        show what is inside the line, and the age on the listing is a poor proxy for it.
      </p>
      <ul>
        <li>Cracks, fractures, and offset or separated joints</li>
        <li>Roots, deposits and standing water, and visible pipe material when it can be identified</li>
        <li>Any part of the line the camera could not reach or view, and why</li>
      </ul>
      <p>
        A clear scope means the camera did not record a visible problem in the section it reached
        that day. It does not prove the whole line, or the ground around it, is sound, and it does
        not predict how the line will perform.
      </p>

      <h2>Occupancy permits, City contacts and your inspection window</h2>
      <p>
        Ballwin requires an inspection and an Occupancy Permit before a new resident, tenant or
        business occupies a building. In the City materials we reviewed we found no sewer lateral
        inspection or certification tied to that process (none found, not a confirmed absence), so a
        buyer who wants evidence has to ask for it.
      </p>
      <ul>
        <li>
          Ballwin Inspections, (636) 227-2129, takes program, permit and occupancy questions.
          Public Works, (636) 227-9000, takes sanitary sewer repair permits and excavation in the
          street right-of-way (both the City&rsquo;s numbers, not ours).
        </li>
        <li>
          Your purchase agreement sets the inspection window, and it can be short. Note your
          deadline when you request service, and confirm timing with your agent.
        </li>
      </ul>
      <p>
        The program page is undated and does not state current funding, so confirm terms with
        Inspections. An inspection does not replace any City review. The Sewer Pros inspects and
        documents. It does not perform repairs or replacements.
      </p>
    </>
  ),
}
