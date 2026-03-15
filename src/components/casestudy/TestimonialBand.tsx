import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface TestimonialBandProps {
  quote: string;
  author: string;
  role?: string;
  accentColor: string;
  background?: string;
  quoteFont?: string;
  authorFont?: string;
}

const TestimonialBand = ({
  quote,
  author,
  role,
  accentColor,
  background,
  quoteFont,
  authorFont,
}: TestimonialBandProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative py-20 px-10"
      style={{ background }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <div
          className="text-[5rem] leading-none mb-4 select-none"
          style={{ color: "rgba(255,255,255,0.15)", fontFamily: authorFont }}
        >
          "
        </div>
        <blockquote
          className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6 italic"
          style={{ fontFamily: quoteFont }}
        >
          "{quote}"
        </blockquote>
        <div
          className="font-semibold text-white"
          style={{ fontFamily: authorFont }}
        >
          {author}
        </div>
        {role && <div className="text-sm text-white/80 mt-1">{role}</div>}
      </div>
    </motion.div>
  );
};

export default TestimonialBand;
