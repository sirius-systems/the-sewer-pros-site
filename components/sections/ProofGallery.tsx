import Image from 'next/image'
import { Section, type SectionDensity } from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { proofImages } from '@/data/business/proof'

/**
 * Results gallery.
 *
 * Governed by docs/18-design-system.md §28-34 (photography), §31
 * (sewer camera imagery), §57, §120;
 * docs/02-nextjs-technical-architecture.md §7, §8;
 * CLAUDE.md §57, §76.
 *
 * ===========================================================================
 * RENDERS NOTHING TODAY, BY DESIGN
 * ===========================================================================
 * `proofImages` is empty because no approved photography exists. This
 * section returns null and the page composition closes around it.
 * That is the intended state, not an unfinished one.
 *
 * GATE: approved photography under 18 §28-34. §34 rules out
 * unrealistic AI imagery and staged stock, so the gate does not open
 * by generating something.
 *
 * When assets arrive, 18 §31 describes the strongest form this can
 * take, and it is not a generic four-photo strip: one real inspection
 * frame paired with a plain-language explanation of one condition
 * (root intrusion, offset joint, buildup, standing water), labelled as
 * example footage. §31 calls that module ownable to The Sewer Pros.
 * Prefer it.
 *
 * Accepts no image props. Everything comes from the governed module,
 * where `source` is required — see `data/business/proof.ts`.
 *
 * `next/image` is safe here: `images.unoptimized` is set in
 * next.config.ts because `output: 'export'` provides no optimizer
 * (02 §7, §8). Assets must therefore be pre-optimized at authoring
 * time. Note `priority` is deprecated in Next 16 in favour of
 * `preload`; neither is used here.
 */
export interface ProofGalleryProps {
  /**
   * Overrides the section's natural density.
   *
   * Appendix A's density system is about VARIATION down a page, so the
   * composing template — which alone knows the full sequence — may need
   * a different value than this section would pick alone (18 §108).
   */
  density?: SectionDensity
  id?: string
  title: string
  intro?: string
}

export function ProofGallery({
  density = 'standard',
  id = 'recent-work',
  title,
  intro,
}: ProofGalleryProps) {
  // 18 §120 — omit the section entirely rather than render an empty shell.
  if (proofImages.length === 0) return null

  return (
    <Section density={density} labelledBy={id}>
      <SectionHeading id={id} title={title} intro={intro} />

      {/*
        Image grid at a consistent crop, no card chrome. This is the
        one image-led section in the system, which is part of how the
        page avoids reading as a run of card grids (18 §5.6).

        Columns follow the image count rather than assuming the
        composition's four. The array is empty today, so this is
        hardening against a future population rather than a live fix —
        but a hardcoded four would orphan cells the moment three or
        five approved frames arrive, which is the same bug found in the
        process band and the related strip.
      */}
      <ul
        className={`mt-10 grid gap-6 sm:grid-cols-2 ${
          proofImages.length % 4 === 0
            ? 'lg:grid-cols-4'
            : proofImages.length % 3 === 0
              ? 'lg:grid-cols-3'
              : 'lg:grid-cols-2'
        }`}
      >
        {proofImages.map((image) => (
          <li key={image.src}>
            <Image
              src={image.src}
              alt={image.alt}
              width={640}
              height={480}
              className="aspect-[4/3] w-full rounded-md border border-border object-cover"
            />
            <p className="mt-2 text-caption leading-5 text-muted-foreground">
              {image.caption}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
