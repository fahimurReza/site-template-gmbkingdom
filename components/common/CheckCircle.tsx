import Image from "next/image";

interface CheckCircleProps {
  className?: string;
}

const CheckCircle = ({ className }: CheckCircleProps) => {
  return (
    <div className="flex items-center content-center">
      <Image
        className={className}
        src="/icons/check-circle.svg"
        alt="Check Circle Icon"
        width={20}
        height={20}
      />
    </div>
  );
};

export default CheckCircle;
