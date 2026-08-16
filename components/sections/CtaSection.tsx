import type { ReactNode } from 'react'
import { Section, ButtonLink } from '@/components/ui'
import { PRIMARY_CTA } from '@/components/layout/cta'
import { cn } from '@/lib/utils/cn'

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
  className,
}: CtaSectionProps) {
  const isPanel = variant === 'panel'

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
            isPanel ? 'opacity-80' : 'text-muted-foreground',
          )}
        >
          {body}
        </p>
      )}

      <div className="mt-8 flex flex-wrap items-center gap-3">
        <ButtonLink
          href={action.href}
          variant={isPanel ? 'secondary' : 'primary'}
        >
          {action.label}
        </ButtonLink>
        {secondaryAction !== undefined && (
          <ButtonLink href={secondaryAction.href} variant="tertiary">
            {secondaryAction.label}
          </ButtonLink>
        )}
      </div>
    </div>
  )

  return (
    <Section
      // Panel is the page's strongest moment, so it gets sparse density
      // and the brand surface; band stays deliberately quiet.
      density={isPanel ? 'sparse' : 'dense'}
      surface={isPanel ? 'brand' : 'muted'}
      labelledBy={id}
      className={className}
    >
      {variant === 'split' && proof !== undefined ? (
        <div className="grid gap-10 lg:grid-cols-12">
          {content}
          <div className="lg:col-span-5">{proof}</div>
        </div>
      ) : (
        content
      )}
    </Section>
  )
}
