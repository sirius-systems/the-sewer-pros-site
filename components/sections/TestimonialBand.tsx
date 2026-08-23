import { Section, type SectionDensity } from '@/components/ui'
import { testimonials } from '@/data/business/proof'

/**
 * Customer testimonial.
 *
 * Governed by docs/18-design-system.md §69-70, §120 and Appendix A
 * ("Testimonial feature"); docs/01-business-brand-foundation.md §35;
 * CLAUDE.md §77.
 *
 * ===========================================================================
 * RENDERS NOTHING TODAY, BY DESIGN
 * ===========================================================================
 * The reference composition specifies "one editable placeholder
 * testimonial" on every page type. This project cannot ship that.
 *
 * CLAUDE.md §77 forbids inventing testimonials, merging customer
 * reviews, reassigning their market context, or changing their
 * meaning. A placeholder quote on a public page is an invented one, and
 * "editable" does not change what it is while it sits there.
 *
 * GATE: verified review data with attribution and source (18 §69-70,
 * 01 §35).
 *
 * Accepts no quote props. The only way to populate this is through
 * `data/business/proof.ts`, where `source` is required — see that
 * file's header for why that requirement is the safeguard rather than
 * paperwork.
 *
 * Appendix A's "testimonial feature" shape: one quote given real
 * visual weight, rather than a proof wall of many short quotes. With a
 * single verified review that is also the only honest option.
 */
export interface TestimonialBandProps {
  /**
   * Overrides the section's natural density.
   *
   * Appendix A's density system is about VARIATION down a page, so the
   * composing template — which alone knows the full sequence — may need
   * a different value than this section would pick alone (18 §108).
   */
  density?: SectionDensity
  id?: string
}

export function TestimonialBand({
  density = 'dense',
  id = 'testimonial',
}: TestimonialBandProps) {
  const [testimonial] = testimonials

  // 18 §120 — omit the section entirely rather than render an empty shell.
  if (testimonial === undefined) return null

  return (
    <Section density={density} surface="muted" labelledBy={id}>
      <figure className="max-w-[var(--container-reading)]">
        <blockquote
          id={id}
          className="text-h3 font-medium tracking-tight text-balance text-foreground"
        >
          {testimonial.quote}
        </blockquote>
        {/*
          Attribution is a first name or initial (18 §69-70). No star
          graphic: no rating data is verified, and 01 §35 lists ratings
          among the claims requiring documented evidence.
        */}
        <figcaption className="mt-4 text-sm text-muted-foreground">
          {testimonial.attribution}
        </figcaption>
      </figure>
    </Section>
  )
}
