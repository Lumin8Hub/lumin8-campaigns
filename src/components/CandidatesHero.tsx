import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BadgeDollarSign, Clock3 } from "lucide-react";
import MagneticButton from "./animations/MagneticButton";
import { openCandidateForm } from "@/lib/tally";

const MapleLeafIcon = ({ className = "" }: { className?: string }) => (
  <svg
    aria-hidden="true"
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    focusable="false"
  >
    <path d="M12 2.8 13.7 8l4.4-2.5-1.4 4.7 4.6.6-3.8 3.1 2 4-4.8-1-1.7 4.3h-2l-1.7-4.3-4.8 1 2-4-3.8-3.1 4.6-.6L5.9 5.5 10.3 8 12 2.8Z" />
  </svg>
);

const trustItems = [
  { icon: Clock3, text: "Live in 3 business days" },
  { icon: BadgeDollarSign, text: "$1,000 CAD flat" },
  { icon: MapleLeafIcon, text: "Built for Canadian election rules" },
];

const heroTiles = [
  { src: "candidates/hero-tile-1.webp", alt: "Illustrated candidate smiling beside a VOTE sign" },
  { src: "candidates/hero-tile-2.webp", alt: "Illustrated candidate in a suit beside an ELECT sign" },
  { src: "candidates/hero-tile-3.webp", alt: "Illustrated candidate beside a RE-ELECT sign" },
  { src: "candidates/hero-tile-4.webp", alt: "Illustrated candidate beside a VOTE FOR CHANGE sign" },
  { src: "candidates/hero-tile-5.webp", alt: "Illustrated candidate beside a FOR COUNCIL sign" },
  { src: "candidates/hero-tile-6.webp", alt: "Illustrated candidate beside a school board campaign sign" },
  { src: "candidates/hero-tile-7.webp", alt: "Illustrated candidate beside a FOR MAYOR sign" },
  { src: "candidates/hero-tile-8.webp", alt: "Illustrated candidate beside a YOUR VOICE sign" },
  { src: "candidates/hero-tile-9.webp", alt: "Illustrated candidate beside an ELECTION DAY sign" },
];

const CandidatesHero = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({ delay: 0.2 });
        tl.from(".hero-eyebrow", { y: 24, opacity: 0, duration: 0.6, ease: "power3.out" })
          .from(
            ".hero-line",
            { y: 40, opacity: 0, duration: 0.7, ease: "power3.out", stagger: 0.1 },
            "-=0.4",
          )
          .from(".hero-subline", { y: 40, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
          .from(".hero-ctas", { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
          .from(".hero-chip", { y: 20, opacity: 0, duration: 0.5, ease: "power3.out", stagger: 0.1 }, "-=0.4")
          .from(
            ".hero-tile",
            { scale: 0.9, opacity: 0, duration: 0.5, ease: "power3.out", stagger: 0.06 },
            0.3,
          );

        // Parallax drift: grid moves slightly slower than the page
        gsap.to(".hero-grid", {
          y: -48,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-[100dvh] items-center overflow-hidden bg-background px-6 py-28 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.72fr)] lg:gap-12">
          <div>
            <span className="hero-eyebrow section-label">For Municipal Candidates</span>

            <h1
              className="mb-5 max-w-4xl font-heading font-extrabold leading-[1.02] tracking-tight text-foreground"
              style={{ fontSize: "clamp(3rem, 6vw, 5.35rem)" }}
            >
              <span className="hero-line block">Your winning campaign</span>
              <span className="hero-line block">website starts here.</span>
            </h1>

            <p
              className="hero-subline mb-5 max-w-2xl font-heading font-semibold leading-snug text-primary"
              style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)" }}
            >
              Professional campaign sites, live in 3 days, for a flat $1,000 CAD.
            </p>

            <div className="hero-ctas flex flex-col items-start gap-4">
              <MagneticButton
                as="button"
                onClick={openCandidateForm}
                className="inline-block rounded-full bg-cta px-8 py-4 text-center font-heading font-bold text-accent-foreground shadow-sm"
              >
                Get Started
              </MagneticButton>
            </div>
          </div>

          <div className="hero-grid grid aspect-square grid-cols-3 gap-[2px] overflow-hidden rounded-2xl bg-background lg:row-span-2">
            {heroTiles.map((tile) => (
              <img
                key={tile.src}
                src={`${import.meta.env.BASE_URL}${tile.src}`}
                alt={tile.alt}
                width={400}
                height={400}
                loading="eager"
                className="hero-tile block aspect-square h-full w-full rounded-lg object-cover"
              />
            ))}
          </div>

          <div>
            <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {trustItems.map((item) => (
                <li
                  key={item.text}
                  className="hero-chip flex items-center gap-3 rounded-2xl border border-black/[0.06] bg-lumin8-off-white px-4 py-3 text-sm font-semibold text-foreground"
                >
                  <item.icon className="h-5 w-5 shrink-0 text-primary" />
                  <span>{item.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CandidatesHero;
