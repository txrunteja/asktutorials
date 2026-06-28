import React from "react";
import ScrollReveal from "./ScrollReveal";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
  className = "",
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"} ${className}`}
    >
      <h2 className="font-poppins text-heading-lg md:text-display-md text-brand-blue-900 mb-4">
        {title}
      </h2>
      <div
        className={`w-16 h-1 bg-brand-orange-500 rounded-full mb-4 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
      {subtitle && (
        <p className={`text-body-md md:text-body-lg text-gray-600 max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </ScrollReveal>
  );
}
