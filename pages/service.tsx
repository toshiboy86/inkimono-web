import Head from 'next/head'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent';
import Inquiry from '../components/Inquiry'
import ServiceCard from '../components/ServiceCard'
import TopImage from '../components/TopImage'
import { fetchDescriptions, fetchServices, fetchServiceCategories, fetchServiceOptions } from '../src/repositories'
import { lang, useLocale } from '../src/hooks/useLocale'
import { TService } from '../types/'

export async function getServerSideProps() {
  const services = await fetchServices()

  let group_service: Record<string, TService[]> = {}
  services.forEach((e: TService) => {
    if (!group_service[e.fields.serviceCategory.sys.id]) {
      group_service = { ...group_service, [e.fields.serviceCategory.sys.id]: [e] }
    } else {
      group_service[e.fields.serviceCategory.sys.id].push(e)
    }
  })
  
  const categories = await fetchServiceCategories() as TService['fields']['serviceCategory'][]
  const options = await fetchServiceOptions()
  const description = await fetchDescriptions()

  return {
    props: {
      service: group_service,
      category: categories,
      option: options,
      chooseYourPlan: {en: JSON.stringify(description[0].fields.chooseYourPlan_en), ja: JSON.stringify(description[0].fields.chooseYourPlan_ja)},
    }
  }
}

const Service = (props: {
  service: Record<string, TService[]>,
  category: TService['fields']['serviceCategory'][],
  option: { sys: { id: number}, fields: { title: string }}[],
  chooseYourPlan: {
    [K in lang]: string;
  }
}) => {
  const { getCurrentLocale, getWordsOnLocale, wi18n } = useLocale()

  return (
    <div>
      <Head>
        <title>{wi18n().t('meta.service_title')}</title>
        <meta property="og:title" content={wi18n().t('meta.service_title')} />
        <meta property="og:description" content={wi18n().t('meta.service_description')} />
        <meta property="og:image" content='//inkimono.com/img/wrapper-img.jpg' />
        <meta name="twitter:card" content={wi18n().t('meta.service_description')}/>
      </Head>
      <TopImage title='Service' />
      <Container maxWidth="lg">
        <Grid container spacing={1} sx={{ mt: 3 }}>
          <Grid item xs={12} md={7}>
            <Typography variant="h4">
              {wi18n().t('general.about_my_service')}
            </Typography>
            <Box
              sx={{ pt: 3 }}
            >
              <Typography variant="body1" color="text.secondary">
                {wi18n().t('service.about_1')}
                <br /><br />
                {wi18n().t('service.about_2')}
                <br /><br />
                {wi18n().t('service.about_3')}
              </Typography>
              <br />
            </Box>
            <Box mt={4}>
              <Typography variant="h5">
                {wi18n().t('general.quality')}
              </Typography>
              <Box
                sx={{ pt: 3 }}
              >
                <Typography variant="body1" color="text.secondary">
                  {wi18n().t('service.quality_1')}
                  <br />
                  {wi18n().t('service.quality_2')}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Box
              component='img'
              sx={{
                width: '100%',
                'object-fit': 'cover',
                'height': {
                  lg: '700px',
                }
              }}
              src='https://firebasestorage.googleapis.com/v0/b/inkimono-7d929.appspot.com/o/service%2Ftop.JPG?alt=media&token=21f80381-71eb-4fd5-bda8-b13e578d7986'>
            </Box>
          </Grid>
        </Grid>

        <Grid container spacing={1} textAlign='center' sx={{ mt: 3 }}>
          <Grid item>
            <Typography variant="h4">
              {wi18n().t('service.plan_top_1')}
            </Typography>
            <Box
              sx={{ pt: 3 }}
            >
            <Box fontSize={16} color="text.secondary">
              {documentToReactComponents(JSON.parse(props.chooseYourPlan[getCurrentLocale()]))}
            </Box>
            </Box>
          </Grid>
        </Grid>
        {props.category.map((cat) => {
          return (
            <>
            <Typography variant="h5" sx={{ textAlign: 'center', mt: 8, mb: 6 }} key={cat.sys.id}>
              {cat.fields.title}
            </Typography>
            <Grid container spacing={1} sx={{ mt: 3 }} key={cat.sys.id}>
              {props.service[cat.sys.id].map((s) => {
                return (
                  <>
                  <Grid item xs={12} md={4}>
                    <ServiceCard service={s} key={s.fields.title}></ServiceCard>
                  </Grid>
                  </>
                )
              })}
            </Grid>
            </>
          )
        })}
        <Typography variant="h5" sx={{ textAlign: 'center', mt: 8 }}>
          Options
        </Typography>
        <Grid container spacing={1} sx={{ mt: 3 }}>
          <Grid item>
            <CardContent>
              {
                props.option.map((opt) => {
                  return (
                    <Typography paragraph sx={{ borderBottom: '1px solid' }} key={opt.sys.id}>{getWordsOnLocale(opt.fields, 'body')}</Typography>
                  )
                })
              }
            </CardContent>
          </Grid>
        </Grid>
      </Container>
      <Box
        mt={8}
        sx={{
          backgroundImage: `url(//www.inkimono.com/img/slider-bg.jpg)`,
          backgroundColor: 'rgba(48, 37, 37,0.9)',
          backgroundBlendMode: 'multiply',
          'object-fit': 'cover',
          'height': {
            lg: '300px',
          }
        }}>
        <Inquiry></Inquiry>
      </Box>
    </div>
  )
}
export default Service