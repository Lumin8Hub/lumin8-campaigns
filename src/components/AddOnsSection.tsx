import { addons } from "@/data/addons";
import { useScrollAnimation, useCardStagger } from "@/hooks/useScrollAnimation";

const AddOnsSection = () => {
  const sectionRef = useScrollAnimation();
  const cardsRef = useCardStagger(".addon-card");

  return (
    <section ref={sectionRef as React.RefObject<HTMLElement>} className="bg-lumin8-off-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-headline text-lumin8-black">Power up your package</h2>
        <p className="section-subheadline text-lumin8-gray-600 mb-12">
          Layer on exactly what you need. All add-ons are one-time costs unless noted.
        </p>

        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {addons.map((a) => (
            <div
              key={a.service}
              className="addon-card stagger-card bg-foreground rounded-2xl p-6 border border-lumin8-black/5 hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-heading font-bold text-lumin8-black">{a.service}</h3>
                <span className="font-mono text-sm font-bold text-primary shrink-0 ml-4">{a.price}</span>
              </div>
              <p className="text-lumin8-gray-600 text-sm">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AddOnsSection;
