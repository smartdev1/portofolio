"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon, Monitor } from "lucide-react";

export const ThemeToggle: React.FC = () => {
  const { theme, cycleTheme } = useTheme();

  const icon =
    theme === "light" ? (
      <Sun className="w-3.5 h-3.5" />
    ) : theme === "dark" ? (
      <Moon className="w-3.5 h-3.5" />
    ) : (
      <Monitor className="w-3.5 h-3.5" />
    );

  const label =
    theme === "light" ? "Light" : theme === "dark" ? "Dark" : "Auto";

  return (
    <button
      onClick={cycleTheme}
      className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-full bg-[var(--bg-pill)] backdrop-blur-md border border-[var(--border-primary)] text-[var(--text-secondary)] text-xs font-mono transition-all hover:border-[var(--border-hover)] shadow-2xs cursor-pointer"
      title={`Theme: ${label}`}
      aria-label={`Switch theme (current: ${label})`}
    >
      {icon}
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
};
