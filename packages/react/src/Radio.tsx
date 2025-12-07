import React, { forwardRef } from "react";
import { type SelectionProps as CoreSelectionProps, getSelectionClasses } from "@corella/core-ui";

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color">, CoreSelectionProps {
  label?: React.ReactNode;
  wrapperClassName?: string;
  hideControl?: boolean;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  (
    {
      className,
      wrapperClassName,
      size = "medium",
      color = "primary",
      disabled,
      checked,
      defaultChecked,
      error,
      label,
      variant = "classic" as "classic" | "card" | "chip",
      hideControl,
      children,
      id,
      ...props
    },
    ref
  ) => {
    const { container, input, indicator } = getSelectionClasses({
      type: "radio",
      size,
      color,
      disabled,
      error,
      variant,
      hideControl,
      className: wrapperClassName,
    });

    return (
      <label className={container} htmlFor={id}>
        <div className="relative flex items-center">
          <input
            ref={ref}
            id={id}
            type="radio"
            className={input + (className ? ` ${className}` : "")}
            disabled={disabled}
            checked={checked}
            defaultChecked={defaultChecked}
            {...props}
          />
          <div className={indicator} />
        </div>
        {(label || children) && (
          <div className={`flex flex-col ${variant === "card" ? "ml-1 w-full" : ""}`}>
            {label && <span className={`text-base-content ${variant === "card" ? "font-semibold mb-1" : ""}`}>{label}</span>}
            {children}
          </div>
        )}
      </label>
    );
  }
);

Radio.displayName = "Radio";
