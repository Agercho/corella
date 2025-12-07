import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type SelectionSize = "small" | "medium" | "large" | "xlarge";
export type SelectionColor = "primary" | "secondary" | "accent" | "info" | "success" | "warning" | "error" | "neutral";
export type SelectionVariant = "classic" | "card" | "chip";

export interface SelectionProps {
  size?: SelectionSize;
  color?: SelectionColor;
  disabled?: boolean;
  checked?: boolean; // Used for some conditional styling if needed, though usually handled via peer-checked
  error?: boolean;
  className?: string; // Container class
  variant?: SelectionVariant;
  hideControl?: boolean;
}

export interface CheckAndRadioProps extends SelectionProps {
  type: "checkbox" | "radio";
}

export interface SelectionReturn {
  container: string;
  input: string;
  indicator: string;
}

// SHARED
const BASE_CONTAINER = "inline-flex items-center gap-2 cursor-pointer transition-all duration-200 select-none relative group";
const DISABLED_CONTAINER = "opacity-50 cursor-not-allowed pointer-events-none";

// CHECKBOX SPECIFIC
const CHECKBOX_BASE = "appearance-none border-2 rounded transition-all duration-200 flex justify-center items-center shrink-0 peer focus:outline-none focus:ring-offset-1 focus:ring-offset-base-100";
const CHECKBOX_SIZES: Record<SelectionSize, string> = {
  small: "w-4 h-4 rounded-sm text-xs",
  medium: "w-5 h-5 rounded text-sm",
  large: "w-6 h-6 rounded-md text-base",
  xlarge: "w-7 h-7 rounded-md text-lg",
};
const CHECKBOX_ICON_SIZES: Record<SelectionSize, string> = {
  small: "w-3 h-3",
  medium: "w-3.5 h-3.5",
  large: "w-4 h-4",
  xlarge: "w-5 h-5",
};

// RADIO SPECIFIC
const RADIO_BASE = "appearance-none border-2 rounded-full transition-all duration-200 flex justify-center items-center shrink-0 peer focus:outline-none focus:ring-[0.5px]";
const RADIO_SIZES: Record<SelectionSize, string> = {
  small: "w-4 h-4",
  medium: "w-5 h-5",
  large: "w-6 h-6",
  xlarge: "w-7 h-7",
};
const RADIO_DOT_SIZES: Record<SelectionSize, string> = {
  small: "w-2 h-2",
  medium: "w-2.5 h-2.5",
  large: "w-3 h-3",
  xlarge: "w-3.5 h-3.5",
};

// COLORS (Applied to the input border/bg when checked)
// We use `peer-checked` for the input styling context usually, but here we define the classes that the input itself receives
const COLORS: Record<SelectionColor, string> = {
  primary: "border-base-300 checked:bg-primary checked:border-primary focus:ring-primary/20",
  secondary: "border-base-300 checked:bg-secondary checked:border-secondary focus:ring-secondary/20",
  accent: "border-base-300 checked:bg-accent checked:border-accent focus:ring-accent/20",
  info: "border-base-300 checked:bg-info checked:border-info focus:ring-info/20",
  success: "border-base-300 checked:bg-success checked:border-success focus:ring-success/20",
  warning: "border-base-300 checked:bg-warning checked:border-warning focus:ring-warning/20",
  error: "border-error checked:bg-error checked:border-error focus:ring-error/20",
  neutral: "border-base-300 checked:bg-neutral checked:border-neutral focus:ring-neutral/20",
};

// CARD VARIANT STYLES (Applied to the LABEL container)
const CARD_BASE = "border rounded-lg p-4 w-full flex-row hover:bg-base-200/50 has-[:checked]:border-primary has-[:checked]:bg-primary/5 has-[:checked]:ring-[0.8px] has-[:checked]:ring-primary transition-all";
const CARD_COLORS: Record<SelectionColor, string> = {
  primary: "has-[:checked]:border-primary-soft has-[:checked]:bg-primary-soft has-[:checked]:ring-primary-soft",
  secondary: "has-[:checked]:border-secondary-soft has-[:checked]:bg-secondary-soft has-[:checked]:ring-secondary-soft",
  accent: "has-[:checked]:border-accent-soft has-[:checked]:bg-accent-soft has-[:checked]:ring-accent-soft",
  info: "has-[:checked]:border-info-soft has-[:checked]:bg-info-soft has-[:checked]:ring-info-soft",
  success: "has-[:checked]:border-success-soft has-[:checked]:bg-success-soft has-[:checked]:ring-success-soft",
  warning: "has-[:checked]:border-warning-soft has-[:checked]:bg-warning-soft has-[:checked]:ring-warning-soft",
  error: "has-[:checked]:border-error-soft has-[:checked]:bg-error-soft has-[:checked]:ring-error-soft",
  neutral: "has-[:checked]:border-neutral-soft has-[:checked]:bg-neutral-soft has-[:checked]:ring-neutral-soft",
};

