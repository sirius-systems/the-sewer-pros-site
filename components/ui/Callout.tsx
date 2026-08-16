import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

/**
 * Content callout.
 *
 * Governed by docs/18-design-system.md §74, §96, §138.
 *
 * The five approved kinds from §74:
 *
 *   important   — a key warning or limitation
 *   good-to-know — helpful context
 *   independent — differentiator information
 *   buyer-tip   — real-estate content
 *   commercial  — operational content
 *
 * ---------------------------------------------------------------------------
 * MEANING NEVER RESTS ON COLOUR — 18 §96
 * ---------------------------------------------------------------------------
 * Every callout renders a visible text label, not just a coloured
 * border. §96 gives the rule directly: "Important information must not
 * rely on color alone." A reader who cannot distinguish the accent
 * still gets "Important:".
 *
 * 18 §74 and §138 both warn against overuse: do not turn ordinary
 * marketing copy into a warning box. `important` in particular is for
 * genuine limitations — §138's example is the honest statement that a
 * camera inspection cannot guarantee detection of every hidden defect,
 * which is exactly the transparency 18 §137 asks for.
 */
export type CalloutKind =
  | 'important'
  | 'good-to-know'
  | 'independent'
  | 'buyer-tip'
  | 'commercial'

const LABEL: Record<CalloutKind, string> = {
  important: 'Important',
  'good-to-know': 'Good to know',
  independent: 'Independent inspection note',
  'buyer-tip': 'Buyer tip',
  commercial: 'Commercial note',
}

/**
 * Border accents only — no filled backgrounds.
 *
 * 18 §5.3 asks for trust through restraint, and §25 keeps elevation
 * subtle. A left border plus a label reads as an aside rather than an
 * alarm.
 */
const ACCENT: Record<CalloutKind, string> = {
  important: 'border-l-warning',
  'good-to-know': 'border-l-border',
  independent: 'border-l-accent',
  'buyer-tip': 'border-l-accent',
  commercial: 'border-l-brand',
}

export interface CalloutProps {
  kind: CalloutKind
  /** Overrides the default label. Keep it short and factual. */
  label?: string
  className?: string
  children: ReactNode
}

export function Callout({ kind, label, className, children }: CalloutProps) {
  return (
    <aside
      className={cn(
        'border-l-4 bg-surface-muted py-4 pr-4 pl-5',
        ACCENT[kind],
        className,
      )}
    >
      <p className="text-caption font-semibold tracking-wide text-foreground uppercase">
        {label ?? LABEL[kind]}
      </p>
      <div className="mt-2 text-sm leading-6 text-foreground [&>*+*]:mt-3">
        {children}
      </div>
    </aside>
  )
}
