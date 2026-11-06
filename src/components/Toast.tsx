"use client";

import React from "react";
import { usePortfolio } from "@/context/PortfolioContext";
import { CheckCircle2 } from "lucide-react";

export const Toast: React.FC = () => {
  const { copyToastMessage } = usePortfolio();

  if (!copyToastMessage) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 text-white font-mono text-xs shadow-2xl border border-slate-700 animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
      <span>{copyToastMessage}</span>
    </div>
  );
};

