"use client";

import React from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { portfolioData } from "@/data/portfolioData";
import { ArrowUpRight, Compass, LayoutGrid } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Header: React.FC = () => {
  const {
    locale,
    setLocale,
    openModal,
    viewMode,
    toggleViewMode,
  } = usePortfolio();
  const { personalInfo } = portfolioData;

  return (
    <header className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
      {/* Brand Identity / Logo */}
      <button
        onClick={() => openModal("tab-projets")}
        className="group flex items-center gap-3 text-left focus:outline-none focus:ring-2 focus:ring-[var(--accent-blue)] rounded-xl p-1 -m-1 transition-transform"
        aria-label="Aristide Adouko — Voir dossier"
      >
        <div className="w-9 h-9 rounded-xl bg-[var(--bg-pill-active)] text-[var(--text-inverted)] flex items-center justify-center font-display font-semibold text-xs tracking-wider transition-transform group-hover:scale-105 shadow-sm">
          {personalInfo.initials}
        </div>
        <div className="flex flex-col">
          <span className="font-display text-sm font-bold text-[var(--text-primary)] tracking-tight leading-tight group-hover:text-[var(--accent-blue)] transition-colors">
            Aristide Adouko
          </span>
          <span className="text-[11px] font-medium text-[var(--text-muted)] uppercase tracking-wider font-mono">
            {personalInfo.title[locale]}
          </span>
        </div>
      </button>

      {/* Center Nav Pills (Desktop) */}
      <nav
        aria-label="Navigation principale"
        className="hidden md:flex items-center gap-1 bg-[var(--bg-pill)] backdrop-blur-md p-1 rounded-full border border-[var(--border-primary)] text-xs font-medium shadow-xs"
      >
        <button
          onClick={() => openModal("tab-stack")}
          className="px-4 py-1.5 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tag)] transition-all cursor-pointer font-sans"
        >
          {locale === "fr" ? "Stack" : "Tech Stack"}
        </button>
        <button
          onClick={() => openModal("tab-projets")}
          className="px-4 py-1.5 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tag)] transition-all cursor-pointer font-sans"
        >
          {locale === "fr" ? "Projets" : "Projects"}
        </button>
        <button
          onClick={() => openModal("tab-parcours")}
          className="px-4 py-1.5 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tag)] transition-all cursor-pointer font-sans"
        >
          {locale === "fr" ? "Parcours" : "Career"}
        </button>
        <button
          onClick={() => openModal("tab-formation")}
          className="px-4 py-1.5 rounded-full text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tag)] transition-all cursor-pointer font-sans"
        >
          {locale === "fr" ? "Profil" : "Profile"}
        </button>
      </nav>

      {/* Right Controls */}
      <div className="flex items-center gap-2 sm:gap-3">
        {/* View Mode Toggle (Studio vs Scroll) */}
        <button
          onClick={toggleViewMode}
          title={
            viewMode === "studio"
              ? locale === "fr"
                ? "Basculer en vue page défilante"
                : "Switch to full page scroll mode"
              : locale === "fr"
              ? "Basculer en vue studio interactive"
              : "Switch to interactive studio mode"
          }
          className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[var(--bg-pill)] hover:bg-[var(--bg-card)] text-[var(--text-secondary)] text-xs font-mono border border-[var(--border-primary)] shadow-2xs transition-all hover:border-[var(--border-hover)] cursor-pointer"
        >
          {viewMode === "studio" ? (
            <>
              <Compass className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
              <span>{locale === "fr" ? "Vue Page" : "Page View"}</span>
            </>
          ) : (
            <>
              <LayoutGrid className="w-3.5 h-3.5 text-[var(--accent-emerald)]" />
              <span>{locale === "fr" ? "Mode Studio" : "Studio Mode"}</span>
            </>
          )}
        </button>

        {/* Theme Toggle */}
        <ThemeToggle />

        {/* Language Switcher */}
        <div
          role="group"
          aria-label="Changer de langue"
          className="flex items-center bg-[var(--bg-pill)] backdrop-blur-md rounded-full p-1 border border-[var(--border-primary)] text-xs font-semibold shadow-2xs"
        >
          <button
            onClick={() => setLocale("fr")}
            className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
              locale === "fr"
                ? "bg-[var(--bg-pill-active)] text-[var(--text-inverted)] shadow-xs"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            FR
          </button>
          <button
            onClick={() => setLocale("en")}
            className={`px-2.5 py-0.5 rounded-full transition-all cursor-pointer ${
              locale === "en"
                ? "bg-[var(--bg-pill-active)] text-[var(--text-inverted)] shadow-xs"
                : "text-[var(--text-muted)] hover:text-[var(--text-primary)]"
            }`}
          >
            EN
          </button>
        </div>

        {/* Contact Action Pill */}
        <button
          onClick={() => openModal("tab-contact")}
          className="hidden sm:inline-flex items-center gap-1 px-3.5 sm:px-4 py-2 rounded-full bg-[var(--bg-pill-active)] text-[var(--text-inverted)] text-xs font-medium hover:opacity-90 transition-all shadow-sm cursor-pointer group"
        >
          <span>Contact</span>
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </header>
  );
};
