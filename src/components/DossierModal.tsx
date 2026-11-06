"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { usePortfolio, TabType } from "@/context/PortfolioContext";
import { portfolioData } from "@/data/portfolioData";
import { X } from "lucide-react";
import { TabProjects } from "@/components/dossier/TabProjects";
import { TabStack } from "@/components/dossier/TabStack";
import { TabCareer } from "@/components/dossier/TabCareer";
import { TabEducation } from "@/components/dossier/TabEducation";
import { TabTestimonials } from "@/components/dossier/TabTestimonials";
import { TabContact } from "@/components/dossier/TabContact";

const TABS: { key: TabType; num: string; labelFr: string; labelEn: string; count?: () => number }[] = [
  { key: "tab-projets", num: "01", labelFr: "Projets Phares", labelEn: "Featured Projects", count: () => portfolioData.projects.length },
  { key: "tab-stack", num: "02", labelFr: "Stack & Capacités", labelEn: "Stack & Capacities" },
  { key: "tab-parcours", num: "03", labelFr: "Parcours Pro", labelEn: "Career Milestones", count: () => portfolioData.career.length },
  { key: "tab-formation", num: "04", labelFr: "Formation & Diplômes", labelEn: "Education & Degrees" },
  { key: "tab-testimonials", num: "05", labelFr: "Témoignages", labelEn: "Testimonials", count: () => portfolioData.testimonials.length },
  { key: "tab-contact", num: "06", labelFr: "Prise de Contact", labelEn: "Get In Touch" },
];

function getActiveTabLabel(tab: TabType, locale: "fr" | "en"): string {
  const found = TABS.find((t) => t.key === tab);
  if (!found) return "";
  return locale === "fr" ? found.labelFr : found.labelEn;
}

export const DossierModal: React.FC = () => {
  const {
    isModalOpen,
    closeModal,
    activeTab,
    setActiveTab,
    locale,
  } = usePortfolio();

  const { personalInfo } = portfolioData;
  const [closing, setClosing] = useState(false);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      closeModal();
    }, 350);
  }, [closeModal]);

  if (!isModalOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-title"
      className={`fixed inset-0 z-50 modal-backdrop bg-[var(--modal-overlay)] flex items-end md:items-center justify-center md:p-6 lg:p-8 ${closing ? "macos-modal-closing" : "macos-backdrop"}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className={`relative w-full md:max-w-5xl h-full md:h-auto md:max-h-[92vh] bg-[var(--bg-surface)] md:rounded-3xl border-0 md:border border-[var(--border-primary)] shadow-2xl flex flex-col overflow-hidden ${closing ? "macos-modal-closing" : "macos-modal"}`}>

        {/* ── Mobile Header: compact, just tab name + close ── */}
        <div className="flex md:hidden items-center justify-between px-4 py-3 bg-[var(--bg-elevated)] border-b border-[var(--border-primary)] shrink-0">
          <h3
            id="dossier-title"
            className="font-display text-base font-bold text-[var(--text-primary)] leading-tight"
          >
            {getActiveTabLabel(activeTab, locale)}
          </h3>
          <button
            onClick={handleClose}
            className="w-8 h-8 rounded-full bg-[var(--bg-tag)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            aria-label={locale === "fr" ? "Fermer" : "Close"}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ── Desktop Header: full with avatar + info ── */}
        <div className="hidden md:flex px-8 py-5 bg-[var(--bg-elevated)] border-b border-[var(--border-primary)] items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-[var(--border-primary)] shadow-2xs shrink-0 relative bg-[var(--bg-tag)]">
              <Image
                src={personalInfo.avatarUrl}
                alt={personalInfo.fullName}
                fill
                sizes="40px"
                className="object-cover object-top"
                priority
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold text-[var(--accent-blue)] uppercase tracking-widest">
                  {locale === "fr" ? "Dossier Technique" : "Technical Dossier"}
                </span>
                <span className="w-1 h-1 rounded-full bg-[var(--border-primary)]" />
                <span className="font-mono text-[10px] text-[var(--text-muted)]">
                  Aristide Ghislain Adouko
                </span>
              </div>
              <h3 className="font-display text-lg font-bold text-[var(--text-primary)] leading-tight">
                {locale === "fr"
                  ? "Index d'Ingénierie & Réalisations"
                  : "Engineering Index & Implementations"}
              </h3>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="w-9 h-9 rounded-full bg-[var(--bg-tag)] hover:bg-[var(--bg-card-hover)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
            aria-label={locale === "fr" ? "Fermer le dossier" : "Close dossier"}
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* ── Desktop Tab Bar (hidden on mobile) ── */}
        <div className="hidden md:flex px-8 py-3 bg-[var(--bg-pill)] backdrop-blur-sm border-b border-[var(--border-primary)] flex-wrap gap-2 shrink-0 overflow-x-auto">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 py-1.5 rounded-full font-mono text-xs font-semibold transition-all cursor-pointer whitespace-nowrap ${
                activeTab === tab.key
                  ? "bg-[var(--bg-pill-active)] text-[var(--text-inverted)] shadow-xs"
                  : "text-[var(--text-muted)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tag)]"
              }`}
            >
              {tab.num}. {locale === "fr" ? tab.labelFr : tab.labelEn}
              {tab.count ? ` (${tab.count()})` : ""}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="p-4 sm:p-8 pb-24 md:pb-8 overflow-y-auto custom-scrollbar flex-1">
          {activeTab === "tab-projets" && <TabProjects locale={locale} />}
          {activeTab === "tab-stack" && <TabStack locale={locale} />}
          {activeTab === "tab-parcours" && <TabCareer locale={locale} />}
          {activeTab === "tab-formation" && <TabEducation locale={locale} />}
          {activeTab === "tab-testimonials" && <TabTestimonials locale={locale} />}
          {activeTab === "tab-contact" && <TabContact locale={locale} />}
        </div>
      </div>
    </div>
  );
};
