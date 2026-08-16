import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

/**
 * Badge / tag.
 *
 * Governed by docs/18-design-system.md §23, §88, §96.
 *
 * ⚠ 18 §88: "Use badges sparingly." Legitimate uses are factual
 * classification — a market label, a service category, an article
 * topic, commercial, home buyer.
 *
 * "Avoid decorative trust badges with unverifiable claims." This
 * component is not for credentials, ratings, awards, guarantees, or
 * "#1"-style claims: 01 §35 lists those among facts requiring
 * documented evidence, and 18 §71 forbids unsubstantiated superlatives.
 * A badge here labels content, it does not assert credibility.
 *
 * Pills are permitted for this use specifically — 18 §23 reserves the
 * pill shape for "tags, categories, status labels, compact controls",
 * while ruling it out for cards.
 */
export type BadgeTone = 'neutral' | 'accent'

const TONE: Record<BadgeTone, string> = {
  neutral: 'border-border bg-surface-muted text-muted-foreground',
  accent: 'border-accent/30 bg-accent/10 text-accent',
}

export interface BadgeProps {
  tone?: BadgeTone
  className?: string
  children: ReactNode
}

export function Badge({ tone = 'neutral', className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-2.5 py-0.5',
        'text-caption font-medium',
        TONE[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
