"use client";

import React from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import type { TabType } from "@/context/PortfolioContext";
import {
  FolderKanban,
  Layers,
  Briefcase,
  MessageSquareQuote,
  Mail,
} from "lucide-react";

const TABS: {
  tab: TabType;
  labelFr: string;
  labelEn: string;
  icon: React.ReactNode;
}[] = [
  {
    tab: "tab-projets",
    labelFr: "Projets",
    labelEn: "Projects",
    icon: <FolderKanban className="w-5 h-5" />,
  },
  {
    tab: "tab-stack",
    labelFr: "Stack",
    labelEn: "Stack",
    icon: <Layers className="w-5 h-5" />,
  },
  {
    tab: "tab-parcours",
    labelFr: "Parcours",
    labelEn: "Career",
    icon: <Briefcase className="w-5 h-5" />,
  },
  {
    tab: "tab-testimonials",
    labelFr: "Avis",
    labelEn: "Reviews",
    icon: <MessageSquareQuote className="w-5 h-5" />,
  },
  {
    tab: "tab-contact",
    labelFr: "Contact",
    labelEn: "Contact",
    icon: <Mail className="w-5 h-5" />,
  },
];

export const BottomTabs: React.FC = () => {
  const { locale, openModal, isModalOpen, activeTab } = usePortfolio();

  return (
    <nav
      aria-label={locale === "fr" ? "Navigation mobile" : "Mobile navigation"}
      className={`fixed bottom-0 inset-x-0 md:hidden ${isModalOpen ? "z-[60]" : "z-40"}`}
    >
      <div className="mx-2 mb-2 rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border-primary)] shadow-lg backdrop-blur-xl">
        <div className="flex items-stretch justify-around">
          {TABS.map((item) => {
            const isActive = isModalOpen && activeTab === item.tab;
            return (
              <button
                key={item.tab}
                onClick={() => openModal(item.tab)}
                className={`flex-1 flex flex-col items-center gap-0.5 py-2.5 active:scale-95 transition-all cursor-pointer ${
                  isActive
                    ? "text-[var(--accent-blue)]"
                    : "text-[var(--text-muted)]"
                }`}
              >
                <span className="transition-colors">{item.icon}</span>
                <span className="text-[10px] font-medium font-mono leading-tight">
                  {locale === "fr" ? item.labelFr : item.labelEn}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Safe area spacer for iOS */}
      <div className="h-[env(safe-area-inset-bottom,0px)] bg-transparent" />
    </nav>
  );
};
