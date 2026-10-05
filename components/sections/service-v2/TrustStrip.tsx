import { Section } from '@/components/ui'

/**
 * A trust strip whose statements come from the page's own data, for a page
 * whose verified items do not fit the shared one-line `TrustBar` (which is
 * built around four short sitewide statements). The statements wrap, so the
 * longer owner-approved availability sentence reads in full.
 *
 * Carries no copy of its own: every statement is passed in.
 */
export function TrustStrip({ items }: { items: readonly string[] }) {
  return (
    <Section density="dense" surface="default" as="aside" labelledBy="trust-strip">
      <h2 id="trust-strip" className="sr-only">
        At a glance
      </h2>
      <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-body-sm text-foreground">
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
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </Section>
  )
}
