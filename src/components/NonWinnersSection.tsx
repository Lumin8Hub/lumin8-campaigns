import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CONTEST_FORM_URL = "#contest"; // PLACEHOLDER

const NonWinnersSection = () => {
  const sectionRef = useScrollAnimation();

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="bg-background py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <span className="section-label">// DIDN'T WIN?</span>
        <h2 className="section-headline text-foreground mb-6">Everyone walks away with something.</h2>

        <p className="text-lumin8-gray-400 leading-relaxed mb-4">
          Every contest applicant gets an exclusive offer: $500 off any Starter Tier package. That means you can get a professionally built, custom website for your business starting at just $500 — less than what most people pay for a Squarespace annual plan.
        </p>
        <p className="text-lumin8-gray-400 leading-relaxed mb-8">
          This offer is only available to contest applicants and expires 30 days after the contest ends.
        </p>

        <a
          href={CONTEST_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-heading font-bold px-8 py-4 rounded-full hover:scale-[1.03] transition-transform duration-300"
        >
          Claim Your Discount →
        </a>
      </div>
    </section>
  );
};

export default NonWinnersSection;
