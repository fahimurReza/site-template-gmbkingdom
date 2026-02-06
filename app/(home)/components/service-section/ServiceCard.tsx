import Button from "@/components/ui/Button";
import type { Service } from "@/types";
import clsx from "clsx";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

const ServiceCard = ({ service, className }: ServiceCardProps) => {
  const { icon: IconComponent, title, description, features } = service;
  return (
    <main
      className={clsx(
        "bg-white px-6 py-8 rounded-2xl shadow-md group hover:-translate-y-2",
        "transition-transform duration-300",
        className,
      )}
    >
      <div
        className={clsx(
          "flex justify-start items-start bg-brand-gray-bg p-3 rounded-xl",
          "w-fit shadow-md duration-200 group-hover:bg-brand-orange",
        )}
      >
        <IconComponent
          className={`h-9 w-9 text-brand-gray-dark group-hover:text-white 
          transition-colors duration-300`}
        />
      </div>

      <h2 className="text-[26px] font-bold text-brand-teal-light leading-8 mt-10">
        {title}
      </h2>

      <p className="text-brand-gray text-base mt-3">{description}</p>

      {features.length > 0 && (
        <ul className="mt-5 space-y-3 text-sm text-brand-gray">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 font-medium">
              <div className="mt-1.5 flex h-2.5 w-2.5 shrink-0 rounded-full bg-brand-orange/60" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="pt-6 mt-10 flex justify-between border-t border-gray-200">
        <Button variant="whiteSmall">Details</Button>
        <Button variant="secondarySmall">Quote</Button>
      </div>
    </main>
  );
};

export default ServiceCard;
