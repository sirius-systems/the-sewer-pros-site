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
export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'accent'
  | 'outline-blue'
  | 'outline-green'
  | 'outline-navy'

const VARIANT: Record<ButtonVariant, string> = {
  primary:
    'bg-accent text-accent-foreground hover:opacity-90 rounded-md px-5 shadow-none',
  secondary:
    'border border-border bg-surface text-foreground hover:bg-surface-muted rounded-md px-5',
  tertiary:
    'text-accent-secondary underline underline-offset-4 hover:text-foreground px-0',
  /*
    A solid button in the AUTHORITY BLUE, added 2026-09-04 on owner
    direction for the estimate card in `ConfidenceModule`.

    ⚠ IT IS NOT A SECOND PRIMARY. `--accent` green is the conversion
    colour and stays the only one (DEC-096); this is
    `--accent-secondary`, whose documented role in `globals.css` is
    exactly "links, nav states, secondary buttons, focus rings, non-CTA
    emphasis". A solid, weighty action that is deliberately not the
    page's conversion is what it is for.

    ⚠ IT EXISTS AS A VARIANT RATHER THAN A `className` FOR A REASON.
    `cn()` is a plain join, not tailwind-merge, so a `bg-accent-secondary`
    passed alongside `secondary`'s own `bg-surface` would ship both and
    let stylesheet order decide. The colour has to be swapped here or
    not at all.

    White on this blue measures 5.83:1, and the fill against a white
    card the same, so both the label and the control's boundary clear
    their floors.

    18 §106 still applies: one primary action per view. Reach for this
    where an action needs weight without claiming to be the conversion.
  */
  accent:
    'bg-accent-secondary text-accent-secondary-foreground hover:opacity-90 rounded-md px-5 shadow-none',
  /*
    ==========================================================================
    OUTLINED ACTIONS, ONE PER PALETTE ACCENT (owner, 2026-09-04)
    ==========================================================================
    Added for the homepage routing cards, where each card's footer action
    has to carry the accent its own icon and top rule already use.

    ⚠ THREE VARIANTS RATHER THAN ONE `outline` PLUS A COLOUR CLASS,
    BECAUSE `cn()` IS A PLAIN JOIN AND NOT TAILWIND-MERGE. A caller
    passing `border-accent` alongside a shared variant's own
    `border-border` ships both and lets stylesheet order pick the
    winner. Every competing declaration has to be resolved here, in one
    string, or not at all.

    ⚠ THESE ARE NOT PRIMARIES. `secondary` is still the neutral outline
    button; these are the same weight with a stated accent. 18 §106's
    "do not visually style every action as primary" holds: on the
    routing grid three cards take an outline and only the contact card
    takes the solid `primary` green.

    Hover fills with the same token mixed 8% into white - the
    derivation `Differentiator`, `AuthorityBand` and `RoutingCards`
    already use for their tints, so a palette change carries through
    rather than stranding a hard-coded pastel.

    Contrast on the white card each of these sits on:
      blue  `--accent-secondary`  5.83:1
      green `--accent`            5.45:1
      navy  `--brand`            14.2:1
    and each holds on its own hover fill, which is 8% off white.
    Borders are the same tokens, so the control's boundary clears 3:1
    on all three.
  */
  'outline-blue':
    'border border-accent-secondary bg-surface text-accent-secondary hover:bg-[color-mix(in_srgb,var(--color-accent-secondary)_8%,white)] rounded-md px-5',
  'outline-green':
    'border border-accent bg-surface text-accent hover:bg-[color-mix(in_srgb,var(--color-accent)_8%,white)] rounded-md px-5',
  'outline-navy':
    'border border-brand bg-surface text-brand hover:bg-[color-mix(in_srgb,var(--color-brand)_8%,white)] rounded-md px-5',
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
  /**
   * Click handler, for buttons that drive UI rather than submit a form.
   *
   * Only usable from a client component. Server components have no
   * handler to pass, which is the intended friction: a button that does
   * something is interactive, and saying so at the boundary is correct.
   */
  onClick?: () => void
  /**
   * Accessible name, where the visible label is not sufficient on its
   * own — an icon-bearing control, or one whose meaning depends on
   * surrounding content (18 §96, CLAUDE.md §55).
   */
  'aria-label'?: string
  /** Element this control operates, e.g. a live region it advances. */
  'aria-controls'?: string
  /** Expanded state, for controls that disclose content. */
  'aria-expanded'?: boolean
  /**
   * Pressed state, for toggle buttons.
   *
   * A toggle is still a button, so it belongs on this primitive rather
   * than being hand-rolled with the variant classes copied out — 18
   * §46 wants one place where button appearance is decided.
   */
  'aria-pressed'?: boolean
}

export function Button({
  type = 'button',
  variant = 'primary',
  disabled = false,
  pending = false,
  pendingLabel = 'Working…',
  className,
  children,
  onClick,
  'aria-label': ariaLabel,
  'aria-controls': ariaControls,
  'aria-expanded': ariaExpanded,
  'aria-pressed': ariaPressed,
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled || pending}
      aria-busy={pending || undefined}
      aria-label={ariaLabel}
      aria-controls={ariaControls}
      aria-expanded={ariaExpanded}
      aria-pressed={ariaPressed}
      onClick={onClick}
      className={cn(BASE, VARIANT[variant], className)}
    >
      {pending ? pendingLabel : children}
    </button>
  )
}
