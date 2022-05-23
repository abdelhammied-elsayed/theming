import React, { createContext } from "react";

export const ThemeContext = createContext(null);

export default function ThemeProvider({ theme, children }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
