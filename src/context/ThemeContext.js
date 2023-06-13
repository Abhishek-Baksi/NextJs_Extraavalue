"use client";

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  const toggle = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ toggle, mode }}>
      <div className={`theme ${mode}`}>{children}</div>
    </ThemeContext.Provider>
  );
};
