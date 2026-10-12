/**
 * Cloudflare Turnstile, browser side.
 *
 * The site key is public by design (it is shipped to every visitor); the secret
 * key lives only in the `TURNSTILE_SECRET_KEY` server variable and is checked in
 * `lib/forms/lead-server.ts`. The script is loaded on the visitor's first
 * interaction with a lead form, not on page load, and the widget uses
 * `interaction-only` so it stays invisible unless Cloudflare asks for a challenge.
 */
'use client'

import { useCallback, useEffect, useRef } from 'react'

export const TURNSTILE_SITE_KEY = '0x4AAAAAAFVCzjAICkhy_GN8'

const SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

interface TurnstileApi {
  render: (
    container: HTMLElement,
    options: {
      sitekey: string
      appearance?: 'always' | 'execute' | 'interaction-only'
      callback: (token: string) => void
      'expired-callback': () => void
      'error-callback': () => void
    },
  ) => string
  reset: (widgetId?: string) => void
  remove: (widgetId?: string) => void
}

declare global {
  interface Window {
    turnstile?: TurnstileApi
  }
}

let scriptPromise: Promise<void> | undefined

function loadScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve()
  scriptPromise ??= new Promise<void>((resolve, reject) => {
    const el = document.createElement('script')
    el.src = SCRIPT_SRC
    el.async = true
    el.onload = () => resolve()
    el.onerror = () => {
      scriptPromise = undefined
      reject(new Error('turnstile script failed'))
    }
    document.head.appendChild(el)
  })
  return scriptPromise
}

export interface TurnstileCheck {
  /** Attach to an empty div inside the form. */
  container: React.RefObject<HTMLDivElement | null>
  /** Loads the script and renders the widget once; safe to call on every interaction. */
  start: () => void
  /** The current token ('' while none), and whether loading or the challenge failed. */
  read: () => { token: string; failed: boolean }
  /** Tokens are single use: call after a send that reached the server. */
  reset: () => void
}

export function useTurnstile(): TurnstileCheck {
  const container = useRef<HTMLDivElement | null>(null)
  const widgetId = useRef<string | undefined>(undefined)
  const started = useRef(false)
  const token = useRef('')
  const failed = useRef(false)

  const start = useCallback(() => {
    if (started.current) return
    started.current = true
    loadScript()
      .then(() => {
        if (!container.current || !window.turnstile || widgetId.current !== undefined) return
        widgetId.current = window.turnstile.render(container.current, {
          sitekey: TURNSTILE_SITE_KEY,
          appearance: 'interaction-only',
          callback: (t) => {
            token.current = t
            failed.current = false
          },
          'expired-callback': () => {
            token.current = ''
          },
          'error-callback': () => {
            token.current = ''
            failed.current = true
          },
        })
      })
      .catch(() => {
        failed.current = true
      })
  }, [])

  const read = useCallback(() => ({ token: token.current, failed: failed.current }), [])

  const reset = useCallback(() => {
    token.current = ''
    if (widgetId.current !== undefined) window.turnstile?.reset(widgetId.current)
  }, [])

  useEffect(
    () => () => {
      if (widgetId.current !== undefined) window.turnstile?.remove(widgetId.current)
    },
    [],
  )

  return { container, start, read, reset }
}
