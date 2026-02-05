const HeroSection = () => {
  return (
    <section className="base-padding bg-linear-to-r from-brand-teal to-brand-teal-light text-white">
      <div className="w-full py-18 flex flex-col items-center gap-y-5">
        <div
          className={`flex items-center gap-4 border border-white/20 rounded-full
         bg-white/10 px-6 py-1 text-xs tracking-[3px] font-semibold w-fit uppercase`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-orange"></span>
          </span>
          Contact Us
        </div>
        <h2 className="text-center text-[48px] font-semibold">
          Get Your Project Started Today
        </h2>
        <p className="text-lg text-center max-w-4xl">
          Have questions about your next project? We’d love to hear from you! As
          your local stamped concrete experts in Frisco, Little Elm, and The
          Colony, we pride ourselves on clear communication and reliable
          service. Whether you have a specific design in mind or just want to
          explore the possibilities, give us a call at (469) 535-6405. Let’s
          build something beautiful together.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
