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
    <section id="addons" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <span className="section-label">Add-Ons</span>
          <h2 className="section-headline text-foreground">
            Campaign extras, ready when you need them.
          </h2>
          <p className="section-subheadline mb-12">
            Layer on exactly what you need. All add-ons are one-time costs unless noted.
          </p>
        </SectionReveal>

        <div ref={cardsRef} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {candidateAddons.map((a, i) => (
            <motion.div
              key={a.service}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            >
              <GlowCard
                glowColor="rgba(121, 202, 193, 0.12)"
                className="h-full rounded-lg border border-primary/20 bg-secondary/35 p-6"
              >
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="font-heading text-xl font-bold text-foreground">{a.service}</h3>
                  <span className="ml-4 shrink-0 rounded-full bg-background px-3 py-1 text-sm font-bold text-primary">
                    {a.price}
                  </span>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">{a.description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignAddOnsSection;
