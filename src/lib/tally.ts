// Tally form integration utilities for Lumin8 Starter

// ─── Form IDs — replace with actual Tally form IDs ─────────
export const TALLY_FORMS = {
  CONTEST_APPLICATION: "2ErX4g",
  CLIENT_ONBOARDING: "44jQjd",
} as const;

// ─── Shared popup options ──────────────────────────────────
const basePopupOptions = {
  width: 700,
  emoji: { text: "\u{1F44B}", animation: "wave" },
  autoClose: 3000,
  showOnce: false,
};

// ─── Popup functions ───────────────────────────────────────

export function openContestForm(): void {
  if (window.Tally) {
    window.Tally.openPopup(TALLY_FORMS.CONTEST_APPLICATION, {
      ...basePopupOptions,
      overlay: true,
      layout: "default",
      onOpen: () => console.log("[Lumin8] Contest form opened"),
      onClose: () => console.log("[Lumin8] Contest form closed"),
      onSubmit: (payload: unknown) =>
        console.log("[Lumin8] Contest form submitted", payload),
    });
  } else {
    window.open(
      `https://tally.so/r/${TALLY_FORMS.CONTEST_APPLICATION}`,
      "_blank",
    );
  }
}

export function openOnboardingForm(): void {
  if (window.Tally) {
    window.Tally.openPopup(TALLY_FORMS.CLIENT_ONBOARDING, {
      ...basePopupOptions,
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

// ─── Type declaration ──────────────────────────────────────
declare global {
  interface Window {
    Tally?: {
      openPopup: (formId: string, options?: Record<string, unknown>) => void;
      loadEmbeds: () => void;
    };
  }
}
