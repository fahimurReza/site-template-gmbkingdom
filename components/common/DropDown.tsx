import Image from "next/image";
import clsx from "clsx";

interface DropDownProps {
  isOpen?: boolean;
  mobile?: boolean;
}

const DropDown = ({ isOpen = false, mobile = false }: DropDownProps) => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/icons/drop-down.svg"
        alt="dropdown icon"
        width={12}
        height={12}
        className={clsx(
          "ml-2 transition-transform duration-300 ease-in-out",
          isOpen ? "rotate-180" : "rotate-0",
          mobile && "h-5 w-5", // slightly larger on mobile
        )}
      />
    </div>
  );
};

export default DropDown;
