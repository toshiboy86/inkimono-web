import '../styles/globals.css'
import Link from 'next/link'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app'
import ResponsiveAppBar from '../components/ResponsiveAppBar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper'
import { useLocale } from '../src/hooks/useLocale'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor: 'initial',
}));

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
});

function MyApp({ Component, pageProps }: AppProps) {
  const { getCurrentLocale } = useLocale()
  return (
    <>
    <ThemeProvider theme={theme}><ResponsiveAppBar/><Component {...pageProps} /></ThemeProvider>
    <Box textAlign={'center'} pt={6} pb={6} sx={{ backgroundColor: '#f5f5f5', width: '100%', marginLeft: 'auto', marginRight: 'auto',}}>
      <Stack direction="row" justifyContent={'center'} spacing={2}>
        <Item><Link href='/' locale={getCurrentLocale()}>About Me</Link></Item>
        <Item><Link href='/service' locale={getCurrentLocale()}>Plans & Pricing</Link></Item>
        <Item><Link href='/inquiry' locale={getCurrentLocale()}>Contact Me</Link></Item>
        <Item><Link href='/portfolio' locale={getCurrentLocale()}>Portfolio</Link></Item>
        <Item><Link href='/faq' locale={getCurrentLocale()}>FAQ</Link></Item>
        
      </Stack>
      <Box mt={4} color={'#919191'}>Copyright © Design & Developed by InKimono. All rights reserved.</Box>
    </Box>
    </>
    )
}

export default MyApp
