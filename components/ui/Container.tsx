import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'

/**
 * Container widths — docs/18-design-system.md §21, §22, §17, §102.
 *
 *   standard — navigation, services, cards, market grids
 *   reading  — articles, FAQs, long explanations. Holds the ~65-80
 *              character measure 18 §17 targets; 18 §102 forbids
 *              stretching paragraph text across the full screen.
 *   wide     — image-led sections, comparison tables, larger grids
 *   full     — deliberate full-bleed, e.g. Appendix A's "image break"
 */
export type ContainerWidth = 'standard' | 'reading' | 'wide' | 'full'

const WIDTH: Record<ContainerWidth, string> = {
  standard: 'max-w-[var(--container-max)]',
  reading: 'max-w-[var(--container-reading)]',
  wide: 'max-w-[var(--container-wide)]',
  full: 'max-w-none',
}

export interface ContainerProps {
  width?: ContainerWidth
  className?: string
  children: ReactNode
}

/**
 * Centred, padded content container.
 *
 * Gutters stay on `full` so full-bleed backgrounds still keep their
 * text off the viewport edge.
 */
export function Container({
  width = 'standard',
  className,
  children,
}: ContainerProps) {
  return (
    <div className={cn('mx-auto w-full px-4 sm:px-6', WIDTH[width], className)}>
      {children}
    </div>
  )
}
