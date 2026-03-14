import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/animations/SectionReveal";
import GlowCard from "@/components/animations/GlowCard";

const caseStudies = [
  {
    slug: "earth-song",
    company: "Earth Songfire",
    tag: "Website & Brand Identity",
    accentColor: "#B08D57",
    summary:
      "A nature-inspired digital presence for a holistic wellness practitioner — warm, grounding, and beautifully intentional.",
    services: ["Custom Website", "Brand Identity", "SEO", "Content Strategy"],
  },
  {
    slug: "unapologetically-jewish",
    company: "Unapologetically Jewish",
    tag: "Community Platform",
    accentColor: "#CC0000",
    summary:
      "A bold, high-impact digital home for a vibrant community — designed to be as unapologetic as the movement it represents.",
    services: ["Custom Website", "Brutalist Design", "Event Integration", "Brand Identity"],
  },
];

const WorkIndex = () => {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-5xl mx-auto">
            <SectionReveal>
              <h1 className="section-headline text-foreground mb-4">Our Work</h1>
              <p className="section-subheadline mb-16">
                Real results for real businesses. Explore how we've helped our clients build
                their digital presence.
              </p>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={study.slug}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={`/work/${study.slug}`} className="block group">
                    <GlowCard glowColor={`${study.accentColor}14`}>
                      <div className="rounded-xl border border-foreground/[0.08] bg-muted/30 p-8 transition-all duration-300 group-hover:border-foreground/20">
                        {/* Header */}
                        <div className="flex items-center gap-4 mb-4">
                          <div
                            className="w-14 h-14 rounded-lg shrink-0"
                            style={{ backgroundColor: study.accentColor }}
                          />
                          <div>
                            <span
                              className="text-xs font-semibold uppercase tracking-wider"
                              style={{ color: study.accentColor }}
                            >
                              {study.tag}
                            </span>
                            <h2 className="text-2xl font-heading font-bold text-foreground">
                              {study.company}
                            </h2>
                          </div>
                        </div>

                        {/* Summary */}
                        <p className="text-lumin8-gray-400 mb-6 leading-relaxed">
                          {study.summary}
                        </p>

                        {/* Service tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {study.services.map((service) => (
                            <span
                              key={service}
                              className="text-xs font-mono px-2.5 py-1 rounded-full border border-foreground/10 text-foreground/50"
                            >
                              {service}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div
                          className="inline-flex items-center gap-2 text-sm font-semibold transition-transform group-hover:translate-x-1"
                          style={{ color: study.accentColor }}
                        >
                          View Case Study
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </GlowCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-6 pb-24">
          <div className="max-w-5xl mx-auto text-center">
            <SectionReveal>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">
                Want to be our next case study?
              </h2>
              <p className="text-lumin8-gray-400 mb-8 max-w-lg mx-auto">
                We build professional websites starting at $750 CAD.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-heading font-semibold text-sm px-8 py-3 rounded-full hover:scale-[1.03] transition-transform"
              >
                View Packages →
              </Link>
            </SectionReveal>
          </div>
        </section>

        <Footer />
      </motion.div>
    </div>
  );
};

export default WorkIndex;
