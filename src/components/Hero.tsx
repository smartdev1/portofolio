"use client";

import React from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { portfolioData } from "@/data/portfolioData";
import { Layers, Briefcase, Mail, Download } from "lucide-react";

export const Hero: React.FC = () => {
  const { locale, openModal, viewMode } = usePortfolio();
  const { personalInfo, projects } = portfolioData;

  return (
    <main
      id="main-content"
      className={`relative z-20 w-full max-w-5xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center select-text ${
        viewMode === "studio"
          ? "my-auto py-4 sm:py-6 overflow-y-auto"
          : "my-auto py-8 sm:py-12"
      }`}
    >
      {/* Experience Status Pill */}
      <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--bg-pill)] backdrop-blur-md border border-[var(--border-primary)] shadow-2xs transition-all hover:scale-[1.02] hover:border-[var(--border-hover)] ${viewMode === "studio" ? "mb-3" : "mb-6"}`}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-emerald)]"></span>
        </span>
        <span className="font-mono text-xs font-medium text-[var(--text-secondary)] tracking-tight">
          {personalInfo.badge[locale]}
        </span>
      </div>

      {/* Subtitle Greeting */}
      <p className="font-mono text-xs sm:text-sm font-semibold tracking-[0.28em] text-[var(--text-muted)] uppercase mb-3">
        {personalInfo.greeting[locale]}
      </p>

      {/* Massive Typographic Headline */}
      <h1 className="font-display font-bold tracking-tight text-[var(--text-primary)] text-3xl sm:text-5xl md:text-6xl lg:text-[74px] leading-[1.06] max-w-4xl">
        <span>{personalInfo.headlineIntro[locale]}</span>
        <span className="block mt-2 sm:mt-3 text-xl sm:text-3xl md:text-4xl lg:text-[42px] font-semibold text-[var(--text-secondary)]">
          {personalInfo.headlineAlt[locale]}{" "}
          <span className="inline-block mt-2 sm:mt-0 px-4 sm:px-5 py-0.5 sm:py-1 rounded-full bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)] shadow-2xs tracking-normal font-bold hover:border-[var(--accent-blue)] transition-colors">
            {personalInfo.preferredName}
          </span>
        </span>
      </h1>

      {/* Precision Tagline */}
      <p className={`text-base sm:text-lg text-[var(--text-muted)] max-w-2xl font-normal leading-relaxed ${viewMode === "studio" ? "mt-3" : "mt-6"}`}>
        {personalInfo.tagline[locale]}
      </p>

      {/* Action Pills */}
      <div className={`flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-2xl ${viewMode === "studio" ? "mt-4" : "mt-8"}`}>
        <button
          onClick={() => openModal("tab-projets")}
          className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--bg-pill-active)] text-[var(--text-inverted)] text-xs sm:text-sm font-medium hover:opacity-90 transition-all shadow-sm hover:shadow-md cursor-pointer"
        >
          <span>
            {locale === "fr" ? "Voir mes projets" : "Explore my projects"}
          </span>
          <span className="px-2 py-0.5 rounded-full bg-white/20 text-[11px] font-mono font-semibold">
            {projects.length}
          </span>
        </button>

        <button
          onClick={() => openModal("tab-stack")}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--bg-pill)] backdrop-blur-md border border-[var(--border-primary)] text-[var(--text-secondary)] text-xs sm:text-sm font-medium hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all shadow-2xs cursor-pointer"
        >
          <Layers className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
          <span>
            {locale === "fr" ? "Stack & Capacités" : "Tech Stack & Skills"}
          </span>
        </button>

        <button
          onClick={() => openModal("tab-parcours")}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--bg-pill)] backdrop-blur-md border border-[var(--border-primary)] text-[var(--text-secondary)] text-xs sm:text-sm font-medium hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all shadow-2xs cursor-pointer"
        >
          <Briefcase className="w-3.5 h-3.5 text-[var(--accent-indigo)]" />
          <span>
            {locale === "fr" ? "Mon parcours & CV" : "Career & Timeline"}
          </span>
        </button>

        <button
          onClick={() => openModal("tab-contact")}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--bg-pill)] backdrop-blur-md border border-[var(--border-primary)] text-[var(--text-secondary)] text-xs sm:text-sm font-medium hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all shadow-2xs cursor-pointer"
        >
          <Mail className="w-3.5 h-3.5 text-[var(--accent-emerald)]" />
          <span>
            {locale === "fr" ? "Me contacter" : "Get in touch"}
          </span>
        </button>

        {personalInfo.cvUrl && (
          <a
            href={personalInfo.cvUrl}
            download
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--bg-pill)] backdrop-blur-md border border-[var(--border-primary)] text-[var(--text-secondary)] text-xs sm:text-sm font-medium hover:bg-[var(--bg-card)] hover:text-[var(--text-primary)] hover:border-[var(--border-hover)] transition-all shadow-2xs"
          >
            <Download className="w-3.5 h-3.5 text-[var(--accent-blue)]" />
            <span>{locale === "fr" ? "Télécharger CV" : "Download CV"}</span>
          </a>
        )}
      </div>

      {/* Quick helper shortcuts */}
      <div className="hidden sm:flex items-center gap-3 mt-6 text-[11px] font-mono text-[var(--text-muted)]">
        <span>
          <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-secondary)] shadow-2xs text-[10px]">
            1-6
          </kbd>{" "}
          {locale === "fr" ? "onglets rapides" : "quick tabs"}
        </span>
        <span>•</span>
        <span>
          <kbd className="px-1.5 py-0.5 rounded bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-secondary)] shadow-2xs text-[10px]">
            ESC
          </kbd>{" "}
          {locale === "fr" ? "fermer" : "close"}
        </span>
      </div>
    </main>
  );
};
