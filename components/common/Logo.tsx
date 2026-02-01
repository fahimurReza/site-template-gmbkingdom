import Image from "next/image";

type LogoSize = "sm" | "md" | "lg" | number;
type LogoVariant = "color" | "white";

interface LogoProps {
  variant?: LogoVariant;
  size?: LogoSize;
  className?: string;
}

export default function Logo({
  variant = "color",
  size = "md",
  className = "",
}: LogoProps) {
  const sizes = {
    sm: { w: 140, h: 140 },
    md: { w: 220, h: 220 },
    lg: { w: 300, h: 300 },
  };

  const finalSize =
    typeof size === "number" ? { w: size, h: size } : sizes[size];

  const logoSrc = variant === "white" ? "/logo-white.svg" : "/logo-color.svg";

  return (
    <div className="-ml-1">
      <Image
        src={logoSrc}
        alt="Company Logo"
        width={finalSize.w}
        height={finalSize.h}
        className={`mr-2 ${className}`}
        priority
      />
    </div>
  );
}
