import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { candidateAddons } from "@/data/candidateAddons";
import SectionReveal from "./animations/SectionReveal";
import GlowCard from "./animations/GlowCard";

const CampaignAddOnsSection = () => {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="addons" className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-lavender w-28 h-28 top-10 -left-10 opacity-20 blur-[60px]" />

      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="section-headline text-foreground">
            Everything else your campaign needs, from the same team.
          </h2>
          <p className="section-subheadline mb-12">
            Layer on exactly what you need. All add-ons are one-time costs unless noted.
          </p>
        </SectionReveal>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {candidateAddons.map((a, i) => (
            <motion.div
              key={a.service}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            >
              <GlowCard
                glowColor="rgba(179, 157, 255, 0.08)"
                className="bg-muted rounded-2xl p-6 border border-foreground/[0.06] h-full"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading font-bold text-foreground">{a.service}</h3>
                  <span className="font-mono text-sm font-bold text-primary shrink-0 ml-4">
                    {a.price}
                  </span>
                </div>
                <p className="text-lumin8-gray-400 text-sm">{a.description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignAddOnsSection;
