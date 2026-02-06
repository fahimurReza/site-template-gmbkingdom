import Button from "@/components/ui/Button";
import CallButton from "@/components/ui/CallButton";

const ReadyToWork = () => {
  return (
    <section className="base-padding py-14">
      <div
        className={`w-full flex flex-col items-center bg-brand-gray-bg gap-y-6 p-10 rounded-2xl`}
      >
        <h2 className="text-center text-4xl font-semibold">
          Ready to work with a trusted concrete partner?
        </h2>
        <p className="text-center text-xl max-w-2xl text-brand-gray">
          Let's discuss your project requirements, timeline, and specifications.
          Our Dallas-based estimating team will deliver accurate pricing and
          coordination plans within 48 hours.
        </p>
        <div className="mt-3 flex gap-6">
          <Button variant="whiteRound">Start Your Project</Button>
          <CallButton
            variant="secondary"
            phoneNumber="+14695356405"
            displayText="Call 469-535-6405"
            iconClassName="hidden"
          />
        </div>
      </div>
    </section>
  );
};

export default ReadyToWork;
