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
 */

import type { AboutPageContent, PageId } from '@/types'

const id = (value: string): PageId => value as PageId

export const aboutContent: AboutPageContent = {
  hero: {
    eyebrow: 'About The Sewer Pros',
    title: 'Sewer diagnostics backed by real inspection experience',
    intro: (
      <p>
        We help homeowners, home buyers, real estate professionals, and
        property managers understand sewer-line conditions through camera
        inspection, diagnostics, locating, and cleaning, deliberately not
        repair.
      </p>
    ),
  },
  metaDescription:
    'Learn how The Sewer Pros helps property owners and professionals understand sewer-line conditions through inspection, diagnostics, locating, and cleaning.',
  brandStory: (
    <>
      <p>
        The Sewer Pros has operated since 2011, with over 100 years of
        combined experience across the team. We are locally owned and family
        operated, working across the St. Louis area (St. Louis County, St.
        Charles County, Jefferson County, and surrounding areas) and across
        San Diego County, which we have served since 2015. We are currently
        launching service in the Las Vegas Valley.
      </p>
      <p>
        We inspect sewer and drain lines with cameras, diagnose why lines
        block, locate where lines run, and clean them. That is the whole of
        it, and the boundary is intentional: we do not perform sewer repair,
        replacement, lining, pipe bursting, or excavation. When an inspection
        turns up a condition that warrants structural work, the next
        conversation is with a qualified repair contractor, not with us.
      </p>
      <p>
        We put a camera in the line, document what is visible, and tell you
        what the footage supports. Where a line cannot be properly assessed,
        we say that rather than producing a confident conclusion the
        evidence does not carry.
      </p>
    </>
  ),
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
  exploreLinkPageIds: [id('hub-services'), id('hub-audiences')],
  faq: [
    {
      question: 'What does The Sewer Pros specialize in?',
      answer: (
        <p>
          Sewer camera inspection, diagnostics, sewer and drain cleaning,
          hydro jetting, and sewer line locating. We do not perform sewer
          repair, replacement, lining, pipe bursting, or excavation.
        </p>
      ),
    },
    {
      question: 'Does The Sewer Pros perform sewer repair or replacement?',
      answer: (
        <p>
          No. We inspect, diagnose, locate, and clean. When an inspection
          shows a condition that may need structural work, that conversation
          is with a qualified repair contractor, not with us. Keeping
          diagnosis separate from repair work is a deliberate part of how we
          operate.
        </p>
      ),
    },
    {
      question: 'Which areas does The Sewer Pros serve?',
      answer: (
        <p>
          St. Louis County, St. Charles County, Jefferson County, Missouri,
          and surrounding areas since 2011; San Diego County since 2015; and
          the Las Vegas Valley, where service is currently launching.
        </p>
      ),
    },
    {
      question: 'What should I expect from a sewer camera inspection?',
      answer: (
        <p>
          A technician runs a camera through the line and documents the
          visible condition on video. You receive that footage along with
          clear findings, so you understand what was observed before
          deciding on cleaning, monitoring, or a repair estimate.
        </p>
      ),
    },
    {
      question:
        'Can a home buyer schedule a sewer inspection before closing?',
      answer: (
        <p>
          Yes. A pre-purchase sewer inspection gives buyers, agents, and
          home inspectors camera evidence of the line&rsquo;s condition
          before closing, rather than relying on a verbal opinion alone.
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
    body: 'Schedule an inspection, request drain or sewer cleaning, or get in touch with your local Sewer Pros team.',
  },
}
