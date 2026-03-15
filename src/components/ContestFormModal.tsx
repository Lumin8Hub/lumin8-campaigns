import { useEffect, useState, useCallback, useRef } from "react";

const HUBSPOT_CONFIG = {
  portalId: "343089620",
  formId: "5812dc69-69e4-4523-8701-2ced01b21ee0",
  region: "na3",
} as const;

const ContestFormModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setIsOpen(false), []);

  // Listen for the custom open event
  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-contest-form", handleOpen);
    return () => window.removeEventListener("open-contest-form", handleOpen);
  }, []);

  // Create the HubSpot form when modal opens
  useEffect(() => {
    if (!isOpen || !containerRef.current) return;

    // Clear any previous form
    containerRef.current.innerHTML = "";

    // Try hbspt.forms.create (available from the HubSpot embed script)
    const hbspt = (window as Record<string, unknown>).hbspt as
      | { forms?: { create: (opts: Record<string, unknown>) => void } }
      | undefined;

    if (hbspt?.forms?.create) {
      hbspt.forms.create({
        portalId: HUBSPOT_CONFIG.portalId,
        formId: HUBSPOT_CONFIG.formId,
        region: HUBSPOT_CONFIG.region,
        target: "#hubspot-contest-form",
      });
    } else {
      // Fallback: insert the declarative hs-form-frame div
      const div = document.createElement("div");
      div.className = "hs-form-frame";
      div.setAttribute("data-region", HUBSPOT_CONFIG.region);
      div.setAttribute("data-form-id", HUBSPOT_CONFIG.formId);
      div.setAttribute("data-portal-id", HUBSPOT_CONFIG.portalId);
      containerRef.current.appendChild(div);
    }
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] flex items-center justify-center"
      onClick={close}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Modal container */}
      <div
        className="contest-form-modal relative z-10 w-full max-w-[700px] max-h-[90vh] mx-4 overflow-y-auto rounded-2xl border border-primary/15 bg-[#0D0D0D] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={close}
          className="absolute top-4 right-4 z-20 text-slate-400 hover:text-white transition-colors text-2xl leading-none p-1"
          aria-label="Close form"
        >
          ×
        </button>

        {/* Form container */}
        <div className="p-6 md:p-8">
          <div
            id="hubspot-contest-form"
            ref={containerRef}
            className="min-h-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default ContestFormModal;
