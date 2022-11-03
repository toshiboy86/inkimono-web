import type { NextPage } from 'next'
import Link from 'next/link'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import CardMedia from '@mui/material/CardMedia'
import { Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Inquiry from '../components/Inquiry'
import ImageGrid from '../components/ImageGrid'
import { useLocale } from '../src/hooks/useLocale'
import { getRandomImages } from '../src/repositories'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor: 'initial',
}));

export async function getServerSideProps() {
  const urls = await getRandomImages(3)
  return { props: { imageUrls: urls } }
}

const tempMediaImages = [
  'https://firebasestorage.googleapis.com/v0/b/inkimono-7d929.appspot.com/o/media%2FScreenshot%202022-05-21%20at%2020.50.56.png?alt=media&token=f52baaf4-6710-4aa3-a16a-94e11c4f36d9?w=700&h=1000',
  'https://firebasestorage.googleapis.com/v0/b/inkimono-7d929.appspot.com/o/media%2FScreenshot%202022-05-21%20at%2020.51.32.png?alt=media&token=ce54f899-10f8-4fd8-b7b1-20025f5bed71?w=700&h=1000',
  'https://firebasestorage.googleapis.com/v0/b/inkimono-7d929.appspot.com/o/media%2FScreenshot%202022-05-21%20at%2020.53.07.png?alt=media&token=6888132e-76b1-4812-9c6f-89176fa206cb?w=700&h=1000'
]

const Home = (props: { imageUrls: string[] }) => {
  const { getCurrentLocale, wi18n } = useLocale()
  return (
    <div>
      <Box
        sx={{
          backgroundImage: `url(//www.inkimono.com/img/slider-bg.jpg)`,
          'object-fit': 'cover',
          'height': {
            xs: '500px',
            lg: '700px',
          }
        }}>
        <Container>
          <Box>
            <Box textAlign={'center'} pt={9} sx={{ display: 'table-cell', verticalAlign: 'middle', color: '#f8fffc', fontWeight: '900'}}>
            <Box p={1} mt={4} mb={4} sx={{ backgroundColor: 'rgba(48, 37, 37, 0.7)' }}>
              <Typography variant="h4">
                KIMONO STYLING, LECTURE & PHOTOSHOOT
              </Typography>
            </Box>
              <Box p={1} mt={4} mb={4} lineHeight={2} sx={{ backgroundColor: 'rgba(48, 37, 37, 0.7)' }}>
                I can also offer kimono dressing (kitsuke) service, before a party or an event.
                I can do yukata, casual kimono, formal kimono, hakama, furisode, kurotomesode, men’s kimono and hakama, bridal kimono. Hairstyling available. Please inquire!
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Grid container spacing={1} sx={{ mt: 3 }}>
          <Grid item xs={12} md={7}>
            <Typography variant="h4">
                ABOUT ME
            </Typography>
            <Box
              sx={{ pt: 3 }}
            >
              <Typography variant="body1" color="text.secondary">
                abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef
                i.e. Immediately after login to Startrail PORT from ios Safari, visiting to the dashboard page brings you back to login page withoull create the URL that opens the content inside MetaMask browser. However the problem
                abcdefabcdefabcdefabcdef

                abcdefabcdefabcdef
                abcdefabcdefabcdefabcdef
                abcdefabcdef
              </Typography>
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
              src='//inkimono.com/img/wrapper-img.jpg'>
            </Box>
          </Grid>
        </Grid>
        <Grid container spacing={1} sx={{ mt: 3}}>
          <Grid item xs={12} md={7}>
            <Typography
                variant="h4"
              >
                MY STUDIO IN ASAKUSA
            </Typography>
            <Box sx={{ pt: 3 }}>
              <Typography variant="body1" color="text.secondary">
                abcdefabcdefabcdefabcdefabcdefabcdefabcdefabcdef
                i.e. Immediately after login to Startrail PORT from ios Safari, visiting to the dashboard page brings you back to login page withoull create the URL that opens the content inside MetaMask browser. However the problem
                abcdefabcdefabcdefabcdef

                abcdefabcdefabcdef
                abcdefabcdefabcdefabcdef
                abcdefabcdef
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
            src='https://inkimono.com/img/studio.jpg'>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4">
            Portfolio
          </Typography>
          <ImageGrid images={props.imageUrls} props={{ sx: { backgroundColor: 'black' } }} isModal={false}/>
          <Box mt={2} textAlign={'center'}>
            <Link href='/service' locale={getCurrentLocale()}><Button variant="contained">see more portfolo</Button></Link>
          </Box>
        </Box> 
        <Box sx={{ mt: 6 }}>
          <Typography variant="h4">
            Media
          </Typography>
          <ImageGrid images={tempMediaImages} props={{ sx: { backgroundColor: 'black', heigh: '180px' } }} isModal={false} height={400}/>
          <Box mt={2} textAlign={'center'}>
            <Link href='/service' locale={getCurrentLocale()}><Button variant="contained">see more portfolo</Button></Link>
          </Box>
        </Box> 
      </Container>
      <Box
        mt={8}
        sx={{
          backgroundImage: `url(//www.inkimono.com/img/slider-bg.jpg)`,
          backgroundColor: 'rgba(48, 37, 37,0.9)',
          backgroundBlendMode: 'multiply',
          'object-fit': 'cover',
          'height': {
            xs: '300px',
            lg: '300px',
          }
        }}>
        <Inquiry></Inquiry>
      </Box>
    </div>
  )
}
export default Home