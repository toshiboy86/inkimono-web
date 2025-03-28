import dynamic from 'next/dynamic';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { TDescriptionRepository } from '../src/entities/repositories';
import Link from 'next/link';
import { Button } from '@mui/material';
import { TI18n, TLocale } from '../src/entities';
import Article from './Typography/Article';

const MapComponent = dynamic(() => import('./MapCard'), { ssr: false });

const TopIntroduction = (props: {
  description: TDescriptionRepository;
  lang: TLocale;
  i18n: TI18n;
}) => {
  const { lang, i18n } = props;
  const description = JSON.stringify(
    props.description.fields[`aboutme_${lang}`]
  );
  if (!description) throw 'description is not found';

  return (
    <>
      <Article
        imageSrc="/wrapper-img.jpg"
        imageAlt="Stasia self portrait image sitting in the Studio"
      >
        <Grid>
          <Typography variant="h2">About Me</Typography>
          <Box sx={{ pt: 3 }}>
            <Box fontSize={16} color="text.secondary">
              {description &&
                documentToReactComponents(JSON.parse(description))}
            </Box>
          </Box>
        </Grid>
      </Article>

      <Grid container spacing={1} sx={{ mt: 3 }}>
        <Grid item xs={12} md={7}>
          <Typography
            variant="h2"
            sx={{ fontWeight: 400, fontSize: '2.125rem', lineHeight: 1.235 }}
          >
            {i18n['index']['studio_title']}
          </Typography>
          <Box sx={{ pt: 3 }}>
            <Typography variant="body1" color="text.secondary">
              {i18n['index']['studio_me_1']}
            </Typography>
          </Box>
          <Box mt={4} mr={2}>
            <MapComponent />
          </Box>
          <Box mt={6} mb={5} textAlign={'center'}>
            <Link href="/service" locale={lang}>
              <Button variant="contained">
                {i18n['general']['view_service']}
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            component="img"
            sx={{
              width: '100%',
              'object-fit': 'cover',
              height: {
                lg: '700px',
              },
            }}
            alt="Stasia in front of the Studio"
            src="/studio.jpg"
          ></Box>
        </Grid>
      </Grid>
    </>
  );
};

export default TopIntroduction;
