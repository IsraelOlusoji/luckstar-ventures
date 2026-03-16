"use client";

import React from "react";

type SectionVariant = "white" | "navy" | "lightOrange" | "gray";
type PaddingSize = "default" | "large" | "compact";

const variantClasses: Record<SectionVariant, string> = {
  white: "bg-white",
  navy: "bg-brand-navy text-white",
  lightOrange: "bg-brand-light",
  gray: "bg-gray-50",
};

const paddingClasses: Record<PaddingSize, string> = {
  default: "py-16 sm:py-20 md:py-24",
  large: "py-20 sm:py-24 md:py-32",
  compact: "py-12 sm:py-16",
};

interface SectionProps {
  id?: string;
  variant?: SectionVariant;
  padding?: PaddingSize;
  className?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  variant = "white",
  padding = "default",
  className = "",
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${variantClasses[variant]} ${paddingClasses[padding]} ${className}`.trim()}
    >
      {children}
    </section>
  );
}
