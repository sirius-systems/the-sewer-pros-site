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
 * DATA-GATED SECTIONS
 * ---------------------------------------------------------------------------
 * `ProofGallery`, `TestimonialBand`, and `LeadFormSection` exist in the
 * composition but render NOTHING today. That is their intended state,
 * not an unfinished one.
 *
 *   ProofGallery     gate: approved photography (18 §28-34; §34 rules
 *                    out AI imagery and staged stock)
 *   TestimonialBand  gate: verified review data with attribution and
 *                    source (18 §69-70, 01 §35, CLAUDE.md §77)
 *   LeadFormSection  gate: PENDING-007 and PENDING-008 (17 §27-36,
 *                    18 §56-61, CLAUDE.md §58)
 *
 * An earlier version of this note argued these sections should not
 * exist at all, because "shipping an empty shell invites filling it
 * with fabricated content". That risk is real, and it is now handled by
 * the type system instead of by absence:
 *
 *   1. Each reads a governed module under `data/` where every item must
 *      cite its `source` — see `data/business/proof.ts`.
 *   2. None accepts a claim-bearing string prop. A contributor cannot
 *      type a plausible testimonial or gallery caption into JSX,
 *      because there is no prop to type it into.
 *   3. An empty module means the section is absent and the page closes
 *      around it (18 §120).
 *
 * Do not populate a gated module to "finish" a page.
 *
 * NO Case Studies section. 18 §71 and CLAUDE.md §76 require verified
 * project data, which does not exist and has no slot here yet.
 */

export { SectionHeading } from './SectionHeading'
export type { SectionHeadingProps } from './SectionHeading'

export { Hero } from './Hero'
export type { HeroProps, HeroVariant } from './Hero'

export { TrustBar } from './TrustBar'
export type { TrustBarProps } from './TrustBar'

export { RoutingCards } from './RoutingCards'
export type { RoutingCardsProps, RoutingCardItem } from './RoutingCards'

export { ProblemGrid } from './ProblemGrid'
export type { ProblemGridProps, ProblemGridItem } from './ProblemGrid'

export { InclusionsGrid } from './InclusionsGrid'
export type {
  InclusionsGridProps,
  InclusionsGridItem,
} from './InclusionsGrid'

export { AuthorityBand, authorityBandRenders } from './AuthorityBand'
export type { AuthorityBandProps } from './AuthorityBand'

export { CoverageSection } from './CoverageSection'
export type { CoverageSectionProps } from './CoverageSection'

export { ProofGallery } from './ProofGallery'
export type { ProofGalleryProps } from './ProofGallery'

export { TestimonialBand } from './TestimonialBand'
export type { TestimonialBandProps } from './TestimonialBand'

export { LeadFormSection } from './LeadFormSection'
export type { LeadFormSectionProps } from './LeadFormSection'

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
