import Image from 'next/image'
import {
  Section,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import type { MaterialsContent } from '@/types'

/**
 * Pipe materials by era, and the pre-purchase panel that closes it.
 *
 * Governed by docs/18-design-system.md §5.6, §11, §15, §40-42, §47,
 * §48, §106, Appendix A; docs/14-content-specification.md §79;
 * CLAUDE.md §9, §24, §26, §73.
 *
 * ===========================================================================
 * ⚠⚠ THREE PHOTOGRAPHS OF PIPE ARE NOT EVIDENCE ABOUT ANYONE'S PIPE
 * ===========================================================================
 * This is the section's whole risk, and it is why the intro says "era
 * correspondence, not a claim about any particular street or address"
 * BEFORE the first picture. Adding images makes that sentence more
 * necessary, not less: a photograph invites the reader to conclude
 * something about their own line, and nothing here supports that.
 *
 * What the copy may say, and does: which materials were common in which
 * era, and how each tends to fail. What it must never say: that a given
 * address has one of them, when a specific line was laid, how long one
 * will last, or what an inspection WILL find. CLAUDE.md §73 forbids
 * fabricated localisation and no source ties a material to a street.
 *
 * ⚠ NO DAMAGE PORN, NO WARNING COLOURS. 18 §89 rules out urgency
 * visuals and CLAUDE.md §27 rules out alarm. The cards are neutral
 * light surfaces with a photograph and two sentences; the conclusion
 * belongs to the camera, not to the styling.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THE PRE-PURCHASE CONTENT IS NOT HERE ANY MORE
 * ---------------------------------------------------------------------------
 * It spent part of 2026-09-07 as this section's closing panel and now
 * has its own section and its own H2 - see `PrePurchase`, which
 * records why it moved twice. This section ends with the three
 * material cards.
 *
 * ⚠ THE SECTION BELOW MUST NOT SHARE THIS ONE'S SURFACE. This band is
 * `muted` and `PrePurchase` is `default`. Two adjacent sections on one
 * background read as a single section however they are composed, which
 * is exactly what went wrong the first time this content sat below
 * here (18 §11).
 */
export interface PipeMaterialsProps {
  /**
   * Overrides the section's natural density.
   *
   * Appendix A's density system is about VARIATION down a page, so the
   * composing template — which alone knows the full sequence — may need
   * a different value than this section would pick alone (18 §108).
   */
  density?: SectionDensity
  /** Sequence decision, like `density`. See the template. */
  surface?: SectionSurface
  id?: string
  content: MaterialsContent
}

/**
 * Whether this section renders anything.
 *
 * A template listing it in its `densities` array must gate that entry
 * on this predicate, so the array and the composition describe the same
 * page.
 */
export function pipeMaterialsRenders(
  content: MaterialsContent | undefined,
): boolean {
  return content !== undefined && content.items.length > 0
}

export function PipeMaterials({
  density = 'dense',
  surface = 'muted',
  id = 'line-materials',
  content,
}: PipeMaterialsProps) {
  return (
    <Section density={density} surface={surface} labelledBy={id}>
      {/*
        ⚠ THE INTRO IS THE DISCLAIMER AND IT COMES FIRST. It reads "era
        correspondence, not a claim about any particular street or
        address", and it must stay above the cards rather than beneath
        them. See the note at the top of this file.
      */}
      <SectionHeading id={id} title={content.title} intro={content.intro} />

      {/*
        Three material cards. A semantic list of three parallel items.

        Each card is image-then-text in a flex column, so grid stretch
        aligns their bottoms without a fixed height that could clip
        copy. On one column the stretch has nothing to equalise, so
        there is no empty space to remove at mobile.
      */}
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {content.items.map((item) => (
          <li
            key={item.title}
            className="flex flex-col overflow-hidden rounded-md border border-border bg-surface"
          >
            {item.image !== undefined && (
              /*
                ⚠ A 4:3 BOX RESERVED BEFORE THE FILE LOADS. All three
                assets are 2896x2172, exactly 4:3, so `cover` crops
                nothing and the three cards share one image ratio.
                Reserving the box is what keeps the grid from shifting
                as they arrive.

                ⚠ REAL ALT TEXT, NOT `alt=""`. These are content, not
                the card backgrounds used elsewhere on this site: they
                sit ABOVE the heading rather than behind it, and what
                the material looks like is part of what the card says.
              */
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={item.image.src}
                  alt={item.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            )}

            <div className="p-6">
              <h3 className="text-h4 font-semibold tracking-tight text-balance">
                {item.title}
              </h3>
              <p className="mt-2 text-body leading-7 text-muted-foreground">
                {item.description}
              </p>
            </div>
          </li>
        ))}
      </ul>

    </Section>
  )
}
