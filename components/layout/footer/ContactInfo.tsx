import PhoneIcon from "@/components/common/PhoneIcon";
import ClockIcon from "@/components/icons/ClockIcon";
import LocationIcon from "@/components/icons/LocationIcon";

const ContactInfo = () => {
  return (
    <div className="mt-2">
      <a
        href="tel:+13332343454"
        className="mt-6 flex gap-6 items-center cursor-pointer"
      >
        <div className="bg-white/15 p-2.25 rounded-xl">
          <PhoneIcon className="w-5 aspect-square" />
        </div>
        <div className="items-center content-center">
          <p className="text-[20px] font-medium">333-234-3454</p>
        </div>
      </a>

      <a className="mt-6 flex gap-6 items-center cursor-pointer">
        <div className="bg-white/15 p-2.25 rounded-xl">
          <ClockIcon className="w-5 aspect-square" stroke="10" />
        </div>
        <div className="items-center content-center">
          <p className="text-[16px] font-medium">
            Monday to Saturday
            <br /> <span className="text-white/60">8:00 AM to 6:00 PM </span>
          </p>
        </div>
      </a>

      <a className="mt-6 flex gap-6 items-center cursor-pointer">
        <div className="bg-white/15 p-2.25 rounded-xl">
          <LocationIcon className="w-5 aspect-square" />
        </div>

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
