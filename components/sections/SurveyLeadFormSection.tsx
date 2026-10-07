import { Section } from "@/components/ui";
import { SurveyLeadForm, type SurveyLeadFormProps } from "./SurveyLeadForm";

/**
 * Standalone page section holding the survey form, for templates that place
 * the form between content sections instead of inside a hero or CTA band.
 */
export function SurveyLeadFormSection({
  idPrefix = "section-survey",
  ...props
}: SurveyLeadFormProps) {
  const headingId = props.headingId ?? `${idPrefix}-heading`;
  return (
    <Section density="standard" labelledBy={headingId}>
      <div className="mx-auto max-w-[var(--container-reading)] rounded-md border border-border bg-surface p-6 text-foreground shadow-sm sm:p-8">
        <SurveyLeadForm {...props} idPrefix={idPrefix} headingId={headingId} />
      </div>
    </Section>
  );
}
