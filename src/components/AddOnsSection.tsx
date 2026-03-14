import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { addons } from "@/data/addons";
import SectionReveal from "./animations/SectionReveal";
import GlowCard from "./animations/GlowCard";

const AddOnsSection = () => {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-lumin8-off-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="section-headline text-lumin8-black">Power up your package</h2>
          <p className="section-subheadline text-lumin8-gray-600 mb-12">
            Layer on exactly what you need. All add-ons are one-time costs unless noted.
          </p>
        </SectionReveal>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {addons.map((a, i) => (
            <motion.div
              key={a.service}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
            >
              <GlowCard className="bg-foreground rounded-2xl p-6 border border-lumin8-black/5 h-full">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-heading font-bold text-lumin8-black">{a.service}</h3>
                  <span className="font-mono text-sm font-bold text-primary shrink-0 ml-4">{a.price}</span>
                </div>
                <p className="text-lumin8-gray-600 text-sm">{a.description}</p>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOnsSection;
