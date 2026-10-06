'use client'

import { usePathname } from 'next/navigation'
import { TrackedPhoneLink } from '@/components/tracking/TrackedPhoneLink'
import { marketList, marketOperatingDetail, marketPathname } from '@/data/markets/markets'

/**
 * The footer's per-market contact blocks.
 *
 * ⚠ ON A MARKET-SCOPED PAGE THIS SHOWS THAT MARKET ONLY. Every page under
 * `/st-louis-mo/`, `/san-diego-ca/` or `/las-vegas-nv/` (or `/locations/` plus one of them) renders its own
 * market's phone and email and no other market's (DEC-071, 01 §20). Every
 * other page (home, About, Services, resources, the locations hub, ...) is
 * market-neutral and keeps all three blocks, each labelled by market.
 *
 * It is a client component only because the footer lives in the root
 * layout, which cannot see the route; `usePathname()` resolves the market at
 * static-export time, so the market-scoped HTML carries one number and no
 * client work is needed to show it. Values are read from
 * `marketOperatingDetail` here, not passed as props, so the page's serialized
 * component payload never carries another market's number. Nothing is typed
 * here.
 */
const contacts = marketList.flatMap((market) => {
  const detail = marketOperatingDetail[market.id]
  return detail === undefined
    ? []
    : [
        {
          marketId: market.id,
          city: market.city,
          pathPrefix: marketPathname(market.id),
          phone: detail.phone,
          phoneE164: detail.phoneE164,
          email: detail.email,
        },
      ]
})

export function FooterContacts() {
  const pathname = usePathname() ?? ''
  // Location and service + location pages live at `/locations/{market}/...`
  // (DEC-141); they are scoped to that market exactly like `/{market}/...`.
  const scoped = contacts.find(
    (c) =>
      pathname.startsWith(c.pathPrefix) ||
      pathname === c.pathPrefix.slice(0, -1) ||
      pathname.startsWith(`/locations${c.pathPrefix}`) ||
      pathname === `/locations${c.pathPrefix.slice(0, -1)}`,
  )
  const shown = scoped !== undefined ? [scoped] : contacts

  return (
    <div className="mt-6 flex flex-col gap-1 text-sm">
      {shown.map((contact, i) => (
        <div key={contact.marketId} className="flex flex-col gap-1">
          <p className={i === 0 ? 'opacity-70' : 'mt-3 opacity-70'}>{contact.city}</p>
          <TrackedPhoneLink
            phoneE164={contact.phoneE164}
            ctaLocation="footer"
            context={{ market_id: contact.marketId }}
            className="hover:underline"
          >
            {contact.phone}
          </TrackedPhoneLink>
          <a href={`mailto:${contact.email}`} className="hover:underline">
            {contact.email}
          </a>
        </div>
      ))}
    </div>
  )
}
