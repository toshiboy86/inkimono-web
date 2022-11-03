import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import ImageGrid from '../components/ImageGrid'
import { fetchPortfolioImages } from '../src/repositories'
import TopImage from '../components/TopImage'

export async function getServerSideProps() {
  const urls = await fetchPortfolioImages()
  return { props: { imageUrls: urls } }
}

const Portfolio = (props: { imageUrls: string[] }) => {
  return (
    <div>
      <TopImage title='Portfolio' />
      <Container maxWidth="lg">
        <ImageGrid images={props.imageUrls} />
      </Container>
    </div>
  )
}
export default Portfolio