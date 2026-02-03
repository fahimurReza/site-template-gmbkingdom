const ProjectScenarios = () => {
  const scenarios = [
    "Retail center owner upgrading deteriorated asphalt parking to concrete for long-term durability",
    "Office building developer constructing new parking facility for tenant requirements",
    "Medical facility needing ADA-compliant parking expansion for patient access",
    "Industrial property owner replacing failing parking areas while maintaining operations",
  ];
  return (
    <section className="base-padding pt-2 pb-8 bg-brand-gray-bg">
      <h2 className="text-2xl font-semibold text-brand-teal">
        Common project scenarios
      </h2>
      <div className="mt-6 text-brand-gray-dark">
        {scenarios.map((item, index) => (
          <div key={index} className="flex gap-4 mt-2 text-brand-gray-dark">
            <div className="mt-2 flex h-2 w-2 shrink-0 rounded-full bg-brand-orange/80" />
            <p>{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectScenarios;
