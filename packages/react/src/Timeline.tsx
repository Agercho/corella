import React, { createContext, useContext, forwardRef } from "react";
import {
  type TimelineVariant,
  getTimelineContainerClasses,
  getTimelineItemClasses,
  getTimelinePointClasses,
  getTimelineContentClasses,
  getTimelineTimeClasses,
} from "@corella/core-ui";

// --- Context ---
const TimelineContext = createContext<{ variant: TimelineVariant }>({ variant: "vertical" });

// --- Timeline Container ---
export interface TimelineProps extends React.HTMLAttributes<HTMLOListElement> {
  variant?: TimelineVariant;
}

const TimelineRoot = forwardRef<HTMLOListElement, TimelineProps>(
  ({ className, variant = "vertical", children, ...props }, ref) => {
    const classes = getTimelineContainerClasses({ variant, className });
    return (
      <TimelineContext.Provider value={{ variant }}>
        <ol ref={ref} className={classes} {...props}>
            {/* Horizontal Line for Horizontal variant */}
            {variant === "horizontal" && (
                <div
                  className="hidden sm:block absolute left-0 right-0 top-0 h-0.5 bg-base-300 pointer-events-none"
                  aria-hidden="true"
                />
            )}

            {/* Central Line for Alternate */}
            {variant === "alternate" && (
                <div
                  className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-base-300 -translate-x-1/2 transform content-[''] pointer-events-none"
                  aria-hidden="true"
                />
            )}

            {/* Mobile fallback for Alternate */}
            {variant === "alternate" && (
              <div
                  className="md:hidden absolute left-4 top-0 bottom-0 w-0.5 bg-base-300 transform content-[''] pointer-events-none"
                  aria-hidden="true"
                />
            )}

            {children}
        </ol>
      </TimelineContext.Provider>
    );
  }
);
TimelineRoot.displayName = "Timeline";

// --- Timeline Item ---
export interface TimelineItemProps extends React.HTMLAttributes<HTMLLIElement> {
}

const TimelineItem = forwardRef<HTMLLIElement, TimelineItemProps>(
  ({ className, children, ...props }, ref) => {
    const { variant } = useContext(TimelineContext);
    const classes = getTimelineItemClasses({ variant, className });

    return (
      <li ref={ref} className={classes} {...props}>
        {children}
      </li>
    );
  }
);
TimelineItem.displayName = "Timeline.Item";

// --- Timeline Point ---
export interface TimelinePointProps extends React.HTMLAttributes<HTMLDivElement> {
  filled?: boolean;
  icon?: React.ReactNode;
}

const TimelinePoint = forwardRef<HTMLDivElement, TimelinePointProps>(
  ({ className, filled = true, icon, children, ...props }, ref) => {
    const { variant } = useContext(TimelineContext);
    const hasIcon = !!icon || !!children;
    const classes = getTimelinePointClasses({ variant, filled, icon: hasIcon, className });

    return (
      <div ref={ref} className={classes} {...props}>
        {icon || children}
      </div>
    );
  }
);
TimelinePoint.displayName = "Timeline.Point";

// --- Timeline Content ---
export interface TimelineContentProps extends React.HTMLAttributes<HTMLDivElement> {}

const TimelineContent = forwardRef<HTMLDivElement, TimelineContentProps>(
  ({ className, children, ...props }, ref) => {
    const { variant } = useContext(TimelineContext);
    const classes = getTimelineContentClasses({ variant, className });

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);
TimelineContent.displayName = "Timeline.Content";

// --- Timeline Time ---
export interface TimelineTimeProps extends React.HTMLAttributes<HTMLTimeElement> {}

const TimelineTime = forwardRef<HTMLTimeElement, TimelineTimeProps>(
  ({ className, children, ...props }, ref) => {
    const classes = getTimelineTimeClasses({ className });
    return (
      <time ref={ref} className={classes} {...props}>
        {children}
      </time>
    );
  }
);
TimelineTime.displayName = "Timeline.Time";

// --- Exports ---
export const Timeline = Object.assign(TimelineRoot, {
  Item: TimelineItem,
  Point: TimelinePoint,
  Content: TimelineContent,
  Time: TimelineTime,
});
