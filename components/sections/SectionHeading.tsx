import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

/**
 * Section heading block.
 *
 * Governed by docs/18-design-system.md §15, §5.6, §75.
 *
 * ⚠ Left-aligned, no centring option. 18 §5.6: "Centered composition is
 * the exception, not the default — reserve it for short, deliberate
 * statements (a hero headline, a pull quote)." A section heading with
 * an intro paragraph is not that case, and §155 lists centred
 * paragraph text as a failure condition.
 *
 * `level` is explicit so headings follow the page outline rather than
 * being chosen for size (18 §15: "Do not use heading size solely for
 * visual styling. Semantic hierarchy must remain meaningful.").
 */
export interface SectionHeadingProps {
  /** Short label above the title. Use sparingly. */
  eyebrow?: string
  title: string
  /** Ties the section's `aria-labelledby` to this heading. */
  id?: string
  level?: 'h1' | 'h2' | 'h3'
  intro?: ReactNode
  className?: string
}

const SIZE = {
  h1: 'text-h1',
  h2: 'text-h2',
  h3: 'text-h3',
} as const

export function SectionHeading({
  eyebrow,
  title,
  id,
  level: Heading = 'h2',
  intro,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-[var(--container-reading)]', className)}>
      {eyebrow !== undefined && (
        <p className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
          {eyebrow}
        </p>
      )}

      <Heading
        id={id}
        className={cn(
          SIZE[Heading],
          'font-semibold tracking-tight text-balance',
          eyebrow !== undefined && 'mt-3',
        )}
      >
        {title}
      </Heading>

      {intro !== undefined && (
        <div className="mt-4 text-body-lg text-muted-foreground [&>*+*]:mt-4">
          {intro}
        </div>
      )}
    </div>
  )
}
