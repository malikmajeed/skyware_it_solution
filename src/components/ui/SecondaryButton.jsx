'use client';

import { forwardRef } from 'react';
import Link from 'next/link';

const buttonClassName = 'group relative inline-flex items-center justify-center gap-2 whitespace-nowrap px-8 py-3 text-base font-medium text-white bg-transparent border-[1px] border-white hover:border-accent rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-accent hover:text-black';

export const SecondaryButton = forwardRef(function SecondaryButton(
  {
    children,
    icon: Icon,
    iconPosition = 'right',
    className = '',
    href,
    ...props
  },
  ref
) {
  const content = (
    <>
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
    </>
  );

  if (href) {
    return (
      <div className="inline-block">
        <Link
          ref={ref}
          href={href}
          className={`${buttonClassName} ${className}`}
          {...props}
        >
          {content}
        </Link>
      </div>
    );
  }

  return (
    <div className="inline-block">
      <button
        ref={ref}
        type="button"
        className={`${buttonClassName} ${className}`}
        {...props}
      >
        {content}
      </button>
    </div>
  );
});

SecondaryButton.displayName = 'SecondaryButton';
export default SecondaryButton;
