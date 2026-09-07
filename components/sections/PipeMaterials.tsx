import Image from 'next/image'
import Link from 'next/link'
import type { SVGProps } from 'react'
import {
  Section,
  ButtonLink,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import { cn } from '@/lib/utils/cn'
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
 * ⚠ THE PRE-PURCHASE PANEL LIVES HERE RATHER THAN IN ITS OWN SECTION
 * ---------------------------------------------------------------------------
 * Owner direction, 2026-09-07. It used to render as a standalone
 * `width="reading"` prose block immediately below this one - two narrow
 * text sections in a row, the second repeating the first's premise. As
 * a closing panel it reads as the conclusion the materials argument was
 * already making: you cannot tell from the era, so look.
 *
 * ⚠ ITS COPY IS UNCHANGED AND SO ARE ITS THREE RESOURCE LINKS. They
 * resolve by PAGE ID through the approved-link layer with their
 * existing labels, so a gated resource fails at the resolver rather
 * than shipping a dead link, and the wording a reader recognises does
 * not quietly change with a registry rename.
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

type IconProps = SVGProps<SVGSVGElement>

/**
 * The benefit mark.
 *
 * ⚠ `aria-hidden` beside text that states the same thing (18 §96), and
 * a document rather than a tick: each point is about what the visitor
 * ends up holding, which is a record.
 */
function DocumentIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M14 3H6.5v18h11V6.5Z" />
      <path d="M14 3v3.5h3.5M9 12h6M9 16h4" />
    </svg>
  )
}

export function PipeMaterials({
  density = 'dense',
  surface = 'muted',
  id = 'line-materials',
  content,
}: PipeMaterialsProps) {
  const { prePurchase } = content
  const primary = resolveApprovedLink(prePurchase.primary.pageId, {
    label: prePurchase.primary.label,
  })
  const secondary =
    prePurchase.secondary !== undefined
      ? resolveApprovedLink(prePurchase.secondary.pageId, {
          label: prePurchase.secondary.label,
        })
      : undefined
  const resources = prePurchase.resources.map((resource) =>
    resolveApprovedLink(resource.pageId, { label: resource.label }),
  )

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

      {/*
        ==================================================================
        THE PRE-PURCHASE PANEL. The conclusion, not a fifth topic.
        ==================================================================
        ⚠ DOM ORDER IS CONTENT THEN IMAGE, AND THE IMAGE MOVES LEFT ONLY
        AT `lg`. The owner asked for the photograph on the left
        (2026-09-07); a stacked phone must still read heading first.
        `lg:order-*` gives the desktop arrangement without touching
        source order, and it is safe here because the media column holds
        no interactive element.
      */}
      <div className="mt-14 rounded-md border border-border bg-surface p-6 sm:p-8">
        <div className="grid gap-x-10 gap-y-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:order-2 lg:col-span-7">
            <h3 className="text-h3 font-semibold tracking-tight text-balance">
              {prePurchase.title}
            </h3>
            <p className="mt-4 max-w-prose text-body leading-7 text-muted-foreground">
              {prePurchase.body}
            </p>

            {prePurchase.points.length > 0 && (
              /*
                ⚠ EVERY POINT IS A CONDENSATION OF THE PARAGRAPH ABOVE
                IT, NOT A NEW CLAIM. Each one is traced to its source
                sentence in the content file. Real DOM text in a real
                list; the mark beside it is `aria-hidden`.
              */
              <ul className="mt-6 space-y-3">
                {prePurchase.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <DocumentIcon className="mt-1 size-5 shrink-0 text-accent-secondary" />
                    <span className="text-body leading-7 text-muted-foreground">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ButtonLink
                href={primary.href}
                variant="primary"
                className="w-full sm:w-auto"
              >
                {primary.label}
              </ButtonLink>
              {secondary !== undefined && (
                <ButtonLink
                  href={secondary.href}
                  variant="secondary"
                  className="w-full sm:w-auto"
                >
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
          </div>

          {prePurchase.image !== undefined && (
            <div className="lg:order-1 lg:col-span-5">
              {/*
                `cover` here, unlike the responsibility diagram: this is
                a photograph, and the asset is already 4:3, so the crop
                is a no-op that stays safe if a replacement frame is not.
              */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border bg-surface-muted">
                <Image
                  src={prePurchase.image.src}
                  alt={prePurchase.image.alt}
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {resources.length > 0 && (
          /*
            The related guides, as their own group inside the panel.

            ⚠ THE CARD IS THE LINK, SO THERE IS NOTHING TO NEST. One
            anchor per card, its whole surface, with the arrow marked
            `aria-hidden` because the label already names the
            destination (18 §47, §48). No non-link space inside a card
            pretends to be clickable.
          */
          <div className="mt-10 border-t border-border pt-8">
            <h4 className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
              {prePurchase.resourcesTitle}
            </h4>
            <ul className="mt-4 grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {resources.map((resource) => (
                <li key={resource.pageId}>
                  <Link
                    href={resource.href}
                    className={cn(
                      'group flex h-full items-start justify-between gap-3 rounded-md border border-border bg-surface-muted p-4',
                      'text-body leading-7 text-foreground transition-colors',
                      'hover:border-foreground/30 hover:text-accent-secondary',
                    )}
                  >
                    <span>{resource.label}</span>
                    <span
                      aria-hidden="true"
                      className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5"
                    >
                      →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </Section>
  )
}
