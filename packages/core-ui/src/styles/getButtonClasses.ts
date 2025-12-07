import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type ButtonSize = "xsmall" | "small" | "medium" | "large" | "xlarge";
export type ButtonColor =
  | "primary"
  | "secondary"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "error"
  | "neutral";
export type ButtonVariant = "solid" | "outline" | "ghost" | "link" | "soft" | "dash";
export type ButtonShape = "square" | "circle" | "wide" | "block" | "pill";

export interface ButtonProps {
  size?: ButtonSize;
  color?: ButtonColor;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  responsive?: boolean;
  disabled?: boolean;
  className?: string;
}

const BASE_CLASSES =
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed select-none";

const SIZES: Record<ButtonSize, string> = {
  xsmall: "px-2 py-1 text-xs rounded-md",
  small: "px-3 py-1.5 text-sm rounded-md",
  medium: "px-4 py-2 text-sm rounded-lg",
  large: "px-6 py-3 text-base rounded-lg",
  xlarge: "px-8 py-4 text-lg rounded-xl",
};

const SHAPES: Record<string, string> = {
  square: "aspect-square p-2",
  circle: "aspect-square p-2 rounded-full",
  pill: "rounded-full",
  wide: "px-12",
  block: "w-full flex",
};

// Style Maps for each variant
const SOLID_STYLES: Record<ButtonColor, string> = {
  primary: "bg-primary text-primary-content hover:bg-primary-hover active:scale-95 transition-transform border border-transparent",
  secondary: "bg-secondary text-secondary-content hover:bg-secondary-hover active:scale-95 transition-transform border border-transparent",
  accent: "bg-accent text-accent-content hover:bg-accent-hover active:scale-95 transition-transform border border-transparent",
  info: "bg-info text-info-content hover:bg-info-hover active:scale-95 transition-transform border border-transparent",
  success: "bg-success text-success-content hover:bg-success-hover active:scale-95 transition-transform border border-transparent",
  warning: "bg-warning text-warning-content hover:bg-warning-hover active:scale-95 transition-transform border border-transparent",
  error: "bg-error text-error-content hover:bg-error-hover active:scale-95 transition-transform border border-transparent",
  neutral: "bg-neutral text-neutral-content hover:bg-neutral-hover active:scale-95 transition-transform border border-transparent",
};

const OUTLINE_STYLES: Record<ButtonColor, string> = {
  primary: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-primary-content active:scale-95 transition-transform",
  secondary: "bg-transparent border border-secondary text-secondary hover:bg-secondary hover:text-secondary-content active:scale-95 transition-transform",
  accent: "bg-transparent border border-accent text-accent hover:bg-accent hover:text-accent-content active:scale-95 transition-transform",
  info: "bg-transparent border border-info text-info hover:bg-info hover:text-info-content active:scale-95 transition-transform",
  success: "bg-transparent border border-success text-success hover:bg-success hover:text-success-content active:scale-95 transition-transform",
  warning: "bg-transparent border border-warning text-warning hover:bg-warning hover:text-warning-content active:scale-95 transition-transform",
  error: "bg-transparent border border-error text-error hover:bg-error hover:text-error-content active:scale-95 transition-transform",
  neutral: "bg-white border border-black text-black hover:bg-black hover:text-white active:scale-95 transition-transform", // Special neutral handling
};

const GHOST_STYLES: Record<ButtonColor, string> = {
  primary: "bg-transparent text-primary hover:bg-primary/10 active:scale-95 transition-transform",
  secondary: "bg-transparent text-secondary hover:bg-secondary/10 active:scale-95 transition-transform",
  accent: "bg-transparent text-accent hover:bg-accent/10 active:scale-95 transition-transform",
  info: "bg-transparent text-info hover:bg-info/10 active:scale-95 transition-transform",
  success: "bg-transparent text-success hover:bg-success/10 active:scale-95 transition-transform",
  warning: "bg-transparent text-warning hover:bg-warning/10 active:scale-95 transition-transform",
  error: "bg-transparent text-error hover:bg-error/10 active:scale-95 transition-transform",
  neutral: "bg-transparent text-neutral hover:bg-neutral/10 active:scale-95 transition-transform",
};

