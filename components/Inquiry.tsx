import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'

const Inquiry = () => {
  return (
    <Container>
      <Box>
        <Box textAlign={'center'} pt={9} sx={{ display: 'table-cell', verticalAlign: 'middle', color: '#f8fffc', fontWeight: '900'}}>
          <Typography variant="h4">
              Inquiry
          </Typography>
          <Box mt={4} mb={4}>
          I can also offer kimono dressing (kitsuke) service, before a party or an event.
          I can do yukata, casual kimono, formal kimono, hakama, furisode, kurotomesode, men’s kimono and hakama, bridal kimono. Hairstyling available.Please inquire!
          </Box>
            <Button variant="contained">Inquiry</Button>
          </Box>
        </Box>
    </Container>
  )
}

export default Inquiry