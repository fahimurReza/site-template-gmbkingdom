import Image from "next/image";

interface CrossIconProps {
  className?: string;
}

export default function CrossIcon({ className = "" }: CrossIconProps) {
  return (
    <Image
      src="/icons/cross.svg"
      alt="phone icon"
      width={20}
      height={20}
      className={className}
    />
  );
}
