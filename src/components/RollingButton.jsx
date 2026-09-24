import React from 'react';

export default function RollingButton({
  children,
  onClick,
  href,
  target,
  className = "",
  variant = "primary", // "primary" | "white" | "outline"
  iconDot = true,
  download = false
}) {
  const baseClasses =
    "group relative overflow-hidden inline-flex items-center justify-center gap-2.5 rounded-full font-medium transition-all duration-300 cursor-pointer shadow-sm";

  const variants = {
    primary:
      "bg-orange-600 hover:bg-orange-700 text-white shadow-orange-600/20 hover:shadow-orange-600/30 px-5 py-2.5 md:py-3 text-sm",
    white:
      "bg-white hover:bg-neutral-100 text-orange-600 hover:text-orange-700 shadow-white/20 px-5 py-2.5 md:py-3 text-sm",
    outline:
      "bg-transparent hover:bg-orange-50 border border-neutral-300 hover:border-orange-500 text-neutral-800 hover:text-orange-600 px-5 py-2.5 md:py-3 text-sm"
  };

  const dotColor = {
    primary: "bg-[#b62809] group-hover:bg-[#f3350c] group-hover:scale-125",
    white: "bg-orange-600 group-hover:bg-orange-700 group-hover:scale-125",
    outline: "bg-orange-600 group-hover:scale-125"
  };

  const content = (
    <>
      <span className="relative inline-flex items-center h-[1.25em] overflow-hidden leading-none tracking-wide">
        <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-[110%]">
          {children}
        </span>
        <span className="absolute left-0 top-full block transition-transform duration-300 ease-out group-hover:-translate-y-[110%]">
          {children}
        </span>
      </span>
      {iconDot && (
        <span className="flex items-center justify-center">
          <span
            className={`block w-1.5 h-1.5 rounded-full transition-all duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
              dotColor[variant] || dotColor.primary
            }`}
          />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        onClick={onClick}
        download={download}
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {content}
    </button>
  );
}
