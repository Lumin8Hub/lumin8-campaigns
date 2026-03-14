import SectionReveal from "./animations/SectionReveal";

const AboutSection = () => {
  return (
    <section className="bg-lumin8-off-white py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionReveal>
          <h2 className="section-headline text-lumin8-black mb-8">
            A full-service agency, offering a front door for everyone.
          </h2>

          <div className="max-w-3xl">
            <p className="text-lumin8-gray-600 leading-relaxed mb-4">
              Lumin8 is a full-funnel digital marketing agency that works with businesses at every stage. Our premium clients invest $3,000–$10,000+ per month in performance marketing, custom applications, and strategic advisory.
            </p>
            <p className="text-lumin8-gray-600 leading-relaxed mb-4">
              The Starter Tier is our way of opening the door to businesses that aren't there yet — but will be. Every Starter site is built with the same strategic thinking and quality standards as our premium work. The only difference is the scope.
            </p>
            <p className="text-lumin8-black font-heading font-semibold text-lg mb-10">
              When you're ready to grow, we're already your agency.
            </p>
          </div>

          <div className="flex flex-wrap gap-8">
            <div className="text-center">
              <span className="text-2xl">🏆</span>
              <p className="font-heading font-bold text-lumin8-black mt-1">50+ websites built</p>
            </div>
            <div className="text-center">
              <span className="text-2xl">📈</span>
              <p className="font-heading font-bold text-lumin8-black mt-1">$500K+ in ad spend managed</p>
            </div>
            <div className="text-center">
              <span className="text-2xl">🤝</span>
              <p className="font-heading font-bold text-lumin8-black mt-1">Clients across Toronto, Montreal & NYC</p>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
};

export default AboutSection;
