import Image from 'next/image'
import { Section, type SectionDensity } from '@/components/ui'
import { cn } from '@/lib/utils/cn'
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
    <Section density={density} labelledBy={id}>
      {/*
        The visible "Good to know" heading was removed on owner direction.
        `labelledBy` wires `aria-labelledby` on the section landmark
        (components/ui/Section.tsx), so the id has to keep resolving to a
        real element or the landmark loses its accessible name. An
        `sr-only` heading keeps the name without the visible label,
        matching the `sr-only` convention already used in
        ReviewCarousel.tsx.
      */}
      <h2 id={id} className="sr-only">
        Good to know
      </h2>

      {/*
        SIZE FOLLOWS THE IMAGE, NOT THE OTHER WAY ROUND.

        A card with approved artwork renders large, with a 7:4 crop
        running edge to edge above the text. A card without one keeps
        exactly today's compact treatment: no crop container, no grey
        box, no gradient standing in for a photograph. Enlarging every
        card for images that do not exist would just produce bigger
        empty boxes (18 §40-42).

        Both offers are imageless today, so both render unchanged.
      */}
      <ul className="grid gap-6 sm:grid-cols-2">
        {verifiedOffers.map((offer) => (
          <li
            key={offer.label}
            className={cn(
              'overflow-hidden rounded-md border border-border bg-surface',
              offer.image === undefined && 'p-6',
            )}
          >
            {offer.image !== undefined && (
              <div className="relative aspect-[7/4] w-full overflow-hidden">
                <Image
                  src={offer.image.src}
                  alt={offer.image.alt}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className={cn(offer.image !== undefined && 'p-6')}>
              <p className="text-sm font-semibold text-foreground">
                {offer.label}
              </p>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                {offer.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  )
}
