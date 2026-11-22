/**
 * SMS consent copy for the lead forms. Owner-provided wording, used exactly as
 * given. Do not edit a string in place: a wording change is a NEW version
 * (add `sms-consent-v2` below and point `SMS_CONSENT_VERSION` at it), so the
 * wording a visitor agreed to can always be identified from the version id sent
 * with the form.
 *
 * The sender named in the copy is The Sewer Pros (v2, DEC-161, 2026-11-22). Version
 * `sms-consent-v1` (2026-10-12, DEC-146) named a different business name by mistake; its
 * text is no longer shown and is kept only in git history. Contacts recorded under v1
 * keep that version id, so they can be told apart.
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

export const SMS_CONSENT_V2: SmsConsentCopy = {
  version: 'sms-consent-v2',
  date: '2026-11-22',
  nonMarketing:
    'By checking this box, I consent to receive non-marketing text messages from The Sewer Pros about appointments, service updates, and account notifications. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help.',
  marketing:
    'By checking this box, I consent to receive marketing text messages from The Sewer Pros about special offers, discounts, and promotions. Message frequency may vary. Message and data rates may apply. Reply STOP to opt out. Reply HELP for help.',
}

/** The wording the forms show today. */
export const SMS_CONSENT = SMS_CONSENT_V2

/**
 * Version ids the lead function accepts: the current one, and the retired v1 so a visitor who
 * loaded the form before the change is not refused. Retired ids are never shown to anyone.
 */
export const SMS_CONSENT_ACCEPTED_VERSIONS: readonly string[] = [SMS_CONSENT_V2.version, 'sms-consent-v1']

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
