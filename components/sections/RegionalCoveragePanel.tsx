import Link from 'next/link'
import {
  Section,
  ButtonLink,
  buttonClasses,
  type SectionDensity,
} from '@/components/ui'
import { TrackedPhoneLink } from '@/components/tracking'
import { SectionHeading } from './SectionHeading'
import {
  resolveApprovedLink,
  resolveLinkableOnly,
} from '@/lib/links/approved-link'
import { cn } from '@/lib/utils/cn'
import type { RegionalCoverageContent } from '@/types'

/**
 * Closing regional conversion panel for a market hub.
 *
 * Governed by docs/17-conversion-architecture.md; docs/18-design-system.md §11, §87;
 * docs/01-business-brand-foundation.md §20-21; CLAUDE.md §11, §24, §43.
 *
 * ===========================================================================
 * ⚠ COVERAGE IS NOT A BOUNDARY, AND THIS SECTION IS WHERE THAT SLIPS
 * ===========================================================================
 * A closing panel that lists communities is one careless verb away from
 * asserting a service boundary the business has not published. The copy
 * this renders names FEATURED areas and then asks the visitor to
 * confirm; it must never be edited into "we serve all of", a radius, or
 * a county.
 *
 * For San Diego and Las Vegas specifically, `serviceAreaSource` is
 * `derived_from_approved_locations` - there is no published service
 * area to state, which is exactly why the ask-to-confirm sentence is
 * load-bearing rather than boilerplate (DEC-077).
 *
 * ---------------------------------------------------------------------------
 * ⚠ IT IS LIGHT, AND THAT IS STRUCTURAL RATHER THAN COSMETIC
 * ---------------------------------------------------------------------------
 * It follows the independence band, which is `brand` navy. Two dark
 * sections in sequence read as one long region (18 §11), and this one
 * is a conversion panel that needs to feel like a change of gear, not a
 * continuation of the argument above it.
 *
 * ---------------------------------------------------------------------------
 * ⚠ NO OFFICE, ANYWHERE IN THIS SECTION
 * ---------------------------------------------------------------------------
 * No address, no "visit us", no map pin. A closing panel that names a
 * region and shows a phone number is the most natural place on a page
 * to imply a branch, and none of these markets has one (CLAUDE.md §11,
 * 18 §86-87).
 *
 * ⚠ PUBLISHED HOURS ARE THE EXCEPTION AND THEY HELP. An earlier
 * version of this note ruled them out alongside the address. They are
 * not the same thing: an address asserts a place, while weekday hours
 * affirmatively rule OUT the emergency, weekend and 24/7 service this
 * business does not offer (01 §35). What must never appear is a
 * street.
 *
 * ⚠ THE PHONE IS AUTHORED, NOT DERIVED. It is market-scoped, so the
 * template does not supply it: a page inherits no other market's line.
 */
export interface RegionalCoveragePanelProps {
  content: RegionalCoverageContent
  density?: SectionDensity
  id?: string
}

