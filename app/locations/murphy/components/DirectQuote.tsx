import Button from "@/components/ui/Button";
import CallButton from "@/components/ui/CallButton";

const DirectQuote = () => {
  return (
    <section className="pt-8 pb-10">
      <div className="rounded-2xl shadow-2xl px-9 py-7 bg-white">
        <div className="grid grid-cols-6 items-start">
          <div className="col-span-3">
            <h2 className="text-3xl font-bold text-brand-teal">
              Get a direct quote now
            </h2>
            <p className="mt-2 text-brand-gray max-w-2xl">
              Work directly with us - one contract, one team accountable for
              your entire concrete scope.
            </p>
          </div>
          <div className="col-span-3 flex items-center justify-end min-h-full">
            <div className="flex gap-6">
              <CallButton
                variant="secondary"
                phoneNumber="+14695356405"
                displayText="Call 469-535-6405"
                iconClassName="hidden"
              />
              <Button
                variant="whiteRound"
                className="w-54 text-[16px] rounded-3xl!"
              >
                Start Your Project
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DirectQuote;
