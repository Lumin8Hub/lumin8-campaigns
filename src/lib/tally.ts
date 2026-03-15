// Form integration utilities for Lumin8 Starter

// ─── Tally Form IDs (onboarding only) ──────────────────────
export const TALLY_FORMS = {
  CLIENT_ONBOARDING: "44jQjd",
} as const;

// ─── HubSpot contest form ───────────────────────────────────
// Opens via a custom DOM event; ContestFormModal listens for it.
const HUBSPOT_FALLBACK_URL =
  "https://5o9ln8.share-na3.hsforms.com/2WBLcaWnkRSOHASztAbIe4A";

export function openContestForm(): void {
  window.dispatchEvent(new CustomEvent("open-contest-form"));

  // If the modal isn't mounted (shouldn't happen), fall back to opening the
  // HubSpot share link in a new tab after a brief delay.
  setTimeout(() => {
    const modal = document.querySelector(".contest-form-modal");
    if (!modal) {
      window.open(HUBSPOT_FALLBACK_URL, "_blank");
    }
  }, 100);
}

// ─── Tally onboarding popup ─────────────────────────────────
export function openOnboardingForm(): void {
  if (window.Tally) {
    window.Tally.openPopup(TALLY_FORMS.CLIENT_ONBOARDING, {
      width: 700,
      layout: "default",
      onOpen: () => console.log("[Lumin8] Onboarding form opened"),
      onSubmit: (payload: unknown) =>
        console.log("[Lumin8] Onboarding form submitted", payload),
    });
  } else {
    window.open(
      `https://tally.so/r/${TALLY_FORMS.CLIENT_ONBOARDING}`,
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
