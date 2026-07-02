import { useEffect } from "react";
import { gsap } from "gsap";
import { CheckCircle2 } from "lucide-react";
import MagneticButton from "./animations/MagneticButton";
import SparkleBackground from "./animations/SparkleBackground";
import { openCandidateForm } from "@/lib/tally";

const trustItems = [
  "Live 2026 campaign site in our portfolio",
  "Flat pricing, no surprises",
  "Built with Canadian election finance rules in mind",
];

const CandidatesHero = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" })
        .from(".hero-headline", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
        .from(".hero-subline", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".hero-body", { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .from(".hero-ctas", { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3");
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative min-h-[100dvh] flex items-end overflow-hidden bg-background">
      {/* Calm lavender + teal blob field */}
      <div className="blob blob-lavender w-[28rem] h-[28rem] -top-32 -right-24 opacity-25 blur-[110px]" />
      <div className="blob blob-green w-80 h-80 top-1/3 -left-32 opacity-20 blur-[100px]" />
      <div className="blob blob-lavender w-64 h-64 bottom-10 right-1/4 opacity-15 blur-[90px]" />
      <SparkleBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-16 md:pb-24 pt-32 w-full">
        <span className="hero-eyebrow section-label">
          Lumin8 for Candidates · 2026 Municipal Elections
        </span>

        <h1
          className="hero-headline font-heading font-extrabold tracking-[-0.03em] leading-[1.05] text-foreground mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          Your campaign website.
          <br />
          Live in 3 days. $1,000 flat.
        </h1>

        <p
          className="hero-subline font-serif italic text-primary mb-6"
          style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
        >
          Built by people who actually run a 2026 municipal campaign.
        </p>

        <p className="hero-body max-w-xl text-lumin8-gray-400 text-lg leading-relaxed mb-8">
          Not a generic web shop. Professional, mobile-first, election-aware,
          on your own domain.
        </p>

        <div className="hero-ctas flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
          <MagneticButton
            as="button"
            onClick={openCandidateForm}
            className="bg-primary text-primary-foreground font-heading font-bold px-8 py-4 rounded-full text-center inline-block"
          >
            Start Your Website →
          </MagneticButton>
          <a
            href="https://dorit4trustee.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/80 font-heading font-semibold underline underline-offset-4 decoration-foreground/30 hover:decoration-primary transition-colors px-2 py-4"
          >
            See a live example: dorit4trustee.com
          </a>
        </div>

        <ul className="hero-ctas flex flex-col sm:flex-row gap-3 sm:gap-8">
          {trustItems.map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm text-lumin8-gray-400">
              <CheckCircle2 className="w-4 h-4 text-lumin8-coral shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CandidatesHero;
