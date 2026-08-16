/**
 * Commercial service page content.
 *
 * Authority: docs/14-content-specification.md §52, §82
 *            docs/09-audience-commercial-matrix.md §78, §112, §128
 *            docs/06-master-service-registry.md §43
 *            CLAUDE.md §33, §74
 *
 * ===========================================================================
 * COMMERCIAL MEANS OPERATIONAL, NOT "RESIDENTIAL WITH A WORD CHANGED"
 * ===========================================================================
 * CLAUDE.md §33 and 09 §112 forbid taking residential content and
 * inserting "commercial" into the headings. 14 §82's test asks whether
 * "commercial property" could be swapped for "home" without meaningful
 * change.
 *
 * These pages are therefore written around what differs operationally:
 * disruption to tenants and customers, recurring rather than reactive
 * service, volume, documentation, scheduling around trading hours, and
 * multi-property coordination. The plumbing is the same; the
 * consequences of failure are not.
 *
 * ---------------------------------------------------------------------------
 * ⚠ COMMERCIAL PACKAGING IS NOT VALIDATED
 * ---------------------------------------------------------------------------
 * Four of the seven commercial services carry
 * `capability_confirmed_commercial_packaging_requires_validation` in
 * the service registry. 06 §43 forbids presenting unvalidated packaging
 * as an established offering.
 *
 * So none of this content promises contracts, service-level agreements,
 * response windows, account management, or scheduled programmes as
 * existing products. It describes the work and the operational reasons
 * for it, and routes enquiries to a conversation.
 *
 * No industries are named beyond food service, which appears in
 * 06 §24's grease/sludge service and 09 §36 as a documented commercial
 * segment. CLAUDE.md §33: only mention industries actually served.
 */

import type { CommercialPageContent, PageId } from '@/types'

const id = (value: string): PageId => value as PageId

