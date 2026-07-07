import { useEffect } from "react";
import { gsap } from "gsap";
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
  { icon: BadgeDollarSign, text: "Transparent campaign pricing" },
  { icon: MapleLeafIcon, text: "Built for Canadian elections" },
];

const CandidatesHero = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from(".hero-headline", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" })
        .from(".hero-subline", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".hero-ctas", { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.3")
        .from(".hero-art", { y: 36, opacity: 0, duration: 0.7, ease: "power3.out" }, "-=0.2");
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="relative flex min-h-[100dvh] items-center overflow-hidden bg-background px-6 py-28 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.72fr)] lg:gap-12">
          <div>
            <h1
              className="hero-headline mb-5 max-w-4xl font-heading font-extrabold leading-[1.02] tracking-tight text-foreground"
              style={{ fontSize: "clamp(3rem, 6vw, 5.35rem)" }}
            >
              Your winning campaign website starts here.
            </h1>

            <p
              className="hero-subline mb-5 max-w-2xl font-heading font-semibold leading-snug text-primary"
              style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.85rem)" }}
            >
              Professional municipal campaign sites, launch fast, price clearly.
            </p>

            <div className="hero-ctas flex flex-col items-start gap-4">
              <MagneticButton
                as="button"
                onClick={openCandidateForm}
                className="inline-block rounded-full bg-primary px-8 py-4 text-center font-heading font-bold text-primary-foreground shadow-sm"
              >
                Get Started
              </MagneticButton>
            </div>
          </div>

          <div className="hero-art overflow-hidden rounded-lg border border-foreground/10 bg-lumin8-off-white shadow-sm lg:row-span-2">
            <img
              src={`${import.meta.env.BASE_URL}candidates/hero-candidate-grid.png`}
              alt="A grid of diverse, generic municipal candidates looking toward each other"
              className="block aspect-square w-full object-cover object-center"
              fetchPriority="high"
            />
          </div>

          <div>
            <ul className="hero-ctas grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {trustItems.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center gap-3 rounded-lg border border-foreground/10 bg-lumin8-off-white px-4 py-3 text-sm font-semibold text-foreground"
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
