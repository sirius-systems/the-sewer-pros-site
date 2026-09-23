// Route: /contact/thank-you/
// Confirmation page. The registry record is `indexable: false`, so
// `pageMetadata()` emits noindex and the sitemap omits it.
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'
import { PageShell } from '@/components/templates'
import { Section, ButtonLink } from '@/components/ui'
import { ThankYouDetails } from '@/components/sections'
import { getPage } from '@/data/pages'
import type { PageId } from '@/types'

const PAGE_ID = 'core-contact-thank-you' as PageId

export function generateMetadata(): Metadata {
  const page = getPage(PAGE_ID)
  if (page === undefined) notFound()
  return pageMetadata({
    page,
    title: 'Request Received',
    description: 'Your request to The Sewer Pros was received.',
  })
}

export default function Page() {
  const page = getPage(PAGE_ID)
  if (page === undefined) notFound()

  return (
    <PageShell page={page} densities={['sparse']}>
      <Section density="sparse" surface="default" labelledBy="thank-you-heading">
        <div className="max-w-[var(--container-reading)]">
          <h1
            id="thank-you-heading"
            className="text-h1 font-semibold tracking-tight text-balance"
          >
            Thanks, your request was received
          </h1>
          <div className="mt-5">
            <ThankYouDetails />
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/services/" variant="accent">
              Explore our services
            </ButtonLink>
            <ButtonLink href="/faq/" variant="secondary">
              Read common questions
            </ButtonLink>
          </div>
        </div>
      </Section>
    </PageShell>
  )
}