export const commercialContent: Partial<Record<PageId, CommercialPageContent>> = {
  [id('com-camera')]: {
    hero: {
      eyebrow: 'Commercial',
      title: 'Commercial Sewer Camera Inspection',
      intro: (
        <p>
          Documented evidence of a line&rsquo;s condition — for planning
          maintenance, supporting a capital decision, or establishing what
          happened after a failure.
        </p>
      ),
    },
    body: (
      <>
        <h2>Why inspection matters differently on a commercial property</h2>
        <p>
          On a commercial property, a sewer failure interrupts trading,
          displaces tenants, or closes a kitchen. The cost is rarely limited to
          the plumbing, which changes the value of knowing a line&rsquo;s
          condition before it fails rather than after.
        </p>
        <p>
          Inspection also produces something a verbal assessment does not: a
          record. That matters when a decision has to be justified to an owner,
          a board, a tenant, or an insurer.
        </p>

        <h2>Common reasons for a commercial inspection</h2>
        <ul>
          <li>Establishing baseline condition across a property or portfolio</li>
          <li>Investigating recurring blockages affecting operations</li>
          <li>Supporting a planned-maintenance decision with evidence</li>
          <li>Understanding a line before committing to major work</li>
          <li>Documenting condition at a change of tenancy or ownership</li>
        </ul>

        <h2>Working around operations</h2>
        <p>
          Access on a commercial site usually involves more than opening a
          cleanout — occupied units, trading hours, service corridors, and other
          contractors on site. Inspection work is planned around that rather
          than assuming an empty building.
        </p>

        <h2>What the inspection does not establish</h2>
        <p>
          The same limits apply as on any line: a camera shows visible,
          accessible conditions. It cannot guarantee detection of every hidden
          defect, and where buildup or standing water prevents assessment, that
          is reported rather than worked around.
        </p>
      </>
    ),
    process: [
      { title: 'Scope the site', description: 'Identify access, affected areas, and constraints on timing.' },
      { title: 'Inspect the lines' },
      { title: 'Document conditions' },
      { title: 'Review findings', description: 'Discuss what the footage supports and what it does not.' },
    ],
    faq: [
      {
        question: 'Can inspection be scheduled outside trading hours?',
        answer: (
          <p>
            Scheduling is part of the conversation — access on an operating
            property is a constraint to plan around, not an afterthought. Talk
            to us about what the site requires.
          </p>
        ),
      },
    ],
    relatedPageIds: [id('com-sewer-cleaning'), id('com-maintenance')],
  },

  [id('com-sewer-cleaning')]: {
    hero: {
      eyebrow: 'Commercial',
      title: 'Commercial Sewer Cleaning',
      intro: (
        <p>
          Clearing accumulated material from commercial sewer lines — where
          volume is higher, consequences of a backup are broader, and the
          window to do the work is narrower.
        </p>
      ),
    },
    body: (
      <>
        <h2>What differs on a commercial line</h2>
        <p>
          Commercial lines typically carry more volume, more continuously, and
          often more grease and solids than a residential line. Accumulation
          happens faster, which means the interval between a line being clear
          and a line being a problem is shorter.
        </p>

        <h2>The operational cost of a backup</h2>
        <p>
          A blocked line in an occupied building is not only a plumbing
          problem. It can close facilities, interrupt service, affect tenants,
          and require notifying people who will ask what is being done about it.
        </p>
        <p>
          That is why commercial cleaning is more often planned than reactive,
          and why knowing which lines actually need attention matters more than
          servicing everything on a default schedule.
        </p>

        <h2>Cleaning and knowing why</h2>
        <p>
          A line that blocks repeatedly is telling you something. Cleaning it
          again manages the symptom; inspecting it establishes whether the cause
          is ordinary accumulation or a defect that will keep producing
          blockages regardless of how often the line is cleared.
        </p>
      </>
    ),
    process: [
      { title: 'Plan around operations' },
      { title: 'Clear the line' },
      { title: 'Confirm flow' },
      { title: 'Inspect where the cause is unclear' },
    ],
    relatedPageIds: [id('com-hydro-jetting'), id('com-camera'), id('com-maintenance')],
  },

  [id('com-hydro-jetting')]: {
    hero: {
      eyebrow: 'Commercial',
      title: 'Commercial Hydro Jetting',
      intro: (
        <p>
          High-pressure cleaning for lines carrying grease, solids, and
          continuous volume — where buildup on the pipe wall, not a single
          obstruction, is the recurring problem.
        </p>
      ),
    },
    body: (
      <>
        <h2>Why jetting appears more often on commercial lines</h2>
        <p>
          Food-service and high-volume lines accumulate on the pipe wall rather
          than blocking at a single point. Clearing a channel through that
          accumulation restores flow briefly; removing material from the full
          circumference lasts longer.
        </p>

        <h2>Grease, scale, and sludge</h2>
        <p>
          Grease is the recurring commercial case: it cools, adheres, and
          narrows the line progressively. Scale and sludge behave similarly in
          lines carrying heavy or continuous flow. All three respond to jetting
          in a way that mechanical clearing addresses less completely.
        </p>

        <h2>When jetting is not the right call</h2>
        <p>
          The same caution applies as on any line, and commercial properties
          often have older infrastructure where it matters more. High-pressure
          water in a line that is already structurally compromised can worsen
          the problem.
        </p>
        <p>
          Where a line&rsquo;s condition is unknown, establishing it first is
          part of doing the work properly rather than an upsell.
        </p>
      </>
    ),
    process: [
      { title: 'Establish line condition' },
      { title: 'Plan access and timing' },
      { title: 'Jet the line' },
      { title: 'Re-inspect' },
    ],
    faq: [
      {
        question: 'How often do grease-bearing lines need jetting?',
        answer: (
          <p>
            It depends on volume, what enters the line, and its condition — not
            on a standard interval. Establishing the rate of accumulation for a
            specific line is more useful than applying a default.
          </p>
        ),
      },
    ],
    relatedPageIds: [id('com-sewer-cleaning'), id('com-maintenance'), id('cmp-hydro-vs-snaking')],
  },

  [id('com-drain-cleaning')]: {
    hero: {
      eyebrow: 'Commercial',
      title: 'Commercial Drain Cleaning',
      intro: (
        <p>
          Clearing fixture and branch drains across occupied buildings — and
          distinguishing a local drain issue from a main-line problem before
          repeating the same visit.
        </p>
      ),
    },
    body: (
      <>
        <h2>Many fixtures, shared lines</h2>
        <p>
          Commercial properties concentrate fixtures: multiple restrooms,
          kitchens, floor drains, and shared branch lines serving several
          units. That concentration makes the pattern of which drains are
          affected genuinely diagnostic.
        </p>
        <p>
          One fixture is usually a branch problem. A pattern across units,
          floors, or the lowest fixtures in the building points further
          downstream.
        </p>

        <h2>Why the distinction matters operationally</h2>
        <p>
          Clearing individual fixtures repeatedly across a property is a
          recurring cost and a recurring disruption. If the cause is in a shared
          line, each of those visits is treating a symptom in a different place.
        </p>

        <h2>Multi-unit coordination</h2>
        <p>
          Work in occupied units means access arrangements, notice, and timing
          that suits tenants rather than only the schedule. That is a planning
          question as much as a plumbing one.
        </p>
      </>
    ),
    relatedPageIds: [id('com-sewer-cleaning'), id('com-camera')],
  },

  [id('com-maintenance')]: {
    hero: {
      eyebrow: 'Commercial',
      title: 'Commercial Preventative Sewer & Drain Maintenance',
      intro: (
        <p>
          Servicing lines on an interval the evidence supports — so failures
          happen on a schedule you chose rather than during trading hours.
        </p>
      ),
    },
    body: (
      <>
        <h2>Planned versus reactive</h2>
        <p>
          A reactive model waits for a backup and absorbs whatever disruption
          it causes. A planned model services lines with a known reason to need
          it, at a time that suits operations.
        </p>
        <p>
          The difference is largely about when the disruption happens and how
          much of it there is — not about whether lines need attention.
        </p>

        <h2>Which lines actually warrant it</h2>
        <p>
          Not every line on a property needs scheduled service. The ones that
          usually do are those carrying grease or heavy volume, those with a
          history of blockages, and those where failure would close something.
        </p>
        <p>
          Establishing which is which starts with inspection. A schedule set
          without knowing the condition of the lines is a guess with an invoice
          attached.
        </p>

        <h2>Documentation</h2>
        <p>
          Recurring service produces a record of condition over time — useful
          when justifying budget, planning capital work, or demonstrating that a
          known issue was being managed.
        </p>

        <h2>What we will tell you</h2>
        <p>
          If the evidence does not support servicing a line on an interval, we
          will say so. Recommending maintenance that the line&rsquo;s condition
          does not justify would be the same repair-driven behaviour the
          business exists to avoid.
        </p>
      </>
    ),
    process: [
      { title: 'Inspect to establish condition' },
      { title: 'Identify lines that warrant servicing' },
      { title: 'Agree an interval based on evidence' },
      { title: 'Re-inspect and adjust' },
    ],
    relatedPageIds: [id('com-camera'), id('com-hydro-jetting'), id('com-sewer-cleaning')],
    cta: {
      title: 'Talk to us about a commercial property',
      body: 'Start with what the lines actually need, established by inspection.',
    },
  },
}
