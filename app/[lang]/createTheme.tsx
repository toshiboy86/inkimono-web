'use client';

import '../../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from '../../components/ResponsiveAppBar';
import { TLocale } from '../../src/entities';

const theme = createTheme({
  typography: {
    body1: {
      fontSize: '1rem',
      lineHeight: '1.9',
    },
    h2: {
      fontWeight: 500,
      fontSize: '2.125rem',
      lineHeight: 1.235,
    },
  },
  palette: {
    primary: {
      main: '#bbac9d',
    },
  },
});

export default function CreateTheme(params: {
  lang: TLocale;
  children: React.ReactNode;
}) {
  const { lang, children } = params;
  return (
    <ThemeProvider theme={theme}>
      <ResponsiveAppBar lang={lang} />
      {children}
    </ThemeProvider>
  );
}
