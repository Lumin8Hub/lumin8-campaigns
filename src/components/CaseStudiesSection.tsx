import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import SectionReveal from "./animations/SectionReveal";
import GlowCard from "./animations/GlowCard";
import SectionCTA from "./SectionCTA";

const studies = [
  {
    id: 1,
    company: "Earth Song Festival",
    tag: "Website & Brand Identity",
    accentColor: "#fde065",
    textColor: "#1a1a1a",
    slug: "/work/earth-song",
    logoUrl: "/logos/EarthSongFestival.png",
    screenshotUrl: "/screenshots/earth-song-festival-site.png",
    summary: "A nature-inspired digital presence for a holistic wellness practitioner.",
    challenge: "Earth Song Festival had a growing community but no cohesive digital home — just fragmented social profiles and a basic landing page.",
    solution: "We designed a custom React website with a forest green and gold palette, DM Serif Display typography, and nature-inspired animations.",
    result: "3x increase in inquiries, a professional digital presence, and a platform that truly reflects the brand's warmth and authenticity.",
  },
  {
    id: 2,
    company: "Sportball",
    tag: "Rebrand & Digital Transformation",
    accentColor: "#2DD4BF",
    textColor: "#1a1a1a",
    slug: "/work/sportball",
    logoUrl: "/logos/Sportball.png",
    summary: "Full-funnel rebrand, multi-location CMS, and performance marketing for a 20+ location franchise network.",
    challenge: "Following an acquisition, Sportball needed a full rebrand and marketing transformation to unify their 20+ franchise locations.",
    solution: "We led the rebrand, built a multi-location CMS, and deployed a performance marketing engine that cut CAC by over 60%.",
    result: "60%+ CAC reduction, <$10 cost-per-registration, and a scalable system serving 134K+ kids across 20+ locations.",
  },
  {
    id: 3,
    company: "Unapologetically Jewish",
    tag: "Community Platform",
    accentColor: "#ed4c96",
    textColor: "#ffffff",
    slug: "/work/unapologetically-jewish",
    logoUrl: "/logos/uj.png",
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
                    : "border-foreground/[0.08]"
                }`}
                style={{
                  borderColor: isExpanded ? study.accentColor : undefined,
                  backgroundColor: isExpanded ? undefined : study.accentColor,
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

        <SectionCTA text="Let's Build Your Website" />
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
      <div className="flex flex-col items-center gap-4 mb-3">
        <img
          src={study.logoUrl}
          alt={`${study.company} logo`}
          className="h-16 w-auto object-contain"
        />
        <div className="text-center">
          <span
            className="text-xs font-semibold uppercase tracking-wider"
            style={{ color: isExpanded ? study.accentColor : study.textColor }}
          >
            {study.tag}
          </span>
          <h3
            className="text-xl font-heading font-bold"
            style={{ color: isExpanded ? undefined : study.textColor }}
          >
            {study.company}
          </h3>
        </div>
      </div>
      <p
        className="mt-2"
        style={{ color: isExpanded ? undefined : study.textColor, opacity: isExpanded ? 0.7 : 0.85 }}
      >
        {study.summary}
      </p>

      {/* Earth Song Festival screenshot */}
      {study.screenshotUrl && !isExpanded && (
        <div className="mt-4 rounded-lg overflow-hidden border border-black/10">
          <img
            src={study.screenshotUrl}
            alt={`${study.company} website screenshot`}
            className="w-full h-auto object-cover"
          />
        </div>
      )}

      <div className="flex items-center gap-2 mt-4 text-sm" style={{ color: isExpanded ? undefined : study.textColor, opacity: 0.7 }}>
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
            {/* Screenshot in expanded view for Earth Song */}
            {study.screenshotUrl && (
              <div className="mb-6 rounded-lg overflow-hidden border border-foreground/10">
                <img
                  src={study.screenshotUrl}
                  alt={`${study.company} website screenshot`}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

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
