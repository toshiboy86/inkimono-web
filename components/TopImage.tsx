import type { FC } from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

const TopImage: FC<{title: string}> = ({ title }) => {
  return (
    <Box
        sx={{
          backgroundImage: `url(//www.inkimono.com/img/slider-bg.jpg)`,
          'object-fit': 'cover',
          'height': {
            xs: '300px',
            lg: '350px',
          }
        }}>
        <Container>
          <Box>
            <Box textAlign={'center'} pt={18} sx={{ verticalAlign: 'middle', color: '#f8fffc', fontWeight: '900'}}>
              <Box sx={{ backgroundColor: 'rgba(48, 37, 37, 0.7)' }}>
                <Typography variant="h4">
                  {title}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
  )
}

export default TopImage