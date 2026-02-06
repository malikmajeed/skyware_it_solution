'use client';

import { forwardRef } from 'react';

export const SecondaryButton = forwardRef(function SecondaryButton(
  {
    children,
    icon: Icon,
    iconPosition = 'right',
    className = '',
    ...props
  },
  ref
) {
  return (
    <div className="inline-block">
      <button
        ref={ref}
        type="button"
        className={`group relative inline-flex items-center justify-center gap-2 whitespace-nowrap px-8 py-3 text-base font-medium text-accent bg-transparent border-[3px] border-accent rounded-lg cursor-pointer transition-all duration-300 ease-in-out  hover:bg-accent/10 hover:text-accent ${className}`}
        {...props}
      >
        {Icon && iconPosition === 'left' && (
          <span className="inline-flex shrink-0">
            <Icon className="w-5 h-5" />
          </span>
        )}
        <span>{children}</span>
        {Icon && iconPosition === 'right' && (
          <span className="inline-flex shrink-0 transition-transform group-hover:translate-x-1">
            <Icon className="w-5 h-5" />
          </span>
        )}
      </button>
    </div>
  );
});

SecondaryButton.displayName = 'SecondaryButton';
export default SecondaryButton;
