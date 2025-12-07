import React, { forwardRef, useEffect, useRef } from "react";
import { type SelectionProps as CoreSelectionProps, getSelectionClasses } from "@corella/core-ui";

export interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color">, CoreSelectionProps {
  label?: React.ReactNode;
  wrapperClassName?: string;
  indeterminate?: boolean;
  hideControl?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      wrapperClassName,
      size = "small",
      color = "primary",
      disabled,
      checked,
      defaultChecked,
      error,
      label,
      indeterminate,
      hideControl,
      variant = "classic" as "classic" | "card" | "chip",
      children,
      id,
      ...props
    },
    ref
  ) => {
    const internalRef = useRef<HTMLInputElement | null>(null);
    const combinedRef = (node: HTMLInputElement) => {
      internalRef.current = node;
      if (typeof ref === "function") ref(node);
      else if (ref) (ref as React.MutableRefObject<HTMLInputElement | null>).current = node;
    };

    useEffect(() => {
      if (internalRef.current) {
        internalRef.current.indeterminate = !!indeterminate;
      }
    }, [indeterminate]);

    const { container, input, indicator } = getSelectionClasses({
      type: "checkbox",
      size,
      color,
      disabled,
      error,
      variant,
      hideControl,
      className: wrapperClassName, // wrapperClassName applies to the label container
    });

    return (
      <label className={container} htmlFor={id}>
        <div className="relative flex items-center">
          <input
            ref={combinedRef}
            id={id}
            type="checkbox"
            className={input + (className ? ` ${className}` : "")}
            disabled={disabled}
            checked={checked}
            defaultChecked={defaultChecked}
            {...props}
          />
          {/* Checkmark or Indeterminate Dash */}
          <div className={indicator}>
            {indeterminate ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path fillRule="evenodd" d="M3 12a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
              </svg>
            )}
          </div>
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

Checkbox.displayName = "Checkbox";
