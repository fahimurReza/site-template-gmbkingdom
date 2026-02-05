import Image from "next/image";

interface HamburgerIconProps {
  className?: string;
}

export default function HamburgerIcon({ className = "" }: HamburgerIconProps) {
  return (
    <Image
      src="/icons/hamburger.svg"
      alt="phone icon"
      width={20}
      height={20}
      className={className}
    />
  );
}
