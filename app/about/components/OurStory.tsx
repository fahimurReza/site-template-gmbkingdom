import Button from "@/components/ui/Button";
import CallButton from "@/components/ui/CallButton";

const OurStory = () => {
  return (
    <section className="base-padding py-18">
      <div className="px-30">
        <p className="uppercase text-brand-teal-light text-sm font-medium tracking-[2px]">
          Our Story
        </p>
        <h2 className="mt-4 text-4xl font-semibold text-brand-gray-dark">
          Frisco Concrete Contractors Across North Texas
        </h2>
        <div className="flex flex-col gap-3 mt-6 text-brand-gray">
          <p>
            We're a full-service commercial concrete contractor delivering
            turnkey projects throughout the Dallas-Fort Worth Metroplex.
            Property owners and developers work directly with us - one contract,
            one team, complete accountability from permitting through punchlist.
          </p>
          <p>
            Our approach eliminates the complexity of managing multiple
            subcontractors. We handle everything: city permits, engineering
            coordination, inspections, concrete placement, quality testing, and
            final documentation. From tilt-wall warehouses to retail centers to
            industrial facilities, you have a single point of contact throughout
            your project.
          </p>
          <p>
            Quality and safety drive everything we do. Our crews include
            ACI-certified finishers, OSHA-certified supervisors, and experienced
            project managers. Every project receives comprehensive documentation
            including cylinder breaks, flatness testing, daily reports, and
            complete as-built records.
          </p>
          <p>
            As Dallas-Fort Worth continues its explosive growth, we're scaling
            our capabilities to serve the region's commercial and industrial
            construction boom. Whether you're developing a new warehouse
            facility or upgrading an existing property, we deliver the turnkey
            concrete expertise your project requires.
          </p>
        </div>
        <div className="mt-10 flex gap-6">
          <Button variant="white" className="font-medium! px-6 rounded-3xl!">
            Work With Us
          </Button>
          <CallButton
            phoneNumber="(469) 535-6405"
            buttonText="Call 469-535-6405"
            className="bg-brand-teal hover:bg-brand-teal-light text-[16px] rounded-3xl! px-8! w-fit! font-medium!"
            iconClassName="hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default OurStory;
