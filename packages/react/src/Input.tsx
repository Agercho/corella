import React, { forwardRef } from "react";
import { type InputProps as CoreInputProps, type InputSize, getInputClasses } from "@corella/core-ui";

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color">, CoreInputProps {
  label?: string;
  wrapperClassName?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  startAction?: React.ReactNode;
  endAction?: React.ReactNode;
  helperText?: React.ReactNode;
}

const LABEL_SIZES: Record<InputSize, string> = {
  small: "left-3 top-2 text-xs peer-placeholder-shown:top-2 peer-focus:top-0.5 peer-focus:text-[10px]",
  medium: "left-4 top-2.5 text-sm peer-placeholder-shown:top-2.5 peer-focus:top-1 peer-focus:text-xs",
  large: "left-5 top-3 text-base peer-placeholder-shown:top-3 peer-focus:top-1.5 peer-focus:text-sm",
  xlarge: "left-6 top-4 text-lg peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-base",
};

const LABEL_COLORS: Record<string, string> = {
  primary: "peer-focus:text-primary",
  secondary: "peer-focus:text-secondary",
  accent: "peer-focus:text-accent",
  info: "peer-focus:text-info",
  success: "peer-focus:text-success",
  warning: "peer-focus:text-warning",
  error: "peer-focus:text-error",
  neutral: "peer-focus:text-neutral",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      wrapperClassName,
      size = "small",
      color = "primary",
      error,
      disabled,
      fullWidth = true,
      startIcon,
      endIcon,
      startAction,
      endAction,
      label,
      helperText,
      placeholder,
      id,
      ...props
    },
    ref
  ) => {
    // Determine input mode
    // Floating label: if 'floatingLabel' prop implies or strict 'label' implies check?
    // Plan: We distinguish Standard vs Floating via prop passed to core, but here `floatingLabel` on core
    // changes base styles.
    // Let's assume: If user passes `floatingLabel` prop (boolean), we use floating mode.
    // If just `label`, we use standard label mode.
    // CoreInputProps includes `floatingLabel`.
    const isFloating = props.floatingLabel;

    // Presence checks for padding logic
    const hasStartContent = !!startIcon || !!startAction;
    const hasEndContent = !!endIcon || !!endAction;

    const inputClasses = getInputClasses({
      size,
      color,
      error,
      disabled,
      fullWidth,
      hasStartIcon: hasStartContent,
      hasEndIcon: hasEndContent,
      floatingLabel: isFloating,
      className,
    });

    // Resolve label color class for floating label
    const labelColorClass = error ? LABEL_COLORS["error"] : LABEL_COLORS[color] || LABEL_COLORS["primary"];

    return (
      <div className={`${fullWidth ? "w-full" : "inline-flex w-auto"} flex-col`}>
        {/* Standard Label */}
        {label && !isFloating && (
          <label htmlFor={id} className={`block mb-1.5 text-sm font-medium ${error ? "text-error" : "text-base-content/80"}`}>
            {label}
          </label>
        )}

        <div className={`relative ${fullWidth ? "w-full" : "w-auto"} ${wrapperClassName || ""}`}>
          {/* Start Content (Icon or Action) */}
          {(startIcon || startAction) && (
            <div className={`absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 flex items-center ${startAction ? "pointer-events-auto" : "pointer-events-none"}`}>
              {startAction || startIcon}
            </div>
          )}

          {/* Input Element */}
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            placeholder={isFloating ? " " : placeholder}
            className={`${inputClasses} peer`}
            {...props}
          />

          {/* Floating Label */}
          {label && isFloating && (
            <label
              htmlFor={id}
              className={`
                absolute text-gray-500 duration-200 transform
                origin-[0] bg-transparent
                pointer-events-none
                peer-focus:scale-90 ${labelColorClass}
                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                peer-focus:-translate-y-0.5
                ${LABEL_SIZES[size]}
                ${hasStartContent ? "peer-placeholder-shown:left-10" : ""}
              `}
            >
              {label}
            </label>
          )}

          {/* End Content (Icon or Action) */}
          {(endIcon || endAction) && (
            <div className={`absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 flex items-center ${endAction ? "pointer-events-auto" : "pointer-events-none"}`}>
              {endAction || endIcon}
            </div>
          )}
        </div>

        {/* Helper Text */}
        {helperText && (
          <div className={`mt-1.5 text-xs ${error ? "text-error" : "text-gray-500"}`}>
            {helperText}
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
