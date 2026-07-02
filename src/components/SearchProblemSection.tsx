import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Search, Users, HandCoins } from "lucide-react";
import SectionReveal from "./animations/SectionReveal";

const painPoints = [
  {
    icon: Search,
    heading: "No platform online",
    text: "Voters searching your name find nothing — no priorities, no photo, no reason to give you a second look.",
  },
  {
    icon: Users,
    heading: "No way to volunteer",
    text: "Supporters who want to help have no door to knock on. Every missed sign-up is a shift you cover yourself.",
  },
  {
    icon: HandCoins,
    heading: "No donation path",
    text: "Donors ready to contribute can't — and every workaround risks a compliance headache at filing time.",
  },
];

const SearchProblemSection = () => {
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="problem" className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-lavender w-32 h-32 top-10 right-10 opacity-30 blur-[60px]" />
      <div className="blob blob-green w-24 h-24 bottom-10 left-10 opacity-25 blur-[50px]" />

      <div className="max-w-3xl mx-auto">
        <SectionReveal>
          <h2 className="section-headline text-foreground mb-8">
            The first door you knock on is Google.
          </h2>

          <p className="text-lumin8-gray-400 text-lg leading-relaxed mb-4">
            Before a single ballot is cast, voters, reporters, and donors will
            search your name. Right now, most municipal candidates give them
            nothing — no platform, no photo, no way to volunteer or donate.
          </p>
          <p className="text-lumin8-gray-400 text-lg leading-relaxed mb-8">
            A lawn sign gets you name recognition. A website gets you the
            second look that turns recognition into a vote.
          </p>

          {/* Highlighted stat chip */}
          <div className="inline-flex items-baseline gap-3 bg-muted rounded-2xl border border-primary/30 px-6 py-4 mb-12">
            <span className="font-heading font-extrabold text-primary text-4xl">2/3</span>
            <span className="text-foreground/80 max-w-sm">
              of 1,100+ Canadian municipal candidates we researched this cycle
              have no campaign website at all.
            </span>
          </div>
        </SectionReveal>

        <div ref={cardsRef} className="flex flex-col gap-4">
          {painPoints.map((p, i) => (
            <motion.div
              key={p.heading}
              initial={shouldReduceMotion ? false : { opacity: 0, x: -20 }}
              animate={cardsInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="bg-muted rounded-2xl p-6 border border-foreground/[0.06] flex items-start gap-5 border-l-4 border-l-primary"
            >
              <p.icon className="w-7 h-7 text-primary shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">{p.heading}</h3>
                <p className="text-lumin8-gray-400 leading-relaxed">{p.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SearchProblemSection;
