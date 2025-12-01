import React from 'react';
import { getChipClasses } from '@corella/core-ui';

export interface FilterChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  children: React.ReactNode;
}

export function FilterChip({ children, isActive = false, onClick, ...rest }: FilterChipProps) {
  const className = getChipClasses(isActive);

  return (
    <button
      type="button"
      className={className}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}
