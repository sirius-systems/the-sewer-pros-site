import Link from 'next/link'
import { SMS_CONSENT, SMS_LEGAL_LINKS } from '@/lib/forms/sms-consent'

/**
 * The two SMS consent checkboxes shared by every lead form that collects a
 * phone number. The wording comes from one place, lib/forms/sms-consent.ts.
 *
 * Rules (docs/17-conversion-architecture.md, CLAUDE.md):
 * - two separate checkboxes, never bundled, neither checked by default;
 * - neither is required, so a form submits with both unchecked;
 * - shown directly under the phone and preferred-contact fields, above the
 *   submit button;
 * - the label text is the consent copy only. The Privacy Policy and Terms
 *   line sits outside the labels and appears only when those pages exist.
 *
 * The inputs are plain uncontrolled checkboxes named smsNonMarketingConsent
 * and smsMarketingConsent; a form reads them with FormData ("on" when checked).
 */
const BOXES = [
  { name: 'smsNonMarketingConsent', text: SMS_CONSENT.nonMarketing },
  { name: 'smsMarketingConsent', text: SMS_CONSENT.marketing },
] as const

export function SmsConsent({ idPrefix, className }: { idPrefix: string; className?: string }) {
  return (
    <div className={className} data-sms-consent-version={SMS_CONSENT.version}>
      <div className="flex flex-col gap-2">
        {BOXES.map((box) => {
          const id = `${idPrefix}-${box.name}`
          return (
            <label
              key={box.name}
              htmlFor={id}
              className="flex min-h-11 cursor-pointer items-start gap-3 py-1 text-base leading-6 text-foreground sm:text-sm"
            >
              <input
                type="checkbox"
                id={id}
                name={box.name}
                className="mt-0.5 h-6 w-6 shrink-0 cursor-pointer rounded-sm border-border text-accent-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-secondary"
              />
              <span>{box.text}</span>
            </label>
          )
        })}
      </div>
      {SMS_LEGAL_LINKS !== undefined && (
        <p className="mt-2 text-caption text-muted-foreground">
          See our{' '}
          <Link href={SMS_LEGAL_LINKS.privacy} className="underline underline-offset-4 hover:text-foreground">
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link href={SMS_LEGAL_LINKS.terms} className="underline underline-offset-4 hover:text-foreground">
            Terms
          </Link>
          .
        </p>
      )}
    </div>
  )
}
