import type { ReactNode } from 'react'
import { Section, ButtonLink } from '@/components/ui'
import { PRIMARY_CTA } from '@/components/layout/cta'
import { cn } from '@/lib/utils/cn'
import type { CardImage } from '@/types'

/**
 * Conversion section.
 *
 * Governed by docs/18-design-system.md §62, §89, §106, §155 and
 * Appendix A ("Conversion"); docs/17-conversion-architecture.md;
 * docs/01-business-brand-foundation.md §34.
 *
 * Appendix A names three shapes, and they are not interchangeable:
 *
 *   band  — thin, high-contrast strip with a single CTA, used mid-page
 *           AFTER a relevant argument has been made
 *   panel — the strongest visual treatment on the page, for the FINAL
 *           conversion moment. At most one per page.
 *   split — CTA beside supporting proof, when social proof should
 *           reinforce the ask directly
 *
 * 18 §62: "Avoid making every CTA visually identical." §108 adds that
 * the strongest treatment belongs at the final conversion moment rather
 * than repeated throughout, and Appendix B checks for "a CTA appearing
 * after every section rather than at moments of rising intent."
 *
 * ---------------------------------------------------------------------------
 * WHAT THIS WILL NOT DO
 * ---------------------------------------------------------------------------
 * No countdown, no "call now" urgency, no discount or coupon slot.
 * 18 §89 rules out urgency visuals, §145 keeps promotions out of the
 * core design system, and 01 §34 and 17 forbid manufactured pressure.
 * The label defaults to the single global CTA constant so wording stays
 * consistent — 18 §155 lists inconsistent CTA rendering as a failure.
 *
 * `proof` is a slot, not a source of claims. Pass only verified
 * material; there is no review data in this project (01 §35, §77).
 */
export type CtaVariant = 'band' | 'panel' | 'split'

export interface CtaSectionProps {
  variant?: CtaVariant
  id?: string
  title: string
  body?: string
  action?: { href: string; label: string }
  secondaryAction?: { href: string; label: string }
  /** Verified supporting content for the `split` variant only. */
  proof?: ReactNode
  /**
   * Market phone number, rendered beside the CTA.
   *
   * ⚠ ONLY MARKET-SCOPED TEMPLATES MAY PASS THIS.
   *
   * The business publishes two numbers on separate market sites with
   * different hours (DEC-070, DEC-071), and 01 §20 forbids copying one
   * market's facts onto another market's page. A template that does not
   * know its market must omit this prop and let the CTA route to
   * `/contact/`, which lists both markets separately — the same reason
   * `SiteHeader` shows "Call" rather than a number (PENDING-017).
   *
   * The reference composition displays a phone prominently in every
   * final CTA banner. That is not portable here, and this prop is the
   * narrowed version of it.
   */
  phone?: { label: string; href: string }
  /**
   * Full-bleed artwork behind the whole section.
   *
   * ⚠ IT OVERRIDES THE VARIANT'S SURFACE, because the image is the
   * surface. `Section` handles that and turns section text white; what
   * this component owns is everything inside that sets its own colour.
   *
   * ⚠⚠ IT ALSO CHANGES THE BUTTON, AND THAT IS NOT COSMETIC. `band`
   * and `split` use the green `primary` button, which is right on a
   * light surface and wrong here: green against a scrimmed photograph
   * is around 1.1:1 for the control's own boundary, against the 3:1
   * that boundary needs to be identifiable. With an image the button
   * drops to the light `secondary` fill, which is the same trade
   * `panel` already makes on the brand surface.
   *
   * ⚠ ANY `proof` PASSED ALONGSIDE THIS MUST BRING ITS OWN OPAQUE
   * SURFACE. The lead form's inputs, labels and focus rings are built
   * for a light background (`components/ui/Field.tsx`); floating them
   * on a photograph would mean restyling every control. The homepage
   * hero already wraps the same form in a card for exactly this
   * reason, and the final CTA does the same.
   */
  backgroundImage?: CardImage
  className?: string
}

