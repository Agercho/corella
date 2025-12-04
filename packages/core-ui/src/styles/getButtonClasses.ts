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
export type ButtonShape = "square" | "circle" | "wide" | "block";

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
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed select-none";

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
  wide: "px-12",
  block: "w-full flex",
};

// Helper to get color classes based on variant
const getColorClasses = (color: ButtonColor, variant: ButtonVariant): string => {
  const isNeutral = color === "neutral";

  switch (variant) {
    case "solid":
      return `bg-[--corella-color-${color}] text-[--corella-color-${color}-content] hover:bg-[--corella-color-${color}-hover] focus:ring-[--corella-color-${color}] border border-transparent`;
    case "outline":
      return `bg-transparent border border-[--corella-color-${color}] text-[--corella-color-${color}] hover:bg-[--corella-color-${color}] hover:text-[--corella-color-${color}-content] focus:ring-[--corella-color-${color}]`;
    case "ghost":
      return `bg-transparent text-[--corella-color-${color}] hover:bg-[--corella-color-${color}]/10 focus:ring-[--corella-color-${color}]`;
    case "link":
      return `bg-transparent text-[--corella-color-${color}] hover:underline p-0 h-auto min-h-0 focus:ring-0`;
    case "soft":
      return `bg-[--corella-color-${color}]/10 text-[--corella-color-${color}] hover:bg-[--corella-color-${color}]/20 focus:ring-[--corella-color-${color}]`;
    case "dash":
      return `bg-transparent border border-dashed border-[--corella-color-${color}] text-[--corella-color-${color}] hover:bg-[--corella-color-${color}]/5 focus:ring-[--corella-color-${color}]`;
    default:
      return "";
  }
};

export function getButtonClasses({
  size = "medium",
  color = "neutral",
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
      finalSizeClass,
      colorClass,
      shapeClass,
      className
    )
  );
}
