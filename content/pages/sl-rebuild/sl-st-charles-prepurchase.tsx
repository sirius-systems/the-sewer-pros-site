/**
 * St. Charles, MO + Pre-Purchase Sewer Inspection (`sl-st-charles-prepurchase`)
 * - Henderson-standard rebuild.
 *
 * Authority: CLAUDE.md §9, §22, §24, §26.
 *
 * One local source (`stCharlesContent`, `loc-stl-st-charles`) x one service
 * source (`svc-pre-purchase-sewer-inspection`, its `v2` block). Nothing here is
 * new research. Section recipe, each tied to what THIS service records or cannot:
 *   1. responsibility + systemExplainer - a City-run system, not MSD; the lateral
 *      is the owner's after closing; a scope does not show the City main
 *   2. buyingGuide + municipalProgram.whoCanApply - no sale-time rule found;
 *      inside City limits; proof of ownership and paid taxes and City bills
 *   3. municipalProgram + whoToCall - what the City reimburses and requires, and
 *      what a scope can and cannot add before the owner relies on it
 *   4. housingAge + systemExplainer - median year built 1986 does not tell the
 *      pipe; public sewer work says nothing about one lateral
 * Swap the city and 1-4 fail; swap the service and 1-3 fail.
 *
 * Audit: docs/source-reports/rebuild/sl-st-charles-prepurchase.md
 *
 * ⚠ ALL DOLLAR FIGURES, FEES AND PHONE NUMBERS ARE THE CITY'S, labelled so. No
 * company price, office, offer, response time or guarantee appears. No legal
 * advice. Repair and replacement are never offered.
 */

import type { PageRebuild } from './types'

export const rebuild: PageRebuild = {
  metaDescription:
    'Buying in St. Charles, MO? The City runs its own sewer and lateral program, and we found no sale-time inspection rule. See what a pre-purchase scope shows.',
  serviceDescription:
    'A pre-purchase sewer inspection is a sewer camera inspection arranged during a home purchase, recording the visible condition of the accessible sewer line serving a home in the City of St. Charles, Missouri, before closing.',
  hero: {
    intro: (
      <p>
        The City of St. Charles runs its own sewer system, not MSD, and its lateral
        repair program reimburses part of an owner-arranged repair for qualifying
        homes inside City limits. A pre-purchase sewer inspection records the visible
        condition of the accessible lateral on video, with written findings, before
        you close.
      </p>
    ),
  },
  body: (
    <>
      <h2>A City-run system, and a lateral that becomes yours</h2>
      <p>
        In St. Charles the public sewer is run by the City&rsquo;s Public Works Sewer
        Division, not by MSD, so guidance written for MSD customers does not carry
        over to a home here. The City Code describes the sewer lateral as the part of
        a residential property&rsquo;s sanitary sewer piping that runs from the
        foundation to a sewer main, and the City&rsquo;s program is built around
        owner-arranged repair: the owner collects the bids and chooses the
        contractor. After closing, that owner is you.
      </p>
      <p>
        A pre-purchase inspection is how you see that line first. It documents
        visible conditions in the section the camera reaches, on the day of the
        visit, with the video and written findings. It does not show where the City
        main is, and we did not find a published rule on who owns the part of a
        lateral under the street, so confirm that with the City.
      </p>

      <h2>No sale-time sewer rule found, and the City-limits question</h2>
      <p>
        We did not find a City rule that requires a sewer lateral inspection when a
        home is sold, or a sewer-lateral disclosure rule, in the City materials we
        reviewed. That is &ldquo;none found&rdquo;, not a confirmed absence, so a
        buyer who wants evidence of the lateral has to ask for it. The City does
        require an occupancy inspection for long-term rentals before the first
        tenant moves in and between tenants. The page we reviewed does not describe
        it as a sewer inspection, so an investor should not read it as one.
      </p>
      <p>
        Two questions are worth settling during the purchase, and a scope answers
        neither. The City&rsquo;s lateral program applies only inside City limits,
        not to a home outside them even if it pays a sewer bill to the City, so
        confirm the address is inside the City. And the program asks for proof of
        ownership or owner consent and proof that property taxes and City bills are
        paid, so ask your agent and Public Works how that fits your timeline.
        Findings are informational, not legal advice.
      </p>

      <h2>What the City&rsquo;s program asks for, and what a scope adds</h2>
      <p>
        The City says its Sewer Lateral Repair Program reimburses 90 percent of the
        authorized cost of repairing a defective residential lateral, up to $7,500
        per participant. Those are the City&rsquo;s terms, not our prices. The City
        Code sets the annual fee at $28 on the real estate tax bill; some City pages
        still show $20, so confirm the current figure with Public Works. A share of
        any repair stays with the owner, and the program excludes landscaping and
        ornamental structures.
      </p>
      <p>
        The City starts from a cabled line. It asks for written certification from a
        licensed master plumber or master drainlayer that the lateral was cabled and
        that cabling did not resolve the problem, then sends its own camera to set
        the repair scope. So our inspection does not replace the City&rsquo;s, and we
        make no claim that the City accepts an outside report or that our work
        satisfies the cabling statement. What a scope can do before you close is
        record whether the accessible line shows a blockage or a visible defect, and
        where along it, measured from where the camera entered.
      </p>
      <p>
        The City says the program depends on fee revenue. We found no published fund
        balance, waiting list or processing time, so do not assume funds or a
        timeline. Confirm current terms with Public Works at (636) 949-3363 (the
        City&rsquo;s number, not ours). The contractors you hire perform approved
        repairs. The Sewer Pros inspects and documents; it does not perform repairs
        or replacements.
      </p>

      <h2>A 1986 median year built does not tell you the pipe</h2>
      <p>
        The U.S. Census Bureau&rsquo;s 2024 American Community Survey 5-year
        estimates put the median year built for St. Charles city homes at 1986
        (margin of error 2 years), across about 32,300 housing units. About 62
        percent were built in 1980 or later and about 7 percent in 1939 or earlier
        (the percentages are our arithmetic on the Census rows). These figures
        describe the city as a whole, not every address the City sewer serves.
      </p>
      <p>
        Age alone cannot answer the sewer question: the City does not publish a pipe
        material or installation era, and a drain that still works is not proof of a
        sound pipe. A scope records what is visible in the part of the line it
        reaches. A visibly clear line is not proof that the whole line, or the ground
        around it, is in good condition.
      </p>
      <p>
        Public sewer work nearby does not tell you either. The City&rsquo;s May 2026
        departmental report describes a sanitary manhole in the middle of a creek on
        Hackmann Road that it says contributes to surcharging and backups, and says
        the manhole and piping are planned to be relocated; we found no current
        status. The Sewer Division also maintains a sewer vacuum system in Newtown,
        a feature of that neighborhood. Only an inspection of the lateral can show
        the condition of that line.
      </p>
    </>
  ),
  local: {
    title: 'Confirm the address is inside City limits',
    description:
      'St. Charles’s lateral program applies only inside City limits, even for a home that pays a sewer bill to the City. Confirm the address with the City before you plan around the program.',
  },
  cta: {
    title: 'Schedule a pre-purchase sewer inspection in St. Charles',
    body: 'See the visible condition of the lateral on video, with written findings, before you close. Note your inspection deadline when you request service.',
  },
}
