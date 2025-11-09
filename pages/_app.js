import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider } from '@mui/material/styles';
import { CustomerProvider } from '../context/CustomerProvider';
import '../styles/style.css';
import { defaultTheme } from '../theme/themeBuilder';

export default function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <CustomerProvider>
          <Component {...pageProps} />
        </CustomerProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
