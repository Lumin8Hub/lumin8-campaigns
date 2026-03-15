import { Globe, Leaf, Music, Palette, Smartphone, Zap } from "lucide-react";
import CaseStudyLayout from "@/components/casestudy/CaseStudyLayout";
import BrowserMockup from "@/components/casestudy/BrowserMockup";
import StatsBar from "@/components/casestudy/StatsBar";
import FeatureGrid from "@/components/casestudy/FeatureGrid";
import Timeline from "@/components/casestudy/Timeline";
import TestimonialBand from "@/components/casestudy/TestimonialBand";
import SectionReveal from "@/components/animations/SectionReveal";

const ACCENT = "#B08D57";
const ACCENT_GREEN = "#2D5A3D";

const stats = [
  { value: "3x", label: "Increase in inquiries" },
  { value: "10", label: "Days to launch" },
  { value: "100%", label: "Mobile responsive" },
  { value: "4.9★", label: "Client satisfaction" },
];

const features = [
  {
    icon: <Leaf className="w-5 h-5" />,
    title: "Nature-Inspired Design",
    description: "Earth tones, organic shapes, and flowing layouts that reflect the brand's connection to nature and healing.",
  },
  {
    icon: <Music className="w-5 h-5" />,
    title: "Event Integration",
    description: "Embedded calendar and registration system for workshops, sound healing sessions, and community gatherings.",
  },
  {
    icon: <Smartphone className="w-5 h-5" />,
    title: "Mobile-First Experience",
    description: "Fully responsive design ensuring a seamless experience across all devices for an on-the-go audience.",
  },
  {
    icon: <Palette className="w-5 h-5" />,
    title: "Custom Brand Identity",
    description: "Cohesive visual language with a forest green and gold palette that communicates warmth and authenticity.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "SEO Foundation",
    description: "Optimized meta tags, structured data, and fast page loads to improve organic search visibility.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Performance Optimized",
    description: "Lightweight React build hosted on GitHub Pages — blazing fast with zero hosting costs.",
  },
];

const timeline = [
  {
    phase: "Phase 1 — Discovery",
    title: "Understanding the Vision",
    description: "Deep dive into Earth Song Festival's mission, target audience, and existing brand materials. Mapped out the information architecture and user journeys.",
  },
  {
    phase: "Phase 2 — Content & Copy",
    title: "Crafting the Message",
    description: "AI-drafted and human-refined copy that captures the spiritual and grounded essence of the brand. Every word intentional.",
  },
  {
    phase: "Phase 3 — Design & Build",
    title: "Bringing It to Life",
    description: "Custom React website with nature-inspired animations, warm typography using DM Serif Display, and a palette of forest greens and golds.",
  },
  {
    phase: "Phase 4 — Review & Launch",
    title: "Polish & Go Live",
    description: "Two rounds of revisions to nail every detail. Deployed to GitHub Pages with full SEO setup and Google Analytics integration.",
  },
];

const EarthSong = () => (
  <CaseStudyLayout accentColor={ACCENT}>
    {/* Hero */}
    <section className="px-6 pb-16">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div
            className="text-xs font-mono uppercase tracking-wider mb-4"
            style={{ color: ACCENT }}
          >
            Case Study
          </div>
          <h1
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ fontFamily: '"DM Serif Display", serif', color: "#fff" }}
          >
            Earth Song Festival
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-body">
            A beautiful, nature-inspired digital presence for a holistic wellness practitioner
            — designed to feel as grounding as the services it represents.
          </p>
        </SectionReveal>

        {/* Tags */}
        <div className="flex flex-wrap gap-3 mt-8">
          {["Website Design", "Brand Identity", "SEO", "Content Strategy"].map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-3 py-1.5 rounded-full border"
              style={{ borderColor: `${ACCENT}40`, color: ACCENT }}
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
          <BrowserMockup url="earthsongfire.com" accentColor={ACCENT_GREEN}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center px-8">
                <div
                  className="text-5xl md:text-7xl font-bold mb-4 opacity-20"
                  style={{ fontFamily: '"DM Serif Display", serif', color: ACCENT }}
                >
                  Earth Song Festival
                </div>
                <div className="text-sm text-white/30 font-mono">Healing · Community · Nature</div>
              </div>
            </div>
          </BrowserMockup>
        </SectionReveal>
      </div>
    </section>

    {/* Stats */}
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <StatsBar stats={stats} accentColor={ACCENT} />
      </div>
    </section>

    {/* Challenge & Solution */}
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: '"DM Serif Display", serif', color: "#fff" }}
              >
                The Challenge
              </h2>
              <p className="text-white/60 leading-relaxed">
                Earth Song Festival had a growing community and a powerful brand story, but no
                digital home to match. Their existing web presence was fragmented — a mix
                of social media profiles and a basic landing page that didn't communicate
                the depth and warmth of their offerings. They needed a cohesive website
                that could serve as a hub for events, connect with their audience, and
                reflect the grounded, nature-focused essence of their brand.
              </p>
            </div>
            <div>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: '"DM Serif Display", serif', color: "#fff" }}
              >
                The Solution
              </h2>
              <p className="text-white/60 leading-relaxed">
                We designed and built a custom React website that feels like stepping into
                a forest clearing — warm, inviting, and intentional. The site uses a forest
                green and gold palette, DM Serif Display typography for an organic feel,
                and subtle nature-inspired animations. Every section was crafted to guide
                visitors naturally from discovery to action, with event integration and
                clear calls-to-action throughout.
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
            className="text-2xl font-bold mb-8"
            style={{ fontFamily: '"DM Serif Display", serif', color: "#fff" }}
          >
            What We Delivered
          </h2>
        </SectionReveal>
        <FeatureGrid features={features} accentColor={ACCENT_GREEN} />
      </div>
    </section>

    {/* Testimonial */}
    <section className="mx-6 rounded-xl mb-20 overflow-hidden">
      <TestimonialBand
        quote="Lumin8 delivered a beautiful, professional website that perfectly captures our brand. The process was seamless and fast."
        author="Earth Song Festival"
        role="Founder"
        accentColor={ACCENT}
        background="linear-gradient(135deg, #1a2e12, #2D5016)"
      />
    </section>

    {/* Timeline */}
    <section className="px-6 pb-20">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2
            className="text-2xl font-bold mb-10"
            style={{ fontFamily: '"DM Serif Display", serif', color: "#fff" }}
          >
            Project Timeline
          </h2>
        </SectionReveal>
        <Timeline steps={timeline} accentColor={ACCENT} />
      </div>
    </section>

    {/* CTA */}
    <section className="px-6 pb-24">
      <div className="max-w-5xl mx-auto text-center">
        <SectionReveal>
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ fontFamily: '"DM Serif Display", serif', color: "#fff" }}
          >
            Ready to build your digital presence?
          </h2>
          <p className="text-white/60 mb-8 max-w-lg mx-auto">
            Let's create something beautiful together. Starting at $750 CAD.
          </p>
          <a
            href="/#pricing"
            className="inline-flex items-center gap-2 font-heading font-semibold text-sm px-8 py-3 rounded-full transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: ACCENT, color: "#1a1a1a" }}
          >
            View Packages →
          </a>
        </SectionReveal>
      </div>
    </section>
  </CaseStudyLayout>
);

export default EarthSong;
