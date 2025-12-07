import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type InputSize = "small" | "medium" | "large" | "xlarge";
export type InputColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | "neutral";

export interface InputProps {
  size?: InputSize;
  color?: InputColor;
  error?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  className?: string;
  hasStartIcon?: boolean;
  hasEndIcon?: boolean;
  floatingLabel?: boolean;
}

const BASE_SHARED = "block w-full text-base-content bg-transparent transition-colors duration-200 appearance-none focus:outline-none";

// Standard: Rounded, Gray BG (base-200), Full Border
const STANDARD_BASE = `${BASE_SHARED} border border-base-300 rounded-lg placeholder:text-gray-400 focus:bg-base-100 focus:ring-1`;

// Floating: Transparent BG, Bottom Border Only, No Ring, No padding-x (looks better with floating label usually)
const FLOATING_BASE = `${BASE_SHARED} border-0 border-b-2 placeholder-transparent focus:ring-0 px-0`;

const SIZES: Record<InputSize, string> = {
  small: "px-3 py-2 text-sm",
  medium: "px-4 py-2.5 text-base",
  large: "px-5 py-3 text-lg",
  xlarge: "px-6 py-4 text-xl",
};

// Floating needs different padding, usually px-0 for the underline look, but we might want slight padding if user desires.
// The user example shows `px-0`. We will follow that for floating.
const FLOATING_SIZES: Record<InputSize, string> = {
  small: "py-2 text-sm",
  medium: "py-2.5 text-base",
  large: "py-3 text-lg",
  xlarge: "py-4 text-xl",
};

// Padding adjustments for icons
const START_ICON_PADDING: Record<InputSize, string> = {
  small: "pl-9",
  medium: "pl-11",
  large: "pl-12",
  xlarge: "pl-14",
};

const END_ICON_PADDING: Record<InputSize, string> = {
  small: "pr-9",
  medium: "pr-11",
  large: "pr-12",
  xlarge: "pr-14",
};

// Standard colors (Ring + Border)
const STANDARD_COLORS: Record<InputColor, string> = {
  primary: "focus:border-primary focus:ring-primary",
  secondary: "focus:border-secondary focus:ring-secondary",
  accent: "focus:border-accent focus:ring-accent",
  info: "focus:border-info focus:ring-info",
  success: "focus:border-success focus:ring-success",
  warning: "focus:border-warning focus:ring-warning",
  error: "border-error focus:border-error focus:ring-error",
  neutral: "focus:border-neutral focus:ring-neutral",
};

// Floating colors (Bottom Border only)
const FLOATING_COLORS: Record<InputColor, string> = {
  primary: "border-base-300 focus:border-primary",
  secondary: "border-base-300 focus:border-secondary",
  accent: "border-base-300 focus:border-accent",
  info: "border-base-300 focus:border-info",
  success: "border-base-300 focus:border-success",
  warning: "border-base-300 focus:border-warning",
  error: "border-error focus:border-error",
  neutral: "border-base-300 focus:border-neutral",
};

export function getInputClasses({
  size = "small",
  color = "primary",
  error = false,
  disabled = false,
  fullWidth = true,
  hasStartIcon = false,
  hasEndIcon = false,
  floatingLabel = false,
  className,
}: InputProps): string {
  const baseClasses = floatingLabel ? FLOATING_BASE : STANDARD_BASE;
  const sizeClasses = floatingLabel ? FLOATING_SIZES[size] : SIZES[size];
  const colorMap = floatingLabel ? FLOATING_COLORS : STANDARD_COLORS;

  return twMerge(
    clsx(
      baseClasses,
      sizeClasses,
      error ? colorMap["error"] : colorMap[color],
      {
        "opacity-50 cursor-not-allowed": disabled,
        "bg-base-200": disabled && !floatingLabel, // Standard disabled bg
        "w-full": fullWidth,
        [START_ICON_PADDING[size]]: hasStartIcon,
        [END_ICON_PADDING[size]]: hasEndIcon,
      },
      className
    )
  );
}
