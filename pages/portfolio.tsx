import { GetServerSidePropsContext } from "next/types"
import Head from 'next/head'
import Container from '@mui/material/Container'
import ImageGrid from '../components/ImageGrid'
import { fetchPortfolioImages } from '../src/repositories'
import TopImage from '../components/TopImage'
import { useLocale } from '../src/hooks/useLocale'

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400 maxage=86400, stale-while-revalidate=600'
  )

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
        <meta property="og:image" content='/wrapper-img.jpg' />
      </Head>
      <TopImage title='Portfolio' />
      <Container maxWidth="lg">
        <ImageGrid props={{ sx: { backgroundColor: 'black' } }} images={props.imageUrls} isModal={true}/>
      </Container>
    </div>
  )
}
export default Portfolio