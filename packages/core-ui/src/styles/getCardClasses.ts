import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type Shadow = "none" | "sm" | "md" | "lg" | "xl";
export interface CardProps {
  bordered?: boolean;
  className?: string;
  shadow?: Shadow;
}

export interface CardSectionProps {
  className?: string;
  noPadding?: boolean;
}

const BASE_CARD = "bg-base-100 rounded-xl overflow-hidden flex flex-col transition-all duration-200";
const BORDERED_CARD = "border border-base-300";

const SHADOWS = {
  none: "shadow-none",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
};

const BASE_SECTION = "px-6 py-4";

export function getCardClasses({
  bordered = true,
  shadow = "sm",
  className,
}: CardProps): string {
  return twMerge(
    clsx(
      BASE_CARD,
      bordered && BORDERED_CARD,
      SHADOWS[shadow],
      className
    )
  );
}

export function getCardHeaderClasses({ className, noPadding = false }: CardSectionProps): string {
  return twMerge(
    clsx(
      noPadding ? "p-0" : BASE_SECTION,
      "border-b border-base-200 bg-base-100/50",
      className
    )
  );
}

export function getCardBodyClasses({ className, noPadding = false }: CardSectionProps): string {
  return twMerge(
    clsx(
      noPadding ? "p-0" : BASE_SECTION,
      "flex-1", // Allows body to expand if card has fixed height
      className
    )
  );
}

export function getCardFooterClasses({ className, noPadding = false }: CardSectionProps): string {
  return twMerge(
    clsx(
      noPadding ? "p-0" : "px-6 py-4", // Footer often has slightly different padding in some systems, keeping consistent for now but separating const
      "border-t border-base-200 bg-base-100/50",
      className
    )
  );
}
