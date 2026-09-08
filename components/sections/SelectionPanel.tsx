import { Section, ButtonLink, type SectionSurface } from '@/components/ui'
import { SECTION_ICONS } from './section-icons'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import type { SelectionPanelContent } from '@/types'

/**
 * A compact "not sure where to start?" panel: copy left, one action
 * right, inside a single contained card.
 *
 * Governed by docs/17-conversion-architecture.md; docs/18-design-system.md
 * §5.6, §11, §62, §106; CLAUDE.md §24, §42, §43.
 *
 * ===========================================================================
 * ⚠ IT CARRIES NO FORM, AND THAT IS THE WHOLE DESIGN
 * ===========================================================================
 * The page already ends on a lead form. A second form here would be two
 * places to submit the same enquiry, which splits the conversion rather
 * than strengthening it and gives the page two sets of field ids to keep
 * unique. This panel points AT that form instead: it is a signpost
 * placed where a reader has just finished scanning the service cards and
 * may not have recognised their own situation in any of them.
 *
 * ⚠ NO PHOTOGRAPH. It sits directly under a nine-card image mosaic; a
 * tenth picture here would read as a continuation of the grid rather
 * than as the break in it that the panel is for.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THE COPY MAY NOT PROMISE A DIAGNOSIS
 * ---------------------------------------------------------------------------
 * "We can help identify an appropriate starting point" is the strongest
 * statement available here. CLAUDE.md §24 forbids guaranteeing that a
 * cause will be established, and this is the section most tempted by it:
 * it speaks to someone who has a symptom and no idea which service
 * answers it.
 *
 * ⚠ NO URGENCY, NO OFFER. §43 puts fear, artificial scarcity and
 * discounts outside the conversion model; the ask is to describe the
 * problem, which is the same ask the closing form makes.
 */
export interface SelectionPanelProps {
  content: SelectionPanelContent
  id?: string
  /** Overrides the section's natural surface. */
  surface?: SectionSurface
}

/** Whether the section has anything to render. */
export function selectionPanelRenders(
  content: SelectionPanelContent | undefined,
): content is SelectionPanelContent {
  return content !== undefined
}

export function SelectionPanel({
  content,
  id = 'which-service',
  surface = 'default',
}: SelectionPanelProps) {
  const Icon = SECTION_ICONS[content.icon]
  const secondary =
    content.secondaryLink !== undefined
      ? resolveApprovedLink(content.secondaryLink.pageId, {
          label: content.secondaryLink.label,
        })
      : undefined

  return (
    /*
      ⚠ `dense`, BECAUSE THE PANEL IS ONE CARD RATHER THAN A BAND OF
      CONTENT. Appendix A's `standard` would pad a three-line panel out
      to the height of an explanatory section and leave it floating
      between the mosaic above and the process band below.
    */
    <Section density="dense" surface={surface} labelledBy={id}>
      {/*
        ⚠ ONE CONTAINED CARD ON A PALE BLUE GROUND, not a full-bleed
        band. `bg-surface-muted` is the existing subtle surface and the
        border is the existing neutral token; nothing here introduces a
        colour.

        ⚠ COPY LEFT, ACTION RIGHT, AND ONE COLUMN BELOW `lg`. The action
        column does not stretch: `lg:items-center` keeps the button
        beside the middle of the copy rather than pinned to its top.
      */}
      <div className="grid gap-6 rounded-md border border-border bg-surface-muted p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-10">
        <div className="flex gap-4">
          {/*
            ⚠ ONE ICON, AND IT IS DECORATIVE. `SECTION_ICONS` sets
            `aria-hidden`; the eyebrow and heading beside it say what
            the panel is. Blue rather than green: this is orientation,
            and the palette keeps green for the conversion action, which
            is the button.
          */}
          <span
            aria-hidden="true"
            className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-sm bg-accent-secondary text-white"
          >
            <Icon className="h-5 w-5" />
          </span>
          <div>
            {content.eyebrow !== undefined && (
              <p className="text-caption font-semibold tracking-wide text-accent-secondary uppercase">
                {content.eyebrow}
              </p>
            )}
            <h2 id={id} className="mt-2 text-h3 text-foreground">
              {content.title}
            </h2>
            <p className="mt-3 max-w-[46rem] text-body text-muted-foreground">
              {content.body}
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 lg:items-end">
          <ButtonLink href={content.action.href}>
            {content.action.label}
          </ButtonLink>
          {secondary !== undefined && (
            /*
              ⚠ A TEXT LINK, NOT A SECOND BUTTON. Two buttons here would
              be two competing asks in a panel whose job is to send one
              reader to one place (18 §62).
            */
            <a
              href={secondary.href}
              className="rounded-sm text-body-sm font-semibold text-accent-secondary underline underline-offset-4 hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-secondary"
            >
              {secondary.label}
            </a>
          )}
        </div>
      </div>
    </Section>
  )
}
