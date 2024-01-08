import { Container, Box, Typography } from "@mui/material";
import Grid from '@mui/material/Grid'
import CardMedia from '@mui/material/CardMedia'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { TDescriptionRepository } from "../src/entities/repositories";
import Link from 'next/link'
import { Button } from '@mui/material';
import { TI18n, TLocale } from "../src/entities";


const TopIntroduction = (props: 
  {
    description: TDescriptionRepository,
    lang: TLocale
    i18n: TI18n
  }) => {
  const { lang, i18n } = props
  const description = JSON.stringify(props.description.fields[`aboutme_${lang}`])
  if (!description) throw ('description is not found')

  return (
    <>
      <Grid container spacing={1} sx={{ mt: 3 }}>
        <Grid item xs={12} md={7}>
          <Typography variant="h4">
            {i18n['index']['aboutme_title']}
          </Typography>
          <Box
            sx={{ pt: 3 }}
          >
            <Box fontSize={16} color="text.secondary">
              {documentToReactComponents(JSON.parse(description))}
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
            src='/wrapper-img.jpg'>
          </Box>
        </Grid>
      </Grid>
      
      <Grid container spacing={1} sx={{ mt: 3}}>
        <Grid item xs={12} md={7}>
          <Typography
              variant="h4"
            >
              {i18n['index']['studio_title']}
          </Typography>
          <Box sx={{ pt: 3 }}>
            <Typography variant="body1" color="text.secondary">
              {i18n['index']['studio_me_1']}
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
            <Link href='/service' locale={lang}><Button variant="contained">{i18n['index']['view_service']}</Button></Link>
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
    </>
  )
}

export default TopIntroduction