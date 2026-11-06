"use client";

import React from "react";
import type { CareerItem, Locale } from "@/data/portfolioData";

interface CareerCardProps {
  career: CareerItem;
  locale: Locale;
}

export const CareerCard: React.FC<CareerCardProps> = ({ career, locale }) => {
  return (
    <div className="p-6 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-3">
          <span
            className={`px-2.5 py-0.5 rounded font-mono text-[10px] font-semibold ${
              career.isCurrent
                ? "bg-[var(--bg-pill-active)] text-[var(--text-inverted)]"
                : "bg-[var(--bg-tag)] text-[var(--text-secondary)] border border-[var(--border-primary)]"
            }`}
          >
            {career.tag[locale]}
          </span>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            {career.period}
          </span>
        </div>
        <h3 className="font-display text-lg font-bold text-[var(--text-primary)]">
          {career.role[locale]}
        </h3>
        <p className="font-mono text-xs text-[var(--accent-blue)] font-semibold mb-3">
          {career.company}
        </p>
        <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
          {career.description[locale]}
        </p>
      </div>

      <div className="pt-3 border-t border-[var(--border-subtle)]">
        <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest block mb-2">
          {locale === "fr" ? "Réalisations Clés" : "Key Milestones"}
        </span>
        <ul className="space-y-1.5">
          {career.achievements[locale].map((item, idx) => (
            <li
              key={idx}
              className="flex items-start gap-2 text-xs text-[var(--text-secondary)]"
            >
              <span className="w-1 h-1 rounded-full bg-[var(--accent-blue)] mt-1.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
