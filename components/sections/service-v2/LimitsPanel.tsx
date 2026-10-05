import Link from 'next/link'
import { Section } from '@/components/ui'
import { SectionHeading } from '../SectionHeading'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import type { PageId } from '@/types'

/**
 * What the service may show against what it cannot confirm, as one
 * bordered two-column panel. The honest-limits panel is the page's
 * differentiator, so it is a named block rather than a bullet list.
 *
 * Markers are drawn inline and are `aria-hidden`; each list's heading
 * and the item text carry the meaning.
 */
function Check() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="mt-1 size-4 shrink-0 text-accent-secondary"
    >
      <path
        d="m4.5 10.5 3.5 3.5 7.5-8"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Dash() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 20 20"
      className="mt-1 size-4 shrink-0 text-muted-foreground"
    >
      <path
        d="M5 10h10"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function LimitsPanel({
  id,
  eyebrow,
  title,
  intro,
  canTitle,
  canLead,
  can,
  cannotTitle,
  cannotLead,
  cannot,
  callout,
  related,
}: {
  id: string
  eyebrow?: string
  title: string
  intro?: string
  canTitle: string
  canLead?: string
  can: readonly string[]
  cannotTitle: string
  cannotLead?: string
  cannot: readonly string[]
  callout?: string
  related?: { lead: string; pageId: PageId; label: string }
}) {
  return (
    <Section density="dense" surface="default" labelledBy={id}>
      <SectionHeading id={id} eyebrow={eyebrow} title={title} intro={intro !== undefined ? <p>{intro}</p> : undefined} />
      <div className="mt-8 grid overflow-hidden rounded-md border border-border md:grid-cols-2">
        <div className="bg-surface p-6 sm:p-8">
          <h3 className="text-h4 font-semibold text-foreground">{canTitle}</h3>
          {canLead !== undefined && (
            <p className="mt-1 text-body-sm text-muted-foreground">{canLead}</p>
          )}
          <ul className="mt-4 space-y-3">
            {can.map((item) => (
              <li key={item} className="flex gap-3 text-body-sm text-foreground">
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-border bg-surface-muted p-6 sm:p-8 md:border-t-0 md:border-l">
          <h3 className="text-h4 font-semibold text-foreground">{cannotTitle}</h3>
          {cannotLead !== undefined && (
            <p className="mt-1 text-body-sm text-muted-foreground">{cannotLead}</p>
          )}
          <ul className="mt-4 space-y-3">
            {cannot.map((item) => (
              <li key={item} className="flex gap-3 text-body-sm text-foreground">
                <Dash />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        {callout !== undefined && (
          <p className="border-t border-border bg-surface px-6 py-4 text-body font-semibold text-foreground sm:px-8 md:col-span-2">
            {callout}
          </p>
        )}
      </div>
      {related !== undefined && (
        <p className="mt-6 max-w-[var(--container-reading)] text-body text-muted-foreground">
          {related.lead}{' '}
          <Link
            href={resolveApprovedLink(related.pageId).href}
            className="font-semibold text-accent-secondary underline underline-offset-4 hover:text-foreground"
          >
            {related.label}
          </Link>
        </p>
      )}
    </Section>
  )
}
