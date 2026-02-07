const Includes = () => {
  const includeItems = [
    "Existing pavement demolition and removal",
    "Site grading and subgrade preparation",
    "Drainage system integration",
    "Concrete placement with proper slopes",
    "Joint installation and sawing",
    "ADA-compliant ramp construction",
    "Truncated dome installation at crossings",
    "Curing and protection",
    "Striping coordination",
    "Complete permit and inspection coordination",
  ];
  return (
    <section className="base-padding pt-2 pb-8 bg-gray-50">
      <h2 className="text-2xl font-semibold text-brand-teal-light">
        What's included
      </h2>
      <div className="mt-6 columns-1 sm:columns-2 gap-8 md:gap-12 text-brand-gray-dark">
        {includeItems.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 mt-2 text-brand-gray-dark pl-4"
          >
            <div className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-brand-orange/80" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Includes;
