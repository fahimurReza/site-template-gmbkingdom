import CallButton from "@/components/ui/CallButton";
import Button from "@/components/ui/Button";

const CallToAction = () => {
  return (
    <div className="flex gap-10 mt-14">
      <CallButton phoneNumber="(469) 535-6405" />
      <Button variant="transparent">Learn More</Button>
    </div>
  );
};

export default CallToAction;
