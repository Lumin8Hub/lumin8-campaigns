import { useEffect } from "react";
import CaseStudyLayout from "@/components/casestudy/CaseStudyLayout";
import BrowserMockup from "@/components/casestudy/BrowserMockup";
import StatsBar from "@/components/casestudy/StatsBar";
import FeatureGrid from "@/components/casestudy/FeatureGrid";
import Timeline from "@/components/casestudy/Timeline";
import TestimonialBand from "@/components/casestudy/TestimonialBand";
import ProseSection from "@/components/casestudy/ProseSection";
import SectionReveal from "@/components/animations/SectionReveal";

// ─── Palette ────────────────────────────────────────────
const P = {
  primary: "#00A3E0",
  primaryLight: "#33C1F5",
  primaryDark: "#0077A8",
  accent: "#E6007E",
  accentLight: "#FF3DA1",
  gradientFrom: "#061628",
  gradientTo: "#0a2a42",
  bgSection: "#080e18",
  bgCard: "#0d1a2e",
  border: "rgba(0,163,224,0.15)",
  borderHover: "rgba(0,163,224,0.4)",
  textMuted: "#7ba0c2",
  glow: "rgba(0,163,224,0.08)",
};

const FONT_DISPLAY = "'Poppins', -apple-system, sans-serif";

// ─── Data ───────────────────────────────────────────────
const stats = [
  { value: "60%+", label: "CAC Reduction" },
  { value: "<$10", label: "Cost-Per-Registration" },
  { value: "20+", label: "Franchise Locations" },
  { value: "134K+", label: "Kids Enrolled" },
];

const features = [
  {
    icon: <span className="text-lg">🎨</span>,
    title: "Post-Acquisition Rebrand",
    description:
      "Led the complete visual identity overhaul following the acquisition. Designed a flexible brand system with distinct sub-identities for each program vertical (Multi-Sport, Soccer, Basketball, Tennis) — each with its own color coding and iconography — while maintaining cohesive governance under the master Sportball brand.",
  },
  {
    icon: <span className="text-lg">🌐</span>,
    title: "Multi-Location CMS",
    description:
      "Architected and launched a complex multi-location website capable of serving 20+ franchise territories. Each location gets locally optimized content, program schedules, and registration pathways, all managed through a centralized CMS that ensures brand consistency while empowering franchisees to operate independently.",
  },
  {
    icon: <span className="text-lg">🎥</span>,
    title: "Video Marketing Engine",
    description:
      "Coordinated cross-functional production teams — videographers, photographers, and on-site talent — to produce a library of custom marketing videos. This content populated the new website, fueled paid ad campaigns, and brought the \"Staying active is the name of the game\" philosophy to life across every digital touchpoint.",
  },
  {
    icon: <span className="text-lg">📈</span>,
    title: "Performance Marketing System",
    description:
      "Built and managed a full-funnel paid media operation across Google Ads and Meta, with per-location campaign structures, audience segmentation by parent persona, and automated bid strategies. Drove cost-per-registration from over $30 down to under $10 — a 60%+ reduction in customer acquisition cost.",
  },
  {
    icon: <span className="text-lg">👥</span>,
    title: "Parent Persona Development",
    description:
      "Developed detailed parent personas through customer lifecycle data analysis, survey insights, and registration pattern mapping. These personas became the foundation for all messaging, ad targeting, and content strategy — ensuring every touchpoint spoke directly to the motivations and concerns of Sportball's core audience.",
  },
  {
    icon: <span className="text-lg">📊</span>,
    title: "Franchisee Marketing Playbook",
    description:
      'Created a centralized marketing knowledge base and standardized engagement protocols for franchisees. This "Franchisee Agency" model gave each location access to professional brand assets, campaign templates, local advertising best practices, and performance benchmarks — reducing local marketing friction while maintaining network-wide quality.',
  },
];