const LINK_STYLES: Record<ButtonColor, string> = {
  primary: "bg-transparent text-primary hover:underline p-0 h-auto min-h-0 active:scale-95 transition-transform",
  secondary: "bg-transparent text-secondary hover:underline p-0 h-auto min-h-0 active:scale-95 transition-transform",
  accent: "bg-transparent text-accent hover:underline p-0 h-auto min-h-0 active:scale-95 transition-transform",
  info: "bg-transparent text-info hover:underline p-0 h-auto min-h-0 active:scale-95 transition-transform",
  success: "bg-transparent text-success hover:underline p-0 h-auto min-h-0 active:scale-95 transition-transform",
  warning: "bg-transparent text-warning hover:underline p-0 h-auto min-h-0 active:scale-95 transition-transform",
  error: "bg-transparent text-error hover:underline p-0 h-auto min-h-0 active:scale-95 transition-transform",
  neutral: "bg-transparent text-neutral hover:underline p-0 h-auto min-h-0 active:scale-95 transition-transform",
};

const SOFT_STYLES: Record<ButtonColor, string> = {
  primary: "bg-primary-soft text-primary hover:bg-primary-soft-hover active:scale-95 transition-transform",
  secondary: "bg-secondary-soft text-secondary hover:bg-secondary-soft-hover active:scale-95 transition-transform",
  accent: "bg-accent-soft text-accent hover:bg-accent-soft-hover active:scale-95 transition-transform",
  info: "bg-info-soft text-info hover:bg-info-soft-hover active:scale-95 transition-transform",
  success: "bg-success-soft text-success hover:bg-success-soft-hover active:scale-95 transition-transform",
  warning: "bg-warning-soft text-warning hover:bg-warning-soft-hover active:scale-95 transition-transform",
  error: "bg-error-soft text-error hover:bg-error-soft-hover active:scale-95 transition-transform",
  neutral: "bg-neutral-soft text-neutral hover:bg-neutral-soft-hover active:scale-95 transition-transform",
};

const DASH_STYLES: Record<ButtonColor, string> = {
  primary: "bg-transparent border border-dashed border-primary text-primary hover:bg-primary-soft-hover active:scale-95 transition-transform",
  secondary: "bg-transparent border border-dashed border-secondary text-secondary hover:bg-secondary-soft-hover active:scale-95 transition-transform",
  accent: "bg-transparent border border-dashed border-accent text-accent hover:bg-accent-soft-hover active:scale-95 transition-transform",
  info: "bg-transparent border border-dashed border-info text-info hover:bg-info-soft-hover active:scale-95 transition-transform",
  success: "bg-transparent border border-dashed border-success text-success hover:bg-success-soft-hover active:scale-95 transition-transform",
  warning: "bg-transparent border border-dashed border-warning text-warning hover:bg-warning-soft-hover active:scale-95 transition-transform",
  error: "bg-transparent border border-dashed border-error text-error hover:bg-error-soft-hover active:scale-95 transition-transform",
  neutral: "bg-transparent border border-dashed border-neutral text-neutral hover:bg-neutral-soft-hover active:scale-95 transition-transform",
};

const getColorClasses = (color: ButtonColor, variant: ButtonVariant): string => {
  switch (variant) {
    case "solid":
      return SOLID_STYLES[color];
    case "outline":
      return OUTLINE_STYLES[color];
    case "ghost":
      return GHOST_STYLES[color];
    case "link":
      return LINK_STYLES[color];
    case "soft":
      return SOFT_STYLES[color];
    case "dash":
      return DASH_STYLES[color];
    default:
      return "";
  }
};

export function getButtonClasses({
  size = "medium",
  color = "primary",
  variant = "solid",
  shape,
  responsive = false,
  disabled = false,
  className,
}: ButtonProps): string {
  const sizeClass = responsive
    ? "px-2 py-1 text-xs sm:px-3 sm:py-1.5 sm:text-sm md:px-4 md:py-2 md:text-base lg:px-6 lg:py-3 lg:text-lg"
    : SIZES[size];

  const colorClass = getColorClasses(color, variant);
  const shapeClass = shape ? SHAPES[shape] : "";

  // Special handling for square/circle to override padding from size
  const finalSizeClass = (shape === 'square' || shape === 'circle') ? sizeClass.replace(/px-\d+/, '') : sizeClass;

  return twMerge(
    clsx(
      BASE_CLASSES,
      // Only show focus ring when navigating with keyboard
      "focus-visible:ring-2 focus-visible:ring-offset-2",
      finalSizeClass,
      colorClass,
      shapeClass,
      disabled && "opacity-50 cursor-not-allowed pointer-events-none",
      className
    )
  );
}
