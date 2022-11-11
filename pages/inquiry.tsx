import Head from 'next/head'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { useLocale } from '../src/hooks/useLocale'

const Portfolio: NextPage = () => {
  const { wi18n } = useLocale()

  return (
    <Container>
      <Head>
        <title>{wi18n().t('meta.inquiry_title')}</title>
        <meta property="og:title" content={wi18n().t('meta.inquiry_title')} />
        <meta property="og:description" content={wi18n().t('meta.inquiry_description')} />
        <meta name="twitter:card" content={wi18n().t('meta.inquiry_description')}/>
      </Head>
      <Box>
        <Box textAlign={'center'}  mt={4} mb={4}>
          <EmailRoundedIcon></EmailRoundedIcon>
          <Typography variant="body2">Feel free to send message to</Typography>
          <Typography variant="h5">inkimono.com@gmail.com</Typography>
          <Typography variant="body2">お気軽に上記emailまでご連絡ください。</Typography>
        </Box>
      </Box>
    </Container>
  )
}
export default Portfolio