import type { SVGProps } from 'react'
import {
  Section,
  ButtonLink,
  buttonClasses,
  type SectionDensity,
  type SectionSurface,
} from '@/components/ui'
import { TrackedPhoneLink } from '@/components/tracking'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import { cn } from '@/lib/utils/cn'
import type { ExperienceBlock, ExperienceContent, ExperienceProofIcon } from '@/types'

/**
 * Company experience, stated as proof.
 *
 * Governed by docs/18-design-system.md §5.6, §11, §15, §37, §46-48,
 * §71, §106, Appendix A; docs/01-business-brand-foundation.md §20, §24,
 * §35; docs/22-decisions-change-log.md DEC-072, DEC-071, DEC-076,
 * DEC-096; CLAUDE.md §9, §24, §27.
 *
 * ===========================================================================
 * ⚠⚠ THE HARDEST RULE IN THIS COMPONENT IS NOT A DESIGN RULE
 * ===========================================================================
 * This section exists to make a credibility claim, which makes it the
 * likeliest place on any market hub for an unverified business fact to
 * enter the site. Two figures in particular are MARKET-SCOPED, and
 * DEC-072 records the scope explicitly:
 *
 *   "over 100,000 camera inspections"  /st-louis-mo/ ONLY
 *   "#1 choice in St. Louis"           /st-louis-mo/ ONLY
 *
 * 01 §20 forbids carrying one market's business facts onto another's
 * page, so NEITHER may appear on a San Diego or Las Vegas page. The
 * founding years are scoped the same way and are NOT interchangeable:
 * St. Louis 2011 (DEC-070), San Diego 2015 (DEC-071), and Las Vegas
 * NONE - `marketOperatingDetail['las-vegas-nv'].foundingYear` is 0
 * because the market is newly launching and importing a year would
 * assert an operating history it does not have.
 *
 * ⚠ THE COMPONENT CANNOT ENFORCE THIS AND DOES NOT PRETEND TO. Proof
 * copy is per-market content, so the guard is the content file and the
 * scope table in `data/business/organization.ts`. Read
 * `MARKET_SCOPED_CLAIMS` before writing a figure into any market's
 * `experience` block.
 *
 * ⚠ NO REPAIR, EVER. CLAUDE.md §9 forbids presenting the business as a
 * repair or replacement contractor. The independence card and the
 * "without a repair sale" block are the differentiator (01 §3), and
 * they must describe THIS company's model rather than accusing anyone
 * else's - CLAUDE.md §27 rules out the second.
 *
 * ---------------------------------------------------------------------------
 * TWO COMPOSITIONS, ONE SYSTEM
 * ---------------------------------------------------------------------------
 *   aside  A 7/12 content column beside a 5/12 column of three stacked
 *          proof cards, with the actions on a full-width row beneath.
 *   strip  A full-width heading, then the three proof cards as a
 *          horizontal strip, then the body in a two-column split.
 *
 * The variants exist because three market hubs running an identical
 * composition is the templated look 18 §155 names, and because the
 * owner asked San Diego to differ from Las Vegas (2026-09-07). They
 * share typography, card language, colour and spacing exactly; only
 * the arrangement changes.
 *
 * ---------------------------------------------------------------------------
 * ⚠ NO BACKGROUND PHOTOGRAPH, ON PURPOSE
 * ---------------------------------------------------------------------------
 * Owner direction, 2026-09-07: the process band that follows already
 * carries a full-bleed image, and 18 §11 warns against decorating every
 * section. This one is a light surface with text on it. That is also
 * why it takes `muted` rather than `default` - see the template.
 */
export interface ExperienceSectionProps {
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
  variant?: 'aside' | 'strip'
  content: ExperienceContent
  /**
   * The market's published number.
   *
   * ⚠ PASSED IN FROM `marketOperatingDetail`, NOT WRITTEN IN CONTENT,
   * so a page cannot end up publishing two different numbers and a
   * market with none simply shows no phone action (01 §20).
   */
  phone?: { label: string; phoneE164: string }
}

/**
 * Whether `ExperienceSection` renders anything.
 *
 * A template listing this section in its `densities` array must gate
 * that entry on this predicate, so the array and the composition
 * describe the same page.
 */
export function experienceRenders(
  content: ExperienceContent | undefined,
): boolean {
  return content !== undefined
}

/* ==========================================================================
   Icons — 18 §96, CLAUDE.md §39
   ========================================================================== */

type IconProps = SVGProps<SVGSVGElement>

/**
 * ⚠ EVERY MARK HERE IS `aria-hidden`, BESIDE A HEADING THAT STATES THE
 * SAME THING. That is the condition under which 18 §96 allows an icon:
 * it decorates a statement made in words. None of them is the sole
 * carrier of its meaning, which is also what lets the independence card
 * wear green — see the accent note below.
 *
 * Line icons at the weight `TrustBar` established, so the two sets read
 * as one family. No bubbles, no fills: CLAUDE.md §39 names icon bubbles
 * among the patterns that make a site read as generated.
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

/** Time in the trade — a clock. */
function ExperienceIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

