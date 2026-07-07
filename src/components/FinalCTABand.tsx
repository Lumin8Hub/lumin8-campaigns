import SectionReveal from "./animations/SectionReveal";
import MagneticButton from "./animations/MagneticButton";
import { openCandidateForm } from "@/lib/tally";

const FinalCTABand = () => {
  return (
    <section className="bg-lumin8-off-white px-6 py-28">
      <SectionReveal className="relative z-10 mx-auto max-w-3xl text-center">
        <h2
          className="mb-6 font-heading font-extrabold leading-tight text-foreground"
          style={{ fontSize: "clamp(2.5rem, 5vw, 4.25rem)" }}
        >
          Ready before voters search your name.
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-xl leading-relaxed text-muted-foreground">
          Send the five-field intake today. We will confirm the fit, outline the
          next steps, and get your website moving.
        </p>

        <div className="flex flex-col items-center gap-4">
          <MagneticButton
            as="button"
            onClick={openCandidateForm}
            className="inline-block rounded-full bg-primary px-10 py-4 text-center font-heading text-lg font-bold text-primary-foreground"
          >
            Start with five fields
          </MagneticButton>
          {/* TODO: swap mailto for the Calendly link once available */}
          <a
            href="mailto:hello@lumin8.agency?subject=Candidate%20website%20—%2010-minute%20call"
            className="text-sm text-muted-foreground underline decoration-foreground/30 underline-offset-4 transition-colors hover:decoration-primary"
          >
            Questions first? Book a free 10-minute call →
          </a>
        </div>
      </SectionReveal>
    </section>
  );
};

export default FinalCTABand;
