import Link from 'next/link'
import { marketList, marketOperatingDetail } from '@/data/markets/markets'

/**
 * SMS Terms copy (core-sms-terms, /sms-terms/).
 *
 * Copy is from claude/sms-terms-page-content.md (2026-11-23): sections 1 to 3
 * come from the owner's two consent checkbox statements; the three "standard
 * additions" (not a condition of purchase, carriers, changes) go beyond that
 * wording and need owner or counsel confirmation before launch. Do not add
 * claims (sender number, program name, message counts). Never edit the form
 * consent wording here.
 */

/**
 * Display date for "Last updated" (owner set June 1, 2026). If it is ever empty, the
 * page falls back to "To be set at launch" rather than showing an invented date.
 */
export const SMS_TERMS_LAST_UPDATED: string = 'June 1, 2026'

export const smsTermsSeo = {
  title: 'SMS Terms',
  description:
    'Terms for text messages from The Sewer Pros, including what we send, how often, how to opt out with STOP, and how to get help.',
} as const

const EMAIL = 'info@thesewerpros.com'

export function SmsTermsBody() {
  const phones = marketList.flatMap((market) => {
    const detail = marketOperatingDetail[market.id]
    return detail === undefined ? [] : [{ id: market.id, city: market.city, ...detail }]
  })

  return (
    <>
      <p>
        <strong>Last updated:</strong>{' '}
        {SMS_TERMS_LAST_UPDATED === '' ? 'To be set at launch' : SMS_TERMS_LAST_UPDATED}
      </p>
      <p>
        These terms explain how text messaging works at The Sewer Pros. They apply when you check
        one of the text message consent boxes on our website forms. For how we handle your
        information, see our <Link href="/privacy/">Privacy Policy</Link>.
      </p>

      <h2>Two separate consents</h2>
      <p>
        We ask for text message consent in two separate boxes. You can check one, both, or
        neither. Checking one does not require you to check the other.
      </p>
      <p>
        <strong>1. Non-marketing text messages.</strong> If you check this box, you consent to
        receive non-marketing text messages from The Sewer Pros about appointments, service
        updates, and account notifications.
      </p>
      <p>
        <strong>2. Marketing text messages.</strong> If you check this box, you consent to receive
        marketing text messages from The Sewer Pros about special offers, discounts, and
        promotions.
      </p>

      <h2>Message frequency and costs</h2>
      <p>Message frequency may vary. Message and data rates may apply, depending on your mobile plan.</p>

      <h2>How to opt out</h2>
      <p>
        Reply <strong>STOP</strong> to any text message to opt out. You can opt out of marketing
        messages, non-marketing messages, or both. After you reply STOP, you may receive one final
        message confirming your request.
      </p>

      <h2>How to get help</h2>
      <p>
        Reply <strong>HELP</strong> to any text message for help. You can also reach us at{' '}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or by calling the phone number for your market,
        shown below.
      </p>
      <ul>
        {phones.map((p) => (
          <li key={p.id}>
            {p.city}: <a href={`tel:${p.phoneE164}`}>{p.phone}</a>
          </li>
        ))}
      </ul>
      <p>Consent to receive text messages is not a condition of buying any goods or services from us.</p>
      <p>Carriers are not liable for delayed or undelivered messages.</p>
      <p>We may update these terms. The Last updated date shows the current version.</p>

      <h2>Your information</h2>
      <p>
        We collect your name and phone number when you opt in. We may share it with the providers
        that deliver our text messages, only for that purpose. Those providers will not sell or
        share your information for marketing purposes. See our{' '}
        <Link href="/privacy/">Privacy Policy</Link> for details.
      </p>
    </>
  )
}
