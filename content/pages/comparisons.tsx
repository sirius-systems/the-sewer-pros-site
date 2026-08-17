/**
 * Comparison page content.
 *
 * Authority: docs/18-design-system.md §66
 *            docs/05-url-routing-strategy.md §41
 *            docs/01-business-brand-foundation.md §72
 *            CLAUDE.md §32, §65, §72
 *
 * ===========================================================================
 * BOTH PAGES ARE WRITTEN AGAINST A CONFLICT OF INTEREST
 * ===========================================================================
 * CLAUDE.md §65: "Do not manipulate comparisons so The Sewer Pros'
 * preferred service always wins."
 *
 * `hydro-jetting-vs-sewer-snaking` compares two things the business
 * sells. The honest treatment is to describe what each is actually
 * good at, including where jetting is the wrong choice — which the
 * content does.
 *
 * `independent-sewer-inspection-vs-repair-company` compares the
 * business model against the alternative. CLAUDE.md §32 and 01 §72
 * forbid claiming competitors are dishonest or recommend unnecessary
 * work. So the page argues from incentive structure, states plainly
 * what a repair contractor does better, and declines to characterise
 * anyone's motives.
 */

import type { ComparisonPageContent, PageId } from '@/types'

const id = (value: string): PageId => value as PageId

export const comparisonContent: Partial<Record<PageId, ComparisonPageContent>> = {
  [id('cmp-hydro-vs-snaking')]: {
    hero: {
      eyebrow: 'Comparison',
      title: 'Hydro Jetting vs Sewer Snaking',
      intro: (
        <p>
          Two different tools for two different problems. Which one is right
          depends on what is blocking the line and what condition the line is
          in.
        </p>
      ),
    },
    body: (
      <>
        <h2>The short answer</h2>
        <p>
          Snaking (mechanical clearing) is well suited to a discrete
          obstruction: something lodged at a point in the line. Hydro jetting
          is better at removing accumulation from the pipe wall along a length
          of line. Neither is universally better.
        </p>

        <h2>How each one works</h2>
        <h3>Mechanical clearing</h3>
        <p>
          A cable is driven into the line, with a cutting or retrieval head at
          the end. It bores through or breaks up the obstruction, restoring
          flow. It is targeted, and it applies force at a point.
        </p>

        <h3>Hydro jetting</h3>
        <p>
          A hose delivers high-pressure water through a nozzle whose rear-facing
          jets pull it along the line. It scours material off the pipe wall
          around the full circumference and flushes it downstream.
        </p>

        <h2>Where each one fits</h2>
        <h3>Mechanical clearing tends to suit</h3>
        <ul>
          <li>A single identifiable obstruction</li>
          <li>Root mass at a specific point</li>
          <li>A line whose structural condition is unknown or fragile</li>
          <li>Situations where restoring flow quickly is the priority</li>
        </ul>

        <h3>Hydro jetting tends to suit</h3>
        <ul>
          <li>Grease accumulation along a length of line</li>
          <li>Scale and sediment narrowing the pipe progressively</li>
          <li>Lines that block repeatedly from buildup rather than one object</li>
          <li>Commercial and food-service lines carrying continuous volume</li>
        </ul>

        <h2>Where jetting is the wrong choice</h2>
        <p>
          Hydro jetting applies significant pressure inside the pipe. In a line
          that already has cracks, an offset joint, or advanced deterioration,
          that pressure can make the problem worse.
        </p>
        <p>
          A line with unknown condition, particularly older pipe, is a case
          for finding out first. Choosing the gentler tool, or inspecting before
          deciding, is a legitimate answer.
        </p>

        <h2>The question underneath both</h2>
        <p>
          Both methods clear a line. Neither explains why it blocked. If a line
          blocks repeatedly, the useful next step is usually inspection rather
          than a different clearing method: the cause may be a defect that
          neither tool addresses.
        </p>
      </>
    ),
    faq: [
      {
        question: 'Which one lasts longer?',
        answer: (
          <p>
            For accumulation on the pipe wall, jetting typically buys more time,
            because it removes more material. For a discrete obstruction in a
            sound line, mechanical clearing may resolve it entirely. Duration
            depends more on the cause than the method.
          </p>
        ),
      },
      {
        question: 'Should I always ask for jetting?',
        answer: (
          <p>
            No. If the line&rsquo;s condition is unknown or the blockage is a
            single object, jetting may be unnecessary or unwise. The right
            question is what is blocking the line, not which tool sounds more
            thorough.
          </p>
        ),
      },
    ],
    relatedPageIds: [id('svc-hydro-jetting'), id('svc-sewer-cleaning'), id('svc-sewer-camera-inspection')],
  },

  [id('cmp-independent-vs-repair')]: {
    hero: {
      eyebrow: 'Comparison',
      title: 'Independent Sewer Inspection vs Repair Company Inspection',
      intro: (
        <p>
          Both can inspect a sewer line competently. The difference is what
          happens to the findings, and it is a difference in business model,
          not in character.
        </p>
      ),
    },
    body: (
      <>
        <h2>What is actually different</h2>
        <p>
          A repair contractor earns from performing repairs. An independent
          inspection company earns from inspecting and cleaning. Both are
          legitimate ways to run a business, and both employ people who do
          careful work.
        </p>
        <p>
          What differs is the position each is in when interpreting ambiguous
          findings. That is worth understanding as a structural fact, not as an
          accusation about anyone&rsquo;s conduct.
        </p>

        <h2>Where a repair contractor is the better choice</h2>
        <p>
          If a line has a known, confirmed defect and you want it fixed, a
          repair contractor is who does that work. They can assess repair
          methods, quote the job, and carry it out. An independent inspection
          company cannot, and we do not.
        </p>
        <p>
          It is also often more efficient: one visit, one company, one
          responsibility for the outcome.
        </p>

        <h2>Where an independent inspection is worth considering</h2>
        <ul>
          <li>
            Before approving major work, when you want the condition assessed
            by someone who is not quoting for the remedy
          </li>
          <li>
            As a second opinion on a replacement recommendation you were not
            expecting
          </li>
          <li>
            Before buying a property, when the findings inform a decision about
            the purchase rather than a repair
          </li>
          <li>
            When you want to know whether cleaning resolves the issue before
            treating it as structural
          </li>
        </ul>

        <h2>How to get a useful inspection either way</h2>
        <p>
          Regardless of who inspects the line, the same things make the result
          more useful:
        </p>
        <ul>
          <li>Ask for the footage, and keep a copy</li>
          <li>
            Ask what specifically was observed, and at what distance along the
            line
          </li>
          <li>
            Ask what could not be assessed: obscured sections are as
            informative as visible defects
          </li>
          <li>Ask whether the line was cleaned before inspection, and why</li>
          <li>
            For significant work, get more than one view of what the evidence
            shows
          </li>
        </ul>

        <h2>Our position</h2>
        <p>
          The Sewer Pros inspects, diagnoses, locates, and cleans. We do not
          perform sewer repair or replacement, so our findings do not lead to a
          quote from us for the remedy. That is the whole of the
          differentiator, not a claim about how anyone else works.
        </p>
      </>
    ),
    faq: [
      {
        question: 'Are you saying repair companies inflate findings?',
        answer: (
          <p>
            No. We are describing how each business earns, which is a fact about
            structure rather than conduct. Plenty of repair contractors inspect
            carefully and recommend nothing. The point is that you can choose to
            separate the diagnosis from the sale if you want to.
          </p>
        ),
      },
      {
        question: 'Can I use your inspection to get repair quotes?',
        answer: (
          <p>
            Yes. Documented findings are yours, and having them makes quotes
            easier to compare because each contractor is pricing against the
            same evidence.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-camera-inspection'),
      id('svc-pre-purchase-sewer-inspection'),
    ],
  },
}
