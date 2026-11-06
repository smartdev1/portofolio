"use client";

import React from "react";
import { Terminal, Globe, Database, Cpu } from "lucide-react";
import type { SkillCategory, Locale } from "@/data/portfolioData";

interface SkillCardProps {
  category: SkillCategory;
  locale: Locale;
}

const ICON_MAP: Record<string, React.ReactNode> = {
  backend: <Terminal className="w-5 h-5 text-[var(--text-primary)]" />,
  frontend: <Globe className="w-5 h-5 text-[var(--accent-blue)]" />,
  "data-mobile": <Database className="w-5 h-5 text-[var(--accent-emerald)]" />,
  "devops-methods": <Cpu className="w-5 h-5 text-[var(--accent-indigo)]" />,
};

export const SkillCard: React.FC<SkillCardProps> = ({ category, locale }) => {
  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="w-10 h-10 rounded-xl bg-[var(--bg-tag)] border border-[var(--border-primary)] flex items-center justify-center">
            {ICON_MAP[category.id]}
          </div>
          <span className="font-mono text-xs font-semibold text-[var(--text-muted)]">
            {category.code}
          </span>
        </div>
        <h3 className="font-display text-lg font-bold text-[var(--text-primary)] mb-2">
          {category.title[locale]}
        </h3>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-6">
          {category.description[locale]}
        </p>
      </div>

      <div className="pt-4 border-t border-[var(--border-subtle)]">
        <div className="flex flex-wrap gap-1.5 font-mono text-xs">
          {category.featured.map((f) => (
            <span
              key={f}
              className="px-2.5 py-1 rounded-md bg-[var(--bg-pill-active)] text-[var(--text-inverted)] font-medium"
            >
              {f}
            </span>
          ))}
          {category.skills
            .filter((s) => !category.featured.includes(s))
            .map((s) => (
              <span
                key={s}
                className="px-2.5 py-1 rounded-md bg-[var(--bg-tag)] border border-[var(--border-primary)] text-[var(--text-secondary)]"
              >
                {s}
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};
