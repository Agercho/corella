import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function getChipClasses(isActive: boolean): string {
  return twMerge(
    clsx(
      "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-colors cursor-pointer border select-none",
      isActive
        ? "bg-primary text-primary-content border-primary"
        : "bg-base-100 text-base-content border-base-300 hover:bg-base-200"
    )
  );
}
