import clsx from "clsx";
import PhoneIcon from "@/components/common/PhoneIcon";
import { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "secondaryLarge";

interface CallButtonProps extends Omit<ComponentPropsWithoutRef<"a">, "href"> {
  variant?: ButtonVariant;
  phoneNumber: string;
  displayText?: string;
  iconClassName?: string;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-brand-orange
    text-white px-6 py-3
    hover:bg-brand-orange-light
    border-brand-orange/30 rounded-lg
  `,
  secondary: `
    bg-brand-teal px-8 py-3 text-[16px]!
    text-white w-fit font-medium!
    hover:bg-brand-teal-light
    border-teal-800/40 rounded-3xl!
  `,
  secondaryLarge: `
    bg-brand-teal px-8 py-3 text-lg!
    text-white w-fit font-medium!
    hover:bg-brand-teal-light
    border-teal-800/40 rounded-3xl!
  `,
};

export default function CallButton({
  variant = "primary",
  phoneNumber,
  displayText,
  iconClassName,
  className,
  ...anchorProps
}: CallButtonProps) {
  return (
    <a
      href={`tel:${phoneNumber}`}
      className={clsx(
        "text-white font-semibold text-lg",
        "flex items-center justify-center gap-3",
        variantStyles[variant],
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
