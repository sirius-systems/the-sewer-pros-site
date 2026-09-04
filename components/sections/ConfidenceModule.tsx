import type { SVGProps } from 'react'
import Image from 'next/image'
import {
  Section,
  ButtonLink,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import { cn } from '@/lib/utils/cn'
import { SectionHeading } from './SectionHeading'
import { verifiedOffers, type VerifiedOffer } from '@/data/business/offers'

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
 *
 * ---------------------------------------------------------------------------
 * ⚠ THE 2026-09-04 EXPANSION IS PRESENTATION, NOT A NEW APPROVAL
 * ---------------------------------------------------------------------------
 * The cards grew from a label and a sentence into an eyebrow, heading,
 * paragraph, fact rows and an action. That is more structure around the
 * SAME TWO FACTS DEC-088 approved. No price, no turnaround, no
 * guarantee, no weekend, no emergency claim entered with it, and the
 * richer format must not become the opening for one — a new offer still
 * needs its own owner confirmation and decision-log entry.
 *
 * ⚠⚠ THE HEDGE IS THE CLAIM'S CONDITION, NOT A DISCLAIMER ON IT.
 * DEC-088 approves same-day availability only while the copy describes
 * availability rather than promising it. Two things enforce that here:
 *
 *   - Emphasis applies to a WHOLE fact value, never to part of one.
 *     Bolding "Same-day" and leaving "when scheduling permits" lighter
 *     would subordinate the hedge to the claim, which is the specific
 *     failure that entry rules out.
 *   - The "Service limits" row renders at the same size, weight and
 *     colour as every other row. It is not fine print, an asterisk, or
 *     a tooltip. The owner asked for the limits to build trust.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THE CARD IS NOT A LINK, AND THAT IS AN INSTRUCTION
 * ---------------------------------------------------------------------------
 * Only the button at the bottom is interactive (owner, 2026-09-04). Do
 * not wrap these in `LinkCard` for a larger target: the eyebrow,
 * heading and fact rows are plain text on purpose, so the one thing a
 * visitor can click is the one thing that converts.
 */

/* ==========================================================================
   Card marks — 18 §27, CLAUDE.md §56
   ========================================================================== */

/**
 * Hand-drawn rather than imported.
 *
 * `package.json` has no icon library and CLAUDE.md §56 warns against
 * adding one for two marks, so these follow the same inline convention
 * `TrustBar`, `ProcessSteps`, `Differentiator` and `AuthorityBand`
 * already use. Both are `aria-hidden` beside a visible heading that
 * names the card.
 */
type IconProps = SVGProps<SVGSVGElement>

function baseIconProps(props: IconProps): IconProps {
  return {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.75,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    ...props,
  }
}

/**
 * Estimate — a clipboard with a check.
 *
 * ⚠ NOT A DOLLAR SIGN, A PRICE TAG, OR A COUPON, AND NOT BY ACCIDENT.
 * This card is about asking whether you qualify, not about saving
 * money, and 18 §145 keeps promotional framing out of the design
 * system. A currency mark would make the card read as a discount offer,
 * which is a claim DEC-088 does not approve.
 */
function EstimateIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M9 4H7a1 1 0 0 0-1 1v15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1h-2" />
      <rect x="9" y="2.5" width="6" height="3" rx="1" />
      <path d="m9.5 13 2 2 3.5-3.5" />
    </svg>
  )
}

/** Scheduling — a calendar with a clock, because the row is about when. */
function SchedulingIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M20 10V6a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h6" />
      <path d="M4 9.5h16M8 3v3M16 3v3" />
      <circle cx="17" cy="17" r="4" />
      <path d="M17 15.2V17l1.3 1" />
    </svg>
  )
}

type OfferCard = NonNullable<VerifiedOffer['card']>

/**
 * Accent by name.
 *
 * Both are DEC-096 tokens — `--accent-secondary` and `--accent` — and
 * neither is a new colour. The accent lives on the top rule and the
 * mark; it never colours the claim text, where a tint would compete
 * with legibility for no gain.
 */
const ACCENT: Record<OfferCard['accent'], { rule: string; mark: string }> = {
  blue: { rule: 'border-t-accent-secondary', mark: 'text-accent-secondary' },
  green: { rule: 'border-t-accent', mark: 'text-accent' },
}

export interface ConfidenceModuleProps {
  density?: SectionDensity
  /**
   * Overrides the section's natural surface.
   *
   * Surface is a SEQUENCE decision, like `density` above: only the
   * composing template knows what sits either side of this section,
   * and the owner directed clear separation between adjacent sections
   * (2026-09-04). A section cannot pick its own contrast against
   * neighbours it cannot see.
   *
   * ⚠ DEFAULTS TO `muted` SINCE 2026-09-04, WHERE IT USED TO BE
   * `default`. The cards are white now, and white cards on a white
   * section have only their border to separate them from the page.
   * `--surface-muted` is the site's existing light blue-grey; no new
   * tint was introduced for this.
   */
  surface?: SectionSurface
  id?: string
}

export function confidenceModuleRenders(): boolean {
  return verifiedOffers.length > 0
}

