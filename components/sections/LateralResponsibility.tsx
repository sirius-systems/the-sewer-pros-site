import Image from 'next/image'
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
import type { ResponsibilityContent, ResponsibilityIcon } from '@/types'

/**
 * Who is responsible for the sewer lateral.
 *
 * Governed by docs/18-design-system.md §5.6, §8, §11, §15, §96, §106,
 * Appendix A; docs/01-business-brand-foundation.md §20, §35;
 * CLAUDE.md §9, §24, §26.
 *
 * ===========================================================================
 * ⚠⚠ THE COPY IN THIS SECTION IS A STATEMENT ABOUT MUNICIPAL RULES
 * ===========================================================================
 * That makes it the highest-risk text on the St. Louis hub. The
 * component renders what the content file says and adds nothing, and
 * the three things it must never be edited into saying are:
 *
 *   - that one programme's terms apply anywhere else. Fees, caps,
 *     coverage boundaries and exclusions differ by municipality, and
 *     the City of St. Charles is outside MSD's territory entirely.
 *   - that a property is eligible, or that a claim will be reimbursed.
 *     Neither is a fact this project holds for any address.
 *   - that The Sewer Pros repairs or replaces anything. It inspects,
 *     documents, locates and cleans (CLAUDE.md §9).
 *
 * The action panel exists precisely because the answer is
 * address-specific: it sends the visitor to read their own
 * municipality's terms or to ask, rather than answering for them.
 *
 * ---------------------------------------------------------------------------
 * ⚠ THE DIAGRAM IS CONTENT, NOT DECORATION
 * ---------------------------------------------------------------------------
 * It carries real alt text and sits in its own media panel with nothing
 * written over it. `object-contain` inside a fixed 4:3 box, because a
 * cropped diagram is a wrong diagram - `cover` would cut labels off the
 * edges. The panel's pale ground is what keeps a transparent SVG
 * legible.
 *
 * ⚠ THE SECTION STILL READS WITHOUT IT. The heading, the intro and the
 * three cards carry the whole explanation; the diagram illustrates it.
 * A market with no diagram omits the field and the copy runs full
 * width, which is a finished state rather than a gap (18 §40-42, §120).
 */
export interface LateralResponsibilityProps {
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
  content: ResponsibilityContent
}

/**
 * Whether this section renders anything.
 *
 * A template listing it in its `densities` array must gate that entry
 * on this predicate, so the array and the composition describe the same
 * page.
 */
export function lateralResponsibilityRenders(
  content: ResponsibilityContent | undefined,
): boolean {
  return content !== undefined && content.items.length > 0
}

/* ==========================================================================
   Icons — 18 §96, CLAUDE.md §39
   ========================================================================== */

type IconProps = SVGProps<SVGSVGElement>

/**
 * ⚠ EVERY MARK IS `aria-hidden` BESIDE A HEADING THAT STATES THE SAME
 * THING. 18 §96 allows an icon on that condition and no other. Line
 * weight matches `TrustBar` so the site's icons read as one family, and
 * none of them is a warning triangle: 18 §89 rules out alarm visuals,
 * and municipal variation is a thing to check, not a hazard.
 */
function baseIconProps(props: IconProps): IconProps {
  return {
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
    ...props,
  }
}

/** The public main and the private line that joins it. */
function UtilityIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M3 18h18" />
      <path d="M12 18V9a2 2 0 0 1 2-2h2" />
      <path d="M5 6h6v4H5Z" />
    </svg>
  )
}

/** What a programme asks for — a page with lines. */
function DocumentIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M14 3H6.5v18h11V6.5Z" />
      <path d="M14 3v3.5h3.5M9 12h6M9 16h4" />
    </svg>
  )
}

/** Terms differ by municipality — a folded map. */
function VariationIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2Z" />
      <path d="M9 4v14M15 6v14" />
    </svg>
  )
}

const ICONS: Record<
  ResponsibilityIcon,
  (props: IconProps) => React.JSX.Element
> = {
  utility: UtilityIcon,
  document: DocumentIcon,
  variation: VariationIcon,
}

/**
 * ⚠ AMBER IS `--warning`, AN APPROVED SEMANTIC-STATE TOKEN (18 §8), NOT
 * A NEW COLOUR. `Callout` already spends it the same way, as
 * `border-l-warning` on its "Important" kind: a border and a mark, never
 * a filled alarm panel.
 *
 * It measures 5.02:1 on white, so it is safe as a mark as well as a
 * rule, and it is deliberately the DARK amber rather than
 * `--rating-gold`, which is decorative only and fails as text.
 *
 * ⚠ IT MEANS "CHECK YOURS", NOT "DANGER". The card it marks says terms
 * differ between municipalities. 18 §89 rules out urgency visuals and
 * CLAUDE.md §27 rules out alarm; one restrained rule on the card that
 * says "this varies" is the whole treatment.
 *
 * ⚠ NO GREEN HERE. DEC-096 reserves `--accent` for conversion, and the
 * only green in this section is the primary button in the action panel.
 */
const ACCENT: Record<'blue' | 'amber', { bar: string; icon: string }> = {
  blue: { bar: 'bg-accent-secondary', icon: 'text-accent-secondary' },
  amber: { bar: 'bg-warning', icon: 'text-warning' },
}

