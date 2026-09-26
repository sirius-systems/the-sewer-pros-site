// Route: /services/
// Generated from the approved page registry (04 §4, 02 §21-23).
// generateStaticParams reads contentReadyPages — approved AND written.
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'
import { HubPageTemplate } from '@/components/templates'
import { HeroVideoBackdrop } from '@/components/sections'
import {
  servicesHubHeroPoster,
  servicesHubHeroVideo,
} from '@/data/business/services-hub-backdrop'
import { getHubContent } from '@/content'
import { getPage } from '@/data/pages'
import type { PageId } from '@/types'

const PAGE_ID = 'hub-services' as PageId

export function generateMetadata(): Metadata {
  const page = getPage(PAGE_ID)
  const content = getHubContent(PAGE_ID)
  if (page === undefined || content === undefined) notFound()
  return pageMetadata({
    page,
    title: content.seoTitle ?? content.hero.title,
    description: content.metaDescription,
  })
}

export default function Page() {
  const page = getPage(PAGE_ID)
  const content = getHubContent(PAGE_ID)
  if (page === undefined || content === undefined) notFound()
  /*
    ⚠ `numbered` IS INERT AND KEPT ON PURPOSE. The member list renders
    `itemsVariant="cards"` (2026-09-23: the approved nine-card section,
    reused rather than duplicated), which ignores it; it is the setting
    the row-list fallback would use if the items ever lost their
    artwork.

    ⚠ `itemsId` IS THE INTRO BAND'S ANCHOR TARGET. The default is
    `hub-items`, which is what the other hubs keep; this page names it
    `services-grid` because its own opening band links down to it and
    that is the id the link states. `:target` in `app/globals.css`
    gives it the sticky-header offset.

    ⚠ NO `itemsSurface`. It was `muted` for one build while the surface
    chain below the member list resolved to a `muted` FAQ against the
    `muted` split CTA. That is fixed at its source now - the coverage
    band keeps the previous surface where the process band's photograph
    separates them, as on the home page - so the service grid is back
    on white, which is what the mosaic was designed against.
  */
  /*
    ⚠ THE HERO BACKDROP IS ONE VIDEO OVER ITS STILL (2026-09-26, owner
    direction; it replaced a five-frame carousel). Decorative and
    unlabelled: it is a rendered scene, so a caption would assert
    footage of a job that does not exist. Reduced-motion and data-saver
    visitors get the still. The overlay is the shared `.hero-scrim`.
  */
  return (
    <HubPageTemplate
      page={page}
      content={content}
      /*
        ⚠ NO FORM BESIDE THE HERO COPY. `showHeroForm` stays set in
        content and still gives this page the `split` closing CTA with
        its form; what it must not do here is put a white card over the
        photographs the carousel exists to show.
      */
      heroAside="none"
      itemsTitle="Sewer Inspection, Diagnostics & Cleaning Services"
      itemsVariant="cards"
      itemsId="services-grid"
      numbered
      backdrop={
        <HeroVideoBackdrop
          video={servicesHubHeroVideo}
          poster={servicesHubHeroPoster}
        />
      }
    />
  )
}