export function CtaSection({
  variant = 'band',
  id = 'cta',
  title,
  body,
  action = PRIMARY_CTA,
  secondaryAction,
  proof,
  phone,
  backgroundImage,
  className,
}: CtaSectionProps) {
  const isPanel = variant === 'panel'
  /*
    Both states put light text on a dark ground, so they share most
    treatments. They are NOT the same for opacity — see the body below.
  */
  const onDark = isPanel || backgroundImage !== undefined

  const content = (
    <div className={cn(variant === 'split' && 'lg:col-span-7')}>
      <h2
        id={id}
        className={cn(
          'font-semibold tracking-tight text-balance',
          isPanel ? 'text-h1' : 'text-h2',
        )}
      >
        {title}
      </h2>

      {body !== undefined && (
        <p
          className={cn(
            'mt-4 max-w-[var(--container-reading)] text-body-lg',
            /*
              ⚠ OPAQUE WHITE OVER AN IMAGE, DIMMED ONLY ON `panel`.

              `panel` sits on brand navy, which is dark enough that
              white at 80% still measures about 11:1. A scrimmed
              photograph is not: the scrim is sized so OPAQUE white
              clears 4.5:1 by 0.26, and dimming to 80% drops the worst
              case to 3.71:1, which fails. There is no margin here to
              spend on an opacity.
            */
            backgroundImage !== undefined
              ? 'text-white'
              : isPanel
                ? 'opacity-80'
                : 'text-muted-foreground',
          )}
        >
          {body}
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-3">
        {/* See `backgroundImage` for why a dark ground forces `secondary`. */}
        <ButtonLink href={action.href} variant={onDark ? 'secondary' : 'primary'}>
          {action.label}
        </ButtonLink>
        {secondaryAction !== undefined && (
          <ButtonLink
            href={secondaryAction.href}
            variant="tertiary"
            /*
              `tertiary` is `--accent-secondary`, tuned for a light
              surface. Over a scrimmed photograph it is close to
              invisible, so the link goes white and keeps its
              underline.
            */
            className={cn(
              backgroundImage !== undefined &&
                'text-white hover:text-white hover:opacity-80',
            )}
          >
            {secondaryAction.label}
          </ButtonLink>
        )}
      </div>

      {phone !== undefined && (
        <p
          className={cn(
            'mt-4 text-sm',
            backgroundImage !== undefined
              ? 'text-white'
              : isPanel
                ? 'opacity-80'
                : 'text-muted-foreground',
          )}
        >
          Prefer to talk now?{' '}
          <a
            href={phone.href}
            className="font-medium underline underline-offset-4"
          >
            {phone.label}
          </a>
        </p>
      )}
    </div>
  )

  return (
    <Section
      // Panel is the page's strongest moment, so it gets sparse density
      // and the brand surface; band stays deliberately quiet.
      density={isPanel ? 'sparse' : 'dense'}
      /*
        `surface` is the fallback, not the current appearance: an image
        overrides it inside `Section`, and this is what comes back if
        the image is ever removed.
      */
      surface={isPanel ? 'brand' : 'muted'}
      backgroundImage={backgroundImage}
      labelledBy={id}
      className={className}
    >
      {variant === 'split' && proof !== undefined ? (
        /*
          `lg:items-center` centres the ask against the proof column.

          The proof slot on the homepage is the lead form, which is
          roughly twice the height of the title and body beside it.
          Grid's default is `stretch`, so the content cell filled the
          row and its text sat at the top of it, leaving the heading
          level with the form's first field and a large void beneath.

          Scoped to `lg` because that is where the two columns exist.
          Below it the grid is a single column and cross-axis alignment
          has nothing to align against.
        */
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          {content}
          <div className="lg:col-span-5">{proof}</div>
        </div>
      ) : (
        content
      )}
    </Section>
  )
}
