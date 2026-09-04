'use client'

import { useState, type FormEvent } from 'react'
import {
  Section,
  Field,
  TextInput,
  Textarea,
  Select,
  RadioGroup,
  Button,
  type SectionDensity,
  type SectionSurface,
  type SelectOption,
} from '@/components/ui'
import { SectionHeading } from './SectionHeading'
import { marketList } from '@/data/markets/markets'
import type { ServiceId } from '@/types'

/**
 * Unified sitewide lead form.
 *
 * Opens the gate PENDING-008 held closed. This component returned
 * `null` on every page until now; CLAUDE.md §58 held it shut until the
 * field list was decided, and claude/form-fields-and-consent-decision.md
 * (2026-09-01) decided it. The owner confirmed the field list directly
 * for this build.
 *
 * ⚠ THIS OPENS SITEWIDE. Seven templates already call this component:
 * Audience, Commercial, Home, Location, Market, ServiceLocation and
 * Service. All seven begin rendering a real form.
 *
 * ===========================================================================
 * ⚠⚠ TWO BLOCKERS BEFORE THIS IS LAUNCH-READY
 * ===========================================================================
 * 1. NO SUBMISSION ENDPOINT EXISTS. This repository has no `functions/`
 *    directory, no form service in `.env.example`, and no API route is
 *    possible under `output: 'export'`. `handleSubmit` below is a stub.
 *    Until it is wired, this form collects nothing: a visitor who fills
 *    it in and presses the button is not contacting anyone.
 *
 * 2. NO TCPA CONSENT COPY. See the note on the contact-method group.
 *
 * Neither is invented here. Both are flagged rather than papered over.
 *
 * ===========================================================================
 * NO SUCCESS MESSAGE IS SHOWN, AND THAT IS THE POINT
 * ===========================================================================
 * The obvious stub is a "Thanks, we will be in touch" confirmation.
 * That would be a false statement of fact to a customer: nothing was
 * received and no one will be in touch. CLAUDE.md §24 forbids inventing
 * business facts, and a delivery promise is one.
 *
 * So pressing submit currently does nothing visible. That is a poor
 * experience and it is not being defended as good: it is the honest
 * state of an unwired form, and the fix is blocker 1, not a message.
 * Do not paper over it with a confirmation.
 */

/** Analytics form type. This is the general service form (19 §14). */
const FORM_TYPE = 'general_service' as const

/**
 * What the service select submits: a canonical id, or "other".
 *
 * `ServiceId` is the existing type modelling registry ids, so the
 * pairing below is checked at compile time rather than being a loose
 * string. "Other" has no registry record and is deliberately outside
 * that union.
 */
type LeadServiceValue = ServiceId | 'other'

/**
 * Service options: a FIXED CURATED SET OF SEVEN, not the registry.
 *
 * ⚠ Deliberate, owner-specified, and not an oversight. Do not "fix"
 * this back to the full 18 records. The registry is the taxonomy; this
 * is a customer-facing menu, and 18 records (five of which repeat a
 * core name under a commercial record) is a worse thing to ask someone
 * to read than six plain choices and an escape hatch. `homeContent.services`
 * already does the same thing, showing a curated 9 of 18 on the grid.
 *
 * LABELS ARE SHORTHAND, VALUES ARE CANONICAL. "Sewer Cleaning &
 * Inspection" and "Line Location" are how customers say it; the values
 * are still `svc-sewer-cleaning-camera-inspection` and
 * `svc-sewer-line-locating`, so routing and analytics keep keying off
 * the registry taxonomy no matter how the label is worded.
 *
 * Typed against `ServiceId` rather than imported from `serviceList` on
 * purpose: this is a client component, and a type-only import keeps the
 * whole service registry out of the browser bundle while still failing
 * the build if one of these ids ever stops being canonical.
 */
const SERVICE_OPTIONS: readonly { value: LeadServiceValue; label: string }[] = [
  { value: 'svc-sewer-camera-inspection', label: 'Sewer Camera Inspection' },
  { value: 'svc-sewer-cleaning', label: 'Sewer Cleaning' },
  { value: 'svc-hydro-jetting', label: 'Hydro Jetting' },
  {
    value: 'svc-sewer-cleaning-camera-inspection',
    label: 'Sewer Cleaning & Inspection',
  },
  { value: 'svc-sewer-line-locating', label: 'Line Location' },
  { value: 'svc-drain-cleaning', label: 'Drain Cleaning' },
  // No canonical record, so a literal. Someone who cannot place their
  // problem in the list above still needs a way through (17 §33).
  { value: 'other', label: 'Other' },
]

/** The three approved markets, using their registry display names. */
const MARKET_OPTIONS: readonly SelectOption[] = marketList.map((market) => ({
  value: market.id,
  label: market.name,
}))

const CONTACT_METHOD_OPTIONS: readonly SelectOption[] = [
  { value: 'call', label: 'Call' },
  { value: 'text', label: 'Text' },
]

