import Image from "next/image";

const OurValues = () => {
  const values = [
    {
      title: "Safety First",
      path: "/safety.svg",
      description:
        "Industry-leading safety record with comprehensive site-specific safety plans on every project. OSHA-certified supervisors lead every crew with daily safety protocols.",
    },
    {
      title: "Schedule Certainty",
      path: "/clock.svg",
      description:
        "Dedicated pour calendars, staged crews, and proactive coordination ensure on-time delivery. One team accountable for your entire project timeline.",
    },
    {
      title: "Quality Commitment",
      path: "/check.svg",
      description:
        "ACI-certified finishers, in-house QA/QC, and complete testing documentation on every pour. We deliver quality that passes inspection the first time.",
    },
    {
      title: "Transparent Communication",
      path: "/text.svg",
      description:
        "Daily reports, progress photos, and digital documentation keep your team informed. We integrate with your project management platforms seamlessly.",
    },
  ];
  return (
    <section className="base-padding bg-brand-gray-bg py-14">
      <div className="w-full flex flex-col items-center gap-y-4">
        <div className="uppercase text-brand-teal-light text-sm font-medium tracking-[3px]">
          Our Values
        </div>
        <h2 className="text-center text-4xl font-semibold">
          What drives our work every day
        </h2>
        <p className="text-center max-w-3xl">
          These principles guide every pour, every coordination call, and every
          punch list walk. They're the foundation of our reputation across North
          Texas.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-8 pt-14">
        {values.map((item, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-2xl grid gap-2 justify-center shadow-2xl"
          >
            <Image
              src={item.path}
              alt="icon"
              width="20"
              height="20"
              className=""
              priority
            />
            <h2 className="text-xl font-semibold text-brand-teal-light">
              {item.title}
            </h2>
            <p className="text-sm text-brand-gray">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurValues;
