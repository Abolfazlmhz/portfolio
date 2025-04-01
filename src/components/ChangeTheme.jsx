import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./theme";
import App from "../App";
import { createContext } from "react";
import { useMediaQuery } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
export const themeContext = createContext();

function ChangeTheme() {
  const { i18n } = useTranslation();
  const [themeMode, setThemeMode] = useState(null);
  const userTheme = useMediaQuery("(prefers-color-scheme:dark)")
    ? "dark"
    : "light";

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    i18n.changeLanguage(savedLanguage);
    const savedTheme = localStorage.getItem("theme");
    setThemeMode(savedTheme ? savedTheme : userTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = themeMode === "light" ? "dark" : "light";
    setThemeMode(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
      <themeContext.Provider value={{ toggleTheme, themeMode }}>
        <CssBaseline />
        <App />
      </themeContext.Provider>
    </ThemeProvider>
  );
}

export default ChangeTheme;
