import SectionReveal from "./animations/SectionReveal";
import MagneticButton from "./animations/MagneticButton";
import { openCandidateForm } from "@/lib/tally";

const FinalCTABand = () => {
  return (
    <section className="bg-background py-32 px-6 relative overflow-hidden">
      <div className="blob blob-coral w-48 h-48 -top-10 right-[20%] opacity-25 blur-[70px]" />
      <div className="blob blob-lavender w-36 h-36 bottom-10 left-[10%] opacity-25 blur-[60px]" />

      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(179, 157, 255, 0.06) 0%, transparent 70%)",
        }}
      />

      <SectionReveal className="max-w-3xl mx-auto text-center relative z-10">
        <h2
          className="font-serif text-foreground mb-6"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
        >
          Nominations close soon.
          <br />
          <span className="italic">Voters are already searching.</span>
        </h2>

        <p className="text-lumin8-gray-400 text-lg mb-10 max-w-xl mx-auto">
          Every week you wait is a week of searches that find nothing. Start
          your form today — be live this week.
        </p>

        <div className="flex flex-col items-center gap-4">
          <MagneticButton
            as="button"
            onClick={openCandidateForm}
            className="bg-primary text-primary-foreground font-heading font-bold px-10 py-4 rounded-full text-lg inline-block text-center"
          >
            Start Your Website — $1,000 →
          </MagneticButton>
          {/* TODO: swap mailto for the Calendly link once available */}
          <a
            href="mailto:hello@lumin8.agency?subject=Candidate%20website%20—%2010-minute%20call"
            className="text-foreground/70 text-sm underline underline-offset-4 decoration-foreground/30 hover:decoration-primary transition-colors"
          >
            Questions first? Book a free 10-minute call →
          </a>
        </div>
      </SectionReveal>
    </section>
  );
};

export default FinalCTABand;
