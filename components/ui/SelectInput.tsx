"use client";

import { forwardRef, SelectHTMLAttributes, useId } from "react";
import clsx from "clsx";

interface SelectInputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  containerClassName?: string;
  labelClassName?: string;
  selectClassName?: string;
  fullWidth?: boolean;
  options: Array<{ value: string; label: string } | string>;
  placeholder?: string;
}

const SelectInput = forwardRef<HTMLSelectElement, SelectInputProps>(
  (
    {
      label,
      error,
      containerClassName,
      labelClassName,
      selectClassName,
      fullWidth = true,
      options,
      placeholder,
      id,
      disabled,
      required,
      className: propClassName,
      ...props
    },
    ref,
  ) => {
    const generatedId = useId();
    const selectId = id || generatedId;

    return (
      <div className={clsx("mb-4", fullWidth && "w-full", containerClassName)}>
        {label && (
          <label
            htmlFor={selectId}
            className={clsx(
              "block text-sm font-medium mb-3 text-brand-gray-dark",
              labelClassName,
            )}
          >
            {label}
            {required && <span className="text-orange-600 ml-1">*</span>}
          </label>
        )}

        <div className="relative">
          <select
            id={selectId}
            ref={ref}
            disabled={disabled}
            required={required}
            className={clsx(
              "w-full px-4 py-2.5",
              "border border-gray-300 rounded-md",
              "bg-white text-brand-gray-dark text-sm",
              "placeholder:text-brand-gray-light text-sm",
              "appearance-none",
              "transition-all duration-200",
              "focus:outline-none focus:border-orange-400 focus:ring-2 focus:ring-orange-300/50 focus:bg-white",
              "hover:border-gray-400 hover:shadow-sm",
              disabled &&
                "opacity-60 cursor-not-allowed bg-gray-100 border-gray-300",
              error &&
                "border-red-400 focus:border-red-400 focus:ring-red-300/40 bg-red-50/50",
              selectClassName,
              propClassName,
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}

            {options.map((option) => {
              if (typeof option === "string") {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              }
              return (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              );
            })}
          </select>
        </div>

        {error && <p className="mt-1.5 text-sm text-red-600">{error}</p>}
      </div>
    );
  },
);

SelectInput.displayName = "SelectInput";

export default SelectInput;
