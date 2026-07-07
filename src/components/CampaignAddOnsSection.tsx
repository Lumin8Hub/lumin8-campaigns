import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { candidateAddons } from "@/data/candidateAddons";
import SectionReveal from "./animations/SectionReveal";

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
            Layer on exactly what you need. All add-ons are one-time costs.
          </p>
        </SectionReveal>

        <div ref={cardsRef} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {candidateAddons.map((a, i) => (
            <motion.div
              key={a.service}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="h-full"
            >
              <div className="h-full rounded-2xl border border-black/[0.06] bg-lumin8-off-white p-6 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-md motion-reduce:transform-none">
                <div className="mb-3 flex items-start justify-between">
                  <h3 className="font-heading text-xl font-bold text-foreground">{a.service}</h3>
                  <span className="ml-4 shrink-0 rounded-full bg-primary/15 px-3 py-1 text-sm font-bold text-primary">
                    {a.price}
                  </span>
                </div>
                <p className="text-base leading-relaxed text-muted-foreground">{a.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignAddOnsSection;
