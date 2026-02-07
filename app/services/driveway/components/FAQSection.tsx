import DirectQuote from "./DirectQuote";

const FAQSection = () => {
  const asked = [
    {
      question: "Do you handle demolition of existing parking lots?",
      answer:
        "Yes, our scope includes removal of existing asphalt or concrete, disposal, and site preparation for new construction. We can phase demolition to maintain partial parking access during construction.",
    },
    {
      question:
        "How do you maintain tenant access during parking lot construction?",
      answer:
        "We create phased construction plans that maintain required parking ratios and customer access. Weekend and night work schedules are available to minimize disruption to business operations.",
    },
    {
      question: "What concrete thickness do you recommend for parking lots?",
      answer:
        "Standard parking lots typically use 6-7 inch concrete with proper reinforcement. High-traffic areas, truck routes, or delivery zones may require 8-9 inches. We design pavement sections based on your specific use requirements.",
    },
    {
      question: "Do you coordinate ADA compliance requirements?",
      answer:
        "Yes, we ensure all accessible parking spaces, slopes, ramp construction, and truncated dome installations meet current ADA standards and local code requirements. Our work includes coordination with city accessibility inspectors.",
    },
  ];
  return (
    <section className="base-padding py-4 bg-gray-50">
      <div className="rounded-2xl shadow-2xl p-6 sm:p-8 bg-white">
        <h2 className="text-2xl font-semibold text-brand-teal-light">
          Frequently Asked Questions
        </h2>
        <div className="mt-2">
          {asked.map((item, index) => (
            <div key={index} className="max-w-6xl pt-5">
              <p className="text-lg font-semibold text-brand-teal-light">
                {item.question}
              </p>
              <p className="mt-2 text-brand-gray-dark">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
      <DirectQuote />
    </section>
  );
};

export default FAQSection;