export interface LeadFormSectionProps {
  density?: SectionDensity
  id?: string
  surface?: SectionSurface
  title?: string
  intro?: string
  /**
   * Renders the form without its own `Section` wrapper.
   *
   * For a parent that already supplies surface and container, such as
   * `CtaSection`'s `split` proof slot. Defaults to false, so the seven
   * existing bare call sites keep their standalone section.
   */
  bare?: boolean
  /**
   * Prefix for this instance's field ids. Defaults to `lead`.
   *
   * ⚠ REQUIRED WHEN A PAGE RENDERS THIS FORM TWICE. The homepage now
   * does: once in the hero and once in the closing CTA. Field ids were
   * hardcoded, so a second instance emitted a duplicate id for every
   * input and each `<label>` resolved to the FIRST form's control —
   * clicking "Phone" in the lower form focused the hero's. Invalid
   * HTML, and a real keyboard and screen-reader failure rather than a
   * validator complaint.
   *
   * Only the ids vary. `name` is untouched on every field, so whatever
   * endpoint eventually closes PENDING-018 receives the same payload
   * shape from either instance.
   */
  idPrefix?: string
}

export function LeadFormSection({
  density = 'standard',
  id = 'request-service',
  surface = 'muted',
  title = 'Request service',
  intro,
  bare = false,
  idPrefix = 'lead',
}: LeadFormSectionProps = {}) {
  const [started, setStarted] = useState(false)

  /**
   * Fires `form_start` once, on first real interaction.
   *
   * 19 §16: not on render. A section scrolling into view is not an
   * interaction, and counting it as one inflates the funnel.
   */
  function handleFirstInput() {
    if (started) return
    setStarted(true)
    void import('@/lib/analytics').then((m) => m.trackFormStart(FORM_TYPE))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    // TODO: wire to the approved form-submission endpoint once selected.
    // Nothing is sent yet and no endpoint exists to send it to.
    //
    // ⚠ Do NOT call trackFormSubmitted() from here. 19 §17 and this
    // project's own helper doc say the conversion event fires on a
    // SUCCESSFUL submission only. Firing it on a stub would report
    // leads that were never received.
  }

  const form = (
    <form
      onSubmit={handleSubmit}
      onInput={handleFirstInput}
      noValidate={false}
      className="grid gap-x-6 gap-y-5 sm:grid-cols-2"
    >
      <Field htmlFor={`${idPrefix}-first-name`} label="First name" required>
        <TextInput
          id={`${idPrefix}-first-name`}
          name="firstName"
          type="text"
          autoComplete="given-name"
          required
          aria-required
        />
      </Field>

      <Field htmlFor={`${idPrefix}-last-name`} label="Last name" required>
        <TextInput
          id={`${idPrefix}-last-name`}
          name="lastName"
          type="text"
          autoComplete="family-name"
          required
          aria-required
        />
      </Field>

      <Field htmlFor={`${idPrefix}-phone`} label="Phone" required>
        <TextInput
          id={`${idPrefix}-phone`}
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          aria-required
        />
      </Field>

      {/*
        TODO(legal): TCPA consent disclosure for the "Text" option is
        PENDING BUSINESS AND LEGAL SIGN-OFF and is deliberately absent.

        claude/form-fields-and-consent-decision.md holds that offering
        "Text" implies the business may text whoever selects it, which
        normally requires a short consent disclosure beside the submit
        button, and that "Text" should not ship selectable until that
        copy exists and is approved.

        The owner directed the Call/Text radio to ship in this build, so
        it ships. The disclosure copy is NOT drafted here: inventing
        consent language is exactly the kind of legal claim CLAUDE.md
        §24 and §3 reserve for the business. This is a known compliance
        gap carried forward at the owner's direction, not a closed one.
      */}
      <RadioGroup
        name="contactMethod"
        idPrefix={`${idPrefix}-contact-method`}
        legend="Preferred method of contact"
        options={CONTACT_METHOD_OPTIONS}
        required
      />

      <Field
        htmlFor={`${idPrefix}-service`}
        label="Service needed"
        required
        className="sm:col-span-2"
      >
        <Select
          id={`${idPrefix}-service`}
          name="service"
          options={SERVICE_OPTIONS}
          placeholder="Select a service"
          required
          aria-required
        />
      </Field>

      <Field
        htmlFor={`${idPrefix}-market`}
        label="Location"
        required
        className="sm:col-span-2"
      >
        {/*
          No prefill. This form renders on market pages and sitewide
          pages alike, and the homepage is market-agnostic: defaulting
          to any one market would answer the question for the visitor
          and quietly mislabel leads from the other two.
        */}
        <Select
          id={`${idPrefix}-market`}
          name="market"
          options={MARKET_OPTIONS}
          placeholder="Select your location"
          required
          aria-required
        />
      </Field>

      <Field htmlFor={`${idPrefix}-message`} label="Message" className="sm:col-span-2">
        <Textarea id={`${idPrefix}-message`} name="message" />
      </Field>

      {/*
        Centred on owner direction. `flex justify-center` rather than
        `text-center`: the Button is `inline-flex`, so centring the
        text inside it would do nothing to where the button itself
        sits.

        This is the one submit button for every instance of this form —
        the hero, the closing CTA, and the seven templates that render
        it standalone — so they stay consistent with each other.
      */}
      <div className="flex justify-center sm:col-span-2">
        <Button type="submit">Request Service</Button>
      </div>
    </form>
  )

  if (bare) {
    return (
      <div>
        <h2 id={id} className="text-h3 font-semibold tracking-tight">
          {title}
        </h2>
        <div className="mt-6">{form}</div>
      </div>
    )
  }

  return (
    <Section density={density} surface={surface} labelledBy={id}>
      <SectionHeading id={id} title={title} intro={intro} />
      <div className="mt-8 max-w-[var(--container-reading)]">{form}</div>
    </Section>
  )
}
