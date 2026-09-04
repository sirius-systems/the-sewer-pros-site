import type { ReactNode } from 'react'
import { Section, ButtonLink } from '@/components/ui'
import { PRIMARY_CTA } from '@/components/layout/cta'
import { cn } from '@/lib/utils/cn'

/**
 * Page hero.
 *
 * Governed by docs/18-design-system.md §37-41, §151, §5.6 and
 * Appendix A ("Hero patterns").
 *
 * Appendix A names three shapes:
 *
 *   editorial — headline + subhead only, no image. "Use when the copy
 *               is confident enough to carry the section alone."
 *   split     — headline/subhead one side, a real supporting image the
 *               other. The default for the homepage and service heroes
 *               (18 §38-39).
 *   image-led — full-bleed image with a smaller text block. Only when
 *               the visual is the strongest asset.
 *
 * ⚠ `split` and `image-led` accept a `media` node but no image is
 * shipped with this component. 18 §28-34 require real inspection
 * photography, and §34 rules out "unrealistic AI imagery" and staged
 * stock. Until approved assets exist, `editorial` is the honest default
 * — 18 §37 already states a hero "should not depend on a decorative
 * image to explain the page."
 *
 * ---------------------------------------------------------------------------
 * `backdrop` AND `aside` — THE HOMEPAGE COMPOSITION (2026-09-03)
 * ---------------------------------------------------------------------------
 * `backdrop` puts a full-bleed layer behind the hero and flips the copy
 * to white. `aside` puts a second column beside the copy at 55/45,
 * which is where the homepage lead form now lives, on owner direction.
 *
 * These are separate from `media` on purpose. `media` is a supporting
 * picture INSIDE the container at 7/5; `aside` is a working column at
 * 11/9, and a form is not a supporting picture. Passing both `media`
 * and `aside` is meaningless, so `aside` wins and `media` is ignored.
 *
 * ⚠ `backdrop` IS WHAT MAKES THE COPY WHITE. The two are one decision:
 * white copy without a backdrop is invisible on the page background,
 * and dark copy over a photographic backdrop is unreadable. Do not
 * split them.
 *
 * Mobile order is copy → CTA → media (18 §151): the action must not be
 * pushed below an oversized hero image.
 *
 * The heading is `text-balance` and `h1` — every page has exactly one.
 */
export type HeroVariant = 'editorial' | 'split' | 'image-led'

export interface HeroProps {
  variant?: HeroVariant
  eyebrow?: string
  title: string
  intro?: ReactNode
  /** Defaults to the global primary CTA. Pass `null` to omit entirely. */
  primaryAction?: { href: string; label: string } | null
  secondaryAction?: { href: string; label: string }
  /** Real photography only — see the note above. */
  media?: ReactNode
  /**
   * Full-bleed layer rendered behind the hero.
   *
   * Supplying this switches the copy to white and drops the section's
   * own surface, so the backdrop must carry a scrim dark enough to
   * hold that text. See `HeroBackdrop`.
   */
  backdrop?: ReactNode
  /** Second column beside the copy at 55/45. Takes precedence over `media`. */
  aside?: ReactNode
  className?: string
}

export function Hero({
  variant = 'editorial',
  eyebrow,
  title,
  intro,
  primaryAction = PRIMARY_CTA,
  secondaryAction,
  media,
  backdrop,
  aside,
  className,
}: HeroProps) {
  const hasAside = aside !== undefined
  const hasMedia = !hasAside && media !== undefined && variant !== 'editorial'
  const onBackdrop = backdrop !== undefined

  const copy = (
    <div
      className={cn(
        !hasMedia && !hasAside && 'max-w-[var(--container-reading)]',
        onBackdrop && 'text-white',
      )}
    >
      {eyebrow !== undefined && (
        <p
          className={cn(
            'text-caption font-semibold tracking-wide uppercase',
            onBackdrop ? 'text-white' : 'text-muted-foreground',
          )}
        >
          {eyebrow}
        </p>
      )}

      <h1
        className={cn(
          'font-semibold tracking-tight text-balance',
          variant === 'editorial' ? 'text-display' : 'text-h1',
          eyebrow !== undefined && 'mt-4',
        )}
      >
        {title}
      </h1>

      {intro !== undefined && (
        <div
          className={cn(
            'mt-5 text-body-lg [&>*+*]:mt-4',
            /*
              Opaque white, not white at an opacity. Hierarchy against
              the headline is carried by size and weight instead —
              blending white down over the scrim spends contrast margin
              that the brightest frame has no room to give.
            */
            onBackdrop ? 'text-white' : 'text-muted-foreground',
          )}
        >
          {intro}
        </div>
      )}

      {(primaryAction !== null || secondaryAction !== undefined) && (
        <div className="mt-8 flex flex-wrap items-center gap-3">
          {primaryAction !== null && (
            <ButtonLink href={primaryAction.href}>{primaryAction.label}</ButtonLink>
          )}
          {secondaryAction !== undefined && (
            <ButtonLink href={secondaryAction.href} variant="secondary">
              {secondaryAction.label}
            </ButtonLink>
          )}
        </div>
      )}
    </div>
  )

  const body = hasAside ? (
    /*
      55/45, as directed. Expressed as 11fr/9fr because that IS 55/45
      exactly, where a 12-column grid can only approximate it (7/5 is
      58/42).

      `lg:items-center` centres the copy against the form, on owner
      direction (2026-09-04), matching what CtaSection's split variant
      does with the same pairing. This reverses `items-start`, which
      shipped first on the argument that the form is much taller and
      centring would leave the headline floating; the owner has seen
      both and chosen this one.

      `lg:` only. Below it the grid is one column and there is nothing
      to align against.
    */
    <div className="grid gap-10 lg:grid-cols-[11fr_9fr] lg:items-center lg:gap-12">
      <div>{copy}</div>
      <div>{aside}</div>
    </div>
  ) : hasMedia ? (
    // Appendix A: prefer an uneven split (7/5) over a balanced 6/6
    // where one side is genuinely primary — an even split "reads as
    // templated even when the content itself is left-aligned."
    <div className="grid items-center gap-10 lg:grid-cols-12">
      <div className="lg:col-span-7">{copy}</div>
      <div className="lg:col-span-5">{media}</div>
    </div>
  ) : (
    copy
  )

  if (!onBackdrop) {
    return (
      <Section density="sparse" className={className}>
        {body}
      </Section>
    )
  }

  /*
    `isolate` so the backdrop's negative z-index stays inside this
    stacking context rather than sliding behind the page background,
    and `overflow-hidden` so a cover-cropped frame cannot widen the
    document. `surface="none"` because the backdrop is the surface.
  */
  return (
    <div className="relative isolate overflow-hidden">
      {backdrop}
      <Section density="sparse" surface="none" className={className}>
        {body}
      </Section>
    </div>
  )
}
