// Route: /careers/
// Generated from the approved page registry (04 §4, 02 §21-23).
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'
import { CareersPageTemplate } from '@/components/templates'
import { getCoreContent } from '@/content'
import { getPage } from '@/data/pages'
import type { PageId } from '@/types'

const PAGE_ID = 'core-careers' as PageId

export function generateMetadata(): Metadata {
  const page = getPage(PAGE_ID)
  const content = getCoreContent(PAGE_ID)
  if (page === undefined || content === undefined) notFound()
  return pageMetadata({
    page,
    title: content.seoTitle ?? content.hero.title,
    description: content.metaDescription,
  })
}

export default function Page() {
  const page = getPage(PAGE_ID)
  const content = getCoreContent(PAGE_ID)
  if (page === undefined || content === undefined) notFound()
  return <CareersPageTemplate page={page} content={content} />
}
