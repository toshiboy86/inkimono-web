import { GetServerSidePropsContext } from "next/types"
import Head from 'next/head'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import LocationCard from '../components/LocationCard'
import TopImage from '../components/TopImage'
import { fetchDescriptions, fetchLocation, fetchLocations } from '../src/repositories'
import { lang, useLocale } from '../src/hooks/useLocale'
import { TLocation } from '../types'

export type TLocations = {
  fields: {
    title_en: string
    title_ja: string
    description_en: { content: [{content: [{value: string}]}] },
    description_ja: { content: [{content: [{value: string}]}] },
    main_image: {
      fields: {
        file: {
          url: string
        }
      }
    }
  }
  sys: {
    id: number
  }
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400 maxage=86400, stale-while-revalidate=600'
  )

  const locations = await fetchLocations()
  const location = await fetchLocation()
  const description = await fetchDescriptions()

  return {
    props: {
      locations,
      location,
      chooseYourPlan: {en: JSON.stringify(description[0].fields.chooseYourPlan_en), ja: JSON.stringify(description[0].fields.chooseYourPlan_ja)},
    }
  }
}

const Location = (props: {
  locations: any,
  location: any,
  chooseYourPlan: {
    [K in lang]: string;
  }
}) => {
  const { getCurrentLocale, getWordsOnLocale, wi18n } = useLocale()
  
  return (
    <div>
      <Head>
        <title>{wi18n().t('meta.location_title')}</title>
        <meta property="og:title" content={wi18n().t('meta.location_title')} />
        <meta property="og:description" content={wi18n().t('meta.location_description')} />
        <meta property="og:image" content='/wrapper-img.jpg' />
        <meta name="twitter:card" content={wi18n().t('meta.location_description')}/>
      </Head>
      <TopImage title='Location' />
      <Container maxWidth="lg">
        <Grid container spacing={1} textAlign='center' sx={{ mt: 3 }}>
          <Grid item>
            <Box
              sx={{ pt: 3 }}
            >
            <Box fontSize={16} color="text.secondary">
              {getWordsOnLocale(props.location[0].fields, 'description').content.map((f: any) => f.content.map((e: any) => e.value).map((e: any) => e)).join('')}
            </Box>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ mt: 3 }} >
          {props.locations.map((loc: any) => {
            return (
              <>
              <Grid item xs={12} md={6}>
                <LocationCard location={loc} key={getWordsOnLocale(loc.fields, 'title')}></LocationCard>
              </Grid>
              </>
            )
          })}
        </Grid>

      </Container>
      
    </div>
  )
}
export default Location