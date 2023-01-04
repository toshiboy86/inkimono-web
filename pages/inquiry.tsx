import Head from 'next/head'
import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import { useLocale } from '../src/hooks/useLocale'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

const email = 'inkimono.com@gmail.com'

const Portfolio: NextPage = () => {
  const { wi18n } = useLocale()

  return (
    <Container>
      <Head>
        <title>{wi18n().t('meta.inquiry_title')}</title>
        <meta property="og:title" content={wi18n().t('meta.inquiry_title')} />
        <meta property="og:description" content={wi18n().t('meta.inquiry_description')} />
        <meta name="twitter:card" content={wi18n().t('meta.inquiry_description')}/>
        <meta property="og:image" content='/wrapper-img.jpg' />
      </Head>
      <Box>
        <Box textAlign={'center'}  mt={4} mb={4}>
          <EmailRoundedIcon></EmailRoundedIcon>
          <Typography variant="body2">Feel free to send message to</Typography>
          <Typography variant="h5">{email}</Typography>
          <Button onClick={() => navigator.clipboard.writeText(email)}>Copy<ContentCopyIcon /></Button>
          <Typography variant="body2">お気軽に上記emailまでご連絡ください。</Typography>
        </Box>
      </Box>
    </Container>
  )
}
export default Portfolio