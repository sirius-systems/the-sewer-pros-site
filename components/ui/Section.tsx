import type { ReactNode } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils/cn'
import { Container, type ContainerWidth } from './Container'
import type { CardImage } from '@/types'

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
  /**
   * Full-bleed artwork behind the whole section.
   *
   * ⚠ IT OVERRIDES `surface`, because the image IS the surface — the
   * same reason `Hero` passes `surface="none"` under its backdrop. A
   * caller's `surface` is left meaningful as the fallback for the day
   * the image is removed, so keep passing it.
   *
   * ⚠ SECTION TEXT GOES WHITE. The scrim below is sized for opaque
   * white and nothing else. Anything inside that sets its own colour —
   * `text-muted-foreground`, `text-accent-secondary` — keeps it and
   * will not have been measured against a photograph, so a caller with
   * such content must override it.
   *
   * ⚠⚠ AN OPAQUE CARD DOES NOT STOP THE INHERITANCE. `bg-surface`
   * sets a background, not a colour, so white text keeps flowing into
   * the card and any element that does not set its own colour
   * disappears. Not hypothetical: the homepage CTA's lead form
   * rendered its `<h2>` white on a white card, invisible, because the
   * fields set their own colour and the heading did not. Give every
   * opaque card inside an image section `text-foreground`.
   *
   * Omit it and this renders exactly as it always has: no wrapper, no
   * image layer, no tint. There is no placeholder state (18 §40-42).
   */
  backgroundImage?: CardImage
  /**
   * How dark the scrim over `backgroundImage` sits.
   *
   * ⚠ THIS DIAL ONLY TURNS ONE WAY. `default` is the measured floor:
   * black/55%, the value proved against pure white at 4.76:1 against a
   * 4.5:1 requirement. `strong` is DARKER, which can only ever add
   * contrast, so it needs no new measurement.
   *
   * There is deliberately no lighter option. A lighter scrim would
   * need the whole measurement redone against every frame on the site,
   * and black/50% already fails at 4.39:1.
   */
  scrim?: 'default' | 'strong'
  children: ReactNode
}

/**
 * Scrim strengths.
 *
 * `strong` exists because the routing band's cards and heading sit over
 * a bright daylight exterior and the owner asked for more separation
 * (2026-09-04). Darker is always safe; see the prop note above.
 */
const SCRIM: Record<'default' | 'strong', string> = {
  default: 'bg-black/55',
  strong: 'bg-black/65',
}

export function Section({
  density,
  surface = 'default',
  width = 'standard',
  as: Tag = 'section',
  labelledBy,
  className,
  backgroundImage,
  scrim = 'default',
  children,
}: SectionProps) {
  const body = (
    <Tag
      aria-labelledby={labelledBy}
      className={cn(
        DENSITY[density],
        SURFACE[backgroundImage !== undefined ? 'none' : surface],
        className,
      )}
    >
      <Container width={width}>{children}</Container>
    </Tag>
  )

  if (backgroundImage === undefined) return body

  /*
    `isolate` keeps the two `-z-10` layers inside this stacking context
    instead of sliding behind the page background, and
    `overflow-hidden` stops a cover-cropped frame widening the
    document. Both copied from `Hero`, for the same two reasons.
  */
  return (
    <div className="relative isolate overflow-hidden text-white">
      {/*
        ⚠ `alt=""`. A backdrop sits behind a heading that already says
        what the section is, so it carries nothing a reader would
        otherwise miss. `CardImage.alt` still holds a real description
        so the asset stays identifiable in source.
      */}
      <Image
        src={backgroundImage.src}
        alt=""
        fill
        sizes="100vw"
        className="absolute inset-0 -z-10 object-cover"
      />

      {/*
        ⚠⚠ THE SCRIM IS LOAD-BEARING, AND IT IS SIZED FOR ANY FRAME,
        NOT FOR TODAY'S.

        Black/55% was measured against PURE WHITE — the brightest
        background any photograph could present — where opaque white
        text gives 4.76:1 against a 4.5:1 floor. That is deliberate:
        sizing it to the current files would let a brighter replacement
        silently break contrast, and nobody re-measures when swapping a
        picture.

        ⚠ 0.26 OF MARGIN. Black/50% gives 4.39:1 and FAILS. Do not
        lighten this, and do not dim section text with an opacity,
        without redoing the measurement.

        ⚠ IT DOES NOT CHANGE ON HOVER. Anything that lifted it under a
        pointer would drop the section's text below AA for as long as
        the pointer sat there.

        Same value as the hero overlay and the image cards, so every
        image treatment on the site agrees.
      */}
      <span
        aria-hidden="true"
        className={cn('absolute inset-0 -z-10', SCRIM[scrim])}
      />

      {body}
    </div>
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
