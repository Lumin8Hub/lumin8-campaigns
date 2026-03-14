import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

interface TestimonialBandProps {
  quote: string;
  author: string;
  role?: string;
  accentColor: string;
}

const TestimonialBand = ({ quote, author, role, accentColor }: TestimonialBandProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative py-16 px-6"
    >
      <div className="max-w-3xl mx-auto text-center">
        <Quote
          className="w-10 h-10 mx-auto mb-6 opacity-40"
          style={{ color: accentColor }}
        />
        <blockquote className="text-xl md:text-2xl font-body text-white/90 leading-relaxed mb-6 italic">
          "{quote}"
        </blockquote>
        <div className="font-heading font-semibold text-white">{author}</div>
        {role && <div className="text-sm text-white/50 mt-1">{role}</div>}
      </div>
    </motion.div>
  );
};

export default TestimonialBand;
