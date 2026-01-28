import Image from "next/image";

const DropDown = () => {
  return (
    <div className="flex items-center content-center pt-1">
      <Image
        src="/drop-down.svg"
        alt="dropdown-icon"
        width={12}
        height={12}
        className="ml-2 transition-transform duration-300 group-hover:rotate-180"
      />
    </div>
  );
};

export default DropDown;
