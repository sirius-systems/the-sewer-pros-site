import Link from 'next/link'
import { Section } from '@/components/ui'
import { resolveApprovedLink } from '@/lib/links/approved-link'
import type { PageId } from '@/types'

/**
 * Page-specific independent band for Service Page Template v2: the brand
 * surface, a headline, three numbered steps on light cards, one sentence,
 * and an optional text link. It replaces the shared `IndependentProcess`
 * on a page that supplies `v2.independent`; the shared band is untouched.
 *
 * ⚠ ONE OF TWO BRAND SURFACES ON THE PAGE, NEVER ADJACENT TO THE OTHER
 * (18 §11). The link is white on navy with an underline; the global focus
 * ring is near-invisible on navy, so it is overridden to white.
 */
export function IndependentBand({
  id = 'independent',
  eyebrow,
  title,
  steps,
  note,
  link,
}: {
  id?: string
  eyebrow: string
  title: string
  steps: readonly { title: string; body: string }[]
  note: string
  link?: { pageId: PageId; label: string }
}) {
  return (
    <Section density="standard" surface="brand" width="wide" labelledBy={id}>
      <p className="text-caption font-semibold tracking-wide uppercase opacity-80">
        {eyebrow}
      </p>
      <h2
        id={id}
        className="mt-2 max-w-5xl text-h2 font-semibold tracking-tight text-balance"
      >
        {title}
      </h2>
      <ol className="mt-8 grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <li key={step.title} className="flex">
            <article className="w-full rounded-md border border-border bg-background p-6 text-foreground">
              <span
                aria-hidden="true"
                className="text-h4 font-semibold text-accent-secondary tabular-nums"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-2 text-body text-muted-foreground">{step.body}</p>
            </article>
          </li>
        ))}
      </ol>
      <p className="mt-8 max-w-4xl text-body-lg leading-8">{note}</p>
      {link !== undefined && (
        <p className="mt-4">
          <Link
            href={resolveApprovedLink(link.pageId).href}
            className="inline-flex min-h-11 items-center font-semibold underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            {link.label}
          </Link>
        </p>
      )}
    </Section>
  )
}
