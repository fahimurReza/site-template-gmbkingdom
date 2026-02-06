import CheckCircle from "@components/common/CheckCircle";

const Content = () => {
  return (
    <main>
      <div
        className={`flex items-center gap-4 border border-white/20 rounded-full
         bg-white/10 px-3 md:px-6 py-1 text-xs tracking-[2px] md:tracking-[3px] font-semibold w-fit uppercase`}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-orange"></span>
        </span>
        FRISCO CONCRETE CONTRACTORS
      </div>
      <h1 className="text-5xl lg:text-6xl font-bold lg:font-semibold my-10 leading-16 lg:leading-18">
        Proffesional Concrete Service for Dallas-Fort Worth
      </h1>
      <h2 className="text-2xl font-medium">
        One contract. One team. Accountable for everything.
      </h2>
      <ul className="mt-8 space-y-4">
        <li className="flex gap-3 sm:gap-4 items-start">
          <CheckCircle className="h-6 w-6 shrink-0 text-brand-teal" />
          <span className="text-base">
            Direct contracts with property owners - single point of
            accountability
          </span>
        </li>
        <li className="flex gap-3 sm:gap-4 items-start">
          <CheckCircle className="h-6 w-6 shrink-0 text-brand-teal" />
          <span className="text-base">
            Full-service delivery: permitting, engineering coordination, and
            QA/QC included
          </span>
        </li>
        <li className="flex gap-3 sm:gap-4 items-start">
          <CheckCircle className="h-6 w-6 shrink-0 text-brand-teal" />
          <span className="text-base">
            ACI-certified crews for warehouses, retail, healthcare, and
            industrial facilities
          </span>
        </li>
      </ul>
    </main>
  );
};

export default Content;
