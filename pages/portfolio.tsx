import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import ImageGrid from '../components/ImageGrid'
import { fetchPortfolioImages } from '../src/repositories'

export async function getServerSideProps() {
  const urls = await fetchPortfolioImages()
  return { props: { imageUrls: urls } }
}

const Portfolio = (props: { imageUrls: string[] }) => {
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
        <ImageGrid images={props.imageUrls} />
      </Container>
    </div>
  )
}
export default Portfolio