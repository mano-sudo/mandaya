"use client";

import { useCallback, useEffect, useState } from "react";

interface ThemeColors {
  ink: string;
  crimson: string;
  gold: string;
  sea: string;
  cream: string;
  card: string;
}

const PRESETS: { name: string; colors: ThemeColors }[] = [
  {
    name: "Dagmay dawn",
    colors: {
      ink: "#1a1520",
      crimson: "#9b1c31",
      gold: "#c9a227",
      sea: "#1e3a5f",
      cream: "#f4ede1",
      card: "#fffdf8",
    },
  },
  {
    name: "River midnight",
    colors: {
      ink: "#0e1016",
      crimson: "#7a1024",
      gold: "#dcb968",
      sea: "#243b68",
      cream: "#e8dfd3",
      card: "#f6f1ea",
    },
  },
  {
    name: "Highland moss",
    colors: {
      ink: "#172317",
      crimson: "#7f2d3b",
      gold: "#a48c46",
      sea: "#1f3d32",
      cream: "#e9eee2",
      card: "#f7faf4",
    },
  },
];

const DEFAULT_THEME = PRESETS[0].colors;

function applyThemeToDocument(colors: ThemeColors): void {
  const root = document.documentElement;
  root.style.setProperty("--color-ink", colors.ink);
  root.style.setProperty("--color-crimson", colors.crimson);
  root.style.setProperty("--color-gold", colors.gold);
  root.style.setProperty("--color-sea", colors.sea);
  root.style.setProperty("--color-cream", colors.cream);
  root.style.setProperty("--color-card", colors.card);
}

export default function ThemeEditor() {
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState<ThemeColors>(DEFAULT_THEME);

  const apply = useCallback((next: ThemeColors) => {
    setColors(next);
    applyThemeToDocument(next);
  }, []);

  useEffect(() => {
    applyThemeToDocument(colors);
  }, [colors]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent): void => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent): void => {
      const panel = document.getElementById("themePanel");
      const fab = document.getElementById("themeFab");
      if (!panel?.contains(e.target as Node) && e.target !== fab) {
        setOpen(false);
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [open]);

  return (
    <>
      <button
        className="theme-fab"
        id="themeFab"
        type="button"
        title="Color settings"
        aria-controls="themePanel"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        Aa
      </button>
      <div
        className={`theme-panel${open ? " is-open" : ""}`}
        id="themePanel"
        role="dialog"
        aria-label="Color settings"
        aria-hidden={!open}
      >
        <h3>Color settings</h3>
        <p className="fineprint">
          Pick a preset or fine-tune ink, accent, and background colors for easier reading.
        </p>
        <div className="theme-presets">
          {PRESETS.map((preset) => (
            <button
              key={preset.name}
              type="button"
              className="preset"
              onClick={() => apply(preset.colors)}
            >
              {preset.name}
            </button>
          ))}
        </div>
        <div className="theme-row">
          {(
            [
              ["Ink", "ink"],
              ["Crimson", "crimson"],
              ["Gold", "gold"],
              ["Sea", "sea"],
              ["Cream", "cream"],
              ["Card", "card"],
            ] as const
          ).map(([label, key]) => (
            <label key={key}>
              {label}
              <input
                type="color"
                value={colors[key]}
                onChange={(e) => apply({ ...colors, [key]: e.target.value })}
              />
            </label>
          ))}
        </div>
      </div>
    </>
  );
}
