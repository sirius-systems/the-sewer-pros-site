// Route: /privacy/
// Legal/utility page. Fast mode, Level 1: no template, no TrustBar, no related
// links, FAQ, closing CTA or lead form.
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'
import { PageShell } from '@/components/templates'
import { Section, Prose } from '@/components/ui'
import { getPage } from '@/data/pages'
import { PrivacyBody, privacySeo } from '@/content/pages/privacy'
import type { PageId } from '@/types'

const PAGE_ID = 'core-privacy' as PageId

export function generateMetadata(): Metadata {
  const page = getPage(PAGE_ID)
  if (page === undefined) notFound()
  return pageMetadata({ page, title: privacySeo.title, description: privacySeo.description })
}

export default function Page() {
  const page = getPage(PAGE_ID)
  if (page === undefined) notFound()

  return (
    <PageShell
      page={page}
      densities={['standard']}
      schema={{ title: privacySeo.title, description: privacySeo.description }}
    >
      <Section density="standard" width="reading" labelledBy="legal-heading">
        <h1 id="legal-heading" className="text-h1 font-semibold tracking-tight text-balance">
          Privacy Policy
        </h1>
        <Prose className="mt-8">
          <PrivacyBody />
        </Prose>
      </Section>
    </PageShell>
  )
}
