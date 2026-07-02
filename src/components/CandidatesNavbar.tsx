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
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-5xl rounded-full px-6 py-3 flex items-center justify-between transition-all duration-300 ${
        scrolled ? "border border-foreground/[0.06]" : "bg-transparent"
      }`}
      style={{
        backdropFilter: scrolled ? "blur(12px)" : "none",
        background: scrolled ? "rgba(13, 17, 23, 0.8)" : "transparent",
      }}
    >
      <a
        href="https://lumin8.agency"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Lumin8 — visit lumin8.agency"
      >
        <img src={lumin8Logo} alt="LUMIN8" className="h-7 w-auto" />
      </a>

      <button
        onClick={openCandidateForm}
        className="bg-primary text-primary-foreground font-heading font-semibold text-sm px-5 py-2 rounded-full hover:scale-[1.03] transition-transform duration-300"
      >
        Start Your Website →
      </button>
    </nav>
  );
};

export default CandidatesNavbar;
