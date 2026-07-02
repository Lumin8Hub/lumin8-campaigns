import SectionReveal from "./animations/SectionReveal";
import BrowserMockup from "./casestudy/BrowserMockup";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const stats = [
  { value: "3 days", label: "from completed intake form to live site" },
  { value: "$1,000", label: "flat, everything included, no hourly billing" },
  { value: "100% yours", label: "your domain, your content, your data" },
];

const screenshots = [
  {
    src: "candidates/dorit4trustee-desktop.png",
    alt: "dorit4trustee.com on desktop",
    mobile: false,
  },
  {
    src: "candidates/dorit4trustee-mobile.png",
    alt: "dorit4trustee.com on mobile",
    mobile: true,
  },
];

const ProofSection = () => {
  return (
    <section id="proof" className="bg-background py-24 px-6 relative overflow-hidden">
      <div className="blob blob-green w-36 h-36 top-20 -right-10 opacity-25 blur-[60px]" />

      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="section-headline text-foreground mb-6">
            We don't just build campaign sites. We run a campaign.
          </h2>
          <p className="text-lumin8-gray-400 text-lg leading-relaxed max-w-3xl mb-12">
            Lumin8's founder is the registered campaign manager for a 2026
            school board trustee campaign in York Region — and built its
            website:{" "}
            <a
              href="https://dorit4trustee.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-4 hover:decoration-2"
            >
              dorit4trustee.com
            </a>
            . That means we know what a municipal campaign site actually needs
            (and what wastes your money): a clear platform, a strong bio,
            ward-specific messaging, volunteer capture, donation handling that
            respects contribution rules, and the disclaimers your auditor will
            ask about.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.15}>
          <Carousel opts={{ loop: true }} className="mb-12">
            <CarouselContent>
              {screenshots.map((shot) => (
                <CarouselItem key={shot.src}>
                  {shot.mobile ? (
                    <div className="flex justify-center py-4">
                      {/* Phone frame */}
                      <div className="w-full max-w-[300px] rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl">
                        <div className="rounded-[1.4rem] overflow-hidden border border-white/10">
                          <img
                            src={`${import.meta.env.BASE_URL}${shot.src}`}
                            alt={shot.alt}
                            loading="lazy"
                            className="w-full h-auto block"
                          />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <BrowserMockup url="dorit4trustee.com" accentColor="#b39dff">
                      <img
                        src={`${import.meta.env.BASE_URL}${shot.src}`}
                        alt={shot.alt}
                        loading="lazy"
                        className="w-full h-full object-cover object-top"
                      />
                    </BrowserMockup>
                  )}
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:inline-flex" />
            <CarouselNext className="hidden md:inline-flex" />
          </Carousel>
        </SectionReveal>

        <div className="grid sm:grid-cols-3 gap-4">
          {stats.map((s, i) => (
            <SectionReveal key={s.value} delay={0.1 * i}>
              <div className="bg-muted rounded-2xl border border-foreground/[0.06] p-6 text-center h-full">
                <p className="font-heading font-extrabold text-primary text-3xl mb-2">{s.value}</p>
                <p className="text-lumin8-gray-400 text-sm leading-relaxed">{s.label}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProofSection;
