import "../styles/style.css";
import { defaultTheme } from "../theme/themeBuilder";
import { ThemeProvider } from "@mui/material";
import { Inter } from "next/font/google";
import { StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const inter = Inter({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledEngineProvider injectFirst>
        <CssBaseline />
        <Component {...pageProps} />{" "}
      </StyledEngineProvider>
    </ThemeProvider>
  );
}
