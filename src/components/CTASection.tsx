import SectionReveal from "./animations/SectionReveal";
import MagneticButton from "./animations/MagneticButton";

const CONTEST_FORM_URL = "#contest"; // PLACEHOLDER

const CTASection = () => {
  return (
    <section className="bg-background py-32 px-6 relative overflow-hidden">
      <div className="blob blob-yellow w-48 h-48 -top-10 right-[20%] opacity-30 blur-[60px]" />
      <div className="blob blob-pink w-36 h-36 bottom-10 left-[10%] opacity-30 blur-[50px]" />

      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(121, 202, 193, 0.05) 0%, transparent 70%)",
        }}
      />

      <SectionReveal className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="font-serif text-foreground mb-10" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
          Let's Get to Work!
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <MagneticButton
            as="a"
            href={CONTEST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-heading font-bold px-10 py-4 rounded-full text-lg inline-block text-center"
          >
            Enter the Contest →
          </MagneticButton>
          <a
            href="mailto:hello@lumin8.agency"
            className="border border-foreground/30 text-foreground font-heading font-semibold px-10 py-4 rounded-full hover:scale-[1.03] transition-transform duration-300 text-lg"
          >
            Contact Us
          </a>
        </div>
      </SectionReveal>
    </section>
  );
};

export default CTASection;
