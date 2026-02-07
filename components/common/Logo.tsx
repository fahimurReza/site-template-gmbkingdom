import Image from "next/image";

type LogoVariant = "color" | "white";

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
}

export default function Logo({ variant = "color", className = "" }: LogoProps) {
  const logoSrc = variant === "white" ? "/logo/white.svg" : "/logo/color.svg";

  return (
    <div className="-ml-1 flex justify-center">
      <Image
        src={logoSrc}
        alt="Company Logo"
        width="220"
        height="220"
        className={`mr-2 ${className}`}
        priority
      />
    </div>
  );
}
