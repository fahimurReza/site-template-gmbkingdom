import Button from "@/components/ui/Button";
import CallButton from "@/components/ui/CallButton";

const ReadyToSmall = () => {
  return (
    <main className="base-padding py-12 bg-brand-gray-bg">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        {/* First row on mobile: Content (title + description) */}
        <div className="w-full lg:w-5/8 text-center lg:text-left">
          <h2 className="text-3xl md:text-3xl font-bold text-brand-teal leading-tight">
            Get a direct quote now
          </h2>
          <p className="mt-3 md:mt-4 text-brand-gray-dark text-lg mx-auto">
            Work directly with us - one contract, one team accountable. Get a
            complete proposal for your residential or commercial project within
            48 hours.
          </p>
        </div>

        {/* Second row on mobile: Buttons stacked vertically */}
        <div className="w-full lg:w-3/8 flex flex-col gap-4 justify-center lg:justify-end items-center lg:items-end">
          <CallButton
            variant="secondary"
            phoneNumber="+14695356405"
            displayText="Call 469-535-6405"
            iconClassName="hidden"
            className="w-full h-12 sm:max-w-70"
          />
          <Button variant="whiteRound" className="w-full h-12 sm:max-w-70">
            Start Your Project
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ReadyToSmall;
