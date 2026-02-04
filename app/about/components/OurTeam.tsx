import CallButton from "@/components/ui/CallButton";

const OurTeam = () => {
  const reasons = [
    {
      title: "Operations Leadership",
      description:
        "Decades of experience managing large-scale commercial concrete throughout North Texas",
      skills: [
        "Tilt-wall construction",
        "Post-tension systems",
        "Industrial floors",
      ],
    },
    {
      title: "Project Management",
      description:
        "Field-experienced PMs who coordinate pours, testing, and logistics end-to-end",
      skills: [
        "Fast-track scheduling",
        "Engineering coordination",
        "QA/QC oversight",
      ],
    },
    {
      title: "Estimating Team",
      description:
        "Dallas-based estimators deliver accurate pricing and value engineering options",
      skills: [
        "Preconstruction planning",
        "Budget development",
        "Schedule analysis",
      ],
    },
    {
      title: "Field Crews",
      description:
        "Self-performing crews with ACI certifications and OSHA-certified supervisors",
      skills: ["Structural concrete", "Heavy-duty paving", "Specialty repairs"],
    },
  ];
  return (
    <section className="base-padding py-14 bg-brand-gray-bg">
      <div className="w-full flex flex-col items-center gap-y-4">
        <div className="uppercase text-brand-teal-light text-sm font-medium tracking-[3px]">
          Our Team
        </div>
        <h2 className="text-center text-4xl font-semibold">
          Experienced professionals at every level
        </h2>
        <p className="text-center max-w-3xl">
          From estimating to project management to field crews, our team brings
          decades of commercial concrete experience to every project.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-8 pt-14">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="py-6 px-8 bg-white border border-brand-gray-bg rounded-2xl justify-center shadow-2xl"
          >
            <div className="col-span-5 flex flex-col gap-2">
              <h2 className="text-xl font-semibold text-brand-teal-light">
                {reason.title}
              </h2>
              <p className="text-brand-gray">{reason.description}</p>
              <div className="mt-1 text-xs text-brand-teal-light flex gap-3 ">
                {reason.skills.map((skill, index) => (
                  <div
                    key={index}
                    className=" py-1 px-4 w-fit rounded-3xl bg-brand-orange-light/30"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <CallButton
          phoneNumber="(469) 535-6405"
          buttonText="Get Connected Now"
          iconClassName="rotate-90 w-5"
          className="bg-brand-teal hover:bg-brand-teal-light text-[16px] rounded-3xl! px-8! w-fit! font-medium!"
        />
      </div>
    </section>
  );
};

export default OurTeam;
