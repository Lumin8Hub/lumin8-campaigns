import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimation = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const label = el.querySelector(".section-label");
      const headline = el.querySelector(".section-headline");
      const subheadline = el.querySelector(".section-subheadline");

      if (label) {
        gsap.from(label, {
          scrollTrigger: { trigger: el, start: "top 85%" },
          y: 20, opacity: 0, duration: 0.5, ease: "power3.out",
        });
      }
      if (headline) {
        gsap.from(headline, {
          scrollTrigger: { trigger: el, start: "top 80%" },
          y: 30, opacity: 0, duration: 0.7, ease: "power3.out",
        });
      }
      if (subheadline) {
        gsap.from(subheadline, {
          scrollTrigger: { trigger: el, start: "top 78%" },
          y: 20, opacity: 0, duration: 0.6, ease: "power3.out", delay: 0.1,
        });
      }
    }, el);

    return () => ctx.revert();
  }, []);

  return sectionRef;
};

export const useCardStagger = (selector: string = ".stagger-card") => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.from(selector, {
        scrollTrigger: { trigger: el, start: "top 80%" },
        y: 60, opacity: 0, duration: 0.8, ease: "power3.out",
        stagger: 0.15,
      });
    }, el);

    return () => ctx.revert();
  }, [selector]);

  return containerRef;
};
