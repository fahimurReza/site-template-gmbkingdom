import CallButton from "@/components/ui/CallButton";
import Button from "@/components/ui/Button";
import PhoneIcon02 from "@/components/icons/PhoneIcon02";
import EmailIcon from "@/components/icons/EmailIcon";
import LocationIcon from "@/components/icons/LocationIcon";

const ReadyTo = () => {
  return (
    <main className="base-padding py-18 bg-brand-teal text-white">
      <div
        className={`flex items-center gap-4 border border-white/20 rounded-full
         bg-white/10 px-6 py-1 text-xs tracking-[3px] font-semibold w-fit uppercase`}
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-orange opacity-75"></span>
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-orange"></span>
        </span>
        Direct contacts available
      </div>
      <h2 className="mt-8 text-6xl font-semibold leading-18">
        Ready to work with a turnkey concrete contractor?
      </h2>
      <p className="text-2xl mt-6 max-w-3xl">
        No middleman. No subcontractor markup. Get a complete proposal for your
        residential or commercial concrete project within 48 hours.
      </p>
      <div className="flex gap-10 mt-16">
        <CallButton
          phoneNumber="(469) 535-6405"
          buttonText="Get a Direct Quote"
        />
        <Button variant="transparent" className="w-68">
          Learn More
        </Button>
      </div>
      <div className="mt-14 py-8 px-10 border border-white/20 bg-white/10 rounded-2xl">
        <h2 className="text-[28px] font-semibold">Contact our DFW Office</h2>
        <a
          href="tel:+13332343454"
          className="mt-8 flex gap-6 items-start group cursor-pointer"
        >
          <div className="p-3 bg-white/20 rounded-xl">
            <PhoneIcon02 className=" w-7 aspect-square rotate-90 group-hover:text-brand-orange transition-colors duration-300" />
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
        <a
          href="emailTo:info@friscoconcretecontractors.com"
          className="mt-8 flex gap-6 items-start group cursor-pointer"
        >
          <div className="p-3 bg-white/20 rounded-xl">
            <EmailIcon className=" w-7 aspect-square group-hover:text-brand-orange transition-colors duration-300" />
          </div>
          <div className="items-center content-center">
            <h2 className="uppercase text-[10px] font-semibold tracking-[2px]">
              Email Estimate
            </h2>
            <p className="text-[22px] font-semibold mt-1 group-hover:text-brand-orange transition-colors duration-300">
              info@friscoconcretecontractors.net
            </p>
          </div>
        </a>
        <a href="" className="mt-8 flex gap-6 items-start group cursor-pointer">
          <div className="p-3 bg-white/20 rounded-xl">
            <LocationIcon className=" w-7 aspect-square group-hover:text-brand-orange transition-colors duration-300" />
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
