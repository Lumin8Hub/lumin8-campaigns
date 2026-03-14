import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import SectionReveal from "./animations/SectionReveal";

const painPoints = [
  { emoji: "💸", text: '"Agencies want $5,000+ and a 3-month timeline"' },
  { emoji: "🤯", text: '"I tried Wix/Squarespace but it still looks DIY"' },
  { emoji: "😩", text: '"I don\'t have time to figure out hosting, SEO, and domains"' },
  { emoji: "🤷", text: '"I don\'t even know where to start with my branding"' },
  { emoji: "⏰", text: '"I just need something professional — fast"' },
];

const ProblemSection = () => {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="problem" className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-pink w-32 h-32 top-10 right-10 opacity-50 blur-[50px]" />
      <div className="blob blob-green w-24 h-24 bottom-10 left-10 opacity-40 blur-[40px]" />

      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="section-headline text-foreground mb-12">
            You know you need a website. But...
          </h2>
        </SectionReveal>

        <div ref={cardsRef} className="grid md:grid-cols-2 gap-4 max-w-3xl mb-12">
          {painPoints.map((p, i) => (
            <motion.div
              key={i}
              initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
              animate={cardsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="bg-muted rounded-2xl p-6 border border-foreground/[0.06] cursor-default"
              style={{ transition: "box-shadow 0.3s" }}
            >
              <span className="text-2xl mr-3">{p.emoji}</span>
              <span className="text-foreground font-body">{p.text}</span>
            </motion.div>
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <p className="font-serif italic text-primary text-2xl md:text-3xl">
            Sound familiar? That's exactly why we built this.
          </p>
        </SectionReveal>
      </div>
    </section>
  );
};

export default ProblemSection;
