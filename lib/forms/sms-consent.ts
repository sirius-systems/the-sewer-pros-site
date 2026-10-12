/**
 * SMS consent copy for the lead forms. Owner-provided wording, used exactly as
 * given. Do not edit a string in place: a wording change is a NEW version
 * (add `sms-consent-v2` below and point `SMS_CONSENT_VERSION` at it), so the
 * wording a visitor agreed to can always be identified from the version id sent
 * with the form.
 *
 * The sender named in the copy is SHH Group (owner decision, Oct 12, 2026,
 * recorded in docs/22-decisions-change-log.md).
 *
 * Both consents are optional and unchecked by default, and a form submits with
 * neither checked. Consent values go in the lead payload only and never to
 * analytics.
 */

export interface SmsConsentCopy {
  /** Version id sent with every lead. */
  readonly version: string
  /** Date this wording was provided or adopted. */
  readonly date: string
  readonly nonMarketing: string
  readonly marketing: string
}

export const SMS_CONSENT_V1: SmsConsentCopy = {
  version: 'sms-consent-v1',
  date: '2026-10-12',
  nonMarketing:
    'By checking this box, I consent to receive non-marketing text messages from SHH Group about appointments, service updates, and account notifications. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help.',
  marketing:
    'By checking this box, I consent to receive marketing text messages from SHH Group about special offers, discounts, and promotions. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help.',
}

/** The wording the forms show today. */
export const SMS_CONSENT = SMS_CONSENT_V1

/** Convenience for the lead payload. */
export const SMS_CONSENT_VERSION = SMS_CONSENT.version

/**
 * Privacy Policy and Terms pages. Both are undefined because neither page
 * exists on the site yet (the footer has no legal links). The consent block
 * shows the "See our Privacy Policy and Terms." line only when both hrefs are
 * set, so it never links to a page that is missing. Set them when the pages
 * exist and carry their own SMS section.
 */
export const SMS_LEGAL_LINKS: { privacy: string; terms: string } | undefined = undefined
