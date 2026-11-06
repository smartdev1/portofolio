"use client";

import React, { useState, useCallback } from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import {
  X,
  Server,
  Cpu,
  CheckCircle2,
  Database,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export const ArchitectureDetailModal: React.FC = () => {
  const { selectedProject, setSelectedProject, locale, openModal } =
    usePortfolio();

  const [closing, setClosing] = useState(false);

  const handleClose = useCallback(() => {
    setClosing(true);
    setTimeout(() => {
      setClosing(false);
      setSelectedProject(null);
    }, 200);
  }, [setSelectedProject]);

  if (!selectedProject) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="architecture-modal-title"
      className={`fixed inset-0 z-60 modal-backdrop bg-[var(--modal-overlay)] flex items-center justify-center p-3 sm:p-6 ${closing ? "macos-modal-closing" : "macos-backdrop"}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <div className={`relative w-full max-w-3xl max-h-[92vh] bg-[var(--bg-card)] rounded-3xl border border-[var(--border-primary)] shadow-2xl flex flex-col overflow-hidden ${closing ? "macos-modal-closing" : "macos-modal"}`}>
        {/* Header */}
        <div className="px-6 py-5 bg-[var(--bg-tag)] border-b border-[var(--border-primary)] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full bg-[var(--bg-tag-accent)] text-[var(--accent-blue)] font-mono text-[10px] font-bold tracking-wider uppercase">
                {locale === "fr"
                  ? "Dossier d'Architecture"
                  : "Architecture Dossier"}
              </span>
              <span className="font-mono text-xs text-[var(--text-muted)]">•</span>
              <span className="font-mono text-xs font-semibold text-[var(--text-secondary)]">
                {selectedProject.organization}
              </span>
            </div>
            <h3
              id="architecture-modal-title"
              className="font-display text-lg sm:text-xl font-bold text-[var(--text-primary)] leading-tight"
            >
              {selectedProject.title}
            </h3>
            <p className="font-mono text-xs text-[var(--accent-blue)] mt-1 font-medium">
              {locale === "fr" ? "Rôle : " : "Role: "}
              {selectedProject.role[locale]} ({selectedProject.period})
            </p>
          </div>

          <button
            onClick={handleClose}
            className="w-9 h-9 rounded-full bg-[var(--bg-card)] hover:bg-[var(--bg-tag)] border border-[var(--border-primary)] flex items-center justify-center text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors shrink-0 shadow-2xs cursor-pointer"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar flex-1 space-y-6">
          {/* Key Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-[var(--bg-tag-accent)] border border-[var(--border-primary)] flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-[var(--accent-blue)] text-white flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[var(--accent-blue)] uppercase font-bold tracking-wider block">
                  {locale === "fr" ? "Métrique Clé" : "Key Metric"}
                </span>
                <span className="font-display text-base font-bold text-[var(--text-primary)]">
                  {selectedProject.metric[locale]}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-[var(--bg-tag)] border border-[var(--border-primary)] flex items-start gap-3">
              <div className="w-8 h-8 rounded-xl bg-[var(--accent-emerald)] text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="font-mono text-[10px] text-[var(--accent-emerald)] uppercase font-bold tracking-wider block">
                  {locale === "fr" ? "Pattern Architectural" : "Design Pattern"}
                </span>
                <span className="font-display text-sm font-bold text-[var(--text-primary)] leading-snug">
                  {selectedProject.architectureDetails.pattern}
                </span>
              </div>
            </div>
          </div>

          {/* Challenge */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Cpu className="w-4 h-4 text-[var(--accent-blue)]" />
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--text-primary)]">
                {locale === "fr"
                  ? "1. Problématique & Contraintes Techniques"
                  : "1. Technical Constraints & Challenge"}
              </h4>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-tag)] p-4 rounded-xl border border-[var(--border-primary)]">
              {selectedProject.architectureDetails.challenge[locale]}
            </p>
          </div>

          {/* Solution */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Server className="w-4 h-4 text-[var(--accent-indigo)]" />
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--text-primary)]">
                {locale === "fr"
                  ? "2. Conception & Implémentation de la Solution"
                  : "2. Solution Design & Architecture"}
              </h4>
            </div>
            <p className="text-sm text-[var(--text-secondary)] leading-relaxed bg-[var(--bg-tag)] p-4 rounded-xl border border-[var(--border-primary)]">
              {selectedProject.architectureDetails.solution[locale]}
            </p>
          </div>

          {/* Database */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Database className="w-4 h-4 text-[var(--accent-emerald)]" />
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--text-primary)]">
                {locale === "fr"
                  ? "3. Persistance & Modélisation des Données"
                  : "3. Persistence & Data Modeling"}
              </h4>
            </div>
            <div className="p-3 bg-[var(--bg-tag)] rounded-xl border border-[var(--border-primary)] font-mono text-xs text-[var(--text-secondary)]">
              {selectedProject.architectureDetails.database}
            </div>
          </div>

          {/* Results */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-emerald)]" />
              <h4 className="font-display text-sm font-bold uppercase tracking-wider text-[var(--text-primary)]">
                {locale === "fr"
                  ? "4. Résultats Concrets en Production"
                  : "4. Quantified Production Outcomes"}
              </h4>
            </div>
            <ul className="space-y-2">
              {selectedProject.architectureDetails.highlights[locale].map(
                (item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[var(--text-secondary)]"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] mt-2 shrink-0" />
                    <span>{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Tech Stack Pills */}
          <div>
            <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-widest block mb-2">
              {locale === "fr"
                ? "Technologies Clés Déployées"
                : "Technologies Deployed"}
            </span>
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {selectedProject.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-[var(--bg-tag)] border border-[var(--border-primary)] text-[var(--text-secondary)] font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-[var(--bg-tag)] border-t border-[var(--border-primary)] flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-xs text-[var(--text-muted)]">
            {locale === "fr"
              ? "Besoin d'un système similaire ?"
              : "Need a similar architecture?"}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                setSelectedProject(null);
                openModal("tab-contact");
              }}
              className="px-4 py-2 rounded-xl bg-[var(--bg-pill-active)] text-[var(--text-inverted)] font-mono text-xs font-semibold hover:opacity-90 transition-colors inline-flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <span>{locale === "fr" ? "Discuter de ce cas" : "Discuss this case"}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={handleClose}
              className="px-4 py-2 rounded-xl bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-secondary)] font-mono text-xs font-semibold hover:bg-[var(--bg-tag)] transition-colors cursor-pointer"
            >
              {locale === "fr" ? "Fermer" : "Close"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
