// Candidate intake form integration utilities

// ─── Tally Form IDs ─────────────────────────────────────────
export const TALLY_FORMS = {
  // Candidate intake ("Campaign Builder") form.
  CANDIDATE_INTAKE: "NpyPkG",
} as const;

// ─── Tally candidate intake popup ───────────────────────────
export function openCandidateForm(): void {
  if (window.Tally) {
    window.Tally.openPopup(TALLY_FORMS.CANDIDATE_INTAKE, {
      width: 700,
      layout: "default",
      emoji: { text: "👋", animation: "wave" },
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
