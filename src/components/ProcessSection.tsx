import { processSteps } from "@/data/process";
import { useScrollAnimation, useCardStagger } from "@/hooks/useScrollAnimation";

const ProcessSection = () => {
  const sectionRef = useScrollAnimation();
  const cardsRef = useCardStagger(".process-card");

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} id="process" className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-green w-36 h-36 top-20 -right-10 opacity-40 blur-[50px]" />

      <div className="max-w-3xl mx-auto">
        <span className="section-label">// HOW IT WORKS</span>
        <h2 className="section-headline text-foreground mb-2">From zero to live in 7 days</h2>
        <p className="section-subheadline mb-16">
          A streamlined, no-nonsense process. This timeline requires prompt client feedback at every stage.
        </p>

        <div ref={cardsRef} className="space-y-0">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.id}
                className="process-card stagger-card relative flex gap-6 md:gap-8 pb-12"
              >
                {/* Timeline line */}
                {index < processSteps.length - 1 && (
                  <div className="absolute left-6 top-14 w-px h-full bg-gradient-to-b from-primary/40 to-transparent" />
                )}
                {/* Step icon circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-primary-foreground font-mono font-bold text-sm flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                {/* Content */}
                <div>
                  <h3 className="text-xl font-heading font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                  <p className="text-lumin8-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
