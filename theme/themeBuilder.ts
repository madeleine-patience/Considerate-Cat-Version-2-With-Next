import { ThemeOptions, createTheme } from '@mui/material';
import { Lora } from 'next/font/google';

const lora = Lora({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  style: ['normal', 'italic'],
  display: 'swap'
});

const baseOptions: ThemeOptions = {
  typography: {
    fontFamily: lora?.style?.fontFamily || 'Lora',
    fontSize: 16
  },
  palette: {
    pinks: {
      main: '#fcd4ee',
      light: '#fdeef8',
      dark: '#ef6aae',
      contrastText: '#ef6aae',
      contrastLightAAA: '#832A58'
    },
    secondary: {
      main: '#f7f2cd',
      light: '#f7f2cd',
      dark: '#e0dbb1'
    },
    greens: {
      main: '#accca5',
      light: '#add4a5',
      contrastLightAAA: '#283626'
    },
    yellows: {
      light: '#ebdfbe'
    },
    purples: {
      light: '#d1c3d6'
    },
    browns: {
      main: '#9C6E4F'
    }
  },
  spacing: 4
};

export const defaultTheme = createTheme({ ...baseOptions });
