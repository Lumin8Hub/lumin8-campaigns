import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface Stat {
  value: string;
  label: string;
}

interface StatsBarProps {
  stats: Stat[];
  accentColor: string;
  variant?: "dark" | "light";
  className?: string;
}

const StatsBar = ({ stats, accentColor, variant = "dark", className = "" }: StatsBarProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const shouldReduceMotion = useReducedMotion();

  const isDark = variant === "dark";

  return (
    <div
      ref={ref}
      className={`grid grid-cols-2 md:grid-cols-4 gap-6 py-10 px-6 rounded-2xl ${className}`}
      style={{
        backgroundColor: isDark ? `${accentColor}08` : "#ffffff",
        border: isDark ? "1px solid rgba(255,255,255,0.1)" : "none",
        boxShadow: isDark ? "none" : `0 8px 40px ${accentColor}1f`,
      }}
    >
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className={`text-center ${!isDark && i < stats.length - 1 ? "md:border-r md:border-black/[0.08]" : ""}`}
        >
          <div
            className="text-3xl md:text-4xl font-heading font-bold mb-1"
            style={{ color: isDark ? accentColor : accentColor }}
          >
            {stat.value}
          </div>
          <div
            className="text-sm font-body"
            style={{ color: isDark ? "rgba(255,255,255,0.6)" : "#555" }}
          >
            {stat.label}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default StatsBar;
