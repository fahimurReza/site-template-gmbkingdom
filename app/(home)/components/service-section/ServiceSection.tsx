import ServiceButton from "@/components/ui/ServiceButton";
import { services } from "@data/services";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <main className="base-padding bg-brand-gray-bg min-h-120 pt-16 pb-20">
      <p className="text-sm font-semibold uppercase text-brand-orange mb-5 tracking-[2px]">
        COMMERCIAL & RESIDENTIAL
      </p>
      <h1 className="text-5xl font-bold text-brand-teal">
        Turnkey Concrete Solutions
      </h1>
      <div className="flex justify-between">
        <p className="text-lg text-brand-gray mt-5 max-w-3xl">
          We provide comprehensive concrete services for both residential and
          commercial projects, ensuring quality and durability in every job.
        </p>
        <div className="content-end">
          <ServiceButton />
        </div>
      </div>
      <div className="mt-16 grid grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </main>
  );
};

export default ServiceSection;
