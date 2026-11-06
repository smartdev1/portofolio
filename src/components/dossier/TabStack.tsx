"use client";

import React, { useState, useMemo } from "react";
import { Search } from "lucide-react";
import { portfolioData } from "@/data/portfolioData";
import { SkillCard } from "@/components/shared/SkillCard";
import type { Locale } from "@/data/portfolioData";

interface TabStackProps {
  locale: Locale;
}

export const TabStack: React.FC<TabStackProps> = ({ locale }) => {
  const { skillCategories } = portfolioData;
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return skillCategories;
    const q = search.toLowerCase();
    return skillCategories.map((cat) => ({
      ...cat,
      skills: cat.skills.filter((s) => s.toLowerCase().includes(q)),
      featured: cat.featured.filter((s) => s.toLowerCase().includes(q)),
    }));
  }, [skillCategories, search]);

  return (
    <div className="flex flex-col gap-5">
      <div className="relative">
        <Search className="w-4 h-4 text-[var(--text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder={
            locale === "fr"
              ? "Rechercher une technologie (ex: Laravel, Angular, Docker, Python)..."
              : "Search skill or tech (e.g. Laravel, Angular, Docker, Python)..."
          }
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-[var(--bg-input)] border border-[var(--border-primary)] rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)]/20 focus:border-[var(--accent-blue)] font-mono text-[var(--text-primary)]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((cat) => (
          <SkillCard key={cat.id} category={cat} locale={locale} />
        ))}
      </div>
    </div>
  );
};
