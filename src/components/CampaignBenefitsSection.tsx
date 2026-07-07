import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import {
  Search,
  Users,
  HandCoins,
  Rocket,
  BadgeDollarSign,
  KeyRound,
  type LucideIcon,
} from "lucide-react";
import SectionReveal from "./animations/SectionReveal";

type Benefit = { icon: LucideIcon; heading: string; text: string };

const benefits: Benefit[] = [
  {
    icon: Search,
    heading: "Be found",
    text: "When voters search your name, they find you — not nothing.",
  },
  {
    icon: Users,
    heading: "Sign up volunteers",
    text: "Turn supporters into door-knockers with one form.",
  },
  {
    icon: HandCoins,
    heading: "Take donations properly",
    text: "A clean donation path that follows the rules.",
  },
  {
    icon: Rocket,
    heading: "Launch in 3 days",
    text: "From intake form to live site.",
  },
  {
    icon: BadgeDollarSign,
    heading: "$1,000 flat",
    text: "One price. No hourly billing. No surprises.",
  },
  {
    icon: KeyRound,
    heading: "100% yours",
    text: "Your domain, your content, your data.",
  },
];

const CampaignBenefitsSection = () => {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="benefits" className="bg-lumin8-off-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <span className="section-label">What Your Website Does</span>
          <h2 className="section-headline max-w-3xl text-foreground">
            A campaign website should turn attention into action.
          </h2>
          <p className="section-subheadline mb-12">
            Voters will search your name. Give them a reason to vote for you.
          </p>
        </SectionReveal>

        <div ref={gridRef} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <motion.article
              key={benefit.heading}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 }}
              className="h-full rounded-2xl border border-black/[0.06] bg-background p-6 transition-shadow duration-300 hover:shadow-md"
            >
              <motion.div
                initial={shouldReduceMotion ? false : { scale: 0.6, opacity: 0 }}
                animate={gridInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: index * 0.08 + 0.1 }}
                className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15"
              >
                <benefit.icon className="h-6 w-6 text-primary" aria-hidden="true" />
              </motion.div>
              <h3 className="mb-2 font-heading text-xl font-bold text-foreground">
                {benefit.heading}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground">{benefit.text}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampaignBenefitsSection;
