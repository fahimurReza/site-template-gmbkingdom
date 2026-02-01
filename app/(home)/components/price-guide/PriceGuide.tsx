import PriceCard from "./PriceCard";

const PriceGuide = () => {
  return (
    <main className="base-padding py-18 bg-brand-gray-bg min-h-160">
      <h2 className="text-5xl font-bold text-brand-teal">
        2026 Frisco Concrete Price Guide
      </h2>
      <PriceCard className="mt-14" />
    </main>
  );
};

export default PriceGuide;
