// Route: /
// Generated from the approved page registry (04 §4, 02 §21-23).
// generateStaticParams reads contentReadyPages — approved AND written.
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'
import { HomePageTemplate } from '@/components/templates'
import { homeContent } from '@/content'
import { getPage } from '@/data/pages'
import type { PageId } from '@/types'

export function generateMetadata(): Metadata {
  const page = getPage('core-home' as PageId)
  if (page === undefined) notFound()
  return pageMetadata({
    page,
    title: homeContent.seoTitle ?? homeContent.hero.title,
    description: homeContent.metaDescription,
  })
}

export default function Page() {
  const page = getPage('core-home' as PageId)
  if (page === undefined) notFound()
  return <HomePageTemplate page={page} content={homeContent} />
}
