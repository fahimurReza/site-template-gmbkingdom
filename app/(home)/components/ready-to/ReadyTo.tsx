import CallButton from "@/components/ui/CallButton";
import Button from "@/components/ui/Button";
import PhoneIcon from "@/components/icons/PhoneIcon";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";

const ReadyTo = () => {
  return (
    <main className="base-padding py-18 bg-brand-teal text-white">
      <div
        className={`flex items-center gap-4 border border-white/20 rounded-full
         bg-white/10 px-6 py-1 text-xs tracking-[2px] md:tracking-[3px] font-semibold w-fit uppercase`}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-orange"></span>
        </span>
        Direct contacts available
      </div>
      <h2 className="mt-8 text-5xl sm:text-6xl font-bold sm:font-semibold leading-14 lg:leading-18 max-w-4xl">
        Ready to work with a Frisco Concrete Contractor?
      </h2>
      <p className="text-xl mt-6 max-w-3xl">
        No middleman. No subcontractor markup. Get a complete proposal for your
        residential or commercial concrete project within 48 hours.
      </p>

      {/* Call to Action */}
      <div className="mt-16 flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center sm:justify-start">
        <CallButton
          variant="primary"
          className="w-full sm:w-64 max-w-xs h-12"
          phoneNumber="+14695356405"
          displayText="Get a Direct Quote"
        />
        <Button variant="transparent" className="w-full sm:w-68 max-w-xs h-12">
          Learn More
        </Button>
      </div>

      {/* Contact Information */}
      <div className="mt-14 py-6 px-8 border border-white/20 bg-white/10 rounded-2xl">
        <h2 className="text-[28px] font-semibold">Contact our DFW Office</h2>

        {/* Phone */}
        <a
          href="tel:+13332343454"
          className="mt-8 flex gap-6 items-start group cursor-pointer"
        >
          <div className="p-3 bg-white/20 rounded-xl">
            <PhoneIcon className="w-7 aspect-square group-hover:text-brand-orange transition-colors duration-300" />
          </div>
          <div className="items-center content-center">
            <h2 className="uppercase text-[10px] font-semibold tracking-[2px]">
              Direct Line
            </h2>
            <p className="text-[22px] font-semibold mt-1 group-hover:text-brand-orange transition-colors duration-300">
              333-234-3454
            </p>
          </div>
        </a>

        {/* Email – added word-break and hyphens */}
        <a
          href="mailto:info@friscoconcretecontractors.com"
          className="mt-8 flex gap-6 items-start group cursor-pointer"
        >
          <div className="p-3 bg-white/20 rounded-xl">
            <EmailIcon className="w-7 aspect-square group-hover:text-brand-orange transition-colors duration-300" />
          </div>
          <div className="items-center content-center">
            <h2 className="uppercase text-[10px] font-semibold tracking-[2px]">
              Email Estimate
            </h2>
            <p className="text-[22px] font-semibold mt-1 group-hover:text-brand-orange transition-colors duration-300 break-all hyphens-auto">
              info@friscoconcretecontractors.net
            </p>
          </div>
        </a>

        {/* Location */}
        <a href="" className="mt-8 flex gap-6 items-start group cursor-pointer">
          <div className="p-3 bg-white/20 rounded-xl">
            <LocationIcon className="w-7 aspect-square group-hover:text-brand-orange transition-colors duration-300" />
          </div>
          <div className="items-center content-center">
            <h2 className="uppercase text-[10px] font-semibold tracking-[2px]">
              Regional Office
            </h2>
            <p className="text-[22px] font-semibold mt-1 group-hover:text-brand-orange transition-colors duration-300">
              279 Main St, Suite 128, Frisco, TX 75034
            </p>
          </div>
        </a>
      </div>
    </main>
  );
};

export default ReadyTo;
