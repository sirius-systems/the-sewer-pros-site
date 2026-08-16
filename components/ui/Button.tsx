import Link from 'next/link'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

/**
 * Button and button-styled link.
 *
 * Governed by docs/18-design-system.md §46-49, §23, §25, §93-94, §106.
 *
 * ---------------------------------------------------------------------------
 * HIERARCHY — 18 §46, §106
 * ---------------------------------------------------------------------------
 *   primary   — Request Service, Schedule Inspection, Request Commercial
 *   secondary — Call, View Services, Learn More
 *   tertiary  — inline and card links, supporting navigation
 *
 * 18 §106: "Do not visually style every action as primary." One primary
 * action per view is the intent.
 *
 * ---------------------------------------------------------------------------
 * WHAT THIS COMPONENT REFUSES TO DO
 * ---------------------------------------------------------------------------
 * No `glow`, `pulse`, or `urgent` variant, and no size above `md`.
 * 18 §25 rules out glowing CTAs, §89 rules out urgency visuals, and
 * §48 warns against oversized CTA blocks. Those are brand-position
 * decisions (the site must not read as an emergency-sales funnel,
 * 18 §2), so the primitive does not expose them as options.
 *
 * Hover changes opacity and background but never scale — 18 §93 warns
 * against hover scaling that shifts layout.
 */
export type ButtonVariant = 'primary' | 'secondary' | 'tertiary'

const VARIANT: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-accent-foreground hover:opacity-90 rounded-md px-5 shadow-none',
  secondary:
    'border border-border bg-surface text-foreground hover:bg-surface-muted rounded-md px-5',
  tertiary:
    'text-accent underline underline-offset-4 hover:text-foreground px-0',
}

/**
 * `min-h-11` is 44px — the minimum touch target 18 §48 requires.
 * Applied to every variant including tertiary, so inline actions stay
 * tappable rather than becoming a precision target on mobile.
 */
const BASE =
  'inline-flex min-h-11 items-center justify-center gap-2 text-sm font-medium ' +
  'transition-colors disabled:pointer-events-none disabled:opacity-50'

interface CommonProps {
  variant?: ButtonVariant
  className?: string
  children: ReactNode
}

export interface ButtonLinkProps extends CommonProps {
  href: string
  /** Set only for genuinely external destinations. */
  external?: boolean
}

/**
 * A link styled as a button.
 *
 * Internal hrefs must be canonical approved pathnames — 05 §51 and
 * CLAUDE.md §51 forbid linking through a redirect, and 16 §25 forbids
 * linking to routes that are not approved.
 */
export function ButtonLink({
  href,
  external = false,
  variant = 'primary',
  className,
  children,
}: ButtonLinkProps) {
  const classes = cn(BASE, VARIANT[variant], className)

  if (external) {
    return (
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className={classes}
      >
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  )
}

export interface ButtonProps extends CommonProps {
  type?: 'button' | 'submit'
  disabled?: boolean
  /**
   * Renders a busy state for form submission (18 §49).
   *
   * Communicated with text as well as appearance — 18 §96 requires
   * meaning never rest on colour alone.
   */
  pending?: boolean
  pendingLabel?: string
}

export function Button({
  type = 'button',
  variant = 'primary',
  disabled = false,
  pending = false,
  pendingLabel = 'Working…',
  className,
  children,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || pending}
      aria-busy={pending || undefined}
      className={cn(BASE, VARIANT[variant], className)}
    >
      {pending ? pendingLabel : children}
    </button>
  )
}
