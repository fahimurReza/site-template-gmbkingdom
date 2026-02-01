import Button from "@/components/ui/Button";
import CallButton from "@/components/ui/CallButton";

const ReadyToSmall = () => {
  return (
    <main className="base-padding py-14 bg-brand-gray-bg">
      <div className="grid grid-cols-5 gap-8 items-start">
        <div className="col-span-3">
          <h2 className="text-[32px] font-semibold text-brand-teal">
            Ready for a frisco concrete partner?
          </h2>
          <p className="mt-2 text-brand-gray max-w-2xl">
            Work directly with us - one contract, one team accountable. Get a
            complete proposal for your commercial or industrial project within
            48 hours.
          </p>
        </div>
        <div className="col-span-2 flex items-center justify-center min-h-full">
          <div className="flex gap-6">
            <Button variant="white" className="w-54 text-[16px] rounded-3xl!">
              Get a Quote
            </Button>
            <CallButton
              phoneNumber="(469) 535-6405"
              buttonText="Call (469) 535-6405"
              className="bg-brand-teal hover:bg-brand-teal-light text-[16px] rounded-3xl! px-8!"
              iconClassName="hidden"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ReadyToSmall;
