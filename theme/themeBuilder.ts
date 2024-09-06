import { ThemeOptions, createTheme } from "@mui/material";
import { Lora } from "next/font/google";

// Load the Lora font
const lora = Lora({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const baseOptions: ThemeOptions = {
  typography: {
    // Conditionally apply the Lora font or fall back to a default font
    fontFamily: lora?.style?.fontFamily || "Lora",
    fontSize: 16,
  },
  palette: {
    pinks: {
      main: "#fcd4ee",
      light: "#fdeef8",
      dark: "#ef6aae",
      contrastText: "#ef6aae",
      contrastLightAAA: "#832A58"
    },
    secondary: {
      main: "#f7f2cd",
      light: "#f7f2cd",
      dark: "#e0dbb1"
    },
    greens: {
      main: "#accca5",
      light: "#add4a5",
      contrastLightAAA: "#283626"
    },
  },
  spacing: 4,
};

export const defaultTheme = createTheme({ ...baseOptions });