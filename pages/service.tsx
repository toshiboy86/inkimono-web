import type { NextPage } from 'next'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Inquiry from '../components/Inquiry'
import ServiceCard from '../components/ServiceCard'
import TopImage from '../components/TopImage'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  backgroundColor: 'initial',
}));

const Service: NextPage = () => {
  return (
    <div>
      <TopImage title='Service' />
      <Container maxWidth="lg">
        <Grid container spacing={1} sx={{ mt: 3 }}>
          <Grid item xs={12} md={7}>
            <Typography variant="h4">
              About My Service
            </Typography>
            <Box
              sx={{ pt: 3 }}
            >
              <Typography variant="body1" color="text.secondary">
              Inspired by the rich world of kimono patterns, fascinating history, colours and tradition, I decided to share my skills and knowledge with others. In November 2018 I created INKIMONO.

              I offer kimono experience with a professional portrait photoshoot on location. I offer personalized styling ― I will choose a full kimono outfit based on your personal style, favorite colours, style, any requests you may have.

              I often add some historical and cultural background of kimono while dressing! I believe that knowing what you wear, where it came from, what’s the story behind it, makes you appreciate it more and get even closer to Japanese culture. With my photoshoots I can also offer hairstyling (done by me) and a makeup option (done by a makeup artist).
              </Typography>
            </Box>
            <Box mt={4}>
              <Typography variant="h5">
                Quality
              </Typography>
              <Box
                sx={{ pt: 3 }}
              >
                <Typography variant="body1" color="text.secondary">
                  I use only authentic, often antique and vintage silk kimono and obi.
                  For portrait photoshoots I use Canon 6 EOS Mark II. I edit photos using Adobe Lightroom Photoshop and provide professionaly edited high resolution images.
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

        <Grid container spacing={1} sx={{ mt: 3 }}>
          <Grid item>
            <Typography variant="h4">
              CHOOSE YOUR PLAN
            </Typography>
            <Box
              sx={{ pt: 3 }}
            >
              <Typography variant="body1" color="text.secondary">
              (for friends, partners etc) based on your personal style, things and colors you like, and any requests you may have.
              Please note that unedited data is not provided under any circumstances -- only edited photos.
              If you'd like to bring your own kimono for the photoshoot -- rates will remain the same.

              I open my schedule for bookings about 6 weeks in advance.
              If you try to book and it shows you there are no available times, it means I am fully booked 6 weeks in advance and haven't opened my next schedule yet.
              If you'd like to get information about schedule openings or pre-bookings, please send an e-mail!
              </Typography>
            </Box>
          </Grid>
        </Grid>
        
        <Typography variant="h5" sx={{ textAlign: 'center', mt: 8 }}>
          KIMONO EXPERIENCE + PHOTOSHOOT
        </Typography>
        <Grid container spacing={1} sx={{ mt: 3 }}>
          <Grid item xs={12} md={4}>
            <ServiceCard></ServiceCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard></ServiceCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard></ServiceCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard></ServiceCard>
          </Grid>
        </Grid>
        <Typography variant="h5" sx={{ textAlign: 'center', mt: 8 }}>
          KIMONO EXPERIENCE + PHOTOSHOOT
        </Typography>
        <Grid container spacing={1} sx={{ mt: 3 }}>
          <Grid item xs={12} md={4}>
            <ServiceCard></ServiceCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard></ServiceCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard></ServiceCard>
          </Grid>
          <Grid item xs={12} md={4}>
            <ServiceCard></ServiceCard>
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
            xs: '300px',
            lg: '300px',
          }
        }}>
        <Inquiry></Inquiry>
      </Box>
    </div>
  )
}
export default Service