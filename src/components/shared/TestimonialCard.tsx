"use client";

import React from "react";
import type { TestimonialItem, Locale } from "@/data/portfolioData";

interface TestimonialCardProps {
  testimonial: TestimonialItem;
  locale: Locale;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  locale,
}) => {
  return (
    <div className="p-6 sm:p-7 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-2xs hover:shadow-xs transition-shadow flex flex-col justify-between">
      <div>
        <span
          className="block font-display text-4xl leading-none text-[var(--accent-blue)] opacity-40 mb-2 select-none"
          aria-hidden="true"
        >
          &ldquo;
        </span>

        <blockquote className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed italic mb-6">
          {testimonial.quote[locale]}
        </blockquote>
      </div>

      <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[var(--bg-tag)] border border-[var(--border-primary)] flex items-center justify-center font-display text-xs font-bold text-[var(--text-primary)]">
          {testimonial.initials}
        </div>

        <div className="flex-1 min-w-0">
          <p className="font-display text-sm font-bold text-[var(--text-primary)] truncate">
            {testimonial.name}
          </p>
          <p className="font-mono text-[11px] text-[var(--accent-blue)] font-semibold truncate">
            {testimonial.role[locale]} · {testimonial.company}
          </p>
          <p className="font-mono text-[10px] text-[var(--text-muted)] mt-0.5">
            {testimonial.relation[locale]}
          </p>
        </div>
      </div>
    </div>
  );
};
