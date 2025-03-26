import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: '"Vazir", "Gandom", sans-serif',
    h1: { fontFamily: "Sahel, Gandom, sans-serif" },
    h2: { fontFamily: "Sahel, Gandom, sans-serif" },
    h3: { fontFamily: "Sahel, Gandom, sans-serif" },
    h4: { fontFamily: "Sahel, Gandom, sans-serif" },
    h5: { fontFamily: "Sahel, Gandom, sans-serif" },
    h6: { fontFamily: "Sahel, Gandom, sans-serif" },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});
export const darkTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: '"Vazir", "Gandom", sans-serif',
    h1: { fontFamily: "Sahel, Gandom, sans-serif" },
    h2: { fontFamily: "Sahel, Gandom, sans-serif" },
    h3: { fontFamily: "Sahel, Gandom, sans-serif" },
    h4: { fontFamily: "Sahel, Gandom, sans-serif" },
    h5: { fontFamily: "Sahel, Gandom, sans-serif" },
    h6: { fontFamily: "Sahel, Gandom, sans-serif" },
  },
  palette: {
    mode: "dark",
    background: {
      default: "#323232",
      paper: "#424242",
    },
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});
