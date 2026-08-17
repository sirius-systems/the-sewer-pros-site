/**
 * Canonical service page content.
 *
 * Authority: docs/14-content-specification.md §16-17, §29-35, §80
 *            docs/06-master-service-registry.md
 *            docs/01-business-brand-foundation.md §5-6
 *
 * ---------------------------------------------------------------------------
 * WHAT THIS CONTENT DOES NOT CLAIM
 * ---------------------------------------------------------------------------
 * No pricing, timeframes, guarantees, equipment specifications,
 * certifications, or availability windows appear anywhere below. 01 §35
 * lists those among facts requiring documented evidence, and none is
 * documented.
 *
 * Repair language stays educational throughout. 01 §6 and 14 §6 permit
 * discussing when repair may be necessary, cleaning versus repair, and
 * second opinions — but never imply The Sewer Pros performs
 * excavation, lining, bursting, or replacement.
 *
 * Each page also states the LIMITS of its service. 14 §29 requires
 * camera limitations explicitly, and 14 §32 warns against presenting
 * hydro jetting as automatically superior. Stating limits is the
 * evidence-first positioning working (01 §14, 18 §137), not hedging.
 */

import type { PageId, ServicePageContent } from '@/types'

const id = (value: string): PageId => value as PageId

export const serviceContent: Partial<Record<PageId, ServicePageContent>> = {
  /* ======================================================================
     Sewer Camera Inspection — 14 §29
     ====================================================================== */
  [id('svc-sewer-camera-inspection')]: {
    hero: {
      eyebrow: 'Inspection and diagnostics',
      title: 'Sewer Camera Inspection',
      intro: (
        <p>
          A camera inspection puts a video camera inside the sewer line so the
          line&rsquo;s visible condition can be seen and documented, before
          anyone recommends cleaning, repair, or replacement.
        </p>
      ),
    },
    body: (
      <>
        <h2>What a sewer camera inspection is</h2>
        <p>
          A flexible cable carrying a video camera is fed into the sewer line,
          usually through an existing cleanout. The camera transmits video as it
          travels, so the interior of the line can be viewed along its length
          rather than guessed at from symptoms above ground.
        </p>
        <p>
          The purpose is evidence. A backup, a slow drain, or a recurring
          problem tells you something is wrong; a camera inspection helps show
          what and where.
        </p>

        <h2>Common reasons to schedule one</h2>
        <ul>
          <li>Repeated backups or slow drainage that returns after clearing</li>
          <li>Before buying a property, as part of due diligence</li>
          <li>After a blockage, to understand why it happened</li>
          <li>Before approving a major repair or replacement recommendation</li>
          <li>To locate the line and its access points</li>
        </ul>

        <h2>Conditions a camera may reveal</h2>
        <p>
          A camera inspection can show visible, accessible conditions inside the
          pipe, including:
        </p>
        <ul>
          <li>Blockages and heavy buildup</li>
          <li>Root intrusion at joints and cracks</li>
          <li>Separated or offset joints</li>
          <li>Visible cracks and broken sections</li>
          <li>Standing water indicating a belly or downstream restriction</li>
          <li>Foreign objects and debris</li>
          <li>Changes in pipe material along the run</li>
        </ul>

        <h2>What a camera inspection cannot do</h2>
        <p>
          A camera shows what is visible from inside the pipe. It cannot
          guarantee detection of every hidden defect, and there are real
          limits worth understanding before relying on one:
        </p>
        <ul>
          <li>
            Heavy buildup or standing water can obscure the pipe wall, so a
            line may need cleaning before it can be properly assessed.
          </li>
          <li>
            A camera cannot see the condition of the ground around the pipe, or
            the pipe wall thickness from outside.
          </li>
          <li>
            It cannot by itself establish legal responsibility for a line, or
            substitute for engineering assessment of a structure.
          </li>
        </ul>
        <p>
          Where a line cannot be assessed properly, saying so is more useful
          than producing a confident conclusion the footage does not support.
        </p>

        <h2>How it relates to cleaning and locating</h2>
        <p>
          Inspection, cleaning, and locating answer different questions.
          Inspection shows condition. Cleaning removes what has accumulated.
          Locating establishes where the line physically runs and how deep.
        </p>
        <p>
          They are often sequenced: a line too obstructed to assess may be
          cleaned and then re-inspected, so the second pass shows the pipe
          itself rather than what was sitting in it.
        </p>

        <h2>Independent inspection</h2>
        <p>
          The Sewer Pros inspects, documents, and cleans. We are not a repair or
          replacement contractor, so an inspection here does not exist to
          produce a repair sale. If findings suggest work beyond cleaning, that
          is a conversation about evidence and options, including having the
          footage reviewed by a qualified repair contractor.
        </p>
      </>
    ),
    process: [
      { title: 'Access the line', description: 'Through an existing cleanout where one is available.' },
      { title: 'Run the camera', description: 'Video is captured along the accessible length of the line.' },
      { title: 'Identify visible conditions', description: 'What can be seen is recorded; what cannot be assessed is stated.' },
      { title: 'Review the findings', description: 'Discuss what the footage shows and what it does not.' },
    ],
    showDifferentiator: true,
    faq: [
      {
        question: 'What does a sewer camera inspection show?',
        answer: (
          <p>
            It can reveal visible conditions inside the accessible line:
            blockages, root intrusion, separated joints, cracks, offsets,
            standing water, and debris. It cannot guarantee detection of every
            hidden defect.
          </p>
        ),
      },
      {
        question: 'Does the line need to be cleaned first?',
        answer: (
          <p>
            Sometimes. Heavy buildup or standing water can obscure the pipe wall.
            Where that prevents a proper assessment, cleaning and then
            re-inspecting gives a clearer picture than working from obstructed
            footage.
          </p>
        ),
      },
      {
        question: 'Can an inspection tell me whether I need a repair?',
        answer: (
          <p>
            It can show conditions that warrant evaluation by a qualified repair
            contractor. The value of an independent inspection is that the
            evidence comes from someone who does not sell the repair.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-cleaning-camera-inspection'),
      id('svc-pre-purchase-sewer-inspection'),
      id('svc-sewer-line-locating'),
    ],
    cta: {
      title: 'See what is actually happening in the line',
      body: 'An inspection documents the condition so the next decision is based on evidence.',
    },
  },

  /* ======================================================================
     Sewer Cleaning — 14 §31
     ====================================================================== */
  [id('svc-sewer-cleaning')]: {
    hero: {
      eyebrow: 'Cleaning',
      title: 'Sewer Cleaning',
      intro: (
        <p>
          Clearing what has built up inside the sewer line so it drains as
          intended, and so its actual condition can be seen.
        </p>
      ),
    },
    body: (
      <>
        <h2>What sewer cleaning addresses</h2>
        <p>
          Sewer lines accumulate material over time: grease, soap residue,
          sediment, scale, and root growth entering at joints. Accumulation
          narrows the effective diameter of the pipe until flow slows or stops.
        </p>
        <p>
          Cleaning removes that accumulation. It does not change the structural
          condition of the pipe: a cleaned line with a cracked or offset joint
          still has a cracked or offset joint.
        </p>

        <h2>When cleaning is the right step</h2>
        <ul>
          <li>Slow drainage across multiple fixtures</li>
          <li>A backup caused by accumulation rather than structural failure</li>
          <li>Before an inspection, where buildup prevents proper assessment</li>
          <li>As scheduled maintenance on a line with a known history</li>
        </ul>

        <h2>When cleaning is not the answer</h2>
        <p>
          Repeated blockages returning quickly after cleaning usually indicate
          something the cleaning is not addressing: root intrusion at a
          specific defect, a section that has lost slope, or a collapsed
          segment. Cleaning that line again treats the symptom.
        </p>
        <p>
          This is where inspection matters. Cleaning without knowing why the
          line blocked risks repeating the same visit indefinitely.
        </p>

        <h2>Cleaning and inspection together</h2>
        <p>
          A line is often best understood by cleaning it and then inspecting it.
          The cleaning restores flow; the inspection shows what the buildup was
          hiding and whether an underlying condition caused it.
        </p>
      </>
    ),
    process: [
      { title: 'Assess access', description: 'Identify the cleanout and the section to be cleaned.' },
      { title: 'Clear the line', description: 'Remove accumulated material using the method suited to the blockage.' },
      { title: 'Confirm flow' },
      { title: 'Inspect where useful', description: 'Camera the cleaned line to see the pipe itself.' },
    ],
    faq: [
      {
        question: 'How often does a sewer line need cleaning?',
        answer: (
          <p>
            There is no universal interval. It depends on the line&rsquo;s
            condition, material, slope, root pressure, and what goes into it. A
            line with a known recurring issue is a different case from one with
            no history.
          </p>
        ),
      },
      {
        question: 'The blockage came back quickly. Why?',
        answer: (
          <p>
            Rapid recurrence usually points to an underlying condition rather
            than ordinary buildup: roots entering at a defect, a low section
            holding water, or damage. An inspection is more useful than another
            cleaning at that point.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-hydro-jetting'),
      id('svc-sewer-cleaning-camera-inspection'),
      id('svc-recurring-sewer-backup-diagnosis'),
    ],
  },

  /* ======================================================================
     Hydro Jetting — 14 §32
     ====================================================================== */
  [id('svc-hydro-jetting')]: {
    hero: {
      eyebrow: 'Cleaning',
      title: 'Hydro Jetting',
      intro: (
        <p>
          High-pressure water cleaning that scours the pipe wall rather than
          punching a hole through a blockage, appropriate for some lines and
          conditions, and not for others.
        </p>
      ),
    },
    body: (
      <>
        <h2>How hydro jetting works</h2>
        <p>
          A hose with a specialised nozzle is fed into the line and delivers
          water at high pressure. Rear-facing jets propel the hose forward and
          scour material off the pipe wall, flushing it downstream.
        </p>
        <p>
          The distinction that matters: mechanical clearing can open a channel
          through a blockage, while jetting is capable of removing material from
          the full circumference of the pipe. That difference is why jetting is
          often chosen for accumulation rather than a single obstruction.
        </p>

        <h2>What it is well suited to</h2>
        <ul>
          <li>Grease accumulation, particularly in food-service lines</li>
          <li>Soap and sediment buildup narrowing the line over time</li>
          <li>Scale on the interior wall</li>
          <li>Sludge in lines carrying heavy or continuous volume</li>
          <li>Root material, depending on extent and the line&rsquo;s condition</li>
        </ul>

        <h2>When hydro jetting may not be appropriate</h2>
        <p>
          Hydro jetting is not automatically the right answer for every
          blockage. High-pressure water applied to a line that is already
          structurally compromised can make a bad situation worse.
        </p>
        <ul>
          <li>
            Lines with known cracks, collapsed sections, or severe
            deterioration may not be suitable candidates.
          </li>
          <li>
            Older or brittle pipe materials warrant knowing the line&rsquo;s
            condition before applying pressure to it.
          </li>
          <li>
            A single localised obstruction may not require jetting at all.
          </li>
        </ul>
        <p>
          This is the argument for inspecting before jetting where the
          line&rsquo;s condition is unknown, and for inspecting afterward to
          confirm what the cleaning revealed.
        </p>

        <h2>Commercial use</h2>
        <p>
          Commercial kitchen and high-volume lines accumulate grease and solids
          faster than residential lines, which is why jetting appears regularly
          in commercial maintenance rather than only as a response to a backup.
        </p>
      </>
    ),
    process: [
      { title: 'Establish the line condition', description: 'Where condition is unknown, inspect before applying pressure.' },
      { title: 'Set up access' },
      { title: 'Jet the line', description: 'Scour accumulated material from the pipe wall.' },
      { title: 'Re-inspect', description: 'Confirm the result and see the pipe now that it is clear.' },
    ],
    faq: [
      {
        question: 'Is hydro jetting better than snaking?',
        answer: (
          <p>
            They do different jobs. Mechanical clearing is often the right tool
            for a discrete obstruction; jetting removes accumulation from the
            pipe wall. Neither is universally superior, and the line&rsquo;s
            condition affects which is appropriate.
          </p>
        ),
      },
      {
        question: 'Can hydro jetting damage a sewer line?',
        answer: (
          <p>
            High-pressure water in an already-compromised line carries real
            risk. That is why knowing the condition first matters, particularly
            with older pipe or a line with a history of structural problems.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-cleaning'),
      id('cmp-hydro-vs-snaking'),
      id('svc-sewer-camera-inspection'),
    ],
  },

  /* ======================================================================
     Sewer Cleaning + Camera Inspection
     ====================================================================== */
  [id('svc-sewer-cleaning-camera-inspection')]: {
    hero: {
      eyebrow: 'Cleaning and diagnostics',
      title: 'Sewer Cleaning with Camera Inspection',
      intro: (
        <p>
          Clear the line, then look at it. Cleaning restores flow; the
          inspection afterward shows what the buildup was covering.
        </p>
      ),
    },
    body: (
      <>
        <h2>Why the two are combined</h2>
        <p>
          Cleaning and inspection answer complementary questions, and doing both
          in sequence answers a third: why did this line block?
        </p>
        <p>
          A line full of accumulated material cannot be assessed properly: the
          camera sees the buildup, not the pipe. Cleaning first and inspecting
          second means the footage shows the actual pipe wall, joints, and any
          defect that caused material to catch in the first place.
        </p>

        <h2>What this combination is for</h2>
        <ul>
          <li>A line that has backed up more than once</li>
          <li>A blockage where the cause is not obvious</li>
          <li>Establishing a baseline condition for a line with no history</li>
          <li>Confirming whether cleaning resolved the underlying issue</li>
        </ul>

        <h2>What the post-cleaning inspection can establish</h2>
        <p>
          With the line clear, the footage can show whether the blockage was
          ordinary accumulation or the consequence of a condition that will
          cause it again: roots entering at a joint, a section holding water,
          a break collecting debris.
        </p>
        <p>
          That distinction changes what happens next. Ordinary accumulation is a
          maintenance question. A structural cause is a decision about repair,
          and one worth making from documented evidence.
        </p>
      </>
    ),
    process: [
      { title: 'Clear the line' },
      { title: 'Confirm flow is restored' },
      { title: 'Inspect the cleaned line' },
      { title: 'Review what the footage shows' },
    ],
    showDifferentiator: true,
    faq: [
      {
        question: 'Why not just inspect first?',
        answer: (
          <p>
            You can, and sometimes that is right. But if the line is full, the
            camera mostly shows buildup. Where the objective is understanding
            the pipe rather than confirming a blockage exists, cleaning first
            produces more usable footage.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-cleaning'),
      id('svc-sewer-camera-inspection'),
      id('svc-recurring-sewer-backup-diagnosis'),
    ],
  },

  /* ======================================================================
     Sewer Line Locating — 14 §33
     ====================================================================== */
  [id('svc-sewer-line-locating')]: {
    hero: {
      eyebrow: 'Locating',
      title: 'Sewer Line Locating',
      intro: (
        <p>
          Establishing where the sewer line physically runs and how deep it
          sits, information you need before anyone digs, and often before
          anyone quotes.
        </p>
      ),
    },
    body: (
      <>
        <h2>What locating establishes</h2>
        <p>
          Locating identifies the route of the line across the property and the
          approximate depth along it. A transmitting sonde is moved through the
          line and tracked from the surface, so the path can be marked above
          ground.
        </p>

        <h2>Why it matters</h2>
        <ul>
          <li>
            Excavation without knowing the line&rsquo;s route means digging
            speculatively, which costs more and disturbs more.
          </li>
          <li>
            A repair quote is more meaningful when the depth and position of the
            problem are known rather than estimated.
          </li>
          <li>
            Planning work on a property (landscaping, an addition, paving)
            benefits from knowing what runs underneath and where.
          </li>
          <li>
            Access points are not always where people assume, particularly on
            older properties or after previous work.
          </li>
        </ul>

        <h2>Locating and inspection together</h2>
        <p>
          Camera inspection shows the condition of the line and the distance
          along it to a defect. Locating translates that distance into a
          physical position on the property. Together they answer both what is
          wrong and where it is.
        </p>
        <p>
          That combination is what makes a repair decision concrete rather than
          approximate, and it is information you own regardless of who
          performs any subsequent work.
        </p>
      </>
    ),
    process: [
      { title: 'Access the line' },
      { title: 'Track the route', description: 'Follow the line from the surface to establish its path.' },
      { title: 'Establish depth' },
      { title: 'Mark the findings' },
    ],
    faq: [
      {
        question: 'Do I need locating if I already had a camera inspection?',
        answer: (
          <p>
            They answer different questions. An inspection can tell you a defect
            sits a certain distance along the line; locating tells you where
            that point is on the property and how deep.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-camera-inspection'),
      id('svc-sewer-cleaning'),
    ],
  },

  /* ======================================================================
     Drain Cleaning — 14 §34
     ====================================================================== */
  [id('svc-drain-cleaning')]: {
    hero: {
      eyebrow: 'Cleaning',
      title: 'Drain Cleaning',
      intro: (
        <p>
          Clearing individual fixture and branch drains, and recognising when
          a drain problem is actually a sewer problem.
        </p>
      ),
    },
    body: (
      <>
        <h2>Drain lines and sewer lines</h2>
        <p>
          A drain line serves a fixture or a group of fixtures and connects to
          the main sewer line, which carries everything away from the property.
          The distinction matters because it changes what the symptom means.
        </p>
        <p>
          One slow fixture usually indicates a problem in that branch. Several
          fixtures draining slowly, or the lowest fixtures backing up first,
          more often points to the main line.
        </p>

        <h2>Common causes</h2>
        <ul>
          <li>Grease and soap accumulation in kitchen and bathroom branches</li>
          <li>Hair and debris at or near the fixture</li>
          <li>Foreign objects</li>
          <li>Scale narrowing older branch lines</li>
          <li>A restriction further downstream in the main line</li>
        </ul>

        <h2>When to look further</h2>
        <p>
          A drain that clears and stays clear was a drain problem. A drain that
          blocks repeatedly, or blocks alongside other fixtures, is worth
          investigating past the branch: clearing the same fixture repeatedly
          does not address a main-line cause.
        </p>
      </>
    ),
    faq: [
      {
        question: 'Multiple drains are slow. Is that different?',
        answer: (
          <p>
            Usually, yes. Several fixtures affected at once, especially the
            lowest ones, points toward the main line rather than any individual
            branch, and is worth inspecting rather than clearing repeatedly.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-cleaning'),
      id('svc-recurring-sewer-backup-diagnosis'),
    ],
  },

  /* ======================================================================
     Pre-Purchase Sewer Inspection — 14 §35
     ====================================================================== */
  [id('svc-pre-purchase-sewer-inspection')]: {
    hero: {
      eyebrow: 'Real estate',
      title: 'Pre-Purchase Sewer Inspection',
      intro: (
        <p>
          A camera inspection of the sewer line before you buy, so the
          line&rsquo;s condition is part of what you know rather than what you
          discover later.
        </p>
      ),
    },
    body: (
      <>
        <h2>Why the sewer line is worth inspecting separately</h2>
        <p>
          A general property inspection covers a great deal, but the sewer line
          runs underground and is not visible without a camera. It is one of the
          few property systems where a serious condition can exist with no
          symptom at the fixtures on the day you view the property.
        </p>

        <h2>What the inspection can tell you</h2>
        <ul>
          <li>The visible condition of the accessible line</li>
          <li>Whether roots have entered, and where</li>
          <li>Joint separation, offsets, and visible cracks</li>
          <li>Standing water suggesting a low section or restriction</li>
          <li>Pipe material and changes along the run</li>
          <li>Evidence of previous work</li>
        </ul>

        <h2>What it cannot tell you</h2>
        <p>
          It documents visible conditions on the day of inspection. It does not
          guarantee future performance, and it does not establish who is legally
          responsible for which portion of the line: that varies by
          jurisdiction and is a question for the appropriate professional.
        </p>

        <h2>Timing</h2>
        <p>
          The inspection is most useful while you still have decisions
          available to you. Findings are information for your due diligence:
          what you do with them is your decision, made with your own advisers.
        </p>

        <h2>Why independence matters here</h2>
        <p>
          A pre-purchase inspection informs a significant financial decision.
          The Sewer Pros does not perform sewer repair or replacement, so the
          findings are not an opening step toward selling you the remedy.
        </p>
      </>
    ),
    process: [
      { title: 'Locate access' },
      { title: 'Inspect the line' },
      { title: 'Document conditions' },
      { title: 'Walk through the findings' },
    ],
    showDifferentiator: true,
    faq: [
      {
        question: 'Is a sewer inspection part of a standard home inspection?',
        answer: (
          <p>
            Typically not. A general inspection does not usually include putting
            a camera down the sewer line, which is why it is commonly arranged
            separately.
          </p>
        ),
      },
      {
        question: 'What if the inspection finds a problem?',
        answer: (
          <p>
            You have documented evidence of the line&rsquo;s condition. What you
            do with it, including obtaining repair quotes or discussing it with
            your agent and advisers, is your decision.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-camera-inspection'),
      id('cmp-independent-vs-repair'),
    ],
    cta: {
      title: 'Inspect the line before you commit',
      body: 'Know the condition of the sewer line while the decision is still yours to make.',
    },
  },

  /* ======================================================================
     Recurring Sewer Backup Diagnosis
     ====================================================================== */
  [id('svc-recurring-sewer-backup-diagnosis')]: {
    hero: {
      eyebrow: 'Diagnostics',
      title: 'Recurring Sewer Backup Diagnosis',
      intro: (
        <p>
          When a line backs up again after being cleared, the useful question is
          no longer how to clear it: it is why it keeps happening.
        </p>
      ),
    },
    body: (
      <>
        <h2>Recurrence is information</h2>
        <p>
          A one-off blockage is often ordinary. A blockage that returns on a
          pattern usually means something in the line is catching material, and
          each clearing resets the clock without changing the cause.
        </p>

        <h2>What commonly causes recurrence</h2>
        <ul>
          <li>Roots entering at a specific joint or crack and regrowing</li>
          <li>A section that has lost slope and holds water and solids</li>
          <li>An offset joint or partial collapse creating a catch point</li>
          <li>Scale or deterioration narrowing the effective diameter</li>
          <li>A downstream restriction outside the property</li>
        </ul>

        <h2>How diagnosis differs from clearing</h2>
        <p>
          Clearing restores flow. Diagnosis establishes the mechanism: what is
          catching material, where along the line it sits, and whether cleaning
          can manage it or whether it will need addressing structurally.
        </p>
        <p>
          That usually means cleaning the line enough to see it, inspecting it,
          and locating any defect the footage identifies, so the position is
          known rather than approximate.
        </p>

        <h2>What the answer might be</h2>
        <p>
          Sometimes the answer is that the line is sound and needs maintenance
          on a sensible interval. Sometimes it is a defect that will keep
          causing backups until it is addressed by a qualified repair
          contractor. Both are useful answers, and neither is improved by
          guessing.
        </p>
      </>
    ),
    process: [
      { title: 'Understand the history', description: 'What backs up, how often, and what has been done before.' },
      { title: 'Clear enough to assess' },
      { title: 'Inspect the line' },
      { title: 'Locate any defect found' },
    ],
    showDifferentiator: true,
    faq: [
      {
        question: 'It has been cleared three times. What is different this time?',
        answer: (
          <p>
            The objective. Clearing addresses the blockage; diagnosis addresses
            the reason it forms. Those need different work (inspection and
            usually locating) and produce a different kind of answer.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-camera-inspection'),
      id('svc-sewer-line-locating'),
      id('svc-preventative-sewer-maintenance'),
    ],
  },

  /* ======================================================================
     Preventative Sewer Maintenance
     ====================================================================== */
  [id('svc-preventative-sewer-maintenance')]: {
    hero: {
      eyebrow: 'Maintenance',
      title: 'Preventative Sewer Maintenance',
      intro: (
        <p>
          Scheduled cleaning and inspection for lines with a known reason to
          need it, based on the line&rsquo;s actual condition and history
          rather than a default interval.
        </p>
      ),
    },
    body: (
      <>
        <h2>What preventative maintenance is for</h2>
        <p>
          Some lines have a reason to be maintained: a known root pressure, a
          section that accumulates, high or continuous volume, or a history of
          backups that cleaning manages successfully.
        </p>
        <p>
          For those lines, servicing on a schedule is usually less disruptive
          than responding to a backup. For a line with no such history, a
          default schedule is harder to justify.
        </p>

        <h2>Establishing the right interval</h2>
        <p>
          A sensible interval comes from evidence: what the line looked like at
          the last inspection, how quickly material accumulated between visits,
          and what caused the previous blockages. That is why maintenance
          usually starts with inspection rather than a calendar.
        </p>

        <h2>Where it fits for commercial properties</h2>
        <p>
          High-volume and food-service lines accumulate faster, and an
          unplanned backup carries operational cost beyond the plumbing. That
          changes the arithmetic of scheduled service relative to a residential
          line.
        </p>

        <h2>What we will not do</h2>
        <p>
          We will not put a line on a schedule it does not need. If the evidence
          does not support a recurring interval, saying so is more useful than
          selling one.
        </p>
      </>
    ),
    faq: [
      {
        question: 'How do you decide the interval?',
        answer: (
          <p>
            From the line itself: its condition at inspection, how quickly it
            accumulates, and what caused previous problems. There is no single
            correct interval for every line.
          </p>
        ),
      },
    ],
    relatedPageIds: [
      id('svc-sewer-cleaning'),
      id('svc-recurring-sewer-backup-diagnosis'),
      id('svc-sewer-camera-inspection'),
    ],
  },
}
