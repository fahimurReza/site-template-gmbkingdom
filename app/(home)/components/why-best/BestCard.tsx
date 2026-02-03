import clsx from "clsx";
import { bestcards } from "@/data";

const BestCard = () => {
  return (
    <div className="mt-10 flex flex-col gap-8">
      {bestcards.map((best, i) => (
        <div
          key={i}
          className={clsx(
            "rounded-xl px-8 py-6 shadow-md transition-all duration-300 group",
            "bg-white border border-gray-200 hover:shadow-xl hover:-translate-y-1",
          )}
        >
          <div className="flex items-start gap-5">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold text-brand-teal">
                {best.title}
              </h3>
              <p className="text-brand-gray leading-relaxed text-base mt-4">
                {best.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestCard;
