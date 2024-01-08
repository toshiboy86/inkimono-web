'use client'
import '../../styles/globals.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ResponsiveAppBar from "../../components/ResponsiveAppBar"
import { TLocale } from '../../src/entities';

const theme = createTheme({
  typography: {
    body1: {
      fontSize: '1rem',
      lineHeight: '1.9',
    }
  },
  palette: {
    primary: {
      main: '#bbac9d',
    },
  },
})

export default function CreateTheme(params: { lang: TLocale }) {
  const { lang } = params
  return (
    <ThemeProvider theme={theme} >
      <ResponsiveAppBar lang={lang} />
    </ThemeProvider>
  )
}