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
    <section id="process" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <SectionReveal>
          <span className="section-label">How It Works</span>
          <h2 className="section-headline mb-2 text-foreground">Live in three steps.</h2>
          <p className="section-subheadline mb-16">
            A short start, a focused build, and a clean launch on your domain.
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
                  <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    {step.timeline}
                  </span>
                  <h3 className="mb-2 mt-1 font-heading text-2xl font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex justify-start mt-4">
          <button
            onClick={openCandidateForm}
            className="rounded-full bg-primary px-8 py-3 font-heading font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            Start with five fields
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
