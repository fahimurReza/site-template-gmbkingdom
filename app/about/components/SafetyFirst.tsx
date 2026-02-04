const SafetyFirst = () => {
  return (
    <section className="base-padding bg-brand-gray-bg py-14">
      <div className={`w-full p-8 rounded-2xl bg-brand-teal text-white`}>
        <div className="flex flex-col items-center gap-y-4 ">
          <div className="uppercase text-sm font-medium tracking-[3px]">
            Safety First
          </div>
          <h2 className="text-center text-3xl font-semibold">
            Industry-leading safety record
          </h2>
          <p className="text-center max-w-3xl">
            Every crew is led by OSHA-certified supervisors. We conduct daily
            toolbox talks, site-specific hazard assessments, and pre-pour safety
            meetings. Our comprehensive safety program includes fall protection,
            confined space protocols, and emergency response procedures.
          </p>
        </div>
        <div className="grid grid-cols-3 mt-8">
          <div className="flex gap-3 justify-center">
            <div className="mt-2 flex h-2.5 w-2.5 shrink-0 rounded-full bg-brand-orange" />
            <p>Site-specific safety plans</p>
          </div>
          <div className="flex gap-3 justify-center">
            <div className="mt-2 flex h-2.5 w-2.5 shrink-0 rounded-full bg-brand-orange" />
            <p>Quarterly safety audits</p>
          </div>
          <div className="flex gap-3 justify-center">
            <div className="mt-2 flex h-2.5 w-2.5 shrink-0 rounded-full bg-brand-orange" />
            <p>Zero tolerance for violations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SafetyFirst;
