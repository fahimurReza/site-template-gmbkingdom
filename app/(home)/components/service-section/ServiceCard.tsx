import Button from "@/components/ui/Button";
import type { Service } from "@/types";
import clsx from "clsx";

interface ServiceCardProps {
  service: Service;
  className?: string;
}

export default function ServiceCard({ service, className }: ServiceCardProps) {
  const {
    icon: IconComponent,
    title,
    description,
    features,
    className: serviceClassName,
  } = service;
  return (
    <main
      className={clsx(
        "bg-white px-8 py-10 rounded-2xl shadow-md group hover:-translate-y-2 transition-transform duration-300",
        serviceClassName,
        className,
      )}
    >
      <div className="flex justify-start items-start">
        <IconComponent />
      </div>

      <h2 className="text-2xl font-bold text-tx-theme mt-10">{title}</h2>

      <p className="text-brand-gray text-sm mt-3">{description}</p>

      {features.length > 0 && (
        <ul className="mt-5 space-y-3 text-xs text-brand-gray">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start gap-3 font-medium">
              <div className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-brand-orange/60" />
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
}
