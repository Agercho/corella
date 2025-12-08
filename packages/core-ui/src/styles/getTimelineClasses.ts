import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type TimelineVariant = "vertical" | "horizontal" | "alternate";

export interface TimelineProps {
  variant?: TimelineVariant;
  className?: string;
}

// --- CONTAINER ---
const BASE_CONTAINER = "relative";

const VERTICAL_CONTAINER = "space-y-8 border-l border-base-300 ml-3";

// Horizontal: Grid layout (like Flowbite's horizontal timeline)
const HORIZONTAL_CONTAINER = "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative";

// Alternate: Central line created by a pseudo-element on the container (or explicit element in React/Astro)
// We'll use a class that allows the child items to position themselves relative to a central spine.
const ALTERNATE_CONTAINER = "relative space-y-8";

export function getTimelineContainerClasses({ variant = "vertical", className }: TimelineProps): string {
  return twMerge(
    clsx(
      BASE_CONTAINER,
      variant === "vertical" && VERTICAL_CONTAINER,
      variant === "horizontal" && HORIZONTAL_CONTAINER,
      variant === "alternate" && ALTERNATE_CONTAINER,
      className
    )
  );
}

// --- ITEM ---
export interface TimelineItemProps {
  variant?: TimelineVariant;
  className?: string;
}

const VERTICAL_ITEM = "ml-6";
const HORIZONTAL_ITEM = "relative pt-8"; // Padding top for the line and icon

// Alternate Items:
// - Width 50%
// - Odd: left: 0, padding-right, text-right, align-self: flex-start
// - Even: left: 50%, padding-left, text-left, align-self: flex-end
// We use `w-[calc(50%-1rem)]` to leave space for the center line? Or just w-1/2 and padding.
// Using group to allow point positioning relative to item.
const ALTERNATE_ITEM = `
  w-full md:w-1/2
  md:even:translate-x-full md:even:text-left md:even:pl-8
  md:odd:text-right md:odd:pr-8
  group
`;

export function getTimelineItemClasses({ variant = "vertical", className }: TimelineItemProps): string {
  return twMerge(
    clsx(
      "relative",
      variant === "vertical" && VERTICAL_ITEM,
      variant === "horizontal" && HORIZONTAL_ITEM,
      variant === "alternate" && ALTERNATE_ITEM,
      className
    )
  );
}

// --- POINT ---
export interface TimelinePointProps {
  variant?: TimelineVariant;
  className?: string;
  filled?: boolean;
  icon?: boolean;
}

const BASE_POINT = "absolute flex items-center justify-center rounded-full ring-4 ring-white dark:ring-gray-900 shrink-0 z-10 transition-colors";

export function getTimelinePointClasses({ variant = "vertical", filled = true, icon = false, className }: TimelinePointProps): string {
  // Size Logic
  const sizeClasses = icon ? "w-6 h-6 p-1" : "w-3 h-3";

  // Position Logic
  // Vertical: Centered on the left border (at -3px assuming border is 1px?? No, border is at 0)
  // If Item is ml-6 (24px). Border is at -24px relative to Item.
  // Center of dot (w-3 => 1.5px radius) needs to be at -24px.
  // Left = -24px - 1.5px?? No. Left edge of dot.
  // Let's rely on visual tweaking or exact calc.
  // Flowbite uses `-left-1.5` on the border wrapper, but here we are inside the item.
  // Item `ml-6`. Border is at `-1.5rem` (-24px).
  // Dot center at -24px.
  // Dot Width 12px (w-3). Radius 6px.
  // Left = -24px - 6px = -30px.
  // If Icon (w-6 = 24px). Radius 12px.
  // Left = -24px - 12px = -36px.

  const verticalPosition = icon ? "-left-[36px] top-0" : "-left-[30px] top-1.5";

  // Horizontal: Center on the horizontal line (which is at top-0 of container)
  // The point needs to be centered both horizontally and vertically on the line
  // Using top-0 and -translate-y-1/2 to center the icon/dot on the line
  const horizontalPosition = "left-0 top-0 -translate-y-1/2";

  // Alternate: Center of the screen (container).
  // Odd Item (Left side): Dot needs to be at Right Edge + Spacing?
  // NO. The central line is at the center of the container.
  // Item is 50% width.
  // Odd Item (Left): Right edge is at 50%. Dot center should be there.
  // Even Item (Right): Left edge is at 50% (because of translate-x-full of 50% width item? wait).
  // If Even item is moved by `translate-x-full` from left:0... it starts at 50%.
  // So its Left edge is the center.
  // SO:
  // Odd point: Right edge (-something).
  // Even point: Left edge (-something).
  // simpler: In `alternate`, we can position the dot absolutely relative to the *Container* if possible? No, it's inside Item.
  // CSS Hack:
  // odd: -right-[calc(width/2)] ? No.
  // Let's use `absolute top-0` and specific left/right based on group-odd/even.

  // For alternate: The point needs to be centered on the 50% line
  // Odd items end at 50%, even items start at 50%
  // For a w-3 (12px) dot: center is 6px from edge, so position at -6px from right/left
  // For a w-6 (24px) icon: center is 12px from edge, so position at -12px from right/left
  const alternatePointOffset = icon ? "12px" : "6px";
  const alternatePosition = `
    top-1.5
    md:group-odd:-right-[${alternatePointOffset}]
    md:group-even:-left-[${alternatePointOffset}]
    left-1/2 -translate-x-1/2 md:left-auto md:translate-x-0
  `;

  return twMerge(
    clsx(
      BASE_POINT,
      sizeClasses,
      filled ? "bg-primary text-primary-content" : "bg-base-100 border-2 border-primary",
      variant === "vertical" && verticalPosition,
      variant === "horizontal" && horizontalPosition,
      variant === "alternate" && alternatePosition,
      className
    )
  );
}

// --- CONTENT ---
// No default styling - let users add their own card styles
export function getTimelineContentClasses({ variant = "vertical", className }: { variant?: TimelineVariant, className?: string }): string {
  return twMerge(clsx(className));
}

// --- TIME ---
export function getTimelineTimeClasses({ className }: { className?: string }): string {
  return twMerge(
    clsx(
      "mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500",
      className
    )
  );
}
