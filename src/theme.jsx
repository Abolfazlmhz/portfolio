import { createTheme } from "@mui/material/styles";

export const lightTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "Gandom,Sahel,Vazir sans-serif",
  },
  palette: {
    mode: "light",
    background: {
      default: "#ffffff",
      paper: "#f4e1e1",
    },
    primary: {
      main: "#da0e56",
    },
    secondary: {
      main: "#3f65b6",
    },
  },
});
export const darkTheme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: " Gandom,Sahel,Vazir, sans-serif",
  },
  palette: {
    mode: "dark",
    background: {
      default: "#323232",
      paper: "#444545",
    },
    primary: {
      main: "#18b8d1",
    },
    secondary: {
      main: "#da0e56",
    },
  },
});
