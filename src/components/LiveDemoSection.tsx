import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "lucide-react";
import { candidateDemo, demoHints } from "@/data/candidateDemo";
import SectionReveal from "./animations/SectionReveal";
import { openCandidateForm } from "@/lib/tally";

// The widget is a self-contained web component; declare it for JSX.
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "campaign-hero-demo": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

const LiveDemoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [ready, setReady] = useState(false);

  // Lazy-load: inject the widget script only when the section approaches the
  // viewport. The querySelector guard keeps the script single-instance even
  // with StrictMode double-effects.
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const load = () => {
      if (!document.querySelector('script[src*="campaign-hero-widget"]')) {
        const script = document.createElement("script");
        script.src = candidateDemo.widgetScriptUrl;
        script.defer = true;
        document.head.appendChild(script);
      }
      setReady(true);
    };

    if (!("IntersectionObserver" in window)) {
      load();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          load();
          observer.disconnect();
        }
      },
      { rootMargin: "600px" },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="live-demo" className="bg-lumin8-off-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <span className="section-label">{candidateDemo.eyebrow}</span>
          <h2 className="section-headline max-w-3xl text-foreground">
            {candidateDemo.heading}
          </h2>
          <p className="section-subheadline mb-12">{candidateDemo.lede}</p>
        </SectionReveal>

        {/* How-to hints */}
        <SectionReveal delay={0.1}>
          <div className="mb-8 grid gap-4 md:grid-cols-3">
            {demoHints.map((hint) => (
              <div
                key={hint.heading}
                className="h-full rounded-2xl border border-black/[0.06] bg-background p-6"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/15">
                  <hint.icon className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <h3 className="mb-2 font-heading text-xl font-bold text-foreground">
                  {hint.heading}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">{hint.text}</p>
              </div>
            ))}
          </div>
        </SectionReveal>

        {/* Widget frame — min-height reserved to avoid layout shift while the
            script loads and the custom element upgrades. */}
        <SectionReveal delay={0.2}>
          <div className="overflow-hidden rounded-2xl border border-black/[0.06] bg-background p-2 shadow-sm md:p-3">
            <div className="relative min-h-[560px]">
              {ready ? (
                <campaign-hero-demo></campaign-hero-demo>
              ) : (
                <div
                  aria-hidden="true"
                  className="absolute inset-0 animate-pulse rounded-xl bg-muted"
                />
              )}
            </div>
          </div>
          <p className="mt-3 text-sm text-muted-foreground md:hidden">
            {candidateDemo.mobileHint}
          </p>
        </SectionReveal>

        {/* Value paragraph + CTAs */}
        <SectionReveal delay={0.1}>
          <p className="mt-12 max-w-3xl text-xl leading-relaxed text-muted-foreground">
            {candidateDemo.valueParagraph}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={candidateDemo.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cta px-8 py-4 text-center font-heading font-semibold text-cta-foreground transition-transform duration-300 hover:scale-[1.03]"
            >
              {candidateDemo.primaryCta}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
            <button
              onClick={openCandidateForm}
              className="rounded-full border border-foreground/20 px-8 py-4 font-heading font-semibold text-foreground transition-transform duration-300 hover:scale-[1.03]"
            >
              {candidateDemo.secondaryCta}
            </button>
          </div>

          <p className="mt-6 text-sm text-muted-foreground">{candidateDemo.finePrint}</p>
        </SectionReveal>
      </div>
    </section>
  );
};

export default LiveDemoSection;
