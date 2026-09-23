// Route: /about/
// Generated from the approved page registry (04 §4, 02 §21-23).
// generateStaticParams reads contentReadyPages — approved AND written.
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'
import { AboutPageTemplate } from '@/components/templates'
import { getAboutContent } from '@/content'
import { getPage } from '@/data/pages'
import type { PageId } from '@/types'

const PAGE_ID = 'core-about' as PageId

export function generateMetadata(): Metadata {
  const page = getPage(PAGE_ID)
  const content = getAboutContent(PAGE_ID)
  if (page === undefined || content === undefined) notFound()
  const title = content.seoTitle ?? content.hero.title
  const metadata = pageMetadata({ page, title, description: content.metaDescription })

  /*
    ⚠ TITLE OVERRIDE, THIS ROUTE ONLY. `pageMetadata()`'s `brandedTitle()`
    appends " | The Sewer Pros" unless the title already ends with that
    exact suffix (see lib/seo/metadata.ts) — right for a title like "Who
    We Serve", wrong here: this page's authored title already carries the
    site name mid-string ("About The Sewer Pros"), so the automatic
    suffix would duplicate it ("... | The Sewer Pros | The Sewer Pros").
    Overriding `title`/`openGraph.title`/`twitter.title` to the exact
    authored string, after `pageMetadata()` has already built canonical,
    robots, and every other field, keeps this a narrow per-route fix
    rather than a change to the shared helper every other page relies on.
  */
  return {
    ...metadata,
    title: { absolute: title },
    openGraph: { ...metadata.openGraph, title },
    twitter: { ...metadata.twitter, title },
  }
}

export default function Page() {
  const page = getPage(PAGE_ID)
  const content = getAboutContent(PAGE_ID)
  if (page === undefined || content === undefined) notFound()
  return <AboutPageTemplate page={page} content={content} />
}
