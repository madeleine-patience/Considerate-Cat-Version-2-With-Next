import { ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { StyledEngineProvider } from "@mui/material/styles";
import "../styles/style.css";
import { defaultTheme } from "../theme/themeBuilder";

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
