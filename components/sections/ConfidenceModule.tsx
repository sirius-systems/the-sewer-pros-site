import { Section, type SectionDensity } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { verifiedOffers } from '@/data/business/offers'

/**
 * Confidence / offer module — free estimate, same-day availability.
 *
 * Governed by docs/22-decisions-change-log.md DEC-088.
 *
 * ===========================================================================
 * WHY THIS EXISTS NOW, WHEN THE PORT DELIBERATELY REMOVED IT
 * ===========================================================================
 * `docs/superpowers/specs/2026-08-23-power-page-templates-design.md`
 * removed `power`'s "optional confidence module" (free estimate,
 * financing, warranty, same-day/emergency availability) from the ported
 * composition maps entirely, citing CLAUDE.md §11/§23, 18 §89/§145, and
 * 01 §34 — none of those claims were verified at the time.
 *
 * DEC-088 changes the input, not the rule. Two of the four original
 * items — free estimate and same-day availability — are now
 * owner-confirmed (`data/business/offers.ts`). Financing and warranty
 * remain unconfirmed and are NOT part of this module; adding them here
 * would repeat exactly the mistake this file's sibling components exist
 * to prevent.
 *
 * Renders nothing if `verifiedOffers` is empty, matching every other
 * gated section in this library (18 §120) — the same rule that let
 * `TestimonialBand` and `ProofGallery` stay in the composition while
 * empty now works in reverse to let this one appear.
 */
export interface ConfidenceModuleProps {
  density?: SectionDensity
  id?: string
}

export function confidenceModuleRenders(): boolean {
  return verifiedOffers.length > 0
}

export function ConfidenceModule({
  density = 'dense',
  id = 'confidence-module',
}: ConfidenceModuleProps = {}) {
  if (!confidenceModuleRenders()) return null

  return (
    <Section density={density} surface="muted" labelledBy={id}>
      <SectionHeading id={id} level="h3" title="Good to know" />

      <ul className="mt-6 grid gap-6 sm:grid-cols-2">
        {verifiedOffers.map((offer) => (
          <li key={offer.label}>
            <p className="text-sm font-semibold text-foreground">
              {offer.label}
            </p>
            <p className="mt-1 text-sm leading-6 text-muted-foreground">
              {offer.detail}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
