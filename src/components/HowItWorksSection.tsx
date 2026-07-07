import { ArrowRight } from "lucide-react";
import { candidateProcessSteps } from "@/data/candidateProcess";
import SectionReveal from "./animations/SectionReveal";
import { openCandidateForm } from "@/lib/tally";

const stepImages = [
  {
    src: "candidates/process-intake.png",
    alt: "Hands using a laptop with an abstract campaign website intake form",
  },
  {
    src: "candidates/process-build.png",
    alt: "A bright workspace showing an abstract campaign website build",
  },
  {
    src: "candidates/process-launch.png",
    alt: "Desktop and mobile devices showing an abstract launched campaign website",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="process" className="bg-background px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionReveal>
          <span className="section-label">How It Works</span>
          <h2 className="section-headline mb-2 text-foreground">Live in three steps.</h2>
          <p className="section-subheadline mb-16">
            A short start, a focused build, and a clean launch on your domain.
          </p>
        </SectionReveal>

        <div className="grid gap-5 lg:grid-cols-3">
          {candidateProcessSteps.map((step, index) => {
            const image = stepImages[index] || stepImages[0];

            return (
              <SectionReveal key={step.step} delay={index * 0.1}>
                <article className="relative h-full overflow-hidden rounded-lg border border-foreground/10 bg-lumin8-off-white">
                  {index < candidateProcessSteps.length - 1 && (
                    <div className="absolute -right-5 top-16 z-10 hidden h-10 w-10 items-center justify-center rounded-full border border-foreground/10 bg-background text-primary shadow-sm lg:flex">
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}

                  <div className="aspect-[16/10] overflow-hidden bg-muted">
                    <img
                      src={`${import.meta.env.BASE_URL}${image.src}`}
                      alt={image.alt}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="p-7">
                    <div className="mb-6 flex items-center justify-between gap-4">
                      <p className="text-sm font-bold uppercase tracking-[0.12em] text-primary">
                        {step.timeline}
                      </p>
                      <span className="rounded-full bg-background px-4 py-2 text-sm font-bold text-primary">
                        Step {index + 1}
                      </span>
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

        <div className="mt-10 flex justify-start">
          <button
            onClick={openCandidateForm}
            className="rounded-full bg-primary px-8 py-3 font-heading font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.03]"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
