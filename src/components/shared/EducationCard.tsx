"use client";

import React from "react";
import { GraduationCap, Layers, Sparkles } from "lucide-react";
import type { EducationItem, Locale } from "@/data/portfolioData";

interface EducationCardProps {
  education: EducationItem;
  locale: Locale;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  "epitech-wecode": <GraduationCap className="w-5 h-5 text-[var(--accent-blue)]" />,
  pigier: <Layers className="w-5 h-5 text-[var(--accent-indigo)]" />,
  bac: <Sparkles className="w-5 h-5 text-[var(--accent-emerald)]" />,
};

export const EducationCard: React.FC<EducationCardProps> = ({
  education,
  locale,
}) => {
  return (
    <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between">
      <div>
        <div className="w-10 h-10 rounded-xl bg-[var(--bg-tag)] border border-[var(--border-primary)] flex items-center justify-center mb-4">
          {ICON_MAP[education.id] ?? (
            <GraduationCap className="w-5 h-5 text-[var(--accent-blue)]" />
          )}
        </div>
        <span className="font-mono text-[11px] text-[var(--text-muted)] font-medium">
          {education.year} · {education.tag[locale]}
        </span>
        <h3 className="font-display text-base font-bold text-[var(--text-primary)] mt-1 mb-1">
          {education.degree[locale]}
        </h3>
        <p className="font-mono text-xs text-[var(--accent-blue)] font-semibold mb-3">
          {education.institution}
        </p>
        <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
          {education.description[locale]}
        </p>
      </div>

      <div className="mt-6 pt-4 border-t border-[var(--border-subtle)]">
        <div className="flex flex-wrap gap-1 font-mono text-[10px]">
          {education.skillsGained.map((sk) => (
            <span
              key={sk}
              className="px-2 py-0.5 rounded bg-[var(--bg-tag)] border border-[var(--border-primary)] text-[var(--text-secondary)]"
            >
              {sk}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
