import { useRef } from "react";
import { Check } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { pricingPackages } from "@/data/pricing";
import SectionReveal from "./animations/SectionReveal";
import GlowCard from "./animations/GlowCard";
import { openContestForm } from "@/lib/tally";

const PricingSection = () => {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="pricing" className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-coral w-40 h-40 -top-10 -right-10 opacity-40 blur-[60px]" />
      <div className="blob blob-lavender w-32 h-32 bottom-20 -left-10 opacity-30 blur-[50px]" />

      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="section-headline text-foreground mb-2">
            Everything you need to launch.
          </h2>
          <h2 className="section-headline text-foreground mb-4">
            Pick your level.
          </h2>
          <p className="section-subheadline mb-16">
            All prices in CAD. All packages include a custom-built React website with mobile-responsive design, deployed and live.
          </p>
        </SectionReveal>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 items-start">
          {pricingPackages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
            >
              <GlowCard
                className={`rounded-3xl p-8 border transition-all duration-300 ${
                  pkg.highlighted
                    ? "border-primary border-2 scale-[1.02] md:scale-105 relative"
                    : "border-foreground/[0.08] bg-muted/30"
                }`}
              >
                {pkg.highlighted && pkg.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-mono text-xs font-bold px-4 py-1 rounded-full animate-pulse-badge z-10">
                    {pkg.badge}
                  </span>
                )}

                <h3 className={`font-heading font-bold text-xl text-foreground mb-2 ${pkg.highlighted ? "mt-8" : "mt-4"}`}>{pkg.name}</h3>
                <p className="text-lumin8-gray-400 text-sm mb-6">{pkg.tagline}</p>

                <div className="mb-6">
                  <span className="text-lumin8-gray-400 text-lg">$</span>
                  <span className="text-foreground font-heading font-extrabold text-5xl">{pkg.price.toLocaleString()}</span>
                  <span className="font-mono text-xs text-lumin8-gray-400 ml-2">CAD</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-3 text-sm text-foreground/80">
                      <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <motion.button
                  onClick={openContestForm}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  className={`block w-full text-center font-heading font-semibold py-3 rounded-full ${
                    pkg.highlighted
                      ? "bg-primary text-primary-foreground"
                      : "border border-foreground/30 text-foreground"
                  }`}
                >
                  {pkg.cta}
                </motion.button>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Brand starter kit banner */}
        <SectionReveal delay={0.3}>
          <div className="mt-12 bg-muted/40 rounded-2xl p-8 border border-foreground/[0.06] text-center">
            <p className="text-foreground font-heading font-semibold text-lg mb-2">
              🎨 Need branding too? Add our Brand Starter Kit to any package — starting at $500
            </p>
            <p className="text-lumin8-gray-400 text-sm mb-1">
              Includes: AI-assisted logo (3 concepts), color palette, typography system, and a Canva brand kit.
            </p>
            <p className="text-primary font-heading font-bold">
              Starter + Brand Kit from $1,250
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default PricingSection;
