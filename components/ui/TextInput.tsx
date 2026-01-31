"use client";

import {
  forwardRef,
  InputHTMLAttributes,
  TextareaHTMLAttributes,
  useId,
} from "react";
import clsx from "clsx";

type InputOrTextareaProps = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

interface TextInputProps extends InputOrTextareaProps {
  label?: string;
  error?: string;
  multiline?: boolean; // ← new: true → use <textarea>
  rows?: number; // only relevant when multiline
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  fullWidth?: boolean;
}

const TextInput = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  TextInputProps
>(
  (
    {
      label,
      error,
      multiline = false,
      rows = 4,
      containerClassName,
      labelClassName,
      inputClassName,
      fullWidth = true,
      id,
      disabled,
      required,
      className: propClassName,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const inputId = id || generatedId;

    const Element = multiline ? "textarea" : "input";

    return (
      <div className={clsx("mb-4", fullWidth && "w-full", containerClassName)}>
        {label && (
          <label
            htmlFor={inputId}
            className={clsx(
              "block text-sm font-medium mb-3 text-brand-gray-dark",
              labelClassName,
            )}
          >
            {label}
            {required && (
              <span className="text-brand-orange-light ml-1">*</span>
            )}
          </label>
        )}

        <Element
          id={inputId}
          ref={ref as any} // TypeScript needs this cast because ref type is union
          disabled={disabled}
          required={required}
          rows={multiline ? rows : undefined}
          className={clsx(
            "w-full px-3 py-2",
            "border border-gray-300 rounded-md",
            "bg-white/5 backdrop-blur-sm",
            "text-white placeholder:text-brand-gray-light placeholder:text-sm",
            "transition-all duration-200",
            "focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-300/50 focus:bg-white/10",
            "hover:border-brand-gray-light/70 hover:bg-white/8",
            disabled &&
              "opacity-60 cursor-not-allowed bg-gray-900/30 border-gray-700",
            error &&
              "border-red-400 focus:border-red-400 focus:ring-red-400/50 bg-red-950/10",
            // Extra textarea styles (optional – adjust as needed)
            multiline && "min-h-25 resize-y", // allow vertical resize only
            inputClassName,
            propClassName,
          )}
          {...props}
        />

        {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
      </div>
    );
  },
);

TextInput.displayName = "TextInput";

export default TextInput;
