import { useMemo } from "react";
import { useReducedMotion } from "framer-motion";

const SparkleBackground = () => {
  const shouldReduceMotion = useReducedMotion();

  const sparkles = useMemo(() => {
    return Array.from({ length: 20 }, (_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      size: 1 + Math.random() * 2,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 2,
      opacity: 0.4 + Math.random() * 0.3,
    }));
  }, []);

  if (shouldReduceMotion) return null;

  return (
    <>
      <style>{`
        @keyframes sparkle-pulse {
          0%, 100% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1); opacity: var(--sparkle-opacity); }
        }
      `}</style>
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {sparkles.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full bg-white"
            style={{
              top: s.top,
              left: s.left,
              width: s.size,
              height: s.size,
              "--sparkle-opacity": s.opacity,
              animation: `sparkle-pulse ${s.duration}s ${s.delay}s ease-in-out infinite`,
            } as React.CSSProperties}
          />
        ))}
      </div>
    </>
  );
};

export default SparkleBackground;
