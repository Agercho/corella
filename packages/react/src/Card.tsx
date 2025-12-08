import React, { forwardRef } from "react";
import {
  type CardProps as CoreCardProps,
  type CardSectionProps as CoreCardSectionProps,
  getCardClasses,
  getCardHeaderClasses,
  getCardBodyClasses,
  getCardFooterClasses,
} from "@corella/core-ui";

// --- Card Container ---
export interface CardProps extends React.HTMLAttributes<HTMLDivElement>, CoreCardProps {}

const CardRoot = forwardRef<HTMLDivElement, CardProps>(
  ({ className, bordered, shadow, children, ...props }, ref) => {
    const classes = getCardClasses({ bordered, shadow, className });
    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);
CardRoot.displayName = "Card";

// --- Card Header ---
export interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement>, CoreCardSectionProps {}

const CardHeader = forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, noPadding, children, ...props }, ref) => {
    const classes = getCardHeaderClasses({ className, noPadding });
    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "Card.Header";

// --- Card Body ---
const CardBody = forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, noPadding, children, ...props }, ref) => {
    const classes = getCardBodyClasses({ className, noPadding });
    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);
CardBody.displayName = "Card.Body";

// --- Card Footer ---
const CardFooter = forwardRef<HTMLDivElement, CardSectionProps>(
  ({ className, noPadding, children, ...props }, ref) => {
    const classes = getCardFooterClasses({ className, noPadding });
    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    );
  }
);
CardFooter.displayName = "Card.Footer";

// --- Export as Compound Component ---
export const Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
});
