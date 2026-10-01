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
export function PreselectServiceListener({ selectId }: { selectId: string }) {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target
      if (!(target instanceof Element)) return
      const link = target.closest<HTMLElement>('[data-preselect-service]')
      if (link === null) return
      const value = link.dataset.preselectService
      const select = document.getElementById(selectId)
      if (value === undefined || !(select instanceof HTMLSelectElement)) return
      if (Array.from(select.options).some((option) => option.value === value)) {
        select.value = value
      }
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [selectId])

  return null
}
