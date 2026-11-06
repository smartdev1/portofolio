"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { EducationCard } from "@/components/shared/EducationCard";
import type { Locale } from "@/data/portfolioData";

interface TabEducationProps {
  locale: Locale;
}

export const TabEducation: React.FC<TabEducationProps> = ({ locale }) => {
  const { education } = portfolioData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
      {education.map((edu) => (
        <EducationCard key={edu.id} education={edu} locale={locale} />
      ))}
    </div>
  );
};
