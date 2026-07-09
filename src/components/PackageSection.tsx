import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { candidatePackage } from "@/data/candidatePackage";
import SectionReveal from "./animations/SectionReveal";
import { openCandidateForm } from "@/lib/tally";

const PackageSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const priceRef = useRef<HTMLSpanElement>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const counter = { value: 0 };
        gsap.to(counter, {
          value: candidatePackage.price,
          duration: 0.8,
          ease: "power2.out",
          snap: { value: 1 },
          scrollTrigger: {
            trigger: priceRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          onUpdate: () => {
            if (priceRef.current) {
              priceRef.current.textContent = `$${counter.value.toLocaleString("en-CA")}`;
            }
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
    <section ref={sectionRef} id="package" className="bg-lumin8-off-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <span className="section-label">Core Package</span>
          <h2 className="section-headline mb-4 text-foreground">Campaign website package</h2>
          <p className="section-subheadline mb-12">{candidatePackage.tagline}</p>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <div className="rounded-2xl border border-primary/40 bg-background p-8 md:p-14">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
              <h3 className="font-heading text-3xl font-bold text-foreground">
                {candidatePackage.name}
              </h3>
              <p className="font-heading font-extrabold tracking-tight text-foreground">
                <span
                  ref={priceRef}
                  className="text-5xl tabular-nums md:text-6xl"
                >{`$${candidatePackage.price.toLocaleString("en-CA")}`}</span>
                <span className="ml-2 text-base font-bold text-muted-foreground">
                  {candidatePackage.currency}
                </span>
              </p>
            </div>

            <ul className="mb-8 grid gap-x-8 gap-y-3 md:grid-cols-2">
              {candidatePackage.features.map((f, i) => (
                <motion.li
                  key={f}
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.05 }}
                  className="flex items-start gap-3 text-lg text-foreground/80"
                >
                  <Check className="mt-1 h-5 w-5 shrink-0 text-primary" />
                  <span>{f}</span>
                </motion.li>
              ))}
            </ul>

            <button
              onClick={openCandidateForm}
              className="block w-full rounded-full bg-cta px-10 py-4 text-center font-heading font-semibold text-accent-foreground transition-transform duration-300 hover:scale-[1.02] md:w-auto"
            >
              {candidatePackage.cta}
            </button>

            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {candidatePackage.microcopy}
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default PackageSection;
