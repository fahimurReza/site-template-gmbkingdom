import { locations } from "@/data/locations";
import RightArrow from "@/components/icons/RightArrow";

const Locations = () => {
  return (
    <main>
      <header className="uppercase text-xs font-semibold tracking-[4px]">
        Service Area
      </header>
      <div className="mt-12 font-semibold text-sm flex flex-col gap-2">
        {locations.map((location, index) => (
          <a
            key={index}
            href={location.path}
            className="flex gap-2 hover:scale-110 duration-200"
          >
            <RightArrow className="w-1.25 text-brand-orange" />
            <p>{location.title}</p>
          </a>
        ))}
      </div>
    </main>
  );
};

export default Locations;
