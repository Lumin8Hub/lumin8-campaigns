import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CONTEST_FORM_URL = "#contest"; // PLACEHOLDER

const CTASection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="bg-background py-32 px-6 relative overflow-hidden">
      <div className="blob blob-yellow w-48 h-48 -top-10 right-[20%] opacity-30 blur-[60px]" />
      <div className="blob blob-pink w-36 h-36 bottom-10 left-[10%] opacity-30 blur-[50px]" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <h2 className="font-serif text-foreground mb-10" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
          Let's Get to Work!
        </h2>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={CONTEST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-heading font-bold px-10 py-4 rounded-full hover:scale-[1.03] transition-transform duration-300 text-lg"
          >
            Enter the Contest →
          </a>
          <a
            href="mailto:hello@lumin8.agency"
            className="border border-foreground/30 text-foreground font-heading font-semibold px-10 py-4 rounded-full hover:scale-[1.03] transition-transform duration-300 text-lg"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
