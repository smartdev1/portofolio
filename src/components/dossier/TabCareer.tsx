"use client";

import React from "react";
import { portfolioData } from "@/data/portfolioData";
import { CareerCard } from "@/components/shared/CareerCard";
import type { Locale } from "@/data/portfolioData";

interface TabCareerProps {
  locale: Locale;
}

export const TabCareer: React.FC<TabCareerProps> = ({ locale }) => {
  const { career } = portfolioData;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {career.map((c) => (
        <CareerCard key={c.id} career={c} locale={locale} />
      ))}
    </div>
  );
};
