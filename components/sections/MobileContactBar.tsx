'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { marketList, marketOperatingDetail } from '@/data/markets/markets'
import { trackPhoneClick, trackCtaClick } from '@/lib/analytics'
import type { MarketId } from '@/types'

/**
 * Sticky bottom bar for phones: Call, Schedule, Choose City.
 *
 * Contact pages only, so the rest of the site's layout is untouched.
 *
 * ⚠ THE CITY IS NEVER GUESSED. "Call" dials directly only when the page
 * itself names the market (`marketId`) or the visitor chose a city
 * earlier on this device. Otherwise it opens the city sheet, which lists
 * all three numbers. No IP or geolocation lookup.
 *
 * Every target is at least 44px (`min-h-11`), and the sheet is a real
 * dialog: focus moves into it, Escape and the backdrop close it.
 */
const MARKET_STORAGE_KEY = 'sp-contact-market'

function isMarketId(value: string | null): value is MarketId {
  return value !== null && marketList.some((m) => m.id === value)
}

const BAR_BUTTON =
  'inline-flex min-h-11 flex-1 items-center justify-center rounded-md px-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary'

export function MobileContactBar({ marketId }: { marketId?: MarketId }) {
  const [chosen, setChosen] = useState<MarketId | undefined>(marketId)
  const [open, setOpen] = useState(false)
  const sheetRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (marketId !== undefined) return
    try {
      const stored = window.localStorage.getItem(MARKET_STORAGE_KEY)
      // eslint-disable-next-line react-hooks/set-state-in-effect -- post-hydration read of a stored choice
      if (isMarketId(stored)) setChosen(stored)
    } catch {
      // Storage unavailable: the sheet still works.
    }
  }, [marketId])

  useEffect(() => {
    if (!open) return
    sheetRef.current?.querySelector<HTMLElement>('a, button')?.focus()
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const callDetail = chosen === undefined ? undefined : marketOperatingDetail[chosen]

  return (
    <>
      {/* Spacer so the fixed bar never covers the footer's last row. */}
      <div aria-hidden="true" className="h-16 md:hidden" />

      <div
        role="region"
        aria-label="Quick contact"
        className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-background p-2 shadow-[0_-2px_8px_rgba(0,0,0,0.08)] md:hidden"
      >
        {callDetail !== undefined ? (
          <a
            href={`tel:${callDetail.phoneE164}`}
            onClick={() => trackPhoneClick('mobile_bar', chosen === undefined ? {} : { market_id: chosen })}
            className={`${BAR_BUTTON} bg-accent text-accent-foreground`}
          >
            Call
          </a>
        ) : (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={`${BAR_BUTTON} bg-accent text-accent-foreground`}
          >
            Call
          </button>
        )}
        <a
          href="#request-service"
          onClick={() => trackCtaClick('mobile_bar', chosen === undefined ? {} : { market_id: chosen })}
          className={`${BAR_BUTTON} border border-border bg-surface text-foreground`}
        >
          Schedule
        </a>
        <button
          type="button"
          aria-haspopup="dialog"
          aria-expanded={open}
          onClick={() => setOpen(true)}
          className={`${BAR_BUTTON} border border-border bg-surface text-foreground`}
        >
          {chosen === undefined
            ? 'Choose City'
            : (marketList.find((m) => m.id === chosen)?.city ?? 'Choose City')}
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <button
            type="button"
            aria-label="Close city picker"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/55"
          />
          <div
            ref={sheetRef}
            role="dialog"
            aria-modal="true"
            aria-label="Choose your city"
            className="absolute inset-x-0 bottom-0 rounded-t-lg bg-background p-5 shadow-lg"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-h4 font-semibold tracking-tight">Choose your city</h2>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex min-h-11 items-center px-2 text-sm font-medium text-accent-secondary underline underline-offset-4"
              >
                Close
              </button>
            </div>
            <ul className="mt-3 divide-y divide-border">
              {marketList.map((market) => {
                const d = marketOperatingDetail[market.id]
                if (d === undefined) return null
                return (
                  <li key={market.id} className="flex items-center justify-between gap-3 py-2">
                    <Link
                      href={`/${market.slug}/contact/`}
                      onClick={() => {
                        try {
                          window.localStorage.setItem(MARKET_STORAGE_KEY, market.id)
                        } catch {
                          // Ignore unavailable storage.
                        }
                      }}
                      className="inline-flex min-h-11 items-center text-sm font-semibold text-foreground underline underline-offset-4"
                    >
                      {market.name}
                    </Link>
                    <a
                      href={`tel:${d.phoneE164}`}
                      onClick={() => trackPhoneClick('mobile_bar', { market_id: market.id })}
                      className="inline-flex min-h-11 items-center text-sm font-medium text-accent-secondary underline underline-offset-4"
                    >
                      {d.phone}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
