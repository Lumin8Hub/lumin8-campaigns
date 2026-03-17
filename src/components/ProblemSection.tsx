import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import SectionReveal from "./animations/SectionReveal";
import SectionCTA from "./SectionCTA";

const brandColors = ["#2DD4BF", "#ed4c96", "#fde065", "#2DD4BF", "#ed4c96"];

const painPoints = [
  { emoji: "💸", heading: "Too expensive", text: "Agencies want $5,000+ and a 3-month timeline just to get started." },
  { emoji: "🤯", heading: "DIY looks DIY", text: "You tried Wix or Squarespace but it still doesn't look professional." },
  { emoji: "😩", heading: "Too complicated", text: "Hosting, SEO, domains — you don't have time to figure it all out." },
  { emoji: "🤷", heading: "No branding", text: "You don't even know where to start with your visual identity." },
  { emoji: "⏰", heading: "Need it now", text: "You just need something professional — fast." },
];

const ProblemSection = () => {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="problem" className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-pink w-32 h-32 top-10 right-10 opacity-50 blur-[50px]" />
      <div className="blob blob-green w-24 h-24 bottom-10 left-10 opacity-40 blur-[40px]" />

      <div className="max-w-3xl mx-auto">
        <SectionReveal>
          <h2 className="section-headline text-foreground mb-12">
            You know you need a website. But...
          </h2>
        </SectionReveal>

        <div ref={cardsRef} className="flex flex-col gap-4 mb-12">
          {painPoints.map((p, i) => (
            <motion.div
              key={i}
              initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
              animate={cardsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="bg-muted rounded-2xl p-6 border border-foreground/[0.06] flex items-start gap-5"
              style={{ borderLeft: `4px solid ${brandColors[i]}` }}
            >
              <span className="text-3xl shrink-0 mt-0.5">{p.emoji}</span>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">{p.heading}</h3>
                <p className="text-lumin8-gray-400 leading-relaxed">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <SectionReveal delay={0.3}>
          <p className="font-serif italic text-primary text-2xl md:text-3xl">
            Sound familiar? That's exactly why we built this.
          </p>
          <SectionCTA text="Claim Your Website" />
        </SectionReveal>
      </div>
    </section>
  );
};

export default ProblemSection;