const timeline = [
  {
    phase: "Phase 1",
    title: "Brand Strategy & Visual Identity",
    description:
      "Conducted brand audit of the pre-acquisition Sportball identity. Developed the new visual system including master brand guidelines, program-specific sub-identities with distinct color coding (Multi-Sport, Soccer, Basketball, Tennis), and a complete library of brand assets for franchisee use.",
  },
  {
    phase: "Phase 2",
    title: "Website Architecture & Build",
    description:
      "Designed and built the multi-location CMS architecture from the ground up. Integrated the custom registration system, built location-specific landing pages with local SEO optimization, and established the program browsing experience organized by age group and sport type.",
  },
  {
    phase: "Phase 3",
    title: "Content Production & Video",
    description:
      'Coordinated on-site video and photo shoots across multiple locations. Produced a full library of marketing videos, program explainers, and testimonial content. Built out the "Resources for Parents" blog section and established content calendars for ongoing publishing.',
  },
  {
    phase: "Phase 4",
    title: "Paid Media & Performance Marketing",
    description:
      "Launched per-location Google Ads and Meta campaigns. Developed parent persona-driven targeting strategies, A/B tested creative and landing page combinations, and implemented conversion tracking through Google Tag Manager and CRM integration. Achieved the <$10 cost-per-registration benchmark.",
  },
  {
    phase: "Phase 5",
    title: "Franchisee Enablement & Scale",
    description:
      'Rolled out the "Franchisee Agency" pilot — standardized marketing playbooks, local campaign templates, and performance dashboards for each franchise location. Implemented a crowdsourced content strategy tapping franchisee and parent contributions to keep social presence authentic and scalable.',
  },
  {
    phase: "Ongoing",
    title: "Sustained Growth & Optimization",
    description:
      "Continued management of $150K+ annual ad spend. Ongoing campaign optimization, seasonal creative refreshes, new location launch support, and quarterly performance reviews with the corporate marketing team.",
  },
];

// ─── Floating decorative circles ────────────────────────
const HeroCircles = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute rounded-full"
      style={{
        width: 200,
        height: 200,
        top: "10%",
        right: "-40px",
        background: P.primary,
        opacity: 0.04,
      }}
    />
    <div
      className="absolute rounded-full"
      style={{
        width: 140,
        height: 140,
        top: "50%",
        left: "-60px",
        background: P.accent,
        opacity: 0.04,
      }}
    />
    <div
      className="absolute rounded-full"
      style={{
        width: 100,
        height: 100,
        top: "20%",
        left: "40%",
        background: P.primary,
        opacity: 0.03,
      }}
    />
    <div
      className="absolute rounded-full"
      style={{
        width: 160,
        height: 160,
        bottom: "15%",
        right: "20%",
        background: P.accent,
        opacity: 0.035,
      }}
    />
    <div
      className="absolute rounded-full"
      style={{
        width: 80,
        height: 80,
        top: "65%",
        left: "25%",
        background: P.primary,
        opacity: 0.03,
      }}
    />
  </div>
);

// ─── Gradient divider ───────────────────────────────────
const GradientDivider = () => (
  <div className="max-w-5xl mx-auto px-6">
    <div
      className="h-px w-full"
      style={{
        background: `linear-gradient(90deg, ${P.accent}, ${P.primary}, transparent)`,
      }}
    />
  </div>
);

