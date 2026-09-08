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
  /**
   * Which half of the aside split gets the larger share.
   *
   * `copy`  (default) 11fr/9fr, which is 55/45 exactly. Right for a
   *         lead form, where the copy is the argument and the form is
   *         the response to it. Every existing caller takes this.
   * `media` 5fr/7fr, which is 42/58. Right for a photograph or a
   *         carousel, where the picture wants the larger half and the
   *         copy wants a capped measure rather than a wide column.
   *
   * ⚠ THE FRACTIONS ARE EXACT, NOT APPROXIMATE. A 12-column grid can
   * only round these; 11/9 and 5/7 hit 55/45 and 42/58 on the nose,
   * which is why the balance is expressed this way rather than in
   * `col-span`s.
   */
  asideBalance?: 'copy' | 'media'
  /**
   * How wide the copy column runs.
   *
   * `reading` (default) `--container-reading`, 42rem. Every hero
   *           without a backdrop takes it, and so does `/locations/`,
   *           whose copy sits beside a form rather than over a picture.
   * `narrow`  38rem, which is 608px. For a hero whose backdrop is the
   *           whole composition rather than a partner to a form: the
   *           copy is the only thing over the photograph, and 42rem of
   *           it runs wide enough on a large display to read as a
   *           block rather than as a column.
   */
  copyWidth?: 'reading' | 'narrow'
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
  asideBalance = 'copy',
  copyWidth = 'reading',
  className,
}: HeroProps) {
  const hasAside = aside !== undefined
  const hasMedia = !hasAside && media !== undefined && variant !== 'editorial'
  const onBackdrop = backdrop !== undefined

  const copy = (
    <div
      className={cn(
        !hasMedia &&
          !hasAside &&
          (copyWidth === 'narrow'
            ? 'max-w-[38rem]'
            : 'max-w-[var(--container-reading)]'),
        /*
          ⚠ THE COPY IS CAPPED BESIDE A PICTURE, NOT BESIDE A FORM. At
          42/58 the copy column is already narrow, and 35rem keeps the
          measure readable rather than letting the heading run the full
          width of its cell on a wide display.
        */
        hasAside && asideBalance === 'media' && 'max-w-[35rem]',
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
            /*
              ⚠ `accent` (SOLID BLUE), NOT `secondary` (WHITE), SINCE
              2026-09-08 ON OWNER DIRECTION. The white pill sat beside
              the green primary on a scrimmed photograph and read as
              the brighter of the two, which inverted the hierarchy:
              the conversion action is the green one.

              It follows the green/blue system the rest of the site now
              uses - `--accent` green for conversion, `--accent-secondary`
              blue for navigation and non-CTA emphasis (DEC-096). "View
              services" is navigation.

              ⚠ THE VARIANT, NOT A `className`. `cn()` here is a plain
              join rather than tailwind-merge, so a `bg-accent-secondary`
              passed alongside `secondary`'s own `bg-surface` would ship
              both and let stylesheet order pick the winner.

              ⚠ ONLY THE HOME PAGE IS AFFECTED TODAY. It is the single
              caller that sets `secondaryAction`; a second one would
              inherit this, which is correct - the reasoning is about
              the pair of buttons, not about that page.

              White on this blue measures 5.83:1. Against a scrimmed
              photograph the fill's own boundary is softer than the
              white pill's was; the owner ruled on that same trade-off
              for the CTA phone button (2026-09-07) and the label
              contrast, which is the AA requirement, is unaffected.
            */
            <ButtonLink href={secondaryAction.href} variant="accent">
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
    <div
      className={
        /*
          ⚠ 5fr/7fr IS 42/58, THE BALANCE A PICTURE COLUMN WANTS. The
          note above this block explains why 11fr/9fr is the form's.

          ⚠ BOTH BRANCHES ARE WRITTEN OUT IN FULL, AND THE `copy` ONE IS
          CHARACTER-FOR-CHARACTER WHAT SHIPPED BEFORE THIS PROP EXISTED.
          Composing it from a shared base plus a conditional reordered
          the class list, which changes the rendered HTML on all five
          pages that use an aside without changing a single pixel. Same
          reason `ScenarioGrid` writes its two frame branches out rather
          than appending to a base.
        */
        asideBalance === 'media'
          ? 'grid gap-10 lg:grid-cols-[5fr_7fr] lg:items-center lg:gap-12'
          : 'grid gap-10 lg:grid-cols-[11fr_9fr] lg:items-center lg:gap-12'
      }
    >
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
