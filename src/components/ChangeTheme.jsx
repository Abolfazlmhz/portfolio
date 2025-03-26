import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { lightTheme, darkTheme } from "../theme";
import App from "../App";
import { Button } from "@mui/material";

function ChangeTheme() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Button variant="outlined" color="secondary" onClick={toggleTheme}>
        {isDarkMode ? "تم روز" : "تم شب"}
      </Button>
      <App />
    </ThemeProvider>
  );
}

export default ChangeTheme;
