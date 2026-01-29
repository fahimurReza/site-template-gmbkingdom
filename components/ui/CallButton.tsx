import PhoneIcon from "@/components/common/PhoneIcon";
import { ComponentPropsWithoutRef } from "react";

interface CallButtonProps extends Omit<ComponentPropsWithoutRef<"a">, "href"> {
  phoneNumber: string;
  buttonText?: string;
  iconClassName?: string;
  className?: string;
  countryCode?: string;
}

export default function CallButton({
  phoneNumber,
  buttonText,
  iconClassName = "w-5 h-5 rotate-90",
  className = "",
  countryCode = "+1",
  ...anchorProps
}: CallButtonProps) {
  const digitsOnly = phoneNumber.replace(/\D/g, "");
  const cleanNumber =
    digitsOnly.startsWith("1") || digitsOnly.startsWith("+1")
      ? digitsOnly
      : `${countryCode.replace(/^\+/, "")}${digitsOnly}`;

  const telLink = `tel:+${cleanNumber}`;
  const displayText = buttonText || phoneNumber;

  return (
    <a
      href={telLink}
      className={`
        w-full sm:w-64
        px-6 py-3
        bg-bt-primary text-white font-semibold rounded-lg
        hover:bg-bt-primary-hover transition
        flex items-center justify-center gap-3 text-lg
        ${className}
      `}
      {...anchorProps}
    >
      <div className="flex items-center gap-3">
        <PhoneIcon className={iconClassName} />
        <span>{displayText}</span>
      </div>
    </a>
  );
}
