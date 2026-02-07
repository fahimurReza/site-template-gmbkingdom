import RightArrow from "@/components/icons/RightArrow";
import { services } from "@/data";

const Expartise = () => {
  return (
    <main>
      <header className="uppercase text-xs font-semibold tracking-[4px] text-start">
        Expartise
      </header>
      <div className="mt-6 sm:mt-12 font-semibold text-sm flex flex-col gap-2">
        {services.map((service, index) => (
          <a key={index} href={service.path} className="flex gap-2">
            <RightArrow className="w-1.25 text-brand-orange" />
            <p className="text-start">{service.title}</p>
          </a>
        ))}
      </div>
    </main>
  );
};

export default Expartise;
