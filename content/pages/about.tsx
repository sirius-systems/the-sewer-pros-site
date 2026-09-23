/**
 * About page content — `/about/`.
 *
 * Authority: docs/01-business-brand-foundation.md §3, §20, §35
 *            docs/15-schema-entity-strategy.md §67
 *            `data/business/organization.ts`
 *
 * Rebuilt from the previous `core-about` entry in `./core.tsx` (see git
 * history) into the composed sequence `AboutPageTemplate` renders. Every
 * fact below still traces to the same source that entry cited: no new
 * claim was introduced in the rewrite.
 *
 * ⚠ THE ST. LOUIS INSPECTION-COUNT STAT APPEARS HERE, EXPLICITLY SCOPED.
 * `./core.tsx`'s header comment for the previous entry read this page as
 * sitewide and kept that St. Louis-only figure off it entirely (01 §20).
 * The owner reviewed that scoping question directly for this rebuild and
 * approved showing it here specifically AS a St. Louis-attributed line
 * ("In St. Louis: ...") rather than as a company-wide figure - the
 * distinction 01 §20 actually turns on is misattribution, not mention.
 * See `StatsBand`, which pulls the exact wording from
 * `MARKET_SCOPED_CLAIMS.stLouisOnly` rather than a retyped copy.
 *
 * ⚠ "MORE THAN TWO DOZEN EMPLOYEES" IN `brandStory.body` IS A NEW CLAIM,
 * NOT CARRIED FROM THE PRIOR `core-about` ENTRY. Employee count is among
 * the facts CLAUDE.md §24 lists as never to be invented; it was supplied
 * here as approved copy directly from the owner for the "Our Story"
 * rewrite, not inferred or estimated. If that approval is ever in
 * question, remove the figure rather than soften or requalify it.
 */

import type { AboutPageContent } from '@/types'

