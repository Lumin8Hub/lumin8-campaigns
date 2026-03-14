import { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { processSteps } from "@/data/process";
import SectionReveal from "./animations/SectionReveal";

const colorMap: Record<string, string> = {
  "lumin8-yellow": "bg-lumin8-yellow text-lumin8-black",
  "lumin8-green": "bg-lumin8-green text-lumin8-black",
  "lumin8-pink": "bg-lumin8-pink text-lumin8-black",
  "lumin8-coral": "bg-lumin8-coral text-lumin8-black",
  "lumin8-lavender": "bg-lumin8-lavender text-lumin8-black",
};

const ProcessSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const beamRef = useRef<SVGSVGElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const [beamProgress, setBeamProgress] = useState(0);

  useEffect(() => {
    if (!isInView || shouldReduceMotion) {
      if (isInView) setBeamProgress(1);
      return;
    }
    let start: number;
    const duration = 2000;
    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      setBeamProgress(progress);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isInView, shouldReduceMotion]);

  return (
    <section id="process" className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-green w-36 h-36 top-20 -right-10 opacity-40 blur-[50px]" />

      <div className="max-w-3xl mx-auto">
        <SectionReveal>
          <h2 className="section-headline text-foreground mb-2">From zero to live in 10 days</h2>
          <p className="section-subheadline mb-16">
            A streamlined, no-nonsense process. We keep you in the loop without wasting your time.
          </p>
        </SectionReveal>

        <div ref={sectionRef} className="relative space-y-0">
          {/* Animated beam line */}
          <svg
            ref={beamRef}
            className="absolute left-6 top-6 w-px pointer-events-none"
            style={{ height: "calc(100% - 48px)" }}
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="beam-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#79cac1" />
                <stop offset="100%" stopColor="rgba(163, 113, 247, 0.6)" />
              </linearGradient>
            </defs>
            <line
              x1="1" y1="0" x2="1" y2="100"
              stroke="url(#beam-gradient)"
              strokeWidth="2"
              strokeDasharray="100"
              strokeDashoffset={100 - beamProgress * 100}
            />
          </svg>

          {processSteps.map((step, index) => {
            const stepProgress = Math.max(0, Math.min(1, (beamProgress * processSteps.length) - index));

            return (
              <motion.div
                key={step.step}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
                className="relative flex gap-6 md:gap-8 pb-12"
              >
                {/* Step number circle */}
                <motion.div
                  className={`flex-shrink-0 w-12 h-12 rounded-full font-mono font-bold text-sm flex items-center justify-center relative z-10 ${colorMap[step.color] || "bg-primary text-primary-foreground"}`}
                  animate={stepProgress > 0.5 && !shouldReduceMotion ? {
                    boxShadow: [
                      "0 0 0 0 rgba(121, 202, 193, 0)",
                      "0 0 20px 4px rgba(121, 202, 193, 0.3)",
                      "0 0 0 0 rgba(121, 202, 193, 0)",
                    ],
                  } : {}}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  {String(step.step).padStart(2, "0")}
                </motion.div>
                {/* Content */}
                <div>
                  <span className="text-lumin8-gray-400 font-mono text-xs uppercase tracking-wider">{step.timeline}</span>
                  <h3 className="text-xl font-heading font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                  <p className="text-lumin8-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
