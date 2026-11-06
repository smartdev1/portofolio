"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import type { ProjectItem, Locale } from "@/data/portfolioData";

interface ProjectCardProps {
  project: ProjectItem;
  locale: Locale;
  onExplore: (project: ProjectItem) => void;
  compact?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  locale,
  onExplore,
  compact = false,
}) => {
  const radius = compact ? "rounded-2xl" : "rounded-3xl";
  const padding = compact ? "p-5 sm:p-6" : "p-6 sm:p-8";

  return (
    <article
      className={`${padding} ${radius} bg-[var(--bg-card)] border border-[var(--border-primary)] shadow-2xs hover:shadow-md hover:border-[var(--border-hover)] transition-all flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6`}
    >
      <div className="flex-1 space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="px-2.5 py-0.5 rounded-md bg-[var(--bg-tag)] text-[var(--text-primary)] border border-[var(--border-primary)] font-mono text-[10px] sm:text-[11px] font-semibold">
            {project.organization}
          </span>
          <span className="font-mono text-xs text-[var(--text-muted)]">
            {project.period}
          </span>
          <span className="px-2.5 py-0.5 rounded-full bg-[var(--bg-tag-accent)] text-[var(--accent-blue)] font-mono text-[11px] font-semibold">
            {project.category[locale]}
          </span>
        </div>

        <h3 className="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)]">
          {project.title}
        </h3>

        <p className="text-[var(--text-secondary)] text-sm leading-relaxed max-w-3xl">
          {project.description[locale]}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1 font-mono text-xs">
          {project.technologies.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded bg-[var(--bg-tag)] border border-[var(--border-primary)] text-[var(--text-secondary)] text-[11px]"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="shrink-0 flex flex-col items-start lg:items-end gap-3 w-full lg:w-auto pt-4 lg:pt-0 border-t lg:border-t-0 border-[var(--border-subtle)]">
        <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-tag-accent)] border border-[var(--border-primary)] text-[var(--accent-emerald)] font-mono text-xs font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-emerald)]" />
          <span>{project.metric[locale]}</span>
        </div>

        <button
          onClick={() => onExplore(project)}
          className="w-full lg:w-auto px-5 py-2.5 rounded-xl bg-[var(--bg-pill-active)] text-[var(--text-inverted)] text-xs font-medium hover:opacity-90 transition-all inline-flex items-center justify-center gap-2 shadow-2xs cursor-pointer group"
        >
          <span>
            {locale === "fr"
              ? "Explorer l'architecture"
              : "Explore architecture"}
          </span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>
    </article>
  );
};
