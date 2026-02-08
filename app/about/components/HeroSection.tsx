const HeroSection = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-r from-teal-950 to-teal-700 -z-10" />
      <div className="absolute inset-0 bg-linear-to-r from-black/40 to-transparent -z-10" />

      <div className="base-padding text-white w-full py-12 flex flex-col items-center gap-y-6">
        <div
          className={`flex items-center gap-4 border border-white/20 rounded-full
         bg-white/10 px-6 py-1 text-xs tracking-[3px] font-semibold w-fit uppercase`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-orange"></span>
          </span>
          About Us
        </div>
        <h2 className="text-center text-[42px] font-semibold leading-12">
          Built on Quality, Delivered on Schedule
        </h2>
        <p className="text-lg text-center max-w-4xl">
          For over 25 years, developers and property owners across North Texas
          have trusted us to deliver turnkey commercial concrete projects. One
          contract, one team, full accountability.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
