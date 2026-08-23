import { Section, ButtonLink, type SectionDensity } from '@/components/ui'
import { PRIMARY_CTA } from '@/components/layout/cta'
import { authorityProofPoints } from '@/data/business/authority'

/**
 * Authority band — the page's single dark section.
 *
 * Governed by docs/18-design-system.md §11, §63, §64, §71, §108;
 * CLAUDE.md §23, §32, §71.
 *
 * The reference composition places a "deep brand-color or charcoal
 * band" carrying four proof points on every page type.
 *
 * ===========================================================================
 * ONE PER PAGE, NEVER ADJACENT TO ANOTHER DARK SECTION
 * ===========================================================================
 * The reference style's own anti-patterns list says "don't stack two
 * dark sections back to back", and 18 §11 warns against alternating
 * background colours for decoration — surfaces carry meaning, rhythm
 * comes from density.
 *
 * The final `CtaSection variant="panel"` is the only other brand
 * surface in the system, so every template map must keep at least one
 * non-brand section between the two. Check this when composing, not
 * after.
 *
 * ---------------------------------------------------------------------------
 * COPY IS NOT A PROP
 * ---------------------------------------------------------------------------
 * Proof points come from `authorityProofPoints`, where each item cites
 * the document establishing it as fact. Ad-hoc strings are deliberately
 * not accepted — that is the route by which an unverifiable claim
 * reaches the page. `TrustBar` takes the same position for the same
 * reason.
 *
 * The band renders nothing below three points rather than padding the
 * grid, so deleting an item that cannot be sourced is always safe.
 *
 * The heading and intro ARE props, because they frame the section for
 * its page and carry no factual claim of their own.
 */
export interface AuthorityBandProps {
  /**
   * Overrides the section's natural density.
   *
   * Appendix A's density system is about VARIATION down a page, so the
   * composing template — which alone knows the full sequence — may need
   * a different value than this section would pick alone (18 §108).
   */
  density?: SectionDensity
  id?: string
  eyebrow?: string
  title: string
  intro?: string
  /**
   * Pass `null` to omit the CTA where the page already converts nearby.
   *
   * 18 §62 warns against making every CTA visually identical, and
   * Appendix B flags "a CTA appearing after every section rather than
   * at moments of rising intent".
   */
  action?: { href: string; label: string } | null
}

export function AuthorityBand({
  density = 'standard',
  id = 'why-the-sewer-pros',
  eyebrow,
  title,
  intro,
  action = PRIMARY_CTA,
}: AuthorityBandProps) {
  if (authorityProofPoints.length < 3) return null

  return (
    <Section density={density} surface="brand" labelledBy={id}>
      {eyebrow !== undefined && (
        <p className="text-caption font-semibold tracking-wide uppercase opacity-70">
          {eyebrow}
        </p>
      )}

      <h2
        id={id}
        className={`max-w-2xl text-h2 font-semibold tracking-tight text-balance${
          eyebrow !== undefined ? ' mt-3' : ''
        }`}
      >
        {title}
      </h2>

      {intro !== undefined && (
        <p className="mt-4 max-w-[var(--container-reading)] text-body-lg opacity-90">
          {intro}
        </p>
      )}

      {/*
        Columns follow the point count rather than assuming four.

        The guard above permits three, and `authority.ts` states that
        deleting a point that cannot be sourced is always safe — so
        three is a reachable, documented state, and three points in a
        fixed two-column grid would orphan a cell. 18 §5.6 prohibits
        forcing a count into a grid it does not divide into.
      */}
      <ul
        className={`mt-10 grid gap-8 ${
          authorityProofPoints.length % 2 === 0
            ? 'sm:grid-cols-2'
            : 'sm:grid-cols-3'
        }`}
      >
        {authorityProofPoints.map((point) => (
          <li key={point.label}>
            <h3 className="text-base font-medium">{point.label}</h3>
            <p className="mt-1 text-sm leading-6 opacity-80">{point.detail}</p>
          </li>
        ))}
      </ul>

      {action !== null && (
        <div className="mt-10">
          {/*
            `secondary` renders as a light button, which is the legible
            choice on the brand surface. `primary` would put the accent
            colour against the brand colour, and those two are too close
            in value to carry a button.
          */}
          <ButtonLink href={action.href} variant="secondary">
            {action.label}
          </ButtonLink>
        </div>
      )}
    </Section>
  )
}
