"use client";

import React from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
}) => {
  return (
    <div className="mb-10">
      <div className="flex items-center gap-2 mb-2">
        <span className="w-2 h-2 rounded-full bg-[var(--accent-blue)]" />
        <span className="font-mono text-xs font-bold text-[var(--accent-blue)] uppercase tracking-widest">
          {label}
        </span>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-[var(--text-secondary)] text-sm mt-2 max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
};
