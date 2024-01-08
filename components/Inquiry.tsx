import Link from 'next/link'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import { getDictionary } from '../app/[lang]/dictionaries'
import { TLocale } from '../src/entities'

const Inquiry = async (params: { lang: TLocale }) => {
  const dict = await getDictionary(params.lang)
  return (
    <Container>
      <Box>
        <Box textAlign={'center'} pt={9} sx={{ display: 'table-cell', verticalAlign: 'middle', color: '#f8fffc', fontWeight: '900'}}>
          <Typography variant="h4">
            { dict['translation']['general']['inquiry'] }
          </Typography>
          <Box mt={4} mb={4}>
            { dict['translation']['index']['inquiry_body_1'] }
            { dict['translation']['index']['inquiry_body_2'] }
          </Box>
          <Link href='/inquiry'>
            <Button variant="contained">
              { dict['translation']['general']['inquiry'] }
            </Button>
          </Link>
          </Box>
        </Box>
    </Container>
  )
}

export default Inquiry