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
      <Box sx={{ mb: 8 }}>
        <Article
          imageSrc="/wrapper-img.jpg"
          imageAlt="Stasia self portrait image sitting in the Studio"
        >
          <Grid>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 600,
                fontSize: { xs: '1.875rem', md: '2.25rem' },
                lineHeight: 1.3,
                letterSpacing: '-0.025em',
                color: 'oklch(35.9% 0.023 210)',
                mb: 3,
              }}
            >
              About Me
            </Typography>
            <Box sx={{ pt: 2 }}>
              <Box
                sx={{
                  fontSize: 16,
                  color: 'oklch(45.3% 0.026 210)',
                  lineHeight: 1.6,
                  '& p': {
                    mb: 2,
                  },
                }}
              >
                {description &&
                  documentToReactComponents(JSON.parse(description))}
              </Box>
            </Box>
          </Grid>
        </Article>
      </Box>

      <Grid container spacing={4} sx={{ mt: 2 }}>
        <Grid item xs={12} md={7}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 600,
              fontSize: { xs: '1.875rem', md: '2.25rem' },
              lineHeight: 1.3,
              letterSpacing: '-0.025em',
              color: 'oklch(35.9% 0.023 210)',
              mb: 3,
            }}
          >
            {i18n['index']['studio_title']}
          </Typography>
          <Box sx={{ pt: 1, mb: 4 }}>
            <Typography
              variant="body1"
              sx={{
                color: 'oklch(45.3% 0.026 210)',
                lineHeight: 1.6,
                fontSize: '1rem',
              }}
            >
              {i18n['index']['studio_me_1']}
            </Typography>
          </Box>
          <Box
            sx={{
              mb: 4,
              borderRadius: '1.5rem',
              overflow: 'hidden',
              boxShadow:
                '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
            }}
          >
            <MapComponent />
          </Box>
          <Box mt={4} mb={5} textAlign={'center'}>
            <Link href="/service" locale={lang}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: 'oklch(58.2% 0.196 30.2)',
                  color: 'white',
                  borderRadius: '1.5rem',
                  px: 4,
                  py: 1.5,
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  textTransform: 'none',
                  boxShadow:
                    '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  '&:hover': {
                    backgroundColor: 'oklch(51.4% 0.176 30.2)',
                    transform: 'translateY(-1px)',
                    boxShadow:
                      '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  },
                }}
              >
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
              objectFit: 'cover',
              height: {
                xs: '400px',
                md: '500px',
                lg: '600px',
              },
              borderRadius: '1.5rem',
              boxShadow:
                '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
            }}
            alt="Stasia in front of the Studio"
            src="/studio.jpg"
          />
        </Grid>
      </Grid>
    </>
  );
};

export default TopIntroduction;
