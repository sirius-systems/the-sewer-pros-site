import Link from 'next/link'
import { marketList, marketOperatingDetail } from '@/data/markets/markets'

/**
 * Terms and Conditions copy (core-terms, /terms/).
 *
 * Copy is the owner-approved text from claude/terms-page-content.md (2026-11-23).
 * Website-use terms only; Missouri governing law. Do not add claims about pricing,
 * warranties, guarantees, response times, licensing, insurance or availability, and
 * do not add arbitration, class waiver or indemnity clauses without counsel.
 * Not legal advice: counsel review is a launch follow-up (docs/launch-checklist.md).
 */

/**
 * Display date for "Last updated" (same value as the privacy and SMS terms pages).
 * If it is ever empty, the page falls back to "To be set at launch".
 */
export const TERMS_LAST_UPDATED: string = 'June 1, 2026'

export const termsSeo = {
  title: 'Terms and Conditions',
  description:
    'The terms for using thesewerpros.com, including how we use website content, what a service request does and does not do, and how disputes are handled.',
} as const

const EMAIL = 'info@thesewerpros.com'

export function TermsBody() {
  const phones = marketList.flatMap((market) => {
    const detail = marketOperatingDetail[market.id]
    return detail === undefined ? [] : [{ id: market.id, city: market.city, ...detail }]
  })

  return (
    <>
      <p>
        <strong>Last updated:</strong>{' '}
        {TERMS_LAST_UPDATED === '' ? 'To be set at launch' : TERMS_LAST_UPDATED}
      </p>
      <p>
        These terms apply to your use of thesewerpros.com (the &quot;Site&quot;), which is operated
        by The Sewer Pros (&quot;we,&quot; &quot;us,&quot; &quot;our&quot;). By using the Site, you
        agree to these terms. If you do not agree, please do not use the Site. These terms cover
        use of the Site only. They do not set the terms of any service we perform, which we confirm
        with you directly.
      </p>

      <h2>What the Site is for</h2>
      <p>
        The Site provides general information about sewer camera inspection, sewer cleaning, hydro
        jetting, line locating and related services, and lets you contact us. The content is for
        general information only. It is not engineering, legal, insurance, real estate or other
        professional advice, and it does not describe the condition of any specific property.
      </p>
      <p>
        Information about city, county and utility programs is summarized from public sources and
        can change. Check with the agency itself before relying on it.
      </p>

      <h2>Requests and appointments</h2>
      <p>
        Submitting a form, calling or texting us is a request for contact. It does not create an
        agreement for service, reserve an appointment, or guarantee that a service is available at
        your property or in your area. Service details are confirmed with you directly when we
        respond.
      </p>

      <h2>Using the Site</h2>
      <p>You agree to use the Site lawfully and not to:</p>
      <ul>
        <li>
          submit false or misleading information, or contact us on behalf of someone else without
          their permission;
        </li>
        <li>try to interfere with the Site, its security, or other visitors&apos; use of it;</li>
        <li>
          use automated tools to scrape, copy or collect content or contact details from the Site,
          except ordinary search-engine indexing;
        </li>
        <li>use the Site to send spam or unlawful, harassing or harmful material.</li>
      </ul>

      <h2>Information you send us</h2>
      <p>
        Please do not include payment card numbers, bank details, Social Security numbers or
        government ID numbers in a form or message. How we handle the information you send is
        described in our <Link href="/privacy/">Privacy Policy</Link>. Text messages are covered by
        our <Link href="/sms-terms/">SMS Terms</Link>.
      </p>

      <h2>Our content</h2>
      <p>
        The text, images, video, logos, design and other content on the Site belong to The Sewer
        Pros or are used with permission, and are protected by intellectual property laws. You may
        view and print pages for your own personal, non-commercial use. You may not copy,
        republish, sell or create derivative works from the Site&apos;s content without our written
        permission. Other companies&apos; names and marks that appear on the Site belong to their
        owners.
      </p>

      <h2>Third-party links</h2>
      <p>
        The Site may link to other websites, such as city, county and utility programs. We do not
        control those sites and are not responsible for their content or practices. A link is not
        an endorsement.
      </p>

      <h2>Disclaimer</h2>
      <p>
        The Site and its content are provided &quot;as is&quot; and &quot;as available.&quot; To
        the fullest extent the law allows, we make no warranties of any kind, express or implied,
        about the Site, including that it will be accurate, complete, current, uninterrupted or
        error-free, or that it is suitable for any particular purpose.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent the law allows, The Sewer Pros and its owners, employees and
        contractors are not liable for any indirect, incidental, special, consequential or punitive
        damages, or for any loss arising from your use of, or inability to use, the Site or from
        relying on its content. Nothing in these terms limits liability that cannot be limited by
        law.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Missouri, without regard to its
        conflict-of-law rules. Any dispute about these terms or your use of the Site will be
        brought in the state or federal courts located in Missouri, and you consent to their
        jurisdiction.
      </p>

      <h2>Changes to the Site and these terms</h2>
      <p>
        We may change or remove content on the Site, and may update these terms, at any time. The
        &quot;Last updated&quot; date above shows the current version. Using the Site after a
        change means you accept the updated terms.
      </p>

      <h2>Contact us</h2>
      <p>
        Questions about these terms: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      </p>
      <ul>
        {phones.map((p) => (
          <li key={p.id}>
            {p.city}: <a href={`tel:${p.phoneE164}`}>{p.phone}</a>
          </li>
        ))}
      </ul>
    </>
  )
}
