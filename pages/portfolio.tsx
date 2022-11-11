import Head from 'next/head'
import Container from '@mui/material/Container'
import ImageGrid from '../components/ImageGrid'
import { fetchPortfolioImages } from '../src/repositories'
import TopImage from '../components/TopImage'
import { useLocale } from '../src/hooks/useLocale'

export async function getServerSideProps() {
  const urls = await fetchPortfolioImages()
  return { props: { imageUrls: urls } }
}

const Portfolio = (props: { imageUrls: string[] }) => {
  const { wi18n } = useLocale()

  return (
    <div>
      <Head>
        <title>{wi18n().t('meta.portfolio_title')}</title>
        <meta property="og:title" content={wi18n().t('meta.portfolio_title')} />
        <meta property="og:description" content={wi18n().t('meta.portfolio_description')} />
        <meta name="twitter:card" content={wi18n().t('meta.portfolio_description')}/>
      </Head>
      <TopImage title='Portfolio' />
      <Container maxWidth="lg">
        <ImageGrid images={props.imageUrls} />
      </Container>
    </div>
  )
}
export default Portfolio