export function LateralResponsibility({
  density = 'standard',
  surface = 'default',
  id = 'lateral-responsibility',
  content,
}: LateralResponsibilityProps) {
  const guide = resolveApprovedLink(content.action.guide.pageId, {
    label: content.action.guide.label,
  })
  const contact = resolveApprovedLink(content.action.contact.pageId, {
    label: content.action.contact.label,
  })

  return (
    <Section density={density} surface={surface} labelledBy={id}>
      {/*
        ⚠ DOM ORDER IS HEADING THEN DIAGRAM; THE DIAGRAM MOVES LEFT ONLY
        AT `lg`. The owner asked for the diagram on the left and the
        heading on the right (2026-09-07), but a stacked phone must read
        heading first. `lg:order-*` gives the desktop arrangement
        without touching source order, so the mobile reading order and
        the accessibility tree both stay heading-first.

        Reordering is safe here specifically because the media column
        holds NO interactive element - there is no focus order to
        scramble.
      */}
      <div className="grid gap-x-12 gap-y-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:order-2 lg:col-span-7">
          <SectionHeading id={id} title={content.title} intro={content.intro} />
        </div>

        {content.diagram !== undefined && (
          <div className="lg:order-1 lg:col-span-5">
            {/*
              ⚠ `object-contain`, NOT `cover`. A cropped diagram is a
              wrong diagram: `cover` would cut the labels off its edges.
              The 4:3 box matches the asset's own 1600x1200 viewBox, so
              nothing letterboxes, and reserving that box before the
              file loads is what keeps the section from shifting.

              The pale ground is what a transparent SVG needs to stay
              legible; it is also why this panel is `surface-muted`
              rather than white on a white section.
            */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md border border-border bg-surface-muted">
              <Image
                src={content.diagram.src}
                alt={content.diagram.alt}
                fill
                sizes="(min-width: 1024px) 40vw, 100vw"
                className="object-contain p-3"
              />
            </div>
          </div>
        )}
      </div>

      {/*
        The three cards. A semantic list, because it is one: three
        parallel statements about the same question (18 §5.6).

        Gutter steps 16 / 20 / 24px on owner direction, at `sm` rather
        than `md` so it changes on the same breakpoint the columns do.
        Grid items stretch, so the cards share the tallest card's height
        without a fixed height that could clip copy.
      */}
      <ul className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
        {content.items.map((item) => {
          const Icon = ICONS[item.icon]
          const accent = ACCENT[item.accent]

          return (
            <li
              key={item.title}
              /*
                `overflow-hidden` so the painted accent bar is clipped by
                the card's own radius instead of squaring off its
                corners. Same card language as the experience section's
                proof row - 18 §155 counts competing card styles on one
                page as a failure.
              */
              className="relative overflow-hidden rounded-md border border-border bg-surface p-6 pt-7 sm:p-7 sm:pt-8"
            >
              <span
                aria-hidden="true"
                className={cn('absolute inset-x-0 top-0 h-1', accent.bar)}
              />
              <Icon className={cn('size-8', accent.icon)} />
              <h3 className="mt-4 text-h4 font-semibold tracking-tight text-balance">
                {item.title}
              </h3>
              <p className="mt-2 max-w-prose text-body leading-7 text-muted-foreground">
                {item.description}
              </p>
            </li>
          )
        })}
      </ul>

      {/*
        The action panel.

        ⚠ IT IS THE SECTION'S POINT, NOT AN APPENDAGE. Everything above
        establishes that the answer depends on the municipality and the
        address; this is where the visitor is sent to find THEIR answer
        rather than being given someone else's. Removing it would leave
        three cards that raise a question and answer none of it.

        Same tinted treatment as the experience section's conversion
        panel, for the same reason: one conversion surface on the page.
        Body copy takes `--foreground` rather than `--muted-foreground`
        because the tint eats the muted tone's contrast margin - the
        measurement is recorded on `ExperienceSection`'s `tone` prop.
      */}
      <div className="mt-12 rounded-md border border-accent-secondary/20 bg-accent-secondary/[0.06] p-6 sm:p-8">
        <h3 className="text-h4 font-semibold tracking-tight text-balance">
          {content.action.title}
        </h3>
        <p className="mt-3 max-w-prose text-body leading-7 text-foreground">
          {content.action.body}
        </p>

        {/*
          ⚠ COLOUR FOLLOWS THE DESTINATION, NOT THE READING ORDER, AND
          THE ORDER HERE IS THE REVERSE OF THE EMPHASIS.

          The guide comes first because the panel's copy offers it
          first, but it navigates to a resource page - blue,
          `--accent-secondary`, whose role is non-CTA emphasis. The
          contact action is the conversion, so it carries the green
          DEC-096 reserves for exactly that, even though it sits second.

          This shipped inverted earlier the same day: green on the guide,
          the light fill on `/contact/`. The fields are named `guide`
          and `contact` now so the mistake cannot recur silently.

          One green action per panel (18 §106). `w-full sm:w-auto` fills
          the column on a phone without stretching across a desktop row,
          and nothing here is nested inside anything else interactive.
        */}
        <div className="mt-6 flex flex-wrap items-center gap-3">
          <ButtonLink
            href={guide.href}
            variant="accent"
            className="w-full sm:w-auto"
          >
            {guide.label}
          </ButtonLink>
          <ButtonLink
            href={contact.href}
            variant="primary"
            className="w-full sm:w-auto"
          >
            {contact.label}
          </ButtonLink>
        </div>
      </div>
    </Section>
  )
}
