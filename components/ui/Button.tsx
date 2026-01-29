import { type ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "transparent";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: `
    bg-bt-primary 
    hover:bg-bt-primary-hover
    active:bg-orange-800 
    border-orange-600/30
  `,
  secondary: `
    bg-bt-secondary
    hover:bg-bt-secondary-hover
    active:bg-teal-800 
    border-teal-800/40
  `,
  transparent: `
    bg-white/10 
    border border-white/10 
    hover:bg-white/20 
    active:bg-white/25
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
          "px-6 py-3 cursor-pointer",
          "font-semibold rounded-lg",
          "text-lg leading-tight",
          "transition-colors duration-200",
          fullWidth ? "w-full" : "w-full sm:w-64",
          variantStyles[variant],
          "text-white",
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