// ─── Component ──────────────────────────────────────────
const Sportball = () => {
  // Conditional Poppins loading
  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,400&display=swap";
    document.head.appendChild(link);
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <CaseStudyLayout accentColor={P.primary} bgColor={P.gradientFrom}>
      {/* ── Hero ─────────────────────────────────────── */}
      <section
        className="relative px-6 pb-24"
        style={{
          background: `linear-gradient(165deg, ${P.gradientFrom} 0%, #0a2240 50%, ${P.gradientTo} 100%)`,
        }}
      >
        <HeroCircles />
        {/* Bottom fade */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{
            background: `linear-gradient(to bottom, transparent, ${P.bgSection})`,
          }}
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <SectionReveal>
            <div
              className="text-[11px] font-semibold uppercase tracking-[3px] mb-4"
              style={{ color: P.primaryLight, fontFamily: FONT_DISPLAY }}
            >
              Case Study
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <h1
              className="font-bold mb-6 leading-tight"
              style={{
                fontFamily: FONT_DISPLAY,
                fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
                letterSpacing: "-0.5px",
                color: "#fff",
              }}
            >
              Reimagining Global Play:
              <br />
              A Full-Funnel Rebrand for{" "}
              <span style={{ color: P.primary }}>Sportball</span>
            </h1>
          </SectionReveal>
          <SectionReveal delay={0.4}>
            <p
              className="max-w-[640px] leading-relaxed"
              style={{
                color: "rgba(255,255,255,0.7)",
                fontSize: "1.05rem",
                fontWeight: 300,
              }}
            >
              How Lumin8 orchestrated a post-acquisition brand transformation,
              built a multi-location web architecture, and deployed a performance
              marketing engine that cut cost-per-registration by over 60% across
              a 20+ location franchise network.
            </p>
          </SectionReveal>

          {/* Tags */}
          <SectionReveal delay={0.5}>
            <div className="flex flex-wrap gap-3 mt-8">
              {["Rebrand", "Franchise", "CMS", "Performance Marketing"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-3 py-1.5 rounded-full border"
                  style={{
                    borderColor: P.border,
                    color: P.primaryLight,
                    fontFamily: FONT_DISPLAY,
                    fontWeight: 600,
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────── */}
      <section className="px-6 -mt-12 relative z-20 pb-20">
        <div className="max-w-4xl mx-auto">
          <StatsBar stats={stats} accentColor={P.primaryDark} variant="light" />
        </div>
      </section>

      <GradientDivider />

      {/* ── The Client ───────────────────────────────── */}
      <ProseSection
        label="THE CLIENT"
        heading="Pioneers in Non-Competitive Children's Sports"
        labelColor={P.primaryLight}
        labelFont={FONT_DISPLAY}
        headingFont={FONT_DISPLAY}
        mutedColor={P.textMuted}
        bgColor={P.bgSection}
        paragraphs={[
          "Sportball is one of North America's leading children's sports education organizations, operating across 20+ franchise locations with programs that have impacted over 134,000 kids across 9,600+ classes in more than 3,000 venues. Their non-competitive, multi-sport approach — covering everything from soccer and basketball to tennis and t-ball — is designed to build confidence, coordination, and a lifelong love of physical activity in children from 16 months to 12 years.",
          "Following a corporate acquisition, the Sportball leadership team needed more than a logo refresh. They needed a complete brand transformation: a modernized visual identity, a unified digital platform capable of serving a growing franchise network, a content strategy that spoke to both prospective parents and potential franchisees, and a performance marketing system that could prove ROI at the local level. They came to Lumin8 to make it happen.",
        ]}
      />

      <GradientDivider />

      {/* ── The Challenge ────────────────────────────── */}
      <ProseSection
        label="THE CHALLENGE"
        heading="Unifying a Franchise Network Mid-Transformation"
        labelColor={P.primaryLight}
        labelFont={FONT_DISPLAY}
        headingFont={FONT_DISPLAY}
        mutedColor={P.textMuted}
        bgColor={P.gradientFrom}
        paragraphs={[
          "The challenge was multi-dimensional. Sportball's post-acquisition rebrand couldn't happen in a vacuum — it needed to roll out across 20+ independently operated franchise locations, each with their own local audiences, registration systems, and marketing maturity levels. The new brand identity had to be flexible enough to accommodate distinct program verticals (Multi-Sport, Soccer, Basketball, Tennis) with their own visual identities, while maintaining strict governance over the master brand.",
          "Simultaneously, the digital infrastructure needed a ground-up rebuild. The existing website couldn't support multi-location content management, local SEO at scale, or the kind of integrated registration flow that parents expected. And behind the scenes, there was no centralized system for tracking marketing performance across locations — meaning franchisees were spending ad dollars with no visibility into what was working. Every decision Lumin8 made had to solve for three audiences at once: the corporate leadership team, the individual franchisees, and the parents they were all trying to reach.",
        ]}
      />

      {/* ── Browser Mockup ───────────────────────────── */}
      <section className="px-6 pb-20">
        <div className="max-w-[800px] mx-auto">
          <SectionReveal>
            <BrowserMockup
              url="sportball.com"
              accentColor={P.primary}
              frameVariant="light-rounded"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center px-8">
                  <div
                    className="text-5xl md:text-7xl font-bold mb-4 opacity-25"
                    style={{ fontFamily: FONT_DISPLAY, color: P.primary }}
                  >
                    Sportball
                  </div>
                  <div
                    className="text-sm font-mono opacity-40"
                    style={{ color: P.accent }}
                  >
                    Multi-Sport · Soccer · Basketball · Tennis
                  </div>
                </div>
              </div>
            </BrowserMockup>
          </SectionReveal>
        </div>
      </section>

      <GradientDivider />

      {/* ── What We Built ────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: P.bgSection }}>
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <div
              className="text-[11px] font-semibold uppercase tracking-[3px] mb-4"
              style={{ color: P.primaryLight, fontFamily: FONT_DISPLAY }}
            >
              WHAT WE BUILT
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: FONT_DISPLAY }}
            >
              A Scalable Engine for Franchise Growth
            </h2>
            <p className="leading-relaxed max-w-3xl mb-12" style={{ color: P.textMuted }}>
              Lumin8 delivered an end-to-end brand and digital transformation — from visual
              identity and video production through to a multi-location CMS, integrated
              analytics, and ongoing performance marketing management.
            </p>
          </SectionReveal>
          <FeatureGrid
            features={features}
            accentColor={P.primary}
            accentGradient={`linear-gradient(135deg, ${P.primary}, ${P.accent})`}
            cardBg={P.bgCard}
            cardBorder={P.border}
            cardBorderHover={P.borderHover}
            cardGlow={P.glow}
            cardRadius="14px"
          />
        </div>
      </section>

      <GradientDivider />

      {/* ── Testimonial ──────────────────────────────── */}
      <TestimonialBand
        quote="Dan's leadership in our full rebranding was transformative for Sportball. He developed a multi-functional website and crafted a strategy that enabled our franchisees across North America to benefit from professional brand assets and best practices in paid advertising and local marketing."
        author="Head of Marketing"
        role="Sportball"
        accentColor="#fff"
        background={`linear-gradient(135deg, ${P.primary} 0%, ${P.primaryDark} 100%)`}
        quoteFont={FONT_DISPLAY}
        authorFont={FONT_DISPLAY}
      />

      <GradientDivider />

      {/* ── Timeline ─────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: P.gradientFrom }}>
        <div className="max-w-5xl mx-auto">
          <SectionReveal>
            <div
              className="text-[11px] font-semibold uppercase tracking-[3px] mb-4"
              style={{ color: P.primaryLight, fontFamily: FONT_DISPLAY }}
            >
              THE ENGAGEMENT
            </div>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: FONT_DISPLAY }}
            >
              From Acquisition to Full-Funnel Growth
            </h2>
            <p className="leading-relaxed max-w-3xl mb-12" style={{ color: P.textMuted }}>
              Lumin8's engagement with Sportball was not a one-time project — it was an
              ongoing strategic partnership that evolved across multiple phases, from the
              initial post-acquisition rebrand through to sustained performance marketing
              management.
            </p>
          </SectionReveal>
          <Timeline
            steps={timeline}
            accentColor={P.primary}
            variant="rows"
            phaseFont={FONT_DISPLAY}
            titleFont={FONT_DISPLAY}
            mutedColor={P.textMuted}
            borderColor={P.border}
          />
        </div>
      </section>

      <GradientDivider />

      {/* ── Our Approach ─────────────────────────────── */}
      <ProseSection
        label="OUR APPROACH"
        heading="The Franchisee Agency Model"
        labelColor={P.primaryLight}
        labelFont={FONT_DISPLAY}
        headingFont={FONT_DISPLAY}
        mutedColor={P.textMuted}
        bgColor={P.bgSection}
        paragraphs={[
          "To ensure the rebrand translated into real adoption across 20+ locations, we developed and piloted what we call the 'Franchisee Agency' model. Rather than dictating campaigns from the top down, we built a system that equipped each franchisee with standardized-yet-personalized engagement protocols — giving them the tools to execute locally while maintaining the brand standards that protect the network's collective value.",
          "We also implemented a crowdsourced content strategy, tapping directly into franchisee and customer contributions to keep the brand's social presence authentic and highly engaging. When a parent shares a photo of their kid's first soccer goal at Sportball, that's marketing gold — but only if you have the systems in place to capture, curate, and amplify it. We built those systems.",
          "Paired with optimized Meta and Google ad campaigns structured at the per-location level, this holistic approach turned what had been fragmented local marketing efforts into a cohesive, measurable growth engine. Franchisees stopped guessing what worked. The data told them — and us.",
        ]}
      />

      {/* ── CTA ──────────────────────────────────────── */}
      <section className="px-6 py-24" style={{ backgroundColor: P.gradientFrom }}>
        <div className="max-w-5xl mx-auto text-center">
          <SectionReveal>
            <h2
              className="text-2xl md:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: FONT_DISPLAY }}
            >
              Ready to Scale Your Franchise Network?
            </h2>
            <p
              className="max-w-[520px] mx-auto mb-8 leading-relaxed"
              style={{ color: P.textMuted }}
            >
              Whether you need a top-to-bottom rebrand, a multi-location CMS, or a
              performance marketing system that proves ROI — we build systems designed
              for franchise growth.
            </p>
            <a
              href="/#pricing"
              className="inline-flex items-center gap-2 font-semibold text-sm px-11 py-4 text-white transition-all duration-300 hover:-translate-y-px"
              style={{
                backgroundColor: P.primary,
                borderRadius: "10px",
                fontFamily: FONT_DISPLAY,
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = P.primaryLight;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.backgroundColor = P.primary;
              }}
            >
              Start a Conversation →
            </a>
          </SectionReveal>
        </div>
      </section>
    </CaseStudyLayout>
  );
};

export default Sportball;
