import Link from 'next/link'
import Head from 'next/head'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import InstagramIcon from '@mui/icons-material/Instagram'
import Facebook from '@mui/icons-material/Facebook'
import Twitter from '@mui/icons-material/Twitter'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import { Button } from '@mui/material';
import Inquiry from '../components/Inquiry'
import ImageGrid from '../components/ImageGrid'
import { lang, useLocale } from '../src/hooks/useLocale'
import { getRandomImages } from '../src/repositories'
import { fetchDescriptions } from '../src/repositories'


export async function getServerSideProps() {
  const urls = await getRandomImages(3)
  const description = await fetchDescriptions()
  return { props: { imageUrls: urls, aboutMe: {en: JSON.stringify(description[0].fields.aboutme_en), ja: JSON.stringify(description[0].fields.aboutme_ja)}, description } }
}

const tempMediaImages = [
  'https://firebasestorage.googleapis.com/v0/b/inkimono-7d929.appspot.com/o/media%2FScreenshot%202022-05-21%20at%2020.50.56.png?alt=media&token=f52baaf4-6710-4aa3-a16a-94e11c4f36d9?w=700&h=1000',
  'https://firebasestorage.googleapis.com/v0/b/inkimono-7d929.appspot.com/o/media%2FScreenshot%202022-05-21%20at%2020.51.32.png?alt=media&token=ce54f899-10f8-4fd8-b7b1-20025f5bed71?w=700&h=1000',
  'https://firebasestorage.googleapis.com/v0/b/inkimono-7d929.appspot.com/o/media%2FScreenshot%202022-05-21%20at%2020.53.07.png?alt=media&token=6888132e-76b1-4812-9c6f-89176fa206cb?w=700&h=1000'
]

const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  boxShadow: 'none',
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const Home = (props: { imageUrls: string[], aboutMe: {
    [K in lang]: string;
  } }) => {
  const { getCurrentLocale, wi18n } = useLocale()
  return (
    <div>
      <Head>
        <title>{wi18n().t('meta.title')}</title>
        <meta property="og:title" content={wi18n().t('meta.title')} />
        <meta property="og:description" content={wi18n().t('meta.description')} />
        <meta property="og:image" content='/wrapper-img.jpg' />
        <meta name="twitter:card" content={wi18n().t('meta.description')}/>
      </Head>
      <Box
        sx={{
          backgroundImage: `url(//www.inkimono.com/slider-bg.jpg)`,
          'object-fit': 'cover',
          'height': {
            xs: 'auto',
            lg: '700px',
          }
        }}>
        <Container>
          <Box>
            <Box textAlign={'center'} pt={9} sx={{ display: 'table-cell', verticalAlign: 'middle', color: '#f8fffc', fontWeight: '900'}}>
            <Box p={1} mt={4} mb={4} sx={{ backgroundColor: 'rgba(48, 37, 37, 0.7)' }}>
              <Typography variant="h4">
                {wi18n().t('index.top_title')}
              </Typography>
            </Box>
              <Box p={1} mt={4} mb={4} lineHeight={2} sx={{ backgroundColor: 'rgba(48, 37, 37, 0.7)' }}>
                {wi18n().t('index.about_top')}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={1} sx={{ mt: 3 }}>
          <Grid item xs={12} md={7}>
            <Typography variant="h4">
              {wi18n().t('index.about_title')}
            </Typography>
            <Box
              sx={{ pt: 3 }}
            >
              <Box fontSize={16} color="text.secondary">
                {documentToReactComponents(JSON.parse(props.aboutMe[getCurrentLocale()]))}
              </Box>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                spacing={{ xs: 1, sm: 2, md: 4 }}
              >
                <Item><a target='_blank' rel="noreferrer" href='https://instagram.com/stasia.matsumoto'><Box><InstagramIcon /><Box>@stasia.matsumoto</Box></Box></a></Item>
                <Item><a target='_blank' rel="noreferrer" href='https://www.instagram.com/inkimono'><Box><InstagramIcon /><Box>@InKimono</Box></Box></a></Item>
                <Item><a target='_blank' rel="noreferrer" href='https://www.facebook.com/profile.php?id=100010395427461'><Box><Facebook /><Box>@stasia.matsumoto</Box></Box></a></Item>
                <Item><a target='_blank' rel="noreferrer" href='https://twitter.com/inkimono1'><Box><Twitter /><Box>@inkimono1</Box></Box></a></Item>
              </Stack>
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
              src='/wrapper-img.jpg'>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ mt: 3}}>
          <Grid item xs={12} md={7}>
            <Typography
                variant="h4"
              >
              {wi18n().t('index.studio_title')}
            </Typography>
            <Box sx={{ pt: 3 }}>
              <Typography variant="body1" color="text.secondary">
                {wi18n().t('index.studio_me_1')}
              </Typography>
            </Box>
            <Box mt={4} mr={2}>
              <CardMedia
                component='iframe'
                image='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12957.077060825!2d139.8002235!3d35.7195958!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xf0811fa9b89cd301!2sinKIMONO!5e0!3m2!1sja!2sjp!4v1641210479819!5m2!1sja!2sjp'
                height={300}
                sx={{ border: 0 }}
              ></CardMedia>
            </Box>
            <Box mt={6} mb={5} textAlign={'center'}>
              <Link href='/service' locale={getCurrentLocale()}><Button variant="contained">{wi18n().t('general.view_service')}</Button></Link>
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
            src='/studio.jpg'>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4">
            {wi18n().t('general.portfolio')}
          </Typography>
          <ImageGrid images={props.imageUrls} props={{ sx: { backgroundColor: 'black' } }} isModal={false}/>
          <Box mt={2} textAlign={'center'}>
            <Link href='/portfolio' locale={getCurrentLocale()}><Button variant="contained">{wi18n().t('general.see_portfolio')}</Button></Link>
          </Box>
        </Box> 
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4">
            {wi18n().t('index.about_media')}
          </Typography>
          <ImageGrid images={tempMediaImages} props={{ sx: { backgroundColor: 'black', heigh: '180px' } }} isModal={false} height={400}/>
          <Box mt={2} textAlign={'center'}>
            <Link href='/service' locale={getCurrentLocale()}><Button variant="contained">{wi18n().t('general.view_service')}</Button></Link>
          </Box>
        </Box> 
      </Container>
      <Box
        mt={8}
        sx={{
          backgroundImage: `url(//www.inkimono.com/slider-bg.jpg)`,
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
export default Home