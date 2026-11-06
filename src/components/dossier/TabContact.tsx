"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { ContactSection } from "@/components/shared/ContactSection";
import type { Locale } from "@/data/portfolioData";

interface TabContactProps {
  locale: Locale;
}

export const TabContact: React.FC<TabContactProps> = ({ locale }) => {
  const { personalInfo } = portfolioData;

  return <ContactSection locale={locale} personalInfo={personalInfo} />;
};
