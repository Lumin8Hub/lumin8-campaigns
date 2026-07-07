import { useEffect } from "react";
import { gsap } from "gsap";
import { BadgeDollarSign, Clock3, ShieldCheck } from "lucide-react";
import MagneticButton from "./animations/MagneticButton";
import { openCandidateForm } from "@/lib/tally";

const trustItems = [
  { icon: Clock3, text: "Live in 3 business days" },
  { icon: BadgeDollarSign, text: "$1,000 CAD flat package" },
  { icon: ShieldCheck, text: "Built with Canadian election finance rules in mind" },
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
              Professional municipal campaign sites, launched fast, priced clearly,
              and built to help voters take the next step.
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
