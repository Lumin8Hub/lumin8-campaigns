import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface FeatureGridProps {
  features: Feature[];
  accentColor: string;
  accentGradient?: string;
  cardBg?: string;
  cardBorder?: string;
  cardBorderHover?: string;
  cardGlow?: string;
  cardRadius?: string;
}

const FeatureGrid = ({
  features,
  accentColor,
  accentGradient,
  cardBg = "rgba(255,255,255,0.02)",
  cardBorder = "rgba(255,255,255,0.1)",
  cardBorderHover,
  cardGlow,
  cardRadius = "12px",
}: FeatureGridProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature, i) => (
        <motion.div
          key={feature.title}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="group p-6 transition-all duration-300 hover:-translate-y-[3px]"
          style={{
            background: cardBg,
            border: `1px solid ${cardBorder}`,
            borderRadius: cardRadius,
          }}
          onMouseEnter={(e) => {
            if (cardBorderHover) e.currentTarget.style.borderColor = cardBorderHover;
            if (cardGlow) e.currentTarget.style.boxShadow = `0 12px 36px ${cardGlow}`;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = cardBorder;
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
            style={{
              background: accentGradient || `${accentColor}20`,
              color: accentGradient ? "#fff" : accentColor,
            }}
          >
            {feature.icon}
          </div>
          <h3 className="font-heading font-semibold text-white mb-2">{feature.title}</h3>
          <p className="text-sm text-white/60 leading-relaxed">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default FeatureGrid;
