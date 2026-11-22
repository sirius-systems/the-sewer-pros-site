// Route: /careers/thank-you/
// Confirmation page. The registry record is `indexable: false`, so
// `pageMetadata()` emits noindex and the sitemap omits it. No page links to it:
// the careers form sends the visitor here only after the function accepted the application.
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'
import { PageShell } from '@/components/templates'
import { Section } from '@/components/ui'
import { getPage } from '@/data/pages'
import type { PageId } from '@/types'

const PAGE_ID = 'core-careers-thank-you' as PageId

export function generateMetadata(): Metadata {
  const page = getPage(PAGE_ID)
  if (page === undefined) notFound()
  return pageMetadata({
    page,
    title: 'Application Received',
    description: 'Your application to The Sewer Pros was received.',
  })
}

export default function Page() {
  const page = getPage(PAGE_ID)
  if (page === undefined) notFound()

  return (
    <PageShell page={page} densities={['sparse']}>
      <Section density="sparse" surface="default" labelledBy="thank-you-heading">
        <div className="max-w-[var(--container-reading)]">
          <h1 id="thank-you-heading" className="text-h1 font-semibold tracking-tight text-balance">
            Thanks, your application was received
          </h1>
          <p className="mt-5 text-body-lg text-muted-foreground">A team member will contact you.</p>
        </div>
      </Section>
    </PageShell>
  )
}
