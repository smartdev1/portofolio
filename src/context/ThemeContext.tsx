"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ThemeMode = "system" | "light" | "dark";

interface ThemeContextType {
  theme: ThemeMode;
  resolvedTheme: "light" | "dark";
  setTheme: (t: ThemeMode) => void;
  cycleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function getSystemPreference(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyTheme(resolved: "light" | "dark") {
  document.documentElement.setAttribute("data-theme", resolved);
  document.documentElement.style.colorScheme = resolved;
}

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setThemeState] = useState<ThemeMode>("system");
  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    let stored: ThemeMode = "system";
    try {
      const raw = localStorage.getItem("theme");
      if (raw === "light" || raw === "dark" || raw === "system") stored = raw;
    } catch {}
    setThemeState(stored);

    const resolved = stored === "system" ? getSystemPreference() : stored;
    setResolvedTheme(resolved);
    applyTheme(resolved);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === "system") {
        const resolved = getSystemPreference();
        setResolvedTheme(resolved);
        applyTheme(resolved);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [theme]);

  const setTheme = (t: ThemeMode) => {
    setThemeState(t);
    try {
      localStorage.setItem("theme", t);
    } catch {}
    const resolved = t === "system" ? getSystemPreference() : t;
    setResolvedTheme(resolved);
    applyTheme(resolved);
  };

  const cycleTheme = () => {
    const order: ThemeMode[] = ["system", "light", "dark"];
    const next = order[(order.indexOf(theme) + 1) % order.length];
    setTheme(next);
  };

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, cycleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
};
