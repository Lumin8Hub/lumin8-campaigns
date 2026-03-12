import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { processSteps } from "@/data/process";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

gsap.registerPlugin(ScrollTrigger);

const colorMap: Record<string, string> = {
  "lumin8-yellow": "border-lumin8-yellow",
  "lumin8-green": "border-lumin8-green",
  "lumin8-pink": "border-lumin8-pink",
  "lumin8-coral": "border-lumin8-coral",
  "lumin8-lavender": "border-lumin8-lavender",
};

const ProcessSection = () => {
  const sectionRef = useScrollAnimation();
  const cardsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = cardsContainerRef.current;
    if (!container) return;

    const cards = container.querySelectorAll<HTMLElement>(".process-card");

    const ctx = gsap.context(() => {
      cards.forEach((card, i) => {
        if (i > 0) {
          gsap.to(cards[i - 1], {
            scale: 0.92,
            filter: "blur(8px)",
            opacity: 0.4,
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });
        }
        ScrollTrigger.create({
          trigger: card,
          start: "top 80px",
          pin: true,
          pinSpacing: false,
        });
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} id="process" className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-green w-36 h-36 top-20 -right-10 opacity-40 blur-[50px]" />

      <div className="max-w-3xl mx-auto">
        <span className="section-label">// HOW IT WORKS</span>
        <h2 className="section-headline text-foreground mb-2">From zero to live in 18 days</h2>
        <p className="section-subheadline mb-16">
          A streamlined, no-nonsense process. We keep you in the loop without wasting your time.
        </p>

        <div ref={cardsContainerRef} className="space-y-6">
          {processSteps.map((step) => (
            <div
              key={step.step}
              className={`process-card bg-muted/40 rounded-3xl p-8 border-l-4 ${colorMap[step.color]} border border-foreground/[0.06] will-change-transform`}
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="font-mono text-sm text-lumin8-gray-400">Step {step.step}</span>
                <span className="font-mono text-xs text-lumin8-gray-400">— {step.timeline}</span>
              </div>
              <h3 className="font-heading font-bold text-xl text-foreground mb-3">{step.title}</h3>
              <p className="text-lumin8-gray-400 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
