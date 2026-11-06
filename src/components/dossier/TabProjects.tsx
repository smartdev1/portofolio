"use client";

import React, { useState, useMemo } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { portfolioData } from "@/data/portfolioData";
import { ProjectCard } from "@/components/shared/ProjectCard";
import type { Locale } from "@/data/portfolioData";

interface TabProjectsProps {
  locale: Locale;
}

export const TabProjects: React.FC<TabProjectsProps> = ({ locale }) => {
  const { setSelectedProject } = usePortfolio();
  const { projects } = portfolioData;

  const [filter, setFilter] = useState("ALL");

  const categories = useMemo(() => {
    const set = new Set<string>();
    projects.forEach((p) => {
      const raw = p.category.fr.toUpperCase().split("&")[0].trim().split(" ")[0];
      set.add(raw);
    });
    return ["ALL", ...Array.from(set)];
  }, [projects]);

  const filtered = useMemo(() => {
    if (filter === "ALL") return projects;
    return projects.filter(
      (p) =>
        p.category.fr.toUpperCase().includes(filter) ||
        p.category.en.toUpperCase().includes(filter)
    );
  }, [projects, filter]);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs font-mono">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-3 py-1 rounded-full border transition-all cursor-pointer whitespace-nowrap ${
              filter === cat
                ? "bg-[var(--bg-pill-active)] text-[var(--text-inverted)] border-[var(--bg-pill-active)]"
                : "bg-[var(--bg-card)] text-[var(--text-secondary)] border-[var(--border-primary)] hover:border-[var(--border-hover)]"
            }`}
          >
            {cat === "ALL"
              ? locale === "fr"
                ? `Tous (${projects.length})`
                : `All (${projects.length})`
              : cat}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {filtered.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            locale={locale}
            onExplore={setSelectedProject}
            compact
          />
        ))}
      </div>
    </div>
  );
};
