import { processSteps } from "@/data/process";
import { useScrollAnimation, useCardStagger } from "@/hooks/useScrollAnimation";

const colorMap: Record<string, string> = {
  "lumin8-yellow": "bg-lumin8-yellow text-lumin8-black",
  "lumin8-green": "bg-lumin8-green text-lumin8-black",
  "lumin8-pink": "bg-lumin8-pink text-lumin8-black",
  "lumin8-coral": "bg-lumin8-coral text-lumin8-black",
  "lumin8-lavender": "bg-lumin8-lavender text-lumin8-black",
};

const ProcessSection = () => {
  const sectionRef = useScrollAnimation();
  const cardsRef = useCardStagger(".process-card");

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} id="process" className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-green w-36 h-36 top-20 -right-10 opacity-40 blur-[50px]" />

      <div className="max-w-3xl mx-auto">
        <span className="section-label">// HOW IT WORKS</span>
        <h2 className="section-headline text-foreground mb-2">From zero to live in 18 days</h2>
        <p className="section-subheadline mb-16">
          A streamlined, no-nonsense process. We keep you in the loop without wasting your time.
        </p>

        <div ref={cardsRef} className="space-y-0">
          {processSteps.map((step, index) => (
            <div
              key={step.step}
              className="process-card stagger-card relative flex gap-6 md:gap-8 pb-12"
            >
              {/* Timeline line */}
              {index < processSteps.length - 1 && (
                <div className="absolute left-6 top-14 w-px h-full bg-gradient-to-b from-primary/40 to-transparent" />
              )}
              {/* Step number circle */}
              <div className={`flex-shrink-0 w-12 h-12 rounded-full font-mono font-bold text-sm flex items-center justify-center ${colorMap[step.color] || "bg-primary text-primary-foreground"}`}>
                {String(step.step).padStart(2, "0")}
              </div>
              {/* Content */}
              <div>
                <span className="text-lumin8-gray-400 font-mono text-xs uppercase tracking-wider">{step.timeline}</span>
                <h3 className="text-xl font-heading font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                <p className="text-lumin8-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
