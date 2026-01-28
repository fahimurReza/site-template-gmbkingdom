import Image from "next/image";

const CheckCircle = () => {
  return (
    <div className="flex items-center content-center">
      <Image
        src="/check-circle.svg"
        alt="Check Circle Icon"
        width={20}
        height={20}
      />
    </div>
  );
};

export default CheckCircle;
