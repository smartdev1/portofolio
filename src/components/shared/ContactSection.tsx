"use client";

import React from "react";
import { Mail, Phone, Code, ExternalLink, Copy } from "lucide-react";

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
import { usePortfolio } from "@/context/PortfolioContext";
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import type { Locale } from "@/data/portfolioData";

interface PersonalInfo {
  email: string;
  phone: string;
  phoneFormatted: string;
  whatsappUrl: string;
  githubUrl: string;
  linkedinUrl?: string;
}

interface ContactSectionProps {
  locale: Locale;
  personalInfo: PersonalInfo;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  locale,
  personalInfo,
}) => {
  const { triggerToast } = usePortfolio();
  const { copyToClipboard } = useCopyToClipboard(triggerToast);

  const handleCopyEmail = () => {
    copyToClipboard(
      personalInfo.email,
      locale === "fr"
        ? "Email copié dans le presse-papier !"
        : "Email copied to clipboard!",
      true,
      { particleCount: 30, spread: 50, origin: { y: 0.6 } }
    );
  };

  return (
    <div className="flex flex-col items-center text-center py-4">
      <span className="px-3.5 py-1 rounded-full bg-[var(--bg-tag)] border border-[var(--border-primary)] font-mono text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider mb-4">
        {locale === "fr" ? "Prise de Contact" : "Direct Engagement"}
      </span>
      <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-3">
        {locale === "fr"
          ? "Concevons ensemble votre prochain système"
          : "Let's Architect Your Next Mission-Critical System"}
      </h2>
      <p className="text-[var(--text-secondary)] text-sm max-w-lg mx-auto mb-8 leading-relaxed">
        {locale === "fr"
          ? "Disponible pour missions de conception logicielle, consulting d'architecture ou opportunités CDI en lead development."
          : "Available for software architecture contracts, technical consulting, or lead developer full-time roles."}
      </p>

      {/* Contact cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {/* Email */}
        <button
          onClick={handleCopyEmail}
          className="group p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-[var(--border-hover)] hover:shadow-xs transition-all flex flex-col items-center text-center shadow-2xs cursor-pointer"
        >
          <div className="w-10 h-10 rounded-xl bg-[var(--bg-tag-accent)] text-[var(--accent-blue)] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
            <Mail className="w-5 h-5" />
          </div>
          <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
            {locale === "fr" ? "Email Direct" : "Direct Email"}
          </span>
          <span className="text-xs font-mono font-semibold text-[var(--text-primary)] mt-1 break-all">
            {personalInfo.email}
          </span>
          <span className="text-[10px] text-[var(--accent-blue)] mt-1.5 font-mono inline-flex items-center gap-1">
            <Copy className="w-3 h-3" />
            <span>
              {locale === "fr" ? "Cliquer pour copier" : "Click to copy"}
            </span>
          </span>
        </button>

        {/* WhatsApp */}
        <a
          href={personalInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-[var(--border-hover)] hover:shadow-xs transition-all flex flex-col items-center text-center shadow-2xs"
        >
          <div className="w-10 h-10 rounded-xl bg-[var(--bg-tag-accent)] text-[var(--accent-emerald)] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
            <Phone className="w-5 h-5" />
          </div>
          <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
            {locale === "fr" ? "Téléphone / WhatsApp" : "Phone / WhatsApp"}
          </span>
          <span className="text-xs font-mono font-semibold text-[var(--text-primary)] mt-1">
            {personalInfo.phoneFormatted}
          </span>
          <span className="text-[10px] text-[var(--accent-emerald)] mt-1.5 font-mono inline-flex items-center gap-1">
            <ExternalLink className="w-3 h-3" />
            <span>
              {locale === "fr" ? "Ouvrir WhatsApp" : "Open WhatsApp"}
            </span>
          </span>
        </a>

        {/* GitHub */}
        <a
          href={personalInfo.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-[var(--border-hover)] hover:shadow-xs transition-all flex flex-col items-center text-center shadow-2xs"
        >
          <div className="w-10 h-10 rounded-xl bg-[var(--bg-tag)] text-[var(--text-primary)] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
            <Code className="w-5 h-5" />
          </div>
          <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
            GitHub
          </span>
          <span className="text-xs font-mono font-semibold text-[var(--text-primary)] mt-1">
            smartdev1
          </span>
          <span className="text-[10px] text-[var(--accent-blue)] mt-1.5 font-mono inline-flex items-center gap-1">
            <ExternalLink className="w-3 h-3" />
            <span>
              {locale === "fr" ? "Consulter le code" : "View profile"}
            </span>
          </span>
        </a>

        {/* LinkedIn */}
        {personalInfo.linkedinUrl && (
          <a
            href={personalInfo.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group p-5 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-primary)] hover:border-[var(--border-hover)] hover:shadow-xs transition-all flex flex-col items-center text-center shadow-2xs"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--bg-tag-accent)] text-[var(--accent-blue)] flex items-center justify-center mb-2 group-hover:scale-105 transition-transform">
              <LinkedInIcon className="w-5 h-5" />
            </div>
            <span className="font-mono text-[10px] text-[var(--text-muted)] uppercase tracking-wider">
              LinkedIn
            </span>
            <span className="text-xs font-mono font-semibold text-[var(--text-primary)] mt-1">
              Aristide Adouko
            </span>
            <span className="text-[10px] text-[var(--accent-blue)] mt-1.5 font-mono inline-flex items-center gap-1">
              <ExternalLink className="w-3 h-3" />
              <span>
                {locale === "fr" ? "Voir le profil" : "View profile"}
              </span>
            </span>
          </a>
        )}
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href={`mailto:${personalInfo.email}?subject=Collaboration%20Ingénierie%20Logicielle`}
          className="px-6 py-3 rounded-full bg-[var(--bg-pill-active)] text-[var(--text-inverted)] font-mono text-xs font-medium hover:opacity-90 transition-colors shadow-xs"
        >
          {locale === "fr" ? "Envoyer un message formel" : "Send Formal Message"}
        </a>
        <a
          href={personalInfo.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full bg-[var(--bg-card)] border border-[var(--border-primary)] text-[var(--text-primary)] font-mono text-xs font-medium hover:bg-[var(--bg-card-hover)] transition-colors shadow-xs"
        >
          {locale === "fr" ? "Démarrer sur WhatsApp" : "Chat on WhatsApp"}
        </a>
      </div>
    </div>
  );
};
