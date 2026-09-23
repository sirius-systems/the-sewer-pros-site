// Route: /for/
// Generated from the approved page registry (04 §4, 02 §21-23).
// generateStaticParams reads contentReadyPages — approved AND written.
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'
import { AudienceHubTemplate } from '@/components/templates'
import { getAudienceHubContent } from '@/content'
import { getPage } from '@/data/pages'
import type { PageId } from '@/types'

const PAGE_ID = 'hub-audiences' as PageId

export function generateMetadata(): Metadata {
  const page = getPage(PAGE_ID)
  const content = getAudienceHubContent(PAGE_ID)
  if (page === undefined || content === undefined) notFound()
  return pageMetadata({
    page,
    title: content.seoTitle ?? content.hero.title,
    description: content.metaDescription,
  })
}

export default function Page() {
  const page = getPage(PAGE_ID)
  const content = getAudienceHubContent(PAGE_ID)
  if (page === undefined || content === undefined) notFound()
  return <AudienceHubTemplate page={page} content={content} />
}
