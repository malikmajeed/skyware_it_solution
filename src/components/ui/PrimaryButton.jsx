'use client';

import { forwardRef } from 'react';

const starSvgProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  xmlSpace: 'preserve',
  viewBox: '0 0 784.11 815.53',
  className: 'w-full h-auto',
};

const StarPath = () => (
  <path
    fill="#F4F6F8"
    d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
  />
);

const starConfigs = [
  { w: 'w-[25px]', top: 'top-[20%]', left: 'left-[20%]', hoverTop: 'group-hover:top-[-80%]', hoverLeft: 'group-hover:left-[-30%]', duration: 'duration-1000' },
  { w: 'w-[15px]', top: 'top-[45%]', left: 'left-[45%]', hoverTop: 'group-hover:top-[-25%]', hoverLeft: 'group-hover:left-[10%]', duration: 'duration-1000' },
  { w: 'w-[5px]', top: 'top-[40%]', left: 'left-[40%]', hoverTop: 'group-hover:top-[55%]', hoverLeft: 'group-hover:left-[25%]', duration: 'duration-1000' },
  { w: 'w-[8px]', top: 'top-[20%]', left: 'left-[40%]', hoverTop: 'group-hover:top-[30%]', hoverLeft: 'group-hover:left-[80%]', duration: 'duration-[800ms]' },
  { w: 'w-[15px]', top: 'top-[25%]', left: 'left-[45%]', hoverTop: 'group-hover:top-[25%]', hoverLeft: 'group-hover:left-[115%]', duration: 'duration-[600ms]' },
  { w: 'w-[5px]', top: 'top-[5%]', left: 'left-[50%]', hoverTop: 'group-hover:top-[5%]', hoverLeft: 'group-hover:left-[60%]', duration: 'duration-[800ms]' },
];

export const PrimaryButton = forwardRef(function PrimaryButton(
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
        className={`group relative inline-flex items-center justify-center gap-2 whitespace-nowrap px-8 py-3 text-base font-medium text-primary bg-accent border-[3px] border-accent rounded-lg cursor-pointer transition-all duration-300 ease-in-out hover:bg-transparent hover:text-accent hover:shadow-[0_0_25px_rgba(0,194,255,0.55)] ${className}`}
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

        {starConfigs.map((star, i) => (
          <div
            key={i}
            aria-hidden
            className={`absolute pointer-events-none -z-[5] group-hover:z-[2] transition-all ease-out ${star.duration} ${star.w} ${star.top} ${star.left} ${star.hoverTop} ${star.hoverLeft} drop-shadow-[0_0_0_#F4F6F8] group-hover:drop-shadow-[0_0_10px_#F4F6F8]`}
          >
            <svg {...starSvgProps}>
              <g><StarPath /></g>
            </svg>
          </div>
        ))}
      </button>
    </div>
  );
});

PrimaryButton.displayName = 'PrimaryButton';
export default PrimaryButton;