export const aboutContent: AboutPageContent = {
  hero: {
    eyebrow: 'About The Sewer Pros',
    title: 'Independent Sewer Inspection and Diagnostics',
    intro: (
      <p>
        The Sewer Pros helps homeowners, home buyers, real estate
        professionals, and property managers understand sewer-line
        conditions through camera inspection, diagnostics, locating, and
        cleaning when appropriate. We document what we observe so you can
        make informed decisions without repair or replacement services
        driving the recommendation.
      </p>
    ),
  },
  seoTitle: 'About The Sewer Pros | Independent Sewer Inspection',
  metaDescription:
    'Learn how The Sewer Pros helps homeowners, buyers, and property professionals understand sewer-line conditions through independent inspection, diagnostics, and cleaning, without repair-driven recommendations.',
  heroImage: {
    src: '/images/brand/about/hero/the-sewer-pros-about-independent-sewer-inspection-hero.webp',
    alt: 'Sewer camera inspection equipment set up at a sewer access point',
    source: 'Supplied by the business owner for the About page rebuild.',
  },
  brandStory: {
    eyebrow: 'Our story',
    title:
      'Built Around Service, Clear Communication, and Independent Sewer Diagnostics',
    body: (
      <>
        <p>
          The Sewer Pros has served customers since 2011. Locally owned and
          family operated, the company has grown to more than two dozen
          employees, bringing over 100 years of combined experience to sewer
          and drain inspection and cleaning.
        </p>
        <p>
          We help homeowners, home buyers, real estate professionals, and
          property managers understand sewer-line conditions through camera
          inspections, diagnostics, locating, and cleaning when appropriate.
          During an inspection, we examine accessible portions of the line
          and explain what the camera shows in plain language. If access or
          a blockage limits the view, we clarify what could and could not be
          observed.
        </p>
        <p>
          Clear findings can help you ask informed questions and consider an
          appropriate next step, whether that means cleaning, monitoring the
          line, or consulting a qualified repair contractor. The Sewer Pros
          does not perform sewer repair or replacement, so our findings are
          not tied to a repair contract to sell.
        </p>
      </>
    ),
  },
  leadership: [
    {
      name: 'Tracy Coffman',
      role: 'Co-Founder, Customer Experience and Operations',
      bio: 'Tracy grew up around the family business and learned customer service from the ground up, later bringing an accounting and operations background to how The Sewer Pros runs day to day. That combination shaped a service model built around clear communication and follow-through, from the first phone call to the findings a customer receives after an inspection.',
      photoLabel: 'Tracy Coffman, founder portrait',
      photo: {
        src: '/images/brand/about/founders/the-sewer-pros-tracy-coffman-profile-image.webp',
        alt: 'Tracy Coffman, co-founder of The Sewer Pros',
        source: 'Supplied by the business owner for the About page rebuild.',
      },
    },
    {
      name: 'Rick Coffman',
      role: 'Co-Founder, Field Expertise and Real Estate Inspection Experience',
      bio: 'Rick came to The Sewer Pros through real estate investing and home inspection work, where he saw how often property decisions turned on sewer conditions nobody could actually see. That background shaped the company’s focus on camera evidence and plain-language findings, so buyers, owners, and agents can make high-stakes decisions with real information instead of guesswork.',
      photoLabel: 'Rick Coffman, founder portrait',
      photo: {
        src: '/images/brand/about/founders/the-sewer-pros-rick-coffman-profile-image.webp',
        alt: 'Rick Coffman, co-founder of The Sewer Pros',
        source: 'Supplied by the business owner for the About page rebuild.',
      },
    },
  ],
  process: {
    intro: (
      <p>
        A sewer camera inspection helps make hidden sewer-line
        conditions easier to understand. The Sewer Pros examines
        accessible portions of the line, documents what the camera
        shows, and explains the findings in plain language. If access or
        a blockage limits the view, we&rsquo;ll clarify what could and
        could not be observed so you can consider an informed next step.
      </p>
    ),
    steps: [
      {
        title: 'Inspect',
        description:
          'We examine accessible portions of the sewer line with a camera to observe visible conditions.',
      },
      {
        title: 'Understand',
        description:
          'We document what the inspection shows and explain the findings in plain language.',
      },
      {
        title: 'Decide',
        description:
          'Use the documented findings to consider an appropriate next step, such as cleaning, monitoring, or consulting a qualified repair contractor.',
      },
    ],
    /*
      ⚠ DEDICATED ASSET FOR THIS SECTION, SUPPLIED 2026-09-23. Replaces
      the earlier placeholder wiring, which reused the homepage/services
      camera-inspection card image as a stand-in. This is its own
      4:3 file (1448x1086, confirmed) rather than a shared one.
    */
    image: {
      src: '/images/brand/about/the-sewer-pros-about-what-to-expect-sewer-camera-inspection-4x3.webp',
      alt: 'Sewer camera inspection equipment, including a cable reel and a monitor displaying the inside of a sewer line, staged beside an open cleanout',
      source: 'Supplied by the business owner for the About page rebuild.',
    },
  },
  /*
    ⚠ ITEMS 12 AND 13 ARE UNCHANGED FROM THE PRIOR FAQ SET, DELIBERATELY.
    Both were checked against source-of-truth before this expansion: the
    lateral-reporting answer against the original pre-rebuild `core-about`
    content (thesewerpros.com/about, cited there), and the affiliations
    answer against `affiliations` in `data/business/organization.ts`,
    which it matches exactly. Neither is a new claim, so both are kept
    verbatim rather than flagged for owner review.
  */
  faq: [
    {
      question: 'What does The Sewer Pros specialize in?',
      answer: (
        <p>
          The Sewer Pros provides sewer and drain camera inspection,
          diagnostics, locating, and cleaning. Services include sewer
          camera inspection, sewer cleaning, hydro jetting, sewer line
          locating, and drain cleaning.
        </p>
      ),
    },
    {
      question: 'What is an independent sewer inspection?',
      answer: (
        <p>
          An independent sewer inspection documents visible conditions
          inside a sewer line without the inspection company also selling
          sewer repairs. The Sewer Pros provides inspection findings so
          customers can make an informed decision about next steps.
        </p>
      ),
    },
    {
      question: 'What happens during a sewer camera inspection?',
      answer: (
        <p>
          A sewer camera is guided through an accessible part of the line
          to observe visible conditions. The inspection may identify
          blockages, roots, offsets, standing water, or other visible
          conditions, depending on what the camera can access and see.
        </p>
      ),
    },
    {
      question: 'What should I expect from a sewer camera inspection?',
      answer: (
        <p>
          The Sewer Pros examines the accessible sewer line, documents
          what is visible, and explains what the findings support. If a
          condition prevents the camera from proceeding or limits the
          view, that limitation should be explained.
        </p>
      ),
    },
    {
      question: 'Do I receive video or written findings after an inspection?',
      answer: (
        <p>
          The Sewer Pros documents observed conditions and provides video
          evidence and clear findings. Specific deliverables may depend on
          the service and inspection performed.
        </p>
      ),
    },
    {
      question:
        'Can The Sewer Pros give me a second opinion on a sewer repair recommendation?',
      answer: (
        <p>
          Yes. The Sewer Pros can inspect and document visible
          sewer-line conditions to help you understand a repair
          recommendation before deciding what to do. The company does not
          perform sewer repairs or replacements.
        </p>
      ),
    },
    {
      question: 'Does The Sewer Pros perform sewer repair or replacement?',
      answer: (
        <p>
          No. The Sewer Pros focuses on sewer and drain inspection,
          diagnostics, locating, and cleaning. When findings point to
          structural work, customers can take the documentation to a
          qualified repair contractor.
        </p>
      ),
    },
    {
      question: 'Who can schedule a sewer inspection?',
      answer: (
        <p>
          Homeowners, home buyers, real estate professionals, and
          property managers can contact The Sewer Pros about sewer
          inspection services.
        </p>
      ),
    },
    {
      question:
        'Can a home buyer schedule a sewer inspection before closing?',
      answer: (
        <p>
          Yes. Home buyers can contact The Sewer Pros to ask about a
          sewer inspection before closing. Scheduling and service
          availability depend on the property&rsquo;s market and access
          to the sewer line.
        </p>
      ),
    },
    {
      question:
        'Does The Sewer Pros provide sewer cleaning as well as inspections?',
      answer: (
        <p>
          Yes. The Sewer Pros provides sewer and drain cleaning, including
          hydro jetting where appropriate. Inspection findings can help
          clarify whether cleaning may address an observed condition.
        </p>
      ),
    },
    {
      question: 'Which areas does The Sewer Pros serve?',
      answer: (
        <p>
          The Sewer Pros serves St. Louis, Missouri; San Diego, California;
          and Las Vegas, Nevada. Review the service-area pages or contact
          the company to confirm coverage for a specific property. Service
          markets are not necessarily physical offices.
        </p>
      ),
    },
    {
      question:
        'Does The Sewer Pros submit municipal sewer lateral reports in St. Louis?',
      answer: (
        <p>
          Many St. Louis-area municipalities run sewer lateral repair
          programs and require documentation from a licensed plumber before
          considering a claim. We are licensed through most of those
          programs to submit reports. We document conditions; the
          municipality decides claims, and we cannot promise an outcome.
        </p>
      ),
    },
    {
      question: 'What professional affiliations does The Sewer Pros hold?',
      answer: (
        <p>
          The St. Louis Association of Realtors, the American Society of
          Home Inspectors (ASHI), the Women&rsquo;s Council of Realtors, and
          St. Charles Realtors.
        </p>
      ),
    },
  ],
  cta: {
    title: 'Need a clearer picture of your sewer line?',
    body: 'Tell us what you’re experiencing, the property location, and whether you’re looking for an inspection, cleaning, or a second opinion. Our team can review your request and help identify the appropriate next step.',
  },
}
