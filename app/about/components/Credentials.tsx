const Credentials = () => {
  const cards = [
    {
      title: "Safety & Compliance",
      points: [
        "OSHA-Certified Supervisors",
        "ISNetworld Member",
        "Industry-Leading Safety Record",
        "Site-Specific Safety Plans",
      ],
    },
    {
      title: "Technical Certifications",
      points: [
        "ACI-Certified Concrete Finishers",
        "Post-Tension Institute Technicians",
        "NRMCA Certified Concrete Technicians",
        "Nuclear Density Testing Certified",
      ],
    },
    {
      title: "Business Qualifications",
      points: [
        "Substantial Bonding Capacity",
        "Comprehensive Liability Coverage",
        "TxDOT Pre-Qualified Contractor",
        "Municipal Certified Vendor",
      ],
    },
  ];
  return (
    <section className="base-padding bg-white py-14">
      <div className="w-full flex flex-col items-center gap-y-4">
        <div className="uppercase text-brand-teal-light text-sm font-medium tracking-[3px]">
          Credentials
        </div>
        <h2 className="text-center text-4xl font-semibold">
          Certifications, bonding, and safety record
        </h2>
        <p className="text-center max-w-3xl">
          Our team maintains industry certifications and insurance coverage
          required for municipal, commercial, and industrial projects across
          North Texas.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-8 pt-14">
        {cards.map((card, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl flex flex-col gap-4 shadow-2xl"
          >
            <h2 className="text-xl font-semibold text-brand-teal-light">
              {card.title}
            </h2>
            <div className="flex flex-col gap-1">
              {card.points.map((point, index) => (
                <div key={index} className="flex gap-3">
                  <div className="mt-1.5 flex h-2 w-2 shrink-0 rounded-full bg-brand-orange/80" />
                  <p className="text-brand-gray text-sm">{point}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div
        className={`w-full flex flex-col items-center gap-y-4 mt-16 border p-6 rounded-2xl
        border-brand-orange/40 bg-brand-orange-light/10`}
      >
        <h2 className="text-center text-2xl font-semibold">
          Industry Leadership
        </h2>
        <p className="text-center max-w-3xl text-brand-gray">
          Active members of the American Concrete Institute (ACI), Texas
          Concrete Council, and Associated General Contractors (AGC) of Texas.
          We stay current on industry best practices, new technologies, and code
          requirements.
        </p>
      </div>
    </section>
  );
};

export default Credentials;
