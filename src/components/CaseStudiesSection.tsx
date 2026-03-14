import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const studies = [
  {
    id: 1,
    company: "Acronym Solutions",
    tag: "Website & Branding",
    accentColor: "#79cac1",
    summary: "Professional digital presence for a growing consultancy.",
    challenge: "[Placeholder — awaiting case study content]",
    solution: "[Placeholder — awaiting case study content]",
    result: "[Placeholder — awaiting case study content]",
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
    tag: "Community Website",
    accentColor: "#3FB950",
    summary: "Digital home for a vibrant community brand.",
    challenge: "[Placeholder — awaiting case study content]",
    solution: "[Placeholder — awaiting case study content]",
    result: "[Placeholder — awaiting case study content]",
  },
];

const CaseStudiesSection = () => {
  const sectionRef = useScrollAnimation();
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-green w-36 h-36 top-10 -right-10 opacity-30 blur-[50px]" />
      <div className="blob blob-lavender w-28 h-28 bottom-20 -left-10 opacity-30 blur-[50px]" />

      <div className="max-w-6xl mx-auto">
        <h2 className="section-headline text-foreground mb-4">A full-service agency</h2>
        <p className="section-subheadline mb-16">
          See how we've helped businesses like yours build their digital presence.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {studies.map((study) => {
            const isExpanded = expandedId === study.id;

            return (
              <div
                key={study.id}
                onClick={() => setExpandedId(isExpanded ? null : study.id)}
                className={`cursor-pointer rounded-xl border overflow-hidden transition-all duration-300 ${
                  isExpanded
                    ? "col-span-1 md:col-span-3 border-2"
                    : "border-foreground/[0.08] bg-muted/30 hover:-translate-y-1 hover:shadow-xl"
                }`}
                style={{
                  borderColor: isExpanded ? study.accentColor : undefined,
                }}
              >
                {/* Card Header */}
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    {/* Placeholder logo */}
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
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                    />
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-6">
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

                      {/* Accent line */}
                      <div
                        className="h-0.5 w-full mt-6 rounded-full"
                        style={{
                          background: `linear-gradient(90deg, transparent, ${study.accentColor}, transparent)`,
                        }}
                      />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
