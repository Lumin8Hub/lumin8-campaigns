import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionReveal from "./animations/SectionReveal";
import MagneticButton from "./animations/MagneticButton";
import { openCandidateForm } from "@/lib/tally";

const FinalCTABand = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Slow teal tint shift on the band, scrubbed to scroll
        gsap.fromTo(
          ".cta-tint",
          { opacity: 0 },
          {
            opacity: 1,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 90%",
              end: "bottom bottom",
              scrub: true,
            },
          },
        );
      });
    }, sectionRef);
    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-lumin8-off-white px-6 py-28">
      <div
        aria-hidden="true"
        className="cta-tint pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-primary/10"
      />
      <SectionReveal className="relative z-10 mx-auto max-w-3xl text-center">
        <h2
          className="mb-6 font-heading font-extrabold leading-tight text-foreground"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)" }}
        >
          Ready before voters search your name.
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-xl leading-relaxed text-muted-foreground">
          Send the five-field intake today. We'll confirm the fit and get your
          site moving.
        </p>

        <div className="flex flex-col items-center gap-4">
          <MagneticButton
            as="button"
            onClick={openCandidateForm}
            className="inline-block rounded-full bg-cta px-10 py-4 text-center font-heading text-lg font-bold text-accent-foreground"
          >
            Get Started
          </MagneticButton>
          {/* TODO: swap mailto for the Calendly link once available */}
          <a
            href="mailto:hello@lumin8.agency?subject=Candidate%20website%20—%2010-minute%20call"
            className="flex min-h-[44px] items-center text-sm text-muted-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-primary"
          >
            Questions first? Book a free 10-minute call →
          </a>
        </div>
      </SectionReveal>
    </section>
  );
};

export default FinalCTABand;
