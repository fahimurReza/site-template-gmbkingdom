import clsx from "clsx";
import { prices } from "@/data/prices";

interface PriceCardProps {
  className?: string;
}

const PriceCard = ({ className }: PriceCardProps) => {
  return (
    <main
      className={clsx(
        "divide-y divide-gray-200 bg-white px-10 py-4 rounded-2xl",
        className,
      )}
    >
      <header
        className={`py-5 grid grid-cols-1 gap-3 sm:grid-cols-[3fr_2fr_4fr] 
          sm:gap-18 sm:items-start text-lg font-semibold text-brand-teal`}
      >
        <p>Project</p>
        <p>Price (Per S.F.)</p>
        <p>Includes</p>
      </header>
      {prices.map((project, i) => (
        <div
          key={i}
          className={`py-5 grid grid-cols-1 gap-3 sm:grid-cols-[3fr_2fr_4fr] 
          sm:gap-18 sm:items-start`}
        >
          <div className="font-medium text-brand-gray-dark">{project.type}</div>
          <div className="font-semibold text-brand-orange whitespace-nowrap">
            {project.price}
          </div>
          <div className="text-brand-gray text-sm sm:text-base">
            {project.includes}
          </div>
        </div>
      ))}
    </main>
  );
};

export default PriceCard;
