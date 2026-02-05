import PhoneCircleIcon from "@/components/icons/PhoneCircleIcon";
import LocationIcon from "@/components/icons/LocationIcon";
import ClockIcon from "@/components/icons/ClockIcon";

const ContactInfo = () => {
  return (
    <div className="mt-18">
      <a
        href="tel:+13332343454"
        className="mt-6 flex gap-6 items-center cursor-pointer"
      >
        <PhoneCircleIcon className="w-7 aspect-square" />
        <div className="items-center content-center">
          <p className="text-[20px] font-medium">333-234-3454</p>
        </div>
      </a>

      <a className="mt-6 flex gap-6 items-center cursor-pointer">
        <ClockIcon className="w-7 aspect-square" />
        <div className="items-center content-center">
          <p className="text-[16px] font-medium">
            Monday to Saturday
            <br /> <span className="text-white/60">8:00 AM to 6:00 PM </span>
          </p>
        </div>
      </a>

      <a className="mt-6 flex gap-6 items-center cursor-pointer">
        <LocationIcon className="w-7 aspect-square" />
        <div className="items-center content-center">
          <p className="text-[16px] font-medium">
            279 Main St, Suite 128,
            <br /> <span className="text-white/60">Frisco, TX 75034</span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default ContactInfo;