/** Camera inspection — a camera body over a lens. */
function CameraIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M3 8.5h3.5L8 6.5h8l1.5 2H21v10H3Z" />
      <circle cx="12" cy="13.5" r="3.25" />
    </svg>
  )
}

/** Documented findings — a page with lines. */
function DocumentIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M14 3H6.5v18h11V6.5Z" />
      <path d="M14 3v3.5h3.5M9 12h6M9 16h4" />
    </svg>
  )
}

/**
 * Independence — a shield with a check.
 *
 * The same mark `TrustBar` uses for "No repair-driven upselling", so
 * the differentiator carries one glyph across the site rather than two.
 */
function IndependenceIcon(props: IconProps) {
  return (
    <svg {...baseIconProps(props)}>
      <path d="M12 3.5c3.5 1 6.5 1 8.5.5-.5 7-3.5 12-8.5 16.5-5-4.5-8-9.5-8.5-16.5 2 .5 5 .5 8.5-.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}

const ICONS: Record<
  ExperienceProofIcon,
  (props: IconProps) => React.JSX.Element
> = {
  experience: ExperienceIcon,
  camera: CameraIcon,
  document: DocumentIcon,
  independence: IndependenceIcon,
}

/**
 * ⚠ GREEN ON THE INDEPENDENCE CARD IS AN OWNER DECISION (2026-09-07),
 * NOT A DRIFT OF THE CONVERSION COLOUR.
 *
 * DEC-096 reserves `--accent` green for conversion actions and the
 * discipline is real: green scattered across icons and rules is what
 * makes a conversion colour stop reading as one. The owner asked for it
 * here, on one card out of three, to mark the differentiator.
 *
 * It survives the same argument `TrustBar`'s green icons already won:
 * the mark is `aria-hidden` beside a heading that states the point in
 * words, so nothing rests on the hue (18 §96). Every OTHER accent in
 * this section is `--accent-secondary` blue, and the only green button
 * on the page is still the primary CTA.
 *
 * ⚠ THE BAR IS A PAINTED LAYER, NOT A `border-l-4`. `cn()` is a plain
 * join rather than tailwind-merge, so a left-border width and colour
 * passed alongside the card's own `border border-border` would ship all
 * four classes and let stylesheet order decide the winner.
 */
const ACCENT: Record<'blue' | 'green', { bar: string; icon: string }> = {
  blue: { bar: 'bg-accent-secondary', icon: 'text-accent-secondary' },
  green: { bar: 'bg-accent', icon: 'text-accent' },
}

/* ==========================================================================
   Blocks
   ========================================================================== */

/**
 * One heading plus its paragraphs and optional list.
 *
 * `max-w-prose` is 65ch, which is the low end of the 65-75 characters
 * the owner asked for (2026-09-07) and the measure the rest of the site
 * already reads at.
 */
function Block({ block }: { block: ExperienceBlock }) {
  return (
    <div>
      <h3 className="text-h4 font-semibold tracking-tight text-balance">
        {block.title}
      </h3>

      {block.body?.map((paragraph) => (
        <p
          key={paragraph}
          className="mt-3 max-w-prose text-body leading-7 text-muted-foreground"
        >
          {paragraph}
        </p>
      ))}

      {block.listIntro !== undefined && (
        <p className="mt-3 max-w-prose text-body leading-7 text-muted-foreground">
          {block.listIntro}
        </p>
      )}

      {block.items !== undefined && block.items.length > 0 && (
        /*
          A real `<ul>`, and the marker is a border rather than a bullet
          glyph so the rhythm matches `CoverageSection`'s rule-topped
          list rather than introducing a third list treatment.
        */
        <ul className="mt-4 max-w-prose space-y-2">
          {block.items.map((item) => (
            <li
              key={item}
              className="border-l-2 border-border pl-4 text-body leading-7 text-muted-foreground"
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      {block.after?.map((paragraph) => (
        <p
          key={paragraph}
          className="mt-3 max-w-prose text-body leading-7 text-muted-foreground"
        >
          {paragraph}
        </p>
      ))}
    </div>
  )
}

function ProofCards({
  cards,
  layout,
}: {
  cards: ExperienceContent['proof']
  layout: 'stacked' | 'row'
}) {
  return (
    <ul
      className={cn(
        'grid gap-4',
        layout === 'row' ? 'sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1',
      )}
    >
      {cards.map((card) => {
        const Icon = ICONS[card.icon]
        const accent = ACCENT[card.accent]

        return (
          <li
            key={card.title}
            /*
              `overflow-hidden` so the painted accent bar is clipped by
              the card's own radius instead of squaring off its corners.
            */
            className="relative overflow-hidden rounded-md border border-border bg-surface p-5 pl-6"
          >
            <span
              aria-hidden="true"
              className={cn('absolute inset-y-0 left-0 w-1', accent.bar)}
            />
            <h3 className="flex items-start gap-2.5 text-h4 font-semibold tracking-tight text-balance">
              <Icon className={cn('mt-0.5 size-5 shrink-0', accent.icon)} />
              {card.title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {card.body}
            </p>
          </li>
        )
      })}
    </ul>
  )
}

export function ExperienceSection({
  density = 'sparse',
  surface = 'muted',
  id = 'company-experience',
  variant = 'aside',
  content,
  phone,
}: ExperienceSectionProps) {
  const primary = resolveApprovedLink(content.actions.primary.pageId, {
    label: content.actions.primary.label,
  })
  const secondary = resolveApprovedLink(content.actions.secondary.pageId, {
    label: content.actions.secondary.label,
  })

  /*
    The heading area, identical in both variants: a short rule, the
    eyebrow, the H2, and the opening paragraphs at reading measure.

    ⚠ NOT `SectionHeading`. That component caps its whole block at
    `--container-reading` (42rem) and takes one `intro` node; this
    heading needs two paragraphs at `max-w-prose` and a rule above the
    eyebrow. Rebuilding those two details around it would be more
    coupling than writing them.
  */
  const heading = (
    <div>
      {/*
        The blue rule above the eyebrow (owner, 2026-09-07). Decorative
        and `aria-hidden`: the eyebrow beneath it carries the label.
      */}
      <span
        aria-hidden="true"
        className="block h-0.5 w-10 bg-accent-secondary"
      />
      <p className="mt-4 text-caption font-semibold tracking-wide text-muted-foreground uppercase">
        {content.eyebrow}
      </p>
      <h2
        id={id}
        className="mt-3 max-w-[38rem] text-h2 font-semibold tracking-tight text-balance"
      >
        {content.title}
      </h2>
      {content.intro.map((paragraph) => (
        <p
          key={paragraph}
          className="mt-4 max-w-prose text-body-lg leading-8 text-muted-foreground"
        >
          {paragraph}
        </p>
      ))}
    </div>
  )

  /*
    The closing row: coverage statement, then the actions.

    ⚠ THE COVERAGE PARAGRAPH IS NOT DECORATION. It is what keeps a
    section full of capability copy from implying blanket availability:
    every market's version ends by asking the visitor to confirm before
    scheduling (CLAUDE.md §24, 01 §35). Do not trim it for length.

    ⚠ ONE PRIMARY ACTION (18 §106). Green is the conversion colour and
    only the first button wears it; the second is the site's outlined
    secondary, and the phone is a tertiary text action rather than a
    third button.
  */
  const closing = (
    <div className="border-t border-border pt-8">
      <Block block={content.coverage} />

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <ButtonLink href={primary.href} variant="primary">
          {primary.label}
        </ButtonLink>
        <ButtonLink href={secondary.href} variant="secondary">
          {secondary.label}
        </ButtonLink>
        {phone !== undefined && (
          /*
            `ButtonLink` renders `next/link`, which is for routes and
            `tel:` is not one. The site's tracked phone anchor wears the
            tertiary button's classes so appearance still comes from one
            place (18 §46).

            `section_cta`, not `final_cta`: the page's closing CTA is
            further down and 19 §32 exists to tell placements apart.
          */
          <TrackedPhoneLink
            phoneE164={phone.phoneE164}
            ctaLocation="section_cta"
            className={buttonClasses('tertiary')}
          >
            Call {phone.label}
          </TrackedPhoneLink>
        )}
      </div>
    </div>
  )

  if (variant === 'strip') {
    return (
      <Section density={density} surface={surface} labelledBy={id}>
        {heading}

        {/* The proof strip, directly under the introduction. */}
        <div className="mt-10">
          <ProofCards cards={content.proof} layout="row" />
        </div>

        {/*
          The body, in a 6/6 split. A block marked `half` takes one
          column; anything else spans both, so a full-width block can
          open or close the run without a second grid.
        */}
        <div className="mt-12 grid gap-x-10 gap-y-10 lg:grid-cols-2">
          {content.blocks.map((block) => (
            <div
              key={block.title}
              className={cn(block.half !== true && 'lg:col-span-2')}
            >
              <Block block={block} />
            </div>
          ))}
        </div>

        <div className="mt-12">{closing}</div>
      </Section>
    )
  }

  return (
    <Section density={density} surface={surface} labelledBy={id}>
      {heading}

      {/*
        7/12 content, 5/12 proof.

        ⚠ DOM ORDER IS CONTENT, THEN PROOF, THEN ACTIONS, AND THAT IS
        THE MOBILE ORDER THE OWNER ASKED FOR (2026-09-07). Nothing here
        reorders visually against the source, so keyboard focus follows
        the eye at every width and the single-column stack needs no
        `order-*` classes to come out right.
      */}
      <div className="mt-10 grid gap-x-12 gap-y-10 lg:grid-cols-12">
        <div className="space-y-10 lg:col-span-7">
          {content.blocks.map((block) => (
            <Block key={block.title} block={block} />
          ))}
        </div>

        <aside className="lg:col-span-5">
          <ProofCards cards={content.proof} layout="stacked" />
        </aside>
      </div>

      <div className="mt-12">{closing}</div>
    </Section>
  )
}
