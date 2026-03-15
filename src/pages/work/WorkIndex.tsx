import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionReveal from "@/components/animations/SectionReveal";

const caseStudies = [
  {
    slug: "earth-song",
    company: "Earth Song Festival",
    description: "Nature-inspired website and brand identity for a holistic wellness community.",
    accentColor: "#2D5016",
    glowColor: "rgba(45,80,22,0.15)",
    tags: ["Festival", "Ticketing", "React", "Supabase"],
  },
  {
    slug: "unapologetically-jewish",
    company: "Unapologetically Jewish",
    description: "Bold community platform with e-commerce and donation integration.",
    accentColor: "#DC2626",
    glowColor: "rgba(220,38,38,0.15)",
    tags: ["Nonprofit", "Activism", "E-Commerce", "Donations"],
  },
  {
    slug: "sportball",
    company: "Sportball",
    description:
      "Full-funnel rebrand, multi-location CMS, and performance marketing for a 20+ location children's sports franchise.",
    accentColor: "#00A3E0",
    glowColor: "rgba(0,163,224,0.15)",
    tags: ["Rebrand", "Franchise", "CMS", "Performance Marketing"],
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((study, i) => (
                <motion.div
                  key={study.slug}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to={`/work/${study.slug}`} className="block group h-full">
                    <div
                      className="rounded-xl bg-muted/30 overflow-hidden transition-all duration-300 group-hover:shadow-lg h-full flex flex-col"
                      style={{
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.boxShadow = `0 12px 40px ${study.glowColor}`;
                        e.currentTarget.style.borderColor = `${study.accentColor}40`;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                      }}
                    >
                      {/* Colored top border */}
                      <div
                        className="h-[3px] w-full"
                        style={{ backgroundColor: study.accentColor }}
                      />

                      {/* Screenshot placeholder */}
                      <div
                        className="aspect-video w-full flex items-center justify-center"
                        style={{
                          background: `linear-gradient(135deg, ${study.accentColor}10, ${study.accentColor}05)`,
                        }}
                      >
                        <span
                          className="text-3xl font-heading font-bold opacity-15"
                          style={{ color: study.accentColor }}
                        >
                          {study.company}
                        </span>
                      </div>

                      <div className="p-6 flex flex-col flex-1">
                        {/* Client name */}
                        <h2 className="text-xl font-heading font-bold text-foreground mb-2">
                          {study.company}
                        </h2>

                        {/* Description */}
                        <p className="text-sm text-lumin8-gray-400 leading-relaxed mb-4 flex-1">
                          {study.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {study.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[11px] font-mono px-2 py-0.5 rounded-full border border-foreground/10 text-foreground/50"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* CTA */}
                        <div
                          className="inline-flex items-center gap-2 text-sm font-semibold transition-transform group-hover:translate-x-1"
                          style={{ color: study.accentColor }}
                        >
                          Read Case Study
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
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
