"use client";

import React from "react";

type Theme = "light" | "dark";

const pillClasses: Record<Theme, string> = {
  light: "bg-brand-light text-brand-orange",
  dark: "bg-white/10 text-brand-orange border border-white/10",
};

interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  subtitle?: string;
  theme?: Theme;
  className?: string;
  centered?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  theme = "light",
  centered = false,
  className = "",
}: SectionHeaderProps) {
  const align = centered ? "text-center mx-auto" : "";
  const titleColor = theme === "dark" ? "text-white" : "text-brand-navy";
  const subtitleColor = theme === "dark" ? "text-gray-400" : "text-gray-600";

  return (
    <div className={`max-w-3xl ${centered ? "mx-auto" : ""} ${className}`.trim()}>
      <div
        className={`inline-block px-3 py-1 rounded-full text-sm font-semibold tracking-wide uppercase mb-4 ${pillClasses[theme]} ${align}`}
      >
        {eyebrow}
      </div>
      <h2 className={`text-3xl md:text-4xl font-bold leading-tight mb-4 ${titleColor} ${align}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${subtitleColor} ${align} ${centered ? "mx-auto" : ""}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
