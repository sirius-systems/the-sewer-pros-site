'use client'

import { useEffect } from 'react'

/**
 * Preselects the request form's "Service needed" select when a visitor
 * activates a link carrying `data-preselect-service`.
 *
 * Renders nothing. Click delegation on the document, so the sections that
 * hold the links stay server components. The links are ordinary `#request`
 * anchors: with JavaScript off the browser still scrolls to the form, only
 * the preselection is lost.
 *
 * The value is a service option value (a canonical service id, or `other`
 * for "Not sure"). An unknown value is ignored rather than guessed at.
 */
export function PreselectServiceListener({
  selectId,
  fallbackSelectId,
  fallbackTargetId,
}: {
  selectId: string
  /**
   * For a page whose hero form is hidden at some widths (hidden on mobile on
   * location pages): the select and scroll target to use instead while the
   * hero form has no layout. Without them nothing changes.
   */
  fallbackSelectId?: string
  fallbackTargetId?: string
}) {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return

      const heroSelect = document.getElementById(selectId)
      const heroHidden =
        heroSelect !== null && heroSelect.getClientRects().length === 0
      const useFallback =
        heroHidden && fallbackSelectId !== undefined && fallbackTargetId !== undefined

      // A `#request` link whose target is hidden scrolls to the fallback form.
      const requestLink = target.closest<HTMLAnchorElement>('a[href="#request"]')
      if (requestLink !== null && useFallback) {
        const fallbackTarget = document.getElementById(fallbackTargetId)
        if (fallbackTarget !== null) {
          event.preventDefault()
          fallbackTarget.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }

      const link = target.closest<HTMLElement>('[data-preselect-service]')
      if (link === null) return
      const value = link.dataset.preselectService
      const select = useFallback
        ? document.getElementById(fallbackSelectId)
        : heroSelect
      if (value === undefined || !(select instanceof HTMLSelectElement)) return
      if (Array.from(select.options).some((option) => option.value === value)) {
        select.value = value
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [selectId, fallbackSelectId, fallbackTargetId])

  return null
}
