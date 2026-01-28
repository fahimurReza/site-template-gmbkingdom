import CheckCircle from "@components/common/CheckCircle";

const Content = () => {
  return (
    <main>
      <div className="flex items-center gap-4 border border-white/20 rounded-full bg-white/10 px-4 py-1 text-xs tracking-[4px] font-semibold max-w-11/12">
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-600 opacity-75"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-orange-600"></span>
        </span>
        FRISCO CONCRETE CONTRACTORS
      </div>
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold my-10 leading-16">
        Turnkey commercial concrete for Dallas-Fort Worth
      </h1>
      <p className="text-2xl">
        One contract. One team. Full accountability from bid to final punch.
      </p>
      <div className="mt-8">
        <div className="flex gap-4 items-center mb-2">
          <CheckCircle />
          <span>
            Direct contracts with property owners - single point of
            accountability
          </span>
        </div>
        <div className="flex gap-4 items-center mb-2">
          <CheckCircle />
          <span>
            Full-service delivery: permitting, engineering coordination, and
            QA/QC included
          </span>
        </div>
        <div className="flex gap-4 items-center mb-2">
          <CheckCircle />
          <span>
            ACI-certified crews for warehouses, retail, healthcare, and
            industrial facilities
          </span>
        </div>
      </div>
    </main>
  );
};

export default Content;
