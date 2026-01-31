import clsx from "clsx";
import type { MethodologyStep } from "@/types/methodology";

interface MethodologyCardProps {
  step: MethodologyStep;
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
        <div className="relative">
          <IconComponent />
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
            className={`text-2xl font-bold text-brand-gray-dark transition-colors 
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
