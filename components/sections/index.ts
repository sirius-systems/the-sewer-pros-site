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
 * ---------------------------------------------------------------------------
 * ⚠ `ReviewMarquee` IS MARKET-SCOPED, NOT SITEWIDE
 * ---------------------------------------------------------------------------
 * `ReviewMarquee` carries real Google reviews from the ST. LOUIS
 * Business Profile (DEC-084). It is not a general proof section: only
 * St. Louis has a GBP (01 §21, DEC-020), and 01 §20 forbids carrying
 * one market's business facts onto another.
 *
 * ⚠⚠ THAT RESTRICTION WAS LIFTED BY DEC-100 (2026-09-04), AND THIS
 * PARAGRAPH IS THE RECORD OF IT RATHER THAN A STALE WARNING. It used
 * to read: "Do NOT add it to `MarketPageTemplate` - that template also
 * serves `/san-diego-ca/` and `/las-vegas-nv/`."
 *
 * `MarketPageTemplate` now renders it on all three hubs. The owner
 * directed that the 4.9/595 stat be treated as COMPANY-WIDE rather
 * than scoped to the St. Louis profile, and shipped unattributed.
 *
 * ⚠ THERE IS NO `showReviews` FIELD, AND THIS PARAGRAPH USED TO SAY
 * THERE WAS. An earlier pass gated it on a per-market flag; the owner
 * asked for it unconditional, which is what shipped and what DEC-100's
 * implementation note records. The only gate is whether review data
 * exists at all - `reviewMarqueeRenders()`.
 *
 * ⚠⚠ DEC-103 (2026-09-07) EXTENDED IT AGAIN, TO `HubPageTemplate`.
 * `/locations/` renders it behind `HubPageContent.showTrustSections`.
 * That hub is sitewide rather than market-scoped, which is precisely
 * why it is safe: DEC-100 had already made the figures company-wide
 * and unattributed, so nothing market-scoped travelled with them. The
 * other four hubs share the template, set no flag, and are unaffected.
 *
 * ⚠ `ReviewMarquee` ALSO GAINED A `surface` PROP THERE, defaulting to
 * the white every existing caller renders. `/locations/` passes
 * `muted` because its neighbour above is that hub's `default` body
 * prose rather than a dark section - the same 18 §11 reasoning the
 * component's own default encodes, reaching the opposite value.
 *
 * ⚠ THE UNDERLYING FACT DID NOT CHANGE. The reviews are still St.
 * Louis customers and the stat is still that profile's. Read DEC-100,
 * DEC-103 and DEC-085 together before extending this any further - to
 * a location template, say - because the reasoning that made DEC-085
 * restrictive still describes the data.
 *
 * This is exactly why it is separate from `TestimonialBand` rather
 * than a population of `data/business/proof.ts`: `TestimonialBand`
 * renders on six templates including `MarketPageTemplate`, so filling
 * its array would have put St. Louis reviews on the other two markets
 * with no code change and no warning. `TestimonialBand` stays gated.
 *
 * NO Case Studies section. 18 §71 and CLAUDE.md §76 require verified
 * project data, which does not exist and has no slot here yet.
 *
 * ---------------------------------------------------------------------------
 * ⚠ `ConfidenceModule` — SUPERSEDES THE ORIGINAL "REMOVED ENTIRELY" NOTE
 * ---------------------------------------------------------------------------
 * The 2026-08-23 port design removed `power`'s confidence/offer module
 * (free estimate, financing, warranty, same-day availability) from every
 * composition map, because none of those claims were verified. DEC-088
 * changed that for two of the four: free estimate and same-day
 * availability are now owner-confirmed (`data/business/offers.ts`).
 * `ConfidenceModule` renders only those two, gated the same way as every
 * other data-backed section — empty data means the section is absent.
 * Financing and warranty remain out; do not add them without an
 * equivalent decision.
 */

export { SectionHeading } from './SectionHeading'
export type { SectionHeadingProps } from './SectionHeading'

export { Hero } from './Hero'
export type { HeroProps, HeroVariant } from './Hero'

// Client component: the homepage hero's cross-fading photographic
// backdrop. Owner-directed and homepage-only — see the component.
export { HeroBackdrop } from './HeroBackdrop'
export type { HeroBackdropProps } from './HeroBackdrop'
export { HeroVideoBackdrop } from './HeroVideoBackdrop'
export type { HeroVideoBackdropProps } from './HeroVideoBackdrop'

export { TrustBar } from './TrustBar'
export type { TrustBarProps } from './TrustBar'

