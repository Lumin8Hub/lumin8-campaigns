import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
  accentColor: string;
}

const StatsBar = ({ stats, accentColor }: StatsBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 px-6 rounded-xl border border-white/10"
      style={{ backgroundColor: `${accentColor}08` }}
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="text-center"
        >
          <div
            className="text-3xl md:text-4xl font-heading font-bold mb-1"
            style={{ color: accentColor }}
          >
            {stat.value}
          </div>
          <div className="text-sm text-white/60 font-body">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsBar;
