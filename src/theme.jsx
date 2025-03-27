import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Vazir, Gandom, sans-serif",
    h1: { fontFamily: "Sahel, Gandom, sans-serif" },
    h2: { fontFamily: "Sahel, Gandom, sans-serif" },
    h3: { fontFamily: "Sahel, Gandom, sans-serif" },
    h4: { fontFamily: "Sahel, Gandom, sans-serif" },
    h5: { fontFamily: "Sahel, Gandom, sans-serif" },
    h6: { fontFamily: "Sahel, Gandom, sans-serif" },
  },
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
      paper: "#f4e1e1",
    },
    primary: {
      main: "#dc004e",
    },
    secondary: {
      main: "#1976d2",
    },
  },
});
export const darkTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Vazir, Gandom, sans-serif",
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
      main: "#dc004e",
    },
    secondary: {
      main: "#1976d2",
    },
  },
});
