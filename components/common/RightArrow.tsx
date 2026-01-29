import Image from "next/image";

const RightArrow = () => {
  return (
    <div className="flex items-center content-center">
      <Image
        src="/right-arrow.svg"
        alt="RightArrow-icon"
        width={7}
        height={7}
        className="ml-4 transition-transform duration-300 group-hover:translate-x-1"
      />
    </div>
  );
};

export default RightArrow;
