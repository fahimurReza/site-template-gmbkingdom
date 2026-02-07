import { locations } from "@/data";
import RightArrow from "@/components/icons/RightArrow";

const Locations = () => {
  return (
    <main>
      <header className="uppercase text-xs font-semibold tracking-[4px] text-start">
        Service Area
      </header>
      <div className="mt-6 sm:mt-12 font-semibold text-sm flex flex-col gap-2.5">
        {locations.map((location, index) => (
          <a key={index} href={location.path} className="flex gap-2">
            <RightArrow className="w-1.25 text-brand-orange" />
            <p className="text-start">{location.title}</p>
          </a>
        ))}
      </div>
    </main>
  );
};

export default Locations;
