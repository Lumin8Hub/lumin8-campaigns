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
}

const Timeline = ({ steps, accentColor }: TimelineProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div ref={ref} className="relative">
      {/* Vertical line */}
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
            {/* Dot */}
            <div
              className="absolute left-2.5 md:left-4.5 top-1 w-3 h-3 rounded-full border-2"
              style={{ borderColor: accentColor, backgroundColor: `${accentColor}40` }}
            />
            <div
              className="text-xs font-mono uppercase tracking-wider mb-1"
              style={{ color: accentColor }}
            >
              {step.phase}
            </div>
            <h4 className="font-heading font-semibold text-white text-lg mb-1">{step.title}</h4>
            <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
