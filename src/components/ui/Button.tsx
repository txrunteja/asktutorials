import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const variantStyles = {
  primary:
    "bg-brand-orange-500 text-white hover:bg-brand-orange-400 hover:shadow-glow-orange active:scale-[0.98] border-2 border-transparent",
  secondary:
    "bg-brand-blue-900 text-white hover:bg-brand-blue-800 active:scale-[0.98] border-2 border-transparent",
  outline:
    "bg-transparent text-brand-blue-900 border-2 border-brand-blue-900 hover:bg-brand-blue-900 hover:text-white active:scale-[0.98]",
};

const sizeStyles = {
  sm: "px-4 py-2 text-body-sm rounded-lg",
  md: "px-6 py-3 text-body-md rounded-xl",
  lg: "px-8 py-4 text-body-lg rounded-xl",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold transition-all duration-200 min-h-[44px] min-w-[44px] focus:outline-none focus:ring-2 focus:ring-brand-orange-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={combinedStyles} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedStyles}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
