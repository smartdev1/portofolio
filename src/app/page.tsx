"use client";

import React from "react";
import { PortfolioProvider, usePortfolio } from "@/context/PortfolioContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { CSSHeroCanvas } from "@/components/CSSHeroCanvas";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Footer } from "@/components/Footer";
import { DossierModal } from "@/components/DossierModal";
import { ArchitectureDetailModal } from "@/components/ArchitectureDetailModal";
import { FullPageSections } from "@/components/FullPageSections";
import { Toast } from "@/components/Toast";
import { BottomTabs } from "@/components/BottomTabs";
import { TechCursor } from "@/components/TechCursor";

function PortfolioContent() {
  const { viewMode } = usePortfolio();

  return (
    <div
      className={`min-h-screen w-full bg-[var(--bg-surface)] text-[var(--text-primary)] antialiased tech-grid-pattern relative flex flex-col justify-between overflow-x-hidden ${
        viewMode === "studio" ? "h-screen overflow-hidden" : "h-auto"
      }`}
    >
      <CSSHeroCanvas />
      <Header />
      <Hero />
      {viewMode === "scroll" && <FullPageSections />}
      <Footer />
      {/* Spacer for mobile bottom tabs */}
      <div className="h-20 md:h-0" />
      <DossierModal />
      <ArchitectureDetailModal />
      <Toast />
      <BottomTabs />
      <TechCursor />
    </div>
  );
}

export default function Home() {
  return (
    <ThemeProvider>
      <PortfolioProvider>
        <PortfolioContent />
      </PortfolioProvider>
    </ThemeProvider>
  );
}
