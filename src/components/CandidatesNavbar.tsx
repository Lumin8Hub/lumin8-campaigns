import { useEffect, useState } from "react";
import lumin8Logo from "@/assets/lumin8-logo.png";
import { openCandidateForm } from "@/lib/tally";

const CandidatesNavbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed left-1/2 top-4 z-50 flex w-[92%] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full px-6 transition-all duration-300 ${
        scrolled
          ? "border border-foreground/10 py-2 shadow-sm"
          : "border border-transparent py-3"
      }`}
      style={{
        backdropFilter: scrolled ? "blur(12px)" : "none",
        background: scrolled ? "rgba(255, 255, 255, 0.88)" : "transparent",
      }}
    >
      <a
        href="https://lumin8.agency"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Lumin8 — visit lumin8.agency"
        className="flex min-h-[44px] items-center"
      >
        <img src={lumin8Logo} alt="LUMIN8" className="h-7 w-auto" />
      </a>

      <button
        onClick={openCandidateForm}
        className="min-h-[44px] rounded-full bg-cta px-5 py-2 font-heading text-sm font-semibold text-accent-foreground transition-transform duration-300 hover:scale-[1.03]"
      >
        Get Started
      </button>
    </nav>
  );
};

export default CandidatesNavbar;
