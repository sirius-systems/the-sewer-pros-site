/**
 * Reusable page sections.
 *
 * Build sequence step 18 (docs/02-nextjs-technical-architecture.md §103).
 * Governed by docs/18-design-system.md §107 and Appendix A.
 *
 *   import { Hero, ServiceIndex, CtaSection } from '@/components/sections'
 *
 * ---------------------------------------------------------------------------
 * COMPOSE WITH VARIED DENSITY
 * ---------------------------------------------------------------------------
 * Each section declares its own density, chosen for what it is — hero
 * sparse, trust bar dense, FAQ dense, final CTA panel sparse. Templates
 * should still check the resulting sequence with `sectionRhythmIssues()`
 * from `@/components/ui`: 18 §108 and §155 treat a page of uniform
 * density as templated even when the structure is right.
 *
 * 18 §107: "Pages should use only the sections relevant to their
 * intent." This is a library, not a checklist.
 *
 * ---------------------------------------------------------------------------
 * DELIBERATELY ABSENT
 * ---------------------------------------------------------------------------
 * NO Proof / Reviews section. 18 §69-70 require accurate review text,
 * attribution, and source; 01 §35 lists review counts and ratings among
 * claims needing documented evidence; CLAUDE.md §77 forbids inventing
 * or reassigning testimonials. No verified review data exists in this
 * project, and shipping an empty shell invites filling it with
 * fabricated content. Build it when real review data arrives.
 *
 * NO forms. PENDING-008 (final service form fields) is open, and
 * 18 §56-61 ties field design to the form's actual contents.
 *
 * NO Case Studies. 18 §71 and CLAUDE.md §76 require verified project
 * data, which does not exist yet.
 *
 * NO image-bearing sections beyond the hero's optional slot. 18 §28-34
 * require real inspection photography; no approved assets exist, and
 * §34 rules out AI imagery and staged stock.
 */

export { SectionHeading } from './SectionHeading'
export type { SectionHeadingProps } from './SectionHeading'

export { Hero } from './Hero'
export type { HeroProps, HeroVariant } from './Hero'

export { TrustBar } from './TrustBar'

export { ServiceIndex } from './ServiceIndex'
export type { ServiceIndexProps, ServiceIndexItem } from './ServiceIndex'

export { ProcessSteps } from './ProcessSteps'
export type { ProcessStepsProps, ProcessStep } from './ProcessSteps'

export { Differentiator } from './Differentiator'
export type { DifferentiatorProps } from './Differentiator'

export { FaqSection } from './FaqSection'
export type { FaqSectionProps, FaqEntry } from './FaqSection'

export { RelatedLinks } from './RelatedLinks'
export type { RelatedLinksProps } from './RelatedLinks'

export { MarketCoverage } from './MarketCoverage'
export type { MarketCoverageProps } from './MarketCoverage'

export { CtaSection } from './CtaSection'
export type { CtaSectionProps, CtaVariant } from './CtaSection'
