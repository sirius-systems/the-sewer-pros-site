import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

/**
 * Long-form content wrapper.
 *
 * Governed by docs/18-design-system.md §16, §17, §76, §92, §102 and
 * §5.6.
 *
 * Holds the readable measure (18 §17 targets ~65-80 characters) and
 * styles descendant elements so article and answer content does not
 * need per-element classes.
 *
 * ⚠ Left-aligned, always. 18 §5.6: "Centered composition is the
 * exception, not the default… Left-align long-form content, lists, and
 * paragraph text." Centred paragraph text is a named failure in §155
 * and an Appendix B check, so this component provides no centring
 * option.
 *
 * Inline links carry an underline rather than colour alone (18 §92,
 * §96).
 */
export interface ProseProps {
  className?: string
  children: ReactNode
}

export function Prose({ className, children }: ProseProps) {
  return (
    <div
      className={cn(
        'max-w-[var(--container-reading)] text-left',
        // Vertical rhythm
        '[&>*+*]:mt-6',
        // Paragraphs
        '[&_p]:text-base [&_p]:leading-7 [&_p]:text-foreground',
        // Headings — sizes from the type scale, weight per 18 §15
        '[&_h2]:text-h2 [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:mt-12',
        '[&_h3]:text-h3 [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:mt-10',
        '[&_h4]:text-h4 [&_h4]:font-semibold [&_h4]:mt-8',
        // Lists — 18 §73
        '[&_ul]:list-disc [&_ul]:pl-6 [&_ol]:list-decimal [&_ol]:pl-6',
        '[&_li]:leading-7 [&_li+li]:mt-2',
        // Links — 18 §92
        '[&_a]:text-accent [&_a]:underline [&_a]:underline-offset-4',
        '[&_a:hover]:text-foreground',
        // Tables — 18 §72, §100: must stay readable on mobile
        '[&_table]:w-full [&_table]:text-sm',
        '[&_th]:border-b [&_th]:border-border [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold',
        '[&_td]:border-b [&_td]:border-border [&_td]:py-2 [&_td]:align-top',
        className,
      )}
    >
      {children}
    </div>
  )
}

/**
 * Horizontally scrollable wrapper for wide content.
 *
 * 18 §100: large tables should scroll "with clear affordance" rather
 * than let columns become unreadably narrow. The caption text is
 * visible only on small screens where scrolling actually applies.
 */
export function ScrollableTable({ children }: { children: ReactNode }) {
  return (
    <div>
      <p className="mb-2 text-caption text-muted-foreground sm:hidden">
        Scroll horizontally to see the full table.
      </p>
      <div className="overflow-x-auto">{children}</div>
    </div>
  )
}
