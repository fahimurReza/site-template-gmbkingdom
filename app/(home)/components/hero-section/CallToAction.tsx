import CallButton from "@/components/ui/CallButton";
import Button from "@/components/ui/Button";

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 mt-14 items-center justify-center">
      <CallButton
        variant="primary"
        className="w-full sm:w-64 max-w-xs h-12"
        phoneNumber="+14695356405"
        displayText="(469) 535-6405"
      />
      <Button variant="transparent" className="w-full sm:w-68 max-w-xs h-12">
        Learn More
      </Button>
    </div>
  );
};

export default CallToAction;
