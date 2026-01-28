import Image from "next/image";

interface PhoneIconProps {
  className?: string;
}

export default function PhoneIcon({ className = "" }: PhoneIconProps) {
  return (
    <Image
      src="/phone-icon.svg"
      alt="phone icon"
      width={20}
      height={20}
      className={className}
    />
  );
}
