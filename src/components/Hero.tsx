import { useEffect } from "react";
import { gsap } from "gsap";
import SparkleBackground from "./animations/SparkleBackground";
import MagneticButton from "./animations/MagneticButton";

const CONTEST_FORM_URL = "#contest"; // PLACEHOLDER

const Hero = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from(".hero-headline", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" })
        .from(".hero-subline", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".hero-body", { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
        .from(".hero-ctas", { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3");
    });
    return () => ctx.revert();
  }, []);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[100dvh] flex items-end bg-background overflow-hidden">
      {/* Blobs */}
      <div className="blob blob-green w-48 h-48 top-[15%] right-[10%] opacity-60 blur-[60px]" />
      <div className="blob blob-pink w-36 h-36 top-[30%] left-[5%] opacity-50 blur-[50px]" />
      <div className="blob blob-yellow w-28 h-28 top-[20%] right-[35%] opacity-40 blur-[40px]" />

      {/* Sparkles */}
      <SparkleBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pb-20 md:pb-28 pt-32 w-full">
        <h1
          className="hero-headline font-heading font-extrabold tracking-[-0.03em] leading-[1.05] text-foreground mb-4"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
        >
          A professional website
          <br />
          for your business.
        </h1>

        <p className="hero-subline font-serif italic text-primary mb-6" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}>
          Without the agency price tag.
        </p>

        <p className="hero-body max-w-xl text-lumin8-gray-400 text-lg leading-relaxed mb-8">
          Lumin8 Starter delivers a custom, strategically built website crafted by a real marketing team — not a drag-and-drop template. AI-accelerated. Human-refined. Starting at $750 CAD.
        </p>

        <div className="hero-ctas flex flex-col sm:flex-row gap-4 mb-4">
          <MagneticButton
            as="a"
            href={CONTEST_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-heading font-bold px-8 py-4 rounded-full text-center inline-block"
          >
            Win a Free Website →
          </MagneticButton>
          <button
            onClick={() => scrollTo("#pricing")}
            className="border border-foreground/30 text-foreground font-heading font-semibold px-8 py-4 rounded-full hover:scale-[1.03] transition-transform duration-300"
          >
            See Packages
          </button>
        </div>

        <p className="hero-ctas text-sm text-lumin8-gray-400">
          🎉 Enter our contest for a chance to win a Starter website valued at $750
        </p>
      </div>
    </section>
  );
};

export default Hero;
