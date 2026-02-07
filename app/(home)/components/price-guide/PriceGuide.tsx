import PriceCard from "./PriceCard";
import FactorCard from "./FactorCard";

const PriceGuide = () => {
  return (
    <main className="base-padding py-12 sm:py-18 bg-brand-gray-bg min-h-160">
      <h2 className="text-4xl font-bold text-brand-teal-light leading-11">
        2026 Frisco Concrete Price Guide
      </h2>

      <p className="text-lg text-brand-gray mt-5 max-w-3xl">
        Transparency is our core value. While every project is unique, this
        guide provides estimated ranges for the 2026 market.
      </p>

      <PriceCard className="mt-14" />
      <p className="mt-4 text-sm text-brand-gray-light text-center">
        * Prices are 2026 estimates and subject to change based on concrete
        ready-mix shortages or fuel costs.
      </p>
      <FactorCard />
    </main>
  );
};

export default PriceGuide;
