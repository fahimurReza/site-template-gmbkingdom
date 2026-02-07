import Button from "@/components/ui/Button";
import CallButton from "@/components/ui/CallButton";

const ReadyToSmall = () => {
  return (
    <main className="base-padding py-12 md:py-14 bg-brand-gray-bg">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-center">
        {/* Left column – text */}
        <div className="w-full lg:w-5/8 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-[32px] font-semibold text-brand-teal leading-tight">
            Ready for a Frisco concrete partner?
          </h2>
          <p className="mt-4 text-brand-gray text-base sm:text-lg mx-auto lg:mx-0">
            Work directly with us - one contract, one team accountable. Get a
            complete proposal for your commercial or industrial project within
            48 hours.
          </p>
        </div>

        {/* Right column – buttons */}
        <div className="w-full lg:w-3/8 flex justify-center lg:justify-end">
          <div className="flex flex-col items-center sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <Button
              variant="whiteRound"
              className="w-5/6 sm:w-64 px-8 py-3 text-base sm:text-sm h-12"
            >
              Get a Quote
            </Button>
            <CallButton
              variant="secondary"
              phoneNumber="+14695356405"
              displayText="Call (469) 535-6405"
              iconClassName="hidden"
              className="w-5/6! sm:w-64 px-8 py-3 text-base sm:text-sm h-12"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReadyToSmall;
