'use client';

import { ThemeProvider } from '@mui/material';
import { defaultTheme } from '../theme/themeBuilder';
import CssBaseline from '@mui/material/CssBaseline';
import type { ReactNode } from 'react';

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
