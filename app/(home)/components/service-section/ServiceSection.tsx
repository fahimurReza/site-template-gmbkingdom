import ServiceButton from "@/components/ui/ServiceButton";

const ServiceSection = () => {
  return (
    <main className="base-padding bg-gray-100 min-h-120 pt-14">
      <p className="text-sm font-semibold text-orange-600 mb-4 tracking-[2px]">
        COMMERCIAL & RESIDENTIAL
      </p>
      <h1 className="text-5xl font-bold text-teal-950">
        Turnkey Concrete Solutions
      </h1>
      <div className="flex justify-between">
        <p className="text-base text-gray-700 mt-4 max-w-2xl">
          We provide comprehensive concrete services for both residential and
          commercial projects, ensuring quality and durability in every job.
        </p>
        <div className="content-end">
          <ServiceButton />
        </div>
      </div>
    </main>
  );
};

export default ServiceSection;
