import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import ImageGrid from '../components/ImageGrid'

const tempImages = [
  'https://images.ctfassets.net/ofubuqdlqhhx/4fkQlqZy9BLuco0Bs9kD4T/3f46ed1c5d3587c635dfad97c676cfb0/IMG_3084.jpg?w=700&h=1000',
  'https://images.ctfassets.net/ofubuqdlqhhx/6xIdA4q6Zny74jF0dAoyeC/200887b6f8c2e2e40008d0ff7d56de3b/IMG_3483.jpg?w=700&h=1000',
  'https://images.ctfassets.net/ofubuqdlqhhx/7AftOo5oh0mGD44ITtxZMT/651559ed5c63598ea5dac534d183141c/IMG_1518.jpg?w=700&h=1000',
  'https://images.ctfassets.net/ofubuqdlqhhx/6xIdA4q6Zny74jF0dAoyeC/200887b6f8c2e2e40008d0ff7d56de3b/IMG_3483.jpg?w=700&h=1000',
  'https://images.ctfassets.net/ofubuqdlqhhx/2eTBQr8uFFbNXoIv8TZqK/d9e696ae5ae403931149e18f91aa4f78/IMG_8828.jpg?w=700&h=1000'
]

const Portfolio: NextPage = () => {
  return (
    <div>
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
                  Portfolio
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <ImageGrid images={tempImages} />
      </Container>
    </div>
  )
}
export default Portfolio