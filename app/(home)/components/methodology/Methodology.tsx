import MethodologyCard from "./MethodologyCard";
import { methodologies } from "@/data";

const Methodology = () => {
  return (
    <main className="base-padding py-12 sm:py-16 relative">
      <p className="text-sm font-semibold uppercase text-brand-orange mb-5 tracking-[2px]">
        Our Methodology
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-brand-teal-light">
        Delivery from start to finish
      </h1>
      <div className="flex justify-between">
        <p className="text-base sm:text-lg text-brand-gray mt-5 max-w-3xl">
          One contract, one team accountable. We handle everything so you can
          focus on your business.
        </p>
      </div>

      {/* Cards + connecting line */}
      <div className="relative mt-12 sm:mt-14 lg:mt-16">
        {/* Vertical connecting line – visible on mobile & desktop */}
        <div
          className={`absolute left-9 top-8 bottom-20 w-0.5 
            bg-linear-to-b from-brand-orange-light via-brand-orange/60 to-transparent 
            z-0 pointer-events-none`}
        />

        <div className="space-y-10 sm:space-y-12 lg:space-y-16 relative z-10">
          {methodologies.map((step, index) => (
            <MethodologyCard key={index} step={step} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Methodology;
