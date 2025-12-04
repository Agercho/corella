import React, { forwardRef } from "react";
import { getButtonClasses, type ButtonProps as CoreButtonProps } from "@corella/core-ui";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, CoreButtonProps {
  asChild?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, size, color, variant, shape, responsive, disabled, children, ...props }, ref) => {
    const classes = getButtonClasses({
      size,
      color,
      variant,
      shape,
      responsive,
      disabled,
      className,
    });

    return (
      <button ref={ref} className={classes} disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
