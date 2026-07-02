// Form integration utilities for Lumin8 for Candidates

// ─── Tally Form IDs ─────────────────────────────────────────
export const TALLY_FORMS = {
  // TODO: replace with the dedicated "Campaign Builder" Tally form ID
  // (with Stripe payment block) once created. Currently points at the
  // existing Lumin8 intake form so every CTA stays functional.
  CANDIDATE_INTAKE: "44jQjd",
} as const;

// ─── Tally Campaign Builder popup ───────────────────────────
export function openCandidateForm(): void {
  if (window.Tally) {
    window.Tally.openPopup(TALLY_FORMS.CANDIDATE_INTAKE, {
      width: 700,
      layout: "default",
      onOpen: () => console.log("[Lumin8] Campaign Builder form opened"),
      onSubmit: (payload: unknown) =>
        console.log("[Lumin8] Campaign Builder form submitted", payload),
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
