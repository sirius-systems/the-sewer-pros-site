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
  className,
}: HeroProps) {
  const hasMedia = media !== undefined && variant !== 'editorial'

  const copy = (
    <div className={cn(!hasMedia && 'max-w-[var(--container-reading)]')}>
      {eyebrow !== undefined && (
        <p className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
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
        <div className="mt-5 text-body-lg text-muted-foreground [&>*+*]:mt-4">
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

  return (
    <Section density="sparse" className={className}>
      {hasMedia ? (
        // Appendix A: prefer an uneven split (7/5) over a balanced 6/6
        // where one side is genuinely primary — an even split "reads as
        // templated even when the content itself is left-aligned."
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">{copy}</div>
          <div className="lg:col-span-5">{media}</div>
        </div>
      ) : (
        copy
      )}
    </Section>
  )
}
