import { Globe, Heart, Megaphone, Shield, Smartphone, Users } from "lucide-react";
import CaseStudyLayout from "@/components/casestudy/CaseStudyLayout";
import BrowserMockup from "@/components/casestudy/BrowserMockup";
import StatsBar from "@/components/casestudy/StatsBar";
import FeatureGrid from "@/components/casestudy/FeatureGrid";
import Timeline from "@/components/casestudy/Timeline";
import TestimonialBand from "@/components/casestudy/TestimonialBand";
import SectionReveal from "@/components/animations/SectionReveal";

const ACCENT_RED = "#CC0000";
const ACCENT_WHITE = "#FFFFFF";

const stats = [
  { value: "5x", label: "Community engagement" },
  { value: "10", label: "Days to launch" },
  { value: "100%", label: "Mobile responsive" },
  { value: "24/7", label: "Always online" },
];

const features = [
  {
    icon: <Users className="w-5 h-5" />,
    title: "Community Hub",
    description: "Centralized platform connecting community members with events, resources, and each other.",
  },
  {
    icon: <Megaphone className="w-5 h-5" />,
    title: "Bold Brand Voice",
    description: "Unapologetic design language with high-contrast red, black, and white that commands attention.",
  },
  {
    icon: <Heart className="w-5 h-5" />,
    title: "Event Management",
    description: "Integrated event listings and registration flows for community gatherings and cultural events.",
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Secure & Fast",
    description: "Static React build with zero server dependencies — fast, secure, and impossible to hack.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "SEO & Discovery",
    description: "Optimized for search to help community members and allies find the platform organically.",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Mobile-First Design",
    description: "Designed for the way people actually use the web — on their phones, on the go.",
  },
];

const timeline = [
  {
    phase: "Phase 1 — Brief",
    title: "Defining the Mission",
    description: "Understood Matt's vision for a digital home that's as bold and unapologetic as the community it serves. Mapped key user journeys.",
  },
  {
    phase: "Phase 2 — Content",
    title: "Writing With Purpose",
    description: "Crafted copy that balances strength with warmth — proud, inclusive, and action-oriented. Every word reviewed by the community leader.",
  },
  {
    phase: "Phase 3 — Build",
    title: "Brutalist Meets Functional",
    description: "Custom React build with a high-contrast palette, Oswald headings for impact, and clean layouts that prioritize readability and action.",
  },
  {
    phase: "Phase 4 — Launch",
    title: "Going Live",
    description: "Two revision rounds, performance optimization, and deployment. The site launched to an enthusiastic community response.",
  },
];

const UnapologeticallyJewish = () => (
  <CaseStudyLayout accentColor={ACCENT_RED}>
    {/* Hero */}
    <section className="px-6 pb-16">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div
            className="text-xs font-mono uppercase tracking-wider mb-4"
            style={{ color: ACCENT_RED }}
          >
            Case Study
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: '"Oswald", sans-serif', color: ACCENT_WHITE, textTransform: "uppercase" }}
          >
            Unapologetically Jewish
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-body">
            A bold, high-impact digital home for a vibrant community brand
            — designed to be as unapologetic as the movement it represents.
          </p>
        </SectionReveal>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-8">
          {["Community Platform", "Brutalist Design", "Event Integration", "Brand Identity"].map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1.5 rounded-full border"
              style={{ borderColor: `${ACCENT_RED}60`, color: ACCENT_RED }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Browser Mockup */}
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <SectionReveal delay={0.2}>
          <BrowserMockup url="unapologeticallyjewish.com" accentColor={ACCENT_RED}>
            <div className="absolute inset-0 flex items-center justify-center bg-black/40">
              <div className="text-center px-8">
                <div
                  className="text-5xl md:text-7xl font-bold mb-4 opacity-30 uppercase"
                  style={{ fontFamily: '"Oswald", sans-serif', color: ACCENT_RED }}
                >
                  UJ
                </div>
                <div className="text-sm text-white/30 font-mono uppercase tracking-widest">
                  Proud · Bold · Together
                </div>
              </div>
            </div>
          </BrowserMockup>
        </SectionReveal>
      </div>
    </section>

    {/* Stats */}
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <StatsBar stats={stats} accentColor={ACCENT_RED} />
      </div>
    </section>

    {/* Challenge & Solution */}
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2
                className="text-2xl font-bold mb-4 uppercase"
                style={{ fontFamily: '"Oswald", sans-serif', color: ACCENT_WHITE }}
              >
                The Challenge
              </h2>
              <p className="text-white/60 leading-relaxed">
                Unapologetically Jewish had built an incredible community through social media
                and in-person events, but lacked a dedicated digital home. Their brand energy
                — bold, proud, and unapologetically authentic — needed a website that matched
                that intensity. They needed a platform that could serve as a central hub for
                events, resources, and community connection, while making a strong visual
                statement about who they are.
              </p>
            </div>
            <div>
              <h2
                className="text-2xl font-bold mb-4 uppercase"
                style={{ fontFamily: '"Oswald", sans-serif', color: ACCENT_WHITE }}
              >
                The Solution
              </h2>
              <p className="text-white/60 leading-relaxed">
                We built a high-contrast, brutalist-inspired website that makes an immediate
                impact. The design uses a stark red, black, and white palette with Oswald
                typography for maximum visual punch. Every element is intentional — bold
                headlines, clean layouts, and clear calls-to-action that move visitors from
                awareness to engagement. The site serves as both a statement piece and a
                functional community hub.
              </p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>

    {/* Features */}
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2
            className="text-2xl font-bold mb-8 uppercase"
            style={{ fontFamily: '"Oswald", sans-serif', color: ACCENT_WHITE }}
          >
            What We Delivered
          </h2>
        </SectionReveal>
        <FeatureGrid features={features} accentColor={ACCENT_RED} />
      </div>
    </section>

    {/* Testimonial */}
    <section
      className="mx-6 rounded-xl mb-20"
      style={{ backgroundColor: `${ACCENT_RED}15` }}
    >
      <TestimonialBand
        quote="Lumin8 understood exactly what we needed. The website they built has been a game-changer for our community engagement."
        author="Matt"
        role="Founder, Unapologetically Jewish"
        accentColor={ACCENT_RED}
      />
    </section>

    {/* Timeline */}
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2
            className="text-2xl font-bold mb-10 uppercase"
            style={{ fontFamily: '"Oswald", sans-serif', color: ACCENT_WHITE }}
          >
            Project Timeline
          </h2>
        </SectionReveal>
        <Timeline steps={timeline} accentColor={ACCENT_RED} />
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 pb-24">
      <div className="max-w-5xl mx-auto text-center">
        <SectionReveal>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4 uppercase"
            style={{ fontFamily: '"Oswald", sans-serif', color: ACCENT_WHITE }}
          >
            Ready to make your mark?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Let's build something bold together. Starting at $750 CAD.
          </p>
          <a
            href="/#pricing"
            className="inline-flex items-center gap-2 font-heading font-semibold text-sm px-8 py-3 rounded-full transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: ACCENT_RED, color: ACCENT_WHITE }}
          >
            View Packages →
          </a>
        </SectionReveal>
      </div>
    </section>
  </CaseStudyLayout>
);

export default UnapologeticallyJewish;
