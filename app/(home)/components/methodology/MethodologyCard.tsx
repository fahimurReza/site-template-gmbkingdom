import clsx from "clsx";
import type { Methodology } from "@/types";

interface MethodologyCardProps {
  step: Methodology;
  className?: string;
}

const MethodologyCard = ({ step, className }: MethodologyCardProps) => {
  const {
    title,
    description,
    icon: IconComponent,
    numberBadge,
    containerClassName,
  } = step;
  return (
    <main
      className={clsx(
        "mt-6 group transition-colors duration-300",
        containerClassName,
        className,
      )}
    >
      <div className="flex items-start gap-8">
        <div className="relative group">
          <div
            className={`bg-brand-gray-bg p-4.5 rounded-2xl w-fit border-[5px] border-white 
            shadow-md group-hover:bg-brand-orange group-hover:scale-110 duration-200`}
          >
            <IconComponent className="w-8 h-8 text-brand-gray-dark group-hover:text-white transition-colors" />
          </div>

          {numberBadge && (
            <div
              className={`absolute -right-1 -top-1 flex h-7 w-7 items-center 
              text-[12px] justify-center rounded-full bg-brand-teal font-bold
              text-white`}
            >
              {numberBadge}
            </div>
          )}
        </div>

        <div className="flex-1 pt-4">
          <p
            className={`text-[26px] font-bold text-brand-teal-light leading-8 transition-colors 
            duration-300 group-hover:text-brand-orange`}
          >
            {title}
          </p>
          <p className="text-sm text-brand-gray max-w-xl mt-3 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </main>
  );
};

export default MethodologyCard;
