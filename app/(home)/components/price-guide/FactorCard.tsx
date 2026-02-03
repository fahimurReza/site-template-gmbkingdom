import clsx from "clsx";
import { factors } from "@/data";

interface FactorCardProps {
  className?: string;
}

const FactorCard = ({ className }: FactorCardProps) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {factors.map((item, i) => (
        <div
          key={i}
          className={clsx(
            "rounded-xl px-6 py-4 shadow-md transition-all duration-300 group bg-white border border-gray-200 hover:shadow-xl hover:-translate-y-1",
            className,
          )}
        >
          <div className="flex items-start gap-5">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-brand-teal mb-2">
                {item.factor}
              </h3>
              <p className="text-brand-gray leading-relaxed text-sm">
                {item.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FactorCard;
