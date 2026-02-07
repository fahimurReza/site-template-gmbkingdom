import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden text-white">
      <div className="inset-0 -z-10">
        <Image
          src="/services/cocnrete-driveway.png"
          alt="Concretre Patio"
          fill={true}
          className="object-cover object-center"
          quality={80}
          sizes="(max-width: 768px) 100vw, 1200px"
        />
      </div>

      <div className="absolute inset-0 bg-linear-to-r from-brand-teal to-brand-teal/30 -z-10" />
      <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/20 to-black/10 -z-10" />

      <div className="w-full base-padding py-10 space-y-4">
        <p className="text-xs uppercase font-medium tracking-[2px]">
          Frisco Concrete Contractor
        </p>
        <h2 className="text-left text-[42px] font-semibold leading-12">
          Cocnrete Driveway
        </h2>
        <p>Complete concrete patio including striping, ADA, and drainage.</p>
      </div>
    </section>
  );
};

export default HeroSection;
