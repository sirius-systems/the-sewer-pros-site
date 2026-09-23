// Route: /contact/
// Generated from the approved page registry (04 §4, 02 §21-23).
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'
import { ContactPageTemplate } from '@/components/templates'
import { getContactHubContent } from '@/content'
import { getPage } from '@/data/pages'
import type { PageId } from '@/types'

const PAGE_ID = 'core-contact' as PageId

export function generateMetadata(): Metadata {
  const page = getPage(PAGE_ID)
  const content = getContactHubContent(PAGE_ID)
  if (page === undefined || content === undefined) notFound()
  return pageMetadata({
    page,
    title: content.seoTitle ?? content.hero.title,
    description: content.metaDescription,
  })
}

export default function Page() {
  const page = getPage(PAGE_ID)
  const content = getContactHubContent(PAGE_ID)
  if (page === undefined || content === undefined) notFound()
  return <ContactPageTemplate page={page} content={content} />
}