export function ConfidenceModule({
  density = 'dense',
  surface = 'muted',
  id = 'confidence-module',
}: ConfidenceModuleProps = {}) {
  if (!confidenceModuleRenders()) return null

  return (
    <Section density={density} surface={surface} labelledBy={id}>
      {/*
        ⚠ THE `sr-only` HEADING IS GONE, AND THE LANDMARK IS STILL NAMED.

        This section carried a visually hidden "Good to know" `<h2>`
        purely so `labelledBy` had something to point at after the
        visible heading was removed. There is a real visible `<h2 id>`
        again, rendered by `SectionHeading`, so the workaround has no
        job left and keeping it would give the landmark two candidate
        names.
      */}
      <SectionHeading
        id={id}
        title="Planning Your Sewer Service Appointment"
        intro="Get clear information about estimates, scheduling hours, and appointment availability before you request sewer inspection or cleaning service."
      />

      {/*
        `items-stretch` is the grid default, but `h-full` on the card and
        `mt-auto` on the action are what actually align the two buttons:
        the estimate body runs three sentences and the scheduling body
        two, so without it the buttons would sit at different heights.
      */}
      <ul className="mt-10 grid gap-6 sm:grid-cols-2">
        {verifiedOffers.map((offer) => {
          const card = offer.card

          /*
            No `card` means the old compact treatment, unchanged. Both
            entries have one today; this is the fallback that keeps a
            future compact offer renderable rather than broken.
          */
          if (card === undefined) {
            return (
              <li
                key={offer.label}
                className="rounded-md border border-border bg-surface p-6"
              >
                <p className="text-sm font-semibold text-foreground">
                  {offer.label}
                </p>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  {offer.detail}
                </p>
              </li>
            )
          }

          const accent = ACCENT[card.accent]
          const Icon = card.accent === 'blue' ? EstimateIcon : SchedulingIcon

          return (
            <li
              key={offer.label}
              className={cn(
                /*
                  `rounded-md` and `border-border` are the card language
                  every other card on this site uses, kept rather than
                  moved to an 8px radius for these two alone.
                  `shadow-sm` is the one light shadow already in use
                  (the hero and CTA form wrappers); 18 §25 rules out
                  dramatic floating cards, not a restrained lift.
                */
                'flex h-full flex-col rounded-md border border-border border-t-4 bg-surface p-7 shadow-sm sm:p-8',
                accent.rule,
              )}
            >
              {offer.image !== undefined && (
                <div className="relative mb-6 aspect-[7/4] w-full overflow-hidden rounded-md">
                  <Image
                    src={offer.image.src}
                    alt={offer.image.alt}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <Icon className={cn('h-9 w-9 shrink-0', accent.mark)} />

              <p className="mt-4 text-caption font-semibold tracking-wide text-muted-foreground uppercase">
                {card.eyebrow}
              </p>

              <h3 className="mt-2 text-h3 font-semibold tracking-tight text-balance text-foreground">
                {card.heading}
              </h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                {card.body}
              </p>

              {/*
                ⚠ EVERY ROW RENDERS AT ONE SIZE, WEIGHT AND COLOUR. The
                "Service limits" row is a fact, not a footnote, and the
                whole point of DEC-088's hedge is lost if a limit reads
                as smaller than the claim above it. `emphasis` lifts a
                COMPLETE value; there is deliberately no mechanism to
                emphasise part of one.
              */}
              <dl className="mt-6 divide-y divide-border border-t border-border">
                {card.facts.map((fact) => (
                  <div key={fact.label} className="py-3">
                    <dt className="text-caption font-medium tracking-wide text-muted-foreground uppercase">
                      {fact.label}
                    </dt>
                    <dd
                      className={cn(
                        'mt-1 text-sm leading-6 text-foreground',
                        fact.emphasis === true && 'font-semibold',
                      )}
                    >
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>

              {/*
                `mt-auto` pushes the action to the card's floor so both
                buttons line up across the pair. `pt-6` rather than a
                margin so the gap survives the auto margin absorbing it.

                ⚠ THIS BUTTON IS THE ONLY INTERACTIVE THING IN THE CARD.
                See the header: the surface is deliberately not a link.

                Estimate takes `accent`, the solid authority blue,
                on owner direction (2026-09-04) where it was the white
                outline button. That variant exists in `Button.tsx`
                rather than as a `className` here because `cn()` is a
                plain join: a `bg-accent-secondary` passed alongside
                `secondary`'s own `bg-surface` would ship both and let
                stylesheet order decide.

                ⚠ TWO SOLID BUTTONS, NOT TWO PRIMARIES. Green is the
                conversion colour and only the scheduling card uses it
                (DEC-096). Blue is `--accent-secondary`, whose
                documented role is non-CTA emphasis. The pair still
                reads as a hierarchy rather than as two equal asks.
              */}
              <div className="mt-auto pt-6">
                <ButtonLink
                  href={card.action.href}
                  variant={card.accent === 'green' ? 'primary' : 'accent'}
                >
                  {card.action.label}
                </ButtonLink>
              </div>
            </li>
          )
        })}
      </ul>
    </Section>
  )
}
