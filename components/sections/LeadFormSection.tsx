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
import { serviceList } from '@/data/services'
import { marketList } from '@/data/markets/markets'

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
 * NO SUCCESS MESSAGE IS SHOWN
 * ===========================================================================
 * The obvious stub is a "Thanks, we will be in touch" confirmation.
 * That would be a false statement of fact to a customer: nothing was
 * received and no one will be in touch. CLAUDE.md §24 forbids inventing
 * business facts, and a delivery promise is one. So the button reports
 * only that the form is not yet connected, which is true.
 */

/** Analytics form type. This is the general service form (19 §14). */
const FORM_TYPE = 'general_service' as const

/**
 * Service options, read from the canonical registry.
 *
 * All 18 records, never a hand-typed list, so a registry change reaches
 * the form automatically. `name` is the registry's display string.
 *
 * Commercial records repeat five core slugs, so the option VALUE is the
 * unique `serviceId` rather than the slug. Two options reading
 * "Sewer Camera Inspection" would otherwise be indistinguishable in the
 * submitted payload.
 */
const SERVICE_OPTIONS: readonly SelectOption[] = [
  ...serviceList.map((service) => ({
    value: service.serviceId,
    label: service.name,
  })),
  // 17 §33: someone who cannot name the service still needs a route in.
  { value: 'not-sure', label: 'Not sure which service I need' },
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
}

export function LeadFormSection({
  density = 'standard',
  id = 'request-service',
  surface = 'muted',
  title = 'Request service',
  intro,
  bare = false,
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
      <Field htmlFor="lead-first-name" label="First name" required>
        <TextInput
          id="lead-first-name"
          name="firstName"
          type="text"
          autoComplete="given-name"
          required
          aria-required
        />
      </Field>

      <Field htmlFor="lead-last-name" label="Last name" required>
        <TextInput
          id="lead-last-name"
          name="lastName"
          type="text"
          autoComplete="family-name"
          required
          aria-required
        />
      </Field>

      <Field htmlFor="lead-phone" label="Phone" required>
        <TextInput
          id="lead-phone"
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
        legend="Preferred method of contact"
        options={CONTACT_METHOD_OPTIONS}
        required
      />

      <Field
        htmlFor="lead-service"
        label="Service needed"
        required
        className="sm:col-span-2"
      >
        <Select
          id="lead-service"
          name="service"
          options={SERVICE_OPTIONS}
          placeholder="Select a service"
          required
          aria-required
        />
      </Field>

      <Field
        htmlFor="lead-market"
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
          id="lead-market"
          name="market"
          options={MARKET_OPTIONS}
          placeholder="Select your location"
          required
          aria-required
        />
      </Field>

      <Field htmlFor="lead-message" label="Message" className="sm:col-span-2">
        <Textarea id="lead-message" name="message" />
      </Field>

      <div className="sm:col-span-2">
        <Button type="submit">Request service</Button>
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
