import Link from 'next/link'
import { marketList, marketOperatingDetail } from '@/data/markets/markets'

/**
 * Privacy Policy copy (core-privacy, /privacy/).
 *
 * Copy is the owner-approved text from claude/privacy-policy-page-content.md,
 * section 2 (2026-11-23). Do not add claims (retention periods, certifications,
 * vendor names, response times). Not legal advice: counsel review is a launch
 * follow-up (see docs/launch-checklist.md).
 */

/**
 * Display date for "Last updated" (owner set June 1, 2026). If it is ever empty, the
 * page falls back to "To be set at launch" rather than showing an invented date.
 */
export const PRIVACY_LAST_UPDATED: string = 'June 1, 2026'

export const privacySeo = {
  title: 'Privacy Policy',
  description:
    'How The Sewer Pros collects, uses and protects information from our website, request forms, calls and text messages, and how to make a privacy request.',
} as const

const EMAIL = 'info@thesewerpros.com'

export function PrivacyBody() {
  const phones = marketList.flatMap((market) => {
    const detail = marketOperatingDetail[market.id]
    return detail === undefined ? [] : [{ id: market.id, city: market.city, ...detail }]
  })

  return (
    <>
      <p>
        This policy explains what information The Sewer Pros collects through this website and
        our request forms, how we use it, who it may be shared with, and the choices you have. We
        keep it short and specific to what this site actually does.
      </p>
      <p>
        <strong>Last updated:</strong>{' '}
        {PRIVACY_LAST_UPDATED === '' ? 'To be set at launch' : PRIVACY_LAST_UPDATED}
      </p>

      <h2>Who we are</h2>
      <p>
        The Sewer Pros provides sewer camera inspection, sewer cleaning, hydro jetting, line
        locating and related services in the St. Louis, San Diego and Las Vegas areas. In this
        policy, &quot;we,&quot; &quot;us&quot; and &quot;our&quot; mean The Sewer Pros. Our
        website is thesewerpros.com.
      </p>

      <h2>Information we collect</h2>
      <p>
        <strong>Information you give us.</strong> When you submit a request form, we collect your
        first and last name, phone number, whether you prefer a call or a text, the service you
        need, the market or location you are asking about, and anything you choose to write in the
        message field. If you call us or text us, we receive your phone number and whatever you
        tell us.
      </p>
      <p>
        <strong>Job applications.</strong> If you apply through our careers page, we collect the
        information you submit, such as your name, contact details and resume, and use it to
        evaluate your application for openings in St. Louis, San Diego and Las Vegas. Applications
        are received at {EMAIL}.
      </p>
      <p>
        <strong>Information collected automatically.</strong> When you visit the site, our hosting
        provider and analytics tool may collect technical information such as your IP address,
        browser and device type, the pages you view, the page that referred you, and how you move
        through the site. Some of this is collected using cookies or similar technologies (see
        &quot;Cookies and analytics&quot; below).
      </p>
      <p>
        <strong>What we do not collect.</strong> The website does not ask for payment card numbers,
        bank account details, Social Security numbers or government ID numbers. Please do not put
        those in the message field.
      </p>

      <h2>How we use information</h2>
      <ul>
        <li>To respond to your request, schedule service, and follow up about your inquiry.</li>
        <li>
          To contact you by the method you chose (call or text), including text messages you have
          agreed to receive.
        </li>
        <li>
          To understand how the site is used and improve it, including which pages and services
          people look for in each market.
        </li>
        <li>To keep the site secure, prevent abuse, and meet legal obligations.</li>
      </ul>

      <h2>Text messages</h2>
      <p>
        Choosing &quot;Text&quot; as a contact preference is optional. We send text messages only
        to people who have agreed to receive them, and the consent wording is shown on the form at
        the point where you agree. When you opt in, we collect your name and phone number. We use
        them to send messages about your request and, if you also agreed to marketing texts,
        notifications, alerts and promotions, and to comply with 10-Digit Long Code (10DLC)
        messaging requirements. Marketing texts are separate from texts about your own request,
        and agreeing to one does not require agreeing to the other.
      </p>
      <p>
        We may share your information with the providers that deliver our text messages, only for
        that purpose. Those providers will not sell or share your information for marketing
        purposes. You can opt out of texts at any time by replying STOP to a message, or by
        emailing the address in &quot;Contact us&quot; below. Message and data rates from your
        carrier may apply. The terms of our text messaging program are on our{' '}
        <Link href="/sms-terms/">SMS Terms</Link> page.
      </p>

      <h2>Cookies and analytics</h2>
      <p>
        We use Google Analytics 4 to measure site traffic and which pages and calls to action lead
        to requests. It uses cookies or similar identifiers to recognize a browser across page
        views. We configure it for measurement only: we do not use it for advertising, we do not
        turn on ad personalization, and we do not send your name, phone number, email address,
        street address or message text to it.
      </p>
      <p>
        Our hosting and security provider, Cloudflare, also processes request data (such as IP
        address and browser details) to deliver the site, protect it from attacks, and report
        traffic volume.
      </p>
      <p>
        You can block or delete cookies in your browser settings, and you can use Google&apos;s
        browser add-on to opt out of Google Analytics. The site still works if you do.
      </p>

      <h2>Who we share information with</h2>
      <p>
        We share information only with service providers who help us run the business and the
        website, and only for those purposes. These include our hosting and security provider, our
        analytics provider, and the customer-management and messaging tools we use to receive and
        respond to your requests. We may also disclose information when the law requires it, to
        protect our rights or safety, or in connection with a sale or reorganization of the
        business.
      </p>
      <p>
        We do not sell your personal information. We do not share it for cross-context behavioral
        advertising.
      </p>

      <h2>How long we keep information</h2>
      <p>
        We keep request information for as long as we need it to respond to you, provide service,
        and keep ordinary business records, and then delete or de-identify it unless the law
        requires us to keep it longer. Analytics data is retained according to the settings of our
        analytics account.
      </p>

      <h2>How we protect information</h2>
      <p>
        We use reasonable administrative and technical safeguards for the information we hold. No
        website or method of transmission is completely secure, so we cannot guarantee absolute
        security.
      </p>

      <h2>Your choices and rights</h2>
      <p>
        You can ask us to tell you what personal information we hold about you, correct it, or
        delete it, and you can ask us to stop texting or calling you. To make a request, email{' '}
        <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. We may need to confirm your identity before acting
        on a request, and we will not treat you differently for making one.
      </p>

      <h2>California residents</h2>
      <p>
        If you are a California resident, you have the right to know what personal information we
        collect, use and disclose; to request deletion of personal information we collected from
        you; to correct inaccurate information; and to not be discriminated against for exercising
        these rights. In the past 12 months we collected the categories of information described
        above (identifiers such as name and phone number, internet activity such as pages viewed,
        and the content of messages you send us) for the business purposes described above. We
        have not sold personal information or shared it for cross-context behavioral advertising.
        You can submit a request through the email in &quot;Contact us,&quot; and you may use an
        authorized agent to do so.
      </p>

      <h2>Nevada residents</h2>
      <p>
        Nevada law lets residents opt out of the sale of certain personal information to third
        parties. We do not sell covered information. If you have a question or a request under
        Nevada law, contact us using the details below.
      </p>

      <h2>Missouri and other states</h2>
      <p>
        We apply the choices described in &quot;Your choices and rights&quot; to all visitors,
        regardless of where they live. If your state gives you additional rights, contact us and we
        will handle your request as the law requires.
      </p>

      <h2>Children</h2>
      <p>
        This website is for property owners and professionals. It is not directed to children under
        13 and we do not knowingly collect personal information from them.
      </p>

      <h2>Links to other sites</h2>
      <p>
        The site may link to other websites, such as city and utility programs. We do not control
        their privacy practices, so please review their policies.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy as the site or the law changes. The &quot;Last updated&quot; date
        above shows the current version.
      </p>

      <h2>Contact us</h2>
      <p>
        Email: <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
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
