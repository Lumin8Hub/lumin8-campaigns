import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface TimelineStep {
  phase: string;
  title: string;
  description: string;
}

interface TimelineProps {
  steps: TimelineStep[];
  accentColor: string;
  variant?: "dots" | "rows";
  phaseFont?: string;
  titleFont?: string;
  mutedColor?: string;
  borderColor?: string;
}

const Timeline = ({
  steps,
  accentColor,
  variant = "dots",
  phaseFont,
  titleFont,
  mutedColor = "rgba(255,255,255,0.6)",
  borderColor,
}: TimelineProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  if (variant === "rows") {
    return (
      <div ref={ref} className="space-y-0">
        {steps.map((step, i) => (
          <motion.div
            key={step.phase}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-2 md:gap-8 py-6"
            style={{ borderBottom: `1px solid ${borderColor || `${accentColor}15`}` }}
          >
            <div
              className="text-xs font-semibold uppercase tracking-[3px]"
              style={{ color: accentColor, fontFamily: phaseFont, fontSize: "0.78rem" }}
            >
              {step.phase}
            </div>
            <div>
              <h4
                className="font-semibold text-white text-lg mb-1"
                style={{ fontFamily: titleFont }}
              >
                {step.title}
              </h4>
              <p className="text-sm leading-relaxed" style={{ color: mutedColor }}>
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  // Default "dots" variant
  return (
    <div ref={ref} className="relative">
      <div
        className="absolute left-4 md:left-6 top-0 bottom-0 w-px"
        style={{ backgroundColor: `${accentColor}30` }}
      />
      <div className="space-y-8">
        {steps.map((step, i) => (
          <motion.div
            key={step.phase}
            initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative pl-12 md:pl-16"
          >
            <div
              className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full border-2"
              style={{ borderColor: accentColor, backgroundColor: `${accentColor}40` }}
            />
            <div
              className="text-xs font-mono uppercase tracking-wider mb-1"
              style={{ color: accentColor, fontFamily: phaseFont }}
            >
              {step.phase}
            </div>
            <h4
              className="font-heading font-semibold text-white text-lg mb-1"
              style={{ fontFamily: titleFont }}
            >
              {step.title}
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: mutedColor }}>
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
