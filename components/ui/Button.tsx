import { type ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "transparent"
  | "white"
  | "whiteRound"
  | "whiteSmall"
  | "secondarySmall";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-brand-orange 
    text-white px-6 py-3
    hover:bg-brand-orange-light
    border-brand-orange/30
  `,
  secondary: `
    bg-brand-teal
    text-white px-6 py-3
    hover:bg-brand-teal-hover
    border-teal-800/40
  `,
  transparent: `
    bg-white/10 
    text-white px-6 py-3
    border border-white/10 
    hover:bg-white/20 
  `,
  white: `
    bg-white 
    px-3 py-2
    text-brand-teal
    hover:bg-brand-gray-bg
    border border-gray-300 
  `,
  whiteRound: `
    bg-white text-[16px]!
    px-8 py-2 font-medium!
    text-brand-teal
    hover:bg-brand-gray-bg
    border border-gray-300 rounded-3xl!
  `,
  whiteSmall: `
    bg-white
    px-3 py-2 w-34
    text-tx-theme text-xs
    hover:bg-brand-gray-bg
    border border-gray-200
  `,
  secondarySmall: `
    bg-brand-teal
    px-3 py-2 w-34
    text-white text-xs
    hover:bg-brand-teal-light
    border-teal-800/40
  `,
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        disabled={disabled}
        className={clsx(
          "inline-flex items-center justify-center",
          "cursor-pointer",
          "font-semibold rounded-lg",
          "text-lg leading-tight",
          "transition-colors duration-200",
          fullWidth && "w-full",
          variantStyles[variant],
          disabled && "opacity-60 cursor-not-allowed",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";

export default Button;
