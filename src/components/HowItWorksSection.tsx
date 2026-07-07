import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { candidateProcessSteps } from "@/data/candidateProcess";
import SectionReveal from "./animations/SectionReveal";
import { openCandidateForm } from "@/lib/tally";

const stepImages = [
  {
    src: "candidates/process-intake.webp",
    alt: "Hands using a laptop with an abstract campaign website intake form",
  },
  {
    src: "candidates/process-build.webp",
    alt: "A bright workspace showing an abstract campaign website build",
  },
  {
    src: "candidates/process-launch.webp",
    alt: "Desktop and mobile devices showing an abstract launched campaign website",
  },
];

const HowItWorksSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<SVGLineElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const line = lineRef.current;
        if (!line) return;
        const length = line.getTotalLength();
        gsap.set(line, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(line, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "center 45%",
            scrub: true,
          },
        });
      });
    }, sectionRef);
    return () => {
      ctx.revert();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <section ref={sectionRef} id="process" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <span className="section-label">How It Works</span>
          <h2 className="section-headline mb-2 text-foreground">Live in three steps.</h2>
          <p className="section-subheadline mb-16">
            A short form, a focused build, a clean launch.
          </p>
        </SectionReveal>

        <div className="relative">
          {/* Connector line, drawn as you scroll; visible in the gaps between cards */}
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 top-16 z-0 hidden h-[2px] w-full lg:block"
            preserveAspectRatio="none"
            viewBox="0 0 100 2"
          >
            <line
              ref={lineRef}
              x1="0"
              y1="1"
              x2="100"
              y2="1"
              vectorEffect="non-scaling-stroke"
              className="stroke-primary"
              strokeWidth="2"
            />
          </svg>

          <div className="grid gap-5 lg:grid-cols-3">
            {candidateProcessSteps.map((step, index) => {
              const image = stepImages[index] || stepImages[0];

              return (
                <SectionReveal key={step.step} delay={index * 0.1} className="relative z-10">
                  <article className="h-full overflow-hidden rounded-2xl border border-black/[0.06] bg-lumin8-off-white transition-shadow duration-300 hover:shadow-md">
                    <div className="aspect-[16/10] overflow-hidden bg-muted">
                      <img
                        src={`${import.meta.env.BASE_URL}${image.src}`}
                        alt={image.alt}
                        width={800}
                        height={500}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="p-7">
                      <div className="mb-6 flex items-center justify-between gap-4">
                        <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">
                          {step.timeline}
                        </p>
                        <motion.span
                          initial={false}
                          whileInView={shouldReduceMotion ? {} : { scale: [1, 1.1, 1] }}
                          viewport={{ once: true, margin: "-80px" }}
                          transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 + index * 0.1 }}
                          className="rounded-full bg-background px-4 py-2 text-sm font-bold text-primary"
                        >
                          Step {index + 1}
                        </motion.span>
                      </div>

                      <h3 className="mb-3 font-heading text-2xl font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </article>
                </SectionReveal>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex justify-start">
          <button
            onClick={openCandidateForm}
            className="rounded-full bg-accent px-8 py-3 font-heading font-semibold text-accent-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
