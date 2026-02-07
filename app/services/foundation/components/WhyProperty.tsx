const WhyProperty = () => {
  const whyCards = [
    "Phased construction to maintain access",
    "Integrated drainage and detention structures",
    "ADA-compliant ramps, striping, and signage",
  ];
  return (
    <section className="base-padding py-8 bg-gray-50">
      <h2 className="text-2xl font-semibold text-brand-teal-light">
        Why property owners choose us
      </h2>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4">
        {whyCards.map((card, index) => (
          <div
            key={index}
            className={`font-medium text-brand-gray-dark py-2 px-4 border border-gray-300 
              rounded-lg`}
          >
            {card}
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyProperty;
