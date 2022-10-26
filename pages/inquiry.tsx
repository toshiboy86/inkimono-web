import type { NextPage } from 'next'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';

const Portfolio: NextPage = () => {
  return (
    <Container>
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