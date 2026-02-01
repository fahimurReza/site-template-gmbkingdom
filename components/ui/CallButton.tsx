import clsx from "clsx";
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
  iconClassName,
  className,
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
      className={clsx(
        "px-6 py-3 bg-brand-orange text-white font-semibold",
        "hover:bg-brand-orange-light transition",
        "flex items-center justify-center gap-3 text-lg rounded-lg",
        className,
      )}
      {...anchorProps}
    >
      <div className="flex items-center gap-3">
        <PhoneIcon className={iconClassName} />
        <span>{displayText}</span>
      </div>
    </a>
  );
}
