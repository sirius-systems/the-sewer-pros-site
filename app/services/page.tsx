// Route: /services/
// Generated from the approved page registry (04 §4, 02 §21-23).
// generateStaticParams reads contentReadyPages — approved AND written.
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { pageMetadata } from '@/lib/seo'
import { HubPageTemplate } from '@/components/templates'
import { HeroBackdrop } from '@/components/sections'
import { servicesHubBackdrop } from '@/data/business/services-hub-backdrop'
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
    the mosaic, which ignores it; it is the setting the row-list
    fallback would use if the cards ever lost their artwork.

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
    ⚠ THE SECOND HUB WITH A HERO BACKDROP, AND THE FIRST WITH CONTROLS.
    `/locations/` cycles one frame per market behind its copy;
    `/services/` cycles five frames of the work behind its own. Both are
    decorative and unlabelled, which is what keeps them honest: these
    are rendered scenes, so a captioned frame would assert a photograph
    of a job that does not exist.

    ⚠ `controls` IS THIS PAGE'S ALONE: pause, previous, next and
    indicators, plus the timer switching off on hover, on focus and in
    a hidden tab. `/locations/` and the home page pass nothing and are
    unchanged in markup and in behaviour.

    ⚠ THE OVERLAY IS THE HOME PAGE'S, ON OWNER DIRECTION (2026-09-08).
    A left-weighted navy ramp shipped here for one build; the flat 55%
    black `.hero-scrim` replaced it, which is the same treatment behind
    the home page and `/locations/` heroes.
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
      /*
        ⚠ ROOM FOR THE CONTROLS BELOW `sm`, WHERE THEY CENTRE. Above
        that they sit in the lower right and the CTA row is on the
        left, so the two never meet; centred, they land straight on the
        buttons. 112px clears the 68px strip with breathing room.
      */
      heroClassName="max-sm:pb-28"
      itemsTitle="Explore our sewer and drain services"
      itemsId="services-grid"
      numbered
      backdrop={
        <HeroBackdrop set={servicesHubBackdrop} controls />
      }
    />
  )
}
