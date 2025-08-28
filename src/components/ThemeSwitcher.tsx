// ThemeSwitcher.tsx
import React from "react";
import { useTheme } from "./ThemeContext";

export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="flex cursor-pointer gap-2">
      {/* Sun Icon */}
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 2a1 1 0..." clipRule="evenodd" />
      </svg>

      <input
        type="checkbox"
        className="toggle"
        checked={theme === "forest"}
        onChange={toggleTheme}
      />

      {/* Moon Icon */}
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
        <path d="M17.293 13.293A8 8..." />
      </svg>
    </label>
  );
};