// CHIP VARIANT STYLES
const CHIP_BASE = "inline-flex items-center w-fit justify-center px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer border border-transparent select-none shadow-sm focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-base-100";
const CHIP_UNCHECKED = "bg-base-200 hover:bg-transparent hover:text-neutral hover:shadow-none";

const CHIP_COLORS: Record<SelectionColor, string> = {
  primary: "focus-within:ring-primary hover:text-primary has-[:checked]:bg-primary has-[:checked]:text-primary-content hover:has-[:checked]:bg-primary-hover",
  secondary: "focus-within:ring-secondary hover:text-secondary has-[:checked]:bg-secondary has-[:checked]:text-secondary-content hover:has-[:checked]:bg-secondary-hover",
  accent: "focus-within:ring-accent hover:text-accent has-[:checked]:bg-accent has-[:checked]:text-accent-content hover:has-[:checked]:bg-accent-hover",
  info: "focus-within:ring-info hover:text-info has-[:checked]:bg-info has-[:checked]:text-info-content hover:has-[:checked]:bg-info-hover",
  success: "focus-within:ring-success hover:text-success has-[:checked]:bg-success has-[:checked]:text-success-content hover:has-[:checked]:bg-success-hover",
  warning: "focus-within:ring-warning hover:text-warning has-[:checked]:bg-warning has-[:checked]:text-warning-content hover:has-[:checked]:bg-warning-hover",
  error: "focus-within:ring-error hover:text-error has-[:checked]:bg-error has-[:checked]:text-error-content hover:has-[:checked]:bg-error-hover",
  neutral: "focus-within:ring-neutral hover:text-neutral has-[:checked]:bg-neutral has-[:checked]:text-neutral-content hover:has-[:checked]:bg-neutral-hover",
};

export function getSelectionClasses({
  type = "checkbox",
  size = "medium",
  color = "primary",
  disabled = false,
  error = false,
  variant = "classic",
  hideControl = false,
  className,
}: SelectionProps & { type: "checkbox" | "radio" }): {
  container: string;
  input: string;
  indicator: string; // The checkmark or dot
} {
  // If variant is chip, we force hiding the standard control
  const isChip = variant === "chip";
  const effectiveHideControl = hideControl || isChip;

  // Container Classes
  const container = twMerge(
    clsx(
      disabled && DISABLED_CONTAINER,
      variant === "classic" && BASE_CONTAINER,
      variant === "card" && [BASE_CONTAINER, CARD_BASE, error ? CARD_COLORS["error"] : CARD_COLORS[color]],
      variant === "chip" && [CHIP_BASE, CHIP_UNCHECKED, error ? CHIP_COLORS["error"] : CHIP_COLORS[color]],
      className
    )
  );

  // Input Classes
  const baseInput = type === "checkbox" ? CHECKBOX_BASE : RADIO_BASE;
  const sizeInput = type === "checkbox" ? CHECKBOX_SIZES[size] : RADIO_SIZES[size];
  const colorInput = error ? COLORS["error"] : COLORS[color];

  const input = twMerge(
    clsx(
      effectiveHideControl ? "sr-only" : [baseInput, sizeInput, colorInput, "bg-base-100"]
    )
  );

  // Indicator Classes (The icon inside)
  // For Checkbox: Scale and Opacity transition
  // For Radio: Scale transition
  const indicatorSize = type === "checkbox" ? CHECKBOX_ICON_SIZES[size] : RADIO_DOT_SIZES[size];
  const indicator = twMerge(
    clsx(
      "pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
      indicatorSize,
      effectiveHideControl && "hidden",
      !effectiveHideControl && (type === "checkbox" ? "text-base-100 opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100" : "bg-base-100 rounded-full scale-0 peer-checked:scale-100")
    )
  );

  return { container, input, indicator };
}
