import BestCard from "./BestCard";

const WhyBest = () => {
  return (
    <main className="base-padding py-12 sm:py-16">
      <div
        className={`flex items-center gap-4 border border-brand-gray/20 rounded-full
         bg-brand-gray/10 px-6 py-1 text-xs tracking-[3px] font-semibold w-fit uppercase`}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-orange"></span>
        </span>
        Locally Owned & Operated
      </div>
      <h2 className="text-4xl font-bold text-brand-teal-light leading-11 mt-8">
        Why We Are the Best Concrete Contractor in Frisco
      </h2>

      <p className="text-base text-brand-gray mt-5 max-w-5xl">
        When searching for <b>concrete contractors in Frisco, TX,</b> you aren’t
        just looking for someone to pour cement; you need a partner who
        understands the unique geology of North Texas. The black clay soil
        beneath our city is notorious for shifting, expanding when wet and
        shrinking when dry.
      </p>
      <p className="text-base text-brand-gray mt-3 max-w-5xl">
        At Frisco Concrete Contractors, we have earned our reputation as the{" "}
        <b>best concrete contractor in Frisco</b> by refusing to cut corners. We
        approach every project as a geotechnical engineering challenge.
      </p>
      <BestCard />
    </main>
  );
};

export default WhyBest;
