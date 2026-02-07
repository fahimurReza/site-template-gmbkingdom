import Button from "@/components/ui/Button";
import CallButton from "@/components/ui/CallButton";

const DirectQuote = () => {
  return (
    <section className="py-8 md:py-10">
      <div className="rounded-2xl shadow-2xl px-6 py-8 md:px-9 md:py-10 bg-white">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
          {/* First row on mobile: Content (title + description) */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-brand-teal leading-tight">
              Get a direct quote now
            </h2>
            <p className="mt-3 md:mt-4 text-brand-gray text-base sm:text-lg max-w-xl mx-auto lg:mx-0">
              Work directly with us - one contract, one team accountable. Get a
              complete proposal for your residential or commercial project
              within 48 hours.
            </p>
          </div>

          {/* Second row on mobile: Buttons stacked vertically */}
          <div className="w-full lg:w-2/5 flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-end items-center lg:items-start">
            <CallButton
              variant="secondary"
              phoneNumber="+14695356405"
              displayText="Call 469-535-6405"
              iconClassName="hidden"
              className="w-full sm:w-auto h-12"
            />
            <Button variant="whiteRound" className="w-full sm:w-auto h-12">
              Start Your Project
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectQuote;
