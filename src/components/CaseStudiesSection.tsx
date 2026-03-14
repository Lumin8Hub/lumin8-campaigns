import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import SectionReveal from "./animations/SectionReveal";
import GlowCard from "./animations/GlowCard";

const studies = [
  {
    id: 1,
    company: "Earth Songfire",
    tag: "Website & Brand Identity",
    accentColor: "#B08D57",
    slug: "/work/earth-song",
    summary: "A nature-inspired digital presence for a holistic wellness practitioner.",
    challenge: "Earth Songfire had a growing community but no cohesive digital home — just fragmented social profiles and a basic landing page.",
    solution: "We designed a custom React website with a forest green and gold palette, DM Serif Display typography, and nature-inspired animations.",
    result: "3x increase in inquiries, a professional digital presence, and a platform that truly reflects the brand's warmth and authenticity.",
  },
  {
    id: 2,
    company: "Sportball",
    tag: "Rebrand & Digital Transformation",
    accentColor: "#A371F7",
    summary: "Full rebrand and marketing transformation for a franchise network.",
    challenge: "Following an acquisition, Sportball needed a full rebrand and marketing transformation to unify their franchise network.",
    solution: "We led the rebrand, developed a new website with improved conversion rates, and streamlined customer data management across the network.",
    result: "Enhanced brand consistency, increased franchisee engagement, and improved marketing performance across the network.",
  },
  {
    id: 3,
    company: "Unapologetically Jewish",
    tag: "Community Platform",
    accentColor: "#CC0000",
    slug: "/work/unapologetically-jewish",
    summary: "A bold, high-impact digital home for a vibrant community brand.",
    challenge: "UJ had built an incredible community through social media but lacked a dedicated digital home that matched their bold brand energy.",
    solution: "We built a high-contrast, brutalist-inspired website with Oswald typography and a stark red, black, and white palette.",
    result: "5x community engagement, a powerful digital presence, and a platform that's as unapologetic as the movement it represents.",
  },
];

const CaseStudiesSection = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-green w-36 h-36 top-10 -right-10 opacity-30 blur-[50px]" />
      <div className="blob blob-lavender w-28 h-28 bottom-20 -left-10 opacity-30 blur-[50px]" />

      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="section-headline text-foreground mb-4">A full-service agency</h2>
          <p className="section-subheadline mb-16">
            See how we've helped businesses like yours build their digital presence.
          </p>
        </SectionReveal>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {studies.map((study, i) => {
            const isExpanded = expandedId === study.id;

            return (
              <motion.div
                key={study.id}
                layout={!shouldReduceMotion}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
                animate={cardsInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.15,
                  layout: { type: "spring", stiffness: 300, damping: 30 },
                }}
                onClick={() => setExpandedId(isExpanded ? null : study.id)}
                className={`cursor-pointer rounded-xl border overflow-hidden ${
                  isExpanded
                    ? "col-span-1 md:col-span-3 border-2"
                    : "border-foreground/[0.08] bg-muted/30"
                }`}
                style={{
                  borderColor: isExpanded ? study.accentColor : undefined,
                }}
              >
                {isExpanded ? (
                  <CardContent study={study} isExpanded shouldReduceMotion={shouldReduceMotion} />
                ) : (
                  <GlowCard glowColor={`${study.accentColor}14`}>
                    <CardContent study={study} isExpanded={false} shouldReduceMotion={shouldReduceMotion} />
                  </GlowCard>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const CardContent = ({
  study,
  isExpanded,
  shouldReduceMotion,
}: {
  study: (typeof studies)[number];
  isExpanded: boolean;
  shouldReduceMotion: boolean | null;
}) => (
  <>
    <div className="p-6">
      <div className="flex items-center gap-4 mb-3">
        <div
          className="w-12 h-12 rounded-lg shrink-0"
          style={{ backgroundColor: study.accentColor }}
        />
        <div>
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: study.accentColor }}
          >
            {study.tag}
          </span>
          <h3 className="text-xl font-heading font-bold text-foreground">{study.company}</h3>
        </div>
      </div>
      <p className="text-lumin8-gray-400 mt-2">{study.summary}</p>
      <div className="flex items-center gap-2 mt-4 text-sm text-lumin8-gray-400">
        <span>{isExpanded ? "Click to collapse" : "Click to expand"}</span>
        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="w-4 h-4" />
        </motion.div>
      </div>
    </div>

    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="px-6 pb-6"
        >
          <div className="border-t border-foreground/10 pt-6 mt-2">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-2">
                  Challenge
                </h4>
                <p className="text-lumin8-gray-400 leading-relaxed">{study.challenge}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-2">
                  Solution
                </h4>
                <p className="text-lumin8-gray-400 leading-relaxed">{study.solution}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-2">
                  Results
                </h4>
                <p className="text-lumin8-gray-400 leading-relaxed">{study.result}</p>
              </div>
            </div>

            {study.slug && (
              <Link
                to={study.slug}
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold transition-transform hover:translate-x-1"
                style={{ color: study.accentColor }}
                onClick={(e) => e.stopPropagation()}
              >
                View full case study
                <ArrowRight className="w-4 h-4" />
              </Link>
            )}

            <div
              className="h-0.5 w-full mt-6 rounded-full"
              style={{
                background: `linear-gradient(90deg, transparent, ${study.accentColor}, transparent)`,
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </>
);

export default CaseStudiesSection;
