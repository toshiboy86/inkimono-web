import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Button } from '@mui/material'
import { useLocale } from '../src/hooks/useLocale'

const Inquiry = () => {
  const { wi18n } = useLocale()
  return (
    <Container>
      <Box>
        <Box textAlign={'center'} pt={9} sx={{ display: 'table-cell', verticalAlign: 'middle', color: '#f8fffc', fontWeight: '900'}}>
          <Typography variant="h4">
            {wi18n().t('general.inquiry')}
          </Typography>
          <Box mt={4} mb={4}>
          <p>{wi18n().t('index.inquiry_body_1')}</p>
          <p>{wi18n().t('index.inquiry_body_2')}</p>
          </Box>
            <Button variant="contained">{wi18n().t('general.inquiry')}</Button>
          </Box>
        </Box>
    </Container>
  )
}

export default Inquiry