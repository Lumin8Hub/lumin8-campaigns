import { useEffect } from "react";
import { gsap } from "gsap";
import { CheckCircle2 } from "lucide-react";
import MagneticButton from "./animations/MagneticButton";
import { openCandidateForm } from "@/lib/tally";

const trustItems = [
  "Live in 3 business days",
  "$1,000 CAD flat package",
  "Built with Canadian election finance rules in mind",
];

const CandidatesHero = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });
      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6, ease: "power3.out" })
        .from(".hero-headline", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.3")
        .from(".hero-subline", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.4")
        .from(".hero-body", { y: 30, opacity: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
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
            <span className="hero-eyebrow section-label">
              Lumin8 for Candidates
            </span>

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
            <p className="hero-body mb-8 max-w-2xl text-xl leading-relaxed text-muted-foreground">
              Start with a short intake. Get a mobile-first campaign home base for
              your platform, volunteers, donations, endorsements, and voter contact.
            </p>

            <div className="hero-ctas mb-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <MagneticButton
                as="button"
                onClick={openCandidateForm}
                className="inline-block rounded-full bg-primary px-8 py-4 text-center font-heading font-bold text-primary-foreground shadow-sm"
              >
                Start with five fields
              </MagneticButton>
              <span className="text-base font-medium text-muted-foreground">
                We will follow up with next steps and payment details.
              </span>
            </div>

            <ul className="hero-ctas flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-8 sm:gap-y-3">
              {trustItems.map((item) => (
                <li key={item} className="flex items-center gap-2 text-base text-muted-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  {item}
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
