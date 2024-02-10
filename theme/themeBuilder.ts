import { ThemeOptions, createTheme } from "@mui/material";
import { Lora } from "next/font/google";

const lora = Lora({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const baseOptions: ThemeOptions = {
  typography: {
    fontFamily: lora.style.fontFamily,
  },
  palette: {
    primary: {
      main: "#fcd4ee",
      light: "#fdeef8",
      dark: "#ef6aae",
    },
    secondary: {
      main: "#f7f2cd",
      light: "#f7f2cd",
      dark: "#e0dbb1",
    },
  },
  spacing: 4,
};

export const defaultTheme = createTheme({ ...baseOptions });
