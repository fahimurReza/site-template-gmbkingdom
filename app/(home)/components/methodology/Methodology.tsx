import MethodologyCard from "./MethodologyCard";
import { methodologies } from "@/data";

const Methodology = () => {
  return (
    <main className="base-padding min-h-120 py-16">
      <p className="text-sm font-semibold uppercase text-brand-orange mb-5 tracking-[2px]">
        Our Methodology
      </p>
      <h1 className="text-5xl font-bold text-brand-teal">
        Delivery from start to finish
      </h1>
      <div className="flex justify-between">
        <p className="text-lg text-brand-gray mt-5 max-w-3xl">
          One contract, one team accountable. We handle everything so you can
          focus on your business.
        </p>
      </div>
      <div>
        <div className="mt-14 space-y-16 md:space-y-20 lg:space-y-12">
          {methodologies.map((step, index) => (
            <MethodologyCard key={index} step={step} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Methodology;
