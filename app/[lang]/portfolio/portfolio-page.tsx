import { Container } from '@mui/material'
import ImageGrid from '../../../components/ImageGrid'
import TopImage from '../../../components/TopImage'
import { TLocale } from '../../../src/entities'
import { fetchPortfolioImages } from '../../../src/repositories'

export default async function PortfolioPage(params: { lang: TLocale }) {
  const urls = await fetchPortfolioImages()

  return (
    <div>
      <TopImage title='Portfolio' />
      <Container maxWidth="lg">
        <ImageGrid props={{ sx: { backgroundColor: 'black' } }} images={urls} isModal={true}/>
      </Container>
    </div>
  )
}