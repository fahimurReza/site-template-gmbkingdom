import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden text-white">
      <div className="absolute inset-0 bg-linear-to-r from-teal-950 to-teal-800 -z-10" />
      <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent -z-10" />

      <div className="w-full base-padding py-10 space-y-4">
        <p className="text-xs uppercase font-medium tracking-[2px]">
          Frisco Concrete Contractor
        </p>
        <h2 className="text-left text-[42px] font-semibold leading-12">
          Addison, TX
        </h2>
        <p>Complete concrete patio including striping, ADA, and drainage.</p>
      </div>
    </section>
  );
};

export default HeroSection;
