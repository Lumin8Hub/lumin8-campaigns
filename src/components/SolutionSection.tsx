import { useRef } from "react";
import { Target, Sparkles, Shield } from "lucide-react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import SectionReveal from "./animations/SectionReveal";
import GlowCard from "./animations/GlowCard";
import SectionCTA from "./SectionCTA";

const features = [
  {
    icon: Target,
    title: "Real Strategy, Not Templates",
    description: "Every Starter site is built by the same strategists who manage $10K/month campaigns. You get a real marketing team thinking about your business — not an algorithm picking a template.",
    imageUrl: "/images/agency-quality-1.jpg",
    imageAlt: "Marketing strategists collaborating on a website design",
  },
  {
    icon: Sparkles,
    title: "AI-Accelerated, Human-Refined",
    description: "We leverage cutting-edge AI tools to draft your content and build your site in days, not months. Then our team reviews every pixel, every word, every interaction to make sure it's right.",
    imageUrl: "/images/agency-quality-2.jpg",
    imageAlt: "AI-powered design workflow with human review",
  },
  {
    icon: Shield,
    title: "Enterprise Hosting, Zero Monthly Fees",
    description: "Your site runs on the same CDN infrastructure used by Fortune 500 companies — GitHub Pages + Cloudflare. No $30/month hosting bills. No surprise charges. Ever.",
    imageUrl: "/images/agency-quality-3.jpg",
    imageAlt: "Enterprise-grade cloud infrastructure diagram",
  },
];

const SolutionSection = () => {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="solution" className="bg-lumin8-off-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <SectionReveal>
          <h2 className="section-headline text-lumin8-black mx-auto">
            Agency quality. Startup-friendly pricing.
          </h2>
          <p className="section-subheadline mx-auto text-center text-lumin8-gray-600">
            We use AI to move fast and keep costs low — but every site is reviewed and polished by our team of marketing professionals.
          </p>
        </SectionReveal>

        <div ref={cardsRef} className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
              animate={cardsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.15 }}
            >
              <GlowCard className="bg-foreground rounded-2xl overflow-hidden text-left shadow-sm border border-lumin8-black/5 h-full">
                <div className="h-40 bg-lumin8-black/5 flex items-center justify-center overflow-hidden">
                  <img
                    src={f.imageUrl}
                    alt={f.imageAlt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                    }}
                  />
                </div>
                <div className="p-8">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                    <f.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-lumin8-black mb-3">{f.title}</h3>
                  <p className="text-lumin8-gray-600 leading-relaxed">{f.description}</p>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        <SectionCTA text="Get Started" />
      </div>
    </section>
  );
};

export default SolutionSection;
