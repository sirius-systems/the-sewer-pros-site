import type { ReactNode } from 'react'
import { cn } from '@/lib/utils/cn'
import { Container, type ContainerWidth } from './Container'

/**
 * Page section — the density and surface primitive.
 *
 * Governed by docs/18-design-system.md §11, §20, §108, §155 and
 * Appendix A ("Density system").
 *
 * ===========================================================================
 * DENSITY IS A REQUIRED CHOICE, NOT A DEFAULT
 * ===========================================================================
 * Appendix A: "Every section gets one of three densities, and the point
 * is variation down the page."
 *
 * 18 §108 and §155 both name flat density as a failure: a page where
 * every section shares the same weight "reads as flat and templated
 * even if the page-family structure is correct." Appendix B checks the
 * rendered page for exactly this.
 *
 * `density` therefore has no default. Composing a page forces a
 * deliberate choice per section, and `assertSectionRhythm()` below can
 * check a page's sequence before it ships.
 *
 *   sparse   — hero, major positioning statements, final CTA
 *   standard — explanatory content, services, process
 *   dense    — comparisons, specifications, FAQs
 */
export type SectionDensity = 'sparse' | 'standard' | 'dense'

/**
 * Section background — 18 §11.
 *
 * "Avoid alternating background colors on every section simply for
 * decoration." Four surfaces, used for meaning rather than rhythm;
 * rhythm comes from density.
 */
export type SectionSurface = 'default' | 'muted' | 'brand' | 'none'

const DENSITY: Record<SectionDensity, string> = {
  sparse: 'py-[var(--space-section-sparse)]',
  standard: 'py-[var(--space-section-standard)]',
  dense: 'py-[var(--space-section-dense)]',
}

const SURFACE: Record<SectionSurface, string> = {
  default: 'bg-background text-foreground',
  muted: 'bg-surface-muted text-foreground',
  brand: 'bg-brand text-brand-foreground',
  none: '',
}

export interface SectionProps {
  /** Required — see the density note above. */
  density: SectionDensity
  surface?: SectionSurface
  width?: ContainerWidth
  /** Renders as `<section>` by default; pass an element for landmarks. */
  as?: 'section' | 'div' | 'article' | 'aside'
  /** Associates the section with its heading for assistive technology. */
  labelledBy?: string
  className?: string
  children: ReactNode
}

export function Section({
  density,
  surface = 'default',
  width = 'standard',
  as: Tag = 'section',
  labelledBy,
  className,
  children,
}: SectionProps) {
  return (
    <Tag
      aria-labelledby={labelledBy}
      className={cn(DENSITY[density], SURFACE[surface], className)}
    >
      <Container width={width}>{children}</Container>
    </Tag>
  )
}

/* ==========================================================================
   Rhythm check — 18 §108, §155, Appendix B
   ========================================================================== */

/**
 * Reports rhythm problems in a page's section densities.
 *
 * Encodes two of Appendix B's rendered-page checks as something a
 * template can assert against, rather than leaving them to review:
 *
 *   - every section the same density (no rhythm at all)
 *   - four or more consecutive sections at one density
 *
 * Returns human-readable findings. Appendix B asks for findings
 * "as fixes to make, not a score", so this deliberately returns
 * messages rather than a number, and does not throw — density is a
 * design judgement, and a build failure would be the wrong instrument.
 */
export function sectionRhythmIssues(
  densities: readonly SectionDensity[],
): string[] {
  const issues: string[] = []
  if (densities.length < 3) return issues

  if (new Set(densities).size === 1) {
    issues.push(
      `All ${densities.length} sections use "${densities[0]}" density. ` +
        `18 §155: a page with no density variation reads as templated. ` +
        `Vary it so one moment reads as the strongest (Appendix A).`,
    )
  }

  let run = 1
  for (let i = 1; i < densities.length; i += 1) {
    run = densities[i] === densities[i - 1] ? run + 1 : 1
    if (run === 4) {
      issues.push(
        `Sections ${i - 2}-${i + 1} all use "${densities[i]}" density. ` +
          `Break the run with a contrasting section (Appendix A).`,
      )
    }
  }

  return issues
}
