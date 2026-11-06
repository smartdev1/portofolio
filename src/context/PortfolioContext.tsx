"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { Locale, ProjectItem } from "@/data/portfolioData";

export type TabType =
  | "tab-projets"
  | "tab-stack"
  | "tab-parcours"
  | "tab-formation"
  | "tab-testimonials"
  | "tab-contact";

export type ViewMode = "studio" | "scroll";

interface PortfolioContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  toggleLocale: () => void;
  isModalOpen: boolean;
  openModal: (tab?: TabType) => void;
  closeModal: () => void;
  activeTab: TabType;
  setActiveTab: (t: TabType) => void;
  viewMode: ViewMode;
  setViewMode: (m: ViewMode) => void;
  toggleViewMode: () => void;
  selectedProject: ProjectItem | null;
  setSelectedProject: (p: ProjectItem | null) => void;
  copyToastMessage: string | null;
  triggerToast: (msg: string) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(
  undefined
);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locale, setLocale] = useState<Locale>("fr");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabType>("tab-projets");
  const [viewMode, setViewMode] = useState<ViewMode>("studio");
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [copyToastMessage, setCopyToastMessage] = useState<string | null>(null);

  // Keyboard shortcut support: ESC to close modals, 1-5 to switch tabs
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (selectedProject) {
          setSelectedProject(null);
        } else if (isModalOpen) {
          setIsModalOpen(false);
        }
      }

      if (isModalOpen && !selectedProject && !["INPUT", "TEXTAREA"].includes((e.target as HTMLElement)?.tagName)) {
        if (e.key === "1") setActiveTab("tab-projets");
        if (e.key === "2") setActiveTab("tab-stack");
        if (e.key === "3") setActiveTab("tab-parcours");
        if (e.key === "4") setActiveTab("tab-formation");
        if (e.key === "5") setActiveTab("tab-testimonials");
        if (e.key === "6") setActiveTab("tab-contact");
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, selectedProject]);

  const toggleLocale = () => {
    setLocale((prev) => (prev === "fr" ? "en" : "fr"));
  };

  const toggleViewMode = () => {
    setViewMode((prev) => (prev === "studio" ? "scroll" : "studio"));
  };

  const openModal = (tab?: TabType) => {
    if (tab) {
      setActiveTab(tab);
    }
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const triggerToast = (msg: string) => {
    setCopyToastMessage(msg);
    setTimeout(() => {
      setCopyToastMessage(null);
    }, 2500);
  };

  return (
    <PortfolioContext.Provider
      value={{
        locale,
        setLocale,
        toggleLocale,
        isModalOpen,
        openModal,
        closeModal,
        activeTab,
        setActiveTab,
        viewMode,
        setViewMode,
        toggleViewMode,
        selectedProject,
        setSelectedProject,
        copyToastMessage,
        triggerToast,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error("usePortfolio must be used within a PortfolioProvider");
  }
  return context;
};