export { ConfidenceModule, confidenceModuleRenders } from './ConfidenceModule'
export type { ConfidenceModuleProps } from './ConfidenceModule'

export { RoutingCards, routingCardsRenders } from './RoutingCards'
// `RoutingCardItem` is gone: the component reads `RoutingContent` from
// `@/types` directly now, rather than restating the item shape. Nothing
// outside this barrel ever imported it.
export type { RoutingCardsProps } from './RoutingCards'

export { ProblemGrid, problemGridRenders } from './ProblemGrid'
export type { ProblemGridProps, ProblemGridItem } from './ProblemGrid'

export { InclusionsGrid, inclusionsGridRenders } from './InclusionsGrid'
export type {
  InclusionsGridProps,
  InclusionsGridItem,
} from './InclusionsGrid'

export { AuthorityBand, authorityBandRenders } from './AuthorityBand'
export type { AuthorityBandProps } from './AuthorityBand'

export { CoverageSection, coverageSectionRenders } from './CoverageSection'
export type { CoverageSectionProps } from './CoverageSection'

export { ServiceAreaSection, serviceAreaRenders } from './ServiceAreaSection'
export type { ServiceAreaSectionProps } from './ServiceAreaSection'

export { ExperienceSection, experienceRenders } from './ExperienceSection'
export type { ExperienceSectionProps } from './ExperienceSection'

export {
  LateralResponsibility,
  lateralResponsibilityRenders,
} from './LateralResponsibility'
export type { LateralResponsibilityProps } from './LateralResponsibility'

export { PipeMaterials, pipeMaterialsRenders } from './PipeMaterials'
export type { PipeMaterialsProps } from './PipeMaterials'

export { PrePurchase, prePurchaseRenders } from './PrePurchase'
export type { PrePurchaseProps } from './PrePurchase'

export { ProofGallery } from './ProofGallery'
export type { ProofGalleryProps } from './ProofGallery'

export { TestimonialBand } from './TestimonialBand'
export type { TestimonialBandProps } from './TestimonialBand'

export { ScenarioGrid, scenarioGridRenders } from './ScenarioGrid'
export type { ScenarioGridProps } from './ScenarioGrid'

export {
  DeliverablesSection,
  deliverablesSectionRenders,
} from './DeliverablesSection'
export type { DeliverablesSectionProps } from './DeliverablesSection'

export {
  RegionalCoveragePanel,
  regionalCoverageRenders,
} from './RegionalCoveragePanel'
export type { RegionalCoveragePanelProps } from './RegionalCoveragePanel'

export { MarketGuidance, marketGuidanceRenders } from './MarketGuidance'
export type { MarketGuidanceProps } from './MarketGuidance'

export { ReviewMarquee } from './ReviewMarquee'
export type { ReviewMarqueeProps } from './ReviewMarquee'

export { LeadFormSection } from './LeadFormSection'
export type { LeadFormSectionProps } from './LeadFormSection'

export { ServiceIndex, serviceIndexRenders } from './ServiceIndex'
export type { ServiceIndexProps, ServiceIndexItem } from './ServiceIndex'

export { ProcessSteps, processStepsRenders } from './ProcessSteps'
export type { ProcessStepsProps, ProcessStep } from './ProcessSteps'

export { Differentiator } from './Differentiator'
export type { DifferentiatorProps } from './Differentiator'

export { FaqSection, faqSectionRenders } from './FaqSection'
export type { FaqSectionProps, FaqEntry } from './FaqSection'

export { RelatedLinks, relatedLinksRenders } from './RelatedLinks'
export type { RelatedLinksProps } from './RelatedLinks'

export { MarketCoverage, marketCoverageRenders } from './MarketCoverage'
export type { MarketCoverageProps } from './MarketCoverage'

/*
  A hub's opening explainer. Not the home page's `Differentiator` and
  not `MarketGuidance`: this one is the page's own argument in prose,
  with the heading beside it rather than above it.
*/
export { SelectionPanel, selectionPanelRenders } from './SelectionPanel'
export type { SelectionPanelProps } from './SelectionPanel'

export { HubIntro, hubIntroRenders } from './HubIntro'
export type { HubIntroProps } from './HubIntro'

export { CtaSection } from './CtaSection'
export type { CtaSectionProps, CtaVariant } from './CtaSection'
/*
  Not a section - one list item for the closing CTA's body, shared by
  the San Diego and Las Vegas hubs. It sits here because it reads
  `SECTION_ICONS`, and a `components/ui` home would have pointed the
  primitives layer at this one.
*/
export { CtaBenefit } from './CtaBenefit'
