'use client'
import { Container, Box, Typography, Button } from "@mui/material"
import EmailRoundedIcon from '@mui/icons-material/EmailRounded'
import ContentCopyIcon from '@mui/icons-material/ContentCopy'
import { TLocale } from "../../../src/entities"

export default async function InquiryPage(params: { lang: TLocale }) {
  const email = 'inkimono.com@gmail.com'

  return (
    <Container>
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