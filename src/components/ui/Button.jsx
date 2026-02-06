import { forwardRef } from 'react';

export const Button = forwardRef(function Button(
  { className = '', variant = 'default', size = 'md', children, ...props },
  ref
) {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    default: 'bg-accent text-primary hover:bg-accent/90 shadow-sm hover:shadow-md',
    outline: 'border-2 border-secondary text-neutral-light hover:bg-secondary/20 hover:border-accent',
    ghost: 'text-neutral-dark hover:bg-neutral-light'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  };

  return (
    <button
      ref={ref}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;
