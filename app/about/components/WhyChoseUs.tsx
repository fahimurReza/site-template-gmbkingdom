const WhyChoseUs = () => {
  const reasons = [
    {
      number: "01",
      title: "Direct Contract, Full Accountability",
      description:
        "Work directly with us - no middleman markup. One contract, one team, complete project delivery from permit to punchlist. You know exactly who is accountable.",
    },
    {
      number: "02",
      title: "Ontime Project Delivery",
      description:
        "We handle everything: permitting, engineering coordination, city inspections, and QA/QC. You focus on your business while we deliver your concrete scope.",
    },
    {
      number: "03",
      title: "Complete Documentation",
      description:
        "Cylinder breaks, F/F testing, daily reports, pour cards, and as-built documentation included on every project. Full transparency from start to finish.",
    },
    {
      number: "04",
      title: "Local Expertise",
      description:
        "Deep North Texas experience means we understand local soils, suppliers, inspection requirements, and weather patterns. We navigate DFW permitting and construction efficiently.",
    },
  ];
  return (
    <section className="base-padding py-14">
      <div className="w-full flex flex-col items-center gap-y-4">
        <div className="uppercase text-brand-teal-light text-sm font-medium tracking-[3px]">
          Why Chose Us
        </div>
        <h2 className="text-center text-4xl font-semibold">
          The real difference
        </h2>
        <p className="text-center max-w-3xl">
          We're your single-source concrete contractor. One contract, one team
          accountable for your entire project across the DFW Metroplex.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 pt-14">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="py-6 px-8 border border-brand-gray-bg rounded-2xl grid grid-cols-6 gap-2 justify-center shadow-2xl"
          >
            <div className="col-span-1 text-5xl text-brand-orange/70 font-bold">
              {reason.number}
            </div>
            <div className="col-span-5 flex flex-col gap-3">
              <h2 className="text-2xl font-semibold text-brand-teal-light">
                {reason.title}
              </h2>
              <p className="text-brand-gray">{reason.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoseUs;
