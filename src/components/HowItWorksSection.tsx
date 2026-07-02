import { useRef, useEffect, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { candidateProcessSteps } from "@/data/candidateProcess";
import SectionReveal from "./animations/SectionReveal";
import { openCandidateForm } from "@/lib/tally";

const colorMap: Record<string, string> = {
  "lumin8-yellow": "bg-lumin8-yellow text-lumin8-black",
  "lumin8-green": "bg-lumin8-green text-lumin8-black",
  "lumin8-lavender": "bg-lumin8-lavender text-lumin8-black",
};

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
      <div className="blob blob-green w-36 h-36 top-20 -right-10 opacity-30 blur-[60px]" />

      <div className="max-w-3xl mx-auto">
        <SectionReveal>
          <h2 className="section-headline text-foreground mb-2">Live in three steps.</h2>
          <p className="section-subheadline mb-16">
            No email ping-pong. No discovery calls unless you want one.
          </p>
        </SectionReveal>

        <div ref={sectionRef} className="relative space-y-0">
          {/* Animated beam line */}
          <svg
            className="absolute left-6 top-6 w-px pointer-events-none"
            style={{ height: "calc(100% - 48px)" }}
            viewBox="0 0 2 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="beam-gradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#b39dff" />
                <stop offset="100%" stopColor="rgba(121, 202, 193, 0.6)" />
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

          {candidateProcessSteps.map((step, index) => {
            const stepProgress = Math.max(
              0,
              Math.min(1, beamProgress * candidateProcessSteps.length - index),
            );

            return (
              <motion.div
                key={step.step}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.15 }}
                className="relative flex gap-6 md:gap-8 pb-12"
              >
                <motion.div
                  className={`flex-shrink-0 w-12 h-12 rounded-full font-mono font-bold text-sm flex items-center justify-center relative z-10 ${colorMap[step.color] || "bg-primary text-primary-foreground"}`}
                  animate={
                    stepProgress > 0.5 && !shouldReduceMotion
                      ? {
                          boxShadow: [
                            "0 0 0 0 rgba(179, 157, 255, 0)",
                            "0 0 20px 4px rgba(179, 157, 255, 0.3)",
                            "0 0 0 0 rgba(179, 157, 255, 0)",
                          ],
                        }
                      : {}
                  }
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                >
                  {step.step}
                </motion.div>
                <div>
                  <span className="text-lumin8-gray-400 font-mono text-xs uppercase tracking-wider">
                    {step.timeline}
                  </span>
                  <h3 className="text-xl font-heading font-bold text-foreground mt-1 mb-2">{step.title}</h3>
                  <p className="text-lumin8-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-start mt-4">
          <button
            onClick={openCandidateForm}
            className="bg-primary text-primary-foreground font-heading font-semibold px-8 py-3 rounded-full hover:scale-[1.03] transition-transform duration-300"
          >
            Start the form →
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
