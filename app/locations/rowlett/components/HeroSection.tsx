import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative h-50 flex items-center justify-center overflow-hidden text-white">
      <div className="absolute inset-0 bg-linear-to-r from-brand-teal to-brand-teal-light -z-10" />
      <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/10 to-black/10 -z-10" />

      <div className="w-full base-padding py-6">
        <p className="text-xs uppercase font-medium tracking-[2px]">
          Frisco Concrete Contractor
        </p>
        <h2 className="text-left text-[42px] font-semibold">Rowlett, TX</h2>
        <p className="">
          Complete concrete patio including striping, ADA, and drainage.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
