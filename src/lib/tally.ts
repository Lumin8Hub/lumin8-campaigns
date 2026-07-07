// Candidate intake form integration utilities

// ─── Tally Form IDs ─────────────────────────────────────────
export const TALLY_FORMS = {
  // TODO: replace with the new five-field candidate intake form ID once it is
  // created in Tally. It should collect only election type, ward/riding, name,
  // phone number, and email. This temporary ID keeps every CTA functional.
  CANDIDATE_INTAKE: "44jQjd",
} as const;

// ─── Tally candidate intake popup ───────────────────────────
export function openCandidateForm(): void {
  if (window.Tally) {
    window.Tally.openPopup(TALLY_FORMS.CANDIDATE_INTAKE, {
      width: 700,
      layout: "default",
      onOpen: () => console.log("[Lumin8] Candidate intake form opened"),
      onSubmit: (payload: unknown) =>
        console.log("[Lumin8] Candidate intake form submitted", payload),
    });
  } else {
    window.open(
      `https://tally.so/r/${TALLY_FORMS.CANDIDATE_INTAKE}`,
      "_blank",
    );
  }
}

// ─── Type declarations ──────────────────────────────────────
declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: Record<string, unknown>) => void;
      loadEmbeds: () => void;
    };
  }
}
