import Image from "next/image";

const TopBar = () => {
  return (
    <div className="base-padding bg-brand-teal font-medium text-sm text-white h-10 flex justify-between items-center">
      <p>Commercial & Residential Concrete</p>
      <div className="flex items-center cursor-pointer">
        <Image
          src="/phone-icon.svg"
          alt="phone"
          width={16}
          height={16}
          className="mr-2"
        />
        <p> Call (323) 555-0123</p>
      </div>
    </div>
  );
};

export default TopBar;
