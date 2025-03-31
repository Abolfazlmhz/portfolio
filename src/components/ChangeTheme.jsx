import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "./theme";
import App from "../App";
import { createContext } from "react";
import { useMediaQuery } from "@mui/material";
export const themeContext = createContext()



function ChangeTheme() {
  const [isDarkMode, setIsDarkMode] = useState(useMediaQuery("(prefers-color-scheme:dark)"));
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  
  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <themeContext.Provider value={{toggleTheme, isDarkMode}}>
        <CssBaseline />
        <App />
      </themeContext.Provider>
    </ThemeProvider>
  );
}

export default ChangeTheme;