export function RegionalCoveragePanel({
  content,
  density = 'dense',
  id = 'regional-coverage',
}: RegionalCoveragePanelProps) {
  const primary = resolveApprovedLink(content.primary.pageId, {
    label: content.primary.label,
  })
  const secondary =
    content.secondary !== undefined
      ? resolveApprovedLink(content.secondary.pageId, {
          label: content.secondary.label,
        })
      : undefined

  const locations =
    content.locations !== undefined
      ? resolveLinkableOnly(content.locations.map((l) => l.pageId))
      : []
  const locationLabels = new Map(
    (content.locations ?? []).map((l) => [l.pageId, l.label]),
  )

  /*
    ⚠ TWO TREATMENTS, AND THE IMAGE PICKS WHICH. With a photograph the
    panel sits directly on it: `Section` supplies the scrim and turns
    unstyled children white, so a white card on top would hide the
    frame entirely. Without one, the white card on the muted section is
    what separates the panel from the band above it.
  */
  const onImage = content.backgroundImage !== undefined

  return (
    <Section
      density={density}
      surface="muted"
      labelledBy={id}
      backgroundImage={content.backgroundImage}
      /*
        `strong`, because conversion controls and a phone number sit on
        this frame and the composition puts its busiest detail through
        the middle. The lighter scrim is measured for text alone.
      */
      scrim="strong"
    >
      <div
        className={cn(
          onImage
            ? 'max-w-[60rem]'
            : 'rounded-md border border-border bg-background p-6 sm:p-8 lg:p-10',
        )}
      >
        <div className="max-w-[52rem]">
          <SectionHeading
            id={id}
            eyebrow={content.eyebrow}
            title={content.title}
          />
          {content.body.map((paragraph) => (
            <p
              key={paragraph}
              className={cn(
                'mt-4 text-body',
                /*
                  ⚠ `text-white/90`, NOT `text-muted-foreground`, ON A
                  PHOTOGRAPH. The muted token is tuned for a light
                  surface and drops well under 4.5:1 over a scrimmed
                  frame. Same trap `ProcessSteps` had on a brand
                  surface.
                */
                onImage ? 'text-white/90' : 'text-muted-foreground',
              )}
            >
              {paragraph}
            </p>
          ))}

          {/*
            ⚠ FEATURED COMMUNITIES AS LINKS, NOT CARDS. Both markets
            already render a full image mosaic of their service
            locations further up the page; repeating it as cards here
            would be the same navigation twice. These are a compact
            row that names the four and gets out of the way.
          */}
          {locations.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
              {locations.map((link) => (
                <li key={link.pageId}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-body font-semibold underline underline-offset-4',
                      onImage
                        ? 'text-white hover:text-white/80'
                        : 'text-accent-secondary hover:text-foreground',
                    )}
                  >
                    {locationLabels.get(link.pageId) ?? link.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          {/*
            ==============================================================
            ⚠ CONTACT DETAILS WERE A SILENT DROP UNTIL 2026-09-08
            ==============================================================
            `email`, `hours` and `availabilityNote` were added to
            `RegionalCoverageContent` and set on Las Vegas, and this
            component never read them. The content was authored, the
            types were satisfied, the build was green, and the page
            shipped without its email or its hours. Nothing failed,
            which is why it went unnoticed - the same shape of bug as
            `LeadFormSection`'s dropped `intro`.

            ⚠ THEY SIT WITH THE COPY, NOT IN THE BUTTON ROW. The phone
            is both a detail and a conversion here, so it appears once
            as the green button below; these are the reference lines.
          */}
          {(content.email !== undefined ||
            content.hours !== undefined ||
            content.availabilityNote !== undefined) && (
            <div className="mt-6">
              <dl className="space-y-1 text-body">
                {content.email !== undefined && (
                  <div className="flex flex-wrap gap-x-2">
                    <dt
                      className={cn(
                        'font-semibold',
                        onImage ? 'text-white' : 'text-foreground',
                      )}
                    >
                      Email
                    </dt>
                    <dd>
                      <a
                        href={content.email.href}
                        className={cn(
                          'underline underline-offset-4',
                          onImage
                            ? 'text-white hover:text-white/80'
                            : 'text-accent-secondary hover:text-foreground',
                        )}
                      >
                        {content.email.label}
                      </a>
                    </dd>
                  </div>
                )}
                {content.hours !== undefined && (
                  <div className="flex flex-wrap gap-x-2">
                    <dt
                      className={cn(
                        'font-semibold',
                        onImage ? 'text-white' : 'text-foreground',
                      )}
                    >
                      Hours
                    </dt>
                    <dd
                      className={
                        onImage ? 'text-white/90' : 'text-muted-foreground'
                      }
                    >
                      {content.hours}
                    </dd>
                  </div>
                )}
              </dl>
              {content.availabilityNote !== undefined && (
                <p
                  className={cn(
                    'mt-3 text-body-sm',
                    onImage ? 'text-white/90' : 'text-muted-foreground',
                  )}
                >
                  {content.availabilityNote}
                </p>
              )}
            </div>
          )}
        </div>

        {/*
          ⚠ THE PHONE IS A LINK, NOT A THIRD BUTTON. Three equal
          controls make a visitor choose before reading any of them;
          the two actions are the paths and the number is the
          alternative for someone who would rather talk. It stays
          visually distinct at every width.

          Full width below `sm` so a phone gets real tap targets.
        */}

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center">
          <ButtonLink href={primary.href} className="w-full sm:w-auto">
            {primary.label}
          </ButtonLink>
          {secondary !== undefined && (
            <ButtonLink
              href={secondary.href}
              variant="accent"
              className="w-full sm:w-auto"
            >
              {secondary.label}
            </ButtonLink>
          )}
          {content.phone !== undefined && (
            /*
              ⚠ GREEN BUTTON, NOT A TEXT LINK (owner, 2026-09-08). It
              began as a tertiary underline on the reasoning that three
              equal controls make a visitor choose before reading any
              of them. The owner's call is that calling is a conversion
              here and should look like one, which is the same call
              made for the St. Louis closing CTA on 2026-09-07.

              ⚠ TWO GREEN CONTROLS IN THIS ROW NOW, AND THAT IS THE
              TRADE. DEC-096 reserves green for conversion actions;
              both of these are conversions, so neither is a deviation
              from the rule, but the row no longer has a single
              strongest action. The blue middle button is what keeps
              them readable as a pair rather than a wall.

              ⚠ `TrackedPhoneLink`, NOT AN `<a>`. `ButtonLink` renders
              `next/link`, which is for routes, and `tel:` is not one.
              The tracked anchor wears `buttonClasses` so appearance
              still comes from one place (18 §46) - and it fires the
              call event, which the plain anchor this replaced did not.
            */
            <TrackedPhoneLink
              phoneE164={content.phone.phoneE164}
              ctaLocation="section_cta"
              className={buttonClasses('primary', 'w-full sm:w-auto')}
            >
              {content.phone.label}
            </TrackedPhoneLink>
          )}
        </div>
      </div>
    </Section>
  )
}

/** Whether the section has anything to render. */
export function regionalCoverageRenders(
  content: RegionalCoverageContent | undefined,
): content is RegionalCoverageContent {
  return content !== undefined
}
