import Image from 'next/image'
import Link from 'next/link'
import type { SVGProps } from 'react'
import {
  Section,
  ButtonLink,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import { cn } from '@/lib/utils/cn'
import type { PrePurchaseContent } from '@/types'

/**
 * Buying or selling: the pre-purchase inspection section.
 *
 * Governed by docs/18-design-system.md §11, §15, §47, §48, §106,
 * Appendix A; docs/01-business-brand-foundation.md §20, §35;
 * CLAUDE.md §9, §24, §26.
 *
 * ===========================================================================
 * ⚠ ITS OWN SECTION AGAIN, ON OWNER DIRECTION (2026-09-07)
 * ===========================================================================
 * This content has now had three homes in one day, and the history
 * matters because each move was a different judgement:
 *
 *   1  `localFeature` — a standalone `width="reading"` prose block. Too
 *      narrow, and it sat on the same `muted` surface as the materials
 *      section directly above it, so the two ran together as one wall
 *      of text.
 *   2  folded into `PipeMaterials` as a closing panel. That fixed the
 *      width and the adjacency, but it buried a section-level subject
 *      inside another section, under an H3.
 *   3  here: its own section, its own H2, and a surface that differs
 *      from the materials band above it.
 *
 * ⚠ THE SURFACE IS THE POINT OF THE SPLIT. Materials is `muted` and
 * this is `default`. Two sections that share a background read as one
 * section however they are composed, which is what made state 1 fail;
 * 18 §11 wants a surface change to carry meaning, and "we have stopped
 * explaining pipe and started talking about your purchase" is meaning.
 *
 * ---------------------------------------------------------------------------
 * ⚠ WHAT THE COPY MUST NOT BECOME
 * ---------------------------------------------------------------------------
 * The paragraph is approved verbatim and says an inspection "can
 * confirm whether a line is sound, needs cleaning, or shows signs that
 * warrant further evaluation, without pressuring anyone toward repair
 * or replacement". Every clause there is load-bearing:
 *
 *   - "warrant further evaluation", never "needs replacing". The Sewer
 *     Pros does not repair or replace (CLAUDE.md §9).
 *   - no share of housing stock, no age threshold, no failure rate, and
 *     no claim about what an inspection WILL find (01 §35).
 *   - no legal or contractual advice about a transaction.
 */
export interface PrePurchaseProps {
  /**
   * Overrides the section's natural density.
   *
   * Appendix A's density system is about VARIATION down a page, so the
   * composing template — which alone knows the full sequence — may need
   * a different value than this section would pick alone (18 §108).
   */
  density?: SectionDensity
  /**
   * Sequence decision, like `density`.
   *
   * ⚠ IT MUST NOT MATCH THE SECTION ABOVE. See the note at the top of
   * this file: a shared surface is what collapsed this content into the
   * materials band the first time.
   */
  surface?: SectionSurface
  id?: string
  content: PrePurchaseContent
}

/**
 * Whether this section renders anything.
 *
 * A template listing it in its `densities` array must gate that entry
 * on this predicate, so the array and the composition describe the same
 * page.
 */
export function prePurchaseRenders(
  content: PrePurchaseContent | undefined,
): boolean {
  return content !== undefined
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

export function PrePurchase({
  density = 'standard',
  surface = 'default',
  id = 'pre-purchase',
  content,
}: PrePurchaseProps) {
  const primary = resolveApprovedLink(content.primary.pageId, {
    label: content.primary.label,
  })
  const secondary =
    content.secondary !== undefined
      ? resolveApprovedLink(content.secondary.pageId, {
          label: content.secondary.label,
        })
      : undefined
  const resources = content.resources.map((resource) =>
    resolveApprovedLink(resource.pageId, { label: resource.label }),
  )

  return (
    <Section density={density} surface={surface} labelledBy={id}>
      {/*
        ⚠ DOM ORDER IS CONTENT THEN IMAGE, AND THE IMAGE MOVES LEFT ONLY
        AT `lg`. The photograph belongs on the left at desktop; a
        stacked phone must still read heading first. `lg:order-*` gives
        the desktop arrangement without touching source order, which is
        safe here only because the media column holds no interactive
        element - there is no focus order to scramble.

        ⚠ NO CARD WRAPPER, UNLIKE THE PANEL THIS REPLACED. On the
        materials band's `muted` ground the content needed a white card
        to separate from it. On its own `default` section the card would
        be white on white, so the section IS the panel and the content
        sits directly on it.
      */}
      <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:order-2 lg:col-span-7">
          <h2
            id={id}
            className="text-h2 font-semibold tracking-tight text-balance"
          >
            {content.title}
          </h2>
          <p className="mt-4 max-w-prose text-body-lg leading-8 text-muted-foreground">
            {content.body}
          </p>

          {content.points.length > 0 && (
            /*
              ⚠ EVERY POINT IS A CONDENSATION OF THE PARAGRAPH ABOVE IT,
              NOT AN ADDITION TO IT. Each one is traced to its source
              clause in the content file. Real DOM text in a real list;
              the mark beside it is `aria-hidden`.
            */
            <ul className="mt-6 space-y-3">
              {content.points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <DocumentIcon className="mt-1 size-5 shrink-0 text-accent-secondary" />
                  <span className="text-body leading-7 text-muted-foreground">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          )}

          {/*
            One primary action (18 §106). `w-full sm:w-auto` fills the
            column on a phone without stretching across a desktop row.
            Nothing here is nested inside anything else interactive.
          */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <ButtonLink
              href={primary.href}
              variant="primary"
              className="w-full sm:w-auto"
            >
              {primary.label}
            </ButtonLink>
            {secondary !== undefined && (
              /*
                ⚠ BLUE: this navigates to the service page rather than
                converting. Green stays on the schedule action beside
                it (DEC-096).
              */
              <ButtonLink
                href={secondary.href}
                variant="accent"
                className="w-full sm:w-auto"
              >
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </div>

        {content.image !== undefined && (
          <div className="lg:order-1 lg:col-span-5">
            {/*
              `cover` on a 4:3 box the asset already matches, so the
              crop is a no-op that stays safe if a replacement frame is
              not. Reserving the box before the file loads is what keeps
              the section from shifting.
            */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border bg-surface-muted">
              <Image
                src={content.image.src}
                alt={content.image.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>

      {resources.length > 0 && (
        /*
          The related guides.

          ⚠ THE CARD IS THE LINK, SO THERE IS NOTHING TO NEST. One
          anchor per card, its whole surface, with the arrow marked
          `aria-hidden` because the label already names the destination
          (18 §47, §48). No non-link space inside a card pretends to be
          clickable.

          `bg-surface-muted` because this section is `default`: the
          cards need to read as raised off the ground, and on a white
          section a white card would not.
        */
        <div className="mt-12 border-t border-border pt-8">
          <h3 className="text-caption font-semibold tracking-wide text-muted-foreground uppercase">
            {content.resourcesTitle}
          </h3>
          <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
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
    </Section>
  )
}
